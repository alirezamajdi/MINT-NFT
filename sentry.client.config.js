import * as Sentry from '@sentry/nextjs';
const sentryDSN = process.env.NEXT_PUBLIC_SENTRY_DNS;

if (Boolean(sentryDSN)) {
  Sentry.init({
    dsn: sentryDSN,
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  });
}
