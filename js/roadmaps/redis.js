/* Atlas roadmap data: Redis (redis) */
ROADMAPS.push({
  "id": "redis",
  "title": "Redis",
  "icon": "📦",
  "color": "#ea580c",
  "desc": "The in-memory data-structure server: core data types, caching patterns, streams and pub/sub, transactions and Lua, persistence, replication, and clustering in production.",
  "kind": "skill",
  "root": {
    "t": "Redis Engineering",
    "d": "From your first SET to a clustered production deployment: data structures, caching, messaging, persistence, and scaling.",
    "children": [
      {
        "t": "Redis from Zero",
        "d": "What Redis is, why it is fast, and how to run it in minutes.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Redis?",
            "d": "An in-memory data structure store — and why 'just a cache' sells it short.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "In-memory data structure server: keys mapped to rich types, not just strings",
              "Single-threaded command execution and why it is a feature",
              "Redis 8: AGPL-licensed again, with JSON, search, and vector sets built in"
            ],
            "do": [
              "Read the Redis 8 release notes and list what moved from Redis Stack into core",
              "Name five use cases beyond caching where Redis fits",
              "Compare Redis with Memcached and note what the data structures buy you"
            ],
            "tools": ["redis.io"],
            "res": [
              ["Redis", "https://redis.io/"]
            ],
            "tip": "Thinking of Redis as 'a cache' makes you miss half its value: queues, leaderboards, rate limiters, and real-time analytics all live here."
          },
          {
            "t": "Installing & Running Redis",
            "d": "Get a server running with Docker and know the deployment shapes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Running Redis with Docker vs package managers",
              "redis-server and the redis.conf that controls everything",
              "Managed options: Redis Cloud, ElastiCache, and the Valkey alternative"
            ],
            "do": [
              "Run `docker run --name redis -p 6379:6379 -d redis:8`",
              "Start redis-server with a custom config file and port",
              "Stop the container without persistence and observe what happens to data"
            ],
            "tools": ["Docker", "redis-server"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Valkey is the community fork born from the licensing saga — protocol-compatible with Redis. Know it exists; the commands you learn transfer."
          },
          {
            "t": "redis-cli & Your First Commands",
            "d": "The CLI is the fastest way to build Redis intuition.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Connecting with redis-cli and basic command syntax",
              "SET, GET, DEL, EXISTS: the verbs you will use daily",
              "Reading replies: status, integer, bulk string, and error types"
            ],
            "do": [
              "Connect and run SET/GET/DEL on ten keys",
              "Use redis-cli --raw and --csv to see output formats",
              "Pipe a file of commands into redis-cli with --pipe mode"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Every Redis command is documented with time complexity. O(N) on a million-element key in production is how outages start — check before you run."
          },
          {
            "t": "Keys, TTL & Naming Conventions",
            "d": "Keys are your schema — name them well and expire them deliberately.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Key naming: object-type:id:field patterns and namespaces",
              "EXPIRE, TTL, PEXPIRE: time-to-live mechanics",
              "What happens on expiry: lazy and active expiration"
            ],
            "do": [
              "Design a key scheme for users, sessions, and carts",
              "Set keys with EX and watch TTL count down",
              "Inspect expired-key behavior under memory pressure"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Keys without TTL in a cache are a memory leak with extra steps. Default every cache key to an expiry; remove it only deliberately."
          },
          {
            "t": "When to Choose Redis (and When Not To)",
            "d": "Redis is the right answer often — know the cases where it is not.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Sweet spots: caching, sessions, real-time counters, queues, pub/sub",
              "When not to: primary system of record for critical data, complex queries, huge datasets",
              "Redis vs a database vs a message broker: the honest boundaries"
            ],
            "do": [
              "Map three features of an app you know to Redis or 'not Redis' with reasons",
              "Identify what you would lose using Redis as the sole datastore"
            ],
            "tools": [],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Redis can persist, but persistence is not the same as being a database. If losing the last second of writes is unacceptable, Redis should not be your only copy."
          }
        ]
      },
      {
        "t": "Core Data Types",
        "d": "Strings, hashes, lists, sets, sorted sets — the vocabulary of Redis thinking.",
        "lv": 1,
        "children": [
          {
            "t": "Strings: Counters, Flags & Caching",
            "d": "The simplest type powers caching, counters, and atomic increments.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "SET, GET, MSET, MGET, GETDEL and expiry variants (SET EX/NX)",
              "INCR/DECR: atomic counters without race conditions",
              "APPEND, STRLEN, GETRANGE for string surgery"
            ],
            "do": [
              "Build a page-view counter with INCR under concurrent load",
              "Cache an API response with SET ... EX and serve it back",
              "Use SET NX as a simple lock and observe the race it prevents"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "INCR on a missing key starts at 1 — no initialization needed. Counters in Redis are one command, not read-modify-write."
          },
          {
            "t": "Hashes: Objects Without the Overhead",
            "d": "Store objects field-by-field and fetch only the fields you need.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "HSET, HGET, HGETALL, HDEL, HEXISTS, HINCRBY",
              "Hashes vs serialized JSON strings: field-level access wins",
              "Memory optimization with small hashes (listpack encoding)"
            ],
            "do": [
              "Model a user profile as a hash and update one field",
              "Compare HGETALL of a hash vs GET of a JSON string for partial reads",
              "Increment a hash field atomically with HINCRBY"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "HGETALL on a hash with thousands of fields blocks and floods. Fetch specific fields with HMGET when hashes get big."
          },
          {
            "t": "Lists: Queues & Timelines",
            "d": "Ordered sequences for queues, stacks, and feeds.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "LPUSH/RPUSH, LPOP/RPOP, LRANGE, LLEN",
              "Blocking pops (BLPOP/BRPOP) for real work queues",
              "LPUSH + LTRIM for capped timelines"
            ],
            "do": [
              "Build a task queue with RPUSH and a worker with BLPOP",
              "Maintain a capped activity feed with LPUSH + LTRIM",
              "Move items between lists atomically with LMOVE"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "LRANGE 0 -1 on a huge list in production blocks the server. Always bound your ranges — LRANGE 0 99, never the whole thing."
          },
          {
            "t": "Sets: Uniqueness & Relationships",
            "d": "Unordered unique members with set math built in.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "SADD, SREM, SMEMBERS, SISMEMBER, SCARD",
              "SINTER, SUNION, SDIFF: set operations in one command",
              "Modeling tags, followers, and unique visitors"
            ],
            "do": [
              "Model article tags and find articles sharing tags with SINTER",
              "Compute mutual follows with SINTER on two follower sets",
              "Use SISMEMBER for O(1) membership checks"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "SMEMBERS on a million-member set blocks everything. Use SSCAN to iterate, or keep sets small enough to stay fast."
          },
          {
            "t": "Sorted Sets: Leaderboards & Rankings",
            "d": "The most powerful type: unique members ordered by score.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "ZADD, ZRANGE, ZRANK, ZSCORE, ZINCRBY, ZREMRANGEBYRANK",
              "Scores as timestamps, priorities, or ratings",
              "Range queries by score and by rank"
            ],
            "do": [
              "Build a game leaderboard with ZADD and ZRANGE ... REV",
              "Implement a time-ordered feed using timestamps as scores",
              "Paginate rankings with ZRANGEBYSCORE"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Equal scores sort lexicographically by member — design member names (or composite scores) so ties break the way you want."
          },
          {
            "t": "Key Expiry Done Right",
            "d": "TTL as a design tool: sessions, rate limits, and cache freshness.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "SET with EX/PX vs separate EXPIRE calls",
              "PERSIST to remove expiry; TTL/PTTL to inspect it",
              "Expiry in replication and cluster: what replicas do"
            ],
            "do": [
              "Build expiring sessions with SET ... EX",
              "Implement a sliding session with GETEX",
              "Watch keyspace notifications fire on expiry"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Expiry is approximate — keys can linger past their TTL until accessed or swept. Never use expiry for security-critical invalidation."
          },
          {
            "t": "Choosing the Right Type",
            "d": "Given a problem, reach for the right structure on instinct.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Mapping requirements (ordering, uniqueness, field access) to types",
              "When a hash beats a JSON string and when it does not",
              "Memory cost intuition per type"
            ],
            "do": [
              "Take five features (cart, feed, leaderboard, session, tags) and pick types with reasons",
              "Estimate memory for each with DEBUG OBJECT or MEMORY USAGE"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "If you are unsure between two types, prototype both and measure with MEMORY USAGE. Guessing about Redis memory is consistently wrong."
          },
          {
            "t": "Bitmaps & HyperLogLog",
            "d": "Count and track at massive scale with tiny memory footprints.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Bitmaps: SETBIT/GETBIT/BITCOUNT for boolean-per-user analytics",
              "HyperLogLog: PFADD/PFCOUNT for cardinality with 12KB memory",
              "The accuracy trade-off: when approximate is fine"
            ],
            "do": [
              "Track daily active users with a bitmap per day and BITOP across days",
              "Count unique visitors with HyperLogLog and compare against a set",
              "Measure the memory difference between the two approaches"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "HyperLogLog answers 'how many unique' in 12KB with ~0.8% error. If you need exact counts, you need a set — and its full memory cost."
          }
        ]
      },
      {
        "t": "Working with Redis Like a Pro",
        "d": "Atomicity, pipelining, and safe key handling — the habits that keep production fast.",
        "lv": 2,
        "children": [
          {
            "t": "Atomicity: Why Single-Threaded Is a Feature",
            "d": "Every command is atomic — design around that guarantee.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Single-threaded execution: no interleaving mid-command",
              "Which operations are atomic and which need MULTI or Lua",
              "Race conditions that atomicity eliminates for free"
            ],
            "do": [
              "Race two clients incrementing a counter and verify no lost updates",
              "Find a check-then-set in your code and replace it with SET NX"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Atomicity covers single commands, not your multi-command logic. The moment you read, decide, then write, you need transactions or Lua."
          },
          {
            "t": "Pipelining & Batch Operations",
            "d": "Cut round trips: send many commands, read many replies.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Pipelining: batching commands without waiting for replies",
              "MSET/MGET for multi-key batch reads and writes",
              "When pipelining helps (and its atomicity limits)"
            ],
            "do": [
              "Write 10,000 keys one-by-one, then pipelined, and compare times",
              "Batch a multi-key read with MGET in your app's hot path"
            ],
            "tools": ["redis-cli", "redis-benchmark"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Pipelining is not a transaction — commands can partially fail. Use it for speed, MULTI/EXEC or Lua when you need all-or-nothing."
          },
          {
            "t": "SCAN vs KEYS: Never Block Production",
            "d": "Iterate the keyspace safely — KEYS is a development-only command.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why KEYS * blocks the server on large datasets",
              "SCAN with MATCH and COUNT: cursor-based iteration",
              "SCAN guarantees: may return duplicates, may miss keys under mutation"
            ],
            "do": [
              "Time KEYS * vs SCAN on 100k keys",
              "Write a cleanup script using SCAN with MATCH patterns"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "KEYS in production is an incident. Alias it to a warning in your runbook — every Redis outage postmortem mentions it eventually."
          },
          {
            "t": "Keyspace Notifications",
            "d": "Subscribe to key events: expiries, evictions, and command triggers.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Enabling notifications with notify-keyspace-events",
              "Subscribing to expired and evicted events",
              "Use cases and the at-most-once delivery caveat"
            ],
            "do": [
              "Enable Ex notifications and watch keys expire in real time",
              "Build an expiry-driven cleanup hook"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tag": "opt",
            "tip": "Keyspace notifications are fire-and-forget — subscribers that are down miss events. Never build exactly-once logic on them."
          },
          {
            "t": "RESP3 & Client Libraries",
            "d": "The protocol underneath and how clients use it well.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "RESP2 vs RESP3: types, push messages, and client-side caching hooks",
              "Connection pooling in clients (and why it matters)",
              "Choosing a client: redis-py, ioredis/node-redis, go-redis"
            ],
            "do": [
              "Connect with HELLO 3 and inspect typed replies",
              "Configure connection pooling in your language's client",
              "Benchmark pooled vs unpooled connections"
            ],
            "tools": ["redis-py", "ioredis", "go-redis"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tag": "opt",
            "tip": "One connection per request will exhaust Redis under load. Pool connections in every client — it is the cheapest performance win available."
          }
        ]
      },
      {
        "t": "Advanced Structures & Redis 8",
        "d": "Streams, JSON, geo, probabilistic structures, and vector search — the modern Redis toolkit.",
        "lv": 2,
        "children": [
          {
            "t": "Streams: Event Logs & Consumer Groups",
            "d": "Append-only logs with consumer groups — Redis as a lightweight Kafka.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "XADD, XREAD, XRANGE: writing and reading the log",
              "Consumer groups: XREADGROUP, XACK, and pending entries",
              "When streams fit (and when you need a real broker)"
            ],
            "do": [
              "Build an event log with XADD and read it with XREAD",
              "Create a consumer group with two workers and XACK processed messages",
              "Inspect pending entries with XPENDING after killing a worker"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Unacked messages sit in the pending list forever. Monitor XPENDING — a growing pending list means a dead or slow consumer."
          },
          {
            "t": "Pub/Sub Messaging",
            "d": "Fire-and-forget messaging for real-time fan-out.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "PUBLISH, SUBSCRIBE, pattern subscriptions with PSUBSCRIBE",
              "Fire-and-forget semantics: no persistence, no history",
              "Sharded pub/sub in cluster mode"
            ],
            "do": [
              "Build a chat-room fan-out with channels per room",
              "Subscribe with a pattern and watch multiple channels",
              "Disconnect a subscriber and prove the missed messages are gone"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Pub/sub delivers only to connected subscribers — there is no backlog. If a message must survive a disconnect, use streams instead."
          },
          {
            "t": "Geospatial Indexes",
            "d": "Location queries: nearby search with GEOADD and GEOSEARCH.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "GEOADD: storing longitude/latitude in a sorted set",
              "GEOSEARCH: radius and box queries with sorting",
              "Units, geohash precision, and realistic accuracy"
            ],
            "do": [
              "Index 10,000 venues and find all within 5km of a point",
              "Sort results by distance and limit to the nearest 20"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tag": "opt",
            "tip": "Geo indexes are sorted sets under the hood — you can ZRANGE them directly. But for real GIS workloads, PostGIS still wins."
          },
          {
            "t": "JSON Documents (Built into Core)",
            "d": "Store and query JSON natively — Redis Stack's JSON is now core.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "JSON.SET, JSON.GET, JSON.ARRAPPEND and JSONPath queries",
              "Indexing JSON fields with the query engine (FT.CREATE)",
              "When JSON beats hashes (nested docs) and when it loses"
            ],
            "do": [
              "Store nested documents and query with JSONPath filters",
              "Create a search index on JSON fields and run FT.SEARCH",
              "Update one nested field without rewriting the document"
            ],
            "tools": ["redis-cli", "RedisInsight"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "JSON documents are great for nested reads; hashes win for flat field-level updates. Pick by your access pattern, not by fashion."
          },
          {
            "t": "Probabilistic Structures: Bloom & Friends",
            "d": "Answer 'probably' questions in kilobytes: Bloom, Cuckoo, Top-K, Count-Min.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Bloom filters: membership tests with tunable false positives",
              "Cuckoo filters: deletable membership with different trade-offs",
              "Top-K and Count-Min Sketch for heavy hitters and frequency"
            ],
            "do": [
              "Build a Bloom filter for 1M usernames and measure the false-positive rate",
              "Track trending items with Top-K",
              "Compare memory against an equivalent set"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tag": "opt",
            "tip": "Bloom filters never give false negatives — 'not present' is always true. Size them for your acceptable false-positive rate up front."
          },
          {
            "t": "Vector Sets & Semantic Search",
            "d": "HNSW-powered vector similarity in Redis 8 — the AI use case, done simply.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "VADD and VSIM: the vector set commands",
              "HNSW indexing and quantization (int8) trade-offs",
              "Hybrid search: FT.HYBRID combining text and vector relevance"
            ],
            "do": [
              "Store embeddings with VADD and query with VSIM",
              "Filter vector search by metadata attributes",
              "Build a hybrid text-plus-vector search with FT.HYBRID"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Vector search quality lives or dies on the embeddings, not the database. Get a good embedding model first; the index is the easy part."
          }
        ]
      },
      {
        "t": "Transactions, Lua & Caching Patterns",
        "d": "Multi-command atomicity and the caching patterns that carry real applications.",
        "lv": 2,
        "children": [
          {
            "t": "Transactions: MULTI/EXEC & WATCH",
            "d": "Optimistic locking for read-modify-write without Lua.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "MULTI/EXEC: queue commands, execute atomically",
              "WATCH: optimistic locking with check-and-set semantics",
              "What transactions do NOT give you (no rollback on error)"
            ],
            "do": [
              "Implement a safe counter transfer with WATCH/MULTI/EXEC",
              "Race two clients and watch one abort and retry",
              "Compare with a Lua script doing the same work"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Redis transactions have no rollback — a failed command does not undo the others. Design for that, or use Lua where the logic must be atomic."
          },
          {
            "t": "Lua Scripting: Atomic Custom Logic",
            "d": "Ship logic to the data: atomic multi-step operations in one script.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "EVAL and EVALSHA: running scripts server-side",
              "KEYS and ARGV conventions and why they matter for clustering",
              "Script effects: replication, determinism, and execution time limits"
            ],
            "do": [
              "Write a rate limiter as a single Lua script",
              "Implement compare-and-delete for safe lock release",
              "Load the script once and call it by SHA"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Long-running Lua scripts block the entire server. Keep scripts fast and deterministic — heavy computation belongs in your app, not in EVAL."
          },
          {
            "t": "Cache-Aside Pattern",
            "d": "The caching pattern behind most applications: lazy loading with TTL.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Read-through flow: cache miss, load from DB, populate cache",
              "TTL selection: freshness vs hit rate",
              "Thundering herd and how to prevent it (locks, jitter, early refresh)"
            ],
            "do": [
              "Implement cache-aside for a product page with a 5-minute TTL",
              "Simulate a thundering herd on cache expiry and fix it with a lock",
              "Measure hit rate before and after"
            ],
            "tools": ["redis-cli", "redis-py"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "The thundering herd on expiry is the classic cache-aside failure: one expiry, a thousand DB queries. Stagger TTLs or hold a recomputation lock."
          },
          {
            "t": "Write-Through, Write-Behind & Invalidation",
            "d": "Keep the cache correct when data changes — the hard part of caching.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Write-through vs write-behind: consistency vs latency",
              "Invalidation strategies: key-based, tag-based, and versioned keys",
              "Cache stampede on invalidation and how to soften it"
            ],
            "do": [
              "Implement write-through for user profiles",
              "Invalidate related keys on update with tag-based invalidation",
              "Compare staleness windows of each strategy"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "There are only two hard things: cache invalidation and naming keys. Version your cache keys (user:42:v3) — invalidation becomes a non-event."
          },
          {
            "t": "Rate Limiting & Distributed Locks",
            "d": "Two production classics built on Redis primitives.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Fixed window vs sliding window rate limiting with sorted sets",
              "Token bucket with Lua for smooth limiting",
              "Redlock: what it promises, what it does not, and simpler alternatives"
            ],
            "do": [
              "Build a sliding-window rate limiter with a sorted set and Lua",
              "Implement a lock with SET NX PX and safe release via Lua",
              "Load-test the limiter and verify the cap holds"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Commands", "https://redis.io/commands/"]
            ],
            "tip": "Never release a lock with plain DEL — you might delete someone else's lock. Compare-and-delete in Lua with the token you set."
          },
          {
            "t": "Redis Functions (and WASM)",
            "d": "Persistent server-side functions — Lua scripts that live on the server.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "FUNCTION LOAD/FCALL: functions vs ad-hoc EVAL scripts",
              "Libraries, replication, and versioning of functions",
              "WASM engine support in Redis 8 for non-Lua languages"
            ],
            "do": [
              "Load a function library and call it with FCALL",
              "Version a function and roll it back",
              "Compare EVALSHA workflows against stored functions"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tag": "opt",
            "tip": "Functions solve EVAL's deployment problem (scripts living in app code). But they add server-side code to operate — keep the library small and reviewed."
          }
        ]
      },
      {
        "t": "Persistence & High Availability",
        "d": "Survive restarts and failures: RDB, AOF, replication, and automatic failover.",
        "lv": 3,
        "children": [
          {
            "t": "RDB Snapshots",
            "d": "Point-in-time snapshots: compact, fast to restore, with a data-loss window.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "How RDB works: fork, copy-on-write, dump.rdb",
              "SAVE vs BGSAVE and the save-point configuration",
              "What you lose: everything since the last snapshot"
            ],
            "do": [
              "Configure save points and trigger a BGSAVE",
              "Kill the server and restore from dump.rdb",
              "Measure the data-loss window under write load"
            ],
            "tools": ["redis-cli", "redis-check-rdb"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "RDB is for disaster recovery and restarts, not for zero data loss. If the last 5 minutes of writes matter, RDB alone is not your strategy."
          },
          {
            "t": "AOF: Append-Only Durability",
            "d": "Log every write for durability down to the second.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "How AOF works: logging writes, replaying on restart",
              "fsync policies: always, everysec, no — durability vs speed",
              "AOF rewrite and compaction: keeping the log small"
            ],
            "do": [
              "Enable AOF with appendfsync everysec",
              "Corrupt an AOF file and repair it with redis-check-aof",
              "Trigger a BGREWRITEAOF and watch the file shrink"
            ],
            "tools": ["redis-cli", "redis-check-aof"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "appendfsync everysec is the sane default: at most one second of loss, minimal speed cost. 'always' halves throughput for durability most apps do not need."
          },
          {
            "t": "Choosing: RDB vs AOF vs Hybrid",
            "d": "Pick the persistence strategy that matches your data-loss budget.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "RDB vs AOF trade-offs: speed, size, durability, restore time",
              "Hybrid persistence in Redis 8: RDB preamble inside AOF",
              "No-persistence mode: when Redis is purely ephemeral"
            ],
            "do": [
              "Benchmark restart time with RDB vs AOF on the same dataset",
              "Enable hybrid mode and inspect the resulting files",
              "Write down your RPO and choose the strategy that meets it"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Decide persistence from your RPO (recovery point objective), not from blog defaults. 'We can lose a minute' and 'we can lose nothing' are different architectures."
          },
          {
            "t": "Replication Basics",
            "d": "Replicas for read scaling and failover: how async replication works.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Primary-replica topology and the replication stream",
              "Full sync vs partial sync (psync)",
              "Replication is async: what that means for consistency"
            ],
            "do": [
              "Set up a primary with two replicas",
              "Kill the primary's network and observe replica behavior",
              "Measure replication lag under write load"
            ],
            "tools": ["redis-cli", "Docker"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Async replication means a failed primary can lose acknowledged writes. WAIT can bound this — know the trade-off before promising durability."
          },
          {
            "t": "Redis Sentinel: Automatic Failover",
            "d": "Monitor primaries and promote replicas without human intervention.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Sentinel quorum, leader election, and failover flow",
              "Client configuration: discovering the current primary",
              "Split-brain risks and why you need an odd number of sentinels"
            ],
            "do": [
              "Deploy 3 sentinels watching one primary",
              "Kill the primary and watch the failover in the sentinel logs",
              "Point your client at the sentinels and verify it follows the new primary"
            ],
            "tools": ["redis-sentinel", "Docker"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Sentinel handles failover, not scaling — and clients must speak Sentinel protocol. If your client cannot, the failover might as well not happen."
          }
        ]
      },
      {
        "t": "Cluster, Security & Production",
        "d": "Scale horizontally, lock it down, and operate Redis like a professional.",
        "lv": 3,
        "children": [
          {
            "t": "Redis Cluster: Sharding 101",
            "d": "Distribute 16,384 hash slots across nodes for horizontal scale.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Hash slots and key hashing: why multi-key ops need hash tags",
              "Gossip protocol, failover, and replica migration",
              "Cluster clients: MOVED/ASK redirections"
            ],
            "do": [
              "Create a 3-primary, 3-replica cluster with redis-cli --cluster",
              "Use hash tags {user:42} to co-locate related keys",
              "Kill a primary and watch its replica take over"
            ],
            "tools": ["redis-cli", "Docker"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Cross-slot operations fail in cluster mode. Design keys with hash tags from day one — retrofitting them later is a migration."
          },
          {
            "t": "ACLs & Authentication",
            "d": "Least-privilege access: users, passwords, and command categories.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "ACL users: passwords, key patterns, channel patterns, command rules",
              "The default user and why you must set a password on it",
              "ACL categories: grouping commands by risk"
            ],
            "do": [
              "Create an app user limited to its key namespace and safe commands",
              "Verify it cannot run FLUSHALL or access other namespaces",
              "Audit ACLs with ACL LIST on a running server"
            ],
            "tools": ["redis-cli"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "A Redis with no password on a reachable port is a cryptominer's dream. requirepass (or ACL users) is step zero — before anything else."
          },
          {
            "t": "TLS & Network Hardening",
            "d": "Encrypt in transit and shrink the network attack surface.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "TLS for client and replication traffic",
              "bind, protected-mode, and firewall rules",
              "Renaming or disabling dangerous commands"
            ],
            "do": [
              "Enable TLS on a test server with a self-signed cert",
              "Lock bind to localhost and verify external connections fail",
              "Disable DEBUG and rename CONFIG in redis.conf"
            ],
            "tools": ["redis-cli", "openssl"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Never expose Redis to the internet — not with a password, not ever. Bind to private interfaces and firewall everything else."
          },
          {
            "t": "Memory Management & Eviction",
            "d": "Redis is bounded by RAM — manage it deliberately with eviction policies.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "maxmemory and what happens when you hit it",
              "Eviction policies: noeviction, allkeys-lru, volatile-lru, volatile-ttl, and friends",
              "Fragmentation, active defrag, and MEMORY DOCTOR"
            ],
            "do": [
              "Set maxmemory and fill the server under different policies",
              "Watch volatile-lru vs allkeys-lru evict and compare hit rates",
              "Run MEMORY DOCTOR on a loaded instance"
            ],
            "tools": ["redis-cli", "RedisInsight"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "noeviction (the default) returns errors on writes when full — your app sees failures, not evictions. Choose a policy deliberately for every cache."
          },
          {
            "t": "Monitoring: INFO, Slow Log & RedisInsight",
            "d": "See inside the server: memory, latency, and the commands hurting you.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "INFO sections: memory, stats, replication, persistence",
              "SLOWLOG: capturing and analyzing slow commands",
              "RedisInsight and redis-benchmark for deeper inspection"
            ],
            "do": [
              "Capture slow commands with SLOWLOG and fix the worst offender",
              "Graph used_memory and evicted_keys during a load test",
              "Run redis-benchmark to baseline your instance"
            ],
            "tools": ["redis-cli", "RedisInsight", "redis-benchmark"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Monitor evicted_keys and instantaneous_ops_per_sec, not just memory. A cache that evicts everything it stores is just an expensive no-op."
          },
          {
            "t": "Backup, Upgrades & Disaster Recovery",
            "d": "The operational runbook: backups you test, upgrades you rehearse, recovery you trust.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Backing up RDB and AOF files (and why COPY, not move)",
              "Upgrade paths: rolling upgrades for replicas and sentinels",
              "Disaster recovery drills: restore to a fresh host quarterly"
            ],
            "do": [
              "Automate off-host RDB backups with a cron job",
              "Restore a backup to a fresh container and verify data",
              "Document your runbook: failover, restore, and rollback steps"
            ],
            "tools": ["redis-cli", "Docker"],
            "res": [
              ["Redis Documentation", "https://redis.io/docs/"]
            ],
            "tip": "Copy RDB files off the host — a backup on the same disk as the data is not a backup. Test the restore, not just the copy."
          }
        ]
      }
    ]
  }
});
