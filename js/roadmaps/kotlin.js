/* Atlas roadmap data: Kotlin (kotlin)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "kotlin",
  "title": "Kotlin",
  "icon": "💠",
  "color": "#7f52ff",
  "kind": "skill",
  "tagline": "The modern language for Android, backends, and multiplatform.",
  "desc": "The Kotlin language end to end: syntax and null safety, functions and OOP, collections, coroutines and Flow, and the ecosystem — Gradle, Ktor, serialization, and Kotlin Multiplatform basics.",
  "root": {
    "t": "Kotlin",
    "d": "Master the Kotlin language — from val vs var to coroutines, Flow, and sharing code across platforms.",
    "children": [
      {
        "t": "Kotlin Foundations",
        "d": "Why Kotlin exists, setting up, and the core syntax every program is built from.",
        "lv": 1,
        "children": [
          {
            "t": "Why Kotlin & Where It Runs",
            "d": "JetBrains' pragmatic language: 100% Java-interoperable, concise, and null-safe by design.",
            "lv": 1,
            "time": "~2h",
            "tip": "Kotlin is not 'better Java syntax' — its killer features are null safety in the type system and coroutines. Learn those deeply and the rest follows.",
            "learn": [
              "Kotlin's targets: JVM bytecode, Android, Kotlin/Native, Kotlin/JS, Wasm",
              "Why Google made it the preferred Android language: less boilerplate, fewer crashes",
              "The K2 compiler: faster builds and smarter analysis in Kotlin 2.x"
            ],
            "do": [
              "Read the Kotlin overview and list three problems it solves that Java does not",
              "Find one Android job posting and note how Kotlin is positioned in it",
              "Write down where you would use Kotlin vs where you would not"
            ],
            "tools": ["Kotlin"],
            "res": [
              ["Kotlin docs", "https://kotlinlang.org/docs/home.html"],
              ["Kotlin homepage", "https://kotlinlang.org/"]
            ]
          },
          {
            "t": "Setting Up: IntelliJ IDEA & Kotlin Playground",
            "d": "A working Kotlin environment in minutes — IDE for projects, playground for experiments.",
            "lv": 1,
            "time": "~2h",
            "tip": "Use the Kotlin Playground for every small experiment in this roadmap — compiling a full project to test one expression is how beginners waste hours.",
            "learn": [
              "IntelliJ IDEA: creating a Kotlin/JVM project and running main()",
              "Kotlin Playground: zero-install snippets with shareable links",
              "The Kotlin Notebook plugin for interactive exploration"
            ],
            "do": [
              "Create a Kotlin project in IntelliJ and run a Hello World main()",
              "Run the same snippet in the Kotlin Playground and share the link",
              "Explore the IDE's intention actions (Alt+Enter) on a simple expression"
            ],
            "tools": ["IntelliJ IDEA", "Kotlin Playground"],
            "res": [
              ["Kotlin Playground", "https://play.kotlinlang.org/"],
              ["Kotlin: getting started", "https://kotlinlang.org/docs/getting-started.html"]
            ]
          },
          {
            "t": "main(), val vs var & Variables",
            "d": "Program entry points and Kotlin's famous immutability-by-default philosophy.",
            "lv": 1,
            "time": "~3h",
            "tip": "Default to val. Every var is a small promise that the value legitimately changes — codebases drowning in var are harder to reason about and harder to make concurrent.",
            "learn": [
              "fun main(): top-level functions, no class boilerplate required",
              "val (read-only) vs var (mutable): the semantic difference that matters",
              "Type inference: when to let the compiler infer and when to declare explicitly"
            ],
            "do": [
              "Write a main() that declares val and var variables and prints them",
              "Try to reassign a val and read the compiler error carefully",
              "Refactor a snippet to use val everywhere the value never changes"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: basic syntax", "https://kotlinlang.org/docs/basic-syntax.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Types & Type Inference",
            "d": "The number types, Char, Boolean, and how Kotlin infers what you mean.",
            "lv": 1,
            "time": "~3h",
            "tip": "Kotlin has no implicit numeric widening surprises like Java's — but it also has no primitive/object split in your code. Int is Int; the compiler handles boxing.",
            "learn": [
              "Number types: Byte, Short, Int, Long, Float, Double and their literals",
              "Char, Boolean, and explicit conversions (toInt(), toLong())",
              "Type inference rules and when explicit types aid readability"
            ],
            "do": [
              "Declare each numeric type and print its min/max values",
              "Convert a String to Int safely and handle the failure case",
              "Find where the compiler infers a type you did not expect (hover in the IDE)"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: basic types", "https://kotlinlang.org/docs/basic-types.html"],
              ["Kotlin: basic syntax", "https://kotlinlang.org/docs/basic-syntax.html"]
            ]
          },
          {
            "t": "Strings, Templates & Printing",
            "d": "String interpolation, multiline strings, and the print functions.",
            "lv": 1,
            "time": "~2h",
            "tip": "Triple-quoted strings with trimIndent() replace most string-builder code — if you are concatenating with + across lines, there is a cleaner way.",
            "learn": [
              "String templates: $name and ${expression} interpolation",
              "Multiline strings with trimMargin()/trimIndent()",
              "print vs println and basic string operations"
            ],
            "do": [
              "Build a formatted receipt using string templates and ${} expressions",
              "Write a multiline SQL/JSON literal with trimIndent()",
              "Escape a literal $ sign and quote characters correctly"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: strings", "https://kotlinlang.org/docs/strings.html"],
              ["Kotlin: basic syntax", "https://kotlinlang.org/docs/basic-syntax.html"]
            ]
          },
          {
            "t": "Conditionals: if Expressions & when",
            "d": "if returns values and when replaces switch — Kotlin's expressive branching.",
            "lv": 1,
            "time": "~3h",
            "tip": "when with a sealed class or enum is exhaustive — the compiler proves you handled every case. This is a superpower: adding a new subtype breaks compilation until you handle it.",
            "learn": [
              "if as an expression: assigning branches directly to val",
              "when: subject form, argument-less form, and range/type checks in branches",
              "Exhaustiveness: when the compiler requires else and when it does not"
            ],
            "do": [
              "Replace a nested if-else chain with an if expression assigned to val",
              "Write a when that maps HTTP status codes to messages, with ranges",
              "Use when with is-checks to handle three different types smartly"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: conditions and loops", "https://kotlinlang.org/docs/control-flow.html"],
              ["Kotlin: when", "https://kotlinlang.org/docs/control-flow.html"]
            ]
          },
          {
            "t": "Loops, Ranges & Progressions",
            "d": "for-in iteration over the elegant range syntax Kotlin is famous for.",
            "lv": 1,
            "time": "~3h",
            "tip": "(1..10).filter { it % 2 == 0 } works because ranges are progressions implementing Iterable — ranges are real objects, not just loop syntax.",
            "learn": [
              "for (x in ...): iterating collections, ranges, and strings",
              "Range operators: .. (closed), ..< (open-ended), downTo, step",
              "while/do-while and when to prefer collection operations instead"
            ],
            "do": [
              "Print a multiplication table using nested for loops over ranges",
              "Iterate 10 downTo 1 step 2 and predict the output first",
              "Rewrite a while loop as a for loop over a range"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: ranges and progressions", "https://kotlinlang.org/docs/ranges.html"],
              ["Kotlin: conditions and loops", "https://kotlinlang.org/docs/control-flow.html"]
            ]
          },
          {
            "t": "Arrays",
            "d": "Fixed-size, mutable collections of a single type — and how they differ from lists.",
            "lv": 1,
            "time": "~2h",
            "tip": "Prefer List over Array in Kotlin code — arrays are fixed-size and mostly exist for Java interop and performance hotspots. listOf/mutableListOf is the idiomatic default.",
            "learn": [
              "arrayOf, intArrayOf and primitive arrays (no boxing)",
              "Array size is fixed: reading, writing, and bounds",
              "When arrays are the right choice: interop and tight loops"
            ],
            "do": [
              "Create an IntArray, fill it with squares, and print it",
              "Trigger and fix an ArrayIndexOutOfBoundsException deliberately",
              "Convert between Array and List and note what changes"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: arrays", "https://kotlinlang.org/docs/arrays.html"],
              ["Kotlin: basic syntax", "https://kotlinlang.org/docs/basic-syntax.html"]
            ]
          },
          {
            "t": "Exceptions: throw, try/catch & Nothing",
            "d": "Kotlin exceptions are unchecked — expressive error handling without throws declarations.",
            "lv": 1,
            "time": "~2h",
            "tip": "try is an expression in Kotlin — val result = try { risky() } catch (e: Exception) { fallback }. Use this instead of declaring nullable temps.",
            "learn": [
              "throw, try/catch/finally: no checked exceptions, no throws keyword",
              "try as an expression returning a value",
              "Nothing: the type of functions that never return (throw, TODO())"
            ],
            "do": [
              "Write a function that throws IllegalArgumentException on bad input",
              "Use try as an expression to parse user input with a fallback",
              "Create a TODO() stub and observe its Nothing type in the IDE"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: exceptions", "https://kotlinlang.org/docs/exceptions.html"],
              ["Kotlin: basic syntax", "https://kotlinlang.org/docs/basic-syntax.html"]
            ]
          }
        ]
      },
      {
        "t": "Functions & Functional Thinking",
        "d": "Kotlin's expressive functions: defaults, lambdas, extensions, and scope functions.",
        "lv": 1,
        "children": [
          {
            "t": "Functions: Parameters, Defaults & Named Args",
            "d": "Concise, expressive function declarations — the unit of Kotlin code.",
            "lv": 1,
            "time": "~3h",
            "tip": "Named arguments make boolean parameters readable at call sites: setEnabled(enabled = true) vs setEnabled(true). Use them whenever a call would otherwise be cryptic.",
            "learn": [
              "fun syntax, single-expression functions, and Unit return type",
              "Default parameter values and named arguments",
              "vararg parameters and the spread operator"
            ],
            "do": [
              "Write a function with three default parameters and call it three different ways",
              "Convert a multi-line function to single-expression form",
              "Build a vararg logger and spread an array into it"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: functions", "https://kotlinlang.org/docs/functions.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Lambdas & Higher-Order Functions",
            "d": "Functions as values: the foundation of Kotlin's collection API and DSLs.",
            "lv": 2,
            "time": "~4h",
            "tip": "it is convenient but unnamed — in nested lambdas, name your parameters explicitly. it inside it is where readability goes to die.",
            "learn": [
              "Lambda syntax: { x: Int -> x * 2 }, trailing lambdas, and it",
              "Higher-order functions: passing and returning functions",
              "Function types: (Int) -> String as a first-class type"
            ],
            "do": [
              "Write repeat(n, action: () -> Unit) and use it with a trailing lambda",
              "Implement your own myFilter extension using a predicate lambda",
              "Pass a named function reference (::isEven) where a lambda is expected"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: lambdas", "https://kotlinlang.org/docs/lambdas.html"],
              ["Kotlin: higher-order functions", "https://kotlinlang.org/docs/lambdas.html"]
            ]
          },
          {
            "t": "Extension Functions",
            "d": "Add methods to any class — including ones you do not own — without inheritance.",
            "lv": 2,
            "time": "~3h",
            "tip": "Extensions are resolved statically, not virtually — they do not override. An extension on a supertype will not dispatch to a subtype's extension. This surprises everyone once.",
            "learn": [
              "fun String.shout(): defining extensions on any type",
              "Extension properties and nullable receiver extensions",
              "Static resolution: why extensions are not polymorphism"
            ],
            "do": [
              "Write String.isValidEmail() and Int.isEven() extensions",
              "Add an extension on a nullable receiver (String?.orEmpty custom)",
              "Demonstrate static dispatch with extensions on a class hierarchy"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: extensions", "https://kotlinlang.org/docs/extensions.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Scope Functions: let, run, with, apply, also",
            "d": "The five scope functions that make Kotlin code read like prose.",
            "lv": 2,
            "time": "~4h",
            "tip": "apply configures an object and returns it; also does side effects and returns it; let transforms and returns the lambda result. Mixing them up is the classic scope-function bug — learn the 2x2 grid (this/it x returns-object/returns-lambda-result).",
            "learn": [
              "The grid: let/run/with/apply/also — receiver (this vs it) and return value",
              "let for null-safe transformations: nullable?.let { ... }",
              "apply for builder-style configuration, also for logging/validation side effects"
            ],
            "do": [
              "Configure an object with apply instead of repetitive assignments",
              "Chain nullable?.let { } to transform a possibly-null value safely",
              "Rewrite a nested-null-check block using scope functions, then judge readability honestly"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: scope functions", "https://kotlinlang.org/docs/scope-functions.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Inline Functions & reified Types",
            "d": "Zero-cost abstractions: inlining lambdas and beating type erasure with reified.",
            "lv": 3,
            "time": "~3h",
            "tip": "Do not sprinkle inline everywhere — it bloats bytecode at every call site. Reserve it for higher-order functions where lambda allocation actually matters.",
            "learn": [
              "inline: how lambda parameters get inlined at call sites",
              "reified type parameters: accessing T::class inside inline functions",
              "noinline and crossinline: controlling inlining behavior"
            ],
            "do": [
              "Write inline fun <reified T> isA(value: Any) = value is T and use it",
              "Build a reified JSON-ish parser helper that reads T::class.java",
              "Compare bytecode size of an inline vs non-inline higher-order function"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: inline functions", "https://kotlinlang.org/docs/inline-functions.html"],
              ["Kotlin: inline value classes", "https://kotlinlang.org/docs/inline-classes.html"]
            ]
          }
        ]
      },
      {
        "t": "Null Safety",
        "d": "The type system that eliminated the billion-dollar mistake — Kotlin's signature feature.",
        "lv": 2,
        "children": [
          {
            "t": "Nullable vs Non-Nullable: The Type System",
            "d": "String and String? are different types — nullability is checked at compile time.",
            "lv": 2,
            "time": "~3h",
            "tip": "Design your data so null is rare: non-nullable by default, nullable only where absence is meaningful. A codebase full of String? everywhere has missed the point.",
            "learn": [
              "The type hierarchy: String? is the supertype of String",
              "The compiler as a proof assistant: no null dereference compiles",
              "Designing null out: defaults, sealed types, and empty collections over null"
            ],
            "do": [
              "Model a User where only middleName is nullable and justify each choice",
              "Try to assign null to a non-nullable var and read the error",
              "Refactor a Java-style null-heavy function to minimize nullable types"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: null safety", "https://kotlinlang.org/docs/null-safety.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Safe Calls (?.) & the Elvis Operator (?:)",
            "d": "The two operators that replace 90% of null checks: ?. chains, ?: defaults.",
            "lv": 2,
            "time": "~3h",
            "tip": "a?.b?.c ?: default reads beautifully — but a chain of five safe calls is a code smell. It usually means the data model should make something non-nullable.",
            "learn": [
              "Safe calls: user?.address?.city short-circuits to null",
              "Elvis: providing defaults and early returns (?: return)",
              "Combining: val city = user?.address?.city ?: \"Unknown\""
            ],
            "do": [
              "Safely extract a deeply nested value with a safe-call chain",
              "Use Elvis for early return on invalid input in a function",
              "Replace three nested if-null checks with one safe-call + Elvis expression"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: null safety", "https://kotlinlang.org/docs/null-safety.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "!!, Safe Casts & Smart Casts",
            "d": "The escape hatches — and the compiler intelligence that makes most of them unnecessary.",
            "lv": 2,
            "time": "~3h",
            "tip": "Every !! is a bet that you are smarter than the compiler — and a future NullPointerException with your name on it. Prefer requireNotNull with a message, or restructure.",
            "learn": [
              "!! (not-null assertion): what it compiles to and why it is dangerous",
              "Safe casts (as?) returning null instead of throwing ClassCastException",
              "Smart casts: the compiler tracking is-checks and null checks automatically"
            ],
            "do": [
              "Trigger an NPE with !! deliberately, then fix it with requireNotNull",
              "Use as? to safely handle a heterogeneous list of Any",
              "Watch the IDE auto-cast after an is-check and remove your manual cast"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: null safety", "https://kotlinlang.org/docs/null-safety.html"],
              ["Kotlin: type checks and casts", "https://kotlinlang.org/docs/typecasts.html"]
            ]
          },
          {
            "t": "Java Interop & Platform Types",
            "d": "Where null safety meets Java: platform types and the boundary discipline.",
            "lv": 2,
            "time": "~3h",
            "tip": "Platform types (String!) from Java are Kotlin's blind spot — the compiler trusts you. Wrap Java calls at the boundary: validate once, then work with clean Kotlin types inside.",
            "learn": [
              "Platform types: how Java's String appears as String! in Kotlin",
              "Annotations that help: @NotNull/@Nullable, JSpecify",
              "Calling Kotlin from Java: @JvmOverloads, @JvmStatic, companion objects"
            ],
            "do": [
              "Call a Java method returning String and observe the platform type",
              "Add null checks at the interop boundary and propagate clean types",
              "Expose a Kotlin function with default args to Java using @JvmOverloads"
            ],
            "tools": ["Kotlin", "Java", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: calling Kotlin from Java", "https://kotlinlang.org/docs/java-to-kotlin-interop.html"],
              ["Kotlin: calling Java from Kotlin", "https://kotlinlang.org/docs/java-interop.html"]
            ]
          }
        ]
      },
      {
        "t": "Classes & Objects",
        "d": "Kotlin's object model: concise classes, data classes, sealed hierarchies, and objects.",
        "lv": 2,
        "children": [
          {
            "t": "Classes, Constructors & Properties",
            "d": "Primary constructors in the class header — properties declared, not assigned.",
            "lv": 2,
            "time": "~4h",
            "tip": "Put properties in the primary constructor (class User(val name: String)) — a class whose constructor just assigns fields to properties is Java wearing a Kotlin costume.",
            "learn": [
              "Primary and secondary constructors, init blocks",
              "Properties: val/var, custom getters/setters, backing fields",
              "Lateinit and lazy initialization for deferred setup"
            ],
            "do": [
              "Build a BankAccount class with validation in init",
              "Add a computed property (e.g. fullName) with a custom getter",
              "Use by lazy for an expensive property and prove it initializes once"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: classes", "https://kotlinlang.org/docs/classes.html"],
              ["Kotlin: properties", "https://kotlinlang.org/docs/properties.html"]
            ]
          },
          {
            "t": "Data Classes",
            "d": "One line for equals, hashCode, toString, copy, and destructuring.",
            "lv": 2,
            "time": "~3h",
            "tip": "copy() is how you 'modify' immutable data: user.copy(email = new). Mutating data class fields in place defeats the purpose and breaks hash-based collections.",
            "learn": [
              "What the compiler generates: equals/hashCode/toString/componentN/copy",
              "Destructuring declarations from component functions",
              "Requirements and limits: primary constructor, no inheritance of data-ness"
            ],
            "do": [
              "Create a data class and verify equals/hashCode behavior in a Set",
              "Use copy() to produce modified variants without mutation",
              "Destructure a data class in a for loop over a list of pairs"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: data classes", "https://kotlinlang.org/docs/data-classes.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Inheritance, Interfaces & Abstract Classes",
            "d": "Kotlin's deliberate OOP: classes final by default, explicit open and override.",
            "lv": 2,
            "time": "~4h",
            "tip": "Classes are final by default — this is intentional (design for inheritance or prohibit it). Mark open only when you have actually designed the extension points.",
            "learn": [
              "open classes and override members: explicit inheritance",
              "Interfaces with default implementations and delegation",
              "Abstract classes vs interfaces: state and constructors decide"
            ],
            "do": [
              "Build a Shape hierarchy with an abstract class and two subclasses",
              "Give an interface a default method and override it selectively",
              "Trigger the 'cannot inherit from final class' error, then fix it with open"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: inheritance", "https://kotlinlang.org/docs/inheritance.html"],
              ["Kotlin: interfaces", "https://kotlinlang.org/docs/interfaces.html"]
            ]
          },
          {
            "t": "Sealed Classes & Interfaces",
            "d": "Closed hierarchies the compiler can reason about — exhaustive when without else.",
            "lv": 2,
            "time": "~4h",
            "tip": "Sealed hierarchies are how you model 'one of these known cases' (UI state, API results, payment outcomes). If you find yourself using else to mean 'everything else', a sealed type probably fits better.",
            "learn": [
              "sealed class/interface: restricted subclassing, known at compile time",
              "Exhaustive when over sealed types: no else needed",
              "data object for stateless cases, data class for cases with data"
            ],
            "do": [
              "Model UiState as a sealed interface: Loading, Success(data), Error(message)",
              "Write an exhaustive when over it with no else branch",
              "Add a new subtype and watch the compiler force you to handle it"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: sealed classes", "https://kotlinlang.org/docs/sealed-classes.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Objects, Companion Objects & Singletons",
            "d": "object declarations: singletons, companions, and anonymous objects without ceremony.",
            "lv": 2,
            "time": "~3h",
            "tip": "companion object is not static — it is a real singleton object. That is why you can make it implement interfaces, which Java statics cannot do.",
            "learn": [
              "object declarations: thread-safe singletons in one keyword",
              "companion object: factory methods and constants per class",
              "object expressions: anonymous implementations for one-off listeners"
            ],
            "do": [
              "Implement an AppConfig singleton with an object declaration",
              "Add a companion object factory (User.create(...)) with validation",
              "Use an object expression to implement a callback interface inline"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: object declarations", "https://kotlinlang.org/docs/object-declarations.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Visibility Modifiers",
            "d": "public, private, protected, internal — and Kotlin's module-level internal.",
            "lv": 2,
            "time": "~2h",
            "tip": "internal is module-scoped, not package-scoped — it is Kotlin's answer to 'public API vs implementation detail' for libraries. Use it to hide what consumers should never touch.",
            "learn": [
              "The four modifiers and their exact semantics",
              "internal: visible within the same module (Gradle module)",
              "How internal compiles to Java (public with mangled names)"
            ],
            "do": [
              "Mark implementation helpers internal and try to access them from another module",
              "Design a small library with a minimal public surface and internal guts",
              "Compare private top-level vs internal top-level declarations"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: visibility modifiers", "https://kotlinlang.org/docs/visibility-modifiers.html"],
              ["Kotlin docs", "https://kotlinlang.org/docs/home.html"]
            ]
          },
          {
            "t": "Delegation: by lazy, Delegates & Class Delegation",
            "d": "Composition over inheritance, built into the language with the by keyword.",
            "lv": 3,
            "time": "~4h",
            "tip": "by lazy is thread-safe by default (SYNCHRONIZED mode) — in single-threaded contexts like Android's main thread you can use LazyThreadSafetyMode.NONE, but measure before micro-optimizing.",
            "learn": [
              "by lazy: thread-safe deferred initialization",
              "Delegates.observable/vetoable: reacting to property changes",
              "Class delegation: class MyList(val inner: List<T>) : List<T> by inner"
            ],
            "do": [
              "Implement a cached property with by lazy and verify single initialization",
              "Use Delegates.observable to log every change to a settings property",
              "Build a counting list via class delegation without writing 20 methods"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: delegated properties", "https://kotlinlang.org/docs/delegated-properties.html"],
              ["Kotlin: delegation", "https://kotlinlang.org/docs/delegation.html"]
            ]
          },
          {
            "t": "Generics, Variance & Value Classes",
            "d": "Type parameters done right: in/out variance and zero-cost wrappers.",
            "lv": 3,
            "time": "~4h",
            "tip": "Declaration-site variance (in/out) is Kotlin's big generics win over Java wildcards — List<String> is a List<Any> because List is covariant. Learn the PECS equivalent: producers out, consumers in.",
            "learn": [
              "Generic classes and functions, upper bounds, where clauses",
              "Declaration-site variance: out (covariant) and in (contravariant)",
              "Value classes (@JvmInline): type-safe wrappers without allocation"
            ],
            "do": [
              "Write a generic Box<T> and a copy function using out-projection",
              "Create @JvmInline value class UserId(val raw: String) and use it in APIs",
              "Fix a variance error by choosing in vs out correctly"
            ],
            "tools": ["Kotlin", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: generics", "https://kotlinlang.org/docs/generics.html"],
              ["Kotlin: inline value classes", "https://kotlinlang.org/docs/inline-classes.html"]
            ]
          }
        ]
      },
      {
        "t": "Collections & Data Ops",
        "d": "Kotlin's beloved collection library: read-only vs mutable and 100+ operations.",
        "lv": 2,
        "children": [
          {
            "t": "Lists, Sets & Maps: Read-Only vs Mutable",
            "d": "The read-only/mutable split is Kotlin's quiet revolution in collection design.",
            "lv": 2,
            "time": "~4h",
            "tip": "listOf() returns a READ-ONLY view, not an immutable guarantee — the underlying list could still change. Read-only is a compile-time contract, and that is usually exactly what you want.",
            "learn": [
              "listOf/mutableListOf, setOf/mutableSetOf, mapOf/mutableMapOf",
              "Read-only interfaces vs mutable implementations",
              "Choosing the right collection: ordering, uniqueness, key lookup"
            ],
            "do": [
              "Build the same dataset as List, Set, and Map and compare behaviors",
              "Try to add to a listOf() result and read the compiler error",
              "Expose a MutableList as List from a class to protect internal state"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: collections overview", "https://kotlinlang.org/docs/collections-overview.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Transformations & Filtering",
            "d": "map, filter, flatMap, zip — the functional core you will use every single day.",
            "lv": 2,
            "time": "~4h",
            "tip": "Chain transformations in one pipeline instead of intermediate variables — but break the chain when a step needs a name to stay readable. Idiomatic is readable, not golfed.",
            "learn": [
              "map, filter, flatMap/flatten, zip, associate",
              "Chaining: users.filter { }.map { }.sortedBy { }",
              "partition, take/drop, chunked, windowed for splitting data"
            ],
            "do": [
              "Transform API DTOs to UI models with a map pipeline",
              "Flatten a list of orders into a list of items with flatMap",
              "Build a lookup map with associateBy and query it"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: collection operations", "https://kotlinlang.org/docs/collection-operations.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Grouping, Ordering & Aggregation",
            "d": "groupBy, sortedBy, sumOf, fold — answering questions about your data declaratively.",
            "lv": 2,
            "time": "~3h",
            "tip": "fold is the universal operation — sum, join, and group can all be expressed with it. When no specialized function fits, fold is your escape hatch.",
            "learn": [
              "groupBy for categorization, sortedBy/sortedWith for ordering",
              "Aggregates: sumOf, maxBy, minBy, average, count",
              "fold vs reduce: accumulators with and without initial values"
            ],
            "do": [
              "Group transactions by category and sum each group",
              "Sort users by last name, then first name, with sortedWith",
              "Implement a word-frequency counter with groupingBy().eachCount()"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: collection operations", "https://kotlinlang.org/docs/collection-operations.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Sequences: Lazy Evaluation",
            "d": "When collections get big: lazy sequences that only compute what you consume.",
            "lv": 2,
            "time": "~3h",
            "tip": "Sequence shines with large data and short-circuiting (first, take) — for small lists, eager collections are actually faster. Do not make everything a sequence by default.",
            "learn": [
              "asSequence(): lazy map/filter that fuses into one pass",
              "Intermediate vs terminal operations and short-circuiting",
              "generateSequence for infinite or computed sequences"
            ],
            "do": [
              "Process 1M numbers with list ops vs sequence ops and compare",
              "Use generateSequence to build a Fibonacci sequence, take 10",
              "Find the first match in a huge dataset with asSequence().first { }"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin: sequences", "https://kotlinlang.org/docs/sequences.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          },
          {
            "t": "Stdlib Gems: Destructuring, Ranges & More",
            "d": "The standard library extras that make Kotlin feel like a power tool.",
            "lv": 2,
            "time": "~3h",
            "tip": "repeat(), TODO(), check()/require(), and buildString are tiny functions with outsized impact — learn the stdlib's greatest hits instead of reinventing them.",
            "learn": [
              "Destructuring: val (name, age) = person",
              "repeat, TODO, check/require/error for preconditions",
              "buildString, buildList/buildMap for efficient construction"
            ],
            "do": [
              "Destructure data class instances and map entries in loops",
              "Replace manual StringBuilder code with buildString",
              "Use require() for argument validation with clear messages"
            ],
            "tools": ["Kotlin", "Kotlin Playground"],
            "res": [
              ["Kotlin docs", "https://kotlinlang.org/docs/home.html"],
              ["Kotlin Playground", "https://play.kotlinlang.org/"]
            ]
          }
        ]
      },
      {
        "t": "Coroutines & Async",
        "d": "Structured concurrency done right: suspend functions, dispatchers, and Flow.",
        "lv": 3,
        "children": [
          {
            "t": "Why Coroutines: Threads vs Suspend",
            "d": "Lightweight concurrency without callback hell or thread-pool tuning.",
            "lv": 3,
            "time": "~3h",
            "tip": "A coroutine is not a thread — it is a suspendable computation. Ten thousand coroutines on a handful of threads is normal; ten thousand threads is a crash.",
            "learn": [
              "Blocking (Thread.sleep) vs suspending (delay): what the thread does",
              "Why callbacks and raw threads do not compose, and coroutines do",
              "The mental model: sequential code that suspends instead of blocking"
            ],
            "do": [
              "Launch 100,000 coroutines printing dots and watch it work",
              "Compare Thread.sleep vs delay inside a coroutine for thread usage",
              "Read the coroutines guide intro and diagram launch/async/join"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: coroutines overview", "https://kotlinlang.org/docs/coroutines-overview.html"],
              ["kotlinx.coroutines", "https://github.com/Kotlin/kotlinx.coroutines"]
            ]
          },
          {
            "t": "suspend Functions & Coroutine Builders",
            "d": "The suspend keyword and the builders that start coroutines: launch, async, runBlocking.",
            "lv": 3,
            "time": "~4h",
            "tip": "suspend functions should be main-safe: a suspend function must never block the calling thread. If it does blocking IO, wrap it in withContext(Dispatchers.IO) inside the function itself.",
            "learn": [
              "suspend: functions that can suspend without blocking threads",
              "launch (fire-and-forget Job) vs async (Deferred result)",
              "runBlocking: the bridge for main() and tests — never in production code"
            ],
            "do": [
              "Write a suspend fun fetchUser() using delay to simulate IO",
              "Fetch two users concurrently with async/await and measure the speedup",
              "Convert a callback-based API into a suspend function with suspendCancellableCoroutine"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: coroutines basics", "https://kotlinlang.org/docs/coroutines-basics.html"],
              ["Kotlin: composing suspending functions", "https://kotlinlang.org/docs/composing-suspending-functions.html"]
            ]
          },
          {
            "t": "Dispatchers & CoroutineContext",
            "d": "Where coroutines run: Main, IO, Default — and how context elements compose.",
            "lv": 3,
            "time": "~4h",
            "tip": "Dispatchers.IO is for blocking IO, Dispatchers.Default for CPU work — but the real rule is: library suspend functions pick their own dispatcher internally, so callers do not have to think about it.",
            "learn": [
              "Dispatchers.Main (UI), IO (blocking calls), Default (CPU), Unconfined (testing edge)",
              "CoroutineContext as a set of elements: dispatcher + Job + name + exception handler",
              "withContext: switching dispatchers without callbacks"
            ],
            "do": [
              "Log Thread.currentThread().name across withContext switches",
              "Move a blocking file read into Dispatchers.IO and prove the main thread stays free",
              "Combine contexts with + and inspect the resulting element set"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: coroutine context and dispatchers", "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html"],
              ["kotlinx.coroutines", "https://github.com/Kotlin/kotlinx.coroutines"]
            ]
          },
          {
            "t": "Structured Concurrency: Scopes & Jobs",
            "d": "Coroutines form a hierarchy — children cannot outlive parents, and cancellation propagates.",
            "lv": 3,
            "time": "~4h",
            "tip": "Never use GlobalScope in real code — it creates coroutines with no parent, no lifecycle, and no cancellation. Always launch in a scope tied to a lifecycle (viewModelScope, lifecycleScope, or your own).",
            "learn": [
              "CoroutineScope: the lifecycle owner of coroutines",
              "Parent-child Jobs: cancellation and failure propagation",
              "coroutineScope vs supervisorScope: fail-fast vs isolated children"
            ],
            "do": [
              "Launch children in a coroutineScope and cancel the parent — observe all children die",
              "Compare supervisorScope behavior when one child throws",
              "Build a tiny custom scope with its own Job and cancel it cleanly"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: coroutines basics", "https://kotlinlang.org/docs/coroutines-basics.html"],
              ["Kotlin: coroutine context and dispatchers", "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html"]
            ]
          },
          {
            "t": "Cancellation, Timeouts & Exception Handling",
            "d": "Cooperative cancellation, withTimeout, and where coroutine exceptions actually go.",
            "lv": 3,
            "time": "~4h",
            "tip": "Cancellation is cooperative — a tight compute loop without suspension points ignores cancel(). Check isActive or use yield() in long loops, or your 'cancelled' work runs forever.",
            "learn": [
              "Cooperative cancellation: isActive, ensureActive(), cancellable suspending functions",
              "withTimeout / withTimeoutOrNull for deadlines",
              "Exception propagation: launch vs async, CoroutineExceptionHandler, SupervisorJob"
            ],
            "do": [
              "Cancel a long-running coroutine and verify cleanup in finally",
              "Wrap a slow call in withTimeoutOrNull and handle the null case",
              "Observe the difference when a child of launch vs async throws"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: cancellation and timeouts", "https://kotlinlang.org/docs/cancellation-and-timeouts.html"],
              ["Kotlin: coroutine exceptions handling", "https://kotlinlang.org/docs/exception-handling.html"]
            ]
          },
          {
            "t": "Flow: Cold Asynchronous Streams",
            "d": "Flow is to coroutines what Sequence is to collections — lazy async streams.",
            "lv": 3,
            "time": "~4h",
            "tip": "Flow is cold: nothing runs until collected, and each collector gets its own execution. Sharing one upstream among collectors requires shareIn/stateIn — otherwise you re-run the work per collector.",
            "learn": [
              "flow { emit() }: building streams, intermediate vs terminal operators",
              "Cold semantics: collectors trigger independent executions",
              "flowOn for upstream context, buffer/conflate for backpressure"
            ],
            "do": [
              "Build a flow emitting numbers with delays and collect it twice — observe re-execution",
              "Apply map/filter on a flow and switch its upstream with flowOn",
              "Handle errors with catch and retry with exponential backoff"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: asynchronous flow", "https://kotlinlang.org/docs/flow.html"],
              ["kotlinx.coroutines", "https://github.com/Kotlin/kotlinx.coroutines"]
            ]
          },
          {
            "t": "StateFlow & SharedFlow: Hot State Streams",
            "d": "Hot flows for UI state and events: the standard reactive pattern in modern Kotlin.",
            "lv": 3,
            "time": "~4h",
            "tip": "StateFlow for state (always has a value, conflates), SharedFlow for events (no initial value, configurable replay). Using SharedFlow for UI state loses the current value on rotation — the classic mix-up.",
            "learn": [
              "StateFlow: a hot, conflated, always-valued state holder",
              "SharedFlow: configurable replay and buffering for one-off events",
              "stateIn/shareIn: converting cold flows to hot with SharingStarted policies"
            ],
            "do": [
              "Expose UI state from a class via StateFlow and collect it in a loop",
              "Convert a cold repository flow with stateIn(viewModelScope, WhileSubscribed(5000))",
              "Model one-off events (snackbar) with SharedFlow and handle the replay question"
            ],
            "tools": ["Kotlin", "kotlinx.coroutines"],
            "res": [
              ["Kotlin: StateFlow and SharedFlow", "https://kotlinlang.org/docs/flow.html"],
              ["Kotlin: shared mutable state", "https://kotlinlang.org/docs/shared-mutable-state-and-concurrency.html"]
            ]
          },
          {
            "t": "Testing Coroutines with Turbine",
            "d": "Testing async code deterministically: virtual time and flow assertions.",
            "lv": 3,
            "time": "~3h",
            "tip": "Use runTest with virtual time — delay(1000) completes instantly. Tests using real delays are slow and flaky; virtual time makes them instant and deterministic.",
            "learn": [
              "runTest: the test coroutine scope with a virtual-time scheduler",
              "Turbine: test { awaitItem(), awaitComplete() } for flows",
              "Testing StateFlows: initial value, emissions, and cancellation"
            ],
            "do": [
              "Test a suspend function with runTest and advance virtual time",
              "Write a Turbine test asserting exact flow emissions in order",
              "Test a ViewModel-style class exposing StateFlow with a TestScope"
            ],
            "tools": ["kotlinx-coroutines-test", "Turbine", "JUnit"],
            "res": [
              ["Turbine", "https://github.com/cashapp/turbine"],
              ["kotlinx.coroutines", "https://github.com/Kotlin/kotlinx.coroutines"]
            ]
          }
        ]
      },
      {
        "t": "Ecosystem, Tooling & Platforms",
        "d": "Building real projects: Gradle, serialization, Ktor, and Kotlin Multiplatform basics.",
        "lv": 2,
        "children": [
          {
            "t": "Gradle, Dependencies & the Kotlin DSL",
            "d": "The build system behind every Kotlin project — and writing build scripts in Kotlin itself.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use version catalogs (libs.versions.toml) from the start — hardcoded version strings scattered across build files are how dependency hell begins.",
            "learn": [
              "Gradle basics: projects, tasks, configurations, and the Kotlin plugin",
              "Kotlin DSL (build.gradle.kts): type-safe build scripts with IDE support",
              "Dependencies, version catalogs, and KSP for annotation processing"
            ],
            "do": [
              "Create a Kotlin/JVM project with the Kotlin Gradle plugin",
              "Add a dependency via a version catalog and sync",
              "Write a custom Gradle task in Kotlin DSL that prints project info"
            ],
            "tools": ["Gradle", "IntelliJ IDEA"],
            "res": [
              ["Kotlin: Gradle", "https://kotlinlang.org/docs/gradle.html"],
              ["Kotlin: KSP overview", "https://kotlinlang.org/docs/ksp-overview.html"]
            ]
          },
          {
            "t": "kotlinx.serialization: JSON & Beyond",
            "d": "Compiler-plugin serialization: type-safe JSON without reflection.",
            "lv": 2,
            "time": "~3h",
            "tip": "kotlinx.serialization is compile-time codegen, not reflection — it works on Kotlin/Native and JS where reflection does not exist. That is why it is the multiplatform choice.",
            "learn": [
              "@Serializable, Json.encodeToString/decodeFromString",
              "Custom serializers, naming strategies, and ignoring unknown keys",
              "Polymorphic serialization for sealed hierarchies"
            ],
            "do": [
              "Serialize and deserialize a data class with renamed fields",
              "Handle an API that adds unknown fields (ignoreUnknownKeys)",
              "Serialize a sealed interface hierarchy polymorphically"
            ],
            "tools": ["kotlinx.serialization", "Gradle"],
            "res": [
              ["kotlinx.serialization", "https://github.com/Kotlin/kotlinx.serialization"],
              ["Kotlin: serialization", "https://kotlinlang.org/docs/serialization.html"]
            ]
          },
          {
            "t": "Ktor Client: Networking in Kotlin",
            "d": "The idiomatic Kotlin HTTP client — coroutines-native, multiplatform-ready.",
            "lv": 2,
            "time": "~4h",
            "tip": "Install the ContentNegotiation plugin with kotlinx.serialization once — then client.get(url).body<User>() gives you typed responses with zero manual parsing.",
            "learn": [
              "HttpClient with engine selection (CIO, OkHttp, Darwin)",
              "Plugins: ContentNegotiation, Logging, Auth, HttpTimeout",
              "Typed requests/responses integrated with coroutines"
            ],
            "do": [
              "Build a Ktor client fetching JSON from a public API into data classes",
              "Add logging and timeout plugins, then read the wire logs",
              "Implement bearer auth with automatic token refresh"
            ],
            "tools": ["Ktor", "kotlinx.serialization"],
            "res": [
              ["Ktor docs", "https://ktor.io/docs/"],
              ["kotlinx.serialization", "https://github.com/Kotlin/kotlinx.serialization"]
            ]
          },
          {
            "t": "Kotlin Multiplatform: expect/actual & Source Sets",
            "d": "Share business logic across Android, iOS, desktop, and web from one codebase.",
            "lv": 3,
            "time": "~1d",
            "tip": "Common by default, platform by exception — push everything possible into commonMain. Every expect/actual pair is a maintenance cost you should be able to justify.",
            "learn": [
              "KMP project structure: commonMain, androidMain, iosMain source sets",
              "expect/actual: declaring common APIs with platform implementations",
              "What shares well (logic, networking, storage) vs what does not (UI without Compose)"
            ],
            "do": [
              "Create a KMP project with the official wizard",
              "Write a shared repository in commonMain using Ktor",
              "Add an expect/actual pair for a platform-specific API (e.g. device info)"
            ],
            "tools": ["Kotlin Multiplatform", "IntelliJ IDEA", "Android Studio"],
            "res": [
              ["Kotlin Multiplatform: get started", "https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html"],
              ["Kotlin Multiplatform docs", "https://kotlinlang.org/docs/multiplatform.html"]
            ]
          },
          {
            "t": "Compose Multiplatform Basics",
            "d": "One declarative UI framework across Android, iOS, and desktop — the KMP UI story.",
            "lv": 3,
            "time": "~1d",
            "tip": "On Android, Compose Multiplatform IS Jetpack Compose — your Jetpack knowledge transfers directly. The differences live in the iOS/desktop targets and the common UI code.",
            "learn": [
              "@Composable, state hoisting, and Material3 in common code",
              "What is shared vs platform-specific in CMP apps",
              "Current platform maturity: Android/desktop solid, iOS stable, web in beta"
            ],
            "do": [
              "Build a common @Composable screen running on Android and desktop",
              "Hoist state correctly and preview with @Preview",
              "Add a platform-specific touch (e.g. iOS haptics) via expect/actual"
            ],
            "tools": ["Compose Multiplatform", "IntelliJ IDEA"],
            "res": [
              ["Compose Multiplatform", "https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform.html"],
              ["Kotlin Multiplatform: get started", "https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html"]
            ],
            "tag": "opt"
          },
          {
            "t": "Dokka, KDoc & Publishing Libraries",
            "d": "Document like a library author and publish to Maven Central.",
            "lv": 2,
            "time": "~3h",
            "tip": "Write KDoc on public APIs as you write the API — retrofitting docs onto a finished library never happens. Dokka turns good KDoc into a real documentation site.",
            "learn": [
              "KDoc syntax: documenting parameters, returns, and samples",
              "Dokka: generating HTML/Javadoc documentation from KDoc",
              "Publishing: Maven Central, versioning, and explicit API mode"
            ],
            "do": [
              "Document a small library's public API with KDoc including a sample",
              "Generate the Dokka HTML site and review it as a consumer would",
              "Enable explicit API mode and fix every violation it reports"
            ],
            "tools": ["Dokka", "Gradle"],
            "res": [
              ["Dokka introduction", "https://kotlinlang.org/docs/dokka-introduction.html"],
              ["Dokka on GitHub", "https://github.com/Kotlin/dokka"]
            ]
          },
          {
            "t": "Capstone: Multiplatform Library + CLI",
            "d": "Prove it: a tested KMP library with a JVM CLI on top.",
            "lv": 3,
            "time": "~2w",
            "tip": "Scope to something genuinely shareable (a parser, a calculator engine, a data validator) — the point is proving the shared-code model, not building an app.",
            "learn": [
              "Designing a clean common API with expect/actual at the edges",
              "Coroutines + Flow + serialization wired through shared code",
              "Testing shared code once and trusting it on all platforms"
            ],
            "do": [
              "Build a KMP library (e.g. a Markdown-to-text engine) with Ktor + serialization",
              "Add Turbine tests for its flows and run them on JVM",
              "Ship a JVM CLI using the library and publish the library to Maven Local"
            ],
            "tools": ["Kotlin Multiplatform", "Ktor", "kotlinx.serialization", "Turbine", "Gradle"],
            "res": [
              ["Kotlin Multiplatform: get started", "https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html"],
              ["kotlinx.coroutines", "https://github.com/Kotlin/kotlinx.coroutines"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
