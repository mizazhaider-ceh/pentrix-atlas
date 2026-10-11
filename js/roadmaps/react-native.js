/* Atlas roadmap data: React Native (react-native)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "react-native",
  "title": "React Native",
  "icon": "📱",
  "color": "#06b6d4",
  "kind": "skill",
  "tagline": "One JavaScript codebase, real native apps on iOS and Android.",
  "desc": "Cross-platform mobile with React Native: core components, navigation, state and data, native modules on the New Architecture, Expo tooling, performance, testing, and shipping to both app stores.",
  "root": {
    "t": "React Native",
    "d": "Build real native iOS and Android apps from one React codebase — from first component to store submission.",
    "children": [
      {
        "t": "Foundations & Setup",
        "d": "What React Native is, how it renders native UI, and getting a working dev environment.",
        "lv": 1,
        "children": [
          {
            "t": "What React Native Is (and Isn't)",
            "d": "JavaScript driving truly native UI components — not a web view in disguise.",
            "lv": 1,
            "time": "~2h",
            "tip": "React Native renders real native views (UIButton, android.view.View), not HTML. That is why it feels native and why CSS tricks from the web do not transfer one-to-one.",
            "learn": [
              "The mental model: your JS describes UI, the native side renders it with platform components",
              "Where RN wins: shared logic/UI, huge hiring pool, OTA updates; where it loses: heavy 3D, ultra-custom platform UI",
              "React Native vs Flutter vs fully native: how to pick for a real project"
            ],
            "do": [
              "Read the React Native architecture overview and sketch the JS-to-native boundary in your own words",
              "List three apps you use daily and guess which could be React Native (check their job postings for confirmation)",
              "Write down when you would NOT choose React Native for a project"
            ],
            "tools": ["React Native"],
            "res": [
              ["React Native: introduction", "https://reactnative.dev/docs/getting-started"],
              ["React Native homepage", "https://reactnative.dev/"]
            ]
          },
          {
            "t": "Prerequisites: Modern JavaScript & React",
            "d": "You cannot learn React Native without React — get the web fundamentals first.",
            "lv": 1,
            "time": "~1w",
            "tip": "Hooks are the whole game: if useState, useEffect, and useMemo feel shaky, every RN screen will feel shaky. Fix React before blaming the framework.",
            "learn": [
              "ES2020+ essentials: modules, destructuring, optional chaining, async/await, array methods",
              "React hooks: useState, useEffect, useMemo, useCallback, custom hooks",
              "TypeScript basics: props typing, because every serious RN codebase is TypeScript now"
            ],
            "do": [
              "Build a small React web app (todo list with localStorage) using only hooks",
              "Convert it to TypeScript and type every component's props",
              "Write one custom hook (e.g. useLocalStorage) and reuse it in two components"
            ],
            "tools": ["JavaScript", "TypeScript", "React"],
            "res": [
              ["React docs: quick start", "https://react.dev/learn"],
              ["TypeScript handbook", "https://www.typescriptlang.org/docs/handbook/intro.html"]
            ]
          },
          {
            "t": "Expo vs Bare Workflow: Choosing Your Path",
            "d": "The single biggest decision: Expo's managed tooling or the raw React Native CLI.",
            "lv": 1,
            "time": "~3h",
            "tip": "Start with Expo. The bare CLI is not more powerful for learning — it is just more configuration. You can eject to bare or use a dev client later without rewriting your app.",
            "learn": [
              "Expo managed workflow: prebuilt native runtime, config plugins, EAS cloud builds",
              "Bare workflow: full Xcode/Android Studio projects, direct native code access",
              "Expo Dev Client: the middle path — custom native code inside Expo's tooling"
            ],
            "do": [
              "Compare the setup steps for Expo vs bare CLI in the official docs and time-box each",
              "Decide which workflow fits a hypothetical app (push notifications? custom Bluetooth SDK?) and justify it",
              "Install Node LTS, watchman (macOS), and the Expo CLI prerequisites"
            ],
            "tools": ["Expo", "React Native CLI", "Node.js"],
            "res": [
              ["Expo: introduction", "https://docs.expo.dev/get-started/introduction/"],
              ["React Native: environment setup", "https://reactnative.dev/docs/set-up-your-environment"]
            ]
          },
          {
            "t": "Your First App: create-expo-app & Dev Client",
            "d": "Scaffold a project, run it on a real device, and understand the project layout.",
            "lv": 1,
            "time": "~2h",
            "tip": "Always test on a real device early — the simulator hides real-world sins like slow networks, small screens, and missing permissions.",
            "learn": [
              "create-expo-app: what each generated file and folder is for",
              "Expo Go vs a development build: what runs where and why Go has limits",
              "The app.json/app.config.js manifest: name, icons, splash, permissions"
            ],
            "do": [
              "Scaffold an app with create-expo-app and run it on your phone via QR code",
              "Change the app name, icon, and splash screen in app.json and reload",
              "Build a development client with EAS and install it on a physical device"
            ],
            "tools": ["Expo", "Expo Go", "EAS"],
            "res": [
              ["Expo: create a project", "https://docs.expo.dev/get-started/create-a-project/"],
              ["Expo: development builds", "https://docs.expo.dev/develop/development-builds/introduction/"]
            ]
          },
          {
            "t": "Metro Bundler & Fast Refresh",
            "d": "The dev server that bundles your JS and the instant-reload loop you will live in.",
            "lv": 1,
            "time": "~2h",
            "tip": "Fast Refresh preserves component state — which is magic until stale state hides your bug. When something behaves impossibly, do a full reload before questioning your sanity.",
            "learn": [
              "Metro: how it bundles modules, resolves imports, and serves the dev bundle",
              "Fast Refresh vs full reload: what state survives each",
              "The in-app developer menu: reload, debug, performance overlay"
            ],
            "do": [
              "Edit a component and watch Fast Refresh update it without losing state",
              "Trigger a full reload from the dev menu and observe what resets",
              "Break an import on purpose and read Metro's red error screen carefully"
            ],
            "tools": ["Metro", "Expo"],
            "res": [
              ["Metro docs", "https://facebook.github.io/metro/"],
              ["Expo: development mode", "https://docs.expo.dev/develop/development-builds/use-development-builds/"]
            ]
          },
          {
            "t": "Debugging: DevTools & Reading Stack Traces",
            "d": "Debug JS on device properly instead of console.log archaeology.",
            "lv": 2,
            "time": "~3h",
            "tip": "The red screen is your friend — read the actual error and the first few stack frames before Googling. Most RN crashes name the exact component and prop at fault.",
            "learn": [
              "React Native DevTools: breakpoints, the element inspector, and network inspection",
              "Hermes stack traces and source maps: mapping minified crashes to your code",
              "Common crash families: undefined is not an object, null renders, native module not found"
            ],
            "do": [
              "Set a breakpoint in a screen component and step through a navigation event",
              "Use the element inspector to find which component renders a misbehaving view",
              "Intentionally cause the three common crashes and fix each from the stack trace alone"
            ],
            "tools": ["React Native DevTools", "Hermes"],
            "res": [
              ["React Native: debugging", "https://reactnative.dev/docs/debugging"],
              ["Hermes", "https://hermesengine.dev/"]
            ]
          }
        ]
      },
      {
        "t": "Core Components & Layout",
        "d": "The native building blocks — views, text, lists, and the Flexbox layout that positions them.",
        "lv": 1,
        "children": [
          {
            "t": "View, Text & the Component Model",
            "d": "View is your div, Text is your span — but both render as real native widgets.",
            "lv": 1,
            "time": "~3h",
            "tip": "All text must live inside a <Text> component — bare strings crash. This is the single most common beginner error and the fix takes ten seconds.",
            "learn": [
              "View: the fundamental container, maps to UIView / android.view.View",
              "Text: nested text with inline styling, text must never be a bare string child",
              "Component composition patterns: small reusable components over giant screens"
            ],
            "do": [
              "Build a profile card using only View and Text with nested styled spans",
              "Extract the card into a reusable component with typed props",
              "Render a list of cards by mapping over an array of data"
            ],
            "tools": ["React Native"],
            "res": [
              ["React Native: core components", "https://reactnative.dev/docs/components-and-apis"],
              ["View", "https://reactnative.dev/docs/view"],
              ["Text", "https://reactnative.dev/docs/text"]
            ]
          },
          {
            "t": "TextInput, Forms & Keyboard Handling",
            "d": "Inputs that behave on real keyboards — focus, validation, and the keyboard-avoiding dance.",
            "lv": 1,
            "time": "~3h",
            "tip": "The keyboard covering your input is not a bug in your code — it is the default. KeyboardAvoidingView (iOS) or android:windowSoftInputMode (Android) is part of every form, not an afterthought.",
            "learn": [
              "TextInput props that matter: keyboardType, secureTextEntry, autoCapitalize, returnKeyType",
              "Controlled inputs, validation state, and showing errors without jank",
              "KeyboardAvoidingView, Keyboard.dismiss, and listening to keyboard events"
            ],
            "do": [
              "Build a login form with email/password, validation messages, and a submit button",
              "Make the form survive the keyboard opening on both iOS and Android",
              "Add a password visibility toggle and test it with a real device keyboard"
            ],
            "tools": ["React Native"],
            "res": [
              ["TextInput", "https://reactnative.dev/docs/textinput"],
              ["KeyboardAvoidingView", "https://reactnative.dev/docs/keyboardavoidingview"]
            ]
          },
          {
            "t": "Images, Icons & Media",
            "d": "Loading local and remote images fast without layout jumps or memory blowups.",
            "lv": 1,
            "time": "~2h",
            "tip": "Remote images need explicit width/height or they collapse to zero size — the most confusing blank-screen bug in RN. Set dimensions or use aspectRatio.",
            "learn": [
              "Image: static resources vs { uri }, resizeMode, and caching behavior",
              "ImageBackground, blur, and progressive loading patterns",
              "Vector icons via @expo/vector-icons instead of shipping PNGs"
            ],
            "do": [
              "Build an avatar list mixing local assets and remote URLs with fixed dimensions",
              "Add a loading placeholder that fades into the loaded image",
              "Replace three PNG icons with vector icons from the Expo icon set"
            ],
            "tools": ["React Native", "expo-image"],
            "res": [
              ["Image", "https://reactnative.dev/docs/image"],
              ["expo-image", "https://docs.expo.dev/versions/latest/sdk/image/"]
            ]
          },
          {
            "t": "Pressable & Touch Feedback",
            "d": "Buttons users can feel: press states, hit areas, and accessibility.",
            "lv": 1,
            "time": "~2h",
            "tip": "Make hitSlop generous — 44x44pt is the minimum comfortable touch target. Tiny buttons are the number one mobile UX sin and the easiest to fix.",
            "learn": [
              "Pressable vs the legacy Touchable*: style-as-function for pressed state",
              "hitSlop, pressRetentionOffset, and disabling during async work",
              "Accessibility: accessibilityLabel, accessibilityRole, and screen reader order"
            ],
            "do": [
              "Build a button component with pressed, disabled, and loading states",
              "Add hitSlop to a small icon button and verify the larger tap area",
              "Turn on VoiceOver/TalkBack and navigate your button with a screen reader"
            ],
            "tools": ["React Native"],
            "res": [
              ["Pressable", "https://reactnative.dev/docs/pressable"],
              ["React Native: accessibility", "https://reactnative.dev/docs/accessibility"]
            ]
          },
          {
            "t": "FlatList & SectionList: Long Lists Done Right",
            "d": "Virtualized lists that stay at 60fps with 10,000 rows — and the config that makes it happen.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never map over big arrays inside a ScrollView. FlatList only renders visible rows; ScrollView renders everything. This single choice decides whether your list scrolls or stutters.",
            "learn": [
              "Virtualization: windowSize, initialNumToRender, maxToRenderPerBatch",
              "keyExtractor done right: stable string keys, never array index",
              "Pull-to-refresh, infinite scroll, empty states, and sticky section headers"
            ],
            "do": [
              "Render 5,000 generated rows with FlatList and measure scroll smoothness",
              "Add pull-to-refresh and infinite pagination with a loading footer",
              "Swap FlatList for Shopify's FlashList and compare performance on a low-end device"
            ],
            "tools": ["React Native", "FlashList"],
            "res": [
              ["FlatList", "https://reactnative.dev/docs/flatlist"],
              ["FlashList", "https://shopify.github.io/flash-list/"]
            ]
          },
          {
            "t": "Styling: StyleSheet, Theming & Utility Styles",
            "d": "Styles that look like CSS but compile to native layout props — plus how teams theme at scale.",
            "lv": 1,
            "time": "~3h",
            "tip": "StyleSheet.create is not just convention — it validates keys at creation and hoists style objects out of render. Inline style objects recreated every render are a real (if small) perf tax.",
            "learn": [
              "StyleSheet API: what transfers from CSS and what does not (no cascade, no selectors)",
              "Theming with context: light/dark mode via color schemes and design tokens",
              "Utility styling with NativeWind (Tailwind) vs component libraries like Tamagui"
            ],
            "do": [
              "Build a theme context with light/dark tokens and apply it across three screens",
              "Rebuild one screen's StyleSheet styles using NativeWind classes",
              "Audit a screen for inline styles and move them into StyleSheet.create"
            ],
            "tools": ["React Native", "NativeWind", "Tamagui"],
            "res": [
              ["React Native: style", "https://reactnative.dev/docs/style"],
              ["NativeWind", "https://www.nativewind.dev/"],
              ["Tamagui", "https://tamagui.dev/"]
            ]
          },
          {
            "t": "Flexbox Layout for Mobile",
            "d": "The one layout system: flexDirection, alignment, and why everything defaults to column.",
            "lv": 1,
            "time": "~4h",
            "tip": "RN defaults to flexDirection: column (unlike web's row-ish block flow). If your layout looks sideways-wrong, check flexDirection before anything else.",
            "learn": [
              "The flexbox subset RN implements: flex, justifyContent, alignItems, alignSelf",
              "Absolute positioning, zIndex, and overlaying elements",
              "Common patterns: centered content, bottom sheets, equal-width rows, sticky footers"
            ],
            "do": [
              "Recreate a music player card layout (artwork, title, controls) with flexbox only",
              "Build a bottom tab bar layout with equal-width tabs and a centered action button",
              "Fix three intentionally broken layouts by reading only the flex properties"
            ],
            "tools": ["React Native"],
            "res": [
              ["React Native: layout with flexbox", "https://reactnative.dev/docs/flexbox"],
              ["Yoga layout engine", "https://www.yogalayout.dev/"]
            ]
          },
          {
            "t": "SafeArea & Platform-Specific Code",
            "d": "Notches, home indicators, and the iOS/Android differences you handle per platform.",
            "lv": 1,
            "time": "~3h",
            "tip": "Use react-native-safe-area-context, not the built-in SafeAreaView — the community package handles insets correctly on both platforms and in modals.",
            "learn": [
              "Safe area insets: notches, status bar, home indicator, and edge-to-edge on Android",
              "Platform module and Platform.select for per-OS behavior and styles",
              ".ios/.android file extensions and .native for shared mobile code"
            ],
            "do": [
              "Wrap your app in SafeAreaProvider and fix a header hidden under the notch",
              "Use Platform.select to give iOS and Android different shadow/elevation styles",
              "Create Button.ios.js and Button.android.js with genuinely different implementations"
            ],
            "tools": ["React Native", "react-native-safe-area-context"],
            "res": [
              ["Platform-specific code", "https://reactnative.dev/docs/platform-specific-code"],
              ["react-native-safe-area-context", "https://github.com/th3rdwave/react-native-safe-area-context"]
            ]
          }
        ]
      },
      {
        "t": "Navigation & Motion",
        "d": "Moving between screens and making the app feel alive with gestures and animation.",
        "lv": 2,
        "children": [
          {
            "t": "React Navigation: Stacks, Tabs & Drawers",
            "d": "The community standard navigator: screen stacks, bottom tabs, and passing params safely.",
            "lv": 2,
            "time": "~4h",
            "tip": "Type your navigation params with TypeScript from day one. Untyped navigation is the source of the most head-scratching 'undefined param' bugs in RN apps.",
            "learn": [
              "Stack, tab, and drawer navigators and how they compose",
              "Passing params, typing routes, and navigating with type safety",
              "Headers, screen options, and nested navigators without losing your mind"
            ],
            "do": [
              "Build an app with bottom tabs, each tab containing its own stack",
              "Pass an item ID from a list screen to a detail screen and type the param",
              "Customize the header per screen (title, buttons, large title on iOS)"
            ],
            "tools": ["React Navigation", "TypeScript"],
            "res": [
              ["React Navigation: getting started", "https://reactnavigation.org/docs/getting-started"],
              ["React Navigation: TypeScript", "https://reactnavigation.org/docs/typescript/"]
            ]
          },
          {
            "t": "Expo Router: File-Based Routing",
            "d": "Screens as files: the Expo-native router with deep linking built in.",
            "lv": 2,
            "time": "~4h",
            "tip": "Expo Router and React Navigation are not rivals — Router is built on Navigation. Pick Router for new Expo apps; learn Navigation's API anyway because Router delegates to it.",
            "learn": [
              "File-based routes: app/index.tsx, dynamic segments, route groups",
              "Layouts: shared _layout files for stacks and tabs",
              "Link component, useRouter, and typed routes"
            ],
            "do": [
              "Convert a React Navigation app to Expo Router with (tabs) groups",
              "Add a dynamic route app/product/[id].tsx and link to it from a list",
              "Protect a route group so unauthenticated users get redirected to login"
            ],
            "tools": ["Expo Router", "Expo"],
            "res": [
              ["Expo Router: introduction", "https://docs.expo.dev/router/introduction/"],
              ["Expo Router: navigation", "https://docs.expo.dev/router/basics/navigation/"]
            ]
          },
          {
            "t": "Deep Linking & Universal Links",
            "d": "URLs that open your app to the right screen — from marketing emails to password resets.",
            "lv": 2,
            "time": "~3h",
            "tip": "Test deep links with a cold start (app killed), not just warm. Half of deep-link bugs only appear when the app launches from scratch and the initial route resolves wrong.",
            "learn": [
              "Custom URL schemes vs universal links (iOS) / app links (Android)",
              "Linking configuration mapping URLs to screens and params",
              "Handling links when the app is closed, backgrounded, or already open"
            ],
            "do": [
              "Configure a myapp:// scheme and open a product screen from the terminal",
              "Set up an associated domain / assetlinks file for verified https links",
              "Handle a password-reset link that lands on a token-prefilled screen"
            ],
            "tools": ["Expo", "React Navigation"],
            "res": [
              ["Expo: deep linking", "https://docs.expo.dev/guides/deep-linking/"],
              ["React Navigation: deep linking", "https://reactnavigation.org/docs/deep-linking/"]
            ]
          },
          {
            "t": "Gestures with Gesture Handler",
            "d": "Swipes, pans, pinches — native-thread gestures that never drop frames.",
            "lv": 2,
            "time": "~4h",
            "tip": "The old PanResponder runs gestures on the JS thread; Gesture Handler runs them natively. For anything beyond a tap, Gesture Handler is not optional — it is the correct tool.",
            "learn": [
              "Gesture objects: Pan, Tap, Pinch, LongPress and simultaneous/withTestOnly composition",
              "GestureDetector and running gesture logic in worklets",
              "Common patterns: swipe-to-dismiss, draggable cards, pull-down sheets"
            ],
            "do": [
              "Build a Tinder-style swipeable card deck with Pan gesture",
              "Implement swipe-to-delete rows in a list",
              "Combine pinch and pan for a zoomable image viewer"
            ],
            "tools": ["react-native-gesture-handler", "Reanimated"],
            "res": [
              ["Gesture Handler docs", "https://docs.swmansion.com/react-native-gesture-handler/"],
              ["Reanimated: gestures", "https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary/"]
            ]
          },
          {
            "t": "Animations with Reanimated",
            "d": "60fps animations driven on the UI thread via worklets — the modern RN animation engine.",
            "lv": 2,
            "time": "~1d",
            "tip": "If your animation touches a shared value, the update function must be a worklet ('use strict' + 'worklet' directive or the Babel plugin). Forgetting this is the classic Reanimated silent failure.",
            "learn": [
              "Shared values and the worklet model: JS code that runs on the UI thread",
              "useAnimatedStyle, withTiming, withSpring, and layout animations",
              "Entering/exiting animations and animating list items"
            ],
            "do": [
              "Animate a box's position and scale with withSpring on a shared value",
              "Build a collapsible accordion with layout animations",
              "Add entering/exiting animations to FlatList rows"
            ],
            "tools": ["react-native-reanimated"],
            "res": [
              ["Reanimated docs", "https://docs.swmansion.com/react-native-reanimated/"],
              ["Reanimated: shared values", "https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#shared-value"]
            ]
          },
          {
            "t": "Modals, Bottom Sheets & Overlays",
            "d": "Presenting content above the current screen without breaking navigation state.",
            "lv": 2,
            "time": "~3h",
            "tip": "The built-in Modal renders above everything but traps you in a separate tree — no shared context gotchas, but also no inherited navigation. Bottom sheet libraries usually fit real designs better.",
            "learn": [
              "The built-in Modal: presentation styles, transparency, and its limitations",
              "@gorhom/bottom-sheet: snap points, gestures, and backdrop handling",
              "Toasts, tooltips, and dropdowns: portal patterns for overlays"
            ],
            "do": [
              "Build a bottom sheet with three snap points and a dimmed backdrop",
              "Present a full-screen modal form and dismiss it with a swipe",
              "Add a global toast system callable from anywhere in the app"
            ],
            "tools": ["React Native", "@gorhom/bottom-sheet"],
            "res": [
              ["Modal", "https://reactnative.dev/docs/modal"],
              ["@gorhom/bottom-sheet", "https://github.com/gorhom/react-native-bottom-sheet"]
            ]
          }
        ]
      },
      {
        "t": "State, Data & Networking",
        "d": "Managing local and server state, talking to APIs, and persisting data on device.",
        "lv": 2,
        "children": [
          {
            "t": "Local State, Context & When They're Enough",
            "d": "useState and Context cover more than you think — learn their limits before adding libraries.",
            "lv": 2,
            "time": "~3h",
            "tip": "Context is not a state manager — it is a dependency injection pipe. Putting frequently-changing values in Context re-renders every consumer on every change. Split contexts or memoize.",
            "learn": [
              "Component state vs lifted state vs context: the decision tree",
              "Context performance pitfalls and how to split providers",
              "useReducer for complex local state machines"
            ],
            "do": [
              "Build a theme + auth context pair with memoized values",
              "Profile a screen that re-renders too often and fix it with context splitting",
              "Implement a multi-step form with useReducer"
            ],
            "tools": ["React"],
            "res": [
              ["React: Context", "https://react.dev/reference/react/useContext"],
              ["React: useReducer", "https://react.dev/reference/react/useReducer"]
            ]
          },
          {
            "t": "Global State: Zustand, Redux Toolkit & Jotai",
            "d": "Pick one global store and learn it deeply — the pattern matters more than the library.",
            "lv": 2,
            "time": "~4h",
            "tip": "Zustand is the pragmatic default in 2026: tiny API, no providers, no boilerplate. Reach for Redux Toolkit only when you need its DevTools time-travel and middleware ecosystem.",
            "learn": [
              "Zustand stores: create, selectors, and subscribing without re-render storms",
              "Redux Toolkit: slices, thunks, and when the extra structure pays off",
              "Atomic state with Jotai: derived atoms and async atoms"
            ],
            "do": [
              "Build a cart store in Zustand with add/remove/persist actions",
              "Add selectors so components only re-render when their slice changes",
              "Migrate one Zustand store to Redux Toolkit and compare the boilerplate honestly"
            ],
            "tools": ["Zustand", "Redux Toolkit", "Jotai"],
            "res": [
              ["Zustand docs", "https://zustand.docs.pmnd.rs/getting-started/introduction"],
              ["Redux Toolkit", "https://redux-toolkit.js.org/"]
            ]
          },
          {
            "t": "Server State with TanStack Query",
            "d": "Stop hand-rolling fetch+useEffect: caching, retries, and background refetch done right.",
            "lv": 2,
            "time": "~4h",
            "tip": "Server state is not client state — do not put API responses in Zustand/Redux. TanStack Query owns fetching, caching, and invalidation; your global store owns UI state.",
            "learn": [
              "useQuery: query keys, staleTime vs gcTime, and background refetching",
              "useMutation with optimistic updates and rollback on error",
              "Infinite queries for pagination and prefetching detail screens"
            ],
            "do": [
              "Fetch a product list with useQuery, add pull-to-refresh via refetch",
              "Implement an optimistic like-button with useMutation and rollback",
              "Build infinite scrolling with useInfiniteQuery on a paginated API"
            ],
            "tools": ["TanStack Query"],
            "res": [
              ["TanStack Query docs", "https://tanstack.com/query/latest"],
              ["TanStack Query: React Native", "https://tanstack.com/query/latest/docs/framework/react/react-native"]
            ]
          },
          {
            "t": "Networking: fetch, REST & API Best Practices",
            "d": "The transport layer: clients, auth headers, timeouts, and error handling that survives bad networks.",
            "lv": 2,
            "time": "~3h",
            "tip": "Mobile networks lie: requests hang, not just fail. Always set timeouts (AbortController) and retry idempotent GETs — your users are on elevators and trains.",
            "learn": [
              "Building a typed API client: base URL, auth token injection, interceptors",
              "Timeouts with AbortController, retries with backoff, and offline queuing basics",
              "Certificate pinning concepts for sensitive apps"
            ],
            "do": [
              "Write a typed fetch wrapper with auth header injection and 10s timeouts",
              "Add exponential-backoff retries for GET requests",
              "Handle 401s globally: refresh the token once, then retry the original request"
            ],
            "tools": ["TypeScript"],
            "res": [
              ["React Native: networking", "https://reactnative.dev/docs/network"],
              ["MDN: fetch", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"]
            ]
          },
          {
            "t": "WebSockets & Realtime Updates",
            "d": "Live data: chat messages, live scores, and presence without polling.",
            "lv": 2,
            "time": "~3h",
            "tip": "Reconnect logic is the feature, not the socket. Apps die on flaky networks — implement exponential backoff reconnect and a visible connection-state UI.",
            "learn": [
              "The WebSocket API in React Native and its lifecycle events",
              "Reconnect strategies, heartbeats, and handling app backgrounding",
              "When to use raw sockets vs services like Pusher/Ably/Supabase Realtime"
            ],
            "do": [
              "Build a minimal chat screen over a public echo WebSocket server",
              "Add auto-reconnect with backoff and a reconnecting banner",
              "Pause the socket when the app backgrounds and resume on foreground"
            ],
            "tools": ["React Native"],
            "res": [
              ["MDN: WebSocket", "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"],
              ["Supabase Realtime", "https://supabase.com/docs/guides/realtime"]
            ]
          },
          {
            "t": "Local Persistence: MMKV & AsyncStorage",
            "d": "Key-value storage that is fast and synchronous — for settings, caches, and tokens.",
            "lv": 2,
            "time": "~3h",
            "tip": "MMKV reads synchronously — no async/await dance, no loading flashes for cached values. It is the modern default; AsyncStorage is legacy for new code.",
            "learn": [
              "MMKV: synchronous reads, encryption support, and multi-instance stores",
              "What belongs in key-value storage vs what needs a real database",
              "Persisting Zustand stores with zustand/middleware persist"
            ],
            "do": [
              "Persist theme preference and onboarding completion in MMKV",
              "Wire MMKV persistence into a Zustand store and verify it survives app restarts",
              "Store a non-sensitive session flag with encryption enabled"
            ],
            "tools": ["react-native-mmkv", "Zustand"],
            "res": [
              ["react-native-mmkv", "https://github.com/mrousavy/react-native-mmkv"],
              ["Zustand: persist", "https://zustand.docs.pmnd.rs/integrations/persisting-store-data"]
            ]
          },
          {
            "t": "On-Device SQL with expo-sqlite",
            "d": "A real relational database in the app for offline-first data that outgrows key-value.",
            "lv": 3,
            "time": "~3h",
            "tip": "Design your schema for sync, not just storage: every table needs updated_at and a sync-status column, or your offline-first dream becomes a merge-conflict nightmare.",
            "learn": [
              "expo-sqlite: opening databases, prepared statements, and transactions",
              "Migrations: versioning schema changes without wiping user data",
              "Offline-first patterns: local writes first, sync queue, conflict resolution"
            ],
            "do": [
              "Create a notes table with CRUD operations and a migration from v1 to v2",
              "Build an offline-capable todo list that queues changes while offline",
              "Benchmark inserting 10k rows in a transaction vs one-by-one"
            ],
            "tools": ["expo-sqlite"],
            "res": [
              ["expo-sqlite", "https://docs.expo.dev/versions/latest/sdk/sqlite/"],
              ["SQLite docs", "https://www.sqlite.org/docs.html"]
            ]
          },
          {
            "t": "Authentication Flows & Secure Storage",
            "d": "Login, token storage, and session handling that does not leak credentials.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never store tokens in AsyncStorage/MMKV unencrypted — use expo-secure-store (Keychain/Keystore). Tokens in plain storage are readable on rooted devices and in backups.",
            "learn": [
              "Auth flow architecture: splash -> auth stack -> app tabs, driven by session state",
              "expo-secure-store: hardware-backed storage for tokens and secrets",
              "Refresh token rotation, biometric unlock, and sign-out that truly clears state"
            ],
            "do": [
              "Build a login flow with a loading splash that restores the session",
              "Store access/refresh tokens in SecureStore and attach them to API calls",
              "Add biometric unlock (FaceID/fingerprint) gating the app after backgrounding"
            ],
            "tools": ["expo-secure-store", "expo-local-authentication"],
            "res": [
              ["expo-secure-store", "https://docs.expo.dev/versions/latest/sdk/securestore/"],
              ["Expo: authentication guide", "https://docs.expo.dev/guides/authentication/"]
            ]
          }
        ]
      },
      {
        "t": "Native Integration & Performance",
        "d": "Going beyond JavaScript: the New Architecture, native modules, and making apps fast.",
        "lv": 3,
        "children": [
          {
            "t": "How the New Architecture Works",
            "d": "Fabric, TurboModules, JSI, and Codegen — the engine under every modern RN app.",
            "lv": 3,
            "time": "~5h",
            "tip": "The legacy bridge is gone (removed in 0.82) — any tutorial mentioning the bridge, MessageQueue, or batchedBridge is legacy material. Learn the New Architecture mental model instead.",
            "learn": [
              "JSI: direct synchronous JS-to-C++ calls replacing the async bridge",
              "Fabric: the concurrent renderer with its C++ shadow tree",
              "TurboModules: lazily-loaded, codegen-typed native modules"
            ],
            "do": [
              "Read the architecture overview and diagram the Fabric render pipeline",
              "Enable the performance monitor and compare JS vs UI thread FPS",
              "Find one bridge-era Stack Overflow answer and translate its advice to the New Architecture"
            ],
            "tools": ["React Native", "Hermes"],
            "res": [
              ["React Native: new architecture", "https://reactnative.dev/docs/new-architecture-intro"],
              ["React Native architecture", "https://reactnative.dev/architecture/overview"]
            ]
          },
          {
            "t": "Writing a Native Module (iOS & Android)",
            "d": "When JS is not enough: expose Swift/Kotlin code to JavaScript with Codegen specs.",
            "lv": 3,
            "time": "~1d",
            "tip": "Write the Codegen spec (the TypeScript interface) first — it generates the native scaffolding and the JS bindings. Hand-writing bindings is how you get subtle type mismatch crashes.",
            "learn": [
              "TurboModule spec files: defining your module's typed interface",
              "iOS: implementing with Swift/Objective-C++; Android: Kotlin/Java",
              "Exposing constants, methods, and events to JavaScript"
            ],
            "do": [
              "Write a spec for a BatteryModule exposing battery level and charging state",
              "Implement it natively for iOS and Android",
              "Call it from JS and handle the case where the module is missing"
            ],
            "tools": ["Xcode", "Android Studio", "React Native"],
            "res": [
              ["React Native: native modules intro", "https://reactnative.dev/docs/native-modules-intro"],
              ["React Native: TurboModules", "https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules"]
            ]
          },
          {
            "t": "Expo Config Plugins",
            "d": "Modify native projects without ejecting: the Expo way to add native SDKs.",
            "lv": 3,
            "time": "~4h",
            "tip": "Config plugins run at prebuild time — they patch the native project, they are not runtime code. Debug them by inspecting the generated ios/ and android/ folders.",
            "learn": [
              "How prebuild generates native projects from app.json + plugins",
              "Writing a plugin: mod functions that edit Info.plist, AndroidManifest, entitlements",
              "Using community plugins vs writing your own"
            ],
            "do": [
              "Add a community config plugin (e.g. for a maps SDK) and prebuild locally",
              "Write a small plugin that adds an iOS Info.plist usage description",
              "Inspect the generated native diff to verify exactly what your plugin changed"
            ],
            "tools": ["Expo", "EAS"],
            "res": [
              ["Expo: config plugins", "https://docs.expo.dev/config-plugins/introduction/"],
              ["Expo: prebuild", "https://docs.expo.dev/workflow/prebuild/"]
            ]
          },
          {
            "t": "Push Notifications (FCM/APNs via Expo)",
            "d": "Getting a notification onto a locked phone: tokens, permissions, and payloads.",
            "lv": 2,
            "time": "~4h",
            "tip": "Push tokens are per-device, per-install — they change. Register the token with your backend on every app start, not just on first login, or notifications silently stop.",
            "learn": [
              "expo-notifications: permissions, push tokens, and presenting notifications",
              "FCM/APNs credentials setup and the Expo push service vs your own server",
              "Handling notification taps: deep linking into the right screen"
            ],
            "do": [
              "Request permissions and log your Expo push token on a dev build",
              "Send a test push via the Expo push tool and handle the tap",
              "Set up notification channels (Android) and categories with action buttons (iOS)"
            ],
            "tools": ["expo-notifications", "EAS"],
            "res": [
              ["Expo: push notifications", "https://docs.expo.dev/push-notifications/overview/"],
              ["expo-notifications", "https://docs.expo.dev/versions/latest/sdk/notifications/"]
            ]
          },
          {
            "t": "Performance Profiling: Finding Real Bottlenecks",
            "d": "Measure first, optimize second — Hermes profiler, DevTools, and Perfetto.",
            "lv": 3,
            "time": "~4h",
            "tip": "Re-renders are the usual suspect but slow JS is the usual culprit: a 200ms synchronous loop on the JS thread drops frames no amount of memoization will fix. Profile before memoizing.",
            "learn": [
              "React Native DevTools performance tab and the Hermes sampling profiler",
              "Systrace/Perfetto for native-side frame analysis",
              "Common fixes: memoization, getItemLayout, removing JS-thread work, Hermes bytecode"
            ],
            "do": [
              "Capture a Hermes CPU profile of a janky interaction and find the hot function",
              "Fix a slow list with getItemLayout and windowSize tuning, measuring before/after",
              "Move heavy computation off the render path and verify with the profiler"
            ],
            "tools": ["React Native DevTools", "Hermes", "Perfetto"],
            "res": [
              ["React Native: performance", "https://reactnative.dev/docs/performance"],
              ["React Native: profiling", "https://reactnative.dev/docs/profiling"]
            ]
          },
          {
            "t": "Startup Time & Bundle Size Optimization",
            "d": "Cold start under 2 seconds: lazy native modules, Hermes bytecode, and trimming the bundle.",
            "lv": 3,
            "time": "~4h",
            "tip": "Your biggest startup win is usually deleting a heavy import at the top of your entry file. Audit with a bundle analyzer — one analytics SDK can cost 500ms of startup.",
            "learn": [
              "What happens during cold start: native init, JS bundle load, first render",
              "Hermes bytecode bundles: precompiled JS that skips parse time",
              "Bundle analysis, lazy requires, and trimming unused native dependencies"
            ],
            "do": [
              "Measure your app's cold start with the performance monitor",
              "Analyze the bundle, find the three heaviest imports, and lazy-load one",
              "Compare startup time between a JSC-style JS bundle and a Hermes bytecode bundle"
            ],
            "tools": ["Hermes", "Metro"],
            "res": [
              ["React Native: Hermes", "https://reactnative.dev/docs/hermes"],
              ["React Native: performance overview", "https://reactnative.dev/docs/performance"]
            ]
          },
          {
            "t": "Over-the-Air Updates with EAS Update",
            "d": "Ship JS fixes without store review — and know exactly when you cannot.",
            "lv": 2,
            "time": "~3h",
            "tip": "OTA updates can only change JavaScript — any native change (new SDK, permission, config plugin) needs a new build. Ship native changes and OTA updates on separate tracks.",
            "learn": [
              "How EAS Update works: update bundles, channels, and runtime versions",
              "Runtime version policy: matching updates to compatible native builds",
              "Rollouts, rollbacks, and what Apple allows OTA to change"
            ],
            "do": [
              "Publish an OTA update that changes copy and styling, and verify it lands",
              "Set up staging and production channels with different runtime versions",
              "Roll back a bad update from the EAS dashboard"
            ],
            "tools": ["EAS Update", "Expo"],
            "res": [
              ["EAS Update: introduction", "https://docs.expo.dev/eas-update/introduction/"],
              ["EAS Update: runtime versions", "https://docs.expo.dev/eas-update/runtime-versions/"]
            ]
          }
        ]
      },
      {
        "t": "Testing & Shipping",
        "d": "Proving the app works and getting it into users' hands on both stores.",
        "lv": 2,
        "children": [
          {
            "t": "Unit Testing with Jest",
            "d": "Test your logic, hooks, and utilities — the cheapest confidence you can buy.",
            "lv": 2,
            "time": "~3h",
            "tip": "Mock at the boundary (network, storage, native modules), not in the middle. Tests that mock your own functions just test your mocks.",
            "learn": [
              "Jest with the React Native preset: config, transforms, and timers",
              "Testing pure functions, formatters, and custom hooks with renderHook",
              "Mocking native modules and timers without flakiness"
            ],
            "do": [
              "Write tests for your API client's retry and timeout logic with fake timers",
              "Test a custom hook's state transitions with renderHook",
              "Mock expo-secure-store and verify your auth flow's token handling"
            ],
            "tools": ["Jest"],
            "res": [
              ["Jest docs", "https://jestjs.io/docs/getting-started"],
              ["React Native: testing", "https://reactnative.dev/docs/testing-overview"]
            ]
          },
          {
            "t": "Component Testing with RNTL",
            "d": "Render screens, fire events, assert what the user sees — not implementation details.",
            "lv": 2,
            "time": "~4h",
            "tip": "Query by accessibility role and text, the way a user perceives the screen — never by testID unless nothing else works. Tests written this way survive refactors.",
            "learn": [
              "React Native Testing Library: render, fireEvent, and user-event",
              "Testing navigation flows and async loading states",
              "What NOT to test: implementation details, third-party components"
            ],
            "do": [
              "Test a login form: fill inputs, submit, assert the loading then success state",
              "Test that an error message appears when the API mock rejects",
              "Wrap tests in your app's providers (theme, query client) via a custom render"
            ],
            "tools": ["React Native Testing Library", "Jest"],
            "res": [
              ["RNTL docs", "https://callstack.github.io/react-native-testing-library/"],
              ["RNTL: queries", "https://callstack.github.io/react-native-testing-library/docs/api/queries"]
            ]
          },
          {
            "t": "E2E Testing: Maestro & Detox",
            "d": "Drive the real app on a real device: taps, assertions, and CI-ready flows.",
            "lv": 3,
            "time": "~1d",
            "tip": "Maestro's YAML flows are dramatically easier to maintain than Detox's gray-box tests for most teams. Start with Maestro; reach for Detox only when you need its synchronization depth.",
            "learn": [
              "Maestro: YAML flows, element selectors, and running on devices/emulators",
              "Detox: gray-box synchronization and when it beats black-box testing",
              "Flakiness discipline: idling resources, retries, and deterministic test data"
            ],
            "do": [
              "Write a Maestro flow: launch, log in, add item to cart, assert checkout",
              "Run the flow on both iOS simulator and Android emulator",
              "Seed deterministic test data so the flow passes on a fresh install every time"
            ],
            "tools": ["Maestro", "Detox"],
            "res": [
              ["Maestro", "https://maestro.mobile.dev/"],
              ["Detox", "https://wix.github.io/Detox/"]
            ]
          },
          {
            "t": "EAS Build: Cloud Builds for iOS & Android",
            "d": "Build signed binaries without owning a Mac — profiles, credentials, and build flavors.",
            "lv": 2,
            "time": "~4h",
            "tip": "iOS builds need Apple credentials and can fail on provisioning long after the code compiles. Let EAS manage credentials automatically unless you have a reason not to.",
            "learn": [
              "Build profiles: development, preview, production in eas.json",
              "Credentials: distribution certificates, provisioning profiles, keystores",
              "Build flavors: environment variables and per-channel configuration"
            ],
            "do": [
              "Configure development, preview, and production profiles in eas.json",
              "Run a preview build and install it on a test device",
              "Set up environment-specific API URLs per build profile"
            ],
            "tools": ["EAS Build", "Expo"],
            "res": [
              ["EAS Build: introduction", "https://docs.expo.dev/build/introduction/"],
              ["EAS: build profiles", "https://docs.expo.dev/build/eas-json/"]
            ]
          },
          {
            "t": "App Store & Play Store Submission",
            "d": "Metadata, screenshots, review guidelines, and surviving Apple's review queue.",
            "lv": 3,
            "time": "~1d",
            "tip": "Apple rejects for the boring stuff: placeholder text, broken demo accounts, missing privacy info. Provide a working demo login and complete the privacy nutrition label before submitting.",
            "learn": [
              "Store listings: screenshots, descriptions, categories, and privacy labels",
              "EAS Submit: automating uploads to App Store Connect and Play Console",
              "Review guidelines: common rejection reasons and how to avoid them",
              "Staged rollouts and phased releases on Android"
            ],
            "do": [
              "Prepare full store assets: icons, screenshots for required sizes, descriptions",
              "Submit a build with EAS Submit to TestFlight / internal testing track",
              "Fill in the data safety / privacy nutrition labels accurately"
            ],
            "tools": ["EAS Submit", "App Store Connect", "Google Play Console"],
            "res": [
              ["EAS Submit", "https://docs.expo.dev/submit/introduction/"],
              ["Apple: app review guidelines", "https://developer.apple.com/app-store/review/guidelines/"]
            ]
          },
          {
            "t": "Mobile App Security Checklist",
            "d": "The OWASP MASVS basics every shipped app needs: storage, transport, and tamper resistance.",
            "lv": 3,
            "time": "~4h",
            "tip": "Your JS bundle is readable by anyone who downloads the app — Hermes bytecode slows attackers down but is not encryption. Never ship API secrets or private keys in the bundle.",
            "learn": [
              "Secure storage: Keychain/Keystore via SecureStore, never plaintext tokens",
              "Transport security: TLS, certificate pinning for high-value apps",
              "Tamper detection: jailbreak/root detection, obfuscation, and integrity checks",
              "OWASP MASVS levels: what L1/L2 actually require of your app"
            ],
            "do": [
              "Audit your app for secrets in the JS bundle and move them server-side",
              "Add jailbreak/root detection that degrades gracefully (warn, don't just crash)",
              "Walk the OWASP MASVS L1 checklist against your own app and fix the gaps"
            ],
            "tools": ["expo-secure-store"],
            "res": [
              ["OWASP MASVS", "https://mas.owasp.org/MASVS/"],
              ["OWASP Mobile Top 10", "https://owasp.org/www-project-mobile-top-10/"]
            ]
          },
          {
            "t": "CI/CD: EAS + GitHub Actions Pipelines",
            "d": "Every push builds, tests, and ships preview builds automatically.",
            "lv": 3,
            "time": "~4h",
            "tip": "Cache aggressively: node_modules, Gradle, and CocoaPods caches turn a 40-minute pipeline into 12 minutes. Uncached mobile CI is where developer patience goes to die.",
            "learn": [
              "GitHub Actions workflows: lint, typecheck, Jest, and EAS builds on PR",
              "Preview builds per PR with QR codes for reviewers",
              "Auto-submission to TestFlight/internal track on main branch merges"
            ],
            "do": [
              "Add a workflow that runs lint, tsc, and Jest on every PR",
              "Trigger an EAS preview build on PRs and post the QR code as a comment",
              "Auto-submit main-branch builds to TestFlight on release tags"
            ],
            "tools": ["GitHub Actions", "EAS"],
            "res": [
              ["EAS: GitHub Actions", "https://docs.expo.dev/build/building-on-ci/"],
              ["GitHub Actions docs", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Capstone: Ship a Production-Ready App",
            "d": "Put it all together: a complete app from scaffold to store submission.",
            "lv": 3,
            "time": "~2w",
            "tip": "Scope ruthlessly: one user, one core flow, done well. Capstones die from feature creep, not from technical difficulty.",
            "learn": [
              "Scoping a shippable MVP: auth, one core flow, offline handling, polish",
              "Applying the full pipeline: tests, EAS builds, OTA updates, store submission",
              "Post-launch: crash reporting with Sentry and analytics basics"
            ],
            "do": [
              "Build a complete app (e.g. habit tracker with auth, sync, and reminders)",
              "Add Jest + RNTL tests for the critical flows and one Maestro E2E flow",
              "Ship it: EAS production build, TestFlight/internal track, and a store listing draft"
            ],
            "tools": ["Expo", "EAS", "Sentry", "Maestro"],
            "res": [
              ["Expo: app distribution", "https://docs.expo.dev/distribution/introduction/"],
              ["Sentry: React Native", "https://docs.sentry.io/platforms/react-native/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
