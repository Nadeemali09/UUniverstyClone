# UniversityConnect - Quick Reference Guide

## 📚 File Structure Quick Look

```
src/
├── components/
│   ├── common/          → Reusable UI (Button, Card, Badge)
│   ├── layouts/         → Page layouts (Header, Footer)
│   ├── sections/        → Page sections
│   └── providers/       → Context providers (Google Ads)
├── hooks/               → Custom React hooks
├── utils/               → Utility functions
├── constants/           → App-wide constants
└── App.jsx              → Main app component
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Lint code
npm run lint
npm run lint:fix
```

## 🎯 Common Tasks

### Creating a New Reusable Component
```jsx
// src/components/common/YourComponent.jsx
export const YourComponent = ({ children, variant = 'default' }) => {
  return (
    <div className={`your-styles`}>
      {children}
    </div>
  );
};

export default YourComponent;
```

Then add to `src/components/common/index.js`:
```javascript
export { default as YourComponent } from './YourComponent';
```

### Creating a Custom Hook
```jsx
// src/hooks/useYourHook.js
import { useState, useEffect } from 'react';

export const useYourHook = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Hook logic
  }, []);

  return { state };
};
```

### Using Imports with Aliases
```jsx
// ✅ Good - Using aliases
import { Button, Card } from '@components/common';
import { useScrollLock } from '@hooks';
import { cn } from '@utils';
import { COLORS } from '@constants';

// ❌ Avoid - Long relative paths
import { Button } from '../../../components/common/Button';
```

## 🎨 Component Variants

### Button
```jsx
<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger" disabled>Disabled</Button>
```

### Card
```jsx
<Card variant="elevated" hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Badge
```jsx
<Badge variant="primary" size="md">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>
```

### Section
```jsx
<Section variant="light" id="features">
  <Container>
    <SectionTitle 
      subtitle="Our Features"
      title="Why Choose Us?"
      description="We provide the best service..."
    />
  </Container>
</Section>
```

## 🔍 SEO Checklist

Before deploying:
- [ ] Update `META.siteName` in `constants/metadata.js`
- [ ] Update `META.description` with accurate description
- [ ] Update `META.keywords` with relevant keywords
- [ ] Update canonical URL in `App.jsx`
- [ ] Add Open Graph image URL
- [ ] Set `og:locale` correctly
- [ ] Update social links in `META.social`
- [ ] Test with: https://search.google.com/test/rich-results

## 🎣 Using Hooks

```jsx
// Scroll Lock
const [isOpen, setIsOpen] = useState(false);
useScrollLock(isOpen);

// Intersection Observer
const { ref, isVisible, hasBeenVisible } = useIntersectionObserver();

return (
  <div ref={ref}>
    {hasBeenVisible && <AnimatedComponent />}
  </div>
);

// Google Analytics
const { trackConversion, trackEvent } = useGoogleAds();
trackEvent('click', { element: 'button' });
```

## 🛠️ Utilities

```jsx
import { 
  generateSchemaMarkup,
  createStructuredData,
  cn,
  truncateDescription,
  getCanonicalUrl
} from '@utils';

// Class name merging
const classes = cn('base-class', condition && 'conditional-class');

// Schema generation
const schema = generateSchemaMarkup('organization', data);

// Description truncation (SEO)
const shortDesc = truncateDescription(longText, 160);
```

## 📦 Constants & Themes

```jsx
import { COLORS, GRADIENTS, SHADOWS, TRANSITIONS, NAV_LINKS, META } from '@constants';

// Usage
className={`bg-blue-600 hover:bg-blue-700 transition-all ${TRANSITIONS.base}`}
style={{ boxShadow: SHADOWS.lg }}
```

## 🎯 Performance Tips

1. **Lazy Load Images**
   ```jsx
   <img loading="lazy" src="image.jpg" alt="description" />
   ```

2. **Code Splitting**
   ```jsx
   const HeavyComponent = React.lazy(() => import('./Heavy'));
   ```

3. **Memoization**
   ```jsx
   const MemoComponent = React.memo(MyComponent);
   ```

## 🔐 Best Practices

✅ Always use path aliases for imports
✅ Keep components in correct folders
✅ Use utility functions instead of inline styles
✅ Add JSDoc comments to custom hooks
✅ Test responsive behavior on mobile
✅ Check SEO with Google Search Console
✅ Run `npm run lint:fix` before commit
✅ Use semantic HTML elements

## 🚫 Common Mistakes to Avoid

❌ Importing from long relative paths
❌ Creating components outside `src/components/`
❌ Hardcoding strings (use constants instead)
❌ Not adding alt text to images
❌ Missing ARIA labels on interactive elements
❌ Forgetting to update meta tags
❌ Not running linter before commit
❌ Using inline styles instead of Tailwind

## 📱 Responsive Breakpoints

- **sm**: 640px (tablets)
- **md**: 768px (larger tablets)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

```jsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Web Accessibility](https://www.w3.org/WAI/)
- [SEO Best Practices](https://developers.google.com/search)

---

**Last Updated**: June 2026
**Version**: 1.0.0
