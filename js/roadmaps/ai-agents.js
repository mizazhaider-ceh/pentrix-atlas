/* Atlas roadmap data: AI Agents (ai-agents) */
ROADMAPS.push({
  "id": "ai-agents",
  "title": "AI Agents",
  "icon": "🦾",
  "color": "#a3e635",
  "desc": "Build AI agents that act: the loop, tools, memory, architectures, frameworks, and evals.",
  "kind": "skill",
  "root": {
    "t": "Building AI Agents",
    "d": "From the agent loop to production-grade multi-agent systems.",
    "children": [
      {
        "t": "Agent Foundations",
        "d": "What agents are, the loop they run, and the economics behind them.",
        "lv": 1,
        "children": [
          {
            "t": "What Is an AI Agent?",
            "d": "A chatbot answers. An agent perceives, plans, acts with tools, and learns from results.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Agent vs chatbot vs workflow: autonomy and tool use are the dividing lines",
              "The four loop phases: perception, reasoning, action, observation",
              "What agents are actually good at in 2026: research, coding, data work, ops automation"
            ],
            "do": [
              "Use a coding agent for one real task and note every tool call it made",
              "Write down where it succeeded, where it looped, and where it needed you",
              "List three tasks in your life that fit the agent shape and three that do not"
            ],
            "tools": ["Claude Code", "ChatGPT", "Cursor"],
            "res": [
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"],
              ["OpenAI Agents Guide", "https://platform.openai.com/docs/guides/agents"]
            ]
          },
          {
            "t": "The Agent Loop, Deep",
            "d": "Perceive, reason, act, observe: master the heartbeat before touching any framework.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Perception: user input plus tool observations form the agent's world model",
              "Reasoning and planning: the model decides the next action, often via a ReAct trace",
              "Action and observation: tool invocation returns data that feeds the next cycle",
              "Termination: step budgets, explicit finish signals, and when to ask the human"
            ],
            "do": [
              "Hand-simulate the loop for 'book me the cheapest flight Friday' and list each phase",
              "Draw the loop as a flowchart including the stop conditions",
              "Identify the loop phases in a real agent's transcript"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["LangChain Docs", "https://docs.langchain.com"],
              ["ReAct Paper (arXiv)", "https://arxiv.org/abs/2210.03629"]
            ]
          },
          {
            "t": "Prerequisites Check",
            "d": "Backend basics, git, and REST: the unglamorous skills every agent builder needs.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Python fluency: async, JSON handling, and calling HTTP APIs",
              "Git and terminal comfort for iterating fast",
              "REST fundamentals: requests, auth headers, status codes, pagination"
            ],
            "do": [
              "Build a CLI that calls a public API and prints formatted results",
              "Write an async script that fans out 10 API calls concurrently",
              "Push it to GitHub with a README explaining what it does"
            ],
            "tools": ["Python", "Git", "httpx"],
            "res": [
              ["Python Tutorial", "https://docs.python.org/3/tutorial/"],
              ["MDN: HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"]
            ],
            "tag": "opt"
          },
          {
            "t": "Reasoning vs Standard Models",
            "d": "When to pay for a model that thinks, and when a fast one is enough.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Reasoning models spend extra compute on internal thinking; better at planning and hard logic",
              "Standard models are cheaper and faster; fine for single-step tool calls and classification",
              "Hybrid pattern: reasoning model plans, cheap model executes sub-steps"
            ],
            "do": [
              "Run the same 5-step planning task on a reasoning and a standard model",
              "Compare cost, latency, and success rate side by side",
              "Design a two-model agent: which steps get which model"
            ],
            "tools": ["OpenAI", "Anthropic", "Gemini"],
            "res": [
              ["OpenAI Reasoning Guide", "https://platform.openai.com/docs/guides/reasoning"],
              ["Anthropic Docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Token Pricing and Context Budgets",
            "d": "Agents burn tokens in loops. Budget before you build, not after the invoice.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Token-based pricing: input vs output rates differ wildly across models",
              "Why agent cost is unpredictable: loops multiply per-step cost by step count",
              "Budgeting levers: step caps, smaller models for easy steps, caching repeated context"
            ],
            "do": [
              "Price one agent run at p50 and p99 step counts using a provider's pricing page",
              "Set a per-task dollar budget and enforce it with a step cap",
              "Estimate monthly cost for 1,000 agent runs per day"
            ],
            "tools": ["OpenRouter", "Helicone"],
            "res": [
              ["OpenRouter", "https://openrouter.ai"],
              ["Helicone", "https://www.helicone.ai"]
            ]
          },
          {
            "t": "Agent Use Cases That Work",
            "d": "Not everything should be an agent. Learn to spot the tasks where autonomy pays.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Good fits: multi-step research, code changes, data pipelines, monitoring with actions",
              "Bad fits: single deterministic transforms, ultra-low-latency paths, high-stakes irreversible actions",
              "The test: does the task need judgment at intermediate steps, or just execution?"
            ],
            "do": [
              "Score five of your own ideas on judgment-needed vs determinism",
              "Find one production agent case study and note its guardrails",
              "Kill your weakest idea and write why in one paragraph"
            ],
            "tools": ["n8n", "Claude Code"],
            "res": [
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"],
              ["n8n", "https://n8n.io"]
            ]
          }
        ]
      },
      {
        "t": "Tools & Function Calling",
        "d": "Give the agent hands: tool design, native function calling, and MCP.",
        "lv": 1,
        "children": [
          {
            "t": "What Tools Are",
            "d": "Tools turn a model that talks about actions into a system that takes them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Tool definition: name, description, and a JSON Schema for parameters",
              "The function-calling loop: model requests a call -> your code runs it -> result returns as a message",
              "Common tool classes: web search, code execution, databases, APIs, file systems, messaging"
            ],
            "do": [
              "Define a calculator tool schema by hand in JSON",
              "Trace a full tool-call round trip in a provider's docs example",
              "List the tools a coding agent exposes and categorize them"
            ],
            "tools": ["OpenAI", "Anthropic"],
            "res": [
              ["OpenAI Function Calling", "https://platform.openai.com/docs/guides/function-calling"],
              ["Anthropic Tool Use", "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use"]
            ]
          },
          {
            "t": "Designing Good Tools",
            "d": "Tool design is prompt design: the description is the UI the model sees.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Narrow and deterministic beats broad and clever: one tool, one job",
              "Descriptions must say when to use the tool and what the arguments mean, with examples",
              "Return values should be compact and structured; huge blobs poison the context"
            ],
            "do": [
              "Write three tool descriptions for a data-analysis agent",
              "Test tool selection accuracy on 10 tasks and fix the failures by rewriting descriptions",
              "Shrink a verbose tool output to the fields the model actually needs"
            ],
            "tools": ["Python", "Pydantic"],
            "res": [
              ["Anthropic Tool Use", "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use"],
              ["Pydantic Docs", "https://docs.pydantic.dev"]
            ],
            "tip": "When the model picks the wrong tool, the bug is in your description, not the model. Rewrite the description before touching anything else."
          },
          {
            "t": "Native Function Calling in Practice",
            "d": "Wire up the full loop with a real provider: parallel calls, errors, and retries.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Parallel tool calls: the model can request several at once; execute them concurrently",
              "Error handling: tool failures return as observations, and the model should recover",
              "Forcing behavior: tool_choice for required vs optional tool use"
            ],
            "do": [
              "Build the complete loop: prompt -> tool calls -> execute -> feed back -> final answer",
              "Handle a tool that raises an exception and watch the model retry differently",
              "Add parallel execution and measure the latency win"
            ],
            "tools": ["Python", "OpenAI", "Anthropic"],
            "res": [
              ["OpenAI Function Calling", "https://platform.openai.com/docs/guides/function-calling"],
              ["Gemini Function Calling", "https://ai.google.dev/gemini-api/docs/function-calling"]
            ]
          },
          {
            "t": "MCP: The Universal Tool Interface",
            "d": "One protocol for every tool: how MCP hosts, clients, and servers fit together.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "MCP roles: hosts run clients, clients talk to servers, servers expose tools, resources, and prompts",
              "Transports: stdio for local servers, streamable HTTP for remote ones",
              "Why it matters: write one integration, use it from every MCP-compatible agent"
            ],
            "do": [
              "Connect an MCP client to a public server (filesystem, GitHub, or Postgres)",
              "List the tools a server advertises and read their schemas",
              "Compare an MCP integration against a hand-rolled function-calling integration"
            ],
            "tools": ["MCP SDK", "Claude Code", "Cursor"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["MCP Servers Registry", "https://github.com/modelcontextprotocol/servers"]
            ]
          },
          {
            "t": "Build an MCP Server",
            "d": "Expose your own tools over MCP: local first, then remote.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "Server anatomy: tool definitions, handlers, and advertised capabilities",
              "Local deployment via stdio for desktop clients",
              "Remote deployment: auth, hosting, and connecting from anywhere"
            ],
            "do": [
              "Build an MCP server with two custom tools using the official SDK",
              "Connect it to a desktop MCP client and use the tools",
              "Deploy it remotely and connect over HTTP"
            ],
            "tools": ["MCP SDK", "Python", "TypeScript"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["MCP Python SDK", "https://github.com/modelcontextprotocol/python-sdk"]
            ],
            "badge": "LAB"
          },
          {
            "t": "The Standard Toolbelt",
            "d": "Search, code execution, and APIs: the tools nearly every agent needs.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Web search APIs (Tavily, Brave) give agents fresh knowledge beyond training data",
              "Code execution sandboxes let agents compute instead of guessing",
              "API and database tools connect agents to your real systems"
            ],
            "do": [
              "Give an agent a search tool and test it on a question about this week's news",
              "Add a Python REPL tool and have the agent solve a data question by computing",
              "Connect a read-only database tool and ask natural-language questions"
            ],
            "tools": ["Tavily", "E2B", "DuckDB"],
            "res": [
              ["Tavily", "https://tavily.com"],
              ["E2B", "https://e2b.dev"]
            ]
          }
        ]
      },
      {
        "t": "Agent Memory",
        "d": "Remember across turns, sessions, and months: the memory stack.",
        "lv": 2,
        "children": [
          {
            "t": "What Agent Memory Is",
            "d": "Memory is whatever persists beyond the current prompt: short-term, long-term, and the strategies between.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Short-term memory lives inside the context window: conversation history and scratchpads",
              "Long-term memory lives outside it: vector stores, databases, and user profiles",
              "The memory problem is retrieval and relevance, not storage"
            ],
            "do": [
              "Map the memory types of a personal-assistant agent you would build",
              "Decide what goes in context vs what goes in a store for three scenarios",
              "Sketch the read/write flow for one user preference"
            ],
            "tools": ["LangChain", "Mem0"],
            "res": [
              ["Mem0", "https://mem0.ai"],
              ["LangChain Memory", "https://docs.langchain.com"]
            ]
          },
          {
            "t": "Short-Term Memory in Context",
            "d": "Conversation history as working memory: what to keep, compress, or drop.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Full history is simplest but grows without bound and degrades long sessions",
              "Sliding windows keep recent turns; summarization compresses older ones",
              "Scratchpads: letting the agent keep explicit working notes between steps"
            ],
            "do": [
              "Implement a sliding-window history that keeps the last N turns",
              "Add summarization: compress turns past a token threshold into a summary",
              "Compare agent quality on a long task with and without summarization"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["LangChain Memory", "https://docs.langchain.com"],
              ["Anthropic Context Engineering", "https://www.anthropic.com/engineering"]
            ]
          },
          {
            "t": "Long-Term Memory with Vector Stores",
            "d": "Remember across sessions: embed experiences, retrieve what matters.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Episodic memory: past interactions and events, retrieved by semantic similarity",
              "Semantic memory: durable facts about the user and world, stored as structured records",
              "Write path matters as much as read path: what deserves to be remembered"
            ],
            "do": [
              "Store conversation summaries in a vector DB keyed by embedding",
              "Retrieve relevant memories at the start of a new session",
              "Build a user-profile store with explicit facts the agent reads each turn"
            ],
            "tools": ["Qdrant", "Chroma", "Mem0"],
            "res": [
              ["Qdrant Docs", "https://qdrant.tech/documentation/"],
              ["Mem0", "https://mem0.ai"]
            ]
          },
          {
            "t": "Episodic vs Semantic Memory",
            "d": "Stories vs facts: two memory types with different storage and retrieval shapes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Episodic: 'last Tuesday the user asked for...' — timestamped, narrative, similarity-retrieved",
              "Semantic: 'the user prefers...' — stable facts, better in structured stores",
              "Hybrid systems keep both and route queries to the right one"
            ],
            "do": [
              "Classify 20 memories as episodic or semantic and pick a store for each",
              "Build a router that queries both and merges results",
              "Test which memory type answers 'what did we decide about X?'"
            ],
            "tools": ["Python", "SQLite", "Qdrant"],
            "res": [
              ["Mem0", "https://mem0.ai"],
              ["LangChain Docs", "https://docs.langchain.com"]
            ]
          },
          {
            "t": "Summarization and Compaction",
            "d": "Long sessions rot. Compaction keeps agents sharp across hundreds of steps.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Compaction triggers: token thresholds, step counts, or explicit checkpoints",
              "What a good summary preserves: goals, decisions, pending items, key facts",
              "Progressive summarization: summaries of summaries for very long runs"
            ],
            "do": [
              "Write a summarizer prompt that preserves goals, decisions, and open items",
              "Trigger compaction mid-task and verify the agent continues correctly",
              "Measure quality loss from compaction on a long benchmark task"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["Anthropic Context Engineering", "https://www.anthropic.com/engineering"],
              ["LangChain Docs", "https://docs.langchain.com"]
            ],
            "tip": "Bad summaries are the silent killer of long agent runs. Always preserve open loops and pending tool results; narrative detail can go."
          },
          {
            "t": "Forgetting and Memory Hygiene",
            "d": "Stale memory causes confident wrongness. Design forgetting on purpose.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Aging strategies: TTLs, decay scores, and explicit invalidation on contradiction",
              "Contradiction handling: new facts should supersede, not coexist with, old ones",
              "Privacy angle: forgetting is also a compliance feature (data minimization)"
            ],
            "do": [
              "Add TTLs to your memory store and watch stale entries expire",
              "Implement contradiction detection: new preference replaces the old one",
              "Write a 'forget me' path that deletes a user's memories on request"
            ],
            "tools": ["Python", "SQLite"],
            "res": [
              ["Mem0", "https://mem0.ai"],
              ["OWASP LLM Top 10", "https://genai.owasp.org"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Agent Architectures",
        "d": "The proven patterns: ReAct, planner-executor, multi-agent, and reflection.",
        "lv": 2,
        "children": [
          {
            "t": "ReAct (Reason + Act)",
            "d": "The foundational pattern: think, act, observe, repeat until done.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The Thought/Action/Observation trace format and why explicit traces help",
              "When ReAct shines: multi-hop research and tool-heavy tasks",
              "Failure modes: looping on the same action, ignoring observations"
            ],
            "do": [
              "Implement a ReAct loop from scratch in under 80 lines",
              "Add loop detection: break when the same action repeats",
              "Benchmark it on three multi-hop questions"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["ReAct Paper (arXiv)", "https://arxiv.org/abs/2210.03629"],
              ["LangChain Agents", "https://docs.langchain.com"]
            ]
          },
          {
            "t": "Planner-Executor",
            "d": "Split thinking from doing: one model plans, another executes the steps.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The planner produces a step list; the executor runs each step with tools",
              "Replanning: when a step fails, the planner revises the remaining plan",
              "Why separation helps: different models and prompts for planning vs execution"
            ],
            "do": [
              "Build a planner that outputs JSON step plans",
              "Build an executor that runs steps and reports results",
              "Add replanning on step failure and test it"
            ],
            "tools": ["Python", "LangGraph"],
            "res": [
              ["LangGraph Docs", "https://docs.langchain.com/langgraph"],
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"]
            ]
          },
          {
            "t": "RAG Agents",
            "d": "Agents that decide what to retrieve: retrieval as a tool, not a pipeline.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Retrieval-as-tool: the agent chooses when and what to search mid-task",
              "Agentic RAG vs pipeline RAG: dynamic multi-hop retrieval vs fixed retrieve-then-generate",
              "Query routing: different retrievers for different knowledge sources"
            ],
            "do": [
              "Give your ReAct agent a retrieval tool over your docs",
              "Test it on a question requiring two separate retrievals",
              "Add a second retriever and let the agent route between them"
            ],
            "tools": ["LangChain", "LlamaIndex", "Qdrant"],
            "res": [
              ["LlamaIndex Agentic RAG", "https://docs.llamaindex.ai"],
              ["LangChain Docs", "https://docs.langchain.com"]
            ]
          },
          {
            "t": "Multi-Agent Collaboration",
            "d": "Teams of specialized agents: when one brain is not enough.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Patterns: supervisor/worker, peer debate, sequential pipelines, hierarchical crews",
              "Communication: shared state, message passing, or a blackboard",
              "Coordination costs: more agents means more tokens, latency, and failure modes"
            ],
            "do": [
              "Build a two-agent researcher/writer pipeline",
              "Add a critic agent that reviews the writer's output",
              "Measure cost and latency vs your single-agent baseline"
            ],
            "tools": ["CrewAI", "LangGraph", "AutoGen"],
            "res": [
              ["CrewAI Docs", "https://docs.crewai.com"],
              ["LangGraph Multi-Agent", "https://docs.langchain.com/langgraph"]
            ]
          },
          {
            "t": "Self-Critique and Reflection",
            "d": "Agents that review their own work catch errors before you do.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Reflection loops: generate -> critique against a rubric -> revise",
              "Self-consistency: sample multiple answers and take the consensus",
              "When reflection helps (open-ended quality) vs hurts (added cost, second-guessing)"
            ],
            "do": [
              "Add a critique step to your agent with a concrete rubric",
              "Compare single-pass vs reflect-and-revise on 10 tasks",
              "Cap reflection rounds and measure the cost overhead"
            ],
            "tools": ["Python", "DeepEval"],
            "res": [
              ["Reflexion Paper (arXiv)", "https://arxiv.org/abs/2303.11366"],
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"]
            ]
          },
          {
            "t": "Human-in-the-Loop Patterns",
            "d": "The most important architecture: knowing when to stop and ask.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Approval gates before irreversible actions: sends, deletes, purchases, deploys",
              "Interrupts and resumes: pausing a run, getting input, continuing with new context",
              "Escalation policies: confidence thresholds that route to a human"
            ],
            "do": [
              "Add an approval checkpoint before any write/delete tool in your agent",
              "Implement pause/resume with persisted state",
              "Define an escalation policy for your agent's riskiest action"
            ],
            "tools": ["LangGraph", "Python"],
            "res": [
              ["LangGraph Human-in-the-Loop", "https://docs.langchain.com/langgraph"],
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"]
            ],
            "tip": "Every production agent incident story starts with 'it had full tool access and no approval gate'. Build the gate before the demo, not after the incident."
          }
        ]
      }
      ,
      {
        "t": "Building with Frameworks",
        "d": "Hand-rolled first, then frameworks: LangGraph, CrewAI, and the 2026 landscape.",
        "lv": 2,
        "children": [
          {
            "t": "Build One Agent by Hand First",
            "d": "No framework: the loop, tools, and memory in raw code so frameworks never feel like magic.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "The complete anatomy: system prompt, tool registry, loop, memory, and stop conditions",
              "What frameworks abstract away: state management, retries, tracing hooks",
              "Why hand-rolled agents are often fine for simple, well-scoped tasks"
            ],
            "do": [
              "Write a full ReAct agent in one Python file with two tools",
              "Add conversation memory and a step budget",
              "Refactor it so the tool registry is data, not code"
            ],
            "tools": ["Python", "httpx"],
            "res": [
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"],
              ["OpenAI Function Calling", "https://platform.openai.com/docs/guides/function-calling"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "LangGraph: Stateful Graphs",
            "d": "Typed state, nodes, and edges: the 2026 standard for production agents.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "StateGraph: shared typed state flowing through nodes connected by conditional edges",
              "Checkpointing: durable execution, time-travel debugging, and pause/resume",
              "Human-in-the-loop interrupts as first-class graph nodes"
            ],
            "do": [
              "Build a two-node agent graph with a checkpointer",
              "Add a human-approval interrupt before a side-effect node",
              "Replay a failed run from a checkpoint with a fixed input"
            ],
            "tools": ["LangGraph", "LangSmith"],
            "res": [
              ["LangGraph Docs", "https://docs.langchain.com/langgraph"],
              ["LangGraph GitHub", "https://github.com/langchain-ai/langgraph"]
            ]
          },
          {
            "t": "CrewAI: Role-Based Teams",
            "d": "Agents as team members with roles, goals, and backstories: the fastest multi-agent pilot.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Core abstraction: Crew of agents, each with role, goal, backstory, and tools",
              "Processes: sequential pipelines vs hierarchical manager delegation",
              "Flows: deterministic workflow control around the autonomous crews"
            ],
            "do": [
              "Build a three-role crew: researcher, analyst, writer",
              "Run it sequentially, then hierarchically, and compare outputs",
              "Add a Flow that validates the crew's output before delivery"
            ],
            "tools": ["CrewAI", "Python"],
            "res": [
              ["CrewAI Docs", "https://docs.crewai.com"],
              ["CrewAI GitHub", "https://github.com/crewAIInc/crewAI"]
            ]
          },
          {
            "t": "Vendor SDKs: OpenAI, Google, Microsoft",
            "d": "Native agent SDKs from the model providers: simple, opinionated, and ecosystem-locked.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "OpenAI Agents SDK: lightweight handoffs between specialized agents",
              "Google ADK and Vertex Agent Builder for the Google ecosystem",
              "Microsoft Agent Framework: the converged successor to AutoGen and Semantic Kernel",
              "Tradeoff: simplicity and first-party support vs vendor lock-in"
            ],
            "do": [
              "Build a handoff agent with the OpenAI Agents SDK",
              "Compare its code size against your LangGraph version",
              "Decide your lock-in tolerance for a hypothetical client project"
            ],
            "tools": ["OpenAI Agents SDK", "Google ADK", "Microsoft Agent Framework"],
            "res": [
              ["OpenAI Agents SDK", "https://github.com/openai/openai-agents-python"],
              ["Google ADK Docs", "https://google.github.io/adk-docs/"]
            ]
          },
          {
            "t": "Lightweight Options: Smolagents and Agno",
            "d": "Code-first and minimal: when you want an agent, not a platform.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Smolagents: Hugging Face's code-first agents where actions are Python code",
              "Agno: single Agent plus tools plus memory, composable into teams",
              "When lightweight wins: prototypes, scripts, and embedded agents"
            ],
            "do": [
              "Build a smolagents CodeAgent with two tools",
              "Build the same agent in Agno and compare",
              "Run one fully locally with an Ollama model"
            ],
            "tools": ["Smolagents", "Agno", "Ollama"],
            "res": [
              ["Smolagents", "https://github.com/huggingface/smolagents"],
              ["Agno Docs", "https://docs.agno.com"]
            ],
            "tag": "opt"
          },
          {
            "t": "Debugging Agents: Traces and Replay",
            "d": "Agents fail in interesting ways. Traces turn mystery into mechanics.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Reading a trace: prompts, tool calls, observations, and token counts per step",
              "Common failure signatures: tool-selection loops, ignored observations, context bloat",
              "Replay debugging: re-run from a checkpoint with modified inputs"
            ],
            "do": [
              "Instrument your hand-built agent with structured logging",
              "Deliberately break it three ways and identify each from the trace alone",
              "Fix one real bug found only through trace inspection"
            ],
            "tools": ["LangSmith", "Langfuse", "Python logging"],
            "res": [
              ["LangSmith", "https://www.langchain.com/langsmith"],
              ["Langfuse", "https://langfuse.com"]
            ]
          }
        ]
      },
      {
        "t": "Evals & Testing",
        "d": "Score behavior, not vibes: tool tests, trajectory evals, and CI gates.",
        "lv": 3,
        "children": [
          {
            "t": "Metrics That Matter for Agents",
            "d": "Task success is the headline; cost, steps, and tool accuracy are the story.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Outcome metrics: task success rate, answer correctness, faithfulness",
              "Process metrics: steps to completion, tool-call accuracy, recovery rate after errors",
              "Efficiency metrics: tokens per task, cost per task, latency percentiles"
            ],
            "do": [
              "Define a metric set for your agent covering outcome, process, and efficiency",
              "Instrument step counting and token usage per run",
              "Set target thresholds you would defend to a stakeholder"
            ],
            "tools": ["DeepEval", "LangSmith"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["LangSmith", "https://www.langchain.com/langsmith"]
            ]
          },
          {
            "t": "Unit Testing Individual Tools",
            "d": "Tools are the agent's limbs: test them like any other code.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Test tool logic deterministically: inputs, outputs, and error paths",
              "Mock external services so tests are fast and hermetic",
              "Schema tests: verify tool definitions match what the model expects"
            ],
            "do": [
              "Write pytest tests for each of your agent's tools",
              "Mock one external API and test the tool's error handling",
              "Add a schema-conformance test for your tool registry"
            ],
            "tools": ["pytest", "DeepEval"],
            "res": [
              ["pytest Docs", "https://docs.pytest.org"],
              ["DeepEval", "https://github.com/confident-ai/deepeval"]
            ]
          },
          {
            "t": "Trajectory Evaluation",
            "d": "Judge the journey, not just the destination: score the agent's whole trace.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Trajectory evals: did it use the right tools, in the right order, without wasteful loops",
              "LLM-as-judge on traces with rubrics for efficiency and correctness",
              "Golden trajectories: reference runs that new versions must match or beat"
            ],
            "do": [
              "Save 10 golden trajectories from your working agent",
              "Write a judge rubric scoring tool choice and step efficiency",
              "Detect a regression by comparing a new run against its golden trajectory"
            ],
            "tools": ["DeepEval", "LangSmith"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["LangSmith Evals", "https://www.langchain.com/langsmith"]
            ]
          },
          {
            "t": "Eval Frameworks: DeepEval and RAGAS",
            "d": "Pytest-style agent tests and research-backed RAG metrics: the 2026 combo.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "DeepEval: 50+ metrics, pytest integration, custom LLM-as-judge metrics",
              "RAGAS: faithfulness, context precision/recall, answer relevancy for retrieval agents",
              "Promptfoo for red-teaming and adversarial prompt testing"
            ],
            "do": [
              "Write a DeepEval test suite for your agent with 3 custom metrics",
              "Run RAGAS on your retrieval agent's golden set",
              "Run Promptfoo adversarial tests against your system prompt"
            ],
            "tools": ["DeepEval", "RAGAS", "Promptfoo"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["RAGAS Docs", "https://docs.ragas.io"],
              ["Promptfoo", "https://github.com/promptfoo/promptfoo"]
            ]
          },
          {
            "t": "Human-in-the-Loop Evaluation",
            "d": "Humans are the gold standard for taste, tone, and safety: use them wisely.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "When humans beat automation: subjective quality, brand voice, nuanced safety",
              "Sampling strategy: review the failures and edge cases, not random successes",
              "Feedback loops: turn human corrections into new golden test cases"
            ],
            "do": [
              "Design a 15-minute human review protocol for your agent's outputs",
              "Review 20 outputs, label failures, and find the top failure class",
              "Convert the failures into automated regression tests"
            ],
            "tools": ["Label Studio", "LangSmith"],
            "res": [
              ["Label Studio", "https://labelstud.io"],
              ["LangSmith", "https://www.langchain.com/langsmith"]
            ]
          },
          {
            "t": "Regression Testing in CI",
            "d": "Block bad deploys: evals as CI gates that fail the build.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Eval gates: minimum scores on golden sets required to merge",
              "Flakiness management: LLM evals vary; use thresholds and multiple runs, not exact matches",
              "What to gate: prompt changes, model swaps, and tool modifications"
            ],
            "do": [
              "Add an eval job to GitHub Actions that runs your DeepEval suite",
              "Make a deliberately bad prompt change and watch CI catch it",
              "Set score thresholds with a documented rationale"
            ],
            "tools": ["GitHub Actions", "DeepEval", "Braintrust"],
            "res": [
              ["Braintrust", "https://www.braintrust.dev"],
              ["DeepEval", "https://github.com/confident-ai/deepeval"]
            ]
          }
        ]
      },
      {
        "t": "Production & Safety",
        "d": "Ship agents that survive contact with users: security, observability, and cost control.",
        "lv": 3,
        "children": [
          {
            "t": "Prompt Injection Defense",
            "d": "The number-one agent threat: malicious instructions hiding in data.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Direct injection: users telling the agent to ignore its rules",
              "Indirect injection: poisoned webpages, documents, and tool outputs the agent reads",
              "Defenses: instruction hierarchy, input sanitization, least-privilege tools, spotlighting untrusted content"
            ],
            "do": [
              "Attack your own agent with five injection techniques and log successes",
              "Mark tool outputs as untrusted data in your system prompt",
              "Remove one over-privileged tool and re-test the attacks"
            ],
            "tools": ["Promptfoo", "Python"],
            "res": [
              ["OWASP LLM Top 10", "https://genai.owasp.org"],
              ["Promptfoo", "https://github.com/promptfoo/promptfoo"]
            ]
          },
          {
            "t": "Tool Sandboxing and Permissions",
            "d": "An agent's blast radius equals its tools' permissions. Shrink both.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Sandbox code execution: containers or microVMs, never the host",
              "Permission tiers: read tools run freely, write tools need approval, destructive tools need humans",
              "Filesystem and network scoping: agents see only what they need"
            ],
            "do": [
              "Run your code-execution tool inside a Docker container",
              "Implement three permission tiers across your tool registry",
              "Scope a file tool to one directory and verify escapes are blocked"
            ],
            "tools": ["Docker", "E2B", "Python"],
            "res": [
              ["E2B", "https://e2b.dev"],
              ["OWASP LLM Top 10", "https://genai.owasp.org"]
            ]
          },
          {
            "t": "Guardrails: Constraining Outputs",
            "d": "Validators on the way in and out: keep the agent inside the lines.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Input guardrails: PII detection, topic restrictions, injection screening",
              "Output guardrails: format validation, content filters, citation requirements",
              "NeMo Guardrails and Guardrails AI vs hand-rolled validators: when each fits"
            ],
            "do": [
              "Add an input guardrail that redacts emails and phone numbers",
              "Add an output validator that rejects answers without citations",
              "Test the full pipeline against adversarial inputs"
            ],
            "tools": ["NeMo Guardrails", "Guardrails AI"],
            "res": [
              ["NeMo Guardrails", "https://github.com/NVIDIA/NeMo-Guardrails"],
              ["Guardrails AI", "https://www.guardrailsai.com"]
            ]
          },
          {
            "t": "Observability in Production",
            "d": "Every run traced, every failure replayable: LangSmith, Langfuse, and friends.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What to trace: prompts, tool calls, latencies, token counts, and final outputs",
              "LangSmith vs Langfuse vs Helicone vs Arize Phoenix: the 2026 shortlist",
              "Production signals: error rates, quality drift, and cost per task over time"
            ],
            "do": [
              "Instrument your agent end-to-end with tracing",
              "Build a dashboard: success rate, p95 latency, cost per run",
              "Set alerts for error-rate spikes and eval-score drift"
            ],
            "tools": ["LangSmith", "Langfuse", "Helicone"],
            "res": [
              ["LangSmith", "https://www.langchain.com/langsmith"],
              ["Langfuse", "https://langfuse.com"],
              ["Arize Phoenix", "https://phoenix.arize.com"]
            ]
          },
          {
            "t": "Cost and Rate Control",
            "d": "Production agents need circuit breakers for money, not just errors.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Per-run budgets: step caps and token caps that halt runaway loops",
              "Rate limiting and caching: gateways like Helicone and Portkey in front of providers",
              "Model routing: cheap models for easy steps, strong models where it counts"
            ],
            "do": [
              "Put a gateway in front of your agent with per-key rate limits",
              "Implement a dollar budget per task that aborts the run when exceeded",
              "Route classification steps to a small model and measure savings"
            ],
            "tools": ["Helicone", "Portkey", "LiteLLM"],
            "res": [
              ["Helicone", "https://www.helicone.ai"],
              ["Portkey", "https://portkey.ai"],
              ["LiteLLM", "https://github.com/BerriAI/litellm"]
            ]
          },
          {
            "t": "Deployment Patterns",
            "d": "From script to service: APIs, queues, and long-running agent workers.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Sync vs async: quick agents behind an API, long agents behind a job queue",
              "State persistence: checkpoints and conversation stores that survive restarts",
              "Scaling: worker pools, concurrency limits, and provider rate limits"
            ],
            "do": [
              "Wrap your agent in a FastAPI service with auth",
              "Move long runs to a background queue with status polling",
              "Load-test with 20 concurrent runs and document the bottlenecks"
            ],
            "tools": ["FastAPI", "Celery", "Docker"],
            "res": [
              ["FastAPI Docs", "https://fastapi.tiangolo.com"],
              ["LangGraph Platform", "https://docs.langchain.com/langgraph"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
