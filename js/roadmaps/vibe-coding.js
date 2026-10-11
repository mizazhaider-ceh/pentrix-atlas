/* Atlas roadmap data: Vibe Coding (vibe-coding) */
ROADMAPS.push({
  "id": "vibe-coding",
  "title": "Vibe Coding",
  "icon": "✨",
  "color": "#5b8def",
  "desc": "Build real software by directing AI: planning, prompting, debugging, testing, and shipping AI-generated code safely.",
  "kind": "skill",
  "root": {
    "t": "Vibe Coding",
    "d": "Become the director, not the typist: ship working software with AI as your engineering team.",
    "children": [
      {
        "t": "The Mindset",
        "d": "What vibe coding is, the tool landscape, and when this approach wins or loses.",
        "lv": 1,
        "children": [
          {
            "t": "What Vibe Coding Actually Is",
            "d": "Describe the outcome in natural language and let AI handle the keystrokes, while you own the decisions.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "The core loop: describe, generate, run, verify, iterate",
              "You supply intent, taste, and judgment; the AI supplies syntax and boilerplate",
              "Why it works best for greenfield apps and prototypes with clear feedback loops"
            ],
            "do": [
              "Watch one full vibe-coding build video and map its loop: prompt, output, test, fix",
              "Write a one-paragraph app idea as if briefing a junior developer",
              "List which parts of building software are judgment (yours) vs typing (AI's)"
            ],
            "tools": ["Claude Code", "Cursor"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Vibe coding is not 'no coding'. It's coding at the level of intent. The moment you stop verifying output, you've stopped engineering."
          },
          {
            "t": "The AI Coding Tool Landscape",
            "d": "Know the major players: agentic CLIs, AI IDEs, and frontend-focused builders.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Agentic tools (Claude Code, Codex, Gemini CLI) that work across your whole repo",
              "AI IDEs (Cursor, Windsurf, Copilot) that blend assistance into your editor",
              "Frontend builders (v0, Lovable, Replit) optimized for shipping UI fast"
            ],
            "do": [
              "Try the same tiny task (a landing page section) in two different tools",
              "Note which tool felt best for chatting vs editing vs deploying",
              "Pick one primary tool and one fallback; avoid tool-hopping mid-project"
            ],
            "tools": ["Claude Code", "Cursor", "GitHub Copilot", "v0", "Lovable"],
            "res": [
              ["Cursor", "https://www.cursor.com"],
              ["GitHub Copilot", "https://github.com/features/copilot"],
              ["v0", "https://v0.dev"]
            ],
            "tip": "Beginners collect tools; builders master one. Every tool here can build your app; the differentiator is your skill, not the logo."
          },
          {
            "t": "Director, Not Typist",
            "d": "Your new job description: spec writer, taste-maker, and chief verification officer.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Specifying precisely is the skill that replaces typing speed",
              "Taste is your moat: knowing good UX and clean architecture when you see it",
              "Verification discipline: every AI claim gets run, clicked, or tested"
            ],
            "do": [
              "Take a feature you built before and write the spec you'd hand an AI to rebuild it",
              "Practice the director's review: run the app and list five things to change before accepting",
              "Time yourself: how long does verification take vs generation? Budget accordingly"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "If you can't tell good output from bad, the AI isn't your pair programmer, it's your random code generator. Taste first, tools second."
          },
          {
            "t": "When NOT to Vibe Code",
            "d": "Know the boundaries: learning fundamentals, cryptography, and novel algorithms still need human depth.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Learning to program: vibe coding before fundamentals builds a house on sand",
              "High-stakes code (crypto, auth, payments) needs understanding, not just passing tests",
              "Novel problems with no training-data precedent: the AI is guessing, confidently"
            ],
            "do": [
              "Write down three project types where you'd insist on hand-written, deeply understood code",
              "For your current idea, mark which parts are vibe-safe and which need real understanding",
              "Set a rule: security-critical code gets human-written or human-audited, no exceptions"
            ],
            "tools": [],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Vibe coding fails exactly where verification is hard. If you can't tell whether the output is correct, you can't vibe code that part yet."
          }
        ]
      },
      {
        "t": "Plan Before You Prompt",
        "d": "Ten minutes of planning saves ten rounds of regenerating. Spec first, code second.",
        "lv": 1,
        "children": [
          {
            "t": "Define the MVP Ruthlessly",
            "d": "Cut your idea to the smallest thing that proves it works, then let AI build only that.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "MVP thinking: one core loop, three screens max, no auth until you need it",
              "Why AI builds bloat fast: vague scope becomes maximum scope",
              "The parking lot: capture cut features in writing so they stop haunting your prompts"
            ],
            "do": [
              "Write your app idea, then cut it to one paragraph describing only the MVP",
              "List every feature you cut in a PARKING_LOT.md file",
              "Get the AI to estimate the MVP build in phases before writing any code"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Every failed vibe-coding project started with 'build me a full app with...'. Scope is the prompt; everything else is commentary."
          },
          {
            "t": "Phases, Not One Giant Prompt",
            "d": "Break the build into sequential phases with working software at the end of each.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Phase = one shippable increment: setup, core feature, polish, deploy",
              "Verify each phase before starting the next; errors compound across phases",
              "How to phrase phase prompts so the AI doesn't race ahead"
            ],
            "do": [
              "Split your MVP into 3-5 phases, each ending with something you can click",
              "Build phase one only, test it thoroughly, then proceed",
              "Keep a PHASES.md checklist and check items off as the AI completes them"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "If a phase takes more than a few prompts to get right, the phase was too big. Split it, don't push through."
          },
          {
            "t": "Spec-Driven Development",
            "d": "Write the spec document first and make the AI build against it, not against your vibes.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What a good spec contains: user stories, data models, API shapes, edge cases, non-goals",
              "The spec is the contract: when output drifts, point at the spec, not your feelings",
              "Specs are cheap to revise; generated code is expensive to untangle"
            ],
            "do": [
              "Have the AI interview you about your app, then draft SPEC.md from your answers",
              "Review the spec yourself and fix three things before any code exists",
              "Start the build with: 'Implement phase 1 per SPEC.md; ask before deviating'"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "The spec is where your judgment lives. Spend your brain there; let the AI spend its tokens on implementation."
          },
          {
            "t": "Build a Project Brief",
            "d": "One page the AI reads before anything else: stack, features, constraints, and taste.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Brief contents: tech stack, target user, core features, explicit non-goals, style preferences",
              "Why stack choice matters: popular stacks get better AI output from more training data",
              "Store it as CLAUDE.md or AGENTS.md so every session starts informed"
            ],
            "do": [
              "Write a one-page brief for your project following the template above",
              "Explicitly choose a popular stack and write down why",
              "Save it as the project's context file and reference it in your first build prompt"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Pick boring, popular technology. The AI has seen a million Next.js apps and three of your exotic framework; guess which output is better."
          },
          {
            "t": "Show, Don't Just Tell",
            "d": "Feed the AI mockups, screenshots, and example code: references beat adjectives.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "'Modern and clean' means nothing; a screenshot means everything",
              "Reference inputs: UI mockups, competitor screenshots, code samples, API docs",
              "Multimodal prompting: paste images directly into the chat"
            ],
            "do": [
              "Collect 3-5 reference screenshots for the look you want",
              "Attach one to your next UI prompt and compare output vs a text-only prompt",
              "Build a references/ folder the AI can consult during the build"
            ],
            "tools": ["Claude Code", "v0"],
            "res": [
              ["v0", "https://v0.dev"],
              ["Lovable", "https://lovable.dev"]
            ],
            "tip": "A single reference image does more than a paragraph of style description. Designers figured this out decades ago with mood boards."
          }
        ]
      },
      {
        "t": "Prompting for Code",
        "d": "The prompting discipline that separates working software from prompt soup.",
        "lv": 2,
        "children": [
          {
            "t": "One Task at a Time",
            "d": "Single, focused requests beat mega-prompts listing five features at once.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Attention dilution: each added task steals focus from the others",
              "The checkpoint rhythm: prompt, verify, commit, next task",
              "How to queue work without cramming it into one prompt"
            ],
            "do": [
              "Take a five-item mega-prompt and split it into five sequential prompts",
              "Verify and commit after each one before proceeding",
              "Notice which approach produced fewer bugs and less rework"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Mega-prompts feel productive and produce spaghetti. One task per prompt feels slow and produces software."
          },
          {
            "t": "Be Specific, Not Vague",
            "d": "Name files, functions, and behaviors. Vague prompts get average code.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Specificity checklist: which files, what function names, what inputs/outputs, what edge cases",
              "Constraints are kindness: 'use the existing auth middleware' prevents reinvention",
              "Before/after: rewrite a vague prompt and compare the outputs side by side"
            ],
            "do": [
              "Rewrite your last vague prompt with file names and function signatures",
              "Add one constraint ('must reuse X') and one edge case to every prompt this week",
              "Keep a log of which specific details correlated with good output"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "'Make it better' is not a prompt. 'Add loading skeletons to the dashboard cards in components/Dashboard.tsx' is a prompt."
          },
          {
            "t": "Tell It What NOT to Do",
            "d": "Accumulate anti-patterns from past sessions into standing negative instructions.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Negative instructions that work: 'don't add new dependencies', 'don't refactor unrelated files'",
              "Where they live: your context file, so every session inherits the lessons",
              "Why NOT beats DO: preventing the three mistakes it always makes is high-leverage"
            ],
            "do": [
              "List the three things AI tools always do wrong in your projects",
              "Add them as 'never do this' rules to your project context file",
              "After each session, append any new anti-pattern you discovered"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Your 'don't' list is the most valuable file you own. It's the distilled scar tissue of every bad AI session you've survived."
          },
          {
            "t": "Ask It to Think First",
            "d": "On hard problems, demand a plan or brainstorm before a single line of code.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Thinking triggers: 'think through three approaches', 'brainstorm before coding', plan mode",
              "When thinking pays: architecture, tricky bugs, anything touching data or money",
              "When it's waste: mechanical tasks where deliberation just burns tokens"
            ],
            "do": [
              "On your next hard task, require a written plan and critique it before approving",
              "Ask for three approaches with tradeoffs, then pick one explicitly",
              "Compare plan-first vs code-first on similar tasks and note the rework difference"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Code is cheap to generate and expensive to delete. Thinking is the opposite. Front-load the cheap part."
          },
          {
            "t": "Keep a Living Context Doc",
            "d": "Maintain CLAUDE.md or AGENTS.md as the project's evolving brain: update it as you learn.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What goes in: stack, commands, conventions, known gotchas, your don't-list",
              "The update ritual: after each session, add what the AI needed to be told twice",
              "Why it compounds: session 20 starts where session 19 ended, not from zero"
            ],
            "do": [
              "Create the context file if you don't have one; seed it from your project brief",
              "After your next three sessions, add one lesson to it each time",
              "Delete one stale rule; feel how curation keeps the file trustworthy"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "A context doc you never update is a diary, not a tool. The five minutes after each session is when the lessons are fresh."
          },
          {
            "t": "Borrow Skills from Others",
            "d": "Use community skills, prompt libraries, and shared configs instead of inventing everything.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Where to find them: community skill repos, plugin marketplaces, teammates' dotfiles",
              "Evaluation before adoption: run a skill on a dry task before trusting it",
              "Adapt, don't adopt blindly: tune borrowed prompts to your stack"
            ],
            "do": [
              "Find and install one community skill relevant to your stack",
              "Test it on a safe task and note what you'd change",
              "Share your best prompt or skill back with someone"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code repo", "https://github.com/anthropics/claude-code"]
            ],
            "tag": "opt",
            "tip": "Borrowed skills are starting points, not gospel. The best practitioners steal the structure and rewrite the details."
          }
        ]
      },
      {
        "t": "Context and Session Hygiene",
        "d": "Fresh chats, restart rules, and parallel agents keep long builds from degrading.",
        "lv": 2,
        "children": [
          {
            "t": "Fresh Task, Fresh Chat",
            "d": "Start a new session for unrelated work; stale context is where weird bugs come from.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Why: leftover context from task A pollutes decisions in task B",
              "The test: if you'd need to explain background, you need a fresh session",
              "Session-per-feature as a team convention"
            ],
            "do": [
              "Finish your current task, then deliberately start fresh for the next one",
              "Compare: continue an old session for a new feature vs fresh start; note the confusion",
              "Write the session rule into your context doc"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Context is like a whiteboard: great while you're working one problem, a mess when you start a second one on top of it."
          },
          {
            "t": "The Three-Strike Rule",
            "d": "If the AI fails the same thing three times, stop prompting and change strategy.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "The failure spiral: each retry adds confusion, making success less likely",
              "Escape hatches: restart the chat, shrink the task, or debug it yourself for ten minutes",
              "Recognizing model limits vs prompt problems"
            ],
            "do": [
              "Next time you're stuck in a retry loop, enforce the rule: stop at three",
              "Try each escape hatch once and note which one actually unblocked you",
              "Add the rule to your context doc so future-you obeys it"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "The fourth retry of the same prompt has never fixed anything. Change the strategy, not the wording."
          },
          {
            "t": "Delegate to Subagents",
            "d": "Let subagents research, build, and review in parallel while you direct.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What parallelizes well: independent research, per-area implementation, code review",
              "The director pattern: you brief, agents execute slices, you integrate",
              "Review debt: parallel output means parallel review; budget for it"
            ],
            "do": [
              "Delegate a research task (e.g. 'compare three auth libraries') to a subagent",
              "Run build and review as parallel agents on one feature",
              "Practice the integration step: merging parallel outputs into one coherent result"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code"]
            ],
            "tip": "Subagents are interns with infinite energy and no judgment. Give them bounded tasks with clear done criteria."
          },
          {
            "t": "Watch the Context Budget",
            "d": "Long sessions get dumber; learn the signs and restart before quality collapses.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Symptoms of a full window: repeated questions, forgotten constraints, sloppy edits",
              "The /context command shows where your tokens are going",
              "Compact at phase boundaries; restart between features"
            ],
            "do": [
              "Check /context mid-session and identify the biggest consumer",
              "Deliberately work a session past its prime to learn what degradation feels like",
              "Set a personal restart threshold and stick to it for a week"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Anthropic: Claude Code best practices", "https://www.anthropic.com/engineering/claude-code-best-practices"]
            ],
            "tip": "Blaming the model for late-session sloppiness is like blaming a chef for a dull knife. Sharpen the context, don't curse the kitchen."
          }
        ]
      },
      {
        "t": "Debugging with AI",
        "d": "Turn the AI into your debugging partner: errors in, hypotheses out, verified fixes.",
        "lv": 2,
        "children": [
          {
            "t": "Paste the Error, All of It",
            "d": "Full stack traces and logs in, not paraphrased summaries from memory.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Why full errors matter: the crucial line is never the one you remembered",
              "Include context: what you ran, what you expected, what happened instead",
              "Repro steps beat descriptions: 'run X, click Y' lets the AI reason causally"
            ],
            "do": [
              "Next bug: paste the complete terminal output instead of summarizing",
              "Add the repro steps and the last change you made before it broke",
              "Compare diagnosis quality against your old summarize-from-memory habit"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Paraphrasing an error is lossy compression of the one thing the AI needs most. Copy-paste is a debugging skill."
          },
          {
            "t": "Ask for Hypotheses, Not Just Fixes",
            "d": "Get a ranked list of possible causes before anyone touches code.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The prompt: 'list the three most likely causes, then tell me how to rule each out'",
              "Why it works: forces reasoning before action; you learn the system, not just the fix",
              "Ruling out is faster than fixing blind: one log line can kill two hypotheses"
            ],
            "do": [
              "On your next bug, demand hypotheses first and forbid code changes until you've picked one",
              "Rule out at least one hypothesis with evidence before implementing",
              "Keep a bug journal: symptom, hypotheses, actual cause; patterns emerge"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "An AI that jumps straight to a fix is guessing with extra steps. Hypotheses first turns debugging into science."
          },
          {
            "t": "Add Logging to Find It Faster",
            "d": "When stuck, have the AI instrument the code, then read the logs together.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Strategic logging: at boundaries (API in/out, state transitions), not everywhere",
              "Temporary vs permanent: mark debug logs clearly so they don't ship",
              "Reading logs is a skill: look for the first deviation from expected, not the final error"
            ],
            "do": [
              "Ask the AI to add temporary logging around a suspicious function",
              "Run, read the logs, and identify the first wrong value",
              "Remove the temporary logs after the fix and verify the diff is clean"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "printf debugging never died; it just got an AI assistant. Logs show what actually happened, which beats any theory."
          },
          {
            "t": "Verify in a Real Browser",
            "d": "For UI bugs, make the AI drive a real browser and look at screenshots, not code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Playwright MCP lets the agent click, screenshot, and read console errors",
              "The loop: reproduce visually, fix, re-screenshot, compare",
              "Console errors and network failures are the UI equivalent of stack traces"
            ],
            "do": [
              "Set up Playwright MCP and have the agent screenshot your app's main page",
              "Reproduce one visual bug through the browser, not by reading code",
              "Add 'screenshot after UI changes' to your verification checklist"
            ],
            "tools": ["Claude Code", "Playwright"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"]
            ],
            "tip": "Reading JSX to find a CSS bug is archaeology. A screenshot shows the crime scene directly."
          },
          {
            "t": "Read the Diff Yourself",
            "d": "Never merge AI output you haven't at least skimmed; the diff is the truth.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What to scan for: unrelated changes, new dependencies, deleted code, hardcoded values",
              "git diff as a reading habit: review before every commit, no exceptions",
              "The 80/20 review: skim everything, deep-read the parts touching data, auth, or money"
            ],
            "do": [
              "Review your next three AI-generated diffs line by line before committing",
              "Reject one diff and make the AI redo it narrower",
              "Time your reviews; aim for review time proportional to diff risk"
            ],
            "tools": ["git", "Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "The diff is where vibe coding either stays engineering or becomes gambling. Skim everything; study the scary parts."
          }
        ]
      },
      {
        "t": "Git: Your Safety Net",
        "d": "Version control turns AI experiments from scary into reversible.",
        "lv": 2,
        "children": [
          {
            "t": "Clean Slate Per Feature",
            "d": "Every AI task starts on a fresh branch from a clean tree.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Branch-per-task: isolates AI experiments from your working code",
              "Clean tree check: `git status` empty before the AI starts",
              "Naming: descriptive branch names so abandoned experiments are recognizable"
            ],
            "do": [
              "Create a feature branch and verify a clean status before your next AI task",
              "Abandon one branch deliberately to practice the throwaway mindset",
              "Write the branch rule into your project conventions"
            ],
            "tools": ["git"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Branches make AI work disposable. The freedom to throw away bad output is what lets you aim ambitiously."
          },
          {
            "t": "Commit After Every Win",
            "d": "Small, frequent commits turn a long AI session into recoverable checkpoints.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Checkpoint rhythm: working state plus tests green equals commit",
              "Good messages matter more with AI: future-you needs to know what the agent did",
              "Let the AI draft commit messages, but you approve them"
            ],
            "do": [
              "Commit after your next three completed AI tasks, each with a clear message",
              "Practice `git log` reading: can you reconstruct the session from messages alone?",
              "Set a rule: never start a new prompt with uncommitted working changes"
            ],
            "tools": ["git"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Commit like the AI might break everything in the next prompt, because eventually it will."
          },
          {
            "t": "Revert with Git, Not the AI",
            "d": "When output goes wrong, git checkout beats asking the AI to undo its mess.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Why AI undo fails: the agent can't reliably reverse its own tangled edits",
              "`git checkout -- .`, `git reset`, and `git stash` as your escape hatches",
              "Reverting is not failure; it's the system working as designed"
            ],
            "do": [
              "Let an AI task go sideways, then revert with git instead of prompting fixes",
              "Practice stashing: save an experiment without committing it",
              "Time both approaches once; the stopwatch settles the argument"
            ],
            "tools": ["git"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Asking the AI to un-break its own breakage is like asking the bull to fix the china shop. Git is the broom."
          },
          {
            "t": "Let AI Drive GitHub CLI",
            "d": "Have the AI handle branches, PRs, and issues with `gh` while you supervise.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`gh pr create`, `gh issue list`, `gh pr checks`: the AI's GitHub vocabulary",
              "PR descriptions written by AI from the actual diff beat human memory",
              "Supervision points: review the PR body and the checks before merging"
            ],
            "do": [
              "Have the AI open a PR with `gh`, writing the description from the diff",
              "Ask it to triage your open issues into a prioritized list",
              "Check CI status via `gh pr checks` before every merge"
            ],
            "tools": ["GitHub CLI", "Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "AI-written PR descriptions are genuinely good because they're generated from the diff, not from optimistic memory."
          },
          {
            "t": "Review AI Commits Before Pushing",
            "d": "Local commits are cheap; pushed history is forever. Inspect before you push.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "The push boundary: everything before it is fixable, everything after is public",
              "`git log -p` review of the full branch before push",
              "Interactive rebase to squash AI's twenty micro-commits into a clean story"
            ],
            "do": [
              "Review a full AI-generated branch with `git log -p` before pushing",
              "Squash a messy AI commit history into logical commits",
              "Set a personal checklist: diff reviewed, tests green, secrets absent"
            ],
            "tools": ["git"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Push is the point of no return. Everything before it is a draft; treat the pre-push review like publishing."
          }
        ]
      },
      {
        "t": "Testing Discipline",
        "d": "Tests are how you trust AI-written code: generate them, run them, refactor on green.",
        "lv": 2,
        "children": [
          {
            "t": "Ask AI to Write the Tests",
            "d": "Every feature ships with AI-generated tests that you review for meaningful assertions.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Test generation prompts: 'write tests covering happy path, edge cases, and failures'",
              "Reviewing tests: assert behavior, not implementation; watch for tautological tests",
              "Coverage as a signal, not a goal: 80% of meaningful tests beats 100% of trivial ones"
            ],
            "do": [
              "Have the AI write tests for your last feature and review each assertion",
              "Delete one tautological test and explain why it proved nothing",
              "Run the suite and fix the failures before moving on"
            ],
            "tools": ["Claude Code", "Vitest", "Jest", "Pytest"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "AI-written tests can be theater: green, numerous, and asserting nothing. Read the assertions, not the count."
          },
          {
            "t": "Bug to Failing Test to Fix",
            "d": "The golden loop: reproduce with a failing test first, then fix, then watch it go green.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why test-first fixing works: proves the bug, proves the fix, prevents regression",
              "The prompt: 'write a failing test that reproduces this bug before changing anything'",
              "Regression suites as compound interest: each bug makes the codebase permanently stronger"
            ],
            "do": [
              "Take a real bug and make the AI write the failing test before the fix",
              "Verify the test fails for the right reason, not accidentally",
              "Keep the test; it's now a permanent guard"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "A fix without a failing test is a rumor. The test is the proof, and it keeps proving forever."
          },
          {
            "t": "Try TDD with AI",
            "d": "Tests first, then implementation: the AI writes code to satisfy specs you defined as tests.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The TDD loop with an AI driver: you write the test intent, AI implements, tests judge",
              "Why it suits vibe coding: tests are the most precise spec format that exists",
              "When TDD slows you down: pure UI exploration and throwaway prototypes"
            ],
            "do": [
              "Build one small feature strict-TDD: test, watch it fail, implement, watch it pass",
              "Compare the design quality against a code-first feature you built",
              "Decide which parts of your project deserve TDD and which don't"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tag": "opt",
            "tip": "TDD with AI feels backwards at first because you're doing the thinking. That's the point: you think, it types."
          },
          {
            "t": "E2E Tests for Stability",
            "d": "End-to-end tests that click through your app catch what unit tests can't.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What E2E covers: critical user journeys (signup, checkout, core loop)",
              "Playwright as the default: fast, reliable, great AI support",
              "Keep the E2E suite small: ten critical paths beat a hundred flaky ones"
            ],
            "do": [
              "Have the AI write E2E tests for your app's three most critical flows",
              "Run them, fix the flakiness, and get the suite reliably green",
              "Run E2E before every deploy, not just in CI"
            ],
            "tools": ["Playwright", "Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Unit tests check the bricks; E2E checks the house. AI builds houses fast, so check the house."
          },
          {
            "t": "Refactor on Green",
            "d": "With tests passing, let the AI simplify, modularize, and clean up fearlessly.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Green tests are a safety net that makes bold refactors safe",
              "Refactor prompts: 'split this 400-line file into modules', 'remove duplication'",
              "Small-file discipline: ask the AI to keep modules focused and files short"
            ],
            "do": [
              "Identify your ugliest AI-generated file and have the AI refactor it with tests green",
              "Run the full suite after and confirm zero regressions",
              "Add 'keep files under ~200 lines' to your context doc"
            ],
            "tools": ["Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "AI writes the first draft fast and ugly. Refactoring on green is how drafts become software."
          }
        ]
      },
      {
        "t": "Ship It Safely",
        "d": "Security audits, secret hygiene, and deploy discipline for code you didn't type.",
        "lv": 3,
        "children": [
          {
            "t": "Security Audit Prompts",
            "d": "Make the AI attack its own code: explicit security reviews before anything ships.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Audit prompts: 'review for OWASP Top 10', 'find injection and auth flaws in this diff'",
              "What AI audits catch: obvious injection, missing auth checks, exposed endpoints",
              "What they miss: business-logic flaws and anything requiring real attacker mindset"
            ],
            "do": [
              "Run an AI security audit on your app and triage every finding",
              "Fix the valid ones; document why the false positives are false",
              "Schedule audits before each release, not after incidents"
            ],
            "tools": ["Claude Code", "OWASP ZAP"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "AI security audits are a floor, not a ceiling. They catch the embarrassing stuff; your brain still owns the threat model."
          },
          {
            "t": "Secrets Stay Out of Prompts",
            "d": "API keys and credentials never enter chats, diffs, or repos. Ever.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The rule: secrets live in env files and secret managers, referenced never pasted",
              ".env in .gitignore from day one; .env.example documents what's needed",
              "What to do when a secret leaks into a chat or commit (rotate it, immediately)"
            ],
            "do": [
              "Audit your repo and chats for any pasted secrets; rotate anything exposed",
              "Set up .env.example and verify .env is ignored",
              "Add a pre-commit hook or AI guardrail that blocks secret patterns"
            ],
            "tools": ["git", "Doppler"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Pasting an API key into a chat feels harmless and is permanent. Treat every prompt box as a public forum."
          },
          {
            "t": "Dependency Hygiene",
            "d": "Audit what the AI installs: every dependency is code you didn't review.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Why it matters: AI loves adding packages; each one is attack surface and maintenance",
              "Review prompts: 'justify each dependency; suggest stdlib alternatives'",
              "Pin versions, audit regularly, remove what you don't use"
            ],
            "do": [
              "List every dependency the AI added and justify or remove each one",
              "Run an audit (npm audit / pip audit) and fix what's fixable",
              "Add 'ask before adding dependencies' to your context doc"
            ],
            "tools": ["npm", "Claude Code"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "An AI that installs seven packages for a date picker is not being helpful. Challenge every dependency like it costs money, because it does."
          },
          {
            "t": "The Human Review Ritual",
            "d": "A pre-merge checklist that no AI output skips: your signature on the work.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Checklist anatomy: diff reviewed, tests green, no secrets, deps justified, spec matched",
              "Risk-based depth: skim UI tweaks, scrutinize auth/data/money code",
              "Two-person rule for critical paths: AI plus human, or human plus human"
            ],
            "do": [
              "Write your personal pre-merge checklist and tape it where you'll see it",
              "Run it on your next three merges without skipping steps",
              "Refine it: remove checks that never catch anything, strengthen ones that do"
            ],
            "tools": ["git"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Checklists feel bureaucratic until they catch the bug that would have paged you at 3am. Pilots use them; so should you."
          },
          {
            "t": "Deploy Checklists",
            "d": "Staging first, smoke tests, rollback plan: boring ops that save launches.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The deploy order: staging deploy, smoke test, production deploy, verify",
              "Rollback readiness: know exactly how to revert before you need to",
              "Environment parity: staging must mirror prod or the test proves nothing"
            ],
            "do": [
              "Deploy your app to staging and run through the critical flows",
              "Write down your rollback procedure in one paragraph",
              "Do a practice rollback so the real one isn't your first"
            ],
            "tools": ["Vercel", "Railway", "Fly.io"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Everyone plans the deploy; nobody plans the rollback until they need it. Write the rollback first."
          },
          {
            "t": "Ship Your First Vibe-Coded App",
            "d": "Full loop, production, real users: plan, build, test, secure, deploy, and monitor.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Putting it all together: every discipline from this roadmap in one project",
              "Monitoring basics: error tracking, uptime checks, usage analytics",
              "The iteration loop: ship small, watch real usage, improve weekly"
            ],
            "do": [
              "Ship a complete app to production following every checklist in this roadmap",
              "Set up error tracking and check it daily for the first week",
              "Get three real users and fix the top complaint within 48 hours"
            ],
            "tools": ["Claude Code", "Vercel", "Sentry"],
            "res": [
              ["Vibe coding roadmap", "https://roadmap.sh/vibe-coding"]
            ],
            "tip": "Shipping is the only test that matters. A deployed app with ten users teaches more than a perfect local build.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
