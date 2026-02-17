/**
 * Docker Hub vs Docker Desktop
 *
 * 1) Docker Hub
 *    - Docker Hub is a cloud-based registry service.
 *    - It stores Docker images (public and private).
 *    - Developers push images to Docker Hub and pull images from it.
 *    - Example: ubuntu, node, nginx images.
 *
 * 2) Docker Desktop
 *    - Docker Desktop is a local application installed on your system.
 *    - It provides Docker Engine, Docker CLI, and GUI tools.
 *    - Used to build, run, and manage containers locally.
 *    - It connects to Docker Hub to pull/push images.
 *
 * 3) Base (Parent) Image
 *    - A base image is the starting point for building a Docker image.
 *    - It contains an OS environment or runtime setup.
 *    - Base images can be:
 *        • Official images (ubuntu, node, python)
 *        • Custom images built by users
 *
 * 4) Dockerfile & Base Image
 *    - A Dockerfile defines how a Docker image is built.
 *    - It inherits from a base image using the `FROM` keyword.
 *    - Every Dockerfile must start with a FROM instruction
 *      (except scratch images).
 *
 * 5) Example
 *    FROM node:18
 *    FROM python:3.11
 */
