/* Atlas roadmap data: Go Roadmap (go-roadmap) */
ROADMAPS.push({
  "id": "go-roadmap",
  "title": "Go Roadmap",
  "icon": "🐹",
  "color": "#00add8",
  "desc": "The Go language end to end: syntax, concurrency, the standard library, modules and production-grade Go services.",
  "kind": "skill",
  "root": {
    "t": "Go Programming",
    "d": "From your first program to production Go services.",
    "lv": 0,
    "children": [
      {
        "t": "Go Foundations",
        "d": "Syntax, types and the core ideas of the language.",
        "lv": 1,
        "children": [
          {
            "t": "Why Go and Where It Shines",
            "d": "A compiled, garbage-collected language built for concurrency and simplicity.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Go's design goals: simplicity, fast builds, and built-in concurrency",
              "Where Go wins: cloud infrastructure, CLIs, networking, DevOps tooling",
              "The Go 1 compatibility promise and the six-month release cadence"
            ],
            "do": [
              "Install the latest Go toolchain and run `go version`",
              "Read the Go 1.27 release notes and note the headline features",
              "List five famous tools written in Go (Docker, Kubernetes, Terraform...)"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Official Site",
                "https://go.dev"
              ],
              [
                "Go 1.27 Release Notes",
                "https://go.dev/doc/go1.27"
              ]
            ]
          },
          {
            "t": "Workspace and the go Command",
            "d": "One toolchain for building, testing and documenting.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Modules vs the old GOPATH: how modern Go organizes code",
              "go run, go build, go install: what each one does",
              "go doc and go list for exploring the standard library"
            ],
            "do": [
              "Initialize a module with `go mod init hello` and run a hello-world program",
              "Build a binary with `go build` and install a tool with `go install`",
              "Use `go doc net/http` to read package documentation in the terminal"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Command Docs",
                "https://pkg.go.dev/cmd/go"
              ]
            ]
          },
          {
            "t": "Variables, Constants and Zero Values",
            "d": "Declaration rules that remove entire bug classes.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "var vs := : when each is idiomatic",
              "Zero values: every variable starts useful, never undefined",
              "const, iota enumerations, and variable shadowing"
            ],
            "do": [
              "Write a program demonstrating a shadowing bug, then fix it",
              "Build an iota-based enum for days of the week with a String method",
              "Refactor := declarations to var where package-level or zero-value intent is clearer"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go",
                "https://go.dev/tour/welcome/1"
              ]
            ],
            "tip": ":= inside a function creates a NEW variable in that scope. Shadowed variables are Go's most common beginner bug."
          },
          {
            "t": "Basic Types and Conversions",
            "d": "Explicit, predictable types with no implicit magic.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Integers, floats, complex numbers and their sizes",
              "Strings are immutable byte sequences; runes are Unicode code points",
              "Conversions are always explicit: no silent int-to-string surprises"
            ],
            "do": [
              "Parse user input from stdin into an int with error handling",
              "Iterate a string by bytes vs by runes and observe the difference on emoji",
              "Convert between int, float64 and string in both directions"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go",
                "https://go.dev/tour/welcome/1"
              ]
            ]
          },
          {
            "t": "Control Flow",
            "d": "if, switch and for: deliberately small, deliberately enough.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "if with an init statement: scoped setup for the condition",
              "switch without implicit fallthrough and type switches",
              "for as the only loop: C-style, while-style and infinite"
            ],
            "do": [
              "Implement FizzBuzz using a switch statement",
              "Use an if-init statement to handle a file-open error inline",
              "Write the three for-loop forms in one program"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go",
                "https://go.dev/tour/welcome/1"
              ]
            ]
          },
          {
            "t": "Functions",
            "d": "Multiple returns, closures and defer.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Multiple and named return values",
              "Variadic functions and first-class, anonymous functions",
              "defer: LIFO cleanup that runs when the function returns"
            ],
            "do": [
              "Write a divide function returning (result, error) and handle both",
              "Use defer to close a file and unlock a mutex in the right order",
              "Build a counter closure and explain what it captures"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go",
                "https://go.dev/tour/welcome/1"
              ]
            ],
            "tip": "defer runs LIFO: stack your cleanups in reverse order of acquisition, like closing what you opened last first."
          },
          {
            "t": "Arrays, Slices and Maps",
            "d": "The composite types you will use every day.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "The slice header: pointer, length, capacity and append growth",
              "Maps, the comma-ok idiom, and nil vs empty collections",
              "make() for pre-sized slices and maps"
            ],
            "do": [
              "Build a word-frequency counter with the comma-ok idiom",
              "Benchmark append growth with and without pre-sizing via make",
              "Demonstrate slice aliasing: mutate through two slices sharing an array"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Blog: Slices",
                "https://go.dev/blog/slices-intro"
              ]
            ],
            "tip": "Slices share backing arrays. Appending past capacity reallocates; appending within it mutates data others may see."
          },
          {
            "t": "Structs and Methods",
            "d": "Data with behavior, minus inheritance.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Struct literals, field tags and JSON marshaling",
              "Embedding for composition instead of inheritance",
              "Value vs pointer receivers: the consistency rule"
            ],
            "do": [
              "Define a User struct with JSON tags; marshal and unmarshal it",
              "Embed an Address struct in User and access promoted fields",
              "Convert a value-receiver method to pointer-receiver and explain when it matters"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "encoding/json Docs",
                "https://pkg.go.dev/encoding/json"
              ]
            ]
          }
        ]
      },
      {
        "t": "Pointers, Interfaces and Generics",
        "d": "Go's type system: explicit, small and surprisingly powerful.",
        "lv": 2,
        "children": [
          {
            "t": "Pointers",
            "d": "Direct memory addresses, without the danger of C.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "& and *: address-of and dereference",
              "Pointers with structs: avoiding copies of large values",
              "When not to use pointers: small values and the escape analysis cost"
            ],
            "do": [
              "Mutate a struct through a pointer vs a copy and compare",
              "Rewrite a function to take a pointer receiver and justify the choice",
              "Run with -gcflags=-m to see which of your variables escape to the heap"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go",
                "https://go.dev/tour/welcome/1"
              ]
            ]
          },
          {
            "t": "Interfaces",
            "d": "Behavior contracts satisfied implicitly.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Implicit satisfaction: no implements keyword, ever",
              "Small interfaces: the io.Reader/io.Writer philosophy",
              "any, type assertions and type switches"
            ],
            "do": [
              "Implement io.Writer for a custom type and use it with fmt.Fprintf",
              "Write a type switch that handles int, string and unknown types",
              "Refactor a function to accept an interface instead of a concrete type"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Effective Go",
                "https://go.dev/doc/effective_go"
              ]
            ],
            "tip": "Accept interfaces, return structs. Big interfaces are a design smell; one or two methods is the Go sweet spot."
          },
          {
            "t": "Generics",
            "d": "Type parameters without losing Go's simplicity.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Type parameters, type inference and the comparable constraint",
              "Generic functions vs generic types",
              "When generics help and when an interface is better"
            ],
            "do": [
              "Write generic Map, Filter and Reduce functions over slices",
              "Constrain a generic function with a custom interface",
              "Rewrite one generic function as an interface-based one and compare"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Generics Tutorial",
                "https://go.dev/doc/tutorial/generics"
              ]
            ]
          },
          {
            "t": "Generic Methods (Go 1.27)",
            "d": "Methods can now declare their own type parameters.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Method-level type parameters: what Go 1.27 unlocked",
              "The limits: interface methods still cannot be generic",
              "Fluent generic APIs on container types"
            ],
            "do": [
              "Add a generic Map[U any] method to a Stack[T] type",
              "Try declaring a generic interface method and read the compiler error",
              "Refactor package-level generic helpers into methods where it reads better"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go 1.27 Release Notes",
                "https://go.dev/doc/go1.27"
              ]
            ]
          },
          {
            "t": "Error Handling",
            "d": "Errors are values: check them, wrap them, own them.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The error interface and errors.New / fmt.Errorf",
              "Wrapping with %w, and unwrapping with errors.Is / errors.As",
              "Sentinel errors vs custom types; panic and recover boundaries"
            ],
            "do": [
              "Wrap errors with context at each layer and print the full chain",
              "Define a sentinel error and check it with errors.Is across a wrap",
              "Convert a panicking program into one returning errors at API boundaries"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Blog: Error Values",
                "https://go.dev/blog/go1.13-errors"
              ]
            ],
            "tip": "Wrap errors with context as they bubble up, but only handle an error once. Logging and returning the same error double-reports it."
          },
          {
            "t": "Testing Basics",
            "d": "Table-driven tests are the Go way.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "_test.go conventions and the testing package",
              "Table-driven tests with subtests via t.Run",
              "Test helpers, setup/teardown and testable examples"
            ],
            "do": [
              "Write table-driven tests for a string-parsing function",
              "Add subtests with t.Run so failures name the exact case",
              "Write an Example function that doubles as documentation"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "testing Package Docs",
                "https://pkg.go.dev/testing"
              ]
            ]
          },
          {
            "t": "Benchmarks and Fuzzing",
            "d": "Measure first, then optimize; fuzz what you parse.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Writing benchmarks and the b.Loop() pattern (Go 1.24+)",
              "Native fuzzing with go test -fuzz for parsers and decoders",
              "Benchmark comparisons and avoiding dead-code elimination"
            ],
            "do": [
              "Benchmark two implementations of the same function with b.Loop()",
              "Fuzz a JSON parser for 30 seconds and triage any crashers",
              "Use benchstat thinking: run benchmarks multiple times before concluding"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Testing Docs",
                "https://pkg.go.dev/testing"
              ]
            ],
            "tip": "Use b.Loop() instead of `for range b.N`: the old pattern lets the compiler optimize away the code under test."
          },
          {
            "t": "Modules and Dependencies",
            "d": "Versioned, reproducible builds by default.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "go.mod and go.sum: requirements and cryptographic verification",
              "go mod tidy, go mod vendor and semantic versioning rules",
              "Publishing modules and working with private repositories"
            ],
            "do": [
              "Add a third-party dependency, then run go mod tidy and read go.sum",
              "Vendor your dependencies and build with -mod=vendor",
              "Publish a tiny v0 module and import it from another project"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Modules Reference",
                "https://go.dev/ref/mod"
              ]
            ]
          }
        ]
      },
      {
        "t": "Concurrency",
        "d": "Goroutines and channels: Go's famous superpower, used correctly.",
        "lv": 2,
        "children": [
          {
            "t": "Goroutines",
            "d": "Thousands of lightweight threads, one keyword.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The go statement and the M:N scheduler",
              "Goroutines are cheap but not free: lifecycle management",
              "Goroutine leaks: the silent killer of long-running services"
            ],
            "do": [
              "Spawn 10,000 goroutines doing trivial work and watch memory stay sane",
              "Create a goroutine leak on purpose, then fix it with a done channel",
              "Explain what GOMAXPROCS controls and check its default on your machine"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go: Concurrency",
                "https://go.dev/tour/concurrency/1"
              ]
            ]
          },
          {
            "t": "Channels",
            "d": "Share memory by communicating.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Unbuffered vs buffered channels and their synchronization semantics",
              "Closing channels, ranging over them, and the receive-ok idiom",
              "Channel direction in function signatures (chan<-, <-chan)"
            ],
            "do": [
              "Build a three-stage pipeline: generate, square, print",
              "Implement fan-out/fan-in across four workers",
              "Detect a closed channel with the comma-ok receive and handle it"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Blog: Pipelines",
                "https://go.dev/blog/pipelines"
              ]
            ],
            "tip": "The sender closes the channel, never the receiver. Closing twice or sending on a closed channel panics."
          },
          {
            "t": "Select and Timeouts",
            "d": "Multiplexing channel operations.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "select for waiting on multiple channels at once",
              "time.After and time.NewTicker for timeouts and intervals",
              "Non-blocking operations with default"
            ],
            "do": [
              "Add a 2-second timeout to a channel receive with select",
              "Build a worker that processes jobs but ticks a heartbeat every second",
              "Write a non-blocking send that drops work when the buffer is full"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "A Tour of Go: Concurrency",
                "https://go.dev/tour/concurrency/1"
              ]
            ]
          },
          {
            "t": "The sync Package",
            "d": "Sometimes a mutex is the honest tool.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "WaitGroup for waiting on a set of goroutines",
              "Mutex and RWMutex: protecting shared state directly",
              "Once for one-time initialization; when mutexes beat channels"
            ],
            "do": [
              "Protect a shared map with a RWMutex under concurrent readers and writers",
              "Coordinate 50 goroutines with a WaitGroup and compare with an errgroup",
              "Benchmark mutex-protected counter vs channel-based counter"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "sync Package Docs",
                "https://pkg.go.dev/sync"
              ]
            ],
            "tip": "Copying a sync.Mutex after first use breaks it. Always pass locks by pointer, and let go vet catch it."
          },
          {
            "t": "Context",
            "d": "Cancellation and deadlines across API boundaries.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "context.Context: cancellation, deadlines and timeouts",
              "Propagating cancellation through a call chain",
              "Context values: request-scoped data and its limits"
            ],
            "do": [
              "Cancel a chain of three functions with context.WithCancel",
              "Add a 500ms deadline to an HTTP handler's downstream calls",
              "Find a context-value abuse in sample code and refactor it to explicit args"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "context Package Docs",
                "https://pkg.go.dev/context"
              ]
            ],
            "tip": "Never store a Context in a struct. Pass it as the first argument, named ctx, through your call chain."
          },
          {
            "t": "Worker Pools and Patterns",
            "d": "Bounded parallelism for real workloads.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Worker pools: fixed goroutines draining a job channel",
              "errgroup for goroutines that return errors",
              "Graceful shutdown: draining work before exiting"
            ],
            "do": [
              "Build a worker pool that resizes images from a job queue",
              "Process 10,000 jobs with errgroup, cancelling all on first error",
              "Implement graceful shutdown on SIGINT: finish in-flight work, then exit"
            ],
            "tools": [
              "errgroup"
            ],
            "res": [
              [
                "errgroup Docs",
                "https://pkg.go.dev/golang.org/x/sync/errgroup"
              ]
            ]
          },
          {
            "t": "The Race Detector",
            "d": "Find data races before your users do.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What counts as a data race and why it is undefined behavior",
              "go test -race and go run -race: how detection works",
              "Happens-before relationships that make access safe"
            ],
            "do": [
              "Introduce a data race on purpose, then catch it with -race",
              "Fix the race two ways: with a mutex and with a channel",
              "Add -race to your project's CI test command"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Race Detector Docs",
                "https://go.dev/doc/articles/race_detector"
              ]
            ]
          },
          {
            "t": "Concurrency Pitfalls",
            "d": "The traps experienced Go developers still hit.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Goroutine leaks and abandoned channels",
              "Deadlocks from unbuffered channels and lock ordering",
              "Channel ownership discipline in larger codebases"
            ],
            "do": [
              "Audit a 200-line concurrent program and list every leak and deadlock risk",
              "Fix a deadlock caused by two goroutines acquiring locks in opposite order",
              "Document channel ownership (who sends, who closes) for each channel in your program"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Blog: Pipelines",
                "https://go.dev/blog/pipelines"
              ]
            ],
            "tip": "Every goroutine must have a clear owner and a clear exit path. If you cannot say when it stops, it leaks."
          }
        ]
      },
      {
        "t": "Standard Library for Real Programs",
        "d": "The batteries-included toolkit behind most Go services.",
        "lv": 2,
        "children": [
          {
            "t": "HTTP Servers with net/http",
            "d": "Production APIs with zero dependencies.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Handlers, ServeMux and the Go 1.22 routing improvements",
              "Middleware chains: logging, auth, recovery",
              "Graceful shutdown with http.Server.Shutdown"
            ],
            "do": [
              "Build a JSON REST API with method-based routing on ServeMux",
              "Write logging and recovery middleware and chain them",
              "Shut the server down gracefully on SIGTERM, finishing in-flight requests"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "net/http Docs",
                "https://pkg.go.dev/net/http"
              ]
            ]
          },
          {
            "t": "JSON and Encoding",
            "d": "Marshal, unmarshal and stream without drama.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Struct tags, embedded structs and omitempty",
              "json.Decoder for streaming large payloads",
              "Custom MarshalJSON/UnmarshalJSON for special types"
            ],
            "do": [
              "Build a strict decoder that rejects unknown fields with DisallowUnknownFields",
              "Stream-decode a 100MB JSON array without loading it into memory",
              "Implement a custom time format with MarshalJSON/UnmarshalJSON"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "encoding/json Docs",
                "https://pkg.go.dev/encoding/json"
              ]
            ]
          },
          {
            "t": "IO, Files and Buffers",
            "d": "Readers and writers compose everything.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "io.Reader/io.Writer: the interfaces the whole stdlib speaks",
              "bufio for performance, os.File for files, embed for assets",
              "io.Copy, io.MultiWriter and io.TeeReader pipelines"
            ],
            "do": [
              "Stream-process a 1GB file line by line without loading it",
              "Embed a static asset with //go:embed and serve it over HTTP",
              "Chain a gzip writer over a file writer with io.MultiWriter logging"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "io Package Docs",
                "https://pkg.go.dev/io"
              ]
            ]
          },
          {
            "t": "Time and Dates",
            "d": "The reference-time trick you will never forget.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Layout strings based on the reference time Mon Jan 2 15:04:05 MST 2006",
              "Timezones, location loading and UTC-first storage",
              "Tickers, timers and monotonic clocks"
            ],
            "do": [
              "Parse and format dates in three layouts without looking them up",
              "Schedule a job that runs every hour on the hour in Europe/Brussels",
              "Measure elapsed time correctly across a daylight-saving transition"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "time Package Docs",
                "https://pkg.go.dev/time"
              ]
            ],
            "tip": "Go formats time with the reference 01/02 03:04:05PM '06 -0700. Memorize it once and date bugs get much rarer."
          },
          {
            "t": "Structured Logging with slog",
            "d": "Logs your future self can query.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "slog: the standard structured logger, handlers and levels",
              "Attributes, groups and JSON output for log aggregation",
              "zap and zerolog: when you need maximum throughput"
            ],
            "do": [
              "Wire slog JSON logging into your HTTP API with request IDs",
              "Add a custom handler that redacts a sensitive field",
              "Benchmark slog vs zap on your hot path and decide deliberately"
            ],
            "tools": [
              "slog",
              "zap",
              "zerolog"
            ],
            "res": [
              [
                "log/slog Docs",
                "https://pkg.go.dev/log/slog"
              ]
            ]
          },
          {
            "t": "Database Access with database/sql",
            "d": "Pools, prepared statements and transactions.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Connection pools: SetMaxOpenConns and why defaults bite",
              "Prepared statements and placeholder syntax per driver",
              "Transactions with proper rollback discipline; pgx as the Postgres choice"
            ],
            "do": [
              "Build a small CRUD service on Postgres with database/sql",
              "Tune the pool, then load-test to find the right max connections",
              "Rewrite a multi-statement operation as a transaction with deferred rollback"
            ],
            "tools": [
              "pgx",
              "database/sql"
            ],
            "res": [
              [
                "database/sql Docs",
                "https://pkg.go.dev/database/sql"
              ]
            ],
            "tip": "db.Query in a loop without closing rows exhausts your pool. Always close rows, and prefer QueryRow for single results."
          },
          {
            "t": "Building CLIs",
            "d": "Command-line tools users actually enjoy.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The flag package: enough for simple tools",
              "Cobra for subcommands, help text and shell completion",
              "Exit codes, stderr vs stdout, and signal handling"
            ],
            "do": [
              "Build a CLI with two subcommands using Cobra",
              "Add --verbose and --output=json flags with proper defaults",
              "Handle Ctrl+C gracefully, cleaning up partial work"
            ],
            "tools": [
              "Cobra"
            ],
            "res": [
              [
                "Cobra",
                "https://github.com/spf13/cobra"
              ]
            ]
          },
          {
            "t": "Templating and Configuration",
            "d": "Render output and configure the twelve-factor way.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "text/template and html/template: auto-escaping where it matters",
              "Environment-based config with validation at startup",
              "Never committing secrets: env vars and secret managers"
            ],
            "do": [
              "Render an HTML report with html/template, injecting user data safely",
              "Load and validate config from env vars, failing fast on missing values",
              "Demonstrate the XSS that text/template would allow and html/template blocks"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "text/template Docs",
                "https://pkg.go.dev/text/template"
              ]
            ]
          }
        ]
      },
      {
        "t": "Code Quality and Tooling",
        "d": "The toolchain discipline that keeps Go projects healthy.",
        "lv": 2,
        "children": [
          {
            "t": "go vet, gofmt and goimports",
            "d": "Correctness checks and formatting as law.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What go vet catches: printf mismatches, lock copies, unreachable code",
              "gofmt: formatting is not a debate in Go",
              "Import grouping conventions with goimports"
            ],
            "do": [
              "Run go vet on your projects and fix every finding",
              "Enforce gofmt in CI so formatting never appears in code review",
              "Configure your editor to run goimports on save"
            ],
            "tools": [
              "go vet",
              "gofmt",
              "goimports"
            ],
            "res": [
              [
                "Go Command Docs",
                "https://pkg.go.dev/cmd/go"
              ]
            ]
          },
          {
            "t": "Linting with golangci-lint",
            "d": "Dozens of linters, one binary.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "staticcheck, revive and the default enabled set",
              "The modernize linter: auto-detecting outdated idioms (v2.6+)",
              "Configuring enabled linters and per-project exclusions"
            ],
            "do": [
              "Install golangci-lint v2 and run it on your largest project",
              "Fix all staticcheck findings, understanding each one",
              "Add golangci-lint to CI with a config file checked into the repo"
            ],
            "tools": [
              "golangci-lint"
            ],
            "res": [
              [
                "golangci-lint",
                "https://golangci-lint.run"
              ]
            ]
          },
          {
            "t": "Dependency Security",
            "d": "Know what is inside your binary.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "govulncheck: finding known vulnerabilities in your dependencies",
              "go.sum verification and the checksum database",
              "Minimal version selection and upgrading safely"
            ],
            "do": [
              "Run govulncheck on your module and triage the report",
              "Upgrade a vulnerable dependency and verify tests still pass",
              "Explain what go.sum proves about your build's integrity"
            ],
            "tools": [
              "govulncheck"
            ],
            "res": [
              [
                "govulncheck",
                "https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck"
              ]
            ]
          },
          {
            "t": "Debugging Go",
            "d": "Beyond println: real debugging.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Delve: breakpoints, stepping and goroutine inspection",
              "Reading stack traces and goroutine dumps",
              "Debug builds vs optimized builds"
            ],
            "do": [
              "Debug a failing test with delve: set a breakpoint and inspect variables",
              "Trigger a panic and read the full goroutine stack trace",
              "Find a deadlock by dumping all goroutine stacks"
            ],
            "tools": [
              "Delve"
            ],
            "res": [
              [
                "Delve",
                "https://github.com/go-delve/delve"
              ]
            ]
          },
          {
            "t": "Code Generation and Build Tags",
            "d": "Generate the boring code, gate the platform code.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "go generate and stringer for enums",
              "Build constraints: GOOS/GOARCH-specific files",
              "When generation beats reflection"
            ],
            "do": [
              "Generate String() methods for an enum with stringer",
              "Write a file that only compiles on Linux using a build tag",
              "Add a go:generate directive and regenerate after changing the source"
            ],
            "tools": [
              "stringer",
              "Go toolchain"
            ],
            "res": [
              [
                "Go Command Docs",
                "https://pkg.go.dev/cmd/go"
              ]
            ]
          },
          {
            "t": "Project Layout and Style",
            "d": "Structure that scales with the team.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "cmd/, internal/ and pkg/: the community layout conventions",
              "internal/ as a compiler-enforced encapsulation boundary",
              "Style guides: what the Uber guide gets right and wrong"
            ],
            "do": [
              "Restructure a flat project into cmd/ plus internal/ packages",
              "Move shared-but-private code into internal/ and verify it cannot leak",
              "Write a one-page style guide for your own project"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go Project Layout",
                "https://github.com/golang-standards/project-layout"
              ]
            ]
          }
        ]
      },
      {
        "t": "Production Go",
        "d": "Performance, shipping and operating Go at scale.",
        "lv": 3,
        "children": [
          {
            "t": "Profiling with pprof",
            "d": "Find the hot path instead of guessing.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "CPU and heap profiles, flame graphs and allocation hunting",
              "Benchmark-driven optimization with statistical comparison",
              "Continuous profiling in production"
            ],
            "do": [
              "Profile your HTTP API under load and find the hottest function",
              "Cut allocations in a hot path and prove the win with benchmarks",
              "Read a heap profile and identify a memory leak's growth signature"
            ],
            "tools": [
              "pprof"
            ],
            "res": [
              [
                "net/http/pprof Docs",
                "https://pkg.go.dev/net/http/pprof"
              ]
            ],
            "tip": "Profile before optimizing. Most performance intuition is wrong, and pprof is the fastest way to find out."
          },
          {
            "t": "Memory and Escape Analysis",
            "d": "Where your allocations really go.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Stack vs heap: escape analysis decides",
              "GC tuning: GOGC, memory limits and allocation pacing",
              "sync.Pool for high-churn temporary objects"
            ],
            "do": [
              "Read escape analysis output (-gcflags=-m) for your program",
              "Reduce heap escapes in one function and measure the effect",
              "Tune GOGC on a memory-heavy service and observe GC pause changes"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "Go GC Guide",
                "https://go.dev/doc/gc-guide"
              ]
            ]
          },
          {
            "t": "Building and Shipping",
            "d": "Static binaries and tiny containers.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Cross-compilation with GOOS and GOARCH",
              "ldflags: version stamping and symbol stripping",
              "Multi-stage Docker builds ending in scratch or distroless"
            ],
            "do": [
              "Cross-compile your CLI for linux/arm64 and windows/amd64",
              "Stamp version and commit into the binary with -ldflags -X",
              "Ship it in a scratch image under 10MB and run it"
            ],
            "tools": [
              "Docker",
              "Go toolchain"
            ],
            "res": [
              [
                "Go Command Docs",
                "https://pkg.go.dev/cmd/go"
              ]
            ],
            "tip": "CGO_ENABLED=0 gives you a truly static binary: the single best trick for tiny, portable Go containers."
          },
          {
            "t": "gRPC and Protocol Buffers",
            "d": "High-performance service-to-service APIs.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Service definitions, code generation and streaming RPCs",
              "Interceptors for auth, logging and retries",
              "buf for protobuf linting and breaking-change detection"
            ],
            "do": [
              "Define a protobuf service and generate Go code from it",
              "Implement unary and server-streaming RPCs with an auth interceptor",
              "Add buf to CI to catch breaking proto changes"
            ],
            "tools": [
              "grpc-go",
              "buf"
            ],
            "res": [
              [
                "grpc-go",
                "https://github.com/grpc/grpc-go"
              ]
            ]
          },
          {
            "t": "Observability",
            "d": "Metrics, traces and logs that explain incidents.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Prometheus metrics: counters, gauges, histograms and RED signals",
              "Distributed tracing with OpenTelemetry across services",
              "Health checks, readiness probes and structured production logs"
            ],
            "do": [
              "Instrument your API with Prometheus metrics and graph request latency",
              "Propagate a trace across two services with OpenTelemetry",
              "Add /healthz and /readyz endpoints wired to real dependency checks"
            ],
            "tools": [
              "Prometheus",
              "OpenTelemetry"
            ],
            "res": [
              [
                "OpenTelemetry Go",
                "https://opentelemetry.io/docs/languages/go/"
              ]
            ]
          },
          {
            "t": "Advanced: unsafe and cgo",
            "d": "Escape hatches with real costs.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "unsafe.Pointer: the rules that keep it sound",
              "cgo: calling C, and the call overhead plus build complexity it brings",
              "When not to use them: almost always"
            ],
            "do": [
              "Call a C function via cgo and measure the call overhead vs pure Go",
              "Write one unsafe.Pointer conversion and document its safety invariants",
              "List three alternatives you would try before reaching for unsafe"
            ],
            "tools": [
              "Go toolchain"
            ],
            "res": [
              [
                "cgo Docs",
                "https://pkg.go.dev/cmd/cgo"
              ]
            ],
            "tip": "unsafe and cgo opt you out of Go's safety guarantees. If you cannot write down the invariant, do not ship it.",
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
