/* Atlas roadmap data: Software Architect (software-architect) */
ROADMAPS.push({
  "id": "software-architect",
  "title": "Software Architect",
  "icon": "🏛️",
  "color": "#f9a8d4",
  "desc": "Leading technical direction: decisions, reviews, stakeholders, legacy evolution, and architecture that outlasts you.",
  "kind": "role",
  "root": {
    "t": "The Software Architect",
    "d": "Leading technical direction: decisions, reviews, stakeholders, and evolving systems that outlast you.",
    "children": [
      {
        "t": "The Role, Demystified",
        "d": "What architects actually do all day, and how the role differs from management.",
        "lv": 1,
        "children": [
          {
            "t": "What a Software Architect Actually Does",
            "d": "Decision-maker, communicator, and technical conscience, not the person who draws boxes.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Decision ownership: architects are accountable for significant technical choices",
              "Enabling teams: removing technical obstacles beats issuing mandates",
              "Architecture as a team sport: the best architects build other architects"
            ],
            "do": [
              "Shadow an architect or tech lead for a day and list every decision they made",
              "Classify each decision: reversible or irreversible, technical or organizational",
              "Write your own one-paragraph definition of the architect's job"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "Architects who stop coding lose the team's trust. Stay close enough to the code that your decisions survive contact with it."
          },
          {
            "t": "Architect Archetypes",
            "d": "Solution, application, enterprise, and domain architects: same title, different altitude.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Solution architects design for one initiative; enterprise architects govern the portfolio",
              "Application and domain architects own the technical direction of a system or area",
              "Cloud and infrastructure architects specialize in the platform layer"
            ],
            "do": [
              "Map 3 real job postings to archetypes and note the differences",
              "Identify which archetype fits your strengths and interests",
              "Find someone in each role on LinkedIn and compare their described work"
            ],
            "tools": [],
            "res": [
              ["The Open Group", "https://www.opengroup.org/"]
            ],
            "tip": "Titles vary wildly between companies. Read the responsibilities, not the title, when evaluating a role."
          },
          {
            "t": "Levels of Architecture",
            "d": "Enterprise, solution, and application: who decides what, and where mandates stop.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Enterprise level: portfolio standards, shared platforms, long-term direction",
              "Solution level: one initiative's architecture within those guardrails",
              "Application level: the internal design teams own day to day"
            ],
            "do": [
              "Draw the decision layers for your organization or school projects",
              "Place 5 real decisions at their correct level",
              "Find one decision made at the wrong level and describe the damage"
            ],
            "tools": [],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "Ivory-tower architecture happens when upper levels decide details they do not understand. Push decisions to the lowest competent level."
          },
          {
            "t": "Architecture vs Engineering Management",
            "d": "Technical leadership without people management: influence instead of authority.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Architects lead through expertise and persuasion; managers lead through people and process",
              "The partnership: EMs own delivery health, architects own technical direction",
              "Career paths: the IC track exists so leadership does not require management"
            ],
            "do": [
              "Write your personal architect-vs-EM responsibility split",
              "Interview one EM about what they need from architects",
              "Identify where the two roles overlap in your org and who resolves conflicts"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "An architect who tries to manage people becomes a bad manager; a manager who dictates architecture becomes a bottleneck. Respect the split."
          },
          {
            "t": "Staying Technical While Leading",
            "d": "Protecting hands-on credibility as meetings multiply.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Coding time protection: spikes, prototypes, and review participation",
              "Reading code and reviews as the cheapest way to stay grounded",
              "The tech radar habit: continuous, deliberate learning"
            ],
            "do": [
              "Ship one prototype spike this month, however small",
              "Review 5 pull requests a week outside your comfort zone",
              "Start a personal tech radar with 10 items in adopt, trial, assess, hold"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "Your technical credibility has a half-life. Without regular hands-on work, your advice expires within about a year."
          }
        ]
      },
      {
        "t": "Technical Leadership",
        "d": "Deciding, simplifying, and growing the engineers around you.",
        "lv": 1,
        "children": [
          {
            "t": "Decision-Making Under Uncertainty",
            "d": "Choosing well with incomplete information, and knowing which choices are cheap to reverse.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "One-way vs two-way doors: irreversible choices deserve deliberation, reversible ones deserve speed",
              "Deciding with 70% of the information instead of waiting for 100%",
              "Time-boxing decisions: a mediocre decision now beats a perfect one too late"
            ],
            "do": [
              "Classify 5 pending decisions as one-way or two-way doors",
              "Set a decision deadline for one you have been postponing",
              "Write the revisit conditions for a fast decision you make this week"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "Most technical decisions are two-way doors. Decide fast, instrument the outcome, and revisit cheaply."
          },
          {
            "t": "Simplifying Complex Systems",
            "d": "The architect's highest-value work is removing complexity, not adding cleverness.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Essential vs accidental complexity: which complexity earns its keep",
              "Conceptual integrity: one coherent vision beats ten clever ideas",
              "Simplification strategies: deletion, consolidation, and making the implicit explicit"
            ],
            "do": [
              "Find the most complex module you own and propose a simplification",
              "Delete one abstraction layer and measure what breaks",
              "Explain the system to a newcomer and note where you struggled, that is the complexity"
            ],
            "tools": [],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "Complexity is the default; simplicity takes deliberate effort. Budget simplification time like any other feature."
          },
          {
            "t": "Leading Design Discussions",
            "d": "Facilitating good technical decisions instead of dictating them.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Facilitation over dictation: drawing out the best thinking in the room",
              "RFC culture: async, written, commentable proposals",
              "Disagree and commit: dissent recorded, then full commitment"
            ],
            "do": [
              "Facilitate (do not lead) one design discussion this month",
              "Write the discussion up as a decision record with dissenting views noted",
              "Ask for the quietest person's opinion first next time"
            ],
            "tools": ["Miro", "Excalidraw"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "If you talk the most in a design discussion, you are not leading it, you are suppressing it. Facilitate, then decide."
          },
          {
            "t": "Mentoring and Coaching Engineers",
            "d": "Growing the next architects instead of hoarding the decisions.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Socratic code reviews: questions that teach instead of directives that dictate",
              "Pairing on design: thinking aloud so judgment transfers",
              "Career ladders for ICs: making the architect path visible and reachable"
            ],
            "do": [
              "Mentor one engineer through writing their first ADR",
              "Replace 5 review directives with questions this week",
              "Map the skills gap between a senior engineer and an architect in your org"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "An architect who is the only person that can decide is a single point of failure. Your success is measured in architects grown."
          },
          {
            "t": "Estimating and Evaluating",
            "d": "Honest numbers for technical work, and honest comparisons of options.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Estimation techniques: three-point estimates, reference classes, and ranges not dates",
              "Evaluating options: scoring against criteria instead of debating opinions",
              "Cost of delay and opportunity cost: the economics behind prioritization"
            ],
            "do": [
              "Estimate a migration with three-point estimates and present the range",
              "Score two technical options against weighted criteria",
              "Track one estimate against reality and calibrate"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "Single-point estimates are lies with confidence intervals of zero. Always present ranges, and name what would move the number."
          },
          {
            "t": "Selling Ideas and Building Buy-In",
            "d": "The marketing skills architects need but rarely admit to.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Framing for the audience: engineers hear craft, executives hear risk and cost",
              "Pilots as persuasion: small wins that sell big changes",
              "Handling no: understanding objections instead of overriding them"
            ],
            "do": [
              "Write a one-page proposal for a technical change you want",
              "Pitch it to two different audiences and adapt the framing",
              "Run a tiny pilot and let the results argue for you"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "A technically perfect proposal nobody adopts is a failed architecture. Adoption is part of the design."
          }
        ]
      },
      {
        "t": "Architecture Reviews and Governance",
        "d": "Keeping many teams aligned without becoming a bottleneck.",
        "lv": 2,
        "children": [
          {
            "t": "The Architecture Review Process",
            "d": "Reviews that reduce risk and spread knowledge instead of gatekeeping.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Review goals: catching systemic risks early and sharing knowledge across teams",
              "Who attends, what inputs are required, and what outputs are produced",
              "Blameless tone: reviewing the design, never the designer"
            ],
            "do": [
              "Draft a one-page review template: context, options, risks, decision",
              "Define what triggers a review in your org (and what does not)",
              "Observe one review and note what worked and what felt like theater"
            ],
            "tools": [],
            "res": [
              ["arc42 Template", "https://arc42.org/"]
            ],
            "tip": "If reviews feel like approvals, teams will route around them. Make the review the easiest way to get good feedback."
          },
          {
            "t": "RFCs and Design Docs",
            "d": "Written proposals that invite critique before code exists.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Structure: problem, context, options considered, proposal, risks, rollout",
              "Async-first culture: written docs beat meetings for deep technical thought",
              "Comment discipline: questions and alternatives, not bikeshedding"
            ],
            "do": [
              "Write an RFC for your next significant change using the structure above",
              "Collect comments for 3 days before deciding",
              "Publish the decision and link it from the code"
            ],
            "tools": ["Notion", "Confluence"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "If it is not written down, it was not decided. Verbal agreements evaporate; RFCs compound."
          },
          {
            "t": "Fitness Functions and Guardrails",
            "d": "Automating the enforcement of your most important architectural rules.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Fitness functions: executable tests on layering, dependencies, and quality goals",
              "Paved roads vs guardrails: making the right way easy, not just the wrong way blocked",
              "Policy as code: OPA and similar for organizational rules"
            ],
            "do": [
              "Add 3 ArchUnit rules protecting your key architectural decisions",
              "Write one OPA policy for a deployment rule you care about",
              "List which rules deserve automation and which deserve conversation"
            ],
            "tools": ["ArchUnit", "Open Policy Agent"],
            "res": [
              ["Evolutionary Architecture", "https://evolutionaryarchitecture.com/"]
            ],
            "tip": "Automate the rules that never change; discuss the ones that should. Governance is a dial, not a switch."
          },
          {
            "t": "Standards That Stick",
            "d": "Few, enforced, and owned: why most standards fail and some survive.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Minimal viable standards: 5 enforced rules beat 50 suggested ones",
              "Why standards fail: too many, unenforced, unowned, or disconnected from pain",
              "Versioning and sunsetting standards as the world changes"
            ],
            "do": [
              "Write at most 5 standards for your org, each with an owner",
              "Attach each standard to the pain it prevents",
              "Delete or automate one standard nobody follows"
            ],
            "tools": [],
            "res": [
              ["The Twelve-Factor App", "https://12factor.net/"]
            ],
            "tip": "Every unenforced standard is a suggestion. Automate it, assign an owner, or delete it."
          },
          {
            "t": "Architecture Decision Logs at Scale",
            "d": "ADRs across teams: discoverable, searchable, and honest about history.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Shared ADR indexes: finding decisions across team boundaries",
              "Superseding across time: decision archaeology for newcomers",
              "Linking decisions to code, incidents, and reviews"
            ],
            "do": [
              "Set up a shared ADR index with Log4brains or a simple site",
              "Link 10 existing decisions into it with proper statuses",
              "Onboard a newcomer using only the decision log and note the gaps"
            ],
            "tools": ["Log4brains", "adr-tools"],
            "res": [
              ["Architecture Decision Records", "https://adr.github.io/"]
            ],
            "tip": "A decision log nobody can search is a diary. Index, link, and keep statuses honest."
          },
          {
            "t": "Security and Compliance Reviews",
            "d": "Baking threat modeling and compliance into the architecture rhythm.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Threat modeling lite: STRIDE per data flow, focused on what is new",
              "Security as a quality attribute: designed in, not bolted on",
              "Compliance checkpoints: privacy, data residency, and audit trails"
            ],
            "do": [
              "Run a 30-minute threat model on one data flow with Threat Dragon",
              "List the top 3 threats and the design change each requires",
              "Add a security section to your review template"
            ],
            "tools": ["OWASP Threat Dragon"],
            "res": [
              ["OWASP", "https://owasp.org/"]
            ],
            "tip": "Threat-model the new and the changed, not everything. A 30-minute focused session beats a yearly three-day workshop."
          }
        ]
      },
      {
        "t": "Stakeholder Management",
        "d": "The human half of architecture: aligning people with competing interests.",
        "lv": 2,
        "children": [
          {
            "t": "Stakeholder Mapping",
            "d": "Knowing who cares, how much power they hold, and what worries them.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Power-interest grid: who to manage closely, satisfy, inform, or monitor",
              "Hidden stakeholders: security, legal, and ops teams that appear late",
              "Communication cadence: matching frequency and detail to each stakeholder"
            ],
            "do": [
              "Map stakeholders for your current initiative with interests and concerns",
              "Identify one hidden stakeholder you have been ignoring",
              "Set a communication cadence for the top 3"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "Stakeholders you discover late become blockers. Map early, especially the ones with veto power."
          },
          {
            "t": "Translating Tech to Business",
            "d": "Speaking cost, risk, and speed instead of frameworks and protocols.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Business language for technical tradeoffs: money, time, and risk",
              "The no-jargon rule: if they need a glossary, you have lost them",
              "Stories over specs: narratives that carry the numbers"
            ],
            "do": [
              "Rewrite a technical proposal for a CFO audience in one page",
              "Remove every acronym and explain the tradeoff in plain words",
              "Test it on a non-technical friend and iterate"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "Stakeholders do not care about Kafka vs RabbitMQ. They care about cost, risk, and speed: translate everything into those three."
          },
          {
            "t": "Negotiating Tradeoffs",
            "d": "Making constraints visible so compromises are conscious, not accidental.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Options with price tags: every choice shows its cost",
              "Making constraints visible: deadlines, budgets, and team capacity on the table",
              "Documenting the deal: what was traded for what, signed by whom"
            ],
            "do": [
              "Negotiate one scope-vs-quality tradeoff in writing this month",
              "Present 3 options with honest price tags to a stakeholder",
              "Record the agreed tradeoff as a decision record"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "Unwritten tradeoffs get renegotiated under pressure. Write down what was sacrificed, or it will be sacrificed again silently."
          },
          {
            "t": "Managing Up",
            "d": "Giving executives what they need: clarity, options, and no surprises.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What CTOs and VPs need: risks, options, and recommendations, not details",
              "Escalation with options: never bring a problem without candidate solutions",
              "The no-surprises rule: bad news early is manageable, bad news late is betrayal"
            ],
            "do": [
              "Write a 5-line executive summary of your current architecture risks",
              "Prepare a one-page brief for your next skip-level conversation",
              "Deliver one piece of early bad news this month and note the reaction"
            ],
            "tools": [],
            "res": [
              ["The Architect Elevator", "https://architectelevator.com/"]
            ],
            "tip": "Executives can handle bad news; they cannot handle surprises. The earlier the warning, the more options remain."
          },
          {
            "t": "Partnering with Product",
            "d": "Sharing ownership of the roadmap between features and technical health.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Architecture runway: the technical groundwork features need ahead of time",
              "Enabler epics: expressing technical work in product language",
              "Shared ownership of non-functional requirements"
            ],
            "do": [
              "Co-write one enabler epic with a product manager",
              "Negotiate technical capacity into the next planning cycle",
              "Define shared NFRs for the next feature together"
            ],
            "tools": [],
            "res": [
              ["Scaled Agile Framework", "https://www.scaledagileframework.com/"]
            ],
            "tip": "If product never hears about technical needs, that is an architect communication failure, not a product failure."
          },
          {
            "t": "Communicating Risk",
            "d": "Making technical risk visible, quantified, and actionable.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Risk registers: probability times impact, with owners and mitigations",
              "Pre-mortems: imagining the failure before it happens",
              "Risk-based prioritization: spending mitigation effort where it matters"
            ],
            "do": [
              "Run a pre-mortem on your next release and log the top 5 risks",
              "Quantify one risk in business terms (downtime cost, delay cost)",
              "Review the register monthly and retire mitigated risks"
            ],
            "tools": [],
            "res": [
              ["Google SRE Books", "https://sre.google/books/"]
            ],
            "tip": "Unspoken risks do not disappear; they detonate. A risk register turns anxiety into a work plan."
          }
        ]
      },
      {
        "t": "Evolving Legacy Systems",
        "d": "Modernizing what exists without stopping the business.",
        "lv": 3,
        "children": [
          {
            "t": "Assessing a Legacy System",
            "d": "Understanding what you inherited before changing anything.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Discovery techniques: dependency mapping, hotspot analysis, and talking to long-timers",
              "Change-failure hotspots: where the system is both volatile and fragile",
              "Scoring modernization candidates by value versus risk"
            ],
            "do": [
              "Map the dependencies of one legacy module",
              "Identify the top 3 change-failure hotspots from history or intuition",
              "Score 3 modernization candidates and rank them"
            ],
            "tools": ["Structure101"],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "Resist the urge to rewrite on first sight. Six weeks of understanding saves six months of rebuilding the wrong thing."
          },
          {
            "t": "The Strangler Fig Pattern",
            "d": "Replacing a legacy system incrementally from the edges inward.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "The facade: routing traffic between old and new behind one interface",
              "Incremental replacement: strangling one capability at a time",
              "Parallel runs and safe cutover: proving the new before killing the old"
            ],
            "do": [
              "Write a strangler plan for one legacy endpoint behind a facade",
              "Route 1% of traffic to the new implementation and compare",
              "Define the cutover criteria and rollback plan in writing"
            ],
            "tools": ["NGINX", "Envoy"],
            "res": [
              ["Strangler Fig Application (Fowler)", "https://martinfowler.com/bliki/StranglerFigApplication.html"]
            ],
            "tip": "Strangle from the edges where risk is lowest. The core goes last, when you have practice and confidence."
          },
          {
            "t": "Anti-Corruption Layers",
            "d": "Isolating clean new models from the legacy mess they must talk to.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Translation at the boundary: legacy concepts mapped to your domain language",
              "Protecting the new model from legacy assumptions leaking in",
              "When ACLs become permanent: maintaining the layer as a product"
            ],
            "do": [
              "Build an ACL between a new service and a legacy database",
              "Keep every legacy-ism inside the layer; verify the core stays clean",
              "Document the translations as a glossary both sides can read"
            ],
            "tools": [],
            "res": [
              ["Domain Language", "https://www.domainlanguage.com/"]
            ],
            "tip": "Without an ACL, the legacy model colonizes the new code within months. The layer is cheaper than the corruption."
          },
          {
            "t": "Expand-Contract Migrations",
            "d": "Zero-downtime schema and API changes in three safe steps.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Expand: add the new shape alongside the old, keeping both working",
              "Migrate: move all readers and writers to the new shape",
              "Contract: remove the old shape only when nothing references it"
            ],
            "do": [
              "Rename a database column with zero downtime using expand-contract",
              "Apply the same pattern to evolve a REST API field",
              "Write the checklist you would follow for the next migration"
            ],
            "tools": ["PostgreSQL", "Flyway"],
            "res": [
              ["Flyway", "https://flywaydb.org/"]
            ],
            "tip": "Never expand and contract in the same release. The migration step needs production time to catch every consumer."
          },
          {
            "t": "Rewrite vs Refactor vs Replace",
            "d": "The economics of the three paths, and why rewrites usually lose.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Rewrite: the siren song, and why it costs 3x and ships late",
              "Refactor: incremental improvement while the system keeps running",
              "Replace: buying or adopting instead of building, with migration costs"
            ],
            "do": [
              "Score your legacy system on rewrite-vs-refactor criteria",
              "Find a famous rewrite story and extract the lesson",
              "Write the business case for the incremental path"
            ],
            "tools": [],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "The rewrite almost always costs triple the estimate and ships late. Prove the incremental path impossible before choosing the big bang."
          },
          {
            "t": "Decommissioning Systems",
            "d": "Sunsetting with dignity: data, dependencies, and celebration.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Dependency untangling: finding every hidden consumer before shutdown",
              "Data archival: retention, access, and legal requirements",
              "The human side: acknowledging the system that carried the business"
            ],
            "do": [
              "Write a decommission checklist for one dead or dying service",
              "Audit for hidden consumers (cron jobs, dashboards, spreadsheets)",
              "Plan the shutdown communication and the celebration"
            ],
            "tools": [],
            "res": [
              ["Google SRE Books", "https://sre.google/books/"]
            ],
            "tip": "Systems die from neglected dependencies, not from the shutdown itself. The consumer audit is the whole job."
          }
        ]
      },
      {
        "t": "Strategy and Economics",
        "d": "The business of architecture: costs, platforms, and measuring what matters.",
        "lv": 3,
        "children": [
          {
            "t": "Build vs Buy vs Partner",
            "d": "The strategic version of the oldest architecture question.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Core vs context: build what differentiates, buy or partner for the rest",
              "Total cost of ownership: integration, operations, and exit costs included",
              "Vendor evaluation scorecards and partnership models"
            ],
            "do": [
              "Run a scored build-vs-buy-vs-partner analysis for one capability",
              "Model 3-year TCO including people and integration costs",
              "Write the exit strategy before signing anything"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "Partnerships fail on misaligned incentives, not technology. Evaluate the vendor's business model as carefully as their API."
          },
          {
            "t": "Total Cost of Ownership",
            "d": "The real price tag: licenses plus people, ops, and risk.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Beyond licenses: operations, training, hiring, and incident costs",
              "Cloud cost modeling: the bill as an architectural feedback loop",
              "FinOps basics: tagging, budgets, and accountability for spend"
            ],
            "do": [
              "TCO-compare two architectural options over 3 years including people costs",
              "Find the most expensive surprise in a cloud bill you can access",
              "Propose one architectural change that measurably cuts cost"
            ],
            "tools": [],
            "res": [
              ["AWS Well-Architected Framework", "https://aws.amazon.com/architecture/well-architected/"]
            ],
            "tip": "Every architecture is also a budget. If you cannot estimate its cost, you cannot responsibly recommend it."
          },
          {
            "t": "Platform Thinking",
            "d": "Internal platforms as products, with users and roadmaps.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Paved roads: making the right way the easy way for product teams",
              "Platform teams as product teams: users, feedback, and adoption metrics",
              "Build-vs-platform tension: when centralization helps and when it harms"
            ],
            "do": [
              "Identify 3 paved-road candidates in your organization",
              "Interview 2 potential platform users about their pain",
              "Define adoption metrics for one platform offering"
            ],
            "tools": ["Backstage"],
            "res": [
              ["Backstage", "https://backstage.io/"]
            ],
            "tip": "A platform nobody adopts is a tax. Treat internal developers as customers, or they will route around you."
          },
          {
            "t": "Technology Radar Practice",
            "d": "A living portfolio view of your technology choices.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Adopt, trial, assess, hold: the four rings and what moves items between them",
              "Quarterly radar rituals: keeping the portfolio view current",
              "Killing darlings: retiring technology with dignity and a migration path"
            ],
            "do": [
              "Draft a team radar with 12 technologies placed in rings",
              "Write the rationale blurb for 3 controversial placements",
              "Schedule the first quarterly review"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "The hold ring is the most valuable: naming what to stop using prevents a thousand small bad decisions."
          },
          {
            "t": "Architecture Runway in Agile",
            "d": "Just-enough upfront architecture that keeps agile teams unblocked.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Intentional vs emergent architecture: balancing the two deliberately",
              "Enabler epics: technical work expressed in planning language",
              "The runway: building technical foundations just ahead of feature need"
            ],
            "do": [
              "Plan one increment's enablers alongside its features",
              "Define how much runway your teams need (one sprint? one quarter?)",
              "Review last quarter: where did missing runway slow features down?"
            ],
            "tools": [],
            "res": [
              ["Scaled Agile Framework", "https://www.scaledagileframework.com/"]
            ],
            "tip": "No runway means every feature pays the architecture tax individually. A little intentional architecture compounds."
          },
          {
            "t": "Measuring Architecture Success",
            "d": "Proving your architecture works with numbers, not adjectives.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "DORA metrics: deployment frequency, lead time, change failure rate, MTTR",
              "Architectural KPIs: coupling trends, build times, incident causes",
              "Developer experience metrics: the human side of architectural quality"
            ],
            "do": [
              "Pick 3 architecture health metrics and baseline them",
              "Instrument one metric you have never measured",
              "Present the baseline to stakeholders with a trend plan"
            ],
            "tools": ["Grafana"],
            "res": [
              ["DORA", "https://dora.dev/"]
            ],
            "tip": "Measure outcomes (lead time, failures), not outputs (diagrams drawn). Architecture serves delivery, and delivery is measurable."
          }
        ]
      }
    ]
  }
});
