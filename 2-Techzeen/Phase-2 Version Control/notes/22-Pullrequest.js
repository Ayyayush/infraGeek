/**
 * =========================================================
 * GITHUB PULL REQUEST (PR)
 * =========================================================
 *
 * WHAT IS A PULL REQUEST?
 * ---------------------------------------------------------
 * Pull Request ek feature hai GitHub ka
 * jisse hum apne changes kisi repository me
 * review ke liye submit karte hain.
 *
 * Simple words me:
 * "Maine ye changes kiye hain, please review karke
 * main project me merge kar do."
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT CONFUSION CLEAR
 * ---------------------------------------------------------
 *
 * 🔹 git pull
 * - Remote repository se latest changes
 *   apne local folder me lane ke liye use hota hai.
 *
 * 🔹 Pull Request
 * - Apne changes ko kisi dusre branch ya repository me
 *   merge karne ke liye request bhejna.
 *
 *
 * ---------------------------------------------------------
 * WHEN DO WE USE PULL REQUEST?
 * ---------------------------------------------------------
 *
 * 1) Team Collaboration me
 *    - Multiple team members same project par kaam kar rahe ho
 *    - Direct main branch me push nahi karte
 *    - PR raise karte hain for review
 *
 *
 * 2) Open Source Contribution me
 *    - Jab aap collaborator nahi ho
 *    - Aap kisi public repo me contribute karna chahte ho
 *    - Direct push allowed nahi hota
 *    - Isliye PR raise karte hain
 *
 *
 * ---------------------------------------------------------
 * HOW TO USE PULL REQUEST (TEAM PROJECT)
 * ---------------------------------------------------------
 *
 * Step 1: New branch create karo
 *   git checkout -b feature-login
 *
 * Step 2: Changes karo
 *
 * Step 3: Commit karo
 *   git add .
 *   git commit -m "Added login feature"
 *
 * Step 4: Push branch
 *   git push origin feature-login
 *
 * Step 5: GitHub par jao
 *   - "Compare & Pull Request" button click karo
 *   - Description likho
 *   - PR create karo
 *
 * Step 6: Code Review hoga
 * Step 7: Merge ho jayega (after approval)
 *
 *
 * ---------------------------------------------------------
 * HOW TO USE PULL REQUEST IN OPEN SOURCE
 * ---------------------------------------------------------
 *
 * Step 1: Fork the repository
 *   (Original repo ka copy apne GitHub account me banao)
 *
 * Step 2: Forked repo clone karo
 *   git clone <your-fork-url>
 *
 * Step 3: New branch create karo
 *   git checkout -b fix-bug-101
 *
 * Step 4: Changes karo aur commit karo
 *
 * Step 5: Forked repo me push karo
 *   git push origin fix-bug-101
 *
 * Step 6: GitHub par jao
 *   - "Compare & Pull Request" click karo
 *   - Original repository select karo
 *   - PR raise karo
 *
 * Step 7: Maintainer review karega
 * Step 8: Approved hone par merge hoga
 *
 *
 * ---------------------------------------------------------
 * RULES FOR WORKING IN OPEN SOURCE
 * ---------------------------------------------------------
 *
 * ✔️ Contribution guidelines read karo
 * ✔️ Issue assign hone ka wait karo
 * ✔️ Proper commit messages likho
 * ✔️ Small & focused PR banao
 * ✔️ Respectful communication rakho
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 *
 * A Pull Request is a GitHub feature used to propose
 * changes to a repository. It enables code review,
 * discussion, and controlled merging, especially in
 * collaborative and open-source projects.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * git pull  ≠  Pull Request
 *
 * git pull  → Bring remote changes locally
 * Pull Request → Send your changes for merge approval
 *
 */