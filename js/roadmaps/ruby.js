/* Atlas roadmap data: Ruby (ruby)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "ruby",
  "title": "Ruby",
  "icon": "🔴",
  "color": "#cc342d",
  "desc": "The language of programmer happiness: elegant syntax, blocks, expressive OOP, gems, and the metaprogramming that powers Rails.",
  "kind": "skill",
  "root": {
    "t": "Ruby",
    "d": "Master the Ruby language from first script to metaprogramming: syntax, blocks, OOP, gems, tooling, and concurrency.",
    "children": [
      {
        "t": "Ruby Setup & First Steps",
        "d": "Install Ruby cleanly, meet irb, and write your first scripts with Ruby's friendly syntax.",
        "lv": 1,
        "children": [
          {
            "t": "Why Ruby: Philosophy & Community",
            "d": "Ruby was designed for programmer happiness. Understand Matz's philosophy and where Ruby shines today before writing a line.",
            "lv": 1,
            "time": "~1h",
            "tip": "Ruby optimizes for the human reading the code, not the machine running it. If a Ruby idiom feels like magic, it is usually just the language removing ceremony.",
            "learn": [
              "Matz's design goal: a language that makes programmers happy and productive",
              "Where Ruby lives in 2026: Rails, scripting, DevOps tooling, and a warm community",
              "The current landscape: Ruby 4.x as the modern stable line"
            ],
            "do": [
              "Read the Ruby language homepage and note what the community values",
              "Find three well-known companies or tools built on Ruby",
              "Write down what draws you to Ruby vs the languages you already know"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby language homepage", "https://www.ruby-lang.org/en/"],
              ["Ruby documentation", "https://docs.ruby-lang.org/"]
            ]
          },
          {
            "t": "Installing Ruby with a Version Manager",
            "d": "Never use system Ruby for development. A version manager gives every project its own clean Ruby.",
            "lv": 1,
            "time": "~2h",
            "tip": "Pick one manager (rbenv, mise, or asdf) and commit to it. Half of all Ruby environment pain comes from two managers fighting over your PATH.",
            "learn": [
              "Why system Ruby is off-limits: permissions, versions, and gem conflicts",
              "Version managers compared: rbenv, RVM, mise, and asdf",
              "ruby -v and gem env: verifying your install is healthy"
            ],
            "do": [
              "Install a version manager and the latest stable Ruby through it",
              "Confirm ruby -v and which ruby point at the managed install",
              "Install a second Ruby version and switch between them"
            ],
            "tools": ["rbenv", "mise", "RVM"],
            "res": [
              ["Installing Ruby", "https://www.ruby-lang.org/en/documentation/installation/"],
              ["rbenv", "https://github.com/rbenv/rbenv"]
            ]
          },
          {
            "t": "irb: Your Interactive Playground",
            "d": "irb is a live Ruby console. Test every idea in seconds before committing it to a file.",
            "lv": 1,
            "time": "~1h",
            "tip": "When a method confuses you, open irb and poke at it with real objects. Five minutes of experimenting beats twenty minutes of guessing.",
            "learn": [
              "Starting irb, evaluating expressions, and reading return values",
              "Tab completion and inspecting objects with methods and ancestors",
              "Multiline input and why irb shows => after every expression"
            ],
            "do": [
              "Evaluate arithmetic, strings, and arrays in irb and predict each result first",
              "Inspect a string with .methods and find three methods you did not know",
              "Define a method in irb and call it with different arguments"
            ],
            "tools": ["irb"],
            "res": [
              ["Ruby in twenty minutes", "https://www.ruby-lang.org/en/documentation/quickstart/"]
            ]
          },
          {
            "t": "Your First Script: puts, print & p",
            "d": "Write and run .rb files. Learn the three output methods and what each reveals about your values.",
            "lv": 1,
            "time": "~2h",
            "tip": "puts calls to_s, p calls inspect. When debugging, always use p: it shows you the difference between \"5\" the string and 5 the integer.",
            "learn": [
              "Running scripts: ruby script.rb and the executable shebang line",
              "puts vs print vs p: newlines, to_s, and inspect",
              "Reading input with gets and chomp"
            ],
            "do": [
              "Write a script that greets the user by name read from gets.chomp",
              "Print the same value with puts, print, and p and compare the output",
              "Make the script executable with a shebang and run it directly"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby in twenty minutes", "https://www.ruby-lang.org/en/documentation/quickstart/"],
              ["Ruby core: IO#puts", "https://docs.ruby-lang.org/en/master/IO.html"]
            ]
          },
          {
            "t": "Comments & Naming Conventions",
            "d": "Ruby reads like English when you follow its conventions. Learn the naming rules that make Ruby code instantly recognizable.",
            "lv": 1,
            "time": "~1h",
            "tip": "Method names ending in ? return booleans and names ending in ! signal danger (mutation). This convention is load-bearing: experienced Rubyists read intent from the punctuation.",
            "learn": [
              "snake_case for methods and variables, CamelCase for classes and modules",
              "The ? and ! suffix conventions and what they promise the reader",
              "Comments (#), =begin/=end blocks, and documenting intent not mechanics"
            ],
            "do": [
              "Rename a badly-named script to follow Ruby conventions throughout",
              "Write three predicate methods ending in ? and two bang methods ending in !",
              "Review a Ruby file and spot every convention violation"
            ],
            "tools": ["Ruby", "RuboCop"],
            "res": [
              ["Ruby style guide", "https://rubystyle.guide/"]
            ]
          }
        ]
      },
      {
        "t": "Core Syntax & Data Types",
        "d": "Everything in Ruby is an object. Learn the core types, variables, operators, and ranges that every program is built from.",
        "lv": 1,
        "children": [
          {
            "t": "Variables & Constants",
            "d": "Local variables, instance variables, and constants: three scopes with three naming rules. Know which sigil means what.",
            "lv": 1,
            "time": "~2h",
            "tip": "Constants are only constant by convention: Ruby warns but still lets you reassign them. Treat ALL_CAPS names as promises you keep, not locks the language enforces.",
            "learn": [
              "Local variables, @instance variables, @@class variables, and $globals",
              "Constants: naming, reassignment warnings, and where they live",
              "Parallel assignment and swapping values without a temp variable"
            ],
            "do": [
              "Experiment with each variable type in irb and observe the scoping rules",
              "Reassign a constant and read the warning Ruby gives you",
              "Swap two variables with parallel assignment in one line"
            ],
            "tools": ["Ruby", "irb"],
            "res": [
              ["Ruby: variables and constants", "https://docs.ruby-lang.org/en/master/syntax/assignment_rdoc.html"]
            ]
          },
          {
            "t": "Numbers: Integers & Floats",
            "d": "Ruby integers never overflow and numeric coercion is explicit. Do math the Ruby way without surprises.",
            "lv": 1,
            "time": "~2h",
            "tip": "5 / 2 is 1 in Ruby, not 2.5. Integer division truncates; write 5 / 2.0 when you want a float. This bites every beginner exactly once.",
            "learn": [
              "Integer arithmetic, arbitrary precision, and Float behavior",
              "Integer division vs float division and the fdiv method",
              "Useful numeric methods: even?, odd?, times, upto, downto"
            ],
            "do": [
              "Compute with huge integers and confirm there is no overflow",
              "Trigger the integer division trap on purpose, then fix it two ways",
              "Use upto and downto to replace a manual counting loop"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Integer", "https://docs.ruby-lang.org/en/master/Integer.html"],
              ["Ruby core: Float", "https://docs.ruby-lang.org/en/master/Float.html"]
            ]
          },
          {
            "t": "Strings",
            "d": "Interpolation, heredocs, and a rich method set make Ruby strings a joy. Learn the idioms and the frozen_string_literal habit.",
            "lv": 1,
            "time": "~3h",
            "tip": "Add the frozen_string_literal magic comment to every file. Mutable string literals are a subtle performance and bug source; freezing them is free safety.",
            "learn": [
              "Single vs double quotes: interpolation and escapes only work in double quotes",
              "#{interpolation}, heredocs, and multiline string idioms",
              "Essential methods: split, join, gsub, strip, start_with?, include?"
            ],
            "do": [
              "Build a formatted report string using interpolation and heredocs",
              "Transform user input with strip, downcase, and gsub in a chain",
              "Add frozen_string_literal: true and confirm your code still passes"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: String", "https://docs.ruby-lang.org/en/master/String.html"]
            ]
          },
          {
            "t": "Symbols",
            "d": "Symbols are lightweight immutable names. Learn when a symbol beats a string and why Rubyists reach for them as keys and identifiers.",
            "lv": 1,
            "time": "~2h",
            "tip": "Use symbols for things that are names (hash keys, method names, states) and strings for things that are data (user input, file contents). Mixing them up wastes memory and confuses readers.",
            "learn": [
              ":symbol syntax, what makes symbols immutable and unique",
              "Symbols vs strings: identity, memory, and performance",
              ":to_proc shorthand: &:upcase and how it works"
            ],
            "do": [
              "Prove two identical symbols are the same object with equal? and object_id",
              "Rewrite a strings-as-keys hash using symbols",
              "Use &:method shorthand on an array and explain what Ruby expands it to"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Symbol", "https://docs.ruby-lang.org/en/master/Symbol.html"]
            ]
          },
          {
            "t": "Arrays",
            "d": "Ordered, dynamic, and packed with methods. Arrays are the workhorse collection: index them, slice them, transform them.",
            "lv": 1,
            "time": "~3h",
            "tip": "Negative indices count from the end: arr[-1] is the last element. It is idiomatic, fast, and far clearer than arr[arr.length - 1].",
            "learn": [
              "Literals, indexing, negative indices, and ranges as slices",
              "Mutating vs non-mutating: push/pop/shift/unshift and their return values",
              "Core methods: each, map, select, include?, flatten, uniq, sort, sample"
            ],
            "do": [
              "Build and manipulate an array using only push, pop, shift, and unshift",
              "Slice arrays with ranges and negative indices until it feels natural",
              "Chain map, select, and sort to transform a list of numbers"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Array", "https://docs.ruby-lang.org/en/master/Array.html"]
            ]
          },
          {
            "t": "Hashes",
            "d": "Ruby's key-value collection and the backbone of options, configs, and JSON-like data. Master the modern syntax and the essential methods.",
            "lv": 1,
            "time": "~3h",
            "tip": "The old :key => value and new key: value syntaxes are identical for symbol keys. Use the new one; the old one survives only for non-symbol keys.",
            "learn": [
              "Hash literals, symbol keys, and the modern key: value syntax",
              "Access patterns: [], fetch with defaults, dig for nested hashes, key?",
              "Iteration and transformation: each, map, select, merge, transform_values"
            ],
            "do": [
              "Model a user record as a nested hash and access deep values with dig",
              "Use fetch with a default and a block to handle missing keys gracefully",
              "Merge two hashes and transform all values with transform_values"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Hash", "https://docs.ruby-lang.org/en/master/Hash.html"]
            ]
          },
          {
            "t": "nil, Booleans & Truthiness",
            "d": "Only false and nil are falsy in Ruby. Internalize this and a whole class of conditional bugs disappears.",
            "lv": 1,
            "time": "~2h",
            "tip": "0 and \"\" are truthy in Ruby. If you come from Python or JavaScript, this will bite you: if 0 behaves the opposite of what you expect.",
            "learn": [
              "The truthiness rule: everything except false and nil is truthy",
              "nil handling: nil?, || defaults, and the safe navigation operator &.",
              "Boolean operators: &&, ||, ! and their low-precedence cousins and/or/not"
            ],
            "do": [
              "Test the truthiness of 0, \"\", [], and {} in conditionals",
              "Chain &. through a possibly-nil object graph without raising",
              "Replace nested nil checks with || defaults and safe navigation"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: true, false and nil", "https://docs.ruby-lang.org/en/master/syntax/literals_rdoc.html"]
            ]
          },
          {
            "t": "Type Conversion",
            "d": "Ruby converts explicitly: to_s, to_i, to_a. Learn the strict Kernel methods too, for input you cannot trust.",
            "lv": 1,
            "time": "~2h",
            "tip": "\"abc\".to_i silently returns 0. For user input, prefer Integer(\"abc\"), which raises instead of lying to you with a zero.",
            "learn": [
              "The to_* family: to_s, to_i, to_f, to_a, to_h and their forgiving behavior",
              "Strict conversions: Integer(), Float(), Array(), Hash() and when they raise",
              "Implicit conversion protocols: to_str, to_int, to_ary for your own classes"
            ],
            "do": [
              "Convert between strings, numbers, arrays, and hashes with to_* methods",
              "Parse dirty user input with Integer() and rescue the failure cleanly",
              "Compare \"123abc\".to_i with Integer(\"123abc\") and explain the difference"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Kernel", "https://docs.ruby-lang.org/en/master/Kernel.html"]
            ]
          },
          {
            "t": "Operators & Ranges",
            "d": "Arithmetic, comparison, and the spaceship operator, plus ranges: Ruby's elegant way to express sequences and intervals.",
            "lv": 2,
            "time": "~2h",
            "tip": "The spaceship operator <=> returns -1, 0, or 1 and powers sort. When you write custom sorting, define <=> once and include Comparable to get <, >, and == free.",
            "learn": [
              "Arithmetic, comparison, and logical operators with Ruby precedence quirks",
              "The <=> spaceship operator and the Comparable mixin",
              "Ranges: inclusive .. vs exclusive ..., and ranges in case statements and loops"
            ],
            "do": [
              "Use a range in a case/when to classify numbers into bands",
              "Sort custom objects by defining <=> and including Comparable",
              "Iterate (1..10) and (1...10) and confirm the off-by-one difference"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Range", "https://docs.ruby-lang.org/en/master/Range.html"],
              ["Ruby core: Comparable", "https://docs.ruby-lang.org/en/master/Comparable.html"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Control Flow & Iteration",
        "d": "Conditionals with Ruby's expressive modifiers, loops, and the iterator style that replaces most manual looping.",
        "lv": 1,
        "children": [
          {
            "t": "Conditionals: if, elsif, else",
            "d": "Ruby conditionals read like sentences, especially in modifier form. Write branching that explains itself.",
            "lv": 1,
            "time": "~2h",
            "tip": "Modifier if shines for guard clauses: return if user.nil?. Pushing the edge case to the first line keeps the happy path unindented and readable.",
            "learn": [
              "if/elsif/else/end and the ternary operator for simple branches",
              "Modifier form: do_something if condition on a single line",
              "Conditionals as expressions: result = if x then a else b end"
            ],
            "do": [
              "Rewrite nested conditionals using guard clauses with modifier if",
              "Assign a variable from an if/else expression instead of branching twice",
              "Refactor a method to return early on edge cases"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: control expressions", "https://docs.ruby-lang.org/en/master/syntax/control_expressions_rdoc.html"]
            ]
          },
          {
            "t": "unless & case/when",
            "d": "unless says what if cannot say elegantly; case/when dispatches on patterns. Two constructs that make intent obvious.",
            "lv": 1,
            "time": "~2h",
            "tip": "Never write unless with an else. unless x ... else ... end forces readers to negate twice; it is the one Ruby idiom the style guide tells you to avoid.",
            "learn": [
              "unless and modifier unless for negative conditions",
              "case/when with values, ranges, regexes, and classes via ===",
              "The === operator: what case actually calls under the hood"
            ],
            "do": [
              "Replace if !condition with unless in three places",
              "Write a case statement dispatching on ranges and a regex",
              "Predict what case calls on each when branch by testing === directly"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: control expressions", "https://docs.ruby-lang.org/en/master/syntax/control_expressions_rdoc.html"]
            ]
          },
          {
            "t": "Loops: while & until",
            "d": "while and until handle condition-driven repetition. Know them, then notice how rarely Ruby needs them.",
            "lv": 1,
            "time": "~2h",
            "tip": "If your while loop has a counter, you almost certainly want an iterator instead. while is for conditions (retry until success), iterators are for collections.",
            "learn": [
              "while, until, and their modifier forms",
              "Infinite loops with loop do and breaking out cleanly",
              "When while is the right tool: polling, retries, reading streams"
            ],
            "do": [
              "Write a retry loop that attempts an operation until it succeeds or hits a limit",
              "Convert a counter-based while loop into an iterator and compare",
              "Build a simple number-guessing game with a while loop"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: control expressions", "https://docs.ruby-lang.org/en/master/syntax/control_expressions_rdoc.html"]
            ]
          },
          {
            "t": "Iterators: each, times & upto",
            "d": "Ruby prefers iterators over for loops. each, times, and upto express repetition without manual index bookkeeping.",
            "lv": 1,
            "time": "~2h",
            "tip": "You will almost never write for in Ruby. for leaks its loop variable into the surrounding scope; each keeps it contained. Idiomatic Ruby is each all the way down.",
            "learn": [
              "each with index: each_with_index for when you need position",
              "times, upto, downto, and step for numeric repetition",
              "Why iterators beat for: scope hygiene and expressiveness"
            ],
            "do": [
              "Replace every for loop in an old script with each",
              "Use each_with_index to number a list starting from 1",
              "Generate a multiplication table with upto nested inside each"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Integer#times", "https://docs.ruby-lang.org/en/master/Integer.html"]
            ]
          },
          {
            "t": "Loop Control: break, next & redo",
            "d": "break exits, next skips to the next iteration, redo repeats the current one. Precise control inside blocks and loops.",
            "lv": 2,
            "time": "~2h",
            "tip": "break with a value returns it from the method call: result = [1,2,3].each { |n| break n * 10 if n > 1 }. It is a feature, not a quirk: use it deliberately.",
            "learn": [
              "break (with optional return value), next (with optional value), redo",
              "How break/next behave inside blocks vs inside while loops",
              "Common patterns: find-first with break, skip-invalid with next"
            ],
            "do": [
              "Find the first matching element in an array using each and break",
              "Skip invalid entries in a data-processing loop with next",
              "Demonstrate redo by retrying a flaky operation inside a loop"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: control expressions", "https://docs.ruby-lang.org/en/master/syntax/control_expressions_rdoc.html"]
            ]
          },
          {
            "t": "Exceptions: begin, rescue & ensure",
            "d": "Errors are objects in Ruby. Rescue what you can handle, ensure cleanup always runs, and define your own error classes.",
            "lv": 2,
            "time": "~3h",
            "tip": "Rescue StandardError, never bare Exception. Bare rescue swallows SyntaxError, NoMemoryError, and interrupt signals: the things you must never swallow.",
            "learn": [
              "begin/rescue/else/ensure/retry: the full exception handling structure",
              "raise, custom error classes inheriting from StandardError",
              "Method-level rescue: def without begin, and when retry makes sense"
            ],
            "do": [
              "Write a method that rescues a specific error and retries twice",
              "Define a custom error class and raise it with a helpful message",
              "Use ensure to guarantee a file or connection closes on failure"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: exceptions", "https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html"],
              ["Ruby core: Exception", "https://docs.ruby-lang.org/en/master/Exception.html"]
            ]
          }
        ]
      },
      {
        "t": "Enumerable & Blocks",
        "d": "Blocks are Ruby's superpower and Enumerable is where they shine. This is the most idiomatic Ruby you will learn.",
        "lv": 2,
        "children": [
          {
            "t": "Blocks: Ruby's Secret Weapon",
            "d": "A block is a chunk of code passed to a method. Learn yield, do/end vs braces, and why blocks make Ruby feel like it has custom syntax.",
            "lv": 2,
            "time": "~3h",
            "tip": "Use do/end for multiline blocks with side effects, braces for single-line blocks that return values. It is a convention, not a rule, but all idiomatic Ruby follows it.",
            "learn": [
              "Block syntax: do/end vs { }, and yielding with arguments",
              "yield, block_given?, and capturing blocks with &block",
              "How blocks enable DSL-like APIs: File.open, Array#each, benchmarks"
            ],
            "do": [
              "Write a method that yields twice and call it with different blocks",
              "Capture a block as a Proc with &block and store it for later",
              "Use block_given? to make a method work with or without a block"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: blocks and procs", "https://docs.ruby-lang.org/en/master/syntax/proc_rdoc.html"]
            ]
          },
          {
            "t": "Procs & Lambdas",
            "d": "Blocks become objects as Procs and lambdas. They look similar but differ in argument checking and return semantics: know the difference cold.",
            "lv": 2,
            "time": "~3h",
            "tip": "A return inside a Proc returns from the enclosing method; a return inside a lambda returns from the lambda. This single difference causes the most confusing bugs in Ruby.",
            "learn": [
              "Proc.new, proc, lambda, and the ->() literal syntax",
              "Arity: lambdas enforce argument count, Procs are lenient",
              "Return semantics: the crucial difference that decides which to use"
            ],
            "do": [
              "Demonstrate the return-semantics difference with a method returning each type",
              "Call a lambda with the wrong arity and read the ArgumentError",
              "Store callbacks as lambdas in a hash and invoke them by name"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Proc", "https://docs.ruby-lang.org/en/master/Proc.html"]
            ]
          },
          {
            "t": "Closures",
            "d": "Blocks remember the variables around them. Closures turn local state into portable behavior without classes.",
            "lv": 2,
            "time": "~2h",
            "tip": "A classic gotcha: closures capture variables, not values. A block created in a loop sees the variable's final value unless you bind a fresh local per iteration.",
            "learn": [
              "What a closure captures: the surrounding binding, not a snapshot",
              "Counter factories: methods returning lambdas that share state",
              "The loop-variable capture trap and how to avoid it"
            ],
            "do": [
              "Write a counter factory: a method returning a lambda that increments hidden state",
              "Trigger the loop capture bug on purpose, then fix it with a block-local variable",
              "Explain binding.of_caller-style introspection in one paragraph"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Binding", "https://docs.ruby-lang.org/en/master/Binding.html"]
            ]
          },
          {
            "t": "Enumerable: Searching & Filtering",
            "d": "find, select, reject, any?, all?, none?: declarative questions over collections that replace manual search loops.",
            "lv": 2,
            "time": "~3h",
            "tip": "Name your intent: select keeps matches, reject drops them, find returns the first. Reading any?/all?/none? aloud tells you exactly what the code checks.",
            "learn": [
              "find/detect, select/filter, reject: the search trio",
              "any?, all?, none?, one?, count: answering yes/no questions",
              "include? and min/max/minmax for membership and extremes"
            ],
            "do": [
              "Replace five manual search loops with find/select/any?",
              "Chain select with map to filter then transform in one expression",
              "Use count with a block instead of select.length"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Enumerable", "https://docs.ruby-lang.org/en/master/Enumerable.html"]
            ]
          },
          {
            "t": "Enumerable: Transforming & Reducing",
            "d": "map, reduce, group_by, sort_by: reshape entire collections in single expressions. This is the functional heart of Ruby.",
            "lv": 2,
            "time": "~3h",
            "tip": "map returns a new array; map! mutates in place. The bang-less version is the default for a reason: prefer new collections over mutating shared ones.",
            "learn": [
              "map/collect, flat_map, and zip for element-wise transformation",
              "reduce/inject: folding a collection into one value, with real examples",
              "group_by, sort_by, tally, and each_with_object for structured results"
            ],
            "do": [
              "Compute totals, averages, and word frequencies with reduce and tally",
              "Group records by a key with group_by and sort groups with sort_by",
              "Build a hash from an array using each_with_object"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Enumerable", "https://docs.ruby-lang.org/en/master/Enumerable.html"]
            ]
          }
        ]
      },
      {
        "t": "Object-Oriented Ruby",
        "d": "Everything is an object, classes are open, and modules mix in behavior. Ruby's OOP is flexible, expressive, and worth mastering.",
        "lv": 2,
        "children": [
          {
            "t": "Defining Methods",
            "d": "Methods return their last expression automatically. Defaults, implicit return, and expressive naming make Ruby methods read like prose.",
            "lv": 1,
            "time": "~2h",
            "tip": "Omit return except for early exits. The implicit return is not laziness: it makes the method's result the visual last line, which is where readers look.",
            "learn": [
              "def, end, and implicit return of the last expression",
              "Default argument values and why mutable defaults are safe in Ruby",
              "Naming: predicate ?, danger !, and verbs that describe the result"
            ],
            "do": [
              "Write methods relying on implicit return, then add one early return",
              "Use default arguments to simplify three similar method calls",
              "Refactor a long method into small well-named ones"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: methods", "https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html"]
            ]
          },
          {
            "t": "Method Parameters: Splat & Keywords",
            "d": "Positional, splat, keyword, and block parameters compose into flexible APIs. Learn the full parameter grammar.",
            "lv": 2,
            "time": "~2h",
            "tip": "Keyword arguments beat options hashes: they document themselves at the call site and Ruby validates them. Prefer keywords for any method with more than two parameters.",
            "learn": [
              "*args splat, **kwargs double splat, and &block parameters",
              "Keyword arguments with defaults and required keywords",
              "Argument forwarding with ... and the args/kwargs separation"
            ],
            "do": [
              "Write a method accepting *args and **options and forward them onward",
              "Convert an options-hash API to keyword arguments",
              "Forward all arguments with ... in a wrapper method"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: methods", "https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html"]
            ]
          },
          {
            "t": "Classes & Objects",
            "d": "Define classes, initialize state, and create objects. Ruby's object model starts simple and stays consistent.",
            "lv": 2,
            "time": "~3h",
            "tip": "initialize is private by nature: you never call it directly, .new calls it for you. Put validation and defaults there so no object is born invalid.",
            "learn": [
              "class, new, and initialize: the object lifecycle",
              "@instance variables: per-object state and how it differs from locals",
              "Instance methods, self, and what self means inside a method"
            ],
            "do": [
              "Model a real entity (BankAccount, Book) with state and behavior",
              "Add validation in initialize that raises on bad input",
              "Inspect an object in irb: its class, instance variables, and methods"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: classes and modules", "https://docs.ruby-lang.org/en/master/syntax/classes_rdoc.html"]
            ]
          },
          {
            "t": "Attribute Accessors",
            "d": "attr_reader, attr_writer, attr_accessor generate getters and setters. Expose state deliberately, not by default.",
            "lv": 2,
            "time": "~2h",
            "tip": "Default to attr_reader. Every attr_writer you add is a promise that external code may mutate your object's state: make that promise only when you mean it.",
            "learn": [
              "attr_reader, attr_writer, attr_accessor: what each generates",
              "Custom getters/setters for validation and computed values",
              "Encapsulation: private and protected methods"
            ],
            "do": [
              "Expose read-only attributes with attr_reader on a class",
              "Write a custom setter that validates before assigning",
              "Make helper methods private and confirm they cannot be called externally"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Module#attr_accessor", "https://docs.ruby-lang.org/en/master/Module.html"]
            ]
          },
          {
            "t": "Inheritance",
            "d": "Single inheritance with super. Learn the mechanics, then learn when composition beats inheritance.",
            "lv": 2,
            "time": "~2h",
            "tip": "Inheritance models is-a relationships. If you cannot say the sentence 'a SavingsAccount is a BankAccount' comfortably, you want a module or composition instead.",
            "learn": [
              "The < syntax, super with and without arguments, and overriding",
              "What subclasses inherit: methods, constants, and class-level state",
              "Inheritance vs composition: the tradeoff every design faces"
            ],
            "do": [
              "Build a two-level hierarchy with overridden methods calling super",
              "Demonstrate super, super(), and bare super argument passing",
              "Refactor one inheritance relationship into composition and compare"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: classes and modules", "https://docs.ruby-lang.org/en/master/syntax/classes_rdoc.html"]
            ]
          },
          {
            "t": "Modules & Mixins",
            "d": "Modules are Ruby's answer to multiple inheritance: mix shared behavior into any class with include, extend, and prepend.",
            "lv": 2,
            "time": "~3h",
            "tip": "Prefer small focused modules over deep hierarchies. Enumerable and Comparable prove the pattern: include one module, implement one or two methods, gain dozens.",
            "learn": [
              "Modules as namespaces vs modules as mixins",
              "include (instance methods), extend (class methods), prepend (override priority)",
              "The standard mixins: Enumerable (needs each) and Comparable (needs <=>)"
            ],
            "do": [
              "Write a module and include it in two unrelated classes",
              "Make a custom collection Enumerable by defining each and including Enumerable",
              "Use extend to add class-level behavior from a module"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Module", "https://docs.ruby-lang.org/en/master/Module.html"]
            ]
          },
          {
            "t": "Method Lookup & Ancestors",
            "d": "When you call a method, Ruby walks the ancestors chain. Read that chain and method resolution stops being mysterious.",
            "lv": 3,
            "time": "~2h",
            "tip": "When a method behaves unexpectedly, print Class.ancestors. The answer is almost always an included module sitting earlier in the chain than you assumed.",
            "learn": [
              "The ancestors chain: class, modules, superclass, in lookup order",
              "How include, prepend, and extend reshape the chain",
              "method() and owner: introspecting exactly where a method is defined"
            ],
            "do": [
              "Print ancestors for a class with two included modules and predict lookup order",
              "Use prepend to wrap a method and observe it winning over the class",
              "Find a method's owner with method(:name).owner"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Module#ancestors", "https://docs.ruby-lang.org/en/master/Module.html"]
            ]
          },
          {
            "t": "Monkey Patching & Refinements",
            "d": "Ruby lets you reopen any class, even core ones. Powerful for frameworks, dangerous in apps: refinements scope the power safely.",
            "lv": 3,
            "time": "~3h",
            "tip": "Global monkey patches are a liability: two gems patching String#to_json differently is a real production incident pattern. Use refinements to keep patches lexical and local.",
            "learn": [
              "Open classes: adding methods to String, Array, or your own classes",
              "The risks: conflicts, upgrade breakage, and spooky action at a distance",
              "Refinements: lexically scoped patches with refine and using"
            ],
            "do": [
              "Reopen String to add a small helper and observe it working everywhere",
              "Rewrite the same patch as a refinement scoped to one file",
              "Explain when a framework (like Rails) justifies open classes"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: refinements", "https://docs.ruby-lang.org/en/master/syntax/refinements_rdoc.html"]
            ]
          },
          {
            "t": "Singleton Classes & Methods",
            "d": "Define methods on a single object with class << self and def obj.method. The mechanism behind class methods, demystified.",
            "lv": 3,
            "time": "~2h",
            "tip": "def self.method is just shorthand for defining on the singleton class. Once you see class methods as singleton methods, the object model has no dark corners left.",
            "learn": [
              "def obj.method: methods that exist on one object only",
              "class << self: opening the singleton class directly",
              "How class methods really work: they live on the class's singleton class"
            ],
            "do": [
              "Add a singleton method to one object and confirm its siblings lack it",
              "Rewrite def self.x methods using class << self syntax",
              "Draw the singleton class in the ancestors chain"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby: singleton classes", "https://docs.ruby-lang.org/en/master/syntax/classes_rdoc.html"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Gems, Bundler & Tooling",
        "d": "RubyGems distributes libraries, Bundler pins them per project, and the tooling keeps your code debugged, tested, and clean.",
        "lv": 2,
        "children": [
          {
            "t": "RubyGems: Installing Gems",
            "d": "Gems are Ruby's packages. Install them, inspect them, and understand versions before Bundler manages them for you.",
            "lv": 2,
            "time": "~2h",
            "tip": "gem install is global by default. It is fine for tools (like rubocop), but project dependencies belong in a Gemfile under Bundler, never installed globally.",
            "learn": [
              "gem install, gem list, gem uninstall: the basic gem lifecycle",
              "Semantic versioning and the ~> pessimistic version operator",
              "Where gems live: GEM_HOME, GEM_PATH, and user vs system installs"
            ],
            "do": [
              "Install a gem globally and run its executable",
              "Inspect a gem's contents and version with gem contents and gem list",
              "Explain what ~> 2.3 allows and forbids in version resolution"
            ],
            "tools": ["RubyGems"],
            "res": [
              ["RubyGems guides", "https://guides.rubygems.org/"],
              ["RubyGems: patterns", "https://guides.rubygems.org/patterns/"]
            ]
          },
          {
            "t": "Bundler & Gemfiles",
            "d": "Bundler makes dependencies reproducible: declare gems in a Gemfile, lock exact versions, and every machine installs the same set.",
            "lv": 2,
            "time": "~3h",
            "tip": "Commit Gemfile.lock for applications, never for gems. Apps need reproducible deploys; libraries need to prove they work across dependency versions.",
            "learn": [
              "The Gemfile: sources, gem declarations, and groups",
              "Gemfile.lock: the resolved dependency graph and why it matters",
              "bundle install, bundle exec, bundle update, and bundle outdated"
            ],
            "do": [
              "Create a Gemfile, install it, and read the generated lockfile",
              "Run a script with and without bundle exec and observe the difference",
              "Update one gem conservatively and check what else moved in the lockfile"
            ],
            "tools": ["Bundler"],
            "res": [
              ["Bundler documentation", "https://bundler.io/"],
              ["Bundler: Gemfile", "https://bundler.io/gemfile.html"]
            ]
          },
          {
            "t": "Debugging: debug, pry & byebug",
            "d": "Stop guessing: drop breakpoints, inspect state, and step through execution with Ruby's debuggers.",
            "lv": 2,
            "time": "~2h",
            "tip": "The built-in debug gem (binding.break) is excellent and always available. Reach for pry when you want its friendlier REPL, not by default.",
            "learn": [
              "binding.break with the debug gem: breakpoints, stepping, and inspection",
              "pry: the friendlier REPL with syntax highlighting and navigation",
              "Debugging strategy: reproduce, isolate, inspect, hypothesize, verify"
            ],
            "do": [
              "Drop a binding.break into a script and step through with step/next/continue",
              "Inspect local variables and evaluate expressions at a breakpoint",
              "Debug a real bug in one of your scripts using only the debugger"
            ],
            "tools": ["debug", "pry", "byebug"],
            "res": [
              ["debug gem", "https://github.com/ruby/debug"],
              ["pry", "https://github.com/pry/pry"]
            ]
          },
          {
            "t": "Testing with RSpec",
            "d": "RSpec is Ruby's expressive testing standard. describe, it, and expect make tests read like specifications.",
            "lv": 2,
            "time": "~1d",
            "tip": "One expectation per example, and name the example after the behavior: it 'rejects negative amounts'. Future readers should understand the spec without reading the code.",
            "learn": [
              "describe/context/it structure and the expect().to matcher syntax",
              "Core matchers: eq, be, include, raise_error, change",
              "let, subject, before hooks, and doubles for isolating units"
            ],
            "do": [
              "Set up RSpec and write specs for a class you built earlier",
              "Test both the happy path and the error cases with raise_error",
              "Use a double to isolate a unit from its collaborator"
            ],
            "tools": ["RSpec"],
            "res": [
              ["RSpec documentation", "https://rspec.info/documentation/"],
              ["Better Specs", "https://www.betterspecs.org/"]
            ]
          },
          {
            "t": "Testing with Minitest",
            "d": "Minitest ships with Ruby: tiny, fast, and expressive. The alternative testing style every Rubyist should be able to read.",
            "lv": 2,
            "time": "~3h",
            "tag": "opt",
            "tip": "Minitest's spec DSL looks like RSpec but runs on plain Ruby assertions. If a project uses it, learn its idioms rather than fighting to install RSpec.",
            "learn": [
              "Minitest::Test with assert/refute vs Minitest::Spec with describe/it",
              "Setup/teardown, mocks, stubs, and expectations",
              "When teams choose Minitest: speed, simplicity, and Rails defaults"
            ],
            "do": [
              "Write the same specs from the RSpec topic in Minitest spec style",
              "Use a mock to verify a collaborator receives a message",
              "Run both suites and compare speed and readability"
            ],
            "tools": ["Minitest"],
            "res": [
              ["Minitest", "https://github.com/minitest/minitest"]
            ]
          },
          {
            "t": "Linting with RuboCop & Standard",
            "d": "Automated style enforcement ends bike-shedding. Run RuboCop or Standard and let the tool argue about formatting.",
            "lv": 2,
            "time": "~2h",
            "tip": "Enable linting on day one of a project. Adding RuboCop to a year-old codebase produces thousands of offenses and a week of cleanup nobody wants to do.",
            "learn": [
              "RuboCop cops: style, layout, and lint checks with autocorrect",
              "Standard: the zero-config RuboCop wrapper with community defaults",
              ".rubocop.yml configuration and disabling cops with justification"
            ],
            "do": [
              "Run RuboCop on your scripts and fix every offense",
              "Use --autocorrect-all and review what it changed",
              "Configure Standard on a project and add it to your workflow"
            ],
            "tools": ["RuboCop", "Standard"],
            "res": [
              ["RuboCop", "https://github.com/rubocop/rubocop"],
              ["Standard", "https://github.com/standardrb/standard"]
            ]
          },
          {
            "t": "Documentation: RDoc & YARD",
            "d": "Good libraries document themselves. Write doc comments that RDoc and YARD turn into browsable API references.",
            "lv": 3,
            "time": "~2h",
            "tag": "opt",
            "tip": "Document the why and the contract (parameters, return, raises), not the how. Code that needs its mechanics explained in comments usually needs refactoring instead.",
            "learn": [
              "RDoc comment conventions: the format Ruby's own docs use",
              "YARD tags: @param, @return, @raise for structured API docs",
              "Generating and publishing docs for a gem"
            ],
            "do": [
              "Document a class with YARD tags for every public method",
              "Generate HTML docs and review them as a user would",
              "Write a README that gets a stranger running in five minutes"
            ],
            "tools": ["RDoc", "YARD"],
            "res": [
              ["YARD", "https://yardoc.org/"],
              ["RDoc", "https://ruby.github.io/rdoc/"]
            ]
          }
        ]
      },
      {
        "t": "Advanced Ruby",
        "d": "Metaprogramming, concurrency, and the standard library depth that separates fluent Rubyists from beginners.",
        "lv": 3,
        "children": [
          {
            "t": "Metaprogramming: send & define_method",
            "d": "Call methods by name with send and define methods at runtime. The foundation of Rails' magic, used responsibly.",
            "lv": 3,
            "time": "~4h",
            "tip": "Metaprogramming trades explicitness for concision. If a future reader cannot find where a method is defined with grep, you have gone too far.",
            "learn": [
              "send and public_send: dynamic dispatch by name",
              "define_method: creating methods programmatically in loops",
              "class_eval and instance_eval: executing code in another context"
            ],
            "do": [
              "Dispatch to methods dynamically with send based on user input",
              "Generate a family of similar methods with define_method in a loop",
              "Use class_eval to add behavior to a class from outside it"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Object#send", "https://docs.ruby-lang.org/en/master/Object.html"],
              ["Ruby core: Module#define_method", "https://docs.ruby-lang.org/en/master/Module.html"]
            ]
          },
          {
            "t": "method_missing & DSLs",
            "d": "method_missing catches undefined calls, enabling beautiful DSLs. Learn the pattern and the discipline it demands.",
            "lv": 3,
            "time": "~4h",
            "tip": "Always define respond_to_missing? alongside method_missing. Otherwise respond_to? lies, and every tool that introspects your object (including debuggers) breaks subtly.",
            "learn": [
              "method_missing: intercepting undefined method calls",
              "respond_to_missing?: keeping introspection honest",
              "DSL design: turning method_missing into readable configuration languages"
            ],
            "do": [
              "Build a tiny configuration DSL using method_missing",
              "Add respond_to_missing? and verify respond_to? works correctly",
              "Refactor the DSL to define real methods where the set is known"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: BasicObject#method_missing", "https://docs.ruby-lang.org/en/master/BasicObject.html"]
            ]
          },
          {
            "t": "Concurrency: Threads, Fibers & Ractors",
            "d": "Threads for IO, Fibers for cooperative scheduling, Ractors for true parallelism. Know which tool fits which workload.",
            "lv": 3,
            "time": "~1d",
            "tip": "The GVL means threads do not parallelize CPU work in CRuby, but they parallelize IO beautifully. Match the primitive to the bottleneck: IO-bound means threads, CPU-bound means Ractors or processes.",
            "learn": [
              "Threads, Mutex, and the GVL: what really runs in parallel",
              "Fibers: lightweight cooperative concurrency and the scheduler interface",
              "Ractors: share-nothing actors for true parallelism and their constraints"
            ],
            "do": [
              "Speed up multiple HTTP fetches with threads and measure the gain",
              "Protect shared state with a Mutex and demonstrate the race without it",
              "Run a CPU-bound computation in a Ractor and compare with threads"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: Thread", "https://docs.ruby-lang.org/en/master/Thread.html"],
              ["Ruby core: Ractor", "https://docs.ruby-lang.org/en/master/Ractor.html"]
            ]
          },
          {
            "t": "File I/O",
            "d": "Read, write, and traverse the filesystem the Ruby way: block forms that close resources for you.",
            "lv": 2,
            "time": "~3h",
            "tip": "Always use the block form of File.open. It closes the file even when exceptions fire; the non-block form leaks file descriptors on every error path.",
            "learn": [
              "File.open with blocks, read/write/append modes, and line-by-line iteration",
              "Dir, FileUtils, and Pathname for filesystem operations",
              "Encoding awareness: UTF-8 by default and handling other encodings"
            ],
            "do": [
              "Process a large file line by line without loading it into memory",
              "Build a script that walks a directory tree with Dir.glob",
              "Rewrite file operations using Pathname's object-oriented API"
            ],
            "tools": ["Ruby"],
            "res": [
              ["Ruby core: File", "https://docs.ruby-lang.org/en/master/File.html"],
              ["Ruby core: Pathname", "https://docs.ruby-lang.org/en/master/Pathname.html"]
            ]
          },
          {
            "t": "Regular Expressions",
            "d": "Ruby's regex support is first-class, with =~, match, and scan woven into the language. Parse text with confidence.",
            "lv": 2,
            "time": "~3h",
            "tip": "Name your captures: /(?<year>\\d{4})/ makes match[:year] self-documenting. Positional $1, $2 captures are write-only code.",
            "learn": [
              "Literals, =~, match, match?, and the MatchData object",
              "Named captures, groups, and common patterns for validation",
              "gsub with blocks and scan for extraction workflows"
            ],
            "do": [
              "Validate emails and extract dates with well-tested patterns",
              "Parse log lines with named captures into structured hashes",
              "Rewrite a manual string-parsing loop with scan and gsub"
            ],
            "tools": ["Ruby", "Rubular"],
            "res": [
              ["Ruby core: Regexp", "https://docs.ruby-lang.org/en/master/Regexp.html"],
              ["Rubular: regex tester", "https://rubular.com/"]
            ]
          },
          {
            "t": "Date & Time",
            "d": "Time, Date, and DateTime cover every temporal need. Learn the right class and stop fearing time zones.",
            "lv": 2,
            "time": "~2h",
            "tip": "Store and compute in UTC, display in local time. Every time-zone bug you will ever meet comes from mixing the two, usually in the database layer.",
            "learn": [
              "Time vs Date vs DateTime: which class for which job",
              "Parsing, formatting with strftime, and arithmetic on times",
              "Time zones: UTC discipline and the tzinfo gem for named zones"
            ],
            "do": [
              "Parse three date formats and normalize them to UTC",
              "Compute durations and deadlines with time arithmetic",
              "Format the same instant for two time zones with tzinfo"
            ],
            "tools": ["Ruby", "tzinfo"],
            "res": [
              ["Ruby core: Time", "https://docs.ruby-lang.org/en/master/Time.html"],
              ["Ruby core: Date", "https://docs.ruby-lang.org/en/master/Date.html"]
            ]
          },
          {
            "t": "Data Structures & Algorithms in Ruby",
            "d": "Implement the classics in idiomatic Ruby: stacks, queues, sorting, searching, and recursion. Interview prep that deepens language fluency.",
            "lv": 3,
            "time": "~1w",
            "tip": "Implement it yourself first, then compare with the stdlib. Ruby's sort is faster than yours will ever be: the exercise is about thinking, not shipping.",
            "learn": [
              "Stacks, queues, and linked structures built from Ruby classes",
              "Sorting and searching: implementing then analyzing complexity",
              "Recursion: base cases, the call stack, and when iteration wins"
            ],
            "do": [
              "Implement a stack, a queue, and a binary search from scratch with specs",
              "Implement quicksort and mergesort, then benchmark against Array#sort",
              "Solve five recursion problems: factorial, fibonacci, tree traversal, and two of your choice"
            ],
            "tools": ["Ruby", "RSpec", "benchmark"],
            "res": [
              ["Ruby core: Array#sort", "https://docs.ruby-lang.org/en/master/Array.html"],
              ["The Rubyist's algorithm playground", "https://github.com/ruby"]
            ]
          }
        ]
      }
    ]
  }
});
