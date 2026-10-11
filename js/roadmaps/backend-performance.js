/* Atlas roadmap data: Backend Performance (backend-performance) */
ROADMAPS.push({
  "id": "backend-performance",
  "title": "Backend Performance",
  "icon": "⏱️",
  "color": "#a7f3d0",
  "desc": "Make servers fast on purpose: measure honestly, profile ruthlessly, kill N+1s, cache smartly, test under load, and scale without drama.",
  "kind": "practice",
  "root": {
    "t": "Backend Performance",
    "d": "From gut feelings to measured, repeatable speed.",
    "children": [
      {
        "t": "Measure Before You Optimize",
        "d": "You cannot fix what you cannot measure. Learn to speak latency like a native.",
        "lv": 1,
        "children": [
          {
            "t": "Percentiles: p50, p95, p99",
            "d": "Averages lie. Percentiles tell you what your unluckiest users actually experience.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Why the average hides pain: one 10s request skews the mean but barely moves p99",
              "p50 = typical user, p95 = bad day, p99 = worst realistic experience; p99.9 catches outliers",
              "Latency distributions: bimodal patterns (cache hit vs miss) and what they reveal"
            ],
            "do": [
              "Take any endpoint and log 200 request timings into a histogram",
              "Compute p50/p95/p99 with a script and compare them against the average",
              "Write one sentence for each percentile: who does it represent on your API?"
            ],
            "tools": ["HdrHistogram", "Prometheus histograms", "k6"],
            "res": [
              ["Latency numbers every programmer should know (gist)", "https://gist.github.com/jboner/2841832"],
              ["Prometheus histogram docs", "https://prometheus.io/docs/practices/histograms/"]
            ],
            "tip": "Optimizing for the average is the classic trap. Averages get dragged by outliers; p95/p99 show you the shape of real suffering."
          },
          {
            "t": "Baselines and Benchmarking",
            "d": "Record the 'before' or every optimization claim is just a story.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Baseline discipline: same hardware, same data volume, same workload, then change ONE thing",
              "Warm-up effects: JIT compilation, connection pools, and cold caches skew early numbers",
              "Micro vs macro benchmarks: fast loops vs realistic end-to-end scenarios"
            ],
            "do": [
              "Pick one endpoint and record p50/p95/RPS under a fixed load as your baseline",
              "Run the benchmark 3 times and note the variance between runs",
              "Save the baseline in a file you will diff against after each change"
            ],
            "tools": ["hey", "autocannon", "wrk"],
            "res": [
              ["hey HTTP load generator", "https://github.com/rakyll/hey"],
              ["autocannon", "https://github.com/mcollina/autocannon"]
            ],
            "tip": "If you skipped the baseline, any 'improvement' is theater. Numbers first, opinions second."
          },
          {
            "t": "Latency vs Throughput vs Capacity",
            "d": "Fast per request and fast for a million users are two different games.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Latency = time per request; throughput = requests per second; capacity = the wall where both die",
              "Little's Law: concurrency = arrival rate x latency, and why queues explode past saturation",
              "Why doubling CPU rarely doubles throughput: contention, GC pauses, and shared resources"
            ],
            "do": [
              "Plot latency against increasing concurrency for one endpoint and find the knee",
              "Identify whether your test box saturates on CPU, memory, or connections first",
              "Write the one-line version of Little's Law for your own service"
            ],
            "tools": ["k6", "Grafana"],
            "res": [
              ["Little's Law (Wikipedia)", "https://en.wikipedia.org/wiki/Little%27s_law"],
              ["k6", "https://k6.io/docs/"]
            ],
            "tip": "Beginners chase lower latency and ignore throughput. The server that answers in 20ms but collapses at 50 users is not fast."
          },
          {
            "t": "APM and Continuous Profiling",
            "d": "Profiling in production beats guessing in staging.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "APM vs logs vs metrics: traces show the path, metrics show the trend, logs show the detail",
              "Always-on production profiling: why sampling profilers (Pyroscope, Parca) are safe to run live",
              "Golden signals: latency, traffic, errors, saturation as your first dashboard"
            ],
            "do": [
              "Deploy an APM agent (or OpenTelemetry) on a toy service and view one full trace",
              "Install a continuous profiler and capture a CPU profile under real load",
              "Build a 4-panel dashboard with the golden signals"
            ],
            "tools": ["OpenTelemetry", "Datadog APM", "New Relic", "Pyroscope", "Grafana"],
            "res": [
              ["OpenTelemetry docs", "https://opentelemetry.io/docs/"],
              ["Grafana", "https://grafana.com/docs/"]
            ],
            "tip": "Staging lies. Data volume, traffic shape, and cache warmth in production are different animals; profile where users actually are."
          },
          {
            "t": "Performance Budgets",
            "d": "Speed is a feature with a contract: write the numbers down before someone breaks them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What a backend perf budget looks like: p95 < 200ms, error rate < 0.1%, 500 RPS per instance",
              "Budgets as CI gates: fail the build when an endpoint regresses",
              "Negotiating budgets with product: faster costs engineering time, slower costs users"
            ],
            "do": [
              "Write budgets for 3 endpoints: latency p95, throughput target, error ceiling",
              "Add a load-test step to CI that fails when the budget is violated",
              "Present one budget to a teammate and defend the numbers"
            ],
            "tools": ["k6", "GitHub Actions", "Grafana"],
            "res": [
              ["k6 thresholds", "https://k6.io/docs/using-k6/thresholds/"],
              ["Web.dev performance budgets", "https://web.dev/performance-budgets-101/"]
            ],
            "tip": "Budgets without enforcement are wishes. If CI cannot fail on a regression, you do not have a budget."
          }
        ]
      },
      {
        "t": "Profiling and Hot Paths",
        "d": "Find the exact line that is slow instead of rewriting the whole codebase.",
        "lv": 2,
        "children": [
          {
            "t": "CPU Profiling and Flame Graphs",
            "d": "See where every millisecond goes, function by function.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Sampling vs instrumentation: why sampling profilers are cheap enough for production",
              "Reading a flame graph: width = time share, depth = call stack, plateaus = suspects",
              "On-CPU vs off-CPU: a function can be slow because it waits, not because it computes"
            ],
            "do": [
              "Profile a slow endpoint with your language's sampler (py-spy, 0x, async-profiler)",
              "Render the output as a flame graph and name the top 3 widest frames",
              "Distinguish a compute-bound plateau from an I/O wait in the graph"
            ],
            "tools": ["py-spy", "0x", "async-profiler", "Clinic.js", "FlameGraph"],
            "res": [
              ["Brendan Gregg's flame graphs", "https://www.brendangregg.com/flamegraphs.html"],
              ["py-spy", "https://github.com/benfred/py-spy"]
            ],
            "tip": "The widest frame in a flame graph is where the money is. Beginners read the tallest stack; seniors read the widest plateau."
          },
          {
            "t": "Memory Profiling and Leaks",
            "d": "Slow servers are often just servers running out of memory politely.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Heap snapshots vs allocation tracking: snapshots show what is alive, tracking shows what is wasteful",
              "Classic leaks: unbounded caches, forgotten listeners, ever-growing arrays in long-lived processes",
              "Memory pressure symptoms: rising p99, GC thrash, and the OOM killer's visit"
            ],
            "do": [
              "Take two heap snapshots of a running service an hour apart and diff them",
              "Deliberately write a leaking endpoint, then find it with the profiler",
              "Set a memory alert threshold based on real RSS growth, not vibes"
            ],
            "tools": ["Clinic.js Doctor", "memlab", "Valgrind", "Go pprof"],
            "res": [
              ["Clinic.js", "https://clinicjs.org/"],
              ["Node.js memory diagnostics", "https://nodejs.org/en/docs/guides/diagnostics/"]
            ],
            "tip": "A leak that costs 1MB per request is invisible in tests and fatal in a week. Watch growth over time, not snapshots."
          },
          {
            "t": "Event Loop and Async Stalls",
            "d": "One blocking call can freeze every user on an async server.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "How the event loop works: one thread, many tasks, zero tolerance for blocking",
              "Measuring loop lag: the canary that tells you sync work is sneaking into hot paths",
              "Fixes: worker threads/pools for CPU work, streaming for big payloads, offloading crypto and compression"
            ],
            "do": [
              "Instrument event-loop lag on a Node/Python-async service and graph it",
              "Add a deliberate blocking call (sleep/sync read) and watch p99 explode",
              "Move one CPU-heavy task to a worker pool and re-measure loop lag"
            ],
            "tools": ["Node.js", "event-loop-lag", "BullMQ"],
            "res": [
              ["Node.js event loop guide", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"],
              ["BullMQ", "https://bullmq.io/"]
            ],
            "tip": "JSON.parse on a 50MB payload inside a request handler is a blocking call wearing a costume. It will take the whole loop down."
          },
          {
            "t": "Distributed Tracing",
            "d": "Follow one request across five services and find which hop is lying.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Spans, traces, and context propagation: the vocabulary of following requests",
              "Sampling strategies: head-based vs tail-based, and keeping the interesting traces",
              "Reading a waterfall: serial waits, parallel fan-outs, and the critical path"
            ],
            "do": [
              "Instrument 2 services with OpenTelemetry and view a trace in Jaeger",
              "Add a custom span around your slowest DB call and re-run",
              "Identify the critical path of a checkout flow from a real trace"
            ],
            "tools": ["OpenTelemetry", "Jaeger", "Tempo", "Zipkin"],
            "res": [
              ["OpenTelemetry docs", "https://opentelemetry.io/docs/"],
              ["Jaeger", "https://github.com/jaegertracing/jaeger"]
            ],
            "tip": "Trace IDs must flow through queues and cron jobs too. A trace that dies at the queue boundary is a mystery with no ending."
          },
          {
            "t": "Lock Contention and Concurrency",
            "d": "Threads that fight over the same lock run slower than one thread alone.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Lock contention profiling: finding where threads queue instead of work",
              "Designing away locks: partitioning, lock striping, lock-free structures, actor models",
              "Deadlocks and livelocks: how they happen and how to detect them in a dump"
            ],
            "do": [
              "Profile thread states on a contended service and quantify lock wait time",
              "Reproduce a deadlock in a toy program and analyze the thread dump",
              "Refactor one shared counter to a lock-free or partitioned design and benchmark it"
            ],
            "tools": ["async-profiler", "JMC", "Go race detector"],
            "res": [
              ["Java Mission Control", "https://openjdk.org/projects/jmc/"],
              ["Go data race detector", "https://go.dev/doc/articles/race_detector"]
            ],
            "tip": "Adding threads to a contended lock makes it slower, not faster. Measure contention before scaling concurrency."
          },
          {
            "t": "GC Tuning and Allocation Pressure",
            "d": "Garbage collectors are fast until your code makes them angry.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "How generational GC works: young gen is cheap, old gen pauses are the enemy",
              "Allocation pressure: churning short-lived objects forces frequent collections",
              "Reading GC logs: pause times, promotion rates, and when tuning actually helps"
            ],
            "do": [
              "Enable GC logging on a JVM/Go/.NET service and graph pause times",
              "Reduce allocation in one hot path (object reuse, buffers) and measure GC time delta",
              "Tune one GC flag, benchmark, and justify keeping or reverting it"
            ],
            "tools": ["GC logs", "JFR", "Go pprof", "dotTrace"],
            "res": [
              ["Java GC tuning guide", "https://docs.oracle.com/en/java/javase/17/gctuning/"],
              ["Go GC guide", "https://go.dev/doc/gc-guide"]
            ],
            "tip": "GC flags are the last resort, not the first. Cut allocation first; most 'GC problems' are really allocation problems."
          }
        ]
      },
      {
        "t": "Database Performance",
        "d": "Most slow backends are slow databases. This is where the biggest wins hide.",
        "lv": 2,
        "children": [
          {
            "t": "Killing the N+1 Problem",
            "d": "One query per row is the most common performance bug ever written.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What N+1 looks like: 1 query for the list, then N queries for each item's relation",
              "Detection: query counting per request, slow-query logs, ORM query inspectors",
              "Fixes: eager loading, joins, batched loaders (DataLoader pattern)"
            ],
            "do": [
              "Enable query logging and count queries for one list endpoint",
              "Fix it with eager loading or a DataLoader-style batcher",
              "Re-count queries and record the latency difference"
            ],
            "tools": ["Django Debug Toolbar", "SQLAlchemy echo", "DataLoader"],
            "res": [
              ["DataLoader", "https://github.com/graphql/dataloader"],
              ["Use the Index, Luke!", "https://use-the-index-luke.com/"]
            ],
            "tip": "N+1 hides behind clean ORM code. If you never count queries per request, you are probably shipping N+1s right now."
          },
          {
            "t": "Reading Query Plans with EXPLAIN",
            "d": "EXPLAIN ANALYZE shows you what the database actually did, not what you hoped.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Seq scan vs index scan vs index-only scan: what each costs and when each is chosen",
              "Nested loop vs hash vs merge joins: the shapes of join plans",
              "Rows estimated vs actual: the telltale sign of stale statistics"
            ],
            "do": [
              "Run EXPLAIN ANALYZE on your 3 slowest queries and annotate each node",
              "Find one sequential scan on a large table and fix it",
              "Compare estimated vs actual rows and run ANALYZE where they diverge"
            ],
            "tools": ["psql", "pgAdmin", "depesz EXPLAIN visualizer"],
            "res": [
              ["PostgreSQL EXPLAIN docs", "https://www.postgresql.org/docs/current/using-explain.html"],
              ["depesz EXPLAIN", "https://explain.depesz.com/"]
            ],
            "tip": "Never trust EXPLAIN without ANALYZE. The plan without execution is a hypothesis; with ANALYZE it is a confession."
          },
          {
            "t": "Indexing Strategy",
            "d": "The right index turns minutes into milliseconds; the wrong ones just slow your writes.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "B-tree basics: what an index actually stores and why order matters",
              "Composite indexes and the leftmost-prefix rule: (a,b) serves a, not b alone",
              "Index costs: slower writes, bigger storage, and when partial/expression indexes pay off"
            ],
            "do": [
              "Index a slow WHERE/ORDER BY query and measure the before/after",
              "Use pg_stat_user_indexes to find indexes that are never used, then drop one",
              "Build a composite index and prove the column order matters with EXPLAIN"
            ],
            "tools": ["PostgreSQL", "pg_stat_statements"],
            "res": [
              ["Use the Index, Luke!", "https://use-the-index-luke.com/"],
              ["PostgreSQL index docs", "https://www.postgresql.org/docs/current/indexes.html"]
            ],
            "tip": "More indexes is not better. Every index taxes every write; unused indexes are pure cost with zero benefit."
          },
          {
            "t": "Connection Pooling",
            "d": "Opening a fresh database connection per request is a hidden tax on everything.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Why connections are expensive: TCP + TLS + auth handshake on every new one",
              "Pool sizing math: pool = ((core_count * 2) + spindles) is a starting guess, not gospel",
              "Pooler tiers: app-level pools vs PgBouncer for thousands of connections"
            ],
            "do": [
              "Benchmark one endpoint with and without a connection pool",
              "Tune max pool size up and down and graph the latency curve",
              "Set up PgBouncer in transaction mode for a toy app"
            ],
            "tools": ["PgBouncer", "HikariCP", "pgxpool", "SQLAlchemy pool"],
            "res": [
              ["PgBouncer", "https://www.pgbouncer.org/"],
              ["HikariCP", "https://github.com/brettwooldridge/HikariCP"]
            ],
            "tip": "Oversized pools are worse than undersized ones. A pool of 200 fighting over 8 cores just queues work with extra steps."
          },
          {
            "t": "Pagination and Result Limiting",
            "d": "OFFSET 1000000 is how you turn a list endpoint into a denial of service.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Why OFFSET degrades: the database still reads and discards every skipped row",
              "Keyset (cursor) pagination: WHERE id > last_seen, stable and constant-time",
              "Defensive defaults: always LIMIT, cap page sizes, stream huge exports"
            ],
            "do": [
              "Benchmark OFFSET 100000 vs keyset pagination on a large table",
              "Convert one list endpoint to cursor pagination",
              "Add a hard LIMIT and max page size to every list endpoint in a service"
            ],
            "tools": ["PostgreSQL", "any ORM"],
            "res": [
              ["Keyset pagination", "https://use-the-index-luke.com/no-offset"],
              ["PostgreSQL LIMIT docs", "https://www.postgresql.org/docs/current/queries-limit.html"]
            ],
            "tip": "If your API allows unbounded page sizes, attackers do not need to hack you; they just ask for everything."
          },
          {
            "t": "Denormalization and Materialized Views",
            "d": "Sometimes the fastest query is the one you precomputed yesterday.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "When normalization hurts: expensive joins on read-heavy dashboards and reports",
              "Materialized views: precomputed results with explicit refresh strategies",
              "Trade-off ledger: faster reads vs stale data vs write complexity"
            ],
            "do": [
              "Identify one aggregation query that runs on every dashboard load",
              "Create a materialized view for it and benchmark the dashboard",
              "Implement a refresh strategy (scheduled or trigger-based) and document staleness"
            ],
            "tools": ["PostgreSQL", "Redis"],
            "res": [
              ["PostgreSQL materialized views", "https://www.postgresql.org/docs/current/rules-materializedviews.html"],
              ["Martin Fowler on denormalization", "https://martinfowler.com/"]
            ],
            "tip": "Denormalize from evidence, not instinct. A slow query justifies it; a hunch does not, because stale data is a bug factory."
          },
          {
            "t": "Read Replicas, Partitioning, and Sharding",
            "d": "When one database cannot keep up, split the work, not just the hope.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Read replicas: routing reads away from the primary and living with replication lag",
              "Partitioning: splitting one table by range/list/hash so queries scan less",
              "Sharding: splitting the whole dataset across databases, and why the shard key is destiny"
            ],
            "do": [
              "Set up one read replica and route analytics reads to it",
              "Partition a large table by month and compare query plans before/after",
              "Design a shard key for a multi-tenant app and defend it against hot-spot scenarios"
            ],
            "tools": ["PostgreSQL", "Citus", "Vitess", "pg_partman"],
            "res": [
              ["Citus", "https://github.com/citusdata/citus"],
              ["Vitess", "https://vitess.io/"]
            ],
            "tip": "Sharding is a one-way door. A bad shard key (timestamps, anyone?) creates hot shards that no amount of hardware fixes."
          }
        ]
      },
      {
        "t": "Caching Architecture",
        "d": "The fastest I/O is the I/O you never do. Cache deliberately, invalidate carefully.",
        "lv": 2,
        "children": [
          {
            "t": "Cache Patterns: Aside, Through, Write-Behind",
            "d": "Who writes the cache, and when? Pick wrong and you serve lies.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Cache-aside: app checks cache, falls back to DB, populates cache; simple, stale-prone",
              "Read/write-through: cache sits in front of DB; consistent but every write pays cache cost",
              "Write-behind: fast writes, async DB sync; great throughput, real data-loss risk"
            ],
            "do": [
              "Implement cache-aside for one read-heavy endpoint with a TTL",
              "Diagram the write path of your app under each pattern",
              "Simulate a cache failure and verify the app still serves (degraded) correctly"
            ],
            "tools": ["Redis", "Memcached"],
            "res": [
              ["Redis docs", "https://redis.io/docs/latest/"],
              ["Caching patterns (AWS)", "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-for-using-redis/caching-patterns.html"]
            ],
            "tip": "Cache-aside is the default for a reason, but every pattern needs an answer to: what happens when the cache is empty or wrong?"
          },
          {
            "t": "Redis as a Cache",
            "d": "Redis is simple until you need it to be fast, big, and correct at once.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Data structures beyond strings: hashes, sets, sorted sets, and when each wins",
              "Eviction policies: LRU vs LFU vs TTL, and sizing memory so eviction rarely bites",
              "Persistence vs pure cache: RDB/AOF trade-offs and why caches usually skip persistence"
            ],
            "do": [
              "Build a leaderboard with sorted sets and a session store with hashes + TTL",
              "Benchmark pipelining vs individual commands for a batch write",
              "Configure maxmemory and an eviction policy, then watch evictions under load"
            ],
            "tools": ["Redis", "redis-cli", "RedisInsight"],
            "res": [
              ["Redis docs", "https://redis.io/docs/latest/"],
              ["Redis data types intro", "https://redis.io/docs/latest/develop/data-types/"]
            ],
            "tip": "Using Redis as a string-only key-value store is leaving half the engine on the table. Sorted sets alone solve entire classes of problems."
          },
          {
            "t": "HTTP Caching and CDNs",
            "d": "Let browsers and edge servers answer before your origin even wakes up.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Cache-Control anatomy: max-age, s-maxage, no-cache vs no-store, must-revalidate",
              "ETags and conditional requests: 304 responses that cost almost nothing",
              "CDN caching: edge PoPs, cache keys, and purging strategies"
            ],
            "do": [
              "Set Cache-Control headers on static assets with hashed filenames",
              "Implement ETag-based conditional responses on one API endpoint",
              "Purge a CDN path and verify the edge re-fetches from origin"
            ],
            "tools": ["Cloudflare", "Fastly", "Varnish", "Nginx"],
            "res": [
              ["MDN HTTP caching", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"],
              ["Varnish", "https://varnish-cache.org/"]
            ],
            "tip": "no-cache does not mean 'do not cache'; it means 'revalidate every time'. Misreading that directive is a rite of passage."
          },
          {
            "t": "Cache Invalidation",
            "d": "The two hard problems: naming things, cache invalidation, and off-by-one errors.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "TTL vs explicit invalidation: when staleness is acceptable and when it is a bug",
              "Key design: versioned keys and namespaces that make invalidation a prefix delete",
              "Write-path invalidation: invalidating on write, not discovering staleness on read"
            ],
            "do": [
              "Design a key scheme for one domain with explicit invalidation rules",
              "Implement write-through invalidation for one entity and test the stale path",
              "Write the staleness SLA for each cached object in your app"
            ],
            "tools": ["Redis", "Memcached"],
            "res": [
              ["Redis key expiration", "https://redis.io/docs/latest/develop/use/keyspace/"],
              ["Cache invalidation patterns", "https://redis.io/docs/latest/develop/use/patterns/"]
            ],
            "tip": "Deleting cache keys on write feels safe until a write fails halfway. Make invalidation idempotent and audit the missed paths."
          },
          {
            "t": "Stampedes, Hot Keys, and TTL Jitter",
            "d": "A cache that expires everywhere at once is a DDoS you built yourself.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Cache stampede: 10k requests miss at once and all hit the DB; request coalescing as the fix",
              "Hot keys: one viral key saturates one Redis node; replication and local caches help",
              "TTL jitter and probabilistic early refresh: spreading expiry so misses never align"
            ],
            "do": [
              "Simulate a stampede on an expired key and watch DB connections spike",
              "Implement single-flight request coalescing for cache misses",
              "Add jitter to TTLs and probabilistic background refresh to one hot endpoint"
            ],
            "tools": ["Redis", "singleflight", "groupcache"],
            "res": [
              ["Redis docs", "https://redis.io/docs/latest/"],
              ["Facebook's memcache scale lessons", "https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf"]
            ],
            "tip": "Identical TTLs on related keys are a time bomb. Jitter is cheap insurance against your own traffic."
          }
        ]
      },
      {
        "t": "Async Work and API Design",
        "d": "Do less per request, do it in parallel, and never make the user wait for work they cannot see.",
        "lv": 2,
        "children": [
          {
            "t": "Background Jobs and Queues",
            "d": "If the user does not need the result now, it does not belong in the request.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "What belongs in a queue: emails, thumbnails, webhooks, reports, anything slow or flaky",
              "At-least-once delivery: idempotent workers are not optional, they are the contract",
              "Retries, dead-letter queues, and backoff: designing for the day the worker fails"
            ],
            "do": [
              "Move one slow synchronous task (email, PDF) into a queue worker",
              "Make the worker idempotent and prove it by delivering the same job twice",
              "Configure retries with exponential backoff and a dead-letter queue"
            ],
            "tools": ["BullMQ", "Celery", "Sidekiq", "RabbitMQ", "SQS"],
            "res": [
              ["BullMQ", "https://bullmq.io/"],
              ["Celery", "https://docs.celeryq.dev/"]
            ],
            "tip": "A queue without idempotent workers is a duplicate-email machine. Assume every job runs twice and design for it."
          },
          {
            "t": "Batching and Parallel I/O",
            "d": "Ten serial 50ms calls take 500ms. In parallel they take 50ms.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Fan-out/fan-in: launching independent I/O together and gathering results",
              "Batching: one query with 100 ids instead of 100 queries with 1 id",
              "Bounded concurrency: parallelism with a semaphore so you do not melt the downstream"
            ],
            "do": [
              "Find 3 serial awaits in one handler and convert them to parallel execution",
              "Batch one loop of queries into a single IN query and benchmark it",
              "Add a concurrency limit to a fan-out and find the sweet spot"
            ],
            "tools": ["Promise.all", "asyncio.gather", "errgroup", "p-limit"],
            "res": [
              ["MDN Promise.all", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"],
              ["Go errgroup", "https://pkg.go.dev/golang.org/x/sync/errgroup"]
            ],
            "tip": "Unbounded parallelism is just a fancier outage. A semaphore with a tuned limit beats Promise.all on a thousand calls."
          },
          {
            "t": "Compression and Payload Design",
            "d": "Smaller responses are faster responses, and most payloads are embarrassingly compressible.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "gzip vs Brotli vs zstd: ratios, speeds, and browser support realities",
              "Where compression lives: reverse proxy, CDN, or app, and double-compression pitfalls",
              "Payload diet: dropping unused fields, pagination, and field selection (GraphQL-style sparse responses)"
            ],
            "do": [
              "Enable Brotli/gzip on your server and compare response sizes",
              "Audit one endpoint's JSON and remove fields no client uses",
              "Measure TTFB + download time before and after compression"
            ],
            "tools": ["Nginx", "Brotli", "zstd"],
            "res": [
              ["Nginx gzip docs", "https://nginx.org/en/docs/http/ngx_http_gzip_module.html"],
              ["Brotli", "https://github.com/google/brotli"]
            ],
            "tip": "Compressing already-tiny responses wastes CPU for bytes nobody notices. Set a sensible minimum size threshold."
          },
          {
            "t": "Serialization: JSON vs Protobuf",
            "d": "JSON is convenient. Binary formats are fast. Know when the trade is worth it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Where JSON costs: parsing, large numbers, repeated field names, no schema",
              "Protobuf/MessagePack: schema-driven, compact, fast; and the tooling tax they charge",
              "When it matters: internal service chatter and huge payloads, not your public REST API"
            ],
            "do": [
              "Benchmark JSON vs Protobuf serialization for one of your real payloads",
              "Define a .proto schema for one internal endpoint and wire it up",
              "Decide, in writing, which of your APIs stay JSON and why"
            ],
            "tools": ["Protocol Buffers", "MessagePack", "gRPC"],
            "res": [
              ["Protocol Buffers", "https://protobuf.dev/"],
              ["gRPC", "https://grpc.io/docs/"]
            ],
            "tip": "Switching your public API to Protobuf for a 5% win is not engineering, it is resume-driven development. Measure the actual payload first."
          },
          {
            "t": "Rate Limiting and Backpressure",
            "d": "Saying 'no' fast beats saying 'yes' slowly to everyone.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Algorithms: token bucket, leaky bucket, fixed vs sliding window, and their fairness trade-offs",
              "Where limits live: edge, gateway, or app; per-IP, per-key, per-user",
              "Backpressure: queues with bounds, load shedding, and degrading gracefully instead of dying"
            ],
            "do": [
              "Implement token-bucket rate limiting on one endpoint with Redis",
              "Load-test past the limit and verify 429s instead of timeouts",
              "Add a bounded queue with load shedding to one ingestion path"
            ],
            "tools": ["Redis", "Nginx limit_req", "Envoy", "resilience4j"],
            "res": [
              ["Nginx rate limiting", "https://nginx.org/en/docs/http/ngx_http_limit_req_module.html"],
              ["resilience4j", "https://resilience4j.readme.io/"]
            ],
            "tip": "A rate limiter that returns 500s under attack is decoration. The whole point is cheap, fast rejection before expensive work starts."
          },
          {
            "t": "Timeouts, Retries, and Circuit Breakers",
            "d": "Every dependency will fail. The question is whether it takes you down with it.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Timeouts everywhere: no network call without a deadline, and deadlines shorter than your SLO",
              "Retry budgets: exponential backoff with jitter, and why retry storms kill",
              "Circuit breakers: fail fast when a dependency is down, half-open probes for recovery"
            ],
            "do": [
              "Add timeouts to every outbound call in one service and load-test a slow dependency",
              "Implement retries with jitter and cap the total retry budget",
              "Wrap one flaky dependency in a circuit breaker and simulate its outage"
            ],
            "tools": ["resilience4j", "Polly", "Envoy", "tenacity"],
            "res": [
              ["resilience4j", "https://resilience4j.readme.io/"],
              ["Polly", "https://github.com/App-vNext/Polly"]
            ],
            "tip": "Retries without jitter synchronize into thundering herds. Jitter is not a nice-to-have; it is what keeps retries from becoming the outage."
          }
        ]
      },
      {
        "t": "Load Testing and Capacity",
        "d": "Prove it under pressure, in CI, before your users do it for you.",
        "lv": 2,
        "children": [
          {
            "t": "Load vs Stress vs Soak vs Spike",
            "d": "Four different tests, four different questions. Running only one is half an answer.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Load: expected traffic, does it behave? Stress: beyond capacity, where does it break?",
              "Soak: hours of steady load hunting memory leaks and connection drift",
              "Spike: 0 to 10x in seconds, testing autoscaling and cold starts"
            ],
            "do": [
              "Write a one-paragraph plan naming which test type answers which risk for your app",
              "Run a 10-minute soak test and graph memory over time",
              "Run a spike test and record how long recovery takes"
            ],
            "tools": ["k6", "Gatling", "Locust"],
            "res": [
              ["k6 test types", "https://k6.io/docs/testing-guides/test-types/"],
              ["Gatling", "https://gatling.io/"]
            ],
            "tip": "A passing load test and a failing soak test is the classic combo: fine for minutes, dead by morning. Always soak stateful services."
          },
          {
            "t": "Writing Load Tests with k6",
            "d": "Realistic virtual users, real assertions, runnable in CI.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "VU scripting: stages, ramping, and modeling real user journeys instead of hammering one URL",
              "Thresholds and checks: asserting on p95 and error rates, not just 'did it run'",
              "Test data and auth: seeding realistic data so the test exercises real code paths"
            ],
            "do": [
              "Script a 3-step user journey (login, browse, checkout) as a k6 test",
              "Add thresholds: p95 < 500ms, error rate < 1%, and watch it fail honestly",
              "Run the test against staging and save the output as your performance record"
            ],
            "tools": ["k6", "Grafana Cloud k6"],
            "res": [
              ["k6 docs", "https://k6.io/docs/"],
              ["k6 examples", "https://k6.io/docs/examples/"]
            ],
            "tip": "Hammering GET /health with 1000 VUs proves nothing. If the script does not look like a user, the numbers do not mean anything."
          },
          {
            "t": "Finding Bottlenecks from Test Results",
            "d": "The load test found the wall. Now interrogate it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Reading the saturation signature: flat throughput + climbing latency = you found it",
              "Correlating: aligning k6 output with CPU, DB, and GC metrics on the same timeline",
              "The top-5 bottleneck lineup: DB, locks, GC, event loop, downstream dependency"
            ],
            "do": [
              "Run a ramp test until throughput plateaus and capture all system metrics",
              "Overlay app metrics on the k6 timeline and name the saturating resource",
              "Fix one bottleneck, re-run, and document the new ceiling"
            ],
            "tools": ["k6", "Grafana", "Prometheus"],
            "res": [
              ["k6 results analysis", "https://k6.io/docs/results-output/"],
              ["Brendan Gregg's USE method", "https://www.brendangregg.com/usemethod.html"]
            ],
            "tip": "Fix one bottleneck at a time and re-test. Fixing three things at once teaches you nothing about which one mattered."
          },
          {
            "t": "Capacity Planning",
            "d": "How many servers for Black Friday? Answer with math, not hope.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "From traffic forecast to instances: RPS per instance x headroom factor = fleet size",
              "Headroom rules: why running above 60-70% sustained utilization is living dangerously",
              "Cost vs risk: the business conversation behind the instance count"
            ],
            "do": [
              "Measure max healthy RPS per instance for your app from load tests",
              "Build a capacity model for 2x and 5x traffic with headroom included",
              "Write the scaling runbook: who does what when traffic doubles tonight"
            ],
            "tools": ["k6", "spreadsheets", "Grafana"],
            "res": [
              ["AWS capacity planning", "https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-pillar/welcome.html"],
              ["The USE method", "https://www.brendangregg.com/usemethod.html"]
            ],
            "tip": "Capacity plans built on averages fail on peaks. Plan for p95 traffic shape, not the mean, or the plan is fiction."
          },
          {
            "t": "Chaos and Failure Testing",
            "d": "Break it on purpose on Tuesday so it does not break by surprise on Friday.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Chaos principles: steady-state hypothesis, blast radius control, automated rollback",
              "Common experiments: kill pods, add latency, partition networks, exhaust disk",
              "Game days: running failure drills with the team before the real thing"
            ],
            "do": [
              "Kill one instance mid-load-test and measure recovery time",
              "Inject 500ms latency into one dependency and verify timeouts hold",
              "Run a 30-minute game day with a written hypothesis and rollback plan"
            ],
            "tools": ["Chaos Mesh", "Litmus", "Toxiproxy", "Gremlin"],
            "res": [
              ["Chaos Mesh", "https://chaos-mesh.org/"],
              ["Toxiproxy", "https://github.com/Shopify/toxiproxy"]
            ],
            "tag": "opt",
            "tip": "Chaos without a hypothesis is vandalism. Write what you expect to happen first; the surprise is the lesson."
          }
        ]
      },
      {
        "t": "Scaling and Production Resilience",
        "d": "Architecture for the traffic you want, resilience for the failures you will get.",
        "lv": 3,
        "children": [
          {
            "t": "Horizontal Scaling and Load Balancing",
            "d": "More boxes, one address: the mechanics of spreading load.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Statelessness as a prerequisite: sessions, uploads, and local state that break scaling",
              "Load balancer algorithms: round-robin, least-connections, consistent hashing, and sticky sessions",
              "Health checks and draining: how bad instances leave the pool without dropping users"
            ],
            "do": [
              "Run 3 instances of an app behind Nginx/HAProxy and verify distribution",
              "Externalize session state to Redis and prove any instance can serve any user",
              "Kill one instance mid-traffic and measure dropped requests"
            ],
            "tools": ["Nginx", "HAProxy", "Envoy", "Redis"],
            "res": [
              ["HAProxy", "https://www.haproxy.org/"],
              ["Envoy", "https://www.envoyproxy.io/docs/"]
            ],
            "tip": "Sticky sessions are a scaling crutch. They feel easy until one instance holds all the active users and the 'balanced' load is a lie."
          },
          {
            "t": "Autoscaling and Stateless Design",
            "d": "Scale on signals, not on panic, and design so new instances are useful in seconds.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Scaling signals: CPU is a lagging indicator; queue depth and latency react faster",
              "Cold starts and warm-up: why new instances need warmup before taking full traffic",
              "Stateless design checklist: config from env, state in stores, logs to stdout"
            ],
            "do": [
              "Configure HPA/autoscaling on one deployment with a custom metric",
              "Spike-test it and measure time from signal to serving traffic",
              "Audit one service for local state and externalize what you find"
            ],
            "tools": ["Kubernetes HPA", "AWS Auto Scaling", "KEDA"],
            "res": [
              ["Kubernetes HPA", "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"],
              ["KEDA", "https://keda.sh/"]
            ],
            "tip": "Autoscaling that takes 5 minutes to help during a 3-minute spike is a press release, not a solution. Pre-warm for known peaks."
          },
          {
            "t": "SLOs, Alerting, and Perf Culture",
            "d": "Speed that nobody defends decays. Make performance a team habit, not a hero project.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "SLIs and SLOs: choosing indicators users feel, and error budgets that make trade-offs explicit",
              "Alerting on symptoms, not causes: page on SLO burn, not on CPU graphs",
              "Perf reviews: making latency a standing agenda item with owners and budgets"
            ],
            "do": [
              "Define one SLO with an error budget for a real service",
              "Build a burn-rate alert and test it with a synthetic regression",
              "Run a 30-minute perf review: budget status, regressions, next bottleneck"
            ],
            "tools": ["Grafana", "Prometheus", "PagerDuty", "SLO generator"],
            "res": [
              ["Google SRE book: SLOs", "https://sre.google/sre-book/service-level-objectives/"],
              ["Prometheus alerting", "https://prometheus.io/docs/alerting/latest/overview/"]
            ],
            "tip": "Alerting on every metric is alerting on nothing. If the page does not protect an SLO, it is noise that trains people to ignore pages."
          },
          {
            "t": "Capstone: Performance Audit of a Real API",
            "d": "Take a real API from 'feels slow' to measured, fixed, and proven. Your portfolio piece.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "The audit playbook: baseline, profile, prioritize by impact, fix, re-measure, document",
              "Telling the story: before/after numbers that convince skeptical stakeholders",
              "Leaving it better: budgets, CI gates, and dashboards so the wins stick"
            ],
            "do": [
              "Pick a real API, write the baseline report (p50/p95/p99, RPS, query counts)",
              "Fix the top 3 bottlenecks across DB, caching, and code",
              "Ship a final report with graphs, plus a load-test CI gate and dashboard"
            ],
            "tools": ["k6", "Grafana", "py-spy", "Redis", "PostgreSQL"],
            "res": [
              ["k6 docs", "https://k6.io/docs/"],
              ["Brendan Gregg's performance methodology", "https://www.brendangregg.com/methodology.html"]
            ],
            "badge": "PROJECT",
            "tip": "A 40% improvement nobody believes is worth less than a 15% one with a clean baseline, a flame graph, and a re-run. Evidence is the deliverable."
          }
        ]
      }
    ]
  }
});
