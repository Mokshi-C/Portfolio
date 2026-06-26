# Animated Portfolio Website - Complete Guide

## Overview

This is a heavily animated, dark-themed portfolio website built with React.js, Framer Motion, Three.js, and Particles.js. The site features cinematic fullpage transitions, interactive animations, and a professional cyberpunk neon aesthetic.

## Design Philosophy: Cyberpunk Neon

The portfolio follows a **Cyberpunk Neon** design aesthetic featuring:

- **Color Palette:**
  - Primary Dark: `#0a0e27` (deep space black)
  - Neon Cyan: `#00d9ff` (electric blue accent)
  - Neon Magenta: `#ff006e` (hot pink accent)
  - Neon Purple: `#b537f2` (violet accent)
  - Text: `#e0e0ff` (soft white-blue)

- **Typography:**
  - Display: Space Mono Bold (futuristic, geometric)
  - Body: Inter Regular (clean, readable)

- **Key Visual Elements:**
  - Glowing neon borders and effects
  - Interactive particle swarms (mouse-reactive)
  - Animated gradient blurs
  - 3D rotating elements
  - Smooth cinematic transitions

## Pages & Features

### 1. **Hero Page** (`/`)
- Animated welcome message with gradient text
- Professional bitmoji avatar with glowing border and rotating ring
- Interactive particle background (responds to mouse movement)
- Call-to-action buttons with hover effects
- Scroll indicator animation

### 2. **About Page** (`/about`)
- Professional introduction and bio
- Key achievements cards with hover animations
- Statistics section (projects, clients, experience)
- Gradient blur background effects

### 3. **Projects Page** (`/projects`)
- Grid of featured projects with 3D hover effects
- Project cards with:
  - Shimmer animation on hover
  - Technology tags
  - View and Code links
  - Smooth elevation on hover

### 4. **Skills Page** (`/skills`)
- Organized skill categories (Frontend, Backend, 3D & Animation, Tools & DevOps)
- Animated progress bars with smooth fill animations
- Skill percentage display
- Continuous learning section

### 5. **Call-to-Action Page** (`/cta`)
- Large, engaging headline
- Primary "Hire Me" button with gradient background animation
- Secondary "View My Work" button
- Feature cards highlighting key strengths
- Social media links with hover animations

### 6. **Contact Page** (`/contact`)
- Contact information cards (Email, Phone, Location)
- Animated contact form with:
  - Form validation
  - Loading state animation
  - Success message with checkmark animation
  - Toast notifications

### 7. **Resume Page** (`/resume`)
- Resume preview with download button
- Professional summary
- Experience timeline
- Education section
- Skills showcase
- Certifications and languages

### 8. **Articles Page** (`/articles`)
- Featured blog articles list
- Article cards with:
  - Category tags
  - Read time estimates
  - Author and date information
  - Hover animations
  - Load more functionality

### 9. **Coding Profiles Page** (`/coding-profiles`)
- Links to external coding platforms:
  - GitHub (150+ Repositories)
  - LeetCode (500+ Problems Solved)
  - CodePen (50+ Pens)
  - SkillRack (95% Success Rate)
  - Stack Overflow (1000+ Reputation)
  - Dev.to (20+ Articles)
- Social media connection section

## Animation Features

### Framer Motion Animations
- **Entrance Animations:** Staggered fade-in with scale transform
- **Hover Effects:** Smooth scale and elevation changes
- **Page Transitions:** Cinematic fades with opacity transitions
- **Progress Bars:** Animated fill from 0 to skill level

### Particles.js Background
- Interactive particle swarms on hero page
- Particles respond to mouse movement
- Neon-colored particles with connecting lines
- Smooth damping and physics simulation

### Custom CSS Animations
- Neon glow pulse effects
- Floating animations
- Shimmer effects on buttons
- Text glow animations

## Customization Guide

### Update Personal Information

1. **Hero Page Text** (`client/src/pages/Hero.tsx`)
   - Update the greeting message
   - Modify the introduction text

2. **About Page** (`client/src/pages/About.tsx`)
   - Update professional summary
   - Modify achievements and statistics

3. **Contact Information** (`client/src/pages/Contact.tsx`)
   - Update email, phone, and location

4. **Social Links**
   - Update all social media URLs throughout pages
   - Modify social icons as needed

### Replace the Bitmoji Avatar

The bitmoji is currently hosted at:
```
https://d2xsxph8kpxj0f.cloudfront.net/310519663758947005/o5ZLZCXX8MuHTDjDsFEMwb/bitmoji-avatar-i49bFGUDgJhjZyxbCwLTE2.webp
```

To replace it:
1. Generate or upload your own bitmoji image
2. Update the image URL in `client/src/pages/Hero.tsx`

### Update Projects

Edit `client/src/pages/Projects.tsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tags: ['React', 'Three.js'],
    link: 'https://your-project.com',
    github: 'https://github.com/your-repo',
  },
  // Add more projects...
];
```

### Update Skills

Edit `client/src/pages/Skills.tsx`:
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Update Articles

Edit `client/src/pages/Articles.tsx`:
```javascript
const articles = [
  {
    id: 1,
    title: 'Article Title',
    excerpt: 'Article excerpt',
    author: 'Your Name',
    date: 'June 12, 2024',
    category: 'Web Development',
    readTime: '8 min read',
  },
  // Add more articles...
];
```

### Update Coding Profiles

Edit `client/src/pages/CodingProfiles.tsx`:
```javascript
const profiles = [
  {
    id: 1,
    name: 'GitHub',
    icon: Github,
    description: 'Your description',
    stats: '150+ Repositories',
    link: 'https://github.com/your-username',
    color: 'from-gray-400 to-gray-600',
  },
  // Add more profiles...
];
```

## Color Customization

To change the neon color scheme, edit `client/src/index.css`:

```css
:root {
  --neon-cyan: #00d9ff;      /* Primary accent */
  --neon-magenta: #ff006e;   /* Secondary accent */
  --neon-purple: #b537f2;    /* Tertiary accent */
  --dark-bg: #0a0e27;        /* Background */
  --text-light: #e0e0ff;     /* Text color */
}
```

## Performance Optimization

- **Lazy Loading:** Images and components load on demand
- **Optimized Animations:** GPU-accelerated transforms and opacity changes
- **Responsive Design:** Mobile-first approach with breakpoints
- **Code Splitting:** Routes are lazy-loaded for faster initial load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile hamburger navigation menu
- Stacked layouts on small screens
- Touch-friendly interactive elements
- Optimized font sizes for readability

## Development

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
```

### Type Check
```bash
pnpm check
```

## Technologies Used

- **React 19** - UI framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety
- **Wouter** - Lightweight routing
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## Deployment

The portfolio is ready to deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Manus (built-in hosting)

## License

This portfolio template is free to use and customize for personal use.

## Support

For questions or issues, refer to the component documentation in each page file.

---

**Last Updated:** June 2024
**Version:** 1.0.0
