/**
 * ! What is a Dockerignore File?
 *
 * * A .dockerignore file is used to ignore unnecessary files and folders
 * * while building a Docker image.
 *
 * * It works similarly to a .gitignore file.
 *
 *
 * ! Why is it Used?
 *
 * * We already know that in a .gitignore file,
 * * we write the names of files/folders that should not be tracked by Git.
 *
 * * Similarly, while building a Docker image using:
 *
 *      docker build
 *
 * * some files/folders are not needed inside the Docker image.
 *
 *
 * ! Example
 *
 * * node_modules folder
 * * temporary files
 * * logs
 * * .git folder
 *
 *
 * ! Why Ignore These Files?
 *
 * * If unnecessary files are included:
 *
 *      → Docker image size increases
 *      → Build time becomes slower
 *      → Container performance can get affected
 *      → More storage and memory are consumed
 *
 *
 * ! Solution
 *
 * * We can write such files/folders inside the .dockerignore file
 * * so Docker ignores them while creating the image.
 *
 *
 * ! Example of .dockerignore File
 *
 *      node_modules
 *      .git
 *      *.log
 *      dist
 *
 */