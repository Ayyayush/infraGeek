/**
 * =========================================================
 * ! GITLAB RUNNER ON GITLAB SERVER USING DOCKER
 * =========================================================
 * Now we will run GitLab Runner on Docker.
 *
 * ---------------------------------------------------------
 * ! INITIAL CHANGES IN docker-compose.yml
 * ---------------------------------------------------------
 * Pehle docker compose file mein:
 * → hostname add karo
 * → restart: always add karo
 *
 * restart: always
 * → Agar container kabhi error ki wajah se ruk jaye
 * → Toh automatically restart ho jayega
 *
 * ---------------------------------------------------------
 * ! CREATING GITLAB RUNNER SERVICE
 * ---------------------------------------------------------
 * Pehle humne:
 * → GitLab server ki service banayi thi
 *
 * Ab:
 * → Ussi docker-compose.yml file me
 *   niche GitLab Runner ki service banayenge
 *
 * ---------------------------------------------------------
 * ! GITLAB RUNNER SERVICE
 * ---------------------------------------------------------
 * gitlab-runner:
 *   image: gitlab/gitlab-runner:latest
 *   container_name: my-gitlab-runner
 *   restart: always
 *
 *   depends_on:
 *     - gitlab-server
 *
 *   volumes:
 *     - ./gitlab-runner/config:/etc/gitlab-runner
 *     - /var/run/docker.sock:/var/run/docker.sock
 *
 *   privileged: true
 *
 * ---------------------------------------------------------
 * ! DESCRIPTION OF ABOVE YAML CODE
 * ---------------------------------------------------------
 * ! image
 * image: gitlab/gitlab-runner:latest
 * → Official GitLab Runner image use hogi
 *
 * ! container_name
 * container_name: my-gitlab-runner
 * → Runner container ka custom naam
 *
 * ! restart
 * restart: always
 * → Error ya reboot ke baad container automatically restart hoga
 *
 * ! depends_on
 * depends_on:
 *   - gitlab-server
 * → Runner tab start hoga
 *   jab GitLab server start ho jayega
 *
 * ! volumes
 * - ./gitlab-runner/config:/etc/gitlab-runner
 * → Runner configuration persist rahegi
 *
 * - /var/run/docker.sock:/var/run/docker.sock
 * → Runner ko host Docker daemon access milta hai
 * → Runner Docker commands execute kar sakta hai
 *
 * ! privileged: true
 * privileged: true
 * → Runner ko elevated permissions deta hai
 * → CI/CD jobs properly execute ho paati hain
 *
 * ---------------------------------------------------------
 * ! WORKING
 * ---------------------------------------------------------
 * Ab let's see working.
 *
 * STEP 1
 * GitLab mein jaake naya project create kar do:
 *
 * gitlab-runner
 *
 * STEP 2
 * Admin section mein jao:
 * → CI/CD
 * → Runners
 *
 * Waha:
 * → Existing runners milenge
 * → Runners ko permanently delete bhi kar sakte hain
 *
 * ---------------------------------------------------------
 * ! REGISTERING RUNNER
 * ---------------------------------------------------------
 * Ab GitLab Server mein runner ko register karna hai.
 *
 * Command:
 *
 * docker exec -it my-gitlab-runner gitlab-runner register
 *
 * Ye command Docker terminal mein run karenge.
 *
 * docker exec
 * → Running container ke andar command run karta hai
 *
 * -it
 * → Interactive terminal open karta hai
 *
 * my-gitlab-runner
 * → Runner container ka naam
 *
 * gitlab-runner register
 * → Runner registration process start karta hai
 *
 * ---------------------------------------------------------
 * ! DURING REGISTRATION
 * ---------------------------------------------------------
 * Registration ke time kuch details puchega:
 *
 * 1) GitLab Runner instance URL
 *
 * Example:
 *
 * https://my-gitlab-server
 *
 * 2) Description
 *
 * Example:
 *
 * my-docker-runner
 *
 * 3) Tags
 *
 * Example:
 *
 * docker
 *
 * 4) Executor
 *
 * → Executor type choose karna hota hai
 *
 * 5) Default Docker Image
 *
 * Example:
 *
 * alpine:latest
 *
 * → Enter kar do
 * → Configuration save ho jayegi
 *
 * ---------------------------------------------------------
 * ! RESTART RUNNER
 * ---------------------------------------------------------
 * Ab runner ko restart karo
 * taaki changes apply ho jaye.
 *
 * Command:
 *
 * docker restart my-gitlab-runner
 *
 * ---------------------------------------------------------
 * ! CHECK RUNNER REGISTERED OR NOT
 * ---------------------------------------------------------
 * Runner register hua ya nahi check karne ke liye:
 *
 * Command:
 *
 * docker exec -it my-gitlab-runner gitlab-runner list
 *
 * Ya:
 *
 * GitLab UI ke runners section mein jaake dekho
 *
 * → Runner online show hoga
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) Why do we use GitLab Runner?
 * Ans:
 * GitLab Runner executes CI/CD jobs
 * created by GitLab Server.
 *
 * Q2) What does restart: always do?
 * Ans:
 * It automatically restarts the container
 * if it stops due to an error or reboot.
 *
 * Q3) Why is docker.sock mounted?
 * Ans:
 * It allows the runner to communicate
 * with the host Docker daemon.
 *
 * Q4) What is the purpose of privileged: true ?
 * Ans:
 * It gives elevated permissions
 * required for Docker-related CI/CD operations.
 *
 * Q5) What command is used to register a runner?
 * Ans:
 * docker exec -it my-gitlab-runner gitlab-runner register
 *
 * Q6) What command checks registered runners?
 * Ans:
 * docker exec -it my-gitlab-runner gitlab-runner list
 *
 * Q7) What is an executor in GitLab Runner?
 * Ans:
 * Executor defines the environment
 * in which CI/CD jobs will run.
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → GitLab Runner executes CI/CD jobs
 * → Runner runs inside Docker container
 * → docker.sock gives Docker access
 * → privileged mode gives extra permissions
 * → Runner must be registered with GitLab Server
 * → Runner online status GitLab UI me dikhta hai
 *
 */