/**
 * =========================================================
 * ! GITLAB INSTALLATION & SETUP USING DOCKER
 * =========================================================
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS GITLAB?
 * ---------------------------------------------------------
 *
 * * GitLab ek DevOps platform hai jo provide karta hai:
 *
 *      → Version Control (Git)
 *      → CI/CD Pipelines
 *      → Issue Tracking
 *      → Code Review
 *      → Container Registry
 *
 *
 * * Simple words me:
 *
 *      GitLab = GitHub + CI/CD + DevOps Tools (All-in-One)
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE INSTALL GITLAB LOCALLY?
 * ---------------------------------------------------------
 *
 * * Ab tak hum GitLab/GitHub ko:
 *
 *      → Cloud pe use kar rahe the
 *
 *
 * * Lekin cloud platforms pe kuch limitations hoti hain:
 *
 *      → User limits
 *      → Private repo limits
 *      → Limited CI/CD minutes
 *      → Admin-level control nahi milta
 *
 *
 * * Isliye:
 *
 *      → Hum GitLab ko Docker pe locally install karte hain
 *
 *
 * ---------------------------------------------------------
 * ! WHY INSTALL GITLAB USING DOCKER?
 * ---------------------------------------------------------
 *
 * * Jab hum GitLab ko Docker pe install kar dete hain:
 *
 *      → GitLab ek LOCAL PLATFORM ban jata hai
 *      → Koi cloud restriction nahi hoti
 *      → Unlimited repos/users/pipelines possible hote hain
 *      → Real industry-like DevOps environment milta hai
 *
 *
 * * Matlab:
 *
 *      → Tum apna khud ka "Mini GitLab Server" bana lete ho
 *
 *
 * ---------------------------------------------------------
 * ! BENEFITS OF GITLAB ON DOCKER
 * ---------------------------------------------------------
 *
 *      → Full admin control
 *      → Unlimited CI/CD practice
 *      → Local network pe bhi kaam kar sakta hai
 *      → DevOps learning ke liye best
 *      → Industry-grade setup experience milta hai
 *
 *
 * ---------------------------------------------------------
 * ! HIGH LEVEL SETUP FLOW
 * ---------------------------------------------------------
 *
 *      1) Docker installed hona chahiye
 *
 *      2) Official GitLab Docker image use karte hain
 *
 *      3) Ports map karte hain:
 *
 *              → 80   = HTTP
 *              → 443  = HTTPS
 *              → 22   = SSH
 *
 *      4) Volumes mount karte hain
 *         taaki data container delete hone par bhi persist rahe
 *
 *
 * ---------------------------------------------------------
 * ! COMMAND USED TO RUN GITLAB CONTAINER
 * ---------------------------------------------------------
 *
 *      docker run -p 8000:80 gitlab/gitlab-ce
 *
 *
 * * Is command ke through:
 *
 *      → GitLab container run ho jata hai
 *
 *
 * ---------------------------------------------------------
 * ! AFTER RUNNING THE CONTAINER
 * ---------------------------------------------------------
 *
 * * Browser me:
 *
 *      localhost:8000
 *
 * * open karte hain.
 *
 *
 * * Waha pe:
 *
 *      → Original GitLab cloud ID use nahi hoti
 *      → Hum ek LOCAL ACCOUNT register karte hain
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO GET INITIAL ROOT PASSWORD?
 * ---------------------------------------------------------
 *
 * * Linux me:
 *
 *      cat
 *
 * * command file content read karne ke liye use hoti hai.
 *
 *
 * * GitLab initial password dekhne ke liye:
 *
 *      docker exec -it <container_id> \
 *      cat /etc/gitlab/initial_root_password
 *
 *
 * * Is command me:
 *
 *      docker exec
 *              → Running container ke andar command execute karta hai
 *
 *      -it
 *              → Interactive terminal open karta hai
 *
 *      cat
 *              → File content read karta hai
 *
 *      /etc/gitlab/initial_root_password
 *              → Initial root password wali file
 *
 *
 * * Is command ke baad:
 *
 *      → Hume root password mil jata hai
 *      → Us password se GitLab login kar sakte hain
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT NOTE
 * ---------------------------------------------------------
 *
 * * Setup ke time bohot saare logs dikhenge:
 *
 *      → postgres-exporter logs
 *      → chef logs
 *      → internal service logs
 *
 *
 * * Ye sab NORMAL GitLab setup behaviour hai.
 *
 *
 * ---------------------------------------------------------
 * ! FINAL TAKEAWAY
 * ---------------------------------------------------------
 *
 * * GitLab ko Docker pe install karna matlab:
 *
 *      → Apna Local DevOps Lab banana
 *
 *
 * * Isse:
 *
 *      → Cloud restrictions se freedom milti hai
 *      → Unlimited practice possible hoti hai
 *      → Real industry-level DevOps environment milta hai
 *
 *
 * =========================================================
 * ! INTERVIEW QUESTIONS FROM THIS TOPIC
 * =========================================================
 *
 * Q1) What is GitLab?
 *
 * Ans:
 * GitLab is a DevOps platform that provides Git repository
 * management, CI/CD pipelines, issue tracking, code review,
 * and many DevOps tools in one platform.
 *
 *
 * ---------------------------------------------------------
 *
 * Q2) Why do we install GitLab locally using Docker?
 *
 * Ans:
 * We install GitLab locally to remove cloud restrictions,
 * get full admin control, practice unlimited CI/CD,
 * and create a real DevOps environment.
 *
 *
 * ---------------------------------------------------------
 *
 * Q3) What is the advantage of using Docker for GitLab?
 *
 * Ans:
 * Docker makes installation easy, isolated, portable,
 * and lightweight. It also simplifies deployment and management.
 *
 *
 * ---------------------------------------------------------
 *
 * Q4) Which ports are commonly used by GitLab?
 *
 * Ans:
 *
 *      → 80   = HTTP
 *      → 443  = HTTPS
 *      → 22   = SSH
 *
 *
 * ---------------------------------------------------------
 *
 * Q5) Why are volumes used while running GitLab container?
 *
 * Ans:
 * Volumes are used for persistent storage so that data
 * remains safe even if the container is deleted or restarted.
 *
 *
 * ---------------------------------------------------------
 *
 * Q6) What does docker exec command do?
 *
 * Ans:
 * docker exec is used to run commands inside a running container.
 *
 *
 * ---------------------------------------------------------
 *
 * Q7) What does the cat command do in Linux?
 *
 * Ans:
 * cat command is used to read/display file contents in Linux.
 *
 *
 * ---------------------------------------------------------
 *
 * Q8) What is the purpose of the initial_root_password file?
 *
 * Ans:
 * It stores the automatically generated initial root password
 * for GitLab login.
 *
 *
 * ---------------------------------------------------------
 *
 * Q9) Difference between GitHub and GitLab?
 *
 * Ans:
 *
 *      GitHub:
 *              Mainly focused on source code hosting
 *
 *      GitLab:
 *              Provides built-in CI/CD and DevOps tools
 *
 *
 * ---------------------------------------------------------
 *
 * Q10) Why is GitLab useful for DevOps learning?
 *
 * Ans:
 * GitLab provides Git, CI/CD, container registry,
 * and automation features together,
 * making it ideal for DevOps practice.
 *
 */