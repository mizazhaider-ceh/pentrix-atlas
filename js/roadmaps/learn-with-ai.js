/* Atlas roadmap data: Learn with AI (learn-with-ai) */
ROADMAPS.push({
  "id": "learn-with-ai",
  "title": "Learn with AI",
  "icon": "🎓",
  "color": "#22c55e",
  "desc": "The AI-augmented learner's path: tutor-grade prompting, ruthless verification, deep practice, and staying independent.",
  "kind": "role",
  "root": {
    "t": "The AI-Augmented Learner",
    "d": "Use AI to learn faster and deeper, without becoming someone who can't think without it.",
    "children": [
      {
        "t": "Know Your Study Partner",
        "d": "What AI actually is, what it can't do, and how to set up a sane learning stack.",
        "lv": 1,
        "children": [
          {
            "t": "What LLMs Actually Are",
            "d": "Prediction machines, not understanding machines: why that distinction changes everything.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Next-token prediction: fluent text is a statistical achievement, not comprehension",
              "Training data boundaries: confident answers about things it never truly learned",
              "Why 'sounds right' is the most dangerous property of AI explanations"
            ],
            "do": [
              "Read a plain-language explainer of how large language models work",
              "Ask an AI a question you know deeply and catch where it bluffs",
              "Write one sentence you'll remember: what the AI is vs what it feels like"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Large language model (Wikipedia)", "https://en.wikipedia.org/wiki/Large_language_model"]
            ],
            "tip": "The AI doesn't know when it's wrong; it only knows what sounds likely. Your job is to be the part of the system that knows."
          },
          {
            "t": "Hallucinations: Expect Them",
            "d": "AI invents facts, citations, and studies with total confidence. Build the reflex to check.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "What hallucinations look like: plausible papers, fake quotes, wrong dates delivered smoothly",
              "When they're most likely: obscure topics, precise details, anything after the training cutoff",
              "The verification reflex: extraordinary claims get checked before they're believed"
            ],
            "do": [
              "Ask for five academic references on a niche topic and verify each one exists",
              "Ask the same factual question twice with different phrasing; compare",
              "Start a personal list of hallucinations you've caught; it trains skepticism"
            ],
            "tools": ["ChatGPT", "Claude", "Perplexity"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Never trust a statistic, study, or quote from AI until you've checked it. The confident tone is a feature of the generator, not evidence."
          },
          {
            "t": "Tool, Not Oracle",
            "d": "Calibrate your trust: AI is a brilliant intern, not an infallible professor.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "Calibrated trust: high for brainstorming and explaining, low for facts and citations",
              "The intern test: would you submit an intern's unsupervised work? Then don't submit AI's",
              "Trust is earned per task, not granted to the tool"
            ],
            "do": [
              "Rate your trust (1-5) for five task types: explaining, summarizing, fact-checking, coding, citing",
              "Deliberately use AI for a low-trust task and verify everything; feel the cost",
              "Write your personal trust map and revisit it monthly"
            ],
            "tools": [],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "Ask two questions of every AI answer: 'Is this true?' and 'Is this mine?' The first protects your knowledge, the second your integrity."
          },
          {
            "t": "Your Data, Your Privacy",
            "d": "What never goes into a chat box: personal details, unpublished work, and other people's data.",
            "lv": 1,
            "time": "~1h",
            "learn": [
              "What providers may do with your inputs: training, review, retention policies differ",
              "Never-paste list: passwords, personal IDs, unpublished research, someone else's private info",
              "Settings that matter: opt-outs, temporary chats, and enterprise/education privacy tiers"
            ],
            "do": [
              "Review the privacy settings of your main AI tool and tighten them",
              "Write your personal never-paste list and keep it visible",
              "Check whether your school offers a privacy-protected AI tier and switch if so"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "Assume everything you paste could be read by a stranger someday. If that thought stings, don't paste it."
          },
          {
            "t": "Assemble Your AI Study Stack",
            "d": "Pick one or two tools and learn them deeply instead of sampling everything.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The landscape: general chatbots, search-grounded AI, and subject-specific tutors",
              "Depth beats breadth: one tool's features mastered beats five tools skimmed",
              "Free vs paid: know what the paywall actually buys you for learning"
            ],
            "do": [
              "Try two general AI tools on the same study task and compare",
              "Pick your primary and learn its best features (projects, memory, voice, canvas)",
              "Set up one organized space (project/folder) per subject you're studying"
            ],
            "tools": ["ChatGPT", "Claude", "Perplexity", "NotebookLM"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Tool-hopping is procrastination in disguise. Commit to a stack for a full semester before judging it."
          }
        ]
      },
      {
        "t": "The Socratic Loop",
        "d": "Make the AI teach instead of tell: hints, questions, and teach-back loops.",
        "lv": 1,
        "children": [
          {
            "t": "Never Ask for the Answer First",
            "d": "Answers you didn't earn evaporate. Struggle first, then consult.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Desirable difficulty: effort during learning is what makes memory stick",
              "The 10-minute rule: wrestle with the problem solo before asking",
              "What to ask instead: hints, approaches, and 'where is my thinking wrong?'"
            ],
            "do": [
              "Take your next three homework problems: attempt each solo for 10 minutes first",
              "When stuck, ask for a hint, not the solution, and try again",
              "Notice which problems you actually remember a week later"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Mastering AI in Education without Addictions", "https://medium.com/@orrynbai.a/mastering-ai-in-education-without-addictions-59ea6ecb1e11"]
            ],
            "tip": "Reading a solution feels like learning the way watching a workout feels like exercise. The struggle is the workout."
          },
          {
            "t": "The Hint Ladder",
            "d": "Climb from nudge to explanation in stages instead of jumping to the full answer.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Ladder rungs: tiny nudge, relevant concept, worked similar example, full solution",
              "The prompt: 'give me the smallest hint that could unstick me'",
              "Stopping early: quit the ladder the moment you can proceed alone"
            ],
            "do": [
              "On a hard problem, ask for rung one only and attempt again",
              "Climb one rung at a time, solving as much as possible between rungs",
              "Track how far up the ladder you typically need; watch it shrink over weeks"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "A full solution teaches you one problem. A hint that unsticks you teaches you to solve the next ten."
          },
          {
            "t": "Teach-Back: Explain It to the AI",
            "d": "Explain the concept to the AI and make it find the holes in your understanding.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The Feynman technique: if you can't explain it simply, you don't know it",
              "The prompt: 'listen to my explanation and point out every gap or error'",
              "Why it works: producing an explanation forces organization that reading never does"
            ],
            "do": [
              "Pick a concept you 'kind of' know and explain it to the AI in your own words",
              "Have it grade your explanation and attack the weak points",
              "Re-explain until it can't find flaws"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "The AI is a tireless, non-judgmental student. Use it as one: teaching reveals the gaps that reading hides."
          },
          {
            "t": "AI as Quizmaster",
            "d": "Get quizzed one question at a time, adaptively, with explanations for every miss.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Retrieval practice: pulling answers from memory beats re-reading by miles",
              "Good quiz prompts: one question at a time, increasing difficulty, explain my mistakes",
              "The miss log: every wrong answer becomes tomorrow's first question"
            ],
            "do": [
              "Have the AI quiz you on one topic, one question at a time, for 15 minutes",
              "For each miss, ask for the explanation, then a follow-up question on the same point",
              "End each session by listing what you'll review next time"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "Re-reading notes feels productive and isn't. Being quizzed feels awful and works. Choose the awful one."
          },
          {
            "t": "Socratic Dialogue Mode",
            "d": "Flip the dynamic: the AI asks, you answer, it probes until you truly get it.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The setup prompt: 'don't explain; ask me questions until I understand X'",
              "Why questions beat lectures: they force you to construct the knowledge",
              "Handling stuck moments: it's okay to say 'I don't know', that's where learning starts"
            ],
            "do": [
              "Run a 15-minute Socratic session on a concept you find confusing",
              "Answer every question before reading on; no skipping",
              "Afterward, summarize what you learned in three sentences from memory"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "A good Socratic AI is slightly annoying: it never lets you hide behind 'yeah, I get it'. That's exactly what you need."
          }
        ]
      },
      {
        "t": "Prompting for Understanding",
        "d": "Level calibration, analogies, and structured outputs that turn answers into knowledge.",
        "lv": 2,
        "children": [
          {
            "t": "Calibrate the Level",
            "d": "Tell the AI exactly who it's teaching: your background, your course, your gaps.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "Level prompts: 'explain like I'm a second-year CS student who knows Python but not C'",
              "Why it matters: too-basic bores you, too-advanced loses you; both waste time",
              "Iterate the level: 'simpler' and 'more rigorous' are valid follow-ups"
            ],
            "do": [
              "Ask for the same explanation at three different levels and compare",
              "Write a reusable 'about me' study profile the AI can calibrate to",
              "Adjust the level mid-conversation when you feel lost or bored"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "The default AI explanation targets an imaginary average person. You are not average; tell it who you are."
          },
          {
            "t": "Demand Examples and Analogies",
            "d": "Abstract concepts stick when anchored to concrete examples and vivid analogies.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The prompt pattern: 'explain X, then give two examples and one analogy'",
              "Why analogies work: they attach new ideas to structures you already own",
              "Test the analogy: push it until it breaks; the breaking point teaches the limits"
            ],
            "do": [
              "Take your hardest current concept and demand examples plus an analogy",
              "Explain the analogy back in your own words to test it",
              "Collect your five best analogies in a personal glossary"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "If you can't rephrase the analogy yourself, you borrowed it, not learned it. Make every analogy yours."
          },
          {
            "t": "Ask Why, Then Why Again",
            "d": "Drill past surface explanations with repeated 'why' until you hit bedrock.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Surface vs deep: 'what' answers describe, 'why' answers explain mechanisms",
              "The five-whys technique applied to any concept you're studying",
              "Knowing when you've hit bedrock: fundamentals, axioms, or 'that's how the field defines it'"
            ],
            "do": [
              "Take one concept and ask 'why' five times in a row, following each answer",
              "Write the resulting causal chain in your notes",
              "Notice which whys the AI answers well and which expose its shallowness"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Exams test the third 'why', not the first. Drill there deliberately."
          },
          {
            "t": "Compare and Contrast Prompts",
            "d": "Learn concepts in pairs: differences carve sharper mental models than solo study.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why pairs work: contrast highlights the defining features of each concept",
              "The prompt: 'compare X and Y: definitions, use cases, and when to choose which'",
              "Table output: ask for structured comparisons you can review quickly"
            ],
            "do": [
              "Pick two confusable concepts from your course and get a structured comparison",
              "Add a third column: your own summary from memory",
              "Quiz yourself: given a scenario, which concept applies and why"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "Confusion lives between similar concepts. Study them side by side and the confusion has nowhere to hide."
          },
          {
            "t": "Turn Answers into Notes",
            "d": "Convert chat output into structured notes, tables, and flashcards you actually review.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Structured output prompts: summaries, comparison tables, flashcard sets, mind maps",
              "The real learning happens in the conversion: editing AI notes into your own words",
              "Review systems: spaced repetition beats re-reading every time"
            ],
            "do": [
              "After a study session, have the AI produce a one-page summary and 10 flashcards",
              "Rewrite the summary in your own words; keep only what survived",
              "Import the flashcards into Anki and review them on schedule"
            ],
            "tools": ["ChatGPT", "Claude", "Anki"],
            "res": [
              ["Mastering AI in Education without Addictions", "https://medium.com/@orrynbai.a/mastering-ai-in-education-without-addictions-59ea6ecb1e11"]
            ],
            "tip": "Unreviewed AI notes are a graveyard. The value isn't in generating notes; it's in the review loop afterward."
          }
        ]
      },
      {
        "t": "Verify Everything",
        "d": "Cross-checking, error-spotting drills, and knowing when to close the AI and open a book.",
        "lv": 2,
        "children": [
          {
            "t": "Cross-Check with Real Sources",
            "d": "Treat AI output as a lead, not a source: confirm against textbooks, docs, and papers.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The hierarchy: primary sources and official docs outrank any AI summary",
              "Efficient checking: verify the load-bearing claims, not every sentence",
              "Search-grounded AI as a middle step, with links you actually open"
            ],
            "do": [
              "Take three AI claims from your last study session and verify each against a real source",
              "Build a bookmarks folder of authoritative sources per subject",
              "Practice the 2-minute check: can you confirm or kill a claim that fast?"
            ],
            "tools": ["Perplexity", "Google Scholar"],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "Verify the claims your grade depends on. Everything else can stay provisional, but know which is which."
          },
          {
            "t": "Spot-the-Error Drills",
            "d": "Have the AI deliberately insert mistakes; your job is to catch them all.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Why it works: error detection is a higher-order skill than answer recognition",
              "The prompt: 'explain X but include two subtle errors; I'll find them'",
              "Debrief: for each planted error, articulate the correct principle"
            ],
            "do": [
              "Run a spot-the-error drill on a topic you know moderately well",
              "Score yourself: caught, missed, and false alarms",
              "Repeat monthly; your catch rate is a real measure of understanding"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "If you can't find planted errors, you don't understand the topic yet, you just recognize its vocabulary."
          },
          {
            "t": "Demand Citations and Reasoning",
            "d": "Make the AI show its work: sources, steps, and uncertainty flags.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Show-your-work prompts: 'explain step by step' and 'cite your sources'",
              "Uncertainty flags: ask 'which parts are you least sure about?'",
              "Citations still need checking: AI can hallucinate those too"
            ],
            "do": [
              "Ask for step-by-step reasoning on a multi-step problem and check each step",
              "Request sources, then actually open two of them",
              "Ask what it's unsure about; note how the answer changes your trust"
            ],
            "tools": ["ChatGPT", "Claude", "Perplexity"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "An answer with checked reasoning beats a correct answer you can't reproduce. Exams test the reasoning, not the chatbot."
          },
          {
            "t": "Compare Two Models' Answers",
            "d": "Run the same question through two different AIs and interrogate the disagreements.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Disagreement is information: where models differ is where understanding lives",
              "The adjudication prompt: 'here are two answers; reconcile them and tell me who's right'",
              "When they agree: still verify high-stakes claims; consensus isn't proof"
            ],
            "do": [
              "Ask two different AIs the same tricky question",
              "Map agreements vs disagreements explicitly",
              "Resolve one disagreement using a primary source"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Two AIs agreeing feels like truth. It's just correlated guessing; the source check is still on you."
          },
          {
            "t": "Know When NOT to Ask AI",
            "d": "Some learning needs books, labs, and humans. Recognize those moments.",
            "lv": 2,
            "time": "~1h",
            "learn": [
              "AI-weak zones: cutting-edge research, your institution's specific quirks, hands-on skills",
              "Human zones: mentorship, debate, and feedback on your thinking process",
              "The decision rule: if verification is harder than learning it directly, skip the AI"
            ],
            "do": [
              "List three topics this semester where you'll learn primarily without AI",
              "Find the human for one of them: a tutor, study group, or office hours",
              "Notice when AI answers feel thin; that's your signal to switch sources"
            ],
            "tools": [],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "The most advanced AI-learning skill is knowing when to close the tab. Restraint is a feature."
          }
        ]
      },
      {
        "t": "Deliberate Practice Systems",
        "d": "Spaced repetition, mock exams, and error journals: the machinery of real mastery.",
        "lv": 2,
        "children": [
          {
            "t": "Spaced Repetition with AI",
            "d": "Generate recall schedules and flashcard decks; let the algorithm handle the timing.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The forgetting curve: memories decay exponentially; timed recall flattens the curve",
              "AI's role: generate quality cards fast; the SRS handles scheduling",
              "Good cards: one fact per card, phrased as a question you'd actually be asked"
            ],
            "do": [
              "Have the AI generate 30 flashcards for your current topic",
              "Prune to the 20 that ask real questions; delete the trivia",
              "Do Anki reviews daily for two weeks and track retention"
            ],
            "tools": ["ChatGPT", "Claude", "Anki"],
            "res": [
              ["Mastering AI in Education without Addictions", "https://medium.com/@orrynbai.a/mastering-ai-in-education-without-addictions-59ea6ecb1e11"]
            ],
            "tip": "Generating 100 cards feels productive; reviewing 20 good ones daily is what actually works. Prune ruthlessly."
          },
          {
            "t": "Mock Exams and Oral Rehearsal",
            "d": "Simulate the real assessment: timed questions, then ruthless feedback.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Fidelity matters: match the real format, timing, and pressure as closely as possible",
              "Oral rehearsal: explain answers aloud; the AI plays examiner with follow-ups",
              "Post-mortem: every mock ends with a gap list, not a score"
            ],
            "do": [
              "Have the AI build a timed mock exam from your syllabus",
              "Take it under real conditions: no notes, no pausing",
              "Do an oral round: defend your answers against AI follow-up questions"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "A mock exam you take casually is entertainment. Same questions, real timer, real pressure: that's training."
          },
          {
            "t": "The Error Journal",
            "d": "Log every mistake, have AI quiz your weak spots, and watch patterns dissolve.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "What to log: the mistake, why you made it, and the correct principle",
              "AI's role: turn your journal into targeted quizzes on your weakest patterns",
              "Review cadence: weekly scan for repeating error types"
            ],
            "do": [
              "Start an error journal; log your next five mistakes with causes",
              "Feed the journal to the AI monthly: 'quiz me on my recurring errors'",
              "Track which error types disappear; celebrate the trend"
            ],
            "tools": ["ChatGPT", "Claude", "Notion"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Mistakes you don't log, you repeat. The journal turns embarrassment into data."
          },
          {
            "t": "Worked Examples, Then Solo",
            "d": "Study the AI's solution deeply, close it, and reproduce it from scratch.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "The protocol: study worked example, hide it, redo solo, compare",
              "Why hiding matters: recognition feels like recall until you test it",
              "Fading: reduce scaffolding over repetitions until it's fully unaided"
            ],
            "do": [
              "Get a worked solution, study it for 10 minutes, then close the tab",
              "Reproduce it from memory; compare and note what you missed",
              "Repeat until you can do it cold, then move to a variation"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "'I understand it when I see it' is the motto of the unprepared. Close the tab; that's the exam."
          },
          {
            "t": "Project-Based Learning with AI Coach",
            "d": "Build something real with AI as coach: you drive, it advises, the project proves it.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Why projects: they force integration of scattered knowledge into working skill",
              "The coach contract: AI suggests and reviews; you decide and implement",
              "Scope for learning: small enough to finish, hard enough to stretch"
            ],
            "do": [
              "Define a 2-week project that uses what you're learning",
              "Set the coach rule in writing: advice and review only, no direct solutions",
              "Demo the finished project to someone and explain your decisions"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "A finished project is worth a month of tutorials. The AI coaches; the building teaches."
          }
        ]
      },
      {
        "t": "Stay Independent",
        "d": "Anti-dependence training: prove regularly that the skill lives in you, not the tool.",
        "lv": 3,
        "children": [
          {
            "t": "The Turn-It-Off Test",
            "d": "Periodically do the task with zero AI and see what survived in your head.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The test: pick a routine AI-assisted task and do it completely unaided",
              "What failure tells you: exactly which sub-skills atrophied, so you can rebuild them",
              "Frequency: monthly for core skills, before every exam period"
            ],
            "do": [
              "Choose one task you normally do with AI and do it fully offline this week",
              "Note precisely where you got stuck; that's your training plan",
              "Rebuild the weakest sub-skill with deliberate unaided practice"
            ],
            "tools": [],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "If turning off the AI feels like losing a sense, that's data, not failure. Rebuild the sense."
          },
          {
            "t": "AI Detox Days",
            "d": "Schedule regular days of fully analog learning: books, paper, discussion.",
            "lv": 3,
            "time": "~1d",
            "learn": [
              "Why scheduled detox works: it tests independence before exams do",
              "Analog methods that shine: textbooks for depth, paper for problem-solving, peers for debate",
              "Compare: track retention and speed on detox days vs AI days"
            ],
            "do": [
              "Declare one detox day this week: no AI for any learning task",
              "Study from books and notes; solve problems on paper",
              "Journal the comparison: what was harder, what was deeper?"
            ],
            "tools": [],
            "res": [
              ["Mastering AI in Education without Addictions", "https://medium.com/@orrynbai.a/mastering-ai-in-education-without-addictions-59ea6ecb1e11"]
            ],
            "tip": "Detox days aren't anti-AI; they're calibration. You can't steer a tool you've merged with."
          },
          {
            "t": "Metacognitive Journaling",
            "d": "After each AI session, write what YOU learned and where the AI failed you.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Metacognition: thinking about your own thinking is the master skill",
              "The two questions: 'what did I learn?' and 'where was the AI wrong or shallow?'",
              "Why writing beats thinking: the journal makes fuzzy self-assessment concrete"
            ],
            "do": [
              "After your next three AI sessions, write a 5-minute journal entry",
              "Review a month of entries: which sessions actually taught you something?",
              "Adjust your AI habits based on the pattern, not on vibes"
            ],
            "tools": ["Notion"],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "The journal answers the question grades can't: did the AI session make you smarter, or just make the task disappear?"
          },
          {
            "t": "Calibrate Difficulty Up",
            "d": "If AI makes everything easy, raise the bar until you're stretching again.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The comfort trap: AI assistance silently lowers the difficulty of everything",
              "Recalibration: attempt harder problems, tighter time limits, less scaffolding",
              "The growth zone: tasks where you succeed about 70% of the time unaided"
            ],
            "do": [
              "Rate last week's study difficulty honestly; if it was all easy, level up",
              "Attempt the next problem set with reduced AI help and a timer",
              "Find your 70% zone and live there"
            ],
            "tools": [],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "Easy with AI is not the same as learned. If you're never stuck, you're not training, you're touring."
          },
          {
            "t": "Build the Muscle, Keep the Tool",
            "d": "The endgame: skills first, automation second. AI multiplies ability; it can't create it.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "The multiplication rule: AI times zero skill is still zero",
              "Sequencing: learn the skill unaided to competence, then add AI leverage",
              "The professional standard: be the person who could do it without the tool"
            ],
            "do": [
              "Pick your most AI-dependent skill and map a 4-week rebuild plan",
              "Practice unaided until competent, then reintroduce AI as leverage",
              "Define your 'could do it on a desert island' skill list and work toward it"
            ],
            "tools": [],
            "res": [
              ["AI Can Make You Smarter", "https://aitechtonic.com/ai-can-make-you-smarter/"]
            ],
            "tip": "The goal was never to need AI less out of pride; it's to need it less because the skill is genuinely yours."
          }
        ]
      },
      {
        "t": "Integrity and Originality",
        "d": "Use AI ethically: know the rules, declare your use, and keep the work unmistakably yours.",
        "lv": 3,
        "children": [
          {
            "t": "Know Your Institution's AI Policy",
            "d": "Read the actual rules: what's allowed, what must be declared, what counts as misconduct.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Policies vary wildly: course-level rules often differ from university-level ones",
              "The key distinctions: allowed assistance vs unauthorized completion vs plagiarism",
              "When in doubt: ask the instructor in writing before the deadline, not after"
            ],
            "do": [
              "Read your institution's AI policy and your three strictest course syllabi",
              "Write a one-page personal summary of what's allowed where",
              "Email one instructor a clarification question about a gray area"
            ],
            "tools": [],
            "res": [
              ["Is this AI tutor safe and reliable?", "https://studydog.co.uk/blog/are-ai-tutors-safe-for-a-level-revision/"]
            ],
            "tip": "'Everyone does it' is not a policy. Read the actual document; it's usually shorter than you fear."
          },
          {
            "t": "Declare Your AI Use",
            "d": "Make transparency a habit: state what the AI did and what you did.",
            "lv": 3,
            "time": "~1h",
            "learn": [
              "Why declaration helps you: it forces clarity about your actual contribution",
              "What to declare: tool used, what it produced, how you verified and transformed it",
              "The habit: a brief AI-use note becomes as routine as a bibliography"
            ],
            "do": [
              "Write an AI-use statement for your last assignment, even if not required",
              "Develop a personal template: tool, task, verification, transformation",
              "Use it proactively on the next three pieces of work"
            ],
            "tools": [],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "Declaring AI use isn't confessing; it's documenting. What's named openly can be evaluated fairly."
          },
          {
            "t": "Remix, Don't Copy",
            "d": "AI output is raw material: transform it until it carries your thinking.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "The remix test: could someone tell this started as AI output? If yes, keep working",
              "Transformation moves: restructure, add your examples, argue with it, extend it",
              "Why it matters for learning: transformation is where understanding gets built"
            ],
            "do": [
              "Take an AI draft and rewrite it until every paragraph contains your own reasoning",
              "Add one original example and one counterargument the AI didn't provide",
              "Compare before and after; the after should be unmistakably yours"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["Mastering AI in Education without Addictions", "https://medium.com/@orrynbai.a/mastering-ai-in-education-without-addictions-59ea6ecb1e11"]
            ],
            "tip": "If you can't point to what's yours in the final work, you didn't write it; you laundered it."
          },
          {
            "t": "Keep Your Voice",
            "d": "Edit AI-assisted writing until it sounds like you on your best day, not a chatbot.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "AI tells: uniform sentence length, hedged transitions, generic examples",
              "Voice preservation: your examples, your rhythms, your opinions",
              "The read-aloud test: if it doesn't sound like you talking, rewrite it"
            ],
            "do": [
              "Read an AI-assisted paragraph aloud; mark every sentence that doesn't sound like you",
              "Rewrite those sentences with your own phrasing and examples",
              "Build a personal style checklist from the patterns you keep fixing"
            ],
            "tools": [],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "Your voice is your fingerprint as a thinker. Outsourcing it is the one AI shortcut with no recovery."
          },
          {
            "t": "Teach Someone Else",
            "d": "The ultimate proof of AI-augmented learning: mentor a peer using everything you've learned.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Why teaching is the final test: it exposes every gap AI helped you paper over",
              "Designing a study session for someone else forces you to organize knowledge",
              "AI's role in your teaching: prep material, anticipate questions, never replace you"
            ],
            "do": [
              "Prepare a 30-minute tutoring session on a topic you learned with AI",
              "Use AI to anticipate hard questions, then answer them live unaided",
              "Get feedback: what did your student actually understand?"
            ],
            "tools": ["ChatGPT", "Claude"],
            "res": [
              ["AI literacy as habit, not bolt-on", "https://www.timeshighereducation.com/campus/ai-literacy-habit-not-bolton"]
            ],
            "tip": "You don't truly know it until someone else learns it from you. Teaching is the exam AI can't take for you.",
            "badge": "PROJECT"
          }
        ]
      }
    ]
  }
});
