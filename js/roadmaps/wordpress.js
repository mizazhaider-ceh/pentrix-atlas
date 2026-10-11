/* Atlas roadmap data: WordPress (wordpress)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "wordpress",
  "title": "WordPress",
  "icon": "📰",
  "color": "#21759B",
  "desc": "From first install to professional WordPress engineering: block themes, Gutenberg block development, plugin architecture, performance, hardening, and shipping client sites.",
  "kind": "skill",
  "root": {
    "t": "WordPress",
    "d": "Master the CMS behind 40%+ of the web, from content editing to themes, plugins, and production operations.",
    "children": [
      {
        "t": "WordPress Foundations",
        "d": "What WordPress is, the .com vs .org split, and your first local install.",
        "lv": 1,
        "children": [
          {
            "t": "What Is WordPress & the CMS Idea",
            "d": "A content management system: why most sites separate content from code.",
            "lv": 1,
            "time": "~2h",
            "tip": "WordPress powers over 40% of all websites, dismissing it as 'just blogs' means dismissing a huge job market.",
            "learn": [
              "CMS concept: content in a database, presentation in themes, behavior in plugins",
              "WordPress's scale: market share, the plugin/theme ecosystem, and where the work is",
              "Posts vs pages vs custom content: the mental model before the dashboard"
            ],
            "do": [
              "List five sites you visit and guess which run WordPress (check with a detector)",
              "Read the WordPress.org about page and note the four freedoms of open source",
              "Sketch how a blog post flows from database to browser"
            ],
            "tools": ["WordPress", "BuiltWith"],
            "res": [
              ["WordPress.org", "https://wordpress.org"],
              ["WordPress Documentation", "https://wordpress.org/documentation/"]
            ]
          },
          {
            "t": "WordPress.com vs WordPress.org",
            "d": "Hosted service vs self-hosted software, the choice that decides what you can build.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "WordPress.com: managed hosting with plan-based limits on plugins and code",
              "WordPress.org: the free software you install anywhere, full control, full responsibility",
              "Which to recommend to a client, and why developers learn on .org"
            ],
            "do": [
              "Compare the Business plan limits against a $5 VPS install",
              "List three things you can do on .org that no .com plan allows",
              "Decide which you would pick for a portfolio site and write down why"
            ],
            "tools": ["WordPress.com", "WordPress.org"],
            "res": [
              ["WordPress.com", "https://wordpress.com"]
            ]
          },
          {
            "t": "How the Web Works (Crash Course)",
            "d": "Just enough HTTP, DNS, and hosting to understand what you're installing.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "DNS → server → PHP + MySQL → HTML: the WordPress request path",
              "HTTP basics: requests, responses, status codes",
              "What a host provides: PHP version, MySQL, and file storage"
            ],
            "do": [
              "Run nslookup on a domain and trace it to an IP",
              "Open devtools Network tab on a WordPress site and read one request/response",
              "Check a host's PHP and MySQL versions against WordPress requirements"
            ],
            "tools": ["Browser DevTools", "nslookup"],
            "res": [
              ["WordPress Requirements", "https://wordpress.org/about/requirements/"]
            ]
          },
          {
            "t": "Local Install: LocalWP & Docker",
            "d": "Run WordPress on your laptop in minutes, never learn on a live server.",
            "lv": 1,
            "time": "~2h",
            "tip": "Learn locally, break things freely. Your first ten mistakes should happen where nobody's business depends on the site.",
            "learn": [
              "LocalWP: one-click WordPress with instant sites and live links",
              "Docker Compose alternative: wordpress + mysql services you can version",
              "The famous 5-minute install: database, wp-config.php, admin user"
            ],
            "do": [
              "Install LocalWP and spin up a site running WordPress 6.9+",
              "Complete the 5-minute install manually once to see wp-config.php created",
              "Create a second site with Docker Compose for comparison"
            ],
            "tools": ["LocalWP", "Docker", "XAMPP"],
            "res": [
              ["Installing WordPress", "https://wordpress.org/documentation/article/how-to-install-wordpress/"]
            ]
          },
          {
            "t": "Dashboard Tour",
            "d": "Learn your way around wp-admin: where everything lives and what to touch first.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The admin menu map: Posts, Media, Pages, Appearance, Plugins, Users, Settings",
              "The admin bar on the frontend and Screen Options",
              "User roles at a glance: what each role can and cannot do"
            ],
            "do": [
              "Create an Editor user and log in to feel the reduced capabilities",
              "Change the site title, tagline, and timezone in Settings",
              "Find and empty the trash, then check the database to see what happened"
            ],
            "tools": ["WordPress"],
            "res": [
              ["Learn WordPress Tutorials", "https://learn.wordpress.org"]
            ]
          },
          {
            "t": "Posts, Pages & the Content Model",
            "d": "The two core content types, plus categories, tags, and the media library.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Posts (time-ordered, categorized) vs Pages (hierarchical, timeless)",
              "Categories vs tags: structured taxonomy vs folksonomy",
              "Featured images, excerpts, and the media library"
            ],
            "do": [
              "Publish three posts in two categories and one parent/child page pair",
              "Upload images, set a featured image, and add alt text",
              "Build a menu linking posts, pages, and a category archive"
            ],
            "tools": ["WordPress"],
            "res": [
              ["Posts vs Pages", "https://wordpress.org/documentation/article/pages/"]
            ]
          }
        ]
      },
      {
        "t": "Content & the Block Editor",
        "d": "Master Gutenberg: blocks, patterns, the site editor, and WordPress 6.9's new tools.",
        "lv": 1,
        "children": [
          {
            "t": "Gutenberg Block Editor Basics",
            "d": "Every piece of content is a block, learn to think in blocks.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Blocks as structured data: paragraphs, headings, images, lists, quotes",
              "Block toolbar, sidebar settings, and the List View for complex layouts",
              "Reusable blocks and why patterns replaced most of them"
            ],
            "do": [
              "Rebuild a landing page using only core blocks",
              "Use List View to reorder a 20-block page without scrolling",
              "Convert a paragraph to a heading and move it with keyboard shortcuts"
            ],
            "tools": ["WordPress Block Editor"],
            "res": [
              ["Block Editor Handbook", "https://developer.wordpress.org/block-editor/"]
            ]
          },
          {
            "t": "New in WordPress 6.9",
            "d": "Notes, the Accordion and Math blocks, and the sitewide Command Palette.",
            "lv": 1,
            "time": "~2h",
            "tip": "WordPress 6.9 needs PHP 8.1+ and shines on PHP 8.5. Running it on PHP 7.4-era hosting is asking for trouble.",
            "learn": [
              "Notes: Google-docs-style block-level comments for team collaboration",
              "New core blocks: Accordion, Math (LaTeX), Time to Read, and term blocks",
              "Command Palette everywhere (Cmd/Ctrl+K) and hide/show block toggles"
            ],
            "do": [
              "Leave a Note on a block and resolve it like a teammate would",
              "Build an FAQ with the Accordion block instead of a plugin",
              "Navigate the entire dashboard using only the Command Palette"
            ],
            "tools": ["WordPress 6.9"],
            "res": [
              ["WordPress 6.9 'Gene' Release Notes", "https://wordpress.org/news/2025/12/gene/"]
            ]
          },
          {
            "t": "Patterns & Reusable Layouts",
            "d": "Design once, reuse everywhere: synced and unsynced patterns.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Patterns vs templates vs template parts",
              "Synced patterns: edit once, update everywhere",
              "The pattern directory and starter patterns in block themes"
            ],
            "do": [
              "Turn a hero section into a synced pattern and place it on three pages",
              "Edit the pattern once and verify all three pages updated",
              "Browse the pattern directory and import one into your site"
            ],
            "tools": ["WordPress Block Editor"],
            "res": [
              ["Block Patterns", "https://developer.wordpress.org/block-editor/"]
            ]
          },
          {
            "t": "Menus, Navigation & Widgets",
            "d": "Connect content together: navigation blocks, menus, and widget areas.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The Navigation block replaced classic menus in block themes",
              "Classic menus and widget areas in older themes",
              "Footer and header patterns as the modern widget replacement"
            ],
            "do": [
              "Build a header with logo, Navigation block, and search",
              "Create a dropdown menu item two levels deep",
              "Add a footer pattern with three columns"
            ],
            "tools": ["WordPress"],
            "res": [
              ["Navigation Block", "https://wordpress.org/documentation/article/navigation-block/"]
            ]
          },
          {
            "t": "Media Library & Images",
            "d": "Upload, organize, and optimize media without tanking performance.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How WordPress generates thumbnails and responsive srcset automatically",
              "Alt text, titles, and captions for accessibility and SEO",
              "Modern formats: WebP conversion and what 6.9 improved"
            ],
            "do": [
              "Upload a 5 MB photo and inspect the generated sizes in uploads/",
              "View the srcset attribute WordPress adds to an image",
              "Audit ten images for missing alt text and fix them"
            ],
            "tools": ["WordPress", "ShortPixel"],
            "res": [
              ["Media Library", "https://wordpress.org/documentation/article/media-library-screen/"]
            ]
          },
          {
            "t": "Site Editor & Full Site Editing",
            "d": "Edit templates, not just content: headers, footers, and archive layouts in the browser.",
            "lv": 1,
            "time": "~3h",
            "tip": "Full Site Editing only works with block themes. If the Site Editor menu is missing, you're on a classic theme.",
            "learn": [
              "Templates (single, archive, 404) and template parts (header, footer)",
              "Global Styles: site-wide colors, typography, and spacing",
              "When FSE is the right choice vs a classic theme or page builder"
            ],
            "do": [
              "Customize the 404 template in the Site Editor",
              "Change the global heading font and watch it cascade",
              "Create a custom template for posts in one category"
            ],
            "tools": ["WordPress Site Editor"],
            "res": [
              ["Site Editor", "https://wordpress.org/documentation/article/site-editor/"]
            ]
          }
        ]
      },
      {
        "t": "Theme Development",
        "d": "Build themes from scratch: the template hierarchy, classic themes, and block themes with theme.json.",
        "lv": 2,
        "children": [
          {
            "t": "Block Themes vs Classic Themes",
            "d": "Two architectures, one platform, know which you're building and why.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Block themes: HTML templates + theme.json, no PHP templates needed",
              "Classic themes: PHP template files and the Customizer",
              "The market reality: new builds go block, maintenance work is classic"
            ],
            "do": [
              "Install Twenty Twenty-Five (block) and a classic theme; compare their file lists",
              "Identify which architecture three client sites would need",
              "Write a one-paragraph recommendation for a hypothetical client"
            ],
            "tools": ["WordPress"],
            "res": [
              ["Block Themes vs Classic", "https://developer.wordpress.org/themes/block-themes/"]
            ]
          },
          {
            "t": "theme.json & Global Styles",
            "d": "The single JSON file that controls a block theme's design tokens.",
            "lv": 2,
            "time": "~4h",
            "tip": "Define every color and font size as a preset in theme.json. Hardcoded hex values scattered through templates are technical debt from day one.",
            "learn": [
              "theme.json structure: settings, styles, customTemplates, templateParts",
              "Presets: color palettes, gradients, font sizes, spacing scales",
              "How Global Styles in the editor write back to user customization"
            ],
            "do": [
              "Create a theme.json with a 5-color palette and 4 font sizes",
              "Verify the presets appear in every block's color picker",
              "Override a core block's default style via theme.json styles"
            ],
            "tools": ["WordPress", "VS Code"],
            "res": [
              ["theme.json Reference", "https://developer.wordpress.org/themes/block-themes/"]
            ]
          },
          {
            "t": "The Template Hierarchy",
            "d": "WordPress picks templates by rules, learn the decision tree cold.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The hierarchy: single-{post-type}.html → single.html → index.html (and PHP equivalents)",
              "How WordPress decides: query type determines the template, top to bottom",
              "Debugging which template loaded with Query Monitor or a body class"
            ],
            "do": [
              "Draw the hierarchy decision tree for a category archive from memory",
              "Create single.html and singular.html; predict which loads for a post",
              "Add a custom template for one specific page slug"
            ],
            "tools": ["WordPress", "Query Monitor"],
            "res": [
              ["Template Hierarchy", "https://developer.wordpress.org/themes/basics/template-hierarchy/"]
            ]
          },
          {
            "t": "Classic Theme Anatomy",
            "d": "style.css, functions.php, and PHP template files, the classic stack.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "style.css header: the comment block that registers the theme",
              "functions.php: setup, menus, thumbnails, and enqueues",
              "Template files: header.php, footer.php, index.php, single.php, page.php"
            ],
            "do": [
              "Build a minimal classic theme from zero: header, loop, sidebar, footer",
              "Register a nav menu and a widget area in functions.php",
              "Add post-thumbnail support and display featured images"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Theme Developer Handbook", "https://developer.wordpress.org/themes/"]
            ]
          },
          {
            "t": "Template Tags & The Loop",
            "d": "The Loop is WordPress's heartbeat, master the query that renders every list of posts.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never use query_posts(). Use WP_Query for custom loops and always call wp_reset_postdata() after, or the rest of the page renders the wrong post.",
            "learn": [
              "The Loop: have_posts() / the_post() and the global $post",
              "Template tags: the_title(), the_content(), the_permalink()",
              "WP_Query for custom loops; pre_get_posts for modifying the main query"
            ],
            "do": [
              "Write a custom WP_Query loop showing the 5 latest posts in a category",
              "Break a page by forgetting wp_reset_postdata(), then fix it",
              "Modify the main blog query with pre_get_posts to exclude a category"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["The Loop", "https://developer.wordpress.org/themes/basics/the-loop/"]
            ]
          },
          {
            "t": "Child Themes",
            "d": "Customize without fear: override a parent theme safely so updates don't wipe your work.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Child theme structure: style.css with Template: parent-name",
              "Template overriding: copy a parent file, edit the copy",
              "Enqueueing the parent stylesheet correctly (not @import)"
            ],
            "do": [
              "Create a child theme of a default theme",
              "Override footer.php in the child and verify it wins",
              "Update the parent theme and confirm your changes survive"
            ],
            "tools": ["WordPress"],
            "res": [
              ["Child Themes", "https://developer.wordpress.org/themes/advanced-topics/child-themes/"]
            ]
          },
          {
            "t": "Block Theme Structure",
            "d": "templates/, parts/, and patterns/, assembling a modern block theme.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "templates/*.html and parts/*.html: block markup, not PHP",
              "Template parts: header, footer, and custom parts",
              "Block bindings and variations for dynamic theme content"
            ],
            "do": [
              "Build a block theme with templates for index, single, page, and 404",
              "Create header and footer template parts and reference them",
              "Add a custom pattern to the theme's patterns/ directory"
            ],
            "tools": ["WordPress", "VS Code"],
            "res": [
              ["Block Theme Structure", "https://developer.wordpress.org/themes/block-themes/"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "Hooks & Plugin Basics",
        "d": "Actions, filters, and the APIs that make WordPress endlessly extendable.",
        "lv": 2,
        "children": [
          {
            "t": "Actions vs Filters",
            "d": "The two hooks everything in WordPress hangs on, do things vs change things.",
            "lv": 2,
            "time": "~4h",
            "tip": "Actions do, filters return. Forgetting return $value in a filter silently empties the content, the most common hooks bug there is.",
            "learn": [
              "Actions (do_action/add_action): run code at a point in time",
              "Filters (apply_filters/add_filter): transform a value passing through",
              "Priorities and accepted arguments: add_action('init', $fn, 10, 2)"
            ],
            "do": [
              "Add text to every post with a the_content filter",
              "Hook into wp_footer to inject a debug comment",
              "Change the excerpt length with a filter and test priority ordering"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Plugin Handbook: Hooks", "https://developer.wordpress.org/plugins/hooks/"]
            ]
          },
          {
            "t": "Enqueueing Scripts & Styles",
            "d": "Load assets the WordPress way, no hardcoded <script> tags in templates.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "wp_enqueue_script/style with handles, dependencies, and versions",
              "wp_localize_script / wp_add_inline_script for passing PHP data to JS",
              "Admin vs frontend enqueues and conditional loading"
            ],
            "do": [
              "Enqueue a custom JS file with jQuery as a dependency",
              "Pass the AJAX URL and a nonce to your script properly",
              "Load an admin-only stylesheet that never touches the frontend"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Enqueueing Scripts & Styles", "https://developer.wordpress.org/themes/basics/including-css-javascript/"]
            ]
          },
          {
            "t": "Custom Post Types",
            "d": "Beyond posts and pages: model portfolios, products, and events as first-class content.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "register_post_type(): labels, supports, rewrite, and capabilities",
              "Public vs private post types; has_archive and rewrite slugs",
              "Flushing rewrite rules, and why you do it on activation, not init"
            ],
            "do": [
              "Register a 'Portfolio' post type with thumbnails and excerpts",
              "Visit its archive and single views; fix the 404 with a rewrite flush",
              "Add it to the admin menu with a custom dashicon"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Custom Post Types", "https://developer.wordpress.org/plugins/post-types/"]
            ]
          },
          {
            "t": "Taxonomies",
            "d": "Categories and tags are just the start, build custom taxonomies for custom post types.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Hierarchical (categories) vs non-hierarchical (tags) taxonomies",
              "register_taxonomy() and attaching it to post types",
              "Term archives and the taxonomy-{$taxonomy}.php template"
            ],
            "do": [
              "Register a 'Skill' taxonomy for your Portfolio post type",
              "Build a term archive template listing portfolio items by skill",
              "Query posts by taxonomy with WP_Query's tax_query"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Taxonomies", "https://developer.wordpress.org/plugins/taxonomies/"]
            ]
          },
          {
            "t": "Options, Transients & Metadata",
            "d": "Store settings, cache expensive queries, and attach data to posts.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Options API: get_option/update_option for plugin settings",
              "Transients API: time-limited caching with automatic expiry",
              "Post meta vs options: when data belongs to a post vs the site"
            ],
            "do": [
              "Cache a slow external API call in a transient for one hour",
              "Add a 'subtitle' post meta box and display it in the template",
              "Delete an expired transient and watch it regenerate"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Options API", "https://developer.wordpress.org/plugins/settings/options-api/"]
            ]
          },
          {
            "t": "Shortcodes (Legacy but Everywhere)",
            "d": "The old embed system still runs millions of sites, know how it works.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "add_shortcode() and the [tag attr='x'] syntax",
              "Why blocks replaced shortcodes for new development",
              "Maintaining shortcodes in legacy sites and migrations"
            ],
            "do": [
              "Write a [current_year] shortcode",
              "Build a [testimonial id='5'] shortcode with attributes",
              "Convert one shortcode's output into an equivalent block"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Shortcode API", "https://developer.wordpress.org/plugins/shortcodes/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Building Your First Plugin",
            "d": "Plugin headers, activation hooks, and the file structure professionals use.",
            "lv": 2,
            "time": "~5h",
            "tip": "Prefix everything: functions, classes, options, hooks. myplugin_ is ugly but collisions in the global namespace are uglier.",
            "learn": [
              "Plugin header comment and the single-file vs organized structure",
              "Activation/deactivation hooks for setup and cleanup",
              "Loading only what you need: admin vs frontend vs AJAX contexts"
            ],
            "do": [
              "Scaffold a plugin with header, activation hook, and an admin notice",
              "Add a settings page with the Settings API",
              "Deactivate and verify your cleanup hook removed its data"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["Plugin Developer Handbook", "https://developer.wordpress.org/plugins/"]
            ],
            "badge": "LAB"
          }
        ]
      },
      {
        "t": "Gutenberg Block Development",
        "d": "Build custom blocks with block.json, the Interactivity API, and WordPress 6.9's Abilities API.",
        "lv": 2,
        "children": [
          {
            "t": "Block Anatomy & block.json",
            "d": "Every block is metadata plus markup, block.json is the contract.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "block.json: name, title, attributes, supports, and textdomain",
              "Static (save) vs dynamic (render_callback/PHP render) blocks",
              "Block supports: alignment, colors, spacing, free UI from core"
            ],
            "do": [
              "Scaffold a block with @wordpress/create-block",
              "Inspect its block.json and change the title and icon",
              "Toggle supports options and watch the sidebar UI change"
            ],
            "tools": ["@wordpress/create-block", "Node.js", "WordPress"],
            "res": [
              ["Block Editor Handbook", "https://developer.wordpress.org/block-editor/"]
            ]
          },
          {
            "t": "@wordpress/scripts Toolchain",
            "d": "The build pipeline behind blocks: JSX, webpack, and wp-scripts.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "wp-scripts build/start: zero-config webpack for blocks",
              "The @wordpress/* npm packages: components, data, element, i18n",
              "Registering the built block with register_block_type()"
            ],
            "do": [
              "Run npm start and edit a block's edit.js with hot reload",
              "Use a core <TextControl> component in your block's sidebar",
              "Build for production and enqueue only the built assets"
            ],
            "tools": ["Node.js", "@wordpress/scripts", "WordPress"],
            "res": [
              ["@wordpress/scripts", "https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/"]
            ]
          },
          {
            "t": "Attributes & Dynamic Blocks",
            "d": "Store block data properly and render on the server when content must stay fresh.",
            "lv": 3,
            "time": "~5h",
            "tip": "If the content depends on the database or the current user, render it with PHP (render_callback). Static save markup goes stale the moment data changes.",
            "learn": [
              "Attributes: types, defaults, and sources (text, html, query)",
              "Dynamic rendering with render_callback and the block's attributes",
              "Validation: why changing save output breaks existing blocks"
            ],
            "do": [
              "Build a 'latest posts' block that queries on render via PHP",
              "Add attributes for post count and category with sidebar controls",
              "Deliberately break block validation, then fix it with deprecation handling"
            ],
            "tools": ["PHP", "JavaScript", "WordPress"],
            "res": [
              ["Dynamic Blocks", "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/"]
            ]
          },
          {
            "t": "Interactivity API",
            "d": "Reactive frontend behavior without a framework, directives in block markup.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "data-wp-interactive, data-wp-bind, and data-wp-on directives",
              "Stores: wp.store() for shared frontend state",
              "When the Interactivity API beats a React rebuild"
            ],
            "do": [
              "Build a block with a working like-button using directives",
              "Share state between two blocks via one store",
              "Compare bundle size against the same feature in React"
            ],
            "tools": ["WordPress", "JavaScript"],
            "res": [
              ["Interactivity API", "https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/"]
            ]
          },
          {
            "t": "Abilities API (WordPress 6.9+)",
            "d": "The new machine-readable permissions system, built for AI agents and automation.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What the Abilities API standardizes: declaring what code can do",
              "Registering abilities for your plugin's actions",
              "Why this matters: agents and automation reasoning about your plugin safely"
            ],
            "do": [
              "Register an ability for a custom plugin action",
              "Query registered abilities and inspect their schemas",
              "Write a capability check that an automation could consume"
            ],
            "tools": ["WordPress 6.9", "PHP"],
            "res": [
              ["WordPress 6.9 Release Notes", "https://wordpress.org/news/2025/12/gene/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Advanced Plugin Engineering",
        "d": "Production-grade plugins: custom tables, REST endpoints, cron, and distribution.",
        "lv": 3,
        "children": [
          {
            "t": "$wpdb & Custom Tables",
            "d": "When post meta isn't enough: your own tables, queried safely.",
            "lv": 3,
            "time": "~5h",
            "tip": "$wpdb->prepare() is non-negotiable for every dynamic query. One unprepared query is one SQL injection.",
            "learn": [
              "dbDelta() for creating tables on activation",
              "$wpdb->prepare(), get_results(), insert(), update()",
              "When custom tables beat post meta: high-volume, relational data"
            ],
            "do": [
              "Create a logging table with dbDelta on plugin activation",
              "Write CRUD with $wpdb methods, all prepared",
              "Benchmark 10k rows in post meta vs a custom table"
            ],
            "tools": ["PHP", "WordPress", "MySQL"],
            "res": [
              ["$wpdb Class Reference", "https://developer.wordpress.org/reference/classes/wpdb/"]
            ]
          },
          {
            "t": "REST API Endpoints",
            "d": "Expose your plugin's data as JSON with permission-checked routes.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "register_rest_route(): namespace, route, methods, callback, permission_callback",
              "permission_callback is required, public-by-default routes leak data",
              "Schema definitions for validation and documentation"
            ],
            "do": [
              "Expose your portfolio post type at /wp-json/myplugin/v1/items",
              "Lock it to logged-in editors with a permission callback",
              "Consume it from a JavaScript frontend"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["REST API Handbook", "https://developer.wordpress.org/rest-api/"]
            ]
          },
          {
            "t": "Cron & Background Jobs",
            "d": "Schedule recurring work with WP-Cron, and know when it isn't real cron.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "wp_schedule_event() and custom intervals; WP-Cron runs on page visits",
              "Replacing WP-Cron with real system cron for reliability",
              "Action Scheduler for robust background queues"
            ],
            "do": [
              "Schedule a daily cleanup job and verify it in a cron viewer plugin",
              "Disable WP-Cron and trigger it from system cron instead",
              "Queue 1000 emails with Action Scheduler and watch them process"
            ],
            "tools": ["WordPress", "Action Scheduler", "WP Crontrol"],
            "res": [
              ["WP-Cron", "https://developer.wordpress.org/plugins/cron/"]
            ]
          },
          {
            "t": "AJAX in WordPress",
            "d": "admin-ajax.php and the REST API for dynamic frontend features.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "wp_ajax_ and wp_ajax_nopriv_ hooks; nonces for every request",
              "Why new code should prefer REST endpoints over admin-ajax",
              "Localizing the AJAX URL and nonces to your script"
            ],
            "do": [
              "Build a live search with admin-ajax and nonce verification",
              "Rebuild it as a REST endpoint and compare",
              "Break the nonce check on purpose and confirm the request is rejected"
            ],
            "tools": ["PHP", "JavaScript", "WordPress"],
            "res": [
              ["AJAX in Plugins", "https://developer.wordpress.org/plugins/javascript/ajax/"]
            ]
          },
          {
            "t": "External API Integrations",
            "d": "Talk to third-party APIs with WP_Http, cached, retried, and failure-proof.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "wp_remote_get/post and the WP_Http abstraction",
              "Caching responses in transients; handling rate limits and failures",
              "Storing API keys in options, never hardcoded"
            ],
            "do": [
              "Integrate a weather API with 1-hour transient caching",
              "Handle API downtime gracefully with a stale-cache fallback",
              "Add a settings field for the API key"
            ],
            "tools": ["PHP", "WordPress"],
            "res": [
              ["HTTP API", "https://developer.wordpress.org/plugins/http-api/"]
            ]
          },
          {
            "t": "Licensing, Updates & Distribution",
            "d": "Ship to wordpress.org or sell premium: updates, licensing, and the repo rules.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "wordpress.org repo: SVN, readme.txt, and the review guidelines",
              "Self-hosted updates for premium plugins",
              "Licensing models and GPL obligations for derivative code"
            ],
            "do": [
              "Write a repo-ready readme.txt with screenshots section",
              "Implement a custom update checker for a premium plugin",
              "Review the plugin guidelines and audit your plugin against them"
            ],
            "tools": ["WordPress", "SVN"],
            "res": [
              ["Plugin Review Guidelines", "https://developer.wordpress.org/plugins/wordpress-org/plugin-review-guidelines/"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Performance",
        "d": "Make WordPress fast: caching layers, asset optimization, and Core Web Vitals.",
        "lv": 2,
        "children": [
          {
            "t": "Caching Layers",
            "d": "Page cache, object cache, and opcache, the three layers that decide your TTFB.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Page caching: serve HTML without booting PHP at all",
              "Object cache (Redis/Memcached): persist expensive queries across requests",
              "What to cache and what must stay dynamic (carts, personalization)"
            ],
            "do": [
              "Install a page cache plugin and measure TTFB before/after",
              "Connect Redis as the object cache and watch cache hits",
              "Exclude the cart and checkout from page caching"
            ],
            "tools": ["Redis", "LiteSpeed Cache", "W3 Total Cache"],
            "res": [
              ["WordPress Optimization", "https://developer.wordpress.org/advanced-administration/performance/optimization/"]
            ]
          },
          {
            "t": "Object Cache & Transients in Depth",
            "d": "Cache at the code level: transients, wp_cache, and cache groups.",
            "lv": 3,
            "time": "~4h",
            "tip": "Cache the expensive thing, not everything. Profile first with Query Monitor, most WordPress slowness is five bad queries, not a missing CDN.",
            "learn": [
              "wp_cache_* functions and non-persistent vs persistent groups",
              "Transients with expiry for API responses and computed data",
              "Cache invalidation: delete on save, not on a timer"
            ],
            "do": [
              "Find your slowest query with Query Monitor",
              "Cache it with a transient and invalidate on post save",
              "Measure the query count drop on the homepage"
            ],
            "tools": ["WordPress", "Query Monitor", "Redis"],
            "res": [
              ["Transients API", "https://developer.wordpress.org/apis/handbook/transients/"]
            ]
          },
          {
            "t": "Asset Optimization",
            "d": "Shrink what the browser downloads: minification, deferral, and killing render-blocking bloat.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Defer/async scripts; why jQuery in the header blocks rendering",
              "Minification and concatenation, and when HTTP/2 makes concat pointless",
              "Auditing plugin asset bloat: dequeue what pages don't need"
            ],
            "do": [
              "Audit a bloated site's scripts with devtools coverage",
              "Dequeue three plugins' assets from pages that don't use them",
              "Defer all non-critical JS and re-run PageSpeed"
            ],
            "tools": ["WordPress", "Perfmatters", "Asset CleanUp"],
            "res": [
              ["Optimization Guide", "https://developer.wordpress.org/advanced-administration/performance/optimization/"]
            ]
          },
          {
            "t": "Images & Media Performance",
            "d": "Images are usually the biggest bytes on the page, serve them smart.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Responsive images: srcset and sizes, automatic in WordPress",
              "WebP/AVIF conversion and lazy loading (native since 5.5)",
              "Fetchpriority for the LCP image: the one tweak with outsized impact"
            ],
            "do": [
              "Convert uploads to WebP and compare total page weight",
              "Set fetchpriority='high' on the hero image",
              "Lazy-load below-the-fold images and verify in devtools"
            ],
            "tools": ["WordPress", "ShortPixel", "Imagify"],
            "res": [
              ["Image Optimization", "https://developer.wordpress.org/advanced-administration/performance/optimization/#images"]
            ]
          },
          {
            "t": "Core Web Vitals & CDN",
            "d": "Pass Google's speed tests and serve static assets from the edge.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "LCP, INP, CLS: what each measures and what breaks it in WordPress",
              "CDN integration for static assets and full-page edge caching",
              "Reading PageSpeed Insights like a developer, not a score-chaser"
            ],
            "do": [
              "Get a baseline PageSpeed report and identify the top 3 issues",
              "Put Cloudflare in front of the site with APO or similar",
              "Fix a CLS issue caused by un-sized images or late-loading fonts"
            ],
            "tools": ["Cloudflare", "PageSpeed Insights", "WordPress"],
            "res": [
              ["Core Web Vitals", "https://web.dev/articles/vitals"]
            ]
          }
        ]
      },
      {
        "t": "Security, Operations & Growth",
        "d": "Harden, back up, deploy, and debug WordPress like a professional, then grow with it.",
        "lv": 3,
        "children": [
          {
            "t": "Hardening & Security Best Practices",
            "d": "Close the doors attackers actually try: logins, outdated code, and file permissions.",
            "lv": 2,
            "time": "~4h",
            "tip": "Most hacked WordPress sites fall to outdated plugins, not zero-days. Update promptly, the October 2026 security releases patched stored XSS across every supported branch.",
            "learn": [
              "The real attack surface: nulled plugins, weak admin passwords, xmlrpc abuse",
              "File permissions, disabling file editing, and security keys in wp-config",
              "WAFs and malware scanning as layers, not replacements for updates"
            ],
            "do": [
              "Enforce 2FA on all admin accounts and rename the admin user",
              "Set correct file permissions (644/755) and disable the plugin editor",
              "Install Wordfence or Sucuri and run a full scan"
            ],
            "tools": ["Wordfence", "Sucuri", "Patchstack"],
            "res": [
              ["Hardening WordPress", "https://wordpress.org/documentation/article/hardening-wordpress/"]
            ]
          },
          {
            "t": "User Roles & Capabilities",
            "d": "The principle of least privilege, WordPress-style.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The five default roles and their capability sets",
              "Custom capabilities and map_meta_cap for plugins",
              "Why clients get Editor, never Administrator"
            ],
            "do": [
              "Create a custom role with only the capabilities a shop manager needs",
              "Add a custom capability to your plugin and check it with current_user_can()",
              "Audit a client site and demote over-privileged users"
            ],
            "tools": ["WordPress", "User Role Editor"],
            "res": [
              ["Roles and Capabilities", "https://wordpress.org/documentation/article/roles-and-capabilities/"]
            ]
          },
          {
            "t": "Backups & Update Strategy",
            "d": "Back up like restores matter, because one day they will.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What a complete backup needs: database + uploads + code",
              "Update order: backup → staging → core → plugins → theme",
              "Auto-updates: which to enable and which to stage first"
            ],
            "do": [
              "Set up offsite daily backups and test a full restore on staging",
              "Run a core update on staging first, then production",
              "Configure auto-updates for minor core releases only"
            ],
            "tools": ["UpdraftPlus", "BlogVault", "WordPress"],
            "res": [
              ["Backing Up Your Database", "https://wordpress.org/documentation/article/backing-up-your-database/"]
            ]
          },
          {
            "t": "WP-CLI",
            "d": "Manage WordPress from the terminal: faster than wp-admin for everything repetitive.",
            "lv": 3,
            "time": "~4h",
            "tip": "Learn wp search-replace before you ever migrate a site. It handles serialized data correctly, a manual SQL find/replace corrupts widget and theme settings.",
            "learn": [
              "Core commands: install, update, plugin/theme management, user handling",
              "wp search-replace for domain migrations (serialization-safe)",
              "Scripting deployments and maintenance with WP-CLI"
            ],
            "do": [
              "Install WordPress entirely from the command line",
              "Migrate a site to a new domain with wp search-replace",
              "Write a bash script that updates, optimizes, and clears cache"
            ],
            "tools": ["WP-CLI"],
            "res": [
              ["WP-CLI Handbook", "https://developer.wordpress.org/cli/commands/"]
            ]
          },
          {
            "t": "Debugging: WP_DEBUG & Query Monitor",
            "d": "See what's actually happening: errors, queries, hooks, and slow code.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "WP_DEBUG, WP_DEBUG_LOG, and SCRIPT_DEBUG in wp-config.php",
              "Query Monitor: queries, hooks fired, PHP errors, and HTTP requests",
              "Reading the debug.log to trace white screens of death"
            ],
            "do": [
              "Enable WP_DEBUG_LOG and trigger a deprecated-function notice",
              "Use Query Monitor to find a plugin firing 40 duplicate queries",
              "Debug a white screen from the log file alone"
            ],
            "tools": ["Query Monitor", "WordPress"],
            "res": [
              ["Debugging in WordPress", "https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/"]
            ]
          },
          {
            "t": "Staging, Migrations & Deployment",
            "d": "A professional workflow: develop → stage → deploy without breaking production.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Staging environments and the push/pull dance",
              "Migration plugins vs manual: Duplicator, Migrate Guru, WP-CLI",
              "Bedrock-style modern stacks: Composer-managed WordPress"
            ],
            "do": [
              "Clone production to staging, test an update, push back",
              "Migrate a site manually: files + database + search-replace",
              "Evaluate Bedrock for a new client project"
            ],
            "tools": ["Duplicator", "WP-CLI", "Bedrock"],
            "res": [
              ["Moving WordPress", "https://wordpress.org/documentation/article/moving-wordpress/"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
