* [ ] src/
  │
  ├── app/                        # Next.js App Router
  │   ├── (public)/              # Public-facing routes
  │   │   ├── page.tsx           # Home
  │   │   ├── about/page.tsx
  │   │   ├── courses/page.tsx
  │   │   ├── admissions/page.tsx
  │   │   ├── placements/page.tsx
  │   │   ├── campus/page.tsx
  │   │   ├── contact/page.tsx
  │   │
  │   ├── (admin)/               # Future admin panel (scalable)
  │   │   ├── dashboard/page.tsx
  │   │
  │   ├── layout.tsx             # Root layout
  │   ├── globals.css
  │   └── not-found.tsx
  │
  ├── components/                # Reusable UI components
  │   ├── ui/                    # Generic UI (buttons, cards, inputs)
  │   ├── layout/                # Navbar, Footer, Sidebar
  │   ├── shared/                # Shared components (SEO, wrappers)
  │   └── animations/            # Framer motion, effects
  │
  ├── sections/                  # Page-specific sections (Homepage etc.)
  │   ├── home/
  │   │   ├── Hero.tsx
  │   │   ├── About.tsx
  │   │   ├── Courses.tsx
  │   │   ├── Placements.tsx
  │   │   ├── Campus.tsx
  │   │   ├── Testimonials.tsx
  │   │   ├── FAQ.tsx
  │   │   └── CTA.tsx
  │   │
  │   ├── about/
  │   ├── courses/
  │   └── placements/
  │
  ├── data/                      # 🔥 ALL CONTENT (VERY IMPORTANT)
  │   ├── siteConfig.ts
  │   ├── navLinks.ts
  │   ├── heroData.ts
  │   ├── coursesData.ts
  │   ├── placementsData.ts
  │   ├── facultyData.ts
  │   ├── testimonialsData.ts
  │   ├── eventsData.ts
  │   ├── faqData.ts
  │   └── campusData.ts
  │
  ├── lib/                       # Utilities & logic
  │   ├── seo.ts                 # metadata helpers
  │   ├── utils.ts               # common functions
  │   ├── constants.ts
  │   └── schema.ts              # JSON-LD structured data
  │
  ├── hooks/                     # Custom React hooks
  │   ├── useScroll.ts
  │   ├── useMediaQuery.ts
  │   └── useDebounce.ts
  │
  ├── services/                  # API calls (future backend)
  │   ├── api.ts
  │   ├── courses.service.ts
  │   └── auth.service.ts
  │
  ├── store/                     # State management (Redux/Zustand)
  │   ├── index.ts
  │   └── slices/
  │
  ├── types/                     # TypeScript types
  │   ├── course.types.ts
  │   ├── faculty.types.ts
  │   └── common.types.ts
  │
  ├── assets/                    # Static assets
  │   ├── images/
  │   ├── icons/
  │   └── fonts/
  │
  ├── styles/                    # Additional styling
  │   └── animations.css
  │
  └── config/                    # App-level configs
      ├── theme.ts
      └── env.ts
