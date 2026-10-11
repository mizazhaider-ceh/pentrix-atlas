/* Atlas roadmap data: Ruby on Rails (ruby-on-rails)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "ruby-on-rails",
  "title": "Ruby on Rails",
  "icon": "🚂",
  "color": "#cc0000",
  "desc": "The productive full-stack framework: MVC, ActiveRecord, Hotwire, and the Rails 8 way to ship real applications with Kamal.",
  "kind": "skill",
  "root": {
    "t": "Ruby on Rails",
    "d": "Build full-stack web applications with Rails: from your first app through ActiveRecord, Hotwire, testing, and production deployment.",
    "children": [
      {
        "t": "Rails Foundations",
        "d": "What Rails is, why convention beats configuration, and getting your first app running on Rails 8.",
        "lv": 1,
        "children": [
          {
            "t": "How the Web Works",
            "d": "Rails answers HTTP requests. Learn the request-response cycle first so every Rails abstraction has something to attach to.",
            "lv": 1,
            "time": "~2h",
            "tip": "Rails hides HTTP behind friendly abstractions, which is wonderful until something breaks. Keep the underlying request-response model in your head at all times.",
            "learn": [
              "HTTP: methods, paths, headers, status codes, and request/response bodies",
              "DNS, servers, and how a browser request reaches your Rails app",
              "What the framework handles for you vs what you still own"
            ],
            "do": [
              "Inspect a full request-response pair in browser devtools",
              "Run curl -i against a local server and identify each part",
              "Diagram where Rails sits between the web server and the database"
            ],
            "tools": ["curl", "browser devtools"],
            "res": [
              ["MDN: HTTP overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP"],
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          },
          {
            "t": "Why Frameworks? Convention over Configuration",
            "d": "Rails trades endless choices for strong defaults. Understand CoC and DRY and you understand every Rails design decision.",
            "lv": 1,
            "time": "~2h",
            "tip": "Fight the framework and you lose; follow the conventions and Rails does shocking amounts of work for you. Learn the Rails way first, customize second.",
            "learn": [
              "Convention over Configuration: naming that wires things together automatically",
              "DRY: how Rails removes repetition across models, views, and controllers",
              "The Rails doctrine: what the framework optimizes for and what it refuses to do"
            ],
            "do": [
              "List the decisions Rails makes for you in a new app (naming, structure, defaults)",
              "Find three places where a convention replaces configuration in a sample app",
              "Read the Rails doctrine and note which principle surprises you most"
            ],
            "tools": ["Rails"],
            "res": [
              ["The Rails Doctrine", "https://rubyonrails.org/doctrine"],
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          },
          {
            "t": "MVC Architecture",
            "d": "Models hold data and rules, views present, controllers coordinate. Learn the triangle and where each piece of logic belongs.",
            "lv": 1,
            "time": "~2h",
            "tip": "Fat models, skinny controllers is the Rails mantra. When a controller action grows past a screen, the logic is begging to move into the model or a service object.",
            "learn": [
              "Model, View, Controller: responsibilities and boundaries",
              "The request flow: router to controller to model to view",
              "Where business logic lives: models, concerns, and service objects"
            ],
            "do": [
              "Trace one request through router, controller, model, and view in a sample app",
              "Classify ten pieces of logic as model, view, or controller concerns",
              "Draw your app's MVC diagram before writing code"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          },
          {
            "t": "Installing Rails & Ruby Setup",
            "d": "A clean Ruby install plus the rails gem. Set up your machine so rails new works first try.",
            "lv": 1,
            "time": "~2h",
            "tip": "Use a Ruby version manager (mise, rbenv, or asdf), never system Ruby. Rails 8 needs a modern Ruby; check the release notes for the supported range.",
            "learn": [
              "Ruby via a version manager and why system Ruby is off-limits",
              "Installing the rails gem and verifying rails --version",
              "Database and JS prerequisites: SQLite for dev, a JS runtime for the asset pipeline"
            ],
            "do": [
              "Install Ruby 4.x through a version manager and confirm ruby -v",
              "Install rails with gem install rails and verify the version",
              "Check that sqlite3 is available for development databases"
            ],
            "tools": ["Ruby", "Rails", "mise"],
            "res": [
              ["Installing Ruby", "https://www.ruby-lang.org/en/documentation/installation/"],
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          },
          {
            "t": "Your First App: rails new & the Server",
            "d": "Generate an app, boot the server, and see the Rails welcome page. This is the starting line for everything that follows.",
            "lv": 1,
            "time": "~3h",
            "tip": "Say yes to the defaults on your first app. Every rails new flag you add before understanding it is a customization you will have to debug later.",
            "learn": [
              "rails new blog: what gets generated and the key options",
              "bin/rails server: booting Puma and reading the development log",
              "The development loop: edit, auto-reload, refresh, read the log"
            ],
            "do": [
              "Generate a new app with defaults and boot the server",
              "Read the development log while loading a page and identify the parts",
              "Change a view, refresh, and confirm auto-reload worked"
            ],
            "tools": ["Rails", "Puma"],
            "res": [
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"],
              ["Rails command line", "https://guides.rubyonrails.org/command_line.html"]
            ]
          },
          {
            "t": "The Rails CLI & Generators",
            "d": "Generators write boilerplate for you: models, controllers, migrations. Learn to wield them and to read what they produce.",
            "lv": 1,
            "time": "~2h",
            "tip": "Generators are a starting point, not gospel. Always read the files they create: generated code you do not understand is code you cannot debug.",
            "learn": [
              "rails generate model/controller/migration/mailer: what each scaffolds",
              "rails destroy: undoing a generator cleanly",
              "The console (rails console) and dbconsole for poking at your app"
            ],
            "do": [
              "Generate a model and a controller, then read every generated file",
              "Destroy the controller and confirm all its files disappear",
              "Create records in rails console and query them back"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails command line", "https://guides.rubyonrails.org/command_line.html"]
            ]
          },
          {
            "t": "Directory Structure Tour",
            "d": "app/, config/, db/, Gemfile: every Rails app shares the same skeleton. Learn where everything lives.",
            "lv": 1,
            "time": "~2h",
            "tip": "If you cannot find where something belongs, the answer is almost always a convention: models in app/models, and so on. When in doubt, follow the directory that already exists.",
            "learn": [
              "app/: models, views, controllers, jobs, mailers, assets",
              "config/: routes, database, environments, and initializers",
              "db/: migrations, schema.rb, seeds.rb and the Gemfile's role"
            ],
            "do": [
              "Explore a fresh app and write a one-line purpose for each top-level directory",
              "Find where routes, database config, and environment settings live",
              "Add a gem to the Gemfile, bundle install, and confirm it loads"
            ],
            "tools": ["Rails", "Bundler"],
            "res": [
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          }
        ]
      },
      {
        "t": "Routing & Controllers",
        "d": "Routes map URLs to controller actions. Master RESTful routing, strong parameters, and the controller's job in the request cycle.",
        "lv": 1,
        "children": [
          {
            "t": "Request-Response Flow in Rails",
            "d": "Follow one request from the router through the controller to the view. This flow explains half of all Rails errors.",
            "lv": 1,
            "time": "~2h",
            "tip": "Read the development log for every request while learning. It shows the route, controller, action, queries, and render time: a free X-ray of your app.",
            "learn": [
              "Router to controller action to view: the full journey",
              "How Rails picks the route: first match wins in config/routes.rb",
              "Rendering vs redirecting: the two ways an action answers"
            ],
            "do": [
              "Hit a route and read the log line identifying controller and action",
              "Trigger a routing error and read what Rails tells you",
              "Draw the flow for one of your own routes"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails routing", "https://guides.rubyonrails.org/routing.html"],
              ["Action Controller overview", "https://guides.rubyonrails.org/action_controller_overview.html"]
            ]
          },
          {
            "t": "RESTful Routes with resources",
            "d": "resources :posts creates seven conventional routes in one line. Think in resources and your URLs design themselves.",
            "lv": 1,
            "time": "~3h",
            "tip": "Memorize the seven RESTful actions (index, show, new, create, edit, update, destroy) and their HTTP verbs. Nearly every Rails app is variations on this theme.",
            "learn": [
              "resources and the seven routes it generates with their helpers",
              "REST verbs: GET for reading, POST for creating, PATCH for updating, DELETE for destroying",
              "only and except: trimming resources to the actions you need"
            ],
            "do": [
              "Declare resources :articles and list all seven routes with rails routes",
              "Restrict a resource with only: and confirm the missing routes 404",
              "Map each route to its controller action and HTTP verb in a table"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails routing: RESTful", "https://guides.rubyonrails.org/routing.html#crud-verbs-and-actions"]
            ]
          },
          {
            "t": "Nested & Custom Routes",
            "d": "Nest resources for parent-child URLs and add member/collection routes for actions beyond CRUD. Keep nesting shallow.",
            "lv": 2,
            "time": "~3h",
            "tip": "Never nest more than one level deep. /authors/1/books/2/chapters/3 is a URL nobody can maintain: shallow nesting keeps URLs sane.",
            "learn": [
              "Nested resources and shallow: true for sane parent-child URLs",
              "Member routes (one record) vs collection routes (the whole set)",
              "Non-RESTful routes for genuinely custom actions"
            ],
            "do": [
              "Nest comments under posts and build the nested form and links",
              "Add a member route (publish) and a collection route (search)",
              "Refactor deep nesting to shallow and compare the route tables"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails routing: nested resources", "https://guides.rubyonrails.org/routing.html#nested-resources"]
            ]
          },
          {
            "t": "Named Routes, Redirects & Constraints",
            "d": "Path helpers keep links maintainable, redirects guide users, and constraints keep routes precise.",
            "lv": 2,
            "time": "~2h",
            "tip": "Use _path helpers in views and redirects, _url helpers in mailers and background jobs. _url needs a host, which views have from the request but mailers do not.",
            "learn": [
              "_path vs _url helpers and when each is required",
              "redirect in routes.rb and redirect_to in controllers",
              "Constraints: limiting routes by format, subdomain, or custom logic"
            ],
            "do": [
              "Replace hardcoded URLs in views with named route helpers",
              "Add a redirect for a renamed route so old links keep working",
              "Constrain an API namespace to JSON format only"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails routing", "https://guides.rubyonrails.org/routing.html"]
            ]
          },
          {
            "t": "Controller Actions",
            "d": "Actions are public methods that answer requests. Keep them thin: load data, delegate to models, render or redirect.",
            "lv": 1,
            "time": "~3h",
            "tip": "A controller action should read like a table of contents: find the record, do the thing, respond. If the how lives in the action, extract it to the model.",
            "learn": [
              "Creating controllers, actions as public methods, and implicit rendering",
              "render vs redirect_to and the double-render error",
              "Responding to formats: HTML, JSON, and Turbo Stream from one action"
            ],
            "do": [
              "Build a controller with all seven RESTful actions by hand",
              "Make one action respond to both HTML and JSON",
              "Trigger a double-render error on purpose, then fix it with and return"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action Controller overview", "https://guides.rubyonrails.org/action_controller_overview.html"]
            ]
          },
          {
            "t": "Strong Parameters",
            "d": "Never trust raw params. require and permit whitelist exactly what mass assignment may set: Rails' answer to a infamous vulnerability class.",
            "lv": 2,
            "time": "~3h",
            "tip": "Permit attributes, never trust them. If admin is not in the permit list, no crafted request can make a user an admin: that is the whole security model.",
            "learn": [
              "params.require(:post).permit(:title, :body): the whitelist pattern",
              "The mass-assignment vulnerability strong parameters were built to kill",
              "Nested attributes and arrays in permit lists"
            ],
            "do": [
              "Write a private post_params method and use it in create and update",
              "Attempt to inject an unpermitted attribute and confirm it is filtered",
              "Permit nested attributes for a has_many association"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action Controller: strong parameters", "https://guides.rubyonrails.org/action_controller_overview.html#strong-parameters"]
            ]
          },
          {
            "t": "Filters: before_action & Friends",
            "d": "before_action runs shared setup before actions. Extract authentication and record loading into callbacks done right.",
            "lv": 2,
            "time": "~2h",
            "tip": "Callbacks hide control flow: an action that depends on three before_actions is hard to trace. Use them for cross-cutting concerns (auth), not business logic.",
            "learn": [
              "before_action, after_action, around_action: the callback lifecycle",
              "only and except: scoping callbacks to the actions that need them",
              "Halting the chain: rendering or redirecting inside a callback"
            ],
            "do": [
              "Extract record loading into a before_action with set_post",
              "Add an authentication callback that redirects unauthenticated users",
              "Halt a chain deliberately and observe the action never running"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action Controller: filters", "https://guides.rubyonrails.org/action_controller_overview.html#filters"]
            ]
          },
          {
            "t": "Cookies, Sessions & Flash",
            "d": "HTTP is stateless; cookies and sessions fake continuity. Learn how Rails remembers users between requests.",
            "lv": 2,
            "time": "~3h",
            "tip": "Sessions store a session ID in the cookie, not your data. Stuffing large objects into session bloats every request: keep sessions to IDs and tiny flags.",
            "learn": [
              "Cookies: signed vs encrypted and what each protects against",
              "Session storage: cookie store by default and its size limits",
              "Flash: messages that survive exactly one redirect"
            ],
            "do": [
              "Store and read a value in session across two requests",
              "Set a signed cookie and tamper with it to see Rails reject it",
              "Show a flash notice after create and confirm it disappears on refresh"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action Controller: session and cookies", "https://guides.rubyonrails.org/action_controller_overview.html#session"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Models & ActiveRecord",
        "d": "ActiveRecord maps classes to tables and gives you a fluent query language. The heart of Rails data handling.",
        "lv": 2,
        "children": [
          {
            "t": "Models & Migrations",
            "d": "Models are Ruby classes backed by tables; migrations version the schema. Generate, migrate, and read schema.rb fluently.",
            "lv": 2,
            "time": "~4h",
            "tip": "schema.rb is the source of truth, migrations are the history. Read schema.rb to understand the database; read migrations to understand how it got there.",
            "learn": [
              "rails generate model: the model, migration, and test files it creates",
              "Migration anatomy: change, up/down, reversible operations",
              "db:migrate, db:rollback, db:seed, and db:schema:load for fresh setups"
            ],
            "do": [
              "Generate a model with attributes and run the migration",
              "Read the generated migration and the resulting schema.rb side by side",
              "Roll back a migration, edit it, and re-migrate"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record migrations", "https://guides.rubyonrails.org/active_record_migrations.html"],
              ["Active Record basics", "https://guides.rubyonrails.org/active_record_basics.html"]
            ]
          },
          {
            "t": "Column Types & Model Methods",
            "d": "Choose the right column types and put domain behavior in model methods. Models are where business logic lives.",
            "lv": 2,
            "time": "~2h",
            "tip": "Use decimal for money, never float. Floats cannot represent 0.1 exactly, and rounding errors in money are the kind of bug that ends up in court.",
            "learn": [
              "Column types: string vs text, integer, decimal, boolean, datetime, json",
              "Model methods: encapsulating logic like published? or full_name",
              "Attribute defaults and database-level defaults"
            ],
            "do": [
              "Add a decimal price column and a boolean flag with defaults",
              "Write three predicate methods that encode business rules",
              "Compare string vs text for a field and justify the choice"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record migrations: column types", "https://guides.rubyonrails.org/active_record_migrations.html"]
            ]
          },
          {
            "t": "Associations",
            "d": "belongs_to, has_many, has_one, has_many :through: four associations that model nearly every relationship. Get dependent and foreign keys right.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always think about dependent: :destroy vs :nullify when declaring has_many. Deleting a user should not silently orphan or nuke data you did not intend.",
            "learn": [
              "belongs_to/has_many, has_one, has_many :through, has_and_belongs_to_many",
              "dependent options: destroy, delete_all, nullify, restrict_with_error",
              "Foreign keys, inverse_of, and polymorphic associations"
            ],
            "do": [
              "Model author-post-comment with proper associations and dependent rules",
              "Build a many-to-many through a join model with extra attributes",
              "Delete a parent record and verify the dependent behavior you chose"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record associations", "https://guides.rubyonrails.org/association_basics.html"]
            ]
          },
          {
            "t": "Validations",
            "d": "Validations keep bad data out at the model layer. Presence, uniqueness, format, and custom validators, plus database constraints as backstop.",
            "lv": 2,
            "time": "~3h",
            "tip": "Validations can be bypassed (update_column skips them), so critical rules need database constraints too. Uniqueness validation without a unique index is a race condition waiting to happen.",
            "learn": [
              "Built-in validators: presence, uniqueness, length, format, inclusion, numericality",
              "Custom validation methods and validator classes",
              "valid? vs save, errors objects, and displaying errors in forms"
            ],
            "do": [
              "Add five validations to a model and test each in the console",
              "Write a custom validator for a business rule",
              "Add a unique index migration to back a uniqueness validation"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record validations", "https://guides.rubyonrails.org/active_record_validations.html"]
            ]
          },
          {
            "t": "Callbacks",
            "d": "before_save, after_create, and friends hook the object lifecycle. Useful for cross-cutting concerns, dangerous for business logic.",
            "lv": 2,
            "time": "~3h",
            "tip": "Callbacks that send emails or charge cards make models unpredictable and tests slow. Keep callbacks to data hygiene; move side effects to explicit service calls or jobs.",
            "learn": [
              "The callback chain: validation, save, create/update, commit, destroy",
              "Conditional callbacks with if/unless and halting with throw :abort",
              "after_commit vs after_save: why the distinction matters for jobs and emails"
            ],
            "do": [
              "Add a before_validation callback that normalizes an attribute",
              "Demonstrate the after_save vs after_commit difference with a failing transaction",
              "Halt a destroy with throw :abort and add an error message"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record callbacks", "https://guides.rubyonrails.org/active_record_callbacks.html"]
            ]
          },
          {
            "t": "Querying: ActiveRecord Basics",
            "d": "where, order, limit, find: a chainable query interface where relations stay lazy until you need results.",
            "lv": 2,
            "time": "~4h",
            "tip": "Relations are lazy: Post.where(published: true).order(:title).limit(10) runs one query, at the end. Chain freely and let ActiveRecord compose the SQL.",
            "learn": [
              "Retrieval: find, find_by, where, order, limit, offset, first/last",
              "Laziness and chaining: building queries across methods and scopes",
              "Bang methods (find_by!) and handling RecordNotFound"
            ],
            "do": [
              "Chain where/order/limit in the console and read the generated SQL with to_sql",
              "Build a search that composes conditions only when params are present",
              "Handle RecordNotFound with rescue_from in a controller"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record querying", "https://guides.rubyonrails.org/active_record_querying.html"]
            ]
          },
          {
            "t": "Scopes",
            "d": "Named, chainable, composable query fragments. Scopes turn repeated where clauses into a readable query vocabulary.",
            "lv": 2,
            "time": "~2h",
            "tip": "Always use lambdas for scopes: scope :published, -> { where(published: true) }. A bare where without a lambda evaluates once at class load and goes stale.",
            "learn": [
              "Defining scopes with lambdas and chaining them",
              "Default scopes: why the community recommends avoiding them",
              "Scopes vs class methods: when each reads better"
            ],
            "do": [
              "Define published, recent, and by_author scopes and chain all three",
              "Trigger the stale-scope bug with a non-lambda and fix it",
              "Replace three duplicated where chains in controllers with scopes"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record querying: scopes", "https://guides.rubyonrails.org/active_record_querying.html#scopes"]
            ]
          },
          {
            "t": "Joins & Aggregations",
            "d": "Query across associations with joins and summarize with group and count. SQL power through the ActiveRecord lens.",
            "lv": 3,
            "time": "~3h",
            "tip": "joins is for filtering by associated data; includes is for avoiding N+1 when displaying it. Using joins to fix N+1 is the classic mix-up.",
            "learn": [
              "joins, left_outer_joins, and filtering on associated tables",
              "group, count, sum, average, and having for aggregations",
              "Selecting computed columns and reading them as attributes"
            ],
            "do": [
              "Find posts with comments using joins and a condition on comments",
              "Count posts per author with group and order by the count",
              "Compute an average rating per product in a single query"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record querying", "https://guides.rubyonrails.org/active_record_querying.html"]
            ]
          },
          {
            "t": "N+1 Queries & Optimization",
            "d": "The number one Rails performance killer: one query per row in a loop. Spot it, fix it with includes, and verify with the bullet gem.",
            "lv": 3,
            "time": "~4h",
            "tip": "includes preloads associations in a constant number of queries; joins does not preload at all. When a view touches post.author.name in a loop, you want includes.",
            "learn": [
              "The N+1 pattern and reading it in the development log",
              "includes, preload, eager_load: three preloading strategies",
              "The bullet gem: automated N+1 detection in development"
            ],
            "do": [
              "Build a page that triggers N+1 and count queries in the log",
              "Fix it with includes and verify the count collapses",
              "Install bullet and let it flag the next N+1 before you do"
            ],
            "tools": ["Rails", "bullet"],
            "res": [
              ["Active Record querying: eager loading", "https://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations"],
              ["bullet gem", "https://github.com/flyerhest/bullet"]
            ]
          },
          {
            "t": "Raw SQL & Transactions",
            "d": "Escape hatches for the 5 percent ActiveRecord cannot express: raw SQL fragments and atomic transaction blocks.",
            "lv": 3,
            "time": "~3h",
            "tip": "Never interpolate values into raw SQL strings. Use bound parameters (where('age > ?', x)) so ActiveRecord escapes them: string interpolation here is an injection vulnerability.",
            "learn": [
              "find_by_sql and select_all for full SQL control",
              "Sanitized fragments: where with bound parameters and Arel basics",
              "Transactions: ActiveRecord::Base.transaction and rollback on failure"
            ],
            "do": [
              "Write one find_by_sql query for something the query interface cannot do",
              "Wrap a multi-record operation in a transaction and force a rollback",
              "Convert a string-interpolated where into bound parameters"
            ],
            "tools": ["Rails", "ActiveRecord"],
            "res": [
              ["Active Record querying", "https://guides.rubyonrails.org/active_record_querying.html"]
            ]
          },
          {
            "t": "Databases: SQLite to PostgreSQL",
            "d": "SQLite for development speed, PostgreSQL for production power. Configure database.yml and switch environments cleanly.",
            "lv": 2,
            "time": "~3h",
            "tip": "Develop against PostgreSQL if you deploy to PostgreSQL. SQLite's type flexibility hides bugs (like string dates) that Postgres will reject at the worst moment.",
            "learn": [
              "database.yml: adapters, pools, and per-environment configuration",
              "The pg gem, creating databases, and running migrations on Postgres",
              "Postgres superpowers: jsonb, full-text search, and real constraints"
            ],
            "do": [
              "Point a project at local PostgreSQL and migrate from scratch",
              "Store and query a jsonb column with ActiveRecord",
              "Tune the connection pool size and explain what it controls"
            ],
            "tools": ["Rails", "PostgreSQL"],
            "res": [
              ["Configuring Rails applications: databases", "https://guides.rubyonrails.org/configuring.html#configuring-a-database"],
              ["Rails guides: getting started", "https://guides.rubyonrails.org/getting_started.html"]
            ]
          }
        ]
      },
      {
        "t": "Views, Forms & Hotwire",
        "d": "ERB templates, forms that bind to models, and Hotwire for modern interactivity without a JavaScript framework.",
        "lv": 2,
        "children": [
          {
            "t": "ERB Templates & Rendering",
            "d": "<%= %> outputs, <% %> executes. Learn ERB essentials and how Rails finds the right template for every action.",
            "lv": 1,
            "time": "~3h",
            "tip": "<%= %> escapes HTML by default. Reaching for raw or html_safe should feel dangerous, because it is: that is your XSS protection you are bypassing.",
            "learn": [
              "ERB tags: output, execution, and comments",
              "Implicit rendering: how Rails finds app/views/posts/show.html.erb",
              "Explicit render: templates, partials, json, plain, and status codes"
            ],
            "do": [
              "Build show and index templates rendering real records",
              "Render JSON from an action and consume it with curl",
              "Trigger an XSS attempt in a form field and confirm it renders escaped"
            ],
            "tools": ["Rails", "ERB"],
            "res": [
              ["Action View overview", "https://guides.rubyonrails.org/action_view_overview.html"],
              ["Layouts and rendering", "https://guides.rubyonrails.org/layouts_and_rendering.html"]
            ]
          },
          {
            "t": "Layouts & Partials",
            "d": "Layouts wrap every page; partials extract reusable chunks. Compose views instead of duplicating markup.",
            "lv": 2,
            "time": "~2h",
            "tip": "Name partials after what they render (_post.html.erb) and pass locals explicitly. Implicit instance variable reliance makes partials unreusable surprises.",
            "learn": [
              "application.html.erb: yield, content_for, and per-page customization",
              "Partials: render partial with locals and collection rendering",
              "Layout selection per controller and action"
            ],
            "do": [
              "Build a layout with navigation, flash display, and content areas",
              "Extract a repeated card into a partial rendered as a collection",
              "Use content_for to inject page-specific titles and scripts"
            ],
            "tools": ["Rails", "ERB"],
            "res": [
              ["Layouts and rendering", "https://guides.rubyonrails.org/layouts_and_rendering.html"]
            ]
          },
          {
            "t": "View Helpers",
            "d": "Helpers keep logic out of templates: link_to, number formatting, and your own custom helpers for repeated presentation.",
            "lv": 2,
            "time": "~2h",
            "tip": "If a helper needs more than two arguments or starts branching heavily, it wants to be a presenter or ViewComponent. Helpers are for small, pure presentation functions.",
            "learn": [
              "Essential built-ins: link_to, button_to, image_tag, number_to_currency, time_ago_in_words",
              "Writing custom helpers in app/helpers",
              "The boundary: presentation logic in helpers, business logic in models"
            ],
            "do": [
              "Replace hand-written anchor tags with link_to throughout a view",
              "Write a helper that formats a status badge with CSS classes",
              "Move conditional display logic out of a template into a helper"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action View helpers", "https://guides.rubyonrails.org/action_view_helpers.html"]
            ]
          },
          {
            "t": "Forms with form_with",
            "d": "form_with binds forms to models: fields populate, errors display, and routes resolve automatically. The heart of Rails interactivity.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always bind forms to models (form_with model: @post). Unbound forms mean hand-writing values, error display, and routes: all the things Rails automates for you.",
            "learn": [
              "form_with model:: text_field, check_box, select, and submit wiring",
              "Nested attributes: fields_for and accepts_nested_attributes_for",
              "Re-rendering on validation failure so errors and input survive"
            ],
            "do": [
              "Build a model-backed create/edit form end to end",
              "Add nested fields for a has_many association",
              "Submit invalid data and verify errors render with input preserved"
            ],
            "tools": ["Rails"],
            "res": [
              ["Action View form helpers", "https://guides.rubyonrails.org/form_helpers.html"]
            ]
          },
          {
            "t": "Turbo Drive & Frames",
            "d": "Hotwire's Turbo makes Rails apps feel instant: Drive speeds navigation, Frames update page regions independently.",
            "lv": 2,
            "time": "~4h",
            "tip": "Turbo Drive intercepts every link and form by default. When something behaves oddly (a JS widget not initializing), the fix is usually a turbo:load listener, not disabling Turbo.",
            "learn": [
              "Turbo Drive: SPA-like navigation without writing JavaScript",
              "Turbo Frames: independent page regions with lazy loading",
              "The turbo:load event and adapting JavaScript to Turbo navigation"
            ],
            "do": [
              "Observe Drive speeding up navigation in a fresh Rails 8 app",
              "Wrap a slow sidebar in a Turbo Frame with lazy loading",
              "Fix a JavaScript initialization issue using the turbo:load event"
            ],
            "tools": ["Rails", "Hotwire", "Turbo"],
            "res": [
              ["Hotwire", "https://hotwired.dev/"],
              ["Turbo handbook", "https://turbo.hotwired.dev/handbook/introduction"]
            ]
          },
          {
            "t": "Turbo Streams",
            "d": "Streams push HTML updates over websockets or in form responses. Real-time UI with server-rendered HTML.",
            "lv": 3,
            "time": "~3h",
            "tip": "Streams replace DOM surgery: instead of writing JavaScript to update five elements, broadcast one stream that re-renders them server-side. Less JS, fewer bugs.",
            "learn": [
              "Stream actions: append, prepend, replace, remove, update",
              "Responding with turbo_stream format from controller actions",
              "Broadcasting from models: broadcasts_to and live updates"
            ],
            "do": [
              "Make a create action respond with a turbo_stream that appends the new record",
              "Broadcast model changes so all open browsers update live",
              "Build a live comment feed without writing custom JavaScript"
            ],
            "tools": ["Rails", "Turbo", "Action Cable"],
            "res": [
              ["Turbo Streams", "https://turbo.hotwired.dev/handbook/streams"]
            ]
          },
          {
            "t": "Stimulus Controllers",
            "d": "Stimulus adds sprinkles of JavaScript where HTML needs behavior: toggles, autocomplete, character counters. Small controllers, big wins.",
            "lv": 2,
            "time": "~3h",
            "tip": "Stimulus is for behavior, not state: if your controller is managing complex state, you probably want a Turbo Frame round-trip instead of more JavaScript.",
            "learn": [
              "Controllers, targets, actions, and values: the Stimulus vocabulary",
              "data-controller and data-action attributes wiring HTML to JS",
              "Lifecycle callbacks: connect, disconnect, and valuesChanged"
            ],
            "do": [
              "Build a character counter controller for a textarea",
              "Add a toggle controller that shows and hides a section",
              "Wire a controller value to configure behavior from HTML"
            ],
            "tools": ["Rails", "Stimulus"],
            "res": [
              ["Stimulus handbook", "https://stimulus.hotwired.dev/handbook/introduction"]
            ]
          },
          {
            "t": "Assets: Propshaft & Import Maps",
            "d": "Rails 8 serves assets with Propshaft and JavaScript with import maps. Understand the modern pipeline and when to reach for bundlers.",
            "lv": 2,
            "time": "~3h",
            "tip": "Import maps load JavaScript as ES modules directly in the browser: no build step. It is perfect until you need npm packages with deep dependency trees, then cssbundling/jsbundling with esbuild is the upgrade path.",
            "learn": [
              "Propshaft: the asset pipeline that replaced Sprockets in Rails 8",
              "Import maps: pinning JavaScript modules without a bundler",
              "When to upgrade: jsbundling-rails and cssbundling-rails with esbuild"
            ],
            "do": [
              "Add a stylesheet and a Stimulus controller to a fresh app and trace the pipeline",
              "Pin a JavaScript library with an import map and import it",
              "Precompile assets for production and inspect the digested filenames"
            ],
            "tools": ["Rails", "Propshaft", "importmap-rails"],
            "res": [
              ["Asset pipeline", "https://guides.rubyonrails.org/asset_pipeline.html"],
              ["importmap-rails", "https://github.com/rails/importmap-rails"]
            ]
          },
          {
            "t": "Pagination: Pagy & Kaminari",
            "d": "Never render unbounded lists. Paginate with a gem and give users fast pages with real navigation.",
            "lv": 2,
            "time": "~2h",
            "tip": "Pagy is dramatically faster than older pagination gems because it avoids extra count queries where possible. For most apps the difference is invisible, but the API is clean either way.",
            "learn": [
              "Why pagination matters: memory, query time, and UX",
              "Pagy: the fast modern default with its helpers",
              "Kaminari: the classic alternative and its scope-based API"
            ],
            "do": [
              "Paginate an index action with Pagy and render the navigation",
              "Seed ten thousand records and compare page load with and without pagination",
              "Style the pagination controls to match your layout"
            ],
            "tools": ["pagy", "Kaminari"],
            "res": [
              ["pagy", "https://github.com/ddnexus/pagy"],
              ["Kaminari", "https://github.com/kaminari/kaminari"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Authentication & Authorization",
        "d": "Rails 8 ships a built-in authentication generator; the ecosystem offers Devise, Pundit, and CanCanCan. Know who the user is, then what they may do.",
        "lv": 2,
        "children": [
          {
            "t": "Built-in Authentication Generator (Rails 8)",
            "d": "rails generate authentication scaffolds sessions, password resets, and the User model. Modern Rails starts here, not with a gem.",
            "lv": 2,
            "time": "~4h",
            "tip": "Read every file the generator creates. Generated auth you do not understand is a security liability: know where passwords are hashed and sessions are created.",
            "learn": [
              "What the generator creates: sessions controller, password model, mailers",
              "has_secure_password: bcrypt hashing built into ActiveRecord",
              "The Authentication concern: current_user and authenticate in controllers"
            ],
            "do": [
              "Run the generator on a fresh app and map every generated file",
              "Sign up, log in, and reset a password through the real UI",
              "Protect a controller with the generated authentication and test access"
            ],
            "tools": ["Rails", "bcrypt"],
            "res": [
              ["Rails authentication generator", "https://guides.rubyonrails.org/generators.html"],
              ["has_secure_password", "https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html"]
            ]
          },
          {
            "t": "Devise",
            "d": "Devise is the battle-tested authentication ecosystem: modules for every auth feature, used in countless production apps.",
            "lv": 2,
            "time": "~4h",
            "tag": "opt",
            "tip": "Devise is powerful but opinionated and harder to customize than the built-in generator. Choose it for its ecosystem (omniauth, JWT extensions), not by default.",
            "learn": [
              "Devise modules: database_authenticatable, recoverable, rememberable, validatable",
              "Customizing views, controllers, and strong parameters for extra fields",
              "OmniAuth integration for login with Google or GitHub"
            ],
            "do": [
              "Install Devise and run through its setup generator",
              "Customize the registration views and permit an extra user field",
              "Add one OmniAuth provider and log in with it"
            ],
            "tools": ["Devise", "OmniAuth"],
            "res": [
              ["Devise", "https://github.com/heartcombo/devise"]
            ]
          },
          {
            "t": "Authorization with Pundit",
            "d": "Authentication is identity; authorization is permission. Pundit policies answer 'may this user do this to this record?' in plain Ruby.",
            "lv": 3,
            "time": "~3h",
            "tip": "Authorize in the controller, decide in the policy. A controller action that checks roles inline will be duplicated by the third action; a policy keeps the rule in one place.",
            "learn": [
              "Policy classes: one per model with query methods like update?",
              "authorize and policy_scope: enforcing and scoping in controllers",
              "Handling NotAuthorizedError with a friendly redirect"
            ],
            "do": [
              "Write a PostPolicy with owner-only update and admin override",
              "Enforce it with authorize and scope index with policy_scope",
              "Test each policy rule directly as plain Ruby unit tests"
            ],
            "tools": ["Pundit"],
            "res": [
              ["Pundit", "https://github.com/varvet/pundit"]
            ]
          },
          {
            "t": "CanCanCan",
            "d": "The alternative authorization style: a single Ability class defining all permissions centrally. Pick the style your team prefers.",
            "lv": 3,
            "time": "~2h",
            "tag": "opt",
            "tip": "Ability files grow into god-objects on large apps. If your Ability class passes 200 lines, that is Pundit-shaped pain telling you to switch patterns.",
            "learn": [
              "The Ability class: can and cannot definitions with conditions",
              "load_and_authorize_resource: automatic enforcement in controllers",
              "Checking abilities in views to hide unauthorized actions"
            ],
            "do": [
              "Define abilities for three roles in one Ability class",
              "Enforce them automatically in a controller",
              "Hide edit links in views for unauthorized users"
            ],
            "tools": ["CanCanCan"],
            "res": [
              ["CanCanCan", "https://github.com/CanCanCommunity/cancancan"]
            ]
          }
        ]
      },
      {
        "t": "Testing & Debugging",
        "d": "Rails makes testing pleasant: fast unit tests, system tests in real browsers, and debugging tools that show you the truth.",
        "lv": 2,
        "children": [
          {
            "t": "Testing Mindset & Minitest",
            "d": "Rails ships with Minitest and fixtures. Learn the testing pyramid for Rails and write your first model and controller tests.",
            "lv": 2,
            "time": "~1d",
            "tip": "Test behavior through public interfaces: call model methods, hit controller actions. Tests coupled to internals break on every refactor and teach you to fear change.",
            "learn": [
              "The Rails testing pyramid: unit, integration, system",
              "Minitest assertions, fixtures, and the test database",
              "Running tests: bin/rails test and testing in parallel"
            ],
            "do": [
              "Write model tests for validations and custom methods",
              "Write an integration test that posts a form and follows the redirect",
              "Run the full suite and get it green"
            ],
            "tools": ["Rails", "Minitest"],
            "res": [
              ["Testing Rails applications", "https://guides.rubyonrails.org/testing.html"]
            ]
          },
          {
            "t": "RSpec with rspec-rails",
            "d": "RSpec's expressive syntax dominates the Rails world. describe, let, and matchers that read like documentation.",
            "lv": 2,
            "time": "~1d",
            "tip": "Use let for lazy test setup and factories for data. Instance variables in before blocks create mystery guests: tests that depend on state defined far away.",
            "learn": [
              "describe/context/it, expect syntax, and core matchers",
              "Request specs: testing the full stack through HTTP",
              "shoulda-matchers for one-line validation and association specs"
            ],
            "do": [
              "Convert your Minitest model specs to RSpec",
              "Write request specs covering the CRUD cycle with status assertions",
              "Add shoulda-matchers and collapse validation specs to one-liners"
            ],
            "tools": ["RSpec", "rspec-rails", "shoulda-matchers"],
            "res": [
              ["rspec-rails", "https://github.com/rspec/rspec-rails"],
              ["Better Specs", "https://www.betterspecs.org/"]
            ]
          },
          {
            "t": "Factories with FactoryBot",
            "d": "Factories build valid test data on demand. Replace brittle fixtures with composable factories and traits.",
            "lv": 3,
            "time": "~3h",
            "tip": "Define the minimum valid factory, then use traits for variations. A factory that builds the world makes every test slow and every failure mysterious.",
            "learn": [
              "Defining factories, sequences, and associations",
              "Traits and transient attributes for variations",
              "build vs create vs build_stubbed: speed vs realism tradeoffs"
            ],
            "do": [
              "Write factories for your core models with associations",
              "Add traits for published/draft states and use them in specs",
              "Replace a slow create-heavy spec with build_stubbed and measure"
            ],
            "tools": ["FactoryBot"],
            "res": [
              ["factory_bot", "https://github.com/thoughtbot/factory_bot"]
            ]
          },
          {
            "t": "System Tests with Capybara",
            "d": "Drive a real browser through your app: click links, fill forms, assert what users see. The highest-confidence tests you can write.",
            "lv": 3,
            "time": "~4h",
            "tip": "System tests are slow, so spend them on critical paths: signup, checkout, the core workflow. Everything else belongs in faster request specs.",
            "learn": [
              "Capybara DSL: visit, click_on, fill_in, and matchers",
              "Headless Chrome with Selenium: how system tests run",
              "Dealing with timing: Capybara's automatic waiting and when it is not enough"
            ],
            "do": [
              "Write a system test for user signup end to end",
              "Test a JavaScript interaction (Turbo or Stimulus) in the browser",
              "Debug a flaky test by screenshotting on failure"
            ],
            "tools": ["Capybara", "Selenium"],
            "res": [
              ["Capybara", "https://github.com/teamcapybara/capybara"],
              ["System testing", "https://guides.rubyonrails.org/testing.html#system-testing"]
            ]
          },
          {
            "t": "Debugging: debug gem & Console",
            "d": "binding.break stops time inside your app. Combine it with rails console and the log to diagnose anything.",
            "lv": 2,
            "time": "~2h",
            "tip": "Reproduce in the console first. If you can trigger the bug with three lines in rails console, you understand it; if you cannot, you are guessing.",
            "learn": [
              "The debug gem: binding.break, stepping, and evaluating in context",
              "rails console: exploring data and testing code against the real app",
              "Reading stack traces and the development log like a detective"
            ],
            "do": [
              "Drop binding.break in a controller and inspect params and instance variables",
              "Reproduce a bug in rails console before fixing it",
              "Read a full stack trace and identify the exact line of your code at fault"
            ],
            "tools": ["debug", "Rails"],
            "res": [
              ["Debugging Rails applications", "https://guides.rubyonrails.org/debugging_rails_applications.html"]
            ]
          },
          {
            "t": "Logging & Structured Events",
            "d": "Rails.logger for humans, Rails.event for machines. Rails 8.1's structured event reporting feeds modern observability pipelines.",
            "lv": 3,
            "time": "~2h",
            "tip": "Log context, not just messages: user id, request id, and duration turn 'payment failed' from a mystery into a searchable event.",
            "learn": [
              "Log levels, tagged logging, and lograge for single-line request logs",
              "Rails.event.notify: structured events with tags and context (Rails 8.1+)",
              "What to log in production vs development"
            ],
            "do": [
              "Add tagged logging with request IDs across a request",
              "Emit a structured event for a key business action and subscribe to it",
              "Configure lograge and compare the output to default logs"
            ],
            "tools": ["Rails", "lograge"],
            "res": [
              ["Debugging Rails applications", "https://guides.rubyonrails.org/debugging_rails_applications.html"]
            ]
          },
          {
            "t": "Local CI with bin/ci",
            "d": "Rails 8.1 declares CI in config/ci.rb and runs it with bin/ci. Your laptop becomes a first-class test runner before you push.",
            "lv": 3,
            "time": "~2h",
            "tag": "opt",
            "tip": "CI that only runs remotely gets ignored until the PR is red. bin/ci makes the same checks one command away locally, where fixing them is cheap.",
            "learn": [
              "config/ci.rb: declaring test, lint, and security steps as code",
              "bin/ci: running the full pipeline locally",
              "Brakeman and bundler-audit: security scanning in the pipeline"
            ],
            "do": [
              "Run bin/ci on your app and fix the first failure it reports",
              "Add brakeman to the pipeline and review its findings",
              "Mirror the local steps in your hosted CI config"
            ],
            "tools": ["Rails", "brakeman"],
            "res": [
              ["Rails guides", "https://guides.rubyonrails.org/"],
              ["brakeman", "https://github.com/presidentbeef/brakeman"]
            ]
          }
        ]
      },
      {
        "t": "Production Rails",
        "d": "Background jobs, caching, real-time features, and deploying with Kamal. The Rails 8 operations playbook.",
        "lv": 3,
        "children": [
          {
            "t": "Background Jobs with Solid Queue",
            "d": "Rails 8 runs background jobs on your database with Solid Queue: no Redis required. ActiveJob is the unified interface.",
            "lv": 3,
            "time": "~4h",
            "tip": "Jobs must be idempotent: assume every job can run twice. Design the job so a retry is harmless, or one deploy hiccup becomes duplicate emails and double charges.",
            "learn": [
              "ActiveJob: the abstraction over every queue backend",
              "Solid Queue: database-backed jobs as the Rails 8 default",
              "Retries, scheduling, and monitoring with the Mission Control dashboard"
            ],
            "do": [
              "Move a slow mailer call into an ActiveJob and enqueue it",
              "Configure retries with exponential backoff on a flaky job",
              "Schedule a recurring job and monitor it in Mission Control"
            ],
            "tools": ["Rails", "Solid Queue"],
            "res": [
              ["Active Job basics", "https://guides.rubyonrails.org/active_job_basics.html"],
              ["Solid Queue", "https://github.com/rails/solid_queue"]
            ]
          },
          {
            "t": "Caching with Solid Cache",
            "d": "Cache fragments, pages, and computed values with Solid Cache on your database. Russian-doll caching makes it composable.",
            "lv": 3,
            "time": "~3h",
            "tip": "Cache at the fragment level with cache keys that include the record: <% cache post %>. When the post updates, the key changes and the cache busts itself.",
            "learn": [
              "Rails.cache: fetch, read, write, and expiring entries",
              "Fragment caching in views and Russian-doll nesting",
              "Solid Cache as the database-backed store and cache versioning"
            ],
            "do": [
              "Add fragment caching to an expensive view and measure the speedup",
              "Nest caches Russian-doll style and update a child to watch invalidation",
              "Cache a computed value with fetch and a versioned key"
            ],
            "tools": ["Rails", "Solid Cache"],
            "res": [
              ["Rails caching guide", "https://guides.rubyonrails.org/caching_with_rails.html"],
              ["Solid Cache", "https://github.com/rails/solid_cache"]
            ]
          },
          {
            "t": "Real-time with Action Cable & Solid Cable",
            "d": "WebSockets in Rails: channels, streams, and broadcasting. Solid Cable runs it on your database in Rails 8.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "Start with Turbo Streams over Action Cable before writing custom channel code. Most real-time needs are 'update this list', which streams already solve.",
            "learn": [
              "Channels, streams, and the client-side subscription model",
              "Broadcasting from models and controllers",
              "Solid Cable: the database adapter replacing Redis for Cable"
            ],
            "do": [
              "Build a live notification feed with a channel and broadcasts",
              "Subscribe from the browser console and watch messages arrive",
              "Secure the channel with verified authentication"
            ],
            "tools": ["Rails", "Action Cable"],
            "res": [
              ["Action Cable overview", "https://guides.rubyonrails.org/action_cable_overview.html"]
            ]
          },
          {
            "t": "Active Storage",
            "d": "Uploads without the pain: attach files to records, generate variants, and serve from local disk or cloud storage.",
            "lv": 3,
            "time": "~4h",
            "tip": "Validate attachments: content type and size limits at the model level. Unrestricted uploads are how servers fill disks and serve malware.",
            "learn": [
              "has_one_attached and has_many_attached: the attachment API",
              "Variants: on-demand image transformations",
              "Direct uploads and service configuration: local, S3, and mirrors"
            ],
            "do": [
              "Attach avatars to users with an upload form",
              "Generate thumbnail variants and serve them in views",
              "Configure a cloud service and verify uploads land there"
            ],
            "tools": ["Rails", "Active Storage"],
            "res": [
              ["Active Storage overview", "https://guides.rubyonrails.org/active_storage_overview.html"]
            ]
          },
          {
            "t": "Action Mailer & Previews",
            "d": "Send email like you render views: mailers, templates, and previews that let you design emails in the browser.",
            "lv": 3,
            "time": "~3h",
            "tip": "Always send email from background jobs, never inline in requests. SMTP is slow and flaky; a stalled mail server should not stall your web response.",
            "learn": [
              "Mailers as controllers for email: actions, layouts, and multipart templates",
              "Previews: rendering emails in the browser during development",
              "Delivery in production: SMTP services and background job delivery"
            ],
            "do": [
              "Build a welcome mailer with HTML and text parts",
              "Preview it in the browser and iterate on the design",
              "Deliver it asynchronously through ActiveJob"
            ],
            "tools": ["Rails", "Action Mailer"],
            "res": [
              ["Action Mailer basics", "https://guides.rubyonrails.org/action_mailer_basics.html"]
            ]
          },
          {
            "t": "Internationalization (i18n)",
            "d": "One codebase, many languages: locale files, the t helper, and translating models, dates, and forms.",
            "lv": 3,
            "time": "~2h",
            "tag": "opt",
            "tip": "Externalize strings from the start with t(). Retrofitting i18n means touching every view, which is why monolingual apps stay monolingual forever.",
            "learn": [
              "Locale files, the t helper, and scoped keys",
              "Localizing dates, numbers, and model attribute names",
              "Setting locale from URL, subdomain, or user preference"
            ],
            "do": [
              "Extract a page's strings into locale files with t()",
              "Add a second locale and switch between them",
              "Localize date formats and model validation messages"
            ],
            "tools": ["Rails"],
            "res": [
              ["Rails internationalization", "https://guides.rubyonrails.org/i18n.html"]
            ]
          },
          {
            "t": "Security Hardening",
            "d": "Rails protects you by default, but configuration is your job: secrets, headers, and knowing which protections exist.",
            "lv": 3,
            "time": "~3h",
            "tip": "Run brakeman on every app before it touches production. It finds the mass-assignment, injection, and XSS issues that code review misses.",
            "learn": [
              "Built-in protections: XSS escaping, CSRF tokens, SQL injection via parameterization",
              "Credentials: encrypted credentials.yml.enc and per-environment keys",
              "Security headers, force_ssl, and dependency auditing with bundler-audit"
            ],
            "do": [
              "Run brakeman and fix every warning it reports",
              "Move a secret into encrypted credentials and rotate the key",
              "Enable force_ssl and verify security headers with curl -I"
            ],
            "tools": ["Rails", "brakeman", "bundler-audit"],
            "res": [
              ["Securing Rails applications", "https://guides.rubyonrails.org/security.html"],
              ["brakeman", "https://github.com/presidentbeef/brakeman"]
            ]
          },
          {
            "t": "Deploying with Kamal",
            "d": "Kamal deploys containerized Rails apps to your own servers with zero-downtime. The modern Rails deployment story.",
            "lv": 3,
            "time": "~1d",
            "tip": "Practice deploys on a cheap VPS before production matters. Your first kamal deploy will surface environment issues: find them on a staging server, not launch day.",
            "learn": [
              "kamal init and deploy.yml: servers, registry, and environment config",
              "Zero-downtime deploys: health checks and rolling container swaps",
              "Accessories: running Postgres and Redis alongside your app"
            ],
            "do": [
              "Containerize your app and deploy it to a VPS with kamal deploy",
              "Run migrations and console commands through kamal app exec",
              "Deploy a change and watch the zero-downtime rollout"
            ],
            "tools": ["Kamal", "Docker"],
            "res": [
              ["Kamal", "https://github.com/basecamp/kamal"],
              ["Rails guides", "https://guides.rubyonrails.org/"]
            ]
          },
          {
            "t": "Capstone: Ship a Production Rails App",
            "d": "Prove the whole roadmap: a real app with auth, jobs, caching, tests, and a Kamal deploy to a live server.",
            "lv": 3,
            "time": "~1w",
            "badge": "PROJECT",
            "tip": "Scope it like a product: one real user need, done completely, deployed publicly. A finished small app beats an abandoned ambitious one every time.",
            "learn": [
              "Scoping a shippable product: one user, one job-to-be-done, done well",
              "Putting it together: ActiveRecord, Hotwire, Solid Queue, RSpec suite",
              "Operating it: deploy with Kamal, monitor, fix the first real bug"
            ],
            "do": [
              "Build and deploy a complete app: auth, CRUD, background jobs, uploads",
              "Write request and system tests covering the critical user flows",
              "Share the live URL, collect feedback, and ship one improvement"
            ],
            "tools": ["Rails", "PostgreSQL", "Kamal", "RSpec", "Docker"],
            "res": [
              ["Rails guides", "https://guides.rubyonrails.org/"],
              ["Kamal", "https://github.com/basecamp/kamal"]
            ]
          }
        ]
      }
    ]
  }
});
