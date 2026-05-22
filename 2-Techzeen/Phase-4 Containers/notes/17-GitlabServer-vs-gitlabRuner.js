/**
 * =========================================================
 * ! GITLAB SERVER VS GITLAB RUNNER
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS GITLAB SERVER?
 * ---------------------------------------------------------
 * GitLab Server ek DevOps platform hai
 * jo provide karta hai:
 *
 * → Git repositories
 * → CI/CD pipelines
 * → Code review
 * → Issue tracking
 * → DevOps management
 *
 * Simple words me:
 *
 * → GitLab Server pipelines ko manage karta hai
 * → Instructions deta hai
 * → CI/CD workflow control karta hai
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS GITLAB RUNNER?
 * ---------------------------------------------------------
 * GitLab Runner ek lightweight agent hai
 * jo GitLab Server se CI/CD jobs run karta hai.
 *
 * It:
 *
 * → GitLab Server ko continuously listen karta hai
 * → Jobs execute karta hai
 * → Results wapas GitLab Server ko bhejta hai
 *
 *
 * Definition:
 *
 * → A lightweight agent that runs CI/CD jobs
 *   from GitLab Server.
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * GitLab Server:
 *
 * → Pipelines create/manage kar leta hai
 *
 * Lekin:
 *
 * → Actual execution khud nahi karta
 *
 *
 * Execution ke liye:
 *
 * → Ek agent chahiye hota hai
 * → Jise GitLab Runner bolte hain
 *
 *
 * Isliye:
 *
 * → GitLab Server pipelines ko directly run nahi kar sakta
 * → Runner required hota hai
 *
 *
 * ---------------------------------------------------------
 * ! CI/CD
 * ---------------------------------------------------------
 * CI/CD =
 *
 * → Continuous Integration
 * → Continuous Deployment / Delivery
 *
 *
 * Continuous Integration:
 *
 * → Developers ka code continuously merge/test hota hai
 *
 *
 * Continuous Deployment:
 *
 * → Code automatically deploy hota hai
 *
 *
 * ---------------------------------------------------------
 * ! HOW GITLAB SERVER & RUNNER WORK TOGETHER?
 * ---------------------------------------------------------
 *
 * Developer pushes code
 *          ↓
 * GitLab Server pipeline create karta hai
 *          ↓
 * GitLab Runner job pick karta hai
 *          ↓
 * Build/Test/Deploy execute hota hai
 *          ↓
 * Result GitLab Server ko send hota hai
 *
 *
 * ---------------------------------------------------------
 * ! TYPES OF RUNNERS
 * ---------------------------------------------------------
 * Runners 2 types ke hote hain:
 *
 *
 * 1) Shared Runner
 *
 * → Multiple projects use kar sakte hain
 * → Sab projects ke liye available hota hai
 *
 *
 * 2) Specific Runner
 *
 * → Sirf ek specific project ke liye hota hai
 * → Dedicated runner hota hai
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT NOTE
 * ---------------------------------------------------------
 * Runners:
 *
 * → Shared bhi ho sakte hain
 * → Specific bhi ho sakte hain
 *
 *
 * Shared Runner:
 *
 * → All projects use kar sakte hain
 *
 *
 * Specific Runner:
 *
 * → Sirf one project use karta hai
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is GitLab Server?
 * Ans:
 * GitLab Server is a DevOps platform
 * that manages repositories, CI/CD pipelines,
 * and DevOps workflows.
 *
 *
 * Q2) What is GitLab Runner?
 * Ans:
 * GitLab Runner is a lightweight agent
 * that executes CI/CD jobs from GitLab Server.
 *
 *
 * Q3) Can GitLab Server execute pipelines by itself?
 * Ans:
 * No.
 * GitLab Server manages pipelines,
 * but actual execution is done by GitLab Runner.
 *
 *
 * Q4) What is the role of GitLab Runner?
 * Ans:
 * GitLab Runner listens to GitLab Server,
 * executes jobs, and sends results back.
 *
 *
 * Q5) What does CI/CD stand for?
 * Ans:
 * CI/CD stands for:
 *
 * → Continuous Integration
 * → Continuous Deployment/Delivery
 *
 *
 * Q6) What is a Shared Runner?
 * Ans:
 * A Shared Runner can be used
 * by multiple projects.
 *
 *
 * Q7) What is a Specific Runner?
 * Ans:
 * A Specific Runner is dedicated
 * to only one project.
 *
 *
 * Q8) Why are runners important?
 * Ans:
 * Runners are important because
 * they perform the actual build,
 * test, and deployment tasks.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → GitLab Server = Manages CI/CD pipelines
 * → GitLab Runner = Executes CI/CD jobs
 * → Server gives instructions
 * → Runner performs actual work
 * → Runners can be Shared or Specific
 *
 */