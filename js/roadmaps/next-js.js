/* Atlas roadmap data: Next.js (next-js) */
ROADMAPS.push({
  "id": "next-js",
  "title": "Next.js",
  "icon": "🚄",
  "color": "#7dd3fc",
  "desc": "Build production React apps with Next.js: App Router, server components, caching, auth, and Vercel deployment.",
  "kind": "skill",
  "root": {
    "t": "Next.js",
    "d": "From React foundations to deploying fast apps on the edge.",
    "children": [
      {
        "t": "Foundations",
        "d": "Why Next.js exists: rendering strategies, React essentials, and your first project.",
        "lv": 1,
        "children": [
          {
            "t": "Why Frameworks Exist",
            "d": "Plain React leaves routing, rendering, and data fetching to you. Frameworks answer those questions with conventions.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What React does not ship: routing, SSR, code splitting, image optimization",
              "Framework vs library: who owns the architecture decisions",
              "Why Next.js: the React team's recommended full-stack framework"
            ],
            "do": [
              "Build a tiny multi-page site in plain React with hand-rolled routing",
              "Rebuild it in Next.js and list everything you deleted",
              "Read the Next.js docs introduction and note the framework's promises"
            ],
            "tools": ["React", "Next.js"],
            "res": [
              ["Next.js Documentation", "https://nextjs.org/docs"],
              ["React Documentation", "https://react.dev/"]
            ]
          },
          {
            "t": "Rendering Strategies: CSR, SSR, SSG, ISR",
            "d": "Where HTML gets built changes everything about performance and SEO. Learn the four strategies and their tradeoffs.",
            "lv": 1,
            "time": "~3h",
            "tip": "There is no best rendering strategy, only the right one per page. Marketing pages want SSG, dashboards want CSR, personalized content wants SSR.",
            "learn": [
              "CSR: empty HTML shell, JavaScript builds the page in the browser",
              "SSR: HTML built per request on the server; SSG: built once at build time",
              "ISR: static pages regenerated in the background on a timer"
            ],
            "do": [
              "Disable JavaScript in your browser and visit a CSR app vs an SSR page",
              "Build the same page three ways and compare time-to-content and SEO output",
              "Decide the strategy for each page of a fictional SaaS site"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Rendering", "https://nextjs.org/docs/app/building-your-application/rendering"]
            ]
          },
          {
            "t": "React Essentials for Next.js",
            "d": "The React you actually need: components, hooks, and the mental model that makes server components click later.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Components, props, and composition: the only three ideas that matter",
              "useState and useEffect: state and side effects in client components",
              "The React rendering model: what re-renders and why"
            ],
            "do": [
              "Build a small interactive app with useState and useEffect",
              "Trace a re-render with React DevTools and explain what triggered it",
              "Refactor prop drilling into composition with children"
            ],
            "tools": ["React", "React DevTools"],
            "res": [
              ["React: Quick Start", "https://react.dev/learn"]
            ]
          },
          {
            "t": "create-next-app and Project Structure",
            "d": "Scaffold a project and learn where everything lives: the app directory, public assets, and config files.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Scaffolding options: TypeScript, ESLint, Tailwind, App Router, src directory",
              "The app directory: folders are routes, files are UI",
              "Config files: next.config, tsconfig, and environment files"
            ],
            "do": [
              "Run `npm create next-app@latest` and explore every generated file",
              "Change the homepage and add a second page by creating a folder",
              "Try the dev server, fast refresh, and the build output"
            ],
            "tools": ["Next.js", "Node.js"],
            "res": [
              ["Next.js: Installation", "https://nextjs.org/docs/app/getting-started/installation"],
              ["Next.js: Project Structure", "https://nextjs.org/docs/app/getting-started/project-structure"]
            ]
          },
          {
            "t": "Pages Router vs App Router",
            "d": "Next.js has two routers. Learn the App Router deeply, but know what the Pages Router looks like when you inherit it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Pages Router: file-based, getServerSideProps, the classic model",
              "App Router: layouts, server components, and streaming by default",
              "Migration reality: old tutorials use Pages, new projects use App"
            ],
            "do": [
              "Build one page in each router and compare the code",
              "Read a Pages Router tutorial and translate it to App Router",
              "Decide which router a new project should use and write down why"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: App Router", "https://nextjs.org/docs/app"],
              ["Next.js: Pages Router", "https://nextjs.org/docs/pages"]
            ]
          }
        ]
      },
      {
        "t": "App Router",
        "d": "Routing as folders: layouts, loading states, dynamic routes, parallel routes, and middleware.",
        "lv": 1,
        "children": [
          {
            "t": "File-Based Routing Basics",
            "d": "Folders become URLs and page.js becomes the screen. The conventions that turn a directory tree into a site.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Special files: page.js, layout.js, loading.js, error.js, not-found.js",
              "Colocation: put components, styles, and tests next to the route that uses them",
              "Route groups (marketing) and private folders (_components) that do not affect URLs"
            ],
            "do": [
              "Build a three-page site with a shared layout using only folders and files",
              "Create a route group for (auth) pages with their own layout",
              "Colocate a component in _components and confirm it creates no route"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Routing Fundamentals", "https://nextjs.org/docs/app/building-your-application/routing"]
            ]
          },
          {
            "t": "Dynamic Routes",
            "d": "URLs with parameters: [slug], [...catchAll], and [[...optional]] for blogs, products, and docs.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Dynamic segments: reading params in server components",
              "Catch-all and optional catch-all for docs-style hierarchies",
              "generateStaticParams: pre-rendering known dynamic pages at build time"
            ],
            "do": [
              "Build a blog with /blog/[slug] reading params",
              "Add a docs section with [...slug] catch-all routing",
              "Pre-render the top 10 slugs with generateStaticParams"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Dynamic Routes", "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes"]
            ]
          },
          {
            "t": "Layouts and Templates",
            "d": "Shared UI that persists across navigation: layouts keep state, templates remount. Choose deliberately.",
            "lv": 1,
            "time": "~2h",
            "tip": "Layouts preserve state across page changes, which is why your sidebar does not flicker. If you need fresh state per navigation, that is what templates are for.",
            "learn": [
              "Root layout: the required shell with html and body",
              "Nested layouts: per-section UI that composes",
              "Templates vs layouts: when remounting on navigation is the point"
            ],
            "do": [
              "Build a dashboard layout with sidebar that keeps state across pages",
              "Add a nested layout for a settings section",
              "Convert a layout to a template and observe the remount behavior"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Layouts and Templates", "https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"]
            ]
          },
          {
            "t": "Loading UI and Streaming",
            "d": "Instant loading states with loading.js and Suspense: stream the shell now, fill in the slow parts as they resolve.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "loading.js: instant fallback UI while a route segment loads",
              "Suspense boundaries: streaming parts of a page independently",
              "Skeletons vs spinners: what good loading UI looks like"
            ],
            "do": [
              "Add loading.js to a slow route and watch the instant feedback",
              "Wrap slow components in Suspense to stream them independently",
              "Design skeleton screens that match the final layout"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Loading UI and Streaming", "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"]
            ]
          },
          {
            "t": "Error Handling: error.js and not-found.js",
            "d": "Graceful failure per route segment: error boundaries that reset, and proper 404s.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "error.js: client-component boundaries that catch segment errors",
              "reset(): letting users retry without a full reload",
              "not-found.js and notFound(): real 404s for missing resources"
            ],
            "do": [
              "Add error.js to a route and throw inside it to see the boundary catch",
              "Implement a retry button with reset()",
              "Return notFound() for missing dynamic content and verify the 404 status"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Error Handling", "https://nextjs.org/docs/app/building-your-application/routing/error-handling"]
            ]
          },
          {
            "t": "Navigation: Link, useRouter, Redirects",
            "d": "Moving between pages the fast way: client-side navigation, prefetching, and programmatic redirects.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Link: client-side navigation with automatic prefetching",
              "useRouter: programmatic navigation in client components",
              "redirect() and permanentRedirect(): server-side navigation in server components"
            ],
            "do": [
              "Replace anchor tags with Link and feel the instant navigation",
              "Navigate programmatically after a form submission with useRouter",
              "Protect a page with redirect() for unauthenticated users"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Linking and Navigating", "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating"]
            ]
          },
          {
            "t": "Parallel and Intercepting Routes",
            "d": "Advanced routing: render multiple pages in one layout, and intercept routes for modals-over-pages.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Parallel routes: @slots rendered simultaneously in a layout",
              "Intercepting routes: (.) and (..) conventions for modal UX",
              "The classic use case: photo feed with modal detail view"
            ],
            "do": [
              "Build a dashboard with @analytics and @team parallel slots",
              "Implement a photo modal with intercepting routes that falls back to a full page",
              "Handle the refresh case: intercepted modals must work as standalone pages"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Parallel Routes", "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"],
              ["Next.js: Intercepting Routes", "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"]
            ]
          },
          {
            "t": "Middleware",
            "d": "Code that runs before the request hits your app: auth checks, redirects, A/B tests, and geolocation.",
            "lv": 2,
            "time": "~3h",
            "tip": "Middleware runs on every matched request, so keep it lean. Heavy logic here slows down your entire site.",
            "learn": [
              "The matcher: scoping middleware to the routes that need it",
              "Common uses: auth gating, locale detection, redirects, headers",
              "Edge runtime constraints: what you can and cannot do in middleware"
            ],
            "do": [
              "Write middleware that redirects unauthenticated users from /dashboard",
              "Add security headers to all responses via middleware",
              "Measure middleware latency and move heavy work out of it"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Middleware", "https://nextjs.org/docs/app/building-your-application/routing/middleware"]
            ]
          },
          {
            "t": "Route Handlers: Building APIs",
            "d": "API endpoints inside Next.js: route.js files for webhooks, proxies, and backend-for-frontend logic.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Route handlers: GET, POST, and friends exported from route.js",
              "Request and Response with the Web standard APIs",
              "When to use route handlers vs server actions"
            ],
            "do": [
              "Build a JSON API with GET and POST route handlers",
              "Receive a webhook: verify its signature in a route handler",
              "Stream a long response from a route handler"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Route Handlers", "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"]
            ]
          }
        ]
      },
      {
        "t": "Data Fetching",
        "d": "Fetching on the server, on the client, and everything between: patterns, server actions, and forms.",
        "lv": 2,
        "children": [
          {
            "t": "Fetching in Server Components",
            "d": "Async components that fetch directly: no useEffect, no loading spinners for the initial render, secrets stay secret.",
            "lv": 2,
            "time": "~3h",
            "tip": "Fetch in the server component that needs the data, not at the top of the tree. Colocated fetching keeps waterfalls shallow and code readable.",
            "learn": [
              "Async server components: awaiting fetch directly in the component",
              "No client waterfalls: the server resolves data before streaming HTML",
              "Secrets: API keys in server components never reach the browser"
            ],
            "do": [
              "Fetch a public API directly in an async server component",
              "Move a useEffect fetch from a client component into a server component",
              "Verify with devtools that no API key or token leaks to the client"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Data Fetching", "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching"]
            ]
          },
          {
            "t": "Client-Side Fetching Patterns",
            "d": "When data must live in the browser: SWR, React Query, and the use cases server components cannot cover.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "When client fetching is right: real-time data, user-triggered refreshes, highly interactive UI",
              "SWR and TanStack Query: caching, revalidation, and dedup out of the box",
              "Route handler as the BFF: client fetches your API, your API fetches the world"
            ],
            "do": [
              "Build a live dashboard widget with SWR and polling",
              "Add optimistic updates to a toggle with TanStack Query",
              "Proxy a third-party API through a route handler to hide the key"
            ],
            "tools": ["SWR", "TanStack Query", "Next.js"],
            "res": [
              ["SWR Documentation", "https://swr.vercel.app/"],
              ["TanStack Query", "https://tanstack.com/query/latest"]
            ]
          },
          {
            "t": "Parallel vs Sequential Fetching",
            "d": "Waterfalls are the silent performance killer: fetch in parallel by default, sequence only when data depends on data.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The waterfall: awaiting fetch A before starting fetch B doubles latency",
              "Promise.all for independent fetches in the same component",
              "Preloading: kicking off fetches before the component that needs them renders"
            ],
            "do": [
              "Build a page with sequential fetches, measure it, then parallelize with Promise.all",
              "Implement the preload pattern for data needed deep in the tree",
              "Audit a real page for waterfalls using the network tab"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Fetching Patterns", "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns"]
            ]
          },
          {
            "t": "Server Actions",
            "d": "Call server functions directly from components: mutations without building an API layer.",
            "lv": 2,
            "time": "~4h",
            "tip": "Server actions are RPC, not magic. Validate every input on the server as if it came from a hostile client, because it can.",
            "learn": [
              "'use server': defining functions that run only on the server",
              "Calling actions from client components and forms",
              "Revalidation: revalidatePath and revalidateTag after mutations"
            ],
            "do": [
              "Build a create-post form that calls a server action directly",
              "Add Zod validation inside the action and return field errors",
              "Revalidate the affected pages after the mutation"
            ],
            "tools": ["Next.js", "Zod"],
            "res": [
              ["Next.js: Server Actions", "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Forms and Mutations",
            "d": "Forms that work without JavaScript and shine with it: progressive enhancement with useFormStatus and useActionState.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Native form actions: forms that submit to server actions",
              "useFormStatus: pending states for submit buttons",
              "useActionState: wiring server-returned state back into the form"
            ],
            "do": [
              "Build a form that works with JavaScript disabled",
              "Add pending UI with useFormStatus",
              "Return validation errors from the action and render them with useActionState"
            ],
            "tools": ["Next.js", "React"],
            "res": [
              ["React: useActionState", "https://react.dev/reference/react/useActionState"]
            ]
          },
          {
            "t": "Optimistic Updates with useOptimistic",
            "d": "Update the UI before the server responds: instant-feeling apps with safe rollback.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "useOptimistic: showing the expected state while the action runs",
              "Reconciliation: the real result replacing the optimistic one",
              "Where optimism is safe and where it is dangerous"
            ],
            "do": [
              "Add optimistic likes to a list with useOptimistic",
              "Simulate a server failure and verify the rollback",
              "Decide per-mutation whether optimism fits in your app"
            ],
            "tools": ["Next.js", "React"],
            "res": [
              ["React: useOptimistic", "https://react.dev/reference/react/useOptimistic"]
            ]
          }
        ]
      },
      {
        "t": "Caching and Revalidation",
        "d": "Next.js caches aggressively. Learn the four caches, or they will surprise you in production.",
        "lv": 2,
        "children": [
          {
            "t": "Request Memoization",
            "d": "The same fetch in one render costs one request: React's automatic dedup within a single render pass.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How memoization dedups identical GET fetches in one render",
              "Scope: per render, per request, not across requests",
              "Why it makes colocated fetching safe instead of wasteful"
            ],
            "do": [
              "Fetch the same URL in three components and count actual network requests",
              "Break memoization with different options and observe the extra request",
              "Use React cache() for non-fetch dedup like database calls"
            ],
            "tools": ["Next.js", "React"],
            "res": [
              ["Next.js: Caching", "https://nextjs.org/docs/app/building-your-application/caching"]
            ]
          },
          {
            "t": "The Data Cache",
            "d": "Persistent fetch caching across requests: the fetch options that decide what gets cached and for how long.",
            "lv": 2,
            "time": "~3h",
            "tip": "fetch is cached by default in server components. If your data looks stale, the Data Cache is the first suspect, not your database.",
            "learn": [
              "cache: 'force-cache' vs 'no-store' and what each means",
              "next: { revalidate }: time-based revalidation per fetch",
              "next: { tags }: tag-based invalidation for precise control"
            ],
            "do": [
              "Cache a fetch, change the backend data, and observe the stale response",
              "Set revalidate: 60 and watch the background refresh",
              "Tag related fetches and invalidate them together with revalidateTag"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Data Cache", "https://nextjs.org/docs/app/building-your-application/caching#data-cache"]
            ]
          },
          {
            "t": "Full Route Cache and Static Rendering",
            "d": "Pre-rendered pages served instantly: when routes are static, what makes them dynamic, and how to control it.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Static vs dynamic rendering: decided at build time per route",
              "What opts a route out of static: cookies, headers, searchParams, dynamic functions",
              "export const dynamic = 'force-dynamic' and friends"
            ],
            "do": [
              "Build a static page and a dynamic page; compare build output",
              "Add headers() to a page and watch it become dynamic",
              "Force static rendering where possible and measure the difference"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Rendering", "https://nextjs.org/docs/app/building-your-application/rendering"]
            ]
          },
          {
            "t": "Revalidation Strategies",
            "d": "Keeping cached pages fresh: time-based, on-demand, and tag-based revalidation for every freshness need.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Time-based: revalidate intervals for 'fresh enough' content",
              "On-demand: revalidatePath and revalidateTag triggered by events like a CMS publish",
              "Choosing: staleness tolerance decides the strategy"
            ],
            "do": [
              "Set up time-based revalidation on a content page",
              "Build a webhook that calls revalidateTag on CMS publish",
              "Design the revalidation plan for an e-commerce catalog"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Revalidating", "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"]
            ]
          },
          {
            "t": "Dynamic Functions and Rendering",
            "d": "cookies(), headers(), searchParams: the dynamic APIs that opt routes out of static rendering, and how to contain them.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Which APIs force dynamic rendering and why",
              "Containing dynamism: isolate dynamic parts in small components with Suspense",
              "Partial prerendering: static shell with dynamic holes"
            ],
            "do": [
              "Find which component forces your page dynamic using build output",
              "Refactor to isolate the dynamic part behind a Suspense boundary",
              "Compare full-page dynamic vs partial prerendering performance"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Partial Prerendering", "https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering"]
            ]
          }
        ]
      },
      {
        "t": "Rendering and Components",
        "d": "Server components, client components, and the composition patterns that keep bundles small.",
        "lv": 2,
        "children": [
          {
            "t": "Server vs Client Components",
            "d": "The defining split of the App Router: what runs where, and why the default is server.",
            "lv": 2,
            "time": "~3h",
            "tip": "Reach for 'use client' at the leaves, not the root. One client boundary high in the tree ships JavaScript for everything below it.",
            "learn": [
              "Server components: async, direct data access, zero client JavaScript",
              "Client components: interactivity, hooks, browser APIs, marked with 'use client'",
              "The boundary: props cross it, but functions and non-serializable values do not"
            ],
            "do": [
              "Build a page mixing both and inspect the client JavaScript bundle",
              "Move 'use client' down the tree and watch the bundle shrink",
              "Pass a server component as children to a client component"
            ],
            "tools": ["Next.js", "React"],
            "res": [
              ["Next.js: Server and Client Components", "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns"]
            ]
          },
          {
            "t": "Composition Patterns",
            "d": "Keep interactivity without bloating the bundle: children slots, and lifting client boundaries to the leaves.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Children as slots: interactive shells around server-rendered content",
              "Lifting state down: only the interactive leaf needs 'use client'",
              "Sharing logic without sharing bundles"
            ],
            "do": [
              "Refactor a client-heavy page using the children-slot pattern",
              "Measure bundle size before and after",
              "Build a tabs component where only the tab bar is a client component"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Composition Patterns", "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns"]
            ]
          },
          {
            "t": "Streaming with Suspense",
            "d": "Send HTML in chunks: the page appears instantly and slow sections fill in as they resolve.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "How Suspense boundaries become streaming chunks",
              "Designing fallback UI that matches the final layout",
              "Nested boundaries: streaming a page in deliberate stages"
            ],
            "do": [
              "Wrap slow components in Suspense and watch the streamed HTML",
              "Stage a page: shell first, then sidebar, then main content",
              "Test with throttled network to feel the perceived speedup"
            ],
            "tools": ["Next.js", "React"],
            "res": [
              ["Next.js: Streaming", "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"]
            ]
          },
          {
            "t": "Server-Only Code and Taint",
            "d": "Guaranteeing secrets never leak: server-only imports and taint tracking that fails the build on mistakes.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "server-only package: build-time errors when server code is imported client-side",
              "Taint: marking sensitive values so they cannot cross to the client",
              "The threat model: any prop to a client component is public"
            ],
            "do": [
              "Add server-only to a data-access module and try importing it in a client component",
              "Taint an API key object and watch the build fail on leakage",
              "Audit a project for accidental secret exposure via props"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: server-only", "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment"]
            ]
          }
        ]
      },
      {
        "t": "Styling, Assets, and SEO",
        "d": "Look fast and rank well: styling options, image and font optimization, and the Metadata API.",
        "lv": 2,
        "children": [
          {
            "t": "Styling in Next.js",
            "d": "Global CSS, CSS Modules, Tailwind, and CSS-in-JS: what works with server components and what does not.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "CSS Modules: scoped styles with zero runtime",
              "Tailwind: utility-first with the official Next.js integration",
              "CSS-in-JS caveat: runtime libraries need client components"
            ],
            "do": [
              "Style a page three ways and compare the output CSS",
              "Set up Tailwind and build a responsive layout",
              "Scope component styles with CSS Modules to avoid collisions"
            ],
            "tools": ["Tailwind CSS", "Next.js"],
            "res": [
              ["Next.js: CSS", "https://nextjs.org/docs/app/building-your-application/styling"],
              ["Tailwind CSS", "https://tailwindcss.com/"]
            ]
          },
          {
            "t": "next/image",
            "d": "Automatic image optimization: responsive sizes, modern formats, and lazy loading without thinking about it.",
            "lv": 2,
            "time": "~2h",
            "tip": "Always provide width/height or use fill with a sized parent. Layout shift from unsized images is a Core Web Vitals killer.",
            "learn": [
              "Automatic resizing, WebP/AVIF conversion, and lazy loading",
              "fill vs fixed dimensions and preventing layout shift",
              "Remote images: configuring remotePatterns for external hosts"
            ],
            "do": [
              "Replace img tags with next/image and compare Lighthouse scores",
              "Configure remotePatterns for an external image host",
              "Use fill with aspect-ratio containers for responsive art-directed images"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Image Optimization", "https://nextjs.org/docs/app/building-your-application/optimizing/images"]
            ]
          },
          {
            "t": "next/font",
            "d": "Self-hosted fonts with zero layout shift: automatic optimization for Google Fonts and local files.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Self-hosting: no external font requests, privacy-friendly",
              "Automatic subsetting and fallback font metrics to prevent CLS",
              "Variable fonts and weight configuration"
            ],
            "do": [
              "Load a Google Font with next/font and verify no external requests",
              "Add a local variable font with next/font/local",
              "Measure CLS improvement vs a traditional font link"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Font Optimization", "https://nextjs.org/docs/app/building-your-application/optimizing/fonts"]
            ]
          },
          {
            "t": "Metadata API and SEO",
            "d": "Titles, descriptions, and Open Graph tags as code: type-safe SEO that composes across layouts.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Static metadata export and generateMetadata for dynamic pages",
              "Open Graph and Twitter cards for rich link previews",
              "Template titles: %s patterns shared across a section"
            ],
            "do": [
              "Add metadata to every page of a site with templates",
              "Implement generateMetadata pulling from your CMS",
              "Validate with Open Graph preview tools and fix warnings"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Metadata", "https://nextjs.org/docs/app/building-your-application/optimizing/metadata"]
            ]
          },
          {
            "t": "Sitemaps, Robots, and OG Images",
            "d": "The SEO finishing touches: generated sitemaps, robots.txt, and dynamic social preview images.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "sitemap.js: generating XML sitemaps from your content",
              "robots.ts: controlling crawler access as code",
              "opengraph-image: dynamic OG images with ImageResponse"
            ],
            "do": [
              "Generate a sitemap from dynamic routes",
              "Create dynamic OG images for blog posts with ImageResponse",
              "Verify everything in Search Console after deploying"
            ],
            "tools": ["Next.js"],
            "res": [
              ["Next.js: Sitemap", "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Auth, Config, and Testing",
        "d": "Real-world app concerns: authentication with Auth.js, environment variables, and testing.",
        "lv": 3,
        "children": [
          {
            "t": "Authentication with Auth.js",
            "d": "The standard Next.js auth library: OAuth providers, credentials, sessions, and database adapters.",
            "lv": 3,
            "time": "~4h",
            "tip": "Auth.js v5 changed the API significantly from NextAuth v4. Follow v5 docs only, and old tutorials will mislead you.",
            "learn": [
              "Providers: OAuth (GitHub, Google) and credentials-based login",
              "Sessions: JWT vs database sessions and when each fits",
              "The auth() helper in server components, actions, and middleware"
            ],
            "do": [
              "Add GitHub OAuth login with Auth.js v5",
              "Protect pages with auth() in server components and middleware",
              "Implement a credentials provider with hashed passwords"
            ],
            "tools": ["Auth.js", "Next.js"],
            "res": [
              ["Auth.js Documentation", "https://authjs.dev/"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Protecting Routes and APIs",
            "d": "Authorization beyond login: role checks in middleware, server components, actions, and route handlers.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Middleware gating: fast redirect for logged-out users",
              "Server-side checks: never trust middleware alone for sensitive data",
              "Role-based access: extending the session with roles"
            ],
            "do": [
              "Gate /admin with middleware and role checks in the page",
              "Protect a route handler with session validation",
              "Add role claims to the session and enforce them in a server action"
            ],
            "tools": ["Auth.js", "Next.js"],
            "res": [
              ["Auth.js: Protecting Routes", "https://authjs.dev/getting-started/session-management/protecting"]
            ]
          },
          {
            "t": "Environment Variables",
            "d": "Configuration without code changes: public vs server-only variables and per-environment values.",
            "lv": 3,
            "time": "~2h",
            "tip": "NEXT_PUBLIC_ variables are baked into the client bundle at build time. Putting a secret there is publishing it.",
            "learn": [
              "NEXT_PUBLIC_ prefix: what reaches the browser and when it is inlined",
              ".env files: local, development, production precedence",
              "Runtime vs build-time: what Vercel injects and when"
            ],
            "do": [
              "Split config into public and server-only variables",
              "Prove a NEXT_PUBLIC_ value is visible in the client bundle",
              "Set up per-environment variables in Vercel"
            ],
            "tools": ["Next.js", "Vercel"],
            "res": [
              ["Next.js: Environment Variables", "https://nextjs.org/docs/app/building-your-application/configuring/environment-variables"]
            ]
          },
          {
            "t": "Testing: Vitest and Playwright",
            "d": "Test the pyramid: unit tests for logic, component tests for UI, E2E for critical flows.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Vitest for unit and component tests: fast, Vite-native",
              "Playwright for E2E: real browsers, critical user journeys",
              "What to test in Next.js: actions, route handlers, and auth flows"
            ],
            "do": [
              "Unit-test a server action with Vitest",
              "Write a Playwright test for login and a core user flow",
              "Add both to CI with a production build"
            ],
            "tools": ["Vitest", "Playwright", "Testing Library"],
            "res": [
              ["Vitest", "https://vitest.dev/"],
              ["Playwright", "https://playwright.dev/"]
            ]
          },
          {
            "t": "Internationalization",
            "d": "Multi-language apps: locale routing, dictionaries, and the middleware that detects language.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Locale-prefixed routing: /en/about vs /fr/about",
              "Dictionaries: loading the right strings per locale",
              "next-intl as the community standard library"
            ],
            "do": [
              "Add locale routing with middleware-based detection",
              "Build a dictionary system for two languages",
              "Handle locale-aware metadata and sitemaps"
            ],
            "tools": ["next-intl", "Next.js"],
            "res": [
              ["next-intl Documentation", "https://next-intl.dev/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Performance and Deployment",
        "d": "Ship it fast and keep it fast: bundle optimization, observability, and deploying on Vercel or your own infra.",
        "lv": 3,
        "children": [
          {
            "t": "Bundle Analysis and Optimization",
            "d": "Find what is bloating your JavaScript: analyzing bundles and cutting what users download.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "@next/bundle-analyzer: seeing what ships to the client",
              "Dynamic imports: code-splitting heavy components",
              "Tree-shaking and import hygiene: importing from the right entrypoint"
            ],
            "do": [
              "Analyze your bundle and find the three biggest dependencies",
              "Lazy-load a heavy component with next/dynamic",
              "Fix a barrel-import that pulled an entire library into the client"
            ],
            "tools": ["@next/bundle-analyzer", "Next.js"],
            "res": [
              ["Next.js: Bundle Analyzer", "https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer"]
            ]
          },
          {
            "t": "Instrumentation and OpenTelemetry",
            "d": "Observability hooks: instrumentation.js for startup code and OpenTelemetry for traces.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "instrumentation.js: registering monitoring before the app serves traffic",
              "OpenTelemetry integration: traces across server components and actions",
              "What to instrument: slow queries, external calls, and error rates"
            ],
            "do": [
              "Add instrumentation.js with an OpenTelemetry setup",
              "Trace a server action end to end and find the slow span",
              "Alert on error rate and p95 latency in production"
            ],
            "tools": ["OpenTelemetry", "Next.js"],
            "res": [
              ["Next.js: Instrumentation", "https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation"],
              ["OpenTelemetry", "https://opentelemetry.io/"]
            ]
          },
          {
            "t": "Deploying on Vercel",
            "d": "The zero-config path: git push to production with previews, edge network, and analytics built in.",
            "lv": 3,
            "time": "~2h",
            "tip": "Preview deployments for every PR are Vercel's killer feature. Use them for design review and QA before merging.",
            "learn": [
              "Git integration: production, preview, and development environments",
              "Environment variables and edge config per environment",
              "Analytics and Speed Insights: real-user metrics out of the box"
            ],
            "do": [
              "Deploy a Next.js app to Vercel from GitHub",
              "Open a PR and review the preview deployment",
              "Set environment variables per environment and redeploy"
            ],
            "tools": ["Vercel", "Next.js"],
            "res": [
              ["Vercel Documentation", "https://vercel.com/docs"],
              ["Next.js: Deploying", "https://nextjs.org/docs/app/building-your-application/deploying"]
            ]
          },
          {
            "t": "Self-Hosting: Node and Docker",
            "d": "Running Next.js on your own infrastructure: standalone output, Docker images, and what Vercel was doing for you.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Standalone output: the minimal server.js for self-hosting",
              "Docker multi-stage builds for small production images",
              "What you take on: caching, ISR revalidation, and image optimization hosting"
            ],
            "do": [
              "Build with output: 'standalone' and run it with plain Node",
              "Write a multi-stage Dockerfile and deploy the image",
              "Set up a reverse proxy with caching headers in front"
            ],
            "tools": ["Docker", "Next.js", "Node.js"],
            "res": [
              ["Next.js: Self-Hosting", "https://nextjs.org/docs/app/building-your-application/deploying#self-hosting"]
            ]
          },
          {
            "t": "Edge vs Node.js Runtimes",
            "d": "Two runtimes for your code: the edge for global low latency, Node for full API compatibility.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Edge runtime: lightweight, global, limited Node APIs",
              "Node.js runtime: full compatibility, regional",
              "Choosing per route: export const runtime and the decision criteria"
            ],
            "do": [
              "Run the same route handler on both runtimes and compare cold starts",
              "Hit an edge limitation (a Node-only library) and refactor",
              "Decide the runtime for each route in an app and document why"
            ],
            "tools": ["Next.js", "Vercel"],
            "res": [
              ["Next.js: Runtimes", "https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"]
            ]
          },
          {
            "t": "Production Checklist",
            "d": "The launch list: security headers, error monitoring, performance budgets, and the things you check at 2am.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Security: headers, env hygiene, dependency audits",
              "Reliability: error tracking, uptime checks, rollback plan",
              "Performance: budgets, Core Web Vitals, and image discipline"
            ],
            "do": [
              "Run the checklist against your app and fix every red item",
              "Set up Sentry and trigger a test error end to end",
              "Define performance budgets and add Lighthouse CI"
            ],
            "tools": ["Sentry", "Lighthouse CI", "Next.js"],
            "res": [
              ["Next.js: Production Checklist", "https://nextjs.org/docs/app/building-your-application/deploying/production-checklist"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
