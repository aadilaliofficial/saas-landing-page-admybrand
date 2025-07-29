# ADmyBRAND AI Suite – SaaS Landing Page

A modern, high-performance landing page for **ADmyBRAND AI Suite**, a fictional AI-powered marketing platform. Built with **Next.js 14+ App Router**, **Tailwind CSS**, and interactive animations.

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/docs/app)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom with utility classes
- **Animations**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/)
- **Validation**: [Zod](https://zod.dev/)
- **Image Optimization**: `next/image`
- **State Management**: Local component state

---

## 📁 Folder Structure (App Router)

```
my-app/
├── app/
│   ├── layout.jsx
│   ├── page.jsx (HomePage)
│   └── components/
│       ├── HeroSection.jsx
│       ├── FeaturesSection.jsx
│       ├── PricingSection.jsx
│       ├── TestimonialsSection.jsx
│       ├── FAQSection.jsx
│       ├── Footer.jsx
│       ├── Button.jsx
│       └── ...
├── public/
│   └── images/
│       └── hero.png
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 💡 Features

- 💥 Animated hero section with GSAP
- 🧠 Feature highlights with modern layout
- 💳 Pricing section with hover effects and neon highlights
- 💬 Interactive FAQ accordion using GSAP
- ✅ Fully responsive across mobile, tablet, and desktop
- 🌑 Dark-themed neon UI

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/admybrand-landing.git

# Go to project directory
cd admybrand-landing

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🌐 Image Optimization

External domains must be allowed in `next.config.js`:

```js
// next.config.js
module.exports = {
  images: {
    domains: ['www.zdnet.com'],
  },
}
```

---

## 📸 Hero Image

Make sure to add the hero image in `/public/images/` or use external optimized images (as done with ZDNet).

```jsx
<Image
  src="https://www.zdnet.com/a/img/resize/ada36a8ca094a512f972578b7b4742f38ac90b5c/2024/05/28/95683789-ebda-4272-964e-ce5d1a5a000f/gettyimages-1888972727.jpg?auto=webp&width=1280"
  alt="AI Preview"
  width={500}
  height={500}
  className="rounded-xl opacity-90"
/>
```

---

## 📦 Dependencies

```json
"dependencies": {
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "gsap": "^3.12.5",
  "zod": "^3.22.2",
  "tailwindcss": "^3.4.1"
}
```

---

## ✨ Credits

- Design & Development: [Your Name or Team]
- Illustration: [Source if applicable]
- Image: © ZDNet / Getty Images (for demo only)

---

## 📄 License

This project is for learning/demo purposes. Commercial use of images or brand references may require appropriate licenses or permissions.

---
