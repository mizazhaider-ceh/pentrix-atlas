/* Atlas roadmap data: Technical Writer (technical-writer) */
ROADMAPS.push({
  "id": "technical-writer",
  "title": "Technical Writer",
  "icon": "📝",
  "color": "#b45309",
  "desc": "The craft of explaining complex things clearly: API docs, tutorials, style guides, docs-as-code, and a portfolio that proves you can teach.",
  "kind": "role",
  "root": {
    "t": "Technical Writing",
    "d": "Write the docs developers actually read: clear, tested, and maintained like code.",
    "children": [
      {
        "t": "Foundations of Technical Writing",
        "d": "What technical writing is, who does it, and the audience-first mindset behind all of it.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Technical Writing?",
            "d": "Writing that helps people do things: instructions, explanations, and references for technical products.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Technical writing vs creative vs marketing writing: different goals, different rules",
              "The core promise: accuracy, clarity, and task completion",
              "Where technical writing lives: docs sites, APIs, help centers, internal wikis"
            ],
            "do": [
              "Collect 5 examples of technical writing you used this week",
              "Rate each on clarity and task completion, not style",
              "Rewrite one confusing paragraph you found in the wild"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Good technical writing is invisible. If readers notice your prose, it is probably in the way."
          },
          {
            "t": "Who Is a Technical Writer?",
            "d": "The role between engineering and users: part investigator, part teacher, part editor.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What technical writers actually do day to day",
              "How the role differs across startups, enterprises, and open source",
              "Adjacent roles: docs engineer, developer advocate, UX writer"
            ],
            "do": [
              "Read 10 technical writer job posts and extract the shared skills",
              "Interview or message one working technical writer with 3 questions",
              "Write a paragraph on which flavor of the role fits you"
            ],
            "tools": ["LinkedIn"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "The best technical writers are curious generalists. Curiosity beats credentials in this field."
          },
          {
            "t": "Forms of Technical Writing",
            "d": "Tutorials, references, how-tos, and concepts: each form serves a different reader need.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The Diataxis framework: tutorials, how-to guides, reference, explanation",
              "Matching form to reader intent: learning vs doing vs looking up",
              "Why mixing forms in one page confuses everyone"
            ],
            "do": [
              "Classify 10 documentation pages using the Diataxis quadrants",
              "Find one page mixing forms and split it into two",
              "Write the same topic as both a tutorial and a how-to guide"
            ],
            "tools": [],
            "res": [
              ["Diataxis", "https://diataxis.fr"]
            ],
            "tip": "Readers arrive with one intent. A page serving two intents serves neither well."
          },
          {
            "t": "Knowing Your Audience",
            "d": "Write for a specific reader, not 'the user'. Personas and skill levels change everything.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Reader personas: goals, prior knowledge, and environment",
              "Expertise levels: novice, intermediate, expert — and writing for each",
              "The curse of knowledge: why experts write confusing docs"
            ],
            "do": [
              "Write a persona for the reader of an API quickstart",
              "List 10 things that persona knows and 10 they do not",
              "Rewrite a paragraph for a novice, then for an expert"
            ],
            "tools": [],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "tip": "Pick one reader and write for them. 'Everyone' as an audience produces docs for no one."
          },
          {
            "t": "Content Objectives & Intent",
            "d": "Every document needs a job: what the reader will be able to do after reading.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Writing objectives as reader outcomes, not topics",
              "Matching content to the reader's stage in their journey",
              "Scoping: what this doc covers and what it deliberately does not"
            ],
            "do": [
              "Write objectives for 3 docs you plan to create",
              "Add explicit scope statements to each",
              "Cut one objective that belongs in a different document"
            ],
            "tools": [],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "tip": "If you cannot state the reader's outcome in one sentence, you are not ready to write."
          },
          {
            "t": "Minimalism: Less Is More",
            "d": "Readers want to finish tasks, not read. Cut ruthlessly and structure for scanning.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Minimalist instruction: support real tasks, cut the rest",
              "The inverted pyramid: conclusion first, details after",
              "Error recognition and recovery over exhaustive prevention"
            ],
            "do": [
              "Take a 1000-word doc and cut it to 500 without losing meaning",
              "Move the key takeaway to the first paragraph of 3 docs",
              "Delete every sentence that restates the heading"
            ],
            "tools": ["Hemingway Editor"],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "tip": "Every paragraph must earn its place by helping the reader act. Decoration gets deleted."
          }
        ]
      },
      {
        "t": "Writing Craft",
        "d": "The sentences themselves: plain language, solid structure, and procedures people can follow.",
        "lv": 1,
        "children": [
          {
            "t": "Plain Language",
            "d": "Say it simply: short sentences, familiar words, and active voice for technical readers.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Why plain language is faster for experts too, not just beginners",
              "Active voice, strong verbs, and killing nominalizations",
              "Sentence length targets and breaking up monsters"
            ],
            "do": [
              "Rewrite 10 passive sentences from real docs into active voice",
              "Cut the average sentence length of a doc by 30%",
              "Replace 20 pieces of jargon with plain alternatives"
            ],
            "tools": ["Hemingway Editor", "Grammarly"],
            "res": [
              ["Google Developer Documentation Style Guide", "https://developers.google.com/style"]
            ],
            "tip": "If a sentence needs re-reading, it needs rewriting. Confusion is the writer's fault, not the reader's."
          },
          {
            "t": "Grammar & Mechanics That Matter",
            "d": "The 20% of grammar that causes 80% of doc problems: lists, punctuation, and consistency.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Parallel structure in lists: the most violated rule in docs",
              "Commas, colons, and semicolons in technical contexts",
              "Consistency: capitalization, numbers, units, and code formatting"
            ],
            "do": [
              "Fix parallelism in 10 real-world lists you find",
              "Build a personal checklist of your 10 most repeated errors",
              "Proofread a doc backwards, sentence by sentence"
            ],
            "tools": ["Grammarly", "Vale"],
            "res": [
              ["Microsoft Writing Style Guide", "https://learn.microsoft.com/en-us/style-guide/welcome/"]
            ],
            "tip": "Inconsistent mechanics signal sloppy thinking. Readers lose trust before they finish the page."
          },
          {
            "t": "Structuring Any Document",
            "d": "Architecture for prose: introductions, hierarchy, and flow that carry readers to the end.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The anatomy of a doc page: context, prerequisites, steps, next actions",
              "Hierarchy: one idea per section, signposted with headings",
              "Transitions and logical flow between sections"
            ],
            "do": [
              "Outline a tutorial before writing a single sentence",
              "Restructure a rambling doc using the context-prerequisites-steps pattern",
              "Write next-steps sections for 3 existing docs"
            ],
            "tools": [],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "tip": "Write the outline until it is boring. A complete outline makes drafting almost mechanical."
          },
          {
            "t": "Headings & Scannability",
            "d": "Nobody reads, everybody scans. Headings, lists, and tables that survive skimming.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Task-based headings: 'Configure TLS' beats 'TLS Configuration'",
              "Lists, tables, and callouts for scannable information",
              "Front-loading: put the key words first in every heading"
            ],
            "do": [
              "Rewrite 15 noun-phrase headings as task-based headings",
              "Convert 3 dense paragraphs into tables or lists",
              "Skim-test your doc: can a reader find the answer in 30 seconds?"
            ],
            "tools": [],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Readers decide in seconds whether a page answers their question. Headings are your pitch."
          },
          {
            "t": "Writing Procedures Step by Step",
            "d": "Procedures are the heart of technical writing. One action per step, tested on a clean machine.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Step anatomy: one action, one step, with expected result",
              "Prerequisites, context, and verification steps",
              "Testing procedures by following them exactly on a fresh setup"
            ],
            "do": [
              "Write a 10-step procedure for a tool you know well",
              "Have a friend follow it literally on a clean environment",
              "Fix every step where they hesitated or failed"
            ],
            "tools": [],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "tip": "If your tester improvises, your step is broken. Procedures must survive literal readers."
          },
          {
            "t": "Editing & Proofreading Your Own Work",
            "d": "Writing is rewriting: systematic passes that catch what drafting misses.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Editing passes: structure, clarity, correctness, then polish",
              "Reading aloud and other tricks to defeat familiarity blindness",
              "Checklists: the boring tool that catches the most errors"
            ],
            "do": [
              "Edit a draft in 4 separate passes, one concern per pass",
              "Read a doc aloud and mark every stumble",
              "Build your personal pre-publish checklist with 15 items"
            ],
            "tools": ["Hemingway Editor", "Vale"],
            "res": [
              ["Microsoft Writing Style Guide", "https://learn.microsoft.com/en-us/style-guide/welcome/"]
            ],
            "tip": "Never edit and draft in the same sitting. Fresh eyes catch what tired eyes forgive."
          }
        ]
      },
      {
        "t": "Style Guides & Standards",
        "d": "Consistency at scale: house style, terminology, and inclusive language across every page.",
        "lv": 2,
        "children": [
          {
            "t": "Adopting a Style Guide",
            "d": "Do not invent style from scratch. Adopt Google's or Microsoft's guide, then customize.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The Google developer documentation style guide and its philosophy",
              "The Microsoft Writing Style Guide and its voice principles",
              "Creating a house style: adopting, adapting, and documenting exceptions"
            ],
            "do": [
              "Read both guides' sections on voice and tone",
              "Draft a 2-page house style addendum for a fictional product",
              "Apply it to 5 pages and log every decision"
            ],
            "tools": ["Vale"],
            "res": [
              ["Google Developer Documentation Style Guide", "https://developers.google.com/style"],
              ["Microsoft Writing Style Guide", "https://learn.microsoft.com/en-us/style-guide/welcome/"]
            ],
            "tip": "A style guide nobody enforces is a suggestion box. Automate it with Vale or watch it die."
          },
          {
            "t": "Terminology Management",
            "d": "One concept, one term, everywhere. Glossaries and term bases that end naming chaos.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why terminology drift confuses readers and breaks search",
              "Building a term base: preferred, deprecated, and defined terms",
              "Getting engineers to actually use the approved terms"
            ],
            "do": [
              "Audit a docs site and find 10 terms used inconsistently",
              "Build a 30-term glossary with definitions and usage notes",
              "Write the process for proposing and approving new terms"
            ],
            "tools": ["Vale"],
            "res": [
              ["Google Developer Documentation Style Guide", "https://developers.google.com/style"]
            ],
            "tip": "Every synonym you allow doubles the reader's confusion. Pick one term and defend it."
          },
          {
            "t": "Inclusive & Accessible Language",
            "d": "Words include or exclude. Write docs that welcome every reader and work with assistive tech.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Inclusive language: gender-neutral, culture-neutral, ability-neutral wording",
              "Accessible structure: headings, alt text, and link text for screen readers",
              "Plain language as an accessibility feature"
            ],
            "do": [
              "Audit 5 docs for exclusive language and rewrite each instance",
              "Fix every 'click here' link with descriptive link text",
              "Write alt text for 10 diagrams in your docs"
            ],
            "tools": ["alex"],
            "res": [
              ["Microsoft Writing Style Guide", "https://learn.microsoft.com/en-us/style-guide/welcome/"]
            ],
            "tip": "'Guys', 'crazy', 'simply': small words that tell readers they do not belong. Cut them all."
          },
          {
            "t": "Voice & Tone",
            "d": "One voice, many tones: consistent personality that adapts from tutorial warmth to error-message clarity.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Voice (who you are) vs tone (how you sound in the moment)",
              "Documenting voice with examples and anti-examples",
              "Tone shifts: tutorials, references, warnings, and apologies"
            ],
            "do": [
              "Write voice principles with 5 do and 5 don't examples",
              "Rewrite the same error message in 3 tones and pick the winner",
              "Audit a docs site for voice breaks across sections"
            ],
            "tools": [],
            "res": [
              ["Mailchimp Content Style Guide", "https://styleguide.mailchimp.com"]
            ],
            "tip": "Voice without examples is astrology. Show the sentence, not just the adjective."
          },
          {
            "t": "Legal, Safety & Ethical Writing",
            "d": "When docs carry liability: warnings, disclaimers, and the ethics of what you document.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Warning hierarchies: danger, warning, caution, and note",
              "Legal review: what needs it and how to survive it",
              "Ethics: documenting dual-use features and refusing harmful docs"
            ],
            "do": [
              "Write proper safety warnings for a fictional hardware procedure",
              "Draft a disclaimer for beta API documentation",
              "Write your personal red lines for documentation work"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tag": "opt",
            "tip": "Vague warnings protect no one. Say exactly what happens and exactly how to avoid it."
          }
        ]
      },
      {
        "t": "Tooling & Docs-as-Code",
        "d": "Treat docs like software: version control, automated builds, linting, and CI pipelines.",
        "lv": 2,
        "children": [
          {
            "t": "Markdown Mastery",
            "d": "The lingua franca of docs: Markdown and its extensions, written cleanly and consistently.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Core Markdown: headings, lists, links, code, tables, images",
              "Extensions: admonitions, tabs, footnotes, and MDX components",
              "Style consistency: linting Markdown like code"
            ],
            "do": [
              "Write a complete doc page using only Markdown",
              "Add admonitions, code tabs, and a table to it",
              "Run markdownlint and fix every violation"
            ],
            "tools": ["markdownlint", "VS Code"],
            "res": [
              ["Markdown Guide", "https://www.markdownguide.org"]
            ],
            "tip": "Inconsistent Markdown renders inconsistently. Lint it like code or it rots like prose."
          },
          {
            "t": "Git for Writers",
            "d": "Version control for docs: branches, pull requests, and reviews for every change.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Git essentials for writers: clone, branch, commit, push, PR",
              "Docs review workflows: who reviews, what they check",
              "Resolving conflicts and keeping history readable"
            ],
            "do": [
              "Clone a docs repo and fix 3 typos via pull request",
              "Review a peer's docs PR with line-by-line comments",
              "Write a PR template for documentation changes"
            ],
            "tools": ["Git", "GitHub"],
            "res": [
              ["GitHub Docs", "https://docs.github.com"]
            ],
            "tip": "Small, focused docs PRs get reviewed. A 50-file PR gets rubber-stamped — or ignored."
          },
          {
            "t": "Static Site Generators",
            "d": "Publish like a pro: Docusaurus, MkDocs, and Sphinx turn Markdown into documentation sites.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Choosing a generator: Docusaurus, MkDocs Material, Sphinx, VitePress",
              "Versioning docs alongside software releases",
              "Search, navigation, and theming for docs sites"
            ],
            "do": [
              "Scaffold a Docusaurus site and publish 5 docs pages",
              "Enable versioning and search on the site",
              "Deploy it to GitHub Pages with a CI workflow"
            ],
            "tools": ["Docusaurus", "MkDocs", "Sphinx"],
            "res": [
              ["Docusaurus", "https://docusaurus.io"],
              ["MkDocs", "https://www.mkdocs.org"],
              ["Sphinx", "https://www.sphinx-doc.org"]
            ],
            "badge": "PROJECT",
            "tip": "Pick the generator your engineers already know. Docs tooling adoption beats docs tooling perfection."
          },
          {
            "t": "Vale: Linting Your Prose",
            "d": "Automated style enforcement: run your house style guide as code in every pull request.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "How Vale works: styles, rules, and severity levels",
              "Using the Google and Microsoft style packages",
              "Writing custom rules for your house terminology"
            ],
            "do": [
              "Install Vale and run it on an existing docs folder",
              "Configure the Google style package and fix the findings",
              "Write 3 custom rules for your product's terminology"
            ],
            "tools": ["Vale", "GitHub Actions"],
            "res": [
              ["Vale", "https://vale.sh"]
            ],
            "tip": "Start Vale as warnings, not errors. Teams adopt linting they can ease into."
          },
          {
            "t": "Diagrams as Code with Mermaid",
            "d": "Version-controlled diagrams: flowcharts, sequence diagrams, and ERDs written in text.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Mermaid syntax: flowcharts, sequence, class, and state diagrams",
              "Embedding diagrams in Markdown that render in docs sites",
              "When diagrams beat prose: architecture, flows, and state"
            ],
            "do": [
              "Diagram an API request flow as a Mermaid sequence diagram",
              "Convert 3 screenshot diagrams into Mermaid source",
              "Add Mermaid rendering to your docs site"
            ],
            "tools": ["Mermaid", "Docusaurus"],
            "res": [
              ["Mermaid", "https://mermaid.js.org"]
            ],
            "tip": "Diagrams in text stay in sync with docs. PNG diagrams rot the moment the product changes."
          },
          {
            "t": "Publishing Platforms & Headless Docs",
            "d": "Beyond static sites: hosted portals, headless CMS, and choosing the right platform.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Hosted docs platforms: ReadMe, Mintlify, GitBook, and Confluence",
              "Headless docs: content APIs feeding multiple surfaces",
              "Build vs buy: total cost of docs platforms"
            ],
            "do": [
              "Publish the same content to two platforms and compare",
              "Evaluate 3 platforms against a 10-point requirements list",
              "Write a build-vs-buy recommendation for a fictional startup"
            ],
            "tools": ["ReadMe", "Mintlify", "Confluence"],
            "res": [
              ["ReadMe", "https://readme.com"],
              ["Mintlify", "https://mintlify.com"]
            ],
            "tag": "opt",
            "tip": "Platform migrations are the most expensive docs project. Choose like you will live with it for 5 years."
          }
        ]
      },
      {
        "t": "Developer Documentation",
        "d": "Docs for builders: guides, tutorials, and API references that developers actually use.",
        "lv": 2,
        "children": [
          {
            "t": "The Developer Journey",
            "d": "Map how developers adopt your product: discovery, evaluation, first success, and mastery.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The developer funnel: from landing page to production",
              "Time to first hello world: the metric that predicts adoption",
              "Docs touchpoints at each stage of the journey"
            ],
            "do": [
              "Map the developer journey for a public API you admire",
              "Time your own hello world with a new API and log friction",
              "Identify the 3 docs pages that matter most for adoption"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Developers judge your product in the first 15 minutes. The quickstart is your most important page."
          },
          {
            "t": "Conceptual Guides: Teach the Why",
            "d": "Concepts before commands: the explanations that make everything else make sense.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Concept docs: mental models, architecture, and key abstractions",
              "Teaching through analogy without misleading",
              "Where concepts live in the docs information architecture"
            ],
            "do": [
              "Write a concept guide explaining one system you understand deeply",
              "Draw the mental model diagram first, then write to it",
              "Test it on a beginner and fix every confused paragraph"
            ],
            "tools": ["Mermaid"],
            "res": [
              ["Diataxis", "https://diataxis.fr"]
            ],
            "tip": "If readers must guess the mental model, they will guess wrong. State it explicitly."
          },
          {
            "t": "Tutorials & How-To Guides",
            "d": "Learning by doing: tutorials that take beginners from zero to working in 15 minutes.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Tutorial design: a meaningful end goal, small verifiable steps",
              "How-tos vs tutorials: solving a problem vs learning a skill",
              "Testing tutorials on real beginners, not your colleagues"
            ],
            "do": [
              "Write a tutorial that gets a beginner to a working result in 15 minutes",
              "Watch a beginner follow it and fix every stumble",
              "Write the companion how-to for one advanced variation"
            ],
            "tools": ["Docusaurus"],
            "res": [
              ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"]
            ],
            "badge": "PROJECT",
            "tip": "Every tutorial step must produce something checkable. Unverifiable steps are where beginners get lost."
          },
          {
            "t": "API Reference Fundamentals",
            "d": "The contract developers build on: complete, accurate, example-rich endpoint documentation.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Reference anatomy: endpoints, parameters, responses, errors, examples",
              "Completeness and accuracy: every field documented, every example tested",
              "Authentication, rate limits, and error handling docs"
            ],
            "do": [
              "Document 5 endpoints of a public API from scratch",
              "Test every example request and paste real responses",
              "Write the authentication guide a beginner can follow"
            ],
            "tools": ["Postman", "OpenAPI"],
            "res": [
              ["Stripe API Docs", "https://stripe.com/docs"],
              ["OpenAPI Initiative", "https://www.openapis.org"]
            ],
            "tip": "An undocumented parameter is a broken promise. Reference docs must be exhaustive or they are useless."
          },
          {
            "t": "OpenAPI & Interactive Docs",
            "d": "Spec-driven documentation: OpenAPI specs that generate references, sandboxes, and SDKs.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "OpenAPI 3.x: paths, schemas, and reusable components",
              "Rendering interactive docs with Swagger UI and Redoc",
              "Linting specs with Spectral for consistency"
            ],
            "do": [
              "Write an OpenAPI spec for a small REST API",
              "Render it with Redoc and fix every Spectral warning",
              "Generate a client SDK from the spec"
            ],
            "tools": ["OpenAPI Generator", "Spectral", "Redoc"],
            "res": [
              ["Swagger Docs", "https://swagger.io/docs/"],
              ["Redocly", "https://redocly.com"]
            ],
            "tip": "The spec is the source of truth. Docs generated from a stale spec are worse than no docs."
          },
          {
            "t": "Code Samples That Actually Run",
            "d": "Examples are the most-read part of any docs. Every sample must work, copied verbatim.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Sample design: minimal, complete, and copy-paste ready",
              "Testing samples in CI so they never rot",
              "Multi-language samples and when they are worth the cost"
            ],
            "do": [
              "Write 5 code samples for an API and run each one",
              "Set up CI to execute samples on every docs build",
              "Fix 3 broken samples you find in popular docs"
            ],
            "tools": ["GitHub Actions", "Postman"],
            "res": [
              ["Twilio Docs", "https://www.twilio.com/docs"]
            ],
            "tip": "A broken code sample destroys trust faster than missing docs. Test them like production code."
          },
          {
            "t": "Release Notes & Changelogs",
            "d": "Tell users what changed: release notes that respect their time and their upgrades.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Changelog formats: Keep a Changelog and semantic versioning",
              "Writing for upgraders: breaking changes first, always",
              "Release notes as marketing vs as documentation"
            ],
            "do": [
              "Write release notes for a fictional breaking release",
              "Convert a messy git log into a Keep a Changelog entry",
              "Add migration steps for every breaking change"
            ],
            "tools": [],
            "res": [
              ["Keep a Changelog", "https://keepachangelog.com"]
            ],
            "tip": "Bury a breaking change in release notes and you will hear about it in support tickets for months."
          }
        ]
      },
      {
        "t": "Content Strategy & SEO",
        "d": "Docs as a system: research topics, structure content, measure, and keep it all alive.",
        "lv": 3,
        "children": [
          {
            "t": "Topic & Keyword Research",
            "d": "Write what people search for: finding the questions your docs should answer.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Keyword research for docs: volume, intent, and competition",
              "Mining support tickets, forums, and search logs for topics",
              "Topic scoring: impact times effort for content planning"
            ],
            "do": [
              "Mine 50 support tickets for the top 10 doc gaps",
              "Research keywords for 5 topics and map search intent",
              "Build a prioritized content backlog from the findings"
            ],
            "tools": ["Ahrefs", "Google Search Console"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Support tickets are a free content strategy. Every repeated question is a missing doc."
          },
          {
            "t": "Information Architecture for Docs",
            "d": "Structure the whole docs site: navigation, search, and findability at scale.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Docs IA: task-based navigation over org-chart navigation",
              "Search optimization: titles, metadata, and synonyms",
              "Versioned and localized IA without chaos"
            ],
            "do": [
              "Card-sort a docs site's navigation with 5 users",
              "Rewrite 20 page titles for search and scanning",
              "Design the IA for docs spanning 3 product versions"
            ],
            "tools": ["Optimal Workshop", "Algolia"],
            "res": [
              ["Nielsen Norman Group", "https://www.nngroup.com"]
            ],
            "tip": "Docs organized by internal team structure are unusable. Organize by reader task, always."
          },
          {
            "t": "Content Audits & Fighting Rot",
            "d": "Docs decay like code. Audit regularly, archive ruthlessly, and keep everything trustworthy.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Running a content audit: inventory, scoring, and decisions",
              "ROT analysis: redundant, outdated, and trivial content",
              "Maintenance rituals: ownership, review dates, and freshness SLAs"
            ],
            "do": [
              "Audit 30 docs pages and score each: keep, update, merge, delete",
              "Delete or redirect 5 pages and document why",
              "Set up review reminders for the 10 most critical pages"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Outdated docs are worse than missing docs. Readers trust the page, follow it, and fail."
          },
          {
            "t": "Docs Analytics & Metrics",
            "d": "Measure what docs do: search success, task completion, and support deflection.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Docs metrics that matter: search success, time on task, deflection",
              "Feedback widgets and turning ratings into actions",
              "Reporting docs impact to leadership in their language"
            ],
            "do": [
              "Define 5 metrics for a docs site and how you would measure each",
              "Analyze a month of search logs for zero-result queries",
              "Write the docs for the top 5 failed searches"
            ],
            "tools": ["Google Analytics", "PostHog"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Page views flatter docs teams. Search success and ticket deflection prove value."
          },
          {
            "t": "Content Distribution",
            "d": "Great docs nobody finds are a hobby. Distribution channels that put content in front of readers.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Distribution channels: SEO, newsletters, communities, and in-product help",
              "Canonical URLs and OpenGraph for docs that travel",
              "Amplification: launch posts, changelogs, and developer relations"
            ],
            "do": [
              "Add OpenGraph metadata to your docs site and test the previews",
              "Write a launch post for a major docs release",
              "Answer 5 Stack Overflow questions by linking your docs"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tag": "opt",
            "tip": "In-product help beats a docs portal. Meet readers where the question occurs."
          }
        ]
      },
      {
        "t": "Career & Portfolio",
        "d": "Get hired and grow: portfolios, specializations, and working with the teams around you.",
        "lv": 3,
        "children": [
          {
            "t": "Building a Writing Portfolio",
            "d": "Show, do not tell: published samples that prove you can explain hard things simply.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "What hiring managers look for: range, accuracy, and reader empathy",
              "Portfolio pieces: tutorials, API docs, and before/after rewrites",
              "Contributing to open source docs as portfolio material"
            ],
            "do": [
              "Publish 3 portfolio pieces: a tutorial, an API reference, and a rewrite",
              "Contribute one docs PR to an open source project",
              "Write a 1-page narrative tying the pieces together"
            ],
            "tools": ["GitHub", "Docusaurus"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "badge": "PROJECT",
            "tip": "One excellent tutorial beats ten mediocre samples. Depth proves craft; volume proves nothing."
          },
          {
            "t": "Docs Case Studies That Hire",
            "d": "Tell the story behind the docs: the problem, your process, and the measured outcome.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Case study structure: context, challenge, approach, impact",
              "Quantifying docs impact: deflection, adoption, and satisfaction",
              "Showing process: research, drafts, and iteration"
            ],
            "do": [
              "Write a case study for your best docs project with metrics",
              "Include before/after samples showing your revisions",
              "Get it reviewed by a working technical writer"
            ],
            "tools": [],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Hiring managers skim portfolios in minutes. Lead with the outcome, then prove the craft."
          },
          {
            "t": "Specialization Paths",
            "d": "Go deep where it pays: API docs, docs-as-code, developer education, and content strategy.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "API documentation specialist: the highest-demand niche",
              "Docs-as-code engineer: tooling, pipelines, and automation",
              "Developer educator and content strategist paths"
            ],
            "do": [
              "Research salaries and demand for 3 specializations",
              "Pick one and list the 5 skills that define it",
              "Plan your next 3 portfolio pieces around that niche"
            ],
            "tools": ["LinkedIn"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tag": "opt",
            "tip": "Generalists get hired; specialists get paid. Pick a niche after you learn the foundations."
          },
          {
            "t": "Working with Engineers & PMs",
            "d": "Docs are a team sport: extracting knowledge from busy experts without being ignored.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "SME interviews: getting knowledge out of engineers efficiently",
              "Review workflows that respect everyone's time",
              "Advocating for docs in planning and prioritization"
            ],
            "do": [
              "Interview an engineer about a feature and write the doc",
              "Design a review process with clear roles and SLAs",
              "Write a 1-page pitch for docs headcount to leadership"
            ],
            "tools": ["Notion", "Slack"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Engineers do not hate docs; they hate doc processes that waste their time. Make reviews painless."
          },
          {
            "t": "Getting Hired",
            "d": "Land the role: applications, writing tests, and interviews for documentation positions.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Tailoring applications: matching your samples to the job",
              "Surviving writing tests: timed docs exercises done well",
              "Interview questions technical writers actually get asked"
            ],
            "do": [
              "Tailor your portfolio to 3 real job postings",
              "Complete a timed writing test: document an unfamiliar API in 2 hours",
              "Prepare answers to 10 common technical writing interview questions"
            ],
            "tools": ["LinkedIn"],
            "res": [
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tag": "opt",
            "tip": "In writing tests, clarity under time pressure is the whole exam. Outline first, even when the clock runs."
          }
        ]
      }
    ]
  }
});
