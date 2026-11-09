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
    address: "Cambridge, MA",
    positions: ("Senior Software Engineer", "AI Platform"),
  ),
  profile-picture: none,
  show-footer: false,
  show-address-icon: true,
  paper-size: "us-letter",
  description: "Viraj Parikh, Senior Software Engineer resume",
  keywords: ("LLM evaluation", "AI platform", "backend", "distributed systems"),
)

// Tighter than the package defaults so everything fits on one page.
#show heading.where(level: 1): set block(above: 0.85em, below: 0.5em)
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
  Backend engineer, four years at HubSpot. I spent the first two on Calling infrastructure (Java, Kafka, MySQL, Twilio webhooks at 1M+ requests a day) and the last two on AI, now on Agent Quality, building HubSpot's in-house LLM evaluation and observability platform for hundreds of agents. Currently also interim manager for a team of seven.
]

= Experience

#resume-entry(title: "HubSpot", location: "Cambridge, MA and Remote", date: "2026 – present", description: "Senior Software Engineer II, Agent Quality")
#items[
  #note[Also interim engineering manager for 7 engineers since September 2026, while still shipping code.]
  - Built HubSpot's in-house LLM evaluation and observability platform, now used to evaluate and monitor hundreds of agents. Evals run from an agent's own codebase or from a UI I built most of, with any tool or external call mockable.
  - Teams define a task and an agent, then kick off sweeps across models, configurations, reasoning levels, and prompt variants in one go. Results plot a Pareto frontier of quality against cost and latency, so teams can see which model or prompt actually wins.
  - Built skill evals, skill grading, and skill linting for agent skills and tools, plus CI/CD workflows that show developers how their tools and skills are holding up on every change.
  - Built a topic classifier that auto-labels production traces into product categories, and analysis views that show agent owners where their agent does badly.
  - Built an inbox that proactively proposes fixes to agent owners. Its main job turns real production traces into new eval cases.
]

#role("Senior Software Engineer, Generative AI Platform", "Jan 2025 – 2026")
#items[
  - Helped design and ship company-wide OpenTelemetry tracing for AI calls, carrying context across API requests, async jobs, Kafka consumers, and SQS queues. It became the data the eval platform runs on.
  - Built the first-generation prompt tooling: A/B testing with p-value analysis, prompt replay, automated prompt tuning, and a UI-driven eval engine.
]

#role("Senior Software Engineer, Calling", "Aug 2023 – Dec 2024")
#items[
  - Cut a 150GB MySQL audit table by 90%, ending about 6 Vitess incidents a year.
  - Built a rate-limited leasing service for shared test phone numbers. Test runs went up 12x and test costs dropped 50%.
  - Owned backend design for call holds, transfers, and coaching.
]

#role("Software Engineer, Calling", "Aug 2022 – Aug 2023")
#items[
  - Migrated Twilio webhook handling (1M+ requests a day) and led a vendor-agnostic conference calling platform on Kafka and MySQL.
]

= Projects
#items[
  - *ForkFolio* (#link("https://github.com/virajxp1/forkfolio")[github.com/virajxp1/forkfolio]): recipe app with an LLM pipeline that cleans, extracts, dedupes, and embeds recipes for semantic search. Next.js, FastAPI, Postgres with pgvector, Braintrust tracing.
  - *Auto Browse* (#link("https://github.com/virajxp1/auto-browse")[github.com/virajxp1/auto-browse]): Python browser agent where a LangGraph planner drives Playwright.
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
#resume-entry(title: "The University of Texas at Austin", location: "Austin, TX", date: "Aug 2018 – May 2022", description: "B.S. Electrical and Computer Engineering, GPA 3.8")
