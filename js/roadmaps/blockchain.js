/* Atlas roadmap data: Blockchain (blockchain) */
ROADMAPS.push({
  "id": "blockchain",
  "title": "Blockchain",
  "icon": "⛓️",
  "color": "#ff6b6b",
  "desc": "From how distributed ledgers work to shipping and securing production smart contracts on Ethereum and beyond.",
  "kind": "role",
  "root": {
    "t": "Blockchain Development",
    "d": "From how chains work to deploying and defending real smart contracts.",
    "lv": 0,
    "children": [
      {
        "t": "Chain Foundations",
        "d": "What a blockchain actually is, and the cryptography underneath it.",
        "lv": 1,
        "children": [
          {
            "t": "What a Blockchain Is",
            "d": "A shared, append-only ledger secured by cryptography, not by trust.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Distributed ledger vs a regular database: who can write, who can verify",
              "Blocks linked by hashes: why changing history breaks the chain",
              "Immutability as an emergent property, not a feature toggle"
            ],
            "do": [
              "Read sections 1-2 of the Bitcoin whitepaper and summarize the double-spend problem",
              "Draw a 3-block chain on paper, computing a toy hash for each block header",
              "Explain a blockchain to a non-technical friend in under one minute"
            ],
            "tools": [
              "Bitcoin whitepaper"
            ],
            "res": [
              [
                "Bitcoin Whitepaper",
                "https://bitcoin.org/bitcoin.pdf"
              ],
              [
                "Ethereum.org",
                "https://ethereum.org"
              ]
            ],
            "tip": "A blockchain is not a faster database. It is a slower, shared source of truth you choose precisely when the parties do not trust each other."
          },
          {
            "t": "Hashing and Digital Signatures",
            "d": "The two cryptographic primitives every chain is built on.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "SHA-256 properties: preimage resistance, second-preimage resistance, avalanche effect",
              "Public/private key pairs and why the private key must never leave your control",
              "ECDSA signing and verification: how a transaction proves its author"
            ],
            "do": [
              "Hash a string with `sha256sum` and change one character to observe the avalanche effect",
              "Generate a secp256k1 keypair with openssl and derive the public key",
              "Sign a message with the private key and verify it with the public key"
            ],
            "tools": [
              "openssl",
              "sha256sum"
            ],
            "res": [
              [
                "Ethereum Developer Docs",
                "https://ethereum.org/en/developers/"
              ]
            ],
            "tip": "Hashing proves data is unchanged; signatures prove who authorized it. Chains need both, and they are not interchangeable."
          },
          {
            "t": "Blocks, Transactions and the Mempool",
            "d": "How user intent becomes a permanent on-chain record.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Block anatomy: header, transaction list, and what miners/validators actually vote on",
              "UTXO model (Bitcoin) vs account model (Ethereum)",
              "The mempool: where pending transactions wait and how fees prioritize them"
            ],
            "do": [
              "Open a recent block on a block explorer and identify its producer, timestamp and transaction count",
              "Trace one transaction from the mempool to its confirmed block",
              "Compare a Bitcoin UTXO transaction with an Ethereum account transaction field by field"
            ],
            "tools": [
              "Etherscan",
              "mempool.space"
            ],
            "res": [
              [
                "Etherscan",
                "https://etherscan.io"
              ],
              [
                "mempool.space",
                "https://mempool.space"
              ]
            ]
          },
          {
            "t": "Wallets, Keys and Addresses",
            "d": "Your keys are your account: how wallets manage them.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Seed phrases (BIP-39) and hierarchical derivation paths",
              "Externally owned accounts vs smart-contract wallets",
              "Hot vs cold storage and the real-world cost of losing a seed phrase"
            ],
            "do": [
              "Create a wallet in MetaMask on a test network and back up the seed phrase offline",
              "Derive the same address from a seed phrase in two different wallet apps",
              "Send testnet ETH to a second address you control and verify it on an explorer"
            ],
            "tools": [
              "MetaMask",
              "Rabby"
            ],
            "res": [
              [
                "MetaMask Docs",
                "https://docs.metamask.io"
              ]
            ],
            "tip": "Not your keys, not your coins is not a slogan. Anyone holding your seed phrase owns everything the wallet will ever hold."
          },
          {
            "t": "Consensus: Proof of Work and Proof of Stake",
            "d": "How strangers agree on one history without a referee.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Why consensus exists: the double-spend problem in a peer-to-peer network",
              "Proof of Work: hashing puzzles, difficulty adjustment, mining incentives",
              "Proof of Stake: validators, staking, slashing, and finality"
            ],
            "do": [
              "Write a tiny Python script that mines a hash with N leading zeros to feel difficulty",
              "Look up the current Ethereum validator count and total staked ETH",
              "Write one paragraph explaining why finality matters for exchanges and bridges"
            ],
            "tools": [
              "Python"
            ],
            "res": [
              [
                "Ethereum Consensus Mechanisms",
                "https://ethereum.org/en/developers/docs/consensus-mechanisms/"
              ]
            ],
            "tip": "Proof of Work secures with energy, Proof of Stake secures with capital at risk. Both are economic games, not just algorithms."
          },
          {
            "t": "Bitcoin vs Ethereum",
            "d": "Digital gold versus the world computer.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Bitcoin: sound money, limited scripting, 21M supply cap",
              "Ethereum: general-purpose computation via the EVM, gas-metered execution",
              "Block times, fees and upgrade philosophies compared"
            ],
            "do": [
              "Compare block time, average fee and confirmation depth for both chains on explorers",
              "Find one thing you can build on Ethereum that is impossible on Bitcoin, and explain why"
            ],
            "tools": [
              "Etherscan",
              "mempool.space"
            ],
            "res": [
              [
                "Ethereum.org",
                "https://ethereum.org"
              ]
            ]
          },
          {
            "t": "Testnets and Faucets",
            "d": "Practice with play money before real money is on the line.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Sepolia and Holesky: what testnets are for and how they differ",
              "Faucets, rate limits and why testnet ETH has no monetary value",
              "Reset culture: testnets can be deprecated, so never hardcode them"
            ],
            "do": [
              "Claim Sepolia ETH from a public faucet",
              "Send a transaction between two testnet addresses and watch it confirm",
              "Switch MetaMask between mainnet and Sepolia and note what changes"
            ],
            "tools": [
              "MetaMask",
              "Sepolia"
            ],
            "res": [
              [
                "Ethereum Networks",
                "https://ethereum.org/en/developers/docs/networks/"
              ]
            ]
          }
        ]
      },
      {
        "t": "Ethereum and the EVM",
        "d": "Accounts, gas, execution, and the Layer 2 landscape.",
        "lv": 2,
        "children": [
          {
            "t": "Accounts: EOAs vs Contracts",
            "d": "Two kinds of accounts, one address space.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Externally owned accounts (key-controlled) vs contract accounts (code-controlled)",
              "Nonces: why every account has a transaction counter",
              "Contract creation via CREATE and deterministic deployment via CREATE2"
            ],
            "do": [
              "Open an EOA and a contract account on Etherscan and compare their pages field by field",
              "Find a contract deployed with CREATE2 and verify its address was predictable"
            ],
            "tools": [
              "Etherscan"
            ],
            "res": [
              [
                "Ethereum Accounts",
                "https://ethereum.org/en/developers/docs/accounts/"
              ]
            ]
          },
          {
            "t": "Gas and Fees",
            "d": "Every computation has a price: how Ethereum meters execution.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Gas units vs gas price (gwei): the two dials on every transaction",
              "EIP-1559: base fee, priority fee, and why fees burn",
              "Gas limits, out-of-gas reverts, and why storage operations cost the most"
            ],
            "do": [
              "Send a testnet transaction and read gasUsed, gasPrice and the burned base fee from its receipt",
              "Estimate the same transaction at low, medium and high priority fees in MetaMask",
              "Calculate the dollar cost of storing 1KB on-chain vs emitting it as an event"
            ],
            "tools": [
              "MetaMask",
              "Etherscan"
            ],
            "res": [
              [
                "Gas and Fees",
                "https://ethereum.org/en/developers/docs/gas/"
              ]
            ],
            "tip": "Gas price is what you pay per unit; gas limit is the maximum units you allow. Confusing them is how beginners overpay or stall transactions."
          },
          {
            "t": "The EVM Execution Model",
            "d": "A 256-bit stack machine that runs the world's contracts.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Stack-based execution, 256-bit words, and the opcode set",
              "Storage vs memory vs calldata: persistence, cost and lifetime",
              "How function selectors dispatch calls to the right code"
            ],
            "do": [
              "Look up ADD, SSTORE and CALL on evm.codes and note their gas costs",
              "Trace a simple token transfer and identify where storage is read and written",
              "Explain why calldata is cheaper than memory for external function arguments"
            ],
            "tools": [
              "evm.codes",
              "Foundry Cast"
            ],
            "res": [
              [
                "evm.codes",
                "https://www.evm.codes"
              ]
            ]
          },
          {
            "t": "Ethereum Clients and Nodes",
            "d": "The software that actually runs the network.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Execution clients vs consensus clients and how they pair up",
              "Full nodes, archive nodes and light clients: what each stores",
              "Why running your own node removes trust in third-party RPCs"
            ],
            "do": [
              "Install Geth and start a Sepolia snap sync, watching the sync stages",
              "Compare the disk usage of a full node vs an archive node from client docs",
              "Query your local node with eth_blockNumber and compare with a public RPC"
            ],
            "tools": [
              "Geth",
              "Nethermind",
              "Reth"
            ],
            "res": [
              [
                "Geth Documentation",
                "https://geth.ethereum.org/docs"
              ]
            ]
          },
          {
            "t": "JSON-RPC and Reading Chain Data",
            "d": "Talk to any node with plain HTTP calls.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Core methods: eth_call, eth_getBalance, eth_getLogs, eth_getTransactionReceipt",
              "Providers vs your own node: trust, rate limits and latency tradeoffs",
              "Hex encoding, block tags (latest/pending) and log topics"
            ],
            "do": [
              "Query an address balance and the latest block number with curl against a public RPC",
              "Fetch Transfer logs for a token contract with eth_getLogs and decode one event",
              "Use cast call to read a contract's view function without sending a transaction"
            ],
            "tools": [
              "curl",
              "Foundry Cast",
              "Alchemy"
            ],
            "res": [
              [
                "Ethereum JSON-RPC",
                "https://ethereum.org/en/developers/docs/apis/json-rpc/"
              ]
            ]
          },
          {
            "t": "Block Explorers, Deep Dive",
            "d": "Read the chain like a detective.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "Verified contract source: reading real deployed code",
              "Internal transactions and why they never appear in a block's tx list",
              "Token approvals: the allowance attack surface most users ignore"
            ],
            "do": [
              "Find a verified contract on Etherscan and read its source for the withdraw function",
              "Audit your own wallet's token approvals on Revoke.cash and revoke one",
              "Trace an internal transaction back to the external call that triggered it"
            ],
            "tools": [
              "Etherscan",
              "Revoke.cash"
            ],
            "res": [
              [
                "Revoke.cash",
                "https://revoke.cash"
              ]
            ],
            "tip": "Unlimited token approvals to a compromised contract drain wallets silently. Review approvals like you review permissions."
          },
          {
            "t": "Layer 2s and Rollups",
            "d": "Scaling Ethereum without leaving its security.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Optimistic rollups vs ZK rollups: fraud proofs vs validity proofs",
              "Sequencers, data availability and the 7-day withdrawal window on optimistic L2s",
              "Bridging assets and why L2 fees are orders of magnitude cheaper"
            ],
            "do": [
              "Bridge testnet ETH to an L2 testnet and back, timing each direction",
              "Compare the fee of the same swap on mainnet vs Arbitrum vs Base",
              "Read an L2 block explorer and identify the sequencer's batches"
            ],
            "tools": [
              "Arbitrum",
              "Optimism",
              "Base"
            ],
            "res": [
              [
                "Ethereum Layer 2",
                "https://ethereum.org/en/layer-2/"
              ]
            ]
          }
        ]
      },
      {
        "t": "Solidity Smart Contract Development",
        "d": "Write, test and deploy real contracts with the 2026 toolchain.",
        "lv": 2,
        "children": [
          {
            "t": "Development Environment Setup",
            "d": "Foundry-first setup for serious contract work.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Remix for browser-first experiments vs local Foundry projects",
              "Installing Foundry with foundryup: forge, cast and anvil",
              "Solidity compiler versions and why the pragma matters"
            ],
            "do": [
              "Install Foundry via foundryup and verify forge, cast and anvil versions",
              "Scaffold a project with forge init and compile the default Counter contract",
              "Start anvil, deploy Counter locally, and call its functions with cast"
            ],
            "tools": [
              "Foundry",
              "Remix"
            ],
            "res": [
              [
                "Foundry Book",
                "https://book.getfoundry.sh"
              ]
            ]
          },
          {
            "t": "Solidity Syntax Essentials",
            "d": "The language core: types, state and constructors.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Pragma versioning: pinning exact compiler versions for reproducible builds",
              "State variables vs local variables: persistence and gas implications",
              "Value types, constructors, and the contract lifecycle"
            ],
            "do": [
              "Write a Counter contract with increment, decrement and reset",
              "Compile with forge build and fix every compiler warning it reports",
              "Deploy to anvil and interact with it using cast send and cast call"
            ],
            "tools": [
              "Foundry",
              "Solidity"
            ],
            "res": [
              [
                "Solidity Documentation",
                "https://docs.soliditylang.org"
              ]
            ]
          },
          {
            "t": "Functions: Visibility and Mutability",
            "d": "Who can call what, and what it may change.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Visibility: public, external, internal, private and their defaults",
              "Mutability: view, pure and payable, and what each permits",
              "Fallback and receive functions for plain ETH transfers"
            ],
            "do": [
              "Write one contract exercising every visibility and mutability modifier",
              "Call each function from a test and observe which calls revert and why",
              "Send ETH to a contract with and without a receive function and compare behavior"
            ],
            "tools": [
              "Foundry",
              "Solidity"
            ],
            "res": [
              [
                "Solidity Documentation",
                "https://docs.soliditylang.org"
              ]
            ],
            "tip": "State variables default to internal, functions too. A sensitive function left public by accident is a classic audit finding."
          },
          {
            "t": "Mappings, Arrays and Structs",
            "d": "On-chain data structures and their costs.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Mappings: O(1) lookups with no iteration and no length",
              "Storage arrays vs memory arrays and their gas profiles",
              "Struct packing: how variable order changes storage slots"
            ],
            "do": [
              "Build a simple name registry contract using mappings and structs",
              "Reorder struct fields and measure the SSTORE gas difference with forge",
              "Implement pagination for an array that mappings alone cannot provide"
            ],
            "tools": [
              "Foundry",
              "Solidity"
            ],
            "res": [
              [
                "Solidity Documentation",
                "https://docs.soliditylang.org"
              ]
            ]
          },
          {
            "t": "Events and Custom Errors",
            "d": "How contracts talk to the off-chain world.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Events, indexed topics and logs: the chain's pub-sub system",
              "Custom errors vs require strings: readability and gas savings",
              "Why indexers and frontends depend on well-designed events"
            ],
            "do": [
              "Emit events on every state change in your registry contract",
              "Replace require strings with custom errors and measure deployment gas savings",
              "Query your contract's events with cast logs and decode one by hand"
            ],
            "tools": [
              "Foundry",
              "Solidity"
            ],
            "res": [
              [
                "Solidity Documentation",
                "https://docs.soliditylang.org"
              ]
            ],
            "tip": "If it happened on-chain but no event was emitted, your frontend and your monitoring basically cannot see it."
          },
          {
            "t": "ERC-20 Tokens",
            "d": "The fungible token standard behind DeFi.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "transfer, approve and transferFrom: the allowance dance",
              "Decimals, totalSupply and why tokens are integers under the hood",
              "Building on OpenZeppelin's audited ERC20 instead of writing your own"
            ],
            "do": [
              "Deploy an ERC-20 using OpenZeppelin Contracts on anvil",
              "Execute an approve then transferFrom flow between two accounts with cast",
              "Write a test that fails if totalSupply ever changes unexpectedly"
            ],
            "tools": [
              "OpenZeppelin",
              "Foundry"
            ],
            "res": [
              [
                "OpenZeppelin Contracts",
                "https://docs.openzeppelin.com/contracts"
              ]
            ]
          },
          {
            "t": "ERC-721 NFTs",
            "d": "Unique tokens, metadata and ownership.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "tokenId ownership, tokenURI and on-chain vs off-chain metadata",
              "ERC-721 vs ERC-1155: when semi-fungibility wins",
              "Royalties (EIP-2981) and marketplace realities"
            ],
            "do": [
              "Deploy an ERC-721 collection with OpenZeppelin and mint three tokens",
              "Host metadata JSON on IPFS and set tokenURI to the CID",
              "Transfer an NFT between wallets and verify ownership on an explorer"
            ],
            "tools": [
              "OpenZeppelin",
              "IPFS"
            ],
            "res": [
              [
                "OpenZeppelin Contracts",
                "https://docs.openzeppelin.com/contracts"
              ]
            ]
          },
          {
            "t": "Unit Testing with Foundry",
            "d": "Solidity-native tests that run in milliseconds.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "forge test anatomy: setUp, test_ functions and assertions",
              "Cheatcodes: prank (impersonate), deal (fund), warp/roll (time travel)",
              "Testing reverts with expectRevert and testing events"
            ],
            "do": [
              "Write unit tests covering every function of your ERC-20",
              "Use vm.prank to test access-controlled functions as different callers",
              "Reach full line coverage and inspect the report with forge coverage"
            ],
            "tools": [
              "Foundry"
            ],
            "res": [
              [
                "Foundry Book",
                "https://book.getfoundry.sh"
              ]
            ]
          },
          {
            "t": "Fuzz and Invariant Testing",
            "d": "Let the machine find the cases you never imagined.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "Fuzzing: randomized inputs against properties you assert",
              "Invariant testing: properties that must hold across random call sequences",
              "Handlers, ghost variables and bounding fuzzer input sensibly"
            ],
            "do": [
              "Add a fuzz test that transfers random amounts and asserts balance conservation",
              "Write an invariant test: totalSupply always equals the sum of balances",
              "Run 10k fuzz runs in CI and fix the first broken invariant you find"
            ],
            "tools": [
              "Foundry"
            ],
            "res": [
              [
                "Foundry Book",
                "https://book.getfoundry.sh"
              ]
            ],
            "tip": "Unit tests check the cases you imagined. Fuzzing checks the ones you did not, and those are the ones attackers find."
          },
          {
            "t": "Deploying to Testnet and Mainnet",
            "d": "From anvil to the real chain, safely.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Deployment scripts with forge script and broadcast",
              "Constructor arguments, deterministic addresses and verification",
              "Private key hygiene: env vars, hardware wallets, never committing keys"
            ],
            "do": [
              "Deploy your token to Sepolia with forge script --broadcast",
              "Verify the source on Etherscan so others can read it",
              "Document your deployment addresses and the exact commit that produced them"
            ],
            "tools": [
              "Foundry",
              "Etherscan"
            ],
            "res": [
              [
                "Foundry Book",
                "https://book.getfoundry.sh"
              ]
            ],
            "tip": "An unverified contract asks users to trust bytecode they cannot read. Verify every deployment, every time."
          }
        ]
      },
      {
        "t": "dApp Tooling and Off-Chain Stack",
        "d": "Oracles, storage, frontends and infrastructure around your contracts.",
        "lv": 2,
        "children": [
          {
            "t": "OpenZeppelin Contracts Library",
            "d": "Never rewrite audited code.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "ERC20/721, Ownable, AccessControl, Pausable: the standard building blocks",
              "Why battle-tested libraries beat hand-rolled token code",
              "Upgradeable variants and their initializer pattern"
            ],
            "do": [
              "Refactor your token to inherit OpenZeppelin ERC20 plus Ownable",
              "Add Pausable and test the pause/unpause flow end to end",
              "Read the OpenZeppelin source of one contract you inherit from"
            ],
            "tools": [
              "OpenZeppelin",
              "Foundry"
            ],
            "res": [
              [
                "OpenZeppelin Contracts",
                "https://docs.openzeppelin.com/contracts"
              ]
            ]
          },
          {
            "t": "Chainlink Oracles",
            "d": "Contracts cannot fetch the web: oracles bring data in.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Why smart contracts are blind to off-chain data by design",
              "Price feeds: decimals, heartbeats and staleness checks",
              "Chainlink VRF for verifiable randomness instead of block.timestamp"
            ],
            "do": [
              "Read the ETH/USD price feed on Sepolia from a consumer contract",
              "Add a staleness check that reverts if the feed is older than its heartbeat",
              "Request randomness with VRF and consume it in a callback"
            ],
            "tools": [
              "Chainlink",
              "Foundry"
            ],
            "res": [
              [
                "Chainlink Documentation",
                "https://docs.chain.link"
              ]
            ],
            "tip": "Using block.timestamp as randomness is not randomness: validators can nudge it. Use VRF for anything with value at stake."
          },
          {
            "t": "Decentralized Storage: IPFS and Arweave",
            "d": "Content-addressed data for metadata and frontends.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Content addressing: CIDs identify data by what it is, not where it lives",
              "Pinning, gateways and why unpinned data disappears",
              "When data belongs on-chain vs on IPFS vs on a server"
            ],
            "do": [
              "Upload NFT metadata JSON to IPFS and record its CID",
              "Fetch the metadata through two different public gateways",
              "Point your ERC-721 tokenURI at the CID and render the NFT"
            ],
            "tools": [
              "IPFS",
              "Pinata"
            ],
            "res": [
              [
                "IPFS Docs",
                "https://docs.ipfs.tech"
              ]
            ]
          },
          {
            "t": "Frontend Integration: viem and ethers",
            "d": "Connect wallets and contracts to a real UI.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Providers vs signers: reading is free, writing needs a wallet",
              "ABIs as the contract's API surface for frontends",
              "Wallet connection flows and handling chain switches"
            ],
            "do": [
              "Build a page that reads your token balance with viem",
              "Add a transfer button that prompts MetaMask and confirms on-chain",
              "Handle wrong-network errors with a switch-network prompt"
            ],
            "tools": [
              "viem",
              "ethers.js",
              "wagmi"
            ],
            "res": [
              [
                "viem Documentation",
                "https://viem.sh"
              ]
            ]
          },
          {
            "t": "Indexing with Subgraphs",
            "d": "Turn event logs into a queryable API.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Events as the canonical data source for off-chain views",
              "Subgraph manifests, mappings and entities",
              "GraphQL queries against your indexed data"
            ],
            "do": [
              "Define a subgraph indexing Transfer events from your token",
              "Deploy it to a hosted/indexer service and query balances via GraphQL",
              "Compare subgraph latency with direct eth_getLogs polling"
            ],
            "tools": [
              "The Graph"
            ],
            "res": [
              [
                "The Graph Docs",
                "https://thegraph.com/docs"
              ]
            ]
          },
          {
            "t": "Node Providers and Infrastructure",
            "d": "Production RPC without running your own fleet.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "Alchemy, Infura, QuickNode: features, rate limits and pricing",
              "WebSocket subscriptions for pending transactions and logs",
              "Fallback providers and why single-RPC apps go down"
            ],
            "do": [
              "Create an Alchemy app and make JSON-RPC calls with its endpoint",
              "Subscribe to pending transactions over WebSocket for one minute",
              "Configure a primary plus fallback RPC in your frontend"
            ],
            "tools": [
              "Alchemy",
              "Infura"
            ],
            "res": [
              [
                "Alchemy Docs",
                "https://docs.alchemy.com"
              ]
            ]
          }
        ]
      },
      {
        "t": "DeFi Primitives",
        "d": "The money legos: swaps, lending, stablecoins and governance.",
        "lv": 2,
        "children": [
          {
            "t": "AMMs and Uniswap",
            "d": "Trade without order books using liquidity pools.",
            "lv": 2,
            "time": "~6h",
            "learn": [
              "x*y=k constant product: how prices emerge from reserves",
              "Liquidity provision, fees and impermanent loss",
              "Concentrated liquidity (v3) and slippage protection"
            ],
            "do": [
              "Swap tokens on a testnet DEX and record the price impact",
              "Provide liquidity to a pool, then withdraw and compute your impermanent loss",
              "Execute a swap with a slippage limit and observe a reverted sandwich attempt"
            ],
            "tools": [
              "Uniswap"
            ],
            "res": [
              [
                "Uniswap Docs",
                "https://docs.uniswap.org"
              ]
            ],
            "tip": "Impermanent loss is only impermanent if prices revert. Treat LP positions as a strategy with real risk, not free yield."
          },
          {
            "t": "Lending Markets",
            "d": "Borrow against collateral, programmatically.",
            "lv": 2,
            "time": "~5h",
            "learn": [
              "Overcollateralization, loan-to-value ratios and liquidations",
              "Interest rate models: utilization-driven borrowing costs",
              "Flash loans: uncollateralized loans repaid in one transaction"
            ],
            "do": [
              "Supply collateral and borrow against it on a testnet lending pool",
              "Calculate at which collateral price your position gets liquidated",
              "Execute a flash loan that arbitrages two DEXes and repays in one tx"
            ],
            "tools": [
              "Aave"
            ],
            "res": [
              [
                "Aave Docs",
                "https://docs.aave.com"
              ]
            ]
          },
          {
            "t": "Stablecoins",
            "d": "Dollars on-chain, and why some of them broke.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Fiat-backed vs crypto-backed vs algorithmic designs",
              "Depeg mechanics: what happens when the peg slips",
              "DAI/Maker: collateralized debt positions and stability fees"
            ],
            "do": [
              "Compare collateral ratios and backing for three major stablecoins",
              "Open a testnet CDP-style position and mint a stablecoin against collateral",
              "Write a post-mortem summary of one historical stablecoin depeg"
            ],
            "tools": [
              "MakerDAO"
            ],
            "res": [
              [
                "MakerDAO Docs",
                "https://docs.makerdao.com"
              ]
            ]
          },
          {
            "t": "Governance and DAOs",
            "d": "Protocol politics encoded in contracts.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Token voting, delegation and quorum mechanics",
              "Timelocks: why upgrades wait before executing",
              "Voter apathy and governance attack vectors"
            ],
            "do": [
              "Deploy an OpenZeppelin Governor with a timelock on testnet",
              "Run a full proposal lifecycle: propose, vote, queue, execute",
              "Analyze voting participation in one real DAO proposal"
            ],
            "tools": [
              "OpenZeppelin",
              "Tally"
            ],
            "res": [
              [
                "OpenZeppelin Contracts",
                "https://docs.openzeppelin.com/contracts"
              ]
            ]
          },
          {
            "t": "MEV Fundamentals",
            "d": "The hidden economy inside every block.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Frontrunning, sandwich attacks and backrunning in the mempool",
              "Private order flow and MEV-Boost: how validators capture value",
              "User defenses: slippage limits, private mempools, intent-based swaps"
            ],
            "do": [
              "Simulate a sandwich attack against your own swap on a local fork",
              "Protect a swap with tight slippage and a deadline, then attack it again",
              "Read a real MEV transaction bundle and identify the searcher's profit"
            ],
            "tools": [
              "Flashbots",
              "Foundry Anvil"
            ],
            "res": [
              [
                "Flashbots Docs",
                "https://docs.flashbots.net"
              ]
            ]
          }
        ]
      },
      {
        "t": "Smart Contract Security",
        "d": "Think like an attacker, then build like a defender.",
        "lv": 3,
        "children": [
          {
            "t": "Reentrancy and Checks-Effects-Interactions",
            "d": "The bug that defined smart contract security.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Classic reentrancy: external calls before state updates",
              "Cross-function and read-only reentrancy variants",
              "Checks-Effects-Interactions pattern and ReentrancyGuard"
            ],
            "do": [
              "Exploit a vulnerable vault contract on anvil and drain it",
              "Fix it with checks-effects-interactions, then with ReentrancyGuard",
              "Write a test proving the fixed contract resists the same attack"
            ],
            "tools": [
              "Foundry",
              "OpenZeppelin"
            ],
            "res": [
              [
                "Smart Contract Best Practices",
                "https://consensys.github.io/smart-contract-best-practices"
              ]
            ],
            "tip": "Update state before calling out. Every external call hands control to potentially hostile code."
          },
          {
            "t": "Access Control Failures",
            "d": "The most common critical finding in audits.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Missing onlyOwner on sensitive functions",
              "tx.origin authentication vs msg.sender: why origin is spoofable",
              "Unprotected initializers in upgradeable contracts"
            ],
            "do": [
              "Audit a sample contract and find three access control bugs",
              "Fix them with OpenZeppelin AccessControl roles",
              "Write tests where a non-admin attempts each privileged action"
            ],
            "tools": [
              "OpenZeppelin",
              "Foundry"
            ],
            "res": [
              [
                "OpenZeppelin Access Control",
                "https://docs.openzeppelin.com/contracts/access-control"
              ]
            ],
            "tip": "Never use tx.origin for authorization: any contract you interact with can relay your origin. Always use msg.sender."
          },
          {
            "t": "Oracle and Price Manipulation",
            "d": "When your contract trusts a liar.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Spot-price oracles and flash-loan manipulation attacks",
              "Time-weighted average prices (TWAP) as a defense",
              "Chainlink feeds plus sanity bounds: defense in depth"
            ],
            "do": [
              "Build a lending contract that prices collateral from a spot DEX price",
              "Manipulate that price with a flash loan on a fork and drain the pool",
              "Fix it with a Chainlink feed and a TWAP check, then re-run the attack"
            ],
            "tools": [
              "Chainlink",
              "Foundry"
            ],
            "res": [
              [
                "Chainlink Documentation",
                "https://docs.chain.link"
              ]
            ]
          },
          {
            "t": "Upgradeability and Proxies",
            "d": "Fixing bugs in immutable code.",
            "lv": 3,
            "time": "~6h",
            "learn": [
              "delegatecall and how proxies borrow implementation logic",
              "Transparent vs UUPS proxies and their trust tradeoffs",
              "Storage collisions and the initializer pattern replacing constructors"
            ],
            "do": [
              "Deploy a UUPS proxy pointing at a V1 implementation",
              "Upgrade to V2 adding a feature, verifying storage layout is preserved",
              "Break a proxy on purpose with a storage collision, then fix it"
            ],
            "tools": [
              "OpenZeppelin Upgrades",
              "Foundry"
            ],
            "res": [
              [
                "OpenZeppelin Upgrades",
                "https://docs.openzeppelin.com/upgrades-plugins"
              ]
            ],
            "tip": "In upgradeable contracts the constructor never runs on the proxy. Forget the initializer and anyone can claim ownership."
          },
          {
            "t": "Static Analysis and Auditing",
            "d": "Automate the boring bugs, think through the rest.",
            "lv": 3,
            "time": "~5h",
            "learn": [
              "Slither detectors: what static analysis catches reliably",
              "Reading real audit reports to learn vulnerability patterns",
              "Threat modeling and scoping before any audit or bounty"
            ],
            "do": [
              "Run Slither on your contracts and triage every finding as true or false positive",
              "Read one published audit report and reproduce its key finding locally",
              "Write a one-page audit-style report on a peer's contract"
            ],
            "tools": [
              "Slither",
              "Aderyn"
            ],
            "res": [
              [
                "Slither",
                "https://github.com/crytic/slither"
              ]
            ]
          },
          {
            "t": "Gas Optimization",
            "d": "Cheaper transactions without breaking correctness.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Storage packing, calldata vs memory, and caching storage reads",
              "unchecked arithmetic where overflow is provably impossible",
              "forge snapshot: measuring gas per commit like a regression test"
            ],
            "do": [
              "Optimize a contract and record before/after gas with forge snapshot",
              "Pack three storage variables into fewer slots and measure the saving",
              "Identify one optimization you rejected because it hurt readability"
            ],
            "tools": [
              "Foundry"
            ],
            "res": [
              [
                "Solidity Documentation",
                "https://docs.soliditylang.org"
              ]
            ],
            "tip": "Optimize for readability first. Gas-golf only the hot paths your users actually pay for, and measure everything."
          },
          {
            "t": "Monitoring and Incident Response",
            "d": "Mainnet is where theory meets attackers.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Monitoring large withdrawals, pauses and admin actions",
              "Circuit breakers, multisig admin and timelocked upgrades",
              "Incident drills and post-mortems: the Pausable you hope to never use"
            ],
            "do": [
              "Set up an alert on withdrawals above a threshold from your contract",
              "Run a pause drill on testnet: detect, pause, communicate, unpause",
              "Draft an incident response runbook for your deployed protocol"
            ],
            "tools": [
              "OpenZeppelin Defender"
            ],
            "res": [
              [
                "OpenZeppelin Defender",
                "https://docs.openzeppelin.com/defender"
              ]
            ],
            "tip": "A pause mechanism you have never drilled is a decoration. Practice the emergency path before the emergency."
          }
        ]
      }
    ]
  }
});
