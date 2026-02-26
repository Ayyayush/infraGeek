/**
 * =========================================================
 * GITLAB INSTALLATION & SETUP USING DOCKER
 * =========================================================
 *
 * ---------------------------------------------------------
 * WHAT IS GITLAB?
 * ---------------------------------------------------------
 *
 * GitLab ek DevOps platform hai jo provide karta hai:
 * - Version Control (Git)
 * - CI/CD pipelines
 * - Issue tracking
 * - Code review
 * - Container registry
 *
 * Simple words me:
 * GitLab = GitHub + CI/CD + DevOps tools (all-in-one)
 *
 *
 * ---------------------------------------------------------
 * NEED (GitLab ko Docker pe install kyun karte hain?)
 * ---------------------------------------------------------
 *
 * Ab tak hum GitLab / GitHub ko:
 * - Cloud (online) pe use kar rahe the
 *
 * Lekin cloud platforms pe:
 * - User limits hoti hain
 * - Private repos limit ho sakte hain
 * - CI/CD minutes limited hote hain
 * - Admin-level control nahi milta
 *
 * Isliye:
 * Hum GitLab ko Docker pe locally install karte hain.
 *
 *
 * ---------------------------------------------------------
 * WHY GITLAB ON DOCKER?
 * ---------------------------------------------------------
 *
 * Jab hum GitLab Docker pe install kar lete hain:
 *
 * - GitLab ek LOCAL PLATFORM ban jata hai
 * - Koi cloud restriction nahi hoti
 * - Unlimited repos, users, pipelines (system capacity tak)
 * - Real industry-like DevOps environment milta hai
 *
 * Matlab:
 * Tum apna "mini GitLab server" bana lete ho.
 *
 *
 * ---------------------------------------------------------
 * BENEFITS
 * ---------------------------------------------------------
 *
 * - Full admin control
 * - No internet dependency (local network pe bhi kaam karta hai)
 * - Unlimited CI/CD practice
 * - DevOps learning ke liye best
 * - Industry-grade setup ka real experience
 *
 *
 * ---------------------------------------------------------
 * SETUP OVERVIEW (High level)
 * ---------------------------------------------------------
 *
 * 1) Docker install hona chahiye
 * 2) GitLab official Docker image use hoti hai
 * 3) Ports map kiye jate hain (80, 443, 22)
 * 4) Volumes mount kiye jate hain (data persist karne ke liye)
 *
 *
 *
 * 
 * ---------------------------------------------------------
 * FINAL TAKEAWAY
 * ---------------------------------------------------------
 *
 * - GitLab Docker pe install karna = Local DevOps lab banana
 * - Cloud restrictions se freedom
 * - Jo logs dikhe wo normal internal setup logs hain
 * - postgres-exporter & chef logs = GitLab ka normal behaviour
 *
 * Ye setup industry-level DevOps practice ke liye
 * bahut strong foundation deta hai.
 *
 */