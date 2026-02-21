/**
 * =========================================================
 * GIT DIFF COMMAND
 * =========================================================
 *
 * Git diff kya hota hai?
 * ----------------------
 * Git diff ek Git command hai jo
 * files ke beech changes compare karne ke kaam aata hai.
 *
 * Ye dikha sakta hai:
 * - Working directory vs staging area
 * - Staging area vs last commit
 * - Do commits ke beech ka difference
 * - Local branch vs remote branch
 *
 *
 * ---------------------------------------------------------
 * USES (Git diff ka use)
 * ---------------------------------------------------------
 *
 * - Code changes review karne ke liye
 * - Commit se pehle verify karne ke liye
 * - Bugs trace karne ke liye
 * - Team code review me help ke liye
 *
 *
 * ---------------------------------------------------------
 * NEED (Zarurat kyun?)
 * ---------------------------------------------------------
 *
 * - Galat code commit hone se bachata hai
 * - Clear visibility deta hai ki kya change hua
 * - Debugging easy ho jati hai
 *
 *
 * ---------------------------------------------------------
 * BASIC SYNTAX
 * ---------------------------------------------------------
 *
 * git diff [options] [commit1] [commit2]
 *
 *
 * ---------------------------------------------------------
 * VARIOUS FORMS OF GIT DIFF (with short description)
 * ---------------------------------------------------------
 *
 * 1) git diff
 *    - Working directory aur staging area ke beech ka diff
 *    - Jo files abhi add nahi hui hain
 *
 *
 * 2) git diff --name-only
 *    - Sirf file names dikhata hai
 *    - Content change nahi dikhata
 *
 *
 * 3) git diff --staged
 *    - Staging area aur last commit ke beech ka diff
 *
 *
 * 4) git diff HEAD
 *    - Working directory vs last commit
 *
 *
 * 5) git diff <commit1> <commit2>
 *    - Do commits ke beech ka difference
 *
 *    Example:
 *    git diff a1b2c3 d4e5f6
 *
 *
 * 6) git diff origin/main
 *    - Local branch vs remote main branch
 *
 *
 * 7) git diff branch1..branch2
 *    - Do branches ke beech difference
 *
 *
 * 8) git diff --stat
 *    - Summary deta hai (lines added/removed)
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTIONS (IMPORTANT)
 * ---------------------------------------------------------
 *
 * Q1. What is git diff used for?
 * Ans:
 * git diff is used to compare changes between files,
 * commits, or branches in a Git repository.
 *
 * Q2. Difference between git diff and git status?
 * Ans:
 * git status batata hai kaunsi file modified hai,
 * git diff batata hai exactly kya change hua hai.
 *
 * Q3. How do you see difference between two commits?
 * Ans:
 * Using git diff <commit1> <commit2>
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * git diff:
 * - Changes compare karta hai
 * - Commit se pehle code review ka best tool
 * - Debugging aur collaboration me important
 *
 */