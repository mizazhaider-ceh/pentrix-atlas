/* Atlas roadmap data: Python for Data Analysis (python-for-data-analysis) */
ROADMAPS.push({
  "id": "python-for-data-analysis",
  "title": "Python for Data Analysis",
  "icon": "🧪",
  "color": "#fb7185",
  "desc": "Turn raw data into insight with Python: NumPy, pandas, visualization, and real analyst workflows.",
  "kind": "skill",
  "root": {
    "t": "Python Data Analysis Toolkit",
    "d": "From Python basics through pandas mastery, visualization, and production-grade analyst workflows.",
    "children": [
      {
        "t": "Setup & Python Essentials",
        "d": "A working environment and the Python you actually need for data work.",
        "lv": 1,
        "children": [
          {
            "t": "Installing Python & Jupyter",
            "d": "Your lab bench: Python, pip, and JupyterLab running on your machine.",
            "lv": 1,
            "time": "~3h",
            "tip": "Use a virtual environment per project from day one. Global installs are where dependency conflicts are born.",
            "learn": [
              "Installing Python and verifying with python --version",
              "pip vs conda for package management",
              "JupyterLab: cells, kernels, and the notebook workflow"
            ],
            "do": [
              "Install Python 3.12+ and create a venv for your data projects",
              "pip install jupyterlab numpy pandas matplotlib and launch jupyter lab",
              "Run your first notebook: a markdown cell plus print('hello, data')"
            ],
            "tools": ["Python", "pip", "JupyterLab", "venv"],
            "res": [
              ["Jupyter", "https://jupyter.org/"],
              ["Python Docs: venv", "https://docs.python.org/3/library/venv.html"]
            ]
          },
          {
            "t": "Core Data Types & Structures",
            "d": "Lists, dicts, tuples, sets: the containers every dataset lives in first.",
            "lv": 1,
            "time": "~5h",
            "tip": "Dicts are the workhorse of data wrangling: JSON APIs, row records, lookup tables. Get fluent with dict.get() and comprehensions.",
            "learn": [
              "int, float, str, bool and type conversion pitfalls",
              "Lists, tuples, dicts, sets: when to use each",
              "Slicing, iteration, and nested structures"
            ],
            "do": [
              "Parse a list of dicts (like API JSON) and extract fields with comprehensions",
              "Convert a list of tuples into a dict and back",
              "Handle a KeyError gracefully with .get() defaults"
            ],
            "tools": ["Python"],
            "res": [
              ["Python Tutorial: Data Structures", "https://docs.python.org/3/tutorial/datastructures.html"]
            ]
          },
          {
            "t": "Control Flow & Functions",
            "d": "Branch, loop, and package logic into reusable functions.",
            "lv": 1,
            "time": "~5h",
            "tip": "If your function is longer than a screen, it's doing too much. Small functions with clear names are self-documenting.",
            "learn": [
              "if/elif/else, for and while loops, break/continue",
              "Defining functions: arguments, defaults, return values",
              "List/dict comprehensions and lambda basics"
            ],
            "do": [
              "Write a clean_data(value) function that strips and lowercases strings",
              "Rewrite a loop as a comprehension",
              "Build a categorize(score) function with clear branches and test edge cases"
            ],
            "tools": ["Python"],
            "res": [
              ["Python Tutorial: Control Flow", "https://docs.python.org/3/tutorial/controlflow.html"]
            ]
          },
          {
            "t": "Working with Files & CSVs",
            "d": "Read real files before pandas does it for you: understand what's underneath.",
            "lv": 1,
            "time": "~3h",
            "tip": "Encoding errors on CSVs are almost always fixed by encoding='utf-8' or 'latin-1'. Check the file's actual encoding instead of guessing twice.",
            "learn": [
              "open(), with-blocks, reading lines vs whole files",
              "The csv module: reader, DictReader, delimiters",
              "Paths with pathlib instead of string concatenation"
            ],
            "do": [
              "Read a CSV with csv.DictReader and print the first 5 rows",
              "Handle a file with a semicolon delimiter and quoted fields",
              "Walk a folder with pathlib and collect all .csv files"
            ],
            "tools": ["Python", "pathlib"],
            "res": [
              ["Python Docs: csv", "https://docs.python.org/3/library/csv.html"]
            ]
          },
          {
            "t": "Error Handling & Debugging",
            "d": "Read tracebacks like a map, and fail gracefully instead of mysteriously.",
            "lv": 1,
            "time": "~3h",
            "tip": "Read tracebacks bottom-up: the last line is the error, the lines above are where it happened. Most beginners read them top-down and get lost.",
            "learn": [
              "try/except/else/finally and catching specific exceptions",
              "Raising meaningful errors with context",
              "Debugging with print, then with the debugger (pdb / IDE)"
            ],
            "do": [
              "Wrap a file load in try/except FileNotFoundError with a helpful message",
              "Trigger and fix a KeyError, a TypeError, and a ValueError on purpose",
              "Set a breakpoint and step through a function in your editor"
            ],
            "tools": ["Python", "pdb"],
            "res": [
              ["Python Tutorial: Errors", "https://docs.python.org/3/tutorial/errors.html"]
            ]
          }
        ]
      },
      {
        "t": "NumPy Fundamentals",
        "d": "Fast numerical computing: arrays, vectorization, and the end of slow Python loops.",
        "lv": 1,
        "children": [
          {
            "t": "Arrays: Creation & Attributes",
            "d": "The ndarray: one type, fixed shape, blazing speed.",
            "lv": 1,
            "time": "~4h",
            "tip": "dtype matters: an array of Python ints in an int32 array can silently overflow. Check .dtype when numbers look wrong.",
            "learn": [
              "np.array, np.zeros, np.ones, np.arange, np.linspace",
              "shape, ndim, dtype, size: reading an array's metadata",
              "Why homogeneous arrays beat Python lists for math"
            ],
            "do": [
              "Create arrays with each constructor and inspect shape/dtype",
              "Build a 3x4 matrix and a 1D vector, print their attributes",
              "Time sum() on a Python list vs a NumPy array of 1M elements"
            ],
            "tools": ["NumPy"],
            "res": [
              ["NumPy", "https://numpy.org/doc/"]
            ]
          },
          {
            "t": "Indexing, Slicing & Reshaping",
            "d": "Grab exactly the slice of data you want, in any dimension.",
            "lv": 1,
            "time": "~4h",
            "tip": "Basic slicing returns a view, not a copy. Modify a slice and you modify the original — use .copy() when you need independence.",
            "learn": [
              "Integer, slice, and boolean (mask) indexing",
              "Reshape, ravel/flatten, transpose, and newaxis",
              "Views vs copies and the .copy() escape hatch"
            ],
            "do": [
              "Extract every second row and the last column of a 2D array",
              "Filter values above a threshold with a boolean mask",
              "Prove the view behavior: modify a slice, check the original"
            ],
            "tools": ["NumPy"],
            "res": [
              ["NumPy: Indexing", "https://numpy.org/doc/stable/user/basics.indexing.html"]
            ]
          },
          {
            "t": "Vectorization & Broadcasting",
            "d": "Delete your loops: operate on whole arrays at once.",
            "lv": 2,
            "time": "~5h",
            "tip": "If you're writing a for loop over array elements, stop and look for the vectorized op. It's usually 10-100x faster and one line.",
            "learn": [
              "Element-wise ops: arrays behave like single numbers",
              "Broadcasting rules: how (3,1) and (3,4) combine",
              "Universal functions (ufuncs): np.sqrt, np.exp, np.maximum"
            ],
            "do": [
              "Normalize a dataset column: (x - mean) / std in one expression",
              "Broadcast a per-column mean vector across all rows",
              "Rewrite a loop-based computation vectorized and time both"
            ],
            "tools": ["NumPy"],
            "res": [
              ["NumPy: Broadcasting", "https://numpy.org/doc/stable/user/basics.broadcasting.html"]
            ]
          },
          {
            "t": "Statistics & Random Numbers",
            "d": "Summaries and simulation: the math behind every analysis.",
            "lv": 2,
            "time": "~4h",
            "tip": "Always set a seed (np.random.default_rng(42)) before sampling. Unseeded randomness makes your analysis unreproducible.",
            "learn": [
              "Reductions: sum, mean, std, min, max, argmin/argmax with axis=",
              "Cumulative ops and percentiles with np.percentile",
              "Random sampling: Generator API, normal/uniform draws, shuffling"
            ],
            "do": [
              "Compute per-column means and stds of a dataset with axis=0",
              "Simulate 10,000 dice rolls and plot the distribution shape",
              "Bootstrap a mean: resample with replacement 1000 times"
            ],
            "tools": ["NumPy", "SciPy"],
            "res": [
              ["NumPy: Statistics", "https://numpy.org/doc/stable/reference/routines.statistics.html"],
              ["SciPy", "https://scipy.org/"]
            ]
          },
          {
            "t": "Linear Algebra Essentials",
            "d": "The dot products and decompositions behind regression and ML.",
            "lv": 2,
            "time": "~4h",
            "tip": "You don't need to be a mathematician, but you do need to know what a dot product and a matrix inverse mean when a library calls them.",
            "learn": [
              "Dot products, matrix multiplication (@), and norms",
              "Solving linear systems with np.linalg.solve vs inv",
              "Eigenvalues and SVD at a conceptual level"
            ],
            "do": [
              "Fit a line with the normal equation using linalg.solve",
              "Compute cosine similarity between two vectors",
              "Run an SVD on a small matrix and reconstruct it from components"
            ],
            "tools": ["NumPy"],
            "res": [
              ["NumPy: Linear Algebra", "https://numpy.org/doc/stable/reference/routines.linalg.html"]
            ]
          }
        ]
      },
      {
        "t": "pandas Core",
        "d": "DataFrames: the analyst's home base for real-world tabular data.",
        "lv": 1,
        "children": [
          {
            "t": "Series & DataFrames",
            "d": "Labeled data structures: think spreadsheet, behave like a database.",
            "lv": 1,
            "time": "~4h",
            "tip": "A DataFrame column IS a Series. Most pandas confusion disappears once you internalize that everything is Series operations.",
            "learn": [
              "Series: labeled 1D array with an index",
              "DataFrame: dict-like of Series sharing an index",
              "Creating from dicts, lists, and NumPy arrays"
            ],
            "do": [
              "Build a DataFrame from a list of dicts and inspect dtypes",
              "Select a single column vs a list of columns; note the type difference",
              "Set a meaningful column as the index and observe .loc behavior"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: 10 Minutes to pandas", "https://pandas.pydata.org/docs/user_guide/10min.html"]
            ]
          },
          {
            "t": "Reading Data: IO Tools",
            "d": "CSV, Excel, JSON, SQL: get data into a DataFrame from anywhere.",
            "lv": 1,
            "time": "~4h",
            "tip": "Always pass parse_dates and dtype on read. Letting pandas guess types on a 1GB CSV is how you get object columns that should be dates.",
            "learn": [
              "read_csv/read_excel/read_json options: sep, encoding, parse_dates, dtype",
              "read_sql with a database connection",
              "Writing back out: to_csv, to_parquet (use Parquet for big data)"
            ],
            "do": [
              "Load a messy CSV: fix the separator, parse dates, set dtypes explicitly",
              "Read one sheet from an Excel workbook and one table from SQLite",
              "Save a cleaned DataFrame as Parquet and compare file size vs CSV"
            ],
            "tools": ["pandas", "openpyxl", "SQLAlchemy"],
            "res": [
              ["pandas: IO Tools", "https://pandas.pydata.org/docs/user_guide/io.html"]
            ]
          },
          {
            "t": "Inspection & Selection",
            "d": "Know your data in 60 seconds: shape, dtypes, and surgical row/column selection.",
            "lv": 1,
            "time": "~4h",
            "tip": "The .loc vs .iloc confusion: .loc uses labels, .iloc uses positions. .loc['a':'c'] includes BOTH ends; .iloc[0:2] excludes the last.",
            "learn": [
              "head, tail, shape, info, describe, dtypes, nunique",
              ".loc (label-based) vs .iloc (position-based) selection",
              "Boolean filtering and query() for readable conditions"
            ],
            "do": [
              "Run the full inspection ritual on a new dataset: shape, info, describe, nunique",
              "Select rows 10-20 and columns by name with .loc; then by position with .iloc",
              "Filter with a compound boolean condition and rewrite it with query()"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: Indexing Guide", "https://pandas.pydata.org/docs/user_guide/indexing.html"]
            ]
          },
          {
            "t": "Adding & Transforming Columns",
            "d": "Derive new features: vectorized column math, apply, and map.",
            "lv": 2,
            "time": "~4h",
            "tip": "apply() with a Python function is a loop in disguise. Prefer vectorized ops and .map() with dicts; save apply for truly custom logic.",
            "learn": [
              "Vectorized column creation: df['total'] = df['a'] * df['b']",
              ".map() with dicts for recoding, .replace() for cleanup",
              "apply() row-wise vs column-wise, and when it's justified"
            ],
            "do": [
              "Create total, tax, and profit-margin columns vectorized",
              "Recode country codes to full names with a dict and .map()",
              "Time apply() vs a vectorized equivalent on 100k rows"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: 10 Minutes to pandas", "https://pandas.pydata.org/docs/user_guide/10min.html"]
            ]
          },
          {
            "t": "Sorting, Ranking & Duplicates",
            "d": "Order your data, find the best and worst, and kill duplicate rows.",
            "lv": 2,
            "time": "~3h",
            "tip": "drop_duplicates keeps the FIRST occurrence by default. For 'latest record per customer', sort by date descending first, then drop duplicates.",
            "learn": [
              "sort_values with multiple keys and ascending flags",
              "rank() methods: dense, min, average — and their tie behavior",
              "duplicated() and drop_duplicates() with subset and keep"
            ],
            "do": [
              "Rank products within each category by revenue",
              "Deduplicate keeping the most recent record per customer",
              "Find the top 5 and bottom 5 with nlargest/nsmallest"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          }
        ]
      },
      {
        "t": "Cleaning & Reshaping",
        "d": "Real data is dirty. This is the unglamorous skill that decides everything.",
        "lv": 2,
        "children": [
          {
            "t": "Missing Values",
            "d": "Find the holes, then decide: drop, fill, or flag them.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never silently fillna(0) on a column where 0 is a real value (like revenue). You just invented data. Flag or impute thoughtfully.",
            "learn": [
              "isna()/notna(), counting and visualizing missingness",
              "dropna strategies: rows vs columns, thresh=",
              "fillna: constants, forward/backward fill, and group-wise medians"
            ],
            "do": [
              "Profile missingness per column as percentages, sorted",
              "Impute a numeric column with its group median, not the global mean",
              "Add a was_missing indicator column before filling, then compare results"
            ],
            "tools": ["pandas", "seaborn"],
            "res": [
              ["pandas: Missing Data", "https://pandas.pydata.org/docs/user_guide/missing_data.html"]
            ]
          },
          {
            "t": "Types, Dates & Strings",
            "d": "Fix the dtypes: dates stored as text, numbers with commas, messy strings.",
            "lv": 2,
            "time": "~4h",
            "tip": "pd.to_datetime with errors='coerce' turns unparseable dates into NaT instead of crashing — then you can find and fix the bad rows.",
            "learn": [
              "astype and pd.to_numeric with errors='coerce'",
              "pd.to_datetime: formats, dayfirst, and timezone handling",
              ".str accessor: lower, strip, split, contains, extract with regex"
            ],
            "do": [
              "Convert a '1,234.56' string column to float",
              "Parse three different date formats into one datetime column",
              "Extract domains from emails with .str.extract and a regex"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: Text Data", "https://pandas.pydata.org/docs/user_guide/text.html"]
            ]
          },
          {
            "t": "Merging & Joining DataFrames",
            "d": "Combine datasets: the pandas version of SQL joins.",
            "lv": 2,
            "time": "~5h",
            "tip": "Validate your merges with validate='many_to_one' and indicator=True. Silent row duplication from bad keys is the classic pandas disaster.",
            "learn": [
              "merge(): inner, left, right, outer on keys",
              "concat(): stacking rows or side-by-side columns",
              "validate= and indicator= to catch key problems early"
            ],
            "do": [
              "Merge orders with customers, validating many_to_one",
              "Stack monthly files with concat and reset the index",
              "Diagnose a merge that doubled your rows: find the duplicate keys"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: Merge/Join", "https://pandas.pydata.org/docs/user_guide/merging.html"]
            ]
          },
          {
            "t": "GroupBy & Aggregation",
            "d": "Split-apply-combine: the engine of every summary report.",
            "lv": 2,
            "time": "~5h",
            "tip": "groupby().agg() with named aggregation gives you clean multi-metric summaries in one pass — learn it early, use it everywhere.",
            "learn": [
              "groupby mechanics: split, apply, combine",
              "agg with multiple functions and named aggregation",
              "transform() for group values broadcast back to rows"
            ],
            "do": [
              "Monthly revenue, order count, and avg order value in one agg call",
              "Add each customer's lifetime value back onto every order row with transform",
              "Compare a slow loop-based group summary vs groupby timing"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: GroupBy", "https://pandas.pydata.org/docs/user_guide/groupby.html"]
            ]
          },
          {
            "t": "Reshaping: Pivot, Melt & Stack",
            "d": "Flip between long and tidy formats as the analysis demands.",
            "lv": 2,
            "time": "~4h",
            "tip": "Keep data long/tidy for analysis and pivot only for presentation. Wide format fights you at every step of real analysis.",
            "learn": [
              "pivot_table: rows, columns, values, aggfunc, margins",
              "melt: wide → long (the undo button for spreadsheets)",
              "stack/unstack and crosstab for quick frequency tables"
            ],
            "do": [
              "Pivot monthly sales: products as rows, months as columns",
              "Melt a wide spreadsheet back into tidy long format",
              "Build a crosstab of churn by plan tier"
            ],
            "tools": ["pandas"],
            "res": [
              ["pandas: Reshaping", "https://pandas.pydata.org/docs/user_guide/reshaping.html"]
            ]
          },
          {
            "t": "Outliers & Data Validation",
            "d": "Spot the impossible values before they corrupt your conclusions.",
            "lv": 2,
            "time": "~4h",
            "tip": "An outlier is guilty until proven innocent: investigate first (data entry error?), and document whatever you decide to do with it.",
            "learn": [
              "IQR and z-score methods for flagging outliers",
              "Sanity checks: ranges, uniqueness, referential consistency",
              "Winsorizing vs removing vs keeping with a flag"
            ],
            "do": [
              "Flag outliers in a price column with the IQR rule and inspect them manually",
              "Write assertion checks: no negative ages, emails unique, dates in range",
              "Compare mean vs median with and without the outliers"
            ],
            "tools": ["pandas", "NumPy"],
            "res": [
              ["pandas Docs", "https://pandas.pydata.org/docs/"]
            ]
          }
        ]
      },
      {
        "t": "Visualization",
        "d": "Show, don't tell: matplotlib control, seaborn speed, plotly interactivity.",
        "lv": 2,
        "children": [
          {
            "t": "Matplotlib Foundations",
            "d": "The grammar underneath everything: figures, axes, and full control.",
            "lv": 2,
            "time": "~5h",
            "tip": "Learn the object-oriented interface (fig, ax = plt.subplots()) from the start. The plt.plot() state machine doesn't scale past one chart.",
            "learn": [
              "Figure vs Axes: the two-level object model",
              "Line, bar, scatter, histogram, and box plots",
              "Labels, titles, legends, limits, and saving with tight bbox"
            ],
            "do": [
              "Recreate the same 2x2 subplot dashboard with the OO interface",
              "Style a chart properly: labels, title, legend, readable ticks",
              "Save figures with dpi=150 and bbox_inches='tight'"
            ],
            "tools": ["matplotlib"],
            "res": [
              ["Matplotlib Tutorials", "https://matplotlib.org/stable/tutorials/index.html"]
            ]
          },
          {
            "t": "Seaborn: Statistical Plots",
            "d": "Beautiful, meaningful charts in one line: distributions and relationships.",
            "lv": 2,
            "time": "~5h",
            "tip": "Seaborn's defaults do real statistics (confidence intervals, KDEs). Know what the shading means before you present it to anyone.",
            "learn": [
              "Distribution plots: histplot, kdeplot, boxplot, violinplot",
              "Relationship plots: scatterplot, regplot, heatmap, pairplot",
              "FacetGrid and hue/style/size encodings"
            ],
            "do": [
              "Explore a dataset with a pairplot, then drill into interesting pairs",
              "Build a correlation heatmap with annotations",
              "Facet a distribution by category and compare shapes"
            ],
            "tools": ["seaborn", "matplotlib"],
            "res": [
              ["Seaborn Tutorial", "https://seaborn.pydata.org/tutorial.html"]
            ]
          },
          {
            "t": "Plotly: Interactive Charts",
            "d": "Zoomable, hoverable charts you can hand to a stakeholder.",
            "lv": 2,
            "time": "~4h",
            "tip": "Interactivity is for exploration and sharing, not for static reports. Export to HTML for sharing; use static images for PDFs.",
            "learn": [
              "plotly.express: one-line interactive charts",
              "Hover data, zoom, and faceting out of the box",
              "Exporting to self-contained HTML files"
            ],
            "do": [
              "Rebuild your best seaborn chart in plotly.express with rich hover info",
              "Create a faceted time-series dashboard",
              "Export an interactive HTML report and open it in a browser"
            ],
            "tools": ["plotly"],
            "res": [
              ["Plotly Python", "https://plotly.com/python/"]
            ]
          },
          {
            "t": "Chart Design & Storytelling",
            "d": "Choose the right chart and remove everything that isn't the message.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every chart needs one sentence it proves. If you can't write that sentence, the chart isn't ready to show anyone.",
            "learn": [
              "Chart selection: what each chart type actually communicates",
              "Decluttering: direct labels beat legends, kill chartjunk",
              "Color: sequential vs diverging palettes, colorblind safety"
            ],
            "do": [
              "Take an ugly default chart and redesign it: title as conclusion, direct labels",
              "Rebuild a misleading dual-axis chart honestly",
              "Write the one-sentence takeaway for each chart in a mini-report"
            ],
            "tools": ["matplotlib", "seaborn"],
            "res": [
              ["Seaborn Tutorial", "https://seaborn.pydata.org/tutorial.html"]
            ]
          }
        ]
      },
      {
        "t": "Jupyter Workflows & EDA",
        "d": "The analyst's loop: explore, question, visualize, conclude — reproducibly.",
        "lv": 2,
        "children": [
          {
            "t": "Notebook Best Practices",
            "d": "Notebooks that others can actually run: order, seeds, and no hidden state.",
            "lv": 2,
            "time": "~3h",
            "tip": "Restart and Run All before sharing. If it breaks, you had hidden state — cells run out of order — and your reader would have hit it too.",
            "learn": [
              "Linear top-to-bottom execution and why out-of-order runs lie",
              "Markdown narrative: headings, context, conclusions between code",
              "Seeds, pinned versions, and relative data paths for reproducibility"
            ],
            "do": [
              "Refactor a messy notebook: imports first, functions next, analysis last",
              "Add markdown cells explaining the why between every code block",
              "Prove reproducibility: restart kernel, run all, confirm identical outputs"
            ],
            "tools": ["JupyterLab", "nbconvert"],
            "res": [
              ["Jupyter", "https://jupyter.org/"]
            ]
          },
          {
            "t": "Exploratory Data Analysis Process",
            "d": "A repeatable EDA checklist: shape, quality, distributions, relationships.",
            "lv": 2,
            "time": "~6h",
            "tip": "EDA is question-driven, not plot-driven. Write down 5 questions before you touch the data, or you'll drown in interesting-but-useless charts.",
            "learn": [
              "The EDA arc: overview → quality → univariate → bivariate → insights",
              "Summary statistics that actually describe (median, IQR, skew)",
              "Documenting findings as you go: the insight log"
            ],
            "do": [
              "Run a full EDA on a Kaggle dataset following the checklist",
              "Keep an insight log: one line per finding with the cell that produced it",
              "End with 3 findings, 2 follow-up questions, 1 recommendation"
            ],
            "tools": ["pandas", "seaborn", "Kaggle"],
            "res": [
              ["Kaggle", "https://www.kaggle.com/"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Statistics with SciPy & statsmodels",
            "d": "Go beyond describe(): tests, confidence intervals, and regression.",
            "lv": 3,
            "time": "~6h",
            "tip": "A p-value is not the probability your hypothesis is true. Learn what tests actually claim before you run them, or you'll publish nonsense confidently.",
            "learn": [
              "Hypothesis testing: t-tests, chi-square, and their assumptions",
              "Confidence intervals and effect sizes (not just p-values)",
              "OLS regression with statsmodels: coefficients, R², diagnostics"
            ],
            "do": [
              "A/B test two conversion rates with a proper test and CI",
              "Fit an OLS model, interpret every coefficient in plain English",
              "Check regression diagnostics: residual plots and what they reveal"
            ],
            "tools": ["SciPy", "statsmodels"],
            "res": [
              ["SciPy", "https://scipy.org/"],
              ["statsmodels", "https://www.statsmodels.org/"]
            ]
          },
          {
            "t": "Time Series Basics",
            "d": "Data with a clock: trends, seasonality, and resampling.",
            "lv": 3,
            "time": "~5h",
            "tip": "Plot first, model later. Most time-series 'mysteries' are visible in a simple line chart with the trend and seasonal pattern staring at you.",
            "learn": [
              "DatetimeIndex, resampling (D/W/M), and rolling windows",
              "Decomposing trend, seasonality, and residuals",
              "Shifting and lag features for period-over-period analysis"
            ],
            "do": [
              "Resample daily data to weekly and monthly, compare the stories",
              "Decompose a series and name its seasonal pattern",
              "Build lag features and compute month-over-month growth"
            ],
            "tools": ["pandas", "statsmodels", "matplotlib"],
            "res": [
              ["pandas: Time Series", "https://pandas.pydata.org/docs/user_guide/timeseries.html"]
            ]
          }
        ]
      },
      {
        "t": "Scaling Up & Shipping",
        "d": "From notebook to value: performance, automation, and portfolio proof.",
        "lv": 3,
        "children": [
          {
            "t": "Performance: Beyond pandas",
            "d": "When data gets big: vectorize harder, then reach for faster engines.",
            "lv": 3,
            "time": "~5h",
            "tip": "Profile before optimizing. Most 'slow pandas' is one accidental object dtype or a loop that vectorizes in one line.",
            "learn": [
              "Profiling: where the time actually goes",
              "Polars: the fast DataFrame library and its lazy API",
              "Chunking large files and choosing Parquet over CSV"
            ],
            "do": [
              "Profile a slow notebook and fix the top bottleneck",
              "Rewrite a pandas pipeline in Polars lazy mode and compare speed",
              "Process a file too big for RAM in chunks"
            ],
            "tools": ["pandas", "Polars", "DuckDB"],
            "res": [
              ["Polars", "https://www.pola.rs/"],
              ["DuckDB", "https://duckdb.org/"]
            ]
          },
          {
            "t": "Python + SQL Together",
            "d": "Let the database do the heavy lifting; analyze the refined result in Python.",
            "lv": 3,
            "time": "~4h",
            "tip": "Filter and aggregate in SQL, explore in Python. Pulling a billion raw rows into pandas to compute a sum is doing it backwards.",
            "learn": [
              "SQLAlchemy connections and pd.read_sql",
              "Pushing filters/aggregations down to the database",
              "When to use DuckDB as an in-process analytical SQL engine"
            ],
            "do": [
              "Run an aggregation in SQL via read_sql instead of pulling raw rows",
              "Compare timing: SQL-side vs pandas-side aggregation on 1M rows",
              "Query a Parquet file directly with DuckDB SQL"
            ],
            "tools": ["SQLAlchemy", "DuckDB", "pandas"],
            "res": [
              ["DuckDB", "https://duckdb.org/"]
            ]
          },
          {
            "t": "Automated Reporting",
            "d": "Turn a one-off notebook into a report that rebuilds itself.",
            "lv": 3,
            "time": "~5h",
            "tip": "Parameterize with papermill or plain scripts: the report that needs 20 manual cell edits every Monday will be abandoned by March.",
            "learn": [
              "nbconvert and papermill: executing notebooks headlessly",
              "Scheduling with cron or task schedulers",
              "Templating: one notebook, many outputs"
            ],
            "do": [
              "Parameterize a notebook with papermill and run it for two different months",
              "Schedule a weekly run with cron that emails the HTML output",
              "Build a script version of your analysis that runs with one command"
            ],
            "tools": ["papermill", "nbconvert", "cron"],
            "res": [
              ["Jupyter", "https://jupyter.org/"]
            ]
          },
          {
            "t": "Dashboards with Streamlit",
            "d": "Interactive apps from pure Python: share your analysis as a web app.",
            "lv": 3,
            "time": "~5h",
            "tip": "Streamlit reruns your whole script on every interaction. Cache expensive loads with @st.cache_data or your dashboard will feel broken.",
            "learn": [
              "Widgets: sliders, selectboxes, and filters bound to charts",
              "Layout: columns, tabs, and sidebar organization",
              "Caching data loads and deploying to Streamlit Community Cloud"
            ],
            "do": [
              "Convert an EDA notebook into a Streamlit app with 3 interactive filters",
              "Add caching and measure the interaction speedup",
              "Deploy the app and share the public link"
            ],
            "tools": ["Streamlit", "plotly"],
            "res": [
              ["Streamlit", "https://streamlit.io/"]
            ]
          },
          {
            "t": "Capstone: End-to-End Analysis Project",
            "d": "Prove it: a full project from raw data to recommendations, portfolio-ready.",
            "lv": 3,
            "time": "~2w",
            "tip": "Hiring managers skim portfolios in minutes. One polished project with a clear README beats five half-finished notebooks.",
            "learn": [
              "Scoping: a question, a dataset, and a definition of done",
              "Structuring a project: data/, notebooks/, README with findings",
              "Communicating: executive summary first, methodology in the appendix"
            ],
            "do": [
              "Pick a real dataset and write a one-paragraph project scope",
              "Deliver: cleaned data, EDA notebook, visualizations, written recommendations",
              "Publish on GitHub with a README that states the question and the answer up front"
            ],
            "tools": ["pandas", "seaborn", "plotly", "JupyterLab", "GitHub"],
            "res": [
              ["Kaggle Datasets", "https://www.kaggle.com/datasets"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
