/* Atlas roadmap data: Scala (scala)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "scala",
  "title": "Scala",
  "icon": "🪜",
  "color": "#dc322f",
  "desc": "Scala 3 from first principles: functional and object-oriented fusion, the collections library, a deep type system, sbt, and the ZIO / Pekko / http4s ecosystem.",
  "kind": "skill",
  "root": {
    "t": "Scala",
    "d": "The JVM language that fuses functional and object-oriented programming, from syntax to effect systems and real services.",
    "children": [
      {
        "t": "Setup & First Steps",
        "d": "Install the modern Scala 3 toolchain and write your first program.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Scala?",
            "d": "A statically typed JVM language fusing FP and OOP, concise like Python, rigorous like Haskell.",
            "lv": 1,
            "time": "~2h",
            "tip": "Scala rewards thinking in transformations, not mutations. If your first programs are Java with different syntax, you're missing the point.",
            "learn": [
              "Scalable Language: grows from scripts to systems; runs on the JVM (plus Scala.js and Scala Native)",
              "The FP+OOP fusion: everything is an object, and functions are values",
              "Where Scala works: data pipelines (Spark), backend services, and fintech"
            ],
            "do": [
              "Read the Scala 3 book introduction on docs.scala-lang.org",
              "List three companies using Scala and what they use it for",
              "Write one paragraph on when you'd pick Scala over Java or Kotlin"
            ],
            "tools": ["Scala", "JVM"],
            "res": [
              ["Scala 3 Book", "https://docs.scala-lang.org/scala3/book/introduction.html"],
              ["scala-lang.org", "https://www.scala-lang.org"]
            ]
          },
          {
            "t": "Scala 2 vs Scala 3",
            "d": "Start on Scala 3, and know what the old syntax looks like when you meet it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Scala 3.9 LTS (2026) is the current long-term line; 3.3.x was the previous LTS",
              "Optional braces, enums, given/using: the big Scala 3 changes",
              "Reading Scala 2: implicits and old syntax you'll still find in legacy codebases"
            ],
            "do": [
              "Compare the same program in Scala 2 and Scala 3 syntax",
              "Convert an old-style implicit into a Scala 3 given",
              "Check which Scala version a sample open-source project targets"
            ],
            "tools": ["Scala 3", "Scala 2.13"],
            "res": [
              ["Scala 3 vs Scala 2", "https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html"]
            ]
          },
          {
            "t": "Installing with Coursier & Scala CLI",
            "d": "The 2026 way in: Coursier installs everything, Scala CLI runs everything.",
            "lv": 1,
            "time": "~2h",
            "tip": "Start with Scala CLI, not sbt. sbt is powerful but slow to learn; Scala CLI gets you running code in minutes.",
            "learn": [
              "Coursier: the installer and artifact fetcher behind the Scala toolchain",
              "Scala CLI: run, test, package, and publish Scala without a build file",
              "JDK choice: Temurin 25 LTS pairs with Scala 3.9 LTS"
            ],
            "do": [
              "Install Coursier and run cs setup",
              "Install Scala CLI and run scala-cli run Hello.scala",
              "Check java -version and scala-cli version"
            ],
            "tools": ["Coursier", "Scala CLI", "JDK 25"],
            "res": [
              ["Scala CLI", "https://scala-cli.virtuslab.org"]
            ]
          },
          {
            "t": "IDEs: IntelliJ & VS Code with Metals",
            "d": "Pick an editor that understands Scala's type system, plain text won't cut it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "IntelliJ IDEA with the Scala plugin: the heavyweight, full-featured choice",
              "VS Code + Metals: the lightweight LSP-based experience",
              "What good Scala tooling gives you: type hints, go-to-definition across implicits/givens"
            ],
            "do": [
              "Open a Scala project in your chosen IDE and get code completion working",
              "Hover a value and read its inferred type",
              "Trigger an organize-imports and a format on save"
            ],
            "tools": ["IntelliJ IDEA", "VS Code", "Metals"],
            "res": [
              ["Metals", "https://scalameta.org/metals/"]
            ]
          },
          {
            "t": "REPL, Worksheets & Your First Program",
            "d": "The fastest feedback loop in Scala: evaluate expressions instantly.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The REPL (scala-cli repl): try expressions without a project",
              "Worksheets: a scratch file that re-evaluates as you type",
              "@main methods: how Scala 3 programs start"
            ],
            "do": [
              "Evaluate 1 + 2, List(1,2,3).map(_ * 2), and 'hello'.toUpperCase in the REPL",
              "Write a @main hello program that greets a name argument",
              "Use :type in the REPL to reveal an inferred type"
            ],
            "tools": ["Scala CLI", "REPL"],
            "res": [
              ["Scala 3 Book: First Steps", "https://docs.scala-lang.org/scala3/book/introduction.html"]
            ]
          }
        ]
      },
      {
        "t": "Core Syntax & Types",
        "d": "vals, type inference, strings, methods, and the type hierarchy everything hangs on.",
        "lv": 1,
        "children": [
          {
            "t": "vals, vars & Type Inference",
            "d": "Immutable by default, typed by inference, the two habits that define Scala style.",
            "lv": 1,
            "time": "~3h",
            "tip": "Default to val. Every var is a small admission that you haven't found the transformation yet, sometimes necessary, never the first choice.",
            "learn": [
              "val (immutable) vs var (mutable); inference fills in types you don't write",
              "When to annotate anyway: public APIs and tricky inference",
              "Reassignment vs rebinding: why val x = ...; x = ... fails"
            ],
            "do": [
              "Declare ten values with inference; hover to confirm the inferred types",
              "Try to reassign a val and read the compiler error",
              "Annotate a public method's return type explicitly"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Scala 3 Book: Variables", "https://docs.scala-lang.org/scala3/book/taste-data-types.html"]
            ]
          },
          {
            "t": "The Type Hierarchy",
            "d": "Any, AnyVal, AnyRef, Nothing, Null, the lattice that makes Scala's types click.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Any at the top; AnyVal (Int, Boolean...) vs AnyRef (objects, String)",
              "Nothing: the bottom type, the type of things that never return",
              "Null and why Option replaced it in idiomatic code"
            ],
            "do": [
              "Draw the hierarchy from memory, then check against the docs",
              "Explain why List[Nothing] is assignable to List[String]",
              "Find where Null still appears (Java interop) and wrap it in Option"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Type Hierarchy", "https://docs.scala-lang.org/scala3/book/types-introduction.html"]
            ]
          },
          {
            "t": "Strings & Interpolation",
            "d": "s, f, and raw interpolators, string building without concatenation soup.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "s\"Hello $name\": interpolation with expressions in ${}",
              "f\"$pi%.2f\": formatted strings with type-checked specifiers",
              "raw\"...\": no escape processing for regexes and paths"
            ],
            "do": [
              "Build a log line with s-interpolation including a ${} expression",
              "Format a table of numbers with f-interpolation",
              "Write a regex with the raw interpolator"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["String Interpolation", "https://docs.scala-lang.org/overviews/core/string-interpolation.html"]
            ]
          },
          {
            "t": "Conditionals as Expressions",
            "d": "In Scala, if returns a value, and that changes how you write branches.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "if/else as an expression assigned to a val",
              "No ternary operator needed, and none exists",
              "Expression-oriented style: fewer statements, more values"
            ],
            "do": [
              "Rewrite three if-statements as if-expressions assigned to vals",
              "Show the compiler error when if/else branches return different types",
              "Refactor a Java-style void method into expression style"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Scala 3 Book: Control Structures", "https://docs.scala-lang.org/scala3/book/taste-control-structures.html"]
            ]
          },
          {
            "t": "Methods & Functions",
            "d": "def, parameter lists, default and named arguments, and methods vs function values.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "def with parameter and return types; single-expression methods",
              "Default arguments, named arguments, and multiple parameter lists",
              "Eta-expansion: turning a method into a function value"
            ],
            "do": [
              "Write a method with default and named arguments; call it three ways",
              "Pass a method as an argument to List.map",
              "Use multiple parameter lists to enable nice call-site syntax"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Methods", "https://docs.scala-lang.org/scala3/book/taste-methods.html"]
            ]
          },
          {
            "t": "Tuples & Destructuring",
            "d": "Return multiple values without a ceremony, and unpack them cleanly.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Tuples: (name, age) with types inferred per element",
              "Destructuring with val (a, b) = pair",
              "When a tuple should become a case class instead"
            ],
            "do": [
              "Write minMax(list) returning (Int, Int) and destructure the result",
              "Zip two lists and destructure in a foreach",
              "Refactor a 4-tuple into a case class and feel the readability win"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Tuples", "https://docs.scala-lang.org/scala3/book/types-tuples.html"]
            ]
          },
          {
            "t": "Imports & Packages",
            "d": "Organize code into packages and import exactly what you need.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "package declarations and the directory convention",
              "import forms: specific, wildcard, renaming, and given imports",
              "Top-level definitions in Scala 3: functions and vals outside classes"
            ],
            "do": [
              "Split a program into two packages and import between them",
              "Use a renamed import to resolve a name clash",
              "Write a top-level helper function and call it from a @main"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Packages and Imports", "https://docs.scala-lang.org/scala3/book/packaging-imports.html"]
            ]
          }
        ]
      },
      {
        "t": "Objects, Traits & Pattern Matching",
        "d": "Scala's OOP: case classes, traits, enums, and match expressions.",
        "lv": 1,
        "children": [
          {
            "t": "Classes & Constructors",
            "d": "Primary constructors in the class signature, concise but complete.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "class Person(val name: String, var age: Int): constructor as signature",
              "Auxiliary constructors and when you need them (rarely)",
              "Access modifiers: private, protected, and private[package]"
            ],
            "do": [
              "Model a BankAccount with deposit/withdraw methods and validation",
              "Add a private balance and a public read-only accessor",
              "Enforce invariants in the constructor with require()"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Classes", "https://docs.scala-lang.org/scala3/book/domain-modeling.html"]
            ]
          },
          {
            "t": "Case Classes",
            "d": "Immutable data with free equals, toString, copy, and pattern matching support.",
            "lv": 1,
            "time": "~3h",
            "tip": "Reach for a case class before a tuple, a Map, or a plain class. Named immutable data is the default building block of Scala programs.",
            "learn": [
              "What case gives you: apply, unapply, copy, equals, hashCode, toString",
              "copy() for functional updates: user.copy(age = 31)",
              "Case classes as the leaves of your domain model"
            ],
            "do": [
              "Model User(name, email, age) and demonstrate copy with one field changed",
              "Show structural equality: two equal instances with ==",
              "Pattern-match on a case class in a match expression"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Case Classes", "https://docs.scala-lang.org/scala3/book/domain-modeling.html"]
            ]
          },
          {
            "t": "Objects & Companion Objects",
            "d": "Singletons, static-like utilities, and the apply factory pattern.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "object as a singleton; @main methods live in objects",
              "Companion objects: same name as a class, holding factories and implicits/givens",
              "apply as constructor sugar: List(1,2,3) calls List.apply"
            ],
            "do": [
              "Write a Config object loading settings once",
              "Add a companion object with a validated fromString factory",
              "Implement apply/unapply on a companion by hand"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Objects", "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html"]
            ]
          },
          {
            "t": "Traits & Enums",
            "d": "Compose behavior with traits; model fixed choices with enums.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Traits: interfaces with implementations; mixin composition with with",
              "Scala 3 enums: simple, parameterized, and with methods",
              "Traits vs abstract classes: linearization and stackable modifications"
            ],
            "do": [
              "Model PaymentMethod as an enum with cases and a fee method",
              "Mix Timestamped and Auditable traits into a model",
              "Demonstrate trait linearization order with stacked super calls"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Traits", "https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html"]
            ]
          },
          {
            "t": "Pattern Matching",
            "d": "match expressions: destructuring, guards, and exhaustiveness checking.",
            "lv": 2,
            "time": "~4h",
            "tip": "The compiler warns on non-exhaustive matches, treat that warning as an error. An unhandled case is a runtime crash waiting for production.",
            "learn": [
              "Case patterns: literals, variables, constructors, and guards",
              "Exhaustiveness checking on sealed hierarchies",
              "Matching on types, tuples, and nested structures"
            ],
            "do": [
              "Write a match over an enum with a guard on one case",
              "Trigger the non-exhaustive warning and fix it with a catch-all or sealed trait",
              "Destructure a nested case class three levels deep"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Pattern Matching", "https://docs.scala-lang.org/scala3/book/control-structures.html"]
            ]
          },
          {
            "t": "Sealed Hierarchies & ADTs",
            "d": "Model 'one of these' with sealed traits, algebraic data types, the Scala way.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "sealed: the compiler knows all subtypes, enabling exhaustiveness",
              "Sum types (sealed trait + cases) vs product types (case classes)",
              "Modeling real domains: Result, PaymentStatus, Json AST"
            ],
            "do": [
              "Model a payment result as sealed trait with Success/Failure/Pending cases",
              "Write an exhaustive interpreter over it",
              "Add a new case and let the compiler find every match you must update"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Sealed Traits", "https://docs.scala-lang.org/scala3/book/domain-modeling.html"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "Functional Programming Core",
        "d": "Immutability, higher-order functions, collections, and for-comprehensions.",
        "lv": 2,
        "children": [
          {
            "t": "Immutability First",
            "d": "Stop mutating state; transform data and let the old version go.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why immutability: no aliasing bugs, safe sharing, easy reasoning",
              "Persistent data structures: 'modified' copies share structure",
              "copy() on case classes as the update mechanism"
            ],
            "do": [
              "Rewrite a loop that mutates an array into a map/filter pipeline",
              "Demonstrate structural sharing with two large Lists",
              "Find a mutation bug in imperative code and fix it functionally"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Scala 3 Book: FP Introduction", "https://docs.scala-lang.org/scala3/book/fp-intro.html"]
            ]
          },
          {
            "t": "Higher-Order Functions & Lambdas",
            "d": "Functions as values: pass behavior, not just data.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Lambda syntax: x => x * 2 and the _ placeholder",
              "Function types: Int => String and multi-parameter forms",
              "Writing your own higher-order function (e.g. retry)"
            ],
            "do": [
              "Write retry[A](n: Int)(op: => A): A with by-name parameter",
              "Implement map for a custom List type",
              "Use _ placeholder syntax and know its limits"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Higher-Order Functions", "https://docs.scala-lang.org/scala3/book/fp-higher-order-functions.html"]
            ]
          },
          {
            "t": "Collections: List, Vector, Map, Set",
            "d": "The standard library's immutable collections and when to pick each.",
            "lv": 2,
            "time": "~4h",
            "tip": "List is for head/tail recursion and pattern matching; Vector is for indexed access and appends. Picking List for random access is a classic performance trap.",
            "learn": [
              "List (linked), Vector (indexed), Map, Set, and their mutable cousins",
              "Performance characteristics that actually matter",
              "Builders and factory methods: fill, tabulate, range"
            ],
            "do": [
              "Benchmark List append vs Vector append at 100k elements",
              "Build a word-frequency Map from a text with groupBy",
              "Convert between mutable and immutable at a boundary"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Collections Overview", "https://docs.scala-lang.org/overviews/collections-2.13/introduction.html"]
            ]
          },
          {
            "t": "map, flatMap, filter, fold",
            "d": "The four combinators that replace most loops you'll ever write.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "map: transform each; filter: keep some; flatMap: transform and flatten",
              "foldLeft/foldRight: reduce to one value with an accumulator",
              "collect: filter + map in one pass with partial functions"
            ],
            "do": [
              "Parse List[String] to List[Int], dropping invalid entries with flatMap",
              "Compute word counts with groupMapReduce",
              "Rewrite a nested-loop join as a for-comprehension over two lists"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Collections Methods", "https://docs.scala-lang.org/overviews/collections-2.13/trait-iterable.html"]
            ]
          },
          {
            "t": "For-Comprehensions",
            "d": "Syntactic sugar over map/flatMap, readable chains of dependent steps.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Desugaring: for { a <- x; b <- y } yield f(a,b) is flatMap + map",
              "Guards with if inside comprehensions",
              "for-comprehensions over Option, Either, List, and Futures"
            ],
            "do": [
              "Desugar a for-comprehension by hand into flatMap/map",
              "Chain three Option lookups with a guard",
              "Compare the same logic written with explicit flatMap calls"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["For-Comprehensions", "https://docs.scala-lang.org/scala3/book/control-structures.html"]
            ]
          },
          {
            "t": "Option, Either & Try",
            "d": "Errors as values: no nulls, no surprise exceptions in signatures.",
            "lv": 2,
            "time": "~4h",
            "tip": "Calling .get on an Option is a code smell the compiler can't catch. If you 'know' it's defined, prove it with pattern matching or getOrElse.",
            "learn": [
              "Option: Some/None for absent values; Either: Left error / Right success",
              "Try for capturing exceptions as values",
              "Combinators: map, flatMap, getOrElse, toRight, fold"
            ],
            "do": [
              "Rewrite a null-prone lookup chain with Option",
              "Model validation errors with Either[List[String], User]",
              "Convert a throwing parse into Try and recover gracefully"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Option", "https://www.scala-lang.org/api/3.x/scala/Option.html"]
            ]
          },
          {
            "t": "Laziness: lazy vals & by-name Params",
            "d": "Defer work until needed, and understand when evaluation happens.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "lazy val: computed once, on first access",
              "By-name parameters (=> A): re-evaluated on each use",
              "LazyList and views for infinite or huge sequences"
            ],
            "do": [
              "Prove a lazy val runs once with a println side effect",
              "Build an infinite LazyList of Fibonacci numbers and take 10",
              "Compare strict vs lazy evaluation of an expensive default argument"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["LazyList", "https://www.scala-lang.org/api/3.x/scala/collection/immutable/LazyList.html"]
            ]
          }
        ]
      },
      {
        "t": "The Type System",
        "d": "Generics, variance, givens, and typeclasses, Scala's famous power tools.",
        "lv": 3,
        "children": [
          {
            "t": "Generics & Type Parameters",
            "d": "Write code once, type it for everything, with bounds that keep it honest.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Type parameters on classes and methods: Box[A], def head[A](xs: List[A])",
              "Upper and lower bounds: A <: Ordered[A]",
              "Type erasure on the JVM and its practical consequences"
            ],
            "do": [
              "Write a generic Stack[A] with push/pop/peek",
              "Hit type erasure matching on List[Int] vs List[String]; fix with explicit tags",
              "Bound a generic sort to A <: Ordered[A]"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Generic Classes", "https://docs.scala-lang.org/scala3/book/types-generics.html"]
            ]
          },
          {
            "t": "Variance: +A and -A",
            "d": "Why List[Cat] is a List[Animal] but Array isn't, and when to care.",
            "lv": 3,
            "time": "~4h",
            "tip": "If variance errors confuse you, remember the rule: producers can be covariant (+A), consumers contravariant (-A), mutable things invariant.",
            "learn": [
              "Covariance (+A): producers; Contravariance (-A): consumers; Invariance: mutable structures",
              "Why immutable List is covariant but Array is invariant",
              "Variance positions: where the compiler forbids each annotation"
            ],
            "do": [
              "Assign a List[Cat] to List[Animal] and explain why it compiles",
              "Write a Function1[-A, +B] example from scratch",
              "Fix a variance error by moving a method parameter to a method type param"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Variance", "https://docs.scala-lang.org/scala3/book/types-variance.html"]
            ]
          },
          {
            "t": "Given/Using: Contextual Abstractions",
            "d": "Implicit context made explicit, pass configuration without threading parameters.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "given instances and using clauses: the Scala 3 replacement for implicits",
              "summon / summonInline to access context",
              "Common uses: ExecutionContext, typeclass instances, configuration"
            ],
            "do": [
              "Pass a Config through three layers with using instead of parameters",
              "Define two givens for the same type and resolve the ambiguity",
              "Migrate an old implicit parameter list to given/using"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Contextual Abstractions", "https://docs.scala-lang.org/scala3/book/ca-context-parameters.html"]
            ]
          },
          {
            "t": "Typeclasses",
            "d": "Ad-hoc polymorphism: add behavior to types you don't own.",
            "lv": 3,
            "time": "~5h",
            "tip": "Typeclasses solve the expression problem: new types and new operations without touching old code. Inheritance can't do both at once.",
            "learn": [
              "The pattern: trait Show[A], given instances, extension method summoning",
              "Derivation: the compiler generating instances for case classes",
              "Cats typeclasses you'll meet: Semigroup, Monoid, Functor, Monad"
            ],
            "do": [
              "Write a JsonEncoder typeclass with instances for your models",
              "Derive encoders for nested case classes automatically",
              "Add a Monoid instance and use combineAll on a list"
            ],
            "tools": ["Scala 3", "Cats"],
            "res": [
              ["Typeclasses", "https://docs.scala-lang.org/scala3/book/ca-type-classes.html"]
            ]
          },
          {
            "t": "Extension Methods & Opaque Types",
            "d": "Enrich existing types and create zero-cost newtypes.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "extension methods: add .asJson to any type cleanly",
              "Opaque types: UserId distinct from String at compile time, String at runtime",
              "Where newtypes prevent billion-dollar mistakes (ids, money, emails)"
            ],
            "do": [
              "Add extension methods to String for your domain",
              "Define opaque type UserId = String with a validated smart constructor",
              "Prove UserId and OrderId don't mix at compile time"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Opaque Types", "https://docs.scala-lang.org/scala3/book/types-opaque-types.html"]
            ]
          },
          {
            "t": "Implicits: Reading Legacy Scala 2",
            "d": "You won't write implicits, but you'll read them in every older codebase.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "implicit val/def/parameter: the Scala 2 spelling of given/using",
              "Implicit conversions: why they were powerful and dangerous",
              "Migration mapping: implicit → given, implicitly → summon"
            ],
            "do": [
              "Read a Scala 2 library's implicits and translate them to Scala 3",
              "Find an implicit conversion in old code and replace it with an extension method",
              "Use the Scala 3 migration rewrite rules on a small module"
            ],
            "tools": ["Scala 2.13", "Scala 3"],
            "res": [
              ["Migration Guide", "https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "sbt & the Build Ecosystem",
        "d": "Build, test, and publish Scala projects with sbt, and know the alternatives.",
        "lv": 2,
        "children": [
          {
            "t": "sbt Build Definition",
            "d": "build.sbt demystified: settings, tasks, and the settings/task/setting-task trinity.",
            "lv": 2,
            "time": "~4h",
            "tip": "sbt is slow to start and cryptic to debug, that's normal. Learn the five commands (compile, test, run, console, reload) and google the rest.",
            "learn": [
              "build.sbt: name, version, scalaVersion, libraryDependencies",
              "The interactive shell: ~test for continuous testing",
              "project/build.properties pins the sbt version"
            ],
            "do": [
              "Create an sbt project with scalaVersion 3.9.x",
              "Add a dependency and watch Coursier fetch it",
              "Use ~test to get continuous feedback while coding"
            ],
            "tools": ["sbt", "Coursier"],
            "res": [
              ["sbt Reference", "https://www.scala-sbt.org/1.x/docs/"]
            ]
          },
          {
            "t": "Dependencies & Versioning",
            "d": "Depend on libraries correctly: %% cross-building, resolvers, and eviction.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "%% vs %: cross-built artifacts per Scala version",
              "Semantic versioning and eviction warnings",
              "Resolving conflicts with dependencyOverrides"
            ],
            "do": [
              "Add cats-core with %% and inspect the resolved artifact name",
              "Trigger an eviction warning and resolve it",
              "Pin a transitive dependency with dependencyOverrides"
            ],
            "tools": ["sbt", "Coursier"],
            "res": [
              ["Library Dependencies", "https://www.scala-sbt.org/1.x/docs/Library-Dependencies.html"]
            ]
          },
          {
            "t": "Scala CLI vs sbt vs Mill",
            "d": "Three build tools, three philosophies, pick the right one per project size.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Scala CLI: scripts and small projects, directives in comments",
              "sbt: the standard for multi-module builds and plugins",
              "Mill: the fast, principled alternative gaining adoption"
            ],
            "do": [
              "Convert a Scala CLI script project into an sbt build",
              "Add a second module to the sbt build with inter-module deps",
              "Try Mill on a fresh project and compare build speed"
            ],
            "tools": ["Scala CLI", "sbt", "Mill"],
            "res": [
              ["Scala CLI", "https://scala-cli.virtuslab.org"],
              ["Mill", "https://mill-build.org"]
            ]
          },
          {
            "t": "Testing: munit & ScalaTest",
            "d": "Write tests the Scala way, and property-based tests that find bugs you'd never think of.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "munit: the simple, fast default (FunSuite)",
              "ScalaTest: the feature-rich veteran with many styles",
              "ScalaCheck: property-based testing, test properties, not examples"
            ],
            "do": [
              "Write a munit FunSuite for your Stack[A]",
              "Add a ScalaCheck property: reverse(reverse(xs)) == xs",
              "Watch a property test shrink a failing case to the minimal input"
            ],
            "tools": ["munit", "ScalaTest", "ScalaCheck"],
            "res": [
              ["munit", "https://scalameta.org/munit/"],
              ["ScalaTest", "https://www.scalatest.org"]
            ],
            "badge": "LAB"
          },
          {
            "t": "JSON with circe",
            "d": "Encode and decode JSON with typeclass derivation, the pattern behind most Scala JSON.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Automatic vs semi-automatic derivation of encoders/decoders",
              "Parsing with io.circe.parser and handling DecodeFailure",
              "Custom encoders for tricky shapes"
            ],
            "do": [
              "Derive codecs for your domain models",
              "Parse a real API response and handle a missing field",
              "Write a custom encoder for a sealed trait hierarchy"
            ],
            "tools": ["circe", "Scala 3"],
            "res": [
              ["circe", "https://circe.github.io/circe/"]
            ]
          }
        ]
      },
      {
        "t": "Concurrency & Effect Systems",
        "d": "From Futures to ZIO and Cats Effect: managing side effects and concurrency properly.",
        "lv": 3,
        "children": [
          {
            "t": "Futures & ExecutionContext",
            "d": "The standard library's async primitive, and why the ecosystem moved past it.",
            "lv": 3,
            "time": "~4h",
            "tip": "Future is eager and uncancelable, it starts computing the moment you create it. That's the root of most Future bugs; effect systems fix it by making IO lazy.",
            "learn": [
              "Future creation, map/flatMap, and for-comprehensions",
              "ExecutionContext: the thread pool your Futures run on",
              "The pitfalls: eagerness, no cancellation, no resource safety"
            ],
            "do": [
              "Fetch two URLs concurrently with Future.sequence",
              "Demonstrate eagerness: create a Future, never use it, watch it run",
              "Handle failures with recover and recoverWith"
            ],
            "tools": ["Scala 3"],
            "res": [
              ["Futures", "https://docs.scala-lang.org/overviews/core/futures.html"]
            ]
          },
          {
            "t": "Cats Effect IO",
            "d": "Lazy, cancelable, resource-safe effects, the Typelevel way.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "IO as a description of work, not the work itself",
              "Referential transparency: same IO, same result, every time",
              "Resource.make for guaranteed acquisition/release"
            ],
            "do": [
              "Rewrite a Future program in IO and prove laziness",
              "Bracket a file handle with Resource.make",
              "Race two IOs and cancel the loser with racePair"
            ],
            "tools": ["Cats Effect", "Scala 3"],
            "res": [
              ["Cats Effect", "https://typelevel.org/cats-effect/"]
            ]
          },
          {
            "t": "ZIO Basics",
            "d": "ZIO[R, E, A]: typed errors, typed environment, and a batteries-included ecosystem.",
            "lv": 3,
            "time": "~6h",
            "tip": "Read ZIO[R, E, A] as 'needs R, fails with E, succeeds with A'. Once that clicks, the whole library reads like prose.",
            "learn": [
              "ZIO[R, E, A] vs Task[A] vs UIO[A]: the core aliases",
              "Typed errors: fail vs die, and error channels in for-comprehensions",
              "ZLayer for dependency injection without frameworks"
            ],
            "do": [
              "Write a ZIO app with typed domain errors",
              "Provide a service via ZLayer and test with a mock layer",
              "Convert a throwing function with ZIO.attempt and refine the error"
            ],
            "tools": ["ZIO", "Scala 3"],
            "res": [
              ["ZIO", "https://zio.dev"]
            ]
          },
          {
            "t": "Fibers & Structured Concurrency",
            "d": "Lightweight concurrency with supervision, thousands of fibers, zero OS threads wasted.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Fibers vs threads vs Futures: the cost model",
              "forkDaemon vs scoped forks; interruption as cooperative cancellation",
              "Structured concurrency: children can't outlive their scope (Ox, ZIO scopes)"
            ],
            "do": [
              "Fork 10,000 fibers counting down and observe the memory",
              "Interrupt a fiber and verify cleanup runs",
              "Compare Ox's structured concurrency with raw Future"
            ],
            "tools": ["ZIO", "Cats Effect", "Ox"],
            "res": [
              ["ZIO Fibers", "https://zio.dev/reference/concurrency/fibers"]
            ]
          },
          {
            "t": "Error Channels & Resource Safety",
            "d": "Model failures precisely and guarantee cleanup, the professional's checklist.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Expected errors (Either/E) vs defects (die/throw): separate them deliberately",
              "Retry policies, schedules, and timeouts",
              "Resource safety patterns: bracket, acquireRelease, ZIO.acquireRelease"
            ],
            "do": [
              "Add exponential-backoff retry to a flaky API call",
              "Guarantee a DB connection closes even when the fiber is interrupted",
              "Separate a validation error from a bug in your error model"
            ],
            "tools": ["ZIO", "Cats Effect"],
            "res": [
              ["ZIO Error Handling", "https://zio.dev/reference/error-management/"]
            ]
          },
          {
            "t": "Streaming: fs2 & ZIO Streams",
            "d": "Process infinite data with constant memory, pull-based streaming done right.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Streams as pull-based, chunked, resource-safe pipelines",
              "Combinators: map, filter, evalMap, broadcast, merge",
              "Real uses: file processing, Kafka consumers, SSE endpoints"
            ],
            "do": [
              "Stream a 1 GB CSV, transforming rows with constant memory",
              "Merge two streams and take the first 100 elements",
              "Build a streaming file-upload endpoint"
            ],
            "tools": ["fs2", "ZIO Streams"],
            "res": [
              ["fs2", "https://fs2.io"]
            ]
          }
        ]
      },
      {
        "t": "Real-World Scala",
        "d": "Actors, HTTP APIs, databases, and Spark, shipping Scala in production.",
        "lv": 3,
        "children": [
          {
            "t": "Actors with Pekko (ex-Akka)",
            "d": "The actor model for concurrent, distributed systems, now under Apache as Pekko.",
            "lv": 3,
            "time": "~6h",
            "tip": "Akka's license change (BSL) pushed the community to Apache Pekko. New projects use Pekko; 'Akka' in old tutorials means the same concepts.",
            "learn": [
              "Actors: state + behavior + mailbox; message passing, no shared memory",
              "Typed actors (Behavior[T]) vs the classic untyped API",
              "Supervision hierarchies: let failing actors be restarted by parents"
            ],
            "do": [
              "Build a counter actor and a word-count pipeline of actors",
              "Supervise a crashing child with a restart strategy",
              "Run two actor systems and send messages between them"
            ],
            "tools": ["Apache Pekko", "Scala 3"],
            "res": [
              ["Apache Pekko", "https://pekko.apache.org"]
            ]
          },
          {
            "t": "HTTP APIs: http4s & Tapir",
            "d": "Type-safe HTTP services, from routes to OpenAPI documentation.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "http4s: functional routes as Kleisli[IO, Request, Response]",
              "Tapir: describe endpoints once, get server, client, and docs",
              "Middleware: logging, auth, CORS, and metrics"
            ],
            "do": [
              "Build CRUD routes with http4s and circe JSON",
              "Define the same API in Tapir and generate OpenAPI docs",
              "Add authentication middleware rejecting bad tokens"
            ],
            "tools": ["http4s", "Tapir", "Cats Effect"],
            "res": [
              ["http4s", "https://http4s.org"],
              ["Tapir", "https://tapir.softwaremill.com"]
            ]
          },
          {
            "t": "Database Access with Doobie",
            "d": "Type-checked SQL without an ORM, queries verified at compile time.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Doobie's IO-based query model: sql\"...\".query[User].to[List]",
              "Compile-time query checking with the YOLO mode in tests",
              "Transactors and connection pooling with HikariCP"
            ],
            "do": [
              "Write CRUD with Doobie against Postgres",
              "Enable query checking and fix a column-name mismatch at compile time",
              "Run a transaction across two updates with rollback on failure"
            ],
            "tools": ["Doobie", "PostgreSQL", "HikariCP"],
            "res": [
              ["Doobie", "https://tpolecat.github.io/doobie/"]
            ]
          },
          {
            "t": "Spark with Scala",
            "d": "Distributed data processing, where Scala's FP roots pay off at scale.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "RDDs vs DataFrames vs Datasets: the three APIs",
              "Transformations (lazy) vs actions (eager): the execution model",
              "Why Scala is Spark's native language"
            ],
            "do": [
              "Run a word count on a real dataset locally",
              "Rewrite an RDD job with the Dataset API and compare",
              "Tune partitions and watch the Spark UI"
            ],
            "tools": ["Apache Spark", "Scala 3"],
            "res": [
              ["Apache Spark", "https://spark.apache.org"]
            ],
            "tag": "opt"
          },
          {
            "t": "Shipping: Native, Scala.js & Capstone",
            "d": "Compile beyond the JVM and ship a complete Scala service.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Scala Native: ahead-of-time binaries with fast startup",
              "Scala.js: Scala compiled to JavaScript for the browser",
              "Production concerns: GraalVM native images, Docker layers, observability"
            ],
            "do": [
              "Compile a CLI tool with Scala Native and time its startup",
              "Build a small Scala.js frontend calling your http4s API",
              "Ship the full stack in Docker with health checks and metrics"
            ],
            "tools": ["Scala Native", "Scala.js", "Docker", "GraalVM"],
            "res": [
              ["Scala Native", "https://scala-native.org"],
              ["Scala.js", "https://www.scala-js.org"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
