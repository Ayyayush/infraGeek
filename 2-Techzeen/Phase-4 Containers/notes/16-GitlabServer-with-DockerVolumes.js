/**
 * =========================================================
 * ! GITLAB SERVER WITH DOCKER VOLUMES
 * =========================================================
 * Hum GitLab pe jo bhi repositories bana rahe the,
 * jaise hi container ko stop/delete kar rahe the
 * data lost ho ja raha tha.
 *
 * So:
 * → Hume kuch aisa chahiye tha
 * → Jo data ko persistent bana sake
 *
 *
 * Example:
 *
 * → Kal container stop kar diya
 * → Next day aake dekha toh data chala gaya
 * → Kyunki container stop/delete ho gaya tha
 * → Isliye kal ka data lost ho gaya
 *
 *
 * ---------------------------------------------------------
 * ! WHAT ARE DOCKER VOLUMES?
 * ---------------------------------------------------------
 * Docker volumes ka use:
 *
 * → Data ko persistent banane ke liye hota hai
 *
 * Matlab:
 *
 * → Container delete ho jaye
 * → Tab bhi data safe rahe
 *
 *
 * ---------------------------------------------------------
 * ! CONTAINER STOP KARNE KE TARIKE
 * ---------------------------------------------------------
 * Container stop karne ke mainly 2 tareeke hote hain:
 *
 * 1)
 * Ctrl + C
 *
 * → Running process ko stop kar deta hai
 *
 *
 * 2)
 * docker compose down
 *
 * → Compose ke containers stop/delete kar deta hai
 *
 *
 * ---------------------------------------------------------
 * ! PROBLEM WITHOUT VOLUMES
 * ---------------------------------------------------------
 * Agar volumes use nahi karenge:
 *
 * → Container delete hone par data bhi delete ho jayega
 * → GitLab repos loss ho sakti hain
 * → Configurations delete ho sakti hain
 * → Logs bhi delete ho jayenge
 *
 *
 * ---------------------------------------------------------
 * ! ADDING VOLUMES IN docker-compose.yml
 * ---------------------------------------------------------
 * Volumes add karne ke liye:
 *
 * → docker-compose.yml file me jaake
 *   volumes section add karte hain
 *
 *
 * Example:
 *
 * volumes:
 *   - ./config:/etc/gitlab
 *   - ./logs:/var/log/gitlab
 *   - ./data:/var/opt/gitlab
 *
 *
 * ---------------------------------------------------------
 * ! UNDERSTANDING EACH VOLUME
 * ---------------------------------------------------------
 * 1)
 * ./config:/etc/gitlab
 *
 * → GitLab ki configuration files store hoti hain
 *
 *
 * 2)
 * ./logs:/var/log/gitlab
 *
 * → GitLab ke logs store hote hain
 *
 *
 * 3)
 * ./data:/var/opt/gitlab
 *
 * → Important GitLab data yaha store hota hai
 * → Ye wahi data hai jo pehle loss ho raha tha
 * → Ab volumes ki wajah se safe rahega
 *
 *
 * ---------------------------------------------------------
 * ! WHAT HAPPENS AFTER docker compose up ?
 * ---------------------------------------------------------
 * Jab:
 *
 * docker compose up
 *
 * run karenge:
 *
 * → GitLab container start ho jayega
 *
 * Aur:
 *
 * → Ek config folder ban jayega
 * → Ek logs folder ban jayega
 * → Ek data folder ban jayega
 *
 * In folders ke andar:
 *
 * → GitLab ka persistent data store hoga
 *
 *
 * ---------------------------------------------------------
 * ! BENEFITS OF DOCKER VOLUMES
 * ---------------------------------------------------------
 * → Data persistence
 * → Safe configurations
 * → Logs backup
 * → Container delete hone par bhi data safe
 * → Easy backup & migration
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS FROM THIS TOPIC
 * ---------------------------------------------------------
 * Q1) What are Docker volumes?
 * Ans:
 * Docker volumes are used to store container data
 * persistently so that data remains safe even if
 * the container is deleted.
 *
 *
 * Q2) Why are Docker volumes important in GitLab?
 * Ans:
 * GitLab stores repositories, logs, and configurations.
 * Without volumes, all this data can be lost when
 * the container is removed.
 *
 *
 * Q3) What does ./data:/var/opt/gitlab mean?
 * Ans:
 * It maps the local ./data folder
 * to GitLab's internal data directory
 * /var/opt/gitlab.
 *
 *
 * Q4) What happens if Docker volumes are not used?
 * Ans:
 * Data gets deleted when the container is deleted.
 *
 *
 * Q5) What is stored inside the config volume?
 * Ans:
 * GitLab configuration files are stored there.
 *
 *
 * Q6) What is stored inside the logs volume?
 * Ans:
 * GitLab logs are stored there.
 *
 *
 * Q7) Which command stops Docker Compose containers?
 * Ans:
 * docker compose down
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Docker volumes = Persistent storage
 * → Prevents GitLab data loss
 * → Config + Logs + Repo data safe rehta hai
 * → Important for real DevOps setups
 *
 */