/* Atlas roadmap data: Linux (linux)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "linux",
  "title": "Linux",
  "icon": "🐧",
  "color": "#fb923c", "kind": "skill",
  "tagline": "From first boot to sysadmin.",
  "desc": "From installation to security hardening: the complete Linux journey, step by step.",
  "root": {
    "t": "Linux Fundamentals",
    "d": "From first boot to hardened sysadmin: the complete Linux path.",
    "res": [
      [
        "Ubuntu Tutorials",
        "https://ubuntu.com/tutorials"
      ],
      [
        "Linux Journey",
        "https://linuxjourney.com/"
      ]
    ],
    "children": [
      {
        "t": "Installation & Environment",
        "d": "Get Linux running and feel at home.",
        "res": [
          [
            "Linux Journey",
            "https://linuxjourney.com/"
          ]
        ],
        "children": [
          {
            "t": "Linux Distributions",
            "d": "Ubuntu, Debian, Arch: pick your fighter.",
            "res": [
              [
                "Linux Journey",
                "https://linuxjourney.com/"
              ],
              [
                "DistroWatch",
                "https://distrowatch.com/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Virtual Machines",
            "d": "Run Linux safely inside VirtualBox.",
            "res": [
              [
                "VirtualBox",
                "https://www.virtualbox.org/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Terminal Setup",
            "d": "A shell that feels like home.",
            "res": [
              [
                "Linux Journey",
                "https://linuxjourney.com/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "Filesystem Layout",
            "d": "/etc, /var, /home: know the map.",
            "res": [
              [
                "Filesystem Hierarchy",
                "https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/"
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
        "t": "Files & Permissions",
        "d": "chmod, chown, users. Who can do what.",
        "res": [
          [
            "LinuxCommand.org",
            "https://linuxcommand.org/"
          ],
          [
            "ExplainShell",
            "https://explainshell.com/"
          ]
        ],
        "children": [
          {
            "t": "File Operations",
            "d": "cp, mv, rm, mkdir without fear.",
            "res": [
              [
                "Linux Journey",
                "https://linuxjourney.com/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "chmod, chown, umask",
            "d": "The permission trio, mastered.",
            "res": [
              [
                "Linux Journey",
                "https://linuxjourney.com/"
              ]
            ],
            "lv": 1,
            "time": "~4h"
          },
          {
            "t": "ACLs & Special Bits",
            "d": "Beyond rwx: setfacl, SUID, SGID.",
            "res": [
              [
                "ArchWiki: Permissions",
                "https://wiki.archlinux.org/title/File_permissions_and_attributes"
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
        "t": "Text Processing",
        "d": "grep, sed, awk, pipes. Process anything.",
        "res": [
          [
            "RegexOne",
            "https://regexone.com/"
          ],
          [
            "Bash Hackers",
            "https://wiki.bash-hackers.org/"
          ]
        ],
        "children": [
          {
            "t": "grep & Regex",
            "d": "Find anything in anything.",
            "res": [
              [
                "Regex101",
                "https://regex101.com/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "sed & awk",
            "d": "Stream-editing superpowers.",
            "res": [
              [
                "GNU sed manual",
                "https://www.gnu.org/software/sed/manual/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "sort, uniq, cut, tr",
            "d": "Slice and dice text streams.",
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
            "t": "Pipes & Redirection",
            "d": "Chain commands like a pro.",
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
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Processes & systemd",
        "d": "Services, jobs, and what runs your machine.",
        "res": [
          [
            "systemd Docs",
            "https://www.freedesktop.org/wiki/Software/systemd/"
          ],
          [
            "Arch Wiki systemd",
            "https://wiki.archlinux.org/title/Systemd"
          ]
        ],
        "children": [
          {
            "t": "Process Inspection",
            "d": "ps, top, htop: see everything running.",
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
            "t": "Signals & Job Control",
            "d": "kill, bg, fg, nohup.",
            "res": [
              [
                "Bash Guide",
                "https://tldp.org/LDP/abs/html/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "systemd Services",
            "d": "systemctl: start, enable, debug.",
            "res": [
              [
                "ArchWiki: systemd",
                "https://wiki.archlinux.org/title/Systemd"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Resource Monitoring",
            "d": "htop, iotop, free.",
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
        "lv": 2,
        "time": "~6h"
      },
      {
        "t": "Networking Tools",
        "d": "ssh, curl, netstat, ss. Talk to machines.",
        "res": [
          [
            "SSH Handbook",
            "https://www.ssh.com/academy/ssh"
          ],
          [
            "curl Docs",
            "https://curl.se/docs/"
          ]
        ],
        "children": [
          {
            "t": "ip & ss",
            "d": "Modern replacements for ifconfig.",
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
            "t": "ping & traceroute",
            "d": "Is it up? Which path does it take?",
            "res": [
              [
                "Cloudflare Learning",
                "https://www.cloudflare.com/learning/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "dig & nslookup",
            "d": "DNS straight from the terminal.",
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
            "t": "curl & tcpdump",
            "d": "Fetch anything, sniff everything.",
            "res": [
              [
                "curl docs",
                "https://curl.se/docs/"
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
        "t": "Bash Scripting",
        "d": "Automate your admin life.",
        "res": [
          [
            "Bash Guide",
            "https://mywiki.wooledge.org/BashGuide"
          ],
          [
            "ShellCheck",
            "https://www.shellcheck.net/"
          ]
        ],
        "children": [
          {
            "t": "Variables & Quoting",
            "d": "$VAR done right.",
            "res": [
              [
                "Bash Guide",
                "https://tldp.org/LDP/abs/html/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Conditions & Loops",
            "d": "if, for, while.",
            "res": [
              [
                "Bash Guide",
                "https://tldp.org/LDP/abs/html/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Functions",
            "d": "Reusable blocks of power.",
            "res": [
              [
                "Bash Guide",
                "https://tldp.org/LDP/abs/html/"
              ]
            ],
            "lv": 2,
            "time": "~6h"
          },
          {
            "t": "Exit Codes & set -euo",
            "d": "Fail fast, fail loud.",
            "res": [
              [
                "ShellCheck",
                "https://www.shellcheck.net/"
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
        "t": "System Administration",
        "d": "Updates, logs, backups, hardening basics.",
        "res": [
          [
            "Debian Handbook",
            "https://debian-handbook.info/"
          ],
          [
            "Linux Sysadmin Basics",
            "https://ubuntu.com/server/docs"
          ]
        ],
        "children": [
          {
            "t": "Users & Groups",
            "d": "useradd, groups, sudoers.",
            "res": [
              [
                "Linux Journey",
                "https://linuxjourney.com/"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Package Management",
            "d": "apt and friends, mastered.",
            "res": [
              [
                "Debian Apt Wiki",
                "https://wiki.debian.org/Apt"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Logs & journald",
            "d": "journalctl is your diary.",
            "res": [
              [
                "ArchWiki: systemd",
                "https://wiki.archlinux.org/title/Systemd"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "SSH Hardening",
            "d": "Keys only. No passwords.",
            "res": [
              [
                "SSH Academy",
                "https://www.ssh.com/academy/ssh"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Cron Jobs",
            "d": "Automate with cron.",
            "res": [
              [
                "Crontab Guru",
                "https://crontab.guru/"
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
        "t": "Linux Security",
        "d": "Lock it down like a pro.",
        "res": [
          [
            "ArchWiki: Security",
            "https://wiki.archlinux.org/title/Security"
          ]
        ],
        "children": [
          {
            "t": "Least Privilege",
            "d": "Give nothing more than needed.",
            "res": [
              [
                "ArchWiki: Security",
                "https://wiki.archlinux.org/title/Security"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Sudo Configuration",
            "d": "visudo without tears.",
            "res": [
              [
                "Sudo Docs",
                "https://www.sudo.ws/docs/"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "System Hardening",
            "d": "Close what you don't use.",
            "badge": "LAB",
            "res": [
              [
                "ArchWiki: Security",
                "https://wiki.archlinux.org/title/Security"
              ]
            ],
            "lv": 3,
            "time": "~10h"
          },
          {
            "t": "Auditing & Monitoring",
            "d": "auditd and friends.",
            "badge": "LAB",
            "res": [
              [
                "Linux Audit",
                "https://linux-audit.com/"
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
