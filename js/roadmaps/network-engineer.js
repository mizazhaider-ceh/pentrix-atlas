/* Atlas roadmap data: Network Engineer (network-engineer) */
ROADMAPS.push({
  "id": "network-engineer",
  "title": "Network Engineer",
  "icon": "🔗",
  "color": "#40cea3",
  "desc": "Design, build, and troubleshoot networks at scale: routing with OSPF and BGP, switching, firewalls and VPNs, automation with Python and Ansible, and methodical troubleshooting.",
  "kind": "role",
  "root": {
    "t": "The Network Engineer Role",
    "d": "From packets and subnets to automated, observable production networks.",
    "children": [
      {
        "t": "Networking Foundations",
        "d": "The mental models everything else hangs on: layers, addresses, and how data actually moves.",
        "lv": 1,
        "children": [
          {
            "t": "How the Internet Works",
            "d": "Packets, ISPs, and peering: what happens between clicking a link and seeing the page.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Clients, servers, ISPs, and IXPs: the business and physical structure of the internet",
              "Packets vs frames vs segments: the right name for data at each layer",
              "Bandwidth vs latency vs throughput: what each measures and which one users feel"
            ],
            "do": [
              "Run `traceroute` to a distant site and identify each hop's network",
              "Draw the path of an HTTPS request through your home router, ISP, and the wider internet",
              "Measure your latency and bandwidth, then explain which limits a video call"
            ],
            "tools": ["traceroute", "ping", "speedtest"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Bandwidth is how wide the road is; latency is how long the trip takes. Most slowness complaints are latency, not bandwidth."
          },
          {
            "t": "The OSI Model",
            "d": "Seven layers that give every networking conversation a shared vocabulary: all people seem to need data processing.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "All 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application",
              "Encapsulation: each layer adds its header as data moves down, strips it moving up",
              "Which devices live where: hubs (L1), switches (L2), routers (L3), firewalls (L3-L7)"
            ],
            "do": [
              "Capture a ping in Wireshark and label each layer's header",
              "For a web request, name the protocol operating at each layer",
              "Memorize the layers with a mnemonic and test yourself from memory"
            ],
            "tools": ["Wireshark"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Nobody troubleshoots with all seven layers daily, but everyone interviews with them. Learn it cold, then think in the four-layer TCP/IP model for real work."
          },
          {
            "t": "The TCP/IP Model",
            "d": "The four-layer model the real world runs on: link, internet, transport, application.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Mapping OSI to TCP/IP: Network Access, Internet, Transport, Application",
              "The internet layer: IP addressing and routing; the transport layer: TCP and UDP",
              "Why the model matters for troubleshooting: isolate the failing layer first"
            ],
            "do": [
              "Map five protocols (Ethernet, IP, TCP, TLS, HTTP) to their TCP/IP layers",
              "Use `ping` (internet layer) vs `curl` (application layer) to isolate a failure",
              "Explain why a successful ping does not prove a web app works"
            ],
            "tools": ["ping", "curl", "Wireshark"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Troubleshoot bottom-up: physical link, then IP, then transport, then the app. Skipping layers is how you spend hours on a DNS problem."
          },
          {
            "t": "IPv4 Addressing",
            "d": "32 bits that locate every device: classes are history, but public vs private and APIPA still matter.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Dotted decimal and binary: converting between them fluently",
              "Private ranges (10/8, 172.16/12, 192.168/16), loopback, link-local, multicast, and why NAT exists",
              "How a host knows its network: the IP address plus the subnet mask"
            ],
            "do": [
              "Convert 20 random IPs between decimal and binary until it takes seconds",
              "Classify addresses as public, private, loopback, or multicast",
              "Explain to a rubber duck why two hosts need the same subnet to talk without a router"
            ],
            "tools": ["ipcalc", "Subnet calculator"],
            "res": [
              ["Practical Networking", "https://www.practicalnetworking.net"]
            ],
            "tip": "Learn binary conversion until it is boring. Everything in subnetting is just counting bits, and calculators are not allowed in exams."
          },
          {
            "t": "Subnetting and CIDR",
            "d": "Split networks into right-sized pieces: the single most tested skill in entry networking.",
            "lv": 1,
            "time": "~6h",
            "learn": [
              "CIDR notation: /24 means 24 network bits, 8 host bits, 254 usable hosts",
              "Borrowing bits: how each borrowed bit doubles subnets and halves hosts",
              "Finding network address, broadcast, first/last usable host, and next subnet"
            ],
            "do": [
              "Subnet 192.168.1.0/24 into 4 equal subnets by hand and verify with ipcalc",
              "Given 10.10.0.0/16, carve subnets for 500, 200, and 50 hosts with minimal waste",
              "Do 10 timed subnetting problems; aim for under 60 seconds each"
            ],
            "tools": ["ipcalc", "Practical Networking subnetting practice"],
            "res": [
              ["Practical Networking", "https://www.practicalnetworking.net"]
            ],
            "tip": "Memorize the powers of two to 2^16 and the /24 to /30 host counts. Subnetting speed is pure arithmetic fluency, not cleverness."
          },
          {
            "t": "TCP vs UDP",
            "d": "Reliable streams vs fire-and-forget datagrams: the handshake, the headers, and when each wins.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "TCP: three-way handshake, sequence numbers, acknowledgments, retransmission, flow control",
              "UDP: no handshake, no guarantees, tiny header; why DNS, DHCP, and VoIP use it",
              "Ports and sockets: how one IP serves thousands of simultaneous connections"
            ],
            "do": [
              "Capture a TCP handshake in Wireshark and label SYN, SYN-ACK, ACK",
              "Watch retransmissions during a throttled download",
              "List listening ports with `ss -tlnp` and map each to its service"
            ],
            "tools": ["Wireshark", "ss", "netstat", "tcpdump"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "UDP is not unreliable by accident, it is unreliable by design for speed. Adding reliability on top of UDP (like QUIC does) is a feature, not a fix."
          },
          {
            "t": "DNS and DHCP",
            "d": "Names to addresses and addresses to hosts: the two services every network depends on and everyone forgets.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "DNS resolution: recursive vs authoritative, root to TLD to domain, caching and TTL",
              "DHCP DORA: Discover, Offer, Request, Acknowledge; leases, reservations, and scopes",
              "Why both are single points of failure and how redundancy (secondary DNS, DHCP failover) works"
            ],
            "do": [
              "Trace a resolution with `dig +trace example.com` and name each server type",
              "Watch a DHCP exchange in Wireshark with a filter for bootp",
              "Break DNS on a test VM and observe how every symptom looks like a network outage"
            ],
            "tools": ["dig", "nslookup", "Wireshark", "ISC DHCP"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "When everything is down, check DNS first. Half of all network outages are name resolution wearing a connectivity costume."
          }
        ]
      },
      {
        "t": "Lab and Tooling",
        "d": "Build a free lab and learn the tools of the trade before touching production gear.",
        "lv": 1,
        "children": [
          {
            "t": "Network Simulators: Packet Tracer, GNS3, EVE-NG",
            "d": "Virtual routers and switches on your laptop: where every network engineer learns without breaking anything.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Packet Tracer: free, Cisco-focused, perfect for CCNA-level topologies",
              "GNS3 and EVE-NG: real images (IOS, Junos, FRR) for advanced labs and multi-vendor practice",
              "Lab discipline: snapshot before changes, document the topology, break it on purpose"
            ],
            "do": [
              "Install Packet Tracer and build a two-router, two-switch topology",
              "Configure basic hostnames, interfaces, and IP addresses on every device",
              "Save the topology and write a one-paragraph diagram description"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "EVE-NG"],
            "res": [
              ["Cisco Networking Academy", "https://www.netacad.com"],
              ["GNS3", "https://gns3.com"],
              ["EVE-NG", "https://www.eve-ng.net"]
            ],
            "tip": "Simulators teach configuration, not cabling or hardware failure. Pair lab time with reading about real failure modes."
          },
          {
            "t": "Wireshark: Reading Packets",
            "d": "The microscope of networking: capture traffic and read exactly what the machines said to each other.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Capture filters (BPF, applied before capture) vs display filters (applied after)",
              "Following TCP streams, reading handshakes, and spotting retransmissions and resets",
              "Essential display filters: dns, http, tcp.port==443, ip.addr==x"
            ],
            "do": [
              "Capture loading a website and follow the full TCP stream of one request",
              "Filter a DHCP exchange and label DORA packets",
              "Find a retransmission storm in a throttled capture and explain the cause"
            ],
            "tools": ["Wireshark", "tcpdump", "tshark"],
            "res": [
              ["Wireshark", "https://www.wireshark.org"]
            ],
            "tip": "Learn display filters before capture filters. A bad capture filter silently discards the evidence; a bad display filter just hides it temporarily."
          },
          {
            "t": "The Network CLI: IOS Basics",
            "d": "Speak router: the modes, the commands, and the habits that keep you from locking yourself out.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Modes: user EXEC, privileged EXEC, global config, interface config; what each lets you do",
              "Core commands: show ip interface brief, show ip route, show running-config, copy run start",
              "Safety habits: configure terminal discipline, reload in 10 before risky changes"
            ],
            "do": [
              "Navigate all modes on a lab router and set a hostname and banner",
              "Configure two interfaces with IPs and verify with show commands",
              "Practice `reload in 10` then a deliberately bad change, and watch the rollback save you"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "IOS"],
            "res": [
              ["Cisco Learning Network", "https://learningnetwork.cisco.com"],
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "The question mark is the best command in IOS. Type `?` at any prompt instead of guessing syntax from memory."
          },
          {
            "t": "Linux for Networking",
            "d": "The modern network runs on Linux: interfaces, routes, and namespaces from the shell.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "iproute2: ip addr, ip link, ip route replacing the deprecated ifconfig and route",
              "Network namespaces: lightweight virtual network stacks for testing topologies",
              "veth pairs and bridges: building virtual switches between namespaces"
            ],
            "do": [
              "Create two network namespaces linked by a veth pair and ping between them",
              "Add a bridge, attach both namespaces, and capture the traffic",
              "Write a bash script that builds and tears down a 3-node test topology"
            ],
            "tools": ["iproute2", "Linux network namespaces", "tcpdump"],
            "res": [
              ["FRRouting", "https://frrouting.org"]
            ],
            "tip": "If you only know IOS, learn iproute2 next. Cloud networking, containers, and automation all speak Linux, not Cisco."
          }
        ]
      },
      {
        "t": "Switching",
        "d": "How LANs really work: MAC learning, VLANs for segmentation, and spanning tree keeping loops away.",
        "lv": 1,
        "children": [
          {
            "t": "How Switches Learn: MAC Tables",
            "d": "Switches forward by MAC address, learning which port each address lives on: flooding, forwarding, filtering.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "MAC learning: source MAC to port mapping built from incoming frames",
              "Unknown unicast flooding and why the first packet to a host floods",
              "CAM table size limits and MAC flooding attacks"
            ],
            "do": [
              "On a lab switch, run `show mac address-table` and map entries to connected hosts",
              "Ping between two new hosts and watch the table populate",
              "Age out an entry and observe the re-flood on next contact"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "A switch with a full CAM table becomes a hub, flooding everything. That is both a failure mode and an attack (macof)."
          },
          {
            "t": "VLANs and Trunking",
            "d": "Split one switch into many virtual LANs: broadcast domains without buying more hardware.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "VLANs as separate broadcast domains; access ports vs trunk ports",
              "802.1Q tagging: the 4-byte tag that lets one link carry many VLANs",
              "Native VLAN, allowed VLAN lists, and voice VLANs"
            ],
            "do": [
              "Create VLANs 10, 20, 30, assign access ports, and verify isolation with pings",
              "Configure an 802.1Q trunk between two switches and prune unused VLANs",
              "Capture tagged frames in Wireshark and identify the VLAN ID"
            ],
            "tools": ["Cisco Packet Tracer", "Wireshark"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Change the native VLAN from 1 and prune trunks to only needed VLANs. VLAN hopping attacks live on lazy trunk defaults."
          },
          {
            "t": "STP: Spanning Tree Protocol",
            "d": "Redundant links create loops; spanning tree blocks the extras until they are needed.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The loop problem: broadcast storms and MAC table instability without STP",
              "Root bridge election, port roles (root, designated, blocked), and port states",
              "RSTP improvements and PortFast/BPDU guard for edge ports"
            ],
            "do": [
              "Build a triangle of switches, find the elected root bridge and blocked ports",
              "Enable PortFast on access ports and BPDU guard, then plug in a rogue switch to test",
              "Break a link and time how fast RSTP reconverges"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Set your root bridge priorities deliberately. The lowest MAC winning by accident puts the root in a wiring closet."
          },
          {
            "t": "Link Aggregation with LACP",
            "d": "Bundle physical links into one logical pipe: more bandwidth plus link-level redundancy.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "EtherChannel/LAG: 2-8 links acting as one; LACP negotiation vs static on",
              "Load distribution: hash of source/destination MAC or IP deciding per-flow placement",
              "Why one flow never exceeds one link: hashing is per-flow, not per-packet"
            ],
            "do": [
              "Bundle two links with LACP between switches and verify with show etherchannel summary",
              "Fail one member link and confirm traffic continues",
              "Test throughput of a single flow vs multiple flows across the bundle"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "iperf3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Mismatched LACP modes (active vs passive on both sides works; passive-passive does not) are the classic bundle that never forms."
          },
          {
            "t": "Inter-VLAN Routing",
            "d": "VLANs isolate; routing reconnects them selectively: router-on-a-stick vs Layer 3 switching.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Router-on-a-stick: subinterfaces with 802.1Q encapsulation, one physical link",
              "SVIs on multilayer switches: the production answer, routing at wire speed",
              "ACLs between VLANs: segmentation means nothing without policy"
            ],
            "do": [
              "Configure router-on-a-stick with three subinterfaces and verify inter-VLAN pings",
              "Convert to SVIs on a Layer 3 switch and compare",
              "Add an ACL allowing VLAN 10 to reach the server VLAN but not VLAN 30"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Router-on-a-stick is a lab topology. In production, route on the Layer 3 switch and keep the router for WAN."
          }
        ]
      },
      {
        "t": "Routing and WAN",
        "d": "How packets find their way across networks: from static routes to OSPF areas and internet-scale BGP.",
        "lv": 2,
        "children": [
          {
            "t": "Static vs Dynamic Routing",
            "d": "Hand-written routes for simple topologies; protocols that adapt when the network changes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Static routes, floating static routes with administrative distance, and default routes",
              "Administrative distance vs metric: how routers choose between competing routes",
              "When static wins: stub networks, single-homed sites, and default gateways"
            ],
            "do": [
              "Connect three routers with static routes and verify end-to-end pings",
              "Add a floating static backup route and fail the primary to test failover",
              "Read a routing table and explain every code (C, S, O, B) and its AD"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "FRRouting"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "A default route pointing the wrong way blackholes everything. Verify next-hop reachability before trusting any static route."
          },
          {
            "t": "OSPF: Link-State Routing",
            "d": "Every router knows the whole map: link-state advertisements, Dijkstra, and fast convergence.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Neighbor adjacencies: hello packets, DR/BDR election on multi-access networks",
              "LSAs flooding the link-state database; Dijkstra computing the shortest path tree",
              "Cost based on bandwidth; tuning with reference bandwidth on modern fast links"
            ],
            "do": [
              "Configure single-area OSPF on three routers and verify full adjacency",
              "Break a link and measure convergence time",
              "Change reference bandwidth and observe cost recalculation"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "FRRouting"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"],
              ["FRRouting", "https://frrouting.org"]
            ],
            "tip": "OSPF neighbors stuck in EXSTART usually means MTU mismatch. Check MTU before debugging anything fancier."
          },
          {
            "t": "OSPF Areas and LSAs",
            "d": "Scale OSPF beyond one area: backbone area 0, stub areas, and which LSAs cross boundaries.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why areas exist: limiting LSA flooding and SPF computation as networks grow",
              "Area types: standard, stub, totally stubby, NSSA; ABRs and ASBRs",
              "LSA types 1-7: router, network, summary, ASBR summary, external, NSSA external"
            ],
            "do": [
              "Build a three-area topology with area 0 as backbone and verify inter-area routes",
              "Convert an area to totally stubby and watch the routing table shrink",
              "Redistribute a static route and trace the Type 5 LSA through the areas"
            ],
            "tools": ["GNS3", "EVE-NG", "FRRouting"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "All areas must touch area 0, physically or via virtual link. A disconnected area is an island, and virtual links are technical debt."
          },
          {
            "t": "BGP: The Internet's Routing Protocol",
            "d": "Path-vector routing between autonomous systems: how the global internet agrees on routes.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "iBGP vs eBGP: inside an AS vs between ASes; why iBGP needs full mesh or route reflectors",
              "AS numbers (public vs private), BGP table, and prefix advertisement",
              "BGP states: idle to established; what keeps a session alive (keepalives, hold time)"
            ],
            "do": [
              "Configure eBGP between two ASes and advertise a prefix",
              "Verify with show ip bgp and trace the AS path",
              "Break the peering and observe route withdrawal"
            ],
            "tools": ["GNS3", "EVE-NG", "FRRouting", "BIRD"],
            "res": [
              ["FRRouting", "https://frrouting.org"],
              ["BGP tools (Hurricane Electric)", "https://bgp.he.net"]
            ],
            "tip": "BGP is slow to converge by design: stability beats speed at internet scale. Do not expect OSPF-like failover times."
          },
          {
            "t": "BGP Path Selection",
            "d": "When multiple paths exist, BGP's attribute ladder picks the winner: weight, local-pref, AS path, MED.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "The decision process order: weight, local preference, locally originated, AS path length, origin, MED",
              "Traffic engineering: local-pref for outbound, AS path prepending and MED for inbound",
              "Route filtering: prefix lists and why you never accept full tables without filters"
            ],
            "do": [
              "Influence outbound path with local-pref and confirm the change in the BGP table",
              "Prepend your AS to steer inbound traffic and verify from a looking glass",
              "Write a prefix filter rejecting RFC1918 and bogon prefixes from a peer"
            ],
            "tools": ["FRRouting", "BIRD", "RIPEstat"],
            "res": [
              ["FRRouting", "https://frrouting.org"],
              ["RIPE NCC", "https://www.ripe.net"]
            ],
            "tip": "A missing or wrong BGP filter once took down half the internet (look up the 2008 Pakistan Telecom incident). Filter everything, trust nothing."
          },
          {
            "t": "EIGRP Essentials",
            "d": "Cisco's advanced distance-vector protocol: fast convergence with DUAL, still common in enterprise.",
            "lv": 2,
            "time": "~4h",
            "tag": "opt",
            "learn": [
              "DUAL algorithm: feasible successors for loop-free backup paths and fast failover",
              "Metric from bandwidth and delay; named mode vs classic mode configuration",
              "Where EIGRP still lives: brownfield Cisco enterprises, being replaced by OSPF in new designs"
            ],
            "do": [
              "Configure named-mode EIGRP on three routers and verify neighbors",
              "Fail a link and watch the feasible successor take over instantly",
              "Summarize at a boundary and observe the topology table shrink"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "EIGRP is Cisco-proprietary history in most new designs. Learn it for the installed base and exams, default to OSPF for greenfield."
          },
          {
            "t": "NAT and PAT",
            "d": "Stretch IPv4 further: translating private addresses to public ones at the network edge.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Static NAT (1:1), dynamic NAT (pool), PAT/NAT overload (many:1 with ports)",
              "Inside local vs inside global: the address before and after translation",
              "NAT drawbacks: breaks end-to-end, complicates protocols embedding IPs (FTP, SIP)"
            ],
            "do": [
              "Configure PAT on an edge router and verify multiple inside hosts share one public IP",
              "Add a static NAT for a DMZ server and test inbound access",
              "Capture traffic on both sides and identify translated addresses"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "Wireshark"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "NAT is not a firewall. It hides addresses as a side effect; access control still needs explicit rules."
          },
          {
            "t": "SD-WAN and VRFs",
            "d": "Modern WAN: software-defined overlays over any transport, and virtual routing tables for tenant isolation.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "SD-WAN: centralized policy, zero-touch provisioning, active-active links with application-aware routing",
              "VRFs: separate routing tables on one device; VRF-lite vs MPLS L3VPN",
              "Route distinguishers and route targets: how overlapping customer address space stays separate"
            ],
            "do": [
              "Configure VRF-lite with two customers using overlapping 10.0.0.0/8 space",
              "Verify complete routing isolation between VRFs",
              "Sketch an SD-WAN migration from MPLS for a 5-site company"
            ],
            "tools": ["GNS3", "EVE-NG", "Cisco vManage lab"],
            "res": [
              ["Cisco", "https://www.cisco.com"]
            ],
            "tip": "SD-WAN does not fix bad underlay. Measure your internet links first; the overlay inherits every flaw of what runs beneath it."
          }
        ]
      },
      {
        "t": "Firewalls and VPNs",
        "d": "Control what crosses boundaries: firewall types, ACLs, and encrypted tunnels between sites and users.",
        "lv": 2,
        "children": [
          {
            "t": "Firewall Types and Stateful Inspection",
            "d": "From packet filters to next-gen: how stateful firewalls track connections and why it matters.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Generations: packet filter, stateful inspection, proxy, next-generation (app-aware, IPS, TLS inspection)",
              "Stateful tracking: connection tables allowing return traffic without explicit rules",
              "Zones and policies: trust levels (inside, outside, DMZ) with default-deny between them"
            ],
            "do": [
              "Build a zone-based policy: inside to outside allowed, outside to inside denied",
              "Watch the connection table populate during a browsing session",
              "Add a DMZ zone and allow only HTTPS from outside to the web server"
            ],
            "tools": ["pfSense", "OPNsense", "Cisco ASA lab", "iptables/nftables"],
            "res": [
              ["Cisco", "https://www.cisco.com"]
            ],
            "tip": "Default-deny with explicit allows is the only sane firewall posture. Default-allow with blocklists is a breach waiting for a new port."
          },
          {
            "t": "ACLs: Packet Filtering",
            "d": "Access control lists on routers and switches: numbered, named, standard, extended, and top-down evaluation.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Standard (source IP) vs extended (source, destination, protocol, port) ACLs",
              "Top-down first-match evaluation and the implicit deny at the end",
              "Placement: extended ACLs close to the source, standard close to the destination"
            ],
            "do": [
              "Write an extended ACL blocking telnet but allowing SSH to management",
              "Apply it inbound on the right interface and verify with connection attempts",
              "Log denied packets and review what legitimate traffic you caught"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Every ACL ends with an invisible deny-all. When traffic mysteriously dies, the implicit deny is guilty until proven innocent."
          },
          {
            "t": "IPsec Site-to-Site VPNs",
            "d": "Encrypted tunnels between offices over the internet: IKE phases, ESP, and crypto maps.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "IKEv1/v2 phases: phase 1 builds the secure channel, phase 2 negotiates the IPsec SAs",
              "ESP vs AH: encryption plus integrity vs integrity only; tunnel vs transport mode",
              "Crypto ACLs defining interesting traffic; NAT traversal for peers behind NAT"
            ],
            "do": [
              "Build an IPsec tunnel between two lab routers with pre-shared keys",
              "Verify with show crypto isakmp sa and show crypto ipsec sa",
              "Capture the tunnel setup and identify IKE vs ESP packets"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "strongSwan", "Wireshark"],
            "res": [
              ["strongSwan", "https://www.strongswan.org"],
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Most IPsec failures are phase 1: mismatched pre-shared key, IKE version, or peer IP. Verify phase 1 before touching phase 2."
          },
          {
            "t": "GRE Tunnels",
            "d": "Encapsulate anything in anything: GRE for carrying routing protocols and non-IP traffic over IP.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "GRE encapsulation: wrapping packets (including multicast) in a GRE/IP header",
              "Why GRE alone is not secure: no encryption, pair with IPsec (GRE over IPsec)",
              "Running OSPF over GRE tunnels between sites"
            ],
            "do": [
              "Build a GRE tunnel between two routers and route OSPF across it",
              "Verify multicast hellos traverse the tunnel",
              "Add IPsec protection to the GRE tunnel and confirm encryption"
            ],
            "tools": ["GNS3", "Cisco Packet Tracer"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Watch MTU on tunnels: GRE adds 24 bytes, IPsec more. Set TCP MSS clamping or face mysterious hangs on large transfers."
          },
          {
            "t": "Remote Access VPNs: SSL and WireGuard",
            "d": "Connect users, not sites: client VPN options from legacy SSL VPN to modern WireGuard.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "SSL/TLS VPNs: clientless portal vs full tunnel clients",
              "WireGuard: minimal codebase, modern crypto, kernel-level speed; why it won",
              "Split tunneling vs full tunnel: what goes through the VPN and why it matters for bandwidth"
            ],
            "do": [
              "Deploy a WireGuard server and connect two clients with key pairs",
              "Configure split tunneling for corporate subnets only",
              "Compare WireGuard throughput against an OpenVPN setup"
            ],
            "tools": ["WireGuard", "OpenVPN", "Tailscale"],
            "res": [
              ["WireGuard", "https://www.wireguard.com"]
            ],
            "tip": "Full-tunnel everything is simple but routes Netflix through your datacenter. Split-tunnel corporate traffic, send the rest direct."
          },
          {
            "t": "IDS/IPS and Zero Trust Basics",
            "d": "Detect and prevent intrusions inline, and start thinking beyond perimeter security.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "IDS (detect, out-of-band) vs IPS (prevent, inline); signature vs anomaly detection",
              "Tuning: suppressing false positives without blinding yourself to real attacks",
              "Zero Trust principles: verify explicitly, least privilege, assume breach; microsegmentation"
            ],
            "do": [
              "Deploy Suricata in IDS mode and trigger test alerts with known malicious traffic",
              "Tune one noisy rule and document the suppression",
              "Sketch a microsegmentation plan for a flat /16 that should not be flat"
            ],
            "tools": ["Suricata", "Snort", "Zeek"],
            "res": [
              ["CISA Zero Trust Maturity Model", "https://www.cisa.gov/zero-trust-maturity-model"]
            ],
            "tip": "An IPS in blocking mode with untuned rules is a self-inflicted DoS. Run in detect-only until the false positive rate is near zero."
          }
        ]
      },
      {
        "t": "Reliability and Services",
        "d": "Keep the network up and fair: first-hop redundancy, load balancing, QoS, and IPv6.",
        "lv": 2,
        "children": [
          {
            "t": "High Availability: HSRP and VRRP",
            "d": "One virtual gateway backed by two routers: first-hop redundancy so a router failure is invisible.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Virtual IP and virtual MAC shared by the group; active/standby election by priority",
              "HSRP (Cisco) vs VRRP (open standard) vs GLBP (load balancing variant)",
              "Preemption, tracking interfaces, and authentication between peers"
            ],
            "do": [
              "Configure HSRP on two routers with a virtual gateway IP",
              "Fail the active router and measure client-visible downtime",
              "Add interface tracking so a WAN failure triggers failover"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "FRRouting"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Without preemption, the better router never retakes control after recovery. Decide deliberately whether you want preemption or stability."
          },
          {
            "t": "Load Balancing Algorithms",
            "d": "Spread traffic across servers intelligently: round robin, least connections, and health-aware choices.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Algorithms: round robin, weighted, least connections, least response time, IP hash for persistence",
              "Health checks: active probes removing dead pool members automatically",
              "Layer 4 vs Layer 7 balancing and session persistence (sticky sessions)"
            ],
            "do": [
              "Set up HAProxy with three backends and test round robin distribution",
              "Kill one backend and confirm traffic redistributes",
              "Switch to least-connections and observe behavior under uneven load"
            ],
            "tools": ["HAProxy", "NGINX", "curl"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Round robin assumes equal servers. With mixed hardware, weighted or least-connections prevents the small server from drowning."
          },
          {
            "t": "QoS: Shaping and Prioritization",
            "d": "When bandwidth is scarce, decide who suffers: classification, marking, queuing, and policing.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Classification and marking: DSCP values in the IP header, trust boundaries",
              "Queuing: priority queuing for voice, CBWFQ for fair sharing; shaping vs policing",
              "Where QoS matters: WAN edges and congested links, not everywhere"
            ],
            "do": [
              "Mark voice traffic EF and configure priority queuing on a congested lab link",
              "Saturate the link with bulk traffic and measure voice quality with and without QoS",
              "Configure policing on a guest VLAN to cap its bandwidth"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "iperf3"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "QoS only helps on links that congest. Applying elaborate policies to idle gigabit links is configuration theater."
          },
          {
            "t": "IPv6 Addressing and Migration",
            "d": "128-bit addresses are the future that keeps arriving: addressing, SLAAC, and dual-stack migration.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Address format, compression rules, prefix lengths; global unicast, link-local, unique local",
              "SLAAC vs DHCPv6: stateless autoconfiguration and why there is no NAT in IPv6",
              "Migration: dual-stack as the pragmatic path, tunneling as the bridge"
            ],
            "do": [
              "Configure IPv6 addresses and verify with compressed and full notation",
              "Set up SLAAC on a segment and watch hosts self-configure",
              "Build a dual-stack lab and test v4/v6 failover behavior"
            ],
            "tools": ["Cisco Packet Tracer", "GNS3", "Wireshark"],
            "res": [
              ["RIPE NCC", "https://www.ripe.net"]
            ],
            "tip": "Do not NAT IPv6. The address space removes the need, and NAT66 breaks the end-to-end model IPv6 was designed for."
          }
        ]
      },
      {
        "t": "Network Automation",
        "d": "Stop configuring boxes by hand: Python, Ansible, and infrastructure as code for networks.",
        "lv": 3,
        "children": [
          {
            "t": "Python for Networking: Netmiko",
            "d": "SSH to a fleet at once: Netmiko turns CLI drudgery into scripts.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Netmiko connection handling across vendors: device types, enable mode, config mode",
              "Sending show commands and parsing output; pushing config sets idempotently",
              "Scaling patterns: threading for dozens of devices, error handling per device"
            ],
            "do": [
              "Write a script that backs up running configs from five lab devices",
              "Push a standardized NTP and banner config to all devices",
              "Add threading and compare runtime against sequential execution"
            ],
            "tools": ["Python", "Netmiko", "GNS3"],
            "res": [
              ["Netmiko", "https://github.com/ktbyers/netmiko"]
            ],
            "tip": "Parse structured output (TextFSM, genie) instead of regexing raw CLI text. Screen-scraping breaks on the next firmware update."
          },
          {
            "t": "NAPALM and Multi-Vendor APIs",
            "d": "One Python API across vendors: NAPALM abstracts getters and config replace for heterogeneous networks.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "NAPALM's unified getters: facts, interfaces, BGP neighbors, regardless of vendor",
              "Config merge vs replace with diff and confirmed commit semantics",
              "When abstraction leaks: vendor quirks you still need to know"
            ],
            "do": [
              "Use NAPALM getters to inventory interfaces across Cisco and Arista lab devices",
              "Push a config change with diff preview and rollback on failure",
              "Compare the same task in Netmiko vs NAPALM and note the difference"
            ],
            "tools": ["Python", "NAPALM", "GNS3"],
            "res": [
              ["NAPALM docs", "https://napalm.readthedocs.io"]
            ],
            "tip": "NAPALM covers common operations well and edge cases poorly. Know where the abstraction ends before you depend on it in production."
          },
          {
            "t": "Ansible for Network Config",
            "d": "Declarative, agentless config management: playbooks that converge device configs to the desired state.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Inventory, playbooks, roles; network modules (ios_config, eos_config) and resource modules",
              "Idempotency: running the same playbook twice changes nothing the second time",
              "Vault for secrets: never commit enable passwords or API tokens in plaintext"
            ],
            "do": [
              "Write an inventory for your lab and a playbook enforcing baseline config",
              "Run it twice and confirm the second run reports zero changes",
              "Encrypt secrets with ansible-vault and re-run successfully"
            ],
            "tools": ["Ansible", "ansible-vault", "GNS3"],
            "res": [
              ["Ansible documentation", "https://docs.ansible.com"]
            ],
            "tip": "Test every playbook against the lab before production. Ansible does exactly what you wrote, including the mistakes, at machine speed."
          },
          {
            "t": "Terraform and Infrastructure as Code",
            "d": "Version your network like code: plan, apply, and review every change as a diff.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Providers for network gear and cloud networking (AWS VPC, Cloudflare, ACI)",
              "State files, plan/apply workflow, and why state locking matters",
              "Modules for reusable patterns: a standard site build as one module call"
            ],
            "do": [
              "Write Terraform building a complete AWS VPC: subnets, routes, NAT, security groups",
              "Run plan, review the diff, then apply and verify",
              "Refactor into a module and instantiate it for dev and prod"
            ],
            "tools": ["Terraform", "OpenTofu", "AWS provider"],
            "res": [
              ["Terraform", "https://www.terraform.io"]
            ],
            "tip": "Never hand-edit what Terraform manages. Drift between console clicks and state files is how applies start destroying things."
          },
          {
            "t": "YANG, NETCONF and RESTCONF",
            "d": "Structured device management: models describing config, and protocols replacing screen scraping.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "YANG models: machine-readable definitions of what a device can configure",
              "NETCONF (XML over SSH, transactions) vs RESTCONF (REST-like over HTTPS)",
              "How automation tools consume models: the path from model to API call"
            ],
            "do": [
              "Browse a device's YANG models and find the interface configuration tree",
              "Push an interface description via RESTCONF with curl",
              "Compare a NETCONF edit-config against the equivalent CLI commands"
            ],
            "tools": ["Cisco IOS-XE", "curl", "pyang"],
            "res": [
              ["Cisco", "https://www.cisco.com"]
            ],
            "tip": "YANG models vary by vendor and even by OS version. Validate the model against your actual devices before building automation on it."
          }
        ]
      },
      {
        "t": "Operations at Scale",
        "d": "Run networks professionally: methodical troubleshooting, monitoring, design, and the certs that prove it.",
        "lv": 2,
        "children": [
          {
            "t": "Troubleshooting Methodology",
            "d": "A repeatable process beats genius: define, gather, hypothesize, test, resolve, document.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The six steps: identify the problem, establish a theory, test, plan, implement, verify and document",
              "Bottom-up vs top-down vs divide-and-conquer: choosing the approach by symptom",
              "Change control: knowing what changed recently is half of every diagnosis"
            ],
            "do": [
              "Take a broken lab topology and work it strictly bottom-up, narrating each step",
              "Write a post-mortem for the outage including timeline and root cause",
              "Build a personal checklist you will run before escalating any ticket"
            ],
            "tools": ["ping", "traceroute", "Wireshark", "Ticketing system"],
            "res": [
              ["NetworkLessons", "https://networklessons.com"]
            ],
            "tip": "Change one thing at a time. Changing three variables and seeing improvement teaches you nothing about what actually fixed it."
          },
          {
            "t": "Troubleshooting Tools in Practice",
            "d": "The daily toolkit wielded properly: ping, traceroute, dig, and reading what they really tell you.",
            "lv": 2,
            "time": "~3h",
            "badge": "LAB",
            "learn": [
              "ping: reachability and loss patterns; traceroute/tracert: path and where it breaks",
              "mtr: continuous path analysis combining both; dig/nslookup for the DNS layer",
              "Reading output critically: asterisks in traceroute are often filtered ICMP, not failure"
            ],
            "do": [
              "Diagnose five broken scenarios using only ping, traceroute, and dig",
              "Run mtr during a simulated loss event and pinpoint the lossy hop",
              "Document a decision tree: which tool first for no-connectivity vs slow vs intermittent"
            ],
            "tools": ["ping", "traceroute", "mtr", "dig", "nslookup", "curl"],
            "res": [
              ["Cloudflare Learning Center", "https://www.cloudflare.com/learning/"]
            ],
            "tip": "Traceroute asterisks usually mean a router deprioritizes ICMP, not that it is down. Confirm with TCP-based traces before declaring a hop dead."
          },
          {
            "t": "Network Monitoring: SNMP and NetFlow",
            "d": "Know what your network is doing right now: polling device health and analyzing traffic flows.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "SNMP: MIBs, OIDs, polling vs traps; SNMPv3 for authenticated, encrypted management",
              "NetFlow/sFlow/IPFIX: who talked to whom, on what port, how much; the basis of traffic analysis",
              "Baselines: you cannot spot abnormal without knowing normal"
            ],
            "do": [
              "Enable SNMPv3 on a lab device and poll interface counters",
              "Configure NetFlow export and identify top talkers in a flow analyzer",
              "Set thresholds on interface errors and bandwidth, then trigger an alert"
            ],
            "tools": ["SNMP", "NetFlow", "LibreNMS", "ntopng"],
            "res": [
              ["LibreNMS", "https://www.librenms.org"]
            ],
            "tip": "Monitor interface errors and discards, not just up/down. A link that is up but erroring is worse than one that fails cleanly."
          },
          {
            "t": "Observability Stack: Prometheus and Grafana",
            "d": "Modern metrics and dashboards: scrape everything, alert on symptoms, visualize for humans.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Prometheus: pull model, PromQL, exporters (SNMP exporter for network gear)",
              "Grafana dashboards: golden signals for network (throughput, errors, latency, saturation)",
              "Alertmanager: routing, silencing, and alert hygiene to prevent fatigue"
            ],
            "do": [
              "Deploy Prometheus with the SNMP exporter scraping your lab devices",
              "Build a Grafana dashboard with per-interface throughput and error rates",
              "Write an alert on rising interface errors with a runbook link"
            ],
            "tools": ["Prometheus", "Grafana", "SNMP exporter", "Alertmanager"],
            "res": [
              ["Prometheus", "https://prometheus.io"],
              ["Grafana", "https://grafana.com"]
            ],
            "tip": "Every alert needs a runbook link and an owner. An alert nobody knows how to handle is just noise that trains people to ignore paging."
          },
          {
            "t": "Network Design: Two-Tier to Spine-Leaf",
            "d": "Design for growth: collapsed core for small sites, three-tier for campuses, spine-leaf for data centers.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Two-tier (collapsed core) vs three-tier (core, distribution, access): when each fits",
              "Spine-leaf: every leaf one hop from every other via spines; predictable latency, easy scaling",
              "Design principles: hierarchy, modularity, redundancy without complexity, documented addressing"
            ],
            "do": [
              "Design a 200-user office network: topology, VLANs, addressing, and redundancy",
              "Design a small data center spine-leaf with VXLAN overlay",
              "Present both designs and defend your choices against cost and complexity questions"
            ],
            "tools": ["draw.io", "GNS3", "EVE-NG"],
            "res": [
              ["Cisco", "https://www.cisco.com"]
            ],
            "tip": "The best design is the simplest one that meets requirements plus one growth step. Clever topologies become unmaintainable at 2 AM."
          },
          {
            "t": "Certifications: CCNA and Beyond",
            "d": "Prove the skills: CCNA as the foundation, then CCNP, vendor certs, and cloud networking.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "CCNA: the industry baseline covering everything in this roadmap's first half",
              "Next steps: CCNP Enterprise, JNCIA, cloud networking certs (AWS Advanced Networking)",
              "How to study: labs over books, practice exams, and scheduling the exam to force the deadline"
            ],
            "do": [
              "Take a CCNA practice exam cold and map your weak areas to this roadmap",
              "Build a 12-week study plan with weekly lab goals",
              "Book the exam date: a deadline is the most effective study tool"
            ],
            "tools": ["Cisco Learning Network", "Boson ExSim", "Packet Tracer"],
            "res": [
              ["Cisco Learning Network", "https://learningnetwork.cisco.com"],
              ["CompTIA Network+", "https://www.comptia.org"]
            ],
            "tip": "Certifications open doors but labs keep jobs. Study for the exam with hands-on practice, not just question memorization."
          }
        ]
      }
    ]
  }
});
