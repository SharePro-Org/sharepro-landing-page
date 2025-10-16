import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
  const healthData = {
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "sharepro-landing-page",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime(),
    memory: {
      used: process.memoryUsage().heapUsed,
      total: process.memoryUsage().heapTotal,
    },
    checks: {
      server: "healthy",
    },
  };

  return new Response(JSON.stringify(healthData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
};