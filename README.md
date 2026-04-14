# K-Medical 2026 — Global KOL Exchange Website

Official landing page for the **2026 KSAPS-VSAPS Global KOL Exchange & K-Medical Summer Camp** events.

## 🌐 Live Site
> Deployed at: [your-project.vercel.app](https://your-project.vercel.app)

## 📅 Events

| # | Event | Date | Location |
|---|---|---|---|
| 01 | VSAPS-KSAPS Summer Camp + Media Conference | 2026.08.28–30 | Ho Chi Minh, Vietnam |
| 02 | KSAPS-VSAPS KOL Exchange | 2026.10.30–11.01 | 175 Military Hospital, Vietnam |

## 🌏 Languages

The site supports two languages:
- **한국어** (Korean) — default
- **English**

Language is toggled via the EN / 한국어 switch in the navbar, and saved to `localStorage`.

## 🗂 Project Structure

```
Korea Event/
├── index.html          # Main bilingual landing page
├── css/
│   └── style.css       # Custom CSS (design tokens, animations)
├── js/
│   └── main.js         # Bilingual toggle, scroll effects, counters
├── images/
│   ├── hero-bg.jpg     # Seoul hero background
│   ├── event1-hcm.jpg  # Ho Chi Minh event image
│   ├── event2-hospital.jpg # 175 Military Hospital
│   ├── kmaster-zone.jpg    # K-Master Zone
│   └── logo.png        # K-Medical logo
├── vercel.json         # Vercel deployment config
└── README.md
```

## 🚀 Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Deploy (zero config needed)

## 💻 Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve .
```

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#003176` | Navy blue — headings, buttons |
| `--secondary` | `#b80049` | Magenta — CTAs, accents |
| `--tertiary` | `#3b00a1` | Purple — Event 2 card |
| `--surface` | `#f7f9fb` | Page background |

**Fonts:** Manrope (headlines) + Plus Jakarta Sans (body) + Noto Sans KR (Korean)

## 🤝 Partners
- **KSAPS** — Korean Society of Aesthetic Plastic Surgeons
- **VSAPS** — Vietnam Society of Aesthetic Plastic Surgeons
- **Bundang SNU Hospital**
- **175 Military Hospital** (Vietnam)

## 📦 Brands
Hironic · Wontech · NeoDoctor · AesthePharm · RoseLab · Osstem Pharma

---
*Built with ❤️ for K-Medical Global 2026*
