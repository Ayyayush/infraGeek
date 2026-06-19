/**
 * =========================================================
 * ! JENKINS GITHUB INTEGRATION USING WEBHOOK AND NGROK
 * =========================================================
 *
 * Hum Jenkins ko GitHub ke saath integrate karenge taaki
 * GitHub repository me change hote hi Jenkins automatically
 * job trigger kar sake.
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE NEED WEBHOOKS?
 * ---------------------------------------------------------
 * Problem:
 *
 * GitHub ko kaise pata chalega ki
 * Jenkins ko build start karna hai?
 *
 *
 * Aur Jenkins ko kaise pata chalega ki
 * GitHub repository update hui hai?
 *
 *
 * Iske liye:
 *
 * → Webhooks use karte hain
 *
 *
 * Webhook basically ek notification system hai.
 *
 *
 * GitHub:
 *
 * "Repository me change hua hai"
 *
 *            ↓
 *
 * Notification bhejega
 *
 *            ↓
 *
 * Jenkins
 *
 *            ↓
 *
 * Build Trigger
 *
 *
 * ---------------------------------------------------------
 * ! STEP 1 : INSTALL GIT PLUGIN
 * ---------------------------------------------------------
 * Jenkins Dashboard
 *
 * → Manage Jenkins
 *
 * → Plugins
 *
 * → Available Plugins
 *
 * → Git Plugin install karo
 *
 *
 * GitHub integration ke liye
 * Git plugin required hota hai.
 *
 *
 * ---------------------------------------------------------
 * ! STEP 2 : CREATE JENKINS JOB
 * ---------------------------------------------------------
 * → New Item
 *
 * → Freestyle Project
 *
 * → Job Name
 *
 * Example:
 *
 * hello-jenkins
 *
 *
 * ---------------------------------------------------------
 * ! STEP 3 : CONNECT GITHUB REPOSITORY
 * ---------------------------------------------------------
 * Job Configuration me:
 *
 * → Source Code Management
 *
 * → Git
 *
 *
 * Repository URL:
 *
 * https://github.com/username/repository.git
 *
 *
 * Save kar do.
 *
 *
 * ---------------------------------------------------------
 * ! STEP 4 : ENABLE GITHUB HOOK TRIGGER
 * ---------------------------------------------------------
 * Build Triggers Section:
 *
 * ✔ GitHub hook trigger for GITScm polling
 *
 *
 * Ye option enable karna hai.
 *
 *
 * Isse Jenkins webhook events accept karega.
 *
 *
 * ---------------------------------------------------------
 * ! WHY NGROK?
 * ---------------------------------------------------------
 * Jenkins localhost pe run kar raha hota hai.
 *
 *
 * Example:
 *
 * http://localhost:8080
 *
 *
 * Problem:
 *
 * GitHub internet pe hai.
 *
 *
 * GitHub localhost access nahi kar sakta.
 *
 *
 * Isliye:
 *
 * → Ngrok use karte hain.
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS NGROK?
 * ---------------------------------------------------------
 * Ngrok localhost ko internet pe
 * publicly accessible bana deta hai.
 *
 *
 * Example:
 *
 * localhost:8080
 *
 *            ↓
 *
 * ngrok
 *
 *            ↓
 *
 * https://random-name.ngrok-free.dev
 *
 *
 * Ab GitHub Jenkins ko access kar sakta hai.
 *
 *
 * ---------------------------------------------------------
 * ! NGROK SETUP
 * ---------------------------------------------------------
 * 1) Ngrok install karo
 *
 * 2) Signup karo
 *
 * 3) Auth Token add karo
 *
 *
 * Example:
 *
 * ngrok config add-authtoken YOUR_TOKEN
 *
 *
 * ---------------------------------------------------------
 * ! START NGROK
 * ---------------------------------------------------------
 *
 * Command:
 *
 * ngrok http 8080
 *
 *
 * Output:
 *
 * Forwarding
 *
 * https://quake-quirk-revocable.ngrok-free.dev
 * ->
 * http://localhost:8080
 *
 *
 * Ye public URL hai.
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT NOTE
 * ---------------------------------------------------------
 * Jab tak ngrok terminal open rahega
 * tab tak URL kaam karega.
 *
 *
 * Agar terminal band:
 *
 * → URL band
 *
 * → Webhook fail
 *
 *
 * Free plan me restart pe URL bhi
 * change ho sakta hai.
 *
 *
 * ---------------------------------------------------------
 * ! GITHUB WEBHOOK SETUP
 * ---------------------------------------------------------
 * GitHub Repository
 *
 * → Settings
 *
 * → Webhooks
 *
 * → Add Webhook
 *
 *
 * ---------------------------------------------------------
 * ! PAYLOAD URL
 * ---------------------------------------------------------
 *
 * Correct URL:
 *
 * https://quake-quirk-revocable.ngrok-free.dev/github-webhook/
 *
 *
 * Note:
 *
 * URL me koi extra space nahi hona chahiye.
 *
 *
 * Wrong:
 *
 * https://quake-quirk-revocable.ngrok-free.dev /github-webhook/
 *
 *
 * Correct:
 *
 * https://quake-quirk-revocable.ngrok-free.dev/github-webhook/
 *
 *
 * ---------------------------------------------------------
 * ! CONTENT TYPE
 * ---------------------------------------------------------
 *
 * application/json
 *
 *
 * ---------------------------------------------------------
 * ! EVENTS
 * ---------------------------------------------------------
 *
 * Just the push event
 *
 *
 * Ya testing ke liye:
 *
 * Send me everything
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE FLOW
 * ---------------------------------------------------------
 *
 * GitHub Push
 *        ↓
 * Webhook Trigger
 *        ↓
 * Ngrok Public URL
 *        ↓
 * Jenkins
 *        ↓
 * Job Trigger
 *        ↓
 * Build Execute
 *
 *
 * ---------------------------------------------------------
 * ! TESTING
 * ---------------------------------------------------------
 * Repository me:
 *
 * README.md modify karo
 *
 * Commit karo
 *
 * Push karo
 *
 *
 * Example:
 *
 * git add .
 *
 * git commit -m "Testing Webhook"
 *
 * git push
 *
 *
 * ---------------------------------------------------------
 * ! VERIFY IN JENKINS
 * ---------------------------------------------------------
 * Jenkins Dashboard
 *
 * → Job
 *
 * → Build History
 *
 *
 * New Build:
 *
 * #2
 *
 * #3
 *
 * Automatically create ho jana chahiye.
 *
 *
 * Agar build automatic trigger ho gaya:
 *
 * → Webhook working
 *
 * → Ngrok working
 *
 * → Jenkins integration successful
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 *
 * Q1) Why do we use Webhooks in Jenkins?
 *
 * Ans:
 * Webhooks notify Jenkins whenever
 * changes occur in GitHub repositories.
 *
 *
 * Q2) Why is Ngrok required?
 *
 * Ans:
 * Jenkins runs on localhost and GitHub
 * cannot access localhost directly.
 * Ngrok exposes localhost using a
 * public URL.
 *
 *
 * Q3) What is the GitHub webhook URL for Jenkins?
 *
 * Ans:
 *
 * https://your-ngrok-url/github-webhook/
 *
 *
 * Q4) What happens when code is pushed?
 *
 * Ans:
 * GitHub sends a webhook notification,
 * Jenkins receives it and triggers the job.
 *
 *
 * Q5) What happens if Ngrok is closed?
 *
 * Ans:
 * Public URL becomes unavailable and
 * GitHub cannot reach Jenkins.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → GitHub changes trigger Jenkins builds
 * → Webhooks send notifications
 * → Jenkins localhost is not public
 * → Ngrok makes Jenkins publicly accessible
 * → Payload URL:
 *   https://<ngrok-url>/github-webhook/
 * → Push code → Jenkins auto build
 *
 */