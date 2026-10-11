/* Atlas roadmap data: Digital Forensics (digital-forensics) */
ROADMAPS.push({
  "id": "digital-forensics",
  "title": "Digital Forensics",
  "icon": "💾",
  "color": "#fbbf24",
  "desc": "Recover the truth from disks, memory, and phones: imaging, carving, timelines, and courtroom-ready evidence.",
  "kind": "skill",
  "root": {
    "t": "Digital Forensics",
    "d": "From first principles to full DFIR cases: collect cleanly, analyze deeply, report defensibly.",
    "children": [
      {
        "t": "Forensics Fundamentals",
        "d": "The principles every analysis stands on: volatility, integrity, and the rules of evidence.",
        "lv": 1,
        "children": [
          {
            "t": "What Digital Forensics Is",
            "d": "The science of finding, preserving, and explaining digital evidence so it holds up in court.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The four forensic phases: identification, collection, examination, and analysis, then reporting",
              "Forensic soundness: every action must be documented, repeatable, and preserve the original evidence",
              "Where forensics is used: criminal cases, incident response, fraud, e-discovery, and data recovery"
            ],
            "do": [
              "Write the four phases in your own words with one example action per phase",
              "Find a real court case where digital evidence was central and note how it was collected",
              "List three ways a careless analyst can destroy evidence before analysis even starts"
            ],
            "tools": ["Sleuth Kit"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"],
              ["SANS", "https://www.sans.org"]
            ]
          },
          {
            "t": "The Forensic Process Model",
            "d": "NIST SP 800-86 gives the field its shared playbook: learn to think in its phases.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The NIST model: collection, examination, analysis, reporting, and how they feed each other",
              "Why the model matters: it gives your work a defensible structure an opposing expert can follow",
              "Adapting the model: triage vs full forensic examination in time-pressured incident response"
            ],
            "do": [
              "Map a hypothetical laptop seizure onto each NIST phase with concrete actions",
              "Write the one-sentence purpose of each phase without looking at your notes",
              "Compare the NIST model with the SANS PICERL incident response lifecycle"
            ],
            "tools": [],
            "res": [
              ["NIST SP 800-86", "https://csrc.nist.gov/pubs/sp/800/86/final"]
            ]
          },
          {
            "t": "Order of Volatility",
            "d": "Collect the fastest-dying evidence first, or lose it forever.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The volatility ladder: registers and cache, RAM, network state, running processes, disk, backups",
              "Why live systems are collected before power-off: encryption keys and fileless malware live in RAM",
              "The trade-off: live collection changes the system, so every command must be logged"
            ],
            "do": [
              "Write the volatility order from memory and justify each position",
              "List what evidence dies the moment a running machine is powered off",
              "Plan a collection sequence for a running server you suspect is compromised"
            ],
            "tools": ["Volatility 3", "FTK Imager"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"]
            ],
            "tip": "Beginners pull the plug first and image later. If the disk is encrypted or the malware is fileless, that single action just destroyed your best evidence."
          },
          {
            "t": "Hashing & Evidence Integrity",
            "d": "MD5, SHA-1, SHA-256: the fingerprints that prove your copy is the evidence.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "How cryptographic hashes work: same input, same output; one changed bit, completely different hash",
              "Acquisition hashing: hash the source and the image, compare, and record both in your notes",
              "MD5 vs SHA-256 in forensics: MD5 for legacy compatibility, SHA-256 for integrity you can defend"
            ],
            "do": [
              "Hash a file with md5sum and sha256sum, flip one byte, and hash again",
              "Hash an image file before and after copying it and verify the hashes match",
              "Write the hashing step into a personal acquisition checklist"
            ],
            "tools": ["sha256sum", "md5sum", "HashCalc"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ],
            "tip": "Hash at the moment of acquisition, not later. A hash taken after analysis proves nothing about the state you received."
          },
          {
            "t": "Write Blockers & Imaging Discipline",
            "d": "Never touch the original. Work on a verified copy, every single time.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What write blockers do: hardware or software that intercepts every write to the evidence drive",
              "Why mounting a suspect drive normally is catastrophic: the OS writes timestamps and journals on mount",
              "The golden rule: original stays sealed, analysis happens on the image, hashes prove they match"
            ],
            "do": [
              "Enable software write-blocking on a Linux test setup and verify writes are blocked",
              "Mount a test image read-only and list what a normal mount would have changed",
              "Write your evidence-handling SOP: seal, label, hash, image, verify, then analyze"
            ],
            "tools": ["Write blockers", "dcfldd"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ]
          },
          {
            "t": "Chain of Custody & Documentation",
            "d": "Who touched the evidence, when, and what they did: the paper trail that makes evidence real.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Chain of custody contents: item ID, description, hashes, who handled it, when, where, and why",
              "Contemporaneous notes: written during the work, not reconstructed from memory afterward",
              "Why documentation decides cases: unbroken chains admit evidence, gaps get it excluded"
            ],
            "do": [
              "Create a chain-of-custody form and fill it for a USB stick you image in practice",
              "Take contemporaneous notes during a 30-minute analysis task and review their quality",
              "Find a case where broken chain of custody hurt the prosecution and summarize it"
            ],
            "tools": ["Chain of custody forms", "Case notes template"],
            "res": [
              ["NIST SP 800-86", "https://csrc.nist.gov/pubs/sp/800/86/final"]
            ],
            "tip": "Undocumented work did not happen, legally speaking. If you analyzed it but did not write it down with a timestamp, a court treats it as if you never did."
          }
        ]
      },
      {
        "t": "Acquisition & Imaging",
        "d": "Bit-by-bit copies of storage: the first and most fragile forensic operation.",
        "lv": 1,
        "children": [
          {
            "t": "Bit-by-Bit Imaging with dd",
            "d": "The classic Linux imaging command: powerful, unforgiving, essential.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "How dd works: input file, output file, block size, and why if and of mixups destroy data",
              "dcfldd and dc3dd: forensic dd variants with built-in hashing and progress output",
              "Verifying the image: hash the source and image, compare, and handle read errors with noerror/sync"
            ],
            "do": [
              "Image a USB stick with dd using status=progress and record the exact command",
              "Re-run the imaging with dcfldd to get hashes generated during acquisition",
              "Verify source and image hashes match and log the result in your case notes"
            ],
            "tools": ["dd", "dcfldd", "dc3dd"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ],
            "tip": "dd's nickname is 'disk destroyer' for a reason: if and of are one transposition apart. Triple-check the command before pressing enter, every time."
          },
          {
            "t": "FTK Imager Acquisition",
            "d": "The Windows standard for creating and previewing forensic images.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "FTK Imager workflows: physical drive, logical drive, and memory acquisition modes",
              "Creating images with verification: hash on completion and the verification report it produces",
              "Preview mode: browsing a suspect drive's contents without altering it"
            ],
            "do": [
              "Create a forensic image of a test USB drive with FTK Imager",
              "Generate and save the verification report with its hash values",
              "Use preview mode to browse a drive and confirm no writes occurred"
            ],
            "tools": ["FTK Imager"],
            "res": [
              ["FTK Imager", "https://www.exterro.com/digital-forensics-software/ftk-imager"]
            ]
          },
          {
            "t": "Raw vs E01 Image Formats",
            "d": "Choose your container wisely: raw is simple, E01 carries metadata and integrity.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Raw (dd) images: byte-for-byte copies, universally readable, no built-in integrity data",
              "E01 (Expert Witness Format): compressed, segmented, with embedded hashes and case metadata",
              "Conversion and mounting: moving between formats without breaking hash integrity"
            ],
            "do": [
              "Create both raw and E01 images of the same test drive and compare sizes",
              "Inspect the metadata stored inside an E01 with a viewer",
              "Convert an E01 to raw, re-hash, and confirm the data is identical"
            ],
            "tools": ["FTK Imager", "ewf-tools", "dd"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ]
          },
          {
            "t": "Live Acquisition & Triage",
            "d": "The machine is running and the clock is ticking: collect RAM and volatile state first.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Live collection priorities: memory dump, network connections, running processes, then disk",
              "Memory acquisition tools: WinPmem and Magnet RAM Capture on Windows, LiME on Linux",
              "Triage mindset: enough evidence to scope the incident now, full imaging for the deep dive later"
            ],
            "do": [
              "Capture a memory image of a test VM with a RAM capture tool",
              "List running processes and network connections before and after the capture",
              "Write a live-triage checklist ordered by the order of volatility"
            ],
            "tools": ["WinPmem", "Magnet RAM Capture", "FTK Imager"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"]
            ],
            "tip": "Every live-collection command alters memory slightly. Document the exact commands and their order so the contamination is known, not hidden."
          },
          {
            "t": "Enterprise Collection at Scale",
            "d": "Velociraptor and KAPE: collecting from hundreds of endpoints without leaving your desk.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Velociraptor: agent-based hunting and collection across an entire fleet from one console",
              "KAPE: targeted artifact collection (triage packages) for fast Windows evidence gathering",
              "Scaling concerns: bandwidth, endpoint impact, and prioritizing collection when everything is on fire"
            ],
            "do": [
              "Deploy Velociraptor on two lab VMs and run a process-listing hunt",
              "Run a KAPE triage target against a test machine and inspect the output",
              "Design a collection plan for a 50-endpoint ransomware scenario with priorities"
            ],
            "tools": ["Velociraptor", "KAPE"],
            "res": [
              ["Velociraptor Docs", "https://docs.velociraptor.app"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Disk & Filesystem Forensics",
        "d": "Partitions, filesystems, and deleted data: where files live and where they hide.",
        "lv": 2,
        "children": [
          {
            "t": "Partitions & Filesystems",
            "d": "GPT vs MBR, NTFS vs ext4 vs APFS: read the map before searching the territory.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Partition schemes: MBR's limits and GPT's protective structures, and how to spot tampering",
              "Filesystem roles: NTFS, ext4, APFS, FAT32, and what each records about files",
              "Sleuth Kit CLI: mmls for partitions, fsstat for filesystem details on an image"
            ],
            "do": [
              "Run mmls on a test image and identify every partition and its type",
              "Use fsstat to report filesystem details for one partition",
              "Compare the same USB stick formatted as FAT32 vs NTFS and note artifact differences"
            ],
            "tools": ["Sleuth Kit", "mmls", "fsstat"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ]
          },
          {
            "t": "NTFS Internals & the $MFT",
            "d": "The Master File Table records everything about every file: learn to read it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "$MFT structure: one record per file with attributes for names, timestamps, and data runs",
              "Resident vs non-resident data: small files live inside the MFT record itself",
              "Deleted file traces: MFT records persist after deletion until overwritten, with slack space intact"
            ],
            "do": [
              "Parse the $MFT from a test image with a parser and read ten records",
              "Delete files on a test volume, then recover their MFT records",
              "Find a resident file's content directly inside its MFT record"
            ],
            "tools": ["Sleuth Kit", "MFTECmd", "Autopsy"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"],
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ]
          },
          {
            "t": "File Signatures & Magic Numbers",
            "d": "Extensions lie. Headers do not: identify files by their first bytes.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Magic numbers: JPEG starts FF D8 FF, PNG 89 50 4E 47, ZIP/PDF/DOCX share 50 4B 03 04",
              "Why it matters: attackers rename executables to .jpg; the header still says MZ",
              "The file command and hex editors for quick signature checks"
            ],
            "do": [
              "Rename five files to wrong extensions and identify each with the file command",
              "Open a JPEG and an EXE in a hex editor and compare their first 16 bytes",
              "Memorize the eight most common signatures and test yourself"
            ],
            "tools": ["file", "HxD", "xxd"],
            "res": [
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ]
          },
          {
            "t": "File Carving",
            "d": "Recover files from raw bytes when the filesystem is gone: headers, footers, and patience.",
            "lv": 2,
            "time": "~4h",
            "badge": "LAB",
            "learn": [
              "How carving works: scanning for file headers and footers without any filesystem metadata",
              "PhotoRec, foremost, and scalpel: signature-based recovery and their config files",
              "Carving limits: fragmented files carve badly, and false positives are part of the job"
            ],
            "do": [
              "Delete photos from a test USB stick, then carve them back with PhotoRec",
              "Carve a disk image with foremost and categorize the recovered files",
              "Compare carve results against the original files to measure what survived"
            ],
            "tools": ["PhotoRec", "foremost", "scalpel"],
            "res": [
              ["PhotoRec", "https://www.cgsecurity.org/wiki/PhotoRec"]
            ],
            "tip": "Carving recovers content, not names or dates. A carved photo with no filename is still evidence, but do not invent metadata the carve did not give you."
          },
          {
            "t": "Deleted File Recovery",
            "d": "Deletion removes the pointer, not the data: recover what the OS pretends is gone.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What deletion actually does on NTFS, ext4, and FAT: unlinked inodes and freed clusters",
              "The Recycle Bin: $Recycle.Bin metadata preserves original paths and deletion times",
              "Recovery windows: why quick action and write-blocking decide what survives"
            ],
            "do": [
              "Delete files on a test volume and recover them with Autopsy",
              "Examine $Recycle.Bin metadata to reconstruct deletion timestamps",
              "Overwrite part of a deleted file's clusters and observe what becomes unrecoverable"
            ],
            "tools": ["Autopsy", "Sleuth Kit"],
            "res": [
              ["Autopsy", "https://www.autopsy.com"]
            ]
          },
          {
            "t": "Autopsy: End-to-End Case Walkthrough",
            "d": "The open-source forensic platform: ingest an image and work a full case in one UI.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Case setup and ingest modules: hash lookup, keyword search, EXIF, and file type ID",
              "Navigating results: timeline view, communications, geolocation, and tagged interesting items",
              "Reporting: generating case reports with hashes and tagged evidence for handoff"
            ],
            "do": [
              "Create a case in Autopsy and ingest a practice disk image with all modules",
              "Tag ten interesting items across at least three artifact categories",
              "Generate the HTML case report and verify the hashes it contains"
            ],
            "tools": ["Autopsy"],
            "res": [
              ["Autopsy", "https://www.autopsy.com"],
              ["Sleuth Kit", "https://www.sleuthkit.org"]
            ],
            "tip": "Autopsy finds a lot, including a lot of noise. Beginners report everything; analysts triage, verify, and report only what answers the case questions."
          }
        ]
      },
      {
        "t": "Windows Artifact Analysis",
        "d": "The Windows crime scene: registry, logs, and execution traces that tell the story.",
        "lv": 2,
        "children": [
          {
            "t": "Windows Registry Forensics",
            "d": "The registry remembers: installed software, USB devices, and user activity.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Hive anatomy: SAM, SYSTEM, SOFTWARE, NTUSER.DAT, and where each lives on disk",
              "Key artifacts: USB device history, installed programs, autoruns, and recently accessed files",
              "Deleted registry data: unallocated cells in hives can still yield old values"
            ],
            "do": [
              "Mount a test image's registry hives and list USB devices ever connected",
              "Find autorun entries and map each to a persistence mechanism",
              "Extract a user's recent documents from NTUSER.DAT"
            ],
            "tools": ["RegRipper", "Registry Explorer", "Autopsy"],
            "res": [
              ["RegRipper", "https://github.com/keydet89/RegRipper3.0"],
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"]
            ]
          },
          {
            "t": "RegRipper & Eric Zimmerman Tools",
            "d": "The analyst's power tools: parse hives, prefetch, and logs in seconds.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "RegRipper plugins: one plugin per artifact, run in batches against a hive",
              "EZ Tools suite: MFTECmd, PECmd, EvtxECmd, and the rest, with consistent CSV output",
              "Tool validation: cross-checking one tool's output against another before trusting it"
            ],
            "do": [
              "Run a full RegRipper plugin set against a test SYSTEM hive and triage the output",
              "Parse an $MFT with MFTECmd and filter for executables created last week",
              "Cross-check a finding between two different tools and document agreement"
            ],
            "tools": ["RegRipper", "MFTECmd", "PECmd", "EvtxECmd"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"],
              ["RegRipper", "https://github.com/keydet89/RegRipper3.0"]
            ]
          },
          {
            "t": "Windows Event Logs",
            "d": "The system's diary: logons, process creation, and the attacker's footprints.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Key logs: Security (4624/4625 logons, 4688 process creation), System, and PowerShell operational",
              "Event IDs that matter in incidents: 4624 vs 4625, 4688, 7045 service installs, 4104 script blocks",
              "Log tampering: cleared logs (1102) and gaps are themselves evidence"
            ],
            "do": [
              "Parse Security.evtx from a test image and list all successful logons with times",
              "Hunt for event 4688 entries showing suspicious parent-child process pairs",
              "Check for event 1102 or suspicious gaps that suggest log clearing"
            ],
            "tools": ["EvtxECmd", "Event Viewer", "Autopsy"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"]
            ],
            "tip": "Event logs are only as good as the audit policy that created them. No 4688 events means process creation was never logged, not that nothing ran."
          },
          {
            "t": "Prefetch, Amcache & Execution Artifacts",
            "d": "Proof a program ran: what executed, when, and how many times.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Prefetch files: execution count, last run times, and files touched by each program",
              "Amcache and Shimcache: application inventory with first-execution timestamps",
              "UserAssist: GUI program execution tracked per user with run counts and focus time"
            ],
            "do": [
              "Parse prefetch from a test image with PECmd and list the top executed programs",
              "Find the first-execution timestamp of a specific application in Amcache",
              "Correlate a prefetch entry with its Shimcache record for the same binary"
            ],
            "tools": ["PECmd", "AmcacheParser", "Autopsy"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"]
            ]
          },
          {
            "t": "Browser Artifacts",
            "d": "History, downloads, and sessions: reconstructing what the user did online.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Chrome and Edge: History SQLite databases, download records, and login data locations",
              "Firefox: places.sqlite and session restore as activity timelines",
              "Private browsing limits: what survives (downloads, DNS cache, pagefile) and what does not"
            ],
            "do": [
              "Extract and query a test Chrome History database with SQL",
              "Reconstruct a download timeline: file, source URL, and timestamp",
              "List what private-mode artifacts remain recoverable on a test profile"
            ],
            "tools": ["DB Browser for SQLite", "Autopsy", "Hindsight"],
            "res": [
              ["Autopsy", "https://www.autopsy.com"]
            ]
          },
          {
            "t": "USN Journal & Shellbags",
            "d": "Deep NTFS traces: every file change and every folder the user ever opened.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "USN Journal: a running log of file creations, renames, and deletions on NTFS volumes",
              "Shellbags: registry records of folders browsed, including deleted and external ones",
              "LNK files: shortcuts that preserve target paths, MAC times, and volume serials"
            ],
            "do": [
              "Parse the USN journal from a test image and find a deleted file's rename chain",
              "Extract shellbag entries showing folders on a USB device no longer present",
              "Analyze a LNK file to recover its target's original path and timestamps"
            ],
            "tools": ["MFTECmd", "ShellBags Explorer", "LECmd"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"]
            ]
          }
        ]
      },
      {
        "t": "Memory Forensics with Volatility",
        "d": "RAM never lies the way disks do: processes, injections, and keys caught live.",
        "lv": 2,
        "children": [
          {
            "t": "Why Memory Matters",
            "d": "Fileless malware, decrypted payloads, and passwords live only in RAM.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What memory forensics reveals that disk cannot: running code, injected threads, network state",
              "Fileless malware: payloads that exist only in memory and vanish on reboot",
              "Memory acquisition recap: capture first, analyze the copy, never the live system"
            ],
            "do": [
              "List five evidence types found in RAM that never touch disk",
              "Explain to a colleague why a disk image alone missed a fileless attack",
              "Download a practice memory image and verify its hash before analysis"
            ],
            "tools": ["Volatility 3"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"],
              ["MemLabs", "https://github.com/stuxnet999/MemLabs"]
            ]
          },
          {
            "t": "Volatility 3 Setup & First Dump",
            "d": "Install the framework, identify the profile, and run your first plugins.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Volatility 3 architecture: no more manual profiles, symbol tables auto-detect the OS",
              "The plugin model: windows.*, linux.*, mac.* namespaces and what each covers",
              "Basic workflow: verify image, run info checks, then targeted plugins with output to files"
            ],
            "do": [
              "Install Volatility 3 and run it against a practice memory image",
              "Use the banner and info plugins to identify the OS and build",
              "Run three basic plugins and save their output to timestamped files"
            ],
            "tools": ["Volatility 3", "Python"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"]
            ],
            "tip": "Volatility 2 profiles are dead. If a tutorial tells you to pick a profile, it is outdated: Volatility 3 detects the OS automatically."
          },
          {
            "t": "Processes, DLLs & Network Connections",
            "d": "pslist, pstree, dlllist, netstat: the core plugins that map a live system.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "pslist vs pstree: flat process lists vs parent-child trees that expose suspicious lineage",
              "dlllist: which modules each process loaded, and why unexpected DLLs matter",
              "netstat and netscan: active connections and listening sockets with owning PIDs"
            ],
            "do": [
              "Run windows.pslist and windows.pstree, then flag any unusual parent-child pairs",
              "List DLLs for a browser process and identify any non-standard modules",
              "Map every established connection to its owning process and destination"
            ],
            "tools": ["Volatility 3"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"]
            ]
          },
          {
            "t": "Hunting Malware in Memory",
            "d": "malfind and yarascan: catch injected code and known-bad patterns red-handed.",
            "lv": 3,
            "time": "~5h",
            "badge": "LAB",
            "learn": [
              "Process injection techniques: hollowing, APC injection, and reflective DLL loading",
              "malfind: detecting private memory regions with execute permissions that should not exist",
              "yarascan: sweeping memory with YARA rules for malware families and toolmarks"
            ],
            "do": [
              "Run windows.malfind on an infected practice image and triage every hit",
              "Write a YARA rule for a distinctive string and scan the image with it",
              "Dump an injected region and identify the payload's purpose from its strings"
            ],
            "tools": ["Volatility 3", "YARA"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"],
              ["YARA", "https://virustotal.github.io/yara"],
              ["MemLabs", "https://github.com/stuxnet999/MemLabs"]
            ],
            "tip": "malfind hits include legitimate JIT code (browsers, .NET). Injected malware is confirmed by context: unknown parent, odd path, plus malicious strings, not by the hit alone."
          },
          {
            "t": "Dumping & Analyzing Suspicious Processes",
            "d": "Extract the payload from RAM and take it apart safely.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "procdump and memmap: extracting a process's executable regions to disk",
              "Rebuilding dumped PEs: fixing headers so the dump becomes analyzable",
              "Handoff to static analysis: strings, imports, and hashes of the dumped payload"
            ],
            "do": [
              "Dump a suspicious process from a practice image with windows.procdump",
              "Run strings on the dump and list the indicators you find",
              "Hash the dump and check it against VirusTotal for context"
            ],
            "tools": ["Volatility 3", "strings", "VirusTotal"],
            "res": [
              ["Volatility 3", "https://github.com/volatilityfoundation/volatility3"],
              ["VirusTotal", "https://www.virustotal.com"]
            ]
          }
        ]
      },
      {
        "t": "Timeline Analysis",
        "d": "Every timestamp is a witness: fuse them into one story of what happened.",
        "lv": 3,
        "children": [
          {
            "t": "MAC Times & Filesystem Timestamps",
            "d": "Modified, accessed, created: what each timestamp really means (and lies about).",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "MACE timestamps on NTFS: modified, accessed, created, entry-modified, and their semantics",
              "Timestomping: how attackers alter timestamps and which ones are hardest to fake",
              "$STANDARD_INFORMATION vs $FILE_NAME: two timestamp sets per file, and why the difference matters"
            ],
            "do": [
              "Read both timestamp sets for ten files and find discrepancies",
              "Timestomp a test file and see which timestamps betray the manipulation",
              "Explain why created-time can be newer than modified-time on a copied file"
            ],
            "tools": ["MFTECmd", "Sleuth Kit"],
            "res": [
              ["Eric Zimmerman tools", "https://ericzimmerman.github.io"]
            ],
            "tip": "Accessed-time is nearly useless on modern Windows (tunneling and disabled updates). Build timelines on modified and created times, and treat atime as decoration."
          },
          {
            "t": "Supertimelines with plaso",
            "d": "log2timeline: every event from every source, merged into one sortable timeline.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "How plaso works: parsers for filesystems, registry, logs, and browsers feeding one timeline",
              "Running log2timeline against an image and filtering the massive output effectively",
              "psort: slicing the supertimeline by time window, keyword, and event type"
            ],
            "do": [
              "Generate a supertimeline from a practice image with log2timeline",
              "Use psort to isolate a one-hour window around a known incident",
              "Filter for file-execution events and build a program-execution narrative"
            ],
            "tools": ["plaso", "log2timeline", "psort"],
            "res": [
              ["plaso", "https://github.com/log2timeline/plaso"]
            ]
          },
          {
            "t": "Correlating Disk, Memory & Network Timelines",
            "d": "One timeline to rule them: fuse disk, RAM, and packet evidence into a single narrative.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Timezone discipline: normalizing every source to UTC before any comparison",
              "Correlation points: process creation in memory vs prefetch on disk vs connections in pcaps",
              "Clock skew: detecting when a source's clock disagrees and adjusting for it"
            ],
            "do": [
              "Build a mini-timeline from a memory image's process creation times",
              "Correlate one malicious process across memory, prefetch, and event logs",
              "Document a timeline entry supported by three independent sources"
            ],
            "tools": ["plaso", "Volatility 3", "Wireshark"],
            "res": [
              ["plaso", "https://github.com/log2timeline/plaso"],
              ["Wireshark", "https://www.wireshark.org"]
            ]
          },
          {
            "t": "Timeline Interpretation & Storytelling",
            "d": "A timeline is data; the narrative is the finding. Learn to write the story honestly.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "From events to narrative: grouping related events into phases of the attack",
              "Causation vs correlation: the timeline shows sequence, you must argue cause carefully",
              "Presenting timelines: zoom levels for executives vs the full detail for technical reviewers"
            ],
            "do": [
              "Write a 500-word incident narrative from a practice supertimeline",
              "Mark every causal claim in your narrative as proven, inferred, or unknown",
              "Create two timeline views: a one-page summary and the detailed evidence view"
            ],
            "tools": ["Timesketch", "plaso"],
            "res": [
              ["plaso", "https://github.com/log2timeline/plaso"]
            ]
          }
        ]
      },
      {
        "t": "Mobile Forensics Basics",
        "d": "Phones hold our lives: lawful extraction and parsing of Android and iOS.",
        "lv": 2,
        "children": [
          {
            "t": "Mobile Acquisition Methods",
            "d": "Logical, filesystem, and physical: what each extraction level can and cannot reach.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Acquisition levels: logical (APIs and backups), filesystem (file access), physical (chip-off, rare now)",
              "Consent and authority: mobile extraction requires clear legal authorization, always",
              "What each level misses: encrypted app data, cloud-only content, and deleted records"
            ],
            "do": [
              "Diagram the three acquisition levels with tools and data yield for each",
              "List what a logical extraction of your own test phone would and would not capture",
              "Write the authorization checklist you would require before any extraction"
            ],
            "tools": ["Magnet Axiom", "Cellebrite"],
            "res": [
              ["Magnet Forensics", "https://www.magnetforensics.com"]
            ]
          },
          {
            "t": "Android: ADB & Logical Extraction",
            "d": "Talk to Android directly: backups, app data, and what root changes.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "ADB essentials: device connection, shell access, and pulling files from a test device",
              "Android backup extraction: what adb backup captures and its limitations on modern Android",
              "App data locations: shared_prefs, databases, and external storage on a test device"
            ],
            "do": [
              "Connect a test Android device via ADB and list its connected state",
              "Create a backup of a test app and extract its contents",
              "Locate and read an app's SQLite database from a test extraction"
            ],
            "tools": ["ADB", "Android Studio"],
            "res": [
              ["ALEAPP", "https://github.com/abrignoni/ALEAPP"]
            ],
            "tip": "Never experiment on a real evidence phone. Practice every ADB command on your own test device until the workflow is boring."
          },
          {
            "t": "Parsing Android with ALEAPP",
            "d": "Turn raw Android extractions into readable timelines, chats, and locations.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "What ALEAPP parses: app databases, usagestats, accounts, WiFi, and location artifacts",
              "Running ALEAPP against an extraction and navigating its HTML report",
              "Validating parser output: spot-checking the raw database behind a surprising finding"
            ],
            "do": [
              "Run ALEAPP on a test Android extraction and generate the full report",
              "Find call history, SMS, and location artifacts in the report",
              "Verify one parsed artifact against the raw database it came from"
            ],
            "tools": ["ALEAPP"],
            "res": [
              ["ALEAPP", "https://github.com/abrignoni/ALEAPP"]
            ]
          },
          {
            "t": "iOS Forensics with iLEAPP",
            "d": "iPhone extractions decoded: knowledgeC, SMS, locations, and app data.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "iOS extraction types: iTunes backups, and what full filesystem access requires",
              "iLEAPP's artifact coverage: SMS, calls, locations, and hundreds of app parsers",
              "Key iOS databases: knowledgeC.db, sms.db, and CoreLocation caches"
            ],
            "do": [
              "Create an encrypted backup of a test iPhone and process it with iLEAPP",
              "Reconstruct a day of activity from knowledgeC and location artifacts",
              "Map the artifact findings back to the raw backup files"
            ],
            "tools": ["iLEAPP"],
            "res": [
              ["iLEAPP", "https://github.com/abrignoni/iLEAPP"]
            ]
          },
          {
            "t": "Encryption & Legal Realities of Mobile",
            "d": "Modern phones are encrypted by default: what that means for examiners.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "File-based encryption on Android and iOS: data at rest is locked without the passcode",
              "AFU vs BFU states: why a phone seized unlocked is a fundamentally different case",
              "Legal landscape: compelling passcodes, cloud warrants, and jurisdictional differences"
            ],
            "do": [
              "Explain AFU vs BFU to a non-technical colleague in two minutes",
              "List the extraction options for a locked vs unlocked test device",
              "Research your jurisdiction's rules on compelling device unlocks"
            ],
            "tools": [],
            "res": [
              ["Magnet Forensics", "https://www.magnetforensics.com"]
            ]
          }
        ]
      },
      {
        "t": "Reporting & Capstone",
        "d": "Defend your findings: anti-forensics, expert reporting, and a full case.",
        "lv": 3,
        "children": [
          {
            "t": "Anti-Forensics Awareness",
            "d": "Know the tricks: timestomping, log wiping, steganography, and secure deletion.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Common anti-forensic techniques: timestomping, log clearing, file wiping, and encryption",
              "Detection: inconsistencies that betray tampering (impossible timestamps, gap patterns)",
              "Steganography basics: detecting hidden data with steghide, zsteg, and statistical checks"
            ],
            "do": [
              "Timestomp files on a test image and practice detecting the manipulation",
              "Run steghide and zsteg against test images with hidden payloads",
              "List the tampering indicators you would check first in any new case"
            ],
            "tools": ["steghide", "zsteg", "ExifTool"],
            "res": [
              ["SANS", "https://www.sans.org"]
            ],
            "tip": "Anti-forensics detection is about inconsistency, not tools. A file created before its parent folder existed is lying, no plugin required to see it."
          },
          {
            "t": "Writing Forensic Reports",
            "d": "Clear, sourced, and defensible: reports that survive cross-examination.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Report structure: case details, methodology with tool versions, findings with evidence, conclusions",
              "Language discipline: facts vs opinions, confidence levels, and never overstating a finding",
              "Exhibits: hashes, screenshots, and timelines referenced by number in the text"
            ],
            "do": [
              "Write a findings section for a practice case with every claim cited to an exhibit",
              "Have a peer try to break your conclusions: which claims survive",
              "Build a report template with methodology and exhibit sections ready to reuse"
            ],
            "tools": ["Report templates"],
            "res": [
              ["NIST SP 800-86", "https://csrc.nist.gov/pubs/sp/800/86/final"]
            ]
          },
          {
            "t": "Capstone: Full DFIR Case",
            "d": "One scenario, all phases: acquire, analyze, timeline, and report like a professional.",
            "lv": 3,
            "time": "~1w",
            "badge": "PROJECT",
            "learn": [
              "Case management: scoping questions, evidence inventory, and time-boxing the analysis",
              "Multi-source analysis: disk, memory, and logs fused into one defensible narrative",
              "Expert communication: presenting findings to technical and non-technical audiences"
            ],
            "do": [
              "Work a full practice case (CyberDefenders or MemLabs scenario) end to end",
              "Produce the timeline, the findings report, and the exhibit package",
              "Present your conclusions in a five-minute briefing as if to a client"
            ],
            "tools": ["Autopsy", "Volatility 3", "plaso", "ALEAPP"],
            "res": [
              ["CyberDefenders", "https://cyberdefenders.org/"],
              ["MemLabs", "https://github.com/stuxnet999/MemLabs"]
            ]
          }
        ]
      }
    ]
  }
});
