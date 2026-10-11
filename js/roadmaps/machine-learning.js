/* Atlas roadmap data: Machine Learning (machine-learning) */
ROADMAPS.push({
  "id": "machine-learning",
  "title": "Machine Learning",
  "icon": "🧬",
  "color": "#9333ea",
  "desc": "From linear algebra to shipping neural networks: the complete ML practitioner path, math first, hype never.",
  "kind": "role",
  "root": {
    "t": "Machine Learning",
    "d": "Teach computers to learn from data: math, algorithms, evaluation, deep learning, and getting models into production.",
    "children": [
      {
        "t": "Mathematical Foundations",
        "d": "The math that makes models tick: vectors, calculus, and probability. Learn it once, use it forever.",
        "lv": 1,
        "children": [
          {
            "t": "Linear Algebra & Matrix Operations",
            "d": "Data is matrices and models are matrix multiplications. Vectors, tensors, and the operations that connect them.",
            "lv": 1,
            "time": "~1w",
            "tip": "You do not need to hand-derive every proof, but if you cannot multiply two matrices by hand you cannot read a single ML paper.",
            "learn": [
              "Scalars, vectors, matrices, tensors: shapes and what they represent",
              "Matrix multiplication, transpose, dot products: the vocabulary of layers",
              "Eigenvalues, eigenvectors, and SVD: the ideas behind PCA and embeddings"
            ],
            "do": [
              "Multiply two 3x3 matrices by hand, then verify with numpy",
              "Implement a dot product with a Python loop, then rewrite it as one numpy call and benchmark both",
              "Use numpy.linalg.svd on a small dataset and reconstruct it with fewer components"
            ],
            "tools": ["NumPy", "Jupyter"],
            "res": [
              ["3Blue1Brown: Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra"],
              ["Khan Academy: Linear Algebra", "https://www.khanacademy.org/math/linear-algebra"]
            ]
          },
          {
            "t": "Calculus & Gradients",
            "d": "Training a model means walking downhill on a loss surface. Derivatives and gradients are your compass.",
            "lv": 1,
            "time": "~1w",
            "tip": "The chain rule IS backpropagation. Learn it once, deeply, and every neural network becomes readable.",
            "learn": [
              "Derivatives and partial derivatives: rates of change in many dimensions",
              "Gradients: the direction of steepest ascent, and why we walk the opposite way",
              "The chain rule; Jacobian and Hessian intuition for advanced optimizers"
            ],
            "do": [
              "Compute the gradient of a 2D quadratic function by hand and draw the vector field",
              "Implement gradient descent in plain Python on a 1D parabola and plot each step",
              "Re-run with learning rates 0.01, 0.1, and 1.5 and observe convergence vs divergence"
            ],
            "tools": ["Python", "Matplotlib", "NumPy"],
            "res": [
              ["Khan Academy: Multivariable Calculus", "https://www.khanacademy.org/math/multivariable-calculus"]
            ]
          },
          {
            "t": "Probability Basics",
            "d": "Machine learning is applied probability. Random variables, distributions, and the rules for reasoning under uncertainty.",
            "lv": 1,
            "time": "~1w",
            "tip": "Most ML confusion is probability confusion. When a model output puzzles you, ask: what distribution is it assuming?",
            "learn": [
              "Random variables, PMFs and PDFs: discrete vs continuous worlds",
              "Expectation, variance, covariance: the summary statistics of uncertainty",
              "Conditional probability and independence: the logic behind generative models"
            ],
            "do": [
              "Simulate 10,000 dice rolls and coin flips in Python and plot the converging frequencies",
              "Plot binomial, normal, and Poisson distributions with scipy and match each to a real scenario",
              "Compute the expected value and variance of a simple betting game"
            ],
            "tools": ["Python", "SciPy", "Matplotlib"],
            "res": [
              ["Seeing Theory: visual probability", "https://seeing-theory.brown.edu/"],
              ["SciPy Stats reference", "https://docs.scipy.org/doc/scipy/reference/stats.html"]
            ]
          },
          {
            "t": "Statistics for ML",
            "d": "Your test set is a sample, not the world. Sampling, bias, and inference decide whether your metrics mean anything.",
            "lv": 1,
            "time": "~1w",
            "tip": "A model trained on biased samples learns the bias, not the truth. Always ask how the data was collected.",
            "learn": [
              "Populations vs samples; sampling bias and why random is not always enough",
              "Central Limit Theorem: why averages behave nicely even when data does not",
              "Confidence intervals and hypothesis tests: quantifying what you actually know"
            ],
            "do": [
              "Draw repeated samples from a skewed distribution and watch sample means become normal (CLT in action)",
              "Run a t-test comparing two groups in scipy and interpret the p-value correctly",
              "Deliberately train on a biased sample and measure the damage on a fair test set"
            ],
            "tools": ["pandas", "SciPy", "seaborn"],
            "res": [
              ["Khan Academy: Statistics and Probability", "https://www.khanacademy.org/math/statistics-probability"]
            ]
          },
          {
            "t": "Bayes' Theorem",
            "d": "Update beliefs with evidence. The single most useful equation in all of machine learning.",
            "lv": 1,
            "time": "~6h",
            "tip": "The base-rate fallacy ruins more model interpretations than any bug. Always multiply by the prior.",
            "learn": [
              "Prior, likelihood, posterior: the three characters of every Bayesian story",
              "Why a 99% accurate test can still be wrong 50% of the time (base rates)",
              "Naive Bayes: the independence assumption that works suspiciously well on text"
            ],
            "do": [
              "Compute the posterior probability for a rare-disease test by hand with Bayes' rule",
              "Build a toy Naive Bayes spam filter with scikit-learn and inspect which words drive predictions",
              "Vary the prior and watch the posterior move: sensitivity analysis in one plot"
            ],
            "tools": ["scikit-learn", "Python"],
            "res": [
              ["scikit-learn: Naive Bayes", "https://scikit-learn.org/stable/modules/naive_bayes.html"]
            ]
          },
          {
            "t": "Optimization Concepts",
            "d": "Training is optimization. Understand loss landscapes, gradient descent variants, and why learning rate rules everything.",
            "lv": 2,
            "time": "~8h",
            "tip": "Ninety percent of 'my model won't train' is learning rate, batch size, or data scaling. Tune those before blaming the architecture.",
            "learn": [
              "Convex vs non-convex loss surfaces: why deep nets have no guarantees but work anyway",
              "SGD, momentum, Adam: what modern optimizers actually do differently",
              "Learning rate schedules and local minima vs saddle points"
            ],
            "do": [
              "Train a tiny network with plain SGD, then Adam, and compare convergence curves",
              "Visualize a 2D loss landscape and the optimizer's path with different learning rates",
              "Add a step-decay schedule and measure the final loss difference"
            ],
            "tools": ["PyTorch", "NumPy", "Matplotlib"],
            "res": [
              ["PyTorch: torch.optim reference", "https://pytorch.org/docs/stable/optim.html"]
            ]
          }
        ]
      },
      {
        "t": "Python & Data Tooling",
        "d": "Your laboratory: Python, Jupyter, and the numeric stack every ML workflow is built on.",
        "lv": 1,
        "children": [
          {
            "t": "Python for ML",
            "d": "Fluent Python is the price of admission: functions, comprehensions, and environments done right.",
            "lv": 1,
            "time": "~1w",
            "tip": "Use one virtual environment per project from day one. 'It worked on my machine' is a pipeline killer.",
            "learn": [
              "Core syntax: functions, list/dict comprehensions, generators, exceptions",
              "Virtual environments and dependency pinning with uv or conda",
              "Reading tracebacks and debugging with intention instead of print-spam"
            ],
            "do": [
              "Create a project with uv, pin numpy and pandas, and export a lockfile",
              "Write a data-cleaning script using comprehensions and pathlib, no hardcoded paths",
              "Fix three deliberately broken scripts using only the traceback"
            ],
            "tools": ["Python", "uv", "Jupyter"],
            "res": [
              ["Official Python Tutorial", "https://docs.python.org/3/tutorial/"],
              ["uv documentation", "https://docs.astral.sh/uv/"]
            ]
          },
          {
            "t": "Jupyter Notebooks",
            "d": "The ML scratchpad: interactive cells, kernels, and the discipline to keep notebooks reproducible.",
            "lv": 1,
            "time": "~4h",
            "tip": "Run-all must work top to bottom, every time. A notebook that only runs in your head is not reproducible.",
            "learn": [
              "Cells, kernels, and magic commands: the notebook mental model",
              "Notebook hygiene: restart-and-run-all, pinned dependencies, seeded randomness",
              "When to leave the notebook: converting experiments into scripts and modules"
            ],
            "do": [
              "Build a small EDA notebook with markdown narrative between code cells",
              "Restart the kernel, run all, and fix every out-of-order execution bug",
              "Convert the notebook's core logic into a .py module with jupytext"
            ],
            "tools": ["Jupyter", "jupytext"],
            "res": [
              ["Jupyter documentation", "https://docs.jupyter.org/"]
            ]
          },
          {
            "t": "NumPy: Numerical Computing",
            "d": "Arrays, broadcasting, and vectorization: the engine room under every ML library.",
            "lv": 1,
            "time": "~1w",
            "tip": "If you write a Python for-loop over an array, stop. There is a vectorized way, and it is 100x faster.",
            "learn": [
              "ndarrays: shapes, dtypes, indexing, and slicing semantics",
              "Broadcasting rules: how NumPy silently aligns mismatched shapes",
              "Vectorization: replacing loops with whole-array operations"
            ],
            "do": [
              "Implement matrix multiplication three ways: nested loops, list comprehension, numpy dot; benchmark all three",
              "Normalize a 10,000 x 50 dataset with one broadcasting expression",
              "Reshape and stack arrays to build a mini batch pipeline for a model"
            ],
            "tools": ["NumPy"],
            "res": [
              ["NumPy: Learn", "https://numpy.org/learn/"]
            ]
          },
          {
            "t": "pandas: Data Wrangling",
            "d": "Real data arrives messy. pandas is how you slice, filter, group, and reshape it into something learnable.",
            "lv": 1,
            "time": "~1w",
            "tip": "Learn groupby-agg-merge until it is muscle memory. It is 80% of professional data wrangling.",
            "learn": [
              "Series and DataFrames: indexing, filtering, and the copy-vs-view trap",
              "groupby, pivot, merge: the grammar of reshaping data",
              "Handling dtypes, datetimes, and categoricals without silent corruption"
            ],
            "do": [
              "Load a messy real CSV (try a Kaggle dataset) and produce a clean analysis-ready table",
              "Answer five business questions using only groupby aggregations",
              "Merge three tables with different key formats and validate row counts before and after"
            ],
            "tools": ["pandas", "Kaggle"],
            "res": [
              ["pandas documentation", "https://pandas.pydata.org/docs/"],
              ["Kaggle Learn", "https://www.kaggle.com/learn"]
            ]
          },
          {
            "t": "Data Visualization",
            "d": "Plot before you model. Visualization is how you spot the leak, the outlier, and the wrong assumption.",
            "lv": 1,
            "time": "~6h",
            "tip": "Plot the raw data before any modeling. The weird spike you see in 30 seconds saves three days of debugging.",
            "learn": [
              "Matplotlib fundamentals: figures, axes, and the object-oriented API",
              "seaborn for statistical plots: distributions, correlations, categorical comparisons",
              "Choosing the right chart: what each plot type can and cannot show"
            ],
            "do": [
              "Plot distributions, a correlation heatmap, and pair plots for a tabular dataset",
              "Recreate a misleading chart (truncated axis) and fix it properly",
              "Build one publication-quality figure with labels, legend, and a clear title"
            ],
            "tools": ["Matplotlib", "seaborn"],
            "res": [
              ["Matplotlib documentation", "https://matplotlib.org/stable/"],
              ["seaborn user guide", "https://seaborn.pydata.org/"]
            ]
          },
          {
            "t": "Data Formats & Loading",
            "d": "CSV, JSON, Parquet: how data is stored, why the format matters, and loading efficiently at scale.",
            "lv": 1,
            "time": "~4h",
            "tip": "Default to Parquet for analytics. CSVs are for humans; Parquet is for machines: typed, compressed, columnar.",
            "learn": [
              "Row vs columnar storage: why Parquet scans 100x less data for aggregations",
              "Schemas and dtypes: the invisible contract between storage and code",
              "Chunked and lazy loading when data does not fit in memory"
            ],
            "do": [
              "Convert a large CSV to Parquet and compare file size and read speed",
              "Read only three columns from a wide Parquet file and time the difference",
              "Stream a file larger than RAM in chunks and compute running statistics"
            ],
            "tools": ["pandas", "pyarrow", "Polars"],
            "res": [
              ["Apache Parquet documentation", "https://parquet.apache.org/docs/"],
              ["Polars user guide", "https://docs.pola.rs/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Data Preparation",
        "d": "Models are only as good as the data you feed them. Cleaning, encoding, and engineering features is the real job.",
        "lv": 1,
        "children": [
          {
            "t": "Train-Test Split & Data Leakage",
            "d": "Hold out honest test data or your metrics are fiction. Learn splitting, stratification, and the many faces of leakage.",
            "lv": 1,
            "time": "~4h",
            "tip": "Data leakage is the #1 reason models look amazing in notebooks and fail in production. If a feature would not exist at prediction time, it cannot be a feature.",
            "learn": [
              "Why holdout sets exist: estimating performance on truly unseen data",
              "Stratified splitting for imbalanced classes and grouped splits for grouped data",
              "Leakage patterns: target-encoded features, future information, duplicated rows"
            ],
            "do": [
              "Perform a stratified train-test split with scikit-learn and verify class ratios match",
              "Deliberately leak a target-derived feature, watch the score inflate, then fix it",
              "Write a checklist you will run before trusting any evaluation score"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn: train_test_split", "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html"]
            ]
          },
          {
            "t": "Handling Missing Data",
            "d": "Missing values are information, not just holes. Diagnose the mechanism, then impute or model deliberately.",
            "lv": 1,
            "time": "~5h",
            "tip": "Dropping every row with a missing value can silently delete your most interesting cases. Diagnose first, delete last.",
            "learn": [
              "MCAR, MAR, MNAR: the three missingness mechanisms and why they change the fix",
              "Imputation strategies: mean/median, model-based, and indicator columns",
              "When missingness itself is a predictive feature worth keeping"
            ],
            "do": [
              "Profile missingness patterns in a real dataset with a missingno-style matrix plot",
              "Compare mean imputation vs KNN imputation vs a missingness indicator on model score",
              "Build an sklearn Pipeline so imputation is fit on train only, never on test"
            ],
            "tools": ["scikit-learn", "pandas"],
            "res": [
              ["scikit-learn: imputing missing values", "https://scikit-learn.org/stable/modules/impute.html"]
            ]
          },
          {
            "t": "Feature Scaling & Encoding",
            "d": "Distance-based and gradient-based models are scale-sensitive. Scale numbers, encode categories, and do it inside pipelines.",
            "lv": 1,
            "time": "~6h",
            "tip": "Fit scalers on the training set only. Fitting on the full dataset before splitting is leakage wearing a disguise.",
            "learn": [
              "Standardization vs min-max normalization: which models care and why",
              "One-hot, ordinal, and target encoding: trade-offs for categorical features",
              "Pipelines and ColumnTransformers: preprocessing that cannot leak"
            ],
            "do": [
              "Train KNN with and without scaling and measure the accuracy gap",
              "One-hot encode a high-cardinality column, hit the dimensionality wall, then switch to target encoding",
              "Build a ColumnTransformer that scales numerics and encodes categoricals in one pipeline"
            ],
            "tools": ["scikit-learn", "pandas"],
            "res": [
              ["scikit-learn: preprocessing", "https://scikit-learn.org/stable/modules/preprocessing.html"]
            ]
          },
          {
            "t": "Feature Engineering",
            "d": "Creating the right features beats picking a fancier algorithm. Domain knowledge, transformed into columns.",
            "lv": 2,
            "time": "~1w",
            "tip": "Feature engineering beats algorithm choice in most tabular competitions. Spend your creativity budget here.",
            "learn": [
              "Feature crosses, ratios, and aggregations: turning domain hunches into numbers",
              "Datetime decomposition: hour, weekday, seasonality as learnable structure",
              "Text and target-derived features: counts, lengths, and leakage-safe encodings"
            ],
            "do": [
              "Engineer 10 new features for a housing dataset and measure the score lift over raw features",
              "Decompose a timestamp column and discover a weekly pattern the raw model missed",
              "Document every engineered feature with its rationale in a feature dictionary"
            ],
            "tools": ["pandas", "scikit-learn", "Feature-engine"],
            "res": [
              ["Kaggle Learn: Feature Engineering", "https://www.kaggle.com/learn/feature-engineering"]
            ]
          },
          {
            "t": "Feature Selection",
            "d": "More features is not more signal. Remove the noise deliberately with filter, wrapper, and embedded methods.",
            "lv": 2,
            "time": "~5h",
            "tip": "Select features inside your cross-validation loop. Selecting on the full dataset first is another quiet form of leakage.",
            "learn": [
              "Filter methods: correlation, mutual information, chi-squared tests",
              "Wrapper methods: recursive feature elimination and forward selection",
              "Embedded methods: L1 regularization and tree-based importances"
            ],
            "do": [
              "Rank features by mutual information and drop the bottom half; compare scores",
              "Run recursive feature elimination with cross-validation to find the elbow",
              "Compare L1-selected features against random-forest importances on the same data"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn: feature selection", "https://scikit-learn.org/stable/modules/feature_selection.html"]
            ]
          },
          {
            "t": "Imbalanced Data",
            "d": "Fraud, disease, churn: the interesting class is rare. Learn to train and evaluate when positives are 1% of the data.",
            "lv": 2,
            "time": "~5h",
            "tip": "With 1% positives, 99% accuracy means nothing. Fix the metric before you touch the model.",
            "learn": [
              "Why accuracy lies: precision-recall trade-offs under imbalance",
              "Class weights, oversampling, SMOTE, and undersampling strategies",
              "Threshold tuning: the cheapest performance boost nobody tries first"
            ],
            "do": [
              "Train on a 1:99 dataset, watch accuracy lie, then switch to PR-AUC",
              "Compare class_weight='balanced' vs SMOTE vs plain baseline on F1",
              "Tune the decision threshold on validation data and plot the precision-recall curve"
            ],
            "tools": ["scikit-learn", "imbalanced-learn"],
            "res": [
              ["imbalanced-learn documentation", "https://imbalanced-learn.org/stable/"]
            ]
          }
        ]
      },
      {
        "t": "Supervised Learning",
        "d": "Learning from labeled examples. Classification and regression: the workhorses of applied machine learning.",
        "lv": 2,
        "children": [
          {
            "t": "How Supervised Learning Works",
            "d": "Features in, labels out. The training loop, loss functions, and what 'learning' actually means mathematically.",
            "lv": 1,
            "time": "~5h",
            "tip": "Every supervised model is the same loop: predict, measure error, adjust. Learn the loop once and every algorithm is a variation.",
            "learn": [
              "Features, labels, and the hypothesis: the anatomy of a supervised problem",
              "Loss functions: how the model measures being wrong",
              "The training loop: fit on training data, judge on data never seen"
            ],
            "do": [
              "Train your first model: LinearRegression on a toy dataset with scikit-learn",
              "Manually compute predictions and residuals to see what fit() actually did",
              "Overfit on purpose with a tiny dataset and watch train vs test scores diverge"
            ],
            "tools": ["scikit-learn", "Jupyter"],
            "res": [
              ["Google Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course"]
            ]
          },
          {
            "t": "Linear & Logistic Regression",
            "d": "The simplest models, and still the right first baseline for most problems. Least squares, sigmoid, and decision boundaries.",
            "lv": 2,
            "time": "~1w",
            "tip": "Always run logistic regression before anything fancy. If a forest cannot beat it, your features need work, not your model.",
            "learn": [
              "Ordinary least squares: the closed-form solution and its assumptions",
              "The sigmoid function: turning a linear score into a probability",
              "Decision boundaries and odds ratios: interpreting coefficients honestly"
            ],
            "do": [
              "Fit linear regression, then implement the normal equation yourself and match the coefficients",
              "Train logistic regression on a binary dataset and plot the decision boundary",
              "Interpret three coefficients in plain language a stakeholder would understand"
            ],
            "tools": ["scikit-learn", "NumPy", "Matplotlib"],
            "res": [
              ["scikit-learn: linear models", "https://scikit-learn.org/stable/modules/linear_model.html"]
            ]
          },
          {
            "t": "Regularization: Ridge, Lasso, ElasticNet",
            "d": "Penalize complexity to generalize better. L1 sparsity, L2 shrinkage, and the bias-variance trade-off in one parameter.",
            "lv": 2,
            "time": "~5h",
            "tip": "When coefficients explode or the model memorizes noise, reach for regularization before reaching for a bigger model.",
            "learn": [
              "L1 vs L2 penalties: sparsity and feature selection vs smooth shrinkage",
              "The regularization strength parameter: the dial between underfit and overfit",
              "ElasticNet: combining both penalties for correlated features"
            ],
            "do": [
              "Fit Ridge, Lasso, and ElasticNet on the same data and compare coefficient paths",
              "Plot validation score vs alpha to find the sweet spot",
              "Use Lasso to automatically select features on a high-dimensional dataset"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["scikit-learn: ridge and lasso", "https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification"]
            ]
          },
          {
            "t": "Decision Trees & Random Forests",
            "d": "If-then rules learned from data, then bagged into forests. Interpretable, robust, and the tabular baseline to beat.",
            "lv": 2,
            "time": "~1w",
            "tip": "A single deep tree memorizes. A forest of constrained trees generalizes. max_depth is the most important knob you own.",
            "learn": [
              "Splitting criteria: Gini impurity and entropy, and how trees choose questions",
              "Overfitting in trees: why depth must be constrained",
              "Bagging and random forests: variance reduction through many noisy trees"
            ],
            "do": [
              "Train a decision tree, export it, and read the actual split rules it learned",
              "Tune max_depth and min_samples_leaf and plot the overfitting curve",
              "Train a random forest, plot feature importances, and sanity-check the top three"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["scikit-learn: ensemble methods", "https://scikit-learn.org/stable/modules/ensemble.html"]
            ]
          },
          {
            "t": "Gradient Boosting: XGBoost & LightGBM",
            "d": "Trees that fix each other's mistakes, sequentially. The algorithm behind most Kaggle wins and production tabular models.",
            "lv": 2,
            "time": "~1w",
            "tip": "Start with LightGBM defaults plus early stopping. It beats 90% of hand-tuned models people brag about.",
            "learn": [
              "Boosting intuition: each new tree fits the previous trees' residuals",
              "Key hyperparameters: learning rate, depth, subsampling, and early stopping",
              "XGBoost vs LightGBM vs CatBoost: when each one wins"
            ],
            "do": [
              "Train LightGBM with early stopping on a tabular dataset and log the validation curve",
              "Tune num_leaves and min_data_in_leaf; observe the overfitting cliff",
              "Compare against your random forest baseline and document the delta honestly"
            ],
            "tools": ["LightGBM", "XGBoost", "scikit-learn"],
            "res": [
              ["LightGBM documentation", "https://lightgbm.readthedocs.io/en/latest/"],
              ["XGBoost documentation", "https://xgboost.readthedocs.io/en/stable/"]
            ]
          },
          {
            "t": "Support Vector Machines",
            "d": "Maximum-margin classifiers and the kernel trick: elegant geometry for small, clean datasets.",
            "lv": 2,
            "time": "~6h",
            "tip": "Always scale features before an SVM. An unscaled SVM is a broken SVM, and the error messages will not tell you.",
            "learn": [
              "Margins and support vectors: why only the boundary points matter",
              "The kernel trick: linear separation in a higher-dimensional space",
              "C and gamma: the two knobs that decide everything"
            ],
            "do": [
              "Train linear vs RBF-kernel SVM on a non-linear toy dataset and plot both boundaries",
              "Grid-search C and gamma and visualize the resulting decision surface changes",
              "Time an SVM on 100k rows to learn when it stops being practical"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn: SVM", "https://scikit-learn.org/stable/modules/svm.html"]
            ],
            "tag": "opt"
          },
          {
            "t": "K-Nearest Neighbors",
            "d": "The laziest learner: classify by the company a point keeps. Simple, intuitive, and a great lesson in distance.",
            "lv": 1,
            "time": "~4h",
            "tip": "KNN dies in high dimensions. If you have more than a dozen features, reduce or embed first.",
            "learn": [
              "Distance metrics: Euclidean, Manhattan, cosine, and when each applies",
              "Choosing k: the bias-variance trade-off in its simplest form",
              "The curse of dimensionality: why distance stops meaning anything"
            ],
            "do": [
              "Implement KNN from scratch in 30 lines and match sklearn's output",
              "Plot accuracy vs k and find the sweet spot on a validation set",
              "Standardize vs raw features: measure how much scaling matters for KNN"
            ],
            "tools": ["scikit-learn", "NumPy"],
            "res": [
              ["scikit-learn: nearest neighbors", "https://scikit-learn.org/stable/modules/neighbors.html"]
            ]
          },
          {
            "t": "Hyperparameter Tuning",
            "d": "Systematic search for the best settings: grid, random, and Bayesian optimization with Optuna.",
            "lv": 2,
            "time": "~6h",
            "tip": "Tune on validation, report on test, touch the test set exactly once. Everything else is self-deception.",
            "learn": [
              "Grid vs random search: why random usually wins per unit of compute",
              "Bayesian optimization: modeling the search space itself with Optuna",
              "Search budgets and the danger of overfitting your validation set"
            ],
            "do": [
              "Run a random search over a gradient boosting model and log every trial",
              "Re-run the same budget with Optuna and compare best scores and efficiency",
              "Freeze the winner, evaluate once on the test set, and write up the final config"
            ],
            "tools": ["Optuna", "scikit-learn"],
            "res": [
              ["Optuna documentation", "https://optuna.org/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Unsupervised Learning",
        "d": "Finding structure when nobody labeled the answers. Clustering, embeddings, and anomaly detection.",
        "lv": 2,
        "children": [
          {
            "t": "Clustering: K-Means",
            "d": "Group similar points together. K-means, choosing k, and the metrics that tell you if the clusters are real.",
            "lv": 2,
            "time": "~6h",
            "tip": "K-means assumes round, equally-sized clusters. Feed it crescents and it will confidently give you the wrong answer.",
            "learn": [
              "The k-means algorithm: assign, update centroids, repeat until stable",
              "Choosing k: elbow method, silhouette score, and domain sense",
              "Initialization matters: k-means++ and why random starts give random answers"
            ],
            "do": [
              "Cluster a customer dataset with k-means and profile each segment in plain words",
              "Plot the elbow curve and silhouette scores for k=2..10 and justify your pick",
              "Run k-means on standardized vs raw data and compare the cluster shapes"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["scikit-learn: clustering", "https://scikit-learn.org/stable/modules/clustering.html"]
            ]
          },
          {
            "t": "Hierarchical & DBSCAN Clustering",
            "d": "Beyond k-means: tree-structured clusters and density-based discovery of oddly shaped groups.",
            "lv": 2,
            "time": "~6h",
            "tip": "DBSCAN's eps is everything. Plot the k-distance graph to pick it instead of guessing.",
            "learn": [
              "Agglomerative clustering: dendrograms and linkage criteria",
              "DBSCAN: core points, density reachability, and natural noise handling",
              "When to use which: known k vs unknown shapes vs noisy data"
            ],
            "do": [
              "Build a dendrogram on a small dataset and cut it at two different heights",
              "Run DBSCAN on moon-shaped data where k-means fails; tune eps via the k-distance plot",
              "Benchmark all three algorithms on the same dataset and compare runtimes"
            ],
            "tools": ["scikit-learn", "SciPy"],
            "res": [
              ["scikit-learn: clustering", "https://scikit-learn.org/stable/modules/clustering.html"]
            ]
          },
          {
            "t": "Dimensionality Reduction: PCA",
            "d": "Compress hundreds of features into the few directions that carry the variance. The math of seeing more with less.",
            "lv": 2,
            "time": "~5h",
            "tip": "Always standardize before PCA. Otherwise the feature with the biggest units becomes the first component by default.",
            "learn": [
              "Variance explained: how many components keep how much information",
              "PCA as eigendecomposition of the covariance matrix",
              "When PCA helps (correlated features) and when it destroys signal (nonlinear structure)"
            ],
            "do": [
              "Reduce a 50-feature dataset to 2D with PCA and plot the explained-variance curve",
              "Train a model on raw vs PCA features and compare accuracy and training time",
              "Inspect the loadings of the first two components and interpret them"
            ],
            "tools": ["scikit-learn", "NumPy"],
            "res": [
              ["scikit-learn: PCA", "https://scikit-learn.org/stable/modules/decomposition.html#pca"]
            ]
          },
          {
            "t": "t-SNE & UMAP for Visualization",
            "d": "Nonlinear embeddings that reveal hidden structure in high-dimensional data. Powerful lenses, dangerous crutches.",
            "lv": 2,
            "time": "~4h",
            "tip": "t-SNE and UMAP are for looking, not for modeling. Never feed their output as features without understanding the distortion.",
            "learn": [
              "How t-SNE preserves local neighborhoods (and distorts global distances)",
              "UMAP: faster, more stable, and better at preserving global structure",
              "Perplexity and n_neighbors: the knobs that reshape your map"
            ],
            "do": [
              "Embed a labeled dataset with UMAP and color by true labels to reveal structure",
              "Re-run t-SNE with perplexity 5, 30, and 200 and observe how the map changes",
              "Write down three things your UMAP plot cannot tell you, to stay honest"
            ],
            "tools": ["UMAP", "scikit-learn"],
            "res": [
              ["UMAP documentation", "https://umap-learn.readthedocs.io/en/latest/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Autoencoders",
            "d": "Neural networks that learn to compress and rebuild. The bridge from classical ML to deep representation learning.",
            "lv": 3,
            "time": "~8h",
            "tip": "An autoencoder that copies too well learned nothing. Constrain the bottleneck or add noise to force real compression.",
            "learn": [
              "Encoder-decoder architecture and the information bottleneck",
              "Latent space: the compressed representation downstream tasks actually use",
              "Denoising and variational autoencoders: from compression to generation"
            ],
            "do": [
              "Build a simple autoencoder in PyTorch on MNIST and visualize reconstructions",
              "Plot the 2D latent space colored by digit class",
              "Use reconstruction error to flag anomalous images"
            ],
            "tools": ["PyTorch", "Matplotlib"],
            "res": [
              ["PyTorch tutorials", "https://pytorch.org/tutorials/"]
            ]
          },
          {
            "t": "Anomaly Detection",
            "d": "Find the needle: fraud, intrusions, and faults. Learning normal so you can spot what is not.",
            "lv": 2,
            "time": "~5h",
            "tip": "Anomaly detection is evaluated like retrieval, not classification. Precision@k matters more than accuracy.",
            "learn": [
              "Isolation Forest: anomalies are few and different, so they isolate fast",
              "One-class SVM and statistical approaches: modeling the boundary of normal",
              "Reconstruction error from autoencoders as an anomaly score"
            ],
            "do": [
              "Detect injected anomalies in a synthetic dataset with Isolation Forest",
              "Compare contamination parameter settings and their effect on false alarms",
              "Build an end-to-end demo: train on normal, score new points, rank the top anomalies"
            ],
            "tools": ["scikit-learn", "PyTorch"],
            "res": [
              ["scikit-learn: outlier detection", "https://scikit-learn.org/stable/modules/outlier_detection.html"]
            ]
          },
          {
            "t": "Recommendation Systems",
            "d": "People who liked this also liked... Collaborative filtering, matrix factorization, and the cold-start problem.",
            "lv": 3,
            "time": "~1w",
            "tip": "Offline metrics (RMSE) and online success (clicks) often disagree. Design for the business metric from the start.",
            "learn": [
              "User-based vs item-based collaborative filtering",
              "Matrix factorization: latent factors for users and items",
              "Cold start, popularity bias, and the exploration-exploitation tension"
            ],
            "do": [
              "Build a movie recommender on MovieLens with matrix factorization",
              "Evaluate with ranking metrics (precision@k), not just RMSE",
              "Write a cold-start strategy for a brand-new user and a brand-new item"
            ],
            "tools": ["Surprise", "pandas", "NumPy"],
            "res": [
              ["Surprise recommender library", "https://surpriselib.com/"]
            ]
          }
        ]
      },
      {
        "t": "Model Evaluation",
        "d": "Proving your model actually works on data it has never seen. Metrics, validation, and honest model selection.",
        "lv": 2,
        "children": [
          {
            "t": "Classification Metrics",
            "d": "Accuracy is the beginning, not the answer. Precision, recall, F1, ROC-AUC, and choosing what to optimize.",
            "lv": 2,
            "time": "~6h",
            "tip": "Pick the metric from the business cost of errors, not from habit. A missed tumor and a false alarm do not cost the same.",
            "learn": [
              "Confusion matrix: the four outcomes every classifier produces",
              "Precision vs recall: the trade-off curve and the F1 compromise",
              "ROC-AUC vs PR-AUC: which curve to trust under class imbalance"
            ],
            "do": [
              "Compute precision, recall, and F1 by hand from a confusion matrix, then verify with sklearn",
              "Plot ROC and precision-recall curves for the same model and explain the difference",
              "Choose the right metric for three scenarios: spam filter, cancer screening, ad targeting"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["scikit-learn: model evaluation", "https://scikit-learn.org/stable/modules/model_evaluation.html"]
            ]
          },
          {
            "t": "Regression Metrics",
            "d": "How wrong, on average, and in what units. MAE, RMSE, R-squared, and reading residual plots like a doctor.",
            "lv": 2,
            "time": "~4h",
            "tip": "RMSE punishes big errors hard; MAE treats all errors equally. Choose based on which mistake hurts more.",
            "learn": [
              "MAE vs RMSE vs R-squared: what each one rewards and hides",
              "Residual plots: the diagnostic that reveals heteroscedasticity and missed patterns",
              "MAPE and its traps: never average percentages of percentages blindly"
            ],
            "do": [
              "Fit a regression model and plot residuals vs predictions; diagnose the pattern",
              "Compare MAE and RMSE on data with one huge outlier and explain the gap",
              "Report metrics in real units a stakeholder understands, not just R-squared"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["scikit-learn: regression metrics", "https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics"]
            ]
          },
          {
            "t": "Cross-Validation",
            "d": "One split is one opinion. K-fold, stratified, and time-aware validation for estimates you can trust.",
            "lv": 2,
            "time": "~5h",
            "tip": "For time-ordered data, random k-fold is leakage. Split by time or your 'great' model is a time traveler.",
            "learn": [
              "K-fold and stratified k-fold: stable estimates from limited data",
              "Time-series splits: validation that respects causality",
              "Nested CV: tuning and evaluating without fooling yourself"
            ],
            "do": [
              "Compare a single split vs 5-fold CV estimates on a small dataset; observe the variance",
              "Implement a time-based split on temporal data and contrast with shuffled CV",
              "Run nested CV around a grid search and report the honest performance estimate"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn: cross-validation", "https://scikit-learn.org/stable/modules/cross_validation.html"]
            ]
          },
          {
            "t": "Bias-Variance & Overfitting",
            "d": "The fundamental tension of learning: too simple underfits, too flexible memorizes. Diagnose with learning curves.",
            "lv": 2,
            "time": "~5h",
            "tip": "More data fixes high variance; more complexity fixes high bias. Diagnose first, then prescribe.",
            "learn": [
              "Bias vs variance: the two sources of error and their trade-off",
              "Learning curves: reading whether you need data or capacity",
              "Regularization, early stopping, and dropout as variance medicine"
            ],
            "do": [
              "Plot learning curves for an underfit and an overfit model; label which is which",
              "Fix an overfitting tree with max_depth, then with more data, and compare",
              "Deliberately memorize a tiny dataset and show the train-test gap exploding"
            ],
            "tools": ["scikit-learn", "Matplotlib"],
            "res": [
              ["Google ML Crash Course: generalization", "https://developers.google.com/machine-learning/crash-course/generalization/peril-of-overfitting"]
            ]
          },
          {
            "t": "Model Selection & Experiment Tracking",
            "d": "Compare models fairly and remember what you tried. Baselines, statistical comparison, and MLflow.",
            "lv": 2,
            "time": "~5h",
            "tip": "If you cannot reproduce your best run, you do not have a best run. Track parameters, data version, and code together.",
            "learn": [
              "Fair comparison: same splits, same metric, baselines first",
              "Statistical significance of model differences: when a 0.3% lift is noise",
              "Experiment tracking: logging params, metrics, and artifacts with MLflow"
            ],
            "do": [
              "Set up MLflow tracking and log 10 runs of a tuning experiment",
              "Compare three models on identical CV splits and pick a winner with evidence",
              "Reproduce your best run from the logged artifacts alone"
            ],
            "tools": ["MLflow", "scikit-learn"],
            "res": [
              ["MLflow documentation", "https://mlflow.org/docs/latest/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Deep Learning",
        "d": "Neural networks: the engine behind modern AI. From perceptrons to transformers, built by hand first.",
        "lv": 3,
        "children": [
          {
            "t": "Neural Network Basics",
            "d": "Perceptrons, multi-layer networks, and backpropagation. Build one from raw NumPy before touching a framework.",
            "lv": 3,
            "time": "~1w",
            "tip": "Build one network from raw NumPy once. Autograd feels like magic until you have done the calculus yourself.",
            "learn": [
              "Perceptrons and MLPs: weighted sums, layers, and universal approximation intuition",
              "Forward propagation: data flowing through the network",
              "Backpropagation: the chain rule applied layer by layer"
            ],
            "do": [
              "Implement a 2-layer MLP in pure NumPy with manual backprop on a toy dataset",
              "Verify your gradients with numerical gradient checking",
              "Rebuild the same network in PyTorch and compare the code you no longer write"
            ],
            "tools": ["NumPy", "PyTorch"],
            "res": [
              ["Karpathy: Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html"],
              ["PyTorch tutorials", "https://pytorch.org/tutorials/"]
            ]
          },
          {
            "t": "Activation & Loss Functions",
            "d": "ReLU, sigmoid, softmax: the nonlinearities that give networks power, paired with the right loss for each task.",
            "lv": 3,
            "time": "~5h",
            "tip": "Softmax plus cross-entropy is the default for classification for a reason. Do not invent your own loss until you can derive this one.",
            "learn": [
              "Why linearity is useless: activation functions as the source of expressiveness",
              "ReLU family: dying ReLUs, leaky variants, and modern alternatives",
              "Matching losses to tasks: cross-entropy for classification, MSE for regression"
            ],
            "do": [
              "Plot sigmoid, tanh, ReLU, and GELU and note saturation regions",
              "Swap MSE for cross-entropy on a classification task and measure the difference",
              "Diagnose a network that will not learn and trace it to a saturated activation"
            ],
            "tools": ["PyTorch", "Matplotlib"],
            "res": [
              ["PyTorch: nn modules", "https://pytorch.org/docs/stable/nn.html"]
            ]
          },
          {
            "t": "PyTorch & TensorFlow",
            "d": "The two deep learning frameworks. Learn one deeply (PyTorch), know the other exists, and write clean training loops.",
            "lv": 3,
            "time": "~1w",
            "tip": "Learn one framework deeply instead of two shallowly. Framework-hopping is procrastination dressed as learning.",
            "learn": [
              "Tensors, autograd, and the computation graph mental model",
              "Datasets and DataLoaders: batching, shuffling, and augmentation pipelines",
              "The training loop: epochs, validation, checkpointing, and device management"
            ],
            "do": [
              "Write a complete PyTorch training loop from scratch: model, loss, optimizer, loop",
              "Add validation, early stopping, and model checkpointing",
              "Port the same model to Keras and feel the abstraction trade-offs"
            ],
            "tools": ["PyTorch", "TensorFlow", "Keras"],
            "res": [
              ["PyTorch documentation", "https://pytorch.org/docs/stable/index.html"],
              ["TensorFlow: learn", "https://www.tensorflow.org/learn"]
            ]
          },
          {
            "t": "CNNs for Images",
            "d": "Convolutional networks: how machines see. Convolutions, pooling, and transfer learning with pretrained vision models.",
            "lv": 3,
            "time": "~1w",
            "tip": "Never train a vision model from scratch on a small dataset. Fine-tune a pretrained backbone and spend the saved weeks on data.",
            "learn": [
              "Convolution, stride, padding: how filters detect edges, textures, and shapes",
              "Pooling and hierarchical features: from pixels to objects",
              "Transfer learning: pretrained backbones as feature extractors and fine-tuning targets"
            ],
            "do": [
              "Train a small CNN on CIFAR-10 and visualize the first-layer filters",
              "Fine-tune a pretrained ResNet on your own image dataset",
              "Compare frozen-backbone vs full fine-tuning on accuracy and training time"
            ],
            "tools": ["PyTorch", "torchvision"],
            "res": [
              ["torchvision models", "https://pytorch.org/vision/stable/index.html"]
            ]
          },
          {
            "t": "RNNs, LSTMs & Sequence Models",
            "d": "Networks with memory for sequences: text, time series, audio. Vanishing gradients and the gates that tamed them.",
            "lv": 3,
            "time": "~1w",
            "tip": "Transformers replaced RNNs almost everywhere. Learn LSTMs for the concepts (gates, memory), then move on.",
            "learn": [
              "Recurrence: hidden state as memory across time steps",
              "Vanishing and exploding gradients in long sequences",
              "LSTM and GRU gates: what each gate protects and forgets"
            ],
            "do": [
              "Train a character-level RNN to generate text and watch it learn syntax",
              "Compare plain RNN vs LSTM on a long-dependency task",
              "Build a time-series forecaster with an LSTM on real temporal data"
            ],
            "tools": ["PyTorch", "TensorFlow"],
            "res": [
              ["PyTorch: sequence models tutorial", "https://pytorch.org/tutorials/beginner/nlp/sequence_models_tutorial.html"]
            ],
            "tag": "opt"
          },
          {
            "t": "Transformers & Attention",
            "d": "The architecture behind GPT and BERT. Self-attention, multi-head attention, and positional encoding, demystified.",
            "lv": 3,
            "time": "~1w",
            "tip": "Attention is a smart weighted average. The diagrams look scarier than the math actually is.",
            "learn": [
              "Self-attention: queries, keys, values, and the scaled dot-product",
              "Multi-head attention and positional encoding: why one head is not enough",
              "Encoder vs decoder vs encoder-decoder: BERT, GPT, and T5 family tree"
            ],
            "do": [
              "Implement scaled dot-product attention from scratch in PyTorch",
              "Train a tiny transformer on a toy sequence task",
              "Use a Hugging Face pipeline for sentiment analysis and inspect attention weights"
            ],
            "tools": ["PyTorch", "Hugging Face Transformers"],
            "res": [
              ["Hugging Face Transformers docs", "https://huggingface.co/docs/transformers"],
              ["The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/"]
            ]
          },
          {
            "t": "Regularization in Deep Learning",
            "d": "Deep nets memorize everything. Dropout, weight decay, augmentation, and normalization keep them honest.",
            "lv": 3,
            "time": "~5h",
            "tip": "Data augmentation is the highest-ROI regularization. A bigger, noisier dataset beats a cleverer penalty.",
            "learn": [
              "Dropout: training an ensemble by randomly silencing neurons",
              "Weight decay, early stopping, and batch normalization effects",
              "Data augmentation as regularization: teaching invariance with examples"
            ],
            "do": [
              "Ablate dropout rates on an overfitting network and plot the generalization gap",
              "Add image augmentation and measure the test accuracy lift",
              "Compare batch norm vs layer norm training stability on the same model"
            ],
            "tools": ["PyTorch", "torchvision"],
            "res": [
              ["PyTorch: nn modules", "https://pytorch.org/docs/stable/nn.html"]
            ]
          },
          {
            "t": "Transfer Learning",
            "d": "Stand on pretrained shoulders. Fine-tuning strategies that turn small datasets into strong models.",
            "lv": 3,
            "time": "~5h",
            "tip": "Use discriminative learning rates: tiny updates for early layers, bigger ones for the new head.",
            "learn": [
              "Feature extraction vs fine-tuning: when to freeze and when to unfreeze",
              "Domain similarity: how far the pretrained knowledge transfers",
              "Catastrophic forgetting and gradual unfreezing strategies"
            ],
            "do": [
              "Fine-tune a pretrained model on a small custom dataset end to end",
              "Compare linear probing (frozen backbone) against full fine-tuning",
              "Try gradual unfreezing and log how each stage changes validation score"
            ],
            "tools": ["PyTorch", "Hugging Face Hub"],
            "res": [
              ["Hugging Face Hub", "https://huggingface.co/"]
            ]
          }
        ]
      },
      {
        "t": "Advanced ML & MLOps Basics",
        "d": "Beyond the notebook: reinforcement learning, NLP, interpretability, and shipping models that survive contact with users.",
        "lv": 3,
        "children": [
          {
            "t": "NLP & Text Embeddings",
            "d": "Machines reading text: tokenization, embeddings, and semantic search with sentence transformers.",
            "lv": 3,
            "time": "~1w",
            "tip": "Start with pretrained embeddings for any text task. Training your own embeddings from scratch is a research project, not a baseline.",
            "learn": [
              "Tokenization: words, subwords, and why 'unbelievable' becomes three tokens",
              "Word and sentence embeddings: meaning as geometry",
              "Classical NLP pipeline: cleaning, vectorizing, and baseline classifiers"
            ],
            "do": [
              "Build a semantic search engine over documents with sentence-transformers",
              "Train a TF-IDF + logistic regression baseline on a text classification task",
              "Visualize word analogies in embedding space (king - man + woman)"
            ],
            "tools": ["spaCy", "sentence-transformers", "scikit-learn"],
            "res": [
              ["spaCy usage guides", "https://spacy.io/usage"],
              ["Hugging Face Hub", "https://huggingface.co/"]
            ]
          },
          {
            "t": "Reinforcement Learning Basics",
            "d": "Learning by trial and error: agents, environments, rewards, and the algorithms that beat games.",
            "lv": 3,
            "time": "~1w",
            "tip": "RL is sample-hungry and unstable by nature. If supervised learning can solve it, do not use RL.",
            "learn": [
              "The RL loop: agent, environment, state, action, reward",
              "Q-learning and the exploration-exploitation dilemma",
              "Policy gradients and actor-critic: the modern deep RL family"
            ],
            "do": [
              "Implement tabular Q-learning on FrozenLake from scratch",
              "Solve CartPole with a deep Q-network using Stable Baselines3",
              "Tune the exploration rate and watch learning collapse or succeed"
            ],
            "tools": ["Gymnasium", "Stable Baselines3"],
            "res": [
              ["Gymnasium documentation", "https://gymnasium.farama.org/"],
              ["Stable Baselines3 docs", "https://stable-baselines3.readthedocs.io/en/master/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Explainable AI",
            "d": "'The model said so' is not an explanation. SHAP and LIME for understanding and defending your models.",
            "lv": 3,
            "time": "~6h",
            "tip": "Explain the model to catch its mistakes, not just to impress stakeholders. Explanations are debugging tools first.",
            "learn": [
              "Global vs local explanations: what drives the model vs this one prediction",
              "SHAP values: game-theoretic feature attribution done right",
              "LIME: local surrogate models and where they mislead"
            ],
            "do": [
              "Explain a gradient boosting model with SHAP and plot the summary and force plots",
              "Find a surprising feature dependence and verify it is real, not an artifact",
              "Write a one-page model explanation a non-technical stakeholder can follow"
            ],
            "tools": ["SHAP", "LIME"],
            "res": [
              ["SHAP documentation", "https://shap.readthedocs.io/"]
            ]
          },
          {
            "t": "Model Deployment & Serving",
            "d": "A model in a notebook helps nobody. Serve predictions over a REST API, containerized with Docker.",
            "lv": 3,
            "time": "~1w",
            "tip": "Version your model artifacts like code. 'model_final_v2_REAL.pkl' is how production incidents are born.",
            "learn": [
              "Batch vs online vs streaming inference: choosing the serving pattern",
              "Building a prediction API with FastAPI: validation, errors, and latency",
              "Containerization: packaging model, dependencies, and code into one image"
            ],
            "do": [
              "Wrap a trained model in a FastAPI endpoint with request validation",
              "Dockerize the API and run it with a single docker run command",
              "Load-test the endpoint and record p50/p99 latency numbers"
            ],
            "tools": ["FastAPI", "Docker", "MLflow"],
            "res": [
              ["FastAPI documentation", "https://fastapi.tiangolo.com/"],
              ["Docker documentation", "https://docs.docker.com"]
            ]
          },
          {
            "t": "Monitoring & Retraining",
            "d": "Models rot. Detect data drift and performance decay, and build retraining triggers before users notice.",
            "lv": 3,
            "time": "~6h",
            "tip": "Monitor your inputs, not just your outputs. Drift in features predicts failure before labels confirm it.",
            "learn": [
              "Data drift vs concept drift: the two ways production breaks models",
              "Drift detection: statistical tests and distribution comparisons",
              "Retraining strategies: scheduled, triggered, and champion-challenger"
            ],
            "do": [
              "Generate an Evidently drift report comparing training data to simulated production data",
              "Set a threshold on a drift metric that would trigger an alert",
              "Design a retraining pipeline sketch: data, training, validation gates, deployment"
            ],
            "tools": ["Evidently AI", "MLflow"],
            "res": [
              ["Evidently AI docs", "https://docs.evidentlyai.com/"]
            ]
          },
          {
            "t": "Capstone: End-to-End ML Project",
            "d": "Prove it all: scope a real problem, build the full pipeline, and ship a portfolio piece that gets interviews.",
            "lv": 3,
            "time": "~2w",
            "tip": "The best portfolio projects solve a problem you can explain in one sentence and demo in two minutes.",
            "learn": [
              "Problem framing: translating a vague idea into a measurable ML task",
              "Full pipeline: data, features, modeling, evaluation, deployment, monitoring",
              "Documentation and storytelling: README, metrics, and honest limitations"
            ],
            "do": [
              "Pick a dataset and write a one-page project proposal with success metrics",
              "Build the complete pipeline with experiment tracking throughout",
              "Deploy a demo, write the README, and publish the repository"
            ],
            "tools": ["Python", "scikit-learn", "MLflow", "FastAPI", "Docker"],
            "res": [
              ["Kaggle datasets", "https://www.kaggle.com/datasets"],
              ["Papers With Code", "https://paperswithcode.com/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
