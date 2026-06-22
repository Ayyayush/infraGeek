/**
 * =========================================================
 * ! JENKINS SHELL COMMANDS AND AUTOMATING TASKS
 * =========================================================
 *
 * Hum ek automation task dekhenge jo automatically log files
 * aur temporary files ko cleanup kar dega.
 *
 * Example:
 *
 * Ek build folder me temp.log file bana li.
 *
 * Usme kuch bhi content likh diya.
 *
 * Ab ek nayi Jenkins Job banayenge:
 *
 * cleanup-job
 *
 * Ye job ka naam hai.
 *
 * Build Section me:
 *
 * → Add Build Step
 * → Execute Windows Batch Command
 *
 * Command:
 *
 * echo Cleaning up build folder......
 *
 * del /q C:\MyApp\builds\*.log
 *
 * echo Cleanup complete
 *
 * ! EXPLANATION
 *
 * echo Cleaning up build folder......
 * → Message print karega.
 *
 * del /q C:\MyApp\builds\*.log
 * → Build folder ki saari .log files delete kar dega.
 *
 * /q
 * → Quiet mode
 * → Confirmation nahi puchega.
 *
 * echo Cleanup complete
 * → Final success message print karega.
 *
 * Ab Build Now karoge toh:
 *
 * → Log files delete ho jayengi
 * → Build Success aa jayega
 *
 * Aise karke cleanup tasks automate kar sakte hain.
 *
 * ! PROBLEM
 *
 * Ab mai chahta hoon ki mujhe Build Now button na dabana pade.
 *
 * Kuch time baad khud se execute ho jaye.
 *
 * Iske liye:
 *
 * → Build Triggers
 * → Build periodically
 *
 * use karte hain.
 *
 * ! CRON EXPRESSIONS
 *
 * Jenkins scheduling ke liye Cron Expression use karta hai.
 *
 * Isko yaad rakhna zaroori nahi hai.
 *
 * Internet pe easily mil jati hain.
 *
 * Example:
 *
 * H/5 * * * *
 *
 * ! MEANING
 *
 * H/5
 * → Every 5 minutes
 *
 * * * * *
 * → Every hour
 * → Every day
 * → Every month
 * → Every week day
 *
 * Matlab:
 *
 * Job har 5 minute me automatically run hogi.
 *
 * ! SOME COMMON CRON EXPRESSIONS
 *
 * H/5 * * * *
 * → Every 5 minutes
 *
 * H/10 * * * *
 * → Every 10 minutes
 *
 * H * * * *
 * → Every hour
 *
 * H 9 * * *
 * → Daily at 9 AM
 *
 * H 9 * * 1
 * → Every Monday 9 AM
 *
 * H 0 * * 0
 * → Every Sunday
 *
 * ! COMPLETE FLOW
 *
 * Jenkins Job
 *      ↓
 * Execute Windows Command
 *      ↓
 * Delete Log Files
 *      ↓
 * Scheduled By Cron
 *      ↓
 * Automatic Cleanup
 *
 * ! INTERVIEW QUESTIONS
 *
 * Q1) How can we execute OS commands in Jenkins?
 * Ans:
 * Using Build Step → Execute Windows Batch Command
 * or Execute Shell.
 *
 * Q2) How do you automate a Jenkins Job?
 * Ans:
 * Using Build Triggers and Cron Expressions.
 *
 * Q3) What is a Cron Expression?
 * Ans:
 * A scheduling syntax used to run jobs automatically
 * at specified intervals.
 *
 * Q4) What does H/5 * * * * mean?
 * Ans:
 * Run the job every 5 minutes.
 *
 * Q5) What is the purpose of Build Periodically?
 * Ans:
 * To schedule Jenkins jobs automatically without
 * manual execution.
 *
 * ! SHORT SUMMARY
 *
 * → Execute Windows Batch Command runs OS commands
 * → del command deletes files
 * → Cleanup jobs can remove logs automatically
 * → Build Periodically schedules jobs
 * → Cron Expressions define timing
 * → H/5 * * * * = Every 5 Minutes
 *
 */