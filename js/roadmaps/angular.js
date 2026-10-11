/* Atlas roadmap data: Angular (angular) */
ROADMAPS.push({
  "id": "angular",
  "title": "Angular",
  "icon": "🅰️",
  "color": "#dd0031",
  "desc": "Build enterprise-grade apps with Angular: components, signals, RxJS, dependency injection, forms, routing, and NgRx state management.",
  "kind": "skill",
  "root": {
    "t": "Angular Development",
    "d": "From your first component to architecting large Angular applications.",
    "children": [
      {
        "t": "Angular Foundations",
        "d": "What Angular is, the CLI workflow, and how a modern Angular app is put together.",
        "lv": 1,
        "children": [
          {
            "t": "What Angular Is",
            "d": "Understand Angular's place: a full framework with opinions about structure, from Google.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Framework vs library: Angular ships routing, forms, HTTP, and DI out of the box",
              "TypeScript-first: Angular is built on and for TypeScript",
              "Where Angular shines: large teams and long-lived enterprise applications"
            ],
            "do": [
              "Read the angular.dev 'What is Angular' essentials page",
              "Compare the feature checklist of Angular vs React + ecosystem",
              "List three opinions Angular holds that React leaves to you"
            ],
            "tools": ["angular.dev"],
            "res": [
              ["Angular docs: What is Angular", "https://angular.dev/overview"],
              ["Angular docs: Essentials", "https://angular.dev/essentials"]
            ],
            "tip": "Angular rewards buying into its conventions. Fighting the framework's structure to write 'React-style' Angular produces the worst of both worlds."
          },
          {
            "t": "Installing with Angular CLI",
            "d": "Scaffold, serve, and build with ng: the CLI is the heart of the Angular workflow.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "ng new my-app: scaffolding with routing and stylesheet options",
              "ng serve with hot reload, ng build for production output",
              "ng generate (schematics): components, services, guards generated consistently"
            ],
            "do": [
              "Install the CLI and scaffold an app with routing enabled",
              "Serve it, then generate a component with ng generate component",
              "Run ng build and inspect the dist output and bundle sizes"
            ],
            "tools": ["Angular CLI", "Node.js"],
            "res": [
              ["Angular CLI docs", "https://angular.dev/tools/cli"]
            ],
            "tip": "Always generate with the CLI instead of hand-writing files. Schematics wire up imports, tests, and styles consistently; manual files drift."
          },
          {
            "t": "Project Anatomy",
            "d": "Navigate a real Angular project: src, angular.json, and where everything lives.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "src/app as the application root, main.ts as the bootstrap entry",
              "angular.json: build architect targets, environments, and assets",
              "Environments and configuration: development vs production builds"
            ],
            "do": [
              "Open every top-level file in a fresh scaffold and note its purpose",
              "Change the app title in app.component and see hot reload work",
              "Add an environment variable via environment files and read it in a component"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular: Workspace configuration", "https://angular.dev/reference/configs/workspace-config"]
            ],
            "tip": "angular.json looks intimidating but you will touch three parts: projects, architect.build, and configurations. The rest can wait."
          },
          {
            "t": "Standalone Components",
            "d": "Build with the modern standalone model: no NgModules required for new apps.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "standalone: true components declare their own imports array",
              "Bootstrapping with bootstrapApplication instead of platformBrowserDynamic",
              "NgModules still exist in legacy code; know what they were for"
            ],
            "do": [
              "Create a standalone component importing CommonModule and RouterModule itself",
              "Bootstrap it directly in main.ts with bootstrapApplication",
              "Read one NgModule-based example and map it to the standalone equivalent"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Standalone components", "https://angular.dev/guide/components/importing"]
            ],
            "tip": "Write all new code standalone. You will still encounter NgModules in older tutorials and codebases, so recognize the pattern without adopting it."
          },
          {
            "t": "Templates and Interpolation",
            "d": "Render data in templates with interpolation and learn the template expression rules.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "{{ }} interpolation renders component properties as text",
              "Template expressions: what is allowed and the no-side-effects rule",
              "Template statements vs expressions: event bindings can call methods"
            ],
            "do": [
              "Render properties, method results, and simple expressions in a template",
              "Try an assignment inside interpolation and read the error",
              "Build a small profile card driven entirely by component properties"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Interpolation", "https://angular.dev/guide/templates/interpolation"]
            ],
            "tip": "Keep template expressions trivial. Complex logic in templates is untestable and slow; move it to getters, pipes, or component methods."
          },
          {
            "t": "The Angular Dev Loop",
            "d": "Master the daily workflow: serve, test, lint, and read build output like a pro.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "ng serve, ng test, ng lint: the three commands of daily work",
              "Reading build output: chunk sizes and the budgets warnings",
              "Source maps and debugging Angular in browser DevTools"
            ],
            "do": [
              "Run ng test once and watch the Karma/Jasmine (or Vitest) setup execute",
              "Trigger a build budget warning by importing something huge",
              "Set a breakpoint in a component method via browser DevTools source maps"
            ],
            "tools": ["Angular CLI", "Chrome DevTools"],
            "res": [
              ["Angular CLI: ng serve", "https://angular.dev/tools/cli"]
            ],
            "tip": "Build budgets are free performance policing. When a budget warning appears, treat it as a task, not noise."
          }
        ]
      },
      {
        "t": "Components and Templates",
        "d": "Component anatomy, inputs/outputs, control flow, pipes, and lifecycle.",
        "lv": 1,
        "children": [
          {
            "t": "Component Anatomy and Metadata",
            "d": "Understand the @Component decorator: selector, template, styles, and imports.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "@Component metadata: selector, templateUrl/template, styleUrl, imports",
              "Selectors: element, attribute, and class selector forms",
              "View encapsulation: Emulated (default), None, and ShadowDom"
            ],
            "do": [
              "Generate a component and read every line of its decorator",
              "Change the selector to an attribute selector and use it",
              "Switch encapsulation modes and observe style leaking behavior"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Components", "https://angular.dev/guide/components"]
            ],
            "tip": "Prefer inline template/style for small components and separate files past ~50 lines. Consistency across the codebase matters more than the rule itself."
          },
          {
            "t": "@Input and @Output",
            "d": "Pass data in with inputs and events out with outputs: the component contract.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "@Input() receives data from the parent; inputs are one-way",
              "@Output() with EventEmitter sends events up",
              "The modern signal API: input(), output(), and model() for two-way binding"
            ],
            "do": [
              "Build a child with an @Input user and an @Output selected event",
              "Convert it to signal inputs with input() and outputs with output()",
              "Add a model() two-way binding to a custom input component"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Component inputs", "https://angular.dev/guide/components/inputs"],
              ["Angular docs: Component outputs", "https://angular.dev/guide/components/outputs"]
            ],
            "tip": "Prefer the signal-based input()/output()/model() APIs in new code. They compose with computed() and are the direction the framework is moving."
          },
          {
            "t": "Control Flow: @if, @for, @switch",
            "d": "Use the built-in control flow blocks that replaced *ngIf and *ngFor.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "@if / @else if / @else blocks for conditional rendering",
              "@for with track: the modern list rendering with mandatory tracking",
              "@switch, @case, @default and the @empty block for empty lists"
            ],
            "do": [
              "Rebuild a conditional UI with @if blocks",
              "Render a list with @for (item of items; track item.id) plus an @empty state",
              "Convert an old *ngIf/*ngFor example to the new syntax"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Control flow", "https://angular.dev/guide/templates/control-flow"]
            ],
            "tip": "track is mandatory in @for for a reason: it is the identity key. Track by a stable id, never by $index, for the same reasons as React keys."
          },
          {
            "t": "Pipes: Built-in and Custom",
            "d": "Transform displayed data with pipes and write your own pure pipes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Built-in pipes: date, currency, number, async, json, uppercase",
              "The async pipe: subscribing to Observables directly in templates",
              "Custom pure pipes and why impure pipes are a performance trap"
            ],
            "do": [
              "Format dates, currency, and numbers with built-in pipes",
              "Render an Observable with the async pipe instead of manual subscribe",
              "Write a custom truncate pipe and a filter pipe"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Pipes", "https://angular.dev/guide/templates/pipes"]
            ],
            "tip": "The async pipe manages subscriptions for you, including cleanup. Manual .subscribe() in components is the leading cause of Angular memory leaks."
          },
          {
            "t": "Property, Event, and Two-Way Binding",
            "d": "Master the binding syntaxes: [], (), [()], and attribute vs property binding.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "[src] property binding, (click) event binding, [(ngModel)] two-way binding",
              "Property vs attribute binding: [attr.aria-label] for attributes",
              "Class and style bindings: [class.active], [style.color], [ngClass]"
            ],
            "do": [
              "Bind properties, attributes, classes, and styles in one component",
              "Build a two-way bound input with [(ngModel)] (import FormsModule)",
              "Demonstrate a case needing [attr.] instead of property binding"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Property binding", "https://angular.dev/guide/templates/property-binding"],
              ["Angular docs: Event binding", "https://angular.dev/guide/templates/event-binding"]
            ],
            "tip": "Banana-in-a-box [()] is just [x] plus (xChange) sugar. When two-way binding misbehaves, split it into the two bindings to see which half is broken."
          },
          {
            "t": "Component Lifecycle Hooks",
            "d": "Hook into creation, changes, and destruction with the lifecycle interfaces.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "ngOnInit vs constructor: initialization logic belongs in ngOnInit",
              "ngOnChanges: reacting to input changes with SimpleChanges",
              "ngOnDestroy: the cleanup hook for subscriptions and timers"
            ],
            "do": [
              "Implement OnInit, OnChanges, OnDestroy and log the call order",
              "Fetch data in ngOnInit, not the constructor, and note why",
              "Unsubscribe from an Observable in ngOnDestroy with takeUntilDestroyed"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Lifecycle hooks", "https://angular.dev/guide/components/lifecycle"]
            ],
            "tip": "Constructors should only do dependency injection. Anything that touches inputs, the DOM, or async work belongs in ngOnInit or later."
          },
          {
            "t": "Content Projection with ng-content",
            "d": "Let parents inject markup into children with single and multi-slot projection.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "<ng-content> as the default slot for projected content",
              "Multi-slot projection with select attributes",
              "ngProjectAs for projecting through wrapper components"
            ],
            "do": [
              "Build a Card component projecting header, body, and footer slots",
              "Project content conditionally with ngProjectAs",
              "Compare content projection vs @Input templates for flexibility"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Content projection", "https://angular.dev/guide/components/content-projection"]
            ],
            "tip": "Projected content is compiled in the parent's context, not the child's. It sees parent variables, which is powerful and occasionally surprising."
          },
          {
            "t": "Dynamic Components",
            "d": "Render components chosen at runtime with NgComponentOutlet and the dynamic API.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "NgComponentOutlet for declarative dynamic rendering",
              "Passing inputs to dynamic components",
              "When dynamic components beat *ngIf chains: plugin systems, form renderers"
            ],
            "do": [
              "Build a tab system rendering components from a config array",
              "Pass inputs into the dynamically rendered component",
              "Build a dynamic form renderer mapping field configs to input components"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Dynamic components", "https://angular.dev/guide/components/dynamic"]
            ],
            "tip": "Dynamic components trade compile-time safety for runtime flexibility. Keep the set of possible components explicit and typed; a string-to-component map beats magic."
          }
        ]
      },
      {
        "t": "Signals and Change Detection",
        "d": "Angular's reactive core: signals, computed values, effects, and how change detection works.",
        "lv": 2,
        "children": [
          {
            "t": "Signals: The Reactive Primitive",
            "d": "Create and update signals, the fine-grained reactivity primitive at Angular's core.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "signal(initial): creating writable signals; .set(), .update(), and the () read",
              "Signals notify precisely: only readers of a changed signal update",
              "Signals vs RxJS subjects: when each is the right tool"
            ],
            "do": [
              "Build a counter and a form with signals instead of plain properties",
              "Update with .update() using the previous value",
              "Convert a BehaviorSubject-based service to signals and compare"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Signals", "https://angular.dev/guide/signals"]
            ],
            "tip": "Read signals by calling them: count(), not count.value. Forgetting the call gives you the signal function itself, a classic beginner bug."
          },
          {
            "t": "computed() and effect()",
            "d": "Derive values with computed and run side effects with effect, the signal way.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "computed(() => ...): lazy, memoized derived values",
              "effect(() => ...): side effects that re-run when read signals change",
              "Effects need an injection context; untracked() to read without subscribing"
            ],
            "do": [
              "Derive a filtered list and a total with computed()",
              "Log signal changes with effect() and observe when it re-runs",
              "Use untracked() inside an effect to read a signal without depending on it"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: computed", "https://angular.dev/guide/signals#computed-signals"],
              ["Angular docs: effect", "https://angular.dev/guide/signals#effects"]
            ],
            "tip": "Effects are for side effects (logging, syncing, DOM), never for setting signals that the effect itself reads. That loop is the signal equivalent of an infinite render."
          },
          {
            "t": "Signal-Based Inputs",
            "d": "Use input() and input.required() for typed, reactive component inputs.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "input<T>() creates an InputSignal; input.required<T>() enforces presence",
              "Input transforms: parsing values at the boundary",
              "Inputs as signals compose with computed() naturally"
            ],
            "do": [
              "Convert @Input() properties to input() signals",
              "Add input.required() and observe the compile-time enforcement",
              "Derive display values with computed() reading the input signal"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Signal inputs", "https://angular.dev/guide/components/inputs#signal-inputs"]
            ],
            "tip": "Signal inputs are readonly by design. If the child needs to change the value, that is what model() two-way bindings are for."
          },
          {
            "t": "Model Inputs: Two-Way Binding",
            "d": "Build two-way bound components with model() and [(...)] syntax.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "model<T>() creates a writable signal synced with the parent",
              "Parent syntax: [(value)]=\"parentSignal\" binds both directions",
              "model.required() and when model beats input+output pairs"
            ],
            "do": [
              "Build a custom checkbox with model() supporting [(checked)]",
              "Use it from a parent and verify both directions update",
              "Compare the code against the old @Input/@Output pair version"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Model inputs", "https://angular.dev/guide/components/inputs#model-inputs"]
            ],
            "tip": "Use model() for genuine two-way state like form controls. For everything else, one-way input() keeps data flow predictable."
          },
          {
            "t": "Signal Queries: viewChild and contentChild",
            "d": "Query child components and DOM elements reactively with signal-based queries.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "viewChild() / viewChildren() return signals to queried elements",
              "contentChild() for projected content queries",
              "Queries resolve over time: handle the initially-undefined value"
            ],
            "do": [
              "Get a child component instance with viewChild() and call its method",
              "Query multiple items with viewChildren() and iterate them",
              "Focus an input via viewChild after view init"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: viewChild", "https://angular.dev/guide/components/queries"]
            ],
            "tip": "Signal queries start undefined until the view initializes. Guard with ?. or read them inside effects that re-run when the query resolves."
          },
          {
            "t": "Change Detection and Zones",
            "d": "Understand how Angular knows to update the UI: zones, dirty checking, and OnPush.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Zone.js patches async operations; each one triggers change detection",
              "Default strategy checks the whole tree; OnPush checks only on input/signal changes",
              "Signals + OnPush: the modern performant combination"
            ],
            "do": [
              "Add logging to a template expression and count change detection runs",
              "Switch a component to OnPush and observe which updates stop",
              "Fix a stale OnPush view by making the data a signal"
            ],
            "tools": ["Angular CLI", "Angular DevTools"],
            "res": [
              ["Angular docs: Change detection", "https://angular.dev/best-practices/skipping-subtrees"]
            ],
            "tip": "OnPush with mutable objects is a trap: mutating an input's property does not change its reference, so OnPush never notices. Use immutable updates or signals."
          },
          {
            "t": "Zoneless Applications",
            "d": "Run Angular without Zone.js for faster, more predictable change detection.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What zoneless removes: automatic detection after every async task",
              "What you must do instead: signals, async pipe, and markForCheck discipline",
              "provideZonelessChangeDetection() and the migration path"
            ],
            "do": [
              "Enable zoneless in a small app and fix every view that stops updating",
              "Convert remaining manual subscriptions to async pipe or signals",
              "Measure the bundle and runtime difference"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Zoneless", "https://angular.dev/guide/experimental/zoneless"]
            ],
            "tip": "Zoneless is the future but still maturing. Learn it on greenfield apps; migrating a large zone-based app is a deliberate project, not a flag flip."
          }
        ]
      },
      {
        "t": "Services, DI, and HTTP",
        "d": "Share logic with dependency injection, call APIs with HttpClient, and think in streams with RxJS.",
        "lv": 2,
        "children": [
          {
            "t": "Dependency Injection",
            "d": "Understand Angular's DI: providers, injectors, and the hierarchical resolution.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "providedIn: 'root' vs component-level providers and service lifetime",
              "Constructor injection vs the inject() function",
              "Hierarchical injectors: child injectors shadow parent providers"
            ],
            "do": [
              "Create a service with providedIn: 'root' and inject it in two components",
              "Provide the same service at a component level and prove the instances differ",
              "Use inject() in a function-based guard"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Dependency injection", "https://angular.dev/guide/di"]
            ],
            "tip": "Prefer providedIn: 'root' for app-wide singletons. Component-level providers are for scoped state; using them accidentally creates duplicate service instances."
          },
          {
            "t": "Services and State Sharing",
            "d": "Build services that hold shared state and business logic, exposed as signals or observables.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Services as the home for business logic and shared state",
              "Exposing state as readonly signals with private writable backing",
              "Facade pattern: one service presenting a clean API over complex internals"
            ],
            "do": [
              "Build a UserService with a currentUser signal and login/logout methods",
              "Build a CartService with computed totals",
              "Refactor component-embedded fetch logic into a service"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Services", "https://angular.dev/tutorials/learn-angular/22-services"]
            ],
            "tip": "Components orchestrate; services decide. If a component method has business rules in it, that logic wants to live in a service where it can be tested alone."
          },
          {
            "t": "HttpClient and Typed Requests",
            "d": "Call REST APIs with HttpClient: typed responses, params, and error handling.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "provideHttpClient() setup and injecting HttpClient",
              "Typed get<T>/post<T> calls and HttpParams for query strings",
              "Error handling with catchError and typed error shapes"
            ],
            "do": [
              "Fetch a typed list from JSONPlaceholder and render it",
              "POST a new item with proper typing on request and response",
              "Handle 404/500 errors with user-friendly messages via catchError"
            ],
            "tools": ["Angular CLI", "JSONPlaceholder"],
            "res": [
              ["Angular docs: HTTP client", "https://angular.dev/guide/http"]
            ],
            "tip": "Type every HTTP call with an interface. any-typed responses push API mismatches to runtime, where they become user-facing bugs instead of compile errors."
          },
          {
            "t": "HTTP Interceptors",
            "d": "Cross-cut requests and responses: auth tokens, logging, and error handling in one place.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Functional interceptors with withInterceptors()",
              "Cloning requests to add headers (interceptors must not mutate)",
              "Interceptor ordering and scoping to specific requests"
            ],
            "do": [
              "Write an auth interceptor adding a Bearer token from a service",
              "Write a logging interceptor timing requests",
              "Write an error interceptor redirecting to login on 401"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: HTTP interceptors", "https://angular.dev/guide/http/interceptors"]
            ],
            "tip": "Interceptors run for every request, including ones you did not expect. Guard with URL checks so your auth header does not leak to third-party domains."
          },
          {
            "t": "RxJS: Observables and Subscriptions",
            "d": "Think in streams: Observables, observers, and managing subscription lifecycles.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Observable vs Promise: lazy, cancellable, multiple values over time",
              "Subscribing, unsubscribing, and the async pipe alternative",
              "Hot vs cold observables and Subjects as multicast bridges"
            ],
            "do": [
              "Convert a Promise-based fetch to an Observable and compare cancellation",
              "Create a Subject-based event bus between two components",
              "Find a leaked subscription in a sample app and fix it three ways"
            ],
            "tools": ["Angular CLI", "RxJS"],
            "res": [
              ["RxJS docs", "https://rxjs.dev/guide/overview"],
              ["Angular docs: Observables", "https://angular.dev/guide/observables"]
            ],
            "tip": "Prefer the async pipe over manual subscribe in templates. Every manual subscription is a future memory leak waiting for someone to forget ngOnDestroy."
          },
          {
            "t": "RxJS Operators: map, filter, switchMap",
            "d": "Transform and combine streams with the operators you will actually use daily.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Transformation: map, switchMap/mergeMap/concatMap and when each applies",
              "Filtering: filter, debounceTime, distinctUntilChanged, take/takeUntil",
              "Combination: combineLatest, forkJoin, and error handling with catchError"
            ],
            "do": [
              "Build a typeahead search with debounceTime + distinctUntilChanged + switchMap",
              "Explain why switchMap (not mergeMap) is correct for search",
              "Combine two API calls with forkJoin and handle one failing"
            ],
            "tools": ["Angular CLI", "RxJS"],
            "res": [
              ["RxJS: Operators", "https://rxjs.dev/guide/operators"]
            ],
            "tip": "switchMap cancels the previous inner observable. For search-as-you-type that is exactly right; for save operations where every request must complete, it silently drops data. Choose deliberately."
          },
          {
            "t": "RxJS and Signals Interop",
            "d": "Bridge the two reactive worlds: convert observables to signals and back.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "toSignal(): consuming an Observable as a signal with initialValue",
              "toObservable(): exposing a signal as a stream for RxJS operators",
              "Migration strategy: which layer to convert first in existing apps"
            ],
            "do": [
              "Convert an HttpClient Observable to a signal with toSignal()",
              "Convert a signal to an Observable and debounce it with RxJS operators",
              "Design a service exposing signals publicly while using RxJS internally"
            ],
            "tools": ["Angular CLI", "RxJS"],
            "res": [
              ["Angular docs: RxJS interop", "https://angular.dev/guide/signals/rxjs-interop"]
            ],
            "tip": "A pragmatic pattern: RxJS inside services for complex async orchestration, signals at the component boundary. Interop functions make the handoff clean."
          }
        ]
      },
      {
        "t": "Routing and Forms",
        "d": "Navigate with the Router and build robust forms, reactive and template-driven.",
        "lv": 2,
        "children": [
          {
            "t": "Router: Routes and Outlets",
            "d": "Configure routes, navigate, and read route state with the modern functional router.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "provideRouter() with a Routes array: path, component, and redirects",
              "<router-outlet> and routerLink navigation",
              "Reading params and queryParams as signals with withComponentInputBinding"
            ],
            "do": [
              "Set up routes for Home, About, and a wildcard NotFound",
              "Build navigation with routerLink and routerLinkActive",
              "Bind a route param directly to a component input signal"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Routing", "https://angular.dev/guide/routing"]
            ],
            "tip": "withComponentInputBinding turns route params into plain @Input bindings. It removes a whole class of ActivatedRoute subscription boilerplate."
          },
          {
            "t": "Lazy Loading Routes",
            "d": "Split your app by route with loadComponent and loadChildren for fast initial loads.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "loadComponent for standalone route components",
              "loadChildren for lazy feature route groups",
              "Preloading strategies: PreloadAllModules vs custom selective preloading"
            ],
            "do": [
              "Lazy-load an admin section and verify the separate chunk in the network tab",
              "Enable PreloadAllModules and compare load behavior",
              "Write a custom preloading strategy for routes marked with data.preload"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Lazy loading", "https://angular.dev/guide/routing/define-routes#lazy-loading"]
            ],
            "tip": "Lazy-load by feature area, not by every component. Dozens of tiny chunks create request waterfalls; a handful of feature chunks is the sweet spot."
          },
          {
            "t": "Route Guards",
            "d": "Protect routes with functional guards: auth, roles, and unsaved-changes checks.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "canActivate and canActivateChild for access control",
              "canDeactivate for dirty-form warnings",
              "Functional guards with inject() vs class-based guards"
            ],
            "do": [
              "Write an authGuard redirecting to /login when no user signal exists",
              "Write a roleGuard checking admin role from a service",
              "Write a canDeactivate guard prompting on unsaved form changes"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Route guards", "https://angular.dev/guide/routing/route-guards"]
            ],
            "tip": "Guards are UX, not security. Always enforce authorization on the server too; a guard only stops honest navigation."
          },
          {
            "t": "Reactive Forms",
            "d": "Build explicit, testable forms with FormGroup, FormControl, and FormArray.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "FormControl, FormGroup, FormArray: the form model as code",
              "formControlName bindings and reading value/status reactively",
              "Dynamic forms: adding and removing controls at runtime"
            ],
            "do": [
              "Build a registration form with nested FormGroup for address",
              "Add a dynamic list of phone numbers with FormArray",
              "Disable the submit button based on form status and show control errors"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Reactive forms", "https://angular.dev/guide/forms/reactive-forms"]
            ],
            "tip": "Reactive forms put the form model in TypeScript where it can be tested. For anything beyond a login box, they beat template-driven forms decisively."
          },
          {
            "t": "Typed Forms",
            "d": "Get compile-time safety for forms with Angular's typed form APIs.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "FormControl<string>, FormGroup<{name: FormControl<string>}> generics",
              "NonNullableFormBuilder for controls that never hold null",
              "Typing FormArray elements and getRawValue() for disabled controls"
            ],
            "do": [
              "Convert an untyped form to fully typed and fix the compile errors",
              "Use NonNullableFormBuilder and observe the type differences",
              "Extract a form value type and reuse it as your submit payload type"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Typed forms", "https://angular.dev/guide/forms/typed-forms"]
            ],
            "tip": "Typed forms turn 'is this control null?' from a runtime surprise into a compile error. The migration pays for itself on the first refactor."
          },
          {
            "t": "Custom Validators",
            "d": "Write sync and async validators and compose them for real business rules.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ValidatorFn shape: returning null or a ValidationErrors object",
              "Cross-field validators on FormGroup (password confirmation)",
              "Async validators for server checks like username availability"
            ],
            "do": [
              "Write a password-strength validator function",
              "Write a cross-field validator ensuring two fields match",
              "Write an async validator debouncing a username-availability check"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Form validation", "https://angular.dev/guide/forms/form-validation"]
            ],
            "tip": "Async validators fire on every keystroke by default. Debounce inside the validator or set updateOn: 'blur' to avoid hammering your API."
          },
          {
            "t": "Template-Driven Forms",
            "d": "Know the simpler ngModel approach and exactly when it is enough.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "ngModel with name attributes creating the form model implicitly",
              "#form=\"ngForm\" for form-level state and validation",
              "The tradeoff: less code, less control, harder to test"
            ],
            "do": [
              "Build a simple contact form with ngModel and required validation",
              "Show validation messages using the exported ngModel references",
              "Decide for three form scenarios which approach fits and justify it"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Template-driven forms", "https://angular.dev/guide/forms/template-driven-forms"]
            ],
            "tip": "Template-driven is fine for two-field forms. The moment you need dynamic fields, cross-field rules, or unit tests, switch to reactive forms without guilt.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "State, Styling, and Ecosystem",
        "d": "Scale state management, style with component libraries, and render on the server.",
        "lv": 2,
        "children": [
          {
            "t": "SignalStore: Modern State Management",
            "d": "Manage feature state with @ngrx/signals: stores built on signals, no boilerplate.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "signalStore with withState, withComputed, withMethods",
              "withEntities for normalized collections",
              "When SignalStore fits vs plain services vs full NgRx"
            ],
            "do": [
              "Build a products SignalStore with loading state and computed filters",
              "Add withEntities and implement add/update/remove",
              "Write methods that call HttpClient and patch state on response"
            ],
            "tools": ["NgRx Signals", "Angular CLI"],
            "res": [
              ["NgRx Signals docs", "https://ngrx.io/guide/signals"]
            ],
            "tip": "Start with SignalStore for feature state. Reach for full NgRx only when you need its devtools time-travel, effects orchestration, or team-wide conventions."
          },
          {
            "t": "NgRx: Actions, Reducers, Effects",
            "d": "Learn the classic Redux-pattern store for large teams and complex async flows.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Actions, reducers, selectors: the unidirectional data flow",
              "Effects for side effects: API calls triggered by actions",
              "Entity adapter for normalized collections and DevTools time travel"
            ],
            "do": [
              "Install @ngrx/store and build a feature slice with actions and a reducer",
              "Add an effect that loads data from HttpClient on a load action",
              "Debug a state bug using the Redux DevTools time-travel"
            ],
            "tools": ["NgRx", "Redux DevTools"],
            "res": [
              ["NgRx docs", "https://ngrx.io/guide/store"],
              ["NgRx Effects", "https://ngrx.io/guide/effects"]
            ],
            "tip": "NgRx's boilerplate is real and deliberate: explicitness scales across teams. Do not adopt it for a solo CRUD app; do adopt it when six developers share state.",
            "tag": "opt"
          },
          {
            "t": "Angular Material",
            "d": "Build polished UIs fast with the official Material component library.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ng add @angular/material: schematics-driven installation",
              "Core components: table, dialog, form fields, navigation",
              "Theming with Material palettes and typography config"
            ],
            "do": [
              "Add Material and build a data table with sorting and pagination",
              "Build a dialog-based create form",
              "Customize the theme colors to match a brand"
            ],
            "tools": ["Angular Material", "Angular CLI"],
            "res": [
              ["Angular Material docs", "https://material.angular.dev/"]
            ],
            "tip": "Material looks like Material. For admin dashboards that is perfect; for a bespoke brand site, budget significant theming time or pick a headless approach."
          },
          {
            "t": "Styling: View Encapsulation and Design Systems",
            "d": "Style Angular apps at scale: encapsulation, global styles, and token systems.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Component styles vs global styles.scss: what goes where",
              "CSS custom properties for theming across encapsulation boundaries",
              "Integrating Tailwind or a design system with Angular"
            ],
            "do": [
              "Define a token set in styles.scss and consume it in components",
              "Implement a dark mode toggle flipping a class on the document",
              "Add Tailwind to an Angular project and use utilities in a template"
            ],
            "tools": ["Angular CLI", "Tailwind CSS"],
            "res": [
              ["Angular: Styles and global CSS", "https://angular.dev/guide/components/styling"]
            ],
            "tip": "Encapsulated styles cannot reach projected content or child components. Tokens and global utility classes are the sanctioned bridges."
          },
          {
            "t": "SSR and Hydration",
            "d": "Render on the server with Angular SSR for SEO and fast first paint.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "ng add @angular/ssr: server setup and the hydration process",
              "Hydration mismatches: what breaks when server and client HTML differ",
              "afterRender/afterNextRender for browser-only code in SSR apps"
            ],
            "do": [
              "Add SSR to your app and verify content in view-source",
              "Trigger a hydration mismatch on purpose and read the warning",
              "Guard browser-only code (localStorage, window) for the server"
            ],
            "tools": ["Angular CLI", "Angular SSR"],
            "res": [
              ["Angular docs: Server-side rendering", "https://angular.dev/guide/ssr"]
            ],
            "tip": "Every direct window/document access is an SSR crash waiting to happen. Wrap browser APIs in afterNextRender or platform checks from day one."
          },
          {
            "t": "Internationalization (i18n)",
            "d": "Localize apps with Angular's built-in i18n: marked messages and locale builds.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Marking messages with i18n attributes in templates",
              "Extracting messages to XLIFF and the translate workflow",
              "Building per-locale bundles and serving the right one"
            ],
            "do": [
              "Mark ten template strings with i18n and extract them",
              "Translate the XLIFF file to a second language",
              "Build both locales and serve each"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: i18n", "https://angular.dev/guide/i18n"]
            ],
            "tip": "Angular i18n requires one build per locale, unlike runtime libraries. Plan your deployment pipeline for N builds before committing to it.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Performance, Testing, and Security",
        "d": "Ship production Angular: performance techniques, the testing pyramid, and security hardening.",
        "lv": 3,
        "children": [
          {
            "t": "Deferrable Views with @defer",
            "d": "Lazy-load template sections declaratively with @defer triggers.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "@defer block syntax with @placeholder, @loading, @error states",
              "Triggers: on viewport, on interaction, on timer, when conditions",
              "Prefetching with prefetch triggers for instant-feeling loads"
            ],
            "do": [
              "Defer a heavy comments section to on viewport",
              "Add placeholder skeletons and error states",
              "Measure initial bundle reduction in the build output"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Deferrable views", "https://angular.dev/guide/templates/deferrable-views"]
            ],
            "tip": "@defer is route-level lazy loading for parts of a page. Use it for below-the-fold heavy content; deferring above-the-fold content hurts perceived performance."
          },
          {
            "t": "Performance Tuning",
            "d": "Apply the full performance playbook: OnPush, pure pipes, trackBy thinking, and bundle budgets.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "OnPush everywhere as the default component strategy",
              "Pure pipes and memoized computed over template method calls",
              "Bundle budgets, lazy features, and analyzing with source-map-explorer"
            ],
            "do": [
              "Convert an app to OnPush and fix every stale view with signals or immutability",
              "Replace template method calls with pure pipes or computed signals",
              "Set bundle budgets in angular.json and get under them"
            ],
            "tools": ["Angular CLI", "source-map-explorer"],
            "res": [
              ["Angular: Performance best practices", "https://angular.dev/best-practices"]
            ],
            "tip": "Method calls in templates run on every change detection cycle. That innocent getFullName() in the template is the most common Angular performance bug."
          },
          {
            "t": "Unit Testing: Components and Services",
            "d": "Test with TestBed: component fixtures, service injection, and async testing.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "TestBed configuration: imports, providers, and compileComponents",
              "ComponentFixture: detectChanges and querying the DOM",
              "Testing services with mocked dependencies via providers"
            ],
            "do": [
              "Write a TestBed test for a component: set input, detectChanges, assert DOM",
              "Test a service with HttpClient mocked via HttpTestingController",
              "Test an async method with fakeAsync and tick"
            ],
            "tools": ["Jasmine", "Karma", "Angular CLI"],
            "res": [
              ["Angular docs: Testing", "https://angular.dev/guide/testing"]
            ],
            "tip": "TestBed tests are slower than plain unit tests. Test pure logic (validators, reducers, utils) without TestBed; reserve it for component-DOM interaction."
          },
          {
            "t": "Testing HTTP and Async Code",
            "d": "Verify network interactions and async flows deterministically.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "HttpTestingController: expectOne, flush responses, verify no outstanding",
              "Marble testing for complex RxJS operator chains",
              "Testing route guards and resolvers with RouterTestingHarness"
            ],
            "do": [
              "Test a service method asserting the exact URL and method, then flush mock data",
              "Test error paths by flushing an error response",
              "Marble-test a debounced search operator chain"
            ],
            "tools": ["Jasmine", "RxJS"],
            "res": [
              ["Angular docs: Testing HTTP", "https://angular.dev/guide/http/testing"]
            ],
            "tip": "Always call httpMock.verify() after HTTP tests. Without it, unexpected requests pass silently and your test proves nothing."
          },
          {
            "t": "E2E Testing",
            "d": "Cover critical journeys end to end with Playwright or Cypress.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Setting up Playwright against ng serve",
              "Page object vs locator patterns for maintainable tests",
              "What belongs in E2E: auth, checkout, core happy paths"
            ],
            "do": [
              "Write an E2E test logging in and creating a record",
              "Run it in CI mode and debug with traces",
              "Keep the suite under 10 tests covering only critical paths"
            ],
            "tools": ["Playwright"],
            "res": [
              ["Playwright docs", "https://playwright.dev/docs/intro"]
            ],
            "tip": "E2E tests must be independent and idempotent. Shared state between tests is the number one source of flaky suites."
          },
          {
            "t": "Security: Sanitization and XSS",
            "d": "Use Angular's built-in protections correctly and know where they do not apply.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Automatic sanitization of interpolated values and bound properties",
              "DomSanitizer and bypassSecurityTrustHtml: the escape hatch and its danger",
              "CSP, trusted types, and XSRF protection with HttpClient"
            ],
            "do": [
              "Attempt an XSS via interpolation and watch Angular neutralize it",
              "Use DomSanitizer correctly for a legitimate trusted-HTML case",
              "Configure a Content Security Policy for your built app"
            ],
            "tools": ["Angular CLI"],
            "res": [
              ["Angular docs: Security", "https://angular.dev/best-practices/security"]
            ],
            "tip": "bypassSecurityTrustX is named like a warning label because it is one. Every call needs a comment explaining why the value is actually safe."
          },
          {
            "t": "Builds, Environments, and Deployment",
            "d": "Configure production builds: environments, optimization, and deployment targets.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Build configurations: production optimizations, file replacements",
              "Environment-specific values without rebuilding (runtime config pattern)",
              "Deployment: static hosts, containers, and SSR server targets"
            ],
            "do": [
              "Add a staging configuration to angular.json",
              "Implement runtime config loaded via APP_INITIALIZER",
              "Build for production and deploy the dist to a static host"
            ],
            "tools": ["Angular CLI", "Docker"],
            "res": [
              ["Angular: Build environments", "https://angular.dev/reference/configs/workspace-config#build-targets"]
            ],
            "tip": "Baking API URLs into the build means one artifact per environment. Runtime config via APP_INITIALIZER gives you one artifact that works everywhere."
          }
        ]
      }
    ]
  }
});
