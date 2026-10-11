/* Atlas roadmap data: ASP.NET Core (aspnet-core)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "aspnet-core",
  "title": "ASP.NET Core",
  "icon": "🟪",
  "color": "#7c3aed",
  "desc": "Microsoft's cross-platform web framework end to end: C# and the .NET platform, the request pipeline, APIs, Entity Framework Core, security, real-time apps, and shipping to production.",
  "kind": "skill",
  "root": {
    "t": "ASP.NET Core",
    "d": "Build and ship web apps and APIs on .NET: from the runtime and C# basics to production-grade services.",
    "children": [
      {
        "t": "The .NET Platform",
        "d": "What .NET is, how the SDK works, and the C# you actually need for web development.",
        "lv": 1,
        "children": [
          {
            "t": "What .NET Actually Is",
            "d": "One platform for web, desktop, cloud, and mobile: the CLR, the base class library, and the SDK.",
            "lv": 1,
            "time": "~2h",
            "tip": ".NET is the platform, ASP.NET Core is the web framework, C# is the language, and the .NET SDK is the tooling. Keep those four straight and every doc page makes more sense.",
            "learn": [
              "The pieces: runtime (CLR), base class library (BCL), SDK, and workloads",
              "Why .NET went cross-platform: the move from .NET Framework to modern .NET",
              "Where ASP.NET Core sits: Kestrel, the hosting model, and how it differs from old System.Web"
            ],
            "do": [
              "Install the .NET SDK and run dotnet --info; read every line of the output",
              "Run dotnet new console and inspect the generated csproj file",
              "List the SDKs and runtimes on your machine with dotnet --list-sdks and dotnet --list-runtimes"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["What is .NET", "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet"],
              [".NET fundamentals docs", "https://learn.microsoft.com/en-us/dotnet/fundamentals/"]
            ]
          },
          {
            "t": ".NET 10 LTS & Target Frameworks",
            "d": "LTS vs STS releases, target framework monikers, and why the version you pick matters for years.",
            "lv": 1,
            "time": "~2h",
            "tip": "Start new projects on the current LTS. .NET 10 is LTS (supported to November 2028); .NET 8 and 9 both lost support in November 2026. An app on an unsupported runtime gets no security patches.",
            "learn": [
              "LTS vs STS: release cadence, support windows, and how to read Microsoft's support policy",
              "Target framework monikers (net10.0) and what multi-targeting is for",
              "How a framework retarget actually works: retarget, recompile, re-test"
            ],
            "do": [
              "Open a csproj and change the TargetFramework value, then dotnet build",
              "Compare net8.0, net9.0 and net10.0 entries on the support policy page",
              "Run dotnet --list-runtimes and match each runtime to a supported or unsupported release"
            ],
            "tools": [".NET SDK"],
            "res": [
              [".NET support policy", "https://dotnet.microsoft.com/en-us/platform/support/policy"],
              ["Target frameworks in SDK-style projects", "https://learn.microsoft.com/en-us/dotnet/standard/frameworks"]
            ]
          },
          {
            "t": "The .NET CLI: dotnet new, build, run",
            "d": "Scaffold, build, run, and publish apps from the terminal; the CLI is the heart of the workflow.",
            "lv": 1,
            "time": "~3h",
            "tip": "Learn the CLI even if you live in an IDE. CI servers, containers, and teammates on other OSes all speak dotnet commands, not IDE buttons.",
            "learn": [
              "Scaffolding with dotnet new: webapi, mvc, razor, worker templates and their options",
              "The build lifecycle: restore, build, run, publish, and what each produces",
              "Useful verbs: dotnet watch run, dotnet test, dotnet tool"
            ],
            "do": [
              "Scaffold a web API with dotnet new webapi and run it with dotnet watch run",
              "Publish a self-contained single-file executable with dotnet publish",
              "Install and run a global tool like dotnet-ef"
            ],
            "tools": [".NET SDK"],
            "res": [
              [".NET CLI overview", "https://learn.microsoft.com/en-us/dotnet/core/tools/"]
            ]
          },
          {
            "t": "C# in a Nutshell for Web Devs",
            "d": "The C# you will use daily: types, async/await, LINQ basics, and nullable reference types.",
            "lv": 1,
            "time": "~1d",
            "tip": "async/await is not optional knowledge in ASP.NET Core: every I/O call is async, and blocking on .Result is the classic way to deadlock or starve the thread pool.",
            "learn": [
              "Value types vs reference types, and why nullable reference types catch null bugs at compile time",
              "async and await: the Task model, why I/O is async, and ConfigureAwait in libraries",
              "LINQ basics: Where, Select, FirstOrDefault, and deferred execution",
              "Records, init-only properties, and pattern matching for clean DTOs"
            ],
            "do": [
              "Write a console app that awaits HttpClient calls concurrently with Task.WhenAll",
              "Turn on nullable reference types and fix every warning in a small project",
              "Rewrite a foreach filtering loop as a LINQ query and compare readability"
            ],
            "tools": [".NET SDK", "Visual Studio", "VS Code"],
            "res": [
              ["C# documentation", "https://learn.microsoft.com/en-us/dotnet/csharp/"],
              ["Asynchronous programming with async and await", "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"]
            ]
          },
          {
            "t": "NuGet Packages",
            "d": "Adding libraries with PackageReference, reading versions correctly, and keeping dependencies healthy.",
            "lv": 1,
            "time": "~2h",
            "tip": "Pin your versions with floating versions off: use exact versions in PackageReference and let a tool like Dependabot or Renovate propose upgrades. Silent upgrades cause mystery breakages.",
            "learn": [
              "How PackageReference, restore, and the global packages folder work",
              "Versioning: exact, floating, and what the caret in versions means",
              "Transitive dependencies and how to audit them for vulnerabilities with dotnet list package --vulnerable"
            ],
            "do": [
              "Add a NuGet package to a project and inspect the obj folder after restore",
              "Run dotnet list package --vulnerable and --deprecated on a real project",
              "Set up a local package source or use a private feed conceptually"
            ],
            "tools": ["NuGet", ".NET SDK"],
            "res": [
              ["nuget.org", "https://www.nuget.org"],
              ["NuGet package consumption docs", "https://learn.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow"]
            ]
          },
          {
            "t": "Solution & Project Layout",
            "d": "Structuring solutions and projects so a growing app stays navigable: by feature vs by layer.",
            "lv": 1,
            "time": "~2h",
            "tip": "Organize by feature (vertical slices), not by layer (Controllers/Services/Repos folders). Layer folders scale into a maze; feature folders keep related code together.",
            "learn": [
              "Solutions (.sln) vs projects (.csproj): what each file owns",
              "Common layouts: single-project, layered, vertical slices, Clean Architecture",
              "Class libraries vs web projects, and project-to-project references"
            ],
            "do": [
              "Create a solution with dotnet new sln and add two projects with dotnet sln add",
              "Reorganize a template project's folders into feature folders",
              "Add a class library project and reference it from the web project"
            ],
            "tools": [".NET SDK", "Visual Studio"],
            "res": [
              ["Common web application architectures", "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures"]
            ]
          },
          {
            "t": "IDEs: Visual Studio, VS Code & Rider",
            "d": "Picking an editor, debugging effectively, and using the IDE's ASP.NET Core tooling.",
            "lv": 1,
            "time": "~2h",
            "tag": "opt",
            "tip": "Learn one debugger deeply. Most beginners print-debug; a conditional breakpoint on a failing request tells you in seconds what Console.WriteLine takes minutes to reveal.",
            "learn": [
              "Visual Studio vs VS Code vs Rider: strengths and when to pick each",
              "Debugging: breakpoints, conditional breakpoints, watch windows, call stacks",
              "Hot reload and Edit and Continue for iterating on running apps"
            ],
            "do": [
              "Set a conditional breakpoint in a controller action and inspect the model state",
              "Use hot reload to change a Razor view and an API response without restarting",
              "Profile a slow endpoint with the built-in diagnostic tools"
            ],
            "tools": ["Visual Studio", "VS Code", "JetBrains Rider"],
            "res": [
              ["Visual Studio debugger docs", "https://learn.microsoft.com/en-us/visualstudio/debugger/"]
            ]
          }
        ]
      },
      {
        "t": "The Request Pipeline",
        "d": "How HTTP flows through Kestrel, middleware, configuration, DI, and logging.",
        "lv": 1,
        "children": [
          {
            "t": "How an HTTP Request Flows",
            "d": "From Kestrel's socket to your code: the pipeline, HttpContext, and where each concern lives.",
            "lv": 1,
            "time": "~3h",
            "tip": "Middleware order is everything: routing, authentication, and static files each depend on running at the right position. Read your Program.cs top to bottom as the request's journey.",
            "learn": [
              "Kestrel: the cross-platform web server built into ASP.NET Core",
              "The request pipeline as a chain: each middleware calls the next",
              "HttpContext: Request, Response, User, Items, and RequestServices"
            ],
            "do": [
              "Create a web project and trace a request through Program.cs with breakpoints",
              "Log the path and headers at the start and end of the pipeline",
              "Swap two middleware registrations and observe the behavior change"
            ],
            "tools": [".NET SDK", "Kestrel"],
            "res": [
              ["ASP.NET Core fundamentals", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/"]
            ]
          },
          {
            "t": "Middleware from Scratch",
            "d": "Writing custom middleware, short-circuiting requests, and composing the pipeline.",
            "lv": 1,
            "time": "~4h",
            "tip": "Middleware that does nothing but call next() still costs a frame on every request. Keep the pipeline lean: measure before adding cross-cutting middleware.",
            "learn": [
              "The RequestDelegate signature and the app.Use / app.Run pattern",
              "Short-circuiting: returning a response without calling next",
              "Terminal middleware vs branching with app.Map and app.MapWhen"
            ],
            "do": [
              "Write a custom middleware that adds a correlation ID header to every response",
              "Build a middleware that blocks requests without an API key header",
              "Use app.MapWhen to branch the pipeline for /admin paths"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["ASP.NET Core Middleware", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/"]
            ]
          },
          {
            "t": "Kestrel & Hosting Models",
            "d": "Kestrel configuration, reverse proxies, HTTPS in development, and hosting options.",
            "lv": 2,
            "time": "~3h",
            "tip": "In production Kestrel almost always sits behind a reverse proxy (IIS, Nginx, or a cloud load balancer). Let the proxy handle TLS termination and edge concerns; let Kestrel do what it is fastest at.",
            "learn": [
              "Kestrel vs IIS hosting: in-process, out-of-process, and reverse-proxy models",
              "Binding ports, HTTP/2 and HTTP/3, and request limits",
              "Dev certificates with dotnet dev-certs and trusting them locally"
            ],
            "do": [
              "Configure Kestrel endpoints in appsettings.json (HTTP + HTTPS ports)",
              "Run the app behind a local Nginx reverse proxy",
              "Enable HTTP/2 on an endpoint and verify with a client"
            ],
            "tools": ["Kestrel", "Nginx", "IIS"],
            "res": [
              ["Kestrel web server docs", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel"]
            ]
          },
          {
            "t": "Configuration: appsettings & Options Pattern",
            "d": "appsettings.json, environment variables, and binding config to strongly typed options classes.",
            "lv": 2,
            "time": "~3h",
            "tip": "Bind configuration to IOptions<T> classes, not raw IConfiguration[\"Key\"] strings scattered through your code. A typo in a string key fails silently at runtime; a typo in a property fails at compile time.",
            "learn": [
              "Configuration providers and their precedence: JSON, env vars, command line, user secrets",
              "appsettings.json vs appsettings.Development.json layering",
              "The options pattern: IOptions<T>, IOptionsSnapshot<T>, IOptionsMonitor<T>, and validation"
            ],
            "do": [
              "Bind a settings section to a class and inject IOptions<T> into a service",
              "Override a setting with an environment variable (double-underscore naming)",
              "Add data-annotation validation to an options class so bad config fails fast at startup"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Configuration in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/"],
              ["Options pattern", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options"]
            ]
          },
          {
            "t": "Built-in Dependency Injection",
            "d": "The Microsoft DI container: registration, lifetimes, and the mistakes that cause production bugs.",
            "lv": 2,
            "time": "~4h",
            "tip": "The number one DI bug: injecting a scoped service (like DbContext) into a singleton. The container throws at runtime, or worse, you silently share state across requests. Singleton depends on singleton only.",
            "learn": [
              "Service lifetimes: transient, scoped, singleton, and what each means per request",
              "Registration APIs: AddTransient, AddScoped, AddSingleton, TryAdd, keyed services",
              "Captive dependencies, disposing scopes, and resolving services in background tasks"
            ],
            "do": [
              "Register three services with different lifetimes and log their hash codes across requests",
              "Reproduce the captive dependency error, then fix it with IServiceScopeFactory",
              "Use keyed services to register multiple implementations of one interface"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Dependency injection in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection"]
            ]
          },
          {
            "t": "Logging That Scales",
            "d": "ILogger, log levels, structured logging with Serilog, and sinks that survive production.",
            "lv": 2,
            "time": "~3h",
            "tip": "Log events, not strings: use structured properties like {UserId} instead of string interpolation. Structured logs are searchable and aggregatable; interpolated strings are just text.",
            "learn": [
              "ILogger<T>, log levels, categories, and filtering per provider",
              "Structured logging: message templates and why interpolation defeats them",
              "Serilog: enrichers, sinks (console, file, Seq), and appsettings configuration"
            ],
            "do": [
              "Replace a Console.WriteLine habit with ILogger and message templates",
              "Wire Serilog with a file sink and a Seq sink via appsettings",
              "Add a correlation ID enricher and trace one request across log lines"
            ],
            "tools": ["Serilog", "Seq"],
            "res": [
              ["Logging in .NET", "https://learn.microsoft.com/en-us/dotnet/core/extensions/logging"],
              ["Serilog", "https://serilog.net/"]
            ]
          },
          {
            "t": "Environments & Secrets",
            "d": "Development vs Production behavior, user secrets, and keeping credentials out of source control.",
            "lv": 2,
            "time": "~2h",
            "tip": "Never commit appsettings.Production.json with real secrets. Use user secrets locally, environment variables or a vault in production, and scan your history if one ever leaks.",
            "learn": [
              "IWebHostEnvironment and ASPNETCORE_ENVIRONMENT",
              "User secrets for local development and why they are not for production",
              "Azure Key Vault, environment variables, and the configuration precedence chain"
            ],
            "do": [
              "Store a fake API key in user secrets and read it from your app",
              "Verify the key is not in the repo with a git grep",
              "Branch behavior on env.IsDevelopment() for the developer exception page"
            ],
            "tools": [".NET SDK", "Azure Key Vault"],
            "res": [
              ["Safe storage of app secrets", "https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets"]
            ]
          }
        ]
      },
      {
        "t": "Building APIs",
        "d": "Minimal APIs, controllers, validation, docs, and versioning.",
        "lv": 2,
        "children": [
          {
            "t": "Minimal APIs",
            "d": "Lean HTTP APIs with MapGet and friends: routing, binding, and when minimal beats controllers.",
            "lv": 2,
            "time": "~5h",
            "tip": "Minimal APIs shine for small services and microservices; controllers win for large teams and complex conventions. Pick by team size and complexity, not hype.",
            "learn": [
              "Route handlers: MapGet, MapPost, and the lambda or method-group styles",
              "Parameter binding: route values, query strings, bodies, services via [FromServices]",
              "Route groups, filters on minimal APIs, and typed results"
            ],
            "do": [
              "Build a todo API with MapGet/MapPost/MapPut/MapDelete and an in-memory store",
              "Add a route group with a shared prefix and an endpoint filter",
              "Return TypedResults (Ok, NotFound, Created) instead of raw objects"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Minimal APIs overview", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis"]
            ]
          },
          {
            "t": "Controllers & Attribute Routing",
            "d": "The MVC controller model: ApiController, action results, and attribute routing conventions.",
            "lv": 2,
            "time": "~5h",
            "tip": "Keep controllers thin: they translate HTTP in and out. Business logic belongs in services. A controller action longer than ~15 lines is a smell.",
            "learn": [
              "[ApiController], model binding, and automatic 400 responses",
              "Attribute routing: tokens like [controller]/[action], route constraints",
              "Action results: IActionResult vs ActionResult<T> and why T helps OpenAPI"
            ],
            "do": [
              "Build a ProductsController with full CRUD and proper status codes",
              "Add route constraints ({id:int}) and watch invalid URLs 404",
              "Refactor business logic out of an action into an injected service"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Controller action return types", "https://learn.microsoft.com/en-us/aspnet/core/web-api/action-return-types"],
              ["Routing in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing"]
            ]
          },
          {
            "t": "Model Binding & Input Validation",
            "d": "Turning HTTP input into models safely: binding sources, DataAnnotations, and FluentValidation.",
            "lv": 2,
            "time": "~4h",
            "tip": "Validate at the boundary, every time. DataAnnotations are fine for simple rules; the moment a rule needs another field or a database check, switch to FluentValidation.",
            "learn": [
              "Binding sources: [FromRoute], [FromQuery], [FromBody], [FromForm], [FromHeader]",
              "DataAnnotations: [Required], [Range], [StringLength], and custom attributes",
              "FluentValidation: rule chains, custom validators, and wiring it into the pipeline"
            ],
            "do": [
              "Accept a complex query object with [FromQuery] and validate it",
              "Write a FluentValidation validator with a cross-field rule",
              "Customize the 400 response shape with a consistent error format"
            ],
            "tools": ["FluentValidation"],
            "res": [
              ["Model binding", "https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding"],
              ["FluentValidation docs", "https://docs.fluentvalidation.net/en/latest/"]
            ]
          },
          {
            "t": "Filters: Action, Exception, Result",
            "d": "Cross-cutting logic around actions: when to use filters instead of middleware.",
            "lv": 2,
            "time": "~3h",
            "tip": "Middleware runs outside MVC; filters run inside it, with access to the action, model state, and results. Use filters when you need MVC context (like model validation); middleware when you do not.",
            "learn": [
              "Filter pipeline stages: authorization, resource, action, exception, result",
              "IActionFilter vs IAsyncActionFilter and global registration",
              "Exception filters vs exception-handling middleware: trade-offs"
            ],
            "do": [
              "Write an action filter that logs execution time per action",
              "Create an exception filter that maps domain exceptions to status codes",
              "Register a filter globally and one per-controller, then compare"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Filters in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/filters"]
            ]
          },
          {
            "t": "Responses: Status Codes & Content Negotiation",
            "d": "Returning the right status codes, ProblemDetails errors, and content negotiation done properly.",
            "lv": 2,
            "time": "~3h",
            "tip": "Return 201 Created with a Location header after POSTs, 204 No Content after successful DELETEs, and ProblemDetails for errors. Clients and API consumers rely on these conventions.",
            "learn": [
              "The right code for the right outcome: 200/201/204/400/401/403/404/409/422/500",
              "ProblemDetails (RFC 9457) as the standard error envelope",
              "Content negotiation: Accept headers, formatters, and producing JSON vs XML"
            ],
            "do": [
              "Standardize all error responses on ProblemDetails with a global handler",
              "Return CreatedAtAction with a Location header from a POST endpoint",
              "Add an XML formatter and test content negotiation with Accept headers"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Handle errors in ASP.NET Core web APIs", "https://learn.microsoft.com/en-us/aspnet/core/web-api/handle-errors"]
            ]
          },
          {
            "t": "API Versioning",
            "d": "Evolving APIs without breaking clients: URL, header, and query-string versioning strategies.",
            "lv": 3,
            "time": "~3h",
            "tip": "Version from day one even if v1 is the only version: adding versioning later means touching every client. URL path versioning (/api/v1/...) is the simplest to debug and document.",
            "learn": [
              "Versioning strategies: URL segment, query string, header, media type",
              "The Asp.Versioning packages and how to register version sets",
              "Deprecating versions and communicating sunset headers to clients"
            ],
            "do": [
              "Add URL-segment versioning with two versions of one endpoint",
              "Mark v1 as deprecated and advertise it in responses",
              "Generate separate OpenAPI documents per version"
            ],
            "tools": ["Asp.Versioning"],
            "res": [
              ["API versioning in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/web-api/advanced/versioning"]
            ]
          },
          {
            "t": "OpenAPI Docs with Scalar",
            "d": "Generating OpenAPI specs and beautiful interactive docs from your code.",
            "lv": 2,
            "time": "~3h",
            "tip": "Good docs come from good metadata: ActionResult<T>, ProducesResponseType, and XML comments. Without them your generated spec is vague and your docs lie.",
            "learn": [
              "Built-in OpenAPI generation in modern .NET and the Scalar UI",
              "Documenting with XML comments, ProducesResponseType, and operation IDs",
              "Keeping the spec honest: examples, required fields, and auth schemes"
            ],
            "do": [
              "Enable OpenAPI generation and browse the Scalar UI for your API",
              "Add XML comments and watch them appear in the docs",
              "Export the JSON spec and import it into a client generator"
            ],
            "tools": ["Scalar", "Swashbuckle"],
            "res": [
              ["Get started with OpenAPI in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi"],
              ["Scalar", "https://scalar.com/"]
            ]
          },
          {
            "t": "File Uploads & Downloads",
            "d": "Handling IFormFile uploads, streaming large downloads, and the limits that protect you.",
            "lv": 2,
            "time": "~3h",
            "tip": "Stream files; never load a whole upload into memory. Set MultipartBodyLengthLimit deliberately and validate file types by content sniffing, not by extension.",
            "learn": [
              "IFormFile and multipart/form-data handling",
              "Streaming uploads directly to disk or blob storage",
              "Request size limits, timeouts, and anti-malware scanning hooks"
            ],
            "do": [
              "Build an upload endpoint that streams to disk with a size cap",
              "Serve a file download with proper Content-Disposition and range support",
              "Reject a disguised executable by checking magic bytes, not the extension"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Upload files in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/mvc/models/file-uploads"]
            ]
          }
        ]
      },
      {
        "t": "Data with EF Core",
        "d": "Entity Framework Core: modeling, migrations, LINQ queries, and the loading traps.",
        "lv": 2,
        "children": [
          {
            "t": "EF Core: The Mental Model",
            "d": "What an ORM does for you: DbContext, DbSet, and the unit-of-work pattern under the hood.",
            "lv": 1,
            "time": "~4h",
            "tip": "DbContext is a unit of work, not a database connection. New one per request (scoped), track changes, call SaveChanges once. Long-lived contexts leak memory and stale data.",
            "learn": [
              "DbContext and DbSet: your gateway to the database",
              "The unit-of-work and identity-map ideas behind change tracking",
              "Providers: SQL Server, PostgreSQL, SQLite, and when to pick each"
            ],
            "do": [
              "Scaffold a DbContext with two entities and query them from a console app",
              "Register the context with AddDbContext and inspect its scoped lifetime",
              "Point the same model at SQLite for dev and SQL Server for prod via config"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Entity Framework Core docs", "https://learn.microsoft.com/en-us/ef/core/"]
            ]
          },
          {
            "t": "Code First & Migrations",
            "d": "Evolving your schema with migrations: Add-Migration, Update-Database, and safe team workflows.",
            "lv": 2,
            "time": "~5h",
            "tip": "Review every generated migration like code, because it is code. Auto-generated migrations can drop columns or data; never blindly apply them to a shared database.",
            "learn": [
              "Code First: entities and fluent configuration driving the schema",
              "Migration lifecycle: add, review, apply, roll back",
              "Seeding data and handling migrations in CI/CD pipelines"
            ],
            "do": [
              "Create an initial migration, read the generated Up/Down methods line by line",
              "Add a property to an entity, generate a migration, and apply it",
              "Script a migration to SQL (Script-Migration) for DBA review"
            ],
            "tools": ["Entity Framework Core", "dotnet-ef"],
            "res": [
              ["EF Core migrations", "https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/"]
            ]
          },
          {
            "t": "LINQ Queries That Compile to SQL",
            "d": "Writing queries that translate cleanly: projections, filtering, and the IQueryable cliff edge.",
            "lv": 2,
            "time": "~6h",
            "tip": "Project with Select into DTOs before materializing. Pulling full entities when you need three columns wastes bandwidth and invites lazy-loading N+1 surprises.",
            "learn": [
              "IQueryable vs IEnumerable: deferred execution and where the query actually runs",
              "Projections, filtering, sorting, and paging that translate to SQL",
              "Client evaluation pitfalls and how to spot them in logs"
            ],
            "do": [
              "Write a paged, filtered, sorted product query with projection to a DTO",
              "Enable sensitive data logging locally and read the generated SQL",
              "Find a client-evaluated query in a sample and rewrite it to translate"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Querying data with EF Core", "https://learn.microsoft.com/en-us/ef/core/querying/"]
            ]
          },
          {
            "t": "Loading Strategies: Eager, Lazy, Explicit",
            "d": "Include and ThenInclude, lazy-loading proxies, and killing the N+1 query problem.",
            "lv": 2,
            "time": "~4h",
            "tip": "Eager load what you know you need with Include; that is the default correct choice. Lazy loading is convenient and slow: one extra query per navigation access, usually discovered in production.",
            "learn": [
              "Eager loading with Include/ThenInclude and filtered includes",
              "Lazy loading proxies: how they work and why they are usually a trap",
              "Explicit loading with Entry().Collection().Load() for conditional cases"
            ],
            "do": [
              "Reproduce an N+1 with lazy loading and count the queries in the log",
              "Fix it with a single eager-loaded query and compare query counts",
              "Use a filtered Include to load only active child records"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Loading related data", "https://learn.microsoft.com/en-us/ef/core/querying/related-data/"]
            ]
          },
          {
            "t": "The Change Tracker",
            "d": "Entity states, SaveChanges internals, and handling disconnected entities from APIs.",
            "lv": 2,
            "time": "~4h",
            "tip": "Entities deserialized from JSON are detached: EF does not know they changed. Attach and set the state explicitly, or fetch-then-update. Guessing leads to duplicate inserts or silent no-ops.",
            "learn": [
              "Entity states: Added, Modified, Deleted, Unchanged, Detached",
              "How SaveChanges builds the transaction and orders the SQL",
              "Disconnected updates: the fetch-then-update vs attach patterns"
            ],
            "do": [
              "Inspect ChangeTracker.Entries() states after add, modify, and remove",
              "Implement a PUT endpoint using fetch-then-update",
              "Implement the same endpoint with Attach and EntityState.Modified, and compare SQL"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Change tracking in EF Core", "https://learn.microsoft.com/en-us/ef/core/change-tracking/"]
            ]
          },
          {
            "t": "Relationships: One-to-Many & Many-to-Many",
            "d": "Modeling relationships with navigation properties, conventions, and fluent configuration.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always configure both navigation properties and the foreign key explicitly. Convention-only mapping works until it silently does not, usually on the relationship you forgot to test.",
            "learn": [
              "One-to-many, one-to-one, and many-to-many with navigation properties",
              "Foreign keys, principal/dependent ends, and delete behaviors (cascade, restrict)",
              "Fluent API configuration for what conventions cannot express"
            ],
            "do": [
              "Model Order -> OrderItems -> Product with explicit FKs and cascade rules",
              "Model a many-to-many with a payload join entity",
              "Generate a migration and verify the FK constraints in the SQL"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Relationships in EF Core", "https://learn.microsoft.com/en-us/ef/core/modeling/relationships"]
            ]
          },
          {
            "t": "Raw SQL When LINQ Is Not Enough",
            "d": "FromSql, ExecuteSql, and stored procedures for the queries LINQ cannot express.",
            "lv": 3,
            "time": "~3h",
            "tip": "Parameterize everything: FromSqlInterpolated is safe, string concatenation into FromSqlRaw is SQL injection. The compiler will not save you from a concatenated query.",
            "learn": [
              "FromSql and SqlQuery for raw SELECTs mapped to entities or DTOs",
              "ExecuteSql for non-query commands inside the EF transaction",
              "Mapping stored procedures and table-valued functions"
            ],
            "do": [
              "Rewrite a query LINQ cannot translate with FromSqlInterpolated",
              "Call a stored procedure and map its result set",
              "Run ExecuteSql inside SaveChanges' transaction for a bulk operation"
            ],
            "tools": ["Entity Framework Core"],
            "res": [
              ["Raw SQL queries", "https://learn.microsoft.com/en-us/ef/core/querying/sql-queries"]
            ]
          },
          {
            "t": "Dapper: The Micro-ORM Alternative",
            "d": "When to skip EF for Dapper: raw speed, full SQL control, and minimal magic.",
            "lv": 3,
            "time": "~3h",
            "tag": "opt",
            "tip": "Use Dapper for hot paths and reporting queries, EF for the bulk of the app. Running two data-access styles is fine; running zero with discipline is not.",
            "learn": [
              "Dapper's philosophy: SQL you write, objects it maps",
              "Query, QuerySingle, Execute, and multi-mapping for joins",
              "Where Dapper beats EF (and where it loses: change tracking, migrations)"
            ],
            "do": [
              "Rewrite an EF hot-path query in Dapper and benchmark both with BenchmarkDotNet",
              "Map a two-table join with multi-mapping",
              "Share the connection string and transaction strategy with EF in one app"
            ],
            "tools": ["Dapper", "BenchmarkDotNet"],
            "res": [
              ["Dapper", "https://github.com/DapperLib/Dapper"]
            ]
          }
        ]
      },
      {
        "t": "Auth, Caching & Resilience",
        "d": "Authentication, authorization, distributed caching, and surviving failure.",
        "lv": 2,
        "children": [
          {
            "t": "Authentication Concepts for APIs",
            "d": "Authentication vs authorization, schemes, claims, and choosing the right mechanism.",
            "lv": 2,
            "time": "~4h",
            "tip": "Authentication answers who, authorization answers what. Mixing them up is how endpoints end up authenticated but unprotected: any logged-in user can do anything.",
            "learn": [
              "Authentication vs authorization and where each runs in the pipeline",
              "Schemes: cookies, bearer tokens, API keys, and how they compose",
              "Claims and roles: the identity model ASP.NET Core builds for you"
            ],
            "do": [
              "Draw the auth flow for a cookie app vs a bearer-token API",
              "Inspect the ClaimsPrincipal of a request in the debugger",
              "Configure two schemes and select between them per endpoint"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Authentication in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/"]
            ]
          },
          {
            "t": "JWT Bearer Auth in ASP.NET Core",
            "d": "Issuing and validating JWTs: AddJwtBearer, token lifetimes, and refresh tokens done safely.",
            "lv": 2,
            "time": "~6h",
            "tip": "Keep access tokens short-lived (minutes) and refresh tokens revocable and stored server-side. A JWT cannot be revoked by design, so its lifetime is your exposure window.",
            "learn": [
              "JWT structure: header, payload, signature, and what belongs in claims",
              "Validating tokens: issuer, audience, signing key, and clock skew",
              "Refresh token rotation and why refresh tokens live in a database, not in the JWT"
            ],
            "do": [
              "Build login and refresh endpoints issuing signed JWTs",
              "Configure AddJwtBearer with issuer/audience validation",
              "Implement refresh-token rotation with reuse detection"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["JWT Bearer authentication", "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/"],
              ["jwt.io debugger", "https://jwt.io"]
            ]
          },
          {
            "t": "ASP.NET Core Identity",
            "d": "Full user management: IdentityUser, EF stores, password hashing, roles, and lockout.",
            "lv": 2,
            "time": "~5h",
            "tip": "Do not roll your own password hashing or user store. Identity's PBKDF2 hashing, lockout, and token providers encode a decade of hard lessons; custom code re-learns them the painful way.",
            "learn": [
              "IdentityUser, IdentityRole, and the EF Core stores",
              "Password hashing, lockout, two-factor, and email confirmation flows",
              "Scaffolding Identity UI vs building custom endpoints on top of UserManager"
            ],
            "do": [
              "Scaffold Identity into a project and register/login a user",
              "Customize the user class with extra profile fields via migration",
              "Enforce email confirmation before login"
            ],
            "tools": ["ASP.NET Core Identity", "Entity Framework Core"],
            "res": [
              ["Introduction to Identity", "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity"]
            ]
          },
          {
            "t": "Authorization: Policies & Requirements",
            "d": "Beyond roles: policy-based and resource-based authorization with custom handlers.",
            "lv": 3,
            "time": "~5h",
            "tip": "Roles answer who you are; policies answer what you may do. A policy like CanEditDocument with a custom requirement survives organizational change; a role check sprinkled through controllers does not.",
            "learn": [
              "[Authorize], roles, and policy-based authorization",
              "Custom AuthorizationHandler and IAuthorizationRequirement",
              "Resource-based authorization: checking the actual document being edited"
            ],
            "do": [
              "Create a minimum-age policy with a custom requirement and handler",
              "Implement resource-based auth: only the owner can edit a document",
              "Write integration tests that prove a 403 for the wrong user"
            ],
            "tools": [".NET SDK"],
            "res": [
              ["Authorization in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/security/authorization/"]
            ]
          },
          {
            "t": "OAuth2 & OpenID Connect Login",
            "d": "External logins and identity servers: Google/Microsoft sign-in and when you need your own IdP.",
            "lv": 3,
            "time": "~4h",
            "tip": "Use a hosted identity provider unless identity is your product. Running your own token server means owning key rotation, consent, and every CVE in the protocol stack.",
            "learn": [
              "OAuth2 flows: authorization code with PKCE for apps, client credentials for services",
              "OpenID Connect on top: id tokens vs access tokens",
              "External providers in ASP.NET Core and the account-linking problem"
            ],
            "do": [
              "Add Google external login to an Identity app",
              "Inspect the id token claims at jwt.io",
              "Sketch when you would need Duende IdentityServer vs a hosted provider"
            ],
            "tools": ["Duende IdentityServer", "OpenIddict"],
            "res": [
              ["External identity providers", "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/social/"],
              ["OAuth 2.0 simplified", "https://oauth.net/2/"]
            ]
          },
          {
            "t": "Caching: Memory & Distributed Redis",
            "d": "IMemoryCache, IDistributedCache with Redis, and invalidation strategies that do not lie.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every cache needs an invalidation story written before the first cached value. Cache-aside with explicit eviction on writes beats time-only expiry for data users edit.",
            "learn": [
              "IMemoryCache for single-instance caching and its eviction callbacks",
              "IDistributedCache with Redis for multi-instance apps",
              "Cache-aside pattern, sliding vs absolute expiration, and stampede protection"
            ],
            "do": [
              "Cache a hot query with IMemoryCache and sliding expiration",
              "Switch to Redis-backed IDistributedCache via Docker",
              "Evict the cache entry on write and prove freshness with a test"
            ],
            "tools": ["Redis", "Docker"],
            "res": [
              ["Caching in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory"],
              ["Distributed caching", "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed"]
            ]
          },
          {
            "t": "Resilience with Polly",
            "d": "Retries, circuit breakers, and timeouts for HttpClient calls to flaky dependencies.",
            "lv": 3,
            "time": "~4h",
            "tip": "Retry only idempotent operations, and always add jitter. Retrying a non-idempotent POST can double-charge a customer; synchronized retries can DDoS your own dependency.",
            "learn": [
              "Resilience strategies: retry, circuit breaker, timeout, fallback, rate limiter",
              "Wiring Polly into IHttpClientFactory with AddStandardResilienceHandler",
              "Hedging requests and when not to use it"
            ],
            "do": [
              "Add a retry-with-jitter policy to an HttpClient calling a flaky test API",
              "Trip a circuit breaker on purpose and watch it open, half-open, and close",
              "Load-test with and without the policy and compare failure modes"
            ],
            "tools": ["Polly"],
            "res": [
              ["Polly", "https://github.com/App-vNext/Polly"]
            ]
          },
          {
            "t": "Background Work: Hosted Services & Hangfire",
            "d": "IHostedService for in-process work, Hangfire for durable scheduled and queued jobs.",
            "lv": 3,
            "time": "~4h",
            "tip": "In-process background tasks die with the process and lose work on deploys. Anything that must survive a restart belongs in a durable queue like Hangfire, not a hosted service.",
            "learn": [
              "IHostedService and BackgroundService for recurring in-process work",
              "Hangfire: persistent storage, retries, recurring jobs, and the dashboard",
              "Scoped services in background tasks via IServiceScopeFactory"
            ],
            "do": [
              "Write a BackgroundService that processes a Channel<T> queue",
              "Set up Hangfire with SQL Server storage and schedule a recurring job",
              "Secure the Hangfire dashboard behind authorization"
            ],
            "tools": ["Hangfire"],
            "res": [
              ["Background tasks with hosted services", "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services"],
              ["Hangfire", "https://www.hangfire.io/"]
            ]
          }
        ]
      },
      {
        "t": "Real-time, Testing & Shipping",
        "d": "SignalR, testing at every level, containers, CI/CD, and production deployment.",
        "lv": 3,
        "children": [
          {
            "t": "SignalR: Real-time WebSockets",
            "d": "Hubs, groups, and clients: pushing updates to browsers and apps in real time.",
            "lv": 2,
            "time": "~5h",
            "tip": "Design hub methods like API endpoints: small, authorized, and validated. A hub that accepts arbitrary method calls from clients is remote code execution with extra steps.",
            "learn": [
              "Hubs: methods clients call and methods the server invokes on clients",
              "Groups and users: targeting messages beyond broadcast",
              "Transports (WebSockets, SSE, long polling) and scale-out with Redis backplane"
            ],
            "do": [
              "Build a chat hub with groups per room",
              "Call the hub from a JavaScript client and a .NET client",
              "Authorize hub methods and test an unauthenticated connection"
            ],
            "tools": ["SignalR"],
            "res": [
              ["SignalR overview", "https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction"]
            ]
          },
          {
            "t": "gRPC Services in .NET",
            "d": "Contract-first APIs with Protocol Buffers for service-to-service communication.",
            "lv": 3,
            "time": "~5h",
            "tag": "opt",
            "tip": "gRPC is for service-to-service, not browsers. If your consumers are web frontends, REST or GraphQL fits better; reach for gRPC when two backends need fast, typed contracts.",
            "learn": [
              "Protocol Buffers: messages, services, and code generation",
              "Unary, server-streaming, client-streaming, and bidirectional calls",
              "Deadlines, cancellation, and error codes vs HTTP semantics"
            ],
            "do": [
              "Define a .proto contract and generate the server and client",
              "Implement a streaming endpoint and consume it from a console client",
              "Secure the service with TLS and call credentials"
            ],
            "tools": ["gRPC", "Protocol Buffers"],
            "res": [
              ["gRPC services in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/grpc/"]
            ]
          },
          {
            "t": "Unit Testing with xUnit & Moq",
            "d": "Testing services in isolation: test projects, fixtures, and mocking dependencies.",
            "lv": 2,
            "time": "~6h",
            "tip": "Test behavior, not implementation. A test that mocks five layers and asserts a private method call breaks on every refactor; a test that asserts the outcome survives them.",
            "learn": [
              "xUnit: facts, theories, fixtures, and the test project layout",
              "Mocking with Moq or NSubstitute: setups, verification, and strict vs loose",
              "What to unit test (domain logic) vs what to cover with integration tests"
            ],
            "do": [
              "Add an xUnit project and write tests for a pricing service",
              "Mock a repository with Moq and verify the service calls it correctly",
              "Convert a repeated test into a [Theory] with [InlineData]"
            ],
            "tools": ["xUnit", "Moq", "NSubstitute"],
            "res": [
              ["Unit testing in .NET", "https://learn.microsoft.com/en-us/dotnet/core/testing/"],
              ["xUnit", "https://xunit.net/"]
            ]
          },
          {
            "t": "Integration Tests with WebApplicationFactory",
            "d": "Booting your real app in tests: in-memory servers, test databases, and Testcontainers.",
            "lv": 3,
            "time": "~6h",
            "tip": "Test against the real database engine via Testcontainers, not the EF in-memory provider. The in-memory provider does not enforce constraints or translate SQL, so it proves nothing about your queries.",
            "learn": [
              "WebApplicationFactory: hosting your app in-process for tests",
              "Swapping services for tests: test doubles vs real dependencies in containers",
              "Testcontainers for SQL Server/Postgres and Respawning the database between tests"
            ],
            "do": [
              "Write a test that POSTs to your API and asserts the 201 and the database row",
              "Spin up Postgres in Testcontainers and run migrations against it",
              "Reset database state between tests and keep the suite fast"
            ],
            "tools": ["Testcontainers", "Respawn"],
            "res": [
              ["Integration tests in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests"]
            ]
          },
          {
            "t": "GraphQL with HotChocolate",
            "d": "Flexible client-driven APIs with HotChocolate: schemas, resolvers, and DataLoader.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "GraphQL trades server simplicity for client flexibility. Add query complexity limits and persisted queries before production, or one nested query can melt your database.",
            "learn": [
              "Schema-first vs code-first with HotChocolate",
              "Resolvers, and DataLoader to kill the GraphQL N+1",
              "Subscriptions over WebSockets for real-time GraphQL"
            ],
            "do": [
              "Expose an EF-backed query type with filtering and sorting",
              "Fix an N+1 with a batched DataLoader",
              "Add a subscription and consume it from Banana Cake Pop"
            ],
            "tools": ["HotChocolate"],
            "res": [
              ["HotChocolate (ChilliCream GraphQL platform)", "https://github.com/ChilliCream/graphql-platform"]
            ]
          },
          {
            "t": "Containerizing with Docker",
            "d": "Multi-stage Dockerfiles, Compose for local deps, and images that are small and secure.",
            "lv": 3,
            "time": "~5h",
            "tip": "Use the SDK image to build and the runtime-only image to run. Shipping the SDK in production images bloats them and widens the attack surface for no benefit.",
            "learn": [
              "Multi-stage builds: build in SDK image, run in ASP.NET runtime image",
              "Docker Compose for app + SQL Server/Redis locally",
              "Non-root users, layer caching, and .dockerignore"
            ],
            "do": [
              "Write a multi-stage Dockerfile for your API and run it",
              "Compose the API with SQL Server and Redis for local dev",
              "Scan the image for vulnerabilities and fix the base image tag"
            ],
            "tools": ["Docker", "Docker Compose"],
            "res": [
              ["Containerize a .NET app", "https://learn.microsoft.com/en-us/dotnet/core/docker/build-container"]
            ]
          },
          {
            "t": "CI/CD with GitHub Actions",
            "d": "Automated build, test, and publish pipelines for .NET apps.",
            "lv": 3,
            "time": "~4h",
            "tip": "Cache NuGet packages and the Docker layers in CI, or every run pays full restore and build time. A ten-minute pipeline gets ignored; a three-minute one gets trusted.",
            "learn": [
              "Workflow anatomy: triggers, jobs, steps, and the dotnet setup actions",
              "Build, test with coverage, and publish artifacts",
              "Secrets, environments, and deployment approvals"
            ],
            "do": [
              "Create a workflow that builds and tests on every pull request",
              "Publish artifacts and push a Docker image on main",
              "Add a manual approval gate before the production deploy job"
            ],
            "tools": ["GitHub Actions"],
            "res": [
              ["GitHub Actions docs", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Deployment: Azure, IIS & Linux",
            "d": "Publishing and hosting: Azure App Service, IIS, and self-hosted Linux with a reverse proxy.",
            "lv": 3,
            "time": "~5h",
            "tip": "Deployments should be boring and repeatable: publish profiles in source control, config from environment, and a health check the load balancer can hit before routing traffic.",
            "learn": [
              "dotnet publish: framework-dependent vs self-contained, single-file, ReadyToRun",
              "Azure App Service deployment slots and staging swaps",
              "IIS in-process hosting and Linux + Nginx/systemd setups"
            ],
            "do": [
              "Publish framework-dependent and self-contained builds and compare outputs",
              "Deploy to Azure App Service with a staging slot swap",
              "Set up a Linux VM with Nginx reverse proxy and systemd service"
            ],
            "tools": ["Azure", "IIS", "Nginx"],
            "res": [
              ["Host and deploy ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/"]
            ]
          },
          {
            "t": "Observability: Health Checks & OpenTelemetry",
            "d": "Health endpoints, metrics, and distributed tracing so production stops being a black box.",
            "lv": 3,
            "time": "~4h",
            "tip": "Add health checks before you need them, not during the first outage. Liveness vs readiness probes decide whether Kubernetes restarts you or just stops sending traffic.",
            "learn": [
              "Health checks: liveness, readiness, and custom checks for SQL/Redis",
              "OpenTelemetry: traces, metrics, logs and the OTLP exporter",
              "Correlating a request across services with trace context"
            ],
            "do": [
              "Add /health and /health/ready with database and Redis checks",
              "Instrument with OpenTelemetry and view traces in a local collector",
              "Create an alert on error-rate metrics, not on log text"
            ],
            "tools": ["OpenTelemetry", "Prometheus", "Grafana"],
            "res": [
              ["Health checks in ASP.NET Core", "https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks"],
              ["OpenTelemetry .NET", "https://opentelemetry.io/docs/languages/net/"]
            ]
          }
        ]
      }
    ]
  }
});
