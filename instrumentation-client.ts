import posthog from "posthog-js";
import { siteName } from "./app/site-metadata";

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const posthogAppEnvironment =
  process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV ?? "development";

function getAppProperties() {
  return {
    app_name: siteName,
    app_host: window.location.hostname,
    app_env: posthogAppEnvironment,
  };
}

if (posthogToken) {
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
} else if (process.env.NODE_ENV !== "production") {
  console.warn(
    "PostHog is disabled because NEXT_PUBLIC_POSTHOG_TOKEN is not set.",
  );
}
