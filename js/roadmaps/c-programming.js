/* Atlas roadmap data: C Programming (c-programming)
   Schema: { t, d, lv (1=Basic 2=Intermediate 3=Advanced), time, tip?, learn[], do[], tools[], res[[label,url]], tag?, badge? } */
ROADMAPS.push({
  "id": "c-programming",
  "title": "C Programming",
  "icon": "🔩",
  "color": "#64748b",
  "tagline": "Pointers, memory, and the machine itself.",
  "desc": "From your first printf to systems programming: pointers, memory management, the build toolchain, and how C really talks to the machine.",
  "kind": "skill",
  "root": {
    "t": "C Programming",
    "d": "Master the language that runs the world: from first compile to systems-level code.",
    "children": [
      {
        "t": "Foundations & First Programs",
        "d": "Why C matters, a working toolchain, and your first compiled program.",
        "lv": 1,
        "children": [
          {
            "t": "Why Learn C",
            "d": "Understand where C lives: operating systems, embedded devices, and performance-critical software.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What C gives you that higher-level languages hide: direct memory control, no runtime, tiny abstraction gap",
              "Where C dominates today: OS kernels, embedded firmware, drivers, databases, language runtimes",
              "The C mental model: you are responsible for memory, lifetimes, and correctness — the compiler trusts you"
            ],
            "do": [
              "Read the roadmap.sh C path overview and note three domains where C is the default choice",
              "List five programs on your own machine that are written in C or depend on C libraries",
              "Write one paragraph explaining why C is still taught before higher-level languages"
            ],
            "tools": ["roadmap.sh"],
            "res": [
              ["C Programming Roadmap", "https://roadmap.sh/c"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Beginners chase frameworks. C teaches you what the machine is actually doing, which makes every other language easier later."
          },
          {
            "t": "Setting Up: Compiler & Editor",
            "d": "Install GCC or Clang and pick an editor so you can compile real code today.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "GCC vs Clang: both are production compilers; Clang gives friendlier error messages, GCC is the Linux default",
              "What an editor needs for C: syntax highlighting, a terminal, and ideally clangd for jump-to-definition",
              "How to verify your install: gcc --version and a smoke-test compile"
            ],
            "do": [
              "Install GCC (Linux: build-essential, macOS: Xcode command line tools, Windows: MSYS2 or WSL)",
              "Install VS Code with the C/C++ extension, or set up Neovim with clangd",
              "Run `gcc --version` and `clang --version` and confirm both respond"
            ],
            "tools": ["GCC", "Clang", "VS Code", "Neovim", "clangd"],
            "res": [
              ["GCC Documentation", "https://gcc.gnu.org/onlinedocs/"],
              ["Getting Started with VS Code for C/C++", "https://code.visualstudio.com/docs/languages/cpp"]
            ],
            "tip": "On Windows, install inside WSL2 rather than fighting native toolchains. The Linux path matches every tutorial you will ever read."
          },
          {
            "t": "First Program & the Compile Pipeline",
            "d": "Write hello world, then see what gcc actually does: preprocess, compile, assemble, link.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The four stages: preprocessor (headers/macros) → compiler (assembly) → assembler (object file) → linker (executable)",
              "What #include <stdio.h> really does: pastes declarations so the compiler knows printf exists",
              "The anatomy of main: return type, name, and why returning 0 means success"
            ],
            "do": [
              "Write hello.c with printf and compile it with `gcc hello.c -o hello`",
              "Re-run with `gcc -E hello.c` and `gcc -S hello.c` to see preprocessor output and generated assembly",
              "Break it on purpose: delete the semicolon, read the compiler error, fix it"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c"]
            ],
            "tip": "Read compiler errors bottom-up. The first error is usually the real one; everything after it is collateral damage."
          },
          {
            "t": "Compiler Flags You Will Use Daily",
            "d": "Turn on warnings and pick a C standard: -Wall -Wextra -std=c17 -g -O2.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "-Wall -Wextra: warnings are the compiler teaching you; treat them as errors with -Werror while learning",
              "-std=c17: pins the language dialect so your code behaves the same everywhere",
              "-g adds debug symbols, -O0/-O2 control optimization; debug with -O0 -g"
            ],
            "do": [
              "Compile a program with no flags, then with `-Wall -Wextra -Werror` and compare the output",
              "Write code with an unused variable and an implicit int conversion; watch the warnings catch both",
              "Create a shell alias or makefile snippet that always includes your warning flags"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["GCC Warning Options", "https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c"]
            ],
            "tip": "Code that compiles with zero warnings under -Wall -Wextra is already better than most tutorial code on the internet."
          }
        ]
      },
      {
        "t": "Core Language Mechanics",
        "d": "Variables, types, operators, control flow, and functions — the working vocabulary of C.",
        "lv": 1,
        "children": [
          {
            "t": "Variables, Types & Initialization",
            "d": "Declare, define, and initialize: know the difference and never read garbage memory.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Declaration (tells the compiler a name exists) vs definition (reserves storage) vs initialization (gives a first value)",
              "Core types and their guarantees: char, int, float, double, and why exact sizes need stdint.h",
              "Uninitialized locals hold garbage: reading them is undefined behavior, not just a wrong value"
            ],
            "do": [
              "Print sizeof for every basic type on your machine with `printf(\"%zu\\n\", sizeof(int))`",
              "Declare a variable without initializing it, print it twice, and observe the garbage change",
              "Rewrite the program initializing everything at declaration and confirm stable output"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["C data types — cppreference", "https://en.cppreference.com/w/c/language/type"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Always initialize at declaration. Half of all beginner C bugs are uninitialized variables."
          },
          {
            "t": "Operators: Arithmetic to Bitwise",
            "d": "Master precedence, integer division traps, and the bitwise operators C is famous for.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Integer division truncates: 7/2 is 3, and mixing int with double silently promotes the int",
              "Bitwise ops (&, |, ^, ~, <<, >>): how flags, masks, and bit fields are manipulated in real systems code",
              "Precedence traps: & binds looser than ==, so `x & 1 == 1` parses as `x & (1 == 1)` — parenthesize"
            ],
            "do": [
              "Write a program that prints a number in binary using shifts and masks",
              "Implement set/clear/toggle/test-bit macros on an unsigned int and unit-test each",
              "Predict then verify the output of five tricky precedence expressions"
            ],
            "tools": ["GCC"],
            "res": [
              ["C operator precedence — cppreference", "https://en.cppreference.com/w/c/language/operator_precedence"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "When in doubt, add parentheses. Nobody has ever been fired for over-parenthesizing a bitwise expression."
          },
          {
            "t": "Control Flow",
            "d": "if/else, switch, and the three loops — plus when break and continue save the day.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "if/else chains vs switch: switch only tests one integer-like expression but compiles to a jump table",
              "for vs while vs do-while: pick by whether the count is known, the condition leads, or the body must run once",
              "break exits the loop, continue skips to the next iteration — and both only affect the innermost loop"
            ],
            "do": [
              "Write a number-guessing game with a limited attempt count using a for loop",
              "Rewrite a menu-driven program with switch, including a default case for bad input",
              "Implement FizzBuzz three ways (for, while, do-while) to feel the differences"
            ],
            "tools": ["GCC"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "A switch without break falls through to the next case. Sometimes that is the trick; usually it is the bug."
          },
          {
            "t": "Functions",
            "d": "Write real functions: prototypes, parameters, return values, and recursion.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "Declaration vs definition for functions: prototypes let you call functions defined later in the file",
              "C passes everything by value: to let a function change your variable, pass its address (preview of pointers)",
              "Recursion needs a base case and a shrinking problem; every recursive function has an iterative twin"
            ],
            "do": [
              "Write a small math library: factorial (recursive and iterative), gcd, is_prime",
              "Write a swap function that fails (pass by value), then fix it by passing pointers",
              "Split the library into a .h and .c file and compile a main.c against it"
            ],
            "tools": ["GCC"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c"]
            ],
            "tip": "If your function needs to give back more than one value, return a struct or write through pointer parameters."
          },
          {
            "t": "Arrays & Strings",
            "d": "Arrays decay to pointers, strings are just char arrays with a '\\0' — learn both cold.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "An array name decays to a pointer to its first element in most expressions — that is why sizeof stops working across functions",
              "C strings end with a null terminator; every string function trusts it, which is where overflows come from",
              "strcpy/strcat are unsafe classics; strncpy/strncat and snprintf are the defensive replacements"
            ],
            "do": [
              "Implement your own strlen, strcpy, and strcmp, then compare behavior with the library versions",
              "Write a program that reverses a string in place without a second buffer",
              "Deliberately overflow a small buffer in a scratch program and run it under ASan to see the report"
            ],
            "tools": ["GCC", "AddressSanitizer"],
            "res": [
              ["C string handling — cppreference", "https://en.cppreference.com/w/c/string/byte"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "There is no bounds checking in C. The array will happily let you write past its end and corrupt something else."
          },
          {
            "t": "Scope & Storage Classes",
            "d": "Block scope, file scope, static, extern, and register: where names live and how long they last.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Block scope vs file scope: a name is visible from its declaration to the end of its enclosing block or file",
              "static inside a function gives the variable a lifetime of the whole program while keeping it local in name",
              "extern declares a name defined in another translation unit; static at file scope hides a name from other files"
            ],
            "do": [
              "Write a counter function using a static local and call it five times",
              "Split a program into two .c files sharing a global via extern, then hide one with static and watch the linker complain",
              "Shadow a global with a local of the same name and predict the printed values"
            ],
            "tools": ["GCC"],
            "res": [
              ["C storage classes — cppreference", "https://en.cppreference.com/w/c/language/storage_duration"]
            ],
            "tip": "Default to the smallest scope and static linkage. Globals shared across files are where large C projects go to rot."
          }
        ]
      },
      {
        "t": "Pointers & Memory",
        "d": "The heart of C: addresses, pointer arithmetic, the heap, and every classic memory bug.",
        "lv": 2,
        "children": [
          {
            "t": "Pointer Basics & Syntax",
            "d": "Addresses, dereference, and the & and * operators — read pointer declarations out loud.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "& takes an address, * dereferences it; `int *p` reads as 'p is a pointer to int'",
              "A pointer has its own address and its own size (8 bytes on 64-bit), independent of what it points to",
              "NULL (or 0) marks 'points to nothing'; dereferencing it crashes, which is the kindest possible outcome"
            ],
            "do": [
              "Print the address, the pointed-to value, and the size of several pointers",
              "Write a function that modifies its caller's variable through a pointer parameter",
              "Draw a memory diagram for a three-variable program and verify it with printed addresses"
            ],
            "tools": ["GCC"],
            "res": [
              ["C pointers — cppreference", "https://en.cppreference.com/w/c/language/pointer"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Read declarations right-to-left: `const char *p` is 'p is a pointer to char that is const'. The spiral rule saves lives."
          },
          {
            "t": "Pointer Arithmetic & void Pointers",
            "d": "Why p+1 jumps by the element size, and how void* carries typeless addresses.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Pointer arithmetic scales by sizeof the pointed-to type: p+1 on int* moves 4 bytes, on char* moves 1",
              "void* holds any object address but cannot be dereferenced or stepped — cast it first",
              "Array indexing is pointer arithmetic in disguise: a[i] is exactly *(a+i)"
            ],
            "do": [
              "Iterate an int array three ways: indexing, pointer increment, and pointer difference",
              "Write a generic swap using void* and memcpy that works for any type",
              "Print addresses while stepping a struct pointer to see the stride match sizeof"
            ],
            "tools": ["GCC"],
            "res": [
              ["C pointer arithmetic — cppreference", "https://en.cppreference.com/w/c/language/operator_member_access"]
            ],
            "tip": "Pointer arithmetic past the end of an array (even by one) is undefined behavior — the optimizer is allowed to assume you never do it."
          },
          {
            "t": "Stack vs Heap & Object Lifetime",
            "d": "Automatic, static, and dynamic storage: know where every byte lives and when it dies.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Stack: automatic locals, freed when the block ends — never return a pointer to a local",
              "Heap: malloc'd memory lives until you free it; static storage lives for the whole program",
              "Lifetime bugs: use-after-return, use-after-free, and double free — the classic C vulnerability trio"
            ],
            "do": [
              "Write a function returning a pointer to a local array, compile with -Wall, and read the warning",
              "Fix it two ways: caller-provided buffer and heap allocation",
              "Sketch the stack frames of a three-deep call chain with their locals"
            ],
            "tools": ["GCC", "Valgrind"],
            "res": [
              ["C memory model — cppreference", "https://en.cppreference.com/w/c/language/memory_model"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "If a function returns a pointer, document who owns it and who frees it. Ownership confusion is the #1 source of leaks."
          },
          {
            "t": "Dynamic Allocation: malloc, calloc, realloc, free",
            "d": "Own the heap: allocate exactly what you need, grow it safely, and free every byte.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "malloc(size) gives uninitialized bytes; calloc(n, size) zero-fills; realloc grows or moves a block",
              "The realloc idiom: assign to a temporary, check for NULL, only then replace the old pointer",
              "free(NULL) is safe and does nothing — use that property to simplify cleanup paths"
            ],
            "do": [
              "Build a growable integer vector: push, automatic doubling with realloc, destroy",
              "Read an entire file of unknown size into a heap buffer using realloc in a loop",
              "Run both programs under Valgrind and get a clean 'no leaks are possible' report"
            ],
            "tools": ["GCC", "Valgrind"],
            "res": [
              ["Dynamic memory — cppreference", "https://en.cppreference.com/w/c/memory"],
              ["Valgrind manual", "https://valgrind.org/docs/manual/manual.html"]
            ],
            "tip": "Check every malloc for NULL. On modern desktops allocation rarely fails; on embedded targets it fails weekly."
          },
          {
            "t": "Memory Bugs: Leaks, Dangling & Overflows",
            "d": "Meet the bugs that built the security industry — then learn to hunt them with sanitizers.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Leak: allocated and never freed; dangling pointer: freed but still used; overflow: written past the end",
              "AddressSanitizer (-fsanitize=address) catches overflows and use-after-free at runtime with exact line numbers",
              "LeakSanitizer (bundled with ASan) reports leaks at exit; Valgrind does the same without recompiling"
            ],
            "do": [
              "Write four tiny buggy programs (leak, double free, use-after-free, heap overflow)",
              "Compile each with `-fsanitize=address,undefined -g` and read the sanitizer reports",
              "Fix all four and confirm the reports go silent"
            ],
            "tools": ["GCC", "Clang", "AddressSanitizer", "Valgrind"],
            "res": [
              ["AddressSanitizer wiki", "https://github.com/google/sanitizers/wiki/AddressSanitizer"],
              ["Valgrind manual", "https://valgrind.org/docs/manual/manual.html"]
            ],
            "tip": "Develop with sanitizers on from day one. Finding a heap overflow in week one beats finding it in production."
          },
          {
            "t": "Undefined Behavior",
            "d": "The C standard's trapdoor: what UB really means and why the optimizer exploits it.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Undefined behavior means the standard imposes no requirements — the program can do literally anything",
              "Classic UB: signed integer overflow, null dereference, data races, use of indeterminate values",
              "UBSan (-fsanitize=undefined) instruments your code and reports UB the moment it happens"
            ],
            "do": [
              "Compile a signed-overflow loop at -O0 and -O2 and observe different behavior",
              "Build a small program with five UB examples and run it under UBSan",
              "Read one real CVE writeup caused by undefined behavior in C"
            ],
            "tools": ["Clang", "GCC", "UBSan"],
            "res": [
              ["UndefinedBehaviorSanitizer wiki", "https://github.com/google/sanitizers/wiki/UndefinedBehaviorSanitizer"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c"]
            ],
            "tip": "'It works on my machine' is not a defense against UB. The optimizer is allowed to delete your security check."
          }
        ]
      },
      {
        "t": "Structuring Data & Code",
        "d": "Structs, unions, enums, headers, and linkage: organizing real programs.",
        "lv": 2,
        "children": [
          {
            "t": "Structs & Memory Layout",
            "d": "Group related data, then learn why the compiler pads your struct.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "struct bundles heterogeneous fields; access with . and ->, assign whole structs with =",
              "Alignment and padding: the compiler inserts gaps so each field sits on its natural boundary",
              "Reorder fields largest-first to shrink the struct — real embedded and network code does this"
            ],
            "do": [
              "Define a struct with char, int, double in two orders; print sizeof and offsetof for each field",
              "Write a program that parses a binary file header into a struct with fread",
              "Implement a small address-book using an array of structs with add/search/delete"
            ],
            "tools": ["GCC"],
            "res": [
              ["C struct — cppreference", "https://en.cppreference.com/w/c/language/struct"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Never memcpy a struct with padding across machines or into files — the padding bytes are indeterminate."
          },
          {
            "t": "Unions, Enums & Typedef",
            "d": "Overlapping storage, named constants, and readable type aliases.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "union stores one member at a time in shared storage — perfect for variant data and protocol parsing",
              "enum gives names to integer constants; typedef creates aliases that make complex declarations readable",
              "Tagged unions (enum tag + union) are C's handmade sum type — check the tag before reading the union"
            ],
            "do": [
              "Build a tagged-union 'value' type that can hold an int, double, or string, with print and copy functions",
              "Define an enum of error codes and a function returning human-readable messages for them",
              "Typedef a function-pointer type and use it to declare a callback table"
            ],
            "tools": ["GCC"],
            "res": [
              ["C union — cppreference", "https://en.cppreference.com/w/c/language/union"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Reading a union member that was not the last one written is type punning — it works in practice via GCC/Clang but know it is implementation-defined."
          },
          {
            "t": "Header Files & Translation Units",
            "d": "Split programs across files: what belongs in .h, what belongs in .c, and include guards.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Headers carry declarations (prototypes, externs, macros, type definitions); .c files carry definitions",
              "Include guards (#ifndef/#define/#endif) or #pragma once prevent double inclusion",
              "One definition rule in C: a function or global may be defined once across all translation units"
            ],
            "do": [
              "Refactor a single-file program into main.c, logic.c, logic.h with proper guards",
              "Deliberately include a header twice without guards and read the compiler error",
              "Compile each .c to an object file separately, then link them by hand"
            ],
            "tools": ["GCC"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"],
              ["GCC documentation", "https://gcc.gnu.org/onlinedocs/"]
            ],
            "tip": "Headers should never define functions or non-extern variables — mark helpers static or move them to the .c file."
          },
          {
            "t": "Function Pointers & Callbacks",
            "d": "Store functions in variables: the mechanism behind qsort, callbacks, and vtables.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Syntax: `int (*cmp)(const void*, const void*)` declares a pointer to a function — typedef makes it sane",
              "qsort takes a comparator function pointer: the standard library calling YOUR code is the callback pattern",
              "Tables of function pointers implement polymorphism in C — this is how C++ vtables work underneath"
            ],
            "do": [
              "Sort an array of structs by different fields using qsort with three comparators",
              "Build a tiny event system: register callbacks, then dispatch events to all of them",
              "Implement a state machine as a table of function pointers indexed by state"
            ],
            "tools": ["GCC"],
            "res": [
              ["qsort — cppreference", "https://en.cppreference.com/w/c/algorithm/qsort"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "A NULL function pointer called by accident jumps to address zero. Assert callbacks are non-NULL at registration time."
          },
          {
            "t": "Opaque Pointers & Modular Design",
            "d": "Hide implementation details behind incomplete types — C's version of private.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Declare `typedef struct widget widget_t;` in the header; define the struct only in the .c file",
              "Clients can hold widget_t* but cannot see or touch its fields — true encapsulation in C",
              "This is the FILE* pattern: the standard library has hidden its internals from you for decades"
            ],
            "do": [
              "Design a small 'database' module with an opaque handle, open/query/close functions",
              "Try (and fail) to access the hidden struct's fields from main.c — confirm the compiler blocks it",
              "Add reference counting to the handle to practice ownership discipline"
            ],
            "tools": ["GCC"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Pair every opaque handle with create/destroy functions. If users must malloc your struct themselves, the abstraction leaks."
          }
        ]
      },
      {
        "t": "Build, Preprocess & Debug",
        "d": "The preprocessor, Make, CMake, GDB, and the tools that find your bugs.",
        "lv": 2,
        "children": [
          {
            "t": "The Preprocessor & Macros",
            "d": "#define, #include, and conditional compilation — text surgery before compiling.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The preprocessor does textual substitution before the compiler ever sees your code",
              "Function-like macros: always parenthesize parameters and the whole body, or operators will betray you",
              "#ifdef / #if for conditional compilation: platform differences and debug-vs-release code paths"
            ],
            "do": [
              "Write MAX, MIN, and ARRAY_SIZE macros correctly parenthesized, then break them on purpose to see why",
              "Use `#if DEBUG` to compile logging in and out of a program",
              "Run `gcc -E` on a macro-heavy file and read the expanded output"
            ],
            "tools": ["GCC"],
            "res": [
              ["The C Preprocessor (GCC docs)", "https://gcc.gnu.org/onlinedocs/cpp/"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c/preprocessor"]
            ],
            "tip": "Prefer inline functions and enums over macros. Macros do not respect scope, types, or your debugging sanity."
          },
          {
            "t": "GNU Make",
            "d": "Stop recompiling everything: targets, prerequisites, and pattern rules.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "A rule is target: prerequisites followed by a TAB-indented recipe — the tab is not optional",
              "Make rebuilds a target only when a prerequisite is newer, using file timestamps",
              "Pattern rules (%.o: %.c) and automatic variables ($@, $<, $^) turn ten rules into one"
            ],
            "do": [
              "Write a Makefile for a three-file project with clean, all, and debug targets",
              "Add header dependencies so editing a .h rebuilds the right .o files",
              "Break the build by using spaces instead of a tab, then fix it"
            ],
            "tools": ["GNU Make", "GCC"],
            "res": [
              ["GNU Make manual", "https://www.gnu.org/software/make/manual/"]
            ],
            "tip": "Always add .PHONY for non-file targets like clean and all, or a file named 'clean' will silently break your build."
          },
          {
            "t": "CMake & Modern Builds",
            "d": "The industry standard: CMakeLists.txt, out-of-source builds, and presets.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "CMake generates native build files (Make, Ninja); you describe targets, not commands",
              "Core commands: cmake_minimum_required, project, add_executable, add_library, target_link_libraries",
              "Out-of-source builds keep your source tree clean; presets encode Debug/Release configurations"
            ],
            "do": [
              "Convert your Make project to CMake with a library target and an executable target",
              "Configure with `-DCMAKE_BUILD_TYPE=Debug` and build with `cmake --build`",
              "Add a compile-commands.json export and point clangd at it for IDE support"
            ],
            "tools": ["CMake", "Ninja"],
            "res": [
              ["CMake documentation", "https://cmake.org/documentation/"],
              ["CMake tutorial", "https://cmake.org/cmake/help/latest/guide/tutorial/"]
            ],
            "tip": "Use target_* commands (target_include_directories, target_compile_options) instead of global ones — globals poison every target."
          },
          {
            "t": "Debugging with GDB",
            "d": "Breakpoints, backtraces, and watchpoints: stop guessing and inspect the running program.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Compile with -g -O0, then break, run, step, next, print, and backtrace your way to the bug",
              "Watchpoints halt when a variable changes — the fastest way to catch memory corruption",
              "Core dumps + gdb ./prog core let you debug a crash after the fact"
            ],
            "do": [
              "Debug a segfaulting program: run it, read the backtrace, print the guilty pointer",
              "Set a watchpoint on a variable that gets mysteriously overwritten",
              "Practice conditional breakpoints to stop only on the 1000th loop iteration"
            ],
            "tools": ["GDB"],
            "res": [
              ["GDB documentation", "https://sourceware.org/gdb/documentation/"],
              ["Beej's Quick Guide to GDB", "https://beej.us/guide/bggdb/"]
            ],
            "tip": "Compile with -O0 when debugging. Optimized code reorders and eliminates variables, and GDB will show you fiction."
          },
          {
            "t": "Linking, Libraries & the ABI",
            "d": "Static vs shared libraries, symbol resolution, and why the linker errors look cryptic.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Static libraries (.a) are copied into your binary; shared libraries (.so) are loaded at runtime",
              "The linker resolves symbols across object files; 'undefined reference' means a definition is missing",
              "ABI: the binary contract (calling convention, layout) — why mixing compilers can break linking"
            ],
            "do": [
              "Build both a static and a shared version of your math library and link programs against each",
              "Use nm and ldd to inspect symbols and shared-library dependencies of your binary",
              "Trigger an 'undefined reference' error on purpose and fix it by reordering link arguments"
            ],
            "tools": ["GCC", "binutils", "ldd"],
            "res": [
              ["Anatomy of a Program in Memory (general)", "https://www.geeksforgeeks.org/memory-layout-of-c-program/"]
            ],
            "tip": "On the gcc command line, libraries go AFTER the files that use them. Link order matters and the error never tells you that."
          }
        ]
      },
      {
        "t": "Standard Library & I/O",
        "d": "Files, strings, and errors: the libc toolbox every C program leans on.",
        "lv": 2,
        "children": [
          {
            "t": "File I/O with Streams",
            "d": "fopen, fread, fwrite, and the difference between text and binary mode.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "FILE* streams buffer I/O for you; fopen modes (r, w, a, b, +) control reading, writing, and truncation",
              "Text vs binary mode matters on Windows (newline translation); on Linux they behave the same",
              "Always check fopen's return for NULL, and check ferror/feof — silent I/O failure corrupts data"
            ],
            "do": [
              "Write a cp clone: copy a file byte-for-byte with fread/fwrite in binary mode",
              "Build a line-numbered file viewer using fgets",
              "Handle every error path: missing file, permission denied, disk full (simulate with /dev/full)"
            ],
            "tools": ["GCC"],
            "res": [
              ["C file input/output — cppreference", "https://en.cppreference.com/w/c/io"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "fflush or fclose before reading a file you just wrote. Buffered output is not on disk until you say so."
          },
          {
            "t": "Error Handling: errno & Exit Codes",
            "d": "C has no exceptions: learn errno, perror, strerror, and meaningful exit codes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "errno is set by failing library calls; read it immediately before another call overwrites it",
              "perror and strerror turn errno numbers into human messages your users can act on",
              "Exit codes: 0 means success; use EXIT_FAILURE and distinct codes so scripts can react"
            ],
            "do": [
              "Write a program that opens a missing file and reports the failure with perror and strerror",
              "Make errno handling robust: save errno to a local before any logging call",
              "Write a script that runs your program and branches on its exit code"
            ],
            "tools": ["GCC"],
            "res": [
              ["errno — cppreference", "https://en.cppreference.com/w/c/error/errno"],
              ["Linux man pages", "https://man7.org/linux/man-pages/"]
            ],
            "tip": "A function that can fail must signal it — return code, errno, or an out-parameter. Silent failure is the worst failure."
          },
          {
            "t": "Useful libc: stdlib, string, math, time",
            "d": "The greatest hits: conversion, sorting, searching, random, and dates.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "stdlib.h: strtol (safe number parsing), qsort/bsearch, malloc family, exit, getenv",
              "string.h: the mem* functions operate on raw bytes; the str* functions assume null termination",
              "time.h: time_t, struct tm, and why you should prefer monotonic clocks for measuring intervals"
            ],
            "do": [
              "Parse command-line numbers with strtol including full error checking (not atoi)",
              "Sort and binary-search an array with qsort and bsearch",
              "Benchmark two algorithms with clock_gettime(CLOCK_MONOTONIC) and report nanoseconds"
            ],
            "tools": ["GCC"],
            "res": [
              ["C standard library — cppreference", "https://en.cppreference.com/w/c/header"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Never use atoi. It cannot report errors. strtol tells you exactly what went wrong and where parsing stopped."
          },
          {
            "t": "Command-Line Arguments & Environment",
            "d": "argc, argv, and getopt: write programs that behave like real Unix tools.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "int main(int argc, char *argv[]): argc counts, argv[0] is the program name",
              "getopt parses -f flags and -o value options the Unix way, with error messages built in",
              "Environment variables via getenv: configuration without recompiling"
            ],
            "do": [
              "Write a word-count clone supporting flags like -l -w -c using getopt",
              "Support both short flags and a --help screen that documents usage",
              "Read configuration from an environment variable with a sensible default"
            ],
            "tools": ["GCC"],
            "res": [
              ["getopt — Linux man pages", "https://man7.org/linux/man-pages/man3/getopt.3.html"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Every CLI tool needs --help and useful errors on bad input. If a human cannot guess the flags, the tool is broken."
          }
        ]
      },
      {
        "t": "Systems Programming",
        "d": "Processes, signals, IPC, and threads: C talking directly to the operating system.",
        "lv": 3,
        "children": [
          {
            "t": "Processes: fork & exec",
            "d": "Create processes, replace their images, and reap them with wait.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "fork() clones the calling process; the return value tells parent and child apart",
              "exec replaces the process image — the fork/exec pair is how shells launch every command",
              "Zombies: a child that exited but was never wait()ed for; the parent must reap its children"
            ],
            "do": [
              "Write a mini-shell loop: read a line, fork, execvp the command, wait for it",
              "Create an orphan and a zombie on purpose, observe them in ps, then fix the reaping",
              "Use _exit in the child after a failed exec and explain why exit would be wrong there"
            ],
            "tools": ["GCC", "Linux man pages"],
            "res": [
              ["fork — Linux man pages", "https://man7.org/linux/man-pages/man2/fork.2.html"],
              ["Beej's Guide to Unix IPC", "https://beej.us/guide/bgipc/"]
            ],
            "tip": "After fork, both processes share open file descriptors. Close what you do not need or pipes will never see EOF."
          },
          {
            "t": "Signals",
            "d": "SIGINT, SIGTERM, SIGCHLD: handle asynchronous events without corrupting state.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Signals interrupt normal flow; handlers run asynchronously and can fire at any instruction",
              "Only async-signal-safe functions are legal inside a handler — printf is not one of them",
              "The safe pattern: handler sets a volatile sig_atomic_t flag; the main loop does the real work"
            ],
            "do": [
              "Write a program that counts to a billion but exits cleanly on Ctrl-C via a SIGINT handler",
              "Handle SIGCHLD to reap children without blocking in wait",
              "Demonstrate the bug: call printf in a handler under load and watch output corrupt"
            ],
            "tools": ["GCC", "Linux man pages"],
            "res": [
              ["signal — Linux man pages", "https://man7.org/linux/man-pages/man7/signal.7.html"],
              ["Beej's Guide to Unix IPC", "https://beej.us/guide/bgipc/"]
            ],
            "tip": "Keep signal handlers to one line: set a flag. Everything clever you put in a handler becomes a Heisenbug."
          },
          {
            "t": "IPC: Pipes & Sockets",
            "d": "Move bytes between processes: anonymous pipes, and TCP sockets from scratch.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "pipe() gives two file descriptors; fork, then each side closes the end it does not use",
              "TCP sockets: socket → bind → listen → accept on the server; socket → connect on the client",
              "Network byte order: htons/htonl convert before sending; protocols are big-endian by convention"
            ],
            "do": [
              "Build a parent-child pipeline where the child transforms the parent's output",
              "Write a TCP echo server and client that exchange messages over localhost",
              "Extend the server to handle multiple clients with select()"
            ],
            "tools": ["GCC", "netcat", "Wireshark"],
            "res": [
              ["Beej's Guide to Network Programming", "https://beej.us/guide/bgnet/"],
              ["Beej's Guide to Unix IPC", "https://beej.us/guide/bgipc/"]
            ],
            "tip": "TCP is a byte stream, not a message stream. One send can arrive as many recvs — always frame your messages."
          },
          {
            "t": "POSIX Threads",
            "d": "Threads, mutexes, and the data races that make concurrency genuinely hard.",
            "lv": 3,
            "time": "~8h",
            "learn": [
              "pthread_create runs a function on a new thread sharing the whole address space — sharing is the danger",
              "Mutexes serialize access to shared data; lock ordering prevents deadlock",
              "Data races are undefined behavior in C11: unsynchronized shared writes can corrupt anything"
            ],
            "do": [
              "Write a counter incremented by 8 threads with no lock; watch the final count come out wrong",
              "Fix it with a mutex, then with C11 atomics, and benchmark both",
              "Build a producer-consumer queue with a mutex and condition variable"
            ],
            "tools": ["GCC", "ThreadSanitizer", "Helgrind"],
            "res": [
              ["pthreads — Linux man pages", "https://man7.org/linux/man-pages/man7/pthreads.7.html"],
              ["Beej's Guide to Unix IPC", "https://beej.us/guide/bgipc/"]
            ],
            "tip": "Run threaded code under ThreadSanitizer (-fsanitize=thread). Races you cannot see in testing will find your users."
          }
        ]
      },
      {
        "t": "Mastery & Real Projects",
        "d": "Data structures from scratch, C idioms, modern standards, and portfolio-grade builds.",
        "lv": 3,
        "children": [
          {
            "t": "Data Structures from Scratch",
            "d": "Linked lists, hash maps, and dynamic arrays — built by hand, tested hard.",
            "lv": 3,
            "time": "~2w",
            "learn": [
              "Intrusive vs external nodes, and why C data structures are usually type-specific or macro-generated",
              "Hash maps: hashing, chaining vs open addressing, load factor, and amortized O(1)",
              "Ownership contracts for containers: who frees the elements when the container dies"
            ],
            "do": [
              "Implement a generic dynamic array with macros or void* + element size",
              "Implement a hash map with chaining, then rehash at 0.75 load factor",
              "Write tests for every function and run the suite under ASan + UBSan"
            ],
            "tools": ["GCC", "AddressSanitizer", "Unity"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"],
              ["C reference — cppreference", "https://en.cppreference.com/w/c"]
            ],
            "tip": "Test allocation failure paths by wrapping malloc with a failing allocator. Real code must survive OOM.",
            "badge": "LAB"
          },
          {
            "t": "C Standards: C99 to C23",
            "d": "Know what each standard added and write code that is portable across them.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "C99: // comments, declarations anywhere, stdint.h, bool, variable-length arrays",
              "C11: threads, atomics, _Static_assert, _Generic; C17: bug fixes; C23: constexpr, typeof, nullptr, binary literals",
              "Feature-test macros (__STDC_VERSION__) let one codebase adapt to the available standard"
            ],
            "do": [
              "Compile the same program with -std=c89, -std=c99, -std=c11, -std=c17 and note what breaks",
              "Use _Static_assert to enforce a struct size at compile time",
              "Write a _Generic macro that behaves like a tiny type-dispatched function"
            ],
            "tools": ["GCC", "Clang"],
            "res": [
              ["C23 — cppreference", "https://en.cppreference.com/w/c/23"],
              ["C language history — cppreference", "https://en.cppreference.com/w/c/language/history"]
            ],
            "tip": "Target C11 or C17 for maximum portability today; reach for C23 features only when you control the toolchain."
          },
          {
            "t": "Idioms: RAII-Style Cleanup in C",
            "d": "goto cleanup, __attribute__((cleanup)), and error paths that never leak.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "The goto-cleanup pattern: one exit label that frees everything acquired so far",
              "GCC's __attribute__((cleanup)) runs a destructor function when a variable leaves scope",
              "Consistent error propagation: every function documents how it reports failure"
            ],
            "do": [
              "Rewrite a function with five early returns into the single-cleanup-label style",
              "Implement an autofree smart-pointer-like macro with __attribute__((cleanup))",
              "Audit a 500-line program so every error path frees exactly what was allocated"
            ],
            "tools": ["GCC", "Valgrind"],
            "res": [
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Dijkstra hated goto, but the cleanup label is the one goto every C codebase agrees on. Consistency beats dogma."
          },
          {
            "t": "Capstone: Build & Ship a C Project",
            "d": "Design, build, test, and document a complete C program like a professional.",
            "lv": 3,
            "time": "~3w",
            "learn": [
              "Project anatomy: README, CMake build, src/include/tests layout, CI running sanitizers",
              "Writing for readers: consistent style, documented ownership, and a test for every behavior",
              "What 'done' means: builds warning-free on GCC and Clang, passes sanitizers, documented usage"
            ],
            "do": [
              "Pick one: a JSON parser, an HTTP client, a shell, or a small game engine core",
              "Set up CMake + a test suite + GitHub Actions running gcc, clang, ASan, UBSan",
              "Write a README with build instructions, examples, and a tour of the design decisions"
            ],
            "tools": ["CMake", "GCC", "Clang", "GitHub Actions"],
            "res": [
              ["CMake tutorial", "https://cmake.org/cmake/help/latest/guide/tutorial/"],
              ["Beej's Guide to C Programming", "https://beej.us/guide/bgc/"]
            ],
            "tip": "Employers read C portfolios for memory discipline. A sanitizer-clean CI badge says more than any bullet point.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
