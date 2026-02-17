/**
 * Creating Images using Dockerfile
 *
 * 1) Create an Application
 *    - First, create a simple application (Node / Python / etc.).
 *    - Example: Express app with package.json and index.js.
 *
 * 2) Install Docker (VS Code)
 *    - Install Docker Desktop on your system.
 *    - Install "Docker" extension in VS Code for syntax support,
 *      Dockerfile highlighting, and container management.
 *
 * 3) What is a Dockerfile?
 *    - A Dockerfile is a text file with instructions
 *      to build a Docker image.
 *    - Each instruction creates a layer in the image.
 *
 * 4) Syntax of Dockerfile
 *    - Dockerfile has NO extension.
 *    - Instructions are written in CAPITAL letters.
 *    - Format:
 *        INSTRUCTION argument
 *
 * 5) Common Instructions in Dockerfile
 *
 *    FROM
 *    - Specifies the base (parent) image.
 *    - Example: FROM node:18
 *
 *    WORKDIR
 *    - Sets the working directory inside the container.
 *    - Example: WORKDIR /app
 *
 *    COPY
 *    - Copies files from host to container.
 *    - Example: COPY . .
 *
 *    RUN
 *    - Executes commands during image build.
 *    - Example: RUN npm install
 *
 *    EXPOSE
 *    - Informs Docker which port the app uses.
 *    - Example: EXPOSE 3000
 *
 *    CMD
 *    - Default command executed when container starts.
 *    - Example: CMD ["node", "index.js"]
 *
 * 6) Basic Dockerfile Example
 *
 *    FROM node:18
 *    WORKDIR /app
 *    COPY package*.json ./
 *    RUN npm install
 *    COPY . .
 *    EXPOSE 3000
 *    CMD ["node", "index.js"]
 *
 * 7) Build Docker Image
 *    - Command:
 *        docker build -t my-app .
 *
 * 8) Run Docker Image
 *    - Command:
 *        docker run -p 3000:3000 my-app
 */
