/* Atlas roadmap data: Shell / Bash (shell-bash) */
ROADMAPS.push({
  "id": "shell-bash",
  "title": "Shell / Bash",
  "icon": "⌨️",
  "color": "#2ecc71",
  "desc": "From first command to hardened scripts: own the terminal, process text like water, and automate your life.",
  "kind": "skill",
  "root": {
    "t": "Bash and Terminal Mastery",
    "d": "The shell is the fastest interface ever built. Learn to drive it.",
    "children": [
      {
        "t": "Terminal Basics",
        "d": "Move, create, delete, and get help — the daily survival kit.",
        "lv": 1,
        "children": [
          {
            "t": "The Terminal, the Shell, and You",
            "d": "What actually runs when you type a command.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Terminal emulator vs shell vs kernel: who does what when you press Enter",
              "Bash vs zsh vs sh: what changes and what stays the same",
              "The prompt as a status readout: user, host, directory"
            ],
            "do": [
              "Open a terminal and run `echo $SHELL` and `echo $0` to see what's running",
              "Try `bash --version` and note it",
              "Resize, scroll, and clear (`clear`, Ctrl+L) until the terminal feels like home"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Reference Manual", "https://www.gnu.org/software/bash/manual/bash.html"],
              ["Linux Journey", "https://linuxjourney.com/"]
            ],
            "tip": "Bash and the terminal are different things. Switching terminals (GNOME Terminal to Alacritty) changes looks; switching shells (bash to zsh) changes behavior. Know which one you're debugging."
          },
          {
            "t": "Anatomy of a Command",
            "d": "Commands, options, arguments — and how the shell parses them.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "How the shell splits your line into a command name plus arguments",
              "Short flags (`-l`), long flags (`--long`), and combined flags (`-la`)",
              "Why argument order usually doesn't matter but sometimes does"
            ],
            "do": [
              "Run `ls`, `ls -l`, `ls -la`, `ls --help` and compare outputs",
              "Deliberately mistype a command and read the error carefully",
              "Paste any command into explainshell.com and read its breakdown"
            ],
            "tools": ["bash", "explainshell"],
            "res": [
              ["ExplainShell", "https://explainshell.com/"]
            ]
          },
          {
            "t": "Moving Around: pwd, ls, cd",
            "d": "Never get lost in the filesystem again.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Absolute vs relative paths, and what `.` and `..` really mean",
              "`ls` flags that matter: `-l` (details), `-a` (hidden), `-h` (human sizes), `-t` (time)",
              "`cd -` to jump back, `~` for home, and tab completion as a superpower"
            ],
            "do": [
              "Navigate a deep tree using only relative paths, then only absolute paths",
              "List a directory three ways: `ls`, `ls -la`, `ls -lath` — learn what each column means",
              "Use tab completion for everything for a day; notice how much typing you skip"
            ],
            "tools": ["bash", "coreutils"],
            "res": [
              ["Linux Journey: The Shell", "https://linuxjourney.com/"]
            ]
          },
          {
            "t": "Creating, Copying, Moving, Deleting",
            "d": "File operations with no safety net — and how to survive them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "`touch`, `mkdir -p`, `cp -r`, `mv`, `rm -rf` and what each can destroy",
              "Why there is no recycle bin in the shell — and the habits that replace it",
              "Interactive mode (`-i`) and verbose mode (`-v`) as training wheels"
            ],
            "do": [
              "Build a practice tree with `mkdir -p`, populate it with `touch`, reorganize with `mv`",
              "Copy a directory with `cp -r` and verify with `diff -r`",
              "Practice `rm -i` on junk files; graduate to `rm` only when you're sure"
            ],
            "tools": ["bash", "coreutils"],
            "res": [
              ["Linux Journey: Manipulating Files", "https://linuxjourney.com/"]
            ],
            "tip": "`rm -rf` never asks twice and never forgives. Never run it with a variable you haven't echoed first, and never as root unless you truly mean it."
          },
          {
            "t": "Getting Help: man, --help, type, which",
            "d": "The manual is always one keystroke away.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "`man` pages: structure (NAME, SYNOPSIS, OPTIONS) and navigating with / and q",
              "`--help` for quick reminders vs `man` for the full story",
              "`type`, `which`, `command -v`: is this a builtin, an alias, or a real binary?"
            ],
            "do": [
              "Open `man ls`, search for `--time` with `/`, quit with `q`",
              "Compare `type cd`, `type ls`, `type grep` — spot the builtin, alias, and binary",
              "Answer 'what does tar -xzf do' using only the man page"
            ],
            "tools": ["bash", "man"],
            "res": [
              ["Bash Reference Manual", "https://www.gnu.org/software/bash/manual/bash.html"]
            ]
          },
          {
            "t": "Readline: Editing the Command Line",
            "d": "Your keyboard is faster than your mouse, even inside the prompt.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The ten shortcuts that matter: Ctrl+A/E (line ends), Ctrl+U/K (kill), Ctrl+W (word), Ctrl+R (history search)",
              "Alt+F/B to jump words, Ctrl+_ to undo an edit",
              "Emacs mode (default) vs vi mode (`set -o vi`) and which to pick"
            ],
            "do": [
              "Type a long command, then fix the middle of it using only Ctrl+A/E and arrow-free movement",
              "Find a command from last week with Ctrl+R instead of scrolling",
              "Try `set -o vi`, press Esc, and decide which mode fits your brain"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Reference Manual: Readline", "https://www.gnu.org/software/bash/manual/bash.html"]
            ],
            "tip": "Ctrl+R (reverse history search) is the single highest-ROI shortcut in the shell. Most people who 'can't remember commands' just never learned to search their own history."
          }
        ]
      },
      {
        "t": "Streams, Redirection, and Pipes",
        "d": "The plumbing that turns small commands into big machines.",
        "lv": 1,
        "children": [
          {
            "t": "stdin, stdout, stderr",
            "d": "Every command talks through three channels. Learn to listen to each.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "File descriptors 0/1/2: input, normal output, error output",
              "Why errors and output are separate streams (so you can process one without the other)",
              "How this 1970s design still powers every modern pipeline"
            ],
            "do": [
              "Run `ls /exists /does-not-exist` and see stdout vs stderr mixed on screen",
              "Separate them: `ls /exists /does-not-exist > out.txt 2> err.txt`, then inspect both files",
              "Merge them on purpose: `command 2>&1 | less`"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Redirection", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "Redirection Operators",
            "d": "Send output to files, read input from files, append instead of clobber.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "`>` (overwrite), `>>` (append), `<` (input), `2>` (errors), `&>` (everything)",
              "Heredocs (`<<EOF`) for multi-line input without temp files",
              "The clobber trap: `>` on an existing file destroys it instantly"
            ],
            "do": [
              "Build a log file with `>>`, then accidentally `>` it — feel the lesson, then restore from git",
              "Write a small config file using a heredoc",
              "Discard noise with `2>/dev/null` and see only what matters"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Redirection", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "`>` vs `>>` is the difference between 'save' and 'delete everything then save'. When in doubt, use `>>` — or enable `set -o noclobber` to make `>` refuse to overwrite."
          },
          {
            "t": "Pipes and tee",
            "d": "Chain commands together; split the stream when you need a copy.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Pipes (`|`) connect one command's stdout to the next command's stdin",
              "The Unix philosophy: small tools, each doing one thing, composed freely",
              "`tee`: tap a pipeline to both see output and save it to a file"
            ],
            "do": [
              "Build `history | tail -20 | grep ssh` and read what each stage contributes",
              "Run a long command with `| tee build.log` so you watch and record simultaneously",
              "Chain four commands: `ps aux | grep -v grep | grep python | awk '{print $2}'`"
            ],
            "tools": ["bash", "coreutils"],
            "res": [
              ["Linux Journey: Redirection", "https://linuxjourney.com/"]
            ]
          },
          {
            "t": "Exit Codes and Command Chaining",
            "d": "0 means success; everything else is a story. Chain on it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Exit codes: 0 = success, 1-255 = various failures; `$?` holds the last one",
              "`&&` (run if success), `||` (run if failure), `;` (run regardless)",
              "How scripts and CI systems use exit codes to decide pass/fail"
            ],
            "do": [
              "Run a failing command, then `echo $?` immediately — see the nonzero code",
              "Chain: `mkdir demo && cd demo && touch file.txt` vs one failing step",
              "Write a guard: `command -v docker || echo 'docker not installed'`"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Tests and Conditionals", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "`$?` is overwritten by EVERY command — even `echo`. Capture it into a variable immediately (`code=$?`) or it evaporates."
          }
        ]
      },
      {
        "t": "Text Processing Toolbox",
        "d": "grep, sed, awk: the trinity of turning text into answers.",
        "lv": 2,
        "children": [
          {
            "t": "grep: Searching Text",
            "d": "Find needles in haystacks across thousands of files.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Basic vs extended vs Perl regex modes (`-G`, `-E`, `-P`)",
              "The flags you will use daily: `-r` (recursive), `-i` (case), `-n` (line numbers), `-v` (invert), `-c` (count)",
              "`--include`/`--exclude` to search only the file types you care about"
            ],
            "do": [
              "Find every TODO in a codebase: `grep -rn --include='*.py' TODO .`",
              "Count occurrences: `grep -c 'error' app.log` vs list them with `-n`",
              "Invert a search: `grep -v '^#' config.conf` to strip comments"
            ],
            "tools": ["grep", "ripgrep"],
            "res": [
              ["GNU grep Manual", "https://www.gnu.org/software/grep/manual/"]
            ],
            "tip": "Install ripgrep (`rg`) — it's grep-compatible, respects .gitignore, and is dramatically faster on big trees. `rg` is what `grep -r` wishes it were."
          },
          {
            "t": "Regular Expressions in the Shell",
            "d": "The pattern language behind grep, sed, and half of Bash.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Core atoms: `.` `*` `+` `?` `[]` `^` `$` and what each matches",
              "Greedy vs lazy matching and why greedy bites beginners",
              "Capture groups and backreferences for rearranging text"
            ],
            "do": [
              "Match log lines: `grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}' app.log`",
              "Extract emails with `grep -oE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+'`",
              "Test patterns interactively on regex101.com before using them in scripts"
            ],
            "tools": ["grep", "regex101"],
            "res": [
              ["regex101 (tester)", "https://regex101.com/"]
            ],
            "tip": "Always test a regex on regex101 or with `grep -o` on sample data before putting it in a script. A wrong regex fails silently — it just matches nothing."
          },
          {
            "t": "sed: Stream Editing",
            "d": "Find, replace, delete, and transform text without opening an editor.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "The substitution command `s/pattern/replacement/flags` and its flags (g, i)",
              "Addressing: line numbers, ranges, and regex addresses to target edits",
              "In-place editing with `-i` (and why you back up with `-i.bak` first)"
            ],
            "do": [
              "Rename across files: `sed -i.bak 's/old_name/new_name/g' *.py`",
              "Delete comment lines: `sed '/^#/d' config.conf`",
              "Extract with capture groups: `sed -E 's/.*user=([a-z]+).*/\\1/' log.txt`"
            ],
            "tools": ["sed"],
            "res": [
              ["GNU sed Manual", "https://www.gnu.org/software/sed/manual/sed.html"]
            ],
            "tip": "When patterns contain slashes, switch delimiters: `s|/old/path|/new/path|` reads far better than `s\\/old\\/path`. sed accepts any delimiter."
          },
          {
            "t": "awk: The Programmable Filter",
            "d": "A tiny language for columns, sums, and reports.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The pattern-action model: `awk 'pattern { action }'` on every line",
              "Fields: `$1`, `$2`, `$NF` (last field), and `-F` for custom separators",
              "BEGIN/END blocks for headers, totals, and averages"
            ],
            "do": [
              "Print columns: `ps aux | awk '{print $2, $11}'`",
              "Sum a column: `awk -F, '{sum+=$3} END {print sum}' data.csv`",
              "Reformat logs: parse an access log into 'IP requested URL status'"
            ],
            "tools": ["awk", "gawk"],
            "res": [
              ["GAWK Manual", "https://www.gnu.org/software/gawk/manual/"]
            ],
            "tip": "awk shines at columnar data; reaching for it on JSON or XML is pain. Use `jq` for JSON the way you use awk for columns."
          },
          {
            "t": "The Classic Coreutils: cut, tr, sort, uniq",
            "d": "Four small tools that solve 80% of text chores.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "`cut -d, -f1,3`: carve columns out of delimited text",
              "`tr`: translate or delete single characters (uppercase, squeeze spaces)",
              "`sort | uniq -c`: the canonical 'top N' pattern for counting"
            ],
            "do": [
              "Extract usernames: `cut -d: -f1 /etc/passwd | sort | head`",
              "Normalize text: `tr 'A-Z' 'a-z' < file | tr -s ' ' ' '`",
              "Find the top 10 IPs in a log: `awk '{print $1}' access.log | sort | uniq -c | sort -rn | head`"
            ],
            "tools": ["coreutils"],
            "res": [
              ["Linux Journey: Text Manipulation", "https://linuxjourney.com/"]
            ]
          },
          {
            "t": "head, tail, wc, and Friends",
            "d": "Peek at files, watch them grow, measure them.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "`head`/`tail` with `-n` and `tail -f` for following live logs",
              "`wc -l/-w/-c`: lines, words, bytes — the quickest file stats",
              "`less` as the pager: search with `/`, follow with `F`"
            ],
            "do": [
              "Watch a live log: `tail -f /var/log/syslog` (Ctrl+C to stop)",
              "Measure a file three ways with `wc` and compare with `ls -l`",
              "Page a huge file with `less`, search inside it, jump with `G`"
            ],
            "tools": ["coreutils", "less"],
            "res": [
              ["Linux Journey: Text Manipulation", "https://linuxjourney.com/"]
            ]
          },
          {
            "t": "find and xargs",
            "d": "Locate files by any criteria, then act on them in bulk.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`find` tests: `-name`, `-type`, `-mtime`, `-size`, and combining with `-and`/`-or`",
              "`-exec` vs piping to `xargs`: two ways to run commands on results",
              "Why `xargs -0` with `find -print0` is the only safe combo for weird filenames"
            ],
            "do": [
              "Find Python files changed this week: `find . -name '*.py' -mtime -7`",
              "Delete safely: `find . -name '*.tmp' -print` first, then add `-delete`",
              "Count lines across a tree: `find . -name '*.sh' -print0 | xargs -0 wc -l | tail -1`"
            ],
            "tools": ["findutils"],
            "res": [
              ["BashGuide: find", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Never parse `ls` output in scripts — filenames can contain newlines. `find -print0 | xargs -0` handles every legal filename safely."
          }
        ]
      },
      {
        "t": "Shell Internals",
        "d": "Variables, quoting, and expansion: how Bash really thinks.",
        "lv": 2,
        "children": [
          {
            "t": "Variables and the Environment",
            "d": "Shell variables vs environment variables, and who sees what.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Assignment has NO spaces: `x=1` works, `x = 1` runs `x` as a command",
              "`export` promotes a shell variable so child processes inherit it",
              "Special variables: `$?`, `$$`, `$#`, `$@`, `$0`, `$HOME`, `$PATH`"
            ],
            "do": [
              "Set `EDITOR=vim`, then `export EDITOR` — check with `env | grep EDITOR`",
              "Inspect `$PATH`: `echo $PATH | tr ':' '\\n'` and see where commands come from",
              "Break it on purpose: `x = 1` and read the error until it makes sense"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Variables", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Spaces around `=` in assignments is the #1 Bash beginner error. The shell sees `x = 1` as three words: run command `x` with arguments `=` and `1`."
          },
          {
            "t": "Quoting: Single, Double, None",
            "d": "The difference between what you typed and what the shell saw.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Single quotes: everything literal, zero expansion",
              "Double quotes: variables and command substitution expand, but no word splitting of the result... except there is — learn the rule",
              "No quotes: word splitting and globbing happen — usually not what you want"
            ],
            "do": [
              "Compare: `echo '$HOME'`, `echo \"$HOME\"`, `echo $HOME`",
              "Create a file with a space in its name; delete it correctly with quotes",
              "Run `var='a b'; for w in $var; do echo $w; done` vs quoted `\"$var\"` — see the split"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Quoting", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Default to double quotes around every variable: `\"$var\"`. Unquoted variables split on spaces and expand globs — the source of most mysterious script bugs."
          },
          {
            "t": "Expansions: Brace, Glob, Parameter",
            "d": "Bash rewrites your command before running it. Master the rewrites.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Brace expansion: `mkdir -p project/{src,tests,docs}` creates three dirs in one breath",
              "Globs: `*`, `?`, `[...]` matched against filenames (not regex!)",
              "Parameter expansion: `${var:-default}`, `${var#prefix}`, `${var%.ext}`, `${#var}`"
            ],
            "do": [
              "Generate sequences: `echo file_{01..10}.txt` and `echo {a,b}_{1,2}`",
              "Rename extensions in bulk: `for f in *.jpeg; do mv \"$f\" \"${f%.jpeg}.jpg\"; done`",
              "Use defaults: `echo \"${EDITOR:-vim}\"` with EDITOR set and unset"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Hackers Wiki: Expansions", "https://wiki.bash-hackers.org/"]
            ]
          },
          {
            "t": "Command Substitution",
            "d": "Use a command's output as part of another command.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`$(command)` (modern) vs backticks (legacy) — always use `$()`",
              "Nesting works with `$()`: `echo $(basename $(pwd))`",
              "Trailing newlines are stripped; quote the substitution to preserve spacing"
            ],
            "do": [
              "Count files: `echo \"There are $(ls | wc -l) files here\"`",
              "Use in arguments: `grep -r \"TODO\" $(git ls-files '*.py' 2>/dev/null || echo .)`",
              "Nest once: `tar -czf backup-$(date +%F).tar.gz $(ls)`"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Command Substitution", "https://mywiki.wooledge.org/BashGuide"]
            ]
          }
        ]
      },
      {
        "t": "Scripting",
        "d": "Turn one-liners into programs: logic, loops, functions, arguments.",
        "lv": 2,
        "children": [
          {
            "t": "Your First Script: Shebang to Execution",
            "d": "From a text file to a runnable program in five minutes.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The shebang `#!/usr/bin/env bash`: how the OS picks the interpreter",
              "`chmod +x` and why scripts need the execute bit",
              "Running `./script.sh` vs `bash script.sh` vs putting it on your PATH"
            ],
            "do": [
              "Write hello.sh with a shebang, `chmod +x` it, run it with `./hello.sh`",
              "Make a `~/bin` directory, add it to PATH in .bashrc, drop a script there",
              "Break the shebang on purpose (point it at /bin/false) and read the error"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Scripting", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "Conditionals and Tests",
            "d": "Make scripts that decide: if, test, and [[ ]].",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`if`/`elif`/`else`/`fi` structure and how conditions are just commands' exit codes",
              "`[[ ]]` vs `[ ]`: why double brackets are safer (no word splitting, regex with =~)",
              "File tests (`-f`, `-d`, `-e`) and string/number comparisons"
            ],
            "do": [
              "Write a script that checks its argument: file exists? directory? neither?",
              "Compare `[ \"$a\" = \"$b\" ]` with `[[ $a == *.log ]]` pattern matching",
              "Guard a destructive operation: only `rm` the backup dir if the new backup verified"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Tests and Conditionals", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Inside `[[ ]]` you don't need to quote variables for word splitting — but quoting never hurts. The real win: `[[ $str =~ ^[0-9]+$ ]]` gives you regex matching no `[ ]` can."
          },
          {
            "t": "Loops: for, while, until",
            "d": "Repeat work without repeating yourself.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`for x in list`: iterating words, globs, and brace expansions",
              "`while read` loops: the correct way to process lines from a file or command",
              "C-style `for ((i=0; i<10; i++))`, `break`, `continue`, and loop control"
            ],
            "do": [
              "Rename 50 files with a for loop over a glob",
              "Process a file line by line: `while IFS= read -r line; do ...; done < file.txt`",
              "Retry a flaky command up to 5 times with a while loop and a counter"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Loops", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Never `for line in $(cat file)` — word splitting mangles lines. `while IFS= read -r line` is the correct idiom; memorize it."
          },
          {
            "t": "Functions",
            "d": "Name a block of code, give it arguments, reuse it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Defining and calling: `name() { ...; }`, arguments as `$1`, `$2`, `$@`",
              "`local` variables: why every function variable should be local",
              "Return values are exit codes; real data comes back via stdout or namerefs"
            ],
            "do": [
              "Write a `log()` function that prefixes messages with a timestamp",
              "Write `backup()` taking a directory argument, with `local` vars throughout",
              "Source a library file of functions into multiple scripts with `. lib.sh`"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Functions", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "Reading Input and Parsing Arguments",
            "d": "Scripts that talk back: prompts, flags, and positional args.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`read -p` for prompts, `read -s` for secrets, and validating input",
              "Positional params `$1..$n`, `$#` (count), `$@` (all, quoted properly)",
              "`getopts` for real flags: `-v`, `-o file`, and a usage message"
            ],
            "do": [
              "Write an interactive setup script that asks for a name and confirms before acting",
              "Parse `-v` (verbose) and `-o <file>` with getopts in a utility script",
              "Add a `--help` path that prints usage and exits 0"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: getopts", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "case and Select",
            "d": "Clean branching for menus and command dispatch.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`case` patterns: glob matching against a value, with `;;` terminators",
              "`select`: Bash's built-in numbered menu generator",
              "When case beats if/elif chains (many string options)"
            ],
            "do": [
              "Write a `case` dispatcher for start/stop/restart/status of a toy service",
              "Build an interactive menu with `select` offering 4 actions",
              "Match extensions: `*.tar.gz`, `*.zip`, `*` fallback in an extract script"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: case", "https://mywiki.wooledge.org/BashGuide"]
            ]
          }
        ]
      },
      {
        "t": "Job Control and Processes",
        "d": "Run things in the background, schedule them, keep them alive.",
        "lv": 2,
        "children": [
          {
            "t": "Job Control: bg, fg, Ctrl+Z",
            "d": "Pause, background, and resume jobs without losing them.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Ctrl+Z suspends (doesn't kill); `bg` resumes in background, `fg` brings back",
              "`jobs` lists your shell's jobs; `%1`, `%2` address them",
              "`&` at the end launches directly in the background"
            ],
            "do": [
              "Start `sleep 300`, suspend with Ctrl+Z, `bg` it, `jobs`, then `fg` and Ctrl+C",
              "Launch two background jobs with `&` and switch between them with `fg %n`",
              "Notice jobs die when the shell exits — that's the next topic's problem"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Reference Manual: Job Control", "https://www.gnu.org/software/bash/manual/bash.html"]
            ]
          },
          {
            "t": "Signals and Killing Processes",
            "d": "Ask nicely, then insist: TERM, KILL, and the rest.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Signals as messages: SIGTERM (15, please stop), SIGKILL (9, stop now), SIGHUP (1, terminal gone)",
              "`kill`, `killall`, `pkill`: targeting by PID vs by name pattern",
              "Why SIGKILL is a last resort (no cleanup) and the escalation ladder"
            ],
            "do": [
              "Start a `sleep 1000`, `kill` it (TERM), then try `kill -9` on another",
              "Find a process with `pgrep -af python` and kill by pattern with `pkill -f`",
              "Send SIGHUP to a process and observe which ones survive"
            ],
            "tools": ["bash", "procps"],
            "res": [
              ["Bash Reference Manual: Signals", "https://www.gnu.org/software/bash/manual/bash.html"]
            ],
            "tip": "Escalate: TERM, wait, TERM again, then KILL. Jumping straight to `kill -9` can corrupt files the process was writing — it's the fire axe, not the doorbell."
          },
          {
            "t": "Persistent Sessions: tmux",
            "d": "Detach from a session, log out, come back — everything still running.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Sessions, windows, panes: the tmux hierarchy",
              "Detach (`Ctrl+B d`) and reattach (`tmux attach`) — the killer feature for servers",
              "Why every remote workflow eventually wants tmux (or screen)"
            ],
            "do": [
              "Start a session, split into panes, run a long job, detach, log out, reattach",
              "Name sessions (`tmux new -s deploy`) and list them",
              "Learn the survival kit: new window (Ctrl+B c), next (n), kill pane (x)"
            ],
            "tools": ["tmux"],
            "res": [
              ["tmux GitHub", "https://github.com/tmux/tmux"]
            ]
          },
          {
            "t": "Scheduling with cron",
            "d": "Run scripts on a schedule while you sleep.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Cron syntax: minute hour day-of-month month day-of-week, and the `*/5` step trick",
              "`crontab -e` to edit, `crontab -l` to list; the minimal cron environment (PATH!)" ,
              "Logging cron output and the MAILTO habit for failures"
            ],
            "do": [
              "Schedule a backup script every night at 2:30 AM",
              "Add logging: `30 2 * * * /home/you/backup.sh >> /var/log/backup.log 2>&1`",
              "Debug a 'works manually, fails in cron' case by setting PATH explicitly"
            ],
            "tools": ["cron"],
            "res": [
              ["BashGuide: cron", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Cron runs with a bare-bones environment — your .bashrc is NOT loaded. Always use absolute paths and set PATH at the top of cron scripts."
          }
        ]
      },
      {
        "t": "Script Hardening",
        "d": "Write scripts that fail loudly instead of silently wrecking things.",
        "lv": 3,
        "children": [
          {
            "t": "set -euo pipefail: Strict Mode",
            "d": "Three flags that turn Bash from footgun into a responsible adult.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "`-e`: exit on first failing command; `-u`: error on unset variables; `-o pipefail`: pipelines fail if any stage fails",
              "Where strict mode surprises: intentional non-zero exits and how to allow them (`|| true`)",
              "Why every production script starts with `set -euo pipefail`"
            ],
            "do": [
              "Take an old script, add strict mode, and watch it expose hidden bugs",
              "Handle the exceptions: `grep -q x file || true`, `${VAR:-default}`",
              "Compare a pipeline's exit code with and without pipefail"
            ],
            "tools": ["bash", "shellcheck"],
            "res": [
              ["BashGuide: Strict Mode Discussion", "https://mywiki.wooledge.org/BashGuide"]
            ],
            "tip": "Strict mode doesn't make scripts correct — it makes them honest. A script that fails fast at the real error beats one that silently continues and corrupts data downstream."
          },
          {
            "t": "Traps and Cleanup",
            "d": "Guarantee cleanup even when the script dies mid-run.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "`trap cleanup EXIT`: run a function no matter how the script ends",
              "Trapping INT/TERM for graceful Ctrl+C handling",
              "The temp-file pattern: `tmp=$(mktemp -d); trap 'rm -rf \"$tmp\"' EXIT`"
            ],
            "do": [
              "Write a script that creates temp files and always cleans them, even on Ctrl+C",
              "Add a trap that restores the terminal state on abnormal exit",
              "Test by killing the script mid-run and verifying no leftovers"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Hackers Wiki: trap", "https://wiki.bash-hackers.org/"]
            ]
          },
          {
            "t": "Debugging Scripts: set -x and Beyond",
            "d": "See exactly what Bash sees, line by line.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "`set -x`: trace every command after expansion; `set +x` to stop",
              "Customizing the trace prefix with `PS4` (show line numbers and function names)",
              "Selective tracing: wrap only the suspicious section"
            ],
            "do": [
              "Debug a broken script by adding `set -x` and reading the `+` lines",
              "Set `PS4='+ ${BASH_SOURCE}:${LINENO}: '` for traces that point at code",
              "Use `bash -x script.sh` to trace without editing the file"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Debugging", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "ShellCheck: Your Linter",
            "d": "A second pair of eyes that catches Bash bugs before runtime.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "What ShellCheck flags: quoting, word splitting, deprecated syntax, portability",
              "Reading SC codes (SC2086 etc.) and when a warning is a false positive",
              "Integrating ShellCheck into your editor and CI pipeline"
            ],
            "do": [
              "Run `shellcheck` on every script you've written in this roadmap and fix the findings",
              "Paste a script into shellcheck.net and work through each warning",
              "Add ShellCheck to a GitHub Actions workflow for a repo with scripts"
            ],
            "tools": ["shellcheck"],
            "res": [
              ["ShellCheck", "https://www.shellcheck.net/"],
              ["ShellCheck GitHub", "https://github.com/koalaman/shellcheck"]
            ]
          },
          {
            "t": "Writing Safe, Portable Scripts",
            "d": "Scripts that survive other machines, other shells, and other people.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Bashisms vs POSIX sh: when to target `#!/bin/sh` and when Bash is fine",
              "Defensive habits: quote everything, check prerequisites, validate inputs",
              "Idempotency: scripts you can safely run twice"
            ],
            "do": [
              "Convert a Bash script to POSIX sh and test with `shellcheck -s sh`",
              "Add prerequisite checks (`command -v`) with clear error messages at the top",
              "Make your backup script idempotent and prove it by running it twice"
            ],
            "tools": ["bash", "shellcheck"],
            "res": [
              ["Bash Pitfalls", "https://mywiki.wooledge.org/BashPitfalls"]
            ],
            "tip": "Read the Bash Pitfalls page end to end once. It's a catalog of exactly the bugs you'll otherwise spend years discovering one painful incident at a time."
          }
        ]
      },
      {
        "t": "Dotfiles and Terminal Mastery",
        "d": "Bend the shell to your habits and carry your setup everywhere.",
        "lv": 3,
        "children": [
          {
            "t": "Bash Startup Files: .bashrc vs .bash_profile",
            "d": "Know which file runs when, and stop cargo-culting your config.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Login vs non-login vs interactive vs non-interactive shells and which files each reads",
              "The standard dance: .bash_profile sources .bashrc; why it's done that way",
              "What breaks when you put PATH exports in the wrong file"
            ],
            "do": [
              "Add `echo` markers to each startup file and observe which fire in different contexts",
              "Trace a login shell vs `bash -c` vs a script — map what ran each time",
              "Reorganize your config into sourced modules under `~/.bashrc.d/`"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Reference Manual: Startup Files", "https://www.gnu.org/software/bash/manual/bash.html"]
            ]
          },
          {
            "t": "Crafting Your Prompt (PS1)",
            "d": "Your prompt should tell you where you are and what's dirty.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "PS1 escape sequences: `\\u`, `\\h`, `\\w`, `\\$`, colors with `\\[\\]`",
              "Showing git branch and dirty state in the prompt",
              "Why prompt slowness matters and how to keep it under ~50ms"
            ],
            "do": [
              "Build a two-line prompt with user@host, full path, and exit code of the last command",
              "Add git branch display with a dirty indicator",
              "Time your prompt with `time` around the command substitution and optimize"
            ],
            "tools": ["bash", "git"],
            "res": [
              ["BashGuide: Prompt", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "Aliases and Shell Functions",
            "d": "Shortcuts for the commands you type a hundred times a day.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Aliases: simple text replacement, great for flags (`alias ll='ls -la'`)",
              "Functions: when you need arguments, logic, or pipes — aliases can't do those",
              "Organizing them in version-controlled dotfiles instead of random .bashrc edits"
            ],
            "do": [
              "Create 5 aliases for your most-typed commands",
              "Convert one alias-with-arguments into a function (e.g. `mkcd`)",
              "Write an `extract` function that unzips/untars anything by extension"
            ],
            "tools": ["bash"],
            "res": [
              ["BashGuide: Aliases", "https://mywiki.wooledge.org/BashGuide"]
            ]
          },
          {
            "t": "Command History Mastery",
            "d": "Your shell remembers everything. Learn to interrogate it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "History expansion: `!!`, `!$`, `!grep`, `^old^new`",
              "HISTCONTROL, HISTSIZE, HISTFILESIZE: tuning what gets remembered",
              "Sharing history across sessions and keeping secrets out of it"
            ],
            "do": [
              "Redo the last command with sudo: `sudo !!`",
              "Reuse the last argument: `mkdir project && cd !$`",
              "Set `HISTCONTROL=ignoredups:erasedups` and a 10k history size"
            ],
            "tools": ["bash"],
            "res": [
              ["Bash Reference Manual: History", "https://www.gnu.org/software/bash/manual/bash.html"]
            ],
            "tip": "Put a space before commands containing secrets — with `HISTCONTROL=ignorespace`, they never touch your history file."
          },
          {
            "t": "Dotfiles Management",
            "d": "Version your entire shell setup and deploy it anywhere in minutes.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "The bare-repo trick: a git repo with work-tree=$HOME for tracking dotfiles",
              "What to version (configs, scripts) vs what not to (caches, secrets)",
              "Bootstrap scripts: one command to set up a fresh machine"
            ],
            "do": [
              "Create a bare repo: `git init --bare ~/.dotfiles`, alias `dotfiles` to manage it",
              "Track .bashrc, .vimrc, .gitconfig; add a README with the install steps",
              "Write an install.sh that symlinks everything and works on a fresh VM"
            ],
            "tools": ["git", "bash", "stow"],
            "res": [
              ["Atlassian: Dotfiles with Bare Repo", "https://www.atlassian.com/git/tutorials/dotfiles"]
            ],
            "badge": "PROJECT"
          },
          {
            "t": "Modern Terminal Upgrades",
            "d": "fzf, zoxide, starship: the community's favorite power-ups.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "fzf: fuzzy-find anything (files, history, processes) with Ctrl+R/Ctrl+T",
              "zoxide: `z` jumps to frequently used directories — cd that learns",
              "starship: a fast, informative prompt without the DIY pain"
            ],
            "do": [
              "Install fzf and rebind Ctrl+R; feel history search become instant",
              "Use `z` for a week instead of `cd` and watch it learn your habits",
              "Try starship's presets and pick one, or keep your hand-built PS1"
            ],
            "tools": ["fzf", "zoxide", "starship"],
            "res": [
              ["fzf", "https://github.com/junegunn/fzf"],
              ["zoxide", "https://github.com/ajeetdsouza/zoxide"],
              ["Starship", "https://starship.rs/"]
            ],
            "tag": "opt"
          },
          {
            "t": "SSH Config and Remote Workflows",
            "d": "Jump between servers with nicknames, keys, and multiplexing.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "`~/.ssh/config`: Host blocks with HostName, User, IdentityFile, Port",
              "Key-based auth, ssh-agent, and why passwords over SSH should die",
              "Multiplexing (ControlMaster) and ProxyJump for bastion hosts"
            ],
            "do": [
              "Write Host blocks so `ssh prod` just works with the right key and user",
              "Set up ProxyJump through a bastion to reach a private host",
              "Enable connection multiplexing and feel the second `ssh` connect instantly"
            ],
            "tools": ["ssh", "tmux"],
            "res": [
              ["OpenSSH Manual", "https://www.openssh.com/manual.html"]
            ]
          }
        ]
      }
    ]
  }
});
