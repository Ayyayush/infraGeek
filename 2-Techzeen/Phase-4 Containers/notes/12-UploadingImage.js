/**
 * Session: Uploading Docker Image to Docker Hub
 *
 * 1) Docker Hub vs Docker Desktop
 *
 *    Docker Desktop:
 *    - Local tool installed on our system.
 *    - Used to:
 *        • Build images
 *        • Run containers
 *        • Manage images locally
 *
 *    Docker Hub:
 *    - Cloud-based service (like GitHub).
 *    - Used to:
 *        • Store Docker images
 *        • Share images
 *        • Pull images from anywhere
 *
 * 2) Docker Hub Concept (GitHub Analogy)
 *
 *    - Just like:
 *        GitHub → code upload / download
 *
 *    - Docker Hub → image upload / download
 *
 *    - Docker Hub acts as:
 *        • Image registry
 *        • Hosting platform for images
 *
 * 3) Types of Images on Docker Hub
 *
 *    - Official images:
 *        node, nginx, mongo, redis
 *
 *    - Custom images:
 *        Images created by developers
 *
 * 4) Steps to Upload Image on Docker Hub
 *
 *    Step 1:
 *    - Open Docker Hub website.
 *    - Click on "Create Repository".
 *
 *    Step 2:
 *    - Choose repository name.
 *    - Select visibility:
 *        • Public (anyone can pull)
 *        • Private (restricted access)
 *
 *    Step 3:
 *    - Create the repository.
 *
 * 5) Image Visibility
 *
 *    - If repository is public:
 *        • "Public View" option appears.
 *        • Shows how others can pull your image.
 *
 *    - Docker Hub provides:
 *        docker pull <username>/<repo-name>
 *
 * 6) Uploading Image from Local System
 *
 *    - First, make sure image exists locally:
 *        docker images
 *
 *    - If image is not present:
 *        build the image first.
 *
 * 7) Tag Image Before Push
 *
 *    - Docker Hub requires image name format:
 *        <username>/<repository>:tag
 *
 *    - Example:
 *        docker tag my-node-app username/my-node-app:latest
 *
 * 8) Push Image to Docker Hub
 *
 *    - Login to Docker Hub:
 *        docker login
 *
 *    - Push image:
 *        docker push username/my-node-app:latest
 *
 * 9) After Upload
 *
 *    - Image will appear in Docker Hub repository.
 *    - Anyone can pull it using:
 *        docker pull username/my-node-app:latest
 *
 * 10) Interview One-Liner
 *
 *    - "Docker Hub is a cloud registry used to store,
 *       share, and distribute Docker images."
 */
