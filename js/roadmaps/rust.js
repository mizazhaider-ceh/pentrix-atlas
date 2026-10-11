/* Atlas roadmap data: Rust (rust) */
ROADMAPS.push({
  "id": "rust",
  "title": "Rust",
  "icon": "🦀",
  "color": "#b7410e",
  "desc": "Rust deeply: ownership and the borrow checker, traits and lifetimes, fearless concurrency, async, and safe unsafe boundaries.",
  "kind": "skill",
  "root": {
    "t": "Rust Programming",
    "d": "Master ownership, the borrow checker, and fearless systems programming.",
    "lv": 0,
    "children": [
      {
        "t": "Rust Foundations",
        "d": "Why Rust exists, and the ownership model everything else builds on.",
        "lv": 1,
        "children": [
          {
            "t": "Why Rust",
            "d": "Memory safety without a garbage collector, enforced at compile time.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The ownership model: safety as a compile-time property, not runtime checks",
              "Where Rust wins: systems, browsers (WASM), embedded, high-performance services",
              "The borrow checker's reputation vs the reality of learning it"
            ],
            "do": [
              "Install Rust via rustup and verify rustc, cargo and rustup versions",
              "Build the classic guessing-game program from the Rust Book",
              "Write one paragraph on what memory safety without GC actually buys you"
            ],
            "tools": [
              "rustup",
              "cargo"
            ],
            "res": [
              [
                "Rust Official Site",
                "https://www.rust-lang.org"
              ],
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Cargo Essentials",
            "d": "Builds, dependencies and publishing in one tool.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "cargo new/build/run/test/check: the daily commands",
              "Cargo.toml: dependencies, features and profiles",
              "Editions (2015/2018/2021/2024) and crates.io"
            ],
            "do": [
              "Create a project, add a crates.io dependency, and run its tests",
              "Switch between debug and release profiles and compare binary size and speed",
              "Run cargo doc --open and explore your dependency's documentation"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Cargo Book",
                "https://doc.rust-lang.org/cargo/"
              ]
            ]
          },
          {
            "t": "Variables and Mutability",
            "d": "Immutable by default, and why that is a feature.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Immutability by default; mut as an explicit opt-in",
              "Shadowing vs mutation: same name, new binding",
              "const vs static and type inference"
            ],
            "do": [
              "Refactor a program to use shadowing instead of mut where the meaning changes",
              "Trigger the 'cannot assign twice to immutable variable' error and fix it two ways",
              "Compare const and static for a lookup table and explain the difference"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "Prefer shadowing over mut when the type or meaning changes. It signals transformation, not mutation, to the next reader."
          },
          {
            "t": "Ownership Rules",
            "d": "The single idea that makes Rust Rust.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Each value has exactly one owner; ownership moves on assignment",
              "Move semantics vs Copy types: Stack-only data copies, heap data moves",
              "Ownership transfer through function calls and returns"
            ],
            "do": [
              "Write code that moves a String into a function, then fix the use-after-move error",
              "Derive Copy and Clone on a small struct and observe what changes",
              "Draw the ownership transfers of a five-line program as a diagram"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Ownership Chapter",
                "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"
              ]
            ],
            "tip": "Stop fighting use-after-move errors and start reading them: each one points at a real lifetime question your design must answer."
          },
          {
            "t": "Borrowing and References",
            "d": "Use data without taking it.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "&T vs &mut T: shared vs exclusive borrows",
              "The core rule: many immutable borrows OR one mutable borrow",
              "Non-lexical lifetimes: borrows end when last used, not at scope end"
            ],
            "do": [
              "Write functions taking &str and &mut Vec and call them correctly",
              "Trigger E0502 (cannot borrow as mutable more than once) and fix it",
              "Explain in your own words why the borrow checker rejects your first attempt"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "E0502 is the borrow checker's most famous error. Read it as the compiler protecting you from a data race you would have shipped."
          },
          {
            "t": "Slices and the Stack vs Heap",
            "d": "Views into data, and where data actually lives.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "&[T] and &str: fat pointers carrying length",
              "String vs str: owned buffer vs borrowed view",
              "Stack vs heap: what lives where and why it matters for performance"
            ],
            "do": [
              "Write a function taking &str that splits text without allocating",
              "Convert between String, &str and Vec<u8>, noting each allocation",
              "Use std::mem::size_of to compare sizes of common types"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Control Flow and Pattern Matching",
            "d": "match is not a switch statement.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "match exhaustiveness: the compiler proves you handled every case",
              "if let, let-else and while let for ergonomic matching",
              "if as an expression and loops returning values via break"
            ],
            "do": [
              "Rewrite nested if-else chains as a single match",
              "Use let-else for early returns on Option/Result",
              "Model a traffic light as an enum and match every state transition"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          }
        ]
      },
      {
        "t": "Types in Depth",
        "d": "Structs, enums, collections and the error-handling duo.",
        "lv": 1,
        "children": [
          {
            "t": "Structs and Methods",
            "d": "Named data with behavior attached.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Classic, tuple and unit structs",
              "impl blocks: &self, &mut self and associated functions",
              "Field init shorthand and the struct update syntax"
            ],
            "do": [
              "Model a Rectangle with area() and can_hold() methods",
              "Build a builder-style API using &mut self chaining",
              "Convert a tuple struct to a named struct and justify the choice"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Enums",
            "d": "Types that are exactly one of several possibilities.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Enums carrying data: the algebraic data type",
              "Option<T> and Result<T, E> are just enums you already use",
              "Methods on enums and matching with bindings"
            ],
            "do": [
              "Model a state machine (e.g. traffic light, TCP states) as an enum",
              "Match on an enum variant and bind its inner data",
              "Refactor a boolean-plus-string pair into a single expressive enum"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Collections",
            "d": "Vec, HashMap and String in practice.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Vec: the growable workhorse and its capacity behavior",
              "HashMap entry API: the idiomatic update-or-insert",
              "String building without quadratic concatenation"
            ],
            "do": [
              "Build a word-frequency counter using the entry API",
              "Pre-size a Vec with capacity and measure the reallocation difference",
              "Implement a simple LRU-ish cache on top of HashMap and VecDeque"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "std Collections",
                "https://doc.rust-lang.org/std/collections/"
              ]
            ]
          },
          {
            "t": "Error Handling: Option and Result",
            "d": "No exceptions, no null: just types.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Option<T> for absence, Result<T, E> for failure",
              "The ? operator: early return on error, beautifully",
              "Combinators: map, and_then, unwrap_or instead of nested matches"
            ],
            "do": [
              "Chain three fallible operations with ? instead of nested matches",
              "Convert a program full of unwrap() into one returning Result",
              "Define when expect() with a message beats unwrap() in application code"
            ],
            "tools": [
              "cargo",
              "anyhow"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "unwrap() in a library is a bug report waiting to happen. Reserve it for prototypes and tests; return Result at boundaries."
          },
          {
            "t": "Closures and Iterators",
            "d": "The functional core of idiomatic Rust.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Fn, FnMut, FnOnce: what a closure captures decides its trait",
              "Iterator adaptors: map, filter, fold, collect; laziness by default",
              "Consuming vs borrowing iterators: into_iter, iter, iter_mut"
            ],
            "do": [
              "Rewrite three loops as iterator chains and compare readability",
              "Write a closure that mutates captured state and identify its Fn trait",
              "Benchmark an iterator chain against a hand-written loop"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Iterator Docs",
                "https://doc.rust-lang.org/std/iter/trait.Iterator.html"
              ]
            ]
          },
          {
            "t": "Generics",
            "d": "One implementation, many types, zero runtime cost.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Type parameters and monomorphization: generics compile to specialized code",
              "Trait bounds constraining what T can do",
              "where clauses for readable complex bounds"
            ],
            "do": [
              "Write a generic largest() constrained by PartialOrd",
              "Move a complex bound into a where clause and compare readability",
              "Explain why generic code can be faster than trait-object code"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Generics Chapter",
                "https://doc.rust-lang.org/book/ch10-00-generics.html"
              ]
            ]
          },
          {
            "t": "Smart Pointers: Box, Rc, Arc",
            "d": "Ownership with indirection and sharing.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Box<T>: heap allocation and recursive types",
              "Rc<T>: single-threaded shared ownership with reference counting",
              "Arc<T>: thread-safe sharing; Deref coercion smoothing the API"
            ],
            "do": [
              "Build a recursive cons list using Box",
              "Share configuration across modules with Rc, then across threads with Arc",
              "Trigger a reference cycle with Rc and discuss Weak as the fix"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "Reach for Rc/Arc when ownership is genuinely shared. If one clear owner exists, restructure instead of reference-counting."
          }
        ]
      },
      {
        "t": "Traits and Lifetimes",
        "d": "Shared behavior and the borrow checker's full power.",
        "lv": 2,
        "children": [
          {
            "t": "Traits",
            "d": "Interfaces done the Rust way.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Defining traits, default methods and implementing them",
              "derive for Clone, Debug, PartialEq and friends",
              "The orphan rule: why you cannot implement foreign traits for foreign types"
            ],
            "do": [
              "Implement Display for your own type with proper formatting",
              "Derive Debug and Clone, then hand-implement one of them to feel the difference",
              "Hit the orphan rule and fix it with the newtype pattern"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Traits Chapter",
                "https://doc.rust-lang.org/book/ch10-02-traits.html"
              ]
            ]
          },
          {
            "t": "Trait Bounds and Associated Types",
            "d": "Constraining generics precisely.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Bound syntax: T: Display + Clone and where clauses",
              "Associated types vs generic parameters: Iterator::Item as the model",
              "Supertraits and blanket implementations"
            ],
            "do": [
              "Write a generic function over Iterator and use its Item type",
              "Convert a generic-parameter design to associated types and compare ergonomics",
              "Use a blanket impl to give every T: Display a new capability"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Dynamic Dispatch",
            "d": "Trait objects when the type is not known at compile time.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "dyn Trait: vtables and runtime dispatch",
              "Object safety: which traits can become trait objects",
              "Static vs dynamic dispatch: performance and flexibility tradeoffs"
            ],
            "do": [
              "Build a plugin registry storing Box<dyn Plugin>",
              "Hit an object-safety error with a generic method and fix it",
              "Benchmark static dispatch vs dyn dispatch on a hot loop"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Lifetimes and Elision",
            "d": "Naming how long references stay valid.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Why lifetimes exist: dangling references are a compile error",
              "The three elision rules that hide most annotations",
              "'static: living for the whole program, and when it is a lie"
            ],
            "do": [
              "Annotate a function returning a reference tied to one parameter",
              "Predict which functions need explicit lifetimes using the elision rules",
              "Fix a 'borrowed value does not live long enough' error by restructuring, not fighting"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Lifetimes Chapter",
                "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
              ]
            ],
            "tip": "Lifetime annotations do not change how long data lives. They describe relationships the compiler must verify."
          },
          {
            "t": "Interior Mutability",
            "d": "Mutating through a shared reference, legally.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Cell, RefCell and OnceCell: the interior mutability family",
              "Runtime borrow checking: RefCell panics where the compiler would error",
              "Legitimate uses: mocks, caches, shared graphs"
            ],
            "do": [
              "Implement a test mock using RefCell for interior mutation",
              "Trigger a RefCell runtime borrow panic on purpose and read it",
              "Build a memoized function with interior mutability and justify the design"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Cow and Zero-Copy Patterns",
            "d": "Borrow when you can, own when you must.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Clone-on-write: Cow<'a, str> as the borrow-or-own type",
              "Designing APIs that avoid allocation on the common path",
              "Lifetimes in structs holding references"
            ],
            "do": [
              "Write a parser returning Cow<str>, allocating only when unescaping",
              "Store a reference in a struct with an explicit lifetime parameter",
              "Benchmark the borrowed vs owned path of your parser"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Classic Borrow-Checker Puzzles",
            "d": "The rites of passage, solved deliberately.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Self-referential structs and why they fight the borrow checker",
              "Splitting borrows: disjoint field access the compiler understands",
              "Reborrowing &mut and two-phase borrows"
            ],
            "do": [
              "Fix a self-referential struct attempt using indices or Rc instead",
              "Split one &mut self method into two that borrow disjoint fields",
              "Solve three borrow-checker errors from a puzzle collection without cloning"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "When the borrow checker says no, the usual answer is a better data structure, not a louder annotation."
          }
        ]
      },
      {
        "t": "Concurrency and Async",
        "d": "Fearless concurrency: threads today, async runtimes tomorrow.",
        "lv": 2,
        "children": [
          {
            "t": "Threads and Message Passing",
            "d": "OS threads with ownership doing the safety work.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "thread::spawn and move closures transferring ownership",
              "mpsc channels: multi-producer, single-consumer message passing",
              "Scoped threads: borrowing across thread boundaries safely"
            ],
            "do": [
              "Build a parallel sum splitting work across scoped threads",
              "Implement a worker pool with an mpsc job channel",
              "Share a reference with scoped threads where spawn would demand 'static"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Concurrency Chapter",
                "https://doc.rust-lang.org/book/ch16-00-concurrency.html"
              ]
            ]
          },
          {
            "t": "Shared State with Mutex and RwLock",
            "d": "Guarding data, not code.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Mutex<T>: the lock guards the data it wraps",
              "Lock poisoning and when to ignore it",
              "Deadlock avoidance: lock ordering and keeping critical sections tiny"
            ],
            "do": [
              "Share a counter across ten threads with Arc<Mutex<_>>",
              "Handle a poisoned mutex deliberately and decide the recovery policy",
              "Refactor a big critical section into message passing and compare"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ],
            "tip": "In Rust the Mutex wraps the data it protects, so you cannot forget the lock. Design so the lock is held for microseconds."
          },
          {
            "t": "Atomics and Send/Sync",
            "d": "Lock-free primitives and the thread-safety traits.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "AtomicUsize and memory orderings: Relaxed vs SeqCst",
              "Send and Sync: what makes a type thread-safe",
              "Why Rc is neither Send nor Sync, and Arc<Mutex<T>> is both"
            ],
            "do": [
              "Build a lock-free counter with AtomicUsize and justify your Ordering",
              "Write a type that is Send but not Sync and explain a real use",
              "Use cargo to find which of your types are auto-Send"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "std::sync::atomic",
                "https://doc.rust-lang.org/std/sync/atomic/"
              ]
            ]
          },
          {
            "t": "async/await Foundations",
            "d": "Futures are lazy state machines.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "async fn desugars to a state machine; nothing runs until polled",
              "Executors: block_on and why main needs a runtime",
              "async blocks, .await points and Send futures"
            ],
            "do": [
              "Write async functions and drive them with futures::executor::block_on",
              "Join two futures concurrently and measure vs sequential",
              "Explain why an async fn holding a non-Send type fails to spawn"
            ],
            "tools": [
              "futures"
            ],
            "res": [
              [
                "Async Book",
                "https://rust-lang.github.io/async-book/"
              ]
            ],
            "tip": "An async block does nothing until awaited or spawned. Forgetting this makes 'my code never runs' the classic async bug."
          },
          {
            "t": "Tokio",
            "d": "The async runtime behind most Rust servers.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Runtime flavors: multi-thread vs current-thread",
              "tokio::spawn, channels and tokio::select!",
              "Async I/O, timers and graceful shutdown"
            ],
            "do": [
              "Build an async TCP echo server with tokio",
              "Fan out requests with JoinSet and collect results with timeouts",
              "Implement graceful shutdown on Ctrl+C draining in-flight tasks"
            ],
            "tools": [
              "tokio"
            ],
            "res": [
              [
                "Tokio Docs",
                "https://docs.rs/tokio"
              ]
            ]
          },
          {
            "t": "The Async Ecosystem",
            "d": "Beyond Tokio: runtimes, traits and Pin.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "async-std and smol: alternative runtimes and their philosophies",
              "Async traits and why they needed language support",
              "Pin and Unpin: the minimum you must understand"
            ],
            "do": [
              "Run the same program on tokio and async-std and compare",
              "Write a trait with an async method and implement it twice",
              "Explain in one paragraph what pinning guarantees for a future"
            ],
            "tools": [
              "tokio",
              "async-std",
              "smol"
            ],
            "res": [
              [
                "Async Book",
                "https://rust-lang.github.io/async-book/"
              ]
            ],
            "tag": "opt"
          },
          {
            "t": "Async Pitfalls",
            "d": "The traps that survive into production.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Holding a lock across .await: stalls the executor",
              "Cancellation: futures dropped mid-await must clean up",
              "Blocking the executor with std::fs or compute-heavy code"
            ],
            "do": [
              "Find a std MutexGuard held across await and fix it with message passing",
              "Move a blocking computation to spawn_blocking and measure the difference",
              "Write a future that cleans up correctly when cancelled mid-flight"
            ],
            "tools": [
              "tokio"
            ],
            "res": [
              [
                "Tokio Docs",
                "https://docs.rs/tokio"
              ]
            ],
            "tip": "Never hold a std::sync::MutexGuard across an .await. Use tokio::sync::Mutex or restructure so the guard drops first."
          }
        ]
      },
      {
        "t": "Cargo, Testing and Tooling",
        "d": "Professional Rust: modules, tests, lints and publishing.",
        "lv": 2,
        "children": [
          {
            "t": "Modules and Crates",
            "d": "Organizing code the Rust way.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "mod, use and the module tree; paths and visibility",
              "Binary vs library crates and workspaces for multi-crate projects",
              "Re-exports shaping your public API"
            ],
            "do": [
              "Split a single-file project into modules with a clean public API",
              "Create a workspace with a lib crate and two bin crates",
              "Use pub(crate) to share internals without exposing them publicly"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Modules Chapter",
                "https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"
              ]
            ]
          },
          {
            "t": "Publishing to crates.io",
            "d": "Ship your code to the world.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cargo.toml metadata, semver and version requirements",
              "Documentation that renders on docs.rs",
              "Yanking: fixing a bad release without breaking builds"
            ],
            "do": [
              "Prepare a crate: metadata, README, LICENSE and docs",
              "Publish a 0.1.0 release (or dry-run with --dry-run)",
              "Add intra-doc links and verify they render on docs.rs"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "crates.io",
                "https://crates.io"
              ]
            ]
          },
          {
            "t": "Testing",
            "d": "Unit, integration and doc tests.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Unit tests in-module, integration tests in tests/",
              "Doc tests: examples that are also tests",
              "Test organization and what not to test"
            ],
            "do": [
              "Write unit tests, an integration test and a doc test for one crate",
              "Use #[should_panic] and custom assert messages appropriately",
              "Run tests with -- --nocapture to debug a failing case"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "Testing Chapter",
                "https://doc.rust-lang.org/book/ch11-00-testing.html"
              ]
            ]
          },
          {
            "t": "Property Testing and Benchmarks",
            "d": "Beyond example-based tests.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "proptest: properties over generated inputs",
              "Criterion benchmarks with statistical rigor",
              "Fuzzing with cargo-fuzz for parsers"
            ],
            "do": [
              "Property-test a serialization round-trip with proptest",
              "Benchmark a hot function with criterion and compare two versions",
              "Fuzz a parser for five minutes and triage the crashers"
            ],
            "tools": [
              "proptest",
              "criterion",
              "cargo-fuzz"
            ],
            "res": [
              [
                "Criterion.rs",
                "https://github.com/bheisler/criterion.rs"
              ]
            ]
          },
          {
            "t": "Clippy and rustfmt",
            "d": "Lints and formatting as a team contract.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Clippy lints: correctness, style and pedantic groups",
              "rustfmt: formatting you never argue about",
              "Denying warnings in CI to keep the codebase clean"
            ],
            "do": [
              "Run clippy with pedantic lints and fix every warning",
              "Add -D warnings to CI so new lints fail the build",
              "Configure rustfmt.toml for your project's preferences"
            ],
            "tools": [
              "clippy",
              "rustfmt"
            ],
            "res": [
              [
                "The Rust Book",
                "https://doc.rust-lang.org/book/"
              ]
            ]
          },
          {
            "t": "Debugging Rust",
            "d": "When the compiler is right and you need to see why.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "rust-gdb and rust-lldb with pretty printers",
              "dbg! macro vs println! for quick inspection",
              "tracing for structured diagnostics in async code"
            ],
            "do": [
              "Debug a failing test with rust-gdb: breakpoints and backtraces",
              "Instrument an async function with tracing spans and events",
              "Read a borrow-checker error out loud and translate it to plain English"
            ],
            "tools": [
              "rust-gdb",
              "tracing"
            ],
            "res": [
              [
                "tracing",
                "https://docs.rs/tracing"
              ]
            ]
          }
        ]
      },
      {
        "t": "Macros and Metaprogramming",
        "d": "Code that writes code, used sparingly and well.",
        "lv": 3,
        "children": [
          {
            "t": "Declarative Macros",
            "d": "macro_rules!: pattern matching on syntax.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "macro_rules! patterns, fragment specifiers and repetition",
              "Hygiene: macros cannot accidentally capture your identifiers",
              "Recursive macros for DSL-like repetition"
            ],
            "do": [
              "Write a vec!-like macro from scratch",
              "Build a small HTML-ish DSL macro and expand it with cargo expand",
              "Debug a macro with trace_macros to see expansion order"
            ],
            "tools": [
              "cargo-expand"
            ],
            "res": [
              [
                "Rust by Example: Macros",
                "https://doc.rust-lang.org/rust-by-example/macros.html"
              ]
            ]
          },
          {
            "t": "Procedural Macros",
            "d": "Real Rust code transforming token streams.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Derive, attribute and function-like procedural macros",
              "syn for parsing, quote for generating code",
              "When a proc macro beats a declarative one"
            ],
            "do": [
              "Write a custom derive macro that implements a trait",
              "Use syn and quote to parse a struct and generate an impl block",
              "Publish the macro as its own crate following the naming convention"
            ],
            "tools": [
              "syn",
              "quote"
            ],
            "res": [
              [
                "syn",
                "https://docs.rs/syn"
              ]
            ]
          },
          {
            "t": "Serde: Serialization",
            "d": "The derive-driven serialization framework.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Deriving Serialize and Deserialize",
              "serde_json and formats beyond JSON",
              "Custom serializers and field attributes like skip and rename"
            ],
            "do": [
              "Round-trip a config struct through JSON with renamed fields",
              "Write a custom Deserialize impl for a tricky format",
              "Serialize the same struct to JSON, TOML and bincode and compare"
            ],
            "tools": [
              "serde",
              "serde_json"
            ],
            "res": [
              [
                "Serde",
                "https://serde.rs"
              ]
            ]
          },
          {
            "t": "Build Scripts and Feature Flags",
            "d": "Code generation at compile time.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "build.rs: generating code and linking native libraries",
              "cfg attributes and cargo features for conditional compilation",
              "Feature unification and keeping the feature matrix sane"
            ],
            "do": [
              "Gate an optional dependency behind a cargo feature",
              "Write a build.rs that generates version info from git",
              "Test all feature combinations in CI with --all-features and --no-default-features"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "The Cargo Book",
                "https://doc.rust-lang.org/cargo/"
              ]
            ]
          }
        ]
      },
      {
        "t": "Unsafe and Systems",
        "d": "The escape hatches: raw pointers, FFI, embedded and WASM.",
        "lv": 3,
        "children": [
          {
            "t": "Unsafe Boundaries",
            "d": "Encapsulating unsafety behind safe APIs.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "The five unsafe superpowers and what each permits",
              "Safe abstractions over unsafe code: the standard library's contract",
              "Documenting safety invariants callers must uphold"
            ],
            "do": [
              "Wrap a raw-pointer routine in a safe API with documented invariants",
              "Audit a small unsafe block and list every invariant it relies on",
              "Find an unsound safe abstraction in a sample and fix it"
            ],
            "tools": [
              "cargo",
              "Miri"
            ],
            "res": [
              [
                "The Rustonomicon",
                "https://doc.rust-lang.org/nomicon/"
              ]
            ],
            "tip": "unsafe does not turn off the borrow checker; it lets you assert invariants the compiler cannot prove. Wrong assertions are soundness bugs."
          },
          {
            "t": "Raw Pointers and FFI",
            "d": "Talking to C and the outside world.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "*const T and *mut T: pointers without borrow checking",
              "extern blocks, repr(C) and calling C functions",
              "bindgen for generating bindings from C headers"
            ],
            "do": [
              "Call a C library function (e.g. libc) from Rust",
              "Define a repr(C) struct shared across the FFI boundary",
              "Generate bindings with bindgen for a small C header"
            ],
            "tools": [
              "bindgen"
            ],
            "res": [
              [
                "The Rustonomicon",
                "https://doc.rust-lang.org/nomicon/"
              ]
            ]
          },
          {
            "t": "no_std and Embedded",
            "d": "Rust without an operating system.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "core vs std vs alloc: what you lose without an OS",
              "Panic handlers and the embedded target setup",
              "embedded-hal: hardware abstraction for real boards"
            ],
            "do": [
              "Build a no_std binary for a Cortex-M target",
              "Blink an LED on an emulator or dev board with embedded-hal",
              "Handle allocation with alloc in a no_std context"
            ],
            "tools": [
              "embedded-hal",
              "probe-rs"
            ],
            "res": [
              [
                "Embedded Rust Book",
                "https://docs.rust-embedded.org/book/"
              ]
            ]
          },
          {
            "t": "WebAssembly",
            "d": "Rust in the browser and beyond.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The wasm32 target and wasm-bindgen bridging to JavaScript",
              "wasm-pack for building browser-ready packages",
              "WASI and server-side WASM runtimes like Wasmer"
            ],
            "do": [
              "Compile a Rust function to WASM and call it from JavaScript",
              "Build a tiny WASM module with wasm-pack and load it in a page",
              "Run a WASM module under Wasmer outside the browser"
            ],
            "tools": [
              "wasm-pack",
              "wasm-bindgen"
            ],
            "res": [
              [
                "Rust and WebAssembly Book",
                "https://rustwasm.github.io/docs/book/"
              ]
            ]
          },
          {
            "t": "Performance and Profiling",
            "d": "Measure, then make it faster.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Release profiles, LTO and codegen-units tradeoffs",
              "Flamegraphs with cargo-flamegraph for CPU hotspots",
              "Allocation profiling and cache-friendly data layout"
            ],
            "do": [
              "Profile a slow program and find the hotspot with a flamegraph",
              "Tune lto and codegen-units, measuring build time vs runtime",
              "Restructure an AoS layout to SoA and measure the cache effect"
            ],
            "tools": [
              "cargo-flamegraph"
            ],
            "res": [
              [
                "cargo-flamegraph",
                "https://github.com/flamegraph-rs/flamegraph"
              ]
            ]
          },
          {
            "t": "Capstone: Ship Something Real",
            "d": "Prove the whole journey in one project.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Scoping a shippable project: CLI, server or embedded gadget",
              "Error handling, logging and configuration at application scale",
              "Publishing, documenting and announcing your work"
            ],
            "do": [
              "Design and build a complete CLI tool or async server",
              "Publish the crate to crates.io with docs and a README",
              "Write a retrospective: what the borrow checker taught your architecture"
            ],
            "tools": [
              "cargo"
            ],
            "res": [
              [
                "crates.io",
                "https://crates.io"
              ]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
