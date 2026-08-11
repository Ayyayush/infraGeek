/**
 * =========================================================
 * ! JENKINS GITHUB INTEGRATION USING WEBHOOK AND NGROK
 * =========================================================
 *
 * Hum Jenkins ko GitHub ke saath integrate karenge taaki GitHub repository me
 * change hote hi Jenkins automatically job trigger kar sake.
 *
 * ! WHY DO WE NEED WEBHOOKS?
 *
 * Problem:
 * GitHub ko kaise pata chalega ki Jenkins ko build start karna hai?
 * Aur Jenkins ko kaise pata chalega ki GitHub repository update hui hai?
 *
 * Iske liye:
 * → Webhooks use karte hain
 *
 * ! Webhook basically ek notification system hai.
 *
 * GitHub Repo Updated
 *        ↓
 * Webhook Notification
 *        ↓
 * Jenkins
 *        ↓
 * Build Trigger
 *
 * Github pe jaake repo bna liya usko public rakha taaki credentials na lage.
 * Ab source code management pe jayenge aur Git select karenge.
 * Jisse link karna hai uska URL denge.
 * Credentials kuch nahi dena hai agar repository public hai.
 * Ab Branches section me jaake master ki jagah main likh do.
 *
 * ! STEP 1 : INSTALL GIT PLUGIN
 *
 * Jenkins Dashboard
 * → Manage Jenkins
 * → Plugins
 * → Available Plugins
 * → Git Plugin install karo
 *
 * GitHub integration ke liye Git plugin required hota hai.
 *
 * ! STEP 2 : CREATE JENKINS JOB
 *
 * → New Item
 * → Freestyle Project
 * → Job Name
 *
 * Example:
 * hello-jenkins
 *
 * ! STEP 3 : CONNECT GITHUB REPOSITORY
 *
 * Job Configuration me:
 * → Source Code Management
 * → Git
 *
 * Repository URL:
 * https://github.com/username/repository.git
 *
 * Save kar do.
 *
 * ! STEP 4 : ENABLE GITHUB HOOK TRIGGER
 * Build Triggers Section:
 * ✔ GitHub hook trigger for GITScm polling
 * Ye option enable karna hai.
 * Isse Jenkins webhook events accept karega.
 *
 * 
 * ! WHY NGROK?
 * Jenkins localhost pe run kar raha hota hai.
 *
 * Example:
 * http://localhost:8080
 *
 * Problem:
 * GitHub internet pe hai.
 * GitHub localhost access nahi kar sakta.
 *
 * Isliye:
 * → Ngrok use karte hain.
 *
 * ! WHAT IS NGROK?
 * Ngrok localhost ko internet pe publicly accessible bana deta hai.
 *
 * Example:
 * localhost:8080
 *        ↓
 * ngrok
 *        ↓
 * https://random-name.ngrok-free.dev
 *
 * Ab GitHub Jenkins ko access kar sakta hai.
 *
 * ! NGROK SETUP
 * 1) Ngrok install karo
 * 2) Signup karo
 * 3) Auth Token add karo
 *
 * Command:
 * ngrok config add-authtoken YOUR_TOKEN
 *
 * ! START NGROK
 * Command:
 *
 * ngrok http 8080
 *
 * Output:
 *
 * Forwarding
 * https://quake-quirk-revocable.ngrok-free.dev -> http://localhost:8080
 *
 * Ye public URL hai.
 * Jab tak ye terminal open rahega chalega.
 * Terminal band → URL band → Webhook fail.
 *
 * Free plan me restart pe URL bhi change ho sakta hai.
 *
 * 
 * ! GITHUB WEBHOOK SETUP
 * GitHub Repository
 * → Settings
 * → Webhooks
 * → Add Webhook
 *
 * ! PAYLOAD URL
 * Correct:
 * https://quake-quirk-revocable.ngrok-free.dev/github-webhook/
 *
 * Note:
 * URL me extra space nahi hona chahiye.
 *
 * Wrong:
 * https://quake-quirk-revocable.ngrok-free.dev /github-webhook/
 *
 * Content Type:
 * application/json
 *
 * Events:
 * → Just the push event
 *
 * 
 * 
 * ! COMPLETE FLOW
 * GitHub Push
 *      ↓
 * Webhook Trigger
 *      ↓
 * Ngrok Public URL
 *      ↓
 * Jenkins
 *      ↓
 * Job Trigger
 *      ↓
 * Build Execute
 *
 * ! TESTING
 * README.md modify karo.
 * git add .
 * git commit -m "Testing Webhook"
 * git push
 *
 * Ab Jenkins Dashboard → Build History me dekho.
 *
 * Agar build automatically trigger ho gaya:
 *
 * → Webhook working
 * → Ngrok working
 * → Jenkins integration successful
 *
 * 
 * 
 * ! INTERVIEW QUESTIONS
 * Q1) Why do we use Webhooks in Jenkins?
 * Ans: GitHub repository me changes hote hi Jenkins ko notify karne ke liye.
 *
 * Q2) Why is Ngrok required?
 * Ans: GitHub localhost access nahi kar sakta, Ngrok localhost ko public URL deta hai.
 *
 * Q3) What is the GitHub webhook URL for Jenkins?
 * Ans: https://<ngrok-url>/github-webhook/
 *
 * Q4) What happens when code is pushed?
 * Ans: GitHub webhook bhejta hai, Jenkins receive karke build trigger karta hai.
 *
 * Q5) What happens if Ngrok is closed?
 * Ans: Public URL unavailable ho jayega aur GitHub Jenkins ko reach nahi kar payega.
 *
 */