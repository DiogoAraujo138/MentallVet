# Design System Document

## 1. Overview & Creative North Star: "The Clinical Sanctuary"

This design system is engineered to provide a bridge between clinical authority and emotional respite. In the veterinary sector, professionals face high-stress environments; our digital interface must act as a "Sanctuary"—a place that feels structured, expansive, and profoundly calm.

**The Creative North Star: The Clinical Sanctuary**
We move beyond standard medical UI by adopting a **High-End Editorial** approach. This means rejecting the "boxed-in" feeling of traditional dashboards in favor of **Organic Asymmetry** and **Tonal Depth**. By utilizing overlapping elements, sophisticated glassmorphism, and intentional whitespace, we create a sense of breathing room. The layout should feel like a premium printed journal—authoritative yet deeply human.

---

## 2. Colors

Our palette is rooted in trust-based blues and clinical whites, but we apply them with a sophisticated, layered philosophy to avoid a "flat" appearance.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through:
- **Background Color Shifts:** Moving from `surface` (#f9f9f9) to `surface-container-low` (#f4f3f3).
- **Negative Space:** Using the spacing scale to create distinct visual groups without physical dividers.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, similar to stacked sheets of fine vellum paper.
- **Base:** `surface` (#f9f9f9).
- **Secondary Content Areas:** `surface-container` (#eeeeee).
- **Elevated Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white against a tinted background.

### The "Glass & Gradient" Rule
To inject "visual soul," use semi-transparent surface colors with `backdrop-blur(20px)`. Main CTAs and Hero backgrounds should utilize subtle linear gradients transitioning from `primary` (#00599b) to `primary-container` (#2a72b8) at a 135-degree angle. This provides a tactile, premium depth that flat color cannot replicate.

---

## 3. Typography

The typographic system pairs the technical precision of **Space Grotesk** with the warm, humanistic approach of **Plus Jakarta Sans**.

| Token | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- |
| **display-lg** | Space Grotesk | 3.5rem | High-impact editorial moments; use with tight letter-spacing. |
| **headline-md** | Space Grotesk | 1.75rem | Section headers; conveys innovation and clarity. |
| **title-lg** | Plus Jakarta Sans | 1.375rem | Sub-headings and card titles; emphasizes empathy. |
| **body-lg** | Plus Jakarta Sans | 1rem | Standard reading text; optimized for high legibility. |
| **label-md** | Plus Jakarta Sans | 0.75rem | Navigation items and metadata; uppercase with +5% tracking. |

**Editorial Character:** We use high-contrast scales. Large Display type should often sit near smaller, refined body text to create an "asymmetric tension" that feels modern and custom-designed rather than templated.

---

## 4. Elevation & Depth

We convey importance through **Tonal Layering** rather than structural lines.

- **The Layering Principle:** Depth is achieved by "stacking." For example, a card (`surface-container-lowest`) placed on a section background (`surface-container-low`) creates a soft, natural lift.
- **Ambient Shadows:** When a float effect is required (e.g., a primary Modal), use extra-diffused shadows:
  - `box-shadow: 0 20px 40px rgba(0, 89, 155, 0.06);` (Note the blue tint in the shadow to mimic natural light refraction).
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque, high-contrast borders.
- **Glassmorphism:** For navigation bars or floating action buttons, use a semi-transparent `surface` color with a heavy blur to allow background colors to bleed through, integrating the UI into the environment.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `xl` (1.5rem) rounded corners. Text is `label-md` bold, white.
- **Secondary:** `surface-container-highest` background with a `primary` text color. No border.
- **Tertiary:** No background. `primary` text with a subtle 2px underline on hover.

### Input Fields
- **Container:** `surface-container-low` background. 
- **Shape:** `md` (0.75rem) rounded corners.
- **State:** On focus, the background shifts to `surface-container-lowest` with a 1px "Ghost Border" of `primary` at 20% opacity.

### Cards & Lists
- **The Forfeiture of Dividers:** Dividers are strictly forbidden. Use 32px or 48px of vertical whitespace to separate list items.
- **Interaction:** Cards should subtly scale (1.02x) and shift background color from `surface-container` to `surface-container-lowest` on hover.

### Context-Specific Components (Mentall.vet)
- **The "Pulse" Indicator:** A small, soft-glowing chip using `secondary_container` to indicate therapist availability.
- **Mood Sliders:** Custom sliders using a `primary` to `secondary` gradient track, featuring `xl` rounded handles to feel soft and non-threatening.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetric margins. For example, a header aligned left with body text offset to the right by 2 columns.
- **DO** use large-scale imagery of veterinary professionals that overlaps two background color sections.
- **DO** ensure all text maintains a minimum contrast ratio of 4.5:1, utilizing the `on-surface` tokens effectively.

### Don't
- **DON'T** use 1px solid black or grey borders to separate content.
- **DON'T** use standard "Drop Shadows" (Black #000 at 25%). They feel "dirty" and clinical in a negative way.
- **DON'T** crowd the interface. If a screen feels full, increase the page height and add whitespace.
- **DON'T** use sharp 0px corners. This creates "visual anxiety" which contradicts our empathetic brand profile.