/* Atlas roadmap data: Product Manager (product-manager) */
ROADMAPS.push({
  "id": "product-manager",
  "title": "Product Manager",
  "icon": "🗺️",
  "color": "#6d597a",
  "desc": "The PM craft: discovery and strategy, roadmaps and specs, metrics and experiments, launches and stakeholder leadership.",
  "kind": "role",
  "root": {
    "t": "Product Management",
    "d": "Own the what and the why so the team can own the how.",
    "children": [
      {
        "t": "PM Foundations",
        "d": "What product management is, and how PMs actually spend their days.",
        "lv": 1,
        "children": [
          {
            "t": "What Product Management Is",
            "d": "PMs sit at the intersection of business, tech, and UX, owning outcomes.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The PM as the owner of the 'what' and 'why', not the 'how'",
              "Outcomes vs outputs: shipped features vs changed user behavior",
              "The classic Venn: business, technology, and user experience"
            ],
            "do": [
              "Pick a product you love and write its one-sentence 'what and why'",
              "List 5 outcomes vs 5 outputs for a music streaming app",
              "Shadow a PM for a day if you can; otherwise read 3 'day in the life' accounts"
            ],
            "tools": [],
            "res": [
              ["SVPG: Product Management", "https://www.svpg.com"],
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "New PMs manage features. Good PMs manage outcomes. If you cannot name the outcome, you are a project manager with a fancier title."
          },
          {
            "t": "Product vs Project Management",
            "d": "Products are ongoing bets on users. Projects are temporary efforts with deadlines.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Product: continuous, outcome-owned, never 'done'",
              "Project: scoped, schedule-owned, ends at delivery",
              "Why confusing the two produces feature factories"
            ],
            "do": [
              "Take 5 job postings and classify them as product or project roles",
              "Rewrite a project-style plan ('deliver X by June') as a product bet ('improve Y metric')",
              "Explain the difference to a friend in under a minute"
            ],
            "tools": [],
            "res": [
              ["SVPG", "https://www.svpg.com"]
            ],
            "tip": "Interviewers test this constantly. If you describe product work as hitting delivery dates, you have already failed the interview."
          },
          {
            "t": "The Product Development Lifecycle",
            "d": "Introduction, growth, maturity, decline: products age, and strategy must age with them.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The four lifecycle stages and what each demands (find fit, scale, defend, harvest or sunset)",
              "How PM focus shifts: discovery-heavy early, optimization-heavy late",
              "Sunsetting: the disciplined art of killing products"
            ],
            "do": [
              "Place 5 products you use on the lifecycle curve with evidence",
              "Write what the PM priorities should be for one product in each stage",
              "Find a famous sunset (e.g. a Google product) and analyze how it was handled"
            ],
            "tools": [],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "Most PM advice assumes growth stage. A mature product needs different strategy than a 0-to-1 bet: know which game you are playing."
          },
          {
            "t": "The PM Skill Stack",
            "d": "Communication, analytics, technical fluency, and business sense: the four pillars.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Communication: writing, presenting, and aligning without authority",
              "Analytical: metrics, SQL basics, experiment design",
              "Technical fluency: enough to earn engineering respect",
              "Business sense: unit economics, pricing, and strategy"
            ],
            "do": [
              "Rate yourself 1-5 on each pillar with evidence",
              "Pick your weakest pillar and start a 30-day improvement plan",
              "Write a product memo: one page, clear recommendation, data-backed"
            ],
            "tools": [],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "PMs are hired on spikes and fired on gaps. Know your spike, but fix the gap that blocks your next level."
          },
          {
            "t": "A Week in the Life of a PM",
            "d": "Discovery, delivery, stakeholders, and firefighting: how the calendar really looks.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The time split: discovery vs delivery vs stakeholders vs admin",
              "Ceremonies: standups, planning, reviews, retros, 1:1s",
              "Protecting maker time in a meeting-heavy role"
            ],
            "do": [
              "Draft your ideal PM weekly calendar with time blocks",
              "Attend or watch recordings of real agile ceremonies",
              "Practice writing a weekly update: wins, risks, asks"
            ],
            "tools": ["Notion", "Slack"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "If your calendar is 100% delivery meetings, you are not doing discovery. Block discovery time like a customer meeting: non-negotiable."
          }
        ]
      },
      {
        "t": "Discovery & User Research",
        "d": "Fall in love with the problem before you propose the solution.",
        "lv": 1,
        "children": [
          {
            "t": "Framing the Problem",
            "d": "A well-framed problem is half solved. Most teams skip this and pay for it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Problem statements: who, what, why it matters, and how we will know",
              "The 5 Whys: drilling past symptoms to root causes",
              "Opportunity solution trees: mapping problems to possible bets"
            ],
            "do": [
              "Write 5 problem statements using the who/what/why/measure format",
              "Run 5 Whys on a product complaint you have",
              "Build an opportunity solution tree for one product area"
            ],
            "tools": ["Miro", "FigJam"],
            "res": [
              ["Product Talk: Teresa Torres", "https://www.producttalk.org"]
            ],
            "tip": "Teams that jump to solutions argue about features. Teams that frame problems argue about users, and ship better things."
          },
          {
            "t": "Running User Interviews",
            "d": "Ask about behavior, not opinions. Listen more than you talk.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Interview structure: context, behavior, pain, workarounds",
              "The Mom Test rules: no leading questions, no pitching, ask for specifics",
              "Synthesis: affinity mapping interviews into themes"
            ],
            "do": [
              "Write an interview guide for a real product question",
              "Run 3 interviews with real users and record them (with permission)",
              "Affinity-map the notes into 3-5 themes and present findings"
            ],
            "tools": ["Otter.ai", "Dovetail"],
            "res": [
              ["The Mom Test (Rob Fitzpatrick)", "https://www.momtestbook.com"]
            ],
            "tip": "'Would you use this?' gets lies. 'Tell me about the last time you...' gets truth. Never ask for opinions about your idea."
          },
          {
            "t": "Surveys & Quantitative Research",
            "d": "Interviews tell you why. Surveys tell you how many.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "When surveys beat interviews: prevalence, segmentation, prioritization",
              "Question design: neutral wording, balanced scales, avoiding bias",
              "Sampling: who answers determines what you learn"
            ],
            "do": [
              "Design a 10-question survey for a product decision",
              "Pilot it with 5 people and fix the confusing questions",
              "Analyze 50+ responses and segment by user type"
            ],
            "tools": ["Typeform", "Google Forms"],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "A survey of the wrong 500 people is worse than 5 right interviews. Sampling beats sample size."
          },
          {
            "t": "Personas & Jobs to Be Done",
            "d": "Personas describe who. JTBD describes why they hire your product.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Personas done right: based on research, tied to behaviors, not demographics",
              "Jobs to Be Done: the progress a user wants in a given circumstance",
              "Using JTBD to find competitors you never considered"
            ],
            "do": [
              "Write 2 research-backed personas for a product you know",
              "Write 5 job stories: 'When I..., I want to..., so I can...'",
              "List the non-obvious competitors for one job (spreadsheets compete with software)"
            ],
            "tools": ["Miro"],
            "res": [
              ["JTBD: Clayton Christensen", "https://www.christenseninstitute.org/jobs-to-be-done/"]
            ],
            "tip": "Personas that sit in a drawer are decoration. Tie every persona to decisions: what would we build differently for them?"
          },
          {
            "t": "Competitive Analysis",
            "d": "Know the battlefield: direct rivals, substitutes, and the status quo.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Competitor types: direct, indirect, and the 'do nothing' option",
              "Feature matrices vs positioning maps: what to compare",
              "Finding the gap: where competitors are weak and users are unhappy"
            ],
            "do": [
              "Build a competitive matrix for 5 products in one category",
              "Read 50 competitor reviews and extract the top 10 complaints",
              "Write a one-page competitive brief with your recommended differentiation"
            ],
            "tools": ["G2", "Capterra"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "The most dangerous competitor is usually 'do nothing'. If users are fine with spreadsheets, features will not move them."
          }
        ]
      },
      {
        "t": "Product Strategy",
        "d": "Choose where to play and how to win, then say no to everything else.",
        "lv": 2,
        "children": [
          {
            "t": "Vision, Mission & Strategy",
            "d": "Vision is the future. Strategy is the bets you place to get there.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Vision: the world you are creating, in one inspiring paragraph",
              "Strategy as choices: where to play, how to win, what to ignore",
              "Connecting daily work to strategy: the narrative thread"
            ],
            "do": [
              "Write a vision statement for a product you admire, then critique real ones",
              "Draft a one-page strategy: bets, non-bets, and why",
              "Map 5 current features to the strategy: which ones do not fit?"
            ],
            "tools": [],
            "res": [
              ["SVPG", "https://www.svpg.com"]
            ],
            "tip": "A strategy that does not say no is a wish list. Every real strategy names what you will NOT do."
          },
          {
            "t": "OKRs & Goal Setting",
            "d": "Objectives inspire, key results measure. Together they align the team.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "OKR anatomy: qualitative objective, 2-4 measurable key results",
              "Good vs bad KRs: outcomes, not task lists",
              "Cadence: setting, checking in, and scoring without gaming"
            ],
            "do": [
              "Write OKRs for a product team for one quarter",
              "Rewrite 5 task-based KRs ('ship feature X') as outcome KRs",
              "Run a mock mid-quarter check-in and decide what changes"
            ],
            "tools": ["Notion", "Asana"],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "If every KR is green, your goals were too easy. Healthy teams hit 70%: stretch is the point."
          },
          {
            "t": "Prioritization Frameworks",
            "d": "RICE, MoSCoW, Kano: structured ways to decide what matters most.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "RICE: Reach x Impact x Confidence / Effort",
              "MoSCoW: must, should, could, won't have",
              "Kano: delighters vs basics vs performance features"
            ],
            "do": [
              "Score 15 backlog items with RICE and compare the ranking to gut feel",
              "Run a MoSCoW session for a release scope",
              "Classify 10 features with the Kano model"
            ],
            "tools": ["Notion", "Productboard"],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "Frameworks inform, they do not decide. A RICE score never overrules a strategic bet: use the framework, then apply judgment."
          },
          {
            "t": "Value Proposition Design",
            "d": "State clearly: who it is for, what it does, and why it is better.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The value proposition canvas: customer jobs, pains, gains vs your offer",
              "Positioning against alternatives, not just competitors",
              "Testing the proposition before building: landing pages and concierge tests"
            ],
            "do": [
              "Fill a value proposition canvas for a real product",
              "Write 3 positioning statements and test them with 5 users",
              "Build a landing page test for a value prop and measure signups"
            ],
            "tools": ["Strategyzer", "Unbounce"],
            "res": [
              ["Strategyzer", "https://www.strategyzer.com"]
            ],
            "tip": "If you cannot explain the value prop in one sentence a user repeats back, you do not have one yet."
          },
          {
            "t": "Saying No: The Hardest PM Skill",
            "d": "Every yes is a no to something else. Learn to decline with data and empathy.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The opportunity cost frame: what this yes displaces",
              "Saying no to executives, sales, and loud customers",
              "The 'not now' parking lot: capturing ideas without committing"
            ],
            "do": [
              "Write 3 'no' emails: to an exec, to sales, to a key customer",
              "Build a parking-lot doc with clear revisit criteria",
              "Practice the 2-minute verbal no with data and alternatives"
            ],
            "tools": [],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "'No' without data is politics. 'No' with data and a better alternative is leadership."
          }
        ]
      },
      {
        "t": "Roadmapping & Planning",
        "d": "Turn strategy into a sequenced, communicable plan the team can rally around.",
        "lv": 2,
        "children": [
          {
            "t": "Building Outcome-Based Roadmaps",
            "d": "Roadmap themes and outcomes, not feature lists with dates.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Theme-based roadmaps: problem areas over feature commitments",
              "Now/Next/Later: communicating confidence without fake precision",
              "Linking every roadmap item to a strategy bet and a metric"
            ],
            "do": [
              "Convert a feature-list roadmap into an outcome-based one",
              "Build a Now/Next/Later board for a product you know",
              "Attach one metric and one strategy bet to each roadmap theme"
            ],
            "tools": ["Productboard", "Aha!", "Notion"],
            "res": [
              ["Productboard", "https://www.productboard.com"]
            ],
            "tip": "Dates on a roadmap are promises you cannot keep. Commit to problems and horizons, not features and quarters."
          },
          {
            "t": "Communicating the Roadmap",
            "d": "Different audiences need different roadmaps: execs, sales, engineering.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Tailoring the message: strategy for execs, timelines for sales, detail for engineering",
              "The roadmap review meeting: getting alignment, not just presenting",
              "Handling 'when will X ship' without lying"
            ],
            "do": [
              "Create 3 versions of one roadmap for exec, sales, and engineering",
              "Practice the 10-minute roadmap narrative: where we are going and why",
              "Write answers to the 5 hardest roadmap questions you will get"
            ],
            "tools": ["Productboard", "Aha!"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "The roadmap is a communication tool, not a project plan. If it does not create alignment, it failed regardless of accuracy."
          },
          {
            "t": "Backlog Management & Grooming",
            "d": "A healthy backlog is ordered, estimated, and small. Most are none of these.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Backlog hygiene: ordering by value, killing stale items, keeping it lean",
              "Refinement sessions: making items ready without over-planning",
              "Estimation: story points, t-shirt sizes, and when to skip estimates entirely"
            ],
            "do": [
              "Audit a backlog: kill or merge 30% of stale items",
              "Run a refinement session: definition of ready for the top 5 items",
              "Estimate with planning poker and compare to actuals after the sprint"
            ],
            "tools": ["Jira", "Linear"],
            "res": [
              ["Atlassian: Backlog Grooming", "https://www.atlassian.com/agile/project-management/backlog"]
            ],
            "tip": "A 500-item backlog is a graveyard, not a plan. If an item has sat unranked for 6 months, delete it."
          },
          {
            "t": "User Story Mapping",
            "d": "Map the user journey, then slice releases by walking skeletons.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Story maps: backbone of user activities, stories beneath each step",
              "Release slicing: the walking skeleton first, then flesh",
              "Finding the MVP slice that delivers one complete journey"
            ],
            "do": [
              "Build a story map for a checkout or onboarding flow",
              "Slice 3 releases: skeleton, usable, delightful",
              "Identify the MVP slice and defend what you cut"
            ],
            "tools": ["Miro", "StoriesOnBoard"],
            "res": [
              ["Jeff Patton: User Story Mapping", "https://www.jpattonassociates.com/user-story-mapping/"]
            ],
            "tip": "Flat backlogs hide the journey. Story maps reveal that your 'MVP' is actually five disconnected features."
          },
          {
            "t": "Release & Capacity Planning",
            "d": "Match ambition to capacity: what the team can really ship.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Velocity and capacity: planning with evidence, not hope",
              "Buffers: why 20% of capacity must stay unplanned",
              "Dependencies: mapping and managing cross-team sequencing"
            ],
            "do": [
              "Plan a quarter with real velocity data and a 20% buffer",
              "Map dependencies for a release across 3 teams",
              "Write the capacity tradeoff memo when scope exceeds capacity"
            ],
            "tools": ["Jira", "Linear"],
            "res": [
              ["Atlassian", "https://www.atlassian.com"]
            ],
            "tip": "Plans without buffers are fiction. Something always breaks: plan for it or miss the date."
          }
        ]
      },
      {
        "t": "Specs & Building with Engineering",
        "d": "Write specs engineers love and work the agile machine well.",
        "lv": 2,
        "children": [
          {
            "t": "Writing Great PRDs",
            "d": "The product requirements doc: problem, users, scope, and success criteria.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "PRD anatomy: background, problem, users, goals, non-goals, requirements, success metrics",
              "Non-goals: explicitly scoping out is as important as scoping in",
              "One-pagers vs full PRDs: matching the doc to the decision"
            ],
            "do": [
              "Write a one-page PRD for a small feature",
              "Write non-goals for 3 past features and check if scope crept",
              "Get an engineer to red-team your PRD: what is ambiguous?"
            ],
            "tools": ["Notion", "Confluence", "Google Docs"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "Engineers do not read 20-page PRDs. Write the one-pager first; expand only where decisions genuinely need detail."
          },
          {
            "t": "User Stories & Acceptance Criteria",
            "d": "As a user, I want, so that: plus the criteria that define done.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Story format: role, goal, benefit, and why the benefit matters most",
              "Acceptance criteria: testable conditions, Given/When/Then style",
              "INVEST: independent, negotiable, valuable, estimable, small, testable"
            ],
            "do": [
              "Write 10 user stories with acceptance criteria for a feature",
              "Convert 5 vague requirements into Given/When/Then criteria",
              "Review a real backlog and flag stories that fail INVEST"
            ],
            "tools": ["Jira", "Linear"],
            "res": [
              ["Atlassian: User Stories", "https://www.atlassian.com/agile/project-management/user-stories"]
            ],
            "tip": "Acceptance criteria are the contract. If QA and engineering read them differently, the story was not ready."
          },
          {
            "t": "Designing with Designers",
            "d": "PMs frame the problem and constraints. Designers own the solution.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The handoff that works: problem, users, constraints, success metrics, not pixel dictates",
              "Design critiques: giving feedback on problems, not prescribing solutions",
              "Wireframes and prototypes as thinking tools, not specs"
            ],
            "do": [
              "Write a design brief: problem, users, constraints, metrics, no solutions",
              "Run a design critique using 'I like, I wish, what if'",
              "Build a clickable prototype in Figma for a flow you specced"
            ],
            "tools": ["Figma", "Miro"],
            "res": [
              ["Figma", "https://www.figma.com"]
            ],
            "tip": "PMs who design in the spec steal the designer's job and get worse designs. Brief the problem, critique the solution."
          },
          {
            "t": "Working in Agile Ceremonies",
            "d": "Standups, planning, reviews, retros: the PM's role in each.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Sprint planning: the PM brings the why and the priority, the team owns the how",
              "Reviews: demoing outcomes to stakeholders, gathering feedback",
              "Retrospectives: the PM's accountability for process improvement"
            ],
            "do": [
              "Facilitate a sprint planning with a clear goal and prioritized backlog",
              "Run a review demo focused on user outcomes, not feature tours",
              "Write retro actions you own as PM and follow through"
            ],
            "tools": ["Jira", "Linear"],
            "res": [
              ["Atlassian: Scrum Ceremonies", "https://www.atlassian.com/agile/scrum/ceremonies"]
            ],
            "tip": "The PM who skips retros signals that process is someone else's problem. Own your share of the dysfunction."
          },
          {
            "t": "Scoping an MVP",
            "d": "The smallest thing that tests the riskiest assumption.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "MVP as experiment, not as v1: what hypothesis does it test?",
              "Riskiest assumption first: desirability, feasibility, viability",
              "MVP types: concierge, Wizard of Oz, landing page, single-feature"
            ],
            "do": [
              "Define the riskiest assumption for a product idea",
              "Design the smallest test for it (no code if possible)",
              "Scope an MVP slice and list everything you deliberately cut"
            ],
            "tools": [],
            "res": [
              ["SVPG", "https://www.svpg.com"]
            ],
            "tip": "Most 'MVPs' are just v1 with a trendy name. If it does not test a specific risky assumption, it is not an MVP."
          }
        ]
      },
      {
        "t": "Analytics & Experimentation",
        "d": "Measure what matters and test before you bet big.",
        "lv": 2,
        "children": [
          {
            "t": "North Star & Input Metrics",
            "d": "One metric that captures value delivered, fed by metrics teams can move.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "North star metric: the single measure of customer value at scale",
              "Input metrics: the levers teams actually control",
              "Metric trees: connecting team metrics to the north star"
            ],
            "do": [
              "Propose a north star metric for 3 products with reasoning",
              "Build a metric tree: north star down to 5 team-level inputs",
              "Audit a dashboard: which metrics are vanity, which drive decisions?"
            ],
            "tools": ["Amplitude", "Mixpanel"],
            "res": [
              ["Amplitude", "https://amplitude.com"],
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "If every team optimizes its own metric, the north star dies. Input metrics must roll up, not compete."
          },
          {
            "t": "Funnels, Cohorts & Retention",
            "d": "Where users drop off, which groups stick, and whether growth is real.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Funnel analysis: conversion step by step, finding the biggest leak",
              "Cohort analysis: comparing user groups by signup period or behavior",
              "Retention curves: the shape that tells you if you have product-market fit"
            ],
            "do": [
              "Build a funnel for a signup flow and find the biggest drop",
              "Compare retention curves of two cohorts and explain the difference",
              "Write the insight memo: what the data says to do next"
            ],
            "tools": ["Amplitude", "Mixpanel", "Google Analytics"],
            "res": [
              ["Mixpanel", "https://mixpanel.com"]
            ],
            "tip": "Averages hide cohorts. 'Retention is 40%' means nothing until you split by signup month, channel, and behavior."
          },
          {
            "t": "Designing A/B Tests",
            "d": "One change, one metric, enough users, enough patience.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Hypothesis format: change, expected effect, metric, rationale",
              "Sample size and duration: why underpowered tests lie",
              "Guardrail metrics: making sure the win does not break something else"
            ],
            "do": [
              "Write 5 test hypotheses in the full format",
              "Calculate required sample size for a test with an online calculator",
              "Design a test with primary, secondary, and guardrail metrics"
            ],
            "tools": ["Optimizely", "VWO", "GrowthBook"],
            "res": [
              ["GrowthBook", "https://www.growthbook.io"]
            ],
            "tip": "Peeking at results early and stopping when green is p-hacking. Pre-commit to duration and sample size."
          },
          {
            "t": "Analytics Tooling: GA4, Amplitude, Mixpanel",
            "d": "Know your instruments: events, properties, and the questions each tool answers.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Event-based analytics: events, properties, and clean taxonomies",
              "GA4 for acquisition and web behavior; Amplitude/Mixpanel for product deep-dives",
              "Tracking plans: the contract between PM, engineering, and data"
            ],
            "do": [
              "Write a tracking plan for a feature: events, properties, triggers",
              "Build 3 dashboards: acquisition, activation, retention",
              "Audit an existing implementation for missing or duplicate events"
            ],
            "tools": ["Google Analytics", "Amplitude", "Mixpanel", "Segment"],
            "res": [
              ["Google Analytics", "https://analytics.google.com"],
              ["Amplitude", "https://amplitude.com"]
            ],
            "tip": "Garbage events in, garbage insights out. Review the tracking plan like a spec: it is one."
          },
          {
            "t": "Making Decisions with Data",
            "d": "Data informs, judgment decides. Learn the balance.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "HiPPO vs data: when to trust numbers and when to trust vision",
              "Correlation vs causation in product metrics",
              "Decision memos: recommendation, data, risks, alternatives"
            ],
            "do": [
              "Write a decision memo with a clear recommendation and the data behind it",
              "Find a metric correlation in a dataset and argue causation vs coincidence",
              "Practice the pre-mortem: assume the decision failed, explain why"
            ],
            "tools": [],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "Data never makes the decision; it reduces the uncertainty. Someone still has to bet: that is the PM's job."
          }
        ]
      },
      {
        "t": "Go-to-Market & Launch",
        "d": "Ship it right: positioning, pricing, channels, and safe rollouts.",
        "lv": 3,
        "children": [
          {
            "t": "Launch Planning & Checklists",
            "d": "Launches are projects: owners, dates, and a checklist that covers everything.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Launch tiers: how big is this, and what does it deserve?",
              "The launch checklist: product, marketing, sales, support, legal, comms",
              "Launch day war room: monitoring, rollback criteria, comms plan"
            ],
            "do": [
              "Write a launch plan for a feature: tier, owners, timeline, checklist",
              "Define rollback triggers with metrics, not feelings",
              "Do a launch retro: what broke, what to systematize"
            ],
            "tools": ["Notion", "Asana"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "Most launch failures are coordination failures. The checklist is the product: write it, assign it, run it."
          },
          {
            "t": "Positioning & Messaging",
            "d": "Own a place in the customer's mind: who it is for and why it wins.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Positioning statement: for [audience], [product] is [category] that [benefit] unlike [alternative]",
              "Messaging hierarchy: headline, benefits, proof, for each audience",
              "Testing messaging: does the target audience repeat it back?"
            ],
            "do": [
              "Write positioning statements for 3 competing products",
              "Draft a messaging hierarchy for a launch",
              "Test your headline with 5 target users: what do they remember?"
            ],
            "tools": [],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "If your positioning could describe any competitor, it positions nothing. Name the enemy and the difference."
          },
          {
            "t": "Pricing & Packaging Basics",
            "d": "Price is positioning made numeric: value, willingness to pay, and packaging.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Pricing models: per-seat, usage-based, tiered, freemium",
              "Willingness-to-pay research: Van Westendorp and value-based interviews",
              "Packaging: good/better/best and the decoy effect"
            ],
            "do": [
              "Analyze 5 competitors' pricing pages: model, tiers, anchors",
              "Run a Van Westendorp survey for a hypothetical product",
              "Design a 3-tier package with a clear upsell path"
            ],
            "tools": ["Typeform"],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tag": "opt",
            "tip": "Pricing by cost plus margin leaves money on the table. Price on value delivered, tested with real buyers."
          },
          {
            "t": "Growth Loops & Channels",
            "d": "Sustainable growth compounds: loops beat funnels.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Growth loops: viral, content, sales, and UGC loops that feed themselves",
              "Channel selection: where your users already are",
              "The danger of paid acquisition without retention"
            ],
            "do": [
              "Map the growth loop of a product you admire step by step",
              "Design a loop for a hypothetical product: input, action, output, reinvestment",
              "Evaluate 5 channels for one product: reach, cost, fit"
            ],
            "tools": [],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "Funnels leak by design; loops compound by design. If your growth needs constant fuel, you have a funnel, not a loop."
          },
          {
            "t": "Safe Release Strategies",
            "d": "Ship to 1%, then 10%, then everyone: releases without the drama.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Feature flags: decoupling deploy from release",
              "Phased rollouts and canary releases: watching metrics at each step",
              "Dark launches: shipping code off, then flipping it on"
            ],
            "do": [
              "Design a rollout plan: 1%, 10%, 50%, 100% with metric gates",
              "Write the rollback runbook for a risky release",
              "Set up a feature flag for a demo app and practice toggling"
            ],
            "tools": ["LaunchDarkly", "Unleash", "GrowthBook"],
            "res": [
              ["LaunchDarkly", "https://launchdarkly.com"]
            ],
            "tip": "Big-bang releases are how outages become incidents. If you cannot roll back in minutes, you are not ready to ship."
          }
        ]
      },
      {
        "t": "Stakeholders & Leadership",
        "d": "Influence without authority: align people, manage up, and grow.",
        "lv": 3,
        "children": [
          {
            "t": "Stakeholder Mapping",
            "d": "Know who cares, how much power they have, and what they need from you.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Power-interest grid: who to manage closely, who to keep informed",
              "Stakeholder needs: what each one optimizes for",
              "The RACI for product decisions"
            ],
            "do": [
              "Map stakeholders for a real project on a power-interest grid",
              "Write what each stakeholder needs from you monthly",
              "Draft a RACI for your next big product decision"
            ],
            "tools": ["Miro"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "Surprises destroy trust. No stakeholder should learn about your decision in a meeting: pre-wire everything important."
          },
          {
            "t": "Influencing Without Authority",
            "d": "PMs own nothing and need everything: influence is the job.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Currencies of influence: data, user stories, reciprocity, expertise",
              "Building coalitions before the meeting, not during it",
              "Disagree and commit: handling decisions that go against you"
            ],
            "do": [
              "Map your influence currencies with 5 key colleagues",
              "Pre-wire a controversial decision: 3 conversations before the meeting",
              "Write a disagree-and-commit memo for a call you lost"
            ],
            "tools": [],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "If you are surprised in a meeting, you failed before it started. Alignment happens in hallways, not in conference rooms."
          },
          {
            "t": "Communicating with Executives",
            "d": "Execs want the decision, the risk, and the ask: in that order, in 5 minutes.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The executive update: headline, context, decision needed, risks",
              "Pre-reads: the memo that makes the meeting a decision, not a download",
              "Managing bad news: early, with options, with a recommendation"
            ],
            "do": [
              "Write a one-page exec pre-read for a product decision",
              "Practice the 5-minute update: record yourself and cut the fluff",
              "Draft a bad-news update with 3 options and your recommendation"
            ],
            "tools": [],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"]
            ],
            "tip": "Never bring a problem without options and a recommendation. Execs decide; your job is to make deciding easy."
          },
          {
            "t": "Managing Up & Alignment",
            "d": "Your manager is your most important stakeholder. Manage the relationship deliberately.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The 1:1 as your tool: agenda, updates, asks, career",
              "No-surprise rule applied upward",
              "Getting feedback early and often, not at review time"
            ],
            "do": [
              "Write a 1:1 agenda template you would actually use",
              "Practice asking for feedback with a specific, answerable question",
              "Draft your own performance narrative: wins, growth areas, next level"
            ],
            "tools": [],
            "res": [
              ["Reforge", "https://www.reforge.com"]
            ],
            "tip": "Your manager cannot advocate for work they do not understand. Make your wins and your needs visible weekly."
          },
          {
            "t": "Capstone: Ship a Product End to End",
            "d": "From discovery to launch: run the full PM loop on a real idea.",
            "lv": 3,
            "time": "~3w",
            "learn": [
              "The complete craft: research, strategy, roadmap, spec, metrics, launch",
              "Writing the portfolio case study that gets interviews",
              "Presenting like a PM: narrative, data, decisions"
            ],
            "do": [
              "Pick a problem, run 5 user interviews, and frame it",
              "Write the strategy one-pager, roadmap, and PRD",
              "Build the MVP scope, define metrics, plan the launch, and present the case study"
            ],
            "tools": ["Notion", "Figma", "Miro", "Amplitude"],
            "res": [
              ["Lenny's Newsletter", "https://www.lennysnewsletter.com"],
              ["SVPG", "https://www.svpg.com"]
            ],
            "badge": "PROJECT",
            "tip": "This case study is your interview ticket. Hiring managers skim for: real users, real tradeoffs, real metrics."
          }
        ]
      }
    ]
  }
});
