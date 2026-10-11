/* Atlas roadmap data: Backend Development (backend)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "backend",
  "title": "Backend Development",
  "icon": "⚙️",
  "color": "#a78bfa", "kind": "role",
  "tagline": "Power the logic behind the apps.",
  "desc": "APIs, databases, auth and deployment: build the engine room of software.",
  "root": {
    "t": "Pick a Language",
    "d": "Node.js, Python or Go. One deeply beats three shallowly.",
    "res": [
      [
        "Node.js Docs",
        "https://nodejs.org/en/docs"
      ],
      [
        "Python Tutorial",
        "https://docs.python.org/3/tutorial/"
      ]
    ],
    "children": [
      {
        "t": "REST APIs",
        "d": "Design clean endpoints. The backend's handshake.",
        "res": [
          [
            "MDN: HTTP",
            "https://developer.mozilla.org/en-US/docs/Web/HTTP"
          ],
          [
            "REST API Tutorial",
            "https://restfulapi.net/"
          ]
        ],
        "children": [
          {
            "t": "Routing & Controllers",
            "d": "Structure your endpoints.",
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
            "t": "Status Codes",
            "d": "Speak HTTP correctly.",
            "res": [
              [
                "MDN: Status Codes",
                "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
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
        "t": "SQL Databases",
        "d": "PostgreSQL. Model data, write queries, index smart.",
        "res": [
          [
            "PostgreSQL Tutorial",
            "https://www.postgresqltutorial.com/"
          ],
          [
            "SQLBolt",
            "https://sqlbolt.com/"
          ]
        ],
        "children": [
          {
            "t": "Schema Design",
            "d": "Tables that make sense.",
            "res": [
              [
                "Postgres Docs",
                "https://www.postgresql.org/docs/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Joins & Queries",
            "d": "Ask complex questions.",
            "res": [
              [
                "SQLBolt",
                "https://sqlbolt.com/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          }
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "Auth: JWT & OAuth",
        "d": "Who are you? Prove it, securely.",
        "res": [
          [
            "OWASP Auth Sheet",
            "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
          ],
          [
            "OAuth.net",
            "https://oauth.net/"
          ]
        ],
        "children": [
          {
            "t": "Password Hashing",
            "d": "bcrypt, never plaintext.",
            "res": [
              [
                "OWASP Cheatsheets",
                "https://cheatsheetseries.owasp.org/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Sessions vs Tokens",
            "d": "Pick your state.",
            "res": [
              [
                "OWASP",
                "https://owasp.org/"
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
        "t": "Caching with Redis",
        "d": "Speed up everything that matters.",
        "res": [
          [
            "Redis Docs",
            "https://redis.io/docs/"
          ],
          [
            "Redis University",
            "https://university.redis.com/"
          ]
        ],
        "children": [
          {
            "t": "Cache Patterns",
            "d": "When and what to cache.",
            "res": [
              [
                "Redis Docs",
                "https://redis.io/docs/"
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
        "t": "Docker Basics",
        "d": "Ship the same environment everywhere.",
        "badge": "LAB",
        "res": [
          [
            "Docker Get Started",
            "https://docs.docker.com/get-started/"
          ],
          [
            "Docker Curriculum",
            "https://docker-curriculum.com/"
          ]
        ],
        "children": [
          {
            "t": "Dockerfile",
            "d": "Build your images.",
            "res": [
              [
                "Docker Docs",
                "https://docs.docker.com/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Compose",
            "d": "Multi-container apps.",
            "res": [
              [
                "Docker Docs",
                "https://docs.docker.com/"
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
        "t": "Testing & CI",
        "d": "Automated tests and pipelines that guard quality.",
        "res": [
          [
            "GitHub Actions",
            "https://docs.github.com/en/actions"
          ],
          [
            "Martin Fowler on CI",
            "https://martinfowler.com/articles/continuousIntegration.html"
          ]
        ],
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Node.js",
        "d": "JavaScript on the server.",
        "res": [
          [
            "Node Learn",
            "https://nodejs.org/en/learn"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "Python",
        "d": "FastAPI and Flask world.",
        "res": [
          [
            "Python Docs",
            "https://docs.python.org/3/"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "Go",
        "d": "Simple, fast, compiled.",
        "res": [
          [
            "Go Tour",
            "https://go.dev/learn/"
          ]
        ],
        "lv": 2,
        "time": "~6h"
      }
    ],
    "lv": 0
  }
});
