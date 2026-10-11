/* Atlas roadmap data: Java (java)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "java",
  "title": "Java",
  "icon": "☕",
  "color": "#1d4ed8",
  "tagline": "Write once, run anywhere — at enterprise scale.",
  "desc": "Java from first class to production: the language, the JVM, collections, concurrency with virtual threads, build tools, and Spring Boot.",
  "kind": "skill",
  "root": {
    "t": "Java",
    "d": "From your first class to Spring Boot services: language, JVM, concurrency, and tooling.",
    "children": [
      {
        "t": "Java Foundations",
        "d": "The JVM story, your first program, and the core syntax every Java dev uses daily.",
        "lv": 1,
        "children": [
          {
            "t": "Why Java & the JVM Story",
            "d": "Write once, run anywhere: bytecode, the JVM, and where Java dominates today.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "javac compiles source to bytecode; the JVM executes it — portability comes from this indirection",
              "The JVM is a managed runtime: garbage collection, JIT compilation, and a rich standard library",
              "Where Java wins: enterprise backends, Android (Kotlin's sibling), big data, financial systems"
            ],
            "do": [
              "Read the dev.java language overview and note how Java differs from Python/JS runtimes",
              "List three systems you use daily that run on the JVM",
              "Explain in your own words why 'write once, run anywhere' mattered in the 90s and still matters now"
            ],
            "tools": ["roadmap.sh"],
            "res": [
              ["dev.java — Learn", "https://dev.java/learn/"],
              ["Java Roadmap", "https://roadmap.sh/java"]
            ],
            "tip": "Java's reputation for verbosity is outdated. Records, var, and compact source files (Java 25) removed most of the ceremony."
          },
          {
            "t": "Setup: JDK & First Program",
            "d": "Install a JDK (Temurin 25 LTS), compile with javac, run with java.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "JDK vs JRE: you need the JDK (compiler + tools); the JRE alone cannot compile",
              "LTS versions (21, 25) are the safe choices; vendors like Temurin, Corretto, and Oracle all ship OpenJDK builds",
              "The ritual: `javac Main.java` produces Main.class, `java Main` runs it on the JVM"
            ],
            "do": [
              "Install Eclipse Temurin 25 LTS and verify with `java -version` and `javac -version`",
              "Write, compile, and run a Hello World from the terminal — no IDE yet",
              "Try Java 25's compact source file style: `void main() { IO.println(\"hi\"); }` with no class wrapper"
            ],
            "tools": ["Eclipse Temurin", "javac", "java"],
            "res": [
              ["Eclipse Temurin downloads", "https://adoptium.net/temurin/releases/"],
              ["dev.java — Getting Started", "https://dev.java/learn/getting-started/"]
            ],
            "tip": "Set JAVA_HOME once and put it on your PATH. Half of all 'Java is broken' problems are environment variables."
          },
          {
            "t": "Syntax, Variables & Data Types",
            "d": "Primitives vs objects, var, and why Java is statically typed without being painful.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Primitives (int, long, double, boolean...) live by value; objects live by reference on the heap",
              "var infers local types (`var name = \"Ada\";`) — the type is still static, just not spelled out",
              "Widening conversions are automatic; narrowing needs an explicit cast and can lose data"
            ],
            "do": [
              "Write a program using every primitive type and print their ranges via wrapper-class constants",
              "Demonstrate the difference: modify an int parameter vs mutate an array parameter in a method",
              "Convert a verbose program to use var for locals and confirm identical behavior"
            ],
            "tools": ["javac", "IntelliJ IDEA"],
            "res": [
              ["dev.java — Language Basics", "https://dev.java/learn/language-basics/"],
              ["Java Tutorials: Variables", "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html"]
            ],
            "tip": "Use var for locals with obvious types, spell it out when the type carries meaning. Readability beats brevity."
          },
          {
            "t": "Operators & Control Flow",
            "d": "Branches, loops, and switch expressions — including the modern arrow syntax.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "if/else, for, enhanced for-each, while, do-while — plus break/continue with optional labels",
              "Modern switch expressions (`var x = switch(v) { case 1 -> \"one\"; ... }`) return values exhaustively",
              "String and pattern-matching switch (modern Java) make switches genuinely pleasant"
            ],
            "do": [
              "Solve FizzBuzz with an enhanced for loop over an array",
              "Rewrite an old-style switch statement as a switch expression with arrow cases",
              "Build a menu program where switch expressions map choices to actions"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Control Flow", "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html"],
              ["dev.java — Language Basics", "https://dev.java/learn/language-basics/"]
            ],
            "tip": "Switch expressions must be exhaustive — the compiler forces you to handle every case, which deletes a bug class."
          },
          {
            "t": "Arrays",
            "d": "Fixed-size, bounds-checked arrays: declaration, iteration, and multidimensional forms.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Arrays are objects with fixed length: `int[] a = new int[5];` — length never changes",
              "The JVM checks every access: out-of-bounds throws ArrayIndexOutOfBoundsException instead of corrupting memory",
              "Multidimensional arrays are arrays of arrays — rows can have different lengths"
            ],
            "do": [
              "Write array utilities: reverse, find max, rotate — all with enhanced for where possible",
              "Deliberately index past the end and read the exception; then add proper bounds handling",
              "Build a multiplication table as a 2D array and print it formatted"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Arrays", "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"]
            ],
            "tip": "For most real code you will use ArrayList, not arrays. Learn arrays first because collections are built on them."
          },
          {
            "t": "Methods & Parameter Passing",
            "d": "Define methods, overload them, and understand Java's pass-by-value-of-reference.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Java is strictly pass-by-value — but for objects, the value passed is the reference",
              "Method overloading: same name, different signatures; the compiler picks the most specific match",
              "static methods belong to the class; instance methods belong to objects and see `this`"
            ],
            "do": [
              "Write a method that tries to reassign an object parameter vs one that mutates it; observe the difference",
              "Overload a describe method for String, int, and double",
              "Build a small MathUtils class with static helpers and use it from main"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Methods", "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html"],
              ["dev.java — Language Basics", "https://dev.java/learn/language-basics/"]
            ],
            "tip": "'Java passes objects by reference' is the most repeated falsehood in Java teaching. It passes references by value."
          }
        ]
      },
      {
        "t": "Object-Oriented Java",
        "d": "Classes, inheritance, interfaces, and modern data carriers: OOP the Java way.",
        "lv": 2,
        "children": [
          {
            "t": "Classes & Objects",
            "d": "Fields, constructors, and the anatomy of a well-designed class.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "A class is a blueprint; objects are instances — `new` allocates and runs the constructor",
              "Constructors initialize state; overload them or chain with this(...) for convenience variants",
              "The `this` reference disambiguates fields from parameters with the same name"
            ],
            "do": [
              "Design a Book class: fields, two constructors, getters, and a toString",
              "Create an array of Books and print them with an enhanced for loop",
              "Add validation in the constructor (no negative page counts) throwing IllegalArgumentException"
            ],
            "tools": ["javac", "IntelliJ IDEA"],
            "res": [
              ["Java Tutorials: Classes", "https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html"],
              ["dev.java — OOP", "https://dev.java/learn/oop/"]
            ],
            "tip": "A constructor that leaves an object in an invalid state is a bug factory. Validate or throw — never half-build."
          },
          {
            "t": "Encapsulation & Access Modifiers",
            "d": "private, protected, public: hide state, expose behavior, protect invariants.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "private fields + public getters/setters let the class enforce its own rules",
              "Package-private (no modifier) and protected widen visibility deliberately — default to private",
              "Immutability: final fields set once in the constructor make objects thread-safe by construction"
            ],
            "do": [
              "Refactor a class with public fields to private with validated setters",
              "Make an immutable Point record-style class with final fields and no setters",
              "Try accessing a private field from another class and read the compiler error"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Access Modifiers", "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html"]
            ],
            "tip": "Every public setter is a promise you must keep forever. Fewer setters means fewer promises to break."
          },
          {
            "t": "Inheritance",
            "d": "extends, super, and the is-a relationship — used sparingly and correctly.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "extends creates a subclass inheriting accessible members; super calls the parent constructor or method",
              "Java has single class inheritance — a class extends exactly one parent",
              "Inheritance breaks encapsulation (fragile base class); prefer it for true is-a hierarchies"
            ],
            "do": [
              "Build Animal → Dog/Cat hierarchy with shared behavior in the parent",
              "Override a method, call super.method() inside, and trace the execution order",
              "Refactor one hierarchy to composition and compare which reads better"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Inheritance", "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"]
            ],
            "tip": "Design classes for inheritance or prohibit it (final). Half-designed inheritance is how frameworks become unmaintainable."
          },
          {
            "t": "Polymorphism: Overriding & Dynamic Dispatch",
            "d": "One interface, many behaviors: how the JVM picks the right method at runtime.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "@Override methods dispatch dynamically: the runtime type decides, not the reference type",
              "The @Override annotation turns signature typos into compile errors — always use it",
              "Polymorphic collections (List<Animal> holding Dogs and Cats) are where OOP pays off"
            ],
            "do": [
              "Store mixed subclasses in a List<Animal> and call an overridden method on each",
              "Remove @Override, introduce a parameter-type typo, and watch the silent overload bug appear",
              "Restore @Override and confirm the compiler catches it"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Polymorphism", "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html"]
            ],
            "tip": "static methods do not override — they hide. Calling a 'overridden' static method uses the reference type, not the object type."
          },
          {
            "t": "Abstract Classes & Interfaces",
            "d": "Contracts without implementation: when to use each and how they evolved.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Abstract classes can hold state and concrete methods; interfaces define pure contracts (plus default methods since Java 8)",
              "A class implements many interfaces but extends one abstract class — interfaces are the flexible tool",
              "Default methods let interfaces evolve without breaking implementers; functional interfaces enable lambdas"
            ],
            "do": [
              "Design a Payable interface with default and static helper methods",
              "Implement it in Employee and Contractor classes with different logic",
              "Build an abstract Vehicle with shared state plus abstract drive(), then concrete subclasses"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Interfaces", "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"],
              ["Java Tutorials: Abstract", "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"]
            ],
            "tip": "Program to interfaces (List, Map), not implementations (ArrayList, HashMap). Your future self will swap implementations freely."
          },
          {
            "t": "Records, Enums & Sealed Classes",
            "d": "Modern Java's data carriers: compact, immutable, and exhaustively switchable.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "record Point(int x, int y) generates constructor, accessors, equals, hashCode, toString automatically",
              "Enums are full classes: fields, constructors, methods — ideal for fixed sets like days or states",
              "Sealed classes restrict which classes may extend them; pattern-matching switch stays exhaustive"
            ],
            "do": [
              "Replace a verbose POJO with a record and delete 40 lines",
              "Build an enum with fields and behavior (e.g., Planet with mass and radius)",
              "Create a sealed Shape hierarchy and write an exhaustive pattern-matching switch over it"
            ],
            "tools": ["javac"],
            "res": [
              ["dev.java — Records", "https://dev.java/learn/records/"],
              ["Java Tutorials: Enums", "https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html"]
            ],
            "tip": "If your class is just data with no behavior, it wants to be a record. Boilerplate POJOs are a code smell in modern Java."
          }
        ]
      },
      {
        "t": "Essential Language Features",
        "d": "Strings, exceptions, generics, dates, and I/O — the APIs in every Java program.",
        "lv": 2,
        "children": [
          {
            "t": "Strings & Text",
            "d": "Immutability, StringBuilder, formatting, and text blocks for multiline strings.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "String is immutable: concatenation in a loop creates garbage — use StringBuilder",
              "Text blocks (\"\"\"...\"\"\") write JSON, SQL, and HTML without escape-character soup",
              "String.formatted / String.format give printf-style formatting; regex lives in java.util.regex"
            ],
            "do": [
              "Benchmark string concatenation in a loop vs StringBuilder for 100k appends",
              "Write a SQL query as a text block and as an escaped string; compare readability",
              "Validate emails with a regex Pattern and extract groups with a Matcher"
            ],
            "tools": ["javac", "JMH"],
            "res": [
              ["Java Tutorials: Strings", "https://docs.oracle.com/javase/tutorial/java/data/strings.html"],
              ["dev.java — Text Blocks", "https://dev.java/learn/text-blocks/"]
            ],
            "tip": "Never compare strings with ==. It compares references. .equals() compares content — this bites every beginner once."
          },
          {
            "t": "Exception Handling",
            "d": "Checked vs unchecked, try-with-resources, and designing your own exceptions.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Checked exceptions (IOException) must be handled or declared; unchecked (NullPointerException) signal bugs",
              "try-with-resources auto-closes anything implementing AutoCloseable — no more finally blocks",
              "Catch specific exceptions first; never swallow with an empty catch block"
            ],
            "do": [
              "Read a file with try-with-resources handling FileNotFoundException and IOException separately",
              "Create a custom InsufficientFundsException and throw it from a withdraw method",
              "Find an empty catch block in a sample project and fix it with proper logging"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Exceptions", "https://docs.oracle.com/javase/tutorial/essential/exceptions/"]
            ],
            "tip": "Exceptions are for exceptional conditions, not control flow. If you catch it in the same method you threw it, rethink."
          },
          {
            "t": "Generics",
            "d": "Type-safe containers without casts: type parameters, bounds, and wildcards.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Generics move type errors from runtime (ClassCastException) to compile time",
              "Type erasure: List<String> is List at runtime — no primitives as type arguments, use wrappers",
              "PECS: Producer Extends, Consumer Super — wildcards make APIs flexible without losing safety"
            ],
            "do": [
              "Write a generic Box<T> and a generic max method with a Comparable bound",
              "Write copy(List<? extends Number>, List<? super Number>) applying PECS",
              "Try to create new T[] inside a generic class and learn why erasure forbids it"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Generics", "https://docs.oracle.com/javase/tutorial/java/generics/"],
              ["dev.java — Generics", "https://dev.java/learn/generics/"]
            ],
            "tip": "Unchecked warnings are the compiler telling you erasure is hiding something. Suppress them only with proof, never by habit."
          },
          {
            "t": "Date & Time (java.time)",
            "d": "The modern date API: immutable, timezone-aware, and actually correct.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "java.time replaced the broken Date/Calendar: LocalDate, LocalTime, ZonedDateTime, Instant",
              "All java.time types are immutable and thread-safe — operations return new instances",
              "Instant is for machine timestamps, ZonedDateTime for human wall-clock times"
            ],
            "do": [
              "Parse an ISO date string, add 90 days, and format it for display",
              "Convert a meeting time between Brussels and Lahore time zones",
              "Measure elapsed time with Instant/Duration instead of System.currentTimeMillis math"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Date Time", "https://docs.oracle.com/javase/tutorial/datetime/"]
            ],
            "tip": "Never use java.util.Date or Calendar in new code. They are mutable, confusing, and officially legacy."
          },
          {
            "t": "File I/O & NIO.2",
            "d": "Read and write files the modern way: Path, Files, and streams of lines.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "java.nio.file: Path abstracts locations; Files gives one-liner read/write/copy operations",
              "Files.lines gives a Stream<String> over a file — lazy, closable, perfect for big files",
              "Always specify Charsets.UTF_8 explicitly; the platform default charset is a portability trap"
            ],
            "do": [
              "Write a file-copy utility with Files.copy and proper exception handling",
              "Process a 1GB log file with Files.lines + stream operations without loading it all",
              "Walk a directory tree with Files.walk and find the ten largest files"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: NIO.2", "https://docs.oracle.com/javase/tutorial/essential/io/fileio.html"]
            ],
            "tip": "Files.readString/writeString handle the common cases in one line. Reach for streams and channels only when they do not."
          }
        ]
      },
      {
        "t": "Collections Framework",
        "d": "List, Set, Map, Queue: the data structures behind nearly every Java program.",
        "lv": 2,
        "children": [
          {
            "t": "List: ArrayList & LinkedList",
            "d": "Ordered collections: when ArrayList wins and the rare case for LinkedList.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "ArrayList: array-backed, O(1) random access, amortized O(1) append — the default list",
              "LinkedList: O(1) insertion at ends via deque operations, but slow indexed access",
              "Program to the List interface so the implementation can change in one line"
            ],
            "do": [
              "Benchmark random access and middle insertion on both list types with 1M elements",
              "Implement a simple undo history with ArrayList",
              "Use List.of for fixed lists and note that they are immutable"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: List", "https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html"],
              ["dev.java — Collections", "https://dev.java/learn/collections/"]
            ],
            "tip": "LinkedList is almost never the answer. ArrayList wins on cache locality for everything except heavy middle insertion."
          },
          {
            "t": "Set: HashSet, TreeSet & Friends",
            "d": "Unique elements with fast lookup: hashing vs ordering.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "HashSet: O(1) add/contains via hashing — requires correct equals/hashCode on your objects",
              "TreeSet: sorted, O(log n), needs Comparable or a Comparator",
              "The equals/hashCode contract: equal objects must hash equally, or sets and maps silently break"
            ],
            "do": [
              "Put custom objects in a HashSet without hashCode, observe duplicates, then fix it",
              "Build a TreeSet with a Comparator sorting by multiple fields",
              "Use a Set to deduplicate a list and to test membership in a hot loop"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Set", "https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html"]
            ],
            "tip": "If you override equals, override hashCode. IDEs generate both together — accept the offer every time."
          },
          {
            "t": "Map: HashMap, TreeMap & ConcurrentHashMap",
            "d": "Key-value storage: the most-used collection in Java, done right.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "HashMap: O(1) average get/put; null key and values allowed; not thread-safe",
              "computeIfAbsent, merge, and getOrDefault replace verbose containsKey-then-put patterns",
              "ConcurrentHashMap for shared maps across threads — never synchronize a HashMap by hand"
            ],
            "do": [
              "Build a word-frequency counter with merge() in five lines",
              "Implement a memoization cache with computeIfAbsent",
              "Share a map across threads with HashMap (watch it break) then ConcurrentHashMap (watch it work)"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Map", "https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html"],
              ["ConcurrentHashMap Javadoc", "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"]
            ],
            "tip": "Iterating a map? Use entrySet(), not keySet() + get(). The latter does two hash lookups per entry for no reason."
          },
          {
            "t": "Queue, Deque & Iteration",
            "d": "FIFO, stacks, and priority queues — plus iterators and fail-fast behavior.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Queue (FIFO) and Deque (both ends): ArrayDeque is the modern stack and queue",
              "PriorityQueue orders by comparator — ideal for schedulers and top-K problems",
              "Iterators are fail-fast: structural modification during iteration throws ConcurrentModificationException"
            ],
            "do": [
              "Implement BFS over a graph using ArrayDeque as the queue",
              "Build a task scheduler with PriorityQueue ordered by deadline",
              "Trigger ConcurrentModificationException by removing in a for-each, then fix with Iterator.remove or removeIf"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Queue", "https://docs.oracle.com/javase/tutorial/collections/interfaces/queue.html"]
            ],
            "tip": "Never use the legacy Stack class — ArrayDeque as a Deque does the job faster with a cleaner API."
          }
        ]
      },
      {
        "t": "Functional Java & Streams",
        "d": "Lambdas, method references, and the Stream API: declarative data processing.",
        "lv": 2,
        "children": [
          {
            "t": "Lambdas & Functional Interfaces",
            "d": "Pass behavior as data: the syntax and the interfaces behind it.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "A lambda implements a functional interface (one abstract method): Predicate, Function, Consumer, Supplier",
              "Effectively-final capture: lambdas can read but not reassign local variables",
              "Method references (String::length, System.out::println) are lambdas in compact form"
            ],
            "do": [
              "Sort a list with a lambda comparator, then with Comparator.comparing",
              "Rewrite anonymous inner classes as lambdas in a sample GUI-style codebase",
              "Build a tiny event system using Consumer<String> listeners"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Lambdas", "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"],
              ["dev.java — Lambdas", "https://dev.java/learn/lambdas/"]
            ],
            "tip": "Keep lambdas short. If it needs more than a few lines, give it a name — a private method beats a 20-line lambda."
          },
          {
            "t": "Stream API",
            "d": "filter, map, collect: pipelines that replace most loops.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Streams are lazy pipelines: intermediate ops (filter, map) do nothing until a terminal op (collect, forEach)",
              "Collectors group, partition, and summarize: groupingBy is a one-liner report generator",
              "Streams are not collections: single-use, and parallel() is opt-in with ordering caveats"
            ],
            "do": [
              "Rewrite five loops as stream pipelines over a list of orders (filter/map/reduce)",
              "Group employees by department and compute average salary per group with collectors",
              "Debug a pipeline with peek() to see elements flowing through each stage"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Streams", "https://docs.oracle.com/javase/tutorial/collections/streams/"],
              ["dev.java — Streams", "https://dev.java/learn/streams/"]
            ],
            "tip": "Do not use parallel() by default. It only helps CPU-bound work on large datasets and can be slower otherwise — measure."
          },
          {
            "t": "Optional: Say Goodbye to null",
            "d": "Model absence explicitly so NullPointerException stops being a surprise.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Optional<T> is a container that is either present or empty — a return type, not a field type",
              "map/flatMap/orElse chain optionals without nested null checks",
              "Never call .get() without isPresent(); orElseThrow with a message beats NoSuchElementException"
            ],
            "do": [
              "Refactor a method returning null-on-missing to return Optional and update callers",
              "Chain two lookups (user → address → city) with flatMap in one expression",
              "Find a .get()-without-check in sample code and replace it with orElseThrow"
            ],
            "tools": ["javac"],
            "res": [
              ["Optional Javadoc", "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Optional.html"],
              ["dev.java — Optionals", "https://dev.java/learn/optionals/"]
            ],
            "tip": "Optional as a method parameter or field is an anti-pattern. It is designed for return values — use it there."
          }
        ]
      },
      {
        "t": "Concurrency",
        "d": "Threads, executors, and virtual threads: Java's world-class concurrency story.",
        "lv": 3,
        "children": [
          {
            "t": "Threads & the Runnable Model",
            "d": "Create threads, share data safely, and see the race conditions yourself.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Thread vs Runnable: implement Runnable and hand it to a Thread or an executor",
              "Shared mutable state without synchronization produces data races — wrong results, not just crashes",
              "Thread lifecycle: start() begins execution; join() waits for completion"
            ],
            "do": [
              "Increment a counter from 8 threads with no synchronization; watch the total come out wrong",
              "Fix it with synchronized, then with AtomicInteger, and compare",
              "Write a program that starts threads, joins them, and aggregates results"
            ],
            "tools": ["javac", "JConsole"],
            "res": [
              ["Java Tutorials: Concurrency", "https://docs.oracle.com/javase/tutorial/essential/concurrency/"]
            ],
            "tip": "Do not create raw Threads in application code. Executors manage the pool — raw threads are a resource leak waiting to happen."
          },
          {
            "t": "synchronized, Locks & Coordination",
            "d": "Mutual exclusion and thread coordination: from synchronized to Lock and Condition.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "synchronized blocks use intrinsic locks; keep critical sections tiny to preserve throughput",
              "java.util.concurrent.locks.Lock adds tryLock with timeout and interruptible acquisition",
              "wait/notify and Condition coordinate threads; always wait in a loop guarding the condition"
            ],
            "do": [
              "Build a bounded buffer with synchronized + wait/notify",
              "Rebuild it with ReentrantLock + Condition and compare clarity",
              "Create a deadlock with two locks in opposite order, then fix the lock ordering"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Synchronization", "https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html"],
              ["java.util.concurrent docs", "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html"]
            ],
            "tip": "Hold locks in a globally consistent order. Deadlocks come from lock A→B in one place and B→A in another."
          },
          {
            "t": "Executors, Futures & CompletableFuture",
            "d": "Thread pools and async composition: the right way to run background work.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "ExecutorService manages a thread pool; submit tasks instead of managing threads yourself",
              "Future represents a pending result; CompletableFuture chains async stages without blocking",
              "Always shut down executors — a running pool keeps the JVM alive forever"
            ],
            "do": [
              "Parallelize file downloads with a fixed thread pool and collect Futures",
              "Chain dependent async calls with CompletableFuture.thenApply/thenCompose",
              "Handle an async failure with exceptionally and provide a fallback value"
            ],
            "tools": ["javac"],
            "res": [
              ["Java Tutorials: Executors", "https://docs.oracle.com/javase/tutorial/essential/concurrency/executors.html"],
              ["CompletableFuture Javadoc", "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/CompletableFuture.html"]
            ],
            "tip": "An ExecutorService you never shut down is a memory and thread leak. Use try-with-resources — it extends AutoCloseable."
          },
          {
            "t": "Virtual Threads (Java 21+)",
            "d": "A million threads: lightweight concurrency that rewrites the scalability playbook.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Virtual threads are JVM-managed and cheap — blocking one does not block an OS thread",
              "Thread.ofVirtual().start() or Executors.newVirtualThreadPerTaskExecutor(): familiar APIs, new scale",
              "Write straightforward blocking code; the platform makes it scale — no reactive gymnastics needed"
            ],
            "do": [
              "Launch 100,000 virtual threads doing blocking sleep; compare with platform threads",
              "Rewrite an executor-based server handler to use a virtual-thread-per-task executor",
              "Measure throughput of a blocking I/O workload before and after the switch"
            ],
            "tools": ["javac", "Eclipse Temurin 25"],
            "res": [
              ["Virtual Threads (JEP 444)", "https://openjdk.org/jeps/444"],
              ["dev.java — Virtual Threads", "https://dev.java/learn/virtual-threads/"]
            ],
            "tip": "Do not pool virtual threads — they are cheap enough to create per task. Pooling them reintroduces the complexity they remove."
          },
          {
            "t": "Java Memory Model Essentials",
            "d": "volatile, happens-before, and safe publication: the rules behind correct concurrency.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The JMM defines when one thread's writes become visible to another — without synchronization, never assume",
              "volatile gives visibility (not atomicity): perfect for flags, wrong for counters",
              "Safe publication: final fields, volatile, locks, and concurrent collections publish objects safely"
            ],
            "do": [
              "Write a stop-flag loop that never stops without volatile, then fix it",
              "Demonstrate the double-checked locking bug and its volatile fix",
              "Audit a small concurrent program for safe publication of shared objects"
            ],
            "tools": ["javac", "jcstress"],
            "res": [
              ["Java Tutorials: Memory Consistency", "https://docs.oracle.com/javase/tutorial/essential/concurrency/memconsist.html"],
              ["jcstress", "https://github.com/openjdk/jcstress"]
            ],
            "tip": "If you cannot explain the happens-before edge that makes your code correct, it is probably broken under load.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "JVM, Build Tools & Testing",
        "d": "How the JVM runs your code, Maven/Gradle builds, and testing with JUnit and Mockito.",
        "lv": 3,
        "children": [
          {
            "t": "Inside the JVM",
            "d": "Class loading, bytecode, and the JIT: what happens between javac and running code.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Class loaders load bytecode on demand; javap disassembles .class files into readable bytecode",
              "The JIT compiles hot bytecode to native code at runtime — warm up before benchmarking",
              "Heap, stack, metaspace: where objects, frames, and class metadata live"
            ],
            "do": [
              "Disassemble your own class with `javap -c` and read the bytecode of a simple method",
              "Run a microbenchmark cold vs warmed-up to see the JIT kick in",
              "Trigger and read a heap dump with jmap, then inspect it in VisualVM"
            ],
            "tools": ["javap", "jmap", "VisualVM", "JMH"],
            "res": [
              ["JVM Specification", "https://docs.oracle.com/javase/specs/jvms/se25/html/"],
              ["dev.java — JVM Internals", "https://dev.java/learn/jvm-internals/"]
            ],
            "tip": "Never benchmark Java without warmup. The first thousand iterations run interpreted; the millionth runs optimized machine code."
          },
          {
            "t": "Garbage Collection Basics",
            "d": "Generational GC, choosing a collector, and reading GC logs.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Generational hypothesis: most objects die young — eden, survivor, and old generations exploit this",
              "G1 (default) balances throughput and latency; ZGC/Shenandoah target sub-millisecond pauses",
              "GC logs (-Xlog:gc) show pause times and promotion rates — the first place to look for latency issues"
            ],
            "do": [
              "Run a program with -Xlog:gc and identify young vs old generation collections",
              "Create a memory leak (static list growing forever) and watch old-gen fill in VisualVM",
              "Switch between G1 and ZGC flags and compare pause times on an allocation-heavy workload"
            ],
            "tools": ["VisualVM", "Eclipse Temurin"],
            "res": [
              ["HotSpot GC documentation", "https://docs.oracle.com/en/java/javase/25/gctuning/"],
              ["dev.java — GC", "https://dev.java/learn/garbage-collection/"]
            ],
            "tip": "Do not call System.gc() to 'help'. It triggers a full collection and usually makes latency worse, not better."
          },
          {
            "t": "Maven",
            "d": "The standard Java build: POM, lifecycle, dependencies, and plugins.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "The POM declares coordinates, dependencies, and plugins; conventions (src/main/java) beat configuration",
              "Lifecycle phases: validate → compile → test → package → verify → install → deploy",
              "Dependency scopes (compile, test, provided) and transitive resolution — plus the wrapper (mvnw)"
            ],
            "do": [
              "Scaffold a project, add a dependency, and run `mvnw test package`",
              "Inspect the dependency tree with `mvnw dependency:tree` and resolve a version conflict",
              "Configure the compiler release to 25 and add a plugin (e.g., surefire already included)"
            ],
            "tools": ["Maven", "Maven Wrapper"],
            "res": [
              ["Maven — Getting Started", "https://maven.apache.org/guides/getting-started/"],
              ["Maven in 5 Minutes", "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"]
            ],
            "tip": "Commit the Maven wrapper (mvnw). 'Works on my machine' dies when everyone builds with the same Maven version."
          },
          {
            "t": "Gradle",
            "d": "The flexible alternative: Kotlin DSL builds, tasks, and why Android chose it.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Gradle builds are code (Kotlin DSL preferred): plugins, dependencies, tasks",
              "Incremental builds and the build cache make Gradle fast on large projects",
              "The wrapper (gradlew) pins the Gradle version — same reproducibility story as Maven"
            ],
            "do": [
              "Create a Gradle project with `gradle init`, add dependencies, run `./gradlew test`",
              "Write a custom task that generates a version file before compilation",
              "Convert your Maven project to Gradle and compare the build scripts"
            ],
            "tools": ["Gradle", "Gradle Wrapper"],
            "res": [
              ["Gradle User Manual", "https://docs.gradle.org/"],
              ["Gradle Getting Started", "https://docs.gradle.org/current/userguide/getting_started.html"]
            ],
            "tip": "Learn one build tool deeply (Maven for enterprise, Gradle for Android/modern). Skim the other — you will read both in the wild."
          },
          {
            "t": "Testing: JUnit 5 & Mockito",
            "d": "Unit tests that earn trust: assertions, lifecycle, parameterized tests, and mocking.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "JUnit 5: @Test, @BeforeEach, assertions, @ParameterizedTest — tests as executable specifications",
              "Mockito: mock dependencies, stub methods with when/thenReturn, verify interactions",
              "Test one behavior per test, name tests as specifications, keep them fast and independent"
            ],
            "do": [
              "Write tests for a shopping-cart class covering add, remove, totals, and edge cases",
              "Mock a payment gateway with Mockito and verify the cart calls charge() exactly once",
              "Add a parameterized test running the same logic over ten inputs"
            ],
            "tools": ["JUnit 5", "Mockito", "Maven"],
            "res": [
              ["JUnit 5 User Guide", "https://junit.org/junit5/docs/current/user-guide/"],
              ["Mockito documentation", "https://github.com/mockito/mockito"]
            ],
            "tip": "A test that never fails is not a test. Break the implementation on purpose once to prove each test actually guards something."
          }
        ]
      },
      {
        "t": "Spring Boot & Shipping",
        "d": "Production Java: Spring Boot services, data access, and a deployed capstone.",
        "lv": 3,
        "children": [
          {
            "t": "Spring Boot Fundamentals",
            "d": "Dependency injection, auto-configuration, and your first running service.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "Inversion of control: the container wires @Component beans together via @Autowired constructors",
              "Auto-configuration + starters: add spring-boot-starter-web and get an embedded Tomcat with zero XML",
              "application.properties/yml externalizes config; profiles separate dev, test, and prod"
            ],
            "do": [
              "Generate a project at start.spring.io with web starter and run it",
              "Create a service bean injected into a component via constructor injection",
              "Externalize a greeting message to application.yml and override it with an environment variable"
            ],
            "tools": ["Spring Boot", "Maven", "IntelliJ IDEA"],
            "res": [
              ["Spring Boot reference", "https://docs.spring.io/spring-boot/"],
              ["Spring Guides", "https://spring.io/guides"]
            ],
            "tip": "Prefer constructor injection over field injection. It makes dependencies explicit and your classes testable without Spring."
          },
          {
            "t": "Building REST APIs",
            "d": "@RestController, request mapping, validation, and proper HTTP semantics.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "@RestController + @GetMapping/@PostMapping map HTTP to methods; @RequestBody binds JSON via Jackson",
              "Return ResponseEntity with the right status: 201 on create, 404 on missing, 400 on bad input",
              "@Valid + Bean Validation annotations reject bad payloads before your logic runs"
            ],
            "do": [
              "Build a CRUD API for a resource with proper status codes",
              "Add @Valid constraints and a @ControllerAdvice handler returning clean error JSON",
              "Test every endpoint with curl, then automate with MockMvc tests"
            ],
            "tools": ["Spring Boot", "curl", "MockMvc"],
            "res": [
              ["Building REST services guide", "https://spring.io/guides/tutorials/rest/"],
              ["Spring Web reference", "https://docs.spring.io/spring-framework/reference/web.html"]
            ],
            "tip": "Your API's error responses are a UI. Consistent shape, useful messages, correct status codes — clients will thank you."
          },
          {
            "t": "Data Access: Spring Data JPA",
            "d": "Entities, repositories, and queries without writing SQL by hand.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "@Entity classes map to tables; JpaRepository gives CRUD plus query derivation from method names",
              "Derived queries (findByEmail) and @Query for the rest; pagination with Pageable",
              "Transactions with @Transactional: lazy loading needs an open session — understand the boundary"
            ],
            "do": [
              "Model two related entities, generate the schema with Hibernate, and inspect it",
              "Write derived queries and one @Query, then add pagination to a list endpoint",
              "Trigger a LazyInitializationException on purpose, then fix it with a fetch join or DTO"
            ],
            "tools": ["Spring Boot", "Hibernate", "H2", "PostgreSQL"],
            "res": [
              ["Accessing Data with JPA guide", "https://spring.io/guides/gs/accessing-data-jpa/"],
              ["Spring Data JPA reference", "https://docs.spring.io/spring-data/jpa/"]
            ],
            "tip": "N+1 queries are the silent killer of JPA apps. Watch the SQL log; one endpoint should not fire a hundred queries."
          },
          {
            "t": "Capstone: Ship a Java Service",
            "d": "Design, build, test, containerize, and document a production-style Spring Boot app.",
            "lv": 3,
            "time": "~3w",
            "learn": [
              "Production checklist: layered architecture, validation, error handling, logging, health checks",
              "Dockerize with a multi-stage build on a Temurin JRE image; externalize all secrets",
              "Documentation: README with run instructions, API examples, and architecture decisions"
            ],
            "do": [
              "Pick one: a URL shortener, a task API with auth, or a booking service",
              "Reach 80%+ test coverage with unit + MockMvc + Testcontainers integration tests",
              "Dockerize it, write the README, and deploy to a free host or local Kubernetes"
            ],
            "tools": ["Spring Boot", "Docker", "Testcontainers", "PostgreSQL"],
            "res": [
              ["Spring Boot Docker guide", "https://spring.io/guides/topical/spring-boot-docker/"],
              ["Testcontainers", "https://testcontainers.com/"]
            ],
            "tip": "Hiring managers clone Java capstones and run the tests. Green build plus clear README beats feature count.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
