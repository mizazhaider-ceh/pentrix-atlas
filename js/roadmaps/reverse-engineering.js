/* Atlas roadmap data: Reverse Engineering (reverse-engineering) */
ROADMAPS.push({
  "id": "reverse-engineering",
  "title": "Reverse Engineering",
  "icon": "🪛",
  "color": "#c2410c",
  "desc": "Read software like an open book: assembly, disassemblers, debuggers, and defensive malware analysis.",
  "kind": "skill",
  "root": {
    "t": "Reverse Engineering",
    "d": "From x86_64 assembly to decompilers, debuggers, and safe malware analysis practice.",
    "children": [
      {
        "t": "RE Mindset & Safe Lab Setup",
        "d": "The rules first: what reversing is, and how to practice without hurting anyone.",
        "lv": 1,
        "children": [
          {
            "t": "What Reverse Engineering Is",
            "d": "Working backward from a binary to understanding: how it works, what it does, why.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The core questions of RE: what does this code do, what data does it touch, where can it go wrong",
              "Legitimate uses: malware defense, vulnerability research, interoperability, and CTFs",
              "Why compiled code is readable at all: compilers leave patterns, strings, and structure behind"
            ],
            "do": [
              "Write the five questions you will ask of every binary you analyze",
              "List three defensive and three research uses of reverse engineering",
              "Find one real vulnerability that was discovered through reverse engineering"
            ],
            "tools": [],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"],
              ["Ghidra", "https://ghidra-sre.org"]
            ]
          },
          {
            "t": "Static vs Dynamic Analysis",
            "d": "Read it without running it, or run it while watching: the two lenses of RE.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Static analysis: disassembly and decompilation without execution, safe for unknown files",
              "Dynamic analysis: debuggers and instrumentation reveal runtime behavior debuggers cannot hide from",
              "When to use which: static for structure and safety, dynamic for packed or obfuscated code"
            ],
            "do": [
              "Take one sample binary and list what you can learn statically in 15 minutes",
              "List what only dynamic analysis could reveal about the same binary",
              "Write your decision rule for when to switch from static to dynamic"
            ],
            "tools": ["Ghidra", "x64dbg"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ],
            "tip": "Beginners run unknown binaries to 'see what happens'. That is how analysts get infected: static first, dynamic only in an isolated VM, unknown malware never on the host."
          },
          {
            "t": "Legal Ground Rules",
            "d": "Know what you are allowed to reverse before you reverse anything.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Software licenses and EULAs: many prohibit reverse engineering, with research exceptions varying by country",
              "Malware analysis legality: analyzing samples you received for defense is standard practice",
              "The bright lines: never redistribute cracked software, never weaponize what you learn"
            ],
            "do": [
              "Read the reverse-engineering clause in two software EULAs you have installed",
              "Research your country's stance on security research and reverse engineering",
              "Write your personal ethics statement for RE work"
            ],
            "tools": [],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "Building an Isolated RE Lab",
            "d": "A VM with no way out: snapshots, host-only networking, and safe sample handling.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "VM isolation: snapshots before analysis, host-only or disabled networking, no shared folders",
              "FLARE VM for Windows analysis and REMnux for Linux-side tooling",
              "Sample handling: password-protected zips (infected), hashes recorded, never on the host desktop"
            ],
            "do": [
              "Install FLARE VM or REMnux in a VM with networking disabled",
              "Take a clean snapshot and practice restoring it",
              "Set up a samples folder with hashed, password-zipped test files"
            ],
            "tools": ["FLARE VM", "REMnux", "VirtualBox"],
            "res": [
              ["FLARE VM", "https://github.com/mandiant/FLARE-VM"],
              ["REMnux", "https://remnux.org"]
            ],
            "tip": "A lab without snapshots is not a lab, it is a future incident. Snapshot clean, analyze, restore: make it muscle memory before touching anything suspicious."
          },
          {
            "t": "Malware Handling Rules",
            "d": "Defensive framing from day one: samples are evidence, not toys.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The analyst's contract: analyze to defend, detect, and report, never to reuse or improve",
              "Handling rules: hashed samples, encrypted archives, VM-only execution, no internet egress",
              "Reporting: sharing IOCs and YARA rules with the community beats hoarding samples"
            ],
            "do": [
              "Write your malware-handling SOP: receive, hash, archive, analyze, report, destroy",
              "Practice the full intake flow on a benign test sample",
              "Find where your national CERT accepts malware submissions"
            ],
            "tools": ["7-Zip", "sha256sum"],
            "res": [
              ["REMnux", "https://remnux.org"]
            ]
          }
        ]
      },
      {
        "t": "Binary Formats & First Triage",
        "d": "What executables are made of, and how to size one up in five minutes.",
        "lv": 1,
        "children": [
          {
            "t": "How Executables Work",
            "d": "From source code to running process: compilation, linking, and loading.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The build pipeline: source to object files to linked executable, and what each stage leaves behind",
              "Loading: how the OS maps an executable into memory and starts execution",
              "Symbols and debug info: what stripped vs unstripped means for your analysis"
            ],
            "do": [
              "Compile a C program and examine the object file vs the final binary",
              "Strip a copy and compare what analysis information disappears",
              "Trace the journey of one function from source to bytes in the binary"
            ],
            "tools": ["GCC", "file", "readelf"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "The PE Format",
            "d": "Windows executables decoded: DOS header, sections, and the data directories.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "PE layout: DOS header with e_lfanew, NT headers, section headers, then section data",
              "Sections: .text for code, .data and .rdata for data, and what odd section names suggest",
              "Data directories: imports, exports, and resources, and where to find them"
            ],
            "do": [
              "Open a Windows binary in PE-bear and identify every section and its characteristics",
              "Find e_lfanew in a hex editor and follow it to the PE signature",
              "Compare section layouts of a clean system binary vs a packed sample"
            ],
            "tools": ["PE-bear", "Detect It Easy", "HxD"],
            "res": [
              ["PE-bear", "https://github.com/hasherezade/pe-bear"]
            ]
          },
          {
            "t": "ELF Format Basics",
            "d": "Linux executables: headers, segments, and sections with readelf.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ELF headers: magic, class, entry point, and program vs section headers",
              "readelf and objdump: dumping headers, sections, and symbols from the terminal",
              "Dynamic linking: the interpreter, needed libraries, and lazy binding basics"
            ],
            "do": [
              "Run readelf -h and -l on three different Linux binaries and compare",
              "Find the entry point address and locate it in objdump output",
              "List a binary's needed shared libraries with ldd and readelf -d"
            ],
            "tools": ["readelf", "objdump", "ldd"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "Imports, Exports & the IAT",
            "d": "What a binary asks the OS for reveals its intentions before you read a line of code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Imports: API functions a binary needs, resolved through the Import Address Table",
              "Suspicious import patterns: process injection, crypto, and networking APIs in unexpected binaries",
              "Exports: what DLLs offer to others, and how malware abuses legitimate exports"
            ],
            "do": [
              "List the imports of a clean binary vs a suspicious one and contrast them",
              "Identify five high-suspicion APIs and what capability each implies",
              "Check a DLL's exports and find which functions are actually used"
            ],
            "tools": ["PE-bear", "Detect It Easy", "Dependencies"],
            "res": [
              ["PE-bear", "https://github.com/hasherezade/pe-bear"]
            ],
            "tip": "Imports are intent, not proof. A crypto API in a backup tool is normal; the same API in a 'photo viewer' that also imports process-injection APIs is a story."
          },
          {
            "t": "Triage with Detect It Easy",
            "d": "Compiler, packer, and entropy in seconds: the fastest first look at any file.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What DiE detects: compiler signatures, packers, and protectors from byte patterns",
              "Entropy as a signal: high entropy sections suggest packing or encryption",
              "Triage workflow: file type, packer check, strings, then decide the analysis path"
            ],
            "do": [
              "Scan ten diverse binaries with DiE and record compiler and packer results",
              "Find a packed sample and note its entropy and section anomalies",
              "Write your five-minute triage checklist and time yourself using it"
            ],
            "tools": ["Detect It Easy"],
            "res": [
              ["Detect It Easy", "https://github.com/horsicq/Detect-It-Easy"]
            ]
          },
          {
            "t": "Strings: The Fastest First Look",
            "d": "URLs, paths, registry keys, and error messages hiding in plain sight.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How strings works: extracting printable sequences and why minimum length matters",
              "Reading strings like an analyst: URLs, IPs, file paths, and PDB paths as leads",
              "Limits: packed binaries hide their strings until unpacked, and strings can be faked"
            ],
            "do": [
              "Run strings on a binary and categorize the output: URLs, paths, errors, other",
              "Find the PDB path in a binary and explain what it reveals",
              "Compare strings output before and after unpacking a packed sample"
            ],
            "tools": ["strings", "FLOSS"],
            "res": [
              ["FLARE VM", "https://github.com/mandiant/FLARE-VM"]
            ]
          }
        ]
      },
      {
        "t": "x86_64 Assembly Basics",
        "d": "The language underneath everything: registers, the stack, and control flow.",
        "lv": 1,
        "children": [
          {
            "t": "CPU, Registers & Memory Model",
            "d": "RAX through R15, RIP, RFLAGS: the tiny workspace where all computation happens.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "General-purpose registers: rax-r15, their 32/16/8-bit aliases, and conventional roles",
              "RIP (instruction pointer) and RFLAGS: where execution is and what the last comparison decided",
              "Memory model: the stack grows down, the heap grows up, and code lives in .text"
            ],
            "do": [
              "Draw the register file from memory with sizes and conventional uses",
              "Explain what happens to eax when you write to rax (zero-extension)",
              "Sketch a process memory map: stack, heap, code, and libraries"
            ],
            "tools": ["GDB"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "MOV & Arithmetic Instructions",
            "d": "Data movement and math: the verbs of assembly.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "MOV semantics: source to destination, sizes must match, and memory-to-memory is forbidden",
              "Arithmetic: ADD, SUB, MUL, DIV, INC, DEC, and how they set flags",
              "LEA: the address-math instruction compilers love for arithmetic without touching flags"
            ],
            "do": [
              "Hand-trace five instructions and track every register value",
              "Explain why compilers use LEA for multiplication by constants",
              "Predict flag states after three arithmetic operations, then verify in a debugger"
            ],
            "tools": ["GDB", "Compiler Explorer"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "The Stack: PUSH, POP, CALL, RET",
            "d": "Function calls are just disciplined stack juggling. Learn the dance.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Stack mechanics: RSP points at the top, PUSH decrements then writes, POP reads then increments",
              "CALL and RET: return addresses pushed and popped, and how RBP frames the locals",
              "Reading a stack in the debugger: arguments, locals, and saved registers laid out"
            ],
            "do": [
              "Draw the stack after three nested calls with arguments and locals",
              "Watch RSP change instruction by instruction in a debugger",
              "Identify a function's locals and arguments from its prologue alone"
            ],
            "tools": ["GDB", "x64dbg"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ],
            "tip": "Beginners memorize CALL/RET as magic. They are just PUSH address plus JMP, and POP into RIP: once you see that, the stack stops being mysterious."
          },
          {
            "t": "x86_64 Calling Conventions",
            "d": "Who puts arguments where: System V vs Windows x64, and why it matters.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "System V (Linux): first six integer args in rdi, rsi, rdx, rcx, r8, r9, rest on the stack",
              "Windows x64: rcx, rdx, r8, r9, then stack, plus 32 bytes of shadow space",
              "Callee vs caller-saved registers: who is responsible for preserving what"
            ],
            "do": [
              "Identify function arguments in disassembly for both conventions",
              "Explain the purpose of Windows shadow space in your own words",
              "Label caller-saved vs callee-saved registers on a register diagram"
            ],
            "tools": ["Ghidra", "GDB"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "Jumps, Loops & Control Flow",
            "d": "CMP, TEST, Jcc: how assembly makes decisions and repeats itself.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "CMP vs TEST: subtraction without storing vs AND without storing, both setting flags",
              "Conditional jumps: JE, JNE, JG, JL and the signed vs unsigned distinction that trips everyone",
              "Loop patterns: recognizing for and while loops in disassembly by their jump structure"
            ],
            "do": [
              "Match six C if-statements to their compiled jump sequences",
              "Identify the loop type (for/while/do-while) in five disassembly samples",
              "Explain a signed vs unsigned comparison bug in assembly terms"
            ],
            "tools": ["Compiler Explorer", "Ghidra"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ],
            "tip": "Signed vs unsigned jumps are the number one misread in beginner RE. JG/JL are signed, JA/JB are unsigned: check the data type before trusting the branch."
          },
          {
            "t": "Reading Your First Disassembly",
            "d": "Put it all together: narrate what a small function does, line by line.",
            "lv": 2,
            "time": "~4h",
            "badge": "LAB",
            "learn": [
              "The reading method: identify the function frame, find the branches, then narrate each path",
              "Recognizing compiler idioms: prologues, string handling, and common optimizations",
              "From assembly to pseudocode: translating a function into plain-language steps"
            ],
            "do": [
              "Narrate a 20-line function line by line in plain English",
              "Convert the same function into pseudocode",
              "Time yourself: aim for a correct narration of a new function in under 15 minutes"
            ],
            "tools": ["Ghidra", "objdump"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          },
          {
            "t": "Compiling C to See Assembly",
            "d": "Write C, read the assembly it becomes: the fastest way to learn compiler patterns.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Compiler Explorer: instant C-to-assembly with color-matched lines",
              "Optimization levels: how -O0 vs -O2 transforms the same code beyond recognition",
              "Pattern library: what loops, switches, and struct access compile into"
            ],
            "do": [
              "Compile five C constructs and study each one's assembly output",
              "Compare -O0 vs -O2 output for the same function and explain the differences",
              "Predict the assembly for a new snippet, then check yourself"
            ],
            "tools": ["Compiler Explorer", "GCC"],
            "res": [
              ["OpenSecurityTraining", "https://ost2.fyi"]
            ]
          }
        ]
      },
      {
        "t": "Static Analysis with Ghidra",
        "d": "The NSA's free SRE framework: from bytes to readable decompilation.",
        "lv": 2,
        "children": [
          {
            "t": "Ghidra Setup & First Project",
            "d": "Install, import a binary, and let the auto-analyzer do its first pass.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Ghidra's architecture: the project model, the CodeBrowser, and the analysis pipeline",
              "Import and auto-analysis: what the analyzer finds (functions, strings, xrefs) and what it misses",
              "Navigation essentials: jumping to addresses, following calls, and the function graph view"
            ],
            "do": [
              "Install Ghidra, create a project, and import three different binaries",
              "Run auto-analysis and compare function counts across the three",
              "Navigate from an imported API call to every place that calls it"
            ],
            "tools": ["Ghidra"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"]
            ]
          },
          {
            "t": "From Disassembly to Decompilation",
            "d": "The decompiler turns assembly into C-like pseudocode: learn to read it critically.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "How the decompiler works: lifting assembly to p-code, then reconstructing control flow",
              "Reading decompiler output: trusting structure, verifying details against disassembly",
              "Decompiler artifacts: weird casts and gotos that signal you should check the assembly"
            ],
            "do": [
              "Decompile five functions and annotate where the output looks suspicious",
              "For one suspicious function, resolve the question in the disassembly view",
              "Compare Ghidra's decompilation of the same function at -O0 vs -O2"
            ],
            "tools": ["Ghidra"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"]
            ],
            "tip": "The decompiler is an assistant, not an oracle. When its output looks strange, the disassembly is the ground truth: beginners who trust decompilation blindly misread optimized code constantly."
          },
          {
            "t": "Cross-References & Call Graphs",
            "d": "XREFs answer 'who uses this': follow data and code flow across the whole binary.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "XREF types: calls, reads, and writes, and what each tells you about a variable or function",
              "Call graphs: visualizing caller/callee relationships to find the interesting paths",
              "String xrefs: the fastest route from a suspicious string to the code that uses it"
            ],
            "do": [
              "Pick a suspicious string and follow its xrefs to the responsible function",
              "Generate a call graph for a binary's main flow and identify the core logic",
              "Find every writer of a global variable and explain what each does"
            ],
            "tools": ["Ghidra"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"]
            ]
          },
          {
            "t": "Renaming, Retyping & Annotating",
            "d": "Turn FUN_00401020 into check_license: make the binary tell its own story.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Progressive annotation: rename functions, variables, and types as understanding grows",
              "Structure recovery: defining structs from memory access patterns",
              "The notebook habit: comments and bookmarks that make analysis resumable"
            ],
            "do": [
              "Fully rename and comment one 100-line function until it reads like source",
              "Recover a struct definition from three functions that access it",
              "Export your annotated project and write the summary another analyst could continue from"
            ],
            "tools": ["Ghidra"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"]
            ]
          },
          {
            "t": "Finding main & Entry Points",
            "d": "Start where execution starts: from the entry point to the real main.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Entry point vs main: CRT startup code runs first, then calls your main",
              "Finding main: the last call argument patterns in __libc_start_main or WinMain setup",
              "Stripped binaries: recognizing startup code so you can skip straight to application logic"
            ],
            "do": [
              "Locate main in a stripped Linux binary via __libc_start_main's argument",
              "Find WinMain in a Windows binary and trace the startup path",
              "Time yourself finding main in three unknown binaries"
            ],
            "tools": ["Ghidra", "readelf"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"]
            ]
          },
          {
            "t": "IDA & Binary Ninja: The Alternatives",
            "d": "Know the landscape: IDA Pro's depth and Binary Ninja's modern workflow.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "IDA Pro: the industry standard, FLIRT signatures, and the famous F5 decompiler",
              "Binary Ninja: fast analysis, excellent Python API, and readable IL",
              "When each shines: IDA for deep manual work, Binja for automation-heavy workflows, Ghidra for free"
            ],
            "do": [
              "Try IDA Free on a small binary and compare its decompilation with Ghidra's",
              "List three workflow differences you noticed between the tools",
              "Decide your primary static tool and justify the choice in writing"
            ],
            "tools": ["IDA Free", "Binary Ninja", "Ghidra"],
            "res": [
              ["Hex-Rays", "https://hex-rays.com"],
              ["Binary Ninja", "https://binary.ninja"]
            ],
            "tag": "opt"
          }
        ]
      },
      {
        "t": "Dynamic Analysis & Debugging",
        "d": "Watch it run: breakpoints, memory, and patching in x64dbg and GDB.",
        "lv": 2,
        "children": [
          {
            "t": "x64dbg: Breakpoints & Stepping",
            "d": "Stop time, inspect everything: your first controlled execution.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Breakpoint types: software (INT3), hardware, and memory breakpoints, and when each is needed",
              "Stepping: step into vs step over, and running to a return",
              "The x64dbg layout: disassembly, registers, stack, and memory views working together"
            ],
            "do": [
              "Set a breakpoint on a function, hit it, and inspect registers and stack",
              "Step through a loop iteration by iteration and watch the counter change",
              "Use a hardware breakpoint on a memory write to catch who modifies a variable"
            ],
            "tools": ["x64dbg"],
            "res": [
              ["x64dbg", "https://x64dbg.com"]
            ]
          },
          {
            "t": "Registers, Stack & Memory in the Debugger",
            "d": "Read the live state: what the CPU is doing right now, in plain terms.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Register inspection: arguments in rcx/rdx/r8/r9, return values in rax",
              "Stack reading: return addresses, locals, and spotting stack strings",
              "Memory maps: which regions are code, data, heap, and why permissions matter"
            ],
            "do": [
              "At a breakpoint, identify all four register arguments and their values",
              "Find a string on the stack that was built at runtime (stack strings)",
              "Map the process memory regions and explain each region's purpose"
            ],
            "tools": ["x64dbg", "GDB"],
            "res": [
              ["x64dbg", "https://x64dbg.com"]
            ]
          },
          {
            "t": "Patching Binaries",
            "d": "Change behavior at the byte level: NOP out a check, flip a jump.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Patching mechanics: assembling new instructions over old ones in the debugger",
              "Common patches: NOP-ing a call, inverting a conditional jump, forcing a return value",
              "Saving patches: writing the modified binary and verifying the behavior change"
            ],
            "do": [
              "Patch a crackme-style check so the wrong password is accepted, in the debugger",
              "Invert one conditional jump and observe the behavior change",
              "Save a patched binary and confirm the patch persists across runs"
            ],
            "tools": ["x64dbg", "Ghidra"],
            "res": [
              ["x64dbg", "https://x64dbg.com"],
              ["crackmes.one", "https://crackmes.one"]
            ],
            "tip": "Patch in the debugger first, save to disk second. Beginners who patch the file directly lose the original and cannot compare behavior."
          },
          {
            "t": "GDB + pwndbg on Linux",
            "d": "The Linux debugger with superpowers: pwndbg makes GDB humane.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "pwndbg essentials: context display, telescope, and the commands that replace raw GDB pain",
              "Breakpoint and watchpoint workflows for tracking data flow",
              "Examining memory: x/gx formatting and searching process memory"
            ],
            "do": [
              "Install pwndbg and debug a C program: break, step, inspect",
              "Set a watchpoint on a variable and catch every modification",
              "Find a value in heap memory by searching the process address space"
            ],
            "tools": ["GDB", "pwndbg"],
            "res": [
              ["GDB", "https://www.sourceware.org/gdb"]
            ]
          },
          {
            "t": "Anti-Debugging Basics & Bypasses",
            "d": "IsDebuggerPresent and friends: how programs detect you, and how to stay invisible.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Common checks: IsDebuggerPresent, CheckRemoteDebuggerPresent, timing checks, and NtGlobalFlag",
              "How debuggers reveal themselves: INT3 artifacts, PEB flags, and timing anomalies",
              "Bypass tools: ScyllaHide plugins and manual PEB patching"
            ],
            "do": [
              "Write a test program using IsDebuggerPresent and observe it under x64dbg",
              "Bypass the check with ScyllaHide and verify the program runs normally",
              "Patch the PEB BeingDebugged flag manually and confirm the bypass"
            ],
            "tools": ["x64dbg", "ScyllaHide"],
            "res": [
              ["ScyllaHide", "https://github.com/x64dbg/ScyllaHide"],
              ["x64dbg", "https://x64dbg.com"]
            ],
            "tip": "Defensive purpose only: you learn anti-debug tricks to analyze evasive malware for detection, not to help malware evade. Keep that framing in your notes."
          },
          {
            "t": "Frida: Dynamic Instrumentation",
            "d": "Hook any function at runtime: the scalpel for live behavior analysis.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Frida's model: injecting a JavaScript engine into a running process to hook functions",
              "Interceptors: logging arguments and return values of any API call",
              "Use cases: bypassing certificate pinning in your own lab apps, tracing crypto calls"
            ],
            "do": [
              "Hook a function in your own test program and log its arguments",
              "Trace all file-open calls during a program's run",
              "Modify a return value at runtime and observe the effect"
            ],
            "tools": ["Frida"],
            "res": [
              ["Frida", "https://frida.re"]
            ]
          }
        ]
      },
      {
        "t": "Malware Analysis Basics (Defensive)",
        "d": "Analyze malicious code the right way: safely, to defend, detect, and report.",
        "lv": 2,
        "children": [
          {
            "t": "Defensive Framing: Analysis to Protect",
            "d": "Why defenders reverse malware: IOCs, detections, and understanding the threat.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The defender's goals: indicators of compromise, behavior signatures, and impact assessment",
              "What a malware report contains: hashes, network IOCs, persistence, and capabilities",
              "Ethics recap: findings go to defenders and vendors, techniques never to attackers"
            ],
            "do": [
              "Read a public malware analysis report and identify its IOC sections",
              "Write the questions a SOC analyst needs answered about a new sample",
              "Draft a one-page analysis plan for a suspicious attachment"
            ],
            "tools": ["VirusTotal"],
            "res": [
              ["VirusTotal", "https://www.virustotal.com"]
            ]
          },
          {
            "t": "Behavioral Triage in the Sandbox VM",
            "d": "Run it caged and watch: processes, files, registry, and network in the isolated VM.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Monitoring stack: Process Monitor for system activity, Wireshark for network, in the isolated VM",
              "Baseline discipline: snapshot clean, run sample, diff behavior, restore",
              "What to record: dropped files, persistence mechanisms, C2 attempts, and timing"
            ],
            "do": [
              "Run a benign-but-noisy test program under ProcMon and filter its activity",
              "Capture the network traffic of a test sample and identify its connections",
              "Write a behavioral triage report from your observations"
            ],
            "tools": ["Process Monitor", "Wireshark", "FLARE VM"],
            "res": [
              ["FLARE VM", "https://github.com/mandiant/FLARE-VM"],
              ["Wireshark", "https://www.wireshark.org"]
            ],
            "tip": "Isolated VM means isolated: host-only or no networking. Malware that reaches the real internet from your lab is your responsibility."
          },
          {
            "t": "Packers & the Unpacking Mindset",
            "d": "Compressed and encrypted code: recognize packing and plan the unwrap.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "How packers work: a stub decrypts or decompresses the real code at runtime",
              "Packer identification: entropy, section names, and DiE signatures",
              "Unpacking strategies: let it unpack itself in memory, then dump the clean code"
            ],
            "do": [
              "Pack your own test binary with UPX and analyze the packed version",
              "Identify three different packers from DiE output and entropy readings",
              "Explain the unpack-then-dump strategy in your own words before attempting it"
            ],
            "tools": ["Detect It Easy", "UPX", "PE-bear"],
            "res": [
              ["Detect It Easy", "https://github.com/horsicq/Detect-It-Easy"]
            ]
          },
          {
            "t": "Manual Unpacking: OEP & Dumping",
            "d": "Find the Original Entry Point, dump the unpacked image, rebuild the imports.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "OEP hunting: the tail jump from stub to real code, found via breakpoints and memory patterns",
              "Dumping: capturing the unpacked process image from memory at the OEP",
              "IAT rebuilding: fixing the import table so the dumped binary is analyzable"
            ],
            "do": [
              "Unpack a UPX-packed binary manually and find its OEP",
              "Dump the process at the OEP and verify the dump in PE-bear",
              "Rebuild imports on your dump and confirm it disassembles cleanly"
            ],
            "tools": ["x64dbg", "PE-bear", "Scylla"],
            "res": [
              ["x64dbg", "https://x64dbg.com"],
              ["PE-bear", "https://github.com/hasherezade/pe-bear"]
            ]
          },
          {
            "t": "Extracting Configs with Python",
            "d": "Decrypt the payload's settings: C2 servers and keys pulled with scripts.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Config extraction concept: malware decrypts its settings at runtime; you can too",
              "Common encodings: XOR, RC4, and base64, recognized by their code patterns",
              "Writing decoders: from identified algorithm to a script that prints the config"
            ],
            "do": [
              "Write an XOR decoder for a test blob and verify the output",
              "Identify the decoding routine in a practice sample's disassembly",
              "Produce a config report: C2 addresses, keys, and campaign markers"
            ],
            "tools": ["Python", "CyberChef"],
            "res": [
              ["CyberChef", "https://gchq.github.io/CyberChef"]
            ]
          },
          {
            "t": "YARA Rules for Detection",
            "d": "Turn your analysis into defenses: write rules that catch the malware family.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "YARA syntax: strings, hex patterns, and conditions that define a detection",
              "Rule quality: specific enough to avoid false positives, general enough to catch variants",
              "Testing rules: scanning sample sets and measuring true vs false positives"
            ],
            "do": [
              "Write a YARA rule for a distinctive string set from a practice sample",
              "Test your rule against clean files and refine out the false positives",
              "Share the rule format you would submit to a detection repository"
            ],
            "tools": ["YARA"],
            "res": [
              ["YARA", "https://virustotal.github.io/yara"]
            ],
            "tip": "A YARA rule that matches one sample is a hash with extra steps. Good rules capture the family's invariant traits: test against variants, not just your sample."
          }
        ]
      },
      {
        "t": "Advanced Techniques",
        "d": "Beyond the basics: managed code, mobile, symbolic execution, and deobfuscation.",
        "lv": 3,
        "children": [
          {
            "t": ".NET Reversing (ILSpy/dnSpyEx)",
            "d": ".NET ships with metadata: decompile it back to near-original C#.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Why .NET reverses easily: IL bytecode plus rich metadata survives compilation",
              "ILSpy for decompilation and dnSpyEx for debugging with decompiled source",
              "Common protections: obfuscators like ConfuserEx and the deobfuscation mindset"
            ],
            "do": [
              "Decompile a .NET test app in ILSpy and compare with the original source",
              "Debug the same app in dnSpyEx with breakpoints on decompiled code",
              "Identify obfuscation in a protected sample and name the techniques used"
            ],
            "tools": ["ILSpy", "dnSpyEx"],
            "res": [
              ["ILSpy", "https://github.com/icsharpcode/ILSpy"],
              ["dnSpyEx", "https://github.com/dnSpyEx/dnSpy"]
            ],
            "tag": "opt"
          },
          {
            "t": "Android Reversing (jadx/apktool)",
            "d": "APKs are zip files with Dalvik bytecode: unpack, decompile, and read the app.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "APK structure: manifest, dex files, resources, and native libraries",
              "jadx: dex to Java decompilation for reading app logic",
              "apktool: decoding resources and rebuilding modified APKs for lab testing"
            ],
            "do": [
              "Decompile your own test APK with jadx and find its main activity",
              "Decode resources with apktool and inspect the manifest permissions",
              "Trace how a test app stores a secret and explain why it is insecure"
            ],
            "tools": ["jadx", "apktool", "Frida"],
            "res": [
              ["jadx", "https://github.com/skylot/jadx"],
              ["Apktool", "https://ibotpeaches.github.io/Apktool"]
            ],
            "tag": "opt"
          },
          {
            "t": "Symbolic Execution with angr",
            "d": "Let the computer solve the crackme: constraint solving for inputs.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Symbolic execution concept: treating inputs as symbols and collecting path constraints",
              "angr basics: project, states, simulation managers, and finding target addresses",
              "When it works: crackmes and key checks; when it explodes: state explosion on complex code"
            ],
            "do": [
              "Solve a simple crackme with angr by constraining stdin to reach the success address",
              "Explain each line of your angr script to a peer",
              "Identify why angr struggles on a second, more complex challenge"
            ],
            "tools": ["angr", "Python", "z3"],
            "res": [
              ["angr", "https://angr.io"]
            ]
          },
          {
            "t": "Deobfuscation Strategies",
            "d": "Undo the camouflage: string decryption, control-flow flattening, and VM-based protection.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Obfuscation taxonomy: string encryption, control-flow flattening, opaque predicates, virtualization",
              "Practical approach: dynamic dumping plus scripting beats manual unflattening",
              "Tooling: Triton and Miasm for symbolic-assisted deobfuscation workflows"
            ],
            "do": [
              "Decrypt strings from an obfuscated test binary using a Frida hook",
              "Identify control-flow flattening in disassembly and map the dispatcher",
              "Document a deobfuscation plan for a sample before attempting it"
            ],
            "tools": ["Frida", "Triton", "Miasm"],
            "res": [
              ["Triton", "https://github.com/JonathanSalwan/Triton"],
              ["Miasm", "https://github.com/cea-sec/miasm"]
            ]
          },
          {
            "t": "Scripting RE with Python",
            "d": "Automate the boring parts: Ghidra scripts, rizin pipes, and batch triage.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Ghidra scripting: Python scripts that rename, annotate, and extract at scale",
              "rizin and r2pipe: scriptable terminal analysis for batch jobs",
              "Automation targets: string extraction, import diffing, and report generation"
            ],
            "do": [
              "Write a Ghidra script that lists all functions calling a chosen API",
              "Build a batch triage script: DiE plus strings plus hashes for a folder of samples",
              "Generate a one-page auto-report from your script's output"
            ],
            "tools": ["Ghidra", "rizin", "Python"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"],
              ["Rizin", "https://rizin.re"]
            ]
          }
        ]
      },
      {
        "t": "Capstone",
        "d": "Prove the skill: crackmes, challenges, and a professional-grade RE report.",
        "lv": 3,
        "children": [
          {
            "t": "crackmes.one Challenges",
            "d": "Competition-grade puzzles: keygens, unpackmes, and logic bombs.",
            "lv": 3,
            "time": "~1w",
            "badge": "CTF",
            "learn": [
              "Crackme categories: keygenme, unpackme, and logic challenges, and what each teaches",
              "Solution methodology: triage, locate the check, understand it, then solve or patch",
              "Writing solutions: documenting the reversing process, not just the flag"
            ],
            "do": [
              "Solve five crackmes of increasing difficulty and document each method",
              "Write a keygen for one keygenme instead of just patching it",
              "Publish one clean writeup showing your full analysis path"
            ],
            "tools": ["Ghidra", "x64dbg", "crackmes.one"],
            "res": [
              ["crackmes.one", "https://crackmes.one"]
            ]
          },
          {
            "t": "Capstone: Full RE Report",
            "d": "One binary, full analysis: static, dynamic, and a report a team can act on.",
            "lv": 3,
            "time": "~2w",
            "badge": "PROJECT",
            "learn": [
              "Full methodology: triage, static analysis, dynamic confirmation, and detection outputs",
              "Report structure: summary, technical analysis, IOCs, YARA rule, and remediation advice",
              "Peer review: having another analyst reproduce your key findings from the report"
            ],
            "do": [
              "Pick a practice binary and run the complete methodology on it",
              "Write the full report with IOCs and a tested YARA rule",
              "Present the findings in a ten-minute briefing with live demo"
            ],
            "tools": ["Ghidra", "x64dbg", "YARA", "FLARE VM"],
            "res": [
              ["Ghidra", "https://ghidra-sre.org"],
              ["YARA", "https://virustotal.github.io/yara"]
            ]
          }
        ]
      }
    ]
  }
});
