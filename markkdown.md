
# Web Portfolio UI Guide - Gerold-Inspired (React + Vite + Vanilla CSS)

## 🌗 Theme Modes

---

### 🌑 Dark Mode Palette

| Purpose            | Color               | Notes                    |
|--------------------|---------------------|--------------------------|
| Background         | `#0E0B1F`           | Deep dark violet         |
| Surface            | `#19152E`           | Cards, nav, sections     |
| Primary Text       | `#FFFFFF`           | High contrast            |
| Secondary Text     | `#C4C4C4`           | Soft, readable gray      |
| Accent Purple      | `#A560F2`           | Buttons, highlights      |
| Button Hover       | `#C084FC`           | Light purple on hover    |
| Border             | `#2A263D`           | Subtle divider lines     |

---

### ☀️ Light Mode Palette

| Purpose            | Color               | Notes                    |
|--------------------|---------------------|--------------------------|
| Background         | `#FFFFFF`           | Clean white              |
| Surface            | `#F3F3F9`           | Cards, sections          |
| Primary Text       | `#1E1E2F`           | Deep gray-black          |
| Secondary Text     | `#6C6C80`           | Cool muted gray          |
| Accent Purple      | `#6D28D9`           | Buttons, highlights      |
| Button Hover       | `#7C3AED`           | Slightly lighter hover   |
| Border             | `#E5E7EB`           | Soft border              |

---

## 🧩 Components Structure

### 1. Header (Navigation)
- Sticky top navbar
- Logo on left, links on right
- Animated underline on hover

### 2. Hero Section
- Circular profile image (optional subtle float animation)
- Headline + subtitle
- Animated text gradient (CSS)
- Background blobs or particles (JS or CSS animation)

### 3. About Section
- Split into "About Me" & "Skills"
- Skills: animated progress bars or skill tags with hover glow
- Responsive grid layout

### 4. Projects Section
- Horizontal scroll (smooth, touch and mouse scroll)
- Snap-scroll per project card
- Cards with slight tilt on hover (CSS transform)
- Title, image preview, short stack list

### 5. Contact Section
- No form
- Big, bold icons (Github, LinkedIn, Email)
- Hover: scale + glow effect
- Optionally animated entrance

---

## 🧠 UX Layout Ideas

- **Full Width Layout** with max-width constraints (`max-width: 1200px`)
- All sections have generous `padding: 4rem 2rem` for breathing space
- Use `flex` or `grid` for structured, spaced-out designs
- **Text spacing**: Use `line-height: 1.6` and `letter-spacing: 0.5px` to enhance readability
- Ensure strong **visual hierarchy** (headlines: 2.5rem+, body: 1rem)

---

## 📁 Folder Structure (React + Vite)

```plaintext
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/, icons/, backgrounds/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Loader.jsx  <-- Loader component
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
└── vite.config.js
```

---

## 🔄 Loading Screen

### 📦 Loader.jsx

```jsx
import React from 'react';
import './loader.css';

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="spinner"></div>
      <p>Loading portfolio...</p>
    </div>
  );
}
```

### 🎨 loader.css

```css
.loader-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0E0B1F;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: #A560F2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 🧠 Usage in App.jsx

```jsx
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
// ... other imports

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      {/* other components */}
    </>
  );
}
```

---

Let me know if you want:
- Responsive tweaks
- Theme toggler implementation
- More advanced loader (e.g., with animation or logo morph)

We can totally jazz it up ✨
