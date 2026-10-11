/* Atlas roadmap data: Cloud Computing (cloud)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "cloud",
  "title": "Cloud Computing",
  "icon": "☁️",
  "color": "#e879f9", "kind": "skill",
  "tagline": "Own the cloud.",
  "desc": "AWS core services and cloud security: build it, then break it (legally).",
  "root": {
    "t": "Cloud Concepts",
    "d": "Regions, zones, and the shared responsibility model.",
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
        "t": "AWS Core Services",
        "d": "EC2, S3, VPC, IAM. The big four.",
        "res": [
          [
            "AWS Docs",
            "https://docs.aws.amazon.com/"
          ],
          [
            "AWS Skill Builder",
            "https://skillbuilder.aws/"
          ]
        ],
        "children": [
          {
            "t": "IAM Deep Dive",
            "d": "Who can do what. The number one misconfig source.",
            "res": [
              [
                "AWS IAM Docs",
                "https://docs.aws.amazon.com/iam/"
              ],
              [
                "HackTricks Cloud",
                "https://cloud.hacktricks.xyz/"
              ]
            ],
            "children": [
              {
                "t": "Policies",
                "d": "JSON permissions.",
                "res": [
                  [
                    "AWS IAM",
                    "https://docs.aws.amazon.com/iam/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Roles & Trust",
                "d": "Assume wisely.",
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
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "S3 & Storage",
            "d": "Buckets leak. Yours must not.",
            "res": [
              [
                "AWS S3 Docs",
                "https://docs.aws.amazon.com/s3/"
              ],
              [
                "HackTricks Cloud",
                "https://cloud.hacktricks.xyz/"
              ]
            ],
            "children": [
              {
                "t": "Bucket Policies",
                "d": "Who can read what.",
                "res": [
                  [
                    "AWS S3",
                    "https://docs.aws.amazon.com/s3/"
                  ]
                ],
                "lv": 2,
                "time": "~6h"
              },
              {
                "t": "Encryption",
                "d": "At rest and in transit.",
                "res": [
                  [
                    "AWS S3",
                    "https://docs.aws.amazon.com/s3/"
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
        "t": "Cloud Security",
        "d": "Think like an attacker in the cloud.",
        "res": [
          [
            "HackTricks Cloud",
            "https://cloud.hacktricks.xyz/"
          ],
          [
            "AWS Security Docs",
            "https://docs.aws.amazon.com/security/"
          ]
        ],
        "children": [
          {
            "t": "Common Misconfigurations",
            "d": "Public buckets, open security groups, leaked keys.",
            "res": [
              [
                "HackTricks Cloud",
                "https://cloud.hacktricks.xyz/"
              ],
              [
                "Prowler",
                "https://github.com/prowler-cloud/prowler"
              ]
            ],
            "children": [
              {
                "t": "Public Resources",
                "d": "Exposed by default?",
                "res": [
                  [
                    "HackTricks Cloud",
                    "https://cloud.hacktricks.xyz/"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Leaked Keys",
                "d": "GitHub dorking.",
                "res": [
                  [
                    "HackTricks Cloud",
                    "https://cloud.hacktricks.xyz/"
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
            "t": "ScoutSuite & Prowler",
            "d": "Audit cloud configs automatically.",
            "badge": "LAB",
            "res": [
              [
                "ScoutSuite",
                "https://github.com/nccgroup/ScoutSuite"
              ],
              [
                "Prowler",
                "https://github.com/prowler-cloud/prowler"
              ]
            ],
            "children": [
              {
                "t": "Running Audits",
                "d": "Scan your cloud.",
                "res": [
                  [
                    "ScoutSuite",
                    "https://github.com/nccgroup/ScoutSuite"
                  ]
                ],
                "lv": 3,
                "time": "~10h"
              },
              {
                "t": "Remediation",
                "d": "Fix what you find.",
                "res": [
                  [
                    "Prowler",
                    "https://github.com/prowler-cloud/prowler"
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
