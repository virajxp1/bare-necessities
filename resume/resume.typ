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
    positions: ("Senior Software Engineer II", "AI Platform", "Texas (Remote)"),
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
  Backend engineer with four years at HubSpot. I started on Calling infrastructure (Java, Kafka, MySQL, Twilio webhooks at 1M+ requests a day), moved to AI in 2025 to build tracing that now captures every LLM call at HubSpot, and today drive Agent Quality: systems that proactively alert teams when quality slips and help their agents get substantially better at finishing customers' tasks.
]

= Experience

#resume-entry(title: "HubSpot", location: "Cambridge, MA and Remote", date: "Aug 2026 – Present", description: "Senior Software Engineer II, Agent Quality")
#items[
  - Brought HubSpot's AI quality tooling from single-shot prompts into the agentic era, replacing the first-generation platform.
  - Built a harness-agnostic agent evaluation platform with decoupled datasets and tool mocking, used by 54 teams on 84 components.
  - Gave teams model and prompt sweeps over their own test cases, generating Pareto frontiers of quality vs. cost and latency.
  - Launched LLM-as-a-judge scoring as a product, sampling production traces with Python scorers and classifiers: 889 judges, 315K scores a day, and a baseline judge that gives 5,200+ components (44%) a quality signal by default.
  - Shipped skill evals, grading, and linting with CI/CD gates that block bad builds on 16 agents, including the 3 highest-traffic.
  - Used System 1 models (fast, low-cost LLMs) to bootstrap topic classification: sample an agent's traces, derive its task categories, then label all incoming traffic. Topics show eval coverage gaps and break down feedback, tool errors, and excessive turns.
  - Launched an inbox that flags issues for agent owners, proposes fixes, and turns real production traces into new eval cases.
]

#role("Senior Software Engineer, Generative AI Platform", "Jan 2025 – Jul 2026")
#items[
  - Co-led company-wide OpenTelemetry tracing (6 months), propagating context across APIs, async jobs, Kafka, and SQS.
  - Scaled tracing to every LLM call, unsampled: 200M traces a day from 10,000 components and 500+ teams, kept 90 days.
  - Built trace ownership, access control, and redaction. Ownership alerts cut unowned components from 34 to near zero.
  - Built first-gen prompt tooling: A/B testing, prompt replay, automated prompt tuning, and a UI to test prompts across models.
]

#role("Senior Software Engineer, Calling", "Aug 2023 – Dec 2024")
#items[
  - Stabilized a critical calling database with recurring outages (about 6 a year) by cutting its 550GB audit table by 90%.
  - Designed a rate-limited leasing service for shared test phone numbers. Test runs went up 12x and test costs dropped 50%.
  - Owned backend design for call holds, transfers, and coaching on live calls.
  - Moved call recordings onto in-house storage with a 1-year retention policy, saving \$100K+ a year.
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
  - Helped run the 501(c)(3) behind the national collegiate Raas and Garba dance circuit and its annual championship, serving as the board's liaison to competing college teams.
]

= Skills
#items[
  #grid(columns: (7.4em, 1fr), row-gutter: 0.6em,
    [*Languages*], [Java, Python, TypeScript, SQL],
    [*Frameworks*], [React, Next.js, React Native, FastAPI, LangGraph, Playwright],
    [*Infrastructure*], [Distributed systems, Kafka, AWS (SQS), MySQL, Vitess, PostgreSQL, Hadoop, OpenTelemetry, CI/CD],
    [*AI / ML*], [LLM evaluation, LLM-as-a-judge, AI agents, RAG, vector search, prompt engineering, A/B testing, Braintrust],
  )
]

= Education
#resume-entry(title: "The University of Texas at Austin", location: "Austin, TX", date: "Aug 2018 – May 2022", description: "B.S. Electrical and Computer Engineering, GPA 3.8. Captain, Texas Raas (1st nationally 2022, 2nd 2019)")
