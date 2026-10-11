/* Atlas roadmap data: React (react) */
ROADMAPS.push({
  "id": "react",
  "title": "React",
  "icon": "⚛️",
  "color": "#61dafb",
  "desc": "Build interactive user interfaces with the world's most-used UI library: components, hooks, state, performance, testing, and the modern React ecosystem.",
  "kind": "skill",
  "root": {
    "t": "React Development",
    "d": "From your first component to production-grade React apps.",
    "children": [
      {
        "t": "Foundations and Tooling",
        "d": "What React is, how it thinks, and getting a project running.",
        "lv": 1,
        "children": [
          {
            "t": "What React Is: The Component Model",
            "d": "Understand React's core idea: UI as a function of state, split into reusable components.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Declarative UI: you describe what the UI should look like, React updates the DOM",
              "Components as pure-ish functions of props and state",
              "Why React exists: direct DOM manipulation does not scale in complex apps"
            ],
            "do": [
              "Read the react.dev 'Quick Start' page and run the embedded examples",
              "Draw a real page you use daily as boxes: each box is one component",
              "Explain out loud what 'UI = f(state)' means in your own words"
            ],
            "tools": ["react.dev"],
            "res": [
              ["React docs: Quick Start", "https://react.dev/learn"],
              ["React docs: Thinking in React", "https://react.dev/learn/thinking-in-react"]
            ],
            "tip": "Beginners try to learn React before JavaScript. If map/filter, arrow functions, destructuring, and modules feel shaky, fix that first or everything in React will feel like magic."
          },
          {
            "t": "JSX, Not HTML",
            "d": "Learn JSX syntax rules: the small differences from HTML that trip everyone up at first.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "JSX compiles to React.createElement calls, not HTML strings",
              "className, htmlFor, camelCase attributes, and self-closing tags",
              "Embedding JavaScript with curly braces and returning a single root element"
            ],
            "do": [
              "Write 5 small JSX snippets and paste each into the Babel REPL to see the compiled output",
              "Convert a chunk of plain HTML into valid JSX by hand",
              "Practice conditional expressions inside JSX with && and ternaries"
            ],
            "tools": ["Babel REPL", "Vite"],
            "res": [
              ["React docs: Writing Markup with JSX", "https://react.dev/learn/writing-markup-with-jsx"],
              ["Babel REPL", "https://babeljs.io/repl"]
            ],
            "tip": "JSX looks like HTML but behaves like JavaScript. if statements and for loops cannot go inside JSX directly; use ternaries, &&, or map() instead."
          },
          {
            "t": "Project Setup with Vite",
            "d": "Scaffold a modern React project with Vite and learn the dev loop: run, edit, hot-reload.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "What Vite does: dev server, hot module replacement, and production bundling",
              "Project structure: index.html, src/main.jsx, src/App.jsx",
              "Dev vs build: npm run dev for work, npm run build for a shippable bundle"
            ],
            "do": [
              "Run npm create vite@latest my-app -- --template react and start the dev server",
              "Change the App component text and watch hot reload update instantly",
              "Run npm run build and inspect the dist/ output folder"
            ],
            "tools": ["Vite", "npm", "Node.js"],
            "res": [
              ["Vite guide", "https://vite.dev/guide/"],
              ["React docs: Start a New React Project", "https://react.dev/learn/start-a-new-react-project"]
            ],
            "tip": "Do not use Create React App anymore; it is deprecated. Vite is the standard way to start a React project in 2026."
          },
          {
            "t": "How React Renders: Reconciliation Basics",
            "d": "Build a mental model of rendering: React re-runs your component functions and diffs the result.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Render = React calls your component function again; commit = DOM updates",
              "The virtual DOM is a diffing strategy, not a second DOM you interact with",
              "Reconciliation: React compares new and old trees and applies minimal DOM changes"
            ],
            "do": [
              "Add console.log inside a component, change state, and watch it re-render in the console",
              "Toggle a piece of UI and inspect in DevTools Elements what actually changed",
              "Sketch on paper what the component tree looks like for a small app"
            ],
            "tools": ["React DevTools"],
            "res": [
              ["React docs: Render and Commit", "https://react.dev/learn/render-and-commit"],
              ["React docs: Preserving and Resetting State", "https://react.dev/learn/preserving-and-resetting-state"]
            ],
            "tip": "A re-render does not mean the DOM was touched. React re-runs the function cheaply, then only updates what actually changed. Most performance panic is premature."
          },
          {
            "t": "React DevTools",
            "d": "Install the browser DevTools and learn to inspect the component tree, props, and state live.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Components tab: navigate the tree, inspect props, state, and hooks",
              "Highlighting updates to see which components re-render",
              "Editing props and state live to test UI states without code changes"
            ],
            "do": [
              "Install the React DevTools extension and open it on your Vite app",
              "Select a component and change its props in the panel to see the UI react",
              "Enable 'Highlight updates when components render' and interact with your app"
            ],
            "tools": ["React DevTools"],
            "res": [
              ["React DevTools", "https://react.dev/learn/react-developer-tools"]
            ],
            "tip": "When something renders wrong, check the Components tab before the console. Nine times out of ten the props or state are not what you assumed."
          },
          {
            "t": "StrictMode and Development Warnings",
            "d": "Understand why StrictMode double-invokes things and how to read React's warnings as free bug reports.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "StrictMode double-renders components in dev to surface impure components",
              "How to read the console warnings React gives you (keys, hooks order, etc.)",
              "StrictMode is dev-only: it never affects your production build"
            ],
            "do": [
              "Check that your Vite template wraps App in <StrictMode>",
              "Add a console.log in a component and confirm it fires twice in dev",
              "Deliberately cause a 'unique key' warning and fix it"
            ],
            "tools": ["Vite", "React DevTools"],
            "res": [
              ["React docs: StrictMode", "https://react.dev/reference/react/StrictMode"]
            ],
            "tip": "Double effects in dev are not a bug. If your code breaks because an effect ran twice, the effect was written wrong; make effects idempotent."
          }
        ]
      },
      {
        "t": "Components and Props",
        "d": "Build and compose components; master the one-way flow of data via props.",
        "lv": 1,
        "children": [
          {
            "t": "Your First Functional Component",
            "d": "Write function components from scratch: naming, returning JSX, and exporting.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "A component is a JavaScript function whose name starts with a capital letter",
              "One component per file is the common convention, default export from the file",
              "Components can call other components; that nesting is the whole game"
            ],
            "do": [
              "Create ProfileCard.jsx that renders a name, role, and avatar",
              "Render three different ProfileCards inside App",
              "Refactor one big App.jsx into three smaller component files"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Your First Component", "https://react.dev/learn/your-first-component"]
            ],
            "tip": "Capital letter matters. <profileCard> is treated as an HTML tag; <ProfileCard> is treated as your component. Lowercase names silently render nothing useful."
          },
          {
            "t": "Props: One-Way Data Flow",
            "d": "Pass data down with props, destructure them, and respect that props are read-only.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Props flow down from parent to child, never up",
              "Destructuring props in the parameter list for clean code",
              "Props are immutable: never assign to props, lift state up instead"
            ],
            "do": [
              "Pass name, role, and avatarUrl props into ProfileCard and render them",
              "Pass a function as a prop (onSelect) and call it from the child on click",
              "Try mutating a prop and observe React ignoring it or warning you"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Passing Props to a Component", "https://react.dev/learn/passing-props-to-a-component"]
            ],
            "tip": "When two components need the same data, the state lives in their closest common parent. Beginners duplicate state in both children; lift it up instead."
          },
          {
            "t": "Conditional Rendering",
            "d": "Show and hide UI with if, ternaries, &&, and early returns, and know each pattern's place.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Ternaries for either/or UI, && for show-or-nothing",
              "Early returns to bail out of a component before the main JSX",
              "Keeping conditional logic out of JSX when it gets complex"
            ],
            "do": [
              "Build a login/logout toggle that swaps the UI with a ternary",
              "Show a loading spinner with && while data is fetching",
              "Refactor nested ternaries into early returns or small subcomponents"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Conditional Rendering", "https://react.dev/learn/conditional-rendering"]
            ],
            "tip": "0 && <Component> renders the number 0 on screen. Guard numeric values explicitly ({count > 0 && ...}) instead of relying on && alone."
          },
          {
            "t": "Lists, Keys, and Why Keys Matter",
            "d": "Render arrays with map() and give each item a stable key so React can track identity.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "map() turns data arrays into element arrays",
              "Keys tell React which item is which across renders; they must be stable and unique",
              "Using array index as key breaks reordering, filtering, and input focus"
            ],
            "do": [
              "Render a list of 10 items from an array with map()",
              "Build a todo list with add/delete and use database-style ids as keys",
              "Swap to index keys, reorder the list, and observe the visual bug it causes"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Rendering Lists", "https://react.dev/learn/rendering-lists"]
            ],
            "tip": "Keys are not for you, they are for React's diffing. If your list has inputs or animations and items shuffle weirdly, the key is the first suspect."
          },
          {
            "t": "Composition with children",
            "d": "Design flexible components using the children prop instead of hardcoding content.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "children is a special prop containing whatever is nested inside the tags",
              "Composition beats configuration: pass JSX, not a dozen boolean props",
              "Named slots pattern: pass multiple JSX chunks as separate props (header, footer)"
            ],
            "do": [
              "Build a Card component that renders {children} inside a styled wrapper",
              "Create a Modal shell where the caller supplies the body content",
              "Refactor a component with 6 boolean props into 2 composed pieces"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Passing JSX as children", "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children"]
            ],
            "tip": "If a component takes more than 3-4 props that only control layout, you probably want composition. Let the parent own the structure."
          },
          {
            "t": "Component Files and Folder Structure",
            "d": "Organize a growing app: feature folders, colocation, and naming conventions that scale.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Colocation: keep a component, its styles, and its test in the same folder",
              "Feature-based folders beat type-based folders as apps grow",
              "Barrel files (index.js re-exports): convenient but can hurt tree-shaking"
            ],
            "do": [
              "Reorganize your app into features/ with one folder per feature",
              "Move each component's CSS or test next to the component",
              "Write down your own naming rules and apply them consistently"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vite: project structure conventions", "https://vite.dev/guide/"]
            ],
            "tip": "Do not over-architect a small app. components/, hooks/, and a couple of feature folders carry you surprisingly far before you need more structure."
          }
        ]
      },
      {
        "t": "State and Core Hooks",
        "d": "Make UIs interactive with useState and useEffect, and learn the rules that keep hooks safe.",
        "lv": 1,
        "children": [
          {
            "t": "useState: Local Component State",
            "d": "Add memory to components with useState and update it through the setter function.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "useState returns [value, setter]; the setter schedules a re-render",
              "State updates are asynchronous and batched; never read state right after setting it",
              "Updater functions setCount(c => c + 1) when the new value depends on the old one"
            ],
            "do": [
              "Build a counter with increment, decrement, and reset",
              "Build a controlled text input that mirrors its value below it",
              "Fix a stale-closure bug by switching to the updater-function form"
            ],
            "tools": ["Vite", "React DevTools"],
            "res": [
              ["React docs: State: A Component's Memory", "https://react.dev/learn/state-a-components-memory"]
            ],
            "tip": "Calling the setter does not change the variable in the current render. The new value only exists on the next render; that is why reading it immediately after looks stale."
          },
          {
            "t": "Handling Events",
            "d": "Respond to clicks, inputs, and forms with event handlers written as plain functions.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Pass the function, don't call it: onClick={handleClick} vs onClick={handleClick()}",
              "The event object and preventDefault for forms and links",
              "Naming convention: handleX for the function, onX for the prop that receives it"
            ],
            "do": [
              "Wire up buttons that increment, decrement, and reset a counter",
              "Build a form that calls e.preventDefault() and logs the values",
              "Pass an event handler down as a prop and trigger it from a child"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Responding to Events", "https://react.dev/learn/responding-to-events"]
            ],
            "tip": "onClick={doThing()} calls doThing during render, usually causing an infinite loop. You want onClick={doThing} or onClick={() => doThing(arg)}."
          },
          {
            "t": "Controlled Components",
            "d": "Drive form inputs from React state so the UI is always the single source of truth.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Controlled input: value={state} plus onChange that updates the state",
              "Uncontrolled inputs read via refs; controlled inputs are the React default",
              "One state object vs many useState calls for multi-field forms"
            ],
            "do": [
              "Build a signup form (name, email, password) with fully controlled inputs",
              "Add live validation messages that update as the user types",
              "Disable the submit button until all fields are valid"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: useState examples with inputs", "https://react.dev/reference/react/useState"]
            ],
            "tip": "Forgetting onChange on a controlled input makes it read-only and React warns you. value without onChange is a frozen input; that warning is a gift."
          },
          {
            "t": "useEffect: Syncing with the Outside World",
            "d": "Learn the effect model: effects synchronize your component with external systems.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Effects run after render and re-run when their dependencies change",
              "The mental model is synchronization, not lifecycle: 'when X changes, keep Y in sync'",
              "Cleanup functions undo the effect: unsubscribe, clear timers, abort fetches"
            ],
            "do": [
              "Fetch data from a public API in useEffect and render the result",
              "Add a cleanup that aborts the fetch with AbortController on unmount",
              "Sync document.title with a piece of state using an effect"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Synchronizing with Effects", "https://react.dev/learn/synchronizing-with-effects"],
              ["React docs: useEffect reference", "https://react.dev/reference/react/useEffect"]
            ],
            "tip": "If your effect has no dependencies you actually use inside it, or it only exists to transform props into state, you probably do not need an effect at all."
          },
          {
            "t": "The Effect Dependency Array",
            "d": "Master the dependency array: the source of most useEffect bugs and infinite loops.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Every reactive value used inside the effect must be listed as a dependency",
              "Missing dependencies cause stale data; unstable ones cause infinite loops",
              "The exhaustive-deps lint rule exists to enforce this; never disable it blindly"
            ],
            "do": [
              "Enable eslint-plugin-react-hooks and fix every exhaustive-deps warning in your app",
              "Create an infinite loop with an object dependency, then fix it with useMemo or primitives",
              "Move a function used by an effect inside the effect to stabilize dependencies"
            ],
            "tools": ["eslint-plugin-react-hooks", "Vite"],
            "res": [
              ["React docs: Lifecycle of Reactive Effects", "https://react.dev/learn/lifecycle-of-reactive-effects"]
            ],
            "tip": "Lying to the dependency array silences the linter but creates a bug that only shows up in production. Fix the code, not the warning."
          },
          {
            "t": "Rules of Hooks",
            "d": "Internalize the two rules: top-level only, and React components or custom hooks only.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Hooks must be called in the same order every render: no hooks in loops, conditions, or nested functions",
              "Why the rule exists: React tracks hooks by call order in an internal array",
              "Custom hooks let you reuse hook logic while following the rules"
            ],
            "do": [
              "Break the rule on purpose with a conditional useState and observe the chaos",
              "Refactor it so the hook is always called and the condition moves inside",
              "Run the react-hooks lint rules over all your code and fix violations"
            ],
            "tools": ["eslint-plugin-react-hooks"],
            "res": [
              ["React docs: Rules of Hooks", "https://react.dev/reference/rules/rules-of-hooks"]
            ],
            "tip": "Early returns before hooks break the order. Put all hooks first, then early-return afterwards; that single habit prevents a whole class of bugs."
          },
          {
            "t": "Building Custom Hooks",
            "d": "Extract reusable stateful logic into custom hooks: the main way React code gets shared.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "A custom hook is a function starting with 'use' that calls other hooks",
              "Custom hooks share logic, not state: each caller gets its own state",
              "Return values designed for the call site: [value, actions] or objects"
            ],
            "do": [
              "Write useLocalStorage(key, initial) that persists state to localStorage",
              "Write useFetch(url) returning {data, loading, error}",
              "Write useToggle and useDebounce and use them in a real component"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Reusing Logic with Custom Hooks", "https://react.dev/learn/reusing-logic-with-custom-hooks"]
            ],
            "tip": "Name the hook after what it provides (useAuth, useCart), not how it is built. If two components need the same stateful behavior, that is a custom hook waiting to happen."
          }
        ]
      },
      {
        "t": "Advanced Hooks and Rendering",
        "d": "Refs, reducers, context, memoization, and the rendering behaviors that separate juniors from seniors.",
        "lv": 2,
        "children": [
          {
            "t": "useRef: Values That Survive Renders",
            "d": "Store mutable values and DOM nodes with refs without triggering re-renders.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "A ref is a {current} box that persists across renders and mutating it never re-renders",
              "DOM access: ref={inputRef} then inputRef.current.focus()",
              "Refs vs state: state drives UI, refs hold anything else (timers, previous values)"
            ],
            "do": [
              "Auto-focus an input on mount using a ref",
              "Track a previous value across renders with a ref updated in an effect",
              "Store an interval id in a ref and clear it from a different handler"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Referencing Values with Refs", "https://react.dev/learn/referencing-values-with-refs"],
              ["React docs: Manipulating the DOM with Refs", "https://react.dev/learn/manipulating-the-dom-with-refs"]
            ],
            "tip": "Do not read or write refs during rendering (except lazy init). Refs are an escape hatch for event handlers and effects, not a second state system."
          },
          {
            "t": "useReducer for Complex State",
            "d": "Manage state with many sub-values or intricate transitions using reducers and actions.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Reducer pattern: (state, action) => newState, with a dispatch function",
              "When useReducer beats useState: multiple related fields, next state depends on many values",
              "Action objects with type and payload keep transitions explicit and debuggable"
            ],
            "do": [
              "Rebuild a todo app with useReducer handling add, toggle, delete, and filter",
              "Write the reducer as a pure function and unit-test it without React",
              "Add an 'undo' action to see why explicit transitions pay off"
            ],
            "tools": ["Vite", "Vitest"],
            "res": [
              ["React docs: Extracting State Logic into a Reducer", "https://react.dev/learn/extracting-state-logic-into-a-reducer"]
            ],
            "tip": "Reducers must be pure: same inputs, same output, no mutations. If your reducer mutates state, React will not notice and the UI will silently go stale."
          },
          {
            "t": "Context and useContext",
            "d": "Share values across the tree without prop drilling, and know exactly when not to use context.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "createContext, Provider, and useContext: the three pieces",
              "Context is for stable, rarely-changing values (theme, auth, locale)",
              "Context is not a state manager: every consumer re-renders when the value changes"
            ],
            "do": [
              "Build a ThemeContext with a toggle consumed three levels deep",
              "Build an AuthContext providing the current user to the whole app",
              "Split a context into two (state + actions) to stop unnecessary re-renders"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Passing Data Deeply with Context", "https://react.dev/learn/passing-data-deeply-with-context"]
            ],
            "tip": "Putting fast-changing state (like a text input value) in context re-renders every consumer on each keystroke. Context broadcasts; it does not subscribe selectively."
          },
          {
            "t": "useMemo and useCallback",
            "d": "Cache expensive values and stabilize function identities, applied only where profiling says so.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "useMemo caches a computed value; useCallback caches a function identity",
              "The real use case is referential stability for memoized children and effect deps",
              "Memoization has a cost; applying it everywhere slows code and hurts readability"
            ],
            "do": [
              "Memoize an expensive list filter and measure the difference with React DevTools Profiler",
              "Fix a child that re-renders on every parent render using React.memo + useCallback",
              "Remove memoization from a component and confirm nothing changes, to feel the cost"
            ],
            "tools": ["React DevTools Profiler"],
            "res": [
              ["React docs: useMemo", "https://react.dev/reference/react/useMemo"],
              ["React docs: useCallback", "https://react.dev/reference/react/useCallback"]
            ],
            "tip": "Do not memoize by default. Profile first, then memoize the actual bottleneck. The React Compiler now handles many of these cases automatically in new apps."
          },
          {
            "t": "Re-renders: What Triggers Them",
            "d": "Understand the full render cascade: state changes, parent renders, and context updates.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "A component re-renders when its own state changes, its parent renders, or consumed context changes",
              "React.memo skips re-renders when props are unchanged (shallow compare)",
              "State colocation: moving state down the tree is the simplest performance fix"
            ],
            "do": [
              "Use the DevTools Profiler to record an interaction and find wasted renders",
              "Fix a slow list by colocating per-row state inside row components",
              "Apply React.memo to a pure component and verify the render count drops"
            ],
            "tools": ["React DevTools Profiler"],
            "res": [
              ["React docs: Profiler", "https://react.dev/reference/react/Profiler"]
            ],
            "tip": "Lifting state too high is the number one cause of slow React apps. Keep state as close as possible to where it is used; lift only when siblings truly share it."
          },
          {
            "t": "Error Boundaries",
            "d": "Catch rendering crashes gracefully with error boundaries instead of a blank white screen.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Error boundaries are class components with getDerivedStateFromError or componentDidCatch",
              "They catch render errors, lifecycle errors, and errors in constructors below them",
              "They do not catch event handler errors, async code, or errors in the boundary itself"
            ],
            "do": [
              "Write an ErrorBoundary class component with a fallback UI and reset button",
              "Wrap a crash-prone widget in it and throw on purpose to see the fallback",
              "Add error logging in componentDidCatch that posts to a fake endpoint"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: Error Boundaries", "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"]
            ],
            "tip": "Place boundaries around independent UI regions (sidebar, feed, widget), not just at the app root. One crashing widget should not take down the whole page."
          },
          {
            "t": "Suspense and Lazy Loading",
            "d": "Split your bundle and declaratively show fallbacks while code or data loads.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "React.lazy + Suspense splits a component into a separate chunk loaded on demand",
              "The fallback prop renders while the chunk loads; placement controls the loading UI granularity",
              "Suspense also coordinates async data with frameworks and data libraries"
            ],
            "do": [
              "Lazy-load a heavy route component and watch the network tab fetch a new chunk",
              "Wrap routes in Suspense with skeleton fallbacks",
              "Compare bundle sizes before and after splitting with a bundle analyzer"
            ],
            "tools": ["Vite", "rollup-plugin-visualizer"],
            "res": [
              ["React docs: Suspense", "https://react.dev/reference/react/Suspense"],
              ["React docs: lazy", "https://react.dev/reference/react/lazy"]
            ],
            "tip": "Lazy-load at route boundaries first; that is where the wins are. Lazy-loading tiny components adds network round-trips for no benefit."
          },
          {
            "t": "Portals",
            "d": "Render children into a different DOM node for modals, tooltips, and dropdowns that escape CSS traps.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "createPortal(child, domNode) renders into another DOM node while keeping React context and events",
              "Why modals need portals: overflow hidden and z-index stacking contexts trap them",
              "Event bubbling still follows the React tree, not the DOM tree"
            ],
            "do": [
              "Build a Modal with createPortal rendering into document.body",
              "Put the modal inside an overflow-hidden container and confirm it still displays correctly",
              "Add Escape-to-close and click-outside-to-close behavior"
            ],
            "tools": ["Vite"],
            "res": [
              ["React docs: createPortal", "https://react.dev/reference/react-dom/createPortal"]
            ],
            "tip": "Clicks inside a portal bubble to React parents as if the portal were not there. That is usually what you want, but it surprises people wiring document-level listeners.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Data, Routing, and Forms",
        "d": "Real apps fetch data, navigate between pages, and handle forms: the ecosystem does the heavy lifting.",
        "lv": 2,
        "children": [
          {
            "t": "Fetching Data: fetch and Axios",
            "d": "Make HTTP requests the manual way first, so you appreciate what data libraries automate.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The fetch-then-setState pattern with loading and error states",
              "Why manual fetching gets painful: caching, deduping, retries, background refetch",
              "Axios conveniences: JSON by default, interceptors, timeouts, error shapes"
            ],
            "do": [
              "Fetch a list from JSONPlaceholder with fetch, handling loading and error states",
              "Rewrite it with Axios and add a request interceptor that injects an auth token",
              "Trigger the same request twice and notice the duplicate network calls"
            ],
            "tools": ["Axios", "JSONPlaceholder"],
            "res": [
              ["Axios docs", "https://axios-http.com/docs/intro"],
              ["MDN: fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"]
            ],
            "tip": "Manual useEffect fetching is fine for learning and tiny apps, but it does not cache. The moment two components need the same data, reach for TanStack Query."
          },
          {
            "t": "Server State with TanStack Query",
            "d": "Treat server data as a cache: declarative fetching with caching, retries, and background updates.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Server state vs client state: different problems, different tools",
              "Query keys identify cached data; useQuery handles loading, error, and refetch",
              "Stale-while-revalidate: show cached data instantly, refresh in the background"
            ],
            "do": [
              "Install @tanstack/react-query, wrap your app in QueryClientProvider",
              "Convert a manual fetch into useQuery with a proper query key",
              "Open React Query Devtools and watch the cache states (fresh, stale, fetching)"
            ],
            "tools": ["TanStack Query", "TanStack Query Devtools"],
            "res": [
              ["TanStack Query docs", "https://tanstack.com/query/latest/docs/framework/react/overview"]
            ],
            "tip": "Query keys are the API contract of your cache. ['todos', id] and ['todos'] are different caches; design keys hierarchically so invalidations hit the right scope."
          },
          {
            "t": "Mutations and Cache Updates",
            "d": "Write data with useMutation and keep the UI snappy with invalidations and optimistic updates.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "useMutation for POST/PUT/DELETE with onSuccess, onError, onSettled callbacks",
              "Invalidating queries after a mutation to refetch fresh data",
              "Optimistic updates: update the cache immediately, roll back on error"
            ],
            "do": [
              "Build a create-todo mutation that invalidates the todos query on success",
              "Implement an optimistic toggle-complete with rollback on failure",
              "Show pending UI states on the submit button during the mutation"
            ],
            "tools": ["TanStack Query"],
            "res": [
              ["TanStack Query: Mutations", "https://tanstack.com/query/latest/docs/framework/react/guides/mutations"],
              ["TanStack Query: Optimistic Updates", "https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates"]
            ],
            "tip": "Optimistic updates need a rollback plan. Always snapshot the previous cache in onMutate and restore it in onError, or failures leave ghost data."
          },
          {
            "t": "React Router: Routes and Navigation",
            "d": "Turn a single-page app into many pages with declarative routing.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "BrowserRouter, Routes, Route, and Link: the four primitives",
              "Client-side routing swaps components without full page reloads",
              "useParams, useNavigate, and useLocation for reading and changing the URL"
            ],
            "do": [
              "Install react-router and set up routes for Home, About, and a 404 page",
              "Build a nav bar with Link components and active styling via NavLink",
              "Navigate programmatically after a form submit with useNavigate"
            ],
            "tools": ["React Router"],
            "res": [
              ["React Router docs", "https://reactrouter.com/"]
            ],
            "tip": "Use Link, not <a href>, for internal navigation. A plain anchor triggers a full page reload and throws away all your client state."
          },
          {
            "t": "Nested Routes, Params, and Loaders",
            "d": "Model real app structure with nested layouts, dynamic segments, and route data loading.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Nested routes with Outlet for shared layouts (sidebar + content)",
              "Dynamic segments like /users/:id and reading them with useParams",
              "Route loaders: fetch data before the route renders, colocated with the route"
            ],
            "do": [
              "Build a dashboard layout with nested routes sharing a sidebar",
              "Create a user detail page at /users/:userId driven by the param",
              "Add a loader that fetches the user before render and handle its error state"
            ],
            "tools": ["React Router"],
            "res": [
              ["React Router: Routing tutorial", "https://reactrouter.com/start/tutorial"]
            ],
            "tip": "Loaders run before render, which kills the fetch-then-render waterfall. If your route shows a spinner after the layout appears, that data belongs in a loader."
          },
          {
            "t": "Forms with React Hook Form",
            "d": "Handle complex forms with uncontrolled inputs, minimal re-renders, and clean validation wiring.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "register() wires inputs as uncontrolled for performance",
              "handleSubmit, formState (errors, isSubmitting), and reset",
              "Controller for integrating controlled UI library inputs"
            ],
            "do": [
              "Install react-hook-form and rebuild your signup form with register()",
              "Display field-level error messages from formState.errors",
              "Integrate a third-party select component using Controller"
            ],
            "tools": ["React Hook Form"],
            "res": [
              ["React Hook Form docs", "https://react-hook-form.com/get-started"]
            ],
            "tip": "React Hook Form is uncontrolled by default, which is why it is fast. Do not force controlled inputs everywhere; use Controller only where a component demands it."
          },
          {
            "t": "Schema Validation with Zod",
            "d": "Define validation once as a schema and get runtime checks plus TypeScript types for free.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Zod schemas: z.string().min(3), z.object({...}), refinements",
              "Wiring Zod into React Hook Form with zodResolver",
              "z.infer<typeof schema> derives the TypeScript type from the schema"
            ],
            "do": [
              "Write a Zod schema for your signup form with email and password rules",
              "Connect it via @hookform/resolvers and watch errors appear automatically",
              "Reuse the same schema to validate data coming from an API response"
            ],
            "tools": ["Zod", "React Hook Form"],
            "res": [
              ["Zod docs", "https://zod.dev/"]
            ],
            "tip": "Validate on the server too. Client validation is UX; server validation is security. Never trust the browser."
          }
        ]
      },
      {
        "t": "Styling and UI Libraries",
        "d": "Make it look good: utility CSS, component libraries, and animation without the pain.",
        "lv": 2,
        "children": [
          {
            "t": "Tailwind CSS in React",
            "d": "Style with utility classes directly in JSX and configure Tailwind for a Vite React project.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Utility-first mindset: compose small classes instead of writing custom CSS",
              "Setting up the Tailwind Vite plugin and the @import \"tailwindcss\" entry",
              "Responsive (md:) and state (hover:, dark:) variants"
            ],
            "do": [
              "Install Tailwind in your Vite app following the official Vite guide",
              "Rebuild your ProfileCard with utility classes only",
              "Build a responsive navbar that collapses on mobile"
            ],
            "tools": ["Tailwind CSS", "Vite"],
            "res": [
              ["Tailwind: Install with Vite", "https://tailwindcss.com/docs/installation/using-vite"]
            ],
            "tip": "Long class strings are normal; extract repeated patterns into small components, not into @apply soup. Components are the abstraction, not CSS classes."
          },
          {
            "t": "CSS Modules and Scoped Styles",
            "d": "Scope styles to components with CSS Modules when utility classes are not the right tool.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "CSS Modules hash class names so styles never leak between components",
              "The styles object pattern: import styles from './Card.module.css'",
              "When to pick CSS Modules over Tailwind: complex animations, legacy CSS, print styles"
            ],
            "do": [
              "Convert one component from global CSS to a .module.css file",
              "Compose classes conditionally with template literals or clsx",
              "Style a third-party component you cannot add classes to"
            ],
            "tools": ["Vite", "clsx"],
            "res": [
              ["Vite: CSS Modules", "https://vite.dev/guide/features.html#css-modules"]
            ],
            "tip": "CSS Modules work out of the box in Vite: any file named *.module.css is automatically scoped. No config needed."
          },
          {
            "t": "shadcn/ui: Copy-Paste Components",
            "d": "Add polished, accessible components you own: shadcn/ui is code in your repo, not a dependency.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The shadcn model: the CLI copies component source into your project for full ownership",
              "Built on Radix primitives plus Tailwind: accessible by default",
              "Customizing via CSS variables and the components.json config"
            ],
            "do": [
              "Initialize shadcn in your Vite app and add the Button and Dialog components",
              "Build a settings dialog using the generated components",
              "Customize the theme colors and see every component follow"
            ],
            "tools": ["shadcn/ui", "Tailwind CSS"],
            "res": [
              ["shadcn/ui docs", "https://ui.shadcn.com/docs"]
            ],
            "tip": "Because the code lives in your repo, you can edit any component freely. That is the point; do not treat generated components as untouchable library code."
          },
          {
            "t": "Headless Components with Radix",
            "d": "Get accessible behavior without opinions about looks using Radix primitives.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Headless UI: behavior, keyboard support, and ARIA handled; styling is yours",
              "Primitives like Dialog, DropdownMenu, Tabs, and Accordion",
              "Why accessibility primitives beat hand-rolled dropdowns every time"
            ],
            "do": [
              "Build an accessible dropdown menu with @radix-ui/react-dropdown-menu",
              "Keyboard-test it: arrows, Escape, and focus trapping should all work",
              "Style it with your own Tailwind classes"
            ],
            "tools": ["Radix UI"],
            "res": [
              ["Radix Primitives", "https://www.radix-ui.com/primitives"]
            ],
            "tip": "A hand-rolled modal that traps focus wrong locks out keyboard and screen-reader users. Radix has solved these edge cases; use it."
          },
          {
            "t": "Animation with Motion",
            "d": "Add layout animations, gestures, and page transitions with a declarative animation library.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "motion.div and the animate prop: animation as declarative props",
              "AnimatePresence for exit animations when components unmount",
              "Layout animations that smoothly move elements between positions"
            ],
            "do": [
              "Install motion and animate a card mounting with spring physics",
              "Add exit animations to a list with AnimatePresence",
              "Build an animated tab indicator with layoutId"
            ],
            "tools": ["Motion"],
            "res": [
              ["Motion docs", "https://motion.dev/"]
            ],
            "tip": "Animate opacity and transform only. Animating width, height, or top/left forces layout recalculation every frame and will jank on low-end devices.",
            "tag": "opt"
          },
          {
            "t": "Design Tokens and Theming",
            "d": "Build a theming system with CSS variables so dark mode and branding are one-line changes.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "CSS custom properties as the single source of truth for colors, spacing, radii",
              "Dark mode via a data-theme attribute or the class strategy",
              "Design tokens: naming colors by role (surface, primary) not by value (blue-500)"
            ],
            "do": [
              "Define a token set in CSS and refactor components to use them",
              "Implement a dark-mode toggle that flips a class on <html>",
              "Persist the theme choice in localStorage with your useLocalStorage hook"
            ],
            "tools": ["Tailwind CSS"],
            "res": [
              ["Tailwind: Dark mode", "https://tailwindcss.com/docs/dark-mode"]
            ],
            "tip": "Name tokens by purpose, not appearance. --color-danger survives a rebrand; --color-red-500 does not."
          }
        ]
      },
      {
        "t": "Performance, Testing, and Production",
        "d": "Ship with confidence: profile, test at three levels, type safely, and go full-stack.",
        "lv": 3,
        "children": [
          {
            "t": "Profiling and Render Optimization",
            "d": "Find real bottlenecks with the Profiler and fix them with targeted techniques.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Recording interactions in the Profiler and reading the flame graph",
              "Common fixes: colocation, memoization, list virtualization",
              "Why premature optimization wastes time: measure first, always"
            ],
            "do": [
              "Profile a slow interaction and identify the component doing wasted work",
              "Virtualize a 10,000-row list with @tanstack/react-virtual",
              "Document before/after render counts for one optimization you made"
            ],
            "tools": ["React DevTools Profiler", "TanStack Virtual"],
            "res": [
              ["React docs: Optimizing Performance", "https://react.dev/learn/render-and-commit"],
              ["TanStack Virtual", "https://tanstack.com/virtual/latest"]
            ],
            "tip": "Virtualize long lists before memoizing anything. Rendering 10,000 rows is the bottleneck; memoizing how you render 10,000 rows is rearranging deck chairs."
          },
          {
            "t": "Code Splitting and Bundle Analysis",
            "d": "Keep initial loads fast by splitting bundles and auditing what ships to the browser.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Route-based splitting with React.lazy as the baseline",
              "Reading a bundle analyzer treemap to find heavy dependencies",
              "Import cost: named imports from barrel files can pull in entire libraries"
            ],
            "do": [
              "Analyze your production bundle with rollup-plugin-visualizer",
              "Find your three heaviest dependencies and check for lighter alternatives",
              "Lazy-load a charting library so it only downloads when the dashboard opens"
            ],
            "tools": ["rollup-plugin-visualizer", "Vite"],
            "res": [
              ["Vite: Building for Production", "https://vite.dev/guide/build.html"]
            ],
            "tip": "Moment.js-style giants still sneak into bundles via transitive deps. One analyzer run per quarter saves real load time."
          },
          {
            "t": "Unit Testing with Vitest",
            "d": "Test pure logic fast: reducers, hooks, and utilities with the Vite-native test runner.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Vitest basics: describe, it, expect, and the watch mode workflow",
              "Testing pure functions (reducers, formatters) without rendering anything",
              "Mocking modules and timers with vi.mock and vi.useFakeTimers"
            ],
            "do": [
              "Set up Vitest in your Vite app and write tests for your useReducer reducer",
              "Test your custom useLocalStorage hook logic in isolation",
              "Mock a fetch module and test the data-transforming function"
            ],
            "tools": ["Vitest"],
            "res": [
              ["Vitest docs", "https://vitest.dev/guide/"]
            ],
            "tip": "Test behavior, not implementation. If renaming an internal variable breaks your test, the test is coupled to the wrong thing."
          },
          {
            "t": "Component Testing with Testing Library",
            "d": "Test components the way users experience them: queries by role and text, user events.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Query priority: getByRole and getByText over test ids",
              "userEvent for realistic interactions: click, type, keyboard",
              "Testing async UI: findBy queries and waitFor for loading states"
            ],
            "do": [
              "Install @testing-library/react and test your todo app: add, toggle, delete",
              "Test a form submission including validation error messages",
              "Test a component that fetches data by mocking the request"
            ],
            "tools": ["Testing Library", "Vitest", "user-event"],
            "res": [
              ["Testing Library: React", "https://testing-library.com/docs/react-testing-library/intro/"],
              ["Testing Library: Queries", "https://testing-library.com/docs/queries/about"]
            ],
            "tip": "If you need a test id to find an element, a screen-reader user probably cannot find it either. Prefer role and label queries; they double as accessibility checks."
          },
          {
            "t": "End-to-End Testing with Playwright",
            "d": "Verify whole user journeys in a real browser: the test that catches what unit tests cannot.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Playwright basics: test, expect, page fixtures, and the trace viewer",
              "Locators over selectors: getByRole keeps tests resilient to markup changes",
              "What belongs in E2E: critical paths only (signup, checkout, core flows)"
            ],
            "do": [
              "Install Playwright and write a test that signs up and creates a todo",
              "Run it in headed mode and watch the browser execute your test",
              "Open the trace viewer on a failure and find the exact failing step"
            ],
            "tools": ["Playwright"],
            "res": [
              ["Playwright docs", "https://playwright.dev/docs/intro"]
            ],
            "tip": "E2E tests are expensive and flaky by nature. Cover the 3-5 flows that would embarrass you if broken, and push everything else down to component tests."
          },
          {
            "t": "TypeScript in React",
            "d": "Type props, state, and events so refactors are safe and the editor guides you.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Typing props with interfaces and typing event handlers (React.ChangeEvent etc.)",
              "Typing useState generics and useRef for DOM elements",
              "Discriminated unions for component variants instead of boolean prop soup"
            ],
            "do": [
              "Convert your app to TypeScript with the react-ts Vite template",
              "Type every component's props and fix all resulting errors",
              "Type a polymorphic Button component with variant unions"
            ],
            "tools": ["TypeScript", "Vite"],
            "res": [
              ["React TypeScript Cheatsheet", "https://react-typescript-cheatsheet.netlify.app/"],
              ["TypeScript docs", "https://www.typescriptlang.org/docs/"]
            ],
            "tip": "Reach for type inference before annotations. useState('') already knows it is a string; annotating everything is noise, not safety."
          },
          {
            "t": "Next.js and Full-Stack React",
            "d": "Go beyond the SPA: file-based routing, server rendering, and API routes with Next.js.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "App Router: folders are routes, page.js and layout.js conventions",
              "Server vs client components and where data fetching belongs",
              "Server actions and route handlers for backend logic without a separate server"
            ],
            "do": [
              "Scaffold a Next.js app and convert one of your Vite pages to the App Router",
              "Fetch data in a server component and pass it to an interactive client component",
              "Build a server action that handles a form submission end to end"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js docs", "https://nextjs.org/docs"]
            ],
            "tip": "Default to server components and add 'use client' only where interactivity demands it. Most beginners mark everything client and lose the entire point of Next.js."
          },
          {
            "t": "React Server Components Deep Dive",
            "d": "Understand the RSC model: what runs on the server, what ships to the client, and why it matters.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "RSC payload: components stream as a serialized format, not HTML or JS",
              "Server components can touch the database; they can never use hooks or events",
              "Composition pattern: pass client components as children into server components"
            ],
            "do": [
              "Build a server component that reads from a mock data source directly",
              "Try using useState in a server component and read the exact error",
              "Pass an interactive client button as children into a server-rendered card"
            ],
            "tools": ["Next.js"],
            "res": [
              ["React docs: Server Components", "https://react.dev/reference/rsc/server-components"]
            ],
            "tip": "The boundary rule is simple: server components cannot use state, effects, or browser APIs. When confused, ask 'does this need the browser?' If yes, it is a client component."
          },
          {
            "t": "The React Compiler",
            "d": "Learn what the React Compiler automates and which manual memoization habits to drop.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The compiler auto-memoizes components, values, and callbacks at build time",
              "Which code patterns block compilation (mutation after render, conditional hooks)",
              "How to check compilation status with the eslint react-compiler plugin"
            ],
            "do": [
              "Enable the compiler in a Vite app via babel-plugin-react-compiler",
              "Run the eslint plugin and fix the violations it reports",
              "Remove manual useMemo/useCallback calls and verify behavior is unchanged"
            ],
            "tools": ["React Compiler", "Vite"],
            "res": [
              ["React Compiler docs", "https://react.dev/learn/react-compiler"]
            ],
            "tip": "The compiler rewards clean code: pure components with stable data flow compile best. The optimization is a side effect of writing React well.",
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
