/* Atlas roadmap data: Full Stack (full-stack) */
ROADMAPS.push({
  "id": "full-stack",
  "title": "Full Stack",
  "icon": "🛠️",
  "color": "#ede9fe",
  "desc": "The complete developer path: frontend craft, backend systems, databases, DevOps essentials, and shipping real products solo.",
  "kind": "role",
  "root": {
    "t": "Full Stack Development",
    "d": "From first HTML tag to deploying products you built alone.",
    "children": [
      {
        "t": "Web and Tooling Foundations",
        "d": "How the web actually works, and the tools every developer lives in.",
        "lv": 1,
        "children": [
          {
            "t": "How the Web Works",
            "d": "DNS, HTTP, browsers, and servers: the journey of one page load.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The request lifecycle: DNS lookup, TCP/TLS handshake, HTTP request, response, render",
              "Client vs server: what runs where and why the split matters",
              "HTTP essentials: methods, status codes, headers, and statelessness"
            ],
            "do": [
              "Trace a page load in DevTools: DNS, connect, TLS, TTFB, download",
              "Make raw HTTP requests with curl and read the status codes and headers",
              "Draw the full journey of typing a URL and pressing enter"
            ],
            "tools": ["curl", "Chrome DevTools", "dig"],
            "res": [
              ["MDN: How the web works", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_the_web_works"],
              ["web.dev: HTTP", "https://web.dev/"]
            ],
            "tip": "Skipping this feels faster until your first CORS error, DNS outage, or caching mystery. Foundations pay compound interest."
          },
          {
            "t": "HTML and Semantic Structure",
            "d": "The skeleton of every page: meaningful markup, not div soup.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Semantic tags: header, nav, main, article, section and what they communicate",
              "Forms and inputs: labels, validation attributes, and accessible form structure",
              "Accessibility basics: alt text, heading order, landmarks, keyboard focus"
            ],
            "do": [
              "Build a multi-section page using only semantic tags, zero divs where semantics exist",
              "Create an accessible form with labels, required states, and error messages",
              "Run an accessibility audit and fix every issue it finds"
            ],
            "tools": ["VS Code", "WAVE", "Lighthouse"],
            "res": [
              ["MDN HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
              ["web.dev: semantic HTML", "https://web.dev/learn/html/semantic-html/"]
            ],
            "tip": "Div soup works until a screen reader user, a search engine, or your future self tries to understand the page."
          },
          {
            "t": "CSS Layout: Flexbox and Grid",
            "d": "Stop fighting centering. Learn the two layout systems that run the modern web.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Flexbox: one-dimensional layouts, alignment, growing and shrinking",
              "Grid: two-dimensional layouts, template areas, responsive tracks",
              "The box model, positioning, and specificity: the trio behind most CSS bugs"
            ],
            "do": [
              "Rebuild 3 common layouts (navbar, card grid, dashboard) with Flexbox and Grid",
              "Make one layout fully responsive with no media-query hacks",
              "Debug a specificity conflict using DevTools' computed styles"
            ],
            "tools": ["Chrome DevTools", "Flexbox Froggy", "Grid Garden"],
            "res": [
              ["MDN CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["CSS Tricks Flexbox guide", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"]
            ],
            "tip": "Learn Grid for page layout and Flexbox for component layout. Using one for both jobs is where the pain starts."
          },
          {
            "t": "JavaScript Fundamentals",
            "d": "The language of the web: types, functions, async, and the DOM.",
            "lv": 1,
            "time": "~3w",
            "learn": [
              "Core language: types, scope, closures, prototypes, and this (finally demystified)",
              "Async JavaScript: callbacks, promises, async/await, and the event loop",
              "DOM manipulation: selecting, creating, and updating elements; events and delegation"
            ],
            "do": [
              "Build a todo app with vanilla JS: add, toggle, delete, persist to localStorage",
              "Fetch data from a public API and render it with error and loading states",
              "Explain closures and the event loop in your own words, out loud"
            ],
            "tools": ["Node.js", "Chrome DevTools", "ESLint"],
            "res": [
              ["MDN JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
              ["JavaScript.info", "https://javascript.info/"]
            ],
            "tip": "Frameworks come and go; the language stays. Developers who skip vanilla JS drown in framework magic they cannot debug."
          },
          {
            "t": "Git and GitHub",
            "d": "Version control is a superpower and a safety net. Learn it before you need it.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Core workflow: init, add, commit, branch, merge, and what each actually does",
              "Branching and PRs: feature branches, pull requests, and code review etiquette",
              "Fixing mistakes: revert, reset, stash, and reflog for when things go wrong"
            ],
            "do": [
              "Create a repo, branch a feature, open a PR, and merge it",
              "Deliberately break something, then recover using reflog",
              "Resolve one merge conflict without losing anyone's work"
            ],
            "tools": ["Git", "GitHub", "GitHub Desktop"],
            "res": [
              ["Git docs", "https://git-scm.com/doc"],
              ["GitHub Skills", "https://skills.github.com/"]
            ],
            "tip": "Commit messages are documentation for your future self. 'fix stuff' helps nobody; write what and why in one line."
          },
          {
            "t": "Browser DevTools Mastery",
            "d": "Your laboratory: inspect, debug, profile, and experiment live.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Elements and Console: live-editing markup/CSS and running JS against the page",
              "Network panel: requests, timing, throttling, and mocking responses",
              "Debugger: breakpoints, stepping, watches, and the call stack"
            ],
            "do": [
              "Debug a broken page using only DevTools: find the failing request and the bad CSS",
              "Set a conditional breakpoint and catch a bug that only happens sometimes",
              "Throttle to slow 4G and experience your own site like half your users do"
            ],
            "tools": ["Chrome DevTools", "Firefox DevTools"],
            "res": [
              ["Chrome DevTools docs", "https://developer.chrome.com/docs/devtools/"],
              ["DevTools tips", "https://developer.chrome.com/docs/devtools/tips/"]
            ],
            "tip": "console.log is a starting point, not a debugger. Breakpoints show you state; logs show you guesses about state."
          }
        ]
      },
      {
        "t": "Frontend Development",
        "d": "Build interfaces people love: responsive, interactive, and connected to real data.",
        "lv": 2,
        "children": [
          {
            "t": "Responsive Design and Tailwind CSS",
            "d": "One codebase, every screen: mobile-first design with a utility framework.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Mobile-first thinking: design for the small screen, enhance upward",
              "Tailwind's utility model: composing design from classes instead of writing CSS files",
              "Responsive patterns: breakpoints, fluid type, and container queries"
            ],
            "do": [
              "Rebuild a landing page mobile-first with Tailwind",
              "Make it flawless on phone, tablet, and desktop widths",
              "Customize the Tailwind config: fonts, colors, and spacing scale"
            ],
            "tools": ["Tailwind CSS", "Chrome DevTools device mode"],
            "res": [
              ["Tailwind docs", "https://tailwindcss.com/docs"],
              ["web.dev: responsive design", "https://web.dev/learn/design/"]
            ],
            "tip": "Designing desktop-first and 'fixing' mobile later produces cramped, compromised mobile UX. Start small, it is easier to add than to squeeze."
          },
          {
            "t": "A Frontend Framework: React",
            "d": "Components, state, and effects: thinking in React instead of fighting the DOM.",
            "lv": 2,
            "time": "~3w",
            "learn": [
              "Components and props: the LEGO model of UI, and one-way data flow",
              "State and effects: useState, useEffect, and when each is the right tool",
              "Thinking in React: lifting state, composition over inheritance, derived state"
            ],
            "do": [
              "Rebuild your vanilla todo app in React and feel the difference",
              "Build a data-driven dashboard: fetch, filter, sort, and paginate",
              "Refactor one prop-drilling mess with context or composition"
            ],
            "tools": ["React", "Vite", "React DevTools"],
            "res": [
              ["React docs", "https://react.dev/learn"],
              ["Vite", "https://vite.dev/"]
            ],
            "tip": "useEffect is the most misused hook in React. If you can compute it during render or in an event handler, you do not need an effect."
          },
          {
            "t": "State and Data Fetching",
            "d": "Server state is not UI state. Treat them differently and everything gets easier.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Server vs client state: cached remote data vs ephemeral UI state",
              "Data-fetching libraries: caching, revalidation, and deduping with TanStack Query or SWR",
              "Global UI state: when context/zustand earns its place (and when props suffice)"
            ],
            "do": [
              "Replace manual useEffect fetching with TanStack Query: loading, error, refetch",
              "Implement optimistic updates for one mutation",
              "Draw the state map of an app: which state lives where and why"
            ],
            "tools": ["TanStack Query", "SWR", "Zustand"],
            "res": [
              ["TanStack Query", "https://tanstack.com/query/latest"],
              ["React docs: managing state", "https://react.dev/learn/managing-state"]
            ],
            "tip": "Putting server data in a global store by default is the classic over-engineering move. Fetch-caches handle it better with less code."
          },
          {
            "t": "Forms and Validation",
            "d": "Forms are where users meet your app. Make them forgiving and fast.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Controlled vs uncontrolled inputs and when each wins",
              "Validation: schemas with Zod/Yup, inline errors, and validating on blur vs submit",
              "UX details: disabled states, optimistic submission, and accessible error messages"
            ],
            "do": [
              "Build a multi-field signup form with schema validation and inline errors",
              "Handle async validation (username taken?) with debouncing",
              "Make the whole form keyboard-navigable and screen-reader friendly"
            ],
            "tools": ["React Hook Form", "Zod"],
            "res": [
              ["React Hook Form", "https://react-hook-form.com/"],
              ["Zod", "https://zod.dev/"]
            ],
            "tip": "Validate on the client for UX and on the server for truth. Client-only validation is a suggestion; attackers ignore suggestions."
          },
          {
            "t": "Client-Side Routing",
            "d": "Multi-page feel without multi-page reloads.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "How SPA routing works: history API, route matching, and nested layouts",
              "Protected routes: redirecting unauthenticated users without flashes of content",
              "Data loading per route: loaders, skeletons, and error boundaries"
            ],
            "do": [
              "Build a 4-page SPA with nested layouts and a 404 page",
              "Add protected routes that redirect to login",
              "Implement per-route loading skeletons and error boundaries"
            ],
            "tools": ["React Router", "TanStack Router", "Next.js"],
            "res": [
              ["React Router", "https://reactrouter.com/"],
              ["TanStack Router", "https://tanstack.com/router/latest"]
            ],
            "tip": "Route-level code splitting is free performance. Every route should lazy-load; shipping all routes upfront is a bundle crime."
          },
          {
            "t": "Frontend Auth Patterns",
            "d": "Logging in, staying logged in, and logging out safely from the browser.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Token storage: httpOnly cookies vs localStorage, and the XSS trade-off",
              "Auth flows: login, refresh tokens, silent renewal, and logout everywhere",
              "UI states: authenticated, loading, and logged-out, handled without flicker"
            ],
            "do": [
              "Implement login/logout against a real backend with httpOnly cookies",
              "Add silent token refresh and handle expiry gracefully",
              "Build the auth gate: protected routes, redirects, and loading states"
            ],
            "tools": ["React", "Auth0", "Clerk"],
            "res": [
              ["OWASP session management", "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"],
              ["jwt.io", "https://jwt.io/"]
            ],
            "tip": "Tokens in localStorage are XSS loot. httpOnly cookies plus CSRF protection is the safer default for browser apps."
          }
        ]
      },
      {
        "t": "Backend Development",
        "d": "APIs, authentication, and business logic: the engine room.",
        "lv": 2,
        "children": [
          {
            "t": "Node.js and the Runtime",
            "d": "JavaScript on the server: the event loop, modules, and npm.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "The event loop on the server: non-blocking I/O and what blocks it",
              "Modules and npm: the ecosystem, lockfiles, and auditing dependencies",
              "When Node shines (I/O-heavy APIs) and when it struggles (CPU-heavy work)"
            ],
            "do": [
              "Build a CLI tool with Node: parse args, read files, print results",
              "Benchmark a blocking vs non-blocking file read under concurrent load",
              "Audit a project's dependencies and fix one vulnerability"
            ],
            "tools": ["Node.js", "npm", "nvm"],
            "res": [
              ["Node.js learn", "https://nodejs.org/en/learn"],
              ["npm docs", "https://docs.npmjs.com/"]
            ],
            "tip": "Sync methods (readFileSync, bcrypt sync) in request handlers block every user. In Node, blocking is a team sport where everyone loses."
          },
          {
            "t": "Building REST APIs",
            "d": "Design APIs other developers enjoy using: resources, status codes, and consistency.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "REST design: resources and nouns, proper verbs, meaningful status codes",
              "Request/response discipline: validation, consistent error shapes, pagination",
              "Middleware: auth, logging, rate limiting, and error handling as layers"
            ],
            "do": [
              "Build a CRUD API for one resource with validation and proper status codes",
              "Add pagination, filtering, and sorting to a list endpoint",
              "Write API docs and have a friend integrate against them without asking questions"
            ],
            "tools": ["Express", "Fastify", "Zod"],
            "res": [
              ["Express", "https://expressjs.com/"],
              ["Fastify", "https://fastify.dev/"]
            ],
            "tip": "Inconsistent error responses are an API's original sin. One error shape everywhere, or every client writes custom parsing forever."
          },
          {
            "t": "Authentication: Sessions vs JWT",
            "d": "Proving who is knocking: cookies, tokens, and OAuth without the confusion.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Sessions: server-side state, simple revocation, needs sticky or shared store",
              "JWT: stateless tokens, signature verification, refresh-token rotation",
              "OAuth 2.0 / OIDC: delegating login to Google/GitHub instead of storing passwords"
            ],
            "do": [
              "Implement session auth with a Redis store",
              "Implement JWT auth with access + rotating refresh tokens",
              "Add 'Login with GitHub' via OAuth and compare the complexity"
            ],
            "tools": ["Passport.js", "Redis", "Auth0", "jose"],
            "res": [
              ["OAuth 2.0", "https://oauth.net/2/"],
              ["OWASP authentication cheatsheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"]
            ],
            "tip": "Never store passwords yourself if you can avoid it, and never roll your own crypto. Use bcrypt/argon2 and battle-tested libraries."
          },
          {
            "t": "Testing APIs",
            "d": "Untested endpoints are promises. Tests make them contracts.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Test pyramid for APIs: unit tests for logic, integration tests for routes + DB",
              "Supertest-style testing: hitting real endpoints with a test database",
              "What to assert: status codes, shapes, auth failures, and edge cases"
            ],
            "do": [
              "Write integration tests for every endpoint of your CRUD API",
              "Test the sad paths: invalid input, missing auth, not-found resources",
              "Get coverage of the auth middleware paths specifically"
            ],
            "tools": ["Vitest", "Supertest", "Testcontainers"],
            "res": [
              ["Vitest", "https://vitest.dev/"],
              ["Supertest", "https://github.com/ladjs/supertest"]
            ],
            "tip": "Tests that only cover happy paths are decoration. The bugs live in the 401s, the 422s, and the race conditions."
          },
          {
            "t": "Background Jobs and Queues",
            "d": "Emails, thumbnails, webhooks: work the user should never wait for.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "What leaves the request: anything slow, flaky, or third-party",
              "Queue mechanics: producers, workers, retries, and dead-letter queues",
              "Idempotency: designing jobs that survive being run twice"
            ],
            "do": [
              "Move email-sending out of a request handler into a queue worker",
              "Make the worker idempotent and prove it with a duplicate delivery",
              "Add retries with backoff and a dead-letter queue"
            ],
            "tools": ["BullMQ", "Redis", "Temporal"],
            "res": [
              ["BullMQ", "https://bullmq.io/"],
              ["Temporal", "https://temporal.io/"]
            ],
            "tip": "A queue without idempotent workers sends every email twice eventually. Design for double-delivery from day one."
          },
          {
            "t": "WebSockets and Realtime",
            "d": "When polling is not enough: chat, live dashboards, and collaboration.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "WebSocket lifecycle: handshake, frames, heartbeats, and reconnection",
              "Scaling realtime: sticky connections vs pub/sub fan-out across instances",
              "When not to use them: polling or SSE is simpler for one-way updates"
            ],
            "do": [
              "Build a realtime chat with rooms and typing indicators",
              "Add reconnection with backoff and message replay",
              "Scale it past one instance using Redis pub/sub"
            ],
            "tools": ["Socket.io", "ws", "Redis"],
            "res": [
              ["Socket.io", "https://socket.io/docs/"],
              ["WebSocket MDN", "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"]
            ],
            "tag": "opt",
            "tip": "Realtime is a complexity multiplier: connections, scaling, and reconnection logic. Reach for SSE or polling first if updates flow one way."
          }
        ]
      },
      {
        "t": "Data Layer",
        "d": "Data outlives code. Model it well, query it fast, migrate it safely.",
        "lv": 2,
        "children": [
          {
            "t": "SQL and PostgreSQL",
            "d": "The lingua franca of data: queries, joins, and transactions.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Core SQL: SELECT, JOINs, GROUP BY, subqueries, and window functions",
              "Transactions and isolation: ACID, and what concurrent writes do to your data",
              "PostgreSQL superpowers: JSONB, full-text search, and extensions"
            ],
            "do": [
              "Model a small domain and write 20 queries against it, including window functions",
              "Demonstrate a lost update, then fix it with a transaction",
              "Build one feature on JSONB and one on full-text search"
            ],
            "tools": ["PostgreSQL", "psql", "pgAdmin", "DBeaver"],
            "res": [
              ["PostgreSQL docs", "https://www.postgresql.org/docs/"],
              ["PostgreSQL tutorial", "https://www.postgresql.org/docs/current/tutorial.html"]
            ],
            "tip": "ORMs generate SQL; they do not excuse you from understanding it. Every slow app has a developer who never learned EXPLAIN."
          },
          {
            "t": "Data Modeling",
            "d": "Tables, relations, and the normalization judgment calls.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Normalization: 1NF-3NF, what each eliminates, and why it matters",
              "Relationships: one-to-many, many-to-many, and the join tables between them",
              "When to denormalize: read-heavy paths where joins cost more than duplication"
            ],
            "do": [
              "Model users, posts, comments, and likes in 3NF with an ERD",
              "Write the migration and seed realistic data",
              "Identify one query that justifies denormalization and document the trade-off"
            ],
            "tools": ["dbdiagram.io", "PostgreSQL", "Prisma"],
            "res": [
              ["Prisma schema docs", "https://www.prisma.io/docs/orm/prisma-schema"],
              ["Database normalization", "https://en.wikipedia.org/wiki/Database_normalization"]
            ],
            "tip": "Model for correctness first, denormalize from evidence later. Premature denormalization is just technical debt with extra steps."
          },
          {
            "t": "Migrations",
            "d": "Evolving the schema without losing data or downtime.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Migration discipline: reversible, tested, and never editing applied migrations",
              "Zero-downtime patterns: expand-migrate-contract for renaming and reshaping",
              "Seeds and fixtures: reproducible data for dev, test, and demos"
            ],
            "do": [
              "Write a migration chain: create, alter, backfill, then clean up",
              "Practice a zero-downtime column rename with the expand-contract pattern",
              "Roll one migration back and forward and verify data survives"
            ],
            "tools": ["Prisma Migrate", "Flyway", "Knex"],
            "res": [
              ["Prisma Migrate", "https://www.prisma.io/docs/orm/prisma-migrate"],
              ["Flyway", "https://flywaydb.org/"]
            ],
            "tip": "Never edit a migration that has run anywhere shared. Write a new one; history is append-only or it is fiction."
          },
          {
            "t": "Redis and Caching",
            "d": "The in-memory workhorse: sessions, caches, queues, and leaderboards.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Data structures: strings, hashes, sets, sorted sets, and picking the right one",
              "Caching patterns: cache-aside with TTLs, and invalidation on write",
              "Beyond cache: sessions, rate limiting, and pub/sub"
            ],
            "do": [
              "Cache one expensive endpoint with cache-aside and measure the speedup",
              "Build a rate limiter with expiring keys",
              "Implement session storage and prove any instance can serve any user"
            ],
            "tools": ["Redis", "redis-cli"],
            "res": [
              ["Redis docs", "https://redis.io/docs/latest/"],
              ["Redis patterns", "https://redis.io/docs/latest/develop/use/patterns/"]
            ],
            "tip": "Every cached value needs an invalidation story. 'TTL of an hour' is a story, but make sure stale-for-an-hour is actually acceptable."
          },
          {
            "t": "Basic Query Performance",
            "d": "Indexes and EXPLAIN: the 20% of database tuning that fixes 80% of slowness.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Reading EXPLAIN: seq scans, index scans, and join strategies",
              "Index design: which columns, composite order, and the cost to writes",
              "The N+1 detector: counting queries per request as a habit"
            ],
            "do": [
              "Find your slowest query with EXPLAIN ANALYZE and fix it with an index",
              "Count queries per request on a list endpoint and kill one N+1",
              "Drop one unused index after proving it is never used"
            ],
            "tools": ["PostgreSQL", "pg_stat_statements"],
            "res": [
              ["Use the Index, Luke!", "https://use-the-index-luke.com/"],
              ["PostgreSQL EXPLAIN", "https://www.postgresql.org/docs/current/using-explain.html"]
            ],
            "tip": "Add indexes from evidence (slow queries), not from fear. Unused indexes tax every write for zero benefit."
          }
        ]
      },
      {
        "t": "DevOps Essentials",
        "d": "Ship it, run it, keep it alive: the minimum ops every full-stack dev needs.",
        "lv": 2,
        "children": [
          {
            "t": "Linux Command Line",
            "d": "Your server speaks bash. Learn to hold a conversation.",
            "lv": 1,
            "time": "~2w",
            "learn": [
              "Filesystem and permissions: navigating, ownership, and chmod without fear",
              "Text plumbing: grep, sed, awk, pipes, and redirecting streams",
              "Processes and services: ps, systemd, logs with journalctl, and ssh"
            ],
            "do": [
              "Set up a VPS, harden SSH, and deploy a static site by hand",
              "Debug a failing service using only journalctl and system logs",
              "Write a bash script that backs up a directory with rotation"
            ],
            "tools": ["bash", "ssh", "systemd", "tmux"],
            "res": [
              ["Linux Journey", "https://linuxjourney.com/"],
              ["DigitalOcean tutorials", "https://www.digitalocean.com/community/tutorials"]
            ],
            "tip": "Learn to read logs before you learn to write configs. Most 'broken server' mysteries are solved in the last 50 lines of a log."
          },
          {
            "t": "Docker",
            "d": "'Works on my machine' dies here: package the app and its world.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Images vs containers: layered filesystems and why builds are cached",
              "Dockerfiles: multi-stage builds, layer ordering, and tiny production images",
              "Compose: running app + DB + cache locally with one command"
            ],
            "do": [
              "Dockerize your API with a multi-stage build under 200MB",
              "Run the full stack (app, Postgres, Redis) with docker compose",
              "Debug a container that exits immediately using logs and exec"
            ],
            "tools": ["Docker", "Docker Compose"],
            "res": [
              ["Docker docs", "https://docs.docker.com/"],
              ["Dockerfile best practices", "https://docs.docker.com/build/building/best-practices/"]
            ],
            "tip": "Never run as root in production images, and never bake secrets into layers. Both mistakes are permanent once pushed."
          },
          {
            "t": "CI/CD with GitHub Actions",
            "d": "Every push tested, every main-branch merge deployed. Automatically.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Pipeline anatomy: triggers, jobs, steps, and artifacts",
              "CI: lint, test, and build on every PR; CD: deploy on merge to main",
              "Secrets and environments: keeping tokens out of logs and code"
            ],
            "do": [
              "Add a CI workflow: install, lint, test, build on every PR",
              "Add a CD workflow that deploys main to your host",
              "Break the build on purpose and watch the PR go red"
            ],
            "tools": ["GitHub Actions", "Docker"],
            "res": [
              ["GitHub Actions docs", "https://docs.github.com/en/actions"],
              ["Deployment guides", "https://docs.github.com/en/actions/deployment/about-deployments"]
            ],
            "tip": "A pipeline that is always green is either perfect or not testing anything. Flaky-ignored tests are worse than no tests."
          },
          {
            "t": "Deploying to the Cloud",
            "d": "From localhost to a URL the world can reach.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Platform options: PaaS (Render/Fly/Vercel) vs VPS vs containers, and choosing simply",
              "Environment config: 12-factor env vars, secrets management, per-env settings",
              "Databases in production: managed Postgres, backups, and connection limits"
            ],
            "do": [
              "Deploy your full-stack app to a PaaS with a managed database",
              "Configure production env vars and secrets properly",
              "Set up automated backups and prove you can restore one"
            ],
            "tools": ["Render", "Fly.io", "Vercel", "Railway"],
            "res": [
              ["Fly.io docs", "https://fly.io/docs/"],
              ["Render docs", "https://render.com/docs"]
            ],
            "tip": "Start with the simplest platform that works. Kubernetes for a side project is a hobby, not a deployment strategy."
          },
          {
            "t": "HTTPS, DNS, and Domains",
            "d": "The unglamorous plumbing between your app and the world.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "DNS records: A, CNAME, and how names resolve to your server",
              "TLS: what certificates prove, and Let's Encrypt automation",
              "Reverse proxies: Nginx/Caddy terminating TLS and routing traffic"
            ],
            "do": [
              "Point a real domain at your app with proper DNS records",
              "Set up automatic HTTPS with Caddy or certbot",
              "Verify the full chain: DNS, TLS cert, security headers"
            ],
            "tools": ["Caddy", "Nginx", "Let's Encrypt", "Cloudflare"],
            "res": [
              ["Caddy docs", "https://caddyserver.com/docs/"],
              ["Let's Encrypt", "https://letsencrypt.org/"]
            ],
            "tip": "Caddy's automatic HTTPS exists; hand-rolling cert renewals in 2026 is choosing pain. Automate TLS or it will expire on a holiday."
          },
          {
            "t": "Monitoring and Logs",
            "d": "You cannot fix what you cannot see. Watch production like a hawk.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "The three pillars: logs (what happened), metrics (how much), traces (where slow)",
              "Alerting that works: symptom-based alerts, runbooks, and on-call sanity",
              "Error tracking: Sentry-style grouping so one bug is one issue, not 10k emails"
            ],
            "do": [
              "Add structured logging and ship logs to a central place",
              "Set up uptime checks and one alert with a runbook attached",
              "Integrate error tracking and fix the top error it finds"
            ],
            "tools": ["Sentry", "Grafana", "Better Stack", "OpenTelemetry"],
            "res": [
              ["Sentry", "https://sentry.io/welcome/"],
              ["OpenTelemetry", "https://opentelemetry.io/docs/"]
            ],
            "tip": "Alert on symptoms users feel (errors, latency), not on CPU graphs. Nobody ever got paged by a happy user."
          }
        ]
      },
      {
        "t": "System Thinking",
        "d": "See the whole machine: architecture, scaling, and security instincts.",
        "lv": 3,
        "children": [
          {
            "t": "System Design Basics",
            "d": "Think in boxes and arrows before writing code: the interview and real-world skill.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Core building blocks: load balancers, app servers, caches, queues, databases, CDNs",
              "Trade-off thinking: consistency vs availability, latency vs throughput, build vs buy",
              "Designing small systems: URL shortener, rate limiter, notification service"
            ],
            "do": [
              "Design a URL shortener end-to-end: API, schema, caching, scaling",
              "Design a rate limiter: algorithm choice and distributed counting",
              "Present one design and defend every component choice"
            ],
            "tools": ["Excalidraw", "draw.io"],
            "res": [
              ["System design primer", "https://github.com/donnemartin/system-design-primer"],
              ["ByteByteGo", "https://bytebytego.com/"]
            ],
            "tip": "Beginners list components; seniors discuss trade-offs. 'Why Redis here and not Postgres?' is the whole interview."
          },
          {
            "t": "Caching and CDNs at Scale",
            "d": "Full-stack caching: browser, CDN, app, and database, working as one system.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "The caching layers: browser cache, CDN edge, app cache, DB query cache",
              "Cache invalidation strategies across layers without serving stale lies",
              "CDN for dynamic content: edge caching rules and purging APIs"
            ],
            "do": [
              "Map every cache layer of your app and its TTL/invalidation rule",
              "Serve static assets from a CDN with hashed filenames",
              "Implement a purge-on-deploy for CDN-cached pages"
            ],
            "tools": ["Cloudflare", "Redis", "Varnish"],
            "res": [
              ["MDN HTTP caching", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"],
              ["Cloudflare learning", "https://www.cloudflare.com/learning/cdn/"]
            ],
            "tip": "Caching without an invalidation plan is a future outage wearing a performance costume. Write the purge path first."
          },
          {
            "t": "Scaling a Monolith",
            "d": "Your app got popular. Scale it without rewriting everything.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "The scaling ladder: bigger box, read replicas, caching, async work, then split",
              "Statelessness: the prerequisite for horizontal scaling",
              "When (not) to go microservices: the organizational and operational price tag"
            ],
            "do": [
              "Load-test your app, find the bottleneck, and fix it twice",
              "Make the app stateless and run 3 instances behind a load balancer",
              "Write the 'we need microservices' decision doc: costs vs benefits"
            ],
            "tools": ["k6", "Nginx", "Docker"],
            "res": [
              ["k6", "https://k6.io/docs/"],
              ["Monolith first (Martin Fowler)", "https://martinfowler.com/bliki/MonolithFirst.html"]
            ],
            "tip": "Microservices solve organizational scaling, not performance. A well-tuned monolith outperforms a badly-split distributed system."
          },
          {
            "t": "Security Basics for Full-Stack",
            "d": "The OWASP-flavored minimum: do not be the easy target.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Injection, XSS, CSRF: how each works and the one-line defense for each",
              "Auth security: password hashing, session hygiene, and rate-limiting login",
              "Headers and config: CSP, HSTS, secure cookies, and dependency hygiene"
            ],
            "do": [
              "Exploit a deliberately vulnerable app (Juice Shop), then fix each vuln",
              "Add security headers and verify with an online scanner",
              "Audit dependencies and set up automated vulnerability alerts"
            ],
            "tools": ["OWASP Juice Shop", "ZAP", "Snyk", "Dependabot"],
            "res": [
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
              ["OWASP Juice Shop", "https://owasp.org/www-project-juice-shop/"]
            ],
            "tip": "Security is layers, not a feature. Input validation alone, without output encoding and auth checks, is a Maginot Line."
          },
          {
            "t": "Observability: Metrics, Logs, Traces",
            "d": "Production questions answered in minutes, not war rooms.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Metrics: RED (rate, errors, duration) and USE (utilization, saturation, errors)",
              "Structured logs and correlation IDs: following one request everywhere",
              "Tracing across services: the full-stack version of 'where is it slow'"
            ],
            "do": [
              "Instrument your app with RED metrics and a dashboard",
              "Add correlation IDs from frontend through backend to DB logs",
              "Trace one slow user action end-to-end and fix what you find"
            ],
            "tools": ["Prometheus", "Grafana", "OpenTelemetry", "Loki"],
            "res": [
              ["OpenTelemetry", "https://opentelemetry.io/docs/"],
              ["Google SRE: monitoring", "https://sre.google/sre-book/monitoring-distributed-systems/"]
            ],
            "tip": "Log lines without correlation IDs are confetti. One ID tying frontend, backend, and DB turns chaos into a story."
          }
        ]
      },
      {
        "t": "Ship It Solo",
        "d": "The full-stack superpower: taking an idea from zero to users, alone.",
        "lv": 3,
        "children": [
          {
            "t": "Scoping an MVP",
            "d": "The art of cutting: ship the smallest thing users can love.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "MVP thinking: the core loop first, everything else is version two",
              "Cutting without killing: what to defer, what to fake, what is non-negotiable",
              "Validation: landing pages, waitlists, and talking to users before building"
            ],
            "do": [
              "Write a one-page spec for a product idea with explicit non-goals",
              "Cut the scope in half, then cut it in half again",
              "Get 5 real humans to react to the idea before writing code"
            ],
            "tools": ["Notion", "Figma", "Tally"],
            "res": [
              ["Y Combinator: MVP", "https://www.ycombinator.com/library"],
              ["The Mom Test (summary)", "https://momtestbook.com/"]
            ],
            "tip": "If your MVP takes 3 months, it is not an MVP. Solo builders win by shipping in weeks, learning, and iterating."
          },
          {
            "t": "Capstone: Build and Deploy a Full App",
            "d": "Everything combined: a real product, live on the internet, built by you.",
            "lv": 3,
            "time": "~4w",
            "learn": [
              "Full lifecycle: spec, data model, API, frontend, auth, deploy, monitor",
              "Production hardening: validation, error handling, backups, and basic security",
              "Telling the story: README, demo video, and metrics that prove it works"
            ],
            "do": [
              "Ship a full-stack app: auth, database, background jobs, deployed with CI/CD",
              "Load-test it, fix the bottlenecks, and document the numbers",
              "Write the README as if a hiring manager reads only that"
            ],
            "tools": ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Fly.io"],
            "res": [
              ["roadmap.sh full-stack", "https://roadmap.sh/full-stack"],
              ["The 12-factor app", "https://12factor.net/"]
            ],
            "badge": "PROJECT",
            "tip": "Finished and deployed beats perfect and local. Ship the ugly version, then iterate where users actually click."
          },
          {
            "t": "Docs and Handover",
            "d": "Code that only you understand is a liability, even to future you.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "README anatomy: what it does, how to run it, how to deploy it",
              "ADRs: recording why decisions were made, not just what was built",
              "Runbooks: the 2am guide for when production misbehaves"
            ],
            "do": [
              "Write a README that lets a stranger run your capstone in 10 minutes",
              "Document 3 architecture decisions as ADRs",
              "Write one runbook for your most likely production incident"
            ],
            "tools": ["Markdown", "Docusaurus"],
            "res": [
              ["ADR GitHub org", "https://adr.github.io/"],
              ["Write good READMEs", "https://www.makeareadme.com/"]
            ],
            "tag": "opt",
            "tip": "Nobody reads docs until the outage. Write them anyway; future-you at 2am will be grateful."
          },
          {
            "t": "Portfolio and Next Steps",
            "d": "Turn skills into opportunities: show the work, keep growing.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Portfolio strategy: 2-3 deep projects beat 15 tutorial clones",
              "Telling the story: problem, approach, trade-offs, results with numbers",
              "What is next: TypeScript depth, testing culture, or specializing frontend/backend/DevOps"
            ],
            "do": [
              "Build a portfolio site showcasing your capstone with metrics and architecture",
              "Write one deep-dive article about a hard problem you solved",
              "Pick your next specialization and map its first 3 months"
            ],
            "tools": ["GitHub", "LinkedIn", "Astro"],
            "res": [
              ["roadmap.sh", "https://roadmap.sh/"],
              ["Astro", "https://astro.build/"]
            ],
            "tip": "Hiring managers skim. One deployed project with real users and real numbers beats a page of tutorial certificates."
          }
        ]
      }
    ]
  }
});
