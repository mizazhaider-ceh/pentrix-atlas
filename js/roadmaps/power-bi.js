/* Atlas roadmap data: Power BI (power-bi) */
ROADMAPS.push({
  "id": "power-bi",
  "title": "Power BI",
  "icon": "💡",
  "color": "#059669",
  "desc": "Master Microsoft's BI platform end to end: Power Query, data modeling, DAX, stunning reports, and enterprise administration.",
  "kind": "skill",
  "root": {
    "t": "Power BI",
    "d": "From raw data to interactive insight, the Microsoft way.",
    "children": [
      {
        "t": "Getting Started with Power BI",
        "d": "The ecosystem, licensing, and your first report.",
        "lv": 1,
        "children": [
          {
            "t": "The Power BI Ecosystem",
            "d": "Desktop, Service, and Mobile: what each piece does.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Power BI Desktop: the free Windows app where you build models and reports",
              "Power BI Service: the cloud home for publishing, sharing, and collaboration",
              "Power BI Mobile: consuming dashboards on the go, with phone-optimized layouts",
              "How the pieces connect: build in Desktop → publish to Service → view anywhere"
            ],
            "do": [
              "Draw the Desktop → Service → Mobile flow from memory",
              "List which tasks happen in Desktop vs Service for a sample project",
              "Install the Power BI mobile app and open a sample report"
            ],
            "tools": ["Power BI Desktop", "Power BI Service", "Power BI Mobile"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Licensing Tiers in 2026",
            "d": "Free, Pro, PPU, and Fabric capacity: what you actually need.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Free: build for yourself in Desktop and My Workspace; no sharing",
              "Pro ($14/user/month): publish and share with other Pro users; included in Microsoft 365 E5",
              "Premium Per User ($24/user/month): bigger models, more refreshes, premium features per user",
              "Fabric F-SKUs replaced Premium P-SKUs: capacity-based; at F64+ even free users can view reports"
            ],
            "do": [
              "Map 3 team scenarios (solo, 10-person team, 1000-viewer enterprise) to the right license",
              "Calculate the monthly cost of each scenario",
              "Check which license your organization already has"
            ],
            "tools": ["Power BI Service"],
            "res": [
              ["Microsoft Fabric Licenses", "https://learn.microsoft.com/fabric/enterprise/licenses"]
            ],
            "tip": "The classic beginner trap: building a report on a Free license and discovering you can't share it. Confirm the license before you promise a dashboard."
          },
          {
            "t": "Installing Power BI Desktop",
            "d": "Set up your report-building workshop.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Microsoft Store vs direct download: update cadence differences",
              "Monthly updates: why Power BI Desktop changes constantly and how to keep current",
              "The three views: Report, Table, and Model — your new home base",
              "Options and settings worth changing on day one (auto date/time, preview features)"
            ],
            "do": [
              "Install Power BI Desktop and open each of the three views",
              "Turn off auto date/time tables (you'll build proper date tables instead)",
              "Pin the app and check for the latest monthly update"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Your First Report",
            "d": "CSV to published insight in under an hour.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Get Data: loading a CSV and seeing it land in the Table view",
              "Dragging fields onto visuals: Power BI guesses, you refine",
              "Interactions: how clicking one visual filters the others",
              "Saving (.pbix) and the anatomy of a report file"
            ],
            "do": [
              "Load any CSV and build a 3-visual report: KPI card, bar chart, line chart",
              "Click around to experience cross-filtering",
              "Save the .pbix and note its file size — you'll optimize this later"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Power BI and Microsoft Fabric",
            "d": "Where Power BI lives in Microsoft's data platform.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Microsoft Fabric: the unified platform (OneLake, Data Engineering, Warehouse, Real-Time)",
              "Power BI as Fabric's visualization layer, not a standalone island anymore",
              "Direct Lake: querying OneLake Parquet files at near-import speed",
              "What this means for you: skills transfer, and Fabric capacity changes the licensing math"
            ],
            "do": [
              "Sketch the Fabric architecture with Power BI's place in it",
              "Read the Fabric licensing page and summarize the F64 rule in your own words",
              "Decide whether your learning path needs Fabric beyond Power BI (probably not yet)"
            ],
            "tools": ["Power BI Service", "Microsoft Fabric"],
            "res": [
              ["Microsoft Fabric Licenses", "https://learn.microsoft.com/fabric/enterprise/licenses"],
              ["Power BI Product Page", "https://www.microsoft.com/power-platform/products/power-bi/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Connecting to Data",
        "d": "Get data in from anywhere, the right way.",
        "lv": 1,
        "children": [
          {
            "t": "Data Source Types & Connectors",
            "d": "Files, databases, APIs, and cloud: the connector zoo.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "File sources: Excel, CSV, Parquet — and why Excel needs care (merged cells, data types)",
              "Database connectors: SQL Server, PostgreSQL, Oracle, and the SQL you can push down",
              "Web and API connectors: REST, OData, SharePoint lists",
              "The connector list is huge; master the 5 you'll actually use"
            ],
            "do": [
              "Connect to the same data via Excel, CSV, and a database; compare the experience",
              "Load a SharePoint list and a web table into one model",
              "Document the credentials each connection needs"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Import vs DirectQuery vs Direct Lake",
            "d": "The storage-mode decision that shapes everything.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Import: data copied into the model; fastest visuals, scheduled refresh, 1GB Pro limit",
              "DirectQuery: live queries to the source; always fresh, slower, limited DAX",
              "Direct Lake: Fabric/OneLake data queried directly at near-import speed (no refresh needed)",
              "Dual mode and composite models: mixing modes per table for the best of both"
            ],
            "do": [
              "Build the same report in Import and DirectQuery; compare speed and refresh behavior",
              "List which DAX features break in DirectQuery before you need them",
              "Decide the right mode for 3 scenarios: finance close, IoT dashboard, HR headcount"
            ],
            "tools": ["Power BI Desktop", "SQL Server"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Default to Import unless you have a reason not to. DirectQuery's 'always fresh' sounds great until every click waits on the database."
          },
          {
            "t": "Credentials, Privacy Levels & Gateways",
            "d": "Connect securely, especially to on-premises data.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Authentication methods: Windows, database, OAuth, API keys — and credential storage",
              "Privacy levels: how Power Query isolates sources to prevent data leakage between them",
              "On-premises data gateway: the bridge from cloud Service to your SQL Server",
              "Scheduled refresh: 8x/day on Pro, 48x/day on PPU/capacity"
            ],
            "do": [
              "Set up data source credentials and explain each privacy level in your own words",
              "Install a personal gateway and refresh a report from a local file",
              "Configure a scheduled refresh and verify it ran"
            ],
            "tools": ["Power BI Desktop", "On-premises data gateway"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Connecting to Excel & Web Data",
            "d": "Hands-on: the two sources you'll meet first.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Excel: Tables (Ctrl+T) as clean sources vs raw ranges that break",
              "Web connector: scraping HTML tables and handling site changes",
              "Parameterizing file paths so reports survive folder moves",
              "Data type detection: Power BI guesses, and guesses wrong on dates and IDs"
            ],
            "do": [
              "Convert an Excel range to a Table and load it cleanly",
              "Pull a public web table and set explicit data types on every column",
              "Move the source file and fix the connection with a parameter"
            ],
            "tools": ["Power BI Desktop", "Excel"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Power BI loves to 'helpfully' change column types. Set types explicitly in Power Query or your IDs become numbers and your dates become text."
          },
          {
            "t": "Data Refresh Deep Dive",
            "d": "Keep reports fresh without babysitting them.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Refresh types: full vs incremental — and why full refresh breaks at scale",
              "Incremental refresh: partitioning by date so only new data reloads",
              "Refresh failures: the top 5 causes (credentials, gateway, schema change, timeout, privacy)",
              "Monitoring refresh history in the Service and setting failure alerts"
            ],
            "do": [
              "Configure incremental refresh on a date-partitioned table",
              "Deliberately break a refresh (wrong credentials) and read the error message",
              "Set up email alerts for refresh failures"
            ],
            "tools": ["Power BI Desktop", "Power BI Service"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          }
        ]
      },
      {
        "t": "Power Query & Data Shaping",
        "d": "Clean and reshape data before it ever hits the model.",
        "lv": 1,
        "children": [
          {
            "t": "The Query Editor & Applied Steps",
            "d": "Every click is recorded. Learn to read the recipe.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Applied Steps: the recorded transformation history you can reorder, edit, and delete",
              "The formula bar: seeing the M code behind each click",
              "Query dependencies and the query pane: organizing a multi-query project",
              "Enable load vs connection-only: staging queries shouldn't bloat the model"
            ],
            "do": [
              "Build a 10-step transformation and read every applied step's M code",
              "Delete and reorder steps to see what breaks and why",
              "Mark staging queries as connection-only and watch the model shrink"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Name your steps. 'Renamed Columns1' means nothing in 3 months; 'Rename to business terms' does."
          },
          {
            "t": "Data Profiling & Column Quality",
            "d": "Inspect before you transform.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Column quality bars: valid, error, and empty percentages at a glance",
              "Column distribution and profiling: distinct counts, min/max, value histograms",
              "Profiling the whole dataset before writing a single transformation",
              "Using profiles to write data-quality rules with stakeholders"
            ],
            "do": [
              "Profile a messy dataset and list every issue found before cleaning",
              "Use the distribution view to spot a skewed column needing attention",
              "Export your findings as the 'before' snapshot for documentation"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Cleaning: Types, Errors & Duplicates",
            "d": "Fix the data, reproducibly, every refresh.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Data types as contracts: set them early, explicitly, on every column",
              "Error handling: keep vs remove errors, and replacing values safely",
              "Removing duplicates: choosing the right key columns first",
              "Trim, clean, and case standardization for text columns"
            ],
            "do": [
              "Clean a deliberately messy CSV: types, errors, duplicates, whitespace",
              "Keep a copy of error rows and write a one-line explanation per error type",
              "Build a reusable 'standard cleanup' sequence you apply to every new query"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Removing errors feels productive and hides problems. Investigate error rows first; they're often the most informative rows you have."
          },
          {
            "t": "Column Transforms",
            "d": "Reshape text, numbers, and dates with confidence.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Text: split, extract, merge, and conditional columns from text",
              "Numbers: rounding, statistics, and standard transformations",
              "Dates: age, date parts, and duration calculations without DAX",
              "Custom and conditional columns: if-then logic in the query layer"
            ],
            "do": [
              "Split a 'City, Country' column and build a conditional region column",
              "Extract year/quarter/month from dates for a proper date dimension",
              "Replace 5 chained steps with one custom column and compare readability"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Combining Tables: Append & Merge",
            "d": "Stack and join queries the Power Query way.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Append: stacking tables vertically — schema alignment matters",
              "Merge: the Power Query JOIN with 6 join kinds (left outer is your friend)",
              "Expanding merged columns: selecting only what you need",
              "Fuzzy matching for messy keys: similarity thresholds and their risks"
            ],
            "do": [
              "Append 12 monthly files into one table with aligned schemas",
              "Merge sales to a product table with a left outer join and expand 2 columns",
              "Try fuzzy merge on messy customer names and audit the false matches"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "After a merge, check row counts. Power Query won't warn you about fan-out; your inflated totals will."
          },
          {
            "t": "Pivot, Unpivot & Transpose",
            "d": "Reshape between wide and long like a pro.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Unpivot: turning month columns into rows — the #1 reshape in BI",
              "Pivot: aggregating long data into wide summaries",
              "When to reshape in Power Query vs in DAX (hint: usually Power Query)",
              "Dynamic column handling: making unpivot survive new months appearing"
            ],
            "do": [
              "Unpivot a 12-month-column budget sheet into tidy rows",
              "Make the unpivot dynamic so next month's column is picked up automatically",
              "Pivot it back and verify the round trip is lossless"
            ],
            "tools": ["Power BI Desktop", "Power Query"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "M Language Basics",
            "d": "Read and write the code behind the clicks.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "M in one idea: everything is a step in a let/in expression producing tables, lists, or records",
              "Reading generated M: Table.SelectRows, Table.TransformColumnTypes, and friends",
              "The Advanced Editor: editing M directly for what the UI can't express",
              "Parameters and custom functions: reusable query logic without copy-paste"
            ],
            "do": [
              "Open the Advanced Editor and rewrite 3 UI steps by hand",
              "Create a parameter for the source folder path and use it in 2 queries",
              "Write a custom function that standardizes any date column"
            ],
            "tools": ["Power BI Desktop", "Power Query", "Advanced Editor"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "You don't need to write M from scratch. You need to read it — because the day the UI generates something weird, reading M is how you fix it."
          }
        ]
      },
      {
        "t": "Data Modeling",
        "d": "Design the star schema every good report stands on.",
        "lv": 2,
        "children": [
          {
            "t": "Star Schema Design",
            "d": "Facts in the middle, dimensions around: the BI classic.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Fact tables: the measurable events; dimension tables: the descriptive context",
              "Grain statements: 'one row per order line' — the most important sentence in modeling",
              "Why Power BI loves stars: simple relationships, fast queries, intuitive for users",
              "Flattening snowflakes: merging normalized dimensions for the model layer"
            ],
            "do": [
              "Design a star schema for retail sales: 1 fact, 4 dimensions",
              "Write grain statements for each fact table",
              "Import a snowflaked source and flatten it into a star in Power Query"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "If you can't state the grain in one sentence, stop modeling and go talk to the business. Everything downstream depends on it."
          },
          {
            "t": "Relationships & Cardinality",
            "d": "Connect tables so filters flow correctly.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "One-to-many as the healthy default; many-to-many as the warning sign",
              "Single vs both cross-filter direction: when bidirectional is justified (rarely)",
              "Inactive relationships and USERELATIONSHIP for role-playing dates",
              "The model diagram: reading it like a map before writing any DAX"
            ],
            "do": [
              "Build a model with proper 1:* relationships and verify filter flow",
              "Create order-date vs ship-date analysis with an inactive relationship",
              "Find and fix a many-to-many relationship by adding a bridge or remodeling"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["SQLBI", "https://www.sqlbi.com/"],
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Bidirectional filters feel like a quick fix and create ambiguous paths. Fix the model instead; your future DAX will thank you."
          },
          {
            "t": "Calculated Columns vs Tables vs Measures",
            "d": "Three tools, three jobs. Stop mixing them up.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Calculated columns: row-by-row, computed at refresh, stored in the model (expensive)",
              "Calculated tables: for role-playing dimensions, parameter tables, and static logic",
              "Measures: computed at query time, respond to filters — the default for KPIs",
              "The rule: if it aggregates, it's a measure; if it describes a row, Power Query usually beats a calculated column"
            ],
            "do": [
              "Rebuild a calculated column as a Power Query step and compare model size",
              "Create a disconnected parameter table for 'what-if' analysis",
              "Convert 5 calculated columns into measures where appropriate"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "Calculated columns are the #1 cause of bloated models. They compute once, store forever, and ignore slicers — the opposite of what you usually want."
          },
          {
            "t": "Date Tables & Hierarchies",
            "d": "Time intelligence needs a proper calendar.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why you need a date table: continuous dates, fiscal calendars, and time intelligence",
              "Building one: CALENDAR/CALENDARAUTO vs a Power Query date dimension",
              "Marking as date table: the one click that unlocks time intelligence",
              "Hierarchies: year → quarter → month → day for natural drill-down"
            ],
            "do": [
              "Build a date table with fiscal year columns and mark it as the date table",
              "Create a date hierarchy and drill from year to day in a visual",
              "Relate it to 3 fact tables and verify time intelligence works on all"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "Turn off auto date/time. Those hidden date tables bloat your model and confuse time intelligence — a real date table replaces all of them."
          },
          {
            "t": "Model Optimization & Performance Analyzer",
            "d": "Small, fast models beat big, slow ones.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Performance Analyzer: recording which visual, DAX query, or visual render is slow",
              "Cardinality killers: unique IDs, timestamps, and free-text columns in the model",
              "Data type discipline: integers over text, date over datetime where possible",
              "VertiPaq basics: columnar compression loves low-cardinality columns"
            ],
            "do": [
              "Run Performance Analyzer on a slow report and identify the worst visual",
              "Remove or retype high-cardinality columns and measure the size drop",
              "Split datetime into date + time columns and compare compression"
            ],
            "tools": ["Power BI Desktop", "Performance Analyzer"],
            "res": [
              ["SQLBI", "https://www.sqlbi.com/"],
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "A 500MB model usually has 400MB of columns nobody uses. Delete unused columns before you optimize anything else."
          },
          {
            "t": "Aggregations & Composite Models",
            "d": "Speed up huge datasets without losing detail.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "User-defined aggregations: pre-computed summary tables Power BI picks automatically",
              "Automatic aggregations: the engine learning and maintaining them for you",
              "Composite models: DirectQuery detail + Import aggregates in one model",
              "When it matters: fact tables beyond ~100M rows"
            ],
            "do": [
              "Build an aggregation table at month/product grain over a big fact",
              "Verify Power BI hits the agg table with Performance Analyzer",
              "Design a composite model strategy for a billion-row scenario on paper"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "DAX Fundamentals",
        "d": "The formula language behind every KPI.",
        "lv": 2,
        "children": [
          {
            "t": "DAX vs M: Two Languages, Two Jobs",
            "d": "Shape in M, calculate in DAX. Never confuse them again.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "M (Power Query): row-by-row transformation at refresh time",
              "DAX: dynamic calculation at query time, responding to filters",
              "The decision rule: static row logic → M; filter-aware aggregation → DAX",
              "Why doing DAX's job in M (or vice versa) creates slow, wrong models"
            ],
            "do": [
              "Classify 10 real tasks as 'M' or 'DAX' and justify each",
              "Move one misplaced calculation to the right layer and compare results",
              "Explain the two languages to a colleague in under 2 minutes"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["DAX Guide", "https://dax.guide/"]
            ]
          },
          {
            "t": "Measures vs Calculated Columns",
            "d": "The single most important DAX distinction.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Measures: evaluated in filter context, not stored, the KPI workhorse",
              "Calculated columns: evaluated in row context at refresh, stored, static",
              "Implicit measures (auto-sum) vs explicit measures you write yourself",
              "Why every serious model bans implicit measures"
            ],
            "do": [
              "Create the same 'total' as implicit measure, explicit measure, and calculated column",
              "Add a slicer and observe which three respond correctly",
              "Convert all implicit measures in a sample model to explicit ones"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "If your 'measure' gives the same number no matter what you click, you probably built a calculated column. Measures listen to filters; columns don't."
          },
          {
            "t": "DAX Syntax & Variables",
            "d": "Write DAX people can read.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Syntax basics: table[column] vs [measure] references, and why it matters",
              "VAR: named intermediate steps that make DAX readable and faster",
              "RETURN: the single output; everything before it is setup",
              "Formatting with DAX Formatter: unformatted DAX is undebuggable DAX"
            ],
            "do": [
              "Rewrite a nested DAX expression using VAR for each intermediate step",
              "Format 5 ugly measures with DAX Formatter and compare",
              "Build a style checklist: VAR usage, comments, naming conventions"
            ],
            "tools": ["DAX", "DAX Formatter"],
            "res": [
              ["DAX Formatter", "https://www.daxformatter.com/"],
              ["DAX Guide", "https://dax.guide/"]
            ]
          },
          {
            "t": "Aggregation & Iterator Functions",
            "d": "SUM, AVERAGE, and the X-functions that iterate rows.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Simple aggregators: SUM, AVERAGE, MIN, MAX, COUNT, DISTINCTCOUNT",
              "Iterators: SUMX, AVERAGEX, COUNTX — row-by-row evaluation then aggregation",
              "When you need an X-function: row-level math before aggregating (price × quantity)",
              "Performance: iterators over big tables are expensive — filter first"
            ],
            "do": [
              "Compute revenue as SUMX(order lines, price × quantity) and compare with a pre-computed column",
              "Build AVERAGEX for average basket size per order",
              "Measure the performance difference between SUMX and SUM on a large table"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"]
            ],
            "tip": "SUMX over millions of rows on every click is how reports die. Pre-aggregate in Power Query when the row-level detail isn't needed at query time."
          },
          {
            "t": "CALCULATE & Filter Context",
            "d": "The most powerful function in DAX, properly understood.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Filter context: the set of filters (slicers, visual axes) a measure evaluates in",
              "CALCULATE: modify filter context — add, remove, or replace filters",
              "ALL, ALLEXCEPT, ALLSELECTED: removing filters with surgical precision",
              "FILTER as a table function: the right way to apply complex conditions"
            ],
            "do": [
              "Write % of total with CALCULATE and ALL, then test with slicers",
              "Build a 'vs selected period' comparison using ALLSELECTED",
              "Debug a CALCULATE that returns blank by inspecting filter context step by step"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "CALCULATE doesn't 'calculate' — it changes the filters, then evaluates. Read every CALCULATE as 'under these modified filters, compute...'"
          },
          {
            "t": "Time Intelligence",
            "d": "YoY, YTD, MTD: the comparisons every business wants.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The prerequisites: a proper marked date table (no shortcuts)",
              "TOTALYTD, SAMEPERIODLASTYEAR, DATEADD: the core time-shift functions",
              "DATESBETWEEN and DATESINPERIOD for custom windows",
              "Handling incomplete periods: don't compare 3 days of this month to 30 of last"
            ],
            "do": [
              "Build YTD, QTD, MTD measures and a YoY growth %",
              "Create a rolling 12-month average with DATESINPERIOD",
              "Fix a YoY comparison distorted by an incomplete current month"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ]
          },
          {
            "t": "Common DAX Patterns",
            "d": "Steal like an artist: the patterns every model reuses.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The pattern library mindset: YoY, % of total, ranking, new vs returning",
              "DIVIDE instead of /: no more divide-by-zero errors, ever",
              "HASONEVALUE and SELECTEDVALUE for dynamic titles and conditional logic",
              "Adapting patterns: understanding before copy-pasting"
            ],
            "do": [
              "Implement 5 classic patterns from the DAX Patterns site in your model",
              "Build a dynamic chart title with SELECTEDVALUE",
              "Break one pattern deliberately, then fix it by reading the DAX"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "Copy-pasted DAX you don't understand is a bug waiting for the next filter combination. Read the pattern's explanation first."
          }
        ]
      },
      {
        "t": "Reports & Interactivity",
        "d": "Build reports people love to click.",
        "lv": 2,
        "children": [
          {
            "t": "Core Visuals & Chart Selection",
            "d": "Bars, lines, cards, matrices: the 80/20 of visuals.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "KPI cards and gauges: single numbers with targets and trends",
              "Bar/column for comparison, line/area for time, donut for simple composition",
              "Tables and matrices: when exact values beat pictures",
              "Maps: filled vs bubble, and when a bar chart communicates better"
            ],
            "do": [
              "Build a one-page summary using only core visuals",
              "Replace a pie chart with a bar and test comprehension",
              "Create a matrix with stepped layout and conditional subtotals"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Formatting, Themes & Conditional Formatting",
            "d": "Make it beautiful and consistent.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Report themes: JSON theme files for brand-consistent colors and fonts",
              "Conditional formatting: data bars, color scales, icons, and web URLs",
              "Formatting pane mastery: the settings that matter vs the noise",
              "Accessibility: alt text, tab order, and sufficient contrast"
            ],
            "do": [
              "Create a company theme JSON and apply it to a report",
              "Add data bars and KPI icons with conditional formatting rules",
              "Audit a report with the accessibility checker and fix all issues"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Conditional formatting should highlight decisions, not decorate. If everything is red, nothing is red."
          },
          {
            "t": "Slicers, Filters & Cross-Filtering",
            "d": "Let users ask their own questions.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Slicers vs filters pane vs visual-level filters: three scopes, three jobs",
              "Sync slicers across pages for consistent filtering",
              "Edit interactions: controlling which visuals filter which",
              "Cross-filtering vs cross-highlighting: the subtle difference that confuses users"
            ],
            "do": [
              "Build a filter strategy: page-level, report-level, and drill-through filters",
              "Sync a date slicer across 3 pages",
              "Turn off a misleading cross-highlight and set explicit interactions"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Too many slicers paralyze users. Five well-chosen filters beat fifteen decorative ones."
          },
          {
            "t": "Drill-Through, Drill-Down & Tooltips",
            "d": "Layers of detail without cluttered pages.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Drill-down/up: navigating hierarchies within one visual",
              "Drill-through: right-click from summary to a detail page filtered to context",
              "Custom tooltip pages: rich hover cards that replace cluttered visuals",
              "The information architecture: summary → detail → raw data"
            ],
            "do": [
              "Build a product drill-through page from a category summary",
              "Design a custom tooltip page with KPIs and a mini trend",
              "Map your report's drill paths on paper before building"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Bookmarks, Buttons & Navigation",
            "d": "App-like reports with guided flows.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bookmarks: capturing filter, visual, and page states",
              "Buttons and navigation: building menus and guided experiences",
              "Bookmark groups and the selection pane: managing complexity",
              "Show/hide patterns: progressive disclosure for dense reports"
            ],
            "do": [
              "Build a 3-view toggle (chart/table/KPI) with bookmarks and buttons",
              "Create a navigation menu across 5 pages",
              "Use the selection pane to layer a help overlay toggled by a button"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "AI Visuals: Key Influencers, Decomposition & Q&A",
            "d": "Let the machine find the story.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Key Influencers: which factors drive a metric, with plain-language explanations",
              "Decomposition tree: AI-guided drill-down through dimensions",
              "Q&A: natural language questions answered with auto-generated visuals",
              "The fine print: AI visuals explain correlations, not causes — validate before presenting"
            ],
            "do": [
              "Run Key Influencers on churn and write up the top 3 drivers",
              "Build a decomposition tree for a revenue drop investigation",
              "Teach Q&A your business synonyms so it answers real questions"
            ],
            "tools": ["Power BI Desktop", "Power BI Service"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Key Influencers shows what correlates with your metric, not what causes it. Present it as 'worth investigating,' never as proof."
          },
          {
            "t": "Report Design Principles & Accessibility",
            "d": "Design that serves the decision.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The Z-pattern and F-pattern: where eyes go first",
              "Insight titles and annotations: every visual states its takeaway",
              "Whitespace and alignment: the invisible design that makes reports feel professional",
              "Accessibility: keyboard navigation, screen readers, and color independence"
            ],
            "do": [
              "Redesign a cluttered report applying Z-pattern layout",
              "Rewrite all visual titles as insights, not descriptions",
              "Run the built-in accessibility checker until it passes clean"
            ],
            "tools": ["Power BI Desktop"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          }
        ]
      },
      {
        "t": "Advanced DAX & Performance",
        "d": "Think in contexts, write elegant DAX, and make it fast.",
        "lv": 3,
        "children": [
          {
            "t": "Row Context vs Filter Context & Transition",
            "d": "The mental model that unlocks all advanced DAX.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Row context: the 'current row' in calculated columns and iterators",
              "Filter context: the filters from slicers, visuals, and CALCULATE",
              "Context transition: CALCULATE inside row context turns the row into filters",
              "Why SUMX with CALCULATE inside behaves nothing like you first expect"
            ],
            "do": [
              "Predict, then test, the result of nested row/filter contexts in 5 examples",
              "Fix a classic context-transition bug in a calculated column",
              "Draw the context stack for a complex measure step by step"
            ],
            "tools": ["Power BI Desktop", "DAX", "DAX Studio"],
            "res": [
              ["DAX Guide", "https://dax.guide/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "If a measure returns the same value in every row of a table visual, you've lost filter context. Nine times out of ten, it's a context issue."
          },
          {
            "t": "Calculation Groups",
            "d": "One definition, applied to every measure.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "The problem: YTD versions of 20 measures means 20 near-identical formulas",
              "Calculation items: YTD, YoY%, rolling average as reusable wrappers via SELECTEDMEASURE()",
              "Tabular Editor: the external tool where calculation groups are built",
              "Precedence and conflicts: what happens when groups collide"
            ],
            "do": [
              "Install Tabular Editor and create a Time Intelligence calculation group",
              "Apply YTD/YoY to 5 measures with zero new measure code",
              "Test precedence with two calculation groups on one visual"
            ],
            "tools": ["Tabular Editor", "Power BI Desktop", "DAX"],
            "res": [
              ["SQLBI", "https://www.sqlbi.com/"],
              ["DAX Guide", "https://dax.guide/"]
            ]
          },
          {
            "t": "Field Parameters & Visual Calculations",
            "d": "Let users switch metrics; compute inside visuals.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Field parameters: slicer-driven measure/dimension switching without bookmarks",
              "Visual calculations (GA 2026): formulas scoped to a visual — running totals, % of parent — without new measures",
              "Custom totals: totals that don't match row-level aggregation (median totals, weighted averages)",
              "When visual calcs beat measures: single-use logic that would clutter the model"
            ],
            "do": [
              "Build a field parameter letting users swap between 4 KPIs in one chart",
              "Create a running total and a previous-row difference as visual calculations",
              "Set a custom total showing median instead of sum and verify it"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["Power BI May 2026 Update", "https://enterprisedna.co/resources/news/power-bi-may-2026-update-visual-calculations-pbir-copilot/"],
              ["DAX Guide", "https://dax.guide/"]
            ],
            "tip": "Visual calculations are for visual-scoped logic. If two visuals need the same calculation, promote it to a real measure."
          },
          {
            "t": "DAX User-Defined Functions",
            "d": "Reusable DAX functions, finally (GA June 2026).",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The FUNCTION keyword: define once in DAX query view, call like SUM()",
              "Parameters with defaults and types: building blocks for business logic",
              "Where UDFs live: model objects under Functions in Model Explorer",
              "Governance win: tax logic and risk scores defined once, used everywhere"
            ],
            "do": [
              "Write a UDF for a business rule (e.g. net price with tax) and call it from 3 measures",
              "Change the UDF once and verify all callers update",
              "Decide which of your repeated DAX snippets deserve UDF status"
            ],
            "tools": ["Power BI Desktop", "DAX"],
            "res": [
              ["DAX UDFs Explained", "https://github.com/pbidocs/pbidocs/blob/HEAD/content/blog/dax-user-defined-functions-explained.mdx"],
              ["DAX Guide", "https://dax.guide/"]
            ]
          },
          {
            "t": "DAX Performance Tuning with DAX Studio",
            "d": "Find the slow query and fix it with evidence.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "DAX Studio: capturing queries, reading timings, and server vs formula engine time",
              "The usual suspects: iterators over large tables, FILTER over full tables, bidirectional relationships",
              "Optimization patterns: variables to avoid recomputation, KEEPFILTERS, removing auto-exist issues",
              "Measure, change, measure: the performance loop with numbers, not guesses"
            ],
            "do": [
              "Capture your slowest visual's query in DAX Studio and read the timing breakdown",
              "Rewrite it with variables and reduced iterators; measure the improvement",
              "Document a before/after performance case study for your portfolio"
            ],
            "tools": ["DAX Studio", "Power BI Desktop", "Tabular Editor"],
            "res": [
              ["DAX Studio", "https://daxstudio.org/"],
              ["SQLBI", "https://www.sqlbi.com/"]
            ],
            "tip": "Optimize the formula engine time first — that's your DAX. If storage engine dominates, the fix is usually in the model (fewer columns, better compression)."
          }
        ]
      },
      {
        "t": "Service, Security & Administration",
        "d": "Publish, share, secure, and govern at enterprise scale.",
        "lv": 3,
        "children": [
          {
            "t": "Workspaces, Publishing & Apps",
            "d": "From .pbix to a governed content home.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Workspaces: collaboration areas with roles (admin, member, contributor, viewer)",
              "Publishing: what happens to datasets, reports, and refresh settings on publish",
              "Apps: curated collections for end users, hiding the workspace complexity",
              "Endorsement: certified vs promoted content as trust signals"
            ],
            "do": [
              "Create a workspace, assign roles, and publish a report into it",
              "Build an app with 3 audiences and publish it",
              "Get a dataset certified and document what certification required"
            ],
            "tools": ["Power BI Service"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Never build directly in production workspaces. Dev → test → prod, even if 'prod' is just a second workspace."
          },
          {
            "t": "Sharing, Dashboards vs Reports",
            "d": "Get the right content to the right people.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Reports vs dashboards: multi-page exploration vs single-screen pinned tiles",
              "Sharing mechanics: links, direct access, and the license requirements that bite",
              "Subscriptions and alerts: pushing insights instead of waiting for visits",
              "External sharing: B2B guests and publish-to-web (and why the latter terrifies security)"
            ],
            "do": [
              "Pin key visuals to a dashboard and arrange it for executives",
              "Set up a subscription with row-level-aware delivery",
              "Write the policy for when publish-to-web is (never) acceptable"
            ],
            "tools": ["Power BI Service"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "Publish-to-web makes a report visible to anyone with the link, indexed by search engines. There is almost never a legitimate enterprise use."
          },
          {
            "t": "Row-Level & Object-Level Security",
            "d": "Everyone sees their data. Nobody sees anyone else's.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "RLS: DAX filter roles (e.g. [Region] = USERPRINCIPALNAME()) applied per user",
              "Static vs dynamic RLS: hardcoded roles vs security tables joined to users",
              "Object-level security: hiding entire tables or columns from roles",
              "Testing as the user: 'View as' roles before anyone else does"
            ],
            "do": [
              "Implement dynamic RLS with a security mapping table",
              "Test with 'View as' for 3 different users and screenshot each",
              "Add OLS to hide salary columns from non-HR roles"
            ],
            "tools": ["Power BI Desktop", "Power BI Service", "DAX"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ],
            "tip": "RLS that works in Desktop but fails in the Service is usually a USERPRINCIPALNAME mismatch. Test in the Service with real users before go-live."
          },
          {
            "t": "Sensitivity Labels, DLP & Governance",
            "d": "Classify, protect, and audit BI content.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Microsoft Purview sensitivity labels: inherited from source to dataset to export",
              "DLP policies for Power BI: blocking risky sharing automatically",
              "Audit logs: who viewed, shared, and exported what",
              "Tenant settings: the admin switches that shape the whole organization's BI"
            ],
            "do": [
              "Apply sensitivity labels and verify they survive export to Excel",
              "Review audit logs for one workspace's sharing activity",
              "Document your tenant's 10 most important admin settings"
            ],
            "tools": ["Power BI Service", "Microsoft Purview"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"]
            ]
          },
          {
            "t": "Gateways, Refresh & Deployment Pipelines",
            "d": "Enterprise plumbing: keep data flowing safely.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Standard vs personal gateways: team infrastructure vs individual bridges",
              "Gateway clusters and high availability for production refresh",
              "Deployment pipelines: dev → test → prod with dataset rules and selective deploy",
              "PBIR (enhanced report format): source-control-friendly reports for CI/CD"
            ],
            "do": [
              "Set up a standard gateway with a data source for a team",
              "Build a 3-stage deployment pipeline and promote a report through it",
              "Convert a report to PBIR format and commit it to Git"
            ],
            "tools": ["On-premises data gateway", "Power BI Service", "Git"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"],
              ["Power BI May 2026 Update", "https://enterprisedna.co/resources/news/power-bi-may-2026-update-visual-calculations-pbir-copilot/"]
            ],
            "tip": "One gateway admin is a single point of failure. Always have at least two admins and document the recovery process."
          },
          {
            "t": "Automation: Power Automate, REST API & Embedded",
            "d": "Power BI as a programmable platform.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Power Automate: alert-triggered flows, approvals, and data-driven actions",
              "REST API: programmatically refreshing datasets, managing workspaces, exporting reports",
              "Power BI Embedded: reports inside your own apps for customers",
              "Python & R integration: visuals and data prep for advanced analytics"
            ],
            "do": [
              "Build a flow that emails stakeholders when a KPI alert fires",
              "Trigger a dataset refresh via the REST API from a script",
              "Embed a report in a test web page and manage its tokens"
            ],
            "tools": ["Power Automate", "Power BI REST API", "Python"],
            "res": [
              ["Power BI Documentation", "https://learn.microsoft.com/power-bi/"],
              ["Enterprise DNA", "https://enterprisedna.co/"]
            ],
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
