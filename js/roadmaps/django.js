/* Atlas roadmap data: Django (django)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "django",
  "title": "Django",
  "icon": "🎸",
  "color": "#44b78b",
  "desc": "The batteries-included Python web framework: MVT architecture, the ORM, admin, auth, DRF APIs, and shipping Django apps to production.",
  "kind": "skill",
  "root": {
    "t": "Django",
    "d": "Build complete web applications with Django: from your first project to the ORM, APIs, and production deployment.",
    "children": [
      {
        "t": "Django Foundations",
        "d": "How the web works, why frameworks exist, and getting your first Django project running.",
        "lv": 1,
        "children": [
          {
            "t": "How the Web Works",
            "d": "Every Django view is an answer to an HTTP request. Learn the request-response cycle first and the framework stops feeling like magic.",
            "lv": 1,
            "time": "~2h",
            "tip": "If URLs, views, and templates feel confusing, it is almost always a gap in HTTP basics, not Django. Fix the foundation and Django clicks into place.",
            "learn": [
              "The HTTP request-response cycle: method, path, headers, status codes, body",
              "What a web server does vs what your Django app does (WSGI/ASGI boundary)",
              "DNS, hosting, and how a browser turns a URL into a request to your server"
            ],
            "do": [
              "Open browser devtools on any site and read one full request and response, headers included",
              "Run curl -i on a URL and identify the status code, headers, and body",
              "Sketch the path a request takes: browser to DNS to server to Django to database and back"
            ],
            "tools": ["curl", "browser devtools"],
            "res": [
              ["MDN: HTTP overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP"],
              ["Django: URL dispatcher", "https://docs.djangoproject.com/en/5.2/topics/http/urls/"]
            ]
          },
          {
            "t": "Why Web Frameworks?",
            "d": "Frameworks exist because every web app reinvents the same wheel. Learn what Django bundles so you know what problems you no longer solve by hand.",
            "lv": 1,
            "time": "~1h",
            "tip": "Django calls its pattern MVT (Model-View-Template) instead of MVC. Same idea, different labels: the view is the controller logic, the template is the presentation.",
            "learn": [
              "The problems every web app repeats: routing, input handling, sessions, database access, security",
              "MVT explained: models hold data, views hold logic, templates hold presentation",
              "Batteries-included philosophy: admin, auth, and ORM ship with Django instead of third-party packages"
            ],
            "do": [
              "List the features you would need to hand-roll for a blog: login, post CRUD, comments, admin",
              "Map each of those features to the Django component that provides it",
              "Read the Django design philosophies page and note the ones that surprise you"
            ],
            "tools": ["Django"],
            "res": [
              ["Django design philosophies", "https://docs.djangoproject.com/en/5.2/misc/design-philosophies/"],
              ["What is Django", "https://www.djangoproject.com/"]
            ]
          },
          {
            "t": "Python Setup: venv, pip & Installing Django",
            "d": "Isolated environments keep every project on its own dependency set. Set up a clean Python workspace and install Django the right way.",
            "lv": 1,
            "time": "~2h",
            "tip": "Never pip install into your system Python. One project, one virtualenv, always. Future you will thank present you when two projects need two Django versions.",
            "learn": [
              "Why virtualenvs exist: dependency isolation between projects",
              "Django 5.2 LTS (supported to April 2028) vs Django 6.x: what LTS means for production",
              "Python version requirements: Django 6.x needs Python 3.12 or newer"
            ],
            "do": [
              "Create a virtualenv with python -m venv .venv and activate it",
              "Install Django with pip install django and verify with python -m django --version",
              "Freeze your environment with pip freeze > requirements.txt"
            ],
            "tools": ["Python", "pip", "venv"],
            "res": [
              ["Django installation guide", "https://docs.djangoproject.com/en/5.2/topics/install/"],
              ["Python venv docs", "https://docs.python.org/3/library/venv.html"]
            ]
          },
          {
            "t": "Your First Project: startproject & runserver",
            "d": "Scaffold a project, start the dev server, and meet the admin. This is the loop you will repeat for every Django app you ever build.",
            "lv": 1,
            "time": "~2h",
            "tip": "runserver is for development only. It auto-reloads on code changes and serves a friendly debugger, but it is single-threaded and insecure by design. Production gets a real server later in this roadmap.",
            "learn": [
              "django-admin startproject: what it generates and why each file exists",
              "manage.py as the project command center: runserver, migrate, shell, createsuperuser",
              "The dev server loop: edit code, auto-reload, refresh the browser"
            ],
            "do": [
              "Run django-admin startproject mysite and start the dev server",
              "Create a superuser and log into /admin to see the built-in admin",
              "Run the initial migrations and open the SQLite database file that appears"
            ],
            "tools": ["Django", "SQLite"],
            "res": [
              ["Writing your first Django app, part 1", "https://docs.djangoproject.com/en/5.2/intro/tutorial01/"],
              ["django-admin and manage.py", "https://docs.djangoproject.com/en/5.2/ref/django-admin/"]
            ]
          },
          {
            "t": "Projects vs Apps",
            "d": "A project is configuration; an app is a reusable feature. Internalize this split and your Django codebases stay organized as they grow.",
            "lv": 1,
            "time": "~2h",
            "tip": "One app per coherent feature (blog, shop, accounts), not one app per model. Ten tiny apps with one model each is a classic beginner structure mistake.",
            "learn": [
              "Project vs app: settings and URLconf live in the project, models and views live in apps",
              "How apps plug into a project through INSTALLED_APPS",
              "When to split a feature into its own app: cohesion and reuse across projects"
            ],
            "do": [
              "Run python manage.py startapp blog inside your project",
              "Register the app in INSTALLED_APPS and confirm the project still runs",
              "Create a second app and describe in one sentence what each app owns"
            ],
            "tools": ["Django"],
            "res": [
              ["Django applications", "https://docs.djangoproject.com/en/5.2/ref/applications/"],
              ["Writing your first Django app, part 2", "https://docs.djangoproject.com/en/5.2/intro/tutorial02/"]
            ]
          },
          {
            "t": "settings.py: The Control Panel",
            "d": "One file decides your database, installed apps, security posture, and debug behavior. Learn the settings that matter before you cargo-cult them.",
            "lv": 1,
            "time": "~2h",
            "tip": "SECRET_KEY and DEBUG=True in a public repo is how Django apps get owned. Read every security-related setting once, properly, before your first deploy.",
            "learn": [
              "SECRET_KEY, DEBUG, and ALLOWED_HOSTS: what each protects and why defaults are dev-only",
              "INSTALLED_APPS and MIDDLEWARE: how Django composes a project from pluggable pieces",
              "Environment-based settings: keeping secrets out of version control with env vars"
            ],
            "do": [
              "Read your generated settings.py top to bottom and annotate each block",
              "Move SECRET_KEY and DEBUG into environment variables loaded at startup",
              "Set ALLOWED_HOSTS and confirm the dev server still serves localhost"
            ],
            "tools": ["Django", "python-dotenv"],
            "res": [
              ["Django settings reference", "https://docs.djangoproject.com/en/5.2/ref/settings/"],
              ["Django deployment checklist", "https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/"]
            ]
          },
          {
            "t": "App Anatomy: models, views, admin, tests, migrations",
            "d": "Every Django app ships the same file skeleton. Tour each file's job so you always know where a piece of logic belongs.",
            "lv": 1,
            "time": "~2h",
            "tip": "tests.py is generated for every app for a reason. Writing even one test per app from day one builds the habit that saves you at 3am later.",
            "learn": [
              "models.py, views.py, admin.py, tests.py, urls.py, migrations/: one job per file",
              "apps.py and how Django discovers app configuration",
              "The static/, templates/, and media/ directories: code assets vs user uploads"
            ],
            "do": [
              "Open every file in your new app and write a one-line comment describing its role",
              "Add a trivial model and run makemigrations to watch the migrations folder come alive",
              "Create templates/ and static/ directories inside the app and serve one file from each"
            ],
            "tools": ["Django"],
            "res": [
              ["Django project structure overview", "https://docs.djangoproject.com/en/5.2/intro/tutorial01/"],
              ["Writing your first Django app, part 3", "https://docs.djangoproject.com/en/5.2/intro/tutorial03/"]
            ]
          }
        ]
      },
      {
        "t": "Routing & Views",
        "d": "URLs map to views, views answer requests. Master the request path from URL pattern to response.",
        "lv": 1,
        "children": [
          {
            "t": "The Request-Response Flow",
            "d": "Trace a request from URLconf through middleware to the view and back. This mental model makes every Django error message readable.",
            "lv": 1,
            "time": "~2h",
            "tip": "When something breaks, walk the flow backwards: bad response means check the view, view never called means check the URLconf. Most Django debugging is just this walk.",
            "learn": [
              "URLconf to view to template: the full journey of one request",
              "Where middleware sits in the flow and what it can change",
              "How Django picks which URL pattern wins when several could match"
            ],
            "do": [
              "Draw the request flow for your own project from urls.py to a view",
              "Add a print statement in a view and watch the dev server log on each request",
              "Trigger a 404 and read Django's debug page to see which patterns were tried"
            ],
            "tools": ["Django"],
            "res": [
              ["Deploying Django", "https://docs.djangoproject.com/en/5.2/howto/deployment/"],
              ["URL dispatcher", "https://docs.djangoproject.com/en/5.2/topics/http/urls/"]
            ]
          },
          {
            "t": "URL Patterns & Path Converters",
            "d": "path() with converters handles almost every URL you will ever write. Learn them, then reach for regex only when converters run out.",
            "lv": 1,
            "time": "~2h",
            "tip": "Order matters: Django stops at the first matching pattern. Put specific patterns above catch-all ones or the catch-all swallows everything.",
            "learn": [
              "path() converters: str, int, slug, uuid, path, and what each matches",
              "include() for delegating to app-level URLconfs and keeping urls.py readable",
              "re_path() for the rare cases converters cannot express"
            ],
            "do": [
              "Build URL patterns capturing an int id, a slug, and a uuid in three routes",
              "Split your project urls.py into per-app URLconfs wired with include()",
              "Write one re_path pattern and explain why a converter could not do the job"
            ],
            "tools": ["Django"],
            "res": [
              ["URL dispatcher", "https://docs.djangoproject.com/en/5.2/topics/http/urls/"]
            ]
          },
          {
            "t": "Named URLs & Reversing",
            "d": "Name every URL and refer to it by name everywhere. Your templates and views survive URL redesigns untouched.",
            "lv": 1,
            "time": "~2h",
            "tip": "Hardcoded URLs are technical debt with interest. One renamed path breaks every template that typed it out. {% url %} and reverse() make renames free.",
            "learn": [
              "Naming patterns with name= and app namespaces with app_name",
              "reverse() in Python code and the {% url %} tag in templates",
              "get_absolute_url() on models: the canonical URL for an object"
            ],
            "do": [
              "Name all your URL patterns and replace hardcoded hrefs with {% url %}",
              "Use reverse() in a view redirect and confirm it resolves",
              "Add get_absolute_url() to a model and use it in a template link"
            ],
            "tools": ["Django"],
            "res": [
              ["Reversing URLs", "https://docs.djangoproject.com/en/5.2/topics/http/urls/#reversing-namespaced-urls"]
            ]
          },
          {
            "t": "Function-Based Views",
            "d": "A view is a function that takes a request and returns a response. Master FBVs and you understand what class-based views are abstracting.",
            "lv": 1,
            "time": "~3h",
            "tip": "Learn FBVs first even if you end up preferring CBVs. When a CBV behaves mysteriously, reading it as the FBV it replaced is the fastest way to understand it.",
            "learn": [
              "The request object: method, GET, POST, user, META, and path",
              "Returning responses: HttpResponse, render(), JsonResponse, redirect()",
              "Reading input safely: request.GET vs request.POST and why you validate both"
            ],
            "do": [
              "Write a view that reads a query param and renders it in a template",
              "Handle a POST form by hand and redirect after success (Post/Redirect/Get)",
              "Return JSON from a view with JsonResponse for a tiny API endpoint"
            ],
            "tools": ["Django"],
            "res": [
              ["Writing views", "https://docs.djangoproject.com/en/5.2/topics/http/views/"],
              ["Request and response objects", "https://docs.djangoproject.com/en/5.2/ref/request-response/"]
            ]
          },
          {
            "t": "Class-Based Views",
            "d": "CBVs package common view patterns into reusable classes. Learn the dispatch flow and the mixin system instead of memorizing the class list.",
            "lv": 2,
            "time": "~3h",
            "tip": "CBVs confuse people because the magic is inherited. When lost, check the MRO: the behavior you want is usually one parent class up, documented under its own name.",
            "learn": [
              "as_view() and dispatch(): how a class becomes a callable view",
              "get() vs post() methods and how TemplateView and RedirectView fit in",
              "Mixins: composing behavior like LoginRequiredMixin instead of rewriting it"
            ],
            "do": [
              "Convert one of your FBVs into a class-based View with get() and post()",
              "Build a page with TemplateView and add LoginRequiredMixin to it",
              "Override get_context_data() to inject extra template variables"
            ],
            "tools": ["Django"],
            "res": [
              ["Class-based views intro", "https://docs.djangoproject.com/en/5.2/topics/class-based-views/intro/"],
              ["Class-based views reference", "https://docs.djangoproject.com/en/5.2/ref/class-based-views/"]
            ]
          },
          {
            "t": "Generic CBVs: List, Detail, Create, Update, Delete",
            "d": "Five generic views cover most CRUD pages with a few lines each. Learn which knobs to turn: model, queryset, template, and form hooks.",
            "lv": 2,
            "time": "~4h",
            "tip": "Generic views guess template names from the model (blog/post_list.html). Name your templates to match the convention and half the configuration disappears.",
            "learn": [
              "ListView and DetailView: the read side, pagination, and context object names",
              "CreateView, UpdateView, DeleteView: the write side, form_class, and success_url",
              "Overriding get_queryset() for per-user filtering and form_valid() for custom save logic"
            ],
            "do": [
              "Build full CRUD for one model using only the five generic views",
              "Restrict a ListView queryset to objects owned by request.user",
              "Customize the delete confirmation flow with a template and success redirect"
            ],
            "tools": ["Django"],
            "res": [
              ["Generic display views", "https://docs.djangoproject.com/en/5.2/topics/class-based-views/generic-display/"],
              ["Generic editing views", "https://docs.djangoproject.com/en/5.2/topics/class-based-views/generic-editing/"]
            ]
          },
          {
            "t": "Pagination",
            "d": "Never dump a thousand rows on one page. Paginator gives you page navigation in a few lines, in views and templates alike.",
            "lv": 1,
            "time": "~2h",
            "tip": "Validate the page number. Users will hand-edit ?page=abc and ?page=99999; Paginator has EmptyPage and PageNotAnInteger for exactly this.",
            "learn": [
              "Paginator, Page, and slicing querysets efficiently per page",
              "ListView's built-in paginate_by vs manual pagination in FBVs",
              "Building page navigation UI: previous/next links and page ranges"
            ],
            "do": [
              "Paginate a ListView with paginate_by and render page controls in the template",
              "Handle invalid page numbers gracefully in a function-based view",
              "Seed 200 test objects and verify only one page of queries runs per request"
            ],
            "tools": ["Django"],
            "res": [
              ["Pagination", "https://docs.djangoproject.com/en/5.2/topics/pagination/"]
            ]
          },
          {
            "t": "Messages Framework",
            "d": "Flash messages are how Django talks to the user after a redirect. One import, one template loop, and your app feels alive.",
            "lv": 1,
            "time": "~1h",
            "tip": "Messages survive exactly one redirect, which is the point: set the message, redirect, and the next page shows it. Trying to show messages without redirecting is fighting the design.",
            "learn": [
              "messages.success/error/info: levels and when each fits",
              "Rendering messages in base.html so every page can show them",
              "How message storage works across the redirect boundary"
            ],
            "do": [
              "Add a success message to your create view and an error message to a failed action",
              "Render the message loop in your base template with styling per level",
              "Test that refreshing the page does not re-show the message"
            ],
            "tools": ["Django"],
            "res": [
              ["Messages framework", "https://docs.djangoproject.com/en/5.2/ref/contrib/messages/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Templates",
        "d": "Django Template Language turns view context into HTML. Learn the syntax, inheritance, and how to keep logic out of presentation.",
        "lv": 1,
        "children": [
          {
            "t": "Django Template Language Syntax",
            "d": "Variables, tags, and filters: three syntaxes that cover every template you will write. Auto-escaping keeps you safe by default.",
            "lv": 1,
            "time": "~2h",
            "tip": "Templates deliberately cannot call functions with arguments. If you are fighting the template to compute something, the computation belongs in the view.",
            "learn": [
              "{{ variable }}, {% tag %}, and {{ value|filter }}: the three syntaxes",
              "Auto-escaping: why {{ user_input }} is safe and when |safe is dangerous",
              "for loops, if conditions, and the forloop counter variables"
            ],
            "do": [
              "Render a list of objects with a for loop and an empty fallback",
              "Display user-submitted text and confirm HTML is escaped, not rendered",
              "Use if/elif/else to show different content for authenticated users"
            ],
            "tools": ["Django"],
            "res": [
              ["Django template language", "https://docs.djangoproject.com/en/5.2/ref/templates/language/"],
              ["Built-in template tags and filters", "https://docs.djangoproject.com/en/5.2/ref/templates/builtins/"]
            ]
          },
          {
            "t": "Filters & Custom Filters",
            "d": "Filters transform values at render time. Know the built-ins, then write your own for formatting your app repeats everywhere.",
            "lv": 2,
            "time": "~2h",
            "tip": "A filter should be a pure formatting function: value in, string out. The moment a filter queries the database, it has become a view in disguise.",
            "learn": [
              "Essential built-ins: date, default, length, pluralize, truncatechars, linebreaksbr",
              "Writing a custom filter: templatetags package, @register.filter, loading it",
              "Chaining filters and why order changes the result"
            ],
            "do": [
              "Format dates, counts, and long text using only built-in filters",
              "Write a custom filter that formats a price or a relative timestamp",
              "Chain two filters and predict the output before refreshing"
            ],
            "tools": ["Django"],
            "res": [
              ["Custom template tags and filters", "https://docs.djangoproject.com/en/5.2/howto/custom-template-tags/"]
            ]
          },
          {
            "t": "Tags & Custom Tags",
            "d": "Tags control template logic. Master the core set, then build simple_tag and inclusion_tag for reusable components.",
            "lv": 2,
            "time": "~2h",
            "tip": "Reach for inclusion_tag when a chunk of markup repeats with different data (a product card, a comment). It is Django's original component system.",
            "learn": [
              "Core tags: for, if, with, include, csrf_token, url, static, comment",
              "simple_tag for small logic, inclusion_tag for reusable markup chunks",
              "The {% load %} mechanism and why tags live in templatetags/"
            ],
            "do": [
              "Build a base template using include for header and footer partials",
              "Write a simple_tag that returns a computed value like a site-wide count",
              "Write an inclusion_tag that renders a reusable card component"
            ],
            "tools": ["Django"],
            "res": [
              ["Custom template tags and filters", "https://docs.djangoproject.com/en/5.2/howto/custom-template-tags/"]
            ]
          },
          {
            "t": "Template Inheritance",
            "d": "One base template, many pages. extends and block turn site-wide layout into a single file you change once.",
            "lv": 1,
            "time": "~2h",
            "tip": "Design base.html first with generous blocks (title, content, extra_css, extra_js). Pages overriding a block they wish existed is a sign the base needs more blocks.",
            "learn": [
              "{% extends %} and {% block %}: the parent-child contract",
              "{{ block.super }} for extending instead of replacing parent content",
              "Multi-level inheritance: site base, section base, page"
            ],
            "do": [
              "Create base.html with navigation, messages loop, and content blocks",
              "Convert three standalone pages to extend the base template",
              "Add a sidebar block that only some pages override"
            ],
            "tools": ["Django"],
            "res": [
              ["Template inheritance", "https://docs.djangoproject.com/en/5.2/ref/templates/language/#template-inheritance"]
            ]
          },
          {
            "t": "Template Partials (Django 6.0+)",
            "d": "Django 6 added native template partials: named fragments inside one file, no extra includes needed. The modern way to componentize templates.",
            "lv": 2,
            "time": "~2h",
            "tip": "Partials shine with HTMX-style workflows: render just template.html#card on an AJAX request instead of building a separate fragment template.",
            "learn": [
              "{% partialdef %} to define a named fragment and {% partial %} to render it",
              "The template_name#partial_name syntax for targeting fragments from views",
              "When partials replace inclusion_tag and when a full component library still wins"
            ],
            "do": [
              "Define a partialdef inside a template and render it with {% partial %}",
              "Return only a partial from a view using the #fragment syntax",
              "Refactor one inclusion_tag into a partial and compare the ergonomics"
            ],
            "tools": ["Django"],
            "res": [
              ["Django 6.0 release notes: template partials", "https://docs.djangoproject.com/en/6.1/releases/6.0/#template-partials"],
              ["Django template language", "https://docs.djangoproject.com/en/5.2/ref/templates/language/"]
            ]
          },
          {
            "t": "Static Files & WhiteNoise",
            "d": "CSS, JS, and images need collecting, versioning, and serving. Learn the dev flow and the production story with WhiteNoise.",
            "lv": 2,
            "time": "~3h",
            "tip": "DEBUG=True serves static files for you; production does not. Every 'my CSS vanished after deploy' story is someone who never ran collectstatic.",
            "learn": [
              "STATIC_URL, STATICFILES_DIRS, and the {% static %} tag",
              "collectstatic and ManifestStaticFilesStorage: hashed filenames for cache busting",
              "WhiteNoise: serving static files from your app server without nginx config"
            ],
            "do": [
              "Organize CSS and JS under static/ and reference them with {% static %}",
              "Run collectstatic and inspect the hashed filenames in STATIC_ROOT",
              "Add WhiteNoise middleware and verify static files serve with DEBUG=False locally"
            ],
            "tools": ["Django", "WhiteNoise"],
            "res": [
              ["Managing static files", "https://docs.djangoproject.com/en/5.2/howto/static-files/"],
              ["WhiteNoise documentation", "https://whitenoise.readthedocs.io/"]
            ]
          },
          {
            "t": "Media Files: User Uploads",
            "d": "Static files are yours; media files are your users'. Handle uploads safely and know why production needs object storage.",
            "lv": 2,
            "time": "~2h",
            "tip": "Never trust an upload's filename or content type. Validate extensions, limit sizes, and serve uploads from a separate domain or storage bucket in production.",
            "learn": [
              "MEDIA_URL, MEDIA_ROOT, and FileField/ImageField with upload_to",
              "Handling request.FILES in forms and validating uploads",
              "Why local disk uploads break on multi-server deploys: the case for S3-style storage"
            ],
            "do": [
              "Add an ImageField to a model and build the upload form end to end",
              "Serve uploaded files in development via MEDIA_URL routing",
              "Set a file size limit and reject a disallowed extension with a clean error"
            ],
            "tools": ["Django", "Pillow"],
            "res": [
              ["File uploads", "https://docs.djangoproject.com/en/5.2/topics/http/file-uploads/"],
              ["Managing files", "https://docs.djangoproject.com/en/5.2/topics/files/"]
            ]
          }
        ]
      },
      {
        "t": "Models & the ORM",
        "d": "Models define your data; the ORM turns Python into SQL. This is the heart of Django, worth learning deeply.",
        "lv": 2,
        "children": [
          {
            "t": "Defining Models: Fields & Options",
            "d": "Fields are your schema in Python. Choose the right field types and options and half your data integrity is enforced for free.",
            "lv": 1,
            "time": "~3h",
            "tip": "null=True vs blank=True trips up everyone: null is database-level (can the column be NULL), blank is validation-level (can the form be empty). CharFields want blank=True, not null=True.",
            "learn": [
              "Core field types: CharField, TextField, IntegerField, DecimalField, DateTimeField, BooleanField, JSONField",
              "Field options: null, blank, default, unique, choices, help_text, db_index",
              "Meta options: ordering, verbose_name, constraints, and indexes"
            ],
            "do": [
              "Model a small domain (posts, authors, comments) with appropriate field types",
              "Add choices to a status field and unique to a slug field",
              "Set Meta.ordering and a composite index, then inspect the generated SQL"
            ],
            "tools": ["Django"],
            "res": [
              ["Model field reference", "https://docs.djangoproject.com/en/5.2/ref/models/fields/"],
              ["Model Meta options", "https://docs.djangoproject.com/en/5.2/ref/models/options/"]
            ]
          },
          {
            "t": "Model Relationships",
            "d": "ForeignKey, ManyToManyField, OneToOneField: three relationships that model almost any domain. Get on_delete and related_name right from the start.",
            "lv": 2,
            "time": "~3h",
            "tip": "Always set related_name explicitly. The default post_set style works until it does not, and renaming reverse accessors later touches every query you wrote.",
            "learn": [
              "ForeignKey (many-to-one), ManyToManyField, OneToOneField: which models which reality",
              "on_delete behaviors: CASCADE, PROTECT, SET_NULL, and when each is correct",
              "related_name and symmetrical=False: controlling the reverse side"
            ],
            "do": [
              "Model author-post-comment with ForeignKeys and a post-tag ManyToMany",
              "Try each on_delete behavior in the shell and observe what happens to children",
              "Query across relationships in both directions using your related_names"
            ],
            "tools": ["Django"],
            "res": [
              ["Model relationships", "https://docs.djangoproject.com/en/5.2/topics/db/models/#relationships"],
              ["Field reference: relationships", "https://docs.djangoproject.com/en/5.2/ref/models/fields/#module-django.db.models.fields.related"]
            ]
          },
          {
            "t": "Model Methods & Inheritance",
            "d": "Models are classes, so put behavior where it belongs. __str__, custom methods, and the three inheritance flavors.",
            "lv": 2,
            "time": "~2h",
            "tip": "Abstract base classes share fields with zero extra tables; multi-table inheritance creates a join for every query. Default to abstract unless you need to query the parent directly.",
            "learn": [
              "__str__, get_absolute_url, and custom methods like publish() that encode domain logic",
              "Abstract base classes vs proxy models vs multi-table inheritance",
              "Custom managers: encapsulating common querysets like Post.published.all()"
            ],
            "do": [
              "Add __str__ and get_absolute_url to every model in your project",
              "Write a custom manager method and replace three repeated filters with it",
              "Create an abstract TimestampedModel with created/updated fields and inherit it"
            ],
            "tools": ["Django"],
            "res": [
              ["Model inheritance", "https://docs.djangoproject.com/en/5.2/topics/db/models/#model-inheritance"],
              ["Custom managers", "https://docs.djangoproject.com/en/5.2/topics/db/managers/"]
            ]
          },
          {
            "t": "Migrations",
            "d": "Migrations version-control your database schema. Generate them, read them, and treat them as code that ships with your app.",
            "lv": 2,
            "time": "~3h",
            "tip": "Never edit a migration that has already run on someone else's machine (or production). Write a new migration instead. Editing history rewrites everyone else's database state.",
            "learn": [
              "makemigrations and migrate: generating vs applying schema changes",
              "Reading a migration file: operations, dependencies, and state",
              "Data migrations with RunPython, squashing, and rolling back safely"
            ],
            "do": [
              "Change a model, generate the migration, and read the generated operations",
              "Write a data migration that backfills a new field for existing rows",
              "Practice migrate app zero and re-migrating to understand reversibility"
            ],
            "tools": ["Django"],
            "res": [
              ["Migrations", "https://docs.djangoproject.com/en/5.2/topics/migrations/"],
              ["Migration operations reference", "https://docs.djangoproject.com/en/5.2/ref/migration-operations/"]
            ]
          },
          {
            "t": "Databases: SQLite to PostgreSQL",
            "d": "SQLite is perfect for development; PostgreSQL is the production standard. Learn the DATABASES setting and how to switch cleanly.",
            "lv": 2,
            "time": "~3h",
            "tip": "Develop on the database you deploy to, or as close as you can. SQLite forgives things PostgreSQL rejects (like sloppy date handling), and you want those errors on your laptop, not at 2am.",
            "learn": [
              "The DATABASES setting: ENGINE, NAME, USER, PASSWORD, HOST, PORT",
              "Why PostgreSQL for production: concurrency, JSONB, full-text search, real constraints",
              "django.contrib.postgres extras: ArrayField, full-text search, trigram similarity"
            ],
            "do": [
              "Install psycopg and point a project at a local PostgreSQL instance",
              "Run your migrations against Postgres and fix anything SQLite let slide",
              "Try one postgres-specific feature like full-text search or an ArrayField"
            ],
            "tools": ["Django", "PostgreSQL", "psycopg"],
            "res": [
              ["Databases: settings", "https://docs.djangoproject.com/en/5.2/ref/settings/#databases"],
              ["PostgreSQL notes", "https://docs.djangoproject.com/en/5.2/ref/databases/#postgresql-notes"]
            ]
          },
          {
            "t": "Querying with the ORM",
            "d": "QuerySets are lazy, chainable, and composable. Learn to think in querysets and raw SQL becomes the exception, not the rule.",
            "lv": 2,
            "time": "~4h",
            "tip": "QuerySets are lazy: no database hit happens until you iterate, slice, or call list()/count(). Chaining ten filters still runs one query, which is the whole point.",
            "learn": [
              "all(), filter(), exclude(), get(), first(): the core retrieval API",
              "Laziness and chaining: building queries step by step before evaluation",
              "Ordering, slicing, and distinct(): shaping result sets"
            ],
            "do": [
              "In the Django shell, chain filters and confirm with connection.queries that one SQL ran",
              "Rewrite three hand-written loops as single queryset expressions",
              "Use get() vs filter().first() deliberately and explain the difference"
            ],
            "tools": ["Django"],
            "res": [
              ["Making queries", "https://docs.djangoproject.com/en/5.2/topics/db/queries/"],
              ["QuerySet API reference", "https://docs.djangoproject.com/en/5.2/ref/models/querysets/"]
            ]
          },
          {
            "t": "Lookups, Q Objects & Aggregations",
            "d": "Field lookups, OR-conditions with Q, and annotate/aggregate turn the ORM into a real query language. This is where it stops feeling limited.",
            "lv": 2,
            "time": "~3h",
            "tip": "annotate() adds a computed column per row; aggregate() collapses rows into one value. Mixing them up is the most common ORM query bug, so say the sentence out loud before you write it.",
            "learn": [
              "Lookups: exact, icontains, gte/lte, in, range, isnull, and date lookups",
              "Q objects for OR conditions and F objects for referencing other fields",
              "annotate() vs aggregate(): Count, Sum, Avg per row vs across the table"
            ],
            "do": [
              "Build a search view using Q objects across title and body with icontains",
              "Annotate each author with their post count and order by it",
              "Use F() to increment a counter field without a race condition"
            ],
            "tools": ["Django"],
            "res": [
              ["Making queries: lookups", "https://docs.djangoproject.com/en/5.2/topics/db/queries/#field-lookups"],
              ["Aggregation", "https://docs.djangoproject.com/en/5.2/topics/db/aggregation/"]
            ]
          },
          {
            "t": "Create, Update, Delete & Transactions",
            "d": "Writing data safely: bulk operations for speed, get_or_create for idempotency, and atomic blocks so partial writes never corrupt your data.",
            "lv": 2,
            "time": "~3h",
            "tip": "Wrap multi-step writes in transaction.atomic(). If step three of five fails, you want zero steps applied, not two. Partial writes are the hardest bugs to clean up.",
            "learn": [
              "create(), get_or_create(), update_or_create(), bulk_create(), queryset.update()",
              "delete() cascades and the collector: knowing what disappears with a parent",
              "transaction.atomic(): all-or-nothing blocks, savepoints, and on_commit hooks"
            ],
            "do": [
              "Import 1000 rows with bulk_create and compare timing against a create() loop",
              "Write an idempotent seed script using update_or_create",
              "Wrap a two-model write in atomic() and prove a failure rolls everything back"
            ],
            "tools": ["Django"],
            "res": [
              ["Database transactions", "https://docs.djangoproject.com/en/5.2/topics/db/transactions/"]
            ]
          },
          {
            "t": "Raw SQL & Fixtures",
            "d": "The escape hatches: raw SQL when the ORM cannot express a query, fixtures for loading reference data. Know they exist, use them sparingly.",
            "lv": 3,
            "time": "~2h",
            "tip": "Raw SQL with string interpolation is an injection vulnerability wearing a trench coat. Always pass parameters separately and let the driver escape them.",
            "learn": [
              "raw() and cursor.execute(): dropping to SQL with proper parameterization",
              "When raw SQL is justified: window functions, CTEs, database-specific features",
              "Fixtures: loaddata/dumpdata for seed and test data"
            ],
            "do": [
              "Write one raw() query and map its results back onto model instances",
              "Execute a parameterized raw query with cursor.execute and %s placeholders",
              "Create a fixture and load it with loaddata in a fresh database"
            ],
            "tools": ["Django"],
            "res": [
              ["Executing raw SQL", "https://docs.djangoproject.com/en/5.2/topics/db/sql/"],
              ["Fixtures", "https://docs.djangoproject.com/en/5.2/howto/initial-data/"]
            ]
          },
          {
            "t": "Query Optimization: Killing N+1",
            "d": "The N+1 query problem is the number one Django performance killer. Learn to see it, measure it, and fix it with select_related and prefetch_related.",
            "lv": 3,
            "time": "~4h",
            "tip": "select_related follows ForeignKey/OneToOne in one JOIN; prefetch_related handles ManyToMany and reverse FKs in two queries. Using the wrong one either fails silently or does nothing.",
            "learn": [
              "The N+1 pattern: one query per row in a loop, and how to spot it in debug toolbar",
              "select_related vs prefetch_related: which relationship type each serves",
              "only(), defer(), values(), and db_index: trimming columns and speeding lookups"
            ],
            "do": [
              "Build a page that triggers N+1 and count the queries with django-debug-toolbar",
              "Fix it with select_related/prefetch_related and verify the query count drops",
              "Add db_index to a frequently filtered field and explain the tradeoff"
            ],
            "tools": ["Django", "django-debug-toolbar"],
            "res": [
              ["Database access optimization", "https://docs.djangoproject.com/en/5.2/topics/db/optimization/"],
              ["django-debug-toolbar", "https://django-debug-toolbar.readthedocs.io/"]
            ]
          }
        ]
      },
      {
        "t": "Forms, Auth & Security",
        "d": "Forms validate input, auth identifies users, and security settings keep both honest. The trust layer of your app.",
        "lv": 2,
        "children": [
          {
            "t": "Django Forms",
            "d": "Forms are validation machines that happen to render HTML. Define fields once and get rendering, cleaning, and error messages for free.",
            "lv": 2,
            "time": "~3h",
            "tip": "Never trust request.POST directly. If you are reading request.POST['email'] by hand instead of form.cleaned_data['email'], you skipped validation and every check that came with it.",
            "learn": [
              "Form classes, fields, and widgets: the declarative way to describe input",
              "The validation pipeline: is_valid(), cleaned_data, and per-field errors",
              "Rendering: as_p/as_table, manual field rendering, and widget customization"
            ],
            "do": [
              "Build a contact form class with three fields and custom validation",
              "Render it manually field-by-field with error messages next to each input",
              "Process the POST: validate, use cleaned_data, and re-render with errors on failure"
            ],
            "tools": ["Django"],
            "res": [
              ["Working with forms", "https://docs.djangoproject.com/en/5.2/topics/forms/"],
              ["Form fields reference", "https://docs.djangoproject.com/en/5.2/ref/forms/fields/"]
            ]
          },
          {
            "t": "ModelForms & Validation",
            "d": "ModelForms bind forms directly to models. Add clean methods for business rules and your validation lives in one testable place.",
            "lv": 2,
            "time": "~3h",
            "tip": "Validation order is fixed: field clean, then clean_<fieldname>, then form clean(). Cross-field rules (passwords must match) belong in clean(), never in a single field's method.",
            "learn": [
              "ModelForm: Meta model and fields, save() with commit=False for extra processing",
              "clean_<field>() for single-field rules and clean() for cross-field rules",
              "Raising ValidationError and how errors surface in templates"
            ],
            "do": [
              "Convert a hand-rolled form into a ModelForm and delete the duplicated code",
              "Add a clean() method enforcing a rule across two fields",
              "Use commit=False to attach request.user before saving"
            ],
            "tools": ["Django"],
            "res": [
              ["Creating forms from models", "https://docs.djangoproject.com/en/5.2/topics/forms/modelforms/"],
              ["Form and field validation", "https://docs.djangoproject.com/en/5.2/ref/forms/validation/"]
            ]
          },
          {
            "t": "CSRF & Secure Form Handling",
            "d": "Cross-site request forgery is defeated by one template tag and one pattern. Understand the attack to appreciate the defense.",
            "lv": 2,
            "time": "~2h",
            "tip": "Every POST form needs {% csrf_token %}, no exceptions. The 403 you get without it is Django protecting your users from a real attack, not bureaucracy.",
            "learn": [
              "The CSRF attack: how a malicious site forges requests as your logged-in user",
              "The {% csrf_token %} tag and CsrfViewMiddleware: token generation and checking",
              "Post/Redirect/Get: why successful POSTs redirect instead of rendering"
            ],
            "do": [
              "Remove the CSRF token from a form and observe the 403 to understand the protection",
              "Implement Post/Redirect/Get and confirm refresh does not resubmit",
              "Mark one view csrf_exempt deliberately and document why it is safe"
            ],
            "tools": ["Django"],
            "res": [
              ["Cross Site Request Forgery protection", "https://docs.djangoproject.com/en/5.2/ref/csrf/"]
            ]
          },
          {
            "t": "Authentication: The Built-in User Model",
            "d": "Login, logout, password hashing, and sessions come built in. Use contrib.auth properly before reaching for anything custom.",
            "lv": 2,
            "time": "~3h",
            "tip": "Passwords are never stored, only hashed with PBKDF2 (1.2M iterations in Django 6). If you ever think about storing a password yourself, stop: use the built-in system.",
            "learn": [
              "The auth views: LoginView, LogoutView, password change and reset flows",
              "@login_required, LoginRequiredMixin, and the request.user object",
              "Sessions: how login persists across requests and how to configure backends"
            ],
            "do": [
              "Wire up login/logout with the built-in views and templates",
              "Protect a view with login_required and set LOGIN_URL for redirects",
              "Walk the password reset flow end to end with the console email backend"
            ],
            "tools": ["Django"],
            "res": [
              ["Using the Django authentication system", "https://docs.djangoproject.com/en/5.2/topics/auth/default/"]
            ]
          },
          {
            "t": "Custom User Model",
            "d": "Swap in your own user model on day one of every project. Swapping it in month six means migrating every foreign key that points at users.",
            "lv": 2,
            "time": "~3h",
            "tip": "Set AUTH_USER_MODEL before the first migrate, even if your custom model only adds one field. Django's docs call this out explicitly because reversing it later is genuinely painful.",
            "learn": [
              "AbstractUser vs AbstractBaseUser: extending vs fully customizing",
              "AUTH_USER_MODEL and why it must be set before any migration runs",
              "Referencing the user model with get_user_model() and settings.AUTH_USER_MODEL"
            ],
            "do": [
              "Create a custom user extending AbstractUser with one extra field",
              "Set AUTH_USER_MODEL in a fresh project and run the first migration",
              "Reference the user model correctly in a ForeignKey and in view code"
            ],
            "tools": ["Django"],
            "res": [
              ["Customizing authentication: custom user model", "https://docs.djangoproject.com/en/5.2/topics/auth/customizing/#substituting-a-custom-user-model"]
            ]
          },
          {
            "t": "Social Auth with django-allauth",
            "d": "Login with Google and GitHub in an afternoon. allauth handles OAuth flows, email verification, and account management.",
            "lv": 2,
            "time": "~3h",
            "tip": "OAuth callback URLs must match your provider dashboard exactly, including http vs https and trailing slashes. Ninety percent of allauth setup pain is a mismatched redirect URI.",
            "learn": [
              "OAuth2 flow at a high level: redirect, authorize, callback, token exchange",
              "Configuring allauth providers: client IDs, secrets, and Sites framework",
              "Email verification, account connections, and the signup pipeline"
            ],
            "do": [
              "Install allauth and configure one social provider end to end",
              "Log in with the provider and inspect the created SocialAccount",
              "Enable mandatory email verification and test the full signup flow"
            ],
            "tools": ["Django", "django-allauth"],
            "res": [
              ["django-allauth documentation", "https://docs.allauth.org/"]
            ]
          },
          {
            "t": "Authorization: Permissions & Groups",
            "d": "Authentication asks who you are; authorization asks what you may do. Model-level permissions, groups, and object-level patterns.",
            "lv": 3,
            "time": "~3h",
            "tip": "Django's built-in permissions are per-model (can change post), not per-object (can change THIS post). For per-object rules you need custom checks in the view or a library.",
            "learn": [
              "Built-in permissions: add/change/delete/view and how the admin uses them",
              "Groups, has_perm(), and the PermissionRequiredMixin",
              "Object-level authorization patterns: owner checks and when to reach for django-guardian"
            ],
            "do": [
              "Create groups with different permission sets and assign users to them",
              "Protect a view with PermissionRequiredMixin and test denial",
              "Implement an owner-only edit rule with a custom check in the view"
            ],
            "tools": ["Django"],
            "res": [
              ["Permissions and authorization", "https://docs.djangoproject.com/en/5.2/topics/auth/default/#permissions-and-authorization"]
            ]
          },
          {
            "t": "Security Hardening: CSP & the SECURE_* Family",
            "d": "Django 6 ships built-in Content Security Policy support. Combine it with the SECURE_* settings for a production-grade security posture.",
            "lv": 3,
            "time": "~3h",
            "tip": "Deploy CSP in report-only mode first (SECURE_CSP_REPORT_ONLY). Flipping straight to enforcement will break inline scripts you forgot about and take down features.",
            "learn": [
              "Built-in CSP in Django 6: ContentSecurityPolicyMiddleware and the SECURE_CSP setting",
              "SECURE_SSL_REDIRECT, HSTS, cookie flags, and X-Frame-Options: the classic hardening set",
              "The deployment checklist: running check --deploy and fixing every warning"
            ],
            "do": [
              "Run python manage.py check --deploy and fix every warning it reports",
              "Enable CSP in report-only mode and review the violation reports",
              "Set secure cookie flags and HSTS, then verify headers with curl -I"
            ],
            "tools": ["Django"],
            "res": [
              ["Django 6.0 release notes: CSP support", "https://docs.djangoproject.com/en/6.1/releases/6.0/#content-security-policy-support"],
              ["Deployment checklist", "https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/"]
            ]
          }
        ]
      }
      ,
      {
        "t": "Building APIs",
        "d": "Django serves APIs beautifully. DRF is the industry standard; Django Ninja is the modern type-hinted alternative.",
        "lv": 2,
        "children": [
          {
            "t": "DRF: Serializers",
            "d": "Serializers translate between models and JSON. They validate input, shape output, and handle nested relationships.",
            "lv": 2,
            "time": "~4h",
            "tip": "A serializer is a form for your API: it validates incoming data exactly like a Django form. Reuse that mental model and DRF validation clicks immediately.",
            "learn": [
              "ModelSerializer: declaring fields, read_only_fields, and extra_kwargs",
              "Nested serializers and depth: representing relationships without N+1",
              "Validation in serializers: validate_<field> and object-level validate()"
            ],
            "do": [
              "Write a ModelSerializer for one model with a nested related serializer",
              "POST invalid data and read the structured error response",
              "Optimize a list endpoint with select_related and confirm via query count"
            ],
            "tools": ["Django REST framework"],
            "res": [
              ["DRF serializers", "https://www.django-rest-framework.org/api-guide/serializers/"],
              ["DRF quickstart", "https://www.django-rest-framework.org/tutorial/quickstart/"]
            ]
          },
          {
            "t": "DRF: Views, ViewSets & Routers",
            "d": "From function views to ViewSets: pick the right abstraction level for each endpoint and let routers generate your URLconf.",
            "lv": 2,
            "time": "~4h",
            "tip": "Start with generic views (ListCreateAPIView); graduate to ViewSets when several endpoints share one resource. Starting with ViewSets for everything hides the fundamentals.",
            "learn": [
              "APIView and generic views: the explicit, readable foundation",
              "ViewSets and ModelViewSet: bundling list/retrieve/create/update/destroy",
              "Routers: auto-generated URLs and the browsable API for development"
            ],
            "do": [
              "Build CRUD endpoints with generic views for one resource",
              "Convert them to a ModelViewSet wired through a DefaultRouter",
              "Browse your API in DRF's web UI and test each endpoint"
            ],
            "tools": ["Django REST framework"],
            "res": [
              ["DRF generic views", "https://www.django-rest-framework.org/api-guide/generic-views/"],
              ["DRF viewsets", "https://www.django-rest-framework.org/api-guide/viewsets/"]
            ]
          },
          {
            "t": "DRF: Auth, Permissions & Throttling",
            "d": "Production APIs need identity, access control, and rate limits. DRF's pluggable classes make each one a configuration choice.",
            "lv": 3,
            "time": "~3h",
            "tip": "Session auth is for browsers, token auth is for API clients. Mixing them up gives you CSRF holes in one direction and broken mobile clients in the other.",
            "learn": [
              "TokenAuthentication vs JWT (djangorestframework-simplejwt): tradeoffs",
              "Permission classes: IsAuthenticated, DjangoModelPermissions, custom object permissions",
              "Throttling: scoped rate limits that keep one client from melting your API"
            ],
            "do": [
              "Protect endpoints with token auth and test with an Authorization header",
              "Write a custom permission class for owner-only object access",
              "Add throttling and verify a burst of requests gets 429 responses"
            ],
            "tools": ["Django REST framework", "djangorestframework-simplejwt"],
            "res": [
              ["DRF authentication", "https://www.django-rest-framework.org/api-guide/authentication/"],
              ["DRF throttling", "https://www.django-rest-framework.org/api-guide/throttling/"]
            ]
          },
          {
            "t": "Django Ninja: Fast, Type-Hinted APIs",
            "d": "Ninja builds APIs from Python type hints with automatic OpenAPI docs. The modern alternative when you want speed and less boilerplate.",
            "lv": 2,
            "time": "~3h",
            "tag": "opt",
            "tip": "Ninja and DRF solve the same problem with different philosophies. Learn one deeply; skim the other so you can read any codebase.",
            "learn": [
              "Schemas from type hints: request and response validation without serializer classes",
              "Automatic OpenAPI/Swagger docs generated from your code",
              "Async views and where Ninja fits vs DRF in real projects"
            ],
            "do": [
              "Build the same CRUD resource in Ninja that you built in DRF",
              "Open the auto-generated Swagger UI and test your endpoints",
              "Compare lines of code and decide which you would pick for a new project"
            ],
            "tools": ["Django Ninja"],
            "res": [
              ["Django Ninja documentation", "https://django-ninja.dev/"]
            ]
          }
        ]
      },
      {
        "t": "Admin, Middleware & Shipping",
        "d": "Customize the admin, hook the request pipeline, then make it fast, tested, and production-ready.",
        "lv": 3,
        "children": [
          {
            "t": "Django Admin Customization",
            "d": "The admin is a free back office. list_display, filters, inlines, and actions turn it from a database browser into a real operations tool.",
            "lv": 2,
            "time": "~3h",
            "tip": "The admin is for trusted staff, not end users. The moment you start building end-user features in admin.py, you have outgrown it and need real views.",
            "learn": [
              "ModelAdmin essentials: list_display, list_filter, search_fields, ordering",
              "Inlines for editing related objects on one page",
              "Custom actions, readonly fields, and fieldsets for complex forms"
            ],
            "do": [
              "Customize a ModelAdmin with display columns, filters, and search",
              "Add an inline for a related model and a bulk admin action",
              "Restrict admin access with staff permissions and test as a non-staff user"
            ],
            "tools": ["Django"],
            "res": [
              ["Django admin site", "https://docs.djangoproject.com/en/5.2/ref/contrib/admin/"],
              ["Admin actions", "https://docs.djangoproject.com/en/5.2/ref/contrib/admin/actions/"]
            ]
          },
          {
            "t": "Custom Middleware",
            "d": "Middleware wraps every request and response. Write your own for cross-cutting concerns like request logging or feature flags.",
            "lv": 3,
            "time": "~3h",
            "tip": "Middleware order matters: it runs top-down on the way in and bottom-up on the way out. Authentication must run before any middleware that reads request.user.",
            "learn": [
              "The middleware contract: __init__ and __call__ wrapping get_response",
              "Order and onion model: request phase vs response phase execution",
              "Real use cases: timing, request IDs, maintenance mode, custom headers"
            ],
            "do": [
              "Write middleware that adds a request ID header to every response",
              "Write timing middleware that logs slow requests",
              "Reorder MIDDLEWARE deliberately and observe what breaks"
            ],
            "tools": ["Django"],
            "res": [
              ["Middleware", "https://docs.djangoproject.com/en/5.2/topics/http/middleware/"]
            ]
          },
          {
            "t": "Signals",
            "d": "Signals let decoupled apps react to events like post_save. Powerful, implicit, and easy to abuse: learn the discipline around them.",
            "lv": 3,
            "time": "~2h",
            "tip": "Prefer explicit function calls over signals. Signals hide control flow: six months later nobody remembers that saving a User also creates a Profile via a signal in another app.",
            "learn": [
              "Built-in signals: post_save, pre_delete, m2m_changed, and request signals",
              "Connecting receivers: the @receiver decorator and avoiding duplicate connections",
              "When signals are right (cross-app decoupling) vs wrong (business logic)"
            ],
            "do": [
              "Write a post_save receiver that creates a related object on user creation",
              "Move one signal's logic into an explicit call and compare readability",
              "Disconnect a receiver in a test to prove isolation"
            ],
            "tools": ["Django"],
            "res": [
              ["Signals", "https://docs.djangoproject.com/en/5.2/topics/signals/"]
            ]
          },
          {
            "t": "Caching",
            "d": "Cache what is expensive to compute. Per-view, template fragment, and low-level caching with Redis as the production backend.",
            "lv": 3,
            "time": "~3h",
            "tip": "Cache invalidation is the hard part. Prefer short TTLs and versioned keys over clever invalidation schemes you will forget to maintain.",
            "learn": [
              "Cache backends: local memory for dev, Redis for production",
              "Three levels: per-view @cache_page, template fragment caching, low-level cache API",
              "Invalidation strategies: timeouts, key versioning, and signal-based busting"
            ],
            "do": [
              "Cache an expensive view with @cache_page and measure the speedup",
              "Add template fragment caching around a heavy sidebar",
              "Use the low-level API to cache a computed value with a versioned key"
            ],
            "tools": ["Django", "Redis", "django-redis"],
            "res": [
              ["Django's cache framework", "https://docs.djangoproject.com/en/5.2/topics/cache/"]
            ]
          },
          {
            "t": "Background Tasks: django.tasks & Celery",
            "d": "Slow work does not belong in the request cycle. Django 6 ships a built-in tasks framework; Celery remains the heavy-duty standard.",
            "lv": 3,
            "time": "~1d",
            "tip": "Tasks must be idempotent: assume any task can run twice. A welcome email sent twice is embarrassing; a charge processed twice is a lawsuit.",
            "learn": [
              "The django.tasks framework (Django 6+): @task decorator, .enqueue(), the TASKS setting",
              "Celery: workers, brokers (Redis), retries, and periodic tasks with beat",
              "What goes in a task: emails, image processing, reports, webhooks"
            ],
            "do": [
              "Define a django.tasks task and enqueue it from a view",
              "Set up Celery with Redis, run a worker, and process a real task",
              "Add retry logic and a periodic beat schedule for a nightly job"
            ],
            "tools": ["Django", "Celery", "Redis"],
            "res": [
              ["Django 6.0 release notes: background tasks", "https://docs.djangoproject.com/en/6.1/releases/6.0/#background-tasks"],
              ["Celery documentation", "https://docs.celeryq.dev/"]
            ]
          },
          {
            "t": "Logging & Debugging",
            "d": "Production problems need logs; development problems need visibility. Configure Django's logging and wield the debug toolbar like a pro.",
            "lv": 3,
            "time": "~3h",
            "tip": "print() debugging does not scale to production. Configure the LOGGING dict once per project and every future incident gets easier.",
            "learn": [
              "The LOGGING dict: loggers, handlers, formatters, and levels",
              "django-debug-toolbar: SQL panel, template panel, and cache panel",
              "pdb/ipdb breakpoints and reading tracebacks in the dev error page"
            ],
            "do": [
              "Configure file logging for errors and console logging for development",
              "Install debug toolbar and find your slowest query on a real page",
              "Drop into a pdb breakpoint inside a view and inspect the request"
            ],
            "tools": ["Django", "django-debug-toolbar"],
            "res": [
              ["Logging", "https://docs.djangoproject.com/en/5.2/topics/logging/"],
              ["django-debug-toolbar", "https://django-debug-toolbar.readthedocs.io/"]
            ]
          },
          {
            "t": "Testing with pytest-django",
            "d": "Test the behavior your users depend on: models, views, forms, and APIs. pytest-django makes Django testing fast and expressive.",
            "lv": 3,
            "time": "~1d",
            "tip": "Test behavior, not implementation. A test that asserts on internal method calls breaks on every refactor; a test that posts to a URL and checks the database survives them.",
            "learn": [
              "TestCase vs pytest: @pytest.mark.django_db, fixtures, and the test client",
              "Testing views: posting forms, following redirects, asserting templates and context",
              "Factories (factory_boy) vs fixtures for test data, and measuring coverage"
            ],
            "do": [
              "Write pytest tests for a model's custom method and a form's validation",
              "Test a full view flow: GET the form, POST valid data, assert redirect and DB state",
              "Run coverage and push one untested app above 80 percent"
            ],
            "tools": ["pytest", "pytest-django", "factory_boy"],
            "res": [
              ["Testing in Django", "https://docs.djangoproject.com/en/5.2/topics/testing/"],
              ["pytest-django", "https://pytest-django.readthedocs.io/"]
            ]
          },
          {
            "t": "Async Django",
            "d": "Async views and ASGI unlock high-concurrency workloads. Learn where async helps Django and where it adds complexity for nothing.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "Async views only help when your view waits on IO (external APIs, websockets). A standard ORM-backed page gains nothing from async and loses simplicity.",
            "learn": [
              "ASGI vs WSGI: when to serve with uvicorn instead of gunicorn sync workers",
              "Async views, sync_to_async, and the async ORM methods",
              "Django Channels for websockets and the AsyncPaginator in Django 6"
            ],
            "do": [
              "Convert a view that calls an external API to async and serve via uvicorn",
              "Use sync_to_async around ORM calls inside an async view",
              "Benchmark sync vs async for your actual workload and document the result"
            ],
            "tools": ["Django", "uvicorn", "Django Channels"],
            "res": [
              ["Async support", "https://docs.djangoproject.com/en/5.2/topics/async/"],
              ["Deploying with ASGI", "https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/"]
            ]
          },
          {
            "t": "Internationalization",
            "d": "gettext-based i18n makes your app speak many languages. Mark strings, extract catalogs, and let translators do the rest.",
            "lv": 3,
            "time": "~2h",
            "tag": "opt",
            "tip": "Mark strings translatable from the start with {% trans %} and gettext(). Retrofitting i18n means touching every template, which is why it always gets postponed forever.",
            "learn": [
              "gettext, {% trans %} and {% blocktrans %}, and the LANGUAGES setting",
              "makemessages and compilemessages: the translation workflow",
              "LocaleMiddleware and language selection via URL, session, or browser headers"
            ],
            "do": [
              "Mark a page's strings translatable and extract the message catalog",
              "Add a second language translation and switch languages in the browser",
              "Handle pluralization with blocktrans count"
            ],
            "tools": ["Django", "gettext"],
            "res": [
              ["Translation", "https://docs.djangoproject.com/en/5.2/topics/i18n/translation/"]
            ]
          },
          {
            "t": "Deployment: The Production Checklist",
            "d": "Ship it: hardened settings, a real WSGI/ASGI server, static files, a managed database, and a repeatable deploy process.",
            "lv": 3,
            "time": "~2d",
            "tip": "Automate deploys before you need to. The deploy you do by hand at midnight after a bug report is the deploy that takes the site down.",
            "learn": [
              "Gunicorn or uvicorn behind a process manager; WhiteNoise for static files",
              "Environment-driven settings: secrets, DEBUG=False, ALLOWED_HOSTS, database URL",
              "Migrations on deploy, collectstatic in CI, backups, and monitoring basics"
            ],
            "do": [
              "Run check --deploy and resolve every warning on a production settings module",
              "Containerize the app with Docker: gunicorn, migrations, and collectstatic on boot",
              "Deploy to a real host and verify HTTPS, static files, and error logging"
            ],
            "tools": ["Django", "Gunicorn", "Docker", "PostgreSQL", "WhiteNoise"],
            "res": [
              ["Deploying Django", "https://docs.djangoproject.com/en/5.2/howto/deployment/"],
              ["Deployment checklist", "https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/"]
            ]
          },
          {
            "t": "Capstone: Ship a Complete Django App",
            "d": "Prove the whole roadmap: a real multi-app project with auth, an API, tests, background tasks, and a production deploy.",
            "lv": 3,
            "time": "~1w",
            "badge": "PROJECT",
            "tip": "Scope it like a product, not a tutorial: one real user need, done completely, deployed publicly. A finished small app beats an abandoned ambitious one every time.",
            "learn": [
              "Scoping a shippable product: one user, one job-to-be-done, done well",
              "Putting it together: models, auth, DRF API, Celery tasks, pytest suite",
              "Operating it: deploy, monitor logs, fix the first real bug from a real user"
            ],
            "do": [
              "Build and deploy a complete app: auth, CRUD, background emails, API endpoints",
              "Write tests covering the critical user flows and run them in CI",
              "Share the live URL, collect feedback, and ship one improvement from it"
            ],
            "tools": ["Django", "PostgreSQL", "Celery", "Docker", "pytest"],
            "res": [
              ["Deploying Django", "https://docs.djangoproject.com/en/5.2/howto/deployment/"],
              ["Django deployment checklist", "https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/"]
            ]
          }
        ]
      }
    ]
  }
});
