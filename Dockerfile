# Use Node.js 20 Alpine as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactapp

# Install serve globally for serving static files
RUN npm install -g serve

# Create a minimal package.json for Dokku compatibility
RUN echo '{ \
  "name": "sharepro-landing", \
  "version": "1.0.0", \
  "engines": { \
    "node": ">=20.0.0" \
  }, \
  "scripts": { \
    "start": "serve -s public -l $PORT" \
  } \
}' > package.json

# Copy built application
COPY --from=builder /app/build/client ./public

# Change ownership to reactapp user
RUN chown -R reactapp:nodejs /app

USER reactapp

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application using npm start
CMD ["npm", "start"]