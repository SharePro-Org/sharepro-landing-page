import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/help-support", "routes/helpSupport.tsx"),
    route("/privacy-policy", "routes/privacyPolicy.tsx"),
    route("/terms-of-use", "routes/termsOfUse.tsx"),
    route("/tutorials", "routes/tutorials.tsx"),
    route("/health", "routes/health.tsx"),
] satisfies RouteConfig;
