# UniversityConnect Landing Page - Optimized Edition

> **Premium, SEO-optimized landing page built with React, Vite, and Tailwind CSS following SOLID principles**

[![React](https://img.shields.io/badge/React-19.2.6-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

---

## 🎯 What's Included

✅ **SEO Optimizations** - Meta tags, structured data, accessibility
✅ **SOLID Principles** - Clean, maintainable code architecture
✅ **Premium UI Components** - Reusable, variant-rich design system
✅ **Modern Folder Structure** - Clear separation of concerns
✅ **Performance Optimized** - Code splitting, lazy loading
✅ **Fully Accessible** - WCAG compliant with ARIA labels

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 New Folder Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Card, Badge)
│   ├── layouts/         # Page layouts (Header, Footer)
│   ├── sections/        # Page sections
│   └── providers/       # Context providers (Google Ads)
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── constants/           # App-wide constants
```

---

## 📚 Documentation

Read the detailed documentation:

- **[OPTIMIZATION_REPORT.md](./OPTIMIZATION_REPORT.md)** - Complete optimization details
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick lookup for common tasks
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Step-by-step refactoring guide

---

## 🎨 Component Examples

### Button Component
```jsx
import { Button } from '@components/common';

<Button variant="primary" size="lg">Click Me</Button>
```

### Card Component
```jsx
import { Card } from '@components/common';

<Card variant="elevated" hover>Content</Card>
```

### Using Custom Hooks
```jsx
import { useScrollLock } from '@hooks';

useScrollLock(isOpen);
```

---

## 📊 Key Features

### UI Components
- Button (6 variants × 3 sizes)
- Card (4 variants)
- Badge (7 variants × 3 sizes)
- Container, Section, SectionTitle

### Custom Hooks
- useScrollLock - Prevent body scroll
- useIntersectionObserver - Viewport detection

### Utils
- Schema markup generation
- SEO metadata helpers
- Class name merging utility

### SEO
- React Helmet for dynamic meta tags
- JSON-LD structured data
- OpenGraph & Twitter cards
- Semantic HTML
- ARIA labels

---

## 🎯 SOLID Principles

✅ **S**ingle Responsibility - Each component has one purpose
✅ **O**pen/Closed - Open for extension, closed for modification
✅ **L**iskov Substitution - Consistent component interfaces
✅ **I**nterface Segregation - Minimal, focused props
✅ **D**ependency Inversion - Dependency injection via props/context

---

## 🧪 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix issues
```

---

## 📱 Responsive Design

Mobile-first with responsive breakpoints (sm, md, lg, xl)

---

## ♿ Accessibility

WCAG compliant with:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast

---

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
3. Start development: `npm run dev`
4. Review component examples in code

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Web Accessibility](https://www.w3.org/WAI/)

---

**Version**: 1.0.0 | **Status**: Production Ready ✅

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
