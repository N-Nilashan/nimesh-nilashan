import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://77b26a50913570c80c40619af4ab8ed9@o4508669871718400.ingest.us.sentry.io/4508680673820672",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: true,
});