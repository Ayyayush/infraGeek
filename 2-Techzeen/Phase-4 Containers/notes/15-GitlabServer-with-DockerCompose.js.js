/**
 * =========================================================
 * ! GITLAB SERVER WITH DOCKER COMPOSE
 * =========================================================
 * ! Docker Compose kya hota hai?
 * Docker Compose ek tool hai jisse hum
 * multiple containers ko ek single YAML file
 * ke through manage kar sakte hain.
 * GitLab jaise heavy applications ke liye
 * Docker Compose best approach hoti hai.
 *
 * ---------------------------------------------------------
 * ! WHY USE DOCKER COMPOSE FOR GITLAB?
 * ---------------------------------------------------------
 * → Single command me GitLab start/stop
 * → Ports, volumes, configs ek jagah defined
 * → Easy restart & maintenance
 * → Industry-style setup
 * → Production-like environment
 *
 * ---------------------------------------------------------
 * ! NEED (ZARURAT KYUN?)
 * ---------------------------------------------------------
 * → Cloud GitLab pe limitations hoti hain
 * → Local DevOps practice chahiye
 * → CI/CD unlimited practice karni ho
 * → GitLab ka full admin control chahiye
 *
 * ---------------------------------------------------------
 * ! BASIC ARCHITECTURE (SIMPLE SAMJHO)
 * ---------------------------------------------------------
 * Docker Compose file:
 * → GitLab container run karti hai
 * → Volumes mount karti hai (data safe rehta hai)
 * → Ports expose karti hai (browser access)
 * → Environment variables define karti hai
 *
 * ---------------------------------------------------------
 * ! docker-compose.yml (BASIC SETUP)
 * ---------------------------------------------------------
 * version: "3.8"
 *
 * services:
 *   gitlab:
 *     image: gitlab/gitlab-ce:latest
 *     container_name: gitlab
 *     restart: always
 *     hostname: localhost
 *
 *     ports:
 *       - "8000:80"      # GitLab Web UI
 *       - "2222:22"      # Git over SSH
 *
 *     volumes:
 *       - ./config:/etc/gitlab
 *       - ./logs:/var/log/gitlab
 *       - ./data:/var/opt/gitlab
 *
 *     environment:
 *       GITLAB_OMNIBUS_CONFIG: |
 *         gitlab_rails['initial_root_password']='A@ayush1232003'
 *         puma['worker_processes']=0
 *
 * ---------------------------------------------------------
 * ! image
 * ---------------------------------------------------------
 * image: gitlab/gitlab-ce:latest
 * → Sabse pehle GitLab ki image chahiye hogi
 * → Compose file run karne par Docker check karega
 *   ki local system me ye image available hai ya nahi
 * → Agar available nahi hui toh automatically download ho jayegi
 *
 * ---------------------------------------------------------
 * ! container_name
 * ---------------------------------------------------------
 * container_name: gitlab
 * → Container ka custom naam set hota hai
 * → Server ka naam kuch bhi rakh sakte hain
 *
 * ---------------------------------------------------------
 * ! ports
 * ---------------------------------------------------------
 * - "8000:80"
 * Host Port : Container Port
 * → 8000 = Host environment/system port
 * → 80   = Container ke andar GitLab port
 * Browser access:
 * http://localhost:8000
 *
 * ---------------------------------------------------------
 * ! environment
 * ---------------------------------------------------------
 * environment:
 * → Environment variables define karne ke liye use hota hai
 *
 * GITLAB_OMNIBUS_CONFIG
 * → Ye GitLab ka special environment variable hai
 * → Iske through root password manage kar sakte hain
 * → Internal GitLab configurations manage kar sakte hain
 *
 * ---------------------------------------------------------
 * ! YAML PIPE SYMBOL (|)
 * ---------------------------------------------------------
 * YAML ke andar:
 * |
 * Pipe symbol use hota hai:
 * → Multiple lines likhne ke liye
 * → Agar YAML ke andar multiple configurations
 *   likhni ho toh pipe symbol use karte hain
 *
 * Example:
 * GITLAB_OMNIBUS_CONFIG: |
 *   line1
 *   line2
 *   line3
 *
 * ---------------------------------------------------------
 * ! initial_root_password
 * ---------------------------------------------------------
 * gitlab_rails['initial_root_password']='A@ayush1232003'
 * → GitLab ka initial root password set karta hai
 *
 * ---------------------------------------------------------
 * ! puma server
 * ---------------------------------------------------------
 * puma['worker_processes']=0
 * → GitLab basically Puma server ke upar run karta hai
 * → Puma ek Ruby/Rails application server hai
 * → Puma normally clusters/workers pe kaam karta hai
 * → Abhi hum multiple containers/clusters pe kaam nahi kar rahe
 * → Isliye worker_processes ko 0 set kar diya
 * → Lightweight/default setup pe kaam karega
 *
 * ---------------------------------------------------------
 * ! WHY OLD COMMANDS ARE NOT NEEDED NOW?
 * ---------------------------------------------------------
 * Pehle:
 * → Manually docker run commands likhne padte the
 * → Ports manually dene padte the
 * → Volumes manually dene padte the
 * → Configurations manually likhni padti thi
 *
 * Ab:
 * → Sab kuch docker-compose.yml me defined hai
 * → Ab sidha yahi se sab ho sakta hai
 *
 * Bas:
 * docker-compose up -d
 *
 * → Sirf itna run karna hai
 * → Sab automatically setup ho jayega
 *
 * ---------------------------------------------------------
 * ! volumes
 * ---------------------------------------------------------
 * Agar hum container delete kar dete hain:
 * → Saara data delete ho jayega
 *
 * Isliye:
 * → Volumes use karte hain
 *
 * Volumes:
 * → Data persist karte hain
 * → Configurations safe rakhte hain
 * → Logs safe rakhte hain
 *
 * Docker volumes hum next topic/video me detail me dekhenge.
 *
 * ---------------------------------------------------------
 * ! STEPS TO SETUP GITLAB USING DOCKER COMPOSE
 * ---------------------------------------------------------
 * ! STEP 1
 * Folder banao:
 * mkdir gitlab-docker
 * cd gitlab-docker
 *
 * ! STEP 2
 * docker-compose.yml file create karo
 * Upar wali config paste karo
 *
 * ! STEP 3
 * GitLab start karo:
 * docker-compose up -d
 *
 * ! STEP 4
 * Logs check karo:
 * docker-compose logs -f gitlab
 * → First startup heavy hota hai
 * → Isliye logs important hote hain
 *
 * ! STEP 5
 * Browser me open karo:
 * http://localhost:8000
 *
 * ---------------------------------------------------------
 * ! IMPORTANT NOTES
 * ---------------------------------------------------------
 * → First startup me 5–10 minutes lag sakte hain
 * → Minimum 6–8 GB RAM recommended hai
 * → GitLab resource-heavy application hai
 * → Data volumes me persist hota hai
 *
 * ---------------------------------------------------------
 * ! BENEFITS
 * ---------------------------------------------------------
 * → One-click GitLab server
 * → Easy backup
 * → Easy migration
 * → Real DevOps environment
 * → Unlimited CI/CD practice
 *
 * ---------------------------------------------------------
 * ! DISADVANTAGES
 * ---------------------------------------------------------
 * → Resource heavy hai
 * → Low RAM systems pe slow ho sakta hai
 * → Windows pe Docker kabhi heavy lag sakta hai
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is Docker Compose?
 * Ans:
 * Docker Compose is a tool used to manage
 * multiple containers using a single YAML file.
 *
 * Q2) Why use Docker Compose for GitLab?
 * Ans:
 * Docker Compose simplifies GitLab deployment
 * by managing ports, volumes, restart policies,
 * and configurations in a single file.
 *
 * Q3) Why are volumes used?
 * Ans:
 * Volumes are used for persistent storage
 * so data remains safe even after container deletion.
 *
 * Q4) What does the ports section do?
 * Ans:
 * It maps host machine ports to container ports
 * for external access.
 *
 * Q5) What is GITLAB_OMNIBUS_CONFIG?
 * Ans:
 * It is a GitLab environment variable used
 * to configure internal GitLab settings.
 *
 * Q6) Why is pipe symbol (|) used in YAML?
 * Ans:
 * Pipe symbol is used for writing multi-line content.
 *
 * Q7) What is Puma server?
 * Ans:
 * Puma is the application server
 * on which GitLab runs internally.
 *
 * Q8) Why set puma['worker_processes']=0 ?
 * Ans:
 * To use lightweight/default worker mode
 * for local setup.
 *
 * Q9) Which command starts Docker Compose services?
 * Ans:
 * docker-compose up -d
 *
 * Q10) What does docker-compose logs -f do?
 * Ans:
 * It shows real-time logs of running containers.
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Docker Compose = Multi-container management
 * → GitLab with Compose = Stable & clean setup
 * → Best for DevOps learning & CI/CD practice
 * → Easy setup + maintenance + persistence
 *
 */