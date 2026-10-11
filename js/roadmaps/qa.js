/* Atlas roadmap data: QA (qa) */
ROADMAPS.push({
  "id": "qa",
  "title": "QA",
  "icon": "🐞",
  "color": "#e56b6f",
  "desc": "Quality assurance from first principles to automation: testing technique, bug craft, API and UI automation, and quality in CI.",
  "kind": "role",
  "root": {
    "t": "Quality Assurance",
    "d": "How to break software on purpose, and prove it works.",
    "children": [
      {
        "t": "QA Foundations",
        "d": "What quality assurance is and how testers think.",
        "lv": 1,
        "children": [
          {
            "t": "What Is QA vs Testing",
            "d": "QA is the process that prevents bugs. Testing is the activity that finds them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "QA as a mindset owned by the whole team, not a gate at the end",
              "The cost-of-defects curve: bugs found late are exponentially more expensive",
              "Where a tester sits in the SDLC: shift-left vs shift-right testing"
            ],
            "do": [
              "Pick a public bug report (e.g. on a GitHub issue) and classify it: could QA have prevented it, or only testing could find it",
              "Draw the SDLC of a project you know and mark where testing activities happen",
              "Write one paragraph: what 'done' means for quality on your team"
            ],
            "tools": ["ISTQB syllabus"],
            "res": [
              ["ISTQB", "https://www.istqb.org"],
              ["Google Testing Blog", "https://testing.googleblog.com"]
            ],
            "tip": "New testers say 'QA = testing'. Teams that treat QA as only testing always find the bugs after the release."
          },
          {
            "t": "The QA Mindset",
            "d": "Think like a user, a developer, and a saboteur at the same time.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Healthy skepticism: every feature ships with a hypothesis that it might be broken",
              "Empathy mapping: the edge-case user (slow network, screen reader, wrong language)",
              "Separating 'works as designed' from 'works for the user'"
            ],
            "do": [
              "Take an app you use daily and list 10 ways a user could break a single form",
              "Find one real app bug in the wild and write down the mental model that would have caught it",
              "Try a task on a website with JavaScript disabled and note what fails"
            ],
            "tools": ["your own curiosity"],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "The most common junior failure is testing only the happy path. Assume the user will do everything wrong, because they will."
          },
          {
            "t": "Test Oracles: How You Know It's Wrong",
            "d": "An oracle is your source of truth for expected behavior. Without one, testing is guessing.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Types of oracles: specs, previous versions, comparable products, user expectations",
              "The oracle problem: most interesting bugs have no perfect oracle",
              "Using heuristics like 'consistent within the product' as implicit oracles"
            ],
            "do": [
              "Test a login page and list every oracle you used (spec memory, other sites, consistency)",
              "Find a UI inconsistency (e.g. two date formats) using only the consistency heuristic",
              "Write expected vs actual for 3 bugs you find on a demo site like saucedemo.com"
            ],
            "tools": ["SauceDemo", "browser devtools"],
            "res": [
              ["SauceDemo", "https://www.saucedemo.com"]
            ],
            "tip": "Beginners test against what they assume. Write the expected behavior down first, then compare."
          },
          {
            "t": "Black, Gray & White Box Testing",
            "d": "Three views into the system: from the outside, through the API, and inside the code.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Black box: test behavior with zero knowledge of internals (the user view)",
              "Gray box: partial knowledge, like API contracts and database state",
              "White box: testing with full code access (unit tests, code coverage)"
            ],
            "do": [
              "Black-box test a calculator app without reading its code",
              "Gray-box test an API: send requests and verify the database changed correctly",
              "White-box: read a simple function and design inputs that cover every branch"
            ],
            "tools": ["Postman", "browser devtools"],
            "res": [
              ["ISTQB", "https://www.istqb.org"]
            ],
            "tip": "A tester who can only do black-box testing is blind to integration seams. Learn to read logs and APIs."
          },
          {
            "t": "Verification vs Validation",
            "d": "Verification asks 'did we build it right'. Validation asks 'did we build the right thing'.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Verification: code reviews, static analysis, unit tests against the spec",
              "Validation: UAT, beta testing, checking the feature solves the real problem",
              "Why a feature can pass verification and still fail validation"
            ],
            "do": [
              "Find a real product feature that works perfectly but solves nothing, and write the validation gap",
              "List 3 verification activities and 3 validation activities for a checkout flow",
              "Interview one user about what they expect from a feature, then compare to the spec"
            ],
            "tools": [],
            "res": [
              ["Google Testing Blog", "https://testing.googleblog.com"]
            ],
            "tip": "Passing all test cases means nothing if the spec was wrong. Validation is the senior tester's superpower."
          },
          {
            "t": "Risk-Based Test Prioritization",
            "d": "You cannot test everything. Test what matters most, first.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Risk = likelihood of failure x impact of failure",
              "Using risk to decide what gets automated, what gets manual attention, what gets skipped",
              "Communicating the risk decision: 'we tested X deeply and Y lightly because...'"
            ],
            "do": [
              "Take an e-commerce site and rank 20 features by risk; defend your top 5",
              "Build a simple risk matrix (likelihood vs impact) for a signup flow",
              "Write a test plan summary that explicitly states what you chose NOT to test"
            ],
            "tools": ["spreadsheets"],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "Junior testers try to cover everything equally. Senior testers say 'this is low risk, I am deliberately not testing it deeply' and get sign-off."
          },
          {
            "t": "SDLC & Where Testing Fits",
            "d": "Waterfall, V-model, Agile: each one changes where and how you test.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Waterfall/V-model: testing phases, entry and exit criteria",
              "Agile/Scrum: testing inside the sprint, definition of done",
              "DevOps: continuous testing as a pipeline stage, not a phase"
            ],
            "do": [
              "Map test activities onto a Scrum sprint board day by day",
              "Write entry criteria (when can testing start) and exit criteria (when can we ship) for a feature",
              "Compare: what does 'testing is done' mean in waterfall vs in CI?"
            ],
            "tools": ["Jira", "Trello"],
            "res": [
              ["Atlassian Agile Testing", "https://www.atlassian.com/agile/testing"]
            ],
            "tip": "In Agile there is no 'testing phase'. If your tests are not inside the sprint, they will never happen."
          }
        ]
      },
      {
        "t": "Testing Techniques",
        "d": "The named test types and when each one earns its keep.",
        "lv": 1,
        "children": [
          {
            "t": "Unit Testing",
            "d": "Test the smallest pieces in isolation. Fast, cheap, and the base of the pyramid.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "What counts as a unit, and why isolated units fail less mysteriously",
              "AAA pattern: Arrange, Act, Assert",
              "Mocks and stubs: cutting a unit off from databases and APIs"
            ],
            "do": [
              "Write unit tests for a small function library in your language (e.g. Jest, pytest)",
              "Mock an API call so the test runs without network",
              "Aim for tests that run in milliseconds, not seconds"
            ],
            "tools": ["Jest", "pytest", "JUnit"],
            "res": [
              ["Jest Docs", "https://jestjs.io"],
              ["pytest Docs", "https://docs.pytest.org"]
            ],
            "tip": "Unit tests that hit real databases are integration tests in disguise. They will be slow and flaky, and the team will stop running them."
          },
          {
            "t": "Integration Testing",
            "d": "Test the seams: modules, services, and databases talking to each other.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Why most real bugs live at integration boundaries, not inside units",
              "Bottom-up vs top-down integration strategies",
              "Contract testing as the cheap version of integration testing"
            ],
            "do": [
              "Write a test that spins up a real database (Docker) and runs queries through the app layer",
              "Test one API endpoint end to end: request in, database state out",
              "Deliberately break one side of an integration and watch the test catch it"
            ],
            "tools": ["Docker", "Testcontainers", "Postman"],
            "res": [
              ["Testcontainers", "https://testcontainers.com"]
            ],
            "tip": "Test each integration point exactly once. Testing the same seam in five places creates maintenance debt, not safety."
          },
          {
            "t": "System & End-to-End Testing",
            "d": "Test the whole product the way a user experiences it, start to finish.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "E2E scenarios: full user journeys like signup to checkout",
              "Why E2E tests are the most valuable and the most expensive",
              "Choosing which journeys deserve E2E coverage (hint: very few)"
            ],
            "do": [
              "Map the 3 critical user journeys of an app you know",
              "Write one manual E2E script for a journey, step by step",
              "Time how long the manual E2E run takes: this is the cost you automate away"
            ],
            "tools": ["Playwright", "Cypress"],
            "res": [
              ["Playwright Docs", "https://playwright.dev"]
            ],
            "tip": "Automating every click is a trap. E2E belongs only on the handful of journeys that would end the business if broken."
          },
          {
            "t": "Smoke vs Sanity Testing",
            "d": "Smoke asks 'does it start'. Sanity asks 'did this change break the basics'.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Smoke testing: the quick build-acceptance check (can I log in at all?)",
              "Sanity testing: narrow re-test after a fix or small change",
              "Both are shallow by design: breadth first, depth later"
            ],
            "do": [
              "Write a 10-minute smoke checklist for a web app",
              "After fixing one bug, run a sanity pass: the fixed area plus adjacent features",
              "Decide: is this build even worth full testing? Practice saying no to a broken build"
            ],
            "tools": [],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "Running a full regression on a build that fails smoke is burning time. Reject broken builds fast."
          },
          {
            "t": "Regression Testing",
            "d": "Prove that yesterday's fixes did not break last month's features.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Regression suites: the accumulated memory of every bug ever found",
              "Selecting what to rerun: impacted-area analysis instead of the whole suite",
              "Why regression is the first thing teams automate"
            ],
            "do": [
              "Take 5 old bug reports and turn them into regression test cases",
              "Practice impact analysis: given a changed file, list which tests must rerun",
              "Run a regression pass after a small change and document what you skipped and why"
            ],
            "tools": ["TestRail", "Zephyr"],
            "res": [
              ["TestRail", "https://www.testrail.com"]
            ],
            "tip": "A regression suite that takes 3 days to run is a suite that never runs. Keep it fast or split it."
          },
          {
            "t": "Acceptance Testing (UAT)",
            "d": "The customer or product owner confirms: yes, this is what we asked for.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Acceptance criteria: the contract between builders and stakeholders",
              "Alpha vs beta testing: internal users vs real users in the wild",
              "Writing acceptance criteria that are testable, not vibes"
            ],
            "do": [
              "Rewrite 5 vague requirements ('should be fast') into testable acceptance criteria",
              "Run a UAT session with a friend on an app: give them tasks, watch silently, take notes",
              "Write a UAT sign-off checklist for a feature release"
            ],
            "tools": [],
            "res": [
              ["Atlassian: User Acceptance Testing", "https://www.atlassian.com/agile/testing"]
            ],
            "tip": "UAT is validation, not a second QA pass. If UAT finds functional bugs, your earlier testing failed."
          },
          {
            "t": "Exploratory Testing",
            "d": "Learn, design, and execute at the same time. The human advantage over scripts.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Exploratory testing as simultaneous learning, test design, and execution",
              "Tours and heuristics: the 'feature tour', 'money tour', 'landmark tour'",
              "Why exploratory finds the bugs scripts never will"
            ],
            "do": [
              "Do a 60-minute exploratory session on a demo site using a tour heuristic",
              "Keep a session log: what you tried, what surprised you, what broke",
              "Compare: run your scripted cases, then explore for 30 minutes, count the bugs each found"
            ],
            "tools": ["mind maps"],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "Exploratory is not 'random clicking'. Charter it, timebox it, and log it, or it becomes untrackable chaos."
          },
          {
            "t": "Non-Functional Testing Overview",
            "d": "Performance, security, accessibility, usability: quality beyond 'does it work'.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The non-functional dimensions: performance, load, stress, security, accessibility, compatibility",
              "Why each needs different tools and different skills",
              "When to specialize: every tester knows the basics, specialists go deep"
            ],
            "do": [
              "Run Lighthouse on 3 sites and compare performance and accessibility scores",
              "Load a page on a throttled 3G connection and note what breaks",
              "Try navigating a site with only a keyboard"
            ],
            "tools": ["Lighthouse", "Chrome DevTools"],
            "res": [
              ["web.dev", "https://web.dev"]
            ],
            "tip": "Teams discover accessibility law and performance budgets after launch. Raise non-functional requirements before code is written."
          }
        ]
      },
      {
        "t": "Test Planning & Management",
        "d": "Plans, cases, defects, and the tooling that keeps them honest.",
        "lv": 1,
        "children": [
          {
            "t": "Test Plans & Test Strategy",
            "d": "Decide what you will test, how, and what done looks like, before you start.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Strategy (the long-term approach) vs plan (this release's specifics)",
              "Scope, objectives, resources, schedule, and risk sections of a test plan",
              "Entry, exit, and suspension criteria"
            ],
            "do": [
              "Write a one-page test plan for a small feature",
              "Define entry/exit criteria for a sprint's testing",
              "Review a test plan template and cut everything that adds no decisions"
            ],
            "tools": ["Confluence", "Notion", "TestRail"],
            "res": [
              ["TestRail", "https://www.testrail.com"]
            ],
            "tip": "A 40-page test plan nobody reads is worse than a one-page plan everyone follows. Plans are communication, not paperwork."
          },
          {
            "t": "Writing Test Cases & Scenarios",
            "d": "Cases are precise steps. Scenarios are user stories. Both need expected results.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Anatomy of a test case: preconditions, steps, test data, expected result",
              "Positive, negative, and boundary test cases",
              "Equivalence partitioning and boundary value analysis for smart coverage"
            ],
            "do": [
              "Write 15 test cases for a login form using equivalence classes",
              "Apply boundary value analysis to an age field (min 18, max 99)",
              "Convert a user story into test scenarios, then into cases"
            ],
            "tools": ["TestRail", "TestLink"],
            "res": [
              ["TestLink", "https://testlink.org"]
            ],
            "tip": "Test cases without expected results are notes, not tests. And test the boundaries: bugs live at 17, 18, 99, and 100."
          },
          {
            "t": "The Defect Lifecycle",
            "d": "New, assigned, fixed, retested, closed: track every bug from birth to burial.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Defect states and transitions: who moves a bug and when",
              "Severity vs priority: how broken vs how urgent",
              "Reopen rules: when 'fixed' is not fixed"
            ],
            "do": [
              "Walk 3 bugs through a full lifecycle in a tracker (Jira, GitHub issues)",
              "Practice severity vs priority: a typo on the homepage vs a crash in an admin panel",
              "Write a reopen comment that proves the fix failed, with evidence"
            ],
            "tools": ["Jira", "GitHub Issues"],
            "res": [
              ["Atlassian Jira", "https://www.atlassian.com/software/jira"]
            ],
            "tip": "Severity is the tester's call, priority is the business's call. Confusing them starts arguments."
          },
          {
            "t": "Bug Reports That Get Fixed",
            "d": "A great bug report is a reproduction recipe. A bad one is a complaint.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Anatomy: clear title, environment, steps to reproduce, expected vs actual, evidence",
              "One bug per report: never bundle",
              "Evidence: screenshots, videos, logs, HAR files"
            ],
            "do": [
              "File 3 real bug reports on an open-source project or demo app",
              "Record a screen capture of a bug with steps narrated",
              "Rewrite a vague bug report ('it doesn't work') into a reproducible one"
            ],
            "tools": ["Loom", "browser devtools"],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "If the developer cannot reproduce it in 2 minutes, your report failed. Steps, environment, evidence: no exceptions."
          },
          {
            "t": "Test Management Tools",
            "d": "TestRail, Zephyr, qTest: where test cases live, runs are tracked, and results roll up.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Suites, runs, and milestones: organizing cases and executions",
              "Traceability: linking requirements to cases to defects",
              "Reporting: pass rates, coverage, and what they actually mean"
            ],
            "do": [
              "Build a test suite in a free test management tool (TestRail trial or TestLink)",
              "Link test cases to requirements and defects for full traceability",
              "Generate a test run report and explain the numbers to a non-tester"
            ],
            "tools": ["TestRail", "Zephyr", "TestLink"],
            "res": [
              ["TestRail", "https://www.testrail.com"],
              ["TestLink", "https://testlink.org"]
            ],
            "tip": "A 98% pass rate with 40% coverage is a lie told by metrics. Report coverage next to pass rate, always."
          }
        ]
      },
      {
        "t": "Manual Testing in Practice",
        "d": "Real-world manual technique: checklists, compatibility, and accessibility.",
        "lv": 2,
        "children": [
          {
            "t": "The Web Testing Checklist",
            "d": "Forms, navigation, links, cookies, back buttons: the things users actually do.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Form testing: validation, required fields, maxlength, special characters, double submit",
              "Navigation: back/forward, deep links, refresh mid-flow, multiple tabs",
              "State: logout expiry, session timeout, cookies cleared mid-session"
            ],
            "do": [
              "Build your own web testing checklist (aim for 50+ checks)",
              "Run it against a demo e-commerce site and log every failure",
              "Test double-submit on a payment-like form and see what happens"
            ],
            "tools": ["browser devtools", "Postman"],
            "res": [
              ["SauceDemo", "https://www.saucedemo.com"]
            ],
            "tip": "Double-submit and refresh-after-post find real production bugs. Manual testers who skip state testing miss the money bugs."
          },
          {
            "t": "Cross-Browser & Device Testing",
            "d": "Your app on their browser, their phone, their screen size.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why browsers differ: rendering engines, JS support, date and input quirks",
              "Responsive breakpoints: what must work at 320px vs 1920px",
              "Prioritizing the matrix: analytics data over testing everything"
            ],
            "do": [
              "Define a browser/device matrix from real analytics data for a project",
              "Test one feature on Chrome, Firefox, and Safari and compare",
              "Use devtools device emulation, then verify on one real device"
            ],
            "tools": ["BrowserStack", "LambdaTest", "Chrome DevTools"],
            "res": [
              ["BrowserStack", "https://www.browserstack.com"],
              ["Can I Use", "https://caniuse.com"]
            ],
            "tip": "Testing on 40 device combos is impossible. Use analytics: cover the top 90% of real users and stop."
          },
          {
            "t": "Accessibility Testing Basics",
            "d": "Test so everyone can use the product: keyboard, screen reader, contrast.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "WCAG principles: perceivable, operable, understandable, robust (POUR)",
              "Keyboard-only navigation: tab order, focus visibility, skip links",
              "Screen reader basics: landmarks, labels, alt text, ARIA roles"
            ],
            "do": [
              "Audit a page with axe DevTools and fix the top 5 issues",
              "Navigate a checkout flow with keyboard only and log every trap",
              "Test a page with a screen reader (NVDA or VoiceOver) for 30 minutes"
            ],
            "tools": ["axe DevTools", "NVDA", "VoiceOver", "WAVE"],
            "res": [
              ["WCAG", "https://www.w3.org/WAI/standards-guidelines/wcag/"],
              ["axe DevTools", "https://www.deque.com/axe/"]
            ],
            "tip": "Automated checkers catch ~30% of accessibility issues. The rest need a keyboard and a screen reader."
          },
          {
            "t": "Mobile App Testing Essentials",
            "d": "Interruptions, gestures, permissions, and installs: mobile has its own failure modes.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Interrupt testing: calls, notifications, low battery, airplane mode",
              "Install, upgrade, and uninstall flows with data migration",
              "Permissions, deep links, and push notification behavior"
            ],
            "do": [
              "Write a mobile test checklist: interruptions, rotations, backgrounding",
              "Test an app upgrade from an old version with existing user data",
              "Deny every permission an app asks for and verify it still behaves sanely"
            ],
            "tools": ["Android Studio emulator", "Xcode simulator", "Appium"],
            "res": [
              ["Appium", "https://appium.io"]
            ],
            "tag": "opt",
            "tip": "Mobile bugs love state: backgrounding, rotation, and interrupted network. Desktop habits miss them all."
          },
          {
            "t": "Session-Based Test Management",
            "d": "Chartered, timeboxed exploratory sessions that produce accountable results.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Test charters: mission, areas, and risks for one session",
              "The debrief: what you covered, what you found, what needs follow-up",
              "Blending scripted and exploratory work in a sprint"
            ],
            "do": [
              "Write 3 charters for a demo app and run 45-minute sessions on each",
              "Debrief yourself in writing after each session",
              "Present session findings the way you would to a team lead"
            ],
            "tools": [],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "tip": "Untracked exploration is invisible work. Charters and debriefs make your exploratory skill visible and trusted."
          }
        ]
      },
      {
        "t": "API Testing",
        "d": "Test the layer users never see but everything depends on.",
        "lv": 2,
        "children": [
          {
            "t": "HTTP & REST for Testers",
            "d": "Methods, status codes, headers, auth: the language every API test speaks.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "HTTP methods and their contracts: GET is safe, POST creates, PUT replaces, PATCH updates, DELETE removes",
              "Status code families: 2xx success, 4xx client errors, 5xx server errors",
              "Auth mechanisms: API keys, Bearer tokens, OAuth2 flows"
            ],
            "do": [
              "Inspect real API traffic in browser devtools network tab",
              "Map every endpoint of a demo API to its method and status codes",
              "Trigger each status family on purpose (bad input, missing auth, server error)"
            ],
            "tools": ["browser devtools", "Postman"],
            "res": [
              ["MDN: HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"]
            ],
            "tip": "Testers who cannot read a 401 vs 403 vs 404 waste hours. Status codes are the API telling you exactly what went wrong."
          },
          {
            "t": "Postman: Collections & Environments",
            "d": "Organize API calls into runnable, shareable collections with variables.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Collections, folders, and requests as living API documentation",
              "Environments and variables: one collection, many targets (dev, staging, prod)",
              "Pre-request scripts: chaining requests with dynamic data"
            ],
            "do": [
              "Build a collection for a public API (e.g. JSONPlaceholder) with 15+ requests",
              "Create dev and staging environments with variables for base URL and tokens",
              "Chain a login request into an authenticated request using variables"
            ],
            "tools": ["Postman", "Newman"],
            "res": [
              ["Postman Learning Center", "https://learning.postman.com"],
              ["JSONPlaceholder", "https://jsonplaceholder.typicode.com"]
            ],
            "tip": "Hardcoded URLs and tokens in requests rot fast. Variables and environments are what make collections maintainable."
          },
          {
            "t": "Assertions & Automated API Checks",
            "d": "Turn API calls into tests: status, schema, timing, and business rules.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Postman test scripts: asserting status, body fields, headers, response time",
              "JSON schema validation: proving the shape of every response",
              "Negative API testing: invalid input, missing fields, wrong types"
            ],
            "do": [
              "Add test scripts to every request in your collection",
              "Write a schema validation test for one endpoint",
              "Run the collection with Newman from the command line and read the report"
            ],
            "tools": ["Postman", "Newman"],
            "res": [
              ["Postman Learning Center", "https://learning.postman.com"]
            ],
            "tip": "Asserting only the status code is the API equivalent of testing only the happy path. Assert the body, the schema, and the timing."
          },
          {
            "t": "Contract Testing Basics",
            "d": "Prove the API and its consumers agree, without spinning up the whole system.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Consumer-driven contracts: the frontend declares what it needs from the API",
              "Pact workflow: record interactions, verify against the provider",
              "Where contract tests sit between unit and integration tests"
            ],
            "do": [
              "Read a Pact example and explain the consumer/provider roles",
              "Write one consumer contract test for an endpoint you use",
              "Break the provider response on purpose and watch the contract test fail"
            ],
            "tools": ["Pact"],
            "res": [
              ["Pact Docs", "https://docs.pact.io"]
            ],
            "tag": "opt",
            "tip": "Contract tests replace slow end-to-end integration suites. Teams that skip them pay in flaky E2E runs."
          },
          {
            "t": "REST Assured: API Tests in Code",
            "d": "Write API tests as code: versioned, reviewable, and CI-ready.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "REST Assured's given/when/then syntax for readable API tests",
              "Validating JSON with Hamcrest matchers and JSONPath",
              "Structuring API test suites: setup, data builders, cleanup"
            ],
            "do": [
              "Set up a REST Assured project and test 10 endpoints of a demo API",
              "Validate response bodies with JSONPath assertions",
              "Add the suite to a CI pipeline so it runs on every commit"
            ],
            "tools": ["REST Assured", "JUnit", "Maven"],
            "res": [
              ["REST Assured", "https://rest-assured.io"]
            ],
            "tip": "API tests in code outlive API tests in tools. Collections are for exploration; code is for regression."
          }
        ]
      },
      {
        "t": "Test Automation",
        "d": "Automate the right things with modern frameworks: Playwright, Cypress, Selenium.",
        "lv": 2,
        "children": [
          {
            "t": "The Test Pyramid & Automation Strategy",
            "d": "Lots of unit tests, fewer integration tests, few UI tests. The pyramid keeps suites fast.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The test pyramid: unit (base), integration (middle), UI/E2E (top)",
              "Why inverted pyramids (ice-cream cones) are slow, flaky, and expensive",
              "Deciding what to automate: stable, repeated, high-value checks"
            ],
            "do": [
              "Classify 20 existing tests into pyramid layers",
              "Identify 5 manual checks that are automation candidates and 5 that are not",
              "Estimate the cost of automating one flaky UI test vs one API test"
            ],
            "tools": [],
            "res": [
              ["Google Testing Blog", "https://testing.googleblog.com"],
              ["Martin Fowler: Test Pyramid", "https://martinfowler.com/articles/practical-test-pyramid.html"]
            ],
            "tip": "Automating a bad test does not make it good. If the manual check is unclear, the automated one will be flaky."
          },
          {
            "t": "Locators & Stable Selectors",
            "d": "The skill that decides whether your UI tests survive the next release.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Selector priority: roles and accessible names first, test IDs next, CSS last, XPath almost never",
              "Why auto-waiting beats sleep() every single time",
              "Debugging locators with picker tools and trace viewers"
            ],
            "do": [
              "Rewrite 10 brittle XPath selectors as role-based locators",
              "Break a page layout on purpose and check which selectors survive",
              "Use Playwright's codegen to record, then clean up the generated selectors"
            ],
            "tools": ["Playwright", "Cypress"],
            "res": [
              ["Playwright Locators", "https://playwright.dev/docs/locators"]
            ],
            "tip": "If your test needs sleep(2000), it is broken. Modern frameworks wait for the right condition; learn them."
          },
          {
            "t": "Playwright: Modern E2E Automation",
            "d": "The current default for UI automation: fast, cross-browser, and debuggable.",
            "lv": 2,
            "time": "~8h",
            "learn": [
              "Setup: projects, browsers, and the config file",
              "Fixtures, isolated contexts, and test independence",
              "Traces, screenshots, and videos for failure diagnosis"
            ],
            "do": [
              "Scaffold a Playwright project and write 5 E2E tests for a demo app",
              "Run the suite across Chromium, Firefox, and WebKit",
              "Open a trace for a failing test and diagnose the root cause from it"
            ],
            "tools": ["Playwright", "TypeScript"],
            "res": [
              ["Playwright Docs", "https://playwright.dev/docs/intro"],
              ["Playwright Best Practices", "https://playwright.dev/docs/best-practices"]
            ],
            "tip": "Each test must set up its own data and clean up after itself. Shared state between tests is the number one flakiness source."
          },
          {
            "t": "Cypress: Developer-Friendly E2E",
            "d": "Real-time reloading and time-travel debugging made Cypress the team's favorite.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Cypress architecture: runs in the browser, automatic waiting built in",
              "Commands, assertions, and the retry-ability model",
              "Component testing vs E2E testing in Cypress"
            ],
            "do": [
              "Write 5 Cypress tests for a demo app and watch them in the interactive runner",
              "Use cy.intercept() to stub a backend response",
              "Compare the same test in Cypress and Playwright: note the differences"
            ],
            "tools": ["Cypress"],
            "res": [
              ["Cypress Docs", "https://docs.cypress.io"]
            ],
            "tag": "opt",
            "tip": "Cypress and Playwright overlap heavily. Master one deeply; know the other well enough to read its tests."
          },
          {
            "t": "Selenium WebDriver",
            "d": "The veteran of UI automation: still everywhere in enterprise suites.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "WebDriver protocol: how code drives a real browser",
              "Explicit waits and expected conditions",
              "Selenium Grid for parallel cross-browser runs"
            ],
            "do": [
              "Write 5 WebDriver tests in your language (Java, Python, or C#)",
              "Replace every implicit wait and sleep with explicit waits",
              "Run the suite against a Selenium Grid with 2 browsers in parallel"
            ],
            "tools": ["Selenium", "Selenium Grid"],
            "res": [
              ["Selenium Docs", "https://www.selenium.dev/documentation/"]
            ],
            "tip": "You will inherit Selenium suites in real jobs. Know it even if you prefer Playwright for new work."
          },
          {
            "t": "Page Object Model",
            "d": "Separate 'what the page looks like' from 'what the test does'.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Page objects: one class per page, exposing actions not selectors",
              "Why tests that touch raw locators rot within months",
              "Component objects for repeated UI (headers, modals, tables)"
            ],
            "do": [
              "Refactor 5 raw-locator tests into page objects",
              "Change a page's markup and fix it in one place only",
              "Review: every test reads like a user story, no CSS in sight"
            ],
            "tools": ["Playwright", "Selenium"],
            "res": [
              ["Selenium Page Objects", "https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/"]
            ],
            "tip": "If a UI change forces edits in 20 test files, you have no page objects. One page, one place."
          },
          {
            "t": "Data-Driven & Parameterized Tests",
            "d": "One test, many inputs: run the same check across dozens of data rows.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Parameterized tests: same logic, table of inputs and expected outputs",
              "Test data builders and factories vs hardcoded fixtures",
              "Separating test data from test logic"
            ],
            "do": [
              "Convert 10 near-duplicate login tests into one parameterized test",
              "Build a small data factory for user accounts",
              "Load test data from CSV/JSON instead of hardcoding"
            ],
            "tools": ["Playwright", "JUnit", "pytest"],
            "res": [
              ["Playwright Test Parametrize", "https://playwright.dev/docs/test-parameterize"]
            ],
            "tip": "Copy-pasted tests with one value changed are a maintenance nightmare. Parameterize on day one."
          }
        ]
      },
      {
        "t": "CI, Performance & Beyond",
        "d": "Quality as a pipeline: continuous testing, speed, security, and reporting.",
        "lv": 3,
        "children": [
          {
            "t": "Running Tests in CI",
            "d": "Every commit triggers the suite. Green means shippable.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "CI pipeline stages: build, unit, integration, E2E, deploy",
              "Test containers and services in CI (databases, browsers)",
              "Fail-fast vs full-run strategies and artifact collection"
            ],
            "do": [
              "Add a test job to a GitHub Actions workflow that runs on every PR",
              "Cache dependencies and split unit vs E2E into parallel jobs",
              "Make the pipeline block merging when tests fail"
            ],
            "tools": ["GitHub Actions", "Jenkins", "GitLab CI"],
            "res": [
              ["GitHub Actions Docs", "https://docs.github.com/en/actions"],
              ["Playwright CI Guide", "https://playwright.dev/docs/ci"]
            ],
            "tip": "A CI suite that takes 45 minutes gets bypassed. Keep PR feedback under 10 minutes or split the suite."
          },
          {
            "t": "Parallel Execution & Test Sharding",
            "d": "Split the suite across workers and cut run time from hours to minutes.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Sharding: dividing tests across machines deterministically",
              "Test independence as the prerequisite for parallelism",
              "Balancing shards so no single worker is the bottleneck"
            ],
            "do": [
              "Shard a Playwright suite across 4 workers and measure the speedup",
              "Find and fix the shared-state bug that breaks parallel runs",
              "Set up retries only for the E2E shard, not for unit tests"
            ],
            "tools": ["Playwright", "GitHub Actions"],
            "res": [
              ["Playwright Sharding", "https://playwright.dev/docs/test-sharding"]
            ],
            "tip": "Parallelism multiplies flakiness. Fix independence first, then shard, never the reverse."
          },
          {
            "t": "Fighting Flaky Tests",
            "d": "A test that fails randomly teaches the team to ignore failures. Kill it or quarantine it.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Root causes: timing, shared state, test order, external dependencies, randomness",
              "Quarantine process: mark, investigate, fix, or delete",
              "Flakiness dashboards: measuring failure rate per test"
            ],
            "do": [
              "Run a suite 20 times and identify the flakiest 3 tests",
              "Diagnose one flaky test with traces and fix the real cause (not a sleep)",
              "Write a quarantine policy for your team"
            ],
            "tools": ["Playwright Trace Viewer", "Allure"],
            "res": [
              ["Google Testing Blog: Flaky Tests", "https://testing.googleblog.com"]
            ],
            "tip": "Deleting a flaky test with no replacement is often braver and better than keeping a liar in the suite."
          },
          {
            "t": "Performance Testing with k6",
            "d": "Script realistic load in JavaScript and find the breaking point before users do.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Load vs stress vs spike vs soak testing",
              "Virtual users, ramp-up, and thresholds (p95 latency, error rate)",
              "Reading results: where the bottleneck actually is"
            ],
            "do": [
              "Write a k6 script that ramps to 100 virtual users on a demo API",
              "Set thresholds: p95 under 500ms, error rate under 1%",
              "Run a spike test and document exactly where it breaks"
            ],
            "tools": ["k6", "Grafana"],
            "res": [
              ["k6 Docs", "https://k6.io/docs"]
            ],
            "tip": "Average response time lies. Report p95/p99: users remember the slow requests, not the average."
          },
          {
            "t": "Load Testing with JMeter",
            "d": "The classic GUI load tester: still the enterprise standard for complex scenarios.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Thread groups, samplers, and listeners",
              "Correlation: extracting dynamic values (tokens, session IDs) between requests",
              "Distributed testing for serious load"
            ],
            "do": [
              "Record a JMeter script for a login-to-checkout flow",
              "Correlate a session token across requests",
              "Run 500 threads and analyze the aggregate report"
            ],
            "tools": ["JMeter"],
            "res": [
              ["JMeter Docs", "https://jmeter.apache.org/usermanual/"]
            ],
            "tag": "opt",
            "tip": "JMeter in GUI mode is for building, never for running load. Always run headless with -n."
          },
          {
            "t": "Security Testing Basics for QA",
            "d": "Think like an attacker on the inputs: injection, auth bypass, data exposure.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "OWASP Top 10 from a tester's view: what to check on every feature",
              "Input attacks: SQLi, XSS, and command injection basics",
              "Auth testing: forced browsing, IDOR, session handling"
            ],
            "do": [
              "Run OWASP ZAP against a demo app and triage the findings",
              "Test for IDOR: change an object ID in a request and see if you see someone else's data",
              "Add a security checklist to your team's definition of done"
            ],
            "tools": ["OWASP ZAP", "Burp Suite Community"],
            "res": [
              ["OWASP Testing Guide", "https://owasp.org/www-project-web-security-testing-guide/"],
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"]
            ],
            "tip": "You do not need to be a pentester. Catching missing auth checks and reflected XSS is already huge value."
          },
          {
            "t": "Quality Gates & Test Reporting",
            "d": "Turn test results into decisions: dashboards, gates, and the release call.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Quality gates: the metrics that must pass before release",
              "Allure reports: history, retries, and failure categorization",
              "Telling the quality story to stakeholders who do not read test logs"
            ],
            "do": [
              "Set up Allure reporting for a test suite with history trends",
              "Define quality gates for a release (coverage, pass rate, open criticals)",
              "Write a go/no-go release summary for a real or simulated release"
            ],
            "tools": ["Allure", "TestRail"],
            "res": [
              ["Allure Framework", "https://github.com/allure-framework"]
            ],
            "tip": "Stakeholders do not care about 1,247 passed tests. They care about: what is broken, what is the risk, can we ship."
          },
          {
            "t": "Capstone: Ship a Tested Release",
            "d": "Take an app from zero tests to a CI-gated release with a quality report.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Planning the whole quality effort: strategy, risk analysis, pyramid",
              "Combining manual, API, UI automation, and performance testing",
              "Presenting the release decision with evidence"
            ],
            "do": [
              "Pick an open-source app and write its test strategy",
              "Build the pyramid: unit, API, and E2E coverage for critical journeys",
              "Wire everything into CI with quality gates and an Allure report, then present go/no-go"
            ],
            "tools": ["Playwright", "k6", "Postman", "GitHub Actions", "Allure"],
            "res": [
              ["Ministry of Testing", "https://www.ministryoftesting.com"]
            ],
            "badge": "PROJECT",
            "tip": "This is the portfolio piece that gets you hired: a repo with a strategy doc, a green pipeline, and a release report."
          }
        ]
      }
    ]
  }
});
