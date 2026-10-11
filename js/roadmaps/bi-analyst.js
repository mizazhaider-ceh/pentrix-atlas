/* Atlas roadmap data: BI Analyst (bi-analyst) */
ROADMAPS.push({
  "id": "bi-analyst",
  "title": "BI Analyst",
  "icon": "🧭",
  "color": "#4f46e5",
  "desc": "Bridge business and data: KPI trees, data modeling, warehouse concepts, and dashboards that run the company.",
  "kind": "role",
  "root": {
    "t": "BI Analyst",
    "d": "The compass between raw data and business decisions.",
    "children": [
      {
        "t": "What BI Actually Is",
        "d": "The discipline, the role, and where it sits in the org.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Business Intelligence",
            "d": "The systems and practices that turn data into decisions.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "BI as a loop: collect → model → visualize → decide → measure, then repeat",
              "BI vs analytics vs data science: BI serves recurring business decisions; data science explores the unknown",
              "Self-service BI: empowering business users without creating metric chaos",
              "The modern BI stack: sources → warehouse → semantic layer → BI tool"
            ],
            "do": [
              "Map the BI loop onto a company you know: who decides what, with which reports?",
              "List 5 recurring business decisions and the data each needs",
              "Sketch a modern BI stack diagram from memory"
            ],
            "tools": ["Pen & paper", "Tableau", "Power BI"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "BI is not 'making dashboards.' Dashboards are the output; the job is making recurring decisions better."
          },
          {
            "t": "Why BI Matters",
            "d": "The business case for doing BI well.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Single source of truth: ending the era of three teams with three different revenue numbers",
              "Decision latency: how fast good data shortens the idea-to-action cycle",
              "Democratization: why the best BI puts answers in everyone's hands, not just analysts'",
              "The cost of bad BI: dashboard graveyards and decisions made on gut feel"
            ],
            "do": [
              "Interview someone in business: what numbers do they check weekly and why?",
              "Find a story of a company that won (or lost) on data-driven decisions",
              "Write a 3-sentence pitch for BI investment to a skeptical CFO"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ]
          },
          {
            "t": "BI Analyst vs Data Analyst vs Data Scientist",
            "d": "Three roles, three missions. Know which seat you're in.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "BI analyst: owns recurring reporting, KPI definitions, and the semantic layer for the business",
              "Data analyst: ad-hoc deep dives and exploratory analysis on specific questions",
              "Data scientist: predictive models and experiments; heavier statistics and ML",
              "The overlaps are real — titles vary by company, but the missions differ"
            ],
            "do": [
              "Compare 3 job postings (one per title) and tabulate the skill differences",
              "Decide which mission excites you most and write down why",
              "Find someone with each title on LinkedIn and read their 'about' section"
            ],
            "tools": ["LinkedIn"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "Don't pick a title; pick a mission. 'BI analyst' at one company is 'data analyst' at another."
          },
          {
            "t": "The BI Analyst's Responsibilities",
            "d": "What you actually do Monday to Friday.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Requirements gathering: translating 'we need a dashboard' into defined metrics",
              "Metric definition and ownership: writing the one true definition of 'active user'",
              "Dashboard building and maintenance: shipping is 20%, upkeep is 80%",
              "Enablement: training business users and answering 'why does this number look wrong?'"
            ],
            "do": [
              "Write a mock requirements doc for a sales KPI dashboard",
              "Draft a metric definition (name, formula, grain, owner, caveats) for 'monthly active user'",
              "List the weekly/monthly maintenance tasks a BI team performs"
            ],
            "tools": ["Google Docs", "Tableau"],
            "res": [
              ["dbt", "https://dbt.com/"]
            ]
          },
          {
            "t": "Skills of a Great BI Analyst",
            "d": "The T-shape: deep in data, broad in business.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Technical core: SQL, data modeling, one BI tool, statistics basics",
              "Business core: metrics thinking, domain curiosity, stakeholder empathy",
              "Communication: the multiplier — the best analysis unshared is worthless",
              "The learning order: SQL first, then modeling, then visualization polish"
            ],
            "do": [
              "Rate yourself 1-5 on each skill and pick your first gap to close",
              "Build a 90-day learning plan from this roadmap's categories",
              "Find one BI community (forum, Slack, local meetup) and join it"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          }
        ]
      },
      {
        "t": "Business & Metrics Literacy",
        "d": "Think in KPIs before you query a single table.",
        "lv": 1,
        "children": [
          {
            "t": "Metrics vs KPIs",
            "d": "Every KPI is a metric, but most metrics are not KPIs.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Metric: anything you measure. KPI: a metric tied to a strategic objective with a target and an owner",
              "Good KPI anatomy: clear definition, target, timeframe, owner, and action when missed",
              "Vanity metrics vs actionable metrics: page views vs activation rate",
              "KPI anti-patterns: too many KPIs, KPIs nobody owns, KPIs that never change behavior"
            ],
            "do": [
              "Take 10 metrics from a SaaS business and argue which 3 deserve KPI status",
              "Write full KPI definitions (formula, target, owner, cadence) for a webshop",
              "Audit a dashboard: label each number as KPI, supporting metric, or vanity"
            ],
            "tools": ["Pen & paper", "Google Sheets"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "If a KPI moves and nobody does anything different, it's not a KPI — it's a decoration."
          },
          {
            "t": "KPI Trees & Driver Trees",
            "d": "Decompose big goals into levers someone can actually pull.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Driver trees: revenue = visitors × conversion × average order value, then decompose each branch",
              "MECE decomposition: mutually exclusive, collectively exhaustive — no gaps, no overlaps",
              "Leading vs lagging indicators: inputs you control vs outcomes you observe",
              "Using the tree for root-cause analysis: walk down the branches when the top number moves"
            ],
            "do": [
              "Build a driver tree for an e-commerce company's revenue down to 3 levels",
              "Mark each leaf as leading or lagging and assign a plausible owner",
              "Simulate a 10% drop at the top and trace which branch you'd investigate first"
            ],
            "tools": ["Miro", "Pen & paper"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "Executives love driver trees because they turn 'revenue is down' into 'here are the three levers we can pull this quarter.'"
          },
          {
            "t": "North Star & Input Metrics",
            "d": "One guiding metric, many controllable inputs.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "North Star metric: the single number that captures delivered customer value (e.g. messages sent, nights booked)",
              "Input metrics: the controllable drivers teams move every sprint",
              "Why the North Star must reflect value, not activity: signups are not success",
              "Cascading metrics: company North Star → team inputs → individual focus"
            ],
            "do": [
              "Propose a North Star metric for 3 different businesses and defend each choice",
              "List 5 input metrics a growth team could move weekly for one North Star",
              "Critique a company's stated North Star: does it measure value or vanity?"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ]
          },
          {
            "t": "Stakeholder Identification & Management",
            "d": "Know who decides, who influences, and who just needs the numbers.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Stakeholder mapping: power vs interest grid for your BI consumers",
              "Personas: the executive (so-what), the manager (trend), the operator (detail)",
              "Requirements elicitation: the 5 questions that prevent dashboard rework",
              "Expectation management: under-promise on timelines, over-deliver on clarity"
            ],
            "do": [
              "Map stakeholders for a BI project on a power/interest grid",
              "Write persona cards for 3 dashboard consumers with different needs",
              "Draft the 5-question intake form you'll use for every dashboard request"
            ],
            "tools": ["Miro", "Google Docs"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "Build for the decision-maker, not the requester. They're often different people, and the requester rarely tells you."
          },
          {
            "t": "Operational, Tactical & Strategic BI",
            "d": "Real-time ops, monthly management, yearly strategy: different BI for each.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Operational BI: intraday, granular, embedded in workflows (support queues, fraud alerts)",
              "Tactical BI: weekly/monthly performance vs targets for middle management",
              "Strategic BI: quarterly/yearly trends and scenarios for executives",
              "Each level needs different latency, grain, and visualization — one dashboard can't serve all three"
            ],
            "do": [
              "Classify 6 real dashboards/reports into the three levels",
              "Design the refresh cadence and grain for each level for one company",
              "Explain why a strategic KPI dashboard fails as an operational tool"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Looker", "https://cloud.google.com/looker"]
            ]
          },
          {
            "t": "Key Business Functions",
            "d": "Speak finance, marketing, ops, and HR fluently.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Finance: P&L structure, margins, CAC, LTV, burn and runway",
              "Marketing: funnel metrics, attribution basics, CAC by channel, ROAS",
              "Operations: throughput, cycle time, defect rates, capacity utilization",
              "HR: headcount, attrition, time-to-hire, engagement — people analytics basics"
            ],
            "do": [
              "Define CAC and LTV from scratch and compute the LTV:CAC ratio for a sample business",
              "Map a marketing funnel with metrics at each stage",
              "Pick one function and list its top 5 KPIs with definitions"
            ],
            "tools": ["Google Sheets", "Pen & paper"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "Learn the P&L first. Every business conversation eventually comes back to revenue, cost, and margin."
          }
        ]
      },
      {
        "t": "SQL & Data Foundations",
        "d": "The language every BI analyst must speak fluently.",
        "lv": 1,
        "children": [
          {
            "t": "Data Types, Sources & Formats",
            "d": "Know what you're querying before you query it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Structured vs semi-structured vs unstructured: tables, JSON, and everything else",
              "Data sources: transactional databases, SaaS APIs, files, event streams, spreadsheets",
              "Formats that matter: CSV pitfalls, JSON nesting, Parquet for analytics",
              "Data freshness and grain: how current is it, and at what level of detail?"
            ],
            "do": [
              "Catalog the data sources of a fictional company by type and format",
              "Open a nested JSON file and flatten it into a table by hand",
              "Document grain and freshness for 3 tables in a sample database"
            ],
            "tools": ["DBeaver", "VS Code"],
            "res": [
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "SELECT, WHERE, ORDER BY",
            "d": "Read any table with confidence.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "SELECT with aliases; why SELECT * breaks downstream when schemas change",
              "WHERE logic with AND/OR/NOT and the NULL trap (IS NULL, never = NULL)",
              "ORDER BY, LIMIT, DISTINCT for exploration",
              "Logical query order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
            ],
            "do": [
              "Explore every table in a sample database: row counts, 10-row previews",
              "Write 10 compound WHERE filters with correct parentheses",
              "Pull the top-10 products by revenue with ORDER BY + LIMIT"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "JOINs",
            "d": "Connect tables without breaking the numbers.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "INNER, LEFT, RIGHT, FULL OUTER: the four joins and their Venn diagrams",
              "LEFT JOIN as the default: preserve your base population",
              "Fan-out: duplicate join keys multiply rows and inflate sums — always check counts",
              "Joining on multiple keys and handling type mismatches"
            ],
            "do": [
              "Join orders → customers → products and verify row counts at each step",
              "Deliberately cause fan-out with a dirty key table, then fix it",
              "Find orphaned rows with LEFT JOIN ... WHERE right.key IS NULL"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ],
            "tip": "Check row counts after every join. Multiplied rows mean your key isn't unique somewhere."
          },
          {
            "t": "GROUP BY & Aggregations",
            "d": "Summarize like a pivot table, in code.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "GROUP BY with SUM, COUNT, AVG, MIN, MAX; HAVING vs WHERE",
              "COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col): three different numbers",
              "Date bucketing with DATE_TRUNC for time series",
              "ROLLUP for subtotals and grand totals in one query"
            ],
            "do": [
              "Build a monthly KPI summary: revenue, orders, AOV, distinct customers",
              "Use HAVING to find underperforming segments WHERE can't express",
              "Create a ROLLUP report and hand-verify the totals"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          },
          {
            "t": "Window Functions",
            "d": "Rankings, running totals, and period comparisons without collapsing rows.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "OVER (PARTITION BY ... ORDER BY ...): analytics that keep every row",
              "ROW_NUMBER, RANK, DENSE_RANK: ties handled three ways",
              "LAG/LEAD for month-over-month and year-over-year in one query",
              "Running totals and moving averages with frame clauses"
            ],
            "do": [
              "Rank sales reps within each region using all three ranking functions",
              "Compute YoY growth with LAG over monthly aggregates",
              "Build a 7-day moving average of daily active users"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Window functions can't go in WHERE. Wrap them in a CTE, then filter — this pattern covers 90% of advanced BI queries."
          },
          {
            "t": "CTEs & Subqueries",
            "d": "Layer complex logic into readable steps.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "WITH clauses: named steps that read top to bottom",
              "Subqueries in WHERE with IN and EXISTS; correlated subqueries",
              "Chaining CTEs: filter → enrich → aggregate → rank, each testable",
              "Recursive CTEs for hierarchies (org charts, category trees)"
            ],
            "do": [
              "Rewrite a triple-nested subquery as stacked CTEs",
              "Build a 4-CTE funnel analysis: visits → signups → activation → purchase",
              "Write a recursive CTE that walks an employee-manager hierarchy"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "Query Performance Basics",
            "d": "Fast queries keep dashboards alive.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Reading EXPLAIN: sequential scans vs index scans in plain English",
              "Indexes: what they speed up, what they cost on writes",
              "Selective filters early: push WHERE clauses down before heavy joins",
              "Avoiding SELECT *, functions on indexed columns, and accidental cross joins"
            ],
            "do": [
              "EXPLAIN a slow query, add an index, and measure the before/after",
              "Rewrite a query that applies functions to an indexed date column",
              "Find and fix an accidental cross join in a sample query"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "A dashboard query that takes 30 seconds will be abandoned. If EXPLAIN shows a sequential scan on millions of rows, that's your bottleneck."
          }
        ]
      },
      {
        "t": "Data Modeling & Warehousing",
        "d": "Design the foundation every dashboard stands on.",
        "lv": 2,
        "children": [
          {
            "t": "Fact vs Dimension Tables",
            "d": "Events and measurements vs the who, what, where, and when.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Fact tables: measurable events (orders, clicks) with foreign keys and numeric measures",
              "Dimension tables: descriptive context (customers, products, dates) that you slice by",
              "Grain: the atomic level of a fact table — the single most important modeling decision",
              "Conformed dimensions: one shared customer/product/date dimension across facts"
            ],
            "do": [
              "Classify every table in a sample schema as fact or dimension",
              "Write the grain statement for an orders fact table in one sentence",
              "Design a date dimension with the columns analysts actually need"
            ],
            "tools": ["dbt", "PostgreSQL", "Lucidchart"],
            "res": [
              ["Kimball Group", "https://www.kimballgroup.com/"]
            ],
            "tip": "If you can't state a fact table's grain in one sentence ('one row per order line'), the model isn't finished."
          },
          {
            "t": "Star vs Snowflake Schema",
            "d": "Denormalized speed vs normalized tidiness.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Star schema: one fact table surrounded by flat dimensions — simple, fast, BI-friendly",
              "Snowflake: normalized dimensions in multiple levels — storage-efficient, join-heavy",
              "Why BI tools prefer stars: fewer joins, intuitive for business users",
              "When snowflakes make sense: huge dimensions or strict normalization requirements"
            ],
            "do": [
              "Draw a star schema for an e-commerce business from scratch",
              "Normalize one dimension into a snowflake and count the extra joins",
              "Argue star vs snowflake for a 100M-row product dimension"
            ],
            "tools": ["dbt", "Lucidchart"],
            "res": [
              ["Kimball Group", "https://www.kimballgroup.com/"]
            ]
          },
          {
            "t": "Normalization vs Denormalization",
            "d": "Store it clean or store it fast: the eternal trade-off.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "1NF/2NF/3NF in one paragraph each: atomic values, full key dependence, no transitive dependence",
              "Why OLTP systems normalize: write integrity and no update anomalies",
              "Why analytics denormalizes: read speed and analyst sanity beat storage savings",
              "The modern answer: normalize in staging, denormalize in marts"
            ],
            "do": [
              "Normalize a denormalized spreadsheet to 3NF on paper",
              "Identify update anomalies in a flat customer-orders table",
              "Design a staging (normalized) → mart (star) pipeline for one subject area"
            ],
            "tools": ["PostgreSQL", "dbt"],
            "res": [
              ["Kimball Group", "https://www.kimballgroup.com/"]
            ]
          },
          {
            "t": "Data Warehouses, Lakes & Marts",
            "d": "Where analytical data lives, and why it moved to the cloud.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Data warehouse: structured, curated, SQL-first (Snowflake, BigQuery, Redshift, Synapse)",
              "Data lake: raw files at scale, schema-on-read, cheap storage (S3, ADLS, GCS)",
              "Data mart: a subject-area slice of the warehouse for one team or domain",
              "Lakehouse and medallion architecture: bronze → silver → gold as quality layers"
            ],
            "do": [
              "Compare BigQuery, Redshift, and Synapse pricing models in a table",
              "Map bronze/silver/gold layers onto a real pipeline you design",
              "Decide warehouse vs lake vs lakehouse for 3 hypothetical companies"
            ],
            "tools": ["BigQuery", "Snowflake", "dbt"],
            "res": [
              ["Google BigQuery", "https://cloud.google.com/bigquery"],
              ["AWS Redshift", "https://aws.amazon.com/redshift/"],
              ["Azure Synapse", "https://azure.microsoft.com/products/synapse-analytics"]
            ],
            "tip": "A data lake without governance becomes a data swamp. If nobody can find or trust the data, the cheap storage wasn't worth it."
          },
          {
            "t": "Dimensional Modeling (Kimball)",
            "d": "The methodology behind most BI models.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The 4-step process: pick the business process → declare the grain → choose dimensions → identify facts",
              "Surrogate keys: why dimensions get their own integer keys instead of natural keys",
              "Degenerate dimensions: transaction numbers that live in the fact table",
              "Junk dimensions and role-playing dimensions (one date table, many roles)"
            ],
            "do": [
              "Run the 4-step process for a 'customer support tickets' business process",
              "Design a fact table with surrogate keys and a degenerate ticket number",
              "Model order date vs ship date with one role-playing date dimension"
            ],
            "tools": ["dbt", "Lucidchart"],
            "res": [
              ["Kimball Group", "https://www.kimballgroup.com/"]
            ]
          },
          {
            "t": "ETL/ELT & dbt",
            "d": "Pipelines that keep the warehouse fresh and trustworthy.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "ETL vs ELT: transform before or after loading — and why ELT won in the cloud era",
              "dbt: SQL-first transformations with version control, testing, and documentation",
              "Incremental models: processing only new/changed rows for big tables",
              "Orchestration with Airflow: scheduling, dependencies, retries, and alerting"
            ],
            "do": [
              "Build a dbt project: staging models → intermediate → one mart",
              "Add dbt tests (unique, not_null, relationships) and docs to your models",
              "Schedule a daily run and set up a failure alert"
            ],
            "tools": ["dbt", "Apache Airflow", "Git"],
            "res": [
              ["dbt", "https://dbt.com/"],
              ["Apache Airflow", "https://airflow.apache.org/"]
            ],
            "tip": "A pipeline without tests is a rumor. dbt tests turn 'I think the data is fine' into 'I can prove it.'"
          },
          {
            "t": "Slowly Changing Dimensions",
            "d": "Handle history correctly when dimensions change.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Type 1: overwrite — history lost, simplest, fine for corrections",
              "Type 2: new row per change — full history with effective dates and current flags",
              "Type 0 and 3: retain original / limited history for special cases",
              "Why it matters: 'sales by customer segment' changes meaning when segments change"
            ],
            "do": [
              "Implement a Type 2 SCD for a customer dimension with effective dates",
              "Query 'revenue by segment as it was then' vs 'as it is now' and compare",
              "Decide the SCD type for 5 dimension attributes and justify each"
            ],
            "tools": ["dbt", "PostgreSQL"],
            "res": [
              ["Kimball Group", "https://www.kimballgroup.com/"]
            ],
            "tip": "Type 2 is the default answer for anything analysts trend over time. Type 1 silently rewrites history — use it only for true corrections."
          }
        ]
      },
      {
        "t": "Dashboards & Visualization Design",
        "d": "Build dashboards executives actually open.",
        "lv": 2,
        "children": [
          {
            "t": "Chart Selection for BI",
            "d": "The right visual for every KPI question.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "KPI cards and bullet charts for at-a-glance status vs target",
              "Bars for comparisons, lines for time, tables for exact values",
              "Maps for geography — and when a bar chart beats the map",
              "The BI chart shortlist: 8 visuals that cover 95% of dashboard needs"
            ],
            "do": [
              "Build a KPI card with conditional formatting vs target",
              "Replace a pie chart with a bar chart and measure comprehension speed",
              "Create your personal 'use this, not that' chart reference"
            ],
            "tools": ["Tableau", "Power BI", "Looker"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ]
          },
          {
            "t": "KPI Dashboard Design",
            "d": "Layout, hierarchy, and flow that guide the eye.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The inverted pyramid: KPIs first, trends second, details last",
              "One screen, one story: scrolling dashboards get abandoned",
              "Filters as questions: design controls around what users actually ask",
              "Consistency systems: same metric, same color, same position everywhere"
            ],
            "do": [
              "Wireframe a CEO dashboard on paper before touching the tool",
              "Rebuild an existing cluttered dashboard with the pyramid layout",
              "Define a style guide: fonts, colors, number formats for your team"
            ],
            "tools": ["Tableau", "Power BI", "Figma"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "If the dashboard needs a tour to be understood, redesign it. Great dashboards explain themselves in 10 seconds."
          },
          {
            "t": "Color Theory & Accessibility",
            "d": "Color with intent, readable by everyone.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Sequential vs diverging vs categorical palettes — and using the wrong one lies",
              "Semantic color: red/green for good/bad only, never for categories",
              "Color blindness: ~8% of men can't distinguish your red-green scheme",
              "Contrast, font size, and alt text: dashboards are for all users"
            ],
            "do": [
              "Recolor a dashboard with a colorblind-safe palette and test it with a simulator",
              "Fix a rainbow categorical chart down to 5 distinguishable colors",
              "Audit a dashboard for contrast ratios and minimum font sizes"
            ],
            "tools": ["Tableau", "ColorBrewer", "Stark"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "Never encode the key insight in color alone. Pair it with position, labels, or shape so it survives grayscale printing."
          },
          {
            "t": "Misleading Charts: How to Avoid Them",
            "d": "The integrity checklist for honest visuals.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Truncated axes: the #1 way bar charts exaggerate tiny changes",
              "Cherry-picked ranges and dual axes that manufacture correlation",
              "Area and 3D distortions: humans judge length, not volume",
              "The pre-publish checklist: baseline, scale, labels, source, timeframe"
            ],
            "do": [
              "Find 3 real misleading charts and fix each one honestly",
              "Deliberately make a 'dramatic' truncated-axis chart, then the honest version",
              "Write your team's chart integrity checklist"
            ],
            "tools": ["Tableau", "Excel"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "A misleading chart from the BI team destroys trust for months. When in doubt, show the honest version — even if the story is boring."
          },
          {
            "t": "Mobile-Responsive Dashboards",
            "d": "Executives read dashboards on phones. Design for it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Phone-first layout: vertical stack, biggest KPIs first, minimal scrolling",
              "Device-specific layouts in Tableau/Power BI vs responsive design",
              "Touch targets and readability: 12pt minimum, tappable filters",
              "What to cut: mobile dashboards show 20% of the desktop content"
            ],
            "do": [
              "Create a phone layout for an existing dashboard",
              "Test it on an actual phone: can you get the headline in 10 seconds?",
              "Decide what gets cut and document the rationale"
            ],
            "tools": ["Tableau", "Power BI"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Dashboard Adoption & Maintenance",
            "d": "Ship it, then keep it alive.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Usage analytics: which dashboards are opened, by whom, how often",
              "The deprecation process: sunsetting unused dashboards without breaking workflows",
              "Refresh SLAs and data freshness indicators users can see",
              "Feedback loops: office hours and embedded feedback for continuous improvement"
            ],
            "do": [
              "Pull usage stats for dashboards you own and rank them",
              "Draft a deprecation notice and migration plan for the bottom 20%",
              "Add visible 'data as of' timestamps to your dashboards"
            ],
            "tools": ["Tableau", "Power BI", "Looker"],
            "res": [
              ["Looker", "https://cloud.google.com/looker"]
            ],
            "tip": "Half of all dashboards are never opened after month one. Kill yours proactively or they'll kill your credibility."
          }
        ]
      },
      {
        "t": "Analytics Techniques",
        "d": "Go beyond descriptive: trends, cohorts, funnels, and experiments.",
        "lv": 2,
        "children": [
          {
            "t": "Time Series: Trends & Seasonality",
            "d": "Decompose any metric over time into signal and noise.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Decomposition: trend + seasonality + residuals, visually first",
              "Seasonality detection: weekly and yearly patterns hiding in daily data",
              "Year-over-year vs month-over-month: when each comparison lies",
              "Anomaly spotting: residuals that scream vs noise that whispers"
            ],
            "do": [
              "Decompose 12 months of revenue into trend, weekly seasonality, and residuals",
              "Build a YoY comparison dashboard with proper date alignment",
              "Flag the 5 most anomalous days and investigate each one"
            ],
            "tools": ["SQL", "Python", "Tableau"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          },
          {
            "t": "Forecasting Basics",
            "d": "Predict the next quarter without pretending certainty.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Naive baselines first: last-period and seasonal-naive beat fancy models surprisingly often",
              "Moving averages and exponential smoothing for stable series",
              "Prediction intervals: forecasts without uncertainty bands are fiction",
              "Backtesting: how your method would have performed on history"
            ],
            "do": [
              "Forecast next quarter's signups with seasonal-naive and exponential smoothing",
              "Backtest both methods on the last 4 quarters and compare errors",
              "Present the forecast with intervals and a plain-language caveat"
            ],
            "tools": ["Python", "Excel", "Tableau"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "Always show the naive baseline. If your model can't beat 'same as last year,' it isn't a model — it's decoration."
          },
          {
            "t": "Cohort Analysis",
            "d": "Compare groups by when they started, not just who they are.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Cohort definition: signup month, acquisition channel, first product used",
              "Retention curves: the canonical cohort table and heatmap",
              "Reading the triangle: are newer cohorts better, worse, or just noisier?",
              "Cohort vs cross-sectional: why 'average user' metrics hide product changes"
            ],
            "do": [
              "Build a retention cohort table in SQL with DATE_TRUNC signup months",
              "Visualize it as a heatmap and write 3 insights from the pattern",
              "Compare two acquisition channels' cohort curves over 6 months"
            ],
            "tools": ["SQL", "PostgreSQL", "Tableau"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ],
            "tip": "Aggregate retention always looks fine because old loyal users mask new-user churn. Cohorts reveal the truth."
          },
          {
            "t": "Funnel Analysis",
            "d": "Find where the journey breaks.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Funnel stages: defining events and their strict ordering",
              "Step conversion vs overall conversion: where exactly users leak",
              "Segmented funnels: the same funnel behaves differently per channel/device/cohort",
              "Time-to-convert: speed through the funnel as its own metric"
            ],
            "do": [
              "Build a 5-step signup funnel in SQL with CTEs",
              "Segment it by traffic source and find the worst-performing segment",
              "Quantify the revenue impact of fixing the biggest leak"
            ],
            "tools": ["SQL", "Tableau", "Amplitude"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          },
          {
            "t": "A/B Testing",
            "d": "Run experiments that actually prove something.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Hypothesis, primary metric, guardrail metrics: the experiment doc before any code",
              "Randomization and sample size: power analysis so you don't peek-and-stop",
              "Statistical significance vs practical significance: a 0.1% lift can be 'significant' and useless",
              "Common sins: peeking, multiple comparisons, and novelty effects"
            ],
            "do": [
              "Write a full experiment doc for a hypothetical pricing test",
              "Compute required sample size for a 2% relative lift at 80% power",
              "Analyze a sample A/B dataset: significance, effect size, and a ship/no-ship call"
            ],
            "tools": ["Python", "Optimizely", "Evan Miller calculators"],
            "res": [
              ["Optimizely A/B Testing Guide", "https://www.optimizely.com/optimization-glossary/ab-testing/"]
            ],
            "tip": "Peeking at results daily and stopping when it's green is how false positives are manufactured. Pre-commit to the sample size."
          },
          {
            "t": "Correlation vs Causation in Practice",
            "d": "Read relationships skeptically, like a BI professional.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Pearson and Spearman correlation: linear vs monotonic, and when each applies",
              "Confounders and Simpson's paradox: the segment flip that reverses conclusions",
              "Scatterplots before coefficients: Anscombe's quartet as a cautionary tale",
              "From correlation to decision: what evidence would justify action?"
            ],
            "do": [
              "Build a correlation heatmap of business metrics and sanity-check the top pairs",
              "Demonstrate Simpson's paradox on real or realistic data",
              "Write the caveat paragraph for a correlation you're presenting"
            ],
            "tools": ["Python", "seaborn", "Tableau"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ]
          }
        ]
      },
      {
        "t": "Governance, Quality & Ethics",
        "d": "Trusted data is a product. Build it deliberately.",
        "lv": 3,
        "children": [
          {
            "t": "Data Quality Dimensions",
            "d": "Measure trust the way you measure revenue.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The six dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness",
              "Quality SLAs: freshness guarantees and anomaly alerts on key tables",
              "Profiling as routine: null rates, distinct counts, distributions on every refresh",
              "The cost of bad data: decisions made confidently on wrong numbers"
            ],
            "do": [
              "Score one dataset on all six dimensions with concrete evidence",
              "Set up freshness and volume alerts for a critical table",
              "Write a data-quality incident postmortem for a hypothetical failure"
            ],
            "tools": ["dbt", "Great Expectations", "Monte Carlo"],
            "res": [
              ["dbt", "https://dbt.com/"]
            ],
            "tip": "Executives forgive late data. They never forgive wrong data presented confidently."
          },
          {
            "t": "Data Lineage & Catalogs",
            "d": "Answer 'where did this number come from?' in 30 seconds.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Lineage: tracing a dashboard metric back through transforms to source systems",
              "Data catalogs: searchable inventory with owners, definitions, and freshness",
              "Impact analysis: 'if I change this column, which dashboards break?'",
              "Documentation as code: dbt docs and metric definitions in version control"
            ],
            "do": [
              "Trace one KPI from dashboard to source and diagram every hop",
              "Document 10 core metrics in a catalog with owners and definitions",
              "Run an impact analysis before changing a shared dimension"
            ],
            "tools": ["dbt", "Alation", "Atlan"],
            "res": [
              ["dbt", "https://dbt.com/"]
            ]
          },
          {
            "t": "Access Control & Row-Level Security",
            "d": "The right people see the right rows. Nobody sees the rest.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "RBAC for BI: viewer, explorer, developer roles and least privilege",
              "Row-level security: managers see their team, regions see their region",
              "PII handling: masking, tokenization, and aggregation thresholds",
              "Audit trails: who accessed what, when — for compliance and forensics"
            ],
            "do": [
              "Implement row-level security on a sales dashboard by region",
              "Design a PII masking policy for an HR analytics dataset",
              "Review access logs for one workspace and revoke stale permissions"
            ],
            "tools": ["Tableau", "Power BI", "Snowflake"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "Test RLS as the restricted user, not as admin. Admins see everything, which is exactly why admin testing proves nothing."
          },
          {
            "t": "Privacy: GDPR & Beyond",
            "d": "Lawful analytics in a regulated world.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "GDPR essentials for analysts: lawful basis, purpose limitation, data minimization",
              "Rights that affect BI: erasure and access requests hitting your warehouse",
              "Anonymization vs pseudonymization: k-anonymity and why 'just remove names' fails",
              "Cross-border transfers and retention policies for analytics data"
            ],
            "do": [
              "Audit a dataset for GDPR risk: personal data inventory and lawful basis",
              "Design an erasure-request workflow across warehouse and BI tools",
              "Write a retention policy for event data with business justification"
            ],
            "tools": ["OneTrust", "dbt"],
            "res": [
              ["GDPR Full Text", "https://gdpr-info.eu/"]
            ],
            "tip": "'Anonymized' data that can be re-identified with two joins is still personal data under GDPR. Assume re-identification is possible."
          },
          {
            "t": "Bias in Metrics & Mitigation",
            "d": "Metrics shape behavior — sometimes badly.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Goodhart's law: when a measure becomes a target, it ceases to be a good measure",
              "Selection bias in dashboards: who is missing from the data you're celebrating?",
              "Algorithmic bias in scoring models analysts build or consume",
              "Mitigations: counter-metrics, qualitative checks, and diverse review"
            ],
            "do": [
              "Find a metric at a real company that incentivized bad behavior",
              "Design a counter-metric pair for a KPI you own",
              "Bias-review a dashboard: who might it misrepresent or harm?"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["GDPR Full Text", "https://gdpr-info.eu/"]
            ],
            "tip": "Every KPI creates incentives. Before publishing one, ask: 'how would someone game this, and would that hurt the business?'"
          }
        ]
      },
      {
        "t": "Operating Like a BI Professional",
        "d": "Storytelling, stakeholders, portfolio, and career.",
        "lv": 2,
        "children": [
          {
            "t": "Data Storytelling Framework",
            "d": "Turn findings into narratives that move people.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The arc: context → tension → insight → recommendation → next steps",
              "Insight titles: every chart headline should state the takeaway",
              "The 3-30-3 rule: 3 seconds for the headline, 30 for the story, 3 minutes for detail",
              "Narrative for different forums: standup update vs board deck need different stories"
            ],
            "do": [
              "Convert a dashboard into a 5-slide narrative deck",
              "Rewrite 10 descriptive titles as insight titles",
              "Deliver the same finding as a 30-second update and a 5-minute deep dive"
            ],
            "tools": ["PowerPoint", "Google Slides"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ]
          },
          {
            "t": "Writing Executive Summaries",
            "d": "The one page busy leaders actually read.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "BLUF: bottom line up front — recommendation in the first two sentences",
              "The 3-bullet structure: what happened, why it matters, what we recommend",
              "Numbers with context: always vs target, vs last period, vs benchmark",
              "Appendix discipline: methodology lives at the back, not in the summary"
            ],
            "do": [
              "Write a 150-word executive summary of a real analysis",
              "Cut it to 75 words without losing the recommendation",
              "Get feedback: does a non-analyst understand it in one read?"
            ],
            "tools": ["Google Docs"],
            "res": [
              ["Tableau", "https://www.tableau.com/"]
            ],
            "tip": "If the executive only reads the summary, it must contain the decision. Bury the recommendation and it won't happen."
          },
          {
            "t": "Stakeholder & Change Management",
            "d": "Get new metrics actually adopted.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Adoption is the metric: a perfect dashboard nobody opens failed",
              "Change management: involve users early, train, and celebrate quick wins",
              "Handling metric disputes: the reconciliation process when numbers disagree",
              "Saying no: killing redundant dashboards without making enemies"
            ],
            "do": [
              "Plan a rollout for a new KPI dashboard: comms, training, feedback",
              "Write a reconciliation checklist for 'your number vs my number' disputes",
              "Draft a kind-but-firm deprecation email for a duplicate dashboard"
            ],
            "tools": ["Slack", "Confluence"],
            "res": [
              ["Looker", "https://cloud.google.com/looker"]
            ]
          },
          {
            "t": "End-to-End BI Portfolio Project",
            "d": "Warehouse to dashboard to story: the complete proof.",
            "lv": 2,
            "time": "~3w",
            "learn": [
              "Scoping a business problem end to end: question → data → model → dashboard → story",
              "Building the pipeline: source data, dbt models, tests, and docs",
              "Dashboard plus narrative: the deliverable is insight, not just visuals",
              "README that sells: problem, approach, findings, and what you'd do next"
            ],
            "do": [
              "Pick a business domain and define 3 stakeholder questions",
              "Build the full stack: raw data → dbt → warehouse → dashboard",
              "Publish with a README, metric definitions, and a 5-slide story deck"
            ],
            "tools": ["dbt", "BigQuery", "Tableau", "GitHub"],
            "res": [
              ["dbt", "https://dbt.com/"],
              ["Google BigQuery", "https://cloud.google.com/bigquery"]
            ],
            "badge": "PROJECT",
            "tip": "One complete end-to-end project beats five disconnected dashboards. Employers hire for the full loop."
          },
          {
            "t": "Certifications Worth Getting",
            "d": "Credentials that signal, not just decorate.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Tool certs: Tableau Desktop, Microsoft PL-300 (Power BI), Looker — pick your stack's",
              "Cloud data certs: BigQuery, Snowflake, Databricks fundamentals for warehouse credibility",
              "When certs matter: career switchers and consultants benefit most",
              "What beats certs: the portfolio project and SQL fluency in interviews"
            ],
            "do": [
              "Pick one certification aligned with your target stack and read its exam guide",
              "Map the exam topics to this roadmap and note your gaps",
              "Schedule the exam date — commitment beats intention"
            ],
            "tools": ["Tableau", "Power BI"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tag": "opt"
          },
          {
            "t": "Interview Prep & Negotiation",
            "d": "Prove the skills and price them right.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "The BI interview loop: SQL live coding, dashboard critique, stakeholder case study",
              "Talking through analysis: narrate your thinking, not just the answer",
              "Portfolio presentation: 10 minutes, one project, business impact first",
              "Negotiation: research bands, anchor on total comp, never accept the first offer"
            ],
            "do": [
              "Do 5 timed SQL problems out loud, explaining as you go",
              "Critique a public dashboard for 5 minutes as interview practice",
              "Research salary bands for BI analysts in your market and write your range"
            ],
            "tools": ["DataLemur", "StrataScratch"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          }
        ]
      }
    ]
  }
});
