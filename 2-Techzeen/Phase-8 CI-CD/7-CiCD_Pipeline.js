/**
 * ! CI/CD PIPELINE USING JENKINS + GITHUB + VERCEL
 *
 * Ab hum actual CI/CD Pipeline banayenge.
 *
 * Goal:
 *
 * GitHub
 *    ↓
 * Webhook
 *    ↓
 * Jenkins
 *    ↓
 * Build + Test
 *    ↓
 * Vercel Deploy
 *
 *
 * Jaise hi GitHub pe code push hoga:
 *
 * → Webhook notification bhejega
 * → Jenkins trigger hoga
 * → Build karega
 * → Test karega
 * → Automatically Vercel pe deploy kar dega
 *
 *
 * ! JENKINS PIPELINE
 *
 * pipeline {
 *     agent any
 *
 *     environment {
 *         VERCEL_TOKEN = credentials('vercel_token')
 *     }
 *
 *     stages {
 *
 *         stage('Install') {
 *             steps {
 *                 bat 'npm install'
 *             }
 *         }
 *
 *         stage('Test') {
 *             steps {
 *                 echo 'Skipping tests - no test script found'
 *             }
 *         }
 *
 *         stage('Build') {
 *             steps {
 *                 bat 'npm run build'
 *             }
 *         }
 *
 *         stage('Deploy') {
 *             steps {
 *                 bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
 *             }
 *         }
 *     }
 * }
 *
 *
 * ! PIPELINE EXPLANATION
 *
 * agent any
 * → Pipeline kisi bhi available Jenkins agent pe run kar sakti hai.
 *
 *
 * environment
 * → Environment variables define karte hain.
 *
 *
 * VERCEL_TOKEN = credentials('vercel_token')
 * → Jenkins Credentials Store se token fetch karega.
 *
 * → Token code me hardcode nahi karna padta.
 *
 *
 * ! INSTALL STAGE
 *
 * bat 'npm install'
 *
 * → Project ki saari dependencies install karega.
 *
 *
 * ! TEST STAGE
 *
 * echo 'Skipping tests - no test script found'
 *
 * → Tests nahi hain isliye sirf message print kar raha hai.
 *
 * Future me:
 *
 * bat 'npm test'
 *
 * use kar sakte ho.
 *
 *
 * ! BUILD STAGE
 *
 * bat 'npm run build'
 *
 * → Next.js application build karega.
 *
 * → Production build generate karega.
 *
 *
 * ! DEPLOY STAGE
 *
 * bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
 *
 * → Vercel CLI run karega.
 * → Production deployment karega.
 * → Jenkins credential se token lega.
 *
 *
 * ! VERCEL SETUP
 *
 * Vercel CLI install:
 *
 * npm i -g vercel
 *
 *
 * Login:
 *
 * vercel login
 *
 *
 * Browser me login complete karo.
 *
 *
 * ! CREATE VERCEL TOKEN
 *
 * Vercel Dashboard
 * → Settings
 * → Tokens
 * → Create Token
 *
 *
 * Example:
 *
 * Name:
 * Jenkins Token
 *
 * Scope:
 * Full Account
 *
 *
 * Generated token ko copy kar lo.
 *
 *
 * ! JENKINS CREDENTIAL SETUP
 *
 * Jenkins Dashboard
 * → Manage Jenkins
 * → Credentials
 * → Global
 * → Add Credentials
 *
 *
 * Kind:
 * Secret Text
 *
 *
 * Secret:
 * Vercel Token
 *
 *
 * ID:
 *
 * vercel_token
 *
 *
 * Important:
 *
 * ID same hona chahiye:
 *
 * credentials('vercel_token')
 *
 *
 * warna pipeline fail hogi.
 *
 *
 * ! CONNECT PROJECT TO VERCEL
 *
 * vercel --token YOUR_TOKEN
 *
 *
 * CLI puchega:
 *
 * → Team
 * → Project Name
 * → Git Repository
 *
 *
 * Example:
 *
 * pipeline
 *
 *
 * Vercel automatically detect karega:
 *
 * → Next.js
 * → Build Command
 * → Output Directory
 *
 *
 * Example Output:
 *
 * Production:
 *
 * https://pipeline-xxxx.vercel.app
 *
 *
 * Iska matlab deployment successful.
 *
 *
 * ! GITHUB WEBHOOK SETUP
 *
 * Ab GitHub ko Jenkins ko notify karna hai.
 *
 * Iske liye:
 *
 * → Ngrok use karenge
 *
 *
 * Start:
 *
 * ngrok http 8080
 *
 *
 * Output:
 *
 * https://quake-quirk-revocable.ngrok-free.dev
 *
 *
 * ! WEBHOOK
 *
 * GitHub Repository
 * → Settings
 * → Webhooks
 * → Add Webhook
 *
 *
 * Payload URL:
 *
 * https://quake-quirk-revocable.ngrok-free.dev/github-webhook/
 *
 *
 * Content Type:
 *
 * application/json
 *
 *
 * Events:
 *
 * Just the push event
 *
 *
 * Save.
 *
 *
 * ! COMPLETE FLOW
 *
 * Developer Pushes Code
 *          ↓
 * GitHub
 *          ↓
 * Webhook
 *          ↓
 * Ngrok Public URL
 *          ↓
 * Jenkins Trigger
 *          ↓
 * npm install
 *          ↓
 * npm run build
 *          ↓
 * Vercel Deploy
 *          ↓
 * Production Updated
 *
 *
 * ! TESTING
 *
 * README.md me change karo.
 *
 * git add .
 * git commit -m "Webhook Test"
 * git push
 *
 *
 * GitHub Push
 *          ↓
 * Jenkins Build Start
 *          ↓
 * Build Success
 *          ↓
 * New Vercel Deployment
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * Q1) How does CI/CD work in this setup?
 *
 * Ans:
 * GitHub webhook triggers Jenkins, Jenkins builds
 * the project and deploys it to Vercel automatically.
 *
 *
 * Q2) Why do we store Vercel token in Jenkins Credentials?
 *
 * Ans:
 * To securely manage secrets instead of hardcoding them.
 *
 *
 * Q3) Why is Ngrok required?
 *
 * Ans:
 * GitHub cannot access localhost directly.
 * Ngrok exposes Jenkins publicly.
 *
 *
 * Q4) What happens after a git push?
 *
 * Ans:
 * GitHub sends a webhook event, Jenkins pipeline starts,
 * builds the application and deploys it.
 *
 *
 * Q5) What is the role of Vercel CLI?
 *
 * Ans:
 * It allows Jenkins to deploy applications to Vercel
 * using command-line commands.
 *
 */