/**
 * Pulling and Running Docker Images
 *
 * 1) Ways to Download (Pull) an Image
 *    - There are two ways to pull Docker images:
 *        a) Using Docker Desktop (GUI)
 *        b) Using Terminal (CLI)
 *
 * 2) Pulling Image using Terminal
 *    - Docker images can be pulled using:
 *        docker pull <image_name>
 *    - Example:
 *        docker pull node
 *
 * 3) Pulling Image using Docker Desktop
 *    - Search the image name in Docker Desktop.
 *    - Click Pull to download the image.
 *    - Example: node image.
 *
 * 4) "Days Ago" Information
 *    - "Updated X days ago" shows when the image maintainer
 *      last updated that image on Docker Hub.
 *    - It does NOT show when you downloaded the image.
 *
 * 5) CPU / RAM / Disk Information
 *    - CPU, RAM, Disk shown in Docker Desktop
 *      belong to Docker Engine.
 *    - They do NOT represent your full system resources.
 *
 * 6) Running an Image
 *    - To create and start a container from an image:
 *        docker run <image_name>
 *
 * 7) Running Node Image with Interactive Shell
 *    - Command:
 *        docker run -it node /bin/bash
 *    - This opens a bash shell inside the container.
 *
 * 8) Node Version Difference
 *    - Node version inside the container may be different
 *      from the Node version installed on your system.
 *    - The container uses the Node version
 *      that comes with the downloaded image.
 */
