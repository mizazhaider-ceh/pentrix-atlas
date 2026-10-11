/* Atlas roadmap data: Bug Bounty Hunting (bug-bounty)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
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
          }
        ],
        "lv": 3,
        "time": "~10h"
      }
    ],
    "lv": 0
  }
});
