/**
 * 🚀 How to Push Code to GitHub (Step-by-Step – Hinglish)
 *
 * --------------------------------------------------
 * 🔹 Prerequisites (pehle se hona chahiye)
 *
 * ✔ Git installed
 * ✔ Git configured (user.name & user.email)
 * ✔ GitHub account
 *
 * --------------------------------------------------
 * 🔹 Step 1: Local project folder open karo
 *
 * Terminal / Git Bash me:
 * cd your-project-folder
 *
 * --------------------------------------------------
 * 🔹 Step 2: Git repository initialize karo
 *
 * Command:
 * git init
 *
 * 👉 Ye folder ko Git repository bana deta hai
 *
 * --------------------------------------------------
 * 🔹 Step 3: GitHub par new repository banao
 *
 * - Login karo :contentReference[oaicite:1]{index=1}
 * - New Repository → Name do
 * - Public / Private choose karo
 * - ❌ README auto mat banao (beginner ke liye simple)
 *
 * --------------------------------------------------
 * 🔹 Step 4: Files staging area me add karo
 *
 * Command:
 * git add .
 *
 * 👉 Matlab: saari files commit ke liye ready
 *
 * --------------------------------------------------
 * 🔹 Step 5: Commit karo
 *
 * Command:
 * git commit -m "Initial commit"
 *
 * 👉 Commit = ek snapshot + message
 *
 * --------------------------------------------------
 * 🔹 Step 6: GitHub repo ko local repo se connect karo
 *
 * Command:
 * git remote add origin <REPO_URL>
 *
 * Example:
 * git remote add origin https://github.com/username/project-name.git
 *
 * --------------------------------------------------
 * 🔹 Step 7: Branch ka naam set karo (recommended)
 *
 * Command:
 * git branch -M main
 *
 * --------------------------------------------------
 * 🔹 Step 8: Code GitHub par push karo 🎉
 *
 * Command:
 * git push -u origin main
 *
 * - -u future pushes ko easy bana deta hai
 *
 * --------------------------------------------------
 * 🔹 Next time changes push karne ka flow
 *
 * git add .
 * git commit -m "your message"
 * git push
 *
 * --------------------------------------------------
 * 🔹 Common Errors & Fix
 *
 * ❌ error: remote origin already exists
 * 👉 git remote remove origin
 *
 * ❌ Authentication failed
 * 👉 GitHub Personal Access Token use karo
 *
 * --------------------------------------------------
 * ✅ Summary (Interview Ready):
 * - git init → repo banana
 * - git add → changes stage
 * - git commit → snapshot
 * - git push → GitHub upload
 *
 * 🔥 Ab tum confidently apna code GitHub par push kar sakte ho!
 */
