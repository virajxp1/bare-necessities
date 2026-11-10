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
  keywords: ("Agent Evals", "AI platform", "backend", "distributed systems"),
)

// Tighter than the package defaults so everything fits on one page.
#show heading.where(level: 1): set block(above: 0.6em, below: 0.45em)
// Later roles at the same company: role + dates only, same style as resume-entry's second line.
#let role(title, dates) = block(above: 0.8em, below: 0.6em, sticky: true, secondary-justified-header(title, dates))
#let note(body) = text(size: 9pt, style: "italic", fill: rgb("#5d5d5d"), body)
#let items(body) = resume-item[
  #set text(size: 9.6pt)
  #set par(leading: 0.5em)
  #set text(hyphenate: false)
  #set list(spacing: 0.5em)
  #body
]

= Summary
#items[
  I'm a backend engineer with 5+ years of experience, 4+ at HubSpot. I spent my first 2+ years on the customer-facing Calling backend (Java, Kafka, MySQL), owning our Twilio integration at 1M+ requests a day. In 2025 I moved to AI, where I helped build our first-generation evaluation platform and distributed OpenTelemetry tracing for every AI call at HubSpot. Now I drive agent quality, developing evaluation tooling that teams use to improve their agents, skills, and tools.
]

= Experience

#resume-entry(title: "HubSpot", location: "Cambridge, MA and Remote", date: "Aug 2026 – Present", description: "Senior Software Engineer II, Agent Quality")
#items[
  - Designed, built, and led a multi-step agent evaluation system from the ground up, replacing a first-gen platform that only tested single chat completions. It's harness-agnostic, supports reusable test sets and mocked tool calls, and is used by 54 teams
  - Shipped model and prompt sweeps that plot each agent's Pareto frontier of quality, cost, and speed from its own test cases
  - Productized automated grading of live AI responses with LLM judges and Python scorers, now at 889 judges and 350K scores a day, plus a default judge that gives 5,200+ bespoke AI features a quality score with no setup
  - Introduced CI/CD quality gates that block a deploy when an agent regresses, now on 16 agents, including the 3 busiest by volume
  - Integrated System One models to sort each agent's conversations into topics automatically, showing which topics lack tests and where bad feedback, tool errors, and overly long conversations cluster
  - Launched an inbox that flags problems for agent owners, suggests fixes, and turns real conversations into new test cases
]

#role("Senior Software Engineer, Generative AI Platform", "Jan 2025 – Jul 2026")
#items[
  - Co-led a 6-month, company-wide rollout of OpenTelemetry AI tracing, following requests through APIs, async jobs, Kafka, and SQS
  - Scaled tracing to record every LLM call: 200M traces a day from 10,000 unique call sites and 500+ teams
  - Engineered ownership, access control, and data redaction for traces to protect customer data and stay GDPR-compliant
  - Led development of HubSpot's first AI evaluation platform: A/B tests, request replay, auto prompt tuning, and a model comparison UI
]

#role("Senior Software Engineer, Calling", "Aug 2023 – Dec 2024")
#items[
  - Stabilized a critical calling database with recurring outages (about 6 a year) by cutting its 550GB audit table by 90%
  - Designed a rate-limited leasing service for shared test phone numbers, raising test runs 12x and cutting test costs 50%
  - Owned backend design for call holds, transfers, and coaching on live calls
  - Moved call recordings onto in-house storage with a 1-year retention policy, saving \$100K+ a year
  - Fed live call transcripts and customer runbooks into RAG for real-time call suggestions
]

#role("Software Engineer, Calling", "Aug 2022 – Aug 2023")
#items[
  - Migrated Twilio webhook handling (1M+ requests a day) and led a vendor-agnostic conference calling platform on Kafka and MySQL
]

= Projects
#items[
  - *ForkFolio* (#link("https://github.com/virajxp1/forkfolio")[github.com/virajxp1/forkfolio]): recipe app whose LLM pipeline turns any URL or pasted text into a clean, searchable recipe
  - *Auto Browse* (#link("https://github.com/virajxp1/auto-browse")[github.com/virajxp1/auto-browse]): Python browser agent where a LangGraph planner drives Playwright
  - *Tiffin* (in progress): homemade-food marketplace with timed listings, atomic inventory, and pickup codes (React Native, Supabase)
]

= Leadership
#role("Executive Board Member, Raas All-Stars", "2023 – 2025")
#items[
  - Helped run the 501(c)(3) behind the national collegiate Raas and Garba circuit, serving as liaison to college teams
]

#role("Captain and Senior Advisor, Texas Raas", "2019 – 2023")
#items[
  - Competed for 4 years, captained for 1, and served as senior advisor for 1 more, winning nationals in both leadership years
]

= Skills
#items[
  #grid(columns: (7.4em, 1fr), row-gutter: 0.45em,
    [*Languages*], [Java, Python, TypeScript, SQL],
    [*Frameworks*], [React, Next.js, React Native, FastAPI, LangGraph, Playwright],
    [*Infrastructure*], [Distributed systems, Kafka, AWS (SQS), MySQL, Vitess, PostgreSQL, Hadoop, OpenTelemetry, CI/CD],
    [*AI / ML*], [LLM evaluation, LLM-as-a-judge, AI agents, RAG, vector search, prompt engineering, A/B testing, Braintrust],
  )
]

= Education
#resume-entry(title: "The University of Texas at Austin", location: "Austin, TX", date: "Aug 2018 – May 2022", description: "B.S. Electrical and Computer Engineering, GPA 3.9")
