/* Atlas roadmap data: CSS (css) */
ROADMAPS.push({
  "id": "css",
  "title": "CSS",
  "icon": "🖌️",
  "color": "#1572b6",
  "desc": "The language of visual design on the web: selectors, layout, responsive design, motion, and maintainable architecture.",
  "kind": "skill",
  "root": {
    "t": "CSS Mastery",
    "d": "From your first styles to modern, responsive, maintainable stylesheets.",
    "children": [
      {
        "t": "CSS Foundations",
        "d": "How styles attach to markup and win conflicts.",
        "lv": 1,
        "children": [
          {
            "t": "How CSS Works: Cascade & Inheritance",
            "d": "The two mechanisms that decide every pixel's final style.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The cascade: when multiple rules match, origin, specificity, and order decide the winner",
              "Inheritance: which properties flow to children (color, font) and which don't (margin, padding)",
              "Initial, inherit, unset, and revert keywords for explicit control",
              "Why understanding the cascade prevents 90% of 'CSS is broken' moments"
            ],
            "do": [
              "Style a page, then predict which rule wins in five conflict scenarios before checking",
              "Set color on body and watch it inherit; then try the same with border to see it not inherit",
              "Use revert on an over-styled element to restore browser defaults",
              "Explain the cascade to a peer in under two minutes without notes"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["MDN: CSS cascade", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Inheritance is not the cascade. Beginners conflate them; the cascade resolves conflicts between competing rules, inheritance passes values down when no rule applies."
          },
          {
            "t": "Three Ways to Add CSS",
            "d": "Inline, internal, external — and why only one scales.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Inline styles (style attribute): highest specificity, zero reusability",
              "Internal stylesheets (<style> in head): fine for single-page experiments",
              "External stylesheets (<link>): cacheable, shareable, the production default",
              "How each method ranks in the cascade and why that matters for overrides"
            ],
            "do": [
              "Style the same page all three ways and compare maintainability",
              "Move internal styles to an external file and confirm caching in the Network tab",
              "Find a site still using inline styles for layout and note the cost",
              "Link two stylesheets and predict which wins on conflicting rules"
            ],
            "tools": [],
            "res": [
              ["MDN: <link> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"]
            ],
            "tip": "Inline styles can't use media queries, pseudo-classes, or keyframes. They're a dead end for anything beyond quick debugging."
          },
          {
            "t": "Selectors Deep Dive",
            "d": "Target exactly the elements you mean, nothing more.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Basic selectors: type, class, id, universal (*), and grouping with commas",
              "Combinators: descendant (space), child (>), adjacent sibling (+), general sibling (~)",
              "Attribute selectors: [type=\"text\"], [href^=\"https\"], [class*=\"btn\"]",
              "Selector lists and the :is()/:where()/:not() modern shortcuts"
            ],
            "do": [
              "Complete a selector exercise set: style a complex page using only combinators",
              "Rewrite an id-heavy stylesheet using classes and attribute selectors",
              "Use [data-state] attributes as styling hooks instead of extra classes",
              "Test selector performance myths: measure a deep descendant selector vs a class"
            ],
            "tools": [],
            "res": [
              ["MDN: CSS selectors", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Style with classes, not ids or deep descendant chains. An id selector's specificity will haunt every override you write after it."
          },
          {
            "t": "Specificity",
            "d": "The scoring system behind every style conflict.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Specificity weights: ids beat classes beat elements; inline styles beat them all",
              "Counting specificity: (ids, classes/attributes/pseudo-classes, elements/pseudo-elements)",
              "!important as the nuclear option — and why reaching for it signals a design problem",
              ":where() contributes zero specificity; :is() takes its most specific argument"
            ],
            "do": [
              "Score ten selectors by hand, then verify with a specificity calculator",
              "Fix a real specificity war by lowering the winner instead of raising the loser",
              "Refactor a stylesheet to keep all selectors at class-level specificity",
              "Demonstrate how :where() lets you write zero-specificity resets"
            ],
            "tools": [],
            "res": [
              ["Specificity calculator", "https://specificity.keegan.st"],
              ["MDN: Specificity", "https://developer.mozilla.org/en-US/docs/Web/CSS"]
            ],
            "tip": "If you need !important to make a style apply, the bug is in your selector architecture, not in the rule. Fix the specificity, not the symptom."
          },
          {
            "t": "The Cascade, Layers & !important",
            "d": "Modern cascade control: @layer and the origin story.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cascade origins: user-agent, author, and user styles — in what order they apply",
              "@layer: declared layer order beats specificity, taming third-party CSS",
              "Unlayered styles beat layered ones — the gotcha everyone hits once",
              "!important reverses the origin order; transitions/animations sit outside the cascade"
            ],
            "do": [
              "Organize a stylesheet into @layer reset, base, components, utilities and watch conflicts vanish",
              "Import a third-party stylesheet into a low-priority layer to guarantee your overrides win",
              "Trigger the unlayered-beats-layered gotcha on purpose, then fix it",
              "Audit a project for !important usage and eliminate each with layers or better selectors"
            ],
            "tools": [],
            "res": [
              ["MDN: @layer", "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Layers solve the 'library CSS fights my CSS' problem permanently. Declare layer order once at the top; specificity wars inside layers stay local."
          },
          {
            "t": "Debugging CSS in DevTools",
            "d": "See exactly which rules apply and which lost.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The Styles pane: matched rules in cascade order, struck-through losers, and their origins",
              "The Computed pane: the final value of every property and which rule set it",
              "Toggling properties, editing values live, and copying the result back to your file",
              "Box model overlay, grid/flex inspectors, and the :hov force-state menu"
            ],
            "do": [
              "Find why a style isn't applying: trace it through matched rules to the winner",
              "Use the Computed pane to discover an inherited value's true source",
              "Force :hover state on a menu to debug it without holding the mouse",
              "Use the flexbox/grid overlays to visualize alignment on a broken layout"
            ],
            "tools": ["Chrome DevTools", "Firefox DevTools"],
            "res": [
              ["web.dev: DevTools CSS", "https://web.dev"]
            ],
            "tip": "Struck-through rules in DevTools aren't errors — they're losers of the cascade. Read them to learn why your rule lost instead of adding !important."
          }
        ]
      },
      {
        "t": "The Box Model & Sizing",
        "d": "Every element is a box. Master the box, master layout.",
        "lv": 1,
        "children": [
          {
            "t": "The Box Model",
            "d": "Content, padding, border, margin — the four layers of every element.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The four boxes and how they stack: content inside padding inside border inside margin",
              "box-sizing: content-box (default, widths exclude padding) vs border-box (widths include it)",
              "Why border-box on everything (*) is the industry-standard reset",
              "Margin collapsing: adjacent vertical margins merge instead of adding"
            ],
            "do": [
              "Draw the box model of five elements using the DevTools overlay",
              "Build a two-column layout that breaks under content-box, then fix with border-box",
              "Demonstrate margin collapsing between siblings and between parent/child",
              "Apply the universal border-box reset and explain what it changes"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["MDN: Box model", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Margin collapsing surprises everyone once. If vertical spacing looks 'wrong', check for collapsing margins before adding more CSS."
          },
          {
            "t": "Padding, Border & Margin",
            "d": "Space inside, the edge, and space outside — used deliberately.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Padding grows the clickable/background area; margin creates space between elements",
              "Shorthand order: top, right, bottom, left (clockwise) and its 1-4 value forms",
              "Borders: style, width, color — plus border-radius for rounded corners",
              "Outline vs border: outlines don't affect layout and are the focus-ring tool"
            ],
            "do": [
              "Build a button where padding (not fixed height) defines its size",
              "Create cards with border, then with box-shadow, and compare the visual language",
              "Use margin: auto to center a fixed-width block horizontally",
              "Style focus outlines that are visible and on-brand instead of removing them"
            ],
            "tools": [],
            "res": [
              ["MDN: margin", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Padding on the parent vs margin on the child often look identical — but padding keeps backgrounds connected and margins can collapse. Choose deliberately."
          },
          {
            "t": "Width, Height & box-sizing",
            "d": "Sizing elements predictably in a fluid world.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "width/height, min-/max- constraints, and why max-width: 100% on images is essential",
              "Percentage sizing resolves against the containing block — which isn't always the parent",
              "Aspect-ratio: intrinsic proportions without padding hacks",
              "Content-based sizing: min-content, max-content, fit-content"
            ],
            "do": [
              "Build a responsive image that never overflows using max-width and aspect-ratio",
              "Create a fluid container with width: min(1200px, 90%)",
              "Compare min-content vs max-content on a navigation with long labels",
              "Fix a layout where percentage heights do nothing (the containing block has no height)"
            ],
            "tools": [],
            "res": [
              ["MDN: box-sizing", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Percentage heights only work if the parent has a definite height. When height: 100% does nothing, the parent is the suspect, not the child."
          },
          {
            "t": "Display: block, inline & friends",
            "d": "How elements participate in layout, chosen per element.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "block (full width, stacks), inline (flows in text, ignores width/height), inline-block (both)",
              "display: none removes from layout and AT; visibility: hidden keeps the space",
              "flow-root creates a block formatting context — the modern clearfix",
              "display values that create flex/grid containers (covered in the layout category)"
            ],
            "do": [
              "Convert a horizontal nav between block, inline, inline-block, and flex; note each trade-off",
              "Demonstrate display:none vs visibility:hidden vs opacity:0 with layout and screen reader tests",
              "Fix a float-collapse with display: flow-root instead of a clearfix hack",
              "Find inline elements with width set on them and explain why it's ignored"
            ],
            "tools": [],
            "res": [
              ["MDN: display", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "display: none also hides content from screen readers. For visually-hidden-but-announced text, use the .sr-only pattern, not display: none."
          },
          {
            "t": "Overflow & Sizing Edge Cases",
            "d": "What happens when content doesn't fit — and handling it gracefully.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "overflow: visible/hidden/clip/scroll/auto and the two-axis trap (one non-visible makes the other auto)",
              "Text overflow: white-space, text-overflow: ellipsis, and line-clamp for multi-line truncation",
              "overflow: clip vs hidden: clip forbids all scrolling including programmatic",
              "Containing long words and URLs: overflow-wrap, word-break, hyphens"
            ],
            "do": [
              "Build a card with line-clamp: 3 and a graceful ellipsis",
              "Fix a table cell with an unbreakable URL using overflow-wrap: anywhere",
              "Demonstrate the two-axis trap: set overflow-x: hidden and watch overflow-y change",
              "Create a scrollable code block with a sticky header inside"
            ],
            "tools": [],
            "res": [
              ["MDN: overflow", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "overflow-x: hidden on body breaks position: sticky descendants. If sticky stops sticking, look for a hidden overflow ancestor."
          },
          {
            "t": "CSS Units & Values",
            "d": "px, rem, em, %, vw, and when each is the right tool.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Absolute (px) vs relative (rem, em, %, vw/vh) — and why px still has legitimate uses (borders)",
              "rem for scalable sizing tied to the root font size; em for component-relative scaling",
              "Viewport units (vw/vh/dvh) and container query units (cqw) for fluid layouts",
              "ch/ex for typography-relative measures; lh for line-height-relative spacing"
            ],
            "do": [
              "Convert a px-based component to rem and test it at 200% browser zoom",
              "Build a button whose padding scales with its font-size using em",
              "Create a full-viewport hero with dvh and test on mobile Safari",
              "Set form input widths in ch so they fit their expected content"
            ],
            "tools": [],
            "res": [
              ["MDN: CSS values and units", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Use rem for most sizing so the whole UI respects user font-size preferences; reserve px for hairlines and borders where scaling would look wrong."
          }
        ]
      },
      {
        "t": "Typography & Color",
        "d": "Type that reads beautifully and color that works everywhere.",
        "lv": 1,
        "children": [
          {
            "t": "Fonts: Families, Loading & @font-face",
            "d": "From system stacks to custom webfonts without the flash.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "font-family stacks: preferred font, fallbacks, generic family — and why order matters",
              "@font-face: loading custom fonts with woff2, unicode-range subsetting",
              "font-display: swap to avoid invisible text (FOIT); the FOUT trade-off",
              "Variable fonts: one file, infinite weights and widths"
            ],
            "do": [
              "Write a bulletproof system font stack and a custom webfont stack",
              "Load a Google Font with display=swap and compare against display=block",
              "Subset a font with unicode-range for Latin-only content and measure the savings",
              "Test a variable font's weight axis with font-variation-settings"
            ],
            "tools": ["Google Fonts", "Fontsource"],
            "res": [
              ["Google Fonts", "https://fonts.google.com"],
              ["Fontsource", "https://fontsource.org"],
              ["web.dev: font best practices", "https://web.dev"]
            ],
            "tip": "Unstyled text flash (FOUT) beats invisible text (FOIT) every time. font-display: swap keeps content readable while fonts load."
          },
          {
            "t": "Text Styling Essentials",
            "d": "Size, weight, spacing, and alignment that make text readable.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "font-size in rem, line-height unitless (1.5) for proportional leading",
              "font-weight numeric values (100-900) and what 'bold' actually maps to",
              "letter-spacing, word-spacing, text-transform — and their accessibility caveats",
              "text-align, text-indent, and hanging punctuation for refined typography"
            ],
            "do": [
              "Set a readable measure: 45-75 characters per line with ch units",
              "Build a type scale with a modular ratio instead of arbitrary sizes",
              "Style uppercase headings accessibly (CSS transform, not typed caps, for screen readers)",
              "Fix justified text rivers with hyphens: auto and text-wrap: pretty"
            ],
            "tools": [],
            "res": [
              ["MDN: font", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "line-height in px breaks when font-size changes; unitless line-height scales proportionally. Prefer 1.4–1.6 for body text."
          },
          {
            "t": "Colors: hex, rgb, hsl & oklch",
            "d": "Color formats from legacy to perceptually uniform.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "hex, rgb(), and named colors — the classics and their alpha variants",
              "hsl(): hue/saturation/lightness — the human-friendly way to build palettes",
              "oklch(): perceptually uniform color; equal lightness steps look equal",
              "color-mix(): blending colors natively without a preprocessor"
            ],
            "do": [
              "Rebuild a palette in hsl by shifting hue while holding saturation/lightness",
              "Convert a brand palette to oklch and generate tints with color-mix()",
              "Build hover states by adjusting lightness instead of hand-picking new hexes",
              "Check contrast ratios for every text color in your palette"
            ],
            "tools": [],
            "res": [
              ["MDN: <color>", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: color", "https://web.dev"]
            ],
            "tip": "Designing in hsl/oklch makes systematic palettes trivial: same hue, stepped lightness. Hand-picked hex palettes drift into mud."
          },
          {
            "t": "Opacity & Transparency",
            "d": "See-through done right: opacity vs alpha channels.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "opacity affects the whole element including children and text",
              "Alpha channels (rgba, hsla, #rrggbbaa) make only the color transparent",
              "Transparent text over images: the contrast trap and how to test it",
              "Stacking side effects: opacity < 1 creates a new stacking context"
            ],
            "do": [
              "Compare a 50% opacity card vs a card with only its background at 50% alpha",
              "Test transparent overlay text with a contrast checker and fix failures",
              "Trigger the opacity stacking-context gotcha with positioned children",
              "Build a frosted-glass effect with backdrop-filter and a fallback"
            ],
            "tools": [],
            "res": [
              ["MDN: opacity", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["Contrast Ratio", "https://contrast-ratio.com"]
            ],
            "tip": "Need a translucent background but solid text? Put alpha on the background color, not opacity on the element — opacity fades the text too."
          },
          {
            "t": "Backgrounds",
            "d": "Colors, images, and positioning behind your content.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "background shorthand layers: color, image, position, size, repeat, attachment",
              "background-size: cover vs contain — and background-position for focal points",
              "Multiple backgrounds stacked in one declaration",
              "background-clip: text for image-filled type (with fallbacks)"
            ],
            "do": [
              "Build a hero with a cover background, gradient overlay, and positioned focal point",
              "Layer two backgrounds: a pattern over a base color",
              "Create image-filled headline text with a solid-color fallback",
              "Fix a background that tiles unexpectedly with no-repeat and proper sizing"
            ],
            "tools": [],
            "res": [
              ["MDN: background", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Text over background images needs a scrim (gradient overlay) for contrast. Beautiful photo, unreadable text is a failed hero."
          },
          {
            "t": "Gradients & Shadows",
            "d": "Depth and richness without a single image file.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "linear-, radial-, and conic-gradient syntax; color stops and hard stops",
              "box-shadow layers: offset, blur, spread, inset — building elevation systems",
              "text-shadow for depth and legibility over images",
              "Performance: shadows and gradients are GPU-friendly until overused on huge areas"
            ],
            "do": [
              "Recreate a multi-stop gradient from a design mock pixel-close",
              "Build an elevation scale (4 shadow levels) for a component library",
              "Create patterns (stripes, dots) with repeating-gradients",
              "Replace three decorative PNGs with pure CSS gradients"
            ],
            "tools": [],
            "res": [
              ["MDN: gradient", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["CSS-Tricks", "https://css-tricks.com"]
            ],
            "tip": "Hard-stop gradients (same position twice) create crisp stripes. Most 'gradient looks muddy' problems are missing hard stops or too many colors."
          }
        ]
      },
      {
        "t": "Positioning & Layout Basics",
        "d": "Placing elements precisely, then laying out whole pages.",
        "lv": 2,
        "children": [
          {
            "t": "Position: static to sticky",
            "d": "Five positioning schemes and when each earns its keep.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "static (default flow), relative (nudge from flow position, anchors absolute children)",
              "absolute (out of flow, positioned to nearest positioned ancestor)",
              "fixed (viewport-locked) and sticky (flow until threshold, then stuck)",
              "inset shorthand and the containing-block rules for each scheme"
            ],
            "do": [
              "Build a badge positioned on a card corner with absolute + relative parent",
              "Create a sticky table header and a sticky sidebar section",
              "Make a fixed header that doesn't cover anchored content (scroll-margin-top)",
              "Debug an absolute element flying to the viewport — find the missing positioned ancestor"
            ],
            "tools": [],
            "res": [
              ["MDN: position", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Absolute positioning without a positioned ancestor goes to the viewport — the classic 'my tooltip flew to the corner' bug. Set position: relative on the parent."
          },
          {
            "t": "Z-Index & Stacking Contexts",
            "d": "Why z-index: 9999 sometimes does nothing.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "z-index only works on positioned (or flex/grid) elements",
              "Stacking contexts: opacity, transform, filter, and others trap z-index locally",
              "The 9999 arms race is a symptom — flatten contexts instead",
              "Isolation and the top layer (<dialog>, popover) that escapes stacking entirely"
            ],
            "do": [
              "Reproduce the classic bug: modal under an overlay despite higher z-index",
              "Fix it by removing the transform that created the trapping context",
              "Map a page's stacking contexts in DevTools' Layers panel",
              "Replace a z-index: 9999 with a sane scale (10/20/30) after flattening"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["MDN: stacking context", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "z-index fights are almost always stacking-context traps, not number problems. Find what created the context (transform? opacity? filter?) and remove it."
          },
          {
            "t": "Floats & Legacy Layout",
            "d": "Know the old ways well enough to maintain them.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "float was designed for text wrapping around images, hijacked for layouts",
              "Clearing floats: the clearfix hack and why display: flow-root replaced it",
              "Inline-block layouts and the whitespace-between-elements quirk",
              "Reading legacy codebases: recognizing float grids and table layouts"
            ],
            "do": [
              "Build a classic float-based two-column layout, then rebuild it in flexbox",
              "Fix a collapsed container with the clearfix, then with flow-root",
              "Remove the whitespace gap between inline-block elements three different ways",
              "Refactor one legacy float component in a real codebase to modern layout"
            ],
            "tools": [],
            "res": [
              ["MDN: float", "https://developer.mozilla.org/en-US/docs/Web/CSS"]
            ],
            "tip": "Never start new layouts with floats. Learn them only to the level of reading and refactoring old code.",
            "tag": "opt"
          },
          {
            "t": "Flexbox",
            "d": "One-dimensional layout: the workhorse of component design.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Main axis vs cross axis: justify-content, align-items, and which axis each controls",
              "flex-grow/shrink/basis: how items negotiate for space (the flex shorthand)",
              "Wrapping, gap, and alignment of wrapped lines with align-content",
              "Common patterns: navbars, centering, card rows, holy-grail-ish component layouts"
            ],
            "do": [
              "Build ten classic components (navbar, media object, centering, equal columns) with flexbox",
              "Debug a flex item that won't shrink: find the min-width: auto default and override it",
              "Create a responsive card row with flex-wrap and gap, no media queries",
              "Rebuild the same layouts three ways to internalize axis thinking"
            ],
            "tools": [],
            "res": [
              ["CSS-Tricks: A Complete Guide to Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Flex items refuse to shrink past their content because min-width: auto. Set min-width: 0 (or overflow) on the item and the layout suddenly behaves."
          },
          {
            "t": "CSS Grid",
            "d": "Two-dimensional layout: rows and columns under your control.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "grid-template-columns/rows, fr units, repeat(), minmax() — the track-sizing vocabulary",
              "Line-based placement, named areas with grid-template-areas, and implicit grid",
              "auto-fit/auto-fill with minmax() for responsive grids without media queries",
              "Subgrid for aligning nested grids to the parent's tracks"
            ],
            "do": [
              "Build a 12-column page layout with named template areas",
              "Create an auto-fit card grid that reflows from 4 columns to 1 with zero media queries",
              "Place items by line numbers, then rewrite the same layout with named areas",
              "Align form labels and inputs across nested components using subgrid"
            ],
            "tools": [],
            "res": [
              ["CSS-Tricks: A Complete Guide to Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
              ["MDN: CSS grid layout", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"]
            ],
            "tip": "repeat(auto-fit, minmax(250px, 1fr)) is the single most useful line in responsive CSS. Memorize it; it replaces dozens of media queries."
          },
          {
            "t": "Choosing Flexbox vs Grid",
            "d": "The decision framework that ends the debate.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "One-dimensional distribution (flexbox) vs two-dimensional alignment (grid)",
              "Content-out (flex) vs layout-in (grid): who defines the structure",
              "Hybrid patterns: grid for page, flexbox for components inside cells",
              "When neither fits: multicol for text flow, normal flow for documents"
            ],
            "do": [
              "Take five real layouts and justify the flex/grid choice for each in writing",
              "Rebuild a flexbox card grid in CSS grid and compare the code",
              "Build a dashboard: grid shell with flexbox components nested inside",
              "Find a layout using the wrong tool and refactor it"
            ],
            "tools": [],
            "res": [
              ["web.dev: learn CSS", "https://web.dev/learn/css"],
              ["Every Layout", "https://every-layout.dev"]
            ],
            "tip": "Ask: 'do I care about both rows AND columns?' Yes → grid. Only one direction → flexbox. That one question resolves nearly every case."
          }
        ]
      },
      {
        "t": "Responsive Design",
        "d": "Interfaces that adapt gracefully to any screen.",
        "lv": 2,
        "children": [
          {
            "t": "Media Queries",
            "d": "Adapting styles to viewport capabilities.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "@media syntax: width/height ranges, orientation, resolution, and the modern range syntax",
              "Mobile-first: base styles for small screens, min-width queries that add complexity upward",
              "Beyond width: prefers-reduced-motion, prefers-color-scheme, hover/pointer detection",
              "Breakpoint discipline: content-driven breakpoints, not device-driven ones"
            ],
            "do": [
              "Convert a desktop-first stylesheet to mobile-first and compare the diff",
              "Add prefers-color-scheme dark mode to a page with zero JavaScript",
              "Disable animations for prefers-reduced-motion users",
              "Pick breakpoints by resizing until the layout breaks, not from a device list"
            ],
            "tools": ["Chrome DevTools device toolbar"],
            "res": [
              ["MDN: @media", "https://developer.mozilla.org/en-US/docs/Web/CSS/@media"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Breakpoints named after devices (tablet, desktop) rot as devices change. Name them by content need or keep them anonymous and content-derived."
          },
          {
            "t": "Mobile-First Strategy",
            "d": "Design for constraints first; enhancement is cheaper than repair.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Why mobile-first CSS is smaller and simpler: defaults are the constrained case",
              "Progressive enhancement vs graceful degradation as design philosophies",
              "Touch targets (44px+), thumb zones, and hover-free interaction design",
              "Testing on real devices and throttled networks, not just resized desktop windows"
            ],
            "do": [
              "Design a component mobile-first, then enhance at two breakpoints",
              "Audit tap targets on a page with the DevTools accessibility panel",
              "Test your layout on a real phone over throttled 4G",
              "Remove all hover-dependent interactions and make them touch-safe"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["web.dev: responsive design", "https://web.dev"],
              ["web.dev: learn design", "https://web.dev/learn/design"]
            ],
            "tip": "A resized desktop browser is not a phone test. Touch, viewport quirks, and network conditions only show up on real devices."
          },
          {
            "t": "Container Queries",
            "d": "Components that respond to their container, not the viewport.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "container-type and @container: sizing queries against the nearest container",
              "Why container queries fix the 'same component, sidebar vs full-width' problem",
              "Container query units (cqw, cqh) for container-relative sizing",
              "Style queries and the current browser support landscape"
            ],
            "do": [
              "Build a card that switches layout based on its container width, then place it in a sidebar and main column",
              "Convert a viewport-based component to container queries and delete its media queries",
              "Use cqw units for padding that scales with the component",
              "Check support on caniuse and write a @supports fallback"
            ],
            "tools": [],
            "res": [
              ["MDN: @container", "https://developer.mozilla.org/en-US/docs/Web/CSS/@container"],
              ["caniuse", "https://caniuse.com"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Container queries need an explicit container-type on the ancestor. Forgetting it is the #1 reason @container 'doesn't work'."
          },
          {
            "t": "Responsive Typography with clamp()",
            "d": "Fluid type that scales smoothly between bounds.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "clamp(min, preferred, max): the fluid-type formula in one line",
              "The classic pattern: clamp(1rem, 2.5vw + 1rem, 2.5rem) and what each part does",
              "Viewport units in type: powerful but dangerous without min/max guards",
              "Fluid spacing too: applying clamp to padding and gaps, not just fonts"
            ],
            "do": [
              "Build a fluid type scale where h1 scales from mobile to desktop with no media queries",
              "Verify minimum sizes stay readable at 320px and maximums don't explode at 4K",
              "Apply fluid spacing to a hero section with clamp()",
              "Compare fluid type vs stepped media-query type on the same design"
            ],
            "tools": [],
            "res": [
              ["web.dev: learn CSS", "https://web.dev/learn/css"],
              ["CSS-Tricks", "https://css-tricks.com"]
            ],
            "tip": "Unbounded vw-based type breaks at extremes. Always wrap viewport units in clamp() with sane min and max."
          },
          {
            "t": "Responsive Images & Art Direction",
            "d": "The CSS half of responsive imagery (pairs with HTML srcset).",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "object-fit: cover/contain — cropping images inside fixed frames without distortion",
              "object-position for controlling the focal point of the crop",
              "Aspect-ratio boxes in CSS for stable layouts before images load",
              "Background images in media queries: serving different crops per breakpoint"
            ],
            "do": [
              "Build avatar, card, and hero images with object-fit and no distortion",
              "Fix a CLS issue by reserving aspect-ratio space for lazy images",
              "Serve a cropped mobile hero via CSS background + media query",
              "Combine with HTML srcset for the full responsive-image stack"
            ],
            "tools": [],
            "res": [
              ["MDN: object-fit", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: images", "https://web.dev/learn/images"]
            ],
            "tip": "object-fit needs explicit dimensions to work against. Without a set width/height on the img, there's nothing to 'fit' into."
          },
          {
            "t": "Viewport, Touch & Meta",
            "d": "The small details that make mobile actually work.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The viewport meta tag and why initial-scale=1 matters",
              "dvh/lvh/svh: viewport units that survive mobile browser chrome",
              "Preventing double-tap zoom delays and unwanted text inflation",
              "Safe-area insets (env()) for notched devices"
            ],
            "do": [
              "Fix a 100vh hero that overflows on mobile Safari with dvh",
              "Add safe-area padding to a fixed bottom nav and test on a notched device",
              "Remove the 300ms tap delay properly (touch-action, not hacks)",
              "Audit a page for text that inflates unexpectedly on mobile"
            ],
            "tools": [],
            "res": [
              ["web.dev: responsive design", "https://web.dev"],
              ["MDN: viewport meta", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"]
            ],
            "tip": "100vh includes the area behind mobile browser chrome. On iOS Safari that means hidden content — dvh is the fix, with a vh fallback."
          }
        ]
      },
      {
        "t": "Motion & Interaction",
        "d": "Transitions, animations, and the interactive details.",
        "lv": 2,
        "children": [
          {
            "t": "Transitions",
            "d": "Smooth state changes with four properties.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "transition-property, duration, timing-function, delay — and the shorthand",
              "Easing: why ease-out feels natural and linear feels robotic",
              "Which properties animate cheaply (transform, opacity) vs expensively (width, top)",
              "Transitioning to/from auto: the grid-template-rows and interpolate-size tricks"
            ],
            "do": [
              "Build hover/focus transitions for buttons, cards, and links",
              "Compare linear vs cubic-bezier easings on the same motion",
              "Animate an accordion open/close smoothly without JavaScript height measuring",
              "Profile a width-transition vs transform-transition in DevTools performance"
            ],
            "tools": ["Chrome DevTools"],
            "res": [
              ["MDN: CSS transitions", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Animating width/height/top triggers layout on every frame. Animate transform and opacity instead — they're compositor-friendly."
          },
          {
            "t": "Keyframe Animations",
            "d": "Choreographed multi-step motion with @keyframes.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "@keyframes syntax: from/to or percentage stops, then animation shorthand to apply",
              "animation-fill-mode, direction, iteration-count, and play-state controls",
              "Chaining and staggering: delays and negative delays for orchestrated motion",
              "Respecting prefers-reduced-motion: the media query that disables non-essential animation"
            ],
            "do": [
              "Build a loading spinner, a skeleton shimmer, and an entrance animation",
              "Stagger a list entrance with incremental animation-delays",
              "Pause/play an animation on hover with animation-play-state",
              "Wrap all animations in prefers-reduced-motion guards"
            ],
            "tools": [],
            "res": [
              ["MDN: CSS animations", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Every animation you ship must have a reduced-motion off-ramp. Vestibular disorders are real; decorative motion should never be mandatory."
          },
          {
            "t": "Transforms",
            "d": "Move, scale, and rotate without disturbing layout.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "translate, scale, rotate, skew — and why transforms don't trigger reflow",
              "transform-origin: the pivot point that changes everything",
              "3D transforms: perspective, rotateX/Y, backface-visibility for card flips",
              "Individual transform properties (translate/rotate/scale) vs the shorthand"
            ],
            "do": [
              "Build a card flip, a sliding drawer, and a zoom-on-hover gallery",
              "Fix a transform-origin surprise on a rotating badge",
              "Combine transforms with transitions for buttery hover effects",
              "Use the individual transform properties to animate rotation independently of translation"
            ],
            "tools": [],
            "res": [
              ["MDN: transform", "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Transforms create stacking contexts and containing blocks for fixed descendants. If fixed positioning breaks inside an animated element, the transform is why."
          },
          {
            "t": "Pseudo-Classes & Pseudo-Elements",
            "d": "Styling states and virtual elements without extra markup.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "State pseudo-classes: :hover, :focus-visible, :active, :checked, :disabled",
              "Structural: :nth-child(), :first-of-type, :empty, :only-child",
              "::before/::after with content: decorative elements with zero markup",
              "::marker, ::selection, ::placeholder, ::first-line for fine typographic control"
            ],
            "do": [
              "Style form states (:valid, :invalid, :required, :placeholder-shown) with no JS",
              "Build tooltips, badges, and decorative shapes with ::before/::after",
              "Use :focus-visible so mouse users see no ring but keyboard users do",
              "Stripe a table and highlight empty states with structural pseudo-classes"
            ],
            "tools": [],
            "res": [
              ["MDN: Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": ":focus-visible is the correct default for focus styles — :focus shows rings on mouse click too, which is why people wrongly remove outlines."
          },
          {
            "t": "Filters, Blend Modes & Masks",
            "d": "Photoshop-grade effects in pure CSS.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "filter: blur, grayscale, brightness, drop-shadow() — and filter vs box-shadow",
              "mix-blend-mode and background-blend-mode for rich compositing",
              "mask-image with gradients for fades and shaped reveals",
              "Performance cost: filters on large areas or animations can tank frame rates"
            ],
            "do": [
              "Build duotone image effects with grayscale + mix-blend-mode overlays",
              "Create text-fade masks on overflowing content with mask-image",
              "Animate a blur-in effect and profile its cost",
              "Replace three Photoshop-exported effects with live CSS"
            ],
            "tools": [],
            "res": [
              ["MDN: filter", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["CSS-Tricks", "https://css-tricks.com"]
            ],
            "tip": "drop-shadow() follows alpha (great for PNGs/SVGs); box-shadow draws a box. Picking the wrong one is why shadows look wrong on irregular shapes.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Modern CSS",
        "d": "The new platform: variables, functions, and queries.",
        "lv": 3,
        "children": [
          {
            "t": "Custom Properties (Variables)",
            "d": "Themable, cascading design values — not Sass variables.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "--brand: value declaration, var(--brand, fallback) consumption",
              "Unlike preprocessor variables: they cascade, inherit, and change at runtime",
              "@property for typed custom properties that can transition and animate",
              "Theming architecture: semantic tokens (--color-surface) over raw values"
            ],
            "do": [
              "Build a theme switcher (light/dark) by redefining variables on [data-theme]",
              "Scope variables per component for encapsulated variants",
              "Register a --angle property with @property and animate a conic gradient",
              "Refactor hard-coded colors to a semantic token layer"
            ],
            "tools": [],
            "res": [
              ["MDN: Using CSS custom properties", "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Custom properties are resolved at use-time, not definition-time. Setting --x inside a media query changes every var(--x) consumer — that's the superpower and the footgun."
          },
          {
            "t": "CSS Functions: calc, min, max, clamp",
            "d": "Math in your stylesheets for truly fluid design.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "calc() for mixed-unit math: width: calc(100% - 2rem)",
              "min()/max() for bounded values without media queries",
              "clamp() as the fluid-design workhorse (type, spacing, container widths)",
              "Nesting functions and the whitespace rules calc() enforces around operators"
            ],
            "do": [
              "Build a sidebar layout with calc() that needs no breakpoints",
              "Replace five media queries with min()/max()/clamp() equivalents",
              "Create fluid gutters: padding: clamp(1rem, 5vw, 3rem)",
              "Debug a broken calc() — find the missing spaces around the operator"
            ],
            "tools": [],
            "res": [
              ["MDN: calc()", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "calc(100%-2rem) is invalid — operators need spaces. It's the most common calc bug and the error is silent: the whole declaration is dropped."
          },
          {
            "t": "Nesting & Cascade Layers",
            "d": "Sass-like nesting, natively — with cascade implications.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Native nesting syntax: .card { & .title { } } and when & is required",
              "Nesting increases specificity — each level adds to the score",
              "Combining nesting with @layer for organized, conflict-free architecture",
              "Browser support and the PostCSS fallback story for older browsers"
            ],
            "do": [
              "Rewrite a BEM component with native nesting; compare specificity before/after",
              "Organize a stylesheet: layers for architecture, nesting for readability",
              "Find a nesting-induced specificity bug and flatten it",
              "Set up PostCSS nesting fallback and verify output for older browsers"
            ],
            "tools": ["PostCSS"],
            "res": [
              ["MDN: CSS nesting", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "Deep nesting looks clean but bloats specificity exactly like Sass did. Nest for readability, but keep it shallow — two levels max."
          },
          {
            "t": "Logical Properties & RTL",
            "d": "Write direction-agnostic CSS that works in every language.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Physical (margin-left) vs logical (margin-inline-start): the mental model shift",
              "inline/block axes adapt to writing-mode and direction automatically",
              "Full logical set: inset, padding, border, size, text-align: start/end",
              "Testing RTL: dir=\"rtl\" flips and what still needs manual attention (shadows, icons)"
            ],
            "do": [
              "Convert a component from physical to logical properties",
              "Flip a page to RTL and verify spacing, borders, and alignment mirror correctly",
              "Find icons/arrows that need mirroring in RTL and handle them",
              "Build a multilingual demo toggling dir between ltr and rtl"
            ],
            "tools": [],
            "res": [
              ["MDN: Logical properties", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": "margin-inline-start in an RTL document is the right margin. If your CSS only works in LTR, it's unfinished CSS — logical properties fix it once."
          },
          {
            "t": ":has() & Modern Selectors",
            "d": "Parent selection and relational styling, finally.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              ":has() — the 'parent selector': style elements based on their descendants",
              "Practical :has() patterns: conditional layouts, empty-state styling, form validation UX",
              ":is(), :where(), :not() with selector lists for compact, low-specificity selectors",
              "Performance notes: :has() is powerful; keep its scope narrow"
            ],
            "do": [
              "Style a card differently when it contains an image: .card:has(img)",
              "Build a form where the submit button enables visually via :has(:invalid)",
              "Create quantity-aware layouts (1 vs many children) with :has() + :nth-child",
              "Refactor verbose selector lists with :is() and measure the specificity change"
            ],
            "tools": [],
            "res": [
              ["MDN: :has()", "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"],
              ["web.dev: learn CSS", "https://web.dev/learn/css"]
            ],
            "tip": ":has() can't be nested inside itself in some engines and is the most expensive selector to evaluate — scope it to a class, never to *."
          },
          {
            "t": "Scroll-Driven & View Transitions",
            "d": "Cinematic effects with (almost) no JavaScript.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Scroll-driven animations: animation-timeline: scroll() and view()",
              "Parallax, progress bars, and reveal-on-scroll in pure CSS",
              "View Transitions API: smooth page/state transitions the browser choreographs",
              "@starting-style for entry transitions on newly rendered elements"
            ],
            "do": [
              "Build a scroll progress bar and parallax hero with scroll timelines",
              "Add view transitions to a SPA navigation and compare with JS animation",
              "Create reveal-on-scroll cards with view() timelines",
              "Gate everything behind @supports with a no-motion fallback"
            ],
            "tools": [],
            "res": [
              ["MDN: scroll-driven animations", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
              ["web.dev", "https://web.dev"]
            ],
            "tip": "These APIs are still rolling out across browsers. Build the static experience first, then layer scroll-driven motion as enhancement.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Architecture & Performance",
        "d": "CSS at scale: methodologies, tooling, and speed.",
        "lv": 3,
        "children": [
          {
            "t": "BEM & Naming Conventions",
            "d": "Naming that keeps large stylesheets sane.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "BEM: Block__Element--Modifier and what each part communicates",
              "Why flat class specificity (all single classes) makes overrides predictable",
              "Alternatives: SMACSS categories, OOCSS separation, CUBE CSS composition",
              "Naming as documentation: a class name should explain its job"
            ],
            "do": [
              "Refactor a messy stylesheet to strict BEM and note the specificity flattening",
              "Name ten components from a design mock using BEM, then critique the names",
              "Compare the same UI in BEM vs utility-first to feel the trade-offs",
              "Write a naming convention doc for a hypothetical team"
            ],
            "tools": [],
            "res": [
              ["BEM methodology", "https://getbem.com"],
              ["CUBE CSS", "https://cube.fyi"]
            ],
            "tip": "BEM's verbosity is the point: .card__title--featured tells you the component, part, and variant. Clever short names save typing and cost understanding."
          },
          {
            "t": "Sass & Preprocessors",
            "d": "Variables, mixins, and functions — and what native CSS replaced.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Sass features: variables, nesting, mixins, functions, partials, @use/@forward modules",
              "What native CSS has absorbed: variables, nesting, and soon mixins/functions",
              "When Sass still wins: complex functions, loops for generated utilities, legacy codebases",
              "Dart Sass as the canonical implementation; node-sass is dead"
            ],
            "do": [
              "Build a small design-token system in Sass with maps and @each generation",
              "Write a mixin for breakpoints and one for accessible visually-hidden text",
              "Migrate Sass variables to CSS custom properties where runtime theming helps",
              "Audit which Sass features your project actually needs vs native CSS"
            ],
            "tools": ["Sass", "Vite"],
            "res": [
              ["Sass documentation", "https://sass-lang.com/documentation/"],
              ["Sass", "https://sass-lang.com"]
            ],
            "tip": "New projects in 2026 need Sass less than ever — native nesting and custom properties cover most use cases. Reach for it for logic (loops, functions), not variables."
          },
          {
            "t": "PostCSS & the Build Pipeline",
            "d": "Transform CSS with plugins: autoprefixing to minification.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "PostCSS as a plugin platform: parse, transform, generate",
              "Essential plugins: autoprefixer, postcss-preset-env (future CSS today), cssnano",
              "Where PostCSS sits: Vite/webpack pipelines, and Tailwind as a PostCSS plugin",
              "Lightning CSS as the fast Rust-based alternative"
            ],
            "do": [
              "Set up PostCSS with preset-env and write tomorrow's CSS in today's browsers",
              "Configure autoprefixer with browserslist and watch prefixes appear/disappear",
              "Add cssnano and measure the minification savings",
              "Compare build times: PostCSS vs Lightning CSS on a large stylesheet"
            ],
            "tools": ["PostCSS", "Vite", "Lightning CSS"],
            "res": [
              ["PostCSS", "https://postcss.org"],
              ["Lightning CSS", "https://lightningcss.dev"]
            ],
            "tip": "Autoprefixer reads your browserslist. An outdated browserslist means shipping prefixes for dead browsers — keep it current."
          },
          {
            "t": "CSS Modules & Scoped Styles",
            "d": "Component-scoped CSS without the cascade leaking.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "CSS Modules: locally-scoped class names generated at build time",
              "composes for sharing styles between modules without duplication",
              "Scoped styles in frameworks: Vue <style scoped>, Svelte styles, Astro scoped",
              "CSS-in-JS (styled-components, Emotion): runtime scoping and its performance cost"
            ],
            "do": [
              "Build two components with identical class names in CSS Modules — confirm no collision",
              "Use composes to share a button base across variants",
              "Compare bundle output: CSS Modules vs CSS-in-JS runtime for the same UI",
              "Decide a scoping strategy for a new project and document the rationale"
            ],
            "tools": ["Vite"],
            "res": [
              ["CSS Modules", "https://github.com/css-modules/css-modules"],
              ["styled-components", "https://styled-components.com"]
            ],
            "tip": "CSS-in-JS trades runtime cost for colocation. For most apps, build-time scoping (Modules) plus custom properties gives the same DX without the JS tax."
          },
          {
            "t": "CSS Performance",
            "d": "Stylesheets that don't slow the page down.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Render-blocking CSS: critical CSS inlining and deferring the rest",
              "Containment (contain, content-visibility) for skipping offscreen rendering work",
              "Expensive properties: box-shadow blur, filters, and backdrop-filter on large areas",
              "Unused CSS: coverage analysis, PurgeCSS, and the Tailwind JIT approach"
            ],
            "do": [
              "Extract critical CSS for above-the-fold content and measure FCP improvement",
              "Apply content-visibility: auto to long lists and profile rendering time",
              "Run Coverage in DevTools, find dead CSS, and remove or purge it",
              "Profile a backdrop-filter blur on mobile and decide if the effect is worth the cost"
            ],
            "tools": ["Chrome DevTools", "Lighthouse"],
            "res": [
              ["web.dev: CSS performance", "https://web.dev"],
              ["PurgeCSS", "https://purgecss.com"]
            ],
            "tip": "content-visibility: auto can cut rendering work dramatically on long pages — but it needs contain-intrinsic-size to avoid scrollbar jumping."
          },
          {
            "t": "Accessible CSS",
            "d": "Styles that include everyone: motion, contrast, and focus.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "prefers-reduced-motion: disabling or toning down animation respectfully",
              "Contrast in CSS: color choices, forced-colors mode, and Windows High Contrast",
              "Focus visibility: :focus-visible styling that survives every theme",
              "Content that CSS hides: display vs visibility vs visually-hidden techniques"
            ],
            "do": [
              "Add a reduced-motion stylesheet that kills parallax, autoplay, and smooth scrolling",
              "Test your UI in forced-colors mode and fix disappearing elements",
              "Build focus styles with 3:1 contrast against adjacent colors",
              "Implement a correct visually-hidden utility class and prove it announces"
            ],
            "tools": ["axe DevTools"],
            "res": [
              ["The A11Y Project", "https://www.a11yproject.com"],
              ["web.dev: accessibility", "https://web.dev/learn/accessibility"]
            ],
            "tip": "Test with forced-colors: active once. Box-shadows vanish, backgrounds flatten — if your UI depends on them for meaning, high-contrast users lose information."
          }
        ]
      }
    ]
  }
});
