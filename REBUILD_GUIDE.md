# Rebuild Guide: "A Day in the Life of a Media Buyer"

This guide walks you through rebuilding this exact scrollytelling timeline app from scratch using **Cursor** (or any IDE). The app is a single-page Vite + React + TypeScript site with a Genius Sports–branded vertical timeline, scroll-triggered animations, and a sticky scroll progress bar.

---

## 1. Tech Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS v3** (with `tailwindcss-animate`)
- **shadcn/ui** components (Radix primitives)
- **Framer Motion** (`framer-motion`) — scroll/entrance animations
- **lucide-react** — icons (`CheckCircle2`, `TrendingUp`, `ChevronDown`)
- **react-router-dom** — routing
- **@tanstack/react-query** — provider scaffolding

---

## 2. Project Setup

```bash
npm create vite@latest media-buyer-timeline -- --template react-ts
cd media-buyer-timeline
npm install
```

Install runtime deps:

```bash
npm install framer-motion lucide-react react-router-dom @tanstack/react-query \
  class-variance-authority clsx tailwind-merge tailwindcss-animate
```

Install Tailwind:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Install shadcn (optional — only the Toaster/Tooltip/Sonner are used):

```bash
npx shadcn@latest init
npx shadcn@latest add toast sonner tooltip
```

---

## 3. Design System

### `src/index.css`

- Import Inter from Google Fonts.
- Define HSL CSS variables in `:root`:
  - `--background: 0 0% 100%`
  - `--foreground: 220 20% 15%`
  - `--primary` / `--accent` / `--ring`: `234 100% 50%` (Genius blue)
  - `--genius-lime: 72 90% 72%`
  - `--genius-blue: 234 100% 50%`
  - `--genius-border: 220 15% 88%`
  - `--genius-card: 0 0% 100%`
  - `--radius: 0.75rem`
- Add `@layer components` utility classes:
  - `.genius-gradient-text` — blue→glow linear gradient on text
  - `.genius-section-card` — rounded card w/ border
  - `.genius-timeline-dot` — lime dot with glow shadow
  - `.genius-timeline-line` — vertical 1px rail
  - `.genius-time-badge` — pill badge w/ blue tint
  - `.genius-bullet-card` — soft gray row
  - `.genius-highlight-box` — left-border blue callout
  - `.genius-moment-box` — left-border lime callout
- `html { scroll-behavior: smooth; }` and a custom thin scrollbar.

### `tailwind.config.ts`

Extend `colors` with all the `hsl(var(--token))` mappings, including a `genius` group (`blue`, `lime`, `dark`, `card`, `border`, `glow`). Set `fontFamily.sans = ["Inter", "system-ui", "sans-serif"]`. Add `tailwindcss-animate` plugin.

---

## 4. Assets

Place these in `src/assets/`:

- `genius-sports-logo.png` — full wordmark (used in hero + footer)
- `genius-marque.png` — small "G" mark (used in Genius Touchpoint boxes)

---

## 5. Data Layer

### `src/data/timelineData.ts`

Export a `TimelineSection` interface and a `timelineSections` array. Each section has:

```ts
interface TimelineSection {
  id: string;
  time: string;            // e.g. "9:00 AM"
  title: string;
  paragraphs: string[];
  bullets?: string[];
  highlight?: string;      // blue left-border callout
  geniusMoment?: string;   // lime left-border callout
  marketScale?: string;    // accent "Market Scale" callout
}
```

Six sections in order: `client-direction` (9:00 AM), `open-trade-desk` (9:30 AM), `genius-deal-id` (11:00 AM), `launch-market` (2:00 PM), `performance-allocation` (4:00 PM), `what-this-means` ("The Takeaway"). See current `src/data/timelineData.ts` for exact copy.

---

## 6. Components

### `src/components/ScrollProgress.tsx`

Fixed-top 1px bar. Uses `useScroll` + `useSpring` from framer-motion, `scaleX` bound to `scrollYProgress`, `transform-origin: left`, and a blue→lime linear gradient background.

### `src/components/HeroSection.tsx`

- Min-height `70vh`, centered content.
- Subtle radial glow background (`radial-gradient(ellipse 60% 40% at 50% 40%, hsl(234 100% 50% / 0.05), transparent)`).
- Animated logo (fade in), H1 with `genius-gradient-text` span on "Media Buyer", subhead, and a bouncing `ChevronDown`.

### `src/components/TimelineSection.tsx`

Two-column layout: left rail (hidden on mobile) with `genius-timeline-dot` + `genius-timeline-line`; right column with:

1. `genius-time-badge`
2. H2 title
3. `genius-section-card` containing paragraphs, optional bullets (each as `genius-bullet-card` with `CheckCircle2` icon — apply `style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}` for visibility on the lime), optional `highlight`, optional `marketScale` (rounded box w/ `TrendingUp` icon, `border-accent/20 bg-accent/5`, label "Market Scale" in accent), and optional `geniusMoment` (lime box with the marque image + label "Genius Touchpoint" in `text-genius-blue`).

All sub-elements use Framer Motion `whileInView` with `viewport={{ once: true }}` and small staggered delays.

### `src/pages/Index.tsx`

Renders `<ScrollProgress />`, `<HeroSection />`, then maps `timelineSections` into `<TimelineSection>` inside a `max-w-3xl` container, then a footer with logo + copyright.

### `src/App.tsx`

Standard scaffold: `QueryClientProvider` → `TooltipProvider` → `Toaster` + `Sonner` → `BrowserRouter` with `/` → `Index` and `*` → `NotFound`.

---

## 7. Animation Patterns

- **Hero**: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}` over 0.8s.
- **Timeline dot**: `initial={{ scale: 0 }} whileInView={{ scale: 1 }}` with `margin: "-100px"`.
- **Section content**: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}`.
- **Bullets**: stagger via `delay: 0.2 + i * 0.08`.
- **Scroll bar**: `useSpring(scrollYProgress, { stiffness: 100, damping: 30 })`.

---

## 8. Run It

```bash
npm run dev
```

Open `http://localhost:5173`. The hero loads, scroll triggers each section in sequence, and the top progress bar fills from blue to lime as you scroll.

---

## 9. Cursor Tips

- Drop this file plus `src/data/timelineData.ts` into the chat as context, then ask Cursor to scaffold the components one at a time.
- Use `Cmd+K` inline edits to tweak Tailwind classes against the design tokens — never hard-code colors; always reference `hsl(var(--token))` or the `genius-*` Tailwind classes.
- Keep all colors in HSL inside `index.css`; components should only consume semantic tokens.
