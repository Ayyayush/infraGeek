/**
 * 🔁 Version Control for DevOps (Basics in Hinglish)
 *
 * --------------------------------------------------
 * 🔹 Version Control kya hota hai?
 *
 * Version Control ek **software system** hota hai jo:
 * 👉 Code me hone wale **changes ko track** karta hai
 * 👉 Old versions ko safe rakhta hai
 * 👉 Team ke saath **collaboration easy** banata hai
 *
 * Simple words me:
 * - Kaun sa change
 * - Kab hua
 * - Kisne kiya
 * sabka record hota hai 📜
 *
 * --------------------------------------------------
 * 🔹 Version Control kyun zaroori hai?
 *
 * 1️⃣ Code history milti hai
 * - Galti ho jaaye to purane version pe wapas ja sakte ho
 *
 * 2️⃣ Team collaboration
 * - Multiple log ek hi project par kaam kar sakte hain
 *
 * 3️⃣ Backup & safety
 * - Code loss ka risk kam
 *
 * 4️⃣ DevOps pipelines ka base
 * - CI/CD Git ke bina possible nahi
 *
 * --------------------------------------------------
 * 🔹 Popular Version Control Systems
 *
 * - Git (MOST popular 🔥)
 * - SVN (Subversion)
 * - Mercurial
 *
 * 👉 Industry standard = **Git**
 *
 * --------------------------------------------------
 * 🔹 Branching aur Merging kya hota hai?
 *
 * 🌿 Branching:
 * - Main code ko disturb kiye bina
 * - Naya feature ya bug-fix par kaam karna
 *
 * 🔀 Merging:
 * - Branch me kiya kaam wapas
 * - Main code ke saath jod dena
 *
 * 👉 Result:
 * - Parallel development
 * - Faster delivery 🚀
 *
 * --------------------------------------------------
 * 🔹 Speed & Efficiency
 *
 * - Version control se:
 *   → Conflicts kam hote hain
 *   → Team fast kaam karti hai
 *   → Releases reliable hoti hain
 *
 * --------------------------------------------------
 * 🔹 Git kya hai?
 *
 * Git ek **version control software** hai
 * jo code ke changes ko efficiently manage karta hai.
 *
 * - Distributed version control system
 * - Har developer ke paas full code history hoti hai
 *
 * --------------------------------------------------
 * 🔹 Git kyun aur kab banaya gaya?
 *
 * - Git ko 2005 me banaya gaya
 * - Creator: :contentReference[oaicite:1]{index=1}
 *
 * Reason:
 * - Linux kernel project ke liye fast, reliable
 *   version control chahiye tha
 *
 * --------------------------------------------------
 * 🔹 GitHub kya hai?
 *
 * GitHub ek **online platform** hai jahan:
 * - Git repositories store hoti hain
 * - Team collaboration hota hai
 * - Pull Requests, Issues, CI/CD possible hota hai
 *
 * Company:
 * - :contentReference[oaicite:2]{index=2}
 *
 * --------------------------------------------------
 * 🔹 GitHub kyun aur kab bana?
 *
 * - GitHub 2008 me launch hua
 * - Purpose:
 *   → Git repositories ko internet par host karna
 *   → Open-source collaboration ko easy banana
 *
 * --------------------------------------------------
 * 🔹 Git vs GitHub (One-liner)
 *
 * - Git = version control TOOL (local)
 * - GitHub = platform/service (remote)
 *
 * --------------------------------------------------
 * ✅ Summary:
 * - Version control = code history + teamwork
 * - Git = industry standard VCS
 * - Branching & merging = fast development
 * - GitHub = collaboration + hosting
 *
 * 🔥 DevOps me Git bina soche samjhe MUST hai!
 */

/**
 * 🔧 Git Global Configuration – Explanation (Hinglish)
 *
 * --------------------------------------------------
 * 🔹 git config --global user.name
 *
 * Command:
 * git config --global user.name "Ayyayush"
 *
 * Iska matlab:
 * - Git ko bataya ja raha hai ki
 *   "Is machine se jo bhi commits honge,
 *    unka author name = Ayyayush hoga"
 *
 * 👉 Ye name commit history me dikhta hai
 *
 * --------------------------------------------------
 * 🔹 git config --global user.email
 *
 * Command:
 * git config --global user.email "treddytalks@gmail.com"
 *
 * Iska matlab:
 * - Git ko bataya ja raha hai ki
 *   "Commits ke saath ye email attach hogi"
 *
 * 👉 GitHub isi email se commits ko tumhare account se link karta hai
 *
 * --------------------------------------------------
 * 🔹 --global ka matlab kya hai?
 *
 * --global ka matlab:
 * - Ye settings poori system ke liye apply hongi
 * - Har repo me same name & email use hogi
 *
 * Agar --global na lagao:
 * - Sirf current repository ke liye set hoti
 *
 * --------------------------------------------------
 * 🔹 git config --list
 *
 * Command:
 * git config --list
 *
 * Iska kaam:
 * - Git ki saari current configuration dikha deta hai
 * - System level + global + repo level configs
 *
 * --------------------------------------------------
 * 🔹 Important output lines ka meaning
 *
 * user.name=Ayyayush
 * 👉 Commits me author ka naam
 *
 * user.email=treddytalks@gmail.com
 * 👉 Commits me author ki email
 *
 * core.autocrlf=true
 * 👉 Windows ke line endings handle karta hai
 *
 * credential.helper=manager
 * 👉 Git credentials (username/password/token) save karta hai
 *
 * init.defaultbranch=master
 * 👉 Naya repo create karne par default branch ka naam
 *
 * --------------------------------------------------
 * 🔹 Ye configuration DevOps ke liye kyun important hai?
 *
 * - CI/CD pipelines commit author detect karti hain
 * - Proper user identity se:
 *   → Tracking easy hoti hai
 *   → Audit & logs clear rehte hain
 *
 * --------------------------------------------------
 * ✅ Summary:
 * - git config user.name/email = commit identity
 * - --global = poore system ke liye
 * - git config --list = verify settings
 *
 * 🔥 Ab tumhara Git properly configured hai – next step = repo + commits!
 */
