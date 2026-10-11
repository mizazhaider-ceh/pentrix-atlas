/* Atlas roadmap data: Frontend Development (frontend)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "frontend",
  "title": "Frontend Development",
  "icon": "🎨",
  "color": "#60a5fa", "kind": "role",
  "tagline": "Build beautiful things for the web.",
  "desc": "From HTML to React: everything you need to craft modern user interfaces.",
  "root": {
    "t": "Internet & How the Web Works",
    "d": "DNS, HTTP, browsers. Know the platform you build on.",
    "res": [
      [
        "web.dev Learn",
        "https://web.dev/learn"
      ],
      [
        "MDN: How the Web Works",
        "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
      ]
    ],
    "children": [
      {
        "t": "HTML",
        "d": "The skeleton. Semantic markup done right.",
        "res": [
          [
            "MDN HTML",
            "https://developer.mozilla.org/en-US/docs/Web/HTML"
          ],
          [
            "freeCodeCamp",
            "https://www.freecodecamp.org/"
          ]
        ],
        "children": [
          {
            "t": "Semantic HTML",
            "d": "Tags with meaning.",
            "res": [
              [
                "MDN: HTML",
                "https://developer.mozilla.org/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Forms & Inputs",
            "d": "Every input type.",
            "res": [
              [
                "MDN: Forms",
                "https://developer.mozilla.org/"
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
        "t": "CSS",
        "d": "The skin. Layout, flexbox, grid, animations.",
        "res": [
          [
            "MDN CSS",
            "https://developer.mozilla.org/en-US/docs/Web/CSS"
          ],
          [
            "CSS Tricks",
            "https://css-tricks.com/"
          ]
        ],
        "children": [
          {
            "t": "Flexbox & Grid",
            "d": "Layout superpowers.",
            "res": [
              [
                "MDN: CSS",
                "https://developer.mozilla.org/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Responsive Design",
            "d": "Mobile first, always.",
            "res": [
              [
                "web.dev",
                "https://web.dev/learn/css"
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
        "t": "JavaScript (ES6+)",
        "d": "The muscle. The language of the browser.",
        "res": [
          [
            "JavaScript.info",
            "https://javascript.info/"
          ],
          [
            "MDN JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          ]
        ],
        "children": [
          {
            "t": "DOM Manipulation",
            "d": "Select and change anything.",
            "res": [
              [
                "MDN: DOM",
                "https://developer.mozilla.org/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Async JS & Fetch",
            "d": "Promises, async/await.",
            "res": [
              [
                "JavaScript.info",
                "https://javascript.info/"
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
        "t": "Git & GitHub",
        "d": "Version control. Non-negotiable for every dev.",
        "res": [
          [
            "Pro Git Book",
            "https://git-scm.com/book/en/v2"
          ],
          [
            "GitHub Skills",
            "https://skills.github.com/"
          ]
        ],
        "children": [
          {
            "t": "Branching",
            "d": "Feature branches.",
            "res": [
              [
                "Git Docs",
                "https://git-scm.com/doc"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Pull Requests",
            "d": "Collaborate cleanly.",
            "res": [
              [
                "GitHub Docs",
                "https://docs.github.com/"
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
        "t": "npm & Vite Tooling",
        "d": "Packages, bundlers, dev servers.",
        "res": [
          [
            "npm Docs",
            "https://docs.npmjs.com/"
          ],
          [
            "Vite",
            "https://vitejs.dev/"
          ]
        ],
        "children": [
          {
            "t": "package.json",
            "d": "Scripts and dependencies.",
            "res": [
              [
                "npm Docs",
                "https://docs.npmjs.com/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Build & Deploy",
            "d": "Bundle for production.",
            "badge": "PROJECT",
            "res": [
              [
                "Vite Guide",
                "https://vite.dev/guide/"
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
        "t": "React",
        "d": "The UI library that runs the web.",
        "res": [
          [
            "React Docs",
            "https://react.dev/"
          ],
          [
            "freeCodeCamp React",
            "https://www.freecodecamp.org/"
          ]
        ],
        "children": [
          {
            "t": "TypeScript",
            "d": "JavaScript with a safety net. Industry standard now.",
            "res": [
              [
                "TypeScript Handbook",
                "https://www.typescriptlang.org/docs/handbook/intro.html"
              ],
              [
                "TypeScript Playground",
                "https://www.typescriptlang.org/play"
              ]
            ],
            "children": [
              {
                "t": "Types & Interfaces",
                "d": "Shape your data.",
                "res": [
                  [
                    "TS Docs",
                    "https://www.typescriptlang.org/docs/"
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
            "t": "Testing with Vitest",
            "d": "Prove your UI works.",
            "res": [
              [
                "Vitest Docs",
                "https://vitest.dev/"
              ],
              [
                "Testing Library",
                "https://testing-library.com/"
              ]
            ],
            "children": [
              {
                "t": "Unit Tests",
                "d": "Test the small stuff.",
                "res": [
                  [
                    "Vitest",
                    "https://vitest.dev/"
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
        "t": "Deploy: Vercel & Netlify",
        "d": "Ship it to the world in minutes.",
        "res": [
          [
            "Vercel Docs",
            "https://vercel.com/docs"
          ],
          [
            "Netlify Docs",
            "https://docs.netlify.com/"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      }
    ],
    "lv": 0
  }
});
