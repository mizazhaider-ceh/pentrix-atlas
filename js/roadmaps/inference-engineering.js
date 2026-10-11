/* Atlas roadmap data: Inference Engineering (inference-engineering) */
ROADMAPS.push({
  "id": "inference-engineering",
  "title": "Inference Engineering",
  "icon": "⚡",
  "color": "#c026d3",
  "desc": "Serve LLMs and other models fast and cheap: quantization, vLLM and TensorRT, batching, GPU optimization, and the cost-latency tradeoffs in between.",
  "kind": "role",
  "root": {
    "t": "Inference Engineer",
    "d": "The person who makes the model answer in milliseconds instead of seconds, and in cents instead of dollars.",
    "children": [
      {
        "t": "Inference Fundamentals",
        "d": "The vocabulary of serving: what inference is, where it runs, and how you measure it.",
        "lv": 1,
        "children": [
          {
            "t": "Inference vs Training",
            "d": "Training learns weights once; inference uses them millions of times. Different bottlenecks, different optimizations.",
            "lv": 1,
            "time": "~2h",
            "tip": "Training is compute-bound, inference is usually memory-bound. Optimizations that speed training often do nothing for serving.",
            "learn": [
              "Forward pass only: no gradients, no optimizer state at inference",
              "Why inference cares about latency and cost per token, not throughput per GPU-hour",
              "Batch size 1 vs large batches: the serving reality vs the training setup",
              "What carries over: mixed precision, distributed primitives"
            ],
            "do": [
              "Run the same model in training mode and eval mode and compare memory use",
              "Time a single forward pass vs a full training step",
              "List three optimizations that help training but not inference"
            ],
            "tools": ["PyTorch"],
            "res": [
              ["PyTorch docs", "https://pytorch.org/docs/stable/index.html"]
            ]
          },
          {
            "t": "The Inference Stack",
            "d": "Model, runtime, engine, orchestrator, hardware: the five layers every serving system stacks.",
            "lv": 1,
            "time": "~2h",
            "tip": "When latency is bad, name the layer before touching anything. Guessing between model, engine, and hardware wastes weeks.",
            "learn": [
              "Layer 1: the model and its format (safetensors, GGUF, ONNX)",
              "Layer 2: the runtime and kernels (CUDA, TensorRT, custom kernels)",
              "Layer 3: the serving engine (vLLM, SGLang, TensorRT-LLM)",
              "Layer 4-5: orchestration (k8s, autoscaling) and hardware (GPU choice)"
            ],
            "do": [
              "Draw the stack for a Hugging Face pipeline serving a 7B model",
              "For a slow endpoint, list one suspect per layer",
              "Pick one layer to learn deeply and justify the choice"
            ],
            "tools": ["vLLM", "Hugging Face Transformers"],
            "res": [
              ["Hugging Face docs", "https://huggingface.co/docs"]
            ]
          },
          {
            "t": "Open vs Closed Models",
            "d": "Weights you can download and optimize versus APIs you can only call: the strategic fork in inference work.",
            "lv": 1,
            "time": "~2h",
            "tip": "Open weights are not just about cost. They are about control: quantization, fine-tuning, and on-premise data that can never leave your network.",
            "learn": [
              "Open-weight models: Llama, Qwen, Mistral families and their licenses",
              "Closed APIs: what you gain (ops, scale) and lose (control, data residency)",
              "License reality: what 'open' actually permits commercially",
              "The hybrid path: prototype on APIs, self-host the winners"
            ],
            "do": [
              "Compare the license terms of two open-weight models",
              "Price 1M tokens on a closed API vs self-hosting a 8B model",
              "List three reasons a company would self-host despite the ops burden"
            ],
            "tools": ["Ollama", "Hugging Face Hub"],
            "res": [
              ["Hugging Face Hub docs", "https://huggingface.co/docs/hub/en/index"]
            ]
          },
          {
            "t": "Shared vs Dedicated Inference",
            "d": "Multi-tenant API endpoints versus your own GPUs: isolation, noisy neighbors, and cost control.",
            "lv": 1,
            "time": "~2h",
            "tip": "Shared inference is cheapest until your p99 spikes during someone else's traffic burst. Latency SLAs push teams to dedicated.",
            "learn": [
              "Shared endpoints: cheap, simple, variable latency",
              "Dedicated deployments: your GPUs, your performance envelope",
              "Noisy neighbors and how providers isolate tenants",
              "When to move: the traffic and SLA thresholds"
            ],
            "do": [
              "Measure latency variance on a shared endpoint over an hour",
              "Define the SLA that would force a move to dedicated",
              "Compare monthly costs at three traffic levels"
            ],
            "tools": ["Together AI", "Fireworks AI", "vLLM"],
            "res": [
              ["Together AI docs", "https://www.together.ai"]
            ]
          },
          {
            "t": "Latency Metrics: TTFT, TPS, ITL",
            "d": "Time to first token, tokens per second, inter-token latency: the three numbers that describe user experience.",
            "lv": 1,
            "time": "~3h",
            "tip": "Users feel TTFT and ITL, not total time. A fast total with a 5-second TTFT feels broken; a streamed answer with steady tokens feels instant.",
            "learn": [
              "TTFT: time to first token, dominated by prefill",
              "TPS: tokens per second, the headline throughput number",
              "ITL: inter-token latency, what makes streaming feel smooth or stuttery",
              "Which metric each product type should optimize"
            ],
            "do": [
              "Measure TTFT, TPS, and ITL for a local model with a streaming client",
              "Change the prompt length and watch TTFT move",
              "Set target values for a chat product and a batch job"
            ],
            "tools": ["Ollama", "vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "Latency vs Throughput",
            "d": "Fast for one user versus fast for a thousand: the fundamental tradeoff in serving design.",
            "lv": 1,
            "time": "~2h",
            "tip": "Bigger batches raise throughput and wreck per-request latency. Every serving config is a vote in this tradeoff.",
            "learn": [
              "Latency: how fast one request completes; throughput: requests per second",
              "Why batching helps throughput and hurts latency",
              "Utilization: idle GPUs are fast and expensive",
              "Reading a latency-throughput curve to pick an operating point"
            ],
            "do": [
              "Benchmark a model at batch sizes 1, 8, and 32 and plot both metrics",
              "Find the knee of the curve where latency starts climbing",
              "Choose an operating point for a chat API and justify it"
            ],
            "tools": ["vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "Latency Percentiles (p50/p99)",
            "d": "Averages lie. Percentiles tell you what your unluckiest users actually experience.",
            "lv": 2,
            "time": "~2h",
            "tip": "Optimize p99, report p50. Your SLA is judged by the tail, and the tail is where queueing and cold starts hide.",
            "learn": [
              "p50, p90, p99, p99.9: what each percentile means",
              "Why averages hide tail latency",
              "What inflates the tail: queueing, cold starts, long prompts",
              "SLA design around percentiles"
            ],
            "do": [
              "Collect 500 request latencies and compute p50/p90/p99",
              "Compare the mean to p99 and explain the gap",
              "Write an SLA in percentile terms for an inference API"
            ],
            "tools": ["Locust", "Grafana"],
            "res": [
              ["Locust docs", "https://docs.locust.io"]
            ]
          }
        ]
      },
      {
        "t": "How Generation Works: Prefill & Decode",
        "d": "Autoregressive generation has two phases with opposite bottlenecks. Everything in inference engineering follows from this.",
        "lv": 2,
        "children": [
          {
            "t": "Prefill & Decode Phases",
            "d": "Prefill processes your prompt in parallel; decode generates one token at a time. Two phases, two optimizations.",
            "lv": 2,
            "time": "~3h",
            "tip": "Long prompts make TTFT slow (prefill-bound); long answers make generation slow (decode-bound). Know which phase your workload lives in.",
            "learn": [
              "Prefill: parallel processing of the prompt, compute-bound",
              "Decode: sequential token generation, memory-bandwidth-bound",
              "Why TTFT tracks prompt length and TPS tracks model size",
              "How engines schedule the two phases differently"
            ],
            "do": [
              "Time TTFT vs prompt length for a local model and plot it",
              "Time tokens-per-second vs output length and note it stays flat",
              "Classify three workloads as prefill-bound or decode-bound"
            ],
            "tools": ["vLLM", "Ollama"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "The KV Cache",
            "d": "The cache that makes generation possible: store past keys and values instead of recomputing them every token.",
            "lv": 2,
            "time": "~3h",
            "tip": "KV cache is usually the memory bottleneck, not the weights. Long contexts and big batches die on KV cache before anything else.",
            "learn": [
              "Keys and values: what gets cached per layer per token",
              "Cache size math: layers x heads x dim x tokens x bytes",
              "Why the cache grows with context length and batch size",
              "Cache eviction and sliding windows for very long contexts"
            ],
            "do": [
              "Compute the KV cache size for a 70B model at 32k context",
              "Watch memory grow as you extend a conversation",
              "Find the max batch size before OOM on your GPU"
            ],
            "tools": ["vLLM", "PyTorch"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "Why Decode Is Memory-Bound",
            "d": "Each decode step reads the whole model to produce one token. Memory bandwidth, not FLOPs, sets the speed limit.",
            "lv": 2,
            "time": "~3h",
            "tip": "The back-of-envelope formula: tokens/sec ≈ memory bandwidth / (2 × params × bytes per param). Memorize it; it answers half of sizing questions.",
            "learn": [
              "The decode step: load all weights, do a little math, emit one token",
              "Memory bandwidth as the speed limit",
              "The formula: bandwidth / (2 x params x bytes per param)",
              "Why quantization speeds decode: fewer bytes per param"
            ],
            "do": [
              "Compute theoretical max tokens/sec for a 70B model on an A100",
              "Compare against measured throughput and explain the gap",
              "Show how INT4 quantization changes the math"
            ],
            "tools": ["PyTorch"],
            "res": [
              ["NVIDIA docs", "https://docs.nvidia.com"]
            ]
          },
          {
            "t": "Online vs Offline Inference",
            "d": "Live requests with latency budgets versus batch jobs that just need throughput: different engines, different tuning.",
            "lv": 2,
            "time": "~2h",
            "tip": "Offline inference can use huge batches and aggressive quantization that online serving cannot. Do not tune both the same way.",
            "learn": [
              "Online: interactive, latency SLOs, variable arrival rates",
              "Offline: batch scoring, throughput is king, latency is free",
              "Engine modes: vLLM online server vs offline batched engine",
              "Cost implications of each"
            ],
            "do": [
              "Run the same dataset through vLLM online and offline modes",
              "Compare throughput and cost per token",
              "Decide which mode fits three real workloads"
            ],
            "tools": ["vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "The Roofline Model",
            "d": "Plot your workload against hardware limits to see whether you are compute-bound or memory-bound before optimizing.",
            "lv": 3,
            "time": "~3h",
            "tip": "Roofline first, optimization second. Tuning kernels for a memory-bound workload is how engineers waste months.",
            "learn": [
              "Arithmetic intensity: FLOPs per byte moved",
              "The roofline plot: memory roof, compute roof, and your workload's point",
              "Placing prefill (compute-bound) and decode (memory-bound) on the plot",
              "What the plot tells you to optimize"
            ],
            "do": [
              "Sketch a roofline for your GPU from its spec sheet",
              "Place a prefill step and a decode step on it",
              "Predict which optimization helps each phase, then verify"
            ],
            "tools": ["PyTorch Profiler"],
            "res": [
              ["NVIDIA docs", "https://docs.nvidia.com"]
            ]
          },
          {
            "t": "Batching Basics",
            "d": "Group requests to share the cost of loading weights: the oldest trick and still the biggest lever.",
            "lv": 2,
            "time": "~2h",
            "tip": "Naive batching waits for the slowest request. Continuous batching (next category's engines do this) fixes it, but understand the naive version first.",
            "learn": [
              "Static batching: pad to the longest, wait for the slowest",
              "Why batching amortizes weight loading across requests",
              "Padding waste and the variable-length problem",
              "Batch size vs latency: the tradeoff curve"
            ],
            "do": [
              "Benchmark throughput at batch sizes 1 through 32",
              "Measure padding waste on variable-length prompts",
              "Find where throughput saturates on your GPU"
            ],
            "tools": ["vLLM", "PyTorch"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          }
        ]
      },
      {
        "t": "GPU Hardware & Sizing",
        "d": "Know the metal: what makes GPUs fast at inference, which ones to rent, and how many you need.",
        "lv": 2,
        "children": [
          {
            "t": "GPU Anatomy: Compute vs Memory",
            "d": "Tensor cores do the math, HBM feeds them data. Inference lives or dies on the balance.",
            "lv": 2,
            "time": "~3h",
            "tip": "Read the memory bandwidth first on any spec sheet. For LLM serving it predicts performance better than TFLOPS.",
            "learn": [
              "Tensor cores: matrix math accelerators and their precisions",
              "HBM: high-bandwidth memory, capacity vs bandwidth",
              "Why capacity limits model size and bandwidth limits speed",
              "Reading a GPU spec sheet for inference"
            ],
            "do": [
              "Compare bandwidth and capacity across three GPU models",
              "Compute which GPUs can hold a 70B model in FP16",
              "Predict relative decode speed from bandwidth numbers alone"
            ],
            "tools": ["nvidia-smi"],
            "res": [
              ["NVIDIA docs", "https://docs.nvidia.com"]
            ]
          },
          {
            "t": "NVIDIA Generations: A100 to Blackwell",
            "d": "Ampere, Hopper, Blackwell: what each generation changed for inference, especially FP8 and FP4.",
            "lv": 2,
            "time": "~2h",
            "tip": "FP8 on Hopper roughly doubles decode speed over FP16 with tiny quality loss. Hardware generations matter because they unlock new precisions.",
            "learn": [
              "A100 (Ampere): the workhorse, strong FP16",
              "H100/H200 (Hopper): FP8 support, much higher bandwidth",
              "B200/Blackwell: FP4 and NVFP4 for extreme efficiency",
              "Matching precision to hardware: FP8 needs Hopper or newer"
            ],
            "do": [
              "Build a table: generation, memory, bandwidth, key precisions",
              "Map three model sizes to minimum viable GPUs",
              "Price the same workload on A100 vs H100 spot"
            ],
            "tools": ["nvidia-smi"],
            "res": [
              ["NVIDIA docs", "https://docs.nvidia.com"]
            ]
          },
          {
            "t": "Interconnects: NVLink & InfiniBand",
            "d": "Multi-GPU serving is a networking problem. NVLink inside the box, InfiniBand between boxes.",
            "lv": 3,
            "time": "~3h",
            "tip": "Tensor parallelism across slow interconnects is slower than a smaller model on one GPU. Check interconnect before splitting models.",
            "learn": [
              "NVLink: GPU-to-GPU bandwidth inside a node",
              "InfiniBand vs Ethernet between nodes",
              "Why tensor parallelism is interconnect-hungry",
              "PCIe-only boxes: the hidden bottleneck"
            ],
            "do": [
              "Check your node's interconnect with nvidia-smi nvlink",
              "Estimate all-reduce cost for a tensor-parallel split",
              "Decide single-node vs multi-node for a 70B model"
            ],
            "tools": ["nvidia-smi", "NCCL"],
            "res": [
              ["NVIDIA docs", "https://docs.nvidia.com"]
            ],
            "tag": "opt"
          },
          {
            "t": "GPU Sizing for a Workload",
            "d": "Turn traffic targets into GPU counts: the math between users, latency, and VRAM.",
            "lv": 2,
            "time": "~4h",
            "tip": "Size for p99 traffic plus headroom, not the average. Averages do not page you at 3am; traffic spikes do.",
            "learn": [
              "From SLA to GPUs: requests/sec, tokens/request, latency budget",
              "VRAM math: weights + KV cache + overhead",
              "Headroom rules: never plan above 70-80% utilization",
              "When to shard the model vs replicate it"
            ],
            "do": [
              "Size GPUs for a hypothetical 50 req/s chat workload",
              "Compute VRAM for weights plus KV cache at your max context",
              "Build a spreadsheet that turns traffic into GPU count"
            ],
            "tools": ["vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "Spot, Reserved & Serverless GPUs",
            "d": "Pay for GPUs three ways: cheap and interruptible, committed and discounted, or per-second serverless.",
            "lv": 2,
            "time": "~2h",
            "tip": "Offline batch jobs belong on spot. Interactive APIs belong on reserved or on-demand. Mixing them up is the most expensive beginner mistake.",
            "learn": [
              "Spot/preemptible: up to 70% off, can vanish anytime",
              "Reserved/committed: discounts for predictable workloads",
              "Serverless GPUs: per-second billing, cold starts included",
              "Matching pricing model to workload shape"
            ],
            "do": [
              "Price one workload three ways: spot, reserved, serverless",
              "Design a checkpointing strategy for spot interruptions",
              "Decide the pricing mix for a startup's inference fleet"
            ],
            "tools": ["Modal", "RunPod"],
            "res": [
              ["Modal docs", "https://modal.com"]
            ]
          },
          {
            "t": "Local & Edge Inference",
            "d": "Run models on laptops, desktops, and edge devices with llama.cpp, Ollama, and quantized formats.",
            "lv": 2,
            "time": "~4h",
            "tip": "GGUF quantization is the local-inference standard. A Q4 8B model runs fine on a laptop; chasing full precision locally is pointless.",
            "learn": [
              "llama.cpp and the GGUF format: CPU and hybrid inference",
              "Ollama: the friendly wrapper for local models",
              "Quantization levels: Q8 down to Q2 and their quality tradeoffs",
              "Apple Silicon, NPUs, and edge accelerators"
            ],
            "do": [
              "Run a Q4 8B model locally with Ollama",
              "Compare quality and speed across Q8, Q4, and Q2",
              "Serve it on your LAN and measure latency from another device"
            ],
            "tools": ["Ollama", "llama.cpp", "LM Studio"],
            "res": [
              ["Ollama", "https://ollama.com"],
              ["llama.cpp", "https://github.com/ggerganov/llama.cpp"]
            ]
          }
        ]
      },
      {
        "t": "Inference Engines",
        "d": "The software that turns a model file into a fast API: vLLM, SGLang, TensorRT-LLM, and how they differ.",
        "lv": 2,
        "children": [
          {
            "t": "vLLM",
            "d": "The default open-source serving engine: PagedAttention, continuous batching, and broad model support.",
            "lv": 2,
            "time": "~4h",
            "tip": "vLLM is the safest first choice: fastest to deploy, widest model support, biggest community. Optimize later with the specialized engines.",
            "learn": [
              "PagedAttention: KV cache managed like virtual memory pages",
              "Continuous batching: new requests join running batches",
              "The OpenAI-compatible API server",
              "Key flags: tensor-parallel-size, gpu-memory-utilization, max-model-len"
            ],
            "do": [
              "Serve a 7B model with vLLM's OpenAI-compatible server",
              "Tune gpu-memory-utilization and max-num-seqs, measure the effect",
              "Load-test and record throughput vs a naive Hugging Face server"
            ],
            "tools": ["vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "SGLang",
            "d": "The engine built for shared prefixes: RadixAttention reuses KV cache across requests with common prompts.",
            "lv": 2,
            "time": "~4h",
            "tip": "SGLang wins on chat, agents, and RAG where every request shares a system prompt. On random independent prompts it looks like vLLM.",
            "learn": [
              "RadixAttention: KV cache organized as a radix tree by token prefix",
              "Where prefix reuse pays: multi-turn chat, few-shot prompts, RAG",
              "Structured generation: constrained decoding for JSON and schemas",
              "The genai-bench benchmarking suite"
            ],
            "do": [
              "Serve the same model on vLLM and SGLang",
              "Benchmark multi-turn chat traffic on both and compare TTFT",
              "Try structured JSON output generation"
            ],
            "tools": ["SGLang"],
            "res": [
              ["SGLang", "https://github.com/sgl-project/sglang"]
            ]
          },
          {
            "t": "TensorRT-LLM",
            "d": "NVIDIA's maximum-performance engine: compiled graphs, custom kernels, FP8/FP4, and multi-node serving.",
            "lv": 3,
            "time": "~5h",
            "tip": "TensorRT-LLM trades flexibility for speed: slow engine builds, NVIDIA-only, but the highest throughput once compiled. Bake it off before committing.",
            "learn": [
              "Engine building: compiling a model into an optimized plan",
              "Custom kernels for attention, GEMM, and MoE",
              "FP8 and FP4 quantization paths",
              "Prefill-decode disaggregation and multi-node support"
            ],
            "do": [
              "Build a TensorRT-LLM engine for a 7B model",
              "Benchmark it against vLLM on the same GPU",
              "Measure the build time and decide if the gain is worth it"
            ],
            "tools": ["TensorRT-LLM", "NVIDIA ModelOpt"],
            "res": [
              ["TensorRT-LLM", "https://github.com/NVIDIA/TensorRT-LLM"]
            ]
          },
          {
            "t": "Continuous Batching",
            "d": "The scheduling breakthrough: insert new requests into a running batch instead of waiting for it to finish.",
            "lv": 2,
            "time": "~3h",
            "tip": "Continuous batching is why modern engines are 10-20x faster than naive servers. If your server lacks it, that is the first upgrade.",
            "learn": [
              "Static vs continuous batching, visually",
              "Iteration-level scheduling: the batch is rebuilt every step",
              "How finished requests exit and new ones enter mid-generation",
              "Chunked prefill: splitting long prompts across steps"
            ],
            "do": [
              "Diagram continuous batching for three requests of different lengths",
              "Compare throughput with continuous batching on and off",
              "Observe tail latency improvement under mixed-length traffic"
            ],
            "tools": ["vLLM", "SGLang"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "PagedAttention & RadixAttention",
            "d": "Two ways to stop wasting KV cache memory: page it like an OS, or share it like a tree.",
            "lv": 3,
            "time": "~3h",
            "tip": "PagedAttention kills fragmentation; RadixAttention adds sharing. Together they explain why modern engines fit 3-5x more concurrent requests.",
            "learn": [
              "The fragmentation problem: reserving max-length memory per request",
              "PagedAttention: fixed-size blocks allocated on demand",
              "RadixAttention: tree-structured sharing of common prefixes",
              "Memory savings translated into concurrency"
            ],
            "do": [
              "Compute wasted KV memory under naive allocation vs paging",
              "Measure max concurrency with and without prefix caching",
              "Trace a shared system prompt through a radix tree"
            ],
            "tools": ["vLLM", "SGLang"],
            "res": [
              ["SGLang", "https://github.com/sgl-project/sglang"]
            ]
          },
          {
            "t": "Model Formats: safetensors & GGUF",
            "d": "How weights are stored and why the format decides which engine can serve them.",
            "lv": 2,
            "time": "~2h",
            "tip": "safetensors for servers, GGUF for local. Downloading the wrong format for your engine is a rite of passage; check before the 40GB download.",
            "learn": [
              "safetensors: safe, fast-loading format for production serving",
              "GGUF: quantized formats for llama.cpp and local inference",
              "ONNX: the portable graph format for non-LLM models",
              "Conversion paths and what gets lost in translation"
            ],
            "do": [
              "Convert a Hugging Face model to safetensors and to GGUF",
              "Load each in its matching engine and verify outputs match",
              "Compare load times and file sizes"
            ],
            "tools": ["safetensors", "llama.cpp"],
            "res": [
              ["safetensors", "https://github.com/huggingface/safetensors"]
            ]
          },
          {
            "t": "Engine Bake-off Lab",
            "d": "Benchmark vLLM, SGLang, and TensorRT-LLM on your workload and pick with data, not hype.",
            "lv": 3,
            "time": "~4h",
            "tip": "Fix the workload first: same prompts, same concurrency, same GPU. Most bake-offs are invalid because the traffic shapes differed.",
            "learn": [
              "Designing a fair benchmark: fixed prompts, concurrency sweep",
              "Metrics to capture: throughput, TTFT, p99 latency, cost per token",
              "Interpreting results: which engine wins at which concurrency",
              "Writing the decision memo"
            ],
            "do": [
              "Build a benchmark harness with a fixed prompt set",
              "Run all three engines across a concurrency sweep",
              "Write a one-page recommendation for your workload"
            ],
            "tools": ["vLLM", "SGLang", "TensorRT-LLM", "Locust"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "Quantization & Model Optimization",
        "d": "Shrink the model without shrinking quality: precisions, PTQ vs QAT, and the tooling that does it.",
        "lv": 3,
        "children": [
          {
            "t": "Quantization Basics: INT8, FP8, FP4",
            "d": "Fewer bits per weight means less memory and faster decode. Learn the precisions and their hardware homes.",
            "lv": 2,
            "time": "~3h",
            "tip": "Match precision to hardware: FP8 needs Hopper or newer, FP4 needs Blackwell. Quantizing to a format your GPU cannot accelerate buys nothing.",
            "learn": [
              "What quantization does: mapping FP16/FP32 weights to fewer bits",
              "INT8, FP8, FP4: range, precision, and use cases",
              "Weight-only vs weight-and-activation quantization",
              "Why decode speed follows bytes-per-parameter"
            ],
            "do": [
              "Quantize a 7B model to INT8 and compare size and speed",
              "Check which precisions your GPU accelerates",
              "Plot quality vs size across three quantization levels"
            ],
            "tools": ["bitsandbytes", "vLLM"],
            "res": [
              ["NVIDIA Model Optimizer", "https://github.com/NVIDIA/Model-Optimizer"]
            ]
          },
          {
            "t": "Post-Training Quantization (PTQ)",
            "d": "Quantize an already-trained model with calibration data: no retraining, results in hours.",
            "lv": 3,
            "time": "~4h",
            "tip": "Calibration data quality decides PTQ quality. Calibrate on data shaped like production, not on random web text.",
            "learn": [
              "How PTQ works: calibration, scale factors, and rounding",
              "GPTQ and AWQ: the leading weight-only methods",
              "Calibration sets: size, diversity, and domain match",
              "Where PTQ breaks: outliers and sensitive layers"
            ],
            "do": [
              "Run GPTQ quantization on a 7B model",
              "Compare perplexity before and after",
              "Try two different calibration sets and compare quality"
            ],
            "tools": ["AutoGPTQ", "AutoAWQ"],
            "res": [
              ["NVIDIA Model Optimizer", "https://github.com/NVIDIA/Model-Optimizer"]
            ]
          },
          {
            "t": "Quantization-Aware Training (QAT)",
            "d": "Train with quantization in the loop so the model learns to be robust to low precision.",
            "lv": 3,
            "time": "~4h",
            "tip": "QAT is for when PTQ quality is not enough, usually below 4 bits. It costs a training run, so prove PTQ fails first.",
            "learn": [
              "Fake quantization during training: simulating low precision",
              "Straight-through estimators and why they work",
              "When QAT beats PTQ: extreme bit-widths and sensitive tasks",
              "Cost: full training loop vs PTQ's calibration pass"
            ],
            "do": [
              "Compare PTQ vs QAT quality at 4-bit on a small model",
              "Identify which layers suffer most under PTQ",
              "Decide the bit-width cutoff where QAT becomes worth it"
            ],
            "tools": ["NVIDIA ModelOpt", "PyTorch"],
            "res": [
              ["NVIDIA Model Optimizer", "https://github.com/NVIDIA/Model-Optimizer"]
            ],
            "tag": "opt"
          },
          {
            "t": "GPTQ, AWQ & Friends",
            "d": "The practical quantization zoo: which method for which model, hardware, and engine.",
            "lv": 3,
            "time": "~3h",
            "tip": "AWQ tends to preserve quality slightly better, GPTQ is more widely supported. Check your engine's supported formats before quantizing.",
            "learn": [
              "GPTQ: layer-wise quantization with Hessian guidance",
              "AWQ: activation-aware scaling protecting salient weights",
              "SmoothQuant and LLM.int8(): handling activation outliers",
              "Format support matrix across vLLM, SGLang, TensorRT-LLM"
            ],
            "do": [
              "Quantize the same model with GPTQ and AWQ",
              "Benchmark quality and speed of each in vLLM",
              "Build the support matrix for your engine choice"
            ],
            "tools": ["AutoGPTQ", "AutoAWQ", "vLLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "NVIDIA ModelOpt",
            "d": "NVIDIA's official toolkit for FP8 and NVFP4: the path to production quantization on Hopper and Blackwell.",
            "lv": 3,
            "time": "~4h",
            "tip": "Most teams should consume ModelOpt's pre-quantized checkpoints, not run the toolkit. Run it yourself only for custom fine-tunes.",
            "learn": [
              "ModelOpt's techniques: quantization, pruning, distillation, sparsity",
              "FP8 and NVFP4 checkpoint production",
              "Export paths: vLLM, SGLang, TensorRT-LLM",
              "Calibration and evaluation inside the toolkit"
            ],
            "do": [
              "Download a ModelOpt FP8 checkpoint and serve it in vLLM",
              "Compare FP16 vs FP8 throughput and quality",
              "Quantize a small fine-tune with ModelOpt end to end"
            ],
            "tools": ["NVIDIA ModelOpt", "vLLM"],
            "res": [
              ["NVIDIA Model Optimizer", "https://github.com/NVIDIA/Model-Optimizer"]
            ]
          },
          {
            "t": "Measuring Quality Impact",
            "d": "Quantization without measurement is hope. Benchmarks, eval sets, and the sign-off process.",
            "lv": 2,
            "time": "~3h",
            "tip": "Always evaluate on YOUR eval set, not just public benchmarks. Quantization degrades domain-specific and long-context tasks first.",
            "learn": [
              "Perplexity as a quick smoke test",
              "Task benchmarks: MMLU-style suites for capability checks",
              "Your own eval set: the only quality gate that matters",
              "Acceptance criteria: how much degradation is shippable"
            ],
            "do": [
              "Build a 50-question eval set for your domain",
              "Score FP16, FP8, and INT4 models on it",
              "Write the sign-off criteria for a quantized release"
            ],
            "tools": ["lm-evaluation-harness"],
            "res": [
              ["lm-evaluation-harness", "https://github.com/EleutherAI/lm-evaluation-harness"]
            ]
          }
        ]
      },
      {
        "t": "Advanced Throughput Techniques",
        "d": "Beyond the engine defaults: speculative decoding, attention kernels, caching, and parallelism.",
        "lv": 3,
        "children": [
          {
            "t": "Speculative Decoding",
            "d": "Draft tokens with a small model, verify with the big one: fewer sequential steps, same output.",
            "lv": 3,
            "time": "~4h",
            "tip": "Speculative decoding stacks multiplicatively with quantization: 2x from quantization times 2.5x from speculation is roughly 5x total.",
            "learn": [
              "The draft-verify loop: cheap drafts, expensive verification",
              "Acceptance rate: the metric that decides if it helps",
              "Why it preserves output quality exactly",
              "When it fails: hard-to-predict text and tiny batch sizes"
            ],
            "do": [
              "Enable speculative decoding in vLLM with a draft model",
              "Measure speedup and acceptance rate",
              "Find the workload where it stops helping"
            ],
            "tools": ["vLLM", "SGLang"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "EAGLE & Draft Models",
            "d": "Learned draft heads that predict multiple tokens at once: the state of the art in speculation.",
            "lv": 3,
            "time": "~3h",
            "tip": "EAGLE-style drafting beats n-gram drafting on acceptance rate but needs a trained draft head. Start with n-gram, graduate to EAGLE.",
            "learn": [
              "EAGLE: a lightweight draft head on the target model's features",
              "N-gram and prompt-lookup drafting: zero-training baselines",
              "Tree-structured drafting: verifying multiple candidates at once",
              "Training or downloading draft heads"
            ],
            "do": [
              "Try n-gram speculative decoding and measure acceptance",
              "Set up an EAGLE draft head for a supported model",
              "Compare the two on your workload"
            ],
            "tools": ["SGLang", "vLLM"],
            "res": [
              ["SGLang", "https://github.com/sgl-project/sglang"]
            ],
            "tag": "opt"
          },
          {
            "t": "FlashAttention",
            "d": "The IO-aware attention kernel that made long contexts affordable: tiling, recomputation, and SRAM.",
            "lv": 3,
            "time": "~3h",
            "tip": "You rarely implement FlashAttention yourself; you enable it. The lesson is understanding why attention was the bottleneck and what the kernel changed.",
            "learn": [
              "Why naive attention is memory-bound: the N-squared materialization",
              "Tiling and online softmax: computing attention in blocks",
              "FlashAttention-2 and 3: what each version improved",
              "Where it matters most: long-context prefill"
            ],
            "do": [
              "Benchmark attention with and without FlashAttention at 8k context",
              "Profile memory usage during prefill",
              "Verify your engine enables it by default"
            ],
            "tools": ["PyTorch", "flash-attn"],
            "res": [
              ["flash-attn", "https://github.com/Dao-AILab/flash-attention"]
            ]
          },
          {
            "t": "Caching & Prefix Reuse",
            "d": "Never recompute what you already computed: prompt caching, prefix reuse, and semantic caches.",
            "lv": 2,
            "time": "~3h",
            "tip": "Prompt caching on shared system prompts is nearly free TTFT reduction. If every request starts with the same 2k tokens, cache them.",
            "learn": [
              "Prefix caching: reusing KV cache for shared prompt prefixes",
              "Provider prompt caches and their pricing",
              "Semantic caching: answering from similar past queries",
              "Cache invalidation: when the world changes under the cache"
            ],
            "do": [
              "Enable prefix caching and measure TTFT on repeated system prompts",
              "Build a semantic cache for FAQ-style queries",
              "Define invalidation rules for your cache"
            ],
            "tools": ["SGLang", "Redis", "GPTCache"],
            "res": [
              ["SGLang", "https://github.com/sgl-project/sglang"]
            ]
          },
          {
            "t": "Prefill-Decode Disaggregation",
            "d": "Split the two phases onto different GPUs: prefill machines optimized for compute, decode machines for memory.",
            "lv": 3,
            "time": "~4h",
            "tip": "Disaggregation shines under mixed workloads: long prompts plus long generations. Uniform workloads gain less.",
            "learn": [
              "Why co-locating phases wastes resources",
              "KV cache transfer between prefill and decode workers",
              "NVIDIA Dynamo and the disaggregated serving pattern",
              "Scheduling and load balancing across the two pools"
            ],
            "do": [
              "Diagram a disaggregated deployment for a chat workload",
              "Estimate the KV transfer cost between workers",
              "Decide the prefill/decode GPU ratio for your traffic"
            ],
            "tools": ["NVIDIA Dynamo", "TensorRT-LLM", "SGLang"],
            "res": [
              ["NVIDIA Dynamo", "https://github.com/NVIDIA/dynamo"]
            ]
          },
          {
            "t": "Tensor & Pipeline Parallelism",
            "d": "Split one model across GPUs when it does not fit on one: how the splits work and what they cost.",
            "lv": 3,
            "time": "~4h",
            "tip": "Tensor parallelism needs fast interconnects; pipeline parallelism tolerates slower ones but adds bubble overhead. Pick by your hardware.",
            "learn": [
              "Tensor parallelism: splitting layers across GPUs, synchronized every step",
              "Pipeline parallelism: splitting layers into stages, micro-batching",
              "Expert parallelism for MoE models",
              "Communication overhead and the interconnect requirement"
            ],
            "do": [
              "Serve a 70B model with tensor parallelism across 2 GPUs",
              "Compare latency vs a smaller model on 1 GPU",
              "Measure the communication overhead with profiling"
            ],
            "tools": ["vLLM", "TensorRT-LLM"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          }
        ]
      },
      {
        "t": "Production: Scale, Reliability, Cost",
        "d": "Run inference as a real service: autoscaling, routing, deployments, and the cost model.",
        "lv": 3,
        "children": [
          {
            "t": "Autoscaling Inference",
            "d": "Scale GPU replicas with traffic: metrics, policies, and the cold-start problem that makes it hard.",
            "lv": 3,
            "time": "~4h",
            "tip": "Scale on queue depth or tokens-per-second, not CPU. GPU inference saturates long before CPU metrics move.",
            "learn": [
              "Metrics that matter: queue depth, TTFT degradation, tokens/sec",
              "HPA and KEDA with custom metrics",
              "Scale-to-zero: saving money vs cold-start latency",
              "Predictive scaling for known traffic patterns"
            ],
            "do": [
              "Set up KEDA autoscaling on queue length for a vLLM deployment",
              "Load-test a traffic spike and watch scaling behavior",
              "Tune cooldowns to avoid flapping"
            ],
            "tools": ["Kubernetes", "KEDA", "vLLM"],
            "res": [
              ["Kubernetes docs", "https://kubernetes.io/docs/home/"]
            ]
          },
          {
            "t": "Cold Starts",
            "d": "Model loading takes minutes, not milliseconds. Keep replicas warm or make loading fast.",
            "lv": 3,
            "time": "~3h",
            "tip": "Measure your cold start end to end: image pull, model download, weight load, engine warmup. Each stage has a different fix.",
            "learn": [
              "Cold start anatomy: pull, download, load, warmup",
              "Mitigations: warm pools, model caching, faster formats",
              "safetensors and mmap loading for faster startup",
              "When cold starts are acceptable: async and offline workloads"
            ],
            "do": [
              "Time each stage of a cold start for your deployment",
              "Pre-warm with a minimum replica count and measure cost",
              "Optimize the slowest stage and re-measure"
            ],
            "tools": ["Kubernetes", "safetensors"],
            "res": [
              ["safetensors", "https://github.com/huggingface/safetensors"]
            ]
          },
          {
            "t": "Routing & Load Balancing",
            "d": "Spread requests across replicas and regions without breaking latency or sessions.",
            "lv": 2,
            "time": "~3h",
            "tip": "Least-connections beats round-robin for inference: requests vary wildly in cost, so balance by load, not by count.",
            "learn": [
              "Load balancing strategies for variable-cost requests",
              "Sticky sessions for multi-turn chat and KV reuse",
              "Health checking that actually detects a degraded GPU",
              "Geo-aware routing for global latency"
            ],
            "do": [
              "Configure least-connections routing for an inference fleet",
              "Add session affinity and verify KV reuse improves",
              "Simulate a dead GPU and watch traffic drain"
            ],
            "tools": ["Envoy", "NGINX", "Kubernetes"],
            "res": [
              ["Envoy docs", "https://www.envoyproxy.io/docs"]
            ]
          },
          {
            "t": "LoRA-Aware Routing",
            "d": "Serve many fine-tunes on one base model: route by adapter and share the base weights.",
            "lv": 3,
            "time": "~3h",
            "tip": "Multi-LoRA serving turns 20 fine-tunes from 20 deployments into 1. The router just needs to know which adapter each request wants.",
            "learn": [
              "LoRA adapters: small fine-tunes on a shared base",
              "Multi-LoRA serving in vLLM and SGLang",
              "Routing by tenant, task, or user to the right adapter",
              "Memory math: base weights shared, adapters swapped"
            ],
            "do": [
              "Train two LoRA adapters on different tasks",
              "Serve both from one vLLM instance",
              "Route requests by header and verify correct adapter use"
            ],
            "tools": ["vLLM", "SGLang", "PEFT"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ],
            "tag": "opt"
          },
          {
            "t": "Zero-Downtime Deployment",
            "d": "Roll out new models and engines without dropping a request: rolling updates and blue-green.",
            "lv": 3,
            "time": "~3h",
            "tip": "Readiness probes must check the engine is actually serving, not just that the container started. Model loading outlives container startup by minutes.",
            "learn": [
              "Rolling updates with proper readiness probes",
              "Blue-green deployments for model swaps",
              "Draining: letting in-flight requests finish",
              "Rollback speed as a deployment metric"
            ],
            "do": [
              "Write a readiness probe that hits the engine's health endpoint",
              "Perform a rolling update to a new model version",
              "Time a rollback and document the procedure"
            ],
            "tools": ["Kubernetes"],
            "res": [
              ["Kubernetes docs", "https://kubernetes.io/docs/home/"]
            ]
          },
          {
            "t": "Cost Modeling & Estimation",
            "d": "Turn tokens into dollars: per-request cost, fleet cost, and the tradeoffs that move them.",
            "lv": 3,
            "time": "~3h",
            "tip": "Cost per million tokens is the unit everything reduces to. Compute it for every optimization and the business case writes itself.",
            "learn": [
              "Cost per token: GPU-hour cost divided by tokens served",
              "What moves it: quantization, batching, caching, smaller models",
              "Fleet cost modeling: fixed vs variable costs",
              "Chargeback: attributing inference spend to teams and features"
            ],
            "do": [
              "Compute cost per 1M tokens for your deployment",
              "Model the savings from FP8 quantization",
              "Build a chargeback report by API key"
            ],
            "tools": ["Grafana", "OpenCost"],
            "res": [
              ["OpenCost", "https://www.opencost.io"]
            ]
          },
          {
            "t": "Inference Observability",
            "d": "Trace every request: latency breakdowns, token counts, errors, and GPU health in one view.",
            "lv": 3,
            "time": "~3h",
            "tip": "Log tokens in and out per request. Without token counts you cannot compute cost, and cost is half of inference observability.",
            "learn": [
              "Request tracing: prefill time, decode time, queue time",
              "Token accounting per request, user, and model",
              "GPU metrics: utilization, memory, temperature, errors",
              "Alerting on SLO burn for latency"
            ],
            "do": [
              "Add OpenTelemetry tracing to an inference server",
              "Build a dashboard: latency breakdown, tokens, GPU health",
              "Set an SLO alert on p99 TTFT"
            ],
            "tools": ["OpenTelemetry", "Prometheus", "Grafana"],
            "res": [
              ["OpenTelemetry docs", "https://opentelemetry.io"]
            ]
          }
        ]
      },
      {
        "t": "Beyond LLMs & Capstone",
        "d": "Embeddings, vision, speech, and diffusion models have their own serving patterns. Then prove it all.",
        "lv": 3,
        "children": [
          {
            "t": "Embedding Model Inference",
            "d": "Serve embedding models for search and RAG: high-throughput, batch-friendly, and latency-sensitive.",
            "lv": 3,
            "time": "~3h",
            "tip": "Embeddings are the easiest inference win: small models, huge batches, and every millisecond saved multiplies across your RAG pipeline.",
            "learn": [
              "Embedding architectures: BERT-style vs LLM-based",
              "Batching strategies for maximum throughput",
              "Matryoshka embeddings: truncate dimensions without re-encoding",
              "Serving with TEI or vLLM"
            ],
            "do": [
              "Serve an embedding model with Text Embeddings Inference",
              "Benchmark throughput across batch sizes",
              "Try dimension truncation and measure quality impact"
            ],
            "tools": ["Text Embeddings Inference", "vLLM"],
            "res": [
              ["Text Embeddings Inference", "https://github.com/huggingface/text-embeddings-inference"]
            ]
          },
          {
            "t": "Vision-Language Model Inference",
            "d": "Serve VLMs: image preprocessing plus LLM decoding, with video as the hard mode.",
            "lv": 3,
            "time": "~4h",
            "tip": "VLM latency is dominated by image token count. Downscaling and tiling strategies move the needle more than engine tuning.",
            "learn": [
              "VLM architecture: vision encoder plus language decoder",
              "Image preprocessing: resizing, tiling, and token budgets",
              "Video: frame sampling and the context explosion",
              "Engines with VLM support"
            ],
            "do": [
              "Serve a VLM and measure TTFT vs image resolution",
              "Compare tiling strategies on detail-heavy images",
              "Benchmark a short video clip end to end"
            ],
            "tools": ["vLLM", "SGLang"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"]
            ]
          },
          {
            "t": "Speech: ASR & TTS Serving",
            "d": "Real-time speech pipelines: voice activity detection, streaming ASR, and low-latency TTS.",
            "lv": 3,
            "time": "~4h",
            "tip": "Streaming is the whole game in speech: chunked ASR and first-audio-byte TTS decide whether the voice agent feels alive.",
            "learn": [
              "VAD: detecting speech before transcribing it",
              "Streaming ASR with Whisper-style models",
              "TTS latency: time to first audio byte",
              "The full loop: speech-to-speech orchestration"
            ],
            "do": [
              "Build a streaming ASR endpoint",
              "Measure time-to-first-audio for a TTS model",
              "Wire VAD -> ASR -> LLM -> TTS and measure round-trip latency"
            ],
            "tools": ["faster-whisper", "Piper TTS"],
            "res": [
              ["faster-whisper", "https://github.com/SYSTRAN/faster-whisper"]
            ]
          },
          {
            "t": "Image & Video Generation Inference",
            "d": "Serve diffusion models: step counts, schedulers, and the latency-quality dial.",
            "lv": 3,
            "time": "~4h",
            "tip": "Few-step distilled models changed the economics of image generation. A 4-step model at good quality beats a 50-step model nobody waits for.",
            "learn": [
              "Diffusion sampling: steps, schedulers, and guidance",
              "Distilled few-step models: SDXL-Turbo style speedups",
              "Batching image generation on GPUs",
              "Video generation: the memory and compute cliff"
            ],
            "do": [
              "Serve an image model and sweep step counts vs quality",
              "Try a distilled few-step model and compare",
              "Benchmark batch image generation throughput"
            ],
            "tools": ["Diffusers", "TensorRT"],
            "res": [
              ["Hugging Face Diffusers", "https://huggingface.co/docs/diffusers/index"]
            ],
            "tag": "opt"
          },
          {
            "t": "Multi-Cloud & Geo-Aware Serving",
            "d": "Run inference across clouds and regions: capacity, failover, and routing users to the nearest GPU.",
            "lv": 3,
            "time": "~3h",
            "tip": "Multi-cloud for inference is about GPU availability, not price shopping. One cloud's outage should not take down your API.",
            "learn": [
              "Why multi-cloud: GPU scarcity and regional failover",
              "Geo-aware routing: latency-based DNS and anycast",
              "Model distribution: syncing weights across regions",
              "Consistency: same model version everywhere"
            ],
            "do": [
              "Design a two-region inference deployment",
              "Plan model artifact sync between regions",
              "Define the failover procedure and test it"
            ],
            "tools": ["Kubernetes", "Envoy"],
            "res": [
              ["Envoy docs", "https://www.envoyproxy.io/docs"]
            ]
          },
          {
            "t": "Capstone: Production Inference Service",
            "d": "Ship a real inference service: quantized model, tuned engine, autoscaling, observability, and a cost report.",
            "lv": 3,
            "time": "~2w",
            "tip": "The cost-per-million-tokens number is your headline metric. Every optimization in the capstone should move it, and the report should prove it.",
            "learn": [
              "Putting it together: engine choice, quantization, and tuning",
              "Load testing to validate autoscaling and SLOs",
              "The cost report: per-token economics before and after optimization",
              "Operating it for a week: incidents, alerts, and fixes"
            ],
            "do": [
              "Deploy a quantized model behind vLLM or SGLang on k8s",
              "Load-test to your SLO and tune until it holds",
              "Write the final report: architecture, benchmarks, and cost per 1M tokens"
            ],
            "tools": ["vLLM", "Kubernetes", "Prometheus", "Grafana", "Locust"],
            "res": [
              ["vLLM docs", "https://github.com/vllm-project/vllm"],
              ["Kubernetes docs", "https://kubernetes.io/docs/home/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
