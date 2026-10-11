/* Atlas roadmap data: Design and Architecture (design-and-architecture) */
ROADMAPS.push({
  "id": "design-and-architecture",
  "title": "Design and Architecture",
  "icon": "🧱",
  "color": "#fcd34d",
  "desc": "From clean code to documented, evolvable architectures: design well, decide well, and communicate the why.",
  "kind": "skill",
  "root": {
    "t": "Software Design and Architecture",
    "d": "From SOLID code to documented, evolvable architectures: design well, decide well, communicate well.",
    "children": [
      {
        "t": "Thinking Like an Architect",
        "d": "The mindset shift: from writing code to shaping decisions that outlive code.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Software Architecture",
            "d": "The set of decisions that are expensive to change later.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Architecture vs design: significant, hard-to-reverse decisions vs everyday choices",
              "Structure plus behavior: what the system is made of and how it acts",
              "Architecture as shared understanding, not just diagrams"
            ],
            "do": [
              "Write a one-paragraph architecture description of an app you know well",
              "List 5 decisions in it and rank them by cost of being wrong",
              "Identify which decisions were never written down anywhere"
            ],
            "tools": ["C4 model"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "If everything is called architecture, nothing is. Reserve the word for decisions with the highest cost of being wrong."
          },
          {
            "t": "Quality Attributes",
            "d": "The ilities that decide whether a system survives contact with reality.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Runtime qualities: performance, scalability, reliability, availability, security",
              "Design-time qualities: maintainability, testability, deployability, extensibility",
              "Quality attributes conflict: every gain somewhere is paid for elsewhere"
            ],
            "do": [
              "Rank 6 quality attributes for a fintech app and justify the order",
              "Repeat for a weekend side project and compare the two rankings",
              "Find one pair that directly conflicts and name the tradeoff"
            ],
            "tools": [],
            "res": [
              ["Software Engineering Institute", "https://www.sei.cmu.edu/"]
            ],
            "tip": "Nobody pays for all the ilities. The architect's real job is choosing which ones to sacrifice, on purpose, in writing."
          },
          {
            "t": "Functional vs Quality Requirements",
            "d": "What the system does versus how well it does it, made measurable.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Functional requirements describe behavior; quality requirements describe fitness",
              "Quality attribute scenarios: stimulus, response, and a measurable target",
              "Vague NFRs like fast or scalable are wishes until quantified"
            ],
            "do": [
              "Rewrite 'the system must be fast' as 3 measurable scenarios",
              "Take a feature you built and add the quality requirements it was missing",
              "Review a real requirements doc and highlight every unmeasurable NFR"
            ],
            "tools": [],
            "res": [
              ["arc42 Template", "https://arc42.org/"]
            ],
            "tip": "An unmeasurable requirement is undebatable and untestable. If you cannot put a number on it, it is not a requirement yet."
          },
          {
            "t": "Constraints and Context",
            "d": "Real architecture happens inside real limits: budget, team, law, and legacy.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Technical, business, and organizational constraints shape every design",
              "Conway's law preview: the org chart leaks into the architecture",
              "Designing inside limits beats designing the perfect system on paper"
            ],
            "do": [
              "List the constraints on a side project: team of one, zero budget, real deadline",
              "Show how one constraint forced a simpler architecture choice",
              "Write the constraints section for a system at your work or school"
            ],
            "tools": [],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ]
          },
          {
            "t": "Views and Perspectives",
            "d": "Different stakeholders need different pictures of the same system.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Structural, behavioral, and deployment views answer different questions",
              "The 4+1 view model: logical, process, development, physical, plus scenarios",
              "One diagram for everyone is a diagram for no one"
            ],
            "do": [
              "Draw two views of the same system: one for a new developer, one for ops",
              "Ask which questions each view answers and which it cannot",
              "Delete every box that serves neither view"
            ],
            "tools": ["draw.io"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "Start every diagram by naming its audience and its question. A diagram without an audience is decoration."
          },
          {
            "t": "Architecture Fitness Functions",
            "d": "Automated tests that protect your architectural intent from entropy.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Fitness functions: executable checks on layering, dependencies, and quality goals",
              "Examples: no cyclic package dependencies, UI never touches the database",
              "The evolutionary architecture idea: architecture guided by continuous feedback"
            ],
            "do": [
              "Add an ArchUnit test that forbids your UI layer from importing the database layer",
              "Break the rule deliberately and watch the build fail",
              "List 3 architectural rules in your project worth automating"
            ],
            "tools": ["ArchUnit", "Deptrac"],
            "res": [
              ["Evolutionary Architecture", "https://evolutionaryarchitecture.com/"]
            ],
            "tip": "An architectural rule that lives only in a wiki is a suggestion. Automate it or accept that it will erode."
          }
        ]
      },
      {
        "t": "Design Foundations",
        "d": "The principles that keep codebases understandable as they grow.",
        "lv": 1,
        "children": [
          {
            "t": "SOLID Principles",
            "d": "Five guidelines for classes that stay changeable, in plain words.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "SRP, OCP, LSP, ISP, DIP: what each one actually asks of your code",
              "Where SOLID helps: boundaries, extension points, and testability",
              "Where SOLID hurts: abstraction soup from applying it blindly"
            ],
            "do": [
              "Refactor a 300-line class applying SRP and ISP",
              "Find an LSP violation (a subclass that breaks its parent's contract) and fix it",
              "Identify one place where you previously over-abstracted"
            ],
            "tools": [],
            "res": [
              ["Clean Coder Blog", "https://blog.cleancoder.com/"]
            ],
            "tip": "SOLID is guidance, not law. Code that follows every letter of SOLID can still be unreadable; judgment beats compliance."
          },
          {
            "t": "DRY, YAGNI, KISS",
            "d": "Three razor blades against over-engineering.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "DRY: every piece of knowledge has one authoritative home",
              "YAGNI: do not build for futures that may never arrive",
              "KISS and the wrong-abstraction trap: duplication is cheaper than the wrong abstraction"
            ],
            "do": [
              "Find 3 YAGNI violations in your own code and delete them",
              "Find one duplication that should stay duplicated (for now) and explain why",
              "Simplify one clever solution into a boring one"
            ],
            "tools": [],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "Duplication is far cheaper than the wrong abstraction. Abstract on the third repetition, not the first."
          },
          {
            "t": "Coupling and Cohesion",
            "d": "The two dials that determine whether change is easy or terrifying.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Coupling: how much modules depend on each other; cohesion: how focused a module is",
              "Connascence: the deeper vocabulary of coupling, from names to execution order",
              "Afferent and efferent coupling, instability, and the stable-abstractions principle"
            ],
            "do": [
              "Compute instability for two packages in a project you know",
              "Refactor one highly-coupled pair toward an interface",
              "Find the most cohesive module you have written and study why it works"
            ],
            "tools": ["Deptrac"],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "Aim for high cohesion and loose coupling, but remember: some coupling is essential. The goal is the right coupling, visible and deliberate."
          },
          {
            "t": "Information Hiding and Boundaries",
            "d": "Encapsulating what varies so change stays local.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Parnas: hide design decisions behind interfaces, not just data behind getters",
              "Module boundaries: public vs published interfaces and who may depend on them",
              "Facades and anti-corruption layers as boundary tools"
            ],
            "do": [
              "Hide a module behind a facade and swap its implementation",
              "Audit a codebase for leaked internals (public fields, god objects)",
              "Draw the dependency arrows between 3 modules and reverse one"
            ],
            "tools": [],
            "res": [
              ["Hexagonal Architecture", "https://alistair.cockburn.us/hexagonal-architecture/"]
            ],
            "tip": "Every public method is a promise you must keep. Small public surfaces make brave refactoring possible."
          },
          {
            "t": "GoF Design Patterns, the Essentials",
            "d": "The handful of patterns that actually show up in real codebases.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "The essential six: Strategy, Observer, Factory, Adapter, Decorator, Facade",
              "Pattern vs principle: patterns are vocabulary, not building blocks to collect",
              "Recognizing pattern-shaped problems instead of forcing patterns onto code"
            ],
            "do": [
              "Replace a switch statement with the Strategy pattern",
              "Wrap an awkward legacy API with the Adapter pattern",
              "Find a Decorator in a framework you use and trace how it composes"
            ],
            "tools": [],
            "res": [
              ["Refactoring.Guru Design Patterns", "https://refactoring.guru/design-patterns"]
            ],
            "tip": "Learn patterns to recognize them, not to install them. Code that announces its patterns is usually over-designed."
          },
          {
            "t": "Component Design Principles",
            "d": "Packaging decisions are architecture decisions.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "REP, CCP, CRP: what belongs together in a releasable component",
              "ADP, SDP, SAP: keeping the component dependency graph acyclic and stable",
              "Components as the unit of reuse, release, and team ownership"
            ],
            "do": [
              "Draw your app's component dependency graph",
              "Find a cycle and propose how to break it",
              "Assign each component a single owning team on paper"
            ],
            "tools": ["Deptrac", "ArchUnit"],
            "res": [
              ["Clean Coder Blog", "https://blog.cleancoder.com/"]
            ],
            "tip": "If two components always change together, they are one component. Packaging follows change, not folder aesthetics."
          }
        ]
      },
      {
        "t": "Architectural Styles",
        "d": "The big shapes systems take, and what each one costs.",
        "lv": 2,
        "children": [
          {
            "t": "Layered (n-Tier) Architecture",
            "d": "Horizontal layers with one rule: dependencies point down.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Typical layers: presentation, business, persistence, database",
              "The dependency rule and the layer-bypass trap that rots layered apps",
              "When layering helps (clear separation) and when it strangles (distributed monolith)"
            ],
            "do": [
              "Enforce layering in a small app with package dependency rules",
              "Deliberately bypass a layer and observe the test that catches it",
              "Map a framework you use onto its layers"
            ],
            "tools": ["Spring", "ArchUnit"],
            "res": [
              ["Martin Fowler", "https://martinfowler.com"]
            ],
            "tip": "Layer bypass is how layered architectures die: one shortcut becomes the norm. Enforce the rule in the build, not in reviews."
          },
          {
            "t": "Hexagonal Architecture (Ports and Adapters)",
            "d": "Isolating your core logic from every framework, database, and API.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Ports are interfaces the application defines; adapters implement them for the outside world",
              "The core never imports infrastructure: dependency inversion at the boundary",
              "Testability win: swap real adapters for in-memory fakes"
            ],
            "do": [
              "Refactor a service so the database sits behind a port interface",
              "Swap the real adapter for an in-memory fake in tests",
              "Add a second adapter (e.g. REST alongside the existing one) without touching the core"
            ],
            "tools": [],
            "res": [
              ["Hexagonal Architecture", "https://alistair.cockburn.us/hexagonal-architecture/"]
            ],
            "tip": "The test is simple: can you run your business logic with zero infrastructure? If not, the hexagon has a leak."
          },
          {
            "t": "Clean and Onion Architecture",
            "d": "Dependency inversion as the organizing principle of the whole app.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The dependency rule: inner circles know nothing of outer circles",
              "Entities, use cases, interface adapters, frameworks: each ring's job",
              "Frameworks as details: your app should not be a plugin to its framework"
            ],
            "do": [
              "Restructure a CRUD app into clean layers with inward-only dependencies",
              "Move framework code to the outermost ring",
              "Verify with a dependency rule test"
            ],
            "tools": [],
            "res": [
              ["Clean Coder Blog", "https://blog.cleancoder.com/"]
            ],
            "tip": "Clean architecture shines in complex domains and drowns simple CRUD. Match the ceremony to the complexity."
          },
          {
            "t": "Event-Driven Architecture",
            "d": "Components reacting to facts instead of calling each other.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Events as facts about the past: immutable, broadcast, stored",
              "Choreography vs orchestration: emergent flows vs a central conductor",
              "Eventual consistency acceptance and event schema evolution"
            ],
            "do": [
              "Build a choreographed order flow with events on a broker",
              "Add a new consumer without touching the publisher",
              "Evolve an event schema and keep old consumers working"
            ],
            "tools": ["Apache Kafka", "NATS"],
            "res": [
              ["Enterprise Integration Patterns", "https://www.enterpriseintegrationpatterns.com/"]
            ],
            "tip": "Event-driven systems fail mysteriously when nobody can see the whole flow. Invest in observability before you need it."
          },
          {
            "t": "Microservices",
            "d": "Independently deployable services, and the distributed-systems bill that comes with them.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "One bounded context per service, owning its data exclusively",
              "Independent deployability as the actual goal, not smallness",
              "The costs: network failures, distributed transactions, operational overhead"
            ],
            "do": [
              "Split one bounded context out of a monolith into its own service",
              "Keep its data private: no shared database with the monolith",
              "Deploy both independently and document what broke"
            ],
            "tools": ["Docker", "Kubernetes"],
            "res": [
              ["microservices.io", "https://microservices.io/"]
            ],
            "tip": "Microservices are an organizational scaling tool first and a technical one second. Without team-scale pain, they are pure overhead."
          },
          {
            "t": "The Modular Monolith",
            "d": "Hard module boundaries inside one deployable: the sane default.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Modules with enforced boundaries, one deployment, one database (with private schemas)",
              "Why it beats microservices for most teams: transactions, refactoring, and simple ops",
              "Extracting a service later when a module genuinely needs independence"
            ],
            "do": [
              "Define module APIs in a monolith and ban cross-module imports in the build",
              "Give each module its own database schema with no cross-schema queries",
              "Write the extraction plan for one module, then decide not to do it yet"
            ],
            "tools": ["ArchUnit", "Spring Modulith"],
            "res": [
              ["Spring Modulith", "https://spring.io/projects/spring-modulith"]
            ],
            "tip": "Start modular-monolith, extract on evidence. It is far easier to split a well-modularized monolith than to fix a distributed ball of mud."
          },
          {
            "t": "Serverless Architecture",
            "d": "Functions and managed services that scale to zero and bill by the millisecond.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "FaaS plus BaaS: functions for logic, managed services for everything else",
              "Cold starts, execution limits, and the event-driven cost model",
              "Vendor coupling: the price of never managing servers"
            ],
            "do": [
              "Deploy an event-driven pipeline on Lambda plus SQS",
              "Measure cold-start latency and mitigate with provisioned concurrency",
              "Compare the monthly bill against an always-on alternative"
            ],
            "tools": ["AWS Lambda", "Terraform"],
            "res": [
              ["AWS Lambda", "https://aws.amazon.com/lambda/"]
            ],
            "tip": "Serverless bills per invocation: a chatty architecture becomes a chatty invoice. Design coarse-grained functions."
          },
          {
            "t": "CQRS",
            "d": "Separate models for reading and writing when one model serves neither well.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Command side optimized for business rules, query side optimized for reads",
              "Works with or without event sourcing; the separation is the point",
              "Complexity cost: two models to maintain and keep consistent"
            ],
            "do": [
              "Add a read-model projection to a write-heavy service",
              "Serve a complex dashboard query from the projection instead of joins",
              "Handle the consistency lag in the UI honestly"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["CQRS (Fowler)", "https://martinfowler.com/bliki/CQRS.html"]
            ],
            "tip": "Apply CQRS to the bounded context that needs it, not the whole system. Most of your app is fine with one model."
          }
        ]
      },
      {
        "t": "Domain-Driven Design Basics",
        "d": "Modeling software on the real domain, with the people who live in it.",
        "lv": 2,
        "children": [
          {
            "t": "Ubiquitous Language",
            "d": "One shared language between developers and domain experts, used in code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The language shapes the model: sloppy terms produce sloppy designs",
              "Used everywhere: conversations, docs, and class names alike",
              "Glossary discipline: define terms, kill synonyms, update as understanding grows"
            ],
            "do": [
              "Build a glossary for a domain you know, with one definition per term",
              "Rename code to match the glossary exactly",
              "Find three synonyms in an existing codebase and unify them"
            ],
            "tools": [],
            "res": [
              ["Domain Language", "https://www.domainlanguage.com/"]
            ],
            "tip": "If developers and domain experts use different words for the same thing, you have two models and zero shared understanding."
          },
          {
            "t": "Bounded Contexts",
            "d": "Drawing lines where a word means exactly one thing.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "A bounded context is where the ubiquitous language is consistent",
              "Big-bang unified models fail: one Customer class cannot serve billing and shipping",
              "Contexts as natural service and module boundaries"
            ],
            "do": [
              "Draw context boundaries for an e-commerce domain (catalog, orders, shipping, billing)",
              "List terms that change meaning across your boundaries",
              "Show where a past project suffered from a missing boundary"
            ],
            "tools": [],
            "res": [
              ["Domain Language", "https://www.domainlanguage.com/"]
            ],
            "tip": "'Customer' means different things to billing and shipping. That is two contexts, not one class with nullable fields."
          },
          {
            "t": "Aggregates, Entities, Value Objects",
            "d": "The tactical patterns that keep domain models consistent.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Aggregates as consistency boundaries: invariants enforced at the root",
              "Entities have identity; value objects are immutable and compared by value",
              "Small aggregates: the bigger the aggregate, the bigger the contention"
            ],
            "do": [
              "Model an Order aggregate with its invariants enforced at the root",
              "Convert a mutable entity into a value object where identity does not matter",
              "Split one oversized aggregate and justify the new boundary"
            ],
            "tools": [],
            "res": [
              ["DDD Community", "https://dddcommunity.org/"]
            ],
            "tip": "If your aggregate is hard to keep consistent, it is probably two aggregates. Shrink until the invariants feel obvious."
          },
          {
            "t": "Context Mapping",
            "d": "Describing how bounded contexts relate without corrupting each other.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Relationship patterns: partnership, shared kernel, customer-supplier, conformist",
              "Anti-corruption layer: translating a foreign model at the boundary",
              "Open-host service and published language for upstream contexts"
            ],
            "do": [
              "Map the relationships between 3 contexts in a system you know",
              "Identify one conformist relationship that hurts and propose an ACL",
              "Draw the map on one page a newcomer could understand"
            ],
            "tools": [],
            "res": [
              ["Domain Language", "https://www.domainlanguage.com/"]
            ],
            "tip": "Integration without a context map becomes accidental coupling. Name the relationship deliberately or inherit the worst one."
          },
          {
            "t": "Event Storming",
            "d": "A workshop that extracts the domain model from the people who live it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Timeline-first: domain events on a wall, in chronological order",
              "Hotspots reveal boundaries: arguments cluster where contexts split",
              "Cheap and fast: a few hours with sticky notes beats weeks of guessing"
            ],
            "do": [
              "Run a 1-hour solo event storm of a process you know (ordering food, enrolling at uni)",
              "Mark the hotspots where you were unsure",
              "Derive 2 candidate bounded contexts from the event clusters"
            ],
            "tools": ["Miro"],
            "res": [
              ["EventStorming", "https://www.eventstorming.com/"]
            ],
            "tip": "Invite the domain expert, not just developers. The model lives in their head; the workshop just extracts it."
          },
          {
            "t": "Strategic vs Tactical DDD",
            "d": "Knowing which half of DDD your project actually needs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Strategic: contexts, maps, and language, the big-picture half",
              "Tactical: aggregates, entities, value objects, the code-level half",
              "When full DDD is overkill: simple domains need strategic thinking, not tactical machinery"
            ],
            "do": [
              "Take a CRUD app and decide which DDD parts to skip, with reasons",
              "Take a complex domain and show where tactical patterns earn their keep",
              "Write your personal 'DDD litmus test' for future projects"
            ],
            "tools": [],
            "res": [
              ["DDD Community", "https://dddcommunity.org/"]
            ],
            "tip": "DDD is a thinking toolkit, not a framework to install. Most apps need the strategic half; few need the full tactical arsenal."
          }
        ]
      },
      {
        "t": "Decisions and Tradeoffs",
        "d": "Making architectural choices explicit, recorded, and revisable.",
        "lv": 3,
        "children": [
          {
            "t": "Architecture Decision Records",
            "d": "Capturing the why behind decisions in small files that live with the code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ADR anatomy: context, decision, consequences, and status lifecycle",
              "Supersede, never rewrite: decision history is as valuable as the current state",
              "Lightweight process: a markdown file and a pull request beat a committee"
            ],
            "do": [
              "Write 3 ADRs for real decisions in your current project",
              "Supersede one old decision with a new ADR linking back",
              "Set up adr-tools or Log4brains in a repo"
            ],
            "tools": ["adr-tools", "Log4brains"],
            "res": [
              ["Architecture Decision Records", "https://adr.github.io/"]
            ],
            "tip": "Record the options you rejected and why. Future-you will thank present-you when the same debate resurfaces."
          },
          {
            "t": "Tradeoff Analysis",
            "d": "Comparing options honestly against weighted quality attributes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Every quality attribute trades against another: name the price of each option",
              "Decision matrices: scoring options against weighted criteria",
              "ATAM-lite: structured evaluation without the full ceremony"
            ],
            "do": [
              "Score 3 architecture options against 5 weighted quality attributes",
              "Present the matrix to someone and defend the weights",
              "Record the outcome as an ADR"
            ],
            "tools": [],
            "res": [
              ["Software Engineering Institute", "https://www.sei.cmu.edu/"]
            ],
            "tip": "If your analysis crowns your favorite option on every criterion, redo it. Honest weights sometimes pick the boring winner."
          },
          {
            "t": "Build vs Buy vs Borrow",
            "d": "The economics of not building everything yourself.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Core vs context: build what differentiates, buy or borrow the rest",
              "Total cost of ownership: licenses plus integration, ops, and exit costs",
              "Evaluation scorecards: deciding with criteria instead of demos"
            ],
            "do": [
              "Run a build-vs-buy analysis for authentication in a new product",
              "Score 2 vendors against a 10-criterion scorecard",
              "Write the exit strategy for the winner before signing anything"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "The purchase price is the smallest part of buying. Integration, lock-in, and exit costs decide whether it was a good deal."
          },
          {
            "t": "Conway's Law and Team Topologies",
            "d": "Your org chart is already designing your system. Design it on purpose.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Conway's law: systems mirror the communication structures of their builders",
              "The reverse Conway maneuver: organizing teams to get the architecture you want",
              "Team cognitive load and platform teams: topologies that scale"
            ],
            "do": [
              "Map your team's communication paths onto the architecture diagram",
              "Find one place where the org structure created an awkward boundary",
              "Propose a team-topology change and the architecture it would enable"
            ],
            "tools": [],
            "res": [
              ["Team Topologies", "https://teamtopologies.com/"]
            ],
            "tip": "You cannot fix a Conway problem with technology. If the teams cannot talk, the services will not integrate cleanly either."
          },
          {
            "t": "Evolutionary Architecture",
            "d": "Designing for change instead of predicting the future.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Defer decisions to the last responsible moment",
              "Fitness functions as the mechanism that lets architecture evolve safely",
              "Incremental change beats big-bang rewrites"
            ],
            "do": [
              "List 5 decisions in your project to defer, with revisit triggers for each",
              "Protect one architectural rule with a fitness function",
              "Plan a change as 4 safe increments instead of one risky release"
            ],
            "tools": ["ArchUnit"],
            "res": [
              ["Evolutionary Architecture", "https://evolutionaryarchitecture.com/"]
            ],
            "tip": "The best architects are comfortable saying 'we will decide later'. Deferral is a decision too, if it has a trigger."
          },
          {
            "t": "Technical Debt as Architecture",
            "d": "Treating debt as leverage to manage, not sin to confess.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Intentional vs accidental debt: leverage versus decay",
              "Interest payments: the ongoing cost of each shortcut",
              "Repayment strategies: Boy Scout rule, dedicated time, and debt sprints"
            ],
            "do": [
              "Inventory architectural debt with an interest rate on each item",
              "Prioritize one repayment with a business-case paragraph",
              "Negotiate 20% capacity for debt work and track what it buys"
            ],
            "tools": ["SonarQube"],
            "res": [
              ["Technical Debt (Fowler)", "https://martinfowler.com/bliki/TechnicalDebt.html"]
            ],
            "tip": "Debt you track is leverage; debt you ignore is rot. The register matters more than the repayment speed."
          }
        ]
      },
      {
        "t": "Documenting and Communicating Architecture",
        "d": "Architecture that cannot be explained cannot be followed.",
        "lv": 3,
        "children": [
          {
            "t": "The C4 Model",
            "d": "Zoomable diagrams: context, container, component, code.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Four levels: system context, containers, components, and code",
              "Each level serves a different audience with a different question",
              "Notation discipline: consistent shapes, labeled relationships, legends"
            ],
            "do": [
              "Draw Context and Container diagrams for a real system you know",
              "Zoom into one container with a Component diagram",
              "Show the Context diagram to a non-technical person and test comprehension"
            ],
            "tools": ["Structurizr", "draw.io"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "Most architecture diagrams fail by mixing zoom levels. One level per diagram, always, with a clear title."
          },
          {
            "t": "Diagrams as Code",
            "d": "Versioned, reviewable diagrams that do not rot in a wiki.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Diagrams in git: diffable, reviewable, and rendered in CI",
              "Structurizr DSL, Mermaid, and PlantUML: picking the right tool per diagram",
              "Docs that evolve with the code instead of fossilizing beside it"
            ],
            "do": [
              "Check a Structurizr workspace into git and render it in CI",
              "Convert one stale wiki diagram to Mermaid in a markdown file",
              "Add a CI check that diagrams still render"
            ],
            "tools": ["Structurizr", "Mermaid", "PlantUML"],
            "res": [
              ["Structurizr", "https://structurizr.com/"]
            ],
            "tip": "A diagram nobody updates is worse than no diagram: it actively misleads. Diagrams as code make updates cheap enough to happen."
          },
          {
            "t": "The arc42 Template",
            "d": "A complete architecture document in 12 well-chosen sections.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "The 12 sections: goals, constraints, context, solution strategy, building blocks, runtime, deployment, crosscutting concepts, decisions, quality, risks, glossary",
              "Filling just enough: arc42 works as a checklist, not a novel",
              "Living document: updating sections as decisions change"
            ],
            "do": [
              "Fill arc42 sections 1-4 (goals, constraints, context, strategy) for your project",
              "Write the building-block view for one subsystem",
              "Link each decision to its ADR"
            ],
            "tools": [],
            "res": [
              ["arc42 Template", "https://arc42.org/"]
            ],
            "tip": "Start with sections 1-3 and 12. Goals, constraints, context, and glossary deliver 80% of the value for 20% of the effort."
          },
          {
            "t": "Sequence and Runtime Views",
            "d": "Showing behavior over time, especially when it goes wrong.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Sequence diagrams for critical interactions: who calls whom, in what order",
              "Runtime scenarios: the happy path plus the failure and recovery paths",
              "State machines for lifecycle-heavy components"
            ],
            "do": [
              "Diagram the failure path of a payment flow, not just the happy path",
              "Add timeout and retry annotations to the sequence",
              "Review it with a teammate and find the missing step"
            ],
            "tools": ["Mermaid"],
            "res": [
              ["C4 Model", "https://c4model.com/"]
            ],
            "tip": "Happy-path diagrams are marketing. The runtime view earns its keep on the failure path: draw what happens when step 3 times out."
          },
          {
            "t": "Presenting Architecture to Stakeholders",
            "d": "Framing technical choices so non-technical people can decide with you.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Audience-first framing: cost, risk, and speed instead of tech names",
              "Always present options with honest tradeoffs, never a single recommendation",
              "The 10-minute executive version and handling pushback gracefully"
            ],
            "do": [
              "Present one ADR to a non-technical friend in 5 minutes",
              "Rewrite a technical proposal in business language",
              "Prepare answers for the 3 hardest questions you might get"
            ],
            "tools": [],
            "res": [
              ["ThoughtWorks Technology Radar", "https://www.thoughtworks.com/radar"]
            ],
            "tip": "Never present one option. Two options with honest tradeoffs build trust; one option looks like a sales pitch."
          },
          {
            "t": "Lightweight Architecture Reviews",
            "d": "Reviews as learning rituals, not approval gates.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Review goals: risk reduction and knowledge sharing, not gatekeeping",
              "Checklists over opinions: consistent, blameless, and fast",
              "Recording outcomes as ADRs so the review leaves a trace"
            ],
            "do": [
              "Draft a one-page review checklist for your team",
              "Run a 45-minute review of a teammate's design using it",
              "Write the review outcome as an ADR"
            ],
            "tools": [],
            "res": [
              ["arc42 Template", "https://arc42.org/"]
            ],
            "tip": "A review that only approves or blocks is a bottleneck. A review that teaches makes the next ten designs better."
          }
        ]
      }
    ]
  }
});
