/* Atlas roadmap data: Flutter (flutter)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "flutter",
  "title": "Flutter",
  "icon": "🦋",
  "color": "#1b6ef3",
  "kind": "skill",
  "tagline": "One Dart codebase, beautiful apps on mobile, web, and desktop.",
  "desc": "Flutter end to end: Dart fundamentals, widgets and layout, Riverpod and Bloc state management, navigation, APIs and persistence, Flutter internals, testing, and publishing to the stores.",
  "root": {
    "t": "Flutter",
    "d": "Build fast, beautiful cross-platform apps with Dart — from your first widget to a store-published product.",
    "children": [
      {
        "t": "Dart Foundations",
        "d": "The language behind Flutter: sound null safety, clean syntax, and modern features.",
        "lv": 1,
        "children": [
          {
            "t": "Why Flutter & How It Renders",
            "d": "Flutter draws every pixel itself — understand the rendering model before the widgets.",
            "lv": 1,
            "time": "~2h",
            "tip": "Flutter does not use native buttons or lists — it paints its own Material and Cupertino widgets with Impeller. That is why Flutter apps look identical everywhere, and why platform feel needs deliberate work.",
            "learn": [
              "The Flutter stack: Dart -> framework widgets -> Impeller renderer -> native canvas",
              "AOT compilation to native ARM: why Flutter apps start fast and need no JS bridge",
              "Flutter vs React Native vs native: the real trade-offs in 2026"
            ],
            "do": [
              "Read the Flutter architectural overview and diagram the layers",
              "Run the default counter app and identify which parts are Dart vs engine",
              "List two apps where Flutter's pixel-ownership is an advantage and two where it is not"
            ],
            "tools": ["Flutter", "Dart"],
            "res": [
              ["Flutter: architectural overview", "https://docs.flutter.dev/resources/architectural-overview"],
              ["Flutter homepage", "https://flutter.dev/"]
            ]
          },
          {
            "t": "DartPad: Your First Dart in the Browser",
            "d": "Zero-install Dart: run real code in the browser before touching the SDK.",
            "lv": 1,
            "time": "~2h",
            "tip": "DartPad is a full Dart environment — use it to test language ideas in seconds instead of rebuilding your app. Senior Flutter devs still prototype algorithms there.",
            "learn": [
              "DartPad: running, sharing, and embedding Dart snippets",
              "The main() entry point and top-level functions",
              "Reading Dart error messages: the analyzer is strict and helpful"
            ],
            "do": [
              "Write a main() that prints a greeting with string interpolation",
              "Share a DartPad snippet link with a deliberately broken type and read the error",
              "Solve two string-manipulation exercises in DartPad before installing anything"
            ],
            "tools": ["DartPad", "Dart"],
            "res": [
              ["DartPad", "https://dartpad.dev/"],
              ["Dart: language tour", "https://dart.dev/language"]
            ]
          },
          {
            "t": "Variables, Types & Null Safety",
            "d": "Sound null safety is Dart's superpower — the compiler proves away null crashes.",
            "lv": 1,
            "time": "~4h",
            "tip": "The ? and ! operators are not decoration: String? means 'might be null' and the compiler forces you to handle it. Reaching for ! to silence the analyzer just moves the crash to runtime.",
            "learn": [
              "var, final, const: mutable, single-assignment, and compile-time constant",
              "Nullable vs non-nullable types and flow-based type promotion",
              "late variables and when they are (and are not) appropriate"
            ],
            "do": [
              "Declare nullable and non-nullable variables and observe the analyzer's complaints",
              "Fix five null-safety errors using ?, ??, and if-null checks — never with !",
              "Use final vs const correctly in a small data model and explain the difference"
            ],
            "tools": ["Dart", "DartPad"],
            "res": [
              ["Dart: null safety", "https://dart.dev/null-safety"],
              ["Dart: variables", "https://dart.dev/language/variables"]
            ]
          },
          {
            "t": "Functions, Control Flow & Collections",
            "d": "The everyday Dart: expressive functions, pattern-rich control flow, and list/map fluency.",
            "lv": 1,
            "time": "~4h",
            "tip": "Dart collections have map/where/fold like every modern language — but also collection-if, collection-for, and spread operators inside literals. Writing loops where a collection literal works is unidiomatic Dart.",
            "learn": [
              "Named vs positional parameters, defaults, and required keywords",
              "if/case, switch expressions, and for-in over iterables",
              "Lists, sets, maps: literals, spread, collection-if/for"
            ],
            "do": [
              "Write a function with named required parameters and default values",
              "Transform a list of maps (filter adults, map to names) without a single for loop",
              "Build a word-frequency counter using a Map and collection operators"
            ],
            "tools": ["Dart", "DartPad"],
            "res": [
              ["Dart: functions", "https://dart.dev/language/functions"],
              ["Dart: collections", "https://dart.dev/language/collections"]
            ]
          },
          {
            "t": "Classes, Mixins & OOP in Dart",
            "d": "Dart's object model: concise constructors, mixins instead of multiple inheritance.",
            "lv": 1,
            "time": "~4h",
            "tip": "Dart constructors with this.name parameters eliminate most boilerplate — if you are writing constructor bodies that just assign fields, you are doing it the long way.",
            "learn": [
              "Classes, generative/const/factory/named constructors",
              "Mixins: composing behavior without inheritance chains",
              "Getters, setters, and operator overloading basics"
            ],
            "do": [
              "Model a User with const constructor, copyWith, and == override",
              "Compose two behaviors (e.g. logging + validation) into a class via mixins",
              "Write a factory constructor that returns cached instances"
            ],
            "tools": ["Dart", "DartPad"],
            "res": [
              ["Dart: classes", "https://dart.dev/language/classes"],
              ["Dart: mixins", "https://dart.dev/language/mixins"]
            ]
          }
        ]
      },
      {
        "t": "Setup & Tooling",
        "d": "Install Flutter correctly, pick your IDE, and master the development loop.",
        "lv": 1,
        "children": [
          {
            "t": "Installing Flutter & flutter doctor",
            "d": "A clean install with every toolchain check green — the foundation of painless development.",
            "lv": 1,
            "time": "~2h",
            "tip": "Run flutter doctor -v and fix EVERY warning before writing code. 'It mostly works' installs cause the weirdest build failures three weeks later.",
            "learn": [
              "Installing the SDK (stable channel only for real work) and adding it to PATH",
              "flutter doctor: Android toolchain, Xcode, and what each check means",
              "FVM for pinning per-project Flutter versions"
            ],
            "do": [
              "Install Flutter stable and get flutter doctor fully green",
              "Accept Android licenses and verify an emulator launches",
              "Install FVM and pin a project to a specific Flutter version"
            ],
            "tools": ["Flutter", "FVM", "Android Studio", "Xcode"],
            "res": [
              ["Flutter: install", "https://docs.flutter.dev/get-started/install"],
              ["FVM", "https://fvm.app/"]
            ]
          },
          {
            "t": "IDE Setup & Flutter DevTools",
            "d": "VS Code or Android Studio wired up with the inspector, debugger, and performance views.",
            "lv": 1,
            "time": "~2h",
            "tip": "Learn the widget inspector's 'select widget mode' on day one — tapping UI to jump to source code beats guessing which build method made that pixel.",
            "learn": [
              "Flutter + Dart extensions: run configs, snippets, and refactoring support",
              "Flutter DevTools: widget inspector, debugger, network, and memory views",
              "flutter analyze and dart fix: the analyzer as a constant code reviewer"
            ],
            "do": [
              "Set up run configurations for an emulator and a physical device",
              "Use select-widget-mode to find the source of a misaligned widget",
              "Run flutter analyze on a messy file and fix every info-level lint"
            ],
            "tools": ["VS Code", "Android Studio", "Flutter DevTools"],
            "res": [
              ["Flutter: DevTools", "https://docs.flutter.dev/tools/devtools"],
              ["Flutter: install", "https://docs.flutter.dev/get-started/install"]
            ]
          },
          {
            "t": "Your First App: Counter to Real Layout",
            "d": "From the template counter to a screen with real structure — Scaffold, AppBar, and layout.",
            "lv": 1,
            "time": "~3h",
            "tip": "The counter template teaches setState in 20 lines — read it fully before deleting it. It contains the entire StatefulWidget lifecycle in miniature.",
            "learn": [
              "MaterialApp, Scaffold, AppBar: the skeleton of every Material app",
              "StatefulWidget lifecycle: initState, build, dispose",
              "Running on emulator vs physical device and reading console output"
            ],
            "do": [
              "Run the counter template and trace every line of its state management",
              "Replace the counter with a tip calculator using TextFields and setState",
              "Add an AppBar action that resets the form and test on a real device"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: get started", "https://docs.flutter.dev/get-started/"],
              ["Flutter: widgets intro", "https://docs.flutter.dev/ui/widgets"]
            ]
          },
          {
            "t": "Hot Reload & the Dev Loop",
            "d": "Sub-second iteration: how hot reload works and where it silently lies to you.",
            "lv": 1,
            "time": "~2h",
            "tip": "Hot reload preserves app state — great until you change initState logic and wonder why nothing happened. Changed initialization code needs a hot restart.",
            "learn": [
              "Hot reload vs hot restart vs full restart: what each preserves",
              "When state staleness fools you and how to recognize it",
              "The dev loop: edit, reload, inspect, profile — without rebuilding"
            ],
            "do": [
              "Change a color and watch hot reload apply it instantly",
              "Modify initState, hot reload, observe nothing changes, then hot restart",
              "Keep a stopwatch: measure your edit-to-pixel time and optimize your loop"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: hot reload", "https://docs.flutter.dev/tools/hot-reload"],
              ["Flutter: DevTools", "https://docs.flutter.dev/tools/devtools"]
            ]
          },
          {
            "t": "pubspec.yaml & the pub.dev Ecosystem",
            "d": "Dependencies done right: version constraints, lockfiles, and judging package quality.",
            "lv": 1,
            "time": "~2h",
            "tip": "Check a package's pub.dev score, update recency, and issue count before adding it. A dead package with 40 open issues becomes YOUR bug on release day.",
            "learn": [
              "pubspec.yaml: dependencies, dev_dependencies, and caret version constraints",
              "pubspec.lock: why it is committed and what flutter pub upgrade really does",
              "Evaluating packages: likes, pub points, changelog activity, null-safety"
            ],
            "do": [
              "Add three packages with caret constraints and inspect the lockfile diff",
              "Run flutter pub outdated and upgrade one package deliberately",
              "Audit your dependencies: find one you could replace with framework code"
            ],
            "tools": ["Flutter", "pub.dev"],
            "res": [
              ["pub.dev", "https://pub.dev/"],
              ["Flutter: using packages", "https://docs.flutter.dev/packages-and-plugins/using-packages"]
            ]
          }
        ]
      },
      {
        "t": "Widgets: The UI Building Blocks",
        "d": "Everything is a widget — composition, layout, and the Material/Cupertino component libraries.",
        "lv": 1,
        "children": [
          {
            "t": "Thinking in Widgets",
            "d": "Composition over inheritance: small widgets snapped together into screens.",
            "lv": 1,
            "time": "~3h",
            "tip": "If a build method is longer than ~50 lines, extract widgets. Deep nesting is not just ugly — it rebuilds more than necessary and hides bugs.",
            "learn": [
              "The widget tree: how build methods compose into a UI description",
              "Extracting widgets: private widget classes vs helper methods (prefer classes)",
              "const constructors: why const widgets skip rebuilds"
            ],
            "do": [
              "Build a settings screen, then extract every row into a reusable widget",
              "Add const to every widget that qualifies and verify with the analyzer",
              "Refactor a 100-line build method into five focused widgets"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: widgets", "https://docs.flutter.dev/ui/widgets"],
              ["Flutter: widget catalog", "https://docs.flutter.dev/ui/widgets/catalog"]
            ]
          },
          {
            "t": "StatelessWidget vs StatefulWidget",
            "d": "Immutable UI vs local mutable state — and the lifecycle in between.",
            "lv": 1,
            "time": "~4h",
            "tip": "Default to StatelessWidget. Every StatefulWidget is a promise to manage lifecycle correctly (dispose controllers, cancel subscriptions) — only pay that cost when state truly lives there.",
            "learn": [
              "StatelessWidget: pure function of configuration, rebuilt by parents",
              "StatefulWidget: State object, setState, initState, dispose",
              "Keys: when widgets need identity across rebuilds (lists, forms)"
            ],
            "do": [
              "Build a stopwatch with StatefulWidget, disposing the Timer in dispose()",
              "Reorder a list and fix the state-mixing bug by adding ValueKeys",
              "Convert a StatefulWidget to StatelessWidget by lifting state to the parent"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: adding interactivity", "https://docs.flutter.dev/ui/interactivity"],
              ["Flutter: widgets", "https://docs.flutter.dev/ui/widgets"]
            ]
          },
          {
            "t": "Material 3 Widgets: Scaffold to NavigationBar",
            "d": "The Material component library: app bars, buttons, cards, dialogs, and navigation.",
            "lv": 1,
            "time": "~4h",
            "tip": "Material 3 is the default — do not set useMaterial3: false on new apps. Fighting the default theme means fighting every future Flutter update.",
            "learn": [
              "Scaffold anatomy: AppBar, body, FAB, bottomNavigationBar, drawer",
              "Buttons, cards, chips, dialogs, snackbars, and bottom sheets",
              "NavigationBar, NavigationRail, and NavigationDrawer patterns"
            ],
            "do": [
              "Build an app with NavigationBar switching between three full screens",
              "Show a dialog, a snackbar, and a modal bottom sheet from one screen",
              "Style a FilledButton and Card to match a brand color scheme"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Material 3 in Flutter", "https://docs.flutter.dev/ui/design/material"],
              ["Flutter widget catalog", "https://docs.flutter.dev/ui/widgets/catalog"]
            ]
          },
          {
            "t": "Layout Widgets: Row, Column, Stack & Flex",
            "d": "Positioning everything: the flex model, constraints, and overflow errors decoded.",
            "lv": 1,
            "time": "~4h",
            "tip": "The 'RenderFlex overflowed' yellow-black stripes mean a child wants more space than its parent allows — wrap in Expanded/Flexible or give it a bounded height. Learn to read the pixel count in the error.",
            "learn": [
              "Row/Column: main axis, cross axis, MainAxisAlignment, CrossAxisAlignment",
              "Expanded, Flexible, Spacer: dividing available space",
              "Stack/Positioned for overlays; constraints flow down, sizes flow up"
            ],
            "do": [
              "Build a chat message row (avatar, bubble, timestamp) with Row and Expanded",
              "Fix three overflow errors by reading the error output, not guessing",
              "Overlay a badge on an icon using Stack and Positioned"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: layouts", "https://docs.flutter.dev/ui/layout"],
              ["Understanding constraints", "https://docs.flutter.dev/ui/layout/constraints"]
            ]
          },
          {
            "t": "Cupertino Widgets for iOS Feel",
            "d": "Native-feeling iOS UI when your users expect platform conventions.",
            "lv": 1,
            "time": "~2h",
            "tip": "Cupertino widgets look right but do not magically add iOS behavior like swipe-back — pair them with the right navigation and haptics for the feel to land.",
            "learn": [
              "CupertinoApp, CupertinoNavigationBar, CupertinoButton, pickers, action sheets",
              "When to use Cupertino vs Material: audience and design requirements",
              "Adaptive widgets that switch per platform"
            ],
            "do": [
              "Build an iOS-style settings page with CupertinoNavigationBar and switches",
              "Show a CupertinoDatePicker in a modal popup",
              "Make one screen adaptive: Material on Android, Cupertino on iOS"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter docs", "https://docs.flutter.dev/"],
              ["Flutter: widgets", "https://docs.flutter.dev/ui/widgets"]
            ],
            "tag": "opt"
          },
          {
            "t": "Theming & Dark Mode",
            "d": "One ThemeData to rule the app: colors, typography, and component themes.",
            "lv": 2,
            "time": "~3h",
            "tip": "Define colors once in ColorScheme and reference Theme.of(context) everywhere — hardcoded Colors.blue in widgets is how dark mode breaks in 47 places at once.",
            "learn": [
              "ThemeData, ColorScheme, and TextTheme: the theming hierarchy",
              "Dark mode: ThemeMode.system and testing both schemes",
              "Component themes: styling all buttons/cards/inputs in one place"
            ],
            "do": [
              "Define light and dark themes from a seed color and toggle between them",
              "Remove every hardcoded color from a screen, replacing with theme references",
              "Create a custom component theme for all ElevatedButtons app-wide"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: themes", "https://docs.flutter.dev/cookbook/design/themes"],
              ["Material 3: color schemes", "https://docs.flutter.dev/ui/design/material"]
            ]
          },
          {
            "t": "Assets, Fonts & Images",
            "d": "Bundling images, custom fonts, and icons so they load crisply on every screen density.",
            "lv": 1,
            "time": "~2h",
            "tip": "Declare assets in pubspec.yaml AND use resolution-aware variants (2.0x/3.0x) — a single 1x image looks blurry on every modern phone.",
            "learn": [
              "Declaring assets in pubspec.yaml and loading with Image.asset",
              "Resolution variants and AssetImage caching behavior",
              "Custom fonts: declaring families, weights, and using them in TextStyle"
            ],
            "do": [
              "Bundle an image with 1x/2x/3x variants and display it crisply",
              "Add a custom font family with two weights and use it in headlines",
              "Build an icon set usage page with the built-in Icons class"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: assets and images", "https://docs.flutter.dev/ui/assets/assets-and-images"],
              ["Flutter: custom fonts", "https://docs.flutter.dev/cookbook/design/fonts"]
            ]
          },
          {
            "t": "Responsive & Adaptive Layouts",
            "d": "Phones, tablets, foldables, desktop: layouts that adapt instead of just stretching.",
            "lv": 2,
            "time": "~3h",
            "tip": "Use LayoutBuilder breakpoints, not MediaQuery width checks scattered everywhere — one adaptive scaffold component beats twenty if (isTablet) branches.",
            "learn": [
              "MediaQuery vs LayoutBuilder: when each is appropriate",
              "Breakpoints: list/detail split views, adaptive navigation",
              "Orientation changes and preserving state across them"
            ],
            "do": [
              "Build a master-detail layout that splits on tablets and stacks on phones",
              "Switch NavigationBar to NavigationRail above a width breakpoint",
              "Test your layout at phone, tablet, and desktop window sizes"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: responsive design", "https://docs.flutter.dev/ui/layout/responsive-app"],
              ["Flutter: adaptive apps", "https://docs.flutter.dev/ui/layout/adaptive-app"]
            ]
          }
        ]
      },
      {
        "t": "State Management",
        "d": "From setState to Riverpod and Bloc: choosing and mastering app-wide state.",
        "lv": 2,
        "children": [
          {
            "t": "Ephemeral vs App State",
            "d": "The most important distinction in Flutter architecture: what state lives where.",
            "lv": 2,
            "time": "~3h",
            "tip": "A form field's text is ephemeral state (keep it in the widget); the logged-in user is app state (lift it out). Mixing them up is the root of most state-management pain.",
            "learn": [
              "Ephemeral (local UI) vs app (shared) state with concrete examples",
              "Lifting state up and callback patterns",
              "The official decision guide: setState -> InheritedWidget -> provider packages"
            ],
            "do": [
              "Classify every piece of state in a sample app as ephemeral or app state",
              "Lift a cart badge count from a product widget to the app bar via callbacks",
              "Document why each state item lives where it does"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: state management intro", "https://docs.flutter.dev/data-and-backend/state-mgmt/intro"],
              ["State options compared", "https://docs.flutter.dev/data-and-backend/state-mgmt/options"]
            ]
          },
          {
            "t": "Riverpod: Providers & Notifiers",
            "d": "The modern recommended approach: compile-safe providers, async-first, testable.",
            "lv": 2,
            "time": "~1d",
            "tip": "Riverpod 3 replaced StateNotifierProvider with NotifierProvider — if a tutorial uses StateNotifier, it is teaching the legacy API. Learn Notifier/AsyncNotifier.",
            "learn": [
              "Provider types: Provider, NotifierProvider, AsyncNotifierProvider, StreamProvider",
              "ref.watch vs ref.read vs ref.listen: the rules that prevent bugs",
              "Testing providers with ProviderContainer overrides"
            ],
            "do": [
              "Build a counter with NotifierProvider and a user session with AsyncNotifier",
              "Fetch data with FutureProvider and render loading/error/data with .when()",
              "Write a widget test overriding a provider with fake data"
            ],
            "tools": ["flutter_riverpod", "Riverpod"],
            "res": [
              ["Riverpod docs", "https://riverpod.dev/"],
              ["Flutter: state options", "https://docs.flutter.dev/data-and-backend/state-mgmt/options"]
            ]
          },
          {
            "t": "Bloc: Events, States & Strict Unidirectionality",
            "d": "The enterprise favorite: explicit events in, explicit states out, everything testable.",
            "lv": 2,
            "time": "~1d",
            "tip": "Bloc's boilerplate is the point — events and states make every transition explicit and replayable. If the ceremony feels heavy for your app, that is a signal to use Riverpod instead.",
            "learn": [
              "Bloc vs Cubit: events + states vs direct function calls",
              "BlocProvider, BlocBuilder, BlocListener: build vs side-effect separation",
              "Testing blocs: blocTest and the arrange-act-assert of state streams"
            ],
            "do": [
              "Build a login flow as a Bloc: LoginSubmitted event -> LoginLoading/Success/Failure states",
              "Add a Cubit version of a simple counter and compare the code size honestly",
              "Write blocTests covering the happy path and two failure modes"
            ],
            "tools": ["flutter_bloc", "bloc_test"],
            "res": [
              ["Bloc library", "https://bloclibrary.dev/"],
              ["Bloc: core concepts", "https://bloclibrary.dev/bloc-concepts/"]
            ]
          },
          {
            "t": "Provider, GetX & the Rest of the Landscape",
            "d": "Know the alternatives honestly so your choice of Riverpod/Bloc is deliberate, not tribal.",
            "lv": 2,
            "time": "~2h",
            "tip": "GetX is popular and productive but couples navigation, state, and DI into one package — great for speed, risky for large teams. Know what you are trading.",
            "learn": [
              "Provider: the InheritedWidget wrapper Riverpod was built to replace",
              "GetX: reactive state + routing + DI in one, and its trade-offs",
              "MobX, GetIt+ValueNotifier: where they still make sense"
            ],
            "do": [
              "Rebuild a tiny Riverpod feature with Provider and note the differences",
              "Read GetX docs critically: list what it simplifies and what it hides",
              "Write a one-paragraph justification for your team's chosen solution"
            ],
            "tools": ["provider", "get", "get_it"],
            "res": [
              ["Provider package", "https://pub.dev/packages/provider"],
              ["GetX", "https://pub.dev/packages/get"]
            ]
          },
          {
            "t": "Async State Patterns: Loading, Error & Refresh",
            "d": "Real apps are mostly loading spinners and error banners — model async state explicitly.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never use separate isLoading/error/data booleans — use a sealed state (AsyncValue, or your own Loading/Success/Error). Boolean triples can represent impossible states like loading AND error.",
            "learn": [
              "AsyncValue.when: exhaustive loading/error/data handling",
              "Pull-to-refresh and retry patterns that preserve scroll position",
              "Invalidation: refreshing data after mutations"
            ],
            "do": [
              "Build a product list with skeleton loading, error retry, and pull-to-refresh",
              "Implement optimistic delete with rollback on failure",
              "Invalidate and refetch a list after creating an item elsewhere"
            ],
            "tools": ["flutter_riverpod"],
            "res": [
              ["Riverpod docs", "https://riverpod.dev/"],
              ["Flutter: state options", "https://docs.flutter.dev/data-and-backend/state-mgmt/options"]
            ]
          }
        ]
      },
      {
        "t": "Navigation, APIs & Persistence",
        "d": "Moving between screens, talking to backends, and storing data on device.",
        "lv": 2,
        "children": [
          {
            "t": "go_router: Declarative Navigation",
            "d": "URL-style routes with deep linking, redirects, and auth guards built in.",
            "lv": 2,
            "time": "~4h",
            "tip": "Define redirect logic for auth in ONE place (go_router's redirect callback) — scattering 'if not logged in, push login' across screens guarantees a hole somewhere.",
            "learn": [
              "GoRoute paths, parameters, and nested ShellRoutes for tab scaffolds",
              "redirect: auth guards and onboarding gates",
              "Named routes, query parameters, and type-safe route helpers"
            ],
            "do": [
              "Build tab navigation with a ShellRoute and three branches",
              "Add a redirect that sends unauthenticated users to /login",
              "Implement a product detail route /product/:id with deep link support"
            ],
            "tools": ["go_router"],
            "res": [
              ["go_router", "https://pub.dev/packages/go_router"],
              ["Flutter: navigation", "https://docs.flutter.dev/ui/navigation"]
            ]
          },
          {
            "t": "Deep Links & App Links",
            "d": "URLs that open your app to the right screen — marketing, invites, password resets.",
            "lv": 2,
            "time": "~3h",
            "tip": "Test deep links from a killed app, not just a warm one — cold-start routing resolves differently and it is where most deep-link bugs hide.",
            "learn": [
              "Custom schemes vs verified app links / universal links",
              "go_router route configuration as the single source of URL truth",
              "Handling incoming links when the app is closed, backgrounded, or open"
            ],
            "do": [
              "Configure a myapp:// scheme and open a product screen via adb/xcrun",
              "Set up verified app links with assetlinks.json / apple-app-site-association",
              "Handle a password-reset link landing on a token-prefilled form"
            ],
            "tools": ["go_router", "app_links"],
            "res": [
              ["Flutter: deep linking", "https://docs.flutter.dev/ui/navigation/deep-linking"],
              ["app_links package", "https://pub.dev/packages/app_links"]
            ]
          },
          {
            "t": "REST with Dio & JSON Serialization",
            "d": "A production HTTP layer: interceptors, typed models, and code-generated serialization.",
            "lv": 2,
            "time": "~4h",
            "tip": "Hand-writing fromJson for nested models is error-prone busywork — use json_serializable or freezed with build_runner. The generated code handles nulls and nesting correctly.",
            "learn": [
              "Dio: interceptors for auth tokens, logging, and error mapping",
              "Typed models with json_serializable + build_runner codegen",
              "Freezed for immutable models with copyWith and union types"
            ],
            "do": [
              "Build a Dio client with auth interceptor and 401 refresh logic",
              "Generate serialization for a nested API response with build_runner",
              "Model API errors as a freezed union and handle each case in the UI"
            ],
            "tools": ["dio", "json_serializable", "freezed", "build_runner"],
            "res": [
              ["Dio", "https://pub.dev/packages/dio"],
              ["Flutter: fetch data cookbook", "https://docs.flutter.dev/cookbook/networking/fetch-data"]
            ]
          },
          {
            "t": "WebSockets & Realtime Streams",
            "d": "Live updates via streams: chat, live scores, and presence without polling.",
            "lv": 2,
            "time": "~3h",
            "tip": "Expose the socket as a broadcast Stream and let Riverpod's StreamProvider manage subscription lifecycle — manual subscribe/dispose in widgets leaks on every navigation.",
            "learn": [
              "WebSocketChannel and mapping raw messages to typed events",
              "Broadcast streams, StreamProvider, and lifecycle management",
              "Reconnect with backoff and connection-state UI"
            ],
            "do": [
              "Build a live chat screen over a WebSocket echo server",
              "Add auto-reconnect with exponential backoff and a status banner",
              "Handle app backgrounding: pause on suspend, resubscribe on resume"
            ],
            "tools": ["web_socket_channel", "flutter_riverpod"],
            "res": [
              ["web_socket_channel", "https://pub.dev/packages/web_socket_channel"],
              ["Dart: streams", "https://dart.dev/language/async"]
            ]
          },
          {
            "t": "Local Storage: Preferences & Secure Storage",
            "d": "Key-value persistence for settings and secrets — with the right tool for each.",
            "lv": 2,
            "time": "~3h",
            "tip": "Tokens go in flutter_secure_storage (Keychain/Keystore), never shared_preferences — prefs are plaintext XML on Android. This is the most common mobile security mistake.",
            "learn": [
              "shared_preferences: simple settings and flags",
              "flutter_secure_storage: hardware-backed secret storage",
              "What belongs in key-value vs what needs SQLite"
            ],
            "do": [
              "Persist theme mode and onboarding completion in shared_preferences",
              "Store auth tokens in secure storage and load them at startup",
              "Migrate a plaintext token from prefs to secure storage"
            ],
            "tools": ["shared_preferences", "flutter_secure_storage"],
            "res": [
              ["shared_preferences", "https://pub.dev/packages/shared_preferences"],
              ["flutter_secure_storage", "https://pub.dev/packages/flutter_secure_storage"]
            ]
          },
          {
            "t": "SQLite with Drift",
            "d": "Type-safe relational storage on device for offline-first data.",
            "lv": 3,
            "time": "~4h",
            "tip": "Design tables for sync from the start: updated_at timestamps and a dirty flag per row, or your offline-first feature becomes an unmergeable mess.",
            "learn": [
              "Drift: type-safe queries, DAOs, and reactive streams from tables",
              "Migrations without data loss across app versions",
              "Offline-first: local writes, sync queue, conflict resolution"
            ],
            "do": [
              "Define a notes table in Drift with CRUD and a migration v1->v2",
              "Build an offline todo list that syncs when connectivity returns",
              "Stream query results into the UI so inserts update instantly"
            ],
            "tools": ["drift"],
            "res": [
              ["Drift", "https://pub.dev/packages/drift"],
              ["Drift docs", "https://drift.simonbinder.eu/"]
            ]
          },
          {
            "t": "Firebase: Auth, Firestore & Push",
            "d": "The backend-in-a-box: authentication, realtime database, and notifications without servers.",
            "lv": 2,
            "time": "~1d",
            "tip": "Write Firestore security rules BEFORE your first release — the default open rules ship in every tutorial and every breached hobby app. Rules are your backend's only firewall.",
            "learn": [
              "flutterfire setup: firebase_core, platform configuration files",
              "firebase_auth: email, Google, Apple sign-in flows",
              "cloud_firestore: collections, realtime snapshots, and security rules",
              "firebase_messaging: tokens, foreground/background handling"
            ],
            "do": [
              "Set up a Firebase project and wire flutterfire into Android + iOS",
              "Build email login with auth state driving your go_router redirect",
              "Write security rules restricting users to their own documents, then test them"
            ],
            "tools": ["firebase_core", "firebase_auth", "cloud_firestore", "firebase_messaging"],
            "res": [
              ["FlutterFire setup", "https://firebase.google.com/docs/flutter/setup"],
              ["FlutterFire docs", "https://firebase.flutter.dev/"]
            ]
          }
        ]
      },
      {
        "t": "Advanced Dart & Flutter Internals",
        "d": "The engine room: async mastery, the three trees, and the Impeller renderer.",
        "lv": 3,
        "children": [
          {
            "t": "Futures, async/await & the Event Loop",
            "d": "How Dart really executes async code: event queue, microtasks, and Future chaining.",
            "lv": 2,
            "time": "~4h",
            "tip": "An async function runs synchronously until its first await — code before the first await executes immediately, not 'later'. This surprises everyone exactly once.",
            "learn": [
              "The event loop: event queue vs microtask queue execution order",
              "Future: then/catchError vs async/await, Future.wait for parallelism",
              "Common pitfalls: unawaited futures, async void, and swallowed errors"
            ],
            "do": [
              "Predict the print order of mixed sync/async/microtask code, then verify",
              "Parallelize three API calls with Future.wait and measure the speedup",
              "Find and fix an unawaited future bug using the analyzer's warnings"
            ],
            "tools": ["Dart"],
            "res": [
              ["Dart: async", "https://dart.dev/language/async"],
              ["Dart: event loop", "https://dart.dev/articles/event-loop"]
            ]
          },
          {
            "t": "Streams & Reactive Programming",
            "d": "Streams as the backbone of realtime Flutter: controllers, broadcast, and RxDart operators.",
            "lv": 3,
            "time": "~4h",
            "tip": "Single-subscription streams throw on a second listener — use broadcast streams (or RxDart subjects) for anything with multiple consumers like a shared socket.",
            "learn": [
              "StreamController, single vs broadcast subscriptions",
              "Transforming streams: map, where, debounce, switchMap (RxDart)",
              "StreamBuilder done right: handling ConnectionState properly"
            ],
            "do": [
              "Build a debounced search field with RxDart's debounceTime + switchMap",
              "Combine two streams (user + settings) into one UI state stream",
              "Fix a StreamBuilder that shows stale data by keying it correctly"
            ],
            "tools": ["rxdart"],
            "res": [
              ["RxDart", "https://pub.dev/packages/rxdart"],
              ["Dart: async", "https://dart.dev/language/async"]
            ]
          },
          {
            "t": "Isolates: True Parallelism in Dart",
            "d": "Dart is single-threaded — isolates are how you escape it for heavy computation.",
            "lv": 3,
            "time": "~4h",
            "tip": "Isolates do not share memory — everything crosses via message copies. Spawning an isolate for a 5ms task is slower than just doing it; reserve them for 50ms+ work.",
            "learn": [
              "Isolate.spawn, ports, and message passing (no shared memory)",
              "compute(): the easy path for one-shot background work",
              "When isolates matter: image processing, parsing, crypto"
            ],
            "do": [
              "Parse a 5MB JSON in an isolate with compute() and measure UI smoothness",
              "Build a long-running isolate that reports progress via ports",
              "Profile a janky animation, move the work to an isolate, compare"
            ],
            "tools": ["Dart", "Flutter"],
            "res": [
              ["Dart: concurrency", "https://dart.dev/language/concurrency"],
              ["Flutter: performance", "https://docs.flutter.dev/perf"]
            ]
          },
          {
            "t": "The Three Trees: Widget, Element & RenderObject",
            "d": "What actually happens on setState: the diffing machinery that makes Flutter fast.",
            "lv": 3,
            "time": "~4h",
            "tip": "Widgets are cheap blueprints, Elements are the persistent tree, RenderObjects do layout and paint. Performance bugs live in the Element/RenderObject layers — that is why keys and const matter.",
            "learn": [
              "Widget tree (configuration) vs Element tree (instances) vs RenderObject tree (layout/paint)",
              "The build/diff algorithm: canUpdate and element reuse",
              "Why keys preserve state and const widgets skip subtrees"
            ],
            "do": [
              "Use the widget inspector to explore all three trees of a real screen",
              "Demonstrate element reuse by swapping two stateful children with and without keys",
              "Trace what rebuilds when setState fires using the rebuild highlighting"
            ],
            "tools": ["Flutter DevTools"],
            "res": [
              ["Flutter: architectural overview", "https://docs.flutter.dev/resources/architectural-overview"],
              ["Flutter: inside the framework", "https://docs.flutter.dev/resources/inside-flutter"]
            ]
          },
          {
            "t": "Impeller: The Rendering Engine",
            "d": "Flutter's own renderer: precompiled shaders, predictable performance, no jank.",
            "lv": 3,
            "time": "~3h",
            "tip": "Impeller eliminated first-run shader jank — if you still see jank, it is your Dart code (build methods, image decoding), not the GPU. Profile the right layer.",
            "learn": [
              "Why Impeller replaced Skia: shader compilation jank explained",
              "How Impeller works: precompiled shaders, modern graphics APIs (Metal/Vulkan)",
              "Reading the performance overlay: UI vs raster thread"
            ],
            "do": [
              "Enable the performance overlay and identify a raster-thread bottleneck",
              "Compare a shader-heavy screen's first run vs subsequent runs",
              "Use RepaintBoundary to isolate repaint regions and verify with the overlay"
            ],
            "tools": ["Flutter DevTools"],
            "res": [
              ["Impeller", "https://docs.flutter.dev/perf/impeller"],
              ["Flutter: performance", "https://docs.flutter.dev/perf"]
            ]
          },
          {
            "t": "CustomPaint & Custom RenderObjects",
            "d": "When widgets are not enough: drawing directly on canvas and building custom layout.",
            "lv": 3,
            "time": "~1d",
            "tip": "Always pass a repaint Listenable to CustomPainter — otherwise it repaints on every frame of any ancestor animation, silently burning battery.",
            "learn": [
              "CustomPainter: canvas API, paths, paints, and shouldRepaint",
              "CustomSingleChildLayout and custom RenderObjects for exotic layout",
              "Shaders and fragment programs for GPU effects"
            ],
            "do": [
              "Draw an animated radial progress ring with CustomPainter",
              "Build a custom layout that positions children along a curve",
              "Add a fragment shader effect to a widget and profile its cost"
            ],
            "tools": ["Flutter"],
            "res": [
              ["CustomPainter API", "https://api.flutter.dev/flutter/rendering/CustomPainter-class.html"],
              ["Flutter: inside the framework", "https://docs.flutter.dev/resources/inside-flutter"]
            ]
          }
        ]
      },
      {
        "t": "Polish, Test & Ship",
        "d": "Animations, testing at three levels, native interop, and publishing to both stores.",
        "lv": 2,
        "children": [
          {
            "t": "Animations: Implicit to Explicit",
            "d": "Motion that feels physical: implicit animations for simplicity, controllers for choreography.",
            "lv": 2,
            "time": "~4h",
            "tip": "Start with implicit animations (AnimatedContainer, AnimatedOpacity) — they cover 80% of UI motion. Reach for AnimationController only when you need sequencing or scrubbing.",
            "learn": [
              "Implicit animations: AnimatedContainer, AnimatedOpacity, AnimatedCrossFade",
              "AnimationController, Tween, CurvedAnimation: explicit control",
              "AnimatedBuilder and when to prefer it over setState-driven animation"
            ],
            "do": [
              "Animate a card expanding with AnimatedContainer on tap",
              "Build a staggered list entrance with one AnimationController",
              "Add a custom curve and compare easeInOut vs spring-like physics"
            ],
            "tools": ["Flutter"],
            "res": [
              ["Flutter: animations", "https://docs.flutter.dev/ui/animations"],
              ["Flutter: animation cookbook", "https://docs.flutter.dev/cookbook/animation/animated-container"]
            ]
          },
          {
            "t": "Hero Animations & Page Transitions",
            "d": "Shared-element transitions that make navigation feel continuous, not jumpy.",
            "lv": 2,
            "time": "~3h",
            "tip": "Hero tags must be unique per route pair — duplicate tags across a list silently break the flight animation and produce the most confusing visual glitch in Flutter.",
            "learn": [
              "Hero widget: matching tags, flightShuttleBuilder customization",
              "Custom page transitions with PageRouteBuilder",
              "Rive and Lottie for complex vector animations"
            ],
            "do": [
              "Build a photo grid -> detail Hero transition with unique tags",
              "Create a custom slide+fade page transition for your router",
              "Play a Lottie animation on a success screen"
            ],
            "tools": ["Flutter", "lottie", "rive"],
            "res": [
              ["Hero animations", "https://docs.flutter.dev/ui/animations/hero"],
              ["Rive", "https://rive.app/"]
            ]
          },
          {
            "t": "Testing: Unit, Widget & Integration",
            "d": "Three layers of confidence: pure logic, widget interaction, and full-app flows.",
            "lv": 2,
            "time": "~1d",
            "tip": "Widget tests run headless in milliseconds — test interaction (tap, enter text, expect UI change), not pixels. Screenshot tests belong in integration, not in your fast suite.",
            "learn": [
              "Unit tests: testing providers, blocs, and pure functions with mocks",
              "Widget tests: pumping widgets, finding by key/text, simulating taps",
              "Integration tests: driving the real app on device with Patrol"
            ],
            "do": [
              "Unit test a Riverpod Notifier's state transitions",
              "Widget test a form: enter invalid input, assert the error appears",
              "Write a Patrol flow: launch, log in, complete the core user journey"
            ],
            "tools": ["flutter_test", "mocktail", "Patrol"],
            "res": [
              ["Flutter: testing", "https://docs.flutter.dev/testing"],
              ["Patrol", "https://patrol.leancode.co/"]
            ]
          },
          {
            "t": "Platform Channels: Talking to Native Code",
            "d": "When Dart is not enough: calling Swift/Kotlin via method channels and Pigeon.",
            "lv": 3,
            "time": "~4h",
            "tip": "Use Pigeon for anything beyond trivial calls — hand-written MethodChannel codecs with raw maps are where type mismatch crashes are born.",
            "learn": [
              "MethodChannel: invoking platform code and handling results/errors",
              "EventChannel: streaming native events (sensors, connectivity) to Dart",
              "Pigeon: type-safe codegen for platform interfaces"
            ],
            "do": [
              "Expose battery level via MethodChannel on Android and iOS",
              "Stream accelerometer data to Dart with EventChannel",
              "Define the same API in Pigeon and compare the generated code"
            ],
            "tools": ["Flutter", "Pigeon"],
            "res": [
              ["Flutter: platform channels", "https://docs.flutter.dev/platform-integration/platform-channels"],
              ["Pigeon", "https://pub.dev/packages/pigeon"]
            ]
          },
          {
            "t": "CI/CD: Codemagic, Bitrise & GitHub Actions",
            "d": "Every commit builds and tests; releases go out with one command.",
            "lv": 3,
            "time": "~4h",
            "tip": "Mobile CI without caching is 3x slower — cache the Flutter SDK, pub cache, Gradle, and CocoaPods. Uncached builds are where release-day patience dies.",
            "learn": [
              "Pipeline anatomy: analyze, test, build APK/AAB/IPA per branch",
              "Code signing in CI: keystores, provisioning profiles, and secrets",
              "Shorebird: OTA Dart updates without store review"
            ],
            "do": [
              "Add a GitHub Actions workflow running analyze + tests on every PR",
              "Build signed release artifacts in CI with secrets-stored signing keys",
              "Push a Shorebird patch and verify it lands without a store update"
            ],
            "tools": ["GitHub Actions", "Codemagic", "Shorebird", "fastlane"],
            "res": [
              ["Codemagic", "https://codemagic.io/"],
              ["Shorebird", "https://shorebird.dev/"]
            ]
          },
          {
            "t": "Publishing to App Store & Play Store",
            "d": "From build to listing: signing, metadata, review, and staged rollouts.",
            "lv": 3,
            "time": "~1d",
            "tip": "Apple rejects for boring reasons: placeholder text, missing demo accounts, incomplete privacy labels. Provide a working demo login and finish the privacy manifest before submitting.",
            "learn": [
              "Release builds: app bundles (AAB) vs APKs, Xcode archiving, versioning",
              "Store listings: screenshots, descriptions, content ratings, privacy labels",
              "Review process, TestFlight/internal tracks, and staged rollouts"
            ],
            "do": [
              "Produce a signed release AAB and upload to Play Console internal track",
              "Archive in Xcode and submit to TestFlight",
              "Complete the data safety section and privacy manifest accurately"
            ],
            "tools": ["Flutter", "fastlane"],
            "res": [
              ["Flutter: deploy Android", "https://docs.flutter.dev/deployment/android"],
              ["Flutter: deploy iOS", "https://docs.flutter.dev/deployment/ios"]
            ]
          },
          {
            "t": "Capstone: Publish a Real App",
            "d": "Everything combined: design, build, test, and ship a complete Flutter app.",
            "lv": 3,
            "time": "~2w",
            "tip": "Scope ruthlessly: one user, one core flow, done beautifully. Capstones die from feature creep, not technical difficulty.",
            "learn": [
              "Scoping an MVP: auth, one core flow, offline handling, polish",
              "Applying the full pipeline: state management, testing, CI, store submission",
              "Post-launch: crash reporting and analytics"
            ],
            "do": [
              "Build a complete app (e.g. expense tracker with Riverpod, Drift, and charts)",
              "Add unit + widget tests for critical flows and one Patrol E2E flow",
              "Ship to TestFlight and Play internal track with a real store listing draft"
            ],
            "tools": ["Flutter", "Riverpod", "go_router", "Patrol", "Sentry"],
            "res": [
              ["Flutter: app architecture guide", "https://docs.flutter.dev/app-architecture"],
              ["Sentry: Flutter", "https://docs.sentry.io/platforms/flutter/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
