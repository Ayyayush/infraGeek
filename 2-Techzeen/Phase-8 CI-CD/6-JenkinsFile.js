/**
 * ! Jenkinsfile
 *
 * Jenkinsfile ek text file hoti hai jisme pipeline ke steps ko as code likhte hain.
 *
 * Ye define karti hai ki Jenkins ko kya run karna hai:
 * → Build
 * → Test
 * → Deploy
 * → Automation Tasks
 *
 * Ye usually project repository ke root folder me store ki jaati hai.
 *
 * Example:
 *
 * project/
 * ├── src/
 * ├── package.json
 * └── Jenkinsfile
 *
 *
 * ! Why do we use Jenkinsfile?
 *
 * Pipeline UI me banane ki jagah code me likh sakte hain.
 *
 * Benefits:
 * → Version controlled hoti hai
 * → GitHub/GitLab me store kar sakte hain
 * → Team members review kar sakte hain
 * → Easily reusable hoti hai
 * → Pipeline as Code approach follow karti hai
 *
 *
 * ! Types of Pipelines in Jenkins
 *
 * 1. Declarative Pipeline
 *
 * → Simple
 * → Easy to read
 * → Structured syntax
 * → Beginners ke liye recommended
 *
 *
 * 2. Scripted Pipeline
 *
 * → Groovy based hoti hai
 * → More flexible
 * → Complex workflows ke liye use hoti hai
 *
 * Jab hume:
 * → if-else
 * → loops
 * → custom logic
 * → advanced workflows
 *
 * implement karne hote hain tab Scripted Pipeline use karte hain.
 *
 *
 * Jenkinsfile ka concept aage aane wale lectures me detail me dekhenge.
 *
 * Hum deployment bhi dekhenge:
 * → Vercel
 * → Render
 * → AWS
 *
 *
 * ! Creating Declarative Pipeline
 *
 * Jenkins Dashboard
 * → New Item
 * → Name: declarative
 * → Pipeline
 * → OK
 *
 * Pipeline Script:
 *
 * pipeline {
 *     agent any
 *
 *     stages {
 *
 *         stage("Build") {
 *             steps {
 *                 echo "Building the project ......"
 *             }
 *         }
 *
 *         stage("Test") {
 *             steps {
 *                 echo "Running tests ......"
 *             }
 *         }
 *
 *         stage("Deploy") {
 *             steps {
 *                 echo "Deploying the app......"
 *             }
 *         }
 *
 *     }
 * }
 *
 *
 * ! Declarative Pipeline Explanation
 *
 * pipeline
 * → Entire CI/CD workflow.
 *
 * agent any
 * → Any available Jenkins agent pe run karo.
 *
 * stages
 * → Multiple phases ka container.
 *
 * stage("Build")
 * → Build phase.
 *
 * stage("Test")
 * → Testing phase.
 *
 * stage("Deploy")
 * → Deployment phase.
 *
 * steps
 * → Actual commands execute hote hain.
 *
 *
 * ! Creating Scripted Pipeline
 *
 * Jenkins Dashboard
 * → New Item
 * → Name: scripted
 * → Pipeline
 * → OK
 *
 * Script:
 *
 * node {
 *
 *     stage('Build') {
 *         echo 'Building the project....'
 *     }
 *
 *     stage('Test') {
 *         echo 'Running tests....'
 *     }
 *
 *     stage('Deploy') {
 *         echo 'Deploying the app....'
 *     }
 *
 * }
 *
 *
 * ! Scripted Pipeline Explanation
 *
 * node
 * → Jenkins node/agent pe execution start hoti hai.
 *
 * stage
 * → Pipeline ke phases define karta hai.
 *
 * echo
 * → Console me message print karta hai.
 *
 *
 * ! Declarative vs Scripted Pipeline
 *
 * Declarative:
 * → Easy syntax
 * → Less code
 * → Beginner friendly
 * → Recommended for most projects
 *
 * Scripted:
 * → Groovy based
 * → More flexible
 * → Advanced logic support
 * → Complex workflows ke liye
 *
 *
 * ! Interview Questions
 *
 * Q1) What is Jenkinsfile?
 *
 * Ans:
 * Jenkinsfile is a text file that contains the Jenkins Pipeline
 * definition as code and is usually stored in the repository.
 *
 *
 * Q2) Where is Jenkinsfile stored?
 *
 * Ans:
 * Usually in the root directory of the project repository.
 *
 *
 * Q3) What are the types of Jenkins Pipelines?
 *
 * Ans:
 * → Declarative Pipeline
 * → Scripted Pipeline
 *
 *
 * Q4) Which pipeline is recommended for beginners?
 *
 * Ans:
 * Declarative Pipeline.
 *
 *
 * Q5) Why do we use Jenkinsfile?
 *
 * Ans:
 * To manage CI/CD pipelines as code and keep them under version control.
 *
 *
 * Q6) What is agent any?
 *
 * Ans:
 * It allows the pipeline to run on any available Jenkins agent.
 *
 *
 * Q7) What is node in Scripted Pipeline?
 *
 * Ans:
 * Node specifies the Jenkins agent where the pipeline will execute.
 *
 *
 * Aage hum:
 * → if-else
 * → parameters
 * → environment variables
 * → real project deployment
 *
 * Scripted aur Declarative dono pipelines me dekhenge.
 *
 */