/* Atlas roadmap data: AI Product Builders (ai-product-builders) */
ROADMAPS.push({
  "id": "ai-product-builders",
  "title": "AI Product Builders",
  "icon": "🚀",
  "color": "#d946ef",
  "desc": "Ship AI products without a PhD: pick the right problem, build on model APIs, nail RAG and evals, design for trust, and make the unit economics work.",
  "kind": "skill",
  "root": {
    "t": "AI Product Builder",
    "d": "The person who turns model capabilities into products people pay for, without training a single model.",
    "children": [
      {
        "t": "Find the Wedge",
        "d": "Start with a painful workflow, not a cool demo. The wedge decides everything downstream.",
        "lv": 1,
        "children": [
          {
            "t": "What Makes a Product AI-Native",
            "d": "AI-native products do things that were impossible before, not the same things slightly faster.",
            "lv": 1,
            "time": "~2h",
            "tip": "The test: if you removed the AI, would the product still make sense? If yes, you built a feature, not an AI product.",
            "learn": [
              "AI-native vs AI-assisted: the core loop test",
              "Unstructured input as the unlock: text, voice, images in, structured value out",
              "Why wrappers can still win: distribution and workflow beat model novelty",
              "Examples of real AI-native loops in support, sales, and ops"
            ],
            "do": [
              "List five products you use and classify each as AI-native or AI-assisted",
              "Describe the core loop of one AI product in one paragraph",
              "Identify one workflow in your life that only AI makes possible"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Picking the Right Problem",
            "d": "One boring, expensive, text-heavy workflow beats ten exciting demos. Measure it before you touch it.",
            "lv": 1,
            "time": "~2h",
            "tip": "Start with the highest-risk, lowest-return place last: the customer-facing chatbot. Internal, boring, measurable workflows first.",
            "learn": [
              "Selection criteria: frequency, cost, error rate, and measurability",
              "The baseline: how long the task takes and what mistakes cost today",
              "Narrowing scope: one document type, one output, one exception queue",
              "Stakeholder mapping: who feels the pain and who signs off"
            ],
            "do": [
              "Pick one workflow and measure it: volume per week, minutes per item, error rate",
              "Write the one-paragraph problem statement with the baseline numbers",
              "List what is explicitly out of scope for v1"
            ],
            "tools": ["Notion", "Spreadsheets"],
            "res": [
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "AI Product Archetypes: Copilot, Agent, Embedded",
            "d": "Three shapes AI products take: assist the human, act for the human, or disappear into the workflow.",
            "lv": 1,
            "time": "~2h",
            "tip": "Match autonomy to stakes. High-stakes actions want copilots that suggest; low-stakes repetitive work can be agents that act.",
            "learn": [
              "Copilots: human stays in control, AI drafts and suggests",
              "Agents: AI acts autonomously within guardrails",
              "Embedded AI: invisible intelligence inside an existing workflow",
              "Choosing by stakes, reversibility, and user trust"
            ],
            "do": [
              "Classify five AI products into the three archetypes",
              "Pick the archetype for your wedge and justify it",
              "List what would have to change to move one archetype up in autonomy"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["OpenAI docs", "https://platform.openai.com/docs"]
            ]
          },
          {
            "t": "Map the Workflow First",
            "d": "Diagram the human process before writing code. The AI slots into a step; it does not replace the map.",
            "lv": 1,
            "time": "~2h",
            "tip": "If you cannot draw the current workflow on a whiteboard, you are not ready to automate it. The map exposes the exceptions AI will hit.",
            "learn": [
              "Process mapping: steps, inputs, outputs, and decision points",
              "Finding the AI-shaped step: unstructured input, judgment calls, drafting",
              "Exception paths: what happens when the AI is unsure",
              "Keeping the human where judgment matters"
            ],
            "do": [
              "Draw your wedge workflow end to end with all exception paths",
              "Mark the exact step the AI will own",
              "Design the handoff: what the human sees and approves"
            ],
            "tools": ["Excalidraw", "Miro"],
            "res": [
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Time-to-First-Value",
            "d": "The minutes between signup and the user's first 'wow'. Shorten it ruthlessly.",
            "lv": 1,
            "time": "~2h",
            "tip": "Prefill the demo with the user's own data shape. Generic sample data never produces the 'it understood MY stuff' moment.",
            "learn": [
              "What time-to-first-value means and why it predicts retention",
              "Onboarding patterns: sample data, guided first task, templates",
              "The aha moment: designing for it deliberately",
              "Measuring and improving activation funnels"
            ],
            "do": [
              "Time the onboarding of two AI products you use",
              "Design a 3-minute path to first value for your wedge",
              "List three onboarding frictions and how to remove each"
            ],
            "tools": ["PostHog", "Mixpanel"],
            "res": [
              ["PostHog docs", "https://posthog.com/docs"]
            ]
          },
          {
            "t": "AI Product Metrics",
            "d": "Track outcomes, not model scores: activation, retention, task success, and cost per task.",
            "lv": 2,
            "time": "~3h",
            "tip": "Tie one eval metric to one product KPI early. 'Answer relevance 0.87' means nothing; 'support tickets resolved without escalation' means everything.",
            "learn": [
              "Product metrics: activation, retention, task completion rate",
              "AI-specific: containment rate, escalation rate, thumbs up/down",
              "Cost metrics: cost per task and margin per user",
              "North-star design for AI features"
            ],
            "do": [
              "Define the metric tree for your wedge: north star down to inputs",
              "Pick the one KPI the AI feature must move",
              "Design the dashboard you will check weekly"
            ],
            "tools": ["PostHog", "Amplitude"],
            "res": [
              ["PostHog docs", "https://posthog.com/docs"]
            ]
          }
        ]
      },
      {
        "t": "Ship Your First AI Feature",
        "d": "From API key to working feature: calls, prompts, structured output, streaming, and budgets.",
        "lv": 1,
        "children": [
          {
            "t": "Calling Model APIs",
            "d": "Your first integration: auth, chat completions, and handling the response in code.",
            "lv": 1,
            "time": "~3h",
            "tip": "Store keys in environment variables from the first commit. A leaked API key in Git history is a rite of passage you want to skip.",
            "learn": [
              "API basics: keys, endpoints, and the chat completions shape",
              "Messages: system, user, and assistant roles",
              "Parameters that matter: model, temperature, max tokens",
              "Error handling: rate limits, timeouts, and retries"
            ],
            "do": [
              "Make your first chat completion call with the SDK",
              "Build a CLI that chats with a model from your terminal",
              "Add retry logic with exponential backoff for rate limits"
            ],
            "tools": ["OpenAI SDK", "Anthropic SDK", "Python"],
            "res": [
              ["OpenAI docs", "https://platform.openai.com/docs"],
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Prompt Engineering for Production",
            "d": "Production prompts are versioned, tested artifacts: instructions, examples, and output contracts.",
            "lv": 2,
            "time": "~4h",
            "tip": "Write the prompt like a spec for a literal-minded junior: role, task, constraints, format, and examples. Vague prompts produce vague products.",
            "learn": [
              "Anatomy: role, context, task, constraints, output format",
              "Few-shot examples: choosing and ordering them",
              "Chain-of-thought when reasoning matters, and its cost",
              "Prompt versioning: templates in Git, not inline strings"
            ],
            "do": [
              "Write a production prompt for your wedge with all five parts",
              "Test it on 10 real inputs and log the failures",
              "Move it to a versioned template file with variables"
            ],
            "tools": ["Langfuse", "Git"],
            "res": [
              ["Anthropic prompt engineering docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"]
            ]
          },
          {
            "t": "Structured Outputs",
            "d": "Get JSON back every time: schemas, function calling, and constrained generation.",
            "lv": 2,
            "time": "~3h",
            "tip": "Validate every model output against your schema in code. 'Usually returns JSON' is not a contract your database accepts.",
            "learn": [
              "JSON mode and response schemas",
              "Function/tool calling: letting the model trigger your code",
              "Pydantic validation of every response",
              "Fallback parsing when the model misbehaves"
            ],
            "do": [
              "Define a Pydantic schema and force the model to match it",
              "Build a tool call: model decides, your function executes",
              "Add validation with a repair retry on failure"
            ],
            "tools": ["Pydantic", "OpenAI SDK", "Anthropic SDK"],
            "res": [
              ["Pydantic docs", "https://docs.pydantic.dev"]
            ]
          },
          {
            "t": "Streaming UX",
            "d": "Stream tokens to the UI as they generate: the difference between 'broken' and 'thinking'.",
            "lv": 2,
            "time": "~3h",
            "tip": "Show the stream, but do not commit partial output to your database. Render streaming, persist only the final validated result.",
            "learn": [
              "Server-sent events and streaming API responses",
              "Rendering partial tokens: typewriter vs token-chunk updates",
              "Handling stream interruptions gracefully",
              "What to persist: final output only, with the full trace"
            ],
            "do": [
              "Build a streaming chat UI with server-sent events",
              "Add a graceful 'connection lost, retry' state",
              "Log the full trace while rendering the stream"
            ],
            "tools": ["FastAPI", "Vercel AI SDK"],
            "res": [
              ["Vercel AI SDK docs", "https://ai-sdk.dev/docs/introduction"]
            ]
          },
          {
            "t": "Context & Token Budgeting",
            "d": "The context window is a budget: spend it on what matters, cut the rest, and count every token.",
            "lv": 2,
            "time": "~3h",
            "tip": "Count tokens before you call, not after the bill. A runaway context is the most common way a prototype's costs explode.",
            "learn": [
              "Token counting with tiktoken before every call",
              "Budget allocation: system prompt, context, history, output reserve",
              "Truncation and summarization strategies for long inputs",
              "Context window vs effective attention: longer is not always better"
            ],
            "do": [
              "Add token counting to every API call in your app",
              "Build a budgeter that truncates history to fit",
              "Set per-request token caps with alerts"
            ],
            "tools": ["tiktoken", "LangChain"],
            "res": [
              ["OpenAI tokenizer", "https://platform.openai.com/tokenizer"]
            ]
          },
          {
            "t": "Fallbacks & Retries",
            "d": "Models fail. Design the degradation path: retries, cheaper models, and graceful 'I cannot do that'.",
            "lv": 2,
            "time": "~3h",
            "tip": "The fallback chain is a product decision, not just engineering: primary model, cheaper model, cached answer, honest failure. Define all four.",
            "learn": [
              "Retry policies: which errors retry, which do not",
              "Model fallback chains: frontier to cheap to cached",
              "Circuit breakers for provider outages",
              "User-facing failure states that preserve trust"
            ],
            "do": [
              "Implement a three-level fallback chain",
              "Simulate a provider outage and watch the fallback engage",
              "Design the UI state for 'AI unavailable, try again soon'"
            ],
            "tools": ["Tenacity", "LiteLLM"],
            "res": [
              ["LiteLLM docs", "https://docs.litellm.ai"]
            ]
          }
        ]
      },
      {
        "t": "RAG Done Right",
        "d": "Ground the model in your data: chunking, retrieval, reranking, and the UX that shows sources.",
        "lv": 2,
        "children": [
          {
            "t": "When RAG Beats Fine-Tuning",
            "d": "RAG for knowledge that changes; fine-tuning for behavior that stays. Most products need RAG first.",
            "lv": 2,
            "time": "~2h",
            "tip": "If the answer changes when your docs change, you need RAG. Fine-tuning bakes knowledge into weights that go stale on release day.",
            "learn": [
              "RAG: retrieve relevant docs, generate with them as context",
              "Fine-tuning: changing model behavior and style",
              "The decision matrix: freshness, cost, data size, latency",
              "Why most teams should exhaust RAG before fine-tuning"
            ],
            "do": [
              "Classify three use cases as RAG, fine-tune, or prompt-only",
              "List what breaks when docs update under each approach",
              "Estimate the cost difference for your wedge"
            ],
            "tools": ["LlamaIndex", "LangChain"],
            "res": [
              ["LlamaIndex docs", "https://www.llamaindex.ai"]
            ]
          },
          {
            "t": "Chunking Strategies",
            "d": "Split documents so each chunk is retrievable and self-contained: the unglamorous key to RAG quality.",
            "lv": 2,
            "time": "~3h",
            "tip": "Chunk by meaning, not by fixed size. A chunk that splits a table in half retrieves badly no matter how good your embeddings are.",
            "learn": [
              "Fixed-size vs semantic vs structural chunking",
              "Overlap: why chunks share borders and how much",
              "Metadata per chunk: source, section, date, permissions",
              "Chunk size vs retrieval precision tradeoffs"
            ],
            "do": [
              "Chunk the same docs three ways and inspect the results",
              "Measure retrieval hit rate per strategy on 20 questions",
              "Add metadata and filter by it in queries"
            ],
            "tools": ["LlamaIndex", "LangChain"],
            "res": [
              ["LlamaIndex docs", "https://www.llamaindex.ai"]
            ]
          },
          {
            "t": "Embeddings & Vector Databases",
            "d": "Turn text into vectors and search by meaning: the retrieval backbone of RAG.",
            "lv": 2,
            "time": "~4h",
            "tip": "Start with a managed vector DB or even Postgres pgvector. Self-hosting Qdrant is an optimization, not a starting point.",
            "learn": [
              "Embeddings: what they capture and choosing a model",
              "Vector indexes: HNSW and approximate nearest neighbors",
              "Vector DB options: Pinecone, Weaviate, Qdrant, pgvector",
              "Filtering: combining vector search with metadata filters"
            ],
            "do": [
              "Embed a document set and store it in a vector DB",
              "Query with metadata filters (date, source, department)",
              "Compare two embedding models on your questions"
            ],
            "tools": ["Qdrant", "Pinecone", "pgvector"],
            "res": [
              ["Qdrant docs", "https://qdrant.tech/documentation/"]
            ]
          },
          {
            "t": "Hybrid Retrieval",
            "d": "Combine keyword and vector search: BM25 catches the exact terms, vectors catch the meaning.",
            "lv": 3,
            "time": "~3h",
            "tip": "Pure vector search misses exact product names and error codes. Hybrid retrieval is the default for production, not an upgrade.",
            "learn": [
              "BM25 keyword search: exact matches and rare terms",
              "Fusion: reciprocal rank fusion of both result lists",
              "When each wins: jargon and codes vs paraphrased questions",
              "Tuning the blend on your eval set"
            ],
            "do": [
              "Build a hybrid retriever over your docs",
              "Find five queries where keyword beats vector and vice versa",
              "Tune fusion weights on your eval set"
            ],
            "tools": ["Weaviate", "Elasticsearch"],
            "res": [
              ["Weaviate docs", "https://weaviate.io/developers/weaviate"]
            ]
          },
          {
            "t": "Reranking",
            "d": "Retrieve broad, rerank precisely: a second-stage model that picks the truly relevant chunks.",
            "lv": 3,
            "time": "~3h",
            "tip": "Retrieve 50, rerank to 5. Rerankers are cheap compared to stuffing 50 chunks into the context window.",
            "learn": [
              "Two-stage retrieval: fast recall, precise rerank",
              "Cross-encoder rerankers vs LLM reranking",
              "Latency and cost of the rerank step",
              "Measuring the quality lift on your eval set"
            ],
            "do": [
              "Add a reranker to your pipeline",
              "Measure hit-rate improvement at k=5",
              "Compare latency with and without reranking"
            ],
            "tools": ["Cohere Rerank", "bge-reranker"],
            "res": [
              ["Cohere docs", "https://docs.cohere.com"]
            ]
          },
          {
            "t": "Citation UX",
            "d": "Show sources with every answer: trust comes from verifiability, not from confident tone.",
            "lv": 2,
            "time": "~2h",
            "tip": "Every factual claim should link to its source chunk. Users forgive 'I don't know'; they do not forgive confident wrong answers.",
            "learn": [
              "Inline citations: linking claims to retrieved chunks",
              "Source panels: letting users inspect the evidence",
              "Refusal design: saying 'not in the docs' gracefully",
              "Tracking which sources get cited to find doc gaps"
            ],
            "do": [
              "Add inline citations to your RAG answers",
              "Build a source panel showing the retrieved chunks",
              "Implement and test the unanswerable-question path"
            ],
            "tools": ["LlamaIndex"],
            "res": [
              ["LlamaIndex docs", "https://www.llamaindex.ai"]
            ]
          }
        ]
      },
      {
        "t": "Evals: Prove It Works",
        "d": "Non-deterministic output needs a test harness: golden sets, judges, and regression gates.",
        "lv": 2,
        "children": [
          {
            "t": "Golden Sets",
            "d": "Build the dataset that defines 'correct' for your product before you write the next prompt.",
            "lv": 2,
            "time": "~3h",
            "tip": "Write the golden set before the prompt, not after. Fifty real questions with expected answers beats any amount of prompt tweaking.",
            "learn": [
              "What goes in: real user questions, edge cases, unanswerable ones",
              "Expected answers: what 'good' looks like per question",
              "Sourcing: production logs, support tickets, expert writing",
              "Keeping it fresh: adding every production failure as a case"
            ],
            "do": [
              "Collect 50 real questions for your wedge",
              "Write expected answers and must-include facts per question",
              "Add five unanswerable questions to test refusal"
            ],
            "tools": ["Spreadsheets", "Langfuse"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          },
          {
            "t": "LLM-as-Judge",
            "d": "Use a different model to score outputs: fast, cheap, and good enough with a tight rubric.",
            "lv": 2,
            "time": "~3h",
            "tip": "Never let a model grade itself, pin the judge version, and hand-check a sample of verdicts regularly. An unchecked judge is another untested component.",
            "learn": [
              "Judge rubrics: narrow, specific, pass/fail with reasons",
              "The RAG triad: context relevance, groundedness, answer relevance",
              "Judge bias: verbosity, position, and self-preference",
              "Calibrating the judge against human labels"
            ],
            "do": [
              "Write a groundedness rubric: 'every claim supported by context?'",
              "Score 30 outputs with the judge and hand-check 10",
              "Measure judge-human agreement and tighten the rubric"
            ],
            "tools": ["Ragas", "Langfuse"],
            "res": [
              ["Ragas", "https://github.com/explodinggradients/ragas"]
            ]
          },
          {
            "t": "Retrieval Metrics",
            "d": "Measure the retriever separately: hit rate, recall, and MRR tell you if RAG fails before generation.",
            "lv": 2,
            "time": "~2h",
            "tip": "When RAG answers are bad, check retrieval first. Most RAG failures are retrieval failures wearing a generation costume.",
            "learn": [
              "Hit rate: did we retrieve any gold chunk",
              "Recall@k and MRR: how completely and how early",
              "Answer coverage: did the final answer include the key facts",
              "Refusal accuracy on unanswerable questions"
            ],
            "do": [
              "Score your retriever on the golden set",
              "Separate retrieval failures from generation failures",
              "Fix the worse half first and re-measure"
            ],
            "tools": ["Ragas"],
            "res": [
              ["Ragas", "https://github.com/explodinggradients/ragas"]
            ]
          },
          {
            "t": "Regression Gating in CI",
            "d": "Run evals on every prompt or model change and block the ones that make things worse.",
            "lv": 3,
            "time": "~4h",
            "tip": "Gate on regression vs the current baseline, not on absolute thresholds. 'Worse than yesterday' is actionable; 'below 0.85' is arbitrary.",
            "learn": [
              "Eval pipelines: what runs on PRs, nightly, and releases",
              "Baseline comparison: current vs main, with tolerance bands",
              "Fast vs slow evals: retrieval metrics on PRs, full judges nightly",
              "Blocking deploys on eval failure"
            ],
            "do": [
              "Wire retrieval metrics into CI on every PR",
              "Add a nightly full-eval job with judge scoring",
              "Make a prompt change that regresses and watch CI block it"
            ],
            "tools": ["GitHub Actions", "Promptfoo"],
            "res": [
              ["Promptfoo", "https://promptfoo.dev"]
            ]
          },
          {
            "t": "Human Eval Loops",
            "d": "Sample production outputs for human review: the ground truth that keeps automated evals honest.",
            "lv": 2,
            "time": "~3h",
            "tip": "Review every output for the first month, then exceptions only. The review queue is also your best source of new golden-set cases.",
            "learn": [
              "Sampling strategies: random, low-confidence, and high-stakes",
              "Review UI: side-by-side output, context, and one-click labels",
              "Inter-rater agreement: making human labels consistent",
              "Feeding labels back into golden sets and fine-tunes"
            ],
            "do": [
              "Set up a weekly review queue of 50 production outputs",
              "Define the labeling rubric with three reviewers",
              "Add every failure to the golden set"
            ],
            "tools": ["Langfuse", "Label Studio"],
            "res": [
              ["Label Studio", "https://labelstud.io"]
            ]
          },
          {
            "t": "Red-Teaming Your Product",
            "d": "Attack your own AI feature before users do: jailbreaks, data extraction, and abuse cases.",
            "lv": 3,
            "time": "~4h",
            "tip": "Red-team the product, not just the model. The provider hardened the model; your prompt, tools, and data access are the attack surface.",
            "learn": [
              "Jailbreak patterns: instruction override and role confusion",
              "Data extraction: pulling system prompts and retrieved docs",
              "Abuse cases: spam, phishing, and cost attacks via your API",
              "Fix verification: re-testing after each mitigation"
            ],
            "do": [
              "Run 20 adversarial prompts against your feature",
              "Try to extract the system prompt and source documents",
              "Document findings and verify each fix"
            ],
            "tools": ["Promptfoo", "Garak"],
            "res": [
              ["Promptfoo", "https://promptfoo.dev"],
              ["Garak", "https://github.com/NVIDIA/garak"]
            ]
          }
        ]
      },
      {
        "t": "UX for AI",
        "d": "Design for a system that is sometimes wrong: uncertainty, provenance, and graceful recovery.",
        "lv": 2,
        "children": [
          {
            "t": "Designing for Uncertainty",
            "d": "The AI will be wrong sometimes. Design the interface so that is survivable, not catastrophic.",
            "lv": 2,
            "time": "~3h",
            "tip": "Default to suggest, not act, for anything irreversible. The undo button is cheaper than the apology tour.",
            "learn": [
              "Confidence communication without fake precision",
              "Suggest vs act: matching autonomy to reversibility",
              "Progressive disclosure: details on demand, not up front",
              "Designing the 'I'm not sure' state"
            ],
            "do": [
              "Audit your feature for irreversible AI actions",
              "Redesign one flow as suggest-then-confirm",
              "Write the copy for three uncertainty states"
            ],
            "tools": ["Figma"],
            "res": [
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Streaming & Skeleton States",
            "d": "Make waiting feel alive: streaming text, skeleton screens, and honest progress.",
            "lv": 2,
            "time": "~2h",
            "tip": "Never show a blank screen while the model thinks. A skeleton plus streaming beats a spinner every time.",
            "learn": [
              "Skeleton screens vs spinners: perceived performance",
              "Streaming rendering patterns and their pitfalls",
              "Progressive results: showing partial work",
              "Timeout UX: what users see when it takes too long"
            ],
            "do": [
              "Replace a loading spinner with a skeleton state",
              "Add streaming to your longest AI interaction",
              "Design the 30-second-timeout experience"
            ],
            "tools": ["Vercel AI SDK"],
            "res": [
              ["Vercel AI SDK docs", "https://ai-sdk.dev/docs/introduction"]
            ]
          },
          {
            "t": "Provenance & Sources",
            "d": "Show where answers come from: sources, quotes, and what the AI changed.",
            "lv": 2,
            "time": "~2h",
            "tip": "Provenance is the trust feature. Users who can verify stop worrying about hallucinations and start relying on the tool.",
            "learn": [
              "Source display patterns: inline, panel, and hover",
              "Quoting evidence vs paraphrasing it",
              "Showing model and knowledge cutoff honestly",
              "Audit trails for regulated or high-stakes use"
            ],
            "do": [
              "Add source links to every AI-generated claim in your UI",
              "Build an audit view: input, sources, output, timestamp",
              "Display model version and data freshness to users"
            ],
            "tools": ["LlamaIndex"],
            "res": [
              ["LlamaIndex docs", "https://www.llamaindex.ai"]
            ]
          },
          {
            "t": "Human-in-the-Loop Design",
            "d": "Put humans where judgment matters: review queues, approvals, and escalation paths.",
            "lv": 2,
            "time": "~3h",
            "tip": "Review everything for the first month, then exceptions only. The loop should shrink as trust is earned, not stay at 100% forever.",
            "learn": [
              "Review queue design: what reviewers see and decide",
              "Approval flows for high-stakes actions",
              "Exception-only review: alerting on low confidence",
              "Measuring reviewer burden and tuning thresholds"
            ],
            "do": [
              "Design a review queue for your wedge's outputs",
              "Define the confidence threshold for auto-approve vs review",
              "Measure reviewer time per item and optimize it"
            ],
            "tools": ["Langfuse"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          },
          {
            "t": "Undo & Error Recovery",
            "d": "Every AI action needs an undo. Errors need a path back, not a dead end.",
            "lv": 2,
            "time": "~3h",
            "tip": "If the AI can send it, delete it, or publish it, there must be an undo. No exceptions, no 'are you sure' as a substitute.",
            "learn": [
              "Undo patterns: drafts, delays, and version history",
              "Error states: what went wrong in plain language",
              "Recovery flows: retry, edit-and-retry, escalate",
              "Logging actions so users can audit what the AI did"
            ],
            "do": [
              "Add undo to every AI-initiated action in your product",
              "Write error copy for five failure modes",
              "Build an activity log showing AI actions per user"
            ],
            "tools": ["PostHog"],
            "res": [
              ["PostHog docs", "https://posthog.com/docs"]
            ]
          },
          {
            "t": "Trust Calibration",
            "d": "Help users trust the AI the right amount: not too much, not too little.",
            "lv": 3,
            "time": "~3h",
            "tip": "Overtrust is the danger: users stop checking. Show uncertainty honestly and make verification one click away.",
            "learn": [
              "Overtrust vs undertrust and their failure modes",
              "Calibrated confidence: matching displayed certainty to reality",
              "Verification affordances: making checking cheap",
              "Onboarding that teaches healthy skepticism"
            ],
            "do": [
              "Audit your UI for signals that imply false certainty",
              "Add uncertainty indicators to two AI outputs",
              "Write onboarding copy that sets the right expectations"
            ],
            "tools": ["Figma"],
            "res": [
              ["Anthropic docs", "https://docs.anthropic.com"]
            ]
          }
        ]
      },
      {
        "t": "Production Hardening",
        "d": "Ship like the internet is hostile: injection defenses, privacy, abuse prevention, and observability.",
        "lv": 3,
        "children": [
          {
            "t": "Prompt Injection Defenses",
            "d": "Treat all user input and retrieved content as untrusted: the core security discipline of AI products.",
            "lv": 3,
            "time": "~4h",
            "tip": "Retrieved documents are attacker-controlled input too. An injection in your knowledge base is more dangerous than one in the chat box.",
            "learn": [
              "Direct vs indirect injection: user text vs poisoned documents",
              "Defense layers: input validation, instruction hierarchy, output checks",
              "Tool-use risks: injections that trigger real actions",
              "What cannot be fixed: residual risk and monitoring"
            ],
            "do": [
              "Test 15 injection attacks against your feature",
              "Add an output check for instruction-following anomalies",
              "Sanitize retrieved content before it reaches the prompt"
            ],
            "tools": ["NeMo Guardrails", "Promptfoo"],
            "res": [
              ["NeMo Guardrails", "https://github.com/NVIDIA/NeMo-Guardrails"],
              ["OWASP LLM Top 10", "https://genai.owasp.org"]
            ]
          },
          {
            "t": "PII & Data Privacy",
            "d": "Know what data flows where: redaction, retention, and the contracts that govern it.",
            "lv": 3,
            "time": "~3h",
            "tip": "Check your provider's data retention terms before sending user data. 'We do not train on API data' varies by provider and plan.",
            "learn": [
              "PII detection and redaction before the API call",
              "Data flow mapping: what leaves your infrastructure",
              "Provider terms: training, retention, and subprocessors",
              "Regional rules: GDPR and data residency for AI features"
            ],
            "do": [
              "Map every data flow from user to model and back",
              "Add PII redaction to your pipeline",
              "Document retention and deletion policies"
            ],
            "tools": ["Microsoft Presidio"],
            "res": [
              ["Presidio", "https://github.com/microsoft/presidio"]
            ]
          },
          {
            "t": "Rate Limiting & Abuse Prevention",
            "d": "Your API key is money. Throttle users, cap spend, and detect abuse before the bill arrives.",
            "lv": 3,
            "time": "~3h",
            "tip": "Set a hard spend cap per API key from day one. One abused endpoint without a cap is an unlimited gift card to attackers.",
            "learn": [
              "Rate limiting: per user, per key, per endpoint",
              "Spend caps and alerts as financial circuit breakers",
              "Abuse patterns: token stuffing, prompt flooding, scraping",
              "API key hygiene: scoping, rotation, and revocation"
            ],
            "do": [
              "Add per-user rate limits to your AI endpoints",
              "Set spend alerts at 50%, 80%, and 100% of budget",
              "Implement key rotation without downtime"
            ],
            "tools": ["Redis", "Cloudflare"],
            "res": [
              ["Cloudflare docs", "https://developers.cloudflare.com"]
            ]
          },
          {
            "t": "Observability: Tracing & Cost",
            "d": "Trace every AI call: latency, tokens, cost, and quality signals in one place.",
            "lv": 3,
            "time": "~4h",
            "tip": "Log the prompt template version with every trace. Half of 'the model got worse' incidents are unversioned prompt edits.",
            "learn": [
              "Trace anatomy: prompt, context, output, tokens, latency, cost",
              "Cost attribution per user, feature, and model",
              "Quality signals: feedback buttons and implicit behavior",
              "Dashboards for product and engineering audiences"
            ],
            "do": [
              "Instrument all AI calls with Langfuse or equivalent",
              "Build a cost-per-user dashboard",
              "Correlate a quality complaint with its trace"
            ],
            "tools": ["Langfuse", "OpenTelemetry"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          },
          {
            "t": "Caching for Latency & Cost",
            "d": "Do not pay for the same answer twice: exact, semantic, and prompt caches.",
            "lv": 2,
            "time": "~3h",
            "tip": "Semantic caching is the highest-ROI optimization for FAQ-style products: similar questions get instant, free answers.",
            "learn": [
              "Exact-match caching for deterministic prompts",
              "Semantic caching: similar questions, cached answers",
              "Provider prompt caches for shared prefixes",
              "Invalidation: when cached answers go stale"
            ],
            "do": [
              "Add exact-match caching to your most repeated queries",
              "Implement semantic caching with a similarity threshold",
              "Measure hit rate and cost savings for a week"
            ],
            "tools": ["Redis", "GPTCache"],
            "res": [
              ["GPTCache", "https://github.com/zilliztech/GPTCache"]
            ]
          },
          {
            "t": "Model Versioning & Rollbacks",
            "d": "Pin models, stage upgrades, and roll back in minutes when a new version misbehaves.",
            "lv": 3,
            "time": "~3h",
            "tip": "Unpinned models update under you silently. Pin the version, eval the upgrade, then promote it like any deploy.",
            "learn": [
              "Model pinning: why 'latest' is not a version strategy",
              "Upgrade playbook: eval the new version against your golden set",
              "Feature flags for model routing",
              "Rollback: one config change back to the old version"
            ],
            "do": [
              "Pin all model versions in config",
              "Eval a new model version against your golden set",
              "Practice a model rollback end to end"
            ],
            "tools": ["Langfuse", "LaunchDarkly"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"]
            ]
          }
        ]
      },
      {
        "t": "Unit Economics & Launch",
        "d": "Make the math work: cost per request, margins, pricing, and the traps that kill AI businesses.",
        "lv": 3,
        "children": [
          {
            "t": "Cost-per-Request Math",
            "d": "Every AI feature has a marginal cost. Compute it exactly or fly blind.",
            "lv": 2,
            "time": "~2h",
            "tip": "Include the full chain: embedding, retrieval, rerank, generation, and evals. The headline model call is rarely the whole cost.",
            "learn": [
              "Token math: input, output, and embedding costs per request",
              "The full chain cost: retrieval plus generation plus overhead",
              "Fixed vs variable: what scales with users and what does not",
              "Building the cost spreadsheet for your feature"
            ],
            "do": [
              "Compute the all-in cost per request for your feature",
              "Break it down by pipeline stage",
              "Find the stage dominating cost and target it"
            ],
            "tools": ["Spreadsheets"],
            "res": [
              ["OpenAI pricing", "https://openai.com/api/pricing/"]
            ]
          },
          {
            "t": "Margin Modeling",
            "d": "Price minus cost is the business. Model margins before you commit to a price.",
            "lv": 3,
            "time": "~3h",
            "tip": "Support hours are the silent margin killer. Track them per customer from day one; they dwarf token costs for service-heavy products.",
            "learn": [
              "Unit margin: price per user minus cost per user",
              "Support and ops cost per customer",
              "Usage tiers and caps that protect margins as volume grows",
              "The 70% rule: aim for gross margins that survive scale"
            ],
            "do": [
              "Build a margin model: price, token cost, infra, support hours",
              "Stress-test it at 10x usage",
              "Define usage tiers that keep margins positive"
            ],
            "tools": ["Spreadsheets"],
            "res": [
              ["OpenAI pricing", "https://openai.com/api/pricing/"]
            ]
          },
          {
            "t": "Pricing AI Features",
            "d": "Price the outcome, not the tokens: packaging AI so customers pay for value.",
            "lv": 3,
            "time": "~3h",
            "tip": "Charge for the outcome or the seat, not per API call. Passing token costs straight through makes your pricing as volatile as your bill.",
            "learn": [
              "Pricing models: seat, usage-based, outcome-based, hybrid",
              "Packaging: which AI features are premium vs included",
              "Free tiers: acquisition cost disguised as generosity",
              "Annual contracts vs monthly for AI products"
            ],
            "do": [
              "Design three pricing tiers for your AI feature",
              "Compute margin per tier at expected usage",
              "Write the one-line value proposition per tier"
            ],
            "tools": ["Stripe"],
            "res": [
              ["Stripe docs", "https://stripe.com/docs"]
            ]
          },
          {
            "t": "Build vs Buy vs Fine-Tune",
            "d": "API today, fine-tune tomorrow, self-host someday: the pragmatic ladder as volume grows.",
            "lv": 3,
            "time": "~3h",
            "tip": "Start on APIs, always. The break-even for self-hosting is higher than you think once you count engineering time and on-call.",
            "learn": [
              "APIs: fastest, zero ops, highest per-token cost",
              "Fine-tuning: behavior control, still on someone's infra",
              "Self-hosting: lowest marginal cost, full ops burden",
              "The break-even math including engineering time"
            ],
            "do": [
              "Compute your monthly token spend at current and 10x volume",
              "Find the break-even point for a fine-tuned or self-hosted path",
              "Write the decision memo with the trigger for moving"
            ],
            "tools": ["Together AI", "OpenAI fine-tuning"],
            "res": [
              ["Together AI docs", "https://www.together.ai"]
            ]
          },
          {
            "t": "The Scaling Trap",
            "d": "Success multiplies costs. Design the architecture so growth improves margins instead of destroying them.",
            "lv": 3,
            "time": "~2h",
            "tip": "Usage costs scale with success. If your best customers are your least profitable, the business is broken no matter how good the product is.",
            "learn": [
              "Why AI margins compress with scale: variable costs dominate",
              "Levers: caching, smaller models, distillation, batching",
              "Contract terms that share upside: tiers, caps, and overages",
              "When to renegotiate provider pricing"
            ],
            "do": [
              "Model margins at 1x, 10x, and 100x usage",
              "List three optimizations that improve margin with scale",
              "Draft contract terms with usage tiers and overage pricing"
            ],
            "tools": ["Spreadsheets"],
            "res": [
              ["OpenAI pricing", "https://openai.com/api/pricing/"]
            ]
          },
          {
            "t": "Capstone: Ship a Revenue-Ready AI Feature",
            "d": "Ship end to end: a real AI feature with evals, hardening, observability, pricing, and a launch plan.",
            "lv": 3,
            "time": "~2w",
            "tip": "The launch checklist is the deliverable: evals green, costs modeled, abuse prevented, rollback ready. Ship the checklist, not just the feature.",
            "learn": [
              "The full loop: wedge, build, eval, harden, price, launch",
              "Launch checklist: quality gates, cost caps, monitoring, runbooks",
              "Measuring the first 30 days: activation, retention, margin",
              "Writing the post-launch review"
            ],
            "do": [
              "Build the feature with a golden set and CI eval gates",
              "Harden it: injection tests, rate limits, spend caps",
              "Launch to real users and track metrics for two weeks",
              "Write the post-launch review with numbers"
            ],
            "tools": ["Langfuse", "PostHog", "Stripe", "GitHub Actions"],
            "res": [
              ["Langfuse docs", "https://langfuse.com"],
              ["Vercel AI SDK docs", "https://ai-sdk.dev/docs/introduction"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
