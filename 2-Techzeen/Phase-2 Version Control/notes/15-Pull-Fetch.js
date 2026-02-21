/**
 * =========================================================
 * GIT PULL vs GIT FETCH
 * =========================================================
 *
 * Ye dono commands GitHub / remote repository se
 * latest changes lane ke liye use hoti hain,
 * lekin dono ka behaviour different hota hai.
 *
 *
 * ---------------------------------------------------------
 * SYNTAX
 * ---------------------------------------------------------
 *
 * Git Fetch:
 * git fetch origin
 *
 * Git Pull:
 * git pull origin <branch-name>
 *
 *
 * ---------------------------------------------------------
 * USAGE
 * ---------------------------------------------------------
 *
 * Git Fetch:
 * - Remote repo se latest changes lata hai
 * - Local branch ko modify nahi karta
 * - Sirf tracking branches update karta hai
 *
 * Git Pull:
 * - Remote repo se changes lata hai
 * - Automatically local branch me merge karta hai
 *
 *
 * ---------------------------------------------------------
 * WHEN TO USE WHICH?
 * ---------------------------------------------------------
 *
 * Git Fetch use karo jab:
 * - Pehle changes review karna ho
 * - Merge se pehle safe check chahiye
 * - Conflicts avoid karna ho
 *
 * Git Pull use karo jab:
 * - Directly latest code chahiye
 * - Conflicts ka idea already ho
 * - Fast workflow chahiye
 *
 *
 * ---------------------------------------------------------
 * DIFFERENCE BETWEEN FETCH & PULL
 * ---------------------------------------------------------
 *
 * git fetch:
 * - Safe operation
 * - No automatic merge
 * - Code change nahi hota
 *
 * git pull:
 * - Fetch + Merge
 * - Local code update ho jata hai
 * - Conflict aa sakta hai
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTION (VERY IMPORTANT)
 * ---------------------------------------------------------
 *
 * Q: What is the difference between git pull and git fetch?
 *
 * Answer:
 * Git fetch sirf remote repository se changes lata hai
 * aur unhe local tracking branch me store karta hai,
 * jabki git pull pehle fetch karta hai
 * aur phir un changes ko current branch me merge kar deta hai.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * git fetch = sirf changes lao, merge mat karo
 * git pull  = changes lao + merge karo
 *
 */