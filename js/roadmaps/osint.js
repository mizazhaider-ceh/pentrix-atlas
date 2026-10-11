/* Atlas roadmap data: OSINT (osint) */
ROADMAPS.push({
  "id": "osint",
  "title": "OSINT",
  "icon": "🕵️",
  "color": "#134e4a",
  "desc": "Open-source intelligence: find, verify, and connect the dots hidden in public data, legally and safely.",
  "kind": "skill",
  "root": {
    "t": "OSINT",
    "d": "From searching like a pro to running full investigations with documented evidence.",
    "children": [
      {
        "t": "Investigation Foundations",
        "d": "The mindset, rules, and habits that separate real investigators from googlers.",
        "lv": 1,
        "children": [
          {
            "t": "What OSINT Is (and Is Not)",
            "d": "Public data, collected legally, turned into answers. Hacking, doxxing, and trespass are not OSINT.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "OSINT defined: intelligence from publicly available sources, collected without breaking access controls",
              "How OSINT differs from HUMINT, SIGINT, and closed-source intel, and why all intel starts as a question",
              "Real-world roles that use OSINT: journalists, fraud investigators, pentesters, threat intel analysts, law enforcement"
            ],
            "do": [
              "Write the OSINT definition in your own words and list three legal vs illegal collection examples",
              "Find three real investigative journalism pieces and identify which public sources each one used",
              "List the five OSINT practitioner types above and which legal constraints each faces"
            ],
            "tools": ["OSINT Framework"],
            "res": [
              ["OSINT Framework", "https://osintframework.com"],
              ["SANS Open-Source Intelligence", "https://www.sans.org"]
            ],
            "tip": "Beginners confuse 'publicly accessible' with 'public'. A leaked database you were never meant to see is accessible, not public, and using it can still be illegal depending on your jurisdiction."
          },
          {
            "t": "The Intelligence Cycle",
            "d": "Direction, collection, processing, analysis, dissemination. Amateurs collect; professionals cycle.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The five phases of the intelligence cycle and why investigations must start with a defined requirement",
              "Collection vs analysis: gathering data is cheap, turning it into judgment is the actual skill",
              "Dissemination: who consumes your findings and what format they need (report, alert, testimony)"
            ],
            "do": [
              "Take a vague question ('who owns this domain?') and rewrite it as three precise intelligence requirements",
              "Run one small collection task, then stop and write what the data actually proves vs suggests",
              "Draft a one-page brief for a non-technical audience summarizing five collected facts"
            ],
            "tools": ["Markdown notes", "Obsidian"],
            "res": [
              ["OSINT Framework", "https://osintframework.com"],
              ["SANS", "https://www.sans.org"]
            ]
          },
          {
            "t": "Legality, Ethics & Boundaries",
            "d": "Know exactly which line you must never cross before you collect your first byte.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Terms of service are contracts: violating a platform's ToS during collection can create legal exposure",
              "GDPR and privacy law basics for investigators in Europe: public data still has processing rules",
              "The ethics line: consent, minimization (collect only what answers the question), and harm to subjects"
            ],
            "do": [
              "Read the ToS of two platforms you use daily and note the clauses about automated collection",
              "Write your personal rules of engagement: what you will and will not do during an investigation",
              "Research how your country's law treats investigating private individuals vs public figures"
            ],
            "tools": ["Terms of Service; Didn't Read"],
            "res": [
              ["SOCRadar OSINT Tools Guide (FAQ)", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ],
            "tip": "'It's on the internet so it's fair game' is how beginners get into legal trouble. Public visibility does not equal consent to process, especially under GDPR."
          },
          {
            "t": "OPSEC for Investigators",
            "d": "Protect yourself before you investigate anyone: your searches leave trails.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Threat model for an investigator: who might notice your collection and what it would cost you",
              "Egress hygiene: separate browser profiles, VPN/Tor routing, and why your home IP must never touch a target",
              "Operational signatures: query patterns, account reuse, and timezone leaks that betray an investigation"
            ],
            "do": [
              "Set up a dedicated investigation browser profile with hardened privacy settings",
              "Write a personal threat model: adversaries, assets, acceptable risks for your practice investigations",
              "Test what your browser leaks about you on a fingerprinting site, then reduce the leakage"
            ],
            "tools": ["Firefox", "Tor Browser", "Proton VPN"],
            "res": [
              ["Tor Project", "https://www.torproject.org"],
              ["Tails", "https://tails.boum.org"]
            ],
            "tip": "The most common OPSEC failure is using one browser for everything. One careless login to your personal account while poking a target's infrastructure links the two forever."
          },
          {
            "t": "Sock Puppets & Compartmentation",
            "d": "Clean, separate identities for research, and knowing when you actually need one.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What a research (sock puppet) account is for: viewing public content without exposing your real identity",
              "Compartmentation: one identity per investigation, never mixed, never reused across cases",
              "When you do NOT need one: passive techniques that never touch the target or log you in"
            ],
            "do": [
              "Create one clean research persona with a consistent backstory, email, and avatar",
              "Map which of your tools require an account and which work passively",
              "Document the lifecycle: create, use, retire, and how to destroy it without traces"
            ],
            "tools": ["Firefox Multi-Account Containers", "Bitwarden"],
            "res": [
              ["SOCRadar OSINT Tools Guide", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ]
          },
          {
            "t": "Documenting & Citing Evidence",
            "d": "An investigation you cannot reproduce is a rumor. Capture, timestamp, and cite everything.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Evidence capture: full-page screenshots, archived URLs, and original file hashes for every key finding",
              "Chain of notes: date, source URL, retrieval method, and what the finding supports, for every artifact",
              "Citation discipline: quote exactly, never paraphrase claims, and separate fact from inference"
            ],
            "do": [
              "Archive five web pages in the Wayback Machine and save the archived URLs",
              "Build a simple evidence log template (date, URL, method, finding, supports) and use it on a practice case",
              "Screenshot a social media post three ways (browser, archive, metadata) and compare what each preserves"
            ],
            "tools": ["Wayback Machine", "Hunchly", "sha256sum"],
            "res": [
              ["Wayback Machine", "https://web.archive.org"]
            ],
            "tip": "Beginners screenshot without the URL bar and timestamp. Without those, your screenshot proves nothing about where or when you saw it."
          }
        ]
      },
      {
        "t": "Search Engine Mastery",
        "d": "The single highest-leverage OSINT skill: making search engines do the work for you.",
        "lv": 1,
        "children": [
          {
            "t": "Search Operators, Google First",
            "d": "site:, filetype:, intitle:, and friends turn a search box into a precision instrument.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Core operators: site:, filetype:, intitle:, inurl:, intext:, quotes for exact phrases, minus to exclude",
              "Combining operators to answer a real question in one query instead of ten vague ones",
              "Why verbatim mode and region settings change results, and how to control them"
            ],
            "do": [
              "Answer: which PDFs about 'incident response plan' sit on .gov domains (one query)",
              "Find pages on a chosen site that mention a specific phone number format",
              "Re-run the same query with three different region settings and compare the top results"
            ],
            "tools": ["Google", "Google Verbatim mode"],
            "res": [
              ["Google Hacking Database", "https://www.exploit-db.com/google-hacking-database"]
            ],
            "tip": "Quoting a unique string from the target (an error message, a job title, a sentence) beats clever operator combos. Distinctive text is the best operator."
          },
          {
            "t": "Google Dorking & the GHDB",
            "d": "Pre-built dorks that surface exposed documents, cameras, and misconfigurations.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "What the Google Hacking Database is: categorized dorks for files, logins, cameras, and errors",
              "Reading a dork like code: what each operator contributes to the result set",
              "Responsible use: observing exposure for defense and reporting, never accessing or downloading sensitive finds"
            ],
            "do": [
              "Run five GHDB dorks against your own lab domain and document what each returns",
              "Deconstruct one dork operator by operator and predict what removing each part changes",
              "Set up Google Alerts for two distinctive strings related to your practice target"
            ],
            "tools": ["Google", "Google Alerts"],
            "res": [
              ["Google Hacking Database", "https://www.exploit-db.com/google-hacking-database"]
            ],
            "tip": "Never click into or download exposed sensitive material you find. Observing the exposure exists is OSINT; accessing the data behind it can cross into unauthorized access."
          },
          {
            "t": "Beyond Google: Alternative Engines",
            "d": "Bing, Yandex, Brave, and niche engines index different corners of the web.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Why results differ: each engine crawls and ranks differently, so one engine never sees everything",
              "Bing's strengths (image search, different index), Yandex's (faces, non-Western content), Brave/DuckDuckGo's (privacy)",
              "Specialized engines: Startpage for Google results without tracking, Mojeek for independent indexing"
            ],
            "do": [
              "Run the same five queries on Google, Bing, and Yandex and tabulate which finds what",
              "Use Yandex images on a test face photo and compare against Google Lens results",
              "Find one result on Bing that Google does not return for your practice query"
            ],
            "tools": ["Bing", "Yandex", "Brave Search", "Mojeek"],
            "res": [
              ["Bellingcat geolocation guide", "https://www.bellingcat.com/resources/how-tos/2019/03/05/how-to-use-google-earths-three-dimensional-view-feat-syria-yemen-sudan/"]
            ]
          },
          {
            "t": "Cached Pages & the Wayback Machine",
            "d": "Deleted pages are not gone. Learn to read the web's memory.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "How web archives snapshot pages over time and how to navigate between captures",
              "Using the Wayback CDX API to list every snapshot of a URL and diff versions",
              "Robots.txt games: why some snapshots vanish and what archive.today offers as an alternative"
            ],
            "do": [
              "Find a deleted page from a known event and pull its content from two different archives",
              "Use the CDX API to list all 2023 snapshots of a domain and spot when a page changed",
              "Archive your own test page and verify the capture preserved text and images"
            ],
            "tools": ["Wayback Machine", "archive.today"],
            "res": [
              ["Wayback Machine", "https://web.archive.org"]
            ]
          },
          {
            "t": "Reverse Image & Video Search",
            "d": "Upload a photo, find where else it lives. The fastest way to verify or debunk imagery.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "How reverse image search works: perceptual hashing vs exact matching, and why crops matter",
              "Multi-engine discipline: Google Lens, Bing Visual Search, Yandex Images, and TinEye index different slices",
              "Video verification: extracting frames and searching them individually"
            ],
            "do": [
              "Take a news photo and find its earliest appearance online using at least three engines",
              "Crop a photo into quadrants and search each: note which quadrant gives the decisive hit",
              "Extract frames from a short video and reverse-search three of them"
            ],
            "tools": ["Google Lens", "Bing Visual Search", "Yandex Images", "TinEye"],
            "res": [
              ["Bellingcat Shadow Finder guide", "https://www.bellingcat.com/resources/2024/08/22/shadow-geolocate-geolocation-locate-image-tool-open-source-bellingcat-measure"]
            ],
            "tip": "Search the same image on multiple engines before concluding anything. Beginners quit after Google finds nothing; the answer is often sitting on Yandex."
          }
        ]
      },
      {
        "t": "Social Media Intelligence",
        "d": "Usernames, profiles, and connections: mapping a person's public digital life.",
        "lv": 2,
        "children": [
          {
            "t": "Username Enumeration",
            "d": "One handle, dozens of accounts: sweep the internet for everywhere a name appears.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "How username checkers work: HTTP status codes and profile-page patterns per site",
              "Sherlock vs WhatsMyName: CLI automation vs curated multi-hundred-site coverage",
              "False positives: common usernames collide, so every hit needs manual confirmation"
            ],
            "do": [
              "Run Sherlock against your own old handle and verify each hit manually",
              "Check the same handle on WhatsMyName and compare coverage with Sherlock",
              "Pick three hits and prove or disprove they belong to the same person using profile details"
            ],
            "tools": ["Sherlock", "WhatsMyName"],
            "res": [
              ["Sherlock", "https://github.com/sherlock-project/sherlock"],
              ["WhatsMyName", "https://whatsmyname.app/"]
            ],
            "tip": "A username hit is a lead, not an identity. Confirm with avatars, bios, cross-links, or post history before treating two accounts as one person."
          },
          {
            "t": "Reading a Social Profile Like an Investigator",
            "d": "Bios, friends lists, check-ins, and photo backgrounds leak more than posts do.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The profile inventory: bio, links, follower overlap, tagged photos, check-ins, and posting cadence",
              "Background intelligence: reading locations, people, and objects in photos instead of captions",
              "Temporal reading: account age, first posts, and gaps that suggest deleted history or a fresh alias"
            ],
            "do": [
              "Pick a public figure's profile and inventory 20 facts from it without reading a single post",
              "Extract three location clues from photo backgrounds alone",
              "Timeline one account's activity and flag any suspicious gaps or bursts"
            ],
            "tools": ["Browser", "ExifTool"],
            "res": [
              ["SOCRadar OSINT guide", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ]
          },
          {
            "t": "Email-to-Identity Pivoting",
            "d": "An email address is a skeleton key: breach checks, account discovery, and Google footprints.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Holehe: checking one email against 120+ sites to see where accounts exist",
              "Epieos: Gmail account existence, Google review history, and linked public data",
              "Pivoting discipline: each new account is a new branch of the investigation, log them all"
            ],
            "do": [
              "Run Holehe against a test email you own and map every discovered account",
              "Use Epieos on a test Gmail to see what public Google data it surfaces",
              "Document a pivot tree: email to accounts to usernames to new emails"
            ],
            "tools": ["Holehe", "Epieos"],
            "res": [
              ["Holehe", "https://github.com/megadose/holehe"],
              ["Epieos", "https://epieos.com"]
            ],
            "tip": "Account-existence checks can confirm a target uses a service, which is itself intelligence. Only run them when the question justifies it, and document why."
          },
          {
            "t": "Friends, Followers & Social Graphs",
            "d": "People are defined by their circles. Map the network, find the weak link.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Manual graph building: mutuals, family members, and colleagues as the fastest identification path",
              "Weak-link principle: the least private friend often exposes the private target",
              "Visualization basics: nodes, edges, and why a drawn graph beats a list of names"
            ],
            "do": [
              "Map the mutual connections between two public accounts on paper",
              "Identify the three most informative 'weak links' in a practice network",
              "Recreate the same network in a simple graph drawing tool and find the central nodes"
            ],
            "tools": ["Maltego Community", "yEd"],
            "res": [
              ["Maltego", "https://www.maltego.com"]
            ]
          },
          {
            "t": "Telegram, Discord & Niche Platforms",
            "d": "Where the action moved: messengers and communities with their own search rules.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Telegram intel: public channels, forwarded-message tracing, and username search quirks",
              "Discord intel: mutual servers, message history, and why usernames alone rarely identify someone",
              "Niche platforms: Reddit, forums, and gaming profiles as rich identity sources beginners ignore"
            ],
            "do": [
              "Trace a forwarded Telegram message back to its original channel",
              "Build a profile from a Reddit account's comment history: location, age band, interests",
              "Find one gaming-platform profile and list the identity clues in its linked accounts"
            ],
            "tools": ["Telegram search", "Reddit", "Steam"],
            "res": [
              ["SOCRadar OSINT guide", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ]
          },
          {
            "t": "Verifying Claims & Spotting Fakes",
            "d": "Bots, bought followers, and staged photos: verify before you believe.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Inauthentic account signals: creation date vs follower count, posting cadence, stock avatars, engagement ratios",
              "Photo forensics basics: inconsistent lighting, warped backgrounds, and AI-generation tells",
              "Verification workflow: corroborate every claim with an independent source before using it"
            ],
            "do": [
              "Score five accounts for authenticity and justify each score with evidence",
              "Find an AI-generated profile photo and list the visual tells you spotted",
              "Take one viral claim and verify or debunk it with two independent sources"
            ],
            "tools": ["Botometer alternatives", "FotoForensics"],
            "res": [
              ["Bellingcat resources", "https://www.bellingcat.com/resources/"]
            ],
            "tip": "Beginners trust screenshots. Screenshots are the easiest evidence to fake: always verify against the live source or an archive."
          }
        ]
      },
      {
        "t": "People & Identity Investigation",
        "d": "From a name, email, or phone number to a verified picture of a real person.",
        "lv": 2,
        "children": [
          {
            "t": "People Search Playbook",
            "d": "Names, addresses, and relatives: how public-records searching actually works.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The search ladder: exact name to name plus city to name plus relative, narrowing deliberately",
              "What aggregators know: voter rolls, property records, and court filings are public in many countries",
              "Disambiguation: common names require anchors (age, city, relative) before any conclusion"
            ],
            "do": [
              "Build a search ladder for a fictional test identity and record what each rung adds",
              "Compare results for the same query across two people-search sites and note conflicts",
              "Write the disambiguation rule you will apply before linking any record to a person"
            ],
            "tools": ["Public records portals", "Voter registries"],
            "res": [
              ["SOCRadar OSINT guide", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ]
          },
          {
            "t": "Breach Data & Account Exposure",
            "d": "Billions of credentials have leaked. Learn to check exposure without touching stolen data.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "HaveIBeenPwned: checking your own (or authorized) emails and domains for breach exposure",
              "What breach data reveals beyond passwords: usernames, IPs, security questions, linked accounts",
              "The ethical line: checking exposure for defense is fine; downloading or querying others' data is not"
            ],
            "do": [
              "Check your own emails on HaveIBeenPwned and document the breach sources",
              "Use the HIBP domain search concept to plan a notification workflow for a fictional company",
              "List what an attacker could do with each exposed data type and how to mitigate it"
            ],
            "tools": ["HaveIBeenPwned", "IntelX"],
            "res": [
              ["HaveIBeenPwned", "https://haveibeenpwned.com"],
              ["Intelligence X", "https://intelx.io"]
            ],
            "tip": "Never download breach dumps 'for research' and never pay for stolen data. If you would not want it done with your data, do not do it with someone else's."
          },
          {
            "t": "Phone Number Intelligence",
            "d": "A phone number carries a carrier, a country, and sometimes a whole identity.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Number anatomy: country code, carrier prefix, and what numbering plans reveal about origin",
              "PhoneInfoga: validation, carrier lookup, and reputation checks from the terminal",
              "Messengers as oracles: WhatsApp/Telegram/Signal profile lookups via number (and their privacy implications)"
            ],
            "do": [
              "Parse five international numbers by hand: country, carrier, number type",
              "Run PhoneInfoga's scanners against a test number and categorize the findings",
              "Document which messenger lookups work passively and which require interaction"
            ],
            "tools": ["PhoneInfoga"],
            "res": [
              ["PhoneInfoga", "https://github.com/sundowndev/PhoneInfoga"]
            ]
          },
          {
            "t": "Data Brokers & Public Records",
            "d": "The companies that sell your data are also a source, if you know where to look.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "How data brokers aggregate public records, purchases, and web data into dossiers",
              "Subject access and opt-out: your rights to see and delete broker data about yourself",
              "Investigative use: corroborating identity details while respecting minimization"
            ],
            "do": [
              "File a data access request with one broker and document the process",
              "Opt yourself out of two brokers and record before/after search results",
              "Map which record types are public in your country vs restricted"
            ],
            "tools": ["Broker opt-out portals"],
            "res": [
              ["SOCRadar OSINT guide", "https://socradar.io/blog/osint-tools-for-cybersecurity-guide/"]
            ],
            "tag": "opt"
          },
          {
            "t": "Entity Resolution: Same Person or Not",
            "d": "The hardest OSINT question, answered with evidence instead of vibes.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Identifiers ranked by strength: phone and email beat names; photos and writing style corroborate",
              "The two-identifier rule: never merge identities on a single matching data point",
              "Documenting uncertainty: confidence levels (confirmed, likely, possible) in your notes"
            ],
            "do": [
              "Take two similar profiles and build a for/against table for them being the same person",
              "Assign confidence levels to five identity claims in a practice case",
              "Write the sentence you would put in a report for a 'likely but unconfirmed' match"
            ],
            "tools": ["Spreadsheet", "Maltego Community"],
            "res": [
              ["Maltego", "https://www.maltego.com"]
            ],
            "tip": "The classic beginner error is merging two people with the same name in the same city. Common name plus common city equals zero identification."
          }
        ]
      },
      {
        "t": "Geolocation & Visual Intelligence",
        "d": "Where was this taken, and when: the Bellingcat playbook, step by step.",
        "lv": 2,
        "children": [
          {
            "t": "EXIF & Photo Metadata",
            "d": "Cameras confess: GPS, timestamps, and device info hiding inside every photo.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "EXIF structure: which tags matter (GPS, DateTimeOriginal, Make/Model) and which are noise",
              "ExifTool: reading, filtering, and batch-extracting metadata from the command line",
              "Metadata hygiene: social platforms strip EXIF, originals often do not, and metadata can be faked"
            ],
            "do": [
              "Extract GPS and timestamps from five test photos with ExifTool",
              "Batch-export metadata from a folder to CSV and sort by capture date",
              "Upload a photo to a social platform, re-download it, and compare metadata before and after"
            ],
            "tools": ["ExifTool"],
            "res": [
              ["ExifTool", "https://exiftool.org"]
            ],
            "tip": "GPS in EXIF is a claim, not a fact. It can be edited in seconds, so corroborate coordinates with visual evidence before reporting them."
          },
          {
            "t": "The Geolocation Workflow",
            "d": "Clues to region, region to map, map to street view: the repeatable method.",
            "lv": 2,
            "time": "~4h",
            "badge": "LAB",
            "learn": [
              "The clue inventory: language, road markings, vegetation, architecture, sun direction, infrastructure",
              "The workflow: inventory clues, anchor a region, match road layout on satellite, confirm at street level",
              "The 3-0 rule: road layout matching against satellite imagery is the decisive cross-check"
            ],
            "do": [
              "Geolocate three practice photos: inventory clues in writing before opening any map",
              "Match a road layout from a photo against satellite imagery and document each step",
              "Confirm one location in street-level imagery and record camera position plus bearing"
            ],
            "tools": ["Google Earth Pro", "Google Street View", "SunCalc"],
            "res": [
              ["Google Earth", "https://earth.google.com"],
              ["SunCalc", "https://suncalc.org"],
              ["Bellingcat geolocation guide", "https://www.bellingcat.com/resources/how-tos/2019/03/05/how-to-use-google-earths-three-dimensional-view-feat-syria-yemen-sudan/"]
            ]
          },
          {
            "t": "Satellite Imagery & Map Tools",
            "d": "Free eyes in the sky: Sentinel, Google Earth Pro, and reading terrain like text.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Sentinel Hub EO Browser: free multi-spectral satellite passes for change detection",
              "Google Earth Pro: historical imagery slider, 3D terrain, and measurement tools",
              "Reading imagery: shadows, construction change, vehicle tracks, and what resolution actually resolves"
            ],
            "do": [
              "Use the historical slider to find when a building appeared at a known location",
              "Compare the same site across Google Earth, Sentinel, and Bing Maps and note quality differences",
              "Measure a shadow and a building footprint to estimate heights"
            ],
            "tools": ["Google Earth Pro", "Sentinel Hub EO Browser", "Bing Maps"],
            "res": [
              ["Google Earth", "https://earth.google.com"],
              ["Copernicus Browser", "https://browser.dataspace.copernicus.eu/"]
            ],
            "tip": "Different platforms blur different sites. A blank spot on one map layer is a finding, not a dead end: cross-check another provider."
          },
          {
            "t": "Chronolocation: Dating a Photo",
            "d": "Shadows are clocks. Learn to pin down when an image was taken.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Shadow math: object height vs shadow length gives solar elevation, which constrains date and time",
              "The Shadow Finder approach: automating the search across the globe for matching sun angles",
              "Corroborating time: weather records, event schedules, and visible clocks or screens"
            ],
            "do": [
              "Measure an object and its shadow in a photo and estimate the solar elevation",
              "Use SunCalc to check which dates match a shadow at a known location",
              "Chronolocate one practice photo and document the date range plus your uncertainty"
            ],
            "tools": ["SunCalc", "Bellingcat Shadow Finder"],
            "res": [
              ["Bellingcat Shadow Finder guide", "https://www.bellingcat.com/resources/2024/08/22/shadow-geolocate-geolocation-locate-image-tool-open-source-bellingcat-measure"],
              ["SunCalc", "https://suncalc.org"]
            ]
          },
          {
            "t": "Transport & Fleet Tracking",
            "d": "Planes, ships, and trains broadcast their positions. Learn to read the feeds.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ADS-B: how aircraft broadcast identity and position, and what ADS-B Exchange shows",
              "AIS: ship tracking via MarineTraffic, including what goes dark and why",
              "Limits: military and sensitive flights often spoof, block, or drop off the feeds"
            ],
            "do": [
              "Track a commercial flight live and record its callsign, route, and altitude changes",
              "Find a cargo ship's recent port history on a vessel tracker",
              "Document three ways a tracked asset can disappear from public feeds"
            ],
            "tools": ["ADS-B Exchange", "MarineTraffic", "OpenSky Network"],
            "res": [
              ["ADS-B Exchange", "https://globe.adsbexchange.com/"],
              ["MarineTraffic", "https://www.marinetraffic.com"]
            ],
            "tag": "opt"
          },
          {
            "t": "Video Verification",
            "d": "Moving pictures, same discipline: frames, metadata, and cross-checks.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Frame extraction: pulling stills for reverse image search and geolocation",
              "Video metadata: what survives upload and what container data reveals about the source",
              "Audio and continuity clues: accents, signage, and edits that betray staging"
            ],
            "do": [
              "Extract ten frames from a practice video and reverse-search three of them",
              "Check a video file's container metadata before and after platform upload",
              "List every location clue visible across a 60-second clip, not just the obvious ones"
            ],
            "tools": ["ffmpeg", "ExifTool", "YouTube DataViewer"],
            "res": [
              ["Bellingcat resources", "https://www.bellingcat.com/resources/"]
            ]
          }
        ]
      },
      {
        "t": "Infrastructure & Network Intel",
        "d": "Domains, certificates, and exposed devices: OSINT for the internet's plumbing.",
        "lv": 2,
        "children": [
          {
            "t": "Domains, WHOIS & DNS History",
            "d": "Who registered it, when it changed, and what it pointed to before.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "WHOIS anatomy: registrant, registrar, creation and expiry dates, and what privacy redaction hides",
              "DNS history: A/MX/NS records over time reveal infrastructure moves and ownership changes",
              "Passive DNS and whois history services: seeing the domain's past without touching it"
            ],
            "do": [
              "Pull full WHOIS for three domains and compare registrar and creation-date patterns",
              "Use ICANN Lookup on a domain and record every available field",
              "Trace one domain's historical IP addresses and list what else lived on those IPs"
            ],
            "tools": ["ICANN Lookup", "whois CLI", "SecurityTrails"],
            "res": [
              ["ICANN Lookup", "https://lookup.icann.org/en"]
            ],
            "tip": "Post-GDPR WHOIS is mostly redacted. Beginners stop there; investigators pivot to DNS history, certificates, and infrastructure overlap instead."
          },
          {
            "t": "Certificate Transparency (crt.sh)",
            "d": "Every TLS certificate is public. crt.sh turns that into a subdomain goldmine.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "How Certificate Transparency logs work and why they are a passive recon gift",
              "crt.sh queries: finding subdomains, wildcard certs, and issuance patterns for a domain",
              "Operational use: monitoring CT logs for lookalike domains targeting your organization"
            ],
            "do": [
              "Query crt.sh for a domain and list subdomains not visible in search engines",
              "Identify wildcard vs individual certificates and what each implies",
              "Set up a mental model for CT-log monitoring as a defensive early warning"
            ],
            "tools": ["crt.sh"],
            "res": [
              ["crt.sh", "https://crt.sh"]
            ]
          },
          {
            "t": "Shodan: The Internet's Search Engine",
            "d": "Search devices, not websites: banners, open ports, and exposed everything.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Shodan's model: internet-wide scanning indexed by banner, port, product, and geography",
              "Filters that matter: port, product, org, country, and banner text combinations",
              "Defensive framing: finding your own exposures to fix them, and responsible disclosure for others'"
            ],
            "do": [
              "Run five filtered Shodan searches and explain what each filter narrows",
              "Find exposed devices in one product category and characterize the exposure",
              "Write a responsible-disclosure note template for an exposure you would report"
            ],
            "tools": ["Shodan"],
            "res": [
              ["Shodan", "https://www.shodan.io"]
            ],
            "tip": "Shodan shows you the open door; walking through it is a crime. Reconnaissance is legal observation, exploitation is not, and the line is the login or the payload."
          },
          {
            "t": "Passive Recon for Investigations",
            "d": "theHarvester, Recon-ng, and SpiderFoot: automated collection without touching the target.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Passive vs active recon: why investigators prefer sources that never contact the target",
              "theHarvester: emails, subdomains, and IPs from search engines and public APIs",
              "Recon-ng's module model and SpiderFoot's automation for repeatable collection runs"
            ],
            "do": [
              "Run theHarvester against a test domain and categorize the harvested emails and hosts",
              "Build a Recon-ng workspace with three modules chained on one domain",
              "Run a SpiderFoot scan on a test target and triage the top ten findings"
            ],
            "tools": ["theHarvester", "Recon-ng", "SpiderFoot"],
            "res": [
              ["theHarvester", "https://github.com/laramies/theHarvester"],
              ["Recon-ng", "https://github.com/lanmaster53/recon-ng"],
              ["SpiderFoot", "https://github.com/smicallef/spiderfoot"]
            ]
          },
          {
            "t": "Dark Web & Threat Intel Basics",
            "d": "Tor, onion services, and threat feeds: collecting where criminals talk.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Tor fundamentals for investigators: circuits, onion services, and safe browsing discipline",
              "What threat intel feeds add: IOCs, ransomware leak sites, and breach chatter as investigation inputs",
              "Safety rules: never download from onion sites, never transact, log everything for your case file"
            ],
            "do": [
              "Set up Tor Browser with the safest security level and verify your circuit",
              "Explore two public threat intel feeds and extract current IOC themes",
              "Write your dark-web collection safety checklist before any real visit"
            ],
            "tools": ["Tor Browser", "VirusTotal", "urlscan.io"],
            "res": [
              ["Tor Project", "https://www.torproject.org"],
              ["VirusTotal", "https://www.virustotal.com"],
              ["urlscan.io", "https://urlscan.io"]
            ],
            "tag": "opt",
            "tip": "Curiosity is the main hazard on the dark web. Decide exactly what you need before connecting, get it, and leave. Browsing is how investigators get compromised."
          }
        ]
      },
      {
        "t": "Analysis, Automation & Reporting",
        "d": "Turn piles of data into a story a decision-maker can act on.",
        "lv": 3,
        "children": [
          {
            "t": "Link Analysis with Maltego",
            "d": "Entities and transforms: watch a graph grow from one seed into a network.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Entities and transforms: how Maltego turns a domain into IPs, emails, and people",
              "Graph hygiene: pruning false merges before they poison your conclusions",
              "Community Edition limits and when a graph has served its purpose"
            ],
            "do": [
              "Build a graph from one domain using five different transforms",
              "Deliberately merge two same-name entities, then find and fix the error",
              "Export a graph and write the three findings it made visible"
            ],
            "tools": ["Maltego Community Edition"],
            "res": [
              ["Maltego", "https://www.maltego.com"]
            ],
            "tip": "Graphs lie beautifully. Every edge is a hypothesis; if you cannot cite the source behind an edge, delete the edge."
          },
          {
            "t": "Automated Collection with SpiderFoot",
            "d": "Point, click, correlate: hundred-source sweeps while you analyze.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "SpiderFoot's module system: which modules need API keys and which run free",
              "Scan configuration: use-case presets, correlation rules, and false-positive tuning",
              "From scan to leads: triaging automated output into investigation branches"
            ],
            "do": [
              "Run a full SpiderFoot scan on a test domain with free modules only",
              "Tune correlation settings and compare finding counts before and after",
              "Convert the top five findings into documented investigation leads"
            ],
            "tools": ["SpiderFoot"],
            "res": [
              ["SpiderFoot", "https://github.com/smicallef/spiderfoot"]
            ]
          },
          {
            "t": "Building Investigation Timelines",
            "d": "When happened matters as much as what: reconstruct the sequence.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Timeline anatomy: timestamp, source, event, and confidence for every entry",
              "Corroboration across sources: two independent timestamps beat one confident claim",
              "Gaps as findings: missing periods in a timeline are themselves worth investigating"
            ],
            "do": [
              "Build a 20-event timeline for a public case from at least three source types",
              "Flag every entry as confirmed, single-source, or inferred",
              "Write the paragraph your timeline disproves and the one it supports"
            ],
            "tools": ["Timeline tools", "Spreadsheet", "Aeon Timeline"],
            "res": [
              ["Bellingcat resources", "https://www.bellingcat.com/resources/"]
            ]
          },
          {
            "t": "Attribution: Evidence vs Assumption",
            "d": "The discipline of not saying more than the evidence supports.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Attribution levels: technical indicators suggest, behavior implies, identity requires proof",
              "Cognitive traps: confirmation bias, mirror imaging, and the single-source cascade",
              "The confidence scale: how intelligence professionals phrase uncertainty honestly"
            ],
            "do": [
              "Take one attribution claim and grade each supporting fact by confidence",
              "Rewrite three confident sentences from a practice report using proper uncertainty language",
              "List the alternative explanations your evidence cannot rule out"
            ],
            "tools": ["Structured analytic techniques"],
            "res": [
              ["Bellingcat resources", "https://www.bellingcat.com/resources/"]
            ],
            "tip": "If your conclusion feels satisfying, you are probably done too early. Attribution that survives your own best counter-argument is the only kind worth publishing."
          },
          {
            "t": "Writing the Investigation Report",
            "d": "Findings, evidence, confidence: a report a lawyer, editor, or CISO can trust.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Report structure: executive summary, methodology, findings with evidence, confidence ratings, appendices",
              "Methodology sections: detailed enough that another investigator could reproduce your work",
              "Handling uncertainty in writing: what to say when the evidence runs out"
            ],
            "do": [
              "Write a two-page report on a practice investigation using the full structure",
              "Have someone else try to reproduce one finding from your methodology section alone",
              "Redact a practice report for public release and note what you removed and why"
            ],
            "tools": ["Markdown", "Report templates"],
            "res": [
              ["SANS", "https://www.sans.org"]
            ]
          }
        ]
      },
      {
        "t": "Capstone: Full Investigation",
        "d": "Prove it end to end: a real case, real evidence, real report.",
        "lv": 3,
        "children": [
          {
            "t": "Trace Labs-Style OSINT CTF",
            "d": "Competition pressure: find a missing person (fictional) against the clock, legally.",
            "lv": 3,
            "time": "~1w",
            "badge": "CTF",
            "learn": [
              "How OSINT CTFs work: fictional missing-person scenarios scored on verified findings",
              "Speed techniques: parallel searching, fast triage, and knowing when a lead is dead",
              "Trace Labs' real mission: crowdsourced OSINT supporting actual missing-person cases"
            ],
            "do": [
              "Play one public OSINT CTF event and submit at least five scored findings",
              "Time-box a 2-hour practice sprint on a fictional target and log your method",
              "Review your misses: which techniques would have found them faster"
            ],
            "tools": ["Trace Labs", "OSINT Framework"],
            "res": [
              ["Trace Labs", "https://www.tracelabs.org"],
              ["OSINT Framework", "https://osintframework.com"]
            ]
          },
          {
            "t": "End-to-End Practice Investigation",
            "d": "Your portfolio piece: one question, full cycle, documented evidence, written report.",
            "lv": 3,
            "time": "~1w",
            "badge": "PROJECT",
            "learn": [
              "Scoping: turning a vague question into requirements, boundaries, and a stop condition",
              "Full-cycle execution: collect, analyze, verify, and report with a complete evidence log",
              "Portfolio framing: what to publish, what to redact, and how to present the work"
            ],
            "do": [
              "Choose one investigation question and write the requirements doc first",
              "Execute the full cycle with dated evidence logs for every finding",
              "Produce the final report and a redacted public version for your portfolio"
            ],
            "tools": ["All OSINT toolkit", "Hunchly", "Maltego"],
            "res": [
              ["OSINT Framework", "https://osintframework.com"],
              ["Bellingcat resources", "https://www.bellingcat.com/resources/"]
            ]
          }
        ]
      }
    ]
  }
});
