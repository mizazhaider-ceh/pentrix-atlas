/* Atlas roadmap data: DevSecOps (devsecops) */
ROADMAPS.push({
  "id": "devsecops",
  "title": "DevSecOps",
  "icon": "\ud83d\udee1\ufe0f",
  "color": "#10b981",
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
    ]
  }
});
