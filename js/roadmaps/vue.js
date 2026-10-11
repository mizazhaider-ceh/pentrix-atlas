/* Atlas roadmap data: Vue (vue) */
ROADMAPS.push({
  "id": "vue",
  "title": "Vue",
  "icon": "💚",
  "color": "#42b883",
  "desc": "Master Vue 3 from templates to production: the Composition API, reactivity, Pinia, Vue Router, and Nuxt for full-stack apps.",
  "kind": "skill",
  "root": {
    "t": "Vue 3 Development",
    "d": "From your first Vue app to shipping production Nuxt applications.",
    "children": [
      {
        "t": "Getting Started",
        "d": "What Vue is, scaffolding a project, and choosing your API style.",
        "lv": 1,
        "children": [
          {
            "t": "What Vue Is: The Progressive Framework",
            "d": "Understand Vue's philosophy: incrementally adoptable, from a script tag to a full framework.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Progressive framework: use Vue for one widget or an entire SPA, your choice",
              "Reactivity at the core: the UI updates automatically when state changes",
              "Single-File Components: template, script, and style living together"
            ],
            "do": [
              "Read the vuejs.org introduction and run the in-browser examples",
              "Sketch a page as Vue components the way you would for React",
              "List three things Vue handles for you that vanilla JS would not"
            ],
            "tools": ["vuejs.org"],
            "res": [
              ["Vue docs: Introduction", "https://vuejs.org/guide/introduction.html"],
              ["Vue docs: Quick Start", "https://vuejs.org/guide/quick-start.html"]
            ],
            "tip": "Vue's docs are among the best in the industry. When stuck, read the official guide before Stack Overflow; it is usually clearer and always current."
          },
          {
            "t": "Scaffolding with create-vue",
            "d": "Generate a modern Vue 3 project with the official scaffolding tool and learn the dev loop.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "create-vue (npm create vue@latest) with options: TypeScript, Router, Pinia, Vitest",
              "Project structure: src/main.js, App.vue, components/, assets/",
              "Dev server with hot reload and the production build output"
            ],
            "do": [
              "Scaffold a project with TypeScript and Router enabled",
              "Start the dev server and edit App.vue to see instant updates",
              "Run the production build and serve the dist folder locally"
            ],
            "tools": ["create-vue", "Vite", "Node.js"],
            "res": [
              ["Vue docs: Quick Start", "https://vuejs.org/guide/quick-start.html"]
            ],
            "tip": "Say yes to TypeScript when scaffolding even if you are new to it. Vue's TS support is excellent and you will thank yourself in three months."
          },
          {
            "t": "Vue DevTools",
            "d": "Inspect components, props, and reactive state live with the official browser DevTools.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Component inspector: navigate the tree and see props, state, and computed values",
              "Timeline: track events, route changes, and performance",
              "Editing state live to preview UI states without touching code"
            ],
            "do": [
              "Install Vue DevTools and open it on your scaffolded app",
              "Select a component and modify its reactive state in the panel",
              "Use the timeline to watch what happens during a route change"
            ],
            "tools": ["Vue DevTools"],
            "res": [
              ["Vue DevTools", "https://devtools.vuejs.org/"]
            ],
            "tip": "DevTools shows you the actual reactive values, not what you think they are. When the UI looks wrong, check the inspector before adding console.logs."
          },
          {
            "t": "Options API vs Composition API",
            "d": "Learn both API styles, understand the tradeoffs, and commit to Composition API for new code.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Options API organizes by option type (data, methods, computed); Composition organizes by feature",
              "Why Composition scales better: related logic stays together in large components",
              "Both are fully supported; the ecosystem and all new docs favor Composition"
            ],
            "do": [
              "Write the same counter component in both APIs side by side",
              "Convert an Options API component to <script setup>",
              "Read one Options API example in the wild and translate it mentally"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Options API vs Composition API", "https://vuejs.org/guide/extras/composition-api-faq.html"]
            ],
            "tip": "Learn Composition API as your primary style. You will still meet Options API in older codebases, so recognize it, but write new code with <script setup>."
          },
          {
            "t": "App Anatomy: main.js and Mounting",
            "d": "Understand how a Vue app boots: creating the app, plugins, and mounting to the DOM.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "createApp(App): the application instance that plugins and config attach to",
              "app.mount('#app'): connecting Vue to a DOM element",
              "app.use() for plugins and app.config for global settings"
            ],
            "do": [
              "Read your scaffolded main.js line by line until each line makes sense",
              "Register a tiny global component in main.js and use it without importing",
              "Add a second app-level config option and observe its effect"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Application Instance", "https://vuejs.org/guide/essentials/application.html"]
            ],
            "tip": "Global registration is convenient and a trap. Prefer local imports; globals hide dependencies and break tree-shaking."
          }
        ]
      },
      {
        "t": "Templates and Reactivity Basics",
        "d": "Vue's template language: directives, bindings, events, and derived state.",
        "lv": 1,
        "children": [
          {
            "t": "Template Syntax and Interpolation",
            "d": "Render dynamic content with mustache interpolation and understand what templates compile to.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Double mustaches {{ }} render reactive data as text",
              "Templates compile to render functions; you write HTML, Vue writes the updates",
              "JavaScript expressions are allowed inside mustaches, statements are not"
            ],
            "do": [
              "Render variables, expressions, and function calls in a template",
              "Try a statement (like an if) inside mustaches and read the error",
              "Inspect the compiled output in the Vue SFC Playground"
            ],
            "tools": ["Vue SFC Playground"],
            "res": [
              ["Vue docs: Template Syntax", "https://vuejs.org/guide/essentials/template-syntax.html"]
            ],
            "tip": "Keep template expressions simple. If you need more than one operation, that logic belongs in a computed property or method."
          },
          {
            "t": "Attribute Binding with v-bind",
            "d": "Bind attributes, classes, and styles dynamically with v-bind and its : shorthand.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "v-bind:src or :src evaluates the expression instead of using a literal string",
              "Class and style bindings accept objects, arrays, and computed values",
              "Boolean attributes: binding false removes the attribute entirely"
            ],
            "do": [
              "Bind an image src and alt dynamically from component data",
              "Toggle classes with an object binding driven by state",
              "Build a button whose disabled state and styling both come from one boolean"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Class and Style Bindings", "https://vuejs.org/guide/essentials/class-and-style.html"]
            ],
            "tip": "Object syntax for class bindings ({ active: isActive }) is the most readable form. Reserve array syntax for mixing static and dynamic classes."
          },
          {
            "t": "Event Handling with v-on",
            "d": "Respond to user input with v-on, method handlers, and Vue's event modifiers.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "v-on:click or @click with method names, inline statements, or $event",
              "Modifiers: .prevent, .stop, .once, and key modifiers like .enter",
              "Method handlers receive the native event automatically when referenced by name"
            ],
            "do": [
              "Build a counter with @click handlers using all three handler styles",
              "Create a form that uses @submit.prevent instead of manual preventDefault",
              "Build an input that reacts to @keyup.enter"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Event Handling", "https://vuejs.org/guide/essentials/event-handling.html"]
            ],
            "tip": "Modifiers exist so your methods stay clean. @submit.prevent in the template beats e.preventDefault() buried in every handler."
          },
          {
            "t": "Conditional Rendering: v-if vs v-show",
            "d": "Choose correctly between v-if and v-show: one destroys, the other hides.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "v-if truly adds/removes the element; v-show only toggles display: none",
              "v-if has higher toggle cost, v-show has higher initial render cost",
              "v-else-if and v-else chains plus <template> wrappers for groups"
            ],
            "do": [
              "Build a tab interface with v-if and inspect the DOM as tabs switch",
              "Rebuild it with v-show and compare the DOM behavior",
              "Decide for three real UI cases which directive fits and justify it"
            ],
            "tools": ["Vite", "Vue DevTools"],
            "res": [
              ["Vue docs: Conditional Rendering", "https://vuejs.org/guide/essentials/conditional.html"]
            ],
            "tip": "Toggling often (dropdowns, tooltips): v-show. Rarely shown or expensive to create (heavy dialogs): v-if. v-if also works with <template>; v-show does not."
          },
          {
            "t": "List Rendering with v-for",
            "d": "Render arrays with v-for and give each item a stable :key.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "v-for=\"item in items\" with index available as a second argument",
              "The :key must be a stable unique id, never the array index for mutable lists",
              "v-for with objects, ranges, and <template> for multi-element rows"
            ],
            "do": [
              "Render a list of users from an array with v-for",
              "Build add/remove/reorder controls and verify :key keeps inputs attached to the right rows",
              "Break it with index keys, then fix it with real ids"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: List Rendering", "https://vuejs.org/guide/essentials/list.html"]
            ],
            "tip": "Never put v-if and v-for on the same element; v-if has higher priority and cannot see the loop variable. Filter in a computed property instead."
          },
          {
            "t": "Two-Way Binding with v-model",
            "d": "Sync form inputs and state effortlessly with v-model and its modifiers.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "v-model is sugar for :modelValue plus @update:modelValue on inputs",
              "Modifiers: .lazy, .number, .trim for common input needs",
              "v-model on checkboxes, radios, and selects: arrays, booleans, and objects"
            ],
            "do": [
              "Build a form with text, checkbox, radio, and select inputs all using v-model",
              "Add .trim and .number modifiers and observe the difference in DevTools",
              "Render the bound state as JSON below the form to watch it update live"
            ],
            "tools": ["Vite", "Vue DevTools"],
            "res": [
              ["Vue docs: Form Input Bindings", "https://vuejs.org/guide/essentials/forms.html"]
            ],
            "tip": "v-model on a custom component is a contract: accept a modelValue prop and emit update:modelValue. Learn that contract now; custom v-model comes up constantly."
          },
          {
            "t": "Computed Properties",
            "d": "Derive state declaratively with computed: cached, reactive, and self-updating.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Computed values recalculate only when their reactive dependencies change",
              "Computed vs methods: caching makes computed the default for derived data",
              "Writable computed with get/set for two-way derived values"
            ],
            "do": [
              "Build a filtered todo list where the filter is a computed property",
              "Add a console.log in the computed getter to prove it caches",
              "Create a writable computed that formats a full name from first and last"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Computed Properties", "https://vuejs.org/guide/essentials/computed.html"]
            ],
            "tip": "If you are computing the same value in the template twice, or in a method called from the template, that is a computed property. Templates should never do heavy work."
          }
        ]
      },
      {
        "t": "Composition API in Depth",
        "d": "The modern way to write Vue: refs, reactive, composables, and script setup.",
        "lv": 2,
        "children": [
          {
            "t": "setup() and <script setup>",
            "d": "Write components with <script setup>: less boilerplate, better TypeScript, top-level bindings.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "<script setup> is compile-time sugar over setup(): top-level bindings are exposed to the template",
              "Imports, variables, and functions declared at top level are usable in the template directly",
              "When you still need the options object: name, inheritAttrs, custom options"
            ],
            "do": [
              "Convert an Options API component to <script setup>",
              "Use a top-level await in <script setup> and see the component become async",
              "Declare the component name explicitly for DevTools clarity"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: script setup", "https://vuejs.org/api/sfc-script-setup.html"]
            ],
            "tip": "<script setup> components are closed by default: nothing is exposed to parents unless you use defineExpose. That is a feature, not a limitation."
          },
          {
            "t": "ref vs reactive: Choosing State",
            "d": "Master Vue's two reactivity primitives and know exactly when to use each.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ref() wraps any value; access and mutate via .value in script, auto-unwrapped in templates",
              "reactive() makes objects deeply reactive but cannot be destructured or reassigned",
              "Rule of thumb: ref for primitives and for values you reassign; reactive for object-shaped state"
            ],
            "do": [
              "Build a form with refs for each field, then rebuild with one reactive object",
              "Destructure a reactive object and watch reactivity break; fix it with toRefs",
              "Store a ref inside reactive and observe the unwrapping behavior"
            ],
            "tools": ["Vite", "Vue DevTools"],
            "res": [
              ["Vue docs: Reactivity Fundamentals", "https://vuejs.org/guide/essentials/reactivity-fundamentals.html"]
            ],
            "tip": "Forgetting .value in script is the number one Composition API bug. If a ref seems frozen, you are almost certainly reading the ref object instead of .value."
          },
          {
            "t": "Computed and Watch in Composition API",
            "d": "Use computed() and watch()/watchEffect() with refs for derived state and side effects.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "computed(() => ...) creates a readonly derived ref",
              "watch(source, callback): explicit, lazy, with old and new values",
              "watchEffect: automatic dependency tracking, runs immediately"
            ],
            "do": [
              "Build a search page: query ref, computed filtered results, watch that fetches on query change",
              "Compare watch vs watchEffect on the same feature and note the differences",
              "Add { deep: true } to watch a nested object and { immediate: true } to run on mount"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Watchers", "https://vuejs.org/guide/essentials/watchers.html"]
            ],
            "tip": "Prefer watch with an explicit source over watchEffect. Explicit sources are easier to debug six months later when the effect fires unexpectedly."
          },
          {
            "t": "Lifecycle Hooks",
            "d": "Hook into mount, update, and unmount with onMounted, onUpdated, and onUnmounted.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "onMounted: DOM is ready, the place for initial data fetching and measurements",
              "onUnmounted: cleanup timers, listeners, and subscriptions",
              "There is no onCreated equivalent needed; setup() itself runs at creation"
            ],
            "do": [
              "Fetch data in onMounted and render it",
              "Add a window resize listener in onMounted and remove it in onUnmounted",
              "Log all lifecycle hooks in order for a component that mounts, updates, and unmounts"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Lifecycle Hooks", "https://vuejs.org/guide/essentials/lifecycle.html"]
            ],
            "tip": "Fetching in onMounted means the component renders empty first, then populates. For better UX pair it with skeleton states, or fetch in the router/Nuxt layer instead."
          },
          {
            "t": "Composables: Reusable Logic",
            "d": "Extract stateful logic into composables: Vue's answer to shared behavior.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "A composable is a function using Composition API that returns refs and functions",
              "Naming convention: useX (useFetch, useLocalStorage, useMouse)",
              "Composables encapsulate lifecycle too: setup and teardown travel with the logic"
            ],
            "do": [
              "Write useFetch(url) returning { data, error, isLoading } with abort on unmount",
              "Write useLocalStorage(key, defaultValue) syncing a ref to storage",
              "Write useDocumentTitle or useOnline and reuse it in two components"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Composables", "https://vuejs.org/guide/reusability/composables.html"]
            ],
            "tip": "Each call to a composable creates independent state. If two components must share the same state, the composable needs module-level state or a store like Pinia."
          },
          {
            "t": "defineProps and defineEmits",
            "d": "Type component inputs and outputs with compiler macros in <script setup>.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "defineProps<{...}>() declares typed props; they are readonly",
              "defineEmits<{...}>() declares typed events with payload types",
              "withDefaults for default values and defineModel for custom v-model"
            ],
            "do": [
              "Build a typed Button component with variant and size props",
              "Emit a custom event with a typed payload and handle it in the parent",
              "Add withDefaults and verify DevTools shows the defaults"
            ],
            "tools": ["Vite", "TypeScript"],
            "res": [
              ["Vue docs: defineProps", "https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"]
            ],
            "tip": "Destructured props lose reactivity unless you use the reactive destructure transform or toRefs. In plain <script setup>, keep the props object intact."
          },
          {
            "t": "Watchers: Deep, Immediate, and Cleanup",
            "d": "Handle the watcher edge cases: nested objects, first-run behavior, and async cleanup.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "deep: true watches nested mutations at a performance cost",
              "onWatcherCleanup / onCleanup cancels stale async work when the source changes fast",
              "Watching getters and multiple sources with arrays"
            ],
            "do": [
              "Watch a search query with debounce and cancel the previous request on change",
              "Deep-watch a settings object and persist it to localStorage",
              "Watch multiple sources with an array and destructure [a, b] in the callback"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Watchers", "https://vuejs.org/guide/essentials/watchers.html"]
            ],
            "tip": "A watcher that fires on every keystroke and hits the network needs debouncing or cancellation. Stale responses overwriting fresh ones is the classic async watcher bug."
          }
        ]
      },
      {
        "t": "Components",
        "d": "Component architecture: SFCs, props, events, slots, and advanced component patterns.",
        "lv": 2,
        "children": [
          {
            "t": "Single-File Component Anatomy",
            "d": "Structure .vue files well: template, script setup, and scoped style working as one unit.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The three blocks and their order convention: script, template, style",
              "One component per file, PascalCase filenames matching the component name",
              "What the SFC compiler does: template compilation, scoped CSS, asset handling"
            ],
            "do": [
              "Create three SFCs following the naming and block-order conventions",
              "Add <style scoped> and confirm the styles do not leak to siblings",
              "Import an image asset in the template and one in script and compare"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Single-File Components", "https://vuejs.org/guide/scaling-up/sfc.html"]
            ],
            "tip": "Keep SFCs focused: if the script block passes 300 lines, extract composables or split the component. File size is a code smell detector."
          },
          {
            "t": "Props Declaration and Validation",
            "d": "Design strict component contracts with typed props, defaults, and validators.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Runtime declaration with type, required, default, and validator",
              "Type-based declaration with TypeScript interfaces",
              "Props are readonly: the one-way data flow rule and why mutating props warns"
            ],
            "do": [
              "Build a UserCard with required user object prop and validated size prop",
              "Trigger the readonly warning by mutating a prop, then fix it with a local copy or emit",
              "Document your component's props as if for a teammate"
            ],
            "tools": ["Vite", "Vue DevTools"],
            "res": [
              ["Vue docs: Props", "https://vuejs.org/guide/components/props.html"]
            ],
            "tip": "Needing to mutate a prop means the state ownership is wrong. Either the parent should own it (emit changes up) or the child should own a local copy."
          },
          {
            "t": "Custom Events with emit",
            "d": "Communicate upward: declare events, emit payloads, and validate them.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "defineEmits declares the events a component can fire",
              "Event names: camelCase in script, kebab-case in templates",
              "Emits validation and the .once / native modifier behavior on components"
            ],
            "do": [
              "Build a StarRating component emitting update events on click",
              "Validate an emit payload and watch the warning on invalid data",
              "Chain events through two levels: child emits, middle re-emits, parent handles"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Component Events", "https://vuejs.org/guide/components/events.html"]
            ],
            "tip": "Events flow up, props flow down. If you find yourself emitting through three layers, consider provide/inject or a store instead."
          },
          {
            "t": "v-model on Components",
            "d": "Build two-way-bound custom inputs using the modelValue contract and multiple v-models.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The contract: modelValue prop in, update:modelValue event out",
              "defineModel() macro as the simpler modern way",
              "Multiple v-models with named arguments: v-model:title, v-model:content"
            ],
            "do": [
              "Build a custom TextInput supporting v-model the manual way",
              "Rebuild it with defineModel() and compare the code",
              "Create a component with two v-models (title and content)"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Component v-model", "https://vuejs.org/guide/components/v-model.html"]
            ],
            "tip": "defineModel is the modern default for custom inputs. Learn the manual contract once so you understand it, then use the macro."
          },
          {
            "t": "Slots: Default, Named, and Scoped",
            "d": "Let parents inject content and data into children with Vue's slot system.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Default and named slots: <slot name=\"header\"> with <template #header>",
              "Scoped slots: the child passes data back to the slot content",
              "Renderless component pattern: logic in the child, markup in the parent"
            ],
            "do": [
              "Build a Card with header, default, and footer slots plus fallback content",
              "Build a DataList with a scoped slot exposing each item to the parent",
              "Build a MouseTracker renderless component consumed via scoped slot"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Slots", "https://vuejs.org/guide/components/slots.html"]
            ],
            "tip": "Scoped slots are how you share logic without dictating markup. If a component is all behavior and no opinion about looks, expose it through a scoped slot."
          },
          {
            "t": "Provide and Inject",
            "d": "Share values deep in the tree without prop drilling, with reactive and typed injection.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "provide(key, value) at an ancestor, inject(key) in any descendant",
              "Providing refs keeps the injected value reactive",
              "Injection keys as Symbols to avoid collisions in large apps"
            ],
            "do": [
              "Provide a theme object at the app root and inject it three levels down",
              "Make the provided value a ref and toggle it from a deeply nested child",
              "Add a default value and a required injection that warns when missing"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Provide / Inject", "https://vuejs.org/guide/components/provide-inject.html"]
            ],
            "tip": "Provide/inject creates implicit coupling: the child only works under the right ancestor. Document the requirement or prefer explicit props for public components."
          },
          {
            "t": "Dynamic and Async Components",
            "d": "Swap components at runtime with <component :is> and split bundles with defineAsyncComponent.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "<component :is=\"name\"> renders whichever component the value points to",
              "KeepAlive preserves state of inactive dynamic components",
              "defineAsyncComponent with loading, error, delay, and timeout options"
            ],
            "do": [
              "Build a tab system with <component :is> switching tab panels",
              "Wrap it in KeepAlive and verify form input survives tab switches",
              "Lazy-load a heavy chart component with defineAsyncComponent and a loading spinner"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Dynamic Components", "https://vuejs.org/guide/essentials/component-basics.html#dynamic-components"],
              ["Vue docs: Async Components", "https://vuejs.org/guide/components/async.html"]
            ],
            "tip": "KeepAlive caches component instances, including their memory. Use include/exclude or max so a tab system does not hoard dozens of live components."
          }
        ]
      },
      {
        "t": "Routing and State Management",
        "d": "Navigate between pages with Vue Router and manage shared state with Pinia.",
        "lv": 2,
        "children": [
          {
            "t": "Vue Router: Routes and Views",
            "d": "Set up client-side routing: route records, RouterView, and RouterLink navigation.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Creating the router with createRouter and history mode",
              "Route records: path, component, and RouterView as the outlet",
              "RouterLink vs plain anchors; programmatic navigation with useRouter"
            ],
            "do": [
              "Add Vue Router to your app with Home, About, and NotFound routes",
              "Build a nav with RouterLink and active-class styling",
              "Navigate programmatically after a fake login with router.push"
            ],
            "tools": ["Vue Router"],
            "res": [
              ["Vue Router docs", "https://router.vuejs.org/"]
            ],
            "tip": "Use createWebHistory for clean URLs, but remember it needs server fallback config in production or refreshes on deep links will 404."
          },
          {
            "t": "Dynamic Routes, Guards, and Lazy Loading",
            "d": "Handle real routing needs: params, nested layouts, auth guards, and code-split routes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Dynamic segments /users/:id with useRoute().params",
              "Nested routes and named views for dashboard layouts",
              "Navigation guards (beforeEach) for auth; lazy route components for splitting"
            ],
            "do": [
              "Build /users/:id detail pages driven by the route param",
              "Add a beforeEach guard redirecting unauthenticated users to /login",
              "Lazy-load the admin route and watch the separate chunk in the network tab"
            ],
            "tools": ["Vue Router", "Vite"],
            "res": [
              ["Vue Router: Navigation Guards", "https://router.vuejs.org/guide/advanced/navigation-guards.html"],
              ["Vue Router: Lazy Loading", "https://router.vuejs.org/guide/advanced/lazy-loading.html"]
            ],
            "tip": "Watch route params with watch() or use onBeforeRouteUpdate. A component reused across /users/1 and /users/2 does not remount; the param just changes."
          },
          {
            "t": "Pinia: Stores",
            "d": "Manage global state with Pinia: the official, TypeScript-friendly store.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Defining stores with defineStore: state, getters, actions",
              "Setup stores vs options stores: pick one style per codebase",
              "Using stores in components and why destructuring needs storeToRefs"
            ],
            "do": [
              "Create a cart store with add/remove actions and a total getter",
              "Consume it in two unrelated components and watch them stay in sync",
              "Break reactivity with destructuring, then fix it with storeToRefs"
            ],
            "tools": ["Pinia", "Vue DevTools"],
            "res": [
              ["Pinia docs", "https://pinia.vuejs.org/"]
            ],
            "tip": "Not everything belongs in the store. Server data belongs in a data-fetching layer, form drafts belong in the component; the store is for truly shared client state."
          },
          {
            "t": "Pinia in Practice: Patterns",
            "d": "Structure real stores: async actions, store composition, and persistence.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Async actions with loading and error state inside the store",
              "Composing stores: using one store inside another",
              "Persisting state with pinia-plugin-persistedstate and hydration caveats"
            ],
            "do": [
              "Build an auth store with login/logout actions hitting a fake API",
              "Derive a user profile store that reads from the auth store",
              "Persist the cart to localStorage and handle the first-load rehydration"
            ],
            "tools": ["Pinia"],
            "res": [
              ["Pinia: Cookbook", "https://pinia.vuejs.org/cookbook/"]
            ],
            "tip": "Keep actions as the only way state changes. Components calling store.$state directly is a backdoor that makes state flow impossible to trace."
          },
          {
            "t": "Server State with TanStack Query",
            "d": "Cache server data properly with TanStack Query's Vue adapter instead of hand-rolled fetching.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "useQuery with query keys: the cache identity system",
              "Devtools for inspecting query states",
              "useMutation with invalidation for writes"
            ],
            "do": [
              "Install the Vue Query adapter and convert a manual fetch to useQuery",
              "Add a mutation that invalidates the list query on success",
              "Watch stale-while-revalidate: instant cached render, background refresh"
            ],
            "tools": ["TanStack Query"],
            "res": [
              ["TanStack Query: Vue", "https://tanstack.com/query/latest/docs/framework/vue/overview"]
            ],
            "tip": "Pinia for client state, TanStack Query for server state. Mixing them (caching API responses in Pinia) recreates every problem data libraries already solved."
          },
          {
            "t": "Forms with Validation",
            "d": "Handle real-world forms with VeeValidate or FormKit: validation, errors, and submission.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "VeeValidate: useForm/useField with Zod or Yup schemas",
              "FormKit: schema-driven forms that generate markup from config",
              "When simple v-model forms are enough vs when a library pays off"
            ],
            "do": [
              "Build a registration form with VeeValidate and a Zod schema",
              "Show field errors, form-level errors, and disable submit while invalid",
              "Rebuild the same form in FormKit and compare the code volume"
            ],
            "tools": ["VeeValidate", "FormKit", "Zod"],
            "res": [
              ["VeeValidate docs", "https://vee-validate.logaretm.com/v4/"],
              ["FormKit docs", "https://formkit.com/"]
            ],
            "tip": "Pick one form library per project and stick with it. Mixing VeeValidate and hand-rolled validation across forms creates an inconsistent, buggy UX."
          }
        ]
      },
      {
        "t": "Styling, Animation, and UI",
        "d": "Make Vue apps look professional: styling approaches, transitions, and component libraries.",
        "lv": 2,
        "children": [
          {
            "t": "Tailwind CSS in Vue",
            "d": "Style with utility classes in SFC templates using the official Tailwind Vite setup.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Installing the Tailwind Vite plugin and the CSS entry import",
              "Utility classes in templates, including :class bindings with dynamic values",
              "Dark mode and responsive variants in a Vue context"
            ],
            "do": [
              "Set up Tailwind in your Vue app per the official Vite guide",
              "Rebuild a component with utilities, mixing static and :class-bound classes",
              "Add dark mode with a toggle stored in a Pinia store"
            ],
            "tools": ["Tailwind CSS", "Vite"],
            "res": [
              ["Tailwind: Install with Vite", "https://tailwindcss.com/docs/installation/using-vite"]
            ],
            "tip": "Dynamic class names must appear literally in your source for Tailwind to generate them. Building class names with string concatenation silently produces no CSS."
          },
          {
            "t": "Scoped Styles and SFC CSS Features",
            "d": "Use Vue's style superpowers: scoped CSS, v-bind in styles, and CSS modules.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "scoped attribute: how the compiler rewrites selectors with data attributes",
              ":deep(), :slotted(), :global() for piercing scope when needed",
              "v-bind() in <style> to use reactive values directly in CSS"
            ],
            "do": [
              "Scope styles to a component and prove they do not leak",
              "Style a child component's internals with :deep()",
              "Drive a CSS color from a ref using v-bind() in the style block"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Scoped CSS", "https://vuejs.org/api/sfc-css-features.html"]
            ],
            "tip": ":deep() is an escape hatch, not a pattern. If you are deep-styling library components everywhere, check whether the library exposes theming props first."
          },
          {
            "t": "Transitions and Animations",
            "d": "Animate enter, leave, and list changes with Vue's built-in Transition components.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "<Transition> with CSS classes: enter/leave active and from/to states",
              "<TransitionGroup> for list animations with FLIP move transitions",
              "JavaScript hooks and appear mode for initial-render animation"
            ],
            "do": [
              "Animate a modal's enter and leave with CSS transitions",
              "Animate a todo list with TransitionGroup so items slide on add/remove",
              "Build a route transition that fades between pages"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Transition", "https://vuejs.org/guide/built-ins/transition.html"],
              ["Vue docs: TransitionGroup", "https://vuejs.org/guide/built-ins/transition-group.html"]
            ],
            "tip": "TransitionGroup needs stable keys to animate correctly, just like v-for needs them to render correctly. Same rule, animated consequences."
          },
          {
            "t": "Teleport",
            "d": "Render content elsewhere in the DOM for modals and overlays that escape layout traps.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "<Teleport to=\"body\"> moves rendering while keeping component context",
              "Why modals need it: overflow and stacking contexts",
              "Multiple teleports can target the same destination"
            ],
            "do": [
              "Build a modal with Teleport to body inside an overflow-hidden container",
              "Add Escape-to-close and focus the modal on open",
              "Teleport a toast container and stack multiple toasts"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Teleport", "https://vuejs.org/guide/built-ins/teleport.html"]
            ],
            "tip": "Teleport only moves the DOM location. Logic, props, and events still belong to the original component tree position."
          },
          {
            "t": "Component Libraries: Vuetify and PrimeVue",
            "d": "Ship faster with a full component library, and evaluate which one fits your project.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Vuetify: Material Design system, huge component set, opinionated",
              "PrimeVue: unstyled/headless-friendly themes, massive component count",
              "Evaluation criteria: design fit, bundle size, theming, docs quality"
            ],
            "do": [
              "Install one library and build a data table with sorting and pagination",
              "Theme it to match a brand color",
              "Measure the bundle impact and try tree-shaking or on-demand imports"
            ],
            "tools": ["Vuetify", "PrimeVue"],
            "res": [
              ["Vuetify docs", "https://vuetifyjs.com/en/"],
              ["PrimeVue docs", "https://primevue.org/"]
            ],
            "tip": "Component libraries accelerate CRUD-style apps enormously and fight you on bespoke marketing sites. Match the tool to the product, not the hype."
          },
          {
            "t": "VueUse Composables",
            "d": "Use the VueUse collection instead of rewriting common composables yourself.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What VueUse offers: 200+ battle-tested composables",
              "Categories: browser, state, sensors, animation, integrations",
              "Tree-shaking: import only what you use"
            ],
            "do": [
              "Replace your hand-written useLocalStorage with VueUse's useStorage",
              "Use useMouse and useDark in a demo page",
              "Browse the collection and bookmark five composables for future use"
            ],
            "tools": ["VueUse"],
            "res": [
              ["VueUse docs", "https://vueuse.org/"]
            ],
            "tip": "Write your own composable once to learn the pattern, then use VueUse in production. Their edge-case handling (SSR, cleanup, browser quirks) is better than yours.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Advanced Topics and Production",
        "d": "Go deep on reactivity internals, Nuxt, testing, and shipping real apps.",
        "lv": 3,
        "children": [
          {
            "t": "Reactivity Internals: Proxies and Tracking",
            "d": "Understand how Vue's reactivity actually works: Proxies, effects, and the dependency graph.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Proxy-based tracking: get traps record dependencies, set traps trigger effects",
              "The effect scope system behind computed and watch",
              "Reactivity edge cases: adding new object keys, Map/Set, shallow variants"
            ],
            "do": [
              "Build a tiny reactive() clone with Proxy that logs get/set traps",
              "Demonstrate the new-property caveat and fix it with the right API",
              "Compare shallowRef vs ref for a large object and measure update cost"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Reactivity in Depth", "https://vuejs.org/guide/extras/reactivity-in-depth.html"]
            ],
            "tip": "You rarely need these internals daily, but they explain every 'why didn't my UI update' mystery. When reactivity surprises you, think in get/set traps."
          },
          {
            "t": "Render Performance: v-once, v-memo",
            "d": "Optimize rendering deliberately with Vue's built-in performance directives.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "v-once: render once, skip all future updates for static content",
              "v-memo: memoize a subtree, re-render only when listed deps change",
              "Why Vue needs less manual memoization than React: compiler-informed fine-grained updates"
            ],
            "do": [
              "Profile a heavy list render with Vue DevTools",
              "Apply v-memo to list rows keyed on the right dependencies",
              "Mark truly static content with v-once and measure the gain"
            ],
            "tools": ["Vue DevTools"],
            "res": [
              ["Vue docs: v-memo", "https://vuejs.org/api/built-in-directives.html#v-memo"]
            ],
            "tip": "v-memo with wrong dependencies is worse than no v-memo: stale UI that looks correct. Only memoize after profiling, and double-check the dep list."
          },
          {
            "t": "Custom Directives",
            "d": "Extend templates with custom directives for low-level DOM behavior.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Directive hooks: created, beforeMount, mounted, updated, unmounted",
              "Local vs global registration and directive arguments/modifiers",
              "When a directive beats a component or composable: direct DOM manipulation"
            ],
            "do": [
              "Write v-focus that focuses an element on mount",
              "Write v-tooltip with an argument for position",
              "Write v-intersect using IntersectionObserver with proper cleanup"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Custom Directives", "https://vuejs.org/guide/reusability/custom-directives.html"]
            ],
            "tip": "Directives are for DOM behavior, not business logic. If your directive needs app state, it is probably a component or composable in disguise."
          },
          {
            "t": "Plugins and App-Level Configuration",
            "d": "Extend Vue itself: write plugins and configure global behavior like error handling.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Plugin shape: an object with install(app, options)",
              "app.config.errorHandler and warnHandler for global error capture",
              "Global properties vs provide: the right channel for app-wide values"
            ],
            "do": [
              "Write a plugin that adds a global $formatDate helper and a directive",
              "Install it in main.js with options",
              "Set up app.config.errorHandler to log errors to a fake service"
            ],
            "tools": ["Vite"],
            "res": [
              ["Vue docs: Plugins", "https://vuejs.org/guide/reusability/plugins.html"]
            ],
            "tip": "Global properties pollute every component's this/$ namespace. Prefer provide/inject or composables; reserve globals for truly universal utilities."
          },
          {
            "t": "Nuxt 3: Full-Stack Vue",
            "d": "Build server-rendered Vue apps with Nuxt: file routing, data fetching, and deployment.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "File-based routing: pages/, layouts/, and middleware",
              "useAsyncData and useFetch: SSR-friendly data fetching with caching",
              "Server routes (server/api) for backend endpoints in the same project"
            ],
            "do": [
              "Scaffold a Nuxt app and build three pages with a shared layout",
              "Fetch data with useAsyncData and verify it renders in view-source (SSR proof)",
              "Add a server/api endpoint and call it from a page"
            ],
            "tools": ["Nuxt", "Vue"],
            "res": [
              ["Nuxt docs", "https://nuxt.com/docs/getting-started/introduction"]
            ],
            "tip": "useFetch in <script setup> top level runs on the server during SSR. Browser-only APIs (window, localStorage) must be guarded or moved to onMounted."
          },
          {
            "t": "Testing: Vitest and Vue Test Utils",
            "d": "Test components and logic with the official Vue testing stack.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Mounting components with @vue/test-utils: props, slots, emitted events",
              "Testing composables in isolation",
              "Mocking Pinia stores and Vue Router in tests"
            ],
            "do": [
              "Set up Vitest and test a counter component: click, assert text",
              "Test emitted events from a form component",
              "Test a Pinia store's actions without mounting any component"
            ],
            "tools": ["Vitest", "Vue Test Utils"],
            "res": [
              ["Vue Test Utils docs", "https://test-utils.vuejs.org/"],
              ["Vitest docs", "https://vitest.dev/guide/"]
            ],
            "tip": "Test user-visible behavior: rendered text, emitted events, store changes. Testing internal ref values couples tests to implementation details."
          },
          {
            "t": "E2E Testing with Playwright or Cypress",
            "d": "Cover critical user journeys end to end in a real browser.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Choosing: Playwright for speed and multi-browser, Cypress for DX",
              "Testing auth flows, form submissions, and navigation",
              "Keeping E2E suites small, stable, and independent"
            ],
            "do": [
              "Write an E2E test for login and creating an item",
              "Run it against your dev server and debug a failure with traces",
              "Add data-testid only where role-based locators cannot reach"
            ],
            "tools": ["Playwright", "Cypress"],
            "res": [
              ["Playwright docs", "https://playwright.dev/docs/intro"],
              ["Cypress docs", "https://docs.cypress.io/"]
            ],
            "tip": "E2E for the 3-5 flows that must never break; everything else belongs in component tests. A 200-test E2E suite is a maintenance burden, not safety."
          },
          {
            "t": "Build Optimization and Deployment",
            "d": "Ship fast Vue apps: analyze bundles, split code, and deploy correctly.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Bundle analysis with rollup-plugin-visualizer",
              "Route-level code splitting and manual chunks for vendor code",
              "Deployment targets: static hosts, Node servers, and edge for Nuxt"
            ],
            "do": [
              "Analyze your app's bundle and identify the heaviest dependencies",
              "Configure manual chunks for vendor code in vite.config",
              "Deploy a static build to a host and configure SPA fallback routing"
            ],
            "tools": ["Vite", "rollup-plugin-visualizer"],
            "res": [
              ["Vite: Building for Production", "https://vite.dev/guide/build.html"],
              ["Nuxt: Deployment", "https://nuxt.com/docs/getting-started/deployment"]
            ],
            "tip": "The biggest bundle wins are almost always: lazy-load routes, replace one giant dependency, and compress with Brotli on the server. Do those before micro-tuning."
          }
        ]
      }
    ]
  }
});
