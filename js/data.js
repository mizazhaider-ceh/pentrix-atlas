/* Atlas by The PenTrix — roadmap content v1 */
const ROADMAPS = [
{
  id:"cyber-security", title:"Cyber Security", icon:"\u{1F6E1}\uFE0F", color:"#2dd4bf",
  tagline:"From zero to offensive security pro.",
  desc:"The complete hacker path: fundamentals, recon, web hacking, exploitation and going pro. Every node is a skill with free resources.",
  root:{
    t:"The Hacker Mindset", d:"Ethics, legality, and how hackers think. This is the non-negotiable first step.",
    res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["OWASP Testing Guide","https://owasp.org/www-project-web-security-testing-guide/"]],
    children:[
      { t:"Computer & Network Basics", d:"How computers and networks actually work under the hood.",
        res:[["Cloudflare: OSI Model","https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"],["CIDR.xyz","https://cidr.xyz/"]],
        children:[
          { t:"Linux Command Line", d:"Your home turf. Live in the terminal until it feels like home.",
            res:[["LinuxCommand.org","https://linuxcommand.org/"],["OverTheWire Bandit","https://overthewire.org/wargames/bandit/"]] },
          { t:"Networking: TCP/IP & DNS", d:"Packets, ports, protocols. The language of the network.",
            res:[["Cloudflare: What is DNS","https://www.cloudflare.com/learning/dns/what-is-dns/"],["Wireshark","https://www.wireshark.org/"]] },
          { t:"Wireshark", d:"See the invisible. Read packets like a book.",
            res:[["Wireshark Docs","https://www.wireshark.org/docs/"],["Sample Captures","https://wiki.wireshark.org/SampleCaptures"]] }
        ]},
      { t:"Programming for Hackers", d:"Code is your superpower. Automate everything you do twice.",
        res:[["Official Python Tutorial","https://docs.python.org/3/tutorial/"],["web.dev Learn","https://web.dev/learn"]],
        children:[
          { t:"Python", d:"The hacker's first language. Sockets, requests, scripting.",
            res:[["Python Tutorial","https://docs.python.org/3/tutorial/"],["Automate the Boring Stuff","https://automatetheboringstuff.com/"]] },
          { t:"Bash Scripting", d:"The glue of the terminal. Chain tools into weapons.",
            res:[["Bash Hackers Wiki","https://wiki.bash-hackers.org/"],["ShellCheck","https://www.shellcheck.net/"]] },
          { t:"Web Tech: HTML & JS", d:"To break the web, you must know the web.",
            res:[["MDN Web Docs","https://developer.mozilla.org/"],["web.dev","https://web.dev/"]] }
        ]},
      { t:"Reconnaissance", d:"Information gathering. The quieter you are, the better you are.",
        res:[["OSINT Framework","https://osintframework.com/"],["Nmap","https://nmap.org/"]],
        children:[
          { t:"OSINT", d:"Intelligence from public sources. People leak everything.",
            res:[["OSINT Framework","https://osintframework.com/"],["theHarvester","https://github.com/laramies/theHarvester"]] },
          { t:"Nmap Scanning", d:"Map the attack surface: hosts, ports, services.",
            res:[["Nmap Man Page","https://nmap.org/book/man.html"],["HackTricks Network","https://book.hacktricks.xyz/network-services-pentesting"]] }
        ]},
      { t:"Web Hacking", d:"Where the bounties live. Master the request.",
        res:[["PortSwigger Academy","https://portswigger.net/web-security"],["OWASP Top 10","https://owasp.org/www-project-top-ten/"]],
        children:[
          { t:"Burp Suite", d:"The web hacker's workbench. Intercept everything.",
            res:[["Burp Documentation","https://portswigger.net/burp/documentation"],["PortSwigger Academy","https://portswigger.net/web-security"]] },
          { t:"SQL Injection", d:"Make the database talk. The classic killer.",
            res:[["PortSwigger: SQLi","https://portswigger.net/web-security/sql-injection"],["PayloadsAllTheThings","https://github.com/swisskyrepo/PayloadsAllTheThings"]] },
          { t:"XSS & Broken Access Control", d:"Client-side bugs and IDORs. Bug bounty bread and butter.",
            res:[["PortSwigger: XSS","https://portswigger.net/web-security/cross-site-scripting"],["PortSwigger: Access Control","https://portswigger.net/web-security/access-control"]] }
        ]},
      { t:"Exploitation", d:"Turn vulnerabilities into access.",
        res:[["Metasploit Docs","https://docs.metasploit.com/"],["HackTricks","https://book.hacktricks.xyz/"]],
        children:[
          { t:"Metasploit Framework", d:"The exploitation framework. Scan to shell.",
            res:[["Metasploit Docs","https://docs.metasploit.com/"],["Metasploitable 3","https://github.com/rapid7/metasploitable3"]] },
          { t:"Password Attacks", d:"Crack the hashes, spray the logins.",
            res:[["Hashcat Wiki","https://hashcat.net/wiki/"],["revshells.com","https://www.revshells.com/"]] },
          { t:"Privilege Escalation", d:"From low user to root. The real game.",
            res:[["GTFOBins","https://gtfobins.github.io/"],["HackTricks PrivEsc","https://book.hacktricks.xyz/linux-hardening/privilege-escalation"]] }
        ]},
      { t:"Go Pro", d:"Turn skill into career.",
        res:[["HackerOne","https://hackerone.com/"],["r/netsec","https://www.reddit.com/r/netsec/"]],
        children:[
          { t:"Bug Bounty Hunting", d:"Get paid to hack, legally. Start with VDPs.",
            res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["Bugcrowd","https://www.bugcrowd.com/"]] },
          { t:"Reports & Writeups", d:"If you cannot write it, you cannot sell it.",
            res:[["OWASP Disclosure Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"],["PortSwigger Blog","https://portswigger.net/research"]] }
        ]}
    ]
  }
},
{
  id:"frontend", title:"Frontend Development", icon:"\u{1F3A8}", color:"#60a5fa",
  tagline:"Build beautiful things for the web.",
  desc:"From HTML to React: everything you need to craft modern user interfaces.",
  root:{
    t:"Internet & How the Web Works", d:"DNS, HTTP, browsers. Know the platform you build on.",
    res:[["web.dev Learn","https://web.dev/learn"],["MDN: How the Web Works","https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"]],
    children:[
      { t:"HTML", d:"The skeleton. Semantic markup done right.",
        res:[["MDN HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"],["freeCodeCamp","https://www.freecodecamp.org/"]] },
      { t:"CSS", d:"The skin. Layout, flexbox, grid, animations.",
        res:[["MDN CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"],["CSS Tricks","https://css-tricks.com/"]] },
      { t:"JavaScript (ES6+)", d:"The muscle. The language of the browser.",
        res:[["JavaScript.info","https://javascript.info/"],["MDN JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"]] },
      { t:"Git & GitHub", d:"Version control. Non-negotiable for every dev.",
        res:[["Pro Git Book","https://git-scm.com/book/en/v2"],["GitHub Skills","https://skills.github.com/"]] },
      { t:"npm & Vite Tooling", d:"Packages, bundlers, dev servers.",
        res:[["npm Docs","https://docs.npmjs.com/"],["Vite","https://vitejs.dev/"]] },
      { t:"React", d:"The UI library that runs the web.",
        res:[["React Docs","https://react.dev/"],["freeCodeCamp React","https://www.freecodecamp.org/"]],
        children:[
          { t:"TypeScript", d:"JavaScript with a safety net. Industry standard now.",
            res:[["TypeScript Handbook","https://www.typescriptlang.org/docs/handbook/intro.html"],["TypeScript Playground","https://www.typescriptlang.org/play"]] },
          { t:"Testing with Vitest", d:"Prove your UI works.",
            res:[["Vitest Docs","https://vitest.dev/"],["Testing Library","https://testing-library.com/"]] }
        ]},
      { t:"Deploy: Vercel & Netlify", d:"Ship it to the world in minutes.",
        res:[["Vercel Docs","https://vercel.com/docs"],["Netlify Docs","https://docs.netlify.com/"]] }
    ]
  }
},
{
  id:"backend", title:"Backend Development", icon:"\u2699\uFE0F", color:"#a78bfa",
  tagline:"Power the logic behind the apps.",
  desc:"APIs, databases, auth and deployment: build the engine room of software.",
  root:{
    t:"Pick a Language", d:"Node.js, Python or Go. One deeply beats three shallowly.",
    res:[["Node.js Docs","https://nodejs.org/en/docs"],["Python Tutorial","https://docs.python.org/3/tutorial/"]],
    children:[
      { t:"REST APIs", d:"Design clean endpoints. The backend's handshake.",
        res:[["MDN: HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP"],["REST API Tutorial","https://restfulapi.net/"]] },
      { t:"SQL Databases", d:"PostgreSQL. Model data, write queries, index smart.",
        res:[["PostgreSQL Tutorial","https://www.postgresqltutorial.com/"],["SQLBolt","https://sqlbolt.com/"]] },
      { t:"Auth: JWT & OAuth", d:"Who are you? Prove it, securely.",
        res:[["OWASP Auth Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"],["OAuth.net","https://oauth.net/"]] },
      { t:"Caching with Redis", d:"Speed up everything that matters.",
        res:[["Redis Docs","https://redis.io/docs/"],["Redis University","https://university.redis.com/"]] },
      { t:"Docker Basics", d:"Ship the same environment everywhere.",
        res:[["Docker Get Started","https://docs.docker.com/get-started/"],["Docker Curriculum","https://docker-curriculum.com/"]] },
      { t:"Testing & CI", d:"Automated tests and pipelines that guard quality.",
        res:[["GitHub Actions","https://docs.github.com/en/actions"],["Martin Fowler on CI","https://martinfowler.com/articles/continuousIntegration.html"]] }
    ]
  }
},
{
  id:"devops", title:"DevOps", icon:"\u267E\uFE0F", color:"#f472b6",
  tagline:"Ship fast, break nothing.",
  desc:"CI/CD, containers, cloud and automation: the art of reliable delivery.",
  root:{
    t:"Linux & Scripting", d:"The foundation of all operations.",
    res:[["LinuxCommand.org","https://linuxcommand.org/"],["OverTheWire","https://overthewire.org/wargames/bandit/"]],
    children:[
      { t:"Git Deeply", d:"Branching strategies, rebasing, hooks.",
        res:[["Pro Git Book","https://git-scm.com/book/en/v2"],["Atlassian Git Tutorials","https://www.atlassian.com/git/tutorials"]] },
      { t:"CI/CD: GitHub Actions", d:"Automate build, test and deploy.",
        res:[["GitHub Actions Docs","https://docs.github.com/en/actions"],["Awesome Actions","https://github.com/sdras/awesome-actions"]] },
      { t:"Docker", d:"Containers: build once, run anywhere.",
        res:[["Docker Docs","https://docs.docker.com/"],["Play with Docker","https://labs.play-with-docker.com/"]] },
      { t:"Kubernetes", d:"Orchestrate containers at scale.",
        res:[["Kubernetes Basics","https://kubernetes.io/docs/tutorials/kubernetes-basics/"],["k8s Docs","https://kubernetes.io/docs/home/"]] },
      { t:"Cloud: AWS", d:"EC2, S3, IAM. The cloud vocabulary.",
        res:[["AWS Skill Builder","https://skillbuilder.aws/"],["AWS Docs","https://docs.aws.amazon.com/"]] },
      { t:"Terraform (IaC)", d:"Infrastructure as code. Version your servers.",
        res:[["Terraform Tutorials","https://developer.hashicorp.com/terraform/tutorials"],["Terraform Docs","https://developer.hashicorp.com/terraform/docs"]] },
      { t:"Monitoring", d:"Prometheus, Grafana. If you cannot see it, you cannot run it.",
        res:[["Prometheus Docs","https://prometheus.io/docs/"],["Grafana Tutorials","https://grafana.com/tutorials/"]] }
    ]
  }
},
{
  id:"python", title:"Python", icon:"\u{1F40D}", color:"#facc15",
  tagline:"The most versatile language on earth.",
  desc:"From automation scripts to AI: master Python step by step.",
  root:{
    t:"Python Basics", d:"Syntax, data types, loops, functions. The ABCs.",
    res:[["Official Tutorial","https://docs.python.org/3/tutorial/"],["Python.org Beginner Guide","https://wiki.python.org/moin/BeginnersGuide"]],
    children:[
      { t:"OOP & Modules", d:"Classes, objects, and organizing real code.",
        res:[["Real Python OOP","https://realpython.com/python3-object-oriented-programming/"],["Python Modules","https://docs.python.org/3/tutorial/modules.html"]] },
      { t:"Virtual Envs & pip", d:"Isolated environments. Never break system Python.",
        res:[["venv Docs","https://docs.python.org/3/library/venv.html"],["pip Guide","https://pip.pypa.io/en/stable/"]] },
      { t:"Requests & APIs", d:"Talk to the internet from Python.",
        res:[["Requests Docs","https://requests.readthedocs.io/"],["HTTPX","https://www.python-httpx.org/"]] },
      { t:"Automation Scripts", d:"Rename 1000 files in 3 lines. Feel the power.",
        res:[["Automate the Boring Stuff","https://automatetheboringstuff.com/"],["Real Python","https://realpython.com/"]] },
      { t:"Web: FastAPI", d:"Build blazing APIs with modern Python.",
        res:[["FastAPI Tutorial","https://fastapi.tiangolo.com/tutorial/"],["Flask Docs","https://flask.palletsprojects.com/"]] },
      { t:"Data: pandas & numpy", d:"Crunch numbers like a data scientist.",
        res:[["pandas Getting Started","https://pandas.pydata.org/docs/getting_started/"],["Kaggle Learn","https://www.kaggle.com/learn"]] }
    ]
  }
},
{
  id:"linux", title:"Linux", icon:"\u{1F427}", color:"#fb923c",
  tagline:"Own the machine.",
  desc:"The operating system of hackers, servers and the cloud.",
  root:{
    t:"Install & First Terminal", d:"Pick Ubuntu or Debian. Open the terminal. No fear.",
    res:[["Ubuntu Tutorials","https://ubuntu.com/tutorials"],["Linux Journey","https://linuxjourney.com/"]],
    children:[
      { t:"Files & Permissions", d:"chmod, chown, users. Who can do what.",
        res:[["LinuxCommand.org","https://linuxcommand.org/"],["ExplainShell","https://explainshell.com/"]] },
      { t:"Text Processing", d:"grep, sed, awk, pipes. Process anything.",
        res:[["RegexOne","https://regexone.com/"],["Bash Hackers","https://wiki.bash-hackers.org/"]] },
      { t:"Processes & systemd", d:"Services, jobs, and what runs your machine.",
        res:[["systemd Docs","https://www.freedesktop.org/wiki/Software/systemd/"],["Arch Wiki systemd","https://wiki.archlinux.org/title/Systemd"]] },
      { t:"Networking Tools", d:"ssh, curl, netstat, ss. Talk to machines.",
        res:[["SSH Handbook","https://www.ssh.com/academy/ssh"],["curl Docs","https://curl.se/docs/"]] },
      { t:"Bash Scripting", d:"Automate your admin life.",
        res:[["Bash Guide","https://mywiki.wooledge.org/BashGuide"],["ShellCheck","https://www.shellcheck.net/"]] },
      { t:"System Administration", d:"Updates, logs, backups, hardening basics.",
        res:[["Debian Handbook","https://debian-handbook.info/"],["Linux Sysadmin Basics","https://ubuntu.com/server/docs"]] }
    ]
  }
}
,
{
  id:"bug-bounty", title:"Bug Bounty Hunting", icon:"\u{1F3AF}", color:"#f43f5e",
  tagline:"Get paid to hack, legally.",
  desc:"From recon at scale to writeups that get paid: the complete hunter path.",
  root:{
    t:"The Hunter Mindset", d:"Scope, rules of engagement, and how payouts work.",
    res:[["HackerOne Hacktivity","https://hackerone.com/hacktivity"],["Bugcrowd","https://www.bugcrowd.com/"]],
    children:[
      { t:"Web Fundamentals, Deep", d:"You cannot hack what you do not understand.",
        res:[["PortSwigger Academy","https://portswigger.net/web-security"],["MDN Web Docs","https://developer.mozilla.org/"]],
        children:[
          { t:"HTTP Deep Dive", d:"Methods, headers, cookies, CORS. The protocol of money.",
            res:[["MDN: HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP"],["PortSwigger: HTTP","https://portswigger.net/web-security"]] },
          { t:"JavaScript for Hackers", d:"DOM, XSS sinks and sources.",
            res:[["PortSwigger: XSS","https://portswigger.net/web-security/cross-site-scripting"],["JavaScript.info","https://javascript.info/"]] }
        ]},
      { t:"Recon at Scale", d:"More targets, more bugs. Automate everything.",
        res:[["Amass","https://github.com/owasp-amass/amass"],["Subfinder","https://github.com/projectdiscovery/subfinder"]],
        children:[
          { t:"Subdomain Enumeration", d:"Find every door before knocking.",
            res:[["Subfinder","https://github.com/projectdiscovery/subfinder"],["crt.sh","https://crt.sh/"]] },
          { t:"Content Discovery", d:"Fuzz for hidden paths and files.",
            res:[["ffuf","https://github.com/ffuf/ffuf"],["SecLists","https://github.com/danielmiessler/SecLists"]] }
        ]},
      { t:"Vulnerability Classes", d:"Know the classics cold. They pay the most.",
        res:[["OWASP Top 10","https://owasp.org/www-project-top-ten/"],["HackTricks","https://book.hacktricks.xyz/"]],
        children:[
          { t:"IDOR & Access Control", d:"The most common paid bug class.",
            res:[["PortSwigger: Access Control","https://portswigger.net/web-security/access-control"],["OWASP Top 10","https://owasp.org/www-project-top-ten/"]] },
          { t:"SSRF & XXE", d:"Make servers attack themselves.",
            res:[["PortSwigger: SSRF","https://portswigger.net/web-security/ssrf"],["HackTricks","https://book.hacktricks.xyz/"]] },
          { t:"Race Conditions", d:"Timing is a vulnerability.",
            res:[["PortSwigger: Race Conditions","https://portswigger.net/web-security/race-conditions"],["OWASP","https://owasp.org/"]] }
        ]},
      { t:"Hunter Methodology", d:"System beats luck. Hunt like a professional.",
        res:[["HackerOne","https://hackerone.com/"],["Intigriti","https://www.intigriti.com/"]],
        children:[
          { t:"Target Selection", d:"Pick programs you can actually win.",
            res:[["HackerOne Directory","https://hackerone.com/directory"],["Intigriti","https://www.intigriti.com/"]] },
          { t:"Report Writing", d:"Clear reports get paid. Vague ones get closed.",
            res:[["OWASP Disclosure Sheet","https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html"],["HackerOne Hacktivity","https://hackerone.com/hacktivity"]] }
        ]}
    ]
  }
},
{
  id:"networking", title:"Computer Networking", icon:"\u{1F310}", color:"#38bdf8",
  tagline:"Master the wires of the world.",
  desc:"From packets to firewalls: networking for hackers, devs and the curious.",
  root:{
    t:"Networks 101", d:"What actually happens when you open a website.",
    res:[["Cloudflare Learning","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]],
    children:[
      { t:"OSI & TCP/IP", d:"The models that explain everything.",
        res:[["Cloudflare: OSI Model","https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/"],["Practical Networking","https://www.practicalnetworking.net/"]],
        children:[
          { t:"IP & Subnetting", d:"Addressing and CIDR math. Do it in your head.",
            res:[["CIDR.xyz","https://cidr.xyz/"],["Practical Networking Subnetting","https://www.practicalnetworking.net/"]] },
          { t:"DNS Deep Dive", d:"The phonebook of the internet.",
            res:[["howdns.works","https://howdns.works/"],["Cloudflare: What is DNS","https://www.cloudflare.com/learning/dns/what-is-dns/"]] }
        ]},
      { t:"Routing & Switching", d:"How packets find their way across the world.",
        res:[["Practical Networking","https://www.practicalnetworking.net/"],["Cloudflare Learning","https://www.cloudflare.com/learning/"]] },
      { t:"Wireshark Mastery", d:"Read the wire. See every packet.",
        res:[["Wireshark Docs","https://www.wireshark.org/docs/"],["Sample Captures","https://wiki.wireshark.org/SampleCaptures"]] },
      { t:"Network Services", d:"DHCP, NAT, firewalls. The infrastructure you touch daily.",
        res:[["Cloudflare Learning","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]],
        children:[
          { t:"Firewalls & NAT", d:"What blocks you, and why.",
            res:[["Cloudflare: Firewalls","https://www.cloudflare.com/learning/"],["Practical Networking","https://www.practicalnetworking.net/"]] }
        ]}
    ]
  }
},
{
  id:"cloud", title:"Cloud Computing", icon:"\u2601\uFE0F", color:"#e879f9",
  tagline:"Own the cloud.",
  desc:"AWS core services and cloud security: build it, then break it (legally).",
  root:{
    t:"Cloud Concepts", d:"Regions, zones, and the shared responsibility model.",
    res:[["AWS Skill Builder","https://skillbuilder.aws/"],["AWS Docs","https://docs.aws.amazon.com/"]],
    children:[
      { t:"AWS Core Services", d:"EC2, S3, VPC, IAM. The big four.",
        res:[["AWS Docs","https://docs.aws.amazon.com/"],["AWS Skill Builder","https://skillbuilder.aws/"]],
        children:[
          { t:"IAM Deep Dive", d:"Who can do what. The number one misconfig source.",
            res:[["AWS IAM Docs","https://docs.aws.amazon.com/iam/"],["HackTricks Cloud","https://cloud.hacktricks.xyz/"]] },
          { t:"S3 & Storage", d:"Buckets leak. Yours must not.",
            res:[["AWS S3 Docs","https://docs.aws.amazon.com/s3/"],["HackTricks Cloud","https://cloud.hacktricks.xyz/"]] }
        ]},
      { t:"Cloud Security", d:"Think like an attacker in the cloud.",
        res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"],["AWS Security Docs","https://docs.aws.amazon.com/security/"]],
        children:[
          { t:"Common Misconfigurations", d:"Public buckets, open security groups, leaked keys.",
            res:[["HackTricks Cloud","https://cloud.hacktricks.xyz/"],["Prowler","https://github.com/prowler-cloud/prowler"]] },
          { t:"ScoutSuite & Prowler", d:"Audit cloud configs automatically.",
            res:[["ScoutSuite","https://github.com/nccgroup/ScoutSuite"],["Prowler","https://github.com/prowler-cloud/prowler"]] }
        ]}
    ]
  }
}

];
