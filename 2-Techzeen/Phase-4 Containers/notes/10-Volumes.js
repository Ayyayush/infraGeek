/**
 * What are Volumes in Docker?
 *
 * (Very Important for Interviews)
 *
 * 1) What is a Docker Volume?
 *    - A Docker volume is a storage mechanism used to persist data.
 *    - Volumes are stored OUTSIDE the container’s filesystem.
 *    - Data in volumes is managed by Docker.
 *
 * 2) Why Volumes are Needed
 *    - Containers are temporary by nature.
 *    - When a container is deleted, its internal data is lost.
 *    - Volumes solve this problem by storing data separately.
 *
 * 3) Key Property (Most Important)
 *    - If a container is deleted,
 *      data stored in a volume is NOT deleted.
 *
 * 4) Volume with Container
 *    - When we run a container with a volume:
 *
 *        docker run -v volume_name:/container/path image_name
 *
 *    - The container uses external storage (volume)
 *      instead of its own filesystem.
 *
 * 5) Local Project Changes Reflection
 *    - When using bind mounts / volumes:
 *      changes made in the local project
 *      are directly reflected inside the container.
 *
 * 6) Problem Without Volumes
 *    - For every small code change,
 *      we had to:
 *        • rebuild the image
 *        • create a new version
 *
 * 7) How Volumes Solve This
 *    - Volumes give a feature similar to "hot reload".
 *    - Code changes reflect instantly.
 *    - No need to rebuild image for small changes.
 *
 * 8) Interview Example Line
 *    - Volumes are heavily used in:
 *        • Databases (MySQL, MongoDB)
 *        • Development environments
 *        • Logs and uploads
 *
 * 9) Summary
 *    - Volumes persist data.
 *    - Containers are temporary.
 *    - Volumes are reusable and independent.
 *
 * 10) Next Step
 *    - In the next lecture,
 *      we will use volumes practically.
 */

/**
 * Creating and Using Volumes in Docker (with Nodemon)
 *
 * 1) Install Nodemon First
 *    - Nodemon is installed as a dev dependency:
 *        npm install nodemon --save-dev
 *
 * 2) What is Nodemon Used For?
 *    - Nodemon automatically restarts the Node.js app
 *      whenever file changes are detected.
 *    - It improves developer productivity.
 *
 * 3) Why We Use --legacy-watch Flag
 *    - File watching inside Docker containers
 *      sometimes does NOT work properly.
 *    - Especially on:
 *        • Windows
 *        • Mac
 *        • Docker + volumes
 *
 *    - --legacy-watch forces polling instead of native FS events.
 *
 *    - Example:
 *        nodemon --legacy-watch index.js
 *
 * 4) Why is --legacy-watch Recommended?
 *    - Docker volumes sync files between host and container.
 *    - Native file watchers may miss change events.
 *    - Polling ensures reliable reloads.
 *
 *    Interview line:
 *    "legacy-watch ensures nodemon detects changes
 *     correctly inside Docker containers."
 *
 * 5) Is Nodemon Related to Volumes?
 *    - YES (indirectly).
 *    - Volumes reflect local file changes inside container.
 *    - Nodemon detects those changes and restarts the app.
 *
 *    Volume → Sync files
 *    Nodemon → Restart app
 *
 * 
 * 
 * 6) Why Volume use karne wale App Folders
 *    OneDrive / Cloud Folder ke ANDAR nahi hone chahiye?
 *
 *    - Cloud-synced folders (OneDrive, Google Drive, etc.)
 *      continuously sync files in background.
 *
 *    - This causes:
 *        • File locking issues
 *        • Slow file change detection
 *        • Nodemon missing events
 *        • Docker volume sync delays
 *
 *    - Docker volumes already handle file syncing
 *      between host and container.
 *
 *    - Cloud sync + Docker sync together
 *      leads to conflicts and instability.
 *
 *    - Best Practice:
 *        • Keep Docker projects in a normal local folder
 *          (e.g. C:\Projects\my-app)
 *        • Avoid OneDrive / cloud-managed directories
 *
 *    - Also avoid system-protected paths
 *      (C:\Program Files, C:\Windows)
 *
 * 7) Commands to Use Volumes
 *
 *    - Run container with bind mount:
 *        docker run -p 3000:3000 \
 *        -v ${PWD}:/app \
 *        my-node-app
 *
 *    - This mounts current folder into container.
 *
 * 8) Why We Use --rm Flag
 *    - --rm automatically deletes container
 *      when it stops.
 *    - Keeps system clean.
 *
 *    Example:
 *        docker run --rm -p 3000:3000 -v ${PWD}:/app my-node-app
 *
 * 9) How to Run Docker After Using Volumes
 *
 *    - Full dev command:
 *        docker run --rm \
 *        -p 3000:3000 \
 *        -v ${PWD}:/app \
 *        my-node-app
 *
 *    - Now:
 *        • Edit code locally
 *        • Changes reflect in container
 *        • Nodemon restarts app automatically
 */




/**
 * docker run --rm -p 3000:3000 -v "${PWD}:/app" my-node-app
 *
 * docker
 * → Docker CLI command used to interact with Docker Engine.
 *
 * run
 * → Creates AND starts a container from a Docker image.
 * → Internally equal to: docker create + docker start
 *
 * --rm
 * → Automatically removes the container when it stops.
 * → Prevents stopped containers from accumulating.
 * → Image is NOT deleted, only the container.
 *
 * -p 3000:3000
 * → Port mapping (HOST:CONTAINER).
 * → Left side (3000): Port on host machine (Windows).
 * → Right side (3000): Port inside the container.
 * → Allows browser access: http://localhost:3000
 *
 * -v "${PWD}:/app"
 * → Bind mount / volume mapping.
 * → ${PWD}: Current working directory on host (PowerShell variable).
 * → /app: Directory inside the container.
 * → Local code changes are reflected inside the container instantly.
 *
 * my-node-app
 * → Name of the Docker image.
 * → Container is created from this image.
 *
 * Overall Meaning:
 * → Runs a container from my-node-app image,
 * → maps port 3000,
 * → mounts current folder to /app inside container,
 * → and deletes the container automatically after stopping.
 */
