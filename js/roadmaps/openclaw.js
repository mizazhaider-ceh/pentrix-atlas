/* Atlas roadmap data: OpenClaw (openclaw) */
ROADMAPS.push({
  "id": "openclaw",
  "title": "OpenClaw",
  "icon": "🦞",
  "color": "#7b2cbf",
  "desc": "Run your own AI agent: install OpenClaw, connect your apps, and build autonomous workflows on your hardware.",
  "kind": "skill",
  "root": {
    "t": "OpenClaw Agent Engineering",
    "d": "From install to autonomous agent: skills, channels, scheduling, and self-hosting.",
    "children": [
      {
        "t": "OpenClaw Foundations",
        "d": "What OpenClaw is, where it came from, and your first running agent.",
        "lv": 1,
        "children": [
          {
            "t": "Agents vs Chatbots: The Mental Model",
            "d": "A chatbot answers. An agent acts, remembers, and works on a schedule.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "The three agent properties: tools (it can act), memory (it remembers), autonomy (it can initiate)",
              "Why a runtime beats a library: OpenClaw runs continuously, no code to write",
              "Local-first ownership: your data, your hardware, your model choice"
            ],
            "do": [
              "List three repetitive digital chores in your life an agent could own end to end",
              "Compare OpenClaw's runtime model with developer libraries like LangChain or CrewAI",
              "Read the OpenClaw README's opening section and note what 'really does things' means"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw on GitHub", "https://github.com/openclaw/openclaw"],
              ["OpenClaw", "https://openclaw.ai/"]
            ]
          },
          {
            "t": "The OpenClaw Story",
            "d": "Clawdbot to Moltbot to OpenClaw: how a side project became a movement.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Late 2025: Peter Steinberger (PSPDFKit founder) builds Clawdbot, a Claude-to-Telegram bridge",
              "The renames (Moltbot, then OpenClaw) and the MIT release in November 2025",
              "Community explosion: one of the fastest-growing open-source AI projects of early 2026"
            ],
            "do": [
              "Read the project history and lore in the repo",
              "Skim the TechRadar explainer for the mainstream view",
              "Note the mascot: Molty, the space lobster — community culture matters in open source"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw on GitHub", "https://github.com/openclaw/openclaw"],
              ["TechRadar: What is OpenClaw", "https://www.techradar.com/pro/what-is-openclaw"]
            ],
            "tip": "Knowing a project's story isn't trivia — it tells you the governance (OpenClaw Foundation), the license (MIT), and why the community, not one company, steers it."
          },
          {
            "t": "Installing OpenClaw",
            "d": "Get the gateway running on your machine in minutes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Prerequisites: Node 22/24/25 (Node 23 unsupported) and where the npm package lives",
              "What the installer sets up: the gateway, config files, and local state directories",
              "Verifying the install and finding the logs when something fails"
            ],
            "do": [
              "Check your Node version, then install the openclaw npm package",
              "Run the gateway and confirm it starts without errors",
              "Locate the config directory (~/.openclaw) and inspect what was created"
            ],
            "tools": ["OpenClaw", "Node.js", "npm"],
            "res": [
              ["OpenClaw Install Docs", "https://docs.openclaw.ai/install"],
              ["OpenClaw Getting Started", "https://docs.openclaw.ai/start/getting-started"]
            ]
          },
          {
            "t": "First Run and the Onboarding Wizard",
            "d": "Let the wizard walk you from zero to a talking agent.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The CLI onboarding wizard: what it asks and why each answer matters",
              "Model provider selection during setup and how to change it later",
              "Your first real exchange: asking the agent to do something, not just say something"
            ],
            "do": [
              "Run the onboarding wizard end to end",
              "Ask your agent to read a file on your machine and summarize it — your first tool call",
              "Ask it what it remembers about you, then correct it and see memory update"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Onboarding", "https://docs.openclaw.ai/start/wizard"]
            ]
          },
          {
            "t": "Choosing a Model Provider",
            "d": "Cloud APIs or a local LLM: pick your brain, keep your freedom.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Cloud providers (Anthropic, OpenAI, others) vs local models via Ollama",
              "The tradeoffs: capability and context size vs cost, privacy, and latency",
              "Why OpenClaw is model-agnostic and how swapping models works"
            ],
            "do": [
              "Configure one cloud provider with an API key and test a conversation",
              "Install Ollama, pull a local model, and point OpenClaw at it",
              "Compare the same task on both and note speed, quality, and cost differences"
            ],
            "tools": ["OpenClaw", "Ollama"],
            "res": [
              ["OpenClaw Provider Directory", "https://docs.openclaw.ai/providers"],
              ["Ollama", "https://ollama.com/"]
            ],
            "tip": "Start with a strong cloud model (long context, good tool use) while learning. Move to local models once your workflows are stable — debugging agents AND a weak model at the same time is misery."
          }
        ]
      },
      {
        "t": "The Gateway",
        "d": "The local control plane everything flows through.",
        "lv": 2,
        "children": [
          {
            "t": "The Gateway: Your Local Control Plane",
            "d": "One Node.js process routes every message, tool call, and reply.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The gateway's job: route messages from chat platforms to the agent runtime and back",
              "Why a single process is the design: one place to watch, log, and manage",
              "How the gateway differs from the model (reasoning) and the tools (hands)"
            ],
            "do": [
              "Start the gateway and watch its startup logs — identify each subsystem initializing",
              "Send a message and trace it through the gateway logs",
              "Restart the gateway and confirm your agent's state survives (memory is on disk)"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Architecture", "https://docs.openclaw.ai/concepts/architecture"]
            ]
          },
          {
            "t": "Port 18789 and Binding",
            "d": "Where the gateway listens — and who is allowed to reach it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Default: port 18789 bound to localhost, reachable only from your own machine",
              "Bind modes (loopback, lan, tailnet, custom) and when each is appropriate",
              "The auth token: where it lives and why exposing the gateway without it is dangerous"
            ],
            "do": [
              "Confirm the gateway binds to localhost by default (`ss -tlnp | grep 18789`)",
              "Change the bind mode in config to reach it from your LAN, then change it back",
              "Find the auth token in your config and understand what it protects"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Gateway Configuration", "https://docs.openclaw.ai/gateway/configuration"]
            ],
            "tip": "The gateway can run shell commands on your machine. Binding it to anything beyond localhost without auth is handing strangers a remote shell. Default-deny, always."
          },
          {
            "t": "The Dashboard and Web UI",
            "d": "Watch your agent work from a browser.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "What the dashboard shows: conversations, runs, config, and status",
              "Accessing it through the gateway and the auth flow",
              "When the UI beats the CLI (monitoring) and when it doesn't (automation)"
            ],
            "do": [
              "Open the dashboard while the gateway runs",
              "Trigger an agent task and watch it appear in the UI",
              "Explore the config pages and compare with the raw config file"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Dashboard Docs", "https://docs.openclaw.ai/web/dashboard"]
            ]
          },
          {
            "t": "The OpenClaw CLI",
            "d": "Drive everything from your terminal: the power user's interface.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Core CLI commands: starting/stopping the gateway, pairing, config, status",
              "Chat commands and slash commands available in conversations",
              "Scripting the CLI for your own automation around the agent"
            ],
            "do": [
              "Work through the CLI reference: status, config get/set, logs",
              "Use a slash command inside a chat session",
              "Write a shell one-liner that checks gateway health via the CLI"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["CLI Reference", "https://docs.openclaw.ai/cli"]
            ]
          }
        ]
      },
      {
        "t": "Memory and Identity",
        "d": "Markdown files that make your agent remember who it is — and who you are.",
        "lv": 2,
        "children": [
          {
            "t": "Persistent Memory: Markdown on Disk",
            "d": "No database, no black box: your agent's memory is files you can read.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How OpenClaw stores memory as local Markdown files you can open in any editor",
              "Session memory vs long-term memory: what persists across restarts",
              "Why file-based memory is a feature: version control, manual edits, portability"
            ],
            "do": [
              "Find the memory files on disk and read them raw",
              "Teach the agent a preference, restart the gateway, and verify it remembers",
              "Edit a memory file by hand and watch the agent's behavior change"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Features", "https://docs.openclaw.ai/concepts/features"]
            ],
            "tip": "Because memory is just Markdown, you can git-commit it. Your agent's personality and preferences become versioned, diffable, and restorable — treat them like code."
          },
          {
            "t": "Soul.md and Agent Identity",
            "d": "The file that tells your agent who it is and how to behave.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What soul.md contains: persona, tone, values, standing instructions",
              "How identity files shape every response without retraining anything",
              "Iterating on identity: small edits, big behavioral shifts"
            ],
            "do": [
              "Read your agent's soul.md end to end",
              "Change one behavioral rule (e.g. response length) and test the difference",
              "Write a short 'operating principles' section for how you want it to handle mistakes"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw on GitHub", "https://github.com/openclaw/openclaw"]
            ]
          },
          {
            "t": "Memory Layout: MEMORY.md and Daily Notes",
            "d": "Organize long-term memory so it stays useful for years.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "MEMORY.md as the curated long-term record vs daily notes for raw detail",
              "What deserves promotion to long-term memory (preferences, decisions) vs what doesn't",
              "Keeping memory fresh: pruning stale facts so the agent doesn't act on old truth"
            ],
            "do": [
              "Review your MEMORY.md and delete three things that are no longer true",
              "Add a standing preference and verify the agent applies it unprompted",
              "Set up a weekly habit (or heartbeat task) to review memory hygiene"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Features", "https://docs.openclaw.ai/concepts/features"]
            ]
          }
        ]
      },
      {
        "t": "Channels and Messaging",
        "d": "Talk to your agent from WhatsApp, Telegram, Slack, and beyond.",
        "lv": 2,
        "children": [
          {
            "t": "Channels: Meeting Users Where They Are",
            "d": "Your agent lives in the chat apps you already open every day.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The 20+ supported channels: WhatsApp, Telegram, Slack, Discord, iMessage and more",
              "How channels connect through the gateway: one agent, many front doors",
              "Choosing your primary channel vs enabling several"
            ],
            "do": [
              "Read the channels documentation and list which ones fit your life",
              "Understand the difference between bot accounts and personal-account bridges",
              "Pick one channel to connect first based on setup difficulty"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Chat Channels", "https://docs.openclaw.ai/channels"]
            ]
          },
          {
            "t": "Connecting Telegram",
            "d": "The easiest first channel: a bot token and you're talking.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Creating a bot with BotFather and getting the token",
              "Wiring the token into OpenClaw's channel config",
              "Testing the full loop: message in, agent acts, reply out"
            ],
            "do": [
              "Create a Telegram bot via BotFather and save the token securely",
              "Add the token to your OpenClaw config and restart the gateway",
              "Ask the bot to do a multi-step task (e.g. check a file and report back)"
            ],
            "tools": ["OpenClaw", "Telegram"],
            "res": [
              ["Chat Channels", "https://docs.openclaw.ai/channels"]
            ]
          },
          {
            "t": "Connecting WhatsApp",
            "d": "Your agent in your most-used messenger.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How the WhatsApp bridge works (and why it differs from Telegram's bot API)",
              "Pairing your number and keeping the session alive",
              "Group chats vs DMs: where the agent should and shouldn't speak"
            ],
            "do": [
              "Connect WhatsApp following the current docs",
              "Send a task from your phone and confirm the agent executes it",
              "Decide your policy: DMs only, or specific groups — and configure it"
            ],
            "tools": ["OpenClaw", "WhatsApp"],
            "res": [
              ["Chat Channels", "https://docs.openclaw.ai/channels"]
            ]
          },
          {
            "t": "DM Pairing and Trust",
            "d": "Unknown senders must prove themselves before the agent obeys.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Pairing codes: how strangers request access and how you approve via CLI",
              "Why open DMs to an agent with shell access would be catastrophic",
              "Revoking access and auditing who is paired"
            ],
            "do": [
              "Walk through the pairing flow with a second account",
              "Approve it via the CLI and verify it can now issue commands",
              "Revoke pairing and confirm the account is locked out"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Architecture", "https://docs.openclaw.ai/concepts/architecture"]
            ],
            "tip": "Your agent can run commands as you. Treat pairing like handing someone your laptop unlocked — approve deliberately, review the list regularly."
          },
          {
            "t": "Slash Commands",
            "d": "Shortcuts that trigger agent behaviors with a single message.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Built-in slash commands and what each does",
              "How slash commands differ from natural-language requests (deterministic vs interpreted)",
              "Creating your own command shortcuts for frequent tasks"
            ],
            "do": [
              "Try every built-in slash command and note what each returns",
              "Define a custom shortcut for your most common request",
              "Teach a non-technical friend (or family member) two commands they can use"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["CLI Reference", "https://docs.openclaw.ai/cli"]
            ]
          }
        ]
      },
      {
        "t": "Skills and ClawHub",
        "d": "Extend your agent: install capabilities, then build your own.",
        "lv": 3,
        "children": [
          {
            "t": "What Skills Are",
            "d": "Modular add-ons that teach your agent new tricks.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Skills as packaged knowledge + instructions the agent loads when relevant",
              "How skills differ from tools (capabilities) and memory (context)",
              "The self-improving loop: agents can write and install their own skills"
            ],
            "do": [
              "List the skills your agent currently has and where they live on disk",
              "Ask the agent a question that triggers a skill, then one that doesn't — compare",
              "Read one skill's files to see how it's structured"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ]
          },
          {
            "t": "Installing Skills from ClawHub",
            "d": "The community registry: capabilities one command away.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "ClawHub as the community skill registry: browsing and discovering skills",
              "Installing a skill and verifying what it added",
              "Evaluating third-party skills: permissions, code review, trust"
            ],
            "do": [
              "Browse ClawHub and pick a skill matching a real need (email, calendar, API)",
              "Install it and test the new capability end to end",
              "Read the skill's source before installing — know what you're granting"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ],
            "tip": "A skill runs with your agent's privileges. Installing an unaudited skill is like running a stranger's script as yourself — read the code first, every time."
          },
          {
            "t": "Anatomy of a SKILL.md",
            "d": "The file format that turns documentation into capability.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "SKILL.md structure: frontmatter, triggers, instructions, examples",
              "How the agent decides when a skill is relevant to the current task",
              "Supporting files: scripts, configs, and resources a skill can bundle"
            ],
            "do": [
              "Dissect a well-written community skill line by line",
              "Map each section to the moment the agent uses it during a task",
              "Draft a SKILL.md outline for a capability you wish existed"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ]
          },
          {
            "t": "Building Your Own Skill",
            "d": "Package your workflow so the agent (and others) can reuse it.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Designing the trigger: when should the agent reach for this skill",
              "Writing instructions the model actually follows: concrete, ordered, with examples",
              "Testing, iterating, and optionally publishing to ClawHub"
            ],
            "do": [
              "Build a skill for a real recurring task (e.g. 'weekly report from these three sources')",
              "Test it with three different phrasings of the request",
              "Refine the instructions until it works reliably, then consider publishing"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ],
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Automation: Cron and Heartbeat",
        "d": "Agents that work while you sleep: schedules and proactive loops.",
        "lv": 2,
        "children": [
          {
            "t": "Cron Jobs: Agents on a Schedule",
            "d": "Tell your agent 'every morning at 8' and mean it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How OpenClaw schedules recurring agent runs (cron expressions)",
              "What a scheduled run can do: briefings, checks, reports, maintenance",
              "Monitoring scheduled runs: logs, failures, and notifications"
            ],
            "do": [
              "Create a morning briefing job: news, calendar, and weather summarized to your chat",
              "Schedule a weekly disk-usage and backup check with an alert on problems",
              "Review a week's worth of run logs and tune one noisy job"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Features", "https://docs.openclaw.ai/concepts/features"]
            ]
          },
          {
            "t": "Heartbeat Tasks",
            "d": "The agent's own rhythm: periodic self-directed check-ins.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Heartbeat vs cron: continuous lightweight awareness vs fixed schedules",
              "What heartbeat tasks are for: watching inboxes, prices, builds, mentions",
              "Keeping heartbeats cheap: small prompts, clear stop conditions"
            ],
            "do": [
              "Configure a heartbeat that watches for something you check manually today",
              "Set the interval deliberately — too often burns tokens, too rare misses things",
              "Add a condition so it only messages you when there's actually news"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Features", "https://docs.openclaw.ai/concepts/features"]
            ],
            "tip": "A heartbeat that messages you 'nothing new' every 15 minutes trains you to ignore the agent. Only notify on signal — silence is a feature."
          },
          {
            "t": "Designing Proactive Workflows",
            "d": "From reactive assistant to a system that handles things before you ask.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The proactive pattern: observe -> decide -> act -> report, without a human prompt",
              "Guardrails for autonomy: what the agent may do alone vs what needs approval",
              "Composing cron + heartbeat + skills into end-to-end workflows"
            ],
            "do": [
              "Design one workflow end to end on paper: trigger, steps, decision points, escalation",
              "Implement it with a scheduled job and a skill",
              "Run it for two weeks, then review: what did it get right, where did it overstep?"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Architecture", "https://docs.openclaw.ai/concepts/architecture"]
            ]
          }
        ]
      },
      {
        "t": "Tools, Browser, and Safety",
        "d": "Hands for your agent — and the guardrails that keep them safe.",
        "lv": 3,
        "children": [
          {
            "t": "The Tool System",
            "d": "Shell commands, file access, APIs: how the agent touches the world.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Built-in tools: exec (shell), file read/write, and what each can reach",
              "How the model chooses tools and chains their outputs",
              "Adding custom tools and when a skill is the better wrapper"
            ],
            "do": [
              "Ask the agent to perform a task requiring three different tools chained together",
              "Watch the raw tool calls in the logs to understand the model's choices",
              "Restrict a tool's scope in config and observe the agent adapting"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ]
          },
          {
            "t": "Browser Control",
            "d": "Your agent can open pages, click, and read the web like you do.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What browser control enables: research, form filling, monitoring dashboards",
              "Sessions and state: logins persist, so the agent acts as you",
              "The risk surface: an agent with your logged-in browser is powerful and exposed"
            ],
            "do": [
              "Have the agent research a topic across three sites and synthesize findings",
              "Set up a price-watch task using browser control on a product page",
              "Define which sites are off-limits and verify the agent respects it"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Tools Docs", "https://docs.openclaw.ai/tools"]
            ],
            "tip": "Never let browser control touch banking or anything with money movement until you've hardened everything else. Convenience first, credentials later — much later."
          },
          {
            "t": "Command Guardrails and Safety",
            "d": "Safe commands pre-approved, dangerous ones blocked: the safety model.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "How guardrails classify commands: safe (grep, wc) vs dangerous (rm -rf, curl | sh)",
              "Approval flows: when the agent must ask before acting",
              "Prompt injection via tools: why untrusted content (webpages, files) is hostile input"
            ],
            "do": [
              "Trigger a guardrail on purpose and read the block message",
              "Configure which commands need explicit approval in your setup",
              "Test with a malicious instruction hidden in a webpage — see what holds"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Architecture", "https://docs.openclaw.ai/concepts/architecture"]
            ],
            "tip": "The maintainer's own warning stands: if you can't run a command line yourself, this is too dangerous to self-host. Understand every permission you grant."
          },
          {
            "t": "Secrets and Credentials",
            "d": "API keys the agent needs, stored so attackers (and logs) can't see them.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Where OpenClaw keeps secrets vs where it keeps config",
              "Least privilege for tokens: read-only where possible, scoped to the need",
              "Rotation habits: what to do when a key leaks into a log or chat"
            ],
            "do": [
              "Audit every secret your agent holds and the scope of each",
              "Move any secret currently sitting in a chat-accessible config into proper storage",
              "Practice rotating one API key end to end without breaking the agent"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Gateway Configuration", "https://docs.openclaw.ai/gateway/configuration"]
            ]
          }
        ]
      },
      {
        "t": "Self-Hosting and Production",
        "d": "From laptop to VPS: run your agent 24/7, hardened and observable.",
        "lv": 3,
        "children": [
          {
            "t": "Platforms and Nodes",
            "d": "Where OpenClaw runs: your laptop, a Pi, a server — or all three.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Platform support: macOS, Windows, Linux, and lightweight devices",
              "Nodes: running apps and device integrations alongside the gateway",
              "Choosing hardware: a 5 euro VPS runs fine; what actually needs more"
            ],
            "do": [
              "Run the gateway on a second machine (or VM) and compare the experience",
              "Explore the platforms docs for device-node options",
              "Decide your topology: laptop-only, VPS, or hybrid — and why"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Platforms Docs", "https://docs.openclaw.ai/platforms"]
            ]
          },
          {
            "t": "Deploying to a VPS",
            "d": "Your agent, always on: a cheap server that never sleeps.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Picking a VPS, securing SSH, and installing the gateway headlessly",
              "Keeping it alive: systemd units or process managers, auto-restart",
              "Backing up config and memory so a dead server isn't a dead agent"
            ],
            "do": [
              "Provision a small VPS, harden SSH (keys only), install OpenClaw",
              "Create a systemd service so the gateway survives reboots",
              "Set up automated backups of ~/.openclaw to somewhere off the box"
            ],
            "tools": ["OpenClaw", "systemd", "ssh"],
            "res": [
              ["VPS Guide", "https://docs.openclaw.ai/vps"]
            ]
          },
          {
            "t": "Hardening Your Gateway",
            "d": "Lock down the most powerful process on your network.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The threat model: a gateway with shell access, browser sessions, and your secrets",
              "Network controls: bind modes, firewall rules, tailnet/VPN for remote access",
              "Update discipline: release channels and why staying current matters"
            ],
            "do": [
              "Audit your bind mode, firewall, and auth token in one pass",
              "Put remote access behind a VPN (tailnet) instead of exposing the port",
              "Subscribe to releases and define your update cadence"
            ],
            "tools": ["OpenClaw", "UFW", "Tailscale"],
            "res": [
              ["Gateway Runbook", "https://docs.openclaw.ai/gateway"]
            ],
            "tip": "Think of the gateway as SSH-level access to your digital life. Every control you'd put on SSH — keys, firewall, no root, updates — applies here too."
          },
          {
            "t": "Webhooks and Event-Driven Agents",
            "d": "Let the world poke your agent: GitHub pushes, Stripe events, anything.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Webhooks as inbound triggers: external services calling your agent",
              "Verifying signatures so attackers can't fake events",
              "Designing idempotent handlers (webhooks get retried)"
            ],
            "do": [
              "Expose a webhook endpoint and trigger it from a GitHub repo event",
              "Add HMAC signature verification to the handler",
              "Build one automation: 'on push to main, summarize the diff to my chat'"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["Gateway Runbook", "https://docs.openclaw.ai/gateway"]
            ]
          },
          {
            "t": "Multi-Agent Coordination",
            "d": "When one agent isn't enough: specialized agents working together.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Patterns: a coordinator agent delegating to specialists vs peer agents",
              "Shared memory and handoff conventions between agents",
              "Where multi-agent helps (parallel research) vs where it just adds confusion"
            ],
            "do": [
              "Split a research task across two agents with distinct roles",
              "Define a handoff format and watch them pass context cleanly",
              "Evaluate: was the coordination overhead worth it for this task?"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw Architecture", "https://docs.openclaw.ai/concepts/architecture"]
            ],
            "tag": "opt"
          },
          {
            "t": "Troubleshooting and Logs",
            "d": "When the agent misbehaves: read the logs, find the cause, fix it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Where every log lives: gateway, channel, tool, and model-call logs",
              "The common failure modes: expired tokens, model errors, permission blocks",
              "Asking the community well: Discord, GitHub issues, and what to include"
            ],
            "do": [
              "Break something on purpose (revoke a token) and diagnose purely from logs",
              "Enable debug logging for one session and read a full tool-call trace",
              "File (or find) one GitHub issue with logs attached and a minimal repro"
            ],
            "tools": ["OpenClaw"],
            "res": [
              ["OpenClaw on GitHub", "https://github.com/openclaw/openclaw"]
            ]
          }
        ]
      }
    ]
  }
});
