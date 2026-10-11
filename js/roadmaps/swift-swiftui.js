/* Atlas roadmap data: Swift & SwiftUI (swift-swiftui)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "swift-swiftui",
  "title": "Swift & SwiftUI",
  "icon": "🐦",
  "color": "#a855f7",
  "kind": "skill",
  "tagline": "Master the language, master the framework.",
  "desc": "Deep mastery of the Swift language — from optionals to Swift 6 concurrency — and the SwiftUI framework, from first view to advanced layouts, animation, and real-world app architecture.",
  "root": {
    "t": "Swift & SwiftUI",
    "d": "The language and the UI framework, taught deeply: write idiomatic Swift 6 and build fluid declarative interfaces with SwiftUI.",
    "children": [
      {
        "t": "Swift From Zero",
        "d": "Your first Swift code: values, text, control flow, functions, and the optional system.",
        "lv": 1,
        "children": [
          {
            "t": "Your First Swift Code",
            "d": "Playgrounds, the REPL, and the swift toolchain — writing and running Swift in seconds.",
            "lv": 1,
            "time": "~2h",
            "tip": "Playgrounds are for experiments, not apps. Move to a real project the moment code gets a second file.",
            "learn": [
              "The Swift toolchain: swiftc, the REPL (swift), and what Xcode adds on top",
              "Playgrounds: instant feedback coding and when they help vs hurt",
              "Statements, expressions, and semicolons (you don't need them)"
            ],
            "do": [
              "Open a playground and print a multi-line greeting with string interpolation",
              "Run the same code in the terminal with the swift REPL",
              "Break something on purpose and read the compiler error out loud until it makes sense"
            ],
            "tools": ["Xcode Playgrounds", "Swift REPL"],
            "res": [
              ["Swift Documentation", "https://www.swift.org/documentation/"]
            ]
          },
          {
            "t": "Constants, Variables & Type Inference",
            "d": "let vs var and the inference engine that makes Swift feel lightweight but stay safe.",
            "lv": 1,
            "time": "~3h",
            "tip": "Annotate types at boundaries (function signatures, public APIs) and let inference handle the rest.",
            "learn": [
              "let vs var: immutability as the default and why it prevents whole classes of bugs",
              "Type inference: how the compiler deduces types and when annotation clarifies intent",
              "Type safety: no implicit conversions — Int + Double is an error, and that's a feature"
            ],
            "do": [
              "Declare values with let, try to mutate one, and read the compiler's complaint",
              "Convert between Int, Double, and String explicitly with initializers",
              "Refactor a var-heavy snippet to use let everywhere possible"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["The Swift Programming Language", "https://developer.apple.com/documentation/swift"]
            ]
          },
          {
            "t": "Strings & Text",
            "d": "Swift strings are Unicode-correct collections — powerful once you understand the model.",
            "lv": 1,
            "time": "~3h",
            "tip": "Never index a String with an integer. Use string.index(after:) or, better, the higher-level APIs.",
            "learn": [
              "String interpolation, multi-line strings, and raw strings for regex and file paths",
              "Characters vs Strings: extended grapheme clusters and why emoji are single Characters",
              "Common operations: splitting, trimming, replacing, and case-insensitive comparison"
            ],
            "do": [
              "Build a formatted receipt with multi-line strings and interpolation",
              "Count the characters in an emoji-heavy string and compare with its UTF-8 count",
              "Parse a CSV line into fields using split and map"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: String", "https://developer.apple.com/documentation/swift/string"]
            ]
          },
          {
            "t": "Control Flow",
            "d": "Conditionals and loops with Swift's flavor: guard, pattern matching, and where clauses.",
            "lv": 1,
            "time": "~4h",
            "tip": "guard is for preconditions and early exits; if is for branching logic. Mixing them up creates confusing code.",
            "learn": [
              "if/guard: the early-exit style that keeps the happy path unindented",
              "switch as pattern matching: ranges, tuples, value bindings, and where clauses",
              "Loops: for-in over anything Sequence-like, while, repeat-while, and labeled control transfer"
            ],
            "do": [
              "Write a function that validates input with three guard statements instead of nested ifs",
              "Build a switch over a tuple (httpMethod, statusCode) with pattern matching",
              "Implement FizzBuzz with a switch on (i % 3 == 0, i % 5 == 0)"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Control Flow", "https://developer.apple.com/documentation/swift/control-flow"]
            ]
          },
          {
            "t": "Functions",
            "d": "Argument labels, defaults, and inout — the calling conventions that make Swift read like prose.",
            "lv": 1,
            "time": "~4h",
            "tip": "Argument labels are documentation. A call site should read like a sentence: move(from: a, to: b).",
            "learn": [
              "Argument labels vs parameter names: designing call sites that read naturally",
              "Default parameters, variadics, and inout for mutating the caller's variable",
              "Functions as first-class values: passing and returning functions"
            ],
            "do": [
              "Design a function with labels so the call site reads like English",
              "Write a variadic sum and an inout swap function",
              "Pass a function as an argument to customize behavior without subclassing"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Functions", "https://developer.apple.com/documentation/swift/functions"]
            ]
          },
          {
            "t": "Optionals: The Swift Way",
            "d": "Nil handling as a first-class language feature — the heart of Swift's safety story.",
            "lv": 1,
            "time": "~1d",
            "tip": "map and flatMap work on optionals too. Transforming a value inside an optional beats unwrapping-then-transforming.",
            "learn": [
              "Optional as an enum: the mental model that makes everything else click",
              "Binding (if let/guard let), chaining (?.), coalescing (??), and forced unwrapping (!)",
              "Functional optional handling: map, flatMap, and filter on Optional"
            ],
            "do": [
              "Safely unwrap a three-level nested optional with a single guard statement",
              "Rewrite an if-let pyramid using map and nil coalescing",
              "Convert a failable initializer chain (URL(string:)!) into safe code"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Optional", "https://developer.apple.com/documentation/swift/optional"]
            ]
          }
        ]
      },
      {
        "t": "Collections & The Type System",
        "d": "Arrays, structs, classes, enums, and protocols — Swift's building blocks and how to combine them.",
        "lv": 1,
        "children": [
          {
            "t": "Arrays, Dictionaries & Sets",
            "d": "Swift's collections are value types with copy-on-write — fast and safe by default.",
            "lv": 1,
            "time": "~4h",
            "tip": "Dictionaries return optionals from subscripts. That lookup-result-is-optional pattern appears everywhere in Swift.",
            "learn": [
              "Array, Dictionary, Set: choosing the right container and their Big-O basics",
              "Value semantics and copy-on-write: copies are cheap until you mutate",
              "map/filter/reduce/sorted: the transformation vocabulary"
            ],
            "do": [
              "Group an array of structs by a property using Dictionary(grouping:by:)",
              "Prove copy-on-write: mutate a copied array and show the original is untouched",
              "Build a word-frequency counter with a dictionary and default subscripts"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Array", "https://developer.apple.com/documentation/swift/array"]
            ]
          },
          {
            "t": "Structs: Your Default Building Block",
            "d": "Value types with methods: why Swift developers reach for struct first.",
            "lv": 1,
            "time": "~4h",
            "tip": "If your type doesn't need identity or inheritance, it's a struct. Most of your models will be.",
            "learn": [
              "Memberwise initializers, mutating methods, and computed properties",
              "Value semantics in practice: why structs eliminate aliasing bugs",
              "Methods, subscripts, and static members on structs"
            ],
            "do": [
              "Model a 2D point and rectangle as structs with area/perimeter computed properties",
              "Write a mutating method and observe the compiler enforce value semantics",
              "Pass a struct through three functions and show each sees an independent copy"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Structures", "https://developer.apple.com/documentation/swift/structures"]
            ]
          },
          {
            "t": "Classes & Identity",
            "d": "Reference semantics, inheritance, and deinit — for the cases where shared identity is the point.",
            "lv": 1,
            "time": "~4h",
            "tip": "Use === (identity) vs == (equality) deliberately. Confusing them is a classic beginner bug.",
            "learn": [
              "Reference semantics: assignment shares, mutation is visible everywhere",
              "Inheritance, overrides, final, and required initializers",
              "deinit and the ARC lifecycle: when objects actually die"
            ],
            "do": [
              "Build a class hierarchy (Vehicle -> Car) with overridden methods",
              "Demonstrate aliasing: mutate through one reference, observe through another",
              "Add deinit prints and watch the destruction order of a small object graph"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Classes", "https://developer.apple.com/documentation/swift/classes"]
            ]
          },
          {
            "t": "Enums with Superpowers",
            "d": "Associated values, raw values, and indirect cases — enums as state machines.",
            "lv": 2,
            "time": "~4h",
            "tip": "Model loading states as enums (idle/loading/loaded/error). Impossible states become unrepresentable.",
            "learn": [
              "Associated values vs raw values: data-carrying cases vs fixed representations",
              "Methods and computed properties on enums; CaseIterable for all-cases iteration",
              "indirect for recursive enums (expression trees, linked structures)"
            ],
            "do": [
              "Model a network request state machine as an enum with associated values",
              "Build a recursive arithmetic-expression enum and evaluate it",
              "Drive a switch exhaustively over your enum and let the compiler check completeness"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Enumerations", "https://developer.apple.com/documentation/swift/enumerations"]
            ]
          },
          {
            "t": "Protocols",
            "d": "Contracts over inheritance: Swift's protocol-oriented programming core.",
            "lv": 2,
            "time": "~1d",
            "tip": "Start with concrete types, extract protocols when you have two conformers. Premature protocols are just bureaucracy.",
            "learn": [
              "Protocol requirements: methods, properties, initializers, and associated types",
              "Conformance: adopting protocols with extensions to keep types clean",
              "Existentials (any Protocol) vs generics: the tradeoff between flexibility and performance"
            ],
            "do": [
              "Define a Drawable protocol and conform a Circle struct and Square struct",
              "Write a function taking any Drawable and render a mixed array",
              "Add a protocol with an associated type and feel why generics are needed to use it"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Protocols", "https://developer.apple.com/documentation/swift/protocol"]
            ]
          },
          {
            "t": "Extensions & Protocol Extensions",
            "d": "Retroactive modeling and shared default behavior — Swift's composition toolkit.",
            "lv": 2,
            "time": "~4h",
            "tip": "Extensions can't add stored properties. If you need state, you need a wrapper type, not an extension.",
            "learn": [
              "Extensions: adding methods and computed properties to types you don't own",
              "Protocol extensions: default implementations shared by all conformers",
              "Constrained extensions (where clauses): behavior that appears only when conditions hold"
            ],
            "do": [
              "Extend Int with a times method and Double with currency formatting",
              "Give a protocol a default implementation, then override it in one conformer",
              "Add a sum() method to Sequence via extension where Element == Int"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Extensions", "https://developer.apple.com/documentation/swift/extensions"]
            ]
          }
        ]
      },
      {
        "t": "Generics, Closures & Errors",
        "d": "The power trio: reusable generic code, closure mastery, and principled error handling.",
        "lv": 2,
        "children": [
          {
            "t": "Closures",
            "d": "From verbose syntax to trailing-closure poetry — and the capture semantics underneath.",
            "lv": 2,
            "time": "~1d",
            "tip": "Long closures deserve names. If a trailing closure exceeds ~10 lines, extract it into a function.",
            "learn": [
              "The syntax ladder: full form → inferred → shorthand ($0) → trailing → single-expression",
              "@escaping: closures that outlive the call and why the annotation exists",
              "Capture lists: [weak self] and value captures, and the retain cycles they prevent"
            ],
            "do": [
              "Rewrite the same sort five ways, from full closure syntax down to sort(by: <)",
              "Build a function storing an escaping closure and fix the resulting retain cycle",
              "Use capture lists to snapshot a value at closure-creation time"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Closures", "https://developer.apple.com/documentation/swift/closure"]
            ]
          },
          {
            "t": "Generics",
            "d": "Write once, work for every type — with constraints that keep it safe.",
            "lv": 2,
            "time": "~1d",
            "tip": "Constrain as little as possible. A generic that only needs Equatable shouldn't demand Hashable.",
            "learn": [
              "Generic functions and types: the <T> placeholder and type inference at call sites",
              "Constraints and where clauses: requiring capabilities without naming concrete types",
              "Associated types in protocols: the bridge to fully generic designs"
            ],
            "do": [
              "Write a generic swap and a generic Stack<Element>",
              "Constrain an extension to Comparable elements to add a max() method",
              "Design a Container protocol with an associated type and two conformers"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Generics", "https://developer.apple.com/documentation/swift/generics"]
            ]
          },
          {
            "t": "Error Handling",
            "d": "throws, Result, and Swift 6's typed throws — errors as values, handled deliberately.",
            "lv": 2,
            "time": "~1d",
            "tip": "Reserve throws for recoverable errors. Programmer mistakes (bad config, logic bugs) deserve assertionFailure, not catch blocks.",
            "learn": [
              "The throwing model: throws, try/try?/try!, do-catch with pattern matching",
              "Result<Success, Failure>: errors as values for async and stored completions",
              "Typed throws (Swift 6): declaring exactly which error type can escape"
            ],
            "do": [
              "Build a throwing file parser with a custom Error enum and per-case handling",
              "Convert a throwing function to Result and chain transformations with mapError",
              "Refactor to typed throws and watch callers get precise error information"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Error Handling", "https://developer.apple.com/documentation/swift/error"]
            ]
          },
          {
            "t": "Memory Management: ARC in Practice",
            "d": "Strong, weak, unowned — and the discipline that keeps reference graphs clean.",
            "lv": 2,
            "time": "~1d",
            "tip": "weak for delegates and parent-back-references, unowned only when lifetime is provably longer. When in doubt, weak.",
            "learn": [
              "ARC counting: what increments, what decrements, and when deinit fires",
              "Retain cycles: the classic shapes (delegate, closure capture, parent-child)",
              "weak vs unowned vs implicitly unwrapped: choosing the right non-owning reference"
            ],
            "do": [
              "Build a delegate relationship with a strong reference, leak it, then fix with weak",
              "Create a closure retain cycle in a view-model-like class and break it with a capture list",
              "Use the memory graph debugger to find a leak you planted on purpose"
            ],
            "tools": ["Xcode", "Memory Graph Debugger"],
            "res": [
              ["Automatic Reference Counting", "https://developer.apple.com/documentation/swift/automatic-reference-counting"]
            ]
          },
          {
            "t": "Property Wrappers & Macros",
            "d": "Custom attributes that generate code: from @State-style wrappers to Swift macros.",
            "lv": 2,
            "time": "~1d",
            "tip": "Property wrappers hide behavior — great for frameworks, suspicious in app code. Prefer explicit code you can read.",
            "learn": [
              "Property wrappers: wrappedValue, projectedValue ($), and how @State/@Published work underneath",
              "Writing your own wrapper: a @Clamped or @Trimmed example",
              "Swift macros: freestanding (#...) vs attached (@...), and what #Preview expands to"
            ],
            "do": [
              "Write a @Capitalized property wrapper and use it on a struct",
              "Inspect a macro's expansion in Xcode to see the generated code",
              "Build a tiny attached macro concept (or use an existing one) and document what it generates"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["Swift: Properties", "https://developer.apple.com/documentation/swift/properties"]
            ]
          }
        ]
      },
      {
        "t": "Modern Swift: Concurrency",
        "d": "async/await, actors, and Swift 6's compile-time data-race safety — concurrency done right.",
        "lv": 2,
        "children": [
          {
            "t": "async/await Fundamentals",
            "d": "Suspension points that read like synchronous code but never block a thread.",
            "lv": 2,
            "time": "~1d",
            "tip": "Mark the function async, not the call site's problem. Callers adapt with await or Task — the viral part is the point.",
            "learn": [
              "Suspension points: what await really does to execution and threads",
              "Tasks: the unit of concurrent work, unstructured vs structured",
              "Rewriting callback APIs: from completion handlers to straight-line async code"
            ],
            "do": [
              "Convert a completion-handler network stub to async/await",
              "Fetch three resources sequentially, then observe the total time",
              "Handle a throwing async function with do/catch at the call site"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["Swift Concurrency", "https://developer.apple.com/documentation/swift/concurrency"]
            ]
          },
          {
            "t": "Structured Concurrency",
            "d": "async let, task groups, and cancellation — concurrency with a shape the compiler understands.",
            "lv": 2,
            "time": "~1d",
            "tip": "Prefer structured concurrency (async let, TaskGroup) over detached tasks. Detached tasks are where leaks and lost errors hide.",
            "learn": [
              "async let: parallel child tasks bound to the current scope",
              "TaskGroup and throwing task groups: dynamic parallelism with result collection",
              "Cancellation: cooperative, automatic propagation, and checking Task.isCancelled"
            ],
            "do": [
              "Fetch three resources with async let and compare timing vs sequential",
              "Process a list with withTaskGroup and collect results in completion order",
              "Make a long task cancellation-aware and verify it stops promptly"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["TaskGroup", "https://developer.apple.com/documentation/swift/taskgroup"]
            ]
          },
          {
            "t": "Actors & Sendable",
            "d": "Isolated state by construction: actors make shared mutable state safe.",
            "lv": 3,
            "time": "~1d",
            "tip": "Actors serialize access, not work. A slow method inside an actor still blocks everyone waiting on it.",
            "learn": [
              "Actor isolation: why await is required to call actor methods from outside",
              "Sendable: the contract for values that cross isolation boundaries safely",
              "@MainActor and global actors: pinning UI work to the main thread declaratively"
            ],
            "do": [
              "Build an actor-guarded counter and increment it from 100 concurrent tasks",
              "Mark a struct Sendable and pass it across actors without warnings",
              "Annotate a view model @MainActor and delete manual DispatchQueue.main.async calls"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["Swift: Actors", "https://developer.apple.com/documentation/swift/actor"]
            ]
          },
          {
            "t": "AsyncSequence & AsyncStream",
            "d": "Streams of values over time: the async answer to event-driven code.",
            "lv": 3,
            "time": "~4h",
            "tip": "AsyncStream is the cleanest bridge from delegate/callback APIs into the async world. Learn this pattern once, reuse forever.",
            "learn": [
              "AsyncSequence: for-await loops over values that arrive over time",
              "AsyncStream and its Continuation: building streams from callback APIs",
              "Buffering policies: what happens when the consumer is slower than the producer"
            ],
            "do": [
              "Wrap a timer callback in an AsyncStream and consume it with for await",
              "Bridge a delegate-based API (like location updates) into an async sequence",
              "Implement a backpressured stream and observe the buffering policy in action"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["AsyncSequence", "https://developer.apple.com/documentation/swift/asyncsequence"]
            ]
          },
          {
            "t": "Swift 6 Language Mode",
            "d": "Complete concurrency checking: data races as compile errors and how to migrate.",
            "lv": 3,
            "time": "~1d",
            "tip": "Migrate target by target, starting with leaf modules. Fixing the whole app's warnings at once is how migrations die.",
            "learn": [
              "The three checking modes: minimal, targeted, complete — and what each catches",
              "Common diagnostics: non-Sendable captures, mutable global state, main-actor isolation",
              "Migration strategy: incremental adoption without stopping feature work"
            ],
            "do": [
              "Enable complete checking on a small module and triage every diagnostic",
              "Fix a captured-mutable-var warning three different ways and compare",
              "Document your team's concurrency rules (when to use actors vs locks vs @MainActor)"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["Swift 6 Migration Guide", "https://www.swift.org/migration/"]
            ]
          }
        ]
      },
      {
        "t": "SwiftUI Foundations",
        "d": "Your first real interfaces: views, modifiers, layout, state, and lists.",
        "lv": 1,
        "children": [
          {
            "t": "The Declarative Mindset",
            "d": "Stop commanding the UI — describe it. State in, views out.",
            "lv": 1,
            "time": "~4h",
            "tip": "If you're thinking 'when X happens, update label Y', you're thinking imperatively. Think instead: 'label Y shows X'.",
            "learn": [
              "Views as values: structs describing UI, not objects you mutate",
              "body as a pure function: same state in, same view out",
              "The framework's job: diffing your description and updating the real UI efficiently"
            ],
            "do": [
              "Build a counter app and notice you never touch the label directly",
              "Derive three different visual states from a single enum property",
              "Break the app by mutating a plain var instead of @State — then fix it"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI", "https://developer.apple.com/documentation/swiftui"]
            ]
          },
          {
            "t": "Views, Modifiers & Order",
            "d": "Text, Image, Shape — and why the order of your modifier chain changes everything.",
            "lv": 1,
            "time": "~1d",
            "tip": ".padding().background() vs .background().padding(): the background wraps whatever came before it. Order is semantics.",
            "learn": [
              "Core views: Text, Image, Shape, and composing them into custom views",
              "Modifiers return new views: the chain is a pipeline of transformations",
              "Order effects: padding/background/cornerRadius interact based on sequence"
            ],
            "do": [
              "Style the same Text six ways by reordering three modifiers",
              "Build a reusable Badge view from Text + padding + background + corner radius",
              "Create a custom ButtonStyle and apply it across screens"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: View", "https://developer.apple.com/documentation/swiftui/view"]
            ]
          },
          {
            "t": "Layout: Stacks, Spacers & Alignment",
            "d": "HStack, VStack, ZStack — composing screens from simple containers.",
            "lv": 1,
            "time": "~1d",
            "tip": "Spacer() is the most underused layout tool. Most 'centering' problems are solved with a spacer, not a frame.",
            "learn": [
              "Stacks: the three containers and how they divide space among children",
              "Alignment and spacing: cross-axis alignment, custom spacing, dividers",
              "frame, padding, and Spacer: the practical trio for real screens"
            ],
            "do": [
              "Rebuild a social-media post card (avatar row, image, action bar) with stacks",
              "Center content vertically using spacers instead of frames",
              "Build a settings row component with leading icon, label, and trailing control"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI Layout", "https://developer.apple.com/documentation/swiftui/layout"]
            ]
          },
          {
            "t": "State & Binding",
            "d": "@State and @Binding: the two-way wiring that makes interfaces interactive.",
            "lv": 1,
            "time": "~1d",
            "tip": "State lives in one place and flows down. If two views both own the same truth, one of them is wrong.",
            "learn": [
              "@State: view-owned mutable state that triggers re-renders",
              "@Binding: a reference to someone else's state, passed down the tree",
              "The data-flow contract: state down, events up"
            ],
            "do": [
              "Build a toggle screen where a child view flips the parent's @State via @Binding",
              "Create a star-rating control driven entirely by a binding",
              "Find and fix a bug caused by duplicated state in parent and child"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["State and Data Flow", "https://developer.apple.com/documentation/swiftui/state-and-data-flow"]
            ]
          },
          {
            "t": "Lists, ScrollViews & Grids",
            "d": "Scrollable content at any scale: List, lazy stacks, and grids.",
            "lv": 2,
            "time": "~1d",
            "tip": "List rows need stable identity. If rows jump or animate weirdly, your id is the first suspect.",
            "learn": [
              "List and ForEach: identity via id and why it matters for diffing",
              "LazyVStack/LazyHStack in ScrollView vs List: control vs free behavior",
              "LazyVGrid/LazyHGrid: adaptive grids that respond to size classes"
            ],
            "do": [
              "Build a contacts list with sections, swipe actions, and search",
              "Create a photo grid with adaptive columns using LazyVGrid",
              "Implement pull-to-refresh and infinite scroll on a feed"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: List", "https://developer.apple.com/documentation/swiftui/list"]
            ]
          },
          {
            "t": "Previews: Design at Speed",
            "d": "#Preview and the iteration loop that makes SwiftUI development joyful.",
            "lv": 1,
            "time": "~3h",
            "tip": "Write previews for every state of a view (loading, empty, error, full). It's the cheapest test suite you'll ever write.",
            "learn": [
              "#Preview macro: rendering views without launching the simulator",
              "Preview traits: devices, color schemes, Dynamic Type, locales",
              "Previewing view models: injecting mock data for every visual state"
            ],
            "do": [
              "Add previews for a card view in light/dark mode and two Dynamic Type sizes",
              "Preview a list screen with mock data for empty and error states",
              "Use interactive previews to tap through a flow without building to simulator"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["Xcode Previews", "https://developer.apple.com/documentation/xcode/previewing-swiftui-views-and-uikit-views"]
            ]
          }
        ]
      },
      {
        "t": "SwiftUI Data & Navigation",
        "d": "Real app plumbing: the Observation framework, environment, navigation, and forms.",
        "lv": 2,
        "children": [
          {
            "t": "The Observation Framework",
            "d": "@Observable and the modern property wrappers — SwiftUI's current state story.",
            "lv": 2,
            "time": "~1d",
            "tip": "@Observable replaced ObservableObject. If a tutorial uses @StateObject and objectWillChange, it's pre-2024 — translate as you read.",
            "learn": [
              "@Observable: the macro that makes classes observable with zero boilerplate",
              "@State, @Environment, @Bindable: the current trio for holding and sharing observable models",
              "Observation granularity: views re-render only for properties they actually read"
            ],
            "do": [
              "Convert an ObservableObject view model to @Observable and delete the boilerplate",
              "Share one model across five views via @Environment",
              "Prove granular updates: change an unread property and show the view doesn't re-render"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["Observation", "https://developer.apple.com/documentation/observation"]
            ]
          },
          {
            "t": "Environment & Dependencies",
            "d": "Passing values and services down the tree without prop-drilling.",
            "lv": 2,
            "time": "~4h",
            "tip": "Environment is for ambient values (theme, services), not for view-specific data. Don't hide required inputs in the environment.",
            "learn": [
              "@Environment and custom EnvironmentValues: the dependency-injection channel built into SwiftUI",
              "System environment values: colorScheme, sizeCategory, dismiss, openURL",
              "Service location vs initializer injection: choosing the right DI style per layer"
            ],
            "do": [
              "Define a custom environment key for an analytics service",
              "Read colorScheme and sizeCategory to adapt a view",
              "Compare environment injection vs initializer injection for a repository"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: EnvironmentValues", "https://developer.apple.com/documentation/swiftui/environmentvalues"]
            ]
          },
          {
            "t": "NavigationStack & NavigationSplitView",
            "d": "Programmatic, deep-linkable navigation — the modern replacement for NavigationView.",
            "lv": 2,
            "time": "~1d",
            "tip": "Drive NavigationStack with a path array from day one. Deep links and programmatic pops become trivial.",
            "learn": [
              "NavigationStack with navigationDestination: type-safe routing",
              "Path-driven navigation: pushing, popping to root, and restoring deep links",
              "NavigationSplitView: master-detail layouts that adapt from iPhone to iPad and Mac"
            ],
            "do": [
              "Build a three-level drill-down driven by a path array",
              "Implement a deep link that lands directly on a detail screen",
              "Adapt the same content to NavigationSplitView on iPad"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["NavigationStack", "https://developer.apple.com/documentation/swiftui/navigationstack"]
            ]
          },
          {
            "t": "Sheets, Alerts & Focus",
            "d": "Modal presentations, dialogs, and keyboard management.",
            "lv": 2,
            "time": "~4h",
            "tip": "Sheets driven by an optional item (.sheet(item:)) instead of a Bool stay in sync with your data automatically.",
            "learn": [
              "sheet, fullScreenCover, popover: choosing the right modal presentation",
              "Detents: half-sheets and resizable presentations",
              "@FocusState: moving the keyboard between fields and dismissing it deliberately"
            ],
            "do": [
              "Present an edit sheet bound to an optional item with medium/large detents",
              "Build a login form where Return moves focus from email to password to submit",
              "Replace a Bool-driven sheet with an item-driven one and delete the sync bugs"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: sheet", "https://developer.apple.com/documentation/swiftui/view/sheet(item:onDismiss:content:)"]
            ]
          },
          {
            "t": "Forms, Pickers & Controls",
            "d": "Settings screens and data entry: the controls Apple gives you for free.",
            "lv": 2,
            "time": "~4h",
            "tip": "Form gives you grouped settings styling for free, but it's rigid. For custom designs, build on List or VStack instead.",
            "learn": [
              "Form, Toggle, Picker, Stepper, Slider, DatePicker: the input control catalog",
              "Validation: deriving error state from bindings and disabling submit until valid",
              "Keyboard types and input accessories for data-entry screens"
            ],
            "do": [
              "Build a complete settings screen with Form: toggles, pickers, and a version footer",
              "Create a validated signup form with inline error messages",
              "Add a custom toolbar above the keyboard with a Done button"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: Form", "https://developer.apple.com/documentation/swiftui/form"]
            ]
          }
        ]
      },
      {
        "t": "Advanced SwiftUI",
        "d": "Custom layouts, the animation system, drawing, gestures, and performance.",
        "lv": 3,
        "children": [
          {
            "t": "Custom Layouts & ViewBuilders",
            "d": "The Layout protocol and @ViewBuilder: building containers SwiftUI never imagined.",
            "lv": 3,
            "time": "~2d",
            "tip": "Implement sizeThatFits and placeSubviews to be honest about your children's sizes — greedy layouts break scrolling parents.",
            "learn": [
              "The Layout protocol: sizeThatFits and placeSubviews, the two methods that define a container",
              "@ViewBuilder: how result builders turn imperative-looking code into view tuples",
              "AnyLayout: switching container types at runtime (HStack vs VStack by size class)"
            ],
            "do": [
              "Implement a flow layout (tags wrapping to new lines) with the Layout protocol",
              "Write a @ViewBuilder function that conditionally composes views",
              "Swap between HStack and VStack layouts with AnyLayout based on horizontal size class"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: Layout", "https://developer.apple.com/documentation/swiftui/layout"]
            ]
          },
          {
            "t": "The Animation System",
            "d": "Implicit, explicit, and physics-based animation — plus the transitions between states.",
            "lv": 3,
            "time": "~2d",
            "tip": "matchedGeometryEffect needs matched IDs in the same namespace. Mismatched IDs silently do nothing — the most common 'why won't it animate' bug.",
            "learn": [
              "The transaction model: how SwiftUI decides what animates when state changes",
              "Transitions: asymmetric appear/disappear animations",
              "matchedGeometryEffect, keyframe and phase animators for choreographed motion"
            ],
            "do": [
              "Build a hero transition between a grid thumbnail and a detail view",
              "Choreograph a multi-step onboarding animation with phase animators",
              "Create a custom transition combining scale, opacity, and offset"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: Animation", "https://developer.apple.com/documentation/swiftui/animation"]
            ]
          },
          {
            "t": "Drawing & Graphics",
            "d": "Path, Shape, Canvas, and gradients — custom visuals without image assets.",
            "lv": 3,
            "time": "~1d",
            "tip": "Canvas with TimelineView gives you 60fps custom drawing (charts, games) without dropping to Core Graphics manually.",
            "learn": [
              "Path and Shape: vector drawing with animatableData for morphing shapes",
              "Gradients, materials, and blend modes for rich visuals",
              "Canvas and TimelineView: immediate-mode drawing for charts and particles"
            ],
            "do": [
              "Draw an animated ring chart with a custom Shape and animatableData",
              "Build a particle confetti effect with Canvas and TimelineView",
              "Recreate a liquid-glass card using materials and gradients"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: Canvas", "https://developer.apple.com/documentation/swiftui/canvas"]
            ]
          },
          {
            "t": "Gestures & Interaction",
            "d": "From taps to complex composed gestures: making interfaces feel physical.",
            "lv": 3,
            "time": "~1d",
            "tip": "highPriorityGesture vs simultaneousGesture: the default exclusive behavior is why your scroll view eats your drag — choose deliberately.",
            "learn": [
              "The gesture catalog: tap, long press, drag, magnify, rotate — and their state machines",
              "Composition: sequenced, simultaneous, and exclusive gestures",
              "Updating state from gestures: @GestureState for transient values that auto-reset"
            ],
            "do": [
              "Build a Tinder-style card deck with drag, rotation, and swipe-away thresholds",
              "Compose a long-press-then-drag gesture with sequenced gestures",
              "Add pinch-to-zoom and pan to an image viewer with simultaneous gestures"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: Gestures", "https://developer.apple.com/documentation/swiftui/gestures"]
            ]
          },
          {
            "t": "Performance & Debugging",
            "d": "Identity, lifetime, and why views update — profiling SwiftUI like an engineer.",
            "lv": 3,
            "time": "~1d",
            "tip": "Most SwiftUI 'performance problems' are identity problems. Fix the id, and the mysterious re-renders vanish.",
            "learn": [
              "Identity and lifetime: how SwiftUI matches views across updates",
              "EquatableView and memoization: skipping redundant body evaluations",
              "Instruments for SwiftUI: the View Body instrument and finding update hotspots"
            ],
            "do": [
              "Add Self._printChanges() to find why a view re-renders too often",
              "Fix a list that re-renders every row on one row's change",
              "Profile a heavy screen in Instruments and cut body evaluation time"
            ],
            "tools": ["Xcode", "Instruments"],
            "res": [
              ["SwiftUI Performance", "https://developer.apple.com/documentation/swiftui/improving-swiftui-performance"]
            ]
          }
        ]
      },
      {
        "t": "Real-World SwiftUI Apps",
        "d": "Architecture, networking, persistence, accessibility — and shipping a complete app.",
        "lv": 3,
        "children": [
          {
            "t": "MVVM & App Architecture",
            "d": "Structuring SwiftUI apps so they stay testable as they grow.",
            "lv": 3,
            "time": "~2d",
            "tip": "View models hold state and intent; views render. The moment a view model imports SwiftUI, the boundary has leaked.",
            "learn": [
              "MVVM in the Observation era: @Observable view models owned via @State",
              "Unidirectional data flow: intents in, state out, side effects at the edges",
              "Testing seams: protocols for services so view models test without the network"
            ],
            "do": [
              "Structure a feature as View + @Observable ViewModel + Service protocol",
              "Write unit tests for a view model with a fake service",
              "Refactor a massive view into view model + small views without changing behavior"
            ],
            "tools": ["Xcode", "Swift Testing"],
            "res": [
              ["Swift Testing", "https://developer.apple.com/documentation/testing"]
            ]
          },
          {
            "t": "Networking in SwiftUI",
            "d": ".task, loading states, and error UI — async data done the SwiftUI way.",
            "lv": 2,
            "time": "~1d",
            "tip": ".task cancels automatically when the view disappears. Manual Task creation in onAppear is how you leak network work.",
            "learn": [
              ".task vs onAppear: structured, cancellable async work tied to view lifetime",
              "Loading state modeling: enums over booleans (idle/loading/loaded/failed)",
              "Error UI: turning failures into retry affordances, not silent blanks"
            ],
            "do": [
              "Load remote data with .task and show skeleton UI while loading",
              "Implement pull-to-refresh with refreshable and a proper error state",
              "Cancel in-flight requests on navigation away and prove no work leaks"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI: task", "https://developer.apple.com/documentation/swiftui/view/task(priority:_:)"]
            ]
          },
          {
            "t": "SwiftData Integration",
            "d": "Persistence that feels native to SwiftUI: @Model, @Query, and the ModelContainer.",
            "lv": 2,
            "time": "~1d",
            "tip": "Do writes on the model context's actor. Touching @Model objects from the wrong isolation is the classic SwiftData crash.",
            "learn": [
              "@Model and ModelContainer: defining persistent models with macros",
              "@Query: live-updating fetches with predicates and sort descriptors",
              "Relationships, cascade deletes, and CloudKit sync considerations"
            ],
            "do": [
              "Build an offline journal app: @Model entries, @Query list, swipe to delete",
              "Add a relationship (tags) with proper delete rules",
              "Migrate the schema by adding a property and verify existing data survives"
            ],
            "tools": ["Xcode", "SwiftData"],
            "res": [
              ["SwiftData", "https://developer.apple.com/documentation/swiftdata"]
            ]
          },
          {
            "t": "Accessibility in SwiftUI",
            "d": "Great SwiftUI is accessible SwiftUI: labels, Dynamic Type, and VoiceOver done right.",
            "lv": 2,
            "time": "~1d",
            "tip": "SwiftUI gives you a lot for free (buttons read their labels). Custom gestures and Canvas content need manual accessibility work.",
            "learn": [
              "Accessibility modifiers: labels, hints, traits, and combining elements",
              "Dynamic Type: scalable fonts and layouts that survive the largest sizes",
              "Accessibility audits: the built-in audit in Xcode and fixing what it finds"
            ],
            "do": [
              "Run the accessibility audit on your app and fix every issue",
              "Make a custom Canvas chart accessible with accessibilityChartDescriptor",
              "Test your main flow with VoiceOver and full keyboard access"
            ],
            "tools": ["Xcode", "Accessibility Inspector"],
            "res": [
              ["Accessibility", "https://developer.apple.com/accessibility/"]
            ]
          },
          {
            "t": "Capstone: Ship a Complete App",
            "d": "Plan, build, and TestFlight a real SwiftUI app — the whole loop, end to end.",
            "lv": 3,
            "time": "~2w",
            "tip": "Scope ruthlessly: one feature done brilliantly beats five half-built. You can always ship 1.1.",
            "learn": [
              "Scoping: defining a shippable v1 and cutting everything else",
              "Polish checklist: empty states, error states, loading states, app icon, launch screen",
              "The release loop: TestFlight feedback, crash triage, and iterating"
            ],
            "do": [
              "Write a one-page spec: the single job your app does brilliantly",
              "Build it with MVVM, SwiftData, networking, and full state coverage",
              "Ship to TestFlight, gather feedback from five real users, and iterate"
            ],
            "tools": ["Xcode", "TestFlight", "SwiftUI"],
            "res": [
              ["TestFlight", "https://developer.apple.com/testflight/"],
              ["Human Interface Guidelines", "https://developer.apple.com/design/human-interface-guidelines/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
