/* Atlas roadmap data: Data Structures & Algorithms (data-structures-algorithms)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "data-structures-algorithms",
  "title": "Data Structures & Algorithms",
  "icon": "🧩",
  "color": "#818cf8",
  "tagline": "From arrays to dynamic programming: the problem-solving toolkit.",
  "desc": "The complete DSA path for interviews and real engineering: linear structures, trees, graphs, dynamic programming, and the patterns that connect them.",
  "kind": "skill",
  "root": {
    "t": "Data Structures & Algorithms",
    "d": "From arrays to dynamic programming: the complete problem-solving toolkit.",
    "res": [
      ["roadmap.sh DSA", "https://roadmap.sh/datastructures-and-algorithms"],
      ["NeetCode", "https://neetcode.io"]
    ],
    "children": [
      {
        "t": "Foundations",
        "d": "The mental models everything else builds on.",
        "lv": 1,
        "res": [
          ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
          ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"]
        ],
        "children": [
          {
            "t": "Recursion Basics",
            "d": "Base case plus recursive case: the skeleton of half of DSA.",
            "lv": 1,
            "time": "~4h",
            "tip": "If you can't state the base case in one sentence, don't write the recursive case yet. Most recursion bugs are missing or wrong base cases.",
            "learn": [
              "Base case and recursive case as a contract",
              "The call stack: what happens on each recursive call",
              "Tracing recursion with a recursion tree",
              "When recursion is elegant vs when iteration wins"
            ],
            "do": [
              "Write factorial, Fibonacci, and list-sum recursively from scratch",
              "Draw the full recursion tree for fib(5) and count repeated calls",
              "Convert a recursive countdown into an iterative loop"
            ],
            "tools": ["python3"],
            "res": [
              ["Khan Academy Computing", "https://www.khanacademy.org/computing/computer-science"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Time Complexity",
            "d": "Count what grows with n, and say how fast in Big-O.",
            "lv": 1,
            "time": "~3h",
            "tip": "Analyze the worst case by default, but know when average case is the honest answer (hash maps, quicksort). Interviewers notice the distinction.",
            "learn": [
              "Big-O as growth rate: drop constants and lower terms",
              "Analyzing single loops, nested loops, and loops with breaks",
              "Best, average, and worst case on the same algorithm",
              "Reading complexity off constraints (n <= 10^5 means O(n log n))"
            ],
            "do": [
              "Derive Big-O for 6 short functions, then verify by timing at doubling n",
              "Given constraints, decide which complexities are acceptable for each",
              "Explain why two nested loops aren't always O(n^2)"
            ],
            "tools": ["python3", "time"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "Space Complexity",
            "d": "Memory is the budget everyone forgets to check.",
            "lv": 1,
            "time": "~2h",
            "tip": "Recursion depth counts as space. A 'clean' recursive DFS on a 10^5-node line graph is a stack overflow wearing a solution costume.",
            "learn": [
              "Auxiliary space vs input space",
              "Call-stack depth as hidden space cost",
              "In-place algorithms and the O(1) space ideal",
              "Trading space for time with memoization"
            ],
            "do": [
              "Compute space complexity of iterative vs recursive binary search",
              "Measure memory of a memoized vs tabulation Fibonacci with tracemalloc",
              "Rewrite an O(n)-space solution to O(1) space"
            ],
            "tools": ["python3", "tracemalloc"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["Python docs", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Reading Constraints & Picking an Approach",
            "d": "The constraints are the problem telling you which algorithm it wants.",
            "lv": 1,
            "time": "~3h",
            "tip": "n <= 20 screams bitmask/2^n; n <= 10^5 screams O(n log n); n <= 10^9 screams O(log n) or math. Learn this mapping and half your approach decisions are instant.",
            "learn": [
              "The constraint-to-complexity mapping table",
              "Estimating operations: ~10^8 simple ops per second",
              "Recognizing hidden structure (sorted? graph? overlapping subproblems?)",
              "Brute force first: a slow correct answer beats a fast wrong one"
            ],
            "do": [
              "Take 10 problem statements; predict the intended complexity from constraints alone",
              "Solve one problem three ways (brute, better, optimal) and time each",
              "Build a personal cheat sheet: constraints on the left, techniques on the right"
            ],
            "tools": ["python3"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["CP-Algorithms", "https://cp-algorithms.com"]
            ]
          }
        ]
      },
      {
        "t": "Linear Structures",
        "d": "The workhorses: arrays, lists, stacks, and queues.",
        "lv": 1,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["NeetCode", "https://neetcode.io"]
        ],
        "children": [
          {
            "t": "Arrays & Strings",
            "d": "Indexing, slicing, and in-place manipulation: where every DSA journey starts.",
            "lv": 1,
            "time": "~5h",
            "tip": "Strings are immutable in most languages, so 'modify the string' really means build a new one. For heavy manipulation, work on a character array and join at the end.",
            "learn": [
              "Index math, slicing, and two-ended access patterns",
              "In-place modification with read/write pointers",
              "Prefix sums: O(1) range queries after O(n) setup",
              "Strings as character arrays; immutability consequences"
            ],
            "do": [
              "Reverse a string in place; remove duplicates from a sorted array in place",
              "Build a prefix-sum array and answer 1000 range-sum queries instantly",
              "Solve 'move zeroes' and 'rotate array' without extra space"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Linked Lists",
            "d": "Pointer surgery: O(1) insertion and deletion once you're holding the node.",
            "lv": 1,
            "time": "~5h",
            "tip": "The dummy head node deletes half your edge cases (empty list, deleting the head). Use it every time until it feels like cheating, because it is.",
            "learn": [
              "Singly, doubly, and circular variants",
              "Dummy/sentinel nodes that erase edge cases",
              "Fast and slow pointers for cycles and midpoints",
              "In-place reversal as the fundamental linked-list operation"
            ],
            "do": [
              "Implement a singly linked list with insert, delete, and reverse",
              "Reverse a list iteratively with three pointers, drawing each step",
              "Detect a cycle and find its start with Floyd's algorithm"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Reverse Linked List (LeetCode)", "https://leetcode.com/problems/reverse-linked-list/"]
            ]
          },
          {
            "t": "Stacks",
            "d": "Last in, first out: undo buttons, call stacks, and monotonic tricks.",
            "lv": 1,
            "time": "~4h",
            "tip": "A stack remembers 'what was I doing before this'. Any problem about nesting, matching, or 'most recent unresolved thing' is a stack problem in disguise.",
            "learn": [
              "Push/pop/peek and LIFO discipline",
              "Stacks as the engine of recursion and expression parsing",
              "Monotonic stacks for next-greater-element patterns",
              "Implementing a stack with arrays vs linked lists"
            ],
            "do": [
              "Validate balanced parentheses of three bracket types",
              "Solve 'daily temperatures' with a monotonic decreasing stack",
              "Implement a stack that returns the minimum in O(1)"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Valid Parentheses (LeetCode)", "https://leetcode.com/problems/valid-parentheses/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Queues & Deques",
            "d": "First in, first out: the order-keeping behind BFS and scheduling.",
            "lv": 1,
            "time": "~3h",
            "tip": "Use a real deque, not a list as a queue. Popping from the front of an array is O(n) because everything shifts; that 'works' right up until it times out.",
            "learn": [
              "FIFO discipline: enqueue, dequeue, peek",
              "Deque: O(1) at both ends; circular buffer idea",
              "Queues as the engine of BFS",
              "Priority queues preview: order by importance, not arrival"
            ],
            "do": [
              "Implement a queue with two stacks; analyze amortized cost",
              "Level-order traverse a tree using a deque",
              "Simulate a ticket queue and a print spooler"
            ],
            "tools": ["python3", "collections.deque"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Python docs (collections)", "https://docs.python.org/3/"]
            ]
          }
        ]
      },
      {
        "t": "Hashing, Sorting & Searching",
        "d": "Look things up fast, put things in order, find things faster.",
        "lv": 2,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"]
        ],
        "children": [
          {
            "t": "Hash Tables & Hash Sets",
            "d": "Average O(1) lookup: the single highest-ROI structure in interviews.",
            "lv": 2,
            "time": "~5h",
            "tip": "The hash map answers 'have I seen this before?' in O(1). An enormous fraction of Easy/Medium problems are exactly that question wearing a costume.",
            "learn": [
              "Hash functions, buckets, and collision handling",
              "Load factor and why resizing keeps O(1) amortized",
              "Hash map vs hash set: when you need values vs membership",
              "Counting patterns: frequency maps as the default first tool"
            ],
            "do": [
              "Build a hash map with chaining from scratch, with resize",
              "Solve Two Sum with the one-pass hash map technique",
              "Group anagrams using sorted-tuple and counting-tuple keys; compare"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Two Sum (LeetCode)", "https://leetcode.com/problems/two-sum/"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "Sorting: Merge, Quick & Heap Sort",
            "d": "Three O(n log n) sorts, three design ideas: divide, partition, heapify.",
            "lv": 2,
            "time": "~6h",
            "tip": "Know which sort is stable (merge) and which is in-place (quick, heap). 'Sort by X, then by Y' needs stability or a tuple key; pick wrong and the second key scrambles the first.",
            "learn": [
              "Merge sort: divide and conquer, stable, O(n) extra space",
              "Quick sort: partitioning, pivot strategy, worst-case O(n^2)",
              "Heap sort: in-place O(n log n) via the heap structure",
              "Stability, adaptivity, and the comparison-sort lower bound"
            ],
            "do": [
              "Implement all three; time on random, sorted, reverse-sorted data",
              "Implement Lomuto vs Hoare partition; count the swaps",
              "Sort with a custom comparator (tuples) and verify stability"
            ],
            "tools": ["python3", "VisuAlgo"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Sorting (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Binary Search & Its Variants",
            "d": "Halve the search space: on arrays, on answers, on anything monotonic.",
            "lv": 2,
            "time": "~5h",
            "tip": "Binary search is not about sorted arrays, it's about monotonic predicates ('if x works, everything bigger works'). Find the monotonicity and you can binary-search almost anything.",
            "learn": [
              "The loop invariant: answer always inside [lo, hi)",
              "Lower bound / upper bound: first and last occurrence",
              "Binary search on the answer (minimize the maximum)",
              "Rotated arrays and 2-D matrix variants"
            ],
            "do": [
              "Implement lower_bound and upper_bound from scratch",
              "Solve 'search in rotated sorted array' without peeking",
              "Apply binary search on answer to a 'minimum capacity' problem"
            ],
            "tools": ["python3", "bisect", "LeetCode"],
            "res": [
              ["Binary Search (LeetCode)", "https://leetcode.com/problems/binary-search/"],
              ["Binary search (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          }
        ]
      },
      {
        "t": "Trees",
        "d": "Hierarchies, traversals, and ordered data done right.",
        "lv": 2,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["USF Visualizations", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"]
        ],
        "children": [
          {
            "t": "Binary Trees & Traversals",
            "d": "Pre/in/post-order and level order: four ways to walk a tree, four superpowers.",
            "lv": 2,
            "time": "~5h",
            "tip": "In-order of a BST gives sorted order; pre-order reconstructs structure; post-order computes bottom-up (heights, deletions). Pick the traversal that matches the question.",
            "learn": [
              "Recursive and iterative traversals (the explicit-stack versions)",
              "What each order is good for: copy, evaluate, sort, serialize",
              "Height, diameter, and path problems as traversal variants",
              "Serialization: turning trees into strings and back"
            ],
            "do": [
              "Implement all four traversals both recursively and iteratively",
              "Compute max depth and diameter in a single traversal each",
              "Serialize and deserialize a binary tree"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Binary Search Trees",
            "d": "Ordered operations in O(log n), as long as the tree stays balanced.",
            "lv": 2,
            "time": "~5h",
            "tip": "Validate a BST with min/max bounds passed down, not by checking in-order sortedness alone. The bounds version catches the subtle violations.",
            "learn": [
              "The BST invariant: left < node < right, recursively",
              "Insert, search, delete (the three deletion cases)",
              "Successor/predecessor and kth-smallest via in-order",
              "Degeneration: sorted input makes a linked list"
            ],
            "do": [
              "Implement BST insert/search/delete with tests",
              "Validate a BST with the bounds technique",
              "Find kth smallest two ways: in-order count and augmented size"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["USF Visualizations", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"]
            ]
          },
          {
            "t": "Heaps & Priority Queues",
            "d": "Always the min (or max): scheduling, top-K, and merging sorted streams.",
            "lv": 2,
            "time": "~4h",
            "tip": "Python's heapq is a min-heap only. For max-heap behavior, push negated values. Forgetting the negation is a rite of passage; do it once, never again.",
            "learn": [
              "Array representation and parent/child index arithmetic",
              "Push (bubble up) and pop (sift down)",
              "heapify in O(n): building beats n pushes",
              "Top-K patterns: size-k heap as a streaming filter"
            ],
            "do": [
              "Implement a min-heap on a plain list",
              "Find kth largest in a stream with a size-k min-heap",
              "Merge k sorted lists with a heap; analyze the complexity"
            ],
            "tools": ["python3", "heapq"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Python docs (heapq)", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Self-Balancing Trees",
            "d": "AVL and red-black: rotations that keep the O(log n) promise.",
            "lv": 3,
            "time": "~6h",
            "tip": "Learn rotations and invariants conceptually; use library implementations in practice. Interviewers want the 'why balanced' story, not pointer surgery from memory.",
            "learn": [
              "Balance factor and single/double rotations",
              "AVL: strict height balance, fast lookups",
              "Red-black: color invariants, faster updates, library favorite",
              "Where they live: ordered maps/sets in every standard library"
            ],
            "do": [
              "Predict rotations for insertions on VisuAlgo before revealing",
              "Implement a single rotation by hand to feel the pointer rewiring",
              "Benchmark ordered-map ops vs hash map on sorted workloads"
            ],
            "tools": ["VisuAlgo", "python3"],
            "res": [
              ["USF Visualizations", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "Tries",
            "d": "Prefix trees: autocomplete and word games in O(word length).",
            "lv": 2,
            "time": "~4h",
            "tip": "Trie nodes need an end-of-word flag. Without it, 'app' and 'apple' are indistinguishable, and half your test cases fail mysteriously.",
            "learn": [
              "Node-per-character structure and terminal markers",
              "Insert, search, and prefix listing",
              "Wildcard search with backtracking over children",
              "Memory cost vs hash map trade-offs"
            ],
            "do": [
              "Implement a trie with insert/search/startsWith",
              "Build autocomplete over a word list; compare against linear scan",
              "Add '.' wildcard search using DFS over children"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["NeetCode", "https://neetcode.io"]
            ]
          }
        ]
      },
      {
        "t": "Graphs",
        "d": "Networks, maps, dependencies: model it as nodes and edges, then traverse.",
        "lv": 2,
        "res": [
          ["VisuAlgo", "https://visualgo.net"],
          ["Graphs (CP-Algorithms)", "https://cp-algorithms.com"]
        ],
        "children": [
          {
            "t": "Graph Representations",
            "d": "Adjacency list vs matrix: choose based on density, not habit.",
            "lv": 2,
            "time": "~3h",
            "tip": "Default to adjacency lists. Reach for a matrix only for dense graphs or constant-time edge queries; on sparse graphs it's a memory disaster.",
            "learn": [
              "Adjacency list, adjacency matrix, edge list",
              "Directed vs undirected storage differences",
              "Space/time trade-offs per representation",
              "Building graphs from edge lists in code"
            ],
            "do": [
              "Implement all three representations for the same graph",
              "Measure memory of matrix vs list on a sparse 10k-node graph",
              "Convert an edge list into an adjacency list idiomatically"
            ],
            "tools": ["python3", "defaultdict"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Graphs (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "BFS & DFS on Graphs",
            "d": "Two traversals that solve connectivity, components, and shortest paths.",
            "lv": 2,
            "time": "~5h",
            "tip": "The visited set is not optional on graphs like it is on trees. Skip it and a single cycle turns your traversal into an infinite loop.",
            "learn": [
              "DFS recursion vs explicit stack; BFS with a queue",
              "Connected components via repeated traversal",
              "BFS shortest path on unweighted graphs",
              "Grid-as-graph: neighbors from coordinates"
            ],
            "do": [
              "Implement iterative DFS and BFS on an adjacency list",
              "Solve 'number of islands' treating the grid as a graph",
              "Find all connected components and size the largest"
            ],
            "tools": ["python3", "collections.deque", "LeetCode"],
            "res": [
              ["Number of Islands (LeetCode)", "https://leetcode.com/problems/number-of-islands/"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "Cycle Detection & Topological Sort",
            "d": "Can this be ordered? The question behind build systems and course prerequisites.",
            "lv": 3,
            "time": "~4h",
            "tip": "Topological order exists if and only if the graph is a DAG. If your Kahn's algorithm outputs fewer nodes than exist, you've found a cycle, not a bug.",
            "learn": [
              "Cycle detection with DFS colors (white/gray/black)",
              "Kahn's algorithm: indegree-driven ordering",
              "DFS-based topological sort via finish times",
              "Real uses: build order, task scheduling, dependency resolution"
            ],
            "do": [
              "Detect a cycle with three-color DFS",
              "Implement Kahn's algorithm; test on a graph with a cycle",
              "Model course prerequisites and output a valid order"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Topological sort (CP-Algorithms)", "https://cp-algorithms.com"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Shortest Paths: Dijkstra & Bellman-Ford",
            "d": "Weighted graphs need smarter traversal: the priority-queue classic and its negative-weight sibling.",
            "lv": 3,
            "time": "~6h",
            "tip": "Dijkstra with a binary heap is O((V+E) log V), but it silently returns wrong answers on negative edges. Bellman-Ford handles them and detects negative cycles at O(VE).",
            "learn": [
              "Dijkstra: greedy expansion via priority queue",
              "Why negative edges break Dijkstra's greedy choice",
              "Bellman-Ford relaxation and negative-cycle detection",
              "Path reconstruction with parent pointers"
            ],
            "do": [
              "Implement Dijkstra; verify against brute force on random graphs",
              "Break Dijkstra with a negative edge; fix with Bellman-Ford",
              "Reconstruct and print the actual shortest path, not just its length"
            ],
            "tools": ["python3", "heapq"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Shortest paths (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Minimum Spanning Trees & Union-Find",
            "d": "Connect everything cheapest: Kruskal, Prim, and the disjoint-set engine.",
            "lv": 3,
            "time": "~5h",
            "tip": "Union-Find with path compression and union by rank is effectively O(1) per op. It's the highest-leverage 'advanced' structure: tiny code, huge problem coverage.",
            "learn": [
              "MST: definition and the cut property intuition",
              "Kruskal: sort edges, union components",
              "Prim: grow the tree with a priority queue",
              "Union-Find: path compression + union by rank"
            ],
            "do": [
              "Implement Union-Find from scratch with both optimizations",
              "Implement Kruskal's; verify MST weight against brute force on small graphs",
              "Solve a 'connected components with queries' problem using only Union-Find"
            ],
            "tools": ["python3"],
            "res": [
              ["Disjoint Set Union (CP-Algorithms)", "https://cp-algorithms.com"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          }
        ]
      },
      {
        "t": "Dynamic Programming",
        "d": "Turn exponential recursion into polynomial solutions with memory.",
        "lv": 3,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["DP (CP-Algorithms)", "https://cp-algorithms.com"]
        ],
        "children": [
          {
            "t": "Memoization vs Tabulation",
            "d": "Two ways to stop recomputing: cache the recursion, or build the table.",
            "lv": 2,
            "time": "~4h",
            "tip": "Start every DP problem with memoized recursion; it's the direct translation of the recurrence. Convert to tabulation later for speed and space wins.",
            "learn": [
              "Overlapping subproblems: the signal that DP applies",
              "Top-down memoization: recursion plus a cache",
              "Bottom-up tabulation: iteration order matters",
              "Space optimization: keeping only the rows you need"
            ],
            "do": [
              "Take naive Fibonacci to memoized to tabulated to O(1) space",
              "Solve climbing stairs both ways; compare code shape",
              "Profile recursion depth limits to feel why tabulation scales further"
            ],
            "tools": ["python3", "functools.lru_cache"],
            "res": [
              ["Climbing Stairs (LeetCode)", "https://leetcode.com/problems/climbing-stairs/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "1-D DP Patterns",
            "d": "House robber, coin change, LIS: the linear patterns that recur everywhere.",
            "lv": 3,
            "time": "~6h",
            "tip": "Define dp[i] in words before writing code ('max money up to house i'). If you can't say what the state means, the transition will be wrong.",
            "learn": [
              "State definition as the critical first step",
              "House robber: the 'take or skip' transition",
              "Coin change: min coins and counting combinations",
              "Longest increasing subsequence: O(n^2) and O(n log n)"
            ],
            "do": [
              "Solve house robber, then house robber II (circular); spot the twist",
              "Solve coin change both min-coins and count-ways variants",
              "Implement LIS in O(n log n) with patience sorting"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["DP (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "2-D DP: Grids & Subsequences",
            "d": "Unique paths, LCS, edit distance: when state needs two dimensions.",
            "lv": 3,
            "time": "~6h",
            "tip": "Draw the table for a tiny input and fill it by hand first. The recurrence reveals itself in the table; staring at code hoping for insight is backwards.",
            "learn": [
              "Grid DP: paths with obstacles and min-cost variants",
              "LCS as the template for sequence alignment",
              "Edit distance: insert/delete/replace as transitions",
              "Space optimization from O(nm) to O(min(n,m))"
            ],
            "do": [
              "Fill a unique-paths table by hand for a 3x4 grid, then code it",
              "Implement edit distance; trace the operations for kitten->sitting",
              "Optimize LCS space to two rows and verify identical answers"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["DP (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "The Knapsack Family",
            "d": "0/1, unbounded, and fractional: the most reusable DP template in existence.",
            "lv": 3,
            "time": "~5h",
            "tip": "0/1 knapsack iterates items outer, capacity inner, backwards. Unbounded iterates capacity inner, forwards. Swap the loops and you silently solve the wrong variant.",
            "learn": [
              "0/1 knapsack: take-or-skip with 1-D backward iteration",
              "Unbounded knapsack: reuse allowed, forward iteration",
              "Fractional knapsack: greedy works, and why",
              "Subset sum and partition as knapsack disguises"
            ],
            "do": [
              "Implement 0/1 knapsack; then break it by iterating forward and explain why",
              "Solve partition-equal-subset-sum as a knapsack",
              "Compare fractional (greedy) vs 0/1 (DP) answers on the same items"
            ],
            "tools": ["python3"],
            "res": [
              ["Knapsack (CP-Algorithms)", "https://cp-algorithms.com"],
              ["NeetCode", "https://neetcode.io"]
            ]
          }
        ]
      },
      {
        "t": "Problem-Solving Patterns",
        "d": "Recognize the shape of a problem, apply the template.",
        "lv": 2,
        "res": [
          ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"],
          ["NeetCode", "https://neetcode.io"]
        ],
        "children": [
          {
            "t": "Two Pointers",
            "d": "Pointers from both ends (or in step) that turn O(n^2) into O(n).",
            "lv": 2,
            "time": "~4h",
            "tip": "Two pointers need a sorted array or a monotonic reason to move one pointer. If you can't justify why moving left (not right) is safe, the technique doesn't apply.",
            "learn": [
              "Converging pointers on sorted arrays",
              "The sortedness requirement and why it matters",
              "Partition-style pointers (Dutch national flag)",
              "Two pointers vs binary search: when each wins"
            ],
            "do": [
              "Solve 3Sum handling duplicates without a hash set",
              "Solve 'container with most water' and prove the pointer move",
              "Partition an array around a pivot in place"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Two Sum (LeetCode)", "https://leetcode.com/problems/two-sum/"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Sliding Window",
            "d": "A window that glides instead of restarting: substring problems in O(n).",
            "lv": 2,
            "time": "~5h",
            "tip": "Fixed window: expand by one, shrink by one, in lockstep. Variable window: expand right, shrink left while invalid. Mixing the two templates is the #1 sliding-window bug.",
            "learn": [
              "Fixed-size windows: max sum of k elements",
              "Variable-size windows: longest/shortest satisfying a condition",
              "Frequency-map windows for character problems",
              "Monotonic deque for sliding-window maximum"
            ],
            "do": [
              "Solve longest substring without repeating characters",
              "Solve minimum window substring with a needs/have counter",
              "Implement sliding window maximum with a monotonic deque"
            ],
            "tools": ["python3", "collections.deque"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Fast & Slow Pointers",
            "d": "The tortoise and the hare: cycles, midpoints, and happy numbers.",
            "lv": 2,
            "time": "~3h",
            "tip": "Fast/slow works on any sequence with a deterministic 'next' function, not just linked lists. Happy numbers and array cycles are the same trick.",
            "learn": [
              "Cycle detection and finding the cycle start",
              "Middle of a list in one pass",
              "Generalizing to functional sequences (happy numbers)",
              "Why the pointers must meet if a cycle exists"
            ],
            "do": [
              "Find the middle node without knowing the length",
              "Detect a cycle and locate its entry point",
              "Solve happy-number detection with fast/slow instead of a set"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Merge Intervals",
            "d": "Sort by start, sweep once: overlapping ranges tamed.",
            "lv": 2,
            "time": "~3h",
            "tip": "Sort by start time first; everything else is bookkeeping. Forgetting to sort is the classic merge-intervals failure, and the tests will catch it.",
            "learn": [
              "Sorting intervals and the single-pass merge",
              "Overlap detection: when does the next interval extend the current?",
              "Insert interval and meeting-rooms variants",
              "Sweep-line thinking as the generalization"
            ],
            "do": [
              "Implement merge intervals from scratch",
              "Solve insert-interval reusing the merge logic",
              "Solve meeting rooms II with a min-heap of end times"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Greedy Thinking",
            "d": "Locally optimal choices that happen to be globally optimal. Prove it first.",
            "lv": 2,
            "time": "~4h",
            "tip": "Greedy solutions are one line of insight plus a proof. Code the insight in five minutes, spend twenty proving the exchange argument, or you'll fail hidden tests.",
            "learn": [
              "Greedy choice property and optimal substructure",
              "Interval scheduling and activity selection",
              "Jump game: the furthest-reachable greedy",
              "When greedy fails: coin change with arbitrary denominations"
            ],
            "do": [
              "Solve jump game with the greedy furthest-reach scan",
              "Find a coin system where greedy fails; explain why",
              "Solve gas station with the total/deficit greedy"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["Greedy (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Backtracking",
            "d": "Choose, explore, unchoose: exhaustive search with pruning.",
            "lv": 3,
            "time": "~6h",
            "tip": "The unchoose step is the whole technique. Comment it explicitly ('// backtrack') or you will forget it under pressure and corrupt every sibling branch.",
            "learn": [
              "The backtracking skeleton: choose/explore/unchoose",
              "Subsets, permutations, and combination sum as archetypes",
              "Pruning with constraints to cut the search tree",
              "Backtracking vs plain DFS: state restoration is the difference"
            ],
            "do": [
              "Generate all subsets, then all permutations, from one template",
              "Solve combination sum with duplicate handling",
              "Add pruning to N-Queens and count the node reduction"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["Backtracking (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Divide & Conquer",
            "d": "Split, solve, combine: the strategy behind merge sort and friends.",
            "lv": 2,
            "time": "~4h",
            "tip": "The combine step is where divide-and-conquer problems live or die. Splitting is trivial; merging results correctly (and efficiently) is the skill.",
            "learn": [
              "The three phases: divide, conquer, combine",
              "Master theorem for analyzing the recurrence",
              "Merge sort and quicksort as the canonical examples",
              "Closest pair and other non-obvious applications"
            ],
            "do": [
              "Solve the recurrence T(n) = 2T(n/2) + O(n) with the master theorem",
              "Implement merge sort focusing on a clean merge step",
              "Solve 'majority element' with divide and conquer, then compare to Boyer-Moore"
            ],
            "tools": ["python3"],
            "res": [
              ["VisuAlgo", "https://visualgo.net"],
              ["Divide and conquer (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Bit Manipulation",
            "d": "XOR, masks, and shifts: constant-space tricks that interviewers love.",
            "lv": 2,
            "time": "~4h",
            "tip": "`n & (n-1)` clears the lowest set bit; `n & -n` isolates it. These two identities solve a shocking number of bit problems.",
            "learn": [
              "AND/OR/XOR/NOT and shift operators",
              "Masks for setting, clearing, toggling, testing bits",
              "XOR properties: self-inverse, commutative, `x^x=0`",
              "Brian Kernighan's bit-counting and power-of-two checks"
            ],
            "do": [
              "Find the single number with XOR; extend to 'single number II'",
              "Count set bits three ways; check power of two with one expression",
              "Reverse bits of a 32-bit integer"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Bit manipulation (CP-Algorithms)", "https://cp-algorithms.com"],
              ["NeetCode", "https://neetcode.io"]
            ]
          }
        ]
      },
      {
        "t": "Interview Readiness",
        "d": "Turn knowledge into offers: drills, repetition, and performance.",
        "lv": 3,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
        ],
        "children": [
          {
            "t": "Complexity Analysis Drills",
            "d": "State time and space for any code in under a minute, out loud.",
            "lv": 3,
            "time": "~3h",
            "tip": "Interviewers ask 'can you do better?' about complexity, not code. Practice answering in one sentence: 'O(n log n) time, O(n) space, dominated by the sort.'",
            "learn": [
              "Rapid Big-O reading of loops, recursion, and library calls",
              "Amortized analysis in one sentence",
              "Space analysis including the call stack",
              "Trade-off narration: what you'd sacrifice and why"
            ],
            "do": [
              "Take 20 solved problems; state complexities from memory, then verify",
              "Explain amortized O(1) append to a rubber duck in 60 seconds",
              "For 5 problems, propose the time-space trade-off alternative"
            ],
            "tools": ["python3", "bigocheatsheet.com"],
            "res": [
              ["Big-O Cheat Sheet", "https://www.bigocheatsheet.com"],
              ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
            ]
          },
          {
            "t": "The Spaced-Repetition Problem Loop",
            "d": "Solving once is entertainment. Re-solving on a schedule is learning.",
            "lv": 3,
            "time": "~2h",
            "tip": "If you can't re-solve a problem cleanly after a week, you memorized it. The re-solve list is the difference between 200 solved and 200 mastered.",
            "learn": [
              "Why recognition fades: the forgetting curve for patterns",
              "The 1-day / 1-week / 1-month re-solve schedule",
              "Tagging problems by pattern, not by problem name",
              "Blind re-solving: no peeking at your old solution"
            ],
            "do": [
              "Build a re-solve list from your last 30 problems, tagged by pattern",
              "Re-solve 5 week-old problems blind; note which patterns stuck",
              "Set up spaced repetition (Anki or a simple spreadsheet) for patterns"
            ],
            "tools": ["Anki", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Mock Interviews & Thinking Aloud",
            "d": "Perform under pressure: narrate, clarify, and recover from being stuck.",
            "lv": 3,
            "time": "~4h",
            "tip": "Silence is the real failure mode. Interviewers can rescue a stuck candidate who narrates, but they can't read a silent one's mind. Talk through everything.",
            "learn": [
              "The 5-minute clarification ritual: inputs, edge cases, constraints",
              "Narrating trade-offs before committing to an approach",
              "Getting unstuck: brute force first, then optimize aloud",
              "Receiving hints gracefully and incorporating them"
            ],
            "do": [
              "Do a 45-minute mock with a peer: 5 clarify, 30 code, 10 review",
              "Record yourself solving; count the silent gaps over 10 seconds",
              "Practice the 'stuck protocol': restate, simplify, brute-force, optimize"
            ],
            "tools": ["pramp", "LeetCode"],
            "res": [
              ["Pramp", "https://www.pramp.com"],
              ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
