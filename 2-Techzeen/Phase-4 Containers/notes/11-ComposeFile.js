/**
 * Docker Compose File
 *
 * 1) What is Docker Compose?
 *    - Docker Compose is a tool used to define and run
 *      multi-container Docker applications.
 *    - It helps manage multiple containers easily
 *      using a single configuration file.
 *
 * 2) Why Docker Compose is Used
 *    - Run multiple containers with one command.
 *    - Manage ports, volumes, networks in one place.
 *    - Avoid long docker run commands.
 *    - Ideal for development and testing.
 *
 * 3) File Extension of Docker Compose
 *    - docker-compose.yml
 *      OR
 *    - docker-compose.yaml
 *
 * 4) How to Create Docker Compose File
 *    - Create a file in project root named:
 *        docker-compose.yml
 *
 * 5) Basic Structure of Compose File
 *
 *    version: "3.8"
 *    services:
 *      service_name:
 *        image: image_name
 *        ports:
 *          - "3000:3000"
 *
 * 6) How to Use Docker Compose
 *
 *    - Start services:
 *        docker compose up
 *
 *    - Start in detached mode:
 *        docker compose up -d
 *
 *    - Stop services:
 *        docker compose down
 *
 * 7) Important Rules to Follow
 *
 *    - Indentation is VERY important (YAML).
 *    - Use spaces, NOT tabs.
 *    - All containers must be under "services".
 *    - Ports must be defined as strings.
 *    - One compose file can run multiple services.
 *
 * 8) Common Use Cases
 *    - Node + MongoDB
 *    - React + Backend API
 *    - Microservices setup
 *
 * 9) Interview One-Liner
 *    - "Docker Compose allows running and managing
 *       multiple containers using a single YAML file."
 * 
 * 
 * Dockerfile → Single container
 * Compose    → Multiple containers
 */
