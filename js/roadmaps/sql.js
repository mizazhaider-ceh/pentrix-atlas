/* Atlas roadmap data: SQL (sql) */
ROADMAPS.push({
  "id": "sql",
  "title": "SQL",
  "icon": "🗄️",
  "color": "#10b981",
  "desc": "The language every database speaks: query, combine, and analyze data from zero to optimization.",
  "kind": "skill",
  "root": {
    "t": "SQL: The Language of Data",
    "d": "From your first SELECT to window functions, transactions, and query tuning.",
    "children": [
      {
        "t": "Relational Foundations",
        "d": "How databases think: tables, rows, keys, and the relational model.",
        "lv": 1,
        "children": [
          {
            "t": "What Are Relational Databases?",
            "d": "Tables, rows, and columns: why the world stores serious data in rows and tables.",
            "lv": 1,
            "time": "~2h",
            "tip": "People memorize syntax and miss the model. If you can draw the tables and their relationships, the SQL writes itself.",
            "learn": [
              "Tables, rows (records), columns (fields), and cells",
              "What a primary key is and why every table needs a unique identifier",
              "Why relational databases still run banks, hospitals, and airlines"
            ],
            "do": [
              "Draw an ER-style sketch of a tiny shop: customers, orders, products, order items",
              "Mark each table's primary key and draw lines for the relationships",
              "Write one sentence explaining what could go wrong if orders had no customer link"
            ],
            "tools": ["draw.io", "paper and pen"],
            "res": [
              ["PostgreSQL Docs: Concepts", "https://www.postgresql.org/docs/current/tutorial-concepts.html"]
            ]
          },
          {
            "t": "SQL vs NoSQL",
            "d": "Know which tool fits which job: structured queries vs flexible documents.",
            "lv": 1,
            "time": "~2h",
            "tip": "It's not a war. NoSQL shines for flexible, nested data; SQL wins when your data has real structure and relationships.",
            "learn": [
              "ACID vs BASE consistency models in plain terms",
              "Relational (PostgreSQL, MySQL) vs document (MongoDB), key-value, and wide-column stores",
              "When a schema-first relational database is the right default choice"
            ],
            "do": [
              "List three projects you've seen and label which database type fits each and why",
              "Look up what database a tool you use (e.g. a CMS, analytics app) actually runs on",
              "Write down one scenario where NoSQL would genuinely beat SQL"
            ],
            "tools": ["PostgreSQL", "MongoDB"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org/"]
            ]
          },
          {
            "t": "Your SQL Playground",
            "d": "Get a database running locally so you can break things safely.",
            "lv": 1,
            "time": "~3h",
            "tip": "Start with SQLite: zero setup, one file, and it runs anywhere. Graduate to PostgreSQL when you need users, types, and real server behavior.",
            "learn": [
              "SQLite: a whole database in a single file, no server needed",
              "PostgreSQL via Docker or a local installer for the full-featured experience",
              "Query editors: psql, pgAdmin, DBeaver, or the sqlite3 CLI"
            ],
            "do": [
              "Install the sqlite3 CLI and create your first database file",
              "Run Docker with a PostgreSQL image, or install pgAdmin/DBeaver",
              "Connect from a client and run SELECT 1; to prove the connection works"
            ],
            "tools": ["SQLite", "PostgreSQL", "DBeaver", "pgAdmin"],
            "res": [
              ["SQLite", "https://www.sqlite.org/"],
              ["DBeaver", "https://dbeaver.io/"]
            ]
          },
          {
            "t": "SQL Data Types",
            "d": "Pick the right container for each value: numbers, text, dates, booleans.",
            "lv": 1,
            "time": "~3h",
            "tip": "Storing dates as text is the classic rookie mistake. Types exist so the database can compare, sort, and validate for you.",
            "learn": [
              "Numeric types: INT, DECIMAL/NUMERIC (money!), FLOAT and its precision traps",
              "Text types: VARCHAR vs TEXT, and when length limits matter",
              "DATE, TIME, TIMESTAMP, INTERVAL, and BOOLEAN"
            ],
            "do": [
              "Create a table with one column of each major type and insert sample rows",
              "Try inserting 'hello' into an INT column and read the error carefully",
              "Compare subtracting two DATEs vs two TIMESTAMPs"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Data Types", "https://www.postgresql.org/docs/current/datatype.html"]
            ]
          },
          {
            "t": "SQL Keywords & Syntax Rules",
            "d": "The grammar of the language: statements, clauses, and case-insensitive style.",
            "lv": 1,
            "time": "~2h",
            "tip": "SQL keywords are case-insensitive, but uppercase keywords with lowercase identifiers is the convention that keeps queries readable.",
            "learn": [
              "Statements end with a semicolon; whitespace and line breaks are free",
              "Keywords (SELECT, FROM, WHERE) vs identifiers (your table/column names)",
              "Reserved words to avoid as column names, and quoting with double quotes"
            ],
            "do": [
              "Write the same query in all-lowercase, then in conventional style, and compare readability",
              "Try naming a column \"order\" and watch what happens, then fix it with quoting",
              "Break a query across multiple lines with one clause per line"
            ],
            "tools": ["SQLite"],
            "res": [
              ["PostgreSQL Docs: SQL Syntax", "https://www.postgresql.org/docs/current/sql-syntax.html"]
            ]
          },
          {
            "t": "NULL: The Absence of Value",
            "d": "NULL is not zero and not empty string. Learn how missing data really behaves.",
            "lv": 1,
            "time": "~3h",
            "tip": "NULL = NULL is never true, it's NULL. You must use IS NULL / IS NOT NULL, or your WHERE filters will silently drop rows.",
            "learn": [
              "NULL means unknown, not zero or empty",
              "Three-valued logic: TRUE, FALSE, UNKNOWN and how WHERE treats UNKNOWN",
              "IS NULL / IS NOT NULL vs the = NULL trap"
            ],
            "do": [
              "Create a table with some NULL ages and run WHERE age = NULL vs WHERE age IS NULL",
              "Count rows with COUNT(*) vs COUNT(age) and explain the difference",
              "Use COALESCE to give NULLs a sensible default in a report query"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Comparison Functions", "https://www.postgresql.org/docs/current/functions-comparison.html"]
            ]
          }
        ]
      },
      {
        "t": "Core Querying: SELECT",
        "d": "Ask the database questions: filter, sort, and shape your results.",
        "lv": 1,
        "children": [
          {
            "t": "SELECT & FROM",
            "d": "Your first query: choose columns, choose a table, see data.",
            "lv": 1,
            "time": "~3h",
            "tip": "SELECT * is fine for exploring, but production queries name their columns: it's faster, clearer, and immune to schema changes.",
            "learn": [
              "SELECT column1, column2 FROM table — the anatomy of a query",
              "Column aliases with AS for readable output headers",
              "DISTINCT to kill duplicate rows"
            ],
            "do": [
              "Run SELECT * on a table, then rewrite it naming only the columns you need",
              "Alias a computed column like price * quantity AS line_total",
              "Use DISTINCT on a category column and count how many unique values exist"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: SELECT", "https://www.postgresql.org/docs/current/sql-select.html"]
            ]
          },
          {
            "t": "Filtering with WHERE",
            "d": "Keep only the rows you care about.",
            "lv": 1,
            "time": "~4h",
            "tip": "AND binds tighter than OR. Wrap OR conditions in parentheses or your filter will mean something you didn't intend.",
            "learn": [
              "Comparison operators: =, <>, <, >, <=, >=",
              "AND, OR, NOT and operator precedence",
              "BETWEEN, IN, LIKE with % and _ wildcards"
            ],
            "do": [
              "Find all orders above a threshold placed in the last 30 days",
              "Write a LIKE pattern matching emails from a specific domain",
              "Combine AND/OR with parentheses to build a filter you can read aloud correctly"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: WHERE", "https://www.postgresql.org/docs/current/queries-table-expressions.html"]
            ]
          },
          {
            "t": "Sorting & Limiting: ORDER BY, LIMIT",
            "d": "Put results in order and take just the slice you need.",
            "lv": 1,
            "time": "~3h",
            "tip": "Without ORDER BY, row order is undefined. If your app shows 'top 10', you need both ORDER BY and LIMIT or it's a lottery.",
            "learn": [
              "ORDER BY column ASC/DESC and sorting by multiple columns",
              "LIMIT / FETCH FIRST and OFFSET for pagination",
              "Sorting NULLs: NULLS FIRST / NULLS LAST behavior"
            ],
            "do": [
              "Get the 10 most expensive products with ORDER BY price DESC LIMIT 10",
              "Build page 3 of a paginated result with LIMIT 20 OFFSET 40",
              "Sort a nullable column and observe where NULLs land in your database"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: ORDER BY", "https://www.postgresql.org/docs/current/queries-order.html"]
            ]
          },
          {
            "t": "INSERT, UPDATE, DELETE",
            "d": "Write data, change data, remove data: the other half of the language.",
            "lv": 1,
            "time": "~4h",
            "tip": "Always run the WHERE clause as a SELECT first. An UPDATE or DELETE without the right filter rewrites the whole table.",
            "learn": [
              "INSERT INTO with explicit column lists and multi-row inserts",
              "UPDATE ... SET ... WHERE and why the WHERE is the dangerous part",
              "DELETE FROM ... WHERE vs TRUNCATE"
            ],
            "do": [
              "Insert five rows into a test table in a single statement",
              "Preview an UPDATE's WHERE with SELECT, then run the UPDATE",
              "Delete one row, then try DELETE without WHERE on a scratch table to feel the fear"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: INSERT", "https://www.postgresql.org/docs/current/sql-insert.html"],
              ["PostgreSQL Docs: UPDATE", "https://www.postgresql.org/docs/current/sql-update.html"]
            ]
          },
          {
            "t": "Operators & Expressions",
            "d": "Compute inside your queries: arithmetic, concatenation, and logic.",
            "lv": 1,
            "time": "~3h",
            "tip": "Doing the math in SQL instead of in app code keeps logic in one place and avoids shipping entire tables over the network.",
            "learn": [
              "Arithmetic operators and integer division surprises",
              "String concatenation (|| in PostgreSQL/SQLite, CONCAT in MySQL)",
              "Logical expressions and how NULL poisons them"
            ],
            "do": [
              "Compute line totals, discounts, and tax directly in a SELECT",
              "Build a full_name column by concatenating first and last name with a space",
              "Predict then test: what does 1 + NULL return?"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Operators", "https://www.postgresql.org/docs/current/functions-math.html"]
            ]
          }
        ]
      },
      {
        "t": "Joins & Set Operations",
        "d": "Combine tables like a detective: this is where SQL earns its keep.",
        "lv": 2,
        "children": [
          {
            "t": "INNER JOIN",
            "d": "Match rows across tables: only pairs that exist on both sides.",
            "lv": 1,
            "time": "~4h",
            "tip": "INNER JOIN silently drops customers with no orders. If your report counts look low, the join type is the first suspect.",
            "learn": [
              "The ON clause: matching foreign key to primary key",
              "Table aliases (o, c) to keep multi-table queries readable",
              "Joining more than two tables in one query"
            ],
            "do": [
              "Join orders to customers to show order id, customer name, total",
              "Chain three tables: order items → products → categories",
              "Count rows before and after the join to see what got filtered"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Joined Tables", "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"]
            ]
          },
          {
            "t": "LEFT, RIGHT & FULL OUTER JOIN",
            "d": "Keep the unmatched rows: customers without orders, orders without customers.",
            "lv": 2,
            "time": "~4h",
            "tip": "LEFT JOIN + WHERE right_table.id IS NULL is the classic 'find customers who never ordered' pattern. Memorize it.",
            "learn": [
              "LEFT JOIN keeps every left row, filling gaps with NULL",
              "RIGHT JOIN and FULL OUTER JOIN for the mirror and union cases",
              "Anti-join pattern: LEFT JOIN ... WHERE joined.id IS NULL"
            ],
            "do": [
              "List all customers and their order counts, including customers with zero orders",
              "Find products that have never been ordered using the anti-join pattern",
              "Run the same query as INNER vs LEFT and compare row counts"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Joined Tables", "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"]
            ]
          },
          {
            "t": "SELF JOIN & CROSS JOIN",
            "d": "Join a table to itself, and the cartesian product you should fear.",
            "lv": 2,
            "time": "~3h",
            "tip": "A CROSS JOIN of two 10k-row tables returns 100M rows. Self joins need two aliases for the same table or the query is ambiguous.",
            "learn": [
              "Self joins: employees and their managers live in one table",
              "CROSS JOIN: every row × every row, and when that's actually useful",
              "Accidental cartesian products from missing ON clauses"
            ],
            "do": [
              "Write an employees-manager self join showing each employee and their manager's name",
              "Deliberately run a small CROSS JOIN to feel how fast row counts explode",
              "Generate all size×color product variants with a CROSS JOIN"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["Mode SQL Tutorial", "https://mode.com/sql-tutorial/"]
            ]
          },
          {
            "t": "UNION & Set Operations",
            "d": "Stack result sets vertically: combine queries, not just tables.",
            "lv": 2,
            "time": "~3h",
            "tip": "UNION removes duplicates, UNION ALL doesn't. For big appends, UNION ALL is much faster — use UNION only when you need dedup.",
            "learn": [
              "UNION vs UNION ALL and the column-count/type matching rule",
              "INTERSECT and EXCEPT for overlap and difference queries",
              "Aliasing the whole union result for ORDER BY"
            ],
            "do": [
              "Combine archived and current orders into one history with UNION ALL",
              "Find customers present in both this year's and last year's buyers with INTERSECT",
              "Find newsletter subscribers who never bought anything with EXCEPT"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: UNION", "https://www.postgresql.org/docs/current/queries-union.html"]
            ]
          },
          {
            "t": "Subqueries",
            "d": "Queries inside queries: scalar, row, column, and table subqueries.",
            "lv": 2,
            "time": "~5h",
            "tip": "Correlated subqueries run once per outer row — elegant but slow on big tables. Reach for a join or CTE when the dataset grows.",
            "learn": [
              "Scalar subqueries in SELECT, and IN / EXISTS in WHERE",
              "Correlated vs non-correlated subqueries",
              "Derived tables: subqueries in FROM with an alias"
            ],
            "do": [
              "Find products priced above the average with a scalar subquery",
              "Find customers who placed at least one order using EXISTS",
              "Rewrite a correlated subquery as a JOIN and compare the plans"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Subqueries", "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-SUBQUERIES"]
            ]
          }
        ]
      },
      {
        "t": "Aggregations & Functions",
        "d": "Summarize thousands of rows into the numbers decisions are made of.",
        "lv": 2,
        "children": [
          {
            "t": "Aggregate Functions",
            "d": "COUNT, SUM, AVG, MIN, MAX: one number from many rows.",
            "lv": 2,
            "time": "~4h",
            "tip": "COUNT(*) counts rows, COUNT(column) skips NULLs. That difference has silently broken many dashboards.",
            "learn": [
              "COUNT, SUM, AVG, MIN, MAX and their NULL behavior",
              "AVG's NULL-skip: average of {10, NULL} is 10, not 5",
              "DISTINCT inside aggregates: COUNT(DISTINCT customer_id)"
            ],
            "do": [
              "Build a one-row summary: total revenue, average order, order count, biggest order",
              "Compare COUNT(*) vs COUNT(email) on a table with missing emails",
              "Count distinct customers per month"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Aggregate Functions", "https://www.postgresql.org/docs/current/functions-aggregate.html"]
            ]
          },
          {
            "t": "GROUP BY & HAVING",
            "d": "Slice the data into groups, then filter the groups.",
            "lv": 2,
            "time": "~5h",
            "tip": "WHERE filters rows before grouping, HAVING filters groups after. Mixing them up is the #1 GROUP BY bug.",
            "learn": [
              "GROUP BY: one result row per group",
              "HAVING for conditions on aggregates (WHERE can't see aggregates)",
              "Grouping by multiple columns and by expressions"
            ],
            "do": [
              "Revenue per product category, sorted descending",
              "Find categories with more than 100 orders using HAVING",
              "Group sales by year-month using a date expression"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: GROUP BY", "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP"]
            ]
          },
          {
            "t": "String Functions",
            "d": "Clean and reshape text inside the query: CONCAT, SUBSTRING, REPLACE, CASE.",
            "lv": 2,
            "time": "~4h",
            "tip": "Dirty text data is normal. Learn to TRIM, UPPER, and REPLACE in SQL and you'll clean most columns without leaving the database.",
            "learn": [
              "CONCAT/||, SUBSTRING, LENGTH, UPPER/LOWER, TRIM",
              "REPLACE and pattern extraction",
              "CASE expressions for conditional logic in SELECT, ORDER BY, and GROUP BY"
            ],
            "do": [
              "Standardize a messy phone column: trim spaces, strip dashes, uppercase",
              "Bucket customers into tiers with a CASE expression on lifetime spend",
              "Extract the domain from email addresses with SUBSTRING"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: String Functions", "https://www.postgresql.org/docs/current/functions-string.html"]
            ]
          },
          {
            "t": "Date & Time Functions",
            "d": "Time is the hardest data type. Tame it: extract, truncate, add, diff.",
            "lv": 2,
            "time": "~4h",
            "tip": "Store timestamps in UTC, convert to local time only at display. Timezone bugs are the bugs you discover at 2am.",
            "learn": [
              "DATE_TRUNC / EXTRACT for year, month, day-of-week parts",
              "Date arithmetic: intervals, adding days, age calculations",
              "CURRENT_DATE, NOW(), and timezone-aware vs naive timestamps"
            ],
            "do": [
              "Monthly revenue trend with DATE_TRUNC('month', order_date)",
              "Find orders placed on weekends using EXTRACT(DOW ...)",
              "Compute days-since-signup per customer with date subtraction"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: Date/Time Functions", "https://www.postgresql.org/docs/current/functions-datetime.html"]
            ]
          },
          {
            "t": "Conditional Logic: CASE, COALESCE, NULLIF",
            "d": "Branch your logic row by row without leaving SQL.",
            "lv": 2,
            "time": "~4h",
            "tip": "CASE is SQL's if/else and it works anywhere an expression works — SELECT, WHERE, ORDER BY, even inside aggregates.",
            "learn": [
              "Simple vs searched CASE expressions",
              "COALESCE for NULL fallbacks, NULLIF to avoid divide-by-zero",
              "Conditional aggregation: SUM(CASE WHEN ... THEN 1 ELSE 0 END)"
            ],
            "do": [
              "Pivot-like report: one column per quarter using conditional SUM",
              "Replace NULL discount with 0 via COALESCE in a totals query",
              "Label orders as small/medium/large with a searched CASE"
            ],
            "tools": ["SQLite", "PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Conditional Expressions", "https://www.postgresql.org/docs/current/functions-conditional.html"]
            ]
          }
        ]
      },
      {
        "t": "Window Functions & CTEs",
        "d": "Advanced analytics in pure SQL: rankings, running totals, and readable multi-step queries.",
        "lv": 3,
        "children": [
          {
            "t": "Window Functions: OVER & PARTITION BY",
            "d": "Compute across rows without collapsing them: the superpower of modern SQL.",
            "lv": 3,
            "time": "~6h",
            "tip": "Window functions run after WHERE/GROUP BY but you can't put them in WHERE. Filter window results with a subquery or CTE instead.",
            "learn": [
              "OVER (PARTITION BY ... ORDER BY ...) anatomy",
              "Aggregate windows: running totals and per-group averages beside detail rows",
              "ROWS vs RANGE frame clauses: UNBOUNDED PRECEDING to CURRENT ROW"
            ],
            "do": [
              "Add a running total column to daily sales with SUM(x) OVER (ORDER BY day)",
              "Show each order beside its customer's average order value",
              "Compute a 7-day moving average with a ROWS frame"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: Window Functions", "https://www.postgresql.org/docs/current/tutorial-window.html"]
            ]
          },
          {
            "t": "Ranking: ROW_NUMBER, RANK, DENSE_RANK",
            "d": "Top-N per group, deduplication, and pagination that actually works.",
            "lv": 3,
            "time": "~4h",
            "tip": "ROW_NUMBER is unique per row; RANK leaves gaps on ties, DENSE_RANK doesn't. Picking the wrong one corrupts 'top 3' reports.",
            "learn": [
              "ROW_NUMBER vs RANK vs DENSE_RANK on tied values",
              "Top-N per group: the #1 interview pattern",
              "Deduplication: keep one row per key with ROW_NUMBER in a CTE"
            ],
            "do": [
              "Top 3 products per category by revenue",
              "Delete duplicate rows keeping the earliest, via ROW_NUMBER in a CTE",
              "Compare the three functions on data with deliberate ties"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: Window Functions", "https://www.postgresql.org/docs/current/functions-window.html"]
            ]
          },
          {
            "t": "LAG, LEAD, FIRST_VALUE",
            "d": "Look at neighboring rows: period-over-period change without self joins.",
            "lv": 3,
            "time": "~4h",
            "tip": "LAG gives you last month's revenue in the same row as this month's — month-over-month growth becomes one subtraction.",
            "learn": [
              "LAG/LEAD to peek at previous/next rows in an ordering",
              "FIRST_VALUE/LAST_VALUE for group boundaries",
              "Defaults for the first row where LAG has nothing to return"
            ],
            "do": [
              "Month-over-month revenue growth % with LAG",
              "Flag orders that are bigger than the customer's previous order",
              "Show each employee's salary next to their department's top salary"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: Window Functions", "https://www.postgresql.org/docs/current/functions-window.html"]
            ]
          },
          {
            "t": "Common Table Expressions (CTEs)",
            "d": "Name your subqueries: WITH makes complex logic readable and debuggable.",
            "lv": 2,
            "time": "~4h",
            "tip": "Build a monster query one CTE at a time, SELECT * FROM each as you go. It's like printf-debugging for SQL.",
            "learn": [
              "WITH name AS (...) SELECT ... FROM name",
              "Chaining multiple CTEs for step-by-step pipelines",
              "CTEs vs derived tables vs temp tables: readability and scope"
            ],
            "do": [
              "Rewrite a nested subquery mess as three clean chained CTEs",
              "Build a funnel: visitors → signups → buyers as successive CTEs",
              "Use one CTE twice in the same query (e.g. compare two cohorts)"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: WITH Queries", "https://www.postgresql.org/docs/current/queries-with.html"]
            ]
          },
          {
            "t": "Recursive CTEs & Pivoting",
            "d": "Walk hierarchies and flip rows into columns.",
            "lv": 3,
            "time": "~5h",
            "tip": "Recursive CTEs need a solid anchor + recursive step, plus a termination guard. Infinite recursion in SQL is a frozen query.",
            "learn": [
              "Recursive CTE anatomy: anchor member, UNION ALL, recursive member",
              "Org charts, category trees, and date-series generation",
              "Pivoting with crosstab or conditional aggregation"
            ],
            "do": [
              "Walk an employee→manager hierarchy to print the full org tree",
              "Generate a calendar table of all dates in a year with a recursive CTE",
              "Pivot monthly sales into one row per product, one column per month"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: WITH RECURSIVE", "https://www.postgresql.org/docs/current/queries-with.html#QUERIES-WITH-RECURSIVE"]
            ]
          }
        ]
      },
      {
        "t": "Schema, Integrity & Performance",
        "d": "Design it right, protect it, and make it fast: the database professional's toolkit.",
        "lv": 3,
        "children": [
          {
            "t": "DDL: CREATE, ALTER, DROP",
            "d": "Define the schema itself: tables, columns, and their evolution.",
            "lv": 2,
            "time": "~4h",
            "tip": "ALTER TABLE on a giant production table can lock it for minutes. Practice migrations on copies and learn your engine's online options.",
            "learn": [
              "CREATE TABLE with column definitions and defaults",
              "ALTER TABLE: add/drop columns, change types, rename",
              "DROP vs TRUNCATE: schema gone vs data emptied"
            ],
            "do": [
              "Design and create the full schema for the shop: 4 tables, proper types",
              "Add a column with a default, backfill it, then add a NOT NULL constraint",
              "Practice a safe rename: create new, migrate, verify, drop old"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: CREATE TABLE", "https://www.postgresql.org/docs/current/sql-createtable.html"]
            ]
          },
          {
            "t": "Constraints & Keys",
            "d": "Let the database enforce your rules: keys, uniqueness, checks, foreign keys.",
            "lv": 2,
            "time": "~4h",
            "tip": "Constraints are cheaper than bug hunts. A foreign key that rejects orphan rows is worth a hundred application validations.",
            "learn": [
              "PRIMARY KEY, UNIQUE, NOT NULL, CHECK, DEFAULT",
              "FOREIGN KEY with ON DELETE CASCADE vs RESTRICT",
              "Naming constraints so error messages stay readable"
            ],
            "do": [
              "Add a CHECK ensuring price > 0 and try to violate it",
              "Create orders → customers FK and test deleting a customer with orders",
              "Add a UNIQUE constraint on email and handle the duplicate insert error"
            ],
            "tools": ["PostgreSQL", "SQLite"],
            "res": [
              ["PostgreSQL Docs: Constraints", "https://www.postgresql.org/docs/current/ddl-constraints.html"]
            ]
          },
          {
            "t": "Indexes",
            "d": "The index at the back of the book: find rows without scanning everything.",
            "lv": 3,
            "time": "~5h",
            "tip": "Indexes speed reads but slow writes and eat disk. Index your WHERE/JOIN/ORDER BY columns, not every column.",
            "learn": [
              "B-tree indexes: how lookups skip the full table scan",
              "Composite indexes and leftmost-prefix matching",
              "When indexes hurt: write-heavy tables and low-cardinality columns"
            ],
            "do": [
              "Time a query on a 1M-row table before and after adding an index",
              "Create a composite index and verify with EXPLAIN that it gets used",
              "Find an unused index scenario and drop it"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Indexes", "https://www.postgresql.org/docs/current/indexes.html"]
            ]
          },
          {
            "t": "EXPLAIN & Query Optimization",
            "d": "Read the query plan: see what the database actually does with your SQL.",
            "lv": 3,
            "time": "~6h",
            "tip": "EXPLAIN ANALYZE shows estimated vs actual rows. When they disagree wildly, stale statistics (ANALYZE) are usually the culprit.",
            "learn": [
              "EXPLAIN vs EXPLAIN ANALYZE: plan vs executed reality",
              "Seq Scan vs Index Scan vs Index Only Scan",
              "The big wins: selective projection, fewer subqueries, join order, sargable WHERE"
            ],
            "do": [
              "Find a slow query, EXPLAIN ANALYZE it, and fix the Seq Scan with an index",
              "Rewrite SELECT * as explicit columns and measure the difference",
              "Make a WHERE clause sargable: YEAR(date) = 2026 → date >= '2026-01-01'"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: EXPLAIN", "https://www.postgresql.org/docs/current/sql-explain.html"],
              ["Use The Index, Luke", "https://use-the-index-luke.com/"]
            ]
          },
          {
            "t": "Views",
            "d": "Saved queries as virtual tables: simplify, reuse, and protect.",
            "lv": 2,
            "time": "~3h",
            "tip": "Views are great for hiding complexity and restricting columns — but a view stacked on views becomes a performance mystery. Keep the chain shallow.",
            "learn": [
              "CREATE VIEW as a stored SELECT; querying it like a table",
              "Updatable views and their limits",
              "Materialized views: precomputed results with REFRESH"
            ],
            "do": [
              "Wrap your monthly revenue report in a view",
              "Create a view exposing only safe columns for an analyst role",
              "Build a materialized view for a heavy dashboard query and refresh it"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: CREATE VIEW", "https://www.postgresql.org/docs/current/sql-createview.html"]
            ]
          },
          {
            "t": "Transactions & ACID",
            "d": "All-or-nothing: keep money transfers from losing money.",
            "lv": 3,
            "time": "~5h",
            "tip": "Wrap multi-statement money moves in BEGIN/COMMIT. A half-applied transfer is worse than a failed one.",
            "learn": [
              "ACID: Atomicity, Consistency, Isolation, Durability",
              "BEGIN, COMMIT, ROLLBACK, SAVEPOINT",
              "Isolation levels and the anomalies they prevent (dirty reads, lost updates)"
            ],
            "do": [
              "Simulate a bank transfer with BEGIN, two UPDATEs, COMMIT",
              "Force an error mid-transaction and ROLLBACK to prove atomicity",
              "Use a SAVEPOINT to undo part of a transaction"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: Transactions", "https://www.postgresql.org/docs/current/tutorial-transactions.html"]
            ]
          },
          {
            "t": "Stored Procedures & Functions",
            "d": "Put logic in the database: reusable routines close to the data.",
            "lv": 3,
            "time": "~5h",
            "tip": "Procedures are great for batch jobs and data migrations. Business logic that changes often usually belongs in the app, not the DB.",
            "learn": [
              "CREATE FUNCTION with plpgsql: variables, IF, loops",
              "Procedures vs functions: side effects and transaction control",
              "Triggers: automatic actions on INSERT/UPDATE/DELETE"
            ],
            "do": [
              "Write a function that computes an order's total with tax",
              "Create an audit trigger logging every price change",
              "Build a procedure that archives old orders in one call"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["PostgreSQL Docs: PL/pgSQL", "https://www.postgresql.org/docs/current/plpgsql.html"]
            ]
          },
          {
            "t": "Security: GRANT, Roles & Injection Defense",
            "d": "Least privilege and parameterized queries: the two rules that prevent breaches.",
            "lv": 3,
            "time": "~4h",
            "tip": "SQL injection is still a top vulnerability after decades. Parameterized queries (never string concatenation) kill it completely.",
            "learn": [
              "CREATE ROLE, GRANT SELECT/INSERT, REVOKE: least-privilege access",
              "Parameterized queries vs string-built SQL",
              "Why the app user should never own the schema"
            ],
            "do": [
              "Create a read-only analyst role and verify it can't modify data",
              "Demonstrate an injection on a deliberately vulnerable query, then fix it with parameters",
              "Revoke a privilege and confirm the error"
            ],
            "tools": ["PostgreSQL"],
            "res": [
              ["OWASP SQL Injection Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"],
              ["PostgreSQL Docs: GRANT", "https://www.postgresql.org/docs/current/sql-grant.html"]
            ],
            "badge": "LAB"
          }
        ]
      }
    ]
  }
});
