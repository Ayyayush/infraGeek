/**
 * 🐳 Installation of Docker (Step-by-Step – Hinglish)
 *
 * --------------------------------------------------
 * 🔹 Docker install karne se pehle requirements
 *
 * ✔ 64-bit OS
 * ✔ Virtualization enabled (BIOS se)
 * ✔ Internet connection
 *
 * --------------------------------------------------
 * 🔹 Windows me Docker ka installation
 *
 * 1️⃣ Docker Desktop download karo
 * - Official website se Docker Desktop for Windows
 *
 * 2️⃣ Installer run karo
 * - Next → Next → Install
 *
 * 3️⃣ WSL 2 enable hone de
 * - Docker Windows me WSL 2 ka use karta hai
 *
 * 4️⃣ System restart (agar bole)
 *
 * 5️⃣ Docker Desktop open karo
 *
 * --------------------------------------------------
 * 🔹 Verify Docker installation (Windows)
 *
 * Command Prompt / Git Bash me:
 * docker --version
 *
 * Agar version aa gaya:
 * 👉 Docker successfully installed ✅
 *
 * --------------------------------------------------
 * 🔹 MacOS me Docker installation
 *
 * 1️⃣ Docker Desktop for Mac download karo
 * - Intel ya Apple Silicon (M1/M2) ke hisaab se
 *
 * 2️⃣ .dmg file open karo
 * - Docker ko Applications me drag karo
 *
 * 3️⃣ Docker Desktop start karo
 *
 * --------------------------------------------------
 * 🔹 Verify Docker installation (Mac)
 *
 * Terminal me:
 * docker --version
 *
 * --------------------------------------------------
 * 🔹 Linux (Ubuntu) me Docker installation
 *
 * Step 1: System update
 * sudo apt update
 *
 * Step 2: Docker install
 * sudo apt install docker.io -y
 *
 * Step 3: Docker start karo
 * sudo systemctl start docker
 *
 * Step 4: Enable Docker on boot
 * sudo systemctl enable docker
 *
 * --------------------------------------------------
 * 🔹 Linux me sudo ke bina Docker chalana
 *
 * sudo usermod -aG docker $USER
 *
 * 👉 Logout & login dobara karo
 *
 * --------------------------------------------------
 * 🔹 Verify Docker installation (Linux)
 *
 * docker --version
 *
 * --------------------------------------------------
 * 🔹 Docker sahi chal raha hai ya nahi test karna
 *
 * Command:
 * docker run hello-world
 *
 * Agar message aaye:
 * "Hello from Docker!"
 *
 * 👉 Matlab Docker perfectly working hai 🎉
 *
 * --------------------------------------------------
 * 🔹 Docker Desktop kya karta hai?
 *
 * - Docker Engine run karta hai
 * - Containers & Images manage karta hai
 * - GUI provide karta hai (start/stop, logs)
 *
 * --------------------------------------------------
 * 🔹 Common issues (Beginner level)
 *
 * ❌ Docker command not found
 * 👉 Docker Desktop start nahi hai
 *
 * ❌ Permission denied (Linux)
 * 👉 Docker group me user add nahi hua
 *
 * --------------------------------------------------
 * ✅ Summary:
 * - Windows/Mac: Docker Desktop
 * - Linux: docker.io package
 * - docker --version = verification
 * - docker run hello-world = final test
 *
 * 🔥 Docker install ho gaya → next step: Images & Containers!
 */
