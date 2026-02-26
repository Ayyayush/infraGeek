/**
 * =========================================================
 * GITLAB SERVER WITH DOCKER COMPOSE
 * =========================================================
 *
 * Docker Compose kya hota hai?
 * -----------------------------
 * Docker Compose ek tool hai jisse hum
 * multiple containers ko ek single YAML file
 * ke through manage kar sakte hain.
 *
 * GitLab jaise heavy application ke liye
 * Docker Compose best approach hoti hai.
 *
 *
 * ---------------------------------------------------------
 * WHY USE DOCKER COMPOSE FOR GITLAB?
 * ---------------------------------------------------------
 *
 * - Single command me GitLab start/stop
 * - Ports, volumes, configs ek jagah defined
 * - Easy restart & maintenance
 * - Industry-style setup (production-like)
 *
 *
 * ---------------------------------------------------------
 * NEED (Zarurat kyun?)
 * ---------------------------------------------------------
 *
 * - Cloud GitLab pe limitations hoti hain
 * - Local DevOps practice chahiye
 * - CI/CD unlimited practice karni ho
 * - GitLab ka full admin control chahiye
 *
 *
 * ---------------------------------------------------------
 * BASIC ARCHITECTURE (Simple Samjho)
 * ---------------------------------------------------------
 *
 * Docker Compose file:
 * - GitLab container run karti hai
 * - Volumes mount karti hai (data safe rehta hai)
 * - Ports expose karti hai (browser access)
 *
 *
 * ---------------------------------------------------------
 * docker-compose.yml (BASIC SETUP)
 * ---------------------------------------------------------
 *
 * version: "3.8"
 *
 * services:
 *   gitlab:
 *     image: gitlab/gitlab-ce:latest
 *     container_name: gitlab
 *     restart: always
 *     hostname: localhost
 *     ports:
 *       - "8000:80"      # GitLab Web UI
 *       - "2222:22"      # Git over SSH
 *     volumes:
 *       - ./config:/etc/gitlab
 *       - ./logs:/var/log/gitlab
 *       - ./data:/var/opt/gitlab
 *
 *
 * ---------------------------------------------------------
 * STEPS TO SETUP GITLAB USING DOCKER COMPOSE
 * ---------------------------------------------------------
 *
 * STEP 1:
 * Ek folder banao:
 * mkdir gitlab-docker
 * cd gitlab-docker
 *
 *
 * STEP 2:
 * docker-compose.yml file create karo
 * (upar wali config paste karo)
 *
 *
 * STEP 3:
 * GitLab start karo:
 * docker-compose up -d
 *
 *
 * STEP 4:
 * Logs check karo (first start heavy hota hai):
 * docker-compose logs -f gitlab
 *
 *
 * STEP 5:
 * Browser me open karo:
 * http://localhost:8000
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT NOTES
 * ---------------------------------------------------------
 *
 * - First start me 5–10 minutes lagenge
 * - System me minimum 6–8 GB RAM recommended
 * - Data volumes me persist hota hai
 *
 *
 * ---------------------------------------------------------
 * BENEFITS
 * ---------------------------------------------------------
 *
 * - One-click GitLab server
 * - Easy backup (volumes)
 * - Easy migration
 * - Real DevOps environment
 *
 *
 * ---------------------------------------------------------
 * DISADVANTAGES
 * ---------------------------------------------------------
 *
 * - Resource heavy (Windows pe slow ho sakta hai)
 * - Low RAM pe Docker crash ho sakta hai
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW QUESTION
 * ---------------------------------------------------------
 *
 * Q: Why use Docker Compose for GitLab?
 *
 * Ans:
 * Docker Compose simplifies running GitLab by managing
 * ports, volumes, and restart policies in a single file,
 * making it easy to deploy and maintain locally.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - Docker Compose = multi-container management
 * - GitLab with Compose = stable & clean setup
 * - Best for DevOps learning & CI/CD practice
 *
 */