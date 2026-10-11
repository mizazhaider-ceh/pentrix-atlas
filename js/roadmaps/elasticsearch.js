/* Atlas roadmap data: Elasticsearch (elasticsearch) */
ROADMAPS.push({
  "id": "elasticsearch",
  "title": "Elasticsearch",
  "icon": "🔎",
  "color": "#f59e0b",
  "desc": "Search, analyze, and observe at scale: indexing and mappings, the Query DSL and ES|QL, aggregations, vector and hybrid search, and running clusters in production.",
  "kind": "skill",
  "root": {
    "t": "Elasticsearch",
    "d": "From your first document to production clusters: how to index, search, analyze, and operate Elasticsearch like a professional.",
    "children": [
      {
        "t": "Getting Started",
        "d": "What Elasticsearch is, running it locally, and your first searches through the REST API.",
        "lv": 1,
        "children": [
          {
            "t": "What Elasticsearch Is (and Isn't)",
            "d": "A distributed search and analytics engine, not a relational database: where it shines and where it does not.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Search engines vs relational databases: inverted indexes vs B-trees",
              "The classic use cases: full-text search, log analytics, observability, security",
              "Where not to use it: primary transactional store, strict relational joins"
            ],
            "do": [
              "List three apps you use and decide whether Elasticsearch fits each one's data",
              "Read the Elastic docs overview of what Elasticsearch does",
              "Sketch one search feature you want to build and what data it needs"
            ],
            "tools": ["Elasticsearch"],
            "res": [
              ["Elastic", "https://www.elastic.co"],
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Beginners reach for Elasticsearch as a primary database because it is fast to start. It is a search engine with eventual consistency quirks; keep your transactional truth in a real database."
          },
          {
            "t": "Running Elasticsearch with Docker",
            "d": "A real single-node cluster on your laptop in minutes, with security on from the start.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Single-node vs multi-node: what changes when you add nodes",
              "Security by default: passwords, TLS, and why you never disable it",
              "Memory settings: heap sizing rules and why more heap is not always better"
            ],
            "do": [
              "Run `docker run -p 9200:9200 -e \"discovery.type=single-node\" docker.elastic.co/elasticsearch/elasticsearch:9.4.0`",
              "Set the elastic user password and authenticate with curl",
              "Stop and restart the container and confirm your data survives"
            ],
            "tools": ["Docker", "curl"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"],
              ["Docker Docs", "https://docs.docker.com"]
            ],
            "tip": "Disabling security to make setup easier is the most common and most dangerous shortcut. Every tutorial that tells you to set xpack.security.enabled=false is teaching you to build a breach."
          },
          {
            "t": "Your First Index and Documents",
            "d": "Indices, documents, and IDs: the core write and read operations you will use every day.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Index as a collection of JSON documents with a shared shape",
              "Document IDs: letting Elasticsearch generate them vs choosing your own",
              "CRUD over REST: PUT, POST, GET, DELETE and what each returns"
            ],
            "do": [
              "Create an index with `PUT /products` and index three documents",
              "Fetch one back with `GET /products/_doc/1` and inspect the `_source`",
              "Update a document partially and delete another, watching version numbers change"
            ],
            "tools": ["curl", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Letting Elasticsearch auto-generate IDs is fine for logs, but for business entities (products, users) use your own stable IDs so reindexing stays idempotent."
          },
          {
            "t": "Kibana and Dev Tools Console",
            "d": "The JSON playground for Elasticsearch: autocomplete, history, and one-click request copying.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Dev Tools Console: writing requests with autocomplete and inline docs",
              "Kibana spaces: Discover, dashboards, and index management in one UI",
              "Why you prototype every query in Console before putting it in code"
            ],
            "do": [
              "Run Elasticsearch and Kibana side by side with Docker Compose",
              "Replay your curl requests in Dev Tools Console using the autocomplete",
              "Save a useful request to a Console snippet for later reuse"
            ],
            "tools": ["Kibana", "Docker Compose"],
            "res": [
              ["Kibana", "https://www.elastic.co/kibana"]
            ],
            "tip": "Debugging queries through application code is slow and blind. The Console shows you the exact request and response with zero indirection; prototype there first, always."
          },
          {
            "t": "Talking REST: The Elasticsearch API",
            "d": "Verbs map to actions, _cat APIs show cluster state, and pretty responses make everything learnable.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "REST conventions: GET reads, PUT/POST writes, and the _search endpoint",
              "The _cat APIs: human-readable cluster, index, and shard status",
              "Query parameters that matter: pretty, filter_path, and error_trace"
            ],
            "do": [
              "Run `GET /_cat/indices?v` and `GET /_cat/health?v` and read every column",
              "Use `filter_path` to trim a huge _cluster/stats response to what you need",
              "Trigger an error on purpose and read the full error_trace to understand it"
            ],
            "tools": ["curl", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "The _cat APIs are your first diagnostic tool for everything: red cluster, missing docs, slow queries. Learn to read them before you need them at 2am."
          }
        ]
      },
      {
        "t": "Core Architecture",
        "d": "Clusters, nodes, shards, and the inverted index: how Elasticsearch is actually built.",
        "lv": 1,
        "children": [
          {
            "t": "Clusters, Nodes, Indices, Documents",
            "d": "The logical model: how data is organized from a single document up to a whole cluster.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Document: a JSON object, the atomic unit of search",
              "Index: a collection of documents, roughly a database table",
              "Cluster and node: the distributed system that holds your indices"
            ],
            "do": [
              "Draw your data model: which entities become indices, what each document holds",
              "Create two indices with different document shapes and compare",
              "Query across both with a multi-index search"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "One giant index for unrelated document types was the old way and it is gone for good reasons. Model each entity as its own index; cross-index search exists for the rest."
          },
          {
            "t": "Shards and Replicas",
            "d": "How indices split across machines for scale and survive node failures through copies.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Primary shards: the horizontal split of an index, fixed at creation",
              "Replica shards: copies for availability and read scaling",
              "Shard sizing: too many shards is overhead, too few is a bottleneck"
            ],
            "do": [
              "Create an index with 3 primaries and 1 replica and watch _cat/shards",
              "Kill a node (or stop a container) and watch replicas get promoted",
              "Try to change the primary shard count after creation and learn why you cannot"
            ],
            "tools": ["Elasticsearch", "Docker"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "The default shard count is almost never right for you. Oversharding (hundreds of tiny shards) is the most common self-inflicted cluster problem; size shards at tens of gigabytes each."
          },
          {
            "t": "Node Roles: Who Does What",
            "d": "Master-eligible, data, ingest, coordinating, and ML nodes: the division of labor in a cluster.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Master-eligible nodes: cluster state and the split-brain problem they solve",
              "Data nodes: where shards live and searches execute",
              "Coordinating and ingest nodes: request routing and preprocessing"
            ],
            "do": [
              "Inspect your cluster's node roles with `GET /_cat/nodes?v&h=name,node.role`",
              "Sketch a 6-node production layout with dedicated roles",
              "Explain in writing why you need an odd number of master-eligible nodes"
            ],
            "tools": ["Elasticsearch"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Running every node as every role works on a laptop and becomes a stability risk in production. Dedicated master nodes exist so heavy searches cannot starve cluster management."
          },
          {
            "t": "The Inverted Index, Demystified",
            "d": "Terms pointing to documents: the data structure that makes full-text search fast, explained plainly.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The inverted index: from each term to the list of documents containing it",
              "Doc values vs the inverted index: sorting and aggregations need their own structure",
              "Why text analysis happens at index time and what that implies for queries"
            ],
            "do": [
              "Index three short documents and draw the inverted index by hand",
              "Use the _analyze API to see exactly which terms a field produces",
              "Explain why searching for a word is fast but counting distinct values needs doc values"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "If you understand the inverted index, half of Elasticsearch stops being magic: why text fields cannot be sorted directly, why analysis must match between index and query, and why keyword fields exist."
          }
        ]
      },
      {
        "t": "Data Modeling and Mappings",
        "d": "Mappings are your schema: field types, text vs keyword, analyzers, and the explosions to avoid.",
        "lv": 2,
        "children": [
          {
            "t": "Mappings: Dynamic vs Explicit",
            "d": "Letting Elasticsearch guess your schema is convenient until it guesses wrong. Take control explicitly.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Dynamic mapping: convenient inference and its classic mistakes (dates as text, floats as long)",
              "Explicit mappings: declaring every field deliberately at index creation",
              "Dynamic templates: controlled flexibility for fields you cannot enumerate"
            ],
            "do": [
              "Index a document with dynamic mapping and inspect what Elasticsearch inferred",
              "Find one wrong inference (a date string mapped as text is the classic)",
              "Recreate the index with an explicit mapping and dynamic templates for the rest"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "You cannot change a field's mapping after data is indexed; you must reindex. Getting mappings right before the first document lands saves painful migrations later."
          },
          {
            "t": "Text vs Keyword: The Most Important Choice",
            "d": "Analyzed for searching, exact for filtering and sorting: the field-type decision behind most mapping bugs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Text: analyzed into terms, for full-text search",
              "Keyword: stored exactly, for filters, sorting, and aggregations",
              "Multi-fields: indexing both ways from one source field"
            ],
            "do": [
              "Map a product name as multi-field (text plus keyword sub-field)",
              "Run a full-text match query and a term filter, and note which sub-field each needs",
              "Try sorting on a text field, watch it fail, and fix it with the keyword sub-field"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Searching a keyword field with a match query (or filtering a text field with a term query) silently returns wrong results. The query type and the field type must agree, or nothing works."
          },
          {
            "t": "Data Types That Matter",
            "d": "Numerics, dates, geo points, IPs, and the object vs nested distinction that breaks aggregations.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Core types: numeric ranges, dates with formats, booleans, IPs, geo_point",
              "Object vs nested: why arrays of objects need nested for correct queries",
              "Scaled floats and the flattened type for sparse, high-cardinality data"
            ],
            "do": [
              "Index events with geo_point locations and run a distance query",
              "Index order line items as object, query them, and observe the cross-matching bug",
              "Fix it with nested type and nested queries, and compare the results"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Arrays of objects flatten silently: a query for red shirts in size M matches an order with a red hat and a blue shirt in M. If you query inside arrays, you need nested."
          },
          {
            "t": "Analyzers: Tokenizers and Filters",
            "d": "How text becomes searchable terms: character filters, tokenizers, token filters, and the _analyze API.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The analysis chain: character filters, tokenizer, token filters, in order",
              "The standard analyzer and what it does to your text",
              "Custom analyzers: language-specific, n-grams for autocomplete, edge cases"
            ],
            "do": [
              "Run `POST /_analyze` with the standard analyzer on a sentence and read the tokens",
              "Build a custom analyzer with lowercase plus edge n-grams for autocomplete",
              "Index product names and implement working as-you-type suggestions"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Search-time and index-time analysis must match. Customizing the index analyzer but forgetting the search analyzer is how queries mysteriously stop matching."
          },
          {
            "t": "Avoiding Mapping Explosions",
            "d": "Thousands of runaway fields will destabilize a cluster. Limits, templates, and the flattened escape hatch.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How mapping explosions happen: user-controlled keys becoming field names",
              "Index-level field limits and what happens when you hit them",
              "Defenses: dynamic templates, flattened fields, and rejecting bad data at ingest"
            ],
            "do": [
              "Simulate an explosion: index documents with hundreds of unique keys",
              "Watch the mapping grow with `GET /index/_mapping` and check cluster stats",
              "Redesign with a flattened field and verify the mapping stays small"
            ],
            "tools": ["Elasticsearch"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Never let user input become field names. One malicious or buggy client sending unique keys per document can take down a cluster; flattened fields or strict mappings are the guardrails."
          }
        ]
      },
      {
        "t": "Indexing Data at Scale",
        "d": "Getting data in fast and reliably: bulk API, ingest pipelines, data streams, and indexing performance.",
        "lv": 2,
        "children": [
          {
            "t": "The Bulk API and Indexing Throughput",
            "d": "Batching thousands of documents per request: the single biggest indexing performance lever.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bulk request format: action lines paired with document lines",
              "Batch sizing: the 5-15MB sweet spot and how to find yours",
              "Partial failures: bulk responses report per-item status, not all-or-nothing"
            ],
            "do": [
              "Index 100k documents one-by-one and time it",
              "Reindex with bulk batches and compare throughput",
              "Parse a bulk response and handle one failed item without losing the rest"
            ],
            "tools": ["Elasticsearch", "Python", "elasticsearch-py"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Single-document indexing in a loop is the slowest possible way to load data, often 100x slower than bulk. If your loader is slow, batching is the fix before anything else."
          },
          {
            "t": "Ingest Pipelines",
            "d": "Transform documents on the way in: parsing, enriching, and routing without application code.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Processors: grok, date parsing, geoip, set, remove, and script",
              "Pipeline failure handling: on_failure processors and dead-letter patterns",
              "Simulate API: testing pipelines without indexing anything"
            ],
            "do": [
              "Build a pipeline that parses an Apache log line with grok",
              "Add on_failure handling that tags bad documents instead of dropping them",
              "Test everything with _simulate before attaching it to an index"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Heavy ingest pipelines run on ingest nodes for a reason. Doing expensive enrichment inline on data nodes steals CPU from searches; size and separate accordingly."
          },
          {
            "t": "Data Streams and Time-Series Data",
            "d": "Append-only data done right: data streams, backing indices, and why time-series gets special treatment.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Data streams: one write target backed by many hidden indices",
              "The @timestamp requirement and append-only semantics",
              "Rollover: when backing indices rotate automatically"
            ],
            "do": [
              "Create a data stream for logs and index timestamped documents",
              "Inspect the backing indices and watch one roll over",
              "Query the stream as a single unit across all backing indices"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Updating old documents in a time-series stream fights the design. Data streams are for append-only data; if you update history often, a regular index fits better."
          },
          {
            "t": "Update by Query, Delete by Query, Reindex",
            "d": "Migrations and repairs without downtime: rewriting data in place or into a new index.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "_update_by_query and _delete_by_query: scripted changes across matching docs",
              "_reindex: copying into a new index, the standard mapping-change workflow",
              "Slices, throttling, and task monitoring for large operations"
            ],
            "do": [
              "Change a mapping, reindex into a new index, and swap with an alias",
              "Run an update_by_query that backfills a new field on old documents",
              "Monitor a long reindex with the Tasks API and throttle it mid-flight"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Reindexing without an alias swap means downtime or split-brain reads. The pattern is always: new index, reindex, atomic alias switch, delete old."
          },
          {
            "t": "Tuning Indexing Performance",
            "d": "Refresh intervals, translog, and shard counts: the knobs that decide how fast data lands.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Refresh interval: the visibility-vs-speed trade-off at the heart of indexing",
              "Translog and durability: what you risk when you tune for speed",
              "Benchmarking properly with Rally instead of guessing"
            ],
            "do": [
              "Measure bulk throughput with default refresh, then with refresh_interval at 30s",
              "Restore safe settings and document the trade-off you observed",
              "Run a Rally track and record a baseline for your hardware"
            ],
            "tools": ["Elasticsearch", "Rally"],
            "res": [
              ["Rally", "https://github.com/elastic/rally"],
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Disabling refresh entirely for a bulk load is legitimate, but forgetting to re-enable it leaves new data invisible. Every temporary tuning change needs a revert step in the same runbook."
          }
        ]
      },
      {
        "t": "Search: Queries and Relevance",
        "d": "The Query DSL, ES|QL, bool queries, full-text search, and making results rank the way users expect.",
        "lv": 2,
        "children": [
          {
            "t": "Query DSL vs ES|QL vs KQL",
            "d": "Three ways to ask: the JSON DSL for applications, ES|QL for piped analytics, KQL for Kibana search bars.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Query DSL: the JSON language your application code speaks",
              "ES|QL: piped query language for exploration and analytics",
              "KQL: the Kibana search bar syntax for quick filtering"
            ],
            "do": [
              "Write the same filter three ways: DSL, ES|QL, and KQL",
              "Run an ES|QL query with STATS to aggregate without writing JSON",
              "Decide which language each of your use cases will use"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "ES|QL is fantastic for exploration but the DSL remains the application interface. Prototype in ES|QL, ship in DSL."
          },
          {
            "t": "Bool Queries and Filter Context",
            "d": "must, should, filter, must_not: combining clauses, and why filters are faster than queries.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bool clauses: must (scored), filter (unscored, cached), should, must_not",
              "Query context vs filter context: scoring on or off",
              "minimum_should_match and the subtle semantics of should"
            ],
            "do": [
              "Build a product search: must match text, filter by category and price range",
              "Move the filters between query and filter context and compare scores and speed",
              "Add a must_not clause and verify excluded documents disappear"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Putting exact filters (category, status, tenant) in must instead of filter wastes scoring work and cache. Filters are faster and cacheable; use them for everything that is yes-or-no."
          },
          {
            "t": "Full-Text Search: match, multi_match, match_phrase",
            "d": "Searching human language: analyzed queries, multi-field search, and phrase matching.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "match: analyzed full-text search and its operator options",
              "multi_match: searching across fields with per-field boosting",
              "match_phrase and slop: when word order and proximity matter"
            ],
            "do": [
              "Index product descriptions and search them with match",
              "Upgrade to multi_match across title and description with title boosted",
              "Add a match_phrase query for exact-phrase searches and tune slop"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "A match query on a keyword field (or a term query on a text field) fails silently in the worst way: it returns results, just wrong ones. Field type and query type must agree."
          },
          {
            "t": "BM25 and Relevance Tuning",
            "d": "How Elasticsearch scores documents and the levers (boosting, function_score) that shape ranking.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "BM25 in plain words: term frequency, inverse document frequency, field length",
              "Boosting: per-field and per-query weights that express business priorities",
              "function_score: blending text relevance with recency, popularity, or distance"
            ],
            "do": [
              "Run a query with explain:true and read one scoring explanation fully",
              "Boost titles over descriptions and measure the ranking change on test queries",
              "Add a recency decay function so fresh documents rank higher"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Tuning relevance without a judgment list is vibes-based ranking. Collect 20 representative queries with ideal result orders first; then every tuning change is measurable."
          },
          {
            "t": "Controlling Results: Pagination, Sorting, Highlighting",
            "d": "from/size limits, search_after for deep pages, sorting, source filtering, and highlighted snippets.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "from/size pagination and why deep paging is expensive",
              "search_after and PIT: the correct way to page through large result sets",
              "Highlighting: showing users why each result matched"
            ],
            "do": [
              "Page through 10k results with from/size and watch latency climb",
              "Rewrite with search_after and a point-in-time reader",
              "Add highlighting to a search UI and style the matched fragments"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Deep pagination with from/size gets linearly slower and can OOM a cluster; it also has a hard 10k default cap. search_after is not an optimization, it is the only correct approach at scale."
          },
          {
            "t": "Aliases and Multi-Index Search",
            "d": "Zero-downtime reindexing and cross-index queries: the indirection layer production systems rely on.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Aliases: stable names pointing at changing indices",
              "The atomic alias swap: the heart of zero-downtime reindexing",
              "Multi-index search patterns and index patterns with wildcards"
            ],
            "do": [
              "Point an alias at v1, reindex to v2, and swap the alias atomically",
              "Search across monthly indices with a wildcard pattern",
              "Verify zero failed requests during the swap with a load loop"
            ],
            "tools": ["Elasticsearch", "Kibana Dev Tools"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Applications should never talk to concrete index names in production. Everything goes through aliases, or your first mapping change becomes a coordinated deploy."
          }
        ]
      },
      {
        "t": "Aggregations and Analytics",
        "d": "Beyond search: metrics, buckets, pipelines, transforms, and visualizing it all in Kibana.",
        "lv": 2,
        "children": [
          {
            "t": "Metric Aggregations",
            "d": "avg, sum, min, max, cardinality, stats: single-number answers over millions of documents.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Basic metrics: avg, sum, min, max, value_count, stats",
              "Cardinality: approximate distinct counts and their error bounds",
              "When metrics run on doc values and why fielddata is the wrong answer"
            ],
            "do": [
              "Compute average order value and total revenue from an orders index",
              "Compare cardinality vs a precise count and note the error",
              "Build a stats dashboard row: min, max, avg, and percentiles of latency"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Cardinality is approximate by design (HyperLogLog). For billing or compliance counts you need exact numbers; for dashboards, the approximation is fine and far cheaper."
          },
          {
            "t": "Bucket Aggregations: Terms and Histograms",
            "d": "Group-bys for search engines: terms, date histograms, ranges, and the shard_size gotcha.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "terms: top-N groupings and why counts can be slightly off",
              "date_histogram and histogram: time series and numeric buckets",
              "The shard_size trap: accuracy vs performance in distributed top-N"
            ],
            "do": [
              "Build a terms aggregation of top product categories",
              "Create a date_histogram of signups per day for the last 90 days",
              "Increase shard_size and observe the accuracy change on a skewed dataset"
            ],
            "tools": ["Elasticsearch", "Kibana Lens"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Terms aggregation counts are approximate across shards; each shard returns its local top N. If exact top-N matters, raise shard_size, and know you are trading memory for accuracy."
          },
          {
            "t": "Pipeline Aggregations",
            "d": "Aggregations on aggregations: derivatives, moving averages, and bucket selectors for trends.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Parent vs sibling pipelines: what each can see",
              "derivative and moving_avg: trend detection on time series",
              "bucket_selector: filtering buckets by computed conditions"
            ],
            "do": [
              "Compute week-over-week growth with a derivative pipeline",
              "Smooth a noisy metric with a moving average",
              "Alert on buckets where error rate exceeds a threshold with bucket_selector"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Pipeline aggregations cannot see individual documents, only bucket outputs. If you need document-level math, do it with a scripted metric or rethink the bucketing."
          },
          {
            "t": "Transforms: Pre-computed Analytics",
            "d": "Continuously pivot raw events into entity-centric indices: latest state per user, hourly rollups, forever.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Pivot transforms: group-by plus aggregations into a destination index",
              "Latest transforms: one document per entity with its newest state",
              "Continuous mode: transforms that keep up with incoming data"
            ],
            "do": [
              "Build a pivot transform: raw pageviews into per-user daily summaries",
              "Create a latest transform tracking each device's current status",
              "Run it continuously and verify the destination stays fresh"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Querying raw events for entity-level questions gets slower every day as data grows. Transforms pay the compute cost once at write time instead of on every dashboard load."
          },
          {
            "t": "Visualizing with Kibana: Discover, Lens, Dashboards",
            "d": "Turning queries and aggregations into dashboards people actually read: Lens, Discover, and alerting.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Discover: exploring raw documents and building KQL filters",
              "Lens: drag-and-drop visualizations backed by real aggregations",
              "Dashboards, drilldowns, and Kibana alerting rules"
            ],
            "do": [
              "Explore a logs dataset in Discover with KQL filters",
              "Build a dashboard: time series, top-N bar chart, and metric tiles",
              "Create an alert rule that fires when error rate crosses a threshold"
            ],
            "tools": ["Kibana"],
            "res": [
              ["Kibana", "https://www.elastic.co/kibana"]
            ],
            "tip": "A dashboard nobody looks at is decoration. Build dashboards around decisions: each panel should answer a question someone asks weekly, or delete the panel."
          }
        ]
      },
      {
        "t": "Vector and Hybrid Search",
        "d": "Semantic search with dense vectors, the inference API, hybrid retrieval, and scaling embeddings.",
        "lv": 3,
        "children": [
          {
            "t": "dense_vector and kNN Search",
            "d": "Embeddings as fields, HNSW graphs for speed: the mechanics of nearest-neighbor search in Elasticsearch.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "dense_vector fields: storing embeddings alongside your documents",
              "HNSW: the approximate nearest-neighbor graph and its parameters",
              "kNN query syntax: k, num_candidates, and similarity functions"
            ],
            "do": [
              "Index documents with precomputed embeddings in a dense_vector field",
              "Run a kNN query and tune num_candidates against recall",
              "Compare cosine, dot_product, and l2_norm on your data"
            ],
            "tools": ["Elasticsearch", "Python", "sentence-transformers"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "num_candidates too low silently returns bad neighbors; too high burns CPU. Tune it against a labeled recall set, not vibes, because wrong neighbors look plausible."
          },
          {
            "t": "Semantic Search with the Inference API",
            "d": "Let Elasticsearch handle embeddings: semantic_text fields, chunking, and the inference service.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "semantic_text: the field type that chunks, embeds, and indexes automatically",
              "The inference API: hosted embedding models without your own GPU",
              "Chunking strategies and why they decide retrieval quality"
            ],
            "do": [
              "Create an index with a semantic_text field and index long documents",
              "Run a semantic query and inspect the generated chunks",
              "Compare results against plain BM25 on ambiguous queries"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Note: the older elser inference service is deprecated in 9.x in favor of the elasticsearch service. Follow current docs, not old blog posts, or you will build on a dead end."
          },
          {
            "t": "Hybrid Search: Retrievers and RRF",
            "d": "BM25 plus vectors in one query: the retriever framework, reciprocal rank fusion, and rerankers.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Why hybrid: lexical for exact terms, vectors for meaning, neither alone is enough",
              "The retrievers API: standard, knn, and combining them",
              "RRF (reciprocal rank fusion): merging ranked lists without score calibration"
            ],
            "do": [
              "Build a retriever query combining BM25 and kNN with RRF",
              "Add a reranker stage and measure quality lift on test queries",
              "A/B the hybrid query against pure BM25 with a judgment list"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Fusing scores directly across BM25 and vector search is comparing apples to spaceships. RRF fuses ranks instead of scores, which is why it works without calibration."
          },
          {
            "t": "Quantization for Vector Scale",
            "d": "int8, int4, and BBQ: shrinking vector memory up to 32x while keeping recall high.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why vectors are expensive: memory per dimension times billions of docs",
              "Quantization options: int8_hnsw, int4_hnsw, and BBQ (better binary quantization)",
              "The recall-vs-memory trade-off and how to measure it"
            ],
            "do": [
              "Index the same vectors unquantized and with int8 quantization",
              "Measure memory per segment and recall@k for both",
              "Pick the quantization level your recall budget allows"
            ],
            "tools": ["Elasticsearch"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Quantize late in tuning, not first. Get retrieval quality right on full precision, then quantize and verify recall holds; debugging quality and compression at once is miserable."
          }
        ]
      },
      {
        "t": "Running in Production",
        "d": "Security, backups, monitoring, data lifecycle, and serverless: operating Elasticsearch for real.",
        "lv": 3,
        "children": [
          {
            "t": "Security: Authentication, Roles, API Keys",
            "d": "RBAC, API keys, and TLS: the security baseline every production cluster needs.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Built-in users, roles, and the principle of least privilege",
              "API keys: scoped, expirable credentials for applications",
              "TLS everywhere: transport and HTTP encryption between nodes and clients"
            ],
            "do": [
              "Create a role with read-only access to one index and a user holding it",
              "Issue an API key for an application with minimal privileges and an expiry",
              "Verify that the restricted user cannot read other indices or manage the cluster"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Using the elastic superuser in application code is how breaches happen. Every app gets its own API key with only the privileges it needs, and keys expire."
          },
          {
            "t": "Snapshots, Restore, and SLM",
            "d": "Backups that actually restore: snapshot repositories, lifecycle policies, and tested recovery.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Snapshot repositories: S3, GCS, Azure, or shared filesystems",
              "Incremental snapshots: why they are cheap and fast after the first",
              "SLM: automating snapshot schedules and retention"
            ],
            "do": [
              "Register an S3 (or filesystem) snapshot repository",
              "Take a snapshot, delete an index, and restore it",
              "Set up an SLM policy with daily snapshots and 30-day retention"
            ],
            "tools": ["Elasticsearch", "AWS S3"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "A backup you have never restored is a hope, not a backup. Restore to a scratch cluster quarterly, or discover your snapshots are broken during the actual disaster."
          },
          {
            "t": "Monitoring Cluster Health",
            "d": "_cat APIs, health indicators, disk watermarks, and Stack Monitoring: knowing trouble before users do.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Cluster health: green, yellow, red, and what each one really means",
              "Disk watermarks: the 85/90/95 percent thresholds that block writes",
              "Slow logs and the profile API: finding the queries that hurt"
            ],
            "do": [
              "Fill a disk past the flood-stage watermark on a test node and watch writes block",
              "Enable slow logs, run a heavy aggregation, and read the log entry",
              "Build a health dashboard: health status, unassigned shards, JVM pressure"
            ],
            "tools": ["Elasticsearch", "Kibana", "Grafana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Yellow health (unassigned replicas) is normal on a single node and an emergency in production. Know which signals matter for your topology before the pager goes off."
          },
          {
            "t": "Scaling: Tiers, ILM, and Data Lifecycle",
            "d": "Hot, warm, cold, frozen: moving aging data to cheaper storage automatically with ILM.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Data tiers: hot for fresh, warm/cold/frozen for aging data",
              "ILM policies: hot, rollover, shrink, force-merge, and delete phases",
              "Searchable snapshots: querying frozen data without rehydrating it"
            ],
            "do": [
              "Write an ILM policy: rollover at 50GB or 30 days, move to warm, delete after a year",
              "Attach it to a data stream and watch an index transition phases",
              "Estimate storage cost before and after tiering for a realistic retention plan"
            ],
            "tools": ["Elasticsearch", "Kibana"],
            "res": [
              ["Elasticsearch Documentation", "https://www.elastic.co/docs"]
            ],
            "tip": "Keeping a year of logs on hot SSDs is the most expensive Elasticsearch mistake. Most log data is never queried after a week; tier it down aggressively and keep hot for what is actually hot."
          },
          {
            "t": "Elasticsearch Serverless",
            "d": "The managed future: what changes when Elastic handles sharding, scaling, and ILM for you.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What serverless manages: sharding, replication, scaling, and node roles",
              "What changes: retention policies replace ILM, some APIs are unavailable",
              "The serverless vector database: purpose-built projects for AI workloads"
            ],
            "do": [
              "Spin up a serverless project and index documents without touching shard settings",
              "Compare available APIs against self-managed (note what is missing)",
              "Evaluate cost for your workload: serverless vs self-managed vs Elastic Cloud hosted"
            ],
            "tools": ["Elastic Cloud"],
            "res": [
              ["Elastic", "https://www.elastic.co"]
            ],
            "tip": "Serverless removes operational knobs, which is freedom until you need a knob that is gone. Verify your must-have APIs exist in serverless before migrating anything critical."
          }
        ]
      }
    ]
  }
});
