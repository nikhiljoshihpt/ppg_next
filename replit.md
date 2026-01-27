# PPG Website

## Overview
A Next.js 14 website for PPG, a beer brand. Built with React 18, Tailwind CSS 4, and Firebase for backend data storage.

## Project Structure
- `src/app/` - Next.js App Router pages
  - `(main)/` - Main pages with header/footer layout
  - `(noheader)/` - Pages without header
- `src/components/` - React components
- `src/utils/` - Utility files including Firebase configuration
- `public/` - Static assets

## Tech Stack
- **Framework**: Next.js 14.2.34
- **UI**: React 18.2, Tailwind CSS 4
- **Database**: Firebase Firestore
- **Language**: TypeScript/JavaScript

## Development
The development server runs on port 5000:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

## Build & Production
```bash
npm run build
npm run start
```

## Firebase Configuration
Firebase is configured in `src/utils/firebaseConfig.js` with Firestore database access.

## Recent Changes
- Security update: Downgraded Next.js from 15.2.1 to 14.2.34 (January 27, 2026)
  - Downgraded React from 19 to 18.2 for compatibility
  - Removed --turbopack flag (not supported in Next.js 14)
  - Converted next.config.ts to next.config.mjs (TypeScript config not supported in Next.js 14)
  - Removed Geist font imports (not available in Next.js 14)
  - Fixed hydration issues in HeroSection by using deterministic animation values
- Initial setup for Replit environment (January 2026)
- Removed Firebase Analytics to fix SSR hydration issues
