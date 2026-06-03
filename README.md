# Obsidian Noir: Minimalist Task Manager

![Architecture](https://img.shields.io/badge/Architecture-Fullstack-blue?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Backend](https://img.shields.io/badge/Backend-Express%20%7C%20Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Database](https://img.shields.io/badge/Database-SQLite%20%7C%20Prisma-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Styling](https://img.shields.io/badge/Styling-TailwindCSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Welcome to the **Obsidian Noir Task Manager**. This project is an exercise in extremely high-fidelity, minimalist UI engineering. Conceived as a distraction-free, Apple-inspired interface, this application relies entirely on semantic design tokens, physics-based micro-animations, and strict mathematical spacing grids to deliver a premium user experience.

## 🏛️ Architecture & Tech Stack

This repository is structured as a modern monorepo separating frontend presentation from backend persistence:

### Frontend (`/frontend`)
*   **Core:** React 18 scaffolded with Vite for instantaneous HMR and optimized production builds.
*   **Styling:** Tailwind CSS v4 running entirely on pure CSS variables. We enforce strict UI primitives in `tailwind.config.js` to mathematically lock down padding (`stack-md`), typography (`letter-spacing`), and geometry (Apple-style "Squircles").
*   **Animation:** `framer-motion` handles physics-based spring layout transitions and complex modal orchestration.
*   **Icons:** Google Material Symbols (Outlined & Filled variants) optimized for visual weight.

### Backend (`/backend`)
*   **Runtime:** Node.js powered by Express.
*   **Database:** Local SQLite database interacting via Prisma ORM for type-safe database queries.
*   **API:** RESTful architecture for task operations and state management.

---

## 🎨 Design Philosophy: The Obsidian Noir System

Instead of relying on generic frameworks or raw utility classes, the frontend is built upon a strict design system documented in `DESIGN.md`. 

Key engineering decisions include:
1.  **Tonal Elevation Over Drop Shadows:** Depth is not communicated by heavy shadows, but by micro-thin borders and shifting charcoal background values (`#0e0e10` -> `#121214` -> `#1C1C1E`).
2.  **Fluid Modals:** Overlays utilize `backdrop-filter: blur(20px)` mapped to high-z-index framer-motion variants, avoiding jarring layout shifts.
3.  **High-Contrast Theming:** The application supports dynamic toggleable themes (Noir & Light). Instead of conditional JS rendering, theme tokens are injected into the HTML `:root`, allowing CSS custom properties to swap instantly at 60fps.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm or yarn

### 1. Initialize the Backend
The backend utilizes Prisma to manage a local SQLite file (`dev.db`).

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```
*The backend will boot up on `http://localhost:5000`.*

### 2. Initialize the Frontend
In a separate terminal tab:

```bash
cd frontend
npm install
npm run dev
```
*Vite will instantly serve the frontend at `http://localhost:5173`.*

---

## 📂 Project Structure

```text
📦 TO-DO
 ┣ 📂 backend
 ┃ ┣ 📂 prisma          # Schema definitions (schema.prisma) & SQLite DB
 ┃ ┣ 📜 server.js       # Express REST API endpoints
 ┃ ┗ 📜 package.json    
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components    # Modular, token-enforced React components
 ┃ ┃ ┃ ┣ 📜 App.jsx     # Root application shell & state orchestrator
 ┃ ┃ ┃ ┗ ...
 ┃ ┃ ┣ 📜 index.css     # Pure CSS variables and custom elevation layers
 ┃ ┃ ┗ 📜 main.jsx      
 ┃ ┣ 📜 tailwind.config.js # Strict mathematical UI token definitions
 ┃ ┗ 📜 package.json    
 ┣ 📜 DESIGN.md         # The single source of truth for design specifications
 ┗ 📜 README.md         # You are here
```

---

*Authored by Bleson — Senior Web Engineer.*
