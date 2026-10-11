/* Atlas roadmap data: Cyber Security (cyber-security)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "cyber-security",
  "title": "Cyber Security",
  "icon": "🛡️",
  "color": "#2dd4bf",
  "tagline": "From zero to offensive security pro.",
  "desc": "The complete hacker path: fundamentals, recon, web hacking, exploitation and going pro. Every node is a skill with free resources.",
  "root": {
    "t": "The Hacker Mindset",
    "d": "Ethics, legality, and how hackers think. This is the non-negotiable first step.",
    "res": [
      [
        "HackerOne Hacktivity",
        "https://hackerone.com/hacktivity"
      ],
      [
        "OWASP Testing Guide",
        "https://owasp.org/www-project-web-security-testing-guide/"
      ]
    ],
    "children": [
      {
        "t": "Computer & Network Basics",
        "d": "How computers and networks actually work under the hood.",
        "res": [
          [
            "Cloudflare: OSI Model",
            "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
          ],
          [
            "CIDR.xyz",
            "https://cidr.xyz/"
          ]
        ],
        "children": [
          {
            "t": "Linux Command Line",
            "d": "Your home turf. Live in the terminal until it feels like home.",
            "res": [
              [
                "LinuxCommand.org",
                "https://linuxcommand.org/"
              ],
              [
                "OverTheWire Bandit",
                "https://overthewire.org/wargames/bandit/"
              ]
            ],
            "children": [
              {
                "t": "File Navigation",
                "d": "cd, ls, find at speed.",
                "res": [
                  [
                    "Linux Journey",
                    "https://linuxjourney.com/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Users & Permissions",
                "d": "chmod, chown, sudo.",
                "res": [
                  [
                    "Linux Journey",
                    "https://linuxjourney.com/"
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
            "t": "Networking: TCP/IP & DNS",
            "d": "Packets, ports, protocols. The language of the network.",
            "res": [
              [
                "Cloudflare: What is DNS",
                "https://www.cloudflare.com/learning/dns/what-is-dns/"
              ],
              [
                "Wireshark",
                "https://www.wireshark.org/"
              ]
            ],
            "children": [
              {
                "t": "Subnetting Basics",
                "d": "CIDR without tears.",
                "res": [
                  [
                    "CIDR.xyz",
                    "https://cidr.xyz/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Common Ports",
                "d": "The 20 ports that matter.",
                "res": [
                  [
                    "Nmap Book",
                    "https://nmap.org/book/"
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
            "t": "Wireshark",
            "d": "See the invisible. Read packets like a book.",
            "res": [
              [
                "Wireshark Docs",
                "https://www.wireshark.org/docs/"
              ],
              [
                "Sample Captures",
                "https://wiki.wireshark.org/SampleCaptures"
              ]
            ],
            "children": [
              {
                "t": "Display Filters",
                "d": "Slice traffic precisely.",
                "res": [
                  [
                    "Wireshark Docs",
                    "https://www.wireshark.org/docs/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Follow TCP Streams",
                "d": "Rebuild conversations.",
                "res": [
                  [
                    "Wireshark Docs",
                    "https://www.wireshark.org/docs/"
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
        "t": "Programming for Hackers",
        "d": "Code is your superpower. Automate everything you do twice.",
        "res": [
          [
            "Official Python Tutorial",
            "https://docs.python.org/3/tutorial/"
          ],
          [
            "web.dev Learn",
            "https://web.dev/learn"
          ]
        ],
        "children": [
          {
            "t": "Python",
            "d": "The hacker's first language. Sockets, requests, scripting.",
            "res": [
              [
                "Python Tutorial",
                "https://docs.python.org/3/tutorial/"
              ],
              [
                "Automate the Boring Stuff",
                "https://automatetheboringstuff.com/"
              ]
            ],
            "children": [
              {
                "t": "Requests & Web",
                "d": "Talk HTTP in Python.",
                "res": [
                  [
                    "Python Docs",
                    "https://docs.python.org/3/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Scripting Tools",
                "d": "argparse, sockets, subprocess.",
                "res": [
                  [
                    "Python Docs",
                    "https://docs.python.org/3/"
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
            "t": "Bash Scripting",
            "d": "The glue of the terminal. Chain tools into weapons.",
            "res": [
              [
                "Bash Hackers Wiki",
                "https://wiki.bash-hackers.org/"
              ],
              [
                "ShellCheck",
                "https://www.shellcheck.net/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Web Tech: HTML & JS",
            "d": "To break the web, you must know the web.",
            "res": [
              [
                "MDN Web Docs",
                "https://developer.mozilla.org/"
              ],
              [
                "web.dev",
                "https://web.dev/"
              ]
            ],
            "children": [
              {
                "t": "DOM & Events",
                "d": "What JavaScript can touch.",
                "res": [
                  [
                    "MDN",
                    "https://developer.mozilla.org/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Google Dorking",
                "d": "Search like a spy.",
                "res": [
                  [
                    "Google Hacking DB",
                    "https://www.exploit-db.com/google-hacking-database"
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
        "t": "Reconnaissance",
        "d": "Information gathering. The quieter you are, the better you are.",
        "res": [
          [
            "OSINT Framework",
            "https://osintframework.com/"
          ],
          [
            "Nmap",
            "https://nmap.org/"
          ]
        ],
        "children": [
          {
            "t": "OSINT",
            "d": "Intelligence from public sources. People leak everything.",
            "res": [
              [
                "OSINT Framework",
                "https://osintframework.com/"
              ],
              [
                "theHarvester",
                "https://github.com/laramies/theHarvester"
              ]
            ],
            "children": [
              {
                "t": "Social Media Intel",
                "d": "Public profiles, deep insights.",
                "res": [
                  [
                    "OSINT Framework",
                    "https://osintframework.com/"
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
            "t": "Nmap Scanning",
            "d": "Map the attack surface: hosts, ports, services.",
            "res": [
              [
                "Nmap Man Page",
                "https://nmap.org/book/man.html"
              ],
              [
                "HackTricks Network",
                "https://book.hacktricks.xyz/network-services-pentesting"
              ]
            ],
            "children": [
              {
                "t": "Scan Types",
                "d": "SYN, connect, UDP.",
                "res": [
                  [
                    "Nmap Book",
                    "https://nmap.org/book/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "NSE Scripts",
                "d": "Nmap's plugin arsenal.",
                "res": [
                  [
                    "Nmap Book",
                    "https://nmap.org/book/"
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
        "t": "Web Hacking",
        "d": "Where the bounties live. Master the request.",
        "res": [
          [
            "PortSwigger Academy",
            "https://portswigger.net/web-security"
          ],
          [
            "OWASP Top 10",
            "https://owasp.org/www-project-top-ten/"
          ]
        ],
        "children": [
          {
            "t": "Burp Suite",
            "d": "The web hacker's workbench. Intercept everything.",
            "res": [
              [
                "Burp Documentation",
                "https://portswigger.net/burp/documentation"
              ],
              [
                "PortSwigger Academy",
                "https://portswigger.net/web-security"
              ]
            ],
            "children": [
              {
                "t": "Proxy & Intercept",
                "d": "Own the traffic.",
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
                "t": "Repeater & Intruder",
                "d": "Replay and automate.",
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
            "t": "SQL Injection",
            "d": "Make the database talk. The classic killer.",
            "res": [
              [
                "PortSwigger: SQLi",
                "https://portswigger.net/web-security/sql-injection"
              ],
              [
                "PayloadsAllTheThings",
                "https://github.com/swisskyrepo/PayloadsAllTheThings"
              ]
            ],
            "children": [
              {
                "t": "Union-Based",
                "d": "Read the whole database.",
                "res": [
                  [
                    "PortSwigger SQLi",
                    "https://portswigger.net/web-security/sql-injection"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Blind SQLi",
                "d": "When errors go silent.",
                "badge": "ADV",
                "res": [
                  [
                    "PortSwigger SQLi",
                    "https://portswigger.net/web-security/sql-injection"
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
            "t": "XSS & Broken Access Control",
            "d": "Client-side bugs and IDORs. Bug bounty bread and butter.",
            "res": [
              [
                "PortSwigger: XSS",
                "https://portswigger.net/web-security/cross-site-scripting"
              ],
              [
                "PortSwigger: Access Control",
                "https://portswigger.net/web-security/access-control"
              ]
            ],
            "children": [
              {
                "t": "Reflected & Stored XSS",
                "d": "Two flavors, one impact.",
                "res": [
                  [
                    "PortSwigger XSS",
                    "https://portswigger.net/web-security/cross-site-scripting"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "IDOR Testing",
                "d": "Change the ID, own the data.",
                "res": [
                  [
                    "PortSwigger Access Control",
                    "https://portswigger.net/web-security/access-control"
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
        "t": "Exploitation",
        "d": "Turn vulnerabilities into access.",
        "res": [
          [
            "Metasploit Docs",
            "https://docs.metasploit.com/"
          ],
          [
            "HackTricks",
            "https://book.hacktricks.xyz/"
          ]
        ],
        "children": [
          {
            "t": "Metasploit Framework",
            "d": "The exploitation framework. Scan to shell.",
            "badge": "LAB",
            "res": [
              [
                "Metasploit Docs",
                "https://docs.metasploit.com/"
              ],
              [
                "Metasploitable 3",
                "https://github.com/rapid7/metasploitable3"
              ]
            ],
            "children": [
              {
                "t": "Modules & Payloads",
                "d": "Pick your weapon.",
                "res": [
                  [
                    "Metasploit Docs",
                    "https://docs.rapid7.com/metasploit/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Meterpreter",
                "d": "The post-exploitation shell.",
                "res": [
                  [
                    "Metasploit Docs",
                    "https://docs.rapid7.com/metasploit/"
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
            "t": "Password Attacks",
            "d": "Crack the hashes, spray the logins.",
            "badge": "LAB",
            "res": [
              [
                "Hashcat Wiki",
                "https://hashcat.net/wiki/"
              ],
              [
                "revshells.com",
                "https://www.revshells.com/"
              ]
            ],
            "children": [
              {
                "t": "Hash Cracking",
                "d": "hashcat fundamentals.",
                "res": [
                  [
                    "hashcat wiki",
                    "https://hashcat.net/wiki/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Wordlists & Rules",
                "d": "SecLists plus mutations.",
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
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Privilege Escalation",
            "d": "From low user to root. The real game.",
            "badge": "ADV",
            "res": [
              [
                "GTFOBins",
                "https://gtfobins.github.io/"
              ],
              [
                "HackTricks PrivEsc",
                "https://book.hacktricks.xyz/linux-hardening/privilege-escalation"
              ]
            ],
            "children": [
              {
                "t": "Linux Privesc",
                "d": "SUID, sudo, cron, kernels.",
                "badge": "ADV",
                "res": [
                  [
                    "HackTricks",
                    "https://book.hacktricks.xyz/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Windows Privesc",
                "d": "Services, tokens, potatoes.",
                "badge": "ADV",
                "res": [
                  [
                    "HackTricks",
                    "https://book.hacktricks.xyz/"
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
      },
      {
        "t": "Go Pro",
        "d": "Turn skill into career.",
        "res": [
          [
            "HackerOne",
            "https://hackerone.com/"
          ],
          [
            "r/netsec",
            "https://www.reddit.com/r/netsec/"
          ]
        ],
        "children": [
          {
            "t": "Bug Bounty Hunting",
            "d": "Get paid to hack, legally. Start with VDPs.",
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
                "t": "Platforms & Scope",
                "d": "HackerOne, Bugcrowd, Intigriti.",
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
            "t": "Reports & Writeups",
            "d": "If you cannot write it, you cannot sell it.",
            "res": [
              [
                "OWASP Disclosure Sheet",
                "https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"
              ],
              [
                "PortSwigger Blog",
                "https://portswigger.net/research"
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
    "lv": 0
  }
});
