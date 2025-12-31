# Paradise DayPass

A luxury resort day pass booking platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with glass morphism effects
- Interactive header with dropdown navigation
- Hero section with search functionality
- Resort listings with image galleries
- Location showcase
- Call-to-action sections
- Dark mode support (configured but not implemented)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Google Material Symbols
- **Fonts**: Plus Jakarta Sans

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── ResortsSection.tsx
│   ├── LocationsSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
└── ...config files
```

## Customization

The design uses a custom color palette defined in `tailwind.config.js`:
- Primary: #137fec (blue)
- Luxury Gold: #d4af37
- Background Light: #fcfbf9
- Background Dark: #101922
- Luxury Sand: #e8e6e1

## Next Steps

- Add booking functionality
- Implement search filters
- Add resort detail pages
- Set up backend API
- Add user authentication
- Implement payment processing