/* Atlas roadmap data: Computer Networking (networking)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "networking",
  "title": "Computer Networking",
  "icon": "🌐",
  "color": "#38bdf8",
  "tagline": "Master the wires of the world.",
  "desc": "From packets to firewalls: networking for hackers, devs and the curious.",
  "root": {
    "t": "Networks 101",
    "d": "What actually happens when you open a website.",
    "res": [
      [
        "Cloudflare Learning",
        "https://www.cloudflare.com/learning/"
      ],
      [
        "Practical Networking",
        "https://www.practicalnetworking.net/"
      ]
    ],
    "children": [
      {
        "t": "OSI & TCP/IP",
        "d": "The models that explain everything.",
        "res": [
          [
            "Cloudflare: OSI Model",
            "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"
          ],
          [
            "Practical Networking",
            "https://www.practicalnetworking.net/"
          ]
        ],
        "children": [
          {
            "t": "IP & Subnetting",
            "d": "Addressing and CIDR math. Do it in your head.",
            "res": [
              [
                "CIDR.xyz",
                "https://cidr.xyz/"
              ],
              [
                "Practical Networking Subnetting",
                "https://www.practicalnetworking.net/"
              ]
            ],
            "children": [
              {
                "t": "CIDR Notation",
                "d": "Slash math.",
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
                "t": "Subnet Practice",
                "d": "Drill it until easy.",
                "res": [
                  [
                    "Practical Networking",
                    "https://www.practicalnetworking.net/"
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
            "t": "DNS Deep Dive",
            "d": "The phonebook of the internet.",
            "res": [
              [
                "howdns.works",
                "https://howdns.works/"
              ],
              [
                "Cloudflare: What is DNS",
                "https://www.cloudflare.com/learning/dns/what-is-dns/"
              ]
            ],
            "children": [
              {
                "t": "Record Types",
                "d": "A, AAAA, MX, TXT.",
                "res": [
                  [
                    "howdns.works",
                    "https://howdns.works/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "DNS Security",
                "d": "Spoofing and DNSSEC.",
                "res": [
                  [
                    "Cloudflare",
                    "https://www.cloudflare.com/learning/"
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
        "t": "Routing & Switching",
        "d": "How packets find their way across the world.",
        "res": [
          [
            "Practical Networking",
            "https://www.practicalnetworking.net/"
          ],
          [
            "Cloudflare Learning",
            "https://www.cloudflare.com/learning/"
          ]
        ],
        "children": [
          {
            "t": "Routing Tables",
            "d": "Read the map.",
            "res": [
              [
                "Practical Networking",
                "https://www.practicalnetworking.net/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "VLANs",
            "d": "Segment your networks.",
            "res": [
              [
                "Practical Networking",
                "https://www.practicalnetworking.net/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          }
        ],
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Wireshark Mastery",
        "d": "Read the wire. See every packet.",
        "badge": "LAB",
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
            "t": "Capture Filters",
            "d": "Capture less, see more.",
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
            "t": "Traffic Analysis",
            "d": "Find the anomaly.",
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
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Network Services",
        "d": "DHCP, NAT, firewalls. The infrastructure you touch daily.",
        "res": [
          [
            "Cloudflare Learning",
            "https://www.cloudflare.com/learning/"
          ],
          [
            "Practical Networking",
            "https://www.practicalnetworking.net/"
          ]
        ],
        "children": [
          {
            "t": "Firewalls & NAT",
            "d": "What blocks you, and why.",
            "res": [
              [
                "Cloudflare: Firewalls",
                "https://www.cloudflare.com/learning/"
              ],
              [
                "Practical Networking",
                "https://www.practicalnetworking.net/"
              ]
            ],
            "children": [
              {
                "t": "iptables Basics",
                "d": "Linux firewalling.",
                "res": [
                  [
                    "netfilter",
                    "https://www.netfilter.org/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "NAT Types",
                "d": "Translate addresses.",
                "res": [
                  [
                    "Cloudflare",
                    "https://www.cloudflare.com/learning/"
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
      }
    ],
    "lv": 0
  }
});
