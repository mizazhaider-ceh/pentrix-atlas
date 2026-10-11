/* Atlas roadmap data: Terraform (terraform) */
ROADMAPS.push({
  "id": "terraform",
  "title": "Terraform",
  "icon": "🧰",
  "color": "#844fba",
  "desc": "Infrastructure as code done right: HCL, state management, modules, testing, and production Terraform workflows.",
  "kind": "skill",
  "root": {
    "t": "Terraform from Zero to Production",
    "d": "The complete path to managing real infrastructure as versioned, reviewable code.",
    "children": [
      {
        "t": "Infrastructure as Code Foundations",
        "d": "The mindset shift: infrastructure described, versioned, and reviewed like software.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Infrastructure as Code",
            "d": "Why clicking in consoles does not scale and code does.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "IaC turns infrastructure into versioned, reviewable, repeatable definitions",
              "Declarative tools describe the end state; the tool figures out the steps",
              "Drift (reality diverging from code) is the central enemy IaC exists to fight"
            ],
            "do": [
              "List every manual console click your last project needed, then imagine onboarding with zero docs",
              "Compare declarative vs imperative IaC with one concrete example each",
              "Explain drift to a colleague using a real story of a hand-edited security group"
            ],
            "tools": ["terraform"],
            "res": [["What is IaC", "https://developer.hashicorp.com/terraform"]],
            "tip": "IaC pays off the second time you build the environment. The first time, it feels slower than clicking. That feeling lies."
          },
          {
            "t": "What Is Terraform",
            "d": "How Terraform plans, applies, and tracks the real world through state.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Terraform compares desired config against state and reality, then builds an execution plan",
              "Providers are plugins that translate Terraform's graph into cloud API calls",
              "The state file is the source of truth mapping your code to real resource IDs"
            ],
            "do": [
              "Install Terraform and run terraform version to confirm the setup",
              "Read the plan output of a sample config and explain every symbol (+, -, ~)",
              "Draw the loop: config, state, real world, and where drift hides"
            ],
            "tools": ["terraform"],
            "res": [["Terraform docs", "https://developer.hashicorp.com/terraform/docs"]],
            "tip": "Terraform never guesses. If the plan surprises you, read it again before typing yes. The plan is the whole point."
          },
          {
            "t": "Terraform vs OpenTofu in 2026",
            "d": "The fork, the licenses, and which tool to learn today.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "HashiCorp relicensed Terraform under BSL in 2023; OpenTofu is the Linux Foundation's MPL-2.0 fork",
              "Both read the same HCL and share providers and state format",
              "OpenTofu adds native state encryption and provider for_each; Terraform keeps HCP and Sentinel integration"
            ],
            "do": [
              "Install both CLIs and run the same config with each; compare the experience",
              "Read both licenses' practical implications for your employer's use case",
              "Decide which one your team standardizes on and write down the reasons"
            ],
            "tools": ["terraform", "opentofu"],
            "res": [["OpenTofu", "https://opentofu.org"]],
            "tip": "Learn the concepts once; they transfer completely. The CLI differences are trivia compared to the IaC mindset."
          },
          {
            "t": "Your First Apply",
            "d": "Install, init, plan, apply: the core workflow on a real cloud resource.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "terraform init downloads providers and sets up the working directory",
              "terraform plan previews changes; terraform apply executes them after confirmation",
              "terraform destroy tears everything down; always plan a destroy before running it"
            ],
            "do": [
              "Write a config that creates one small resource (a bucket or a DNS record)",
              "Run init, plan, apply, then inspect the created resource in the cloud console",
              "Run plan on the destroy and then destroy it; confirm the bill stops"
            ],
            "tools": ["terraform"],
            "res": [["Terraform tutorials", "https://developer.hashicorp.com/terraform/tutorials"]],
            "tip": "Your first apply should be something cheap and deletable. Learning destroy on a production database is a career event."
          },
          {
            "t": "Providers and the Registry",
            "d": "The plugins that give Terraform its reach: AWS, Azure, GCP, and thousands more.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Providers translate HCL into API calls; each has its own versioning and changelog",
              "The required_providers block pins provider versions so builds stay reproducible",
              "The registry hosts official, partner, and community providers with documentation"
            ],
            "do": [
              "Pin a provider version in required_providers and run terraform init",
              "Browse the registry docs for one resource and map each argument to a console field",
              "Upgrade a provider minor version, read the changelog first, then review the plan"
            ],
            "tools": ["terraform"],
            "res": [["Terraform Registry", "https://registry.terraform.io"]],
            "tip": "Unpinned providers are a time bomb. A major version bump can rename arguments and rewrite your plan overnight."
          },
          {
            "t": "Resource Block Anatomy",
            "d": "Reading and writing the fundamental unit: type, name, arguments, and attributes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "resource \"aws_instance\" \"web\" declares one managed object of a provider's type",
              "Arguments configure it; attributes (like .id or .public_ip) expose what the provider returns",
              "References between resources build the dependency graph Terraform orders automatically"
            ],
            "do": [
              "Write two resources where the second references the first's attribute",
              "Run terraform graph and trace the dependency edge you created",
              "Break a reference on purpose and read the error until the message makes sense"
            ],
            "tools": ["terraform"],
            "res": [["Resources", "https://developer.hashicorp.com/terraform/language/resources"]],
            "tip": "Implicit references beat explicit depends_on almost every time. If you reference the attribute, Terraform already knows the order."
          }
        ]
      },
      {
        "t": "HCL and the Daily Workflow",
        "d": "The language itself: variables, locals, outputs, and the commands you run daily.",
        "lv": 1,
        "children": [
          {
            "t": "HCL Basics",
            "d": "Blocks, arguments, and expressions: the grammar of infrastructure code.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "HCL is block-structured: blocks contain arguments (key = value) and nested blocks",
              "Expressions support conditionals, for loops, string templates, and rich functions",
              "terraform console lets you experiment with expressions interactively"
            ],
            "do": [
              "Rewrite a flat config using for expressions and locals to remove duplication",
              "Experiment in terraform console with format(), join(), and conditional expressions",
              "Convert a hardcoded config to one driven entirely by a map variable"
            ],
            "tools": ["terraform"],
            "res": [["HCL syntax", "https://developer.hashicorp.com/terraform/language/syntax/configuration"]],
            "tip": "Clever HCL is a liability. If the next person needs ten minutes to parse one expression, simplify it."
          },
          {
            "t": "Input Variables and Types",
            "d": "Parameterizing configs: types, defaults, and validation that catch mistakes early.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Variables have types (string, number, bool, list, map, object) that Terraform enforces",
              "Validation blocks reject bad input with custom error messages before any API call",
              "tfvars files separate values from code; never commit secrets into them"
            ],
            "do": [
              "Define an object variable for a server spec with type constraints and validation",
              "Feed it bad input and read the validation error you wrote",
              "Split values into dev.tfvars and prod.tfvars for the same config"
            ],
            "tools": ["terraform"],
            "res": [["Input variables", "https://developer.hashicorp.com/terraform/language/values/variables"]],
            "tip": "Validate at the boundary. A validation block on a variable is worth ten apologetic incident reviews."
          },
          {
            "t": "Locals and Outputs",
            "d": "Derived values inside your config and the values you expose to the outside.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Locals compute derived values once and reuse them; they are for internal DRYness",
              "Outputs expose values to users, other configs, and automation",
              "Sensitive outputs are redacted in CLI output but still stored in state as plaintext"
            ],
            "do": [
              "Replace three repeated naming expressions with one locals block",
              "Output a database endpoint and consume it from a second config via remote state",
              "Mark a password output sensitive and verify where the value still appears"
            ],
            "tools": ["terraform"],
            "res": [["Outputs", "https://developer.hashicorp.com/terraform/language/values/outputs"]],
            "tip": "Sensitive outputs hide values from the terminal, not from state. State encryption is the real protection."
          },
          {
            "t": "Environment Variables and Precedence",
            "d": "TF_VAR_, .tfvars files, and the full order Terraform resolves values in.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "TF_VAR_name environment variables inject values without touching files",
              "Precedence: -var flags beat tfvars files beat environment variables beat defaults",
              "CI systems prefer environment variables; humans prefer tfvars files"
            ],
            "do": [
              "Set the same variable three ways and prove which one wins",
              "Wire TF_VAR_ values in a CI pipeline for non-secret config",
              "Document your team's precedence convention in the repo README"
            ],
            "tools": ["terraform"],
            "res": [["Variable precedence", "https://developer.hashicorp.com/terraform/language/values/variables"]],
            "tip": "Secrets belong in a secret manager or encrypted state, never in TF_VAR_ on a shared build agent's environment."
          },
          {
            "t": "fmt, validate, and tflint",
            "d": "Hygiene before apply: formatting, syntax checks, and lint rules.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "terraform fmt enforces canonical style; run it in CI so style is never debated",
              "terraform validate checks syntax and internal consistency without touching providers",
              "tflint adds provider-aware rules: deprecated syntax, naming, undocumented variables"
            ],
            "do": [
              "Write deliberately ugly HCL and let fmt fix it; add a fmt check to CI",
              "Catch a type error with validate before it reaches a plan",
              "Enable tflint rules for your provider and fix every warning in a sample repo"
            ],
            "tools": ["terraform", "tflint"],
            "res": [["tflint", "https://github.com/terraform-linters/tflint"]],
            "tip": "Lint in CI, not in your head. Humans are bad at consistency; machines are perfect at it."
          },
          {
            "t": "plan, apply, and destroy Discipline",
            "d": "The ritual that keeps infrastructure changes boring and safe.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Save plans to files (plan -out) so the reviewed plan is the executed plan",
              "Destructive changes deserve a second pair of eyes; use plan output in pull requests",
              "Targeted applies (-target) are for emergencies and break the full-graph guarantee"
            ],
            "do": [
              "Generate a saved plan, review it, then apply exactly that file",
              "Post plan output as a PR comment using a CI workflow",
              "Practice recovering from a half-applied change by re-running apply, not by hand-fixing"
            ],
            "tools": ["terraform"],
            "res": [["terraform plan", "https://developer.hashicorp.com/terraform/cli/commands/plan"]],
            "tip": "Never type yes to a plan you have not read. Skimming plans is how databases get replaced."
          }
        ]
      },
      {
        "t": "State Management",
        "d": "The heart of Terraform: remote state, locking, imports, and surgery.",
        "lv": 2,
        "children": [
          {
            "t": "What State Really Is",
            "d": "The mapping between your code and reality, and why it must be protected.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "State records every managed resource's real ID, attributes, and dependencies",
              "Losing state means Terraform forgets your infrastructure exists; it will try to recreate it",
              "State contains secrets in plaintext, which dictates every storage decision"
            ],
            "do": [
              "Inspect a state file and trace one resource from config to state to cloud console",
              "Simulate state loss on a toy project and watch apply try to recreate everything",
              "Explain why state is a security boundary, not just a cache"
            ],
            "tools": ["terraform"],
            "res": [["State purpose", "https://developer.hashicorp.com/terraform/language/state/purpose"]],
            "tip": "Treat the state file like a production database: backed up, access-controlled, and never emailed to anyone."
          },
          {
            "t": "Remote State Backends",
            "d": "S3, GCS, Terraform Cloud: shared, versioned, encrypted state for teams.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Remote backends store state centrally so the whole team shares one source of truth",
              "Versioning on the bucket gives you a rewind button for corrupted state",
              "Encryption at rest plus strict IAM turns the state bucket into a vault"
            ],
            "do": [
              "Migrate a local state to an S3 backend with versioning and encryption enabled",
              "Restrict the bucket policy to your team's CI role and your own user",
              "Restore a previous state version from bucket versioning after a bad apply"
            ],
            "tools": ["terraform", "aws"],
            "res": [["Backends", "https://developer.hashicorp.com/terraform/language/backend"]],
            "tip": "Enable bucket versioning on day one. The day you need it is the day you discover you never turned it on."
          },
          {
            "t": "State Locking",
            "d": "Preventing two applies from corrupting state at the same time.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Backends like S3 use DynamoDB (or native locking) to serialize state writes",
              "A stuck lock usually means a crashed apply; force-unlock only after verifying no one is running",
              "CI pipelines must share the same locking configuration as local runs"
            ],
            "do": [
              "Trigger two concurrent applies and watch the second one wait on the lock",
              "Simulate a crashed apply, inspect the stale lock, and release it safely",
              "Document your team's lock-timeout and force-unlock policy"
            ],
            "tools": ["terraform"],
            "res": [["State locking", "https://developer.hashicorp.com/terraform/language/state/locking"]],
            "tip": "force-unlock is a loaded gun. Confirm no apply is running anywhere before you pull it."
          },
          {
            "t": "Importing Existing Resources",
            "d": "Bringing click-built infrastructure under Terraform management without recreation.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Import blocks (or terraform import) adopt existing resources into state",
              "Import only maps identity; you still write the config to match reality",
              "Plan after import to converge the config with the real resource's attributes"
            ],
            "do": [
              "Create a resource in the console, then import it with an import block",
              "Write the matching config and iterate on plan until it shows no changes",
              "Document the import runbook for the next legacy resource your team adopts"
            ],
            "tools": ["terraform"],
            "res": [["Import", "https://developer.hashicorp.com/terraform/language/import"]],
            "tip": "Import first, write config second, plan third. Skipping the plan step is how imports silently drift."
          },
          {
            "t": "Splitting State Files",
            "d": "Blast-radius control: small states per team, environment, or layer.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "One giant state means one giant blast radius and slow plans",
              "Split by lifecycle and ownership: networking, data, apps, per environment",
              "terraform state mv moves resources between states without recreation"
            ],
            "do": [
              "Split a monolithic toy state into network and app states",
              "Share outputs between states with terraform_remote_state or data sources",
              "Measure plan time before and after the split"
            ],
            "tools": ["terraform"],
            "res": [["State mv", "https://developer.hashicorp.com/terraform/cli/commands/state/mv"]],
            "tip": "Split along team and blast-radius boundaries, not along resource-type aesthetics. Ownership drives the split."
          },
          {
            "t": "State Surgery: rm, mv, replace",
            "d": "Fixing the real world when it diverges: tainting, moving, and removing from state.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "terraform state rm stops managing a resource without deleting it",
              "terraform state mv renames or relocates resources, e.g. into modules",
              "-replace forces recreation of a resource the plan would otherwise leave alone"
            ],
            "do": [
              "Refactor a resource into a module and use state mv to avoid recreation",
              "Remove a manually-deleted resource from state, then re-import it cleanly",
              "Force-replace a misbehaving VM and confirm only it is recreated"
            ],
            "tools": ["terraform"],
            "res": [["State commands", "https://developer.hashicorp.com/terraform/cli/commands/state"]],
            "tip": "Back up state before surgery. Every state command is reversible only if you kept a copy."
          }
        ]
      },
      {
        "t": "Expressions and Meta-Arguments",
        "d": "count, for_each, lifecycle, and data sources: Terraform's power tools.",
        "lv": 2,
        "children": [
          {
            "t": "count vs for_each",
            "d": "Creating many of something: indexed lists vs keyed maps.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "count creates N copies addressed by index; removing the middle one shifts everything",
              "for_each creates instances keyed by map keys or set values; removals are surgical",
              "for_each is almost always the right choice for resources with identity"
            ],
            "do": [
              "Build three subnets with count, delete the middle one, and watch the churn",
              "Rebuild the same with for_each keyed by name and delete one cleanly",
              "Convert an existing count-based resource to for_each with state mv"
            ],
            "tools": ["terraform"],
            "res": [["for_each", "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each"]],
            "tip": "count is for identical clones; for_each is for named things. Servers have names. Use for_each."
          },
          {
            "t": "depends_on and lifecycle",
            "d": "Ordering guarantees and replacement behavior when the defaults are not enough.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "depends_on adds explicit ordering for hidden dependencies Terraform cannot see",
              "create_before_destroy avoids downtime for replaceable resources like launch configs",
              "prevent_destroy guards critical resources; ignore_changes tames provider noise"
            ],
            "do": [
              "Add create_before_destroy to a resource and watch the replacement order flip",
              "Use prevent_destroy on a database and try to destroy it; read the error",
              "Apply ignore_changes to a tag that external tooling keeps modifying"
            ],
            "tools": ["terraform"],
            "res": [["lifecycle", "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle"]],
            "tip": "ignore_changes is a truce with reality, not a fix. Document why each one exists or it becomes mystery config."
          },
          {
            "t": "Data Sources",
            "d": "Reading the world without managing it: AMIs, zones, existing resources.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Data sources query providers at plan time and expose read-only attributes",
              "Use them for latest AMIs, availability zones, existing VPCs, and secrets from managers",
              "Data sources still create plan-time dependencies, so overuse slows plans"
            ],
            "do": [
              "Look up the latest Ubuntu AMI with a data source instead of hardcoding it",
              "Read an existing VPC's subnets and place instances into them",
              "Fetch a secret from your secret manager at plan time without storing it in config"
            ],
            "tools": ["terraform"],
            "res": [["Data sources", "https://developer.hashicorp.com/terraform/language/data-sources"]],
            "tip": "Data sources that change every run (like latest AMI) cause perpetual diffs. Filter tightly or pin the result."
          },
          {
            "t": "Dynamic Blocks and Functions",
            "d": "Generating repeated nested blocks and transforming data like a pro.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Dynamic blocks generate repeated nested blocks (ingress rules, tags) from collections",
              "Built-in functions (merge, flatten, distinct, jsonencode) reshape data without external tools",
              "Complex expressions belong in locals with names, not inline in resources"
            ],
            "do": [
              "Generate security group rules from a list of port objects with a dynamic block",
              "Use for expressions plus functions to build a tag map from variables",
              "Refactor a 40-line inline expression into named locals and compare readability"
            ],
            "tools": ["terraform"],
            "res": [["Functions", "https://developer.hashicorp.com/terraform/language/functions"]],
            "tip": "If a dynamic block needs a comment to explain itself, extract it into a module with a clear interface."
          },
          {
            "t": "Provisioners: When (Not) to Use Them",
            "d": "The last-resort escape hatch for imperative steps, and why to avoid it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Provisioners run scripts on creation or destruction; they are imperative in a declarative tool",
              "local-exec, remote-exec, and file provisioners cover the common escape hatches",
              "Prefer user_data, cloud-init, or configuration management; provisioners do not re-run on drift"
            ],
            "do": [
              "Use local-exec to run a post-apply script and observe it never re-runs",
              "Replace a remote-exec bootstrap with cloud-init user_data",
              "Write the team rule for when provisioners are allowed, with examples"
            ],
            "tools": ["terraform"],
            "res": [["Provisioners", "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax"]],
            "tip": "Provisioners are technical debt with a timer. Every one should have a ticket to replace it.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Modules",
        "d": "Reusable, versioned, composable infrastructure packages.",
        "lv": 2,
        "children": [
          {
            "t": "Module Anatomy",
            "d": "Inputs, resources, outputs: the contract every module presents.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "A module is a directory with .tf files; variables are inputs, outputs are the return values",
              "The root module is your working directory; child modules are called with module blocks",
              "Good modules hide complexity behind few, well-documented variables"
            ],
            "do": [
              "Extract a repeated VPC-plus-subnets pattern into a local module",
              "Call it twice with different inputs and verify both environments work",
              "Write a README documenting every variable, output, and assumption"
            ],
            "tools": ["terraform"],
            "res": [["Modules", "https://developer.hashicorp.com/terraform/language/modules"]],
            "tip": "A module with 40 variables is not reusable, it is a maze. Fewer, opinionated inputs beat total flexibility."
          },
          {
            "t": "Local vs Registry Modules",
            "d": "When to write your own and when to adopt battle-tested community modules.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Local modules suit org-specific patterns; registry modules suit commodity infrastructure",
              "Pin registry modules to versions exactly like providers",
              "Audit community modules: read the code before trusting it with your cloud account"
            ],
            "do": [
              "Consume a registry VPC module pinned to an exact version",
              "Read its source end to end and list three assumptions it makes",
              "Decide for your org which modules are bought (registry) vs built (local)"
            ],
            "tools": ["terraform"],
            "res": [["Module registry", "https://registry.terraform.io/browse/modules"]],
            "tip": "Registry modules encode someone else's opinions. Adopt them for undifferentiated plumbing, not for your crown jewels."
          },
          {
            "t": "Composing Modules",
            "d": "Wiring modules together: passing outputs as inputs across boundaries.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Module outputs feed other modules' inputs, building the dependency graph",
              "Keep interfaces narrow: pass IDs and ARNs, not whole resource objects",
              "Version your internal modules with git tags or a private registry"
            ],
            "do": [
              "Compose network, database, and app modules into one environment",
              "Trace a value from a variable through two modules to a resource argument",
              "Tag a module release and upgrade one environment to it independently"
            ],
            "tools": ["terraform"],
            "res": [["Module composition", "https://developer.hashicorp.com/terraform/language/modules/develop/composition"]],
            "tip": "Deep module nesting (modules calling modules calling modules) makes plans unreadable. Two levels is plenty."
          },
          {
            "t": "Module Best Practices",
            "d": "The conventions that make modules maintainable across teams and years.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Standard layout: main.tf, variables.tf, outputs.tf, versions.tf, README.md",
              "Semantic versioning with changelogs; breaking changes get major bumps",
              "Examples directories double as documentation and as test fixtures"
            ],
            "do": [
              "Restructure a messy module into the standard layout",
              "Write a changelog entry for a breaking variable rename",
              "Add an examples/ directory that actually applies cleanly"
            ],
            "tools": ["terraform", "terraform-docs"],
            "res": [["Module best practices", "https://developer.hashicorp.com/terraform/language/modules/develop"]],
            "tip": "Generate variable docs with terraform-docs in CI. Hand-written docs rot; generated docs cannot."
          },
          {
            "t": "Terragrunt",
            "d": "DRY wrappers for multi-environment, multi-module Terraform at scale.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Terragrunt keeps backend and provider config DRY across many root modules",
              "It orchestrates dependencies between stacks with explicit dependency blocks",
              "The cost is another tool, another DSL, and another thing to debug"
            ],
            "do": [
              "Convert three copy-pasted environment roots to one Terragrunt layout",
              "Wire a dependency so the app stack reads the network stack's outputs",
              "Run terragrunt run-all plan and compare it to manual per-directory plans"
            ],
            "tools": ["terragrunt", "terraform"],
            "res": [["Terragrunt", "https://terragrunt.gruntwork.io"]],
            "tip": "Terragrunt solves real pain at scale and adds real complexity. Below ~10 stacks, plain Terraform wins.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Testing and CI/CD",
        "d": "Proving infrastructure code works before it touches production.",
        "lv": 3,
        "children": [
          {
            "t": "Testing with terraform test",
            "d": "Native unit and integration tests for your modules.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "terraform test runs .tftest.hcl files with run blocks, variables, and assertions",
              "Mock providers let you unit-test logic without creating real infrastructure",
              "Test the contract (outputs for given inputs), not the provider's behavior"
            ],
            "do": [
              "Write a test asserting your network module outputs the right subnet count",
              "Add a mock provider test that runs with no cloud credentials",
              "Break the module on purpose and watch the test catch it"
            ],
            "tools": ["terraform"],
            "res": [["terraform test", "https://developer.hashicorp.com/terraform/language/tests"]],
            "tip": "Test module logic, not cloud APIs. Asserting that AWS creates a bucket is testing AWS, not your code."
          },
          {
            "t": "Static Analysis: Checkov and TFLint",
            "d": "Catching misconfigurations and policy violations before plan.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Checkov scans for security misconfigurations: open security groups, unencrypted storage",
              "TFLint enforces provider-specific best practices and naming conventions",
              "Both run in seconds in CI, long before any cloud API is touched"
            ],
            "do": [
              "Run Checkov on a sample repo and fix every high-severity finding",
              "Add a TFLint ruleset for your provider and clear the warnings",
              "Tune the gates: fail on highs, warn on mediums, document the suppressions"
            ],
            "tools": ["checkov", "tflint"],
            "res": [["Checkov", "https://github.com/bridgecrewio/checkov"]],
            "tip": "Suppressions need expiry dates and owners. A permanent skip comment is just a vulnerability with paperwork."
          },
          {
            "t": "Cost Estimation with Infracost",
            "d": "Seeing the price tag of a pull request before it merges.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Infracost parses plans and prices resources against cloud pricing APIs",
              "Cost diffs on PRs turn architecture review into budget review",
              "The biggest wins are usually instance sizes, NAT gateways, and forgotten volumes"
            ],
            "do": [
              "Run Infracost on a plan and find the three most expensive resources",
              "Post the cost diff as a PR comment in CI",
              "Right-size one overprovisioned resource and measure the monthly saving"
            ],
            "tools": ["infracost", "terraform"],
            "res": [["Infracost", "https://www.infracost.io"]],
            "tip": "Cost review catches what code review misses: the technically-correct config that costs $4,000 a month."
          },
          {
            "t": "GitHub Actions Pipeline",
            "d": "The standard CI/CD loop: fmt, validate, plan on PR, apply on merge.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "PRs run fmt, validate, and plan; the plan becomes a reviewable comment",
              "Merges to main apply automatically, ideally with manual approval for production",
              "OIDC authentication beats long-lived cloud credentials in CI"
            ],
            "do": [
              "Build a workflow that comments the plan diff on every infrastructure PR",
              "Add an approval gate before production applies",
              "Switch the pipeline from stored keys to OIDC federation"
            ],
            "tools": ["terraform", "github-actions"],
            "res": [["Terraform GitHub Actions", "https://developer.hashicorp.com/terraform/tutorials/automation/github-actions"]],
            "tip": "Auto-apply without approval is fine for dev and a resume-generating event for production. Gate it."
          },
          {
            "t": "Drift Detection",
            "d": "Finding and handling the changes humans make outside Terraform.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Scheduled plan-only runs surface drift as non-empty plans",
              "Some drift is legitimate (autoscaling, provider defaults); some is sabotage",
              "The fix is cultural: make the Terraform path faster than the console path"
            ],
            "do": [
              "Hand-edit a managed resource in the console, then run a drift-detection plan",
              "Classify each drifted attribute as legitimate or revert-worthy",
              "Set up a nightly drift report that posts to your team channel"
            ],
            "tools": ["terraform", "driftctl"],
            "res": [["Detect drift", "https://developer.hashicorp.com/terraform/tutorials/configuration-language/drift"]],
            "tip": "Drift detection without a response process is just a daily email everyone ignores. Assign an owner."
          }
        ]
      },
      {
        "t": "Production Terraform",
        "d": "Running IaC at organizational scale: workspaces, secrets, policy, and governance.",
        "lv": 3,
        "children": [
          {
            "t": "Workspaces vs Directories vs Stacks",
            "d": "Three ways to manage environments, and when each one wins.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Workspaces share config with separate states; simple but easy to confuse",
              "Separate directories per environment are explicit and reviewable",
              "Terraform Stacks orchestrate many components with shared orchestration rules"
            ],
            "do": [
              "Manage dev and prod with workspaces and feel the sharp edges",
              "Refactor to per-environment directories sharing modules",
              "Write the decision record for which pattern your org standardizes on"
            ],
            "tools": ["terraform"],
            "res": [["Workspaces", "https://developer.hashicorp.com/terraform/language/state/workspaces"]],
            "tip": "Workspaces are fine for ephemeral copies, dangerous for permanent environments. Directories make blast radius visible."
          },
          {
            "t": "Secret Management",
            "d": "Keeping credentials out of code, state, and logs in real pipelines.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "State files contain secrets in plaintext: encrypt state and restrict access ruthlessly",
              "OpenTofu's native state encryption encrypts client-side before anything leaves the machine",
              "Fetch secrets at apply time from Vault or cloud secret managers, never from tfvars"
            ],
            "do": [
              "Enable client-side state encryption and verify the backend only sees ciphertext",
              "Replace a tfvars secret with a data source reading from your secret manager",
              "Audit who can read your state backend and remove everyone who should not"
            ],
            "tools": ["terraform", "opentofu", "vault"],
            "res": [["Sensitive data in state", "https://developer.hashicorp.com/terraform/language/state/sensitive-data"]],
            "tip": "Your state backend's reader list is your secrets' reader list. Most teams have never looked at it."
          },
          {
            "t": "Policy as Code",
            "d": "Guardrails that reject bad plans automatically: Sentinel, OPA, Conftest.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Policy engines evaluate plans against rules: no public buckets, mandatory tags, allowed regions",
              "Sentinel integrates with HCP Terraform; OPA/Conftest work anywhere with plan JSON",
              "Start advisory (warn), then enforce; overnight enforcement breaks legitimate work"
            ],
            "do": [
              "Write a Conftest policy requiring cost-center tags on all resources",
              "Run it against plan JSON in CI and watch it fail a non-compliant PR",
              "Promote one policy from warn to deny after a month of clean runs"
            ],
            "tools": ["conftest", "opa", "sentinel"],
            "res": [["Open Policy Agent", "https://www.openpolicyagent.org"]],
            "tip": "Every policy needs an exception process. Policies without exceptions get bypassed; bypasses become the real policy."
          },
          {
            "t": "Scaling: Parallelism and Large States",
            "d": "Keeping plans fast and applies safe as infrastructure grows.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "-parallelism controls concurrent operations; raising it speeds applies but risks API throttling",
              "Refresh-only plans and targeted refreshes cut plan time on huge states",
              "The real fix for slow plans is smaller states, not bigger machines"
            ],
            "do": [
              "Benchmark plan time on a large state, then split it and benchmark again",
              "Tune parallelism and watch for provider rate limiting",
              "Set up plan-time budgets in CI that fail when plans get too slow"
            ],
            "tools": ["terraform"],
            "res": [["Performance", "https://developer.hashicorp.com/terraform/docs"]],
            "tip": "A 20-minute plan is a design smell, not a hardware problem. Split the state."
          },
          {
            "t": "HCP Terraform and Collaboration",
            "d": "Remote runs, private registries, and team workflows on HashiCorp's platform.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "HCP Terraform runs plans and applies remotely with shared state and locking built in",
              "VCS-driven workspaces turn every PR into a speculative plan automatically",
              "Private registry hosts your org's modules with versioning and access control"
            ],
            "do": [
              "Connect a workspace to a repo and watch a PR generate a speculative plan",
              "Publish an internal module to the private registry and consume it",
              "Configure run tasks (policy checks, cost estimation) on the workspace"
            ],
            "tools": ["terraform"],
            "res": [["HCP Terraform", "https://developer.hashicorp.com/terraform/cloud-docs"]],
            "tip": "Evaluate the platform cost against self-hosted backends honestly. Convenience has a per-seat price.",
            "tag": "opt"
          },
          {
            "t": "Production Readiness Review",
            "d": "The final audit: state, secrets, CI, policy, and recovery before real infrastructure.",
            "lv": 3,
            "time": "~5h",
            "badge": "PROJECT",
            "learn": [
              "Remote encrypted state with locking, versioning, and minimal reader access",
              "CI pipeline with lint, plan-on-PR, approval gates, and OIDC auth",
              "Tested recovery: state restore from backup, documented import runbook, break-glass access"
            ],
            "do": [
              "Run the full checklist against a real project and fix every gap",
              "Restore state from a versioned backup in a drill and time the recovery",
              "Write the on-call runbook for a failed apply at 2 AM"
            ],
            "tools": ["terraform", "opentofu"],
            "res": [["Terraform best practices", "https://developer.hashicorp.com/terraform/docs"]],
            "tip": "The runbook you wrote during the calm afternoon is the runbook that saves you during the 2 AM page."
          }
        ]
      }
    ]
  }
});
