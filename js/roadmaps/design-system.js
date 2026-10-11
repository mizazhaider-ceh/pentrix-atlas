/* Atlas roadmap data: Design System (design-system) */
ROADMAPS.push({
  "id": "design-system",
  "title": "Design System",
  "icon": "📏",
  "color": "#6d28d9",
  "desc": "Design at scale: tokens, components, documentation, tooling, and the governance that keeps systems alive.",
  "kind": "skill",
  "root": {
    "t": "Building Design Systems",
    "d": "From design tokens to governed, adopted component systems.",
    "children": [
      {
        "t": "Design System Fundamentals",
        "d": "What systems are, why they exist, and how to think in them.",
        "lv": 1,
        "children": [
          {
            "t": "What Is a Design System?",
            "d": "More than a component library: the shared language of product design.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The anatomy: design tokens, components, patterns, guidelines, and tooling working together",
              "A design system is a product serving products — with users (designers, developers) and a roadmap",
              "What it is not: a Figma file, a Sketch library, or a one-time project",
              "The spectrum from loose style guides to strict coded systems"
            ],
            "do": [
              "Write your own one-paragraph definition, then compare it against three published definitions",
              "Map a product you use to the system anatomy: find its tokens, components, and patterns",
              "List what your team repeats manually that a system could standardize",
              "Present the 'system as a product' framing to a teammate and note their objections"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"],
              ["Brad Frost: Atomic Design", "https://atomicdesign.bradfrost.com"]
            ],
            "tip": "If nobody maintains it, it's not a system — it's a snapshot. Maintenance is the difference between a system and a style guide."
          },
          {
            "t": "Why Teams Build One",
            "d": "The business case: speed, consistency, and scale.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Consistency: one button everywhere instead of 47 subtly different buttons",
              "Velocity: product teams ship features instead of rebuilding primitives",
              "Quality: accessibility and tested patterns baked in once, inherited everywhere",
              "The costs: dedicated team, governance overhead, and the risk of premature abstraction"
            ],
            "do": [
              "Audit a product for button variants; count them and photograph the inconsistencies",
              "Estimate hours spent rebuilding the same components across two teams",
              "Write a one-page pitch for a design system at a hypothetical 50-person company",
              "List three situations where a design system would be overkill"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"],
              ["NN/g on design systems", "https://www.nngroup.com"]
            ],
            "tip": "Design systems pay off at scale and cost at small scale. A three-person startup needs a Figma library, not a governance council."
          },
          {
            "t": "System vs Library vs UI Kit",
            "d": "Three related things people constantly confuse.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "UI kit: static design assets (Figma components) with no code or rules",
              "Component library: coded, reusable components — the how without the why",
              "Design system: library + tokens + documentation + guidelines + governance",
              "Pattern library: documented solutions to recurring UX problems"
            ],
            "do": [
              "Classify five famous resources (Material, Carbon, Tailwind, shadcn, Bootstrap) on this spectrum",
              "Take a component library you know and list what's missing to call it a system",
              "Explain the differences to a designer and a developer; note which clicks for whom",
              "Find a 'design system' that's really just a UI kit and articulate the gap"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Calling a component library a 'design system' sets false expectations. Name things honestly and teams will trust the roadmap."
          },
          {
            "t": "Atomic Design",
            "d": "Atoms to pages: the mental model behind component hierarchies.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The five levels: atoms, molecules, organisms, templates, pages",
              "Why the chemistry metaphor works: composition over inheritance in UI",
              "Where the model strains: real systems add tokens below atoms and patterns above pages",
              "Using atomic thinking to decide component granularity"
            ],
            "do": [
              "Decompose a checkout page into atoms → molecules → organisms on paper",
              "Take one molecule and show how it composes from atoms",
              "Debate: is a date-picker an atom or a molecule? Defend your answer",
              "Map a real design system's docs to the five levels"
            ],
            "tools": ["Figma"],
            "res": [
              ["Atomic Design by Brad Frost", "https://atomicdesign.bradfrost.com"],
              ["Brad Frost's blog", "https://bradfrost.com"]
            ],
            "tip": "Atomic Design is a thinking tool, not a folder structure. Teams that enforce the five levels as directories usually regret it."
          },
          {
            "t": "Stakeholders & Team Models",
            "d": "Who builds the system and who decides what goes in.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The core team: designers, engineers, accessibility specialists, technical writers",
              "Consumers: product teams who adopt (and sometimes resist) the system",
              "Team models: centralized, federated, and hybrid — trade-offs of each",
              "Executive sponsors: why systems die without leadership air cover"
            ],
            "do": [
              "Draft a RACI for system decisions: who proposes, builds, approves, maintains",
              "Interview (or imagine) a product engineer: what would make them adopt vs fork",
              "Compare centralized vs federated models for a 200-person org in writing",
              "List the roles your system team would need at v1"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"],
              ["NN/g on design systems", "https://www.nngroup.com"]
            ],
            "tip": "The #1 killer of design systems isn't technology — it's product teams forking components because contributing back was too slow. Fix the contribution path."
          },
          {
            "t": "Study Great Systems",
            "d": "Learn from the systems that survived scale.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Material Design 3: tokens-first, platform-spanning, heavily documented",
              "Carbon (IBM): enterprise-grade, accessibility-obsessed, open source",
              "Polaris (Shopify), Primer (GitHub), Spectrum (Adobe): different domains, shared patterns",
              "What to steal: token architecture, docs structure, contribution models — not visuals"
            ],
            "do": [
              "Read three systems' button documentation end to end; compare props, guidelines, and accessibility notes",
              "Find how each system documents 'do and don't' usage",
              "Compare their token naming schemes side by side",
              "Pick one pattern from each to adopt in your own practice system"
            ],
            "tools": [],
            "res": [
              ["Material Design 3", "https://m3.material.io"],
              ["Carbon Design System", "https://carbondesignsystem.com"],
              ["GitHub Primer", "https://primer.style"]
            ],
            "tip": "Study systems for their decisions and trade-offs, not their aesthetics. Copying Material's look teaches nothing; understanding its token tiers teaches everything."
          }
        ]
      },
      {
        "t": "Planning & Audit",
        "d": "Before building: understand what exists and what success looks like.",
        "lv": 1,
        "children": [
          {
            "t": "From Scratch or From Existing?",
            "d": "Greenfield freedom vs brownfield reality — choose deliberately.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Greenfield: define principles and tokens first, then components — clean but slow to value",
              "Brownfield: harvest patterns from the existing product — fast wins, inherited debt",
              "The strangler approach: wrap the old UI while the system grows alongside",
              "Pilot scope: one product surface to prove value before org-wide rollout"
            ],
            "do": [
              "Write the pros/cons of each approach for a hypothetical legacy product",
              "Choose a pilot surface (settings page, onboarding) and justify the choice",
              "Draft a 90-day plan: audit → tokens → 5 components → pilot adoption",
              "Identify which existing screens would be hardest to migrate and why"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Almost everyone builds brownfield. Designing the 'ideal' system while ignoring the existing product is how systems become beautiful and unused."
          },
          {
            "t": "The Visual Audit",
            "d": "Catalog the beautiful mess you actually have.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Screenshot every screen; extract every color, font size, spacing value, and radius",
              "Clustering: 47 grays become 8; 23 button styles become 3 variants",
              "Tools for extraction: Figma styles, CSS stats, design-token scrapers",
              "Presenting findings: the audit deck that makes the case for the system"
            ],
            "do": [
              "Audit a real product (or a demo app): screenshot 20 screens",
              "Extract all unique colors into a spreadsheet and cluster them",
              "Count distinct button, input, and heading styles",
              "Build a one-page 'state of the UI' summary with the worst inconsistencies highlighted"
            ],
            "tools": ["Figma", "CSS Stats"],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "The audit's job is political as much as technical: a deck showing 47 button variants convinces stakeholders faster than any architecture diagram."
          },
          {
            "t": "Component Inventory",
            "d": "From audit chaos to a prioritized component backlog.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Inventory method: list every component instance, group by function, count usage",
              "Prioritization: frequency × inconsistency × complexity — build high-value first",
              "The starter set: button, input, select, checkbox, radio, modal, tooltip, badge, card",
              "What not to build yet: snowflake components used once"
            ],
            "do": [
              "Build a component inventory spreadsheet from your audit screenshots",
              "Score components on frequency × inconsistency and rank the top 10",
              "Define the v1 component list (aim for 8-12) with rationale",
              "Identify two components to explicitly defer and write down why"
            ],
            "tools": ["Figma", "Notion"],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Start with the boring primitives everyone uses (button, input), not the sexy ones (carousel). Adoption comes from solving daily pain."
          },
          {
            "t": "Understanding the Design Process",
            "d": "How design decisions get made today — so the system fits the workflow.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Mapping the current workflow: brief → design → handoff → build → QA",
              "Where the system plugs in: libraries, tokens, review checkpoints",
              "Designer-developer handoff pain points the system must solve",
              "Regional and product-line requirements (localization, white-labeling)"
            ],
            "do": [
              "Diagram your (or a hypothetical) team's design-to-ship workflow",
              "Mark every handoff point and list what breaks there today",
              "Interview a designer about their biggest component-reuse frustration",
              "Write three workflow requirements the system must satisfy"
            ],
            "tools": [],
            "res": [
              ["NN/g on design systems", "https://www.nngroup.com"]
            ],
            "tip": "A system that ignores how designers actually work becomes shelfware. Shadow the workflow before prescribing the tooling."
          },
          {
            "t": "Setting Goals & Metrics",
            "d": "Define success before building, or success stays undefined.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Outcome goals: consistency scores, time-to-ship, accessibility conformance",
              "Adoption metrics: component coverage, teams onboarded, fork rate",
              "Health metrics: open issues, contribution velocity, docs freshness",
              "The anti-metrics: vanity counts (components built) that don't measure value"
            ],
            "do": [
              "Write 3 outcome goals with measurable targets for a hypothetical system",
              "Design a dashboard: which 6 metrics would you track weekly",
              "Define 'adoption' precisely for your org (installed? used in 80% of screens?)",
              "Set a review cadence: when do metrics trigger roadmap changes"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "'Number of components' is a vanity metric. 'Percentage of screens built from system components' measures actual value."
          }
        ]
      },
      {
        "t": "Design Language",
        "d": "Principles, voice, and brand guidance that give the system a soul.",
        "lv": 2,
        "children": [
          {
            "t": "Design Principles",
            "d": "The 3-5 sentences that settle a thousand arguments.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Good principles are opinionated and falsifiable: 'clarity over cleverness' decides real debates",
              "Writing principles from observed values, not aspirational posters",
              "Using principles in reviews: 'does this component serve clarity?'",
              "Famous examples and what makes them work (or fail)"
            ],
            "do": [
              "Draft 5 design principles for a hypothetical product, each with a concrete example",
              "Test them: run three past design decisions through your principles",
              "Cut the list to 3 — which two were expendable and why",
              "Find a company's published principles and critique one as unfalsifiable"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "If a principle can't lose an argument ('be innovative'), it's decoration. Principles earn their keep by ruling options out."
          },
          {
            "t": "Brand, Logo & Usage Guidance",
            "d": "The brand rules that keep every surface recognizably yours.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Logo system: primary, monochrome, minimum sizes, clear-space rules",
              "Usage guidance: placement, backgrounds, what never to do (stretch, recolor, rotate)",
              "File formats and delivery: SVG for digital, when raster is acceptable",
              "Co-branding and partnership lockups"
            ],
            "do": [
              "Write clear-space and minimum-size rules for a sample logo",
              "Create a 'misuse' gallery: 6 wrong logo treatments with explanations",
              "Define background rules: which logo version on light, dark, and photo",
              "Package logo assets with naming conventions a developer can consume"
            ],
            "tools": ["Figma"],
            "res": [
              ["Carbon: brand", "https://carbondesignsystem.com"],
              ["Material Design 3", "https://m3.material.io"]
            ],
            "tip": "Logo misuse galleries teach faster than rule lists. Show the stretched, recolored horrors — people remember pictures."
          },
          {
            "t": "Tone of Voice & Writing",
            "d": "The system speaks — decide what it sounds like.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Voice (personality, stable) vs tone (adapted per situation)",
              "Writing principles: plain language, active voice, sentence case",
              "Terminology lists: one name per concept across the whole product",
              "Localization readiness: writing that survives translation"
            ],
            "do": [
              "Define a voice in 3 adjectives with do/don't examples for each",
              "Rewrite five pieces of jargon-heavy UI copy in plain language",
              "Build a terminology list: 20 terms with approved definitions",
              "Write the same error message in three tones (neutral, friendly, formal) and pick"
            ],
            "tools": [],
            "res": [
              ["Material Design: communication", "https://m3.material.io"],
              ["Shopify Polaris: content", "https://polaris.shopify.com"]
            ],
            "tip": "Inconsistent terminology ('dashboard' vs 'home' vs 'overview') confuses users more than bad visual design. One concept, one name, everywhere."
          },
          {
            "t": "Microcopy Guidelines",
            "d": "Buttons, errors, and empty states: small text, huge impact.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Action-first button labels: verbs, specific outcomes ('Save changes' not 'OK')",
              "Error messages: what happened, why, and how to fix — in that order",
              "Empty states: orient, don't just decorate ('No invoices yet' + next step)",
              "Confirmation and destructive actions: clarity over cleverness"
            ],
            "do": [
              "Rewrite 10 vague button labels from a real product",
              "Write error messages for 5 failure scenarios (network, validation, permissions)",
              "Design 3 empty states with headline, explanation, and action",
              "Create a destructive-action confirmation pattern with explicit consequences"
            ],
            "tools": [],
            "res": [
              ["Shopify Polaris: content", "https://polaris.shopify.com"]
            ],
            "tip": "'Something went wrong' is a confession of defeat. Every error message should answer: what happened, why, and what to do next."
          },
          {
            "t": "Accessibility Principles",
            "d": "Bake inclusion into the language, not just the components.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "System-level a11y commitments: WCAG target level, testing requirements per component",
              "Color: contrast minimums, never color-alone signaling, dark-mode contrast",
              "Motion: reduced-motion defaults, no essential information in animation alone",
              "Inclusive language and imagery guidelines"
            ],
            "do": [
              "Write an accessibility statement for your system: level, scope, exceptions process",
              "Define the a11y checklist every component must pass before release",
              "Test your color tokens for contrast in both light and dark themes",
              "Document the reduced-motion behavior for animated components"
            ],
            "tools": ["axe DevTools", "WAVE"],
            "res": [
              ["W3C WAI", "https://www.w3.org/WAI/"],
              ["The A11Y Project", "https://www.a11yproject.com"],
              ["WAVE", "https://wave.webaim.org"]
            ],
            "tip": "Accessibility done at the system level multiplies: one accessible button component fixes every product that uses it. That's the whole argument."
          }
        ]
      },
      {
        "t": "Design Tokens",
        "d": "The atomic values — color, type, space — that power everything.",
        "lv": 2,
        "children": [
          {
            "t": "Tokens: the Atoms of the System",
            "d": "Named decisions instead of hard-coded values.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What tokens are: platform-agnostic named values (color.brand.500, space.md)",
              "The three tiers: primitive (raw values) → semantic (intent) → component (specific)",
              "Why tokens beat variables: tooling, theming, and cross-platform export",
              "The W3C Design Tokens Community Group format (DTCG) as the emerging standard"
            ],
            "do": [
              "Extract 10 hard-coded values from a stylesheet and convert them to tokens",
              "Design a 3-tier token structure for colors on paper",
              "Write tokens in DTCG JSON format for a small palette",
              "Explain to a developer why tokens aren't 'just CSS variables'"
            ],
            "tools": ["Tokens Studio", "Style Dictionary"],
            "res": [
              ["W3C Design Tokens Community Group", "https://www.w3.org/community/design-tokens/"],
              ["Tokens Studio", "https://tokens.studio"]
            ],
            "tip": "Name tokens by intent (color.action.primary), not value (blue-500). Values change; intent is stable — that's what makes theming possible."
          },
          {
            "t": "Color Tokens",
            "d": "Palettes engineered for contrast, theming, and meaning.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Building ramps: perceptually uniform steps (oklch) instead of eyeballed shades",
              "Semantic mapping: brand, neutral, success, warning, danger, info",
              "Functional colors: text, border, surface, and their hierarchy",
              "Dark mode: inverted ramps vs dedicated palettes, and contrast in both"
            ],
            "do": [
              "Build a 9-step neutral ramp in oklch with even perceptual steps",
              "Map primitive ramps to semantic tokens for light and dark themes",
              "Verify every text/background pairing meets 4.5:1 in both themes",
              "Document when to use each functional color with examples"
            ],
            "tools": ["Tokens Studio"],
            "res": [
              ["Material Design: color", "https://m3.material.io"],
              ["Carbon: color", "https://carbondesignsystem.com"]
            ],
            "tip": "Design dark mode as its own palette, not an inverted light mode. Inverted grays look muddy; purpose-built dark ramps look intentional."
          },
          {
            "t": "Typography Tokens",
            "d": "Type scales that stay consistent from caption to display.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Type scale construction: modular ratios, and which steps you actually need",
              "Tokenizing the full stack: family, size, weight, line-height, letter-spacing",
              "Responsive type: fluid scales with clamp() vs stepped scales per breakpoint",
              "Readability rules: measure, line-height ratios, and minimum sizes"
            ],
            "do": [
              "Build a 6-step type scale with a 1.25 ratio; assign each a semantic role",
              "Tokenize line-heights as ratios (1.5) not pixels, and test at extremes",
              "Make the scale fluid with clamp() and verify at 320px and 2560px",
              "Set readability guardrails: max 75ch measure, minimum 16px body"
            ],
            "tools": ["Tokens Studio"],
            "res": [
              ["Material Design: typography", "https://m3.material.io"],
              ["web.dev: typography", "https://web.dev"]
            ],
            "tip": "Tokenize the role (text.heading.lg), not the style (font-24-bold). Roles survive redesigns; pixel descriptions don't."
          },
          {
            "t": "Spacing, Sizing & Layout Tokens",
            "d": "Rhythm and structure from a shared spatial language.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Spacing scales: 4/8pt grids and why consistent increments create rhythm",
              "Sizing tokens: radii, borders, icon sizes, control heights",
              "Layout tokens: breakpoints, container widths, grid columns and gutters",
              "Elevation tokens: shadow levels tied to meaning, not decoration"
            ],
            "do": [
              "Define a spacing scale (4, 8, 12, 16, 24, 32, 48, 64) and apply it to a layout",
              "Tokenize border radii as sm/md/lg/full with usage rules",
              "Create an elevation scale of 4 shadow levels mapped to component types",
              "Audit a design for off-grid spacing values and normalize them"
            ],
            "tools": ["Tokens Studio", "Figma"],
            "res": [
              ["Carbon: spacing", "https://carbondesignsystem.com"],
              ["Material Design 3", "https://m3.material.io"]
            ],
            "tip": "Arbitrary spacing values (13px, 27px) are design debt. If a value isn't on the scale, it's either wrong or the scale is missing something — decide which."
          },
          {
            "t": "Naming & Tiering Tokens",
            "d": "The taxonomy that makes thousands of tokens navigable.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Naming conventions: category.type.item.variant.state (color.background.primary.hover)",
              "Tier discipline: primitives never used directly in components",
              "Aliases and references: semantic tokens pointing at primitives",
              "Deprecation: renaming tokens without breaking consumers"
            ],
            "do": [
              "Write a naming convention doc with 20 example token names",
              "Refactor a flat token list into 3 tiers with references",
              "Rename a token and document the migration path for consumers",
              "Review a real system's tokens and find three naming inconsistencies"
            ],
            "tools": ["Style Dictionary"],
            "res": [
              ["Style Dictionary", "https://amzn.github.io/style-dictionary/"],
              ["W3C Design Tokens Community Group", "https://www.w3.org/community/design-tokens/"]
            ],
            "tip": "Token names are an API. Renaming is a breaking change — get the taxonomy right early, because thousands of references will cement it."
          },
          {
            "t": "Token Tooling: Style Dictionary & Tokens Studio",
            "d": "From design tool to every platform, automatically.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Tokens Studio: managing tokens inside Figma with Git sync",
              "Style Dictionary: transforming token JSON into CSS, iOS, Android, and JS outputs",
              "The pipeline: design edits → tokens.json → CI → platform artifacts",
              "Single source of truth: why tokens live in version control, not in Figma alone"
            ],
            "do": [
              "Set up Tokens Studio in Figma and create a 20-token set",
              "Configure Style Dictionary to output CSS custom properties and JS modules",
              "Wire a token change through the pipeline and watch all platforms update",
              "Add token validation to CI so malformed tokens fail the build"
            ],
            "tools": ["Tokens Studio", "Style Dictionary", "Figma"],
            "res": [
              ["Tokens Studio", "https://tokens.studio"],
              ["Style Dictionary", "https://amzn.github.io/style-dictionary/"]
            ],
            "tip": "Tokens edited only in Figma drift from code within weeks. The Git-synced JSON file is the source of truth; Figma is an editor for it."
          }
        ]
      },
      {
        "t": "Core Components",
        "d": "Building the reusable UI: anatomy, states, and accessibility.",
        "lv": 2,
        "children": [
          {
            "t": "Anatomy of a Great Component",
            "d": "API design, states, and the checklist before any component ships.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Component anatomy: props API, slots/children, visual states, and behavior contracts",
              "State matrix: default, hover, focus, active, disabled, loading, error — every component, every state",
              "API design: composable primitives vs monolithic props; the prop-explosion smell",
              "The definition of done: design, code, docs, tests, and accessibility sign-off"
            ],
            "do": [
              "Write a component spec (API, states, a11y requirements) before writing any code",
              "Map the full state matrix for a button and a text input",
              "Review a component with 40 props and propose a composition-based refactor",
              "Create a definition-of-done checklist your team could adopt"
            ],
            "tools": ["Storybook", "Figma"],
            "res": [
              ["Radix UI", "https://www.radix-ui.com"],
              ["Storybook", "https://storybook.js.org"]
            ],
            "tip": "If your component needs a prop called 'variant' with 12 options, you probably have 3 components wearing a trench coat. Split them."
          },
          {
            "t": "Buttons & Form Controls",
            "d": "The highest-traffic components deserve the most rigor.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Button anatomy: variants (primary/secondary/tertiary/destructive), sizes, icons, loading states",
              "Form controls: input, select, checkbox, radio, switch — labels, hints, errors as a system",
              "Accessibility contracts: focus visibility, ARIA states, keyboard operation, error association",
              "Anatomy of a form field: label + control + hint + error as one composed unit"
            ],
            "do": [
              "Build a button with all variants and states; keyboard-test every one",
              "Compose a form-field wrapper that wires label, hint, and error automatically",
              "Implement a loading button that prevents double-submit and announces state",
              "Test your controls with a screen reader end to end"
            ],
            "tools": ["Storybook", "axe DevTools"],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["Carbon: components", "https://carbondesignsystem.com"]
            ],
            "tip": "Disabled buttons are often an accessibility trap — users can't discover why. Prefer enabled-with-validation or explain the disabled state in text."
          },
          {
            "t": "Navigation: Tabs, Dropdowns & Menus",
            "d": "Wayfinding components with tricky keyboard contracts.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Tabs: the tablist/tab/tabpanel pattern with arrow-key navigation",
              "Dropdowns and menus: button-triggered, focus management, Escape to close, type-ahead",
              "Breadcrumbs, pagination, and steppers: orientation and current-page announcement",
              "When to build vs adopt: headless libraries (Radix, Headless UI) for complex interactions"
            ],
            "do": [
              "Build accessible tabs following the APG pattern exactly",
              "Implement a dropdown menu with full keyboard support (arrows, Home/End, Escape, type-ahead)",
              "Add aria-current to breadcrumbs and pagination",
              "Compare your hand-built menu against a headless library version"
            ],
            "tools": ["Storybook"],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["Radix UI", "https://www.radix-ui.com"]
            ],
            "tip": "Keyboard interaction patterns for tabs and menus are specified, not invented. Follow the APG patterns verbatim — users' muscle memory depends on it."
          },
          {
            "t": "Feedback: Modals, Toasts & Tooltips",
            "d": "Interruptions, confirmations, and hints — used sparingly, built accessibly.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Modals: focus trap, return focus, Escape, aria-modal, and the native <dialog> option",
              "Toasts: aria-live regions, auto-dismiss timing, action support, stacking limits",
              "Tooltips: hover AND focus triggers, delay, dismissal, and when to use plain text instead",
              "Banners and empty states: persistent vs transient feedback"
            ],
            "do": [
              "Build a modal with focus trap and return-focus; test with keyboard only",
              "Implement a toast system with polite live regions and a 3-toast cap",
              "Add accessible tooltips that work for keyboard and touch users",
              "Write usage guidance: when to use modal vs inline confirmation vs toast"
            ],
            "tools": ["Storybook", "axe DevTools"],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["MDN: <dialog>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"]
            ],
            "tip": "Toasts that vanish in 3 seconds punish slow readers. Make durations generous, pause on hover/focus, and never put the only copy of critical info in a toast."
          },
          {
            "t": "Data Display: Cards, Badges & Lists",
            "d": "Presenting information clearly and consistently.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cards: anatomy (media, content, actions), when a card beats a plain list",
              "Badges, tags, and status indicators: color + text/icon, never color alone",
              "Lists: definition lists, tables vs cards for data density decisions",
              "Avatars: fallbacks (initials), status dots, and group stacking"
            ],
            "do": [
              "Build a card component with three content variants",
              "Create a status system (success/warning/error/info) with icon + text, tested in grayscale",
              "Decide table vs cards for a dataset at three viewport sizes",
              "Build avatars with image, initials-fallback, and presence indicator"
            ],
            "tools": ["Storybook", "Figma"],
            "res": [
              ["Carbon: components", "https://carbondesignsystem.com"],
              ["Material Design 3", "https://m3.material.io"]
            ],
            "tip": "Test status colors in grayscale. If success and error are indistinguishable without hue, colorblind users can't tell them apart — add icons or text."
          },
          {
            "t": "The Icon System",
            "d": "Hundreds of icons, one consistent language.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Icon design constraints: grid, stroke width, corner radius, optical sizing",
              "Delivery: SVG sprites vs icon fonts (fonts are legacy) vs individual imports",
              "Naming and keywords: findable icons (search 'delete' finds 'trash')",
              "Accessibility: decorative (aria-hidden) vs meaningful (accessible name) icons"
            ],
            "do": [
              "Define icon grid and stroke rules; redraw three inconsistent icons to match",
              "Set up an SVG sprite pipeline and use icons via <use>",
              "Add search keywords to 30 icons and test discoverability",
              "Audit icon usage: mark every decorative icon aria-hidden"
            ],
            "tools": ["Figma", "SVGO"],
            "res": [
              ["Material Design: icons", "https://m3.material.io"],
              ["Carbon: icons", "https://carbondesignsystem.com"]
            ],
            "tip": "Icon fonts are deprecated technology: they fail when fonts fail, can't multicolor, and confuse screen readers. SVG is the answer."
          }
        ]
      },
      {
        "t": "Documentation",
        "d": "The docs are the product — components without docs don't get used.",
        "lv": 3,
        "children": [
          {
            "t": "Structuring the Docs Site",
            "d": "Information architecture for a system people actually read.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Docs IA: foundations (tokens, principles) → components → patterns → resources",
              "Per-component page structure: overview, anatomy, usage, props API, accessibility, changelog",
              "Search, versioning, and deep-linking: docs must survive sharing in Slack",
              "Platforms: Docusaurus, VitePress, Storybook docs, or dedicated (Zeroheight)"
            ],
            "do": [
              "Draft the IA for a docs site with 15 components",
              "Write one complete component page following your template",
              "Set up versioned docs so v1 consumers aren't broken by v2 docs",
              "Test docs search with 5 real queries a consumer would ask"
            ],
            "tools": ["Docusaurus", "VitePress", "Zeroheight"],
            "res": [
              ["Docusaurus", "https://docusaurus.io"],
              ["VitePress", "https://vitepress.dev"],
              ["Zeroheight", "https://zeroheight.com"]
            ],
            "tip": "Nobody reads docs linearly — they arrive via search with a specific question. Every component page must answer 'how do I use this' in the first screen."
          },
          {
            "t": "Usage Guidelines: Do & Don't",
            "d": "Teach judgment, not just API.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Do/don't pairs: visual examples of correct and incorrect usage",
              "When-to-use guidance: 'use tabs for X, use an accordion for Y'",
              "Content guidelines per component: what the copy should say",
              "Anti-patterns catalog: the misuses you keep seeing, documented"
            ],
            "do": [
              "Write do/don't guidance for modal usage with visual examples",
              "Document 'when to use' for three easily-confused component pairs",
              "Collect 5 real misuses from your product and turn them into guidance",
              "Review a famous system's guidelines and steal one format idea"
            ],
            "tools": [],
            "res": [
              ["Carbon Design System", "https://carbondesignsystem.com"],
              ["Material Design 3", "https://m3.material.io"]
            ],
            "tip": "Guidelines without rationale get ignored. 'Don't use more than 3 toasts' is a rule; 'because users can't process more' is a reason people follow."
          },
          {
            "t": "Live Examples & Playgrounds",
            "d": "Docs you can touch beat docs you can only read.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Interactive prop tables: tweak knobs, see the component change",
              "Copy-paste code snippets for every example, in every supported framework",
              "Playgrounds vs curated examples: exploration vs guidance",
              "Keeping examples honest: generated from real code, not hand-written"
            ],
            "do": [
              "Add knob-controlled examples to three components in Storybook",
              "Generate code snippets from the live examples automatically",
              "Build a 'kitchen sink' page showing every component state at once",
              "Verify every docs example actually renders (test your docs)"
            ],
            "tools": ["Storybook"],
            "res": [
              ["Storybook", "https://storybook.js.org"]
            ],
            "tip": "Hand-written docs examples rot. Generate examples from the same code consumers import, or your docs will lie within months."
          },
          {
            "t": "Contribution Guidelines",
            "d": "The on-ramp that turns consumers into contributors.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "What contributions look like: new components, fixes, docs, tokens, patterns",
              "The proposal process: RFC template, design review, accessibility review",
              "Code standards: what 'done' means for a contributed component",
              "Recognition: crediting contributors to sustain the flywheel"
            ],
            "do": [
              "Write a contribution guide: from idea → proposal → build → review → release",
              "Create an RFC template for proposing new components",
              "Define the review checklist (design, code, a11y, docs)",
              "Simulate a contribution: propose a component and walk the process"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "A contribution process longer than the component is worth kills contributions. Make the happy path fast; reserve heavy review for net-new components."
          },
          {
            "t": "Versioning, Changelog & Releases",
            "d": "Evolve the system without breaking everyone's product.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Semantic versioning for UI: what counts as major (visual breaking change counts!)",
              "Changelogs that humans read: added/changed/deprecated/removed with migration notes",
              "Release cadence: scheduled trains vs continuous — and communicating either",
              "Deprecation as a feature: timelines, warnings, and codemods"
            ],
            "do": [
              "Write a changelog entry for a breaking button change with migration steps",
              "Classify 10 hypothetical changes as major/minor/patch",
              "Set up automated changelog generation (Changesets or semantic-release)",
              "Draft a deprecation notice with timeline for a component being removed"
            ],
            "tools": ["Changesets", "semantic-release"],
            "res": [
              ["Semantic Versioning", "https://semver.org"],
              ["Keep a Changelog", "https://keepachangelog.com"],
              ["Changesets", "https://changesets.com"]
            ],
            "tip": "A visual change that forces product teams to redesign is a breaking change — even if the API is identical. Version honestly or lose trust."
          }
        ]
      },
      {
        "t": "Tooling & Engineering",
        "d": "The infrastructure that builds, tests, and ships the system.",
        "lv": 3,
        "children": [
          {
            "t": "The Component Catalog (Storybook)",
            "d": "Your system's workshop, showroom, and test bench.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Storybook as the development environment: isolated component building",
              "Stories as documentation: one story per state, auto-generated docs pages",
              "Addons that matter: a11y, viewport, controls, pseudo-states",
              "Publishing Storybook as the living spec designers and PMs can browse"
            ],
            "do": [
              "Set up Storybook and write stories for 5 components covering all states",
              "Enable the a11y addon and fix every violation it surfaces",
              "Build a viewport-switching test pass for responsive components",
              "Publish Storybook and share the link as the system's front door"
            ],
            "tools": ["Storybook", "Chromatic"],
            "res": [
              ["Storybook", "https://storybook.js.org"]
            ],
            "tip": "Stories are tests you can see. A component with stories for all its states is a component that's hard to break accidentally."
          },
          {
            "t": "Testing: Unit, Visual & A11y",
            "d": "Prove the system works — on every commit.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Unit tests: component APIs, keyboard interactions, state changes (Testing Library)",
              "Visual regression: screenshot diffing (Chromatic, Percy) catches the CSS you didn't mean to change",
              "Accessibility tests in CI: axe on every story, not just on release day",
              "What not to test: implementation details that make refactors painful"
            ],
            "do": [
              "Write interaction tests for a dropdown (open, navigate, select, Escape)",
              "Set up visual regression on 10 components and review a diff",
              "Add axe checks to your Storybook stories in CI",
              "Delete a test that asserts implementation details and rewrite it behaviorally"
            ],
            "tools": ["Storybook", "Chromatic", "Playwright", "axe DevTools"],
            "res": [
              ["Chromatic", "https://www.chromatic.com"],
              ["Playwright", "https://playwright.dev"]
            ],
            "tip": "Visual regression tests are the highest-ROI tests for a design system. Most system bugs are 'it looks wrong', and screenshots catch exactly that."
          },
          {
            "t": "Build Pipeline & Distribution",
            "d": "From source to npm: how consumers actually get the system.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Package structure: what ships (dist, styles, tokens) vs what stays (stories, tests)",
              "Multi-framework reality: web components, framework wrappers, or per-framework builds",
              "Tree-shaking and side-effect-free CSS for lean consumer bundles",
              "Canary releases and staged rollouts for risky changes"
            ],
            "do": [
              "Configure a build that outputs ESM, CJS, and CSS from one source",
              "Verify tree-shaking: import one component and measure the bundle",
              "Set up a canary release channel for pre-release testing",
              "Document the install and upgrade path for consumers"
            ],
            "tools": ["Vite", "npm"],
            "res": [
              ["Vite", "https://vite.dev"],
              ["npm", "https://www.npmjs.com"]
            ],
            "tip": "If adopting your system requires a week of webpack archaeology, adoption dies. The install story is a feature — make it boring."
          },
          {
            "t": "Theming & Dark Mode",
            "d": "One codebase, many brands and modes.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Token-driven theming: swapping semantic token values per theme",
              "Dark mode strategies: media query, class toggle, and data-attribute approaches",
              "Multi-brand theming: white-labeling products from one component set",
              "Theming gotchas: images, shadows, and illustrations that don't adapt automatically"
            ],
            "do": [
              "Implement light/dark themes via token swap with no component changes",
              "Add a second brand theme (different primary, radius, type) to prove the architecture",
              "Handle non-token assets: theme-aware illustrations and shadows",
              "Persist theme choice and respect OS preference as the default"
            ],
            "tools": ["Tokens Studio", "Style Dictionary"],
            "res": [
              ["Material Design: theming", "https://m3.material.io"],
              ["web.dev: color scheme", "https://web.dev"]
            ],
            "tip": "Theme at the semantic token layer, never in components. A component referencing color.blue.500 can never theme; one referencing color.action.primary can."
          },
          {
            "t": "Design-Dev Handoff",
            "d": "Close the gap between Figma and production.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Figma libraries synced to tokens: variables, styles, and component parity",
              "Dev Mode and inspect: what developers actually need from design files",
              "Naming parity: same names in Figma and code, or handoff breaks",
              "Plugins and automation: token sync, prop documentation, status badges"
            ],
            "do": [
              "Sync Figma variables to your token JSON and verify parity",
              "Establish naming conventions shared between Figma components and code",
              "Add component status badges (stable/beta/deprecated) visible in both tools",
              "Run a handoff retro: what did developers have to guess last sprint"
            ],
            "tools": ["Figma", "Tokens Studio"],
            "res": [
              ["Figma", "https://www.figma.com"],
              ["Tokens Studio", "https://tokens.studio"]
            ],
            "tip": "Handoff breaks when Figma and code diverge. Treat the Figma library as a compiled artifact of the tokens — generated, not hand-maintained."
          }
        ]
      },
      {
        "t": "Governance & Adoption",
        "d": "Keep the system alive, used, and evolving.",
        "lv": 3,
        "children": [
          {
            "t": "Governance Models",
            "d": "Who decides what ships — and how fast.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Models: benevolent dictator, council, RFC-driven, federated ownership",
              "Decision rights: what the core team owns vs what contributors decide",
              "The intake process: triaging requests without becoming a bottleneck",
              "Escalation paths for disagreements that principles can't settle"
            ],
            "do": [
              "Write a governance doc: decision rights, intake process, meeting cadence",
              "Design an RFC process proportionate to change size (typo vs new component)",
              "Define SLAs: how fast does the core team respond to proposals",
              "Stress-test the model: walk through a controversial proposal"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Governance that can't say no fast becomes governance that says yes to everything. A clear, quick 'no' beats a six-month 'maybe'."
          },
          {
            "t": "Driving Adoption",
            "d": "The best system unused is a failed system.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Adoption barriers: migration cost, missing components, slow contribution, distrust",
              "The migration playbook: strangler pattern, codemods, dedicated support",
              "Evangelism that works: office hours, champions in product teams, visible wins",
              "Mandates vs attraction: when leadership backing helps and when it backfires"
            ],
            "do": [
              "Write a migration guide for one product surface with before/after",
              "Build a codemod (or manual recipe) for the most common migration",
              "Plan an office-hours program: format, cadence, and how questions become docs",
              "Identify adoption blockers by interviewing two skeptical engineers"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"],
              ["NN/g on design systems", "https://www.nngroup.com"]
            ],
            "tip": "Adoption follows the path of least resistance. If forking a component is easier than contributing back, engineers will fork — fix the contribution UX first."
          },
          {
            "t": "Analytics & Health Metrics",
            "d": "Measure the system like the product it is.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Component analytics: adoption rate, version spread, fork detection",
              "Usage telemetry: which components get used, which gather dust",
              "Health signals: issue backlog age, PR velocity, docs freshness, a11y conformance",
              "Reporting: the quarterly system health review stakeholders actually read"
            ],
            "do": [
              "Instrument component usage tracking in a demo app",
              "Build a dashboard mock: adoption, coverage, and health in one view",
              "Detect forks: find components copied instead of imported and interview why",
              "Write a quarterly health report template with actions, not just numbers"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Track the fork rate. Every fork is a vote of no-confidence in the system — and a requirements document for what to fix."
          },
          {
            "t": "Community: Comms, Office Hours & FAQs",
            "d": "The human layer that makes the system feel supported.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Communication channels: dedicated chat, announcements, and where questions go",
              "Office hours format: demos, Q&A, and live problem-solving",
              "FAQs as living docs: every repeated question becomes documentation",
              "Showcases: celebrating launches built on the system to fuel momentum"
            ],
            "do": [
              "Set up channel structure: #announcements, #help, #proposals, #showcase",
              "Run a mock office-hours session with prepared questions",
              "Write 10 FAQs from real (or realistic) consumer questions",
              "Plan a launch showcase: what ships, who presents, what gets celebrated"
            ],
            "tools": [],
            "res": [
              ["Design Systems", "https://www.designsystems.com"]
            ],
            "tip": "Answer a question twice in chat, write it down the third time. FAQs written from real questions stay relevant; speculative FAQs rot."
          },
          {
            "t": "Deprecation Policy",
            "d": "Removing things gracefully is a core system skill.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Why deprecation matters: cruft compounds, and old components block progress",
              "The deprecation lifecycle: announce → warn (console/lint) → migrate → remove",
              "Codemods and migration tooling: make the right path the easy path",
              "Sunsetting: what 'removed' means for version support and LTS"
            ],
            "do": [
              "Write a deprecation RFC for a hypothetical legacy component",
              "Add console warnings and lint rules flagging deprecated usage",
              "Build a codemod (or step-by-step recipe) for the migration",
              "Define your support policy: how long deprecated components keep working"
            ],
            "tools": [],
            "res": [
              ["Semantic Versioning", "https://semver.org"],
              ["Keep a Changelog", "https://keepachangelog.com"]
            ],
            "tip": "Deprecation without a migration path is abandonment. Never remove a component until the replacement is easier to adopt than the old one was to keep."
          }
        ]
      }
    ]
  }
});
