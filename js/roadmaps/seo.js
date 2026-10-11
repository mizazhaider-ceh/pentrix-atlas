/* Atlas roadmap data: SEO (seo) */
ROADMAPS.push({
  "id": "seo",
  "title": "SEO",
  "icon": "📣",
  "color": "#b5651d",
  "desc": "Search optimization end to end: technical foundations, content, Core Web Vitals, authority, and the new AI search era.",
  "kind": "role",
  "root": {
    "t": "Search Engine Optimization",
    "d": "Earn traffic by being the best answer, technically and editorially.",
    "children": [
      {
        "t": "How Search Works",
        "d": "Crawl, index, rank: the machine you are optimizing for.",
        "lv": 1,
        "children": [
          {
            "t": "What SEO, GEO & AEO Are",
            "d": "SEO ranks in search results. GEO and AEO get cited in AI answers.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "SEO: earning visibility in organic search results",
              "GEO (generative engine optimization): being surfaced in AI-generated answers",
              "AEO (answer engine optimization): winning direct answers and featured results"
            ],
            "do": [
              "Search 10 queries and classify each result page: classic links, AI overview, direct answer",
              "Ask an AI chatbot 5 product questions and note which brands get cited",
              "Write one paragraph on how your strategy changes when the answer, not the click, is the prize"
            ],
            "tools": ["Google", "ChatGPT", "Perplexity"],
            "res": [
              ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"]
            ],
            "tip": "AI answers still ground themselves in searchable, trustworthy pages. GEO without SEO fundamentals is wishful thinking."
          },
          {
            "t": "Crawling, Indexing & Ranking",
            "d": "Google must find your page, understand it, and decide it deserves to rank.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Crawling: bots discover pages by following links and sitemaps",
              "Indexing: pages are analyzed and stored in the index (or not)",
              "Ranking: hundreds of signals decide the order for each query"
            ],
            "do": [
              "Use Search Console's URL Inspection on a page and read its crawl/index status",
              "Check if a page is indexed with a site: query",
              "Trace one page's journey: link that leads to it, its index status, its ranking query"
            ],
            "tools": ["Google Search Console"],
            "res": [
              ["Google: How Search Works", "https://developers.google.com/search/docs/fundamentals/how-search-works"],
              ["Google Search Console", "https://search.google.com/search-console"]
            ],
            "tip": "If a page is not indexed, nothing else matters. Always check index status before optimizing content."
          },
          {
            "t": "Anatomy of a SERP",
            "d": "Read a results page like a strategist: ads, AI overviews, snippets, packs.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "SERP features: AI overviews, featured snippets, knowledge panels, image/video packs, local packs",
              "Organic vs paid vs zero-click: where the clicks actually go",
              "How SERP layout differs per query type (informational vs transactional vs local)"
            ],
            "do": [
              "Screenshot SERPs for 10 queries and label every feature on each",
              "Compare an informational SERP with a transactional one",
              "Identify which SERP features your content could realistically win"
            ],
            "tools": ["Google", "Ahrefs"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "Ranking #1 means little if an AI overview and four ads sit above you. Optimize for the SERP you have, not the one from 2015."
          },
          {
            "t": "Search Intent: The Core of SEO",
            "d": "Every query hides a job: learn, buy, go, or compare. Match the job.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The four intents: informational, navigational, commercial, transactional",
              "Reading intent from SERP clues: what Google already shows is the answer",
              "Mismatched intent is the top reason good content does not rank"
            ],
            "do": [
              "Classify 20 keywords by intent, then verify against the live SERP",
              "Find one page that fails because it targets transactional intent with a blog post",
              "Rewrite a page's angle to match the dominant intent of its SERP"
            ],
            "tools": ["Google", "Semrush"],
            "res": [
              ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"]
            ],
            "tip": "Do not guess intent. Google the keyword: the current top results ARE the intent, decided by millions of clicks."
          },
          {
            "t": "E-E-A-T & Trust Signals",
            "d": "Experience, Expertise, Authoritativeness, Trust: why Google should believe your page.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What each letter means and which pages are judged hardest (YMYL)",
              "Trust signals: real authors, credentials, sources, reviews, about pages",
              "Why trust matters most where bad advice causes real harm"
            ],
            "do": [
              "Audit an about page and author bios: would a skeptic trust this site?",
              "Add author bylines with credentials to 3 articles",
              "List the trust signals your top competitor has that you lack"
            ],
            "tools": [],
            "res": [
              ["Google: Creating Helpful Content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"]
            ],
            "tip": "Anonymous content on YMYL topics (health, money) is dead on arrival. Put real humans with real credentials on the byline."
          },
          {
            "t": "Spam Policies & Manual Actions",
            "d": "Know the rules before you break them: what gets sites penalized.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Google's spam policies: link schemes, cloaking, scaled content abuse, site reputation abuse",
              "Manual actions vs algorithmic demotions: how to tell, how to recover",
              "White, grey, and black hat: the risk spectrum of SEO tactics"
            ],
            "do": [
              "Read Google's spam policies end to end once",
              "Check a site's Manual Actions report in Search Console",
              "Audit one tactic you planned: which hat is it, honestly?"
            ],
            "tools": ["Google Search Console"],
            "res": [
              ["Google Spam Policies", "https://developers.google.com/search/docs/essentials/spam-policies"]
            ],
            "tip": "Shortcuts that work for 6 months and kill the domain are not strategies. Build on ground Google will not take away."
          }
        ]
      },
      {
        "t": "Keyword Research",
        "d": "Find the queries worth winning and the intent behind them.",
        "lv": 1,
        "children": [
          {
            "t": "Mapping Keywords to Intent",
            "d": "Group keywords by the job the searcher wants done, not by volume.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Building a keyword map: one page per intent cluster, never two pages per query",
              "Seed keywords, then expanding with modifiers (best, vs, how, near me)",
              "Avoiding cannibalization: when two pages fight over the same query"
            ],
            "do": [
              "Take 30 seed keywords and expand each into an intent-clustered list",
              "Assign every keyword to exactly one planned page",
              "Find two pages on a real site cannibalizing each other and propose the fix"
            ],
            "tools": ["Google Keyword Planner", "Ahrefs", "Semrush"],
            "res": [
              ["Google Keyword Planner", "https://ads.google.com/home/tools/keyword-planner/"]
            ],
            "tip": "Keyword cannibalization is self-inflicted. One query, one page: map it before you write a word."
          },
          {
            "t": "Volume, Difficulty & Opportunity",
            "d": "High volume means nothing if you cannot rank. Score the real opportunity.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Search volume: demand, with seasonality and trend caveats",
              "Keyword difficulty: what the metric measures and where it lies",
              "Opportunity scoring: volume x relevance x winnability"
            ],
            "do": [
              "Score 20 keywords on volume, difficulty, and relevance in a spreadsheet",
              "Compare difficulty scores across two tools for the same keyword",
              "Pick 5 keywords a new site could realistically win in 6 months"
            ],
            "tools": ["Ahrefs", "Semrush"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"],
              ["Semrush", "https://www.semrush.com"]
            ],
            "tip": "Difficulty scores are estimates, not physics. Manually inspect the top 10: weak pages mean a real opening."
          },
          {
            "t": "Long-Tail Keywords",
            "d": "Specific, low-volume queries convert better and rank faster.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The long tail: thousands of specific queries beating a few head terms",
              "Why long-tail matches AI-chat style queries naturally",
              "Building content that captures hundreds of long-tail variants"
            ],
            "do": [
              "Mine autocomplete, People Also Ask, and forums for long-tail variants of 5 head keywords",
              "Write one page targeting a long-tail cluster and track its impressions",
              "Compare conversion intent: head term vs long-tail for the same topic"
            ],
            "tools": ["Google", "AnswerThePublic"],
            "res": [
              ["Google Search Console", "https://search.google.com/search-console"]
            ],
            "tip": "New sites should live in the long tail. You cannot out-muscle giants on head terms; out-specific them instead."
          },
          {
            "t": "Reading a SERP Like an Analyst",
            "d": "The top 10 tells you the required content type, depth, and angle.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Content-type matching: listicles vs guides vs tools vs product pages",
              "Freshness signals: when recency decides the winner",
              "Authority gaps: spotting weak results you can displace"
            ],
            "do": [
              "Analyze 10 SERPs: record content type, word count, freshness, and domain strength",
              "Find one SERP where the top result is weak and explain why it is beatable",
              "Write a content brief derived purely from SERP analysis"
            ],
            "tools": ["Ahrefs", "Surfer"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "Google has already A/B tested the SERP for you. Match the winning format, then beat it on depth."
          },
          {
            "t": "Competitor Keyword Gaps",
            "d": "Find the queries competitors rank for that you do not.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Content gap analysis: their rankings minus yours",
              "Prioritizing gaps by traffic value and winnability",
              "Turning gaps into a content calendar"
            ],
            "do": [
              "Run a content gap analysis between two competing sites",
              "Prioritize the top 20 gap keywords into quick wins vs long plays",
              "Draft briefs for 5 gap keywords your site should own"
            ],
            "tools": ["Ahrefs", "Semrush"],
            "res": [
              ["Semrush", "https://www.semrush.com"]
            ],
            "tip": "Do not copy competitors' content. Steal their keyword intelligence, then write something better."
          },
          {
            "t": "Keyword Research Tool Workflow",
            "d": "A repeatable process: seed, expand, cluster, score, brief.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The end-to-end workflow from seed list to content briefs",
              "Clustering with intent, not just word overlap",
              "Free vs paid tooling: what you lose without a subscription"
            ],
            "do": [
              "Run the full workflow for one niche: 100+ keywords down to 10 briefs",
              "Document your process so someone else could repeat it",
              "Do one round with only free tools and note the gaps"
            ],
            "tools": ["Google Keyword Planner", "Search Console", "Ahrefs"],
            "res": [
              ["Google Keyword Planner", "https://ads.google.com/home/tools/keyword-planner/"]
            ],
            "tip": "Research without briefs is trivia. Every research session must end with assigned, prioritized content briefs."
          }
        ]
      },
      {
        "t": "On-Page & Content SEO",
        "d": "Make each page the undeniable best answer for its query.",
        "lv": 2,
        "children": [
          {
            "t": "Title Tags & Meta Descriptions",
            "d": "Your ad in the search results: earn the click before they arrive.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Title anatomy: primary keyword first, 50-60 characters, unique per page",
              "Meta descriptions: 150-160 characters that sell the click (Google may rewrite them)",
              "Why Google rewrites titles and how to reduce it"
            ],
            "do": [
              "Rewrite 10 titles following the keyword-first, unique, concise rules",
              "Write meta descriptions that promise a specific benefit, not keyword stuffing",
              "Check Search Console for pages where Google rewrote your title and fix the pattern"
            ],
            "tools": ["Screaming Frog", "Google Search Console"],
            "res": [
              ["Google: Title Links", "https://developers.google.com/search/docs/appearance/title-link"]
            ],
            "tip": "Google rewrites 40-60% of titles. Write titles so good it has no reason to, and check what it actually shows."
          },
          {
            "t": "Heading Structure & Readability",
            "d": "Headings are the table of contents for bots and skimmers alike.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "One H1 per page, H2s for sections, H3s for subsections",
              "Headings as keyword placement and as scannability",
              "Readability: short paragraphs, lists, and the inverted pyramid"
            ],
            "do": [
              "Audit 10 pages for heading hierarchy violations",
              "Rewrite a wall-of-text article with proper headings and lists",
              "Test readability: can a reader get the answer from headings alone?"
            ],
            "tools": ["Screaming Frog", "Hemingway App"],
            "res": [
              ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"]
            ],
            "tip": "If the headings alone do not tell the story, the structure is broken. Fix headings before touching keywords."
          },
          {
            "t": "Internal Linking Architecture",
            "d": "Links are votes and pathways: distribute authority where it matters.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Hub pages and topic clusters: pillar content supported by cluster pages",
              "Anchor text: descriptive, varied, never 'click here'",
              "Orphan pages and deep pages: finding content Google cannot reach"
            ],
            "do": [
              "Crawl a site and find orphan pages with no internal links",
              "Add contextual internal links from high-authority pages to 10 money pages",
              "Build a topic cluster map for one pillar topic"
            ],
            "tools": ["Screaming Frog", "Ahrefs"],
            "res": [
              ["Screaming Frog", "https://www.screamingfrog.co.uk/seo-spider/"]
            ],
            "tip": "Internal links are the SEO lever you fully control. Most sites leave their best pages starved of links."
          },
          {
            "t": "Image Optimization",
            "d": "Fast, descriptive images that rank in image search and do not slow the page.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Compression and modern formats (WebP, AVIF) without visible quality loss",
              "Alt text: describe the image for accessibility and relevance",
              "Filenames, lazy loading, and responsive images"
            ],
            "do": [
              "Convert a page's images to WebP and measure the size and speed difference",
              "Rewrite 20 alt texts to be descriptive, not keyword-stuffed",
              "Implement lazy loading and verify with a speed test"
            ],
            "tools": ["Squoosh", "PageSpeed Insights"],
            "res": [
              ["PageSpeed Insights", "https://pagespeed.web.dev"],
              ["Squoosh", "https://squoosh.app"]
            ],
            "tip": "Alt text is for accessibility first, SEO second. Keyword-stuffed alt text helps neither."
          },
          {
            "t": "Content Depth & Information Gain",
            "d": "Say something new. Google rewards pages that add information, not rehash it.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Information gain: the new facts, data, or angles your page adds",
              "Original research, case studies, and proprietary data as moats",
              "Comprehensiveness vs bloat: cover the topic, cut the filler"
            ],
            "do": [
              "Compare your draft against the top 3 results and list what is missing everywhere",
              "Add one original element: data, screenshot walkthrough, or expert quote",
              "Cut 20% of a bloated article without losing information"
            ],
            "tools": [],
            "res": [
              ["Google: Creating Helpful Content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"]
            ],
            "tip": "If your article could be assembled from the top 3 results, it adds nothing. Information gain is the ranking moat."
          },
          {
            "t": "Featured Snippets & SERP Features",
            "d": "Win position zero: the direct answer box above the organic results.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Snippet formats: paragraphs, lists, tables, and which queries trigger each",
              "Formatting for extraction: 40-60 word definitions, clear steps, real tables",
              "Sitelinks, knowledge panels, and review stars: what you can influence"
            ],
            "do": [
              "Find 10 snippet opportunities in your niche and format answers for them",
              "Add a concise definition block to a page and track snippet wins",
              "Use tables where the query implies comparison"
            ],
            "tools": ["Ahrefs", "Semrush"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "Snippets are stolen from pages that already rank top 10. You must rank first; the snippet is the bonus."
          }
        ]
      },
      {
        "t": "Technical SEO",
        "d": "The engineering layer: crawlability, speed, and structure machines can trust.",
        "lv": 2,
        "children": [
          {
            "t": "Site Architecture & URL Structure",
            "d": "Shallow, logical, readable: architecture that spreads authority and aids crawling.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Flat vs deep architecture: important pages within 3 clicks of home",
              "Clean URLs: short, descriptive, lowercase, hyphenated, stable",
              "Breadcrumbs as navigation and as structured data"
            ],
            "do": [
              "Map a site's click depth and list pages buried deeper than 3 clicks",
              "Rewrite 15 ugly URLs (parameters, IDs) into clean slugs with redirects",
              "Add breadcrumb markup and validate it"
            ],
            "tools": ["Screaming Frog", "Sitebulb"],
            "res": [
              ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"]
            ],
            "tip": "Changing URLs without redirects is self-sabotage. Every URL change ships with a 301, no exceptions."
          },
          {
            "t": "Robots.txt & XML Sitemaps",
            "d": "Tell crawlers where they may go and hand them a map of what matters.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Robots.txt: blocking crawlers from admin, faceted, and junk URLs",
              "XML sitemaps: the canonical list of URLs worth indexing",
              "Testing with Search Console: robots tester and sitemap reports"
            ],
            "do": [
              "Write a robots.txt that blocks /admin, /cart, and search-result pages",
              "Generate and submit an XML sitemap, then check the coverage report",
              "Find a site accidentally blocking CSS/JS in robots.txt and explain why it matters"
            ],
            "tools": ["Google Search Console", "Screaming Frog"],
            "res": [
              ["Google: Robots.txt", "https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt"]
            ],
            "tip": "Robots.txt disallow does not remove URLs from the index. For removal, use noindex or the Removals tool."
          },
          {
            "t": "Status Codes & Redirects",
            "d": "200, 301, 404, 410: the vocabulary of the healthy web.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "301 vs 302 vs 307: permanent vs temporary, and why it matters for ranking",
              "Redirect chains and loops: how they waste crawl budget and dilute signals",
              "404 vs 410 vs soft 404: telling Google what really happened"
            ],
            "do": [
              "Crawl a site and list every redirect chain longer than 2 hops; flatten them",
              "Audit 404s: which deserve a 301 to a replacement, which deserve a real 404",
              "Check Search Console for soft 404s and fix the pattern"
            ],
            "tools": ["Screaming Frog", "Google Search Console"],
            "res": [
              ["Google: Redirects", "https://developers.google.com/search/docs/crawling-indexing/301-redirects"]
            ],
            "tip": "Redirect chains of 4+ hops leak authority and crawl budget. Point every old URL directly at its final destination."
          },
          {
            "t": "Crawl Budget & Index Bloat",
            "d": "Google will not crawl infinite pages. Spend its attention on pages that earn traffic.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "What crawl budget is and which sites actually need to worry about it",
              "Index bloat: thin, duplicate, and faceted pages polluting the index",
              "Log file analysis: seeing what Googlebot really crawls"
            ],
            "do": [
              "Compare pages indexed (site: query) vs pages in sitemap; investigate the gap",
              "Noindex tag pages, thin archives, and internal search results",
              "Analyze one week of server logs for Googlebot hits on junk URLs"
            ],
            "tools": ["Screaming Frog Log Analyser", "Google Search Console"],
            "res": [
              ["Google: Crawl Budget", "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget"]
            ],
            "tip": "Faceted navigation can generate millions of URLs. One misconfigured filter set can eat your entire crawl budget."
          },
          {
            "t": "JavaScript SEO & Rendering",
            "d": "Google renders JavaScript, but with limits. Know what it sees.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "How Google renders: the two-wave indexing process and its delays",
              "SSR vs CSR vs hydration: what each means for crawlability",
              "Testing rendered output with URL Inspection and the Mobile-Friendly test"
            ],
            "do": [
              "Compare raw HTML vs rendered DOM for a JS-heavy page",
              "Use URL Inspection's 'view tested page' to see what Googlebot sees",
              "Fix one page where critical content only appears after client-side rendering"
            ],
            "tools": ["Google Search Console", "Chrome DevTools"],
            "res": [
              ["Google: JavaScript SEO Basics", "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"]
            ],
            "tip": "If content requires scrolling, clicking, or waiting to appear, assume Google will not see it. Server-render what matters."
          },
          {
            "t": "Core Web Vitals",
            "d": "LCP, INP, CLS: the speed and stability metrics Google measures on real users.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "LCP (loading), INP (interactivity), CLS (visual stability): what each measures",
              "Field data (CrUX) vs lab data: why real-user metrics decide",
              "The usual suspects: unoptimized images, render-blocking JS, layout shifts"
            ],
            "do": [
              "Run PageSpeed Insights on 5 pages and record field vs lab scores",
              "Fix the single biggest LCP offender on a page (usually a hero image)",
              "Eliminate CLS by adding dimensions to images and reserving ad space"
            ],
            "tools": ["PageSpeed Insights", "Chrome DevTools", "WebPageTest"],
            "res": [
              ["PageSpeed Insights", "https://pagespeed.web.dev"],
              ["web.dev: Web Vitals", "https://web.dev/articles/vitals"]
            ],
            "tip": "Lab scores flatter; field data decides. Optimize until the CrUX field data, not your laptop, says good."
          },
          {
            "t": "Structured Data & Schema",
            "d": "Speak Google's native language: machine-readable meaning for rich results.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "JSON-LD as the preferred format; schema.org as the vocabulary",
              "High-value types: Article, FAQ, HowTo, Product, Review, Breadcrumb, Organization",
              "Validation and the rule: markup must match visible content"
            ],
            "do": [
              "Add Article and Breadcrumb schema to a blog post and validate it",
              "Implement Product schema with price and availability on a product page",
              "Check Search Console's rich result reports for errors after deployment"
            ],
            "tools": ["Schema Markup Validator", "Google Search Console"],
            "res": [
              ["schema.org", "https://schema.org"],
              ["Google: Structured Data Intro", "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"]
            ],
            "tip": "Markup that does not match visible content is spam. Google ignores it at best and penalizes at worst."
          },
          {
            "t": "Hreflang & International SEO",
            "d": "Serve the right language and region to the right searcher.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Hreflang: telling Google which page version serves which language/region",
              "URL structures: ccTLD vs subdomain vs subfolder, and the tradeoffs",
              "Common hreflang failures: missing return links, wrong codes"
            ],
            "do": [
              "Implement hreflang for a 3-language site and validate return links",
              "Audit an international site for hreflang errors in Search Console",
              "Decide the URL structure for a new market expansion with pros and cons"
            ],
            "tools": ["Screaming Frog", "Google Search Console"],
            "res": [
              ["Google: Hreflang", "https://developers.google.com/search/docs/specialty/international/localized-versions"]
            ],
            "tip": "Hreflang errors are silent killers: wrong region served, right page invisible. Validate every return link."
          }
        ]
      },
      {
        "t": "Link Building & Authority",
        "d": "Earn the links that prove your site deserves to rank.",
        "lv": 2,
        "children": [
          {
            "t": "How Links Pass Authority",
            "d": "Not all links are equal: relevance, placement, and trust decide the value.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Link equity: how authority flows through links",
              "What makes a link valuable: relevance, editorial placement, followed vs nofollow",
              "Anchor text: natural variation vs over-optimization"
            ],
            "do": [
              "Analyze a competitor's backlink profile and identify their 10 best links",
              "Classify 30 links as high or low value with reasons",
              "Check your own anchor text distribution for over-optimization"
            ],
            "tools": ["Ahrefs", "Semrush"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "One editorial link from a relevant authority beats a hundred directory links. Chase relevance, not counts."
          },
          {
            "t": "Digital PR & Linkable Assets",
            "d": "Create things journalists and bloggers want to link to.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Linkable asset types: original studies, data visualizations, free tools, definitive guides",
              "Digital PR: newsworthy angles and journalist outreach",
              "Why 'great content' alone earns nothing without promotion"
            ],
            "do": [
              "Brainstorm 5 linkable asset ideas for a niche with journalist angles",
              "Build one small asset: a data visualization or free calculator",
              "Write a pitch email a journalist would actually open"
            ],
            "tools": ["Ahrefs", "BuzzStream"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "Nobody links to '10 tips' articles anymore. Original data and free tools are the link magnets that still work."
          },
          {
            "t": "Broken Link Building",
            "d": "Find dead links on relevant sites, offer your live page as the replacement.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Finding broken outbound links on resource pages in your niche",
              "Creating (or matching) replacement content worth linking to",
              "The outreach email: helpful, short, specific"
            ],
            "do": [
              "Find 20 broken links on relevant resource pages",
              "Prepare replacement content for the 5 best opportunities",
              "Send 10 outreach emails and track reply rates"
            ],
            "tools": ["Ahrefs", "Check My Links"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tag": "opt",
            "tip": "Scale kills this tactic: templated mass outreach gets ignored. Personalize every email or do not bother."
          },
          {
            "t": "Outreach That Gets Replies",
            "d": "Link outreach is sales: research, relevance, and respect for the recipient's time.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Prospecting: finding sites that actually link out to content like yours",
              "Personalization at scale: the one detail that proves you read their site",
              "Follow-ups: the polite sequence that doubles reply rates"
            ],
            "do": [
              "Build a prospect list of 30 sites with a reason each one might link",
              "Write 5 genuinely personalized pitches",
              "Run a 3-touch follow-up sequence and measure results"
            ],
            "tools": ["BuzzStream", "Hunter"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "If your email could be sent to anyone, it will be deleted by everyone. One specific compliment beats ten templates."
          },
          {
            "t": "Auditing Links & Disavow",
            "d": "Find toxic links pointing at you and cut them loose safely.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What makes a link toxic: spam networks, hacked sites, paid link schemes",
              "Manual review vs automated toxicity scores",
              "The disavow tool: when to use it and when to leave links alone"
            ],
            "do": [
              "Audit a backlink profile and flag 20 suspicious links with evidence",
              "Attempt removal outreach before disavowing",
              "Build a disavow file and submit it in Search Console"
            ],
            "tools": ["Google Search Console", "Ahrefs"],
            "res": [
              ["Google: Disavow Links", "https://developers.google.com/search/docs/monitoring-debug/debugging-search-traffic/disavow-links"]
            ],
            "tip": "Disavow is a scalpel, not a broom. Most sites never need it; bad disavows hurt more than bad links."
          }
        ]
      },
      {
        "t": "AI Search, GEO & AEO",
        "d": "Optimize for the answer engines: chatbots, AI overviews, and voice.",
        "lv": 3,
        "children": [
          {
            "t": "How AI Overviews & Chatbots Answer",
            "d": "Retrieval, grounding, and citation: the mechanics behind AI answers.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "RAG in plain terms: the model retrieves sources, then writes the answer",
              "Grounding vs training data: why fresh, crawlable pages still win",
              "Citation behavior: what makes a source quotable"
            ],
            "do": [
              "Ask 20 questions in an AI search tool and record which sources get cited",
              "Compare cited sources vs classic top-10: note the overlap and the gaps",
              "Identify the citation patterns: lists, statistics, definitions"
            ],
            "tools": ["Perplexity", "ChatGPT", "Google AI Overviews"],
            "res": [
              ["Google: AI Features in Search", "https://developers.google.com/search/docs/appearance/ai-features"]
            ],
            "tip": "AI answers cite sources that are clear, factual, and structured. Opinion pieces get summarized; data gets cited."
          },
          {
            "t": "Writing for AI Extraction",
            "d": "Structure content so machines can lift clean answers from it.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Direct answers first: the 40-60 word summary block",
              "Data tables, TL;DRs, and clear Q&A formatting",
              "Semantic HTML and clean structure as extraction aids"
            ],
            "do": [
              "Add TL;DR summaries and data tables to 5 existing articles",
              "Reformat one guide into explicit Q&A sections",
              "Test: ask a chatbot the article's core question and see if your page is used"
            ],
            "tools": ["Perplexity", "ChatGPT"],
            "res": [
              ["Google: AI Features in Search", "https://developers.google.com/search/docs/appearance/ai-features"]
            ],
            "tip": "Write the answer a chatbot would quote, then write the depth a human would stay for. You need both."
          },
          {
            "t": "Becoming a Cited Source",
            "d": "Original data, clear definitions, and entity authority make you quotable.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Why AI systems prefer primary sources: studies, statistics, official docs",
              "Entity SEO: being a recognized entity in the knowledge graph",
              "Brand mentions as the new backlinks in AI search"
            ],
            "do": [
              "Publish one piece of original data (survey, benchmark, analysis)",
              "Strengthen entity signals: About pages, sameAs links, Wikidata presence",
              "Track brand mentions in AI answers for your niche weekly"
            ],
            "tools": ["Wikidata", "Perplexity"],
            "res": [
              ["schema.org", "https://schema.org"]
            ],
            "tip": "In AI search, being mentioned beats being linked. Publish data worth citing and make your brand unambiguous."
          },
          {
            "t": "Measuring AI Visibility",
            "d": "Prompt coverage, citation rate, and answer share: the new analytics.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "AI visibility metrics: which prompts mention you, how often, in what position",
              "Tools for tracking: brand radar and AI monitoring platforms",
              "Zero-click attribution: valuing visibility without the visit"
            ],
            "do": [
              "Build a prompt set of 30 questions your buyers ask AI tools",
              "Run them weekly and log mentions, citations, and sentiment",
              "Report AI visibility alongside classic rankings to stakeholders"
            ],
            "tools": ["Ahrefs", "Semrush"],
            "res": [
              ["Ahrefs", "https://ahrefs.com"]
            ],
            "tip": "Rankings told you about clicks. AI visibility tells you about influence. Measure both, report both."
          },
          {
            "t": "Managing AI Crawlers",
            "d": "GPTBot, ClaudeBot, and friends: decide what AI may train on and cite.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "AI crawler user agents and their robots.txt directives",
              "Google-Extended: controlling use in AI models vs search features",
              "The tradeoff: blocking training data can cost you citations"
            ],
            "do": [
              "Audit your robots.txt for AI crawler rules and decide your policy",
              "Check server logs for GPTBot and ClaudeBot hit patterns",
              "Write a one-page AI crawler policy with business reasoning"
            ],
            "tools": ["server logs"],
            "res": [
              ["Google: AI Features in Search", "https://developers.google.com/search/docs/appearance/ai-features"]
            ],
            "tip": "Blocking all AI crawlers feels safe and costs you visibility. Decide per crawler, with reasons, not fear."
          }
        ]
      },
      {
        "t": "Analytics, Audits & Growth",
        "d": "Measure, audit, migrate, and recover: the senior operator's toolkit.",
        "lv": 3,
        "children": [
          {
            "t": "Google Search Console Mastery",
            "d": "Performance, coverage, and enhancements: your direct line to Google.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Performance report: queries, pages, CTR, and position over time",
              "Indexing reports: why pages are excluded and what to do",
              "URL Inspection, sitemaps, and the Removals tool"
            ],
            "do": [
              "Find 10 high-impression, low-CTR queries and rewrite their titles",
              "Work through every indexing exclusion reason on a real property",
              "Set up the GSC API export to BigQuery for historical analysis"
            ],
            "tools": ["Google Search Console", "BigQuery"],
            "res": [
              ["Google Search Console", "https://search.google.com/search-console"],
              ["Google: Search Console Help", "https://support.google.com/webmasters"]
            ],
            "tip": "Sort by impressions, not clicks. High impressions with low CTR are free traffic waiting for a better title."
          },
          {
            "t": "GA4 for SEO Reporting",
            "d": "Connect rankings to revenue: traffic, engagement, and conversions by channel.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Organic search as a channel: sessions, engagement, conversions",
              "Landing page reports: which SEO pages actually convert",
              "Attribution basics: SEO assists that last-click hides"
            ],
            "do": [
              "Build an SEO dashboard: organic sessions, top landing pages, conversion rate",
              "Compare landing page engagement: which content keeps users",
              "Report one insight that changed a content decision"
            ],
            "tools": ["Google Analytics", "Looker Studio"],
            "res": [
              ["Google Analytics", "https://analytics.google.com"]
            ],
            "tip": "Traffic without conversions is a vanity metric. Every SEO report should end at revenue or leads."
          },
          {
            "t": "Rank Tracking Done Right",
            "d": "Track what matters: the right keywords, locations, and devices.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Why rankings fluctuate: personalization, location, and SERP volatility",
              "Tracking setup: keyword sets, locations, devices, and competitors",
              "Reading trends, not daily noise"
            ],
            "do": [
              "Set up rank tracking for 50 priority keywords with locations",
              "Add 3 competitors and track share of voice, not just positions",
              "Write a monthly ranking narrative: what moved, why, what is next"
            ],
            "tools": ["AccuRanker", "Semrush", "Ahrefs"],
            "res": [
              ["Semrush", "https://www.semrush.com"]
            ],
            "tip": "Daily rank checking is anxiety, not strategy. Track weekly, act on trends, ignore single-day blips."
          },
          {
            "t": "The Full SEO Audit Workflow",
            "d": "Crawl, index, content, links: a systematic audit that finds everything.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "Audit phases: technical crawl, indexation, on-page, content, links, competitors",
              "Prioritization: impact vs effort matrix for findings",
              "Deliverables: the audit doc that gets implemented, not shelved"
            ],
            "do": [
              "Run a full technical crawl of a site and categorize every issue",
              "Score findings on impact vs effort and build the roadmap",
              "Present the top 10 fixes to a stakeholder in 15 minutes"
            ],
            "tools": ["Screaming Frog", "Sitebulb", "Ahrefs", "Google Search Console"],
            "res": [
              ["Screaming Frog", "https://www.screamingfrog.co.uk/seo-spider/"]
            ],
            "tip": "A 200-issue audit paralyzes teams. Ten prioritized fixes with expected impact beat two hundred listed bugs."
          },
          {
            "t": "Site Migrations Without Losing Traffic",
            "d": "Redesigns, replatforms, and domain changes: the highest-stakes SEO project.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Migration checklist: inventory, redirect mapping, staging testing",
              "Launch day protocol: what to monitor in the first 72 hours",
              "Post-migration: comparing pre/post traffic and fixing the leaks"
            ],
            "do": [
              "Build a redirect map for 50 URLs with old-to-new mapping",
              "Write a pre-launch SEO QA checklist for a staging site",
              "Draft a rollback plan with traffic-loss triggers"
            ],
            "tools": ["Screaming Frog", "Google Search Console"],
            "res": [
              ["Google: Site Moves", "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"]
            ],
            "tip": "Migrations fail on what was not inventoried. Crawl everything before launch: URLs, metadata, schema, internal links."
          },
          {
            "t": "Local SEO Essentials",
            "d": "Win 'near me': the local pack, reviews, and location pages.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Google Business Profile: categories, hours, photos, posts",
              "Reviews: velocity, responses, and why they drive the local pack",
              "Local landing pages and NAP consistency across the web"
            ],
            "do": [
              "Fully optimize a Google Business Profile for a real or fictional business",
              "Write a review response playbook (positive, negative, fake)",
              "Audit NAP consistency across 10 directories"
            ],
            "tools": ["Google Business Profile", "BrightLocal"],
            "res": [
              ["Google Business Profile", "https://www.google.com/business/"]
            ],
            "tag": "opt",
            "tip": "Reviews are the local ranking factor you can influence weekly. Ask every happy customer, respond to every review."
          },
          {
            "t": "Algorithm Updates & Recovery",
            "d": "When traffic drops overnight: diagnose, fix, and survive core updates.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Core updates vs spam updates vs helpful content: what each targets",
              "Diagnosis: correlating drops with update dates and affected page types",
              "Recovery: why there are no quick fixes, only quality improvements"
            ],
            "do": [
              "Take a traffic drop case and correlate it with known update dates",
              "Audit the affected pages against helpful-content criteria",
              "Write a recovery plan with 90-day milestones"
            ],
            "tools": ["Google Search Console", "Google Analytics"],
            "res": [
              ["Google Search Status Dashboard", "https://status.search.google.com"]
            ],
            "tip": "Chasing the update is backwards. Sites that recover are the ones that finally fix the quality issues they ignored."
          },
          {
            "t": "Capstone: Rank a Real Page",
            "d": "Take a page from invisible to ranking: research, optimize, build links, measure.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "The full loop: keyword research, brief, content, technical, links, measurement",
              "Patience and iteration: SEO compounds over months",
              "Reporting the story: from baseline to results"
            ],
            "do": [
              "Pick a real page and document its baseline (rankings, traffic, technical health)",
              "Execute: optimize on-page, fix technical issues, earn 5+ quality links",
              "Report after 60 days: what moved, what did not, what is next"
            ],
            "tools": ["Google Search Console", "Ahrefs", "Screaming Frog"],
            "res": [
              ["Google Search Console", "https://search.google.com/search-console"]
            ],
            "badge": "PROJECT",
            "tip": "This is the portfolio piece that gets you hired: a documented ranking win with before/after data."
          }
        ]
      }
    ]
  }
});
