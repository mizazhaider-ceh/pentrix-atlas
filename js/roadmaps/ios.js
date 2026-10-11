/* Atlas roadmap data: iOS (ios)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "ios",
  "title": "iOS",
  "icon": "🍎",
  "color": "#ec4899",
  "kind": "role",
  "tagline": "Swift apps, shipped to the App Store.",
  "desc": "The complete path to becoming an iOS developer: Swift, Xcode, UIKit and SwiftUI, platform frameworks, and getting a real app through App Store review.",
  "root": {
    "t": "iOS Development",
    "d": "Build native apps for iPhone and iPad with Swift — from your first playground to a live App Store release.",
    "children": [
      {
        "t": "Swift First: Language & Setup",
        "d": "Why Swift, getting Xcode running, and the core language mechanics every iOS dev uses daily.",
        "lv": 1,
        "children": [
          {
            "t": "Why Swift, Why iOS",
            "d": "The case for building on Apple platforms: the market, the language, and what an iOS developer actually ships.",
            "lv": 1,
            "time": "~2h",
            "tip": "You need a Mac — full stop. Hackintosh and cloud-Mac detours waste weeks; budget for real Apple hardware early.",
            "learn": [
              "The App Store economy: why native iOS apps still command premium revenue and jobs",
              "Swift vs Objective-C: why Apple replaced its own language and what that means for new developers",
              "What iOS developers actually ship: apps, widgets, extensions — and the yearly WWDC cycle that moves the platform"
            ],
            "do": [
              "Read the story of Swift's evolution from 2014 to Swift 6 on swift.org",
              "List 3 apps you use daily and write down one screen from each you will rebuild later",
              "Check current iOS adoption numbers on Apple's developer site to see why targeting the latest SDK is normal"
            ],
            "tools": ["Xcode", "Mac"],
            "res": [
              ["Swift.org", "https://www.swift.org/"],
              ["Apple Developer", "https://developer.apple.com/"]
            ]
          },
          {
            "t": "Installing Xcode",
            "d": "Apple's IDE and everything that ships inside it: editor, simulators, and Instruments.",
            "lv": 1,
            "time": "~3h",
            "tip": "Xcode downloads are 7 GB+. Start the download, then do the next topic while it installs — never plan around it finishing quickly.",
            "learn": [
              "What Xcode bundles: source editor, Interface Builder, iOS simulators, Instruments profiler, and the Swift toolchain",
              "Xcode versions track iOS versions: a new Xcode every September brings a new SDK you must build against",
              "Free Apple ID provisioning: run apps on your own iPhone without paying for a developer account"
            ],
            "do": [
              "Install Xcode from the Mac App Store and launch it once to finish component installation",
              "Create a Swift playground, print your name, and run it on the iPhone simulator",
              "Sign in with your Apple ID in Xcode settings and run the playground app on a real device"
            ],
            "tools": ["Xcode", "Mac App Store"],
            "res": [
              ["Xcode", "https://developer.apple.com/xcode/"]
            ]
          },
          {
            "t": "Swift Basics: Values, Types & Control Flow",
            "d": "let vs var, type inference, and the control flow you'll write in every single file.",
            "lv": 1,
            "time": "~1d",
            "tip": "Default to let. If the compiler complains the value changes, then — and only then — switch to var.",
            "learn": [
              "let vs var and Swift's type inference: the compiler knows the type so you rarely annotate",
              "Core types: Int, Double, Bool, String — and why Swift refuses to silently convert between them",
              "if/guard/switch and loops: early exits with guard, and switch as a real pattern-matching powerhouse"
            ],
            "do": [
              "In a playground: build a grade calculator using switch with ranges",
              "Rewrite the same logic with guard statements and feel the difference in nesting",
              "Use string interpolation to format a small report from variables"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift Documentation", "https://www.swift.org/documentation/"],
              ["The Swift Programming Language", "https://developer.apple.com/documentation/swift"]
            ]
          },
          {
            "t": "Collections & Functions",
            "d": "Arrays, dictionaries, and sets — plus the functions and closures that transform them.",
            "lv": 1,
            "time": "~1d",
            "tip": "Reach for map, filter, and reduce before writing a for loop — Swift code reads as data pipelines.",
            "learn": [
              "Array, Dictionary, Set: when each is the right container, and Swift's value-semantics surprise (copies are cheap)",
              "Higher-order functions: map/filter/reduce as the idiomatic way to transform collections",
              "Functions as values: parameters, return values, and your first look at closure syntax"
            ],
            "do": [
              "Take an array of dictionaries (mock API data) and produce a filtered, sorted report with map/filter",
              "Write a function that takes another function as a parameter and use it to validate form input",
              "Convert a for-loop you wrote earlier into a single chained map/filter expression"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift Standard Library: Collections", "https://developer.apple.com/documentation/swift/array"]
            ]
          },
          {
            "t": "Git & GitHub for iOS Projects",
            "d": "Version control tuned for Xcode: what to commit, what to ignore, and why project files merge badly.",
            "lv": 1,
            "time": "~4h",
            "tip": "Never commit DerivedData or xcuserdata. A proper .gitignore on day one saves your first merge conflict.",
            "learn": [
              "Commits, branches, and pull requests: the workflow every iOS team expects you to know",
              "The Xcode .gitignore: DerivedData, xcuserdata, and why project.pbxproj is a merge-conflict magnet",
              "Why teams prefer Swift Package Manager and code-built UI: fewer unmergeable files"
            ],
            "do": [
              "Create a GitHub .gitignore using the Swift template and init a repo for your playground project",
              "Make a feature branch, commit a change, open a pull request, and merge it",
              "Clone a small open-source Swift package and read its Package.swift"
            ],
            "tools": ["Git", "GitHub"],
            "res": [
              ["GitHub Swift .gitignore", "https://github.com/github/gitignore"]
            ]
          }
        ]
      },
      {
        "t": "The Swift Type System",
        "d": "Optionals, structs vs classes, protocols, generics, and Swift 6 concurrency — the ideas that make Swift Swift.",
        "lv": 1,
        "children": [
          {
            "t": "Optionals: Swift's Superpower",
            "d": "Nil is a compile-time concept in Swift. Master the tools that keep it that way.",
            "lv": 1,
            "time": "~1d",
            "tip": "Every ! in production code is a crash you scheduled for later. Treat force-unwrapping as a code smell.",
            "learn": [
              "Optional as an enum: .some and .none — nil isn't magic, it's a value you must handle",
              "if let / guard let binding, optional chaining (?.), and nil coalescing (??)",
              "Implicitly unwrapped optionals and why force unwrap (!) crashes at runtime"
            ],
            "do": [
              "Parse a nested JSON-like dictionary using only guard let — no force unwraps allowed",
              "Chain three optional method calls with ?. and provide a ?? fallback",
              "Find every ! in a sample project and replace each with safe unwrapping"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Optionals", "https://developer.apple.com/documentation/swift/optional"]
            ]
          },
          {
            "t": "Structs vs Classes & ARC",
            "d": "Value vs reference semantics — the single most important design decision in Swift.",
            "lv": 1,
            "time": "~1d",
            "tip": "Default to struct. Reach for a class only when you need shared identity or inheritance.",
            "learn": [
              "Value semantics: structs copy on assignment, so mutations can't surprise distant code",
              "Classes, identity (===), inheritance, and deinit — when shared mutable state is actually what you want",
              "ARC basics: strong/weak/unowned references and how retain cycles leak memory"
            ],
            "do": [
              "Model a shopping cart as a struct and prove that copies don't affect the original",
              "Deliberately create a retain cycle between two classes, confirm the leak, then break it with weak",
              "Draw the reference graph of a view controller holding a closure that captures self"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Automatic Reference Counting", "https://developer.apple.com/documentation/swift/automatic-reference-counting"]
            ]
          },
          {
            "t": "Protocols & Extensions",
            "d": "Protocol-oriented programming: Swift's answer to inheritance-heavy design.",
            "lv": 2,
            "time": "~1d",
            "tip": "Prefer a protocol with a default implementation over a base class — you get the reuse without the inheritance baggage.",
            "learn": [
              "Protocols as contracts: requirements, conformances, and programming to an interface",
              "Protocol extensions: default implementations shared across all conforming types",
              "The delegate pattern: how UIKit has used protocols for callbacks since before Swift existed"
            ],
            "do": [
              "Define a DataSource protocol and make two unrelated types conform to it",
              "Add a default implementation via protocol extension, then override it in one conformer",
              "Extend String with a computed property and a method you wish the standard library had"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Protocols", "https://developer.apple.com/documentation/swift/protocol"]
            ]
          },
          {
            "t": "Enums, Generics & Error Handling",
            "d": "Associated values, generic code, and Swift's typed approach to things going wrong.",
            "lv": 2,
            "time": "~1d",
            "tip": "Model states as enums with associated values (loading, loaded(data), failed(error)) — it makes impossible states unrepresentable.",
            "learn": [
              "Enums with associated values and raw values: state machines, not just constants",
              "Generics: writing one function or type that works for many types, with constraints",
              "Error handling: throws, do/try/catch, Result, and Swift 6's typed throws"
            ],
            "do": [
              "Build a generic Stack<T> with push/pop and a constraint-based extension",
              "Write a throwing JSON loader and handle each error case separately in the caller",
              "Refactor a throwing function to use typed throws so callers see exactly what can fail"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Error Handling", "https://developer.apple.com/documentation/swift/error"]
            ]
          },
          {
            "t": "Closures Deep Dive",
            "d": "Trailing closures, capture lists, and escaping — the syntax behind every completion handler.",
            "lv": 2,
            "time": "~4h",
            "tip": "If a closure outlives the function call (stored, or called later), it's @escaping — and it probably needs a capture list.",
            "learn": [
              "Closure syntax sugar: from full form down to trailing closures and $0 shorthand",
              "@escaping vs non-escaping: what the compiler guarantees about lifetime",
              "Capture lists ([weak self]): the standard fix for closures that keep view controllers alive"
            ],
            "do": [
              "Write a fake network function with a completion handler and call it with trailing-closure syntax",
              "Create a retain cycle with a stored escaping closure, then fix it with [weak self]",
              "Sort an array with a one-line trailing closure"
            ],
            "tools": ["Xcode Playgrounds"],
            "res": [
              ["Swift: Closures", "https://developer.apple.com/documentation/swift/closure"]
            ]
          },
          {
            "t": "Swift 6 Concurrency: async/await & Actors",
            "d": "Structured concurrency and compile-time data-race safety — the modern Swift way to do background work.",
            "lv": 2,
            "time": "~2d",
            "tip": "Swift 6 mode turns data races into compile errors. Migrate one target at a time — don't flip the whole app at once.",
            "learn": [
              "async/await: suspension points that read like synchronous code but never block threads",
              "Tasks and structured concurrency: async let, TaskGroup, and automatic cancellation propagation",
              "Actors, Sendable, and @MainActor: isolation that makes shared mutable state safe by construction"
            ],
            "do": [
              "Rewrite a completion-handler API using async/await and compare the readability",
              "Build an actor-guarded image cache and hammer it from 100 concurrent tasks",
              "Enable Swift 6 language mode on a small target and fix every concurrency warning"
            ],
            "tools": ["Xcode", "Swift 6"],
            "res": [
              ["Swift Concurrency", "https://developer.apple.com/documentation/swift/concurrency"]
            ]
          }
        ]
      },
      {
        "t": "Xcode & App Anatomy",
        "d": "Projects, the app lifecycle, simulators, and debugging — the daily machinery of iOS development.",
        "lv": 1,
        "children": [
          {
            "t": "Inside an Xcode Project",
            "d": "Targets, schemes, build settings, and Info.plist — the files behind the New Project button.",
            "lv": 1,
            "time": "~3h",
            "tip": "One project can build many apps: targets are how you ship free/pro versions or an app plus its widget from one codebase.",
            "learn": [
              "Targets and schemes: what actually gets built, and Debug vs Release configurations",
              "Info.plist and entitlements: the metadata and capabilities (push, iCloud) your app declares",
              "Asset catalogs: app icons, colors, and images managed as structured assets, not loose files"
            ],
            "do": [
              "Create an app from the template and change its bundle identifier and display name",
              "Add an app icon set and a color asset, then use both from code",
              "Duplicate a target and configure different bundle IDs for dev vs production"
            ],
            "tools": ["Xcode"],
            "res": [
              ["Xcode", "https://developer.apple.com/xcode/"]
            ]
          },
          {
            "t": "The App Lifecycle",
            "d": "How iOS launches, suspends, and kills your app — and the hooks you get at each transition.",
            "lv": 1,
            "time": "~4h",
            "tip": "Assume your app can be killed in the background at any time. Persist anything the user would miss.",
            "learn": [
              "The @main entry point and the two flavors: SwiftUI App lifecycle vs UIKit AppDelegate/SceneDelegate",
              "App states (active, inactive, background, suspended) and the scene lifecycle for multi-window iPad",
              "What to do on backgrounding: save state quickly, because you get seconds, not minutes"
            ],
            "do": [
              "Log every lifecycle callback while launching, backgrounding, and force-quitting an app",
              "Save and restore a text field's content across a force-quit using scene state restoration",
              "Build the same tiny app with both the SwiftUI App and UIKit AppDelegate entry points"
            ],
            "tools": ["Xcode"],
            "res": [
              ["Managing Your App's Life Cycle", "https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle"]
            ]
          },
          {
            "t": "Simulators & Real Devices",
            "d": "Where the simulator lies to you, and how to get your app onto a real iPhone for free.",
            "lv": 1,
            "time": "~3h",
            "tip": "The simulator has your Mac's CPU and unlimited memory. Performance and push notifications must be tested on device.",
            "learn": [
              "Simulator strengths and blind spots: no real push notifications, no true camera/GPS behavior",
              "Free provisioning: running on your own device with just an Apple ID",
              "The Devices window: installing builds, reading device logs, and capturing screenshots"
            ],
            "do": [
              "Run your app on three different simulators (small phone, big phone, iPad) and note layout breaks",
              "Deploy to your own iPhone via free provisioning and trust the developer certificate",
              "Simulate a location in the simulator and watch your app react"
            ],
            "tools": ["Xcode", "iOS Simulator"],
            "res": [
              ["Running Your App in the Simulator", "https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device"]
            ]
          },
          {
            "t": "Debugging in Xcode",
            "d": "Breakpoints, LLDB, and the view debugger — finding bugs like a professional.",
            "lv": 1,
            "time": "~4h",
            "tip": "Learn one LLDB command deeply: po. Printing objects at a breakpoint solves half of all bugs.",
            "learn": [
              "Breakpoints: conditional, symbolic, and exception breakpoints that catch crashes at their origin",
              "LLDB essentials: po, p, expression — inspecting and even mutating state mid-run",
              "The view hierarchy debugger: freezing your UI in 3D to find the view that's hiding or misplaced"
            ],
            "do": [
              "Set an exception breakpoint and trigger a crash to land exactly on the failing line",
              "Use po at a breakpoint to inspect a view controller's properties",
              "Capture a view hierarchy and identify which view is covering your button"
            ],
            "tools": ["Xcode", "LLDB"],
            "res": [
              ["Xcode Debugging", "https://developer.apple.com/documentation/xcode/debugging"]
            ]
          },
          {
            "t": "Instruments & Profiling",
            "d": "Measure, don't guess: finding leaks, slow frames, and battery drains with Instruments.",
            "lv": 2,
            "time": "~1d",
            "tip": "Profile Release builds on a real device. Debug builds on the simulator produce numbers that mean nothing.",
            "learn": [
              "The core instruments: Time Profiler, Allocations, Leaks, and Energy Log",
              "Reading a call tree: finding the hot path instead of micro-optimizing at random",
              "Common iOS sins: retain cycles, offscreen rendering, and doing JSON parsing on the main thread"
            ],
            "do": [
              "Run the Leaks instrument on a sample app and fix a leaked view controller",
              "Use Time Profiler to find why a scroll view stutters, then fix it",
              "Compare launch time before and after deferring heavy setup off the main thread"
            ],
            "tools": ["Instruments", "Xcode"],
            "res": [
              ["Improving Your App's Performance", "https://developer.apple.com/documentation/xcode/improving-your-app-s-performance"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "UIKit: The Classic Toolkit",
        "d": "Apple's original UI framework — still powering most App Store apps and every iOS job interview.",
        "lv": 2,
        "children": [
          {
            "t": "Views & View Controllers",
            "d": "The UIView hierarchy and the view controller lifecycle that organizes every UIKit screen.",
            "lv": 2,
            "time": "~2d",
            "tip": "A view controller that does networking, layout, and business logic is a Massive View Controller. Split early.",
            "learn": [
              "UIView: frames, bounds, the view hierarchy, and the responder chain for touch events",
              "UIViewController lifecycle: viewDidLoad vs viewWillAppear vs viewDidLayoutSubviews — and what belongs in each",
              "Building UI in code: creating views programmatically and adding them to the hierarchy"
            ],
            "do": [
              "Build a profile screen entirely in code: image view, labels, and a button",
              "Log every lifecycle method while pushing, popping, and rotating the screen",
              "Present and dismiss a modal view controller with a completion handler"
            ],
            "tools": ["Xcode", "UIKit"],
            "res": [
              ["UIKit", "https://developer.apple.com/documentation/uikit"]
            ]
          },
          {
            "t": "Auto Layout",
            "d": "Constraints that adapt to every iPhone and iPad — the layout engine UIKit is built on.",
            "lv": 2,
            "time": "~2d",
            "tip": "Ambiguous-layout warnings in the console are free lessons. Read them instead of deleting constraints at random.",
            "learn": [
              "Constraints as equations: anchors (NSLayoutAnchor) for leading, trailing, center, and size",
              "UIStackView: letting the stack do the constraint math for rows and columns of views",
              "Intrinsic content size and content hugging/compression: how labels and buttons size themselves"
            ],
            "do": [
              "Build a chat-bubble layout using only layout anchors — no Interface Builder",
              "Create a form with UIStackView that adapts to Dynamic Type sizes",
              "Deliberately create an ambiguous layout, read the console warning, and resolve it"
            ],
            "tools": ["Xcode", "UIKit"],
            "res": [
              ["Auto Layout Guide", "https://developer.apple.com/documentation/uikit/views_and_controls/layout"]
            ]
          },
          {
            "t": "Navigation: Stacks, Tabs & Modals",
            "d": "Moving between screens: the navigation patterns users expect on iOS.",
            "lv": 2,
            "time": "~1d",
            "tip": "One navigation controller per tab is the standard architecture. Fighting it creates bugs you'll debug for days.",
            "learn": [
              "UINavigationController: push/pop, the navigation bar, and large titles",
              "UITabBarController: the root of most real apps, with independent stacks per tab",
              "Modal presentation styles and the coordinator pattern for keeping navigation logic out of view controllers"
            ],
            "do": [
              "Build a 3-tab app where each tab has its own navigation stack",
              "Push a detail screen, pass data forward, and pass a result back with a delegate",
              "Present a form sheet modally and dismiss it with a swipe"
            ],
            "tools": ["Xcode", "UIKit"],
            "res": [
              ["UINavigationController", "https://developer.apple.com/documentation/uikit/uinavigationcontroller"]
            ]
          },
          {
            "t": "Table Views & Collection Views",
            "d": "Lists and grids at 60fps: cell reuse and diffable data sources.",
            "lv": 2,
            "time": "~2d",
            "tip": "Cell reuse means your cell is recycled — always reset every property in cell configuration, or old content ghosts in.",
            "learn": [
              "Data source and delegate: the two protocols that drive every list",
              "Cell reuse queues: why dequeueReusableCell exists and what happens without it",
              "Diffable data sources and compositional layouts: modern, crash-free list updates and complex grids"
            ],
            "do": [
              "Build a contacts list with UITableView and custom cells",
              "Rebuild it with UICollectionView, diffable data source, and a compositional grid layout",
              "Add swipe actions and a search filter to the list"
            ],
            "tools": ["Xcode", "UIKit"],
            "res": [
              ["UICollectionView", "https://developer.apple.com/documentation/uikit/uicollectionview"]
            ]
          },
          {
            "t": "Storyboards, Code & Mixing SwiftUI",
            "d": "Three ways to build UIKit screens — and how to choose without starting a team war.",
            "lv": 2,
            "time": "~4h",
            "tip": "Storyboards merge terribly in teams. Code or SwiftUI scales better the moment more than two people touch UI.",
            "learn": [
              "Storyboards and XIBs: segues, IBOutlets/IBActions, and where they still make sense",
              "Programmatic UIKit: full control, clean diffs, and no XML merge conflicts",
              "Interop: embedding SwiftUI in UIKit with UIHostingController and vice versa"
            ],
            "do": [
              "Build one screen as a storyboard, then rebuild it in code, and compare the diffs",
              "Embed a SwiftUI view inside a UIKit view controller using UIHostingController",
              "Trigger a storyboard segue programmatically and pass data in prepare(for:)"
            ],
            "tools": ["Xcode", "UIKit", "SwiftUI"],
            "res": [
              ["UIHostingController", "https://developer.apple.com/documentation/swiftui/uihostingcontroller"]
            ],
            "tag": "opt"
          },
          {
            "t": "UIKit Animations & Gestures",
            "d": "The motion and touch handling that make apps feel alive.",
            "lv": 2,
            "time": "~1d",
            "tip": "Animate layout changes, not frames: call layoutIfNeeded inside the animation block after updating constraints.",
            "learn": [
              "UIView.animate: duration, curves, spring damping, and completion handlers",
              "Gesture recognizers: taps, swipes, pans, pinches — and how they compose",
              "Interruptible animations with UIViewPropertyAnimator for interactive transitions"
            ],
            "do": [
              "Build a card that springs up from the bottom with a spring animation",
              "Add a pan gesture to dismiss the card interactively, driven by finger position",
              "Chain two animations with completion handlers for a staged onboarding reveal"
            ],
            "tools": ["Xcode", "UIKit"],
            "res": [
              ["UIView Animations", "https://developer.apple.com/documentation/uikit/uiview/animation"]
            ]
          }
        ]
      },
      {
        "t": "SwiftUI: The Modern Toolkit",
        "d": "Apple's declarative UI framework — the fastest way to build new apps in 2026.",
        "lv": 2,
        "children": [
          {
            "t": "Thinking Declaratively",
            "d": "Views as values: describe what the UI should be and let SwiftUI handle the how.",
            "lv": 2,
            "time": "~1d",
            "tip": "Stop thinking in steps (create, configure, add). Think in declarations: this screen IS this view hierarchy.",
            "learn": [
              "The View protocol and body: your UI as a pure function of state",
              "Modifiers: they return new views, and their order changes the result",
              "Why the framework owns the actual UIKit views underneath — and why you shouldn't fight it"
            ],
            "do": [
              "Rebuild your UIKit profile screen in SwiftUI in under 50 lines",
              "Swap the order of .padding() and .background() and observe the difference",
              "Extract repeated UI into small custom View structs"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI", "https://developer.apple.com/documentation/swiftui"]
            ]
          },
          {
            "t": "State & Data Flow",
            "d": "The Observation framework: the single source of truth behind every SwiftUI screen.",
            "lv": 2,
            "time": "~2d",
            "tip": "One source of truth per piece of data. Duplicated state in two views is the #1 SwiftUI bug.",
            "learn": [
              "@State for view-local state, @Binding for passing it down, @Environment for app-wide values",
              "@Observable (the Observation framework): reference-type models that SwiftUI watches automatically",
              "Data flow rules: state flows down, events flow up — never mutate a parent's state from a child directly"
            ],
            "do": [
              "Build a settings screen backed by one @Observable model shared across views",
              "Create a custom Binding that validates input before writing through",
              "Debug a view that won't update and find the duplicated state causing it"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["Observation Framework", "https://developer.apple.com/documentation/observation"]
            ]
          },
          {
            "t": "Lists, Forms & Navigation",
            "d": "The building blocks of real apps: master-detail flows, settings forms, and modal presentations.",
            "lv": 2,
            "time": "~1d",
            "tip": "NavigationStack with a path array gives you deep-linkable, programmatic navigation for free. Use it from day one.",
            "learn": [
              "List and Form: the fastest path to settings screens and master lists",
              "NavigationStack and navigationDestination: type-safe, programmatic navigation",
              "Sheets, alerts, and confirmation dialogs: modal presentation in the declarative world"
            ],
            "do": [
              "Build a master-detail app: list of items, tap to push a detail view via NavigationStack",
              "Drive navigation from a path array and implement deep-linking to a detail screen",
              "Present an edit form as a sheet with detents"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["NavigationStack", "https://developer.apple.com/documentation/swiftui/navigationstack"]
            ]
          },
          {
            "t": "Layout System Deep Dive",
            "d": "How SwiftUI really sizes views: the propose-and-respond negotiation underneath every layout.",
            "lv": 2,
            "time": "~1d",
            "tip": "GeometryReader breaks out of the layout negotiation and sizes greedily — reach for it last, not first.",
            "learn": [
              "The layout protocol: parents propose sizes, children choose, parents place",
              "Stacks, spacers, alignment guides, and the frame modifier's min/ideal/max dance",
              "The Layout protocol: writing your own container (like a flow layout) from scratch"
            ],
            "do": [
              "Build a tag-cloud flow layout by implementing the Layout protocol",
              "Fix a view that ignores its frame by understanding who proposes what",
              "Use alignment guides to line up views across different stacks"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI Layout", "https://developer.apple.com/documentation/swiftui/layout"]
            ]
          },
          {
            "t": "Animation & Transitions in SwiftUI",
            "d": "Implicit vs explicit animation, transitions, and the matched-geometry magic behind hero animations.",
            "lv": 2,
            "time": "~1d",
            "tip": "Animate the state, not the view: change a @State value inside withAnimation and SwiftUI interpolates everything.",
            "learn": [
              "Implicit animation (.animation) vs explicit (withAnimation): who triggers what",
              "Transitions: how views animate in and out of the hierarchy (.scale, .slide, asymmetric)",
              "matchedGeometryEffect: hero-style shared-element transitions between screens"
            ],
            "do": [
              "Animate a card expanding to full screen with matchedGeometryEffect",
              "Build a custom asymmetric transition for a tab switcher",
              "Stagger a list's entrance with per-item delays"
            ],
            "tools": ["Xcode", "SwiftUI"],
            "res": [
              ["SwiftUI Animations", "https://developer.apple.com/documentation/swiftui/animation"]
            ]
          },
          {
            "t": "Previews & UIKit Interop",
            "d": "Design at speed with Previews, and bridge the old and new worlds in both directions.",
            "lv": 2,
            "time": "~4h",
            "tip": "Preview multiple states (loading, empty, error, loaded) — it's the cheapest UI testing you'll ever do.",
            "learn": [
              "#Preview: lightning-fast UI iteration without launching the simulator",
              "Preview variants: devices, color schemes, Dynamic Type sizes, and locales",
              "Bridging: UIHostingController (SwiftUI in UIKit) and UIViewRepresentable (UIKit in SwiftUI)"
            ],
            "do": [
              "Write previews for loading, empty, and error states of one screen",
              "Wrap a UIKit map view with UIViewRepresentable for use in SwiftUI",
              "Embed a SwiftUI settings screen in an existing UIKit app via UIHostingController"
            ],
            "tools": ["Xcode", "SwiftUI", "UIKit"],
            "res": [
              ["Xcode Previews", "https://developer.apple.com/documentation/xcode/previewing-swiftui-views-and-uikit-views"]
            ]
          }
        ]
      },
      {
        "t": "Data & Networking",
        "d": "Talking to APIs and persisting data: Codable, URLSession, SwiftData, and the Keychain.",
        "lv": 2,
        "children": [
          {
            "t": "JSON & Codable",
            "d": "Swift's native JSON story: decode APIs into type-safe models with almost no code.",
            "lv": 2,
            "time": "~1d",
            "tip": "Never hand-parse JSON in Swift. If you're writing string subscripts, you're doing it wrong — Codable exists.",
            "learn": [
              "Decodable/Encodable: automatic synthesis and when you must write init(from:) yourself",
              "CodingKeys: mapping snake_case API fields to camelCase Swift properties",
              "Date and number strategies: decoding ISO8601 dates and handling type mismatches gracefully"
            ],
            "do": [
              "Decode a real public API response (e.g. a posts endpoint) into Swift structs",
              "Handle an API that returns dates as strings with a custom date decoding strategy",
              "Write a failable decoding path for an API field that is sometimes a string, sometimes a number"
            ],
            "tools": ["Xcode", "Swift"],
            "res": [
              ["Encoding and Decoding Custom Types", "https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types"]
            ]
          },
          {
            "t": "Networking with URLSession",
            "d": "async/await networking: building a clean, testable API client from scratch.",
            "lv": 2,
            "time": "~2d",
            "tip": "One generic request function with Codable decoding beats ten copy-pasted URLSession calls.",
            "learn": [
              "URLSession with async/await: data(from:) and the death of completion-handler pyramids",
              "HTTP essentials: methods, headers, status codes, and mapping them to domain errors",
              "Designing an API client: endpoints as types, a generic decode layer, and injectable sessions for testing"
            ],
            "do": [
              "Build a generic APIClient with a single async request<T: Decodable> function",
              "Map HTTP status codes to a typed APIError enum with user-friendly messages",
              "Add an auth-token interceptor that refreshes expired tokens and retries once"
            ],
            "tools": ["Xcode", "URLSession"],
            "res": [
              ["URLSession", "https://developer.apple.com/documentation/foundation/urlsession"]
            ]
          },
          {
            "t": "Beyond REST: GraphQL & WebSockets",
            "d": "When REST isn't enough: typed GraphQL queries and real-time sockets.",
            "lv": 2,
            "time": "~1d",
            "tip": "GraphQL shines when the client needs different shapes of the same data. For simple CRUD, REST is still king.",
            "learn": [
              "GraphQL basics: queries, mutations, and why the client chooses the response shape",
              "Apollo iOS: code-generated Swift models from your GraphQL schema",
              "WebSockets with URLSessionWebSocketTask: real-time updates without polling"
            ],
            "do": [
              "Query a public GraphQL API with Apollo iOS and render the typed results",
              "Open a WebSocket to an echo server and build a tiny live chat UI",
              "Compare the payload size of a GraphQL query vs the equivalent REST response"
            ],
            "tools": ["Apollo iOS", "URLSessionWebSocketTask"],
            "res": [
              ["Apollo iOS", "https://github.com/apollographql/apollo-ios"]
            ],
            "tag": "opt"
          },
          {
            "t": "Persistence: UserDefaults, Files & Keychain",
            "d": "The storage ladder: when to use simple defaults, files, or the secure enclave-backed Keychain.",
            "lv": 2,
            "time": "~1d",
            "tip": "UserDefaults is for preferences, not databases. If you're storing arrays of models there, you need SwiftData.",
            "learn": [
              "UserDefaults: perfect for settings and flags, terrible for large or sensitive data",
              "The app sandbox and FileManager: documents, caches, and what iCloud backup touches",
              "Keychain Services: the only correct home for tokens, passwords, and secrets"
            ],
            "do": [
              "Build a settings store on UserDefaults with @AppStorage in SwiftUI",
              "Save and load user-generated files in the documents directory",
              "Store an auth token in the Keychain and retrieve it after an app restart"
            ],
            "tools": ["Xcode", "Keychain"],
            "res": [
              ["Keychain Services", "https://developer.apple.com/documentation/security/keychain_services"]
            ]
          },
          {
            "t": "SwiftData & Core Data",
            "d": "Apple's persistence frameworks: SwiftData's modern simplicity and Core Data's battle-tested power.",
            "lv": 2,
            "time": "~2d",
            "tip": "Learn SwiftData first for new apps, but learn enough Core Data to read it — most existing codebases still use it.",
            "learn": [
              "SwiftData: @Model classes, ModelContainer, @Query, and Swift-native predicates",
              "Migrations: how schema changes work and why you version your models",
              "Core Data essentials: the stack (context, coordinator, store) for reading legacy code"
            ],
            "do": [
              "Build an offline-first notes app with SwiftData: create, edit, delete, search",
              "Add a new property to your model and perform a lightweight migration",
              "Fetch the same data with a Core Data NSFetchedResultsController to see the older pattern"
            ],
            "tools": ["Xcode", "SwiftData"],
            "res": [
              ["SwiftData", "https://developer.apple.com/documentation/swiftdata"]
            ]
          },
          {
            "t": "Caching & Offline Strategy",
            "d": "Fast apps work without the network: HTTP caching, image pipelines, and offline queues.",
            "lv": 3,
            "time": "~1d",
            "tip": "Images are the #1 cause of janky lists. Never load them without a cache — use Nuke or Kingfisher, not raw URLSession.",
            "learn": [
              "URLCache: how HTTP cache headers give you free offline behavior",
              "Image loading pipelines: memory + disk caches, downsampling, and cancellation on reuse",
              "Offline queues: persisting user actions and syncing when connectivity returns"
            ],
            "do": [
              "Add Nuke or Kingfisher to a feed and watch scroll performance transform",
              "Configure URLCache with a disk capacity and verify responses load from cache offline",
              "Build a pending-actions queue that replays mutations when the network returns"
            ],
            "tools": ["Nuke", "Kingfisher", "URLCache"],
            "res": [
              ["Kingfisher", "https://github.com/onevcat/Kingfisher"]
            ]
          }
        ]
      },
      {
        "t": "Platform Power",
        "d": "The frameworks that separate toy apps from real ones: notifications, system integrations, and security.",
        "lv": 3,
        "children": [
          {
            "t": "Push Notifications & Background Modes",
            "d": "APNs end to end: permissions, tokens, and what your app can do while asleep.",
            "lv": 3,
            "time": "~2d",
            "tip": "Ask for notification permission at the moment of value (after an action), not on first launch — timing doubles opt-in rates.",
            "learn": [
              "The APNs flow: device token, your server, Apple's push service — and why the simulator can't test it",
              "UNNotificationCenter: requesting authorization, scheduling local notifications, handling taps",
              "Background modes: fetch, processing tasks, and silent pushes — and Apple's strict limits on each"
            ],
            "do": [
              "Schedule and handle a local notification with custom actions",
              "Register for remote notifications on a real device and log the device token",
              "Implement a background app refresh task that syncs data within its time budget"
            ],
            "tools": ["Xcode", "APNs"],
            "res": [
              ["User Notifications", "https://developer.apple.com/documentation/usernotifications"]
            ]
          },
          {
            "t": "Apple Frameworks Tour",
            "d": "The system integrations users love: maps, health, widgets, and App Intents.",
            "lv": 3,
            "time": "~2d",
            "tip": "Ship one framework integration really well instead of five shallow ones — depth is what gets featured.",
            "learn": [
              "MapKit and CoreLocation: maps, annotations, and the privacy prompts location requires",
              "WidgetKit and App Intents: glanceable widgets and making your app's actions available to Siri and Spotlight",
              "HealthKit, AVFoundation, Core ML / Foundation Models: health data, camera/audio, and on-device AI"
            ],
            "do": [
              "Build a WidgetKit widget that shows live data from your app",
              "Expose one app action as an App Intent callable from Siri and Shortcuts",
              "Add a MapKit view with custom annotations for your app's data"
            ],
            "tools": ["Xcode", "WidgetKit"],
            "res": [
              ["WidgetKit", "https://developer.apple.com/documentation/widgetkit"],
              ["App Intents", "https://developer.apple.com/documentation/appintents"]
            ]
          },
          {
            "t": "Combine & Reactive Patterns",
            "d": "Apple's reactive framework: publishers, operators, and bridging to async/await.",
            "lv": 3,
            "time": "~2d",
            "tip": "New code should prefer async/await. Learn Combine to read and maintain the huge installed base that uses it.",
            "learn": [
              "Publishers and subscribers: the core abstraction and the built-in publishers (@Published, Just, Future)",
              "Operators: map, filter, combineLatest, debounce — the vocabulary of event streams",
              "Bridging worlds: converting between Combine publishers and async sequences"
            ],
            "do": [
              "Build a search-as-you-type field with debounce and flatMap to a network request",
              "Combine two publishers (user input + settings) with combineLatest",
              "Bridge a Combine pipeline into an AsyncStream consumed by SwiftUI's .task"
            ],
            "tools": ["Xcode", "Combine"],
            "res": [
              ["Combine", "https://developer.apple.com/documentation/combine"]
            ],
            "tag": "opt"
          },
          {
            "t": "Accessibility & Localization",
            "d": "Apps for everyone: VoiceOver, Dynamic Type, and shipping in multiple languages.",
            "lv": 2,
            "time": "~1d",
            "tip": "Turn on VoiceOver and navigate your own app blindfolded once — you'll find ten issues in ten minutes.",
            "learn": [
              "VoiceOver: accessibility labels, hints, traits, and rotor actions",
              "Dynamic Type and larger text: layouts that survive the largest accessibility sizes",
              "String Catalogs: localizing without drowning in .strings files, plus RTL layout support"
            ],
            "do": [
              "Audit your app with Accessibility Inspector and fix every warning",
              "Add Spanish (or your second language) via String Catalogs",
              "Test your main screen at the largest Dynamic Type size and fix breakages"
            ],
            "tools": ["Xcode", "Accessibility Inspector"],
            "res": [
              ["Accessibility", "https://developer.apple.com/accessibility/"]
            ]
          },
          {
            "t": "iOS Security Essentials",
            "d": "Protecting user data: the Keychain, biometrics, transport security, and App Store expectations.",
            "lv": 3,
            "time": "~1d",
            "tip": "Never roll your own crypto. CryptoKit and the Keychain exist so you don't have to.",
            "learn": [
              "App Transport Security: why HTTPS is mandatory and when exceptions are (rarely) justified",
              "LocalAuthentication: Face ID / Touch ID gating with graceful passcode fallback",
              "Threat model realism: certificate pinning, jailbreak detection limits, and what you can't defend against"
            ],
            "do": [
              "Gate a sensitive screen behind Face ID with a passcode fallback",
              "Enable ATS exceptions analysis: find and remove any HTTP URLs",
              "Implement certificate pinning for your API client and test the failure path"
            ],
            "tools": ["CryptoKit", "LocalAuthentication"],
            "res": [
              ["LocalAuthentication", "https://developer.apple.com/documentation/localauthentication"],
              ["App Security", "https://developer.apple.com/documentation/security"]
            ]
          }
        ]
      },
      {
        "t": "Testing, CI & the App Store",
        "d": "Proving it works, automating the pipeline, and surviving review — the road to a live listing.",
        "lv": 3,
        "children": [
          {
            "t": "Unit & UI Testing",
            "d": "Swift Testing and XCUITest: the safety net that lets you refactor without fear.",
            "lv": 2,
            "time": "~2d",
            "tip": "Test behavior, not implementation. Tests that break on every refactor get deleted — and then nothing is tested.",
            "learn": [
              "Swift Testing (@Test, #expect): Apple's modern framework and parameterized tests",
              "Test doubles: fakes and mocks for networking and persistence layers",
              "XCUITest: driving your real UI, accessibility identifiers, and test plans with coverage"
            ],
            "do": [
              "Write Swift Testing tests for your API client's decoding and error mapping",
              "Fake the network layer and test a view model end to end",
              "Record a XCUITest for your login flow and run it on a clean simulator"
            ],
            "tools": ["Xcode", "Swift Testing", "XCUITest"],
            "res": [
              ["Swift Testing", "https://developer.apple.com/documentation/testing"]
            ]
          },
          {
            "t": "Swift Package Manager & Dependencies",
            "d": "SPM from consumer to author: adding, pinning, and publishing packages.",
            "lv": 2,
            "time": "~4h",
            "tip": "Pin to minor versions (upToNextMinor), not exact commits — you get fixes without surprise breakage.",
            "learn": [
              "Adding packages: version rules (up to next major/minor) and resolving dependency graphs",
              "When SPM can't do it: binary targets, resources, and the CocoaPods legacy you'll inherit",
              "Authoring: structuring your own reusable package with tests"
            ],
            "do": [
              "Add two packages to an app and resolve a version conflict between them",
              "Extract a networking layer into a local Swift package with its own tests",
              "Audit your dependency tree and remove one package you don't need"
            ],
            "tools": ["Xcode", "Swift Package Manager"],
            "res": [
              ["Swift Package Manager", "https://www.swift.org/documentation/package-manager/"]
            ]
          },
          {
            "t": "Code Signing & Provisioning",
            "d": "Certificates, profiles, and entitlements: the most dreaded — and most learnable — part of iOS.",
            "lv": 3,
            "time": "~1d",
            "tip": "90% of 'it won't run on device' pain is signing. Learn automatic vs manual once and the fear disappears.",
            "learn": [
              "The signing chain: certificates, provisioning profiles, bundle IDs, and entitlements",
              "Automatic vs manual signing: what Xcode does for you and when to take control",
              "Common failures: expired profiles, mismatched bundle IDs, missing entitlements — and their fixes"
            ],
            "do": [
              "Archive an app and validate it for App Store distribution",
              "Switch a project to manual signing and create the profile yourself in the developer portal",
              "Diagnose and fix three deliberately broken signing configurations"
            ],
            "tools": ["Xcode", "Apple Developer Portal"],
            "res": [
              ["Distributing Your App", "https://developer.apple.com/documentation/xcode/distributing-your-app"]
            ]
          },
          {
            "t": "TestFlight & Beta Distribution",
            "d": "Real users before launch: internal testing, external beta review, and crash feedback.",
            "lv": 2,
            "time": "~4h",
            "tip": "External TestFlight builds need a light beta review — submit early, because the queue is real.",
            "learn": [
              "Internal vs external testers: instant distribution vs review-gated public beta",
              "Uploading builds: archiving, build numbers that must always increase, and what reviewers check",
              "Crash reports and feedback: reading TestFlight crashes and acting on tester screenshots"
            ],
            "do": [
              "Upload a build to App Store Connect and distribute it to internal testers",
              "Submit for external beta review with proper test notes and a demo account",
              "Symbolicate and fix a crash from a TestFlight crash report"
            ],
            "tools": ["TestFlight", "App Store Connect"],
            "res": [
              ["TestFlight", "https://developer.apple.com/testflight/"]
            ]
          },
          {
            "t": "App Store Connect & Release",
            "d": "The listing, the review guidelines, and surviving rejection like a professional.",
            "lv": 3,
            "time": "~1d",
            "tip": "Read the Review Guidelines section 4 (design) and 5 (legal) before building — most rejections are predictable.",
            "learn": [
              "The app record: metadata, screenshots, privacy nutrition labels, and age ratings",
              "Review guidelines: the common rejection reasons (crashes, placeholder content, misleading metadata)",
              "Release control: phased releases, version management, and responding to rejection with grace"
            ],
            "do": [
              "Fill out a complete App Store listing: description, keywords, screenshots for all sizes",
              "Write the privacy nutrition label accurately for an app that uses analytics",
              "Submit for review and practice the expedited-review and appeal process on paper"
            ],
            "tools": ["App Store Connect"],
            "res": [
              ["App Store Review Guidelines", "https://developer.apple.com/app-store/review/guidelines/"],
              ["App Store Connect", "https://developer.apple.com/app-store-connect/"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "CI/CD & Fastlane",
            "d": "Automating builds, tests, and uploads so releases stop being scary.",
            "lv": 3,
            "time": "~1d",
            "tip": "Automate the release you already do manually first. CI that mirrors your manual steps is CI you can trust.",
            "learn": [
              "Fastlane: lanes for build, test, screenshots, and TestFlight upload — and Match for team signing",
              "GitHub Actions for iOS: macOS runners, caching derived data, and secrets management",
              "Release trains: versioning strategy, changelogs, and dSYM upload for crash symbolication"
            ],
            "do": [
              "Write a Fastlane lane that runs tests and uploads to TestFlight",
              "Set up a GitHub Actions workflow that builds on every pull request",
              "Configure Match so a second Mac can sign without certificate chaos"
            ],
            "tools": ["Fastlane", "GitHub Actions"],
            "res": [
              ["Fastlane", "https://fastlane.tools/"]
            ],
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
