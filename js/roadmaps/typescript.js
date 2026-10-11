/* Atlas roadmap data: TypeScript (typescript)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "typescript",
  "title": "TypeScript",
  "icon": "🟦",
  "color": "#65a30d",
  "kind": "skill",
  "tagline": "JavaScript that scales.",
  "desc": "Types, interfaces, generics, and advanced type wizardry — plus the config, tooling, and 2026 ecosystem (TS 6/7 native compiler) you need in real projects.",
  "root": {
    "t": "TypeScript",
    "d": "A typed superset of JavaScript: catch bugs before runtime and document intent in the type system.",
    "children": [
      {
        "t": "Welcome to TypeScript",
        "d": "Why types exist, how the compiler works, and your first compiled program.",
        "lv": 1,
        "children": [
          {
            "t": "Why TypeScript Exists",
            "d": "The problems types solve: catching bugs early, self-documenting code, fearless refactors.",
            "lv": 1,
            "time": "~2h",
            "tip": "TypeScript doesn't make your code run faster or safer at runtime — it makes mistakes visible at write time. That's the whole deal.",
            "learn": [
              "Static vs dynamic typing: what the compiler can prove before your code runs",
              "TypeScript as a superset: every JS file is already valid TS",
              "Types are erased at compile time — they cost nothing at runtime"
            ],
            "do": [
              "Take a buggy JS function (wrong argument type) and watch TS flag it in the editor",
              "Rename a property across a small project and let the compiler find every usage",
              "Compare the emitted .js of a typed file vs the original source"
            ],
            "tools": ["TypeScript", "VS Code"],
            "res": [
              ["TypeScript Handbook: Basics", "https://www.typescriptlang.org/docs/handbook/2/basic-types.html"],
              ["TypeScript in 5 minutes", "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"]
            ]
          },
          {
            "t": "Installing & Your First Compile",
            "d": "npm install, tsc, and watching your first .ts become .js.",
            "lv": 1,
            "time": "~2h",
            "tip": "Install TypeScript locally per project, not globally. Different projects need different compiler versions.",
            "learn": [
              "npm install -D typescript and what lands in node_modules",
              "tsc file.ts: the basic compile, and reading its error output",
              "--watch mode for continuous compilation while you learn"
            ],
            "do": [
              "Install TS in a fresh folder and compile a hello.ts with an intentional type error",
              "Read the full error message: code, location, and the helpful suggestion",
              "Run tsc --watch, edit the file, and watch it recompile"
            ],
            "tools": ["TypeScript", "npm"],
            "res": [
              ["TS Handbook: The Basics", "https://www.typescriptlang.org/docs/handbook/2/basic-types.html"],
              ["npm: typescript", "https://www.npmjs.com/package/typescript"]
            ]
          },
          {
            "t": "The TypeScript Playground",
            "d": "Zero-setup experimentation with instant feedback and shareable links.",
            "lv": 1,
            "time": "~1h",
            "tip": "The playground's 'TS Config' tab shows exactly which flags are on — use it to understand error messages you see elsewhere.",
            "learn": [
              "Writing and running TS in the browser with no install",
              "The .js output tab: seeing type erasure happen live",
              "Sharing playground links for asking questions and reporting bugs"
            ],
            "do": [
              "Reproduce a type error in the playground and inspect the emitted JS",
              "Toggle strict mode in the playground config and watch errors appear/disappear",
              "Share a playground link demonstrating a concept you learned"
            ],
            "tools": ["TypeScript Playground"],
            "res": [
              ["TypeScript Playground", "https://www.typescriptlang.org/play"]
            ]
          },
          {
            "t": "Running TypeScript: tsc, ts-node & tsx",
            "d": "The ways to execute TS: compile-first vs run-directly.",
            "lv": 1,
            "time": "~3h",
            "tip": "For scripts and dev, tsx is the smooth choice. For production builds, compile with tsc and run plain node.",
            "learn": [
              "tsc: type-check + emit, the production path",
              "tsx / ts-node: running TS directly by stripping types on the fly",
              "Node 24's native type stripping: --experimental-strip-types and its limits"
            ],
            "do": [
              "Run the same script via tsc + node and via tsx; compare speed and behavior",
              "Try an enum or parameter decorator under Node's type stripping and observe what breaks",
              "Add a dev script to package.json using tsx watch"
            ],
            "tools": ["TypeScript", "tsx", "Node.js"],
            "res": [
              ["tsx docs", "https://tsx.is/"],
              ["Node.js: Type stripping", "https://nodejs.org/en/learn/typescript/run-natively"]
            ]
          }
        ]
      },
      {
        "t": "Core Types",
        "d": "Primitives, inference, the top and bottom types, and telling the compiler what you know.",
        "lv": 1,
        "children": [
          {
            "t": "Primitive Types & Type Inference",
            "d": "string, number, boolean — and letting TS figure out types so you don't have to.",
            "lv": 1,
            "time": "~3h",
            "tip": "Annotate function parameters and return types; let inference handle local variables. That's the idiomatic balance.",
            "learn": [
              "Explicit annotations (let x: number) vs inference (let x = 5)",
              "When inference fails you: widening of let, and const's literal inference",
              "void, undefined, null under strict mode"
            ],
            "do": [
              "Hover over variables in VS Code to see what TS inferred vs what you expected",
              "Fix three widening bugs where let x = null needed an explicit union",
              "Annotate every parameter and return type in a utility file"
            ],
            "tools": ["TypeScript", "VS Code"],
            "res": [
              ["Handbook: Everyday Types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"]
            ]
          },
          {
            "t": "any vs unknown vs never",
            "d": "The escape hatch, the safe alternative, and the type of things that never happen.",
            "lv": 1,
            "time": "~3h",
            "tip": "Treat any as a code smell and unknown as the honest version. If you must escape the type system, escape into unknown and narrow back.",
            "learn": [
              "any: opts out of checking entirely — contagious and dangerous",
              "unknown: the type-safe any; you must narrow before using it",
              "never: functions that throw or never return, and exhaustive checks"
            ],
            "do": [
              "Parse unknown JSON and narrow it with typeof checks before use",
              "Write an exhaustive switch over a union using never to catch missing cases",
              "Find and eliminate three anys in a sample file using unknown + narrowing"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"]
            ]
          },
          {
            "t": "Arrays, Tuples & readonly",
            "d": "Typed collections: arrays, fixed-shape tuples, and immutability markers.",
            "lv": 1,
            "time": "~3h",
            "tip": "Prefer readonly arrays for function parameters you don't mutate — it documents intent and catches accidental pushes.",
            "learn": [
              "number[] vs Array<number>; arrays of unions",
              "Tuples: [string, number] fixed-length, fixed-type sequences",
              "readonly and as const: shallow immutability at the type level"
            ],
            "do": [
              "Type a CSV row as a tuple and destructure it with correct types",
              "Mark a function parameter readonly string[] and watch a push get rejected",
              "Convert a config object with as const and observe literal types"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Object Types", "https://www.typescriptlang.org/docs/handbook/2/objects.html"]
            ]
          },
          {
            "t": "Type Assertions: as, as const & Non-null !",
            "d": "Telling the compiler 'trust me' — and the discipline that keeps it safe.",
            "lv": 1,
            "time": "~3h",
            "tip": "Assertions don't convert anything at runtime. as is a promise to the compiler — if you lie, the crash still happens.",
            "learn": [
              "as: narrowing a wider type when you know more than the compiler",
              "as const: the deepest literal inference, for configs and discriminants",
              "The non-null assertion !: convenient, and a lie waiting to happen"
            ],
            "do": [
              "Assert a JSON.parse result to your interface and handle the fields",
              "Replace a non-null assertion with a proper runtime check",
              "Use as const on a route table and get literal-type autocompletion"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Everyday Types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"]
            ]
          },
          {
            "t": "Literal Types & Enums",
            "d": "Types that are exact values: 'red' | 'green', and when enums still earn their keep.",
            "lv": 1,
            "time": "~3h",
            "tip": "In modern TS, string literal unions usually beat enums: they erase cleanly, compose with unions, and need no import at runtime.",
            "learn": [
              "String/number literal types and literal unions as state machines",
              "Numeric and string enums, const enums, and their emitted JS",
              "When enums win: reverse mapping needs, or APIs that demand them"
            ],
            "do": [
              "Model a request status as 'idle' | 'loading' | 'success' | 'error' and narrow on it",
              "Compare the emitted JS of a regular enum vs a const enum vs a union",
              "Refactor an enum to a union + object map and delete the runtime cost"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Enums", "https://www.typescriptlang.org/docs/handbook/enums.html"]
            ]
          },
          {
            "t": "Type Aliases: Naming Your Shapes",
            "d": "type X = ...: giving names to unions, objects, and function shapes.",
            "lv": 1,
            "time": "~2h",
            "tip": "Name every non-trivial type. A named type is documentation; an inline anonymous type is a riddle.",
            "learn": [
              "Aliases for unions, tuples, objects, and function signatures",
              "Aliases are just names — no runtime footprint, no nominal typing",
              "Exporting and importing types across modules"
            ],
            "do": [
              "Define User, ApiResponse<T>-style aliases for a small API client",
              "Extract three repeated inline object types into named aliases",
              "Organize shared types in a types.ts barrel and import them with import type"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Type Aliases", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"]
            ]
          }
        ]
      },
      {
        "t": "Interfaces, Classes & Functions",
        "d": "Contracts for objects, typed classes, and functions with signatures that mean something.",
        "lv": 2,
        "children": [
          {
            "t": "Interfaces: Contracts for Objects",
            "d": "interface: declaring the shape of data with optional, readonly, and nested members.",
            "lv": 2,
            "time": "~4h",
            "tip": "Interfaces describe shapes, not implementations. If your interface has only methods, you probably want a type with function properties or a class.",
            "learn": [
              "Declaring object shapes: required, optional (?), and readonly members",
              "Extending interfaces and declaration merging (and when merging surprises you)",
              "Interfaces for function types and index signatures"
            ],
            "do": [
              "Model a User and an ApiResponse with nested interfaces",
              "Extend a base Entity interface into three domain interfaces",
              "Trigger declaration merging on purpose and decide whether you like it"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Interfaces", "https://www.typescriptlang.org/docs/handbook/2/objects.html"]
            ]
          },
          {
            "t": "type vs interface: When to Use Which",
            "d": "The eternal debate, settled pragmatically.",
            "lv": 2,
            "time": "~2h",
            "tip": "Rule of thumb: interfaces for object shapes and public APIs (they extend and merge); types for unions, tuples, and mapped/conditional wizardry.",
            "learn": [
              "What only types can do: unions, intersections of primitives, mapped types",
              "What only interfaces do: declaration merging, better extends ergonomics",
              "Why consistency within a codebase beats the 'right' answer"
            ],
            "do": [
              "Express the same shape both ways and list what each version allows",
              "Convert a union of object types from interface attempts to a type alias",
              "Write your team's style rule in one sentence and apply it to a file"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Differences", "https://www.typescriptlang.org/docs/handbook/2/objects.html"]
            ]
          },
          {
            "t": "Classes: Types + Runtime in One",
            "d": "Typed classes: constructor params, methods, implements, and the value/type duality.",
            "lv": 2,
            "time": "~4h",
            "tip": "A class is both a type and a value. That's why you can use it in type positions AND with new — and why interfaces can't be instantiated.",
            "learn": [
              "Typing fields, constructors (parameter properties), and methods",
              "implements: checking a class against an interface",
              "The class-as-type vs class-as-value duality"
            ],
            "do": [
              "Build a typed HttpClient class implementing a Client interface",
              "Use constructor parameter properties to cut boilerplate",
              "Use the class as a type annotation elsewhere without new"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Classes", "https://www.typescriptlang.org/docs/handbook/2/classes.html"]
            ]
          },
          {
            "t": "Access Modifiers & Abstract Classes",
            "d": "public, private, protected, abstract — encapsulation the TS way.",
            "lv": 2,
            "time": "~3h",
            "tip": "TS private is compile-time only — it vanishes in the emitted JS. For real runtime privacy, use JS #private fields.",
            "learn": [
              "public/private/protected: who can see what, and the inheritance rules",
              "abstract classes and methods: templates that can't be instantiated",
              "static members and when they belong on the class vs an instance"
            ],
            "do": [
              "Design a small class hierarchy with protected state and public API",
              "Try instantiating an abstract class and read the error",
              "Compare emitted JS of TS-private vs #-private fields"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Classes", "https://www.typescriptlang.org/docs/handbook/2/classes.html"]
            ]
          },
          {
            "t": "Typing Functions & Overloads",
            "d": "Signatures, generics-ready params, and overloads for functions with multiple faces.",
            "lv": 2,
            "time": "~4h",
            "tip": "Overloads describe the public faces; the implementation signature is hidden. Keep overloads few — each one is a promise you must keep.",
            "learn": [
              "Parameter and return type annotations, optional and rest params",
              "Function type expressions and call signatures in interfaces",
              "Overload signatures: multiple call shapes, one implementation"
            ],
            "do": [
              "Type a flexible format(value) function with two overloads",
              "Write an interface with a call signature and implement it",
              "Replace overloads with a union parameter where it's simpler — and compare"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Functions", "https://www.typescriptlang.org/docs/handbook/2/functions.html"]
            ]
          }
        ]
      },
      {
        "t": "Combining & Narrowing Types",
        "d": "Unions, guards, and discriminants — modeling real-world 'this or that' data.",
        "lv": 2,
        "children": [
          {
            "t": "Unions & Intersections",
            "d": "string | number and A & B: the two ways types combine.",
            "lv": 2,
            "time": "~4h",
            "tip": "Unions are OR (this or that); intersections are AND (this and that). Newcomers constantly swap them — say it out loud when unsure.",
            "learn": [
              "Union types: values that can be one of several types",
              "Intersections: combining multiple types into one (mixins, merged configs)",
              "Why you can't use a union value until you narrow it"
            ],
            "do": [
              "Type an API result as Success | Failure and access fields on each branch",
              "Build a config type as Base & Overrides via intersection",
              "Fix the 'property does not exist on union' error three different ways"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Everyday Types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"]
            ]
          },
          {
            "t": "Type Guards: typeof, instanceof & in",
            "d": "Narrowing unions with runtime checks the compiler understands.",
            "lv": 2,
            "time": "~4h",
            "tip": "Narrowing only works on the exact variable you checked. Assign it to another variable first and the narrowing is lost.",
            "learn": [
              "typeof guards for primitives, instanceof for classes",
              "The in operator for distinguishing object shapes",
              "Truthiness narrowing and its null/undefined/0/'' pitfalls"
            ],
            "do": [
              "Write a padLeft(value: string | number) using typeof narrowing",
              "Distinguish Circle | Square with the in operator on their fields",
              "Find a truthiness-narrowing bug where 0 was wrongly treated as missing"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"]
            ]
          },
          {
            "t": "Discriminated Unions & Exhaustiveness",
            "d": "The single best pattern in TypeScript: tag your unions, narrow on the tag.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every union of object types should have a literal discriminant field (kind, type, status). It's the difference between pleasant and painful TS.",
            "learn": [
              "Discriminant properties: literal-typed tags on each union member",
              "Switch-based narrowing that the compiler follows perfectly",
              "Exhaustiveness checking with never: the compiler proves you handled everything"
            ],
            "do": [
              "Model Shape as Circle | Square | Triangle with kind discriminants",
              "Write area(shape) with a switch that narrows on kind",
              "Add a new shape and watch the never-check force you to handle it"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"]
            ]
          },
          {
            "t": "Type Predicates: Custom Guards",
            "d": "x is Fish: teaching the compiler your own narrowing logic.",
            "lv": 2,
            "time": "~3h",
            "tip": "A type predicate is a claim, not a proof. If isFish returns true wrongly, the compiler will happily believe the lie.",
            "learn": [
              "Predicate syntax: function isFish(pet: Fish | Bird): pet is Fish",
              "Using predicates with Array.filter to get typed results",
              "Assertion functions: asserts x is T for fail-fast validation"
            ],
            "do": [
              "Write isStringArray and use it to filter unknown[] into string[]",
              "Build assertIsDefined for unwrapping nullable values",
              "Replace three manual casts with one well-tested predicate"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"]
            ]
          },
          {
            "t": "keyof & Indexed Access Types",
            "d": "Types from types: deriving unions of keys and lookups of property types.",
            "lv": 2,
            "time": "~4h",
            "tip": "keyof turns an object's keys into a union type. Pair it with T[K] and you can type generic property access perfectly.",
            "learn": [
              "keyof T: the union of an object's key names",
              "Indexed access T['name']: the type of a specific property",
              "Typing a generic get(obj, key) so the return type follows the key"
            ],
            "do": [
              "Write a typed getProperty<T, K extends keyof T>(obj, key) helper",
              "Derive a union of event names from an event-map interface",
              "Build a pick-by-keys function whose return type matches the keys"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: keyof", "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html"]
            ]
          },
          {
            "t": "satisfies: Check Without Changing",
            "d": "Validate an expression against a type while keeping its precise inferred type.",
            "lv": 2,
            "time": "~3h",
            "tip": "Use satisfies when you want both: the compiler checks the shape, but you keep the narrow literal types for autocompletion downstream.",
            "learn": [
              "The problem satisfies solves: annotation widens, inference skips checking",
              "satisfies vs as: checking without asserting",
              "Real use: config objects, route tables, palettes"
            ],
            "do": [
              "Define a routes object with satisfies Record<string, Route> and keep literal paths",
              "Catch a typo'd config key that plain inference would have missed",
              "Compare hover types with annotation vs satisfies"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: satisfies", "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html"]
            ]
          }
        ]
      },
      {
        "t": "Generics & Advanced Types",
        "d": "Types that adapt: generics, utility types, and the type-level programming that makes libraries magical.",
        "lv": 3,
        "children": [
          {
            "t": "Generics: Functions & Types That Adapt",
            "d": "Write once, type precisely: <T> as a placeholder the caller fills in.",
            "lv": 3,
            "time": "~6h",
            "tip": "Name the constraint, not the placeholder: <T extends HasId> beats <T> because it tells readers what T must be able to do.",
            "learn": [
              "Generic functions: identity<T>(x: T): T and inference at call sites",
              "Generic interfaces and classes: Box<T>, ApiResponse<T>",
              "Multiple type params and their inference"
            ],
            "do": [
              "Write a typed first<T>(arr: T[]): T | undefined",
              "Build a generic ApiResponse<T> and use it for three endpoints",
              "Implement a generic groupBy<T, K extends keyof T> from scratch"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Generics", "https://www.typescriptlang.org/docs/handbook/2/generics.html"]
            ]
          },
          {
            "t": "Generic Constraints & Defaults",
            "d": "Telling generics what they're allowed to be: extends, defaults, and infer positions.",
            "lv": 3,
            "time": "~4h",
            "tip": "A constraint that lists every property you touch inside the function is self-documenting. If the body uses .length, the constraint should say so.",
            "learn": [
              "extends constraints: <T extends { length: number }>",
              "Default type arguments: <T = string>",
              "Constraining with keyof: <K extends keyof T>"
            ],
            "do": [
              "Constrain a longest<T extends { length: number }> function",
              "Add a default type param to a generic component-style function",
              "Write pluck<T, K extends keyof T>(objs: T[], key: K): T[K][]"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Generics", "https://www.typescriptlang.org/docs/handbook/2/generics.html"]
            ]
          },
          {
            "t": "Utility Types: Partial, Pick, Omit & Friends",
            "d": "The standard library of type transforms — learn the dozen you'll use weekly.",
            "lv": 3,
            "time": "~5h",
            "tip": "Partial makes everything optional — including things that must stay required. Prefer Pick/Omit for surgical changes.",
            "learn": [
              "Partial, Required, Readonly: whole-object transforms",
              "Pick, Omit: selecting or removing keys",
              "Record, Exclude, Extract, NonNullable, Parameters, ReturnType, Awaited"
            ],
            "do": [
              "Type an updateUser(id, patch: Partial<User>) endpoint",
              "Derive a PublicUser with Omit<User, 'passwordHash'>",
              "Extract a function's return type with ReturnType<typeof fn>"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Utility Types", "https://www.typescriptlang.org/docs/handbook/utility-types.html"]
            ]
          },
          {
            "t": "Mapped Types",
            "d": "{ [K in keyof T]: ... }: transforming every property of a type programmatically.",
            "lv": 3,
            "time": "~5h",
            "tip": "Read mapped types as loops over keys: 'for each key K in T, produce this property type.' The syntax is the only hard part.",
            "learn": [
              "Basic mapped types: making all props optional/readonly yourself",
              "Key remapping with as: filtering and renaming keys",
              "How Partial and Pick are implemented — then write your own"
            ],
            "do": [
              "Implement MyPartial<T> and MyPick<T, K> from scratch",
              "Build a Getters<T> type that adds getX methods for each property",
              "Remap keys to create an EnvVar-style UPPER_CASE mapping"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Mapped Types", "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html"]
            ]
          },
          {
            "t": "Conditional Types",
            "d": "T extends U ? X : Y: types that branch — the if-statements of the type system.",
            "lv": 3,
            "time": "~6h",
            "tip": "Conditional types distribute over naked union type parameters. Wrap in a tuple [T] when you want to stop distribution.",
            "learn": [
              "Basic conditionals and how Exclude/Extract are built",
              "Distributive behavior over unions — and how to control it",
              "infer: extracting types from inside other types (e.g. unwrapping promises)"
            ],
            "do": [
              "Implement MyExclude<T, U> and MyExtract<T, U>",
              "Write UnwrapPromise<T> using infer",
              "Build a Flatten<T> for nested arrays and test it on three shapes"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Conditional Types", "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html"]
            ]
          },
          {
            "t": "Template Literal Types",
            "d": "Types built from strings: `on${Capitalize<E>}` and the magic of typed event names.",
            "lv": 3,
            "time": "~4h",
            "tip": "Template literal types shine for deriving related names (events, routes, CSS vars). If you're hand-writing both sides, derive one from the other.",
            "learn": [
              "String interpolation in types: `hello-${name}`",
              "Intrinsic string manipulation: Capitalize, Uppercase, Lowercase, Uncapitalize",
              "Combining with unions to generate families of literal types"
            ],
            "do": [
              "Type event handlers as `on${Capitalize<Click | Hover>}`",
              "Build route params extraction: '/users/:id' → { id: string }",
              "Generate CSS variable names from a theme object"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: Template Literals", "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html"]
            ]
          },
          {
            "t": "Recursive & Deep Types",
            "d": "Types that reference themselves: JSON values, nested configs, and deep partials.",
            "lv": 3,
            "time": "~4h",
            "tip": "Recursive types need a base case to terminate. If the compiler complains about circularity, your recursion has no exit.",
            "learn": [
              "Modeling JsonValue: string | number | boolean | null | JsonValue[] | { [k: string]: JsonValue }",
              "DeepPartial and other recursive transforms",
              "Where recursion depth limits bite and how to restructure"
            ],
            "do": [
              "Define a JsonValue type and validate nested data against it",
              "Write a DeepReadonly<T> mapped type",
              "Type a tree structure (org chart) recursively"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["Handbook: More on Functions", "https://www.typescriptlang.org/docs/handbook/2/functions.html"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Configuration, Tooling & Real-World TypeScript",
        "d": "tsconfig mastery, modules, linting, frameworks, and the 2026 ecosystem.",
        "lv": 2,
        "children": [
          {
            "t": "tsconfig.json: The Control Panel",
            "d": "target, module, lib, paths — the settings that shape every compile.",
            "lv": 2,
            "time": "~4h",
            "tip": "Start from a known-good base (like @tsconfig/node24 or strictest) instead of hand-tuning 30 flags you don't understand yet.",
            "learn": [
              "target/module/lib: what JS version you emit and what APIs you can use",
              "moduleResolution: bundler vs node16/nodenext and why imports resolve differently",
              "paths and baseUrl: clean absolute imports without ../../ hell"
            ],
            "do": [
              "Set up path aliases (@/...) and make them work in both tsc and your bundler",
              "Switch moduleResolution and observe an import break — then understand why",
              "Extend a shared base config across two packages"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["tsconfig Reference", "https://www.typescriptlang.org/tsconfig/"]
            ]
          },
          {
            "t": "strict Mode & Its Family",
            "d": "The flags that make TypeScript actually strict — and worth it.",
            "lv": 2,
            "time": "~4h",
            "tip": "Enable strict on day one of a project. Enabling it on day 300 means fixing 2,000 errors at once.",
            "learn": [
              "What strict enables: noImplicitAny, strictNullChecks, and friends",
              "noUncheckedIndexedAccess: array access that admits it might be undefined",
              "exactOptionalPropertyTypes: the subtle one about optional vs undefined"
            ],
            "do": [
              "Turn on strict in a loose project and fix the errors category by category",
              "Add noUncheckedIndexedAccess and handle newly-possibly-undefined indexing",
              "Decide your stance on exactOptionalPropertyTypes with a concrete example"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["tsconfig: strict", "https://www.typescriptlang.org/tsconfig/#strict"]
            ]
          },
          {
            "t": "Modules, Declaration Files & @types",
            "d": "How TS sees the JS world: .d.ts files, DefinitelyTyped, and ambient declarations.",
            "lv": 2,
            "time": "~4h",
            "tip": "When a library has no types, write a minimal .d.ts for what you use — don't reach for @ts-ignore.",
            "learn": [
              "Declaration files: describing JS code's types without its implementation",
              "DefinitelyTyped/@types: community types for untyped libraries",
              "declare module and ambient declarations for globals and assets"
            ],
            "do": [
              "Install @types for an untyped library and fix the resulting errors",
              "Write a declarations.d.ts for importing .css and .svg files",
              "Generate .d.ts from your own library with tsc --declaration"
            ],
            "tools": ["TypeScript", "DefinitelyTyped"],
            "res": [
              ["Handbook: Declaration Files", "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html"]
            ]
          },
          {
            "t": "Decorators",
            "d": "@Component, @observable: annotating classes and members with metadata.",
            "lv": 3,
            "time": "~4h",
            "tip": "Decorators are standardized in TS 5+ with a different signature than the old experimental ones. Mixing the two eras is the main source of confusion.",
            "learn": [
              "The standard decorators proposal: what @decorator can attach to",
              "Real uses: Angular/NestJS DI, MobX observables, validation libraries",
              "experimentalDecorators vs standard: knowing which era your framework uses"
            ],
            "do": [
              "Write a @logged method decorator that logs calls and arguments",
              "Use decorators in a NestJS-style controller to see them in context",
              "Compare the emitted code with and without the decorator"
            ],
            "tools": ["TypeScript", "NestJS"],
            "res": [
              ["Handbook: Decorators", "https://www.typescriptlang.org/docs/handbook/decorators.html"]
            ],
            "tag": "opt"
          },
          {
            "t": "Linting & Formatting: typescript-eslint + Prettier",
            "d": "Type-aware linting that catches what the compiler politely ignores.",
            "lv": 2,
            "time": "~4h",
            "tip": "Type-aware rules are slower but catch real bugs (like floating promises). Run them in CI and lint-staged, not on every keystroke.",
            "learn": [
              "typescript-eslint: the flat config, recommended sets, and type-aware rules",
              "Rules that matter: no-floating-promises, no-unsafe-*, consistent-type-imports",
              "Prettier for formatting; avoiding rule conflicts between the two"
            ],
            "do": [
              "Set up typescript-eslint flat config with type-checked rules",
              "Enable no-floating-promises and fix the unawaited promises it finds",
              "Add consistent-type-imports and convert imports to import type"
            ],
            "tools": ["typescript-eslint", "Prettier", "ESLint"],
            "res": [
              ["typescript-eslint docs", "https://typescript-eslint.io/"]
            ]
          },
          {
            "t": "Testing Typed Code",
            "d": "Unit tests plus type tests: proving both behavior and types.",
            "lv": 2,
            "time": "~4h",
            "tip": "Vitest tests behavior; expectTypeOf tests types. A function can pass all behavior tests while its types lie — test both.",
            "learn": [
              "Vitest/Jest with TS: running typed tests smoothly",
              "expectTypeOf and assertType: asserting types in tests",
              "Testing generics and conditional types with type-level cases"
            ],
            "do": [
              "Write Vitest tests for a generic utility with expectTypeOf assertions",
              "Add a type test that fails if a function's return type widens",
              "Set up typecheck as a CI step alongside unit tests"
            ],
            "tools": ["Vitest", "TypeScript"],
            "res": [
              ["Vitest docs", "https://vitest.dev/guide/"]
            ]
          },
          {
            "t": "TypeScript with Frameworks",
            "d": "TS in the wild: React props, Express handlers, and full-stack patterns.",
            "lv": 2,
            "time": "~6h",
            "tip": "In React, type props as plain interfaces and skip React.FC — it adds implicit children you probably don't want.",
            "learn": [
              "React: typing props, state, events, and refs",
              "Express/Fastify: typing Request/Response, middleware, and route params",
              "Shared types between frontend and backend in a monorepo"
            ],
            "do": [
              "Build a typed React component with discriminated-union props",
              "Type an Express route with query/body generics end to end",
              "Share a types package between a client and server folder"
            ],
            "tools": ["TypeScript", "React", "Express"],
            "res": [
              ["React TypeScript Cheatsheet", "https://react-typescript-cheatsheet.netlify.app/"]
            ]
          },
          {
            "t": "The 2026 Landscape: TS 6, 7 & the Native Compiler",
            "d": "The Go-native compiler era: what changed, what to migrate, and what's next.",
            "lv": 3,
            "time": "~3h",
            "tip": "TS 7 is dramatically faster but drops some legacy APIs. Migrate the compiler version before adopting new language features.",
            "learn": [
              "TypeScript 6: the transition release — new defaults and deprecations",
              "TypeScript 7: the Go-native rewrite, ~10x faster builds",
              "Migration checklist: typescript-eslint compatibility, build tooling, CI timing"
            ],
            "do": [
              "Upgrade a project to TS 6 and resolve the new default warnings",
              "Benchmark tsc build time before and after trying the TS 7 native preview",
              "Audit your toolchain (eslint, bundlers) for TS 7 readiness"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["TypeScript 7 announcement", "https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/"],
              ["TypeScript roadmap", "https://github.com/microsoft/TypeScript"]
            ]
          },
          {
            "t": "Capstone: Ship a Typed Full-Stack App",
            "d": "A complete typed project: strict config, shared types, tests, and CI.",
            "lv": 2,
            "time": "~2w",
            "tip": "Let the compiler be your pair programmer: if a refactor feels scary, your types aren't precise enough yet.",
            "learn": [
              "Project layout: shared types, strict tsconfig, path aliases",
              "End-to-end typing from database to API to UI",
              "CI pipeline: typecheck, lint, test, build"
            ],
            "do": [
              "Build a small full-stack app (e.g. link shortener) with shared types",
              "Enable strict + noUncheckedIndexedAccess and keep the build green",
              "Add type tests for your core domain types and ship it"
            ],
            "tools": ["TypeScript", "Vite", "Vitest"],
            "res": [
              ["TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/intro.html"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
