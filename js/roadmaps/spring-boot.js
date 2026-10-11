/* Atlas roadmap data: Spring Boot (spring-boot)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "spring-boot",
  "title": "Spring Boot",
  "icon": "🌱",
  "color": "#4d7c0f",
  "desc": "The Java ecosystem's dominant framework: dependency injection, REST APIs, Spring Data JPA, Spring Security, testing, and production-grade microservices.",
  "kind": "skill",
  "root": {
    "t": "Spring Boot",
    "d": "Build production Java backends with Spring Boot: from beans and starters to secured, tested, observable services.",
    "children": [
      {
        "t": "Spring Groundwork",
        "d": "Why Spring exists, the Java you need, build tools, and your first Boot application.",
        "lv": 1,
        "children": [
          {
            "t": "Why Spring? The 30,000-Foot View",
            "d": "What problem Spring solves: from raw servlets to a framework that wires your app together.",
            "lv": 1,
            "time": "~2h",
            "tip": "Spring's core idea is inversion of control: you write plain classes and the framework wires them. If you understand that one sentence, every Spring concept slots into place.",
            "learn": [
              "The pain Spring removes: manual object wiring, boilerplate JDBC, scattered config",
              "Spring vs Spring Boot vs Spring Framework: the project family tree",
              "Where Spring dominates: enterprise backends, microservices, and batch jobs"
            ],
            "do": [
              "Read the Spring Boot reference introduction end to end",
              "Compare a plain servlet hello-world with a @RestController hello-world",
              "List the Spring projects (Data, Security, Cloud, Batch) and what each owns"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Spring Boot reference docs", "https://docs.spring.io/spring-boot/reference/"],
              ["spring.io", "https://spring.io/"]
            ]
          },
          {
            "t": "Java for Spring Devs: What You Actually Need",
            "d": "The Java subset Spring relies on: records, generics, annotations, lambdas, and LTS versions.",
            "lv": 1,
            "time": "~1d",
            "tip": "Run on an LTS: Spring Boot 4 supports Java 17 through 26, and 21/25 are the LTS sweet spots. Chasing non-LTS JDKs in production buys features you do not need with support windows you cannot afford.",
            "learn": [
              "Java LTS lines (17, 21, 25) and why Spring's baseline is Java 17",
              "Annotations, generics, and lambdas: the language features Spring is built on",
              "Records and sealed types for clean DTOs and domain models"
            ],
            "do": [
              "Install a Temurin JDK 21 and verify java -version",
              "Write a record-based DTO and a generics-based repository interface",
              "Create a custom annotation and read it with reflection"
            ],
            "tools": ["JDK", "SDKMAN!"],
            "res": [
              ["Java documentation", "https://docs.oracle.com/en/java/"]
            ]
          },
          {
            "t": "Maven vs Gradle",
            "d": "Build tools compared: the declarative pom.xml world vs the Gradle DSL, wrappers included.",
            "lv": 1,
            "time": "~3h",
            "tip": "Always commit the wrapper (mvnw/gradlew). A build that depends on whatever Maven happens to be installed is broken on every machine but yours.",
            "learn": [
              "Maven: lifecycle phases, the pom.xml, and the spring-boot-starter-parent",
              "Gradle: the build.gradle DSL, the Spring Boot plugin, and dependency management",
              "Wrappers, local repositories (~/.m2), and reading dependency trees"
            ],
            "do": [
              "Generate a project on start.spring.io with Maven, build it with ./mvnw package",
              "Generate the same project with Gradle and compare the build files",
              "Print the dependency tree (mvn dependency:tree) and find where Jackson comes from"
            ],
            "tools": ["Maven", "Gradle"],
            "res": [
              ["Maven docs", "https://maven.apache.org/"],
              ["Gradle docs", "https://gradle.org/"]
            ]
          },
          {
            "t": "Your First Boot App: start.spring.io",
            "d": "Generating, running, and packaging a Spring Boot application the standard way.",
            "lv": 1,
            "time": "~3h",
            "tip": "start.spring.io is not a toy: professional teams generate from it too. Picking the right starters and Java version at generation time saves a week of dependency archaeology later.",
            "learn": [
              "Generating a project: build tool, Java version, starters, and packaging",
              "The @SpringBootApplication annotation and what it composes",
              "Running with the IDE, the wrapper, and the packaged executable jar"
            ],
            "do": [
              "Generate a web project, run it, and hit the default 404 page",
              "Add a @RestController returning JSON and curl it",
              "Package with ./mvnw package and run java -jar on the result"
            ],
            "tools": ["start.spring.io"],
            "res": [
              ["start.spring.io", "https://start.spring.io"],
              ["Spring Boot getting started guide", "https://spring.io/guides/gs/spring-boot/"]
            ]
          },
          {
            "t": "Spring IoC Container & Beans",
            "d": "The container that runs everything: beans, the application context, and component scanning.",
            "lv": 1,
            "time": "~4h",
            "tip": "Everything in Spring is a bean lookup. When something is null or missing, the question is always: is it a bean, and can the container see it? Check the package scan first.",
            "learn": [
              "Beans: container-managed objects and the ApplicationContext",
              "Component scanning: @Component, @Service, @Repository, @Controller stereotypes",
              "@Bean methods in @Configuration classes for third-party types",
              "The application context startup sequence and how to read its log"
            ],
            "do": [
              "Annotate three classes with stereotypes and inject them into each other",
              "Expose a DataSource-like bean via @Bean in a @Configuration class",
              "Move a component outside the scanned package and diagnose the NoSuchBeanDefinitionException"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Core Spring: IoC container", "https://docs.spring.io/spring-framework/reference/core/beans.html"]
            ]
          },
          {
            "t": "Auto-configuration & Starters, Demystified",
            "d": "How Boot configures itself: conditional beans, auto-config classes, and what starters actually add.",
            "lv": 2,
            "time": "~4h",
            "tip": "Auto-configuration is just @Conditional beans with sensible defaults. When magic misbehaves, run with --debug and read the auto-configuration report: it tells you exactly what matched and what did not.",
            "learn": [
              "Starters as dependency bundles: what spring-boot-starter-web pulls in",
              "@ConditionalOnClass, @ConditionalOnMissingBean, and the other conditions",
              "Overriding auto-config: your @Bean wins when the condition allows it"
            ],
            "do": [
              "Run your app with --debug and read the auto-configuration report",
              "Exclude an auto-configuration class and watch the app fail meaningfully",
              "Define your own @Bean that overrides an auto-configured one"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Auto-configuration docs", "https://docs.spring.io/spring-boot/reference/using/auto-configuration.html"]
            ]
          }
        ]
      },
      {
        "t": "Dependency Injection & Configuration",
        "d": "Injection done right, bean lifecycle, externalized config, and Boot 4's modular starters.",
        "lv": 1,
        "children": [
          {
            "t": "Constructor Injection Done Right",
            "d": "The one true injection style: final fields, required dependencies, and testability.",
            "lv": 1,
            "time": "~3h",
            "tip": "Constructor injection, always. Field injection hides required dependencies, breaks immutability, and makes unit tests painful. If a tutorial uses @Autowired on fields, find a better tutorial.",
            "learn": [
              "Constructor vs field vs setter injection and why constructor wins",
              "@Autowired semantics and the single-constructor shortcut",
              "Qualifiers and @Primary when multiple beans share a type"
            ],
            "do": [
              "Refactor a field-injected service to constructor injection",
              "Register two implementations of an interface and pick one with @Qualifier",
              "Write a plain unit test with new Service(dependency) and no Spring context"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Dependency injection docs", "https://docs.spring.io/spring-framework/reference/core/beans/dependencies.html"]
            ]
          },
          {
            "t": "Bean Scopes & Lifecycle",
            "d": "Singleton, prototype, request/session scopes, and the lifecycle callbacks in between.",
            "lv": 2,
            "time": "~4h",
            "tip": "Singletons must be stateless and thread-safe: one instance serves all requests concurrently. Mutable state in a singleton is a race condition waiting for traffic.",
            "learn": [
              "Singleton vs prototype: the only two scopes most apps need",
              "Web scopes: request, session, and application in web apps",
              "Lifecycle: @PostConstruct, @PreDestroy, InitializingBean, and shutdown ordering"
            ],
            "do": [
              "Prove singleton identity by printing bean hash codes across requests",
              "Inject a request-scoped bean into a singleton and fix it with a scoped proxy",
              "Add @PostConstruct validation that fails fast on bad config"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Bean scopes", "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html"]
            ]
          },
          {
            "t": "@ConfigurationProperties & Profiles",
            "d": "Type-safe config binding, profile-specific files, and secrets handling.",
            "lv": 2,
            "time": "~4h",
            "tip": "Use @ConfigurationProperties classes instead of @Value(\"${...\") strings everywhere. Relaxed binding, validation, and IDE completion beat scattered string keys that fail silently.",
            "learn": [
              "@ConfigurationProperties with constructor binding and validation",
              "application.yml vs application.properties and profile-specific documents",
              "Precedence: CLI args beat env vars beat files; secrets via vaults, not git"
            ],
            "do": [
              "Bind a nested app.* section to a validated record",
              "Run with --spring.profiles.active=prod and a prod-only datasource",
              "Externalize a secret via environment variable and confirm it never hits git"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Externalized configuration", "https://docs.spring.io/spring-boot/reference/features/external-config.html"]
            ]
          },
          {
            "t": "Boot 4's Modular Starters",
            "d": "The Boot 4 starter split: webmvc, data-jpa, and test slices instead of monolith starters.",
            "lv": 2,
            "time": "~3h",
            "tip": "Boot 4 renamed and split starters (spring-boot-starter-web is now spring-boot-starter-webmvc). Copy-pasting Boot 3 dependency lists into Boot 4 is the fastest way to a broken build: check the current starter names.",
            "learn": [
              "What changed in Boot 4: spring-boot-starter-webmvc, -data-jpa, and friends",
              "Test slices as their own starters (webmvc-test pulls in test transitively)",
              "The Bill of Materials: how versions stay consistent without you pinning them"
            ],
            "do": [
              "Start a Boot 4 project and list the resolved starter artifacts",
              "Swap a Boot 3 pom to Boot 4 starter names following the migration guide",
              "Override one managed version and observe the BOM conflict warning"
            ],
            "tools": ["Spring Boot", "Maven"],
            "res": [
              ["Spring Boot 4.0 release notes", "https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes"],
              ["Spring Boot starters", "https://docs.spring.io/spring-boot/reference/using/build-systems.html"]
            ]
          },
          {
            "t": "Conditional Beans & Custom Starters",
            "d": "Building your own auto-configuration: conditions, ordering, and starter packaging.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "Write custom starters for shared company infrastructure (metrics, audit, clients), not for business features. Business code belongs in modules, not in auto-configuration magic.",
            "learn": [
              "@ConditionalOnProperty, @ConditionalOnBean, and custom conditions",
              "AutoConfiguration.imports registration and ordering with @AutoConfigureAfter",
              "Packaging a starter: the -starter and -autoconfigure split"
            ],
            "do": [
              "Build a tiny starter that auto-configures a greeting client",
              "Gate it behind a custom @ConditionalOnProperty flag",
              "Consume it from a second project with zero manual config"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Creating your own auto-configuration", "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html"]
            ]
          },
          {
            "t": "Spring AOP: The Idea",
            "d": "Aspect-oriented programming: proxies, pointcuts, and where Spring uses AOP behind your back.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "You use AOP constantly without writing aspects: @Transactional, @Cacheable, and @Async are all proxies. Understanding proxies explains why self-invocation skips @Transactional.",
            "learn": [
              "Proxies: JDK dynamic proxies vs CGLIB and when each applies",
              "Pointcuts and advice: @Before, @Around, and execution expressions",
              "Self-invocation: why calling this.method() bypasses the proxy"
            ],
            "do": [
              "Write an @Around aspect that times method execution",
              "Reproduce the self-invocation @Transactional trap and fix it",
              "Inspect the proxy class name in the debugger to see CGLIB at work"
            ],
            "tools": ["Spring Boot", "AspectJ"],
            "res": [
              ["Aspect Oriented Programming with Spring", "https://docs.spring.io/spring-framework/reference/core/aop.html"]
            ]
          }
        ]
      },
      {
        "t": "REST with Spring MVC",
        "d": "Controllers, request handling, validation, exceptions, and API docs.",
        "lv": 2,
        "children": [
          {
            "t": "DispatcherServlet: How Requests Flow",
            "d": "The front controller at the heart of Spring MVC and the handler pipeline around it.",
            "lv": 2,
            "time": "~4h",
            "tip": "Every MVC feature (interceptors, argument resolvers, exception handlers) is a hook in the DispatcherServlet pipeline. Knowing the order tells you exactly where to plug in.",
            "learn": [
              "DispatcherServlet as front controller: mapping, invoking, rendering",
              "HandlerMapping, HandlerAdapter, and ViewResolver roles",
              "Interceptors vs filters vs aspects: where each runs"
            ],
            "do": [
              "Trace a request through the DispatcherServlet with debug logging on",
              "Write a HandlerInterceptor that logs request duration",
              "Register a custom HandlerMethodArgumentResolver"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Spring Web MVC", "https://docs.spring.io/spring-framework/reference/web/webmvc.html"]
            ]
          },
          {
            "t": "@RestController & Mapping Annotations",
            "d": "Mapping HTTP to methods: @GetMapping, @PostMapping, path variables, and REST conventions.",
            "lv": 2,
            "time": "~5h",
            "tip": "Resources are nouns, HTTP verbs are verbs: /orders/{id}, not /getOrder. And return ResponseEntity with the right status: 201 with Location on create, 204 on delete.",
            "learn": [
              "@RestController, @RequestMapping, and the composed @GetMapping family",
              "@PathVariable, regex constraints, and matrix variables",
              "ResponseEntity: status, headers, and body control"
            ],
            "do": [
              "Build a full CRUD controller for a resource with correct status codes",
              "Add a @PathVariable with a regex constraint",
              "Return 201 Created with a Location header built from the new id"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Annotated controllers", "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html"]
            ]
          },
          {
            "t": "Request Bodies, Params & Content Negotiation",
            "d": "Reading input correctly: @RequestBody, @RequestParam, and JSON via Jackson.",
            "lv": 2,
            "time": "~4h",
            "tip": "Boot 4 moved Jackson databind to tools.jackson (Jackson 3). If your ObjectMapper imports break after upgrading, that package move is the culprit, not your code.",
            "learn": [
              "@RequestBody deserialization and Jackson's role",
              "@RequestParam, @RequestHeader, @CookieValue, and multipart with @RequestPart",
              "Content negotiation: produces/consumes and the Jackson 3 package move in Boot 4"
            ],
            "do": [
              "Accept a JSON body into a record and echo it back",
              "Handle a multipart file upload with @RequestPart",
              "Customize Jackson (naming strategy, date format) via a Jackson2ObjectMapperBuilderCustomizer equivalent"
            ],
            "tools": ["Spring Boot", "Jackson"],
            "res": [
              ["Spring Boot JSON docs", "https://docs.spring.io/spring-boot/reference/io/json.html"]
            ]
          },
          {
            "t": "Bean Validation (Jakarta Validation)",
            "d": "Declarative input validation: constraints, groups, and custom validators.",
            "lv": 2,
            "time": "~4h",
            "tip": "Put @Valid on the @RequestBody parameter, not just on the class. Without it on the parameter, none of your carefully written constraints ever run.",
            "learn": [
              "Constraint annotations: @NotNull, @Size, @Email, @Positive, and friends",
              "@Valid for cascading into nested objects and collections",
              "Custom constraints and validation groups for create vs update"
            ],
            "do": [
              "Validate a registration DTO with cascading nested validation",
              "Write a custom @PasswordStrength constraint",
              "Shape the 400 response with a @ControllerAdvice handler for MethodArgumentNotValidException"
            ],
            "tools": ["Hibernate Validator"],
            "res": [
              ["Validation docs", "https://docs.spring.io/spring-boot/reference/io/validation.html"]
            ]
          },
          {
            "t": "@ControllerAdvice: Exception Handling",
            "d": "One place for all API errors: global exception handlers and consistent error shapes.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never leak stack traces or internal messages to API clients. Map exceptions to stable error codes your clients can switch on, and log the full details server-side.",
            "learn": [
              "@ControllerAdvice and @ExceptionHandler mechanics",
              "ProblemDetail (RFC 9457) as the standard error body",
              "Mapping domain exceptions to HTTP statuses in one place"
            ],
            "do": [
              "Build a global handler returning ProblemDetail for all app exceptions",
              "Map EntityNotFound to 404 and validation failures to 422",
              "Test that a 500 response contains no stack trace"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Error handling in Spring MVC", "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-exceptionhandlers.html"]
            ]
          },
          {
            "t": "API Docs with springdoc-openapi",
            "d": "Generating OpenAPI specs and Swagger UI from annotations.",
            "lv": 2,
            "time": "~3h",
            "tip": "Use springdoc-openapi 3.x with Boot 4 (2.x targets Boot 3). Version mismatch here is a silent startup failure that wastes an afternoon.",
            "learn": [
              "@Tag, @Operation, @Parameter, and @Schema annotations",
              "Documenting security schemes (bearer JWT) in the spec",
              "Grouping APIs and customizing the Swagger UI"
            ],
            "do": [
              "Add springdoc-openapi 3.x and browse Swagger UI",
              "Annotate your controllers so the spec reads like real docs",
              "Export openapi.json and generate a TypeScript client from it"
            ],
            "tools": ["springdoc-openapi"],
            "res": [
              ["springdoc-openapi", "https://springdoc.org/"]
            ]
          },
          {
            "t": "Spring HATEOAS & REST Maturity",
            "d": "Hypermedia controls and the Richardson maturity model: when links in responses pay off.",
            "lv": 3,
            "time": "~3h",
            "tag": "opt",
            "tip": "HATEOAS is rarely worth it for first-party frontends you control. It pays off for public platforms with many unknown clients; for your own SPA, clean REST plus good docs wins.",
            "learn": [
              "The Richardson maturity model: levels 0 through 3",
              "EntityModel, CollectionModel, and link building with WebMvcLinkBuilder",
              "Affordances: advertising what actions a resource supports"
            ],
            "do": [
              "Add self and collection links to a resource response",
              "Build an affordance for the next valid state transition",
              "Decide for a real API whether level 2 or 3 is justified"
            ],
            "tools": ["Spring HATEOAS"],
            "res": [
              ["Spring HATEOAS", "https://spring.io/projects/spring-hateoas"]
            ]
          }
        ]
      },
      {
        "t": "Data: JPA & Transactions",
        "d": "Spring Data JPA, entity mapping, queries, transactions, and migrations.",
        "lv": 2,
        "children": [
          {
            "t": "Spring Data JPA Repositories",
            "d": "Interfaces that become implementations: derived queries, paging, and sorting.",
            "lv": 2,
            "time": "~5h",
            "tip": "Derived query methods are great until the name is 90 characters long. Past three conditions, switch to @Query: readability is a feature.",
            "learn": [
              "CrudRepository, PagingAndSortingRepository, JpaRepository",
              "Derived query methods: findBy, And/Or, OrderBy, Top/First",
              "Paging and sorting with Pageable and Sort"
            ],
            "do": [
              "Create a repository and write five derived queries",
              "Add pagination to a list endpoint with Pageable",
              "Write a @Query with JPQL for a query the derivation cannot express"
            ],
            "tools": ["Spring Data JPA", "Hibernate"],
            "res": [
              ["Spring Data JPA reference", "https://docs.spring.io/spring-data/jpa/reference/jpa.html"]
            ]
          },
          {
            "t": "Entity Mapping: The Essentials",
            "d": "@Entity, @Id, column mapping, and the defaults Hibernate applies.",
            "lv": 2,
            "time": "~6h",
            "tip": "Always set an explicit @Id generation strategy and never use GenerationType.AUTO blindly: on some databases it creates a shared sequence that becomes a bottleneck and a surprise.",
            "learn": [
              "@Entity, @Table, @Column, and naming strategies",
              "@Id generation strategies and natural vs surrogate keys",
              "Embeddables (@Embedded) for value objects like Address or Money"
            ],
            "do": [
              "Map three entities with explicit table and column names",
              "Use @Embedded for an Address value object shared by two entities",
              "Inspect the DDL Hibernate generates and fix every surprise"
            ],
            "tools": ["Hibernate"],
            "res": [
              ["Hibernate ORM docs", "https://hibernate.org/orm/documentation/"]
            ]
          },
          {
            "t": "Relationships: The Hard Parts",
            "d": "Owning sides, fetch types, cascading, and the N+1 problem in JPA.",
            "lv": 2,
            "time": "~6h",
            "tip": "Default to LAZY fetching on every association and fetch-join what you need per query. EAGER fetching is how a simple findById loads half the database.",
            "learn": [
              "@OneToMany/@ManyToOne, @ManyToMany, and the owning side (mappedBy)",
              "FetchType.LAZY vs EAGER and why EAGER is almost always wrong",
              "Cascade types and orphanRemoval: what deleting a parent really does",
              "N+1 in JPA and fixing it with @EntityGraph or fetch joins"
            ],
            "do": [
              "Model Order/OrderItem/Product with correct owning sides",
              "Reproduce an N+1 with Hibernate statistics on, then fix with @EntityGraph",
              "Demonstrate orphanRemoval deleting children on parent update"
            ],
            "tools": ["Hibernate"],
            "res": [
              ["Hibernate associations guide", "https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html"]
            ]
          },
          {
            "t": "Custom Queries: JPQL, @Query, Projections",
            "d": "Going beyond derived methods: JPQL, native queries, and DTO projections.",
            "lv": 3,
            "time": "~5h",
            "tip": "Project to DTOs with constructor expressions or interface projections for read models. Loading full entities for a dashboard table is the JPA equivalent of SELECT *.",
            "learn": [
              "JPQL: querying the object model, not the tables",
              "Native queries and SqlResultSetMapping for the exotic cases",
              "Projections: interface-based, class-based (DTO), and dynamic"
            ],
            "do": [
              "Write a JPQL aggregation query returning a DTO projection",
              "Write one native query and map it with @SqlResultSetMapping",
              "Compare the SQL of an entity load vs a DTO projection"
            ],
            "tools": ["Spring Data JPA"],
            "res": [
              ["Query methods reference", "https://docs.spring.io/spring-data/jpa/reference/jpa.query-methods.html"]
            ]
          },
          {
            "t": "@Transactional: The Rules",
            "d": "Declarative transactions: propagation, isolation, rollback rules, and the proxy traps.",
            "lv": 2,
            "time": "~5h",
            "tip": "@Transactional only rolls back on unchecked exceptions by default. A caught-and-swallowed RuntimeException or a checked exception leaves a half-committed transaction: declare rollbackFor explicitly when it matters.",
            "learn": [
              "ACID in practice and what the annotation actually does (proxy + interceptor)",
              "Propagation (REQUIRED, REQUIRES_NEW) and isolation levels",
              "Rollback rules: unchecked vs checked exceptions, readOnly optimizations"
            ],
            "do": [
              "Prove rollback works with a failing service method and a test",
              "Reproduce the self-invocation trap and fix it",
              "Use REQUIRES_NEW for audit logging that must survive the outer rollback"
            ],
            "tools": ["Spring Boot"],
            "res": [
              ["Transaction management", "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative.html"]
            ]
          },
          {
            "t": "Flyway & Liquibase Migrations",
            "d": "Versioned schema migrations: SQL scripts with Flyway or changelogs with Liquibase.",
            "lv": 2,
            "time": "~4h",
            "tip": "Never let Hibernate's ddl-auto update a shared database. Use migrations for every schema change: they are reviewed, versioned, and replayable, unlike magic DDL.",
            "learn": [
              "Migration versioning, checksums, and the schema history table",
              "Flyway: versioned SQL scripts and repeatable migrations",
              "Liquibase changelogs: XML/YAML/SQL formats and rollbacks"
            ],
            "do": [
              "Set ddl-auto to validate and add Flyway with three versioned scripts",
              "Write a migration that backfills data, not just schema",
              "Break a checksum on purpose and repair it correctly"
            ],
            "tools": ["Flyway", "Liquibase"],
            "res": [
              ["Flyway", "https://github.com/flyway/flyway"],
              ["Liquibase", "https://www.liquibase.com/"]
            ]
          },
          {
            "t": "Caching with Spring Cache",
            "d": "@Cacheable, @CacheEvict, and backing the cache with Caffeine or Redis.",
            "lv": 3,
            "time": "~4h",
            "tip": "Cache the expensive read, evict on the write, and never cache without a TTL. A cache with no eviction strategy is a stale-data bug with extra steps.",
            "learn": [
              "@Cacheable, @CachePut, @CacheEvict and SpEL cache keys",
              "Caffeine for in-process, Redis for distributed caching",
              "Cache stampede protection and conditional caching with unless"
            ],
            "do": [
              "Cache a slow service method with @Cacheable and a TTL",
              "Evict on update and prove freshness with a test",
              "Switch the backing store from Caffeine to Redis via config"
            ],
            "tools": ["Caffeine", "Redis"],
            "res": [
              ["Spring cache abstraction", "https://docs.spring.io/spring-framework/reference/integration/cache.html"]
            ]
          }
        ]
      },
      {
        "t": "Spring Security",
        "d": "The filter chain, authentication, JWT, OAuth2, and authorization rules.",
        "lv": 2,
        "children": [
          {
            "t": "The Security Filter Chain",
            "d": "How requests get secured: the filter chain, SecurityFilterChain beans, and request matchers.",
            "lv": 2,
            "time": "~5h",
            "tip": "Order your matchers from most specific to least specific. A permissive /** rule placed first silently disables every rule after it, and the app looks secured while it is not.",
            "learn": [
              "The filter chain: each filter's job from authentication to exception translation",
              "SecurityFilterChain @Bean and the lambda DSL configuration style",
              "requestMatchers, permitAll, authenticated, and method security enablement"
            ],
            "do": [
              "Secure an app so /public is open and everything else needs auth",
              "Print the filter chain order with debug logging and read it",
              "Create two SecurityFilterChain beans with @Order for API vs web"
            ],
            "tools": ["Spring Security"],
            "res": [
              ["Spring Security reference", "https://docs.spring.io/spring-security/reference/"]
            ]
          },
          {
            "t": "Authentication: Users, Passwords, Sessions",
            "d": "UserDetailsService, password encoders, and form login for classic web apps.",
            "lv": 2,
            "time": "~5h",
            "tip": "Use BCrypt (or argon2) via DelegatingPasswordEncoder and never write your own hashing. Password storage is one of those problems where custom code is always worse.",
            "learn": [
              "UserDetails, UserDetailsService, and loading users from your database",
              "PasswordEncoder: BCrypt, and why the delegating encoder matters for upgrades",
              "Form login, logout, session fixation, and remember-me"
            ],
            "do": [
              "Implement UserDetailsService backed by your JPA users table",
              "Register users with BCrypt-hashed passwords",
              "Configure session fixation protection and concurrent session limits"
            ],
            "tools": ["Spring Security"],
            "res": [
              ["Authentication docs", "https://docs.spring.io/spring-security/reference/servlet/authentication/index.html"]
            ]
          },
          {
            "t": "JWT Auth as a Resource Server",
            "d": "Stateless API auth: validating JWTs with spring-boot-starter-security-oauth2-resource-server.",
            "lv": 2,
            "time": "~6h",
            "tip": "In Boot 4 the starter is spring-boot-starter-security-oauth2-resource-server (modular naming). Validate issuer and audience, and keep token lifetimes short: a JWT cannot be revoked.",
            "learn": [
              "Resource server concept: validating tokens issued by someone else",
              "JWKS-based validation and mapping claims to authorities",
              "Custom JwtAuthenticationConverter for roles from custom claims"
            ],
            "do": [
              "Protect an API with the OAuth2 resource server starter and a test issuer",
              "Map a custom roles claim to Spring authorities",
              "Write a MockMvc test with a mock JWT for an authorized and an unauthorized case"
            ],
            "tools": ["Spring Security", "Keycloak"],
            "res": [
              ["OAuth2 resource server", "https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html"]
            ]
          },
          {
            "t": "OAuth2 Login & Social Sign-In",
            "d": "Login with Google/GitHub via OAuth2 authorization code flow in Spring apps.",
            "lv": 3,
            "time": "~5h",
            "tip": "Prefer a managed identity provider (Keycloak, Auth0, Entra) over building login yourself. The authorization code flow with PKCE has sharp edges around state, nonce, and token storage.",
            "learn": [
              "The authorization code flow with PKCE, step by step",
              "oauth2Login() configuration and provider registration",
              "Linking external identities to local user records"
            ],
            "do": [
              "Add Google login to a Spring MVC app",
              "Inspect the ID token claims after login",
              "Persist the external subject alongside your local user"
            ],
            "tools": ["Spring Security", "Keycloak"],
            "res": [
              ["OAuth2 login", "https://docs.spring.io/spring-security/reference/servlet/oauth2/login/index.html"]
            ]
          },
          {
            "t": "Method Security & Authorization Rules",
            "d": "@PreAuthorize, SpEL expressions, and domain-object security with @PostAuthorize.",
            "lv": 3,
            "time": "~5h",
            "tip": "Put authorization on the service layer with @PreAuthorize, not just on controllers. Controllers get bypassed (tests, new endpoints); service-layer checks cannot be.",
            "learn": [
              "@EnableMethodSecurity and @PreAuthorize/@PostAuthorize",
              "SpEL: hasRole, hasAuthority, and custom permission evaluators",
              "@PostFilter/@PreFilter and the performance cost of filtering in memory"
            ],
            "do": [
              "Protect service methods with @PreAuthorize(\"hasRole('ADMIN')\")",
              "Write a custom PermissionEvaluator for document ownership",
              "Test a denied call and assert the AccessDeniedException"
            ],
            "tools": ["Spring Security"],
            "res": [
              ["Method security", "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html"]
            ]
          },
          {
            "t": "CSRF, CORS & Security Headers",
            "d": "The browser-facing defenses: CSRF tokens, CORS policies, and secure headers.",
            "lv": 3,
            "time": "~4h",
            "tip": "Do not disable CSRF globally because your SPA complained. Cookie-based apps need CSRF protection; token-based APIs with no cookies can disable it deliberately and document why.",
            "learn": [
              "CSRF: when it applies, the token repository, and SPA patterns",
              "CORS: @CrossOrigin vs global CorsConfigurationSource",
              "Security headers: HSTS, frame options, content security policy"
            ],
            "do": [
              "Configure CSRF with a cookie token repository for a Thymeleaf app",
              "Set a strict CORS policy allowing only your frontend origin",
              "Add security headers and verify them with curl -I"
            ],
            "tools": ["Spring Security"],
            "res": [
              ["CSRF protection", "https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html"]
            ]
          },
          {
            "t": "Testing Secured Endpoints",
            "d": "Proving your security works: @WithMockUser, mock JWTs, and negative tests.",
            "lv": 3,
            "time": "~4h",
            "tip": "Every secured endpoint needs a negative test: unauthenticated gets 401, wrong role gets 403. Security without negative tests is a hope, not a guarantee.",
            "learn": [
              "@WithMockUser and @WithUserDetails for MVC tests",
              "Testing JWT resource servers with mock authentication",
              "Asserting 401 vs 403: authentication failure vs authorization failure"
            ],
            "do": [
              "Write MockMvc tests for 200/401/403 on one endpoint",
              "Test a @PreAuthorize service method directly",
              "Verify CSRF protection blocks a state-changing test request"
            ],
            "tools": ["Spring Security", "JUnit"],
            "res": [
              ["Testing with Spring Security", "https://docs.spring.io/spring-security/reference/servlet/test/index.html"]
            ]
          }
        ]
      },
      {
        "t": "Testing",
        "d": "Unit tests, slice tests, and real-database integration tests.",
        "lv": 2,
        "children": [
          {
            "t": "JUnit 5 & AssertJ Basics",
            "d": "The testing foundation: lifecycle, assertions that read well, and parameterized tests.",
            "lv": 1,
            "time": "~4h",
            "tip": "One behavior per test, with a name that reads as a sentence. When a test named test1 fails at 2am, it tells you nothing; when calculatesDiscountForVipCustomer fails, you know where to look.",
            "learn": [
              "JUnit 5 lifecycle: @Test, @BeforeEach, @DisplayName",
              "AssertJ fluent assertions and why they beat raw JUnit asserts",
              "@ParameterizedTest with @ValueSource, @CsvSource, @MethodSource"
            ],
            "do": [
              "Write tests for a discount calculator with AssertJ assertions",
              "Convert repeated tests into a @ParameterizedTest",
              "Structure tests with given/when/then comments"
            ],
            "tools": ["JUnit 5", "AssertJ"],
            "res": [
              ["JUnit 5 user guide", "https://docs.junit.org/current/user-guide/"],
              ["AssertJ", "https://assertj.github.io/doc/"]
            ]
          },
          {
            "t": "Testing Services with Mockito",
            "d": "Isolating units: stubs, mocks, verification, and argument captors.",
            "lv": 2,
            "time": "~4h",
            "tip": "Mock roles, not objects: mock the ports your class talks through (repositories, clients), never value objects or the class under test. Over-mocking makes tests brittle mirrors of the implementation.",
            "learn": [
              "Mock vs stub vs spy and when each is honest",
              "when/thenReturn stubbing, verify() interaction checks",
              "ArgumentCaptor and lenient vs strict stubs"
            ],
            "do": [
              "Test a service with a mocked repository",
              "Verify a notification was sent exactly once with captor assertions",
              "Find and delete a test that mocks the class under test"
            ],
            "tools": ["Mockito"],
            "res": [
              ["Mockito", "https://site.mockito.org/"]
            ]
          },
          {
            "t": "@SpringBootTest: Full-Context Tests",
            "d": "Booting the whole context: when you need it, and keeping it fast.",
            "lv": 2,
            "time": "~5h",
            "tip": "Full-context tests are slow by nature, so keep them few and meaningful. If your suite takes 20 minutes, nobody runs it; slice tests and unit tests should be the bulk.",
            "learn": [
              "What @SpringBootTest loads and the context caching mechanism",
              "@MockBean vs @SpyBean in Boot 3 style and Boot 4's @MockitoBean",
              "Test-specific properties and @TestPropertySource"
            ],
            "do": [
              "Write a smoke test asserting the context loads",
              "Replace a payment client with a mock bean in a full-context test",
              "Measure suite time before and after moving tests to slices"
            ],
            "tools": ["Spring Boot", "JUnit 5"],
            "res": [
              ["Testing with Spring Boot", "https://docs.spring.io/spring-boot/reference/testing/index.html"]
            ]
          },
          {
            "t": "Web Slice Tests with MockMvc",
            "d": "Testing the web layer without the full app: spring-boot-starter-webmvc-test slices.",
            "lv": 2,
            "time": "~5h",
            "tip": "Web slice tests prove routing, binding, validation, and serialization: the exact things that break APIs. They catch the @RequestBody typo that unit tests never see.",
            "learn": [
              "@WebMvcTest and what the slice includes (and excludes)",
              "MockMvc: performing requests and asserting JSON with jsonPath",
              "Testing validation failures and exception handlers in the slice"
            ],
            "do": [
              "Write a @WebMvcTest for a controller with mocked service",
              "Assert a 201 with Location header and a JSON body via jsonPath",
              "Test that invalid input returns your ProblemDetail shape"
            ],
            "tools": ["Spring Boot", "MockMvc"],
            "res": [
              ["Testing web slices", "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html"]
            ]
          },
          {
            "t": "Data Slice Tests: @DataJpaTest",
            "d": "Testing repositories against a real database engine with @DataJpaTest.",
            "lv": 2,
            "time": "~4h",
            "tip": "Run @DataJpaTest against the same engine as production (via Testcontainers), not H2. H2 accepts SQL your production database rejects, and the test suite becomes fiction.",
            "learn": [
              "What @DataJpaTest loads: repositories, entities, and TestEntityManager",
              "Transactional test rollback semantics",
              "Custom queries and @Query testing in the slice"
            ],
            "do": [
              "Test a derived query method and a @Query method",
              "Verify an @EntityGraph fixes a lazy-loading failure in a test",
              "Point the slice at a Testcontainers Postgres instead of H2"
            ],
            "tools": ["Spring Boot", "Testcontainers"],
            "res": [
              ["Testing data slices", "https://docs.spring.io/spring-boot/reference/testing/data-slices.html"]
            ]
          },
          {
            "t": "Testcontainers: Real Databases in Tests",
            "d": "Dockerized Postgres, Kafka, and Redis in tests with the Testcontainers 2.x artifacts.",
            "lv": 3,
            "time": "~5h",
            "tip": "In Testcontainers 2.x every artifact carries the testcontainers- prefix (testcontainers-postgresql, testcontainers-kafka). The old unprefixed Boot 3 coordinates do not exist on this line.",
            "learn": [
              "The Testcontainers lifecycle and @ServiceConnection auto-wiring",
              "Postgres, Kafka, and Redis modules in integration tests",
              "Reuse strategies and keeping container startup out of the critical path"
            ],
            "do": [
              "Run a repository test against containerized Postgres with @ServiceConnection",
              "Add a Kafka module test for a consumer",
              "Measure cold vs reused container startup and configure reuse"
            ],
            "tools": ["Testcontainers", "Docker"],
            "res": [
              ["Testcontainers", "https://www.testcontainers.org/"],
              ["Testcontainers with Spring Boot", "https://docs.spring.io/spring-boot/reference/testing/testcontainers.html"]
            ]
          }
        ]
      },
      {
        "t": "Production & Microservices",
        "d": "Actuator, packaging, Docker, Spring Cloud, resilience, and native images.",
        "lv": 3,
        "children": [
          {
            "t": "Actuator: Health, Metrics & Observability",
            "d": "Production-ready endpoints: health indicators, Micrometer metrics, and tracing.",
            "lv": 3,
            "time": "~4h",
            "tip": "Expose health and metrics, but never expose env or heapdump publicly. Actuator endpoints are an attacker's reconnaissance goldmine: lock them behind management ports and auth.",
            "learn": [
              "Health indicators: liveness, readiness, and custom checks",
              "Micrometer metrics: counters, timers, and Prometheus exposition",
              "Distributed tracing with Micrometer Tracing and OpenTelemetry"
            ],
            "do": [
              "Add a custom health indicator for an external dependency",
              "Expose Prometheus metrics and graph request latency",
              "Trace a request across two services and view it in a collector"
            ],
            "tools": ["Micrometer", "Prometheus", "Grafana"],
            "res": [
              ["Actuator docs", "https://docs.spring.io/spring-boot/reference/actuator/index.html"],
              ["Micrometer", "https://micrometer.io/"]
            ]
          },
          {
            "t": "Packaging & Running in Production",
            "d": "Executable jars, layered images, JVM flags, and graceful shutdown.",
            "lv": 3,
            "time": "~4h",
            "tip": "Set -Xmx explicitly and enable graceful shutdown. A container with no memory limit and no shutdown hook is how you get OOM kills during deploys and dropped in-flight requests.",
            "learn": [
              "The executable jar layout and layered jars for Docker caching",
              "JVM flags that matter: heap, GC choice, container awareness",
              "Graceful shutdown and readiness probes during rolling deploys"
            ],
            "do": [
              "Build a layered jar and inspect its layers",
              "Tune heap flags and watch GC behavior under load",
              "Configure graceful shutdown and test a rolling restart"
            ],
            "tools": ["Spring Boot", "Docker"],
            "res": [
              ["Packaging Spring Boot applications", "https://docs.spring.io/spring-boot/reference/packaging/index.html"]
            ]
          },
          {
            "t": "Docker & Kubernetes Deployment",
            "d": "Containerizing Boot apps: buildpacks, Jib, and Kubernetes manifests.",
            "lv": 3,
            "time": "~5h",
            "tip": "Use Cloud Native Buildpacks (bootBuildImage) before hand-writing Dockerfiles. They produce layered, secure images with the right JVM flags; custom Dockerfiles usually reinvent them worse.",
            "learn": [
              "bootBuildImage with Cloud Native Buildpacks",
              "Jib for Docker-free image builds",
              "Kubernetes: deployments, services, probes, and config via ConfigMaps"
            ],
            "do": [
              "Build an image with bootBuildImage and run it",
              "Write a deployment with liveness/readiness probes hitting /actuator/health",
              "Externalize config with a ConfigMap and secrets with a Secret"
            ],
            "tools": ["Docker", "Kubernetes", "Jib"],
            "res": [
              ["Container images docs", "https://docs.spring.io/spring-boot/reference/packaging/container-images.html"]
            ]
          },
          {
            "t": "Spring Cloud: Gateway & Service Discovery",
            "d": "API gateway routing, config server, and service discovery for microservices.",
            "lv": 3,
            "time": "~6h",
            "tip": "Match your Spring Cloud release train to your Boot version (2025.1.x Oakwood for Boot 4.1). A mismatched Cloud train is dependency hell: check the compatibility matrix first, always.",
            "learn": [
              "Spring Cloud Gateway: routes, predicates, and filters",
              "Service discovery with Eureka or Consul, and client-side load balancing",
              "Centralized config with Spring Cloud Config and refresh semantics"
            ],
            "do": [
              "Route two services through a gateway with path predicates",
              "Register services with Eureka and call one by logical name",
              "Centralize config and refresh a property without restarting"
            ],
            "tools": ["Spring Cloud Gateway", "Eureka"],
            "res": [
              ["Spring Cloud", "https://spring.io/projects/spring-cloud"],
              ["Spring Cloud Gateway", "https://docs.spring.io/spring-cloud-gateway/reference/"]
            ]
          },
          {
            "t": "Resilience with Resilience4j",
            "d": "Circuit breakers, retries, rate limiters, and bulkheads for distributed calls.",
            "lv": 3,
            "time": "~5h",
            "tip": "Put timeouts on everything before adding retries. A retry without a timeout just waits longer to fail; a circuit breaker without a timeout never trips in time.",
            "learn": [
              "Circuit breaker states and the failure-rate thresholds that move them",
              "Retry with backoff and jitter; rate limiter and bulkhead patterns",
              "Fallbacks and decorating calls with @CircuitBreaker/@Retry annotations"
            ],
            "do": [
              "Protect a downstream call with a circuit breaker and watch it open under failure",
              "Add retry with exponential backoff and jitter",
              "Expose breaker state via Actuator and alert on open circuits"
            ],
            "tools": ["Resilience4j"],
            "res": [
              ["Resilience4j", "https://github.com/resilience4j/resilience4j"]
            ]
          },
          {
            "t": "GraalVM Native Images",
            "d": "Compiling Boot apps to native binaries: startup speed, build cost, and the trade-offs.",
            "lv": 3,
            "time": "~4h",
            "tag": "opt",
            "tip": "Native images trade build time and reflection flexibility for startup speed. Reach for them in serverless and scale-to-zero; skip them for long-running services where JIT wins on throughput.",
            "learn": [
              "AOT processing in Spring Boot and reachability metadata",
              "What breaks: dynamic proxies, reflection, and runtime bytecode",
              "Buildpacks vs nativeBuildTools for producing the binary"
            ],
            "do": [
              "Compile a small Boot app to native with the Gradle/Maven native plugin",
              "Compare startup time and RSS: JVM vs native",
              "Fix a reflection failure with a runtime hint"
            ],
            "tools": ["GraalVM"],
            "res": [
              ["GraalVM native images with Spring Boot", "https://docs.spring.io/spring-boot/reference/packaging/native-image/index.html"]
            ]
          }
        ]
      }
    ]
  }
});
