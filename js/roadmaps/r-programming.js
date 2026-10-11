/* Atlas roadmap data: R Programming (r-programming) */
ROADMAPS.push({
  "id": "r-programming",
  "title": "R Programming",
  "icon": "📐",
  "color": "#0d9488",
  "desc": "The statistician's language: R fundamentals, the tidyverse, visualization, and real statistical modeling.",
  "kind": "skill",
  "root": {
    "t": "R: Statistics-First Programming",
    "d": "From your first R script through dplyr, ggplot2, R Markdown, and statistical modeling.",
    "children": [
      {
        "t": "Getting Started with R",
        "d": "Why R exists, how to install it, and your first working script.",
        "lv": 1,
        "children": [
          {
            "t": "R vs Python: Why R?",
            "d": "Know what R is for: statistics-first, built by statisticians, unmatched for analysis.",
            "lv": 1,
            "time": "~2h",
            "tip": "R isn't a worse Python — it's a different tool. For statistics, academic research, and quick publication-quality analysis, R is often the faster path.",
            "learn": [
              "R's origin in statistics and its academic dominance",
              "Where R beats Python: stats packages, R Markdown, Shiny, ggplot2",
              "Where Python beats R: production systems, general-purpose programming"
            ],
            "do": [
              "List three tasks from your own work and decide which language fits each",
              "Browse CRAN's task views to see the depth of R's stats ecosystem",
              "Write one paragraph: when you would reach for R first"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"],
              ["CRAN", "https://cran.r-project.org/"]
            ]
          },
          {
            "t": "Installing R & RStudio",
            "d": "R plus an IDE: the setup every R user actually works in.",
            "lv": 1,
            "time": "~2h",
            "tip": "Install R first, then RStudio (the IDE needs R underneath). Positron is the modern alternative worth trying once you're comfortable.",
            "learn": [
              "Installing R from CRAN for your OS",
              "RStudio/Positron: console, script editor, environment, plots panes",
              "Projects (.Rproj) to keep working directories sane"
            ],
            "do": [
              "Install R and RStudio, run R.version.string in the console",
              "Create an RStudio Project for your learning work",
              "Explore the four panes: know where plots and help live"
            ],
            "tools": ["R", "RStudio", "Positron"],
            "res": [
              ["Posit", "https://posit.co/"]
            ]
          },
          {
            "t": "Your First R Script",
            "d": "Assignment, printing, and the <- operator that makes R look like R.",
            "lv": 1,
            "time": "~3h",
            "tip": "Use <- for assignment, not =. It's the R convention, and = inside function calls means something different — mixing them causes subtle bugs.",
            "learn": [
              "<- assignment and why R uses it",
              "Running code: console vs script, sourcing files",
              "Comments and basic script organization"
            ],
            "do": [
              "Write a script that assigns variables, does arithmetic, and prints results",
              "Source the script from a fresh session to prove it runs standalone",
              "Comment each block explaining what it does"
            ],
            "tools": ["R", "RStudio"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Getting Help in R",
            "d": "R documents everything: help pages, examples, and vignettes are your manual.",
            "lv": 1,
            "time": "~2h",
            "tip": "?mean is faster than Google for base functions. And every help page ends with runnable examples — run them, don't just read them.",
            "learn": [
              "?function, ??topic, and help.search()",
              "Reading help pages: Usage, Arguments, Examples sections",
              "Vignettes: long-form package documentation with browseVignettes()"
            ],
            "do": [
              "Look up ?mean and run every example at the bottom",
              "Find a function with ??regression and compare two candidates",
              "Open a dplyr vignette and run its first example"
            ],
            "tools": ["R"],
            "res": [
              ["CRAN", "https://cran.r-project.org/"]
            ]
          },
          {
            "t": "Installing & Managing Packages",
            "d": "CRAN's 20,000+ packages: install them right and keep projects reproducible.",
            "lv": 1,
            "time": "~3h",
            "tip": "install.packages() once per machine, library() every session. And renv snapshots package versions so your project still runs next year.",
            "learn": [
              "install.packages() vs library(): install once, load always",
              "CRAN mirrors and what a package version means",
              "renv for per-project reproducible environments"
            ],
            "do": [
              "Install and load the tidyverse, then check sessionInfo()",
              "Initialize renv in a project and snapshot it",
              "Restore the project on a 'fresh' library path to prove reproducibility"
            ],
            "tools": ["R", "renv", "pak"],
            "res": [
              ["CRAN", "https://cran.r-project.org/"]
            ]
          }
        ]
      },
      {
        "t": "Data Structures & Types",
        "d": "Vectors, factors, data frames: R thinks in columns, and so will you.",
        "lv": 1,
        "children": [
          {
            "t": "Atomic Vectors & Types",
            "d": "Everything in R is a vector. Types: numeric, integer, character, logical.",
            "lv": 1,
            "time": "~4h",
            "tip": "c(1, 'a') silently becomes c('1', 'a') — R coerces to the most flexible type. Unexpected character columns usually start here.",
            "learn": [
              "The five atomic types and implicit coercion rules",
              "c() to build vectors; length, names, and indexing with []",
              "NA: R's missing value and how it propagates"
            ],
            "do": [
              "Build vectors of each type and check class() and typeof()",
              "Trigger coercion on purpose and predict the result first",
              "Index with positions, names, and logical vectors"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Matrices & Arrays",
            "d": "Two-dimensional vectors with rows, columns, and matrix math.",
            "lv": 1,
            "time": "~3h",
            "tip": "R fills matrices column-major (down columns first), unlike Python's row-major. Reshape surprises almost always trace back to this.",
            "learn": [
              "matrix(): nrow, ncol, byrow, and dimnames",
              "Column-major filling order",
              "Basic matrix ops: %*%, t(), rowSums/colSums"
            ],
            "do": [
              "Build a matrix both byrow=TRUE and FALSE and compare",
              "Multiply two matrices and verify dimensions by hand",
              "Compute row means of a data matrix two ways"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Lists",
            "d": "The flexible container: mixed types, nested structures, model outputs.",
            "lv": 1,
            "time": "~3h",
            "tip": "[ ] returns a list, [[ ]] returns the element. This single distinction causes half of all R list confusion — learn it cold.",
            "learn": [
              "Lists hold anything: vectors, data frames, even other lists",
              "[ ] vs [[ ]] vs $: sublist vs element extraction",
              "lapply over lists as the idiomatic loop replacement"
            ],
            "do": [
              "Build a nested list and extract elements all three ways",
              "Fit a model, inspect its output: it's a list — pull out coefficients",
              "lapply a list of vectors to compute their means"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Data Frames & Tibbles",
            "d": "Rectangular data done right: the structure 90% of your work lives in.",
            "lv": 1,
            "time": "~4h",
            "tip": "Tibbles (tidyverse data frames) never turn strings into factors and never partially match column names — two classic base-R footguns, gone.",
            "learn": [
              "data.frame: list of equal-length vectors with row names",
              "tibble: the modern data frame — stricter, friendlier printing",
              "$, [, ] access and why tibbles don't do partial matching"
            ],
            "do": [
              "Build the same data as data.frame and tibble; compare printing and subsetting",
              "Trigger partial matching on a data.frame, then watch a tibble refuse",
              "Convert between the two with as_tibble() and as.data.frame()"
            ],
            "tools": ["R", "tibble"],
            "res": [
              ["tibble", "https://tibble.tidyverse.org/"]
            ]
          },
          {
            "t": "Factors: Categorical Data",
            "d": "Categories with order and levels: how R models 'small/medium/large'.",
            "lv": 2,
            "time": "~3h",
            "tip": "Unordered factors in a regression pick an arbitrary reference level (alphabetical). Set levels deliberately or your model comparisons mislead.",
            "learn": [
              "factor(): levels, labels, and ordered factors",
              "Why factors matter for modeling and plotting order",
              "forcats for sane factor manipulation"
            ],
            "do": [
              "Create an ordered factor for sizes and verify comparisons work",
              "Reorder factor levels by frequency with forcats::fct_infreq",
              "Fit a tiny model with a factor predictor and interpret the reference level"
            ],
            "tools": ["R", "forcats"],
            "res": [
              ["forcats", "https://forcats.tidyverse.org/"]
            ]
          },
          {
            "t": "Type Conversion & Coercion",
            "d": "Cast deliberately: as.numeric, as.character, and parsing dates.",
            "lv": 1,
            "time": "~3h",
            "tip": "as.numeric() on a factor returns the level CODES, not the values. Convert factor → character → numeric, or you'll analyze 1s and 2s.",
            "learn": [
              "as.* family and when coercion is implicit vs explicit",
              "The factor-to-numeric trap and its safe path",
              "Parsing dates with as.Date and lubridate"
            ],
            "do": [
              "Trigger the factor-to-numeric trap on purpose, then fix it correctly",
              "Convert a mixed column with as.numeric and find where NAs appeared",
              "Parse three date formats into Date objects"
            ],
            "tools": ["R", "lubridate"],
            "res": [
              ["lubridate", "https://lubridate.tidyverse.org/"]
            ]
          }
        ]
      },
      {
        "t": "Core R Language",
        "d": "Control flow, functions, and R's vectorized soul.",
        "lv": 1,
        "children": [
          {
            "t": "Operators & Vectorization",
            "d": "R operates on whole vectors at once: the mindset shift from scalar languages.",
            "lv": 1,
            "time": "~4h",
            "tip": "Recycling: c(1,2,3) + c(10,20) gives a warning and a wrong answer, not an error. Watch vector lengths like a hawk.",
            "learn": [
              "Arithmetic, comparison, and logical operators on vectors",
              "Vectorized functions: sqrt, log, paste, ifelse",
              "Recycling rules and the warnings they produce"
            ],
            "do": [
              "Standardize a vector (z-scores) in one expression",
              "Use ifelse() to recode a vector without a loop",
              "Trigger a recycling warning on purpose and explain it"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Conditionals & Loops",
            "d": "if/else and for/while — plus why R programmers reach for them last.",
            "lv": 1,
            "time": "~3h",
            "tip": "Growing a vector inside a loop (x <- c(x, new)) is R's classic performance killer — quadratic time. Pre-allocate or vectorize.",
            "learn": [
              "if/else if/else and vectorized ifelse()",
              "for, while, break, next",
              "Pre-allocation vs growing objects in loops"
            ],
            "do": [
              "Time growing a vector in a loop vs pre-allocating it",
              "Rewrite a loop as a vectorized expression",
              "Use next to skip iterations cleanly"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Writing Functions",
            "d": "Package your logic: arguments, defaults, return values, and scope.",
            "lv": 2,
            "time": "~4h",
            "tip": "R uses lazy evaluation: arguments aren't computed until used. Mostly invisible, but it explains some truly bizarre debugging sessions.",
            "learn": [
              "function() syntax, defaults, and ... (dot-dot-dot)",
              "Return values: explicit return() vs last-expression",
              "Lexical scoping and the global assignment <<- (avoid it)"
            ],
            "do": [
              "Write a rescale01() function with input validation via stopifnot()",
              "Add a ... argument that passes options through to another function",
              "Debug a scoping bug where a function silently used a global"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "The Apply Family",
            "d": "lapply, sapply, vapply: R's idiomatic iteration over lists and vectors.",
            "lv": 2,
            "time": "~4h",
            "tip": "vapply is the strict sibling: you declare the output type, and it errors instead of silently returning something weird. Prefer it in real code.",
            "learn": [
              "lapply always returns a list; sapply simplifies (sometimes surprisingly)",
              "vapply with explicit output templates for safety",
              "apply/tapply for matrices and grouped vectors"
            ],
            "do": [
              "lapply over data frame columns computing a custom summary",
              "Compare sapply vs vapply on a case where sapply surprises you",
              "Use tapply to compute group means without any package"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Strings & Regular Expressions",
            "d": "Text wrangling with stringr: consistent, pipeable string functions.",
            "lv": 2,
            "time": "~4h",
            "tip": "stringr functions all start with str_ and take the string first — designed for pipes. Base R's grep/sub family is powerful but inconsistent.",
            "learn": [
              "str_detect, str_replace, str_extract, str_split",
              "Regex essentials: character classes, anchors, quantifiers, groups",
              "str_c for concatenation and str_glue for interpolation"
            ],
            "do": [
              "Clean a messy text column: trim, collapse whitespace, standardize case",
              "Extract domains from emails with a regex and str_extract",
              "Build readable messages with str_glue()"
            ],
            "tools": ["R", "stringr"],
            "res": [
              ["stringr", "https://stringr.tidyverse.org/"]
            ]
          },
          {
            "t": "Dates & Times with lubridate",
            "d": "ymd(), mdy(), intervals, and time zones without the tears.",
            "lv": 2,
            "time": "~3h",
            "tip": "Daylight saving transitions create nonexistent and ambiguous times. Parse in UTC, convert to local only for display.",
            "learn": [
              "ymd/mdy/dmy parsers and their _hms variants",
              "Durations vs periods: exact seconds vs calendar time",
              "Time zones with with_tz() and force_tz()"
            ],
            "do": [
              "Parse a column of mixed US/EU date formats",
              "Compute ages and tenures correctly with intervals",
              "Convert a UTC timestamp column to Europe/Brussels for a report"
            ],
            "tools": ["R", "lubridate"],
            "res": [
              ["lubridate", "https://lubridate.tidyverse.org/"]
            ]
          },
          {
            "t": "Debugging & Error Handling",
            "d": "traceback, browser, and defensive coding for scripts that survive contact with reality.",
            "lv": 2,
            "time": "~3h",
            "tip": "options(error = recover) drops you into an interactive debugger at the crash site. It's the fastest way to understand a deep failure.",
            "learn": [
              "traceback() and reading the call stack bottom-up",
              "browser() breakpoints and debug()/trace()",
              "stop(), warning(), message() and tryCatch() for graceful failure"
            ],
            "do": [
              "Deliberately crash a nested function and explore with recover",
              "Insert browser() and step through execution",
              "Wrap a flaky operation in tryCatch with a fallback"
            ],
            "tools": ["R"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          }
        ]
      },
      {
        "t": "Importing Data & the tidyverse",
        "d": "Get data in from anywhere, then meet the tidyverse philosophy.",
        "lv": 2,
        "children": [
          {
            "t": "Reading CSVs with readr",
            "d": "Fast, predictable imports: read_csv done right.",
            "lv": 2,
            "time": "~3h",
            "tip": "readr never guesses silently the way you fear: check its column-spec message. When it guesses wrong, pass col_types explicitly.",
            "learn": [
              "read_csv vs base read.csv: speed and type-guessing differences",
              "col_types specification for full control",
              "Handling encodings, delimiters, and skipped rows"
            ],
            "do": [
              "Import a messy CSV and read the column specification message",
              "Fix a mis-guessed column with explicit col_types",
              "Compare read_csv vs read.csv on a 100k-row file"
            ],
            "tools": ["R", "readr"],
            "res": [
              ["readr", "https://readr.tidyverse.org/"]
            ]
          },
          {
            "t": "Excel, JSON & Databases",
            "d": "Real-world sources: spreadsheets, APIs, and SQL databases.",
            "lv": 2,
            "time": "~4h",
            "tip": "Excel files lie: merged cells, header rows that aren't headers, numbers stored as text. Always inspect after import — never trust it blind.",
            "learn": [
              "readxl: sheets, ranges, and skipping header junk",
              "jsonlite: fromJSON for API responses",
              "DBI + dbplyr: query databases and pull results into R"
            ],
            "do": [
              "Import a multi-sheet Excel file, specifying ranges",
              "Fetch a public JSON API and flatten it into a tibble",
              "Connect to SQLite, run a query, and collect the result"
            ],
            "tools": ["R", "readxl", "jsonlite", "DBI"],
            "res": [
              ["readxl", "https://readxl.tidyverse.org/"]
            ]
          },
          {
            "t": "The Pipe: |> and %>%",
            "d": "Read code left to right: the operator that defines modern R style.",
            "lv": 2,
            "time": "~3h",
            "tip": "Pipes are for sequences of transformations, not for everything. If a pipe chain needs a comment per line to be understood, break it into named steps.",
            "learn": [
              "Base pipe |> (R 4.1+) vs magrittr %>%: differences that matter",
              "The placeholder _ for non-first-argument piping",
              "When NOT to pipe: side effects and complex branching"
            ],
            "do": [
              "Rewrite nested function calls as a pipe chain",
              "Use the _ placeholder to pipe into a middle argument",
              "Refactor an unreadable 8-step pipe into named intermediates"
            ],
            "tools": ["R", "magrittr"],
            "res": [
              ["tidyverse", "https://www.tidyverse.org/"]
            ]
          },
          {
            "t": "Tidy Data Principles",
            "d": "The one idea behind the whole tidyverse: variables in columns, observations in rows.",
            "lv": 2,
            "time": "~3h",
            "tip": "Messy data isn't a moral failing, it's the default. Learn to recognize the three messes: headers as values, multiple variables in one column, variables in both rows and columns.",
            "learn": [
              "Tidy data rules: one variable per column, one observation per row",
              "The three common messes and their signatures",
              "Why tidy data makes every downstream tool simpler"
            ],
            "do": [
              "Diagnose three messy datasets: name exactly which rule each breaks",
              "Sketch the tidy version of a wide spreadsheet before touching code",
              "Explain why untidy data breaks ggplot2"
            ],
            "tools": ["R", "tidyr"],
            "res": [
              ["tidyverse", "https://www.tidyverse.org/"]
            ]
          },
          {
            "t": "Reshaping with tidyr",
            "d": "pivot_longer and pivot_wider: flip between wide and long on demand.",
            "lv": 2,
            "time": "~4h",
            "tip": "pivot_longer is the more common direction: spreadsheets arrive wide, analysis wants long. Master longer first, wider second.",
            "learn": [
              "pivot_longer: many columns → name/value pairs",
              "pivot_wider: name/value pairs → many columns",
              "separate/unite for splitting and combining columns"
            ],
            "do": [
              "Tidy a wide dataset with year columns via pivot_longer",
              "Round-trip: longer then wider, verify nothing changed",
              "Split a 'city, country' column with separate()"
            ],
            "tools": ["R", "tidyr"],
            "res": [
              ["tidyr", "https://tidyr.tidyverse.org/"]
            ]
          }
        ]
      },
      {
        "t": "Data Manipulation with dplyr",
        "d": "The verbs of data: filter, mutate, summarise, join — in readable pipelines.",
        "lv": 2,
        "children": [
          {
            "t": "The Five Verbs",
            "d": "filter, arrange, select, mutate, summarise: 90% of data manipulation.",
            "lv": 2,
            "time": "~5h",
            "tip": "dplyr verbs return new data frames; they never modify in place. If your pipeline 'did nothing', you forgot to assign the result.",
            "learn": [
              "filter() rows, arrange() order, select() columns",
              "mutate() new columns, summarise() collapsing summaries",
              "Chaining verbs with the pipe into readable pipelines"
            ],
            "do": [
              "Build a pipeline: filter → mutate → arrange → select on real data",
              "Recreate a spreadsheet report as a dplyr pipeline",
              "Debug a pipeline by running it one verb at a time"
            ],
            "tools": ["R", "dplyr"],
            "res": [
              ["dplyr", "https://dplyr.tidyverse.org/"]
            ]
          },
          {
            "t": "Group By & Summarise",
            "d": "Split-apply-combine: per-group statistics in two verbs.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always ungroup() when done. A grouped tibble passed to later code causes mysterious behavior three functions downstream.",
            "learn": [
              "group_by() + summarise(): the core pattern",
              "n(), n_distinct(), and grouped mutate() for within-group ranks",
              ".groups and the ungroup() habit"
            ],
            "do": [
              "Per-category revenue, order count, and average order value",
              "Rank rows within groups with a grouped mutate",
              "Demonstrate the lingering-group bug, then fix with ungroup()"
            ],
            "tools": ["R", "dplyr"],
            "res": [
              ["dplyr", "https://dplyr.tidyverse.org/"]
            ]
          },
          {
            "t": "Joins in dplyr",
            "d": "Combine tables with *_join: the grammar of merging.",
            "lv": 2,
            "time": "~4h",
            "tip": "Check join keys for duplicates BEFORE joining. A many-to-many join you didn't expect silently multiplies your rows.",
            "learn": [
              "inner/left/right/full_join and their row-retention rules",
              "by = join specifications, including different column names",
              "semi_join/anti_join: filtering joins without adding columns"
            ],
            "do": [
              "Left join orders to customers and find customers with no orders via anti_join",
              "Join on mismatched column names with by = c('a' = 'b')",
              "Diagnose a row-multiplying join by counting keys first"
            ],
            "tools": ["R", "dplyr"],
            "res": [
              ["dplyr", "https://dplyr.tidyverse.org/"]
            ]
          },
          {
            "t": "across() & Modern dplyr",
            "d": "Apply the same transformation to many columns without repetition.",
            "lv": 3,
            "time": "~4h",
            "tip": "across() inside summarise/mutate replaces dozens of repetitive lines. If you're copy-pasting a verb per column, you need across().",
            "learn": [
              "across() with tidyselect helpers: where(is.numeric), starts_with()",
              "Multiple functions per column with named lists",
              "if_any()/if_all() for row-wise conditions across columns"
            ],
            "do": [
              "Summarise mean and sd for all numeric columns in one call",
              "Round every numeric column with across(where(is.numeric), round, 2)",
              "Filter rows where any measurement column is NA with if_any()"
            ],
            "tools": ["R", "dplyr"],
            "res": [
              ["dplyr", "https://dplyr.tidyverse.org/"]
            ]
          },
          {
            "t": "Window Functions & Row-wise Work",
            "d": "Rankings, lags, and row-wise math inside dplyr pipelines.",
            "lv": 3,
            "time": "~4h",
            "tip": "rowwise() is genuinely slow on big data — it's a loop. Use it for truly row-dependent logic, vectorize everything else.",
            "learn": [
              "row_number(), min_rank(), dense_rank(), lag(), lead()",
              "cumsum()/cummean() for running calculations",
              "rowwise() + c_across() for per-row operations"
            ],
            "do": [
              "Top 3 per group with a grouped filter on row_number()",
              "Month-over-month growth with lag() in a pipeline",
              "Compute row means across measurement columns with c_across()"
            ],
            "tools": ["R", "dplyr"],
            "res": [
              ["dplyr", "https://dplyr.tidyverse.org/"]
            ]
          },
          {
            "t": "Functional Programming with purrr",
            "d": "map() over anything: the tidyverse successor to the apply family.",
            "lv": 3,
            "time": "~4h",
            "tip": "map_dbl/map_chr declare output types like vapply — fail fast instead of returning a surprise list. Type-stable code is debuggable code.",
            "learn": [
              "map(), map_dbl/chr/lgl/dfr: typed iteration",
              "Anonymous functions with \\(x) and the ~ .x formula syntax",
              " safely()/possibly() for error-tolerant mapping"
            ],
            "do": [
              "map_dbl over columns computing a custom metric",
              "Fit one model per group with nest + map",
              "Wrap a flaky web fetch in possibly() and map over URLs"
            ],
            "tools": ["R", "purrr"],
            "res": [
              ["purrr", "https://purrr.tidyverse.org/"]
            ]
          }
        ]
      },
      {
        "t": "Visualization with ggplot2",
        "d": "The grammar of graphics: compose charts from data, mappings, and layers.",
        "lv": 2,
        "children": [
          {
            "t": "Grammar of Graphics",
            "d": "Data + aesthetics + geoms: the mental model behind every ggplot.",
            "lv": 2,
            "time": "~4h",
            "tip": "Put mappings inside aes() when they vary with data, outside when they're constant. color='red' vs aes(color=group) is THE ggplot stumbling block.",
            "learn": [
              "ggplot(data, aes(x, y)): the three building blocks",
              "Geoms: point, line, bar, histogram, boxplot, smooth",
              "Global vs layer-specific aesthetics"
            ],
            "do": [
              "Build the same scatterplot three ways, moving aes between layers",
              "Trigger the constant-vs-mapping mistake on purpose, then fix it",
              "Layer points + smooth + labels on one plot"
            ],
            "tools": ["R", "ggplot2"],
            "res": [
              ["ggplot2", "https://ggplot2.tidyverse.org/"]
            ]
          },
          {
            "t": "Common Plot Types",
            "d": "The working set: bars, lines, distributions, and relationships.",
            "lv": 2,
            "time": "~5h",
            "tip": "geom_bar() counts for you; geom_col() plots values you computed. Mixing them up is the most common ggplot error message in existence.",
            "learn": [
              "geom_col vs geom_bar: precomputed vs counted",
              "geom_histogram/binwidth choices and geom_density",
              "geom_line for time series, geom_boxplot for group comparison"
            ],
            "do": [
              "Plot precomputed category totals with geom_col",
              "Compare three binwidths on the same histogram",
              "Build a time series with points, line, and a trend smooth"
            ],
            "tools": ["R", "ggplot2"],
            "res": [
              ["ggplot2", "https://ggplot2.tidyverse.org/"]
            ]
          },
          {
            "t": "Faceting, Scales & Themes",
            "d": "Small multiples, honest axes, and publication-ready polish.",
            "lv": 2,
            "time": "~4h",
            "tip": "facet_wrap() with free scales lets each panel tell its own story. Forced shared scales hide small-but-important patterns.",
            "learn": [
              "facet_wrap vs facet_grid for small multiples",
              "scale_* functions: colors, dates, log transforms, labels",
              "theme_minimal/bw/classic and customizing with theme()"
            ],
            "do": [
              "Facet a trend by category with free_y scales",
              "Fix a misleading axis with proper limits and breaks",
              "Design a clean custom theme for your reports"
            ],
            "tools": ["R", "ggplot2"],
            "res": [
              ["ggplot2", "https://ggplot2.tidyverse.org/"]
            ]
          },
          {
            "t": "Handling Overplotting",
            "d": "When points pile up: alpha, jitter, bins, and contours.",
            "lv": 3,
            "time": "~3h",
            "tip": "A black blob scatterplot tells you nothing. Alpha transparency is the first fix; 2D binning is the real one for big data.",
            "learn": [
              "alpha transparency and jitter for moderate overlap",
              "geom_bin2d/hex for dense data",
              "Sampling strategies when n is enormous"
            ],
            "do": [
              "Take a 100k-point blob and rescue it four different ways",
              "Compare hex bins vs alpha on the same data",
              "Decide and document which technique fits your dataset"
            ],
            "tools": ["R", "ggplot2"],
            "res": [
              ["ggplot2", "https://ggplot2.tidyverse.org/"]
            ]
          },
          {
            "t": "Interactive Plots & Shiny Intro",
            "d": "From static to interactive: plotly and your first Shiny app.",
            "lv": 3,
            "time": "~5h",
            "tip": "Shiny reactivity is the learning curve: inputs invalidate outputs. Sketch the reactive graph on paper before coding anything.",
            "learn": [
              "ggplotly(): converting ggplots to interactive plotly charts",
              "Shiny anatomy: UI, server, reactive expressions",
              "Inputs, outputs, and render functions"
            ],
            "do": [
              "Convert your best ggplot to interactive with ggplotly",
              "Build a Shiny app: a dropdown that re-filters a plot",
              "Deploy it or share via a reproducible script"
            ],
            "tools": ["R", "plotly", "shiny"],
            "res": [
              ["Shiny", "https://shiny.posit.co/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Reproducible Analysis & Modeling",
        "d": "R Markdown, real cleaning workflows, and statistics done properly.",
        "lv": 3,
        "children": [
          {
            "t": "R Markdown & Quarto",
            "d": "Code, narrative, and output in one document that rebuilds itself.",
            "lv": 2,
            "time": "~5h",
            "tip": "Knit early, knit often. A document that only knits at the end has hidden state — and hidden state is how embarrassing errors ship.",
            "learn": [
              "Chunks, chunk options (echo, message, warning, fig.width)",
              "YAML headers: titles, output formats, parameters",
              "Quarto as the modern successor: same ideas, more formats"
            ],
            "do": [
              "Write an analysis report mixing prose and computed results",
              "Parameterize it and knit two versions with different params",
              "Render the same source to HTML and PDF via Quarto"
            ],
            "tools": ["R", "rmarkdown", "Quarto"],
            "res": [
              ["Quarto", "https://quarto.org/"]
            ]
          },
          {
            "t": "End-to-End Cleaning Workflow",
            "d": "The full pipeline: import → diagnose → clean → validate → document.",
            "lv": 3,
            "time": "~6h",
            "tip": "Script every cleaning step and keep the raw data untouched. 'I fixed it in Excel' is not reproducible and not reviewable.",
            "learn": [
              "janitor::clean_names() and consistent naming conventions",
              "Missing values: naniar visualization, principled imputation",
              "Validation: assertr-style checks that fail loudly"
            ],
            "do": [
              "Clean a genuinely messy dataset start to finish as a script",
              "Visualize missingness patterns before deciding how to handle them",
              "Add validation checks that would catch future data breakage"
            ],
            "tools": ["R", "janitor", "naniar", "dplyr"],
            "res": [
              ["tidyverse", "https://www.tidyverse.org/"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Descriptive Statistics & EDA",
            "d": "Summarize honestly: centers, spreads, shapes, and relationships.",
            "lv": 2,
            "time": "~4h",
            "tip": "Report median and IQR alongside mean and SD for skewed data. Means alone on skewed data have misled entire organizations.",
            "learn": [
              "summary(), skimr, and grouped descriptives",
              "Skew, kurtosis, and what distribution shape implies",
              "Correlation: Pearson vs Spearman and their assumptions"
            ],
            "do": [
              "Profile a dataset with skimr and write a data-quality memo",
              "Compare Pearson vs Spearman on a non-linear relationship",
              "Build a correlation matrix visualization and interpret it"
            ],
            "tools": ["R", "skimr", "corrr"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Hypothesis Testing",
            "d": "t-tests, chi-square, and the discipline of not fooling yourself.",
            "lv": 3,
            "time": "~5h",
            "tip": "Check assumptions before running the test, not after getting a p-value you like. A t-test on wildly non-normal tiny samples is numerology.",
            "learn": [
              "t.test(): one-sample, two-sample, paired — and their assumptions",
              "Chi-square for categorical association",
              "p-values, confidence intervals, and effect sizes together"
            ],
            "do": [
              "Test a real two-group difference with assumption checks first",
              "Run a chi-square on a contingency table and interpret",
              "Report a full result: estimate, CI, p-value, effect size"
            ],
            "tools": ["R", "rstatix"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Linear & Logistic Regression",
            "d": "lm() and glm(): modeling relationships and binary outcomes.",
            "lv": 3,
            "time": "~6h",
            "tip": "Plot residuals. Every time. A model with great R² and a fan-shaped residual plot is lying to you about its uncertainty.",
            "learn": [
              "lm() formula syntax: y ~ x1 + x2 + x1:x2",
              "Interpreting coefficients, R², and p-values in plain language",
              "glm() for logistic regression: odds ratios and classification"
            ],
            "do": [
              "Fit, interpret, and diagnose a multiple regression",
              "Build a logistic model and evaluate with a confusion matrix",
              "Compare two models and justify the choice in writing"
            ],
            "tools": ["R", "broom"],
            "res": [
              ["R Project", "https://www.r-project.org/"]
            ]
          },
          {
            "t": "Capstone: Full Analysis Project",
            "d": "Prove it: question → data → analysis → report, all reproducible.",
            "lv": 3,
            "time": "~2w",
            "tip": "The question matters more than the technique. A clear question answered simply beats a fancy model answering nothing.",
            "learn": [
              "Scoping an analysis: question, data, deliverable",
              "Project structure: data-raw, R/, reports with renv",
              "Writing for a non-technical reader: findings first"
            ],
            "do": [
              "Choose a dataset and write a one-paragraph analysis plan",
              "Deliver a Quarto report: question, methods, findings, limitations",
              "Publish the repo with renv so anyone can reproduce it"
            ],
            "tools": ["R", "Quarto", "renv", "tidyverse", "ggplot2"],
            "res": [
              ["Quarto", "https://quarto.org/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
