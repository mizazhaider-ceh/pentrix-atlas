/* Atlas roadmap data: Android (android)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "android",
  "title": "Android",
  "icon": "📲",
  "color": "#15803d",
  "kind": "role",
  "tagline": "Kotlin apps, shipped to the Play Store.",
  "desc": "The complete path to becoming an Android developer: Kotlin, Jetpack Compose, modern app architecture, and publishing a real app to the Google Play Store.",
  "root": {
    "t": "Android Development",
    "d": "Build native Android apps with Kotlin and Jetpack Compose — from your first Activity to a live Play Store release.",
    "children": [
      {
        "t": "Kotlin: The Language",
        "d": "Google's first-choice language for Android: null safety, coroutines-ready syntax, and expressive brevity.",
        "lv": 1,
        "children": [
          {
            "t": "Why Kotlin for Android",
            "d": "The language story: how Kotlin replaced Java as Android's default and why it matters.",
            "lv": 1,
            "time": "~2h",
            "tip": "Learn Kotlin, not Java, for new Android work. Java knowledge helps reading legacy code — that's its remaining role.",
            "learn": [
              "Google's Kotlin-first announcement: what 'first-class' means for APIs and tooling",
              "Java interoperability: why the entire Android SDK is usable from Kotlin on day one",
              "What Kotlin fixes: null safety, verbosity, and the callback patterns Java forced on Android"
            ],
            "do": [
              "Read the Kotlin story on kotlinlang.org and note the Android-specific pitch",
              "Compare the same Activity written in Java vs Kotlin line counts",
              "Find three Android APIs that are nicer in Kotlin (e.g. apply blocks, extension functions)"
            ],
            "tools": ["Android Studio", "Kotlin"],
            "res": [
              ["Kotlin", "https://kotlinlang.org/"],
              ["Android Developers", "https://developer.android.com/"]
            ]
          },
          {
            "t": "Setting Up: JDK & Your IDE",
            "d": "Android Studio installation, SDK management, and your first Kotlin program.",
            "lv": 1,
            "time": "~3h",
            "tip": "Install the SDK platforms you'll actually target plus one emulator image — not every API level ever released.",
            "learn": [
              "Android Studio: the IntelliJ-based IDE, its Android plugin, and the SDK Manager",
              "JDK requirements: which JDK version your Android Gradle Plugin expects",
              "The Kotlin compiler: kotlinc in the IDE vs the command line"
            ],
            "do": [
              "Install Android Studio and the latest stable SDK platform",
              "Create a Kotlin scratch file and run a hello-world function",
              "Open SDK Manager and note installed platforms, build tools, and emulator images"
            ],
            "tools": ["Android Studio", "JDK"],
            "res": [
              ["Android Studio", "https://developer.android.com/studio"]
            ]
          },
          {
            "t": "Kotlin Basics",
            "d": "val/var, string templates, when expressions — the everyday Kotlin you'll write constantly.",
            "lv": 1,
            "time": "~1d",
            "tip": "when is an expression in Kotlin — it returns a value. Use that instead of assigning inside branches.",
            "learn": [
              "val vs var, type inference, and explicit types at API boundaries",
              "String templates and multi-line strings for readable text building",
              "when expressions: Kotlin's exhaustive, value-returning switch"
            ],
            "do": [
              "Write a grade calculator with a when expression returning the result",
              "Build formatted output with string templates and trimMargin multi-line strings",
              "Convert Java-style if-else chains into when expressions"
            ],
            "tools": ["Android Studio", "Kotlin"],
            "res": [
              ["Kotlin Tour", "https://kotlinlang.org/docs/home.html"]
            ]
          },
          {
            "t": "Null Safety",
            "d": "Nullable types and the operators that tame them — Kotlin's answer to the billion-dollar mistake.",
            "lv": 1,
            "time": "~1d",
            "tip": "!! is a crash waiting for production. Every !! you write is a NullPointerException you chose to schedule.",
            "learn": [
              "Nullable types (String?): the type system tracks nullability at compile time",
              "Safe calls (?.), the Elvis operator (?:), and smart casts after null checks",
              "Platform types: Java APIs return String! — the compiler can't help you, so check"
            ],
            "do": [
              "Parse nullable user input with safe calls and Elvis defaults — zero !! allowed",
              "Handle a Java API returning a platform type with an explicit null check",
              "Refactor a !!-heavy snippet into safe-call chains"
            ],
            "tools": ["Android Studio", "Kotlin"],
            "res": [
              ["Kotlin Null Safety", "https://kotlinlang.org/docs/null-safety.html"]
            ]
          },
          {
            "t": "Collections & Lambdas",
            "d": "Lists, maps, sets, and the lambda + scope-function style that defines idiomatic Kotlin.",
            "lv": 1,
            "time": "~1d",
            "tip": "Learn let, apply, also, and run — but use them sparingly. Nested scope functions are the new callback hell.",
            "learn": [
              "Immutable-first collections: listOf/mapOf and when to choose mutable variants",
              "Lambdas: trailing-lambda syntax, it, and destructuring in parameters",
              "Scope functions (let/apply/also/run/with): what each returns and when each fits"
            ],
            "do": [
              "Transform API-like data with map/filter/groupBy chains",
              "Configure an object with apply and compute a value with run — then compare readability",
              "Use let to safely operate on a nullable value without an if block"
            ],
            "tools": ["Android Studio", "Kotlin"],
            "res": [
              ["Kotlin Collections", "https://kotlinlang.org/docs/collections-overview.html"]
            ]
          },
          {
            "t": "OOP in Kotlin",
            "d": "Classes, data classes, sealed hierarchies, and objects — Kotlin's pragmatic take on OOP.",
            "lv": 1,
            "time": "~1d",
            "tip": "Reach for sealed classes/interfaces to model UI state. The compiler's exhaustiveness check is free bug prevention.",
            "learn": [
              "Primary constructors, init blocks, and properties declared in the constructor",
              "Data classes: equals/hashCode/toString/copy generated for free",
              "Sealed classes and interfaces: closed hierarchies the compiler can check exhaustively"
            ],
            "do": [
              "Model a UI screen's states as a sealed interface (Loading, Content, Error)",
              "Write a data class and use copy() to derive modified instances",
              "Create a singleton with object and a companion object factory"
            ],
            "tools": ["Android Studio", "Kotlin"],
            "res": [
              ["Kotlin Classes", "https://kotlinlang.org/docs/classes.html"]
            ]
          }
        ]
      },
      {
        "t": "Android Studio & Your First App",
        "d": "The IDE, project anatomy, the Activity lifecycle, and running code on an emulator.",
        "lv": 1,
        "children": [
          {
            "t": "Mastering Android Studio",
            "d": "Beyond the editor: the profilers, inspectors, and shortcuts professionals live in.",
            "lv": 1,
            "time": "~4h",
            "tip": "Learn Shift+Shift (search everywhere) and Ctrl/Cmd+B (go to declaration). Navigation speed compounds daily.",
            "learn": [
              "Key windows: Project view, Logcat, Device Manager, and the App Inspection tools",
              "Live templates and postfix completion for writing Kotlin faster",
              "Plugins and settings worth changing on day one (Kotlin plugin is built in)"
            ],
            "do": [
              "Memorize 10 navigation shortcuts and use them exclusively for a day",
              "Create a live template for a common Compose pattern",
              "Open every tool window once so nothing is unfamiliar later"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Android Studio", "https://developer.android.com/studio"]
            ]
          },
          {
            "t": "Project Anatomy",
            "d": "Modules, Gradle files, the manifest, and resources — what's actually inside an Android project.",
            "lv": 1,
            "time": "~4h",
            "tip": "The manifest declares what your app IS to the system (permissions, components, entry points). Read it before Stack Overflow.",
            "learn": [
              "Modules and Gradle build files: app-level vs project-level, dependencies, and plugins",
              "AndroidManifest.xml: activities, permissions, intent filters, and the launcher entry point",
              "Resources (res/): strings, drawables, themes — and the generated R class that references them"
            ],
            "do": [
              "Create a project from the template and map every top-level directory to its purpose",
              "Add a permission and a second activity to the manifest manually",
              "Extract hardcoded strings and colors into resources and reference them"
            ],
            "tools": ["Android Studio", "Gradle"],
            "res": [
              ["App Manifest Overview", "https://developer.android.com/guide/topics/manifest/manifest-intro"]
            ]
          },
          {
            "t": "Activities & the Lifecycle",
            "d": "The component lifecycle that defines Android: create, start, resume, pause, stop, destroy.",
            "lv": 1,
            "time": "~1d",
            "tip": "Configuration changes (rotation) destroy and recreate your Activity. State that must survive goes in a ViewModel, not the Activity.",
            "learn": [
              "The lifecycle callbacks and what belongs in each (setup in onCreate, cleanup in onDestroy)",
              "Configuration changes: why rotation recreates everything and how saved state helps",
              "The back stack and task model: how the system manages your screens"
            ],
            "do": [
              "Log every lifecycle callback while rotating, backgrounding, and pressing back",
              "Save and restore a form's content across rotation with onSaveInstanceState",
              "Launch a second activity, pass data via Intent extras, and return a result"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Activity Lifecycle", "https://developer.android.com/guide/components/activities/activity-lifecycle"]
            ]
          },
          {
            "t": "Your First Screen",
            "d": "Views or Compose? The decision, then a working screen running on an emulator.",
            "lv": 1,
            "time": "~1d",
            "tip": "Start new screens in Compose. Learn enough XML Views to read legacy code — that's the industry split in 2026.",
            "learn": [
              "The two UI toolkits: classic Views (XML) vs Jetpack Compose (Kotlin)",
              "setContentView vs setContent: how each toolkit attaches UI to an Activity",
              "Running on the emulator: creating an AVD and deploying your first build"
            ],
            "do": [
              "Build the same login screen in XML Views and in Compose, then compare",
              "Create an emulator AVD matching a popular device and run your app on it",
              "Enable USB debugging and run the app on a physical device"
            ],
            "tools": ["Android Studio", "Emulator"],
            "res": [
              ["Jetpack Compose", "https://developer.android.com/jetpack/compose"]
            ]
          },
          {
            "t": "Debugging on Android",
            "d": "Logcat, breakpoints, and ADB — finding bugs on a real device.",
            "lv": 1,
            "time": "~4h",
            "tip": "Use Timber over raw Log in real apps, and never ship verbose logging that prints user data.",
            "learn": [
              "Logcat: filtering by tag and level, and reading stack traces",
              "Breakpoints: conditional breakpoints and evaluating expressions mid-debug",
              "ADB essentials: installing APKs, pulling files, and reading device state from the terminal"
            ],
            "do": [
              "Set a conditional breakpoint that only fires on a specific list item",
              "Filter Logcat to your app's tag and trace a crash from stack trace to line",
              "Use adb to install an APK and screenshot the device from the command line"
            ],
            "tools": ["Android Studio", "Logcat", "ADB"],
            "res": [
              ["Debug Your App", "https://developer.android.com/studio/debug"]
            ]
          }
        ]
      },
      {
        "t": "Jetpack Compose: Modern UI",
        "d": "Android's declarative UI toolkit: composables, state, Material 3, and navigation.",
        "lv": 2,
        "children": [
          {
            "t": "Thinking in Compose",
            "d": "Composable functions and recomposition — the mental model everything else builds on.",
            "lv": 2,
            "time": "~1d",
            "tip": "Composable functions must be side-effect free and idempotent. If it behaves differently on re-run, recomposition will punish you.",
            "learn": [
              "@Composable functions: UI as Kotlin functions that emit descriptions, not widgets you mutate",
              "Recomposition: what triggers it, what it skips, and why it's usually cheap",
              "The composition vs the UI tree: understanding what Compose remembers between frames"
            ],
            "do": [
              "Build a counter screen and add prints to see exactly when recomposition happens",
              "Extract repeated UI into small composables with clear parameters",
              "Break recomposition with a side effect in a composable, then fix it"
            ],
            "tools": ["Android Studio", "Jetpack Compose"],
            "res": [
              ["Jetpack Compose", "https://developer.android.com/jetpack/compose"],
              ["Compose Mental Model", "https://developer.android.com/jetpack/compose/mental-model"]
            ]
          },
          {
            "t": "Composables, Modifiers & Layouts",
            "d": "Column, Row, Box, and the Modifier chain — composing real screens.",
            "lv": 2,
            "time": "~1d",
            "tip": "Modifier order matters: padding then background vs background then padding produce different results — same as SwiftUI.",
            "learn": [
              "Layout composables: Column, Row, Box, and how they measure and place children",
              "Modifiers: the chained pipeline for padding, backgrounds, click handling, and more",
              "Custom layouts: when Layout {} is needed and how the measure/place contract works"
            ],
            "do": [
              "Rebuild a social post card (avatar row, image, action bar) with Column/Row/Box",
              "Swap modifier order on one element and document the visual difference",
              "Build a badge composable reused across three screens"
            ],
            "tools": ["Android Studio", "Jetpack Compose"],
            "res": [
              ["Compose Layouts", "https://developer.android.com/jetpack/compose/layouts/basics"]
            ]
          },
          {
            "t": "State in Compose",
            "d": "remember, mutableStateOf, and state hoisting — the core skill of Compose development.",
            "lv": 2,
            "time": "~2d",
            "tip": "Hoist state up: state lives in the caller, events flow down. A composable that owns shared state is a bug factory.",
            "learn": [
              "State and MutableState: observable holders that trigger recomposition on change",
              "remember vs rememberSaveable: surviving recomposition vs surviving rotation",
              "State hoisting: making composables stateless and reusable; derivedStateOf for computed state"
            ],
            "do": [
              "Build a form where the parent owns all state and children receive values + callbacks",
              "Use rememberSaveable to survive rotation without a ViewModel",
              "Fix a text field that loses input by hoisting its state correctly"
            ],
            "tools": ["Android Studio", "Jetpack Compose"],
            "res": [
              ["State in Compose", "https://developer.android.com/jetpack/compose/state"]
            ]
          },
          {
            "t": "Material 3 Theming",
            "d": "Color schemes, typography, and shapes — making your app look designed, not default.",
            "lv": 2,
            "time": "~1d",
            "tip": "Define your theme once in MaterialTheme and never hardcode a color in a screen again.",
            "learn": [
              "Material 3 foundations: color roles (primary, surface, on-*), type scale, and shape scale",
              "Dynamic color: adapting to the user's wallpaper on Android 12+",
              "Dark theme: designing both schemes from the start, not as an afterthought"
            ],
            "do": [
              "Generate a theme from a seed color and apply it app-wide",
              "Support dark mode and verify every screen in both themes",
              "Build custom button and card styles on top of MaterialTheme tokens"
            ],
            "tools": ["Android Studio", "Material 3"],
            "res": [
              ["Material 3", "https://m3.material.io/"],
              ["Material Theme in Compose", "https://developer.android.com/jetpack/compose/designsystems/material3"]
            ]
          },
          {
            "t": "Lists & Lazy Layouts",
            "d": "LazyColumn, LazyRow, and grids — performant scrolling lists at any scale.",
            "lv": 2,
            "time": "~1d",
            "tip": "Always pass stable keys to items(). Without keys, reordering and animations produce wrong-item bugs.",
            "learn": [
              "LazyColumn/LazyRow/LazyVerticalGrid: composing only visible items",
              "Keys and content types: stable identity for correct animations and state",
              "Sticky headers, item animations, and pull-to-refresh patterns"
            ],
            "do": [
              "Build a feed with LazyColumn, sticky date headers, and item keys",
              "Add swipe-to-dismiss with animation to list items",
              "Implement infinite scroll that loads the next page near the list end"
            ],
            "tools": ["Android Studio", "Jetpack Compose"],
            "res": [
              ["Compose Lists", "https://developer.android.com/jetpack/compose/lists"]
            ]
          },
          {
            "t": "Navigation Compose",
            "d": "Type-safe navigation between screens with the Navigation component.",
            "lv": 2,
            "time": "~1d",
            "tip": "Use type-safe routes with serializable destinations. Stringly-typed routes are how navigation arguments get lost.",
            "learn": [
              "NavController and NavHost: the graph that defines your app's screens",
              "Type-safe routes: serializable destination classes with arguments",
              "Deep links, back-stack manipulation, and bottom-navigation integration"
            ],
            "do": [
              "Build a three-screen flow with type-safe routes and argument passing",
              "Add a bottom navigation bar wired to the NavController",
              "Implement a deep link that opens a detail screen directly"
            ],
            "tools": ["Android Studio", "Navigation Compose"],
            "res": [
              ["Navigation in Compose", "https://developer.android.com/jetpack/compose/navigation"]
            ]
          },
          {
            "t": "Side Effects Done Right",
            "d": "LaunchedEffect, DisposableEffect, and friends — effects that respect the composition lifecycle.",
            "lv": 2,
            "time": "~1d",
            "tip": "If you're launching a coroutine in a composable without LaunchedEffect or rememberCoroutineScope, it's probably leaking.",
            "learn": [
              "LaunchedEffect: coroutines tied to composition, restarted on key change",
              "rememberCoroutineScope: launching from event handlers like clicks",
              "DisposableEffect: setup/teardown pairs (listeners, observers) with onDispose"
            ],
            "do": [
              "Fetch data in LaunchedEffect keyed on a search query",
              "Register and unregister a listener with DisposableEffect",
              "Fix a leaked coroutine by moving it from a raw launch into LaunchedEffect"
            ],
            "tools": ["Android Studio", "Jetpack Compose"],
            "res": [
              ["Side Effects in Compose", "https://developer.android.com/jetpack/compose/side-effects"]
            ]
          }
        ]
      },
      {
        "t": "App Architecture",
        "d": "MVVM, clean layers, and dependency injection — structuring apps that survive growth.",
        "lv": 2,
        "children": [
          {
            "t": "MVVM on Android",
            "d": "ViewModels, UiState, and unidirectional data flow — Google's recommended pattern.",
            "lv": 2,
            "time": "~2d",
            "tip": "One immutable UiState data class per screen. Multiple scattered StateFlows per screen become untestable.",
            "learn": [
              "ViewModel: surviving configuration changes and scoping to navigation destinations",
              "UiState pattern: a single immutable state object rendered by the UI",
              "Unidirectional data flow: events up, state down — the same contract as SwiftUI"
            ],
            "do": [
              "Build a screen with ViewModel + single UiState data class + events",
              "Rotate the device and prove state survives via the ViewModel",
              "Write a unit test for the ViewModel with a fake repository"
            ],
            "tools": ["Android Studio", "Lifecycle ViewModel"],
            "res": [
              ["Guide to App Architecture", "https://developer.android.com/topic/architecture"]
            ]
          },
          {
            "t": "Lifecycle-Aware Components",
            "d": "Collecting flows safely: repeatOnLifecycle and friends that prevent leaks and wasted work.",
            "lv": 2,
            "time": "~1d",
            "tip": "Collect UI state with collectAsStateWithLifecycle, not collectAsState. The lifecycle-aware variant stops work when the screen is in the background.",
            "learn": [
              "The Lifecycle: how components observe STARTED/RESUMED states",
              "repeatOnLifecycle: restarting collectors only while the UI is visible",
              "collectAsStateWithLifecycle: the correct Compose collector"
            ],
            "do": [
              "Collect a Flow in a composable with collectAsStateWithLifecycle",
              "Prove background collection stops using logging in repeatOnLifecycle",
              "Fix a screen that keeps polling the network while in the background"
            ],
            "tools": ["Android Studio", "Lifecycle"],
            "res": [
              ["Kotlin Flows on Android", "https://developer.android.com/kotlin/flow"]
            ]
          },
          {
            "t": "Coroutines & Flow",
            "d": "Kotlin's async foundation: suspend functions, Flows, and the dispatchers underneath.",
            "lv": 2,
            "time": "~2d",
            "tip": "Never use GlobalScope. Structured concurrency (viewModelScope, lifecycleScope) is how coroutines get cancelled instead of leaked.",
            "learn": [
              "Suspend functions and coroutine builders: launch, async, and structured scopes",
              "Dispatchers: Main vs IO vs Default — and why withContext switches cheaply",
              "Flow, StateFlow, SharedFlow: cold streams, state holders, and one-shot events"
            ],
            "do": [
              "Rewrite callback code with suspend functions and viewModelScope",
              "Build a debounced search with Flow operators (debounce, flatMapLatest)",
              "Choose StateFlow vs SharedFlow for three different screen scenarios"
            ],
            "tools": ["Android Studio", "Kotlin Coroutines"],
            "res": [
              ["Kotlin Coroutines", "https://kotlinlang.org/docs/coroutines-overview.html"]
            ]
          },
          {
            "t": "Repositories & the Data Layer",
            "d": "The single source of truth: repositories mediating between network, database, and UI.",
            "lv": 2,
            "time": "~1d",
            "tip": "The UI never talks to Retrofit or Room directly. Everything flows through the repository — that's the whole rule.",
            "learn": [
              "Repository pattern: exposing Flows of domain models, hiding data-source details",
              "Single source of truth: the database as truth, the network as a refresh mechanism",
              "Offline-first: serving cached data immediately, then refreshing"
            ],
            "do": [
              "Build a repository backed by both a fake network source and Room",
              "Implement the network-bound-resource pattern: cache first, refresh in background",
              "Map DTOs to domain models at the repository boundary"
            ],
            "tools": ["Android Studio", "Room", "Retrofit"],
            "res": [
              ["Data Layer Guide", "https://developer.android.com/topic/architecture/data-layer"]
            ]
          },
          {
            "t": "Dependency Injection with Hilt",
            "d": "Hilt on Android: modules, scopes, and injecting ViewModels without manual wiring.",
            "lv": 2,
            "time": "~1d",
            "tip": "Constructor injection first, field injection only where the framework forces it (Activities, Fragments).",
            "learn": [
              "Why DI matters on Android: testability and the framework instantiating your classes",
              "Hilt basics: @HiltAndroidApp, @AndroidEntryPoint, @Inject, @HiltViewModel",
              "Modules and scopes: providing Retrofit, Room, and dispatchers with @Singleton vs @ActivityScoped"
            ],
            "do": [
              "Set up Hilt in an app and inject a repository into a ViewModel",
              "Write a module providing a Retrofit instance and a Room database",
              "Swap a real repository for a fake in tests using a test module"
            ],
            "tools": ["Android Studio", "Hilt"],
            "res": [
              ["Hilt", "https://dagger.dev/hilt/"]
            ]
          },
          {
            "t": "Multi-Module Apps",
            "d": "Splitting apps by feature: faster builds, clearer boundaries, and team-friendly structure.",
            "lv": 3,
            "time": "~2d",
            "tip": "Modules enforce architecture better than code reviews do. If data can't see UI at the module level, nobody can cheat.",
            "learn": [
              "Module types: app, feature, library, and the dependency rules between them",
              "Build speed: how modularization enables parallel compilation and caching",
              "API design between modules: exposing minimal interfaces, hiding implementations"
            ],
            "do": [
              "Extract one feature from a monolith app module into its own module",
              "Set up a :core module for shared networking and database code",
              "Measure clean-build time before and after modularization"
            ],
            "tools": ["Android Studio", "Gradle"],
            "res": [
              ["Modularization Guide", "https://developer.android.com/topic/modularization"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Data & Networking",
        "d": "REST clients, Room, DataStore, files, and background work — the data backbone of Android apps.",
        "lv": 2,
        "children": [
          {
            "t": "Retrofit & OkHttp",
            "d": "Type-safe REST clients: interfaces, converters, and interceptors.",
            "lv": 2,
            "time": "~1d",
            "tip": "Put auth-token refresh in an OkHttp Authenticator, not in every call site. One place, one retry policy.",
            "learn": [
              "Retrofit: declaring APIs as interfaces with annotations (@GET, @Body, @Query)",
              "Converters: kotlinx.serialization or Moshi turning JSON into data classes",
              "OkHttp interceptors: logging, auth headers, and retry logic in one layer"
            ],
            "do": [
              "Define a Retrofit service for a public REST API with suspend functions",
              "Add a logging interceptor and an auth interceptor via OkHttp",
              "Handle HTTP errors by mapping codes to a typed ApiError"
            ],
            "tools": ["Retrofit", "OkHttp", "kotlinx.serialization"],
            "res": [
              ["Retrofit", "https://github.com/square/retrofit"],
              ["OkHttp", "https://github.com/square/okhttp"]
            ]
          },
          {
            "t": "Room Database",
            "d": "SQLite without the pain: entities, DAOs, and compile-time-checked queries.",
            "lv": 2,
            "time": "~2d",
            "tip": "Room validates your SQL at compile time. If the query is wrong, the build fails — which is exactly what you want.",
            "learn": [
              "Entities, DAOs, and the Database class: Room's three building blocks",
              "Relationships: @Relation, embedded objects, and many-to-many modeling",
              "Migrations: evolving the schema without losing user data"
            ],
            "do": [
              "Build a Room database with two related entities and a DAO with suspend queries",
              "Expose DAO Flows to the UI layer for reactive updates",
              "Write a migration adding a column and test it against an old database file"
            ],
            "tools": ["Android Studio", "Room"],
            "res": [
              ["Room", "https://developer.android.com/training/data-storage/room"]
            ]
          },
          {
            "t": "DataStore & Preferences",
            "d": "The modern replacement for SharedPreferences: typed, async, and safe.",
            "lv": 2,
            "time": "~4h",
            "tip": "SharedPreferences is legacy. New code uses DataStore — the async API matches how the rest of your app works.",
            "learn": [
              "Preferences DataStore vs Proto DataStore: key-value simplicity vs typed schemas",
              "Flows for reads, suspend functions for writes: the async-first API",
              "Migrating from SharedPreferences without losing existing user settings"
            ],
            "do": [
              "Store theme and onboarding flags in Preferences DataStore",
              "Migrate an existing SharedPreferences file to DataStore",
              "Observe a preference as a Flow in your settings screen"
            ],
            "tools": ["Android Studio", "DataStore"],
            "res": [
              ["DataStore", "https://developer.android.com/topic/libraries/architecture/datastore"]
            ]
          },
          {
            "t": "Files, Media & Storage Access",
            "d": "Scoped storage, MediaStore, and the Storage Access Framework — Android's privacy-first file model.",
            "lv": 2,
            "time": "~1d",
            "tip": "Don't fight scoped storage. Use MediaStore for shared media and your app-specific directory for private files.",
            "learn": [
              "Scoped storage: what your app can touch without permissions since Android 10",
              "MediaStore: reading and writing shared photos, video, and audio",
              "Storage Access Framework: letting the user pick files and directories via system UI"
            ],
            "do": [
              "Save a user-generated image to MediaStore and verify it appears in the gallery",
              "Open a document picker with SAF and read the chosen file",
              "Cache downloaded files in the app-specific directory that auto-cleans on uninstall"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Storage Overview", "https://developer.android.com/training/data-storage"]
            ]
          },
          {
            "t": "WorkManager",
            "d": "Guaranteed background work: uploads, syncs, and periodic tasks that survive reboots.",
            "lv": 2,
            "time": "~1d",
            "tip": "WorkManager is for deferrable, guaranteed work. For immediate foreground work, use a foreground service instead.",
            "learn": [
              "Workers, constraints, and chaining: the building blocks of background jobs",
              "One-time vs periodic work, backoff policies, and input/output Data",
              "Doze mode and app standby: why WorkManager exists instead of raw background threads"
            ],
            "do": [
              "Schedule a periodic sync worker with network and charging constraints",
              "Chain an upload worker into a cleanup worker with input passing",
              "Test with expedited work and observe backoff after a simulated failure"
            ],
            "tools": ["Android Studio", "WorkManager"],
            "res": [
              ["WorkManager", "https://developer.android.com/topic/libraries/architecture/workmanager"]
            ]
          },
          {
            "t": "Caching & Offline-First",
            "d": "Image pipelines, HTTP caching, and the offline-first patterns users expect.",
            "lv": 3,
            "time": "~1d",
            "tip": "Images are the #1 scroll-jank cause on Android too. Coil with proper sizing beats any hand-rolled loader.",
            "learn": [
              "Coil: async image loading built for Compose with memory and disk caching",
              "HTTP caching with OkHttp: cache headers doing the work for free",
              "Offline-first UX: cached content instantly, refresh indicators, queued mutations"
            ],
            "do": [
              "Load a feed with Coil, proper placeholders, and crossfade",
              "Configure OkHttp cache and verify offline loads from disk",
              "Queue a user action while offline and replay it on reconnection"
            ],
            "tools": ["Coil", "OkHttp"],
            "res": [
              ["Coil", "https://github.com/coil-kt/coil"]
            ]
          }
        ]
      },
      {
        "t": "Android Platform Power",
        "d": "Services, permissions, notifications, and security — the platform features that define real Android apps.",
        "lv": 3,
        "children": [
          {
            "t": "Services & Foreground Work",
            "d": "Long-running work the user knows about: music, downloads, and location tracking.",
            "lv": 3,
            "time": "~1d",
            "tip": "Android 14+ restricts foreground service types — declare the right type or the system kills your service.",
            "learn": [
              "Started vs bound services, and why most background work moved to WorkManager",
              "Foreground services: notifications, service types, and the exemptions that keep them alive",
              "Alternatives: when a service is genuinely required vs when it's legacy thinking"
            ],
            "do": [
              "Build a foreground download service with progress notification",
              "Declare the correct foreground service type for your use case",
              "Migrate a legacy background service to WorkManager where it fits"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Services Overview", "https://developer.android.com/guide/components/services"]
            ]
          },
          {
            "t": "Intents, Broadcasts & Deep Links",
            "d": "How Android components talk: explicit and implicit intents, receivers, and app links.",
            "lv": 3,
            "time": "~1d",
            "tip": "Verify app links with Digital Asset Links, or any browser can claim your URLs and steal the deep link.",
            "learn": [
              "Intents: explicit (your components) vs implicit (system/user choice)",
              "Broadcast receivers: system events and the restrictions on background receivers",
              "Deep links vs Android App Links: URLs that open your app, verified or not"
            ],
            "do": [
              "Share content to your app via an implicit intent filter",
              "Implement a verified App Link with the assetlinks.json file",
              "Handle an incoming deep link through Navigation Compose"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Intents and Intent Filters", "https://developer.android.com/guide/components/intents-filters"]
            ]
          },
          {
            "t": "The Permissions Model",
            "d": "Runtime permissions, the photo picker, and asking at the right moment.",
            "lv": 3,
            "time": "~1d",
            "tip": "Ask in context, explain first with your own UI, then trigger the system dialog. Cold permission prompts get denied.",
            "learn": [
              "Dangerous permissions: the runtime request flow and handling 'don't ask again'",
              "The photo picker: accessing images without any permission at all",
              "Special permissions: exact alarms, all-files access, and their Play Store scrutiny"
            ],
            "do": [
              "Implement a rationale-then-request flow for location permission",
              "Replace a storage permission with the system photo picker",
              "Handle permanent denial by deep-linking the user to app settings"
            ],
            "tools": ["Android Studio"],
            "res": [
              ["Request App Permissions", "https://developer.android.com/training/permissions/requesting"]
            ]
          },
          {
            "t": "Notifications",
            "d": "Channels, importance, and actionable notifications users don't hate.",
            "lv": 3,
            "time": "~1d",
            "tip": "Create channels thoughtfully — users can only disable what you defined, and you can't rename a channel's importance later.",
            "learn": [
              "Notification channels: categories the user controls from Android 8+",
              "Importance levels, badges, and notification styles (big text, inbox, media)",
              "Actions, direct reply, and exact-alarm restrictions for time-sensitive alerts"
            ],
            "do": [
              "Build a messaging notification with reply action and proper channel setup",
              "Implement a media-style notification for a foreground service",
              "Test your notifications with the app in every importance configuration"
            ],
            "tools": ["Android Studio", "Firebase Cloud Messaging"],
            "res": [
              ["Notifications Overview", "https://developer.android.com/develop/ui/views/notifications"]
            ]
          },
          {
            "t": "Android Security Essentials",
            "d": "Keystore, encrypted storage, and realistic threat modeling for mobile.",
            "lv": 3,
            "time": "~1d",
            "tip": "The Keystore holds keys, not data. Encrypt data with a Keystore-backed key — never hardcode secrets in the APK.",
            "learn": [
              "Android Keystore: hardware-backed keys that never leave the secure element",
              "EncryptedSharedPreferences and EncryptedFile for secrets at rest",
              "Play Integrity API: attesting app authenticity, and what root detection can and can't prove"
            ],
            "do": [
              "Generate a Keystore key and use it to encrypt an auth token",
              "Migrate plain preferences to EncryptedSharedPreferences",
              "Integrate Play Integrity attestation and handle the failure gracefully"
            ],
            "tools": ["Android Studio", "Tink"],
            "res": [
              ["Android Security", "https://developer.android.com/topic/security/best-practices"]
            ]
          },
          {
            "t": "Performance: Profiling & Baseline Profiles",
            "d": "Finding jank and slow startup with profilers — and shipping faster with baseline profiles.",
            "lv": 3,
            "time": "~2d",
            "tip": "Profile release builds on a mid-range device. Debug builds on a flagship hide the problems your users actually feel.",
            "learn": [
              "Android Studio Profiler: CPU, memory, and energy — reading flame charts",
              "Baseline Profiles and Macrobenchmark: pre-compiling critical paths for faster startup",
              "R8 and minification: shrinking and optimizing release builds"
            ],
            "do": [
              "Record a CPU trace of a janky scroll and find the hot method",
              "Generate a baseline profile with Macrobenchmark and measure startup improvement",
              "Take a heap dump, find a leaked Activity, and fix the reference holding it"
            ],
            "tools": ["Android Studio Profiler", "Macrobenchmark", "Perfetto"],
            "res": [
              ["Baseline Profiles", "https://developer.android.com/topic/performance/baselineprofiles"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "Testing, Build & Play Store",
        "d": "Proving it works, mastering Gradle, and releasing to the Play Store.",
        "lv": 2,
        "children": [
          {
            "t": "Unit Testing",
            "d": "JUnit, Turbine, and fakes — testing ViewModels and business logic fast.",
            "lv": 2,
            "time": "~2d",
            "tip": "Test the ViewModel, not the composable. UI logic in the ViewModel is testable; logic in composables isn't.",
            "learn": [
              "JUnit 5 and the Android test source sets: test vs androidTest",
              "Testing coroutines: runTest and Turbine for Flow assertions",
              "Fakes over mocks: hand-written fakes for repositories that stay maintainable"
            ],
            "do": [
              "Write ViewModel tests with a fake repository covering success and error paths",
              "Test a Flow with Turbine's expectMostRecentItem style assertions",
              "Reach meaningful coverage on one feature module and keep it green in CI"
            ],
            "tools": ["JUnit", "Turbine", "MockK"],
            "res": [
              ["Test Your App", "https://developer.android.com/training/testing"]
            ]
          },
          {
            "t": "UI Testing",
            "d": "Compose UI tests and Espresso: driving the real interface automatically.",
            "lv": 2,
            "time": "~2d",
            "tip": "Give key interactive elements testTags from the start. Retrofitting test hooks into a finished UI is miserable.",
            "learn": [
              "Compose UI Test: semantics tree, finders, assertions, and actions",
              "Test rules: createComposeRule vs createAndroidComposeRule",
              "Espresso for View-based screens and screenshot testing for visual regressions"
            ],
            "do": [
              "Write a Compose UI test for a login flow: type, click, assert navigation",
              "Test a list screen with scrolling and item assertions",
              "Set up screenshot tests for your design-system components"
            ],
            "tools": ["Compose UI Test", "Espresso"],
            "res": [
              ["Compose Testing", "https://developer.android.com/jetpack/compose/testing"]
            ]
          },
          {
            "t": "Gradle: Build Logic",
            "d": "Kotlin DSL, version catalogs, and build variants — taming the build system.",
            "lv": 3,
            "time": "~2d",
            "tip": "One version catalog for all dependency versions. Version drift across modules is how 'works on my machine' starts.",
            "learn": [
              "Kotlin DSL build scripts: type-safe build logic instead of Groovy",
              "Version catalogs (libs.versions.toml): single source of truth for dependencies",
              "Build types and product flavors: dev/staging/prod variants from one codebase"
            ],
            "do": [
              "Migrate dependency declarations to a version catalog",
              "Create dev and prod flavors with different application IDs and API endpoints",
              "Profile a slow build and apply configuration-cache and parallel fixes"
            ],
            "tools": ["Gradle", "Android Studio"],
            "res": [
              ["Configure Your Build", "https://developer.android.com/build"]
            ]
          },
          {
            "t": "Signing & App Bundles",
            "d": "Keystores, app signing, and why you ship AABs instead of APKs.",
            "lv": 3,
            "time": "~1d",
            "tip": "Back up your upload keystore in two places right now. Losing it used to mean losing your app forever.",
            "learn": [
              "The signing keys: upload key vs app signing key, and Play App Signing",
              "Android App Bundles (AAB): Google Play generating optimized APKs per device",
              "Build variants for signing: debug keys vs release keys in CI"
            ],
            "do": [
              "Generate a release keystore and configure signingConfigs in Gradle",
              "Build an AAB and inspect what Play will generate from it",
              "Set up Play App Signing and understand the key upgrade process"
            ],
            "tools": ["Android Studio", "Gradle", "keytool"],
            "res": [
              ["App Bundle", "https://developer.android.com/guide/app-bundle"]
            ]
          },
          {
            "t": "Play Console & Release",
            "d": "Tracks, staged rollouts, and Play policies — releasing without getting rejected.",
            "lv": 3,
            "time": "~1d",
            "tip": "Read the policy on your permissions before submitting. Undeclared background location is the classic rejection.",
            "learn": [
              "Release tracks: internal → closed → open testing → production, and staged rollouts",
              "The listing: store assets, content ratings, privacy labels, and data safety forms",
              "Pre-launch reports: automated testing on real devices before your users find the crashes"
            ],
            "do": [
              "Upload a build to the internal track and distribute to testers",
              "Fill out the data safety form accurately for your app's data collection",
              "Run a staged rollout to 10% and practice halting it"
            ],
            "tools": ["Google Play Console"],
            "res": [
              ["Play Console", "https://play.google.com/console/"],
              ["Launch Checklist", "https://developer.android.com/distribute"]
            ]
          },
          {
            "t": "Capstone: Ship to the Play Store",
            "d": "Plan, build, and publish a complete Android app — the whole loop, end to end.",
            "lv": 3,
            "time": "~2w",
            "tip": "Scope ruthlessly: one feature done brilliantly beats five half-built. You can always ship 1.1.",
            "learn": [
              "Scoping a shippable v1 and cutting everything else",
              "Release readiness: testing matrix, proguard mapping files, crash reporting",
              "The launch loop: staged rollout, reviews, crash triage, and iterating"
            ],
            "do": [
              "Write a one-page spec for the single job your app does brilliantly",
              "Build it with MVVM, Room, Compose, and full test coverage on the ViewModel",
              "Publish to production with a staged rollout and respond to the first reviews"
            ],
            "tools": ["Android Studio", "Play Console", "Firebase Crashlytics"],
            "res": [
              ["Play Console", "https://play.google.com/console/"],
              ["Material Design", "https://m3.material.io/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
