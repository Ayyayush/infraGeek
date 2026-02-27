/**
 * =========================================================
 * ! GITHUB ACTIONS - WORKFLOW
 * =========================================================
 *
 * ! WORKFLOW HOTA KYA H?
 * ---------------------------------------------------------
 * Workflow ek automated process hota hai
 * jo GitHub repository me specific events (triggers)
 * hone par automatically run hota hai.
 *
 * Simple words me:
 * Workflow = automation pipeline
 *
 * Example:
 * - Code push hua
 * - Tests automatically run ho gaye
 * - Application automatically deploy ho gayi
 *
 *
 * ! WORKFLOW KAHA DEFINE HOTA HAI
 * ---------------------------------------------------------
 *
 * Workflow YAML files me likha jata hai
 * aur repository ke andar is location par rakha jata hai:
 *
 * .github/workflows/
 *
 * Example:
 *
 * .github/workflows/ci.yml
 *
 *
 * ! WORKFLOW KYU USE KARTE HAIN
 * ---------------------------------------------------------
 *
 * - Build automate karne ke liye
 * - Testing automatically run karne ke liye
 * - Deployment automate karne ke liye
 * - CI/CD pipeline create karne ke liye
 *
 *
 * ! KEY TERMS (IMPORTANT)
 * =========================================================
 *
 *
 * ! EVENT
 * ---------------------------------------------------------
 * Event ek trigger hota hai
 * jo workflow ko start karta hai.
 *
 * Example events:
 * - push
 * - pull_request
 * - schedule
 *
 * Example:
 * Agar developer code push kare
 * → workflow automatically run ho jayega.
 *
 *
 * ! JOB
 * ---------------------------------------------------------
 * Job steps ka ek group hota hai
 * jo runner ke andar execute hota hai.
 *
 * Ek workflow me multiple jobs ho sakti hain.
 *
 * Example:
 * Job 1 → Build
 * Job 2 → Test
 * Job 3 → Deploy
 *
 *
 * ! STEP
 * ---------------------------------------------------------
 * Step ek individual task hota hai
 * jo job ke andar run hota hai.
 *
 * Example steps:
 * - Code checkout
 * - Install dependencies
 * - Run tests
 *
 *
 * ! RUNNER
 * ---------------------------------------------------------
 * Runner ek virtual machine hoti hai
 * jaha workflow jobs run hoti hain.
 *
 * Example runners:
 * - ubuntu-latest
 * - windows-latest
 * - macos-latest
 *
 * GitHub hosted runners automatically
 * environment provide kar dete hain.
 *
 *
 * ! WORKFLOW EXECUTION FLOW
 * =========================================================
 *
 * 1) Event occur hota hai
 *    (example: code push)
 *
 * 2) Workflow trigger hota hai
 *
 * 3) Jobs start hote hain
 *
 * 4) Jobs ke andar steps execute hote hain
 *
 * 5) Jobs parallel bhi run ho sakte hain
 *    ya dependency ke basis par sequential bhi
 *
 *
 * ! SIMPLE FLOW
 * ---------------------------------------------------------
 *
 * Developer pushes code
 *        ↓
 * Event trigger hota hai
 *        ↓
 * Workflow start hota hai
 *        ↓
 * Jobs run hote hain
 *        ↓
 * Steps execute hote hain
 *
 *
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * Workflow = automation pipeline
 * Event = trigger
 * Job = group of steps
 * Step = individual task
 * Runner = machine jaha workflow run hota hai
 *
 */