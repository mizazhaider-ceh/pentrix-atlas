/* Atlas roadmap data: LeetCode (leetcode)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[{t,u}], pre[], badge } */
ROADMAPS.push({
  "id": "leetcode",
  "title": "LeetCode",
  "icon": "🏆",
  "color": "#e11d48",
  "tagline": "From your first Easy to confident Hard, systematically.",
  "desc": "Systematic LeetCode preparation: master the core patterns (two pointers, sliding window, BFS/DFS, DP), follow a real study plan, and rehearse mock interviews.",
  "kind": "skill",
  "root": {
    "t": "LeetCode Mastery",
    "d": "A systematic path from your first Easy to confident Hard.",
    "res": [
      ["LeetCode", "https://leetcode.com"],
      ["NeetCode", "https://neetcode.io"]
    ],
    "children": [
      {
        "t": "Getting Started",
        "d": "Set yourself up for success before solving anything.",
        "lv": 1,
        "res": [
          ["LeetCode", "https://leetcode.com"],
          ["NeetCode", "https://neetcode.io"]
        ],
        "children": [
          {
            "t": "What LeetCode Is & How It Works",
            "d": "The platform, the judge, and how problems are actually graded.",
            "lv": 1,
            "time": "~2h",
            "tip": "The judge cares about correctness within time limits, not elegance. A working O(n^2) that passes is infinitely better than a half-written O(n).",
            "learn": [
              "Problem anatomy: statement, examples, constraints, follow-ups",
              "How the online judge tests (hidden cases, time/memory limits)",
              "Difficulty labels and what Easy/Medium/Hard really mean",
              "Submissions, runtime distributions, and reading others' solutions"
            ],
            "do": [
              "Create an account and solve your first Easy (try Two Sum)",
              "Read the constraints of 5 problems before attempting them",
              "Study the top-voted solution of a problem you solved; note the gap"
            ],
            "tools": ["LeetCode"],
            "res": [
              ["LeetCode", "https://leetcode.com"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Picking Your Interview Language",
            "d": "One language, deeply known, beats three languages half-known.",
            "lv": 1,
            "time": "~3h",
            "tip": "Python wins for interviews: terse, readable, huge standard library. But pick the language you already think in; relearning syntax mid-interview is fatal.",
            "learn": [
              "Python vs Java vs C++ vs JavaScript for interviews",
              "The standard-library tools that save minutes (Counter, heapq, deque, bisect)",
              "Recursion limits and performance quirks of your chosen language",
              "Writing clean, idiomatic code under time pressure"
            ],
            "do": [
              "Commit to one language for the entire prep",
              "Solve 5 Easies focusing on stdlib fluency, not algorithms",
              "Time yourself writing binary search from memory in your language"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Python docs", "https://docs.python.org/3/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "What Coding Patterns Are",
            "d": "Most problems are variations on ~15 patterns. Learn the patterns, not the problems.",
            "lv": 1,
            "time": "~2h",
            "tip": "Newcomers memorize 200 solutions and freeze on problem 201. Pattern learners recognize 'this is a sliding window problem' in 30 seconds. Be the second kind.",
            "learn": [
              "The pattern thesis: problem families share solution skeletons",
              "The core 15: two pointers, sliding window, fast/slow, merge intervals, BFS/DFS, backtracking, DP, and more",
              "How to tag a problem by pattern after solving it",
              "Why the same pattern appears across Easy, Medium, and Hard"
            ],
            "do": [
              "Read through a patterns list and match 10 solved problems to patterns",
              "Take one pattern (two pointers) and solve 5 problems using only it",
              "Start a pattern journal: one page per pattern with its template"
            ],
            "tools": ["LeetCode"],
            "res": [
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Reading Problems & Constraints",
            "d": "The constraints choose your algorithm. Learn to let them.",
            "lv": 1,
            "time": "~2h",
            "tip": "Read constraints before examples. n <= 10^5 with a time limit means O(n log n); the examples only show you the happy path.",
            "learn": [
              "Extracting n, value ranges, and special guarantees",
              "The constraint-to-complexity cheat sheet",
              "Spotting hidden structure: sorted? tree? DAG? overlapping subproblems?",
              "Clarifying questions you'd ask a real interviewer"
            ],
            "do": [
              "For 10 problems, write the intended complexity from constraints alone",
              "List the edge cases (empty, single, max size) for 5 problems",
              "Rewrite one vague problem statement as precise input/output contracts"
            ],
            "tools": ["LeetCode"],
            "res": [
              ["LeetCode problem set", "https://leetcode.com/problemset/"],
              ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
            ]
          }
        ]
      },
      {
        "t": "Arrays, Hashing & Two Pointers",
        "d": "The highest-ROI patterns: learn these first and never look back.",
        "lv": 1,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
        ],
        "children": [
          {
            "t": "Frequency Maps: Duplicates & Anagrams",
            "d": "Count things with a hash map: the skeleton key of Easy problems.",
            "lv": 1,
            "time": "~4h",
            "tip": "Counter (or a dict) plus one pass solves an absurd number of problems. If the problem mentions 'how many' or 'how often', start here.",
            "learn": [
              "Frequency counting with hash maps",
              "Contains Duplicate: the membership-check archetype",
              "Valid Anagram: comparing frequency profiles",
              "Group Anagrams: canonical keys (sorted tuple vs count tuple)"
            ],
            "do": [
              "Solve Contains Duplicate, Valid Anagram, Group Anagrams",
              "Compare sorted-string keys vs 26-count keys for grouping; time both",
              "Solve Top K Frequent Elements with bucket sort in O(n)"
            ],
            "tools": ["python3", "collections.Counter", "LeetCode"],
            "res": [
              ["Two Sum (LeetCode)", "https://leetcode.com/problems/two-sum/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Two Sum & the Hash Map Lookup",
            "d": "One pass, one map: the most-asked pattern in interview history.",
            "lv": 1,
            "time": "~3h",
            "tip": "Store what you need, not what you've seen: map value -> index as you go, and check for the complement. One pass, no second loop.",
            "learn": [
              "Complement lookup: for x, have we seen target - x?",
              "One-pass vs two-pass and why one pass wins",
              "Variants: Two Sum II (sorted), 2Sum in BST, pair counting",
              "Hash map vs two pointers: which fits the input?"
            ],
            "do": [
              "Solve Two Sum with the one-pass hash map",
              "Solve Two Sum II with converging pointers on the sorted array",
              "Extend to counting all pairs that sum to target with duplicates"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Two Sum (LeetCode)", "https://leetcode.com/problems/two-sum/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Top K Frequent Elements",
            "d": "Bucket sort in disguise: top-K without a full sort.",
            "lv": 2,
            "time": "~4h",
            "tip": "Frequencies are bounded by n, so you can bucket by count and get O(n). Reaching for a heap first works (O(n log k)) but the bucket insight is the interview flex.",
            "learn": [
              "Frequency map then bucket-by-count",
              "Why bucket sort applies (counts range 1..n)",
              "Heap alternative: O(n log k) and when it's fine",
              "Generalizing: top-K patterns across problems"
            ],
            "do": [
              "Solve with bucket sort in O(n); then with a heap in O(n log k)",
              "Adapt the pattern to 'k most frequent words' with tie-breaking",
              "Solve Kth Largest Element with quickselect for contrast"
            ],
            "tools": ["python3", "heapq", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Converging Pointers: Valid Palindrome",
            "d": "Two pointers walking inward: palindromes, and the template behind them.",
            "lv": 1,
            "time": "~3h",
            "tip": "Normalize first (lowercase, alphanumeric only), then converge. Doing both in one loop is clever and bug-prone; clarity beats cleverness here.",
            "learn": [
              "The converging-pointers template",
              "String normalization: case, non-alphanumerics, Unicode",
              "Skipping logic without extra space",
              "Palindrome variants: valid after one deletion, longest palindromic substring"
            ],
            "do": [
              "Solve Valid Palindrome with two pointers",
              "Extend to 'valid palindrome II' (one deletion allowed)",
              "Solve 'reverse only letters' with the same template"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "3Sum & Container With Most Water",
            "d": "Two pointers at full power: sorted arrays, area, and triplets.",
            "lv": 2,
            "time": "~5h",
            "tip": "3Sum's difficulty is duplicate-skipping, not the pointers. Sort, fix one element, two-pointer the rest, and skip equal neighbors religiously.",
            "learn": [
              "Sorting as the enabler of the two-pointer technique",
              "3Sum: fix one, converge two, skip duplicates",
              "Container With Most Water: why moving the shorter side is safe",
              "Trapping Rain Water as the Hard-level graduation"
            ],
            "do": [
              "Solve 3Sum with careful duplicate handling",
              "Solve Container With Most Water; write the proof of the pointer move",
              "Attempt Trapping Rain Water with two pointers after the O(n)-space version"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          }
        ]
      },
      {
        "t": "Sliding Window & Stacks",
        "d": "Windows that glide, stacks that remember: substring and nesting mastery.",
        "lv": 2,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
        ],
        "children": [
          {
            "t": "Sliding Window Basics: Buy/Sell & Longest Substring",
            "d": "Expand right, shrink left: O(n) substring problems without re-scanning.",
            "lv": 2,
            "time": "~5h",
            "tip": "Best Time to Buy and Sell Stock is a sliding window with the left pointer at the minimum. Seeing it as a window problem (not a DP problem) unlocks the whole family.",
            "learn": [
              "Fixed vs variable window templates",
              "Buy/sell as min-tracking window",
              "Longest substring without repeating: the set/map window",
              "The 'shrink while invalid' loop as the core mechanic"
            ],
            "do": [
              "Solve Best Time to Buy and Sell Stock as a window",
              "Solve Longest Substring Without Repeating Characters",
              "Solve Longest Repeating Character Replacement (window + max frequency)"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Minimum Window Substring",
            "d": "The Hard that teaches every window trick: needs, haves, and shrinking.",
            "lv": 3,
            "time": "~5h",
            "tip": "Track 'formed' = how many distinct required chars are satisfied. Expand until formed == required, then shrink greedily. The template generalizes to a dozen problems.",
            "learn": [
              "The needs/have frequency-map technique",
              "The formed counter for O(1) validity checks",
              "Shrinking to minimality after each valid expansion",
              "Generalizing to permutation-in-string and find-all-anagrams"
            ],
            "do": [
              "Solve Minimum Window Substring with the template",
              "Reuse the template for Permutation in String",
              "Solve Find All Anagrams with a fixed-size variant"
            ],
            "tools": ["python3", "collections.Counter", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Monotonic Structures: Window Maximum & Daily Temperatures",
            "d": "A deque that stays sorted: the trick behind Hard-level windows and stacks.",
            "lv": 3,
            "time": "~5h",
            "tip": "The monotonic deque stores indices of candidates in decreasing value order, evicting smaller values as new ones arrive. Each element enters and leaves once: O(n) total.",
            "learn": [
              "Monotonic decreasing deque mechanics",
              "Sliding Window Maximum in O(n)",
              "Daily Temperatures as monotonic-stack sibling",
              "Largest Rectangle in Histogram as the graduation problem"
            ],
            "do": [
              "Solve Sliding Window Maximum with a deque",
              "Solve Daily Temperatures with a monotonic stack; compare shapes",
              "Attempt Largest Rectangle in Histogram after both"
            ],
            "tools": ["python3", "collections.deque", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Valid Parentheses & the Stack Template",
            "d": "Push opens, match closes: the nesting pattern in its purest form.",
            "lv": 1,
            "time": "~3h",
            "tip": "Map closers to openers in a dict. The algorithm becomes three lines: push opens, on closer check top matches, end with empty stack. Edge cases evaporate.",
            "learn": [
              "The stack template for matching/nesting problems",
              "The closer-to-opener mapping trick",
              "Early exits: odd length, closer on empty stack",
              "Extensions: min insertions, longest valid parentheses"
            ],
            "do": [
              "Solve Valid Parentheses with the mapping dict",
              "Solve 'minimum add to make valid' counting without a stack",
              "Generate Parentheses with backtracking for contrast"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Valid Parentheses (LeetCode)", "https://leetcode.com/problems/valid-parentheses/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Min Stack: Designing With State",
            "d": "Design problems start here: O(1) min with O(1) everything else.",
            "lv": 2,
            "time": "~3h",
            "tip": "Keep a parallel min-stack: push the running minimum alongside each value. Popping stays O(1) because the previous minimum is right there underneath.",
            "learn": [
              "Augmenting a structure with auxiliary state",
              "The parallel-stack technique",
              "Design-problem thinking: API first, invariants second",
              "Trade-offs: extra space vs recomputation"
            ],
            "do": [
              "Implement Min Stack with the auxiliary stack",
              "Implement it with single-stack tuples as an alternative",
              "Design a Max Stack variant and a Min Queue for contrast"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          }
        ]
      },
      {
        "t": "Binary Search",
        "d": "Beyond sorted arrays: search the answer space itself.",
        "lv": 2,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["Binary search (CP-Algorithms)", "https://cp-algorithms.com"]
        ],
        "children": [
          {
            "t": "Binary Search Template & Edge Cases",
            "d": "Fifteen lines everyone gets wrong once. Get them right forever.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use the half-open invariant: answer in [lo, hi). Loop while lo < hi, mid = (lo+hi)//2, and shrink to [lo, mid) or [mid+1, hi). No off-by-one survives this discipline.",
            "learn": [
              "The loop invariant that kills off-by-one bugs",
              "Midpoint computation avoiding overflow",
              "Lower bound and upper bound as the two fundamental queries",
              "Recognizing monotonic predicates beyond arrays"
            ],
            "do": [
              "Implement lower_bound and upper_bound from memory, three times",
              "Solve Binary Search, then First Bad Version with the bound variants",
              "Use bisect module equivalents and compare"
            ],
            "tools": ["python3", "bisect", "LeetCode"],
            "res": [
              ["Binary Search (LeetCode)", "https://leetcode.com/problems/binary-search/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Search in Rotated Sorted Array",
            "d": "Sorted, then twisted: find which half is still sorted.",
            "lv": 2,
            "time": "~4h",
            "tip": "In a rotated array, one half is always sorted. Identify it, check if the target lies in it, recurse there. The insight is one sentence; the code follows.",
            "learn": [
              "The 'one sorted half' invariant",
              "Finding minimum in rotated array as the sibling problem",
              "Handling duplicates (the worst-case O(n) caveat)",
              "2-D matrix search as the same idea in two dimensions"
            ],
            "do": [
              "Solve Search in Rotated Sorted Array",
              "Solve Find Minimum in Rotated Sorted Array",
              "Solve Search a 2D Matrix with the flattened-index trick"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Binary Search on Answer: Koko Eating Bananas",
            "d": "The pattern upgrade: binary-search the solution, not the input.",
            "lv": 3,
            "time": "~4h",
            "tip": "Define f(speed) = hours needed; it's monotonic decreasing in speed. Binary search the smallest speed with f(speed) <= h. Find the monotonic function, and the search writes itself.",
            "learn": [
              "Monotonic predicate over the answer space",
              "Defining the feasibility function",
              "Koko as the canonical template",
              "Capacity/shipping and split-array-largest-sum as siblings"
            ],
            "do": [
              "Solve Koko Eating Bananas with binary search on answer",
              "Solve 'capacity to ship packages' with the same template",
              "Solve 'split array largest sum' as the Hard graduation"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "Median of Two Sorted Arrays",
            "d": "The legendary Hard: O(log(min(m,n))) via partition binary search.",
            "lv": 3,
            "time": "~5h",
            "tip": "Don't memorize the code; memorize the partition idea: binary-search the cut in the smaller array so left halves are all <= right halves. The median falls out of the partition.",
            "learn": [
              "The partition invariant across two arrays",
              "Why binary search runs on the smaller array",
              "Edge cases: empty array, all elements on one side",
              "Kth-element generalization of the same technique"
            ],
            "do": [
              "Work the partition logic on paper for [1,3] and [2]",
              "Implement it; test odd/even totals and empty arrays",
              "Generalize to kth smallest of two sorted arrays"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          }
        ]
      },
      {
        "t": "Linked Lists",
        "d": "Pointer gymnastics made mechanical: reverse, detect, merge.",
        "lv": 2,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["Reverse Linked List (LeetCode)", "https://leetcode.com/problems/reverse-linked-list/"]
        ],
        "children": [
          {
            "t": "Reversal & the Dummy Node",
            "d": "Reverse in place with three pointers; erase edge cases with a dummy.",
            "lv": 2,
            "time": "~4h",
            "tip": "Draw prev/curr/next before coding. Reversal bugs are always a lost pointer, and the diagram shows exactly which assignment order breaks.",
            "learn": [
              "Iterative reversal: the three-pointer dance",
              "Recursive reversal and its stack cost",
              "Dummy head nodes for uniform edge handling",
              "Partial reversal (reverse between positions)"
            ],
            "do": [
              "Reverse a list iteratively and recursively",
              "Solve Reverse Linked List II (positions m to n)",
              "Solve Palindrome Linked List via reverse-second-half"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Reverse Linked List (LeetCode)", "https://leetcode.com/problems/reverse-linked-list/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Fast & Slow: Cycle Detection",
            "d": "Tortoise and hare: find cycles, midpoints, and kth-from-end.",
            "lv": 2,
            "time": "~3h",
            "tip": "To find the cycle's start: after they meet, reset one pointer to head and advance both at speed 1. They meet at the entry. It's math, not magic, but memorize the ritual.",
            "learn": [
              "Floyd's cycle detection and why meeting is guaranteed",
              "Finding the cycle entry point",
              "Midpoint and kth-from-end in one pass",
              "Happy numbers: the same trick off the list"
            ],
            "do": [
              "Solve Linked List Cycle and Cycle II (entry point)",
              "Find the middle node without counting length",
              "Remove nth node from end with the gap technique"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Merging Lists: Two & K",
            "d": "The dummy-node merge, then the heap-powered K-way graduation.",
            "lv": 3,
            "time": "~5h",
            "tip": "Merge K lists with a heap of list heads: O(N log k). The pairwise-merge alternative is O(Nk); know both, and know why the heap wins.",
            "learn": [
              "Two-list merge with a dummy tail pointer",
              "Merge K with a min-heap: complexity analysis",
              "Divide-and-conquer merging as the alternative",
              "Merge sort on linked lists (O(1) space!)"
            ],
            "do": [
              "Solve Merge Two Sorted Lists",
              "Solve Merge K Sorted Lists with a heap",
              "Implement merge sort on a linked list"
            ],
            "tools": ["python3", "heapq", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Reorder List & Deep Patterns",
            "d": "Combine the primitives: find mid, reverse half, interleave.",
            "lv": 3,
            "time": "~4h",
            "tip": "Hard linked-list problems are compositions of three moves: split, reverse, merge. Name which moves a problem needs before writing a line.",
            "learn": [
              "Reorder list as split-reverse-interleave",
              "Copy list with random pointer: the interleaving trick",
              "LRU cache: hash map plus doubly linked list",
              "Recognizing composition in problem statements"
            ],
            "do": [
              "Solve Reorder List using the three-move decomposition",
              "Solve Copy List with Random Pointer via node interleaving",
              "Implement LRU Cache (the classic design problem)"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          }
        ]
      },
      {
        "t": "Trees, Heaps & Tries",
        "d": "Recursion's home turf: traversals, ordering, prefixes, and priorities.",
        "lv": 2,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["VisuAlgo", "https://visualgo.net"]
        ],
        "children": [
          {
            "t": "Tree Traversals & Level Order",
            "d": "DFS orders and BFS levels: the vocabulary of tree problems.",
            "lv": 2,
            "time": "~4h",
            "tip": "Level order (BFS) is the odd one out: queue-based, not recursive. When a problem mentions levels, depth, or 'left to right', reach for the queue.",
            "learn": [
              "Pre/in/post-order: what each computes",
              "Level-order traversal with a queue",
              "Right-side view and zigzag as level-order variants",
              "Iterative traversals with an explicit stack"
            ],
            "do": [
              "Solve Binary Tree Level Order Traversal",
              "Solve Binary Tree Right Side View",
              "Implement iterative in-order traversal from scratch"
            ],
            "tools": ["python3", "collections.deque", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["VisuAlgo", "https://visualgo.net"]
            ]
          },
          {
            "t": "BST Properties & Lowest Common Ancestor",
            "d": "Ordered trees let you prune half the search at every step.",
            "lv": 2,
            "time": "~4h",
            "tip": "In a BST, LCA is a walk, not a search: go left if both targets are smaller, right if both larger, else you're standing on the answer.",
            "learn": [
              "BST invariant as a pruning tool",
              "LCA in a BST (the walk) vs in a binary tree (the recursion)",
              "Kth smallest via in-order counting",
              "Validating a BST with propagated bounds"
            ],
            "do": [
              "Solve LCA of a BST iteratively",
              "Solve LCA of a Binary Tree recursively; contrast the two",
              "Solve Kth Smallest Element in a BST"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Tree DP: Maximum Path Sum & Diameter",
            "d": "Post-order that returns answers upward: DP wearing a tree costume.",
            "lv": 3,
            "time": "~5h",
            "tip": "The pattern: recurse for children's best, update a global with the through-node candidate, return the best single-path upward. Diameter and max-path-sum are the same skeleton.",
            "learn": [
              "Post-order as bottom-up DP",
              "Global answer vs return value: the two-channel pattern",
              "Diameter of binary tree as the gentle introduction",
              "Maximum path sum with negative handling"
            ],
            "do": [
              "Solve Diameter of Binary Tree",
              "Solve Binary Tree Maximum Path Sum",
              "Solve Longest Univalue Path with the same skeleton"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Heaps: Kth Largest & Top K",
            "d": "Size-k heaps: streaming top-K without sorting the world.",
            "lv": 2,
            "time": "~4h",
            "tip": "For kth largest, keep a min-heap of size k: the top is your answer. It's O(n log k), and it works on streams where sorting is impossible.",
            "learn": [
              "heapq as a min-heap; negation for max-heap",
              "Kth largest in an array and in a stream",
              "Task scheduler: heap plus cooldown counting",
              "Median from data stream: the two-heap pattern"
            ],
            "do": [
              "Solve Kth Largest Element in an Array three ways (sort, heap, quickselect)",
              "Design Find Median from Data Stream with two heaps",
              "Solve Task Scheduler with heap + idle-slot math"
            ],
            "tools": ["python3", "heapq", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["Python docs (heapq)", "https://docs.python.org/3/"]
            ]
          },
          {
            "t": "Tries: Implement & Word Search II",
            "d": "Prefix trees meet backtracking: the Hard that combines everything.",
            "lv": 3,
            "time": "~5h",
            "tip": "Word Search II's trick is pruning with the trie: abandon DFS branches that aren't prefixes of any word. Without the trie it's exponential despair; with it, it's elegant.",
            "learn": [
              "Trie node structure and end-of-word marking",
              "Implement Trie: insert, search, startsWith",
              "Word Search II: trie-guided DFS with pruning",
              "Design Add and Search Words with wildcard DFS"
            ],
            "do": [
              "Implement a Trie class from scratch",
              "Solve Word Search II; measure pruning vs naive",
              "Solve Design Add and Search Words Data Structure"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          }
        ]
      },
      {
        "t": "Graphs, Backtracking & DP",
        "d": "Where interviews are won: the advanced patterns, made systematic.",
        "lv": 3,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
        ],
        "children": [
          {
            "t": "Graph BFS/DFS: Islands, Clone & Course Schedule",
            "d": "Grid DFS, graph cloning, and topological sort: the graph starter pack.",
            "lv": 3,
            "time": "~5h",
            "tip": "Treat grids as graphs where neighbors are computed, not stored. The moment you see 'grid' and 'connected', it's graph traversal with coordinate neighbors.",
            "learn": [
              "Grid-as-graph DFS with visited marking",
              "Clone Graph: hash map from old nodes to new",
              "Course Schedule: cycle detection via topological sort",
              "Pacific Atlantic: reverse the flow, DFS from the borders"
            ],
            "do": [
              "Solve Number of Islands with DFS",
              "Solve Clone Graph with the node map",
              "Solve Course Schedule with Kahn's algorithm"
            ],
            "tools": ["python3", "collections.deque", "LeetCode"],
            "res": [
              ["Number of Islands (LeetCode)", "https://leetcode.com/problems/number-of-islands/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "Advanced Graphs: Dijkstra & Union-Find",
            "d": "Weighted shortest paths and connectivity queries: the senior graph toolkit.",
            "lv": 3,
            "time": "~5h",
            "tip": "Network Delay Time is Dijkstra in disguise ('signal reaches all nodes' = shortest paths from source). Learn to spot shortest-path problems hiding in story form.",
            "learn": [
              "Dijkstra with heap: when weights are non-negative",
              "Network Delay Time as the template application",
              "Union-Find for dynamic connectivity",
              "Cheapest Flights Within K Stops: Bellman-Ford style relaxation"
            ],
            "do": [
              "Solve Network Delay Time with Dijkstra",
              "Solve Number of Provinces / redundant connection with Union-Find",
              "Solve Cheapest Flights Within K Stops with k-limited relaxation"
            ],
            "tools": ["python3", "heapq", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["Shortest paths (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          },
          {
            "t": "Backtracking Template: Subsets, Permutations, Combination Sum",
            "d": "Choose, explore, unchoose: one skeleton for the whole family.",
            "lv": 3,
            "time": "~6h",
            "tip": "Subsets vs permutations vs combinations differ only in the loop's start index and whether order matters. One template, three configurations; learn the template once.",
            "learn": [
              "The backtracking skeleton with explicit undo",
              "Subsets (include/skip), permutations (used-set), combinations (start index)",
              "Combination Sum: unlimited reuse with start-index control",
              "Pruning and duplicate-skipping in sorted input"
            ],
            "do": [
              "Solve Subsets, Permutations, and Combination Sum from one template",
              "Add duplicate handling to each; test on [1,2,2]",
              "Solve N-Queens as the 2-D graduation"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/"]
            ]
          },
          {
            "t": "1-D DP: Climbing Stairs to Coin Change",
            "d": "Define the state in words, write the transition, fill the table.",
            "lv": 3,
            "time": "~6h",
            "tip": "Every 1-D DP starts with the sentence 'dp[i] means...'. If that sentence is fuzzy, the transition will be wrong. Write the sentence first, always.",
            "learn": [
              "Climbing Stairs: the Fibonacci-disguised warm-up",
              "House Robber: the take-or-skip transition",
              "Coin Change: min coins and the unbounded variant",
              "LIS and Word Break as pattern stretchers"
            ],
            "do": [
              "Solve Climbing Stairs, House Robber, Coin Change",
              "Solve Word Break with memoization, then tabulation",
              "Solve Decode Ways; articulate the state sentence for each"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["Climbing Stairs (LeetCode)", "https://leetcode.com/problems/climbing-stairs/"],
              ["NeetCode", "https://neetcode.io"]
            ]
          },
          {
            "t": "2-D DP: LCS, Edit Distance & Unique Paths",
            "d": "Two-dimensional state for grids, strings, and intervals.",
            "lv": 3,
            "time": "~6h",
            "tip": "Fill a tiny table by hand before coding. The recurrence is visible in the table; the code is just transcription. Skip the hand-fill and you'll debug blind.",
            "learn": [
              "Unique Paths: grid DP with obstacles",
              "LCS: the match-or-skip recurrence",
              "Edit Distance: insert/delete/replace as three transitions",
              "Interval DP preview: Burst Balloons as the boss level"
            ],
            "do": [
              "Hand-fill tables for Unique Paths and LCS on tiny inputs",
              "Solve Edit Distance; trace kitten -> sitting operations",
              "Attempt Burst Balloons after the 2-D foundation is solid"
            ],
            "tools": ["python3", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["DP (CP-Algorithms)", "https://cp-algorithms.com"]
            ]
          }
        ]
      },
      {
        "t": "Study Plan & Mock Interviews",
        "d": "A system that turns practice into offers.",
        "lv": 3,
        "res": [
          ["NeetCode", "https://neetcode.io"],
          ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
        ],
        "children": [
          {
            "t": "The 8-Week Plan: Blind 75 to NeetCode 150",
            "d": "A curated sequence that covers every pattern without drowning you.",
            "lv": 2,
            "time": "~2h",
            "tip": "Blind 75 first (breadth of patterns), NeetCode 150 second (depth). Solving 400 random problems teaches less than 75 curated ones done twice.",
            "learn": [
              "Why curated lists beat random problem solving",
              "The 8-week schedule: patterns per week with review days",
              "Balancing new problems vs re-solving old ones",
              "Adjusting the plan for 4-week vs 12-week timelines"
            ],
            "do": [
              "Map the Blind 75 onto the patterns from this roadmap",
              "Build your 8-week calendar with daily targets and review slots",
              "Set a 'patterns mastered' tracker, not a 'problems solved' counter"
            ],
            "tools": ["NeetCode", "LeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["LeetCode problem set", "https://leetcode.com/problemset/"]
            ]
          },
          {
            "t": "Spaced Repetition & the Re-Solve List",
            "d": "Solving once is entertainment; re-solving on schedule is learning.",
            "lv": 3,
            "time": "~2h",
            "tip": "Re-solve blind: no peeking at your old solution. If you can't reproduce it in a week, you memorized the answer, not the pattern.",
            "learn": [
              "The forgetting curve applied to coding patterns",
              "The 1-day / 1-week / 1-month re-solve cadence",
              "Tagging by pattern so reviews target weaknesses",
              "What 'mastered' actually means: clean solve, optimal complexity, explained aloud"
            ],
            "do": [
              "Create a re-solve list from your last 30 solves, tagged by pattern",
              "Blind re-solve 5 week-old problems; log which patterns stuck",
              "Set up Anki or a spreadsheet for pattern-level spaced repetition"
            ],
            "tools": ["Anki", "NeetCode"],
            "res": [
              ["NeetCode", "https://neetcode.io"],
              ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
            ]
          },
          {
            "t": "Mock Interviews: Thinking Aloud",
            "d": "Perform under pressure: clarify, narrate, and recover from stuck.",
            "lv": 3,
            "time": "~4h",
            "tip": "Narrate continuously. Interviewers can rescue a stuck candidate who talks, but silence gives them nothing to work with. Thinking aloud is a graded skill.",
            "learn": [
              "The clarification ritual: inputs, edge cases, constraints, examples",
              "Stating approach and complexity before coding",
              "The stuck protocol: simplify, brute-force, then optimize",
              "Testing your code aloud with a dry run"
            ],
            "do": [
              "Do a timed 45-minute mock with a peer or on Pramp",
              "Record one session; count silences longer than 10 seconds",
              "Practice dry-running your code on a sample input out loud"
            ],
            "tools": ["pramp", "LeetCode"],
            "res": [
              ["Pramp", "https://www.pramp.com"],
              ["Tech Interview Handbook", "https://www.techinterviewhandbook.org/"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "Contests & Company Tags",
            "d": "Weekly contests for speed, company tags for targeting.",
            "lv": 3,
            "time": "~3h",
            "tip": "Contests train speed and ranking pressure, which mocks can't. But never let contest rating become the goal; pattern mastery is the goal, rating is a side effect.",
            "learn": [
              "LeetCode weekly/biweekly contests: format and strategy",
              "Upsolving: re-solving contest problems you missed, properly",
              "Company-tagged problem sets for targeted prep",
              "When to stop grinding and start interviewing"
            ],
            "do": [
              "Enter a weekly contest; upsolve every missed problem within 48h",
              "Build a company-tagged shortlist for 2 target companies",
              "Set your 'ready' criteria: e.g. 2 mediums in 45 min, twice in a row"
            ],
            "tools": ["LeetCode"],
            "res": [
              ["LeetCode", "https://leetcode.com"],
              ["NeetCode", "https://neetcode.io"]
            ]
          }
        ]
      }
    ]
  }
});
