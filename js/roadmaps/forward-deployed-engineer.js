/* Atlas roadmap data: Forward Deployed Engineer (forward-deployed-engineer) */
ROADMAPS.push({
  "id": "forward-deployed-engineer",
  "title": "Forward Deployed Engineer",
  "icon": "🛰️",
  "color": "#2563eb",
  "desc": "Embedded with customers, shipping production AI: the field engineer's playbook.",
  "kind": "role",
  "root": {
    "t": "Forward Deployed Engineering",
    "d": "Build and deploy real software inside customer environments.",
    "children": [
      {
        "t": "The FDE Role",
        "d": "What forward deployed engineering is and who it suits.",
        "lv": 1,
        "children": [
          {
            "t": "What a Forward Deployed Engineer Is",
            "d": "Customer-embedded engineers who write real code and own outcomes, not demos.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The FDE model: pioneered by Palantir, now across AI labs and vendors",
              "Embedded with the customer from scoping to production",
              "Why AI made FDEs essential: models fail at deployment"
            ],
            "do": [
              "Read Palantir's writing on forward deployed engineering",
              "Compare three FDE job posts and list common requirements",
              "Write down why the role appeals to you specifically"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"],
              ["What is a Forward Deployed Engineer? — 2026 analysis", "https://interviewstack.io/blog/what-is-a-forward-deployed-engineer-2026"]
            ],
            "tip": "FDE is not consulting with a cooler title. You stay until the system works in production, not until the statement of work ends."
          },
          {
            "t": "FDE vs Sales Engineer vs Solutions Architect",
            "d": "Three customer-facing roles, three different jobs. Know which you want.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Sales engineers demo; solutions architects design; FDEs build and deploy",
              "Where the roles overlap and where handoffs happen",
              "Compensation and career paths compared"
            ],
            "do": [
              "Interview someone in each role",
              "Map which parts of each role energize you",
              "Decide your target role and work backward"
            ],
            "tools": [],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "If you love the demo but dread the 3 AM production issue in someone else's datacenter, you want sales engineering, not FDE."
          },
          {
            "t": "The Palantir Model and Its Spread",
            "d": "Where the FDE playbook came from and how AI labs adapted it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Palantir's origins: engineers embedded with intelligence and defense customers",
              "How OpenAI, Anthropic, and startups adopted the model",
              "What transfers across companies and what does not"
            ],
            "do": [
              "Read two deep-dives on Palantir's engineering culture",
              "List which FDE practices appear in AI lab job posts",
              "Note what is Palantir-specific vs universal"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"]
            ],
            "tip": "Do not cargo-cult Palantir. The principles (ownership, embedding, outcomes) travel; the specific rituals may not fit your company."
          },
          {
            "t": "From Software Engineer to FDE",
            "d": "What to add to a solid engineering background to become deployable.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The gaps: customer communication, ambiguity, and deployment depth",
              "T-shaped profile: deep coding plus broad execution",
              "Portfolio: one end-to-end deployment beats ten tutorials"
            ],
            "do": [
              "Audit your skills against five FDE job posts",
              "Ship one project into a real production environment",
              "Practice explaining a technical decision to a non-engineer"
            ],
            "tools": [],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "Strong coders fail FDE interviews on communication, not algorithms. The differentiator is reasoning out loud through ambiguity."
          },
          {
            "t": "Interviewing for FDE Roles",
            "d": "The case study round decides most offers. Prepare for it specifically.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The five stages: screen, take-home, deep-dive, behavioral, case study",
              "The customer case study: decomposing vague problems out loud",
              "What interviewers score: judgment, communication, ownership"
            ],
            "do": [
              "Do a timed mock case study with a friend",
              "Build the three-artifact portfolio: agent, evals, rollout writeup",
              "Practice thinking out loud on every practice problem"
            ],
            "tools": [],
            "res": [
              ["How to become a Forward Deployed Engineer (2026)", "https://dev.to/manduks/how-do-you-become-a-forward-deployed-engineer-2026-2l8p"]
            ],
            "tip": "The case study has the lowest pass rate because candidates wait for specs that never come. Ask questions, state assumptions, and move."
          }
        ]
      },
      {
        "t": "Discovery and Scoping",
        "d": "Find the real problem before writing a line of code.",
        "lv": 1,
        "children": [
          {
            "t": "Customer Discovery Conversations",
            "d": "Learn to run conversations that reveal what customers actually need.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Discovery vs sales calls: learning, not pitching",
              "Who to talk to: users, buyers, and blockers",
              "Note-taking and synthesis that the team can use"
            ],
            "do": [
              "Shadow three customer calls and take structured notes",
              "Write a discovery guide with 10 open questions",
              "Synthesize one call into problems, not feature requests"
            ],
            "tools": ["Notion", "Grain"],
            "res": [
              ["The Mom Test", "https://www.momtestbook.com"]
            ],
            "tip": "Customers describe solutions; your job is to excavate problems. What would you do instead reveals more than any feature request."
          },
          {
            "t": "The Mom Test for Honest Answers",
            "d": "Ask questions that even your mom cannot lie to you about.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Bad questions collect compliments; good questions collect facts",
              "Ask about past behavior, not future hypotheticals",
              "Talk about their life, not your idea"
            ],
            "do": [
              "Read The Mom Test and rewrite five of your questions",
              "Run one discovery call using only past-behavior questions",
              "Score your notes: facts vs compliments vs fluff"
            ],
            "tools": [],
            "res": [
              ["The Mom Test — Rob Fitzpatrick", "https://www.momtestbook.com"]
            ],
            "tip": "Would you use this is worthless. Tell me about the last time you hit this problem is gold."
          },
          {
            "t": "Requirements in Ambiguity",
            "d": "FDE specs arrive as vibes. Turn them into buildable requirements.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Decomposing vague goals into testable requirements",
              "Writing one-pagers: problem, users, success criteria, non-goals",
              "Getting sign-off without slowing down"
            ],
            "do": [
              "Write a one-pager for a vague real-world problem",
              "Define success metrics before proposing a solution",
              "Get a non-technical stakeholder to approve it"
            ],
            "tools": ["Notion"],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "Ambiguity is the job, not an obstacle to it. The FDE who needs a perfect spec will wait forever."
          },
          {
            "t": "Technical Scoping and Sequencing",
            "d": "Slice the work so value ships early and often.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Vertical slices over horizontal layers",
              "Sequencing for learning: riskiest assumptions first",
              "Estimating ranges in unfamiliar environments"
            ],
            "do": [
              "Slice a project into weekly shippable increments",
              "Identify the three riskiest assumptions and test them first",
              "Build a sequenced plan with explicit checkpoints"
            ],
            "tools": [],
            "res": [
              ["Shape Up — Basecamp", "https://basecamp.com/shapeup"]
            ],
            "tip": "Big-bang delivery in a customer environment is how projects die quietly. Ship something useful in week one or two."
          },
          {
            "t": "Scope, Speed, and Quality Tradeoffs",
            "d": "Every engagement is a triangle. Make the tradeoffs explicit with the customer.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The iron triangle applied to field work",
              "What good enough means for a v1 in production",
              "Renegotiating scope without losing trust"
            ],
            "do": [
              "Write the tradeoff decision for your current project explicitly",
              "Practice the cut scope, not quality conversation",
              "Document what v1 deliberately excludes"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"]
            ],
            "tip": "Customers respect we can do two of these three well far more than a yes that quietly becomes a miss."
          },
          {
            "t": "Stakeholder Mapping",
            "d": "Know who decides, who influences, and who can kill your project.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Mapping power vs interest across customer stakeholders",
              "Champions, blockers, and silent veto-holders",
              "Communication plans per stakeholder"
            ],
            "do": [
              "Draw a stakeholder map for a real or hypothetical engagement",
              "Identify one blocker and a plan to win them over",
              "Set up a regular cadence with your champion"
            ],
            "tools": ["Miro"],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "The person who loves your demo is rarely the person who signs. Find the economic buyer early or build for applause, not adoption."
          }
        ]
      },
      {
        "t": "Rapid Prototyping",
        "d": "Go from idea to working demo in days.",
        "lv": 2,
        "children": [
          {
            "t": "Building Demos at Startup Speed",
            "d": "Prototypes are for learning. Optimize for iteration speed, not elegance.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Prototype mindset: throwaway code is a feature",
              "Timeboxing: if it takes more than a week, slice it",
              "Demo-driven development: build the story first"
            ],
            "do": [
              "Build a working demo of an idea in 48 hours",
              "Timebox ruthlessly and cut scope to hit the deadline",
              "Demo to a real user and record their reaction"
            ],
            "tools": ["v0", "Cursor"],
            "res": [
              ["Vercel v0", "https://v0.dev"]
            ],
            "tip": "A prototype that impresses engineers but confuses users failed. Optimize the demo for the customer's aha, not for code review."
          },
          {
            "t": "Frontend Skills: React and TypeScript",
            "d": "Ship credible UIs fast: the FDE frontend toolkit.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "React fundamentals: components, state, and effects",
              "TypeScript for catching integration bugs early",
              "Styling fast: Tailwind and component libraries"
            ],
            "do": [
              "Build a dashboard UI with Next.js and Tailwind",
              "Add TypeScript types to an existing JS project",
              "Connect the UI to a real API"
            ],
            "tools": ["Next.js", "TypeScript", "Tailwind CSS"],
            "res": [
              ["Next.js docs", "https://nextjs.org"],
              ["TypeScript handbook", "https://www.typescriptlang.org/docs/"]
            ],
            "tip": "FDE frontends live or die on the demo. Spend polish on the three screens the customer will see, not the admin panel."
          },
          {
            "t": "Backend Skills: Python APIs",
            "d": "Python appears in most FDE postings. Build production-grade APIs with it.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "FastAPI: routes, validation, and dependency injection",
              "Auth basics: API keys, JWTs, and OAuth flows",
              "Testing APIs before the customer does"
            ],
            "do": [
              "Build a REST API with FastAPI and Pydantic validation",
              "Add JWT auth and rate limiting",
              "Write integration tests for every endpoint"
            ],
            "tools": ["FastAPI", "Pydantic", "PostgreSQL"],
            "res": [
              ["FastAPI docs", "https://fastapi.tiangolo.com"]
            ],
            "tip": "The API you demo becomes the API you support. Version from day one; customers integrate faster than you expect."
          },
          {
            "t": "Data Skills: SQL and Pipelines",
            "d": "Customer data is messy. Tame it with SQL and simple pipelines.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "Advanced SQL: window functions, CTEs, and messy joins",
              "Data profiling: finding the lies in the dataset",
              "Lightweight ETL with Python and dbt"
            ],
            "do": [
              "Profile a messy real dataset and document its issues",
              "Build a dbt pipeline that cleans and models it",
              "Write the data-quality checks you wish existed"
            ],
            "tools": ["dbt", "PostgreSQL", "DuckDB"],
            "res": [
              ["dbt docs", "https://docs.getdbt.com"]
            ],
            "tip": "Every FDE engagement discovers the data is worse than promised. Budget the first week for profiling, not building."
          },
          {
            "t": "Prompt Engineering for Prototypes",
            "d": "Get LLMs doing useful work in your prototypes quickly.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Anatomy of an effective prompt: role, context, task, format",
              "Few-shot examples and output schemas",
              "When prompting fails: the handoff to RAG or fine-tuning"
            ],
            "do": [
              "Build a prototype feature powered by an LLM API",
              "Iterate the prompt with a 20-example test set",
              "Add structured output with JSON schemas"
            ],
            "tools": ["OpenAI API", "Anthropic API"],
            "res": [
              ["Anthropic prompt engineering docs", "https://docs.anthropic.com"],
              ["OpenAI docs", "https://platform.openai.com/docs"]
            ],
            "tip": "Prompting gets you to 80% fast and stalls there. Inconsistency on edge cases means architecture, not wording."
          },
          {
            "t": "From Demo to Production Code",
            "d": "Prototypes win deals; production code keeps them. Bridge the gap.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Hardening checklist: auth, logging, errors, and limits",
              "Refactoring without rewriting: strangling the prototype",
              "Deciding what to rebuild vs what to keep"
            ],
            "do": [
              "Harden one prototype with auth, logging, and error handling",
              "Write the runbook for operating it",
              "Load-test the happy path before the customer does"
            ],
            "tools": ["Docker", "Sentry"],
            "res": [
              ["Sentry docs", "https://docs.sentry.io"]
            ],
            "tip": "Never let the customer mistake prototype scaffolding for the product. Set expectations: this demo took two days; production takes six weeks."
          }
        ]
      },
      {
        "t": "Integration Engineering",
        "d": "Connect to the enterprise as it actually exists.",
        "lv": 2,
        "children": [
          {
            "t": "Enterprise APIs and Webhooks",
            "d": "REST, GraphQL, webhooks, and the reality of enterprise integrations.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Reading unfamiliar APIs fast: docs, explorers, and source",
              "Webhooks: verification, retries, and idempotency",
              "Rate limits and pagination as first-class concerns"
            ],
            "do": [
              "Integrate with three real enterprise APIs",
              "Build a webhook receiver with signature verification",
              "Document the quirks you found for the next engineer"
            ],
            "tools": ["Postman", "ngrok"],
            "res": [
              ["Postman", "https://www.postman.com"]
            ],
            "tip": "Enterprise APIs lie in their docs. Budget time for the undocumented required field and the error code that means success."
          },
          {
            "t": "Data Integration and ETL",
            "d": "Move customer data reliably between systems that were never designed to talk.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "Batch vs streaming: choosing the right pattern",
              "Idempotent loads and exactly-once semantics",
              "Schema drift: the silent integration killer"
            ],
            "do": [
              "Build a pipeline syncing two systems nightly",
              "Add monitoring and alerting for pipeline failures",
              "Handle one schema change without downtime"
            ],
            "tools": ["Airflow", "dbt", "Fivetran"],
            "res": [
              ["Apache Airflow", "https://airflow.apache.org"]
            ],
            "tip": "The integration works on day one; the question is day ninety. Monitor data freshness and volume, not just did the job run."
          },
          {
            "t": "Identity: SSO, OAuth, SAML, and SCIM",
            "d": "Enterprise security starts at login. Speak IAM fluently.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "OAuth 2.0 and OIDC flows: which grant for which case",
              "SAML SSO for enterprise customers",
              "SCIM provisioning and deprovisioning"
            ],
            "do": [
              "Implement OIDC login in a sample app",
              "Configure SAML SSO against a test IdP",
              "Build a SCIM endpoint for user provisioning"
            ],
            "tools": ["Auth0", "Okta", "Keycloak"],
            "res": [
              ["OAuth.net", "https://oauth.net"],
              ["Auth0", "https://www.auth0.com"]
            ],
            "tip": "IAM shows up as a distinct cluster in FDE job postings for a reason: connecting AI systems to enterprise security stacks is core FDE work, not a nice-to-have."
          },
          {
            "t": "Working With Legacy Systems",
            "d": "The customer's most important system is the oldest one. Learn to love it.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Reading legacy code without rewriting it",
              "Integration patterns: anti-corruption layers and adapters",
              "Earning trust with the team that maintains it"
            ],
            "do": [
              "Integrate with one legacy system via its existing interface",
              "Write an adapter that isolates the legacy quirks",
              "Document the tribal knowledge you extract"
            ],
            "tools": [],
            "res": [
              ["Working Effectively with Legacy Code — O'Reilly", "https://www.oreilly.com"]
            ],
            "tip": "Mocking the legacy team's system is the fastest way to lose the engagement. Respect the system that pays the bills."
          },
          {
            "t": "Security Reviews and Compliance",
            "d": "Enterprise deals die in security review. Prepare like it matters, because it does.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "SOC 2, ISO 27001, GDPR: what customers actually ask about",
              "Security questionnaires: answering honestly and completely",
              "Data residency and PII handling in your architecture"
            ],
            "do": [
              "Fill out a sample security questionnaire for your project",
              "Map where PII flows through your system",
              "Design one feature to minimize data collection"
            ],
            "tools": ["Vanta", "Drata"],
            "res": [
              ["Vanta", "https://www.vanta.com"]
            ],
            "tip": "Security review is not a checkbox at the end; it is architecture. Involve security early or rebuild late."
          },
          {
            "t": "Air-Gapped and On-Prem Deployments",
            "d": "Some customers have no internet. Ship software that works anyway.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Packaging: containers, registries, and offline bundles",
              "Dependency vendoring for disconnected environments",
              "Update strategies without auto-update"
            ],
            "do": [
              "Build an offline-installable bundle of an app",
              "Test a full install with networking disabled",
              "Document the air-gap install procedure"
            ],
            "tools": ["Docker", "Harbor"],
            "res": [
              ["Docker docs", "https://docs.docker.com"]
            ],
            "tip": "If your deployment assumes internet access, you have not deployed to the enterprise. Test disconnected early."
          }
        ]
      },
      {
        "t": "Shipping in the Field",
        "d": "Operate what you build, where the customer built their business.",
        "lv": 2,
        "children": [
          {
            "t": "Deploying Inside Customer Environments",
            "d": "Your laptop is not the target. Their cloud, their rules.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Reading a customer's cloud setup in the first week",
              "Infrastructure as code for repeatable deployments",
              "Environment parity: dev, staging, and their prod"
            ],
            "do": [
              "Deploy the same app to two different cloud setups",
              "Write Terraform for a repeatable deployment",
              "Document the customer's environment quirks"
            ],
            "tools": ["Terraform", "AWS", "Azure"],
            "res": [
              ["Terraform docs", "https://developer.hashicorp.com/terraform"]
            ],
            "tip": "Every customer environment is a snowflake. Codify everything; the second deployment should be boring."
          },
          {
            "t": "Docker and Kubernetes for FDEs",
            "d": "Containers are how you ship the same thing everywhere.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "Dockerfiles that build fast and run small",
              "Kubernetes basics: pods, services, and ingress",
              "Helm charts for customer-customizable deploys"
            ],
            "do": [
              "Containerize an app with a multi-stage build",
              "Deploy it to a local k8s cluster",
              "Write a Helm chart with customer-tunable values"
            ],
            "tools": ["Docker", "Kubernetes", "Helm"],
            "res": [
              ["Docker docs", "https://docs.docker.com"]
            ],
            "tip": "It works on my machine is a firing offense in field work. If it is not containerized, it is not shippable."
          },
          {
            "t": "Debugging Unfamiliar Systems",
            "d": "You will inherit systems you did not build. Get good at reading them.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Systematic debugging: reproduce, isolate, hypothesize, verify",
              "Reading logs, metrics, and traces across unfamiliar stacks",
              "Asking the maintainers the right questions"
            ],
            "do": [
              "Debug a bug in a codebase you have never seen",
              "Practice the five whys on a real production issue",
              "Write up the debugging process for the team"
            ],
            "tools": ["Grafana", "Datadog"],
            "res": [
              ["Grafana docs", "https://grafana.com/docs/"]
            ],
            "tip": "Resist the urge to rewrite what you do not understand. Understanding first is slower today and faster every day after."
          },
          {
            "t": "Demos and Technical Presentations",
            "d": "The demo is the deliverable's twin. Master the live performance.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Demo structure: problem, aha moment, depth on demand",
              "Live-demo risk management: backups and recorded fallbacks",
              "Reading the room: technical vs executive audiences"
            ],
            "do": [
              "Prepare a 15-minute demo with a recorded backup",
              "Deliver it to a mixed audience and collect feedback",
              "Build a demo script with branch points for questions"
            ],
            "tools": ["OBS Studio"],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "Never debug live. If the demo gods strike, switch to the recording with a smile; the audience respects preparation over heroics."
          },
          {
            "t": "Training Customer Teams",
            "d": "Adoption happens when their team can run it without you.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Train-the-trainer: multiply through their champions",
              "Documentation written for operators, not builders",
              "Office hours during the handover period"
            ],
            "do": [
              "Write an operator's runbook for a system you built",
              "Run a hands-on training session",
              "Identify and certify two customer champions"
            ],
            "tools": ["Notion"],
            "res": [
              ["Diátaxis — how-to guides", "https://diataxis.fr"]
            ],
            "tip": "If only you can operate it, you built a dependency, not a product. Handover success is measured by your own irrelevance."
          },
          {
            "t": "Handover and Ongoing Support",
            "d": "Leave cleanly: the engagement ends, the system lives on.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Handover checklists: code, docs, access, and contacts",
              "Support models: SLAs that survive your departure",
              "Knowing when to stay involved vs let go"
            ],
            "do": [
              "Write a handover doc for a past project",
              "Define support tiers with response times",
              "Do a retro on what the next FDE should know"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"]
            ],
            "tip": "The best FDE engagements end with the customer forgetting you were ever needed. Plan the exit from the kickoff."
          }
        ]
      },
      {
        "t": "AI Engineering Skills",
        "d": "Production AI is the FDE's 2026 differentiator.",
        "lv": 3,
        "children": [
          {
            "t": "RAG Pipelines End to End",
            "d": "Retrieval-augmented generation is table stakes. Build it properly.",
            "lv": 3,
            "time": "~10h",
            "learn": [
              "Chunking strategies and their tradeoffs",
              "Embeddings, vector search, and hybrid retrieval",
              "Grounded generation: citations and hallucination control"
            ],
            "do": [
              "Build a RAG Q&A over a real document set",
              "Tune chunking and measure retrieval quality",
              "Add citations to every generated answer"
            ],
            "tools": ["LangChain", "pgvector", "OpenAI API"],
            "res": [
              ["LangChain", "https://www.langchain.com"]
            ],
            "tip": "Most RAG demos retrieve from ten clean PDFs. Production RAG fights scanned documents, permissions, and stale data. Build for the mess."
          },
          {
            "t": "Agent Orchestration",
            "d": "Agents that use tools are where FDE value concentrates in 2026.",
            "lv": 3,
            "time": "~10h",
            "learn": [
              "Agent patterns: ReAct, planning, and multi-agent",
              "Frameworks: LangGraph, CrewAI, and custom orchestration",
              "Tool design: the API your agent actually calls"
            ],
            "do": [
              "Build an agent that completes a multi-step workflow",
              "Add human-in-the-loop checkpoints",
              "Compare two orchestration approaches on the same task"
            ],
            "tools": ["LangGraph", "CrewAI"],
            "res": [
              ["LangChain", "https://www.langchain.com"]
            ],
            "tip": "Agents fail at the seams: tool errors, ambiguous plans, runaway loops. Budget most of your time for failure modes, not the happy path."
          },
          {
            "t": "Evals: Proving Your AI Works",
            "d": "If you cannot measure it, the enterprise will not buy it.",
            "lv": 3,
            "time": "~10h",
            "learn": [
              "Golden datasets: building representative test sets",
              "LLM-as-judge: useful, biased, and how to calibrate",
              "Regression testing for non-deterministic systems"
            ],
            "do": [
              "Build a 50-example golden dataset for your agent",
              "Set up automated evals in CI",
              "Track eval scores across prompt and model changes"
            ],
            "tools": ["Braintrust", "LangSmith"],
            "res": [
              ["Braintrust", "https://www.braintrust.dev"],
              ["LangSmith docs", "https://docs.smith.langchain.com"]
            ],
            "tip": "Evals are the 2026 FDE differentiator. The portfolio that wins interviews has an eval suite, not just a demo."
          },
          {
            "t": "AI Observability and Guardrails",
            "d": "Production AI needs monitoring, limits, and kill switches.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "Tracing and logging for LLM applications",
              "Guardrails: input and output filtering and policy enforcement",
              "Cost and latency monitoring per request"
            ],
            "do": [
              "Add tracing to an LLM app",
              "Implement PII redaction on inputs and outputs",
              "Set up cost alerts and a kill switch"
            ],
            "tools": ["LangSmith", "HoneyHive"],
            "res": [
              ["LangSmith docs", "https://docs.smith.langchain.com"]
            ],
            "tip": "An AI feature without observability is a black box you sold to a customer. When it misbehaves at 2 AM, traces are your only witness."
          },
          {
            "t": "Vector Search and Embeddings",
            "d": "Understand the retrieval layer deeply enough to debug it.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "How embeddings capture meaning (and fail to)",
              "Vector indexes: HNSW and the recall vs latency tradeoff",
              "Hybrid search: BM25 plus vectors"
            ],
            "do": [
              "Benchmark two embedding models on your data",
              "Tune a vector index for your latency budget",
              "Build a hybrid search endpoint"
            ],
            "tools": ["pgvector", "Qdrant", "Weaviate"],
            "res": [
              ["Pinecone docs", "https://docs.pinecone.io"]
            ],
            "tip": "Embedding choice matters less than chunking and metadata. Fix retrieval quality at the data layer before swapping models."
          },
          {
            "t": "Fine-Tuning vs RAG vs Prompting",
            "d": "Choose the right technique for the job instead of defaulting to one.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Decision framework: when each approach wins",
              "Fine-tuning basics: data curation and evaluation",
              "Cost and maintenance tradeoffs over time"
            ],
            "do": [
              "Run the same task three ways and compare quality and cost",
              "Curate a 500-example fine-tuning dataset",
              "Write the decision doc for a real use case"
            ],
            "tools": ["OpenAI API", "Hugging Face"],
            "res": [
              ["Hugging Face docs", "https://huggingface.co/docs"]
            ],
            "tip": "Fine-tuning bakes in knowledge that goes stale; RAG reads fresh data. Default to RAG for knowledge, fine-tune for behavior and style."
          },
          {
            "t": "Cost, Latency, and Reliability",
            "d": "Enterprise AI lives or dies on the bill and the p99.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Token economics: modeling cost per user action",
              "Latency budgets: streaming, caching, and smaller models",
              "Reliability: retries, fallbacks, and graceful degradation"
            ],
            "do": [
              "Model the unit economics of one AI feature",
              "Cut p95 latency in half with caching or a smaller model",
              "Build a fallback chain: frontier model to small model to rules"
            ],
            "tools": ["OpenRouter", "LiteLLM"],
            "res": [
              ["OpenRouter", "https://openrouter.ai"]
            ],
            "tip": "The demo uses the biggest model; production uses the cheapest one that passes evals. Cost-optimize against your eval suite, not your gut."
          }
        ]
      },
      {
        "t": "Business Acumen and Growth",
        "d": "Think like an owner, grow like a leader.",
        "lv": 3,
        "children": [
          {
            "t": "Enterprise Workflows and Buying Centers",
            "d": "Learn how enterprises actually buy and adopt software.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Buying centers: users, influencers, gatekeepers, buyers",
              "Procurement, legal, and security as part of the sale",
              "Land-and-expand: from pilot to enterprise-wide"
            ],
            "do": [
              "Map the buying center of a past or hypothetical deal",
              "Identify the gatekeepers early in your next engagement",
              "Write a pilot success plan with expansion criteria"
            ],
            "tools": [],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "The best technical solution loses to procurement timelines. Start security and legal conversations in week one, not week ten."
          },
          {
            "t": "ROI and Business Cases",
            "d": "Translate technical wins into dollars, hours, and risk reduced.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Building ROI models: time saved, errors avoided, revenue enabled",
              "Speaking the CFO's language",
              "Measuring realized vs projected value"
            ],
            "do": [
              "Build an ROI model for a real deployment",
              "Present it to a non-technical stakeholder",
              "Track realized value 90 days post-launch"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"]
            ],
            "tip": "The model is 94% accurate means nothing to a buyer. It saves 400 analyst-hours a month closes deals."
          },
          {
            "t": "Product Feedback Loops",
            "d": "Field learnings are product gold. Mine them systematically.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Turning one-off customizations into product features",
              "Writing field reports product teams actually read",
              "Prioritizing: what generalizes vs what stays custom"
            ],
            "do": [
              "Write a field report with three product recommendations",
              "Distinguish custom work from product gaps explicitly",
              "Present findings to the product team quarterly"
            ],
            "tools": ["Notion", "Linear"],
            "res": [
              ["InterviewStack — FDE 2026", "https://interviewstack.io/blog/what-is-a-forward-deployed-engineer-2026"]
            ],
            "tip": "FDEs who only deliver custom work are expensive consultants. FDEs who feed the product loop multiply every future deployment."
          },
          {
            "t": "Solution Architecture Thinking",
            "d": "Design systems that survive contact with the enterprise.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Reference architectures for common enterprise patterns",
              "Designing for operability, not just functionality",
              "Tradeoff docs: why this architecture, not that one"
            ],
            "do": [
              "Draw a reference architecture for your domain",
              "Write the tradeoff doc for a major decision",
              "Review it with a solutions architect"
            ],
            "tools": ["draw.io", "Miro"],
            "res": [
              ["AWS Architecture Center", "https://aws.amazon.com/architecture/"]
            ],
            "tip": "The elegant architecture that nobody can operate is a liability. Optimize for the team that inherits it, not the whiteboard."
          },
          {
            "t": "From FDE to Founder or Staff",
            "d": "The FDE path compounds: choose where it takes you.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Career branches: staff FDE, solutions leadership, founding",
              "What each path demands that FDE did not teach you",
              "Building in public as career capital"
            ],
            "do": [
              "Interview two people on each branch",
              "Write your 3-year career thesis",
              "Start building the proof: writing, projects, or prototypes"
            ],
            "tools": [],
            "res": [
              ["FDE Academy", "https://fde.academy"]
            ],
            "tip": "FDEs see more real business problems in a year than most engineers see in five. That pattern library is founder fuel; write it down."
          },
          {
            "t": "Managing Burnout on the Road",
            "d": "Travel, context-switching, and always-on customers: sustain the pace.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Recognizing burnout in high-autonomy roles",
              "Boundaries with customers who have your cell number",
              "Recovery systems: rest as a professional skill"
            ],
            "do": [
              "Set explicit availability boundaries with your next customer",
              "Build a shutdown ritual for travel weeks",
              "Schedule real time off between engagements"
            ],
            "tools": [],
            "res": [
              ["Palantir blog", "https://blog.palantir.com"]
            ],
            "tip": "The FDE lifestyle selects for people who never say no. Saying no strategically is what keeps you in the role for years."
          }
        ]
      }
    ]
  }
});
