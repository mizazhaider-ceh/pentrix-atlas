/* Atlas roadmap data: Data Analyst (data-analyst) */
ROADMAPS.push({
  "id": "data-analyst",
  "title": "Data Analyst",
  "icon": "📈",
  "color": "#ca8a04",
  "desc": "Turn raw data into decisions: spreadsheets, SQL, statistics, visualization, and stakeholder-ready storytelling.",
  "kind": "role",
  "root": {
    "t": "Data Analyst",
    "d": "From messy spreadsheets to board-ready insights.",
    "children": [
      {
        "t": "Analytics Foundations",
        "d": "What analytics is, how the work flows, and how to think like an analyst.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Data Analytics",
            "d": "Turning raw facts into answers a business can act on.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The difference between data, information, and insight: raw facts become information when organized, and insight when they change a decision",
              "The analyst's job in one sentence: shrink uncertainty for decision-makers",
              "Where analysts sit in an org: embedded in product/marketing/finance teams vs centralized data teams",
              "The analyst toolkit at a glance: spreadsheets, SQL, a BI tool, statistics, and communication"
            ],
            "do": [
              "Write a one-paragraph definition of data analytics in your own words",
              "List 5 decisions a company you know makes that could be improved with data",
              "Browse 3 real data analyst job postings and note the recurring skills"
            ],
            "tools": ["Pen & paper", "LinkedIn Jobs"],
            "res": [
              ["Google Data Analytics Certificate", "https://www.coursera.org/professional-certificates/google-data-analytics"]
            ],
            "tip": "Beginners think the job is tools. Tools are 30%; the other 70% is framing the right question and communicating the answer."
          },
          {
            "t": "The Four Types of Analytics",
            "d": "Descriptive, diagnostic, predictive, prescriptive: what happened, why, what's next, what to do.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Descriptive: summarizing what happened (dashboards, KPIs, monthly reports)",
              "Diagnostic: finding why it happened (drill-downs, root-cause analysis, segmentation)",
              "Predictive: forecasting what will happen (trends, churn models, demand forecasts)",
              "Prescriptive: recommending what to do (optimization, scenario simulation)"
            ],
            "do": [
              "Pick a business (e.g. a webshop) and write one example question for each of the four types",
              "Find a public dashboard and label which of the four types each chart serves",
              "Explain the four types to a friend without using jargon"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Google Data Analytics Certificate", "https://www.coursera.org/professional-certificates/google-data-analytics"]
            ],
            "tip": "Most analyst jobs are 80% descriptive and diagnostic. Predictive is the glamorous minority; master the basics first."
          },
          {
            "t": "The Analytics Workflow",
            "d": "Plan, wrangle, explore, analyze, share: the loop every analysis follows.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The six phases: ask, prepare, process, analyze, share, act — and why you loop back constantly",
              "Why 'ask' comes first: a vague question produces a useless analysis",
              "Data wrangling eats 60-80% of real project time; plan for it",
              "Documentation as you go: decisions, assumptions, and caveats are part of the deliverable"
            ],
            "do": [
              "Draw the six-phase workflow from memory on one page",
              "Take a past school project and map what you did to each phase",
              "Start an 'analysis journal' template you'll reuse for every project"
            ],
            "tools": ["Pen & paper", "Notion"],
            "res": [
              ["Google Data Analytics Certificate", "https://www.coursera.org/professional-certificates/google-data-analytics"]
            ]
          },
          {
            "t": "Data Literacy & Critical Thinking",
            "d": "Read numbers the way a skeptic reads headlines.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Base rates: why '90% of our users do X' means nothing without the denominator",
              "Survivorship bias and selection bias: who is missing from this dataset?",
              "Correlation is not causation: the three conditions needed to claim cause",
              "How charts lie: truncated axes, cherry-picked time ranges, misleading dual axes"
            ],
            "do": [
              "Find 3 misleading charts online and write down exactly what makes each deceptive",
              "Take one statistic from the news and hunt for its original source and methodology",
              "Practice the analyst's reflex: for any claim, ask 'compared to what?' and 'says who?'"
            ],
            "tools": ["Pen & paper"],
            "res": [
              ["Google Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course"]
            ],
            "tip": "The most valuable analyst skill is not a formula; it is the instinct to distrust a number until you know how it was made."
          },
          {
            "t": "Asking the Right Questions",
            "d": "Scope the analysis before you touch a single cell.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Turning vague asks ('look into sales') into answerable questions ('which product category drove the Q3 dip in the Benelux?')",
              "The stakeholder interview: goal, decision, deadline, and what 'good' looks like",
              "SMART questions for analysis: specific, measurable, answerable with available data",
              "Defining success metrics before analyzing, so you can't move the goalposts later"
            ],
            "do": [
              "Rewrite 5 vague business requests as precise analytical questions",
              "Role-play a stakeholder interview with a friend and take structured notes",
              "Write a one-page analysis brief: question, data needed, method, deadline"
            ],
            "tools": ["Pen & paper", "Google Docs"],
            "res": [
              ["Google Data Analytics Certificate", "https://www.coursera.org/professional-certificates/google-data-analytics"]
            ]
          }
        ]
      },
      {
        "t": "Spreadsheets: Excel & Google Sheets",
        "d": "The analyst's first home: formulas, lookups, pivots, and charts.",
        "lv": 1,
        "children": [
          {
            "t": "Spreadsheet Essentials",
            "d": "Navigate, format, and structure data like a pro.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Tidy data: one row per observation, one column per variable, no merged cells in data ranges",
              "Absolute vs relative references ($A$1 vs A1) and when each matters",
              "Data validation and conditional formatting as quality guardrails",
              "Sorting, filtering, and freeze panes for working with large tables"
            ],
            "do": [
              "Download any open dataset (CSV) and import it cleanly into a sheet",
              "Reformat it as tidy data: fix merged cells, split combined columns",
              "Apply data validation to one column and conditional formatting to highlight outliers"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ],
            "tip": "Merged cells in a data range will break pivots, filters, and formulas. Keep merges for presentation sheets only."
          },
          {
            "t": "Core Functions",
            "d": "SUM, AVERAGE, COUNT, MIN, MAX: the formulas you'll use daily.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "SUM / AVERAGE / COUNT / COUNTA / COUNTBLANK and what each actually counts",
              "MIN, MAX, LARGE, SMALL for extremes and rankings",
              "SUMIF(S), COUNTIF(S), AVERAGEIF(S): conditional aggregation without a pivot",
              "Why AVERAGE of an empty set errors, and how IFERROR keeps reports clean"
            ],
            "do": [
              "Build a monthly expense tracker using SUMIFS across categories and months",
              "Compute top-3 and bottom-3 values in a dataset with LARGE and SMALL",
              "Wrap every division in your sheet with IFERROR and a sensible fallback"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ]
          },
          {
            "t": "Logic Functions",
            "d": "IF, IFS, AND, OR: make your spreadsheet think.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "IF with nested conditions vs the cleaner IFS for multiple branches",
              "AND, OR, NOT for combining conditions; TRUE/FALSE as 1/0 in arithmetic",
              "Avoiding nested-IF hell: lookup tables and SWITCH as readable alternatives",
              "Boolean logic applied to flagging: e.g. =IF(AND(revenue>target, churn<5%),\"Hit\",\"Miss\")"
            ],
            "do": [
              "Build a grading/segmentation model with nested IF, then rewrite it with IFS",
              "Create a lead-scoring sheet that combines 4 conditions with AND/OR",
              "Refactor a 5-level nested IF into a lookup table"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ],
            "tip": "If your IF is nested more than 3 deep, stop. A small lookup table is easier to read, audit, and change."
          },
          {
            "t": "Lookup Functions",
            "d": "XLOOKUP, VLOOKUP, INDEX/MATCH: join tables without a database.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "XLOOKUP: the modern default — searches any direction, exact match by default, built-in if-not-found",
              "VLOOKUP's limits: leftmost-column only, fragile column indexes, approximate-match trap",
              "INDEX + MATCH: the classic flexible combo that works in older Excel versions",
              "Exact vs approximate match: when TRUE/1 is right (tax brackets) and when it silently corrupts (IDs)"
            ],
            "do": [
              "Join a product catalog to a sales table with XLOOKUP",
              "Reproduce the same join with VLOOKUP and note what breaks when you insert a column",
              "Build an approximate-match tier lookup (discount brackets) and test edge values"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ],
            "tip": "VLOOKUP's default approximate match has silently corrupted more reports than any other single feature. Always set exact match unless you specifically need brackets."
          },
          {
            "t": "Text & Date Cleaning Functions",
            "d": "TRIM, SUBSTITUTE, TEXTSPLIT, DATE: tame messy real-world data.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "TRIM, CLEAN, UPPER/LOWER/PROPER for standardizing text",
              "SUBSTITUTE vs REPLACE: targeted swaps vs positional surgery",
              "TEXTSPLIT / TEXTBEFORE / TEXTAFTER for parsing combined fields (modern Excel)",
              "DATE, DATEDIF, EOMONTH, YEARFRAC: date math without the serial-number confusion"
            ],
            "do": [
              "Clean a messy name column: trim spaces, fix casing, split first/last names",
              "Parse 'City, Country' strings into two columns with TEXTBEFORE/AFTER",
              "Compute customer tenure in months with DATEDIF and bucket it"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ]
          },
          {
            "t": "Pivot Tables & Charts",
            "d": "Summarize ten thousand rows in ten seconds.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Rows, columns, values, filters: the four drop zones and what each does",
              "Value field settings: sum vs count vs average, and 'show values as' % of total / running total",
              "Grouping dates by month/quarter/year without helper columns",
              "Choosing chart types: bars for comparison, lines for time, and when a pie is actually fine"
            ],
            "do": [
              "Build a pivot summarizing sales by region and month with % of total",
              "Add slicers and turn the pivot into an interactive mini-dashboard",
              "Create one chart per question type: comparison, trend, composition, distribution"
            ],
            "tools": ["Microsoft Excel", "Google Sheets"],
            "res": [
              ["Microsoft Excel", "https://www.microsoft.com/microsoft-365/excel"]
            ],
            "tip": "A pivot table answers 'what happened' faster than any formula chain. If you're writing SUMIFS over and over, you probably want a pivot."
          }
        ]
      },
      {
        "t": "SQL for Analysts",
        "d": "Query real databases: the single highest-ROI skill in analytics.",
        "lv": 1,
        "children": [
          {
            "t": "SELECT, WHERE, ORDER BY",
            "d": "Read data: pick columns, filter rows, sort results.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "SELECT with column lists and aliases; why SELECT * is a habit to break",
              "WHERE with comparison and logical operators; NULL needs IS NULL, never = NULL",
              "ORDER BY, LIMIT/OFFSET, and DISTINCT for quick exploration",
              "The logical query order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
            ],
            "do": [
              "Explore a sample database: list tables, preview 10 rows of each",
              "Write 10 filter queries combining AND/OR with correct parentheses",
              "Find your top-10 customers by revenue with ORDER BY and LIMIT"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "NULL is not zero and not empty string. WHERE col != 'X' silently drops NULL rows; decide if that's what you want."
          },
          {
            "t": "Filtering & Pattern Matching",
            "d": "Slice exactly the rows you need.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "IN, BETWEEN, LIKE with % and _ wildcards for text patterns",
              "Date filtering: date ranges, EXTRACT, and DATE_TRUNC for bucketing",
              "CASE WHEN for on-the-fly categorization inside a query",
              "COALESCE for sane defaults when NULLs would poison your math"
            ],
            "do": [
              "Find all email domains with LIKE '%@%.be' style patterns",
              "Bucket orders by month with DATE_TRUNC and compare year over year",
              "Write a CASE WHEN that segments customers into tiers from raw spend"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          },
          {
            "t": "JOINs",
            "d": "Combine tables: the heart of relational analysis.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "INNER vs LEFT vs RIGHT vs FULL OUTER: draw the Venn diagrams until they're reflex",
              "Why LEFT JOIN is the analyst's default: keep your base population intact",
              "Join keys must match in type and grain; duplicate keys silently multiply rows",
              "Self-joins for hierarchies (employee → manager) and time comparisons"
            ],
            "do": [
              "Join orders to customers and verify row counts before and after",
              "Demonstrate fan-out: join to a table with duplicate keys and watch totals explode",
              "Write a self-join that pairs each employee with their manager's name"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Always check row counts after a join. If rows multiplied unexpectedly, your join key isn't unique on one side."
          },
          {
            "t": "GROUP BY & Aggregations",
            "d": "Summarize: the SQL equivalent of a pivot table.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "GROUP BY with COUNT, SUM, AVG, MIN, MAX; every non-aggregated SELECT column must be grouped",
              "HAVING filters groups after aggregation; WHERE filters rows before",
              "COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col): three different answers",
              "Multi-level grouping and GROUPING SETS / ROLLUP for subtotals"
            ],
            "do": [
              "Compute monthly revenue, order count, and average basket size in one query",
              "Find categories with HAVING that WHERE could never express",
              "Build a ROLLUP report with grand totals and verify the math by hand"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ],
            "tip": "COUNT(DISTINCT user_id) is the metric; COUNT(*) is just rows. Mixing them up is how 'active users' gets inflated 10x."
          },
          {
            "t": "Subqueries & CTEs",
            "d": "Build queries in readable layers.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Subqueries in WHERE (IN, EXISTS) and in FROM as derived tables",
              "CTEs (WITH ...): named intermediate steps that read top-to-bottom",
              "EXISTS vs IN: semantics and performance differences that matter",
              "When to materialize: CTEs aid readability; temp tables aid repeated heavy work"
            ],
            "do": [
              "Rewrite a nested 3-level subquery as clean stacked CTEs",
              "Find customers with no orders using NOT EXISTS and compare with LEFT JOIN ... IS NULL",
              "Chain 4 CTEs: filter → join → aggregate → rank, each step testable alone"
            ],
            "tools": ["PostgreSQL", "SQLite", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "Window Functions",
            "d": "Rank, running totals, and moving averages without collapsing rows.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "OVER (PARTITION BY ... ORDER BY ...): compute across rows while keeping every row",
              "ROW_NUMBER vs RANK vs DENSE_RANK: ties behave differently, choose deliberately",
              "LAG/LEAD for period-over-period comparisons in one pass",
              "Running totals and moving averages with ROWS BETWEEN frames"
            ],
            "do": [
              "Rank products within each category by revenue with all three ranking functions",
              "Compute month-over-month growth with LAG in a single query",
              "Build a 7-day moving average of daily signups with a window frame"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"],
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Window functions run after WHERE/GROUP BY but before ORDER BY. You cannot put a window function in a WHERE clause; wrap it in a CTE first."
          },
          {
            "t": "Cleaning Data with SQL",
            "d": "Fix messy data at the source, reproducibly.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Deduplication with ROW_NUMBER() partitioned by the natural key",
              "Standardizing text: TRIM, UPPER, REPLACE, and regex with REGEXP_REPLACE",
              "Casting safely: TRY_CAST patterns and handling dirty date strings",
              "Auditing first: always SELECT the bad rows before you UPDATE or DELETE them"
            ],
            "do": [
              "Find and remove exact and fuzzy duplicates from a staging table",
              "Standardize a country column with 12 spelling variants into ISO codes",
              "Write a data-quality audit query: null rates, distinct counts, min/max per column"
            ],
            "tools": ["PostgreSQL", "DBeaver"],
            "res": [
              ["PostgreSQL Docs", "https://www.postgresql.org/docs/"]
            ],
            "tip": "Never UPDATE production data to 'clean' it. Clean in a view or staging table so the raw truth survives."
          }
        ]
      },
      {
        "t": "Collecting & Cleaning Data",
        "d": "Get data from anywhere and make it trustworthy.",
        "lv": 2,
        "children": [
          {
            "t": "Finding & Sourcing Data",
            "d": "CSV, APIs, databases, and scraping: know your options.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Flat files (CSV/Excel/Parquet): encodings, delimiters, and why Excel mangles dates and IDs",
              "REST APIs: endpoints, pagination, rate limits, and JSON as the lingua franca",
              "Databases vs warehouses: OLTP for transactions, OLAP for analysis",
              "Web scraping as a last resort: legality, robots.txt, and terms of service"
            ],
            "do": [
              "Import the same CSV with two different encodings and compare what breaks",
              "Pull paginated data from a public REST API into a local file",
              "Document a dataset's provenance: source, owner, refresh cadence, license"
            ],
            "tools": ["Python", "Postman", "Kaggle"],
            "res": [
              ["Kaggle Datasets", "https://www.kaggle.com/"]
            ],
            "tip": "Scraping a site that offers an API is asking for a cease-and-desist. Check for an API and a data license first."
          },
          {
            "t": "Handling Missing Data",
            "d": "Nulls are information. Treat them deliberately.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "MCAR vs MAR vs MNAR: why data is missing changes how you may handle it",
              "Deletion (listwise) vs imputation (mean, median, model-based): bias trade-offs of each",
              "Flagging missingness as its own feature: 'unknown' can be predictive",
              "Measuring the damage: null rates per column before deciding anything"
            ],
            "do": [
              "Profile null rates across all columns of a real dataset",
              "Compare analysis results under deletion vs median imputation vs a missing-indicator flag",
              "Write a missing-data policy note for one dataset: what you did and why"
            ],
            "tools": ["Python", "pandas", "Excel"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ],
            "tip": "Mean imputation shrinks variance and lies about certainty. If more than ~5% is missing, deleting or single-value imputation is probably biasing your results."
          },
          {
            "t": "Duplicates & Deduplication",
            "d": "Same entity, many rows: find them and merge them.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Exact duplicates vs near-duplicates (typos, casing, formatting differences)",
              "Defining the natural key: what combination of columns should be unique?",
              "Fuzzy matching basics: normalization, then string similarity thresholds",
              "Survivorship rules: when merging, which row's values win and why"
            ],
            "do": [
              "Detect exact duplicates with GROUP BY on the natural key",
              "Normalize and fuzzy-match a customer list with spelling variants",
              "Document dedup rules so the process is reproducible next month"
            ],
            "tools": ["Python", "pandas", "PostgreSQL"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          },
          {
            "t": "Outliers",
            "d": "Spot the weird, then decide: error, insight, or both.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Detection: z-scores, IQR fences, and why visualization beats formulas",
              "Error vs genuine extreme: a €1M order might be real (enterprise deal) or a typo",
              "Treatment options: keep, cap (winsorize), transform, or remove — with documentation",
              "How one outlier can drag a mean and flip a regression line"
            ],
            "do": [
              "Plot distributions and flag outliers with the IQR method on 3 columns",
              "Investigate the top 5 outliers: classify each as error or legitimate",
              "Show how mean vs median changes with and without the outliers"
            ],
            "tools": ["Python", "pandas", "seaborn"],
            "res": [
              ["seaborn", "https://seaborn.pydata.org/"]
            ],
            "tip": "Never silently delete outliers. Investigate first; the 'outlier' is sometimes the most interesting row in the dataset."
          },
          {
            "t": "Data Transformation & Feature Engineering",
            "d": "Reshape data into analysis-ready form.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Long vs wide format and pivoting between them",
              "Binning continuous variables and one-hot encoding categoricals",
              "Date parts, tenure, and lag features: time is the richest feature source",
              "Normalization vs standardization: when scale matters (and when it doesn't)"
            ],
            "do": [
              "Pivot a long-format events table into wide monthly features",
              "Engineer 5 features from a raw timestamp column",
              "Bin ages into cohorts and compare conversion rates across bins"
            ],
            "tools": ["Python", "pandas", "PostgreSQL"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          },
          {
            "t": "Data Quality Checks",
            "d": "Trust but verify: automated checks before every analysis.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The quality dimensions: completeness, validity, uniqueness, consistency, timeliness",
              "Schema checks, range checks, referential checks: the analyst's smoke tests",
              "Building a reusable data-quality report: null rates, distinct counts, distributions",
              "Great Expectations / dbt tests as the grown-up version of these checks"
            ],
            "do": [
              "Write a 10-check quality report for any dataset you use",
              "Add a freshness check: is this data actually current?",
              "Re-run your checks after every upstream refresh and diff the results"
            ],
            "tools": ["Python", "pandas", "dbt"],
            "res": [
              ["dbt", "https://dbt.com/"]
            ],
            "tip": "Run quality checks before analysis, not after presenting. Finding the bad join during Q&A is a career-limiting event."
          }
        ]
      },
      {
        "t": "Statistics for Analysis",
        "d": "The math that separates opinions from evidence.",
        "lv": 2,
        "children": [
          {
            "t": "Descriptive Statistics Overview",
            "d": "Summarize any dataset in five numbers.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Population vs sample: why almost everything you analyze is a sample",
              "The five-number summary and what it tells you at a glance",
              "Levels of measurement: nominal, ordinal, interval, ratio — and which stats each allows",
              "When descriptives mislead: Simpson's paradox and aggregation hiding the story"
            ],
            "do": [
              "Produce a full descriptive summary of a dataset with one command",
              "Demonstrate Simpson's paradox by aggregating and then segmenting one dataset",
              "Classify 10 variables by measurement level"
            ],
            "tools": ["Python", "pandas", "Excel"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          },
          {
            "t": "Central Tendency: Mean, Median, Mode",
            "d": "The 'typical' value, and which one to trust.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Mean: sensitive to every value, including the crazy ones",
              "Median: the middle value, robust to skew — the analyst's default for money",
              "Mode: the most common value, the only option for categorical data",
              "Skewed distributions: mean vs median tells you the direction of the tail"
            ],
            "do": [
              "Compute all three on income-like skewed data and explain the gaps",
              "Find a real 'average' claim (salary, house price) and argue median vs mean",
              "Plot a skewed distribution and mark mean, median, and mode on it"
            ],
            "tools": ["Python", "pandas", "seaborn"],
            "res": [
              ["seaborn", "https://seaborn.pydata.org/"]
            ],
            "tip": "'Average salary is €60k' usually means the mean, pulled up by executives. The median is what a typical employee actually earns."
          },
          {
            "t": "Dispersion: Range, Variance, Standard Deviation",
            "d": "Averages hide spread. Measure it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Range and IQR: quick, robust pictures of spread",
              "Variance and standard deviation: average distance from the mean, in original units",
              "The empirical rule: ~68/95/99.7% within 1/2/3 std devs for bell-shaped data",
              "Coefficient of variation: comparing spread across different scales"
            ],
            "do": [
              "Compare two teams with identical averages but different std devs; explain the business meaning",
              "Compute z-scores and flag values beyond ±3",
              "Show why range alone is a terrible summary with one extreme value"
            ],
            "tools": ["Python", "pandas", "Excel"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          },
          {
            "t": "Distributions: Shape, Skewness, Kurtosis",
            "d": "Read the shape of data like a native language.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Normal, uniform, skewed, bimodal: the shapes you'll actually meet",
              "Skewness: which tail is longer, and why it picks your summary statistic",
              "Kurtosis: heavy tails mean outliers are normal, not exceptional",
              "Log transforms: the standard fix for right-skewed money/count data"
            ],
            "do": [
              "Plot histograms of 5 real variables and classify each shape",
              "Apply a log transform to skewed revenue data and compare the shapes",
              "Explain to a stakeholder why their 'normal-looking' data isn't"
            ],
            "tools": ["Python", "seaborn", "matplotlib"],
            "res": [
              ["seaborn", "https://seaborn.pydata.org/"],
              ["matplotlib", "https://matplotlib.org/"]
            ]
          },
          {
            "t": "Correlation vs Causation",
            "d": "Two things moving together proves nothing. Prove it properly.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Pearson vs Spearman: linear vs monotonic relationships",
              "Correlation strength interpretation: 0.2 is weak no matter how exciting it looks",
              "Confounders, reverse causality, and coincidence: the three usual suspects",
              "Scatterplots first: a single number never tells the whole story"
            ],
            "do": [
              "Build a correlation matrix for a dataset and visualize it as a heatmap",
              "Find a spurious correlation and identify the likely confounder",
              "Write the 'correlation is not causation' caveat for one of your own findings"
            ],
            "tools": ["Python", "pandas", "seaborn"],
            "res": [
              ["seaborn", "https://seaborn.pydata.org/"]
            ],
            "tip": "Ice cream sales correlate with drownings. The confounder is summer. Always hunt for the third variable before claiming a link."
          },
          {
            "t": "Hypothesis Testing & p-values",
            "d": "Decide whether a difference is real or noise.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Null vs alternative hypotheses: the formal way to ask 'is this real?'",
              "p-value: probability of seeing this (or more extreme) data if the null were true — not the probability the null is true",
              "t-tests, chi-square, and when each applies; significance level α = 0.05 as convention, not law",
              "Type I vs Type II errors, power, and why sample size is everything"
            ],
            "do": [
              "Run a t-test comparing conversion between two landing pages",
              "Run a chi-square test of independence on a contingency table",
              "Compute the same test with n=50 and n=5000 to feel the power difference"
            ],
            "tools": ["Python", "scipy", "Excel"],
            "res": [
              ["scikit-learn", "https://scikit-learn.org/"]
            ],
            "tip": "p < 0.05 does not mean the effect is large or important. Always report effect size alongside significance."
          },
          {
            "t": "Regression Analysis",
            "d": "Model relationships and predict with them.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Simple linear regression: slope, intercept, and R² as 'variance explained'",
              "Multiple regression: controlling for confounders, reading coefficients ceteris paribus",
              "Assumptions that matter: linearity, independence, and residual checks",
              "Logistic regression for yes/no outcomes: odds ratios instead of slopes"
            ],
            "do": [
              "Fit a simple regression of ad spend vs revenue and interpret every number",
              "Add control variables and watch a 'significant' effect vanish",
              "Plot residuals to check whether your model is lying to you"
            ],
            "tools": ["Python", "scikit-learn", "statsmodels"],
            "res": [
              ["scikit-learn", "https://scikit-learn.org/"]
            ],
            "tip": "A high R² with garbage residuals is a pretty lie. Plot residuals every time; patterns there mean your model missed something."
          }
        ]
      },
      {
        "t": "Visualization & Storytelling",
        "d": "Make insights impossible to ignore.",
        "lv": 2,
        "children": [
          {
            "t": "Choosing the Right Chart",
            "d": "Match the visual to the question, not to your mood.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The four question types: comparison, trend, composition, distribution — each has a best chart",
              "Bars for categories, lines for time, scatter for relationships, histograms for distributions",
              "When NOT to use a chart: sometimes a single big number beats a graphic",
              "Pre-attentive attributes: position and length beat color and angle for accuracy"
            ],
            "do": [
              "Take 10 business questions and assign the right chart to each",
              "Redraw one bad chart three ways and pick the clearest",
              "Build a personal chart-chooser cheat sheet"
            ],
            "tools": ["Tableau", "Excel", "matplotlib"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "If you have to explain what the chart shows, the chart failed. The insight should hit before the legend is read."
          },
          {
            "t": "Core Charts in Depth",
            "d": "Bar, line, histogram, scatter: master the big four.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bar charts: sorting, baselines at zero, and avoiding 3D effects",
              "Line charts: one message per chart, direct labeling over legends",
              "Histograms: bin width choices change the story — test several",
              "Scatterplots: the fastest way to see relationships, clusters, and outliers"
            ],
            "do": [
              "Build each of the four on the same dataset and write one insight per chart",
              "Re-bin a histogram 5 ways and note how the story shifts",
              "Add trend lines and annotations to turn a chart into an argument"
            ],
            "tools": ["Tableau", "Excel", "seaborn"],
            "res": [
              ["seaborn", "https://seaborn.pydata.org/"],
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ]
          },
          {
            "t": "Advanced Charts",
            "d": "Heatmaps, funnels, treemaps, and small multiples for richer stories.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Heatmaps: correlation matrices and two-dimensional patterns at a glance",
              "Funnels: conversion drop-off across stages, the analyst's bread and butter",
              "Treemaps and stacked bars: part-to-whole without pie-chart sins",
              "Small multiples: the same chart repeated across segments beats one cluttered chart"
            ],
            "do": [
              "Build a funnel of a signup flow and quantify the biggest leak",
              "Create a correlation heatmap of your key metrics",
              "Replace one overloaded chart with small multiples and compare clarity"
            ],
            "tools": ["Tableau", "Python", "seaborn"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ]
          },
          {
            "t": "Dashboard Design Principles",
            "d": "Dashboards people actually open.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "One dashboard, one question: scope ruthlessly or nobody reads it",
              "Layout grammar: KPIs top-left, trends next, details at the bottom",
              "Color discipline: one accent color for 'look here', grays for context",
              "Interactivity with purpose: filters that answer follow-up questions, not decoration"
            ],
            "do": [
              "Audit a dashboard you use: list 3 things to remove",
              "Rebuild it with the KPI → trend → detail layout",
              "User-test it: watch someone use it for 60 seconds without guidance"
            ],
            "tools": ["Tableau", "Power BI", "Looker"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "The most common dashboard failure is trying to serve five audiences. Pick one user and one decision; build for that."
          },
          {
            "t": "Storytelling with Data",
            "d": "Structure findings so they drive action.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The 3-minute story arc: context → complication → resolution → recommendation",
              "Insight titles, not descriptive titles: 'Churn spiked in March' beats 'Churn by month'",
              "Declutter: remove every element that doesn't serve the message",
              "The one-slide test: if it doesn't fit, you don't understand it yet"
            ],
            "do": [
              "Rewrite 5 descriptive chart titles as insight titles",
              "Turn one analysis into a 3-slide story: what, so what, now what",
              "Present it in 3 minutes and cut everything the audience didn't ask about"
            ],
            "tools": ["PowerPoint", "Google Slides"],
            "res": [
              ["Tableau Training", "https://www.tableau.com/learn/training"]
            ],
            "tip": "End every analysis with a recommendation. 'Interesting' is not a deliverable; 'do X' is."
          },
          {
            "t": "Communicating with Stakeholders",
            "d": "Speak business, not statistics.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Translating stats into business language: 'p < 0.05' becomes 'we're confident this is real'",
              "The executive summary: findings and recommendations first, method in the appendix",
              "Managing expectations: caveats and confidence levels build trust, not weakness",
              "Handling 'can you just pull the numbers?' without becoming a query vending machine"
            ],
            "do": [
              "Write an executive summary of an analysis in under 150 words",
              "Practice the 30-second verbal update: result, implication, ask",
              "Draft a pushback email that reframes a vague request into a scoped question"
            ],
            "tools": ["Google Docs", "Slack"],
            "res": [
              ["Google Data Analytics Certificate", "https://www.coursera.org/professional-certificates/google-data-analytics"]
            ]
          }
        ]
      },
      {
        "t": "Python for Analysis",
        "d": "Scale beyond spreadsheets with pandas and notebooks.",
        "lv": 2,
        "children": [
          {
            "t": "Python & Jupyter Setup",
            "d": "Your analysis environment in 30 minutes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why notebooks: code, output, and narrative in one shareable document",
              "Environments and packages: pip/conda basics so 'it works on my machine' stays true",
              "The core stack: pandas, numpy, matplotlib, seaborn — what each is for",
              "Notebook hygiene: run top-to-bottom, restart-and-run-all before sharing"
            ],
            "do": [
              "Install Python and Jupyter, create your first notebook",
              "Import pandas and load a CSV with read_csv; inspect with head, info, describe",
              "Set up a project folder structure you'll reuse for every analysis"
            ],
            "tools": ["Python", "Jupyter", "VS Code"],
            "res": [
              ["Jupyter", "https://jupyter.org/"],
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ],
            "tip": "A notebook that only runs in the order you happened to click cells is a trap. Restart the kernel and run all before you share."
          },
          {
            "t": "pandas: DataFrames",
            "d": "Slice, filter, and reshape data with code.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Selecting: loc vs iloc, boolean masks, and query() for readable filters",
              "groupby: split-apply-combine, the pandas superpower for aggregation",
              "Merging and concatenating: the code version of JOINs and UNIONs",
              "Reshaping: pivot, melt, and stack for long/wide conversions"
            ],
            "do": [
              "Reproduce 5 of your SQL analyses in pandas on the same data",
              "Chain a full pipeline: filter → groupby → agg → sort → top-N",
              "Merge three tables and validate row counts at each step"
            ],
            "tools": ["Python", "pandas", "Jupyter"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ],
            "tip": "Chained assignment warnings (SettingWithCopyWarning) mean pandas isn't sure what you modified. Use .loc explicitly and the warning disappears."
          },
          {
            "t": "Data Cleaning with pandas",
            "d": "Programmatic wrangling: reproducible and fast.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Missing data: isna, dropna, fillna — and documenting the choice",
              "Duplicates: duplicated() and drop_duplicates() on the right subset",
              "String methods via .str: vectorized cleaning without loops",
              "Type conversion: to_datetime and astype with errors='coerce' for dirty columns"
            ],
            "do": [
              "Write a clean_data() function that takes raw CSV to analysis-ready DataFrame",
              "Handle a column with mixed date formats using to_datetime",
              "Build a cleaning log: every transformation recorded as code, not clicks"
            ],
            "tools": ["Python", "pandas", "numpy"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"],
              ["NumPy", "https://numpy.org/"]
            ]
          },
          {
            "t": "Visualization: matplotlib & seaborn",
            "d": "Publication-quality charts from code.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "matplotlib as the engine, seaborn as the fast lane for statistical plots",
              "The grammar: figure → axes → plot → labels → style, in that order",
              "Statistical plots: boxplots, violin plots, pairplots, and regression plots",
              "Styling for stakeholders: readable fonts, sane sizes, no default gray"
            ],
            "do": [
              "Recreate your 4 core charts in seaborn with proper titles and labels",
              "Build a pairplot to explore relationships across 5 variables",
              "Style one figure for a slide deck: big fonts, high contrast, tight layout"
            ],
            "tools": ["Python", "matplotlib", "seaborn"],
            "res": [
              ["matplotlib", "https://matplotlib.org/"],
              ["seaborn", "https://seaborn.pydata.org/"]
            ]
          },
          {
            "t": "End-to-End EDA Project",
            "d": "A portfolio piece: raw data to insights to story.",
            "lv": 2,
            "time": "~2w",
            "learn": [
              "Scoping: one dataset, three sharp questions, documented assumptions",
              "The EDA arc: profile → clean → explore → visualize → conclude",
              "Narrative notebooks: markdown cells that explain the why between code",
              "Presenting: a README with findings, caveats, and next steps"
            ],
            "do": [
              "Pick a Kaggle dataset and write your 3 analysis questions first",
              "Complete the full EDA arc in one polished notebook",
              "Publish it on GitHub/Kaggle with a README a hiring manager can skim in 2 minutes"
            ],
            "tools": ["Python", "pandas", "seaborn", "Kaggle", "GitHub"],
            "res": [
              ["Kaggle Datasets", "https://www.kaggle.com/"]
            ],
            "badge": "PROJECT",
            "tip": "Hiring managers skim. Put your best chart and your three key findings above the fold in the README."
          }
        ]
      },
      {
        "t": "Advanced: Machine Learning & Big Data",
        "d": "Stretch goals: predictive modeling and data at scale.",
        "lv": 3,
        "children": [
          {
            "t": "Supervised Learning Basics",
            "d": "Predict categories and numbers from historical data.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Classification vs regression: predicting labels vs predicting values",
              "Train/test split: why you never evaluate on the data you trained on",
              "Logistic regression and decision trees as the analyst-friendly starters",
              "Overfitting: the model that memorizes instead of learning"
            ],
            "do": [
              "Train a churn classifier on a tabular dataset with scikit-learn",
              "Split train/test, compare accuracy, and inspect the confusion matrix",
              "Tune one hyperparameter and observe the overfitting curve"
            ],
            "tools": ["Python", "scikit-learn", "pandas"],
            "res": [
              ["scikit-learn", "https://scikit-learn.org/"],
              ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"]
            ],
            "tip": "Start with logistic regression as your baseline. If a fancy model barely beats it, ship the simple one."
          },
          {
            "t": "Unsupervised Learning & Clustering",
            "d": "Find structure when nobody labeled the answers.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "K-means: how it works, choosing k, and the elbow method",
              "Customer segmentation as the canonical analyst use case",
              "Feature scaling: clustering on unscaled data clusters on the biggest numbers",
              "Validating clusters: do the segments mean something to the business?"
            ],
            "do": [
              "Segment customers with k-means on RFM-style features",
              "Try k=3..8, plot the elbow, and pick a defensible k",
              "Profile each cluster and give it a business-readable name"
            ],
            "tools": ["Python", "scikit-learn", "seaborn"],
            "res": [
              ["scikit-learn", "https://scikit-learn.org/"]
            ],
            "tip": "A cluster named 'Segment 4' is useless. Name segments by behavior ('Bargain hunters') or the analysis dies in a slide."
          },
          {
            "t": "Evaluating Models",
            "d": "Know whether your model is actually good.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Classification: accuracy, precision, recall, F1 — and which one your business cares about",
              "Regression: MAE, RMSE, and R² in plain language",
              "The confusion matrix: reading what the model gets wrong, not just how often",
              "Cross-validation: honest performance estimates instead of lucky splits"
            ],
            "do": [
              "Compute precision/recall/F1 for a churn model and argue which metric matters",
              "Compare RMSE and MAE on a revenue forecast and explain the difference",
              "Run 5-fold cross-validation and report the mean and spread"
            ],
            "tools": ["Python", "scikit-learn"],
            "res": [
              ["scikit-learn", "https://scikit-learn.org/"],
              ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"]
            ],
            "tip": "99% accuracy on a 99%-negative dataset means the model learned nothing. Always compare against the dumb baseline."
          },
          {
            "t": "Big Data Concepts & Spark",
            "d": "When data outgrows your laptop.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "The 3 Vs: volume, velocity, variety — and which one actually hurts",
              "Distributed thinking: MapReduce and why data locality matters",
              "Spark DataFrames: pandas-like API that runs on clusters",
              "Parquet and columnar storage: why file format choice is a 10x decision"
            ],
            "do": [
              "Convert a CSV to Parquet and compare file size and read speed",
              "Run a PySpark groupby on a dataset too big for comfortable pandas",
              "Explain partitioning to a colleague using a library-bookshelf analogy"
            ],
            "tools": ["Apache Spark", "Parquet", "Databricks"],
            "res": [
              ["Apache Spark", "https://spark.apache.org/"]
            ],
            "tag": "opt",
            "tip": "Most 'big data' problems are actually 'medium data' problems. If it fits in memory with Parquet, you don't need Spark."
          },
          {
            "t": "Deep Learning: A First Taste",
            "d": "Neural networks demystified, analyst-style.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "What a neural network is: stacked layers learning features automatically",
              "When deep learning wins: images, text, sequences — not small tabular data",
              "The honest trade-off: accuracy vs interpretability vs compute cost",
              "Transfer learning: standing on pretrained models instead of training from scratch"
            ],
            "do": [
              "Train a tiny tabular neural net and compare it honestly against gradient boosting",
              "Run one pretrained image classifier and inspect where it fails",
              "Write a paragraph on when you would (and wouldn't) propose deep learning"
            ],
            "tools": ["Python", "scikit-learn", "Kaggle"],
            "res": [
              ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"],
              ["Kaggle", "https://www.kaggle.com/"]
            ],
            "tag": "opt",
            "tip": "For tabular business data, gradient boosting usually beats neural nets with 1% of the effort. Deep learning is a specialty tool, not an upgrade."
          }
        ]
      }
    ]
  }
});
