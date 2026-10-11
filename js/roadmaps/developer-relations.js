/* Atlas roadmap data: Developer Relations (developer-relations) */
ROADMAPS.push({
  "id": "developer-relations",
  "title": "Developer Relations",
  "icon": "🎤",
  "color": "#a21caf",
  "desc": "Turn developers into fans: content, community, and docs that make products succeed.",
  "kind": "role",
  "root": {
    "t": "Developer Relations",
    "d": "Build the bridge between developers and the product.",
    "children": [
      {
        "t": "The DevRel Landscape",
        "d": "What developer relations is and why companies invest in it.",
        "lv": 1,
        "children": [
          {
            "t": "What DevRel Actually Is",
            "d": "DevRel sits between product, marketing, and engineering. Learn the territory.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The core loop: listen to developers, teach them, feed insights back to product",
              "How DevRel differs from marketing, sales, and support",
              "The history: from evangelists to a formal discipline"
            ],
            "do": [
              "Write a one-paragraph definition of DevRel in your own words",
              "Map where DevRel sits in three companies you admire",
              "List five DevRel practitioners to follow and read their work for a week"
            ],
            "tools": [],
            "res": [
              ["Developer Relations — field hub", "https://developerrelations.com"]
            ],
            "tip": "If you cannot explain DevRel's value without saying community vibes, leadership will not fund it. Learn the business case early."
          },
          {
            "t": "DevRel Models and Specializations",
            "d": "Advocate, educator, community manager, DX engineer: pick your lane.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Developer advocate vs evangelist vs community manager vs DevEd",
              "Product-led vs sales-led DevRel motions",
              "How team structure changes with company stage"
            ],
            "do": [
              "Interview two DevRel practitioners about their actual week",
              "Score yourself on writing, speaking, coding, and community",
              "Pick one specialization to go deep on first"
            ],
            "tools": [],
            "res": [
              ["Developer Relations Foundation — Linux Foundation", "https://www.linuxfoundation.org"]
            ],
            "tip": "Junior DevRel job titles are chaos: the same work is called five different names. Read the responsibilities, not the title."
          },
          {
            "t": "Developer Experience and the Developer Journey",
            "d": "Great DevRel starts with understanding how developers discover, try, and adopt.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The developer journey: awareness, evaluation, onboarding, adoption, advocacy",
              "Friction points that kill adoption at each stage",
              "DX as a product surface you can measure"
            ],
            "do": [
              "Map the journey for one product you use",
              "Time yourself from landing page to hello world",
              "List the top three friction points you hit"
            ],
            "tools": [],
            "res": [
              ["Developer Relations — DX resources", "https://developerrelations.com"]
            ],
            "tip": "Most DevRel content targets developers who already decided to try the product. The biggest wins are earlier: discovery and first-run experience."
          },
          {
            "t": "The Business Case for DevRel",
            "d": "DevRel survives downturns when it ties to revenue. Learn the language.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How DevRel drives acquisition, activation, and retention",
              "Pipeline influence and the attribution problem",
              "Cost-center vs growth-driver framing"
            ],
            "do": [
              "Write a one-page business case for a hypothetical DevRel hire",
              "Find one public case study of DevRel ROI",
              "Practice explaining DevRel value in two sentences"
            ],
            "tools": [],
            "res": [
              ["State of Developer Relations report", "https://developerrelations.com/reports/"]
            ],
            "tip": "Teams that could not connect activity to business outcomes were cut first in the 2023-2025 layoffs. Instrument your impact from day one."
          },
          {
            "t": "DevRel Career Paths and Ladders",
            "d": "From junior advocate to head of DevRel: how the ladder works.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The IC ladder: junior, mid, senior, staff, principal",
              "Manager vs IC tracks in DevRel orgs",
              "What staff-level DevRel actually looks like"
            ],
            "do": [
              "Find three public DevRel ladders and compare them",
              "Set one career goal for the next 12 months",
              "Identify a mentor one rung above you"
            ],
            "tools": [],
            "res": [
              ["DevRel career ladders", "https://github.com/samber/developer-relations-skills"]
            ],
            "tip": "Counting talks given measures activity, not seniority. Senior DevRel is judged on strategic influence, not output volume."
          }
        ]
      },
      {
        "t": "Communication Craft",
        "d": "Writing and speaking skills that carry everything else.",
        "lv": 1,
        "children": [
          {
            "t": "Technical Writing Fundamentals",
            "d": "Clear writing is the DevRel superpower. Build it deliberately.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Audience-first writing: who reads this and what do they need?",
              "Structure: lead with the outcome, then the steps",
              "Editing: cut ruthlessly, test with a real reader"
            ],
            "do": [
              "Rewrite one confusing doc paragraph you have read recently",
              "Write a 500-word explainer and get two developers to review it",
              "Keep a swipe file of technical writing you admire"
            ],
            "tools": ["Grammarly"],
            "res": [
              ["Google developer documentation style guide", "https://developers.google.com/style"]
            ],
            "tip": "Write for the reader's task, not your knowledge. The curse of knowledge makes experts skip the exact steps beginners need."
          },
          {
            "t": "Blog Posts That Teach",
            "d": "Tutorials are DevRel's bread and butter. Learn the anatomy of a great one.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Anatomy: hook, outcome, prerequisites, steps, troubleshooting",
              "Code samples that actually run, copy-paste tested",
              "Headlines that promise a specific result"
            ],
            "do": [
              "Publish your first tutorial on dev.to",
              "Test every code sample in a fresh environment",
              "Add a troubleshooting section to an existing post"
            ],
            "tools": [],
            "res": [
              ["dev.to", "https://dev.to"]
            ],
            "tip": "A tutorial with broken code is worse than no tutorial. Test in a clean environment, not the one you built it in."
          },
          {
            "t": "Documentation Contribution",
            "d": "Docs are a product surface. Learn to improve them like one.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Diátaxis: tutorials, how-tos, reference, explanation",
              "Docs-as-code workflows: PRs, previews, and reviews",
              "Style guides and voice consistency"
            ],
            "do": [
              "Submit a docs PR to an open-source project",
              "Restructure one page using the Diátaxis quadrants",
              "Read a project's style guide end to end"
            ],
            "tools": ["Docusaurus", "MkDocs"],
            "res": [
              ["Diátaxis documentation framework", "https://diataxis.fr"],
              ["Write the Docs", "https://www.writethedocs.org"]
            ],
            "tip": "Reference docs answer what does this do; tutorials answer how do I achieve X. Mixing them is the most common docs failure."
          },
          {
            "t": "Public Speaking Basics",
            "d": "Conference talks amplify everything else you do. Start small and deliberate.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Talk structure: problem, journey, takeaway",
              "Rehearsal math: prepare more than you think you need",
              "Handling nerves: preparation beats talent"
            ],
            "do": [
              "Give a 5-minute lightning talk at a local meetup",
              "Record yourself and watch it back once",
              "Submit one CFP to a small conference"
            ],
            "tools": ["OBS Studio"],
            "res": [
              ["DevRelCon talks", "https://developerrelations.com/devrelcon/"]
            ],
            "tip": "Reading slides is the fastest way to lose a room. Slides illustrate; you narrate. If the slide needs you to read it, delete the text."
          },
          {
            "t": "Presentation Techniques That Stick",
            "d": "Hooks, stories, and the rule of three: the craft behind memorable talks.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The hook: earn attention in the first 60 seconds",
              "Storytelling arcs for technical content",
              "Visuals: one idea per slide, diagrams over bullet walls"
            ],
            "do": [
              "Rewrite the opening of a talk you have given or watched",
              "Turn one bullet-wall slide into a diagram",
              "Practice the rule of three on your next demo"
            ],
            "tools": [],
            "res": [
              ["DevRel Scribbles — speaking notes", "https://scribbles.devrel.page/"]
            ],
            "tip": "Audiences remember stories and demos, not bullet points. If they can photograph the slide and skip your talk, the slide is doing your job."
          },
          {
            "t": "Handling Q&A With Confidence",
            "d": "The Q&A is where credibility is won. Prepare for the hard questions.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Active listening: repeat the question before answering",
              "Anticipating the five hardest questions in advance",
              "Saying I don't know, I'll find out without losing authority"
            ],
            "do": [
              "Write down the five hardest questions for your next talk",
              "Practice the repeat-back technique in a low-stakes setting",
              "Follow up in writing on every question you deferred"
            ],
            "tools": [],
            "res": [
              ["DevRel Scribbles", "https://scribbles.devrel.page/"]
            ],
            "tip": "Never bluff an answer on stage. One confident wrong answer destroys more trust than ten honest I don't knows."
          }
        ]
      },
      {
        "t": "Content Creation",
        "d": "Ship a content engine, not just content.",
        "lv": 2,
        "children": [
          {
            "t": "Technical Blogging Workflow",
            "d": "From idea to published post: a repeatable system for consistent output.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Topic selection: search data, support tickets, and community questions",
              "Editorial calendars that survive real life",
              "Distribution: where developers actually read"
            ],
            "do": [
              "Build a backlog of 10 post ideas from real questions",
              "Publish on a fixed cadence for 8 weeks",
              "Repurpose one post into a thread and a short video"
            ],
            "tools": ["Hashnode", "Ghost"],
            "res": [
              ["Hashnode", "https://hashnode.com"]
            ],
            "tip": "Write the posts you wish existed when you were stuck. Search traffic rewards specificity that marketing copy never earns."
          },
          {
            "t": "Video Tutorials: Script to Edit",
            "d": "Video scales your teaching. Learn the production pipeline.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Scripting for video: spoken language, not written prose",
              "Recording setup: audio matters more than video",
              "Editing: pacing, captions, and chapters"
            ],
            "do": [
              "Script and record a 5-minute tutorial",
              "Edit it with captions and chapters",
              "Publish and study the retention graph"
            ],
            "tools": ["OBS Studio", "Descript"],
            "res": [
              ["OBS Studio", "https://obsproject.com"],
              ["Descript", "https://www.descript.com"]
            ],
            "tip": "Bad audio kills good content instantly. A cheap microphone upgrade beats an expensive camera every time."
          },
          {
            "t": "Live Streaming and Office Hours",
            "d": "Live formats build trust and surface real user pain. Run them well.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Formats: build-in-public, AMAs, office hours, launch streams",
              "Technical setup: scenes, audio, moderation bots",
              "Repurposing: clips, chapters, and follow-up posts"
            ],
            "do": [
              "Host a 30-minute live office hour",
              "Set up moderation and a code of conduct for chat",
              "Clip the three best moments into shorts"
            ],
            "tools": ["StreamYard", "Restream"],
            "res": [
              ["StreamYard", "https://streamyard.com"]
            ],
            "tip": "Dead air is fine; dead chat is not. Seed the first three questions yourself so newcomers see a living room."
          },
          {
            "t": "Sample Code and Example Apps",
            "d": "Developers copy, then learn. Give them something worth copying.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Designing samples around real use cases, not API surface",
              "Keeping samples maintained: CI for your examples",
              "READMEs that get someone running in five minutes"
            ],
            "do": [
              "Build one sample app for a real use case",
              "Add CI that tests the sample on every release",
              "Rewrite one README as a 5-minute quickstart"
            ],
            "tools": ["GitHub", "StackBlitz"],
            "res": [
              ["GitHub", "https://github.com"]
            ],
            "tip": "Unmaintained samples are negative marketing. Every sample is a promise; budget the maintenance or delete it."
          },
          {
            "t": "SEO for Technical Content",
            "d": "The best tutorial is useless if nobody finds it. Learn developer SEO.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Keyword research for problem-shaped queries",
              "Structure: headings, snippets, and code blocks that rank",
              "Distribution beyond Google: newsletters, aggregators, communities"
            ],
            "do": [
              "Research keywords for your next three posts",
              "Optimize one old post and track its traffic",
              "Get one post featured in a developer newsletter"
            ],
            "tools": ["Ahrefs", "Google Search Console"],
            "res": [
              ["Ahrefs blog — SEO basics", "https://ahrefs.com/blog/"]
            ],
            "tip": "Developers search error messages and how to X with Y, not brand slogans. Title the post the way the stuck developer phrases the problem."
          },
          {
            "t": "Newsletters and Social Content",
            "d": "Own an audience relationship that algorithms cannot take away.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Newsletter formats that developers actually open",
              "Social platforms: where your developers hang out",
              "Repurposing: one idea, five formats"
            ],
            "do": [
              "Start a monthly newsletter or join one as a contributor",
              "Post a build-in-public thread weekly for a month",
              "Measure which format drives actual signups"
            ],
            "tools": ["Substack", "Beehiiv"],
            "res": [
              ["Substack", "https://substack.com"]
            ],
            "tip": "Follower counts are vanity; email subscribers are assets. Platforms change algorithms, inboxes do not."
          }
        ]
      },
      {
        "t": "Community Building",
        "d": "Turn users into a community that helps itself.",
        "lv": 2,
        "children": [
          {
            "t": "Finding and Defining Your Audience",
            "d": "You cannot build community for developers. Define exactly who.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Personas: the builder, the evaluator, the champion",
              "Where they already gather: forums, Discords, meetups",
              "Jobs-to-be-done: why would they show up?"
            ],
            "do": [
              "Write three personas for your product's developers",
              "Lurk in two communities for two weeks before posting",
              "Interview five developers about where they get help"
            ],
            "tools": [],
            "res": [
              ["Developer Relations — community guides", "https://developerrelations.com"]
            ],
            "tip": "Building a new community from scratch is the hardest path. Join and serve existing ones first; start your own only with a clear gap."
          },
          {
            "t": "Choosing Community Platforms",
            "d": "Discord, Slack, Discourse, GitHub Discussions: match the platform to the purpose.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Real-time chat vs searchable forums: different jobs",
              "GitHub Discussions for product-adjacent Q&A",
              "The migration cost of choosing wrong"
            ],
            "do": [
              "Compare three platforms against your community's needs",
              "Set up a pilot space with 20 friendly users",
              "Document why you chose what you chose"
            ],
            "tools": ["Discord", "Discourse", "Slack"],
            "res": [
              ["Discourse", "https://www.discourse.org"],
              ["Discord", "https://discord.com"]
            ],
            "tip": "Chat platforms are where knowledge goes to die unless someone curates it. Pair any chat with a searchable home for answers."
          },
          {
            "t": "Codes of Conduct That Work",
            "d": "Safety is infrastructure. Write the rules before you need them.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What a good CoC covers: scope, examples, reporting, enforcement",
              "Adapting the Contributor Covenant vs writing your own",
              "Enforcement: who decides, and how fast"
            ],
            "do": [
              "Adopt and publish a code of conduct",
              "Set up a private reporting channel with named responders",
              "Run one enforcement drill as a team"
            ],
            "tools": [],
            "res": [
              ["Contributor Covenant", "https://www.contributor-covenant.org"]
            ],
            "tip": "A CoC nobody enforces is worse than none: it promises safety you do not deliver. Only publish what you will actually enforce."
          },
          {
            "t": "Moderation and Conflict Resolution",
            "d": "Healthy communities are moderated, not just hosted.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Moderation ladders: warn, mute, remove, ban",
              "De-escalation scripts for heated threads",
              "Burnout: moderators need support too"
            ],
            "do": [
              "Write a moderation playbook with example responses",
              "Recruit and train two volunteer moderators",
              "Review one past conflict and write what you would do differently"
            ],
            "tools": [],
            "res": [
              ["DevRel Scribbles — moderation", "https://scribbles.devrel.page/"]
            ],
            "tip": "Moderate the behavior, not the person, and do it quickly. Slow moderation teaches the community that rules are suggestions."
          },
          {
            "t": "Champions and Recognition Programs",
            "d": "Your best advocates are not on payroll. Find them and fuel them.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Identifying champions: helpfulness, not just loudness",
              "Program design: swag, access, recognition, and real perks",
              "Avoiding pay-to-play dynamics that corrupt trust"
            ],
            "do": [
              "List your top 10 community contributors",
              "Design a lightweight champions program",
              "Recognize three contributors publicly this month"
            ],
            "tools": [],
            "res": [
              ["Developer Relations — advocacy programs", "https://developerrelations.com"]
            ],
            "tip": "Champions programs fail when they become unpaid labor pipelines. Give real value first: access, influence, and genuine recognition."
          },
          {
            "t": "Running Meetups, Hackathons, and Events",
            "d": "Events create the relationships that content cannot.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Event formats: meetups, workshops, hackathons, conferences",
              "Logistics: venue, sponsors, CFP, and run-of-show",
              "Follow-up: the event is the start, not the end"
            ],
            "do": [
              "Organize a 20-person local meetup",
              "Write a run-of-show doc with minute-level timing",
              "Send follow-up resources within 48 hours"
            ],
            "tools": ["Luma", "Eventbrite"],
            "res": [
              ["Luma", "https://lu.ma"]
            ],
            "tip": "Nobody remembers the talks; everyone remembers whether they met interesting people. Design for conversations, not just content."
          }
        ]
      },
      {
        "t": "Developer Onboarding and DX",
        "d": "Make the first 15 minutes irresistible.",
        "lv": 2,
        "children": [
          {
            "t": "Time to Hello World",
            "d": "Every minute of signup friction costs you developers. Measure and cut it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Mapping the signup-to-success path step by step",
              "Common killers: keys, billing walls, unclear next steps",
              "Benchmarking against best-in-class onboarding"
            ],
            "do": [
              "Time five developers doing your onboarding; watch silently",
              "Remove or explain one friction point",
              "Add a guided quickstart to the docs homepage"
            ],
            "tools": [],
            "res": [
              ["Stripe docs — onboarding example", "https://docs.stripe.com"]
            ],
            "tip": "Your team knows the product too well to feel the friction. Watch a genuine first-timer; their confusion is your roadmap."
          },
          {
            "t": "Tutorials and Guides That Onboard",
            "d": "Teach the happy path first, completely, before anything else.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The golden path: one tutorial that covers 80% of use cases",
              "Progressive disclosure: basics first, power features later",
              "Testing tutorials with real beginners"
            ],
            "do": [
              "Write or rewrite the golden-path tutorial",
              "User-test it with two developers new to the product",
              "Add copy-paste commands that work verbatim"
            ],
            "tools": [],
            "res": [
              ["Diátaxis — tutorials", "https://diataxis.fr"]
            ],
            "tip": "If your tutorial needs three other tutorials first, you do not have an onboarding path, you have a maze."
          },
          {
            "t": "API Reference Quality",
            "d": "Reference docs are where developers live. Make them excellent.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Generated vs hand-written reference: the hybrid approach",
              "Every endpoint needs an example, not just a schema",
              "Versioning and changelogs developers trust"
            ],
            "do": [
              "Audit one API reference for missing examples",
              "Add runnable examples to the five most-used endpoints",
              "Publish a changelog developers actually read"
            ],
            "tools": ["OpenAPI", "Redoc"],
            "res": [
              ["OpenAPI Initiative", "https://www.openapis.org"]
            ],
            "tip": "A reference without examples is a dictionary without definitions. Developers copy the example first and read the schema never."
          },
          {
            "t": "The DevRel Feedback Loop",
            "d": "Your superpower is carrying the field's voice into the product org.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Collecting feedback: support tickets, community, events, content comments",
              "Synthesizing: themes and evidence, not anecdotes",
              "Closing the loop: telling developers what changed because of them"
            ],
            "do": [
              "Start a weekly feedback digest for product and engineering",
              "Tag and theme one month of community questions",
              "Publish one you asked, we shipped update"
            ],
            "tools": ["Notion", "Linear"],
            "res": [
              ["DevRel Scribbles — feedback loops", "https://scribbles.devrel.page/"]
            ],
            "tip": "Feedback that never visibly changes anything trains developers to stop giving it. Close the loop publicly or the loop dies."
          },
          {
            "t": "Support Channels and Issue Triage",
            "d": "Answer well in public and every answer compounds.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Choosing where support happens: forums, Discord, GitHub issues",
              "Triage systems: labels, SLAs, and escalation paths",
              "Turning repeated questions into docs and content"
            ],
            "do": [
              "Answer 10 questions in a public channel this week",
              "Create a triage label system for your repo",
              "Turn the three most-asked questions into docs"
            ],
            "tools": ["GitHub Discussions", "Discourse"],
            "res": [
              ["GitHub Docs — discussions", "https://docs.github.com"]
            ],
            "tip": "Answering in DMs helps one person. Answering in public helps everyone who searches later. Default to public."
          },
          {
            "t": "Developer Surveys and DX Research",
            "d": "Ask developers systematically, not just the loud ones.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Survey design: short, specific, and actionable",
              "Developer satisfaction and effort scores",
              "Interviews: the stories behind the numbers"
            ],
            "do": [
              "Run a 5-question DX survey",
              "Interview three developers about onboarding pain",
              "Present findings with one clear recommendation"
            ],
            "tools": ["Typeform", "PostHog"],
            "res": [
              ["PostHog", "https://posthog.com"]
            ],
            "tip": "Surveys tell you what; interviews tell you why. Run both, and never let the loudest community voices substitute for data."
          }
        ]
      },
      {
        "t": "Metrics and Impact",
        "d": "Prove DevRel moves the business.",
        "lv": 3,
        "children": [
          {
            "t": "North-Star Metrics for DevRel",
            "d": "Pick the one metric that captures DevRel's job, then align everything to it.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Candidate north stars: activated developers, community-sourced pipeline",
              "Leading vs lagging indicators",
              "Getting leadership to agree on the definition"
            ],
            "do": [
              "Propose a north-star metric for your DevRel work",
              "Map your activities to it honestly; cut what does not fit",
              "Review the metric monthly with stakeholders"
            ],
            "tools": [],
            "res": [
              ["State of Developer Relations", "https://developerrelations.com/reports/"]
            ],
            "tip": "If everything is a priority metric, nothing is. One north star plus a few health metrics beats a dashboard of forty numbers."
          },
          {
            "t": "Content Analytics That Matter",
            "d": "Views are vanity. Track what content actually changes behavior.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Funnel thinking: view to signup to activation per piece",
              "Attribution basics: UTMs, referral codes, and self-reported",
              "Content audits: double down on what converts"
            ],
            "do": [
              "Add UTMs to your next five content pieces",
              "Build a simple content-to-signup report",
              "Kill or refresh your worst-performing flagship post"
            ],
            "tools": ["Plausible", "PostHog"],
            "res": [
              ["Plausible Analytics", "https://plausible.io"]
            ],
            "tip": "A tutorial with 100k views and zero signups is entertainment, not DevRel. Optimize for the action, not the applause."
          },
          {
            "t": "Community Health Metrics",
            "d": "Measure whether your community is alive, not just large.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Activity metrics: response time, answer rate, active contributors",
              "Growth quality: retention over raw member counts",
              "Sentiment: what the numbers miss"
            ],
            "do": [
              "Define five health metrics for your community",
              "Build a monthly health report",
              "Set an alert for response-time degradation"
            ],
            "tools": ["CommonRoom"],
            "res": [
              ["CommonRoom", "https://www.commonroom.io"]
            ],
            "tip": "A 50,000-member Discord with no answers is a graveyard with good SEO. Measure helpfulness, not headcount."
          },
          {
            "t": "Attribution: Proving Business Impact",
            "d": "Connect DevRel activity to pipeline without lying with statistics.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Multi-touch attribution basics for developer journeys",
              "Influence vs source: honest models leadership trusts",
              "Working with sales and marketing on shared definitions"
            ],
            "do": [
              "Document your attribution model and its limits",
              "Tag three campaigns end-to-end and report honestly",
              "Align with marketing on what counts as influenced"
            ],
            "tools": ["HubSpot", "Salesforce"],
            "res": [
              ["Developer Relations — measuring impact", "https://developerrelations.com"]
            ],
            "tip": "Claiming full credit for every touched deal destroys credibility. Report influence ranges honestly; trust compounds."
          },
          {
            "t": "Reporting to Leadership",
            "d": "Translate DevRel work into the language of the business review.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Quarterly business reviews: narrative plus numbers",
              "Leading with outcomes, supporting with activity",
              "Asking for resources with evidence attached"
            ],
            "do": [
              "Write a one-page QBR summary for your work",
              "Present it to a friendly stakeholder first",
              "Tie every ask to a metric leadership already cares about"
            ],
            "tools": [],
            "res": [
              ["DevRel Scribbles — reporting", "https://scribbles.devrel.page/"]
            ],
            "tip": "Leadership does not fund activities; they fund outcomes. Every slide should answer: what changed for the business?"
          },
          {
            "t": "DevRel Metrics Tooling",
            "d": "Build a measurement stack you can actually maintain.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The stack: web analytics, community analytics, CRM, and surveys",
              "Privacy-conscious tracking in a post-cookie world",
              "Automating reports so they survive your vacation"
            ],
            "do": [
              "Map your current tools to each measurement need",
              "Automate one monthly report",
              "Document the stack so a teammate can run it"
            ],
            "tools": ["PostHog", "Plausible", "CommonRoom"],
            "res": [
              ["PostHog — product analytics", "https://posthog.com"]
            ],
            "tip": "Do not buy an enterprise analytics suite before you know which questions you need answered. Start with questions, then tools."
          }
        ]
      },
      {
        "t": "Strategy and Influence",
        "d": "From practitioner to leader.",
        "lv": 3,
        "children": [
          {
            "t": "Building a Personal Brand",
            "d": "Your reputation is career insurance. Build it in public.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Picking a lane: what are you known for?",
              "Consistency beats virality: show up for years",
              "Separating personal brand from employer brand"
            ],
            "do": [
              "Write your one-line positioning statement",
              "Publish consistently for 90 days",
              "Speak at one event per quarter"
            ],
            "tools": [],
            "res": [
              ["DevRel career ladders", "https://github.com/samber/developer-relations-skills"]
            ],
            "tip": "A personal brand built only on your employer's product dies with the job. Build around skills and ideas that travel with you."
          },
          {
            "t": "Thought Leadership",
            "d": "Move from teaching tools to shaping how the industry thinks.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Original research and data as differentiation",
              "Opinion pieces: taking a stand with evidence",
              "Books, keynotes, and long-form as leverage"
            ],
            "do": [
              "Publish one opinionated essay with a real thesis",
              "Pitch a keynote-level talk",
              "Collect data only you can access and publish it"
            ],
            "tools": [],
            "res": [
              ["Developer Relations", "https://developerrelations.com"]
            ],
            "tip": "Thought leadership without original thinking is content marketing. Have a thesis, bring evidence, accept the disagreement."
          },
          {
            "t": "Open Source as a DevRel Lever",
            "d": "Open source is DevRel's highest-trust channel. Use it well.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "What to open source: tools, samples, and infrastructure",
              "Maintaining with a community, not just publishing code",
              "Governance: licenses, CLAs, and contribution paths"
            ],
            "do": [
              "Open source one internal tool",
              "Write contributor docs that welcome outsiders",
              "Respond to every first PR within 48 hours"
            ],
            "tools": ["GitHub"],
            "res": [
              ["GitHub — open source guides", "https://opensource.guide"]
            ],
            "tip": "Dumping code on GitHub is not open source. Maintenance, responsiveness, and governance are what build trust."
          },
          {
            "t": "Designing a DevRel Strategy",
            "d": "From tactics to strategy: plan the function, not just the content.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Strategy inputs: business goals, developer journey gaps, resources",
              "Choosing bets: where DevRel wins disproportionately",
              "Roadmaps, hiring plans, and budgets for DevRel orgs"
            ],
            "do": [
              "Write a one-page DevRel strategy for a real or hypothetical product",
              "Get feedback from two DevRel leaders",
              "Turn it into a hiring plan with sequencing"
            ],
            "tools": [],
            "res": [
              ["Developer Relations Foundation", "https://www.linuxfoundation.org"]
            ],
            "tip": "A strategy that tries everything is a todo list. Real strategy names the three bets and, harder, what you will not do."
          },
          {
            "t": "DevRel Career Growth and Ladders",
            "d": "Grow from senior IC to DevRel leader without losing the craft.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Staff and principal DevRel: scope beyond your own output",
              "Moving into DevRel leadership: what changes",
              "Avoiding burnout in a public-facing role"
            ],
            "do": [
              "Define what staff-level impact looks like for you",
              "Mentor one junior DevRel practitioner",
              "Set boundaries: public roles need off-switches"
            ],
            "tools": [],
            "res": [
              ["DevRel career ladders", "https://github.com/samber/developer-relations-skills"]
            ],
            "tip": "Public-facing work burns people out quietly. Boundaries are a career skill here, not a luxury."
          }
        ]
      }
    ]
  }
});
