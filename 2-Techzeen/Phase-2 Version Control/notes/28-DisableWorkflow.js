/**
 * =========================================================
 * ! Disable Workflows (GitHub Actions)
 * =========================================================
 *
 * ! Overview
 * Kabhi-kabhi hume workflow ko temporarily band (disable) karna padta hai
 * taki unnecessary execution aur cost avoid ho sake
 *
 *
 * ! Why Do We Need to Disable Workflows
 * ---------------------------------------------------------
 *
 * - Baar-baar unnecessary runs ho rahe ho
 * - Testing ke time unwanted triggers aa rahe ho
 * - Repo maintenance ya debugging chal rahi ho
 * - Infinite loop type situation (workflow → push → workflow)
 * - Cost save karna ho (especially private repos me)
 *
 *
 * =========================================================
 * ! Results of Disabling Workflow
 * =========================================================
 *
 * - Workflow trigger nahi hoga (push, pull_request, schedule sab stop)
 * - Existing runs cancel nahi hote (sirf future runs stop hote hain)
 * - Workflow file safe rehta hai (delete nahi hota)
 *
 *
 * =========================================================
 * ! Rules to Remember
 * =========================================================
 *
 * - Disable karne ke baad workflow manually bhi run nahi hoga
 * - Enable karne par workflow wapas normal kaam karega
 * - Scheduled (cron) workflows bhi stop ho jaate hain
 *
 *
 * =========================================================
 * ! Steps to Disable Workflow
 * =========================================================
 *
 * 1️⃣ GitHub repo open karo
 *
 * 2️⃣ "Actions" tab me jao
 *
 * 3️⃣ Left side me workflow select karo
 *
 * 4️⃣ Top-right me "Disable workflow" button pe click karo
 *
 *
 * =========================================================
 * ! Steps to Enable Again
 * =========================================================
 *
 * 1️⃣ Actions tab me jao
 *
 * 2️⃣ Disabled workflow select karo
 *
 * 3️⃣ "Enable workflow" button pe click karo
 *
 *
 * =========================================================
 * ! Short Summary
 * =========================================================
 *
 * Disable → workflow temporarily band
 * Reason → avoid unwanted runs / save cost
 * Result → future triggers stop
 * Enable → workflow wapas start
 * name: Disable workflow video

on:
  push:
    branches: [main]

jobs:
  disable:
    runs-on: ubuntu-latest

    steps:
      - name: Print Message
        run: echo "Disable Workflow"
 *
 */