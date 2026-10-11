/* Atlas roadmap data: Laravel (laravel)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "laravel",
  "title": "Laravel",
  "icon": "🔥",
  "color": "#dc2626",
  "desc": "The PHP framework for artisans: routing, Eloquent, Blade, queues, authentication, testing with Pest, and shipping Laravel apps to production.",
  "kind": "skill",
  "root": {
    "t": "Laravel",
    "d": "Build modern PHP applications with Laravel: from the request lifecycle to queues, auth, and production deployment.",
    "children": [
      {
        "t": "PHP & Laravel Setup",
        "d": "Why frameworks, modern PHP, Composer, and getting Laravel running locally.",
        "lv": 1,
        "children": [
          {
            "t": "Why Web Frameworks?",
            "d": "What a framework gives you over raw PHP: routing, structure, and solved problems.",
            "lv": 1,
            "time": "~2h",
            "tip": "Frameworks do not make you faster on day one; they make you faster on day one hundred. The structure pays off when the app grows past what fits in your head.",
            "learn": [
              "The problems every web app repeats: routing, input, sessions, database, security",
              "What Laravel bundles: the framework vs first-party packages vs the ecosystem",
              "Laravel vs Symfony vs raw PHP: when each is the honest choice"
            ],
            "do": [
              "Write a raw PHP page that reads a query param and queries MySQL manually",
              "List every security concern you had to handle yourself (escaping, SQL injection)",
              "Compare that file with the equivalent Laravel route and controller"
            ],
            "tools": ["PHP", "Laravel"],
            "res": [
              ["Laravel documentation", "https://laravel.com/docs"],
              ["What is Laravel", "https://laravel.com/"]
            ]
          },
          {
            "t": "Modern PHP 8.3+: What Laravel Expects",
            "d": "The PHP you need for Laravel 13: types, enums, attributes, and the 8.x feature set.",
            "lv": 1,
            "time": "~1d",
            "tip": "Laravel 13 requires PHP 8.3 minimum. Type everything: typed properties, return types, and union types turn runtime mysteries into editor errors.",
            "learn": [
              "PHP 8.x essentials: named arguments, match, enums, readonly, attributes",
              "Strict types (declare(strict_types=1)) and why Laravel code uses them",
              "Composer autoloading and PSR-4 namespaces"
            ],
            "do": [
              "Check php -v and confirm 8.3 or newer",
              "Write a class using enums, readonly properties, and a match expression",
              "Enable strict types in a file and fix the TypeErrors that surface"
            ],
            "tools": ["PHP"],
            "res": [
              ["PHP documentation", "https://www.php.net/"],
              ["PHP 8.3 migration guide", "https://www.php.net/manual/en/migration83.php"]
            ]
          },
          {
            "t": "Composer: PHP's Package Manager",
            "d": "Installing packages, autoloading, and the composer.json/composer.lock contract.",
            "lv": 1,
            "time": "~3h",
            "tip": "Commit composer.lock, always. Without the lock file, composer install resolves fresh versions on every machine and your deploys become a lottery.",
            "learn": [
              "composer.json vs composer.lock and what install vs update actually do",
              "Semantic versioning constraints (^, ~) and Packagist",
              "Autoloading: PSR-4, classmap, and files"
            ],
            "do": [
              "Create a project, require a package, and read the lock file diff",
              "Run composer install on a fresh clone and confirm identical versions",
              "Audit dependencies with composer audit"
            ],
            "tools": ["Composer"],
            "res": [
              ["Composer", "https://getcomposer.org/"],
              ["Packagist", "https://packagist.org/"]
            ]
          },
          {
            "t": "Installing Laravel: Herd, Sail & create-project",
            "d": "Getting a working Laravel app: Herd for zero-config local dev, Sail for Docker, or plain create-project.",
            "lv": 1,
            "time": "~3h",
            "tip": "Use Herd if you are on macOS or Windows: PHP, Nginx, and DNS just work with zero Docker overhead. Reach for Sail when the team needs identical Linux environments.",
            "learn": [
              "Laravel Herd: zero-config PHP/Nginx/DNS on macOS and Windows",
              "Laravel Sail: the Docker dev environment and its services",
              "composer create-project laravel/laravel and the installer"
            ],
            "do": [
              "Install Laravel via Herd (or Sail) and open the welcome page",
              "Run php artisan about and read the environment report",
              "Start Sail's MySQL and Redis services and connect from the app"
            ],
            "tools": ["Laravel Herd", "Laravel Sail", "Docker"],
            "res": [
              ["Laravel Herd", "https://herd.laravel.com/"],
              ["Laravel Sail", "https://laravel.com/docs/sail"],
              ["Laravel installation", "https://laravel.com/docs/installation"]
            ]
          },
          {
            "t": "Artisan: Your Command Line",
            "d": "Laravel's CLI: generators, migrations, queues, and writing your own commands.",
            "lv": 1,
            "time": "~3h",
            "tip": "Generate, do not hand-write: php artisan make:model -mfc creates the model, migration, factory, and controller in one consistent shot. Consistency is the whole point.",
            "learn": [
              "Generators: make:model, make:controller, make:migration, and the -mfc flags",
              "Daily commands: serve, migrate, tinker, route:list, queue:work",
              "Writing custom Artisan commands with arguments, options, and output"
            ],
            "do": [
              "Generate a model with migration, factory, seeder, and controller in one command",
              "Explore your app in tinker: create and query a record",
              "Write a custom command that imports data and schedule a dry run"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Artisan console", "https://laravel.com/docs/artisan"]
            ]
          },
          {
            "t": "The Laravel Directory Map",
            "d": "What lives where: app, routes, config, database, resources, and the request lifecycle folders.",
            "lv": 1,
            "time": "~3h",
            "tip": "Learn the request lifecycle order: public/index.php, bootstrap, HTTP kernel, router, controller. Every debugging session in Laravel starts by knowing where in this chain you are.",
            "learn": [
              "app/: models, HTTP controllers, providers, and where your code lives",
              "routes/, config/, database/, resources/, storage/, tests/",
              "The lifecycle: index.php to kernel to router to response"
            ],
            "do": [
              "Trace a request from public/index.php through the kernel to a route",
              "Open config/app.php and toggle a provider to see its effect",
              "Run php artisan route:list and explain every column"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Laravel request lifecycle", "https://laravel.com/docs/lifecycle"],
              ["Directory structure", "https://laravel.com/docs/structure"]
            ]
          }
        ]
      },
      {
        "t": "The Request Journey",
        "d": "Routing, controllers, middleware, the service container, and facades.",
        "lv": 1,
        "children": [
          {
            "t": "Request-Response Lifecycle",
            "d": "Following one HTTP request from the web server to your response.",
            "lv": 1,
            "time": "~4h",
            "tip": "Middleware runs before routing completes, so route model binding is not available in early middleware. Knowing the order prevents the classic null-model mystery.",
            "learn": [
              "Entry: public/index.php, the bootstrap, and the HTTP kernel",
              "Middleware pipeline: global, route, and how requests pass through",
              "Terminable middleware and what happens after the response is sent"
            ],
            "do": [
              "Add logging middleware at three positions and observe the order",
              "Dump the request object in a route closure and inspect its parts",
              "Measure where time goes by timing kernel handle vs controller"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Request lifecycle", "https://laravel.com/docs/lifecycle"],
              ["HTTP requests", "https://laravel.com/docs/requests"]
            ]
          },
          {
            "t": "Routing Essentials",
            "d": "Defining routes: verbs, closures, views, redirects, and keeping web.php organized.",
            "lv": 1,
            "time": "~5h",
            "tip": "Name every route you link to. route('posts.show') survives URL changes; hardcoded /posts/1 strings break silently across the whole app.",
            "learn": [
              "Route verbs and Route::get/post/put/patch/delete/match/any",
              "Route::view and Route::redirect shortcuts",
              "Route caching in production and why closures break it"
            ],
            "do": [
              "Build a small site's routes with named routes throughout",
              "Link between pages with route() helpers only, no hardcoded URLs",
              "Run route:cache and fix the closure-route error it reports"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Routing", "https://laravel.com/docs/routing"]
            ]
          },
          {
            "t": "Route Parameters, Naming & Groups",
            "d": "Dynamic segments, implicit model binding, groups, and rate limiting.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use implicit route model binding (Post $post) instead of findOrFail in every method. It also gives you 404s for free and scoped bindings prevent IDOR bugs.",
            "learn": [
              "Required and optional parameters, regex constraints",
              "Implicit and explicit route model binding, scoped bindings",
              "Route groups: prefix, middleware, name, and rate limiting"
            ],
            "do": [
              "Convert findOrFail actions to implicit model binding",
              "Add scoped binding so /users/{user}/posts/{post} cannot leak other users' posts",
              "Throttle an API group to 60 requests per minute"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Route model binding", "https://laravel.com/docs/routing#route-model-binding"],
              ["Rate limiting", "https://laravel.com/docs/routing#rate-limiting"]
            ]
          },
          {
            "t": "Controllers: Slim & Resourceful",
            "d": "Organizing request handling: single-action, resource controllers, and thin controllers.",
            "lv": 2,
            "time": "~5h",
            "tip": "Controllers translate HTTP; they do not contain business rules. If an action needs a comment to explain the logic, extract it to an action class or service.",
            "learn": [
              "Resource controllers and Route::resource/apiResource conventions",
              "Single-action (invokable) controllers for one-job endpoints",
              "Form requests for validation and authorization extraction"
            ],
            "do": [
              "Build a resource controller with all seven actions",
              "Refactor a fat action into a form request plus an action class",
              "Convert a webhook endpoint to an invokable controller"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Controllers", "https://laravel.com/docs/controllers"]
            ]
          },
          {
            "t": "Middleware: Global vs Route",
            "d": "Writing middleware: authentication, trimming, custom checks, and middleware groups.",
            "lv": 2,
            "time": "~4h",
            "tip": "Middleware is for HTTP concerns (auth, headers, logging), not business logic. The moment your middleware queries three models, it wants to be a policy or a service instead.",
            "learn": [
              "Global middleware, middleware groups (web/api), and route middleware",
              "The handle() method: before and after logic around $next",
              "Middleware parameters and excluding routes"
            ],
            "do": [
              "Write middleware that blocks requests without a valid API token",
              "Create middleware that sets a locale from the Accept-Language header",
              "Assign it to a group and exclude one route"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Middleware", "https://laravel.com/docs/middleware"]
            ]
          },
          {
            "t": "The Service Container & DI",
            "d": "How Laravel resolves classes: binding, singletons, contextual binding, and automatic injection.",
            "lv": 2,
            "time": "~5h",
            "tip": "Type-hint dependencies in constructors and let the container build them. new-ing services manually inside controllers is how untestable code starts.",
            "learn": [
              "Automatic resolution via reflection and constructor type-hints",
              "bind vs singleton vs scoped, and when to register in a provider",
              "Contextual binding and tagged services"
            ],
            "do": [
              "Inject a service into a controller with zero manual wiring",
              "Bind an interface to an implementation in a service provider",
              "Write a test that swaps the binding for a fake"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Service container", "https://laravel.com/docs/container"],
              ["Service providers", "https://laravel.com/docs/providers"]
            ]
          },
          {
            "t": "Facades: The Static-Looking Proxies",
            "d": "What Facade::method() really calls, and how to test code that uses facades.",
            "lv": 3,
            "time": "~3h",
            "tip": "Facades are testable because they resolve from the container: Cache::fake() and Queue::fake() exist precisely so static-looking calls stay verifiable.",
            "learn": [
              "Facades as proxies to container-bound objects",
              "Real-time facades and the __callStatic magic",
              "Faking facades in tests: Cache::fake, Mail::fake, Queue::fake"
            ],
            "do": [
              "Trace Cache::get() to its container binding",
              "Write a test using Mail::fake() and assert a mailable was queued",
              "Create your own facade for a service"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Facades", "https://laravel.com/docs/facades"]
            ]
          }
        ]
      },
      {
        "t": "Blade & Frontend",
        "d": "Blade templating, components, forms, and the Livewire/Inertia frontend stacks.",
        "lv": 1,
        "children": [
          {
            "t": "Blade Templates: The Basics",
            "d": "Displaying data safely: echo syntax, escaping, and the compiled-view model.",
            "lv": 1,
            "time": "~4h",
            "tip": "Use {{ }} for everything by default: it escapes output. {!! !!} is raw HTML and an XSS hole unless the content is yours and sanitized.",
            "learn": [
              "{{ }} escaped vs {!! !!} raw output",
              "Blade comments, @php, and passing data from controllers",
              "How Blade compiles to cached PHP in storage/framework/views"
            ],
            "do": [
              "Build a page that renders a user profile with escaped output",
              "Demonstrate an XSS payload neutralized by {{ }}",
              "Inspect a compiled Blade file to see the generated PHP"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Blade templates", "https://laravel.com/docs/blade"]
            ]
          },
          {
            "t": "Blade Directives & Conditionals",
            "d": "@if, @foreach, @forelse, @isset, and the loop variable: control flow in templates.",
            "lv": 1,
            "time": "~4h",
            "tip": "Keep logic out of templates: @if($user->isAdmin()) is fine, @if with three nested conditions and a query is a controller's job wearing a costume.",
            "learn": [
              "Conditionals: @if/@elseif/@else, @unless, @isset, @empty",
              "Loops: @foreach, @forelse for empty states, and the $loop variable",
              "@each for rendering collections and @include for partials"
            ],
            "do": [
              "Render a list with @forelse showing an empty state",
              "Use $loop->first/$loop->last to style list edges",
              "Extract a repeated card into an @include partial"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Blade directives", "https://laravel.com/docs/blade#blade-directives"]
            ]
          },
          {
            "t": "Components & Layouts",
            "d": "Reusable UI: class-based components, slots, and layout inheritance.",
            "lv": 2,
            "time": "~5h",
            "tip": "Prefer components over @include for anything with logic or variants. A <x-alert type=\"error\"> component with typed props beats a partial with magic variables.",
            "learn": [
              "Anonymous vs class-based components and props",
              "Slots, named slots, and @props",
              "Layouts with @extends/@section vs <x-layout> component layouts"
            ],
            "do": [
              "Build an alert component with type variants",
              "Convert a layout from @extends to a component layout with slots",
              "Create a form input component with error display built in"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Blade components", "https://laravel.com/docs/blade#components"]
            ]
          },
          {
            "t": "Forms: CSRF, Old Input & Errors",
            "d": "Building forms the Laravel way: CSRF tokens, repopulation, and error display.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every POST form needs @csrf, and method spoofing (@method('PUT')) for updates. Missing CSRF tokens fail with a 419 that confuses everyone exactly once.",
            "learn": [
              "@csrf tokens and @method spoofing for PUT/PATCH/DELETE",
              "old() input repopulation after validation failures",
              "@error directives and the $errors bag"
            ],
            "do": [
              "Build a create/edit form with repopulation and inline errors",
              "Trigger a 419 by removing @csrf, then fix it",
              "Preserve a file input's UX when other fields fail validation"
            ],
            "tools": ["Laravel"],
            "res": [
              ["CSRF protection", "https://laravel.com/docs/csrf"],
              ["Validation error display", "https://laravel.com/docs/validation#quick-displaying-the-validation-errors"]
            ]
          },
          {
            "t": "Frontend Stacks: Livewire vs Inertia",
            "d": "Choosing your frontend: Livewire's server-driven reactivity vs Inertia's SPA bridge.",
            "lv": 2,
            "time": "~4h",
            "tip": "Pick one stack per project, not both. Livewire keeps you in PHP/Blade; Inertia lets you use React/Vue with Laravel routing. Mixing them doubles your mental model.",
            "learn": [
              "Livewire: reactive components in PHP with Blade templates",
              "Inertia: SPAs without an API, with React/Vue/Svelte adapters",
              "Starter kits: Breeze and Jetstream as starting points"
            ],
            "do": [
              "Build a Livewire search component with debounced input",
              "Scaffold a Breeze + Inertia app and inspect the page-object protocol",
              "Compare the network traffic of the same interaction in both"
            ],
            "tools": ["Livewire", "Inertia.js"],
            "res": [
              ["Livewire", "https://livewire.laravel.com/"],
              ["Inertia.js", "https://inertiajs.com/"]
            ]
          },
          {
            "t": "Asset Bundling with Vite",
            "d": "Compiling CSS and JS with Vite: the @vite directive and production builds.",
            "lv": 2,
            "time": "~3h",
            "tip": "Run npm run build before every deploy and verify the manifest. A missing build step is how production serves a blank page with 404s for every asset.",
            "learn": [
              "vite.config.js, entry points, and the @vite Blade directive",
              "Hot module replacement with npm run dev",
              "Versioned builds, the manifest, and cache busting"
            ],
            "do": [
              "Add Tailwind via Vite and style a page",
              "Use HMR to restyle without refreshing",
              "Build for production and confirm hashed filenames"
            ],
            "tools": ["Vite", "Tailwind CSS"],
            "res": [
              ["Vite with Laravel", "https://laravel.com/docs/vite"],
              ["Vite", "https://vite.dev/"]
            ]
          }
        ]
      },
      {
        "t": "Data: Eloquent & Database",
        "d": "Query Builder, migrations, Eloquent models, relationships, and the N+1 problem.",
        "lv": 2,
        "children": [
          {
            "t": "Query Builder: SQL Without Strings",
            "d": "Fluent database queries: where clauses, joins, aggregates, and safe parameter binding.",
            "lv": 2,
            "time": "~5h",
            "tip": "Query Builder parameterizes automatically, but DB::raw() does not. One raw() with concatenated input is all it takes for SQL injection.",
            "learn": [
              "DB::table() chains: select, where, join, orderBy, limit",
              "Aggregates, grouping, and conditional clauses with when()",
              "Chunking large result sets instead of loading them all"
            ],
            "do": [
              "Build a filtered, sorted, paginated listing with the query builder",
              "Use when() to apply optional filters cleanly",
              "Process a million-row table with chunk() without running out of memory"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Query builder", "https://laravel.com/docs/queries"]
            ]
          },
          {
            "t": "Migrations & Seeders",
            "d": "Version-controlling your schema: migrations, rollbacks, factories, and seeders.",
            "lv": 2,
            "time": "~5h",
            "tip": "Never edit a migration that has already run on a shared database: write a new one. Editing history rewrites everyone else's schema state.",
            "learn": [
              "Schema builder: columns, indexes, foreign keys",
              "Migration lifecycle: make, migrate, rollback, fresh, refresh",
              "Factories and seeders for realistic dev data"
            ],
            "do": [
              "Create tables with foreign keys via migrations",
              "Write a factory with Faker data and seed 10,000 rows",
              "Practice rollback and re-migrate until it is boring"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Migrations", "https://laravel.com/docs/migrations"],
              ["Seeders", "https://laravel.com/docs/seeding"]
            ]
          },
          {
            "t": "Eloquent Models & CRUD",
            "d": "Active-record models: mass assignment protection, CRUD, and soft deletes.",
            "lv": 2,
            "time": "~6h",
            "tip": "Define $fillable explicitly on every model. $guarded = [] (or worse, no protection) plus a request with extra fields is a mass-assignment vulnerability.",
            "learn": [
              "Models as active records: conventions for tables and keys",
              "$fillable/$guarded mass-assignment protection",
              "CRUD patterns, findOrFail, firstOrCreate, updateOrCreate, soft deletes"
            ],
            "do": [
              "Build full CRUD for a model with explicit $fillable",
              "Demonstrate a mass-assignment attempt being blocked",
              "Add soft deletes and query withTrashed/onlyTrashed"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Eloquent ORM", "https://laravel.com/docs/eloquent"]
            ]
          },
          {
            "t": "Relationships: The Core Six",
            "d": "hasOne, hasMany, belongsTo, belongsToMany, and the inverses: modeling real domains.",
            "lv": 2,
            "time": "~7h",
            "tip": "belongsToMany pivot tables need both foreign keys and usually timestamps. Forgetting withTimestamps() on a pivot is a silent data gap you discover months later.",
            "learn": [
              "One-to-one, one-to-many (and inverse), many-to-many",
              "Pivot tables, withPivot, and custom pivot models",
              "hasOneThrough/hasManyThrough and polymorphic relations"
            ],
            "do": [
              "Model users, posts, comments, roles, and tags with all six types",
              "Attach/detach/sync pivot records with extra pivot columns",
              "Query through a hasManyThrough chain"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Eloquent relationships", "https://laravel.com/docs/eloquent-relationships"]
            ]
          },
          {
            "t": "Eager Loading & the N+1 Problem",
            "d": "Killing N+1 queries with with(), nested eager loads, and constrained eager loads.",
            "lv": 2,
            "time": "~4h",
            "tip": "Install Debugbar early and watch the query count on every page. An N+1 is invisible in code review and obvious in the query log: fix it where the log shows it.",
            "learn": [
              "The N+1 problem: one query plus one per row",
              "with() eager loading, nested with('posts.comments'), and lazy eager loading",
              "Constrained eager loads and counting with withCount()"
            ],
            "do": [
              "Reproduce an N+1 on a listing page and count queries in Debugbar",
              "Fix it with with() and compare query counts",
              "Add withCount() for a comments counter without loading comments"
            ],
            "tools": ["Laravel Debugbar"],
            "res": [
              ["Eager loading", "https://laravel.com/docs/eloquent-relationships#eager-loading"],
              ["Laravel Debugbar", "https://github.com/barryvdh/laravel-debugbar"]
            ]
          },
          {
            "t": "Scopes, Accessors & Casts",
            "d": "Reusable query logic and attribute transformation: scopes, accessors, mutators, casts.",
            "lv": 2,
            "time": "~5h",
            "tip": "Put repeated where clauses in query scopes, not copy-pasted across controllers. Post::published() reads like English and changes in exactly one place.",
            "learn": [
              "Local and global scopes for reusable query constraints",
              "Accessors and mutators for computed/transformed attributes",
              "Attribute casting: arrays, dates, enums, encrypted, and AsCollection"
            ],
            "do": [
              "Write local scopes for published, recent, and popular posts",
              "Add a global scope for tenant isolation and a withoutGlobalScope escape",
              "Cast a JSON column to an array and an enum column to a PHP enum"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Query scopes", "https://laravel.com/docs/eloquent#query-scopes"],
              ["Attribute casting", "https://laravel.com/docs/eloquent-mutators#attribute-casting"]
            ]
          },
          {
            "t": "Pagination & Collections",
            "d": "Paginating results and the Collection pipeline for in-memory data work.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use cursor pagination for infinite scroll and simplePaginate for large datasets. Classic paginate() with COUNT(*) gets slow on big tables.",
            "learn": [
              "paginate(), simplePaginate(), cursorPaginate() and their trade-offs",
              "Rendering pagination links and customizing the views",
              "Collections: map, filter, groupBy, and lazy collections for huge datasets"
            ],
            "do": [
              "Paginate a listing and customize the pagination view",
              "Switch a feed to cursor pagination",
              "Process a large CSV with lazy collections"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Pagination", "https://laravel.com/docs/pagination"],
              ["Collections", "https://laravel.com/docs/collections"]
            ]
          },
          {
            "t": "Database Transactions & Locking",
            "d": "Atomic writes with DB::transaction and pessimistic locking for race conditions.",
            "lv": 3,
            "time": "~4h",
            "tip": "Wrap multi-write operations in DB::transaction, and use lockForUpdate() when two requests can touch the same row. Double-booking bugs are transaction bugs.",
            "learn": [
              "DB::transaction with automatic rollback on exceptions",
              "Pessimistic locking: sharedLock() and lockForUpdate()",
              "Deadlocks: why they happen and how to order locks consistently"
            ],
            "do": [
              "Make a transfer operation atomic with DB::transaction",
              "Reproduce a race on seat booking, then fix with lockForUpdate()",
              "Trigger a deadlock in a test and resolve it with consistent lock ordering"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Database transactions", "https://laravel.com/docs/database#database-transactions"]
            ]
          }
        ]
      },
      {
        "t": "Auth, Queues & Background Work",
        "d": "Authentication, API tokens, authorization, queues, events, and scheduling.",
        "lv": 2,
        "children": [
          {
            "t": "Authentication with Breeze",
            "d": "Scaffolding login, registration, and password reset with Laravel Breeze.",
            "lv": 2,
            "time": "~5h",
            "tip": "Start with Breeze, not Jetstream, unless you need teams and 2FA. Breeze is the minimal honest auth scaffold; Jetstream's features become baggage if you do not use them.",
            "learn": [
              "Installing Breeze and what it scaffolds (Blade or Inertia)",
              "The auth flow: register, login, logout, password reset, email verification",
              "Auth middleware, guest middleware, and the auth() helper"
            ],
            "do": [
              "Scaffold Breeze and register/log in a user",
              "Require email verification before dashboard access",
              "Customize the login redirect and the auth views"
            ],
            "tools": ["Laravel Breeze"],
            "res": [
              ["Laravel Breeze", "https://laravel.com/docs/starter-kits#laravel-breeze"],
              ["Authentication", "https://laravel.com/docs/authentication"]
            ]
          },
          {
            "t": "Manual Auth: Guards & Sessions",
            "d": "Understanding what Breeze does for you: guards, providers, and manual login.",
            "lv": 2,
            "time": "~5h",
            "tip": "Know the manual flow even if you scaffold: Auth::attempt(), session regeneration, and logout invalidation. Scaffolded code you cannot explain is a liability.",
            "learn": [
              "Guards (session, token) and user providers (eloquent, database)",
              "Auth::attempt(), login(), logout(), and session regeneration",
              "Remember-me cookies and throttle login attempts"
            ],
            "do": [
              "Build login/logout manually without a starter kit",
              "Add login throttling and test the lockout",
              "Regenerate the session on login and invalidate on logout"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Manually authenticating users", "https://laravel.com/docs/authentication#authenticating-users"]
            ]
          },
          {
            "t": "Sanctum: API Tokens & SPA Auth",
            "d": "Token-based API auth and cookie-based SPA auth with Laravel Sanctum.",
            "lv": 2,
            "time": "~6h",
            "tip": "Use Sanctum's SPA cookie mode for your own frontend and personal access tokens for third-party API consumers. Mixing the two modes is how auth stops making sense.",
            "learn": [
              "SPA authentication: cookies, CSRF, and the sanctum guard",
              "Personal access tokens: createToken, abilities, and revocation",
              "Token expiration and pruning expired tokens"
            ],
            "do": [
              "Issue a personal access token and use it with a Bearer header",
              "Scope tokens with abilities and enforce them in middleware",
              "Revoke tokens on password change"
            ],
            "tools": ["Laravel Sanctum"],
            "res": [
              ["Laravel Sanctum", "https://laravel.com/docs/sanctum"]
            ]
          },
          {
            "t": "Authorization: Gates & Policies",
            "d": "Who can do what: gates for simple checks, policies for resource authorization.",
            "lv": 3,
            "time": "~5h",
            "tip": "Authorize against the model instance ($this->authorize('update', $post)), not the id. Instance checks enforce ownership; id-based checks in controllers get forgotten.",
            "learn": [
              "Gates: closures for simple abilities, Gate::allows/denies",
              "Policies: one class per model with view/update/delete methods",
              "Authorizing in controllers, Blade (@can), and form requests"
            ],
            "do": [
              "Write a PostPolicy where only authors (or admins) can update",
              "Gate a Blade button with @can so users never see forbidden actions",
              "Test every policy method with both allowed and denied users"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Authorization", "https://laravel.com/docs/authorization"]
            ]
          },
          {
            "t": "Hashing & Encryption",
            "d": "Storing passwords and secrets correctly: Hash, Crypt, and signed URLs.",
            "lv": 2,
            "time": "~3h",
            "tip": "Hash::make() for passwords (one-way), Crypt for data you must read back (two-way), and never roll your own. Storing a reversible 'encrypted' password with a hardcoded key is not security.",
            "learn": [
              "Hash::make/check with bcrypt/argon2 and automatic rehashing",
              "Crypt::encrypt/decrypt for reversible secrets",
              "Signed URLs for temporary, tamper-proof links"
            ],
            "do": [
              "Hash passwords on registration and verify on login",
              "Encrypt an API secret at rest and decrypt on use",
              "Generate a signed URL for a time-limited download"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Hashing", "https://laravel.com/docs/hashing"],
              ["Encryption", "https://laravel.com/docs/encryption"]
            ]
          },
          {
            "t": "Queues & Horizon",
            "d": "Background jobs that survive deploys: dispatching, workers, retries, and Horizon.",
            "lv": 3,
            "time": "~6h",
            "tip": "Jobs must be idempotent: assume every job runs twice. A welcome email sent twice is embarrassing; a payment processed twice is a lawsuit.",
            "learn": [
              "Dispatching jobs, sync vs database vs Redis drivers",
              "Retries, backoff, timeouts, and the failed_jobs table",
              "Horizon: dashboard, supervisors, balancing, and metrics"
            ],
            "do": [
              "Dispatch a welcome-email job to the database queue and work it",
              "Make a job retry with backoff and inspect the failed job payload",
              "Set up Horizon with Redis and watch supervisors balance load"
            ],
            "tools": ["Laravel Horizon", "Redis"],
            "res": [
              ["Queues", "https://laravel.com/docs/queues"],
              ["Laravel Horizon", "https://laravel.com/docs/horizon"]
            ]
          },
          {
            "t": "Events & Listeners",
            "d": "Decoupling with events: dispatching, listeners, subscribers, and queued listeners.",
            "lv": 2,
            "time": "~4h",
            "tip": "Events decouple what happened from what should happen next. But an event with one listener that always runs synchronously is indirection without benefit: use events for genuinely independent reactions.",
            "learn": [
              "Defining events and listeners, manual vs auto-discovery",
              "Queued listeners for slow side effects",
              "Event subscribers for grouping related listeners"
            ],
            "do": [
              "Fire OrderPlaced and handle email + inventory in separate listeners",
              "Make the email listener queued and prove the request stays fast",
              "Test with Event::fake() and assert the event was dispatched"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Events", "https://laravel.com/docs/events"]
            ]
          },
          {
            "t": "Task Scheduling",
            "d": "Cron without crontab chaos: the scheduler, frequencies, and single-server guarantees.",
            "lv": 2,
            "time": "~4h",
            "tip": "One cron entry runs the whole scheduler: * * * * * php artisan schedule:run. Everything else lives in the kernel schedule, versioned in git instead of scattered across servers.",
            "learn": [
              "Defining schedules in routes/console.php or the console kernel",
              "Frequencies, timezones, withoutOverlapping, and onOneServer",
              "Monitoring: pinging health checks on success/failure"
            ],
            "do": [
              "Schedule a nightly report and a hourly cleanup",
              "Add withoutOverlapping and onOneServer to a long job",
              "Run schedule:list and schedule:work to verify locally"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Task scheduling", "https://laravel.com/docs/scheduling"]
            ]
          }
        ]
      },
      {
        "t": "Quality: Testing & Debugging",
        "d": "PHPUnit, Pest, debugging tools, logging, and exception handling.",
        "lv": 2,
        "children": [
          {
            "t": "PHPUnit & Feature Tests",
            "d": "Testing HTTP the Laravel way: acting as users, hitting endpoints, asserting responses.",
            "lv": 2,
            "time": "~6h",
            "tip": "Feature tests are Laravel's superpower: RefreshDatabase plus actingAs plus fluent HTTP assertions test the real stack in milliseconds. Write them before you need them.",
            "learn": [
              "Feature vs unit tests and the RefreshDatabase trait",
              "actingAs(), get/post/put/delete test helpers, assertStatus/assertJson",
              "Testing validation failures and redirects"
            ],
            "do": [
              "Test a full registration flow: post, assert redirect, assert database",
              "Test a 422 validation failure with assertInvalid",
              "Test an authorized vs unauthorized delete with actingAs"
            ],
            "tools": ["PHPUnit"],
            "res": [
              ["HTTP tests", "https://laravel.com/docs/http-tests"],
              ["PHPUnit", "https://phpunit.de/"]
            ]
          },
          {
            "t": "Pest: The Expressive Alternative",
            "d": "Pest's elegant syntax, datasets, and why many Laravel devs switched.",
            "lv": 2,
            "time": "~4h",
            "tip": "Pest runs on PHPUnit, so it is not a rewrite: migrate file by file. Datasets turn ten copy-pasted tests into one readable test with ten inputs.",
            "learn": [
              "Pest syntax: it(), expect(), and higher-order tests",
              "Datasets for parameterized tests",
              "Architecture testing: pest's arch() to enforce layer rules"
            ],
            "do": [
              "Convert a PHPUnit test class to Pest",
              "Add a dataset covering edge-case inputs",
              "Write an arch test forbidding controllers from touching the DB facade"
            ],
            "tools": ["Pest"],
            "res": [
              ["Pest", "https://pestphp.com/"]
            ]
          },
          {
            "t": "Debugging: Debugbar & Telescope",
            "d": "Seeing inside requests: query logs, timeline, and Telescope's request watcher.",
            "lv": 2,
            "time": "~4h",
            "tip": "Debugbar in dev, Telescope in staging, neither in production with open access. Telescope records everything including request payloads: gate it behind admin auth or disable it in prod.",
            "learn": [
              "Debugbar: queries, timeline, views, and route info per request",
              "Telescope: watchers for requests, queries, jobs, mail, and logs",
              "Ray and dd()/dump() for quick inspection"
            ],
            "do": [
              "Find your slowest query with Debugbar's timeline",
              "Inspect a failed queued job in Telescope",
              "Use dump() vs dd() appropriately in a debugging session"
            ],
            "tools": ["Laravel Debugbar", "Laravel Telescope"],
            "res": [
              ["Laravel Telescope", "https://laravel.com/docs/telescope"],
              ["Laravel Debugbar", "https://github.com/barryvdh/laravel-debugbar"]
            ]
          },
          {
            "t": "Logging & Log Stacks",
            "d": "Structured logs with channels, stacks, and context that survives production.",
            "lv": 2,
            "time": "~3h",
            "tip": "Log with context arrays, not interpolated strings: Log::info('Order created', ['order_id' => $id]). Context is searchable; a sentence is not.",
            "learn": [
              "Log channels: single, daily, stack, and stderr for containers",
              "Log levels and when each is honest",
              "Context, shared context, and tap customization"
            ],
            "do": [
              "Configure a stack channel: daily file plus stderr",
              "Add request context (user id, request id) to every log line",
              "Ship logs to a centralized viewer and search by context"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Logging", "https://laravel.com/docs/logging"]
            ]
          },
          {
            "t": "Exception Handling & Custom Pages",
            "d": "The exception handler: rendering, reporting, and custom error pages.",
            "lv": 2,
            "time": "~4h",
            "tip": "In production, users get friendly pages and you get the full report. APP_DEBUG=true in production leaks config and paths: it is the single most common Laravel security mistake.",
            "learn": [
              "The exception handler: register(), render(), and report()",
              "Custom 404/500 pages and HTTP exception rendering",
              "Reporting to Flare, Sentry, and ignoring noisy exceptions"
            ],
            "do": [
              "Build custom 404 and 500 pages",
              "Map a domain exception to a clean JSON error for APIs",
              "Verify APP_DEBUG=false hides details in production mode"
            ],
            "tools": ["Laravel", "Sentry"],
            "res": [
              ["Error handling", "https://laravel.com/docs/errors"]
            ]
          },
          {
            "t": "Localization",
            "d": "Multi-language apps: translation strings, JSON translations, and locale routing.",
            "lv": 3,
            "time": "~3h",
            "tag": "opt",
            "tip": "Use __() from the start if there is any chance of a second language. Retrofitting translations means touching every hardcoded string in every view.",
            "learn": [
              "__() helper, lang files, and JSON translation files",
              "Pluralization with trans_choice()",
              "Setting locale per request via middleware or route prefix"
            ],
            "do": [
              "Translate a page into a second language with lang files",
              "Handle pluralization for item counts",
              "Add locale-prefixed routes with middleware switching"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Localization", "https://laravel.com/docs/localization"]
            ]
          }
        ]
      },
      {
        "t": "Shipping to Production",
        "d": "Optimization, deployment platforms, Octane, monitoring, and CI/CD.",
        "lv": 3,
        "children": [
          {
            "t": "Config Caching & Route Optimization",
            "d": "The production checklist: caching config, routes, views, and events.",
            "lv": 3,
            "time": "~3h",
            "tip": "Cache config, routes, and views on every deploy, and never call env() outside config files: cached config freezes env() values and the app silently uses stale ones.",
            "learn": [
              "config:cache, route:cache, view:cache, event:cache",
              "Why env() only belongs in config files",
              "The optimize and optimize:clear commands"
            ],
            "do": [
              "Run the full optimize sequence and measure the boot-time difference",
              "Break an app by calling env() in code with cached config, then fix it",
              "Add optimize to your deploy script"
            ],
            "tools": ["Laravel"],
            "res": [
              ["Deployment optimization", "https://laravel.com/docs/deployment#optimization"]
            ]
          },
          {
            "t": "Deployment: Forge, Cloud & Vapor",
            "d": "Shipping Laravel: Forge-provisioned servers, Laravel Cloud, and serverless Vapor.",
            "lv": 3,
            "time": "~5h",
            "tip": "Automate deploys from day one, even for side projects. Manual FTP deploys work until the one time you forget a migration and the site is down at midnight.",
            "learn": [
              "Laravel Forge: provisioning, deploy scripts, queues, and SSL",
              "Laravel Cloud: the managed platform option",
              "Vapor: serverless Laravel on AWS Lambda and its constraints",
              "Envoyer-style zero-downtime deploys"
            ],
            "do": [
              "Provision a Forge server and deploy with a push-to-deploy script",
              "Configure queues, scheduler cron, and SSL on the server",
              "Practice a rollback to the previous release"
            ],
            "tools": ["Laravel Forge", "Laravel Cloud"],
            "res": [
              ["Laravel Forge", "https://forge.laravel.com/"],
              ["Laravel deployment docs", "https://laravel.com/docs/deployment"]
            ]
          },
          {
            "t": "Octane: Long-Lived Workers",
            "d": "Serving Laravel with FrankenPHP, Swoole, or RoadRunner: the speed and the state traps.",
            "lv": 3,
            "time": "~4h",
            "tip": "Octane keeps your app in memory between requests, which means static state and singletons leak across requests. Audit for request-state in statics before switching, or users will see each other's data.",
            "learn": [
              "How Octane works: booting once, handling many requests",
              "FrankenPHP vs Swoole vs RoadRunner drivers",
              "State management: flushing between requests and Octane::tick"
            ],
            "do": [
              "Run your app on Octane with FrankenPHP and benchmark vs php-fpm",
              "Find a state leak (static cache) and fix it",
              "Configure concurrent tasks with Octane::concurrently()"
            ],
            "tools": ["Laravel Octane", "FrankenPHP"],
            "res": [
              ["Laravel Octane", "https://laravel.com/docs/octane"]
            ]
          },
          {
            "t": "Monitoring with Pulse",
            "d": "Application monitoring: slow queries, slow routes, exceptions, and queue health.",
            "lv": 3,
            "time": "~4h",
            "tip": "Monitor the four golden signals for your app: latency, traffic, errors, and saturation (queues). A dashboard nobody looks at is decoration: set alerts on the signals.",
            "learn": [
              "Pulse cards: usage, slow queries, slow requests, exceptions, queues",
              "Recording custom metrics and resolving users",
              "Pruning old Pulse data and production access control"
            ],
            "do": [
              "Install Pulse and identify your three slowest endpoints",
              "Record a custom business metric (signups per hour)",
              "Set up alerting on queue backlog growth"
            ],
            "tools": ["Laravel Pulse"],
            "res": [
              ["Laravel Pulse", "https://laravel.com/docs/pulse"]
            ]
          },
          {
            "t": "CI/CD & Zero-Downtime Deploys",
            "d": "Automated pipelines: testing, building assets, migrating, and deploying without downtime.",
            "lv": 3,
            "time": "~5h",
            "badge": "PROJECT",
            "tip": "Migrations must be backward compatible with the old code still running: add columns nullable first, deploy, then backfill. A deploy that needs old and new code to agree is a deploy that breaks at 2am.",
            "learn": [
              "Pipeline stages: install, test, build assets, deploy",
              "Zero-downtime strategy: symlink swaps and backward-compatible migrations",
              "Envoyer or Forge deploy scripts with health checks"
            ],
            "do": [
              "Build a GitHub Actions pipeline that tests and builds assets",
              "Write a zero-downtime deploy script with migrate --force",
              "Deploy a backward-compatible migration change end to end"
            ],
            "tools": ["GitHub Actions", "Laravel Forge"],
            "res": [
              ["Laravel deployment", "https://laravel.com/docs/deployment"],
              ["GitHub Actions", "https://docs.github.com/en/actions"]
            ]
          }
        ]
      }
    ]
  }
});
