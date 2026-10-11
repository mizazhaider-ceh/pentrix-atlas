/* Atlas roadmap data: Claude Code (claude-code) */
ROADMAPS.push({
  "id": "claude-code",
  "title": "Claude Code",
  "icon": "⌘",
  "color": "#d97757",
  "desc": "From first install to agent teams: master Anthropic's agentic coding tool with workflows, context control, skills, subagents, MCP, and hooks.",
  "kind": "skill",
  "root": {
    "t": "Claude Code Mastery",
    "d": "Turn Claude Code from a fancy autocomplete into a tireless engineering teammate.",
    "children": [
      {
        "t": "Getting Oriented",
        "d": "What Claude Code is, how to install it, and your first real task.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Claude Code",
            "d": "Meet the agentic coding assistant that reads your repo, edits files, and runs commands for you.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Coding agents vs autocomplete: agents plan, act, and verify in a loop instead of just completing text",
              "The agentic loop: read context, make a change, run a check, inspect the failure, iterate",
              "Why terminal-native matters: the agent uses your real tools (git, npm, tests) on your real files"
            ],
            "do": [
              "Read the official Claude Code overview docs end to end",
              "List three repetitive tasks from your week that an agent loop could plausibly do",
              "Ask Claude Code to explain a small repo and notice how it explores before answering"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"],
              ["Claude Code roadmap", "https://roadmap.sh/claude-code"]
            ],
            "tip": "Beginners treat Claude Code like a chatbot they paste code into. Its power is that it lives inside your repo and drives your tools."
          },
          {
            "t": "Installing Claude Code",
            "d": "Get the CLI on your machine, authenticate, and verify the install in under fifteen minutes.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Install routes: npm global install, native installers, and the VS Code extension",
              "Auth options: subscription login vs API key, and what each unlocks",
              "The `claude doctor` command as your first troubleshooting habit"
            ],
            "do": [
              "Install with `npm install -g @anthropic-ai/claude-code` and run `claude --version`",
              "Authenticate via `/login` and confirm your plan with `/status`",
              "Run `/doctor` once so you know what a healthy setup looks like"
            ],
            "tools": ["npm", "Claude Code", "VS Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "If the install misbehaves, run /doctor before reinstalling anything; most setup failures are auth or Node version issues it flags directly."
          },
          {
            "t": "Subscription vs API Usage",
            "d": "Understand the two billing models so costs never surprise you mid-session.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Subscription plans (Pro/Max) include Claude Code usage with rate limits; API billing is pay-per-token",
              "How `/cost` and `/usage` expose what a session actually consumed",
              "Why long agent loops on the API can get expensive fast without checkpoints"
            ],
            "do": [
              "Check your current plan and limits with `/status` and `/usage`",
              "Run a small task, then `/cost`, and note which model did the heavy lifting",
              "Decide your personal rule: e.g. API for scripts, subscription for interactive work"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Cost anxiety makes people micromanage the agent. Check /cost weekly, not hourly, and set your real guardrail: cheap models for exploration, strong models for hard edits."
          },
          {
            "t": "Choosing Your Interface",
            "d": "CLI, editor extension, desktop app, or mobile channels: pick the surface that fits each kind of work.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "The terminal CLI is the full-power surface; the VS Code extension brings diffs inline",
              "Desktop app and mobile channels for reviewing and steering sessions away from your desk",
              "One brain, many surfaces: sessions and memory carry across interfaces"
            ],
            "do": [
              "Do the same small task in the CLI and in the VS Code extension and compare the feel",
              "Try the `/ide` integration command if you live in VS Code",
              "Pick a default interface and one backup for on-the-go check-ins"
            ],
            "tools": ["Claude Code", "VS Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tag": "opt",
            "tip": "Most people only ever need the CLI plus one editor integration. Don't collect interfaces; master one."
          },
          {
            "t": "Your First Real Task",
            "d": "Ship something small end to end: a docs fix, a rename, or a dependency bump with tests green.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Scoping small: one verifiable outcome beats a grand vague request",
              "The verify loop: always give the agent a way to check its own work (tests, build, lint)",
              "Reading the diff before accepting: you are still the engineer of record"
            ],
            "do": [
              "Pick a real small task: update a README section or rename a confusing variable project-wide",
              "Prompt with the goal plus the verification command, e.g. 'rename X to Y, then run npm test'",
              "Review every file in the diff yourself before committing"
            ],
            "tools": ["Claude Code", "git"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"],
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "Your first task should be boring on purpose. Boring tasks teach you the loop; exciting tasks teach you regret.",
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Daily Workflows",
        "d": "The prompts, permission modes, and commands that make up 90% of real Claude Code usage.",
        "lv": 1,
        "children": [
          {
            "t": "Prompts That Work",
            "d": "Write requests the agent can actually succeed at: specific, scoped, and verifiable.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Specificity beats cleverness: name files, functions, and expected behavior explicitly",
              "Always attach a verification step: 'run the tests', 'build the project', 'show me the diff'",
              "Iterate on the prompt, not just the output: if it fails twice, your request was vague"
            ],
            "do": [
              "Rewrite a vague prompt ('fix the login bug') into a specific one (file, symptom, repro, test command)",
              "Practice the pattern: goal + context + constraints + how to verify",
              "Keep a scratch file of prompts that worked well and reuse their shape"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "If the agent keeps doing the wrong thing, the bug is usually in your prompt. State the goal, the boundaries, and how success will be checked."
          },
          {
            "t": "Permission Modes",
            "d": "Control how much autonomy the agent gets: ask-first, auto-accept, or full throttle.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "The three postures: default (asks), accept-edits, and plan mode; cycle with Shift+Tab",
              "Bypass permissions mode exists but should be reserved for sandboxes you can throw away",
              "Permissions are per-tool and can be pre-approved in settings for safe commands"
            ],
            "do": [
              "Try the same edit in default mode and accept-edits mode; feel the speed-vs-safety tradeoff",
              "Pre-approve your safe read-only commands (git status, npm test) in settings",
              "Set a personal rule for when bypass mode is allowed (e.g. only in disposable containers)"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Auto-accept feels fast until the agent rewrites a file you cared about. Earn trust in a repo before loosening permissions."
          },
          {
            "t": "Plan Mode",
            "d": "Make the agent think before it touches anything: review the plan, then approve the execution.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Plan mode forces read-only exploration first; nothing gets edited until you approve",
              "How to trigger it: `/plan`, Shift+Tab cycling, or just asking for a plan in words",
              "Good plans name the files to change and the order of operations; vague plans predict vague diffs"
            ],
            "do": [
              "Run `/plan` on a medium task and critique the plan like a code review before approving",
              "Ask for plan revisions ('do the migration before the refactor, not after') and watch it adapt",
              "Use plan mode for every task that touches more than three files"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Plan mode is the single highest-leverage habit in Claude Code. Ten minutes reviewing a plan saves an hour untangling a bad diff."
          },
          {
            "t": "Giving Files as Context",
            "d": "Point the agent at exactly the right files with @ mentions, # shortcuts, and images.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "@filename pulls a file into context; @folder gives a directory listing to explore",
              "# recalls saved memory; pasting screenshots lets the agent see UI bugs directly",
              "Precision matters: three right files beat the whole repo dumped in"
            ],
            "do": [
              "Reference two specific files with @ and ask a question answerable only from them",
              "Paste a screenshot of a UI bug and ask for a diagnosis",
              "Compare answer quality: @-scoped question vs the same question with no file context"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "When the agent hallucinates file contents, you forgot the @. Agents guess when they can't see; make them see."
          },
          {
            "t": "Slash Commands and Shortcuts",
            "d": "The daily vocabulary: /help, /clear, /compact, Esc to interrupt, and ! for raw bash.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Session commands: /help, /status, /clear, /compact, /rewind, /export, /exit",
              "Esc interrupts a runaway agent; Esc+Esc opens history; Ctrl+R shows the transcript",
              "`!` runs a bash command directly; `\\` adds a newline without submitting"
            ],
            "do": [
              "Start a task, interrupt it with Esc mid-run, and redirect it",
              "Use `/compact` on a long session and continue working to feel what survives",
              "Run `/export` once so you know how to save a session transcript"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Learn Esc before anything else. The confidence to interrupt is what lets you give the agent real autonomy."
          }
        ]
      },
      {
        "t": "Context Is Everything",
        "d": "The context window is the one resource that governs everything; manage it deliberately.",
        "lv": 2,
        "children": [
          {
            "t": "The Context Window Economy",
            "d": "Context fills fast and performance degrades as it fills: spend tokens like money.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why long sessions get dumber: attention dilutes as the window fills with history",
              "The biggest consumers: MCP tool definitions, huge file dumps, long error logs",
              "Strategy: short focused sessions beat one marathon session for hard tasks"
            ],
            "do": [
              "Run `/context` and identify your top three token consumers in a real session",
              "Take a 40-minute session and split the same work into two 20-minute sessions; compare quality",
              "Write your own 'context budget' rule, e.g. restart when usage passes 60%"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "If the agent starts making sloppy mistakes late in a session, it is not the model failing you; it is a full context window. Restart, don't rage."
          },
          {
            "t": "Compact and Clear",
            "d": "Know exactly when to summarize a session (/compact) versus starting fresh (/clear).",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "/compact summarizes the conversation into a fresh window; key decisions survive, noise doesn't",
              "/clear wipes the slate; use it when switching tasks, not mid-task",
              "Auto-compact exists, but manual compaction at natural breakpoints gives better summaries"
            ],
            "do": [
              "Compact mid-task and ask the agent to restate the plan, checking what survived",
              "Practice the breakpoint habit: compact after each completed phase of a multi-phase task",
              "Compare a compacted continuation against a fresh /clear restart on the same next step"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Compact at phase boundaries you choose, not when the tool forces it. A summary written at a clean breakpoint is dramatically better."
          },
          {
            "t": "Memory That Persists",
            "d": "Use /memory and CLAUDE.md files so lessons survive beyond a single session.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Project memory (./CLAUDE.md) vs user memory (~/.claude/CLAUDE.md): team conventions vs personal habits",
              "`#` recalls memory inline; `/memory` opens the editor to curate it",
              "Auto-memory can append lessons during work; prune it quarterly or it becomes folklore"
            ],
            "do": [
              "Add three genuinely useful project facts to CLAUDE.md via /memory",
              "Delete one stale or wrong memory entry; notice how curation is the real skill",
              "Ask the agent to record a lesson it learned the hard way during your session"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Memory rots. A memory file nobody prunes becomes a pile of contradictory instructions the agent politely ignores."
          },
          {
            "t": "Thinking Modes and Effort",
            "d": "Dial reasoning effort up or down: 'think' for routine work, 'think hard' for gnarly bugs.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Extended thinking keywords scale the reasoning budget before the agent acts",
              "More thinking costs more tokens and latency; match effort to task difficulty",
              "When to escalate: ambiguous bugs, architecture decisions, and anything irreversible"
            ],
            "do": [
              "Solve the same tricky bug with default effort and with 'think hard'; compare the diagnosis depth",
              "Use low effort deliberately for mechanical tasks (renames, formatting) and note the savings",
              "Write your personal escalation ladder: which tasks get which thinking level"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Max thinking on every prompt is like revving the engine at every stoplight: expensive, slow, and rarely better. Reserve it for the hard parts."
          },
          {
            "t": "Taming MCP Context Load",
            "d": "Every MCP server you add taxes every session; audit with /context and keep only what earns its keep.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "MCP tool schemas load into context on every session, even when unused",
              "Tool search and dynamic loading mitigate this, but fewer servers is still better",
              "Enable heavy servers per-project, not globally"
            ],
            "do": [
              "Run `/context`, list every MCP server's token cost, and disable one you rarely use",
              "Move a globally-enabled server to project scope via .mcp.json",
              "Re-run /context and measure the savings"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "The classic beginner mistake is installing twelve MCP servers on day one. Start with two or three; add servers the way you'd add dependencies: reluctantly."
          }
        ]
      },
      {
        "t": "CLAUDE.md and Skills",
        "d": "Teach Claude Code your project's rules once, then package repeatable expertise as skills.",
        "lv": 2,
        "children": [
          {
            "t": "Writing an Effective CLAUDE.md",
            "d": "The project briefing file: commands, conventions, and gotchas in one tight page.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What belongs: build/test/lint commands, code style rules, architecture notes, common pitfalls",
              "What doesn't: essays, duplicated docs, aspirational rules nobody follows",
              "Conciseness is a feature: bloated CLAUDE.md causes instruction drift and gets ignored"
            ],
            "do": [
              "Run `/init` to generate a starter CLAUDE.md, then cut it to half its length",
              "Add the three commands you run most (build, test, lint) with exact invocations",
              "Add one gotcha per section that previously burned you or a teammate"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "If your CLAUDE.md is longer than a page, the agent is skimming it. Ruthless, current, and short beats comprehensive and stale."
          },
          {
            "t": "CLAUDE.md Locations and Layering",
            "d": "Global, project, and nested CLAUDE.md files compose a hierarchy of instructions.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Precedence: enterprise > user (~/.claude) > project root > nested directories > local overrides",
              "Nested CLAUDE.md files carry directory-local conventions (e.g. frontend/ vs backend/ rules)",
              "CLAUDE.local.md for personal tweaks that shouldn't be committed"
            ],
            "do": [
              "Create a nested CLAUDE.md in one subdirectory with genuinely local rules",
              "Put a personal preference in ~/.claude/CLAUDE.md and confirm it applies everywhere",
              "Audit a repo for conflicting instructions across layers and resolve them"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Layering fails silently when two layers contradict each other. When the agent behaves oddly, check for dueling instructions before blaming the model."
          },
          {
            "t": "What Skills Are",
            "d": "Reusable packets of expertise in .claude/skills that load on demand instead of bloating every session.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "A skill is a SKILL.md with frontmatter (name, description) plus optional scripts and references",
              "Auto-invocation: the agent loads a skill when its description matches the task; or invoke with /skill-name",
              "Two content patterns: reference content (knowledge to apply inline) vs task content (steps to execute, often in a subagent)"
            ],
            "do": [
              "Browse the skills directory of a project that ships skills and read two SKILL.md files",
              "Trigger an installed skill with /name and watch it load only when needed",
              "Explain in your own words when you'd reach for a skill instead of CLAUDE.md"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "The mental model that unlocks skills: CLAUDE.md is always-on memory, a skill is a specialist you call into the room only when needed."
          },
          {
            "t": "Creating Your First Skill",
            "d": "Package a workflow you repeat into a SKILL.md with sharp frontmatter and progressive disclosure.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Frontmatter is the API: name and description decide when the agent reaches for the skill",
              "Progressive disclosure: SKILL.md stays lean; details live in referenced files loaded as needed",
              "Testing a skill means invoking it on a real task and watching where the agent stumbles"
            ],
            "do": [
              "Pick a workflow you do monthly (release checklist, migration steps) and draft its SKILL.md",
              "Write the description as a trigger sentence: 'Use when...'",
              "Invoke it on a dry-run task and refine the parts the agent misread"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"],
              ["Claude Code repo", "https://github.com/anthropics/claude-code"]
            ],
            "tip": "Write the description first and treat it like a function signature. If the trigger sentence is vague, the skill will fire at the wrong times or never."
          },
          {
            "t": "Skill Strategy and Plugins",
            "d": "Decide skill vs CLAUDE.md vs hook vs subagent, then bundle the winners as plugins for your team.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The decision tree: always-on rule goes in CLAUDE.md; on-demand expertise becomes a skill; guaranteed enforcement becomes a hook",
              "Skills rot like docs do: review them every few months as models improve",
              "Plugins package skills, agents, hooks, and MCP configs into one installable unit for teams"
            ],
            "do": [
              "Audit your current setup and reclassify three items using the decision tree",
              "Install one community plugin via /plugin and evaluate its skills",
              "Draft a plugin manifest bundling your best skill for teammates"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Teams fail at this by standardizing too early. Let individuals build skills for a month, then promote the ones everyone actually invokes."
          }
        ]
      },
      {
        "t": "Subagents",
        "d": "Delegate isolated work to specialist agents with their own context windows running in parallel.",
        "lv": 2,
        "children": [
          {
            "t": "What Subagents Do",
            "d": "Fresh context windows for delegated work: explore, build, or review without polluting the main session.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Each subagent gets its own context window, system prompt, and tool permissions",
              "Why isolation matters: verbose exploration output never clutters your main conversation",
              "Subagents cannot spawn their own subagents; the main agent orchestrates"
            ],
            "do": [
              "Ask the main agent to delegate a codebase exploration and watch the subagent report back",
              "Compare token usage of an in-line exploration vs a delegated one via /context",
              "Identify two tasks in your workflow that are pure delegation candidates"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Delegate exploration, keep decisions. Let subagents map the territory; you and the main agent decide what to change."
          },
          {
            "t": "Built-in Agents",
            "d": "Meet the agents that ship with Claude Code: Explore for mapping, Plan for designing.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "The Explore agent: fast, read-only codebase reconnaissance with aggressive parallel searching",
              "The Plan agent: designs approaches without editing, feeding plan mode",
              "When the main agent auto-delegates vs when you should ask explicitly"
            ],
            "do": [
              "Point the Explore agent at an unfamiliar repo: 'map the auth flow end to end'",
              "Use the Plan agent on a refactor, then compare its plan to one you wrote",
              "List the /agents available in your install and read their descriptions"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "New repos are the Explore agent's home turf. Never read a new codebase linearly yourself again; send the scout first."
          },
          {
            "t": "Creating Custom Subagents",
            "d": "Define specialist agents in .claude/agents with their own prompts, tools, and permissions.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Agent file anatomy: frontmatter (name, description, tools, model) plus a system prompt",
              "Tool restriction as design: a reviewer agent that can't edit is a better reviewer",
              "Description triggers auto-delegation the same way skill descriptions do"
            ],
            "do": [
              "Create a `code-reviewer` agent restricted to read-only tools",
              "Create a `test-writer` agent with edit access scoped to test files",
              "Delegate a real task to each and refine their prompts from the results"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Give each agent one job and take away the tools for every other job. Constraints are what make specialists better than generalists."
          },
          {
            "t": "Parallel Work Patterns",
            "d": "Fan out independent work across subagents: explore in parallel, then integrate.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The fan-out pattern: one prompt launches several agents on independent slices",
              "Classic splits: frontend vs backend implementation, or per-service exploration in a monorepo",
              "Integration is the main agent's job: subagents report, the orchestrator merges"
            ],
            "do": [
              "Launch three parallel explorations of different subsystems with one message",
              "Run implementation subagents for frontend and backend slices of one feature",
              "Practice the debrief: have each agent summarize findings before the main agent integrates"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "Parallel agents multiply output but also multiply review burden. Two or three well-scoped agents beat five theatrical ones."
          },
          {
            "t": "Subagents for Context Hygiene",
            "d": "Use delegation as a context-management tool: heavy lifting happens offstage.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Verbose tasks (log analysis, large refactors) belong in subagents to protect main context",
              "The report-back contract: subagents should return summaries, not raw dumps",
              "Combining subagents with /compact for genuinely long-running work"
            ],
            "do": [
              "Delegate a log-diving debugging task and require a 10-line summary report",
              "Write a 'report format' instruction into a custom agent's prompt",
              "Measure main-session context before and after a delegated heavy task"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "If a subagent returns a wall of text, the fault is your prompt, not the agent. Specify the report format up front."
          }
        ]
      },
      {
        "t": "MCP: Connecting Tools",
        "d": "Extend Claude Code beyond your machine with Model Context Protocol servers.",
        "lv": 2,
        "children": [
          {
            "t": "MCP Fundamentals",
            "d": "One open protocol that lets Claude Code use external tools: databases, browsers, issue trackers.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "MCP in one sentence: a standard way for AI apps to call tools exposed by local or remote servers",
              "The three primitives: tools (actions), resources (data), prompts (templates)",
              "Why it matters: no custom glue code per integration; servers are reusable across MCP clients"
            ],
            "do": [
              "Read the MCP introduction on the official site",
              "List three external systems you touch daily that could become MCP tools",
              "Explain MCP to a teammate in two sentences to test your own understanding"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Think of MCP as USB-C for AI tools: one standard plug, and suddenly your agent can reach your database, your browser, your CI."
          },
          {
            "t": "Adding MCP Servers",
            "d": "Install and scope servers with `claude mcp add` and .mcp.json: local, project, or user level.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`claude mcp add` for interactive setup; `.mcp.json` for checked-in project configuration",
              "Scope discipline: project scope for team servers, user scope for personal ones",
              "Transports: stdio for local servers, HTTP/SSE for remote ones"
            ],
            "do": [
              "Add a local server with `claude mcp add` and verify it with `/mcp`",
              "Create a `.mcp.json` in a project with one team-shared server",
              "Remove a server you added and confirm the cleanup"
            ],
            "tools": ["Claude Code", "npx"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Check .mcp.json into the repo for team servers, but never commit secrets in it; use environment variable references."
          },
          {
            "t": "Choosing Your First Servers",
            "d": "Start with two or three high-value servers: filesystem, GitHub, and one domain tool.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "High-signal starters: GitHub (issues/PRs), Postgres (query real data), Playwright (drive a browser)",
              "Context7-style doc servers for pulling fresh library documentation mid-task",
              "The 2-3 server rule: each addition is a permanent context tax"
            ],
            "do": [
              "Install a GitHub MCP server and have the agent summarize an open PR",
              "Install Playwright MCP and ask the agent to screenshot a local dev page",
              "Uninstall the one you used least after a week"
            ],
            "tools": ["Claude Code", "GitHub", "Playwright"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"]
            ],
            "tip": "Pick servers that answer questions you currently answer by switching apps. If it doesn't kill a context switch, it doesn't earn its tokens."
          },
          {
            "t": "MCP Permissions and Trust",
            "d": "Treat MCP servers like dependencies: useful, powerful, and capable of betraying you.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Per-tool approval: MCP tools go through the same permission system as built-ins",
              "Untrusted servers can exfiltrate your context; prefer official or well-reviewed servers",
              "Secrets handling: API keys live in env vars, never in chat or committed configs"
            ],
            "do": [
              "Review the permission prompts for one MCP server's tools and tighten them",
              "Audit your installed servers: who maintains each one, and when was it last updated",
              "Move one server's API key from a config file into an environment variable"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "An MCP server sees everything in your session context. Granting a random community server access is like npm-installing with your eyes closed."
          },
          {
            "t": "Debugging MCP Servers",
            "d": "When a server won't connect: logs, /mcp status, and transport mismatches.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "`/mcp` shows connection state; logs reveal auth failures and crashed processes",
              "Common failures: wrong transport (stdio vs HTTP), missing env vars, stale server versions",
              "Isolating the problem: test the server standalone before blaming Claude Code"
            ],
            "do": [
              "Break a working server config on purpose (wrong env var) and diagnose it via logs",
              "Run an MCP server manually from the terminal to see its raw output",
              "Document your team's three most common MCP failure modes and fixes"
            ],
            "tools": ["Claude Code", "MCP Inspector"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"]
            ],
            "tip": "Ninety percent of MCP failures are environment issues, not protocol issues. Test the server binary alone first; it takes thirty seconds."
          },
          {
            "t": "Building a Custom MCP Server",
            "d": "Expose one internal tool as an MCP server with the SDK and call it from Claude Code.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "SDK basics: define tools with JSON schemas, handle calls, return structured results",
              "Design for agents: narrow tools with clear names beat one mega-tool",
              "Local stdio servers are the fastest path; HTTP servers suit team sharing"
            ],
            "do": [
              "Scaffold a server with the official SDK exposing one read-only tool (e.g. query an internal API)",
              "Connect it via `claude mcp add` and have the agent use it on a real task",
              "Add input validation and error messages an agent can actually act on"
            ],
            "tools": ["Claude Code", "TypeScript", "MCP SDK"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"]
            ],
            "tip": "Write tool descriptions for an agent reader, not a human reader. Include when to use the tool, what it returns, and what errors mean.",
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Hooks: Deterministic Automation",
        "d": "Guaranteed code that runs at lifecycle events: guardrails no prompt can override.",
        "lv": 3,
        "children": [
          {
            "t": "The Hook Event Lifecycle",
            "d": "Learn the event map: PreToolUse, PostToolUse, UserPromptSubmit, Stop, SessionStart, and friends.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Hooks fire on lifecycle events, not on conversation; they run code, not prose",
              "Matchers scope hooks to specific tools (e.g. only Bash, only Write)",
              "Hook inputs and outputs: JSON in, JSON out; exit codes control blocking"
            ],
            "do": [
              "List all hook events in the docs and write a one-line purpose for each",
              "Install a trivial SessionStart hook that prints the git branch",
              "Inspect a hook's JSON input by logging it during a real session"
            ],
            "tools": ["Claude Code", "bash"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Hooks are the only mechanism that is guaranteed to run. CLAUDE.md politely suggests; hooks enforce. Use that power sparingly."
          },
          {
            "t": "PreToolUse Guardrails",
            "d": "Block dangerous actions before they happen: no .env commits, no prod deploys without confirmation.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "PreToolUse can block, allow, or modify a tool call before it executes",
              "Classic guardrails: block secrets in commits, protect generated files, require ticket IDs in branches",
              "Input modification (newer versions) can strip sensitive data instead of hard-blocking"
            ],
            "do": [
              "Write a PreToolUse hook that blocks Write/Edit to *.generated.* files",
              "Write one that strips .env files from any git commit command",
              "Test both by deliberately attempting the forbidden action"
            ],
            "tools": ["Claude Code", "bash", "Python"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Prefer modifying over blocking where you can. A hook that quietly removes the .env from a commit is smoother than one that lectures the agent."
          },
          {
            "t": "PostToolUse Formatting",
            "d": "Auto-format, lint, and typecheck after every edit so the agent's output is always clean.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "PostToolUse hooks run after Edit/Write: formatters, linters, quick type checks",
              "Keep them fast; use once-per-event options for expensive operations",
              "Graceful degradation: a missing formatter must never break the session"
            ],
            "do": [
              "Add a PostToolUse hook running your formatter on edited files",
              "Add a linter hook scoped to the files the agent touched",
              "Verify the agent's next edit comes back already formatted"
            ],
            "tools": ["Claude Code", "Prettier", "ESLint"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Two hooks cover most teams: format after edits, protect secrets before commits. Everything beyond that should justify its complexity."
          },
          {
            "t": "Session Hooks and Context Injection",
            "d": "SessionStart and UserPromptSubmit hooks that load repo state automatically.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "SessionStart: inject git status, current branch, or project health into every session",
              "UserPromptSubmit: validate or enrich prompts before the agent sees them",
              "Stop hooks: run the test suite before the agent is allowed to finish"
            ],
            "do": [
              "Write a SessionStart hook that injects `git status --short` and the current ticket",
              "Write a Stop hook that runs the fast test suite and blocks stopping on failure",
              "Tune both until they feel invisible: helpful, never nagging"
            ],
            "tools": ["Claude Code", "bash"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "A Stop hook that runs tests is the closest thing to a guarantee that agent work is green. Let the agent finish, then verify deterministically."
          },
          {
            "t": "Customizing the Status Line",
            "d": "Show model, context usage, and cost in your terminal with a custom statusline command.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The status line runs a command you configure and renders its output per turn",
              "Useful signals: active model, context percentage, session cost, git branch",
              "Keep it cheap: the command runs constantly, so milliseconds matter"
            ],
            "do": [
              "Configure a minimal status line showing model and context usage",
              "Add session cost once you trust the numbers",
              "Share your config as a team dotfile"
            ],
            "tools": ["Claude Code", "bash"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tag": "opt",
            "tip": "A status line showing context percentage quietly trains the whole team to manage context. Ambient awareness beats documentation."
          }
        ]
      },
      {
        "t": "Scale, Cost, and Safety",
        "d": "Run agents in parallel, in CI, and across teams without chaos or surprise bills.",
        "lv": 3,
        "children": [
          {
            "t": "Git Worktrees for Parallel Agents",
            "d": "Give each agent its own isolated checkout so parallel work never collides.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "git worktree creates additional working trees from one repo; each agent gets one",
              "The pattern: main agent plans, worktree agents implement slices, main integrates",
              "Cleanup discipline: remove worktrees after merge or they rot"
            ],
            "do": [
              "Create two worktrees and run two agents on independent features simultaneously",
              "Merge both back and resolve one conflict the agents created",
              "Write the three commands (create, list, remove) on a sticky note until they're muscle memory"
            ],
            "tools": ["Claude Code", "git"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "Parallel agents without worktrees is how you get two agents editing the same file. Isolation first, parallelism second."
          },
          {
            "t": "Headless and CI Mode",
            "d": "Run Claude Code non-interactively with `claude -p` for scripts, cron jobs, and pipelines.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "`claude -p 'prompt'` runs headless; `--output-format json` makes output machine-readable",
              "Allowed-tools flags bound what a headless run may do; default-deny everything else",
              "Use cases: nightly doc regeneration, triage bots, CI failure analysis"
            ],
            "do": [
              "Run a headless task that outputs JSON and parse it with jq",
              "Build a script that runs the agent on a schedule against a repo",
              "Add a CI job where the agent analyzes a failed build log and comments on the PR"
            ],
            "tools": ["Claude Code", "bash", "jq"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Headless agents need tighter prompts than interactive ones because there's no human to course-correct. Specify the done condition explicitly."
          },
          {
            "t": "Scheduling and Remote Control",
            "d": "Background tasks, scheduled jobs, and mobile channels for agents that work while you sleep.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Background and scheduled execution for long or recurring agent work",
              "Tunnels and channels for steering sessions from your phone",
              "The supervision contract: async agents still need defined checkpoints and stop conditions"
            ],
            "do": [
              "Schedule a recurring job (e.g. Monday dependency-review) and review its first output",
              "Steer a running session from a second device and observe the handoff",
              "Define stop conditions for an async agent so it can't loop forever"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tag": "opt",
            "tip": "Async agents amplify both leverage and risk. Never schedule an agent with write access you wouldn't trust unsupervised for an hour."
          },
          {
            "t": "Security Best Practices",
            "d": "Review diffs, scope permissions, and keep secrets out of agent reach.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "You are the last line of defense: review every diff before commit, especially from headless runs",
              "Least privilege: grant the agent the tools it needs for this task, nothing more",
              "Prompt-injection awareness: untrusted content (issues, web pages) can carry instructions for the agent"
            ],
            "do": [
              "Audit one project's permission settings against least privilege",
              "Practice spotting a prompt-injection attempt hidden in pasted web content",
              "Set up a secrets scan hook as your deterministic backstop"
            ],
            "tools": ["Claude Code", "git"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "The agent will happily follow instructions hidden in a webpage you asked it to read. Treat untrusted content like user input: useful, never authoritative."
          },
          {
            "t": "Rolling Out Claude Code in Teams",
            "d": "Shared configs, plugin governance, and cost visibility for an org-wide rollout.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Standardize the harness: shared CLAUDE.md layers, vetted plugins, approved MCP servers",
              "Governance: who owns permissions policy and reviews new skills and hooks",
              "Cost and usage tracking per team so adoption doesn't become a surprise bill"
            ],
            "do": [
              "Draft a one-page team standard: required CLAUDE.md sections and approved plugins",
              "Set up a shared plugin or skills repo the team installs from",
              "Run a 4-week pilot with usage reviews before org-wide rollout"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "Rollouts fail on governance, not technology. Assign one owner for the Claude Code configuration before you invite the fiftieth engineer."
          }
        ]
      }
    ]
  }
});
