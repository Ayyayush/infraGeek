/**
 * =========================================================
 * GIT REPO COLLABORATION
 * =========================================================
 *
 * Git Repository Collaboration ka matlab:
 * ----------------------------------------
 * Multiple developers ek hi project pe
 * milke kaam karein using Git and platforms
 * like GitHub / GitLab.
 *
 *
 * ---------------------------------------------------------
 * NEED (Zarurat kyun hoti hai?)
 * ---------------------------------------------------------
 *
 * - Team-based development ke liye
 * - Large projects manage karne ke liye
 * - Code review process maintain karne ke liye
 * - Version control properly handle karne ke liye
 * - Production-grade workflow follow karne ke liye
 *
 *
 * ---------------------------------------------------------
 * STEPS INVOLVED IN COLLABORATION
 * ---------------------------------------------------------
 *
 * 1) Repository Create karna
 *    - Ek person (Admin) repo create karta hai
 *
 *
 * 2) Team Members Add karna
 *    - GitHub/GitLab me collaborators add kiye jate hain
 *    - Unhe proper access diya jata hai (read/write/admin)
 *
 *
 * 3) Clone Repository
 *    - Har developer repo clone karta hai:
 *      git clone <repo-url>
 *
 *
 * 4) Create Branch
 *    - Direct main branch pe kaam nahi karte
 *    - New feature branch banate hain:
 *      git checkout -b feature/login
 *
 *
 * 5) Make Changes + Commit
 *    - Code likho
 *    - git add .
 *    - git commit -m "Added login feature"
 *
 *
 * 6) Push Branch
 *    - git push origin feature/login
 *
 *
 * 7) Pull Request / Merge Request
 *    - GitHub me Pull Request
 *    - GitLab me Merge Request
 *    - Team review karegi
 *
 *
 * 8) Code Review & Merge
 *    - Review ke baad main branch me merge hota hai
 *
 *
 * ---------------------------------------------------------
 * RULES OF COLLABORATION (Best Practices)
 * ---------------------------------------------------------
 *
 * 1) Never push directly to main branch
 * 2) Always use feature branches
 * 3) Write meaningful commit messages
 * 4) Pull latest code before starting work:
 *    git pull origin main
 * 5) Resolve conflicts carefully
 * 6) Use proper naming convention for branches
 *    Example:
 *    - feature/login
 *    - bugfix/header
 *    - hotfix/payment
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT TEAM WORKFLOW (INDUSTRY PRACTICE)
 * ---------------------------------------------------------
 *
 * Common workflows:
 *
 * 1) Feature Branch Workflow
 * 2) Git Flow
 * 3) Trunk Based Development
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * Git Repo Collaboration:
 * - Multiple developers work together
 * - Feature branches use karte hain
 * - Pull/Merge request se review hota hai
 * - Direct main pe push avoid karte hain
 *
 * Ye industry ka standard practice hai.
 *
 */





/**
 * =========================================================
 * REMOVE GIT CREDENTIALS (Team Lead / Any User)
 * =========================================================
 *
 * SCENARIO:
 * Agar kisi system me Team Lead ka Git account login hai
 * aur hume uski credentials remove karni hain
 * (security ya account change reason se),
 * to hum Git config aur Credential Manager dono clean karte hain.
 *
 *
 * 
 * 
 * ---------------------------------------------------------
 * WHY IS IT NEEDED?
 * ---------------------------------------------------------
 *
 * 1) Security reason:
 *    - Old employee company chhod de
 *    - Unauthorized access avoid karna
 *
 * 2) Account switch:
 *    - Personal account se company account pe shift
 *
 * 3) Token expire ho gaya ho
 *
 * 4) Wrong credentials save ho gaye ho
 *
 * 
 * 
 * 
 *
 * ---------------------------------------------------------
 * STEP 1: CHECK CURRENT GIT CONFIG
 * ---------------------------------------------------------
 *
 * Global config check karo:
 *
 * git config --global --list
 *
 *
 * ---------------------------------------------------------
 * STEP 2: REMOVE USER NAME & EMAIL
 * ---------------------------------------------------------
 *
 * Remove global username:
 *
 * git config --global --unset user.name
 *
 * Remove global email:
 *
 * git config --global --unset user.email
 *
 *
 * ---------------------------------------------------------
 * STEP 3: REMOVE STORED CREDENTIALS (WINDOWS)
 * ---------------------------------------------------------
 *
 * Windows me Git Credential Manager use hota hai.
 *
 * Method 1 (Recommended):
 *
 * 1) Control Panel open karo
 * 2) Credential Manager
 * 3) Windows Credentials
 * 4) GitHub / GitLab entry find karo
 * 5) Remove karo
 *
 *
 * ---------------------------------------------------------
 * METHOD 2: USING COMMAND
 * ---------------------------------------------------------
 *
 * Check credential helper:
 *
 * git config --global credential.helper
 *
 *
 * Remove helper:
 *
 * git config --global --unset credential.helper
 *
 *
 * ---------------------------------------------------------
 * STEP 4: CLEAR SAVED CREDENTIALS (MANUAL METHOD)
 * ---------------------------------------------------------
 *
 * Windows me path hota hai:
 * %USERPROFILE%\.git-credentials
 *
 * Is file ko delete kar sakte ho (agar exist kare).
 *
 *
 * ---------------------------------------------------------
 * STEP 5: VERIFY CLEAN STATE
 * ---------------------------------------------------------
 *
 * git config --global --list
 *
 * Agar user.name aur user.email nahi dikh rahe
 * to config successfully remove ho chuka hai.
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT SECURITY NOTE
 * ---------------------------------------------------------
 *
 * Sirf git config change karna enough nahi hota.
 * Credential Manager clean karna bhi zaruri hai,
 * warna Git background me old login use karta rahega.
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW-STYLE ANSWER
 * ---------------------------------------------------------
 *
 * Q: How do you remove stored Git credentials?
 *
 * Ans:
 * I would first unset user configuration using
 * git config --global --unset user.name and user.email.
 * Then I would remove stored credentials from the system's
 * credential manager or delete the .git-credentials file
 * to ensure complete removal.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - Unset git config
 * - Remove credential helper
 * - Clear OS credential manager
 * - Verify clean state
 *
 * This is done mainly for security and account switching.
 *
 */