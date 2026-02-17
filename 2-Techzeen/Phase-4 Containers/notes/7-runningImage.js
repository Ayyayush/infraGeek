/**
 * How to Run Docker Images
 *
 * 1) Types of Images
 *
 *    a) Pulled Images
 *       - Images downloaded from Docker Hub.
 *       - Example: node, nginx, mongo.
 *
 *    b) Created Images
 *       - Images built by us using a Dockerfile.
 *       - Example: my-app, backend-service.
 *
 * 2) Running Pulled Images (CLI)
 *
 *    - Basic run:
 *        docker run <image_name>
 *
 *    - Example:
 *        docker run node
 *
 *    - Interactive mode:
 *        docker run -it node /bin/bash
 *
 * 3) Running Created Images (CLI)
 *
 *    - First build the image:
 *        docker build -t my-app .
 *
 *    - Run the image:
 *        docker run my-app
 *
 *    - Run with port mapping (for web apps):
 *        docker run -p 3000:3000 my-app
 *
 * 4) Running Images using Docker Desktop
 *
 *    - Click "Run" on the image.
 *    - Open "Optional / Advanced settings".
 *    - Add Port Mapping:
 *        Host Port      : 3000
 *        Container Port : 3000
 *    - Click Run.
 *
 *    NOTE:
 *    - Optional settings in Docker Desktop are the GUI
 *      equivalent of CLI flags like -p, -d, --name.
 *
 * 5) Common Methods of Running Images
 *
 *    - Foreground mode (default):
 *        docker run my-app
 *
 *    - Detached mode:
 *        docker run -d my-app
 *
 *    - Named container:
 *        docker run --name app-container my-app
 *
 * 6) Rules and Inferences
 *
 *    - docker run = docker create + docker start
 *    - Image is read-only, container is writable.
 *    - One image can create multiple containers.
 *    - Container stops when the main process stops.
 *
 * 7) Important Flags (Interview Favorite)
 *
 *    -it     → interactive terminal
 *    -d      → detached mode
 *    -p      → port mapping (host:container)
 *    --name  → custom container name
 *
 * 8) Important Corrections (VERY IMPORTANT)
 *
 *    ❌ docker run app
 *       (invalid if image name is my-app)
 *
 *    ❌ docker run -p my-app
 *       (wrong syntax)
 *
 *    ✅ docker run -p 3000:3000 my-app
 */
