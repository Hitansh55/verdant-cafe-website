# Verdant Cafe | Luxury Landing Page & 3D Menu



A highly interactive, ultra-premium landing page built for a luxury specialty coffee and matcha cafe. Designed with modern aesthetics, cinematic photography, and buttery smooth animations.

The centerpiece of this project is the **Interactive 3D Menu Book**, which allows users to scroll to physically turn the pages of the menu in a realistic 3D space.

## ✨ Key Features

- **Interactive 3D Menu Book**: Scroll-driven 3D page flips using GSAP ScrollTrigger and CSS `preserve-3d`.
- **Cinematic Hero Section**: Oversized typography, floating elements, and a stunning full-screen background image.
- **Infinite Gallery Marquee**: A seamless, horizontally scrolling image gallery powered by Framer Motion.
- **Buttery Smooth Scrolling**: Integrated Lenis scroll for a premium, native-feeling scroll experience.
- **Fully Responsive Layout**: Intelligent fallbacks for mobile devices. The complex 3D book smoothly degrades into a highly readable, snap-scrolling horizontal stack on phones.
- **Modern UI Overlays**: Frosted glass (backdrop-blur) navigation bars, floating product cards, and a gorgeous full-screen animated mobile menu overlay.
- **Netlify Ready**: Pre-configured with a `netlify.toml` for instant, zero-config deployment.

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hitansh55/verdant-cafe-website.git
   cd verdant-cafe-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Hero.jsx                 # Cinematic landing section
│   ├── Navigation.jsx           # Glassmorphism navbar & mobile overlay menu
│   ├── Gallery.jsx              # Infinite scrolling image marquee
│   ├── Reviews.jsx              # Customer testimonials grid
│   ├── FloatingProductCard.jsx  # Floating signature item callout
│   ├── Footer.jsx               # Minimalist luxury footer
│   └── MenuBook/                # 3D Interactive Menu Components
│       ├── MenuBook.jsx         # Core GSAP scroll timeline and container
│       ├── BookPage.jsx         # Individual 3D flipping page
│       ├── ArtworkLayout.jsx    # Left-side full image layouts
│       ├── MenuCategoryLayout.jsx # Right-side typography-heavy text lists
│       └── menuData.js          # Menu items, prices, and image mapping
├── App.jsx                      # Main assembly & Lenis initialization
├── index.css                    # Tailwind v4 configuration & custom utilities
└── main.jsx                     # React DOM entry
```

## 🎨 Design System
The project uses a highly customized, nature-inspired palette tailored for a high-end matcha and coffee shop:
- `primary-green`: `#355E3B`
- `secondary-green`: `#264E36`
- `cream`: `#F7F4ED`
- `dark`: `#1A1A1A`

Typography relies heavily on **Cormorant Garamond** for elegant, oversized serif headings, paired with **Inter** for clean, highly legible sans-serif body text.

---

*Designed and developed as a premium, state-of-the-art web experience.*
