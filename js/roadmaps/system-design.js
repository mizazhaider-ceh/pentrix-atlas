/* Atlas roadmap data: System Design (system-design) */
ROADMAPS.push({
  "id": "system-design",
  "title": "System Design",
  "icon": "🏗️",
  "color": "#c084fc",
  "desc": "Design systems that survive real traffic: from one server to planet scale, with the tradeoffs interviewers actually probe.",
  "kind": "skill",
  "root": {
    "t": "Scalable System Design",
    "d": "From a single server to planet scale: how big systems are designed, reasoned about, and defended in interviews.",
    "children": [
      {
        "t": "Foundations: Scale, Speed, Reliability",
        "d": "The vocabulary and math every design discussion is built on.",
        "lv": 1,
        "children": [
          {
            "t": "What Is System Design",
            "d": "Turning fuzzy product requirements into concrete, defensible architectures.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The design loop: requirements, constraints, components, tradeoffs, bottlenecks",
              "Functional vs non-functional requirements, and why NFRs drive the design",
              "Design as decision-making under uncertainty, not picking trendy tech"
            ],
            "do": [
              "Pick an app you use daily and sketch its boxes and arrows on paper",
              "List 5 non-functional requirements for it (scale, latency, availability, consistency, cost)",
              "Write down which requirement would change your sketch the most"
            ],
            "tools": ["Excalidraw", "draw.io"],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "tip": "Beginners jump straight to tech choices. Seniors spend the first half of any design on requirements and constraints."
          },
          {
            "t": "Latency vs Throughput",
            "d": "How fast one request is, versus how many requests you can serve.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Latency is time per request; throughput is requests per unit of time",
              "Percentiles: p50, p99, p999, and why averages hide the pain",
              "Little's law intuition: concurrency equals throughput times latency"
            ],
            "do": [
              "Time 20 requests to a public site with `curl -w` and compute p50/p99 yourself",
              "Find a latency number that surprised you and explain what causes it",
              "Sketch how a 200ms downstream call caps your throughput per thread"
            ],
            "tools": ["curl", "wrk"],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "tip": "Users feel latency; businesses pay for throughput. Averages lie: always talk in percentiles."
          },
          {
            "t": "Performance vs Scalability",
            "d": "Fast is not the same as scalable, and optimizing the wrong one wastes months.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Performance: how fast one unit of work is; scalability: how behavior changes as load grows",
              "Vertical scaling (bigger box) vs horizontal scaling (more boxes)",
              "Bottlenecks move: fixing one reveals the next, so measure before optimizing"
            ],
            "do": [
              "Benchmark a tiny web app with wrk at 10, 100, then 1000 concurrent users",
              "Note exactly where throughput stops growing and latency explodes",
              "Write one paragraph: is this app performance-bound or scalability-bound?"
            ],
            "tools": ["wrk", "k6"],
            "res": [
              ["k6 Documentation", "https://k6.io/docs/"]
            ],
            "tip": "Premature scaling is as wasteful as premature optimization. Scale the bottleneck you measured, not the one you guessed."
          },
          {
            "t": "Availability in Numbers",
            "d": "What 99.9% really means in minutes of downtime, and who pays for the nines.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The nines: 99.9% allows 8.76 hours of downtime per year, 99.99% allows 52 minutes",
              "SLA vs SLO vs SLI: promises, targets, and the measurements behind them",
              "MTBF and MTTR: availability is as much about fast recovery as preventing failure"
            ],
            "do": [
              "Compute the allowed monthly downtime for 99.9%, 99.95%, and 99.99%",
              "Look up a real cloud provider SLA and list what it excludes",
              "Draft an SLO with an SLI for an API you know"
            ],
            "tools": [],
            "res": [
              ["Google SRE Books", "https://sre.google/books/"]
            ],
            "tip": "Every extra nine costs roughly an order of magnitude more. Never promise five nines because it sounds impressive."
          },
          {
            "t": "Back-of-the-Envelope Estimation",
            "d": "Sizing a system with powers of ten before writing a line of code.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Latency numbers every programmer should know: memory ns, disk ms, network 100s of us",
              "QPS times bytes equals bandwidth; users times activity equals storage growth",
              "Round to orders of magnitude: 10x accuracy beats 1% precision in design"
            ],
            "do": [
              "Estimate storage for 100M photos per day at 2MB each, kept 5 years",
              "Estimate QPS for a chat app with 50M daily users sending 40 messages each",
              "Estimate bandwidth for serving 1M video views per day at 5 Mbps streams"
            ],
            "tools": [],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "tip": "Interviewers grade your assumptions and arithmetic, not the final number. State assumptions out loud before computing."
          },
          {
            "t": "Horizontal vs Vertical Scaling",
            "d": "Bigger machines versus more machines, and why statelessness decides.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Vertical: simpler, but hits a hardware ceiling and a single point of failure",
              "Horizontal: near-unlimited, but demands stateless services and shared state stores",
              "Shared-nothing design: each node independent, coordination pushed to dedicated stores"
            ],
            "do": [
              "Make a tiny app stateless by moving sessions into Redis",
              "Run 3 copies behind round-robin and kill one mid-traffic",
              "Observe which requests break and why"
            ],
            "tools": ["Docker", "Redis"],
            "res": [
              ["Redis Documentation", "https://redis.io/"]
            ],
            "tip": "If your app keeps state in memory, you cannot scale horizontally. Statelessness is the price of admission."
          }
        ]
      },
      {
        "t": "Traffic Management: Getting Requests In",
        "d": "DNS, load balancers, CDNs, and gateways: the front door of every large system.",
        "lv": 1,
        "children": [
          {
            "t": "DNS in System Design",
            "d": "The internet's phone book, and a surprisingly powerful traffic tool.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Resolution chain: resolver, root, TLD, authoritative, and where caching happens",
              "TTL tradeoffs: long TTLs are fast but make failover slow",
              "DNS-based tricks: geo-routing, weighted records, and anycast"
            ],
            "do": [
              "Trace a full resolution with `dig +trace` and note every hop",
              "Compare TTL values across 5 popular domains and infer their failover strategy",
              "Explain why DNS alone is a poor load balancer"
            ],
            "tools": ["dig", "nslookup"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/"]
            ],
            "tip": "DNS changes propagate at TTL speed, not instantly. Designs that need fast failover put a load balancer behind DNS, not instead of it."
          },
          {
            "t": "Load Balancing Algorithms",
            "d": "How traffic gets split, and what breaks when the split is naive.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Round robin, weighted round robin, least connections, least response time",
              "Consistent hashing: minimal reshuffling when nodes join or leave",
              "Sticky sessions: why they exist and why they fight horizontal scaling"
            ],
            "do": [
              "Configure an NGINX upstream with 3 backends using least_conn",
              "Hammer it and watch distribution across backends",
              "Simulate one slow backend and compare least-connections vs round-robin behavior"
            ],
            "tools": ["NGINX", "HAProxy"],
            "res": [
              ["HAProxy", "https://www.haproxy.org/"]
            ],
            "tip": "Round robin is fair only when requests cost the same. With mixed workloads, least-connections prevents one slow backend from piling up."
          },
          {
            "t": "Layer 4 vs Layer 7 Load Balancing",
            "d": "Dumb-fast packet forwarding versus smart HTTP-aware routing.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "L4: routes TCP/UDP by IP and port, extremely fast, blind to content",
              "L7: understands HTTP, does path-based routing, TLS termination, header injection",
              "Typical stack: L4 at the edge for raw scale, L7 inside for smart routing"
            ],
            "do": [
              "Terminate TLS at NGINX and route /api and /static to different backends",
              "Add a header at the proxy and read it in the app",
              "Measure the latency cost of TLS termination vs passthrough"
            ],
            "tools": ["NGINX", "Envoy"],
            "res": [
              ["Envoy Proxy", "https://www.envoyproxy.io/"]
            ],
            "tip": "Terminate TLS as close to the edge as you can afford, but remember: anything after termination sees plaintext, so secure that hop too."
          },
          {
            "t": "Reverse Proxy vs Load Balancer",
            "d": "Overlapping jobs, different primary purposes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Load balancer: distribute traffic across backends for scale and availability",
              "Reverse proxy: sit in front for caching, compression, security, and request shaping",
              "In practice one box (NGINX, Envoy) often does both jobs"
            ],
            "do": [
              "Put Caddy in front of a toy app with gzip and response caching enabled",
              "Compare response times and backend hits with caching on and off",
              "Draw where a reverse proxy, a load balancer, and a gateway each sit"
            ],
            "tools": ["Caddy", "NGINX"],
            "res": [
              ["Caddy Server", "https://caddyserver.com/"]
            ]
          },
          {
            "t": "Content Delivery Networks",
            "d": "Putting your bytes physically closer to every user on earth.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Edge caching: serve static content from PoPs near the user",
              "Pull vs push CDNs, and cache hit ratio as the metric that matters",
              "Origin shielding, invalidation, and why dynamic content is the hard part"
            ],
            "do": [
              "Serve a static site through a CDN free tier and compare TTFB from two regions",
              "Purge one file and time how long the new version takes to appear",
              "Calculate the origin offload from a 95% hit ratio"
            ],
            "tools": ["Cloudflare", "Fastly"],
            "res": [
              ["Cloudflare", "https://www.cloudflare.com/"]
            ],
            "tip": "A CDN fixes geography, not architecture. If your origin melts at 100 rps, the CDN just hides it until the cache misses."
          },
          {
            "t": "API Gateways",
            "d": "One front door for auth, rate limiting, routing, and composition.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Gateway responsibilities: authentication, rate limiting, routing, request/response transformation",
              "Gateway vs service mesh: edge policy vs east-west policy",
              "Backends-for-frontends: one gateway per client type when needs diverge"
            ],
            "do": [
              "Stand up Kong with two upstream services behind path-based routes",
              "Add key auth and a rate-limit plugin to one route",
              "Load-test with and without the gateway and note the overhead"
            ],
            "tools": ["Kong", "NGINX"],
            "res": [
              ["Kong", "https://konghq.com/"]
            ],
            "tip": "Gateways attract business logic like magnets. Keep them dumb: routing and policy in, domain logic out."
          }
        ]
      },
      {
        "t": "The Data Layer",
        "d": "Storing and serving data when one database is no longer enough.",
        "lv": 2,
        "children": [
          {
            "t": "SQL vs NoSQL: Choosing",
            "d": "Relational integrity versus flexible scale, chosen per workload.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Relational strengths: joins, ACID transactions, ad-hoc queries, mature tooling",
              "NoSQL families: key-value, document, wide-column, graph, and what each is for",
              "Polyglot persistence: different data, different stores, in one system"
            ],
            "do": [
              "Model the same domain (orders and products) in PostgreSQL and MongoDB",
              "Run an equivalent join vs embedded-document query and compare",
              "Write down which queries were painful in each and why"
            ],
            "tools": ["PostgreSQL", "MongoDB"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ],
            "tip": "Start with Postgres until a specific workload proves it wrong. Most teams adopt NoSQL for fashion and inherit its tradeoffs for free."
          },
          {
            "t": "Replication",
            "d": "Copies of your data for reads, durability, and surviving failures.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Leader-follower: writes to one, reads from many",
              "Synchronous vs asynchronous replication: consistency vs speed and availability",
              "Replication lag: the stale-read window, and how failover picks a new leader"
            ],
            "do": [
              "Set up Postgres streaming replication with one replica",
              "Write, then immediately read from the replica in a loop to observe lag",
              "Fail over manually and document every step you had to take"
            ],
            "tools": ["PostgreSQL", "MySQL"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ],
            "tip": "Async replication means your replica is always slightly in the past. Any feature reading from replicas must tolerate stale data."
          },
          {
            "t": "Partitioning and Sharding",
            "d": "Splitting one dataset across many machines when it outgrows one.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Horizontal partitioning: rows spread by a shard key across nodes",
              "Choosing shard keys: cardinality, even distribution, and query patterns",
              "Hot spots, rebalancing pain, and why consistent hashing helps"
            ],
            "do": [
              "Shard synthetic user data across 4 SQLite files by hash of user id",
              "Inject a celebrity user and watch one shard overheat",
              "Sketch a rebalancing plan that moves data without downtime"
            ],
            "tools": ["Vitess", "Citus"],
            "res": [
              ["Vitess", "https://vitess.io/"]
            ],
            "tip": "The shard key is the most expensive decision in the design: you can re-shard, but it is a migration, not a config change."
          },
          {
            "t": "Indexes and Query Tuning",
            "d": "Making the database fast without touching the application.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "B-tree basics: how indexes turn scans into seeks",
              "Reading EXPLAIN plans: sequential scans, index usage, join strategies",
              "N+1 queries and covering indexes: the two cheapest big wins"
            ],
            "do": [
              "Run EXPLAIN ANALYZE on a slow query before and after adding an index",
              "Find an N+1 in a sample app and fix it with eager loading",
              "Add a covering index and verify the plan changes"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ],
            "tip": "Indexes speed reads and slow writes. Index the queries you actually run, measured from production, not the ones you imagine."
          },
          {
            "t": "Caching Strategies",
            "d": "Cache-aside, read-through, write-through, write-behind: picking the write path.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Cache-aside: app manages the cache, lazy loading, most common pattern",
              "Read-through/write-through: cache sits in the data path with loader/writer",
              "Write-behind: fast writes, batched persistence, with data-loss risk on crash"
            ],
            "do": [
              "Implement cache-aside with Redis and a TTL for a product page",
              "Convert it to write-through and compare write latency",
              "Kill the cache process and observe how each strategy degrades"
            ],
            "tools": ["Redis", "Valkey", "Memcached"],
            "res": [
              ["Redis", "https://redis.io/"]
            ],
            "tip": "Name your invalidation strategy before you write any caching code. An unwatched cache becomes a second, divergent database."
          },
          {
            "t": "Cache Invalidation and Stampedes",
            "d": "Keeping the cache honest when the data underneath changes.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "TTL expiry vs event-driven invalidation: staleness budgets",
              "Thundering herd: one expired key, ten thousand simultaneous recomputes",
              "Stampede protection: request coalescing, probabilistic early refresh, single-flight"
            ],
            "do": [
              "Simulate a stampede: expire a hot key under load and watch the database spike",
              "Fix it with request coalescing and measure the difference",
              "Design invalidation events for a write path you know"
            ],
            "tools": ["Redis"],
            "res": [
              ["Valkey", "https://valkey.io/"]
            ],
            "tip": "The cache is only as correct as its invalidation. Draw the invalidation flow for every cached entity before you ship."
          },
          {
            "t": "Denormalization and Federation",
            "d": "Trading write complexity for read speed at scale.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Denormalization: precomputed joins for hot read paths",
              "Federation: splitting one logical database by function or table",
              "Materialized views: the database doing your denormalization for you"
            ],
            "do": [
              "Denormalize a feed table and compare the query plan before and after",
              "List what breaks on every write now (the denormalization tax)",
              "Decide for 3 queries whether federation would help or hurt"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["AWS Builders Library", "https://aws.amazon.com/builders-library/"]
            ],
            "tip": "Normalize until it hurts, denormalize until it works. Every denormalized field is a future consistency bug you are signing up to own."
          }
        ]
      },
      {
        "t": "Async and Messaging",
        "d": "Decoupling in time: queues, streams, and surviving traffic spikes.",
        "lv": 2,
        "children": [
          {
            "t": "Message Queues",
            "d": "Durable handoffs between producers and consumers that never meet.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Decoupling: producers and consumers scale and deploy independently",
              "Delivery semantics: at-least-once, at-most-once, and why exactly-once is a myth without idempotency",
              "Dead-letter queues: where poison messages go instead of blocking the world"
            ],
            "do": [
              "Publish and consume with RabbitMQ; kill a consumer mid-message",
              "Observe redelivery and route the poison message to a DLQ",
              "Measure end-to-end latency under a backlog"
            ],
            "tools": ["RabbitMQ", "Amazon SQS"],
            "res": [
              ["RabbitMQ", "https://www.rabbitmq.com/"]
            ],
            "tip": "Design for at-least-once and make consumers idempotent. Chasing exactly-once delivery usually costs more than it saves."
          },
          {
            "t": "Streaming Platforms",
            "d": "Queues with memory: ordered, replayable logs of everything that happened.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Log vs queue: retention and replay change what you can build",
              "Partitions: ordering within a partition, parallelism across them",
              "Consumer groups and offsets: many independent readers of one log"
            ],
            "do": [
              "Create a Kafka topic, produce events, and add a second consumer group",
              "Replay from an old offset into a new consumer and watch history rebuild",
              "Kill a broker and observe partition leadership move"
            ],
            "tools": ["Apache Kafka", "Redpanda"],
            "res": [
              ["Apache Kafka", "https://kafka.apache.org/"]
            ],
            "tip": "Partition count is nearly permanent: too few starves parallelism, too many slows rebalancing. Size for 2-3 years of growth."
          },
          {
            "t": "Task Queues and Background Jobs",
            "d": "Getting slow work off the request path without losing it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Async offload: respond fast, process later",
              "Scheduled jobs and cron: the batch world alongside the realtime one",
              "Result handling: polling, callbacks, and idempotent task design"
            ],
            "do": [
              "Move image resizing out of a request handler into a Celery worker",
              "Schedule a nightly aggregation job and make it rerunnable",
              "Retry a failed job and verify no duplicate side effects"
            ],
            "tools": ["Celery", "Sidekiq"],
            "res": [
              ["Celery", "https://docs.celeryq.dev/"]
            ],
            "tip": "Every background job will eventually run twice. Make tasks idempotent from day one or inherit mysterious duplicates."
          },
          {
            "t": "Pub/Sub and Event-Driven Design",
            "d": "Broadcasting facts so new consumers can appear without rewiring.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Publish-subscribe: one event, many independent subscribers",
              "Choreography vs orchestration: emergent flows vs a central conductor",
              "Event schema versioning: events are a public API with a long memory"
            ],
            "do": [
              "Emit domain events on order creation with NATS",
              "Add a new subscriber (notifications) without touching the publisher",
              "Evolve the event schema and keep old subscribers working"
            ],
            "tools": ["NATS", "Apache Kafka"],
            "res": [
              ["NATS", "https://nats.io/"]
            ],
            "tip": "Choreography feels clean until you need to answer 'where is order 123 in the flow?'. Keep a way to observe the whole saga."
          },
          {
            "t": "Back Pressure",
            "d": "What happens when producers outrun consumers, and who says stop.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Unbounded queues are unbounded memory: every queue needs a full policy",
              "Strategies: buffer, drop, throttle, shed load, or push back on the producer",
              "Consumer lag as the vital sign to watch"
            ],
            "do": [
              "Flood a queue and graph consumer lag as it grows",
              "Add a bounded queue with 429 responses and watch the system stabilize",
              "Write the runbook for 'consumer lag is climbing'"
            ],
            "tools": ["Apache Kafka", "NGINX"],
            "res": [
              ["RabbitMQ", "https://www.rabbitmq.com/"]
            ],
            "tip": "Design the 'queue is full' path first. Systems fail at the edges you never drew, and the queue edge is where they fail."
          },
          {
            "t": "Idempotency",
            "d": "Making 'try again' safe in a world where networks lie.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why retries demand idempotent handlers: the same request may arrive twice",
              "Idempotency keys: client-supplied tokens the server deduplicates",
              "Natural idempotency: designing operations where repeats are harmless"
            ],
            "do": [
              "Add idempotency keys to a payment endpoint backed by a keys table",
              "Replay the same request 5 times and verify one charge",
              "Find a non-idempotent endpoint you have built and fix it"
            ],
            "tools": ["Stripe API"],
            "res": [
              ["Stripe Idempotent Requests", "https://stripe.com/docs/api/idempotent_requests"]
            ],
            "tip": "If a client can retry it, assume it will be retried. Idempotency is not a feature, it is a prerequisite for reliability."
          }
        ]
      },
      {
        "t": "Consistency and Consensus",
        "d": "The hard core of distributed systems: agreeing on truth across machines.",
        "lv": 3,
        "children": [
          {
            "t": "The CAP Theorem",
            "d": "When the network partitions, you choose consistency or availability. There is no third option.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Partition tolerance is mandatory; the real choice is C vs A during a partition",
              "PACELC: even without partitions, you trade latency against consistency",
              "Common misreadings: CAP is not 'pick two forever', it is about partition behavior"
            ],
            "do": [
              "Partition a CP store and an AP store in a lab and compare behaviors",
              "Classify 5 systems you know as CP or AP with justification",
              "Write the PACELC tradeoff for a product search index"
            ],
            "tools": ["etcd", "Cassandra"],
            "res": [
              ["CAP Twelve Years Later (Brewer)", "https://www.infoq.com/articles/cap-twelve-years-later/"]
            ],
            "tip": "Ask 'what happens during a partition?' about every distributed component. If nobody knows, you have found your next outage."
          },
          {
            "t": "Consistency Models",
            "d": "Strong, eventual, and everything in between: a spectrum, not a switch.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Strong, sequential, causal, and eventual consistency in plain terms",
              "Session guarantees: read-your-writes and monotonic reads users actually feel",
              "Why 'eventual' is fine for likes and catastrophic for bank balances"
            ],
            "do": [
              "Demonstrate a stale read on an eventually consistent store",
              "Implement read-your-writes with sticky routing and verify it",
              "Map each model to a feature where it is the right choice"
            ],
            "tools": ["DynamoDB", "Cassandra"],
            "res": [
              ["Jepsen", "https://jepsen.io/"]
            ],
            "tip": "Match the consistency model to the user's mental model. Surprising staleness is a bug even when the database calls it a feature."
          },
          {
            "t": "Quorums and Tunable Consistency",
            "d": "Dialing consistency up and down with R, W, and N.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "R + W > N gives strong consistency; smaller quorums trade it for latency and availability",
              "Sloppy quorums and hinted handoff: staying available when replicas are down",
              "The Dynamo paper lineage behind Cassandra, Riak, and DynamoDB"
            ],
            "do": [
              "Set different R/W/N in Cassandra and measure latency vs staleness",
              "Take a replica down and watch hinted handoff recover it",
              "Choose quorum settings for a session store and defend them"
            ],
            "tools": ["Cassandra", "ScyllaDB"],
            "res": [
              ["Apache Cassandra", "https://cassandra.apache.org/"]
            ],
            "tip": "Tunable consistency is power with a loaded safety. Document the chosen R/W/N next to the feature, or someone will 'optimize' it later."
          },
          {
            "t": "Consensus: Paxos and Raft",
            "d": "How a cluster agrees on one truth even as members die.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Why consensus exists: leader election, configuration, and distributed locking need agreement",
              "Raft's core: leader election, log replication, and safety across terms",
              "Paxos vs Raft: same guarantees, Raft designed to be understood"
            ],
            "do": [
              "Run a 3-node etcd cluster; kill the leader and watch re-election",
              "Write during the election and observe what clients experience",
              "Explain in your own words why a 2-node cluster cannot be safe"
            ],
            "tools": ["etcd", "Consul"],
            "res": [
              ["The Raft Consensus Algorithm", "https://raft.github.io/"]
            ],
            "tip": "Never implement consensus yourself. Use etcd, Consul, or ZooKeeper; the bugs in hand-rolled consensus only appear at 3 AM."
          },
          {
            "t": "Distributed Transactions and Sagas",
            "d": "Coordinating work across services without distributed locks.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Two-phase commit: correct, blocking, and avoided in modern systems",
              "Sagas: sequences of local transactions with compensating actions",
              "Transactional outbox: publishing events atomically with the database write"
            ],
            "do": [
              "Implement a saga for order, payment, and shipment with a compensating refund step",
              "Fail the payment step and verify the compensation runs",
              "Add a transactional outbox to a service and consume from it"
            ],
            "tools": ["Apache Kafka", "Temporal"],
            "res": [
              ["Saga Pattern (microservices.io)", "https://microservices.io/patterns/data/saga.html"]
            ],
            "tip": "If your saga has no compensating actions designed, you do not have a saga, you have a hope. Design the undo path first."
          },
          {
            "t": "Leader Election",
            "d": "Picking one writer so the rest can simply follow.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why single-writer simplifies everything: ordering and conflicts disappear",
              "Election via consensus vs via distributed locks: different guarantees",
              "Fencing tokens: stopping a deposed leader that does not know it lost"
            ],
            "do": [
              "Elect a leader using etcd leases among 3 candidate processes",
              "Partition the leader and watch a new one take over",
              "Demonstrate a stale leader writing, then fix it with fencing"
            ],
            "tools": ["etcd", "ZooKeeper"],
            "res": [
              ["etcd", "https://etcd.io/"]
            ],
            "tip": "Leader election without fencing is just a suggestion. The split-brain write from a zombie leader is the classic data-loss story."
          },
          {
            "t": "Time, Clocks, and Ordering",
            "d": "Wall clocks lie, so distributed systems order events without trusting them.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Clock skew is real: NTP keeps machines close, never equal",
              "Lamport timestamps and vector clocks: capturing happened-before",
              "Last-write-wins: simple, and silently wrong under concurrency"
            ],
            "do": [
              "Implement Lamport clocks in a toy chat and order concurrent messages",
              "Create a last-write-wins conflict and watch a legitimate update vanish",
              "Explain when physical timestamps are safe enough"
            ],
            "tools": [],
            "res": [
              ["AWS Builders Library", "https://aws.amazon.com/builders-library/"]
            ],
            "tip": "Never order business-critical events by wall-clock time across machines. If order matters, make it explicit with logical clocks or a single sequencer."
          }
        ]
      },
      {
        "t": "Resilience, Observability, and the Interview",
        "d": "Surviving failure, seeing inside the system, and proving it all under interview pressure.",
        "lv": 3,
        "children": [
          {
            "t": "Timeouts, Retries, and Hedging",
            "d": "The first line of defense when dependencies misbehave.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Timeouts as failure detectors: every outbound call needs one",
              "Exponential backoff with jitter: retrying without synchronizing the thunder",
              "Retry budgets and hedged requests: bounding the cost of optimism"
            ],
            "do": [
              "Add jittered exponential backoff to a client calling a flaky backend",
              "Measure p99 before and after under induced flakiness",
              "Set a retry budget and watch it protect the downstream"
            ],
            "tools": ["resilience4j", "Polly"],
            "res": [
              ["AWS Builders Library", "https://aws.amazon.com/builders-library/"]
            ],
            "tip": "Retries without jitter cause retry storms: every client hammering at once. Jitter is not optional, it is the whole point."
          },
          {
            "t": "Circuit Breakers and Bulkheads",
            "d": "Failing fast and isolating blast radius when things go wrong.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Circuit breaker states: closed, open, half-open, and what triggers each",
              "Fail fast: stop waiting on a dependency that is already down",
              "Bulkheads: isolating thread pools and resources so one failure cannot sink the ship"
            ],
            "do": [
              "Wrap a flaky dependency in a circuit breaker and trip it under load",
              "Observe fast-fail behavior and the half-open recovery probe",
              "Partition thread pools per dependency and overload one"
            ],
            "tools": ["resilience4j", "Envoy"],
            "res": [
              ["Circuit Breaker (Fowler)", "https://martinfowler.com/bliki/CircuitBreaker.html"]
            ],
            "tip": "A circuit breaker with no fallback still improves the system: fast failure beats slow cascading failure every time."
          },
          {
            "t": "Rate Limiting and Throttling",
            "d": "Protecting your system from its own users, politely.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Algorithms: token bucket, leaky bucket, fixed and sliding window",
              "Distributed rate limiting: shared counters and their consistency tradeoffs",
              "Per-user vs per-service vs global limits: layering defenses"
            ],
            "do": [
              "Implement a token-bucket limiter in Redis with a Lua script",
              "Test burst vs sustained traffic against it",
              "Add per-user limits to an API and return proper 429s with Retry-After"
            ],
            "tools": ["Redis", "Envoy"],
            "res": [
              ["Envoy Proxy", "https://www.envoyproxy.io/"]
            ],
            "tip": "Rate limit at the edge, but enforce per-service too. Edge limits protect the business; service limits protect the architecture."
          },
          {
            "t": "Observability: Metrics, Logs, Traces",
            "d": "Seeing inside production without guessing.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "The three pillars: metrics for trends, logs for details, traces for request journeys",
              "RED and USE methods: what to measure on services and resources",
              "Cardinality dangers and sampling: observability has a cost model too"
            ],
            "do": [
              "Instrument a 3-service app with OpenTelemetry end to end",
              "Trace one request across all services and find its slowest span",
              "Build a RED dashboard and set one sensible alert"
            ],
            "tools": ["OpenTelemetry", "Prometheus", "Grafana", "Jaeger"],
            "res": [
              ["OpenTelemetry", "https://opentelemetry.io/"]
            ],
            "tip": "If you cannot trace a user request across services, you do not have observability, you have dashboards. Start with trace context propagation."
          },
          {
            "t": "SLOs, SLIs, and Alerting",
            "d": "Turning reliability into numbers the business can agree on.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "SLI to SLO to error budget: measurement, target, and allowed failure",
              "Alert on burn rate, not on every spike: paging humans only for real pain",
              "Runbooks: the alert is only half the system, the response is the rest"
            ],
            "do": [
              "Define SLIs for an API you know and set an SLO with an error budget",
              "Build a burn-rate alert in Prometheus",
              "Write a one-page runbook for that alert"
            ],
            "tools": ["Prometheus", "Grafana"],
            "res": [
              ["Google SRE Books", "https://sre.google/books/"]
            ],
            "tip": "Every alert should be actionable by the person paged. If the response is 'watch and wait', it is not a page, it is a ticket."
          },
          {
            "t": "Chaos Engineering",
            "d": "Breaking things on purpose to learn before production does it for you.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Hypothesis-driven experiments: steady state, inject failure, compare",
              "Blast radius control: start in staging, contain, and always have a stop button",
              "Game days: rehearsing the human side of incidents"
            ],
            "do": [
              "Kill a pod in a staging cluster and verify self-healing time",
              "Inject latency between two services and watch timeouts and breakers react",
              "Write the experiment hypothesis before running it, and the lesson after"
            ],
            "tools": ["Chaos Mesh", "Litmus"],
            "res": [
              ["Chaos Mesh", "https://www.chaos-mesh.org/"]
            ],
            "tag": "opt",
            "tip": "Chaos without a hypothesis is vandalism. State what you expect to stay healthy, then try to prove yourself wrong."
          },
          {
            "t": "The System Design Interview Framework",
            "d": "Requirements, API, data model, scale: the walkthrough that works every time.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Step 1: clarify functional and non-functional requirements and constraints",
              "Step 2: sketch the API, then the data model, then the component diagram",
              "Step 3: identify bottlenecks and scale each one, narrating every tradeoff"
            ],
            "do": [
              "Do a timed 45-minute mock design of a URL shortener, out loud",
              "Repeat with a rate limiter, then a chat system",
              "Record yourself and count how many tradeoffs you verbalized"
            ],
            "tools": ["Excalidraw"],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "tip": "Interviewers grade your reasoning, not your diagram. Narrate every tradeoff out loud, especially the ones you are unsure about."
          },
          {
            "t": "Case Study: Design a URL Shortener",
            "d": "The classic interview build: hashing, key generation, and 100M URLs a month.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "Requirements math: writes vs reads, storage, and bandwidth",
              "Key generation: hash vs counter vs key-generation service, and collisions",
              "Redirects, caching hot URLs, and analytics without slowing the hot path"
            ],
            "do": [
              "Run the estimation math for 100M new URLs per month",
              "Build it end to end: API, base62 encoding, Redis cache, sharded store",
              "Load-test and find your first bottleneck"
            ],
            "tools": ["Redis", "PostgreSQL"],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "Case Study: Design a Social Feed",
            "d": "Fan-out on write versus fan-out on read, and the celebrity problem.",
            "lv": 3,
            "time": "~2d",
            "learn": [
              "Fan-out on write: fast reads, expensive writes, stale-ish feeds",
              "Fan-out on read: fresh reads, expensive at follow-graph scale",
              "The celebrity problem: hybrid strategies for million-follower accounts"
            ],
            "do": [
              "Implement both fan-out strategies for a toy social graph",
              "Benchmark timeline reads at 1K, 100K, and 1M followers",
              "Design the hybrid and justify the cutoff"
            ],
            "tools": ["Cassandra", "Redis"],
            "res": [
              ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
