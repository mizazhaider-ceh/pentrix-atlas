/* Atlas roadmap data: DevOps (devops)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "devops",
  "title": "DevOps",
  "icon": "♾️",
  "color": "#f472b6",
  "tagline": "Ship fast, break nothing.",
  "desc": "CI/CD, containers, cloud and automation: the art of reliable delivery.",
  "root": {
    "t": "Linux & Scripting",
    "d": "The foundation of all operations.",
    "res": [
      [
        "LinuxCommand.org",
        "https://linuxcommand.org/"
      ],
      [
        "OverTheWire",
        "https://overthewire.org/wargames/bandit/"
      ]
    ],
    "children": [
      {
        "t": "Git Deeply",
        "d": "Branching strategies, rebasing, hooks.",
        "res": [
          [
            "Pro Git Book",
            "https://git-scm.com/book/en/v2"
          ],
          [
            "Atlassian Git Tutorials",
            "https://www.atlassian.com/git/tutorials"
          ]
        ],
        "children": [
          {
            "t": "Branching Strategies",
            "d": "GitFlow vs trunk-based.",
            "res": [
              [
                "Atlassian Git",
                "https://www.atlassian.com/git"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Rebase & Merge",
            "d": "Keep history clean.",
            "res": [
              [
                "Git Docs",
                "https://git-scm.com/doc"
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
        "t": "CI/CD: GitHub Actions",
        "d": "Automate build, test and deploy.",
        "res": [
          [
            "GitHub Actions Docs",
            "https://docs.github.com/en/actions"
          ],
          [
            "Awesome Actions",
            "https://github.com/sdras/awesome-actions"
          ]
        ],
        "children": [
          {
            "t": "Workflows",
            "d": "YAML pipelines.",
            "res": [
              [
                "GitHub Actions",
                "https://docs.github.com/actions"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Secrets & Envs",
            "d": "Keep secrets secret.",
            "res": [
              [
                "GitHub Actions",
                "https://docs.github.com/actions"
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
        "t": "Docker",
        "d": "Containers: build once, run anywhere.",
        "res": [
          [
            "Docker Docs",
            "https://docs.docker.com/"
          ],
          [
            "Play with Docker",
            "https://labs.play-with-docker.com/"
          ]
        ],
        "children": [
          {
            "t": "Images & Containers",
            "d": "Build and run.",
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
            "t": "Volumes & Networks",
            "d": "Persist and connect.",
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
        "t": "Kubernetes",
        "d": "Orchestrate containers at scale.",
        "badge": "LAB",
        "res": [
          [
            "Kubernetes Basics",
            "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
          ],
          [
            "k8s Docs",
            "https://kubernetes.io/docs/home/"
          ]
        ],
        "children": [
          {
            "t": "Pods & Deployments",
            "d": "The fundamentals.",
            "res": [
              [
                "K8s Docs",
                "https://kubernetes.io/docs/"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Services & Ingress",
            "d": "Expose your apps.",
            "res": [
              [
                "K8s Docs",
                "https://kubernetes.io/docs/"
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
        "t": "Cloud: AWS",
        "d": "EC2, S3, IAM. The cloud vocabulary.",
        "res": [
          [
            "AWS Skill Builder",
            "https://skillbuilder.aws/"
          ],
          [
            "AWS Docs",
            "https://docs.aws.amazon.com/"
          ]
        ],
        "children": [
          {
            "t": "EC2 & S3",
            "d": "Compute and storage.",
            "res": [
              [
                "AWS Docs",
                "https://docs.aws.amazon.com/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "IAM Basics",
            "d": "Least privilege.",
            "res": [
              [
                "AWS IAM",
                "https://docs.aws.amazon.com/iam/"
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
        "t": "Terraform (IaC)",
        "d": "Infrastructure as code. Version your servers.",
        "badge": "LAB",
        "res": [
          [
            "Terraform Tutorials",
            "https://developer.hashicorp.com/terraform/tutorials"
          ],
          [
            "Terraform Docs",
            "https://developer.hashicorp.com/terraform/docs"
          ]
        ],
        "children": [
          {
            "t": "State & Resources",
            "d": "Track your infra.",
            "res": [
              [
                "Terraform Docs",
                "https://developer.hashicorp.com/terraform"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Modules",
            "d": "Reusable infrastructure.",
            "res": [
              [
                "Terraform Docs",
                "https://developer.hashicorp.com/terraform"
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
        "t": "Monitoring",
        "d": "Prometheus, Grafana. If you cannot see it, you cannot run it.",
        "res": [
          [
            "Prometheus Docs",
            "https://prometheus.io/docs/"
          ],
          [
            "Grafana Tutorials",
            "https://grafana.com/tutorials/"
          ]
        ],
        "children": [
          {
            "t": "Prometheus & Grafana",
            "d": "Metrics that matter.",
            "res": [
              [
                "Prometheus",
                "https://prometheus.io/docs/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Centralized Logging",
            "d": "One place for logs.",
            "res": [
              [
                "Grafana Loki",
                "https://grafana.com/oss/loki/"
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
        "t": "Bash Basics",
        "d": "Script the boring parts.",
        "res": [
          [
            "Bash Guide",
            "https://tldp.org/LDP/abs/html/"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      },
      {
        "t": "SSH & Servers",
        "d": "Keys, config, hardening.",
        "res": [
          [
            "SSH Academy",
            "https://www.ssh.com/academy/ssh"
          ]
        ],
        "lv": 1,
        "time": "~4h"
      }
    ],
    "lv": 0
  }
});
