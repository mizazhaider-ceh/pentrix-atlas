/* Atlas roadmap data: MLOps (mlops) */
ROADMAPS.push({
  "id": "mlops",
  "title": "MLOps",
  "icon": "🏭",
  "color": "#34d399",
  "desc": "Operate machine learning in production: track experiments, version everything, ship models safely, and keep them healthy while the world changes.",
  "kind": "role",
  "root": {
    "t": "MLOps Engineer",
    "d": "The person who turns a notebook that works once into a system that works every day.",
    "children": [
      {
        "t": "What MLOps Actually Is",
        "d": "The mindset: why models in production fail silently, and the loop that keeps them alive.",
        "lv": 1,
        "children": [
          {
            "t": "What Is MLOps?",
            "d": "MLOps is the discipline of running ML systems in production: versioning, automation, monitoring, and the feedback loop back to training.",
            "lv": 1,
            "time": "~2h",
            "tip": "MLOps is not a tool stack. Teams buy MLflow and call it MLOps while models silently degrade. The discipline comes first; tools serve it.",
            "learn": [
              "The three MLOps pillars: data versioning, model versioning, and automation of the train-to-serve loop",
              "Why ML systems decay: data drift, concept drift, and feedback loops that software systems never face",
              "The MLOps loop: experiment, train, validate, deploy, monitor, retrain"
            ],
            "do": [
              "Draw the full lifecycle of one model you have trained, from raw data to production prediction",
              "List every manual step in that lifecycle and mark which would break first at 10x traffic",
              "Read the MLflow docs overview and map each feature to a lifecycle stage"
            ],
            "tools": ["MLflow", "Weights & Biases"],
            "res": [
              ["MLflow docs", "https://mlflow.org"],
              ["Awesome MLOps", "https://github.com/visenger/awesome-mlops"]
            ]
          },
          {
            "t": "MLOps Principles",
            "d": "Reproducibility, automation, continuous evaluation, and versioning of everything: the non-negotiables.",
            "lv": 1,
            "time": "~2h",
            "tip": "The principle people skip: if you cannot reproduce a model from code + data + config, you do not own that model.",
            "learn": [
              "Reproducibility: same code, data, and config must rebuild the same model",
              "Automation boundaries: automate what is boring and risky, keep humans on quality gates",
              "Version everything: code, data, features, models, configs, and environment",
              "Continuous evaluation: quality is measured on a schedule, not assumed"
            ],
            "do": [
              "Write down the five artifacts you would need to rebuild your last model from scratch",
              "Check which of them you actually have saved anywhere today",
              "Define what 'production-ready' means for a model in one paragraph"
            ],
            "tools": ["Git", "DVC"],
            "res": [
              ["Made With ML: MLOps course", "https://madewithml.com/"]
            ]
          },
          {
            "t": "ML Lifecycle vs Software Lifecycle",
            "d": "Software fails loudly; ML fails silently. That one difference reshapes the whole lifecycle.",
            "lv": 1,
            "time": "~2h",
            "tip": "The killer interview answer: a deployed model returning HTTP 200 with garbage predictions is a failure no uptime monitor catches. That is why ML monitoring exists.",
            "learn": [
              "Loud vs silent failures: a broken model still returns 200 OK",
              "Statistical correctness: models are judged in aggregate, never on a single call",
              "The rollback unit is code AND model AND data, not just code",
              "Degradation causes: code changed, or the world changed under a fixed model"
            ],
            "do": [
              "Make a two-column table: failure modes of a REST API vs failure modes of a prediction API",
              "Write three scenarios where a model's accuracy drops without any code change",
              "Sketch a rollback plan for a bad model release and list what artifacts you need"
            ],
            "tools": ["MLflow"],
            "res": [
              ["Made With ML: MLOps course", "https://madewithml.com/"]
            ]
          },
          {
            "t": "MLOps Maturity Levels",
            "d": "Level 0 is manual, level 1 automates the pipeline, level 2 automates the pipeline itself. Know where you are.",
            "lv": 1,
            "time": "~2h",
            "tip": "Do not chase level 2. Most companies with five data scientists get full value from level 1. Maturity follows pain, not ambition.",
            "learn": [
              "Level 0: manual training, notebooks, ad-hoc deploys, no tracking",
              "Level 1: automated pipelines, experiment tracking, model registry, continuous training triggers",
              "Level 2: CI/CD for the pipeline code itself, full automation, metadata-driven",
              "How to assess your team's level and pick the smallest next step"
            ],
            "do": [
              "Score a real or imagined team on the three maturity levels",
              "List the three highest-ROI improvements that would move it one level up",
              "Identify one automation that would be premature at your current level"
            ],
            "tools": ["MLflow"],
            "res": [
              ["MLflow docs", "https://mlflow.org"]
            ]
          },
          {
            "t": "ML System Design Basics",
            "d": "Before tools: scope the problem, choose the prediction target, and decide what success looks like in production.",
            "lv": 2,
            "time": "~4h",
            "tip": "Beginners jump to model choice. Seniors spend the design on the label: what you predict, at what cadence, and what happens when the prediction is wrong.",
            "learn": [
              "Framing: prediction target, decision point, and the cost of being wrong",
              "Offline metrics vs business metrics: AUC means nothing if revenue does not move",
              "Baseline discipline: a rule-based baseline beats a fancy model that never ships",
              "Feedback loops: how predictions change the data the next model trains on"
            ],
            "do": [
              "Pick a business problem and write a one-page ML design: target, cadence, metrics, failure cost",
              "Design a rule-based baseline for the same problem",
              "List three feedback loops that could poison retraining data over time"
            ],
            "tools": ["scikit-learn"],
            "res": [
              ["scikit-learn docs", "https://scikit-learn.org"]
            ]
          },
          {
            "t": "The Real Cost of Production ML",
            "d": "Compute, data pipelines, labeling, monitoring, and human time: budget the whole system, not the training run.",
            "lv": 2,
            "time": "~3h",
            "tip": "Training is often the cheapest part. Labeling pipelines, GPU inference, and the on-call engineer's time dwarf the one training job everyone budgets for.",
            "learn": [
              "Cost buckets: training compute, inference compute, data pipelines, storage, labeling, monitoring",
              "Cost per prediction and why it decides architecture",
              "The maintenance tax: models need owners, retraining, and incident response forever",
              "When a model is not worth it: the ROI check before the first experiment"
            ],
            "do": [
              "Estimate cost per 1,000 predictions for a small model on one cloud provider",
              "List the recurring monthly costs of a deployed model beyond compute",
              "Write a go/no-go ROI check for a hypothetical churn model"
            ],
            "tools": ["AWS Pricing Calculator"],
            "res": [
              ["AWS Machine Learning", "https://aws.amazon.com/machine-learning/"]
            ]
          }
        ]
      },
      {
        "t": "Foundations: Code, Data & Containers",
        "d": "The unglamorous base: version control for code and data, reproducible environments, and containers that run anywhere.",
        "lv": 1,
        "children": [
          {
            "t": "Git for ML Projects",
            "d": "Branching, large-file discipline, and commit hygiene for projects where notebooks and models live together.",
            "lv": 1,
            "time": "~3h",
            "tip": "Committing a 2GB model file to Git is the classic ML rookie move. Git tracks code; DVC or a registry tracks artifacts.",
            "learn": [
              "Branching models for ML: experiments on branches, main stays deployable",
              "What never goes in Git: datasets, models, credentials, huge artifacts",
              ".gitignore patterns for ML projects and notebook output stripping",
              "Conventional commits so CI and changelogs can read your history"
            ],
            "do": [
              "Set up a repo with an ML .gitignore and pre-commit hooks",
              "Practice a feature-branch workflow for an experiment change",
              "Configure nbstripout so notebook outputs never pollute diffs"
            ],
            "tools": ["Git", "pre-commit", "nbstripout"],
            "res": [
              ["Git docs", "https://git-scm.com/doc"]
            ]
          },
          {
            "t": "Python Environments & Packaging",
            "d": "Reproducible environments are the difference between 'works on my machine' and 'works in production'.",
            "lv": 1,
            "time": "~3h",
            "tip": "Pin everything. An unpinned requirements file rebuilds differently next month, and 'it worked yesterday' becomes a mystery nobody can solve.",
            "learn": [
              "Virtual environments and why global installs break ML projects",
              "Lockfiles: pinning exact versions so builds are deterministic",
              "Packaging training code as an installable module, not a folder of scripts",
              "uv, pip, and conda: what each is for"
            ],
            "do": [
              "Create a project with uv and generate a lockfile",
              "Convert a training script into a packaged module with a pyproject.toml",
              "Rebuild the environment from scratch and verify the training run reproduces"
            ],
            "tools": ["uv", "pip", "conda"],
            "res": [
              ["uv docs", "https://docs.astral.sh/uv/"]
            ]
          },
          {
            "t": "Docker for ML",
            "d": "Package the model, its dependencies, and its runtime into one image that behaves identically everywhere.",
            "lv": 1,
            "time": "~4h",
            "tip": "Multi-stage builds and slim base images matter more in ML than web: model images balloon past 10GB fast, and slow pulls become slow deploys.",
            "learn": [
              "Dockerfile anatomy for ML: base image, dependencies, model artifact, entrypoint",
              "Multi-stage builds to keep production images small",
              "GPU in containers: the NVIDIA container toolkit and --gpus flag",
              "Image tagging discipline so you can trace any deployment to its build"
            ],
            "do": [
              "Write a Dockerfile that serves a scikit-learn model with FastAPI",
              "Rebuild it as a multi-stage image and compare sizes",
              "Run the container with GPU access and hit the prediction endpoint"
            ],
            "tools": ["Docker", "NVIDIA Container Toolkit"],
            "res": [
              ["Docker docs", "https://docs.docker.com"]
            ]
          },
          {
            "t": "Data Versioning with DVC",
            "d": "Git for data: version datasets, track lineage, and make any experiment reproducible from a commit hash.",
            "lv": 2,
            "time": "~4h",
            "tip": "DVC without a remote is a fancy local folder. The value appears when the team shares one remote and any commit reproduces anyone's experiment.",
            "learn": [
              "How DVC stores data: content-addressed storage, .dvc pointer files in Git",
              "Remotes: S3, GCS, Azure Blob as the shared data backend",
              "DVC pipelines: dvc.yaml stages that rebuild data artifacts deterministically",
              "Experiments: dvc exp run to version full experiment runs"
            ],
            "do": [
              "Initialize DVC in a project and version a dataset with a local remote",
              "Define a dvc.yaml pipeline: raw data -> processed -> features",
              "Run an experiment, then reproduce it from the commit hash on a fresh clone"
            ],
            "tools": ["DVC"],
            "res": [
              ["DVC docs", "https://dvc.org"]
            ]
          },
          {
            "t": "SQL & Data Pipelines Basics",
            "d": "Models eat data through pipelines. Read and write the SQL that feeds them, and know the batch/streaming split.",
            "lv": 1,
            "time": "~6h",
            "tip": "Most model bugs are data bugs. Learning to query the training table directly catches more issues than any model debugger.",
            "learn": [
              "Core SQL: joins, aggregations, window functions for feature logic",
              "Batch vs streaming ingestion and when each fits ML",
              "Data lakes vs warehouses vs lakehouses in one paragraph each",
              "Idempotent pipelines: rerunning must not duplicate or corrupt data"
            ],
            "do": [
              "Write SQL that builds one training table from two raw tables",
              "Spot three data-quality issues by querying a real dataset",
              "Sketch a batch pipeline: source, transform, validated training table"
            ],
            "tools": ["PostgreSQL", "DuckDB", "dbt"],
            "res": [
              ["DuckDB docs", "https://duckdb.org/docs/stable/"]
            ]
          },
          {
            "t": "Reproducibility Hygiene",
            "d": "Seeds, pinned deps, and logged configs: the small habits that make any run rebuildable.",
            "lv": 1,
            "time": "~2h",
            "tip": "Set seeds everywhere, but know their limit: seeds control your code, not GPU nondeterminism. Log the hardware too.",
            "learn": [
              "Random seeds across Python, NumPy, and PyTorch, and where they leak",
              "Logging the full config: hyperparameters, data version, code commit, environment",
              "Deterministic vs reproducible: what each promise actually covers",
              "The one-page reproducibility checklist for every experiment"
            ],
            "do": [
              "Add seed-setting and config-logging to a training script",
              "Run the same script twice and diff the metrics",
              "Write your personal reproducibility checklist and pin it in your repo"
            ],
            "tools": ["PyTorch", "NumPy"],
            "res": [
              ["PyTorch docs", "https://pytorch.org/docs/stable/index.html"]
            ]
          }
        ]
      },
      {
        "t": "Experiment Tracking & Model Registry",
        "d": "Log every run, compare honestly, and promote winners through a registry with stages and approvals.",
        "lv": 2,
        "children": [
          {
            "t": "Experiment Tracking Concepts",
            "d": "Runs, params, metrics, artifacts: the vocabulary every tracking tool shares.",
            "lv": 2,
            "time": "~3h",
            "tip": "Log inputs, not just outputs. A metric without the params, data version, and code that produced it is a number without a story.",
            "learn": [
              "Runs, experiments, params, metrics, artifacts, and tags",
              "What to log: hyperparameters, data hashes, code version, environment, metrics over time",
              "Comparing runs fairly: same data split, same metric, same seed discipline",
              "From tracking to decisions: how teams pick the candidate to promote"
            ],
            "do": [
              "Design a logging schema for a training project: what gets logged per run",
              "Define naming conventions for experiments, runs, and tags",
              "Write the promotion criteria: when does a run become a release candidate"
            ],
            "tools": ["MLflow"],
            "res": [
              ["MLflow docs", "https://mlflow.org"]
            ]
          },
          {
            "t": "MLflow Tracking",
            "d": "The open-source standard: log runs, compare in the UI, and store models with their lineage.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use the tracking server with a real backend store from day one. File-store MLflow works solo and breaks the moment a teammate joins.",
            "learn": [
              "mlflow.start_run, log_param, log_metric, log_artifact in practice",
              "Tracking server, backend store, and artifact store architecture",
              "The MLflow UI: comparing runs, filtering, and finding the winner",
              "Autologging: what it captures and where it lies to you"
            ],
            "do": [
              "Instrument a training script with MLflow tracking",
              "Stand up a tracking server with a database backend and S3 artifact store",
              "Run a 10-run hyperparameter sweep and pick the winner from the UI"
            ],
            "tools": ["MLflow", "PostgreSQL"],
            "res": [
              ["MLflow docs", "https://mlflow.org"]
            ]
          },
          {
            "t": "Weights & Biases",
            "d": "The hosted alternative with best-in-class experiment visualization and collaboration.",
            "lv": 2,
            "time": "~3h",
            "tip": "W&B shines at comparing dozens of runs visually. If your team argues about 'which run was better', you need this or the MLflow UI habit.",
            "learn": [
              "wandb.init and logging: metrics, configs, and media",
              "Sweeps: hosted hyperparameter search without your own scheduler",
              "Artifacts: versioning datasets and models alongside runs",
              "Reports: turning run comparisons into shareable experiment narratives"
            ],
            "do": [
              "Log a training run to W&B with config and metric charts",
              "Launch a sweep over learning rate and batch size",
              "Build a report comparing the top 3 runs with notes on why the winner won"
            ],
            "tools": ["Weights & Biases"],
            "res": [
              ["Weights & Biases docs", "https://wandb.ai"]
            ]
          },
          {
            "t": "Config Management with Hydra",
            "d": "Compose experiment configs from clean YAML instead of argparse soup and hardcoded constants.",
            "lv": 2,
            "time": "~3h",
            "tip": "The win is composition: override any nested value from the command line without touching code, and every run's full config is saved automatically.",
            "learn": [
              "Config composition: defaults, groups, and command-line overrides",
              "Structured configs and why they beat dict-passing",
              "Multirun: launching sweeps from the CLI with --multirun",
              "Config store and versioning configs alongside code"
            ],
            "do": [
              "Convert an argparse training script to Hydra configs",
              "Run a sweep with --multirun over two hyperparameters",
              "Override a nested config value from the command line"
            ],
            "tools": ["Hydra", "OmegaConf"],
            "res": [
              ["Hydra docs", "https://hydra.cc"]
            ]
          },
          {
            "t": "The Model Registry",
            "d": "The registry is the official list of models: versions, stages, lineage, and who approved what.",
            "lv": 2,
            "time": "~3h",
            "tip": "Stages (Staging, Production, Archived) are a workflow, not labels. A model reaches Production through a gate: evals pass, a human approves, lineage is attached.",
            "learn": [
              "Model versions: immutable artifacts with lineage to run, data, and code",
              "Stage transitions: None -> Staging -> Production -> Archived",
              "Approval workflows: who signs off and what evidence they see",
              "Champion/challenger: running a candidate against production without replacing it"
            ],
            "do": [
              "Register a trained model in the MLflow Model Registry",
              "Transition it through Staging to Production with annotations",
              "Query the registry API for the current production model and its run lineage"
            ],
            "tools": ["MLflow Model Registry", "Weights & Biases Artifacts"],
            "res": [
              ["MLflow docs", "https://mlflow.org"]
            ]
          },
          {
            "t": "Model Cards & Documentation",
            "d": "Write the card that tells the next engineer what the model does, what it must not do, and how it was built.",
            "lv": 2,
            "time": "~2h",
            "tip": "Include the failure modes, not just the accuracy. 'Fails on low-light images' in the card saves a future incident.",
            "learn": [
              "Model card anatomy: intended use, data, metrics, limitations, ethical notes",
              "Lineage documentation: data sources, preprocessing, training config",
              "Keeping cards alive: generating them from registry metadata in CI",
              "Who reads cards: reviewers, auditors, and future you at 3am"
            ],
            "do": [
              "Write a full model card for a model you trained",
              "Auto-generate the metrics section from registry metadata",
              "Add a limitations section with at least three honest failure modes"
            ],
            "tools": ["MLflow"],
            "res": [
              ["Hugging Face Hub docs", "https://huggingface.co/docs/hub/en/model-cards"]
            ]
          }
        ]
      },
      {
        "t": "Pipelines & CI/CD for ML",
        "d": "Orchestrate the train-to-serve path and gate every change with tests that understand statistics.",
        "lv": 2,
        "children": [
          {
            "t": "ML Pipelines 101",
            "d": "A pipeline is the training path as code: ingest, validate, train, evaluate, register. Rerunnable by anyone.",
            "lv": 2,
            "time": "~3h",
            "tip": "If your pipeline only runs on your laptop, it is a script with ambition. Pipelines earn the name when CI runs them.",
            "learn": [
              "Pipeline anatomy: tasks, dependencies, retries, and scheduling",
              "DAG thinking: what runs in parallel, what waits, what fails the run",
              "Idempotency and why reruns must be safe",
              "Pipeline vs notebook: the handoff point where experiments become systems"
            ],
            "do": [
              "Map your manual training process into a DAG on paper",
              "Mark which steps are deterministic and which need retries",
              "Define the failure policy: which task failures block promotion"
            ],
            "tools": ["Airflow", "Kubeflow Pipelines"],
            "res": [
              ["Apache Airflow docs", "https://airflow.apache.org"]
            ]
          },
          {
            "t": "Airflow for ML Orchestration",
            "d": "Schedule and orchestrate data and training tasks with the industry-standard DAG runner.",
            "lv": 2,
            "time": "~5h",
            "tip": "Keep heavy compute out of Airflow workers. Airflow orchestrates; the training runs on proper compute via operators or Kubernetes.",
            "learn": [
              "DAGs, operators, sensors, and XComs in ML-shaped workflows",
              "Scheduling training and data pipelines: cron, datasets, and triggers",
              "Separating orchestration from compute: KubernetesPodOperator patterns",
              "Backfills and catchup: rerunning history safely"
            ],
            "do": [
              "Write a DAG: validate data -> train -> evaluate -> register",
              "Add a sensor that waits for fresh data before training",
              "Trigger a manual run and inspect task logs for a failed task"
            ],
            "tools": ["Apache Airflow", "Kubernetes"],
            "res": [
              ["Apache Airflow docs", "https://airflow.apache.org"]
            ]
          },
          {
            "t": "Kubeflow Pipelines",
            "d": "Kubernetes-native ML pipelines: containerized steps, artifact passing, and pipeline-as-code on k8s.",
            "lv": 3,
            "time": "~6h",
            "tip": "KFP pays off when steps need wildly different resources: CPU preprocessing, GPU training, lightweight eval. If everything fits one machine, Airflow is simpler.",
            "learn": [
              "Components and the @dsl.pipeline decorator: pipelines as Python code",
              "Artifact passing between containerized steps",
              "Caching and conditional execution to skip unchanged work",
              "Running and monitoring pipelines from the KFP UI"
            ],
            "do": [
              "Write a three-step pipeline: preprocess -> train -> evaluate",
              "Pass a model artifact between steps and inspect it in the UI",
              "Enable caching and rerun to see steps skip"
            ],
            "tools": ["Kubeflow Pipelines", "Kubernetes"],
            "res": [
              ["Kubeflow docs", "https://www.kubeflow.org"]
            ],
            "tag": "opt"
          },
          {
            "t": "GitHub Actions for ML CI",
            "d": "Lint, test, train a smoke model, and evaluate on every pull request.",
            "lv": 2,
            "time": "~4h",
            "tip": "CI for ML runs a small, fast training job as a smoke test. Full training belongs to the pipeline; CI proves the code is not broken.",
            "learn": [
              "Workflow anatomy: triggers, jobs, runners, and caching",
              "ML CI stages: lint -> unit tests -> smoke training -> eval gate",
              "CML: posting metrics and plots as PR comments",
              "Secrets and self-hosted runners for GPU-adjacent CI"
            ],
            "do": [
              "Write a workflow that lints and unit-tests training code on PRs",
              "Add a smoke-training job on a tiny dataset with a time budget",
              "Post the eval metrics as a comment on the PR"
            ],
            "tools": ["GitHub Actions", "CML"],
            "res": [
              ["GitHub Actions docs", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Data Validation Gates",
            "d": "Test the data like you test the code: schemas, ranges, and distributions before training starts.",
            "lv": 2,
            "time": "~3h",
            "tip": "A schema check that fails the pipeline on a renamed column has saved more models than any hyperparameter tuning ever will.",
            "learn": [
              "Schema validation: expected columns, types, and nullability",
              "Range and distribution checks: catching silent data corruption",
              "Great Expectations suites and checkpoints in pipelines",
              "Failing loudly: blocking training when data violates expectations"
            ],
            "do": [
              "Write an expectations suite for a training dataset",
              "Insert a corrupted column and watch the checkpoint fail",
              "Wire the validation as a gate before the training step"
            ],
            "tools": ["Great Expectations"],
            "res": [
              ["Great Expectations docs", "https://greatexpectations.io"]
            ]
          },
          {
            "t": "Continuous Training (CT)",
            "d": "Retrain on a trigger, not on vibes: schedules, data-volume thresholds, and performance decay.",
            "lv": 3,
            "time": "~4h",
            "tip": "CT without an eval gate is a machine that ships regressions on a schedule. The gate is the feature; the schedule is plumbing.",
            "learn": [
              "CT triggers: schedule-based, data-driven, and performance-driven",
              "The retraining pipeline: fresh data -> validate -> train -> evaluate -> gate -> register",
              "Eval gates: the new model must beat the champion to promote",
              "Cost control: not every drift signal deserves a full retrain"
            ],
            "do": [
              "Design CT triggers for a fraud model: what fires, how often, why",
              "Implement an eval gate comparing challenger vs champion",
              "Simulate a drift event and walk the full retrain path"
            ],
            "tools": ["Airflow", "MLflow"],
            "res": [
              ["Made With ML: MLOps course", "https://madewithml.com/"]
            ]
          }
        ]
      },
      {
        "t": "Feature Stores & Data Lineage",
        "d": "One definition of every feature, served identically in training and production. This kills train-serve skew.",
        "lv": 2,
        "children": [
          {
            "t": "Feature Stores 101",
            "d": "A feature store is the single source of truth for features: one definition, consistent offline and online.",
            "lv": 2,
            "time": "~3h",
            "tip": "Train-serve skew is the silent killer: the feature computed in training differs from the one computed at serving time. A feature store exists to make that impossible.",
            "learn": [
              "The problem: duplicated feature logic in training scripts and serving code",
              "Offline store for training, online store for low-latency serving",
              "Feature definitions as code: versioned, tested, reusable",
              "Point-in-time correctness: no future leakage in training data"
            ],
            "do": [
              "List three features in a past project and where each was computed",
              "Design a feature definition that works for both batch training and online serving",
              "Explain point-in-time joins to a teammate in two minutes"
            ],
            "tools": ["Feast", "Tecton"],
            "res": [
              ["Feast docs", "https://feast.dev"]
            ]
          },
          {
            "t": "Feast in Practice",
            "d": "Define, materialize, and serve features with the leading open-source feature store.",
            "lv": 3,
            "time": "~5h",
            "tip": "Start with file/parquet offline store and Redis online. You do not need the full enterprise stack to learn the pattern.",
            "learn": [
              "Feature views, entities, and data sources in Feast",
              "Materialization: moving features from offline to online store",
              "get_historical_features for training and get_online_features for serving",
              "Feature servers and pushing features in production"
            ],
            "do": [
              "Define a feature view over a parquet dataset",
              "Materialize features to a local online store",
              "Fetch training data and online features from the same definitions"
            ],
            "tools": ["Feast", "Redis", "Parquet"],
            "res": [
              ["Feast docs", "https://feast.dev"]
            ]
          },
          {
            "t": "Online vs Offline Features",
            "d": "Batch features for training, fresh features for serving: design for both from the start.",
            "lv": 2,
            "time": "~2h",
            "tip": "Ask for every feature: how fresh must it be at serving time? 'As fresh as possible' is not an answer; milliseconds vs hours decides the architecture.",
            "learn": [
              "Freshness requirements and how they drive architecture",
              "Batch, streaming, and on-demand feature computation",
              "The online store: key-value lookups at serving latency",
              "Fallbacks when the online store is stale or down"
            ],
            "do": [
              "Classify five features by required freshness",
              "Design the serving path for a 50ms-latency feature",
              "Define the fallback behavior when features are missing"
            ],
            "tools": ["Feast", "Redis", "Kafka"],
            "res": [
              ["Feast docs", "https://feast.dev"]
            ]
          },
          {
            "t": "Data Lineage & Cataloging",
            "d": "Know where every training row came from and which models it fed. Audits and debugging demand it.",
            "lv": 2,
            "time": "~3h",
            "tip": "Lineage is written during the pipeline, not reconstructed after. If you are drawing the lineage diagram from memory, it is already too late.",
            "learn": [
              "Lineage: data source -> transforms -> training set -> model version",
              "Data catalogs: searchable metadata for every dataset",
              "Why lineage matters: debugging, compliance, and impact analysis",
              "Logging lineage automatically in pipelines"
            ],
            "do": [
              "Trace one model back to its raw data sources on paper",
              "Document a dataset with owner, schema, and refresh cadence",
              "Design lineage logging for one pipeline stage"
            ],
            "tools": ["OpenLineage", "Marquez", "MLflow"],
            "res": [
              ["OpenLineage", "https://openlineage.io"]
            ]
          },
          {
            "t": "Feature Monitoring",
            "d": "Watch the inputs, not just the outputs: distribution shifts in features are the earliest warning.",
            "lv": 3,
            "time": "~3h",
            "tip": "Monitor features before you monitor predictions. A shifted input explains a degraded model; a degraded model without feature data is a mystery.",
            "learn": [
              "Feature distribution tracking over time",
              "Missing-value rates and schema violations as alerts",
              "Joining feature logs with prediction logs for root-cause analysis",
              "Feature health dashboards for on-call"
            ],
            "do": [
              "Log feature distributions from a serving endpoint for a week",
              "Set an alert on a sudden missing-value spike",
              "Build a dashboard joining feature drift to prediction changes"
            ],
            "tools": ["Evidently AI", "Prometheus", "Grafana"],
            "res": [
              ["Evidently AI docs", "https://www.evidentlyai.com"]
            ]
          }
        ]
      },
      {
        "t": "Serving Models in Production",
        "d": "Turn a model artifact into an API with latency budgets, scaling, and safe release strategies.",
        "lv": 2,
        "children": [
          {
            "t": "Model Serving Patterns",
            "d": "Embedded, service, or batch: pick the pattern that matches your latency and scale.",
            "lv": 2,
            "time": "~3h",
            "tip": "Most models do not need real-time serving. Batch inference on a schedule is simpler, cheaper, and embarrassingly underused.",
            "learn": [
              "Model-as-service: REST/gRPC endpoints, the default choice",
              "Embedded models: in-app or edge deployment",
              "Batch inference: scheduled scoring of whole datasets",
              "Streaming inference for event-driven predictions"
            ],
            "do": [
              "Classify three use cases by serving pattern",
              "Compare latency, cost, and complexity for each pattern",
              "Choose the pattern for a churn-scoring use case and justify it"
            ],
            "tools": ["FastAPI", "Triton Inference Server"],
            "res": [
              ["Triton Inference Server", "https://github.com/triton-inference-server/server"]
            ]
          },
          {
            "t": "FastAPI Model Serving",
            "d": "Wrap a model in a typed, validated, observable HTTP API: the workhorse of ML serving.",
            "lv": 2,
            "time": "~4h",
            "tip": "Validate inputs with Pydantic models. Half of serving incidents are malformed inputs, not model bugs.",
            "learn": [
              "Pydantic schemas for request/response validation",
              "Loading the model once at startup, not per request",
              "Health, readiness, and model-version endpoints",
              "Logging predictions with request IDs for later analysis"
            ],
            "do": [
              "Build a FastAPI app serving a scikit-learn model",
              "Add input validation and a /health endpoint",
              "Load-test it and record p95 latency"
            ],
            "tools": ["FastAPI", "Uvicorn", "Pydantic"],
            "res": [
              ["FastAPI docs", "https://fastapi.tiangolo.com"]
            ]
          },
          {
            "t": "Triton Inference Server",
            "d": "NVIDIA's production inference server: multi-framework models, dynamic batching, and GPU optimization.",
            "lv": 3,
            "time": "~5h",
            "tip": "Triton's dynamic batcher is the headline feature: it groups requests to saturate the GPU without you writing batching code.",
            "learn": [
              "Model repository layout and config.pbtxt",
              "Backends: TensorRT, ONNX, PyTorch, Python",
              "Dynamic batching and concurrent model execution",
              "Ensembling: chaining preprocessing, model, and postprocessing"
            ],
            "do": [
              "Serve an ONNX model from a Triton model repository",
              "Enable dynamic batching and measure throughput gain",
              "Build a two-model ensemble pipeline"
            ],
            "tools": ["Triton Inference Server", "ONNX Runtime"],
            "res": [
              ["Triton Inference Server", "https://github.com/triton-inference-server/server"]
            ]
          },
          {
            "t": "KServe on Kubernetes",
            "d": "Serverless model serving on k8s: scale-to-zero, canary rollouts, and multi-framework support.",
            "lv": 3,
            "time": "~5h",
            "tip": "KServe's InferenceService CRD is the whole pitch: declare the model and storage URI, and k8s handles deployment, scaling, and revisions.",
            "learn": [
              "InferenceService: the declarative API for model deployment",
              "Scale-to-zero and autoscaling on request metrics",
              "Canary rollouts with traffic splitting",
              "Explainers and transformers in the inference graph"
            ],
            "do": [
              "Deploy an InferenceService pointing at a model in object storage",
              "Trigger scale-to-zero and watch a cold start",
              "Run a canary rollout splitting 90/10 traffic"
            ],
            "tools": ["KServe", "Kubernetes", "Knative"],
            "res": [
              ["KServe", "https://github.com/kserve/kserve"]
            ],
            "tag": "opt"
          },
          {
            "t": "Shadow & Canary Deployments",
            "d": "Test models in production without risking production: mirror traffic, then ramp it.",
            "lv": 3,
            "time": "~4h",
            "tip": "Shadow first, canary second. Shadow catches crashes and latency; canary catches quality differences. Skipping shadow is how you learn about OOMs from users.",
            "learn": [
              "Shadow deployment: duplicate traffic, compare, never serve",
              "Canary: ramp real traffic 1% -> 10% -> 100% with quality gates",
              "A/B testing models: randomized assignment and metric comparison",
              "Instant rollback: the previous version stays warm"
            ],
            "do": [
              "Design a shadow setup: what gets logged, what gets compared",
              "Define canary promotion criteria with real metric thresholds",
              "Practice a rollback and time how long it takes"
            ],
            "tools": ["KServe", "Istio", "Flagger"],
            "res": [
              ["KServe", "https://github.com/kserve/kserve"]
            ]
          },
          {
            "t": "Batch Inference at Scale",
            "d": "Score millions of rows on a schedule with Spark or parallel workers: simple, cheap, reliable.",
            "lv": 2,
            "time": "~3h",
            "tip": "Batch jobs need the same monitoring as services: row counts in vs predictions out, and an alert when they diverge.",
            "learn": [
              "Batch architecture: partitioned input, parallel scoring, partitioned output",
              "Spark UDFs vs dedicated batch workers",
              "Idempotent writes: reruns must not double-score",
              "Monitoring batch jobs: throughput, failures, and output validation"
            ],
            "do": [
              "Write a batch scoring script with checkpointed output",
              "Parallelize it across partitions and measure speedup",
              "Add input/output row-count validation with alerts"
            ],
            "tools": ["Apache Spark", "Dask", "Ray"],
            "res": [
              ["Apache Spark docs", "https://spark.apache.org/docs/latest/"]
            ]
          }
        ]
      },
      {
        "t": "Monitoring & Observability",
        "d": "Watch the model's behavior, not just the server's: drift, quality decay, and the alerts that actually matter.",
        "lv": 3,
        "children": [
          {
            "t": "What ML Monitoring Catches",
            "d": "System metrics, data metrics, and model metrics: three layers, each catching what the others miss.",
            "lv": 2,
            "time": "~3h",
            "tip": "The alert that matters most is 'prediction distribution moved from the training baseline'. It fires before accuracy visibly drops, and you can compute it without labels.",
            "learn": [
              "System layer: latency, throughput, error rate, saturation",
              "Data layer: feature drift, missing values, schema violations",
              "Model layer: prediction distribution, confidence, delayed ground-truth accuracy",
              "Leading vs lagging indicators and why labels arrive too late"
            ],
            "do": [
              "List the metrics you would track for a deployed classifier",
              "Mark each as leading or lagging and note its data source",
              "Design the one dashboard you would check every morning"
            ],
            "tools": ["Prometheus", "Grafana", "Evidently AI"],
            "res": [
              ["Evidently AI docs", "https://www.evidentlyai.com"]
            ]
          },
          {
            "t": "Prometheus & Grafana for ML",
            "d": "Instrument serving code with ML-aware metrics and build dashboards the on-call engineer trusts.",
            "lv": 3,
            "time": "~4h",
            "tip": "Histogram, not average, for prediction latency. Averages hide the slow 5% that your users actually feel.",
            "learn": [
              "Custom metrics: prediction counters, latency histograms, confidence gauges",
              "Labels that matter: model version, endpoint, and data segment",
              "Grafana dashboards: combining system and model panels",
              "Alertmanager routing for ML-specific alerts"
            ],
            "do": [
              "Instrument a FastAPI service with Prometheus client metrics",
              "Build a Grafana dashboard with latency, traffic, and prediction mix",
              "Write an alert rule for prediction-distribution shift"
            ],
            "tools": ["Prometheus", "Grafana"],
            "res": [
              ["Prometheus docs", "https://prometheus.io/docs/introduction/overview/"]
            ]
          },
          {
            "t": "Data Drift Detection",
            "d": "Detect when production inputs stop looking like training data: PSI, KS tests, and embedding drift.",
            "lv": 3,
            "time": "~4h",
            "tip": "Not every drift needs action. Set thresholds from historical variation first, or every Monday morning becomes an incident.",
            "learn": [
              "Data drift vs concept drift: inputs changed vs the relationship changed",
              "Statistical tests: PSI, KS, chi-square, and when each applies",
              "Reference vs current windows: how to slice time for comparison",
              "Embedding drift for unstructured data"
            ],
            "do": [
              "Compute PSI between a training sample and a shifted sample",
              "Build a drift report comparing two time windows",
              "Set alert thresholds based on historical drift, not gut feel"
            ],
            "tools": ["Evidently AI", "NannyML"],
            "res": [
              ["Evidently AI docs", "https://www.evidentlyai.com"]
            ]
          },
          {
            "t": "Concept Drift & Prediction Drift",
            "d": "The harder drifts: when the world changes the meaning of the data, and when outputs shift on their own.",
            "lv": 3,
            "time": "~3h",
            "tip": "Prediction drift without input drift means the model changed or the serving path did. That narrows the investigation enormously.",
            "learn": [
              "Concept drift: P(y|X) changed, the same inputs now mean different outcomes",
              "Prediction drift: output distribution moved, inputs look the same",
              "Delayed labels: estimating true accuracy when ground truth arrives late",
              "Response playbook: investigate, rollback, or retrain"
            ],
            "do": [
              "Simulate concept drift by flipping labels after a date and detect it",
              "Build a prediction-drift monitor on output distributions",
              "Write the runbook: drift alert fires at 3am, what are the first five steps"
            ],
            "tools": ["Evidently AI"],
            "res": [
              ["Evidently AI docs", "https://www.evidentlyai.com"]
            ]
          },
          {
            "t": "Evidently AI",
            "d": "Open-source ML monitoring: drift reports, test suites, and a monitoring service for production.",
            "lv": 3,
            "time": "~4h",
            "tip": "Start with Evidently's HTML reports in a notebook before the monitoring service. The reports teach you what to watch; the service automates it.",
            "learn": [
              "Reports: data drift, data quality, and model quality in one HTML",
              "Test suites: turning checks into pass/fail CI gates",
              "The monitoring service: scheduled reports over production data",
              "Custom metrics and test conditions"
            ],
            "do": [
              "Generate a data-drift report between train and a new batch",
              "Write a test suite that fails CI on critical drift",
              "Deploy the monitoring service over a simulated production stream"
            ],
            "tools": ["Evidently AI"],
            "res": [
              ["Evidently AI docs", "https://www.evidentlyai.com"]
            ]
          },
          {
            "t": "Alerting & Runbooks",
            "d": "Alerts that page a human must be actionable. Write the runbook before the alert fires.",
            "lv": 3,
            "time": "~3h",
            "tip": "Every alert needs an owner, a severity, and a first action. An alert without a runbook is just anxiety with a pager.",
            "learn": [
              "Alert design: symptoms vs causes, and paging only on symptoms",
              "Runbook anatomy: diagnose, mitigate, escalate, postmortem",
              "SLOs for ML: prediction latency, availability, and quality budgets",
              "On-call for ML: who owns the model vs who owns the infra"
            ],
            "do": [
              "Write runbooks for three ML alerts: drift, latency spike, error rate",
              "Define SLOs for a prediction endpoint",
              "Run a game day: simulate a drift alert and walk the runbook"
            ],
            "tools": ["PagerDuty", "Grafana OnCall"],
            "res": [
              ["Grafana OnCall", "https://grafana.com/products/cloud/oncall/"]
            ]
          }
        ]
      },
      {
        "t": "Operating at Scale & LLMOps",
        "d": "Kubernetes, IaC, GPU economics, and the new layer: operating LLMs in production.",
        "lv": 3,
        "children": [
          {
            "t": "Kubernetes for ML Workloads",
            "d": "Pods, GPUs, and autoscaling for training jobs and serving deployments on k8s.",
            "lv": 3,
            "time": "~6h",
            "tip": "Learn resource requests/limits and node selectors before anything fancy. Most k8s ML pain is a GPU job landing on a CPU node.",
            "learn": [
              "Pods, Deployments, and Jobs for training vs serving",
              "GPU scheduling: nvidia.com/gpu resources and node pools",
              "HPA and KEDA for scaling on custom ML metrics",
              "ConfigMaps, Secrets, and mounting model artifacts"
            ],
            "do": [
              "Deploy a model-serving Deployment with GPU resources",
              "Set up HPA on request rate",
              "Run a distributed training Job and inspect pod logs"
            ],
            "tools": ["Kubernetes", "KEDA", "NVIDIA GPU Operator"],
            "res": [
              ["Kubernetes docs", "https://kubernetes.io/docs/home/"]
            ]
          },
          {
            "t": "Terraform for ML Infra",
            "d": "Define GPU node pools, storage, and registries as code so environments are rebuildable.",
            "lv": 3,
            "time": "~4h",
            "tip": "One Terraform workspace per environment, remote state from day one. Local state files are how teams lose infrastructure.",
            "learn": [
              "Providers, resources, and modules for ML infrastructure",
              "GPU node pools, object storage, and container registries as code",
              "Remote state and locking for team workflows",
              "Environment parity: dev, staging, and prod from the same modules"
            ],
            "do": [
              "Write Terraform for a GPU node pool and a model artifact bucket",
              "Plan and apply to a dev environment",
              "Refactor repeated config into a reusable module"
            ],
            "tools": ["Terraform", "OpenTofu"],
            "res": [
              ["Terraform docs", "https://www.terraform.io"]
            ]
          },
          {
            "t": "GPU Scheduling & Cost Control",
            "d": "GPUs are the budget line item. Schedule them well and shut them down aggressively.",
            "lv": 3,
            "time": "~4h",
            "tip": "Idle GPUs are the most common ML waste. Autoscale training node pools to zero and alert on GPU utilization below 30%.",
            "learn": [
              "GPU sharing: time-slicing, MPS, and multi-instance GPUs",
              "Spot/preemptible instances for fault-tolerant training",
              "Cost attribution: tagging spend by team, model, and experiment",
              "Rightsizing: matching GPU type to the actual workload"
            ],
            "do": [
              "Compare hourly costs across GPU types for your workload",
              "Set up a spot-instance training job with checkpointing",
              "Build a cost dashboard tagged by project"
            ],
            "tools": ["Kubernetes", "Karpenter"],
            "res": [
              ["AWS EC2 GPU instances", "https://aws.amazon.com/ec2/instance-types/"]
            ]
          },
          {
            "t": "LLM Observability",
            "d": "Trace prompts, completions, costs, and quality for LLM features: the new monitoring layer.",
            "lv": 3,
            "time": "~4h",
            "tip": "Log the full prompt template version with every trace. 'The model got worse' is usually 'someone edited the prompt' and the trace proves it.",
            "learn": [
              "Traces: prompt, context, completion, latency, and token counts per call",
              "Cost tracking per feature, user, and model",
              "Quality signals: thumbs up/down, implicit feedback, eval scores",
              "Langfuse or LangSmith as the observability backend"
            ],
            "do": [
              "Instrument an LLM feature with Langfuse tracing",
              "Build a dashboard of cost per user and latency per model",
              "Correlate a quality drop with a prompt version change"
            ],
            "tools": ["Langfuse", "LangSmith", "OpenTelemetry"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          },
          {
            "t": "Prompt & Model Versioning for LLMs",
            "d": "Prompts are code now: version them, test them, and roll them back like any deployment.",
            "lv": 3,
            "time": "~3h",
            "tip": "Pin the model version in production. An unpinned model updates under you and your evals become meaningless.",
            "learn": [
              "Prompt versioning: templates in Git, rendered with variables",
              "Model pinning and staged upgrades to new model versions",
              "Eval-driven prompt changes: no prompt ships without eval scores",
              "Fallback chains when the primary model fails"
            ],
            "do": [
              "Move prompts from inline strings to versioned template files",
              "Set up an eval that runs on every prompt change",
              "Implement a fallback chain: primary -> cheaper model -> cached response"
            ],
            "tools": ["Langfuse", "Git"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          },
          {
            "t": "Capstone: End-to-End ML Platform",
            "d": "Build the whole loop: tracked experiments, versioned data, CI/CD, deployed API, drift monitoring, and a runbook.",
            "lv": 3,
            "time": "~2w",
            "tip": "The README architecture diagram is the deliverable hiring managers read first. Make it honest: show what you automated and what you deliberately left manual.",
            "learn": [
              "Integrating tracking, registry, pipelines, serving, and monitoring",
              "Writing the architecture decision record for your stack choices",
              "Operating the system for a week: responding to its alerts",
              "Presenting the system: what it does, what it costs, what breaks"
            ],
            "do": [
              "Train a model with MLflow tracking and DVC-versioned data",
              "Serve it behind FastAPI in Docker with GitHub Actions CI",
              "Deploy with Prometheus metrics and Evidently drift reports",
              "Write the README with an architecture diagram and a runbook"
            ],
            "tools": ["MLflow", "DVC", "FastAPI", "Docker", "GitHub Actions", "Prometheus", "Evidently AI"],
            "res": [
              ["Made With ML: MLOps course", "https://madewithml.com/"],
              ["Awesome MLOps", "https://github.com/visenger/awesome-mlops"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
