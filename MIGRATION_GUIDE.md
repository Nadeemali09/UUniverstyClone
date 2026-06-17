## 🔄 Migration Checklist & Setup Guide

### IMMEDIATE NEXT STEPS

#### 1. Install New Dependencies
```bash
npm install react-helmet-async
```

#### 2. Verify Folder Structure
```bash
# Check these folders exist:
src/components/common/
src/components/layouts/
src/components/sections/
src/components/providers/
src/hooks/
src/utils/
src/constants/
```

#### 3. Update Component Imports
Replace old imports in your components:

**OLD WAY:**
```jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Accreditation from './components/Accreditation';
```

**NEW WAY:**
```jsx
import { HeaderLayout, FooterLayout } from '@components/layouts';
import { AccreditationSection } from '@components/sections';
```

#### 4. Move Old Component Files (Optional)
```
KEEP THESE (they still work):
- Hero.jsx
- StatsBar.jsx
- FeaturedUniversities.jsx
- Courses.jsx
- WhyChoose.jsx
- AdmissionProcess.jsx
- Testimonials.jsx
- FAQ.jsx
- InlineForm.jsx
- LeadForm.jsx
- LegalSections.jsx
- Popup.jsx
- StickyCTA.jsx
- CookieConsent.jsx

REPLACE/UPDATE (optional):
- Header.jsx → use HeaderLayout
- Footer.jsx → use FooterLayout
- Accreditation.jsx → use AccreditationSection
- GoogleAdsContext.js → use providers/GoogleAdsContext.js
- GoogleAdsProvider.jsx → use providers/GoogleAdsProvider.jsx
```

#### 5. Test Locally
```bash
npm run dev
# Visit http://localhost:5173
# Check browser console for errors
```

#### 6. Run Linter
```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

---

## 📝 Refactoring Priority Order

### Phase 1 (High Impact, Easy)
```
1. Replace Header → HeaderLayout
2. Replace Footer → FooterLayout
3. Replace Accreditation → AccreditationSection
4. Update GoogleAdsProvider import
```

### Phase 2 (Medium Impact, Medium Effort)
```
1. Refactor Hero section (use new Button, Card, Section components)
2. Refactor StatsBar (use new components)
3. Create Form components folder
4. Move LeadForm to forms/
```

### Phase 3 (Polish & Enhancement)
```
1. Add error boundaries
2. Add loading states
3. Create responsive mobile menu
4. Add dark mode support
5. Optimize images with webp
```

---

## 🎯 Refactoring Example: Header

### BEFORE (Old Header.jsx)
```jsx
const Header = ({ openPopup }) => (
  <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-5 shadow-md">
    <a href="#home">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-sm font-extrabold text-white">
        UC
      </div>
      {/* ... */}
    </a>
    {/* Navigation & Button */}
  </header>
);
```

### AFTER (New HeaderLayout.jsx)
```jsx
import { HeaderLayout } from '@components/layouts';
import { NAV_LINKS } from '@constants';

<HeaderLayout openPopup={openPopup} navLinks={NAV_LINKS} />
```

**Improvements:**
- ✓ Semantic HTML (`<nav>`, `<header>`)
- ✓ ARIA labels for accessibility
- ✓ Enhanced styling (backdrop-blur, better shadows)
- ✓ Props-based configuration
- ✓ Reusable across pages

---

## 🎯 Using New UI Components

### BEFORE (Inline Styling)
```jsx
<button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark">
  Apply Now
</button>
```

### AFTER (Reusable Button Component)
```jsx
import { Button } from '@components/common';

<Button 
  variant="primary" 
  size="md" 
  onClick={handleApply}
  ariaLabel="Apply Now"
>
  Apply Now
</Button>
```

**Advantages:**
- ✓ Consistency across app
- ✓ Easy to change styles globally
- ✓ Built-in variants (primary, secondary, danger, etc.)
- ✓ Accessibility built-in
- ✓ Less CSS duplication

---

## 🔍 Refactoring Checklist for Components

When migrating a component:

- [ ] Move to correct folder (sections/, common/, etc.)
- [ ] Replace inline buttons with `<Button>` component
- [ ] Replace inline cards with `<Card>` component
- [ ] Replace inline badges with `<Badge>` component
- [ ] Use `<Section>` wrapper instead of raw `<section>`
- [ ] Use `<Container>` for max-width layout
- [ ] Replace heading styling with `<SectionTitle>`
- [ ] Add JSDoc comments
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Run linter: `npm run lint:fix`
- [ ] Check console for warnings

---

## 🧪 Testing Checklist

Before committing refactored components:

- [ ] **Visual**: Does it look the same as before?
- [ ] **Responsive**: Check on mobile (375px), tablet (768px), desktop (1440px)
- [ ] **Interaction**: Buttons, links, modals work?
- [ ] **Accessibility**: ARIA labels present, keyboard navigation works?
- [ ] **Console**: No errors or warnings?
- [ ] **SEO**: Meta tags properly set?
- [ ] **Performance**: Lighthouse score decent?

---

## 🚀 Performance Optimization Tips

After migration:

### 1. Lazy Load Components
```jsx
import { lazy, Suspense } from 'react';

const HeavySection = lazy(() => import('@components/sections/HeavySection'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavySection />
</Suspense>
```

### 2. Optimize Images
```jsx
// Add loading="lazy" to images
<img 
  src="image.jpg" 
  alt="description"
  loading="lazy"
/>

// Use webp with fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="description" />
</picture>
```

### 3. Memoize Components
```jsx
import { memo } from 'react';

const MyComponent = memo(({ data }) => (
  <div>{data}</div>
));
```

---

## 🆘 Troubleshooting

### "Module not found: @components/..."
**Solution:** Check vite.config.js has path aliases configured
```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
  },
}
```

### "Cannot find module 'react-helmet-async'"
**Solution:** Install the dependency
```bash
npm install react-helmet-async
```

### Styling not applying
**Solution:** Make sure Tailwind CSS is imported in index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Components not rendering
**Solution:** Check console for errors, verify imports path

---

## 📞 Support Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [React Helmet Async](https://github.com/stayradiated/react-helmet-async)

---

**Created**: June 2026
**Last Updated**: June 2026
