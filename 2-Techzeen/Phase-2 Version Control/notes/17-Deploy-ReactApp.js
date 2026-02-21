/**
 * =========================================================
 * HOW TO DEPLOY A REACT APPLICATION
 * =========================================================
 *
 * React application deployment ka matlab:
 * ----------------------------------------
 * Apni React app ko local system se nikaal kar
 * internet par live karna taaki koi bhi URL se
 * access kar sake.
 *
 *
 * ---------------------------------------------------------
 * DIFFERENT WAYS TO DEPLOY A REACT APP
 * ---------------------------------------------------------
 *
 * 1) GitHub Pages (Only for static frontend)
 * 2) Netlify
 * 3) Vercel
 * 4) Firebase Hosting
 * 5) Render / Railway (with backend)
 *
 *
 * ---------------------------------------------------------
 * DIFFERENT PLATFORMS FOR REACT DEPLOYMENT
 * ---------------------------------------------------------
 *
 * STATIC HOSTING (Frontend only):
 * - GitHub Pages
 * - Netlify
 * - Vercel
 * - Cloudflare Pages
 *
 * DYNAMIC HOSTING (Frontend + Backend):
 * - Render
 * - Railway
 * - Fly.io
 *
 *
 * ---------------------------------------------------------
 * WHAT IS `npm install gh-pages` USED FOR?
 * ---------------------------------------------------------
 *
 * gh-pages ek npm package hai jo:
 * - React app ke build folder ko
 * - GitHub Pages branch (gh-pages) me push karta hai
 *
 * Mostly CRA (Create React App) ke saath use hota hai.
 *
 * Flow:
 * - npm run build
 * - build folder generate hota hai
 * - gh-pages us build ko GitHub Pages pe deploy karta hai
 *
 *
 * ---------------------------------------------------------
 * CRA vs VITE vs PARCEL
 * ---------------------------------------------------------
 *
 * CREATE REACT APP (CRA):
 * - Slow development server
 * - Heavy configuration
 * - Older tool
 * - Beginners ke liye easy
 *
 * VITE:
 * - Very fast (ESM based)
 * - Lightweight
 * - Modern industry standard
 * - Best for new projects
 *
 * PARCEL:
 * - Zero config bundler
 * - Medium speed
 * - Less popular now
 *
 *
 * ---------------------------------------------------------
 * WHICH ONE TO USE?
 * ---------------------------------------------------------
 *
 * Beginner / College projects:
 * - CRA (ok but not recommended now)
 *
 * Modern projects / Industry:
 * - VITE ✅ (Most recommended)
 *
 * Simple experiments:
 * - PARCEL
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTIONS (IMPORTANT)
 * ---------------------------------------------------------
 *
 * Q1. How do you deploy a React application?
 * Ans:
 * By creating a production build and hosting it on platforms
 * like Netlify, Vercel, or GitHub Pages.
 *
 * Q2. What is gh-pages in React?
 * Ans:
 * gh-pages is a package used to deploy the build folder
 * of a React app to GitHub Pages.
 *
 * Q3. Difference between CRA and Vite?
 * Ans:
 * CRA is slower and older, while Vite is faster, lightweight,
 * and more modern.
 *
 * Q4. Can React app run backend code?
 * Ans:
 * No, React is frontend only. Backend needs separate server.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - React app deploy = build + hosting
 * - Vite is industry standard today
 * - gh-pages = GitHub Pages deployment tool
 * - Netlify & Vercel are most popular
 *
 */