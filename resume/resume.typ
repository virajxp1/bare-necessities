// Resume source. Build with ./build.sh
// Rules from the critique pass:
//   - No internal product, project, or vendor names. Describe what the thing does.
//   - Job titles stay clean for scanners; promotions go in the role note.
//   - Bullets vary in length and shape. No semicolon chains, no "specializing in".
#import "template.typ": *
#show: resume

#header(
  name: "Viraj Parikh",
  tagline: "Senior Software Engineer, AI Platform",
  contacts: (
    [#fa(0xf0e0) #link("mailto:virajxp1@gmail.com")[virajxp1\@gmail.com]],
    [#fa(0xf0ac) #link("https://bare-necessities.studio")[bare-necessities.studio]],
    [#fa(0xf08c, brand: true) #link("https://www.linkedin.com/in/vhparikh/")[linkedin.com/in/vhparikh]],
    [#fa(0xf09b, brand: true) #link("https://github.com/virajxp1")[github.com/virajxp1]],
    [#fa(0xf3c5) Cambridge, MA],
  ),
)

#section("Summary")
Backend engineer, four years at HubSpot. I spent the first two on Calling infrastructure (Java, Kafka, MySQL, Twilio webhooks at 1M+ requests a day) and the last two building HubSpot's in-house LLM evaluation and observability platform, which now covers hundreds of agents. Currently also interim manager for a team of seven.

#section("Experience")
#role(title: "Interim Engineering Manager, AI Platform", org: "HubSpot", dates: "Sep 2026 – present", place: "Remote")[
  - Managing 7 engineers while still writing code on the eval platform.
]
#divider()
#role(
  title: "Senior Software Engineer, AI Platform", org: "HubSpot", dates: "Jan 2025 – present", place: "Remote",
  note: "Promoted to Senior Software Engineer II in September 2026. Generative AI Platform team, then Agent Quality.",
)[
  - Built HubSpot's in-house LLM evaluation and observability platform, now used to evaluate and monitor hundreds of agents. Teams run it from code or from a UI I built most of.
  - Teams define a task and an agent, then kick off sweeps across models, configurations, and prompt variants in one go. Results plot a Pareto frontier of quality against cost and latency, so teams can see which model, config, or prompt tweak actually wins.
  - Built skill evals, skill grading, and skill linting for agent skills and tools, plus CI/CD workflows that show developers how their tools and skills are holding up on every change.
  - Built a topic classifier that auto-labels production traces into product categories, and analysis views that show agent owners where their agent does badly.
  - Built an inbox that proactively proposes fixes to agent owners. Its main job turns real production traces into new eval cases.
  - Helped design and ship company-wide OpenTelemetry tracing for AI calls, carrying context across API requests, async jobs, Kafka consumers, and SQS queues. This is the data the whole platform runs on.
  - Earlier: prompt A/B testing with p-value analysis, prompt replay, and automated prompt tuning.
]
#divider()
#role(
  title: "Senior Software Engineer, Calling", org: "HubSpot", dates: "Aug 2023 – Dec 2024", place: "Cambridge, MA",
  note: "Promoted from Software Engineer in August 2023.",
)[
  - Cut a 150GB MySQL audit table by 90%. It had caused about 6 Vitess incidents a year. Those stopped.
  - Replaced 12-hour test cycles with a leasing service for a shared pool of Twilio test numbers. Distributed rate limiting keeps one failing test from draining the pool. Test runs went up 12x, test costs dropped 50%, and all of Calling adopted it.
  - Owned backend design for call holds, transfers, and coaching on a push-based, asynchronous call-control system.
  - Reworked call-recording storage with Hadoop backfills and a 1-year retention policy, projected to save \$100K+ in storage.
  - Worked with data science to feed live call transcripts and customer runbooks into RAG for live call suggestions.
]
#divider()
#role(title: "Software Engineer, Calling", org: "HubSpot", dates: "Aug 2022 – Aug 2023", place: "Cambridge, MA")[
  - Migrated Twilio webhook handling (1M+ requests a day) to a new service and added the metrics and alerting it was missing.
  - Led a vendor-agnostic conference calling platform built on webhooks, Kafka, REST, and MySQL.
]

#section("Projects")
- *ForkFolio* (#link("https://github.com/virajxp1/forkfolio")[github.com/virajxp1/forkfolio]): recipe app with an LLM pipeline that cleans, extracts, dedupes, and embeds recipes for semantic search. Next.js, FastAPI, Postgres with pgvector, Braintrust tracing.
- *Auto Browse* (#link("https://github.com/virajxp1/auto-browse")[github.com/virajxp1/auto-browse]): Python browser agent where a LangGraph planner drives Playwright.

#section("Skills")
#grid(
  columns: (5.2em, 1fr),
  row-gutter: 0.55em,
  align: (left + horizon, left),
  [*Languages*], tags("Java", "Python", "TypeScript", "SQL", "React", "Next.js", "React Native"),
  [*Backend*], tags("Distributed systems", "Kafka", "MySQL", "Vitess", "Postgres", "AWS (SQS)", "Hadoop", "FastAPI", "REST APIs", "CI/CD"),
  [*AI*], tags("LLM evaluation", "Eval sweeps", "LLM-as-judge", "Agent skills", "RAG", "OpenTelemetry", "Braintrust", "LangGraph"),
)

#section("Education")
#text(size: 10.4pt, weight: "bold")[B.S. Electrical and Computer Engineering], The University of Texas at Austin #h(0.5em) #text(fill: muted)[·] #h(0.5em) GPA 3.8 #h(1fr) #text(size: 8.8pt, fill: muted)[#fa(0xf133, solid: false) Aug 2018 – May 2022]
