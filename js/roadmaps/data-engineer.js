/* Atlas roadmap data: Data Engineer (data-engineer) */
ROADMAPS.push({
  "id": "data-engineer",
  "title": "Data Engineer",
  "icon": "🗄️",
  "color": "#0ea5e9",
  "desc": "Build the data highways: SQL, warehouses, pipelines, streaming, and the quality practices that keep data trustworthy.",
  "kind": "role",
  "root": {
    "t": "Data Engineer",
    "d": "Design and operate the systems that move data from raw sources to trusted, analytics-ready products.",
    "children": [
      {
        "t": "Programming & Linux Foundations",
        "d": "The engineer's toolkit: Python for data tasks, Git for sanity, Linux and networking for the machines you run on.",
        "lv": 1,
        "children": [
          {
            "t": "Python for Data Tasks",
            "d": "Python as a pipeline language: scripting ingestion, transforming data, and automating the boring parts.",
            "lv": 1,
            "time": "~2w",
            "tip": "Write pipeline code like someone else will debug it at 3am. Logging and idempotency are not optional extras.",
            "learn": [
              "Core Python: functions, modules, exceptions, and file handling",
              "Working with APIs: requests, pagination, retries, and rate limits",
              "Virtual environments and packaging scripts others can run"
            ],
            "do": [
              "Write a script that pulls data from a public API with pagination and saves it as Parquet",
              "Add logging, retries with backoff, and make the script idempotent",
              "Package it so a teammate can run it with one command"
            ],
            "tools": ["Python", "requests", "uv"],
            "res": [
              ["Official Python Tutorial", "https://docs.python.org/3/tutorial/"],
              ["uv documentation", "https://docs.astral.sh/uv/"]
            ]
          },
          {
            "t": "Git & Version Control",
            "d": "Track everything: pipeline code, SQL models, and configs. Branches, reviews, and recovery from mistakes.",
            "lv": 1,
            "time": "~5h",
            "tip": "Commit pipeline changes like production code, because they are. An unreviewed SQL change can corrupt a warehouse table.",
            "learn": [
              "Commits, branches, and pull requests: the collaboration workflow",
              "Resolving conflicts and rewriting history safely",
              "What belongs in version control: code yes, credentials never"
            ],
            "do": [
              "Initialize a repo for a pipeline project with a proper .gitignore",
              "Practice branching, merging, and resolving a conflict",
              "Set up a pre-commit hook that lints your SQL and Python"
            ],
            "tools": ["Git", "GitHub", "pre-commit"],
            "res": [
              ["Git documentation", "https://git-scm.com/doc"],
              ["pre-commit", "https://pre-commit.com/"]
            ]
          },
          {
            "t": "Linux Command Line",
            "d": "Your pipelines live on Linux. Navigate, manipulate files, and debug processes with confidence.",
            "lv": 1,
            "time": "~1w",
            "tip": "Learn to read a log file with grep, awk, and less before reaching for a dashboard. The CLI never lies to you.",
            "learn": [
              "Filesystem navigation, permissions, and text processing (grep, sed, awk)",
              "Processes, cron scheduling, and environment variables",
              "SSH, tmux, and working on remote machines"
            ],
            "do": [
              "Process a 1GB CSV with awk and pipes without opening it",
              "Schedule a script with cron and verify it ran from the logs",
              "Debug a failed job using only ps, journalctl, and log files"
            ],
            "tools": ["Bash", "cron", "tmux"],
            "res": [
              ["Linux command line primer", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Command_line"]
            ]
          },
          {
            "t": "Networking Fundamentals",
            "d": "Data moves over networks. IPs, DNS, ports, and HTTP: enough to debug connectivity like a professional.",
            "lv": 1,
            "time": "~6h",
            "tip": "When a pipeline cannot reach a database, check DNS, then ports, then credentials, in that order. It is almost never the credentials first.",
            "learn": [
              "IP addresses, DNS, and ports: how services find each other",
              "HTTP methods, status codes, and REST API basics",
              "Firewalls, VPCs, and why 'connection refused' happens"
            ],
            "do": [
              "Use curl to inspect an API: headers, status codes, and payloads",
              "Diagnose a blocked port with telnet/nc and read the error correctly",
              "Draw the network path of data from source API to your warehouse"
            ],
            "tools": ["curl", "dig", "Wireshark"],
            "res": [
              ["MDN: HTTP overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP"]
            ]
          },
          {
            "t": "Distributed Systems Basics",
            "d": "One machine is not enough. Partitioning, replication, and consistency: the ideas behind every big data tool.",
            "lv": 2,
            "time": "~1w",
            "tip": "Distributed systems trade consistency for availability and partition tolerance. Know which one your tool sacrificed.",
            "learn": [
              "Partitioning and sharding: splitting data across machines",
              "Replication: durability and read scaling through copies",
              "CAP theorem and consistency models in plain language"
            ],
            "do": [
              "Explain how Kafka partitions and Spark executors parallelize work",
              "Simulate a partition: what happens when two nodes disagree",
              "Compare strong vs eventual consistency with real product examples"
            ],
            "tools": ["Apache Kafka", "Apache Spark"],
            "res": [
              ["Kafka documentation", "https://kafka.apache.org/documentation/"],
              ["Designing Data-Intensive Applications (book site)", "https://dataintensive.net/"]
            ]
          },
          {
            "t": "Data Structures & Algorithms",
            "d": "Enough CS to write efficient pipeline code: complexity thinking and the structures behind databases.",
            "lv": 2,
            "time": "~1w",
            "tip": "Understand B-trees and hash indexes and suddenly database performance tuning stops being magic.",
            "learn": [
              "Big-O: estimating cost before you run the job",
              "Hash tables, trees, and heaps: the structures databases are built on",
              "Sorting and searching at scale"
            ],
            "do": [
              "Benchmark a nested loop join vs a hash join on growing data",
              "Explain how a database index speeds up a WHERE clause",
              "Profile a slow transformation and fix the algorithmic bottleneck"
            ],
            "tools": ["Python", "pandas"],
            "res": [
              ["Official Python Tutorial: data structures", "https://docs.python.org/3/tutorial/datastructures.html"]
            ]
          }
        ]
      },
      {
        "t": "SQL & Relational Databases",
        "d": "SQL is the data engineer's mother tongue. Master queries, then the database internals that make them fast.",
        "lv": 1,
        "children": [
          {
            "t": "SQL Core: SELECT, JOIN, GROUP BY",
            "d": "Read and shape data fluently: filtering, joining tables, and aggregating like a professional analyst.",
            "lv": 1,
            "time": "~2w",
            "tip": "Always check row counts after a join. A join that silently duplicates or drops rows is the most common data bug in existence.",
            "learn": [
              "SELECT, WHERE, ORDER BY: precise data retrieval",
              "JOIN types and the set logic behind each",
              "GROUP BY, HAVING, and aggregation functions"
            ],
            "do": [
              "Write 30 queries against a practice database, from filters to 4-table joins",
              "Answer business questions using only GROUP BY aggregations",
              "Find and fix three queries with incorrect row counts"
            ],
            "tools": ["PostgreSQL", "DuckDB", "DBeaver"],
            "res": [
              ["SQLBolt: interactive SQL lessons", "https://sqlbolt.com/"],
              ["SQLZoo", "https://sqlzoo.net/"]
            ]
          },
          {
            "t": "Subqueries, CTEs & Window Functions",
            "d": "Advanced SQL: readable complex queries with CTEs and analytics with window functions.",
            "lv": 2,
            "time": "~1w",
            "tip": "Write CTEs like chapters: each one named, each one testable alone. Debugging a 200-line nested query is a special kind of pain.",
            "learn": [
              "CTEs: composable, readable, debuggable query building blocks",
              "Window functions: ROW_NUMBER, RANK, LAG, running totals",
              "Correlated subqueries and EXISTS: when subqueries earn their keep"
            ],
            "do": [
              "Build a cohort retention query with window functions",
              "Rewrite a nested subquery as chained CTEs and compare readability",
              "Compute sessionization of event data with LAG and window framing"
            ],
            "tools": ["PostgreSQL", "DuckDB"],
            "res": [
              ["PostgreSQL: window functions", "https://www.postgresql.org/docs/current/tutorial-window.html"],
              ["DuckDB documentation", "https://duckdb.org/docs/"]
            ]
          },
          {
            "t": "Transactions & ACID",
            "d": "Keep data correct under concurrency: transactions, isolation levels, and what ACID actually guarantees.",
            "lv": 2,
            "time": "~5h",
            "tip": "Understand isolation levels before you blame 'the database' for phantom reads. Most anomalies are just the default isolation doing its job.",
            "learn": [
              "ACID: atomicity, consistency, isolation, durability",
              "Isolation levels: read committed to serializable and their anomalies",
              "Locking basics and deadlocks in pipeline workloads"
            ],
            "do": [
              "Run two concurrent transactions and observe a dirty read at read-uncommitted",
              "Demonstrate a deadlock and resolve it by consistent lock ordering",
              "Choose an isolation level for an ETL upsert workload and justify it"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL: transaction isolation", "https://www.postgresql.org/docs/current/transaction-iso.html"]
            ]
          },
          {
            "t": "Indexing & Query Performance",
            "d": "Make queries fast: B-tree indexes, EXPLAIN plans, and the indexing decisions that separate juniors from seniors.",
            "lv": 2,
            "time": "~1w",
            "tip": "Read the EXPLAIN plan before adding indexes. Guessing at indexes is how tables end up with twelve that nobody uses.",
            "learn": [
              "B-tree indexes: how they turn scans into seeks",
              "EXPLAIN ANALYZE: reading query plans like a map",
              "Composite indexes, covering indexes, and when indexes hurt writes"
            ],
            "do": [
              "Take a slow query, read its EXPLAIN plan, and fix it with the right index",
              "Measure the write overhead of adding five indexes to a table",
              "Design a composite index for a real analytical query pattern"
            ],
            "tools": ["PostgreSQL", "pgAdmin"],
            "res": [
              ["PostgreSQL: indexes", "https://www.postgresql.org/docs/current/indexes.html"],
              ["Use The Index, Luke", "https://use-the-index-luke.com/"]
            ]
          },
          {
            "t": "Data Modeling & Normalization",
            "d": "Design tables that stay correct: normalization, keys, and modeling for transactional vs analytical workloads.",
            "lv": 2,
            "time": "~1w",
            "tip": "Normalize for writes, denormalize for reads. The right model depends on the workload, not on dogma.",
            "learn": [
              "Normal forms 1NF-3NF: eliminating redundancy and anomalies",
              "Primary and foreign keys: the integrity backbone",
              "OLTP vs OLAP modeling: why warehouses deliberately denormalize"
            ],
            "do": [
              "Normalize a messy spreadsheet into 3NF tables with proper keys",
              "Design a schema for an e-commerce app: orders, products, customers",
              "Identify three normalization violations in a real-world schema"
            ],
            "tools": ["PostgreSQL", "dbdiagram"],
            "res": [
              ["PostgreSQL documentation", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "OLTP vs OLAP & CAP Theorem",
            "d": "Two database worlds: transactional systems vs analytical systems, and the distributed trade-offs behind them.",
            "lv": 1,
            "time": "~5h",
            "tip": "Never run heavy analytics on your production OLTP database. That is what replicas and warehouses are for.",
            "learn": [
              "OLTP: many small writes, normalized, millisecond latency",
              "OLAP: massive scans, denormalized, throughput over latency",
              "CAP theorem: the consistency-availability trade-off in distributed stores"
            ],
            "do": [
              "Classify ten real databases as OLTP, OLAP, or hybrid with justification",
              "Explain why your warehouse and your app database are different products",
              "Map three NoSQL databases to their CAP trade-off choices"
            ],
            "tools": ["PostgreSQL", "ClickHouse"],
            "res": [
              ["ClickHouse documentation", "https://clickhouse.com/docs"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Storage, Warehouses & Lakes",
        "d": "Where data lives at scale: operational databases, NoSQL, warehouses, lakes, and the lakehouse in between.",
        "lv": 2,
        "children": [
          {
            "t": "PostgreSQL in Practice",
            "d": "The world's most loved open-source database, operated properly: setup, tuning, and production habits.",
            "lv": 2,
            "time": "~1w",
            "tip": "Learn EXPLAIN, VACUUM, and pg_stat_statements early. They solve most 'Postgres is slow' mysteries.",
            "learn": [
              "Installation, roles, and authentication that is not trust-all",
              "VACUUM, autovacuum, and why Postgres needs housekeeping",
              "Backups with pg_dump and point-in-time recovery concepts"
            ],
            "do": [
              "Install PostgreSQL, create roles with least-privilege access",
              "Load a 10M-row dataset and tune it until analytical queries fly",
              "Take a backup, drop a table, and restore it"
            ],
            "tools": ["PostgreSQL", "pgAdmin", "Docker"],
            "res": [
              ["PostgreSQL documentation", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "NoSQL Databases",
            "d": "Beyond tables: key-value, document, wide-column, and graph stores, and knowing when each wins.",
            "lv": 2,
            "time": "~1w",
            "tip": "NoSQL means 'not only SQL'. Pick the data model that matches your access pattern, not the trendiest logo.",
            "learn": [
              "The four NoSQL families and their ideal workloads",
              "Redis: caching, queues, and real-time counters",
              "MongoDB documents and Cassandra wide-columns for scale"
            ],
            "do": [
              "Build a caching layer with Redis in front of a slow query",
              "Model the same data in MongoDB and PostgreSQL; compare query ergonomics",
              "Explain when you would choose Cassandra over Postgres"
            ],
            "tools": ["Redis", "MongoDB", "Cassandra"],
            "res": [
              ["Redis documentation", "https://redis.io/docs/"],
              ["MongoDB documentation", "https://www.mongodb.com/docs/"]
            ]
          },
          {
            "t": "Data Warehouse Concepts",
            "d": "The analytics database: what a warehouse is, how it differs from a database, and the ELT pattern.",
            "lv": 2,
            "time": "~1w",
            "tip": "A warehouse is not a bigger database. Columnar storage and decoupled compute change every performance assumption.",
            "learn": [
              "Warehouse vs database vs lake: the storage spectrum",
              "Columnar storage and MPP: why aggregations are fast",
              "ELT pattern: load raw, transform inside the warehouse"
            ],
            "do": [
              "Load the same dataset into Postgres and DuckDB; compare a big aggregation",
              "Design a warehouse loading strategy: full refresh vs incremental",
              "Estimate warehouse costs for a realistic workload"
            ],
            "tools": ["DuckDB", "Snowflake", "BigQuery"],
            "res": [
              ["DuckDB documentation", "https://duckdb.org/docs/"],
              ["Snowflake documentation", "https://docs.snowflake.com/"]
            ]
          },
          {
            "t": "Dimensional Modeling: Star, Snowflake & SCD",
            "d": "Model for analysis: facts, dimensions, and the slowly-changing-dimension patterns that track history.",
            "lv": 2,
            "time": "~1w",
            "tip": "Get your grain right first. Every fact table argument is really an argument about the grain.",
            "learn": [
              "Facts vs dimensions: measures and the context that describes them",
              "Star vs snowflake schemas: the denormalization trade-off",
              "SCD Types 1, 2, 3: handling dimensions that change over time"
            ],
            "do": [
              "Design a star schema for a retail business: sales facts, five dimensions",
              "Implement SCD Type 2 versioning for a customer dimension in SQL",
              "Write the ten most common business queries against your schema"
            ],
            "tools": ["dbt", "PostgreSQL"],
            "res": [
              ["dbt documentation", "https://docs.getdbt.com/docs/introduction"]
            ]
          },
          {
            "t": "Cloud Warehouses: BigQuery, Snowflake, Redshift",
            "d": "Warehouses as a service: serverless analytics, separation of storage and compute, and cost control.",
            "lv": 2,
            "time": "~1w",
            "tip": "Learn the pricing model before the SQL dialect. An unpartitioned full-table scan is a billing event, not just a slow query.",
            "learn": [
              "BigQuery, Snowflake, Redshift: architectures and sweet spots",
              "Partitioning and clustering: pruning data before you pay to scan it",
              "Cost control: quotas, budgets, and query governance"
            ],
            "do": [
              "Run analytics on a public BigQuery dataset with the free tier",
              "Partition a table and measure the bytes-scanned difference",
              "Set up a cost alert and a query timeout policy"
            ],
            "tools": ["BigQuery", "Snowflake", "dbt"],
            "res": [
              ["BigQuery documentation", "https://cloud.google.com/bigquery/docs"],
              ["Snowflake documentation", "https://docs.snowflake.com/"]
            ]
          },
          {
            "t": "Data Lakes & Lakehouse: Delta Lake, Iceberg",
            "d": "Cheap object storage with warehouse reliability: ACID on Parquet, schema evolution, and time travel.",
            "lv": 3,
            "time": "~1w",
            "tip": "A data lake without table formats is a data swamp. Delta Lake or Iceberg is what makes the lake queryable and trustworthy.",
            "learn": [
              "Data lake zones: raw, curated, and consumption layers",
              "Delta Lake and Iceberg: ACID transactions on object storage",
              "Schema evolution, time travel, and upserts on the lake"
            ],
            "do": [
              "Create a Delta Lake table, run an upsert, and time-travel to the previous version",
              "Evolve a schema (add a column) without rewriting history",
              "Compare querying Parquet directly vs through a table format"
            ],
            "tools": ["Delta Lake", "Apache Iceberg", "Spark", "MinIO"],
            "res": [
              ["Delta Lake", "https://delta.io/"],
              ["Apache Iceberg docs", "https://iceberg.apache.org/docs/latest/"]
            ]
          }
        ]
      },
      {
        "t": "Batch Pipelines: ETL/ELT",
        "d": "Move data on schedule: extraction, transformation, and the tools that orchestrate it all.",
        "lv": 2,
        "children": [
          {
            "t": "ETL vs ELT",
            "d": "Two philosophies of moving data: transform before loading, or load raw and transform in the warehouse.",
            "lv": 2,
            "time": "~4h",
            "tip": "ELT won for analytics because warehouses got cheap and powerful. But ETL still rules when sources need cleansing before landing.",
            "learn": [
              "ETL: extract, transform in flight, load clean",
              "ELT: load raw first, transform with warehouse compute",
              "Choosing: data volume, source constraints, and team skills"
            ],
            "do": [
              "Build the same pipeline both ways and compare code, cost, and debuggability",
              "Decide ETL vs ELT for three realistic scenarios with justification",
              "Document the data contracts between your extract and load stages"
            ],
            "tools": ["Python", "dbt", "Airflow"],
            "res": [
              ["dbt: what is ELT", "https://docs.getdbt.com/docs/introduction"]
            ]
          },
          {
            "t": "Data Formats: CSV, JSON, Parquet, Avro",
            "d": "The containers data travels in: text vs binary, row vs columnar, and schema evolution that does not break pipelines.",
            "lv": 2,
            "time": "~5h",
            "tip": "Standardize on Parquet for analytics storage and Avro/Protobuf for streaming. CSV is for humans, not pipelines.",
            "learn": [
              "CSV and JSON: human-readable, slow, schema-less pitfalls",
              "Parquet: columnar, compressed, and the analytics default",
              "Avro and Protobuf: schema evolution for event streams"
            ],
            "do": [
              "Convert a 1GB CSV to Parquet and compare size plus query speed",
              "Evolve an Avro schema (add optional field) and read old data with the new schema",
              "Benchmark JSON vs Parquet for a selective aggregation"
            ],
            "tools": ["Parquet", "Avro", "pyarrow"],
            "res": [
              ["Apache Parquet docs", "https://parquet.apache.org/docs/"],
              ["Apache Avro docs", "https://avro.apache.org/docs/"]
            ]
          },
          {
            "t": "Apache Airflow: DAGs & Scheduling",
            "d": "The industry-standard orchestrator: define pipelines as DAGs, schedule them, retry them, and watch them run.",
            "lv": 2,
            "time": "~2w",
            "tip": "Keep tasks idempotent and atomic. A task that half-succeeds on retry is worse than one that cleanly fails.",
            "learn": [
              "DAGs, tasks, and operators: the Airflow mental model",
              "Scheduling, backfills, and catchup: time semantics that confuse everyone",
              "Sensors, XComs, and the TaskFlow API for clean DAGs"
            ],
            "do": [
              "Write a DAG that extracts from an API, transforms, and loads to Postgres daily",
              "Trigger a backfill for a missed week and verify idempotency",
              "Add Slack/email alerting on task failure"
            ],
            "tools": ["Apache Airflow", "Docker"],
            "res": [
              ["Airflow documentation", "https://airflow.apache.org/docs/"],
              ["Airflow tutorial", "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html"]
            ]
          },
          {
            "t": "dbt: Transform with SQL",
            "d": "Analytics engineering: version-controlled SQL models with tests, docs, and lineage built in.",
            "lv": 2,
            "time": "~1w",
            "tip": "Write a test for every assumption your dashboard makes. dbt tests are the cheapest data quality you will ever buy.",
            "learn": [
              "Models, refs, and sources: the dbt project structure",
              "Tests: uniqueness, not-null, relationships, and custom assertions",
              "Docs and lineage: the auto-generated map of your warehouse"
            ],
            "do": [
              "Build a dbt project: staging, intermediate, and mart models",
              "Add tests until a deliberately broken model fails loudly",
              "Generate the docs site and trace lineage for one mart table"
            ],
            "tools": ["dbt", "DuckDB", "Git"],
            "res": [
              ["dbt documentation", "https://docs.getdbt.com/docs/introduction"]
            ]
          },
          {
            "t": "Apache Spark Basics",
            "d": "Distributed processing when one machine is not enough: RDDs, DataFrames, and jobs that scale horizontally.",
            "lv": 2,
            "time": "~2w",
            "tip": "Learn Spark's lazy evaluation first. Nothing executes until an action, and that explains 90% of beginner confusion.",
            "learn": [
              "Lazy evaluation: transformations vs actions",
              "DataFrame API: the pandas-like interface that scales",
              "Partitions, shuffles, and why wide transformations are expensive"
            ],
            "do": [
              "Process 10GB with PySpark on a local cluster",
              "Compare a shuffle-heavy job vs a broadcast join on runtime",
              "Read the Spark UI and identify the slowest stage"
            ],
            "tools": ["Apache Spark", "PySpark"],
            "res": [
              ["Spark documentation", "https://spark.apache.org/docs/latest/"]
            ]
          },
          {
            "t": "Data Ingestion Tools: Airbyte, Fivetran, dlt",
            "d": "Do not hand-roll every connector. Managed ingestion tools and the build-vs-buy decision for pipelines.",
            "lv": 2,
            "time": "~1w",
            "tip": "Build custom connectors only for sources nobody supports. Maintaining API integrations is a full-time job you do not want.",
            "learn": [
              "Connector-based ingestion: schemas, sync modes, and incremental loads",
              "Airbyte and dlt for self-hosted; Fivetran for managed",
              "Change data capture (CDC): streaming database changes with Debezium"
            ],
            "do": [
              "Sync a SaaS API to Postgres with Airbyte or dlt",
              "Set up incremental sync and verify only new rows move",
              "Evaluate build-vs-buy for one custom source with a cost estimate"
            ],
            "tools": ["Airbyte", "dlt", "Debezium"],
            "res": [
              ["Airbyte docs", "https://docs.airbyte.com/"],
              ["dlt docs", "https://dlthub.com/docs/intro"]
            ],
            "tag": "opt"
          }
        ]
      }
      ,
      {
        "t": "Streaming & Real-Time Data",
        "d": "Data that never sleeps: message brokers, stream processing, and pipelines measured in milliseconds.",
        "lv": 2,
        "children": [
          {
            "t": "Batch vs Streaming",
            "d": "Two processing paradigms: when hourly jobs suffice and when you need data in seconds.",
            "lv": 2,
            "time": "~4h",
            "tip": "Do not build streaming because it sounds impressive. If the business decides hourly, batch is simpler, cheaper, and more reliable.",
            "learn": [
              "Latency vs completeness: the fundamental streaming trade-off",
              "Use cases: fraud detection and live dashboards vs daily reporting",
              "Lambda vs kappa architectures in one paragraph each"
            ],
            "do": [
              "Classify ten data products as batch or streaming with latency requirements",
              "Estimate the cost difference for one use case done both ways",
              "Write the decision doc you would show a manager"
            ],
            "tools": ["Apache Kafka", "Apache Flink"],
            "res": [
              ["Confluent: streaming vs batch", "https://www.confluent.io/learn/batch-vs-stream-processing/"]
            ]
          },
          {
            "t": "Apache Kafka Fundamentals",
            "d": "The distributed log at the heart of real-time data: topics, partitions, producers, and consumers.",
            "lv": 2,
            "time": "~2w",
            "tip": "Partitions are the unit of parallelism. Too few and you cannot scale; too many and you drown in overhead. Start with the math.",
            "learn": [
              "Topics, partitions, and offsets: the log abstraction",
              "Producers and consumers: delivery semantics from at-most to exactly-once",
              "Consumer groups, rebalancing, and retention policies"
            ],
            "do": [
              "Run Kafka locally, create a topic, produce and consume events",
              "Build a consumer group with three consumers and watch rebalancing",
              "Replay a topic from an old offset to rebuild downstream state"
            ],
            "tools": ["Apache Kafka", "Docker"],
            "res": [
              ["Kafka documentation", "https://kafka.apache.org/documentation/"]
            ]
          },
          {
            "t": "Stream Processing Concepts",
            "d": "Thinking in streams: event time vs processing time, windows, watermarks, and stateful computation.",
            "lv": 3,
            "time": "~1w",
            "tip": "Event time, not processing time, is the truth. Late data is a fact of life; watermarks are how you cope with it.",
            "learn": [
              "Event time vs processing time: why the distinction matters",
              "Windows: tumbling, sliding, and session windows",
              "Watermarks and allowed lateness: handling the late and the lost"
            ],
            "do": [
              "Implement tumbling and sliding windows over an event stream",
              "Inject late and out-of-order events; observe watermark behavior",
              "Design windowing for a fraud-detection use case"
            ],
            "tools": ["Apache Flink", "Apache Beam"],
            "res": [
              ["Flink documentation", "https://flink.apache.org/learn/"],
              ["Beam programming guide", "https://beam.apache.org/documentation/"]
            ]
          },
          {
            "t": "Spark Structured Streaming",
            "d": "Streaming with the DataFrame API you already know: micro-batches, triggers, and stateful aggregations.",
            "lv": 3,
            "time": "~1w",
            "tip": "Start with micro-batch semantics you understand. True one-record-at-a-time streaming can come later.",
            "learn": [
              "Structured Streaming model: unbounded tables and incremental queries",
              "Triggers, watermarks, and output modes",
              "Stateful operations and checkpointing for fault tolerance"
            ],
            "do": [
              "Stream Kafka events into Spark and write rolling aggregates to a sink",
              "Kill the job mid-run and recover from the checkpoint",
              "Tune trigger intervals and measure end-to-end latency"
            ],
            "tools": ["Spark Structured Streaming", "Apache Kafka"],
            "res": [
              ["Spark Structured Streaming guide", "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html"]
            ]
          },
          {
            "t": "Message Queues: RabbitMQ, SQS",
            "d": "Not everything needs Kafka. Task queues and pub-sub for work distribution and decoupled services.",
            "lv": 2,
            "time": "~5h",
            "tip": "Use a queue for work distribution, a log for event history. Mixing them up is the classic messaging mistake.",
            "learn": [
              "Queues vs logs: competing consumers vs replayable history",
              "RabbitMQ: exchanges, routing keys, and acknowledgments",
              "SQS and SNS: managed messaging on AWS"
            ],
            "do": [
              "Build a task queue with RabbitMQ: producer, workers, acknowledgments",
              "Demonstrate message redelivery when a worker crashes mid-task",
              "Compare SQS and Kafka for one use case"
            ],
            "tools": ["RabbitMQ", "AWS SQS"],
            "res": [
              ["RabbitMQ documentation", "https://www.rabbitmq.com/docs"],
              ["AWS SQS docs", "https://docs.aws.amazon.com/sqs/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Real-Time Pipeline Project",
            "d": "Prove it: an end-to-end streaming pipeline from event source to live dashboard.",
            "lv": 3,
            "time": "~1w",
            "tip": "Instrument everything: lag, throughput, and error rates. A streaming pipeline you cannot observe is a pipeline you cannot trust.",
            "learn": [
              "End-to-end design: source, broker, processor, sink, serving",
              "Exactly-once thinking: idempotent sinks and transactional writes",
              "Observability: consumer lag as the vital sign of stream health"
            ],
            "do": [
              "Stream synthetic click events through Kafka into a real-time aggregation",
              "Serve results to a live dashboard updating every few seconds",
              "Chaos-test: kill a consumer and verify recovery without data loss"
            ],
            "tools": ["Apache Kafka", "Flink", "ClickHouse", "Grafana"],
            "res": [
              ["Confluent documentation", "https://docs.confluent.io/"]
            ],
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Containers, CI/CD & IaC",
        "d": "Run pipelines like software: containers, automated testing and deployment, and infrastructure as code.",
        "lv": 3,
        "children": [
          {
            "t": "Docker for Data Engineers",
            "d": "Package pipelines so they run identically everywhere: images, volumes, and multi-container setups.",
            "lv": 2,
            "time": "~1w",
            "tip": "Pin every base image by digest, not tag. 'latest' today is not 'latest' tomorrow, and your pipeline will notice.",
            "learn": [
              "Images, containers, and layers: the Docker mental model",
              "Dockerfiles for pipeline jobs: small, pinned, and reproducible",
              "Docker Compose: local multi-service environments"
            ],
            "do": [
              "Containerize a Python ETL job with a pinned slim base image",
              "Spin up Postgres plus your job with Docker Compose",
              "Shrink an image and measure the before/after"
            ],
            "tools": ["Docker", "Docker Compose"],
            "res": [
              ["Docker documentation", "https://docs.docker.com"]
            ]
          },
          {
            "t": "Kubernetes Basics",
            "d": "Orchestrate containers at scale: pods, deployments, and running data workloads on K8s.",
            "lv": 3,
            "time": "~1w",
            "tip": "Learn what Kubernetes gives you (scheduling, self-healing) before YAML-diving. The abstractions exist to solve real pain.",
            "learn": [
              "Pods, deployments, and services: the core objects",
              "ConfigMaps, secrets, and persistent volumes for data workloads",
              "Jobs and CronJobs: the K8s-native way to run pipelines"
            ],
            "do": [
              "Deploy a containerized ETL job as a Kubernetes CronJob",
              "Mount secrets properly (never in the image, never in git)",
              "Debug a CrashLoopBackOff using only kubectl logs and describe"
            ],
            "tools": ["Kubernetes", "kubectl", "Helm"],
            "res": [
              ["Kubernetes documentation", "https://kubernetes.io/docs/"],
              ["Helm docs", "https://helm.sh/docs/"]
            ]
          },
          {
            "t": "CI/CD with GitHub Actions",
            "d": "Test every change automatically: lint SQL and Python, run pipeline tests, and deploy with confidence.",
            "lv": 2,
            "time": "~1w",
            "tip": "Your first CI job should be the one that catches the bug that bit you last week. Automate the pain you actually feel.",
            "learn": [
              "Workflows, jobs, and runners: the GitHub Actions model",
              "Testing data pipelines: unit tests for transforms, contract tests for schemas",
              "Deployment pipelines: staging promotion for dbt and Airflow"
            ],
            "do": [
              "Add a workflow that lints SQL and Python on every pull request",
              "Run dbt tests in CI against a test warehouse",
              "Build a deploy workflow that ships an Airflow DAG change safely"
            ],
            "tools": ["GitHub Actions", "dbt", "pytest"],
            "res": [
              ["GitHub Actions docs", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Infrastructure as Code with Terraform",
            "d": "Define warehouses, buckets, and IAM in code: reproducible infrastructure with reviewable changes.",
            "lv": 3,
            "time": "~1w",
            "tip": "Start with remote state on day one. Local state files are how teams learn about locking the hard way.",
            "learn": [
              "Declarative infrastructure: resources, providers, and state",
              "Modules and workspaces: reusable, environment-aware configs",
              "Plan before apply: reviewing infrastructure changes like code"
            ],
            "do": [
              "Provision an S3 bucket, IAM role, and warehouse resources with Terraform",
              "Refactor into a module and deploy to dev and prod workspaces",
              "Import an existing manually-created resource into state"
            ],
            "tools": ["Terraform", "AWS", "OpenTofu"],
            "res": [
              ["Terraform documentation", "https://developer.hashicorp.com/terraform/docs"],
              ["OpenTofu docs", "https://opentofu.org/docs/"]
            ]
          },
          {
            "t": "Monitoring & Alerting",
            "d": "Know before your stakeholders do: pipeline health metrics, log aggregation, and alerts that respect sleep.",
            "lv": 3,
            "time": "~6h",
            "tip": "Alert on symptoms users feel (stale data, failed jobs), not on every metric you can collect. Alert fatigue kills on-call.",
            "learn": [
              "The four pipeline signals: freshness, volume, schema, and distribution",
              "Prometheus and Grafana: metrics collection and visualization",
              "Alert design: severity levels, runbooks, and escalation"
            ],
            "do": [
              "Instrument a pipeline with freshness and row-count checks",
              "Build a Grafana dashboard for pipeline health",
              "Write a runbook for the three most common failures"
            ],
            "tools": ["Prometheus", "Grafana", "PagerDuty"],
            "res": [
              ["Prometheus documentation", "https://prometheus.io/docs/"],
              ["Grafana documentation", "https://grafana.com/docs/"]
            ]
          },
          {
            "t": "Pipeline Testing Strategies",
            "d": "Test data pipelines like software: unit, integration, and data contract tests that catch breakage early.",
            "lv": 3,
            "time": "~5h",
            "tip": "Test the transform logic with fixtures, and test the data with contracts. Code tests and data tests are different jobs.",
            "learn": [
              "Unit testing transforms with pytest and fixtures",
              "Data contract testing: schema and expectation checks on outputs",
              "Integration testing with ephemeral test environments"
            ],
            "do": [
              "Write pytest tests for a transformation function with edge-case fixtures",
              "Add Great Expectations or dbt tests to a pipeline",
              "Set up a CI job that runs the full test suite on test data"
            ],
            "tools": ["pytest", "Great Expectations", "dbt"],
            "res": [
              ["pytest documentation", "https://docs.pytest.org/"],
              ["Great Expectations docs", "https://docs.greatexpectations.io/"]
            ]
          }
        ]
      },
      {
        "t": "Data Quality, Governance & Serving",
        "d": "Trusted data is a product: quality frameworks, lineage, privacy, security, and serving data to its consumers.",
        "lv": 3,
        "children": [
          {
            "t": "Data Quality Frameworks",
            "d": "Systematic trust: dimensions of data quality, Great Expectations, and quality as a pipeline stage.",
            "lv": 3,
            "time": "~1w",
            "tip": "Start with the checks that would have caught your last incident. Quality frameworks grow best from real scars.",
            "learn": [
              "Quality dimensions: accuracy, completeness, consistency, timeliness, validity",
              "Great Expectations: expectations as executable documentation",
              "Soda and dbt tests: lighter-weight alternatives and when they fit"
            ],
            "do": [
              "Profile a production-like table and write expectations for every column",
              "Wire expectation suites into a pipeline as a blocking validation stage",
              "Build a data quality dashboard tracking pass rates over time"
            ],
            "tools": ["Great Expectations", "Soda", "dbt"],
            "res": [
              ["Great Expectations docs", "https://docs.greatexpectations.io/"],
              ["Soda", "https://www.soda.io/"]
            ]
          },
          {
            "t": "Data Lineage & Catalogs",
            "d": "Know where every column came from: lineage tracking and catalogs that make data discoverable.",
            "lv": 3,
            "time": "~1w",
            "tip": "Lineage pays for itself the first time someone asks 'who else uses this column' before a breaking change.",
            "learn": [
              "Column-level lineage: tracing transformations end to end",
              "OpenLineage and Marquez: open standards for lineage collection",
              "Data catalogs: DataHub and OpenMetadata for discovery and ownership"
            ],
            "do": [
              "Emit OpenLineage events from an Airflow DAG into Marquez",
              "Set up DataHub and document ownership for ten key tables",
              "Trace a dashboard metric back to its raw sources through the lineage graph"
            ],
            "tools": ["OpenLineage", "Marquez", "DataHub"],
            "res": [
              ["OpenLineage", "https://openlineage.io/"],
              ["DataHub docs", "https://datahubproject.io/docs/"]
            ]
          },
          {
            "t": "Data Governance & Privacy (GDPR)",
            "d": "Handle personal data lawfully: GDPR essentials, retention, deletion, and privacy by design in pipelines.",
            "lv": 2,
            "time": "~5h",
            "tip": "Design for deletion from the start. Retrofitting right-to-erasure into a pipeline built without it is miserable.",
            "learn": [
              "GDPR core: lawful basis, data minimization, and subject rights",
              "Retention policies and the right to erasure in pipeline design",
              "PII classification, masking, and tokenization strategies"
            ],
            "do": [
              "Classify PII in a sample dataset and apply masking rules",
              "Implement a deletion workflow that propagates erasure downstream",
              "Write a data retention policy for a realistic pipeline"
            ],
            "tools": ["dbt", "Apache Ranger"],
            "res": [
              ["GDPR full text", "https://gdpr-info.eu/"]
            ]
          },
          {
            "t": "Security: Encryption & Access Control",
            "d": "Protect data in motion and at rest: encryption, secrets management, and least-privilege access.",
            "lv": 3,
            "time": "~5h",
            "tip": "Secrets do not belong in code, images, or chat logs. If you can grep a password, so can an attacker.",
            "learn": [
              "Encryption at rest and in transit: what your cloud already does vs what you must do",
              "Secrets management: Vault and cloud secret managers",
              "RBAC and least privilege for warehouses, buckets, and orchestrators"
            ],
            "do": [
              "Move hardcoded credentials to a secret manager and rotate one",
              "Design RBAC roles for analyst, engineer, and admin on a warehouse",
              "Audit a pipeline for credential leaks with a secret scanner"
            ],
            "tools": ["HashiCorp Vault", "AWS Secrets Manager"],
            "res": [
              ["Vault documentation", "https://developer.hashicorp.com/vault/docs"],
              ["AWS Secrets Manager", "https://docs.aws.amazon.com/secretsmanager/"]
            ]
          },
          {
            "t": "Data Serving: Reverse ETL & BI",
            "d": "Close the loop: push warehouse data back into business tools and serve analysts with BI.",
            "lv": 2,
            "time": "~1w",
            "tip": "Serve from modeled marts, not raw tables. The warehouse is your API; the mart layer is its contract.",
            "learn": [
              "Reverse ETL: syncing warehouse data to CRMs and marketing tools",
              "Semantic layers: consistent metric definitions across tools",
              "BI tools: Superset, Metabase, and Power BI for self-service"
            ],
            "do": [
              "Sync a customer segment from the warehouse to a mock SaaS destination",
              "Build a semantic model with consistent metric definitions",
              "Create a self-service dashboard on top of your mart tables"
            ],
            "tools": ["Hightouch", "Census", "Apache Superset", "dbt"],
            "res": [
              ["Hightouch docs", "https://hightouch.com/docs"],
              ["Superset docs", "https://superset.apache.org/docs/intro/"]
            ]
          },
          {
            "t": "End-to-End Capstone",
            "d": "The full data engineering lifecycle in one project: ingest, model, orchestrate, test, monitor, and serve.",
            "lv": 3,
            "time": "~2w",
            "tip": "Document architecture decisions as you go. Future-you interviewing will thank present-you for the diagrams.",
            "learn": [
              "Architecture design: choosing components with written trade-offs",
              "Production hardening: idempotency, retries, monitoring, and alerts",
              "Handoff readiness: docs, runbooks, and onboarding material"
            ],
            "do": [
              "Design and build a complete pipeline: API ingestion to warehouse marts",
              "Add tests, monitoring, lineage, and documentation throughout",
              "Demo the system live and publish the architecture write-up"
            ],
            "tools": ["Airflow", "dbt", "PostgreSQL", "Docker", "Great Expectations"],
            "res": [
              ["Airflow documentation", "https://airflow.apache.org/docs/"],
              ["dbt documentation", "https://docs.getdbt.com/docs/introduction"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
