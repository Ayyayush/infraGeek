/**
 * =========================================================
 * ! CREATING FIRST JOB IN JENKINS
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS A JENKINS JOB?
 * ---------------------------------------------------------
 * Jenkins Job is simply a task that Jenkins executes.
 *
 * This task can be:
 *
 * → Build code
 * → Run scripts
 * → Execute tests
 * → Deploy applications
 * → Run automation tasks
 *
 *
 * Simple Definition:
 * A Jenkins Job is a set of instructions
 * that Jenkins executes automatically or manually.
 *
 *
 * Think of it as:
 * → A To-Do Task for Jenkins
 *
 *
 * Example:
 * "Compile this code and run tests"
 * Jenkins will execute all these steps.
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT POINT
 * ---------------------------------------------------------
 * Every Jenkins Job has its own Workspace.
 *
 * Workspace stores:
 * → Source code
 * → Temporary files
 * → Build outputs
 * → Downloaded dependencies
 *
 *
 * You can view it from:
 * Job → Workspace
 *
 *
 * ---------------------------------------------------------
 * ! TYPES OF JOB TRIGGERS
 * ---------------------------------------------------------
 *
 * 1) Manual Trigger
 * User manually clicks:
 * → Build Now
 *
 *
 * 2) Automatic Trigger
 * Jenkins automatically starts the job.
 *
 * Examples:
 * → GitHub Push Trigger
 * → Webhook Trigger
 * → Cron Job Trigger
 * → Scheduled Builds
 *
 *
 * For now:
 * We will use Manual Trigger.
 *
 *
 * ---------------------------------------------------------
 * ! CREATING FIRST FREESTYLE JOB
 * ---------------------------------------------------------
 * STEP 1
 * Open Jenkins Dashboard
 *
 * STEP 2
 * Click:
 * → New Item
 *
 * STEP 3
 * Enter Job Name:
 * hello-jenkins
 *
 * STEP 4
 * Select:
 * → Freestyle Project
 * 
 * Click: → OK
 *
 *
 * ---------------------------------------------------------
 * ! WHY FREESTYLE PROJECT?
 * ---------------------------------------------------------
 * Freestyle Project is the simplest type  of Jenkins Job.
 *
 *
 * Later we will learn:
 * → Pipeline
 * → Multibranch Pipeline
 * → Advanced CI/CD Jobs
 *
 *
 * ---------------------------------------------------------
 * ! DESCRIPTION
 * ---------------------------------------------------------
 * Add a description for the project.
 * Example:
 * My First Jenkins Job
 *
 *
 * ---------------------------------------------------------
 * ! BUILD STEP
 * ---------------------------------------------------------
 * Scroll to:
 * Build Section
 *
 * Click:
 * → Add Build Step
 *
 * Select:
 * → Execute Windows Batch Command
 *
 * Example:
 * echo Hello Jenkins
 *
 * Save the Job.
 *
 *
 * ---------------------------------------------------------
 * ! EXECUTING THE JOB
 * ---------------------------------------------------------
 * Click:
 * → Build Now
 *
 * Since we are not using any trigger,
 * the build will start manually.
 *
 * Jenkins executes the job.
 *
 *
 * ---------------------------------------------------------
 * ! BUILD HISTORY
 * ---------------------------------------------------------
 * Left side:
 * Build History
 *
 *
 * Example:
 * Hello Jenkins
 * #1
 *
 *
 * Every execution creates:
 * → Build #1
 * → Build #2
 * → Build #3
 *
 * and so on.
 *
 *
 * ---------------------------------------------------------
 * ! OUTPUT SCREEN
 * ---------------------------------------------------------
 * Example:
 * Success
 * #1
 * Started by user Ayush Pandey
 *
 *
 * This means:
 *
 * → Build executed successfully
 *
 * → No errors occurred
 *
 * → Jenkins completed all steps
 *
 *
 * ---------------------------------------------------------
 * ! BUILD DETAILS
 * ---------------------------------------------------------
 *
 * Started by:
 *
 * Ayush Pandey
 *
 *
 * Waiting Time:
 *
 * 0.2 sec
 *
 *
 * Build Duration:
 *
 * 3.6 sec
 *
 *
 * Total Time:
 *
 * 3.8 sec
 *
 *
 * Status:
 *
 * Success
 *
 *
 * Meaning:
 *
 * Jenkins successfully completed the job.
 *
 *
 * ---------------------------------------------------------
 * ! CONSOLE OUTPUT
 * ---------------------------------------------------------
 * Click:
 *
 * → Console Output
 *
 *
 * Here you can see:
 *
 * → Commands executed
 * → Logs
 * → Errors
 * → Build output
 *
 *
 * This is the most important section
 * for debugging Jenkins jobs.
 *
 *
 * ---------------------------------------------------------
 * ! WORKSPACE
 * ---------------------------------------------------------
 * Click:
 *
 * → Workspace
 *
 *
 * Here Jenkins stores:
 *
 * → Source Code
 * → Temporary Files
 * → Build Artifacts
 *
 *
 * Every job gets its own workspace.
 *
 *
 * ---------------------------------------------------------
 * ! BUILD HISTORY PURPOSE
 * ---------------------------------------------------------
 * Build History stores:
 *
 * → All previous runs
 * → Logs
 * → Status
 * → Artifacts
 *
 *
 * You can click any build:
 *
 * #1
 * #2
 * #3
 *
 * and inspect its details.
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 *
 * Developer Pushes Code
 *            ↓
 * Jenkins Job Starts
 *            ↓
 * Build Application
 *            ↓
 * Run Tests
 *            ↓
 * Deploy Application
 *            ↓
 * Success / Failure
 *
 *
 * This entire flow is executed through
 * Jenkins Jobs.
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 *
 * Q1) What is a Jenkins Job?
 *
 * Ans:
 * A Jenkins Job is a task or set of instructions
 * executed by Jenkins.
 *
 *
 * Q2) What is a Freestyle Project?
 *
 * Ans:
 * A Freestyle Project is the simplest type
 * of Jenkins Job used for basic automation.
 *
 *
 * Q3) What is a Jenkins Workspace?
 *
 * Ans:
 * Workspace is the directory where Jenkins
 * stores source code, temporary files,
 * and build outputs.
 *
 *
 * Q4) What is Build History?
 *
 * Ans:
 * Build History stores records of all
 * previous job executions.
 *
 *
 * Q5) What is Console Output?
 *
 * Ans:
 * Console Output contains logs generated
 * during build execution.
 *
 *
 * Q6) What is the difference between
 * manual and automatic triggers?
 *
 * Ans:
 *
 * Manual Trigger:
 * → User clicks Build Now.
 *
 *
 * Automatic Trigger:
 * → Jenkins starts automatically
 *   based on events or schedules.
 *
 *
 * Q7) Why is Console Output important?
 *
 * Ans:
 * It helps troubleshoot and debug
 * build failures.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Jenkins Job = Task executed by Jenkins
 * → Freestyle Project = Simplest Jenkins Job
 * → Workspace stores build files
 * → Console Output stores logs
 * → Build History stores previous runs
 * → Jobs can be triggered manually or automatically
 *
 */