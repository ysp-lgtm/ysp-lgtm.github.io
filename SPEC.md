# 个人简历 - React 前端项目框架

## 1. Project Overview

- **Project Name**: 个人简历 (Personal Resume)
- **Project Type**: Single-page application (SPA) with React
- **Core Functionality**: A modern, visually appealing personal resume website with multiple sections (About, Experience, Skills, Projects, Contact, etc.)
- **Target Users**: Developers/recruiters viewing a professional resume online

## 2. Technology Stack

| Category      | Choice                          |
|---------------|---------------------------------|
| Framework     | React 18 (Vite)                 |
| Language      | TypeScript                      |
| Routing       | React Router v6                 |
| Styling       | Tailwind CSS                    |
| Icons         | Lucide React                    |
| Animations    | Framer Motion                   |
| State         | React Context (built-in)        |
| Build Tool    | Vite                            |

## 3. Project Structure

```
个人简历/
├── src/
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Base UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── routes/              # Routing configuration
│   │   └── index.tsx
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── SPEC.md
└── README.md
```

## 4. Page Routes

| Route       | Page        | Description              |
|-------------|-------------|--------------------------|
| `/`         | Home        | Landing / hero page     |
| `/about`    | About       | Personal introduction    |
| `/experience` | Experience | Work experience         |
| `/skills`   | Skills      | Skills & expertise       |
| `/projects` | Projects    | Portfolio projects       |
| `/contact`  | Contact     | Contact information      |

## 5. Component Skeleton

### 5.1 Layout Components

- **Header**: Navigation bar with logo, nav links, and theme toggle
- **Sidebar**: Collapsible sidebar for mobile navigation
- **Footer**: Footer with social links and copyright

### 5.2 UI Components

- **Button**: Reusable button with variants (primary, secondary, outline, ghost)
- **Card**: Reusable card container with optional header/footer
- **Section**: Page section wrapper with title and scroll anchor

### 5.3 Page Components (Skeletons)

Each page component will contain:
- A top-level section wrapper
- A page title / heading
- A brief description area
- Placeholder content areas for future填充

## 6. Design System

### 6.1 Color Palette

- **Primary**: `#6366f1` (Indigo-500)
- **Secondary**: `#8b5cf6` (Violet-500)
- **Accent**: `#06b6d4` (Cyan-500)
- **Background**: `#ffffff` (light) / `#0f172a` (dark)
- **Text**: `#1e293b` (light) / `#f8fafc` (dark)
- **Muted**: `#64748b`

### 6.2 Typography

- **Font Family**: Inter (via Google Fonts or system fallback)
- **Headings**: Bold, large scale
- **Body**: Regular weight, readable line height

### 6.3 Spacing & Layout

- Base unit: 4px
- Container max-width: 1200px
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## 7. Notes

- All components are **empty skeletons** — no content填充 required
- Routing is fully wired; pages render correctly
- Tailwind CSS is configured and ready to use
- Framer Motion is installed for future animations
- The project builds and runs successfully in the browser
