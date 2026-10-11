/* Atlas roadmap data: Git and GitHub (git-and-github) */
ROADMAPS.push({
  "id": "git-and-github",
  "title": "Git and GitHub",
  "icon": "🌿",
  "color": "#f34f29",
  "desc": "From your first commit to confident collaboration: master Git's internals, branching, and GitHub's full toolkit.",
  "kind": "skill",
  "root": {
    "t": "Git and GitHub Mastery",
    "d": "Version control fluency for real-world teams and open source.",
    "children": [
      {
        "t": "Version Control Foundations",
        "d": "Why Git exists and how to set it up properly.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Version Control",
            "d": "Every change to your code, tracked and reversible, with full history.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Version control as a timeline: snapshots of a project you can revisit anytime",
              "Why `undo` and `restore` beat backups: history is structured and searchable",
              "How version control makes team collaboration possible without overwriting each other"
            ],
            "do": [
              "Read the Pro Git book's opening chapter on version control",
              "Sketch the idea: how would you track changes without any tool?",
              "Install Git by running `git --version` and confirming it prints a version"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git Book (Chapter 1)", "https://git-scm.com/book/en/v2"],
              ["Git Documentation", "https://git-scm.com/doc"]
            ],
            "tip": "People confuse Git and GitHub constantly. Git is the local version-control tool; GitHub is one website that hosts Git repositories. You can use Git forever without ever touching GitHub."
          },
          {
            "t": "Centralized vs Distributed VCS",
            "d": "Why Git's every-developer-has-the-full-history design changes everything.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Centralized systems (SVN): one server holds the history, you hold a checkout",
              "Distributed systems (Git): every clone is a full copy of the entire history",
              "What that buys you: offline work, cheap branching, and no single point of failure"
            ],
            "do": [
              "Clone any public repo and run `git log --oneline | head` — notice you get full history offline",
              "Compare with SVN's model in the Pro Git book",
              "Disconnect from the network and keep working — that freedom is the point"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Distributed Git", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Installing Git Everywhere",
            "d": "Get Git on your machine and prove it works.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "How Git installs on each OS (system package managers vs installers)",
              "Verifying the install and where Git puts its binaries",
              "Keeping Git updated: why an old Git can bite you (new features, security fixes)"
            ],
            "do": [
              "Install Git: `apt install git`, `brew install git`, or the Windows installer",
              "Run `git --version` and note the version number",
              "Run `git help` to see the top-level command list"
            ],
            "tools": ["git"],
            "res": [
              ["Git Downloads", "https://git-scm.com/downloads"]
            ]
          },
          {
            "t": "git config: Identity, Scopes, Aliases",
            "d": "Tell Git who you are, then bend it to your will.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Config scopes: system, global, local — and which wins when they overlap",
              "Why every commit needs `user.name` and `user.email` attached",
              "Aliases: turning `git checkout` into `git co` and longer tricks"
            ],
            "do": [
              "Set identity: `git config --global user.name \"You\"` and `user.email`",
              "Inspect with `git config --list --show-origin` and read where each value comes from",
              "Add aliases: `git config --global alias.co checkout`, `alias.br branch`, `alias.st status`"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Git Configuration", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Use your real GitHub email in user.email or your commits won't link to your profile. Private email? GitHub offers a noreply address like 12345+you@users.noreply.github.com — commit with that instead."
          },
          {
            "t": ".gitignore Done Right",
            "d": "Stop committing secrets, build artifacts, and editor junk.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How .gitignore patterns work: wildcards, negation with `!`, directory rules",
              "What belongs in it: build output, dependencies (node_modules), secrets, OS/editor files",
              "Global gitignore for personal files vs per-repo gitignore for project files"
            ],
            "do": [
              "Create a .gitignore with patterns for your stack (node_modules, .env, dist/)",
              "Test it: `git status` should hide ignored files; use `git check-ignore -v file` to see which rule matches",
              "Remove an accidentally tracked file with `git rm --cached` without deleting it from disk"
            ],
            "tools": ["git"],
            "res": [
              ["GitHub gitignore Templates", "https://github.com/github/gitignore"]
            ],
            "tip": ".gitignore only ignores untracked files. If a file is already tracked, adding it to .gitignore does nothing — you must `git rm --cached` it first."
          }
        ]
      },
      {
        "t": "Repositories and Daily Commits",
        "d": "The core loop: stage, commit, inspect.",
        "lv": 1,
        "children": [
          {
            "t": "Your First Repository: init and clone",
            "d": "Create a repo from nothing, or copy one from GitHub.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "What `git init` actually creates: the hidden `.git` directory with the whole database",
              "Cloning: copying a repo including all its history and branches",
              "Bare vs non-bare repos and why you never edit files in a bare repo"
            ],
            "do": [
              "Make a directory, run `git init`, and explore `.git/` with `ls`",
              "Clone a public repo with `git clone <url>` and note the difference from init",
              "Run `git status` in both and compare what Git tells you"
            ],
            "tools": ["git"],
            "res": [
              ["GitHub: Create a Repo Guide", "https://docs.github.com/en"]
            ]
          },
          {
            "t": "The Three Areas: Working Tree, Staging, Commits",
            "d": "The mental model that makes every Git command click.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Working tree: your actual files; staging area (index): the proposed next commit; HEAD: your last commit",
              "Files flow one way: working tree -> staging -> commit",
              "How `git status` shows you exactly where every change sits in this flow"
            ],
            "do": [
              "Edit a file, run `git status` — see it under 'Changes not staged'",
              "Run `git add`, run `git status` again — watch it move to 'Changes to be committed'",
              "Commit, then check `git status`: a clean tree means the flow completed"
            ],
            "tools": ["git"],
            "res": [
              ["Learn Git Branching", "https://learngitbranching.js.org/"]
            ],
            "tip": "Most Git confusion comes from not knowing the three areas. When a command surprises you, ask: which area did it change? The answer almost always explains the behavior."
          },
          {
            "t": "Staging with Intent: git add Variants",
            "d": "Commit exactly what you mean, not everything that changed.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "`git add <file>` vs `git add .` vs `git add -p` (patch mode)",
              "Patch mode: reviewing and staging hunks one by one for surgical commits",
              "How staging lets one working tree produce multiple focused commits"
            ],
            "do": [
              "Make two unrelated edits in one file and stage them as two commits with `git add -p`",
              "Try `git add -u` to stage modified/deleted files without new ones",
              "Unstage with `git reset HEAD <file>` and notice nothing was deleted from disk"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Recording Changes", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Writing Commits People Trust",
            "d": "A commit message is a promise to your future teammates.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The 50/72 convention: short imperative subject line, blank line, explanatory body",
              "Why imperative mood ('Fix login bug' not 'Fixed') and what 'why' goes in the body",
              "Conventional Commits (feat:, fix:, chore:) for machine-readable history"
            ],
            "do": [
              "Write a commit with subject and body: `git commit` (no -m) to use your editor",
              "Adopt Conventional Commits for one week on a practice repo",
              "Review your own messages a week later — can you still tell what changed and why?"
            ],
            "tools": ["git"],
            "res": [
              ["Conventional Commits", "https://www.conventionalcommits.org/"]
            ],
            "tip": "The subject line should complete the sentence 'When applied, this commit will...'. 'Add retry logic' works; 'Added stuff' and 'fix' tell nobody anything."
          },
          {
            "t": "Reading History: git log",
            "d": "Your project's memory, on demand.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What a commit really is: hash, author, message, parent pointer, tree snapshot",
              "`git log` formats: oneline, graph, patches, filtering by author/date/path",
              "Why `--graph` matters the moment branches exist"
            ],
            "do": [
              "Run `git log --oneline --graph --all --decorate` on a real repo and learn to read the graph",
              "Find when a file changed: `git log --follow -- path/to/file`",
              "Create a handy alias: `lg = log --color --graph --pretty=format:'%h %s %ad' --date=short`"
            ],
            "tools": ["git"],
            "res": [
              ["Atlassian: git log Tutorial", "https://www.atlassian.com/git/tutorials"]
            ]
          }
        ]
      },
      {
        "t": "Branching and Merging",
        "d": "Work in parallel without stepping on each other.",
        "lv": 2,
        "children": [
          {
            "t": "Branches: The Lightweight Mental Model",
            "d": "A branch is just a movable pointer to a commit. Nothing more.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Branches as pointers: cheap, instant, and disposable by design",
              "HEAD as 'you are here': the pointer to your current branch",
              "Why Git branching is fast (unlike copying folders or SVN branches)"
            ],
            "do": [
              "Create branches freely: `git branch feature-x` and inspect `.git/refs/heads/`",
              "Watch HEAD move: `git checkout` / `git switch` between branches, then `cat .git/HEAD`",
              "Do the Learn Git Branching interactive tutorial through 'Main' and 'Remote' levels"
            ],
            "tools": ["git"],
            "res": [
              ["Learn Git Branching", "https://learngitbranching.js.org/"]
            ],
            "tip": "If branches feel scary or expensive, the pointer model hasn't landed yet. Once it does, you'll create branches the way you create new files."
          },
          {
            "t": "Creating, Renaming, and Deleting Branches",
            "d": "Full branch lifecycle: create, move, prune.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`git branch` vs `git switch -c` vs `git checkout -b`: same job, modern spelling",
              "Renaming with `git branch -m` (including the current branch)",
              "Deleting safely: `-d` refuses to delete unmerged work, `-D` doesn't"
            ],
            "do": [
              "Create and switch in one move: `git switch -c hotfix/login-bug`",
              "Rename it: `git branch -m hotfix/login-retry`",
              "After merging, clean up with `git branch -d` and see `-d` protect unmerged work"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Branching in a Nutshell", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Merge Basics: Fast-Forward vs Merge Commit",
            "d": "Two ways to combine branches, and why the choice matters.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Fast-forward: no divergence, the pointer just slides forward",
              "True merge: divergent branches joined by a merge commit with two parents",
              "`--no-ff` to always record a merge commit, and when that's the policy"
            ],
            "do": [
              "Make a fast-forward merge: branch off, commit, merge back, watch `git log --graph` stay linear",
              "Create divergent branches, merge, and inspect the merge commit with `git show`",
              "Force a merge commit with `git merge --no-ff` and compare the histories"
            ],
            "tools": ["git"],
            "res": [
              ["Atlassian: git merge Tutorial", "https://www.atlassian.com/git/tutorials"]
            ]
          },
          {
            "t": "Resolving Merge Conflicts",
            "d": "When Git can't decide, you do — with a clear method.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What a conflict actually is: two commits changed the same lines differently",
              "Reading conflict markers (<<<<<<<, =======, >>>>>>>) and what 'ours/theirs' mean",
              "The resolution loop: edit, remove markers, `git add`, `git commit`"
            ],
            "do": [
              "Manufacture a conflict on purpose in a practice repo and resolve it",
              "Resolve one conflict using a merge tool (`git mergetool`)",
              "Practice aborting mid-merge with `git merge --abort` when things go wrong"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Basic Merging", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Never fear conflicts — fear unresolved markers getting committed. After resolving, always `git diff --check` for leftover markers before committing."
          },
          {
            "t": "git stash: Shelving Work in Progress",
            "d": "Park unfinished work, switch context, restore it later.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What stash saves (working tree + staging) and what it leaves (untracked files, unless -u)",
              "The stash stack: multiple stashes, naming them, apply vs pop",
              "`stash push -m` for labeled stashes and partial stashing of files"
            ],
            "do": [
              "Start work, get 'interrupted', run `git stash push -m \"wip: login validation\"`",
              "Do the other task, then restore with `git stash pop`",
              "Try `git stash push -p` to stash only some of your changes"
            ],
            "tools": ["git"],
            "res": [
              ["Atlassian: git stash Tutorial", "https://www.atlassian.com/git/tutorials"]
            ]
          },
          {
            "t": "Squash and Clean Merge Histories",
            "d": "Twenty messy WIP commits can become one clear story.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why teams squash PRs: a readable history where each commit is a deployable unit",
              "Squash on merge in GitHub vs squash during interactive rebase locally",
              "The tradeoff: squashing loses the step-by-step archaeology of a feature"
            ],
            "do": [
              "Make a branch with 5 sloppy commits, then squash-merge it into main on GitHub",
              "Squash the same branch locally with `git rebase -i` and `fixup`",
              "Compare `git log` results of both approaches"
            ],
            "tools": ["git", "gh"],
            "res": [
              ["GitHub: About Merge Methods", "https://docs.github.com/en"]
            ]
          }
        ]
      },
      {
        "t": "Remotes and GitHub Collaboration",
        "d": "From your laptop to the world's largest code review machine.",
        "lv": 2,
        "children": [
          {
            "t": "Remotes: origin and Friends",
            "d": "Named bookmarks for other repositories.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Remotes are just nicknames for URLs (`origin` is only a convention)",
              "Tracking branches: how your local branch knows which remote branch to push to",
              "Multiple remotes: fork setups with origin (yours) and upstream (theirs)"
            ],
            "do": [
              "List remotes with `git remote -v`, add one with `git remote add upstream <url>`",
              "Set up tracking: `git branch --set-upstream-to=origin/main`",
              "Rename a remote with `git remote rename` and remove one with `git remote remove`"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Working with Remotes", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Clone, Fetch, Pull, Push",
            "d": "The four verbs of moving commits between machines.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`fetch` downloads without merging (safe); `pull` is fetch + merge (opinions follow)",
              "`push` publishes your commits; refspecs explain what goes where",
              "Why `git pull --rebase` exists and when it beats a merge pull"
            ],
            "do": [
              "Run `git fetch`, inspect `origin/main` without your files changing",
              "Compare `git pull` vs `git pull --rebase` on a diverged branch",
              "Push a branch for the first time: `git push -u origin my-branch` (and what -u sets up)"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Working with Remotes", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Prefer `git pull --rebase` (or configure it globally) to avoid 'Merge branch main into main' noise commits in your history. It replays your work on top of the fresh remote state."
          },
          {
            "t": "Forking and the Contributor Workflow",
            "d": "How you contribute to repos you don't own.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Fork vs clone: a fork is your server-side copy; cloning copies it to your machine",
              "The full loop: fork -> clone -> branch -> commit -> push -> pull request",
              "Keeping your fork fresh: fetching from upstream and rebasing your work"
            ],
            "do": [
              "Fork a real repo, clone your fork, add the original as `upstream`",
              "Make a branch, commit a small improvement (docs count!), push to your fork",
              "Open a pull request against the original repo"
            ],
            "tools": ["git", "gh"],
            "res": [
              ["GitHub: Fork a Repo Guide", "https://docs.github.com/en"]
            ],
            "tip": "Before opening a PR, sync your fork: `git fetch upstream && git rebase upstream/main`. Reviewers notice when your branch is 40 commits behind."
          },
          {
            "t": "Pull Requests Done Right",
            "d": "A PR is a proposal, a conversation, and a quality gate.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "What makes a PR reviewable: small, focused, with a description that explains the why",
              "Draft PRs, linking issues (Closes #123), and PR templates",
              "Checks and required status checks: tests must pass before merging"
            ],
            "do": [
              "Open a draft PR and convert it when ready",
              "Write a description with context, screenshots for UI changes, and test evidence",
              "Review someone's PR with inline comments and suggestions"
            ],
            "tools": ["git", "gh"],
            "res": [
              ["GitHub: About Pull Requests", "https://docs.github.com/en"]
            ]
          },
          {
            "t": "Issues, Labels, and Projects",
            "d": "GitHub's planning tools, from a single bug to a roadmap.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Issues as the unit of work: bug reports, feature requests, discussions",
              "Labels, milestones, and assignees as a lightweight taxonomy",
              "Projects (Kanban) for tracking work across issues and PRs"
            ],
            "do": [
              "File a well-structured issue: reproduction steps, expected vs actual",
              "Create labels (bug, enhancement, good-first-issue) and apply them",
              "Set up a Project board with automated columns for your repo"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Issues Documentation", "https://docs.github.com/en"]
            ]
          },
          {
            "t": "Code Review Like a Pro",
            "d": "Reviews are where teams get better — or get worse.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Reviewing for correctness first, style second; asking questions vs demanding changes",
              "GitHub review tools: approve, request changes, comment, suggestion blocks",
              "Being reviewed gracefully: responding to feedback without defensiveness"
            ],
            "do": [
              "Review a real PR using the Files-changed tab with inline suggestions",
              "Use conventional review prefixes: nit, question, blocking",
              "Address feedback with fixup commits, then reply to each thread"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Reviewing Changes in PRs", "https://docs.github.com/en"]
            ],
            "tip": "The best reviewers explain the 'why' behind a requested change. 'Use X here because Y breaks under Z' teaches; 'use X' just nags."
          },
          {
            "t": "GitHub Organizations and Teams",
            "d": "Scaling collaboration beyond personal accounts.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Organizations: shared ownership, teams, and permission tiers (read/triage/write/maintain/admin)",
              "Teams within orgs: grouping people by function or project",
              "CODEOWNERS: automatic review requests based on who owns which paths"
            ],
            "do": [
              "Create an org (free) and invite a collaborator",
              "Make teams and give a team write access to one repo only",
              "Add a CODEOWNERS file and watch review requests auto-assign"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Organizations Documentation", "https://docs.github.com/en"]
            ]
          }
        ]
      },
      {
        "t": "Undoing and History Surgery",
        "d": "Fix mistakes confidently at every level.",
        "lv": 2,
        "children": [
          {
            "t": "Reading Diffs Like a Native",
            "d": "git diff is a microscope; learn to focus it.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The four diffs: unstaged (`git diff`), staged (`git diff --staged`), commit-to-commit, branch-to-branch",
              "Reading hunks: `@@` headers, context lines, and how to mentally reconstruct the change",
              "Word diffs and stat summaries for different review needs"
            ],
            "do": [
              "Compare `git diff`, `git diff --staged`, and `git diff HEAD` on mixed changes",
              "Diff two branches: `git diff main...feature` (three dots) vs `git diff main..feature`",
              "Use `git diff --word-diff` on a prose/docs file to see the difference"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Viewing Your Staged and Unstaged Changes", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Undoing Safely: revert vs reset",
            "d": "The most important distinction in Git's undo toolkit.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "`git revert`: creates a NEW commit that undoes an old one — safe for shared history",
              "`git reset --soft/--mixed/--hard`: moves the branch pointer back — rewrites local history",
              "The golden rule: never reset commits you've already pushed"
            ],
            "do": [
              "Revert a pushed commit and push the revert — watch history stay honest",
              "Use `git reset --soft HEAD~1` to un-commit but keep staged changes",
              "Use `git reset --hard` on a throwaway branch and feel the danger (safely)"
            ],
            "tools": ["git"],
            "res": [
              ["Oh Shit, Git!?!", "https://ohshitgit.com/"]
            ],
            "tip": "If you're unsure which to use: revert. It's the only undo that works on shared branches without rewriting anyone else's history."
          },
          {
            "t": "The Safety Net: git reflog",
            "d": "Git remembers everything you did for 90 days. Here's how to ask.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The reflog: a private journal of where HEAD and your branches pointed",
              "Recovering 'lost' commits after a bad reset or deleted branch",
              "Why reflog entries expire (90 days default) and why that's fine"
            ],
            "do": [
              "Deliberately 'lose' a commit with `git reset --hard`, then recover it via `git reflog`",
              "Delete a branch, then resurrect it from the reflog hash",
              "Alias it: `git config --global alias.rl 'reflog --date=iso'`"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Git Internals - The Reflog", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Almost nothing in Git is truly lost until the reflog expires and garbage collection runs. Panic is optional; `git reflog` is mandatory."
          },
          {
            "t": "Amending and Polishing Commits",
            "d": "Fix the commit you just made without the guilt.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "`git commit --amend`: fold staged changes into the last commit, or just fix its message",
              "When amend is safe (unpushed) and when it rewrites shared history (pushed)",
              "Amending author info and dates for the occasional identity mix-up"
            ],
            "do": [
              "Forgot a file? Stage it and `git commit --amend --no-edit`",
              "Fix a typo in the last message: `git commit --amend -m \"New message\"`",
              "Amend a pushed commit, then push with `--force-with-lease` on your own branch"
            ],
            "tools": ["git"],
            "res": [
              ["Atlassian: git commit --amend", "https://www.atlassian.com/git/tutorials"]
            ]
          },
          {
            "t": "Interactive Rebasing",
            "d": "Rewrite your branch's history into a story worth reading.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "How rebase replays commits onto a new base, changing their hashes",
              "`git rebase -i`: pick, reword, edit, squash, fixup, drop",
              "The golden rule of rebasing: never rebase commits that others have pulled"
            ],
            "do": [
              "Run `git rebase -i HEAD~4` on a messy branch: squash two, reword one, drop one",
              "Rebase a feature branch onto the latest main and resolve conflicts mid-rebase",
              "Abort a rebase gone wrong with `git rebase --abort`, or `git rebase --continue` after fixing"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Rewriting History", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Interactive rebase is a draft editor for history. The safety net: before any rebase, note the branch's current hash — the reflog can restore it if you mess up."
          },
          {
            "t": "Cherry-Picking",
            "d": "Steal one commit from anywhere and apply it here.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Cherry-pick copies a commit's changes onto your current branch (new hash, same diff)",
              "Use cases: hotfixing a commit from main into a release branch",
              "Why cherry-picks can haunt later merges (duplicate commits) and how -x documents the source"
            ],
            "do": [
              "Cherry-pick a commit from another branch with `git cherry-pick <hash>`",
              "Cherry-pick a range: `git cherry-pick A..B`",
              "Resolve a conflict mid-cherry-pick, then `--continue` or `--abort`"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Rebasing and Cherry-Picking", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "Force Push Without the Fear",
            "d": "--force-with-lease: the seatbelt for rewriting pushed branches.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why force push exists: after rebasing, your history diverged from the remote's",
              "Plain `--force` overwrites blindly; `--force-with-lease` refuses if someone else pushed",
              "Team norms: force-push only on your own PR branches, never on shared branches"
            ],
            "do": [
              "Rebase a pushed branch, then push with `--force-with-lease`",
              "Make `--force-with-lease` the default: `git config --global push.default` and alias `pf = push --force-with-lease`",
              "Simulate a teammate pushing first, and watch --force-with-lease protect their work"
            ],
            "tools": ["git"],
            "res": [
              ["Atlassian: git push --force", "https://www.atlassian.com/git/tutorials"]
            ],
            "tip": "Alias `git pf` to `push --force-with-lease` and never type plain `--force` again. One day a teammate's commit will thank you."
          }
        ]
      },
      {
        "t": "GitHub Actions and Automation",
        "d": "Turn your repo into a machine that tests, builds, and ships.",
        "lv": 2,
        "children": [
          {
            "t": "What Actions Are: CI/CD in YAML",
            "d": "Every push can trigger a workflow. Here's the mental model.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The hierarchy: workflows contain jobs, jobs contain steps, steps run actions or shell",
              "Why CI (continuous integration) matters: catch breakage in minutes, not days",
              "The `.github/workflows/` directory as the control room of your repo"
            ],
            "do": [
              "Read a real workflow file from a popular open-source repo",
              "Draw the workflow -> job -> step hierarchy for a lint-and-test pipeline",
              "Find the Actions tab on any active GitHub repo and read a run's logs"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub Actions Documentation", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Your First Workflow",
            "d": "Write YAML that runs your tests on every push.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Workflow syntax: `on`, `jobs`, `runs-on`, `steps`, `uses`, `run`",
              "The checkout action: why workflows start by cloning your code",
              "Reading run logs to debug failures"
            ],
            "do": [
              "Add `.github/workflows/ci.yml` that runs on push and echoes hello",
              "Extend it: check out code, set up your language, run the test suite",
              "Push a failing commit on purpose and watch the red X; fix it and watch green"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Quickstart for GitHub Actions", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Triggers and Events",
            "d": "push, pull_request, schedule, workflow_dispatch: pick your moment.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Event triggers: push, pull_request, release, issues, schedule (cron), manual dispatch",
              "Filtering: run only on certain branches, paths, or tags",
              "pull_request vs pull_request_target and the security difference"
            ],
            "do": [
              "Add a workflow that runs only when files under `src/` change",
              "Create a scheduled nightly workflow with a cron expression",
              "Add `workflow_dispatch` with inputs so you can trigger runs manually from the UI"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Triggering Workflows", "https://docs.github.com/en/actions"]
            ],
            "tip": "`pull_request_target` runs in the context of the base branch — it can touch secrets. Never check out untrusted PR code with it; that's how supply-chain attacks happen."
          },
          {
            "t": "Runners, Jobs, Steps, and Matrix",
            "d": "Where your code runs, and how to run it everywhere at once.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Hosted runners: ubuntu/windows/macos labels and what each provides",
              "Job dependencies with `needs`, and parallel vs sequential execution",
              "Matrix builds: test across OS and language versions with one config"
            ],
            "do": [
              "Build a matrix that tests Node 20, 22, and 24 on ubuntu and windows",
              "Split a workflow into lint, test, and build jobs with `needs`",
              "Set `fail-fast: false` in the matrix and compare the output"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Using Jobs in a Workflow", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Secrets, Environments, and Permissions",
            "d": "Keep tokens out of your YAML and attackers out of your pipeline.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Secrets: encrypted values injected as env vars, never printed in logs",
              "GITHUB_TOKEN permissions: minimal by default; scope explicitly with `permissions:`",
              "Environments: protection rules, required reviewers, and deployment gating"
            ],
            "do": [
              "Store an API token as a repo secret and use it in a workflow without ever echoing it",
              "Set least-privilege `permissions:` on a workflow and watch what breaks",
              "Create a `production` environment that requires manual approval before deploying"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Encrypted Secrets", "https://docs.github.com/en/actions"]
            ],
            "tip": "Never pass secrets as action inputs that get logged. And never `echo` them for debugging — GitHub masks known secrets, but a cleverly transformed value can leak past masking."
          },
          {
            "t": "Caching and Artifacts",
            "d": "Stop downloading the internet on every run.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Cache action: keying on lockfiles to restore dependencies between runs",
              "Artifacts: passing files between jobs and keeping build outputs",
              "When caching helps (dependency installs) vs when it hurts (stale cache bugs)"
            ],
            "do": [
              "Add `actions/cache` for your package manager keyed on the lockfile hash",
              "Upload test reports as artifacts and download them in a later job",
              "Time a workflow before and after caching to measure the win"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Caching Dependencies", "https://docs.github.com/en/actions"]
            ]
          },
          {
            "t": "Reusable Workflows and Composite Actions",
            "d": "Write the pipeline once, use it in every repo.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Reusable workflows (`workflow_call`): sharing whole pipelines across repos",
              "Composite actions: packaging steps into a shareable action",
              "Versioning actions: pin to a SHA, not a moving tag, for supply-chain safety"
            ],
            "do": [
              "Extract a duplicated workflow into a reusable one called with `workflow_call`",
              "Write a composite action for your team's standard 'setup + lint' steps",
              "Pin all third-party actions to commit SHAs in one repo and note the dependability tradeoff"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub: Reusing Workflows", "https://docs.github.com/en/actions"]
            ]
          }
        ]
      },
      {
        "t": "Advanced Git and GitHub",
        "d": "The power tools: hooks, signing, worktrees, APIs, security.",
        "lv": 3,
        "children": [
          {
            "t": "Git Hooks: Automating on Events",
            "d": "Scripts that fire when you commit, push, or merge.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Client-side hooks: pre-commit (lint), commit-msg (message rules), pre-push (tests)",
              "Server-side hooks and why GitHub replaces them with webhooks/Actions",
              "Hook frameworks (Husky, pre-commit) for sharing hooks across a team"
            ],
            "do": [
              "Write a pre-commit hook that blocks commits with `console.log` or trailing whitespace",
              "Write a commit-msg hook that enforces Conventional Commits",
              "Install the pre-commit framework with hooks for formatting and linting"
            ],
            "tools": ["git", "pre-commit"],
            "res": [
              ["Pro Git: Git Hooks", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Hooks aren't synced with the repo — each developer must install them. That's exactly why frameworks like Husky and pre-commit exist: one command sets everyone up."
          },
          {
            "t": "Signed Commits: SSH and PGP Signing",
            "d": "Prove that commit really came from you.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Why signing matters: anyone can set user.name/user.email to impersonate you",
              "SSH signing (modern, easy) vs PGP signing (classic, fiddly)",
              "Verified badges on GitHub and required signed commits in branch protection"
            ],
            "do": [
              "Generate an SSH signing key and register it on GitHub",
              "Configure `git config --global gpg.format ssh` and `commit.gpgsign true`",
              "Verify: `git log --show-signature` should say 'Good signature'"
            ],
            "tools": ["git", "ssh-keygen"],
            "res": [
              ["GitHub: Signing Commits", "https://docs.github.com/en"]
            ]
          },
          {
            "t": "Submodules (and When Not to Use Them)",
            "d": "Repos inside repos: powerful, fiddly, often regretted.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "What a submodule pins: a specific commit of another repo, recorded as a gitlink",
              "The update dance: `git submodule update --init --recursive` and why clones forget it",
              "Alternatives: subtrees, monorepos, package managers — usually better defaults"
            ],
            "do": [
              "Add a submodule, commit, and clone the parent fresh to feel the two-step",
              "Update the submodule to a newer commit and commit the pointer change",
              "Try `git subtree` once to compare the experience"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Submodules", "https://git-scm.com/book/en/v2"]
            ],
            "tip": "Rule of thumb: reach for submodules only when you need a pinned external dependency that must stay a separate repo. For most teams, a package manager is the saner choice."
          },
          {
            "t": "git worktree: Multiple Checkouts, One Repo",
            "d": "Work on two branches at once without stashing or cloning twice.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Linked worktrees: one repo, several working directories, each on its own branch",
              "Use cases: running long tests on main while coding a feature elsewhere",
              "Cleanup: `git worktree remove` and pruning stale worktree metadata"
            ],
            "do": [
              "Add a worktree: `git worktree add ../hotfix main` and open it in another terminal",
              "List with `git worktree list`, then remove it cleanly",
              "Compare the disk usage against a second full clone"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Git Worktree", "https://git-scm.com/book/en/v2"]
            ]
          },
          {
            "t": "git bisect: Hunting the Guilty Commit",
            "d": "Binary search through history to find the commit that broke it.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Bisect as binary search: log(n) tests instead of n",
              "The ritual: `bisect start`, mark bad, mark good, then good/bad at each step",
              "`git bisect run` to automate the whole thing with a test script"
            ],
            "do": [
              "Plant a bug in a repo with 20 commits, then bisect to find it",
              "Automate with `git bisect run ./test.sh` and watch it converge",
              "Finish with `git bisect reset` and note the culprit hash"
            ],
            "tools": ["git"],
            "res": [
              ["Pro Git: Debugging with Git", "https://git-scm.com/book/en/v2"]
            ],
            "badge": "LAB"
          },
          {
            "t": "Git LFS for Big Files",
            "d": "Version videos, datasets, and binaries without bloating your repo.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "How LFS works: pointer files in Git, real blobs on an LFS server",
              "Tracking patterns with `git lfs track \"*.psd\"` and the .gitattributes it writes",
              "Costs: LFS bandwidth/storage quotas on GitHub and clone-time surprises"
            ],
            "do": [
              "Install git-lfs, track a file type, commit a large file, and inspect the pointer with `cat`",
              "Clone with and without LFS smudge filters to feel the difference",
              "Check your LFS usage on GitHub's billing page"
            ],
            "tools": ["git", "git-lfs"],
            "res": [
              ["Git LFS", "https://git-lfs.com/"]
            ]
          },
          {
            "t": "GitHub CLI: gh",
            "d": "Do GitHub without leaving your terminal.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Auth with `gh auth login` and what the token can do",
              "Core verbs: `gh pr`, `gh issue`, `gh repo`, `gh release`, `gh run`",
              "Scripting with `gh api` and `--jq` for custom automation"
            ],
            "do": [
              "Create a PR from the terminal: `gh pr create --fill`",
              "Check CI status with `gh pr checks` and watch runs with `gh run watch`",
              "Write a one-liner using `gh api repos/{owner}/{repo}` piped to `jq`"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub CLI Manual", "https://cli.github.com/"]
            ]
          },
          {
            "t": "GitHub API and Webhooks",
            "d": "Program GitHub itself: REST, GraphQL, and event-driven hooks.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "REST vs GraphQL APIs: when precise queries beat simple endpoints",
              "Webhooks: GitHub calls your server on push, PR, and issue events",
              "Verifying webhook signatures so attackers can't fake events"
            ],
            "do": [
              "Query the REST API for a repo's open PRs with curl and a token",
              "Run the same query in GraphQL and compare payload sizes",
              "Build a tiny webhook receiver that logs push events and validates the HMAC signature"
            ],
            "tools": ["gh", "curl"],
            "res": [
              ["GitHub REST API Docs", "https://docs.github.com/en/rest"]
            ]
          },
          {
            "t": "GitHub Security: Secret Scanning, Dependabot, Code Scanning",
            "d": "GitHub watching your back: leaked keys, vulnerable deps, risky code.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Secret scanning: automatic detection of committed tokens + push protection that blocks them",
              "Dependabot: automated PRs bumping vulnerable dependencies",
              "Code scanning (CodeQL): static analysis on every PR"
            ],
            "do": [
              "Enable push protection and try committing a fake AWS key — watch it block you",
              "Turn on Dependabot alerts and merge one security update PR",
              "Enable CodeQL default setup and read its first findings"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub Code Security Docs", "https://docs.github.com/en/code-security"]
            ],
            "tip": "Push protection has saved more production incidents than any other GitHub feature. Enable it before you need it — leaked secrets in Git history are nearly impossible to fully erase."
          },
          {
            "t": "GitHub Pages and Deployments",
            "d": "Ship a website straight from a branch, free.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "How Pages works: a branch or folder becomes a static site",
              "Custom domains, HTTPS enforcement, and Jekyll vs plain HTML",
              "Deployments via Actions for frameworks Pages doesn't build natively"
            ],
            "do": [
              "Publish a portfolio page from the `main` branch's `/docs` folder",
              "Add a custom domain with the DNS records GitHub asks for",
              "Deploy a Vite/React build with a Pages workflow instead"
            ],
            "tools": ["gh"],
            "res": [
              ["GitHub Pages Docs", "https://docs.github.com/en/pages"]
            ],
            "tag": "opt"
          }
        ]
      }
    ]
  }
});
