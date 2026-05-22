<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side via the Next.js 15.3+ instrumentation API, with a reverse proxy host, exception capture enabled, and debug mode in development.
- **`next.config.ts`** (edited): Added `/ingest` reverse proxy rewrites for PostHog static assets and event ingestion, plus `skipTrailingSlashRedirect: true`.
- **`.env.local`** (new): Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`components/ExploreBtn.tsx`** (edited): Added `posthog.capture('explore_events_clicked')` inside the existing `onClick` handler.
- **`components/EventCard.tsx`** (edited): Added `'use client'` directive and `posthog.capture('event_card_clicked', { title, slug, location, date })` via an `onClick` handler on the Link.

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' button on the homepage to scroll to the events section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to navigate to the event detail page (properties: title, slug, location, date) | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1614233)
- [Explore Events clicks over time](/insights/4FxYJNN8)
- [Event card clicks over time](/insights/HWBPS8kM)
- [Homepage to Event exploration — Explore vs Click comparison](/insights/jhj8NFoa)
- [Most clicked events (breakdown by title)](/insights/LX67b8YQ)
- [Total event card clicks — last 30 days](/insights/iPxsOqxr)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
