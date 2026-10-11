/* Atlas roadmap data: HTML (html) */
ROADMAPS.push({
  "id": "html",
  "title": "HTML",
  "icon": "🏷️",
  "color": "#e34f26",
  "desc": "The skeleton of the web: document structure, semantic markup, forms, media, accessibility, and SEO-ready pages.",
  "kind": "skill",
  "root": {
    "t": "HTML Fundamentals",
    "d": "From your first tags to semantic, accessible, SEO-ready pages.",
    "children": [
      {
        "t": "The Web & Your First Page",
        "d": "How pages get to browsers, and the anatomy of a document.",
        "lv": 1,
        "children": [
          {
            "t": "How the Web Works",
            "d": "Follow a page from your keystrokes to pixels on a screen.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The request/response cycle: browser asks, server answers, every click is a fresh conversation",
              "DNS turns domain names into IP addresses; hosting is simply a computer that stays online to answer",
              "What the browser does with HTML: parse into the DOM, then render it visually",
              "Anatomy of a URL: protocol, domain, path, query, fragment"
            ],
            "do": [
              "Open DevTools Network tab, reload a page, and read one request's headers and status code",
              "Sketch the journey of a page load: DNS, TCP/TLS, HTTP response, parsing, rendering",
              "Find your public IP and trace one domain to its host with an online DNS lookup",
              "Explain in one paragraph why HTML pages load even with JavaScript disabled"
            ],
            "tools": ["Chrome DevTools", "Firefox DevTools"],
            "res": [
              ["MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Web"],
              ["web.dev", "https://web.dev"]
            ],
            "tip": "Beginners treat the web as magic. The whole thing is just text files fetched over HTTP and rendered locally — once that clicks, debugging gets 10x easier."
          },
          {
            "t": "Your First HTML File",
            "d": "Write a page, open it in a browser, and edit it live.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "An HTML file is plain text with a .html extension — no build step, no server needed to start",
              "The minimal viable document: doctype, html, head, body",
              "How browsers recover gracefully from broken markup (and why you shouldn't rely on it)",
              "UTF-8 and the meta charset tag: why encoding matters from day one"
            ],
            "do": [
              "Create index.html with a heading and two paragraphs, open it in a browser",
              "Break something on purpose (unclosed tag), reload, and observe what the browser does",
              "View the page source of any website and find its doctype and charset declaration",
              "Set up a code editor with an HTML language extension and Emmet for faster writing"
            ],
            "tools": ["VS Code", "Emmet"],
            "res": [
              ["MDN: HTML basics", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
              ["WHATWG HTML Standard", "https://html.spec.whatwg.org/"]
            ],
            "tip": "Double-clicking the file to open it is fine for learning, but real sites are served over HTTP — file:// quirks (like blocked fetches) will confuse you later."
          },
          {
            "t": "Tags, Elements & Attributes",
            "d": "The vocabulary of HTML: what tags say and what attributes configure.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Tag vs element vs attribute: <p class=\"x\"> is an element made of a start tag, attributes, content, end tag",
              "Void elements (img, br, input) have no closing tag and no content",
              "Global attributes every element accepts: id, class, style, title, data-*, lang, hidden",
              "Attribute quoting rules and boolean attributes like disabled, required, checked"
            ],
            "do": [
              "Build a cheat sheet of 20 common tags with one-line descriptions in your own words",
              "Write the same element three ways: with double quotes, single quotes, and unquoted attributes — then pick the safe habit",
              "Add data-* attributes to elements and read them back in the console with dataset",
              "Find three void elements in a real site's source"
            ],
            "tools": ["VS Code", "MDN element reference"],
            "res": [
              ["MDN HTML element reference", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"],
              ["MDN Global attributes", "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes"]
            ],
            "tip": "class and id look similar but do different jobs: id is a unique identifier, class is a reusable label. Using ids for styling leads to specificity pain later."
          },
          {
            "t": "Document Anatomy: !DOCTYPE to </html>",
            "d": "The head/body split and the tags that set up every page.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "<!DOCTYPE html> triggers standards mode — without it browsers fall back to quirky 1990s rendering",
              "head holds metadata (title, charset, viewport, styles, scripts); body holds what users see",
              "The title tag is the browser tab text, the bookmark name, and a major SEO signal",
              "lang on <html> tells screen readers which pronunciation rules to use"
            ],
            "do": [
              "Write a full document skeleton from memory, then diff it against a reference",
              "Remove the doctype from a test page and compare rendering in quirks vs standards mode",
              "Set lang, title, and meta description on your page and check the tab and view-source",
              "Validate your page with the W3C validator and fix every error it reports"
            ],
            "tools": ["W3C Validator"],
            "res": [
              ["W3C Markup Validator", "https://validator.w3.org"],
              ["MDN: <head> metadata", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"]
            ],
            "tip": "The viewport meta tag (width=device-width, initial-scale=1) is the single line that makes a page mobile-usable. Forgetting it is the most common beginner mobile bug."
          },
          {
            "t": "Entities, Comments & Whitespace",
            "d": "Write < without breaking the page, and leave notes for future you.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Character references (&lt; &gt; &amp; &nbsp; &copy;) let you show markup characters as text",
              "HTML collapses whitespace: ten spaces render as one unless CSS or <pre> says otherwise",
              "Comments (<!-- -->) are visible in view-source — never put secrets or TODOs with client names in them",
              "When entities are required vs when UTF-8 lets you type the character directly"
            ],
            "do": [
              "Write a code sample on a page using entities so the tags display as text",
              "Test &nbsp; vs a normal space in a narrow container to see non-breaking behavior",
              "Add section comments to a long page, then check they don't appear in the rendered page",
              "Find an accidental HTML comment leaking internal notes on a real website"
            ],
            "tools": [],
            "res": [
              ["MDN: Character entity references", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"]
            ],
            "tip": "Comments ship to every visitor. Treat view-source as public — because it is.",
            "tag": "opt"
          },
          {
            "t": "Debugging HTML in DevTools",
            "d": "Inspect, edit, and interrogate any page's markup live.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The Elements panel shows the live DOM, not your source file — scripts may have changed it",
              "Editing markup live in DevTools for rapid experimentation without touching files",
              "The accessibility tree view: how assistive tech actually perceives your page",
              "Using the console to query elements ($0, document.querySelector) while inspecting"
            ],
            "do": [
              "Inspect five different sites and identify their header, nav, and main landmarks",
              "Edit a live page's headline text and styles in the Elements panel",
              "Find a broken layout, toggle elements off one by one until you isolate the culprit",
              "Open the accessibility inspector on your own page and read what a screen reader would announce"
            ],
            "tools": ["Chrome DevTools", "Firefox DevTools"],
            "res": [
              ["MDN: Inspecting HTML", "https://developer.mozilla.org/en-US/docs/Web"],
              ["web.dev", "https://web.dev"]
            ],
            "tip": "DevTools edits are temporary. The number one beginner panic is 'I broke the site!' — just reload and your file is untouched."
          }
        ]
      },
      {
        "t": "Core Content Elements",
        "d": "The tags that carry real content: text, links, images, lists, tables.",
        "lv": 1,
        "children": [
          {
            "t": "Headings & Paragraphs",
            "d": "Structure text so humans and machines both get the outline.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "h1–h6 form a document outline: one h1 per page, then nest levels without skipping",
              "Headings are structural, not visual — never pick h3 because it 'looks right'",
              "p for paragraphs, br only for line breaks inside content (addresses, poems), hr for thematic breaks",
              "Inline text tags: strong (importance), em (stress emphasis), small, sub/sup, mark"
            ],
            "do": [
              "Take a Wikipedia article and map its heading outline; find one page with skipped levels",
              "Build a blog post with a proper h1 → h2 → h3 outline and validate the outline with a heading-map tool",
              "Rewrite a div-soup snippet using only headings, paragraphs, and inline semantics",
              "Style headings with CSS to prove visual size and structural level are independent"
            ],
            "tools": [],
            "res": [
              ["MDN: Heading elements", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"],
              ["MDN: Paragraph element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"]
            ],
            "tip": "Skipped heading levels (h1 straight to h4) break the outline for screen reader users who navigate by headings. It is the most common semantic error on the web."
          },
          {
            "t": "Links & Navigation",
            "d": "The <a> tag is the soul of the web — learn every flavor.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Absolute vs relative URLs, and when each is the right choice",
              "Fragment links (#section) for in-page navigation and shareable anchors",
              "mailto:, tel:, and download attributes for special link behaviors",
              "target=\"_blank\" needs rel=\"noopener\" to prevent the new page from controlling yours"
            ],
            "do": [
              "Build a nav menu linking to page sections with fragment URLs and test back-button behavior",
              "Create a working mailto link with subject line and a tel: link; test on a phone",
              "Add a download attribute to a file link and observe the difference",
              "Audit a site for target=_blank links missing rel=noopener"
            ],
            "tools": [],
            "res": [
              ["MDN: <a> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"]
            ],
            "tip": "A link that goes nowhere (href=\"#\") is a button wearing a costume. If it performs an action instead of navigating, use <button>."
          },
          {
            "t": "Images",
            "d": "img done right: formats, sizing, and the alt text that matters.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Choosing formats: JPEG for photos, PNG for transparency, SVG for logos/icons, WebP/AVIF for modern compression",
              "alt text describes the image's function, not its appearance — decorative images get alt=\"\"",
              "width and height attributes reserve space and prevent layout shift (CLS)",
              "loading=\"lazy\" defers offscreen images; decoding=\"async\" keeps the main thread free"
            ],
            "do": [
              "Convert a PNG screenshot to WebP and compare file sizes at equal visual quality",
              "Write alt text for five images: informative, decorative, and functional (linked) cases",
              "Add width/height to all images on a page and measure CLS improvement in Lighthouse",
              "Lazy-load a long image gallery and watch requests fire on scroll in the Network tab"
            ],
            "tools": ["Squoosh", "Lighthouse"],
            "res": [
              ["MDN: <img> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"],
              ["web.dev: image optimization", "https://web.dev"]
            ],
            "tip": "The most common alt-text mistake is describing the image ('photo of a dog') instead of its purpose. Ask: if the image vanished, what would the reader need to know?"
          },
          {
            "t": "Lists",
            "d": "Ordered, unordered, and description lists — and nesting them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "ul for unordered, ol for ordered, li for items; nesting lists inside li, never directly in ul/ol",
              "ol attributes: start, reversed, type — and CSS list-style for custom markers",
              "dl/dt/dd for name-value groups: glossaries, FAQs, metadata",
              "Lists give screen readers count and position announcements for free"
            ],
            "do": [
              "Build a nested multi-level nav using only ul/li",
              "Create a recipe with ol (steps), ul (ingredients), and dl (nutrition facts)",
              "Style list markers with ::marker and custom counters",
              "Replace a 'list' made of divs and <br>s with a real list and compare screen reader output"
            ],
            "tools": [],
            "res": [
              ["MDN: <ul> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"],
              ["MDN: <ol> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"]
            ],
            "tip": "Screen readers announce 'list with 7 items' before reading them. Fake lists made of divs deny users that orientation — use real list markup."
          },
          {
            "t": "Tables",
            "d": "Tabular data done properly: headers, captions, and scope.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Tables are for tabular data only — layout tables are a 2005 artifact that breaks accessibility",
              "caption, thead/tbody/tfoot, th with scope=\"col\"/\"row\" for header associations",
              "colspan/rowspan for merged cells, and why they complicate screen reader navigation",
              "Making wide tables usable on mobile: horizontal scroll wrappers, not squished columns"
            ],
            "do": [
              "Build a pricing comparison table with caption, thead, th scope attributes",
              "Navigate your table with a screen reader and confirm headers are announced per cell",
              "Wrap a wide table in a scrollable container with a visible scroll hint on mobile",
              "Convert a table-based layout snippet into CSS grid to feel the difference"
            ],
            "tools": [],
            "res": [
              ["MDN: <table> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"],
              ["WebAIM: tables", "https://webaim.org"]
            ],
            "tip": "If your table needs a paragraph to explain which headers belong to which cells, the markup is wrong — fix it with proper th and scope, not prose."
          },
          {
            "t": "Grouping with div & span",
            "d": "The generic containers — powerful, but a last resort.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "div is a block-level generic container; span is its inline equivalent",
              "Every div should earn its place: if a semantic element fits, use it instead",
              "divs carry no meaning to assistive tech — a page of divs is a blank map",
              "Common legitimate uses: layout wrappers, styling hooks, JS mount points"
            ],
            "do": [
              "Take a div-soup page and replace every div that has a semantic equivalent",
              "Build a card component three ways: all divs, semantic elements, then compare the accessibility tree",
              "Use spans to style parts of a sentence without breaking the paragraph flow",
              "Count the divs on a popular site's homepage and find the deepest nesting"
            ],
            "tools": [],
            "res": [
              ["MDN: <div> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"],
              ["MDN: <span> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"]
            ],
            "tip": "'Divitis' is real: if you can delete a div and nothing changes visually or structurally, it shouldn't be there."
          }
        ]
      },
      {
        "t": "Forms: Collecting Input",
        "d": "From first input to validated, upload-capable forms.",
        "lv": 2,
        "children": [
          {
            "t": "Form Anatomy",
            "d": "How forms package user input and send it to a server.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "action and method: where data goes and GET vs POST semantics",
              "Every submittable control needs a name — without it, the value never reaches the server",
              "The default submit behavior: what happens when you press Enter in a text field",
              "GET exposes data in the URL (bookmarkable, cacheable); POST hides it in the body"
            ],
            "do": [
              "Build a search form with method=get and watch the query appear in the URL",
              "Submit a form to a request-inspection service and read the raw payload",
              "Remove the name attribute from an input and confirm its value disappears server-side",
              "Trigger implicit submission with Enter and observe which button submits"
            ],
            "tools": [],
            "res": [
              ["MDN: <form> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"]
            ],
            "tip": "GET for retrieval, POST for changes. A form that deletes data via GET is a bug waiting for a web crawler to trigger it."
          },
          {
            "t": "Labels & Inputs",
            "d": "The single most important form skill: label everything.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Explicit labels (<label for=\"id\">) vs implicit wrapping — explicit is the safe default",
              "placeholders are not labels: they vanish on typing and fail contrast and memory tests",
              "Clicking a label focuses its input — a bigger click target for everyone",
              "Grouping related controls with fieldset and legend for screen reader context"
            ],
            "do": [
              "Build a signup form where every input has an explicit label; test by clicking labels",
              "Remove all placeholders from a form and confirm it stays fully usable",
              "Group radio options in a fieldset with a legend and hear the difference in a screen reader",
              "Find a production form with unlabeled inputs and write the fix"
            ],
            "tools": [],
            "res": [
              ["MDN: <label> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"],
              ["MDN: <input> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"]
            ],
            "tip": "Placeholder-as-label is the most common form accessibility failure. If your designer insists, keep the floating label pattern — never placeholder alone."
          },
          {
            "t": "Input Types & Attributes",
            "d": "Pick the right type and get mobile keyboards and validation free.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "type=email/url/tel/number/date/color and what each unlocks (keyboards, pickers, validation)",
              "Attributes that do real work: required, minlength, min/max, pattern, inputmode, autocomplete",
              "autocomplete tokens (name, email, cc-number) that let browsers fill forms for users",
              "datalist for combo-box suggestions without JavaScript"
            ],
            "do": [
              "Build a checkout form using email, tel, number, and date types; test on a real phone",
              "Add autocomplete attributes and watch the browser offer to autofill",
              "Constrain a username field with pattern and a custom title explaining the rule",
              "Compare type=number vs inputmode=numeric for a PIN field and pick the right one"
            ],
            "tools": [],
            "res": [
              ["MDN: <input> types", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"],
              ["MDN: <datalist>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"]
            ],
            "tip": "type=number shows spinner arrows and allows 'e' for exponents — for credit cards and PINs, use inputmode=\"numeric\" with a text input instead."
          },
          {
            "t": "Select, Textarea & Choice Controls",
            "d": "Dropdowns, multi-line text, and picking one-or-many options.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "select/optgroup/option for dropdowns, including multiple and size for listboxes",
              "textarea for multi-line input: rows, cols, maxlength, and why it needs its own tag",
              "Radio groups (one choice, same name) vs checkboxes (many choices, own names or arrays)",
              "Native controls beat custom-styled fakes for accessibility — customize carefully"
            ],
            "do": [
              "Build a settings form with a grouped select, a textarea with character count, radios, and checkboxes",
              "Style native checkboxes and radios with accent-color before reaching for custom builds",
              "Make a select with optgroup sections and a disabled placeholder option",
              "Test your choice controls with keyboard only: Tab, arrows, Space"
            ],
            "tools": [],
            "res": [
              ["MDN: <select>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"],
              ["MDN: <textarea>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"]
            ],
            "tip": "Custom dropdowns are accessibility minefields (keyboard, focus, announcements). Exhaust native select styling before building your own."
          },
          {
            "t": "Built-in Form Validation",
            "d": "Free client-side validation with zero JavaScript.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Constraint validation: required, type, pattern, min/max, and step do the checking for you",
              "The :valid/:invalid CSS pseudo-classes and styling error states without JS",
              "novalidate to opt out, and the Constraint Validation API (setCustomValidity) for custom rules",
              "Client-side validation is UX, not security — the server must re-validate everything"
            ],
            "do": [
              "Build a registration form validated entirely with HTML attributes",
              "Style invalid fields with CSS and add a summary of errors at the top",
              "Use setCustomValidity for a 'passwords must match' rule",
              "Bypass client validation with curl and prove the server still rejects bad data"
            ],
            "tools": [],
            "res": [
              ["MDN: Client-side form validation", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"]
            ],
            "tip": "Never trust the browser. Client validation improves UX; server validation protects data. Both are mandatory, for different reasons."
          },
          {
            "t": "File Uploads & Form Limitations",
            "d": "Accepting files, and knowing where HTML forms stop.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "type=file with accept and multiple; enctype=multipart/form-data is required for uploads",
              "What HTML can't do: progress bars, drag-and-drop, chunking, client-side resizing need JS",
              "Server-side realities: size limits, MIME validation, virus scanning, storage",
              "Security: never trust filename or MIME type from the client"
            ],
            "do": [
              "Build a file upload form with accept filters and multiple selection",
              "Submit a large file and observe the browser's silent wait — then add a JS progress indicator",
              "Test uploading a renamed .exe as .png to prove why server-side checks matter",
              "Document the size limits of your stack (server config, not HTML)"
            ],
            "tools": [],
            "res": [
              ["MDN: <input type=file>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"]
            ],
            "tip": "The accept attribute is a UX hint, not a security control. Users can bypass it in two clicks — validate everything server-side."
          }
        ]
      },
      {
        "t": "Semantic Markup",
        "d": "Meaningful elements that help users, search engines, and assistive tech.",
        "lv": 2,
        "children": [
          {
            "t": "Why Semantics Matter",
            "d": "Meaning in markup is a feature, not decoration.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Semantic HTML gives elements meaning; presentational markup only describes appearance",
              "Three consumers of semantics: screen readers, search engines, and developer tools",
              "The accessibility tree is built from semantics — wrong elements mean wrong announcements",
              "SEO rewards semantic structure: headings, landmarks, and descriptive links"
            ],
            "do": [
              "Compare the accessibility trees of a div-based card and a semantic article-based card",
              "Run a Lighthouse SEO audit on a div-soup page, then on its semantic rewrite",
              "List every semantic element you know from memory, then check against the MDN reference",
              "Read a page using only a screen reader's element list (headings, landmarks, links)"
            ],
            "tools": ["Lighthouse"],
            "res": [
              ["MDN: Semantics", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
              ["web.dev: semantic HTML", "https://web.dev"]
            ],
            "tip": "If you can't explain why you chose <section> over <div> for a block, you probably wanted the div — or you need to learn what section actually means."
          },
          {
            "t": "Page Structure: header to footer",
            "d": "Landmark elements that map the page for everyone.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "header, nav, main, footer: the landmark roles browsers and AT expose directly",
              "section vs article vs div: sections need headings; articles are self-contained and syndicatable",
              "aside for tangentially related content; one main per page",
              "Multiple headers/footers are fine when scoped to sectioning content"
            ],
            "do": [
              "Rebuild a homepage wireframe using only landmark elements",
              "Navigate your page with a screen reader's landmark list (usually the D key in NVDA)",
              "Add aria-label to two nav landmarks to distinguish 'Primary' from 'Footer' navigation",
              "Audit a news site and find where they used div instead of article for stories"
            ],
            "tools": ["NVDA"],
            "res": [
              ["MDN: <main>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"],
              ["MDN: <article>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"]
            ],
            "tip": "<main> must not be nested inside header, nav, or footer, and there should be exactly one visible main landmark. Two mains is a landmark bug."
          },
          {
            "t": "Text-Level Semantics",
            "d": "Small tags with precise meaning: abbr, cite, time, code, and friends.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "abbr with title expands abbreviations; cite marks the title of a work, not a person",
              "time with datetime makes dates machine-readable for calendars and search",
              "code, kbd, samp, var for technical text — each with a distinct meaning",
              "b vs strong, i vs em: visual styling vs semantic importance is the whole distinction"
            ],
            "do": [
              "Mark up a technical article using code, kbd, samp, and var correctly",
              "Add datetime attributes to every date on a blog page",
              "Write a glossary entry with dfn and link to it with abbr",
              "Find a site using <i> for icons and replace with aria-hidden spans"
            ],
            "tools": [],
            "res": [
              ["MDN: <time>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"],
              ["MDN: <abbr>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"]
            ],
            "tip": "Icon fonts in <i> tags get read aloud as gibberish by screen readers. Mark decorative icons aria-hidden=\"true\" or use inline SVG."
          },
          {
            "t": "Quotes & Citations",
            "d": "blockquote, q, and cite — attribute ideas to their sources properly.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "blockquote for extended quotations, q for inline quotes (browsers add the quotation marks)",
              "The cite attribute holds the source URL — invisible but machine-readable",
              "cite element names the quoted work; never use it for a person's name alone",
              "Nested quotations and pull-quotes: styling vs semantics"
            ],
            "do": [
              "Build a testimonials section with blockquote, footer, and cite used correctly",
              "Add cite URLs to all quotations on an article page",
              "Style q elements and confirm browsers render locale-appropriate quote marks",
              "Distinguish a pull-quote (repeated decoration) from a real quotation in markup"
            ],
            "tools": [],
            "res": [
              ["MDN: <blockquote>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"],
              ["MDN: <q>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"]
            ],
            "tip": "A pull-quote that duplicates body text should be aria-hidden decoration. Reading the same quote twice is an accessibility annoyance, not a feature."
          },
          {
            "t": "Marking Changes: del, ins & s",
            "d": "Show edits, corrections, and outdated content with meaning.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "del and ins mark removed/inserted content with optional datetime and cite",
              "s marks content that is no longer accurate (old prices) — not for deletions in edits",
              "Screen readers can announce insertions and deletions when marked properly",
              "Use cases: legal documents, changelogs, price strikethroughs"
            ],
            "do": [
              "Mark up a document revision showing what changed between versions",
              "Build a sale price display with s for the old price and ins for the new one",
              "Add datetime to del/ins and style them distinctly",
              "Check how a screen reader announces your marked-up changes"
            ],
            "tools": [],
            "res": [
              ["MDN: <del>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"],
              ["MDN: <ins>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"]
            ],
            "tip": "Strikethrough via CSS text-decoration carries no meaning. If the 'oldness' matters to the reader, it matters in the markup — use <s>.",
            "tag": "opt"
          },
          {
            "t": "Figures, Captions & Media Semantics",
            "d": "figure, figcaption, and picture: images with context.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "figure groups media with its figcaption — the unit is self-contained and referable",
              "picture + source enables art direction: different crops for different viewports",
              "srcset/sizes for resolution switching: same image, right file size per device",
              "figcaption is the accessible name source — better than alt-adjacent captions"
            ],
            "do": [
              "Build a figure with image and figcaption; confirm the caption is announced with the image",
              "Implement art direction: wide crop on desktop, tight crop on mobile via <picture>",
              "Add srcset with three widths and verify the browser picks appropriately in DevTools",
              "Compare bandwidth saved with responsive images on a throttled connection"
            ],
            "tools": [],
            "res": [
              ["MDN: <picture>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"],
              ["MDN: <figure>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"]
            ],
            "tip": "Serving a 2400px hero to a 360px phone wastes ~90% of the bytes. srcset is the highest-ROI performance line in HTML."
          }
        ]
      },
      {
        "t": "Media & Embedding",
        "d": "Video, audio, iframes, and loading content responsibly.",
        "lv": 2,
        "children": [
          {
            "t": "Responsive Images in Depth",
            "d": "The right pixels for every screen, without the bloat.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Resolution switching (srcset w descriptors + sizes) vs art direction (<picture> + media)",
              "The sizes attribute is a layout promise — get it wrong and the browser picks wrong files",
              "Modern formats (AVIF/WebP) with fallbacks via <source type>",
              "fetchpriority=\"high\" for the hero image: the LCP image deserves priority"
            ],
            "do": [
              "Generate 4 widths of one photo and wire up srcset + sizes",
              "Use <picture> to serve AVIF with WebP and JPEG fallbacks",
              "Measure LCP before/after adding fetchpriority to the hero image",
              "Audit a site's images for missing sizes attributes with Lighthouse"
            ],
            "tools": ["Squoosh", "Lighthouse"],
            "res": [
              ["MDN: Responsive images", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"],
              ["web.dev: responsive images", "https://web.dev"]
            ],
            "tip": "sizes=\"100vw\" on a 300px-wide thumbnail tells the browser to download the giant version. Match sizes to your actual CSS layout."
          },
          {
            "t": "Video & Audio",
            "d": "Native media players with accessibility built in.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "video/audio with multiple <source> elements for codec fallback",
              "Captions via <track kind=\"captions\"> — required for accessibility, not optional",
              "preload values (none/metadata/auto) and their bandwidth trade-offs",
              "poster images, autoplay policies (muted only), and controls vs custom players"
            ],
            "do": [
              "Embed a video with WebM + MP4 sources and a captions track",
              "Create a valid WebVTT caption file and sync it to your video",
              "Test preload=none vs auto on a page with five videos; watch network traffic",
              "Build an audio player page and keyboard-test every control"
            ],
            "tools": [],
            "res": [
              ["MDN: <video>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"],
              ["MDN: <track>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"]
            ],
            "tip": "Autoplay with sound is blocked by every modern browser. If your video must autoplay, it must be muted — design for that from the start."
          },
          {
            "t": "Embedding with iframe",
            "d": "Third-party content without handing over your page.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "iframe embeds external pages; sandbox attribute restricts what they can do",
              "allow attribute gates features: camera, microphone, fullscreen, payment",
              "title on iframes is required for screen reader users to understand the frame",
              "Performance cost: each iframe is a full nested browsing context"
            ],
            "do": [
              "Embed a map and a video with sandbox and minimal allow permissions",
              "Break an embed by over-restricting sandbox, then loosen one permission at a time",
              "Add descriptive titles to every iframe on a page and test with a screen reader",
              "Lazy-load below-fold iframes with loading=\"lazy\" and measure the savings"
            ],
            "tools": [],
            "res": [
              ["MDN: <iframe>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"]
            ],
            "tip": "An unsandboxed iframe runs with surprising power. Default to sandbox=\"\" and add back only the permissions the embed demonstrably needs."
          },
          {
            "t": "Resource Loading Hints",
            "d": "Tell the browser what matters most, and what can wait.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "preload for critical resources, preconnect for early third-party handshakes, dns-prefetch as the cheap version",
              "fetchpriority to re-rank competing resources (hero image over below-fold scripts)",
              "loading=\"lazy\" and decoding=\"async\" as declarative performance wins",
              "Over-hinting hurts: every preload competes for bandwidth with the real critical path"
            ],
            "do": [
              "Add preconnect for your font/image CDN and measure connection-time savings",
              "Preload the hero image and one critical font; verify with the Network priority column",
              "Remove all hints, profile, then add them back one at a time to see each one's effect",
              "Find a site preloading resources it never uses and quantify the waste"
            ],
            "tools": ["Lighthouse", "WebPageTest"],
            "res": [
              ["web.dev: resource hints", "https://web.dev"],
              ["MDN: <link> preload", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"]
            ],
            "tip": "Preload is a scalpel, not a sprinkle. Hinting more than 2-3 resources usually means you haven't identified the real critical path."
          },
          {
            "t": "Content Security Policy Basics",
            "d": "A markup-level shield against XSS and injection.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "CSP declares which sources can load scripts, styles, images, and frames",
              "The meta http-equiv delivery method vs the HTTP header (header wins)",
              "Why inline scripts and event handlers break under a strict policy — and the nonce/hash fix",
              "Reading CSP violation reports to tighten policy without breaking the site"
            ],
            "do": [
              "Deploy a strict CSP via meta tag and watch your inline scripts get blocked in the console",
              "Refactor inline handlers to external scripts so the policy can stay strict",
              "Write a report-uri endpoint (or use a reporting service) and read one violation report",
              "Compare a default-allow vs default-deny policy on the same page"
            ],
            "tools": [],
            "res": [
              ["MDN: Content Security Policy", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"],
              ["web.dev: CSP", "https://web.dev"]
            ],
            "tip": "CSP via meta tag can't use frame-ancestors or report-uri, and can't upgrade to stricter. For real protection, set the header server-side."
          }
        ]
      },
      {
        "t": "Head Metadata, SEO & Performance",
        "d": "The invisible half of the page: metadata, search, and speed.",
        "lv": 2,
        "children": [
          {
            "t": "The <head> in Depth",
            "d": "Every head tag, what it does, and the order that matters.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Head ordering: charset first, then viewport, title, then CSS before render-blocking scripts",
              "Stylesheets in head, scripts at end of body or with defer — the render-blocking rules",
              "async vs defer: independent scripts vs scripts that need the DOM in order",
              "base, link relations (canonical, alternate, icon), and theme-color for mobile chrome"
            ],
            "do": [
              "Reorder a slow page's head (charset first, CSS early, scripts deferred) and measure FCP",
              "Convert blocking scripts to defer and confirm execution order is preserved",
              "Add theme-color, favicons (SVG + fallback), and a web manifest link",
              "Set a canonical URL and verify it in view-source on a paginated listing"
            ],
            "tools": ["Lighthouse"],
            "res": [
              ["MDN: <head>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"],
              ["MDN: <script>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"]
            ],
            "tip": "Charset must appear within the first 1024 bytes. A late charset declaration can be ignored by the parser — put it first, always."
          },
          {
            "t": "Social Sharing: Open Graph & Cards",
            "d": "Control how your page looks when shared anywhere.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "og:title, og:description, og:image, og:url — the four tags every page needs",
              "Twitter/X cards and why og tags usually cover them",
              "Image specs: 1200x630, absolute URLs, under size limits or previews break",
              "Testing with link preview debuggers before publishing, not after"
            ],
            "do": [
              "Add full OG tags to a page and preview the share card in a debugger",
              "Fix a broken preview: relative image URL, missing dimensions, or slow image",
              "Add og:type article with publish dates for blog content",
              "Compare your card against a competitor's and iterate on title/description copy"
            ],
            "tools": [],
            "res": [
              ["Open Graph protocol", "https://ogp.me"],
              ["MDN: <meta>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"]
            ],
            "tip": "Social crawlers don't run JavaScript reliably. If your OG tags are injected client-side, most platforms will see a blank card — render them server-side."
          },
          {
            "t": "SEO in Markup",
            "d": "The HTML signals search engines actually read.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Title tags and meta descriptions: length limits and click-through craft",
              "One h1, logical heading hierarchy, descriptive link text (never 'click here')",
              "robots meta, canonical tags, and hreflang for multi-language sites",
              "What HTML can't fix: content quality and backlinks still decide rankings"
            ],
            "do": [
              "Rewrite five titles and meta descriptions to fit pixel limits and include the keyword naturally",
              "Replace every 'click here' link with descriptive text on a sample page",
              "Add canonical tags to a site with duplicate URL variants and verify in Search Console",
              "Run a Lighthouse SEO audit and fix every markup-level issue"
            ],
            "tools": ["Lighthouse"],
            "res": [
              ["Google Search Central", "https://developers.google.com/search"],
              ["web.dev: SEO", "https://web.dev"]
            ],
            "tip": "Keyword-stuffed titles stopped working a decade ago. Write titles for humans first; the ranking follows the clicks."
          },
          {
            "t": "Structured Data Basics",
            "d": "JSON-LD that makes search results richer.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "JSON-LD in a script tag: Schema.org vocabulary without touching visible markup",
              "High-value types: Article, Product, FAQPage, BreadcrumbList, Organization",
              "Rich results eligibility: what Google actually renders from structured data",
              "Validating with the Rich Results Test before shipping"
            ],
            "do": [
              "Add Article JSON-LD to a blog post and validate it",
              "Mark up an FAQ page and check eligibility for rich results",
              "Add BreadcrumbList structured data to a product hierarchy",
              "Find a site with invalid structured data and diagnose the errors"
            ],
            "tools": [],
            "res": [
              ["Schema.org", "https://schema.org"],
              ["Google Search Central", "https://developers.google.com/search"]
            ],
            "tip": "Invisible structured data that contradicts visible content is a spam signal. Mark up what users actually see, nothing more.",
            "tag": "opt"
          },
          {
            "t": "Markup for Performance",
            "d": "HTML choices that directly move Core Web Vitals.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "LCP, CLS, INP: which HTML decisions move each metric",
              "Reserve space for images, ads, and embeds to kill layout shift",
              "Minimize DOM size: deep nesting and thousands of nodes cost real render time",
              "Semantic choices that help performance: native elements over JS-rebuilt widgets"
            ],
            "do": [
              "Audit a page's DOM node count and flatten the worst nesting",
              "Fix all CLS issues on a page using only HTML attribute changes",
              "Compare LCP of a native <img> hero vs a JS-injected background image",
              "Set a performance budget (e.g. < 1500 nodes, < 200KB HTML) and enforce it"
            ],
            "tools": ["Lighthouse", "WebPageTest"],
            "res": [
              ["web.dev: Core Web Vitals", "https://web.dev/vitals"],
              ["web.dev", "https://web.dev"]
            ],
            "tip": "The fastest JavaScript widget is the HTML element you didn't need to build. Native details, dialog, and form validation beat custom code on every metric."
          }
        ]
      },
      {
        "t": "Accessibility & Professional HTML",
        "d": "Inclusive markup and the habits of production HTML.",
        "lv": 3,
        "children": [
          {
            "t": "Accessibility Foundations",
            "d": "Build pages everyone can use, starting with HTML.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The POUR principles: Perceivable, Operable, Understandable, Robust",
              "Semantic HTML is 80% of accessibility — most ARIA exists to fix non-semantic markup",
              "Color contrast minimums (4.5:1 text) and why color alone never conveys meaning",
              "Testing with real assistive tech, not just automated checkers"
            ],
            "do": [
              "Navigate your own site keyboard-only for 15 minutes and log every trap",
              "Run axe DevTools on three pages and fix all critical issues",
              "Use a screen reader to complete your site's core task (signup, checkout, search)",
              "Check contrast ratios of all text/background pairs and fix failures"
            ],
            "tools": ["axe DevTools", "NVDA", "WAVE"],
            "res": [
              ["WAVE", "https://wave.webaim.org"],
              ["WebAIM", "https://webaim.org"],
              ["The A11Y Project", "https://www.a11yproject.com"]
            ],
            "tip": "Automated checkers catch ~30% of accessibility issues. If you only run axe and declare victory, you've tested a third of the problem."
          },
          {
            "t": "ARIA: Rules Before Roles",
            "d": "The powerful, dangerous toolkit — and when not to touch it.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The first rule of ARIA: don't use ARIA if a native element exists",
              "Roles, states, and properties: role=dialog, aria-expanded, aria-label vs aria-labelledby",
              "aria-hidden vs the hidden attribute vs CSS display:none — three different tools",
              "Live regions (aria-live) for announcing dynamic updates politely"
            ],
            "do": [
              "Build an accessible disclosure widget two ways: native <details> vs ARIA button — compare effort",
              "Add aria-expanded/aria-controls to a custom menu and test announcements",
              "Create a polite live region for form errors and an assertive one for critical alerts",
              "Find ARIA misuse on a real site (redundant roles, broken references) and write the fix"
            ],
            "tools": ["axe DevTools"],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["MDN: ARIA", "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"]
            ],
            "tip": "Bad ARIA is worse than no ARIA. A wrong role actively lies to assistive tech; a plain div at least stays silent."
          },
          {
            "t": "Keyboard Access & Focus",
            "d": "Every interaction must work without a mouse.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Natural tab order follows DOM order — CSS reordering that breaks it is a bug",
              "Focus visible styles: never remove outlines without replacing them",
              "Skip links: the two lines of HTML that save keyboard users hundreds of tabs",
              "Focus management in modals and single-page apps: trap, return, and announce"
            ],
            "do": [
              "Add a skip link to your page and verify it appears on first Tab",
              "Design a focus indicator that meets 3:1 contrast against all backgrounds",
              "Build a modal that traps focus and returns it to the trigger on close",
              "Find a focus trap or a keyboard-inaccessible widget on a real site"
            ],
            "tools": [],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["WebAIM: keyboard", "https://webaim.org"]
            ],
            "tip": "outline: none is the most hostile line in CSS. If you remove the default focus ring, you owe users a better one — no exceptions."
          },
          {
            "t": "Accessible Forms & Media",
            "d": "Error messages, required fields, and media everyone can perceive.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Associating errors with inputs via aria-describedby and aria-invalid",
              "Announcing errors: inline per-field vs a summary with focus moved to it",
              "Required fields: the required attribute plus visible, non-color-only indicators",
              "Media accessibility: captions, transcripts, and audio descriptions"
            ],
            "do": [
              "Build a form where errors are announced by screen readers on submit",
              "Add a full transcript to a podcast page and captions to a video",
              "Mark required fields accessibly and test the announcement",
              "Validate a complex form using only keyboard and screen reader"
            ],
            "tools": ["axe DevTools"],
            "res": [
              ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"],
              ["WebAIM: forms", "https://webaim.org"]
            ],
            "tip": "Red borders alone mean nothing to colorblind users or screen readers. Pair every visual error cue with text and programmatic association."
          },
          {
            "t": "Modern HTML APIs: dialog, details, template",
            "d": "Native elements that replace piles of JavaScript.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "<dialog> with showModal(): focus trapping and top-layer behavior built in",
              "<details>/<summary>: accessible disclosures with zero JavaScript",
              "<template> and <slot>-less cloning for JS-rendered content without string soup",
              "popover API and invoker commands: the newest native interactivity primitives"
            ],
            "do": [
              "Replace a JS modal with native <dialog> and delete the focus-trap code",
              "Build an FAQ accordion with <details> and style the marker",
              "Render a list from data using <template> cloning instead of innerHTML strings",
              "Check popover API support on caniuse and write a progressive-enhancement fallback"
            ],
            "tools": [],
            "res": [
              ["MDN: <dialog>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"],
              ["MDN: <details>", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"],
              ["caniuse", "https://caniuse.com"]
            ],
            "tip": "Before writing a JS component, check if HTML grew a native version. dialog, details, and popover deleted thousands of lines of jQuery-era code."
          },
          {
            "t": "Capstone: Build & Ship a Real Page",
            "d": "Put it all together: semantic, validated, accessible, and live.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Production checklist: validation, landmarks, alt text, labels, titles, meta, OG tags",
              "Linting HTML in your editor and CI so errors never ship",
              "Deploying a static page: what 'done' looks like beyond localhost",
              "Documenting your decisions: why each semantic choice was made"
            ],
            "do": [
              "Build a complete multi-section page: header/nav, hero, features, form, footer",
              "Pass W3C validation with zero errors and axe with zero criticals",
              "Keyboard-test and screen-reader-test the entire page end to end",
              "Deploy it to a static host and share the URL with link previews working"
            ],
            "tools": ["W3C Validator", "axe DevTools", "Lighthouse"],
            "res": [
              ["W3C Markup Validator", "https://validator.w3.org"],
              ["web.dev", "https://web.dev"]
            ],
            "tip": "A page isn't done when it looks right — it's done when it validates, announces correctly, works by keyboard, and loads fast on a cheap phone.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
