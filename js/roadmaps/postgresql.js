/* Atlas roadmap data: PostgreSQL (postgresql) */
ROADMAPS.push({
  "id": "postgresql",
  "title": "PostgreSQL",
  "icon": "\uD83D\uDC18",
  "color": "#3b82f6",
  "desc": "The world's most loved relational database, mastered end to end: everyday SQL, indexing and query plans, transactions and MVCC, replication, administration, and production performance tuning.",
  "kind": "role",
  "root": {
    "t": "PostgreSQL Engineering",
    "d": "From your first SELECT to running Postgres in production: SQL, indexing, transactions, replication, and tuning.",
    "children": [
      {
        "t": "Foundations: SQL from Zero",
        "d": "Get a server running, talk to it from the terminal, and learn the core read/write statements.",
        "lv": 1,
        "children": [
          {
            "t": "Why PostgreSQL",
            "d": "Why Postgres became the default serious database, and the cases where you should not reach for it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Where Postgres sits: relational, ACID, open-source, and deeply extensible",
              "Postgres vs MySQL vs SQLite: the honest trade-offs for real projects",
              "When Postgres is the wrong tool: pure key-value caching, offline-first mobile, petabyte-scale analytics"
            ],
            "do": [
              "Read the release notes of the current major version to see what actually changed",
              "List three apps you use and decide whether Postgres fits each one's data",
              "Compare one workload (search, geo, analytics) done inside Postgres vs an external service"
            ],
            "tools": ["postgresql.org"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ],
            "tip": "Beginners pick a database by popularity; seniors pick by data shape and access patterns. Postgres wins most rounds, not all of them."
          },
          {
            "t": "Installing & Running Postgres",
            "d": "Get a real server running locally, and learn the three ways teams actually run it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Local install vs Docker vs managed services (Neon, Supabase, RDS, Cloud SQL)",
              "What the data directory holds and why you never touch it directly",
              "Major versions and support windows: always run a supported major"
            ],
            "do": [
              "Run `docker run --name pg -e POSTGRES_PASSWORD=secret -d postgres:18`",
              "Connect with `psql -h localhost -U postgres` and create your first database",
              "Stop and restart the container and confirm your data survives"
            ],
            "tools": ["Docker", "psql"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ],
            "tip": "Pin the major version in your Docker tag. `postgres:latest` silently upgrading itself under you is how data \"disappears\"."
          },
          {
            "t": "psql: The Power Tool",
            "d": "The terminal client is the fastest way to talk to Postgres — learn it before any GUI.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Meta-commands: \\l, \\c, \\dt, \\d, \\x, \\timing and what each reveals",
              "Pager and output control so wide rows stay readable",
              "Running SQL files and scripts from psql with \\i and psql -f"
            ],
            "do": [
              "Connect and explore with \\l, \\dt, and \\d on every table you find",
              "Use `\\x on` to read wide rows and `\\timing` to feel real query cost",
              "Save a script to a .sql file and run it with `psql -f script.sql`"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "GUI tools hide the SQL they run. Learn psql first and the GUIs stay honest."
          },
          {
            "t": "SELECT: Reading Data",
            "d": "The statement that matters most at first — read exactly the columns and rows you want.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "SELECT list and FROM: name your columns instead of SELECT *",
              "WHERE with AND/OR/NOT and comparison operators",
              "ORDER BY, LIMIT, OFFSET — and why OFFSET gets expensive at scale"
            ],
            "do": [
              "Write 20 queries against a sample table using different WHERE combinations",
              "Sort by multiple columns and observe what NULLs do to the ordering",
              "Fetch page 3 of results with LIMIT/OFFSET, then time it on 100k rows"
            ],
            "tools": ["psql", "pgexercises"],
            "res": [
              ["PostgreSQL Exercises", "https://pgexercises.com/"],
              ["PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html"]
            ],
            "tip": "SELECT * in application code is a future bug: column order changes break you, and you pay for every byte you fetch."
          },
          {
            "t": "Filtering, Sorting & Cleanup Functions",
            "d": "Sharpen raw data inside the query itself with expressions and functions.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "String, numeric, and date/time functions in SELECT and WHERE",
              "LIKE and ILIKE for pattern matching",
              "DISTINCT and what deduplication really costs"
            ],
            "do": [
              "Format dates and concatenate strings in a report-style query",
              "Find rows matching patterns with LIKE and ILIKE",
              "Deduplicate a dirty column with DISTINCT and count what you lost"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Do data shaping in SQL, not in application loops — the database sits next to the data and is usually faster."
          },
          {
            "t": "DDL: Tables & Data Types",
            "d": "Design tables that store data correctly the first time.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "CREATE TABLE: columns, types, defaults, and ALTER TABLE later",
              "The types you actually use: integer/bigint, text, boolean, timestamptz, numeric, uuid, jsonb",
              "Why `text` beats `varchar(n)` in Postgres unless the limit is real business logic"
            ],
            "do": [
              "Create a schema for a small app: users, posts, comments",
              "Add columns with ALTER TABLE and sensible defaults",
              "Try inserting wrong-typed values and read the errors carefully"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Always use `timestamp with time zone` (timestamptz). `timestamp without time zone` silently breaks the moment your users span two time zones."
          },
          {
            "t": "Constraints: The Guardrails",
            "d": "Make the database refuse bad data so your application does not have to.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK",
              "Referential actions: ON DELETE CASCADE vs RESTRICT vs SET NULL",
              "Adding constraints to existing tables and validating them"
            ],
            "do": [
              "Add a foreign key with ON DELETE CASCADE and delete a parent row",
              "Add a CHECK constraint and try to violate it",
              "Inspect every constraint on a table with \\d"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "CASCADE deletes are convenient until they vaporize data you wanted. Default to RESTRICT; choose CASCADE deliberately."
          },
          {
            "t": "INSERT, UPDATE, DELETE",
            "d": "Write, change, and remove rows safely — with RETURNING as your receipt.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "INSERT (single row, multi-row, from SELECT), UPDATE, DELETE",
              "RETURNING: get the changed rows back in the same statement",
              "Why every UPDATE/DELETE needs a WHERE — and how to dry-run inside a transaction"
            ],
            "do": [
              "Insert 1000 rows with generate_series in one statement",
              "Run an UPDATE with RETURNING and confirm exactly what changed",
              "Wrap a risky DELETE in BEGIN/ROLLBACK first to preview its blast radius"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Before a production DELETE, run it as SELECT first. The 30 seconds you spend is cheaper than a restore."
          }
        ]
      },
      {
        "t": "Queries That Do Real Work",
        "d": "Joins, aggregation, subqueries, and the NULL traps — the daily toolkit of working with data.",
        "lv": 1,
        "children": [
          {
            "t": "JOINs",
            "d": "Combine tables correctly — the skill that separates SQL users from SQL owners.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "INNER, LEFT, RIGHT, FULL OUTER: what each keeps and what each drops",
              "Join conditions vs WHERE filters — it matters with outer joins",
              "Self joins and aliasing the same table twice"
            ],
            "do": [
              "Join users to posts with INNER and LEFT and compare the row counts",
              "Find users with no posts using LEFT JOIN ... WHERE post.id IS NULL",
              "Self-join an employees table to show each person's manager name"
            ],
            "tools": ["psql", "pgexercises"],
            "res": [
              ["PostgreSQL Exercises", "https://pgexercises.com/"]
            ],
            "tip": "If a LEFT JOIN returns fewer rows than expected, the filter probably belongs in the ON clause, not in WHERE."
          },
          {
            "t": "Aggregation: GROUP BY & HAVING",
            "d": "Turn a million rows into ten answers.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "COUNT, SUM, AVG, MIN, MAX — and what COUNT(*) vs COUNT(col) really counts",
              "GROUP BY semantics: one row per group",
              "HAVING filters groups; WHERE filters rows before grouping"
            ],
            "do": [
              "Compute per-user post counts and average ratings",
              "Filter groups with HAVING (users with more than 5 posts)",
              "Break a query by selecting a non-grouped column and read the error message"
            ],
            "tools": ["psql", "pgexercises"],
            "res": [
              ["PostgreSQL Exercises", "https://pgexercises.com/"]
            ],
            "tip": "COUNT(column) skips NULLs; COUNT(*) does not. Mixing them up is the classic \"why is my total wrong\" bug."
          },
          {
            "t": "Subqueries & EXISTS",
            "d": "Queries inside queries: when nesting is the clearest tool for the job.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Scalar, row, and table subqueries in SELECT, WHERE, and FROM",
              "IN vs EXISTS: semantics and performance differences",
              "Correlated subqueries and why they can be slow"
            ],
            "do": [
              "Rewrite an IN subquery as EXISTS and compare the plans",
              "Use a subquery in FROM as a derived table with an alias",
              "Find rows above the average with a scalar subquery"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "EXISTS short-circuits on the first match; IN materializes the whole set. On big tables that difference is real."
          },
          {
            "t": "NULLs & Three-Valued Logic",
            "d": "NULL is not zero, not empty, not false — and it quietly breaks boolean logic.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "NULL means 'unknown': comparisons with NULL return NULL, not true or false",
              "COALESCE, NULLIF, and IS NULL / IS NOT NULL",
              "How NULLs poison NOT IN and quietly skew aggregations"
            ],
            "do": [
              "Run `WHERE x NOT IN (1, 2, NULL)` and explain the empty result",
              "Fix it with NOT EXISTS or by filtering NULLs out",
              "Use COALESCE to give NULLs sane defaults in a report query"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "NOT IN with a single NULL in the list returns zero rows, always. This is the most common NULL bug in production SQL."
          },
          {
            "t": "UNION & Set Operations",
            "d": "Stack result sets vertically with UNION, INTERSECT, and EXCEPT.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "UNION vs UNION ALL: the hidden cost of deduplication",
              "INTERSECT and EXCEPT for set differences",
              "Column count and type compatibility rules"
            ],
            "do": [
              "Combine two reports with UNION ALL",
              "Find users in list A but not list B with EXCEPT"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tag": "opt",
            "tip": "UNION without ALL silently deduplicates — and silently pays the sort cost. Use UNION ALL unless you need the dedupe."
          },
          {
            "t": "Views",
            "d": "Save complex queries as named tables — with a clear-eyed view of their limits.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "CREATE VIEW: reusable, named queries",
              "Updatable views and their restrictions",
              "Materialized views: precomputed results with REFRESH"
            ],
            "do": [
              "Build a view for your most-joined query",
              "Create a materialized view for a slow report and REFRESH it",
              "Measure the refresh cost and decide on a refresh schedule"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "A regular view re-runs its query every time. If it is slow, you need a materialized view — or you need to fix the underlying query."
          }
        ]
      },
      {
        "t": "Advanced SQL",
        "d": "Window functions, JSONB, full-text search, and the statements that make Postgres feel like a superpower.",
        "lv": 2,
        "children": [
          {
            "t": "Common Table Expressions (WITH)",
            "d": "Name your subqueries and make monster queries readable.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "WITH: named, reusable query blocks chained in order",
              "Using CTEs in INSERT, UPDATE, and DELETE",
              "CTEs vs subqueries: readability first, performance nuances second"
            ],
            "do": [
              "Rewrite a 4-level nested query as chained CTEs",
              "Use a CTE in an UPDATE to compute values before writing them",
              "Write a data-modifying CTE that archives rows and then deletes them"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "A CTE used once is just a named subquery — and that is fine. Readability is the feature; the optimizer handles the rest."
          },
          {
            "t": "Window Functions",
            "d": "The single biggest leap in SQL skill: compute across rows without collapsing them.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "OVER (), PARTITION BY, ORDER BY inside the window definition",
              "ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD",
              "Running totals and moving averages with frame clauses"
            ],
            "do": [
              "Rank products per category with RANK() vs DENSE_RANK() and compare",
              "Compute month-over-month growth with LAG()",
              "Build a running total with SUM() OVER (ORDER BY date)"
            ],
            "tools": ["psql", "pgexercises"],
            "res": [
              ["PostgreSQL Exercises", "https://pgexercises.com/"],
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Window functions run AFTER WHERE and GROUP BY. To filter on a window result, wrap it in a subquery — you cannot put it in WHERE."
          },
          {
            "t": "JSON & JSONB",
            "d": "Postgres speaks JSON natively — flexible documents inside a relational engine.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "json vs jsonb: text storage vs parsed binary (use jsonb)",
              "Operators: ->, ->>, #>, @>, ? and jsonb_path_query",
              "Indexing JSONB with GIN for fast document queries"
            ],
            "do": [
              "Store semi-structured payloads in a jsonb column",
              "Query nested fields with ->> and filter documents with @>",
              "Add a GIN index and watch a JSONB filter get fast"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "JSONB is for flexible payloads, not for dodging schema design. If every query drills into the same fields, those deserve real columns."
          },
          {
            "t": "Upserts & MERGE",
            "d": "Insert-or-update in one atomic statement — no more check-then-insert races.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "INSERT ... ON CONFLICT DO UPDATE / DO NOTHING",
              "MERGE for conditional multi-action syncs",
              "Why application-level 'check then insert' breaks under concurrency"
            ],
            "do": [
              "Build an idempotent event ingest with ON CONFLICT DO NOTHING",
              "Sync a staging table into production with MERGE"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "ON CONFLICT needs a matching unique index or constraint — the conflict target is not optional."
          },
          {
            "t": "Full-Text Search",
            "d": "Real search ranking inside Postgres — often good enough to skip Elasticsearch.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "tsvector and tsquery: documents and queries as search types",
              "to_tsvector, plainto_tsquery, and the @@ operator",
              "Ranking with ts_rank and GIN indexes for speed"
            ],
            "do": [
              "Build a searchable product catalog with to_tsvector",
              "Rank results with ts_rank and highlight the matches",
              "Add a GIN index and benchmark against LIKE '%term%'"
            ],
            "tools": ["psql", "pg_trgm"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Full-text search needs a language config ('english'). Without stemming, 'running' never matches 'run'."
          },
          {
            "t": "Arrays & Advanced Types",
            "d": "Native arrays, ranges, and enums for the cases that do not fit scalar columns.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Array columns: ANY, unnest(), and array functions",
              "Range types with exclusion constraints for non-overlapping bookings",
              "Enums and domains for controlled vocabularies"
            ],
            "do": [
              "Store tags as a text[] column and query them with ANY",
              "Use a daterange with an exclusion constraint to prevent overlapping bookings"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/"]
            ],
            "tag": "opt",
            "tip": "Arrays are great for read-mostly tags. If you constantly join or filter on elements, a junction table is usually better."
          },
          {
            "t": "Recursive CTEs",
            "d": "Walk trees and graphs in pure SQL: org charts, categories, bills of materials.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Anchor member + recursive member + UNION ALL structure",
              "Termination: how the recursion stops (and infinite-loop protection)",
              "Path tracking and depth limiting"
            ],
            "do": [
              "Walk an employee hierarchy to list every report under a manager",
              "Build a category breadcrumb path with a recursive query"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tag": "opt",
            "tip": "Always cap recursion depth while developing. A missing termination condition turns into a very long coffee break."
          }
        ]
      }
      ,
      {
        "t": "Data Modeling & Schema Design",
        "d": "Structure data so facts live in exactly one place — and know when to break the rules on purpose.",
        "lv": 2,
        "children": [
          {
            "t": "Normalization: 1NF to BCNF",
            "d": "Structure tables so every fact lives in exactly one place.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies)",
              "Functional dependencies and why they drive the design",
              "Surrogate vs natural keys and their trade-offs"
            ],
            "do": [
              "Take a denormalized spreadsheet-style table and normalize it to 3NF",
              "Identify the functional dependencies first, then split the tables"
            ],
            "tools": ["psql", "dbdiagram.io"],
            "res": [
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tip": "Normalize until it hurts, denormalize until it works — but only after you can prove the normalized version is too slow."
          },
          {
            "t": "Sequences, Identity & UUIDs",
            "d": "Pick primary keys that survive scale: identity columns and time-ordered UUIDv7.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "GENERATED ALWAYS AS IDENTITY vs SERIAL (and why identity wins)",
              "uuidv7: time-ordered, index-friendly UUIDs via gen_random_uuid_v7()",
              "Why random UUIDv4 primary keys fragment indexes"
            ],
            "do": [
              "Create one table with an identity PK and one with a uuidv7 PK",
              "Insert 100k rows into each and compare index sizes"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "UUIDv7 sorts by creation time, so new rows append to the index instead of scattering. Use it for distributed-system IDs."
          },
          {
            "t": "Denormalization Trade-offs",
            "d": "Break the rules on purpose — when reads are king and writes are rare.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Precomputed aggregates, cached counts, and redundant columns",
              "Keeping denormalized data correct: triggers vs application writes",
              "Measuring whether the added complexity pays for itself"
            ],
            "do": [
              "Add a cached post_count to users, maintained by a trigger",
              "Compare query cost before and after denormalization"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tag": "opt",
            "tip": "Every denormalized field is a future inconsistency bug. Maintain it in the database with triggers, not in app code, or it will drift."
          },
          {
            "t": "Schema Design Patterns",
            "d": "Real-world patterns: audit trails, soft deletes, and entity-attribute-value done right.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Audit and history tables maintained with triggers",
              "Soft deletes with deleted_at and their query-plumbing cost",
              "When to use (and avoid) entity-attribute-value"
            ],
            "do": [
              "Add an audit trigger that logs every change to a history table",
              "Implement soft delete and measure the index and filter overhead"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tip": "Soft deletes infect every query with `WHERE deleted_at IS NULL`. Prefer hard deletes with an audit table unless the business truly needs undelete."
          },
          {
            "t": "Partitioning Design",
            "d": "Split giant tables by range or list so queries and maintenance stay fast.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Declarative partitioning: range, list, and hash strategies",
              "Partition pruning: how the planner skips irrelevant partitions",
              "Partition-wise operations: detach old partitions instead of slow DELETEs"
            ],
            "do": [
              "Partition an events table by month",
              "Run a query and verify pruning with EXPLAIN",
              "Detach and drop an old partition"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Partition for maintenance (archiving, vacuum) as much as for speed. Time-series tables without partitioning become unmanageable."
          }
        ]
      },
      {
        "t": "Indexes & Query Plans",
        "d": "The heart of Postgres performance: the right index, and reading what the planner actually does.",
        "lv": 2,
        "children": [
          {
            "t": "B-tree Indexes: The Default",
            "d": "Understand the index that answers 90% of queries.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How B-trees make equality and range lookups fast",
              "Composite indexes and the leftmost-prefix rule",
              "When an index hurts: write overhead and planner misfires"
            ],
            "do": [
              "Create an index and compare EXPLAIN before and after",
              "Build a composite index and test a query using only the second column"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "An index on (a, b) does not efficiently serve queries filtering only on b — order columns by how you actually query."
          },
          {
            "t": "Reading EXPLAIN Plans",
            "d": "The single most valuable DBA skill: read what the planner actually does.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Seq Scan vs Index Scan vs Bitmap Heap Scan",
              "Nested Loop, Hash Join, Merge Join: when each wins",
              "EXPLAIN ANALYZE: actual rows vs estimates, and what a 10x misestimate means"
            ],
            "do": [
              "Run EXPLAIN (ANALYZE, BUFFERS) on your slowest query",
              "Paste a plan into explain.dalibo.com and read the timeline",
              "Fix a misestimate with ANALYZE and re-check the plan"
            ],
            "tools": ["psql", "explain.dalibo.com"],
            "res": [
              ["Dalibo Explain Visualizer", "https://explain.dalibo.com/"],
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "A plan that estimates 10 rows but returns 100,000 is lying to the planner. Fix statistics with ANALYZE before adding indexes."
          },
          {
            "t": "Covering Indexes & Index-Only Scans",
            "d": "Answer queries from the index alone — never touch the table.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "INCLUDE columns: cover the query without widening the key",
              "Index-only scans and the visibility map requirement",
              "Trade-off: bigger indexes, faster reads, slower writes"
            ],
            "do": [
              "Add INCLUDE columns to turn an index scan into an index-only scan",
              "Verify Heap Fetches drops to 0 after VACUUM"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Index-only scans need an up-to-date visibility map. If heap fetches stay high, VACUUM the table — the index was fine."
          },
          {
            "t": "Partial & Expression Indexes",
            "d": "Index exactly what you query: subsets of rows and computed values.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Partial indexes: a WHERE clause on CREATE INDEX",
              "Expression indexes: index lower(email), not email",
              "Matching the query expression exactly, or the index stays invisible"
            ],
            "do": [
              "Create a partial index on active users only",
              "Index lower(email) and query it — then query email directly and watch the miss"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Expression indexes only fire when the query uses the exact same expression. lower(email) in the index means lower(email) in the query — not email."
          },
          {
            "t": "GIN: JSONB & Full-Text Indexing",
            "d": "GIN indexes make document search and full-text queries fly.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "GIN structure: keys mapped to posting lists",
              "jsonb_ops vs jsonb_path_ops operator classes",
              "GIN for full-text search and array containment"
            ],
            "do": [
              "Create a GIN index on a jsonb column and query with @>",
              "Compare jsonb_ops and jsonb_path_ops sizes and query support"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "jsonb_path_ops is smaller and faster but only supports @>. If you use ?, ?&, or #>, you need the default jsonb_ops."
          },
          {
            "t": "GiST & BRIN",
            "d": "Specialist indexes: geometry and ranges with GiST, huge time-series with BRIN.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "GiST: extensible and lossy — PostGIS and range types",
              "BRIN: block ranges, tiny indexes for naturally ordered data",
              "When BRIN beats B-tree: append-only time series"
            ],
            "do": [
              "Create a BRIN index on a timestamp column of an append-only table",
              "Compare its size against a B-tree on the same column"
            ],
            "tools": ["psql", "PostGIS"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tag": "opt",
            "tip": "BRIN indexes are a thousand times smaller than B-trees on ordered data — and useless on unordered data. Order is the whole trick."
          },
          {
            "t": "Index Maintenance & Bloat",
            "d": "Indexes rot. Learn to detect bloat and rebuild without locking the table.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Bloat: dead index entries left by updates and deletes",
              "REINDEX CONCURRENTLY and CREATE INDEX CONCURRENTLY",
              "Monitoring index usage with pg_stat_user_indexes and finding unused indexes"
            ],
            "do": [
              "Find unused indexes with pg_stat_user_indexes",
              "Rebuild a bloated index with REINDEX CONCURRENTLY",
              "Drop a duplicate index and measure the write improvement"
            ],
            "tools": ["psql", "pg_stat_statements"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Unused indexes still cost on every write. Audit index usage quarterly — deleting indexes is performance work too."
          }
        ]
      },
      {
        "t": "Transactions, MVCC & Locking",
        "d": "How Postgres keeps data correct under concurrency — and what breaks when you misunderstand it.",
        "lv": 3,
        "children": [
          {
            "t": "ACID & Transactions",
            "d": "BEGIN, COMMIT, ROLLBACK — and what atomicity really guarantees.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Atomicity, Consistency, Isolation, Durability in Postgres terms",
              "Explicit transactions and savepoints",
              "Autocommit: every statement is already a transaction by default"
            ],
            "do": [
              "Run a multi-statement money transfer inside BEGIN/COMMIT",
              "Use a SAVEPOINT to roll back only part of a transaction"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "A transaction that spans user think-time holds locks and creates bloat. Keep transactions short: do the thinking before BEGIN."
          },
          {
            "t": "MVCC: How Postgres Sees Data",
            "d": "Multi-version concurrency: readers never block writers, and why.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Row versions, xmin/xmax, and transaction snapshots",
              "Why readers never block writers (and writers never block readers)",
              "The cost: dead tuples and the need for VACUUM"
            ],
            "do": [
              "Open two sessions: update in one, read in the other, observe the old snapshot",
              "Inspect row versions with `SELECT xmin, xmax, * FROM t`"
            ],
            "tools": ["psql", "pageinspect"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "MVCC means every UPDATE is really a delete-plus-insert. Heavy-update tables bloat — design for it with fillfactor and autovacuum tuning."
          },
          {
            "t": "Isolation Levels",
            "d": "Read committed vs repeatable read vs serializable — pick with your eyes open.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Read Committed, Repeatable Read, Serializable: what each prevents",
              "Anomalies: dirty reads, non-repeatable reads, phantoms, serialization failures",
              "Serializable with SSI: correctness at the cost of application retries"
            ],
            "do": [
              "Reproduce a lost update under Read Committed",
              "Run the same workload under Serializable and handle the 40001 retry in code"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Serializable does not mean 'no concurrency bugs for free' — it means 'retry on serialization failure'. Your app must handle 40001."
          },
          {
            "t": "Locking & Deadlocks",
            "d": "Row locks, table locks, advisory locks — and untangling deadlocks.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Row-level vs table-level locks, and which statements take which",
              "SELECT ... FOR UPDATE for safe read-modify-write",
              "Deadlock detection: how Postgres picks a victim"
            ],
            "do": [
              "Create a deadlock in two sessions and read the DETAIL message",
              "Use pg_advisory_lock for an application-level mutex"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Deadlocks are almost always lock-ordering bugs: two transactions locking the same rows in opposite order. Fix the order, not the timeout."
          },
          {
            "t": "Autovacuum & Table Health",
            "d": "VACUUM is not optional maintenance — it is part of the engine.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What VACUUM reclaims and why autovacuum exists",
              "Tuning autovacuum for write-heavy tables",
              "Transaction ID wraparound: the failure mode that stops the database"
            ],
            "do": [
              "Check pg_stat_user_tables for dead tuples and last autovacuum run",
              "Tune autovacuum_vacuum_scale_factor on a hot table"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "If autovacuum cannot keep up, the answer is almost never 'turn it off' — it is 'make it more aggressive' or 'partition the table'."
          }
        ]
      },
      {
        "t": "Administration",
        "d": "Run a server like a professional: config, security, backups, upgrades, and observability.",
        "lv": 2,
        "children": [
          {
            "t": "Server Configuration",
            "d": "postgresql.conf without fear: the dozen settings that actually matter.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "shared_buffers, work_mem, maintenance_work_mem, effective_cache_size",
              "Checkpoint and WAL settings and what they control",
              "Changing settings: reload vs restart, and ALTER SYSTEM"
            ],
            "do": [
              "Tune a dev server with sensible starting values for its RAM",
              "Change a setting with ALTER SYSTEM and reload",
              "Verify the active value with SHOW and pg_settings"
            ],
            "tools": ["psql", "pg_settings"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Copy-pasting 'tuned' configs from blogs is how you get 2GB work_mem on a 4GB box and OOM kills. Understand each knob before turning it."
          },
          {
            "t": "Roles, Permissions & Row Security",
            "d": "Authentication to row-level policies: lock the data down properly.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Roles, GRANT/REVOKE, and the public schema gotcha",
              "pg_hba.conf: who can connect, from where, and how",
              "Row-Level Security policies for multi-tenant applications"
            ],
            "do": [
              "Create a read-only role and grant SELECT on specific tables",
              "Add an RLS policy so tenants only see their own rows",
              "Switch to SCRAM-SHA-256 authentication (MD5 is deprecated)"
            ],
            "tools": ["psql", "pg_hba.conf"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "RLS only protects you if you test as the restricted role. Test every policy as that role — policies fail open in your head, not in the database."
          },
          {
            "t": "Extensions: PostGIS, pgvector & Friends",
            "d": "Postgres is a platform: bolt on GIS, vectors, and fuzzy search.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "CREATE EXTENSION and the extension ecosystem",
              "PostGIS for geospatial data, pgvector for embeddings and ANN search",
              "pg_trgm for fuzzy text matching"
            ],
            "do": [
              "Install pgvector, store embeddings, and run a nearest-neighbor query with an HNSW index",
              "Find similar strings with pg_trgm similarity"
            ],
            "tools": ["psql", "PostGIS", "pgvector"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"],
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tip": "Extensions are per-database, not per-cluster. Installing pgvector on the wrong database is a rite of passage — check \\dx."
          },
          {
            "t": "Monitoring & Observability",
            "d": "See inside the running server: slow queries, waits, and bloat.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "pg_stat_statements: the top-N slow query view",
              "pg_stat_activity: what is running right now",
              "Logging slow queries and alerting on the right signals"
            ],
            "do": [
              "Enable pg_stat_statements and find your top 5 queries by total time",
              "Query pg_stat_activity during a load test and spot waiting sessions"
            ],
            "tools": ["pg_stat_statements", "pgAnalyze", "pgBadger"],
            "res": [
              ["pgAnalyze", "https://pganalyze.com/"],
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Monitor query latency percentiles and connection counts, not just CPU. Postgres dies from lock waits and connection storms while CPU looks fine."
          },
          {
            "t": "Backup & Point-in-Time Recovery",
            "d": "pg_dump for logic, WAL archiving for point-in-time — and restores you actually test.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "pg_dump and pg_restore: logical backups and their limits",
              "Physical backups with pg_basebackup plus WAL archiving",
              "PITR: replaying WAL to recover to any second in the past"
            ],
            "do": [
              "Take a pg_dump and restore it into a fresh cluster",
              "Set up WAL archiving and perform a PITR to 10 minutes ago",
              "Time your restore — your RTO is the restore time, not the backup time"
            ],
            "tools": ["pg_dump", "pg_restore", "pg_basebackup", "Barman"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "An untested backup is a hope, not a backup. Restore to a scratch server monthly — restores fail in ways backups never do."
          },
          {
            "t": "Upgrading Major Versions",
            "d": "Move between major versions with pg_upgrade — fast, but always with a rehearsal.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "pg_upgrade --link vs --copy vs dump and restore",
              "Pre-upgrade checks: extensions, collations, deprecated features",
              "Statistics carried across upgrades and when reindexing is required"
            ],
            "do": [
              "Clone your data to a staging server and run pg_upgrade there first",
              "Run the generated analyze and vacuum scripts after the upgrade"
            ],
            "tools": ["pg_upgrade", "Docker"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Upgrade the replica first in production. And reindex full-text and trigram indexes after collation changes — they silently return wrong results otherwise."
          }
        ]
      },
      {
        "t": "Replication, Scaling & Tuning",
        "d": "Survive load and failure: pooling, replicas, failover, and a repeatable tuning method.",
        "lv": 3,
        "children": [
          {
            "t": "Connection Pooling with PgBouncer",
            "d": "Postgres connections are expensive — pool them before you scale anything else.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Why one connection per request kills Postgres (process-per-connection model)",
              "PgBouncer modes: session, transaction, statement",
              "Sizing pools: pool_size, max_client_conn, reserve_pool"
            ],
            "do": [
              "Put PgBouncer in transaction mode in front of your app",
              "Load-test with and without the pooler and compare max connections"
            ],
            "tools": ["PgBouncer", "pgbench"],
            "res": [
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tip": "Transaction pooling breaks session-level features (prepared statements, advisory locks, SET). Know what your app relies on before switching modes."
          },
          {
            "t": "Streaming Replication & Failover",
            "d": "Physical replicas for high availability: WAL streaming, promotion, and failover drills.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Primary and standby with WAL streaming and replication slots",
              "Synchronous vs asynchronous commit: durability vs latency",
              "Failover with promotion — and why you need fencing to avoid split brain"
            ],
            "do": [
              "Build a primary plus standby with Docker Compose",
              "Kill the primary and promote the standby",
              "Measure replication lag under load"
            ],
            "tools": ["Docker", "Patroni", "repmgr"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Replication without a tested failover is theater. Run the failover drill quarterly — DNS, connection strings, and app behavior all have opinions."
          },
          {
            "t": "Logical Replication",
            "d": "Replicate tables, not clusters: selective, version-flexible, upgrade-friendly.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Publications and subscriptions: table-level replication",
              "Logical vs physical: what you gain (selectivity) and lose (DDL, sequences)",
              "Use cases: zero-downtime major upgrades and reporting replicas"
            ],
            "do": [
              "Replicate two tables (not the whole database) to a second server",
              "Use logical replication to upgrade across major versions with minimal downtime"
            ],
            "tools": ["psql"],
            "res": [
              ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Logical replication does not copy sequences or schema changes. After cutover, set sequence values and replay DDL manually — or your IDs collide."
          },
          {
            "t": "The Query Tuning Workflow",
            "d": "A repeatable method for making slow queries fast — no guessing.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Measure first: pg_stat_statements before EXPLAIN",
              "The loop: plan, statistics, index, rewrite, re-measure",
              "When NOT to tune: caching, pagination redesign, or accepting the cost"
            ],
            "do": [
              "Take a real slow query through the full workflow and document each step",
              "Prove the improvement with before and after timings"
            ],
            "tools": ["pg_stat_statements", "explain.dalibo.com", "pgbench"],
            "res": [
              ["Dalibo Explain Visualizer", "https://explain.dalibo.com/"]
            ],
            "tip": "Tune the query you measured, not the query you suspect. pg_stat_statements top-by-total-time is the only honest starting point."
          },
          {
            "t": "Sharding & Distributed Postgres",
            "d": "When one server is not enough: Citus and the real cost of sharding.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why Postgres does not shard natively (and what Citus adds)",
              "Distribution columns and co-location",
              "The cost: cross-shard queries, transactions, and operational complexity"
            ],
            "do": [
              "Set up a Citus cluster in Docker and distribute a table",
              "Run a cross-shard join and read the plan"
            ],
            "tools": ["Citus", "Docker"],
            "res": [
              ["PostgreSQL Wiki", "https://wiki.postgresql.org/"]
            ],
            "tag": "opt",
            "tip": "Sharding is the last resort, not the first. Most 'we need to shard' problems are actually 'we need an index, a cache, or partitioning' problems."
          }
        ]
      }
    ]
  }
});
