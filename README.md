<div align="center">

# 👑 IRMIDEN ($IMD)
### The Legendary 2020 TRON Token is Officially Back

[![Network](https://img.shields.io/badge/Network-TRON%20(TRC20)-eb0029?style=for-the-badge&logo=tron&logoColor=white)](https://tronscan.org/#/token20/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ)
[![Launchpad](https://img.shields.io/badge/Launchpad-SunPump.meme-75f228?style=for-the-badge&logoColor=black)](https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ)
[![Community](https://img.shields.io/badge/Community-100%25%20Organic-black?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/+W1i-pq2b7fE1NTVk)
[![Twitter](https://img.shields.io/badge/X-@Irmiden__TRON-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Irmiden_TRON)

<br/>

<img src="./public/hero-bg.webp" alt="IRMIDEN Hero Banner" width="100%" style="border-radius: 16px; border: 2px solid rgba(117,242,40,0.4);" />

<br/>
<br/>

**Official Contract Address (TRC20):**
```text
TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ
```

[Trade on SunPump](https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ) • [Telegram Community](https://t.me/+W1i-pq2b7fE1NTVk) • [Official X (Twitter)](https://x.com/Irmiden_TRON) • [Tronscan Explorer](https://tronscan.org/#/token20/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ)

</div>

---

## 📖 The Story of IRMIDEN ($IMD)

**IRMIDEN ($IMD)** first debuted on **August 15, 2020** as an OG TRC10 token (Token ID: `1003154`) on the TRON blockchain during the early days of TRON DeFi. 

After 6 years of crypto history, the **original 2020 developer** has officially revived **$IMD** as a modern **TRC20** token on **SunPump**, TRON's premier fair-launch platform. 

- **Original Developer Led:** No imposters, no forks — created and backed by the authentic 2020 founder.
- **100% Organic Growth:** No paid caller dumps, no VC allocations, no presale unlocks.
- **Fair Launch:** Distributed entirely through SunPump's fair bonding curve mechanism until graduation into SunSwap DEX liquidity.

<br/>

<div align="center">
  <img src="./public/coin.png" alt="IRMIDEN Gold Coin" width="180" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/thumbs-up.png" alt="IRMIDEN Frog Character" width="180" />
</div>

---

## 💎 Tokenomics & Specifications

| Parameter | Specification |
| :--- | :--- |
| **Token Name** | IRMIDEN |
| **Ticker Symbol** | `$IMD` |
| **Blockchain Network** | TRON (TRC20) |
| **Contract Address** | `TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ` |
| **Total Supply** | 1,000,000,000 (1 Billion $IMD) |
| **Decimals** | 18 |
| **Buy / Sell Tax** | 0% / 0% |
| **Launchpad Platform** | SunPump.meme |
| **Graduation Milestone** | SunSwap DEX (103,000 TRX reserve target) |

---

## ⚡ Core Website Features

- **Live SunPump Market Data:** Internal API proxy (`/api/token-data`) fetching real-time market cap, price in TRX & USD, liquidity, TRX reserves, and live bonding curve completion progress with two-decimal precision.
- **Interactive FAQ Accordion:** Clean, collapsible accordion questions closed by default with customized `$IMD` shield icon branding.
- **Full-Width Panoramic Tokenomics & Social Section:** Wide responsive banner featuring 3D coin visual, 1-click clipboard contract copying, and social channels.
- **Sticky Glassmorphic Navigation:** Non-intrusive sticky header with brand icon, smooth section anchoring (`#about`, `#roadmap`, `#tokenomics`, `#faq`), and responsive mobile drawer.
- **Atmospheric Visuals:** Emerald-green radial lighting, jagged mountain graphics (`mountain-1.png` & `mountain-2.png`), custom Gelato Sans typography, and Lenis smooth scrolling.
- **Search Engine Optimization (SEO):** OpenGraph sharing tags with high-res banner art (`/hero-bg.png`), Twitter large cards, Schema.org JSON-LD structured data, automatic `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Typography:** Gelato Sans, Master Victory, Pumpkins Brush, Lean, Kanit

---

## 📂 Project Directory Structure

```text
IRMIDEN/
├── app/
│   ├── api/
│   │   └── token-data/       # SunPump live price & bonding curve API proxy
│   ├── globals.css           # Global theme variables & neon glow utilities
│   ├── layout.tsx            # Root layout, fonts, SEO & OpenGraph metadata
│   ├── page.tsx              # Landing page layout & section composition
│   ├── robots.ts             # Dynamic robots.txt generation
│   └── sitemap.ts            # Dynamic sitemap.xml generation
├── components/
│   ├── navbar.tsx            # Sticky navigation bar with mobile drawer
│   ├── hero-section.tsx      # Hero banner with primary CTA & proof badge
│   ├── about-section.tsx     # 2020 origin story & verification proof
│   ├── roadmap-section.tsx   # 3-phase strategic roadmap
│   ├── tokenomics-social-section.tsx # Full-width tokenomics & social strip
│   ├── faq-section.tsx       # 4 FAQ accordions & live SunPump ticker feed
│   ├── footer-section.tsx    # Branded mountain landscape & crown footer
│   └── ca-pill.tsx           # Interactive 1-click contract copy pill
├── public/
│   ├── hero-bg.png           # High-resolution hero banner & share image
│   ├── coin.png              # 3D $IMD Gold Coin
│   ├── thumbs-up.png         # IRMIDEN Frog Mascot
│   ├── icon.png              # Official $IMD Shield Icon
│   ├── crown icon.png        # Emerald Crown Asset
│   ├── mountain-1.png        # Left Mountain Footer Graphic
│   └── mountain-2.png        # Right Mountain Footer Graphic
└── lib/
    ├── fonts.ts              # Local typography configuration
    └── utils.ts              # ClassName merge utilities
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18.0 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayanmal1k/IRMIDEN.git
   cd IRMIDEN
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🔗 Official Community & Links

- **Telegram:** [https://t.me/+W1i-pq2b7fE1NTVk](https://t.me/+W1i-pq2b7fE1NTVk)
- **X (Twitter):** [https://x.com/Irmiden_TRON](https://x.com/Irmiden_TRON)
- **SunPump Token Page:** [https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ](https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ)
- **Tronscan Explorer:** [https://tronscan.org/#/token20/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ](https://tronscan.org/#/token20/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>👑 STRONGER TOGETHER • IRMIDEN ($IMD) 2020 - 2026</sub>
</div>
