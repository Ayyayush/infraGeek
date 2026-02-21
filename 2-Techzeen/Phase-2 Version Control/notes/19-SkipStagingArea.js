/**
 * =========================================================
 * HOW TO SKIP STAGING AREA IN GIT
 * =========================================================
 *
 * Normally Git workflow hota hai:
 *
 * Working Directory → Staging Area → Commit
 *
 * Lekin kabhi-kabhi hum staging area skip karke
 * direct commit karna chahte hain.
 *
 *
 * ---------------------------------------------------------
 * HOW TO SKIP STAGING AREA?
 * ---------------------------------------------------------
 *
 * Command:
 * git commit -a -m "your message"
 *
 *
 * ---------------------------------------------------------
 * WHAT DOES THIS COMMAND DO?
 * ---------------------------------------------------------
 *
 * -a  → Automatically sab tracked files ko stage kar deta hai
 * -m  → Commit message provide karta hai
 *
 * Important:
 * Ye sirf already tracked files ko commit karta hai.
 * New (untracked) files commit nahi hongi.
 *
 *
 * ---------------------------------------------------------
 * USE (Kab use karte hain?)
 * ---------------------------------------------------------
 *
 * - Jab sirf modified tracked files commit karni ho
 * - Quick fix commit karna ho
 * - Small changes ho aur staging manually na karna ho
 *
 *
 * ---------------------------------------------------------
 * BENEFITS
 * ---------------------------------------------------------
 *
 * - Fast workflow
 * - Time save hota hai
 * - Chhote projects me convenient
 *
 *
 * ---------------------------------------------------------
 * DISADVANTAGES
 * ---------------------------------------------------------
 *
 * - Selective staging possible nahi hota
 * - Galti se unnecessary changes commit ho sakte hain
 * - New files include nahi hoti
 *
 *
 * ---------------------------------------------------------
 * SYNTAX
 * ---------------------------------------------------------
 *
 * git commit -a -m "commit message"
 *
 *
 * Example:
 * git commit -a -m "Fixed login validation bug"
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTION
 * ---------------------------------------------------------
 *
 * Q: What does git commit -a do?
 *
 * Ans:
 * It stages all modified tracked files and commits them
 * in a single step, skipping the manual staging process.
 *
 *
 * Q: Does git commit -a include new files?
 *
 * Ans:
 * No, it only commits already tracked files.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * git commit -a -m "":
 * - Staging area skip karta hai
 * - Tracked files auto stage karta hai
 * - New files commit nahi karta
 *
 */