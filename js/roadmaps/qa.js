/* Atlas roadmap data: QA (qa) */
ROADMAPS.push({
  "id": "qa",
  "title": "QA",
  "icon": "🐞",
  "color": "#f59e0b",
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
      }
    ]
  }
});
