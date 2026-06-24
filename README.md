# 🌿 Fern & Flourish Co. — Nature-Inspired Planner Shop

A beautiful e-commerce shop selling printable planners infused with wildflower aesthetics, daily affirmations, and productivity tracking. Built for intentional-living enthusiasts who want their planning system to feel calming, optimistic, and grounded in nature.

## ✨ What We Sell

| Product | Description | Formats |
|---------|-------------|---------|
| **Wildflower Daily Planner** | 365-day planner with daily affirmations, hourly scheduling, gratitude prompts, and wildflower illustrations | Digital PDF ($15) · Printed ($35) |
| **Forest Whispers Weekly Journal** | Forest-inspired weekly spreads with reflective prompts, dotted journaling pages, and botanical sketches | Digital PDF ($12) · Printed ($28) |
| **Botanical Sticker Sheets** | Hand-drawn leaves, flowers, and forest elements to personalize your planner | Digital PNG ($5) · Printed ($12) |

## 🎨 Brand

- **Aesthetic**: Wildflowers, forests, botanical illustrations, elegant typography
- **Colors**: Sage green (#8A9A5B), warm brown (#8B7355), cream (#FFF8F0), dusty rose (#C9A9A6), lavender (#B2A4B4)
- **Typography**: Playfair Display (headings), Source Sans 3 (body)
- **Target audience**: Creative professionals & intentional-living enthusiasts, primarily women 25–45

## 🛠 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: EJS templates, custom CSS
- **Payments**: Stripe (payment links & checkout)
- **Hosting**: Ready to deploy

## 🚀 Getting Started

```bash
npm install
cp .env.example .env   # Add your Stripe keys
npm start
```

## 📁 Project Structure

```
fern-flourish-shop/
├── data/
│   └── products.json      # Product catalog
├── public/
│   ├── assets/            # Images, planner PDFs
│   └── css/               # Stylesheets
├── views/
│   ├── layout.ejs         # Base template
│   ├── index.ejs          # Home page
│   ├── shop.ejs           # Shop grid
│   ├── product.ejs        # Product detail
│   ├── about.ejs          # About us
│   └── contact.ejs        # Contact form
├── server.js              # Express app
└── package.json
```

## 📋 Roadmap

- [ ] Stripe payment link integration
- [ ] Digital download delivery system
- [ ] Printed copy ordering via print-on-demand
- [ ] Seasonal planner collections
- [ ] Customer accounts & order history

---

*Made with 🌼 by Fern & Flourish Co.*