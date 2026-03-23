/**
 * =========================================================
 * ! Scheduling Workflows (GitHub Actions)
 * =========================================================
 *
 * ! Overview
 * Is lecture me hum time-based trigger use karte hain
 * jisme workflow automatically schedule ke according run hota hai
 *
 * Yani:
 * manually push ki jagah → fixed time pe workflow run hoga
 *
 *
 * ! Important Terms
 * ---------------------------------------------------------
 *
 * ! schedule
 * ---------------------------------------------------------
 * Ye GitHub Actions ka event hai
 * jo workflow ko time ke basis pe trigger karta hai
 *
 *
 * ! cron
 * ---------------------------------------------------------
 * Cron ek time format hota hai
 * jisse hum schedule define karte hain
 *
 * Format:
 * ┌──────── minute (0 - 59)
 * │ ┌────── hour (0 - 23)
 * │ │ ┌──── day of month (1 - 31)
 * │ │ │ ┌── month (1 - 12)
 * │ │ │ │ ┌ day of week (0 - 6) (Sunday = 0)
 * │ │ │ │ │
 * * * * * *
 *
 * Example:
 * 0 0 * * *
 * → Har din raat 12 baje run hoga
 *
 *
 * =========================================================
 * ! Example: Scheduled Workflow
 * =========================================================
 *
 * name: Schedule Job
 *
 * on:
 *   schedule:
 *     - cron: "0 0 * * *"
 *
 * jobs:
 *   run-script:
 *     runs-on: ubuntu-latest
 *
 *     steps:
 *       - name: Print Message
 *         run: echo "Scheduled Workflow Executed"
 *
 *
 * =========================================================
 * ! Execution Flow
 * =========================================================
 *
 * GitHub scheduler time check karta hai
 *        ↓
 * cron condition match hoti hai
 *        ↓
 * workflow automatically trigger hota hai
 *        ↓
 * job "run-script" execute hota hai
 *        ↓
 * step run hota hai → message print hota hai
 *
 *
 * =========================================================
 * ! Important Notes
 * =========================================================
 *
 * - Cron UTC time follow karta hai (local time nahi)
 * - Minimum interval: 5 minutes
 * - Workflow tabhi chalega jab repo active ho
 *
 *
 * =========================================================
 * ! Short Summary
 * =========================================================
 *
 * schedule → time-based trigger
 * cron → timing format
 * jobs → tasks
 * steps → execution
 * run → command
 *
 */