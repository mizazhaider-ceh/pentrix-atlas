/* Atlas roadmap data: MongoDB (mongodb) */
ROADMAPS.push({
  "id": "mongodb",
  "title": "MongoDB",
  "icon": "🍃",
  "color": "#0891b2",
  "desc": "The document database for flexible, hierarchical data: document modeling, queries and operators, the aggregation pipeline, indexing, transactions, sharding, and Atlas in production.",
  "kind": "skill",
  "root": {
    "t": "MongoDB Engineering",
    "d": "From your first document to a sharded Atlas cluster: modeling, querying, aggregating, indexing, and scaling.",
    "children": [
      {
        "t": "MongoDB Basics",
        "d": "What a document database is, when it wins, and how to get a cluster running in minutes.",
        "lv": 1,
        "children": [
          {
            "t": "What Is MongoDB?",
            "d": "A document database that stores JSON-like data — and why that shape matters for modern apps.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Documents, collections, and databases: MongoDB's building blocks",
              "How a document model maps to objects in your application code",
              "Where MongoDB fits: operational apps with evolving, hierarchical data"
            ],
            "do": [
              "Write out one business entity (an order) as JSON and as relational tables, and compare",
              "List three apps where the document shape is a natural fit"
            ],
            "tools": ["mongodb.com"],
            "res": [
              ["MongoDB", "https://www.mongodb.com/"]
            ],
            "tip": "MongoDB is not 'SQL without the rules'. It has its own rules about data locality and access patterns — learn those instead of fighting them."
          },
          {
            "t": "SQL vs NoSQL: Choosing Honestly",
            "d": "Pick the right database on purpose — with the real trade-offs, not slogans.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Schema flexibility vs enforced schema: who pays for each",
              "Joins in SQL vs denormalized documents: the access-pattern argument",
              "When a relational database is simply the better answer"
            ],
            "do": [
              "Take one feature (a product catalog) and sketch it both ways",
              "Write down which queries each design makes easy and which it makes painful"
            ],
            "tools": [],
            "res": [
              ["MongoDB", "https://www.mongodb.com/"]
            ],
            "tip": "If your data is deeply relational with many cross-entity joins and strict integrity needs, MongoDB will fight you. Choose it for document-shaped data."
          },
          {
            "t": "Documents, BSON & ObjectId",
            "d": "BSON types, ObjectIds, and the details that bite you when you ignore them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "BSON vs JSON: binary types like Date, Decimal128, and ObjectId",
              "ObjectId structure: timestamp, machine, process, counter",
              "Type pitfalls: storing dates as strings, numbers as the wrong width"
            ],
            "do": [
              "Generate ObjectIds and decode the embedded timestamp",
              "Insert documents with Date, Decimal128, and NumberLong types and read them back",
              "Find the documents where a 'price' was stored as a string and fix the type"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Storing dates as strings breaks sorting and range queries forever. Get the BSON types right on day one — migrations later are painful."
          },
          {
            "t": "Running MongoDB: Local & Atlas",
            "d": "Get a real database running — locally with Docker or free on MongoDB Atlas.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Local install vs Docker vs Atlas free tier: when each makes sense",
              "Connection strings and the mongodb+srv:// format",
              "What a replica set is, and why even local dev runs one"
            ],
            "do": [
              "Create a free Atlas cluster and connect to it",
              "Run MongoDB locally with Docker and connect to it too",
              "Compare the connection strings and note the differences"
            ],
            "tools": ["Docker", "Atlas", "mongosh"],
            "res": [
              ["MongoDB Atlas", "https://www.mongodb.com/docs/atlas/"]
            ],
            "tip": "Start on Atlas for learning, not on a hand-rolled local install. You get a replica set, backups, and monitoring for free — and zero ops yak-shaving."
          },
          {
            "t": "mongosh: The Shell",
            "d": "The interactive shell is the fastest way to learn MongoDB's query language.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Connecting, switching databases, and basic shell navigation",
              "Writing queries as JavaScript: db.collection.find({...})",
              "Using the shell to explore schema shape on real data"
            ],
            "do": [
              "Connect mongosh to your Atlas cluster",
              "Explore collections with .findOne() and .countDocuments()",
              "Write a .js script file and run it with mongosh --file"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "The shell shows you the real query language. Drivers in every language mirror it — learn it once here, reuse it everywhere."
          },
          {
            "t": "Terminology & Mental Model",
            "d": "Translate your SQL instincts into MongoDB concepts — carefully.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Table to collection, row to document, column to field — and where the analogy breaks",
              "No server-side joins by default: design for your reads",
              "Flexible schema: every document can differ, for better and worse"
            ],
            "do": [
              "Take a schema you know from SQL and redraw it as collections and documents",
              "List which queries get easier and which get harder in the translation"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "The SQL-to-MongoDB analogy helps you start and hurts you later. The sooner you think in 'documents shaped by queries', the better your designs."
          }
        ]
      },
      {
        "t": "CRUD & Query Operators",
        "d": "Insert, find, update, and delete — plus the operator vocabulary that makes queries expressive.",
        "lv": 1,
        "children": [
          {
            "t": "Insert: One Document or a Thousand",
            "d": "insertOne, insertMany, and ordered vs unordered writes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "insertOne vs insertMany and when to batch",
              "Ordered vs unordered inserts: stop-on-error vs continue-on-error",
              "Duplicate key errors and idempotent insert patterns"
            ],
            "do": [
              "Insert 10,000 documents with insertMany and time it",
              "Re-run with a duplicate _id in unordered mode and inspect the result"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Always batch inserts. One insertMany of 1,000 documents is dramatically faster than 1,000 insertOne calls — network round trips dominate."
          },
          {
            "t": "find(): Reading Documents",
            "d": "Query documents with filters that read like the data itself.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Filter documents: equality, nested fields with dot notation",
              "Querying arrays: matching elements and nested array fields",
              "sort(), limit(), skip() — and why deep skip() is expensive"
            ],
            "do": [
              "Write 20 find() queries against a sample dataset with varied filters",
              "Query nested fields with dot notation and arrays with $elemMatch",
              "Paginate with limit/skip, then try range-based pagination and compare"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Deep skip() walks every skipped document. For real pagination, remember the last _id and query 'greater than' — it stays fast at any depth."
          },
          {
            "t": "Projection: Return Only What You Need",
            "d": "Fetch the fields you need and nothing else — faster queries, smaller payloads.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Inclusion vs exclusion projection (and the _id exception)",
              "Projecting nested fields and array slices",
              "Covered queries: when the index answers everything"
            ],
            "do": [
              "Fetch a user document with and without projection and compare sizes",
              "Use $slice to return only the first 3 array elements",
              "Build a covered query and confirm it with explain()"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Returning whole documents 'just in case' is the MongoDB version of SELECT *. Project the fields you need — payloads and memory both shrink."
          },
          {
            "t": "Comparison & Logical Operators",
            "d": "The operator vocabulary: $gt, $in, $and, $or, $not, and friends.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Comparison operators: $eq, $gt, $gte, $lt, $lte, $ne, $in, $nin",
              "Logical operators: $and, $or, $not, $nor and their precedence",
              "Combining operators on the same field without overwriting"
            ],
            "do": [
              "Build a faceted product filter (price range + categories + in-stock)",
              "Rewrite an $or query as $in where possible and compare plans"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Two conditions on the same field in one object overwrite each other — {price: {$gt: 10}, price: {$lt: 50}} keeps only the last. Combine them in one subdocument."
          },
          {
            "t": "Array & Element Operators",
            "d": "Query inside arrays and handle missing fields like a pro.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "$elemMatch, $all, $size for array queries",
              "$exists and $type for element checks",
              "Multikey indexes: what MongoDB builds for array fields"
            ],
            "do": [
              "Find documents where an array contains an element matching multiple conditions",
              "Query for documents where a field exists vs is null — they differ",
              "Create a multikey index and watch an array query use it"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "$elemMatch matches conditions against the SAME array element. Without it, {scores: {$gt: 90, $lt: 50}} can match different elements — a classic wrong-result bug."
          },
          {
            "t": "Update: $set, $inc, $push & Upserts",
            "d": "Modify documents atomically with update operators — never read-modify-write.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Update operators: $set, $unset, $inc, $push, $pull, $addToSet",
              "updateOne vs updateMany and the filter-first discipline",
              "Upserts: update-or-insert in one atomic operation"
            ],
            "do": [
              "Atomically increment a counter with $inc under concurrent load",
              "Append to an array with $push and $addToSet and compare",
              "Build an idempotent upsert for a settings document"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Single-document updates are atomic in MongoDB — use $inc and $push instead of reading, modifying in code, and writing back. The race condition is not theoretical."
          },
          {
            "t": "Delete & Bulk Writes",
            "d": "Remove data safely and write in bulk when one operation is not enough.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "deleteOne vs deleteMany and the always-check-the-filter rule",
              "bulkWrite(): mixed inserts, updates, and deletes in one round trip",
              "Ordered vs unordered bulk writes"
            ],
            "do": [
              "Preview a deleteMany filter with find() first, then run it",
              "Rewrite 500 mixed operations as a single bulkWrite() and time both"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Run every deleteMany filter as find() first. The two seconds it takes has saved more production data than any backup strategy."
          }
        ]
      },
      {
        "t": "Data Modeling",
        "d": "The heart of MongoDB skill: shape documents around how your app actually reads them.",
        "lv": 2,
        "children": [
          {
            "t": "Embedding vs Referencing",
            "d": "The fundamental decision: nest the data or link to it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Embed when data is read together and grows boundedly",
              "Reference when data is shared, unbounded, or updated independently",
              "The 16MB document limit and working-set consequences"
            ],
            "do": [
              "Model blog posts with embedded comments, then with referenced comments",
              "List the queries each design makes fast and the ones it makes painful",
              "Decide for three real entities and defend your choice"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Ask 'what is read together?' not 'what is related?'. Embed for read locality; reference for independent lifecycles. Growth without bound is the embedding killer."
          },
          {
            "t": "Schema Design Patterns",
            "d": "Battle-tested patterns: bucket, computed, subset, and polymorphic schemas.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bucket pattern for time-series and unbounded arrays",
              "Computed pattern for pre-aggregated reads",
              "Subset pattern for working-set control and polymorphic pattern for variants"
            ],
            "do": [
              "Design a sensor-data schema with the bucket pattern",
              "Apply the computed pattern to a dashboard that was scanning millions of docs"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "The bucket pattern exists because unbounded arrays are the number-one schema killer in MongoDB. If an array can grow forever, bucket it."
          },
          {
            "t": "Schema Validation",
            "d": "Flexible schema does not mean no schema — enforce the shape that matters.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "$jsonSchema validation rules on collections",
              "Validation levels (strict/moderate) and actions (error/warn)",
              "Evolving validation as your application changes"
            ],
            "do": [
              "Add a validator requiring email and a createdAt date on users",
              "Try inserting invalid documents and read the errors",
              "Migrate existing bad data, then tighten from warn to error"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Start validation in warn mode on existing collections. Flipping straight to error on dirty data turns a deploy into an outage."
          },
          {
            "t": "Modeling Relationships",
            "d": "One-to-many and many-to-many without foreign keys.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "One-to-many: embed the many side or store an array of references",
              "Many-to-many: which side holds the reference array",
              "Application-level joins with $lookup when you must"
            ],
            "do": [
              "Model authors-books both ways and compare query patterns",
              "Denormalize one frequently-read field and keep it in sync"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Denormalized copies are a maintenance contract, not free performance. Every copy needs a sync strategy — or it becomes a lie."
          },
          {
            "t": "Time-Series Collections",
            "d": "Purpose-built collections for metrics, IoT, and anything timestamped.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Time-series collections: automatic bucketing under the hood",
              "Meta fields vs measurement fields",
              "Granularity settings and their storage impact"
            ],
            "do": [
              "Create a time-series collection for sensor readings",
              "Compare storage size against a regular collection with the same data",
              "Run a windowed aggregation over the series"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tag": "opt",
            "tip": "Time-series collections are append-optimized. If you update old measurements constantly, a regular collection with the bucket pattern may serve you better."
          }
        ]
      },
      {
        "t": "Aggregation Pipeline",
        "d": "MongoDB's data-processing engine: transform, join, and analyze without leaving the database.",
        "lv": 2,
        "children": [
          {
            "t": "Pipelines, Stages & the $match Habit",
            "d": "Think in stages: filter first, shape later, and keep pipelines readable.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Pipeline anatomy: documents flow through ordered stages",
              "$match early: filter before expensive stages run",
              "How the optimizer coalesces and reorders stages"
            ],
            "do": [
              "Build a 4-stage pipeline on sample data",
              "Move $match to the front and compare execution stats",
              "Read a pipeline's explain output stage by stage"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "$match first is the single highest-leverage habit in aggregation. Filtering 1M documents to 100 before a $group changes everything."
          },
          {
            "t": "$group, $sort, $project & Friends",
            "d": "The core transformation stages for reports and analytics.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "$group with accumulators: $sum, $avg, $min, $max, $push",
              "$sort, $limit, $skip and their memory behavior",
              "$project and $addFields for reshaping documents"
            ],
            "do": [
              "Compute per-category revenue with $group and $sum",
              "Build a top-10 leaderboard with $sort and $limit",
              "Reshape documents with $project, keeping only what the UI needs"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "$group without an index-backed $sort can blow the 100MB stage memory limit. Sort on an indexed field first, or allowDiskUse with eyes open."
          },
          {
            "t": "$lookup: Joins in a Document World",
            "d": "Join collections when referencing was the right call — carefully.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Basic $lookup: localField to foreignField",
              "$lookup with a sub-pipeline for filtered, shaped joins",
              "Performance reality: $lookup is the most expensive stage you will use"
            ],
            "do": [
              "Join orders to customers with a basic $lookup",
              "Rewrite it with a pipeline $lookup that filters and projects",
              "Measure both against a denormalized design"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "If you $lookup on every query, the data probably should have been embedded. $lookup is an escape hatch, not a daily driver."
          },
          {
            "t": "$unwind & Array Transformations",
            "d": "Flatten arrays into streams of documents — and know the cost.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "$unwind: one document per array element",
              "preserveNullAndEmptyArrays for outer-join semantics",
              "Array expression operators: $map, $filter, $reduce"
            ],
            "do": [
              "Unwind an order's line items and compute per-item revenue",
              "Compare $unwind + $group against $map/$reduce in a $project",
              "Handle documents with missing arrays using preserveNullAndEmptyArrays"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "$unwind multiplies your document count — a 10k-doc collection with 100-element arrays becomes 1M documents mid-pipeline. Filter arrays before unwinding."
          },
          {
            "t": "Atlas Search & Vector Search",
            "d": "Full-text and semantic search without bolting on another system.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "$search and $searchMeta stages with Atlas Search indexes",
              "Analyzers, scoring, and relevance tuning basics",
              "Vector search for embeddings and hybrid retrieval"
            ],
            "do": [
              "Create an Atlas Search index on a product catalog",
              "Run a fuzzy text search and tune the scoring",
              "Store embeddings and run a $vectorSearch query"
            ],
            "tools": ["Atlas", "mongosh"],
            "res": [
              ["MongoDB Atlas", "https://www.mongodb.com/docs/atlas/"]
            ],
            "tip": "Atlas Search is a separate index you define and pay for — it does not appear by magic. Design the index (analyzers, stored fields) before writing queries."
          },
          {
            "t": "$setWindowFields: Analytics in the DB",
            "d": "Running totals, moving averages, and rankings — MongoDB's answer to window functions.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "partitionBy, sortBy, and window documents/units",
              "$sum, $avg, $rank, $shift inside windows",
              "When to compute in the DB vs in the application"
            ],
            "do": [
              "Compute a 7-day moving average over a time series",
              "Rank documents within partitions with $rank",
              "Compare with pulling the data and computing in code"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tag": "opt",
            "tip": "$setWindowFields needs sorted input — put an indexed $sort before it or the stage sorts everything in memory."
          },
          {
            "t": "Materialized Views with $merge",
            "d": "Precompute expensive aggregations and refresh them on a schedule.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "$merge and $out: writing pipeline results to collections",
              "On-demand materialized views for dashboards",
              "Refresh strategies: scheduled, incremental, and change-stream driven"
            ],
            "do": [
              "Build a daily revenue summary with $merge",
              "Schedule it and measure dashboard query time before and after"
            ],
            "tools": ["mongosh", "Atlas Triggers"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tag": "opt",
            "tip": "Materialized views trade freshness for speed. Define the staleness your business tolerates first — that decides the whole design."
          }
        ]
      },
      {
        "t": "Indexes & Performance",
        "d": "Make queries fast on purpose: the right indexes, honest query plans, and safe consistency knobs.",
        "lv": 2,
        "children": [
          {
            "t": "Single-Field & Compound Indexes",
            "d": "The indexes that carry 90% of real workloads.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "createIndex and how MongoDB picks an index",
              "Compound indexes: field order and the ESR (equality, sort, range) rule",
              "Index intersection vs one good compound index"
            ],
            "do": [
              "Create a compound index for your most common query shape",
              "Reorder the fields and watch the plan change",
              "Drop a redundant index and measure write improvement"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "ESR order: equality fields first, then sort, then range. An index in the wrong order is often worse than no index — the planner may still pick it."
          },
          {
            "t": "explain(): Reading Query Plans",
            "d": "Stop guessing about performance — read what the query planner did.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "executionStats: nReturned, totalDocsExamined, totalKeysExamined",
              "COLLSCAN vs IXSCAN and the examined-to-returned ratio",
              "Winning plan vs rejected plans"
            ],
            "do": [
              "Run explain('executionStats') on a slow query",
              "Compute the examined/returned ratio and fix anything above 10x",
              "Verify the fix with a second explain"
            ],
            "tools": ["mongosh", "Compass"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "If totalDocsExamined is 100x nReturned, you are collection-scanning in disguise. Fix the index before you touch the query."
          },
          {
            "t": "Special Index Types",
            "d": "TTL, text, geospatial, unique, and partial — the right index for the right data.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "TTL indexes for self-expiring data (sessions, logs)",
              "Text indexes for language-aware search, 2dsphere for geo",
              "Unique and partial indexes for constraints and smaller indexes"
            ],
            "do": [
              "Build a TTL index on session documents and watch them expire",
              "Create a 2dsphere index and run a $near query",
              "Add a partial index covering only active users"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "TTL deletion runs on a background thread roughly every 60 seconds — it is not precise expiry. Never use TTL for security-critical invalidation."
          },
          {
            "t": "Query Optimization Workflow",
            "d": "A repeatable method: measure, explain, index, verify.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Finding slow queries: logs, profiler, Atlas Performance Advisor",
              "The loop: reproduce, explain, add index, re-measure",
              "When the answer is schema change, not another index"
            ],
            "do": [
              "Enable the profiler and capture a slow operation",
              "Take one query through the full loop and document each step",
              "Let Atlas Performance Advisor suggest an index and evaluate it yourself"
            ],
            "tools": ["mongosh", "Atlas"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "More indexes are not more performance. Every index slows writes and costs RAM — the winning move is often fewer, better indexes."
          },
          {
            "t": "Read & Write Concerns",
            "d": "Tune durability and consistency guarantees to what your app actually needs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Write concern: w:1, w:'majority', w:0 — durability vs latency",
              "Read concern: local, majority, snapshot — what each guarantees",
              "Read preference: primary vs secondaries and the staleness trade"
            ],
            "do": [
              "Write with w:'majority' and j:true, then measure the latency cost",
              "Read from a secondary and observe replication lag effects"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Reading from secondaries for 'scale' buys stale reads and operational pain. Scale reads with better indexes and caching first."
          },
          {
            "t": "Profiling & Monitoring",
            "d": "See what your cluster is really doing: profiler, metrics, and alerts.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Database profiler levels and system.profile",
              "Key metrics: opcounters, queue depth, cache pressure, replication lag",
              "Atlas monitoring, alerts, and Performance Advisor"
            ],
            "do": [
              "Turn on the profiler at level 1 and find your slowest ops",
              "Set up Atlas alerts for replication lag and disk usage",
              "Correlate a slowdown with a metric during a load test"
            ],
            "tools": ["mongosh", "Atlas"],
            "res": [
              ["MongoDB Atlas", "https://www.mongodb.com/docs/atlas/"]
            ],
            "tip": "Alert on leading indicators (queue depth, replication lag, disk growth) — not just on 'the app is down'. By then you are already firefighting."
          }
        ]
      },
      {
        "t": "Transactions & Reliability",
        "d": "Multi-document ACID, replica sets, and the machinery that keeps data safe.",
        "lv": 3,
        "children": [
          {
            "t": "Replica Sets: How They Work",
            "d": "Elections, oplog, and failover — the foundation everything else stands on.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Primary, secondaries, and the election protocol",
              "The oplog: how replication actually streams",
              "Failover behavior and what your app sees during an election"
            ],
            "do": [
              "Deploy a 3-node replica set locally with Docker",
              "Kill the primary and watch the election in the logs",
              "Run your app through a failover and observe the retry behavior"
            ],
            "tools": ["Docker", "mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Never run a single-node 'replica set of one' in production and call it HA. Three data-bearing nodes across failure domains is the real minimum."
          },
          {
            "t": "Multi-Document ACID Transactions",
            "d": "Atomic writes across documents and collections — and when to avoid them.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Starting sessions and running transactions in code",
              "What transactions cost: 60-second limit, oplog pressure, retry logic",
              "Designing away from transactions with embedded documents"
            ],
            "do": [
              "Write a transfer between two accounts inside a transaction",
              "Force an abort and verify the rollback",
              "Load-test transactions vs single-document atomic writes"
            ],
            "tools": ["mongosh", "PyMongo"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Transactions have a 60-second default limit and real overhead. If your design needs them constantly, the schema is usually the problem."
          },
          {
            "t": "Retryable Writes & Idempotency",
            "d": "Survive network blips without double-applying writes.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Retryable writes: what the driver retries automatically",
              "Which operations are safe to retry and which are not",
              "Idempotency keys for operations the driver cannot retry"
            ],
            "do": [
              "Simulate a failover mid-write and observe the retry",
              "Add an idempotency key to a payment-style operation"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Retryable writes only cover single-statement idempotent ops. Multi-statement logic needs your own idempotency design — the driver cannot save you."
          },
          {
            "t": "Backup & Restore",
            "d": "From mongodump to Atlas continuous backups — and restores you actually test.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "mongodump/mongorestore: logical backups and their limits",
              "Atlas backups: snapshots and point-in-time recovery",
              "What 'restore tested' really means for your RTO"
            ],
            "do": [
              "Take a mongodump and restore it to a scratch cluster",
              "Trigger an Atlas snapshot restore to a new cluster",
              "Time the full restore — that is your real RTO"
            ],
            "tools": ["mongodump", "mongorestore", "Atlas"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "mongodump against a sharded cluster without --oplog-style consistency gives you a fuzzy backup. Use Atlas backups or filesystem snapshots for production."
          },
          {
            "t": "Change Streams: React to Data",
            "d": "Subscribe to database changes and build reactive pipelines.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Opening a change stream and resume tokens",
              "Filtering with aggregation pipelines on the stream",
              "Use cases: cache invalidation, eventing, cross-system sync"
            ],
            "do": [
              "Watch a collection and print every insert and update",
              "Kill the watcher and resume from the saved token",
              "Build a cache-invalidation hook on document changes"
            ],
            "tools": ["mongosh", "PyMongo"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Always persist the resume token. A change stream without resume-on-restart replays or skips changes — both are silent data bugs."
          }
        ]
      },
      {
        "t": "Scaling with Sharding",
        "d": "Distribute data across shards — the most consequential architecture decision in MongoDB.",
        "lv": 3,
        "children": [
          {
            "t": "Sharding Concepts",
            "d": "Shards, mongos routers, and config servers — how a sharded cluster fits together.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The three roles: shards hold data, mongos routes, config servers hold metadata",
              "Chunks and the balancer: how data moves",
              "Targeted vs scatter-gather queries"
            ],
            "do": [
              "Deploy a sharded cluster locally with Docker",
              "Insert data and watch chunks distribute across shards",
              "Run a targeted query and a scatter-gather query and compare"
            ],
            "tools": ["Docker", "mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Every query that cannot target a single shard hits all of them. Design the shard key around your queries, not around 'even distribution'."
          },
          {
            "t": "Shard Keys: The Decision That Matters Most",
            "d": "Choose the key your cluster lives or dies by — cardinality, frequency, and monotonicity.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Cardinality, query isolation, and write distribution",
              "Hashed vs ranged shard keys and their trade-offs",
              "Monotonic keys and the hot-shard problem"
            ],
            "do": [
              "Shard a collection on a low-cardinality key and watch jumbo chunks form",
              "Re-shard on a hashed key and compare write distribution",
              "Analyze your real query patterns before choosing"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "A bad shard key is nearly permanent pain — resharding is possible but heavy. Spend more time choosing the key than deploying the cluster."
          },
          {
            "t": "Resharding & Rebalancing",
            "d": "Change shard keys and keep chunks balanced as data grows.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Resharding a collection: how it works and what it costs",
              "Balancer behavior, windows, and throttling",
              "Jumbo chunks: why they form and how to split them"
            ],
            "do": [
              "Reshard a test collection to a new key",
              "Throttle the balancer and observe migration impact on latency"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Resharding copies your data while serving traffic — plan it like a migration, with monitoring and a rollback story, not like a config tweak."
          },
          {
            "t": "Zones & Data Locality",
            "d": "Pin data to shards for geography, compliance, and tiering.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Zone sharding: mapping shard key ranges to shards",
              "Geo-locality and data residency requirements",
              "Tiered storage: hot data on fast shards, cold on cheap"
            ],
            "do": [
              "Create zones pinning EU users' data to specific shards",
              "Verify with explain that queries route to the right zone"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tag": "opt",
            "tip": "Zones enforce placement, not access. Your application still needs to route EU users to EU shards — zones just make the placement possible."
          },
          {
            "t": "When Not to Shard",
            "d": "Sharding is the last resort — prove you need it first.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Vertical scaling and better indexing before sharding",
              "The operational cost: more moving parts, harder debugging",
              "Capacity planning: when the numbers genuinely demand it"
            ],
            "do": [
              "Load-test a replica set to find its real ceiling",
              "Write the capacity math that justifies (or kills) a sharding project"
            ],
            "tools": ["mongosh"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Most 'we need to shard' moments are really 'we need an index, a bigger instance, or archiving'. Sharding multiplies operational complexity permanently."
          }
        ]
      },
      {
        "t": "Security, Atlas & Ecosystem",
        "d": "Lock it down, run it on Atlas like a professional, and plug into the wider ecosystem.",
        "lv": 2,
        "children": [
          {
            "t": "Authentication & RBAC",
            "d": "Who can connect, and what each identity is allowed to touch.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "SCRAM, x.509, LDAP, and OIDC authentication options",
              "Built-in vs custom roles and the principle of least privilege",
              "Atlas database users, IP access lists, and private endpoints"
            ],
            "do": [
              "Create a least-privilege role for your app (readWrite on one database)",
              "Lock an Atlas cluster behind an IP access list",
              "Audit who has admin roles and remove what is not needed"
            ],
            "tools": ["mongosh", "Atlas"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "The default 'readWriteAnyDatabase' habit is how breaches happen. Every service gets its own user with the minimum role on the minimum databases."
          },
          {
            "t": "Atlas in Production",
            "d": "Run Atlas like a professional: tiers, scaling, backups, and private networking.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cluster tiers, auto-scaling, and independent shard scaling",
              "Backup policies and point-in-time recovery setup",
              "VPC peering and PrivateLink for network isolation"
            ],
            "do": [
              "Enable auto-scaling and continuous backups on a test cluster",
              "Set up VPC peering between Atlas and your cloud network",
              "Practice a point-in-time restore to a new cluster"
            ],
            "tools": ["Atlas"],
            "res": [
              ["MongoDB Atlas", "https://www.mongodb.com/docs/atlas/"]
            ],
            "tip": "Enable backups and private networking before you need them. Retrofitting either under incident pressure is how mistakes happen."
          },
          {
            "t": "Encryption: TLS, At-Rest & Queryable",
            "d": "Encrypt data in transit, at rest, and even while queried.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "TLS everywhere: client, intra-cluster, and Atlas defaults",
              "Encryption at rest with customer-managed keys",
              "Queryable Encryption and client-side field-level encryption"
            ],
            "do": [
              "Enforce TLS-only connections on a self-managed deployment",
              "Encrypt one sensitive field client-side and query it",
              "Rotate a key and verify the rotation path works"
            ],
            "tools": ["mongosh", "Atlas"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tip": "Queryable Encryption protects fields even from the database server — but it limits which queries work on those fields. Design queries around the encryption, not after it."
          },
          {
            "t": "Drivers & the Ecosystem",
            "d": "Connect from your language and stream data to Kafka, Spark, and search.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Official drivers: connection pooling and retry configuration",
              "Kafka and Spark connectors for streaming and analytics",
              "ODM choices (Mongoose, etc.) and when raw drivers win"
            ],
            "do": [
              "Connect from your language's driver with proper pool settings",
              "Stream a collection's changes into Kafka with the source connector"
            ],
            "tools": ["PyMongo", "Mongoose", "Kafka Connector"],
            "res": [
              ["MongoDB Manual", "https://www.mongodb.com/docs/manual/"]
            ],
            "tag": "opt",
            "tip": "Configure maxPoolSize deliberately. The default pool times your app's connection count can quietly exhaust the server under load."
          },
          {
            "t": "Auditing & Compliance Basics",
            "d": "Know who did what: audit logs and the compliance story.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Database auditing: what gets logged and where it goes",
              "Atlas auditing and log forwarding to your SIEM",
              "Compliance checkboxes: SOC2, HIPAA-ready tiers, and your responsibilities"
            ],
            "do": [
              "Enable auditing and trace one privileged operation end to end",
              "Forward Atlas logs to your logging stack"
            ],
            "tools": ["Atlas"],
            "res": [
              ["MongoDB Atlas", "https://www.mongodb.com/docs/atlas/"]
            ],
            "tag": "opt",
            "tip": "Audit logs are only useful if someone reads them. Ship them to your SIEM with alerts on privilege changes — a log nobody queries is decoration."
          }
        ]
      }
    ]
  }
});
