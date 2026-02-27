/**
 * =========================================================
 * ! GITHUB ACTIONS
 * =========================================================
 *
 * ! WHAT ARE GITHUB ACTIONS?
 * ---------------------------------------------------------
 * GitHub Actions ek built-in automation tool hai
 * jo CI/CD pipelines create karne ke liye use hota hai.
 *
 * CI/CD = Continuous Integration / Continuous Deployment
 *
 * Simple words me:
 * GitHub Actions ek virtual assistant ki tarah kaam karta hai
 * jo automatically tasks run karta hai.
 *
 * Example tasks:
 * - Code build karna
 * - Tests run karna
 * - Application deploy karna
 *
 *
 * ! HOW GITHUB ACTIONS WORKS
 * ---------------------------------------------------------
 *
 * Developer code push karta hai → GitHub trigger detect karta hai
 * → Workflow run hota hai → tasks execute hote hain
 *
 * Example flow:
 *
 * Developer push → GitHub Action trigger → run tests → deploy
 *
 *
 * ! WHY DO WE NEED GITHUB ACTIONS?
 * ---------------------------------------------------------
 *
 * 1) AUTOMATES BUILD PROCESS
 *    - Code push hote hi build automatically start ho jata hai
 *
 *
 * 2) AUTOMATES TESTING
 *    - Unit tests automatically run hote hain
 *
 *
 * 3) IMPROVES CODE QUALITY
 *    - Errors jaldi detect ho jate hain
 *
 *
 * 4) AUTOMATED DEPLOYMENT
 *    - Application automatically server ya cloud me deploy ho sakti hai
 *
 *
 * 5) SCALABLE & SECURE
 *    - GitHub ke secure runners par workflows run hote hain
 *
 *
 * ! KEY COMPONENTS OF GITHUB ACTIONS
 * ---------------------------------------------------------
 *
 * WORKFLOW
 * - Automation process
 * - YAML file me define hota hai
 *
 *
 * EVENT
 * - Workflow kab trigger hoga
 * - Example:
 *   push
 *   pull_request
 *
 *
 * JOB
 * - Workflow ke andar tasks ka group
 *
 *
 * STEP
 * - Individual command jo job me run hoti hai
 *
 *
 * ! WORKFLOW FILE LOCATION
 * ---------------------------------------------------------
 *
 * Repository ke andar:
 *
 * .github/workflows/
 *
 * Example:
 *
 * .github/workflows/deploy.yml
 *
 *
 * ! SIMPLE EXAMPLE WORKFLOW
 * ---------------------------------------------------------
 *
 * name: CI Pipeline
 *
 * on: [push]
 *
 * jobs:
 *   build:
 *     runs-on: ubuntu-latest
 *
 *     steps:
 *       - uses: actions/checkout@v3
 *
 *       - name: Install dependencies
 *         run: npm install
 *
 *       - name: Run tests
 *         run: npm test
 *
 *
 * ! INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 *
 * GitHub Actions is a CI/CD automation platform
 * that allows developers to build, test,
 * and deploy applications automatically
 * directly from their GitHub repository.
 *
 *
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - Built-in CI/CD tool of GitHub
 * - Automates build, test, and deployment
 * - Uses YAML workflow files
 * - Runs on GitHub hosted runners
 *
 */