# Atlas Expansion Plan (v24+)

Goal: 100+ skill paths. Every roadmap split into Basic / Intermediate / Advanced,
every topic a real mini-lesson (what to learn, hands-on steps, tools, tips, time,
prerequisites, resources). Journey-first. Better than roadmap.sh in every dimension
they lack: leveling, prerequisites, hands-on depth, and AI+Cyber coverage.

## Content sources (honest)

1. **OmniSec (his own, 54 nodes)**: 7 phases, 14 stages. Every node already has
   lv (1/2/3), time, learn[], do[], tools[], res[], tip?. Distribution L1:21,
   L2:25, L3:8. Zero thin nodes. This becomes the deep Cyber Security core.
2. **roadmap.sh: coverage checklists only.** Their topic trees are the "what to
   cover" list; all text is written original. Never copy their descriptions.
   Their gaps are our wins: no skill leveling anywhere, no prerequisite chains,
   no OWASP LLM Top 10 by name, AI only as target never as attacker tooling,
   shallow agentic-AI security.
3. **Original flagship**: AI + Cybersecurity, written fresh (his niche).

## New data model

Topic: `{ t, d, lv: 1|2|3, time, tip?, learn[], do[], tools[], res[{t,u}], pre[] }`
Roadmap: `{ id, title, icon, color, desc, kind: role|skill|practice }`

`pre[]` holds prerequisite topic references (same or other roadmap).
`lv` drives level filters, per-level progress, and journey grouping.

## Architecture

- `js/data.js` splits into `js/roadmaps/*.js` (one file per roadmap,
  `ROADMAPS.push({...})`) + generated script tags. Needed past ~15 roadmaps.
- Dashboard: tabs Role-based / Skill-based / Best Practices + search.

## Product changes

1. **Journey becomes the default view** (Map one toggle away, preference persists).
2. **Level filter**: All / Basics / Intermediate / Advanced, on Journey and Map.
3. **Per-level progress**: "Basics 8/12 done · ~20h", shown in hero and sections.
4. **Prerequisites**: explicit `pre[]` chains rendered in drawer + journey cards.
5. **Cross-roadmap connections**: topics link to topics in other roadmaps.

## The 100+ list

### Role-based (31, from roadmap.sh)
Learn with AI, Frontend, Backend, Full Stack, Android, DevOps, DevSecOps,
Data Analyst, SEO, Inference Engineering, AI Engineer, AI and Data Scientist,
Data Engineer, Machine Learning, Product Design, PostgreSQL, iOS, Blockchain,
QA, Software Architect, Cyber Security, UX Design, Technical Writer,
Game Developer, Server Side Game Developer, MLOps, Product Manager,
Engineering Manager, Developer Relations, BI Analyst, Network Engineer,
Forward Deployed Engineer.

### Skill-based (59+, from roadmap.sh)
Python, JavaScript, TypeScript, React, SQL, Linux, Docker, Kubernetes, AWS,
Terraform, Git and GitHub, Computer Science, System Design, API Design,
**AI Red Teaming, AI Agents, Prompt Engineering**, Go, Rust, C++, C,
Next.js, Vue, Angular, Node.js, GraphQL, MongoDB, PostgreSQL, Redis,
Cloudflare, Data Structures & Algorithms, LeetCode, Cyber Security skills,
Shell/Bash, HTML, CSS, Design System, and the rest of their 59.

### Best Practices (5)
AWS, API Security, Backend Performance, Frontend Performance, Code Review.

### Originals (Atlas-only)
- **AI + Cybersecurity** (flagship): LLM basics for hackers, prompt injection
  (direct/indirect), jailbreaks, RAG poisoning, agent hijacking/tool abuse,
  MCP trust, OWASP LLM Top 10, AI-assisted recon/exploitation, defensive AI.
- **AI for SOC / Defenders**: detection engineering with ML, AI triage.
- Existing 9 Atlas roadmaps upgraded to the rich schema.

Total: 95 + originals = **100+**.

## Build order

- **v24 — Foundation (me)**: new schema, per-roadmap files, Journey default,
  level filter + per-level progress, prereq rendering. Existing 9 roadmaps
  leveled.
- **v25 — Cyber core**: OmniSec 54 nodes imported (cyber-security rebuilt,
  bug-bounty deepened).
- **v26 — AI+Cyber flagship**: 2 original roadmaps, deepest content on the site.
- **v27+ — The 100**: crew build in batches of ~10, validated per batch.
- **Final — Polish**: dashboard tabs/search, cross-links, full live verification.

## Crew (30+, scale up if needed)

- 1 coordinator (fan-out, merge, deploys)
- ~28 content writers (3-4 roadmaps each, strict schema + template)
- 2 validators (schema check, link check, dedup, level sanity)
- Me: integration, final review, live verification before every announce.

## Quality gates (every batch)

- Schema: every topic has lv, time, d, >=1 resource.
- Original writing: no copied roadmap.sh text (coverage match is fine).
- Links: resources resolve (spot-checked per batch).
- Levels: every roadmap spans 1-3 unless genuinely single-level.
- Live: verified in browser with screenshots before announce, per standing rule.

## Standing rules honored

- Done = verified end-to-end live, never just committed.
- Asset versioning (?v=N) + SW cache bumps; name the CDN delay up front.
- No em dashes / AI-sounding prose in deliverables.
- Autonomous building + pushing; notify per version.
