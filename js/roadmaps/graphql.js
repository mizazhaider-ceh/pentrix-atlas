/* Atlas roadmap data: GraphQL (graphql) */
ROADMAPS.push({
  "id": "graphql",
  "title": "GraphQL",
  "icon": "🕸️",
  "color": "#fda4af",
  "desc": "Master GraphQL end to end: schema design, resolvers, clients, caching, security, and federation at scale.",
  "kind": "skill",
  "root": {
    "t": "GraphQL",
    "d": "From first query to federated supergraphs in production.",
    "children": [
      {
        "t": "GraphQL Fundamentals",
        "d": "What GraphQL is, the problems it solves, and honest judgment about when to use it.",
        "lv": 1,
        "children": [
          {
            "t": "What GraphQL Is (and Isn't)",
            "d": "A query language and runtime for APIs: one endpoint, a typed schema, and clients that ask for exactly what they need.",
            "lv": 1,
            "time": "~2h",
            "tip": "GraphQL is not a database and not a replacement for your backend. It is a layer that shapes how clients talk to whatever sits behind it.",
            "learn": [
              "The mental model: schema as contract, query as request, resolvers as implementation",
              "GraphQL vs SQL: similar syntax family, completely different jobs",
              "What the spec covers (language, execution) and what it leaves to you (transport, auth)"
            ],
            "do": [
              "Run your first query in a public GraphQL playground and read the schema tab",
              "Draw the request flow: client query, server validation, resolver execution, JSON response",
              "Explain GraphQL to a friend in three sentences without saying 'REST'"
            ],
            "tools": ["GraphQL Playground", "Altair"],
            "res": [
              ["GraphQL Official: Introduction", "https://graphql.org/learn/"],
              ["GraphQL Spec", "https://spec.graphql.org/"]
            ]
          },
          {
            "t": "The Problems GraphQL Solves",
            "d": "Over-fetching, under-fetching, and version churn: the REST pain points that made GraphQL exist.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Over-fetching: downloading 40 fields to show 3",
              "Under-fetching: the N-request waterfall to assemble one screen",
              "Version churn: how a typed, evolving schema avoids /v1 /v2 /v3"
            ],
            "do": [
              "Fetch a GitHub user via REST, count the requests and bytes for one profile screen",
              "Fetch the same screen via the GitHub GraphQL API in a single query",
              "List three screens in an app you know that would benefit from shaped responses"
            ],
            "tools": ["GitHub GraphQL Explorer", "curl"],
            "res": [
              ["GraphQL: Thinking in Graphs", "https://graphql.org/learn/thinking-in-graphs/"],
              ["GitHub GraphQL API", "https://docs.github.com/en/graphql"]
            ]
          },
          {
            "t": "Thinking in Graphs",
            "d": "Model your domain as a graph of connected types instead of a list of endpoints. Everything else follows.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Nodes and edges: users connected to posts connected to comments",
              "Traversal: one query walks the graph as far as the client wants",
              "Why this kills the 'which endpoint gives me X with Y' question"
            ],
            "do": [
              "Sketch a social app as a graph on paper: types as nodes, relationships as edges",
              "Write one query that traverses three levels deep (user, posts, comments, authors)",
              "Compare the graph sketch to a REST endpoint list for the same app"
            ],
            "tools": ["GraphQL Voyager"],
            "res": [
              ["GraphQL: Thinking in Graphs", "https://graphql.org/learn/thinking-in-graphs/"]
            ]
          },
          {
            "t": "GraphQL vs REST: When to Choose",
            "d": "The senior call: client diversity, payload control, caching needs, and team reality decide, not hype.",
            "lv": 1,
            "time": "~3h",
            "tip": "If your API is consumed by one web client you control, REST is often simpler. GraphQL shines with many diverse clients and fast-moving product needs.",
            "learn": [
              "GraphQL strengths: many clients, mobile payload control, rapid UI iteration",
              "REST strengths: HTTP caching, simplicity, file uploads, mature tooling",
              "Hybrid patterns: GraphQL gateway over REST services"
            ],
            "do": [
              "Write a decision matrix for a fictional startup with web, iOS, and partner API consumers",
              "Prototype the same feature both ways and compare time-to-ship",
              "Write an ADR defending your choice with named tradeoffs"
            ],
            "tools": ["Postman", "Apollo Studio"],
            "res": [
              ["GraphQL vs REST (Apollo)", "https://www.apollographql.com/blog/graphql-vs-rest"]
            ]
          }
        ]
      },
      {
        "t": "Writing Queries",
        "d": "The client side: fields, variables, fragments, directives, and mutations that read like the UI.",
        "lv": 1,
        "children": [
          {
            "t": "Anatomy of a Query",
            "d": "Fields and nesting: a query is a JSON-shaped request where the response mirrors exactly what you asked for.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Fields: selecting exactly the data you need, nothing more",
              "Nesting: traversing relationships in one round trip",
              "The response mirrors the query shape, which makes UI mapping trivial"
            ],
            "do": [
              "Query a public API for nested data three levels deep",
              "Remove fields one by one and watch the response shrink",
              "Map a query result directly to UI components without transformation"
            ],
            "tools": ["Altair", "GraphiQL"],
            "res": [
              ["GraphQL: Queries", "https://graphql.org/learn/queries/"]
            ]
          },
          {
            "t": "Arguments and Variables",
            "d": "Parametrize queries like functions: arguments filter at the field level, variables keep queries reusable and safe.",
            "lv": 1,
            "time": "~2h",
            "tip": "Never interpolate user input into query strings. Variables are parsed separately, which is what keeps injection out.",
            "learn": [
              "Field arguments: filtering, pagination, and lookups inline",
              "Variables: typed inputs declared once, passed separately from the query",
              "Default values and required (non-null) variable types"
            ],
            "do": [
              "Rewrite a query with hardcoded ids to use $variables",
              "Send the same query with different variable values via curl",
              "Add default values for optional arguments and test omitting them"
            ],
            "tools": ["Altair", "curl"],
            "res": [
              ["GraphQL: Queries and Mutations", "https://graphql.org/learn/queries/"]
            ]
          },
          {
            "t": "Aliases and Fragments",
            "d": "Reuse without repetition: aliases fetch the same field twice, fragments share field sets across queries.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Aliases: renaming fields in the response to avoid collisions",
              "Fragments: named field sets reused across queries and components",
              "Fragment colocation: each UI component declares its own data needs"
            ],
            "do": [
              "Fetch two users in one query using aliases (user1: user(id: 1))",
              "Extract a repeated field set into a fragment and reuse it in three queries",
              "Organize fragments per component in a small frontend project"
            ],
            "tools": ["Apollo Client", "urql"],
            "res": [
              ["GraphQL: Fragments", "https://graphql.org/learn/queries/#fragments"]
            ]
          },
          {
            "t": "Directives: @include and @skip",
            "d": "Conditional fields without string-building: let variables decide which fields come back.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "@include(if:) and @skip(if:): declarative conditional selection",
              "Why directives beat building query strings in code",
              "Custom directives on the server side (a preview of @auth and @cache)"
            ],
            "do": [
              "Toggle a detailed view with @include(if: $detailed) instead of two queries",
              "Refactor string-concatenated queries into one query with directives",
              "Read a schema that uses a custom directive and infer its behavior"
            ],
            "tools": ["Altair"],
            "res": [
              ["GraphQL: Directives", "https://graphql.org/learn/queries/#directives"]
            ]
          },
          {
            "t": "Mutations",
            "d": "Writing data: mutations are queries with side effects, and good ones return the changed data.",
            "lv": 1,
            "time": "~3h",
            "tip": "Return the mutated object (or the fields the UI needs) from every mutation. The client should not need a refetch to update the screen.",
            "learn": [
              "Mutation syntax and why mutations run serially while queries run in parallel",
              "Input objects: one structured argument instead of ten loose ones",
              "Payload design: returning the changed object plus errors"
            ],
            "do": [
              "Write create, update, and delete mutations against a demo API",
              "Design an input type for a complex form and validate it server-side",
              "Update the UI from the mutation payload without refetching"
            ],
            "tools": ["Altair", "Apollo Studio"],
            "res": [
              ["GraphQL: Mutations", "https://graphql.org/learn/mutations/"]
            ]
          },
          {
            "t": "Introspection",
            "d": "Ask the API about itself: the built-in schema query that powers every playground, docs page, and codegen tool.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "__schema and __type: the meta-queries every server answers",
              "How tooling (playgrounds, codegen, linters) is built on introspection",
              "Why you might disable it in production (security topic preview)"
            ],
            "do": [
              "Run an introspection query by hand and read the raw schema JSON",
              "Generate docs from introspection for an API you did not write",
              "Compare introspection output before and after a schema change"
            ],
            "tools": ["GraphQL Voyager", "Altair"],
            "res": [
              ["GraphQL: Introspection", "https://graphql.org/learn/introspection/"]
            ]
          }
        ]
      },
      {
        "t": "Schema Design",
        "d": "The server contract: types, fields, and patterns that make a schema a joy to consume for years.",
        "lv": 2,
        "children": [
          {
            "t": "Schema Definition Language",
            "d": "SDL is the blueprint: human-readable type definitions that are the single source of truth for your API.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "type, Query, Mutation, Subscription root types",
              "Non-null (!) and lists ([Type]): the type modifiers that encode your guarantees",
              "Descriptions as documentation: every type and field deserves one"
            ],
            "do": [
              "Write an SDL schema for a blog (users, posts, comments) from scratch",
              "Mark fields non-null where the guarantee holds and defend each choice",
              "Add descriptions to every type and view the generated docs"
            ],
            "tools": ["GraphQL Yoga", "Apollo Server"],
            "res": [
              ["GraphQL: Schemas and Types", "https://graphql.org/learn/schema/"]
            ]
          },
          {
            "t": "Objects, Scalars, and Enums",
            "d": "The building blocks: object types for entities, scalars for leaves, enums for fixed choices.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Built-in scalars: Int, Float, String, Boolean, ID",
              "Custom scalars: DateTime, URL, JSON, and when to create one",
              "Enums for fixed sets (Role, Status) instead of magic strings"
            ],
            "do": [
              "Implement a DateTime scalar with proper serialization and parsing",
              "Replace stringly-typed status fields with enums across a schema",
              "Decide ID vs String for identifiers and apply it consistently"
            ],
            "tools": ["graphql-scalars"],
            "res": [
              ["graphql-scalars Library", "https://the-guild.dev/graphql/scalars"]
            ]
          },
          {
            "t": "Interfaces and Unions",
            "d": "Polymorphism in the schema: shared interfaces for common fields, unions for 'one of these types'.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Interfaces: Node with id, or Node with common fields across types",
              "Unions: SearchResult = User | Post | Comment with inline fragments",
              "__typename and type resolution on the server",
              "When to reach for each: shared behavior vs heterogeneous lists"
            ],
            "do": [
              "Model a feed of mixed content with a union and query it with inline fragments",
              "Add a Node interface and implement global object identification",
              "Handle __typename in a client to render different components per type"
            ],
            "tools": ["Apollo Server", "Apollo Client"],
            "res": [
              ["GraphQL: Interfaces and Unions", "https://graphql.org/learn/schema/#interfaces"]
            ]
          },
          {
            "t": "Input Types and Mutation Design",
            "d": "Design mutations like a product: one input object, clear errors, and payloads the UI can use.",
            "lv": 2,
            "time": "~3h",
            "tip": "One input object per mutation, named after the mutation (CreatePostInput). Ten flat arguments is a code smell.",
            "learn": [
              "Input types vs output types: why inputs are separate and flatter",
              "Payload pattern: { post, errors } instead of throwing on validation failures",
              "Idempotency keys for mutations that charge money or send messages"
            ],
            "do": [
              "Refactor flat-argument mutations into input objects",
              "Return structured validation errors in the payload and render them in a form",
              "Add clientMutationId-style tracking for optimistic UI reconciliation"
            ],
            "tools": ["GraphQL Yoga", "Apollo Server"],
            "res": [
              ["GraphQL: Input Types", "https://graphql.org/learn/schema/#input-types"]
            ]
          },
          {
            "t": "Pagination: The Connection Spec",
            "d": "Relay-style cursor connections: edges, nodes, and pageInfo. The standard way to paginate GraphQL.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Connection, Edge, and PageInfo types and what each carries",
              "first/after and last/before: forward and backward pagination",
              "Why cursors must be opaque and stable"
            ],
            "do": [
              "Implement a connection field with cursor encoding over a real dataset",
              "Paginate forward and backward through the same list",
              "Add totalCount and test edge cases (empty, single page, exact page boundary)"
            ],
            "tools": ["Apollo Server", "graphql-relay"],
            "res": [
              ["Relay Cursor Connections Spec", "https://relay.dev/graphql/connections.htm"]
            ]
          },
          {
            "t": "Schema-First vs Code-First",
            "d": "Write SDL by hand or generate it from code: two workflows, different strengths.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Schema-first: SDL as the design artifact, resolvers wired to it",
              "Code-first: decorators or builder APIs generate the schema (TypeGraphQL, Nexus, Pothos)",
              "Type safety: code-first keeps TypeScript types and schema in sync automatically"
            ],
            "do": [
              "Build the same schema both ways and compare the developer experience",
              "Generate TypeScript types from SDL with GraphQL Code Generator",
              "Choose an approach for a team project and document why"
            ],
            "tools": ["TypeGraphQL", "Pothos", "GraphQL Code Generator"],
            "res": [
              ["Pothos (code-first)", "https://pothos-graphql.dev/"],
              ["GraphQL Code Generator", "https://the-guild.dev/graphql/codegen"]
            ]
          },
          {
            "t": "Schema Design Patterns",
            "d": "Evolving without breaking: nullable-first, deprecating fields, and patterns that keep old clients working.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Additive evolution: add fields, never remove or change types",
              "@deprecated with a reason and a migration path",
              "Nullability as versioning: why new fields should usually be nullable"
            ],
            "do": [
              "Evolve a schema across three 'releases' without breaking an old client query",
              "Deprecate a field with @deprecated and track its usage",
              "Run a breaking-change detector in CI against the production schema"
            ],
            "tools": ["GraphQL Inspector", "Apollo Studio"],
            "res": [
              ["GraphQL Inspector", "https://the-guild.dev/graphql/inspector"]
            ]
          }
        ]
      },
      {
        "t": "Execution and Resolvers",
        "d": "How queries actually run: resolvers, the N+1 problem, DataLoader, and error handling.",
        "lv": 2,
        "children": [
          {
            "t": "Resolvers: How Fields Get Data",
            "d": "One function per field: resolvers are where your schema meets your database, and their shape decides your performance.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Resolver signature: parent, args, context, info",
              "Default resolvers: when a property lookup is all you need",
              "Context: the shared per-request bag for auth, loaders, and services"
            ],
            "do": [
              "Write resolvers for a nested schema over an in-memory store",
              "Put the authenticated user and DataLoader instances in context",
              "Use the info argument to inspect which fields were requested"
            ],
            "tools": ["GraphQL Yoga", "Apollo Server"],
            "res": [
              ["GraphQL: Execution", "https://spec.graphql.org/October2021/#sec-Execution"]
            ]
          },
          {
            "t": "The N+1 Problem",
            "d": "The classic GraphQL performance trap: one query becomes a thousand database hits, and how to see it happening.",
            "lv": 2,
            "time": "~3h",
            "tip": "If your GraphQL API is slow, it is the N+1 problem until proven otherwise. Log query counts per request before optimizing anything else.",
            "learn": [
              "How nested resolvers multiply database queries",
              "Detecting it: query logging and counting per request",
              "Why it is worse in GraphQL than REST: the client controls the depth"
            ],
            "do": [
              "Build a naive nested resolver and count the queries for 10 posts with authors",
              "Watch the count explode as nesting deepens",
              "Fix it first with a join, then properly with batching"
            ],
            "tools": ["DataLoader"],
            "res": [
              ["DataLoader GitHub", "https://github.com/graphql/dataloader"]
            ]
          },
          {
            "t": "DataLoader: Batching and Caching",
            "d": "The standard cure for N+1: batch many loads into one query and cache within the request.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Batching: collecting keys across a tick and loading them in one query",
              "Per-request caching: the same entity loaded once even if requested twice",
              "One loader per entity type, created fresh per request in context"
            ],
            "do": [
              "Replace naive resolvers with DataLoader and measure the query count drop",
              "Implement batch functions for users-by-id and posts-by-author-id",
              "Prove per-request cache isolation: loaders must not leak across requests"
            ],
            "tools": ["DataLoader"],
            "res": [
              ["DataLoader Documentation", "https://github.com/graphql/dataloader#dataloader"]
            ]
          },
          {
            "t": "Error Handling: Errors vs Data",
            "d": "Partial success is a feature: the errors array, nullable fields, and designing for degraded responses.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The errors array: path, message, extensions for each failure",
              "Null bubbling: how a non-null violation propagates up",
              "Union-based errors vs thrown errors: when each fits"
            ],
            "do": [
              "Trigger a resolver error mid-query and observe partial data plus errors",
              "Design nullable boundaries so one failing field does not nuke the whole query",
              "Add error codes in extensions that clients can switch on"
            ],
            "tools": ["Apollo Server", "GraphQL Yoga"],
            "res": [
              ["GraphQL Spec: Errors", "https://spec.graphql.org/October2021/#sec-Errors"]
            ]
          },
          {
            "t": "Validation and Coercion",
            "d": "What happens before resolvers run: the spec's validation rules and how values get coerced to your types.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Built-in validation: fields exist, types match, fragments are valid",
              "Coercion: how input values become your scalar and enum values",
              "Custom validation rules: adding your own checks to the pipeline"
            ],
            "do": [
              "Send invalid queries (unknown field, wrong arg type) and read the validation errors",
              "Add a custom validation rule (e.g. max query depth) to a server",
              "Test coercion edge cases: string to ID, int to float, null to non-null"
            ],
            "tools": ["GraphQL Yoga", "graphql-js"],
            "res": [
              ["graphql-js Validation", "https://github.com/graphql/graphql-js"]
            ]
          }
        ]
      },
      {
        "t": "Serving GraphQL",
        "d": "Getting GraphQL onto the wire: servers, transports, auth, subscriptions, and file uploads.",
        "lv": 2,
        "children": [
          {
            "t": "GraphQL Over HTTP",
            "d": "The standard transport: POST with a JSON body, and the spec that finally standardized it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The GraphQL-over-HTTP spec: method, body shape, and response format",
              "GET vs POST: when queries can ride a GET for cacheability",
              "Status codes: why GraphQL mostly returns 200 and puts errors in the body"
            ],
            "do": [
              "Send a query with curl as POST JSON, then as a GET with query params",
              "Handle a batched request (array of operations) on your server",
              "Decide your status-code policy and document it for clients"
            ],
            "tools": ["curl", "graphql-http"],
            "res": [
              ["GraphQL Over HTTP Spec", "https://graphql.github.io/graphql-over-http/"]
            ]
          },
          {
            "t": "Picking a Server",
            "d": "Yoga, Apollo Server, Mercurius, graphql-http: what each one optimizes for and how to choose.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "graphql-http: minimal, spec-focused, framework-agnostic",
              "Yoga: batteries-included with subscriptions, file uploads, and plugins",
              "Apollo Server: the enterprise default with Studio integration; Mercurius for Fastify shops"
            ],
            "do": [
              "Stand up the same schema on two servers and compare setup code",
              "Add a plugin (logging, auth) on Yoga and middleware on Apollo",
              "Benchmark a simple query across servers to see that the difference is small"
            ],
            "tools": ["GraphQL Yoga", "Apollo Server", "Mercurius", "graphql-http"],
            "res": [
              ["GraphQL Yoga", "https://the-guild.dev/graphql/yoga"],
              ["Apollo Server", "https://www.apollographql.com/docs/apollo-server/"],
              ["Mercurius", "https://mercurius.dev/"]
            ]
          },
          {
            "t": "Authentication and Authorization",
            "d": "Who can see which field: auth at the resolver level, because a single endpoint means the perimeter moved.",
            "lv": 3,
            "time": "~3h",
            "tip": "With one endpoint, you cannot rely on route-level auth. Every resolver that touches sensitive data must check permissions itself.",
            "learn": [
              "Authenticating the request: tokens in headers, user in context",
              "Field-level authorization: hiding fields vs erroring on them",
              "Directive-based auth (@auth) vs checks inside resolvers"
            ],
            "do": [
              "Gate resolvers by role: admins see emails, others do not",
              "Implement @auth directive and apply it to sensitive fields",
              "Test that introspection does not leak the existence of hidden fields"
            ],
            "tools": ["GraphQL Yoga", "Apollo Server"],
            "res": [
              ["Apollo: Authorization", "https://www.apollographql.com/docs/apollo-server/security/authentication"]
            ]
          },
          {
            "t": "Subscriptions",
            "d": "Real-time GraphQL: pushing updates to clients over WebSockets or SSE when data changes.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Subscription roots and event sources: what triggers a push",
              "Transports: graphql-ws over WebSockets vs SSE",
              "Filtering: only pushing events the subscriber is allowed to see"
            ],
            "do": [
              "Build a subscription for new comments with graphql-ws",
              "Add auth to the subscription handshake and filter events per user",
              "Handle reconnects and missed events with a sensible strategy"
            ],
            "tools": ["graphql-ws", "GraphQL Yoga"],
            "res": [
              ["graphql-ws", "https://the-guild.dev/graphql/ws"],
              ["GraphQL Over SSE", "https://github.com/enisdenjo/graphql-sse"]
            ]
          },
          {
            "t": "File Uploads",
            "d": "GraphQL has no native upload: the multipart spec that everyone uses and its security implications.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The multipart request spec: mapping files to Upload scalar variables",
              "Server support and client libraries that implement it",
              "Validating uploads: size, type, and scanning before storage"
            ],
            "do": [
              "Implement an upload mutation with the Upload scalar",
              "Upload a file with curl using multipart form data",
              "Add size and MIME-type validation plus virus-scan hooks"
            ],
            "tools": ["graphql-upload", "GraphQL Yoga"],
            "res": [
              ["GraphQL Multipart Spec", "https://github.com/jaydensmith/graphql-multipart-request-spec"]
            ],
            "tag": "opt"
          },
          {
            "t": "@defer and @stream",
            "d": "Incremental delivery: send the fast fields first and stream the slow ones as they resolve.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "@defer: splitting a query into an initial payload plus patches",
              "@stream: streaming list items as they become available",
              "Client support and when incremental delivery actually helps UX"
            ],
            "do": [
              "Mark a slow field @defer and observe the multipart response",
              "Stream a long list with @stream and render items progressively",
              "Measure perceived load time with and without defer on a slow query"
            ],
            "tools": ["Apollo Server", "Apollo Client"],
            "res": [
              ["Apollo: @defer", "https://www.apollographql.com/docs/apollo-server/data/defer"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Clients and Caching",
        "d": "The frontend half: Apollo Client, urql, Relay, normalized caches, and optimistic UI.",
        "lv": 2,
        "children": [
          {
            "t": "Apollo Client Fundamentals",
            "d": "The most-used GraphQL client: queries, mutations, and the normalized cache that makes UIs snappy.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "useQuery and useMutation: the core hooks and their states",
              "The normalized cache: entities stored by id, queries as views over them",
              "Cache updates after mutations: refetch vs manual writes"
            ],
            "do": [
              "Wire Apollo Client into a React app and fetch a list",
              "Perform a mutation and update the cache without refetching",
              "Inspect the cache in Apollo DevTools to see normalization"
            ],
            "tools": ["Apollo Client", "Apollo DevTools"],
            "res": [
              ["Apollo Client Docs", "https://www.apollographql.com/docs/react/"]
            ]
          },
          {
            "t": "urql: The Lightweight Client",
            "d": "A smaller, simpler client with an exchange pipeline you can actually understand and extend.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Exchanges: the middleware pipeline (dedup, cache, fetch)",
              "Document caching vs normalized caching tradeoffs",
              "When urql's simplicity beats Apollo's power"
            ],
            "do": [
              "Set up urql in a React app with the default exchanges",
              "Write a custom exchange (e.g. auth header injection)",
              "Compare bundle size and setup code against Apollo Client"
            ],
            "tools": ["urql"],
            "res": [
              ["urql Documentation", "https://commerce.nearform.com/open-source/urql/docs/"]
            ]
          },
          {
            "t": "Normalized Caching Deep Dive",
            "d": "How normalized caches really work: cache keys, field policies, and merging paginated lists.",
            "lv": 3,
            "time": "~3h",
            "tip": "Most 'stale UI' bugs are cache identity bugs. If two objects share an id shape but are different types, your cache will merge them into nonsense.",
            "learn": [
              "Cache identity: __typename + id and custom keyFields",
              "Field policies: read and merge functions for custom behavior",
              "Merging paginated results and handling cache eviction"
            ],
            "do": [
              "Configure typePolicies with custom keyFields for a tricky type",
              "Write a merge function that appends paginated edges correctly",
              "Debug a stale-UI bug by inspecting normalized cache entries"
            ],
            "tools": ["Apollo Client"],
            "res": [
              ["Apollo: Caching", "https://www.apollographql.com/docs/react/caching/overview"]
            ]
          },
          {
            "t": "Optimistic UI",
            "d": "Update the screen before the server answers: optimistic responses that make apps feel instant.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Optimistic responses: predicting the mutation result",
              "Rollback: reverting cleanly when the server disagrees",
              "Where optimism is safe (toggles, likes) vs dangerous (payments)"
            ],
            "do": [
              "Add an optimistic like button with instant feedback",
              "Simulate a server rejection and watch the rollback",
              "Decide per-mutation whether optimism is appropriate in your app"
            ],
            "tools": ["Apollo Client", "urql"],
            "res": [
              ["Apollo: Optimistic UI", "https://www.apollographql.com/docs/react/performance/optimistic-ui"]
            ]
          },
          {
            "t": "Code Generation",
            "d": "Generate typed hooks from your queries: the end of hand-written TypeScript types for API data.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "From operations to types: how codegen reads your queries and schema",
              "TypedDocumentNode and generated hooks per operation",
              "CI integration: regenerating on schema change"
            ],
            "do": [
              "Set up GraphQL Code Generator for a project and generate hooks",
              "Refactor a component to use generated types and delete manual interfaces",
              "Break the schema on purpose and watch TypeScript catch the stale query"
            ],
            "tools": ["GraphQL Code Generator"],
            "res": [
              ["GraphQL Code Generator", "https://the-guild.dev/graphql/codegen"]
            ]
          },
          {
            "t": "Relay: The Power-User Client",
            "d": "Facebook's client: compiler-driven, fragment-colocated, and strict. The most powerful and most demanding option.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The Relay compiler: queries checked and optimized at build time",
              "Fragment colocation and data masking: components only see their own data",
              "@connection and pagination handling built in"
            ],
            "do": [
              "Set up the Relay compiler in a React app",
              "Colocate fragments with components and query with data masking",
              "Implement pagination with @connection"
            ],
            "tools": ["Relay"],
            "res": [
              ["Relay Documentation", "https://relay.dev/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Security and Performance",
        "d": "Hardening GraphQL: query complexity, persisted operations, and monitoring a single-endpoint API.",
        "lv": 3,
        "children": [
          {
            "t": "Query Complexity and Depth Limiting",
            "d": "Clients control query shape, so they can craft expensive ones. Cost analysis keeps one bad query from melting your servers.",
            "lv": 3,
            "time": "~3h",
            "tip": "Depth limiting alone is not enough: a shallow query can still be expensive if every field is a list. Score by estimated cost, not just depth.",
            "learn": [
              "Depth limiting: capping nesting levels",
              "Cost analysis: assigning weights to fields and rejecting over-budget queries",
              "Pagination caps: max page sizes as a first line of defense"
            ],
            "do": [
              "Craft a deeply nested query that times out a naive server",
              "Add depth limiting and watch it get rejected",
              "Implement cost-based analysis with per-field weights and a max budget"
            ],
            "tools": ["graphql-cost-analysis", "GraphQL Yoga"],
            "res": [
              ["Apollo: Securing Queries", "https://www.apollographql.com/docs/apollo-server/security/validation"]
            ]
          },
          {
            "t": "Introspection and Production Hardening",
            "d": "Locking down the single endpoint: introspection control, error masking, and transport security.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Disabling introspection in production without breaking tooling",
              "Masking internal errors: generic messages to clients, full details to logs",
              "Timeouts per operation and payload size limits"
            ],
            "do": [
              "Disable introspection in prod config and verify tooling still works via persisted schema",
              "Trigger an internal error and confirm the client sees a generic message",
              "Set max query size and operation timeouts, then test the limits"
            ],
            "tools": ["Apollo Server", "GraphQL Yoga"],
            "res": [
              ["OWASP: GraphQL Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "Persisted Operations",
            "d": "Ship query hashes instead of query text: smaller payloads, an allowlist of known queries, and a kill switch for abuse.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Automatic persisted queries (APQ): the hash-then-full-query handshake",
              "Persisted query allowlists: only pre-registered operations may run",
              "How allowlists turn GraphQL's flexibility from a risk into a non-issue"
            ],
            "do": [
              "Enable APQ on client and server and watch the two-step handshake",
              "Build a strict allowlist and verify unknown queries are rejected",
              "Measure payload savings on a mobile client"
            ],
            "tools": ["Apollo Server", "Apollo Client"],
            "res": [
              ["Apollo: Persisted Queries", "https://www.apollographql.com/docs/apollo-server/performance/apq"]
            ]
          },
          {
            "t": "Rate Limiting GraphQL",
            "d": "One endpoint breaks naive rate limiting: limit by cost and by client, not just by request count.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Why per-request limits fail when one request can cost 100x another",
              "Cost-based buckets: deducting estimated complexity from a quota",
              "Identifying clients: API keys and per-token budgets"
            ],
            "do": [
              "Implement cost-based rate limiting using query complexity scores",
              "Test that a cheap query passes while an expensive one is rejected under quota",
              "Design tiered quotas for a public GraphQL API"
            ],
            "tools": ["Redis", "graphql-rate-limit"],
            "res": [
              ["OWASP: GraphQL Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "Monitoring and Tracing",
            "d": "Observability for GraphQL: per-operation metrics, resolver-level traces, and field usage analytics.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Operation metrics: naming operations so dashboards are useful",
              "Resolver tracing: finding the slow field in a slow query",
              "Field usage: knowing which schema fields anyone actually queries"
            ],
            "do": [
              "Name all operations and build a dashboard of latency per operation",
              "Add OpenTelemetry tracing to resolvers and find the slow field",
              "Collect field-usage stats for a week and propose schema fields to deprecate"
            ],
            "tools": ["Apollo Studio", "OpenTelemetry", "Grafana"],
            "res": [
              ["Apollo Studio", "https://www.apollographql.com/studio/"]
            ]
          }
        ]
      },
      {
        "t": "Federation and the Ecosystem",
        "d": "GraphQL at organizational scale: federation, gateways, testing, and the production checklist.",
        "lv": 3,
        "children": [
          {
            "t": "Schema Stitching vs Federation",
            "d": "Two ways to compose many GraphQL services into one graph: gateway stitching and declarative federation.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Stitching: the gateway merges schemas with imperative resolver wiring",
              "Federation: subgraphs declare @key and @shareable, composition is automatic",
              "When stitching still wins: wrapping existing REST APIs and legacy graphs"
            ],
            "do": [
              "Stitch two small schemas in a gateway with type merging",
              "Convert them to federated subgraphs and compare the code",
              "Decide which approach fits a team-per-service organization"
            ],
            "tools": ["Apollo Federation", "GraphQL Tools"],
            "res": [
              ["GraphQL Tools Stitching", "https://the-guild.dev/graphql/stitching"]
            ]
          },
          {
            "t": "Apollo Federation in Practice",
            "d": "Building subgraphs: entities, keys, and reference resolvers that let the gateway assemble cross-service queries.",
            "lv": 3,
            "time": "~4h",
            "tip": "Design entity keys early and keep them stable. Changing a @key later is a cross-team migration, not a refactor.",
            "learn": [
              "@key, @shareable, @external: the directives that describe ownership",
              "Reference resolvers: how a subgraph resolves entities it does not own",
              "Composition: the supergraph schema as a build artifact in CI"
            ],
            "do": [
              "Build two subgraphs (users, products) sharing a Review entity",
              "Write reference resolvers and query across the boundary",
              "Run composition in CI and break the build with an incompatible change"
            ],
            "tools": ["Apollo Federation", "Rover CLI"],
            "res": [
              ["Apollo Federation Docs", "https://www.apollographql.com/docs/federation/"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "The Supergraph and Gateway",
            "d": "Operating the composed graph: query planning, the router, and deploying schema changes safely.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Query planning: how the gateway splits one query across subgraphs",
              "The router: Apollo Router in Rust vs Gateway in Node",
              "Safe deployment: schema checks, contracts, and staged rollouts"
            ],
            "do": [
              "Run a federated query and inspect the query plan",
              "Deploy the router with a composed supergraph",
              "Set up schema checks that block breaking changes in CI"
            ],
            "tools": ["Apollo Router", "Rover CLI"],
            "res": [
              ["Apollo Router", "https://www.apollographql.com/docs/router/"]
            ]
          },
          {
            "t": "Testing GraphQL APIs",
            "d": "Testing the graph: unit-testing resolvers, integration-testing operations, and schema snapshot tests.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Resolver unit tests with mocked context and loaders",
              "Operation-level integration tests against a test server",
              "Schema snapshots and breaking-change detection in CI"
            ],
            "do": [
              "Unit-test a resolver with a mocked DataLoader",
              "Write integration tests that execute full operations against test data",
              "Add a schema snapshot test that fails on unintended changes"
            ],
            "tools": ["Vitest", "GraphQL Inspector"],
            "res": [
              ["GraphQL Inspector", "https://the-guild.dev/graphql/inspector"]
            ]
          },
          {
            "t": "GraphQL in Production: Checklist",
            "d": "The launch list: everything from persisted operations to runbooks, in the order that prevents incidents.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Pre-launch: complexity limits, persisted operations, introspection off, error masking",
              "Day two: field usage, slow-query log, deprecation process",
              "Incident playbook: killing a bad operation fast"
            ],
            "do": [
              "Run the checklist against your own GraphQL server and fix the gaps",
              "Write a runbook for a runaway-query incident",
              "Set up alerts on p99 operation latency and error rate"
            ],
            "tools": ["Apollo Studio", "Grafana"],
            "res": [
              ["Apollo: Production Checklist", "https://www.apollographql.com/docs/apollo-server/security/security"]
            ]
          }
        ]
      }
    ]
  }
});
