/* Atlas roadmap data: Product Design (product-design) */
ROADMAPS.push({
  "id": "product-design",
  "title": "Product Design",
  "icon": "💎",
  "color": "#0369a1",
  "desc": "End-to-end product design: discovery and strategy, interface craft, design systems, engineering handoff, and the metrics that prove impact.",
  "kind": "role",
  "root": {
    "t": "Product Design",
    "d": "Own the whole arc: from user problem and business strategy to shipped pixels and measured results.",
    "children": [
      {
        "t": "Product Design Foundations",
        "d": "What product designers actually own: principles, vision, value, fit, and success metrics.",
        "lv": 1,
        "children": [
          {
            "t": "Product Design vs UX vs UI",
            "d": "Three titles, one craft family. Product designers own the end-to-end arc, not just a slice of it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Where product design overlaps UX (research, flows) and UI (visual craft)",
              "What is added: strategy, business alignment, metrics, and shipping",
              "How the role differs across startups, scale-ups, and enterprises"
            ],
            "do": [
              "Compare 10 product designer job posts and extract the shared responsibilities",
              "Write your own one-sentence definition of the role",
              "Map which parts of the arc you already cover and which you do not"
            ],
            "tools": ["LinkedIn"],
            "res": [
              ["Interaction Design Foundation", "https://www.interaction-design.org"]
            ],
            "tip": "If a 'product designer' role never mentions metrics or strategy, it is a UI role with a fancier title."
          },
          {
            "t": "Design Principles That Guide Decisions",
            "d": "Principles are decision shortcuts: the values that resolve a thousand small design arguments.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What makes a principle useful: specific, opinionated, and debatable",
              "Classic principles: user-centered, function over polish, iteration over perfection",
              "Writing principles a team will actually reference in reviews"
            ],
            "do": [
              "Study 3 companies' published design principles and rate their specificity",
              "Draft 5 principles for a product you would redesign",
              "Apply one principle to settle a real design disagreement"
            ],
            "tools": [],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Vague principles ('be delightful') decorate walls. Useful ones start arguments."
          },
          {
            "t": "Product Vision & Strategy",
            "d": "Where the product is going and why: the narrative that aligns design, engineering, and leadership.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Vision vs strategy vs roadmap: different horizons, different jobs",
              "Writing a vision that is inspiring but concrete enough to design against",
              "How design contributes to strategy instead of just executing it"
            ],
            "do": [
              "Write a 1-page vision for an app you think is drifting",
              "Turn the vision into 3 strategic bets for the next year",
              "Sketch what the product looks like if each bet wins"
            ],
            "tools": ["Figma", "Miro"],
            "res": [
              ["Mind the Product", "https://www.mindtheproduct.com"]
            ],
            "tip": "A vision nobody can design against is a poster. Tie every sentence to a user outcome."
          },
          {
            "t": "Value Proposition Design",
            "d": "Why should anyone care? Map your product's value to the customer's jobs, pains, and gains.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The value proposition canvas: customer profile meets value map",
              "Fit: when your features relieve real pains and create real gains",
              "Testing value propositions before building anything"
            ],
            "do": [
              "Fill a value proposition canvas for a product you use",
              "Interview 2 users about their pains and check your fit",
              "Rewrite the product's landing headline from what you learned"
            ],
            "tools": ["Miro"],
            "res": [
              ["Strategyzer", "https://www.strategyzer.com"]
            ],
            "tip": "Teams list features on the canvas and call it value. Pains and gains come from users, not brainstorms."
          },
          {
            "t": "Product-Market Fit",
            "d": "The moment your product truly satisfies a market: how to recognize it, measure it, and design toward it.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Fit signals: retention curves, the Sean Ellis test, word of mouth",
              "Why design quality is a fit lever, not just polish",
              "Designing for the early adopters who get you to fit"
            ],
            "do": [
              "Run the Sean Ellis survey on a small product community",
              "Plot a retention curve and identify where it flattens or dies",
              "List 3 design changes aimed at the 'very disappointed' segment"
            ],
            "tools": ["Amplitude", "PostHog"],
            "res": [
              ["Mind the Product", "https://www.mindtheproduct.com"]
            ],
            "tip": "No amount of UI polish fixes a product nobody needs. Fit first, delight second."
          },
          {
            "t": "Defining Success Metrics",
            "d": "Decide what winning looks like before you design. Metrics turn opinions into testable bets.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Outcome metrics vs output metrics: what shipped vs what changed",
              "Leading vs lagging indicators for design work",
              "Writing a metric tree from company goal down to feature"
            ],
            "do": [
              "Pick a feature and write its metric tree with 3 levels",
              "Define one guardrail metric that stops you gaming the main one",
              "Rewrite a vague goal ('improve onboarding') as a measurable bet"
            ],
            "tools": ["Amplitude"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "If every metric can be gamed, add a guardrail. Activation without retention is a mirage."
          }
        ]
      },
      {
        "t": "Discovery Research",
        "d": "Learn before you build: the research methods that keep product teams honest.",
        "lv": 1,
        "children": [
          {
            "t": "Choosing Research Methods",
            "d": "The right method for the right question: generative vs evaluative, qualitative vs quantitative.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The research landscape: interviews, surveys, analytics, tests, fieldwork",
              "Matching method to question type and decision risk",
              "Triangulation: why two methods beat one expensive one"
            ],
            "do": [
              "Take 5 real product questions and assign each a method",
              "Justify each choice in one sentence",
              "Find one question where you would combine two methods"
            ],
            "tools": [],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Method-first research is a solution looking for a problem. Question first, always."
          },
          {
            "t": "User Interviews",
            "d": "Conversations that reveal why people do what they do — the backbone of discovery.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Discussion guides: themes, openers, and planned probes",
              "Recruiting beyond your friends: screeners and incentives",
              "Note-taking, recording, and the ethics of consent"
            ],
            "do": [
              "Write a discussion guide for a discovery interview",
              "Conduct 3 interviews with real potential users",
              "Extract 5 observations per interview into a shared doc"
            ],
            "tools": ["Zoom", "Otter.ai"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Talk about their past behavior, not your future product. Memories beat predictions."
          },
          {
            "t": "Surveys at Scale",
            "d": "Quantify what interviews suggest: structured questions across hundreds of users.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "When surveys are the right tool: validation, segmentation, prioritization",
              "Writing unbiased questions and balanced scales",
              "Response bias, sampling, and reading results skeptically"
            ],
            "do": [
              "Design a 12-question survey to validate an interview finding",
              "Pilot it with 5 people and fix every confusing question",
              "Analyze results and compare them against your interview notes"
            ],
            "tools": ["Typeform", "Google Forms"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "A survey can tell you 40% of users struggle. It can never tell you why."
          },
          {
            "t": "Contextual Inquiry",
            "d": "Go where the work happens. Watching beats asking when habits run on autopilot.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Field visits: observing real tasks in real environments",
              "The master-apprentice stance and staying out of the way",
              "Capturing context: interruptions, tools, and workarounds"
            ],
            "do": [
              "Observe someone completing a real task in their own environment",
              "Document the tools and hacks surrounding the official workflow",
              "Turn 3 observations into design opportunities"
            ],
            "tools": ["Pen and paper"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Users normalize their own pain. Your job is to notice what they no longer see."
          },
          {
            "t": "Behavioral Analytics: Heatmaps & Replays",
            "d": "What users actually do at scale: clicks, scrolls, rage-clicks, and drop-offs.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Heatmaps, scroll maps, and what each pattern means",
              "Session recordings: finding struggle without guessing",
              "Event tracking basics so you can ask analytics answerable questions"
            ],
            "do": [
              "Install Hotjar on a test page and collect data for a week",
              "Watch 10 session replays and log every struggle moment",
              "Pair one replay insight with a funnel metric"
            ],
            "tools": ["Hotjar", "PostHog"],
            "res": [
              ["Hotjar", "https://www.hotjar.com"]
            ],
            "tip": "Analytics show you where the fire is. They never show you what is burning."
          },
          {
            "t": "Synthesis & Research Repositories",
            "d": "Turn findings into shared memory: synthesize once, reuse forever.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Affinity mapping and thematic analysis at team scale",
              "Insight formats that survive: observation, need, implication",
              "Repositories: tagging, search, and making old research findable"
            ],
            "do": [
              "Synthesize your discovery notes into 8 insight statements",
              "Build a simple repository structure in Notion or Dovetail",
              "Write a 1-page research readout a PM would actually read"
            ],
            "tools": ["Dovetail", "Notion"],
            "res": [
              ["Dovetail", "https://dovetail.com"]
            ],
            "tip": "Research that lives in one person's head is a rumor. Repositories turn it into an asset."
          }
        ]
      },
      {
        "t": "Define & Prioritize",
        "d": "From messy findings to sharp problems: frame what you will solve and what you will not.",
        "lv": 2,
        "children": [
          {
            "t": "Problem Statements",
            "d": "A good problem statement is half the solution. Frame the user, the need, and the insight.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Anatomy: user, need, and insight — no solutions allowed",
              "Narrow enough to design against, broad enough to invent within",
              "Testing the statement: does it survive contact with 3 users?"
            ],
            "do": [
              "Write 5 problem statements from your research insights",
              "Delete every solution word hiding in them",
              "Rank them by user pain times frequency"
            ],
            "tools": [],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "A problem statement containing a solution is a decision wearing a disguise."
          },
          {
            "t": "How Might We Questions",
            "d": "Turn problems into invitations: questions that open ideation instead of closing it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The HMW format and why 'might' matters psychologically",
              "Amplifying good HMWs: broad enough for surprise, narrow enough for relevance",
              "From one problem statement to a family of HMW questions"
            ],
            "do": [
              "Convert your top 3 problem statements into HMW questions",
              "Generate 5 variations of each, from safe to wild",
              "Pick the set you would ideate on and justify the choice"
            ],
            "tools": ["Miro"],
            "res": [
              ["IDEO Design Kit", "https://www.designkit.org"]
            ],
            "tip": "If your HMW has an obvious answer, it is too narrow. Widen it until it scares you slightly."
          },
          {
            "t": "Personas & Empathy Maps",
            "d": "Keep the user in the room: archetypes and empathy canvases that teams actually reference.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Behavioral personas vs demographic stereotypes",
              "Empathy maps: say, think, do, feel — plus pains and gains",
              "Making them stick: rituals that keep personas alive in decisions"
            ],
            "do": [
              "Build one persona from real research data",
              "Create its empathy map in a 45-minute session",
              "Use both to settle a real design disagreement"
            ],
            "tools": ["Figma", "FigJam"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Personas nobody references are posters. If a persona never changed a decision, kill it."
          },
          {
            "t": "Jobs to Be Done",
            "d": "Customers hire products to make progress. Design the progress, not the persona.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Job stories and the forces of switching",
              "Functional, emotional, and social dimensions of a job",
              "Using JTBD to find non-obvious competitors"
            ],
            "do": [
              "Write 8 job stories for a product you are redesigning",
              "Interview one switcher about the forces behind their switch",
              "Map your product's real competitors by job, not by category"
            ],
            "tools": [],
            "res": [
              ["JTBD.info", "https://jtbd.info"]
            ],
            "tip": "Your competitor is not the similar app. It is whatever users hire instead — often a spreadsheet."
          },
          {
            "t": "Opportunity Solution Trees",
            "d": "Teresa Torres' map from outcome to opportunities to solutions: strategy you can see.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Tree anatomy: desired outcome, opportunities, solutions, experiments",
              "Keeping the tree alive as a team's shared map",
              "Pruning: killing branches the evidence does not support"
            ],
            "do": [
              "Build an opportunity solution tree for one product outcome",
              "Add 6 opportunities and 3 solutions per opportunity",
              "Mark which solutions have evidence and which are guesses"
            ],
            "tools": ["Miro"],
            "res": [
              ["Product Talk", "https://www.producttalk.org"]
            ],
            "tip": "A tree with one opportunity per outcome is a plan, not exploration. Branch wider."
          },
          {
            "t": "Prioritization Frameworks: RICE, Kano, MoSCoW",
            "d": "Finite team, infinite ideas. Score and sort opportunities with explicit tradeoffs.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "RICE: reach, impact, confidence, effort — and its blind spots",
              "Kano: delighters vs basics vs performance features",
              "MoSCoW: must, should, could, won't — and the discipline of won't"
            ],
            "do": [
              "Score 10 feature ideas with RICE and rank them",
              "Classify 8 features with the Kano model",
              "Write the 'won't' list for your next quarter and defend it"
            ],
            "tools": ["Notion", "Airtable"],
            "res": [
              ["Mind the Product", "https://www.mindtheproduct.com"]
            ],
            "tip": "Frameworks do not make decisions; they make the reasoning visible. The debate is the value."
          }
        ]
      },
      {
        "t": "Strategy & Alignment",
        "d": "Design does not happen in a vacuum: align business, stakeholders, and teams around the work.",
        "lv": 2,
        "children": [
          {
            "t": "OKRs & Business Metrics",
            "d": "Speak the business's language: objectives and key results that connect design to revenue.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "OKR anatomy: ambitious objectives, measurable key results",
              "How design work ladders up to company-level KRs",
              "Common OKR failure modes and how designers avoid them"
            ],
            "do": [
              "Write 3 OKRs for a design team owning onboarding",
              "Map each KR to a design activity and a metric",
              "Critique a real company's public OKRs for measurability"
            ],
            "tools": [],
            "res": [
              ["Mind the Product", "https://www.mindtheproduct.com"]
            ],
            "tip": "Key results must be measurable outcomes, not task lists. 'Ship redesign' is not a KR."
          },
          {
            "t": "Stakeholder Alignment",
            "d": "No surprises at the final review: bring stakeholders along so launches do not die in meetings.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Stakeholder mapping: influence, interest, and communication needs",
              "Pre-wiring decisions and the art of the informal check-in",
              "Handling the HiPPO: evidence over opinion in reviews"
            ],
            "do": [
              "Map stakeholders for a past project by influence and interest",
              "Draft a 1-page project brief you would pre-wire with",
              "Role-play presenting a controversial decision with data"
            ],
            "tools": ["Miro"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Stakeholders ambush designs they first see in a big review. Pre-wire everything that matters."
          },
          {
            "t": "Lean UX & Agile Teams",
            "d": "Design inside sprints: hypotheses, MVPs, and collaboration instead of big design up front.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Lean UX principles: outcomes over deliverables, collaborative design",
              "Working in dual-track agile: discovery and delivery in parallel",
              "Hypothesis-driven design and assumption testing"
            ],
            "do": [
              "Write 3 hypotheses for a feature in the 'we believe' format",
              "Design the smallest test for each hypothesis",
              "Map a 2-week sprint with discovery and delivery tracks"
            ],
            "tools": ["Jira", "Figma"],
            "res": [
              ["Jeff Gothelf", "https://www.jeffgothelf.com"]
            ],
            "tip": "Lean UX without real user contact is just faster guessing. The loop must include users."
          },
          {
            "t": "Design Sprints & Workshops",
            "d": "Structured collaboration: sprints and workshops that produce decisions, not just sticky notes.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "The 5-day design sprint: map, sketch, decide, prototype, test",
              "Workshop design: purpose, agenda, facilitation, and follow-through",
              "Lightning decision jams and other 1-day formats"
            ],
            "do": [
              "Facilitate a 2-hour decision jam with friends on a real problem",
              "Write a sprint brief with the long-term goal and sprint questions",
              "Run a retrospective on your own facilitation"
            ],
            "tools": ["Miro", "FigJam"],
            "res": [
              ["Google Ventures Design Sprint", "https://www.gv.com/sprint/"]
            ],
            "tip": "A workshop without a decision-maker present produces alignment theater. Get the decider in the room."
          },
          {
            "t": "Assumption Mapping & De-risking",
            "d": "List what must be true for your idea to work, then test the riskiest assumptions first.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The assumption map: knowns, unknowns, and riskiest bets",
              "Desirability, feasibility, viability: the three risk lenses",
              "Pre-mortems: imagining failure to prevent it"
            ],
            "do": [
              "Map 15 assumptions for a new feature idea",
              "Rank them by risk and design tests for the top 3",
              "Run a pre-mortem: write the launch failure post-mortem in advance"
            ],
            "tools": ["Miro"],
            "res": [
              ["Product Talk", "https://www.producttalk.org"]
            ],
            "tip": "Teams test what is easy to test. Map assumptions first so courage, not comfort, picks the tests."
          }
        ]
      },
      {
        "t": "Experience Design",
        "d": "Shape the journey: information architecture, flows, and the iterative path from sketch to prototype.",
        "lv": 2,
        "children": [
          {
            "t": "Information Architecture",
            "d": "Structure content so users find it: organization, labeling, and navigation systems.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Organization schemes and labeling that matches user vocabulary",
              "Navigation patterns: global, local, contextual, and faceted",
              "Card sorting and tree testing to validate structure"
            ],
            "do": [
              "Audit an app's navigation and find 5 findability failures",
              "Run a card sort with 5 users on its content",
              "Propose a restructured navigation with renamed labels"
            ],
            "tools": ["Optimal Workshop"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Users blame search for IA failures. Fix the structure before you buy a better search box."
          },
          {
            "t": "User Flows & Task Flows",
            "d": "Map every path: screens, decisions, and dead ends in one readable diagram.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Flow diagramming conventions that teams can read",
              "Happy paths, edge cases, and error recovery in one map",
              "Task flows vs user flows vs wireflows"
            ],
            "do": [
              "Diagram the complete signup flow of an app, errors included",
              "Mark the 3 steps with the highest abandonment risk",
              "Simplify the flow by removing one step entirely"
            ],
            "tools": ["Figma", "Miro"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Design the error and empty states with the same care as the happy path. Users live there too."
          },
          {
            "t": "Ideation Techniques",
            "d": "Generate quantity before quality: structured techniques that beat blank-page panic.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Brainstorming rules that actually work: defer judgment, go for quantity",
              "Crazy 8s, SCAMPER, and worst-possible-idea for breaking ruts",
              "Divergent then convergent: scheduling both explicitly"
            ],
            "do": [
              "Run a solo crazy-8s session on a checkout problem",
              "Apply SCAMPER to an existing feature and list 10 twists",
              "Converge: dot-vote and write the rationale for the winner"
            ],
            "tools": ["Miro", "FigJam"],
            "res": [
              ["IDEO Design Kit", "https://www.designkit.org"]
            ],
            "tip": "The first 10 ideas are obvious. Ideation starts being useful around idea 25."
          },
          {
            "t": "Sketching",
            "d": "Think with a pen: the fastest, cheapest way to externalize and compare ideas.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Sketching as thinking, not art: boxes, arrows, and annotations",
              "Storyboarding key moments of the experience",
              "Sketching in reviews to resolve arguments fast"
            ],
            "do": [
              "Storyboard a 6-panel user scenario for your project",
              "Sketch 3 alternative layouts for one complex screen",
              "Resolve a design disagreement by sketching both options live"
            ],
            "tools": ["Pen and paper"],
            "res": [
              ["Balsamiq", "https://balsamiq.com"]
            ],
            "tip": "You do not need drawing skill. You need boxes labeled clearly enough that others can critique them."
          },
          {
            "t": "Wireframing",
            "d": "Structure without styling: layout, hierarchy, and content priority made testable.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Fidelity levels: when lo-fi, mid-fi, and hi-fi each pay off",
              "Content-first wireframing with real copy",
              "Responsive wireframes and annotation for handoff"
            ],
            "do": [
              "Wireframe a 4-screen flow at mid fidelity with real content",
              "Apply an 8pt grid and consistent spacing",
              "Annotate interactions and edge cases for developers"
            ],
            "tools": ["Figma", "Balsamiq"],
            "res": [
              ["Figma", "https://www.figma.com"]
            ],
            "tip": "Wireframes with lorem ipsum lie about hierarchy. Real words reveal real layout problems."
          },
          {
            "t": "Prototyping",
            "d": "Make it feel real enough to test: interactive prototypes that answer specific questions.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Prototype fidelity matched to the test question",
              "Interactions, transitions, and conditional logic in Figma",
              "Wizard-of-Oz and paper prototypes for early concepts"
            ],
            "do": [
              "Build a clickable prototype of your flow with transitions",
              "Test it with 3 users and record where they hesitate",
              "Iterate once and retest the fixed version"
            ],
            "tools": ["Figma", "ProtoPie"],
            "res": [
              ["Figma", "https://www.figma.com"]
            ],
            "tip": "A prototype is a question made tangible. If it does not answer a question, it is a demo."
          }
        ]
      },
      {
        "t": "Interface Craft",
        "d": "The visual layer: color, type, layout, components, and motion that make products feel inevitable.",
        "lv": 2,
        "children": [
          {
            "t": "Visual Hierarchy",
            "d": "Guide the eye: size, weight, color, and space arranged so users see what matters first.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Hierarchy tools: scale, weight, color, position, and whitespace",
              "F and Z reading patterns and designing with them",
              "Squint test and other fast hierarchy checks"
            ],
            "do": [
              "Squint-test 5 landing pages and note what survives",
              "Redesign a cluttered screen with a clear 3-level hierarchy",
              "Explain every hierarchy decision in one sentence each"
            ],
            "tools": ["Figma"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "If everything is bold, nothing is. Hierarchy is about demoting, not promoting."
          },
          {
            "t": "Color Systems",
            "d": "Color with intent: palettes, semantic roles, and accessible contrast built to scale.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Building a palette: brand, neutrals, semantic, and state colors",
              "Color roles over color values: designing with tokens in mind",
              "Contrast ratios and designing for color vision deficiency"
            ],
            "do": [
              "Build a 12-color palette with semantic roles for one product",
              "Check every text pair for 4.5:1 contrast and fix failures",
              "Simulate color blindness on your palette and adjust"
            ],
            "tools": ["Figma", "Stark"],
            "res": [
              ["Material Design Color", "https://m3.material.io"]
            ],
            "tip": "Name colors by role (surface, on-surface, error), not by appearance. Roles survive rebrands."
          },
          {
            "t": "Typography at Scale",
            "d": "Type systems that stay consistent: scales, pairing, and readability across screens.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Type scales: building a modular scale instead of random sizes",
              "Pairing fonts: contrast with harmony, and when one family is enough",
              "Readability: line length, line height, and responsive type"
            ],
            "do": [
              "Build a 8-step type scale for a product in Figma",
              "Set a long-form article page with 65-character line length",
              "Audit an app for type chaos and consolidate its styles"
            ],
            "tools": ["Figma"],
            "res": [
              ["Material Design Typography", "https://m3.material.io"]
            ],
            "tip": "Two typefaces is usually one too many. Master one family before you add a second."
          },
          {
            "t": "Layout & Grid",
            "d": "Order out of chaos: grids, spacing systems, and responsive behavior that hold designs together.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Grid anatomy: columns, gutters, margins, and breakpoints",
              "Spacing systems: the 8pt grid and consistent rhythm",
              "Responsive behavior: reflow, reposition, and reveal patterns"
            ],
            "do": [
              "Rebuild a landing page on a 12-column grid",
              "Apply 8pt spacing throughout and document the scale",
              "Design the same screen at mobile, tablet, and desktop widths"
            ],
            "tools": ["Figma"],
            "res": [
              ["Material Design Layout", "https://m3.material.io"]
            ],
            "tip": "Inconsistent spacing is the fastest way to look amateur. One spacing scale, no exceptions."
          },
          {
            "t": "Components & Design Tokens",
            "d": "The atomic layer of scale: reusable components and tokens that keep a product coherent.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Component anatomy: variants, states, slots, and documentation",
              "Design tokens: the single source of truth for color, type, spacing",
              "Component governance: who can add, change, and deprecate"
            ],
            "do": [
              "Build a button component with 4 variants and all states",
              "Define 20 design tokens and wire them into your components",
              "Write usage documentation for 3 components"
            ],
            "tools": ["Figma"],
            "res": [
              ["Figma", "https://www.figma.com"]
            ],
            "tip": "A component library without documentation is a junk drawer. Document or it does not exist."
          },
          {
            "t": "UI Patterns & Interface States",
            "d": "Reusable solutions and honest states: patterns users know and screens for every condition.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Pattern libraries: navigation, forms, lists, dialogs, and wizards",
              "Interface states: loading, empty, error, partial, and offline",
              "When to follow platform conventions vs invent"
            ],
            "do": [
              "Design all 5 states for a data list screen",
              "Collect a pattern swipe file of 20 screens in Mobbin",
              "Rewrite one clever-but-confusing custom pattern using a convention"
            ],
            "tools": ["Figma", "Mobbin"],
            "res": [
              ["Mobbin", "https://mobbin.com"]
            ],
            "tip": "Empty and error states are where trust is won or lost. Design them like landing pages."
          },
          {
            "t": "Motion & Micro-interactions",
            "d": "Interfaces that feel alive: purposeful animation that guides, confirms, and delights.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Motion principles: easing, duration, and choreography",
              "Micro-interaction anatomy: trigger, rules, feedback, loops",
              "Accessibility: prefers-reduced-motion and vestibular safety"
            ],
            "do": [
              "Prototype 5 micro-interactions: toggle, like, pull-to-refresh, loading, success",
              "Set durations between 200-500ms and compare the feel",
              "Add reduced-motion fallbacks to each prototype"
            ],
            "tools": ["Figma", "ProtoPie"],
            "res": [
              ["Material Design Motion", "https://m3.material.io"]
            ],
            "tip": "Motion should explain, not decorate. If removing the animation loses no meaning, remove it."
          }
        ]
      },
      {
        "t": "Design Systems & Handoff",
        "d": "Scale the craft: systems, operations, and the engineering partnership that ships quality.",
        "lv": 3,
        "children": [
          {
            "t": "Building a Design System",
            "d": "More than a component library: principles, tokens, patterns, and the documentation that teaches them.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "System layers: tokens, components, patterns, and guidance",
              "Documentation as product: usage, do/don't, and code examples",
              "Adoption strategy: how systems actually get used by teams"
            ],
            "do": [
              "Audit an existing product and catalog its inconsistencies",
              "Define the token layer and 10 core components",
              "Publish a 1-page adoption plan for a 20-person org"
            ],
            "tools": ["Figma", "Storybook"],
            "res": [
              ["Material Design", "https://m3.material.io"],
              ["Apple Human Interface Guidelines", "https://developer.apple.com/design/human-interface-guidelines"]
            ],
            "badge": "PROJECT",
            "tip": "Start with the 10 components teams actually reuse. A 200-component system nobody adopts is a museum."
          },
          {
            "t": "DesignOps",
            "d": "The operating system of design teams: workflows, tooling, and rituals that scale quality.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "DesignOps pillars: people, process, and craft at scale",
              "Design rituals: critiques, reviews, and office hours",
              "Tooling, file hygiene, and version control for design"
            ],
            "do": [
              "Map a design team's current workflow and find 3 bottlenecks",
              "Design a weekly crit ritual with roles and timeboxes",
              "Write file-naming and branching conventions for a team"
            ],
            "tools": ["Figma", "Notion"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tag": "opt",
            "tip": "DesignOps is invisible when it works. Measure it by designer time spent designing, not coordinating."
          },
          {
            "t": "Developer Handoff",
            "d": "Designs become software in handoff. Specs, assets, and conversations that prevent quality loss.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What developers need: specs, assets, states, and edge cases",
              "Handoff tools: Figma Dev Mode, Zeplin, and annotated flows",
              "Staying involved: build reviews and QA partnerships"
            ],
            "do": [
              "Prepare a handoff package for one flow: specs, assets, states",
              "Document 10 edge cases a developer would otherwise guess at",
              "Run a build review against your design and file the gaps"
            ],
            "tools": ["Figma", "Zeplin"],
            "res": [
              ["Figma", "https://www.figma.com"]
            ],
            "tip": "Handoff is not a phase, it is a relationship. The best handoffs happen in conversation, not files."
          },
          {
            "t": "Designing Within Technical Constraints",
            "d": "Real products have APIs, performance budgets, and legacy code. Great designers design with them.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Platform and stack constraints: what is cheap vs expensive to build",
              "API and data limitations: designing for real, incomplete data",
              "Performance budgets: how design choices cost milliseconds"
            ],
            "do": [
              "Interview a developer about their stack's constraints",
              "Redesign a heavy animation to fit a performance budget",
              "Design a screen for 3 data states: loading, partial, and failed"
            ],
            "tools": [],
            "res": [
              ["web.dev", "https://web.dev"]
            ],
            "tip": "Designers who understand constraints get invited earlier. Learn enough engineering to ask good questions."
          },
          {
            "t": "Multi-Platform Design",
            "d": "One product, many surfaces: coherent experiences across web, iOS, Android, and beyond.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Platform conventions: Material vs Human Interface Guidelines",
              "Adaptive vs responsive: when to share and when to diverge",
              "Designing for new surfaces: watch, TV, voice, and AR"
            ],
            "do": [
              "Adapt one mobile flow to desktop following platform conventions",
              "List 10 differences between Material and HIG guidance",
              "Design a companion watch complication for an app"
            ],
            "tools": ["Figma"],
            "res": [
              ["Material Design", "https://m3.material.io"],
              ["Apple Human Interface Guidelines", "https://developer.apple.com/design/human-interface-guidelines"]
            ],
            "tip": "Consistency across platforms means consistent logic, not identical pixels. Respect each platform."
          }
        ]
      },
      {
        "t": "Measure, Iterate & Grow",
        "d": "Prove impact and keep improving: analytics, experimentation, and the career beyond the craft.",
        "lv": 3,
        "children": [
          {
            "t": "Product Analytics",
            "d": "Instrument the experience: events, funnels, and cohorts that show what users really do.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Event taxonomy: naming events so analysis stays possible",
              "Funnels, cohorts, and retention curves",
              "Asking analytics answerable questions"
            ],
            "do": [
              "Design an event taxonomy for an onboarding flow",
              "Build a funnel and find the biggest drop-off",
              "Write 3 insights and the design change each suggests"
            ],
            "tools": ["Amplitude", "PostHog", "Mixpanel"],
            "res": [
              ["PostHog", "https://posthog.com"]
            ],
            "tip": "Track the outcome, not the click. 'Button clicked' is trivia; 'task completed' is insight."
          },
          {
            "t": "The HEART Framework",
            "d": "Google's UX metrics framework: happiness, engagement, adoption, retention, task success.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The five HEART categories and which fit your product",
              "Goals-Signals-Metrics: from goal to measurable signal",
              "Combining HEART with product and business metrics"
            ],
            "do": [
              "Build a HEART scorecard for one product area",
              "Define goals, signals, and metrics for each category",
              "Present the scorecard as a quarterly UX review"
            ],
            "tools": ["Amplitude"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Pick 2 to 3 HEART categories per project. All five everywhere is metric theater."
          },
          {
            "t": "A/B Testing & Experimentation",
            "d": "Run disciplined experiments: hypotheses, randomization, and honest interpretation.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Experiment design: hypothesis, primary metric, guardrails",
              "Sample size, power, and why early peeking invalidates results",
              "Experimentation culture: what to test and what to just decide"
            ],
            "do": [
              "Write a full experiment plan for a pricing page change",
              "Calculate sample size for 80% power at 95% confidence",
              "List 5 things you would never A/B test and why"
            ],
            "tools": ["PostHog", "VWO"],
            "res": [
              ["PostHog", "https://posthog.com"]
            ],
            "tip": "Most A/B tests fail. That is the point: cheap failures beat expensive opinions."
          },
          {
            "t": "Feature Flags & Rollouts",
            "d": "Ship safely: flags, gradual rollouts, and kill switches that de-risk every launch.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Flag types: release, experiment, ops, and permission flags",
              "Gradual rollouts and monitoring for regressions",
              "Flag hygiene: retiring flags before they become tech debt"
            ],
            "do": [
              "Design a rollout plan for a risky redesign: percentages and gates",
              "Define rollback criteria before launch day",
              "Audit a flag list and retire 3 stale flags"
            ],
            "tools": ["LaunchDarkly", "PostHog"],
            "res": [
              ["LaunchDarkly", "https://launchdarkly.com"]
            ],
            "tip": "Every flag needs an owner and an expiry date. Orphaned flags are silent landmines."
          },
          {
            "t": "Continuous Improvement Loops",
            "d": "Design never finishes: feedback loops that turn every release into the next insight.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Closing the loop: ship, measure, learn, prioritize, repeat",
              "Feedback channels: support tickets, reviews, NPS verbatims",
              "Iteration cadence: balancing new bets with fixing known issues"
            ],
            "do": [
              "Mine 50 app store reviews for recurring themes",
              "Turn the top 3 themes into prioritized design tickets",
              "Set up a monthly UX health review ritual"
            ],
            "tools": ["Appbot", "Notion"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Support tickets are free usability tests. Read them weekly and you will never run out of work."
          },
          {
            "t": "The Product Designer's Portfolio",
            "d": "Prove end-to-end ownership: case studies showing strategy, craft, and measured impact.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Case study arc: problem, strategy, process, craft, outcome",
              "Showing business impact alongside design quality",
              "Three deep projects beat ten shallow ones"
            ],
            "do": [
              "Write one case study covering the full arc with metrics",
              "Include strategy artifacts: trees, metrics, and decisions",
              "Get it critiqued by a senior designer and iterate"
            ],
            "tools": ["Framer", "Webflow"],
            "res": [
              ["Growth.Design", "https://growth.design"]
            ],
            "badge": "PROJECT",
            "tip": "Product design portfolios get judged on thinking, not Dribbble shots. Show the messy middle."
          }
        ]
      }
    ]
  }
});
