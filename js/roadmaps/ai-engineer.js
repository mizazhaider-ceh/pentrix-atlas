/* Atlas roadmap data: AI Engineer (ai-engineer) */
ROADMAPS.push({
  "id": "ai-engineer",
  "title": "AI Engineer",
  "icon": "🧠",
  "color": "#22d3ee",
  "desc": "Design, build, and ship products powered by LLMs: APIs, RAG, agents, evals, and production deployment.",
  "kind": "role",
  "root": {
    "t": "The AI Engineer Role",
    "d": "From LLM fundamentals to shipped AI products.",
    "children": [
      {
        "t": "Foundations",
        "d": "What the role is and how language models actually work.",
        "lv": 1,
        "children": [
          {
            "t": "What Is an AI Engineer?",
            "d": "The job that appeared when LLMs got good: building products on top of models instead of training them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "AI engineer: applies LLMs via APIs, RAG, agents, and evals to ship features",
              "Core loop: prototype with a model -> ground with data -> evaluate -> ship and monitor",
              "Why product sense matters more here than math: you integrate, not invent, the model"
            ],
            "do": [
              "Read three AI engineer job postings and list the shared skill requirements",
              "Skim the Anthropic engineering blog posts on building effective agents",
              "Write one paragraph: what AI feature would you build first and why"
            ],
            "tools": ["ChatGPT", "Claude", "Gemini"],
            "res": [
              ["Anthropic Engineering Blog", "https://www.anthropic.com/engineering"],
              ["OpenAI Cookbook", "https://cookbook.openai.com"]
            ],
            "tip": "AI engineering is not ML engineering. You will not train transformers from scratch; you will spend your time on prompts, retrieval, evals, and APIs."
          },
          {
            "t": "AI Engineer vs ML Engineer",
            "d": "Two roles that sound identical and are not: one builds on models, the other builds models.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "ML engineer: datasets, training loops, loss curves, model deployment",
              "AI engineer: prompt/context engineering, RAG, agent orchestration, LLM evals",
              "Where they overlap: evals, production monitoring, and latency budgets"
            ],
            "do": [
              "Make a two-column table of skills for each role from real job descriptions",
              "Decide which column your current skills lean toward"
            ],
            "tools": ["LinkedIn Jobs", "Wellfound"],
            "res": [
              ["Hugging Face", "https://huggingface.co"],
              ["OpenAI Platform Docs", "https://platform.openai.com/docs"]
            ]
          },
          {
            "t": "Tokens: The Currency of LLMs",
            "d": "Everything about LLMs is priced and limited in tokens. Learn to think in them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Tokenization: text is split into subword pieces before the model sees it (~0.75 words per token in English)",
              "Why token math drives cost, latency, and context window limits",
              "Code and non-English text cost more tokens per idea than plain English"
            ],
            "do": [
              "Paste a paragraph into an online tokenizer and compare token counts across languages",
              "Estimate the token cost of one full agent conversation on your favorite model's pricing page"
            ],
            "tools": ["tiktoken", "Hugging Face tokenizers"],
            "res": [
              ["OpenAI Tokenizer", "https://platform.openai.com/tokenizer"],
              ["Hugging Face Tokenizers", "https://huggingface.co/docs/tokenizers"]
            ],
            "tip": "Beginners budget features in 'requests'. Professionals budget in input and output tokens separately, because a 200k-context prompt is 100x the price of the answer."
          },
          {
            "t": "Context Windows and Why They Matter",
            "d": "The model's working memory: what fits, what gets forgotten, and what it costs.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Context window = input + output token budget per request (from 128k to 1M+ in 2026)",
              "Long context is not perfect recall: attention degrades and 'lost in the middle' effects appear",
              "Tradeoff: bigger windows let you stuff in context, but latency and cost grow"
            ],
            "do": [
              "Compare context window sizes on the model pages of OpenAI, Anthropic, and Google",
              "Test the same needle-in-a-haystack question at 5k vs 100k tokens and note accuracy"
            ],
            "tools": ["OpenAI", "Claude", "Gemini"],
            "res": [
              ["Anthropic Docs", "https://docs.anthropic.com"],
              ["Google AI Docs", "https://ai.google.dev"]
            ]
          },
          {
            "t": "Choosing a Model: Open vs Closed",
            "d": "Pick models like you pick infrastructure: by capability, cost, latency, and data policy.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Closed models (Claude, GPT, Gemini): best reasoning, API-only, data leaves your infra",
              "Open-weight models (Llama, Qwen, DeepSeek): self-hostable, fine-tunable, weaker at the frontier",
              "Decision factors: task difficulty, privacy requirements, latency, and per-token budget"
            ],
            "do": [
              "Run the same hard reasoning task on one closed and one open model and compare",
              "Try an open model locally with Ollama on your machine",
              "Build a decision matrix for three use cases: chatbot, code review, document Q&A"
            ],
            "tools": ["Ollama", "OpenRouter", "LM Studio"],
            "res": [
              ["Ollama", "https://ollama.com"],
              ["Hugging Face", "https://huggingface.co"],
              ["OpenRouter", "https://openrouter.ai"]
            ]
          }
        ]
      },
      {
        "t": "Working with LLM APIs",
        "d": "Calling models, tuning generation, and controlling output shape.",
        "lv": 1,
        "children": [
          {
            "t": "Your First LLM API Call",
            "d": "Messages, roles, and API keys: the 15-minute skill everything else builds on.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The messages array: system, user, and assistant roles and what each controls",
              "API keys, base URLs, and the OpenAI-compatible API convention most providers follow",
              "Responses API vs Chat Completions: the newer stateful style vs the classic stateless one"
            ],
            "do": [
              "Send your first chat completion with curl or Python using any provider",
              "Change the system message and observe how behavior shifts",
              "Swap the same code to a second provider by changing only the base URL and key"
            ],
            "tools": ["Python", "curl", "OpenAI SDK"],
            "res": [
              ["OpenAI Platform Docs", "https://platform.openai.com/docs"],
              ["Anthropic API Docs", "https://docs.anthropic.com/en/api"]
            ]
          },
          {
            "t": "Sampling Parameters",
            "d": "Temperature, top-p, and penalties: the knobs that shape randomness and repetition.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Temperature scales randomness: 0 is deterministic, higher is more creative and more erratic",
              "Top-p (nucleus sampling) trims the candidate pool; usually tune one of temperature/top-p, not both",
              "Frequency and presence penalties fight repetition and push the model off well-worn phrases",
              "max_tokens and stop sequences bound cost and control where generation halts"
            ],
            "do": [
              "Generate the same creative prompt at temperatures 0, 0.7, and 1.5 and compare",
              "Write a factual answer at temperature 0 vs 1 and spot the hallucination difference",
              "Fix a looping output using frequency penalty and a stop sequence"
            ],
            "tools": ["OpenAI Playground", "Anthropic Workbench"],
            "res": [
              ["OpenAI API Reference", "https://platform.openai.com/docs/api-reference"],
              ["Anthropic Docs", "https://docs.anthropic.com"]
            ],
            "tip": "Most production bugs blamed on 'the model being dumb' are temperature 1.0 on a factual task. Deterministic settings for facts, higher temperature only for brainstorming."
          },
          {
            "t": "System Prompts and Roles",
            "d": "The invisible instruction layer that defines who the model pretends to be.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "System prompts set role, behavior, constraints, and context before any user input",
              "Instruction hierarchy: system outranks developer outranks user in well-designed models",
              "Concrete beats vague: 'be helpful' does nothing, 'cite a source for every claim' does a lot"
            ],
            "do": [
              "Write a system prompt that turns a generic model into a strict code reviewer",
              "Test how well your system prompt survives a user asking it to ignore its rules",
              "Compare two system prompts for the same task and pick the winner with a small test set"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Structured Output",
            "d": "Force the model to answer in valid JSON that your code can actually parse.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "JSON mode and structured outputs: schema-constrained generation instead of hoping for valid JSON",
              "Define a JSON Schema or Pydantic model and let the API enforce it",
              "Validate anyway: schemas constrain shape, not truthfulness of the content"
            ],
            "do": [
              "Extract entities from three paragraphs into a strict JSON schema",
              "Build a classifier that returns only a label plus confidence score",
              "Add Pydantic validation and handle one malformed response gracefully"
            ],
            "tools": ["Pydantic", "OpenAI Structured Outputs", "Instructor"],
            "res": [
              ["OpenAI Structured Outputs", "https://platform.openai.com/docs/guides/structured-outputs"],
              ["Pydantic Docs", "https://docs.pydantic.dev"]
            ]
          },
          {
            "t": "Streaming Responses",
            "d": "Token-by-token output that makes apps feel instant even when generation is slow.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Server-sent events stream tokens as they are generated; time-to-first-token is the UX metric",
              "Accumulate deltas client-side and render incrementally",
              "Streaming complicates structured output and tool calls: handle partial states"
            ],
            "do": [
              "Enable streaming on an API call and print tokens as they arrive",
              "Measure time-to-first-token vs total time for a long answer",
              "Build a tiny web UI that streams a chat response"
            ],
            "tools": ["Python", "JavaScript", "Gradio"],
            "res": [
              ["OpenAI Streaming Guide", "https://platform.openai.com/docs/guides/streaming"],
              ["Gradio", "https://www.gradio.app"]
            ]
          }
        ]
      },
      {
        "t": "Prompt & Context Engineering",
        "d": "The core craft: getting better answers without touching the model.",
        "lv": 2,
        "children": [
          {
            "t": "Zero-Shot and Few-Shot Prompting",
            "d": "Ask directly, or show examples: the two cheapest ways to steer behavior.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Zero-shot: clear instructions alone; works when the task is common and well-specified",
              "Few-shot: 2-5 input/output examples in the prompt; the fastest way to teach format and edge cases",
              "Example selection matters more than count: cover edge cases, not just the happy path"
            ],
            "do": [
              "Solve a classification task zero-shot, then add 3 examples and compare accuracy",
              "Deliberately include one tricky edge-case example and watch it fix failures",
              "Try 0, 2, 5, and 10 examples and find where returns diminish"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Chain-of-Thought Prompting",
            "d": "Make the model show its work: step-by-step reasoning unlocks harder problems.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "'Think step by step' or worked examples elicit intermediate reasoning before the answer",
              "Biggest gains on math, logic, and multi-hop questions; little gain on recall tasks",
              "Reasoning models internalize this: you prompt the effort budget instead of the steps"
            ],
            "do": [
              "Solve a word problem with and without chain-of-thought and compare",
              "Add few-shot reasoning examples for a domain task and measure improvement",
              "Try a reasoning model and experiment with its thinking-effort setting"
            ],
            "tools": ["Claude", "OpenAI o-series", "Gemini"],
            "res": [
              ["OpenAI Reasoning Guide", "https://platform.openai.com/docs/guides/reasoning"],
              ["Google AI Docs", "https://ai.google.dev"]
            ]
          },
          {
            "t": "ReAct: Reason + Act",
            "d": "Interleave thinking with actions: the prompting pattern behind most agents.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The loop: Thought -> Action -> Observation, repeated until the answer",
              "Why explicit reasoning traces make agent behavior debuggable and steerable",
              "ReAct as a prompt pattern vs ReAct as a framework loop: same idea, different scaffolding"
            ],
            "do": [
              "Hand-write a ReAct trace for a 3-step research question",
              "Implement a minimal ReAct loop in 50 lines with two tools",
              "Compare ReAct against a single-shot answer on a multi-hop question"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["LangChain Docs", "https://docs.langchain.com"],
              ["ReAct Paper (arXiv)", "https://arxiv.org/abs/2210.03629"]
            ]
          },
          {
            "t": "Context Engineering",
            "d": "Prompt engineering's bigger sibling: designing everything the model sees, not just the instructions.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The context layer: retrieved docs, tool outputs, memory, and conversation history as one designed input",
              "Failure modes: missing context, irrelevant context crowding out signal, stale context",
              "Context isolation and compaction: keeping long sessions useful instead of bloated"
            ],
            "do": [
              "Take a failing long conversation and fix it by pruning irrelevant history",
              "Design a context template for a support bot: what goes in, in what order, with what budget",
              "Implement a simple summarizer that compacts old turns past a token threshold"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["Anthropic Context Engineering", "https://www.anthropic.com/engineering"],
              ["OpenAI Cookbook", "https://cookbook.openai.com"]
            ],
            "tip": "When an agent degrades over long sessions, the problem is almost never the model. It is context rot: stale tool outputs and dead history eating the window."
          },
          {
            "t": "Function Calling",
            "d": "Let the model request structured actions instead of describing them in prose.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Tool schemas: name, description, and JSON Schema parameters the model fills in",
              "The loop: model emits a tool call -> your code executes -> result returns as a tool message",
              "Parallel tool calls and why good descriptions beat clever schemas"
            ],
            "do": [
              "Define a get_weather-style tool and handle the full call loop",
              "Build a two-tool agent: one reads files, one searches the web",
              "Break it on purpose with an ambiguous tool description, then fix the description"
            ],
            "tools": ["OpenAI", "Anthropic Tool Use", "Gemini Function Calling"],
            "res": [
              ["OpenAI Function Calling", "https://platform.openai.com/docs/guides/function-calling"],
              ["Anthropic Tool Use", "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use"]
            ]
          },
          {
            "t": "Prompt Caching",
            "d": "Stop paying for the same system prompt on every request.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Providers cache the prefix of your prompt; repeated prefixes get cheaper and faster",
              "Cache-friendly design: static content first, changing content last",
              "Typical savings: large system prompts and RAG context blocks reused across turns"
            ],
            "do": [
              "Enable prompt caching on a provider that supports it and measure the cost difference",
              "Reorder a prompt so the stable part is a cacheable prefix",
              "Estimate monthly savings for a support bot with a 10k-token system prompt"
            ],
            "tools": ["Anthropic", "OpenAI"],
            "res": [
              ["Anthropic Prompt Caching", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching"],
              ["OpenAI Prompt Caching", "https://platform.openai.com/docs/guides/prompt-caching"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Embeddings & Vector Search",
        "d": "Turn text into searchable meaning: the retrieval backbone of RAG.",
        "lv": 2,
        "children": [
          {
            "t": "What Embeddings Are",
            "d": "Dense vectors that put similar meanings close together in space.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "An embedding maps text to a list of numbers capturing semantic meaning",
              "Cosine similarity measures closeness; nearest neighbors are 'most similar'",
              "Use cases: semantic search, classification, recommendations, dedup, anomaly detection"
            ],
            "do": [
              "Embed 20 sentences and find nearest neighbors with cosine similarity",
              "Visualize a small embedding set in 2D and check that topics cluster",
              "Build semantic search over 100 documents in pure Python"
            ],
            "tools": ["sentence-transformers", "scikit-learn", "NumPy"],
            "res": [
              ["Sentence Transformers", "https://www.sbert.net"],
              ["OpenAI Embeddings", "https://platform.openai.com/docs/guides/embeddings"]
            ]
          },
          {
            "t": "Embedding Models: Pick One",
            "d": "Proprietary APIs vs open models: the real tradeoffs behind the choice.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "API models (OpenAI, Gemini, Cohere): strong quality, per-token cost, data leaves your infra",
              "Open models (sentence-transformers, Jina, BGE): free, private, you host them",
              "Dimension and benchmark scores (MTEB) matter less than testing on your own data"
            ],
            "do": [
              "Embed the same 50 documents with an API model and an open model",
              "Run 10 of your own queries and score which model retrieves better",
              "Measure embedding latency and cost for 1M documents"
            ],
            "tools": ["sentence-transformers", "OpenAI", "Cohere"],
            "res": [
              ["MTEB Leaderboard", "https://huggingface.co/spaces/mteb/leaderboard"],
              ["Cohere Embed Docs", "https://docs.cohere.com"]
            ]
          },
          {
            "t": "Vector Databases: Pick One",
            "d": "Store millions of embeddings and query nearest neighbors in milliseconds.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What a vector DB does: indexing (HNSW/IVF), filtering with metadata, hybrid search",
              "The field in 2026: Qdrant, Pinecone, Weaviate, Chroma for prototyping, pgvector if you already run Postgres",
              "Managed vs self-hosted: ops burden vs control over your data"
            ],
            "do": [
              "Spin up Qdrant or Chroma locally and index 10k embeddings",
              "Query with metadata filters (e.g. only docs from 2026)",
              "Benchmark recall vs latency while tuning the index parameters"
            ],
            "tools": ["Qdrant", "Chroma", "pgvector"],
            "res": [
              ["Qdrant Docs", "https://qdrant.tech/documentation/"],
              ["Chroma Docs", "https://docs.trychroma.com"]
            ]
          },
          {
            "t": "Chunking Strategies",
            "d": "How you split documents decides what retrieval can ever find.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Fixed-size chunks are simple but split ideas mid-thought; semantic and recursive chunking respect structure",
              "Chunk size vs overlap: small chunks are precise, large chunks keep context",
              "Add titles, section headers, or summaries to chunks so each one stands alone"
            ],
            "do": [
              "Chunk the same document three ways and compare retrieval on 10 questions",
              "Add document titles to chunks and measure the improvement",
              "Tune chunk size and overlap, then re-run your eval set"
            ],
            "tools": ["LangChain", "LlamaIndex"],
            "res": [
              ["LangChain Text Splitters", "https://docs.langchain.com/oss/python/langchain/text-splitters"],
              ["LlamaIndex Node Parsers", "https://docs.llamaindex.ai"]
            ],
            "tip": "Most RAG failures blamed on the retriever are chunking failures. If a chunk cannot answer the question alone, retrieval can never succeed."
          },
          {
            "t": "Hybrid Search and Reranking",
            "d": "Combine keyword and vector search, then let a reranker pick the winners.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Hybrid search: BM25 catches exact terms, vectors catch meaning; fusion beats either alone",
              "Rerankers (cross-encoders, Cohere Rerank) rescore top candidates with full attention",
              "The standard pipeline: retrieve 100 -> rerank -> keep top 5 for generation"
            ],
            "do": [
              "Add BM25 to your vector search and compare on keyword-heavy queries",
              "Rerank your top-50 results and measure top-5 precision gain",
              "A/B the full pipeline against pure vector search on your eval set"
            ],
            "tools": ["Cohere Rerank", "Qdrant", "rank-bm25"],
            "res": [
              ["Cohere Rerank", "https://docs.cohere.com/docs/rerank"],
              ["Qdrant Hybrid Search", "https://qdrant.tech/documentation/"]
            ]
          }
        ]
      },
      {
        "t": "RAG Systems",
        "d": "Ground the model in your data: the highest-ROI skill in AI engineering.",
        "lv": 2,
        "children": [
          {
            "t": "RAG vs Fine-Tuning",
            "d": "Two ways to teach the model what it does not know, with very different price tags.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "RAG: fetch relevant docs at query time; great for knowledge that changes",
              "Fine-tuning: bake knowledge into weights; better for style, format, and stable domain behavior",
              "Rule of thumb: RAG first for facts, fine-tuning for behavior; they compose well"
            ],
            "do": [
              "List five use cases and decide RAG, fine-tune, or both for each",
              "Estimate the cost difference for a 10k-document knowledge base"
            ],
            "tools": ["OpenAI Fine-tuning", "Unsloth"],
            "res": [
              ["OpenAI Fine-tuning Guide", "https://platform.openai.com/docs/guides/fine-tuning"],
              ["Unsloth", "https://github.com/unslothai/unsloth"]
            ]
          },
          {
            "t": "Build a Minimal RAG Pipeline",
            "d": "Chunk, embed, retrieve, generate: the whole pattern in one afternoon.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "The five stages: ingest -> chunk -> embed -> retrieve -> generate with citations",
              "Why citations matter: they make answers checkable and failures visible",
              "The 'naive RAG' baseline you will improve on in every later topic"
            ],
            "do": [
              "Build end-to-end RAG over your own notes or docs with no framework",
              "Ask 10 questions and log where it fails: retrieval miss vs generation miss",
              "Add source citations to every answer"
            ],
            "tools": ["Python", "Chroma", "sentence-transformers"],
            "res": [
              ["LlamaIndex Starter", "https://docs.llamaindex.ai"],
              ["LangChain RAG Tutorial", "https://docs.langchain.com"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "Advanced Retrieval Patterns",
            "d": "When naive RAG stalls: query rewriting, HyDE, and multi-step retrieval.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Query rewriting: let an LLM turn a vague question into a better search query",
              "HyDE: generate a hypothetical answer, then search with its embedding",
              "Multi-hop retrieval: retrieve, read, then retrieve again with new context"
            ],
            "do": [
              "Add query rewriting to your RAG and test on ambiguous questions",
              "Implement HyDE and compare against plain query embedding",
              "Log which pattern fixes which failure class"
            ],
            "tools": ["LangChain", "LlamaIndex"],
            "res": [
              ["LangChain Retrieval QA", "https://docs.langchain.com"],
              ["HyDE Paper (arXiv)", "https://arxiv.org/abs/2212.10496"]
            ]
          },
          {
            "t": "RAG Frameworks: LangChain and LlamaIndex",
            "d": "Stop hand-rolling plumbing: use a framework for the boring parts.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "LangChain: broad integrations and agent tooling around retrieval",
              "LlamaIndex: data-framework-first, strongest for complex document ingestion",
              "When to skip frameworks: simple pipelines are clearer in raw SDK calls"
            ],
            "do": [
              "Rebuild your minimal RAG in LangChain",
              "Rebuild it in LlamaIndex and compare the code",
              "Decide which you would keep for a production service and why"
            ],
            "tools": ["LangChain", "LlamaIndex", "Haystack"],
            "res": [
              ["LangChain Docs", "https://docs.langchain.com"],
              ["LlamaIndex Docs", "https://docs.llamaindex.ai"]
            ]
          },
          {
            "t": "Evaluating RAG with RAGAS",
            "d": "Faithfulness, relevance, precision: score the pipeline, not your vibes.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The canonical RAGAS metrics: faithfulness, answer relevancy, context precision, context recall",
              "Retrieval eval vs generation eval: diagnose which half is failing",
              "Build a golden set of question/answer/context triples before tuning anything"
            ],
            "do": [
              "Create a 30-question golden set for your RAG",
              "Run RAGAS and find your weakest metric",
              "Fix one thing, re-run, and confirm the number moved"
            ],
            "tools": ["RAGAS", "DeepEval"],
            "res": [
              ["RAGAS Docs", "https://docs.ragas.io"],
              ["DeepEval", "https://github.com/confident-ai/deepeval"]
            ]
          }
        ]
      },
      {
        "t": "AI Agents & MCP",
        "d": "From chatbots to systems that act: loops, tools, memory, and protocols.",
        "lv": 2,
        "children": [
          {
            "t": "The Agent Loop",
            "d": "Perceive, reason, act, observe: the heartbeat of every agent.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The four phases and how observations feed the next reasoning step",
              "Termination: max steps, explicit finish actions, and human interrupts",
              "Why the loop shape matters more than the framework you pick"
            ],
            "do": [
              "Trace a coding agent's full loop from a real session and label each phase",
              "Write the loop pseudocode for a research agent",
              "Add a step budget and a clean stop condition"
            ],
            "tools": ["Python", "Claude Code"],
            "res": [
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"],
              ["OpenAI Agents Guide", "https://platform.openai.com/docs/guides/agents"]
            ]
          },
          {
            "t": "Tools: Giving the Agent Hands",
            "d": "An agent without tools is a chatbot with confidence. Design tools well.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Good tools are narrow, deterministic, and well-described; bad tools are vague Swiss-army knives",
              "Tool design is prompt design: the description is what the model actually reads",
              "Common tool classes: search, code execution, database queries, API calls, file access"
            ],
            "do": [
              "Design three tools for a data-analysis agent with precise descriptions",
              "Test whether the model picks the right tool for 10 tasks",
              "Rewrite one failing tool description until selection is reliable"
            ],
            "tools": ["Python", "Tavily", "DuckDuckGo"],
            "res": [
              ["Anthropic Tool Use", "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use"],
              ["Tavily", "https://tavily.com"]
            ]
          },
          {
            "t": "Agent Memory",
            "d": "Short-term context, long-term stores, and knowing what to forget.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Short-term: the context window itself; compaction and summarization keep it fresh",
              "Long-term: vector stores, SQL profiles, and episodic vs semantic memory",
              "Forgetting is a feature: stale memory causes confident wrongness"
            ],
            "do": [
              "Implement conversation summarization past a token threshold",
              "Store user preferences in a simple key-value memory and retrieve them",
              "Build a memory that ages out entries after N days"
            ],
            "tools": ["LangChain", "Qdrant", "SQLite"],
            "res": [
              ["LangChain Memory", "https://docs.langchain.com"],
              ["Mem0", "https://mem0.ai"]
            ]
          },
          {
            "t": "Model Context Protocol (MCP)",
            "d": "The open standard that lets any agent use any tool server.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "MCP roles: hosts, clients, and servers exposing tools, resources, and prompts",
              "Local vs remote servers and transport options (stdio, SSE, streamable HTTP)",
              "Why MCP won: one integration per tool, usable from every MCP-compatible client"
            ],
            "do": [
              "Connect an MCP client to a public MCP server (filesystem, GitHub, or Postgres)",
              "Inspect the tool schemas a server advertises",
              "Build a tiny MCP server exposing one custom tool"
            ],
            "tools": ["MCP SDK", "Claude Code", "Cursor"],
            "res": [
              ["Model Context Protocol", "https://modelcontextprotocol.io"],
              ["MCP Servers Registry", "https://github.com/modelcontextprotocol/servers"]
            ]
          },
          {
            "t": "Building Agents with a Framework",
            "d": "LangGraph, CrewAI, or the OpenAI Agents SDK: pick one and go deep.",
            "lv": 2,
            "time": "~1d",
            "learn": [
              "LangGraph: stateful graphs with checkpointing, best for production control",
              "CrewAI: role-based crews, fastest path to a working multi-agent pilot",
              "The 2026 rule: match the framework's core abstraction to your problem's shape"
            ],
            "do": [
              "Build the same research agent in two frameworks and compare the code",
              "Add human-in-the-loop approval before any irreversible tool call",
              "Persist agent state so a run survives a restart"
            ],
            "tools": ["LangGraph", "CrewAI", "OpenAI Agents SDK"],
            "res": [
              ["LangGraph Docs", "https://docs.langchain.com/langgraph"],
              ["CrewAI Docs", "https://docs.crewai.com"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "Multimodal AI Features",
            "d": "Vision, speech, and image generation: models that see and speak.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Vision inputs: pass images alongside text for understanding, OCR, and UI analysis",
              "Speech: speech-to-text and text-to-speech pipelines for voice features",
              "Image generation APIs for creative and asset-generation features"
            ],
            "do": [
              "Build an image Q&A endpoint with a vision-capable model",
              "Transcribe audio with Whisper and summarize the transcript",
              "Generate product images from text prompts via an image API"
            ],
            "tools": ["OpenAI Vision", "Whisper", "Gemini"],
            "res": [
              ["OpenAI Vision Guide", "https://platform.openai.com/docs/guides/vision"],
              ["Whisper", "https://github.com/openai/whisper"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Evals & Observability",
        "d": "Prove it works, watch it in production, and know what it costs.",
        "lv": 3,
        "children": [
          {
            "t": "LLM Evals: Types and Metrics",
            "d": "Deterministic, model-based, and human evals: the three legs of confidence.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Deterministic evals: exact-match and regex checks for structured tasks",
              "Model-based evals: LLM-as-judge with rubrics for open-ended quality",
              "Human evals: the gold standard for taste, tone, and safety; expensive by design"
            ],
            "do": [
              "Write 20 deterministic test cases for a classification feature",
              "Design a 5-point rubric for judging answer quality",
              "Run the same eval set across two model versions and diff the results"
            ],
            "tools": ["DeepEval", "Promptfoo", "Braintrust"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["Promptfoo", "https://github.com/promptfoo/promptfoo"]
            ]
          },
          {
            "t": "LLM-as-Judge Done Right",
            "d": "Using strong models to grade weaker ones, without fooling yourself.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Judge biases: position, verbosity, and self-preference all skew scores",
              "Calibration: anchor the judge against human labels before trusting it",
              "Pairwise comparison vs rubric scoring: when each is appropriate"
            ],
            "do": [
              "Build a judge prompt with a concrete rubric for your feature",
              "Calibrate it against 30 human-labeled examples and measure agreement",
              "Re-run with swapped answer order to detect position bias"
            ],
            "tools": ["DeepEval", "RAGAS"],
            "res": [
              ["OpenAI Evals Cookbook", "https://cookbook.openai.com/examples/evaluation/use_llms_to_evaluate_llms"],
              ["RAGAS Docs", "https://docs.ragas.io"]
            ]
          },
          {
            "t": "Tracing and Observability",
            "d": "Every prompt, tool call, and token: visible, searchable, and replayable.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Traces: spans for each LLM call, retrieval step, and tool execution in one timeline",
              "LangSmith, Langfuse, Helicone, Arize Phoenix: the 2026 observability shortlist",
              "Production monitoring: error rates, latency percentiles, and quality drift over time"
            ],
            "do": [
              "Instrument your RAG or agent with LangSmith or Langfuse tracing",
              "Find your slowest span in a real trace and fix it",
              "Set up an alert for eval-score drift in production"
            ],
            "tools": ["LangSmith", "Langfuse", "Helicone"],
            "res": [
              ["LangSmith", "https://www.langchain.com/langsmith"],
              ["Langfuse", "https://langfuse.com"]
            ]
          },
          {
            "t": "Cost and Latency Budgets",
            "d": "AI features have unit economics. Design them before the invoice arrives.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Cost drivers: input tokens (caching helps), output tokens, tool-call loops, reranking",
              "Latency budget: time-to-first-token, then streaming to hide generation time",
              "Levers: smaller models for easy steps, caching, batching, and killing runaway loops"
            ],
            "do": [
              "Compute per-request cost for your agent at p50 and p99 step counts",
              "Cut one feature's cost 50% with caching and a smaller model for sub-steps",
              "Add a hard step cap and cost alarm to an agent"
            ],
            "tools": ["Helicone", "Langfuse", "OpenRouter"],
            "res": [
              ["Helicone", "https://www.helicone.ai"],
              ["OpenRouter", "https://openrouter.ai"]
            ]
          }
        ]
      },
      {
        "t": "Shipping to Production",
        "d": "Safety, deployment, and the habits that keep AI features alive.",
        "lv": 3,
        "children": [
          {
            "t": "AI Safety: Injection, Privacy, Red Teaming",
            "d": "Prompt injection is the SQL injection of this era. Treat it that way.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Direct vs indirect prompt injection: malicious users vs poisoned third-party content",
              "Defenses: input/output constraints, instruction hierarchy, least-privilege tools, adversarial testing",
              "Privacy: PII redaction, data retention policies, and knowing what trains on your data"
            ],
            "do": [
              "Jailbreak your own agent with five classic injection attempts and log what worked",
              "Add an output guardrail that blocks a disallowed content class",
              "Red-team a RAG bot with poisoned documents in its corpus"
            ],
            "tools": ["Promptfoo", "NeMo Guardrails", "Guardrails AI"],
            "res": [
              ["OWASP LLM Top 10", "https://genai.owasp.org"],
              ["Promptfoo Red Teaming", "https://github.com/promptfoo/promptfoo"]
            ]
          },
          {
            "t": "Deploying Your First LLM Feature",
            "d": "From notebook to endpoint: the deployment checklist that matters.",
            "lv": 3,
            "time": "~2d",
            "learn": [
              "API design: versioned endpoints, timeouts, retries, and graceful degradation when the model fails",
              "Evals in CI: block deploys when golden-set scores drop",
              "Fallbacks: cached answers, smaller models, and honest 'I cannot do this' paths"
            ],
            "do": [
              "Ship a FastAPI service wrapping your RAG with auth and rate limits",
              "Wire evals into CI so a bad prompt change fails the build",
              "Load-test the endpoint and document p95 latency and cost per 1k requests"
            ],
            "tools": ["FastAPI", "Docker", "GitHub Actions"],
            "res": [
              ["FastAPI Docs", "https://fastapi.tiangolo.com"],
              ["Braintrust", "https://www.braintrust.dev"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "The AI Engineer Portfolio",
            "d": "Proof of work: three projects that get you hired.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "What hiring managers look for: evals, cost awareness, and production thinking, not demos",
              "The trio: a RAG system with evals, an agent with tools and guardrails, one shipped feature",
              "Write-ups matter: architecture, failure modes, and numbers beat screenshots"
            ],
            "do": [
              "Polish your RAG project with an eval dashboard and cost numbers",
              "Publish your agent project with traces and a red-team report",
              "Write one deep technical post explaining a failure you debugged"
            ],
            "tools": ["GitHub", "Gradio", "Hugging Face Spaces"],
            "res": [
              ["Hugging Face Spaces", "https://huggingface.co/spaces"],
              ["Anthropic Engineering Blog", "https://www.anthropic.com/engineering"]
            ]
          }
        ]
      }
    ]
  }
});
