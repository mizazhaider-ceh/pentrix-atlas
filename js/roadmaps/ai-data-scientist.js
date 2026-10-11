/* Atlas roadmap data: AI and Data Scientist (ai-data-scientist) */
ROADMAPS.push({
  "id": "ai-data-scientist",
  "title": "AI and Data Scientist",
  "icon": "📊",
  "color": "#10b981",
  "desc": "Turn raw data into decisions: statistics, Python, machine learning, experimentation, and telling the story with data.",
  "kind": "role",
  "root": {
    "t": "AI and Data Scientist",
    "d": "The data science craft end to end: stats, code, models, experiments, and communicating what the numbers mean.",
    "children": [
      {
        "t": "Statistics & Mathematics",
        "d": "The language of uncertainty. Every A/B test, confidence interval, and model metric rests on these ideas.",
        "lv": 1,
        "children": [
          {
            "t": "Descriptive Statistics",
            "d": "Summarize any dataset in seconds: center, spread, shape, and the plots that reveal them.",
            "lv": 1,
            "time": "~1w",
            "tip": "Always look at the distribution, not just the mean. Averages hide bimodality, skew, and the outliers that matter.",
            "learn": [
              "Mean, median, mode: when each one lies and which to report",
              "Variance, standard deviation, percentiles, and IQR",
              "Skew, kurtosis, and reading histograms like a story"
            ],
            "do": [
              "Compute full descriptive stats for three real datasets and compare their shapes",
              "Plot histograms and box plots side by side and write one-sentence summaries",
              "Find a dataset where mean and median disagree wildly and explain why"
            ],
            "tools": ["pandas", "seaborn"],
            "res": [
              ["Khan Academy: Statistics and Probability", "https://www.khanacademy.org/math/statistics-probability"]
            ]
          },
          {
            "t": "Probability & Distributions",
            "d": "Model the randomness in your data. The core distributions and the rules for combining uncertain events.",
            "lv": 1,
            "time": "~1w",
            "tip": "Learn to recognize which distribution your data follows before modeling. The wrong assumption silently poisons everything downstream.",
            "learn": [
              "Normal, binomial, Poisson, exponential: where each shows up in real data",
              "Joint, marginal, and conditional probability in plain language",
              "Expected value and variance as the DNA of a distribution"
            ],
            "do": [
              "Fit normal and log-normal distributions to real skewed data and compare fit",
              "Simulate a Poisson process (website arrivals) and verify the counts match theory",
              "Use conditional probability to update a forecast given new evidence"
            ],
            "tools": ["SciPy", "NumPy", "Matplotlib"],
            "res": [
              ["Seeing Theory: visual probability", "https://seeing-theory.brown.edu/"],
              ["SciPy Stats reference", "https://docs.scipy.org/doc/scipy/reference/stats.html"]
            ]
          },
          {
            "t": "Sampling & Central Limit Theorem",
            "d": "You never see the whole population. Sampling theory and the CLT are why small samples can still speak truth.",
            "lv": 1,
            "time": "~5h",
            "tip": "Random sampling is a discipline, not a vibe. Convenience samples produce confident, wrong conclusions.",
            "learn": [
              "Sampling methods: random, stratified, cluster, and their biases",
              "The Central Limit Theorem: why sample means become normal",
              "Standard error and how sample size shrinks uncertainty"
            ],
            "do": [
              "Repeatedly sample from a skewed population and watch means become normal",
              "Compare stratified vs simple random sampling on an imbalanced dataset",
              "Compute how large n must be to halve your standard error"
            ],
            "tools": ["NumPy", "pandas"],
            "res": [
              ["Khan Academy: sampling distributions", "https://www.khanacademy.org/math/statistics-probability/sampling-distributions-library"]
            ]
          },
          {
            "t": "Hypothesis Testing",
            "d": "Decide with data: null hypotheses, p-values, and the tests that power every experiment you will ever run.",
            "lv": 2,
            "time": "~1w",
            "tip": "A p-value is not the probability your hypothesis is true. It is the probability of data this extreme if the null were true. Say it right.",
            "learn": [
              "Null and alternative hypotheses; Type I and Type II errors",
              "t-tests, chi-squared, and ANOVA: which test for which data",
              "P-values, significance levels, and why 0.05 is a convention, not a law"
            ],
            "do": [
              "Run a two-sample t-test on real group data and interpret every number in the output",
              "Use a chi-squared test to check if two categorical variables are independent",
              "Write a plain-English verdict for a test result a manager could act on"
            ],
            "tools": ["SciPy", "statsmodels"],
            "res": [
              ["statsmodels documentation", "https://www.statsmodels.org/stable/index.html"]
            ]
          },
          {
            "t": "Confidence Intervals & Effect Sizes",
            "d": "Go beyond 'significant or not': quantify how big the effect is and how precisely you measured it.",
            "lv": 2,
            "time": "~5h",
            "tip": "Statistical significance without effect size is trivia. A 0.1% lift with a million users can be significant and still worthless.",
            "learn": [
              "Confidence intervals: the range of plausible true values",
              "Effect sizes: Cohen's d and practical significance",
              "Bootstrapping: confidence intervals when theory does not apply"
            ],
            "do": [
              "Compute a 95% confidence interval by hand formula and by bootstrapping; compare",
              "Report an A/B-style result as effect size plus interval, not just a p-value",
              "Show how the interval shrinks as you quadruple the sample size"
            ],
            "tools": ["SciPy", "NumPy"],
            "res": [
              ["statsmodels documentation", "https://www.statsmodels.org/stable/index.html"]
            ]
          },
          {
            "t": "Linear Algebra & Calculus Essentials",
            "d": "Just enough math for machine learning: vectors, matrices, derivatives, and gradients without the full textbook.",
            "lv": 1,
            "time": "~1w",
            "tip": "Learn the geometric intuition (vectors as arrows, derivatives as slopes) before the notation. Notation without intuition is memorization.",
            "learn": [
              "Vectors and matrices: the data structures of ML",
              "Matrix multiplication and transpose in geometric terms",
              "Derivatives, partial derivatives, and gradients as optimization tools"
            ],
            "do": [
              "Represent a dataset as a matrix and compute projections with numpy",
              "Differentiate three functions by hand and check with sympy",
              "Implement one gradient descent step on paper, then in code"
            ],
            "tools": ["NumPy", "SymPy"],
            "res": [
              ["3Blue1Brown: Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra"],
              ["3Blue1Brown: Essence of Calculus", "https://www.3blue1brown.com/topics/calculus"]
            ]
          }
        ]
      },
      {
        "t": "Python & SQL for Data",
        "d": "Your two working languages: Python for analysis and modeling, SQL for getting the data in the first place.",
        "lv": 1,
        "children": [
          {
            "t": "Python Programming Basics",
            "d": "Fluent, idiomatic Python: the foundation every notebook, script, and pipeline you write will stand on.",
            "lv": 1,
            "time": "~2w",
            "tip": "Write code a tired colleague can read at 2am. Clear beats clever in data work, every single time.",
            "learn": [
              "Data types, control flow, functions, and error handling",
              "List and dict comprehensions; working with files and paths",
              "Virtual environments and reproducible dependency management"
            ],
            "do": [
              "Set up a project with uv and a locked environment",
              "Write a script that downloads, cleans, and summarizes a public dataset",
              "Refactor a 100-line script into functions with docstrings"
            ],
            "tools": ["Python", "uv", "Jupyter"],
            "res": [
              ["Official Python Tutorial", "https://docs.python.org/3/tutorial/"],
              ["uv documentation", "https://docs.astral.sh/uv/"]
            ]
          },
          {
            "t": "Data Structures & Algorithms in Python",
            "d": "The CS fundamentals that make your analysis fast: complexity thinking and the right structure for the job.",
            "lv": 2,
            "time": "~1w",
            "tip": "You do not need LeetCode-hard, but you must feel O(n^2) pain before you write a nested loop over a million rows.",
            "learn": [
              "Big-O intuition: why your loop over a DataFrame is slow",
              "Lists, dicts, sets, heaps: choosing the right container",
              "Sorting, searching, and hashing in everyday data tasks"
            ],
            "do": [
              "Time a nested loop vs a dict lookup vs a pandas merge on growing data sizes",
              "Solve five medium data-manipulation problems with attention to complexity",
              "Profile a slow script and fix the actual bottleneck"
            ],
            "tools": ["Python", "pandas"],
            "res": [
              ["Official Python Tutorial: data structures", "https://docs.python.org/3/tutorial/datastructures.html"]
            ]
          },
          {
            "t": "NumPy & pandas",
            "d": "The data stack: vectorized numerics with NumPy and expressive wrangling with pandas DataFrames.",
            "lv": 1,
            "time": "~1w",
            "tip": "Master groupby-agg-merge until it is reflex. It is the grammar of 80% of professional data work.",
            "learn": [
              "NumPy arrays: broadcasting, vectorization, and boolean indexing",
              "pandas DataFrames: filtering, groupby, pivots, merges, and datetimes",
              "The copy-vs-view trap and other pandas footguns"
            ],
            "do": [
              "Wrangle a messy real-world CSV into analysis-ready shape",
              "Answer ten business questions with groupby aggregations only",
              "Rewrite a slow .iterrows() loop as vectorized pandas and benchmark the speedup"
            ],
            "tools": ["NumPy", "pandas"],
            "res": [
              ["pandas documentation", "https://pandas.pydata.org/docs/"],
              ["NumPy: Learn", "https://numpy.org/learn/"]
            ]
          },
          {
            "t": "Data Visualization with Python",
            "d": "Charts that reveal truth instead of decorating slides. Matplotlib, seaborn, and honest visual design.",
            "lv": 1,
            "time": "~1w",
            "tip": "Start every analysis with exploratory plots of raw data. The anomaly you spot in 30 seconds saves days of modeling the wrong thing.",
            "learn": [
              "Matplotlib's object model: figures, axes, and full control",
              "seaborn for statistical graphics: distributions, relationships, categories",
              "Honest design: axes, scales, and color choices that do not mislead"
            ],
            "do": [
              "Build a full EDA figure set: distributions, correlations, and categorical comparisons",
              "Recreate a misleading chart and fix it (axis, baseline, aspect)",
              "Create one executive-ready dashboard figure with clear takeaways"
            ],
            "tools": ["Matplotlib", "seaborn", "Plotly"],
            "res": [
              ["seaborn user guide", "https://seaborn.pydata.org/"],
              ["Plotly Python docs", "https://plotly.com/python/"]
            ]
          },
          {
            "t": "SQL: Queries, Joins, Aggregations",
            "d": "Get your own data. SELECT, JOIN, GROUP BY: the SQL core that unlocks every database and warehouse.",
            "lv": 1,
            "time": "~2w",
            "tip": "Learn to think in sets, not loops. SQL rewards you for describing the result, not the procedure.",
            "learn": [
              "SELECT, WHERE, ORDER BY, LIMIT: reading tables precisely",
              "JOIN types: inner, left, and the Venn diagrams that explain them",
              "GROUP BY with HAVING: aggregation as the analyst's superpower"
            ],
            "do": [
              "Complete an interactive SQL course track end to end",
              "Write 20 queries against a practice database, from simple filters to multi-table joins",
              "Debug three queries with wrong row counts and explain each bug"
            ],
            "tools": ["PostgreSQL", "DuckDB", "DBeaver"],
            "res": [
              ["SQLBolt: interactive SQL lessons", "https://sqlbolt.com/"],
              ["PostgreSQL documentation", "https://www.postgresql.org/docs/"]
            ]
          },
          {
            "t": "SQL: Window Functions & CTEs",
            "d": "Level up: ranking, running totals, and cohorts with window functions; readable queries with CTEs.",
            "lv": 2,
            "time": "~1w",
            "tip": "If you are self-joining to compute a running total, stop. A window function does it in three lines.",
            "learn": [
              "OVER, PARTITION BY, ORDER BY: the anatomy of a window",
              "ROW_NUMBER, RANK, LAG, LEAD: the functions analysts use daily",
              "CTEs vs subqueries: readable, debuggable, composable SQL"
            ],
            "do": [
              "Compute running totals, moving averages, and month-over-month growth with windows",
              "Build a cohort retention table using LAG and date truncation",
              "Rewrite a nested subquery monster as clean chained CTEs"
            ],
            "tools": ["PostgreSQL", "DuckDB"],
            "res": [
              ["PostgreSQL: window functions", "https://www.postgresql.org/docs/current/tutorial-window.html"],
              ["DuckDB documentation", "https://duckdb.org/docs/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Exploratory Data Analysis & Storytelling",
        "d": "Understand data before modeling it, and communicate what you find so decisions actually change.",
        "lv": 1,
        "children": [
          {
            "t": "The EDA Workflow",
            "d": "A repeatable process for meeting a new dataset: profile, question, visualize, and document everything.",
            "lv": 1,
            "time": "~5h",
            "tip": "Time-box your first EDA pass. Curiosity is good; a three-day rabbit hole on one column is not.",
            "learn": [
              "Data profiling: shape, dtypes, cardinality, and summary statistics first",
              "Question-driven exploration: hypotheses before plots",
              "Documenting findings as you go: the EDA notebook as a lab journal"
            ],
            "do": [
              "Profile a new-to-you dataset in under an hour and write a data brief",
              "Generate an automated profiling report and verify its claims manually",
              "List ten questions the data could answer, then answer the best three"
            ],
            "tools": ["pandas", "ydata-profiling"],
            "res": [
              ["ydata-profiling docs", "https://docs.ydata.ai/ydata-profiling/"]
            ]
          },
          {
            "t": "Data Cleaning & Wrangling",
            "d": "Real data is messy: duplicates, inconsistent formats, and encoding gremlins. Clean it systematically.",
            "lv": 1,
            "time": "~1w",
            "tip": "Never overwrite raw data. Clean in code, keep the source immutable, and every step stays reproducible.",
            "learn": [
              "Duplicates, inconsistent categories, and whitespace gremlins",
              "Type coercion done safely: dates, numbers stored as strings, encodings",
              "Tidy data principles: one observation per row, one variable per column"
            ],
            "do": [
              "Clean a deliberately filthy dataset: dedupe, standardize categories, fix types",
              "Write cleaning as functions with before/after row-count assertions",
              "Reshape a wide spreadsheet-format table into tidy long format"
            ],
            "tools": ["pandas", "OpenRefine"],
            "res": [
              ["pandas: working with text data", "https://pandas.pydata.org/docs/user_guide/text.html"]
            ]
          },
          {
            "t": "Missing Values & Outliers",
            "d": "Diagnose why data is missing, handle it honestly, and decide which outliers are errors and which are signal.",
            "lv": 1,
            "time": "~6h",
            "tip": "An outlier is guilty until proven innocent, but deleting all of them deletes your most interesting stories. Investigate first.",
            "learn": [
              "Missingness mechanisms: MCAR, MAR, MNAR, and why the fix depends on the cause",
              "Imputation options: deletion, simple fill, model-based, and indicator flags",
              "Outlier detection: IQR, z-scores, and domain-informed judgment"
            ],
            "do": [
              "Map missingness patterns visually and hypothesize the mechanism",
              "Compare three imputation strategies on downstream analysis results",
              "Investigate the top ten outliers of a dataset and classify each as error or signal"
            ],
            "tools": ["pandas", "scikit-learn"],
            "res": [
              ["scikit-learn: imputing missing values", "https://scikit-learn.org/stable/modules/impute.html"]
            ]
          },
          {
            "t": "Univariate & Bivariate Analysis",
            "d": "One variable at a time, then two: distributions, relationships, and the correlations worth chasing.",
            "lv": 1,
            "time": "~6h",
            "tip": "Correlation is a starting rumor, not a conclusion. Plot the scatterplot before you believe any correlation coefficient.",
            "learn": [
              "Univariate deep-dives: distributions by group, not just overall",
              "Bivariate relationships: scatterplots, grouped bars, and contingency tables",
              "Correlation vs causation: confounders and Simpson's paradox"
            ],
            "do": [
              "Find a strong correlation in a dataset, then find its confounder",
              "Build a correlation matrix and investigate the three most surprising pairs",
              "Demonstrate Simpson's paradox with a real or simulated example"
            ],
            "tools": ["seaborn", "pandas", "SciPy"],
            "res": [
              ["seaborn user guide", "https://seaborn.pydata.org/"]
            ]
          },
          {
            "t": "Designing Dashboards",
            "d": "Turn analysis into living products: dashboards stakeholders actually open, built with Streamlit or BI tools.",
            "lv": 2,
            "time": "~1w",
            "tip": "A dashboard nobody opens is a failed project. Design for one decision-maker and one decision first.",
            "learn": [
              "Dashboard design: hierarchy, filters, and the five-second test",
              "Streamlit: turning Python scripts into interactive apps",
              "BI tools: when to use Power BI or Metabase instead of code"
            ],
            "do": [
              "Build a Streamlit dashboard over a real dataset with filters and KPIs",
              "Get feedback from one real user and iterate on their confusion",
              "Add caching and document the refresh logic"
            ],
            "tools": ["Streamlit", "Power BI", "Metabase"],
            "res": [
              ["Streamlit documentation", "https://docs.streamlit.io/"],
              ["Metabase documentation", "https://www.metabase.com/docs/latest"]
            ]
          },
          {
            "t": "Communicating Insights",
            "d": "Analysis without influence is a hobby. Structure findings as stories that drive decisions.",
            "lv": 2,
            "time": "~5h",
            "tip": "Lead with the recommendation, then the evidence. Nobody remembers your methodology; everyone remembers what you told them to do.",
            "learn": [
              "The pyramid principle: conclusion first, supporting evidence after",
              "One chart, one message: annotation and focus over decoration",
              "Tailoring to audiences: executives, product managers, and engineers need different depths"
            ],
            "do": [
              "Turn an analysis into a five-slide deck with a clear recommendation",
              "Rewrite a technical finding for an executive audience in three sentences",
              "Present one analysis and collect questions; note which ones you failed to preempt"
            ],
            "tools": ["Streamlit", "Quarto"],
            "res": [
              ["Quarto guide", "https://quarto.org/docs/guide/"]
            ]
          }
        ]
      },
      {
        "t": "Machine Learning for Data Science",
        "d": "Practical ML for analysts: the models that solve business problems, evaluated honestly.",
        "lv": 2,
        "children": [
          {
            "t": "Supervised Learning Essentials",
            "d": "The core loop of predictive modeling: features, labels, training, and honest evaluation with scikit-learn.",
            "lv": 2,
            "time": "~1w",
            "tip": "Always build the dumbest baseline first. If logistic regression already hits the target, ship it and go home early.",
            "learn": [
              "The supervised learning setup: X, y, and the train-test contract",
              "scikit-learn's API: fit, predict, and pipelines as the universal interface",
              "Overfitting vs underfitting: reading the train-test gap"
            ],
            "do": [
              "Train and evaluate three classifiers on one dataset with proper splits",
              "Build an end-to-end Pipeline (preprocessing plus model) that cannot leak",
              "Deliberately overfit a model and diagnose it from the metrics"
            ],
            "tools": ["scikit-learn", "pandas"],
            "res": [
              ["scikit-learn: getting started", "https://scikit-learn.org/stable/getting_started.html"],
              ["Google Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course"]
            ]
          },
          {
            "t": "Regression in Practice",
            "d": "Predict numbers: prices, demand, lifetime value. Linear models, regularization, and residuals that tell the truth.",
            "lv": 2,
            "time": "~1w",
            "tip": "Plot your residuals. A pattern in the residuals is a pattern your model missed, and the fix is usually a feature, not a fancier model.",
            "learn": [
              "Linear regression assumptions and when they break",
              "Regularization (Ridge/Lasso) for high-dimensional data",
              "Regression metrics: MAE, RMSE, and why R-squared alone misleads"
            ],
            "do": [
              "Predict house prices end to end: features, model, residual diagnostics",
              "Compare Ridge vs Lasso coefficients on correlated features",
              "Transform a skewed target (log) and measure the metric improvement"
            ],
            "tools": ["scikit-learn", "statsmodels"],
            "res": [
              ["scikit-learn: linear models", "https://scikit-learn.org/stable/modules/linear_model.html"]
            ]
          },
          {
            "t": "Classification in Practice",
            "d": "Predict categories: churn, fraud, conversion. Logistic regression through ensembles, with metrics matched to costs.",
            "lv": 2,
            "time": "~1w",
            "tip": "Match the metric to the mistake's cost. Optimizing accuracy on a fraud problem is optimizing the wrong thing.",
            "learn": [
              "Logistic regression as the interpretable baseline",
              "Trees and forests for nonlinear boundaries without feature engineering",
              "Precision, recall, ROC-AUC, and threshold selection"
            ],
            "do": [
              "Build a churn classifier and choose the operating threshold from business costs",
              "Compare logistic regression, random forest, and gradient boosting on identical splits",
              "Calibrate predicted probabilities and check the calibration curve"
            ],
            "tools": ["scikit-learn", "LightGBM"],
            "res": [
              ["scikit-learn: model evaluation", "https://scikit-learn.org/stable/modules/model_evaluation.html"],
              ["LightGBM documentation", "https://lightgbm.readthedocs.io/en/latest/"]
            ]
          },
          {
            "t": "Tree Ensembles: Random Forest & Boosting",
            "d": "The tabular workhorses: bagging and boosting, tuned properly, with early stopping and honest validation.",
            "lv": 2,
            "time": "~1w",
            "tip": "Gradient boosting with early stopping beats most neural nets on tabular data. It is not glamorous; it just wins.",
            "learn": [
              "Random forests: variance reduction through bagged trees",
              "Gradient boosting: sequential error correction and its hyperparameters",
              "Early stopping and why it is the single most important boosting setting"
            ],
            "do": [
              "Tune a LightGBM model with early stopping on a tabular competition dataset",
              "Plot feature importances and validate the top features with domain sense",
              "Compare against your best linear baseline and quantify the real gain"
            ],
            "tools": ["LightGBM", "XGBoost", "scikit-learn"],
            "res": [
              ["LightGBM documentation", "https://lightgbm.readthedocs.io/en/latest/"],
              ["XGBoost documentation", "https://xgboost.readthedocs.io/en/stable/"]
            ]
          },
          {
            "t": "Clustering & Customer Segmentation",
            "d": "Find natural groups in unlabeled data: segments, personas, and the validation that keeps clusters honest.",
            "lv": 2,
            "time": "~6h",
            "tip": "A segmentation nobody can name or act on is numerology. Every cluster needs a plain-English persona and a business action.",
            "learn": [
              "K-means: the algorithm, choosing k, and its assumptions",
              "Hierarchical and density-based alternatives for non-round clusters",
              "Validating segments: stability, separation, and business interpretability"
            ],
            "do": [
              "Segment customers with k-means and write a persona for each cluster",
              "Validate with silhouette scores and stability across random seeds",
              "Present the segments with one recommended action per segment"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn: clustering", "https://scikit-learn.org/stable/modules/clustering.html"]
            ]
          },
          {
            "t": "Model Evaluation & Error Analysis",
            "d": "Beyond the leaderboard: cross-validation, error slices, and finding where your model fails systematically.",
            "lv": 2,
            "time": "~1w",
            "tip": "Slice your errors by segment, time, and feature values. Aggregate metrics hide systematic failures on the groups that matter.",
            "learn": [
              "Cross-validation strategies: k-fold, stratified, and time-based splits",
              "Error analysis: confusion slices and residual segments",
              "Fair comparison: same data, same metric, statistical significance"
            ],
            "do": [
              "Run stratified 5-fold CV and report mean plus confidence interval",
              "Slice misclassifications by customer segment and find the worst-performing group",
              "Write an error analysis memo with three concrete improvement hypotheses"
            ],
            "tools": ["scikit-learn", "MLflow"],
            "res": [
              ["scikit-learn: cross-validation", "https://scikit-learn.org/stable/modules/cross_validation.html"],
              ["MLflow documentation", "https://mlflow.org/docs/latest/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Experimentation & Causal Thinking",
        "d": "Prove what caused what. A/B testing, power analysis, and the causal inference toolkit for observational data.",
        "lv": 2,
        "children": [
          {
            "t": "Designing A/B Tests",
            "d": "Run experiments that actually answer the question: randomization, metrics, and the design mistakes that invalidate results.",
            "lv": 2,
            "time": "~1w",
            "tip": "Define the primary metric and the decision rule before the test starts. Moving the goalposts after peeking is how false wins are manufactured.",
            "learn": [
              "Randomization and control: the logic that makes experiments causal",
              "Primary vs guardrail metrics: what you optimize vs what you protect",
              "Common invalidity traps: peeking, novelty effects, and network interference"
            ],
            "do": [
              "Design a complete A/B test plan: hypothesis, metric, runtime, decision rule",
              "Simulate an A/B test in Python and practice the full analysis",
              "Write a pre-registration doc for a hypothetical experiment"
            ],
            "tools": ["Python", "SciPy", "statsmodels"],
            "res": [
              ["statsmodels documentation", "https://www.statsmodels.org/stable/index.html"]
            ]
          },
          {
            "t": "Statistical Significance & Power Analysis",
            "d": "Size your experiments correctly: power, minimum detectable effect, and reading test results without fooling yourself.",
            "lv": 2,
            "time": "~6h",
            "tip": "An underpowered test that 'fails to reject' proves nothing. Compute required sample size before launch, not after disappointment.",
            "learn": [
              "Power and sample size: the math that decides how long tests run",
              "Minimum detectable effect: the smallest win worth detecting",
              "Sequential testing and peeking corrections done properly"
            ],
            "do": [
              "Compute required sample size for a test given baseline rate and target lift",
              "Simulate an underpowered test 1000 times and count the false negatives",
              "Analyze a finished test: effect size, confidence interval, and ship/no-ship call"
            ],
            "tools": ["statsmodels", "Python"],
            "res": [
              ["statsmodels: power analysis", "https://www.statsmodels.org/stable/stats.html#power-and-sample-size"]
            ]
          },
          {
            "t": "Increasing Test Sensitivity",
            "d": "Detect smaller wins faster: variance reduction with CUPED, stratification, and smarter metric design.",
            "lv": 3,
            "time": "~5h",
            "tip": "CUPED is free statistical power sitting in your pre-period data. Use it before begging for more traffic.",
            "learn": [
              "Variance reduction: why noisy metrics need huge samples",
              "CUPED: using pre-experiment data as a covariate to shrink variance",
              "Stratification and metric transformations that stabilize estimates"
            ],
            "do": [
              "Implement CUPED on simulated experiment data and measure the variance reduction",
              "Compare required sample sizes with and without the covariate adjustment",
              "Write guidelines for when CUPED helps and when it can mislead"
            ],
            "tools": ["Python", "statsmodels"],
            "res": [
              ["statsmodels documentation", "https://www.statsmodels.org/stable/index.html"]
            ]
          },
          {
            "t": "Ratio Metrics & Guardrails",
            "d": "Real business metrics are ratios: conversion rates, revenue per user. Handle their statistics correctly.",
            "lv": 2,
            "time": "~5h",
            "tip": "Never average a ratio across segments. Aggregate numerators and denominators separately or Simpson's paradox will embarrass you.",
            "learn": [
              "Why ratio metrics break naive t-tests: correlated numerator and denominator",
              "Delta method and bootstrapping for ratio confidence intervals",
              "Guardrail metrics: the metrics that veto a launch even when the primary wins"
            ],
            "do": [
              "Compute a confidence interval for a conversion rate with the delta method and by bootstrap",
              "Demonstrate the ratio-averaging trap with a two-segment example",
              "Design a guardrail set for a checkout experiment"
            ],
            "tools": ["Python", "NumPy"],
            "res": [
              ["statsmodels documentation", "https://www.statsmodels.org/stable/index.html"]
            ]
          },
          {
            "t": "Time Series Analysis",
            "d": "Data with a memory: trends, seasonality, and forecasting demand, traffic, and revenue.",
            "lv": 2,
            "time": "~1w",
            "tip": "Always plot the decomposition first. If you cannot see the seasonality with your eyes, your model will not find it either.",
            "learn": [
              "Decomposition: trend, seasonality, and residuals",
              "Stationarity and why most models demand it",
              "Classical forecasting: exponential smoothing, ARIMA, and Prophet"
            ],
            "do": [
              "Decompose a real time series and describe each component",
              "Build a Prophet forecast with holidays and compare against a naive seasonal baseline",
              "Backtest your forecast with rolling-origin evaluation"
            ],
            "tools": ["Prophet", "statsmodels", "pandas"],
            "res": [
              ["Prophet documentation", "https://facebook.github.io/prophet/docs/quick_start.html"],
              ["statsmodels: time series", "https://www.statsmodels.org/stable/tsa.html"]
            ]
          },
          {
            "t": "Causal Inference Basics",
            "d": "When you cannot run an experiment: difference-in-differences, regression discontinuity, and honest causal claims.",
            "lv": 3,
            "time": "~1w",
            "tip": "Every observational causal claim needs a story about why the comparison is fair. No story, no causality.",
            "learn": [
              "Correlation vs causation: the fundamental problem of causal inference",
              "Difference-in-differences: parallel trends and the natural experiment",
              "Regression discontinuity and instrumental variables: intuition and assumptions"
            ],
            "do": [
              "Estimate a treatment effect with difference-in-differences on simulated data",
              "Check the parallel-trends assumption visually before trusting the estimate",
              "Write a causal claim with its assumptions listed explicitly"
            ],
            "tools": ["Python", "statsmodels", "linearmodels"],
            "res": [
              ["Causal Inference: The Mixtape (free book)", "https://mixtape.scunning.com/"]
            ]
          }
        ]
      },
      {
        "t": "Deep Learning & Generative AI",
        "d": "Neural networks and large language models: the modern AI toolkit every data scientist now needs.",
        "lv": 3,
        "children": [
          {
            "t": "Neural Networks & Training Loops",
            "d": "How deep learning actually works: layers, backprop, and the training loop you will write a hundred times.",
            "lv": 3,
            "time": "~1w",
            "tip": "Start with a tiny network on a tiny dataset that overfits in minutes. If it cannot memorize, nothing else matters.",
            "learn": [
              "MLPs, activations, and why depth creates expressiveness",
              "Backpropagation and gradient descent in practical terms",
              "Overfitting in deep nets: capacity, data, and regularization"
            ],
            "do": [
              "Train an MLP classifier in PyTorch on a tabular dataset",
              "Overfit it deliberately on 200 samples, then fix it with dropout and weight decay",
              "Log training curves and diagnose underfit vs overfit from the shapes"
            ],
            "tools": ["PyTorch", "scikit-learn"],
            "res": [
              ["PyTorch tutorials", "https://pytorch.org/tutorials/"],
              ["Karpathy: Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html"]
            ]
          },
          {
            "t": "CNNs, RNNs & Transformers",
            "d": "The architecture zoo: convolutions for images, recurrence for sequences, attention for everything.",
            "lv": 3,
            "time": "~1w",
            "tip": "You will use pretrained transformers far more than you train architectures. Understand the ideas; borrow the weights.",
            "learn": [
              "CNNs: convolutions, pooling, and hierarchical visual features",
              "RNNs and LSTMs: memory over sequences and their limits",
              "Transformers: self-attention and why they won"
            ],
            "do": [
              "Fine-tune a pretrained image classifier on a small custom dataset",
              "Run a Hugging Face text pipeline and inspect what the model attends to",
              "Compare training a small CNN from scratch vs fine-tuning on your data"
            ],
            "tools": ["PyTorch", "Hugging Face Transformers"],
            "res": [
              ["Hugging Face Transformers docs", "https://huggingface.co/docs/transformers"],
              ["Hugging Face Hub", "https://huggingface.co/"]
            ]
          },
          {
            "t": "Transfer Learning & Pretrained Models",
            "d": "Borrow intelligence: fine-tune foundation models instead of training from zero on your small dataset.",
            "lv": 3,
            "time": "~6h",
            "tip": "Freeze the backbone first and train only the head. Unfreeze gradually. Full fine-tuning from step one destroys pretrained knowledge.",
            "learn": [
              "Pretrained backbones: what knowledge transfers and what does not",
              "Fine-tuning strategies: linear probing, gradual unfreezing, adapters",
              "Hugging Face Hub: finding and evaluating community models"
            ],
            "do": [
              "Fine-tune a transformer for text classification on your own labeled data",
              "Compare frozen-backbone vs full fine-tuning on accuracy and time",
              "Document the model card: data, metrics, and limitations"
            ],
            "tools": ["Hugging Face Transformers", "PyTorch"],
            "res": [
              ["Hugging Face Hub", "https://huggingface.co/"]
            ]
          },
          {
            "t": "Working with LLM APIs",
            "d": "Use frontier models as a service: API patterns, structured output, cost control, and evaluation.",
            "lv": 3,
            "time": "~1w",
            "tip": "Treat the LLM as an unreliable brilliant intern: verify outputs, constrain formats, and never let it touch money unsupervised.",
            "learn": [
              "Chat and completion APIs: messages, roles, and parameters that matter",
              "Structured output: JSON mode and schema enforcement",
              "Cost, latency, and rate limits: engineering around the API"
            ],
            "do": [
              "Build a classifier using an LLM API with structured JSON output",
              "Add retries, caching, and cost logging to your API client",
              "Benchmark two models on your task for quality vs cost"
            ],
            "tools": ["OpenAI API", "Anthropic API", "LiteLLM"],
            "res": [
              ["OpenAI platform docs", "https://platform.openai.com/docs/"],
              ["Anthropic docs", "https://docs.anthropic.com/"]
            ]
          },
          {
            "t": "Prompt Engineering",
            "d": "Get reliable behavior from language models: instructions, examples, and systematic prompt iteration.",
            "lv": 2,
            "time": "~5h",
            "tip": "Show, do not just tell: two good examples beat two paragraphs of instructions almost every time.",
            "learn": [
              "Anatomy of a prompt: role, task, context, examples, and output format",
              "Few-shot prompting and chain-of-thought for reasoning tasks",
              "Systematic iteration: versioning prompts and measuring changes"
            ],
            "do": [
              "Build a prompt that extracts structured data from messy text reliably",
              "A/B test zero-shot vs few-shot versions on 50 examples",
              "Create a prompt template library with versioning for a real task"
            ],
            "tools": ["OpenAI API", "Langfuse"],
            "res": [
              ["OpenAI prompt engineering guide", "https://platform.openai.com/docs/guides/prompt-engineering"],
              ["Langfuse docs", "https://langfuse.com/docs"]
            ]
          },
          {
            "t": "RAG: Retrieval-Augmented Generation",
            "d": "Ground LLMs in your data: chunking, embeddings, vector search, and the pipeline behind chat-with-your-docs.",
            "lv": 3,
            "time": "~1w",
            "tip": "Chunking quality decides RAG quality. Garbage chunks in, hallucinated answers out, no matter how good the model is.",
            "learn": [
              "Embeddings and vector databases: semantic search mechanics",
              "Chunking strategies: size, overlap, and structure-aware splitting",
              "The RAG pipeline: retrieve, rerank, generate, and cite"
            ],
            "do": [
              "Build a RAG chatbot over your own documents with LangChain or LlamaIndex",
              "Experiment with chunk sizes and measure retrieval quality",
              "Add source citations and a 'cannot answer' fallback"
            ],
            "tools": ["LangChain", "LlamaIndex", "Chroma", "sentence-transformers"],
            "res": [
              ["LangChain docs", "https://python.langchain.com/docs/introduction/"],
              ["LlamaIndex docs", "https://docs.llamaindex.ai/"]
            ]
          }
        ]
      },
      {
        "t": "MLOps & Data Science in Production",
        "d": "Make it real and keep it working: deployment, monitoring, and the professional habits of production data science.",
        "lv": 3,
        "children": [
          {
            "t": "Deploying Models as APIs",
            "d": "Serve predictions to the world: FastAPI endpoints, containers, and the latency numbers that matter.",
            "lv": 3,
            "time": "~1w",
            "tip": "Log every prediction with its inputs and model version. When something breaks at 3am, that log is your lifeline.",
            "learn": [
              "Batch vs online inference: choosing the serving pattern",
              "FastAPI for model serving: validation, errors, and health checks",
              "Docker packaging: reproducible model services"
            ],
            "do": [
              "Serve a trained model behind a FastAPI endpoint with input validation",
              "Containerize it and run with a single docker command",
              "Load-test and record p50/p99 latency"
            ],
            "tools": ["FastAPI", "Docker", "MLflow"],
            "res": [
              ["FastAPI documentation", "https://fastapi.tiangolo.com/"],
              ["Docker documentation", "https://docs.docker.com"]
            ]
          },
          {
            "t": "Experiment Tracking & Model Registry",
            "d": "Never lose a good run again: track parameters, metrics, and artifacts; register models with lineage.",
            "lv": 2,
            "time": "~5h",
            "tip": "Log the data version alongside the code version. A model is code plus data; tracking only half is tracking nothing.",
            "learn": [
              "What to log: params, metrics, artifacts, and environment",
              "MLflow tracking and model registry workflows",
              "Reproducibility: seeds, versions, and rerunnable pipelines"
            ],
            "do": [
              "Instrument an existing project with MLflow tracking",
              "Register the best model and promote it through staging tags",
              "Reproduce a past run from logged artifacts alone"
            ],
            "tools": ["MLflow", "Weights & Biases"],
            "res": [
              ["MLflow documentation", "https://mlflow.org/docs/latest/"],
              ["Weights & Biases docs", "https://docs.wandb.ai/"]
            ]
          },
          {
            "t": "Data Pipelines Basics",
            "d": "Automate the boring parts: scheduled ingestion and transformation with Airflow or dbt.",
            "lv": 2,
            "time": "~1w",
            "tip": "Start with the simplest scheduler that works. A cron job you understand beats an orchestrator you misconfigure.",
            "learn": [
              "Pipeline thinking: idempotent, retryable, and observable jobs",
              "Airflow DAGs: tasks, scheduling, and backfills",
              "dbt: SQL-first transformations with tests and docs"
            ],
            "do": [
              "Build an Airflow DAG that ingests, transforms, and validates a dataset daily",
              "Write a dbt model with tests and generate its documentation",
              "Add alerting for a failed run"
            ],
            "tools": ["Apache Airflow", "dbt"],
            "res": [
              ["Airflow documentation", "https://airflow.apache.org/docs/"],
              ["dbt documentation", "https://docs.getdbt.com/docs/introduction"]
            ]
          },
          {
            "t": "Monitoring Models in Production",
            "d": "Models decay. Detect data drift and performance drops before your users do.",
            "lv": 3,
            "time": "~6h",
            "tip": "Monitor inputs, not just outputs. Feature drift predicts failure weeks before labeled outcomes confirm it.",
            "learn": [
              "Data drift vs concept drift: the two failure modes",
              "Drift detection with Evidently: reports and test suites",
              "Retraining triggers: scheduled, metric-based, and champion-challenger"
            ],
            "do": [
              "Generate an Evidently drift report on simulated production data",
              "Define alert thresholds for three key features",
              "Sketch a retraining pipeline with validation gates"
            ],
            "tools": ["Evidently AI", "MLflow"],
            "res": [
              ["Evidently AI docs", "https://docs.evidentlyai.com/"]
            ]
          },
          {
            "t": "Stakeholder Communication & Ethics",
            "d": "The human side: presenting to non-technical audiences and handling the ethical weight of data work.",
            "lv": 2,
            "time": "~5h",
            "tip": "If you cannot explain your model's limitations honestly, you should not deploy it. Ethics is a deployment requirement.",
            "learn": [
              "Translating metrics into business language and decisions",
              "Bias and fairness: measuring disparate impact",
              "Privacy basics: aggregation, anonymization limits, and GDPR awareness"
            ],
            "do": [
              "Audit a model for performance disparities across groups",
              "Write a model card documenting intended use and limitations",
              "Present a technical result to a non-technical audience and collect feedback"
            ],
            "tools": ["Fairlearn", "SHAP"],
            "res": [
              ["Fairlearn documentation", "https://fairlearn.org/"],
              ["EU AI Act explorer", "https://artificialintelligenceact.eu/"]
            ]
          },
          {
            "t": "Portfolio Capstone Project",
            "d": "Prove the whole craft: a complete data science project from question to deployed story, portfolio-ready.",
            "lv": 3,
            "time": "~2w",
            "tip": "Pick a question you genuinely care about. Curiosity survives the hard middle of a project; obligation does not.",
            "learn": [
              "End-to-end scoping: question, data, analysis, modeling, communication",
              "Reproducible project structure: code, data docs, and environment",
              "Portfolio presentation: README, visuals, and honest limitations"
            ],
            "do": [
              "Scope and execute a full project: EDA, modeling or experiments, dashboard or report",
              "Publish a clean repository with a narrative README",
              "Present the findings as a five-minute story with one clear recommendation"
            ],
            "tools": ["Python", "scikit-learn", "Streamlit", "GitHub"],
            "res": [
              ["Kaggle datasets", "https://www.kaggle.com/datasets"],
              ["Quarto guide", "https://quarto.org/docs/guide/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
