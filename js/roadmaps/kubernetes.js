/* Atlas roadmap data: Kubernetes (kubernetes) */
ROADMAPS.push({
  "id": "kubernetes",
  "title": "Kubernetes",
  "icon": "☸️",
  "color": "#326ce5",
  "desc": "From your first pod to running production clusters: orchestrate containers at scale with deployments, networking, security, and operators.",
  "kind": "skill",
  "root": {
    "t": "Kubernetes Fundamentals to Production",
    "d": "The complete path to operating containerized workloads on Kubernetes.",
    "children": [
      {
        "t": "Orchestration Foundations",
        "d": "Why Kubernetes exists and how its control plane actually works.",
        "lv": 1,
        "children": [
          {
            "t": "Why Kubernetes",
            "d": "The jump from running containers to running them reliably at scale.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Containers solved packaging; orchestration solves scheduling, healing, and scaling",
              "Declarative model: you describe desired state, controllers converge reality to it",
              "What Kubernetes does NOT do: it does not build images, deploy source code, or manage databases"
            ],
            "do": [
              "List 3 pain points of managing 20 containers by hand (restarts, placement, config drift)",
              "Draw the desired-state vs actual-state reconciliation loop from memory",
              "Compare K8s to Docker Swarm and Nomad on community size and ecosystem depth"
            ],
            "tools": ["kubernetes"],
            "res": [["Kubernetes docs", "https://kubernetes.io/docs"]],
            "tip": "Kubernetes is not a platform-as-a-service. It gives you primitives; you still build the platform on top of them."
          },
          {
            "t": "Control Plane vs Worker Nodes",
            "d": "The brain of the cluster and the machines that do the work.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "API server is the single front door; every tool talks to it, never directly to nodes",
              "etcd stores all cluster state; scheduler places pods; controllers enforce desired state",
              "kubelet runs the pod spec on each node; kube-proxy programs networking for services"
            ],
            "do": [
              "Sketch the control plane components and draw arrows for a pod creation request",
              "Run kubectl cluster-info and identify which component each URL belongs to",
              "Explain from memory what breaks if etcd loses quorum"
            ],
            "tools": ["kubectl", "etcd"],
            "res": [["Kubernetes components", "https://kubernetes.io/docs/concepts/overview/components"]],
            "tip": "If the API server is down you cannot change anything, but already-running workloads keep running."
          },
          {
            "t": "Pods: The Atomic Unit",
            "d": "The smallest deployable thing in Kubernetes, and why it is not a container.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "A pod is one or more containers that share network, IPC, and optionally storage",
              "Pods are ephemeral by design: never create them directly, always through a controller",
              "Pod IP addresses die with the pod; treat pods as cattle, not pets"
            ],
            "do": [
              "Write a pod manifest with two containers sharing an emptyDir volume",
              "kubectl apply it, then kubectl delete pod and watch the replacement policy do nothing (it just dies)",
              "curl the app container from the sidecar container via localhost"
            ],
            "tools": ["kubectl"],
            "res": [["Pods concept", "https://kubernetes.io/docs/concepts/workloads/pods"]],
            "tip": "Pods get rescheduled on node failure. Anything you put in a pod's writable layer is gone the next time it moves."
          },
          {
            "t": "kubectl Essentials",
            "d": "The CLI you will live in: contexts, namespaces, and the commands that matter.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "kubeconfig holds clusters, users, and contexts; context switches decide where your commands land",
              "Namespaces isolate workloads in one cluster; most resources are namespaced, some are cluster-scoped",
              "kubectl get/describe/logs/exec cover 90% of daily debugging"
            ],
            "do": [
              "Install kubectl and point it at a kind or minikube cluster",
              "Create two namespaces, switch contexts, and prove resources are isolated per namespace",
              "Practice kubectl describe on a failing pod until you can read events fluently"
            ],
            "tools": ["kubectl", "kind", "minikube"],
            "res": [["kubectl reference", "https://kubernetes.io/docs/reference/kubectl"]],
            "tip": "Always check which context you are in before running a destructive command. kubectl config current-context is cheap insurance."
          },
          {
            "t": "Labels, Selectors, and Annotations",
            "d": "The loose coupling glue that lets services, controllers, and policies find things.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Labels are queryable key-value pairs; selectors match sets of objects by their labels",
              "Deployments, services, and NetworkPolicies all work through selectors, not names",
              "Annotations carry non-identifying metadata for tools, not selection logic"
            ],
            "do": [
              "Label pods with app=web, env=prod and select them with -l 'app=web,env in (prod,staging)'",
              "Break a service by changing a deployment's pod labels, then fix it by reading the endpoint list",
              "Add a change-cause annotation to a deployment and read it back"
            ],
            "tools": ["kubectl"],
            "res": [["Labels and selectors", "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels"]],
            "tip": "A mismatched label between a service selector and pod labels is the most common reason a new service has no endpoints."
          },
          {
            "t": "Container Runtimes and CRI",
            "d": "What actually runs your containers: containerd, runc, and the runtime interface.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The kubelet talks to runtimes through the Container Runtime Interface (CRI)",
              "containerd is the standard high-level runtime; it drives runc which creates the actual containers",
              "Docker is not required on nodes and has not been the runtime since dockershim was removed"
            ],
            "do": [
              "Run crictl ps on a node (or in kind) and compare its view to docker ps",
              "Pull an image with crictl pull and inspect how the runtime stores it",
              "Identify which runtime your cluster uses with kubectl get nodes -o wide"
            ],
            "tools": ["containerd", "crictl", "runc"],
            "res": [["Container runtimes", "https://kubernetes.io/docs/setup/production-environment/container-runtimes"]],
            "tip": "Knowing your runtime matters when debugging image pulls and low-level container failures, but most days you never touch it."
          }
        ]
      },
      {
        "t": "Workload Controllers",
        "d": "Deployments, StatefulSets, Jobs, and everything that keeps pods alive.",
        "lv": 1,
        "children": [
          {
            "t": "Deployments and ReplicaSets",
            "d": "The standard way to run stateless apps with rolling updates and rollbacks.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "A Deployment manages a ReplicaSet which keeps N identical pod replicas alive",
              "Rolling updates replace pods gradually; maxSurge and maxUnavailable control the tempo",
              "Rollback is a first-class operation that restores the previous ReplicaSet"
            ],
            "do": [
              "Deploy nginx with 3 replicas, then scale to 5 with kubectl scale",
              "Roll out a new image tag with kubectl set image and watch kubectl rollout status",
              "Break an update on purpose, then kubectl rollout undo back to health"
            ],
            "tools": ["kubectl"],
            "res": [["Deployments", "https://kubernetes.io/docs/concepts/workloads/controllers/deployment"]],
            "tip": "Never edit a ReplicaSet directly. It is owned by the Deployment, and your changes will fight the controller."
          },
          {
            "t": "StatefulSets",
            "d": "Stable identities and ordered operations for databases and other stateful workloads.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Each pod gets a stable name (web-0, web-1) and stable storage via volumeClaimTemplates",
              "Ordered, graceful deployment and scaling: web-1 does not start before web-0 is ready",
              "Headless services give each pod its own DNS record for peer discovery"
            ],
            "do": [
              "Deploy a 3-node database StatefulSet with a headless service and per-pod PVCs",
              "Delete web-1 and observe that the replacement keeps the same name and reattaches the same volume",
              "Scale down to 0 and confirm the PVCs survive while the pods disappear"
            ],
            "tools": ["kubectl"],
            "res": [["StatefulSets", "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset"]],
            "tip": "Use a Deployment for anything stateless. Reaching for a StatefulSet just to get a stable hostname is usually a design smell."
          },
          {
            "t": "DaemonSets",
            "d": "Exactly one pod on every node (or a selected set) for agents and infrastructure.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "DaemonSets run log collectors, monitoring agents, and network plugins on each node",
              "New nodes automatically get the pod; drained nodes lose it without complaint",
              "Node selectors and tolerations restrict which nodes participate"
            ],
            "do": [
              "Deploy a DaemonSet running a node-level metrics exporter",
              "Add a node with a taint and confirm the DaemonSet pod lands only if tolerated",
              "Compare DaemonSet behavior to a Deployment with host networking"
            ],
            "tools": ["kubectl"],
            "res": [["DaemonSets", "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset"]],
            "tip": "DaemonSets are for node-level concerns only. Application workloads should use Deployments so the scheduler can bin-pack them."
          },
          {
            "t": "Jobs and CronJobs",
            "d": "Run-to-completion work: migrations, batch jobs, and scheduled tasks.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "A Job runs pods until a number complete successfully, with backoff and retry policies",
              "CronJobs schedule Jobs on cron syntax, with concurrency policy and history limits",
              "Failed jobs leave pods behind for inspection; successful ones can be cleaned up with TTL"
            ],
            "do": [
              "Write a Job that computes pi and exits; inspect its logs after completion",
              "Create a CronJob that runs every minute and watch completed jobs accumulate",
              "Set ttlSecondsAfterFinished and confirm cleanup happens automatically"
            ],
            "tools": ["kubectl"],
            "res": [["Jobs", "https://kubernetes.io/docs/concepts/workloads/controllers/job"]],
            "tip": "Set a startingDeadlineSeconds on CronJobs so a missed schedule does not pile up a stampede of late runs."
          },
          {
            "t": "Init Containers and Native Sidecars",
            "d": "Setup steps that run before your app, and sidecars that live with it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Init containers run to completion in order before any app container starts",
              "Native sidecars (init containers with restartPolicy: Always) start early and stay running",
              "Use cases: config generation, migrations, log shippers, service-mesh proxies"
            ],
            "do": [
              "Add an init container that waits for a database service to be reachable before the app starts",
              "Convert it to a native sidecar and confirm it keeps running alongside the app",
              "Order two init containers and watch the second wait for the first"
            ],
            "tools": ["kubectl"],
            "res": [["Init containers", "https://kubernetes.io/docs/concepts/workloads/pods/init-containers"]],
            "tip": "Native sidecars finally solve the old problem of ordering: previously everything started at once and hoped for the best."
          },
          {
            "t": "Health Probes",
            "d": "Liveness, readiness, and startup probes that decide if your pod is alive and routable.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Liveness restarts a stuck container; readiness removes a pod from service endpoints temporarily",
              "Startup probes protect slow-starting apps from being killed before they are up",
              "Probe handlers: HTTP GET, TCP socket, or exec command, each with period, timeout, and thresholds"
            ],
            "do": [
              "Add a readiness probe that fails during a slow dependency, and watch endpoints drop the pod",
              "Misconfigure a liveness probe and watch Kubernetes restart-loop a healthy app",
              "Tune failureThreshold and periodSeconds for a Java app with a 60s startup"
            ],
            "tools": ["kubectl"],
            "res": [["Configure probes", "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes"]],
            "tip": "A liveness probe that mirrors the readiness probe is the classic self-inflicted outage: transient slowness becomes a restart storm."
          },
          {
            "t": "Pod Lifecycle and QoS Classes",
            "d": "Phases, conditions, and which pods get evicted first when a node is under pressure.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Pod phases (Pending, Running, Succeeded, Failed, Unknown) describe the pod, not your app",
              "QoS classes (Guaranteed, Burstable, BestEffort) derive from requests vs limits",
              "When a node runs out of memory, BestEffort pods die first; Guaranteed pods die last"
            ],
            "do": [
              "Create three pods (one Guaranteed, one Burstable, one BestEffort) and inspect their qosClass",
              "Pressure a node and watch the eviction order follow QoS",
              "Read a pod's conditions to distinguish scheduling failures from runtime failures"
            ],
            "tools": ["kubectl"],
            "res": [["Pod lifecycle", "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle"]],
            "tip": "Set requests equal to limits on critical workloads. Guaranteed QoS is the cheapest insurance against noisy neighbors."
          }
        ]
      },
      {
        "t": "Configuration and Storage",
        "d": "Getting config into pods and data onto durable disks.",
        "lv": 1,
        "children": [
          {
            "t": "ConfigMaps",
            "d": "Decouple configuration from container images, injected as env vars or files.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "ConfigMaps hold non-sensitive config; mounting one as a volume turns keys into files",
              "Env var injection is simple but requires a pod restart to pick up changes",
              "Volume mounts update automatically (with a kubelet sync delay) without restarts"
            ],
            "do": [
              "Create a ConfigMap from a properties file and mount it into nginx's config directory",
              "Inject the same ConfigMap as env vars into a second pod",
              "Update the ConfigMap and time how long the mounted file takes to change"
            ],
            "tools": ["kubectl"],
            "res": [["ConfigMaps", "https://kubernetes.io/docs/concepts/configuration/configmap"]],
            "tip": "Rolling a deployment after a ConfigMap change is the reliable way to guarantee every pod sees the new config."
          },
          {
            "t": "Secrets",
            "d": "Handling passwords and tokens: what Secrets protect and what they do not.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Secrets are base64-encoded, not encrypted by default; anyone with API read access sees them",
              "Enable encryption at rest in etcd to protect Secrets stored in the cluster",
              "Prefer external secret managers (Vault, cloud KMS) synced in over hand-rolled Secret YAML"
            ],
            "do": [
              "Create a Secret, decode its value, and confirm it was never really hidden",
              "Mount it as env vars and as files; compare the two approaches",
              "Set up encryption at rest and verify etcd contents are no longer plaintext"
            ],
            "tools": ["kubectl", "external-secrets"],
            "res": [["Secrets", "https://kubernetes.io/docs/concepts/configuration/secret"]],
            "tip": "If a Secret is committed to git, rotate it immediately. Base64 is encoding, not encryption, and git history never forgets."
          },
          {
            "t": "PersistentVolumes and Claims",
            "d": "Durable storage that survives pod death: PVs, PVCs, and StorageClasses.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "PVs are cluster storage; PVCs are namespace-scoped requests for it; binding matches them up",
              "StorageClasses enable dynamic provisioning so you never hand-create PVs",
              "Access modes (ReadWriteOnce vs ReadWriteMany) decide how many pods can share a volume"
            ],
            "do": [
              "Provision a PVC with the default StorageClass and mount it into a pod",
              "Delete the pod and prove the data survives on the reattached volume",
              "Try mounting a ReadWriteOnce volume on two pods and read the error carefully"
            ],
            "tools": ["kubectl"],
            "res": [["Persistent volumes", "https://kubernetes.io/docs/concepts/storage/persistent-volumes"]],
            "tip": "Pick your reclaim policy deliberately. Retain keeps data after the PVC is deleted; Delete wipes the disk with it."
          },
          {
            "t": "CSI Drivers",
            "d": "How cloud and vendor storage plugs into Kubernetes through the Container Storage Interface.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "CSI is the standard plugin API; every major cloud and storage vendor ships a CSI driver",
              "Drivers handle provision, attach, mount, snapshot, and resize operations",
              "Volume snapshots and cloning ride on CSI capabilities exposed through StorageClasses"
            ],
            "do": [
              "Install your cloud's CSI driver on a test cluster and provision a volume",
              "Take a VolumeSnapshot and restore a new PVC from it",
              "Resize a PVC in place and watch the filesystem expand"
            ],
            "tools": ["kubectl"],
            "res": [["CSI drivers", "https://kubernetes-csi.github.io/docs"]],
            "tip": "Snapshots are your cheapest backup story in Kubernetes. Schedule them before you need them.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Services and Networking",
        "d": "Cluster networking, service discovery, and getting traffic in from the outside.",
        "lv": 2,
        "children": [
          {
            "t": "Pod-to-Pod Networking",
            "d": "The flat network model: every pod gets an IP and can reach every other pod.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Kubernetes requires pod-to-pod communication without NAT; the CNI plugin implements it",
              "CNIs (Calico, Cilium, Flannel) differ in policy support, performance, and observability",
              "IP addresses are per-pod and ephemeral, which is why DNS and services exist"
            ],
            "do": [
              "Exec into two pods in different namespaces and curl each other's pod IPs directly",
              "Identify your cluster's CNI plugin and its encapsulation mode",
              "Watch pod IPs change on reschedule while DNS names stay stable"
            ],
            "tools": ["kubectl", "cilium", "calico"],
            "res": [["Cluster networking", "https://kubernetes.io/docs/concepts/cluster-administration/networking"]],
            "tip": "Never hardcode pod IPs. They are the most disposable addresses in your entire infrastructure."
          },
          {
            "t": "Services: ClusterIP, NodePort, LoadBalancer",
            "d": "Stable virtual IPs and DNS names in front of ever-changing pods.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ClusterIP gives an internal virtual IP with automatic DNS (my-svc.my-ns.svc.cluster.local)",
              "NodePort exposes the service on every node's IP at a high port",
              "LoadBalancer asks the cloud provider to provision a real external load balancer"
            ],
            "do": [
              "Expose a deployment with a ClusterIP service and resolve it from another pod with nslookup",
              "Create a NodePort service and reach it through a node's IP from your laptop",
              "Inspect how Endpoints/EndpointSlices track the current healthy pod set"
            ],
            "tools": ["kubectl"],
            "res": [["Services", "https://kubernetes.io/docs/concepts/services-networking/service"]],
            "tip": "A service with no endpoints means the selector matches nothing. Check EndpointSlices first, not the service."
          },
          {
            "t": "Ingress",
            "d": "HTTP routing into the cluster: hosts, paths, and TLS termination.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Ingress is an API object; an ingress controller (NGINX, Traefik) does the actual routing",
              "Rules map hosts and paths to services; TLS secrets terminate HTTPS at the edge",
              "Ingress is in maintenance mode long-term, but remains the most widely deployed option"
            ],
            "do": [
              "Install an ingress controller and route two hostnames to two different services",
              "Add a path-based rule and a TLS secret, then curl both endpoints",
              "Compare the generated controller config to your Ingress rules"
            ],
            "tools": ["kubectl", "ingress-nginx", "traefik"],
            "res": [["Ingress", "https://kubernetes.io/docs/concepts/services-networking/ingress"]],
            "tip": "The Ingress object does nothing without a controller installed. Apply the controller first, always."
          },
          {
            "t": "Gateway API",
            "d": "The modern, role-oriented successor to Ingress for traffic management.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "GatewayClass, Gateway, and HTTPRoute split infrastructure, cluster ops, and app routing roles",
              "HTTPRoute supports header matching, traffic splitting, and filters that Ingress never had",
              "Gateway API is GA and the long-term direction, with implementations from every major vendor"
            ],
            "do": [
              "Install the Gateway API CRDs and an implementation (Envoy Gateway or Istio)",
              "Create a Gateway plus an HTTPRoute that splits traffic 90/10 between two service versions",
              "Add a request header match rule and verify routing behavior with curl"
            ],
            "tools": ["kubectl", "envoy-gateway"],
            "res": [["Gateway API", "https://gateway-api.sigs.k8s.io"]],
            "tip": "Learn Gateway API for anything new. Ingress knowledge still pays the bills, but the future is Routes."
          },
          {
            "t": "NetworkPolicies",
            "d": "Firewall rules for pods: default-deny and least-privilege east-west traffic.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "By default all pod traffic is allowed; a NetworkPolicy selects pods and restricts them",
              "Policies are additive and enforced by the CNI, not by Kubernetes itself",
              "DNS egress (port 53) is the classic gotcha that breaks apps under default-deny"
            ],
            "do": [
              "Apply a default-deny policy in a namespace and watch everything break",
              "Add allow rules for DNS, then for your app's frontend-to-backend path",
              "Label pods and write a policy that only lets the payment tier reach the database tier"
            ],
            "tools": ["kubectl", "cilium"],
            "res": [["NetworkPolicies", "https://kubernetes.io/docs/concepts/services-networking/network-policies"]],
            "tip": "Test NetworkPolicies with real traffic, not just by reading YAML. A missing DNS rule looks exactly like a broken app."
          },
          {
            "t": "Service Mesh Overview",
            "d": "mTLS, observability, and traffic policy between services with Istio or Linkerd.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "A mesh injects a proxy sidecar into each pod to handle service-to-service concerns",
              "Automatic mTLS, retries, circuit breaking, and golden-signal metrics come free",
              "The cost is real: latency, complexity, and an extra control plane to operate"
            ],
            "do": [
              "Install Linkerd on a test cluster and inject it into a sample app",
              "Observe mTLS between services and read the live traffic dashboard",
              "Compare before/after p99 latency to price the overhead honestly"
            ],
            "tools": ["linkerd", "istio"],
            "res": [["Linkerd", "https://linkerd.io"]],
            "tip": "Do not adopt a mesh to solve a problem you do not have yet. Start with NetworkPolicies and good observability.",
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Security and Access Control",
        "d": "Who can do what: RBAC, service accounts, and locking down workloads.",
        "lv": 2,
        "children": [
          {
            "t": "RBAC Deep Dive",
            "d": "Roles, ClusterRoles, and Bindings: the permission system that guards the API.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Roles grant permissions in a namespace; ClusterRoles grant them cluster-wide or on cluster-scoped resources",
              "RoleBindings attach a role to users, groups, or service accounts",
              "The API is deny-by-default: no binding means no access, and verbs are fine-grained"
            ],
            "do": [
              "Create a developer Role limited to get/list on pods and deployments, bind it to a test user",
              "Use kubectl auth can-i to verify exactly what the user can and cannot do",
              "Debug a forbidden error by tracing the missing binding, not by granting cluster-admin"
            ],
            "tools": ["kubectl"],
            "res": [["RBAC", "https://kubernetes.io/docs/reference/access-authn-authz/rbac"]],
            "tip": "Never hand out cluster-admin to fix a permission error. Reproduce with auth can-i and grant the narrowest verb set."
          },
          {
            "t": "ServiceAccounts",
            "d": "Identities for workloads: how pods authenticate to the API and to each other.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Every pod runs as a ServiceAccount; the API token is projected into the pod automatically",
              "Bound tokens are audience-scoped and expire, unlike the old long-lived secrets",
              "Workload identity federation lets pods assume cloud IAM roles without stored keys"
            ],
            "do": [
              "Create a ServiceAccount, bind it to a read-only Role, and run a pod as it",
              "Curl the API from inside the pod using the projected token",
              "Disable token automounting on a pod that does not need the API"
            ],
            "tools": ["kubectl"],
            "res": [["ServiceAccounts", "https://kubernetes.io/docs/concepts/security/service-accounts"]],
            "tip": "Turn off automountServiceAccountToken on pods that never call the API. It shrinks the blast radius of a container escape."
          },
          {
            "t": "Pod Security Standards",
            "d": "Baseline and restricted policies that stop the most common container escapes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The Pod Security admission plugin enforces privileged, baseline, and restricted profiles per namespace",
              "Restricted means: non-root user, no privilege escalation, dropped capabilities, seccomp profile",
              "Labels on the namespace (pod-security.kubernetes.io/enforce) decide which profile applies"
            ],
            "do": [
              "Enforce the restricted profile on a namespace and watch a privileged pod get rejected",
              "Fix the rejected workload by adding runAsNonRoot and dropping capabilities",
              "Audit all namespaces and document which profile each one enforces"
            ],
            "tools": ["kubectl"],
            "res": [["Pod Security Standards", "https://kubernetes.io/docs/concepts/security/pod-security-standards"]],
            "tip": "Enforce restricted everywhere and grant exemptions explicitly. The exemptions list becomes your real risk register."
          },
          {
            "t": "Admission Control with ValidatingAdmissionPolicy",
            "d": "CEL-based guardrails that reject bad manifests without running a webhook server.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "ValidatingAdmissionPolicy evaluates CEL expressions against requests at admission time",
              "No webhook to operate: policies ship as native API objects with a binding",
              "Common uses: require resource limits, forbid latest tags, mandate labels"
            ],
            "do": [
              "Write a policy that rejects deployments missing resource limits, with a helpful message",
              "Bind it with a namespace selector and test it against good and bad manifests",
              "Audit existing workloads against the policy in warn mode before enforcing"
            ],
            "tools": ["kubectl"],
            "res": [["Validating admission policy", "https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy"]],
            "tip": "Roll policies out in audit mode first. Enforcing on day one breaks the workloads you forgot about."
          },
          {
            "t": "Image and Supply-Chain Security",
            "d": "Only trusted images run here: signing, scanning, and pull policies.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Sign images with cosign and verify signatures at admission with a policy controller",
              "Scan images in CI (Trivy, Grype) and block critical CVEs before they reach the cluster",
              "imagePullPolicy and private registry secrets control where images come from"
            ],
            "do": [
              "Sign an image with cosign, then enforce signature verification with Kyverno or admission policy",
              "Scan a base image with Trivy and triage its critical findings",
              "Pin a deployment to an image digest instead of a floating tag"
            ],
            "tools": ["cosign", "trivy", "kyverno"],
            "res": [["Sigstore cosign", "https://www.sigstore.dev"]],
            "tip": "Tags are mutable pointers; digests are immutable facts. Production should always pin digests."
          }
        ]
      },
      {
        "t": "Scaling and Scheduling",
        "d": "Autoscaling workloads and controlling exactly where pods land.",
        "lv": 2,
        "children": [
          {
            "t": "Resource Requests and Limits",
            "d": "How the scheduler and kubelet use your CPU and memory numbers.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Requests drive scheduling and QoS; limits drive throttling (CPU) and OOM kills (memory)",
              "CPU is compressible (throttled), memory is not (killed): set them with different care",
              "LimitRanges and ResourceQuotas guard namespaces against greedy or missing values"
            ],
            "do": [
              "Load-test an app and set requests from real p95 usage, not guesses",
              "Trigger an OOMKill on purpose by setting memory limit below the app's footprint",
              "Add a LimitRange that injects sane defaults into a dev namespace"
            ],
            "tools": ["kubectl", "metrics-server"],
            "res": [["Resource management", "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers"]],
            "tip": "CPU limits cause throttling that looks like a slow app. Omit CPU limits on latency-sensitive workloads and rely on requests."
          },
          {
            "t": "Horizontal Pod Autoscaler",
            "d": "Scale replicas on CPU, memory, or custom metrics automatically.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "HPA adjusts replica count toward a target metric, using metrics-server or custom metrics",
              "Scale-up is fast, scale-down is deliberately slow (stabilization window) to avoid flapping",
              "HPA needs honest resource requests; garbage requests produce garbage scaling decisions"
            ],
            "do": [
              "Deploy a web app with an HPA targeting 50% CPU, then load-test it and watch replicas climb",
              "Expose a custom metric (requests per second) and scale on that instead",
              "Tune behavior.scaleDown.stabilizationWindowSeconds and observe the difference"
            ],
            "tools": ["kubectl", "k6"],
            "res": [["Horizontal Pod Autoscaler", "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale"]],
            "tip": "HPA reacts to averages across pods. One hot pod in a sea of idle ones will not trigger a scale-up."
          },
          {
            "t": "VPA and Cluster Autoscaling",
            "d": "Right-size containers vertically and grow the node pool itself.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "VPA recommends or applies new requests/limits based on historical usage",
              "Cluster Autoscaler adds/removes nodes as pending pods demand them",
              "Karpenter provisions right-sized nodes directly from the cloud API, faster and cheaper"
            ],
            "do": [
              "Run VPA in recommendation mode for a week and compare its advice to your requests",
              "Trigger a scale-up storm and time how long nodes take to join and accept pods",
              "Evaluate Karpenter NodePools against Cluster Autoscaler node groups on cost"
            ],
            "tools": ["kubectl", "karpenter"],
            "res": [["Karpenter", "https://karpenter.sh"]],
            "tip": "Do not run HPA and VPA on the same metric in auto mode. They will fight each other forever.",
            "tag": "opt"
          },
          {
            "t": "Taints, Tolerations, and Affinity",
            "d": "Steering pods to the right nodes: GPUs, zones, and dedicated pools.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Taints repel pods; tolerations let specific pods ignore the repulsion",
              "Node affinity attracts pods to nodes by labels; pod affinity co-locates or spreads pods",
              "Topology spread constraints distribute replicas evenly across zones"
            ],
            "do": [
              "Taint GPU nodes and give only ML workloads the matching toleration",
              "Spread a 6-replica deployment evenly across 3 zones with topologySpreadConstraints",
              "Use pod anti-affinity to keep replicas of a stateful app off the same node"
            ],
            "tools": ["kubectl"],
            "res": [["Assign pods to nodes", "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node"]],
            "tip": "Affinity is a preference system with hard and soft rules. Soft rules get ignored under pressure; hard rules cause Pending pods."
          },
          {
            "t": "Deployment Strategies",
            "d": "Rolling, blue-green, and canary releases with safe rollbacks.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Rolling updates are built in; blue-green swaps whole environments; canary shifts a slice of traffic",
              "Readiness gates and automated analysis (metrics checks) decide whether a canary proceeds",
              "Tools like Argo Rollouts add canary/blue-green to native Deployments"
            ],
            "do": [
              "Run a blue-green switch with two deployments and one service selector flip",
              "Do a canary release with Argo Rollouts, promoting manually after metric checks pass",
              "Practice the rollback path until it is boring, then document the runbook"
            ],
            "tools": ["kubectl", "argo-rollouts"],
            "res": [["Argo Rollouts", "https://argo-rollouts.readthedocs.io"]],
            "tip": "The rollback plan is part of the release plan. If you cannot describe it in one sentence, you are not ready to ship."
          }
        ]
      },
      {
        "t": "Observability and Operations",
        "d": "Logs, metrics, traces, and the daily craft of keeping clusters healthy.",
        "lv": 2,
        "children": [
          {
            "t": "Logging in Kubernetes",
            "d": "From kubectl logs to cluster-wide aggregation that survives pod death.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "kubectl logs reads the container runtime's log files; dead pods take their logs with them",
              "Node-level agents (Fluent Bit, Vector) ship logs to Loki, Elasticsearch, or cloud logging",
              "Structured JSON logs with trace IDs turn grep into actual queries"
            ],
            "do": [
              "Deploy Fluent Bit as a DaemonSet shipping to Loki and query with LogQL",
              "Convert an app to structured JSON logging and filter by trace ID",
              "Set log rotation on nodes so a chatty pod cannot fill the disk"
            ],
            "tools": ["kubectl", "fluent-bit", "loki"],
            "res": [["Logging architecture", "https://kubernetes.io/docs/concepts/cluster-administration/logging"]],
            "tip": "Logs are for forensics, metrics are for alerting. Paging a human because of a log line is an architecture smell."
          },
          {
            "t": "Metrics with Prometheus and Grafana",
            "d": "The standard monitoring stack: scraping, alerting, and dashboards.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Prometheus scrapes /metrics endpoints; ServiceMonitors tell the operator what to scrape",
              "kube-prometheus ships cluster, node, and control-plane dashboards out of the box",
              "Alertmanager routes alerts; record rules precompute expensive queries"
            ],
            "do": [
              "Install kube-prometheus-stack with Helm and explore the default Grafana dashboards",
              "Add a ServiceMonitor for your own app exposing RED metrics",
              "Write an alert on p99 latency with a runbook link, and trigger it on purpose"
            ],
            "tools": ["prometheus", "grafana", "helm"],
            "res": [["Prometheus", "https://prometheus.io/docs/introduction/overview"]],
            "tip": "Alert on symptoms (latency, error rate), not causes (CPU at 80%). Causes change; user pain is stable."
          },
          {
            "t": "Distributed Tracing",
            "d": "Following one request across pods, services, and queues.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Traces connect spans from each service into one request timeline via context propagation",
              "OpenTelemetry is the vendor-neutral instrumentation standard; Tempo/Jaeger store the traces",
              "Sampling keeps costs sane: keep all errors, sample a slice of successes"
            ],
            "do": [
              "Instrument a two-service app with the OpenTelemetry SDK and export to Tempo",
              "Trace one slow request end to end and find which span dominates",
              "Correlate a trace with logs and metrics using the shared trace ID"
            ],
            "tools": ["opentelemetry", "tempo", "grafana"],
            "res": [["OpenTelemetry", "https://opentelemetry.io/docs"]],
            "tip": "Tracing without consistent context propagation is just expensive logging. Verify headers survive every hop.",
            "tag": "opt"
          },
          {
            "t": "Troubleshooting Failing Workloads",
            "d": "A repeatable method for the 2 AM page: events, logs, and the usual suspects.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "kubectl describe shows events, the cluster's own diary of what it tried and why it failed",
              "ImagePullBackOff, CrashLoopBackOff, and Pending each point at a different layer",
              "kubectl debug adds ephemeral containers to distroless pods you cannot shell into"
            ],
            "do": [
              "Diagnose five broken manifests (bad image, bad probe, missing secret, bad selector, quota) from events alone",
              "Use kubectl debug to troubleshoot a distroless container with no shell",
              "Build a personal checklist ordered by layer: scheduling, image, config, runtime, network"
            ],
            "tools": ["kubectl"],
            "res": [["Troubleshoot applications", "https://kubernetes.io/docs/tasks/debug"]],
            "tip": "Read the events before the logs. Events tell you what Kubernetes did; logs tell you what your app did. The order matters."
          },
          {
            "t": "Cluster Upgrades",
            "d": "Rolling the control plane and nodes forward without downtime.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Upgrade control plane first, then nodes; never skip more than one minor version",
              "Drain nodes gracefully with PodDisruptionBudgets protecting minimum availability",
              "Deprecated APIs are the real upgrade risk: audit with the API deprecation guides"
            ],
            "do": [
              "Upgrade a kind cluster one minor version and watch each component roll",
              "Drain a node with a PDB in place and confirm the app never drops below its minimum",
              "Run a deprecation scan and migrate any removed API versions before upgrading"
            ],
            "tools": ["kubectl", "kubeadm", "pluto"],
            "res": [["Cluster upgrades", "https://kubernetes.io/docs/tasks/administer-cluster/cluster-upgrade"]],
            "tip": "The upgrade that fails is the one that skipped the deprecation check. Audit APIs before, not during."
          }
        ]
      },
      {
        "t": "Packaging, GitOps, and Production",
        "d": "Helm, GitOps, operators, and running real clusters in production.",
        "lv": 3,
        "children": [
          {
            "t": "Helm Charts",
            "d": "Templated, versioned, shareable packages for Kubernetes applications.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Charts template manifests with values.yaml; releases are installed instances tracked by Helm",
              "Helpers, named templates, and subcharts keep large charts maintainable",
              "helm template and helm lint catch errors before anything touches the cluster"
            ],
            "do": [
              "Write a chart from scratch for a two-tier app with configurable replicas and image tags",
              "Install, upgrade with --set, and roll back a release",
              "Publish the chart to an OCI registry and install it from there"
            ],
            "tools": ["helm"],
            "res": [["Helm docs", "https://helm.sh/docs"]],
            "tip": "Keep chart logic dumb and values expressive. A chart full of conditionals is a program wearing a YAML costume."
          },
          {
            "t": "Kustomize",
            "d": "Template-free customization: bases, overlays, and patches for dev/stage/prod.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Kustomize patches plain YAML: no templating language, just overlays on a base",
              "Overlays per environment change images, replica counts, and config without duplication",
              "kubectl -k applies kustomizations directly; it is built into kubectl"
            ],
            "do": [
              "Build a base plus dev/prod overlays that differ in replicas and resource limits",
              "Use strategic merge patches and JSON patches to modify specific fields",
              "Compare the same app expressed in Kustomize vs Helm and note the tradeoffs"
            ],
            "tools": ["kubectl", "kustomize"],
            "res": [["Kustomize", "https://kustomize.io"]],
            "tip": "Kustomize shines for environment differences on top of Helm charts or raw manifests. It is not a replacement for packaging."
          },
          {
            "t": "GitOps with Argo CD",
            "d": "Git as the source of truth: automated sync, drift detection, and rollbacks.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Argo CD continuously reconciles cluster state with git; drift is detected and corrected",
              "ApplicationSets generate apps per environment or per tenant from one definition",
              "Progressive syncs and sync waves order complex multi-resource deployments"
            ],
            "do": [
              "Install Argo CD and sync an app from a git repo with auto-sync enabled",
              "Make a manual kubectl change and watch Argo CD detect and revert the drift",
              "Set up an ApplicationSet that deploys the same app to dev, staging, and prod"
            ],
            "tools": ["argocd", "git"],
            "res": [["Argo CD", "https://argo-cd.readthedocs.io"]],
            "tip": "Nobody runs kubectl apply against a GitOps-managed cluster. If they do, the drift alert names and shames them."
          },
          {
            "t": "Custom Resources and Operators",
            "d": "Extending the API with CRDs and encoding operational knowledge into controllers.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "CRDs add new object types to the API; controllers watch them and act",
              "Operators automate day-2 operations: backups, upgrades, failover for complex software",
              "kubebuilder and operator-sdk scaffold the controller boilerplate in Go"
            ],
            "do": [
              "Define a CRD for a toy resource and watch kubectl accept your new object type",
              "Install a real operator (e.g. postgres-operator) and provision a database declaratively",
              "Scaffold a controller with kubebuilder and implement a basic reconcile loop"
            ],
            "tools": ["kubectl", "kubebuilder", "operator-sdk"],
            "res": [["Custom resources", "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources"]],
            "tip": "Writing an operator is a serious commitment. Prefer an existing one; build one only when the domain logic is truly yours."
          },
          {
            "t": "Multi-Cluster Management",
            "d": "Fleet thinking: many clusters, one control story.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Patterns: one cluster per environment, per region, or per tenant, each with tradeoffs",
              "Fleet tools (Rancher, Argo CD ApplicationSets, Cluster API) manage many clusters as one",
              "Multi-cluster networking and service discovery need explicit design, not hope"
            ],
            "do": [
              "Stand up two kind clusters and manage both from one kubeconfig with contexts",
              "Deploy the same app to both with a fleet tool and compare drift handling",
              "Design the blast-radius story: what a bad change can and cannot take down"
            ],
            "tools": ["kubectl", "rancher", "cluster-api"],
            "res": [["Cluster API", "https://cluster-api.sigs.k8s.io"]],
            "tip": "Multiple small clusters beat one giant cluster for blast radius, but multiply your operational cost. Price both honestly.",
            "tag": "opt"
          },
          {
            "t": "Building Clusters with kubeadm",
            "d": "Standing up your own control plane and joining worker nodes by hand.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "kubeadm init bootstraps etcd, the API server, and core add-ons from a config file",
              "Join tokens and discovery hashes authenticate new worker nodes securely",
              "You own everything after bootstrap: CNI, storage, upgrades, certificates, backups"
            ],
            "do": [
              "Build a 3-node cluster on VMs with kubeadm and install a CNI",
              "Back up etcd, simulate a failure, and restore from the snapshot",
              "Rotate the cluster certificates and confirm API access survives"
            ],
            "tools": ["kubeadm", "etcd"],
            "res": [["kubeadm", "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm"]],
            "tip": "Build one cluster by hand to understand it, then use a managed service for anything that matters. Pride is not an SLA."
          },
          {
            "t": "Production Readiness",
            "d": "The final checklist before real traffic: security, reliability, and cost.",
            "lv": 3,
            "time": "~6h",
            "badge": "PROJECT",
            "learn": [
              "PDBs, anti-affinity, and multi-AZ node pools keep apps alive through node churn",
              "etcd backups, tested restores, and documented runbooks are the real DR plan",
              "Cost visibility per namespace (OpenCost) stops the surprise cloud bill"
            ],
            "do": [
              "Run a production-readiness review on a real app: PDBs, probes, limits, policies, backups",
              "Chaos-test it: delete pods, drain nodes, kill a zone, and measure recovery",
              "Deploy OpenCost and attribute last month's spend to teams"
            ],
            "tools": ["kubectl", "opencost", "velero"],
            "res": [["Production best practices", "https://kubernetes.io/docs/setup/best-practices"]],
            "tip": "Production readiness is a checklist you run, not a feeling you have. If it is not written down, it does not exist."
          }
        ]
      }
    ]
  }
});
