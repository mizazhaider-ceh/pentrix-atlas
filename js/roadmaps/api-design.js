/* Atlas roadmap data: API Design (api-design) */
ROADMAPS.push({
  "id": "api-design",
  "title": "API Design",
  "icon": "🔀",
  "color": "#fde047",
  "desc": "Design APIs people love to use: REST done right, versioning, errors, auth, and the judgment to pick the right style.",
  "kind": "skill",
  "root": {
    "t": "API Design",
    "d": "From HTTP fundamentals to versioning, security, and API lifecycle.",
    "children": [
      {
        "t": "HTTP and the Web",
        "d": "The transport layer every API sits on. Understand it before you design on it.",
        "lv": 1,
        "children": [
          {
            "t": "What APIs Really Are",
            "d": "An API is a contract: a promise about what happens when you send a request, so two programs can cooperate without sharing internals.",
            "lv": 1,
            "time": "~2h",
            "tip": "Beginners think of APIs as endpoints. Seniors think of them as contracts with consumers who will rely on every behavior you ship.",
            "learn": [
              "API as contract: inputs, outputs, and the behaviors clients depend on",
              "Request/response cycle: client, network, server, and back",
              "Public vs private vs partner APIs and why the distinction changes your design"
            ],
            "do": [
              "Open your browser devtools Network tab and watch a page load: list every API request it makes",
              "Pick one request and write down its method, URL, headers, body, and the status code returned",
              "Sketch the contract of a 'get user profile' endpoint: what goes in, what comes out, what can fail"
            ],
            "tools": ["Browser DevTools", "curl"],
            "res": [
              ["MDN: HTTP Overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"]
            ]
          },
          {
            "t": "DNS and TCP/IP Basics",
            "d": "How api.example.com becomes an IP address and how a reliable connection is built on top of an unreliable network.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "DNS resolution: resolver, authoritative servers, records (A, AAAA, CNAME), and TTL",
              "TCP handshake and why connection setup costs matter for API latency",
              "TLS: what the padlock actually guarantees and why APIs should always use HTTPS"
            ],
            "do": [
              "Run `dig api.github.com +short` and `nslookup api.github.com` to see resolution in action",
              "Run `curl -v https://api.github.com/zen` and read the TLS handshake lines",
              "Trace a request path with `traceroute` to a public API host"
            ],
            "tools": ["dig", "nslookup", "curl", "traceroute"],
            "res": [
              ["MDN: What is DNS", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_Domain_Name"],
              ["Cloudflare: How DNS Works", "https://www.cloudflare.com/learning/dns/what-is-dns/"]
            ]
          },
          {
            "t": "HTTP Methods",
            "d": "GET, POST, PUT, PATCH, DELETE: the verbs of the web. Each one carries a promise about safety and repeatability.",
            "lv": 1,
            "time": "~3h",
            "tip": "The most common beginner mistake: using POST for everything. If an operation is a retrieval, it should be GET so it can be cached and retried.",
            "learn": [
              "Safe methods (GET, HEAD): read-only, can be prefetched and cached",
              "Idempotent methods (PUT, DELETE): repeating the request has the same effect as doing it once",
              "Why POST is the catch-all and when to resist using it"
            ],
            "do": [
              "Use `curl -X GET`, `-X POST`, `-X DELETE` against https://httpbin.org/anything and compare responses",
              "Send the same PUT twice to httpbin and observe why idempotency makes retries safe",
              "Rewrite three POST-only endpoints from a sample project to use the correct verbs"
            ],
            "tools": ["curl", "httpbin", "Postman"],
            "res": [
              ["MDN: HTTP Methods", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods"],
              ["RFC 9110: HTTP Semantics", "https://httpwg.org/specs/rfc9110.html"]
            ]
          },
          {
            "t": "HTTP Status Codes",
            "d": "Status codes are your API's body language. Learn to speak in 2xx, 4xx, and 5xx instead of returning 200 for everything.",
            "lv": 1,
            "time": "~2h",
            "tip": "Returning 200 with an error body is the classic anti-pattern. Clients, proxies, and monitoring all key off the real status code.",
            "learn": [
              "The five classes: 1xx informational, 2xx success, 3xx redirect, 4xx client error, 5xx server error",
              "The codes you will use daily: 200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500, 503",
              "401 (not authenticated) vs 403 (authenticated but not allowed): a distinction that matters"
            ],
            "do": [
              "Trigger real codes: `curl -i https://httpbin.org/status/418` and `/status/429` and `/status/503`",
              "Map every endpoint of a small project to the correct status for success and each failure mode",
              "Write a helper in your language that returns 201 with a Location header on resource creation"
            ],
            "tools": ["curl", "httpbin"],
            "res": [
              ["MDN: HTTP Status Codes", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"],
              ["IANA Status Code Registry", "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"]
            ]
          },
          {
            "t": "HTTP Headers and Content Negotiation",
            "d": "Headers carry the metadata of every request. Content negotiation lets client and server agree on format and language.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Request/response headers: Authorization, Content-Type, Accept, Cache-Control, ETag",
              "Content negotiation: Accept and Content-Type, plus Accept-Language and charset",
              "Custom headers vs standard headers, and the X- prefix history lesson"
            ],
            "do": [
              "Send `curl -H 'Accept: application/json'` vs `Accept: text/html` to an API and observe",
              "Inspect request and response headers of any API call in devtools",
              "Design the header set for an authenticated JSON API: auth, content type, request id, rate limit info"
            ],
            "tools": ["curl", "Browser DevTools"],
            "res": [
              ["MDN: HTTP Headers", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers"],
              ["MDN: Content Negotiation", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation"]
            ]
          },
          {
            "t": "URLs, Path and Query Parameters",
            "d": "Path parameters identify the resource, query parameters filter or modify the view. Mixing them up makes APIs confusing.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "URL anatomy: scheme, host, path, query, fragment",
              "Path params (/users/42) identify a resource; query params (/users?role=admin) shape the request",
              "Encoding: why spaces and special characters become %20 and friends"
            ],
            "do": [
              "Parse a complex URL by hand into scheme, host, path segments, and query pairs",
              "Design URL patterns for users, their orders, and order items using only path and query params",
              "Send a request with a space in a query value and watch what encoding does with `curl -v`"
            ],
            "tools": ["curl"],
            "res": [
              ["MDN: URLs", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"]
            ]
          },
          {
            "t": "CORS Explained",
            "d": "Why your frontend gets blocked calling your own API, and how the browser's same-origin policy actually protects users.",
            "lv": 1,
            "time": "~2h",
            "tip": "CORS errors are a browser policy, not a server firewall. `Access-Control-Allow-Origin: *` on a credentialed API is a real vulnerability, not a fix.",
            "learn": [
              "Same-origin policy: why browsers restrict cross-origin reads",
              "Simple requests vs preflighted requests (OPTIONS) and when preflight triggers",
              "The CORS response headers and why credentials mode changes the rules"
            ],
            "do": [
              "Trigger a CORS error: fetch a cross-origin API from a local HTML file and read the console",
              "Enable CORS on a small server with an explicit origin allowlist, then test with curl including an Origin header",
              "Send an OPTIONS preflight with curl and inspect Access-Control-Allow-Methods"
            ],
            "tools": ["curl", "Browser DevTools"],
            "res": [
              ["MDN: CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS"]
            ]
          },
          {
            "t": "Cookies and Sessions",
            "d": "HTTP is stateless, so state has to live somewhere. Cookies, sessions, and the security flags that keep them safe.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Set-Cookie and Cookie headers: how state rides along on stateless requests",
              "Session ids vs storing data in the cookie itself, and why signed cookies exist",
              "HttpOnly, Secure, and SameSite flags: what each one defends against"
            ],
            "do": [
              "Log into any site and inspect its cookies in devtools: flags, expiry, and scope",
              "Set a cookie with curl (`-c`/`-b`) against httpbin.org/cookies and read it back",
              "Harden a session cookie: add HttpOnly, Secure, and SameSite=Lax, then test cross-site behavior"
            ],
            "tools": ["curl", "Browser DevTools", "httpbin"],
            "res": [
              ["MDN: HTTP Cookies", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies"]
            ]
          },
          {
            "t": "HTTP Versions: 1.1, 2, and 3",
            "d": "What actually changed between versions, and why HTTP/2 multiplexing and HTTP/3 over QUIC matter for API performance.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "HTTP/1.1: one request per connection, head-of-line blocking, keep-alive",
              "HTTP/2: multiplexing, header compression (HPACK), server push",
              "HTTP/3: QUIC over UDP, faster handshakes, better on lossy mobile networks"
            ],
            "do": [
              "Compare `curl --http1.1 -w` timing vs `curl --http2` against an HTTP/2 enabled API",
              "Check which protocol a site negotiates using `curl -v` and the ALPN lines",
              "Benchmark many small requests over 1.1 vs 2 and note the connection difference"
            ],
            "tools": ["curl"],
            "res": [
              ["MDN: HTTP Evolution", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP"],
              ["Cloudflare: HTTP/3", "https://www.cloudflare.com/learning/performance/what-is-http3/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Choosing an API Style",
        "d": "REST, GraphQL, gRPC, SOAP, and plain JSON: what each one is good at, and how to choose without hype.",
        "lv": 1,
        "children": [
          {
            "t": "REST: The Constraints That Matter",
            "d": "REST is an architectural style, not a standard. The constraints that actually change your design: resources, uniform interface, statelessness.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Fielding's constraints: client-server, stateless, cacheable, uniform interface, layered system",
              "Resources and representations: the resource is the concept, JSON is one representation of it",
              "Richardson maturity model: from RPC tunnels to hypermedia"
            ],
            "do": [
              "Score three public APIs (e.g. GitHub, Stripe, a local project) on the Richardson maturity model",
              "Rewrite an RPC-style endpoint (/getUser) into resource style (/users/{id})",
              "List which constraints your own API breaks and whether the tradeoff is worth it"
            ],
            "tools": ["Postman"],
            "res": [
              ["RESTful API Design Guide", "https://restfulapi.net/"],
              ["Microsoft REST Guidelines", "https://github.com/microsoft/api-guidelines"]
            ]
          },
          {
            "t": "Simple JSON APIs",
            "d": "Pragmatic JSON-over-HTTP without REST ceremony: when 'just POST some JSON' is the right call.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "JSON-RPC style: method in the body, HTTP as a dumb tunnel",
              "Where it shines: internal services, webhooks receivers, AI/agent tool endpoints",
              "The cost: no caching semantics, no standard tooling, everything is custom"
            ],
            "do": [
              "Build a JSON-RPC style endpoint with method dispatch in the request body",
              "Compare its behavior with curl against a REST equivalent for caching and idempotency",
              "Write the rules for when your team is allowed to use this style vs full REST"
            ],
            "tools": ["curl", "Postman"],
            "res": [
              ["JSON-RPC Spec", "https://www.jsonrpc.org/specification"]
            ]
          },
          {
            "t": "GraphQL at a Glance",
            "d": "One endpoint, client-shaped responses. Understand what GraphQL buys you and what it costs before you adopt it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Schema, queries, mutations: the client asks for exactly the fields it needs",
              "Problems it solves: over-fetching, under-fetching, and version churn",
              "Costs: caching is harder, query complexity attacks, steeper learning curve"
            ],
            "do": [
              "Run queries against a public GraphQL API (e.g. GitHub GraphQL Explorer) with nested fields",
              "Fetch the same data via REST and GraphQL and compare payload sizes",
              "Write a one-page decision note: would your current project benefit from GraphQL, and why"
            ],
            "tools": ["GraphQL Explorer", "Altair"],
            "res": [
              ["GraphQL Official Docs", "https://graphql.org/learn/"]
            ]
          },
          {
            "t": "gRPC and Protocol Buffers",
            "d": "Binary, contract-first RPC for service-to-service calls: fast, typed, and streaming-capable.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Protocol Buffers: the schema language and why binary beats JSON on the wire",
              "The four call types: unary, server streaming, client streaming, bidirectional",
              "Where it fits: internal microservices; where it hurts: browsers and public APIs"
            ],
            "do": [
              "Write a .proto file with a service and messages, then generate code with protoc",
              "Run a unary call and a server-streaming call locally with grpcurl",
              "Compare payload size and speed of the same data over gRPC vs JSON"
            ],
            "tools": ["protoc", "grpcurl", "Protocol Buffers"],
            "res": [
              ["gRPC Official Docs", "https://grpc.io/docs/"],
              ["Protocol Buffers", "https://protobuf.dev/"]
            ]
          },
          {
            "t": "SOAP: The Enterprise Legacy",
            "d": "XML envelopes, WSDL contracts, and WS-Security. You may never build one, but you will inherit one.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "SOAP envelope structure and why it is verbose by design",
              "WSDL: machine-readable contracts, the ancestor of OpenAPI",
              "Where SOAP still lives: banking, telecom, government integrations"
            ],
            "do": [
              "Read a real WSDL file and identify its operations and message types",
              "Send a SOAP request with curl using a hand-written XML envelope",
              "Map a SOAP operation to its REST equivalent to practice reading legacy contracts"
            ],
            "tools": ["curl", "SoapUI"],
            "res": [
              ["W3C SOAP Primer", "https://www.w3.org/TR/soap12-part0/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Choosing the Right Style",
            "d": "The senior judgment call: matching the API style to the consumers, the team, and the problem instead of following trends.",
            "lv": 2,
            "time": "~2h",
            "tip": "The question is never 'which style is best' but 'who consumes this and what do they need'. Public mobile clients, internal services, and partner integrations want different answers.",
            "learn": [
              "Decision factors: consumer type, caching needs, payload control, team skills, tooling",
              "Hybrid reality: REST for public APIs plus gRPC internally is a common, sane combo",
              "How to document and defend the choice in an ADR (architecture decision record)"
            ],
            "do": [
              "Write an ADR for a fictional product choosing between REST and GraphQL, with tradeoffs",
              "Take three real products and argue which style fits each and why",
              "Interview a developer about an API they hate and trace the pain back to a style mismatch"
            ],
            "tools": ["Postman"],
            "res": [
              ["GraphQL vs REST Guide", "https://graphql.org/learn/thinking-in-graphs/"]
            ]
          }
        ]
      },
      {
        "t": "REST Design in Practice",
        "d": "The craft of resource modeling, URL design, pagination, filtering, idempotency, and versioning.",
        "lv": 2,
        "children": [
          {
            "t": "Resource Modeling",
            "d": "Design-first thinking: model the domain as resources before writing code, because nouns outlive implementations.",
            "lv": 2,
            "time": "~3h",
            "tip": "If your endpoints are verbs (/createOrder, /getUser), you are doing RPC, not REST. Model nouns, and let the HTTP methods be the verbs.",
            "learn": [
              "Identifying resources from user stories: nouns become resources, verbs become methods",
              "Nested vs flat resources and when nesting gets too deep",
              "Collections vs singletons, and modeling actions that do not fit CRUD"
            ],
            "do": [
              "Model an e-commerce domain (products, carts, orders, payments) as resources on paper first",
              "Refactor three verb-based endpoints into resource-based ones",
              "Decide how to model a non-CRUD action (e.g. 'cancel order') and justify REST vs RPC"
            ],
            "tools": ["Postman", "Stoplight"],
            "res": [
              ["Microsoft API Guidelines: Naming", "https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md#12-naming"]
            ]
          },
          {
            "t": "URI Design and Naming Conventions",
            "d": "Plural nouns, lowercase, hyphens, no verbs: the small conventions that make an API feel designed instead of accidental.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Conventions: plural resource names, lowercase, hyphens over underscores, no trailing slashes debates",
              "Hierarchy: /users/42/orders/7 and when to stop nesting",
              "Consistency rules worth enforcing with a linter"
            ],
            "do": [
              "Audit a real API's URLs against a naming checklist and file the violations",
              "Write a 10-rule URI style guide for your team",
              "Set up Spectral to lint an OpenAPI file for naming rules"
            ],
            "tools": ["Spectral", "Stoplight"],
            "res": [
              ["RESTful API Naming Guide", "https://restfulapi.net/resource-naming/"]
            ]
          },
          {
            "t": "Mapping CRUD Operations",
            "d": "POST to create, GET to read, PUT/PATCH to update, DELETE to delete: and the edge cases where reality disagrees.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "POST vs PUT on creation: client-assigned vs server-assigned ids",
              "PUT (full replace) vs PATCH (partial update) and the JSON Merge Patch / JSON Patch formats",
              "Soft delete vs hard delete and what the API should expose"
            ],
            "do": [
              "Implement full CRUD for one resource with correct methods and status codes (200/201/204)",
              "Support PATCH with JSON Merge Patch and test partial updates with curl",
              "Design a soft-delete: what does GET return after DELETE, and how do you restore"
            ],
            "tools": ["curl", "Postman"],
            "res": [
              ["RFC 7396: JSON Merge Patch", "https://www.rfc-editor.org/rfc/rfc7396.html"]
            ]
          },
          {
            "t": "Pagination",
            "d": "Offset, cursor, and keyset pagination: why offset breaks on live data and cursor pagination is the default for feeds.",
            "lv": 2,
            "time": "~3h",
            "tip": "Offset pagination on changing data skips or duplicates rows. If the list can change while paginating, use cursor-based pagination.",
            "learn": [
              "Offset/limit: simple, but unstable on mutable data and slow on deep pages",
              "Cursor pagination: opaque cursors, stable ordering, the Relay connections pattern",
              "Keyset pagination: using the sort key itself as the cursor for SQL efficiency"
            ],
            "do": [
              "Implement offset pagination, then break it by inserting rows mid-pagination",
              "Implement cursor pagination with an opaque base64 cursor and prove stability",
              "Add Link headers (first/prev/next) to a paginated endpoint"
            ],
            "tools": ["Postman", "curl"],
            "res": [
              ["Use The Index, Luke: Pagination", "https://use-the-index-luke.com/sql/partial-results/fetch-next-page"]
            ]
          },
          {
            "t": "Filtering, Sorting, and Search",
            "d": "Query parameters as a mini query language: filters, sorts, and search that stay predictable and safe.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Filter syntaxes: simple (?status=active) vs operator-based (?price[gte]=10) vs RSQL",
              "Sorting: ?sort=-created_at conventions and multi-field sorts",
              "Search: q= parameter, and when to hand off to a real search engine"
            ],
            "do": [
              "Build filtering with allowlisted fields and operators, rejecting unknown ones with 400",
              "Add multi-field sorting and test sort stability with ties",
              "Load-test a filter endpoint to find the missing database index"
            ],
            "tools": ["Postman"],
            "res": [
              ["JSON:API Filtering", "https://jsonapi.org/format/#fetching-filtering"]
            ]
          },
          {
            "t": "Idempotency",
            "d": "Make retries safe: idempotency keys turn 'did it go through?' from a panic into a non-event.",
            "lv": 2,
            "time": "~3h",
            "tip": "Any endpoint that charges money or sends messages needs an idempotency key. Network failures guarantee duplicate requests will happen.",
            "learn": [
              "Idempotency-Key header pattern: store the key with the request fingerprint and replay the stored response",
              "Which methods are naturally idempotent and which need keys",
              "Key expiry, key scope (per user vs global), and replaying vs re-executing"
            ],
            "do": [
              "Add Idempotency-Key support to a payment-like endpoint with a key store",
              "Simulate a client timeout and retry: prove the second request returns the stored response",
              "Design key expiry and collision handling for keys reused with different payloads"
            ],
            "tools": ["Redis", "curl"],
            "res": [
              ["Stripe Idempotent Requests", "https://docs.stripe.com/api/idempotent_requests"],
              ["IETF Idempotency-Key Draft", "https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/"]
            ]
          },
          {
            "t": "Versioning Strategies",
            "d": "Your API will change. Version in the URL, header, or not at all: the tradeoffs and how to evolve without breaking clients.",
            "lv": 2,
            "time": "~3h",
            "tip": "Versioning is a communication tool, not just a technical one. The real skill is making additive, backward-compatible changes so you rarely need a new version.",
            "learn": [
              "URI versioning (/v1/), header/media-type versioning, and no-versioning with expandable contracts",
              "Backward-compatible changes: adding fields, optional params; breaking changes: renames, removals, type changes",
              "Deprecation policy: Sunset headers, changelogs, and giving clients a migration runway"
            ],
            "do": [
              "Ship a v2 of an endpoint three ways (URI, header, query param) and compare ergonomics",
              "Write a breaking-change checklist and classify ten real changes as breaking or safe",
              "Implement the Sunset header and a deprecation warning on an old version"
            ],
            "tools": ["Postman"],
            "res": [
              ["Microsoft Versioning Guidance", "https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md#12-versioning"]
            ]
          },
          {
            "t": "HATEOAS and Hypermedia",
            "d": "Embedding links in responses so clients navigate your API like the web. Powerful in theory, rare in practice: know why.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Hypermedia controls: _links with rel, href, and method in responses",
              "What it buys: discoverability and decoupled clients; what it costs: client complexity",
              "HAL, JSON:API, and Siren as ready-made hypermedia formats"
            ],
            "do": [
              "Add _links (self, next, related) to a resource response in HAL style",
              "Write a client that follows links instead of hardcoding URLs and note the friction",
              "Decide for one API whether hypermedia is worth it, and write down why"
            ],
            "tools": ["Postman"],
            "res": [
              ["HAL Specification", "https://stateless.co/hal_specification.html"],
              ["JSON:API", "https://jsonapi.org/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Errors, Reliability, and Performance",
        "d": "Design failures as carefully as successes: error formats, rate limits, retries, and caching.",
        "lv": 2,
        "children": [
          {
            "t": "Error Handling Design",
            "d": "Errors are part of the contract. Design machine-readable, human-debuggable errors clients can act on.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Anatomy of a good error: code, message, details, request id, documentation link",
              "Machine-readable codes vs human messages: why clients need both",
              "Validation errors: field-level detail structures that forms can render"
            ],
            "do": [
              "Design a standard error envelope and apply it to every endpoint of a sample API",
              "Return field-level validation errors for a bad request and render them in a test client",
              "Add a request id to every error response and wire it into server logs"
            ],
            "tools": ["Postman"],
            "res": [
              ["RFC 9457: Problem Details", "https://www.rfc-editor.org/rfc/rfc9457.html"]
            ]
          },
          {
            "t": "Rate Limiting and Quotas",
            "d": "Protect the API and be fair to tenants: token bucket, fixed window, and communicating limits to clients.",
            "lv": 2,
            "time": "~3h",
            "tip": "A 429 without a Retry-After header is a dead end. Always tell the client when to come back.",
            "learn": [
              "Algorithms: fixed window, sliding window, token bucket, leaky bucket",
              "Headers: X-RateLimit-Limit/Remaining/Reset and Retry-After on 429",
              "Per-key, per-user, and per-endpoint limits; quotas vs rate limits"
            ],
            "do": [
              "Implement token-bucket limiting with Redis and return proper 429 responses",
              "Hammer your own endpoint with a load tool and watch the 429s arrive",
              "Design tiered limits (free vs paid) for a fictional SaaS API"
            ],
            "tools": ["Redis", "k6", "curl"],
            "res": [
              ["IETF RateLimit Header Fields", "https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/"]
            ]
          },
          {
            "t": "Retries, Timeouts, and Backoff",
            "d": "Design for the client side too: timeouts, exponential backoff with jitter, and circuit breakers.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Timeouts: connect, read, and total; why no timeout is a bug",
              "Exponential backoff with jitter: why naive retries cause thundering herds",
              "Circuit breakers: failing fast when a dependency is down"
            ],
            "do": [
              "Write a client wrapper with timeout, 3 retries, exponential backoff, and jitter",
              "Simulate a flaky endpoint and measure success rate with and without backoff",
              "Add a circuit breaker around a dependency and test the open/half-open/closed states"
            ],
            "tools": ["curl", "k6"],
            "res": [
              ["AWS: Timeouts, Retries, Backoff", "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"]
            ]
          },
          {
            "t": "HTTP Caching for APIs",
            "d": "ETags, Cache-Control, and conditional requests: let HTTP do the caching work instead of inventing your own.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cache-Control directives: max-age, no-cache, private vs public, must-revalidate",
              "Validators: ETag and Last-Modified with If-None-Match / If-Modified-Since and 304 responses",
              "What is cacheable: GET semantics, Vary header, and cache keys"
            ],
            "do": [
              "Add ETag generation to a GET endpoint and return 304 on If-None-Match",
              "Set Cache-Control policies for public data vs per-user data and test with curl",
              "Put a CDN or reverse proxy cache in front of an API and measure hit rates"
            ],
            "tools": ["curl", "Varnish", "Cloudflare"],
            "res": [
              ["MDN: HTTP Caching", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"],
              ["RFC 9111: HTTP Caching", "https://www.rfc-editor.org/rfc/rfc9111.html"]
            ]
          },
          {
            "t": "Performance Metrics and Profiling",
            "d": "Measure before you optimize: latency percentiles, throughput, and finding the real bottleneck.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "p50/p95/p99 latency: why averages lie about user experience",
              "Throughput, error rate, and saturation: the signals that matter",
              "Profiling: where time actually goes (DB, serialization, network)"
            ],
            "do": [
              "Load-test an endpoint with k6 and read the p95, not the average",
              "Profile a slow endpoint and find whether the DB query or JSON serialization dominates",
              "Set an SLO (e.g. p95 under 300ms) and build a dashboard that shows it"
            ],
            "tools": ["k6", "Grafana", "curl"],
            "res": [
              ["k6 Documentation", "https://grafana.com/docs/k6/"]
            ]
          }
        ]
      },
      {
        "t": "Authentication and Authorization",
        "d": "Who is calling, and what are they allowed to do: API keys, tokens, OAuth2, and authorization models.",
        "lv": 2,
        "children": [
          {
            "t": "API Keys: Generation and Rotation",
            "d": "The simplest credential: how to generate, scope, store, and rotate API keys without leaking them.",
            "lv": 2,
            "time": "~2h",
            "tip": "Never store API keys in plaintext. Store a hash, show the key once at creation, and make rotation a one-click operation.",
            "learn": [
              "Generating high-entropy keys with prefixes for identification (sk_live_...)",
              "Hashing at rest, showing once, and scoping keys to permissions",
              "Rotation and revocation flows that do not break running clients"
            ],
            "do": [
              "Implement key generation with crypto-random bytes, a prefix, and SHA-256 storage",
              "Build key creation that returns the secret once and never again",
              "Add rotation: issue a new key, keep the old one valid during a grace window, then revoke"
            ],
            "tools": ["Postman"],
            "res": [
              ["OWASP: API Key Guidance", "https://owasp.org/API-Security/"]
            ]
          },
          {
            "t": "Bearer Tokens and JWT",
            "d": "Stateless authentication with signed tokens: what JWTs are good for and the mistakes that make them dangerous.",
            "lv": 2,
            "time": "~3h",
            "tip": "JWTs are not sessions. Because they cannot be revoked individually, keep lifetimes short and never put sensitive data in the payload.",
            "learn": [
              "JWT structure: header, payload, signature; and how verification works",
              "Access token (short-lived) + refresh token (rotating) pattern",
              "Common failures: none algorithm, weak secrets, missing expiry, storing in localStorage"
            ],
            "do": [
              "Decode a JWT by hand at jwt.io and identify its claims",
              "Issue and verify RS256 tokens, then reject an expired and a tampered one",
              "Implement refresh-token rotation and detect reuse as a theft signal"
            ],
            "tools": ["jwt.io", "Postman"],
            "res": [
              ["RFC 7519: JWT", "https://www.rfc-editor.org/rfc/rfc7519.html"],
              ["OWASP JWT Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "OAuth 2.0 Flows",
            "d": "'Log in with...' demystified: authorization code flow, PKCE, client credentials, and which flow fits which client.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Roles: resource owner, client, authorization server, resource server",
              "Authorization code + PKCE: the flow for web, mobile, and SPAs",
              "Client credentials for machine-to-machine; why implicit and password grants are retired"
            ],
            "do": [
              "Complete an authorization code flow by hand with curl against a test provider",
              "Add PKCE to a public client and verify the code_challenge exchange",
              "Use client credentials to get a token for a service-to-service call"
            ],
            "tools": ["curl", "OAuth 2.0 Playground"],
            "res": [
              ["OAuth 2.0 Framework (RFC 6749)", "https://oauth.net/2/"],
              ["OAuth 2.1 Draft", "https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/"]
            ]
          },
          {
            "t": "OpenID Connect",
            "d": "Identity on top of OAuth 2.0: ID tokens, the UserInfo endpoint, and how 'sign in' actually works.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "OIDC as an identity layer: ID token vs access token",
              "Discovery document and JWKS: how clients find keys automatically",
              "Scopes (openid, profile, email) and claims"
            ],
            "do": [
              "Fetch a provider's .well-known/openid-configuration and read its endpoints",
              "Validate an ID token's signature against the JWKS endpoint",
              "Add 'login with' to a demo app using an OIDC library"
            ],
            "tools": ["Postman"],
            "res": [
              ["OpenID Connect Core", "https://openid.net/specs/openid-connect-core-1_0.html"]
            ]
          },
          {
            "t": "Scopes and Permissions",
            "d": "Least privilege for APIs: designing scopes that are fine-grained enough to be safe and coarse enough to be usable.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Scope naming: resource:action conventions (read:orders, write:orders)",
              "Enforcing scopes on every endpoint, including nested resources",
              "Scope creep: why asking for everything up front kills trust"
            ],
            "do": [
              "Design a scope matrix for an API with three roles",
              "Enforce scopes in middleware and test that a read-only token cannot write",
              "Write the consent screen copy that explains each requested scope"
            ],
            "tools": ["Postman"],
            "res": [
              ["OAuth 2.0 Scopes (RFC 6749)", "https://www.rfc-editor.org/rfc/rfc6749.html#section-3.3"]
            ]
          },
          {
            "t": "Authorization Models: RBAC, ABAC, ReBAC",
            "d": "Beyond 'is admin': role-based, attribute-based, and relationship-based access control for APIs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "RBAC: roles group permissions; simple and the right default",
              "ABAC: policies over attributes (department, time, resource tags)",
              "ReBAC: relationship graphs ('editors of this document'), the Google Zanzibar model"
            ],
            "do": [
              "Implement RBAC middleware with roles and permission checks",
              "Write an ABAC policy: allow refunds only for support staff during business hours",
              "Model a ReBAC rule ('members of the owning team can edit') on paper with a relationship graph"
            ],
            "tools": ["Open Policy Agent", "Postman"],
            "res": [
              ["Google Zanzibar Paper", "https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/"],
              ["Open Policy Agent", "https://www.openpolicyagent.org/"]
            ]
          },
          {
            "t": "OWASP API Security Top 10",
            "d": "The decade's most common API breaches: broken object-level auth, mass assignment, and the rest, with real fixes.",
            "lv": 3,
            "time": "~4h",
            "tip": "BOLA (IDOR) is the number one API vulnerability year after year. Always check that the authenticated user owns the object id in the URL.",
            "learn": [
              "BOLA, broken authentication, broken object property level authorization",
              "Mass assignment, SSRF in APIs, and unsafe consumption of third-party APIs",
              "How each item maps to a concrete code-level check"
            ],
            "do": [
              "Find and fix a BOLA flaw in a deliberately vulnerable API (e.g. OWASP crAPI)",
              "Exploit and then fix mass assignment on a user-update endpoint",
              "Run an API security checklist against your own project before shipping"
            ],
            "tools": ["OWASP crAPI", "Postman", "Burp Suite"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "badge": "LAB"
          },
          {
            "t": "API Security Best Practices",
            "d": "The operational checklist: TLS everywhere, input validation, security headers, secrets handling, and audit trails.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Defense in depth: validation at the edge, authz at the resource, logging everywhere",
              "Security headers, CORS tightening, and exposing minimal error detail",
              "Secrets management, key rotation cadence, and audit logging of sensitive actions"
            ],
            "do": [
              "Harden an API: TLS, strict CORS, security headers, and generic error messages",
              "Add audit logging for auth events and sensitive mutations",
              "Run a security smoke test: auth bypass attempts, oversized payloads, and injection strings"
            ],
            "tools": ["Postman", "OWASP ZAP"],
            "res": [
              ["OWASP API Security Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html"]
            ]
          }
        ]
      },
      {
        "t": "Documentation, Testing, and DX",
        "d": "OpenAPI contracts, contract testing, mocks, and load tests: the practices that make APIs shippable.",
        "lv": 2,
        "children": [
          {
            "t": "The OpenAPI Specification",
            "d": "Describe your API in YAML once, then generate docs, clients, mocks, and tests from the same source of truth.",
            "lv": 2,
            "time": "~4h",
            "tip": "Write the spec by hand for your first API. Generators are great, but hand-writing teaches you what a good contract looks like.",
            "learn": [
              "OpenAPI structure: paths, operations, schemas, components, and reusable refs",
              "Describing auth, errors, and pagination so generated clients actually work",
              "Keeping the spec in sync: linting and diffing in CI"
            ],
            "do": [
              "Hand-write an OpenAPI 3.1 spec for a small API with two resources",
              "Render it with Swagger UI or Redoc and fix every rendering warning",
              "Generate a client SDK from the spec and call your API with it"
            ],
            "tools": ["Swagger Editor", "Redoc", "Spectral", "OpenAPI Generator"],
            "res": [
              ["OpenAPI Specification", "https://spec.openapis.org/oas/latest.html"],
              ["Swagger Editor", "https://editor.swagger.io/"]
            ]
          },
          {
            "t": "Design-First vs Code-First",
            "d": "Write the contract before the code, or generate it from the code: when each workflow wins.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Design-first: mock and agree on the contract with consumers before building",
              "Code-first: annotations generate the spec; fast but the contract is an afterthought",
              "The hybrid: design the public surface first, generate internal docs from code"
            ],
            "do": [
              "Run a design-first sprint: spec, mock server, consumer feedback, then implement",
              "Generate a spec from code annotations and compare its quality to a hand-written one",
              "Set up a CI check that fails when the spec and implementation drift apart"
            ],
            "tools": ["Stoplight", "Prism", "Swagger"],
            "res": [
              ["Stoplight Design-First Guide", "https://stoplight.io/"]
            ]
          },
          {
            "t": "Contract Testing",
            "d": "Prove the provider and consumer agree: consumer-driven contracts with Pact catch breaking changes before deployment.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Consumer-driven contracts: the consumer records expectations, the provider verifies them",
              "Pact workflow: write consumer tests, publish pacts, verify on the provider side",
              "Where contract tests sit: between unit tests and full end-to-end tests"
            ],
            "do": [
              "Write a Pact consumer test for one endpoint and generate the pact file",
              "Verify the pact against the real provider and watch it fail on a breaking change",
              "Add pact verification to a CI pipeline"
            ],
            "tools": ["Pact", "Postman"],
            "res": [
              ["Pact Documentation", "https://docs.pact.io/"]
            ]
          },
          {
            "t": "Mock Servers",
            "d": "Let frontend and consumers build against a fake API today while the real one is still being written.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Generating mocks from an OpenAPI spec with Prism",
              "Dynamic mocks: realistic data, stateful scenarios, and error injection",
              "Mocks as documentation: examples that teach the contract"
            ],
            "do": [
              "Serve a Prism mock from your OpenAPI spec and build a client against it",
              "Add realistic examples to the spec so the mock returns believable data",
              "Simulate error scenarios (429, 503) in the mock and test client handling"
            ],
            "tools": ["Prism", "Postman Mock Servers"],
            "res": [
              ["Stoplight Prism", "https://github.com/stoplightio/prism"]
            ]
          },
          {
            "t": "Load Testing APIs",
            "d": "Find the breaking point before your users do: realistic load scenarios, not just hello-world benchmarks.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Scenario design: realistic mixes of endpoints, think times, and data",
              "Ramp-up, soak, and spike tests: what each one reveals",
              "Reading results: saturation points and which resource bottlenecks first"
            ],
            "do": [
              "Write a k6 script that exercises a full user journey, not one endpoint",
              "Ramp to find the requests-per-second where p95 latency explodes",
              "Fix the bottleneck (index, N+1, pool size) and re-run to prove the gain"
            ],
            "tools": ["k6", "Grafana"],
            "res": [
              ["k6 Documentation", "https://grafana.com/docs/k6/"]
            ]
          },
          {
            "t": "Developer Portals and DX",
            "d": "Great APIs are adopted, not just built: docs, sandboxes, changelogs, and support that developers actually enjoy.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Time to first 200: the metric that measures your onboarding",
              "Sandboxes, interactive docs, and copy-paste quickstarts",
              "Changelogs, status pages, and deprecation communication"
            ],
            "do": [
              "Time a friend going from zero to first successful call against your API; fix every friction point",
              "Publish interactive docs with runnable examples",
              "Write a changelog entry for a breaking change that a consumer can act on"
            ],
            "tools": ["ReadMe", "Stoplight", "Postman"],
            "res": [
              ["Stripe API Docs (DX reference)", "https://docs.stripe.com/api"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Integration Patterns and Real-Time",
        "d": "Beyond request/response: webhooks, streaming, events, gateways, and the BFF pattern.",
        "lv": 3,
        "children": [
          {
            "t": "Webhooks vs Polling",
            "d": "Push vs pull for event delivery: designing webhook contracts that survive the real internet.",
            "lv": 3,
            "time": "~2h",
            "tip": "Webhooks will be retried, delivered twice, and arrive out of order. Sign them, make receivers idempotent, and document the retry policy.",
            "learn": [
              "Webhook design: event types, versioned payloads, signature verification",
              "Delivery guarantees: at-least-once, retries with backoff, dead-letter handling",
              "When polling is actually fine: low frequency, client-controlled cadence"
            ],
            "do": [
              "Implement webhook signing (HMAC) and verify a delivery in a receiver",
              "Build retry with exponential backoff and log duplicate deliveries",
              "Design a polling fallback for clients that cannot receive webhooks"
            ],
            "tools": ["ngrok", "Svix"],
            "res": [
              ["Svix Webhook Best Practices", "https://www.svix.com/resources/whitepapers/webhooks-best-practices/"]
            ]
          },
          {
            "t": "Server-Sent Events and Streaming",
            "d": "One-way real-time over plain HTTP: SSE for live feeds and streaming responses for AI-era APIs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "SSE: text/event-stream, event ids, and automatic reconnection",
              "Streaming JSON/NDJSON responses for long-running operations",
              "SSE vs WebSockets: when one-way push is enough"
            ],
            "do": [
              "Build an SSE endpoint that pushes live updates and reconnects after a drop",
              "Stream a long operation's progress as NDJSON and render it incrementally",
              "Compare SSE and WebSocket implementations for a notification feed"
            ],
            "tools": ["curl"],
            "res": [
              ["MDN: Server-Sent Events", "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"]
            ]
          },
          {
            "t": "WebSockets",
            "d": "Full-duplex messaging for chat, collaboration, and games: the protocol, the lifecycle, and scaling it.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The upgrade handshake: from HTTP to a persistent bidirectional socket",
              "Message framing, heartbeats, and reconnection strategies",
              "Scaling: sticky sessions vs pub/sub backplanes across instances"
            ],
            "do": [
              "Build a WebSocket chat server and client with heartbeat and reconnect",
              "Scale to two server instances with a Redis pub/sub backplane",
              "Load-test concurrent connections and find the per-instance limit"
            ],
            "tools": ["ws", "Socket.IO", "Redis"],
            "res": [
              ["RFC 6455: WebSocket Protocol", "https://www.rfc-editor.org/rfc/rfc6455.html"]
            ]
          },
          {
            "t": "Event-Driven Architecture",
            "d": "Designing around events instead of calls: loose coupling, eventual consistency, and the tradeoffs you accept.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Events vs commands: facts about the past vs requests for the future",
              "Eventual consistency: designing UX and APIs when data is not instantly consistent",
              "Event schemas, versioning events, and schema registries"
            ],
            "do": [
              "Model an order flow as events (OrderPlaced, PaymentCaptured, OrderShipped)",
              "Build a consumer that handles duplicate and out-of-order events idempotently",
              "Write an ADR weighing event-driven vs synchronous for one integration"
            ],
            "tools": ["Kafka", "RabbitMQ"],
            "res": [
              ["Martin Fowler: Event-Driven Architecture", "https://martinfowler.com/articles/201701-event-driven.html"]
            ]
          },
          {
            "t": "API Gateways",
            "d": "The front door: routing, auth, rate limiting, and transformation in one managed layer.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Gateway responsibilities: routing, authentication, rate limiting, request/response transformation",
              "When a gateway pays off vs when it becomes a bottleneck and a single point of failure",
              "Popular options and the managed-vs-self-hosted tradeoff"
            ],
            "do": [
              "Put Kong or Traefik in front of two services with path-based routing",
              "Enforce JWT auth and rate limiting at the gateway",
              "Measure added latency and decide what belongs in the gateway vs the service"
            ],
            "tools": ["Kong", "Traefik", "AWS API Gateway"],
            "res": [
              ["Kong Documentation", "https://docs.konghq.com/"]
            ]
          },
          {
            "t": "Backend for Frontend (BFF)",
            "d": "One tailored backend per client type: stop making mobile apps consume a desktop-shaped API.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The problem BFF solves: over-fetching and chatty clients on constrained devices",
              "One BFF per experience (mobile, web, partner), owned by the client team",
              "BFF vs generic API: aggregation, shaping, and where business logic lives"
            ],
            "do": [
              "Build a mobile BFF that aggregates three service calls into one screen-shaped response",
              "Measure payload and request-count savings vs calling services directly",
              "Draw the ownership boundaries: what the BFF may and may not do"
            ],
            "tools": ["Postman"],
            "res": [
              ["Sam Newman: BFF Pattern", "https://samnewman.io/patterns/architectural/bff/"]
            ]
          },
          {
            "t": "Messaging: Kafka and RabbitMQ",
            "d": "The plumbing of async APIs: queues vs logs, and picking the right broker for the job.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "RabbitMQ: smart broker, routing, work queues, and per-message acks",
              "Kafka: distributed log, partitions, consumer groups, and replay",
              "Choosing: complex routing and low latency vs high throughput and replay"
            ],
            "do": [
              "Publish and consume with RabbitMQ work queues, then with Kafka topics",
              "Kill a consumer mid-processing and verify redelivery semantics",
              "Replay a Kafka topic from an offset to rebuild a read model"
            ],
            "tools": ["Kafka", "RabbitMQ"],
            "res": [
              ["Kafka Documentation", "https://kafka.apache.org/documentation/"],
              ["RabbitMQ Tutorials", "https://www.rabbitmq.com/tutorials"]
            ]
          }
        ]
      },
      {
        "t": "Lifecycle and Operations",
        "d": "Shipping is the start: deprecation, observability, analytics, and compliance for APIs in production.",
        "lv": 3,
        "children": [
          {
            "t": "API Lifecycle and Deprecation",
            "d": "Sunsetting versions without breaking clients: the process, the communication, and the tooling.",
            "lv": 3,
            "time": "~3h",
            "tip": "Never remove an endpoint on a Friday. Deprecation is a project: announce, measure usage, migrate, then remove.",
            "learn": [
              "Lifecycle stages: design, develop, test, deploy, deprecate, retire",
              "Sunset and Deprecation HTTP headers for machine-readable timelines",
              "Measuring version adoption before you pull the plug"
            ],
            "do": [
              "Add Deprecation and Sunset headers to an old endpoint",
              "Build a dashboard of per-version traffic to drive the retirement decision",
              "Write a migration guide for a breaking v1 to v2 change"
            ],
            "tools": ["Postman"],
            "res": [
              ["RFC 8594: Sunset Header", "https://www.rfc-editor.org/rfc/rfc8594.html"]
            ]
          },
          {
            "t": "Observability: Logs, Metrics, Traces",
            "d": "You cannot fix what you cannot see: structured logging, RED metrics, and distributed tracing across services.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Structured logs with request ids propagated across services",
              "RED metrics: rate, errors, duration per endpoint",
              "Distributed tracing: spans, context propagation, and finding slow hops"
            ],
            "do": [
              "Add request-id propagation through two services and correlate their logs",
              "Instrument RED metrics per endpoint and alert on error-rate spikes",
              "Trace a request across services with OpenTelemetry and find the slow span"
            ],
            "tools": ["OpenTelemetry", "Grafana", "Jaeger"],
            "res": [
              ["OpenTelemetry Documentation", "https://opentelemetry.io/docs/"]
            ]
          },
          {
            "t": "API Analytics and Monetization",
            "d": "Measure what matters: adoption, per-endpoint usage, and turning API calls into a pricing model.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Product metrics: activation, retention, time-to-first-call, endpoint popularity",
              "Usage-based pricing: metering, tiers, and overage handling",
              "Funnel analysis: where developers drop off in your docs"
            ],
            "do": [
              "Define the five metrics you would track for a new public API",
              "Design a three-tier pricing model with metering rules",
              "Instrument per-API-key usage counting for billing"
            ],
            "tools": ["Postman", "Metronome"],
            "res": [
              ["Stripe Billing Docs", "https://docs.stripe.com/billing"]
            ],
            "tag": "opt"
          },
          {
            "t": "GDPR, PII, and Compliance",
            "d": "Designing APIs that handle personal data lawfully: data minimization, retention, and subject rights.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Data minimization: do not collect or return what you do not need",
              "Right to erasure and access: what they mean for your data model and backups",
              "PII handling: classification, redaction in logs, and regional data rules"
            ],
            "do": [
              "Audit an API's responses for unnecessary PII and remove it",
              "Implement a data-export and a deletion endpoint for user data",
              "Add PII redaction to logs and error reports"
            ],
            "tools": ["Postman"],
            "res": [
              ["GDPR Official Text", "https://gdpr-info.eu/"],
              ["OWASP: PII in APIs", "https://owasp.org/API-Security/"]
            ]
          }
        ]
      }
    ]
  }
});
