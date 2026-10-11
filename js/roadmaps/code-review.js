/* Atlas roadmap data: Code Review (code-review) */
ROADMAPS.push({
  "id": "code-review",
  "title": "Code Review",
  "icon": "\ud83d\udd0d",
  "color": "#f97316",
  "desc": "Doing great code reviews: reading code with intent, spotting correctness, security, and design issues, and giving feedback that makes teams better.",
  "kind": "skill",
  "root": {
    "t": "Code Review",
    "d": "Read code like a reviewer, find what matters, and say it so it lands.",
    "children": [
      {
        "t": "Reading Code Like a Reviewer",
        "d": "Review is a reading skill first. Learn to extract intent from a diff before judging it.",
        "lv": 1,
        "children": [
          {
            "t": "How to Read a Diff",
            "d": "Deltas, not files: reconstruct what changed and why before forming any opinion.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Reading the PR description, linked ticket, and tests before the diff itself",
              "Following the change through callers and callees, not just the touched lines",
              "Distinguishing behavior changes from refactors inside one diff"
            ],
            "do": [
              "Review a real open-source PR: read description and tests first, then the diff",
              "Trace one changed function to every caller in the codebase",
              "Write a one-paragraph summary of what the PR does before commenting"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Reviewers who start line-by-line miss the design. Understand the change first, then zoom into the lines."
          },
          {
            "t": "Building a Mental Model of Intent",
            "d": "The author knows what they meant. Your job is to check the code says it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Intent vs implementation: the gap where most bugs live",
              "Asking 'what is this supposed to do' before 'is this right'",
              "Using tests as the executable statement of intent"
            ],
            "do": [
              "Pick a PR, write down its intent in one sentence, then verify the code matches",
              "Find one place where the tests and the implementation disagree",
              "List three questions you would ask the author about unclear intent"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "If you cannot state the PR's intent in one sentence, you are not ready to approve it. Ask, do not guess."
          },
          {
            "t": "Review Order: Design First, Nits Last",
            "d": "Comment on architecture before commas. Nits on code that gets rewritten are wasted words.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The review pyramid: design, correctness, then style",
              "Why style nits belong to linters, not humans",
              "Requesting changes on design vs commenting on polish"
            ],
            "do": [
              "Review a PR and sort your comments into design, correctness, and style buckets",
              "Delete every style comment a linter could have made and note the count",
              "Set up a linter and formatter for one project so humans stop doing it"
            ],
            "tools": ["ESLint", "Prettier", "Ruff"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "A review that is all nits and no design feedback teaches authors that review is theater. Lead with what matters."
          },
          {
            "t": "Asking Questions vs Asserting",
            "d": "Questions uncover the author's reasoning. Assertions start arguments about yours.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Question form: 'What happens if X is null here?' vs 'This will NPE'",
              "When assertion is right: clear bugs with evidence, not taste",
              "How questions invite the author to teach you something you missed"
            ],
            "do": [
              "Rewrite five of your past assertive comments as genuine questions",
              "Review a PR using only questions and observe the conversation quality",
              "Identify one past review where a question would have saved a wrong assertion"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "You will be wrong sometimes. A question that turns out unnecessary costs nothing; a wrong assertion costs trust."
          },
          {
            "t": "Small PRs Review Better",
            "d": "Review quality collapses past a few hundred lines. Shape the work so review can succeed.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The evidence: defect detection drops as PR size grows",
              "Stacked PRs and splitting by concern: refactor, then behavior",
              "What to do with the giant PR you cannot avoid: review plan and timeboxing"
            ],
            "do": [
              "Split one large change of yours into stacked, independently reviewable PRs",
              "Write a review plan comment on a large PR: order, focus areas, and questions",
              "Propose a team guideline for PR size with the reasoning attached"
            ],
            "tools": ["GitHub", "Graphite"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Approving a 2000-line PR you skimmed is not trust, it is abdication. Ask for the split; it is the reviewer's right."
          }
        ]
      },
      {
        "t": "Correctness and Logic",
        "d": "Edge cases, failure paths, and concurrency: the bugs that tests missed and users will find.",
        "lv": 1,
        "children": [
          {
            "t": "Edge Cases and Boundary Conditions",
            "d": "Empty, one, many, null, huge: the inputs where logic quietly breaks.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Boundary inventory: empty collections, single elements, maximums, and nulls",
              "Off-by-one patterns in loops, slicing, and pagination",
              "Asking 'what is the smallest and largest this can be' for every variable"
            ],
            "do": [
              "Review a function and list every boundary input it never handles",
              "Write the missing boundary tests for one real function",
              "Find a pagination bug in an open-source project and read its fix"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "The happy path is what the author tested. Your value as a reviewer is everything around it."
          },
          {
            "t": "Error Handling and Failure Paths",
            "d": "Code fails at runtime the way it was written: check what happens when everything goes wrong.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Swallowed exceptions, empty catch blocks, and ignored return values",
              "Error propagation: does the caller know, and can it act",
              "Retry and fallback logic: the failure handling that needs its own review"
            ],
            "do": [
              "Grep a codebase for empty catch blocks and ignored errors",
              "Trace one error from throw to user and judge each handling layer",
              "Review retry logic for backoff, jitter, and max attempts"
            ],
            "tools": ["Sentry", "Semgrep"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Read the catch blocks first. Error handling is where authors stop thinking and reviewers should start."
          },
          {
            "t": "Concurrency and Race Conditions",
            "d": "Works on the author's machine, breaks under load: shared state reviewed with suspicion.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Shared mutable state as the root of most concurrency bugs",
              "Check-then-act races, lost updates, and deadlock shapes",
              "What good looks like: immutability, atomic operations, and clear ownership"
            ],
            "do": [
              "Find a check-then-act race in a sample program and fix it with atomicity",
              "Review async code for unawaited promises and shared-state mutation",
              "Draw the lock ordering of one multithreaded component and check for cycles"
            ],
            "tools": ["ThreadSanitizer", "Go race detector"],
            "res": [
              ["Go Memory Model", "https://go.dev/ref/mem"]
            ],
            "tip": "If you cannot explain the threading model of the code, say so and ask. Guessing at concurrency correctness is how races ship."
          },
          {
            "t": "Off-by-One and Fencepost Errors",
            "d": "The most classic bug family: counting things wrong at the edges.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Loop bounds, slice indices, and inclusive vs exclusive ranges",
              "Pagination math: pages, offsets, and the last-page edge",
              "Testing the pattern: verify with 0, 1, and 2 items, not just 100"
            ],
            "do": [
              "Hand-trace a loop with 0 and 1 iterations and check the bounds",
              "Write boundary tests for a pagination helper",
              "Find one fencepost bug in a real codebase and explain the fix"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "When reviewing loops, check the first and last iteration by hand. That thirty-second trace catches most fencepost bugs."
          },
          {
            "t": "Nullability and Missing Data",
            "d": "Null is a value too, and the database will eventually send you one.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Nullable fields, optional chaining, and the billion-dollar mistake",
              "Distinguishing 'missing' from 'empty' from 'invalid' in data models",
              "Defensive defaults vs failing fast: choosing per layer"
            ],
            "do": [
              "Audit one API handler for unguarded nullable access",
              "Decide the null policy for one data model and document it",
              "Add null-safety annotations or types to one module"
            ],
            "tools": ["TypeScript", "mypy"],
            "res": [
              ["TypeScript Handbook: Null", "https://www.typescriptlang.org/"]
            ],
            "tip": "Every nullable field is a question the code must answer. If the code does not answer it, the runtime will, at 3 AM."
          },
          {
            "t": "Idempotency and Retry Safety",
            "d": "Networks retry. Your handlers must survive being called twice.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why at-least-once delivery makes every handler potentially re-entrant",
              "Idempotency keys and natural idempotency in design",
              "The double-charge test: would a retry bill the customer twice"
            ],
            "do": [
              "Replay a webhook twice against a test handler and observe the damage",
              "Add idempotency-key handling to one endpoint",
              "Review a payment flow specifically for retry safety"
            ],
            "tools": ["Stripe API docs"],
            "res": [
              ["Stripe: Idempotent Requests", "https://docs.stripe.com/api/idempotent_requests"]
            ],
            "tip": "Review every side-effecting endpoint with the question: what happens if this exact request arrives twice."
          }
        ]
      },
      {
        "t": "Security Eyes in Review",
        "d": "The reviewer's security checklist: input, secrets, authz, crypto, and parsing.",
        "lv": 2,
        "children": [
          {
            "t": "Never Trust Input: Validation Checks",
            "d": "Every value crossing a trust boundary gets validated. In review, find the ones that do not.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Trust boundaries in a diff: HTTP bodies, file reads, env vars, upstream responses",
              "Allow-list validation and the dangerous convenience of binding everything",
              "Where validation must live: server-side, at the boundary, before use"
            ],
            "do": [
              "Map the trust boundaries in one PR and check each input",
              "Find one unvalidated input reaching a sensitive sink",
              "Write the validation review checklist your team will reuse"
            ],
            "tools": ["Semgrep", "OWASP Cheat Sheets"],
            "res": [
              ["OWASP Input Validation Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html"]
            ],
            "tip": "Follow the data, not the code. Pick a sensitive sink and trace backwards to every source; the unvalidated one is the bug."
          },
          {
            "t": "Secrets and Credentials in Diffs",
            "d": "Keys, tokens, and passwords slip into PRs constantly. Catch them before merge.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What leaks: hardcoded keys, test credentials that are real, private keys in fixtures",
              "Scanner plus human: gitleaks in CI and eyes in review",
              "The response: rotate first, then clean history, then fix the process"
            ],
            "do": [
              "Scan recent PRs of a test repo for committed secrets",
              "Review test fixtures for credentials that look real",
              "Write the incident checklist for a merged secret"
            ],
            "tools": ["Gitleaks", "TruffleHog"],
            "res": [
              ["Gitleaks", "https://github.com/gitleaks/gitleaks"]
            ],
            "tip": "'It is just a test key' is how production keys leak. If it looks like a secret, treat it like one."
          },
          {
            "t": "Authorization Checks in New Endpoints",
            "d": "New routes, new admin flags, changed roles: the diff lines where access control breaks.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The review trigger list: new endpoints, new roles, changed middleware, new query params",
              "Verifying the check runs on the object, not just the route",
              "Tests that prove denial: the missing test in most PRs"
            ],
            "do": [
              "Review a PR adding an endpoint and verify the authorization check and its tests",
              "Write a failing test for a missing authz check, then fix it",
              "Build your personal trigger list of diff patterns that demand authz scrutiny"
            ],
            "tools": ["Burp Suite", "OWASP ZAP"],
            "res": [
              ["OWASP Authorization Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]
            ],
            "tip": "Authentication is visible in the diff; authorization is often absent from it. Absence of a check is the finding."
          },
          {
            "t": "Crypto and Randomness Red Flags",
            "d": "Hand-rolled crypto, weak randomness, and hardcoded IVs: patterns to reject on sight.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Red flags: custom ciphers, MD5/SHA1 for security, Math.random for tokens",
              "What good looks like: vetted libraries, CSPRNGs, standard modes",
              "The review response: block and point to the standard, never 'fix' the custom crypto"
            ],
            "do": [
              "Grep a codebase for Math.random, MD5, and custom encrypt functions",
              "Replace one weak token generator with a CSPRNG",
              "Write the team's crypto do-and-don't list with library names"
            ],
            "tools": ["Semgrep"],
            "res": [
              ["OWASP Cryptographic Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html"]
            ],
            "tip": "Any diff that implements its own encryption, hashing, or token comparison gets blocked, no matter how clever it looks."
          },
          {
            "t": "Unsafe Deserialization and Parsing",
            "d": "Pickle, YAML, XML: data formats that execute code when parsed naively.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Which parsers are dangerous: pickle, yaml.load, XXE-capable XML",
              "Safe alternatives: JSON, yaml.safe_load, hardened XML parsers",
              "The pattern: untrusted bytes reaching a powerful parser"
            ],
            "do": [
              "Exploit a pickle deserialization in a lab app, then replace it with JSON",
              "Enable XXE protection on an XML parser and verify the attack fails",
              "Grep for dangerous deserialization calls across one codebase"
            ],
            "tools": ["Semgrep", "Bandit"],
            "res": [
              ["OWASP Deserialization Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html"]
            ],
            "tip": "Deserialization bugs hide in features: file import, session restore, cached objects. Review every parser that touches untrusted bytes."
          }
        ]
      },
      {
        "t": "Design and Architecture",
        "d": "Naming, abstraction, coupling, and scope: reviewing the shape of the code, not just its bugs.",
        "lv": 2,
        "children": [
          {
            "t": "Naming: the Cheapest Design Review",
            "d": "Bad names hide bad design. If you cannot name it, you do not understand it yet.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Names as documentation: what the name promises the code must deliver",
              "Smells: vague names (data, manager, util), misleading names, and lies",
              "Renaming as a design act: the right name often reveals the right structure"
            ],
            "do": [
              "Rename five bad identifiers in a real file and note what each rename revealed",
              "Review a PR focusing only on names and record the design issues they exposed",
              "Write your team's naming conventions for the three most abused concepts"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "A function named processData doing three unrelated things is not a naming problem. It is a design problem the name is confessing."
          },
          {
            "t": "Abstraction and Coupling Smells",
            "d": "Leaky abstractions and tangled dependencies: the design debt that compounds.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Coupling vs cohesion: what changes together should live together",
              "Leaky abstractions: when callers must know the implementation anyway",
              "Dependency direction: stable things depended upon, volatile things isolated"
            ],
            "do": [
              "Draw the dependency graph of one module and find the cycles",
              "Identify one leaky abstraction and propose the cleaner boundary",
              "Review a PR for new coupling: what now depends on what"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Ask 'what would I have to change to replace this'. If the answer is 'everything', the abstraction failed."
          },
          {
            "t": "YAGNI and Scope Creep",
            "d": "You are not gonna need it: speculative generality is a bug you write on purpose.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Speculative features, unused parameters, and frameworks for one use",
              "The cost: every unused abstraction is code reviewers and maintainers must understand",
              "The review move: ask for the current requirement it serves"
            ],
            "do": [
              "Find dead or speculative code in one module and propose its removal",
              "Review a PR and flag every feature with no current caller",
              "Practice the question: 'What breaks if we delete this?'"
            ],
            "tools": ["GitHub", "vulture"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Generality without a second use case is guessing. The second use case, when it arrives, will want a different abstraction anyway."
          },
          {
            "t": "Testability as a Design Signal",
            "d": "Hard-to-test code is badly designed code. The test is the review's x-ray.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Testability smells: hidden dependencies, global state, and untestable time",
              "Dependency injection and seams as design tools, not just test tools",
              "Reading the tests first: they reveal the design the author actually built"
            ],
            "do": [
              "Try to unit-test one untested function and list every design obstacle",
              "Refactor one function for testability without changing behavior",
              "Review a PR's tests for what they reveal about hidden coupling"
            ],
            "tools": ["pytest", "Jest"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "'This is hard to test' is a design finding, not an excuse. Say it in the review and propose the seam."
          },
          {
            "t": "Data Modeling Review",
            "d": "Schemas outlive code. Review the data model like the long-term commitment it is.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Schema review: nullability, defaults, indexes, and migration safety",
              "Naming and types: the model is the ubiquitous language",
              "Migration discipline: backwards-compatible changes and rollback plans"
            ],
            "do": [
              "Review one migration for nullability, defaults, and lock behavior",
              "Check that new queries have the indexes they need",
              "Write the rollback plan for a migration before approving it"
            ],
            "tools": ["PostgreSQL", "Prisma", "Alembic"],
            "res": [
              ["PostgreSQL docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Code deploys are reversible in minutes; bad migrations are not. Schema review deserves the strictest eye in the PR."
          },
          {
            "t": "Performance Smells",
            "d": "N+1 queries, hot loops, and accidental O(n squared): catch the slow before it ships.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "N+1 queries: the ORM-shaped performance bug",
              "Algorithmic thinking: recognizing accidental quadratic behavior",
              "When to care: hot paths and scale vs premature optimization"
            ],
            "do": [
              "Find an N+1 query in a sample app with query logging and fix it",
              "Profile one endpoint and identify the actual bottleneck",
              "Review a PR and flag the one loop that runs per user at scale"
            ],
            "tools": ["py-spy", "Chrome DevTools"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Do not optimize in review; identify. 'This loop is O(n squared) on the hot path' is the comment. The fix is the author's."
          }
        ]
      }
      ,
      {
        "t": "Readability and Maintainability",
        "d": "Code is read ten times for every write. Review for the reader who arrives at 2 AM.",
        "lv": 2,
        "children": [
          {
            "t": "Comments: Explain Why, Not What",
            "d": "Good comments capture intent and context. Bad ones narrate the obvious.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why-comments: the business rule, the workaround, the non-obvious constraint",
              "What-comments as a smell: the code should say what, the comment says why",
              "Comment rot: outdated comments are worse than none"
            ],
            "do": [
              "Delete every what-comment in one file and check nothing is lost",
              "Add why-comments to three non-obvious decisions in your own code",
              "Review a PR and request the one missing why-comment"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "If the comment explains what the code does, the code needs rewriting. If it explains why, it earns its place."
          },
          {
            "t": "Complexity and Function Size",
            "d": "Long functions and deep nesting are where understanding goes to die.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Cyclomatic complexity: counting the paths through a function",
              "Nesting as a signal: extract, guard-clause, or restructure",
              "The real rule: one function, one level of abstraction"
            ],
            "do": [
              "Run a complexity checker on one module and review the worst offenders",
              "Refactor one deeply nested function with guard clauses",
              "Set a complexity budget in CI for one project"
            ],
            "tools": ["Xenon", "ESLint complexity"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Do not demand arbitrary line limits. Demand one idea per function; the length follows."
          },
          {
            "t": "Consistency with Codebase Conventions",
            "d": "The codebase has a dialect. New code should speak it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Matching existing patterns vs introducing better ones deliberately",
              "When inconsistency is right: the old pattern is the bug",
              "Documenting conventions so reviewers stop relitigating them"
            ],
            "do": [
              "Find the dominant error-handling pattern in a codebase and check one PR against it",
              "Write down three unwritten conventions you follow in review",
              "Propose one convention change with the migration reasoning"
            ],
            "tools": ["GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Consistency beats personal preference. Save your style crusades for the linter config, not the PR."
          },
          {
            "t": "Dead Code and TODO Debt",
            "d": "Commented-out code is not history, it is clutter. TODOs are promises; track them.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Dead code costs: confusion, false search hits, and merge conflicts",
              "Git is the archive: delete confidently, recover if needed",
              "TODO hygiene: owner, ticket, and expiry, or it is litter"
            ],
            "do": [
              "Delete dead code in one module and verify tests still pass",
              "Audit TODOs in a codebase: convert the real ones to tickets",
              "Add a CI check that fails on TODOs older than an agreed date"
            ],
            "tools": ["vulture", "GitHub"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Every TODO without a ticket is a lie the codebase tells itself. Convert or delete."
          }
        ]
      },
      {
        "t": "Feedback That Lands",
        "d": "The craft of the comment: actionable, kind, and calibrated to severity.",
        "lv": 2,
        "children": [
          {
            "t": "Actionable Comments: Suggestion plus Reason",
            "d": "'Extract this' is a chore. 'Extract this because the retry logic is tested separately' is teaching.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The anatomy: observation, reason, and a concrete suggestion",
              "Linking to the principle: the rule behind the request",
              "When to suggest code directly vs describing the direction"
            ],
            "do": [
              "Rewrite five vague past comments into observation-reason-suggestion form",
              "Use suggested-changes on one PR and note the author's response",
              "Collect three comment templates your team reuses"
            ],
            "tools": ["GitHub suggested changes"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "A comment without a reason reads as taste. A comment with a reason reads as mentorship."
          },
          {
            "t": "Questions over Directives",
            "d": "Directives for bugs, questions for judgment calls. Mix them up and you get defensiveness.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Directives: clear defects with evidence, stated plainly",
              "Questions: design trade-offs where the author has context you lack",
              "The tone test: would you say it this way to someone you respect"
            ],
            "do": [
              "Classify your last twenty review comments as directive or question",
              "Convert three misplaced directives into questions",
              "Review a PR deliberately mixing both forms and compare the thread quality"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "'Do X' for something you are unsure about invites a fight you will lose. Ask first, direct when certain."
          },
          {
            "t": "Severity: Blocking vs Nit",
            "d": "Not every comment deserves to block a merge. Label severity so authors know what must change.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Blocking: bugs, security issues, and design problems that compound",
              "Non-blocking: suggestions, nits, and follow-ups for later",
              "The convention: prefixes or labels the whole team understands"
            ],
            "do": [
              "Label every comment on your next review with blocking or non-blocking",
              "Adopt a team convention: nit:, suggestion:, blocking:",
              "Review your blocking rate: if everything blocks, nothing does"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "A review with twelve blocking comments is a rewrite request in disguise. Say that plainly instead."
          },
          {
            "t": "Tone and the Human on the Other Side",
            "d": "Text strips tone. Write reviews you would be happy to receive on your worst day.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Assume competence: the author had reasons you cannot see",
              "Praise specifically: good patterns deserve comments too",
              "Separating the code from the coder in every sentence"
            ],
            "do": [
              "Leave three specific positive comments on your next reviews",
              "Rewrite a harsh comment you once left into its kind equivalent",
              "Ask a teammate how your review tone lands and listen"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Praise in review is not softness; it is calibration. Authors need to know which patterns to repeat."
          },
          {
            "t": "Suggesting Code, Not Just Criticism",
            "d": "A code suggestion shows the fix. A paragraph describes it. Prefer the suggestion.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "When suggested changes help: small, clear improvements the author can accept",
              "When they hurt: large rewrites that steal the author's ownership",
              "Pairing the suggestion with the reasoning so it teaches"
            ],
            "do": [
              "Resolve three of your comments as suggested changes on a real PR",
              "Identify one review where a suggestion would have beaten a paragraph",
              "Practice restraint: leave one good suggestion unsent and describe the direction instead"
            ],
            "tools": ["GitHub suggested changes"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Rewriting someone's PR in suggestions feels helpful and lands as takeover. Suggest the small, describe the large."
          }
        ]
      },
      {
        "t": "Review Culture and Process",
        "d": "Great reviews are a team sport: SLAs, blameless norms, and metrics that help.",
        "lv": 3,
        "children": [
          {
            "t": "Review SLAs and Unblocking Flow",
            "d": "A PR waiting three days is a feature dying. Responsiveness is a review skill.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "SLA thinking: first response within hours, not days",
              "The reviewer's duty: unblocking others is real work, not an interruption",
              "Escalation paths for stuck reviews and conflicting feedback"
            ],
            "do": [
              "Measure your team's current review latency for one month",
              "Propose an SLA with the reasoning and get team agreement",
              "Set up notifications so review requests never sit unseen"
            ],
            "tools": ["GitHub", "Linear"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "Slow review is a tax on every developer. The fastest reviewer is not the best, but the absent one is the worst."
          },
          {
            "t": "Rubber-Stamping and How to Fight It",
            "d": "LGTM in thirty seconds helps nobody. Build the habits and structures that keep review honest.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Why rubber-stamping happens: pressure, fatigue, and unclear standards",
              "Structural fixes: required reviewers, CODEOWNERS, and review checklists",
              "Cultural fixes: celebrating catches, never punishing thoroughness"
            ],
            "do": [
              "Audit recent approvals for review depth and discuss the pattern with the team",
              "Write the team's review checklist: the five things every review covers",
              "Set up CODEOWNERS so the right experts see the right diffs"
            ],
            "tools": ["GitHub CODEOWNERS"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "If approvals take seconds, the process is the problem, not the people. Fix the structure before blaming the reviewers."
          },
          {
            "t": "Blameless Reviews and Psychological Safety",
            "d": "People who fear looking stupid hide bugs. Safety is a defect-detection strategy.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Blameless language: the code has a bug, the person does not",
              "How harsh reviews teach authors to write smaller, safer, less ambitious code",
              "Modeling vulnerability: senior reviewers asking questions in public"
            ],
            "do": [
              "Rewrite your team's harshest review patterns into blameless forms",
              "Start one review thread with a genuine question as the senior in the room",
              "Discuss one past incident review and what made it safe or unsafe"
            ],
            "tools": ["GitHub", "GitLab"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "The junior who stops asking questions is the one who ships the bug nobody catches. Protect their courage deliberately."
          },
          {
            "t": "Metrics That Help, Vanity Ones That Do Not",
            "d": "Measure review health, not reviewer output. Counts of comments are not quality.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Useful: time to first review, review latency, escaped-defect rate",
              "Vanity: comment counts, lines reviewed, approval speed leaderboards",
              "Using metrics to fix the process, never to rank people"
            ],
            "do": [
              "Build a dashboard of time-to-first-review for your team",
              "Track escaped defects back to their reviews and find the pattern",
              "Kill one vanity metric your team currently reports"
            ],
            "tools": ["GitHub Insights", "Linear"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "The moment metrics rank reviewers, reviews become performance theater. Measure the system, coach the people.",
            "tag": "opt"
          },
          {
            "t": "AI-Assisted Review: Trust but Verify",
            "d": "AI reviewers catch real issues and invent fake ones. Learn to supervise the machine.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What AI review does well: style, common bug patterns, and tireless coverage",
              "What it does badly: design judgment, business logic, and confident hallucinations",
              "The workflow: AI as first pass, human as the accountable reviewer"
            ],
            "do": [
              "Run an AI reviewer on five PRs and classify every comment as true, false, or noise",
              "Write the team's policy: where AI review is allowed and who stays accountable",
              "Compare AI findings against your own review of the same PR"
            ],
            "tools": ["GitHub Copilot", "Cursor"],
            "res": [
              ["Google Engineering Practices: Code Review", "https://google.github.io/eng-practices/review/"]
            ],
            "tip": "An AI approval is not a review. The human who clicks approve owns every line, including the ones only the machine read."
          }
        ]
      }
    ]
  }
});
