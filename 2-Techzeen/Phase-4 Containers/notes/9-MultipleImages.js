/**
 * ! Session: Creating & Managing Multiple Docker Images
 *
 * 1) What is docker system prune?
 *    - docker system prune is a cleanup command.
 *    - It removes:
 *        • Stopped containers
 *        • Unused networks
 *        • Dangling images
 *        • Unused build cache
 *
 *    - It helps in freeing disk space.
 *
 *    - Command:
 *        docker system prune
 *
 *    - After confirmation (y), Docker deletes unused resources.
 *
 * 2) What can docker system prune remove?
 *    - Yes, it can remove:
 *        • Stopped containers
 *        • Unused images
 *    - It does NOT remove:
 *        • Running containers
 *        • Images currently in use
 *
 * 3) docker build Command
 *    - Used to create Docker images from a Dockerfile.
 *
 *    - Syntax:
 *        docker build -t <image-name> <path>
 *
 *    - Example:
 *        docker build -t my-node-app .
 *
 *    - Dot (.) means:
 *        → Use current folder as build context.
 *
 * 4) Why docker build without arguments fails
 *
 *    ❌ docker build
 *       (Docker doesn’t know what to build or from where)
 *
 *    ✅ docker build -t app-name .
 *
 * 5) Managing Multiple Images
 *    - You can build multiple images using different tags:
 *
 *        docker build -t app:v1 .
 *        docker build -t app:v2 .
 *
 *    - Each tag represents a different version.
 *
 * 6) Running Containers from Images
 *    - Basic run:
 *        docker run <image-name>
 *
 *    - Run with port mapping:
 *        docker run -p 3000:3000 <image-name>
 *
 *    - Host port can be changed:
 *        docker run -p 8080:3000 <image-name>
 *
 * 7) Important Rules & Inferences
 *
 *    - docker system prune should be used carefully.
 *    - Always stop containers before pruning.
 *    - docker build always needs:
 *        • Image name
 *        • Build context (path)
 *
 *    - Ports must be mapped at container creation.
 */






/**
 * ! Interview Question:
 * "Project update hone par nayi image banate hain
 *  ya purani image ka naya version?"
 *
 * Answer:
 *    - Hamesha SAME image ka NEW VERSION banate hain.
 *    - Image ka naam same rehta hai, tag/version change hota hai.
 *
 * Example:
 *    Project name → my-react-app
 *
 *    Versions:
 *      my-react-app:v1
 *      my-react-app:v2
 *      my-react-app:v3
 *
 *    Just like React:
 *      react@17 → react@18 → react@19
 *      Name same, version update.
 *
 * How we do it in Docker:
 *    docker build -t my-react-app:v2 .
 *
 * Why we don't create a new image name?
 *    - New name creates confusion.
 *    - Hard to manage CI/CD pipelines.
 *    - Version tracking becomes difficult.
 *
 * Best Practice:
 *    - Same image name
 *    - Different tags for each release
 *
 * Production Rule:
 *    - latest tag → current stable version
 *    - versioned tags → rollback support
 */
