/* Atlas roadmap data: Docker (docker) */
ROADMAPS.push({
  "id": "docker",
  "title": "Docker",
  "icon": "🐳",
  "color": "#2496ed",
  "desc": "Master containers end to end: Dockerfiles, Compose stacks, networking, registries, and production-grade image security.",
  "kind": "skill",
  "root": {
    "t": "Docker from Zero to Production",
    "d": "The complete path to building, shipping, and securing containerized applications.",
    "children": [
      {
        "t": "Containers and the Docker Platform",
        "d": "What containers really are and the Linux machinery underneath them.",
        "lv": 1,
        "children": [
          {
            "t": "What Containers Are",
            "d": "Packaging your app and everything it needs into one portable unit.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "A container is a standard package: code, runtime, libraries, and settings in one immutable artifact",
              "It solves works-on-my-machine by making the environment travel with the code",
              "Containers share the host kernel, which is why they start in milliseconds"
            ],
            "do": [
              "Run hello-world and an nginx container, then explain what actually executed",
              "Start the same image on two different machines and compare behavior",
              "List three problems containers solve that a zip file never could"
            ],
            "tools": ["docker"],
            "res": [["Docker docs", "https://docs.docker.com"]],
            "tip": "A container is a process with a costume, not a tiny virtual machine. Thinking VM leads to bad habits like SSH-ing into containers."
          },
          {
            "t": "Bare Metal vs VMs vs Containers",
            "d": "Three ways to run software and the tradeoffs that matter.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Bare metal: full performance, zero isolation between apps",
              "VMs: strong isolation via hypervisor, each carrying a full guest OS",
              "Containers: OS-level isolation with near-zero overhead, sharing the host kernel"
            ],
            "do": [
              "Boot a VM and a container running the same app; compare startup time and memory footprint",
              "Explain why containers cannot run a different kernel than the host",
              "Decide which of the three fits a legacy monolith vs a microservice fleet"
            ],
            "tools": ["docker"],
            "res": [["Docker overview", "https://docs.docker.com/get-started"]],
            "tip": "Containers trade isolation strength for density and speed. That tradeoff is the entire reason Kubernetes exists."
          },
          {
            "t": "OCI: Images, Runtimes, Registries",
            "d": "The open standards that stop Docker from being a walled garden.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "OCI defines the image format, runtime spec, and distribution spec everyone implements",
              "An image is a stack of content-addressed layers plus a JSON manifest",
              "Any OCI-compliant image runs on any compliant runtime: Docker, Podman, containerd, Kubernetes"
            ],
            "do": [
              "Pull an image with Docker, then inspect its manifest and layer digests",
              "Run the same image with a different OCI runtime and confirm it just works",
              "Explain why an image built for arm64 fails on an amd64 host"
            ],
            "tools": ["docker", "podman"],
            "res": [["Open Container Initiative", "https://opencontainers.org"]],
            "tip": "Docker popularized containers, but OCI owns the standards. Learn the standard, not just the brand."
          },
          {
            "t": "Under the Hood: Namespaces, cgroups, Union FS",
            "d": "The three Linux primitives that make containers possible.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Namespaces isolate what a process sees: PIDs, network, mounts, hostnames, users",
              "cgroups limit what a process uses: CPU shares, memory, block I/O",
              "Union filesystems layer image contents so containers start from a shared read-only base"
            ],
            "do": [
              "Run a container and use lsns to see its isolated namespaces from the host",
              "Set a memory limit and watch the OOM killer fire inside the container",
              "Inspect an image's layers and map each Dockerfile instruction to a layer"
            ],
            "tools": ["docker", "runc"],
            "res": [["Docker architecture", "https://docs.docker.com/get-started/docker-overview"]],
            "tip": "You do not need to master kernel internals, but knowing which primitive enforces what turns weird errors into obvious ones."
          },
          {
            "t": "Installing Docker",
            "d": "Docker Engine on Linux and Docker Desktop where you need it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Docker Engine is native on Linux; Desktop adds a VM plus GUI on Mac and Windows",
              "The daemon does the work; the CLI is just a client talking to it over a socket",
              "Docker Desktop licensing matters for larger companies; Engine on Linux is free"
            ],
            "do": [
              "Install Docker Engine on a Linux VM following the official repository steps",
              "Run docker context ls and understand where your commands actually execute",
              "Verify the install with a version check and a hello-world run"
            ],
            "tools": ["docker"],
            "res": [["Install Docker Engine", "https://docs.docker.com/engine/install"]],
            "tip": "Add your user to the docker group deliberately, not blindly. That socket is effectively root access."
          },
          {
            "t": "Docker CLI Tour",
            "d": "The commands you will use daily: run, ps, logs, exec, and friends.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "docker run, ps, logs, exec, stop, rm, and images cover most interactive work",
              "Every object (container, image, network, volume) has inspect for the full truth",
              "docker system prune reclaims disk, but understand what it deletes first"
            ],
            "do": [
              "Run an interactive Ubuntu container, install a package inside, and observe it vanish on removal",
              "Tail a web server's logs with --follow and exec into it to explore",
              "Use docker inspect to find a container's IP, mounts, and environment"
            ],
            "tools": ["docker"],
            "res": [["Docker CLI reference", "https://docs.docker.com/reference/cli/docker"]],
            "tip": "Learn docker inspect early. Half of container debugging is reading the actual configuration instead of guessing."
          }
        ]
      },
      {
        "t": "Building Images",
        "d": "Dockerfiles, layer caching, and crafting small, fast, reproducible images.",
        "lv": 1,
        "children": [
          {
            "t": "Pulling and Running Images",
            "d": "Getting images from registries and running them correctly the first time.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "docker pull fetches layers; tags are mutable labels, digests are immutable identities",
              "docker run flags that matter: -d, -p, -e, -v, --name, --rm, --restart",
              "latest is a moving target, not a version; pin real tags or digests"
            ],
            "do": [
              "Run postgres with a password, a published port, and a named volume in one command",
              "Pull the same image by tag and by digest; compare what each guarantees",
              "Break something with :latest, then fix it by pinning a digest"
            ],
            "tools": ["docker"],
            "res": [["docker run reference", "https://docs.docker.com/reference/cli/docker/container/run"]],
            "tip": "The --rm flag is your friend for experiments. Test containers should never outlive the test."
          },
          {
            "t": "Writing a Dockerfile",
            "d": "FROM, RUN, COPY, CMD: the instructions that build your image.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Each instruction creates a layer; order them from least to most frequently changing",
              "COPY your dependency files first and install before copying source code",
              "CMD vs ENTRYPOINT: default command vs the fixed executable the container always runs"
            ],
            "do": [
              "Containerize a small web app with a hand-written Dockerfile",
              "Reorder instructions badly, rebuild twice, and feel the cache difference",
              "Experiment with ENTRYPOINT plus CMD to build a container that behaves like a binary"
            ],
            "tools": ["docker"],
            "res": [["Dockerfile reference", "https://docs.docker.com/reference/dockerfile"]],
            "tip": "One concern per container, one process as PID 1. A Dockerfile that installs three services is a VM in disguise."
          },
          {
            "t": "Build Context and .dockerignore",
            "d": "What gets sent to the daemon, and keeping secrets and junk out of it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The build context is everything in the directory you build from, sent to the daemon",
              ".dockerignore excludes node_modules, .git, and secrets from the context",
              "A bloated context slows every build and can leak credentials into layer history"
            ],
            "do": [
              "Build with a huge context, time it, then add .dockerignore and time it again",
              "Accidentally COPY a .env file, then prove it is baked into the image history",
              "Use a secret mount (RUN --mount=type=secret) instead of COPY for build-time credentials"
            ],
            "tools": ["docker"],
            "res": [["Build context", "https://docs.docker.com/build/concepts/context"]],
            "tip": "If your build is slow, suspect the context first. People optimize Dockerfiles for hours while shipping 2 GB of junk to the daemon."
          },
          {
            "t": "Layer Caching",
            "d": "Rebuilds in seconds: how BuildKit decides what to reuse.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Layers cache by content hash; any changed instruction invalidates everything below it",
              "Cache mounts (RUN --mount=type=cache) persist package caches across builds without bloating the image",
              "COPY --link decouples layer creation from base image updates"
            ],
            "do": [
              "Add a cache mount for your package manager and measure a rebuild with warm cache",
              "Use BUILDKIT_PROGRESS=plain to read exactly which steps cached and which ran",
              "Split a slow install step so code changes do not invalidate dependency layers"
            ],
            "tools": ["docker", "buildkit"],
            "res": [["Build cache", "https://docs.docker.com/build/cache"]],
            "tip": "Cache invalidation in Docker is brutally literal: one changed byte in an early layer rebuilds the world below it."
          },
          {
            "t": "Multi-Stage Builds",
            "d": "Build with the full toolchain, ship only the artifact.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Named stages (FROM ... AS builder) let you compile in one image and copy results into a slim runtime",
              "The final image contains only what you COPY from earlier stages, nothing else",
              "This is how a 1 GB build environment becomes a 50 MB production image"
            ],
            "do": [
              "Convert a single-stage Node or Go Dockerfile to multi-stage and compare image sizes",
              "Use --target to build and debug just the builder stage",
              "Name stages semantically (deps, build, test, runtime) and document the pipeline"
            ],
            "tools": ["docker"],
            "res": [["Multi-stage builds", "https://docs.docker.com/build/building/multi-stage"]],
            "tip": "Multi-stage builds are the single highest-ROI Dockerfile technique. If your image ships a compiler, you are doing it wrong."
          },
          {
            "t": "Multi-Architecture Builds with buildx",
            "d": "One image that runs on amd64, arm64, and everything in between.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "buildx builds for multiple platforms and publishes a manifest list pointing at per-arch images",
              "QEMU emulation builds other architectures slowly; native builders are fast but need setup",
              "TARGETARCH lets Dockerfiles install the right binary per platform"
            ],
            "do": [
              "Build and push a multi-arch image, then pull it on (or emulate) a different architecture",
              "Use TARGETARCH in the Dockerfile to fetch the correct release binary per platform",
              "Inspect the manifest list and verify each platform entry"
            ],
            "tools": ["docker", "buildx"],
            "res": [["Buildx", "https://docs.docker.com/reference/cli/docker/buildx"]],
            "tip": "Test the non-native arch, not just build it. Emulation hides real bugs like hardcoded x86 assembly."
          },
          {
            "t": "Debugging Builds",
            "d": "When the build fails: reading BuildKit output and inspecting broken layers.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "BUILDKIT_PROGRESS=plain shows the full log; the error is usually above where you first look",
              "docker build --progress=plain plus targeted --target stages isolate the failing step",
              "dive shows exactly which files each layer added, changed, or wasted"
            ],
            "do": [
              "Break a build in five different ways and diagnose each from plain-text output",
              "Inspect a failed intermediate stage by building --target up to it and shelling in",
              "Run dive on your image and find the biggest wasted-space layer"
            ],
            "tools": ["docker", "dive"],
            "res": [["dive", "https://github.com/wagoodman/dive"]],
            "tip": "Read the build log from the failing step upward. The first error is the real one; everything after is collateral."
          }
        ]
      },
      {
        "t": "Storage and Networking",
        "d": "Keeping data alive and letting containers talk to each other.",
        "lv": 1,
        "children": [
          {
            "t": "The Ephemeral Filesystem",
            "d": "Why container writes disappear, and when that is exactly what you want.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Writes go to a thin writable layer on top of the image; deleting the container deletes the writes",
              "Ephemerality is a feature: it makes containers replaceable and upgrades trivial",
              "Anything worth keeping must live in a volume, a bind mount, or an external store"
            ],
            "do": [
              "Write a file inside a container, remove the container, and confirm the file is gone",
              "Explain which workloads are fine with ephemeral storage and which are not",
              "Measure the performance cost of heavy writes to the overlay layer"
            ],
            "tools": ["docker"],
            "res": [["Storage overview", "https://docs.docker.com/engine/storage"]],
            "tip": "Databases in containers without volumes are a rite of passage. Everyone does it once, loses data once, and never again."
          },
          {
            "t": "Volumes",
            "d": "Docker-managed persistent storage that outlives any single container.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Named volumes are created and managed by Docker, stored outside the container lifecycle",
              "Volumes survive container replacement, making them the home for database data",
              "Volume drivers extend storage to NFS, cloud disks, and more"
            ],
            "do": [
              "Run postgres with a named volume, write data, recreate the container, and verify the data",
              "Back up a volume by running a throwaway container that tars it to the host",
              "Inspect where Docker actually stores the volume on the host filesystem"
            ],
            "tools": ["docker"],
            "res": [["Volumes", "https://docs.docker.com/engine/storage/volumes"]],
            "tip": "Name your volumes. Anonymous volumes are how you end up with forty mystery disks named by hash."
          },
          {
            "t": "Bind Mounts",
            "d": "Mounting host paths directly: the developer's live-reload superpower.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Bind mounts map a host directory into the container, with live two-way visibility",
              "Perfect for development (edit code on host, run in container), risky in production",
              "Permissions and SELinux labels are the classic bind-mount headaches"
            ],
            "do": [
              "Bind-mount your source code into a dev container and hot-reload on save",
              "Hit a permission-denied error and fix it by aligning UIDs or adjusting the mount",
              "Compare bind mounts vs volumes for a local database and pick deliberately"
            ],
            "tools": ["docker"],
            "res": [["Bind mounts", "https://docs.docker.com/engine/storage/bind-mounts"]],
            "tip": "Bind mounts tie the container to one host. That is fine on your laptop and a deployment bug in production."
          },
          {
            "t": "Bridge Networking and Port Publishing",
            "d": "How containers get IPs and how the outside world reaches them.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The default bridge network NATs containers behind the host; -p publishes ports outward",
              "Publishing 0.0.0.0:8080 vs 127.0.0.1:8080 is a security decision, not a detail",
              "Host networking removes isolation for performance; use it only when you mean it"
            ],
            "do": [
              "Publish a port on localhost only and prove it is unreachable from another machine",
              "Inspect the iptables rules Docker creates for a published port",
              "Run a container with --network host and observe it sharing the host's interfaces"
            ],
            "tools": ["docker"],
            "res": [["Network overview", "https://docs.docker.com/engine/network"]],
            "tip": "Publishing a database port to 0.0.0.0 on a cloud VM is how credentials end up in botnet scans. Bind to localhost."
          },
          {
            "t": "User-Defined Networks",
            "d": "Custom networks with built-in DNS so containers find each other by name.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Containers on the same user-defined network resolve each other by container name",
              "Isolated networks segment traffic: frontend network, backend network, no cross-talk",
              "The default bridge network lacks DNS; always create your own"
            ],
            "do": [
              "Create a network, attach a web app and database, and connect by name",
              "Put a second app on a separate network and prove it cannot reach the database",
              "Attach one container to two networks as a controlled bridge"
            ],
            "tools": ["docker"],
            "res": [["Bridge networks", "https://docs.docker.com/engine/network/drivers/bridge"]],
            "tip": "If containers cannot resolve each other, you are probably on the default bridge. Create a named network."
          },
          {
            "t": "Container DNS and Service Discovery",
            "d": "How name resolution works inside Docker networks.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Docker's embedded DNS server (at 127.0.0.11) resolves container names on custom networks",
              "Network aliases give one container multiple names, including per-network identities",
              "External DNS falls back to the host's resolvers for internet names"
            ],
            "do": [
              "nslookup a container name from another container and trace which server answered",
              "Add a network alias and reach the same container under two names",
              "Break DNS by misconfiguring the daemon's dns setting, then fix it"
            ],
            "tools": ["docker"],
            "res": [["Embedded DNS", "https://docs.docker.com/engine/network/drivers/bridge"]],
            "tip": "Hardcoding container IPs in config is the Docker equivalent of hardcoding pod IPs in Kubernetes. Use names."
          }
        ]
      },
      {
        "t": "Docker Compose",
        "d": "Multi-container applications declared in one file and run with one command.",
        "lv": 2,
        "children": [
          {
            "t": "Your First Compose Stack",
            "d": "From scattered docker run commands to one compose.yaml that runs everything.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Compose v2 is a Docker CLI plugin (docker compose); the old docker-compose is end of life",
              "One file declares services, networks, and volumes; up builds the whole stack",
              "The top-level version key is obsolete and ignored in modern Compose"
            ],
            "do": [
              "Write a compose.yaml for a web app plus database, then bring it up with docker compose up",
              "Tear it down with down -v and observe what survives without the -v flag",
              "Convert three long docker run commands from your history into one Compose file"
            ],
            "tools": ["docker", "compose"],
            "res": [["Compose docs", "https://docs.docker.com/compose"]],
            "tip": "Commit the compose file, not your shell history. The file is the documentation of how the app runs."
          },
          {
            "t": "Compose File Anatomy",
            "d": "Services, depends_on, healthchecks, and how startup ordering really works.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "depends_on orders startup but does not wait for readiness; healthchecks plus condition: service_healthy do",
              "Restart policies (unless-stopped, on-failure) decide what happens after a crash",
              "Service names become DNS hostnames automatically on the Compose network"
            ],
            "do": [
              "Add a healthcheck to your database and gate the app on service_healthy",
              "Remove the gate and watch the app crash-loop against a not-ready database",
              "Set restart policies and kill a service to see who comes back"
            ],
            "tools": ["docker", "compose"],
            "res": [["Compose file reference", "https://docs.docker.com/reference/compose-file"]],
            "tip": "depends_on without health conditions is ordering theater. Your app still needs retry logic for the database."
          },
          {
            "t": "Builds Inside Compose",
            "d": "Building images as part of the stack with build contexts and args.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The build section points at a context and Dockerfile per service",
              "Build args inject values at build time; they are not runtime config",
              "docker compose build --parallel speeds up multi-service builds"
            ],
            "do": [
              "Add build sections to two services sharing one repository",
              "Pass a build arg for the app version and bake it into the image label",
              "Rebuild only one service with docker compose build web"
            ],
            "tools": ["docker", "compose", "buildx"],
            "res": [["Compose build", "https://docs.docker.com/compose/how-tos/build"]],
            "tip": "Build args are visible in image history. Never pass secrets as build args; use secret mounts instead."
          },
          {
            "t": "Environment Config and Overrides",
            "d": "One base file, per-environment overrides: dev, staging, prod.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Multiple -f files merge: later files override earlier ones",
              "env_file and environment separate secrets from config; .env fills variable interpolation",
              "Profiles select optional services (debug tools, seeders) without editing the file"
            ],
            "do": [
              "Split a stack into compose.yaml plus compose.prod.yaml with different ports and replicas",
              "Use profiles to add an adminer service only in development",
              "Move all secrets out of the file into an env_file that is gitignored"
            ],
            "tools": ["docker", "compose"],
            "res": [["Multiple Compose files", "https://docs.docker.com/compose/how-tos/multiple-compose-files"]],
            "tip": "The override pattern only works if the base file stays environment-neutral. The moment prod hacks leak into base, the pattern dies."
          },
          {
            "t": "Compose Watch Mode",
            "d": "Live development: rebuild or sync on file change without restarting everything.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "watch mode syncs changed files into running containers or rebuilds on Dockerfile changes",
              "Sync is instant for interpreted languages; rebuild is needed for compiled ones",
              "docker compose watch replaces a whole class of hand-rolled nodemon-in-Docker setups"
            ],
            "do": [
              "Add a develop.watch section with sync paths for your app's source",
              "Edit a file and watch the change land without a container restart",
              "Change a dependency file and confirm it triggers a rebuild instead"
            ],
            "tools": ["docker", "compose"],
            "res": [["Compose watch", "https://docs.docker.com/compose/how-tos/file-watch"]],
            "tip": "Watch mode is for development only. If it appears in your production compose file, something has gone wrong."
          }
        ]
      },
      {
        "t": "Registries and Delivery",
        "d": "Storing, versioning, and shipping images through CI pipelines.",
        "lv": 2,
        "children": [
          {
            "t": "Registries: Docker Hub, GHCR, ECR, ACR",
            "d": "Where images live and how to choose between public and private registries.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Docker Hub is the default public registry; GHCR, ECR, GCR, ACR serve private and cloud-native needs",
              "Authentication uses docker login with tokens, never your main password",
              "Retention policies and image cleanup keep registry bills and clutter under control"
            ],
            "do": [
              "Push an image to Docker Hub and to GHCR; compare the workflows",
              "Log in with a scoped access token and store it in your credential helper",
              "Set a retention rule that keeps only the last 20 tagged images"
            ],
            "tools": ["docker"],
            "res": [["Docker Hub", "https://hub.docker.com"]],
            "tip": "Docker Hub rate limits anonymous pulls. In CI, always authenticate, even for public images."
          },
          {
            "t": "Tagging and Versioning Strategy",
            "d": "Tags that tell the truth about what is inside the image.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Semantic tags (1.4.2), moving tags (1.4, 1), and git SHAs each answer different questions",
              "Immutable tags per build plus a moving tag for the release line is the standard pattern",
              "Digests are the ultimate pin: content-addressed and unforgeable"
            ],
            "do": [
              "Tag one build three ways: git SHA, semver, and a moving minor tag",
              "Write a tagging policy for your team covering builds, releases, and hotfixes",
              "Deploy by digest in one environment and by tag in another; compare rollback stories"
            ],
            "tools": ["docker"],
            "res": [["Tagging best practices", "https://docs.docker.com/build/metadata"]],
            "tip": "latest in production is a pager waiting to happen. Somebody's debug build becomes everybody's outage."
          },
          {
            "t": "CI Pipelines with Docker",
            "d": "Build, test, scan, and push images automatically on every commit.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Layer caching in CI (registry cache or GitHub Actions cache) is what makes Docker builds fast",
              "Build once, test the built image, promote the same digest through environments",
              "Pin your CI's Docker and Buildx versions; floating tooling breaks builds mysteriously"
            ],
            "do": [
              "Write a GitHub Actions workflow that builds, scans, and pushes on every main commit",
              "Enable registry layer caching and measure the before/after build times",
              "Promote one digest from staging to prod without rebuilding"
            ],
            "tools": ["docker", "buildx", "github-actions"],
            "res": [["Docker in GitHub Actions", "https://docs.docker.com/build/ci/github-actions"]],
            "tip": "Rebuilding per environment defeats the purpose of images. The artifact that passed tests is the artifact you ship."
          },
          {
            "t": "docker init and Scaffolding",
            "d": "Generating Dockerfiles and Compose files from project templates.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "docker init interviews you about your stack and generates idiomatic files",
              "Generated files are starting points to learn from and customize, not sacred text",
              "Templates cover the common stacks: Node, Python, Go, Java, Rust, PHP, .NET"
            ],
            "do": [
              "Run docker init on a sample project and read every line it generated",
              "Improve the generated Dockerfile with a multi-stage build",
              "Decide what to keep, change, and delete, and write down why"
            ],
            "tools": ["docker"],
            "res": [["docker init", "https://docs.docker.com/reference/cli/docker/init"]],
            "tip": "Use docker init to learn the shape of a good setup, then outgrow it. Copy-paste without reading teaches nothing.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Container Security",
        "d": "Hardening images and runtimes: the practices that stop real attacks.",
        "lv": 2,
        "children": [
          {
            "t": "Running as Non-Root",
            "d": "The highest-leverage hardening step: containers should not run as root.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "USER in the Dockerfile drops privileges; root inside the container is still dangerous",
              "User namespaces map container root to an unprivileged host UID for defense in depth",
              "File ownership and port binding (no sub-1024 ports) are the practical friction points"
            ],
            "do": [
              "Add a non-root USER to your Dockerfile and fix the permission errors that follow",
              "Enable user namespace remapping on the daemon and observe the UID mapping",
              "Audit your images and list every one still running as root"
            ],
            "tools": ["docker"],
            "res": [["Isolate containers", "https://docs.docker.com/engine/security"]],
            "tip": "Running as root inside the container plus a kernel escape equals host root. Non-root users turn escapes into dead ends."
          },
          {
            "t": "Capabilities, seccomp, and AppArmor",
            "d": "Taking away the Linux powers your container never needed.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Linux capabilities split root's powers; Docker grants a default set you can shrink with --cap-drop",
              "seccomp filters which syscalls a container may invoke; the default profile blocks the exotic ones",
              "Dropping ALL capabilities and adding back only NET_BIND_SERVICE is the gold standard"
            ],
            "do": [
              "Run with --cap-drop=ALL and add back only what your app needs until it works",
              "Load a custom seccomp profile that blocks a syscall your app never uses",
              "Compare the default capability set against what a static binary actually requires"
            ],
            "tools": ["docker"],
            "res": [["Runtime privilege", "https://docs.docker.com/engine/security#linux-kernel-capabilities"]],
            "tip": "Most apps need zero special capabilities. If yours needs SYS_ADMIN, that is a design conversation, not a flag."
          },
          {
            "t": "Read-Only Filesystems",
            "d": "Immutable containers: nothing writes, nothing persists, nothing gets tampered with.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "--read-only makes the root filesystem immutable; tmpfs mounts provide scratch space",
              "Read-only containers cannot be modified by exploits that drop files",
              "Health checks and apps that write logs to disk need explicit tmpfs or volume mounts"
            ],
            "do": [
              "Run your app with --read-only and add tmpfs mounts until it works",
              "Simulate an attack that tries to write a webshell and watch it fail",
              "Add read_only: true to a Compose service and document the required mounts"
            ],
            "tools": ["docker", "compose"],
            "res": [["Read-only containers", "https://docs.docker.com/engine/security"]],
            "tip": "Combine read-only filesystems with no-new-privileges. Each control is good; together they close real exploit chains."
          },
          {
            "t": "Image Scanning with Scout and Trivy",
            "d": "Finding known vulnerabilities in your images before attackers do.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Scanners match installed packages against CVE databases and report severity",
              "Docker Scout integrates with the Docker workflow; Trivy is the open-source workhorse",
              "Base image choice dominates your CVE count; minimal bases mean minimal findings"
            ],
            "do": [
              "Scan a full-fat base image and a slim one; compare CVE counts side by side",
              "Add scanning as a CI gate that fails on critical vulnerabilities",
              "Triage one real finding: is it reachable, is there a fixed version, what is the upgrade cost"
            ],
            "tools": ["docker-scout", "trivy"],
            "res": [["Trivy", "https://github.com/aquasecurity/trivy"]],
            "tip": "A scanner that fails the build on every CVE trains developers to ignore it. Gate on critical and reachable, triage the rest."
          },
          {
            "t": "Minimal Base Images",
            "d": "Distroless, Alpine, and Docker Hardened Images: less surface, fewer CVEs.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Distroless images contain only your app and its runtime: no shell, no package manager",
              "Alpine is tiny but uses musl libc, which occasionally breaks native dependencies",
              "Docker Hardened Images are minimal, non-root, SBOM-attested bases maintained by Docker"
            ],
            "do": [
              "Rebuild an app on distroless and handle the missing shell in your debugging workflow",
              "Compare debian-slim, alpine, and distroless on size, CVE count, and compatibility",
              "Debug a distroless container using docker debug or an ephemeral debug image"
            ],
            "tools": ["docker"],
            "res": [["Docker Hardened Images", "https://docs.docker.com"]],
            "tip": "No shell in the image means attackers get no shell either. Debug with ephemeral tooling instead of shipping busybox forever."
          },
          {
            "t": "Secrets Handling",
            "d": "Keeping passwords and tokens out of images, layers, and Compose files.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "ENV bakes values into layers forever; anyone with the image can read them",
              "Docker secrets (Swarm) and Compose secrets mount values as files at runtime",
              "Build-time secrets use --mount=type=secret so they never persist in layers"
            ],
            "do": [
              "Prove an ENV secret is recoverable from image history",
              "Switch a Compose stack to file-based secrets and verify the app still starts",
              "Use a build secret for a private package registry during docker build"
            ],
            "tools": ["docker", "compose"],
            "res": [["Secrets in Compose", "https://docs.docker.com/compose/how-tos/secrets"]],
            "tip": "If a secret ever lands in a layer, rotate it. Deleting the layer from the Dockerfile does not delete it from history."
          },
          {
            "t": "Signing and SBOMs",
            "d": "Proving where your image came from and exactly what is inside it.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "cosign signs images with keys or keyless OIDC identity; attestations bind SBOMs to images",
              "An SBOM lists every package in the image, which is what scanners and auditors consume",
              "Verification policies reject unsigned or unattested images before they run"
            ],
            "do": [
              "Generate an SBOM for your image and read what it reveals",
              "Sign the image with cosign keyless mode and verify the signature",
              "Write a policy that only allows images signed by your CI identity"
            ],
            "tools": ["cosign", "syft", "docker"],
            "res": [["Sigstore cosign", "https://github.com/sigstore/cosign"]],
            "tip": "Signing without verification is theater. The policy that rejects unsigned images is the actual security control."
          }
        ]
      },
      {
        "t": "Production Craft",
        "d": "Operating containers reliably: health, logs, resources, and what comes after Docker.",
        "lv": 3,
        "children": [
          {
            "t": "Healthchecks and Restart Policies",
            "d": "Detecting sick containers and bringing them back automatically.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "HEALTHCHECK runs a command inside the container; unhealthy status is visible, not automatic",
              "Restart policies (unless-stopped, on-failure) are what actually restart crashed containers",
              "Orchestrators use health status for routing; plain Docker mostly uses it for visibility"
            ],
            "do": [
              "Add a HEALTHCHECK to your Dockerfile and watch status flip with docker ps",
              "Kill the main process and confirm the restart policy brings it back",
              "Distinguish a failing healthcheck from a crashed process in your runbook"
            ],
            "tools": ["docker"],
            "res": [["HEALTHCHECK", "https://docs.docker.com/reference/dockerfile#healthcheck"]],
            "tip": "A healthcheck that always passes is worse than none: it teaches everyone to ignore the health column."
          },
          {
            "t": "Logging Drivers and Rotation",
            "d": "Collecting container logs without filling the disk at 3 AM.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The json-file driver is default; max-size and max-file rotate logs before disks fill",
              "Logging drivers (syslog, journald, fluentd, cloud) ship logs to central systems",
              "Log to stdout/stderr in the app; let the platform handle collection"
            ],
            "do": [
              "Configure log rotation in daemon.json and prove a chatty container no longer fills the disk",
              "Switch a service to the syslog driver and read its logs there",
              "Set up a Compose stack that ships logs to a local Loki or ELK instance"
            ],
            "tools": ["docker"],
            "res": [["Logging drivers", "https://docs.docker.com/engine/logging"]],
            "tip": "Unbounded json-file logs are the most common cause of mysterious Docker host disk-full incidents."
          },
          {
            "t": "Resource Limits",
            "d": "CPU and memory constraints that keep one container from starving the host.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Memory limits trigger OOM kills; CPU limits throttle, which looks like slowness",
              "--memory-reservation sets a soft limit the kernel respects under pressure",
              "cgroup v2 is the modern accounting layer; know which version your host uses"
            ],
            "do": [
              "Set a memory limit and OOM-kill a container on purpose; read the exit code",
              "Throttle a CPU-bound container and observe the slowdown in docker stats",
              "Size limits from real usage data, not from round numbers that feel safe"
            ],
            "tools": ["docker"],
            "res": [["Resource constraints", "https://docs.docker.com/engine/containers/resource_constraints"]],
            "tip": "Memory limits without understanding your app's footprint just move the crash earlier. Measure first."
          },
          {
            "t": "Orchestration: What Comes After Docker",
            "d": "Swarm, Kubernetes, and knowing when a single host is no longer enough.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Docker Swarm is simple and built in, but its ecosystem has quietly faded",
              "Kubernetes is the industry standard for multi-host orchestration",
              "The jump is justified by scale, availability needs, and team size, not by hype"
            ],
            "do": [
              "Deploy a stack to a 3-node Swarm and practice a rolling update",
              "List what Swarm cannot do that your production needs (autoscaling, advanced networking)",
              "Write the one-paragraph justification for moving your app to Kubernetes, or not"
            ],
            "tools": ["docker", "kubernetes"],
            "res": [["Docker Swarm", "https://docs.docker.com/engine/swarm"]],
            "tip": "Swarm is fine for small, stable workloads. Adopting Kubernetes for three containers is resume-driven development.",
            "tag": "opt"
          },
          {
            "t": "Docker in Production: The Checklist",
            "d": "Everything that separates a demo container from a production one.",
            "lv": 3,
            "time": "~4h",
            "badge": "PROJECT",
            "learn": [
              "Non-root user, read-only filesystem, dropped capabilities, pinned digests, scanned images",
              "Log rotation, resource limits, healthchecks, restart policies, and secret management",
              "Image provenance: signed, SBOM-attached, built by CI from a known commit"
            ],
            "do": [
              "Take one of your images through the full checklist and fix every gap",
              "Document the production run command or Compose file with every flag justified",
              "Hand it to a peer for a security review and fix what they find"
            ],
            "tools": ["docker", "trivy", "cosign"],
            "res": [["Docker security", "https://docs.docker.com/engine/security"]],
            "tip": "Production readiness is boring on purpose. Every item on this checklist exists because someone learned it the hard way."
          }
        ]
      }
    ]
  }
});
