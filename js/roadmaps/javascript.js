/* Atlas roadmap data: JavaScript (javascript)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "javascript",
  "title": "JavaScript",
  "icon": "🟨",
  "color": "#eab308",
  "kind": "skill",
  "tagline": "The language of the web, mastered.",
  "desc": "From your first console.log to closures, async, and modern ES2024+: the complete JavaScript journey, with the browser and tooling included.",
  "root": {
    "t": "JavaScript",
    "d": "The language that runs the web — syntax, scope, prototypes, async, and the modern ecosystem.",
    "children": [
      {
        "t": "JavaScript Foundations",
        "d": "Variables, types, operators, flow control — the grammar of the language.",
        "lv": 1,
        "children": [
          {
            "t": "What Is JavaScript & Where It Runs",
            "d": "A high-level, dynamic language: browsers, Node.js, and everything between.",
            "lv": 1,
            "time": "~2h",
            "tip": "JavaScript and Java are unrelated — the name was marketing. Don't let it confuse your learning.",
            "learn": [
              "What a runtime is: browsers, Node.js, Deno, Bun all run JS differently",
              "The ECMAScript standard (ES2015, ES2020, ES2024...) and how features land",
              "JS is single-threaded with an event loop — the idea that unlocks async later"
            ],
            "do": [
              "Open your browser console and run console.log('hello') plus a small calculation",
              "Run the same line in Node.js with node -e to feel the two runtimes",
              "Skim the ECMAScript feature list for the current year to see the language evolving"
            ],
            "tools": ["Browser DevTools", "Node.js"],
            "res": [
              ["MDN: JavaScript Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"],
              ["JavaScript.info: Intro", "https://javascript.info/intro"]
            ]
          },
          {
            "t": "Setting Up & Using DevTools",
            "d": "Your editor, the console, and the debugger that will save you hundreds of hours.",
            "lv": 1,
            "time": "~3h",
            "tip": "Learn the debugger, not just console.log. Breakpoints show you the whole state at once.",
            "learn": [
              "VS Code setup: extensions, formatting on save, integrated terminal",
              "The DevTools trio: Console, Sources (debugger), Network",
              "Breakpoints, stepping through code, and watching variable values"
            ],
            "do": [
              "Install VS Code and write a script that prints the numbers 1 to 10",
              "Set a breakpoint in DevTools Sources and step through a loop line by line",
              "Inspect a live page: find an element in Elements and change its text from the Console"
            ],
            "tools": ["VS Code", "Chrome DevTools"],
            "res": [
              ["MDN: DevTools", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"],
              ["JavaScript.info: Debugging", "https://javascript.info/debugging-chrome"]
            ]
          },
          {
            "t": "Variables: let, const (and var's Ghost)",
            "d": "Declaring variables the modern way — and why var still haunts old codebases.",
            "lv": 1,
            "time": "~3h",
            "tip": "Default to const. Reach for let only when the value truly must be reassigned. Never write new var.",
            "learn": [
              "let vs const: reassignment rules, and why const objects can still be mutated",
              "var: function scope, no block scope, and the hoisting surprise",
              "Naming rules, conventions (camelCase), and reserved words"
            ],
            "do": [
              "Declare the same counter with var, let, and const inside a block; log each outside it",
              "Try reassigning a const array's element vs reassigning the array itself",
              "Refactor a snippet that uses var to use let/const correctly"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: let", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"],
              ["JavaScript.info: Variables", "https://javascript.info/variables"]
            ]
          },
          {
            "t": "Data Types & typeof",
            "d": "Primitives, objects, and the quirks that make interviews fun.",
            "lv": 1,
            "time": "~4h",
            "tip": "typeof null === 'object' is a 30-year-old bug, not a feature. Memorize it and move on.",
            "learn": [
              "The 7 primitives (string, number, bigint, boolean, undefined, null, symbol) vs objects",
              "typeof results for each type — including the null quirk",
              "Coercion basics: what happens when you mix types with + and =="
            ],
            "do": [
              "Write a function that prints the typeof every value in a mixed array",
              "Predict then verify: '5' + 3, '5' - 3, true + 1, null == undefined",
              "Use BigInt for a number too large for Number and compare precision"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Data types", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"],
              ["JavaScript.info: Types", "https://javascript.info/types"]
            ]
          },
          {
            "t": "Operators & Expressions",
            "d": "Arithmetic, comparison, logical, bitwise — and the precedence rules that bite.",
            "lv": 1,
            "time": "~4h",
            "tip": "Always use === instead of ==. Loose equality's coercion table is a trap you never need to enter.",
            "learn": [
              "=== vs == vs Object.is: three equalities, three different answers for edge cases",
              "Logical operators return operands, not booleans: a && b, a || b, a ?? b",
              "Operator precedence: why 2 + 3 * 4 and !x === y don't do what they look like",
              "Ternary, spread/rest, and template literals"
            ],
            "do": [
              "Build a truth table for == vs === across null, undefined, 0, '', false, NaN",
              "Rewrite three nested if/else blocks using ternaries and logical operators",
              "Use template literals with embedded expressions to build an HTML string safely-ish"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Expressions & operators", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators"],
              ["JavaScript.info: Operators", "https://javascript.info/operators"]
            ]
          },
          {
            "t": "Conditionals & Loops",
            "d": "if/else, switch, and every flavor of loop — plus when not to loop at all.",
            "lv": 1,
            "time": "~4h",
            "tip": "for...in is for object keys, for...of is for iterable values. Mixing them up is the classic beginner bug.",
            "learn": [
              "if/else if/else, switch (and its fall-through behavior)",
              "for, while, do...while, for...in, for...of, break/continue",
              "When array methods (map/filter) replace loops entirely"
            ],
            "do": [
              "Write FizzBuzz with for, then rewrite it with while",
              "Iterate an object's keys with for...in and an array's values with for...of; note the difference",
              "Build a small guessing game using do...while and break"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Loops", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"],
              ["JavaScript.info: Loops", "https://javascript.info/while-for"]
            ]
          },
          {
            "t": "Errors: try/catch/throw & Error Objects",
            "d": "Failing gracefully: catching errors, throwing your own, and reading stack traces.",
            "lv": 1,
            "time": "~3h",
            "tip": "Catch errors where you can act on them. Swallowing errors with an empty catch is worse than crashing.",
            "learn": [
              "try/catch/finally flow and the Error object (message, stack, name)",
              "throw: raising custom errors with meaningful messages",
              "Error subclasses: TypeError, RangeError, SyntaxError — and when each appears"
            ],
            "do": [
              "Wrap JSON.parse of bad input in try/catch and log error.message vs the full stack",
              "Write a validateAge function that throws a RangeError for invalid input",
              "Use finally to always release a resource (e.g. clear an interval)"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: try...catch", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"],
              ["JavaScript.info: Error handling", "https://javascript.info/try-catch"]
            ]
          }
        ]
      },
      {
        "t": "Functions & Scope",
        "d": "The heart of JavaScript: how functions and scope really work.",
        "lv": 1,
        "children": [
          {
            "t": "Functions & Parameters",
            "d": "Declarations, expressions, defaults, rest params, and the arguments object.",
            "lv": 1,
            "time": "~4h",
            "tip": "Default parameters only apply for undefined, not for null or other falsy values.",
            "learn": [
              "Function declarations vs expressions vs named expressions",
              "Default parameters, rest (...args), and the legacy arguments object",
              "Return values: implicit undefined, early returns, multiple returns"
            ],
            "do": [
              "Write a greet(name = 'stranger', ...hobbies) function using defaults and rest",
              "Compare arguments.length vs rest params in the same function",
              "Refactor a function with 5 parameters into one taking an options object"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Functions", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"],
              ["JavaScript.info: Functions", "https://javascript.info/function-basics"]
            ]
          },
          {
            "t": "Arrow Functions",
            "d": "Short syntax, no own this — the modern default, with real limits.",
            "lv": 1,
            "time": "~3h",
            "tip": "Arrow functions don't bind this and can't be constructors. Use them for callbacks, not for object methods that need this.",
            "learn": [
              "Concise syntax: implicit return, single-expression bodies",
              "Lexical this: arrows inherit this from where they're written",
              "What arrows lack: no arguments object, no prototype, not constructable"
            ],
            "do": [
              "Convert five classic callbacks (map, filter, setTimeout) to arrow form",
              "Demonstrate this inside an arrow vs a regular function in an object method",
              "Try new on an arrow function and read the TypeError"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Arrow functions", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"],
              ["JavaScript.info: Arrow functions", "https://javascript.info/arrow-functions-basics"]
            ]
          },
          {
            "t": "Scope, Hoisting & the Temporal Dead Zone",
            "d": "Where variables live, when they exist, and the TDZ error everyone meets once.",
            "lv": 1,
            "time": "~4h",
            "tip": "The TDZ (Temporal Dead Zone) is why let/const throw ReferenceError before declaration. It's a feature — it catches bugs var hid.",
            "learn": [
              "Global, function, and block scope; lexical (static) scoping",
              "Hoisting: declarations move up, but let/const sit in the TDZ until initialized",
              "var's hoisted-but-undefined behavior vs let's ReferenceError"
            ],
            "do": [
              "Trigger and fix a TDZ ReferenceError on purpose",
              "Trace which x each console.log prints in triply-nested scopes",
              "Move a var out of a block and observe it leak to function scope"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Scope", "https://developer.mozilla.org/en-US/docs/Glossary/Scope"],
              ["JavaScript.info: Variables scope", "https://javascript.info/closure"]
            ]
          },
          {
            "t": "Closures",
            "d": "Functions that remember their birthplace — the most interviewable concept in JS.",
            "lv": 2,
            "time": "~6h",
            "tip": "A closure isn't created by magic syntax — any function that outlives its outer scope's execution is a closure.",
            "learn": [
              "What a closure is: function + the lexical environment it was created in",
              "Private state via closures: counters, memoization, module patterns",
              "The classic loop bug: var in a for loop with setTimeout, and its fixes"
            ],
            "do": [
              "Build a createCounter() that returns increment/decrement with hidden state",
              "Reproduce the var-loop setTimeout bug, then fix it with let and with an IIFE",
              "Write a memoize(fn) wrapper that caches results in a closure"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Closures", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures"],
              ["JavaScript.info: Closure", "https://javascript.info/closure"]
            ]
          },
          {
            "t": "this: Context & the Four Rules",
            "d": "What this points to depends on the call site — learn the rules, kill the confusion.",
            "lv": 2,
            "time": "~5h",
            "tip": "Don't ask 'what is this?' — ask 'how was this function called?' The call site decides.",
            "learn": [
              "The four binding rules: default, implicit, explicit, new",
              "this in methods vs standalone functions vs arrow functions vs event handlers",
              "Strict mode changes: this stays undefined instead of becoming the global object"
            ],
            "do": [
              "Log this in five contexts: global, object method, nested function, arrow, and with 'use strict'",
              "Detach a method (const f = obj.method) and watch this change — then explain why",
              "Fix a this bug inside a setTimeout callback two different ways"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: this", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"],
              ["JavaScript.info: Object methods, this", "https://javascript.info/object-methods"]
            ]
          },
          {
            "t": "call, apply & bind",
            "d": "Borrowing functions and pinning this — explicit binding in your hands.",
            "lv": 2,
            "time": "~4h",
            "tip": "bind returns a NEW function; call/apply invoke immediately. Mixing them up is the #1 mistake here.",
            "learn": [
              "call: invoke with a thisArg and individual arguments",
              "apply: invoke with a thisArg and an argument array (and its spread-era replacement)",
              "bind: permanently fix this and optionally preset arguments (partial application)"
            ],
            "do": [
              "Borrow Array.prototype.slice for an arguments-like object using call",
              "Use bind to create a preset logger: const errorLog = log.bind(null, 'ERROR')",
              "Implement a tiny myBind to understand what bind actually does"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: bind", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"],
              ["JavaScript.info: call/apply", "https://javascript.info/call-apply-decorators"]
            ]
          }
        ]
      },
      {
        "t": "Objects, Arrays & the Prototype Chain",
        "d": "JavaScript's data model: objects, prototypes, classes, and the collections around them.",
        "lv": 2,
        "children": [
          {
            "t": "Objects: Literals, Destructuring & Spread",
            "d": "The workhorse data structure — creating, copying, and reshaping objects.",
            "lv": 2,
            "time": "~5h",
            "tip": "Spread copies are shallow. Nested objects still share references — that's where most 'mutation bugs' come from.",
            "learn": [
              "Literals, computed keys, shorthand properties and methods",
              "Destructuring with defaults, renaming, and nested patterns",
              "Spread/rest for copying and merging; Object.keys/values/entries/freeze"
            ],
            "do": [
              "Destructure a nested API response object in one statement with defaults",
              "Merge two config objects with spread and prove the copy is shallow",
              "Freeze a settings object and confirm silent failure vs strict-mode TypeError"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Objects", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"],
              ["JavaScript.info: Destructuring", "https://javascript.info/destructuring-assignment"]
            ]
          },
          {
            "t": "Arrays & Their Power Methods",
            "d": "map, filter, reduce and friends — the functional toolkit every JS dev lives in.",
            "lv": 2,
            "time": "~6h",
            "tip": "map/filter return new arrays; forEach returns undefined. If you're using forEach to build an array, you wanted map.",
            "learn": [
              "map, filter, reduce: the big three and what each returns",
              "find, some, every, flatMap, sort (and sort's string-default trap)",
              "Chaining: filter → map → reduce pipelines"
            ],
            "do": [
              "From an array of user objects, produce 'active users sorted by name' in one chain",
              "Implement map, filter, and reduce from scratch with for loops",
              "Fix a numeric sort bug by supplying a comparator"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Array", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"],
              ["JavaScript.info: Array methods", "https://javascript.info/array-methods"]
            ]
          },
          {
            "t": "Prototypes & the Prototype Chain",
            "d": "How JS really does inheritance — objects delegating to objects.",
            "lv": 2,
            "time": "~6h",
            "tip": "Every object has a hidden link (__proto__) to its prototype. Property lookup walks that chain — that's all inheritance is here.",
            "learn": [
              "Prototype chain: how property lookup delegates up the chain",
              "__proto__ vs prototype (the function property) vs Object.getPrototypeOf",
              "Why you usually shouldn't mutate prototypes directly — and what breaks if you do"
            ],
            "do": [
              "Build two objects where one inherits from the other via Object.create",
              "Add a shared method on a constructor's prototype and call it from instances",
              "Trace the chain: obj → Object.prototype → null with getPrototypeOf"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Prototypes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"],
              ["JavaScript.info: Prototypal inheritance", "https://javascript.info/prototype-inheritance"]
            ]
          },
          {
            "t": "Classes: Sugar with Teeth",
            "d": "class syntax, constructors, inheritance — and what it compiles down to.",
            "lv": 2,
            "time": "~5h",
            "tip": "JS classes are prototypes wearing a tuxedo. Understanding prototypes first makes class behavior (like super) obvious.",
            "learn": [
              "constructor, methods, static members, extends and super",
              "Private fields (#field) vs TypeScript-style or closure-based privacy",
              "What class really is: a function with a prototype, desugared"
            ],
            "do": [
              "Model Animal → Dog inheritance with overridden methods calling super",
              "Use a #private field and observe the outside-access error",
              "Rewrite a class as a constructor function + prototype to see the equivalence"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Classes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"],
              ["JavaScript.info: Classes", "https://javascript.info/classes"]
            ]
          },
          {
            "t": "Maps, Sets & Their Weak Siblings",
            "d": "Beyond plain objects: ordered keys, unique values, and garbage-collectable references.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use a Map when keys aren't strings, order matters, or you add/remove keys often. Objects win for fixed string-key records.",
            "learn": [
              "Map vs Object: any-type keys, insertion order, size, iteration",
              "Set for uniqueness: add/delete/has and converting to arrays",
              "WeakMap/WeakSet: non-enumerable, GC-friendly references for caches and metadata"
            ],
            "do": [
              "Count word frequencies in a text using Map",
              "Deduplicate an array with Set and compare to a filter-based approach",
              "Attach private metadata to objects with a WeakMap and observe no memory leak"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Map", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"],
              ["JavaScript.info: Map and Set", "https://javascript.info/map-set"]
            ]
          },
          {
            "t": "JSON: Parsing & Stringifying",
            "d": "The lingua franca of APIs — and its sharp edges (dates, cycles, undefined).",
            "lv": 2,
            "time": "~3h",
            "tip": "JSON.stringify silently drops undefined, functions, and Symbols — and throws on circular references. Always know your data shape.",
            "learn": [
              "JSON.parse and JSON.stringify: the two directions",
              "Replacer and reviver functions for custom serialization",
              "What JSON can't represent: Date objects, undefined, circular structures"
            ],
            "do": [
              "Round-trip a complex object through JSON and list what changed",
              "Serialize a Date with a replacer so it survives the round trip",
              "Trigger a circular-reference TypeError, then break the cycle"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: JSON", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"],
              ["JavaScript.info: JSON", "https://javascript.info/json"]
            ]
          },
          {
            "t": "Iterators & Generators",
            "d": "Custom iteration and pausable functions — the machinery behind for...of and async streams.",
            "lv": 3,
            "time": "~5h",
            "tip": "A generator function returns a generator object, not the values. Call .next() — or just for...of it.",
            "learn": [
              "The iterator protocol: next() returning { value, done }",
              "Generators: function* and yield — pausable, resumable functions",
              "Why this matters: lazy sequences, custom data structures, async iteration foundations"
            ],
            "do": [
              "Write a range generator: function* range(start, end) and consume it with for...of",
              "Build an infinite Fibonacci generator and take the first 10",
              "Make a custom object iterable by defining [Symbol.iterator]"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Iterators", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"],
              ["JavaScript.info: Generators", "https://javascript.info/generators"]
            ]
          },
          {
            "t": "Symbols: The Hidden Keys",
            "d": "Unique, collision-proof property keys — and the well-known symbols that hook the language.",
            "lv": 3,
            "time": "~3h",
            "tip": "Symbol() !== Symbol() — every symbol is unique. That's the entire point, and the source of most confusion.",
            "learn": [
              "Why symbols exist: unique keys that never collide with string keys",
              "Well-known symbols: Symbol.iterator, Symbol.toPrimitive, Symbol.hasInstance",
              "When NOT to use them: symbols don't show up in JSON or for...in"
            ],
            "do": [
              "Add a symbol-keyed 'id' to an object and prove it doesn't appear in Object.keys",
              "Implement Symbol.toPrimitive to control how your object converts to string/number",
              "Use the global symbol registry (Symbol.for) to share a symbol across modules"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Symbol", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"],
              ["JavaScript.info: Symbol", "https://javascript.info/symbol"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Asynchronous JavaScript",
        "d": "The event loop, timers, callbacks, promises — async done properly.",
        "lv": 2,
        "children": [
          {
            "t": "The Event Loop & Task Queues",
            "d": "How single-threaded JS stays non-blocking: call stack, queues, and the loop.",
            "lv": 2,
            "time": "~6h",
            "tip": "Microtasks (promise callbacks) always run before the next macrotask. That's why promise .then beats setTimeout(..., 0).",
            "learn": [
              "Call stack, Web APIs/Node APIs, microtask queue vs macrotask queue",
              "The loop's order: run stack empty → drain microtasks → one macrotask → repeat",
              "Why blocking the main thread freezes the page — and how to avoid it"
            ],
            "do": [
              "Predict the output order of a script mixing console.log, setTimeout, and Promise.resolve().then",
              "Block the main thread with a long loop and observe the UI freeze in a demo page",
              "Move heavy work to chunks with setTimeout or queueMicrotask and feel the difference"
            ],
            "tools": ["Browser DevTools", "Node.js"],
            "res": [
              ["MDN: Event loop", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"],
              ["JavaScript.info: Event loop", "https://javascript.info/event-loop"]
            ]
          },
          {
            "t": "Timers: setTimeout & setInterval",
            "d": "Scheduling code in time — delays, intervals, and their cleanup.",
            "lv": 1,
            "time": "~3h",
            "tip": "Always store timer IDs and clear them. A forgotten setInterval is a memory leak wearing a clock.",
            "learn": [
              "setTimeout (one-shot) vs setInterval (repeating) and their return IDs",
              "clearTimeout/clearInterval: cleanup is not optional",
              "Zero-delay timers still wait for the current stack — they're not truly immediate"
            ],
            "do": [
              "Build a countdown timer that cleans up its interval at zero",
              "Demonstrate that setTimeout(fn, 0) runs after synchronous code",
              "Implement a debounce function with setTimeout/clearTimeout"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: setTimeout", "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"],
              ["JavaScript.info: Scheduling", "https://javascript.info/settimeout-setinterval"]
            ]
          },
          {
            "t": "Callbacks & Callback Hell",
            "d": "The original async pattern — and why nesting it became infamous.",
            "lv": 2,
            "time": "~4h",
            "tip": "Name your callbacks and keep them shallow. Anonymous nesting three levels deep is how callback hell starts.",
            "learn": [
              "The error-first callback convention (Node style): cb(err, result)",
              "How nested async callbacks become the 'pyramid of doom'",
              "Refactoring strategies: named functions, modularization, and the path to promises"
            ],
            "do": [
              "Write a three-step async flow (read → transform → write) with nested callbacks",
              "Refactor it with named functions so no nesting exceeds one level",
              "Convert one callback API to a promise with a manual wrapper"
            ],
            "tools": ["Node.js"],
            "res": [
              ["JavaScript.info: Callbacks", "https://javascript.info/callbacks"],
              ["Node.js: Callback guide", "https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks"]
            ]
          },
          {
            "t": "Promises: The Async Contract",
            "d": "pending → fulfilled/rejected: chaining, catching, and combining async work.",
            "lv": 2,
            "time": "~6h",
            "tip": "A promise chain without .catch() (or try/catch) swallows rejections silently. End every chain with error handling.",
            "learn": [
              "States, the executor, resolve/reject, and .then/.catch/.finally",
              "Chaining: returning values vs returning promises inside .then",
              "Combinators: Promise.all, allSettled, race, any — and when each fails"
            ],
            "do": [
              "Chain three dependent async steps, transforming data at each .then",
              "Compare Promise.all vs allSettled with one failing promise",
              "Implement Promise.all from scratch using a counter"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Promise", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"],
              ["JavaScript.info: Promises", "https://javascript.info/promise-basics"]
            ]
          },
          {
            "t": "async/await: Async That Reads Like Sync",
            "d": "The modern syntax for promises — plus the error-handling discipline it demands.",
            "lv": 2,
            "time": "~5h",
            "tip": "await in a loop runs tasks one at a time. For independent tasks, start all promises first, then await them.",
            "learn": [
              "async functions always return promises; await unwraps them",
              "try/catch around await replaces .catch() — cleaner and more local",
              "Parallel vs sequential awaits; Promise.all with async/await"
            ],
            "do": [
              "Rewrite a promise chain as async/await with try/catch",
              "Fetch three URLs sequentially, then in parallel — measure the time difference",
              "Handle a rejected await inside a loop without stopping the loop"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: async function", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"],
              ["JavaScript.info: Async/await", "https://javascript.info/async-await"]
            ]
          },
          {
            "t": "Fetch & Real-World APIs",
            "d": "Talking to the world: HTTP requests, JSON, and handling what can go wrong.",
            "lv": 2,
            "time": "~5h",
            "tip": "fetch only rejects on network failure — a 404 or 500 still resolves. Always check response.ok yourself.",
            "learn": [
              "GET/POST with fetch: headers, body, JSON serialization",
              "response.ok, status codes, and structured error handling",
              "Aborting requests with AbortController; timeouts and retries"
            ],
            "do": [
              "GET a public JSON API, handle 404 and network errors distinctly",
              "POST JSON to a test endpoint with correct Content-Type headers",
              "Add a 5-second timeout to fetch using AbortController"
            ],
            "tools": ["Node.js", "Browser DevTools"],
            "res": [
              ["MDN: Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"],
              ["JavaScript.info: Fetch", "https://javascript.info/fetch"]
            ]
          }
        ]
      },
      {
        "t": "Modern JavaScript: ES2020 to ES2025+",
        "d": "Modules, new syntax, and the features landing right now.",
        "lv": 2,
        "children": [
          {
            "t": "Modules: ESM vs CommonJS",
            "d": "import/export vs require — how modern JS code is organized and shared.",
            "lv": 2,
            "time": "~5h",
            "tip": "ESM imports are live bindings and hoisted; CommonJS require is a runtime function call. Mixing them is where config pain lives.",
            "learn": [
              "ESM: import/export, named vs default exports, live bindings",
              "CommonJS: require/module.exports, and why Node historically used it",
              "The interop reality: .mjs/.cjs, package.json type field, dynamic import()"
            ],
            "do": [
              "Split a script into three ESM modules with named and default exports",
              "Convert a CommonJS module to ESM and run it with node",
              "Use dynamic import() to lazy-load a heavy module on demand"
            ],
            "tools": ["Node.js", "Vite"],
            "res": [
              ["MDN: Modules", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"],
              ["JavaScript.info: Modules", "https://javascript.info/modules-intro"]
            ]
          },
          {
            "t": "Optional Chaining, Nullish & Logical Assignment",
            "d": "Writing less defensive code: ?., ??, ||=, &&=, ??=.",
            "lv": 2,
            "time": "~3h",
            "tip": "?? treats only null/undefined as missing; || treats all falsy as missing. Picking wrong silently breaks 0 and '' values.",
            "learn": [
              "?. for safe deep access and optional method calls",
              "?? for defaults that respect 0, '', and false",
              "Logical assignment: a ||= b, a &&= b, a ??= b"
            ],
            "do": [
              "Safely read user.profile.address.city from possibly-missing nesting, with a fallback",
              "Replace three || defaults with ?? where 0/'' are valid values",
              "Refactor a config-merge function using ??= and ||="
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Optional chaining", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"],
              ["JavaScript.info: Optional chaining", "https://javascript.info/optional-chaining"]
            ]
          },
          {
            "t": "Top-Level Await & Modern Syntax Bits",
            "d": "await at module top level, numeric separators, private fields, and other modern polish.",
            "lv": 2,
            "time": "~3h",
            "tip": "Top-level await only works in modules, not plain scripts. If it throws 'await is a reserved word', check your module type.",
            "learn": [
              "Top-level await in ESM: when it helps and how it affects module loading",
              "Numeric separators (1_000_000), String.replaceAll, Array.at(-1)",
              "Private class fields (#x) and static blocks"
            ],
            "do": [
              "Fetch config with top-level await in a .mjs module",
              "Use Array.at(-1) and replaceAll to clean up two old code patterns",
              "Build a class with #private state and a static initialization block"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Top-level await", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"],
              ["JavaScript.info: What's new", "https://javascript.info/"]
            ]
          },
          {
            "t": "ES2024: groupBy, Promise.withResolvers & RegExp v-flag",
            "d": "The 2024 standard's headline features, now safe to use everywhere.",
            "lv": 2,
            "time": "~4h",
            "tip": "Object.groupBy returns a plain object; Map.groupBy returns a Map. Choose based on whether you need non-string keys.",
            "learn": [
              "Object.groupBy / Map.groupBy: grouping without reduce boilerplate",
              "Promise.withResolvers(): the deferred pattern built into the language",
              "RegExp v flag: set notation, string literals in character classes",
              "String.isWellFormed/toWellFormed and resizable ArrayBuffers"
            ],
            "do": [
              "Group an array of orders by status with Object.groupBy",
              "Replace a hand-rolled deferred with Promise.withResolvers()",
              "Write a v-flag regex matching emoji ranges with set subtraction"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Object.groupBy", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy"],
              ["TC39: ES2024 features", "https://github.com/tc39/ecma262"]
            ]
          },
          {
            "t": "ES2025+ & the Road Ahead",
            "d": "Iterator helpers, Set methods, and what's cooking at TC39 (Temporal, decorators).",
            "lv": 3,
            "time": "~5h",
            "tip": "Stage 3 proposals (like Temporal) are near-final but not standard yet — use polyfills, not production dependence.",
            "learn": [
              "ES2025: Iterator helpers (.map/.filter/.take on iterators), Set union/intersection/difference",
              "Float16Array and RegExp.escape for typed arrays and safe escaping",
              "Stage 3 to watch: Temporal (sane dates), decorators, explicit resource management"
            ],
            "do": [
              "Process a huge range lazily with iterator helpers instead of building an array",
              "Compute set operations (union, intersection) with the new Set methods",
              "Try the Temporal polyfill for a timezone-safe date calculation"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Iterator helpers", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator"],
              ["TC39 proposals", "https://github.com/tc39/proposals"]
            ],
            "tag": "opt"
          },
          {
            "t": "Strict Mode",
            "d": "'use strict': the opt-in that turns silent bugs into loud errors.",
            "lv": 2,
            "time": "~2h",
            "tip": "Modules are strict by default. If you're writing ESM, you're already getting most of strict mode's protection.",
            "learn": [
              "What strict mode forbids: implicit globals, duplicate params, deleting variables",
              "How this behaves differently in strict functions",
              "Why modern code rarely writes 'use strict' explicitly anymore"
            ],
            "do": [
              "Assign to an undeclared variable in sloppy vs strict mode and compare outcomes",
              "Find the silent bug strict mode would have caught in a legacy snippet",
              "Confirm a .mjs module runs in strict mode without the directive"
            ],
            "tools": ["Node.js"],
            "res": [
              ["MDN: Strict mode", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"]
            ]
          }
        ]
      },
      {
        "t": "The Browser: DOM & Web APIs",
        "d": "Making pages alive: the DOM, events, storage, and browser APIs.",
        "lv": 1,
        "children": [
          {
            "t": "The DOM: Selecting & Manipulating",
            "d": "querySelector, creating elements, and changing pages with code.",
            "lv": 1,
            "time": "~5h",
            "tip": "Cache your querySelector results in variables. Re-querying the DOM in a loop is slow and noisy.",
            "learn": [
              "Selecting: querySelector/querySelectorAll vs getElementById/getElementsByClassName",
              "Changing content and attributes: textContent vs innerHTML (and the XSS risk)",
              "Creating, appending, and removing nodes; classList for styling"
            ],
            "do": [
              "Build a dynamic list: add items from an input, delete on button click",
              "Toggle a dark-mode class on body with classList",
              "Rewrite an innerHTML-based snippet using textContent to kill an XSS hole"
            ],
            "tools": ["Browser DevTools"],
            "res": [
              ["MDN: DOM", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"],
              ["JavaScript.info: DOM", "https://javascript.info/dom-nodes"]
            ]
          },
          {
            "t": "Events: Listening, Bubbling & Delegation",
            "d": "addEventListener, the event object, and the delegation pattern that scales.",
            "lv": 1,
            "time": "~5h",
            "tip": "Event delegation (one listener on a parent) beats 100 listeners on children — fewer leaks, works for dynamically added elements.",
            "learn": [
              "addEventListener, the event object, preventDefault vs stopPropagation",
              "Bubbling vs capturing: how events travel through the DOM",
              "Delegation: handling dynamic lists with a single parent listener"
            ],
            "do": [
              "Log the bubbling path by adding listeners at three nested levels",
              "Build a todo list where delete buttons work via delegation (no per-item listeners)",
              "Prevent a form's default submit and validate it with JS instead"
            ],
            "tools": ["Browser DevTools"],
            "res": [
              ["MDN: Events", "https://developer.mozilla.org/en-US/docs/Web/Events"],
              ["JavaScript.info: Events", "https://javascript.info/events"]
            ]
          },
          {
            "t": "Web Storage & Cookies",
            "d": "localStorage, sessionStorage, cookies — and what belongs where.",
            "lv": 1,
            "time": "~4h",
            "tip": "Never store tokens or secrets in localStorage — any script on the page (including injected ones) can read them.",
            "learn": [
              "localStorage vs sessionStorage: lifetime, scope, and the 5MB limit",
              "Cookies: httpOnly, Secure, SameSite — and why auth tokens live there",
              "JSON in storage: stringify on save, parse on load, and quota errors"
            ],
            "do": [
              "Persist a theme preference across reloads with localStorage",
              "Build a note-taking app that saves drafts to storage on every keystroke",
              "Inspect cookies in DevTools Application tab and read their flags"
            ],
            "tools": ["Browser DevTools"],
            "res": [
              ["MDN: Web Storage", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"],
              ["JavaScript.info: LocalStorage", "https://javascript.info/localstorage"]
            ]
          },
          {
            "t": "Forms & User Input",
            "d": "Reading input, validating, and giving feedback without a framework.",
            "lv": 1,
            "time": "~4h",
            "tip": "Validate on the client for UX, on the server for security. Client-side validation is a courtesy, not a defense.",
            "learn": [
              "Reading values: input, select, checkbox, radio, FormData",
              "Validation: required, patterns, custom checks, and showing errors",
              "Live feedback: input events, debounced search-as-you-type"
            ],
            "do": [
              "Build a signup form with live validation messages per field",
              "Collect a whole form with FormData and log the entries",
              "Add a debounced search box that filters a list as you type"
            ],
            "tools": ["Browser DevTools"],
            "res": [
              ["MDN: Forms", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms"],
              ["JavaScript.info: Forms", "https://javascript.info/forms-controls"]
            ]
          },
          {
            "t": "Web APIs Tour: Canvas, Geolocation & More",
            "d": "A guided tour of what the browser can do beyond the DOM.",
            "lv": 2,
            "time": "~5h",
            "tip": "Most powerful Web APIs require HTTPS and user permission. Design for the 'denied' case from the start.",
            "learn": [
              "Canvas 2D: drawing shapes, animation with requestAnimationFrame",
              "Geolocation, Notifications, Clipboard APIs and their permission model",
              "IntersectionObserver for lazy loading and infinite scroll"
            ],
            "do": [
              "Draw and animate a bouncing ball on a canvas with requestAnimationFrame",
              "Lazy-load images with IntersectionObserver",
              "Request geolocation and handle the permission-denied path gracefully"
            ],
            "tools": ["Browser DevTools"],
            "res": [
              ["MDN: Canvas", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"],
              ["JavaScript.info: Binary data", "https://javascript.info/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Tooling & Real-World Craft",
        "d": "npm, bundlers, linting, testing, and the performance mindset.",
        "lv": 2,
        "children": [
          {
            "t": "npm: The Package Ecosystem",
            "d": "Installing, scripts, semver — participating in the world's biggest code registry.",
            "lv": 2,
            "time": "~4h",
            "tip": "Commit your lockfile. It's the only thing guaranteeing your teammate installs the exact same tree you tested.",
            "learn": [
              "npm install, package.json, node_modules, and the lockfile",
              "Semver: ^ vs ~ vs exact, and what 'breaking change' means",
              "npm scripts: your project's task runner, hiding in plain sight"
            ],
            "do": [
              "Init a project, install a package, and write an npm script that runs your code",
              "Break then fix an install by deleting node_modules and reinstalling from the lockfile",
              "Audit dependencies with npm audit and update one safely"
            ],
            "tools": ["npm", "Node.js"],
            "res": [
              ["npm docs", "https://docs.npmjs.com/"],
              ["Node.js: npm guide", "https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager"]
            ]
          },
          {
            "t": "Bundlers: Vite, esbuild & Rollup",
            "d": "Why browsers can't just import your source — and how bundlers fix it.",
            "lv": 2,
            "time": "~5h",
            "tip": "For learning and most apps, Vite is the default answer in 2026. Reach for raw Rollup/esbuild only when building libraries or tooling.",
            "learn": [
              "What bundlers do: resolve imports, transpile, tree-shake, split code",
              "Vite's dev server vs production build; esbuild's raw speed",
              "Source maps: debugging bundled code as if it were your source"
            ],
            "do": [
              "Scaffold a Vite project and inspect what the dev server serves vs the build output",
              "Import an npm package in the browser via the bundle — no script-tag hacks",
              "Enable a source map and debug bundled code in DevTools"
            ],
            "tools": ["Vite", "esbuild", "Rollup"],
            "res": [
              ["Vite guide", "https://vite.dev/guide/"],
              ["esbuild docs", "https://esbuild.github.io/"]
            ]
          },
          {
            "t": "ESLint & Prettier",
            "d": "Automated code review and formatting — consistency without arguments.",
            "lv": 2,
            "time": "~4h",
            "tip": "Let Prettier own formatting and ESLint own logic/style rules. Running both on the same concern causes config wars.",
            "learn": [
              "ESLint: rules, configs, and the flat config format (eslint.config.js)",
              "Prettier: opinionated formatting, editor integration, pre-commit hooks",
              "The no-unused-vars to no-eval pipeline: which rules actually catch bugs"
            ],
            "do": [
              "Add ESLint flat config + Prettier to a project and fix all reported issues",
              "Write a git pre-commit hook that lints and formats staged files",
              "Configure one custom rule (e.g. ban console.log) and watch it fire"
            ],
            "tools": ["ESLint", "Prettier"],
            "res": [
              ["ESLint docs", "https://eslint.org/docs/latest/"],
              ["Prettier docs", "https://prettier.io/docs/"]
            ]
          },
          {
            "t": "Testing: Vitest & Jest",
            "d": "Unit tests that prove your code works — and keep it working.",
            "lv": 2,
            "time": "~6h",
            "tip": "Test behavior, not implementation. Tests that break on every refactor are worse than no tests.",
            "learn": [
              "Test structure: describe/it/expect, assertions, and matchers",
              "Mocking: isolating the unit under test with vi.mock / jest.mock",
              "What to test: pure functions first, then integration seams"
            ],
            "do": [
              "Write unit tests for a utility module (string/date helpers) with Vitest",
              "Mock fetch to test an API client without network access",
              "Reach 80%+ coverage on the module and read the coverage report"
            ],
            "tools": ["Vitest", "Jest"],
            "res": [
              ["Vitest guide", "https://vitest.dev/guide/"],
              ["Jest docs", "https://jestjs.io/docs/getting-started"]
            ]
          },
          {
            "t": "Debugging Performance & Memory Leaks",
            "d": "Finding what's slow and what's leaking with DevTools profiling.",
            "lv": 3,
            "time": "~6h",
            "tip": "Measure first, optimize second. Most 'slow JS' is actually layout thrash or unthrottled event handlers, not slow algorithms.",
            "learn": [
              "Performance panel: flame charts, long tasks, and finding jank",
              "Memory panel: heap snapshots and the three-snapshot leak detection technique",
              "Common leaks: forgotten timers, detached DOM nodes, ever-growing caches"
            ],
            "do": [
              "Profile a janky animation, find the long task, and fix it",
              "Create a deliberate leak (interval holding DOM), find it with heap snapshots",
              "Throttle a scroll handler and measure the frame-rate improvement"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["MDN: Performance", "https://developer.mozilla.org/en-US/docs/Web/Performance"],
              ["Chrome: Memory leaks", "https://developer.chrome.com/docs/devtools/memory-problems/"]
            ]
          },
          {
            "t": "Memory Management & Garbage Collection",
            "d": "How JS frees memory — and how to stop fighting the collector.",
            "lv": 3,
            "time": "~4h",
            "tip": "You can't force GC in production JS. Write allocation-friendly code (reuse objects, avoid closures in hot loops) instead of fighting it.",
            "learn": [
              "Mark-and-sweep: reachability is what keeps objects alive",
              "Generational GC: why short-lived objects are cheap and old ones are expensive",
              "WeakRef and FinalizationRegistry: the escape hatches (and why to avoid them)"
            ],
            "do": [
              "Demonstrate a closure accidentally retaining a huge array",
              "Compare memory churn of string concatenation vs array join in a loop",
              "Use a WeakMap cache and verify entries disappear when keys are dropped"
            ],
            "tools": ["Node.js", "Chrome DevTools"],
            "res": [
              ["MDN: Memory management", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"],
              ["JavaScript.info: GC", "https://javascript.info/garbage-collection"]
            ]
          },
          {
            "t": "Capstone: Build & Ship a JS App",
            "d": "Put it all together: a real app, tested, linted, bundled, and deployed.",
            "lv": 2,
            "time": "~2w",
            "tip": "Scope small, finish completely. A polished tiny app teaches more than an abandoned ambitious one.",
            "learn": [
              "Planning a feature set you can actually finish in two weeks",
              "Structuring modules: separation of data, UI, and API layers",
              "Deploying a static app: build, preview, and ship"
            ],
            "do": [
              "Build a working app (e.g. habit tracker with localStorage) in ESM modules",
              "Add ESLint + Prettier + Vitest tests and make them all pass",
              "Bundle with Vite and deploy the production build"
            ],
            "tools": ["Vite", "Vitest", "ESLint"],
            "res": [
              ["Vite: deploying", "https://vite.dev/guide/static-deploy.html"],
              ["MDN: JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
