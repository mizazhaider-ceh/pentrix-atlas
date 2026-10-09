/* Atlas — knowledge checks (pilot: Linux track). Verified Q&A, no fabricated sources. */
const QUIZ = {
"linux::Linux Fundamentals": [
 {q:"Which statement best describes the Linux filesystem hierarchy?", o:["Everything lives under a single root /", "Each drive gets its own letter", "System files are hidden from root", "There is no standard layout"], a:0, e:"Linux uses one tree starting at /. Drives mount into it."},
 {q:"Why is the command line central to Linux security work?", o:["It looks impressive", "It is scriptable, precise, and remote-friendly", "GUIs are banned on servers", "It uses less RAM only"], a:1, e:"Scriptability and precision make the CLI the pro tool."}
],
"linux::Installation & Environment": [
 {q:"What is the safest way to try Linux without touching your main OS?", o:["Dual boot immediately", "A virtual machine", "Delete Windows first", "Use a live USB as daily driver"], a:1, e:"A VM lets you snapshot, break, and restore freely."},
 {q:"What is a distro?", o:["A Linux kernel fork", "Kernel plus tools, package manager, and defaults", "A terminal theme", "A paid Linux license"], a:1, e:"Distros bundle the kernel with userland, packaging, and config."}
],
"linux::Linux Distributions": [
 {q:"Which family uses apt?", o:["Arch", "Debian/Ubuntu", "Fedora", "Alpine"], a:1, e:"Debian-based distros use APT."},
 {q:"Which distro is rolling-release?", o:["Ubuntu LTS", "Debian Stable", "Arch", "RHEL"], a:2, e:"Arch updates continuously instead of versioned releases."}
],
"linux::Virtual Machines": [
 {q:"What does a VM snapshot let you do?", o:["Speed up the CPU", "Roll back to an earlier state", "Share files faster", "Encrypt the disk"], a:1, e:"Snapshots capture disk+memory state for instant rollback."},
 {q:"Which is a type-2 hypervisor?", o:["KVM", "ESXi", "VirtualBox", "Hyper-V bare metal"], a:2, e:"Type-2 runs on top of a host OS, like VirtualBox."}
],
"linux::Terminal Setup": [
 {q:"Which file usually configures your bash shell?", o:["~/.bashrc", "/etc/passwd", "~/.ssh/config", "/boot/grub.cfg"], a:0, e:"~/.bashrc runs for interactive non-login shells."},
 {q:"What does the prompt show by default on most distros?", o:["CPU temperature", "user@host and current directory", "Stock prices", "Nothing"], a:1, e:"user@host:path is the classic informative prompt."}
],
"linux::Filesystem Layout": [
 {q:"Where do user home directories live?", o:["/home", "/usr/home", "/etc/users", "/var/home"], a:0, e:"/home/<user> is the standard location."},
 {q:"What is /etc for?", o:["Temporary files", "System configuration files", "User downloads", "Boot loader"], a:1, e:"/etc holds host-specific configuration."}
],
"linux::Files & Permissions": [
 {q:"What does rwxr-xr-- mean in octal?", o:["644", "755", "777", "600"], a:1, e:"rwx=7, r-x=5, r--=4, so 755."},
 {q:"Who can write to a file with mode 644?", o:["Everyone", "Only the owner", "Owner and group", "Nobody"], a:1, e:"6=rw- for owner; group/others get r-- only."}
],
"linux::File Operations": [
 {q:"Which flag makes rm ask before deleting?", o:["-f", "-i", "-r", "-v"], a:1, e:"rm -i prompts interactively."},
 {q:"How do you create an empty file named notes.txt?", o:["mk notes.txt", "touch notes.txt", "new notes.txt", "echo > notes.txt only"], a:1, e:"touch creates empty files (and updates timestamps)."}
],
"linux::chmod, chown, umask": [
 {q:"What does umask 022 produce for new files?", o:["777", "755 dirs / 644 files", "000", "600"], a:1, e:"022 removes write for group/others: dirs 755, files 644."},
 {q:"chown root:adm file changes…", o:["Permissions to 777", "Owner to root, group to adm", "Nothing", "The filename"], a:1, e:"chown sets owner and optionally group."}
],
"linux::ACLs & Special Bits": [
 {q:"What does the SUID bit do on an executable?", o:["Nothing special", "Runs with the file owner's privileges", "Hides the file", "Makes it undeletable"], a:1, e:"SUID runs the program as its owner, e.g. /usr/bin/passwd."},
 {q:"Which command manages ACLs?", o:["chmod", "setfacl", "chattr", "umask"], a:1, e:"setfacl/getfacl manage fine-grained access lists."}
],
"linux::Text Processing": [
 {q:"Which tool is best for 'find lines matching a pattern'?", o:["sort", "grep", "chmod", "df"], a:1, e:"grep prints lines matching a regex."},
 {q:"What does the pipe | do?", o:["Deletes output", "Sends one command's stdout to another's stdin", "Runs commands in parallel", "Comments code"], a:1, e:"Pipes chain commands into pipelines."}
],
"linux::grep & Regex": [
 {q:"What does ^error match?", o:["Lines containing error anywhere", "Lines starting with error", "Lines ending with error", "The file named error"], a:1, e:"^ anchors to the start of a line."},
 {q:"Which grep flag ignores case?", o:["-v", "-i", "-r", "-c"], a:1, e:"grep -i matches case-insensitively."}
],
"linux::sed & awk": [
 {q:"What does sed 's/cat/dog/g' do?", o:["Deletes cat lines", "Replaces every cat with dog", "Counts cats", "Sorts the file"], a:1, e:"s///g substitutes globally on each line."},
 {q:"In awk, what is $2?", o:["The second file", "The second field of the record", "Line 2", "Exit code 2"], a:1, e:"awk splits records into fields: $1, $2, …"}
],
"linux::sort, uniq, cut, tr": [
 {q:"How do you count unique lines in a file?", o:["sort f | uniq -c", "cut f | sort", "tr f | wc", "grep -c f"], a:0, e:"Sort first, then uniq -c counts occurrences."},
 {q:"cut -d: -f1 /etc/passwd prints…", o:["Passwords", "Usernames", "Home dirs", "Shells"], a:1, e:"Field 1 of the colon-separated passwd file is the username."}
],
"linux::Pipes & Redirection": [
 {q:"What does cmd > file do?", o:["Appends to file", "Overwrites file with stdout", "Reads file as input", "Deletes file"], a:1, e:"> truncates then writes; >> appends."},
 {q:"How do you discard both stdout and stderr?", o:["> /dev/null", "> /dev/null 2>&1", "| /dev/null", "2> stdout"], a:1, e:"Redirect stdout to null, then point stderr at stdout."}
],
"linux::Processes & systemd": [
 {q:"What is PID 1 on a systemd system?", o:["bash", "systemd", "init.sh", "kernel"], a:1, e:"systemd runs as PID 1 and manages services."},
 {q:"Which signal does kill send by default?", o:["SIGKILL", "SIGTERM", "SIGSTOP", "SIGHUP"], a:1, e:"kill defaults to SIGTERM (15), asking nicely first."}
],
"linux::Process Inspection": [
 {q:"Which shows a live process list?", o:["ps aux (snapshot)", "top / htop", "jobs", "ls"], a:1, e:"top/htop refresh live; ps takes a snapshot."},
 {q:"What does load average 4.0 mean on a 4-core box?", o:["Overloaded", "Fully utilized, healthy", "Crashed", "Idle"], a:1, e:"Load roughly equal to core count means saturated but keeping up."}
],
"linux::Signals & Job Control": [
 {q:"What does Ctrl+Z do to a foreground job?", o:["Kills it", "Suspends it (SIGTSTP)", "Restarts it", "Nothing"], a:1, e:"Ctrl+Z suspends; fg resumes in foreground."},
 {q:"How do you keep a job alive after logout?", o:["bg", "nohup or disown", "Ctrl+C", "nice"], a:1, e:"nohup/disown detach it from the terminal session."}
],
"linux::systemd Services": [
 {q:"How do you enable a service at boot?", o:["systemctl start", "systemctl enable", "service on", "chkconfig"], a:1, e:"enable creates the boot symlink; start runs it now."},
 {q:"Where do custom unit files live?", o:["/etc/systemd/system/", "/usr/bin/", "/var/log/", "/tmp/"], a:0, e:"/etc/systemd/system/ holds admin-created units."}
],
"linux::Resource Monitoring": [
 {q:"Which shows per-process CPU and memory live?", o:["df", "htop", "du", "free (once)"], a:1, e:"htop gives a live, sortable process view."},
 {q:"free -h reports…", o:["Disk usage", "Memory usage human-readable", "CPU speed", "Network stats"], a:1, e:"free shows RAM/swap; -h makes it readable."}
],
"linux::Networking Tools": [
 {q:"Which replaced ifconfig on modern Linux?", o:["netstat", "ip", "route", "ping"], a:1, e:"iproute2's ip command is the modern standard."},
 {q:"Which shows listening sockets?", o:["ss -tlnp", "ls -l", "ps aux", "df -h"], a:0, e:"ss -tlnp lists listening TCP sockets with processes."}
],
"linux::ip & ss": [
 {q:"How do you view your IP addresses?", o:["ip addr", "ip route show", "ss -a", "cat /etc/hosts"], a:0, e:"ip addr (or ip a) lists interfaces and addresses."},
 {q:"ip route shows…", o:["DNS servers", "The routing table", "Open ports", "ARP cache"], a:1, e:"The routing table decides where packets go."}
],
"linux::ping & traceroute": [
 {q:"What protocol does ping use?", o:["TCP", "ICMP", "UDP", "HTTP"], a:1, e:"ping sends ICMP echo requests."},
 {q:"traceroute reveals…", o:["Your password", "Each hop to the destination", "CPU usage", "Open files"], a:1, e:"It maps routers along the path via TTL tricks."}
],
"linux::dig & nslookup": [
 {q:"dig example.com MX asks for…", o:["IP address", "Mail servers", "Name servers", "Certificates"], a:1, e:"MX records point to mail exchangers."},
 {q:"Which dig flag traces the full chain?", o:["+short", "+trace", "+norecurse", "-x"], a:1, e:"dig +trace walks from the root servers down."}
],
"linux::curl & tcpdump": [
 {q:"curl -I https://x shows…", o:["Body only", "Headers only", "Nothing", "Certificate only"], a:1, e:"-I fetches headers with a HEAD request."},
 {q:"tcpdump -i eth0 port 80 captures…", o:["All traffic", "HTTP traffic on eth0", "Only pings", "DNS only"], a:1, e:"The BPF filter 'port 80' matches web traffic."}
],
"linux::Bash Scripting": [
 {q:"What should a bash script start with?", o:["# comment", "#!/bin/bash shebang", "echo hello", "import bash"], a:1, e:"The shebang tells the OS which interpreter to use."},
 {q:"How do you make script.sh executable?", o:["chmod +x script.sh", "run script.sh", "exec script.sh", "sudo script.sh"], a:0, e:"chmod +x sets the execute bit."}
],
"linux::Variables & Quoting": [
 {q:"What does \"$VAR\" preserve that $VAR does not?", o:["Nothing", "Spaces and exact value", "Speed", "Colors"], a:1, e:"Double quotes prevent word splitting and globbing."},
 {q:"How do you assign x=hello correctly?", o:["x = hello", "x=hello (no spaces)", "$x=hello", "set x hello"], a:1, e:"No spaces around = in bash assignments."}
],
"linux::Conditions & Loops": [
 {q:"Which tests if file exists?", o:["[ -f file ]", "[ file ]", "test file", "-e? no"], a:0, e:"[ -f f ] is true if f is a regular file."},
 {q:"for i in 1 2 3; do echo $i; done prints…", o:["123 on one line", "1 2 3 each on a line", "Nothing", "An error"], a:1, e:"The loop body runs once per word."}
],
"linux::Functions": [
 {q:"How do you define a function in bash?", o:["function f { } or f() { }", "def f():", "func f {}", "fn f()"], a:0, e:"Both 'name() { }' and 'function name { }' work."},
 {q:"Inside a function, $1 is…", o:["The function name", "The first argument", "The exit code", "PID"], a:1, e:"$1..$n are positional parameters."}
],
"linux::Exit Codes & set -euo": [
 {q:"What does exit code 0 mean?", o:["Failure", "Success", "Unknown", "Retry"], a:1, e:"0 means success; non-zero signals an error."},
 {q:"set -e makes a script…", o:["Echo commands", "Exit on first error", "Run faster", "Ignore errors"], a:1, e:"-e aborts when any command fails."}
],
"linux::System Administration": [
 {q:"Which command adds a user?", o:["useradd", "addusr", "mkuser", "newuser"], a:0, e:"useradd (or adduser on Debian) creates accounts."},
 {q:"Where are user accounts defined?", o:["/etc/passwd", "/etc/shadow only", "/home/list", "/var/users"], a:0, e:"/etc/passwd lists users; hashes live in /etc/shadow."}
],
"linux::Users & Groups": [
 {q:"How do you add user bob to group dev?", o:["usermod -aG dev bob", "groupadd bob dev", "chgrp bob dev", "add bob dev"], a:0, e:"-aG appends supplementary groups."},
 {q:"What does sudo let you do?", o:["Anything without auth", "Run commands as another user, usually root", "Delete users", "Change passwords only"], a:1, e:"sudo elevates per the sudoers policy."}
],
"linux::Package Management": [
 {q:"apt update vs apt upgrade?", o:["Same thing", "update refreshes lists, upgrade installs newer packages", "update installs", "upgrade removes"], a:1, e:"update syncs metadata; upgrade applies new versions."},
 {q:"Which removes a package and its config?", o:["apt remove", "apt purge", "apt clean", "apt autoremove"], a:1, e:"purge removes the package plus configuration."}
],
"linux::Logs & journald": [
 {q:"How do you follow logs live?", o:["journalctl -f", "cat /var/log", "tail once", "dmesg only"], a:0, e:"-f follows new entries like tail -f."},
 {q:"journalctl -u nginx shows…", o:["All logs", "Only nginx service logs", "Boot log", "Kernel log"], a:1, e:"-u filters by systemd unit."}
],
"linux::SSH Hardening": [
 {q:"The single biggest SSH hardening win?", o:["Change the banner", "Disable password auth, use keys", "Change port only", "Longer timeout"], a:1, e:"Key-only auth kills password brute force."},
 {q:"Where do authorized keys live?", o:["~/.ssh/authorized_keys", "/etc/ssh/keys", "~/.ssh/id_rsa", "/root/keys"], a:0, e:"The server checks ~/.ssh/authorized_keys."}
],
"linux::Cron Jobs": [
 {q:"What does '*/5 * * * *' mean?", o:["Every 5 seconds", "Every 5 minutes", "At 5am", "Every 5th day"], a:1, e:"Fields are min hour dom month dow; */5 = every 5 min."},
 {q:"Where does cron send output by default?", o:["/dev/null", "To the job owner's mailbox", "syslog only", "Nowhere"], a:1, e:"Cron mails stdout/stderr to the owner."}
],
"linux::Linux Security": [
 {q:"What is defense in depth?", o:["One strong firewall", "Layered controls so one failure isn't fatal", "Antivirus only", "Air gaps everywhere"], a:1, e:"Layers overlap: no single point of failure."},
 {q:"Why is running as root daily dangerous?", o:["It is slower", "Any mistake or exploit has full power", "Root can't use sudo", "It breaks networking"], a:1, e:"Least privilege limits blast radius."}
],
"linux::Least Privilege": [
 {q:"Least privilege means…", o:["No users at all", "Minimum access needed for the task", "Everyone is admin", "Read-only everything"], a:1, e:"Grant only what the role requires."},
 {q:"A web app DB user should…", o:["Be root", "Have only the rights the app needs", "Share the admin login", "Have no password"], a:1, e:"Scope the DB user to its schema and operations."}
],
"linux::Sudo Configuration": [
 {q:"How should you edit sudoers?", o:["vim /etc/sudoers directly", "visudo", "echo >> /etc/sudoers", "chmod 777 it"], a:1, e:"visudo validates syntax before saving."},
 {q:"bob ALL=(ALL) NOPASSWD: /usr/bin/apt means…", o:["bob is root", "bob can run apt as root without a password", "apt is broken", "Nothing"], a:1, e:"It grants passwordless apt via sudo."}
],
"linux::System Hardening": [
 {q:"First hardening step for a new server?", o:["Install a GUI", "Update everything, remove unneeded services", "Open all ports", "Disable logging"], a:1, e:"Patch and shrink the attack surface first."},
 {q:"What does Lynis do?", o:["Hacks servers", "Audits system hardening", "Manages passwords", "Scans networks"], a:1, e:"Lynis audits config against hardening baselines."}
],
"linux::Auditing & Monitoring": [
 {q:"What is auditd for?", o:["Virus scanning", "Logging security-relevant system events", "Backups", "Firewalling"], a:1, e:"auditd records syscalls per your rules."},
 {q:"AIDE provides…", o:["Intrusion prevention", "File integrity monitoring", "Log rotation", "Encryption"], a:1, e:"AIDE detects changed system files via hashes."}
]
};
