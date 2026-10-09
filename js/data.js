const ROADMAPS = [
{
  id:"cyber-security", title:"Cyber Security", icon:"🛡️", color:"#2dd4bf", tagline:"From zero to offensive security pro.", desc:"The complete hacker path: fundamentals, recon, web hacking, exploitation and going pro. Every node is a skill with free resources.",
  root:    { t:"The Hacker Mindset", d:"Ethics, legality, and how hackers think. This is the non-negotiable first step.", res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["OWASP Testing Guide","https://owasp.org/www-project-web-security-testing-guide/"]],
      children:[
        { t:"Computer & Network Basics", d:"How computers and networks actually work under the hood.", res:[["Cloudflare: OSI Model","https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"],["CIDR.xyz","https://cidr.xyz/"]],
          children:[
            { t:"Linux Command Line", d:"Your home turf. Live in the terminal until it feels like home.", res:[["LinuxCommand.org","https://linuxcommand.org/"],["OverTheWire Bandit","https://overthewire.org/wargames/bandit/"]],
              children:[
                { t:"File Navigation", d:"cd, ls, find at speed.", res:[["Linux Journey","https://linuxjourney.com/"]] },
                { t:"Users & Permissions", d:"chmod, chown, sudo.", res:[["Linux Journey","https://linuxjourney.com/"]] }
              ] },
            { t:"Networking: TCP/IP & DNS", d:"Packets, ports, protocols. The language of the network.", res:[["Cloudflare: What is DNS","https://www.cloudflare.com/learning/dns/what-is-dns/"],["Wireshark","https://www.wireshark.org/"]],
              children:[
                { t:"Subnetting Basics", d:"CIDR without tears.", res:[["CIDR.xyz","https://cidr.xyz/"]] },
                { t:"Common Ports", d:"The 20 ports that matter.", res:[["Nmap Book","https://nmap.org/book/"]] }
              ] },
            { t:"Wireshark", d:"See the invisible. Read packets like a book.", res:[["Wireshark Docs","https://www.wireshark.org/docs/"],["Sample Captures","https://wiki.wireshark.org/SampleCaptures"]],
              children:[
                { t:"Display Filters", d:"Slice traffic precisely.", res:[["Wireshark Docs","https://www.wireshark.org/docs/"]] },
                { t:"Follow TCP Streams", d:"Rebuild conversations.", res:[["Wireshark Docs","https://www.wireshark.org/docs/"]] }
              ] }
          ] },
        { t:"Programming for Hackers", d:"Code is your superpower. Automate everything you do twice.", res:[["Official Python Tutorial","https://docs.python.org/3/tutorial/"],["web.dev Learn","https://web.dev/learn"]],
          children:[
            { t:"Python", d:"The hacker's first language. Sockets, requests, scripting.", res:[["Python Tutorial","https://docs.python.org/3/tutorial/"],["Automate the Boring Stuff","https://automatetheboringstuff.com/"]],
              children:[
                { t:"Requests & Web", d:"Talk HTTP in Python.", res:[["Python Docs","https://docs.python.org/3/"]] },
                { t:"Scripting Tools", d:"argparse, sockets, subprocess.", res:[["Python Docs","https://docs.python.org/3/"]] }
              ] },
            { t:"Bash Scripting", d:"The glue of the terminal. Chain tools into weapons.", res:[["Bash Hackers Wiki","https://wiki.bash-hackers.org/"],["ShellCheck","https://www.shellcheck.net/"]] },
            { t:"Web Tech: HTML & JS", d:"To break the web, you must know the web.", res:[["MDN Web Docs","https://developer.mozilla.org/"],["web.dev","https://web.dev/"]],
              children:[
                { t:"DOM & Events", d:"What JavaScript can touch.", res:[["MDN","https://developer.mozilla.org/"]] },
                { t:"Google Dorking", d:"Search like a spy.", res:[["Google Hacking DB","https://www.exploit-db.com/google-hacking-database"]] }
              ] }
          ] },
        { t:"Reconnaissance", d:"Information gathering. The quieter you are, the better you are.", res:[["OSINT Framework","https://osintframework.com/"],["Nmap","https://nmap.org/"]],
          children:[
            { t:"OSINT", d:"Intelligence from public sources. People leak everything.", res:[["OSINT Framework","https://osintframework.com/"],["theHarvester","https://github.com/laramies/theHarvester"]],
              children:[
                { t:"Social Media Intel", d:"Public profiles, deep insights.", res:[["OSINT Framework","https://osintframework.com/"]] }
              ] },
            { t:"Nmap Scanning", d:"Map the attack surface: hosts, ports, services.", res:[["Nmap Man Page","https://nmap.org/book/man.html"],["HackTricks Network","https://book.hacktricks.xyz/network-services-pentesting"]],
              children:[
                { t:"Scan Types", d:"SYN, connect, UDP.", res:[["Nmap Book","https://nmap.org/book/"]] },
                { t:"NSE Scripts", d:"Nmap's plugin arsenal.", res:[["Nmap Book","https://nmap.org/book/"]] }
              ] }
          ] },
        { t:"Web Hacking", d:"Where the bounties live. Master the request.", res:[["PortSwigger Academy","https://portswigger.net/web-security"],["OWASP Top 10","https://owasp.org/www-project-top-ten/"]],
          children:[
            { t:"Burp Suite", d:"The web hacker's workbench. Intercept everything.", res:[["Burp Documentation","https://portswigger.net/burp/documentation"],["PortSwigger Academy","https://portswigger.net/web-security"]],
              children:[
                { t:"Proxy & Intercept", d:"Own the traffic.", res:[["PortSwigger","https://portswigger.net/web-security"]] },
                { t:"Repeater & Intruder", d:"Replay and automate.", res:[["PortSwigger","https://portswigger.net/web-security"]] }
              ] },
            { t:"SQL Injection", d:"Make the database talk. The classic killer.", res:[["PortSwigger: SQLi","https://portswigger.net/web-security/sql-injection"],["PayloadsAllTheThings","https://github.com/swisskyrepo/PayloadsAllTheThings"]],
              children:[
                { t:"Union-Based", d:"Read the whole database.", res:[["PortSwigger SQLi","https://portswigger.net/web-security/sql-injection"]] },
                { t:"Blind SQLi", d:"When errors go silent.", badge:"ADV", res:[["PortSwigger SQLi","https://portswigger.net/web-security/sql-injection"]] }
              ] },
            { t:"XSS & Broken Access Control", d:"Client-side bugs and IDORs. Bug bounty bread and butter.", res:[["PortSwigger: XSS","https://portswigger.net/web-security/cross-site-scripting"],["PortSwigger: Access Control","https://portswigger.net/web-security/access-control"]],
              children:[
                { t:"Reflected & Stored XSS", d:"Two flavors, one impact.", res:[["PortSwigger XSS","https://portswigger.net/web-security/cross-site-scripting"]] },
                { t:"IDOR Testing", d:"Change the ID, own the data.", res:[["PortSwigger Access Control","https://portswigger.net/web-security/access-control"]] }
              ] }
          ] },
        { t:"Exploitation", d:"Turn vulnerabilities into access.", res:[["Metasploit Docs","https://docs.metasploit.com/"],["HackTricks","https://book.hacktricks.xyz/"]],
          children:[
            { t:"Metasploit Framework", d:"The exploitation framework. Scan to shell.", badge:"LAB", res:[["Metasploit Docs","https://docs.metasploit.com/"],["Metasploitable 3","https://github.com/rapid7/metasploitable3"]],
              children:[
                { t:"Modules & Payloads", d:"Pick your weapon.", res:[["Metasploit Docs","https://docs.rapid7.com/metasploit/"]] },
                { t:"Meterpreter", d:"The post-exploitation shell.", res:[["Metasploit Docs","https://docs.rapid7.com/metasploit/"]] }
              ] },
            { t:"Password Attacks", d:"Crack the hashes, spray the logins.", badge:"LAB", res:[["Hashcat Wiki","https://hashcat.net/wiki/"],["revshells.com","https://www.revshells.com/"]],
              children:[
                { t:"Hash Cracking", d:"hashcat fundamentals.", res:[["hashcat wiki","https://hashcat.net/wiki/"]] },
                { t:"Wordlists & Rules", d:"SecLists plus mutations.", res:[["SecLists","https://github.com/danielmiessler/SecLists"]] }
              ] },
            { t:"Privilege Escalation", d:"From low user to root. The real game.", badge:"ADV", res:[["GTFOBins","https://gtfobins.github.io/"],["HackTricks PrivEsc","https://book.hacktricks.xyz/linux-hardening/privilege-escalation"]],
              children:[
                { t:"Linux Privesc", d:"SUID, sudo, cron, kernels.", badge:"ADV", res:[["HackTricks","https://book.hacktricks.xyz/"]] },
                { t:"Windows Privesc", d:"Services, tokens, potatoes.", badge:"ADV", res:[["HackTricks","https://book.hacktricks.xyz/"]] }
              ] }
          ] },
        { t:"Go Pro", d:"Turn skill into career.", res:[["HackerOne","https://hackerone.com/"],["r/netsec","https://www.reddit.com/r/netsec/"]],
          children:[
            { t:"Bug Bounty Hunting", d:"Get paid to hack, legally. Start with VDPs.", res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["Bugcrowd","https://www.bugcrowd.com/"]],
              children:[
                { t:"Platforms & Scope", d:"HackerOne, Bugcrowd, Intigriti.", res:[["HackerOne","https://hackerone.com/"]] }
              ] },
            { t:"Reports & Writeups", d:"If you cannot write it, you cannot sell it.", res:[["OWASP Disclosure Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"],["PortSwigger Blog","https://portswigger.net/research"]] }
          ] }
      ] }
},
{
  id:"frontend", title:"Frontend Development", icon:"🎨", color:"#60a5fa", tagline:"Build beautiful things for the web.", desc:"From HTML to React: everything you need to craft modern user interfaces.",
  root:    { t:"Internet & How the Web Works", d:"DNS, HTTP, browsers. Know the platform you build on.", res:[["web.dev Learn","https://web.dev/learn"],["MDN: How the Web Works","https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"]],
      children:[
        { t:"HTML", d:"The skeleton. Semantic markup done right.", res:[["MDN HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"],["freeCodeCamp","https://www.freecodecamp.org/"]],
          children:[
            { t:"Semantic HTML", d:"Tags with meaning.", res:[["MDN: HTML","https://developer.mozilla.org/"]] },
            { t:"Forms & Inputs", d:"Every input type.", res:[["MDN: Forms","https://developer.mozilla.org/"]] }
          ] },
        { t:"CSS", d:"The skin. Layout, flexbox, grid, animations.", res:[["MDN CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"],["CSS Tricks","https://css-tricks.com/"]],
          children:[
            { t:"Flexbox & Grid", d:"Layout superpowers.", res:[["MDN: CSS","https://developer.mozilla.org/"]] },
            { t:"Responsive Design", d:"Mobile first, always.", res:[["web.dev","https://web.dev/learn/css"]] }
          ] },
        { t:"JavaScript (ES6+)", d:"The muscle. The language of the browser.", res:[["JavaScript.info","https://javascript.info/"],["MDN JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"]],
          children:[
            { t:"DOM Manipulation", d:"Select and change anything.", res:[["MDN: DOM","https://developer.mozilla.org/"]] },
            { t:"Async JS & Fetch", d:"Promises, async/await.", res:[["JavaScript.info","https://javascript.info/"]] }
          ] },
        { t:"Git & GitHub", d:"Version control. Non-negotiable for every dev.", res:[["Pro Git Book","https://git-scm.com/book/en/v2"],["GitHub Skills","https://skills.github.com/"]],
          children:[
            { t:"Branching", d:"Feature branches.", res:[["Git Docs","https://git-scm.com/doc"]] },
            { t:"Pull Requests", d:"Collaborate cleanly.", res:[["GitHub Docs","https://docs.github.com/"]] }
          ] },
        { t:"npm & Vite Tooling", d:"Packages, bundlers, dev servers.", res:[["npm Docs","https://docs.npmjs.com/"],["Vite","https://vitejs.dev/"]],
          children:[
            { t:"package.json", d:"Scripts and dependencies.", res:[["npm Docs","https://docs.npmjs.com/"]] },
            { t:"Build & Deploy", d:"Bundle for production.", badge:"PROJECT", res:[["Vite Guide","https://vite.dev/guide/"]] }
          ] },
        { t:"React", d:"The UI library that runs the web.", res:[["React Docs","https://react.dev/"],["freeCodeCamp React","https://www.freecodecamp.org/"]],
          children:[
            { t:"TypeScript", d:"JavaScript with a safety net. Industry standard now.", res:[["TypeScript Handbook","https://www.typescriptlang.org/docs/handbook/intro.html"],["TypeScript Playground","https://www.typescriptlang.org/play"]],
              children:[
                { t:"Types & Interfaces", d:"Shape your data.", res:[["TS Docs","https://www.typescriptlang.org/docs/"]] }
              ] },
            { t:"Testing with Vitest", d:"Prove your UI works.", res:[["Vitest Docs","https://vitest.dev/"],["Testing Library","https://testing-library.com/"]],
              children:[
                { t:"Unit Tests", d:"Test the small stuff.", res:[["Vitest","https://vitest.dev/"]] }
              ] }
          ] },
        { t:"Deploy: Vercel & Netlify", d:"Ship it to the world in minutes.", res:[["Vercel Docs","https://vercel.com/docs"],["Netlify Docs","https://docs.netlify.com/"]] }
      ] }
},
{
  id:"backend", title:"Backend Development", icon:"⚙️", color:"#a78bfa", tagline:"Power the logic behind the apps.", desc:"APIs, databases, auth and deployment: build the engine room of software.",
  root:    { t:"Pick a Language", d:"Node.js, Python or Go. One deeply beats three shallowly.", res:[["Node.js Docs","https://nodejs.org/en/docs"],["Python Tutorial","https://docs.python.org/3/tutorial/"]],
      children:[
        { t:"REST APIs", d:"Design clean endpoints. The backend's handshake.", res:[["MDN: HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP"],["REST API Tutorial","https://restfulapi.net/"]],
          children:[
            { t:"Routing & Controllers", d:"Structure your endpoints.", res:[["MDN: HTTP","https://developer.mozilla.org/"]] },
            { t:"Status Codes", d:"Speak HTTP correctly.", res:[["MDN: Status Codes","https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"]] }
          ] },
        { t:"SQL Databases", d:"PostgreSQL. Model data, write queries, index smart.", res:[["PostgreSQL Tutorial","https://www.postgresqltutorial.com/"],["SQLBolt","https://sqlbolt.com/"]],
          children:[
            { t:"Schema Design", d:"Tables that make sense.", res:[["Postgres Docs","https://www.postgresql.org/docs/"]] },
            { t:"Joins & Queries", d:"Ask complex questions.", res:[["SQLBolt","https://sqlbolt.com/"]] }
          ] },
        { t:"Auth: JWT & OAuth", d:"Who are you? Prove it, securely.", res:[["OWASP Auth Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"],["OAuth.net","https://oauth.net/"]],
          children:[
            { t:"Password Hashing", d:"bcrypt, never plaintext.", res:[["OWASP Cheatsheets","https://cheatsheetseries.owasp.org/"]] },
            { t:"Sessions vs Tokens", d:"Pick your state.", res:[["OWASP","https://owasp.org/"]] }
          ] },
        { t:"Caching with Redis", d:"Speed up everything that matters.", res:[["Redis Docs","https://redis.io/docs/"],["Redis University","https://university.redis.com/"]],
          children:[
            { t:"Cache Patterns", d:"When and what to cache.", res:[["Redis Docs","https://redis.io/docs/"]] }
          ] },
        { t:"Docker Basics", d:"Ship the same environment everywhere.", badge:"LAB", res:[["Docker Get Started","https://docs.docker.com/get-started/"],["Docker Curriculum","https://docker-curriculum.com/"]],
          children:[
            { t:"Dockerfile", d:"Build your images.", res:[["Docker Docs","https://docs.docker.com/"]] },
            { t:"Compose", d:"Multi-container apps.", res:[["Docker Docs","https://docs.docker.com/"]] }
          ] },
        { t:"Testing & CI", d:"Automated tests and pipelines that guard quality.", res:[["GitHub Actions","https://docs.github.com/en/actions"],["Martin Fowler on CI","https://martinfowler.com/articles/continuousIntegration.html"]] },
        { t:"Node.js", d:"JavaScript on the server.", res:[["Node Learn","https://nodejs.org/en/learn"]] },
        { t:"Python", d:"FastAPI and Flask world.", res:[["Python Docs","https://docs.python.org/3/"]] },
        { t:"Go", d:"Simple, fast, compiled.", res:[["Go Tour","https://go.dev/learn/"]] }
      ] }
},
{
  id:"devops", title:"DevOps", icon:"♾️", color:"#f472b6", tagline:"Ship fast, break nothing.", desc:"CI/CD, containers, cloud and automation: the art of reliable delivery.",
  root:    { t:"Linux & Scripting", d:"The foundation of all operations.", res:[["LinuxCommand.org","https://linuxcommand.org/"],["OverTheWire","https://overthewire.org/wargames/bandit/"]],
      children:[
        { t:"Git Deeply", d:"Branching strategies, rebasing, hooks.", res:[["Pro Git Book","https://git-scm.com/book/en/v2"],["Atlassian Git Tutorials","https://www.atlassian.com/git/tutorials"]],
          children:[
            { t:"Branching Strategies", d:"GitFlow vs trunk-based.", res:[["Atlassian Git","https://www.atlassian.com/git"]] },
            { t:"Rebase & Merge", d:"Keep history clean.", res:[["Git Docs","https://git-scm.com/doc"]] }
          ] },
        { t:"CI/CD: GitHub Actions", d:"Automate build, test and deploy.", res:[["GitHub Actions Docs","https://docs.github.com/en/actions"],["Awesome Actions","https://github.com/sdras/awesome-actions"]],
          children:[
            { t:"Workflows", d:"YAML pipelines.", res:[["GitHub Actions","https://docs.github.com/actions"]] },
            { t:"Secrets & Envs", d:"Keep secrets secret.", res:[["GitHub Actions","https://docs.github.com/actions"]] }
          ] },
        { t:"Docker", d:"Containers: build once, run anywhere.", res:[["Docker Docs","https://docs.docker.com/"],["Play with Docker","https://labs.play-with-docker.com/"]],
          children:[
            { t:"Images & Containers", d:"Build and run.", res:[["Docker Docs","https://docs.docker.com/"]] },
            { t:"Volumes & Networks", d:"Persist and connect.", res:[["Docker Docs","https://docs.docker.com/"]] }
          ] },
        { t:"Kubernetes", d:"Orchestrate containers at scale.", badge:"LAB", res:[["Kubernetes Basics","https://kubernetes.io/docs/tutorials/kubernetes-basics/"],["k8s Docs","https://kubernetes.io/docs/home/"]],
          children:[
            { t:"Pods & Deployments", d:"The fundamentals.", res:[["K8s Docs","https://kubernetes.io/docs/"]] },
            { t:"Services & Ingress", d:"Expose your apps.", res:[["K8s Docs","https://kubernetes.io/docs/"]] }
          ] },
        { t:"Cloud: AWS", d:"EC2, S3, IAM. The cloud vocabulary.", res:[["AWS Skill Builder","https://skillbuilder.aws/"],["AWS Docs","https://docs.aws.amazon.com/"]],
          children:[
            { t:"EC2 & S3", d:"Compute and storage.", res:[["AWS Docs","https://docs.aws.amazon.com/"]] },
            { t:"IAM Basics", d:"Least privilege.", res:[["AWS IAM","https://docs.aws.amazon.com/iam/"]] }
          ] },
        { t:"Terraform (IaC)", d:"Infrastructure as code. Version your servers.", badge:"LAB", res:[["Terraform Tutorials","https://developer.hashicorp.com/terraform/tutorials"],["Terraform Docs","https://developer.hashicorp.com/terraform/docs"]],
          children:[
            { t:"State & Resources", d:"Track your infra.", res:[["Terraform Docs","https://developer.hashicorp.com/terraform"]] },
            { t:"Modules", d:"Reusable infrastructure.", res:[["Terraform Docs","https://developer.hashicorp.com/terraform"]] }
          ] },
        { t:"Monitoring", d:"Prometheus, Grafana. If you cannot see it, you cannot run it.", res:[["Prometheus Docs","https://prometheus.io/docs/"],["Grafana Tutorials","https://grafana.com/tutorials/"]],
          children:[
            { t:"Prometheus & Grafana", d:"Metrics that matter.", res:[["Prometheus","https://prometheus.io/docs/"]] },
            { t:"Centralized Logging", d:"One place for logs.", res:[["Grafana Loki","https://grafana.com/oss/loki/"]] }
          ] },
        { t:"Bash Basics", d:"Script the boring parts.", res:[["Bash Guide","https://tldp.org/LDP/abs/html/"]] },
        { t:"SSH & Servers", d:"Keys, config, hardening.", res:[["SSH Academy","https://www.ssh.com/academy/ssh"]] }
      ] }
},
{
  id:"python", title:"Python", icon:"🐍", color:"#facc15", tagline:"The most versatile language on earth.", desc:"From automation scripts to AI: master Python step by step.",
  root:    { t:"Python Basics", d:"Syntax, data types, loops, functions. The ABCs.", res:[["Official Tutorial","https://docs.python.org/3/tutorial/"],["Python.org Beginner Guide","https://wiki.python.org/moin/BeginnersGuide"]],
      children:[
        { t:"OOP & Modules", d:"Classes, objects, and organizing real code.", res:[["Real Python OOP","https://realpython.com/python3-object-oriented-programming/"],["Python Modules","https://docs.python.org/3/tutorial/modules.html"]],
          children:[
            { t:"Classes", d:"Objects in Python.", res:[["Python Docs","https://docs.python.org/3/"]] },
            { t:"Imports & Packages", d:"Organize your code.", res:[["Python Docs","https://docs.python.org/3/"]] }
          ] },
        { t:"Virtual Envs & pip", d:"Isolated environments. Never break system Python.", res:[["venv Docs","https://docs.python.org/3/library/venv.html"],["pip Guide","https://pip.pypa.io/en/stable/"]] },
        { t:"Requests & APIs", d:"Talk to the internet from Python.", res:[["Requests Docs","https://requests.readthedocs.io/"],["HTTPX","https://www.python-httpx.org/"]],
          children:[
            { t:"REST Clients", d:"GET and POST with requests.", res:[["Requests Docs","https://requests.readthedocs.io/"]] },
            { t:"JSON Handling", d:"Parse everything.", res:[["Python Docs","https://docs.python.org/3/"]] }
          ] },
        { t:"Automation Scripts", d:"Rename 1000 files in 3 lines. Feel the power.", res:[["Automate the Boring Stuff","https://automatetheboringstuff.com/"],["Real Python","https://realpython.com/"]],
          children:[
            { t:"File Automation", d:"os, shutil, pathlib.", res:[["Python Docs","https://docs.python.org/3/"]] },
            { t:"Web Scraping", d:"BeautifulSoup basics.", badge:"PROJECT", res:[["BS4 Docs","https://www.crummy.com/software/BeautifulSoup/bs4/doc/"]] }
          ] },
        { t:"Web: FastAPI", d:"Build blazing APIs with modern Python.", badge:"PROJECT", res:[["FastAPI Tutorial","https://fastapi.tiangolo.com/tutorial/"],["Flask Docs","https://flask.palletsprojects.com/"]],
          children:[
            { t:"Routing", d:"Endpoints, fast.", res:[["FastAPI","https://fastapi.tiangolo.com/"]] },
            { t:"Validation", d:"Pydantic models.", res:[["FastAPI","https://fastapi.tiangolo.com/"]] }
          ] },
        { t:"Data: pandas & numpy", d:"Crunch numbers like a data scientist.", res:[["pandas Getting Started","https://pandas.pydata.org/docs/getting_started/"],["Kaggle Learn","https://www.kaggle.com/learn"]],
          children:[
            { t:"DataFrames", d:"Think in tables.", res:[["pandas Docs","https://pandas.pydata.org/docs/"]] },
            { t:"Plotting", d:"matplotlib quickstart.", res:[["Matplotlib","https://matplotlib.org/"]] }
          ] },
        { t:"Data Types", d:"Lists, dicts, sets.", res:[["Python Docs","https://docs.python.org/3/"]] },
        { t:"Control Flow", d:"if, for, while.", res:[["Python Docs","https://docs.python.org/3/"]] }
      ] }
},
{
  id:"linux", title:"Linux", icon:"🐧", color:"#fb923c", tagline:"From first boot to sysadmin.", desc:"From installation to security hardening: the complete Linux journey, step by step.",
  root:    { t:"Linux Fundamentals", d:"From first boot to hardened sysadmin: the complete Linux path.", res:[["Ubuntu Tutorials","https://ubuntu.com/tutorials"],["Linux Journey","https://linuxjourney.com/"]],
      children:[
        { t:"Installation & Environment", d:"Get Linux running and feel at home.", res:[["Linux Journey","https://linuxjourney.com/"]],
          children:[
            { t:"Linux Distributions", d:"Ubuntu, Debian, Arch: pick your fighter.", res:[["Linux Journey","https://linuxjourney.com/"],["DistroWatch","https://distrowatch.com/"]] },
            { t:"Virtual Machines", d:"Run Linux safely inside VirtualBox.", res:[["VirtualBox","https://www.virtualbox.org/"]] },
            { t:"Terminal Setup", d:"A shell that feels like home.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"Filesystem Layout", d:"/etc, /var, /home: know the map.", res:[["Filesystem Hierarchy","https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/"]] }
          ] },
        { t:"Files & Permissions", d:"chmod, chown, users. Who can do what.", res:[["LinuxCommand.org","https://linuxcommand.org/"],["ExplainShell","https://explainshell.com/"]],
          children:[
            { t:"File Operations", d:"cp, mv, rm, mkdir without fear.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"chmod, chown, umask", d:"The permission trio, mastered.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"ACLs & Special Bits", d:"Beyond rwx: setfacl, SUID, SGID.", res:[["ArchWiki: Permissions","https://wiki.archlinux.org/title/File_permissions_and_attributes"]] }
          ] },
        { t:"Text Processing", d:"grep, sed, awk, pipes. Process anything.", res:[["RegexOne","https://regexone.com/"],["Bash Hackers","https://wiki.bash-hackers.org/"]],
          children:[
            { t:"grep & Regex", d:"Find anything in anything.", res:[["Regex101","https://regex101.com/"]] },
            { t:"sed & awk", d:"Stream-editing superpowers.", res:[["GNU sed manual","https://www.gnu.org/software/sed/manual/"]] },
            { t:"sort, uniq, cut, tr", d:"Slice and dice text streams.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"Pipes & Redirection", d:"Chain commands like a pro.", res:[["Linux Journey","https://linuxjourney.com/"]] }
          ] },
        { t:"Processes & systemd", d:"Services, jobs, and what runs your machine.", res:[["systemd Docs","https://www.freedesktop.org/wiki/Software/systemd/"],["Arch Wiki systemd","https://wiki.archlinux.org/title/Systemd"]],
          children:[
            { t:"Process Inspection", d:"ps, top, htop: see everything running.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"Signals & Job Control", d:"kill, bg, fg, nohup.", res:[["Bash Guide","https://tldp.org/LDP/abs/html/"]] },
            { t:"systemd Services", d:"systemctl: start, enable, debug.", res:[["ArchWiki: systemd","https://wiki.archlinux.org/title/Systemd"]] },
            { t:"Resource Monitoring", d:"htop, iotop, free.", res:[["Linux Journey","https://linuxjourney.com/"]] }
          ] },
        { t:"Networking Tools", d:"ssh, curl, netstat, ss. Talk to machines.", res:[["SSH Handbook","https://www.ssh.com/academy/ssh"],["curl Docs","https://curl.se/docs/"]],
          children:[
            { t:"ip & ss", d:"Modern replacements for ifconfig.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"ping & traceroute", d:"Is it up? Which path does it take?", res:[["Cloudflare Learning","https://www.cloudflare.com/learning/"]] },
            { t:"dig & nslookup", d:"DNS straight from the terminal.", res:[["howdns.works","https://howdns.works/"]] },
            { t:"curl & tcpdump", d:"Fetch anything, sniff everything.", res:[["curl docs","https://curl.se/docs/"]] }
          ] },
        { t:"Bash Scripting", d:"Automate your admin life.", res:[["Bash Guide","https://mywiki.wooledge.org/BashGuide"],["ShellCheck","https://www.shellcheck.net/"]],
          children:[
            { t:"Variables & Quoting", d:"$VAR done right.", res:[["Bash Guide","https://tldp.org/LDP/abs/html/"]] },
            { t:"Conditions & Loops", d:"if, for, while.", res:[["Bash Guide","https://tldp.org/LDP/abs/html/"]] },
            { t:"Functions", d:"Reusable blocks of power.", res:[["Bash Guide","https://tldp.org/LDP/abs/html/"]] },
            { t:"Exit Codes & set -euo", d:"Fail fast, fail loud.", res:[["ShellCheck","https://www.shellcheck.net/"]] }
          ] },
        { t:"System Administration", d:"Updates, logs, backups, hardening basics.", res:[["Debian Handbook","https://debian-handbook.info/"],["Linux Sysadmin Basics","https://ubuntu.com/server/docs"]],
          children:[
            { t:"Users & Groups", d:"useradd, groups, sudoers.", res:[["Linux Journey","https://linuxjourney.com/"]] },
            { t:"Package Management", d:"apt and friends, mastered.", res:[["Debian Apt Wiki","https://wiki.debian.org/Apt"]] },
            { t:"Logs & journald", d:"journalctl is your diary.", res:[["ArchWiki: systemd","https://wiki.archlinux.org/title/Systemd"]] },
            { t:"SSH Hardening", d:"Keys only. No passwords.", res:[["SSH Academy","https://www.ssh.com/academy/ssh"]] },
            { t:"Cron Jobs", d:"Automate with cron.", res:[["Crontab Guru","https://crontab.guru/"]] }
          ] },
        { t:"Linux Security", d:"Lock it down like a pro.", res:[["ArchWiki: Security","https://wiki.archlinux.org/title/Security"]],
          children:[
            { t:"Least Privilege", d:"Give nothing more than needed.", res:[["ArchWiki: Security","https://wiki.archlinux.org/title/Security"]] },
            { t:"Sudo Configuration", d:"visudo without tears.", res:[["Sudo Docs","https://www.sudo.ws/docs/"]] },
            { t:"System Hardening", d:"Close what you don't use.", badge:"LAB", res:[["ArchWiki: Security","https://wiki.archlinux.org/title/Security"]] },
            { t:"Auditing & Monitoring", d:"auditd and friends.", badge:"LAB", res:[["Linux Audit","https://linux-audit.com/"]] }
          ] }
      ] }
},
{
  id:"bug-bounty", title:"Bug Bounty Hunting", icon:"🎯", color:"#f43f5e", tagline:"Get paid to hack, legally.", desc:"From recon at scale to writeups that get paid: the complete hunter path.",
  root:    { t:"The Hunter Mindset", d:"Scope, rules of engagement, and how payouts work.", res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["Bugcrowd","https://www.bugcrowd.com/"]],
      children:[
        { t:"Web Fundamentals, Deep", d:"You cannot hack what you do not understand.", res:[["PortSwigger Academy","https://portswigger.net/web-security"],["MDN Web Docs","https://developer.mozilla.org/"]],
          children:[
            { t:"HTTP Deep Dive", d:"Methods, headers, cookies, CORS. The protocol of money.", res:[["MDN: HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP"],["PortSwigger: HTTP","https://portswigger.net/web-security"]],
              children:[
                { t:"Methods & Status Codes", d:"Beyond GET and POST.", res:[["MDN: HTTP","https://developer.mozilla.org/"]] },
                { t:"Headers & Cookies", d:"Metadata matters.", res:[["MDN: HTTP","https://developer.mozilla.org/"]] }
              ] },
            { t:"JavaScript for Hackers", d:"DOM, XSS sinks and sources.", res:[["PortSwigger: XSS","https://portswigger.net/web-security/cross-site-scripting"],["JavaScript.info","https://javascript.info/"]],
              children:[
                { t:"DOM XSS Sinks", d:"Where payloads land.", res:[["PortSwigger","https://portswigger.net/web-security"]] },
                { t:"Prototype Pollution", d:"Pollute to pop.", res:[["PortSwigger","https://portswigger.net/web-security"]] }
              ] }
          ] },
        { t:"Recon at Scale", d:"More targets, more bugs. Automate everything.", res:[["Amass","https://github.com/owasp-amass/amass"],["Subfinder","https://github.com/projectdiscovery/subfinder"]],
          children:[
            { t:"Subdomain Enumeration", d:"Find every door before knocking.", res:[["Subfinder","https://github.com/projectdiscovery/subfinder"],["crt.sh","https://crt.sh/"]],
              children:[
                { t:"Passive Enum", d:"Quiet discovery.", res:[["Subfinder","https://github.com/projectdiscovery/subfinder"]] },
                { t:"DNS Bruteforcing", d:"Wordlist the DNS.", res:[["SecLists","https://github.com/danielmiessler/SecLists"]] }
              ] },
            { t:"Content Discovery", d:"Fuzz for hidden paths and files.", res:[["ffuf","https://github.com/ffuf/ffuf"],["SecLists","https://github.com/danielmiessler/SecLists"]],
              children:[
                { t:"Fuzzing", d:"ffuf everything.", res:[["ffuf","https://github.com/ffuf/ffuf"]] },
                { t:"Wordlists", d:"SecLists, curated.", res:[["SecLists","https://github.com/danielmiessler/SecLists"]] }
              ] }
          ] },
        { t:"Vulnerability Classes", d:"Know the classics cold. They pay the most.", res:[["OWASP Top 10","https://owasp.org/www-project-top-ten/"],["HackTricks","https://book.hacktricks.xyz/"]],
          children:[
            { t:"IDOR & Access Control", d:"The most common paid bug class.", res:[["PortSwigger: Access Control","https://portswigger.net/web-security/access-control"],["OWASP Top 10","https://owasp.org/www-project-top-ten/"]],
              children:[
                { t:"IDOR Patterns", d:"Predictable IDs leak.", res:[["PortSwigger","https://portswigger.net/web-security"]] },
                { t:"Forced Browsing", d:"Guess the hidden URL.", res:[["OWASP","https://owasp.org/"]] }
              ] },
            { t:"SSRF & XXE", d:"Make servers attack themselves.", badge:"ADV", res:[["PortSwigger: SSRF","https://portswigger.net/web-security/ssrf"],["HackTricks","https://book.hacktricks.xyz/"]],
              children:[
                { t:"Blind SSRF", d:"No output, still wins.", res:[["PortSwigger","https://portswigger.net/web-security"]] },
                { t:"XXE Payloads", d:"XML attacks.", res:[["PortSwigger","https://portswigger.net/web-security"]] }
              ] },
            { t:"Race Conditions", d:"Timing is a vulnerability.", badge:"ADV", res:[["PortSwigger: Race Conditions","https://portswigger.net/web-security/race-conditions"],["OWASP","https://owasp.org/"]],
              children:[
                { t:"Single-Endpoint Races", d:"Timing windows.", res:[["PortSwigger","https://portswigger.net/web-security"]] }
              ] }
          ] },
        { t:"Hunter Methodology", d:"System beats luck. Hunt like a professional.", res:[["HackerOne","https://hackerone.com/"],["Intigriti","https://www.intigriti.com/"]],
          children:[
            { t:"Target Selection", d:"Pick programs you can actually win.", res:[["HackerOne Directory","https://hackerone.com/directory"],["Intigriti","https://www.intigriti.com/"]],
              children:[
                { t:"Program Recon", d:"Know your target.", res:[["HackerOne","https://hackerone.com/"]] }
              ] },
            { t:"Report Writing", d:"Clear reports get paid. Vague ones get closed.", res:[["OWASP Disclosure Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"],["HackerOne Hacktivity","https://hackerone.com/hacktivity"]],
              children:[
                { t:"Impact & Severity", d:"Sell the bug.", res:[["HackerOne","https://hackerone.com/hacktivity"]] }
              ] }
          ] }
      ] }
},
{
  id:"networking", title:"Computer Networking", icon:"🌐", color:"#38bdf8", tagline:"Master the wires of the world.", desc:"From packets to firewalls: networking for hackers, devs and the curious.",
  root:    { t:"Networks 101", d:"What actually happens when you open a website.", res:[["Cloudflare Learning","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]],
      children:[
        { t:"OSI & TCP/IP", d:"The models that explain everything.", res:[["Cloudflare: OSI Model","https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"],["Practical Networking","https://www.practicalnetworking.net/"]],
          children:[
            { t:"IP & Subnetting", d:"Addressing and CIDR math. Do it in your head.", res:[["CIDR.xyz","https://cidr.xyz/"],["Practical Networking Subnetting","https://www.practicalnetworking.net/"]],
              children:[
                { t:"CIDR Notation", d:"Slash math.", res:[["CIDR.xyz","https://cidr.xyz/"]] },
                { t:"Subnet Practice", d:"Drill it until easy.", res:[["Practical Networking","https://www.practicalnetworking.net/"]] }
              ] },
            { t:"DNS Deep Dive", d:"The phonebook of the internet.", res:[["howdns.works","https://howdns.works/"],["Cloudflare: What is DNS","https://www.cloudflare.com/learning/dns/what-is-dns/"]],
              children:[
                { t:"Record Types", d:"A, AAAA, MX, TXT.", res:[["howdns.works","https://howdns.works/"]] },
                { t:"DNS Security", d:"Spoofing and DNSSEC.", res:[["Cloudflare","https://www.cloudflare.com/learning/"]] }
              ] }
          ] },
        { t:"Routing & Switching", d:"How packets find their way across the world.", res:[["Practical Networking","https://www.practicalnetworking.net/"],["Cloudflare Learning","https://www.cloudflare.com/learning/"]],
          children:[
            { t:"Routing Tables", d:"Read the map.", res:[["Practical Networking","https://www.practicalnetworking.net/"]] },
            { t:"VLANs", d:"Segment your networks.", res:[["Practical Networking","https://www.practicalnetworking.net/"]] }
          ] },
        { t:"Wireshark Mastery", d:"Read the wire. See every packet.", badge:"LAB", res:[["Wireshark Docs","https://www.wireshark.org/docs/"],["Sample Captures","https://wiki.wireshark.org/SampleCaptures"]],
          children:[
            { t:"Capture Filters", d:"Capture less, see more.", res:[["Wireshark Docs","https://www.wireshark.org/docs/"]] },
            { t:"Traffic Analysis", d:"Find the anomaly.", res:[["Wireshark Docs","https://www.wireshark.org/docs/"]] }
          ] },
        { t:"Network Services", d:"DHCP, NAT, firewalls. The infrastructure you touch daily.", res:[["Cloudflare Learning","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]],
          children:[
            { t:"Firewalls & NAT", d:"What blocks you, and why.", res:[["Cloudflare: Firewalls","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]],
              children:[
                { t:"iptables Basics", d:"Linux firewalling.", res:[["netfilter","https://www.netfilter.org/"]] },
                { t:"NAT Types", d:"Translate addresses.", res:[["Cloudflare","https://www.cloudflare.com/learning/"]] }
              ] }
          ] }
      ] }
},
{
  id:"cloud", title:"Cloud Computing", icon:"☁️", color:"#e879f9", tagline:"Own the cloud.", desc:"AWS core services and cloud security: build it, then break it (legally).",
  root:    { t:"Cloud Concepts", d:"Regions, zones, and the shared responsibility model.", res:[["AWS Skill Builder","https://skillbuilder.aws/"],["AWS Docs","https://docs.aws.amazon.com/"]],
      children:[
        { t:"AWS Core Services", d:"EC2, S3, VPC, IAM. The big four.", res:[["AWS Docs","https://docs.aws.amazon.com/"],["AWS Skill Builder","https://skillbuilder.aws/"]],
          children:[
            { t:"IAM Deep Dive", d:"Who can do what. The number one misconfig source.", res:[["AWS IAM Docs","https://docs.aws.amazon.com/iam/"],["HackTricks Cloud","https://cloud.hacktricks.xyz/"]],
              children:[
                { t:"Policies", d:"JSON permissions.", res:[["AWS IAM","https://docs.aws.amazon.com/iam/"]] },
                { t:"Roles & Trust", d:"Assume wisely.", res:[["AWS IAM","https://docs.aws.amazon.com/iam/"]] }
              ] },
            { t:"S3 & Storage", d:"Buckets leak. Yours must not.", res:[["AWS S3 Docs","https://docs.aws.amazon.com/s3/"],["HackTricks Cloud","https://cloud.hacktricks.xyz/"]],
              children:[
                { t:"Bucket Policies", d:"Who can read what.", res:[["AWS S3","https://docs.aws.amazon.com/s3/"]] },
                { t:"Encryption", d:"At rest and in transit.", res:[["AWS S3","https://docs.aws.amazon.com/s3/"]] }
              ] }
          ] },
        { t:"Cloud Security", d:"Think like an attacker in the cloud.", res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"],["AWS Security Docs","https://docs.aws.amazon.com/security/"]],
          children:[
            { t:"Common Misconfigurations", d:"Public buckets, open security groups, leaked keys.", res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"],["Prowler","https://github.com/prowler-cloud/prowler"]],
              children:[
                { t:"Public Resources", d:"Exposed by default?", res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"]] },
                { t:"Leaked Keys", d:"GitHub dorking.", res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"]] }
              ] },
            { t:"ScoutSuite & Prowler", d:"Audit cloud configs automatically.", badge:"LAB", res:[["ScoutSuite","https://github.com/nccgroup/ScoutSuite"],["Prowler","https://github.com/prowler-cloud/prowler"]],
              children:[
                { t:"Running Audits", d:"Scan your cloud.", res:[["ScoutSuite","https://github.com/nccgroup/ScoutSuite"]] },
                { t:"Remediation", d:"Fix what you find.", res:[["Prowler","https://github.com/prowler-cloud/prowler"]] }
              ] }
          ] }
      ] }
}
];
