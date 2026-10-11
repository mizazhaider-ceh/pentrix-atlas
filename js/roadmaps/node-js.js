/* Atlas roadmap data: Node.js (node-js)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "node-js",
  "title": "Node.js",
  "icon": "🟢",
  "color": "#0284c7",
  "kind": "skill",
  "tagline": "JavaScript beyond the browser.",
  "desc": "The Node.js runtime end to end: event loop, modules, streams, APIs with Express/Fastify, databases, testing, and production deployment.",
  "root": {
    "t": "Node.js",
    "d": "Server-side JavaScript: the runtime, its async core, and building real backends with it.",
    "children": [
      {
        "t": "Node.js Foundations",
        "d": "What Node is, installing it right, and how it differs from the browser.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Node.js & Why It Exists",
            "d": "V8 outside the browser: the runtime that made JavaScript full-stack.",
            "lv": 1,
            "time": "~2h",
            "tip": "Node is a runtime, not a framework and not a language. Express is a framework; JavaScript is the language; Node runs it.",
            "learn": [
              "V8 + libuv + the Node API layer: what the runtime is made of",
              "Why Node fits I/O-heavy workloads: non-blocking by design",
              "Where Node struggles: CPU-bound work and what to do about it"
            ],
            "do": [
              "Install Node and print process.version and process.platform",
              "Run the same script in Node and in a browser console; list what differs",
              "Start a 3-line HTTP server and hit it with curl"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Introduction", "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"],
              ["Node.js docs", "https://nodejs.org/en/docs"]
            ]
          },
          {
            "t": "Installing Node: nvm & LTS Lines",
            "d": "Version management done right — because projects disagree about Node versions.",
            "lv": 1,
            "time": "~2h",
            "tip": "Use nvm (or fnm) and an .nvmrc per project. Installing Node from your OS package manager leads to permission pain and version fights.",
            "learn": [
              "LTS vs Current: which line to pick (LTS for production, always)",
              "nvm/fnm: installing, switching, and .nvmrc files",
              "Verifying installs and managing global packages per version"
            ],
            "do": [
              "Install nvm, then install the current LTS and set a default",
              "Add an .nvmrc to a project and switch versions with one command",
              "Check which npm version ships with your Node and what changed in npm 11"
            ],
            "tools": ["nvm", "fnm", "Node.js"],
            "res": [
              ["Node.js releases", "https://nodejs.org/en/about/previous-releases"],
              ["nvm", "https://github.com/nvm-sh/nvm"]
            ]
          },
          {
            "t": "Running Code: CLI, REPL & Files",
            "d": "node, the REPL, flags, and how Node actually executes your file.",
            "lv": 1,
            "time": "~2h",
            "tip": "The REPL is a scratchpad, not a test suite. Great for probing APIs, terrible for anything you need to keep.",
            "learn": [
              "node script.js, node -e for one-liners, and the interactive REPL",
              "Useful flags: --watch, --inspect, --env-file",
              "How Node wraps your file in a module function (the real reason for module scope)"
            ],
            "do": [
              "Probe an unfamiliar API (e.g. os or path) interactively in the REPL",
              "Run a script with node --watch and edit it live",
              "Pass CLI arguments and read them from process.argv"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: How to run", "https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line"]
            ]
          },
          {
            "t": "Node vs the Browser",
            "d": "Same language, different world: what's available where, and why.",
            "lv": 1,
            "time": "~3h",
            "tip": "window and document don't exist in Node; require, process, and __dirname don't exist in browsers. Porting code means auditing every global.",
            "learn": [
              "Globals compared: window/document vs process/Buffer/__dirname",
              "Timers, fetch, and URL: the APIs both worlds now share",
              "Why frontend code can't just run on the server (and vice versa)"
            ],
            "do": [
              "List which of 10 common globals exist in Node vs your browser",
              "Move a fetch-based function between browser and Node and fix what breaks",
              "Explain to a rubber duck why localStorage code crashes in Node"
            ],
            "tools": ["Node.js", "Browser DevTools"],
            "res": [
              ["Node.js: Differences", "https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser"]
            ]
          },
          {
            "t": "Globals: process, Buffer & Friends",
            "d": "The objects available in every Node file without importing anything.",
            "lv": 1,
            "time": "~3h",
            "tip": "process.env values are always strings. PORT=3000 is '3000' — parse it before doing math.",
            "learn": [
              "process: argv, env, cwd(), exit codes, uptime",
              "Buffer: binary data as byte arrays (and why strings aren't enough)",
              "__dirname/__filename vs import.meta in ESM"
            ],
            "do": [
              "Write a script that reads config from process.env with sensible defaults",
              "Create a Buffer from a string in three encodings and compare the bytes",
              "Exit with different codes and read them in the shell with echo $?"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: process API", "https://nodejs.org/api/process.html"],
              ["Node.js: Buffer", "https://nodejs.org/api/buffer.html"]
            ]
          }
        ]
      },
      {
        "t": "Modules & npm",
        "d": "Organizing code, sharing it, and the package ecosystem that powers Node.",
        "lv": 1,
        "children": [
          {
            "t": "CommonJS: require & module.exports",
            "d": "Node's original module system — still everywhere in legacy and tooling code.",
            "lv": 1,
            "time": "~3h",
            "tip": "require is synchronous and cached. Requiring the same file twice returns the same object — that's how singleton patterns emerge.",
            "learn": [
              "require(), module.exports, and exports shorthand",
              "Module caching: why two requires share state",
              "The module wrapper function: why top-level variables stay private"
            ],
            "do": [
              "Split a script into three CommonJS modules with a clear dependency graph",
              "Demonstrate the require cache by mutating an exported object from two files",
              "Convert a script's globals into proper module exports"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Modules", "https://nodejs.org/api/modules.html"]
            ]
          },
          {
            "t": "ESM in Node: import & export",
            "d": "Modern modules in Node: the syntax, the file extensions, and the interop rules.",
            "lv": 1,
            "time": "~4h",
            "tip": "In ESM, __dirname is gone — use import.meta.url with fileURLToPath. This is the #1 migration gotcha.",
            "learn": [
              ".mjs vs .cjs, and the package.json type field that decides",
              "Named vs default exports, and importing CommonJS from ESM",
              "Top-level await and what it means for module graphs"
            ],
            "do": [
              "Convert a CommonJS project to ESM (type: module) and fix every breakage",
              "Import a CJS library from ESM and handle its default-export interop",
              "Recreate __dirname in ESM using import.meta.url"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: ESM", "https://nodejs.org/api/esm.html"]
            ]
          },
          {
            "t": "package.json Anatomy",
            "d": "The manifest every Node project carries — and every field that matters.",
            "lv": 1,
            "time": "~3h",
            "tip": "The exports field controls what consumers can import from your package. Without it, deep imports into your internals stay possible.",
            "learn": [
              "name, version, scripts, dependencies vs devDependencies",
              "main vs exports: controlling your package's public surface",
              "engines: declaring the Node version your code needs"
            ],
            "do": [
              "Hand-write a package.json from scratch and npm install it cleanly",
              "Add an exports map that exposes ./client and ./server entry points",
              "Set engines and watch npm warn on the wrong Node version"
            ],
            "tools": ["npm", "Node.js"],
            "res": [
              ["npm: package.json", "https://docs.npmjs.com/cli/v11/configuring-npm/package-json"]
            ]
          },
          {
            "t": "npm: Installing, Scripts & Semver",
            "d": "The registry workflow: installing, versioning, and automating with scripts.",
            "lv": 1,
            "time": "~4h",
            "tip": "^1.2.3 allows minor+patch updates; ~1.2.3 allows patch only. Know which one your lockfile is actually resolving.",
            "learn": [
              "npm install variants: -S, -D, -g, and what lands where",
              "Semver ranges and the lockfile's role in reproducible installs",
              "npm scripts: dev, build, test, and pre/post hooks"
            ],
            "do": [
              "Install, update, and remove packages; inspect what changed in package.json",
              "Write dev/build/start scripts that chain correctly",
              "Delete node_modules, reinstall from the lockfile, verify identical tree"
            ],
            "tools": ["npm"],
            "res": [
              ["npm docs", "https://docs.npmjs.com/"],
              ["Node.js: npm intro", "https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager"]
            ]
          },
          {
            "t": "npx & Modern Alternatives (pnpm, bun)",
            "d": "Running packages without installing — and the faster installers reshaping the ecosystem.",
            "lv": 2,
            "time": "~3h",
            "tip": "npx downloads on demand — convenient, but pin versions in CI. An unpinned npx today may fetch a different major tomorrow.",
            "learn": [
              "npx: executing binaries from the registry without a global install",
              "pnpm: content-addressable store, strict node_modules, monorepo workspaces",
              "When bun fits: speed-first runtimes and their compatibility story"
            ],
            "do": [
              "Scaffold a project with npx without installing the scaffolder globally",
              "Convert a project to pnpm and compare install time and disk usage",
              "Set up pnpm workspaces for a two-package monorepo"
            ],
            "tools": ["npx", "pnpm", "bun"],
            "res": [
              ["pnpm docs", "https://pnpm.io/"],
              ["npx docs", "https://docs.npmjs.com/cli/v11/commands/npx"]
            ]
          },
          {
            "t": "Environment Variables & dotenv",
            "d": "Configuration without hardcoding: env vars, .env files, and Node's --env-file.",
            "lv": 1,
            "time": "~3h",
            "tip": "Never commit .env. Add it to .gitignore on the same commit you create it — secrets in git history are forever.",
            "learn": [
              "process.env and the 12-factor config philosophy",
              "dotenv vs Node 20.6+'s native --env-file flag",
              "Validating env at startup so misconfiguration fails fast and loud"
            ],
            "do": [
              "Move three hardcoded secrets into a .env file loaded with --env-file",
              "Write a startup config validator that throws on missing required vars",
              "Add .env to .gitignore and provide a documented .env.example"
            ],
            "tools": ["Node.js", "dotenv"],
            "res": [
              ["dotenv", "https://github.com/motdotla/dotenv"],
              ["Node.js: --env-file", "https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs"]
            ]
          }
        ]
      },
      {
        "t": "The Async Runtime",
        "d": "The event loop, timers, emitters, and error handling — Node's beating heart.",
        "lv": 2,
        "children": [
          {
            "t": "The Event Loop, Deep Dive",
            "d": "Phases, queues, and libuv: understanding exactly when your code runs.",
            "lv": 2,
            "time": "~6h",
            "tip": "Node's event loop has phases (timers, poll, check...); the browser's doesn't. Porting mental models between them causes subtle bugs.",
            "learn": [
              "The phases: timers → pending → poll → check → close, and what runs in each",
              "libuv's thread pool: which operations actually leave the main thread",
              "Blocking the loop: how one sync loop stalls every connection"
            ],
            "do": [
              "Order the output of a script mixing setTimeout, setImmediate, fs.readFile, and promises",
              "Freeze an HTTP server with a blocking loop, then fix it by chunking the work",
              "Use --trace-event or clinic to visualize where time goes"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Event loop guide", "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"],
              ["Node.js: Don't block", "https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop"]
            ]
          },
          {
            "t": "Timers & the Microtask Queue",
            "d": "process.nextTick vs setImmediate vs setTimeout(0): the ordering everyone gets wrong once.",
            "lv": 2,
            "time": "~4h",
            "tip": "nextTick runs before the event loop continues — abusing it starves I/O. Prefer setImmediate when yielding to the loop.",
            "learn": [
              "nextTick queue vs promise microtasks vs the check phase (setImmediate)",
              "The canonical ordering puzzle and why it resolves that way",
              "Legitimate uses: deferring to let constructors finish, breaking recursion"
            ],
            "do": [
              "Predict and verify the order of nextTick, promise.then, setTimeout(0), setImmediate",
              "Starve the event loop with recursive nextTick, then fix it with setImmediate",
              "Use setImmediate to keep a server responsive during a long computation"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: nextTick vs setImmediate", "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"]
            ]
          },
          {
            "t": "EventEmitter: Node's Pub/Sub Core",
            "d": "on, emit, once — the pattern behind streams, servers, and most Node APIs.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always handle 'error' events on emitters. An unhandled 'error' event throws — by design, and it will crash your process.",
            "learn": [
              "Subscribing and emitting: on, once, off, emit",
              "The special 'error' event and listener-leak warnings",
              "Building your own emitter-based class for decoupled code"
            ],
            "do": [
              "Build a tiny chat-room emitter: join, message, leave events",
              "Trigger the MaxListenersExceededWarning on purpose, then fix it properly",
              "Crash a process with an unhandled emitter error, then add the handler"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Events", "https://nodejs.org/api/events.html"]
            ]
          },
          {
            "t": "Promises & async/await Patterns",
            "d": "Modern async in Node: promisify, parallel patterns, and async iteration.",
            "lv": 2,
            "time": "~5h",
            "tip": "util.promisify converts callback APIs to promises, but most core modules now ship promise versions under fs/promises and timers/promises.",
            "learn": [
              "fs/promises and timers/promises: the promise-native core APIs",
              "Parallel patterns: Promise.all, allSettled, and concurrency limits with p-limit",
              "for await...of: consuming async iterables and streams"
            ],
            "do": [
              "Rewrite a callback-style fs script using fs/promises and async/await",
              "Download 20 URLs with a concurrency limit of 5",
              "Stream a large file line-by-line with for await...of"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: fs/promises", "https://nodejs.org/api/fs.html#promises-api"],
              ["Node.js: async work", "https://nodejs.org/en/learn/asynchronous-work"]
            ]
          },
          {
            "t": "Error Handling: Sync, Async & Fatal",
            "d": "Error-first callbacks, promise rejections, and the crashes you must plan for.",
            "lv": 2,
            "time": "~5h",
            "tip": "uncaughtException is a last-resort alarm, not a recovery strategy. Log, clean up, and exit — then let your process manager restart you.",
            "learn": [
              "Operational vs programmer errors: retry the former, crash on the latter",
              "Unhandled rejections and uncaught exceptions: what kills a process",
              "Graceful shutdown: draining connections on SIGTERM"
            ],
            "do": [
              "Create an unhandled rejection and watch Node's default behavior",
              "Add centralized error middleware that distinguishes 4xx from 5xx",
              "Implement graceful shutdown: stop accepting, finish in-flight, then exit"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Error handling", "https://nodejs.org/en/learn/asynchronous-work/handling-errors"],
              ["Node.js: process events", "https://nodejs.org/api/process.html"]
            ]
          }
        ]
      },
      {
        "t": "Files, Streams & the Command Line",
        "d": "The filesystem, binary data, streams, and building tools people run in terminals.",
        "lv": 2,
        "children": [
          {
            "t": "fs: Reading & Writing Files",
            "d": "The filesystem module: sync vs async, flags, and watching for changes.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never use fs.readFileSync in a server request handler. Sync fs is for startup scripts and CLIs, not for serving traffic.",
            "learn": [
              "fs/promises: readFile, writeFile, mkdir, readdir, stat",
              "Flags and modes: append vs overwrite, permissions",
              "fs.watch and its platform quirks"
            ],
            "do": [
              "Build a script that walks a directory tree and reports file sizes",
              "Implement safe file writing: write temp + rename for atomicity",
              "Watch a directory and log changes with debouncing"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: fs", "https://nodejs.org/api/fs.html"]
            ]
          },
          {
            "t": "path & os: Portable Paths",
            "d": "Joining, resolving, and normalizing paths without string-concatenation bugs.",
            "lv": 2,
            "time": "~3h",
            "tip": "Use path.join for building paths and path.resolve for absolute ones. String concatenation breaks on Windows separators.",
            "learn": [
              "join, resolve, basename, dirname, extname, relative",
              "path.posix vs path.win32 for cross-platform correctness",
              "os: homedir, tmpdir, cpus, platform for environment-aware code"
            ],
            "do": [
              "Rewrite three string-concatenated paths with path.join",
              "Resolve a user-supplied path and reject it if it escapes a base directory",
              "Write a cross-platform temp-file helper using os.tmpdir()"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: path", "https://nodejs.org/api/path.html"],
              ["Node.js: os", "https://nodejs.org/api/os.html"]
            ]
          },
          {
            "t": "Buffers: Binary Data",
            "d": "Bytes, encodings, and why text isn't always text.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always specify encodings explicitly (utf8, base64, hex). Implicit encoding assumptions are how mojibake happens.",
            "learn": [
              "Creating buffers: from strings, arrays, and alloc for zeroed memory",
              "Encodings: utf8, base64, hex — converting between them",
              "Why Buffer.alloc is safe and new Buffer was deprecated"
            ],
            "do": [
              "Encode a string to base64 and decode it back, verifying round-trip",
              "Read a binary file header's magic bytes with buffer slicing",
              "Compare Buffer.alloc vs Buffer.allocUnsafe and explain the difference"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Buffer", "https://nodejs.org/api/buffer.html"]
            ]
          },
          {
            "t": "Streams & pipeline",
            "d": "Processing data in chunks: the pattern that handles gigabytes with megabytes of RAM.",
            "lv": 2,
            "time": "~6h",
            "tip": "Always use stream.pipeline (or pipeline from stream/promises) instead of .pipe() — it propagates errors and cleans up properly.",
            "learn": [
              "Readable, Writable, Duplex, Transform: the four stream types",
              "Backpressure: why streams pause producers when consumers lag",
              "pipeline: composing streams with proper error handling"
            ],
            "do": [
              "Copy a large file with streams and compare memory use vs readFile",
              "Build a Transform stream that uppercases text line by line",
              "Chain download → gunzip → parse with pipeline and handle a mid-stream error"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Stream", "https://nodejs.org/api/stream.html"]
            ]
          },
          {
            "t": "Building CLIs: commander, chalk & inquirer",
            "d": "Command-line tools people enjoy: args, colors, prompts, and polish.",
            "lv": 2,
            "time": "~5h",
            "tip": "A great CLI fails fast with a helpful message. Validate args up front — don't crash halfway through a 10-minute operation.",
            "learn": [
              "Parsing args and options with commander",
              "Colored output with chalk and spinners/progress bars",
              "Interactive prompts with inquirer (and when to offer --yes for scripts)"
            ],
            "do": [
              "Build a file-renamer CLI with dry-run mode and colored diff output",
              "Add an interactive setup wizard with validation on each answer",
              "Make every command scriptable: --json output and non-interactive flags"
            ],
            "tools": ["commander", "chalk", "inquirer"],
            "res": [
              ["commander", "https://github.com/tj/commander"],
              ["chalk", "https://github.com/chalk/chalk"]
            ]
          }
        ]
      },
      {
        "t": "Building APIs",
        "d": "HTTP servers, Express, Fastify, middleware, validation, and auth.",
        "lv": 2,
        "children": [
          {
            "t": "The http Module: Servers from Scratch",
            "d": "No framework: raw request/response, routing by hand, and why you'd never ship this.",
            "lv": 2,
            "time": "~4h",
            "tip": "Building one raw server teaches you what frameworks abstract. After that, use a framework — hand-rolled routing doesn't scale.",
            "learn": [
              "http.createServer: the request/response cycle",
              "Manual routing on method + url, and parsing bodies by hand",
              "What frameworks add: routing, middleware, error handling, parsing"
            ],
            "do": [
              "Serve JSON on GET /health and echo bodies on POST /echo",
              "Parse a JSON body manually from data/end events",
              "Benchmark it, then compare with an Express version of the same routes"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: http", "https://nodejs.org/api/http.html"]
            ]
          },
          {
            "t": "Express: The Classic",
            "d": "The framework that defined Node APIs: routing, middleware, and the ecosystem.",
            "lv": 2,
            "time": "~6h",
            "tip": "Middleware order is everything in Express. app.use runs top-down — put error handlers last and auth before protected routes.",
            "learn": [
              "Routing: app.get/post, route params, query strings",
              "Middleware: the (req, res, next) chain and error-handling middleware",
              "The Express 5 changes: what modernized in the long-awaited major"
            ],
            "do": [
              "Build a REST API with CRUD routes, JSON bodies, and proper status codes",
              "Write logging, auth, and error-handling middleware from scratch",
              "Structure the app: routes, controllers, and services in separate modules"
            ],
            "tools": ["Express"],
            "res": [
              ["Express docs", "https://expressjs.com/"],
              ["Express guide", "https://expressjs.com/en/guide/routing.html"]
            ]
          },
          {
            "t": "Fastify: The Speedster",
            "d": "Schema-first, high-performance APIs — the modern Express alternative.",
            "lv": 2,
            "time": "~5h",
            "tip": "Fastify's schemas do double duty: they validate input AND serialize output. Define them and get both for free.",
            "learn": [
              "Routes, plugins, and encapsulation contexts",
              "JSON Schema validation and serialization built in",
              "Hooks: the lifecycle points where cross-cutting logic lives"
            ],
            "do": [
              "Rebuild your Express CRUD API in Fastify with schemas",
              "Add request validation that rejects bad bodies with 400s automatically",
              "Benchmark both versions and see where the performance comes from"
            ],
            "tools": ["Fastify"],
            "res": [
              ["Fastify docs", "https://fastify.dev/docs/latest/"]
            ]
          },
          {
            "t": "Validation: Zod & Friends",
            "d": "Never trust the client: runtime schemas that validate and type your input.",
            "lv": 2,
            "time": "~4h",
            "tip": "Validate at the boundary (API edge), then trust the types inside. Validating everywhere is noise; validating nowhere is a vulnerability.",
            "learn": [
              "Zod schemas: objects, coercion, refinement, and error messages",
              "Deriving TypeScript types from schemas (z.infer)",
              "Where validation lives: middleware vs controller vs service"
            ],
            "do": [
              "Write Zod schemas for three endpoints and wire them as middleware",
              "Craft malicious payloads (huge strings, nested objects) and watch them rejected",
              "Use z.infer to keep your handler types in sync with schemas automatically"
            ],
            "tools": ["Zod", "Express", "Fastify"],
            "res": [
              ["Zod docs", "https://zod.dev/"]
            ]
          },
          {
            "t": "Authentication: JWT & Sessions",
            "d": "Who are you? Password hashing, tokens, sessions, and the trade-offs.",
            "lv": 2,
            "time": "~6h",
            "tip": "Hash with bcrypt/argon2, never store plain passwords, and keep JWTs short-lived with refresh rotation. Auth shortcuts become breach headlines.",
            "learn": [
              "Password hashing with bcrypt/argon2: work factors and verification",
              "JWT: structure, signing, expiry — and why logout is hard",
              "Sessions vs tokens: when server-side sessions win"
            ],
            "do": [
              "Implement register/login with argon2 hashing and a sessions table",
              "Add JWT access tokens (15 min) + rotating refresh tokens",
              "Protect routes with auth middleware and test with expired/tampered tokens"
            ],
            "tools": ["jsonwebtoken", "argon2", "passport.js"],
            "res": [
              ["jsonwebtoken", "https://github.com/auth0/node-jsonwebtoken"],
              ["OWASP: Authentication", "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "Consuming APIs: fetch, axios & Retries",
            "d": "Calling other services well: timeouts, retries, and circuit breakers.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every outbound call needs a timeout. A service that hangs forever on a dead dependency is a service that cascades failures.",
            "learn": [
              "Node's native fetch (undici) vs axios: when each shines",
              "Retries with exponential backoff and jitter — and when NOT to retry",
              "Circuit breakers: failing fast when a dependency is down"
            ],
            "do": [
              "Build an API client with timeout, 3 retries, and backoff",
              "Add a circuit breaker that trips after 5 consecutive failures",
              "Log and metric outbound latency so slow dependencies become visible"
            ],
            "tools": ["undici", "axios"],
            "res": [
              ["axios docs", "https://axios-http.com/docs/intro"],
              ["Node.js: undici", "https://nodejs.org/api/globals.html#fetch"]
            ]
          }
        ]
      },
      {
        "t": "Data: Databases, Caching & Queues",
        "d": "Persisting and moving data: SQL, NoSQL, Redis, and background jobs.",
        "lv": 2,
        "children": [
          {
            "t": "Choosing Your Database",
            "d": "SQL vs NoSQL isn't a war — it's a decision matrix. Learn to run it.",
            "lv": 2,
            "time": "~3h",
            "tip": "Default to Postgres unless you have a specific reason not to. It's the boring choice that handles 95% of apps brilliantly.",
            "learn": [
              "Relational vs document vs key-value: data shape drives the choice",
              "ACID, transactions, and when consistency actually matters",
              "Connection pooling: why opening a connection per request kills you"
            ],
            "do": [
              "Score three candidate databases for a sample app (blog, chat, analytics)",
              "Demonstrate a pool exhausting under load vs reusing connections",
              "Write the same query in SQL and in a document query language"
            ],
            "tools": ["PostgreSQL", "MongoDB", "Redis"],
            "res": [
              ["Prisma: choosing a DB", "https://www.prisma.io/dataguide"]
            ]
          },
          {
            "t": "PostgreSQL with Node",
            "d": "The workhorse: queries, pooling, and migrations with node-postgres.",
            "lv": 2,
            "time": "~5h",
            "tip": "Always use parameterized queries ($1, $2). String-interpolated SQL is how injection happens — no exceptions.",
            "learn": [
              "node-postgres: pools, parameterized queries, and transactions",
              "Migrations: versioning your schema like code",
              "Indexes and EXPLAIN: finding why a query is slow"
            ],
            "do": [
              "Build a users table with a pool, parameterized CRUD, and a transaction",
              "Write a migration that adds a column with a safe backfill",
              "EXPLAIN a slow query, add the missing index, and measure the difference"
            ],
            "tools": ["node-postgres", "PostgreSQL"],
            "res": [
              ["node-postgres docs", "https://node-postgres.com/"]
            ]
          },
          {
            "t": "MongoDB with Mongoose",
            "d": "Document modeling: schemas, validation, and the queries you'll actually run.",
            "lv": 2,
            "time": "~5h",
            "tip": "Design documents around how you read them, not how you'd normalize them in SQL. Embed what you query together.",
            "learn": [
              "Schemas, models, and built-in validation in Mongoose",
              "Embedding vs referencing: the core document-design decision",
              "Indexes, population, and aggregation basics"
            ],
            "do": [
              "Model a blog (posts, comments, authors) two ways and compare query patterns",
              "Add schema validation that rejects bad documents at the ODM layer",
              "Write an aggregation pipeline for 'top authors by post count'"
            ],
            "tools": ["Mongoose", "MongoDB"],
            "res": [
              ["Mongoose docs", "https://mongoosejs.com/docs/"]
            ]
          },
          {
            "t": "Prisma: The Modern ORM",
            "d": "Type-safe database access with a schema-first workflow.",
            "lv": 2,
            "time": "~5h",
            "tip": "Prisma's schema is the single source of truth — generate the client and migrations from it, never hand-edit generated code.",
            "learn": [
              "The Prisma schema: models, relations, and field attributes",
              "Migrations workflow: dev, deploy, and baselining existing DBs",
              "The generated client: type-safe queries with autocomplete"
            ],
            "do": [
              "Define a schema with two related models and run your first migration",
              "Rewrite raw SQL queries as Prisma client calls",
              "Seed the database and write a script that exercises every relation"
            ],
            "tools": ["Prisma", "PostgreSQL"],
            "res": [
              ["Prisma docs", "https://www.prisma.io/docs"]
            ]
          },
          {
            "t": "Redis: Caching & Sessions",
            "d": "The in-memory Swiss army knife: cache, sessions, rate limits, pub/sub.",
            "lv": 2,
            "time": "~4h",
            "tip": "Cache with a TTL and a cache-aside pattern. A cache without expiry is a stale-data bug waiting for production.",
            "learn": [
              "Strings, hashes, sets, sorted sets: picking the right structure",
              "Cache-aside pattern with TTLs and invalidation on writes",
              "Beyond cache: sessions, rate limiting, and pub/sub"
            ],
            "do": [
              "Cache expensive API responses with a 60s TTL and measure the hit rate",
              "Implement a sliding-window rate limiter with Redis",
              "Store sessions in Redis so they survive server restarts"
            ],
            "tools": ["Redis", "ioredis"],
            "res": [
              ["Redis docs", "https://redis.io/docs/latest/"]
            ]
          },
          {
            "t": "Background Jobs & Queues (BullMQ)",
            "d": "Work that shouldn't block requests: emails, processing, retries — asynchronously.",
            "lv": 3,
            "time": "~5h",
            "tip": "Make jobs idempotent: if a job runs twice (and it will), the result should be the same as running it once.",
            "learn": [
              "Why queues: decoupling slow work from HTTP responses",
              "BullMQ: producers, workers, delayed and repeating jobs",
              "Retries, backoff, dead-letter handling, and job idempotency"
            ],
            "do": [
              "Move an email-sending endpoint to a queue with a worker process",
              "Configure retries with exponential backoff for a flaky job",
              "Build a scheduled nightly report job with repeat options"
            ],
            "tools": ["BullMQ", "Redis"],
            "res": [
              ["BullMQ docs", "https://docs.bullmq.io/"]
            ]
          }
        ]
      },
      {
        "t": "Production Node",
        "d": "Testing, logging, scaling, debugging, securing, and shipping Node to the real world.",
        "lv": 3,
        "children": [
          {
            "t": "Testing: node:test, Vitest & Jest",
            "d": "Unit, integration, and API tests — proving your backend works.",
            "lv": 3,
            "time": "~6h",
            "tip": "Test your API through HTTP (supertest-style), not by calling handlers directly. It exercises routing, middleware, and serialization too.",
            "learn": [
              "node:test: the built-in runner and when it's enough",
              "Vitest/Jest: mocks, coverage, and the richer ecosystem",
              "API testing: spinning up the app and asserting on real responses"
            ],
            "do": [
              "Write unit tests for your service layer with mocked database calls",
              "Add API tests that hit real endpoints against a test database",
              "Set up coverage thresholds in CI and keep them green"
            ],
            "tools": ["Vitest", "node:test", "supertest"],
            "res": [
              ["Node.js: test runner", "https://nodejs.org/api/test.html"],
              ["Vitest docs", "https://vitest.dev/guide/"]
            ]
          },
          {
            "t": "Logging Done Right (Pino)",
            "d": "Structured JSON logs: the difference between debugging and guessing in production.",
            "lv": 3,
            "time": "~4h",
            "tip": "Log structured JSON with request IDs, not pretty strings. Humans read logs in dev; machines read them in production.",
            "learn": [
              "Log levels and why debug/info/warn/error discipline matters",
              "Structured logging with Pino: JSON, child loggers, request correlation",
              "What never to log: passwords, tokens, full PII"
            ],
            "do": [
              "Replace console.log with Pino across an app, adding request IDs",
              "Configure pretty-printing for dev and JSON for production",
              "Redact sensitive fields automatically with Pino's redact option"
            ],
            "tools": ["Pino", "Winston"],
            "res": [
              ["Pino docs", "https://github.com/pinojs/pino"]
            ]
          },
          {
            "t": "Keeping Apps Alive: PM2 & systemd",
            "d": "Restarts, clustering, and zero-downtime deploys for long-running processes.",
            "lv": 3,
            "time": "~4h",
            "tip": "Your app will crash. Plan for it: a process manager restarts it, health checks route around it, and logs explain it.",
            "learn": [
              "PM2: process management, clustering, log rotation, startup scripts",
              "systemd units: the OS-native alternative on Linux servers",
              "Health checks and graceful restarts"
            ],
            "do": [
              "Run your API under PM2 in cluster mode and kill a worker to watch recovery",
              "Write a systemd unit file for a Node service",
              "Add a /health endpoint and wire it to your deploy checks"
            ],
            "tools": ["PM2"],
            "res": [
              ["PM2 docs", "https://pm2.keymetrics.io/docs/usage/quick-start/"]
            ]
          },
          {
            "t": "Scaling: Cluster & Worker Threads",
            "d": "Using all your cores: multi-process and multi-threaded Node.",
            "lv": 3,
            "time": "~5h",
            "tip": "Cluster scales I/O across cores; worker threads offload CPU. Using workers for I/O or cluster for CPU math misses the point of each.",
            "learn": [
              "The cluster module: one port, many processes, OS load balancing",
              "worker_threads: true parallelism for CPU-bound work",
              "Child processes for running external commands safely"
            ],
            "do": [
              "Cluster an API across all cores and load-test the throughput gain",
              "Move image hashing into a worker thread and keep the event loop free",
              "Spawn a child process for a shell tool and stream its output"
            ],
            "tools": ["Node.js"],
            "res": [
              ["Node.js: Cluster", "https://nodejs.org/api/cluster.html"],
              ["Node.js: Worker threads", "https://nodejs.org/api/worker_threads.html"]
            ]
          },
          {
            "t": "Debugging & Profiling (node --inspect)",
            "d": "Finding production bugs: inspector, heap snapshots, and flame graphs.",
            "lv": 3,
            "time": "~5h",
            "tip": "Reproduce with the smallest possible script first. Debugging a full app for a bug you can trigger in 10 lines wastes days.",
            "learn": [
              "--inspect and Chrome DevTools for Node: breakpoints in server code",
              "Heap snapshots: finding memory leaks in long-running processes",
              "CPU profiling: flame graphs that show where time actually goes"
            ],
            "do": [
              "Debug a live server with breakpoints via chrome://inspect",
              "Leak memory deliberately (growing global cache), find it in a heap snapshot",
              "Profile a slow endpoint and optimize the actual hot function"
            ],
            "tools": ["Node.js", "Chrome DevTools"],
            "res": [
              ["Node.js: Debugging", "https://nodejs.org/en/learn/getting-started/debugging"]
            ]
          },
          {
            "t": "Security Hardening",
            "d": "Helmet, rate limiting, injection defense — the checklist before you expose a port.",
            "lv": 3,
            "time": "~5h",
            "tip": "Security is layers: headers, validation, auth, rate limits, dependency audits. No single one is sufficient; together they're formidable.",
            "learn": [
              "Helmet: secure HTTP headers with one middleware",
              "Rate limiting and input validation as abuse prevention",
              "Dependency auditing, secrets management, and the OWASP Top 10 for APIs"
            ],
            "do": [
              "Add Helmet and rate limiting to an API; verify headers with curl",
              "Run npm audit and fix or justify every high-severity finding",
              "Attack your own API: try injection, oversized bodies, and auth bypass"
            ],
            "tools": ["Helmet", "express-rate-limit"],
            "res": [
              ["Helmet", "https://helmetjs.github.io/"],
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"]
            ]
          },
          {
            "t": "Deploying: Docker & CI",
            "d": "Shipping Node properly: multi-stage Docker builds and a CI pipeline.",
            "lv": 3,
            "time": "~6h",
            "tip": "Use the official node:24-alpine image, run as a non-root user, and keep devDependencies out of the production image.",
            "learn": [
              "Multi-stage Dockerfiles: small, secure production images",
              "CI pipeline: install, lint, typecheck, test, build, deploy",
              "Runtime config: env vars, health checks, and log shipping"
            ],
            "do": [
              "Write a multi-stage Dockerfile and compare image sizes",
              "Build a GitHub Actions pipeline that runs your full check suite",
              "Deploy and verify: health endpoint, logs, and a rollback plan"
            ],
            "tools": ["Docker", "GitHub Actions"],
            "res": [
              ["Node.js: Docker guide", "https://nodejs.org/en/docs/guides/nodejs-docker-webapp"],
              ["Docker docs", "https://docs.docker.com/"]
            ]
          },
          {
            "t": "Capstone: Production-Ready API",
            "d": "The full journey: a secure, tested, documented API running in Docker.",
            "lv": 3,
            "time": "~3w",
            "tip": "Production-ready means boring in the best way: predictable, observable, and recoverable. Excitement in prod is incidents.",
            "learn": [
              "Architecture: layering, config, and error conventions",
              "Documentation: OpenAPI specs generated from your code",
              "Operability: health checks, structured logs, metrics"
            ],
            "do": [
              "Build a complete API (auth, validation, database, queues) with Fastify or Express",
              "Add tests, Pino logging, Helmet, rate limiting, and Docker",
              "Document with OpenAPI and deploy behind CI — then load-test it"
            ],
            "tools": ["Fastify", "Prisma", "Docker", "Pino", "Vitest"],
            "res": [
              ["Node.js docs", "https://nodejs.org/en/docs"],
              ["Fastify docs", "https://fastify.dev/docs/latest/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
