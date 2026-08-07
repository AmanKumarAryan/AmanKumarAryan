<div align="center">

# Aman Kumar Aryan — Portfolio

**AI/ML engineer in the making · Building intelligent systems that learn**

A self-taught AI/ML engineer's portfolio — a single-page site that pulls **live data from real platforms** (GitHub, Hugging Face, LeetCode) instead of static screenshots.

[Live Demo](https://github.com/AmanKumarAryan/portfolio) · [X / Twitter](https://x.com/AmanAryan__) · [GitHub](https://github.com/AmanKumarAryan)

</div>

---

## ✨ Highlights

- **Live data, not screenshots** — contribution graphs, Hugging Face models/datasets, and LeetCode stats are fetched from the real accounts at request time
- **3D flip card** — the About portrait flips to a "proof card" with a name, tagline, and tech chain
- **Full-screen animated menu** — Anton display type, staggered reveals, smooth Lenis scrolling
- **AI/ML-first stack section** — a curated list of the tools actually shipped with (no fluff)

## 🧱 Built With

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 · Motion (Framer Motion) |
| Data | RTK Query · Lenis smooth scroll |
| Platform | Vercel |

## 📁 Project Structure

```
apps/web/
├── app/
│   ├── page.tsx              # Home page — all sections composed here
│   ├── layout.tsx            # Fonts (Geist, Baloo 2, Anton, Give You Glory), providers
│   └── api/                  # Server routes feeding live data
│       ├── github/contributions/   # Scrapes GitHub's contribution calendar
│       ├── huggingface/            # HF models + datasets for the account
│       └── leetcode/               # LeetCode profile stats
├── public/
│   ├── assets/               # Images, social icons, tech icons
│   └── techIcons/
├── redux/                    # RTK Query setup
└── src/
    ├── @components/          # Section components (Hero, About, Technologies, …)
    ├── @core/                # Section wrapper, fadeUp animation
    └── @lib/                 # GitHub data helpers
```

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/AmanKumarAryan/portfolio.git
cd portfolio/apps/web

# 2. Install
npm install

# 3. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## 🔧 Configuration

All external profiles are hardcoded in one place:

| What | Where |
| --- | --- |
| GitHub username | `src/@lib/github.ts` |
| Hugging Face author | `app/api/huggingface/route.ts` |
| LeetCode profile | `src/@components/grindCards.tsx` |
| Social links | `src/@components/navbar.tsx`, `footer.tsx` |

No environment variables are required — everything talks to public APIs.

## ☁️ Deploy on Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Set **Root Directory** to `apps/web` (monorepo layout)
3. Deploy — no env vars needed

The `vercel.json` at the repo root pins the framework preset to Next.js.

## 📄 Sections

| Section | What it does |
| --- | --- |
| Hero | Name, intro, portrait |
| About | Story, flip card, education, contact, languages |
| THE STACK | Curated AI/ML tech list with expandable modal |
| Projects | Featured work |
| MODELS & DATA | Live Hugging Face models + datasets |
| THE GRIND | Live GitHub contributions + LeetCode + Deep-ML |
| Thoughts | Blog posts |
| Contact | Email + socials |

## 🛣️ Roadmap

- [ ] Resume download (CV in `public/resume/`)
- [ ] More project case studies
- [ ] Blog with actual articles

## 📬 Contact

- **Email:** [amankumararyan.dev@gmail.com](mailto:amankumararyan.dev@gmail.com)
- **X / Twitter:** [@AmanAryan__](https://x.com/AmanAryan__)
- **GitHub:** [AmanKumarAryan](https://github.com/AmanKumarAryan)

---

<div align="center">

**Built with intent.** Every number on this site is pulled live — no screenshots, no fake stats.

</div>
