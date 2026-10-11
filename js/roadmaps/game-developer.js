/* Atlas roadmap data: Game Developer (game-developer) */
ROADMAPS.push({
  "id": "game-developer",
  "title": "Game Developer",
  "icon": "🎮",
  "color": "#355070",
  "desc": "From your first playable prototype to a shipped title: engines, gameplay programming, game math and physics, graphics, audio, and everything it takes to put a game into players' hands.",
  "kind": "role",
  "root": {
    "t": "Game Development",
    "d": "Design it, code it, make it look and sound great, then ship it: the complete path to becoming a game developer.",
    "children": [
      {
        "t": "Foundations: Thinking Like a Game Developer",
        "d": "How games run, how to pick your tools, and how to finish your first tiny game instead of dreaming about a huge one.",
        "lv": 1,
        "children": [
          {
            "t": "How Games Actually Run: The Game Loop",
            "d": "Every game is a loop of input, update, and render. Understand it and half of game programming clicks into place.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The classic loop: process input, update state, render, repeat",
              "Fixed vs variable timestep and why physics needs a fixed step",
              "Frame budgets: 16.6ms per frame at 60fps and where that time goes"
            ],
            "do": [
              "Write a tiny loop in any language that prints updates 60 times per second",
              "Change the update rate and watch movement speed change when you forget delta time",
              "Fix it with delta time and confirm the motion is frame-rate independent"
            ],
            "tools": ["Any programming language", "Godot", "Unity"],
            "res": [
              ["Game Programming Patterns: Game Loop", "https://gameprogrammingpatterns.com/game-loop.html"],
              ["Fix Your Timestep", "https://gafferongames.com/post/fix_your_timestep/"]
            ],
            "tip": "Beginners multiply movement by a magic number instead of delta time, then wonder why the game plays differently on every machine. Delta time is not optional polish, it is correctness."
          },
          {
            "t": "Picking Your First Engine",
            "d": "Unity 6, Godot 4, or Unreal Engine 5: what each one is actually good at in 2026, and how to choose without agonizing.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Unity 6: the industry standard for 3D and mobile, C#, huge asset store",
              "Godot 4: free and open source (MIT), native 2D pipeline, GDScript or C#",
              "Unreal Engine 5: best-in-class 3D rendering (Nanite, Lumen), C++ and Blueprints",
              "The 2D vs 3D decision matters more than the engine decision"
            ],
            "do": [
              "Install Godot 4 and Unity 6 and open the sample project in each",
              "List your dream first game and note which engine features it actually needs",
              "Commit to one engine for your next three projects and write down why"
            ],
            "tools": ["Godot", "Unity Hub", "Unreal Engine"],
            "res": [
              ["Godot Engine", "https://godotengine.org"],
              ["Unity", "https://unity.com"]
            ],
            "tip": "Engine hopping is the number one beginner time sink. Every engine can make a great first game. Pick one, finish three small games in it, and only then reconsider."
          },
          {
            "t": "Version Control for Games",
            "d": "Game projects are full of huge binary files. Set up Git plus LFS once and never lose work to a corrupted scene again.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Why plain Git chokes on game assets and what Git LFS does about it",
              "Which files to track with LFS: textures, audio, models, builds",
              "What never to commit: Library folders, build outputs, local settings"
            ],
            "do": [
              "Run `git init` in a fresh Godot or Unity project folder",
              "Set up LFS tracking with `git lfs track \"*.png\" \"*.wav\" \"*.fbx\"`",
              "Add a proper engine .gitignore, commit, and push to a remote"
            ],
            "tools": ["Git", "Git LFS", "GitHub"],
            "res": [
              ["Git", "https://git-scm.com"],
              ["Git LFS", "https://git-lfs.com"]
            ],
            "tip": "Committing the Unity Library folder or Godot .godot folder bloats your repo by gigabytes and causes merge nightmares. The .gitignore goes in before the first commit, not after the damage."
          },
          {
            "t": "Programming for Games: C# or GDScript",
            "d": "The programming fundamentals that games actually use: variables, loops, functions, and events, learned in a game context.",
            "lv": 1,
            "time": "~1w",
            "learn": [
              "Core syntax: variables, conditionals, loops, functions in C# or GDScript",
              "How game scripts attach to objects: Unity MonoBehaviours vs Godot nodes and scripts",
              "Events and signals: how game objects talk to each other without tight coupling"
            ],
            "do": [
              "Write a script that moves a character with WASD/arrow keys",
              "Add a signal/event that fires when the player collects a coin",
              "Refactor the movement code into a reusable function with parameters"
            ],
            "tools": ["C#", "GDScript"],
            "res": [
              ["C# Documentation", "https://learn.microsoft.com/en-us/dotnet/csharp/"],
              ["Godot Docs", "https://docs.godotengine.org"]
            ],
            "tip": "Tutorial watchers get stuck because they copy code without typing it. Type every line yourself, break it on purpose, then fix it. That debugging loop is where the learning happens."
          },
          {
            "t": "Your First Game in a Weekend",
            "d": "Scope brutally small, finish completely: Pong, Breakout, or Flappy-style. Shipping beats dreaming.",
            "lv": 1,
            "time": "~2d",
            "learn": [
              "Scoping: a finished tiny game teaches more than an unfinished epic",
              "The core loop of a simple game: start, play, win/lose, restart",
              "What done looks like: menu, gameplay, game over screen, sound, build"
            ],
            "do": [
              "Build a complete Pong or Breakout clone in your chosen engine",
              "Add a start menu, score display, and game-over/restart flow",
              "Export a playable build and share it with one friend for feedback"
            ],
            "tools": ["Godot", "Unity", "itch.io"],
            "res": [
              ["itch.io Game Jams", "https://itch.io/jams"]
            ],
            "tip": "Your first game will be bad and that is the point. The developers you admire have dozens of bad finished games behind their good ones. Finish, then start the next one.",
            "badge": "PROJECT"
          }
        ]
      },
      {
        "t": "Your Engine in Depth",
        "d": "Master the editor, the scene system, scripting gameplay, input, and UI until the engine feels like an extension of your hands.",
        "lv": 1,
        "children": [
          {
            "t": "The Unity 6 Editor: Tour and Setup",
            "d": "Scenes, Hierarchy, Inspector, Project window, and the Package Manager: where everything lives in Unity 6.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Editor layout: Scene view, Game view, Hierarchy, Inspector, Project",
              "GameObjects and components: everything in Unity is composition",
              "Package Manager: installing only the packages your project needs"
            ],
            "do": [
              "Create a 3D sample project and rearrange the editor layout to taste",
              "Build a small scene from primitives: ground plane, cubes, a light, a camera",
              "Install the Input System package and read its default action map"
            ],
            "tools": ["Unity 6", "Unity Hub"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "New Unity users install every package that looks interesting and inherit the bugs of all of them. Start with the minimum: your render pipeline, Input System, nothing else until you feel the need."
          },
          {
            "t": "The Godot 4 Editor: Tour and Setup",
            "d": "Nodes, scenes, and docks: Godot's everything-is-a-node philosophy and the editor built around it.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "The node and scene system: scenes are reusable node trees",
              "Editor docks: Scene, Inspector, FileSystem, and the Output panel",
              "GDScript editor features: autocomplete, warnings, and the remote scene debugger"
            ],
            "do": [
              "Create a 2D scene with a player node, a sprite, and a CollisionShape2D",
              "Instance that scene three times and change a property on one instance",
              "Run the project with the remote debugger and inspect the live scene tree"
            ],
            "tools": ["Godot 4"],
            "res": [
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Godot 3 tutorials still dominate search results and their API does not work in Godot 4. Always check the tutorial version first; mismatched API is the top reason beginners quit."
          },
          {
            "t": "Scenes, Nodes, and Prefabs",
            "d": "Composition over inheritance: build games from reusable scene/prefab pieces instead of giant scripts.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Prefabs (Unity) and packed scenes (Godot): build once, instance everywhere",
              "Scene composition: enemies, pickups, and UI built from small parts",
              "Overrides: changing one instance without breaking the template"
            ],
            "do": [
              "Turn your player into a prefab/packed scene and spawn it from code",
              "Build an enemy from a prefab with swappable sprite and speed values",
              "Break a prefab connection on purpose, then reconnect it and note what is lost"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Duplicating objects in the scene instead of using prefabs means fixing the same bug twenty times. If you place it twice, it should be a prefab."
          },
          {
            "t": "Scripting Gameplay: Movement and Physics",
            "d": "Character controllers, rigidbodies, forces, and kinematic movement: how things actually move in games.",
            "lv": 1,
            "time": "~6h",
            "learn": [
              "Kinematic vs physics-driven movement and when each is right",
              "CharacterBody (Godot) and CharacterController (Unity): purpose-built movers",
              "Forces, impulses, drag, and why you rarely set velocity directly on physics bodies"
            ],
            "do": [
              "Implement a platformer controller with run, jump, coyote time, and jump buffering",
              "Make a physics ball that bounces with different bounciness materials",
              "Tune gravity and jump force until the jump feels good, then write down the numbers"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Coyote time (a few frames of grace after leaving a ledge) and jump buffering (remembering a pressed jump) are tiny code that make controls feel ten times better. Players feel these even if they cannot name them."
          },
          {
            "t": "Input: Keyboards, Gamepads, and Touch",
            "d": "Abstract actions from devices: move, jump, and attack should not care whether they came from a key or a button.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Action-based input: Unity Input System actions and Godot InputMap",
              "Deadzones and sensitivity for analog sticks",
              "Rebinding at runtime and saving player preferences"
            ],
            "do": [
              "Define move/jump/attack actions and bind them to both keyboard and gamepad",
              "Add an in-game rebinding screen that persists to a config file",
              "Test every action with keyboard only, then gamepad only"
            ],
            "tools": ["Unity Input System", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Hardcoding KeyCode.Space everywhere means rewriting input for every platform later. Actions are a small upfront cost that pays off the moment you support a second device."
          },
          {
            "t": "Game UI: Menus, HUDs, and Feedback",
            "d": "Main menus, pause screens, health bars, and damage numbers: UI is gameplay, not decoration.",
            "lv": 1,
            "time": "~5h",
            "learn": [
              "UI layout: anchors, containers, and resolution-independent design",
              "HUD patterns: health, ammo, objectives, and minimaps",
              "Menu flow: title, settings, pause, and how scenes transition between them"
            ],
            "do": [
              "Build a main menu with Play, Settings (volume slider), and Quit",
              "Create a HUD with health bar and score that updates from gameplay events",
              "Implement a pause menu that actually pauses the game loop"
            ],
            "tools": ["Unity UI Toolkit", "Godot Control nodes"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "UI that only works at your monitor's resolution will break on the first player's laptop. Test at odd aspect ratios early: anchors and containers exist precisely for this."
          }
        ]
      },
      {
        "t": "Game Mathematics and Physics",
        "d": "The math games are made of: vectors, transforms, rotations, collision, and simulation you can trust.",
        "lv": 2,
        "children": [
          {
            "t": "Vectors: The Language of Game Worlds",
            "d": "Positions, directions, velocities: nearly everything in a game is a vector, and vector math is how you push it around.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Vector addition, subtraction, scaling, and what each means visually",
              "Dot product: angles, facing checks, and projections",
              "Cross product: normals, torque direction, and perpendicular vectors"
            ],
            "do": [
              "Implement enemy knockback using vector subtraction and normalization",
              "Use the dot product to check whether the player is behind an enemy",
              "Visualize vectors with debug lines until the math matches what you see"
            ],
            "tools": ["Godot", "Unity", "Desmos"],
            "res": [
              ["Desmos Graphing Calculator", "https://www.desmos.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Forgetting to normalize a direction vector before scaling it by speed is the classic bug: movement speed silently depends on distance. Normalize first, scale second, always."
          },
          {
            "t": "Matrices and Transforms",
            "d": "How objects sit inside worlds: translation, rotation, scale, and the parent-child hierarchies built from them.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "TRS matrices: what translation, rotation, and scale matrices do",
              "Transform hierarchies: why a child moves when its parent moves",
              "Local vs world space and converting between them"
            ],
            "do": [
              "Parent a sword to a character's hand and watch it follow automatically",
              "Convert a mouse click from screen space to world space and spawn an object there",
              "Break a hierarchy on purpose (scale a parent non-uniformly) and observe the skew"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Non-uniform scale on a parent warps its children's rotations in confusing ways. Keep parent scales at 1 whenever you can and scale the leaf objects instead."
          },
          {
            "t": "Rotations: Euler Angles and Quaternions",
            "d": "Why Euler angles break (gimbal lock), what quaternions actually are, and how to rotate things without tears.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Euler angles: intuitive, and exactly why they cause gimbal lock",
              "Quaternions as an idea: rotation as axis plus angle, no lock",
              "Slerp vs lerp for smooth rotation interpolation"
            ],
            "do": [
              "Rotate an object with Euler angles until you hit gimbal lock",
              "Rewrite the rotation with quaternions (or engine helpers) and compare",
              "Make a turret smoothly track the player using slerp"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "You almost never need to touch quaternion components directly. Engine helpers like LookAt and Slerp exist so you can think in directions while the math stays correct underneath."
          },
          {
            "t": "Collision Detection from Scratch",
            "d": "Build the core yourself once: AABB, circle tests, broad phase vs narrow phase, so engine physics stops being magic.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "AABB and circle collision tests and why they are cheap",
              "Broad phase vs narrow phase: culling pairs before testing them",
              "The Separating Axis Theorem (SAT) idea for convex polygons"
            ],
            "do": [
              "Write AABB collision for axis-aligned boxes in a toy project",
              "Add a spatial grid broad phase and measure how many pair tests it saves",
              "Implement circle-vs-polygon and watch tunneling happen at high speeds"
            ],
            "tools": ["Any programming language", "Box2D"],
            "res": [
              ["Box2D", "https://box2d.org"]
            ],
            "tip": "Fast small objects tunnel through thin walls because collision is checked per frame, not continuously. That is what continuous collision detection (CCD) exists for: turn it on for bullets, not for everything."
          },
          {
            "t": "Physics Engines: Rigidbodies Done Right",
            "d": "Mass, drag, joints, triggers, and layers: using a real physics engine without fighting it.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Rigidbody properties: mass, drag, angular drag, and what they feel like",
              "Joints: hinges, springs, and sliders for doors, ropes, and vehicles",
              "Triggers vs colliders, and physics layers for selective collision"
            ],
            "do": [
              "Build a rope bridge with hinge joints and tune it until it looks right",
              "Set up layers so enemies collide with the world but not each other",
              "Use a trigger zone to detect the player entering a room and spawn enemies"
            ],
            "tools": ["Unity Physics", "Godot Physics", "Box2D"],
            "res": [
              ["Box2D", "https://box2d.org"],
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "Moving physics bodies by setting their position directly (instead of forces or MovePosition) breaks collision response. Teleporting a rigidbody is a cheat code that the physics engine will punish with tunneling and jitter."
          },
          {
            "t": "Deterministic Simulation and Fixed Timesteps",
            "d": "Run gameplay logic on a fixed clock so replays, physics, and future netcode all agree on what happened.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why gameplay simulation must not depend on frame rate",
              "The accumulator pattern: fixed steps inside a variable frame loop",
              "Determinism: same inputs plus same steps equals same result, every time"
            ],
            "do": [
              "Refactor a movement script to run on a fixed 60Hz step with an accumulator",
              "Record inputs for 10 seconds, replay them, and verify identical outcomes",
              "Find one source of nondeterminism (e.g. frame-time usage) and remove it"
            ],
            "tools": ["Godot", "Unity"],
            "res": [
              ["Fix Your Timestep", "https://gafferongames.com/post/fix_your_timestep/"]
            ],
            "tip": "Floating point math is deterministic on the same machine and build, but not guaranteed across platforms. If you ever need cross-platform determinism (rollback netcode), plan for fixed-point or integer math early."
          }
        ]
      },
      {
        "t": "Graphics: Making It Look Great",
        "d": "From the rendering pipeline to shaders, lighting, and performance: how games produce their visuals.",
        "lv": 2,
        "children": [
          {
            "t": "The Rendering Pipeline, Plainly",
            "d": "Vertices in, pixels out: what the GPU actually does each frame and where your frame time goes.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Pipeline stages: vertex processing, rasterization, fragment shading",
              "Draw calls: why 1000 small draws are slower than 10 big ones",
              "CPU vs GPU bottlenecks and how to tell which one you have"
            ],
            "do": [
              "Open the frame debugger and count draw calls in a simple scene",
              "Double the object count and watch which metric moves: draw calls or triangles",
              "Write down whether your test scene is CPU-bound or GPU-bound and why"
            ],
            "tools": ["Unity Frame Debugger", "Godot", "RenderDoc"],
            "res": [
              ["Learn OpenGL", "https://learnopengl.com"]
            ],
            "tip": "Beginners blame the GPU for slowdowns that are actually the CPU submitting thousands of draw calls. Profile before optimizing: the frame debugger tells you the truth in seconds."
          },
          {
            "t": "Shaders: Your First Custom Material",
            "d": "Vertex and fragment shaders without fear: write one from scratch, then use node-based tools for speed.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "What vertex and fragment shaders each control",
              "Uniforms, varyings, and how data flows into a shader",
              "Node-based shader editors vs handwritten shader code"
            ],
            "do": [
              "Write a fragment shader that colors pixels by their UV coordinates",
              "Recreate it in Shader Graph (Unity) or a VisualShader (Godot)",
              "Build a dissolve effect driven by a noise texture and a cutoff uniform"
            ],
            "tools": ["Shader Graph", "HLSL", "GLSL", "Godot VisualShaders"],
            "res": [
              ["The Book of Shaders", "https://thebookofshaders.com"]
            ],
            "tip": "Doing heavy math per-pixel when per-vertex would do is the classic shader perf bug. Move what you can to the vertex shader; interpolate the rest."
          },
          {
            "t": "Lighting and Shadows",
            "d": "Light types, baked vs realtime lighting, shadow maps, and the global illumination options in modern engines.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Directional, point, and spot lights and their real costs",
              "Baked lighting vs realtime: quality, memory, and iteration trade-offs",
              "Shadow mapping basics: acne, bias, and cascade splits"
            ],
            "do": [
              "Light one scene three ways: fully realtime, fully baked, and mixed",
              "Break shadows on purpose (wrong bias) then fix them",
              "Compare a day and night version of the same level using only lighting"
            ],
            "tools": ["Unity", "Godot", "Unreal Engine"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Every realtime shadow-casting light multiplies rendering cost. Decide which lights actually need shadows; most decorative lights do not."
          },
          {
            "t": "Textures, Materials, and PBR",
            "d": "Albedo, normal, roughness, metallic: the physically based workflow every modern engine expects.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "PBR maps: what albedo, normal, roughness, metallic, and AO each describe",
              "UV mapping and texel density: why textures stretch or look blurry",
              "Texture compression and mipmaps: memory vs quality"
            ],
            "do": [
              "Texture a simple prop with a full PBR set and inspect it under different lights",
              "Break UVs on purpose, observe the stretching, then fix the unwrap",
              "Compare memory usage with and without mipmaps on a distant object"
            ],
            "tools": ["Blender", "Substance Painter", "Unity", "Godot"],
            "res": [
              ["Blender", "https://www.blender.org"]
            ],
            "tip": "A 4K texture on a background prop nobody looks at is pure waste. Match texture resolution to on-screen size: texel density is a budget, not a bragging right."
          },
          {
            "t": "Post-Processing and VFX",
            "d": "Bloom, color grading, and particle systems: the final 10 percent that makes a game look finished.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Post-processing stack: bloom, vignette, color grading, ambient occlusion",
              "Particle systems: emitters, lifetimes, and GPU vs CPU particles",
              "When effects help readability vs when they are visual noise"
            ],
            "do": [
              "Add a subtle post-processing profile: slight bloom, vignette, color grade",
              "Build an explosion, a magic sparkle, and a dust puff with particles",
              "Turn every effect off and on to judge what each one actually adds"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Stacking every post effect at full strength is how games end up looking like a blurry dream. Start subtle; if you cannot tell whether an effect is on, that is usually the right amount."
          },
          {
            "t": "Graphics Performance: Profiling Draw Calls",
            "d": "Batching, LODs, occlusion culling, and atlases: the practical toolkit for holding 60fps.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Static and dynamic batching: merging draws the engine can do for you",
              "Level of detail (LOD): swapping models by distance",
              "Occlusion and frustum culling: not drawing what cannot be seen"
            ],
            "do": [
              "Profile a heavy scene, find the top 3 costs, and fix them one by one",
              "Set up LOD groups on a detailed model and verify the swaps at distance",
              "Atlas a set of UI sprites and measure the draw call reduction"
            ],
            "tools": ["Unity Profiler", "Godot Debugger", "RenderDoc"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "Optimizing before profiling is guessing. The profiler almost always points at something different from what you expected, usually draw calls or a single expensive script."
          }
        ]
      },
      {
        "t": "Game AI and Audio",
        "d": "Enemies that feel smart, navigation that works, and sound that sells every action.",
        "lv": 2,
        "children": [
          {
            "t": "Decision Making: State Machines and Behavior Trees",
            "d": "Patrol, chase, attack, flee: the classic AI architectures behind believable enemies.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Finite state machines: states, transitions, and when they get messy",
              "Behavior trees: selectors, sequences, and composable decisions",
              "Utility AI in one paragraph: scoring actions instead of branching"
            ],
            "do": [
              "Build a guard AI with patrol, suspicious, and chase states",
              "Convert it to a behavior tree and compare readability",
              "Add a flee state triggered by low health and test the transitions"
            ],
            "tools": ["Unity", "Godot"],
            "res": [
              ["Godot Documentation", "https://docs.godotengine.org"],
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "AI that is optimal is usually not fun. Slightly dumb, readable enemies that telegraph their intentions feel smarter to players than perfect ones."
          },
          {
            "t": "Pathfinding: A* and NavMeshes",
            "d": "Getting characters from A to B without walking through walls: A* on grids and baked navigation meshes.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "A* on a grid: open/closed sets, heuristics, and what makes it optimal",
              "NavMeshes: baking walkable surfaces and querying paths on them",
              "Steering behaviors: seek, flee, and arrival for smooth movement"
            ],
            "do": [
              "Implement A* on a tile grid with obstacles and visualize the explored nodes",
              "Bake a NavMesh in your engine and path an agent around dynamic obstacles",
              "Add steering so agents slow down as they arrive instead of stopping dead"
            ],
            "tools": ["Unity NavMesh", "Godot NavigationServer"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Pathfinding every frame for every agent is a classic perf killer. Recompute paths on a timer or when the target moves significantly, not per frame."
          },
          {
            "t": "Game Audio: Music, SFX, and Mixing",
            "d": "Audio buses, adaptive music, and mixing: sound is half the experience and most beginners treat it as an afterthought.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Audio buses: master, music, SFX channels and independent volume control",
              "Adaptive music: layers and transitions that react to gameplay",
              "Mixing basics: ducking, limiting, and why everything cannot be loud"
            ],
            "do": [
              "Set up buses and wire every sound through the right channel",
              "Build an adaptive track with calm and combat layers that crossfade",
              "Add footstep sounds with randomized pitch so they never sound robotic"
            ],
            "tools": ["FMOD", "Wwise", "Godot AudioServer"],
            "res": [
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "Playing the exact same sound sample every time trains players to notice the repetition. Randomize pitch and pick from 3 to 5 variations; it is a five-minute change with a huge payoff."
          },
          {
            "t": "Game Feel: Juice, Polish, and Feedback",
            "d": "Screenshake, hitstop, particles, and tweening: the layer of feedback that makes actions feel powerful.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "The juice toolkit: screenshake, hitstop, squash and stretch, particles",
              "Tweening: easing functions and why linear motion looks dead",
              "Feedback design: every player action deserves a visible and audible response"
            ],
            "do": [
              "Add screenshake, hitstop, and particles to a basic attack",
              "Replace linear UI movement with eased tweens and compare the feel",
              "Juice one mechanic fully, then remove half and find the minimal set that still feels good"
            ],
            "tools": ["Unity", "Godot", "DOTween"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "Juice without restraint becomes noise. The rule: amplify the important moments (hits, pickups, deaths) and keep ambient motion quiet, or nothing feels impactful."
          }
        ]
      },
      {
        "t": "Art Pipeline and Content",
        "d": "Getting art into the engine correctly: 2D sprites, 3D models, animation, and working with artists.",
        "lv": 2,
        "children": [
          {
            "t": "2D Art Pipeline: Sprites and Tilemaps",
            "d": "From pixels to playable: sprite import settings, atlases, tilemaps, and 2D animation.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Sprite import: pixels-per-unit, filtering, and compression for 2D",
              "Tilemaps and tilesets: building levels from reusable tiles",
              "2D animation: sprite sheets, skeletal 2D, and animation players"
            ],
            "do": [
              "Import a sprite sheet, slice it, and build a walk cycle",
              "Paint a small level with a tilemap including autotiling rules",
              "Set up an AnimationPlayer/Animator state machine for idle, run, jump"
            ],
            "tools": ["Aseprite", "Godot", "Unity"],
            "res": [
              ["Godot Documentation", "https://docs.godotengine.org"],
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "Wrong pixels-per-unit or filtering settings make pixel art blurry or shimmery. For pixel art: point filtering, no compression, integer PPU. Set it once per project, not per sprite."
          },
          {
            "t": "3D Asset Pipeline: Models, Rigs, Animation",
            "d": "FBX and glTF, rigging basics, retargeting, and animation state machines: the 3D content chain end to end.",
            "lv": 2,
            "time": "~1w",
            "learn": [
              "Model formats: FBX vs glTF and what survives each export",
              "Rigging basics: armatures, skinning weights, and why they matter",
              "Animation retargeting and state machines: blending locomotion"
            ],
            "do": [
              "Model and rig a simple character in Blender and export as glTF",
              "Import it, fix the scale and facing, and play an idle animation",
              "Download a Mixamo character, retarget its animations to your rig"
            ],
            "tools": ["Blender", "Mixamo", "Unity", "Godot"],
            "res": [
              ["Blender", "https://www.blender.org"],
              ["Mixamo", "https://www.mixamo.com"]
            ],
            "tip": "Scale and facing mismatches between DCC tools and engines cause 90 percent of import pain. Agree on units (meters) and forward axis once, and verify with a test cube before importing real assets."
          },
          {
            "t": "Working with Artists and Asset Stores",
            "d": "Briefs, style guides, and licensing: getting art from other humans (or stores) without chaos.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Writing art briefs: reference boards, constraints, and deliverable specs",
              "Style guides: palette, proportions, and rules that keep art coherent",
              "Asset store licensing: what you can and cannot do with bought assets"
            ],
            "do": [
              "Write a one-page brief for a character with references and specs",
              "Build a style guide page: palette swatches plus three do/don't examples",
              "Read the license of one Asset Store pack and note its redistribution limits"
            ],
            "tools": ["Unity Asset Store", "Godot Asset Library", "PureRef"],
            "res": [
              ["Unity Asset Store", "https://assetstore.unity.com"]
            ],
            "tip": "Bought assets from five different artists clash instantly. A style guide plus a color-grading pass is what makes mixed-source art look like one game."
          }
        ]
      },
      {
        "t": "Shipping: From Build to Launch",
        "d": "Builds, optimization, playtesting, publishing, and life after launch: finishing is a skill of its own.",
        "lv": 3,
        "children": [
          {
            "t": "Build Pipelines and Platform Exports",
            "d": "Turning your project into something players can run: build profiles, signing, and platform quirks.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "Build profiles and scripting backends per platform",
              "Signing and notarization: what PC, Mac, mobile, and web each demand",
              "Automated builds: command-line builds and why manual exporting does not scale"
            ],
            "do": [
              "Produce clean PC, WebGL/web, and (if possible) Android builds of your game",
              "Script the build from the command line so it is one command, not ten clicks",
              "Install the build on a different machine and fix everything that breaks"
            ],
            "tools": ["Unity Build Profiles", "Godot Export Templates", "butler"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"],
              ["Godot Documentation", "https://docs.godotengine.org"]
            ],
            "tip": "It works on my machine is not a shipping strategy. The first install test on a clean machine always finds missing DLLs, wrong paths, or first-run crashes. Do it weeks before launch, not days."
          },
          {
            "t": "Optimization and Profiling Like a Pro",
            "d": "The profiler-driven workflow: measure, fix the biggest cost, repeat, until the game holds its frame rate.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Profiler workflow: CPU, GPU, memory, and render modules",
              "Memory: textures, audio, and GC pressure as the usual suspects",
              "Asset delivery: addressables, streaming, and load-time budgets"
            ],
            "do": [
              "Take a baseline profile of your game on target hardware",
              "Cut the three biggest costs and document the before/after numbers",
              "Set a memory budget per level and enforce it with an automated check"
            ],
            "tools": ["Unity Profiler", "Godot Debugger", "RenderDoc"],
            "res": [
              ["Unity Documentation", "https://docs.unity3d.com"]
            ],
            "tip": "Garbage collector spikes from per-frame allocations are the most common managed-code perf bug. Pool frequently spawned objects (bullets, enemies, particles) instead of creating and destroying them."
          },
          {
            "t": "Playtesting and Iteration",
            "d": "Watching real players break your assumptions: how to run tests that actually improve the game.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "What to watch: where players get stuck, bored, or confused",
              "The silent observer rule: do not explain, do not help, take notes",
              "Turning observations into prioritized, testable changes"
            ],
            "do": [
              "Watch two people play your game without saying a word",
              "Write down every moment of confusion and rank them by frequency",
              "Fix the top issue, retest with a fresh player, and compare"
            ],
            "tools": ["itch.io", "OBS Studio"],
            "res": [
              ["itch.io", "https://itch.io"]
            ],
            "tip": "Players will not read your tutorial text; they will click through it. If a mechanic needs explaining in words, the mechanic (or its onboarding) needs redesigning, not more text."
          },
          {
            "t": "Publishing on Steam and itch.io",
            "d": "Store pages, capsules, pricing, and the Steamworks basics: the business side of getting players.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "Store page anatomy: capsule art, trailer, description, tags",
              "Steamworks essentials: achievements, cloud saves, and build uploads",
              "Pricing and regional pricing: how indies actually set prices"
            ],
            "do": [
              "Publish a free build on itch.io with a real page: art, description, trailer",
              "Set up a Steamworks partner account and upload a test build",
              "Implement two achievements and Steam Cloud saves in your game"
            ],
            "tools": ["Steamworks", "itch.io", "butler"],
            "res": [
              ["Steamworks", "https://partner.steamgames.com"],
              ["itch.io", "https://itch.io"]
            ],
            "tip": "Your capsule art decides in two seconds whether anyone clicks. Most indie store pages fail here, not in the game itself. Spend real effort (or money) on the capsule before launch."
          },
          {
            "t": "Marketing: Wishlists Before Launch",
            "d": "Trailers, devlogs, and demos: why marketing starts months before release and what actually moves wishlists.",
            "lv": 3,
            "time": "~1w",
            "learn": [
              "The wishlist math: why launch-day wishlists predict revenue",
              "Trailers: first 5 seconds hook, gameplay over cinematics",
              "Demos and festivals: Steam Next Fest and how to use it"
            ],
            "do": [
              "Cut a 60-second trailer: hook in 5 seconds, gameplay front and center",
              "Write a devlog post and share it in two relevant communities",
              "Set a wishlist goal and a weekly routine to work toward it"
            ],
            "tools": ["OBS Studio", "DaVinci Resolve", "Steam"],
            "res": [
              ["Steamworks", "https://partner.steamgames.com"]
            ],
            "tip": "Posting only at launch is shouting into a void. Marketing is a slow build: regular short clips of your game in development outperform one big launch announcement every time."
          },
          {
            "t": "Live Ops and Post-Launch Support",
            "d": "Patches, hotfixes, community, and content plans: launch day is the middle of the story, not the end.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Patch discipline: hotfixes vs content updates and versioning",
              "Community management: where players gather and how to listen at scale",
              "Content roadmaps: DLC, seasons, and knowing when to stop"
            ],
            "do": [
              "Write a post-launch plan: day-1 patch process, week-1 priorities, month-1 content",
              "Set up a bug reporting channel players will actually use",
              "Practice a hotfix deploy: branch, fix, test, ship, announce"
            ],
            "tools": ["Steam", "Discord", "Git"],
            "res": [
              ["Steamworks", "https://partner.steamgames.com"]
            ],
            "tip": "The loudest 1 percent of players do not represent the other 99. Balance community feedback against your telemetry and vision, or you will design by committee and please no one."
          }
        ]
      }
    ]
  }
});
