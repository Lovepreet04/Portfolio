# Lovepreet Singh - Portfolio Website

A modern, animated React portfolio website showcasing BTech Computer Science Engineering skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Timeline**: Animated experience and education timeline
- **Skills Visualization**: Animated progress bars and skill categories
- **Project Showcase**: Interactive project cards with hover effects
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct PDF download functionality

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Express.js** with TypeScript
- **Node.js** runtime
- **File serving** for resume download

### Build Tools
- **Vite** for development and building
- **ESBuild** for fast compilation
- **PostCSS** with Tailwind

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript schemas
└── attached_assets/        # Resume and asset files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lovepreet04/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking

## 🎨 Customization

### Colors
The color scheme is defined in `client/src/index.css` with CSS custom properties:
- Primary: Cyan to Blue gradient
- Background: Dark slate theme
- Accent: Various gradient combinations

### Content
Update personal information in the respective component files:
- `HeroSection.tsx` - Main introduction
- `AboutSection.tsx` - Personal details and achievements
- `ProjectsSection.tsx` - Project showcase
- `SkillsSection.tsx` - Technical skills
- `ExperienceSection.tsx` - Work experience and education

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🌟 Key Features

### Animation System
- Scroll-triggered animations using Intersection Observer
- Staggered timeline item animations
- Smooth hover effects and micro-interactions
- Particle background system

### Performance
- Optimized images and assets
- Lazy loading for sections
- Efficient animation timing
- Minimal bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Created by **Lovepreet Singh**
- 📧 Email: Eng.Lovepreet@gmail.com
- 💼 LinkedIn: [linkedin.com/in/Lovepreet04](https://linkedin.com/in/Lovepreet04)
- 🐙 GitHub: [github.com/Lovepreet04](https://github.com/Lovepreet04)
- 📱 Phone: +91-9897024130

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**