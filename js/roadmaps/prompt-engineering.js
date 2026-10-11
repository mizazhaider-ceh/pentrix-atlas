/* Atlas roadmap data: Prompt Engineering (prompt-engineering) */
ROADMAPS.push({
  "id": "prompt-engineering",
  "title": "Prompt Engineering",
  "icon": "✍️",
  "color": "#fdba74",
  "desc": "The craft of steering language models: techniques, system prompts, structured output, evals, and safety.",
  "kind": "skill",
  "root": {
    "t": "Prompt Engineering",
    "d": "From clear instructions to evaluated, production-grade prompts.",
    "children": [
      {
        "t": "Prompting Basics",
        "d": "The fundamentals: clarity, specificity, and context that every technique builds on.",
        "lv": 1,
        "children": [
          {
            "t": "Anatomy of a Good Prompt",
            "d": "Instruction, context, input data, and output spec: the four parts of a prompt that works.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The four parts: what to do, what background the model needs, the actual input, and the expected output shape",
              "Why vague prompts get vague answers: the model fills every gap with its best guess",
              "One job per prompt: compound requests fail where single focused ones succeed"
            ],
            "do": [
              "Take a bad prompt ('summarize this') and rewrite it with all four parts",
              "Run both versions on the same input and compare",
              "Split a two-job prompt into two prompts and chain them"
            ],
            "tools": ["Claude", "ChatGPT", "Gemini"],
            "res": [
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"],
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"]
            ]
          },
          {
            "t": "Zero-Shot Prompting",
            "d": "Ask directly with no examples: when clarity alone is enough.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Zero-shot works when the task is common, well-specified, and has one obvious answer shape",
              "Instruction phrasing matters: imperative verbs and explicit constraints beat polite vagueness",
              "Limits: novel formats, subtle judgments, and edge cases need more than zero-shot"
            ],
            "do": [
              "Write zero-shot prompts for five everyday tasks: translate, summarize, classify, rewrite, extract",
              "Find one task where zero-shot fails and diagnose what was underspecified",
              "Fix it with one added sentence and confirm the improvement"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Being Specific: Format, Length, Constraints",
            "d": "The model cannot read your mind. Specify the output you want in concrete terms.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Specify format (bullets, table, JSON), length (sentences, words), and tone explicitly",
              "Constraints as guardrails: 'no more than 3 options', 'cite sources', 'no jargon'",
              "Negative instructions are weaker than positive ones: say what to do, not just what to avoid"
            ],
            "do": [
              "Ask for a summary with no constraints, then with format plus length constraints, and compare",
              "Write a prompt that forces a markdown table output",
              "Convert three 'don't do X' instructions into positive 'do Y' versions"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Google Prompting Essentials", "https://developers.google.com/prompting-essentials"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Giving Context the Model Lacks",
            "d": "Models answer from training data plus your prompt. Your prompt is the only fresh part.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Relevant context: background facts, definitions, and constraints the model cannot know",
              "Context placement: put the most important context where the model will weight it",
              "Too much context dilutes: every irrelevant paragraph costs attention and money"
            ],
            "do": [
              "Answer a domain question with and without background context and compare accuracy",
              "Trim a bloated prompt to half its size without losing quality",
              "Reorder a prompt: context first vs instruction first, and test both"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic: Long Context Tips", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ],
            "tip": "Beginners stuff prompts with everything they know. Experts add the minimum context that changes the answer, and nothing else."
          },
          {
            "t": "Personas and Role Prompts",
            "d": "'Act as a senior code reviewer': why role prompts work and where they break.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Role prompts activate relevant patterns: vocabulary, rigor, and priorities of the role",
              "Effective roles are specific: 'a skeptical security auditor' beats 'an expert'",
              "Limits: a role does not grant real expertise or fix a weak underlying prompt"
            ],
            "do": [
              "Compare the same question answered with no role, a generic role, and a specific role",
              "Write a role prompt for a domain you know well and judge its authenticity",
              "Find where the role prompt hallucinates confidence and note the boundary"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"],
              ["Learn Prompting", "https://learnprompting.org"]
            ]
          },
          {
            "t": "Iterating: The Prompt Lab Habit",
            "d": "Prompting is experimental. Build the habit of version, test, compare.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Change one thing at a time: prompt iteration is debugging, not rewriting",
              "Keep a prompt journal: versions, what changed, and what improved",
              "Test on multiple inputs: a prompt that works once is a demo, not a solution"
            ],
            "do": [
              "Take one failing prompt through five documented iterations",
              "Build a 10-input test set and score each version",
              "Write a one-paragraph postmortem of what actually fixed it"
            ],
            "tools": ["Claude", "ChatGPT", "Notion"],
            "res": [
              ["Anthropic Prompt Engineering Docs", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"],
              ["Learn Prompting", "https://learnprompting.org"]
            ]
          }
        ]
      },
      {
        "t": "Core Techniques",
        "d": "The proven patterns: few-shot, chain-of-thought, ReAct, and chaining.",
        "lv": 2,
        "children": [
          {
            "t": "Few-Shot Prompting",
            "d": "Show, don't just tell: examples are the fastest way to teach format and edge cases.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "2-5 input/output examples inside the prompt set format, style, and edge-case behavior",
              "Example quality beats quantity: cover the tricky cases, not just easy wins",
              "Consistent formatting across examples; the model copies your structure exactly"
            ],
            "do": [
              "Convert a failing zero-shot classifier to few-shot with 3 examples",
              "Add one adversarial edge-case example and watch it fix failures",
              "Test 2 vs 5 vs 10 examples and find the point of diminishing returns"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic: Multishot Prompting", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting"],
              ["Learn Prompting: Few-Shot", "https://learnprompting.org/docs/basics/few_shot"]
            ]
          },
          {
            "t": "Chain-of-Thought Prompting",
            "d": "'Think step by step': elicit reasoning before the answer for harder problems.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Zero-shot CoT: append 'think step by step' and let the model reason openly",
              "Few-shot CoT: worked examples with reasoning traces teach the reasoning style",
              "Biggest wins on math, logic, and multi-hop questions; little gain on pure recall"
            ],
            "do": [
              "Solve five logic puzzles with and without chain-of-thought",
              "Write few-shot reasoning examples for a domain task",
              "Compare reasoning traces: spot where the model goes wrong mid-chain"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Learn Prompting: Chain of Thought", "https://learnprompting.org/docs/intermediate/chain_of_thought"],
              ["OpenAI Reasoning Guide", "https://platform.openai.com/docs/guides/reasoning"]
            ]
          },
          {
            "t": "ReAct Prompting",
            "d": "Reason, act, observe: the prompting pattern behind tool-using agents.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The Thought/Action/Observation format interleaves reasoning with tool results",
              "Why it works: the model plans against real observations instead of guessing",
              "From prompt pattern to agent loop: the same idea, scaffolded in code"
            ],
            "do": [
              "Hand-write a ReAct trace for a 3-step research question",
              "Simulate the tool outputs yourself and continue the trace",
              "Compare against a single-shot answer on the same question"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["ReAct Paper (arXiv)", "https://arxiv.org/abs/2210.03629"],
              ["Learn Prompting: ReAct", "https://learnprompting.org/docs/advanced/react"]
            ]
          },
          {
            "t": "Self-Consistency",
            "d": "Sample several reasoning paths and take the consensus: cheap accuracy boost.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Generate multiple chain-of-thought answers at higher temperature, then majority-vote",
              "Works best where there is one right answer: math, logic, classification",
              "Cost tradeoff: 5-10x the tokens for a meaningful accuracy lift"
            ],
            "do": [
              "Answer 10 math problems once vs 5-times-with-vote and compare accuracy",
              "Measure the token cost multiplier",
              "Decide which of your tasks justify the cost"
            ],
            "tools": ["Python", "OpenAI"],
            "res": [
              ["Self-Consistency Paper (arXiv)", "https://arxiv.org/abs/2203.11171"],
              ["Learn Prompting", "https://learnprompting.org"]
            ],
            "tag": "opt"
          },
          {
            "t": "Prompt Chaining",
            "d": "Break hard tasks into a pipeline of small prompts that each do one job well.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Decompose: outline -> draft -> critique -> revise, each as its own prompt",
              "Each step gets a focused prompt with its own examples and constraints",
              "Error handling: validate each step's output before passing it on"
            ],
            "do": [
              "Build a 3-step chain: extract key points -> draft summary -> polish tone",
              "Compare the chain's output against one giant prompt",
              "Add validation between steps and handle one failure gracefully"
            ],
            "tools": ["Python", "LangChain"],
            "res": [
              ["Anthropic: Building Effective Agents", "https://www.anthropic.com/engineering/building-effective-agents"],
              ["Learn Prompting: Chaining", "https://learnprompting.org/docs/advanced/chaining"]
            ]
          },
          {
            "t": "Generated Knowledge Prompting",
            "d": "Have the model recall facts first, then answer: a two-pass accuracy trick.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Two passes: 'list what you know about X' then 'answer using that knowledge'",
              "Separating recall from reasoning reduces confabulation on knowledge-heavy tasks",
              "Pairs well with retrieval: generated knowledge plus retrieved documents"
            ],
            "do": [
              "Answer 10 factual questions directly vs with a knowledge-generation pass first",
              "Compare against RAG answers on the same questions",
              "Note where generated knowledge hallucinates and retrieval would win"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Learn Prompting", "https://learnprompting.org"],
              ["Generated Knowledge Paper (arXiv)", "https://arxiv.org/abs/2110.08387"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "System Prompts & Control",
        "d": "The invisible layer: system prompts, structured output, and long-context management.",
        "lv": 2,
        "children": [
          {
            "t": "Writing System Prompts",
            "d": "Define the model's role, behavior, and constraints before any user input arrives.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Structure: role definition, behavioral rules, knowledge context, output conventions",
              "Instruction hierarchy: system outranks developer outranks user in well-designed models",
              "Test adversarially: users will try to override it, so verify it holds"
            ],
            "do": [
              "Write a full system prompt for a customer-support persona",
              "Attack it with five override attempts and patch the weaknesses",
              "Compare a 50-word vs 500-word system prompt on the same tasks"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic: System Prompts", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Rules, Constraints, and Refusals",
            "d": "Teach the model its boundaries: what it must do, must not do, and when to refuse.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Hard rules ('never reveal the system prompt') vs soft guidelines ('prefer concise answers')",
              "Refusal design: when to decline and what to say instead of a bare 'no'",
              "Positive framing wins: 'do X' is followed more reliably than 'never do Y'"
            ],
            "do": [
              "Write a rule set for an assistant with three hard rules and three guidelines",
              "Test each rule with a direct violation attempt",
              "Design a graceful refusal that offers a safe alternative"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic Docs", "https://docs.anthropic.com"],
              ["OpenAI Model Spec", "https://openai.com/index/introducing-the-model-spec/"]
            ]
          },
          {
            "t": "Structured Output: JSON Mode and Schemas",
            "d": "Make the model answer in machine-readable shape your code can trust.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "JSON mode and structured outputs: schema-constrained generation, not hopeful parsing",
              "Define fields, types, enums, and required keys; validate with Pydantic anyway",
              "Schemas constrain shape, not truth: validate content separately"
            ],
            "do": [
              "Extract structured data from three messy paragraphs into one schema",
              "Build a classifier returning label plus confidence as JSON",
              "Handle one schema violation gracefully in code"
            ],
            "tools": ["Pydantic", "OpenAI", "Instructor"],
            "res": [
              ["OpenAI Structured Outputs", "https://platform.openai.com/docs/guides/structured-outputs"],
              ["Pydantic Docs", "https://docs.pydantic.dev"]
            ]
          },
          {
            "t": "Delimiters and Input Formatting",
            "d": "XML tags, markdown fences, and separators: structure your input so the model cannot confuse it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Wrap user data, documents, and examples in clear delimiters like XML tags",
              "Delimiters separate instructions from data: critical for injection resistance",
              "Consistent formatting across examples teaches the model your conventions"
            ],
            "do": [
              "Rewrite a prompt mixing instructions and data with XML-tagged sections",
              "Test whether the model still confuses data for instructions",
              "Standardize a multi-example prompt with one delimiter scheme"
            ],
            "tools": ["Claude", "ChatGPT"],
            "res": [
              ["Anthropic: Use XML Tags", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags"],
              ["OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering"]
            ]
          },
          {
            "t": "Long Context: Managing Big Inputs",
            "d": "100k tokens in, good answers out: only if you structure the haystack.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Lost in the middle: key facts buried mid-context get ignored; front-load what matters",
              "Structure long inputs: headings, summaries, and a query restated at the end",
              "When to chunk instead: retrieval beats dumping for very large corpora"
            ],
            "do": [
              "Hide a fact at the start, middle, and end of a long document and test recall",
              "Restructure the document with summaries and re-test",
              "Decide the dump-vs-retrieve threshold for three use cases"
            ],
            "tools": ["Claude", "Gemini"],
            "res": [
              ["Anthropic: Long Context Tips", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips"],
              ["Google AI Docs", "https://ai.google.dev"]
            ],
            "tip": "The most common long-context mistake is pasting a document and asking a vague question. Restate the exact question after the document, and tell the model where to look."
          }
        ]
      }
      ,
      {
        "t": "Advanced Techniques",
        "d": "Function calling, caching, reasoning budgets, and automated optimization.",
        "lv": 3,
        "children": [
          {
            "t": "Function Calling via Prompts",
            "d": "Teach the model to request actions in structured form, even before touching an SDK.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Describe tools in the prompt: name, purpose, and parameter schema in plain text",
              "The model emits structured calls; your code executes and returns results",
              "Good tool descriptions decide success: when to call, with what, and what comes back"
            ],
            "do": [
              "Write a prompt describing two tools and simulate the full call loop by hand",
              "Implement it for real with a provider's function-calling API",
              "Break tool selection with a vague description, then fix it"
            ],
            "tools": ["OpenAI", "Anthropic Tool Use", "Python"],
            "res": [
              ["OpenAI Function Calling", "https://platform.openai.com/docs/guides/function-calling"],
              ["Anthropic Tool Use", "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use"]
            ]
          },
          {
            "t": "Prompt Caching",
            "d": "Cache the stable prefix of your prompt: cheaper, faster, same answers.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Providers cache long prompt prefixes; cache hits cut cost and latency sharply",
              "Cache-friendly design: static system prompt and context first, variables last",
              "Breakpoints: explicit markers where the cached prefix ends"
            ],
            "do": [
              "Restructure a RAG prompt so the static context is a cacheable prefix",
              "Measure cost and latency with caching on vs off",
              "Estimate monthly savings for a high-volume use case"
            ],
            "tools": ["Anthropic", "OpenAI"],
            "res": [
              ["Anthropic Prompt Caching", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching"],
              ["OpenAI Prompt Caching", "https://platform.openai.com/docs/guides/prompt-caching"]
            ]
          },
          {
            "t": "Reasoning Effort and Thinking Budgets",
            "d": "Reasoning models let you dial thinking up or down: spend compute where it pays.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Effort settings trade thinking tokens for answer quality on hard tasks",
              "Low effort for classification and extraction; high effort for planning and proofs",
              "Watch for overthinking: simple tasks get slower without getting better"
            ],
            "do": [
              "Run the same task at three effort levels and plot quality vs cost",
              "Find the effort sweet spot for two of your tasks",
              "Set a policy: which task classes get which effort by default"
            ],
            "tools": ["OpenAI", "Anthropic", "Gemini"],
            "res": [
              ["OpenAI Reasoning Guide", "https://platform.openai.com/docs/guides/reasoning"],
              ["Anthropic Docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Retrieval-Augmented Prompting",
            "d": "Ground prompts in retrieved documents: the prompt-level view of RAG.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Inject retrieved passages into the prompt with source labels",
              "Instruct the model to answer only from the provided context and cite sources",
              "Handle the empty-retrieval case: what the model should say when nothing matches"
            ],
            "do": [
              "Build a prompt template that takes retrieved chunks plus the question",
              "Add a 'say I don't know' instruction and test it on unanswerable questions",
              "Require citations and verify every claim traces to a chunk"
            ],
            "tools": ["Python", "Qdrant", "LangChain"],
            "res": [
              ["LlamaIndex Docs", "https://docs.llamaindex.ai"],
              ["RAGAS Docs", "https://docs.ragas.io"]
            ]
          },
          {
            "t": "Automatic Prompt Optimization with DSPy",
            "d": "Stop hand-tuning: define the task and metrics, let the optimizer search prompt space.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "DSPy: programs over prompts; optimizers tune instructions and examples against metrics",
              "You define signatures (input/output spec) and a metric; the compiler finds good prompts",
              "When it shines: classification and extraction with labeled data; less so for open-ended writing"
            ],
            "do": [
              "Define a DSPy signature for a classification task with 50 labeled examples",
              "Run an optimizer and compare its prompt against your hand-written one",
              "Inspect what the optimizer discovered that you would not have tried"
            ],
            "tools": ["DSPy", "Python"],
            "res": [
              ["DSPy Docs", "https://dspy.ai"],
              ["DSPy GitHub", "https://github.com/stanfordnlp/dspy"]
            ],
            "tag": "opt"
          },
          {
            "t": "Multimodal Prompting",
            "d": "Prompt with images, not just text: vision inputs change the game.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Pass images alongside text: screenshots, diagrams, photos for analysis",
              "Prompt for visual tasks: describe what to look at and what to ignore",
              "Limits: resolution, multiple images, and what vision models still misread"
            ],
            "do": [
              "Ask a vision model to review a UI screenshot for issues",
              "Extract structured data from a photographed document",
              "Test the same task with a cropped vs full image and compare"
            ],
            "tools": ["Claude", "GPT-4o", "Gemini"],
            "res": [
              ["OpenAI Vision Guide", "https://platform.openai.com/docs/guides/vision"],
              ["Anthropic Vision Docs", "https://docs.anthropic.com/en/docs/build-with-claude/vision"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Evaluating Prompts",
        "d": "Prove prompts work: golden sets, judges, A/B tests, and CI gates.",
        "lv": 3,
        "children": [
          {
            "t": "Golden Sets: Build Your Test Suite",
            "d": "A prompt without tests is a hope. Build the dataset that proves it works.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Golden set: 20-100 representative inputs with expected outputs or grading rubrics",
              "Cover the edges: ambiguous inputs, adversarial cases, and format variants",
              "Version the dataset alongside the prompt; both evolve together"
            ],
            "do": [
              "Build a 30-case golden set for one of your prompts",
              "Include 10 edge cases that currently fail",
              "Score your prompt v1 and record the baseline"
            ],
            "tools": ["Python", "CSV", "LangSmith"],
            "res": [
              ["LangSmith Evals", "https://www.langchain.com/langsmith"],
              ["Braintrust", "https://www.braintrust.dev"]
            ]
          },
          {
            "t": "Metrics: What to Measure",
            "d": "Accuracy, format compliance, faithfulness: pick metrics that match the job.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Deterministic metrics: exact match, regex, JSON validity, field presence",
              "Semantic metrics: faithfulness to sources, relevance, completeness",
              "One metric per goal: a prompt optimizing three things optimizes none"
            ],
            "do": [
              "Define three metrics for a summarization prompt and implement them",
              "Score your golden set and find the weakest dimension",
              "Fix the prompt for that dimension and re-score"
            ],
            "tools": ["DeepEval", "RAGAS", "Python"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["RAGAS Docs", "https://docs.ragas.io"]
            ]
          },
          {
            "t": "LLM-as-Judge",
            "d": "Grade open-ended outputs with a strong model and a ruthless rubric.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Rubric design: concrete criteria with score anchors beat vague 'rate 1-10'",
              "Judge biases: position, verbosity, and self-preference; calibrate against humans",
              "Pairwise comparison for ranking prompts; rubric scoring for absolute quality"
            ],
            "do": [
              "Write a judge prompt with a 5-point anchored rubric",
              "Calibrate on 30 human-graded examples and measure agreement",
              "Use the judge to rank three prompt variants"
            ],
            "tools": ["DeepEval", "Python"],
            "res": [
              ["OpenAI Evals Cookbook", "https://cookbook.openai.com/examples/evaluation/use_llms_to_evaluate_llms"],
              ["DeepEval", "https://github.com/confident-ai/deepeval"]
            ]
          },
          {
            "t": "A/B Testing Prompts",
            "d": "Compare variants on the same inputs: let data pick the winner.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Same inputs, same judge, blind labels: the only fair comparison",
              "Statistical thinking: small samples lie; know your confidence",
              "Test one change at a time or you will never know what worked"
            ],
            "do": [
              "A/B two prompt variants on your golden set with blind judging",
              "Compute the win rate and check it is not noise",
              "Document the winner and why in your prompt journal"
            ],
            "tools": ["Python", "Braintrust"],
            "res": [
              ["Braintrust", "https://www.braintrust.dev"],
              ["LangSmith", "https://www.langchain.com/langsmith"]
            ]
          },
          {
            "t": "Regression Testing with Promptfoo",
            "d": "Catch prompt regressions in CI: evals that fail the build.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Promptfoo: declarative eval configs with assertions over model outputs",
              "Assertions: contains, regex, JSON schema, LLM rubric, and custom functions",
              "CI integration: prompt changes that drop scores block the merge"
            ],
            "do": [
              "Write a promptfoo config with 10 test cases and mixed assertions",
              "Run it against two model versions and diff the results",
              "Add it to CI and watch a bad prompt change get caught"
            ],
            "tools": ["Promptfoo", "GitHub Actions"],
            "res": [
              ["Promptfoo", "https://github.com/promptfoo/promptfoo"],
              ["Promptfoo Docs", "https://www.promptfoo.dev"]
            ]
          },
          {
            "t": "Human Review Loops",
            "d": "Humans grade what automation cannot: tone, taste, and trust.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Sample failures and edge cases for review, not random successes",
              "Structured review forms beat freeform comments: criteria plus examples",
              "Close the loop: every human-found failure becomes a golden test case"
            ],
            "do": [
              "Design a review form with five criteria for your prompt's outputs",
              "Review 20 outputs and categorize the failures",
              "Add the top failure class to your golden set"
            ],
            "tools": ["Label Studio", "Google Sheets"],
            "res": [
              ["Label Studio", "https://labelstud.io"],
              ["Braintrust", "https://www.braintrust.dev"]
            ]
          },
          {
            "t": "Eval-Driven Prompt Iteration",
            "d": "The full loop: baseline, change, measure, keep or revert. Your capstone habit.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "The discipline: no prompt ships without a before/after score",
              "Diminishing returns: know when the prompt is good enough to stop tuning",
              "Document everything: future you needs the why, not just the what"
            ],
            "do": [
              "Take one production-style prompt through three eval-driven iterations",
              "Ship the winner with its eval report attached",
              "Write the playbook you would hand to a teammate"
            ],
            "tools": ["Promptfoo", "DeepEval", "LangSmith"],
            "res": [
              ["Promptfoo", "https://github.com/promptfoo/promptfoo"],
              ["DeepEval", "https://github.com/confident-ai/deepeval"]
            ],
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Safety & Deployment",
        "d": "Prompts in the wild: injection defense, guardrails, privacy, and production ops.",
        "lv": 3,
        "children": [
          {
            "t": "Prompt Injection: Direct and Indirect",
            "d": "The attack every prompt engineer must understand: instructions hiding in data.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Direct injection: the user tells the model to ignore its instructions",
              "Indirect injection: malicious instructions inside webpages, docs, or tool outputs",
              "Why it works: models cannot reliably distinguish instructions from data"
            ],
            "do": [
              "Execute five classic injection attacks against a naive assistant prompt",
              "Try an indirect attack via a poisoned 'document' the prompt reads",
              "Log which attacks succeeded and why"
            ],
            "tools": ["Promptfoo", "Claude"],
            "res": [
              ["OWASP LLM Top 10", "https://genai.owasp.org"],
              ["Promptfoo Red Teaming", "https://github.com/promptfoo/promptfoo"]
            ]
          },
          {
            "t": "Jailbreaks and Why They Work",
            "d": "Roleplay, encoding tricks, and multi-turn setups: the jailbreak playbook.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Common patterns: persona hijacking, hypothetical framing, encoded payloads, many-shot priming",
              "Why patches are whack-a-mole: the vulnerability is in the architecture, not the filter",
              "Defense in depth: no single prompt trick stops a determined attacker"
            ],
            "do": [
              "Test three published jailbreak patterns against a guarded prompt",
              "Note which layer of defense each one bypasses",
              "Write a threat model for your own prompt-based feature"
            ],
            "tools": ["Promptfoo", "Python"],
            "res": [
              ["OWASP LLM Top 10", "https://genai.owasp.org"],
              ["Anthropic Docs", "https://docs.anthropic.com"]
            ]
          },
          {
            "t": "Guardrails and Content Filters",
            "d": "Validators around the model: screen inputs, constrain outputs.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Input guardrails: injection screening, topic allowlists, PII detection",
              "Output guardrails: content moderation, format validation, citation checks",
              "Where guardrails live: in the prompt, in code around the call, or both"
            ],
            "do": [
              "Add a moderation check on outputs of your prompt",
              "Build an input screener that flags injection attempts",
              "Measure false-positive rate on 50 benign inputs"
            ],
            "tools": ["NeMo Guardrails", "Guardrails AI", "OpenAI Moderation"],
            "res": [
              ["NeMo Guardrails", "https://github.com/NVIDIA/NeMo-Guardrails"],
              ["OpenAI Moderation", "https://platform.openai.com/docs/guides/moderation"]
            ]
          },
          {
            "t": "PII Redaction and Privacy",
            "d": "Prompts touch real user data. Treat it like the liability it is.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Redact before sending: emails, phones, IDs, and secrets never reach the model",
              "Data retention: know what your provider logs and trains on",
              "Jurisdiction matters: GDPR and company policy constrain what you can send"
            ],
            "do": [
              "Build a redaction pass that strips PII before the prompt runs",
              "Audit one provider's data-usage policy and write the summary",
              "Design a prompt flow that never sees raw user data"
            ],
            "tools": ["Python", "Presidio"],
            "res": [
              ["Microsoft Presidio", "https://github.com/microsoft/presidio"],
              ["OWASP LLM Top 10", "https://genai.owasp.org"]
            ]
          },
          {
            "t": "Bias and Toxicity Mitigation",
            "d": "Prompts shape behavior: steer away from bias and harmful outputs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Where bias creeps in: examples, role framing, and unexamined defaults",
              "Mitigation: diverse few-shot examples, explicit fairness instructions, output review",
              "Measurement: disaggregated evals across groups, not just averages"
            ],
            "do": [
              "Audit your few-shot examples for representation skew",
              "Add explicit fairness constraints and re-run your golden set",
              "Score outputs disaggregated by group and compare"
            ],
            "tools": ["DeepEval", "Python"],
            "res": [
              ["DeepEval", "https://github.com/confident-ai/deepeval"],
              ["Anthropic Docs", "https://docs.anthropic.com"]
            ],
            "tag": "opt"
          },
          {
            "t": "Production Prompts: Versioning and Monitoring",
            "d": "Prompts are code: version them, monitor them, roll them back.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Versioning: every prompt change gets a version, a diff, and an eval report",
              "Monitoring: track quality metrics, latency, and cost per prompt version",
              "Rollout: canary new prompts on a fraction of traffic before full release"
            ],
            "do": [
              "Store your prompts in git with versions and changelogs",
              "Set up per-version quality and cost tracking",
              "Practice a rollback: revert to the previous version after a bad deploy"
            ],
            "tools": ["LangSmith", "Langfuse", "Git"],
            "res": [
              ["LangSmith", "https://www.langchain.com/langsmith"],
              ["Langfuse", "https://langfuse.com"]
            ]
          },
          {
            "t": "Cost-Aware Prompting",
            "d": "Every token has a price. Design prompts that are cheap by construction.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Cost levers: shorter prompts, caching, smaller models, fewer retries",
              "The few-shot tax: examples are powerful and expensive; prune ruthlessly",
              "Measure first: per-prompt cost dashboards before optimization"
            ],
            "do": [
              "Compute the per-call cost of your most expensive prompt",
              "Cut it 50% with caching and example pruning without losing quality",
              "Set a cost budget per 1k calls and an alert"
            ],
            "tools": ["Helicone", "Langfuse"],
            "res": [
              ["Helicone", "https://www.helicone.ai"],
              ["OpenRouter", "https://openrouter.ai"]
            ]
          }
        ]
      }
    ]
  }
});
