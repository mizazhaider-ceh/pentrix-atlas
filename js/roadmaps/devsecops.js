/* Atlas roadmap data: DevSecOps (devsecops) */
ROADMAPS.push({
  "id": "devsecops",
  "title": "DevSecOps",
  "icon": "🔒",
  "color": "#16a34a",
  "desc": "Security woven into every stage of building and shipping software: from threat modeling to hardened pipelines, containers, supply chains, and incident response.",
  "kind": "role",
  "root": {
    "t": "DevSecOps",
    "d": "Security woven into every stage of building and shipping software.",
    "children": [
      {
        "t": "Security Foundations for Builders",
        "d": "The mental models every DevSecOps engineer needs before touching a pipeline.",
        "lv": 1,
        "children": [
          {
            "t": "DevSecOps vs DevOps",
            "d": "Shift-left is not a slogan. It is security checks moving earlier, where fixes are cheap.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "DevOps pipeline stages: plan, code, build, test, release, deploy, operate",
              "Where security gates slot in without killing delivery speed",
              "Shift-left vs shift-right: prevention early, detection late, both needed"
            ],
            "do": [
              "Draw your team's pipeline and mark where a leaked secret would go unnoticed",
              "Name one security check that fits naturally into each pipeline stage",
              "Write a one-paragraph definition of shift-left in your own words"
            ],
            "tools": ["GitHub Actions", "GitLab CI"],
            "res": [
              ["DevSecOps on Wikipedia", "https://en.wikipedia.org/wiki/DevSecOps"]
            ],
            "tip": "People treat DevSecOps as 'DevOps plus scanners'. The real change is cultural: developers own security outcomes, not a separate team."
          },
          {
            "t": "The CIA Triad and Risk Thinking",
            "d": "Confidentiality, integrity, availability: the lens every security decision gets weighed through.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Confidentiality, integrity, availability and how they trade off against each other",
              "Risk as likelihood times impact, not as vague fear",
              "Why perfect security is never the goal: proportionate controls are"
            ],
            "do": [
              "Pick a service you use and identify which leg of the triad matters most for it",
              "Write two risks for a small web app, scoring likelihood and impact 1 to 5",
              "Find one control you can describe as protecting each leg of the triad"
            ],
            "tools": ["NIST Cybersecurity Framework"],
            "res": [
              ["NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"]
            ],
            "tip": "Beginners optimize only confidentiality. Integrity (untampered data) and availability (it stays up) cause the incidents that end careers."
          },
          {
            "t": "Authentication vs Authorization",
            "d": "Proving who you are and proving what you may do are two different problems. Confuse them and you get breaches.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Authentication: identity verification (passwords, MFA, tokens, certificates)",
              "Authorization: permission checks that must happen on every request, server-side",
              "Why client-side checks and security-by-obscurity never count as authorization"
            ],
            "do": [
              "List the authN and authZ mechanisms of one app you use daily",
              "Find an endpoint in a test app and remove the authorization check to see what breaks",
              "Explain to a peer why hiding a button is not access control"
            ],
            "tools": ["OAuth 2.0", "OpenID Connect"],
            "res": [
              ["OWASP Authentication Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"]
            ],
            "tip": "The classic failure: the app checks login (authentication) but never checks whether THIS user may touch THAT object (authorization)."
          },
          {
            "t": "OWASP Top 10",
            "d": "The ten most common web application risks. Read it like a map of where your pipeline should be looking.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "All ten categories at a level where you can explain each in two sentences",
              "Which categories are code bugs (injection, XSS) vs config bugs (misconfiguration)",
              "How each category maps to a check a DevSecOps engineer can automate"
            ],
            "do": [
              "Read the full OWASP Top 10 and summarize each category in your own words",
              "Match each category to a pipeline check: SAST, SCA, DAST, config scan, or manual review",
              "Pick one category and find its entry in the OWASP Cheat Sheet Series"
            ],
            "tools": ["OWASP ZAP"],
            "res": [
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
              ["OWASP Cheat Sheet Series", "https://cheatsheetseries.owasp.org/"]
            ],
            "tip": "Do not memorize the list. Internalize the pattern: most entries are injection, broken access control, or misconfiguration wearing different clothes."
          },
          {
            "t": "Encryption Essentials",
            "d": "Symmetric vs asymmetric encryption, and why hashing passwords is a different sport entirely.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Symmetric (AES) vs asymmetric (RSA) encryption and when each is used",
              "Hashing vs encryption: one-way functions for passwords, reversible ciphers for data",
              "TLS in one paragraph: how a browser and server agree on a secret over a hostile network"
            ],
            "do": [
              "Generate an AES key and an RSA keypair with openssl and encrypt a file both ways",
              "Hash the same password with SHA-256 and with bcrypt and compare the outputs",
              "Inspect a TLS handshake in Wireshark or with openssl s_client"
            ],
            "tools": ["OpenSSL", "Wireshark"],
            "res": [
              ["OWASP Cryptographic Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html"]
            ],
            "tip": "Encryption is not hashing. If you can decrypt it, it is encryption; passwords must be hashed with a slow, salted function, never 'encrypted'."
          },
          {
            "t": "Networking Basics for Security",
            "d": "TLS, firewalls, and segmentation: the network layer your containers and pipelines live on.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "What TLS actually protects (and what it does not)",
              "Firewalls, ACLs, VLANs, and network segmentation in plain terms",
              "DNS and HTTP at the depth needed to read a security alert"
            ],
            "do": [
              "Use nmap to scan your own VM and explain every open port",
              "Write one iptables or cloud security-group rule that allows only SSH and HTTPS",
              "Capture HTTP vs HTTPS traffic and note exactly what an observer sees"
            ],
            "tools": ["nmap", "Wireshark", "iptables"],
            "res": [
              ["Nmap", "https://nmap.org/"],
              ["Wireshark", "https://www.wireshark.org/"]
            ]
          }
        ]
      },
      {
        "t": "Secure Coding and Static Analysis",
        "d": "Catch bug classes in the editor and the pull request, before they ever become CVEs.",
        "lv": 1,
        "children": [
          {
            "t": "SQL Injection Prevention",
            "d": "The oldest web bug is still alive. Parameterized queries kill it dead.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "How string-concatenated queries become injection, with a concrete payload",
              "Parameterized queries and prepared statements as the real fix",
              "Why escaping and blocklists are fragile second choices"
            ],
            "do": [
              "Build a tiny login form with a concatenated query and exploit it with ' OR '1'='1",
              "Rewrite the same query with parameters and confirm the payload now fails",
              "Run Semgrep with a SQL injection ruleset against a sample repo"
            ],
            "tools": ["Semgrep", "OWASP ZAP"],
            "res": [
              ["OWASP SQL Injection Prevention Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"]
            ],
            "tip": "Parameterized queries only protect query parameters. Table and column names still need allow-listing; that is where injection hides today."
          },
          {
            "t": "XSS Prevention",
            "d": "Cross-site scripting is an output-encoding problem wearing an input costume.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Reflected, stored, and DOM XSS and where each one lives",
              "Contextual output encoding: HTML, attribute, JavaScript, and URL contexts differ",
              "Content Security Policy as a safety net, never as the only defense"
            ],
            "do": [
              "Trigger a reflected XSS in a vulnerable lab app, then fix it with proper encoding",
              "Write a strict Content-Security-Policy header for a test page",
              "Find one place in your own code where user data reaches the DOM unencoded"
            ],
            "tools": ["OWASP ZAP", "Burp Suite"],
            "res": [
              ["OWASP XSS Prevention Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"]
            ],
            "tip": "Encoding on input corrupts data and still misses contexts. Encode at the moment of output, matched to the exact context the data lands in."
          },
          {
            "t": "Input Validation Patterns",
            "d": "Allow-lists over blocklists, and validation on the server where attackers cannot skip it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Allow-list vs blocklist validation and why blocklists always lose",
              "Server-side validation as mandatory, client-side as convenience only",
              "Canonicalization traps: double encoding, unicode tricks, path traversal"
            ],
            "do": [
              "Write an allow-list validator for a username field and test it against bypass attempts",
              "Bypass a client-side-only validation in a lab app with curl",
              "Test a file-upload endpoint with ../ traversal and double-encoded payloads"
            ],
            "tools": ["curl", "Burp Suite"],
            "res": [
              ["OWASP Input Validation Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html"]
            ],
            "tip": "Validate, then use. Code that checks input once but uses a different variable later is the classic validation bypass."
          },
          {
            "t": "Secrets Do Not Belong in Code",
            "d": "Keys in git history are compromised keys. Scan for them, block them, and rotate the ones that slipped.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Why a secret committed once must be treated as leaked, even after deletion",
              "Gitleaks and TruffleHog: how secret scanners find high-entropy strings",
              "Pre-commit hooks and push protection as the cheapest possible gate"
            ],
            "do": [
              "Install gitleaks and scan a repo; triage every finding as real or false positive",
              "Add a pre-commit hook that blocks commits containing AWS-style keys",
              "Rotate one real credential the scanner found and delete it from history with git filter-repo"
            ],
            "tools": ["Gitleaks", "TruffleHog"],
            "res": [
              ["Gitleaks", "https://github.com/gitleaks/gitleaks"],
              ["TruffleHog", "https://github.com/trufflesecurity/trufflehog"]
            ],
            "tip": "Deleting the secret from the file does not delete it from git history. Rotate first, clean second, and assume it was already seen.",
            "badge": "LAB"
          },
          {
            "t": "SAST with Semgrep",
            "d": "Static analysis finds bug patterns in code that never runs. Semgrep makes it fast and readable.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What SAST sees: patterns in source, not behavior at runtime",
              "Semgrep rules: pattern matching that reads almost like the code itself",
              "Triage reality: false positives are normal; tuning is the job"
            ],
            "do": [
              "Run semgrep with the auto config against a small project and read every finding",
              "Write one custom rule for a dangerous pattern in your stack",
              "Tune one noisy rule down and document why in a comment"
            ],
            "tools": ["Semgrep"],
            "res": [
              ["Semgrep", "https://semgrep.dev/"]
            ],
            "tip": "An untuned SAST tool trains developers to ignore it. Fewer, sharper rules beat a thousand noisy ones every time."
          },
          {
            "t": "Password Hashing Done Right",
            "d": "bcrypt or Argon2 with per-user salts. Everything else is a future breach headline.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Why fast hashes (MD5, SHA-256) are useless for passwords",
              "bcrypt and Argon2: work factors, salts, and pepper",
              "Migration strategy: rehash-on-login for legacy password stores"
            ],
            "do": [
              "Hash a password with bcrypt at cost 12 and time how long verification takes",
              "Crack a SHA-256 password hash with hashcat to feel the difference",
              "Audit one codebase for password storage and write the fix as a ticket"
            ],
            "tools": ["bcrypt", "Argon2", "hashcat"],
            "res": [
              ["OWASP Password Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"]
            ],
            "tip": "Never invent password crypto. Use the vetted library, and the work factor is the actual security parameter, not the algorithm name alone."
          }
        ]
      }
      ,
      {
        "t": "Security in the CI Pipeline",
        "d": "Layered automated checks on every pull request, plus a pipeline you would trust with production keys.",
        "lv": 2,
        "children": [
          {
            "t": "Layering SAST, SCA, and DAST",
            "d": "Each layer catches a class the others structurally cannot. Run them together, cheap ones first.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "SAST scans your code, SCA scans your dependencies, DAST scans the running app",
              "Why secret scanning belongs on every PR and DAST belongs on a schedule",
              "Pipeline economics: fast checks on PR, heavy checks nightly"
            ],
            "do": [
              "Draw the layered pipeline for a sample repo: secret scan, SAST, SCA on PR; DAST nightly",
              "Time each layer and confirm the PR path stays under your team's budget",
              "Write a policy note stating which layer failing blocks the merge"
            ],
            "tools": ["Semgrep", "Trivy", "OWASP ZAP", "Gitleaks"],
            "res": [
              ["OWASP DevSecOps Guideline", "https://owasp.org/www-project-devsecops-guideline/"]
            ],
            "tip": "One scanner is a checkbox. The value is in the layering: secrets plus SCA plus SAST on every PR catches most real-world failures."
          },
          {
            "t": "DAST with OWASP ZAP",
            "d": "Attack the running app like an outsider would. ZAP finds what static scans cannot see.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Baseline vs full scans: spidering, passive rules, then active attacks",
              "Authentication handling in scans so ZAP reaches past the login page",
              "Reading a ZAP report: true positives, noise, and alert risk ratings"
            ],
            "do": [
              "Run a ZAP baseline scan against a local test app from the official Docker image",
              "Configure form-based auth in a ZAP context and rescan to compare coverage",
              "Export the HTML report and file the top two real findings as tickets"
            ],
            "tools": ["OWASP ZAP"],
            "res": [
              ["OWASP ZAP", "https://www.zaproxy.org/"]
            ],
            "tip": "A DAST scan that never logs in only tests the login page. Authenticated scanning is where the coverage jumps."
          },
          {
            "t": "SCA: Dependency Scanning",
            "d": "Your code is 10 percent of the app. Scan the other 90 percent for known CVEs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How SCA matches lockfile versions against CVE databases",
              "Transitive dependencies: the vulnerable library you never directly chose",
              "Remediation trade-offs: upgrade, patch, replace, or accept with a record"
            ],
            "do": [
              "Run trivy fs and osv-scanner against a real project and compare findings",
              "Trace one high-severity finding to its transitive parent in the lockfile",
              "Enable Dependabot or Renovate and merge one security update end to end"
            ],
            "tools": ["Trivy", "OSV-Scanner", "Dependabot", "Renovate"],
            "res": [
              ["Trivy", "https://trivy.dev/"],
              ["OSV.dev", "https://osv.dev/"]
            ],
            "tip": "SCA finds known CVEs, not malicious packages. Pair it with lockfiles, version pinning, and suspicion of brand-new dependencies."
          },
          {
            "t": "Failing Builds on Real Findings",
            "d": "A scanner nobody must obey is decoration. Quality gates turn findings into blocked merges.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Severity thresholds and why 'fail on critical only' is the sane starting point",
              "Baselines and grace periods: not failing on day one while legacy debt burns down",
              "The human loop: who triages, who owns the fix, and the SLA for each severity"
            ],
            "do": [
              "Add a CI job that fails the build on high or critical SCA findings",
              "Create a baseline file for existing findings so only new issues block",
              "Write the triage runbook: severity, owner, and fix deadline per level"
            ],
            "tools": ["GitHub Advanced Security", "GitLab CI"],
            "res": [
              ["GitHub code scanning docs", "https://docs.github.com/en/code-security"]
            ],
            "tip": "Fail the build on day one with zero baselining and developers will disable the scanner. Gate new findings, burn down old ones on a schedule."
          },
          {
            "t": "Hardening CI/CD Itself",
            "d": "The pipeline builds everything you ship. A compromised runner is a compromised product.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Common CI attacks: poisoned runners, script injection in PRs from forks, stolen tokens",
              "Least-privilege workflows: minimal permissions, pinned actions, protected environments",
              "OIDC federation: short-lived cloud credentials instead of long-lived secrets"
            ],
            "do": [
              "Scan your workflows with zizmor and fix every finding it reports",
              "Pin all third-party actions to full commit SHAs",
              "Replace one long-lived cloud secret with OIDC federation"
            ],
            "tools": ["zizmor", "GitHub Actions", "StepSecurity"],
            "res": [
              ["zizmor", "https://github.com/woodruffw/zizmor"]
            ],
            "tip": "pull_request_target with checkout of untrusted code is the classic CI takeover. Understand it before you ever use it."
          },
          {
            "t": "Secrets Management in Pipelines",
            "d": "Pipelines need secrets to deploy. Give them the fewest, shortest-lived ones possible.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Vaults and managed secret stores vs environment variables in CI settings",
              "Dynamic secrets: credentials minted per job that expire in minutes",
              "Rotation and revocation: the plan for the day a secret leaks"
            ],
            "do": [
              "Move one hardcoded CI secret into a managed secret store",
              "Issue a dynamic database credential from HashiCorp Vault with a 10-minute TTL",
              "Practice the rotation drill: revoke, replace, and verify the pipeline still deploys"
            ],
            "tools": ["HashiCorp Vault", "AWS Secrets Manager", "SOPS"],
            "res": [
              ["HashiCorp Vault", "https://www.vaultproject.io/"]
            ],
            "tip": "If a secret never expires, its blast radius is forever. Short TTLs turn a leak from a disaster into an incident."
          },
          {
            "t": "Identity Basics: IAM and Least Privilege",
            "d": "Every pipeline actor and human gets exactly the permissions they need. Nothing more.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "IAM primitives: identities, roles, policies, and the default-deny mindset",
              "Least privilege in practice: scoping CI roles to one repo, one environment",
              "Role-based access and why standing admin access is a liability"
            ],
            "do": [
              "Audit one cloud IAM role and remove every permission it did not use in 30 days",
              "Create a deploy role that can only touch one environment's resources",
              "Turn on MFA for every human with production access and verify it"
            ],
            "tools": ["AWS IAM", "Cloud Custodian"],
            "res": [
              ["AWS IAM best practices", "https://docs.aws.amazon.com/iam/"]
            ],
            "tip": "Wildcard permissions in a CI role are a standing invitation. Scope to the exact resource ARNs the job touches."
          }
        ]
      },
      {
        "t": "Container and Kubernetes Security",
        "d": "Hardened images, locked-down clusters, and admission control that enforces the rules automatically.",
        "lv": 2,
        "children": [
          {
            "t": "Hardened Dockerfiles",
            "d": "Minimal base images, non-root users, no secrets baked in. The image is the first security boundary.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Minimal bases (distroless, alpine) and why smaller means fewer CVEs",
              "Running as non-root and dropping Linux capabilities",
              "Multi-stage builds: build tools never ship in the runtime image"
            ],
            "do": [
              "Rewrite a fat Dockerfile as multi-stage distroless and compare trivy results before and after",
              "Add a non-root USER and verify the app still starts and writes where it should",
              "Lint your Dockerfiles with hadolint and clear every warning"
            ],
            "tools": ["Docker", "Trivy", "Hadolint"],
            "res": [
              ["Docker docs", "https://docs.docker.com/"],
              ["Hadolint", "https://github.com/hadolint/hadolint"]
            ],
            "tip": "COPY . into the image copies your .env and your git history too. A .dockerignore is a security control, not tidiness."
          },
          {
            "t": "Kubernetes RBAC and Least Privilege",
            "d": "Roles, bindings, and service accounts: who may do what, to which namespace, and nothing else.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Roles vs ClusterRoles, bindings, and service accounts",
              "Why the default service account should get nothing",
              "Auditing RBAC: finding cluster-admin bindings nobody remembers creating"
            ],
            "do": [
              "Create a namespaced Role that can only read pods and bind it to a service account",
              "Audit your cluster for ClusterRoleBindings to cluster-admin and justify each",
              "Break an app by removing its overbroad permissions, then grant back the minimum"
            ],
            "tools": ["kubectl", "rbac-lookup"],
            "res": [
              ["Kubernetes RBAC docs", "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"]
            ],
            "tip": "One stray ClusterRoleBinding to cluster-admin negates every other control in the cluster. Audit bindings first, policies second."
          },
          {
            "t": "Pod Security and Network Policies",
            "d": "Defaults that stop a compromised pod from becoming a compromised cluster.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Pod Security Standards: baseline vs restricted profiles",
              "NetworkPolicies: default-deny traffic rules between pods",
              "Read-only root filesystems and dropped capabilities"
            ],
            "do": [
              "Enforce the restricted Pod Security Standard on a namespace and fix the workloads that break",
              "Write a default-deny NetworkPolicy, then allow only the traffic your app needs",
              "Set readOnlyRootFilesystem on a deployment and handle its writable paths"
            ],
            "tools": ["kubectl", "Kyverno"],
            "res": [
              ["Kubernetes Pod Security Standards", "https://kubernetes.io/docs/concepts/security/pod-security-standards/"]
            ],
            "tip": "Pods can talk to everything by default, including the metadata service. Default-deny network policy is the single highest-value K8s control."
          },
          {
            "t": "Admission Control with Kyverno and OPA",
            "d": "Policies that reject bad workloads at the API server, before they ever run.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Validating vs mutating admission: reject or fix at deploy time",
              "Writing policies: require labels, block latest tags, enforce resource limits",
              "Policy-as-code workflow: test policies like you test applications"
            ],
            "do": [
              "Install Kyverno and write a policy that rejects images without a digest",
              "Write a policy requiring resource requests and limits on every container",
              "Test a policy against a bad manifest and read the rejection message"
            ],
            "tools": ["Kyverno", "OPA Gatekeeper"],
            "res": [
              ["Kyverno", "https://kyverno.io/"],
              ["Open Policy Agent", "https://www.openpolicyagent.org/"]
            ],
            "tip": "Start admission policies in audit mode. Enforce mode on day one breaks deploys and teaches the team to hate policy.",
            "tag": "opt"
          },
          {
            "t": "Kubernetes Secrets and Workload Identity",
            "d": "etcd is not a vault. Real secret handling for workloads that need credentials.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why base64-encoded etcd entries are not encryption by default",
              "External Secrets Operator and CSI secret stores: syncing from a real vault",
              "Workload identity: pods authenticating to cloud APIs without static keys"
            ],
            "do": [
              "Enable encryption at rest for etcd secrets in a test cluster",
              "Sync one secret from Vault into the cluster with External Secrets Operator",
              "Give a pod cloud API access via workload identity with zero stored keys"
            ],
            "tools": ["External Secrets Operator", "HashiCorp Vault"],
            "res": [
              ["Kubernetes secrets docs", "https://kubernetes.io/docs/concepts/configuration/secret/"]
            ],
            "tip": "Anyone with etcd or backup access reads every 'secret' in the cluster. Encryption at rest is the minimum; a real vault is the goal."
          }
        ]
      },
      {
        "t": "Threat Modeling and Secure Architecture",
        "d": "Think like an attacker before a line of code is written. Design the defenses on purpose.",
        "lv": 2,
        "children": [
          {
            "t": "Threat Modeling Workflows",
            "d": "A repeatable ritual: diagram the system, find the threats, decide what to do about each.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The four questions: what are we building, what can go wrong, what will we do, did we do it",
              "Data flow diagrams as the foundation every threat model stands on",
              "When to model: new features, architecture changes, and before big releases"
            ],
            "do": [
              "Draw a data flow diagram for a small service: actors, processes, data stores, trust boundaries",
              "Run a 60-minute threat modeling session on it with one other person",
              "Turn the top five threats into tracked tickets with owners"
            ],
            "tools": ["OWASP Threat Dragon", "Microsoft Threat Modeling Tool"],
            "res": [
              ["OWASP Threat Dragon", "https://owasp.org/www-project-threat-dragon/"]
            ],
            "tip": "A threat model that produces no tickets was a drawing exercise. The output is decisions and owners, not diagrams.",
            "badge": "LAB"
          },
          {
            "t": "STRIDE and Attack Surface Mapping",
            "d": "Six threat categories and a map of every door into your system.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "STRIDE: spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege",
              "Attack surface mapping: endpoints, integrations, admin paths, forgotten subdomains",
              "PASTA as the risk-centric alternative when STRIDE feels too abstract"
            ],
            "do": [
              "Walk one data flow and brainstorm one STRIDE threat per category",
              "Map the attack surface of a demo app: every input, every integration, every admin route",
              "Rank the mapped surface by exposure and pick the top three to harden"
            ],
            "tools": ["OWASP Threat Dragon"],
            "res": [
              ["OWASP Threat Modeling Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html"]
            ],
            "tip": "Every integration is attack surface you do not control. Third-party webhooks and callbacks deserve the same scrutiny as your own endpoints."
          },
          {
            "t": "Defense in Depth",
            "d": "No single control survives contact with a real attacker. Stack them so one failure is not the end.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Layered controls across network, host, application, and data",
              "Why each layer assumes the one outside it has already failed",
              "Cost thinking: depth where the assets are, simplicity where they are not"
            ],
            "do": [
              "Sketch the control layers protecting one production database",
              "Remove one layer on paper and describe the attack path that opens",
              "Identify one place with a single point of security failure and propose a second layer"
            ],
            "tools": ["NIST Cybersecurity Framework"],
            "res": [
              ["NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"]
            ]
          },
          {
            "t": "Zero Trust Architecture",
            "d": "Never trust, always verify: identity-based access for every request, inside or outside the perimeter.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why the old castle-and-moat perimeter model collapsed",
              "Core tenets: verify explicitly, least privilege, assume breach",
              "Building blocks: identity-aware proxies, device posture, microsegmentation"
            ],
            "do": [
              "Put one internal tool behind an identity-aware proxy instead of the VPN",
              "Inventory which internal services still trust the network alone",
              "Write the zero-trust migration order for a small org: identity first, then devices, then network"
            ],
            "tools": ["Tailscale", "Cloudflare Access"],
            "res": [
              ["NIST Zero Trust Architecture (SP 800-207)", "https://www.nist.gov/publications/zero-trust-architecture"]
            ],
            "tip": "Zero trust is a strategy, not a product. Any vendor selling 'zero trust in a box' is selling the perimeter with new paint."
          },
          {
            "t": "Secure API Design",
            "d": "Authorization on every endpoint, versioning, and error messages that help developers without helping attackers.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Default-deny authorization as a design rule, not a per-endpoint afterthought",
              "Versioning, deprecation, and why old API versions are lingering attack surface",
              "Safe error design: useful to developers, useless to attackers"
            ],
            "do": [
              "Review one API spec and mark every endpoint missing an explicit authorization rule",
              "Design the versioning and sunset policy for a sample API",
              "Trigger errors against a test API and classify which responses leak internals"
            ],
            "tools": ["OpenAPI", "OWASP ZAP"],
            "res": [
              ["OWASP API Security Top 10", "https://owasp.org/API-Security/"]
            ],
            "tip": "Design the auth model before the endpoints. Bolting authorization onto a finished API produces the BOLA bugs that top every API breach list."
          },
          {
            "t": "Network Zoning and DDoS Mitigation",
            "d": "Segment the network so a breach stays small, and absorb the floods before they reach you.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Zoning: DMZ, internal tiers, and management networks with controlled crossings",
              "IDS vs IPS: detection that alerts vs prevention that blocks",
              "DDoS mitigation layers: edge absorption, rate limiting, anycast, and runbooks"
            ],
            "do": [
              "Design a three-tier network zone diagram for a web app with a database",
              "Configure rate limiting at the edge for one endpoint and load-test it",
              "Write the first page of a DDoS runbook: who gets paged, what gets toggled"
            ],
            "tools": ["Snort", "Suricata", "Cloudflare"],
            "res": [
              ["Suricata", "https://suricata.io/"]
            ],
            "tip": "Your DDoS plan written during the attack is not a plan. Capacity numbers and provider contacts must exist before the flood."
          }
        ]
      }
      ,
      {
        "t": "Supply Chain Security",
        "d": "Know everything you ship, prove where it came from, and trust nothing by default.",
        "lv": 2,
        "children": [
          {
            "t": "SBOMs with Syft",
            "d": "A software bill of materials: the ingredient list that lets you answer 'are we affected' in minutes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "SPDX vs CycloneDX: the two SBOM formats and where each is expected",
              "Generating SBOMs from images, directories, and lockfiles with Syft",
              "Consuming SBOMs: matching them against vulnerability feeds with Grype"
            ],
            "do": [
              "Generate a CycloneDX SBOM for a container image with syft",
              "Scan that SBOM with grype and read the matched CVEs",
              "Add SBOM generation to a CI pipeline and store it as a build artifact"
            ],
            "tools": ["Syft", "Grype"],
            "res": [
              ["Syft", "https://github.com/anchore/syft"],
              ["CycloneDX", "https://cyclonedx.org/"]
            ],
            "tip": "An SBOM nobody reads is compliance theater. The value is the query: when the next OpenSSL CVE drops, you answer in minutes, not weeks."
          },
          {
            "t": "Dependency Risk Management",
            "d": "Pinned versions, lockfiles, and update discipline: boring practices that stop supply chain fires.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Lockfiles committed, versions pinned, hashes verified",
              "Update strategy: automated PRs, test suites as the safety net, security updates first",
              "Evaluating a dependency before adopting: maintenance, bus factor, and scope of permissions"
            ],
            "do": [
              "Audit one project's dependencies for unmaintained or brand-new packages",
              "Enable Renovate or Dependabot with auto-merge rules for patch updates",
              "Write a dependency-adoption checklist for your team and apply it to the next new library"
            ],
            "tools": ["Renovate", "Dependabot", "Socket"],
            "res": [
              ["OSV.dev", "https://osv.dev/"]
            ],
            "tip": "The most dangerous dependency is the one with install scripts that run as root. Audit install hooks before the library code."
          },
          {
            "t": "Build Provenance and SLSA",
            "d": "Cryptographic proof of how an artifact was built, by whom, and from what source.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "SLSA levels: what each level guarantees about your build",
              "Provenance attestations: the signed metadata describing the build",
              "Hermetic, reproducible builds and why they matter for trust"
            ],
            "do": [
              "Generate SLSA provenance for a GitHub Actions build",
              "Verify a provenance attestation and explain what it proves",
              "Map your current build process to SLSA levels and name the gaps"
            ],
            "tools": ["SLSA", "Sigstore"],
            "res": [
              ["SLSA", "https://slsa.dev/"]
            ],
            "tip": "Provenance answers 'was this built from the code I reviewed'. Without it, a compromised build server ships malware signed as your release."
          },
          {
            "t": "Signing Artifacts with Sigstore and Cosign",
            "d": "Keyless signing for containers and releases: prove the artifact is really yours.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Cosign signing and verification for container images",
              "Keyless signing with OIDC identity instead of managed keys",
              "Transparency logs: public, tamper-evident records of what was signed"
            ],
            "do": [
              "Sign a container image with cosign in keyless mode",
              "Verify the signature on pull and wire verification into a deployment policy",
              "Look up your signature in the Rekor transparency log"
            ],
            "tools": ["Cosign", "Sigstore"],
            "res": [
              ["Sigstore", "https://www.sigstore.dev/"]
            ],
            "tip": "Signing without verification is a sticker. The control is the admission policy that refuses unsigned images."
          },
          {
            "t": "Malicious Packages and Typosquatting",
            "d": "Attackers publish lookalike packages. Learn to spot the traps before npm install does.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Typosquatting, dependency confusion, and brandjacking patterns",
              "Malicious behaviors: exfiltration in install scripts, cryptominers, credential theft",
              "Defenses: scoped registries, install-script policies, and anomaly alerts"
            ],
            "do": [
              "Compare a typosquat package name against the real one and list the red flags",
              "Configure your registry to block dependency confusion attacks",
              "Review the install scripts of your top ten dependencies"
            ],
            "tools": ["Socket", "npm audit"],
            "res": [
              ["OSV.dev", "https://osv.dev/"]
            ],
            "tip": "Read the install script before you read the README. Legitimate packages rarely need network access at install time."
          }
        ]
      },
      {
        "t": "Detection and Incident Response",
        "d": "Logging that actually helps, alerts worth waking up for, and a practiced response when it counts.",
        "lv": 2,
        "children": [
          {
            "t": "Logging for Security",
            "d": "Structured, tamper-resistant logs are the difference between an investigation and a guess.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What to log: authentication events, authorization failures, admin actions, and anomalies",
              "Structured logging (JSON) and why grep-friendly text logs do not scale",
              "Log integrity: centralized shipping, immutability, and retention policy"
            ],
            "do": [
              "Add structured audit logging to one service: who did what, when, from where",
              "Ship the logs to a central store and confirm they survive the app's deletion",
              "Write a query that finds every failed admin login in the last 7 days"
            ],
            "tools": ["Loki", "Elasticsearch", "OpenTelemetry"],
            "res": [
              ["OWASP Logging Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"]
            ],
            "tip": "Never log secrets, tokens, or full PII. The log store becomes the breach when it holds what attackers want."
          },
          {
            "t": "SIEM Basics and Alert Triage",
            "d": "Centralized security telemetry, detection rules, and the discipline of working the queue.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "SIEM in one paragraph: collect, normalize, correlate, alert",
              "Detection rules vs noise: tuning for signal without alert fatigue",
              "Alert triage: true positive, false positive, and the investigation notes that prove it"
            ],
            "do": [
              "Stand up Wazuh or Security Onion in a lab and ingest logs from two sources",
              "Write one detection rule for impossible-travel logins and tune its threshold",
              "Triage ten alerts and document the evidence for each verdict"
            ],
            "tools": ["Wazuh", "Security Onion", "Splunk"],
            "res": [
              ["Wazuh", "https://wazuh.com/"]
            ],
            "tip": "An alert nobody triages is worse than no alert: it creates the illusion of monitoring. Tune or disable; never ignore."
          },
          {
            "t": "The Incident Response Lifecycle",
            "d": "Preparation, identification, containment, eradication, recovery, lessons learned. Know it cold.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The six phases and what exits each one cleanly",
              "Preparation: the IR plan, roles, and contact lists that must exist before the incident",
              "Lessons learned: the phase teams skip and the reason incidents repeat"
            ],
            "do": [
              "Write a one-page IR plan for a small team: roles, escalation, and comms",
              "Run a tabletop exercise: walk through a ransomware scenario out loud",
              "Write the lessons-learned template you will fill in after every incident"
            ],
            "tools": ["NIST SP 800-61"],
            "res": [
              ["NIST SP 800-61 (Computer Security Incident Handling)", "https://www.nist.gov/publications/computer-security-incident-handling-guide"]
            ],
            "tip": "Tabletop exercises feel silly until the real incident. The team that has rehearsed makes decisions; the team that has not has meetings."
          },
          {
            "t": "Containment and Forensics Basics",
            "d": "Stop the bleeding without destroying the evidence you will need tomorrow.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Containment options: isolate the host, block at the edge, revoke credentials, in that order of safety",
              "Order of volatility: memory and network state vanish first, disk lasts",
              "Chain of custody basics for anything that might reach legal or HR"
            ],
            "do": [
              "Practice isolating a VM from the network while keeping it running for memory capture",
              "Take a memory dump and a disk image of a lab VM with documented hashes",
              "Write the evidence-handling checklist: who touched what, when, and why"
            ],
            "tools": ["Volatility", "Autopsy", "Velociraptor"],
            "res": [
              ["Volatility", "https://www.volatilityfoundation.org/"]
            ],
            "tip": "Rebooting a compromised host destroys memory evidence. Isolate first, capture second, remediate third."
          },
          {
            "t": "Root Cause Analysis",
            "d": "Fix the hole, not just the symptom. Five whys until you reach the process that allowed it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Five whys and timeline reconstruction as the core techniques",
              "Blameless analysis: systems fail, and the fix is in the system",
              "Turning findings into preventive controls, not just patches"
            ],
            "do": [
              "Reconstruct the timeline of a public breach writeup using only published sources",
              "Run five whys on a past outage or near-miss from your own work",
              "Convert one root cause into a preventive control with an owner and a deadline"
            ],
            "tools": ["NIST SP 800-61"],
            "res": [
              ["NIST SP 800-61 (Computer Security Incident Handling)", "https://www.nist.gov/publications/computer-security-incident-handling-guide"]
            ],
            "tip": "If the root cause is 'human error', you have not finished. Ask what made the error possible, easy, and undetectable."
          },
          {
            "t": "Automated Response and SOAR Concepts",
            "d": "Playbooks that isolate hosts and revoke tokens in seconds, not after the morning standup.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "SOAR in one paragraph: orchestration, automation, and response playbooks",
              "What to automate first: enrichment and containment, not eradication",
              "Human-in-the-loop design: automation proposes, analysts approve destructive actions"
            ],
            "do": [
              "Build a playbook that enriches an alert with threat intel and opens a ticket",
              "Automate one safe containment action: disabling a compromised user account",
              "Define the approval gate for every destructive automated action"
            ],
            "tools": ["Shuffle", "Tines", "Cortex XSOAR"],
            "res": [
              ["Shuffle", "https://shuffler.io/"]
            ],
            "tip": "Automate the boring parts first: enrichment and ticket creation. Automating eradication before you trust the detections causes self-inflicted outages.",
            "tag": "opt"
          },
          {
            "t": "Automated Patching",
            "d": "Vulnerabilities with available fixes should not wait for a human's free afternoon.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Patch automation for OS, containers, and dependencies as separate problems",
              "Canary and staged rollouts: patching fast without breaking everything",
              "Measuring patch latency: mean time to patch as a security metric"
            ],
            "do": [
              "Enable unattended security updates on a test server and verify they apply",
              "Set up automated base-image rebuilds for one container pipeline",
              "Measure your current patch latency for one critical CVE end to end"
            ],
            "tools": ["Renovate", "Dependabot", "unattended-upgrades"],
            "res": [
              ["CISA Known Exploited Vulnerabilities Catalog", "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"]
            ],
            "tip": "Patch the KEV list first. If CISA says attackers are actively exploiting it, your patch window is already overdue.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Cloud Security and Governance",
        "d": "Shared responsibility, identity at scale, and the frameworks that turn security into auditable practice.",
        "lv": 3,
        "children": [
          {
            "t": "Cloud Shared Responsibility and CSPM",
            "d": "The provider secures the cloud; you secure what you put in it. CSPM checks your homework.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Shared responsibility across IaaS, PaaS, and SaaS: where your duties start",
              "CSPM: continuous checks for public buckets, open security groups, and drift",
              "Common cloud misconfigurations and their blast radius"
            ],
            "do": [
              "Run Prowler or ScoutSuite against a test cloud account and triage the findings",
              "Fix the top three misconfigurations and rescan to confirm",
              "Write the shared-responsibility boundary for one service your team runs"
            ],
            "tools": ["Prowler", "ScoutSuite", "Wiz"],
            "res": [
              ["Prowler", "https://github.com/prowler-cloud/prowler"]
            ],
            "tip": "Nearly every cloud breach is a misconfiguration, not a zero-day. CSPM findings are the cheapest incidents you will ever prevent."
          },
          {
            "t": "Cloud IAM at Scale",
            "d": "Hundreds of roles across accounts: federated identity, permission boundaries, and access reviews.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Multi-account strategy and why production lives behind its own boundary",
              "Permission boundaries and SCPs: guardrails even admins cannot cross",
              "Access reviews: the quarterly ritual that retires zombie permissions"
            ],
            "do": [
              "Design a three-account layout: management, staging, production",
              "Apply a permission boundary that blocks IAM changes for one role",
              "Run an access review on one account and remove everything unused"
            ],
            "tools": ["AWS IAM Access Analyzer", "Cloud Custodian"],
            "res": [
              ["AWS IAM best practices", "https://docs.aws.amazon.com/iam/"]
            ],
            "tip": "Standing access to production is technical debt with a blast radius. Move humans to just-in-time elevation."
          },
          {
            "t": "KMS and Key Lifecycle",
            "d": "Encryption is only as good as the keys. Generate, rotate, and destroy them properly.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Envelope encryption: data keys protected by key-encryption keys",
              "Key rotation schedules and why automatic rotation beats manual",
              "Key destruction and the right to be forgotten: crypto-shredding"
            ],
            "do": [
              "Create a KMS key, encrypt data with envelope encryption, then rotate the key",
              "Set an automatic rotation policy and verify old ciphertext still decrypts",
              "Document the key inventory and owners for one project"
            ],
            "tools": ["AWS KMS", "HashiCorp Vault"],
            "res": [
              ["AWS KMS", "https://aws.amazon.com/kms/"]
            ],
            "tip": "Losing a key is losing the data. Backup and recovery procedures for keys matter more than for almost anything else."
          },
          {
            "t": "PKI Design and Certificate Lifecycle",
            "d": "Certificates expire at 3 AM on holidays. Design the lifecycle so they renew themselves.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "PKI components: CAs, intermediates, chains, and revocation",
              "Automated issuance and renewal with ACME and cert-manager",
              "Monitoring expiry as a first-class alert, not a calendar reminder"
            ],
            "do": [
              "Issue a certificate with cert-manager in a test cluster and watch it renew",
              "Build an expiry dashboard alerting 30, 14, and 3 days out",
              "Document the chain of trust for one internal service"
            ],
            "tools": ["cert-manager", "Let's Encrypt", "step-ca"],
            "res": [
              ["Let's Encrypt", "https://letsencrypt.org/"]
            ],
            "tip": "Every expired-certificate outage was preventable with automation plus alerting. Manual renewal is the incident waiting to happen."
          },
          {
            "t": "Frameworks: NIST, ISO 27001, SOC 2",
            "d": "The control frameworks customers and auditors actually ask about, translated into engineering work.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "NIST CSF 2.0 functions: govern, identify, protect, detect, respond, recover",
              "ISO 27001 Annex A controls and the certification process",
              "SOC 2 trust criteria and why startups meet it before enterprise deals"
            ],
            "do": [
              "Map five controls you already run to NIST CSF functions",
              "Draft the scope statement for a hypothetical ISO 27001 certification",
              "List the evidence artifacts a SOC 2 auditor would request from your pipeline"
            ],
            "tools": ["NIST CSF", "ISO 27001"],
            "res": [
              ["NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"],
              ["ISO 27001", "https://www.iso.org/standard/27001/"]
            ],
            "tip": "Frameworks describe outcomes, not tools. Map each control to something your pipeline actually does, or it is shelfware."
          },
          {
            "t": "Audit and Compliance Mapping",
            "d": "Turn framework requirements into evidence your pipeline generates automatically.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Compliance as code: policies expressed in OPA or cloud config rules",
              "Evidence collection: logs, scan reports, and change records auditors accept",
              "Mapping one requirement across multiple frameworks to avoid duplicate work"
            ],
            "do": [
              "Write one compliance check as code and run it against your infrastructure",
              "Assemble an evidence pack for a single control: policy, implementation, proof",
              "Map one security requirement to its NIST, ISO, and SOC 2 equivalents"
            ],
            "tools": ["Open Policy Agent", "Drata", "Vanta"],
            "res": [
              ["Open Policy Agent", "https://www.openpolicyagent.org/"]
            ],
            "tip": "Auditors love automation because humans lie and logs do not. Every manual evidence screenshot is a process waiting to be automated."
          },
          {
            "t": "Risk Quantification and Security Metrics",
            "d": "Speak to leadership in numbers: which risks, how much exposure, and whether it is improving.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Metrics that matter: MTTR, patch latency, finding aging, coverage of critical assets",
              "Risk quantification basics: turning technical findings into business exposure",
              "Reporting cadence: what the board sees vs what engineering sees"
            ],
            "do": [
              "Build a one-page security metrics dashboard for a fictional product",
              "Quantify one vulnerability in business terms: exposure window times asset value",
              "Write the quarterly security summary you would present to non-technical leadership"
            ],
            "tools": ["NIST CSF"],
            "res": [
              ["NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"]
            ],
            "tip": "Vulnerability counts are vanity metrics. Track aging and exposure of critical findings: that is what leadership decisions move."
          }
        ]
      }
    ]
  }
});
