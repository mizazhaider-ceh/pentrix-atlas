/* Atlas roadmap data: API Security (api-security) */
ROADMAPS.push({
  "id": "api-security",
  "title": "API Security",
  "icon": "\ud83d\udd0c",
  "color": "#8b5cf6",
  "desc": "Securing APIs end to end: authentication and authorization, the OWASP API Top 10, testing APIs with Burp and Postman, and hardening them in production.",
  "kind": "practice",
  "root": {
    "t": "API Security",
    "d": "Build, test, and harden APIs that attackers cannot abuse.",
    "children": [
      {
        "t": "API Fundamentals",
        "d": "HTTP, REST, and the tooling every API security practitioner reaches for first.",
        "lv": 1,
        "children": [
          {
            "t": "HTTP for APIs",
            "d": "Methods, status codes, and headers: the vocabulary every API attack and defense is written in.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Methods and their safety contracts: GET reads, POST creates, PUT replaces, DELETE removes",
              "Status code families and the security-relevant ones (401 vs 403, 429)",
              "Headers that matter: Authorization, Content-Type, and the CORS family"
            ],
            "do": [
              "Replay one API call in curl with each method and record the status codes",
              "Trigger a 401 and a 403 on a test API and explain the difference",
              "Inspect the CORS headers of a public API and judge whether they are sane"
            ],
            "tools": ["curl", "Postman"],
            "res": [
              ["MDN: HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"]
            ],
            "tip": "401 means 'I do not know you', 403 means 'I know you and the answer is no'. APIs that return 200 for both are hiding their logic from you, not from attackers."
          },
          {
            "t": "REST Design Basics",
            "d": "Resources, idempotency, and predictable URLs: good design is the cheapest security control.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Resource-oriented URLs and why verbs in paths are a smell",
              "Idempotency: safe retries for PUT and DELETE, and why POST needs care",
              "Predictable design reduces the authorization mistakes attackers love"
            ],
            "do": [
              "Design a small REST API for a todo app: resources, methods, status codes",
              "Retry a PUT and a POST against a test API and observe the difference",
              "Review one real API and list three design choices that invite abuse"
            ],
            "tools": ["Postman", "OpenAPI"],
            "res": [
              ["REST API Tutorial", "https://restfulapi.net/"]
            ],
            "tip": "Predictable IDs (/users/1043) plus missing authorization checks equals BOLA. Design cannot fix missing auth, but chaotic design hides it longer."
          },
          {
            "t": "GraphQL and gRPC Basics",
            "d": "Not every API is REST. Know the query languages attackers probe next.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "GraphQL: one endpoint, client-chosen fields, introspection as a feature and a leak",
              "gRPC: protobuf contracts, HTTP/2, and why tooling differs",
              "Each style's classic mistakes: deep queries, missing cost limits, exposed reflection"
            ],
            "do": [
              "Run an introspection query against a public GraphQL endpoint",
              "Send a deeply nested GraphQL query and observe any cost limiting",
              "Call a gRPC method with grpcurl and list its services"
            ],
            "tools": ["GraphQL", "grpcurl", "Postman"],
            "res": [
              ["GraphQL", "https://graphql.org/"],
              ["gRPC", "https://grpc.io/"]
            ],
            "tip": "GraphQL introspection hands attackers your full schema on a plate. Disable it in production; attackers will reconstruct it anyway, but make them work."
          },
          {
            "t": "Working with Postman",
            "d": "Collections, environments, and variables: the workbench for manual API testing.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Collections and environments: organizing requests per target",
              "Variables and pre-request scripts for token handling",
              "Runner and Newman: turning manual clicks into repeatable suites"
            ],
            "do": [
              "Build a collection for a test API with an auth flow using variables",
              "Write a pre-request script that refreshes an expiring token",
              "Export the collection and run it headless with Newman"
            ],
            "tools": ["Postman", "Newman"],
            "res": [
              ["Postman Learning Center", "https://learning.postman.com/"]
            ],
            "tip": "Hardcoded tokens in shared collections leak. Use environment variables and secret vaults, and scrub collections before publishing."
          },
          {
            "t": "Reading OpenAPI Specs",
            "d": "The contract of the API: endpoints, schemas, and security schemes, all in one document.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "OpenAPI structure: paths, operations, parameters, schemas, security schemes",
              "Spotting gaps: endpoints without security requirements, loose schemas",
              "Specs as test input: generating requests and security checks from the contract"
            ],
            "do": [
              "Read the Petstore OpenAPI spec and map every endpoint to its auth requirement",
              "Find three endpoints in a sample spec with missing or weak security definitions",
              "Import a spec into Postman and Burp to generate a request baseline"
            ],
            "tools": ["Swagger Editor", "Postman", "Burp Suite"],
            "res": [
              ["OpenAPI Specification", "https://swagger.io/specification/"]
            ],
            "tip": "The spec is the attacker's reconnaissance shortcut. If your public spec documents admin endpoints, you have published your own target list."
          },
          {
            "t": "API Keys and Where They Fail",
            "d": "The simplest credential, and the easiest to steal, over-share, and forget to rotate.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What API keys actually prove: project identity, not user identity",
              "Common failures: keys in URLs, in mobile apps, in public repos, never rotated",
              "When keys are fine (server-to-server, low risk) and when they are not"
            ],
            "do": [
              "Find a leaked API key pattern in a test repo with gitleaks",
              "Move a key from a URL query parameter to a header in a test client",
              "Write the rotation runbook for one API key: revoke, replace, verify"
            ],
            "tools": ["Gitleaks", "Postman"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "A key embedded in a mobile app or frontend JavaScript is public. Treat it as an identifier, never as a secret that protects anything sensitive."
          }
        ]
      },
      {
        "t": "API Authentication",
        "d": "OAuth 2.0, OpenID Connect, and JWTs: proving identity correctly is where most API breaches begin.",
        "lv": 1,
        "children": [
          {
            "t": "OAuth 2.0 Flows",
            "d": "Authorization code, PKCE, and client credentials: the right flow for each client type.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Roles: resource owner, client, authorization server, resource server",
              "Which flow for which client: PKCE for public clients, client credentials for machine-to-machine",
              "Common misconfigurations: implicit flow, overly broad scopes, missing state"
            ],
            "do": [
              "Complete an authorization code plus PKCE flow by hand with curl",
              "Request a client-credentials token and call an API with it",
              "Find the deprecated implicit flow in a sample app and migrate it"
            ],
            "tools": ["OAuth 2.0", "Keycloak", "Auth0"],
            "res": [
              ["OAuth 2.0", "https://oauth.net/2/"]
            ],
            "tip": "The implicit flow is deprecated for a reason: tokens in URL fragments leak through browser history and referers. PKCE everywhere."
          },
          {
            "t": "OpenID Connect Basics",
            "d": "Identity on top of OAuth: ID tokens, discovery, and single sign-on done right.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "ID tokens vs access tokens: identity proof vs API authorization",
              "Discovery documents and JWKS: how clients find keys automatically",
              "Validating ID tokens: issuer, audience, expiry, signature"
            ],
            "do": [
              "Decode an ID token on jwt.io and identify every claim",
              "Fetch a provider's discovery document and JWKS endpoint",
              "Write token validation that checks iss, aud, exp, and signature"
            ],
            "tools": ["OpenID Connect", "jwt.io"],
            "res": [
              ["OpenID Connect", "https://openid.net/connect/"]
            ],
            "tip": "Accepting an ID token as an API credential is a category error. ID tokens authenticate users to clients; access tokens authorize clients to APIs."
          },
          {
            "t": "JWT Anatomy and Validation",
            "d": "Header, payload, signature: understand the token format attackers love to tamper with.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Structure: base64url header, payload, and signature, and what each carries",
              "Signature validation: verifying with the right key and algorithm",
              "Classic attacks: alg=none, algorithm confusion, weak secrets, missing expiry"
            ],
            "do": [
              "Craft a JWT, flip alg to none, and test whether a lab API accepts it",
              "Attempt an RS256-to-HS256 confusion attack against a vulnerable test app",
              "Implement strict validation: expected alg, issuer, audience, and short expiry"
            ],
            "tools": ["jwt.io", "Burp Suite"],
            "res": [
              ["jwt.io", "https://jwt.io/"],
              ["OWASP JWT Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html"]
            ],
            "tip": "Never trust the alg header from the token itself. Pin the expected algorithm server-side or attackers will pick the weakest one for you.",
            "badge": "LAB"
          },
          {
            "t": "Sessions vs Tokens, Refresh and Rotation",
            "d": "Stateful sessions or stateless tokens, and the refresh dance that keeps users logged in safely.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Trade-offs: server-side sessions vs self-contained tokens",
              "Refresh token rotation: detecting reuse as a theft signal",
              "Logout that actually works: revocation lists and short access-token lifetimes"
            ],
            "do": [
              "Implement refresh rotation and test that a reused refresh token kills the session",
              "Set access tokens to 15 minutes and observe the refresh flow in action",
              "Build a logout endpoint and prove the old token no longer works"
            ],
            "tools": ["Redis", "Keycloak"],
            "res": [
              ["OAuth 2.0", "https://oauth.net/2/"]
            ],
            "tip": "Long-lived access tokens are stolen sessions waiting to happen. Short access tokens plus rotating refresh tokens is the standard for a reason."
          },
          {
            "t": "MFA for Sensitive API Operations",
            "d": "Step-up authentication: normal session for browsing, fresh proof for the dangerous actions.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Step-up auth: requiring fresh MFA for payments, key changes, and admin actions",
              "WebAuthn and TOTP as the phishing-resistant options worth preferring",
              "API design for step-up: challenge endpoints and short-lived elevation tokens"
            ],
            "do": [
              "Add a step-up check to a sensitive endpoint in a test API",
              "Enroll a TOTP authenticator and complete a step-up flow end to end",
              "Test that skipping the step-up endpoint returns 403, not a bypass"
            ],
            "tools": ["WebAuthn", "TOTP"],
            "res": [
              ["OWASP Authentication Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"]
            ],
            "tip": "MFA at login only protects the login. Money movement, password changes, and API key creation each deserve their own fresh check."
          },
          {
            "t": "Broken Authentication (API2:2023)",
            "d": "Credential stuffing, weak tokens, and unprotected reset flows: how API auth actually breaks.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Attack patterns: credential stuffing, brute force, token guessing, reset-flow abuse",
              "Defenses: rate limiting auth endpoints, lockout with care, strong token entropy",
              "Why auth endpoints need the strictest rate limits of any route"
            ],
            "do": [
              "Run a credential-stuffing simulation against a lab login with Burp Intruder",
              "Add rate limiting to a login endpoint and verify legitimate users still pass",
              "Audit a password-reset flow for token entropy, expiry, and single use"
            ],
            "tools": ["Burp Suite", "OWASP ZAP"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Rate-limit the login, not just the API. Unprotected auth endpoints turn every leaked password dump into your incident."
          }
        ]
      },
      {
        "t": "Authorization: the API Killer",
        "d": "BOLA, BFLA, and BOPLA cause most API breaches. This is the category to master cold.",
        "lv": 2,
        "children": [
          {
            "t": "BOLA: Broken Object Level Authorization (API1:2023)",
            "d": "The number one API risk: swapping an ID in the URL to read someone else's data.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The pattern: /users/1043 works, so the attacker tries /users/1044",
              "Why object checks must happen server-side on every request, not just in the UI",
              "Centralized authorization: middleware and policy layers instead of per-endpoint checks"
            ],
            "do": [
              "Exploit IDOR in a lab API by enumerating object IDs as another user",
              "Add an ownership check to a vulnerable endpoint and retest",
              "Write a Burp Intruder attack that fuzzes IDs across an entire API"
            ],
            "tools": ["Burp Suite", "OWASP ZAP"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"],
              ["PortSwigger: Access Control", "https://portswigger.net/web-security/access-control"]
            ],
            "tip": "Unpredictable IDs (UUIDs) slow attackers down but fix nothing. The check 'does this user own this object' must run on every request.",
            "badge": "LAB"
          },
          {
            "t": "BFLA: Broken Function Level Authorization (API5:2023)",
            "d": "Hidden admin endpoints are not hidden from anyone who reads your JavaScript or your spec.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How attackers find admin functions: JS bundles, mobile apps, and API docs",
              "Role checks on every endpoint with default-deny as the baseline",
              "Why 'the UI does not show it' is never an authorization control"
            ],
            "do": [
              "Extract admin endpoints from a frontend bundle and call one as a normal user",
              "Add role-based checks to every endpoint in a test API",
              "Write a test that asserts non-admin users get 403 on admin routes"
            ],
            "tools": ["Burp Suite", "Postman"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Test every endpoint as the lowest-privilege user, not just the ones in the menu. Attackers do not use your menu."
          },
          {
            "t": "BOPLA: Broken Object Property Level Authorization (API3:2023)",
            "d": "Excessive data exposure plus mass assignment: the property-level sibling of BOLA.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Excessive data exposure: APIs returning fields the client never needed",
              "Mass assignment: attackers setting isAdmin or role through request bodies",
              "Fixes: explicit allow-lists of readable and writable properties per role"
            ],
            "do": [
              "Call a user endpoint and list every field returned that the UI never displays",
              "Send role=isAdmin in a profile-update request and observe the result",
              "Implement property allow-lists for read and write in a test API"
            ],
            "tools": ["Burp Suite", "Postman"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Generic 'bind the whole request body to the model' code is a mass-assignment vulnerability wearing a framework feature costume."
          },
          {
            "t": "Multi-Tenancy Isolation",
            "d": "SaaS APIs serve many customers from one codebase. One isolation bug exposes everyone.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Tenant isolation models: silo, pool, and row-level scoping",
              "The tenant check as a mandatory filter on every query, no exceptions",
              "Testing cross-tenant access: the highest-value test in any SaaS review"
            ],
            "do": [
              "Build two tenants in a lab app and attempt cross-tenant reads and writes",
              "Add a tenant filter to every database query in a sample service",
              "Write automated tests asserting tenant A can never see tenant B's data"
            ],
            "tools": ["PostgreSQL Row-Level Security", "Burp Suite"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "One endpoint missing the tenant filter undoes the entire isolation model. Enforce it in a shared data-access layer, not per endpoint."
          },
          {
            "t": "Authorization Testing Checklist",
            "d": "A repeatable matrix: every role against every endpoint, verifying the expected denial.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Building the role-by-endpoint matrix from the OpenAPI spec",
              "Horizontal tests (other users' objects) and vertical tests (higher roles' functions)",
              "Automating the matrix so it runs on every deploy"
            ],
            "do": [
              "Build the full matrix for a test API: 3 roles times every endpoint",
              "Execute it manually once, recording expected vs actual for each cell",
              "Script the matrix as a regression suite that runs in CI"
            ],
            "tools": ["Postman", "Newman", "Burp Suite"],
            "res": [
              ["PortSwigger: Access Control", "https://portswigger.net/web-security/access-control"]
            ],
            "tip": "Authorization tests rot fast as endpoints change. Generate the matrix from the spec so new endpoints are tested by default, not by memory."
          }
        ]
      }
      ,
      {
        "t": "OWASP API Top 10 in Depth",
        "d": "The remaining 2023 categories: resource abuse, SSRF, misconfiguration, inventory, and unsafe consumption.",
        "lv": 2,
        "children": [
          {
            "t": "Unrestricted Resource Consumption (API4:2023)",
            "d": "No rate limits means one client can bill you into oblivion or take you offline.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Attack shapes: request floods, expensive queries, giant payloads, runaway pagination",
              "Controls: rate limits, quotas, payload size caps, pagination ceilings, timeouts",
              "Where limits live: gateway, middleware, and per-endpoint business rules"
            ],
            "do": [
              "Flood a test endpoint and measure the damage without limits",
              "Add token-bucket rate limiting and verify 429s under load",
              "Cap payload size and page size, then test the bypass attempts"
            ],
            "tools": ["Redis", "Kong", "k6"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Global rate limits protect the server; per-user and per-endpoint limits protect the business. You need both."
          },
          {
            "t": "Unrestricted Access to Sensitive Business Flows (API6:2023)",
            "d": "Bots do not break rules; they abuse legitimate flows at inhuman scale.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Target flows: checkout, signup, password reset, coupon redemption, scraping",
              "Detection signals: velocity, device fingerprints, behavioral anomalies",
              "Mitigations: CAPTCHAs that do not punish humans, device attestation, flow-specific throttling"
            ],
            "do": [
              "Script a bot that abuses a coupon endpoint in a lab app",
              "Add flow-specific throttling and a challenge step to that endpoint",
              "Define the abuse metrics dashboard for one sensitive flow"
            ],
            "tools": ["Cloudflare", "Redis"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "This category is about legitimate requests at illegitimate scale. WAF signatures miss it; behavioral analysis catches it."
          },
          {
            "t": "SSRF in APIs (API7:2023)",
            "d": "Server-side request forgery: tricking your server into fetching internal URLs for the attacker.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The pattern: user-supplied URLs fetched server-side (webhooks, file imports, URL previews)",
              "Targets: cloud metadata endpoints, internal admin panels, and port scanning the VPC",
              "Defenses: URL allow-lists, blocking private ranges, no redirects, metadata protection"
            ],
            "do": [
              "Exploit an SSRF in a lab app to read a fake cloud metadata endpoint",
              "Add egress filtering that blocks RFC 1918 and link-local ranges",
              "Test redirect-following and DNS-rebinding bypasses against your fix"
            ],
            "tools": ["Burp Suite", "Burp Collaborator"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"],
              ["PortSwigger: SSRF", "https://portswigger.net/web-security/ssrf"]
            ],
            "tip": "Blocklists of 'bad' URLs lose to parser tricks. Allow-list the exact hosts you need and deny everything else.",
            "badge": "LAB"
          },
          {
            "t": "Security Misconfiguration (API8:2023)",
            "d": "Verbose errors, open CORS, default credentials: the configuration mistakes scanners find in minutes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The greatest hits: stack traces in errors, wildcard CORS, debug endpoints in prod",
              "Hardened defaults: secure headers, TLS config, and disabled unused features",
              "Configuration as code: making the secure setting the default, not a checklist item"
            ],
            "do": [
              "Scan a test API with ZAP and fix every misconfiguration finding",
              "Trigger errors and classify which responses leak stack traces or versions",
              "Write a security-headers middleware and verify it with a header checker"
            ],
            "tools": ["OWASP ZAP", "Nuclei"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Misconfiguration is the most automated finding class there is. If a scanner can find it in seconds, so can every attacker."
          },
          {
            "t": "Improper Inventory Management (API9:2023)",
            "d": "You cannot secure APIs you do not know exist. Shadow, zombie, and forgotten versions included.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Shadow APIs: endpoints deployed outside the official inventory",
              "Zombie versions: old v1 endpoints still serving traffic years later",
              "Inventory practice: discovery, ownership, documentation, and sunset dates"
            ],
            "do": [
              "Discover undocumented endpoints on a test app with content discovery",
              "Build a one-page inventory: endpoint, owner, version, auth model, sunset date",
              "Find and decommission one deprecated version in a lab environment"
            ],
            "tools": ["Kiterunner", "OWASP ZAP"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Old API versions keep old vulnerabilities. Every version needs an owner and a sunset date, or it becomes permanent attack surface."
          },
          {
            "t": "Unsafe Consumption of APIs (API10:2023)",
            "d": "Your API calls other APIs. Treat every upstream response as attacker-controlled input.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The trust inversion: upstream data flowing into your database, pages, and commands",
              "Validation of third-party responses against strict schemas",
              "Timeouts, retries, and circuit breakers: surviving a malicious or broken upstream"
            ],
            "do": [
              "Point a test service at a mock upstream that returns malicious payloads",
              "Add strict schema validation to the integration and watch attacks fail",
              "Add timeouts and a circuit breaker, then simulate upstream outage"
            ],
            "tools": ["Postman", "WireMock"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Injection did not disappear from the 2023 list; it moved here. Untrusted upstream data needs the same validation as user input."
          }
        ]
      },
      {
        "t": "Input Handling and Data Exposure",
        "d": "Strict schemas, safe parsing, and responses that reveal nothing extra.",
        "lv": 2,
        "children": [
          {
            "t": "Schema Validation and Strict Parsing",
            "d": "Reject what you do not expect. Lenient parsers are where injection hides.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "JSON Schema validation: types, formats, enums, and additionalProperties false",
              "Rejecting unknown fields vs silently ignoring them",
              "Content-Type enforcement and parser differentials between layers"
            ],
            "do": [
              "Write a strict JSON Schema for one endpoint and test it against malformed input",
              "Send duplicate keys, type confusions, and oversized numbers at the parser",
              "Verify the gateway and the app parse the same request identically"
            ],
            "tools": ["JSON Schema", "Ajv"],
            "res": [
              ["OWASP Input Validation Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html"]
            ],
            "tip": "additionalProperties: false is the single most underused validation rule. Unknown fields should be rejected, not ignored."
          },
          {
            "t": "Injection Through APIs",
            "d": "SQL, NoSQL, command, and template injection all arrive as perfectly normal-looking JSON.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "NoSQL injection: operators like $ne smuggled through JSON bodies",
              "Command injection via fields passed to shell or system calls",
              "The universal fix: parameterized queries and never building commands from input"
            ],
            "do": [
              "Bypass a NoSQL login with {'$ne': null} in a lab app",
              "Exploit a command-injection field, then fix it with argument arrays",
              "Run Semgrep injection rules against an API codebase"
            ],
            "tools": ["Semgrep", "Burp Suite"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"],
              ["PortSwigger: NoSQL Injection", "https://portswigger.net/web-security/nosql-injection"]
            ],
            "tip": "JSON does not sanitize anything. Every value in the body is untrusted input the moment it crosses your boundary."
          },
          {
            "t": "Mass Assignment and Over-Posting",
            "d": "Binding the whole request body to your model hands attackers the keys to every field.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How frameworks auto-bind request fields to model properties",
              "The exploit: adding role, isAdmin, or balance to a profile update",
              "Fixes: DTOs, explicit allow-lists, and read-only model properties"
            ],
            "do": [
              "Exploit mass assignment in a lab API by adding a privileged field",
              "Replace model binding with an explicit DTO allow-list",
              "Grep a codebase for direct request-to-model binding patterns"
            ],
            "tools": ["Burp Suite"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "If your update handler accepts the model class directly, you have a mass-assignment bug waiting for a curious attacker."
          },
          {
            "t": "Pagination and Enumeration Abuse",
            "d": "List endpoints are data-exfiltration endpoints when anyone can page through everything.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Enumeration via sequential IDs and unbounded pagination",
              "Cursor-based pagination and per-user result scoping",
              "Rate-limiting list endpoints as a data-theft control"
            ],
            "do": [
              "Scrape an entire user list through pagination in a lab app",
              "Convert offset pagination to cursor pagination with ownership scoping",
              "Add aggressive rate limits to list endpoints and verify the scraper stalls"
            ],
            "tools": ["Burp Suite", "ffuf"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Ask who needs to list ten thousand records at once. Almost nobody; the scraper does."
          },
          {
            "t": "Error Messages That Do Not Leak",
            "d": "Helpful to developers, useless to attackers: the art of the safe error response.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What leaks: stack traces, SQL errors, file paths, and framework versions",
              "Error design: generic public messages, detailed private logs with correlation IDs",
              "Consistent responses: login failures that do not reveal which half was wrong"
            ],
            "do": [
              "Trigger errors across a test API and catalog every information leak",
              "Implement a global error handler returning safe messages plus correlation IDs",
              "Verify login and reset flows give identical responses for valid and invalid users"
            ],
            "tools": ["OWASP ZAP"],
            "res": [
              ["OWASP Error Handling Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html"]
            ],
            "tip": "'User not found' vs 'wrong password' is a username-enumeration oracle. One message for both, always."
          }
        ]
      },
      {
        "t": "Testing APIs Like a Hacker",
        "d": "Burp, fuzzing, and spec-driven testing: the methodology for finding what scanners miss.",
        "lv": 2,
        "children": [
          {
            "t": "Burp Suite for APIs",
            "d": "Repeater, Intruder, and Proxy: the core loop of manual API testing.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Proxying API traffic: mobile, thick client, and browser sources",
              "Repeater for surgical request manipulation and response analysis",
              "Intruder for IDOR fuzzing, parameter brute force, and auth testing"
            ],
            "do": [
              "Proxy a mobile app's API traffic through Burp",
              "Use Repeater to manually test one endpoint for BOLA",
              "Build an Intruder attack that enumerates object IDs with session handling"
            ],
            "tools": ["Burp Suite"],
            "res": [
              ["PortSwigger Web Security Academy", "https://portswigger.net/web-security"]
            ],
            "tip": "Learn Repeater before Intruder. Precision beats volume: one well-crafted request teaches more than ten thousand blind ones.",
            "badge": "LAB"
          },
          {
            "t": "Fuzzing API Endpoints",
            "d": "Systematic parameter and path fuzzing to find the endpoints nobody documented.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Endpoint discovery: wordlists tuned for APIs, not websites",
              "Parameter fuzzing: finding hidden query and body parameters",
              "Method fuzzing: PUT, PATCH, and DELETE on endpoints that only document GET"
            ],
            "do": [
              "Fuzz a test API for hidden endpoints with an API-focused wordlist",
              "Fuzz parameters on one endpoint and identify the undocumented ones",
              "Test alternate HTTP methods on every discovered endpoint"
            ],
            "tools": ["ffuf", "Kiterunner", "Burp Suite"],
            "res": [
              ["Kiterunner", "https://github.com/assetnote/kiterunner"]
            ],
            "tip": "Default web wordlists miss API routes. Use API-specific lists and always fuzz with the real parameter names from the mobile app."
          },
          {
            "t": "Security Testing with Postman and Newman",
            "d": "Turn your functional collections into security regression suites.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Negative testing: malformed, oversized, and type-confused inputs per endpoint",
              "Authz test scripts: asserting 403s for the wrong roles automatically",
              "Newman in CI: the security suite that runs on every deploy"
            ],
            "do": [
              "Add negative test cases to an existing collection",
              "Write test scripts asserting authorization behavior per role",
              "Run the suite with Newman in CI and break the build on failure"
            ],
            "tools": ["Postman", "Newman"],
            "res": [
              ["Postman Learning Center", "https://learning.postman.com/"]
            ],
            "tip": "Functional tests assert the happy path works. Security tests assert the unhappy paths fail safely. Same suite, different mindset."
          },
          {
            "t": "Scanning from OpenAPI Specs",
            "d": "Feed the contract to the scanner: spec-driven testing with far better coverage.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Importing specs into ZAP, Burp, and dedicated API scanners",
              "Why spec-driven scans beat spidering for APIs",
              "Validating the spec itself: missing auth, loose schemas, dangerous endpoints"
            ],
            "do": [
              "Import an OpenAPI spec into ZAP and run an authenticated scan",
              "Compare coverage against a spider-only scan of the same API",
              "Audit the spec for endpoints with no security requirements"
            ],
            "tools": ["OWASP ZAP", "Burp Suite", "42Crunch"],
            "res": [
              ["OWASP ZAP", "https://www.zaproxy.org/"]
            ],
            "tip": "A stale spec produces a false sense of coverage. Generate specs from code or tests, never hand-maintain them."
          },
          {
            "t": "Writing an API Security Test Plan",
            "d": "Scope, methodology, and reporting: the plan that turns testing into a repeatable practice.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Scoping: inventory, auth models, and out-of-scope rules",
              "Methodology: mapping tests to the OWASP API Top 10 per endpoint",
              "Reporting: reproducible evidence, impact, and remediation guidance"
            ],
            "do": [
              "Write a full test plan for a sample API: scope, accounts, and methodology",
              "Execute the plan and document each finding with request and response evidence",
              "Produce the final report with severity ratings and fix guidance"
            ],
            "tools": ["OWASP API Security Top 10", "Burp Suite"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "A finding without a reproducible request is an opinion. Every report entry needs the exact request that proves it.",
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "API Security in Production",
        "d": "Gateways, mTLS, versioning, and monitoring: defending APIs where real attackers live.",
        "lv": 3,
        "children": [
          {
            "t": "API Gateways in Practice",
            "d": "One enforcement point for auth, rate limits, quotas, and request validation.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Gateway responsibilities: routing, auth termination, throttling, and transformation",
              "Policy as configuration: rate limits, quotas, and IP rules per route",
              "Gateway pitfalls: bypassed gateways and inconsistent policies across routes"
            ],
            "do": [
              "Deploy Kong or Traefik in front of a test API with key auth",
              "Configure per-route rate limits and verify 429 behavior",
              "Prove the backend is unreachable except through the gateway"
            ],
            "tools": ["Kong", "Traefik", "AWS API Gateway"],
            "res": [
              ["Kong", "https://konghq.com/"]
            ],
            "tip": "A gateway that backends can be reached around is decoration. Network policy must make the gateway the only path in."
          },
          {
            "t": "mTLS and Service-to-Service Auth",
            "d": "Mutual TLS: every service proves its identity to every other service.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "How mTLS works: both sides present and verify certificates",
              "Service meshes (Istio, Linkerd) automating mTLS across the fleet",
              "Certificate rotation for workloads without downtime"
            ],
            "do": [
              "Enable strict mTLS in a test service mesh and observe plaintext calls fail",
              "Rotate a workload certificate and confirm zero-downtime renewal",
              "Write the policy that denies non-mTLS traffic to one namespace"
            ],
            "tools": ["Istio", "Linkerd", "cert-manager"],
            "res": [
              ["Istio", "https://istio.io/"]
            ],
            "tip": "mTLS without identity-aware authorization is just encrypted anonymity. Bind the certificate identity to a policy."
          },
          {
            "t": "Versioning, Deprecation, and Sunsetting",
            "d": "Old versions are old vulnerabilities. Ship the sunset plan with the version.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Versioning strategies: URL, header, and their trade-offs",
              "Deprecation communication: headers, docs, and timelines clients can plan around",
              "Sunsetting: the kill checklist from traffic monitoring to DNS removal"
            ],
            "do": [
              "Design the versioning scheme for a sample API",
              "Add Sunset and Deprecation headers to a deprecated version",
              "Write the sunset runbook: monitoring, comms, and the final shutdown"
            ],
            "tools": ["OpenAPI"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Announce the sunset date at launch, not at deprecation. Clients plan around dates they knew from day one."
          },
          {
            "t": "Logging, Monitoring, and Abuse Detection",
            "d": "APIs under attack look normal until you know what to watch for.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What to log per request: identity, endpoint, result, and latency, never secrets",
              "Abuse signals: credential stuffing patterns, scraping velocity, token anomalies",
              "Alerting that pages humans: thresholds tuned on real traffic baselines"
            ],
            "do": [
              "Build structured access logs for a test API with correlation IDs",
              "Simulate a scraping attack and write the detection query that catches it",
              "Create one alert with a tuned threshold and a runbook attached"
            ],
            "tools": ["Loki", "Elasticsearch", "Datadog"],
            "res": [
              ["OWASP Logging Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"]
            ],
            "tip": "Log the authenticated identity on every request. Anonymous logs turn every investigation into a guessing game."
          },
          {
            "t": "Key and Secret Rotation at Scale",
            "d": "Hundreds of API keys across clients: rotate them without breaking anyone.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Rotation without downtime: overlapping validity windows and grace periods",
              "Key metadata: owner, scope, creation, last used, and expiry",
              "Detecting leaked keys: scanning public sources and revoking fast"
            ],
            "do": [
              "Implement dual-key rotation for one API: new key works while old key lingers",
              "Build the key inventory report: owner and last-used for every key",
              "Run the leak drill: revoke a compromised key and confirm the blast radius"
            ],
            "tools": ["HashiCorp Vault", "AWS Secrets Manager"],
            "res": [
              ["HashiCorp Vault", "https://www.vaultproject.io/"]
            ],
            "tip": "Keys without owners never get rotated. Every credential needs a human owner and a last-used timestamp, or it lives forever."
          }
        ]
      }
    ]
  }
});
