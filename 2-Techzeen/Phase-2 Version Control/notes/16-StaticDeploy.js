/**
 * =========================================================
 * HOW TO DEPLOY STATIC WEBSITE ON GITHUB (GitHub Pages)
 * =========================================================
 *
 * GitHub Pages kya hai?
 * ----------------------
 * GitHub Pages ek free hosting service hai
 * jo GitHub provide karta hai static websites ke liye.
 *
 * Static website = HTML, CSS, JS only
 * (No backend like Node, Express, Database)
 *
 *
 * ---------------------------------------------------------
 * NEED (Zarurat kyun?)
 * ---------------------------------------------------------
 *
 * - Portfolio website host karne ke liye
 * - Resume website online dikhane ke liye
 * - Frontend projects showcase karne ke liye
 * - Open source documentation host karne ke liye
 *
 *
 * ---------------------------------------------------------
 * SETUP & STEPS (Step-by-step Deployment)
 * ---------------------------------------------------------
 *
 * STEP 1:
 * Apna static project ready karo
 * (index.html file hona compulsory hai)
 *
 * STEP 2:
 * GitHub pe ek new repository create karo
 *
 * STEP 3:
 * Project ko GitHub pe push karo:
 *
 * git init
 * git add .
 * git commit -m "initial commit"
 * git branch -M main
 * git remote add origin <repo-url>
 * git push -u origin main
 *
 * STEP 4:
 * GitHub repository me jao
 * → Settings
 * → Pages section
 *
 * STEP 5:
 * Source select karo:
 * Branch: main
 * Folder: /root
 *
 * STEP 6:
 * Save karo
 *
 * GitHub tumhe ek live URL dega:
 * https://username.github.io/repository-name/
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT NOTES
 * ---------------------------------------------------------
 *
 * - index.html hona zaruri hai
 * - Sirf static files support karta hai
 * - Backend code run nahi hota
 *
 *
 * ---------------------------------------------------------
 * IS IT COMPULSORY?
 * ---------------------------------------------------------
 *
 * Nahi, compulsory nahi hai.
 *
 * Lekin:
 * - Beginners ke liye industry exposure ke liye helpful hai
 * - Portfolio build karne ke liye almost industry practice hai
 *
 * Companies expect karti hain:
 * - GitHub repo
 * - Live deployed link
 *
 *
 * ---------------------------------------------------------
 * OTHER FREE STATIC HOSTING PLATFORMS
 * ---------------------------------------------------------
 *
 * 1) Netlify (Very popular)
 * 2) Vercel (Best for React / Next.js)
 * 3) Cloudflare Pages
 * 4) Firebase Hosting
 * 5) Surge.sh
 *
 *
 * ---------------------------------------------------------
 * FREE DYNAMIC HOSTING (Backend supported)
 * ---------------------------------------------------------
 *
 * 1) Render
 * 2) Railway
 * 3) Cyclic
 * 4) Fly.io
 * 5) Glitch
 *
 *
 * ---------------------------------------------------------
 * STATIC vs DYNAMIC (Quick Difference)
 * ---------------------------------------------------------
 *
 * Static:
 * - Only frontend
 * - No database
 * - Fast & simple
 *
 * Dynamic:
 * - Backend + Database
 * - APIs run kar sakte ho
 * - Server-side logic possible
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * GitHub Pages:
 * - Free static hosting
 * - Portfolio ke liye best
 * - Backend support nahi karta
 *
 * Industry me:
 * - Static → Netlify / Vercel common
 * - Dynamic → Render / Railway common
 *
 */