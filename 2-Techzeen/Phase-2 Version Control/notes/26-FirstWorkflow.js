/**
 * =========================================================
 * ! Creating First GitHub Actions Workflow
 * =========================================================
 *
 * ! Overview
 * GitHub Actions me workflow banake hum automation setup karte hain
 * jaise build, test, ya deployment.
 *
 * Humne ek GitHub repository create ki
 * aur fir Actions tab me jaake apna first workflow banaya.
 *
 *
 * ! Steps to Create First Workflow
 * ---------------------------------------------------------
 *
 * 1️⃣ GitHub repo open karo
 *
 * 2️⃣ "Actions" tab pe jao
 *
 * 3️⃣ "Set up a workflow yourself" select karo
 *
 * 4️⃣ File ka naam rakho:
 *
 * main.yml
 *
 * Ye file automatically save hoti hai:
 *
 * .github/workflows/main.yml
 *
 *
 * ! Important Rules to Remember
 * ---------------------------------------------------------
 *
 * - Workflow YAML file me likha jata hai
 * - Indentation (spacing) bahut important hota hai
 * - Workflow tab run hota hai jab koi event trigger hota hai
 *
 *
 * =========================================================
 * ! Important Terms (Core Concepts)
 * =========================================================
 *
 *
 * ! name
 * ---------------------------------------------------------
 * Workflow ka naam hota hai
 *
 * Example:
 * name: My First Workflow
 *
 *
 * ! on
 * ---------------------------------------------------------
 * Ye define karta hai workflow kab trigger hoga
 *
 * Example:
 * on: push
 *
 * Matlab:
 * jab bhi code push hoga → workflow run hoga
 *
 *
 * ! jobs
 * ---------------------------------------------------------
 * Jobs ek group hota hai steps ka
 * jo runner ke andar execute hota hai
 *
 *
 * ! runs-on
 * ---------------------------------------------------------
 * Ye batata hai job kis machine pe run hoga
 *
 * Example:
 * runs-on: ubuntu-latest
 *
 *
 * ! steps
 * ---------------------------------------------------------
 * Steps individual tasks hote hain
 *
 *
 * ! name (inside steps)
 * ---------------------------------------------------------
 * Step ka naam define karta hai
 *
 *
 * ! run
 * ---------------------------------------------------------
 * Ye command hota hai jo execute hota hai
 *
 *
 * =========================================================
 * ! Simple Demo Workflow
 * =========================================================
 *
 * Ye ek basic example hai jo push hone par run hota hai
 *
 */

/**
 * =========================================================
 * ! Creating First GitHub Actions Workflow
 * =========================================================
 *
 * ! Overview
 * GitHub Actions me workflow banake hum automation setup karte hain
 * jaise build, test, ya deployment.
 *
 * Humne ek GitHub repository create ki
 * aur fir Actions tab me jaake apna first workflow banaya.
 *
 *
 * ! Steps to Create First Workflow
 * ---------------------------------------------------------
 *
 * 1️⃣ GitHub repo open karo
 *
 * 2️⃣ "Actions" tab pe jao
 *
 * 3️⃣ "Set up a workflow yourself" select karo
 *
 * 4️⃣ File ka naam rakho:
 *
 * main.yml
 *
 * Ye file automatically save hoti hai:
 *
 * .github/workflows/main.yml
 *
 *
 * ! Important Rules to Remember
 * ---------------------------------------------------------
 *
 * - Workflow YAML file me likha jata hai
 * - Indentation (spacing) bahut important hota hai
 * - Workflow tab run hota hai jab koi event trigger hota hai
 *
 *
 * =========================================================
 * ! Important Terms (Core Concepts)
 * =========================================================
 *
 *
 * ! name
 * ---------------------------------------------------------
 * Workflow ka naam hota hai
 *
 * Example:
 * name: My First Workflow
 *
 *
 * ! on
 * ---------------------------------------------------------
 * Ye define karta hai workflow kab trigger hoga
 *
 * Example:
 * on: push
 *
 * Matlab:
 * jab bhi code push hoga → workflow run hoga
 *
 *
 * ! jobs
 * ---------------------------------------------------------
 * Jobs ek group hota hai steps ka
 * jo runner ke andar execute hota hai
 *
 *
 * ! runs-on
 * ---------------------------------------------------------
 * Ye batata hai job kis machine pe run hoga
 *
 * Example:
 * runs-on: ubuntu-latest
 *
 *
 * ! steps
 * ---------------------------------------------------------
 * Steps individual tasks hote hain
 *
 *
 * ! name (inside steps)
 * ---------------------------------------------------------
 * Step ka naam define karta hai
 *
 *
 * ! run
 * ---------------------------------------------------------
 * Ye command hota hai jo execute hota hai
 *
 *
 * =========================================================
 * ! Simple Demo Workflow
 * =========================================================
 *
 * Ye ek basic example hai jo push hone par run hota hai
 *
 */

/**
 * =========================================================
 * ! Execution Flow
 * =========================================================
 *
 * Developer pushes code
 *        ↓
 * on: push trigger activate hota hai
 *        ↓
 * workflow start hota hai
 *        ↓
 * job "demo" run hota hai
 *        ↓
 * steps execute hote hain
 *
 *
 * ! Output
 * ---------------------------------------------------------
 * GitHub Actions tab me logs dikhenge:
 *
 * Hello DevOps World 🚀
 * current date/time
 *
 *
 * =========================================================
 * ! Short Summary
 * =========================================================
 *
 * name → workflow ka naam
 * on → trigger
 * jobs → tasks group
 * runs-on → machine
 * steps → individual actions
 * run → command execute
 *
 */