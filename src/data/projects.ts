export type Category = "crypto" | "products" | "ai" | "enterprise";

/** Cross-cutting filters shown as chips at the top of the page. */
export type Facet = "crypto" | "ai" | "mobile" | "saas" | "iot";

export const facets: { id: Facet; label: string }[] = [
  { id: "crypto", label: "Crypto" },
  { id: "ai", label: "AI" },
  { id: "mobile", label: "Mobile Apps (iOS/Android)" },
  { id: "saas", label: "SaaS" },
  { id: "iot", label: "IoT" },
];

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  facets: Facet[];
  period: string;
  role: string;
  org?: string;
  status?: string;
  tags: string[];
  description: string;
  highlights?: string[];
  cover?: string;
  /** Portrait phone screenshots render as a phone row; landscape as a strip. */
  gallery?: string[];
  logo?: string;
  links?: Link[];
  featured?: boolean;
  /** Accent gradient used when a project has no cover image. */
  accent?: string;
  /** Cover is a tall phone screenshot: show it contained over a blurred backdrop. */
  portrait?: boolean;
}

export const profile = {
  name: "Ashok Jaiswal",
  title: "Product builder · Crypto, AI, robots and the apps around them",
  location: "Hong Kong",
  intro:
    "I turn ideas into shipped products: crypto wallets and NFT platforms, AI apps, consumer hardware that raised money on Indiegogo and Kickstarter, and lately an open-source home robot. Ex-Goldman Sachs, HKUST MBA, two-time hardware founder, and still writing most of the code myself.",
  email: "ashokjaiswal@gmail.com",
  github: "https://github.com/aeropriest",
  linkedin: "https://www.linkedin.com/in/ashok-jaiswal-428b38212/",
  x: "https://x.com/jaiswalashok",
  freelancer: "https://www.freelancer.com/u/aeropriest",
  stats: [
    { value: "20+", label: "years building software" },
    { value: "3", label: "hardware products shipped" },
    { value: "$3M+", label: "raised across startups" },
    { value: "80+", label: "public repos on GitHub" },
  ],
};

export const skills = [
  "React / Next.js",
  "React Native / Expo",
  "Flutter",
  "SwiftUI",
  "TypeScript / Node",
  "Python",
  "Solidity / Hardhat",
  "Solana / SPL",
  "ethers.js / Web3Modal",
  "Firebase",
  "LLM apps (OpenAI, Gemini, Anthropic)",
  "LangChain / RAG",
  "TensorFlow / pose tracking",
  "ESP32 / ESP-IDF",
  "KiCad / 3D printing",
  "Product management",
  "Crowdfunding & fundraising",
];

export const projects: Project[] = [
  // ───────────────────────────── CRYPTO & WEB3 ─────────────────────────────
  {
    slug: "riowallet",
    portrait: true,
    facets: ["crypto", "mobile"],
    title: "RioWallet",
    tagline: "Self-custodial multi-chain wallet for iOS, Android and web",
    category: "crypto",
    period: "2020 – 2022",
    role: "Technical Product Manager → Product Lead",
    org: "RioDeFi, Hong Kong",
    status: "Shipped to App Store & Google Play",
    tags: ["DeFi", "Wallet", "RioChain", "BTC · ETH · USDT · RFUEL", "Mobile"],
    description:
      "RioDeFi's flagship consumer product: a non-custodial wallet that let users hold and move Bitcoin, Ethereum, USDT and RFUEL, import Binance Smart Chain and OKExChain wallets, stake, buy crypto with fiat and open DeFi dApps from a built-in browser. Transfers on RioChain cost a flat 0.1 RFUEL at up to 3,000 tps with 2-second blocks.",
    highlights: [
      "Owned the mobile roadmap from v1 launch through the v2 redesign: multi-chain accounts, cross-chain transfers, staking and a dApp section",
      "Fiat on-ramp, three new languages and OAuth onboarding so people could create a wallet with an email or social login",
      "Face ID / Touch ID plus a 12-word mnemonic; no ads, no tracking, keys never leave the device",
    ],
    cover: "/images/rio-wallet-1.webp",
    gallery: [
      "/images/rio-wallet-1.webp",
      "/images/rio-wallet-2.webp",
      "/images/rio-wallet-3.webp",
      "/images/rio-wallet-4.webp",
    ],
    logo: "/images/logos/riowallet-icon.png",
    links: [
      { label: "RioDeFi", href: "https://riodefi.com/wallet" },
      {
        label: "Launch post",
        href: "https://medium.com/riodefi/riodefi-launches-riowallet-mobile-app-cross-chain-transfers-now-accessible-from-your-phone-2892bb2d80c3",
      },
    ],
    featured: true,
  },
  {
    slug: "goingape",
    facets: ["crypto"],
    title: "GoingApe NFT",
    tagline: "GameFi NFT collection, marketplace and AR filters",
    category: "crypto",
    period: "2021 – 2022",
    role: "Product Lead",
    org: "RioDeFi",
    tags: ["NFT", "ERC-721", "OpenSea", "GameFi", "Metaverse", "AR"],
    description:
      "Set the roadmap and led designers, developers, 3D artists and junior marketers from concept to launch of a 3D ape collection billed as the first composable metaverse built on NFTs. Minted the collection on Ethereum testnets, listed it on OpenSea, shipped a marketplace site with wallet connect and bidding, and ran the Instagram community with AR face filters.",
    highlights: [
      "100-piece collection minted and listed on OpenSea (Rinkeby) with on-chain metadata",
      "Marketplace front end: gallery, top bids, wallet connect, auctions",
      "7,000+ Instagram followers, merchandise and AR filter drops",
    ],
    cover: "/images/goingape-site.webp",
    gallery: [
      "/images/goingape-site.webp",
      "/images/goingape-opensea.webp",
      "/images/goingape-instagram.webp",
    ],
    links: [{ label: "Instagram", href: "https://www.instagram.com/goingapenft/" }],
    featured: true,
  },
  {
    slug: "coinwatch",
    portrait: true,
    facets: ["crypto", "mobile"],
    title: "CoinWatch",
    tagline: "Market tracker and portfolio app for iOS and Android, shipped twice",
    category: "crypto",
    period: "2022",
    role: "Product & lead developer",
    org: "RioDeFi · Lidqid Life",
    status: "Shipped to the App Store",
    tags: ["React Native", "Recoil", "CoinGecko", "Candlestick charts", "Portfolio"],
    description:
      "A simpler way to track the coins I actually cared about: live prices and market caps, interactive history from 24h to all-time, a converter, a watchlist and a portfolio that values your holdings in real time. First built as the Rio Crypto Tracker for RioDeFi, then rebuilt from scratch in React Native with Recoil, CoinGecko, animated Rainbow line charts and Wagmi candlesticks, and published as CoinWatch.",
    cover: "/images/coinwatch-1.webp",
    gallery: [
      "/images/rio-tracker.webp",
      "/images/coinwatch-1.webp",
      "/images/coinwatch-2.webp",
      "/images/coinwatch-3.webp",
      "/images/coinwatch-4.webp",
    ],
    links: [
      { label: "App Store", href: "https://apps.apple.com/hk/app/lidqidcoinwatch/id1631791901?l=en-GB" },
      { label: "GitHub", href: "https://github.com/aeropriest/CoinWatch" },
    ],
  },
  {
    slug: "axarnft",
    facets: ["crypto", "ai", "saas"],
    title: "Axar NFT",
    tagline: "Mint your AI persona as an NFT and carry it across any model",
    category: "crypto",
    period: "2025 – 2026",
    role: "Founder & builder",
    org: "Axar Soft",
    tags: ["Next.js", "Solidity", "Hardhat", "Sepolia", "ethers.js", "AI"],
    description:
      "Axar lets you own your AI interactions: encrypted prompts and persona data are minted as NFTs on Ethereum (Sepolia) so they move with you between models and devices. Create NFTs from text, update metadata as the owner, connect with any Web3 wallet.",
    cover: "/images/axarnft.webp",
    gallery: ["/images/axarnft.webp"],
    links: [
      { label: "Live demo", href: "https://axarnft-six.vercel.app" },
      { label: "GitHub", href: "https://github.com/aeropriest/axarnft" },
    ],
  },
  {
    slug: "xorro",
    facets: ["crypto", "mobile"],
    title: "Xorro",
    tagline: "Where fans become shareholders: equity crowdfunding for creators",
    category: "crypto",
    period: "2025",
    role: "Web3 Tech Lead",
    org: "New Social Theory, Hong Kong",
    status: "Live on iOS & Android",
    tags: ["Web3", "Tokenised equity", "Reg CF", "Mobile", "Creator economy"],
    description:
      "Xorro lets creators, athletes and entertainers raise capital by offering real equity stakes to their fanbase through a registered broker-dealer, with an iOS and Android app for browsing campaigns and investing. I led everything on the crypto and blockchain side for New Social Theory, the studio behind it: wallet and custody flows, the on-chain ownership layer and the integrations with tokenisation partners, working alongside the core app team.",
    cover: "/images/xorro-hero.webp",
    gallery: ["/images/xorro-hero.webp", "/images/xorro-mobile.webp"],
    logo: "/images/logos/xorro.png",
    links: [
      { label: "xorro.io", href: "https://xorro.io/" },
      { label: "New Social Theory", href: "https://www.newsocialtheory.com/" },
    ],
  },
  {
    slug: "biddify",
    facets: ["crypto", "saas"],
    title: "Biddify",
    tagline: "NFT auctions for celebrities and influencers",
    category: "crypto",
    period: "2021",
    role: "Builder",
    tags: ["NFT", "Auctions", "React", "Ethereum"],
    description:
      "An auction platform where influencers list exclusive photo and video drops as NFTs and fans bid in ETH against a live countdown. Companion to the Influense creator-NFT experiments.",
    cover: "/images/biddify.webp",
    gallery: ["/images/biddify.webp"],
    links: [{ label: "GitHub · influense", href: "https://github.com/aeropriest/influense" }],
  },

  // ───────────────────────────── PRODUCTS & STARTUPS ─────────────────────────────
  {
    slug: "kyozo",
    portrait: true,
    facets: ["mobile", "saas"],
    title: "Kyozo",
    tagline: "Community platform for creatives, from a Flutter app to an API-first backend",
    category: "products",
    period: "2025 – present",
    role: "Head of product & engineering (solo builder)",
    org: "Kyozo, Hong Kong",
    status: "Live on the App Store",
    tags: ["Flutter", "Next.js", "Firebase", "REST API + MCP", "App Clip", "NFC"],
    description:
      "Kyozo helps DJs, labels and cultural organisers run their communities. Members discover and join communities, see upcoming events and keep one inbox; organisers switch to Pro mode for audience, tags, feed, broadcasts and messaging. I built the whole stack: the Flutter iOS/Android app, the web experiences at kyozo.com, and KyozoLoop, an API-first platform with scoped keys, OpenAPI docs and an MCP server so AI agents can manage communities too.",
    highlights: [
      "Shipped 1.0 → 1.3 through App Store review, with Apple sign-in, OTP, invite codes and a native App Clip for tap-to-join",
      "Migrated the app to zero direct database access: everything flows through versioned APIs",
      "Contacts import, NFC join and a per-community ownership and permissions model",
    ],
    cover: "/images/kyozo-ss-explore.webp",
    gallery: [
      "/images/kyozo-ss-explore.webp",
      "/images/kyozo-ss-communities.webp",
      "/images/kyozo-ss-pro.webp",
      "/images/kyozo-ss-studio.webp",
      "/images/kyozo-ss-audience.webp",
      "/images/kyozo-willer.webp",
      "/images/kyozo-space.webp",
    ],
    logo: "/images/logos/kyozo-icon.png",
    links: [
      { label: "kyozo.com", href: "https://www.kyozo.com" },
      { label: "API docs", href: "https://apis.kyozo.com/api-docs" },
    ],
    featured: true,
  },
  {
    slug: "pawme",
    portrait: true,
    facets: ["mobile", "ai"],
    title: "PawMe",
    tagline: "AI health companion for dog and cat owners",
    category: "products",
    period: "2025 – present",
    role: "Founder",
    org: "Ayva Labs",
    status: "Live on App Store & Google Play",
    tags: ["React Native / Expo", "Gemini", "Firebase", "RevenueCat", "Next.js"],
    description:
      "Describe a symptom or snap a photo and PawMe gives a plain-English read on how serious it is. It scans food and barcodes for toxic ingredients, grades gut health, tracks vaccines and medication with reminders, and knows your pet by name. Multi-vendor AI routing (Gemini primary with OpenRouter and Anthropic fallbacks), subscriptions, a marketing site and a win-back email engine all live in the same monorepo.",
    highlights: [
      "Trademark registered in Hong Kong, US filing in progress",
      "Investor deck and go-to-market plan built with FutureProof Group",
      "Over-the-air updates for fast iteration after store review",
    ],
    cover: "/images/pawme-hero.webp",
    gallery: [
      "/images/pawme-ss-home.webp",
      "/images/pawme-ss-food.webp",
      "/images/pawme-ss-toxic.webp",
      "/images/pawme-ss-gut.webp",
      "/images/pawme-site-2026.webp",
    ],
    logo: "/images/logos/pawme-icon.png",
    links: [
      { label: "pawme.io", href: "https://www.pawme.io" },
      { label: "App Store", href: "https://apps.apple.com/app/id6758856073" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ai.ayvalabs.pawme" },
    ],
    featured: true,
  },
  {
    slug: "orbie",
    facets: ["iot", "ai", "mobile"],
    title: "Orbie (OpenPaw)",
    tagline: "Open-source home robot: three hardware generations in eight months",
    category: "products",
    period: "2025 – 2026",
    role: "Founder, hardware + firmware + app",
    org: "Ayva Labs",
    status: "Working prototype, build in public",
    tags: ["ESP32-S3", "ESP-IDF", "KiCad", "3D printing", "Flutter", "BLE", "Vision LLMs"],
    description:
      "A two-wheeled companion robot with a tilting head, custom dot-matrix eyes on a PCB I drew myself, an OV3660 camera, mic, speaker and time-of-flight sensor, all exposed over an HTTP API so any vision model can drive it. Started as RollBot, a BB-8-style rolling robot; V2 was ten hand-built units; V3 is the current companion form. CAD and firmware are public.",
    highlights: [
      "Firmware in ESP-IDF with OTA updates carried by the phone over BLE and Wi-Fi",
      "Flutter app for setup, live video and push-to-talk through a Vercel relay",
      "Fish-Audio cloned voice, Gemini / OpenRouter / Anthropic fallback chain for Q&A",
    ],
    cover: "/images/orbie-render.webp",
    gallery: [
      "/images/orbie-render.webp",
      "/images/orbie-poster.webp",
      "/images/orbie-head.webp",
      "/images/orbie-v3-proto.webp",
      "/images/orbie-v2-units.webp",
      "/images/orbie-exploded.webp",
    ],
    logo: "/images/logos/orbie-icon.png",
    links: [
      { label: "orbierobot.com", href: "https://www.orbierobot.com" },
      { label: "@orbie_robot", href: "https://x.com/orbie_robot" },
      { label: "GitHub · RollBot", href: "https://github.com/aeropriest/RollBot" },
      { label: "Build series", href: "https://www.youtube.com/watch?v=45vGDQbSJQA" },
    ],
    featured: true,
  },
  {
    slug: "fleetclub",
    facets: ["saas", "mobile"],
    title: "Fleet Club Subic Bay",
    tagline: "Website, iOS/Android member app and POS integration for a members-only club",
    category: "products",
    period: "2026",
    role: "CTO (with FutureProof Group)",
    org: "Fleet Club, Philippines",
    tags: ["Next.js 15", "Flutter", "Firebase", "Membroz / KwikPOS", "Client work"],
    description:
      "Digital build for a military-heritage club in the Subic Bay Freeport Zone, Philippines. A Next.js site with Firebase and Genkit, and a Flutter member app for iOS and Android that shares one account with the web and covers events, news, membership tiers, facilities, history and contact. Integrations with the Membroz membership system and KwikPOS handle tokens and payments. Scoped the proposal and SOW with FutureProof Group, then led the delivery.",
    highlights: [
      "Member app: events and RSVPs, news, membership tiers, facilities and account, with Google and email sign-in",
      "Shared Firebase auth and user profiles between web and app",
      "Membroz / KwikPOS membership and point-of-sale routes behind the Next.js API",
    ],
    cover: "/images/fleetclub-hero.webp",
    gallery: [
      "/images/fleetclub-app-0.webp",
      "/images/fleetclub-app-1.webp",
      "/images/fleetclub-app-2.webp",
      "/images/fleetclub-app-3.webp",
      "/images/fleetclub-app-4.webp",
      "/images/fleetclub-hero.webp",
      "/images/fleetclub-hero-2.webp",
    ],
    links: [{ label: "fleetclub.org", href: "https://www.fleetclub.org" }],
    featured: true,
  },
  {
    slug: "yomee",
    facets: ["iot", "mobile"],
    title: "Yomee",
    tagline: "The world's first fully automatic yogurt maker",
    category: "products",
    period: "2018 – 2021",
    role: "Co-founder & Chief Product Officer",
    org: "Lecker Labs, Hong Kong / New York",
    status: "CES 2019 Innovation Awards Honoree",
    tags: ["IoT", "Hardware", "Kickstarter", "iOS + Android app", "BLE"],
    description:
      "Pour in milk, drop in a Yomee pod, pick Greek, plain or stirred from the app, and six hours later it's ready and chilled. Kickstarter funded by 1,002 backers, a CES Innovation Award, a Food-X accelerator stint in New York and about $3M raised in equity, grants and awards. The company closed during COVID-19.",
    highlights: [
      "Planned and ran a crowdfunding launch worth ~$250K including pre-orders",
      "Secured $50K in government funding for the patent and executed the patent strategy",
      "Designed the companion app: live cook status, recipe book, pod subscriptions and payments",
    ],
    cover: "/images/yomee-banner.webp",
    gallery: [
      "/images/yomee-app-home.webp",
      "/images/yomee-app-recipes.webp",
      "/images/yomee-app-pods.webp",
      "/images/yomee-app-prefs.webp",
      "/images/yomee-app-payment.webp",
      "/images/yomee-site.webp",
    ],
    links: [
      { label: "Kickstarter", href: "https://www.kickstarter.com/projects/leckerlabs/yomee" },
      { label: "TechCrunch", href: "https://techcrunch.com/2017/09/26/yomee-wants-to-take-the-guesswork-out-of-culturing-yogurt-at-home" },
      { label: "Website (archive)", href: "https://www-yomeeyogurt-com.vercel.app/" },
    ],
    featured: true,
  },
  {
    slug: "ezeecube",
    facets: ["iot", "mobile"],
    title: "EzeeCube",
    tagline: "Stackable home media hub that syncs every photo from every phone to your TV",
    category: "products",
    period: "2014 – 2018",
    role: "Co-founder & Chief Product Officer",
    org: "Ezee Systems, Hong Kong / San Francisco",
    status: "Exited 2018",
    tags: ["Hardware", "Indiegogo", "XBMC / Kodi", "iOS + Android", "Amazon Launchpad"],
    description:
      "Built on weekends while at Goldman Sachs to get our family photos onto the living-room TV, then launched on Indiegogo where it raised $121K against a $75K goal. A modular box powered by XBMC that de-duplicates, face-groups and geo-tags photos, with stackable modules for storage and disc players. Covered by TechCrunch, Engadget and New Atlas.",
    highlights: [
      "Shipped 3,500+ units and launched on Amazon Launchpad",
      "Accelerator in San Francisco, scaled to a $5M valuation and exited in 2018",
      "Phone apps for sync plus a 10-foot TV interface",
    ],
    cover: "/images/ezeecube-phone-tv.webp",
    gallery: ["/images/ezeecube-phone-tv.webp", "/images/ezeecube-stack.webp", "/images/ezeecube-indiegogo.webp", "/images/ezeecube-tv-post.webp"],
    links: [
      { label: "TechCrunch", href: "https://techcrunch.com/2014/07/31/ezeecube/" },
      { label: "Engadget", href: "https://www.engadget.com/2014-07-04-ezeecube-retro-gaming-stackable-media-hub.html" },
      { label: "YouTube", href: "https://www.youtube.com/@Ezeecube" },
    ],
    featured: true,
  },
  {
    slug: "flowsports",
    portrait: true,
    facets: ["mobile", "ai"],
    title: "FlowTennis & FlowPickle",
    tagline: "An AI coach for racket sports that cuts the dead time out of your session",
    category: "products",
    period: "2026",
    role: "Founder & builder",
    org: "FlowSports",
    status: "TestFlight",
    tags: ["SwiftUI", "On-device audio ML", "Flutter", "Kotlin", "Firebase"],
    description:
      "Mount a phone courtside, play, and get back only your shots in slow motion. Strikes are detected from audio on the device, dead time is cut, and pose-based drills score your form. FlowTennis is native iOS; a pure-JVM Kotlin engine ports the detection to Android; FlowPickle brings the same to pickleball in Flutter.",
    cover: "/images/flowtennis-ss-session.webp",
    gallery: ["/images/flowtennis-ss-home.webp", "/images/flowtennis-ss-session.webp"],
    logo: "/images/logos/flowtennis-icon.png",
    links: [{ label: "flowsports.app", href: "https://www.flowsports.app" }],
    featured: true,
  },

  // ───────────────────────────── AI & APPS ─────────────────────────────
  {
    slug: "khiri",
    facets: ["ai", "saas"],
    title: "AI travel packages for Khiri Travel",
    tagline: "Every inbound enquiry answered with a tailored itinerary in minutes",
    category: "ai",
    period: "2023 – 2024",
    role: "Product & lead developer",
    org: "Axar Soft",
    tags: ["LLM", "Text-to-image", "Next.js", "Email parsing"],
    description:
      "One of Thailand's top travel agencies wanted faster sales responses. The system parses incoming enquiry emails, tags them, searches the package database, drafts the reply with an LLM and adds existing or AI-generated imagery; agents just approve or edit.",
    cover: "/images/khiri-travel.webp",
    gallery: ["/images/khiri-travel.webp"],
  },
  {
    slug: "moneymaid",
    portrait: true,
    facets: ["ai"],
    title: "MoneyMaid GPT home assistant",
    tagline: "Voice-first Telegram assistant for a Hong Kong supermarket",
    category: "ai",
    period: "2023",
    role: "Product & lead developer",
    org: "Axar Soft",
    tags: ["Telegram", "Speech-to-text", "Vision", "GPT", "Receipts OCR"],
    description:
      "Accepts voice commands to manage family chores, builds shopping lists from recipes, scans receipts to track monthly expenses and generates detailed receipts with photos. Grew out of FamilyGPT, an open-source multimodal co-pilot for families I built in 2023.",
    cover: "/images/moneymaid-1.webp",
    gallery: ["/images/moneymaid-1.webp", "/images/moneymaid-2.webp", "/images/moneymaid-3.webp"],
    links: [{ label: "FamilyGPT post", href: "https://x.com/jaiswalashok" }],
  },
  {
    slug: "profile-pitch",
    facets: ["ai", "saas"],
    title: "Profile Pitch Pro",
    tagline: "LLM-generated lawyer pitch profiles for a top HK law firm",
    category: "ai",
    period: "2023",
    role: "Product & lead developer",
    org: "Axar Soft",
    tags: ["GPT", "Web scraping", "Next.js"],
    description:
      "Marketing needed tailor-made pitch profiles for each deal. The tool scrapes a competing lawyer's public profile, extracts differentiating factors and keywords with GPT, then rewrites the firm's own lawyer profile to match the brief, with cost tracking per generation.",
    cover: "/images/profile-pitch-1.webp",
    gallery: ["/images/profile-pitch-1.webp", "/images/profile-pitch-2.webp"],
  },
  {
    slug: "mettaa",
    facets: ["ai", "mobile"],
    title: "SuperKidz & Mettaa Games",
    tagline: "Full-body-tracking AR games that get kids moving while they learn",
    category: "ai",
    period: "2022 – 2023",
    role: "Product & lead developer",
    org: "Lidqid Life · Axar Soft",
    status: "Live on the App Store",
    tags: ["TensorFlow", "Pose tracking", "AR", "iOS", "AirPlay"],
    description:
      "Stream the phone to the TV, point the camera at the kid and they're inside an ocean or jungle, jumping and reaching to spell words and solve maths puzzles. Built for a Hong Kong education centre, then released as SuperKidz and GoGoBoBo for iPad. A sister project, Virtual Fitness Assistant, counts jumping jacks, wall-sits and lunges from the webcam.",
    cover: "/images/mettaa-ar-game.webp",
    gallery: ["/images/mettaa-ar-game.webp", "/images/superkidz.webp", "/images/gogobobo.webp", "/images/fitness-assistant.webp"],
    links: [
      { label: "SuperKidz on App Store", href: "https://apps.apple.com/hk/app/superkidz-education-mini-games/id1613737876?l=en-GB" },
      { label: "GitHub · FitnessAssistant", href: "https://github.com/aeropriest/FitnessAssistant" },
    ],
  },
  {
    slug: "kidschat",
    facets: ["ai", "saas"],
    title: "Context-aware reading companion",
    tagline: "Kids ask questions, the answers stay inside the book they're reading",
    category: "ai",
    period: "2023 – 2024",
    role: "Builder",
    org: "Axar Soft",
    tags: ["RAG", "LLM", "Voice", "Next.js"],
    description:
      "Pick a book from the shelf, ask anything by voice or text, and the model answers only from that text, admitting when something isn't in it. A proof of concept for a multilingual, context-aware educational IoT toy for children. The same RAG stack powers askasok.chat, a document assistant for SOPs and business documentation.",
    cover: "/images/familygpt-books-chat.webp",
    gallery: ["/images/familygpt-books-chat.webp", "/images/askasok.webp"],
    links: [{ label: "GitHub · askasok", href: "https://github.com/aeropriest/askasok" }],
  },
  {
    slug: "faceflow",
    facets: ["ai", "saas"],
    title: "FaceFlow POS & Buddy Live",
    tagline: "Face-recognition ordering for F&B and a multi-persona AI for kids",
    category: "ai",
    period: "2025 – 2026",
    role: "Builder",
    org: "Axar Soft",
    tags: ["Face recognition", "POS", "Live AI", "Next.js 14"],
    description:
      "FaceFlow is a prototype point-of-sale that recognises returning customers and surfaces their usual order, built to run on an iPad or a camera-equipped POS screen. Buddy Live is a real-time multi-persona AI chat for children with seven characters, from a nanny to a space traveller.",
    cover: "/images/axarsoft.webp",
    gallery: ["/images/axarsoft.webp"],
    links: [
      { label: "GitHub · FaceFlow", href: "https://github.com/aeropriest/FaceFlow" },
      { label: "Buddy Live", href: "https://axtoralabs.vercel.app" },
    ],
  },
  {
    slug: "lidqid",
    facets: ["mobile"],
    title: "Lidqid",
    tagline: "Hydration app and the brand behind the kids' AR titles",
    category: "ai",
    period: "2020 – 2022",
    role: "Founder & builder",
    org: "Lidqid Life",
    status: "Live on the App Store",
    tags: ["iOS", "React Native", "Health"],
    description:
      "Enter age, weight, height and gender and Lidqid tells you how much water you should be drinking, then tracks it. The publishing brand later carried CoinWatch, GoGoBoBo and SuperKidz to the App Store.",
    cover: "/images/lidqid.webp",
    gallery: ["/images/lidqid.webp"],
    links: [{ label: "App Store", href: "https://apps.apple.com/hk/app/lidqid/id1523789118?l=en-GB" }],
  },
  {
    slug: "web-work",
    facets: ["saas"],
    title: "Landing pages & SaaS tools",
    tagline: "Unilearn, Global Internship Initiative, SupaSport, BiteBuddy, AI portraits",
    category: "ai",
    period: "2023 – 2026",
    role: "Builder",
    org: "Axar Soft",
    tags: ["Next.js", "Firebase", "Telegram bots", "Stable Diffusion"],
    description:
      "A run of smaller builds: a project-based learning platform, a golf internship initiative, a sports-lesson management system with coach and client dashboards, a Telegram meal-planning bot, an AI résumé and cover-letter generator, and a Stable Diffusion model fine-tuned on my own face for dating-profile photos.",
    cover: "/images/unilearn.webp",
    gallery: ["/images/unilearn.webp", "/images/globalgolfintern.webp", "/images/ai-portraits.webp"],
    links: [
      { label: "Unilearn", href: "https://unilearn-lander.vercel.app/" },
      { label: "Global Golf Intern", href: "https://globalgolfintern.vercel.app" },
      { label: "SupaSport", href: "https://supasport.vercel.app" },
    ],
  },

  // ───────────────────────────── ENTERPRISE ─────────────────────────────
  {
    slug: "cathay",
    facets: ["ai"],
    title: "Cathay Pacific",
    tagline: "AI-powered parts maintenance for a fleet of 200+ aircraft",
    category: "enterprise",
    period: "Oct 2022 – Mar 2023",
    role: "Technical Product Manager",
    org: "Cathay Pacific, Hong Kong",
    tags: ["AI", "Aviation", "Enterprise", "Agile"],
    description:
      "Conceptualised and drove an AI-assisted parts maintenance system, working with aeronautical and technical teams to understand their maintenance challenges and running sprint planning across departments.",
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-600/30",
  },
  {
    slug: "goldman",
    facets: [],
    title: "Goldman Sachs",
    tagline: "Video-conferencing platform for 30,000 employees",
    category: "enterprise",
    period: "Jun 2012 – May 2015",
    role: "Product Analyst, Technology",
    org: "Goldman Sachs, Hong Kong",
    tags: ["Enterprise", "Unified communications", "Operations"],
    description:
      "Introduced a unified dial-in number across 800+ video-conferencing facilities, saving an estimated 20,000 hours a year across two million calls in six months. Led construction of three new facilities at 25% lower cost and rolled out remote monitoring for 300 rooms, saving over $2M a year in operating costs.",
    accent: "from-sky-500/30 via-indigo-500/20 to-blue-700/30",
  },
  {
    slug: "early",
    facets: [],
    title: "Early years: multimedia & Win32",
    tagline: "WASP3D, muvee, and CodeProject articles still read today",
    category: "enterprise",
    period: "2002 – 2012",
    role: "Software engineer",
    org: "Delhi · Singapore · New York · Beijing",
    tags: ["C++ / MFC", "Multimedia", "Broadcast graphics", "Open source"],
    description:
      "Started in broadcast graphics at WASP3D in Delhi, moved to video-editing software at muvee in Singapore, then startups in New York and Beijing before an MBA at HKUST. Along the way: a hand-coded 3D iTunes-style cover flow in C++ and CodeProject articles on skinned controls with 500K+ views.",
    cover: "/images/albumviewer.webp",
    gallery: ["/images/albumviewer.webp", "/images/codeproject-articles.webp"],
    links: [{ label: "CodeProject", href: "https://www.codeproject.com/script/Articles/MemberArticles.aspx?amid=31299" }],
  },
];

export const categories: { id: Category; label: string; blurb: string }[] = [
  {
    id: "crypto",
    label: "Crypto & Web3",
    blurb: "Wallets, NFT collections and marketplaces, trackers and tokenised equity. Product lead at RioDeFi, Web3 lead at Xorro, and my own builds in between.",
  },
  {
    id: "products",
    label: "Products & startups",
    blurb: "Things I founded or own end to end: two crowdfunded hardware products, a community platform, an AI pet app and a robot.",
  },
  {
    id: "ai",
    label: "AI & apps",
    blurb: "Client and side projects since 2022: LLM tools, body-tracking games, bots and store-listed apps.",
  },
  {
    id: "enterprise",
    label: "Enterprise & early career",
    blurb: "Aviation, investment banking and the multimedia years before that.",
  },
];

export const timeline = [
  { year: "2026", text: "FlowTennis, FleetClub, Kyozo 1.3, PawMe trademark, Orbie V3" },
  { year: "2025", text: "Kyozo platform from zero; PawMe launches; Xorro Web3 lead; OpenPaw robot V1 → V2; Axar NFT" },
  { year: "2023 – 24", text: "Axar Soft: LLM products for travel, legal and retail clients; FamilyGPT" },
  { year: "2022", text: "Cathay Pacific AI maintenance; CoinWatch, SuperKidz" },
  { year: "2020 – 22", text: "RioDeFi: RioWallet, Rio tracker, GoingApe NFT" },
  { year: "2018 – 21", text: "Lecker Labs: Yomee, CES 2019 honoree, Food-X New York" },
  { year: "2014 – 18", text: "Ezee Systems: EzeeCube on Indiegogo, Amazon Launchpad, exit" },
  { year: "2012 – 15", text: "Goldman Sachs, Hong Kong" },
  { year: "2012", text: "MBA, Hong Kong University of Science and Technology" },
];
