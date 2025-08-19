## Mahima's Digital Marketing Portfolio

A polished, responsive portfolio for a Digital Marketing professional. Built with Next.js App Router, React, and Tailwind CSS, it showcases services, success stories, experience, and a contact section with smooth animations and a modern, accessible UI.

### Overview
- **Purpose**: Present skills, services, and case studies while enabling potential clients to get in touch.
- **Sections**: Home (hero + stats), Services, Portfolio, About, Contact, and a footer with quick links.
- **UX**: Smooth scrolling, intersection-based reveal animations, loading state, responsive layout, and subtle blue-themed motion/hover effects.

### Features
- **Animated Hero** with gradient accents and KPI stats
- **Services Grid** with icons and bullet features
- **Portfolio Cards** for success stories
- **About Me** with certifications and areas of expertise
- **Contact Panel** with a styled form (front-end only)
- **Responsive & Accessible** design with semantic HTML
- **Theming foundation** via CSS variables and custom animations in `app/globals.css`

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, TypeScript, Tailwind CSS 4, Radix UI primitives, shadcn-style components in `components/ui`
- **Icons**: `lucide-react`
- **Fonts**: Geist Sans/Mono
- **Utilities**: `clsx`, `class-variance-authority`, custom CSS animations

### Getting Started
Prerequisites:
- Node.js 18+ (LTS recommended)
- npm 9+

Install and run locally:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

Production build:
```bash
npm run build
npm start
```

### Available Scripts
- `npm run dev`: Start the development server
- `npm run build`: Create an optimized production build
- `npm start`: Start the production server
- `npm run lint`: Run Next.js/TypeScript linting (if configured)

### Project Structure
```
app/
  globals.css        # Tailwind setup, CSS variables, custom animations
  layout.tsx         # Root layout + metadata
  page.tsx           # Single-page portfolio with sections
components/
  ui/                # Reusable UI primitives (button, card, input, etc.)
  theme-provider.tsx # Theming helper (available for extension)
lib/
  utils.ts           # Utility helpers
public/              # Static assets (placeholders)
assests/             # Branding image(s), e.g. imageLogo.jpg
styles/              # Additional/global styles (optional legacy dir)
```

### Customization
- **Branding/Images**: Replace `assests/imageLogo.jpg` with your own portrait/logo. Public images can go in `public/`.
- **Metadata**: Update `app/layout.tsx` `metadata.title` and `metadata.description`.
- **Content**: Edit copy in `app/page.tsx` across sections (`#home`, `#services`, `#portfolio`, `#about`, `#contact`).
- **UI Components**: Adjust styles or variants in `components/ui/*`.
- **Styling**: Tune CSS variables and animations in `app/globals.css`.

### Notes
- The contact form is front-end only. Integrate your preferred backend or email service (e.g., API route, Formspree, Resend) to handle submissions.
- Navigation anchors map to in-page sections. Ensure IDs match if you rename sections.
- Images use Next.js `next/image` for optimized loading.

### Deployment
This app is optimized for deployment on Vercel.
1) Push the repository to your Git provider
2) Import into Vercel and select the project
3) Use default settings (framework detected automatically)

### License
No license specified. Add one if you plan to distribute or open-source the project.


