import posthog from "posthog-js";
import { siteName } from "./app/site-metadata";

const posthogToken = "phc_ApXgcUDQgbUF7oFBWW3d2DtFbFvHKeE3estJyaoxcLVS";
const posthogHost = "https://us.i.posthog.com";

function getAppEnvironment(hostname: string) {
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "local";
  }

  if (hostname === "bare-necessities.studio" || hostname === "www.bare-necessities.studio") {
    return "production";
  }

  return "preview";
}

function getAppProperties() {
  return {
    app_name: siteName,
    app_host: window.location.hostname,
    app_env: getAppEnvironment(window.location.hostname),
  };
}

try {
  posthog.init(posthogToken, {
    api_host: posthogHost,
    defaults: "2026-01-30",
    loaded: (client) => {
      client.register(getAppProperties());
    },
  });
} catch (error) {
  if (process.env.NODE_ENV !== "production") {
    console.error("Failed to initialize PostHog", error);
  }
}
