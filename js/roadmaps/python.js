/* Atlas roadmap data: Python (python)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "python",
  "title": "Python",
  "icon": "🐍",
  "color": "#facc15", "kind": "skill",
  "tagline": "The most versatile language on earth.",
  "desc": "From automation scripts to AI: master Python step by step.",
  "root": {
    "t": "Python Basics",
    "d": "Syntax, data types, loops, functions. The ABCs.",
    "res": [
      [
        "Official Tutorial",
        "https://docs.python.org/3/tutorial/"
      ],
      [
        "Python.org Beginner Guide",
        "https://wiki.python.org/moin/BeginnersGuide"
      ]
    ],
    "children": [
      {
        "t": "OOP & Modules",
        "d": "Classes, objects, and organizing real code.",
        "res": [
          [
            "Real Python OOP",
            "https://realpython.com/python3-object-oriented-programming/"
          ],
          [
            "Python Modules",
            "https://docs.python.org/3/tutorial/modules.html"
          ]
        ],
        "children": [
          {
            "t": "Classes",
            "d": "Objects in Python.",
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
            "t": "Imports & Packages",
            "d": "Organize your code.",
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
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Virtual Envs & pip",
        "d": "Isolated environments. Never break system Python.",
        "res": [
          [
            "venv Docs",
            "https://docs.python.org/3/library/venv.html"
          ],
          [
            "pip Guide",
            "https://pip.pypa.io/en/stable/"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "Requests & APIs",
        "d": "Talk to the internet from Python.",
        "res": [
          [
            "Requests Docs",
            "https://requests.readthedocs.io/"
          ],
          [
            "HTTPX",
            "https://www.python-httpx.org/"
          ]
        ],
        "children": [
          {
            "t": "REST Clients",
            "d": "GET and POST with requests.",
            "res": [
              [
                "Requests Docs",
                "https://requests.readthedocs.io/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "JSON Handling",
            "d": "Parse everything.",
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
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Automation Scripts",
        "d": "Rename 1000 files in 3 lines. Feel the power.",
        "res": [
          [
            "Automate the Boring Stuff",
            "https://automatetheboringstuff.com/"
          ],
          [
            "Real Python",
            "https://realpython.com/"
          ]
        ],
        "children": [
          {
            "t": "File Automation",
            "d": "os, shutil, pathlib.",
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
            "t": "Web Scraping",
            "d": "BeautifulSoup basics.",
            "badge": "PROJECT",
            "res": [
              [
                "BS4 Docs",
                "https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
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
        "t": "Web: FastAPI",
        "d": "Build blazing APIs with modern Python.",
        "badge": "PROJECT",
        "res": [
          [
            "FastAPI Tutorial",
            "https://fastapi.tiangolo.com/tutorial/"
          ],
          [
            "Flask Docs",
            "https://flask.palletsprojects.com/"
          ]
        ],
        "children": [
          {
            "t": "Routing",
            "d": "Endpoints, fast.",
            "res": [
              [
                "FastAPI",
                "https://fastapi.tiangolo.com/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Validation",
            "d": "Pydantic models.",
            "res": [
              [
                "FastAPI",
                "https://fastapi.tiangolo.com/"
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
        "t": "Data: pandas & numpy",
        "d": "Crunch numbers like a data scientist.",
        "res": [
          [
            "pandas Getting Started",
            "https://pandas.pydata.org/docs/getting_started/"
          ],
          [
            "Kaggle Learn",
            "https://www.kaggle.com/learn"
          ]
        ],
        "children": [
          {
            "t": "DataFrames",
            "d": "Think in tables.",
            "res": [
              [
                "pandas Docs",
                "https://pandas.pydata.org/docs/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Plotting",
            "d": "matplotlib quickstart.",
            "res": [
              [
                "Matplotlib",
                "https://matplotlib.org/"
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
        "t": "Data Types",
        "d": "Lists, dicts, sets.",
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
        "t": "Control Flow",
        "d": "if, for, while.",
        "res": [
          [
            "Python Docs",
            "https://docs.python.org/3/"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      }
    ],
    "lv": 0
  }
});
