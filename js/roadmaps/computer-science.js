/* Atlas roadmap data: Computer Science (computer-science)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "computer-science",
  "title": "Computer Science",
  "icon": "💻",
  "color": "#4ade80",
  "tagline": "Bits to systems: the ideas every practitioner should own.",
  "desc": "A practitioner-oriented survey of CS foundations: how computers work, discrete math, complexity, data structures, algorithms, operating systems, networks, databases, and security.",
  "kind": "skill",
  "root": {
    "t": "Computer Science Foundations",
    "d": "The ideas every practitioner should know, from bits to systems.",
    "res": [
      ["roadmap.sh Computer Science", "https://roadmap.sh/computer-science"],
      ["CS50 (Harvard)", "https://cs50.harvard.edu"]
    ],
    "children": [
      {
        "t": "How Computers Really Work",
        "d": "Bits, bytes, and what the machine actually does with your code.",
        "lv": 1,
        "res": [
          ["CS50", "https://cs50.harvard.edu"],
          ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
        ],
        "children": [
          {
            "t": "Binary & Number Systems",
            "d": "Everything digital is counting in base 2. Learn to read it fluently.",
            "lv": 1,
            "time": "~3h",
            "tip": "Beginners memorize conversions; practitioners learn to eyeball powers of two (1, 2, 4, 8, 16, 32, 64, 128...) because sizes, masks, and limits always land on them.",
            "learn": [
              "Binary, octal, and hexadecimal and converting between them",
              "Two's complement: how signed integers are really stored",
              "Why 0.1 + 0.2 != 0.3 is a representation issue, not a bug",
              "Bit as the unit; nibble, byte, word; KB vs KiB"
            ],
            "do": [
              "Convert 255, 1024, and 3735928559 between decimal, hex, and binary by hand",
              "In Python, verify `0.1 + 0.2 == 0.3` is False and print `format(0.1, '.55f')`",
              "Compute the two's complement of -42 in 8 bits on paper"
            ],
            "tools": ["python3", "calculator"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["CS50", "https://cs50.harvard.edu"]
            ]
          },
          {
            "t": "How the CPU Executes Programs",
            "d": "Fetch, decode, execute: the loop your code lives inside.",
            "lv": 1,
            "time": "~4h",
            "tip": "A program is just data sitting in memory until the CPU's program counter points at it. There is no magic boundary between code and data, which is exactly why buffer overflows work.",
            "learn": [
              "The fetch-decode-execute cycle and the program counter",
              "Machine code vs assembly vs high-level languages",
              "What a compiler and an interpreter each do with your source",
              "The von Neumann model: stored program concept"
            ],
            "do": [
              "Write a 10-line C program, compile with `gcc -S` and read the generated assembly",
              "Trace the fetch-decode-execute cycle for 3 made-up instructions on paper",
              "Compare `python3 script.py` (interpreted) vs compiled C timing with `time`"
            ],
            "tools": ["gcc", "python3", "time"],
            "res": [
              ["CS50", "https://cs50.harvard.edu"],
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
            ]
          },
          {
            "t": "Registers, RAM & the Memory Hierarchy",
            "d": "Why memory speed matters more than CPU speed for most programs.",
            "lv": 1,
            "time": "~4h",
            "tip": "Registers are ~1 cycle away, RAM is ~100 cycles away. Every cache miss is the CPU twiddling its thumbs. Data layout, not cleverness, decides real-world speed.",
            "learn": [
              "Registers: the CPU's tiny, instant scratchpad",
              "RAM vs storage: volatility, speed, and cost trade-offs",
              "The memory hierarchy pyramid: registers, caches, RAM, SSD, disk",
              "Why sequential access beats random access (prefetching)"
            ],
            "do": [
              "Benchmark summing a 100M-element array row-major vs column-major and compare times",
              "Use `lscpu` and `free -h` to inventory your own machine's hierarchy",
              "Draw the hierarchy with rough latencies (1ns, 10ns, 100ns, 10us, 10ms)"
            ],
            "tools": ["lscpu", "free", "python3"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["CS50", "https://cs50.harvard.edu"]
            ]
          },
          {
            "t": "CPU Caches & Locality",
            "d": "Temporal and spatial locality: the two principles behind every fast program.",
            "lv": 2,
            "time": "~4h",
            "tip": "Cache-friendly code reuses recent data (temporal locality) and nearby data (spatial locality). A linked list hopping across RAM can be 10x slower than an array doing the same work.",
            "learn": [
              "L1/L2/L3 caches and cache lines (typically 64 bytes)",
              "Temporal locality (reuse) and spatial locality (neighbors)",
              "Cache hits, misses, and why misses dominate performance",
              "How false sharing hurts multithreaded programs"
            ],
            "do": [
              "Time iterating a large array with stride 1 vs stride 16; plot the slowdown",
              "Read your CPU's cache sizes with `lscpu` and match them to the benchmark cliffs",
              "Rewrite a loop to be cache-friendly and measure the speedup"
            ],
            "tools": ["lscpu", "python3", "perf"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Floating-Point Math",
            "d": "Why decimals are approximations and when that bites you.",
            "lv": 2,
            "time": "~3h",
            "tip": "Never use float for money. The classic failure: accumulating 0.01 a thousand times does not equal 10.00. Use integers (cents) or decimal types.",
            "learn": [
              "IEEE 754: sign, exponent, mantissa in 32 and 64 bits",
              "Why some decimals (like 0.1) cannot be represented exactly in binary",
              "Rounding modes, NaN, infinity, and epsilon comparisons",
              "When to reach for Decimal / fixed-point instead of float"
            ],
            "do": [
              "Sum 0.1 ten times in Python and compare to 1.0; explain the result",
              "Simulate a money ledger with float vs integer cents; find where float drifts",
              "Write an `almost_equal(a, b, eps)` helper and use it in a comparison"
            ],
            "tools": ["python3", "Decimal"],
            "res": [
              ["IEEE 754 (Wikipedia)", "https://en.wikipedia.org/wiki/IEEE_754"],
              ["Python docs", "https://docs.python.org/3/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Endianness",
            "d": "Byte order: the invisible convention behind every file format and protocol.",
            "lv": 2,
            "time": "~2h",
            "tip": "Network protocols are big-endian; x86 CPUs are little-endian. Every time you parse binary data you must know which end you're reading from, or your numbers come out backwards.",
            "learn": [
              "Big-endian vs little-endian byte order with a concrete 4-byte example",
              "Why network byte order is big-endian (and what htons/ntohl do)",
              "How endianness shows up in hex dumps and file headers",
              "Bi-endian and middle-endian oddities (rare, but they exist)"
            ],
            "do": [
              "Use Python's `struct.pack('>I', 0x01020304)` vs `'<I'` and compare the bytes",
              "Open a PNG in a hex viewer and check its big-endian width/height fields",
              "Write a parser that reads a 16-bit big-endian integer from raw bytes"
            ],
            "tools": ["python3", "xxd", "hexdump"],
            "res": [
              ["Endianness (Wikipedia)", "https://en.wikipedia.org/wiki/Endianness"],
              ["Python docs", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Character Encodings (ASCII & Unicode)",
            "d": "Text is numbers with an agreement attached. Learn the agreements.",
            "lv": 1,
            "time": "~3h",
            "tip": "There is no such thing as plain text. Every string has an encoding, and mojibake (garbled text) is what happens when reader and writer disagree about it.",
            "learn": [
              "ASCII: 7 bits, 128 characters, and why it was not enough",
              "Unicode code points vs UTF-8/UTF-16 encodings",
              "How UTF-8's variable-length design stays ASCII-compatible",
              "BOM, normalization, and common encoding failure modes"
            ],
            "do": [
              "Encode 'café 🍰' to UTF-8 bytes and count bytes vs characters",
              "Deliberately decode UTF-8 bytes as Latin-1 to produce mojibake, then fix it",
              "Check a file's encoding with `file` and convert it with `iconv`"
            ],
            "tools": ["python3", "iconv", "file"],
            "res": [
              ["Unicode (Wikipedia)", "https://en.wikipedia.org/wiki/Unicode"],
              ["UTF-8 (Wikipedia)", "https://en.wikipedia.org/wiki/UTF-8"]
            ]
          },
          {
            "t": "Bitwise Operators",
            "d": "AND, OR, XOR, shifts: the fastest operations your CPU has.",
            "lv": 1,
            "time": "~3h",
            "tip": "XOR is the Swiss army knife: `x ^ x = 0`, `x ^ 0 = x`. That is why it shows up in swap tricks, checksums, and simple ciphers.",
            "learn": [
              "AND, OR, XOR, NOT and what each does to a bit pattern",
              "Left/right shifts as fast multiply/divide by powers of two",
              "Bit masks: setting, clearing, toggling, and testing flags",
              "Two's complement tricks: `x & -x` isolates the lowest set bit"
            ],
            "do": [
              "Implement a flags system with a single integer (READ=1, WRITE=2, EXEC=4)",
              "Find the single non-duplicated number in a list using XOR only",
              "Count set bits in an integer three different ways and compare"
            ],
            "tools": ["python3", "gcc"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["Bit manipulation (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          }
        ]
      },
      {
        "t": "Discrete Math for Programmers",
        "d": "The math that shows up in real code: counting, chance, and proof.",
        "lv": 1,
        "res": [
          ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
          ["MIT OpenCourseWare", "https://ocw.mit.edu"]
        ],
        "children": [
          {
            "t": "Sets, Logic & Proof Basics",
            "d": "AND/OR/NOT are logic gates and if-statements wearing the same clothes.",
            "lv": 1,
            "time": "~5h",
            "tip": "De Morgan's laws (`not (A and B)` = `not A or not B`) are the single most useful logic fact in programming. They simplify every negated condition you'll ever write.",
            "learn": [
              "Propositions, truth tables, and the core connectives",
              "De Morgan's laws and simplifying boolean expressions",
              "Sets, subsets, unions, intersections, and Venn intuition",
              "Direct proof, contrapositive, and proof by contradiction"
            ],
            "do": [
              "Simplify three gnarly real-world `if` conditions using De Morgan's laws",
              "Prove by contradiction that there are infinitely many primes",
              "Translate a nested boolean expression into a truth table"
            ],
            "tools": ["python3"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Combinatorics & Counting",
            "d": "How many possibilities? The question behind passwords, shuffles, and search spaces.",
            "lv": 1,
            "time": "~5h",
            "tip": "When counting gets hard, count the complement instead. 'At least one' problems are almost always easier as 1 minus 'none'.",
            "learn": [
              "The product and sum rules; permutations vs combinations",
              "Binomial coefficients and Pascal's triangle",
              "Pigeonhole principle and why it guarantees hash collisions",
              "Inclusion-exclusion for overlapping cases"
            ],
            "do": [
              "Compute how many 8-character passwords exist for a given policy",
              "Use the pigeonhole principle to prove any 367 people share a birthday",
              "Calculate combinations with `math.comb` and verify against brute force"
            ],
            "tools": ["python3", "math.comb"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Probability Essentials",
            "d": "Randomness is a tool: hashing, load balancing, and testing all lean on it.",
            "lv": 2,
            "time": "~5h",
            "tip": "Expected value is linear even when events are not independent: E[X+Y] = E[X] + E[Y] always. This one fact powers most randomized-algorithm analysis.",
            "learn": [
              "Sample spaces, events, and conditional probability",
              "Bayes' theorem and base-rate intuition",
              "Expected value and linearity of expectation",
              "Birthday paradox: why collisions arrive far sooner than intuition says"
            ],
            "do": [
              "Simulate the birthday paradox with 23 people, 10k trials, in Python",
              "Compute the false-positive rate of a Bloom filter formula for given sizes",
              "Apply Bayes' theorem to a spam-filter style word-probability problem"
            ],
            "tools": ["python3", "random"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Recursion & Mathematical Induction",
            "d": "Induction is recursion's twin: prove the base, prove the step, done.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every induction proof has the same skeleton: base case, inductive hypothesis, inductive step. If your recursive function mirrors that skeleton, its correctness proof writes itself.",
            "learn": [
              "Weak vs strong induction and when each applies",
              "Proving loop/recursion correctness with invariants",
              "Recurrence relations: T(n) = 2T(n/2) + n and friends",
              "Structural induction on trees and lists"
            ],
            "do": [
              "Prove by induction that the sum 1..n equals n(n+1)/2",
              "Write a recurrence for merge sort and solve it by unrolling",
              "Prove a recursive binary search correct using a loop invariant"
            ],
            "tools": ["python3"],
            "res": [
              ["MIT OpenCourseWare", "https://ocw.mit.edu"],
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
            ]
          }
        ]
      },
      {
        "t": "Complexity & Asymptotic Analysis",
        "d": "Measure an algorithm's appetite before you let it near production data.",
        "lv": 1,
        "res": [
          ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
          ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
        ],
        "children": [
          {
            "t": "Time vs Space Complexity",
            "d": "Two currencies every algorithm spends: clock ticks and memory.",
            "lv": 1,
            "time": "~3h",
            "tip": "Beginners analyze time and forget space. A recursive DFS that is O(n) time can quietly be O(n) stack space too, and that is what crashes on deep inputs.",
            "learn": [
              "Counting operations vs measuring wall-clock time",
              "Auxiliary space vs total space (input usually excluded)",
              "The time-space tradeoff: memoization as the classic example",
              "Why constants are dropped but still matter in practice"
            ],
            "do": [
              "Analyze time and space of iterative vs recursive factorial",
              "Measure a memoized vs naive Fibonacci for n=35 with `time`",
              "Find the hidden O(n) space in a recursive tree traversal"
            ],
            "tools": ["python3", "time"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
            ]
          },
          {
            "t": "Big-O Notation",
            "d": "The vocabulary of performance: say how code scales in five characters.",
            "lv": 1,
            "time": "~4h",
            "tip": "Big-O describes growth as n approaches infinity, not speed on your laptop. An O(n log n) sort can lose to O(n^2) insertion sort on tiny arrays because constants dominate small n.",
            "learn": [
              "Formal meaning: upper bound on growth, constants dropped",
              "Analyzing loops, nested loops, and early exits",
              "Best, average, and worst case (quicksort's split personality)",
              "Amortized analysis: why appending to a dynamic array is O(1)"
            ],
            "do": [
              "Derive Big-O for 5 short functions, then verify by timing at doubling n",
              "Plot n vs n log n vs n^2 to feel the divergence",
              "Explain why hash map lookup is O(1) average but O(n) worst case"
            ],
            "tools": ["python3", "matplotlib"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["Big O notation (Wikipedia)", "https://en.wikipedia.org/wiki/Big_O_notation"]
            ]
          },
          {
            "t": "Big-Omega & Big-Theta",
            "d": "Upper bounds are half the story. Learn to pin growth from both sides.",
            "lv": 2,
            "time": "~3h",
            "tip": "Saying an algorithm is O(n^2) only promises it is no worse than quadratic. Theta(n^2) promises it is exactly quadratic in growth. Precision matters when comparing two candidates.",
            "learn": [
              "Omega: lower bounds (the problem needs at least this much work)",
              "Theta: tight bounds (upper and lower meet)",
              "Why sorting is Theta(n log n) in the comparison model",
              "Little-o and little-omega as strict versions"
            ],
            "do": [
              "Argue a Theta bound for binary search from both directions",
              "Show why linear search is Omega(1), O(n), but not Theta of either",
              "Prove comparison sorting needs Omega(n log n) with a decision-tree sketch"
            ],
            "tools": ["python3"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Common Runtimes, Ranked",
            "d": "From constant to factorial: a ladder you should be able to climb blindfolded.",
            "lv": 1,
            "time": "~2h",
            "tip": "Memorize the ladder: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!). The jump from polynomial to exponential is a cliff, not a slope.",
            "learn": [
              "What each rung means with a canonical example algorithm",
              "Logarithmic: halving the problem (binary search)",
              "Quasilinear n log n: the price of sorting",
              "Why exponential and factorial mean 'n stays tiny forever'"
            ],
            "do": [
              "Match 8 algorithms to their rungs from memory, then check",
              "Compute the largest n solvable in 1 second at each rung (10^8 ops/sec)",
              "Time 2^n subset generation for n=10..25 and watch the wall hit"
            ],
            "tools": ["python3", "bigocheatsheet.com"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "P, NP & the Hardest Problems",
            "d": "The most important unsolved question in computer science, in plain words.",
            "lv": 2,
            "time": "~4h",
            "tip": "NP does not mean 'not polynomial'. It means a proposed solution can be checked quickly. That asymmetry (hard to find, easy to verify) is the whole idea.",
            "learn": [
              "P: problems solvable fast; NP: solutions verifiable fast",
              "NP-hard vs NP-complete: the distinction that matters",
              "Reductions: proving hardness by transforming one problem into another",
              "Why P vs NP has a million-dollar prize on it"
            ],
            "do": [
              "Verify a Sudoku solution in polynomial time; argue finding one is hard",
              "Sketch how 3-SAT reduces to another NP problem conceptually",
              "Classify 6 familiar problems as P, NP, or NP-complete"
            ],
            "tools": [],
            "res": [
              ["P versus NP (Wikipedia)", "https://en.wikipedia.org/wiki/P_versus_NP_problem"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "NP-Complete Problems in Practice",
            "d": "TSP, knapsack, and friends: recognize them so you stop chasing perfect solutions.",
            "lv": 3,
            "time": "~4h",
            "tip": "The senior move on NP-complete problems is not a smarter algorithm, it is a reframed problem: approximations, heuristics, and constraints that make the instance easy.",
            "learn": [
              "Travelling salesman, knapsack, and longest path as archetypes",
              "Approximation algorithms and their guarantees (e.g. 2-approx TSP)",
              "Heuristics that work in practice: greedy, local search, simulated annealing",
              "Parameterized and pseudo-polynomial escapes (knapsack DP)"
            ],
            "do": [
              "Implement brute-force TSP for n=10, then a greedy + 2-opt heuristic for n=100",
              "Solve 0/1 knapsack with DP and note the pseudo-polynomial catch",
              "Time how fast brute force dies as n grows from 8 to 14"
            ],
            "tools": ["python3"],
            "res": [
              ["NP-completeness (Wikipedia)", "https://en.wikipedia.org/wiki/NP-completeness"],
              ["CP-Algorithms", "https://cp-algorithms.com"]
            ]
          }
        ]
      },
      {
        "t": "Data Structures",
        "d": "Pick the right container and the algorithm writes itself.",
        "lv": 2,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"]
        ],
        "children": [
          {
            "t": "Arrays",
            "d": "Contiguous memory, instant indexing: the structure everything else is built from.",
            "lv": 1,
            "time": "~3h",
            "tip": "Arrays are O(1) to read but O(n) to insert in the middle. Most 'array is slow' complaints are really 'I used an array like a linked list' complaints.",
            "learn": [
              "Contiguous layout and why indexing is O(1) pointer math",
              "Static vs dynamic arrays and amortized doubling",
              "Cache locality: why arrays beat pointer structures in practice",
              "Multi-dimensional arrays as nested or flattened layouts"
            ],
            "do": [
              "Implement a dynamic array (append, get, resize) from scratch",
              "Benchmark insert-at-front on a list vs a deque",
              "Solve two-sum with a single pass to feel index math"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"]
            ]
          },
          {
            "t": "Linked Lists",
            "d": "Nodes and pointers: O(1) surgery anywhere you already stand.",
            "lv": 1,
            "time": "~4h",
            "tip": "Draw the boxes and arrows before you touch code. Every linked-list bug is a pointer you forgot to rewire, and the diagram shows it instantly.",
            "learn": [
              "Singly vs doubly vs circular: what each buys you",
              "O(1) insert/delete given the node vs O(n) to find it",
              "Sentinel/dummy nodes that delete edge-case branches",
              "Why real code rarely uses raw linked lists (cache misses)"
            ],
            "do": [
              "Implement singly linked list with insert, delete, and reverse",
              "Reverse a list in place with three pointers; draw each step",
              "Detect a cycle with fast/slow pointers (Floyd's algorithm)"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["LeetCode", "https://leetcode.com"]
            ]
          },
          {
            "t": "Stacks & Queues",
            "d": "LIFO and FIFO: two disciplines that run parsing, scheduling, and undo.",
            "lv": 1,
            "time": "~3h",
            "tip": "Whenever a problem says 'most recent first' or 'process in order', reach for stack or queue before anything clever. They are the right answer embarrassingly often.",
            "learn": [
              "Stack (LIFO): push/pop and the call stack connection",
              "Queue (FIFO): enqueue/dequeue and BFS's engine",
              "Deque: both ends in O(1); circular buffer implementation",
              "Monotonic stacks: the pattern behind 'next greater element'"
            ],
            "do": [
              "Validate balanced parentheses with a stack",
              "Implement a queue with two stacks (and analyze the amortized cost)",
              "Solve 'daily temperatures' with a monotonic decreasing stack"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Hash Tables",
            "d": "Average O(1) everything, powered by a good hash function and resizing.",
            "lv": 2,
            "time": "~5h",
            "tip": "Hash tables degrade when the hash function is bad or the table is too full. If lookups mysteriously slow down, check load factor and hash quality before blaming the algorithm.",
            "learn": [
              "Hash functions: what makes one good (uniform, fast, deterministic)",
              "Collision strategies: chaining vs open addressing",
              "Load factor, resizing, and amortized O(1)",
              "Worst-case O(n) attacks: hash flooding and DoS"
            ],
            "do": [
              "Build a hash map with chaining from scratch, including resize",
              "Measure lookup time as load factor climbs past 0.7, 1.0, 2.0",
              "Count word frequencies in a book with your map vs Python's dict"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Hash table (Wikipedia)", "https://en.wikipedia.org/wiki/Hash_table"]
            ]
          },
          {
            "t": "Trees & Binary Search Trees",
            "d": "Hierarchies with an ordering superpower: search, insert, delete in O(log n).",
            "lv": 2,
            "time": "~6h",
            "tip": "A BST is only O(log n) if it stays balanced. Insert sorted data into a naive BST and you get a linked list wearing a tree costume.",
            "learn": [
              "Terminology: root, leaf, height, depth, subtree",
              "BST invariant and why it enables ordered operations",
              "In-order, pre-order, post-order, and level-order traversals",
              "Deletion cases and successor/predecessor logic"
            ],
            "do": [
              "Implement a BST with insert, search, and all three DFS traversals",
              "Validate a BST with min/max bounds (catch the naive in-order trap)",
              "Insert 1..10000 sorted and watch the height degrade to n"
            ],
            "tools": ["python3", "VisuAlgo"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["USF Visualizations", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"]
            ]
          },
          {
            "t": "Heaps & Priority Queues",
            "d": "The 'give me the most urgent thing' structure behind schedulers and top-K.",
            "lv": 2,
            "time": "~4h",
            "tip": "A heap is not sorted, it is only heap-ordered. Peeking at arbitrary ranks is O(n). If you need the k-th element repeatedly, that is a different structure.",
            "learn": [
              "Heap property and the array representation (parent/child index math)",
              "Bubble-up and sift-down: the two operations everything uses",
              "heapify in O(n) and why building beats n inserts",
              "Priority queues as the interface; heaps as the engine"
            ],
            "do": [
              "Implement a min-heap with push/pop on a plain array",
              "Find the k largest elements in a stream with a size-k heap",
              "Compare heapq vs sorted-list for a task-scheduler simulation"
            ],
            "tools": ["python3", "heapq"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Python docs (heapq)", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Graphs & Their Representations",
            "d": "Nodes and edges model everything from maps to social networks.",
            "lv": 2,
            "time": "~5h",
            "tip": "Default to adjacency lists. Adjacency matrices are only worth it for dense graphs or O(1) edge-existence checks; for sparse real-world graphs they waste oceans of memory.",
            "learn": [
              "Directed vs undirected, weighted vs unweighted, cyclic vs DAG",
              "Adjacency list vs adjacency matrix vs edge list trade-offs",
              "Degree, paths, cycles, connected components vocabulary",
              "Modeling: turning a real problem into nodes and edges"
            ],
            "do": [
              "Model a subway map as a graph; implement both representations",
              "Compare memory of adjacency matrix vs list on a sparse graph",
              "Find connected components in a social-network-style dataset"
            ],
            "tools": ["python3", "networkx"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Graph (Wikipedia)", "https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)"]
            ]
          },
          {
            "t": "Tries",
            "d": "Prefix trees: autocomplete, spell-check, and IP routing in O(key length).",
            "lv": 2,
            "time": "~3h",
            "tip": "A trie's cost depends on key length, not on how many keys are stored. That is why it beats a hash map for prefix queries and loses on memory.",
            "learn": [
              "Node-per-character structure and the end-of-word marker",
              "Insert, search, and prefix enumeration",
              "Memory cost and compression (radix/Patricia tries)",
              "Real uses: autocomplete, dictionaries, longest-prefix match"
            ],
            "do": [
              "Implement a trie with insert, search, and startsWith",
              "Build an autocomplete over 10k words; compare with brute-force scan",
              "Add wildcard search ('.') with backtracking over children"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Trie (Wikipedia)", "https://en.wikipedia.org/wiki/Trie"]
            ]
          },
          {
            "t": "Balanced Search Trees",
            "d": "AVL, red-black, B-trees: the machinery that keeps O(log n) honest.",
            "lv": 3,
            "time": "~6h",
            "tip": "You will almost never implement these by hand; you will use them constantly (sorted maps, database indexes). Learn the invariants and rotations conceptually, not the pointer surgery.",
            "learn": [
              "Rotations as the primitive that restores balance",
              "AVL: strict balance, fast lookups; red-black: looser, faster writes",
              "B-trees and B+ trees: why databases fan out instead of binary-split",
              "Where they hide: std::map, TreeMap, filesystem and DB indexes"
            ],
            "do": [
              "Animate AVL insertions on VisuAlgo and predict each rotation",
              "Compare sorted-dict operations vs hash map on ordered workloads",
              "Explain why databases use B+ trees: page-size math on paper"
            ],
            "tools": ["VisuAlgo", "python3"],
            "res": [
              ["USF Visualizations", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          }
        ]
      },
      {
        "t": "Classic Algorithms",
        "d": "The greatest hits: understand why they work, not just their names.",
        "lv": 2,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["CP-Algorithms", "https://cp-algorithms.com"]
        ],
        "children": [
          {
            "t": "Sorting: The Essential Six",
            "d": "Bubble to merge: what each sort teaches you about algorithm design.",
            "lv": 1,
            "time": "~6h",
            "tip": "Learn quicksort and mergesort deeply; know the others exist. In practice you call a library sort, but interviews and insight live in partition-vs-merge.",
            "learn": [
              "Bubble, selection, insertion: O(n^2), simple, occasionally useful",
              "Merge sort: divide and conquer, stable, O(n log n), O(n) space",
              "Quick sort: partitioning, pivot choice, average vs worst case",
              "Heap sort and the O(n log n) lower bound for comparisons"
            ],
            "do": [
              "Implement all six; time them on random, sorted, and reverse-sorted input",
              "Implement Lomuto and Hoare partition; compare swap counts",
              "Watch each algorithm on VisuAlgo and narrate what it is doing"
            ],
            "tools": ["python3", "VisuAlgo"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Sorting (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Searching: Linear & Binary",
            "d": "Binary search: fifteen lines that half the candidates get wrong.",
            "lv": 1,
            "time": "~3h",
            "tip": "Binary search bugs live in the loop condition and midpoint math (`lo + (hi - lo) // 2` avoids overflow). Write the invariant ('answer is in [lo, hi)') first, code second.",
            "learn": [
              "Linear search and when O(n) is genuinely fine",
              "Binary search invariant and the half-open interval discipline",
              "Lower/upper bound variants and searching answer spaces",
              "Why binary search generalizes far beyond sorted arrays"
            ],
            "do": [
              "Implement binary search three times from memory until it is boring",
              "Solve 'first bad version' style problems with the bound variants",
              "Apply binary search on answer to a minimization problem"
            ],
            "tools": ["python3", "bisect"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Binary search (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Recursion: Tail vs Non-Tail",
            "d": "When the call stack is your loop, and when it becomes your enemy.",
            "lv": 2,
            "time": "~4h",
            "tip": "Tail recursion can be optimized into a loop; non-tail recursion cannot. If your language lacks tail-call optimization (Python!), deep tail recursion still blows the stack.",
            "learn": [
              "Base case + recursive case as the universal skeleton",
              "Tail recursion and why compilers can turn it into iteration",
              "Stack depth limits and recursion-to-iteration conversion",
              "Multiple recursion (Fibonacci) and its exponential trap"
            ],
            "do": [
              "Rewrite factorial and list-sum in tail-recursive and iterative forms",
              "Hit Python's recursion limit with naive Fibonacci; then memoize it",
              "Convert a recursive DFS to an explicit-stack version"
            ],
            "tools": ["python3", "sys.setrecursionlimit"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["Recursion (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Tree & Graph Traversal (DFS/BFS)",
            "d": "Two ways to walk any connected structure; half of all graph problems.",
            "lv": 2,
            "time": "~5h",
            "tip": "DFS uses a stack (or recursion), BFS uses a queue. On unweighted graphs BFS finds shortest paths; DFS finds connectivity and is simpler for exhaustive search.",
            "learn": [
              "DFS: recursion vs explicit stack; pre/in/post-order on trees",
              "BFS: level-by-level expansion and shortest-path property",
              "Visited sets: the one line that prevents infinite loops",
              "Iterative deepening and when DFS needs depth limits"
            ],
            "do": [
              "Implement DFS (recursive + iterative) and BFS on the same graph",
              "Solve 'number of islands' with both; compare code shape",
              "Use BFS to find the shortest path in an unweighted grid maze"
            ],
            "tools": ["python3", "collections.deque"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Graphs (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Shortest Paths: Dijkstra, Bellman-Ford, A*",
            "d": "From GPS routing to game AI: the three algorithms that find the way.",
            "lv": 3,
            "time": "~6h",
            "tip": "Dijkstra fails silently on negative edges (it will return wrong answers, not errors). If weights can be negative, you need Bellman-Ford, and you must check for negative cycles.",
            "learn": [
              "Dijkstra with a priority queue: O((V+E) log V), non-negative weights only",
              "Bellman-Ford: handles negatives, detects negative cycles, O(VE)",
              "A*: Dijkstra plus a heuristic; admissibility guarantees optimality",
              "When BFS suffices (unweighted) and when Floyd-Warshall fits (all pairs)"
            ],
            "do": [
              "Implement Dijkstra; feed it a negative edge and watch it lie",
              "Implement Bellman-Ford and detect a negative cycle",
              "Route on a grid with A* using Manhattan distance; compare nodes expanded vs Dijkstra"
            ],
            "tools": ["python3", "heapq"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Shortest paths (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Greedy Algorithms",
            "d": "Take the best-looking step and never look back. Sometimes that is optimal.",
            "lv": 3,
            "time": "~5h",
            "tip": "Greedy is easy to propose and hard to prove. Before coding, argue the exchange argument: why can an optimal solution be massaged to include your greedy choice?",
            "learn": [
              "Greedy choice property and optimal substructure",
              "Huffman coding: optimal prefix codes from a priority queue",
              "Kruskal's and Prim's for minimum spanning trees",
              "Interval scheduling: the canonical provably-greedy problem"
            ],
            "do": [
              "Build Huffman codes for a text and measure compression ratio",
              "Implement Kruskal's with union-find; verify on random graphs vs brute force",
              "Solve activity selection greedily, then try to break it with adversarial input"
            ],
            "tools": ["python3", "heapq"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Greedy (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Backtracking",
            "d": "Systematic trial and error with pruning: N-Queens, Sudoku, and mazes.",
            "lv": 3,
            "time": "~5h",
            "tip": "Backtracking is DFS over a state space with an undo step. If you forget to un-choose (restore state) after the recursive call, every sibling branch inherits garbage.",
            "learn": [
              "Choose, explore, unchoose: the universal backtracking skeleton",
              "Constraint propagation and pruning to kill dead branches early",
              "N-Queens, Sudoku, Hamiltonian path as archetypes",
              "Complexity reality: exponential, so pruning is the algorithm"
            ],
            "do": [
              "Solve N-Queens for n=8 with plain backtracking; count nodes explored",
              "Add diagonal pruning and measure the node-count drop",
              "Solve a Sudoku with backtracking + constraint propagation"
            ],
            "tools": ["python3"],
            "res": [
              ["Backtracking (CP-Algorithms)", "https://cp-algorithms.com"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "String Searching: KMP, Boyer-Moore, Rabin-Karp",
            "d": "Finding needles in haystacks faster than naive scanning.",
            "lv": 3,
            "time": "~5h",
            "tip": "In practice you use a library or regex. Learn these for the ideas: KMP's failure function teaches automaton thinking; Rabin-Karp teaches rolling hashes you'll reuse everywhere.",
            "learn": [
              "Naive O(nm) search and why it is slow on repetitive text",
              "KMP: the prefix function and O(n+m) guarantees",
              "Boyer-Moore: skipping from the right, fastest in practice",
              "Rabin-Karp: rolling hashes and their collision caveat"
            ],
            "do": [
              "Implement naive search, then KMP; time both on 'a'*10000 + 'b'",
              "Implement a rolling hash and use it to find duplicate substrings",
              "Compare your KMP against Python's `in` operator on pathological input"
            ],
            "tools": ["python3"],
            "res": [
              ["String algorithms (CP-Algorithms)", "https://cp-algorithms.com"],
              ["KMP (Wikipedia)", "https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm"]
            ]
          },
          {
            "t": "Caching Strategies: LRU, LFU",
            "d": "When memory is full, who gets evicted? The policy decides your hit rate.",
            "lv": 2,
            "time": "~4h",
            "tip": "LRU is the default for a reason, but it is poison for scans: a full-table scan evicts your entire hot cache. Real systems layer policies (LRU-K, TinyLFU) for exactly this.",
            "learn": [
              "LRU: hash map + doubly linked list for O(1) get/put",
              "LFU and MFU: frequency-based eviction trade-offs",
              "Cache hierarchies: where LRU lives (CPU, CDN, database)",
              "Write-through vs write-back and cache invalidation basics"
            ],
            "do": [
              "Implement an O(1) LRU cache from scratch",
              "Simulate hit rates of LRU vs LFU on skewed vs scan workloads",
              "Add an LRU cache to a slow function with functools.lru_cache and measure"
            ],
            "tools": ["python3", "functools"],
            "res": [
              ["Cache replacement (Wikipedia)", "https://en.wikipedia.org/wiki/Cache_replacement_policies"],
              ["Redis docs", "https://redis.io/docs/"]
            ]
          }
        ]
      },
      {
        "t": "Operating Systems & Concurrency",
        "d": "What happens between your code and the silicon.",
        "lv": 2,
        "res": [
          ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
          ["MIT OpenCourseWare", "https://ocw.mit.edu"]
        ],
        "children": [
          {
            "t": "Processes vs Threads",
            "d": "Isolation versus sharing: the fundamental concurrency trade-off.",
            "lv": 2,
            "time": "~4h",
            "tip": "Threads share memory, which makes communication cheap and bugs expensive. If threads feel scary, that instinct is correct: prefer message passing or well-tested primitives.",
            "learn": [
              "Process: isolated address space, expensive to create",
              "Thread: shared memory within a process, cheap context switch",
              "The GIL and why Python threads don't parallelize CPU work",
              "When to use processes, threads, or async instead"
            ],
            "do": [
              "Compare `ps` output for a threaded vs multiprocess Python program",
              "Benchmark CPU-bound work with threads vs multiprocessing in Python",
              "Inspect thread stacks of a running program with `py-spy` or `gdb`"
            ],
            "tools": ["ps", "htop", "python3"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Synchronization: Locks, Mutexes & Semaphores",
            "d": "Shared mutable state is where programs go to die. These are the guardrails.",
            "lv": 2,
            "time": "~5h",
            "tip": "The deadlock recipe: two locks acquired in different orders by different threads. Fix it with a global lock ordering, or better, hold as few locks as possible.",
            "learn": [
              "Race conditions and why 'it works on my machine' is meaningless",
              "Mutexes, semaphores, and condition variables",
              "Deadlock's four conditions and lock-ordering discipline",
              "Lock-free basics: atomics and compare-and-swap"
            ],
            "do": [
              "Write a racy counter with 8 threads; watch the final count come up short",
              "Fix it with a lock, then deliberately create a deadlock with two locks",
              "Implement a bounded buffer with semaphores (producer-consumer)"
            ],
            "tools": ["python3", "threading"],
            "res": [
              ["MIT OpenCourseWare", "https://ocw.mit.edu"],
              ["Python docs (threading)", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Memory Management & Virtual Memory",
            "d": "Every process thinks it owns the whole machine. Paging maintains the illusion.",
            "lv": 3,
            "time": "~5h",
            "tip": "A segfault is the MMU doing its job: your process touched a page it doesn't own. 'Segmentation fault' is protection working, not memory breaking.",
            "learn": [
              "Virtual address spaces and the page table translation",
              "Paging, page faults, and demand loading",
              "Stack vs heap allocation and fragmentation",
              "Thrashing: when the working set exceeds RAM"
            ],
            "do": [
              "Trigger and explain a segfault in C; catch it with a signal handler",
              "Observe page faults with `/usr/bin/time -v` on a big allocation",
              "Measure malloc/free fragmentation with a long-running allocator test"
            ],
            "tools": ["gcc", "time", "valgrind"],
            "res": [
              ["MIT OpenCourseWare", "https://ocw.mit.edu"],
              ["Virtual memory (Wikipedia)", "https://en.wikipedia.org/wiki/Virtual_memory"]
            ]
          },
          {
            "t": "CPU Scheduling",
            "d": "Who runs next? The algorithm deciding your program's latency.",
            "lv": 2,
            "time": "~3h",
            "tip": "Throughput and latency fight each other: batch schedulers maximize throughput, interactive systems sacrifice it for responsiveness. Know which game you're playing.",
            "learn": [
              "FCFS, round-robin, shortest-job-first, and priority scheduling",
              "Preemptive vs cooperative multitasking",
              "Completely Fair Scheduler (Linux CFS) intuition",
              "Starvation, aging, and priority inversion"
            ],
            "do": [
              "Simulate round-robin vs SJF on a job set; compare average wait time",
              "Observe scheduling with `chrt` and nice levels on a busy box",
              "Explain why a CPU-bound loop makes your music stutter (and how CFS prevents it)"
            ],
            "tools": ["python3", "chrt", "nice"],
            "res": [
              ["Scheduling (Wikipedia)", "https://en.wikipedia.org/wiki/Scheduling_(computing)"],
              ["MIT OpenCourseWare", "https://ocw.mit.edu"]
            ]
          },
          {
            "t": "Forking & Inter-Process Communication",
            "d": "Processes can't share memory, so they talk: pipes, sockets, and signals.",
            "lv": 3,
            "time": "~4h",
            "tip": "After fork(), both processes continue from the same line, and the only difference is the return value. That single fact confuses everyone exactly once.",
            "learn": [
              "fork/exec/wait: the Unix process lifecycle",
              "Pipes, FIFOs, message queues, and shared memory",
              "Signals as the OS's interrupt mechanism for processes",
              "Copy-on-write: why fork is cheaper than it looks"
            ],
            "do": [
              "Write a C program that forks and prints from both parent and child",
              "Build a two-process pipeline with `pipe()` passing structured data",
              "Handle SIGINT gracefully in a long-running Python daemon"
            ],
            "tools": ["gcc", "python3", "strace"],
            "res": [
              ["MIT OpenCourseWare", "https://ocw.mit.edu"],
              ["Python docs (multiprocessing)", "https://docs.python.org/3/"]
            ]
          }
        ]
      },
      {
        "t": "Networks, Databases & System Design",
        "d": "How software behaves when it leaves your laptop.",
        "lv": 3,
        "res": [
          ["roadmap.sh Computer Science", "https://roadmap.sh/computer-science"],
          ["Cloudflare Learning", "https://www.cloudflare.com/learning/"]
        ],
        "children": [
          {
            "t": "The OSI & TCP/IP Models",
            "d": "Seven layers of abstraction that let a packet cross the planet.",
            "lv": 2,
            "time": "~4h",
            "tip": "Memorizing layer names is trivia; understanding encapsulation is the skill. Each layer wraps the payload of the one above, like envelopes inside envelopes.",
            "learn": [
              "OSI's 7 layers vs TCP/IP's 4: what each one is responsible for",
              "Encapsulation: headers added at each layer",
              "TCP vs UDP: reliability vs speed trade-off",
              "Where common protocols live (IP, TCP, HTTP, TLS)"
            ],
            "do": [
              "Capture your own traffic with Wireshark; identify layers in one packet",
              "Explain a full page load as a walk down and up the stack",
              "Compare TCP and UDP behavior with `iperf3` under packet loss"
            ],
            "tools": ["wireshark", "tcpdump", "iperf3"],
            "res": [
              ["OSI model (Wikipedia)", "https://en.wikipedia.org/wiki/OSI_model"],
              ["Cloudflare Learning", "https://www.cloudflare.com/learning/"]
            ]
          },
          {
            "t": "HTTP, DNS & TLS",
            "d": "The three protocols behind every click: naming, fetching, and trusting.",
            "lv": 2,
            "time": "~5h",
            "tip": "TLS does not just encrypt; it authenticates. Without certificate validation you have encryption to someone, which might be an attacker. Never skip verification.",
            "learn": [
              "DNS resolution: recursive vs authoritative, caching, record types",
              "HTTP methods, status codes, headers, and statelessness",
              "TLS handshake: asymmetric setup, symmetric session, certificates",
              "HTTPS pitfalls: mixed content, HSTS, certificate pinning"
            ],
            "do": [
              "Resolve a domain step by step with `dig +trace`",
              "Inspect a TLS handshake with `openssl s_client -connect`",
              "Serve a local site over HTTPS with a self-signed cert; watch the browser warn"
            ],
            "tools": ["dig", "openssl", "curl"],
            "res": [
              ["What is DNS (Cloudflare)", "https://www.cloudflare.com/learning/dns/what-is-dns/"],
              ["What is HTTPS (Cloudflare)", "https://www.cloudflare.com/learning/ssl/what-is-https/"]
            ]
          },
          {
            "t": "Relational Design & Normalization",
            "d": "Tables that don't lie to you: keys, relationships, and normal forms.",
            "lv": 2,
            "time": "~5h",
            "tip": "Normalize until it hurts, denormalize until it works. Third normal form is the default; denormalization is a deliberate performance trade, not laziness.",
            "learn": [
              "Primary/foreign keys and referential integrity",
              "ER modeling: entities, relationships, cardinality",
              "1NF through 3NF (and what BCNF fixes)",
              "When denormalization is the right call"
            ],
            "do": [
              "Design an ER diagram for a bookstore; implement it in SQLite",
              "Take a spreadsheet-style table to 3NF step by step",
              "Write the JOINs that a normalized schema demands and feel the cost"
            ],
            "tools": ["sqlite3", "PostgreSQL"],
            "res": [
              ["PostgreSQL docs", "https://www.postgresql.org/docs/"],
              ["Database normalization (Wikipedia)", "https://en.wikipedia.org/wiki/Database_normalization"]
            ]
          },
          {
            "t": "SQL vs NoSQL: ACID, CAP & BASE",
            "d": "Consistency, availability, partition tolerance: pick two, and mean it.",
            "lv": 3,
            "time": "~5h",
            "tip": "CAP is about network partitions, not normal operation. The real question is usually simpler: does your data have relationships (SQL) or is it documents/key-values at scale (NoSQL)?",
            "learn": [
              "ACID transactions and isolation levels",
              "CAP theorem and what it actually constrains",
              "BASE and eventual consistency in distributed stores",
              "Document, key-value, column-family, and graph stores"
            ],
            "do": [
              "Demonstrate a lost update with concurrent SQLite writes",
              "Model the same data in PostgreSQL and MongoDB; compare query shapes",
              "Sketch which two of CAP your favorite database chooses"
            ],
            "tools": ["PostgreSQL", "MongoDB", "sqlite3"],
            "res": [
              ["PostgreSQL docs", "https://www.postgresql.org/docs/"],
              ["MongoDB docs", "https://www.mongodb.com/docs/"]
            ]
          },
          {
            "t": "Indexes & Query Performance",
            "d": "B-trees that turn full-table scans into millisecond lookups.",
            "lv": 3,
            "time": "~4h",
            "tip": "An index speeds reads and taxes writes. The classic mistake is indexing everything; the classic symptom is a write-heavy table crawling under index maintenance.",
            "learn": [
              "B-tree indexes and how range queries use them",
              "Composite indexes and leftmost-prefix rules",
              "Reading EXPLAIN plans to find the real bottleneck",
              "Full-text and hash index specialties"
            ],
            "do": [
              "Time a query on 1M rows before and after adding an index",
              "Use EXPLAIN ANALYZE to catch a sequential scan; fix it",
              "Break a query with a function on the indexed column; observe the scan return"
            ],
            "tools": ["PostgreSQL", "EXPLAIN ANALYZE"],
            "res": [
              ["PostgreSQL docs", "https://www.postgresql.org/docs/"],
              ["Use The Index, Luke", "https://use-the-index-luke.com/"]
            ]
          },
          {
            "t": "Scaling, Load Balancing & Caching",
            "d": "Horizontal vs vertical: how systems survive success.",
            "lv": 3,
            "time": "~5h",
            "tip": "Cache invalidation really is one of the two hard problems. Set explicit TTLs and versioned keys; 'clear the whole cache on deploy' is a thundering-herd incident waiting to happen.",
            "learn": [
              "Vertical vs horizontal scaling and statelessness",
              "Load balancing algorithms: round-robin, least-connections, hashing",
              "CDNs and edge caching for static content",
              "Cache-aside, read-through, and write-through patterns"
            ],
            "do": [
              "Put nginx in front of two app servers; kill one and watch failover",
              "Add Redis caching to a slow endpoint; measure p95 before/after",
              "Sketch a CDN + origin architecture for a video-heavy site"
            ],
            "tools": ["nginx", "redis", "docker"],
            "res": [
              ["What is a CDN (Cloudflare)", "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"],
              ["Redis docs", "https://redis.io/docs/"]
            ]
          },
          {
            "t": "System Design Building Blocks",
            "d": "Queues, proxies, and APIs: the vocabulary of architecture interviews.",
            "lv": 3,
            "time": "~6h",
            "tip": "Every system design answer is composition: take these blocks, state your requirements and numbers, then connect blocks with reasons. There is no secret sauce beyond that.",
            "learn": [
              "Message queues (Kafka/RabbitMQ) for decoupling and backpressure",
              "Reverse proxies, forward proxies, and API gateways",
              "REST vs GraphQL vs gRPC: choosing an API style",
              "Sharding, replication, and consensus at a conceptual level"
            ],
            "do": [
              "Design URL shortener end-to-end: API, storage, scaling numbers",
              "Publish/consume 10k messages through a real queue; observe backpressure",
              "Compare REST, GraphQL, and gRPC with the same toy service"
            ],
            "tools": ["docker", "kafka", "grpc"],
            "res": [
              ["Kafka docs", "https://kafka.apache.org/documentation/"],
              ["GraphQL", "https://graphql.org/learn/"]
            ]
          }
        ]
      },
      {
        "t": "Security & Software Design",
        "d": "Crypto basics and the patterns professionals reuse.",
        "lv": 3,
        "res": [
          ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
          ["Refactoring Guru", "https://refactoring.guru/design-patterns"]
        ],
        "children": [
          {
            "t": "Hashing, Encryption & Encoding",
            "d": "Three different tools people constantly confuse. Learn which does what.",
            "lv": 2,
            "time": "~4h",
            "tip": "Encoding is not encryption (Base64 is readable by everyone), and hashing is not encryption (it is one-way). Mixing these up is how credentials leak.",
            "learn": [
              "Encoding (Base64/hex): representation, reversible, no secrecy",
              "Hashing (SHA-256): one-way fingerprints, salting for passwords",
              "Symmetric encryption (AES): same key both sides",
              "Why you never invent your own crypto primitives"
            ],
            "do": [
              "Hash a password with bcrypt/argon2; verify with wrong and right inputs",
              "Encrypt a file with AES via openssl; try tampering and detect it",
              "Crack a weak MD5 password hash with a wordlist to feel why salting matters"
            ],
            "tools": ["openssl", "hashcat", "python3"],
            "res": [
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
              ["Cryptographic hash (Wikipedia)", "https://en.wikipedia.org/wiki/Cryptographic_hash_function"]
            ]
          },
          {
            "t": "Public-Key Cryptography",
            "d": "Two keys, one secret: how strangers establish trust over the internet.",
            "lv": 3,
            "time": "~4h",
            "tip": "Public-key crypto is slow, so nobody encrypts bulk data with it. The pattern is always hybrid: RSA/ECDH to exchange a key, AES for the data.",
            "learn": [
              "Key pairs: public encrypts/verifies, private decrypts/signs",
              "RSA intuition and elliptic-curve advantages",
              "Digital signatures vs encryption: authenticity vs secrecy",
              "Certificates and the chain of trust behind HTTPS"
            ],
            "do": [
              "Generate an RSA keypair with openssl; encrypt, decrypt, sign, verify",
              "Inspect a real site's certificate chain with openssl s_client",
              "Sign a git commit with GPG and verify the signature"
            ],
            "tools": ["openssl", "gpg", "ssh-keygen"],
            "res": [
              ["Public-key crypto (Wikipedia)", "https://en.wikipedia.org/wiki/Public-key_cryptography"],
              ["What is TLS (Cloudflare)", "https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/"]
            ]
          },
          {
            "t": "OWASP Top 10",
            "d": "The ten vulnerability classes behind most real breaches.",
            "lv": 2,
            "time": "~4h",
            "tip": "Broken access control has topped the list for years, not exotic crypto bugs. Most breaches are missing authorization checks, not brilliant exploits.",
            "learn": [
              "Broken access control and injection as the perennial top two",
              "Cryptographic failures and security misconfiguration",
              "Vulnerable components and logging/monitoring gaps",
              "Threat modeling: thinking like an attacker about your own app"
            ],
            "do": [
              "Exploit SQL injection and XSS in a local DVWA/juice-shop instance",
              "Fix an IDOR by adding an ownership check; write the regression test",
              "Run a dependency scan (npm audit / pip-audit) on one of your projects"
            ],
            "tools": ["OWASP ZAP", "Burp Suite", "npm audit"],
            "res": [
              ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
              ["OWASP Juice Shop", "https://owasp.org/www-project-juice-shop/"]
            ]
          },
          {
            "t": "Design Patterns: GoF Essentials",
            "d": "Named solutions to recurring design problems: Singleton to Observer.",
            "lv": 3,
            "time": "~6h",
            "tip": "Patterns are vocabulary, not building blocks to force in. If you can't name the problem a pattern solves, you don't need the pattern yet.",
            "learn": [
              "Creational: Singleton, Factory, Builder (and their abuses)",
              "Structural: Adapter, Decorator, Facade",
              "Behavioral: Observer, Strategy, Command",
              "Architectural: MVC, layered, dependency injection"
            ],
            "do": [
              "Refactor a tangled module using Strategy to kill a switch statement",
              "Implement Observer for a tiny event system; add/remove listeners",
              "Find three patterns in a real open-source codebase and document them"
            ],
            "tools": [],
            "res": [
              ["Refactoring Guru", "https://refactoring.guru/design-patterns"],
              ["Martin Fowler", "https://martinfowler.com"]
            ]
          },
          {
            "t": "UML Diagrams",
            "d": "Sketch systems so others can read your thinking: class, sequence, activity.",
            "lv": 1,
            "time": "~2h",
            "tip": "UML is a communication tool, not documentation theater. A rough sequence diagram on a whiteboard beats a perfect one nobody reads.",
            "learn": [
              "Class diagrams: the static structure of your design",
              "Sequence diagrams: who calls whom, in what order",
              "Activity and state-machine diagrams for flows",
              "Use-case diagrams for scoping features"
            ],
            "do": [
              "Draw a class diagram for a project you built",
              "Sequence-diagram a login flow including the failure paths",
              "Generate a diagram from code with PlantUML"
            ],
            "tools": ["PlantUML", "draw.io"],
            "res": [
              ["UML diagrams reference", "https://www.uml-diagrams.org"],
              ["PlantUML", "https://plantuml.com"]
            ],
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
