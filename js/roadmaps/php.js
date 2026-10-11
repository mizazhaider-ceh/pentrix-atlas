/* Atlas roadmap data: PHP (php)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "php",
  "title": "PHP",
  "icon": "🪄",
  "color": "#777BB3",
  "desc": "Modern PHP from the ground up: language fundamentals, Composer, object-oriented design, security-first habits, databases with PDO, and the framework landscape, all on PHP 8.5-era tooling.",
  "kind": "skill",
  "root": {
    "t": "PHP",
    "d": "The server-side language behind much of the web: from your first script to secure, framework-powered applications.",
    "children": [
      {
        "t": "PHP Setup & First Steps",
        "d": "Get PHP 8.5 running locally and understand how a request becomes a response.",
        "lv": 1,
        "children": [
          {
            "t": "What Is PHP?",
            "d": "A server-side language that generates HTML before the browser ever sees it, and it runs a huge share of the web.",
            "lv": 1,
            "time": "~2h",
            "tip": "Old PHP tutorials teach patterns modern PHP replaced. If a guide uses mysql_* functions or register_globals, close the tab.",
            "learn": [
              "PHP executes on the server: request in, HTML out; the browser never sees your code",
              "The PHP 8.x era: JIT, union types, attributes, enums, readonly, fibers, a different language from PHP 5",
              "Where PHP lives: WordPress, Laravel, Symfony, Wikipedia, and most shared hosting"
            ],
            "do": [
              "Read the PHP 8.5 release highlights on php.net",
              "Check which PHP version your host or laptop currently runs with php -v",
              "Write down three apps you use daily and guess which run PHP"
            ],
            "tools": ["PHP", "php.net"],
            "res": [
              ["PHP Manual", "https://www.php.net/docs.php"],
              ["Supported Versions & EOL Dates", "https://www.php.net/supported-versions.php"]
            ]
          },
          {
            "t": "Installing PHP 8.5",
            "d": "Run the current stable branch (8.5); 8.2 loses security support at the end of 2026.",
            "lv": 1,
            "time": "~2h",
            "tip": "Develop on the same PHP version you deploy. Version mismatches are the quietest source of 'works on my machine' bugs.",
            "learn": [
              "Why the version matters: active support vs security-only vs end-of-life",
              "Installing via package managers (apt, Homebrew, Chocolatey/winget) vs manual builds",
              "Verifying with php -v and listing loaded extensions with php -m"
            ],
            "do": [
              "Install PHP 8.5 with your OS package manager",
              "Run php -v and confirm the 8.5.x line",
              "Run php -m and spot mbstring, curl, and pdo_mysql in the list"
            ],
            "tools": ["Homebrew", "apt", "Chocolatey"],
            "res": [
              ["PHP Downloads", "https://www.php.net/downloads.php"]
            ]
          },
          {
            "t": "Local Dev Environments",
            "d": "Pick a local setup that mirrors production: the built-in server for learning, Docker for parity.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "php -S localhost:8000: the built-in dev server, perfect for learning, never for production",
              "Full stacks (XAMPP, MAMP, Laravel Herd) vs Docker containers matching production",
              "Why dev/prod parity matters: extensions, versions, and config drift"
            ],
            "do": [
              "Serve a folder with php -S localhost:8000 and open it in a browser",
              "Run the official php:8.5 image with docker run and compare php -v",
              "Note which extensions differ between your two setups"
            ],
            "tools": ["PHP built-in server", "Docker", "Laravel Herd", "XAMPP"],
            "res": [
              ["Official PHP Docker Image", "https://hub.docker.com/_/php"]
            ]
          },
          {
            "t": "Your First Script & the Request Lifecycle",
            "d": "Write index.php, then trace what happens between the browser's request and the HTML it receives.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "PHP tags, echo, and embedding PHP inside HTML",
              "The lifecycle: HTTP request → web server → PHP-FPM → your script → HTML response",
              "Statelessness: every request starts with a blank slate, nothing persists between requests except what you store"
            ],
            "do": [
              "Write index.php that echoes your name from a ?name= query parameter",
              "Dump $_SERVER and find REQUEST_METHOD and SCRIPT_NAME",
              "Watch the web server access log while you refresh the page"
            ],
            "tools": ["PHP", "Nginx", "Apache"],
            "res": [
              ["PHP Language Reference", "https://www.php.net/manual/en/langref.php"]
            ]
          },
          {
            "t": "Error Reporting & php.ini",
            "d": "See every error while you learn, then learn why production must hide them.",
            "lv": 1,
            "time": "~2h",
            "tip": "display_errors=On in production leaks file paths, SQL, and secrets to attackers. Log errors there, never display them.",
            "learn": [
              "display_errors vs log_errors: loud in development, silent in production",
              "error_reporting levels: notices, warnings, and fatal errors",
              "Finding your config with php --ini and reading a stack trace"
            ],
            "do": [
              "Set error_reporting=E_ALL and display_errors=On for your dev setup",
              "Trigger an undefined-variable notice and a fatal error on purpose; read both outputs",
              "Run php --ini and open the loaded php.ini file"
            ],
            "tools": ["php.ini", "Xdebug"],
            "res": [
              ["Error Handling in PHP", "https://www.php.net/manual/en/book.errorfunc.php"]
            ]
          }
        ]
      },
      {
        "t": "Language Fundamentals",
        "d": "The core syntax: variables, types, control flow, functions, arrays, and strings.",
        "lv": 1,
        "children": [
          {
            "t": "Syntax, Comments & Embedding",
            "d": "The shape of a PHP file: tags, statements, comments, and mixing PHP with HTML.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Opening tags: <?php vs the short echo <?= ?>",
              "Statement terminators, comments (//, #, /* */), and case sensitivity rules",
              "Alternative syntax for templates: if/endif and foreach/endforeach in views"
            ],
            "do": [
              "Build a page that mixes HTML with three echo statements and one <?= ?> shortcut",
              "Rewrite an if block using the if:/endif; alternative syntax",
              "Break a script on purpose by dropping a semicolon and read the parse error"
            ],
            "tools": ["PHP"],
            "res": [
              ["PHP Basic Syntax", "https://www.php.net/manual/en/language.basic-syntax.php"]
            ]
          },
          {
            "t": "Variables, Scope & Constants",
            "d": "The $ sigil, where variables live and die, and values that never change.",
            "lv": 1,
            "time": "~3h",
            "tip": "Functions cannot see outside variables unless you pass them in or import them with use. Reaching for global $x is almost always the wrong fix.",
            "learn": [
              "Every variable starts with $; variable variables ($$) exist but you should avoid them",
              "Local vs global scope; the use keyword for closures",
              "Constants with const and define(); superglobals like $_GET are always in scope"
            ],
            "do": [
              "Write a function that tries to read an outer variable, watch it fail, then fix it with a parameter",
              "Define APP_ENV as a constant and use it in two different files",
              "Dump $_SERVER inside a function to prove superglobals ignore scope"
            ],
            "tools": ["PHP"],
            "res": [
              ["Variables & Scope", "https://www.php.net/manual/en/language.variables.scope.php"]
            ]
          },
          {
            "t": "Types, strict_types & Casting",
            "d": "PHP's type juggling is convenient until it bites, strict_types is the seatbelt.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Scalar types (int, float, string, bool), null, and compound types",
              "Coercive vs strict typing: declare(strict_types=1) and what it changes at call boundaries",
              "Casting with (int), (array), and friends, and when casting hides bugs"
            ],
            "do": [
              "Call a function typed int with the string '5' twice: once coercive, once with strict_types=1",
              "Compare == vs === on 0, '0', '', null, and false; write down the surprises",
              "Cast the string '12.9 items' to int and explain the result"
            ],
            "tools": ["PHP", "PHPStan"],
            "res": [
              ["PHP Types", "https://www.php.net/manual/en/language.types.php"]
            ]
          },
          {
            "t": "Operators",
            "d": "Arithmetic, comparison, logical, string, and the spaceship operator, with precedence traps.",
            "lv": 1,
            "time": "~2h",
            "tip": "Use parentheses instead of memorizing precedence. The person reading your code (future you) will thank you.",
            "learn": [
              "String concatenation with . (not +) and .= for appending",
              "The spaceship operator <=> for three-way comparisons in sorting",
              "Precedence traps: && vs and, and why ! $a == $b rarely means what it looks like"
            ],
            "do": [
              "Sort an array of scores with usort and <=>",
              "Demonstrate the difference between && and and in an assignment",
              "Fix a real precedence bug by adding parentheses"
            ],
            "tools": ["PHP"],
            "res": [
              ["PHP Operators", "https://www.php.net/manual/en/language.operators.php"]
            ]
          },
          {
            "t": "Conditionals: if, switch & match",
            "d": "Branching logic, and why match() replaced switch for most value mapping.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "if/elseif/else and the ternary shorthand",
              "match(true) for complex conditions; match returns a value, switch does not",
              "Strict comparison in match vs loose comparison in switch, a classic bug source"
            ],
            "do": [
              "Rewrite a 5-branch switch as a match expression returning a string",
              "Show switch('0') matching case 0 and match('0') not matching it",
              "Build an HTTP status code → message mapper with match(true)"
            ],
            "tools": ["PHP"],
            "res": [
              ["match Expression", "https://www.php.net/manual/en/control-structures.match.php"]
            ]
          },
          {
            "t": "Loops",
            "d": "for, foreach, while, and do-while, plus break, continue, and iterating by reference.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "foreach over arrays and key => value pairs; by-reference iteration with &$v",
              "break/continue, including breaking out of nested loops with break 2",
              "When a loop should be an array function instead (map/filter thinking)"
            ],
            "do": [
              "Double every value in an array with foreach by reference, then unset the reference",
              "Find the first user over 18 in a list using break",
              "Rewrite a manual accumulation loop with array_reduce"
            ],
            "tools": ["PHP"],
            "res": [
              ["Control Structures", "https://www.php.net/manual/en/language.control-structures.php"]
            ]
          },
          {
            "t": "Functions",
            "d": "Declaring functions, typed parameters, return types, defaults, and variadics.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Parameter types, return types, and nullable ?Type declarations",
              "Default values, named arguments (PHP 8), and variadic ...$args",
              "Passing by reference (&$x) and why return values beat it"
            ],
            "do": [
              "Write greet(string $name = 'world'): string and call it with a named argument",
              "Write sum(int ...$nums): int and call it with five numbers",
              "Convert a by-reference function into one that returns its result"
            ],
            "tools": ["PHP"],
            "res": [
              ["User-defined Functions", "https://www.php.net/manual/en/functions.user-defined.php"]
            ]
          },
          {
            "t": "Closures & Arrow Functions",
            "d": "Anonymous functions that capture their surroundings, the gateway to callbacks and functional style.",
            "lv": 2,
            "time": "~3h",
            "tip": "Arrow functions auto-capture variables by value. If your closure seems to 'forget' updates to an outer variable, that is why.",
            "learn": [
              "Closures with use ($var) vs fn() => arrow functions with automatic capture",
              "Callbacks: passing functions to array_map, usort, and array_filter",
              "Where closures shine: middleware, event listeners, and query builders"
            ],
            "do": [
              "Filter an array of users with array_filter and an arrow function",
              "Sort products by price with usort and a closure",
              "Rewrite a use ($tax) closure as fn() and note what you can no longer do"
            ],
            "tools": ["PHP"],
            "res": [
              ["Anonymous Functions", "https://www.php.net/manual/en/functions.anonymous.php"]
            ]
          },
          {
            "t": "Arrays",
            "d": "Indexed, associative, and multidimensional arrays, PHP's one collection to rule them all.",
            "lv": 1,
            "time": "~4h",
            "tip": "PHP arrays are ordered maps, not plain lists. array_values() re-indexes; without it, json_encode can emit an object instead of an array.",
            "learn": [
              "Indexed vs associative arrays; PHP arrays are ordered hash maps under the hood",
              "The 70+ array functions: map, filter, reduce, column, merge, slice",
              "Destructuring with list() and [...] in foreach"
            ],
            "do": [
              "Build a users table as an array of associative arrays; extract emails with array_column",
              "Group orders by status using a foreach accumulator",
              "json_encode an array with a missing index 0 and observe the {} output"
            ],
            "tools": ["PHP"],
            "res": [
              ["Array Functions", "https://www.php.net/manual/en/ref.array.php"]
            ]
          },
          {
            "t": "Strings & String Functions",
            "d": "Interpolation, heredoc, and the multibyte reality of real-world text.",
            "lv": 1,
            "time": "~3h",
            "tip": "strlen() counts bytes, not characters. On UTF-8 text with emoji or accents, always reach for mb_strlen().",
            "learn": [
              "Single vs double quotes; interpolation and {$var} syntax",
              "Heredoc/nowdoc for multi-line templates",
              "Multibyte strings: mb_* functions, and why substr breaks emoji"
            ],
            "do": [
              "Build an email body with heredoc and interpolated variables",
              "Compare strlen vs mb_strlen on a string with emoji",
              "Safely truncate a UTF-8 excerpt with mb_substr"
            ],
            "tools": ["PHP", "mbstring"],
            "res": [
              ["String Functions", "https://www.php.net/manual/en/ref.strings.php"]
            ]
          }
        ]
      },
      {
        "t": "The Web: Requests, Forms & Files",
        "d": "Superglobals, forms, sessions, cookies, uploads, and file handling, the web-facing half of PHP.",
        "lv": 1,
        "children": [
          {
            "t": "Superglobals & the Request",
            "d": "Read everything the browser sends: query strings, POST bodies, headers, and server info.",
            "lv": 1,
            "time": "~3h",
            "tip": "Never trust superglobal input. $_GET['id'] is attacker-controlled data, validate it before it touches logic or SQL.",
            "learn": [
              "$_GET, $_POST, $_REQUEST, $_SERVER, and $_FILES, what lives where",
              "Reading headers and the request method; parsing JSON request bodies",
              "filter_input() for validated, sanitized input"
            ],
            "do": [
              "Build a debug page that dumps method, path, and all input sources",
              "Send a JSON POST with curl and read it via file_get_contents('php://input')",
              "Validate an ?page= parameter with filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT)"
            ],
            "tools": ["PHP", "curl"],
            "res": [
              ["Superglobals", "https://www.php.net/manual/en/language.variables.superglobals.php"]
            ]
          },
          {
            "t": "Form Processing & Validation",
            "d": "Take user input, validate it properly, and show errors without losing the form.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The validate-then-escape pipeline: check shape first, escape on output",
              "filter_var() with FILTER_VALIDATE_EMAIL, FILTER_VALIDATE_URL, and friends",
              "Repopulating forms and displaying per-field errors"
            ],
            "do": [
              "Build a registration form that validates email, password length, and matching confirmation",
              "Repopulate fields and show errors after a failed submit",
              "Reject an invalid email with filter_var and explain why the check is not enough alone"
            ],
            "tools": ["PHP"],
            "res": [
              ["filter_var", "https://www.php.net/manual/en/function.filter-var.php"]
            ]
          },
          {
            "t": "Sessions & Cookies",
            "d": "Remember users across stateless requests, and do it without handing attackers the keys.",
            "lv": 1,
            "time": "~3h",
            "tip": "Call session_regenerate_id(true) after login. Otherwise an attacker who planted a session ID keeps the victim's logged-in session (session fixation).",
            "learn": [
              "session_start(), $_SESSION, and where session data is stored",
              "Cookie flags: HttpOnly, Secure, SameSite, and what each one blocks",
              "Session fixation and hijacking basics"
            ],
            "do": [
              "Build login/logout with $_SESSION and regenerate the ID on login",
              "Set a 'theme' cookie with Secure, HttpOnly, and SameSite=Lax",
              "Inspect the PHPSESSID cookie in browser devtools"
            ],
            "tools": ["PHP"],
            "res": [
              ["Session Handling", "https://www.php.net/manual/en/book.session.php"]
            ]
          },
          {
            "t": "File Uploads",
            "d": "Accept files from users without letting them upload a webshell.",
            "lv": 2,
            "time": "~3h",
            "tip": "Check the MIME type yourself with finfo, never trust $_FILES['x']['type'], the browser sends that value and attackers lie.",
            "learn": [
              "The $_FILES structure and upload error codes",
              "Validating with finfo_file(), size limits, and randomized storage names",
              "Storing uploads outside the web root and serving them through a script"
            ],
            "do": [
              "Build an avatar upload that accepts only real JPEG/PNG under 2 MB",
              "Store files with random names outside public/ and serve them via readfile()",
              "Try uploading a .php file renamed to .jpg and watch your validation reject it"
            ],
            "tools": ["PHP"],
            "res": [
              ["Handling File Uploads", "https://www.php.net/manual/en/features.file-upload.php"]
            ]
          },
          {
            "t": "File Handling & Includes",
            "d": "Read and write files, and compose apps from multiple files with require.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "require vs include (and the _once variants); why require is for essentials",
              "Reading/writing with file_get_contents, file_put_contents, and LOCK_EX",
              "Directory iteration and basic file permissions"
            ],
            "do": [
              "Split a page into header.php/footer.php and compose it with require",
              "Build a simple visitor counter with file_put_contents and LOCK_EX",
              "List a directory's images with scandir and render them"
            ],
            "tools": ["PHP"],
            "res": [
              ["Filesystem Functions", "https://www.php.net/manual/en/ref.filesystem.php"]
            ]
          },
          {
            "t": "Headers, Redirects & HTTP Status",
            "d": "Speak HTTP properly: redirects, status codes, content types, and downloads.",
            "lv": 1,
            "time": "~2h",
            "tip": "'Headers already sent' means output started before header(). No echo, no whitespace before <?php, and watch for UTF-8 BOMs.",
            "learn": [
              "header() for redirects, content types, and status codes",
              "The POST-redirect-GET pattern that stops duplicate form submissions",
              "Forcing downloads with Content-Disposition"
            ],
            "do": [
              "Implement POST-redirect-GET on your registration form",
              "Return a JSON API response with the correct Content-Type header",
              "Build a /download endpoint that forces a file download"
            ],
            "tools": ["PHP"],
            "res": [
              ["header()", "https://www.php.net/manual/en/function.header.php"]
            ]
          },
          {
            "t": "JSON, XML & CSV",
            "d": "Parse and produce the data formats every API and export touches.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "json_encode/json_decode with JSON_THROW_ON_ERROR and depth limits",
              "Reading XML with SimpleXML; writing CSV with fputcsv",
              "Validating decoded structure before trusting it"
            ],
            "do": [
              "Consume a public JSON API with file_get_contents and decode it safely",
              "Export your users array to CSV with fputcsv",
              "Handle a malformed JSON payload with try/catch and JSON_THROW_ON_ERROR"
            ],
            "tools": ["PHP", "SimpleXML"],
            "res": [
              ["JSON Functions", "https://www.php.net/manual/en/ref.json.php"]
            ]
          }
        ]
      },
      {
        "t": "Object-Oriented PHP",
        "d": "Classes, interfaces, traits, enums, and namespaces, the architecture modern PHP is built on.",
        "lv": 2,
        "children": [
          {
            "t": "Classes, Objects & Constructors",
            "d": "Model real things as objects with state and behavior.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Classes, properties, methods, and $this",
              "Constructor property promotion: declare and assign in one line",
              "readonly properties for values that must never change after construction"
            ],
            "do": [
              "Build a User class with promoted constructor properties and a fullName() method",
              "Make the id property readonly and try to change it after construction",
              "Instantiate three users and store them in an array"
            ],
            "tools": ["PHP"],
            "res": [
              ["Classes and Objects", "https://www.php.net/manual/en/language.oop5.php"]
            ]
          },
          {
            "t": "Visibility, Static & Inheritance",
            "d": "Control access with public/private/protected, share with static, and extend with inheritance.",
            "lv": 2,
            "time": "~3h",
            "tip": "Prefer private and composition over protected and inheritance. Deep inheritance trees are where code goes to become untestable.",
            "learn": [
              "public/private/protected and what each hides from whom",
              "static properties/methods and late static binding",
              "Inheritance, parent::, final classes, and abstract classes"
            ],
            "do": [
              "Create an AdminUser extending User with extra permissions",
              "Try accessing a private property from outside and read the error",
              "Mark a class final and explain why frameworks do this"
            ],
            "tools": ["PHP"],
            "res": [
              ["Visibility", "https://www.php.net/manual/en/language.oop5.visibility.php"]
            ]
          },
          {
            "t": "Interfaces & Polymorphism",
            "d": "Program to contracts, not implementations, the habit that makes code testable.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Interfaces define what an object can do; classes define how",
              "Type-hinting interfaces in parameters for swappable implementations",
              "Polymorphism: one interface, many behaviors"
            ],
            "do": [
              "Define a Notifier interface; implement EmailNotifier and SmsNotifier",
              "Write sendAlert(Notifier $n) and pass both implementations",
              "Swap implementations without touching sendAlert"
            ],
            "tools": ["PHP", "PHPUnit"],
            "res": [
              ["Object Interfaces", "https://www.php.net/manual/en/language.oop5.interfaces.php"]
            ]
          },
          {
            "t": "Traits",
            "d": "Share method implementations across unrelated classes without inheritance.",
            "lv": 2,
            "time": "~2h",
            "tip": "Traits are copy-paste with a name. If two classes share behavior but no real relationship, a trait is honest; if they share a concept, use inheritance or composition.",
            "learn": [
              "use TraitName inside a class; method conflict resolution with insteadof/as",
              "Traits vs inheritance vs composition: when each is the honest choice",
              "Common uses: soft deletes, timestamping, logging helpers"
            ],
            "do": [
              "Write a Timestampable trait with createdAt/updatedAt and use it in two models",
              "Create a method conflict between two traits and resolve it with insteadof",
              "Refactor a duplicated method pair into a trait"
            ],
            "tools": ["PHP"],
            "res": [
              ["Traits", "https://www.php.net/manual/en/language.oop5.traits.php"]
            ]
          },
          {
            "t": "Enums & Attributes",
            "d": "Replace magic strings with enums, and metadata with attributes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Backed enums (string/int) vs pure enums; enum methods",
              "Attributes: #[Route], #[Validate], metadata the framework reads via reflection",
              "Why enums beat class constants for fixed sets of values"
            ],
            "do": [
              "Model order Status as a string-backed enum with a label() method",
              "Try Status::from('bogus') and handle the ValueError",
              "Write a custom #[Deprecated] attribute and read it with reflection"
            ],
            "tools": ["PHP"],
            "res": [
              ["Enumerations", "https://www.php.net/manual/en/language.enumerations.php"]
            ]
          },
          {
            "t": "Namespaces & PSR-4 Autoloading",
            "d": "Organize code into namespaces and let Composer load classes automatically.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "namespace declarations and use imports; the leading backslash for globals",
              "PSR-4: namespace prefix maps to a directory, App\\Models\\User lives in src/Models/User.php",
              "Why manual require chains died with autoloading"
            ],
            "do": [
              "Create App\\Billing\\Invoice under src/Billing/Invoice.php with a PSR-4 autoload entry",
              "Dump the autoloader and instantiate the class with zero require calls",
              "Trigger the classic 'class not found' and fix it by correcting the namespace path"
            ],
            "tools": ["PHP", "Composer"],
            "res": [
              ["PSR-4 Autoloader", "https://www.php-fig.org/psr/psr-4/"]
            ]
          },
          {
            "t": "Type Declarations & Advanced Types",
            "d": "Union types, intersection types, and never, PHP's type system is stronger than its reputation.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Union types (int|string), intersection types (Countable&Iterator), and the never return type",
              "static and self return types for fluent interfaces",
              "Where types pay off most: public APIs and framework boundaries"
            ],
            "do": [
              "Type a repository method as find(int|string $id): ?User",
              "Write a fluent query builder returning static",
              "Run PHPStan level 5 on your classes and fix what it flags"
            ],
            "tools": ["PHP", "PHPStan"],
            "res": [
              ["Type Declarations", "https://www.php.net/manual/en/language.types.declarations.php"]
            ]
          },
          {
            "t": "Magic Methods & Dependency Injection",
            "d": "Hooks like __get and __toString, plus the DI pattern every framework is built on.",
            "lv": 3,
            "time": "~4h",
            "tip": "__get/__set magic makes code impossible to grep and debug. Frameworks use them sparingly; you should use them almost never.",
            "learn": [
              "__construct, __destruct, __toString, __get/__set, __call, __invoke",
              "Dependency injection: pass collaborators in, don't create them inside",
              "How a DI container wires interfaces to implementations automatically"
            ],
            "do": [
              "Build an OrderService that receives a PaymentGateway interface in its constructor",
              "Implement __toString on a Money object so echo works",
              "Wire the service manually, then with PHP-DI or Laravel's container"
            ],
            "tools": ["PHP", "PHP-DI"],
            "res": [
              ["Magic Methods", "https://www.php.net/manual/en/language.oop5.magic.php"]
            ]
          }
        ]
      },
      {
        "t": "Composer & the Toolchain",
        "d": "Dependency management, coding standards, testing, and static analysis, the professional PHP workflow.",
        "lv": 2,
        "children": [
          {
            "t": "Composer Essentials",
            "d": "Install it, require packages, and understand what composer.json and composer.lock actually do.",
            "lv": 1,
            "time": "~3h",
            "tip": "Commit composer.lock, never composer.phar or vendor/. The lock file is the only thing that makes installs reproducible.",
            "learn": [
              "composer.json (what you want) vs composer.lock (what you got)",
              "require vs require-dev; install vs update and why update is dangerous in prod",
              "The vendor/ directory and why it never belongs in git"
            ],
            "do": [
              "composer init a project and require monolog/monolog",
              "Run composer install vs update and diff the lock file",
              "Add vendor/ to .gitignore and verify with git status"
            ],
            "tools": ["Composer", "Packagist"],
            "res": [
              ["Composer Documentation", "https://getcomposer.org/doc/"],
              ["Packagist", "https://packagist.org"]
            ]
          },
          {
            "t": "Semver & Version Constraints",
            "d": "Read ^1.2 and ~1.2 like a native, and stop breaking your own installs.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Semantic versioning: MAJOR.MINOR.PATCH and what each bump promises",
              "Caret ^ vs tilde ~ constraints and which one to default to",
              "composer check-platform-reqs to catch PHP/extension mismatches early"
            ],
            "do": [
              "Explain what ^8.1, ~8.1.0, and >=8.1 <9.0 each allow",
              "Add a php constraint ^8.5 to a project and run check-platform-reqs",
              "Simulate a conflict and read Composer's resolver error"
            ],
            "tools": ["Composer"],
            "res": [
              ["Composer Versions & Constraints", "https://getcomposer.org/doc/articles/versions.md"]
            ]
          },
          {
            "t": "PHP-FIG & PSR Standards",
            "d": "The shared contracts that let libraries from different vendors work together.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "PSR-4 (autoloading), PSR-7 (HTTP messages), PSR-11 (containers), PSR-3 (logging)",
              "PER Coding Style: the living successor to the frozen PSR-12",
              "Why standards matter: swap Monolog for any PSR-3 logger without changing code"
            ],
            "do": [
              "Type-hint Psr\\Log\\LoggerInterface in a class and inject Monolog",
              "Swap Monolog for another PSR-3 logger without touching the class",
              "Read one PSR end to end and summarize its rules"
            ],
            "tools": ["Composer", "Monolog"],
            "res": [
              ["PHP-FIG Standards", "https://www.php-fig.org"]
            ]
          },
          {
            "t": "Testing with PHPUnit & Pest",
            "d": "Prove your code works with automated tests, the habit that separates hobby from profession.",
            "lv": 2,
            "time": "~5h",
            "tip": "Test behavior, not implementation. A test that breaks when you refactor internals (without changing behavior) is testing the wrong thing.",
            "learn": [
              "PHPUnit assertions, test doubles, and data providers",
              "Pest's expressive syntax on top of PHPUnit",
              "What to test: pure logic first, then integration at the edges"
            ],
            "do": [
              "Write PHPUnit tests for a price calculator (discounts, tax, edge cases)",
              "Add a data provider with 10 input/output pairs",
              "Rewrite one test file in Pest and compare readability"
            ],
            "tools": ["PHPUnit", "Pest"],
            "res": [
              ["PHPUnit Documentation", "https://docs.phpunit.de/en/12.5/"],
              ["Pest", "https://pestphp.com"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Static Analysis & Code Style",
            "d": "Catch bugs without running code: PHPStan levels and automated style fixing.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "PHPStan levels 0-9: start at 5, raise as the codebase improves",
              "Psalm as the alternative analyzer",
              "PHP CS Fixer / PHPCodeSniffer enforcing PER coding style in CI"
            ],
            "do": [
              "Run PHPStan level 5 on your project and fix every error",
              "Add a php-cs-fixer config with the PER ruleset",
              "Wire both into a GitHub Actions workflow"
            ],
            "tools": ["PHPStan", "Psalm", "PHP CS Fixer", "PHPCodeSniffer"],
            "res": [
              ["PHPStan", "https://phpstan.org"],
              ["Psalm", "https://psalm.dev"]
            ]
          },
          {
            "t": "Debugging with Xdebug",
            "d": "Step through code line by line instead of guessing with var_dump.",
            "lv": 3,
            "time": "~4h",
            "tip": "var_dump debugging scales to about one function. The moment a bug spans files, a step debugger pays for itself in minutes.",
            "learn": [
              "Xdebug 3 setup: xdebug.mode=debug and your IDE's listener",
              "Breakpoints, step over/into, watch expressions, and the call stack",
              "Profiling with cachegrind output to find slow functions"
            ],
            "do": [
              "Install Xdebug and hit a breakpoint in VS Code or PhpStorm",
              "Step through a form submission and inspect $_POST at each line",
              "Generate a profile and find the slowest function in a page load"
            ],
            "tools": ["Xdebug", "PhpStorm", "VS Code"],
            "res": [
              ["Xdebug Documentation", "https://xdebug.org/docs/"]
            ]
          }
        ]
      },
      {
        "t": "Databases with PDO",
        "d": "Talk to MySQL and friends safely with prepared statements, transactions, and migrations.",
        "lv": 2,
        "children": [
          {
            "t": "PDO & Prepared Statements",
            "d": "The one database API to learn, and the mechanism that kills SQL injection.",
            "lv": 2,
            "time": "~4h",
            "tip": "Prepared statements only protect values, not identifiers. Table and column names still need a whitelist, never interpolate them from user input.",
            "learn": [
              "PDO connection with ERRMODE_EXCEPTION and FETCH_ASSOC",
              "Named vs positional placeholders; binding values",
              "Why prepared statements defeat SQL injection at the protocol level"
            ],
            "do": [
              "Connect to MySQL with PDO and fetch all users",
              "Rewrite a string-concatenated query as a prepared statement",
              "Try injecting ' OR '1'='1 into both versions and compare"
            ],
            "tools": ["PHP", "PDO", "MySQL", "MariaDB"],
            "res": [
              ["PDO Manual", "https://www.php.net/manual/en/book.pdo.php"]
            ]
          },
          {
            "t": "Transactions",
            "d": "Make multi-step writes all-or-nothing with beginTransaction, commit, and rollback.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ACID in one paragraph: why money transfers need transactions",
              "beginTransaction/commit/rollBack with try/catch",
              "Deadlocks and keeping transactions short"
            ],
            "do": [
              "Write a transfer() that debits one account and credits another atomically",
              "Throw mid-transaction and verify the rollback left balances unchanged",
              "Measure what happens when a transaction stays open too long"
            ],
            "tools": ["PHP", "PDO", "MySQL"],
            "res": [
              ["PDO Transactions", "https://www.php.net/manual/en/pdo.transactions.php"]
            ]
          },
          {
            "t": "Migrations",
            "d": "Version your schema like code so every environment builds the same database.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Migrations as up/down scripts with timestamps",
              "Tools: Phinx, Doctrine Migrations, or your framework's runner",
              "Seeding test data separately from schema changes"
            ],
            "do": [
              "Create users and posts tables via Phinx migrations",
              "Migrate up, migrate down, and migrate up again cleanly",
              "Write a seeder that inserts 50 realistic test users"
            ],
            "tools": ["Phinx", "Doctrine Migrations"],
            "res": [
              ["Phinx", "https://phinx.org"]
            ]
          },
          {
            "t": "ORMs: Eloquent & Doctrine",
            "d": "Map rows to objects with an ORM, and know what SQL it generates.",
            "lv": 2,
            "time": "~4h",
            "tip": "The N+1 query problem is the ORM rite of passage. If a page fires 200 queries, you forgot eager loading, check the query log first.",
            "learn": [
              "Active Record (Eloquent) vs Data Mapper (Doctrine) philosophies",
              "Relationships, eager loading, and the N+1 problem",
              "When to drop to raw SQL: reporting queries and bulk operations"
            ],
            "do": [
              "Define User hasMany Post with Eloquent and eager-load a listing",
              "Enable the query log and count queries with and without eager loading",
              "Write one complex report as raw SQL instead of fighting the ORM"
            ],
            "tools": ["Eloquent", "Doctrine ORM"],
            "res": [
              ["Eloquent Documentation", "https://laravel.com/docs/eloquent"],
              ["Doctrine ORM", "https://www.doctrine-project.org/projects/orm.html"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "PHP Security",
        "d": "Think like an attacker: the vulnerabilities PHP apps keep shipping, and how to close each one.",
        "lv": 2,
        "children": [
          {
            "t": "Threat Model & Input Handling",
            "d": "Every input is hostile until proven otherwise, build the validation mindset.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Trust boundaries: browser, database, filesystem, and external APIs",
              "Allowlist validation vs denylist filtering, why allowlists win",
              "The three output contexts: HTML, SQL, and shell each need different escaping"
            ],
            "do": [
              "Map every input source of a small app (GET, POST, cookies, headers, files)",
              "Write an allowlist validator for a ?sort= parameter",
              "Break your own validator with an unexpected-but-valid input and fix it"
            ],
            "tools": ["PHP"],
            "res": [
              ["OWASP Input Validation Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "XSS Prevention",
            "d": "Stop attackers from running JavaScript in your users' browsers.",
            "lv": 2,
            "time": "~3h",
            "tip": "htmlspecialchars needs ENT_QUOTES and a UTF-8 charset argument. Defaults changed across versions, pass them explicitly and stop thinking about it.",
            "learn": [
              "Reflected, stored, and DOM-based XSS, stored is the dangerous one",
              "Context-aware escaping: HTML body, attributes, and JavaScript contexts differ",
              "Content Security Policy as defense in depth"
            ],
            "do": [
              "Build a comment box, inject <script>alert(1)</script>, then fix it with htmlspecialchars",
              "Break escaping by injecting into an HTML attribute; fix with ENT_QUOTES",
              "Add a basic Content-Security-Policy header"
            ],
            "tools": ["PHP"],
            "res": [
              ["OWASP XSS Prevention Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "CSRF Protection",
            "d": "Stop malicious sites from riding your users' logged-in sessions.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How CSRF works: the browser happily sends cookies to your site from any origin",
              "Synchronizer tokens: random per-session tokens in every state-changing form",
              "SameSite cookies as a second layer, not a replacement"
            ],
            "do": [
              "Add a CSRF token to your forms and validate it server-side",
              "Build a proof-of-concept attack page and watch it fail against the token",
              "Set SameSite=Lax on session cookies"
            ],
            "tools": ["PHP"],
            "res": [
              ["OWASP CSRF Prevention Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "SQL Injection Defense in Depth",
            "d": "Prepared statements are the start, least privilege and error handling finish the job.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Classic, blind, and second-order injection patterns",
              "Least-privilege DB users: the app login should not be able to DROP tables",
              "Why verbose SQL errors in production hand attackers a map"
            ],
            "do": [
              "Exploit a deliberately vulnerable search box, then patch it",
              "Create a MySQL user with only SELECT/INSERT/UPDATE on one database",
              "Confirm production error pages reveal no SQL details"
            ],
            "tools": ["PHP", "PDO", "MySQL", "sqlmap"],
            "res": [
              ["OWASP SQL Injection Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"]
            ]
          },
          {
            "t": "Password Hashing & Auth",
            "d": "Store passwords with password_hash, verify with password_verify, and never roll your own crypto.",
            "lv": 2,
            "time": "~3h",
            "tip": "If you see md5($password) or sha1($password) in a codebase, that is a vulnerability report, not code. Migrate to password_hash immediately.",
            "learn": [
              "password_hash with PASSWORD_DEFAULT (bcrypt/argon2) and why salting is automatic",
              "password_verify and password_needs_rehash for algorithm upgrades",
              "Session security: regenerate IDs, set timeouts, and handle 'remember me' with long random tokens"
            ],
            "do": [
              "Build registration and login with password_hash/password_verify",
              "Time a login attempt and explain why slowness is a feature",
              "Implement secure remember-me tokens stored hashed in the DB"
            ],
            "tools": ["PHP"],
            "res": [
              ["PHP Password Hashing", "https://www.php.net/manual/en/faq.passwords.php"]
            ]
          },
          {
            "t": "Secure File Handling & Command Execution",
            "d": "Uploads, includes, and shell calls are the classic remote-code-execution trio.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Path traversal: why basename() and realpath() checks matter on user-supplied filenames",
              "Never include() a path built from user input, that's local file inclusion",
              "escapeshellarg() for the rare cases you must call the shell"
            ],
            "do": [
              "Exploit a download.php?file=../../etc/passwd, then fix it with a whitelist",
              "Replace an include($_GET['page']) with a mapped allowlist",
              "Rewrite a shell_exec call using escapeshellarg"
            ],
            "tools": ["PHP"],
            "res": [
              ["PHP Security Manual", "https://www.php.net/manual/en/security.php"]
            ]
          },
          {
            "t": "Security Headers & Dependency Audits",
            "d": "Harden responses and keep your dependency tree free of known CVEs.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The essential headers: CSP, HSTS, X-Frame-Options, Referrer-Policy",
              "composer audit and why CI should fail on known vulnerabilities",
              "Keeping PHP itself patched: EOL versions get no fixes, ever"
            ],
            "do": [
              "Add a strict CSP and HSTS to your app; verify with securityheaders.com",
              "Run composer audit on an old project and triage the findings",
              "Add a scheduled CI job that audits dependencies weekly"
            ],
            "tools": ["Composer", "Mozilla Observatory"],
            "res": [
              ["OWASP Secure Headers Project", "https://owasp.org/www-project-secure-headers/"]
            ]
          }
        ]
      },
      {
        "t": "Frameworks & Production PHP",
        "d": "The framework landscape, the request lifecycle, and shipping PHP that survives real traffic.",
        "lv": 3,
        "children": [
          {
            "t": "Frameworks Landscape",
            "d": "Laravel, Symfony, Yii, Slim, what each is for, and how to choose honestly.",
            "lv": 2,
            "time": "~4h",
            "tip": "Learn one framework deeply instead of four shallowly. Laravel and Symfony share so many concepts that the second one takes weeks, not months.",
            "learn": [
              "Laravel: the full-stack artisan toolkit (see the Atlas Laravel roadmap for depth)",
              "Symfony: components and the enterprise standard; many frameworks reuse its parts",
              "Yii 3, Slim, and Laminas: where each still earns its place"
            ],
            "do": [
              "Scaffold the same CRUD app in Laravel and Symfony; compare the request flow",
              "List which Symfony components Laravel itself depends on",
              "Decide, in writing, which framework fits a SaaS MVP vs a bank integration"
            ],
            "tools": ["Laravel", "Symfony", "Yii", "Slim"],
            "res": [
              ["Laravel", "https://laravel.com"],
              ["Symfony", "https://symfony.com"],
              ["Slim Framework", "https://www.slimframework.com"]
            ]
          },
          {
            "t": "MVC & the Request Lifecycle",
            "d": "Follow one request from the web server through routing, controller, and response.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Front controller: every request enters through index.php",
              "Routing: mapping URLs to controllers; middleware as onion layers",
              "The response journey back: views, JSON, and redirects"
            ],
            "do": [
              "Trace a Laravel request with a debugger from public/index.php to the response",
              "Write a tiny router (50 lines) that maps /users/{id} to a handler",
              "Add middleware that logs request duration around the handler"
            ],
            "tools": ["Laravel", "Symfony", "Xdebug"],
            "res": [
              ["Laravel Request Lifecycle", "https://laravel.com/docs/lifecycle"]
            ]
          },
          {
            "t": "HTTP Clients & External APIs",
            "d": "Call the outside world with Guzzle or Symfony HTTP Client, with retries and timeouts.",
            "lv": 3,
            "time": "~3h",
            "tip": "Always set timeouts on HTTP calls. One slow API without a timeout will hang your PHP-FPM workers until the whole site queues up behind it.",
            "learn": [
              "Guzzle vs Symfony HttpClient; PSR-18 as the portable interface",
              "Timeouts, retries with backoff, and circuit breakers",
              "Async requests and concurrent pooling"
            ],
            "do": [
              "Fetch three APIs concurrently with Guzzle promises",
              "Add retry-with-backoff to a flaky endpoint client",
              "Simulate a 30s-hanging API and prove your timeout saves the page"
            ],
            "tools": ["Guzzle", "Symfony HttpClient", "cURL"],
            "res": [
              ["Guzzle", "https://docs.guzzlephp.org"]
            ]
          },
          {
            "t": "OPcache & PHP-FPM Tuning",
            "d": "The two knobs that decide whether PHP is fast or falls over.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "OPcache: compiled bytecode cached in memory, validate_timestamps off in prod",
              "PHP-FPM pools: pm.max_children math from RAM per worker",
              "Realpath cache and why it matters on containerized deploys"
            ],
            "do": [
              "Benchmark a page with OPcache off vs on",
              "Calculate max_children from your server's RAM and average worker size",
              "Tune opcache.memory_consumption and confirm zero evictions under load"
            ],
            "tools": ["PHP-FPM", "OPcache", "Nginx"],
            "res": [
              ["OPcache Configuration", "https://www.php.net/manual/en/opcache.configuration.php"]
            ]
          },
          {
            "t": "Modern PHP: Fibers, FrankenPHP & RoadRunner",
            "d": "PHP is no longer just request-per-process, long-running runtimes change the game.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Fibers (PHP 8.1): cooperative concurrency inside one process",
              "FrankenPHP and RoadRunner: keep the app booted between requests",
              "What breaks in long-running PHP: static state, connections, and memory leaks"
            ],
            "do": [
              "Run the same app under php-fpm and FrankenPHP; compare cold-start latency",
              "Write a Fiber that interleaves two tasks",
              "Find a static variable that leaks state between requests in worker mode"
            ],
            "tools": ["FrankenPHP", "RoadRunner", "PHP"],
            "res": [
              ["FrankenPHP", "https://frankenphp.dev"]
            ],
            "tag": "opt"
          },
          {
            "t": "Deploying PHP & Capstone",
            "d": "Ship a complete app: environment config, zero-downtime deploys, and monitoring.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Twelve-factor config: .env for secrets, never committed",
              "Deploy strategies: atomic symlink releases, migrations on deploy",
              "Monitoring: error tracking, slow query logs, and uptime checks"
            ],
            "do": [
              "Deploy a Laravel/Symfony app to a VPS with atomic releases",
              "Run migrations automatically as part of the deploy",
              "Wire up error tracking and fix the first three production errors"
            ],
            "tools": ["Deployer", "Envoy", "Sentry", "Nginx"],
            "res": [
              ["Deployer", "https://deployer.org"]
            ],
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
