// Resume source, modern-cv (Awesome-CV port) look. Build with ./build.sh
// Rules from the critique pass:
//   - No internal product, project, or vendor names. Describe what the thing does.
//   - Job titles stay clean for scanners; promotions go in a note under the role.
//   - Bullets vary in length and shape. No semicolon chains, no "specializing in".
#import "@preview/modern-cv:0.10.0": *

#show: resume.with(
  author: (
    firstname: "Viraj",
    lastname: "Parikh",
    email: "virajxp1@gmail.com",
    homepage: "https://bare-necessities.studio",
    github: "virajxp1",
    linkedin: "vhparikh",
    positions: ("Senior Software Engineer", "AI Platform", "Cambridge, MA"),
  ),
  profile-picture: none,
  show-footer: false,
  paper-size: "us-letter",
  description: "Viraj Parikh, Senior Software Engineer resume",
  keywords: ("LLM evaluation", "AI platform", "backend", "distributed systems"),
)

// Tighter than the package defaults so everything fits on one page.
#show heading.where(level: 1): set block(above: 0.7em, below: 0.45em)
// Later roles at the same company: role + dates only, same style as resume-entry's second line.
#let role(title, dates) = block(above: 0.9em, below: 0.65em, sticky: true, secondary-justified-header(title, dates))
#let note(body) = text(size: 9pt, style: "italic", fill: rgb("#5d5d5d"), body)
#let items(body) = resume-item[
  #set text(size: 9.6pt)
  #set par(leading: 0.5em)
  #set list(spacing: 0.5em)
  #body
]

= Summary
#items[
  Backend engineer with four years at HubSpot. I started on Calling infrastructure (Java, Kafka, MySQL, Twilio webhooks at 1M+ requests a day) and moved to AI in 2025. Today I lead work on HubSpot's in-house LLM evaluation and observability platform: eval sweeps that chart quality against cost and latency, skill testing in CI/CD, and a tracing pipeline that takes in hundreds of millions of traces a day.
]

= Experience

#resume-entry(title: "HubSpot", location: "Cambridge, MA and Remote", date: "Aug 2026 – present", description: "Senior Software Engineer II, Agent Quality")
#items[
  #note[Also interim engineering manager for 7 engineers since September 2026, while still shipping code.]
  - Lead development of HubSpot's in-house LLM evaluation and observability platform, now evaluating and monitoring hundreds of agents. Evals run from an agent's own codebase or from a UI I wrote most of, with any tool or external call mockable.
  - Designed eval sweeps: teams define a task and an agent, then test models, configurations, reasoning levels, and prompt variants in one run. Results plot a Pareto frontier of quality against cost and latency, so teams can see which model or prompt actually wins.
  - Run continuous scoring of live agent traffic: about 350K scores a day from LLM judges, fast System 1 models, and code-based scorers, feeding dashboards and regression alerts.
  - Shipped skill evals, grading, and linting for agent skills and tools, wired into CI/CD to check every change.
  - Created a topic classifier that sorts production traces by product area, with views showing where each agent struggles.
  - Added per-conversation cost analysis that finds where prompt caching breaks and prices what each break costs.
  - Launched an inbox that proactively proposes fixes to agent owners, mostly by turning real production traces into new eval cases.
  - Scaled the trace pipeline underneath to hundreds of millions of traces a day with 90-day retention, covering storage, distributed tracing, and export. Also own trace access control and sensitive-data redaction.
]

#role("Senior Software Engineer, Generative AI Platform", "Jan 2025 – Jul 2026")
#items[
  - Helped design company-wide OpenTelemetry tracing for AI calls, carrying context across API requests, async jobs, Kafka, and SQS.
  - Wrote first-gen prompt tooling: A/B tests with p-values, prompt replay, automated prompt tuning, and a UI eval engine.
]

#role("Senior Software Engineer, Calling", "Aug 2023 – Dec 2024")
#items[
  - Stabilized a critical calling database with recurring outages: cut its 550GB audit table by 90% and ended about 6 incidents a year.
  - Designed a rate-limited leasing service for shared test phone numbers. Test runs went up 12x and test costs dropped 50%.
  - Owned backend design for call holds, transfers, and coaching.
  - Moved call recordings onto in-house storage with a 1-year retention policy, projected to save \$100K+.
  - Fed live call transcripts and customer runbooks into RAG for real-time call suggestions.
]

#role("Software Engineer, Calling", "Aug 2022 – Aug 2023")
#items[
  - Migrated Twilio webhook handling (1M+ requests a day) and led a vendor-agnostic conference calling platform on Kafka and MySQL.
]

= Projects
#items[
  - *ForkFolio* (#link("https://github.com/virajxp1/forkfolio")[github.com/virajxp1/forkfolio]): recipe app that turns any URL or pasted text into a structured recipe. An LLM pipeline cleans, extracts, dedupes, and embeds each one for semantic search. Next.js, FastAPI, Postgres with pgvector, Braintrust.
  - *Auto Browse* (#link("https://github.com/virajxp1/auto-browse")[github.com/virajxp1/auto-browse]): Python browser agent where a LangGraph planner drives Playwright.
  - *Tiffin* (in progress): homemade-food marketplace with timed listings, atomic inventory, and pickup codes. React Native, Supabase.
]

= Leadership
#resume-entry(title: "Raas All-Stars", location: "National nonprofit", date: "2023 – 2025", description: "Executive Board Member")
#items[
  - Help run the 501(c)(3) behind the national collegiate Raas and Garba dance circuit and its championship. Liaison to college teams.
]

= Skills
#items[
  #grid(columns: (5.5em, 1fr), row-gutter: 0.6em,
    [*Languages*], [Java, Python, TypeScript, SQL, React, Next.js, React Native],
    [*Backend*], [Distributed systems, Kafka, MySQL, Vitess, Postgres, AWS (SQS), Hadoop, FastAPI, REST APIs, CI/CD],
    [*AI*], [LLM evaluation, eval sweeps, LLM-as-judge, agent skills, RAG, OpenTelemetry, Braintrust, LangGraph],
  )
]

= Education
#resume-entry(title: "The University of Texas at Austin", location: "Austin, TX", date: "Aug 2018 – May 2022", description: "B.S. Electrical and Computer Engineering, GPA 3.8. Captain, Texas Raas (1st nationally 2022, 2nd 2019)")
