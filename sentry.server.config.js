import * as Sentry from '@sentry/nextjs';
import { Integrations } from '@sentry/tracing';

const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';
const sentryDSN = process.env.NEXT_PUBLIC_SENTRY_DNS;

if (Boolean(sentryDSN)) {
  Sentry.init({
    dsn: sentryDSN,
    enabled: !isLocal,
    environment: process.env.NEXT_PUBLIC_ENV,
    integrations: [
      new Integrations.BrowserTracing({
        // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
          process.env.NEXT_PUBLIC_BASE_URL,
          /^https:\/\/yourserver\.io\/api/,
        ],
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}
