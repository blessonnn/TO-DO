# Obsidian Noir — Design System & Specifications
This document defines the design tokens, layout metrics, spacing rules, and CSS specifications derived from the **Onyx Minimalist Task Manager** (Obsidian Noir) UI. It serves as the single source of truth for engineering implementations, ensuring alignment with the Apple-inspired, distraction-free minimalist design guidelines.

---

## 🎨 Color Palette & Tonal System

### Core Palette
| Token | HEX Code | CSS Variable | Description |
| :--- | :--- | :--- | :--- |
| **Accent (Digital Blue)** | `#3874ff` | `--color-accent` | Primary brand accent for focus states, high-priority icons, and checkboxes. |
| **Primary (Slate Accent)**| `#b3c5ff` | `--color-primary` | Main primary label tint. |
| **Canvas Background**     | `#131315` | `--color-background` | Default background color. |
| **Canvas Low Background** | `#0e0e10` | `--color-bg-lowest` | Darkest background elevation surface. |
| **On-Background / Canvas**| `#e4e2e4` | `--color-on-background`| Main body text and prominent text titles. |
| **Muted Text / Secondary**| `#c3c6d7` | `--color-on-surface-variant`| Muted captions, metadata, and inactive headers. |
| **Outline / Border**      | `#8d90a1` | `--color-outline` | Standard outline / borders. |
| **Outline Variant**       | `#424655` | `--color-outline-variant` | Low-contrast borders for divisions. |

### Tonal Elevation System (Apple-inspired Depth)
Rather than heavy shadows, depth is communicated via layered elevations using specific charcoal shades and micro-thin borders:

| Elevation Level | Background Color | Border / Stroke | Blur / Effects | CSS Class |
| :--- | :--- | :--- | :--- | :--- |
| **Level 0 (Base)** | `#000000` | None | None | `.elevation-0` |
| **Level 1 (Cards / Panels)** | `#121214` | 1px solid `#2C2C2E` | None | `.elevation-1` |
| **Level 2 (Modals / Overlays)** | `#1C1C1E` | 1px solid `#424655` | `backdrop-filter: blur(20px)` | `.elevation-2` |

---

## 📐 Spacing & Layout Rules

The layout follows a strict mathematical grid system with a **4px base unit**. All padding, margin, and gaps must scale using increments of this unit.

### Spacing Scale
*   **Base Unit:** `4px`
*   **Small Gap (`stack-sm`):** `8px` (2x) — Inner component margins (e.g., text label to subtitle).
*   **Standard Gap (`gutter` / `stack-md`):** `16px` (4x) — Component padding, list gaps, side-by-side elements.
*   **Mobile Padding (`container-padding-mobile`):** `20px` (5x) — Main mobile page gutter margins.
*   **Large Gap (`stack-lg`):** `32px` (8x) — Major component separations, nav bar item padding.
*   **Desktop Padding (`container-padding-desktop`):** `40px` (10x) — Main desktop content page margins.
*   **Section Gap (`section-gap`):** `64px` (16x) — Large separation between major sections.

### Grid & Max Widths
*   **Desktop Container:** Centered layout max-width is **`1200px`**.
*   **Sidebar Navigation Width:** **`256px`** (`w-64`).

---

## 🔠 Typography Specifications

The design system standardizes on **Inter** for all text nodes. Typography uses tight letter spacing on larger sizes and slightly wider letter spacing on smaller labels to optimize legibility.

| Name | Font Size | Line Height | Weight | Letter Spacing | CSS Utility / Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `48px` | `56px` | Bold (`700`) | `-0.02em` | `.font-display` |
| **Headline Large** | `32px` | `40px` | Bold (`700`) | `-0.01em` | `.font-headline-lg` |
| **Headline Large (Mobile)** | `24px` | `32px` | Bold (`700`) | `-0.01em` | `.font-headline-lg-mobile` |
| **Headline Medium** | `20px` | `28px` | Semi-Bold (`600`) | `-0.005em` | `.font-headline-md` |
| **Body Large** | `17px` | `24px` | Regular (`400`) | `0em` | `.font-body-lg` |
| **Body Medium** | `15px` | `20px` | Regular (`400`) | `0em` | `.font-body-md` |
| **Label Medium** | `13px` | `18px` | Medium (`500`) | `0.02em` | `.font-label-md` |
| **Label Small** | `11px` | `16px` | Semi-Bold (`600`) | `0.05em` | `.font-label-sm` |

---

## 🔲 Geometry & Rounded Corners

The continuous curvature "squircle" geometry defines the shape language of all panels and controls:

*   **Primary Containers (Cards / Task Items):** `12px` / `0.75rem` (`rounded-xl` / `border-radius: 12px`).
*   **Controls (Inputs / Buttons / Tabs):** `8px` / `0.5rem` (`rounded-lg` / `border-radius: 8px`).
*   **Small Icons / Tags:** `4px` / `0.25rem` (`rounded` / `border-radius: 4px`).
*   **Pills / Avatars / Checkbox Rings:** Full rounding (`rounded-full` / `border-radius: 9999px`).

---

## ✨ CSS Interactive & Micro-Animation Specifications

To ensure the interface feels modern, responsive, and tactile, transition animations must be physics-based and subtle:

### Interaction States
```css
/* Custom CSS definitions for pure CSS implementation */

/* Base transitions */
.transition-standard {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover glow for interactive controls */
.interactive-hover:hover {
    border-color: #3A3A3C;
}

/* Active pressing state to simulate depth */
.interactive-hover:active {
    transform: scale(0.99);
}

/* Glass Header Backdrop Blur */
.glass-header {
    background: rgba(19, 19, 21, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

/* Glow on primary call-to-actions */
.add-task-glow {
    box-shadow: 0 0 20px rgba(56, 116, 255, 0.15);
}

/* Checkbox ring accentuation on container hover */
.checkbox-container:hover .checkbox-ring {
    border-color: #3874ff;
}
```

---

## 🛠️ UI Component Implementations

### 1. Navigation Sidebar (Desktop)
*   **Layout:** Vertical flex container, sticky sidebar.
*   **Sizing:** Width `256px` (`w-64`), height `100vh`.
*   **Borders:** Right border 1px solid `#424655` (`border-outline-variant`).
*   **Active Tab style:** Filled using elevation-1 `#121214` background, white/primary text, and a right-aligned border strip `border-r-2 border-primary`.

### 2. Task Cards
*   **Layout:** Horizontal flex container, item gap `16px`.
*   **Padding:** Internal container padding `16px`.
*   **Elevations:** Level 1 (`#121214` surface background, `1px solid #2C2C2E`).
*   **Priority Indicating Bar:** Left border slice of height `100%`, width `4px`, color `#3874ff` (with 50% opacity).

### 3. Quick Action Add Button
*   **Sizing:** Height `48px`, rounded-full.
*   **Appearance:** Background `#1C1C1E`, border `1px solid #424655` with primary accent icon (`#3874ff`).
*   **Animations:** Hover scale up to `1.05`, active press down to `0.95`. Border transitions to `#3874ff` (Primary Accent Blue).
