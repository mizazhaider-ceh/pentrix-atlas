/* Atlas roadmap data: C++ (cpp)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "cpp",
  "title": "C++",
  "icon": "🧲",
  "color": "#9f1239",
  "tagline": "Zero-cost abstractions, full control.",
  "desc": "Modern C++ from first compile to mastery: RAII and smart pointers, classes, templates, the STL, move semantics, concurrency, and the build toolchain.",
  "kind": "skill",
  "root": {
    "t": "C++",
    "d": "From first program to modern C++: ownership, generics, the STL, and real-world tooling.",
    "children": [
      {
        "t": "Language Foundations",
        "d": "Setup, syntax, types, and functions — C++ as a better C to start with.",
        "lv": 1,
        "children": [
          {
            "t": "What C++ Is & Why It Matters",
            "d": "Zero-cost abstractions: where C++ wins and what 'you don't pay for what you don't use' means.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "C++'s niche: game engines, browsers, trading systems, embedded — anywhere microseconds and megabytes matter",
              "Zero-cost abstraction: std::vector is as fast as a hand-rolled array because abstractions compile away",
              "The cost: a huge language where you must learn which 30% to use and which 70% to avoid"
            ],
            "do": [
              "Read the isocpp.org FAQ on what C++ is for and note three domains relevant to you",
              "Compare the roadmap.sh C++ path with the C path and list what C++ adds",
              "Write down your goal for learning C++ (games, systems, quant, general) to guide later choices"
            ],
            "tools": ["roadmap.sh"],
            "res": [
              ["Standard C++ (isocpp.org)", "https://isocpp.org/"],
              ["C++ Roadmap", "https://roadmap.sh/cpp"]
            ],
            "tip": "Learn modern C++ (C++17/20/26), not 'C with classes'. Half the tutorials online teach 1998-era style."
          },
          {
            "t": "Setup & First Program",
            "d": "Compiler, editor, and hello world with iostream — compiled with warnings on.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "g++ is the C++ driver; -std=c++20 selects the language version, -Wall -Wextra -Werror keep you honest",
              "iostream and std::cout: streams replace printf, and << is just an overloaded operator",
              "Namespaces: std:: qualifies standard names; `using namespace std;` is a beginner trap in headers"
            ],
            "do": [
              "Install g++ or clang++, verify with `g++ --version`",
              "Write hello world with std::cout, compile with `g++ -std=c++20 -Wall -Wextra -Werror`",
              "Set up VS Code or CLion with clangd so errors appear as you type"
            ],
            "tools": ["GCC", "Clang", "VS Code", "CLion", "clangd"],
            "res": [
              ["Learn C++ — setup", "https://www.learncpp.com/cpp-tutorial/introduction-to-cpp/"],
              ["Standard C++: Get Started", "https://isocpp.org/get-started"]
            ],
            "tip": "Never put `using namespace std;` in a header. In a .cpp file it is tolerable; in a header it pollutes everyone."
          },
          {
            "t": "Types, Variables & auto",
            "d": "Fundamental types, const correctness, and letting the compiler deduce with auto.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Value initialization: `int x{};` zero-initializes — prefer braces over `=` to avoid narrowing surprises",
              "const from day one: const variables, const parameters, const member functions",
              "auto deduces the type; `auto x = 5;` is int. Use it to avoid repeating long type names, not to hide meaning"
            ],
            "do": [
              "Rewrite a program replacing all `=` initialization with brace initialization and note what breaks",
              "Mark every variable that never changes as const and fix the compiler complaints",
              "Predict the deduced type of ten auto declarations, then verify with a static_assert on type traits"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["Learn C++ — variables", "https://www.learncpp.com/cpp-tutorial/introduction-to-variables/"],
              ["cppreference — auto", "https://en.cppreference.com/w/cpp/language/auto"]
            ],
            "tip": "auto hides the type from the reader, not the compiler. If the type matters for understanding, spell it out."
          },
          {
            "t": "Operators & Control Flow",
            "d": "The C core carried over: operators, branches, loops — plus range-based for.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Everything from C transfers: arithmetic, comparison, logical, bitwise, ternary, precedence",
              "Range-based for (`for (auto& x : vec)`) iterates containers without index bookkeeping",
              "switch, break, continue behave as in C; [[fallthrough]] documents intentional fallthrough"
            ],
            "do": [
              "Solve FizzBuzz with a range-based for over a std::vector",
              "Rewrite an index loop as a range-for, once by value and once by reference, and observe the difference",
              "Write a switch on an enum class with a default case handling invalid input"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — control flow", "https://www.learncpp.com/cpp-tutorial/control-flow-introduction/"]
            ],
            "tip": "Prefer range-based for loops. If you need the index too, C++20 gives you views::enumerate thinking — or just use a classic loop."
          },
          {
            "t": "Functions & Overloading",
            "d": "Pass by reference, default arguments, and multiple functions sharing one name.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Pass by const reference (`const std::string&`) avoids copies; pass small trivial types by value",
              "Function overloading: same name, different parameter lists — the compiler picks by best match",
              "Default arguments and inline functions; declarations in headers, definitions in .cpp files"
            ],
            "do": [
              "Write overloaded print functions for int, double, and std::string",
              "Benchmark pass-by-value vs pass-by-const-reference for a large vector argument",
              "Split a program into .h/.cpp pairs with include guards and compile them together"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — functions", "https://www.learncpp.com/cpp-tutorial/functions/"],
              ["cppreference — overload resolution", "https://en.cppreference.com/w/cpp/language/overload_resolution"]
            ],
            "tip": "Overloading on return type alone is illegal — the compiler cannot choose by what you do with the result."
          },
          {
            "t": "enum class & Structured Bindings",
            "d": "Type-safe enumerations and unpacking tuples/pairs into named variables.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "enum class is scoped and strongly typed: Color::Red will not implicitly convert to int",
              "Structured bindings (`auto [x, y] = pair;`) unpack aggregates, pairs, tuples, and structs",
              "Use them with map iteration: `for (auto& [key, val] : myMap)` reads like pseudocode"
            ],
            "do": [
              "Replace a set of #define constants with an enum class and fix the resulting type errors",
              "Write a function returning std::pair<bool, std::string> and unpack it at the call site",
              "Iterate a std::map with structured bindings and print key-value pairs"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — enums", "https://www.learncpp.com/cpp-tutorial/scoped-enumerations-enum-classes/"],
              ["cppreference — structured bindings", "https://en.cppreference.com/w/cpp/language/structured_binding"]
            ],
            "tip": "Old-style unscoped enums leak their enumerators into the surrounding scope. Always prefer enum class."
          }
        ]
      },
      {
        "t": "Memory & Ownership",
        "d": "References, smart pointers, RAII, and move semantics — how modern C++ manages memory.",
        "lv": 2,
        "children": [
          {
            "t": "References",
            "d": "Aliases, not pointers: what references guarantee and where they shine.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "A reference is an alias that must be bound at creation and can never be reseated or null",
              "Use references for in/out parameters and range-for; use pointers when null or reseating is meaningful",
              "Reference collapsing and forwarding references come later — for now, master lvalue references"
            ],
            "do": [
              "Write swap with references and compare to the C pointer version",
              "Try to reseat a reference and observe that you actually assign through it",
              "Convert a pointer-heavy function to references where null is not a valid input"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — references", "https://www.learncpp.com/cpp-tutorial/references/"]
            ],
            "tip": "Never return a reference to a local variable. The local dies, the reference dangles, and the crash happens far away."
          },
          {
            "t": "Raw Pointers, new & delete",
            "d": "Know the old ways so you recognize them — and know why you avoid them.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "new allocates and constructs; delete destroys and frees — forgetting either is a bug",
              "new[]/delete[] pair for arrays; mixing new with delete[] is undefined behavior",
              "Raw owning pointers are a code smell in modern C++: they should be non-owning observers or replaced"
            ],
            "do": [
              "Allocate an array with new[], fill it, delete[] it — then run under ASan",
              "Deliberately leak, double-delete, and mismatch new/delete[] in scratch files; read each ASan report",
              "Refactor the examples to smart pointers and watch the bug classes disappear"
            ],
            "tools": ["GCC", "AddressSanitizer"],
            "res": [
              ["Learn C++ — dynamic allocation", "https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/"]
            ],
            "tip": "If you write `new` in modern C++, you should be able to explain why a smart pointer or container could not do it."
          },
          {
            "t": "Smart Pointers: unique_ptr & shared_ptr",
            "d": "Ownership expressed in types: unique for sole ownership, shared for shared.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "unique_ptr: sole ownership, zero overhead, move-only — the default choice for heap objects",
              "shared_ptr: reference-counted shared ownership; weak_ptr breaks cycles without owning",
              "make_unique/make_shared: single allocation, exception-safe, no bare new in your code"
            ],
            "do": [
              "Build a linked list with unique_ptr nodes; observe automatic cleanup on scope exit",
              "Create a shared_ptr cycle between two objects, watch the leak, then fix it with weak_ptr",
              "Write a factory function returning unique_ptr and transfer ownership with std::move"
            ],
            "tools": ["GCC", "AddressSanitizer"],
            "res": [
              ["cppreference — unique_ptr", "https://en.cppreference.com/w/cpp/memory/unique_ptr"],
              ["cppreference — shared_ptr", "https://en.cppreference.com/w/cpp/memory/shared_ptr"],
              ["Learn C++ — smart pointers", "https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/"]
            ],
            "tip": "Default to unique_ptr. Reach for shared_ptr only when ownership is genuinely shared — most of the time it is not."
          },
          {
            "t": "RAII: Resources Are Initialization",
            "d": "The single most important C++ idiom: tie every resource's lifetime to an object's.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Acquire in the constructor, release in the destructor — cleanup becomes automatic and exception-safe",
              "std::vector, std::string, std::lock_guard, std::fstream are all RAII types you already use",
              "Exceptions plus RAII: stack unwinding calls destructors, so resources free themselves even on throws"
            ],
            "do": [
              "Write a FileHandle class that opens in the constructor and closes in the destructor",
              "Throw an exception mid-function and prove via prints that destructors still run",
              "Replace manual lock/unlock with std::lock_guard in a threaded example"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — RAII", "https://www.learncpp.com/cpp-tutorial/the-hidden-rule-of-raii/"],
              ["cppreference — RAII", "https://en.cppreference.com/w/cpp/language/raii"]
            ],
            "tip": "Every manual cleanup call (free, close, unlock) is a bug waiting for an early return or exception. RAII deletes the category."
          },
          {
            "t": "Move Semantics & Value Categories",
            "d": "Steal instead of copy: rvalue references, std::move, and why vector is fast.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "lvalues have names and addresses; rvalues are temporaries — move semantics pilfer the temporaries",
              "std::move is a cast to rvalue, not a move itself; the move constructor does the stealing",
              "Rule of five: if you define destructor, copy/move ctor, or copy/move assign, you probably need all five"
            ],
            "do": [
              "Write a String class with copy and move constructors that print when called; observe which fires",
              "Push 100k strings into a vector and watch moves (not copies) happen on reallocation",
              "Implement a move-only type and try to copy it — read the compiler error"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — move semantics", "https://www.learncpp.com/cpp-tutorial/introduction-to-move-semantics-and-smart-pointers/"],
              ["cppreference — move semantics", "https://en.cppreference.com/w/cpp/language/move_constructor"]
            ],
            "tip": "Do not std::move a const object — the move constructor cannot steal from const, so you silently get a copy."
          }
        ]
      },
      {
        "t": "Classes & Object-Oriented C++",
        "d": "Encapsulation, constructors, inheritance, and polymorphism — the OOP toolkit.",
        "lv": 2,
        "children": [
          {
            "t": "Classes: Encapsulation Basics",
            "d": "Classes vs structs, access specifiers, and designing clean interfaces.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "class defaults to private, struct defaults to public — otherwise they are identical",
              "Encapsulation: private data, public interface; invariants enforced by member functions",
              "const member functions promise not to mutate; mutable is the rare, deliberate exception"
            ],
            "do": [
              "Design a BankAccount class with private balance and deposit/withdraw enforcing non-negative balance",
              "Mark all non-mutating member functions const and observe what breaks when you forget",
              "Write a class where the constructor establishes the invariant or throws"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — classes", "https://www.learncpp.com/cpp-tutorial/classes-and-class-members/"]
            ],
            "tip": "Make data members private by default. Public data means every user of your class can break its invariants."
          },
          {
            "t": "Constructors, Destructors & Initialization",
            "d": "Member initializer lists, delegating constructors, and destruction order.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Prefer member initializer lists: members initialize before the constructor body runs",
              "Delegating constructors call sibling constructors; = default and = delete control special members",
              "Destruction runs in reverse construction order — members then base classes"
            ],
            "do": [
              "Write a class with const and reference members to prove initializer lists are mandatory for them",
              "Add print statements to constructors/destructors of a composed object and trace the order",
              "= delete the copy constructor of a resource-owning class and watch copies fail to compile"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — constructors", "https://www.learncpp.com/cpp-tutorial/constructors/"],
              ["cppreference — initialization", "https://en.cppreference.com/w/cpp/language/initialization"]
            ],
            "tip": "Initialize members in the order they are declared, not the order in the initializer list — the compiler warns for a reason."
          },
          {
            "t": "Rule of Three, Five & Zero",
            "d": "Copy/move semantics done right: when to write them and when to let the compiler.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Rule of three: destructor + copy ctor + copy assign travel together for owning classes",
              "Rule of five adds move ctor + move assign; rule of zero says compose RAII types and write none",
              "The compiler-generated versions do member-wise copy/move — correct for non-owning classes"
            ],
            "do": [
              "Write a Buffer class owning a raw array with full rule-of-five support",
              "Run it through copy, move, self-assignment, and destruction under ASan",
              "Refactor it to hold a std::vector and delete all five special members (rule of zero)"
            ],
            "tools": ["GCC", "AddressSanitizer"],
            "res": [
              ["Learn C++ — rule of five", "https://www.learncpp.com/cpp-tutorial/the-rule-of-three-five-and-zero/"]
            ],
            "tip": "If your class needs a custom destructor, it almost certainly needs custom copy and move too. The compiler will not remind you."
          },
          {
            "t": "Inheritance",
            "d": "Base and derived classes, access levels, and when inheritance is the wrong tool.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "public inheritance models is-a; protected/private inheritance are rare and usually wrong",
              "Base constructors run before derived; destructors reverse — always make base destructors virtual",
              "Prefer composition over inheritance unless you genuinely need runtime polymorphism"
            ],
            "do": [
              "Build a Shape base with Circle/Rectangle derived classes sharing an interface",
              "Delete through a base pointer without a virtual destructor under ASan and observe the leak",
              "Refactor one inheritance hierarchy into composition and compare the code"
            ],
            "tools": ["GCC", "AddressSanitizer"],
            "res": [
              ["Learn C++ — inheritance", "https://www.learncpp.com/cpp-tutorial/inheritance/"]
            ],
            "tip": "Inheritance is for polymorphic interfaces, not code reuse. Reuse via composition; inherit only to be treated polymorphically."
          },
          {
            "t": "Virtual Functions & Polymorphism",
            "d": "Dynamic dispatch, vtables, override/final, and abstract interfaces.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "virtual enables dynamic dispatch: the call resolves at runtime to the most-derived override",
              "override catches signature mismatches at compile time; final blocks further overriding",
              "Pure virtual (= 0) makes abstract classes — interfaces with no implementation, only contract"
            ],
            "do": [
              "Build a plugin-style system: vector<Shape*> calling virtual area() on mixed derived types",
              "Forget override on a mismatched signature and watch the silent wrong behavior; add override and get an error",
              "Design an ILogger interface with ConsoleLogger and FileLogger implementations"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — virtual functions", "https://www.learncpp.com/cpp-tutorial/virtual-functions/"],
              ["cppreference — virtual", "https://en.cppreference.com/w/cpp/language/virtual"]
            ],
            "tip": "Virtual calls cost one indirection and block inlining. Do not make everything virtual 'just in case'."
          },
          {
            "t": "Operator Overloading",
            "d": "Make your types behave like built-ins: arithmetic, comparison, streams, and subscripts.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Overload as member vs non-member: symmetric operators (like +) usually want non-members for conversions",
              "The canonical forms: copy-and-swap assignment, stream insertion as friend, subscript returning reference",
              "C++20's spaceship operator (<=>) generates all comparisons from one definition"
            ],
            "do": [
              "Write a Vec2 class with +, -, *, ==, and << overloads",
              "Implement operator[] with both const and non-const versions for a container",
              "Add <=> to a struct and verify <, >, <=, >= all work"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — operator overloading", "https://www.learncpp.com/cpp-tutorial/introduction-to-operator-overloading/"],
              ["cppreference — operator overloading", "https://en.cppreference.com/w/cpp/language/operators"]
            ],
            "tip": "Overloaded operators should behave like their built-in cousins. A + that mutates its operand is a trap."
          }
        ]
      },
      {
        "t": "Templates & Generic Programming",
        "d": "Write code once for every type: function and class templates, concepts, and metaprogramming.",
        "lv": 3,
        "children": [
          {
            "t": "Function & Class Templates",
            "d": "Type parameters instead of concrete types — the compiler stamps out what you use.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "template <typename T> lets one function work for any T; deduction usually fills T in for you",
              "Class templates (like a hand-rolled vector<T>) generate a distinct class per instantiation",
              "Templates live in headers: the compiler needs the full definition at the point of use"
            ],
            "do": [
              "Write a max(a, b) template and call it with int, double, and std::string",
              "Implement a minimal vector<T> with push_back, operator[], and automatic growth",
              "Trigger a template error on purpose and practice reading the (long) diagnostic"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["Learn C++ — templates", "https://www.learncpp.com/cpp-tutorial/function-templates/"],
              ["cppreference — templates", "https://en.cppreference.com/w/cpp/language/templates"]
            ],
            "tip": "Template errors are long because they show the whole instantiation stack. Read from the bottom: your call site is there."
          },
          {
            "t": "Template Specialization",
            "d": "Full and partial specialization: custom behavior for specific types.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Full specialization replaces the template entirely for one concrete type",
              "Partial specialization (classes only) customizes for families like T* or Container<T>",
              "Specialization powers type traits and tag dispatch — the STL is built on this"
            ],
            "do": [
              "Specialize a Printer<T> template for std::string to add quotes",
              "Partially specialize a Storage<T*> to manage pointer types differently",
              "Reimplement std::is_pointer as a struct with a primary template and a partial specialization"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — specialization", "https://en.cppreference.com/w/cpp/language/template_specialization"],
              ["Learn C++ — template specialization", "https://www.learncpp.com/cpp-tutorial/template-specialization/"]
            ],
            "tip": "Prefer overloading and if constexpr over specialization for functions — function partial specialization does not exist for a reason."
          },
          {
            "t": "Variadic Templates & Fold Expressions",
            "d": "Templates that take any number of arguments — type-safe printf done right.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Parameter packs (Args...) capture any number of types; recursion or folds process them",
              "Fold expressions ((args + ...)) collapse a pack with an operator in one line",
              "sizeof...(Args) counts the pack — the backbone of tuple and type-safe formatting"
            ],
            "do": [
              "Write a type-safe print function taking any number of arguments of any printable type",
              "Implement a sum() over a parameter pack with a fold expression",
              "Build a tiny tuple-like class storing heterogeneous values"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — parameter packs", "https://en.cppreference.com/w/cpp/language/parameter_pack"],
              ["cppreference — fold expressions", "https://en.cppreference.com/w/cpp/language/fold"]
            ],
            "tip": "Recursive pack processing needs a base-case overload. Forget it and the compiler recurses into an error novel."
          },
          {
            "t": "Concepts (C++20)",
            "d": "Constrain templates with concepts: clear requirements, clear errors.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Concepts name requirements: `template<std::integral T>` only accepts integer-like types",
              "requires clauses express arbitrary constraints; standard concepts live in <concepts>",
              "Concepts turn 200-line template errors into one readable 'constraints not satisfied' message"
            ],
            "do": [
              "Constrain your max template with std::totally_ordered and test with a non-comparable type",
              "Write a custom Printable concept requiring operator<< and use it on a print_all function",
              "Compare the error messages with and without the concept constraint"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — concepts", "https://en.cppreference.com/w/cpp/language/constraints"],
              ["Learn C++ — concepts", "https://www.learncpp.com/cpp-tutorial/concepts/"]
            ],
            "tip": "Concepts do not make bad designs good — they make template requirements explicit. Name them after semantics, not syntax."
          },
          {
            "t": "constexpr & Compile-Time Programming",
            "d": "Shift work to compile time: constexpr functions, if constexpr, and consteval.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "constexpr functions can run at compile time or runtime; the compiler chooses based on context",
              "if constexpr discards the untaken branch at compile time — no more tag-dispatch gymnastics",
              "consteval forces compile-time evaluation; constinit guarantees static initialization"
            ],
            "do": [
              "Write a constexpr factorial and verify with static_assert(factorial(5) == 120)",
              "Use if constexpr in a template to handle integral vs floating types differently",
              "Compute a lookup table at compile time and confirm zero runtime cost in the disassembly"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["cppreference — constexpr", "https://en.cppreference.com/w/cpp/language/constexpr"],
              ["Learn C++ — constexpr", "https://www.learncpp.com/cpp-tutorial/constexpr-functions/"]
            ],
            "tip": "Mark everything constexpr that can be. It costs nothing and buys compile-time verification plus potential zero-cost computation."
          }
        ]
      },
      {
        "t": "The Standard Library (STL)",
        "d": "Containers, iterators, and algorithms: the toolbox that makes C++ productive.",
        "lv": 2,
        "children": [
          {
            "t": "Sequence Containers",
            "d": "vector, deque, list, array: know their complexity guarantees and pick correctly.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "vector: contiguous, cache-friendly, amortized O(1) push_back — the default container",
              "deque: fast push/pop at both ends; list: O(1) splice anywhere but pointer-chasing iteration",
              "reserve() up front when you know the size; shrink_to_fit when memory matters"
            ],
            "do": [
              "Benchmark push_back with and without reserve for 10 million ints",
              "Implement a task queue with deque and a most-recently-used cache with list + map",
              "Measure iteration speed of vector vs list to feel cache locality"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — containers", "https://en.cppreference.com/w/cpp/container"],
              ["Learn C++ — STL containers", "https://www.learncpp.com/cpp-tutorial/introduction-to-stl-containers/"]
            ],
            "tip": "Default to std::vector. You need measured evidence — not intuition — to choose anything else."
          },
          {
            "t": "Associative Containers",
            "d": "Maps and sets: ordered trees vs hash tables, and custom keys done right.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "std::map/std::set: ordered (tree), O(log n); std::unordered_map: hashed, average O(1)",
              "Custom keys need operator< (ordered) or hash + equality (unordered)",
              "try_emplace and operator[] differ: [] default-constructs missing keys, which surprises"
            ],
            "do": [
              "Build a word-frequency counter with unordered_map<string, int>",
              "Define a struct key with operator< for std::map and a hash functor for unordered_map",
              "Benchmark ordered vs unordered lookup on 1M entries"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — unordered_map", "https://en.cppreference.com/w/cpp/container/unordered_map"],
              ["Learn C++ — maps", "https://www.learncpp.com/cpp-tutorial/introduction-to-stdmap/"]
            ],
            "tip": "unordered_map with the default hash on strings is fine; on custom types, a bad hash function silently degrades to O(n)."
          },
          {
            "t": "Iterators",
            "d": "The glue between containers and algorithms: categories, invalidation, and ranges.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Iterators abstract position: begin()/end(), and the end iterator is one-past-the-last",
              "Iterator invalidation rules: vector reallocation invalidates everything; list insertion invalidates nothing",
              "Range-based for and algorithms hide iterators, but invalidation rules still apply to you"
            ],
            "do": [
              "Erase elements from a vector while iterating using the erase-remove idiom's iterator form",
              "Trigger iterator invalidation by push_back inside a loop over the same vector; fix with indices or reserve",
              "Write a function taking iterator pairs so it works on any container"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — iterators", "https://en.cppreference.com/w/cpp/iterator"],
              ["Learn C++ — iterators", "https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/"]
            ],
            "tip": "After any mutating operation, assume your iterators are dead until you re-check that container's invalidation rules."
          },
          {
            "t": "Algorithms & Lambdas",
            "d": "sort, find, transform: the <algorithm> header plus lambdas as inline predicates.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Algorithms separate logic from containers: sort, find_if, transform, accumulate cover 80% of loops",
              "Lambdas `[capture](params){ body }`: capture by value [=] or reference [&], mutable for state",
              "Prefer algorithms over hand loops: intent is clearer and the library is optimized and tested"
            ],
            "do": [
              "Rewrite five hand-written loops with std::sort, std::find_if, std::transform, std::accumulate",
              "Use the erase-remove idiom to delete all even numbers from a vector in one statement",
              "Write a lambda capturing a threshold by value and counting matches with std::count_if"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — algorithms", "https://en.cppreference.com/w/cpp/algorithm"],
              ["Learn C++ — lambdas", "https://www.learncpp.com/cpp-tutorial/introduction-to-lambdas/"]
            ],
            "tip": "Capturing locals by reference in a lambda that outlives the scope is a dangling reference. Default to [=] for escaping lambdas."
          },
          {
            "t": "Strings, Streams & Formatting",
            "d": "std::string, string_view, iostream, and the modern std::format.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "std::string owns its buffer; std::string_view is a non-owning view — fast parameters, dangerous returns",
              "stringstream parses and builds strings; file streams (fstream) handle file I/O with RAII",
              "std::format (C++20) gives Python-style type-safe formatting; std::print (C++23) writes it directly"
            ],
            "do": [
              "Write a CSV line parser using string_view to avoid allocations, then find its lifetime pitfall",
              "Replace printf-style code with std::format and compare safety and readability",
              "Build a config-file reader with ifstream handling missing-file and parse errors"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — string", "https://en.cppreference.com/w/cpp/string/basic_string"],
              ["cppreference — format", "https://en.cppreference.com/w/cpp/utility/format"]
            ],
            "tip": "Never return a string_view to a local string. The view outlives the buffer and every use after is undefined."
          }
        ]
      },
      {
        "t": "Modern C++ Idioms",
        "d": "Exceptions, optional/variant, ranges, modules, and the C++26 horizon.",
        "lv": 3,
        "children": [
          {
            "t": "Exception Handling",
            "d": "try/catch/throw, exception safety guarantees, and when not to use exceptions.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Throw by value, catch by const reference; exception types derive from std::exception",
              "Safety levels: no-throw, strong (commit-or-rollback), basic (no leaks, valid state)",
              "noexcept marks non-throwing functions — move operations should be noexcept for container efficiency"
            ],
            "do": [
              "Write a function with strong exception safety using copy-and-swap",
              "Catch a derived exception by base reference vs by value and observe slicing",
              "Audit a small codebase marking operations noexcept where safe"
            ],
            "tools": ["GCC"],
            "res": [
              ["Learn C++ — exceptions", "https://www.learncpp.com/cpp-tutorial/introduction-to-exceptions/"],
              ["cppreference — exceptions", "https://en.cppreference.com/w/cpp/language/exceptions"]
            ],
            "tip": "Never throw from a destructor. During stack unwinding a second throw calls std::terminate."
          },
          {
            "t": "std::optional, variant & any",
            "d": "Express 'maybe', 'one of these', and 'something' without nulls and void*.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "optional<T>: a value that may be absent — replaces sentinel values and out-params for 'not found'",
              "variant<Ts...>: a type-safe union; visit it with std::visit instead of switching on an index",
              "any: type-erased anything with runtime checked casts — powerful, rarely the right answer"
            ],
            "do": [
              "Rewrite a find function returning -1-on-missing to return optional<size_t>",
              "Model a config value as variant<int, double, string, bool> with a visitor printer",
              "Chain optionals with value_or and and_then to avoid nested null checks"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — optional", "https://en.cppreference.com/w/cpp/utility/optional"],
              ["cppreference — variant", "https://en.cppreference.com/w/cpp/utility/variant"]
            ],
            "tip": "optional<optional<T>> and optional<T&> are not allowed — the first nests confusingly, the second does not exist."
          },
          {
            "t": "Ranges (C++20)",
            "d": "Composable, lazy views: filter and transform pipelines without temporary vectors.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Views are lazy and non-owning: vec | filter(pred) | transform(f) builds a pipeline, not temporaries",
              "Range algorithms take the range directly: std::ranges::sort(vec) instead of sort(begin, end)",
              "Views do not own data — piping a temporary container into a view dangles"
            ],
            "do": [
              "Rewrite a filter-then-transform loop as a single ranges pipeline",
              "Use views::iota, views::take, and views::drop to generate sequences lazily",
              "Trigger the dangling-view bug with a temporary and fix it by materializing first"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — ranges", "https://en.cppreference.com/w/cpp/ranges"],
              ["Learn C++ — ranges", "https://www.learncpp.com/cpp-tutorial/ranges/"]
            ],
            "tip": "A view over a temporary is the ranges version of returning a reference to a local. Name the container first."
          },
          {
            "t": "Modules (C++20)",
            "d": "The successor to headers: faster builds, no macro leakage, real encapsulation.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "export module math; replaces the header/source split for new code — no include guards needed",
              "Macros do not leak across module boundaries, which kills a whole class of header bugs",
              "Adoption is still ramping up: CMake 3.28+ and recent compilers support it, ecosystems are migrating"
            ],
            "do": [
              "Convert a small header/source pair into a named module and import it",
              "Build it with CMake's module support and compare build times against the header version",
              "Demonstrate that a macro defined before import does not leak into the module"
            ],
            "tools": ["CMake", "GCC", "Clang", "MSVC"],
            "res": [
              ["cppreference — modules", "https://en.cppreference.com/w/cpp/language/modules"],
              ["CMake modules support", "https://cmake.org/cmake/help/latest/manual/cmake-cxxmodules.7.html"]
            ],
            "tip": "Do not rewrite a working header codebase to modules yet. Use modules for new components where your toolchain supports them."
          },
          {
            "t": "C++26: Reflection & Contracts",
            "d": "The headline features of the 2026 standard: introspect types and assert contracts.",
            "lv": 3,
            "time": "~4h",
            "tip": "C++26 is brand new — compiler support is still maturing, so treat these as forward-looking, not production defaults.",
            "learn": [
              "Static reflection (^T, std::meta): query members, names, and types at compile time — serialization without macros",
              "Contracts: pre/post conditions and assertions checked by the compiler with configurable semantics",
              "Status check: finalized March 2026; GCC 14+ and Clang 17+ carry growing -std=c++26 support"
            ],
            "do": [
              "With a recent compiler, reflect over a struct's members and print their names at compile time",
              "Add a contract precondition to a function and observe the violation report",
              "Check your compiler's C++26 feature table and note which headline features it implements"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["C++26 — Wikipedia", "https://en.wikipedia.org/wiki/C%2B%2B26"],
              ["GCC C++ standards support", "https://gcc.gnu.org/projects/cxx-status.html"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Build Systems & Tooling",
        "d": "CMake, package managers, debuggers, and sanitizers — the professional workflow.",
        "lv": 2,
        "children": [
          {
            "t": "Compilation Pipeline Deep Dive",
            "d": "Preprocess, compile, assemble, link: what each stage does and how to inspect it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "-E, -S, -c flags stop after each stage; -save-temps keeps every intermediate file",
              "Name mangling encodes signatures into symbol names — the reason for extern \"C\" at C boundaries",
              "ODR (one definition rule): inline functions and templates may repeat; everything else must be unique"
            ],
            "do": [
              "Compile a two-file program stage by stage and inspect the .s assembly for a simple function",
              "Use nm -C to demangle symbols and find your functions in the object file",
              "Create an ODR violation across two files and read the (often silent!) misbehavior"
            ],
            "tools": ["GCC", "binutils", "Compiler Explorer"],
            "res": [
              ["Compiler Explorer", "https://godbolt.org/"],
              ["GCC documentation", "https://gcc.gnu.org/onlinedocs/"]
            ],
            "tip": "When the linker complains about a template, the definition is probably in a .cpp file. Templates must be visible — keep them in headers."
          },
          {
            "t": "CMake for C++ Projects",
            "d": "Targets, transitive dependencies, and FetchContent: CMake the modern way.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Modern CMake is target-based: target_link_libraries propagates includes and flags transitively",
              "FetchContent downloads and builds dependencies at configure time — no system installs needed",
              "Presets (CMakePresets.json) encode Debug/Release/sanitizer configurations for the whole team"
            ],
            "do": [
              "Structure a project: app target, lib target, tests target, linked properly",
              "Pull in fmt via FetchContent and format output with it",
              "Add a sanitizer preset running ASan+UBSan and a CI job using it"
            ],
            "tools": ["CMake", "Ninja"],
            "res": [
              ["CMake tutorial", "https://cmake.org/cmake/help/latest/guide/tutorial/"],
              ["Modern CMake guide", "https://cliutils.gitlab.io/modern-cmake/"]
            ],
            "tip": "Set CMAKE_CXX_STANDARD on targets, not globally, and never hardcode -std= flags in CMAKE_CXX_FLAGS."
          },
          {
            "t": "Package Managers: vcpkg & Conan",
            "d": "Stop vendoring libraries: declarative dependencies for C++.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "vcpkg: Microsoft's manifest mode (vcpkg.json) integrates with CMake toolchain files",
              "Conan: decentralized, profile-driven, handles binaries and complex dependency graphs",
              "Choose one per project and commit the manifest/lockfile — reproducible builds beat latest builds"
            ],
            "do": [
              "Add nlohmann_json to a project via vcpkg manifest mode and parse a JSON file",
              "Do the same with Conan 2 and compare the workflow",
              "Pin versions and verify a clean-machine build reproduces exactly"
            ],
            "tools": ["vcpkg", "Conan", "CMake"],
            "res": [
              ["vcpkg documentation", "https://learn.microsoft.com/en-us/vcpkg/"],
              ["Conan documentation", "https://docs.conan.io/2/"]
            ],
            "tip": "Vendoring a library by copying its source into your repo feels fast and becomes dependency hell. Use a package manager."
          },
          {
            "t": "Debugging & Sanitizers",
            "d": "GDB/LLDB for crashes, ASan/UBSan/TSan for the bugs debuggers cannot see.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "GDB: breakpoints, backtrace, print, watchpoints — and pretty printers for STL containers",
              "ASan finds memory errors, UBSan finds undefined behavior, TSan finds data races",
              "Static analysis (clang-tidy) and -fanalyzer catch bugs without running the code"
            ],
            "do": [
              "Debug a vector out-of-bounds crash in GDB using pretty printers",
              "Build a buggy program with all three sanitizers and read each report",
              "Run clang-tidy on your project and fix every warning it reports"
            ],
            "tools": ["GDB", "LLDB", "AddressSanitizer", "clang-tidy"],
            "res": [
              ["GDB documentation", "https://sourceware.org/gdb/documentation/"],
              ["AddressSanitizer wiki", "https://github.com/google/sanitizers/wiki/AddressSanitizer"]
            ],
            "tip": "Sanitizers slow execution 2-3x, so run them on your test suite in CI — not by hand once a year."
          }
        ]
      },
      {
        "t": "Concurrency & Capstone",
        "d": "Threads, atomics, the memory model — then a portfolio-grade C++ project.",
        "lv": 3,
        "children": [
          {
            "t": "Threads, Mutexes & Condition Variables",
            "d": "std::thread, RAII locking, and producer-consumer done safely.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "std::thread runs a callable; always join() or detach() before the thread object dies",
              "std::mutex + std::lock_guard/std::scoped_lock: RAII locking that cannot forget to unlock",
              "std::condition_variable coordinates threads: wait with a predicate to survive spurious wakeups"
            ],
            "do": [
              "Parallelize a computation with std::thread and join all workers",
              "Build a thread-safe queue with mutex + condition variable",
              "Introduce a data race on purpose, catch it with ThreadSanitizer, then fix it"
            ],
            "tools": ["GCC", "ThreadSanitizer"],
            "res": [
              ["cppreference — thread", "https://en.cppreference.com/w/cpp/thread/thread"],
              ["Learn C++ — concurrency", "https://www.learncpp.com/cpp-tutorial/introduction-to-multithreading/"]
            ],
            "tip": "Always wait on a condition variable with a predicate loop. Spurious wakeups are real and your code must tolerate them."
          },
          {
            "t": "Atomics & the Memory Model",
            "d": "Lock-free basics: std::atomic, memory ordering, and why the default is safest.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "std::atomic<T> gives race-free reads/writes; the default seq_cst ordering is the easiest to reason about",
              "Relaxed/acquire/release orderings trade guarantees for speed — reach for them only with expertise",
              "The C++ memory model defines what 'happens before' means; data races remain undefined behavior"
            ],
            "do": [
              "Implement a lock-free counter and a spinlock with std::atomic_flag",
              "Write the classic message-passing example and prove it needs release/acquire, not relaxed",
              "Benchmark mutex vs atomic counter under contention"
            ],
            "tools": ["GCC", "ThreadSanitizer"],
            "res": [
              ["cppreference — atomic", "https://en.cppreference.com/w/cpp/atomic/atomic"],
              ["cppreference — memory order", "https://en.cppreference.com/w/cpp/atomic/memory_order"]
            ],
            "tip": "If you cannot explain why you need memory_order_relaxed, use the default. Wrong orderings fail only under load, in production."
          },
          {
            "t": "Async: futures, async & Coroutines",
            "d": "std::async for task parallelism and coroutines (C++20) for lazy async code.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "std::async launches work and returns a future; .get() retrieves the result or rethrows",
              "Coroutines: functions that can suspend (co_await) and resume — generators and async I/O without threads",
              "The coroutine machinery (promise types) is low-level; most code uses library abstractions built on it"
            ],
            "do": [
              "Parallelize independent computations with std::async and collect results via futures",
              "Write a generator coroutine yielding Fibonacci numbers lazily",
              "Compare threads vs async vs coroutines for an I/O-bound workload conceptually"
            ],
            "tools": ["GCC"],
            "res": [
              ["cppreference — coroutines", "https://en.cppreference.com/w/cpp/language/coroutines"],
              ["cppreference — async", "https://en.cppreference.com/w/cpp/thread/async"]
            ],
            "tip": "Coroutines do not make code concurrent by themselves — they make suspension cheap. You still need an executor or event loop."
          },
          {
            "t": "Capstone: Ship a Modern C++ Project",
            "d": "Design, build, test, and document a complete C++17/20 project like a professional.",
            "lv": 3,
            "time": "~3w",
            "learn": [
              "Project layout: CMake, src/include/tests, FetchContent dependencies, sanitizer CI",
              "Modern style: RAII everywhere, no raw owning pointers, algorithms over loops, const correctness",
              "Documentation: README with build steps, design rationale, and honest known limitations"
            ],
            "do": [
              "Pick one: a thread pool, a JSON library, a small HTTP server, or a game with SFML",
              "Set up CMake + Catch2/Googletest tests + GitHub Actions (gcc, clang, sanitizers)",
              "Write the README and record a demo; get the build green on a clean machine"
            ],
            "tools": ["CMake", "Catch2", "GitHub Actions", "vcpkg"],
            "res": [
              ["Catch2 documentation", "https://github.com/catchorg/Catch2"],
              ["GoogleTest documentation", "https://github.com/google/googletest"]
            ],
            "tip": "Reviewers judge C++ code on ownership discipline first. Zero raw news and sanitizer-clean CI is the bar.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
