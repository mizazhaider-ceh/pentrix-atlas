/* Atlas roadmap data: Frontend Performance (frontend-performance) */
ROADMAPS.push({
  "id": "frontend-performance",
  "title": "Frontend Performance",
  "icon": "💨",
  "color": "#bae6fd",
  "desc": "Make pages feel instant: Core Web Vitals, ruthless bundles, fast rendering, optimized media, and real-user monitoring.",
  "kind": "practice",
  "root": {
    "t": "Frontend Performance",
    "d": "From Lighthouse red to users saying 'wow, that's fast'.",
    "children": [
      {
        "t": "Measuring Web Performance",
        "d": "Numbers before opinions: lab tests lie a little, field data tells the truth.",
        "lv": 1,
        "children": [
          {
            "t": "Lab Data vs Field Data",
            "d": "Your MacBook is not your user. Learn what each measurement actually tells you.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Lab data (Lighthouse): reproducible, debuggable, but one device on one network",
              "Field data (CrUX/RUM): the 75th percentile of real visits decides your Core Web Vitals grade",
              "When to use which: lab for diagnosing, field for judging"
            ],
            "do": [
              "Run Lighthouse on a page, then compare with its PageSpeed Insights field data",
              "Find one metric where lab and field disagree and explain why",
              "Look up any site's CrUX data in PageSpeed Insights"
            ],
            "tools": ["Lighthouse", "PageSpeed Insights", "CrUX"],
            "res": [
              ["PageSpeed Insights", "https://pagespeed.web.dev/"],
              ["Chrome UX Report docs", "https://developer.chrome.com/docs/crux/"]
            ],
            "tip": "A perfect Lighthouse score with failing field data means you optimized the test, not the experience. Field data is the grade."
          },
          {
            "t": "Lighthouse and DevTools Audits",
            "d": "Your first profiling tools are already in the browser.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Lighthouse categories: Performance score is weighted; the diagnostics matter more than the number",
              "The Performance panel: recording, reading the flame chart, finding long tasks",
              "Throttling honestly: Moto G4 + 4G is the default for a reason"
            ],
            "do": [
              "Audit a slow page and list the top 3 opportunities by estimated savings",
              "Record a Performance trace of a page load and identify the longest task",
              "Re-run with mobile throttling and compare the scores"
            ],
            "tools": ["Chrome DevTools", "Lighthouse"],
            "res": [
              ["Lighthouse docs", "https://developer.chrome.com/docs/lighthouse/"],
              ["Chrome DevTools Performance", "https://developer.chrome.com/docs/devtools/performance/"]
            ],
            "tip": "Chasing the score instead of the diagnostics is the classic mistake. A 100 with a janky interaction still fails INP in the field."
          },
          {
            "t": "The web-vitals Library",
            "d": "Measure what real users feel, from real users, in production.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What the library measures: LCP, INP, CLS (and friends) exactly as Chrome defines them",
              "Attribution builds: not just the score, but which element or interaction caused it",
              "Sending data: beaconing vitals to your analytics without hurting performance"
            ],
            "do": [
              "Add the web-vitals script to a site and log LCP/INP/CLS to the console",
              "Use the attribution build to identify which element caused a bad LCP",
              "Send one vital to an analytics endpoint with sendBeacon"
            ],
            "tools": ["web-vitals", "Google Analytics"],
            "res": [
              ["web-vitals on GitHub", "https://github.com/GoogleChrome/web-vitals"],
              ["Web Vitals docs", "https://web.dev/vitals/"]
            ],
            "tip": "Logging vitals without attribution is half the value. Knowing INP is 400ms is trivia; knowing which button caused it is a fix."
          },
          {
            "t": "Reading a Waterfall Chart",
            "d": "Every slow page tells its story in the network waterfall. Learn to read it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Anatomy: DNS, connect, TLS, TTFB, download, and what long bars mean in each phase",
              "Dependency chains: the critical path of resources that block rendering",
              "Common smells: late-discovered hero images, render-blocking chains, waterfall cliffs"
            ],
            "do": [
              "Open the Network panel on a slow page and screenshot the waterfall",
              "Trace the critical path from HTML to LCP element",
              "Name the single resource you would fix first and why"
            ],
            "tools": ["Chrome DevTools", "WebPageTest"],
            "res": [
              ["WebPageTest", "https://www.webpagetest.org/"],
              ["MDN: understanding the waterfall", "https://developer.mozilla.org/en-US/docs/Web/Performance"]
            ],
            "tip": "Start from the LCP element and work backwards. The waterfall is huge; the critical path is the only part that matters first."
          },
          {
            "t": "Performance Budgets",
            "d": "Decide how fast is fast enough, then make the build enforce it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Budget types: total JS bytes, image weight, LCP time, third-party count",
              "Enforcement: bundlesize/lighthouse-ci failing PRs that blow the budget",
              "Negotiating budgets: every new dependency spends from a shared allowance"
            ],
            "do": [
              "Set a JS budget (e.g. 170KB gzipped) for a project",
              "Add bundlesize or Lighthouse CI to fail PRs over budget",
              "Audit one existing dependency against the budget and justify keeping it"
            ],
            "tools": ["Lighthouse CI", "bundlesize", "Webpack Bundle Analyzer"],
            "res": [
              ["Lighthouse CI", "https://github.com/GoogleChrome/lighthouse-ci"],
              ["Performance budgets 101", "https://web.dev/performance-budgets-101/"]
            ],
            "tip": "A budget nobody enforces is a suggestion. Wire it into CI or watch it evaporate by the third sprint."
          }
        ]
      },
      {
        "t": "Core Web Vitals: LCP",
        "d": "Largest Contentful Paint: how fast the main content shows up.",
        "lv": 1,
        "children": [
          {
            "t": "What Is LCP",
            "d": "The moment the biggest visible thing appears. Under 2.5 seconds is good.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What counts: usually the hero image or largest text block in the viewport",
              "The 75th percentile rule: your slowest quarter of real visits decides pass/fail",
              "LCP sub-parts: TTFB, resource load delay, resource load time, render delay"
            ],
            "do": [
              "Identify the LCP element on 3 different pages using DevTools",
              "Break one page's LCP into the 4 sub-parts and find the biggest",
              "Check any site's LCP field data in PageSpeed Insights"
            ],
            "tools": ["Chrome DevTools", "PageSpeed Insights"],
            "res": [
              ["web.dev: LCP", "https://web.dev/articles/lcp"],
              ["Optimize LCP", "https://web.dev/articles/optimize-lcp"]
            ],
            "tip": "Most LCP problems are discovery problems: the browser finds the hero image too late. Fix discovery before anything else."
          },
          {
            "t": "TTFB: The Hidden LCP Killer",
            "d": "Slow server responses poison every metric downstream. LCP cannot beat TTFB.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "TTFB anatomy: DNS, connection, and server thinking time (the part you control)",
              "Server-side wins: caching HTML, faster queries, edge rendering",
              "Why TTFB matters more than people think: it delays literally everything"
            ],
            "do": [
              "Measure TTFB for a page and split it into network vs server time",
              "Cache one slow server response and measure the TTFB delta",
              "Set a TTFB budget (aim under 800ms, ideally under 200ms)"
            ],
            "tools": ["curl", "WebPageTest", "Cloudflare"],
            "res": [
              ["Optimize TTFB", "https://web.dev/articles/optimize-ttfb"],
              ["WebPageTest", "https://www.webpagetest.org/"]
            ],
            "tip": "No frontend trick beats a slow TTFB. If the server takes 2 seconds to think, your LCP starts at 2 seconds."
          },
          {
            "t": "Preloading and fetchpriority",
            "d": "Tell the browser what matters before it figures it out itself.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Preload: fetching the hero image/font early in <head> instead of late discovery",
              "fetchpriority='high': boosting the LCP image in the browser's priority queue",
              "Preconnect/dns-prefetch: warming up connections to third-party origins"
            ],
            "do": [
              "Add preload for an LCP image and measure the LCP improvement",
              "Set fetchpriority='high' on the hero image and 'low' on below-fold images",
              "Audit preloads: remove any that fetch unused resources (wasted bytes)"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["Preload critical assets", "https://web.dev/articles/preload-critical-assets"],
              ["Fetch priority", "https://web.dev/articles/fetch-priority"]
            ],
            "tip": "Preloading everything is preloading nothing. Each preload competes for bandwidth; reserve them for the true LCP element."
          },
          {
            "t": "The Critical Rendering Path",
            "d": "HTML, CSS, JS: the exact sequence the browser follows to paint your page.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The path: parse HTML, build DOM + CSSOM, render tree, layout, paint, composite",
              "Render-blocking resources: CSS and sync JS that pause everything",
              "Optimizations: inline critical CSS, defer non-critical JS, async/defer correctly"
            ],
            "do": [
              "Draw the critical rendering path of one of your pages from a trace",
              "Inline critical CSS and defer the rest; measure FCP/LCP",
              "Convert one render-blocking script to async or defer and verify nothing breaks"
            ],
            "tools": ["Chrome DevTools", "Critical CSS extractors"],
            "res": [
              ["Critical rendering path", "https://web.dev/articles/critical-rendering-path"],
              ["Render-blocking resources", "https://web.dev/articles/render-blocking-resources"]
            ],
            "tip": "async and defer are not interchangeable. async runs whenever it lands (order chaos); defer preserves order after parsing."
          }
        ]
      },
      {
        "t": "Core Web Vitals: INP",
        "d": "Interaction to Next Paint: does the page feel responsive when touched? Under 200ms is good.",
        "lv": 2,
        "children": [
          {
            "t": "What Is INP",
            "d": "Every click, tap, and keypress measured; the worst one is your score.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "INP vs the old FID: FID measured only the first input's delay; INP measures all interactions' full duration",
              "The three phases: input delay, processing time, presentation delay",
              "Why INP is the most-failed vital: you cannot game a single good first impression"
            ],
            "do": [
              "Measure INP on a page with heavy interactions using the web-vitals attribution build",
              "Identify which interaction scores worst and which phase dominates",
              "Compare INP on desktop vs a mid-range phone"
            ],
            "tools": ["web-vitals", "Chrome DevTools"],
            "res": [
              ["web.dev: INP", "https://web.dev/articles/inp"],
              ["Optimize INP", "https://web.dev/articles/optimize-inp"]
            ],
            "tip": "INP punishes the worst interaction, not the average. One heavy dropdown can fail an otherwise snappy page."
          },
          {
            "t": "Long Tasks and the Main Thread",
            "d": "The main thread does everything. A 500ms task freezes the whole page.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "What runs on the main thread: JS, style, layout, paint, and handling your clicks",
              "Long tasks (>50ms): how to find them in a Performance trace",
              "Common culprits: huge JSON parsing, unvirtualized lists, third-party scripts, hydration"
            ],
            "do": [
              "Record an interaction trace and find every task over 50ms",
              "Attribute the worst long task to a specific function or library",
              "Reduce one long task below 50ms and re-measure INP"
            ],
            "tools": ["Chrome DevTools Performance panel", "Long Tasks API"],
            "res": [
              ["Optimize long tasks", "https://web.dev/articles/optimize-long-tasks"],
              ["Long Tasks API", "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming"]
            ],
            "tip": "Total Blocking Time in Lighthouse is the lab proxy for INP problems. If TBT is high, your field INP is probably failing too."
          },
          {
            "t": "Breaking Up Work: Yielding and Web Workers",
            "d": "Give the main thread breathing room: chunk work, yield often, offload heavy lifting.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Yielding to the main thread: scheduler.yield() and setTimeout chunking patterns",
              "Web Workers: moving sorting, filtering, and crypto off the UI thread",
              "Debouncing vs throttling vs yielding: which tool for which interaction"
            ],
            "do": [
              "Chunk a heavy list render with scheduler.yield() and measure INP",
              "Move one expensive computation (search, sort) into a Web Worker",
              "Debounce a search input and compare interaction traces before/after"
            ],
            "tools": ["Web Workers", "Comlink", "scheduler.yield"],
            "res": [
              ["scheduler.yield", "https://developer.chrome.com/docs/web-platform/scheduler-yield"],
              ["Web Workers", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"]
            ],
            "tip": "Yielding does not make work faster; it makes the page responsive while work happens. Users feel responsiveness, not throughput."
          },
          {
            "t": "Framework Rendering Costs",
            "d": "Reactivity is not free. Know what your framework does on every keystroke.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Re-render mechanics: virtual DOM diffing vs fine-grained reactivity vs signals",
              "Death by a thousand updates: lists re-rendering, context cascades, effect storms",
              "Memoization done right: memo/useMemo where it matters, not as decoration"
            ],
            "do": [
              "Profile a React interaction with the Profiler and find wasted renders",
              "Fix one cascade with memoization or state colocation and measure",
              "Compare signal-based vs VDOM update cost on a synthetic benchmark"
            ],
            "tools": ["React DevTools Profiler", "Solid", "Svelte"],
            "res": [
              ["React Profiler", "https://react.dev/reference/react/Profiler"],
              ["web.dev: rendering performance", "https://web.dev/articles/rendering-performance"]
            ],
            "tip": "Sprinkling useMemo everywhere is cargo culting. Profile first; most memoization 'fixes' just add comparison overhead."
          }
        ]
      },
      {
        "t": "Core Web Vitals: CLS",
        "d": "Cumulative Layout Shift: stop the page from jumping under the user's finger. Under 0.1 is good.",
        "lv": 1,
        "children": [
          {
            "t": "What Is CLS",
            "d": "Layout shift score = how far things moved x how much of the screen they covered.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How CLS is calculated: impact fraction x distance fraction, summed per session window",
              "Common offenders: images without dimensions, late ads, injected banners, web fonts",
              "The Layout Shift Regions view in DevTools: seeing exactly what moved"
            ],
            "do": [
              "Find the CLS score of a page and identify the shifting elements in DevTools",
              "Reproduce one shift by throttling the network and watching the load",
              "Fix it and verify CLS drops in a re-run"
            ],
            "tools": ["Chrome DevTools", "web-vitals"],
            "res": [
              ["web.dev: CLS", "https://web.dev/articles/cls"],
              ["Optimize CLS", "https://web.dev/articles/optimize-cls"]
            ],
            "tip": "CLS is measured for the whole page lifetime, not just load. A late-loading widget that shoves content down counts too."
          },
          {
            "t": "Fonts Without the Shift",
            "d": "Web fonts cause flashes and jumps. Ship text that stays put.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "FOUT vs FOIT: flash of unstyled text vs invisible text, and why both annoy",
              "font-display: swap vs optional, and what each guarantees",
              "Metric overrides: size-adjust/ascent-override to make fallback fonts match"
            ],
            "do": [
              "Set font-display: swap on a page and observe the swap in slow motion",
              "Add size-adjust overrides so the fallback font matches metrics",
              "Preload the critical font file and measure the difference"
            ],
            "tools": ["Google Fonts", "fontsource"],
            "res": [
              ["font-display", "https://web.dev/articles/font-display"],
              ["Fontsource", "https://fontsource.org/"]
            ],
            "tip": "Self-hosting fonts beats Google Fonts for performance: one less connection, full control over display and subsetting."
          },
          {
            "t": "Reserving Space for Dynamic Content",
            "d": "If content arrives late, its parking spot should already exist.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "aspect-ratio and explicit width/height: space reserved before bytes arrive",
              "Skeleton screens: placeholders that match final layout, not spinners",
              "Never insert above existing content: banners and cookie bars done wrong"
            ],
            "do": [
              "Add width/height or aspect-ratio to every image on a page",
              "Build a skeleton loader that matches the real layout pixel-close",
              "Fix one banner/ad slot with a reserved min-height container"
            ],
            "tools": ["CSS aspect-ratio", "Chrome DevTools"],
            "res": [
              ["Optimize CLS", "https://web.dev/articles/optimize-cls"],
              ["aspect-ratio (MDN)", "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"]
            ],
            "tip": "A skeleton that does not match the final layout is just a prettier layout shift. Measure the placeholder against reality."
          }
        ]
      },
      {
        "t": "Bundles and Code Delivery",
        "d": "Less JavaScript shipped, split smarter, parsed faster.",
        "lv": 2,
        "children": [
          {
            "t": "How Bundlers Work",
            "d": "Modules in, optimized bundles out: the pipeline every framework hides from you.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The pipeline: resolve modules, build the graph, transform, bundle, minify",
              "Why bundlers exist: HTTP/1 limits, dead code, and the module-format zoo",
              "Modern landscape: Vite/esbuild for dev speed, Rollup/Webpack for production builds"
            ],
            "do": [
              "Build the same app with Vite and compare dev vs production output",
              "Inspect a production bundle: find the runtime, your code, and vendor chunks",
              "Toggle minification off once to see what it actually removes"
            ],
            "tools": ["Vite", "esbuild", "Rollup", "Webpack"],
            "res": [
              ["Vite guide", "https://vite.dev/guide/"],
              ["esbuild", "https://esbuild.github.io/"]
            ],
            "tip": "Dev-mode performance means nothing. Always measure the production build; dev bundles are deliberately unoptimized."
          },
          {
            "t": "Code Splitting and Dynamic Imports",
            "d": "Do not ship the admin panel to someone visiting the homepage.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Route-based splitting: each page loads only its own code",
              "Component-based splitting: lazy modals, charts, and editors via dynamic import()",
              "Prefetching vs preloading split chunks: loading the next route before the click"
            ],
            "do": [
              "Convert 3 routes to lazy-loaded chunks and verify in the network panel",
              "Lazy-load one heavy component (chart, editor) behind a dynamic import",
              "Add prefetch for the most likely next route and measure navigation time"
            ],
            "tools": ["React.lazy", "Next.js dynamic", "Vite"],
            "res": [
              ["Webpack code splitting", "https://webpack.js.org/guides/code-splitting/"],
              ["Next.js dynamic imports", "https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading"]
            ],
            "tip": "Splitting too aggressively creates waterfall chains of tiny chunks. Split at route and heavy-component boundaries, not per file."
          },
          {
            "t": "Tree Shaking and Dead Code",
            "d": "Importing all of lodash for one debounce is a 70KB crime.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "How tree shaking works: static ESM imports let bundlers drop unused exports",
              "What breaks it: CommonJS, side effects, and barrel files re-exporting everything",
              "Finding the waste: bundle analyzers showing which library costs what"
            ],
            "do": [
              "Analyze your bundle and find the 3 heaviest dependencies",
              "Replace one full-library import with a deep or ESM-native import",
              "Check package.json sideEffects flags on your own library code"
            ],
            "tools": ["Webpack Bundle Analyzer", "rollup-plugin-visualizer", "source-map-explorer"],
            "res": [
              ["Webpack Bundle Analyzer", "https://github.com/webpack-contrib/webpack-bundle-analyzer"],
              ["Tree shaking guide", "https://webpack.js.org/guides/tree-shaking/"]
            ],
            "tip": "Barrel files (index.ts re-exporting 200 modules) defeat tree shaking in practice. Import from the source module directly."
          },
          {
            "t": "Third-Party Scripts",
            "d": "Analytics, chat widgets, and tag managers: the performance tax you did not write.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The real cost: main-thread execution and network contention, not just bytes",
              "Loading strategies: async/defer, facades (lite embeds), and web workers (Partytown)",
              "Governance: auditing tags quarterly, because marketing adds them and nobody removes them"
            ],
            "do": [
              "Audit every third-party script on a page with Lighthouse's third-party summary",
              "Convert one heavy embed (video, chat) to a click-to-load facade",
              "Remove or defer one tag and measure the TBT/INP delta"
            ],
            "tools": ["Lighthouse", "Partytown", "Google Tag Manager"],
            "res": [
              ["Third-party performance", "https://web.dev/articles/third-party-performance"],
              ["Partytown", "https://partytown.qwik.dev/"]
            ],
            "tip": "Facades are the highest-ROI third-party fix: a static thumbnail that loads the real widget on click saves seconds of main-thread time."
          },
          {
            "t": "Modern Build Pipelines",
            "d": "What 2026 builds look like: fast transforms, smart chunks, and edge-ready output.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Rust/Go-based tooling: why esbuild, SWC, and Turbopack transformed build times",
              "Chunking strategies: vendor splitting, framework chunks, and long-term caching with content hashes",
              "The no-build frontier: native ESM, import maps, and when skipping the bundler makes sense"
            ],
            "do": [
              "Benchmark your build with two different bundlers and compare times",
              "Configure content-hashed filenames and verify long-term caching works",
              "Set up module preloading for critical chunks"
            ],
            "tools": ["Turbopack", "SWC", "esbuild", "Rolldown"],
            "res": [
              ["Turbopack", "https://turbo.build/pack"],
              ["SWC", "https://swc.rs/"]
            ],
            "tip": "Content hashes are what make aggressive caching safe. Without them, 'cache everything for a year' is a recipe for stale bugs."
          }
        ]
      },
      {
        "t": "Images and Media",
        "d": "Images are usually the heaviest thing on the page. Treat them like it.",
        "lv": 1,
        "children": [
          {
            "t": "Modern Image Formats",
            "d": "AVIF and WebP do the same job as JPEG in a fraction of the bytes.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Format comparison: AVIF smallest, WebP widely supported, JPEG/PNG as fallbacks",
              "Quality settings: visually lossless is not the same as quality 100",
              "The <picture> element and format negotiation: serving the best each browser supports"
            ],
            "do": [
              "Convert 5 images to AVIF/WebP and compare sizes at equal visual quality",
              "Serve them with <picture> fallbacks and verify in two browsers",
              "Set a team rule: no JPEG/PNG uploads without a modern-format version"
            ],
            "tools": ["Squoosh", "Sharp", "next/image"],
            "res": [
              ["Squoosh", "https://squoosh.app/"],
              ["Serve images in modern formats", "https://web.dev/articles/serve-images-in-nextgen-formats"]
            ],
            "tip": "AVIF encodes slowly, so generate at build time, not on request. Slow encoding + on-demand = timeout roulette."
          },
          {
            "t": "Responsive Images",
            "d": "Serving a huge desktop image to a small phone screen is pure waste.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "srcset and sizes: letting the browser pick the right resolution",
              "Art direction vs resolution switching: <picture> for different crops",
              "Density descriptors: 1x/2x/3x and when they matter"
            ],
            "do": [
              "Generate 4 widths of one image and wire up srcset + sizes",
              "Verify in DevTools that a phone gets the small file and a desktop the large one",
              "Audit a page for images served larger than their display size"
            ],
            "tools": ["Sharp", "next/image", "Cloudinary"],
            "res": [
              ["Responsive images (MDN)", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
              ["Next.js Image", "https://nextjs.org/docs/app/api-reference/components/image"]
            ],
            "tip": "sizes is the attribute everyone gets wrong. If it lies about the rendered width, the browser picks the wrong file."
          },
          {
            "t": "Lazy Loading and Priority",
            "d": "Load what is visible now; defer everything else; prioritize the hero.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "loading='lazy': native lazy loading and when the browser decides to fetch",
              "Never lazy-load the LCP image: it delays the most important paint on the page",
              "fetchpriority + preload for the hero, lazy for everything below the fold"
            ],
            "do": [
              "Add loading='lazy' to all below-fold images and verify in the network panel",
              "Ensure the LCP image is eager with fetchpriority='high' and preloaded",
              "Measure LCP before and after fixing lazy-loading mistakes"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["Lazy loading images", "https://web.dev/articles/browser-level-image-lazy-loading"],
              ["Optimize LCP", "https://web.dev/articles/optimize-lcp"]
            ],
            "tip": "Lazy-loading the hero image is one of the most common LCP killers. Eager + high priority for LCP, lazy for the rest."
          },
          {
            "t": "Video the Fast Way",
            "d": "A background video can outweigh the entire rest of the page. Compress or cut it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Video vs animated GIF: video is 10-100x smaller for the same animation",
              "poster images and preload='none': not fetching video until the user asks",
              "Adaptive streaming (HLS/DASH) for long content instead of one giant MP4"
            ],
            "do": [
              "Replace one GIF with an autoplaying muted looped MP4/WebM",
              "Add poster + preload='none' to a below-fold video",
              "Measure the byte savings and LCP impact"
            ],
            "tools": ["ffmpeg", "Cloudinary", "Mux"],
            "res": [
              ["Replace GIFs with video", "https://web.dev/articles/replace-gifs-with-videos"],
              ["ffmpeg", "https://ffmpeg.org/"]
            ],
            "tag": "opt",
            "tip": "Autoplay background videos murder mobile data plans and LCP. If it must autoplay, it must be tiny, muted, and deferred."
          },
          {
            "t": "Image CDNs and Optimization Services",
            "d": "Outsource resizing, formats, and compression to the edge.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "URL-based transforms: ?w=800&format=avif instead of build-time pipelines",
              "What good services do: format negotiation, responsive sizing, and caching at the edge",
              "Cost awareness: per-transformation pricing and cache-hit ratios"
            ],
            "do": [
              "Serve one site's images through an image CDN with URL parameters",
              "Verify format negotiation (AVIF vs WebP) via response headers",
              "Compare build-time optimization vs CDN cost and complexity for your case"
            ],
            "tools": ["Cloudinary", "Imgix", "Cloudflare Images"],
            "res": [
              ["Cloudinary", "https://cloudinary.com/"],
              ["Cloudflare Images", "https://www.cloudflare.com/products/cloudflare-images/"]
            ],
            "tag": "opt",
            "tip": "Image CDNs charge per transformation. Cache-hit ratio is the metric that decides whether it is cheap or shocking."
          }
        ]
      },
      {
        "t": "Rendering Strategy and RUM",
        "d": "How the page gets built, and how you watch it in the wild.",
        "lv": 3,
        "children": [
          {
            "t": "SSR, SSG, and Streaming",
            "d": "Where HTML gets born decides how fast users see content.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "SSR vs SSG vs CSR: server per request, build time, or browser only, and the trade-offs",
              "Streaming SSR: sending HTML in chunks so the head paints before the tail finishes",
              "ISR and partial prerendering: static shells with dynamic holes"
            ],
            "do": [
              "Render the same page as CSR and SSR and compare FCP/LCP/TTFB",
              "Implement streaming SSR with Suspense boundaries",
              "Decide per-route which strategy each page of an app deserves"
            ],
            "tools": ["Next.js", "Nuxt", "Astro"],
            "res": [
              ["Rendering on the web", "https://web.dev/articles/rendering-on-the-web"],
              ["Next.js rendering", "https://nextjs.org/docs/app/building-your-application/rendering"]
            ],
            "tip": "SSR fixes FCP but can hurt TTFB and INP. It is a trade, not a win; measure all three vitals before celebrating."
          },
          {
            "t": "Hydration and Islands",
            "d": "Shipping HTML is cheap. Making it interactive is where the JS bill arrives.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Hydration cost: re-running the framework over server HTML on the main thread",
              "Islands architecture: hydrating only the interactive parts, leaving the rest static",
              "Resumability: frameworks that skip hydration work entirely"
            ],
            "do": [
              "Measure hydration time on an SSR page with a Performance trace",
              "Convert one page section to an island (Astro) or lazy-hydrated component",
              "Compare total JS and INP before and after"
            ],
            "tools": ["Astro", "Qwik", "Next.js"],
            "res": [
              ["Islands architecture", "https://web.dev/articles/islands-architecture"],
              ["Astro", "https://astro.build/"]
            ],
            "tip": "Hydrating a mostly-static page is paying interactivity tax on content nobody touches. Islands let static stay static."
          },
          {
            "t": "Virtualized Lists",
            "d": "Rendering 10,000 DOM nodes is slow in every framework ever made.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why long lists kill: DOM nodes, layout cost, and memory per row",
              "Windowing: rendering only the visible rows plus a small overscan buffer",
              "Gotchas: dynamic row heights, scroll restoration, and accessibility"
            ],
            "do": [
              "Render 5,000 rows unvirtualized and measure the INP/scroll jank",
              "Virtualize it with TanStack Virtual and re-measure",
              "Handle one edge case: dynamic heights or sticky headers"
            ],
            "tools": ["TanStack Virtual", "react-window"],
            "res": [
              ["TanStack Virtual", "https://tanstack.com/virtual/latest"],
              ["react-window", "https://github.com/bvaughn/react-window"]
            ],
            "tip": "Virtualization fixes the symptom brilliantly, but ask first: does the user really need 5,000 rows, or would search + pagination serve them better?"
          },
          {
            "t": "RUM Dashboards",
            "d": "Real-user monitoring: your vitals, sliced by device, country, and release.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "RUM vs synthetic: real conditions vs controlled conditions, and why you need both",
              "Segmentation: the global average hides that Android users in Brazil suffer",
              "Release correlation: spotting the deploy that regressed INP"
            ],
            "do": [
              "Ship web-vitals data to a RUM dashboard for a real site",
              "Segment one vital by device class and find the worst segment",
              "Correlate a vitals regression with a specific release"
            ],
            "tools": ["SpeedCurve", "DebugBear", "Calibre", "Grafana"],
            "res": [
              ["DebugBear", "https://www.debugbear.com/"],
              ["SpeedCurve", "https://speedcurve.com/"]
            ],
            "tip": "Averages across all users hide the users who matter. Segment by device and connection before declaring victory."
          },
          {
            "t": "Performance in CI and Team Culture",
            "d": "Speed that is not guarded regresses. Make it everyone's job.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Lighthouse CI: asserting on scores and budgets for every PR",
              "Synthetic monitoring: scheduled runs catching regressions between releases",
              "Culture: perf champions, regression postmortems, and celebrating wins publicly"
            ],
            "do": [
              "Add Lighthouse CI to a repo with assertions on LCP and total JS",
              "Set up weekly synthetic runs on key pages with alerting",
              "Write a one-page perf policy: budgets, owners, and what happens on regression"
            ],
            "tools": ["Lighthouse CI", "DebugBear", "Calibre"],
            "res": [
              ["Lighthouse CI", "https://github.com/GoogleChrome/lighthouse-ci"],
              ["Calibre", "https://calibreapp.com/"]
            ],
            "tip": "CI checks that fail too often get disabled. Tune thresholds to catch real regressions, not noise, or the team will mute them."
          }
        ]
      }
    ]
  }
});
