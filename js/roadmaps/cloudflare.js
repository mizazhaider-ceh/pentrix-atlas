/* Atlas roadmap data: Cloudflare (cloudflare) */
ROADMAPS.push({
  "id": "cloudflare",
  "title": "Cloudflare",
  "icon": "🌩️",
  "color": "#f6821f",
  "desc": "Master the connectivity cloud: DNS and CDN for speed, WAF and DDoS protection for security, Zero Trust for access, and Workers for code at the edge.",
  "kind": "skill",
  "root": {
    "t": "Cloudflare Practitioner",
    "d": "From your first DNS record to edge applications and Zero Trust.",
    "children": [
      {
        "t": "DNS and Onboarding",
        "d": "Put your domain behind Cloudflare's anycast network and learn what the orange cloud actually does.",
        "lv": 1,
        "children": [
          {
            "t": "Moving Your Domain to Cloudflare",
            "d": "Change nameservers, let Cloudflare scan your DNS, and verify everything resolves before you flip the switch.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Full setup (nameserver change) vs partial CNAME setup: what each gives up",
              "DNS propagation and why you verify every critical record before changing nameservers",
              "The onboarding checklist: MX records for email, verification TXT records, root and www"
            ],
            "do": [
              "Add a test domain, review the auto-imported DNS records, and fix any that look wrong",
              "Change nameservers at your registrar and confirm activation in the dashboard",
              "Use `dig` against 1.1.1.1 to confirm your records resolve through Cloudflare"
            ],
            "tools": ["Cloudflare Dashboard", "dig", "1.1.1.1"],
            "res": [
              ["Cloudflare DNS docs", "https://developers.cloudflare.com/dns/"],
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Email breaks most often during migration. Double-check MX, SPF, DKIM, and DMARC records before changing nameservers, not after."
          },
          {
            "t": "DNS Records: Proxied vs DNS-Only",
            "d": "The orange cloud decides whether traffic flows through Cloudflare's edge or straight to your origin.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Proxied (orange cloud): hides your origin IP, adds CDN, WAF, and DDoS protection",
              "DNS-only (gray cloud): plain DNS answer, no edge features, needed for some mail and special records",
              "Record types: A, AAAA, CNAME, MX, TXT, SRV; CNAME flattening for the zone apex"
            ],
            "do": [
              "Proxy your www record and leave mail-related records DNS-only",
              "Curl your site and check for the `cf-ray` header proving edge proxying",
              "Use CNAME flattening at the apex and verify it resolves to an IP"
            ],
            "tools": ["Cloudflare Dashboard", "curl", "dig"],
            "res": [
              ["Cloudflare DNS docs", "https://developers.cloudflare.com/dns/"]
            ],
            "tip": "Never proxy your origin's real IP into the open: once attackers learn it, they bypass the WAF entirely. Keep origins locked to Cloudflare IPs."
          },
          {
            "t": "Managed DNS and the Anycast Network",
            "d": "Why Cloudflare DNS answers in milliseconds worldwide: anycast routing to the nearest of 300+ locations.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Anycast: one IP announced from everywhere, BGP routes you to the nearest edge",
              "TTL tradeoffs: low for records you change often, high for stable ones to cut query load",
              "Secondary DNS and zone transfers if you need another provider as backup"
            ],
            "do": [
              "Set different TTLs on a stable record and one you plan to migrate, and explain the choice",
              "Query your domain from multiple locations (use an online DNS checker) and compare response times",
              "Enable DNS analytics and find your top queried records"
            ],
            "tools": ["Cloudflare Dashboard", "dig", "DNS Checker"],
            "res": [
              ["Cloudflare DNS docs", "https://developers.cloudflare.com/dns/"]
            ],
            "tip": "Dropping TTL to 60 seconds a day before a migration saves you from stale caches. Raise it back after for performance."
          },
          {
            "t": "DNSSEC and CAA Records",
            "d": "Cryptographically sign your DNS so resolvers can prove answers are genuine, and pin which CAs may issue for you.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "DNSSEC chain: DS record at the registrar, DNSKEY and RRSIG in the zone; Cloudflare can manage signing",
              "CAA records: restrict certificate issuance to your chosen CAs (e.g. letsencrypt, digicert)",
              "What breaks when DNSSEC is misconfigured: the domain goes dark for validating resolvers"
            ],
            "do": [
              "Enable DNSSEC in the dashboard and add the DS record at your registrar",
              "Verify the chain with a DNSSEC debugger tool",
              "Add a CAA record allowing only your CA and test issuance"
            ],
            "tools": ["Cloudflare Dashboard", "DNSSEC Debugger", "dig"],
            "res": [
              ["Cloudflare DNS docs", "https://developers.cloudflare.com/dns/"]
            ],
            "tip": "Enable DNSSEC at Cloudflare AND publish the DS record. Half the chain does nothing except create a false sense of security."
          },
          {
            "t": "Redirects, Rewrites and Page Rules",
            "d": "Handle URL redirects at the edge without touching your origin: domain forwarding, www normalization, and legacy paths.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Redirect Rules (the modern replacement for Page Rules): match on hostname, path, or query and issue 301/302",
              "Single redirects vs bulk redirects for hundreds of legacy URLs from a CSV",
              "Transform rules: rewrite paths and headers at the edge before they reach the origin"
            ],
            "do": [
              "Create a redirect rule forcing www to apex (or the reverse) with a 301",
              "Upload a bulk redirect list for 50 legacy blog URLs",
              "Add a transform rule injecting a country header your origin can read"
            ],
            "tools": ["Cloudflare Dashboard", "Bulk Redirects"],
            "res": [
              ["Cloudflare docs", "https://developers.cloudflare.com/"]
            ],
            "tip": "Page Rules are legacy and limited to 125 per zone. Build new logic in Redirect and Transform Rules; migrate old Page Rules off."
          }
        ]
      },
      {
        "t": "CDN and Performance",
        "d": "Cache at the edge so most requests never reach your origin: faster users, cheaper servers.",
        "lv": 1,
        "children": [
          {
            "t": "How the Edge CDN Works",
            "d": "Requests hit the nearest of 300+ data centers; static assets are served from cache, dynamic traffic is accelerated.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Cache HIT vs MISS vs BYPASS and the cf-cache-status header that tells you which happened",
              "What is cacheable by default (images, CSS, JS) and what is not (HTML, API responses) and why",
              "Argo smart routing for dynamic content: fastest path through the backbone, not the public internet"
            ],
            "do": [
              "Load your site twice and compare cf-cache-status and timing on the second load",
              "Identify three uncached assets in DevTools and decide whether each should be cached",
              "Measure time-to-first-byte before and after enabling proxying"
            ],
            "tools": ["Cloudflare Dashboard", "Browser DevTools", "curl"],
            "res": [
              ["Cloudflare cache docs", "https://developers.cloudflare.com/cache/"],
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "A MISS on every request means your Cache-Control headers are wrong or the asset is not cacheable. Fix the origin headers, not the CDN settings."
          },
          {
            "t": "Cache Rules, TTLs and Tiered Caching",
            "d": "Control exactly what gets cached and for how long: edge TTL, browser TTL, and tiered cache topology.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cache rules: match by path, extension, or header and set edge TTL and browser TTL separately",
              "Tiered caching: upper-tier data centers shield your origin so only one region fetches on a miss",
              "Cache keys: query strings, headers, and cookies change what counts as the same cached object"
            ],
            "do": [
              "Write a cache rule: cache /static/* for a month at the edge, 1 day in browsers",
              "Enable tiered caching and watch origin request volume drop in analytics",
              "Configure cache key to ignore marketing query strings (utm_*)"
            ],
            "tools": ["Cloudflare Dashboard", "Cache Analytics"],
            "res": [
              ["Cloudflare cache docs", "https://developers.cloudflare.com/cache/"]
            ],
            "tip": "Caching HTML with cookies in the cache key effectively disables the cache. Decide per route: cache anonymous pages, bypass logged-in ones."
          },
          {
            "t": "Purging the Cache",
            "d": "When you deploy, stale cache is the enemy: purge precisely so the new version goes live everywhere in seconds.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Purge by URL, by prefix, by tag, or everything; what each costs in origin load",
              "Cache tags (surrogate keys): tag related assets and purge the tag on content updates",
              "Why versioned filenames beat purging: new URL means no purge needed"
            ],
            "do": [
              "Deploy a CSS change, purge just that URL, and confirm the new file serves globally",
              "Tag product pages with a category tag and purge the whole category at once",
              "Automate purges in your deploy pipeline with the API and a scoped token"
            ],
            "tools": ["Cloudflare Dashboard", "Cloudflare API", "Cache-Tag header"],
            "res": [
              ["Cloudflare cache docs", "https://developers.cloudflare.com/cache/"]
            ],
            "tip": "Purge Everything is the nuclear option: every edge refetches from origin at once. Prefer targeted purges or versioned assets."
          },
          {
            "t": "Image Optimization",
            "d": "Serve responsive, modern-format images from the edge: Polish, Mirage, and Cloudflare Images.",
            "lv": 2,
            "time": "~2h",
            "tag": "opt",
            "learn": [
              "Polish: lossy/lossless compression and WebP/AVIF conversion on the fly",
              "Cloudflare Images: upload once, resize and transform via URL variants, no origin storage needed",
              "Responsive delivery: serve the right size per device instead of one giant image"
            ],
            "do": [
              "Enable Polish and compare page weight before and after on WebPageTest",
              "Upload an image to Cloudflare Images and request three resized variants by URL",
              "Set up a variant pipeline in your build for hero images"
            ],
            "tools": ["Cloudflare Images", "WebPageTest", "Browser DevTools"],
            "res": [
              ["Cloudflare Images docs", "https://developers.cloudflare.com/images/"]
            ],
            "tip": "Images are usually 60%+ of page weight. Optimizing them beats every other frontend performance trick combined."
          },
          {
            "t": "HTTP/3, Early Hints and Speed",
            "d": "Modern protocols and edge hints that shave round trips: enable them and measure the difference.",
            "lv": 2,
            "time": "~2h",
            "tag": "opt",
            "learn": [
              "HTTP/3 over QUIC: faster handshakes, no head-of-line blocking; enabled with one toggle",
              "Early Hints (103): edge tells the browser to preload critical assets before the origin responds",
              "Rocket Loader and JS deferral: why you measure before enabling automatic optimizations"
            ],
            "do": [
              "Enable HTTP/3 and confirm via a QUIC-capable test tool",
              "Enable Early Hints and watch preload timing in DevTools",
              "Run before/after Core Web Vitals comparisons for each toggle"
            ],
            "tools": ["Cloudflare Dashboard", "WebPageTest", "PageSpeed Insights"],
            "res": [
              ["Cloudflare speed docs", "https://developers.cloudflare.com/speed/"]
            ],
            "tip": "Automatic JS optimizations can break scripts that depend on load order. Test in staging; the speed gain is not worth a broken checkout."
          }
        ]
      },
      {
        "t": "WAF and DDoS Defense",
        "d": "Stop attacks at the edge before they reach your servers: DDoS absorption, WAF rules, and bot fighting.",
        "lv": 2,
        "children": [
          {
            "t": "Always-On DDoS Protection",
            "d": "Unmetered, automatic mitigation of L3/L4 and L7 attacks: understand what is absorbed and what you still configure.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What is automatic: SYN floods, UDP amplification, and HTTP flood heuristics at the edge",
              "What you configure: HTTP DDoS managed ruleset sensitivity and exposed-port lockdown",
              "Attack analytics: reading an attack timeline to distinguish attack traffic from a traffic spike"
            ],
            "do": [
              "Review the DDoS analytics tab and identify mitigated events on a sample zone",
              "Set the HTTP DDoS ruleset sensitivity and document why you chose the level",
              "Write an incident runbook: who checks what when alerts fire"
            ],
            "tools": ["Cloudflare Dashboard", "DDoS Analytics"],
            "res": [
              ["Cloudflare DDoS protection", "https://www.cloudflare.com/ddos/"]
            ],
            "tip": "DDoS protection is unmetered, but your origin bandwidth is not. Keep origins locked to Cloudflare IPs so attackers cannot bill you directly."
          },
          {
            "t": "WAF Managed Rulesets",
            "d": "Turn on curated protection against OWASP Top 10 and known CVEs, then tune out the false positives.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Managed rulesets: Cloudflare Managed, OWASP core ruleset, and CVE-specific rules updated automatically",
              "Paranoia levels and anomaly scoring: higher sensitivity blocks more attacks and more legitimate users",
              "False positive workflow: find the rule ID in the event log, test, then skip or disable narrowly"
            ],
            "do": [
              "Enable the Cloudflare Managed Ruleset on a staging zone",
              "Attack your own staging site with common payloads and watch the WAF block them",
              "Tune one false positive by skipping a single rule for a single path, not disabling the ruleset"
            ],
            "tools": ["Cloudflare WAF", "Security Events log"],
            "res": [
              ["Cloudflare WAF docs", "https://developers.cloudflare.com/waf/"]
            ],
            "tip": "Disabling a whole managed ruleset because of one false positive is like removing the door because the lock stuck. Skip the single rule, scoped as narrowly as possible."
          },
          {
            "t": "WAF Custom Rules",
            "d": "Write your own firewall logic in the wirefilter language: block by country, ASN, path, bot score, or request shape.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Rule anatomy: expression (fields, operators, values) plus action (block, challenge, JS challenge, log)",
              "Available fields: ip.src, http.request.uri.path, cf.bot_management.score, cf.threat_score, http.user_agent",
              "Rule ordering and the Log action for testing rules before they enforce"
            ],
            "do": [
              "Write a rule blocking wp-login.php probes with a Managed Challenge",
              "Build a rule that challenges traffic from ASNs you never serve, starting in Log mode",
              "Create an allowlist rule for your office IPs and monitoring services placed first"
            ],
            "tools": ["Cloudflare WAF", "Security Events log"],
            "res": [
              ["Cloudflare WAF docs", "https://developers.cloudflare.com/waf/"]
            ],
            "tip": "Deploy every new custom rule in Log mode for 48 hours first. The events log will show you exactly what it would have blocked, including your own mistakes."
          },
          {
            "t": "Rate Limiting Rules",
            "d": "Cap abusive request rates per IP or per session: protect login, signup, and API endpoints from brute force and scraping.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Counting characteristics: IP, header (API key), cookie, or JA3/JA4 fingerprint",
              "Thresholds and periods: requests per 10 seconds vs per minute; what to count as a request",
              "Mitigation timeouts and distinguishing rate limiting from the DDoS ruleset"
            ],
            "do": [
              "Rate-limit /login to 5 attempts per minute per IP with a 1-hour block",
              "Protect an API endpoint by API key header instead of IP (shared NAT problem)",
              "Load-test your own limit and confirm legitimate bursts still pass"
            ],
            "tools": ["Cloudflare WAF", "k6", "curl"],
            "res": [
              ["Cloudflare WAF docs", "https://developers.cloudflare.com/waf/"]
            ],
            "tip": "Rate limiting by IP alone punishes everyone behind carrier-grade NAT. Key APIs by token or cookie, and keep IP limits generous."
          },
          {
            "t": "Bot Management",
            "d": "Score every request for bot likelihood and treat good bots, bad bots, and humans differently.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Bot scores 1-99 from behavioral analysis, machine learning, and fingerprinting",
              "Verified bots (search engines) vs likely automated vs definitely automated traffic",
              "Super Bot Fight Mode (free tier basics) vs full Bot Management with custom handling per score band"
            ],
            "do": [
              "Enable Bot Fight Mode and watch automated traffic get challenged in analytics",
              "Write a rule: score < 30 gets blocked on /api, score 30-70 gets a managed challenge",
              "Allowlist your uptime monitors and payment webhooks from bot rules"
            ],
            "tools": ["Cloudflare Dashboard", "Bot Analytics"],
            "res": [
              ["Bot Management docs", "https://developers.cloudflare.com/bots/"]
            ],
            "tip": "Blocking all bots breaks SEO and monitoring. Classify first: allow verified bots, challenge the suspicious, block only the definitely automated on sensitive paths."
          },
          {
            "t": "SSL/TLS Encryption Modes",
            "d": "Full (Strict) or nothing: get end-to-end encryption right and stop serving mixed content.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Modes: Off, Flexible (edge HTTPS, origin HTTP: insecure), Full (origin HTTPS, unverified), Full Strict (verified cert)",
              "Origin certificates: free Cloudflare origin CA certs for Full Strict without a public CA",
              "Automatic HTTPS rewrites and HSTS to force browsers onto TLS"
            ],
            "do": [
              "Install a Cloudflare origin certificate and switch the zone to Full (Strict)",
              "Enable Always Use HTTPS and HSTS with a short max-age first, then extend",
              "Test with an SSL checker and fix any mixed-content warnings"
            ],
            "tools": ["Cloudflare Dashboard", "SSL Labs test"],
            "res": [
              ["Cloudflare SSL docs", "https://developers.cloudflare.com/ssl/"]
            ],
            "tip": "Flexible mode encrypts only the visitor-to-Cloudflare leg; origin traffic stays plaintext. It looks secure in the browser and is not. Use Full Strict."
          }
        ]
      },
      {
        "t": "Zero Trust",
        "d": "Replace the VPN with identity-aware access: every user and device verified, every app protected, no trusted network.",
        "lv": 2,
        "children": [
          {
            "t": "Cloudflare One and Zero Trust Basics",
            "d": "The model: never trust the network, always verify identity and device before granting app access.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why VPNs fail the modern test: coarse network access, lateral movement, painful for users",
              "Cloudflare One components: Access, Gateway, Tunnel, WARP, Browser Isolation, DLP",
              "The free tier: 50 users of Zero Trust free, enough for a small team to start"
            ],
            "do": [
              "Sign up for Zero Trust in the dashboard and enroll your team (up to 50 free)",
              "Map your current VPN use cases to Access, Gateway, or Tunnel equivalents",
              "Write the policy: which apps need which identity providers and device checks"
            ],
            "tools": ["Cloudflare One Dashboard"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "Zero Trust is a policy project wearing a product costume. The technology is easy; deciding who may access what is the actual work."
          },
          {
            "t": "Access: Identity-Aware Applications",
            "d": "Put internal tools behind SSO and device checks without a VPN client: Access policies per app.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Access applications: self-hosted (via Tunnel) or SaaS (via OIDC/SAML)",
              "Policies: allow/deny/bypass by email domain, IdP group, device posture, country, or MFA",
              "Access groups: reusable sets of rules shared across applications"
            ],
            "do": [
              "Protect an internal dashboard with an Access policy requiring your IdP and MFA",
              "Create an Access group for engineers and reuse it on three apps",
              "Test the deny path: a user outside the group gets a clean block page"
            ],
            "tools": ["Cloudflare Access", "Identity provider (Google, Entra, Okta)"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "Start with Bypass rules for health checks and webhooks before enforcing. Locking out your own monitoring is the classic first Access outage."
          },
          {
            "t": "Gateway: DNS and HTTP Filtering",
            "d": "Filter what users and devices can reach: block malware, phishing, and shadow IT at the resolver and proxy.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "DNS policies: block threat intel categories (malware, phishing, C2) for all enrolled devices",
              "HTTP policies: inspect and filter web traffic, block file uploads to unsanctioned SaaS",
              "DoH endpoints and WARP enrollment so filtering follows the device off-network"
            ],
            "do": [
              "Point a test device at the Gateway DoH resolver and try a known phishing test domain",
              "Create a DNS policy blocking newly registered domains",
              "Build an HTTP policy blocking personal cloud storage uploads"
            ],
            "tools": ["Cloudflare Gateway", "WARP client"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "DNS filtering alone is bypassed in seconds by anyone who changes resolvers. Pair it with WARP enrollment or firewall rules forcing Gateway DNS."
          },
          {
            "t": "Cloudflare Tunnel",
            "d": "Expose internal services to the internet without opening a single inbound firewall port.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How it works: cloudflared makes outbound-only connections to the edge; no inbound holes, no public IPs",
              "Public hostnames for web services and private networks for TCP/UDP and SSH access",
              "Tunnel configuration: ingress rules routing hostnames to local services"
            ],
            "do": [
              "Install cloudflared on a home lab server and expose a web app on a public hostname",
              "Verify no inbound firewall rules exist and the origin IP stays hidden",
              "Add a second replica for high availability and watch failover"
            ],
            "tools": ["cloudflared", "Cloudflare Dashboard"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "Tunnel replaces port forwarding, dynamic DNS, and half your firewall rules. If you still have port 80 open to the world, you are doing it the hard way."
          },
          {
            "t": "WARP Client and Device Posture",
            "d": "The device agent that enforces Zero Trust everywhere: encrypted tunnel, posture checks, and per-app routing.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "WARP modes: proxy traffic to Gateway, route private IPs, or full device tunnel",
              "Device posture checks: OS version, disk encryption, firewall, EDR presence before granting access",
              "Split tunnels: which traffic goes through WARP and which goes direct"
            ],
            "do": [
              "Enroll a device in WARP and confirm Gateway policies apply off-network",
              "Create a posture check requiring disk encryption and gate an app on it",
              "Configure split tunnels to exclude video conferencing from the tunnel"
            ],
            "tools": ["WARP client", "Cloudflare One Dashboard"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "Requiring posture checks without a remediation path just creates helpdesk tickets. Tell users exactly how to become compliant."
          },
          {
            "t": "Service Tokens and mTLS",
            "d": "Machines need identity too: service tokens for automation and mutual TLS for service-to-service trust.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Service tokens: non-human credentials for CI jobs and scripts accessing Access-protected apps",
              "mTLS: client certificates proving service identity, validated at the edge",
              "Short-lived tokens and rotation: why static secrets are the weakest link"
            ],
            "do": [
              "Create a service token and use it from a CI pipeline to hit a protected endpoint",
              "Set up mTLS for one internal API and require client certs in the Access policy",
              "Rotate a token and confirm the old one stops working"
            ],
            "tools": ["Cloudflare Access", "openssl", "CI pipeline"],
            "res": [
              ["Cloudflare One docs", "https://developers.cloudflare.com/cloudflare-one/"]
            ],
            "tip": "Service tokens in CI logs are as leakable as passwords. Scope them to one app, rotate on a schedule, and alert on use from unexpected IPs."
          }
        ]
      },
      {
        "t": "Workers Platform",
        "d": "Run JavaScript and TypeScript at the edge in milliseconds: your first Worker to production patterns.",
        "lv": 2,
        "children": [
          {
            "t": "Your First Worker and Wrangler",
            "d": "Install the CLI, write a fetch handler, deploy worldwide in seconds: the fastest backend you will ever ship.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Wrangler v4: init, dev, deploy, tail; wrangler.jsonc config and compatibility dates",
              "The fetch handler: Request in, Response out; routes and custom domains",
              "Free tier limits: 100k requests/day, 10ms CPU time; what the paid plan unlocks"
            ],
            "do": [
              "Run `npx wrangler init my-worker`, write a hello-world fetch handler, and `wrangler dev` locally",
              "Deploy with `wrangler deploy` and hit your workers.dev URL",
              "Attach a custom domain route and confirm it serves"
            ],
            "tools": ["Wrangler", "Node.js", "TypeScript"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"],
              ["Wrangler docs", "https://developers.cloudflare.com/workers/wrangler/"]
            ],
            "tip": "Set a recent compatibility_date and keep Wrangler updated. Old compatibility dates silently change runtime behavior and cause bugs that look like your code."
          },
          {
            "t": "Isolates, Runtime and Lifecycle",
            "d": "Why Workers start in milliseconds: V8 isolates instead of containers, and what that means for your code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Isolates vs containers vs VMs: startup time, memory overhead, and security boundaries",
              "No Node.js APIs by default: the Workers runtime API surface and Node.js compatibility flags",
              "CPU time limits, memory limits, and subrequest limits per plan"
            ],
            "do": [
              "Port a small Express handler to a Worker and note which Node APIs break",
              "Enable nodejs_compat and confirm the previously broken API now works",
              "Measure cold start: deploy and time the first request vs warmed requests"
            ],
            "tools": ["Wrangler", "Miniflare"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "Global state persists between requests in the same isolate. Treat it as a cache that can vanish, never as a database."
          },
          {
            "t": "Routing with Hono and the Fetch API",
            "d": "Build real APIs at the edge: a fast router, JSON handlers, and clean request/response code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Hono: the standard edge router (also runs on Lambda and Node), middleware, and JSX rendering",
              "Request handling: parsing JSON, query params, headers; Response helpers and streaming",
              "Error handling and CORS middleware done once, correctly"
            ],
            "do": [
              "Build a todo API with Hono: GET, POST, PUT, DELETE with proper status codes",
              "Add CORS and error-handling middleware",
              "Benchmark a Hono route vs a hand-rolled router and note the difference"
            ],
            "tools": ["Hono", "Wrangler", "TypeScript"],
            "res": [
              ["Hono", "https://hono.dev"],
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "Validate and sanitize at the edge like you would anywhere else. Edge deployment does not sanitize your inputs for you."
          },
          {
            "t": "Middleware Patterns",
            "d": "Cross-cutting concerns as composable middleware: auth, logging, rate limiting, and request IDs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Middleware chain: before/after hooks, short-circuiting, and error propagation",
              "Auth middleware: verifying JWTs at the edge with the JWKS of your IdP",
              "Per-route rate limiting in a Worker using KV or Durable Objects counters"
            ],
            "do": [
              "Write auth middleware validating JWTs and rejecting expired tokens with 401",
              "Add structured request logging with a correlation ID propagated to the origin",
              "Implement a sliding-window rate limiter and test it with a burst script"
            ],
            "tools": ["Hono", "Wrangler", "jose"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "Verify JWT signatures at the edge, but keep authorization decisions close to the data. Edge auth answers who, your API answers what they may do."
          },
          {
            "t": "Workers Observability: Logs and Tail",
            "d": "See what your edge code does in production: real-time tailing, structured logs, and metrics.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`wrangler tail`: streaming live logs, filtering by method, status, or header",
              "Structured logging with JSON so logs are queryable in Workers Logs",
              "Workers Analytics Engine and trace events for performance debugging"
            ],
            "do": [
              "Add JSON structured logs to your Worker and tail them during a load test",
              "Filter tail output to only 5xx responses and find the failing handler",
              "Set up a logpush job to your SIEM or object storage for retention"
            ],
            "tools": ["Wrangler", "Workers Logs", "Logpush"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "console.log strings are write-only debugging. Log structured JSON with request IDs from day one or production issues become archaeology."
          }
        ]
      },
      {
        "t": "Storage and Durable Execution",
        "d": "State at the edge: key-value, object storage, SQL, and stateful coordination with Durable Objects.",
        "lv": 3,
        "children": [
          {
            "t": "Workers KV",
            "d": "Globally replicated key-value storage for config, sessions, and feature flags with edge reads.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Eventual consistency: writes take up to 60s to propagate globally; reads are edge-fast",
              "Use cases: feature flags, redirects, session data, cached API responses",
              "Limits: key sizes, value sizes, and why KV is not a database for relational data"
            ],
            "do": [
              "Create a KV namespace, write values with wrangler, and read them from a Worker",
              "Build a feature-flag system reading flags from KV with a 60s cache",
              "Measure write propagation delay across regions"
            ],
            "tools": ["Wrangler", "Workers KV"],
            "res": [
              ["Workers KV docs", "https://developers.cloudflare.com/kv/"]
            ],
            "tip": "KV's eventual consistency bites on read-after-write flows like signup. For data the user just wrote, use D1 or Durable Objects instead."
          },
          {
            "t": "R2 Object Storage",
            "d": "S3-compatible object storage with zero egress fees: the pricing model that changes architectures.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "S3-compatible API: existing tools and SDKs work with an endpoint swap",
              "Zero egress fees: serve large files and backups without the bandwidth bill",
              "Lifecycle rules, event notifications, and public buckets with custom domains"
            ],
            "do": [
              "Create an R2 bucket and upload with the AWS CLI using the R2 endpoint",
              "Serve a public bucket through a custom domain with cache rules",
              "Migrate an S3-backed upload flow to R2 and compare the monthly bill"
            ],
            "tools": ["Wrangler", "AWS CLI", "rclone"],
            "res": [
              ["R2 docs", "https://developers.cloudflare.com/r2/"]
            ],
            "tip": "Zero egress does not mean zero cost: operations (Class A/B) still bill. Chatty apps doing millions of small reads can surprise you."
          },
          {
            "t": "D1 Serverless SQL",
            "d": "SQLite at the edge with real SQL: migrations, queries, and the read-replication model.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "D1 architecture: SQLite with read replicas at the edge, writes go to the primary",
              "Migrations with wrangler, prepared statements, and batch operations",
              "When D1 fits (read-heavy, relational data) vs when you need Durable Objects or an external DB"
            ],
            "do": [
              "Create a D1 database, write a migration, and apply it locally and remotely",
              "Build a small API with Drizzle ORM over D1",
              "Test write latency from your location vs read latency and explain the gap"
            ],
            "tools": ["Wrangler", "Drizzle", "D1"],
            "res": [
              ["D1 docs", "https://developers.cloudflare.com/d1/"]
            ],
            "tip": "D1 replicates reads to the edge but writes travel to the primary. Write-heavy workloads feel that latency; design for read-mostly access."
          },
          {
            "t": "Durable Objects",
            "d": "Stateful coordination at the edge: exactly-once actors for chat rooms, game state, and realtime collaboration.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The actor model: one object, one location, serialized execution, transactional storage",
              "WebSockets to Durable Objects: hibernation API for thousands of idle connections",
              "Alarms for scheduled work inside an object; SQLite-backed storage"
            ],
            "do": [
              "Build a chat room: one Durable Object per room, WebSocket broadcast to members",
              "Add an alarm that archives idle rooms after 24 hours",
              "Load-test 500 concurrent WebSocket connections and watch hibernation work"
            ],
            "tools": ["Wrangler", "Durable Objects", "TypeScript"],
            "res": [
              ["Durable Objects docs", "https://developers.cloudflare.com/durable-objects/"]
            ],
            "tip": "Durable Objects give strong consistency per object, not globally. Design your object boundaries (one per room, per user, per game) before writing code."
          },
          {
            "t": "Queues and Workflows",
            "d": "Background jobs and multi-step orchestration: reliable async work without managing a queue cluster.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Queues: producers, consumers with batching and retries, dead-letter queues",
              "Workflows: durable multi-step orchestration with automatic retry and state",
              "Idempotency: why consumers must handle duplicate deliveries"
            ],
            "do": [
              "Build an image-processing pipeline: upload to R2 triggers a queue consumer",
              "Add a dead-letter queue and poison a message to watch it arrive",
              "Write a Workflow that calls three APIs in sequence with retries"
            ],
            "tools": ["Wrangler", "Queues", "Workflows"],
            "res": [
              ["Queues docs", "https://developers.cloudflare.com/queues/"]
            ],
            "tip": "Queues deliver at-least-once. If your consumer is not idempotent, retries will double-charge, double-email, or double-provision."
          }
        ]
      },
      {
        "t": "Production and Platform",
        "d": "Ship Workers like a professional: secrets, environments, testing, and a real full-stack project.",
        "lv": 3,
        "children": [
          {
            "t": "Secrets, Bindings and Environments",
            "d": "Wire your Worker to the world safely: encrypted secrets, typed bindings, and staging vs production.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Secrets via wrangler secret put: encrypted at rest, never in code or config files",
              "Bindings: KV, R2, D1, queues, and service bindings connecting Workers to each other",
              "Environments: staging and production configs with separate resources"
            ],
            "do": [
              "Store an API key as a secret and read it in your Worker without logging it",
              "Bind KV, R2, and D1 to one Worker and generate types with `wrangler types`",
              "Deploy to a staging environment first, then promote to production"
            ],
            "tools": ["Wrangler", "TypeScript"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "Secrets in wrangler.jsonc or .dev.vars committed to git are compromised the moment you push. Use wrangler secret commands and CI secret stores."
          },
          {
            "t": "Testing Workers: Miniflare and CI/CD",
            "d": "Test edge code locally and in CI: Miniflare simulation plus deploy pipelines with preview URLs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Miniflare: local simulation of KV, R2, D1, Durable Objects for fast unit and integration tests",
              "Vitest integration: testing handlers with mocked bindings",
              "CI/CD: GitHub Actions deploying on merge, preview deployments per pull request"
            ],
            "do": [
              "Write Vitest tests for your Hono routes running against Miniflare",
              "Build a GitHub Actions workflow that deploys staging on every PR",
              "Add a smoke test hitting the preview URL before production promotion"
            ],
            "tools": ["Miniflare", "Vitest", "GitHub Actions", "Wrangler"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"]
            ],
            "tip": "Miniflare simulates the runtime, not the network. Run one staging deploy against real bindings before trusting green local tests."
          },
          {
            "t": "Workers AI",
            "d": "Run inference at the edge: serverless GPUs for text, image, and embedding models without managing hardware.",
            "lv": 3,
            "time": "~3h",
            "tag": "opt",
            "learn": [
              "The model catalog: LLMs, speech-to-text, image classification, and embeddings as API calls",
              "Binding a model to a Worker and streaming responses",
              "Vectorize: vector database for RAG, pairing embeddings with Workers AI"
            ],
            "do": [
              "Build a Worker that summarizes pasted text with an LLM binding",
              "Stream the response token by token to the browser",
              "Store embeddings in Vectorize and build a semantic search endpoint"
            ],
            "tools": ["Wrangler", "Workers AI", "Vectorize"],
            "res": [
              ["Workers AI docs", "https://developers.cloudflare.com/workers-ai/"]
            ],
            "tip": "Edge inference is priced per request and fast for small models. For long generations or fine-tuned models, compare against a dedicated inference provider."
          },
          {
            "t": "Ship a Workers Full-Stack App",
            "d": "Capstone: a complete application on the edge, frontend to database, with auth, caching, and CI/CD.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "Architecture: static frontend on Pages or R2, Hono API on Workers, D1 for data, KV for sessions",
              "Auth at the edge: JWT middleware plus Access for the admin panel",
              "Production checklist: custom domain, WAF rules, rate limits, observability, backups"
            ],
            "do": [
              "Build and deploy a URL shortener: frontend, API, D1 storage, analytics in KV",
              "Protect the admin routes and add rate limiting on the create endpoint",
              "Write the runbook: how you would debug a 5xx at 2 AM"
            ],
            "tools": ["Wrangler", "Hono", "D1", "KV", "GitHub Actions"],
            "res": [
              ["Workers docs", "https://developers.cloudflare.com/workers/"],
              ["Cloudflare dashboard", "https://dash.cloudflare.com"]
            ],
            "badge": "PROJECT",
            "tip": "Ship the boring version first: one region of correctness beats five regions of features. Add edge sophistication after real users arrive."
          }
        ]
      }
    ]
  }
});
