/* Atlas roadmap data: Bug Bounty Hunting (bug-bounty)
   Schema: { t, d, lv, time, tip?, learn[], do[], tools[], res[[label,url]], pre[], badge, tag } */
ROADMAPS.push({
  "id": "bug-bounty",
  "title": "Bug Bounty Hunting",
  "icon": "🎯",
  "color": "#f43f5e",
  "tagline": "Get paid to hack, legally.",
  "desc": "From recon at scale to writeups that get paid: the complete hunter path.",
  "root": {
    "t": "The Hunter Mindset",
    "d": "Scope, rules of engagement, and how payouts work.",
    "res": [
      [
        "HackerOne Hacktivity",
        "https://hackerone.com/hacktivity"
      ],
      [
        "Bugcrowd",
        "https://www.bugcrowd.com/"
      ]
    ],
    "children": [
      {
        "t": "Web Fundamentals, Deep",
        "d": "You cannot hack what you do not understand.",
        "res": [
          [
            "PortSwigger Academy",
            "https://portswigger.net/web-security"
          ],
          [
            "MDN Web Docs",
            "https://developer.mozilla.org/"
          ]
        ],
        "children": [
          {
            "t": "HTTP Deep Dive",
            "d": "Methods, headers, cookies, CORS. The protocol of money.",
            "res": [
              [
                "MDN: HTTP",
                "https://developer.mozilla.org/en-US/docs/Web/HTTP"
              ],
              [
                "PortSwigger: HTTP",
                "https://portswigger.net/web-security"
              ]
            ],
            "children": [
              {
                "t": "Methods & Status Codes",
                "d": "Beyond GET and POST.",
                "res": [
                  [
                    "MDN: HTTP",
                    "https://developer.mozilla.org/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Headers & Cookies",
                "d": "Metadata matters.",
                "res": [
                  [
                    "MDN: HTTP",
                    "https://developer.mozilla.org/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              }
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "JavaScript for Hackers",
            "d": "DOM, XSS sinks and sources.",
            "res": [
              [
                "PortSwigger: XSS",
                "https://portswigger.net/web-security/cross-site-scripting"
              ],
              [
                "JavaScript.info",
                "https://javascript.info/"
              ]
            ],
            "children": [
              {
                "t": "DOM XSS Sinks",
                "d": "Where payloads land.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Prototype Pollution",
                "d": "Pollute to pop.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              }
            ],
            "lv": 1,
            "time": "~4h"
          }
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "Recon at Scale",
        "d": "More targets, more bugs. Automate everything.",
        "res": [
          [
            "Amass",
            "https://github.com/owasp-amass/amass"
          ],
          [
            "Subfinder",
            "https://github.com/projectdiscovery/subfinder"
          ]
        ],
        "children": [
          {
            "t": "Subdomain Enumeration",
            "d": "Find every door before knocking.",
            "res": [
              [
                "Subfinder",
                "https://github.com/projectdiscovery/subfinder"
              ],
              [
                "crt.sh",
                "https://crt.sh/"
              ]
            ],
            "children": [
              {
                "t": "Passive Enum",
                "d": "Quiet discovery.",
                "res": [
                  [
                    "Subfinder",
                    "https://github.com/projectdiscovery/subfinder"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "DNS Bruteforcing",
                "d": "Wordlist the DNS.",
                "res": [
                  [
                    "SecLists",
                    "https://github.com/danielmiessler/SecLists"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Content Discovery",
            "d": "Fuzz for hidden paths and files.",
            "res": [
              [
                "ffuf",
                "https://github.com/ffuf/ffuf"
              ],
              [
                "SecLists",
                "https://github.com/danielmiessler/SecLists"
              ]
            ],
            "children": [
              {
                "t": "Fuzzing",
                "d": "ffuf everything.",
                "res": [
                  [
                    "ffuf",
                    "https://github.com/ffuf/ffuf"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Wordlists",
                "d": "SecLists, curated.",
                "res": [
                  [
                    "SecLists",
                    "https://github.com/danielmiessler/SecLists"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 2,
            "time": "~6h"
          }
        ],
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Vulnerability Classes",
        "d": "Know the classics cold. They pay the most.",
        "res": [
          [
            "OWASP Top 10",
            "https://owasp.org/www-project-top-ten/"
          ],
          [
            "HackTricks",
            "https://book.hacktricks.xyz/"
          ]
        ],
        "children": [
          {
            "t": "IDOR & Access Control",
            "d": "The most common paid bug class.",
            "res": [
              [
                "PortSwigger: Access Control",
                "https://portswigger.net/web-security/access-control"
              ],
              [
                "OWASP Top 10",
                "https://owasp.org/www-project-top-ten/"
              ]
            ],
            "children": [
              {
                "t": "IDOR Patterns",
                "d": "Predictable IDs leak.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Forced Browsing",
                "d": "Guess the hidden URL.",
                "res": [
                  [
                    "OWASP",
                    "https://owasp.org/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "SSRF & XXE",
            "d": "Make servers attack themselves.",
            "badge": "ADV",
            "res": [
              [
                "PortSwigger: SSRF",
                "https://portswigger.net/web-security/ssrf"
              ],
              [
                "HackTricks",
                "https://book.hacktricks.xyz/"
              ]
            ],
            "children": [
              {
                "t": "Blind SSRF",
                "d": "No output, still wins.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "XXE Payloads",
                "d": "XML attacks.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Race Conditions",
            "d": "Timing is a vulnerability.",
            "badge": "ADV",
            "res": [
              [
                "PortSwigger: Race Conditions",
                "https://portswigger.net/web-security/race-conditions"
              ],
              [
                "OWASP",
                "https://owasp.org/"
              ]
            ],
            "children": [
              {
                "t": "Single-Endpoint Races",
                "d": "Timing windows.",
                "res": [
                  [
                    "PortSwigger",
                    "https://portswigger.net/web-security"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 2,
            "time": "~6h"
          }
        ],
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Hunter Methodology",
        "d": "System beats luck. Hunt like a professional.",
        "res": [
          [
            "HackerOne",
            "https://hackerone.com/"
          ],
          [
            "Intigriti",
            "https://www.intigriti.com/"
          ]
        ],
        "children": [
          {
            "t": "Target Selection",
            "d": "Pick programs you can actually win.",
            "res": [
              [
                "HackerOne Directory",
                "https://hackerone.com/directory"
              ],
              [
                "Intigriti",
                "https://www.intigriti.com/"
              ]
            ],
            "children": [
              {
                "t": "Program Recon",
                "d": "Know your target.",
                "res": [
                  [
                    "HackerOne",
                    "https://hackerone.com/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Report Writing",
            "d": "Clear reports get paid. Vague ones get closed.",
            "res": [
              [
                "OWASP Disclosure Sheet",
                "https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"
              ],
              [
                "HackerOne Hacktivity",
                "https://hackerone.com/hacktivity"
              ]
            ],
            "children": [
              {
                "t": "Impact & Severity",
                "d": "Sell the bug.",
                "res": [
                  [
                    "HackerOne",
                    "https://hackerone.com/hacktivity"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              }
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Bug Bounty Hunting",
            "d": "Get paid for finding real bugs.",
            "lv": 2,
            "time": "~ongoing",
            "learn": [
              "How platforms work and how to read a program's scope/rules",
              "Picking a target and a repeatable methodology to hunt it",
              "Triage, duplicates, and managing your own expectations"
            ],
            "do": [
              "Create HackerOne & Bugcrowd accounts and read 3 program policies",
              "Pick ONE program with a wide scope and recon it thoroughly",
              "Read 10 disclosed reports to learn what real bugs look like"
            ],
            "tools": [
              "HackerOne",
              "Bugcrowd",
              "Intigriti"
            ],
            "res": [
              [
                "HackerOne Hacktivity (disclosed bugs)",
                "https://hackerone.com/hacktivity"
              ],
              [
                "Bugcrowd University",
                "https://www.bugcrowd.com/hackers/bugcrowd-university/"
              ]
            ]
          },
          {
            "t": "Writing Great Reports",
            "d": "The most undervalued skill in the field.",
            "lv": 2,
            "time": "~2h",
            "tip": "A critical bug with a confusing report gets a low bounty (or rejected). A clear report with impact + reproduction steps gets paid fast. This single skill changes your income.",
            "learn": [
              "Report anatomy: title, summary, impact, steps to reproduce, PoC, remediation",
              "Writing for a busy triager, clarity and impact first",
              "Good screenshots, request/response evidence, and severity (CVSS)"
            ],
            "do": [
              "Take a lab finding and write a full professional report for it",
              "Score it with a CVSS calculator and justify the rating",
              "Get feedback or compare against a public disclosed report"
            ],
            "tools": [
              "CVSS Calculator"
            ],
            "res": [
              [
                "CVSS Calculator",
                "https://www.first.org/cvss/calculator/3.1"
              ],
              [
                "How to write a good report",
                "https://docs.hackerone.com/en/articles/8470531-quality-reports"
              ],
              [
                "OWASP Disclosure Cheat Sheet",
                "https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"
              ]
            ],
            "tag": "opt"
          },
          {
            "t": "Certifications & Portfolio",
            "d": "Prove your skills to employers.",
            "lv": 2,
            "time": "~varies",
            "learn": [
              "Beginner-friendly certs (eJPT, PNPT) vs the respected OSCP",
              "Building a public portfolio: write-ups, GitHub tools, CTF profiles",
              "Picking a cert that matches your goal (job vs bounty)"
            ],
            "do": [
              "Start a blog and publish one detailed lab/CTF write-up",
              "Make a CTF profile (TryHackMe/HTB) and climb a bit",
              "Pick a first cert target and plan the study path"
            ],
            "tools": [
              "OSCP",
              "PNPT",
              "eJPT",
              "CPTS"
            ],
            "res": [
              [
                "TCM Security (PNPT/PEH)",
                "https://academy.tcm-sec.com/"
              ],
              [
                "OffSec OSCP",
                "https://www.offsec.com/courses/pen-200/"
              ],
              [
                "CompTIA Security+",
                "https://www.comptia.org/certifications/security"
              ]
            ]
          },
          {
            "t": "Community & Never Stop Learning",
            "d": "The field changes every week.",
            "lv": 1,
            "time": "~ongoing",
            "tip": "The hackers who stay relevant follow researchers, read new disclosures, and keep practicing. Stagnation is the real vulnerability.",
            "learn": [
              "Where security news/research lives (Twitter/X, blogs, newsletters)",
              "Learning from disclosed reports and CTF write-ups",
              "Giving back: teaching, tooling, and translations"
            ],
            "do": [
              "Follow 10 active security researchers and read weekly",
              "Subscribe to one newsletter (e.g. tl;dr sec) and one CTF feed",
              "Contribute one fix/translation to an open-source security project"
            ],
            "res": [
              [
                "tl;dr sec newsletter",
                "https://tldrsec.com/"
              ],
              [
                "Awesome Hacking",
                "https://github.com/Hack-with-Github/Awesome-Hacking"
              ],
              [
                "r/netsec",
                "https://www.reddit.com/r/netsec/"
              ]
            ],
            "tag": "opt"
          }
        ],
        "lv": 3,
        "time": "~10h"
      }
    ],
    "lv": 0
  },
  "kind": "role"
});
