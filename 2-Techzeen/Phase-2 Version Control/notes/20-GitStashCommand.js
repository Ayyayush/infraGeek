/**
 * =========================================================
 * GIT STASH COMMAND
 * =========================================================
 *
 * Git stash kya hota hai?
 * ------------------------
 * Git stash ek temporary storage hai
 * jaha hum apne working directory ke
 * uncommitted changes ko temporarily
 * save (hide) kar dete hain.
 *
 * Simple words me:
 * Git stash = “changes ko side me rakh do”
 *
 *
 * ---------------------------------------------------------
 * WHAT IS IT USED FOR?
 * ---------------------------------------------------------
 *
 * - Jab kaam beech me ho aur branch switch karni ho
 * - Jab urgent bug fix ke liye dusri branch pe jana ho
 * - Jab working directory clean chahiye ho
 *
 *
 * ---------------------------------------------------------
 * NEED (Zarurat kyun hoti hai?)
 * ---------------------------------------------------------
 *
 * - Unfinished changes ko commit nahi karna hota
 * - Code loss se bachna hota hai
 * - Context switch safely karna hota hai
 *
 *
 * ---------------------------------------------------------
 * BENEFITS
 * ---------------------------------------------------------
 *
 * - Changes safe rehte hain
 * - Clean working directory milti hai
 * - Multiple stashes store kar sakte hain
 * - Branch switch easily ho jata hai
 *
 *
 * ---------------------------------------------------------
 * SYNTAX
 * ---------------------------------------------------------
 *
 * Save changes:
 * git stash
 *
 * Save with message:
 * git stash save "message"
 *
 *
 * ---------------------------------------------------------
 * COMMON GIT STASH COMMANDS
 * ---------------------------------------------------------
 *
 * 1) git stash
 *    - Current changes stash kar deta hai
 *
 * 2) git stash list
 *    - Saare stashes show karta hai
 *
 * 3) git stash apply
 *    - Latest stash wapas laata hai
 *
 * 4) git stash apply stash@{n}
 *    - Specific stash apply karta hai
 *
 * 5) git stash pop
 *    - Stash apply + delete
 *
 * 6) git stash drop
 *    - Latest stash delete karta hai
 *
 * 7) git stash clear
 *    - Saare stashes delete karta hai
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTIONS (IMPORTANT)
 * ---------------------------------------------------------
 *
 * Q1. What is git stash?
 * Ans:
 * Git stash temporarily saves uncommitted changes
 * so you can work on something else and come back later.
 *
 * Q2. Difference between git stash apply and pop?
 * Ans:
 * apply stash ko apply karta hai but stash rakhta hai,
 * pop apply karta hai aur stash delete kar deta hai.
 *
 * Q3. Does git stash save untracked files?
 * Ans:
 * By default, no. Untracked files ke liye:
 * git stash -u
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * git stash:
 * - Temporary change storage
 * - Clean working directory
 * - Safe context switching
 *
 */