# Xuan Duc Nguyen – Cinematic Portfolio & Landing Page

A high-fidelity, cinematic React landing page featuring "liquid-glass" aesthetics, continuous light refraction effects, and dynamic scroll animations. This project serves as a digital portfolio and creative studio showcase, designed to feel premium, moody, and deeply immersive.

## ✨ Features

- **Liquid-Glass UI System:** Custom CSS implementations of frosted glass (`.liquid-glass`, `.liquid-glass-strong`) that use luminosity blending, backdrop filters, and gradient masks to create seamless, iridescent light refractions.
- **Cinematic Video Integration:** Full-bleed background videos mapped with smooth gradient masking to eliminate seams and create a continuous visual flow across sections.
- **Framer Motion Animations:** Custom staggered pull-up text, word-by-word blur reveals (`BlurText`), and scroll-linked opacity transformations.
- **Modern Typography:** Carefully paired Google Fonts (`Almarai` for body text and `Instrument Serif` for beautiful italicized headings).
- **Responsive Layouts:** Perfectly balanced padding, negative space, and responsive grids optimized for all screen sizes.

## 🛠 Technologies Used

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3 (with custom layers and utility extensions)
- **Animation:** Framer Motion
- **Icons:** Lucide React & Material UI SVGs
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nguyenxuanduc1999/landingpage.git
   cd landingpage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## 🔁 CI/CD

GitHub Actions is configured for automated checks and deployment:

- **CI (`.github/workflows/ci.yml`)**
  - Runs on every pull request and on pushes to `main`
  - Installs dependencies, runs ESLint, and builds the project
- **CD (`.github/workflows/firebase-hosting-merge.yml`)**
  - Runs on pushes to `main`
  - Installs dependencies, runs ESLint, builds, and deploys to Firebase Hosting
- **PR Preview (`.github/workflows/firebase-hosting-pr-preview.yml`)**
  - Runs on pull requests from this repository
  - Installs dependencies, runs ESLint, builds, and deploys a 7-day Firebase preview channel (`pr-<PR_NUMBER>`)

### Required GitHub Secrets

For deployment to Firebase Hosting, add this repository secret:

- `FIREBASE_SERVICE_ACCOUNT_AI_PROJECT_BFDA4`: Firebase service account JSON for project `ai-project-bfda4`

## 🎨 Design Philosophy

The project leans heavily on the "Aetheris Voyage" aesthetic: avoiding flat, generic colors in favor of a warm cream palette (`#DEDBC8`) against deep blacks. It avoids standard placeholder components by relying on highly textured fractal noise overlays, exact visual symmetry, and continuous fluid backgrounds.

## 👤 About the Author
**Xuan Duc Nguyen** is a self-taught director with expertise in color grading, visual effects, and narrative design. He has worked with top-tier production houses including Parallax (Berlin) and Noir Studio (Paris), creating award-winning work across the globe.

---
*Built with React & Vite.*
