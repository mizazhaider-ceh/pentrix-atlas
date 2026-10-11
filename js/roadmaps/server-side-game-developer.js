/* Atlas roadmap data: Server Side Game Developer (server-side-game-developer) */
ROADMAPS.push({
  "id": "server-side-game-developer",
  "title": "Server Side Game Developer",
  "icon": "📡",
  "color": "#0f4c5c",
  "desc": "Build the invisible half of multiplayer: authoritative servers, netcode that hides latency, matchmaking, persistence, anti-cheat, and server fleets that survive launch day.",
  "kind": "role",
  "root": {
    "t": "Server-Side Game Development",
    "d": "From sockets to planet-scale fleets: the networking, architecture, and operations behind real multiplayer games.",
    "children": [
      {
        "t": "Networking Foundations for Games",
        "d": "TCP vs UDP, sockets, serialization, and the latency math every multiplayer decision rests on.",
        "lv": 1,
        "children": [
          {
            "t": "TCP vs UDP: The Choice Every Game Faces",
            "d": "Reliability, ordering, and head-of-line blocking: why fast-paced games live on UDP and what they give up for it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "TCP guarantees: ordered, reliable, and the latency cost of those guarantees",
              "UDP: raw datagrams, no promises, and why games build their own reliability on top",
              "Head-of-line blocking: how one lost TCP packet stalls everything behind it"
            ],
            "do": [
              "Write down which data in a shooter needs reliability (chat, kills) vs not (positions)",
              "Measure RTT and jitter to a server with ping, then with packet loss simulated",
              "Sketch which of your game's messages go over TCP and which over UDP, and why"
            ],
            "tools": ["ping", "Wireshark"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "TCP for everything is the beginner default and it feels fine on localhost. The moment real latency and loss appear, head-of-line blocking turns TCP into a lag machine for time-sensitive data."
          },
          {
            "t": "Sockets: Your First Game Server",
            "d": "Bind, listen, accept, send, receive: a working echo server is the foundation everything else builds on.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "BSD sockets: the core calls and what each one does",
              "Blocking vs non-blocking sockets and why servers never block",
              "Byte order (endianness) and why network protocols specify it"
            ],
            "do": [
              "Write a TCP echo server in your language and connect with netcat",
              "Convert it to UDP and observe what changes (and what breaks)",
              "Send a struct over the wire and read it back correctly on the other end"
            ],
            "tools": ["C", "Python", "Go", "netcat"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Structs sent raw over sockets break across compilers and platforms due to padding and endianness. Serialize explicitly, field by field, from day one."
          },
          {
            "t": "Serialization: Protobuf and MessagePack",
            "d": "Game packets need to be small and versioned. Schema-based formats beat JSON the moment tick rate matters.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Why JSON is too verbose for per-tick game data",
              "Schema-based serialization: fields, types, and backward-compatible evolution",
              "Varints, packed repeated fields, and other size tricks"
            ],
            "do": [
              "Define a player-state message in a .proto file and generate code",
              "Serialize 60 snapshots per second and measure bytes per message",
              "Add a new optional field and confirm old clients still parse it"
            ],
            "tools": ["Protocol Buffers", "MessagePack", "FlatBuffers"],
            "res": [
              ["Protocol Buffers", "https://protobuf.dev"],
              ["MessagePack", "https://msgpack.org"]
            ],
            "tip": "Changing a serialized message without a versioning plan breaks every client still on the old build. Treat your packet formats like a public API: additive changes only."
          },
          {
            "t": "Latency, Bandwidth, and the Tick Budget",
            "d": "RTT, jitter, and packet loss translated into design numbers: how many players, how many updates, how much bandwidth.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "RTT vs one-way latency, jitter, and loss: what each one breaks",
              "The bandwidth budget: players times tick rate times bytes per update",
              "Why tick rate is a design decision (20Hz vs 60Hz vs 128Hz), not a bigger-is-better knob"
            ],
            "do": [
              "Compute the bandwidth for 64 players at 20Hz with 100-byte snapshots",
              "Simulate 150ms latency and 2% loss on localhost and play a test game through it",
              "Decide a tick rate for a hypothetical game and justify it in writing"
            ],
            "tools": ["Wireshark", "clumsy", "tc netem"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Higher tick rate is not free: it multiplies bandwidth and CPU cost for everyone. Competitive shooters pay for 128Hz; most games are perfectly served at 20 to 30Hz."
          },
          {
            "t": "Reliability Layers on Top of UDP",
            "d": "Sequence numbers, acks, and resends: build exactly the reliability each message type needs, nothing more.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Sequence numbers and acknowledgments: detecting loss and ordering",
              "Channels: reliable-ordered, reliable-unordered, and unreliable per message type",
              "Why you do not need to reinvent this: ENet and GameNetworkingSockets exist"
            ],
            "do": [
              "Implement sequence numbers and acks on a toy UDP protocol",
              "Add a resend timer and watch a lost packet get recovered",
              "Compare your toy against ENet and list what the library handles for you"
            ],
            "tools": ["ENet", "Valve GameNetworkingSockets"],
            "res": [
              ["ENet", "https://github.com/lsalzman/enet"],
              ["Valve GameNetworkingSockets", "https://github.com/ValveSoftware/GameNetworkingSockets"]
            ],
            "tip": "Hand-rolling a reliability layer is a great exercise and a terrible production plan. Use a battle-tested library for real games; the edge cases in retransmission logic are endless."
          }
        ]
      },
      {
        "t": "Languages and Concurrency",
        "d": "Picking a server language and the concurrency models that let one process serve thousands of players.",
        "lv": 1,
        "children": [
          {
            "t": "Picking a Server Language",
            "d": "C#, C++, Go, and Rust: the real trade-offs in performance, ecosystem, and hiring for game servers.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "C#: productive, great tooling, the Unity-adjacent default for many studios",
              "C++: maximum control and performance, maximum footguns",
              "Go and Rust: modern concurrency stories, growing game-server adoption"
            ],
            "do": [
              "Write the same echo server in two languages and compare the code",
              "Benchmark both under 1000 concurrent connections and note the differences",
              "Check job postings for game server roles and note which languages recur"
            ],
            "tools": ["C#", "C++", "Go", "Rust"],
            "res": [
              ["Go", "https://go.dev"],
              ["Rust", "https://www.rust-lang.org"],
              ["C# Documentation", "https://learn.microsoft.com/en-us/dotnet/csharp/"]
            ],
            "tip": "Language debates burn weeks. The boring truth: any of these can run a great game server. Pick the one your team already knows and spend the saved months on netcode quality."
          },
          {
            "t": "Async I/O: epoll, IOCP, and io_uring",
            "d": "One thread serving ten thousand connections: how modern async I/O actually works under the hood.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "The C10K problem: why thread-per-connection stops scaling",
              "Reactor (epoll, kqueue) vs proactor (IOCP, io_uring) models",
              "What async/await in your language compiles down to"
            ],
            "do": [
              "Write a server handling 1000 idle connections with a thread pool and watch memory grow",
              "Rewrite it with async I/O and compare resource usage",
              "Trace one packet from socket to handler and note every queue it passes through"
            ],
            "tools": ["Linux epoll", "io_uring", "Windows IOCP"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Async I/O does not make your game logic faster; it makes waiting cheaper. The simulation itself still needs its own threading story, which is the next topic."
          },
          {
            "t": "Threading Models for Game Servers",
            "d": "One thread per world, thread pools, lock-free queues: organizing work so cores stay busy and data stays safe.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Common models: single-threaded loop, one thread per zone, worker pools",
              "Shared state hazards: races, deadlocks, and why game servers fear them",
              "Lock-free queues and message passing as the safer communication pattern"
            ],
            "do": [
              "Run two threads incrementing one counter and watch it lose counts",
              "Fix it with a lock, then with a lock-free queue, and compare throughput",
              "Design a threading layout for a 4-zone game world on paper"
            ],
            "tools": ["C++", "C#", "Go", "Rust"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Locks around hot game state are contention magnets. The winning pattern is usually: one thread owns the simulation, everything else talks to it through queues."
          },
          {
            "t": "Actors, Tasks, and Coroutines",
            "d": "Higher-level concurrency: actor frameworks, goroutines, and async/await for game server logic.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "The actor model: isolated state, message passing, no shared memory",
              "Goroutines and C# tasks: cheap concurrency without manual threads",
              "When actors fit game servers: per-player or per-room actors"
            ],
            "do": [
              "Model each connected player as an actor/goroutine handling its messages",
              "Implement a room actor that broadcasts state to its players",
              "Kill one actor mid-game and verify the rest of the server survives"
            ],
            "tools": ["Akka", "Proto.Actor", "Go", "C#"],
            "res": [
              ["Go", "https://go.dev"]
            ],
            "tip": "Actors make concurrency safe but can hide performance cliffs: a million tiny actors with per-message allocation will show up in your profiler. Measure actor overhead before committing the whole architecture to it."
          },
          {
            "t": "Profiling a Busy Server",
            "d": "CPU profiles, allocation tracking, and GC pauses: finding what a loaded server actually spends time on.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Sampling profilers: reading a flame graph without fear",
              "Allocation profiling: why per-tick allocations kill server performance",
              "GC pauses and how they interact with fixed-timestep simulation"
            ],
            "do": [
              "Load-test your echo server and capture a CPU profile with Tracy or perf",
              "Find the hottest function and reduce its cost measurably",
              "Track allocations per tick and eliminate the top offender"
            ],
            "tools": ["Tracy", "perf", "dotnet-trace"],
            "res": [
              ["Tracy Profiler", "https://github.com/wolfpld/tracy"]
            ],
            "tip": "Profile under realistic load, not idle. Servers behave completely differently at 10 players vs 1000, and the bottleneck moves with the load."
          }
        ]
      },
      {
        "t": "Authoritative Server Architecture",
        "d": "The heart of multiplayer: the server owns the truth, clients predict and reconcile, and latency becomes invisible.",
        "lv": 2,
        "children": [
          {
            "t": "The Authority Doctrine: Inputs, Never Results",
            "d": "The single most important netcode rule: clients send what they intend, the server decides what happened.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Authority: one machine owns each piece of game truth",
              "Clients send inputs (tick, buttons, aim), never outcomes (I hit for 40)",
              "The moment a client reports results, speedhacks and god-mode are a JSON edit away"
            ],
            "do": [
              "List every gameplay outcome in a sample game and assign its authority",
              "Find one thing in your design tempted to be client-authoritative and move it server-side",
              "Write the rule as a comment at the top of your networking module"
            ],
            "tools": ["Any game engine", "Any server language"],
            "res": [
              ["Client-Server Game Architecture", "https://www.gabrielgambetta.com/client-server-game-architecture.html"]
            ],
            "tip": "Trusting the client with outcomes feels faster to build and is always wrong for anything contested. Convenience now becomes an unfixable cheat later."
          },
          {
            "t": "Fixed-Timestep Server Simulation",
            "d": "The server advances the world in numbered ticks. Everything in netcode hangs off those numbers.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Fixed timestep with an accumulator: same sim code, deterministic steps",
              "Tick numbering: every message stamped with the tick it belongs to",
              "Decoupling simulation rate from network send rate"
            ],
            "do": [
              "Run your game logic on a fixed 30Hz tick independent of frame rate",
              "Stamp every outbound packet with its tick number",
              "Replay a recorded input log and verify byte-identical simulation state"
            ],
            "tools": ["C#", "Go", "Rust", "C++"],
            "res": [
              ["Fix Your Timestep", "https://gafferongames.com/post/fix_your_timestep/"]
            ],
            "tip": "Netcode without sequence numbers is archaeology without dates. If a packet does not say which tick it belongs to, you cannot reconcile, interpolate, or debug anything."
          },
          {
            "t": "Snapshot Replication and Delta Compression",
            "d": "How the server tells clients about the world: full snapshots, deltas, quantization, and bit packing.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Snapshots: the server's periodic broadcast of world state",
              "Delta compression: sending only what changed since the client's last ack",
              "Quantization: floats to fixed point, and when precision loss is acceptable"
            ],
            "do": [
              "Implement snapshot broadcast at 20Hz for a toy world",
              "Add delta encoding against the last acknowledged state and measure the savings",
              "Quantize positions to 16-bit and check the visual error is invisible"
            ],
            "tools": ["Protocol Buffers", "C++", "Go"],
            "res": [
              ["Source Multiplayer Networking", "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"]
            ],
            "tip": "Sending full world state to everyone every tick works until your player count doubles. Design for deltas from the start; retrofitting compression onto a chatty protocol is painful."
          },
          {
            "t": "Client-Side Prediction and Reconciliation",
            "d": "Make the local player feel instant: predict your own movement, then rewind and replay when the server corrects you.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Prediction: run the same movement code locally the instant input happens",
              "Server reconciliation: rewind to the authoritative state, re-apply unacked inputs",
              "Smoothing corrections gradually instead of snapping the player"
            ],
            "do": [
              "Predict local player movement with the exact same code the server runs",
              "Implement rewind-and-replay reconciliation on authoritative corrections",
              "Play at 150ms simulated latency and tune smoothing until corrections are invisible"
            ],
            "tools": ["Godot", "Unity", "C#"],
            "res": [
              ["Client-Side Prediction and Server Reconciliation", "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"]
            ],
            "tip": "The number one cause of rubber-banding is the client and server running different movement code. Share the simulation code between both, same constants, same tick, or prediction will always diverge."
          },
          {
            "t": "Entity Interpolation",
            "d": "Remote players live in the past: render them between two known snapshots so their movement looks smooth.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why remote entities are rendered ~100ms in the past",
              "Interpolation buffers: holding two snapshots and blending between them",
              "Interpolation vs extrapolation: blending known data vs guessing"
            ],
            "do": [
              "Buffer incoming snapshots and render remote players with 100ms delay",
              "Compare interpolated motion against naive latest-snapshot rendering",
              "Handle packet loss gracefully: hold last known state, never freeze the game"
            ],
            "tools": ["Godot", "Unity"],
            "res": [
              ["Source Multiplayer Networking", "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"]
            ],
            "tip": "Extrapolation (guessing where someone is going) looks great until it is wrong, then it teleports. Interpolation is slightly delayed but never lies. Prefer the delay."
          },
          {
            "t": "Lag Compensation for Hit Registration",
            "d": "Favor the shooter fairly: rewind the server world to when the shot was fired before checking the hit.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The problem: by the time a shot arrives, the target has moved on the server",
              "Server-side rewinding: validate hits against historical positions",
              "Limits: maximum rewind windows and anti-abuse clamps"
            ],
            "do": [
              "Store timestamped position history for every player on the server",
              "On a hit claim, rewind targets to the shot's timestamp and test the hit",
              "Clamp the rewind window and log shots that exceed it"
            ],
            "tools": ["C#", "C++", "Go"],
            "res": [
              ["Source Multiplayer Networking", "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"]
            ],
            "tip": "Lag compensation without limits is an exploit: a lagging player gets to shoot at ghosts of where everyone was. Cap the rewind window and validate that the claimed latency is plausible."
          }
        ]
      },
      {
        "t": "Matchmaking and Sessions",
        "d": "Getting players into games together: lobbies, skill ratings, NAT traversal, and orchestrating server fleets.",
        "lv": 2,
        "children": [
          {
            "t": "Sessions, Rooms, and Lobbies",
            "d": "The lifecycle of a multiplayer game instance: creating, joining, leaving, and cleaning up rooms.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Room lifecycle: creation, player join/leave, teardown, and orphan cleanup",
              "Join codes vs matchmaking queues: when each fits",
              "Presence: who is online, in menu, or in game"
            ],
            "do": [
              "Build a room server that creates rooms and assigns join codes",
              "Handle abrupt disconnects: timeouts, heartbeats, and cleanup",
              "Implement rejoin: a dropped player returns to the same room and state"
            ],
            "tools": ["Nakama", "Node.js", "Go"],
            "res": [
              ["Nakama", "https://github.com/heroiclabs/nakama"]
            ],
            "tip": "Rooms leak. Every room needs an owner, a heartbeat, and a janitor that reaps rooms whose players all vanished, or your fleet fills with ghost games."
          },
          {
            "t": "Matchmaking and Skill Ratings",
            "d": "Fair matches: Elo and Glicko ratings, queues, parties, and the eternal wait-time vs match-quality trade-off.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Elo and Glicko-2: what ratings measure and how they update",
              "Matchmaking queues: expanding skill windows as wait time grows",
              "Parties, regions, and smurfing: the problems ratings alone do not solve"
            ],
            "do": [
              "Implement Glicko-2 updates for a 1v1 ladder",
              "Build a queue that widens its skill range the longer players wait",
              "Simulate 10k matches and check that ratings converge sensibly"
            ],
            "tools": ["Python", "PostgreSQL", "Redis"],
            "res": [
              ["The Glicko System", "https://www.glicko.net/glicko.html"]
            ],
            "tip": "Perfect skill matching with infinite queue times kills games faster than slightly unfair matches. Matchmaking is a product decision about wait times first, and math second."
          },
          {
            "t": "NAT Traversal and Relays",
            "d": "Most players sit behind NAT. STUN, TURN, and relay networks are how their packets actually reach each other.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "NAT types and why direct connections usually fail",
              "STUN for discovery, TURN for relaying when direct fails",
              "Managed options: Steam Datagram Relay and Epic Online Services"
            ],
            "do": [
              "Test direct UDP between two machines on different home networks and watch it fail",
              "Route the same traffic through a TURN-style relay and confirm it works",
              "Integrate Steam Datagram Relay or EOS P2P into a test project"
            ],
            "tools": ["Steamworks", "Epic Online Services", "coturn"],
            "res": [
              ["Steamworks", "https://partner.steamgames.com"],
              ["Epic Developer Portal", "https://dev.epicgames.com"]
            ],
            "tip": "Building your own NAT traversal from scratch is a rite of passage and a production mistake. Use Steam SDR or EOS for real games; they have solved edge cases you have not imagined yet."
          },
          {
            "t": "Dedicated vs Listen Servers",
            "d": "Player-hosted or studio-hosted: cost, cheat resistance, and player experience trade-offs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Listen servers: one player's machine hosts, cheap but host-advantaged and cheatable",
              "Dedicated servers: authoritative, fair, and a real infrastructure bill",
              "Hybrid paths: start with listen servers, migrate competitive modes to dedicated"
            ],
            "do": [
              "Run your game as a listen server and measure the host's latency advantage",
              "Deploy the same game on a cheap VPS as a dedicated server",
              "Compare cheat resistance: try to cheat against each setup"
            ],
            "tools": ["Docker", "Godot", "Unity"],
            "res": [
              ["Agones", "https://agones.dev"]
            ],
            "tip": "Host migration (passing the listen server to another player when the host quits) sounds simple and is notoriously hard. If sessions must survive host departure, dedicated servers are usually cheaper than building migration right."
          },
          {
            "t": "Orchestration: Agones and Kubernetes",
            "d": "Running a fleet: how game servers get allocated, scaled, and kept healthy with Agones on Kubernetes.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Why game servers do not fit plain web-service autoscaling",
              "Agones: GameServer CRDs, fleets, and allocation from matchmaking",
              "Lifecycle: from allocation to player connection to shutdown"
            ],
            "do": [
              "Deploy a local Kubernetes cluster (kind or k3d) with Agones installed",
              "Wrap your dedicated server in the Agones SDK with ready/allocate/shutdown calls",
              "Allocate a server from a test matchmaker and connect a client to it"
            ],
            "tools": ["Agones", "Kubernetes", "Docker", "Helm"],
            "res": [
              ["Agones", "https://agones.dev"]
            ],
            "tip": "Do not run Agones before you need it. For prototypes, a handful of static VPS instances with a process manager teaches you the server first; orchestration comes when manual deploys hurt."
          }
        ]
      },
      {
        "t": "Persistence and Live Services",
        "d": "Everything around the match: accounts, databases, inventories, leaderboards, and the telemetry that tells you what players do.",
        "lv": 2,
        "children": [
          {
            "t": "Accounts, Auth, and Sessions",
            "d": "Who is this player: platform auth, tokens, and session management done safely.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Platform auth: Steam, Epic, PlayStation, and Xbox ticket validation",
              "Token design: short-lived access tokens, refresh flows, revocation",
              "Session binding: tying a game connection to an authenticated identity"
            ],
            "do": [
              "Validate a Steam auth ticket on your server (never trust the client)",
              "Issue and verify JWT access tokens with proper expiry",
              "Implement logout that actually invalidates the session server-side"
            ],
            "tools": ["Steamworks", "JWT", "Redis"],
            "res": [
              ["Steamworks", "https://partner.steamgames.com"]
            ],
            "tip": "Validating auth tickets on the client is theater. The server must verify every ticket with the platform, every time, or account spoofing is trivial."
          },
          {
            "t": "Choosing the Game Database",
            "d": "Hot state in Redis, durable truth in Postgres: matching data to the right store.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Redis for hot state: sessions, presence, leaderboards, rate limits",
              "Postgres for durable truth: accounts, inventories, purchase history",
              "The split-brain trap: which store wins when they disagree"
            ],
            "do": [
              "Store live player sessions in Redis with TTLs",
              "Design a Postgres schema for accounts, characters, and inventories",
              "Write the save path: Redis as write-through cache, Postgres as source of truth"
            ],
            "tools": ["Redis", "PostgreSQL"],
            "res": [
              ["Redis", "https://redis.io"],
              ["PostgreSQL", "https://www.postgresql.org"]
            ],
            "tip": "Losing the database means losing player trust permanently. Backups, point-in-time recovery, and tested restores are not optional for anything players paid for."
          },
          {
            "t": "Inventory and Economy Systems",
            "d": "Item grants as transactions: idempotency and audit trails so dupes never happen.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Transactional grants: items move atomically or not at all",
              "Idempotency keys: safe retries for purchases and rewards",
              "Audit logs: every item movement recorded for support and fraud review"
            ],
            "do": [
              "Implement item grant inside a database transaction",
              "Add idempotency keys so double-clicking a purchase cannot double-grant",
              "Write an audit query that reconstructs one player's item history"
            ],
            "tools": ["PostgreSQL", "Redis"],
            "res": [
              ["PostgreSQL", "https://www.postgresql.org"]
            ],
            "tip": "Duplication exploits destroy game economies overnight and are almost always a missing transaction or a non-idempotent grant. Every item mutation gets both, no exceptions."
          },
          {
            "t": "Leaderboards and Stats Pipelines",
            "d": "Sorted sets, seasons, and anti-inflation: leaderboards players trust.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Redis sorted sets: the classic leaderboard data structure",
              "Seasons and resets: archiving history without losing it",
              "Cheat-resistant scoring: server-computed stats only"
            ],
            "do": [
              "Build a global leaderboard with ZADD/ZRANGE and paginated reads",
              "Implement a season rollover that archives and resets cleanly",
              "Add per-player stat aggregation from authoritative match results"
            ],
            "tools": ["Redis", "PostgreSQL"],
            "res": [
              ["Redis", "https://redis.io"]
            ],
            "tip": "Leaderboards fed by client-reported scores are fiction. Only server-verified results may write to rankings, or the top 100 will be cheaters within a week."
          },
          {
            "t": "Telemetry and Live Analytics",
            "d": "Events, funnels, and dashboards: knowing what players actually do instead of guessing.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Event design: small, structured, and consistent naming",
              "Funnels: where players drop off in onboarding and progression",
              "Privacy: what you collect, why, and what you must not"
            ],
            "do": [
              "Instrument match start, match end, and purchase events",
              "Build a dashboard showing daily active users and retention",
              "Find one surprising player behavior in your own data"
            ],
            "tools": ["OpenTelemetry", "Grafana", "PostHog"],
            "res": [
              ["OpenTelemetry", "https://opentelemetry.io"]
            ],
            "tip": "Collecting everything and analyzing nothing is the default failure. Define three questions you need answered before adding a single event, and delete events nobody reads."
          }
        ]
      },
      {
        "t": "Anti-Cheat and Security",
        "d": "Assume the client is hostile: threat models, server-side validation, detection, and DDoS defense.",
        "lv": 3,
        "children": [
          {
            "t": "Threat Modeling Your Game",
            "d": "Think like a cheater: packet editing, memory hacks, bots, and account theft, mapped to your game's value.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Cheat categories: information (wallhacks), automation (aimbots), manipulation (speedhacks)",
              "What attackers value: ranks, items, and real-money markets",
              "Threat modeling: assets, attackers, and which attacks are actually economical"
            ],
            "do": [
              "List your game's valuable assets and who would pay to cheat for them",
              "Rank attack types by likelihood times impact for your specific game",
              "Write a one-page threat model and pin it where the team sees it"
            ],
            "tools": ["Wireshark", "Cheat Engine (for study)"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "You cannot defend against everything, so defend what matters. A cosmetic-only indie game needs far less anti-cheat than a competitive game with cash prizes; spend proportionally."
          },
          {
            "t": "Server-Side Validation Patterns",
            "d": "Sanity-check every input: speed, range, cooldown, and line of sight, enforced where cheaters cannot reach.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Movement validation: maximum speed, teleport distance, and physics plausibility",
              "Action validation: cooldowns, ranges, resources, and line of sight on the server",
              "Failing safely: rejecting bad input without kicking legitimate players on lag spikes"
            ],
            "do": [
              "Add server-side speed checks that flag impossible movement",
              "Validate every attack: range, cooldown, ammo, and line of sight",
              "Test with simulated lag to make sure honest players are never punished"
            ],
            "tools": ["C#", "Go", "Rust"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Validation that is too strict bans innocent players on bad connections; too loose lets cheaters through. Log violations first, tune thresholds on real data, and only then start enforcing."
          },
          {
            "t": "Detecting Speedhacks, Teleports, and Aimbots",
            "d": "Statistical detection and replay analysis: catching cheaters from their behavior, not just their packets.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Behavioral signals: inhuman reaction times, impossible accuracy, movement anomalies",
              "Replay systems: storing matches for post-game analysis",
              "Ban waves vs instant bans: why studios ban in waves"
            ],
            "do": [
              "Log per-player accuracy and reaction-time distributions over 100 matches",
              "Flag statistical outliers and manually review the top cases",
              "Design a ban-wave process: detection, evidence, review, action"
            ],
            "tools": ["PostgreSQL", "Python", "Grafana"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Instant bans teach cheat developers exactly what got detected. Ban waves obscure the detection signal and let you catch far more cheaters per detection method."
          },
          {
            "t": "Client Hardening Basics",
            "d": "Obfuscation, integrity checks, and why client-side defenses are speed bumps, not walls.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What client hardening can do: raise the cost of casual cheating",
              "What it cannot do: stop a determined reverse engineer",
              "Kernel-level anti-cheat: power, controversy, and player trust costs"
            ],
            "do": [
              "Add basic integrity checks: detect common debugger attachment",
              "Obfuscate one sensitive client routine and time how long it takes to reverse",
              "Document which threats your client defenses actually stop"
            ],
            "tools": ["Obfuscators", "Packers"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Every dollar spent on client hardening is a dollar not spent on server validation, and server validation is the defense that actually works. Harden the client last, never first.",
            "tag": "opt"
          },
          {
            "t": "DDoS Protection for Game Ports",
            "d": "UDP amplification, rate limiting, and scrubbing: keeping the game online when someone wants it down.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why game servers are juicy DDoS targets: UDP, always-on, latency-sensitive",
              "Mitigation layers: rate limiting, anycast, and scrubbing providers",
              "Designing for attack: graceful degradation instead of total collapse"
            ],
            "do": [
              "Add per-IP rate limiting to your game server's packet handler",
              "Simulate a UDP flood against a test server and observe the failure mode",
              "Write a runbook: what you do in the first 15 minutes of an attack"
            ],
            "tools": ["iptables", "Cloudflare", "fail2ban"],
            "res": [
              ["Cloudflare", "https://www.cloudflare.com"]
            ],
            "tip": "Hiding your origin server IP is half the battle. One leaked backend IP in a log, error message, or DNS record bypasses every layer of protection you bought."
          }
        ]
      },
      {
        "t": "Scaling to Production",
        "d": "From one server to a world: interest management, sharding, hostile-network testing, and operating the fleet.",
        "lv": 3,
        "children": [
          {
            "t": "Interest Management and Spatial Partitioning",
            "d": "Nobody needs the whole world: send each client only what their character can perceive.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Area of interest (AOI): relevance by distance, visibility, and gameplay",
              "Spatial partitioning: grids, quadtrees, and choosing cell sizes",
              "Prioritization: what gets sent first when bandwidth is tight"
            ],
            "do": [
              "Implement a grid-based AOI so players only receive nearby entities",
              "Measure bandwidth per player before and after interest management",
              "Add priority tiers: nearby players first, distant ambience last"
            ],
            "tools": ["C++", "Go", "Rust"],
            "res": [
              ["Gaffer on Games", "https://gafferongames.com/"]
            ],
            "tip": "Broadcasting everything to everyone is how prototypes work and how launches die. Interest management is not an optimization you add later; it is a core system."
          },
          {
            "t": "Sharding Worlds: Zones and Instances",
            "d": "Splitting one world across many servers: zones, instances, and the seams between them.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Sharding strategies: geographic zones, instanced dungeons, seamless handoff",
              "Cross-shard problems: chat, friends, auctions, and guilds that span shards",
              "The single-shard illusion: what it costs to keep everyone in one world"
            ],
            "do": [
              "Split a test world into two zones with a handoff protocol between servers",
              "Move a player across the seam and verify inventory and state survive",
              "Design the cross-shard service for one global feature (chat or auction house)"
            ],
            "tools": ["Go", "C++", "Redis"],
            "res": [
              ["Agones", "https://agones.dev"]
            ],
            "tip": "The seams are where sharding breaks: dupe exploits, lost items, and stuck players all live at zone boundaries. Test crossings obsessively, including mid-crossing disconnects."
          },
          {
            "t": "Load Testing with Hostile Networks",
            "d": "Bots, simulated lag, and chaos: proving the server survives launch day before launch day.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Bot clients: scripted players that hammer the server at full rate",
              "Network simulation: latency, jitter, and loss with tc/netem or toxiproxy",
              "Soak testing: running at load for hours to find slow leaks"
            ],
            "do": [
              "Write bot clients that join, move, and fight at full tick rate",
              "Ramp to 10x expected launch load and find the breaking point",
              "Run a 12-hour soak test and hunt memory growth in the profiler"
            ],
            "tools": ["toxiproxy", "tc netem", "k6", "Tracy"],
            "res": [
              ["Toxiproxy", "https://github.com/Shopify/toxiproxy"]
            ],
            "tip": "Netcode that has only ever met localhost is untested netcode. Simulate 80ms, 150ms, and 250ms with loss from the first week, or launch day will be the first test."
          },
          {
            "t": "Observability: Metrics, Logs, Traces",
            "d": "RED metrics per tick loop, structured logs, and dashboards: seeing inside a running fleet.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Metrics: tick time, player counts, packet loss, and queue depths",
              "Structured logging: searchable, correlated, and sampled under load",
              "Dashboards and alerts: what pages you at 3am vs what waits for morning"
            ],
            "do": [
              "Expose Prometheus metrics: tick duration histogram and connected players",
              "Build a Grafana dashboard with one row per server health signal",
              "Set alerts for tick overruns and player-count anomalies"
            ],
            "tools": ["Prometheus", "Grafana", "OpenTelemetry"],
            "res": [
              ["Prometheus", "https://prometheus.io"],
              ["Grafana", "https://grafana.com"]
            ],
            "tip": "Logging every packet at full rate will fill disks and hide real problems. Sample aggressively, aggregate ruthlessly, and keep full-fidelity logging behind a per-player debug flag."
          },
          {
            "t": "Incident Response and Live Patching",
            "d": "Runbooks, feature flags, and rolling deploys: fixing production without kicking every player.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Runbooks: the exact steps for the incidents you can predict",
              "Rolling deploys and draining: moving players off old servers gracefully",
              "Feature flags and kill switches for risky gameplay changes"
            ],
            "do": [
              "Write a runbook for your top three predicted incidents",
              "Practice a rolling deploy: drain, update, and refill one server",
              "Add a kill switch for one gameplay feature and test flipping it live"
            ],
            "tools": ["Kubernetes", "Agones", "Grafana"],
            "res": [
              ["Agones", "https://agones.dev"]
            ],
            "tip": "The incident is not the time to improvise. Teams with practiced runbooks recover in minutes; teams without them argue about what to do while players leave."
          }
        ]
      }
    ]
  }
});
