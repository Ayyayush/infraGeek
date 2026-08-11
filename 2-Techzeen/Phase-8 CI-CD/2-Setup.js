/**
 * =========================================================
 * ! SETUP OF JENKINS IN LINUX ENVIRONMENT
 * =========================================================
 *
 * Jenkins ko Linux environment me install karne ke liye
 * sabse pehle Java setup hona chahiye.
 *
 * IMPORTANT:
 * - Jenkins ko run karne ke liye supported Java version required hai.
 * - Current Jenkins releases ke liye Java 21 recommended hai.
 *
 * ---------------------------------------------------------
 * ! STEP 1: UPDATE SYSTEM PACKAGES
 * ---------------------------------------------------------
 * Ubuntu/Debian:
 * sudo apt update
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 2: INSTALL JAVA
 * ---------------------------------------------------------
 * sudo apt install fontconfig openjdk-21-jre -y
 *
 * Java installation check:
 * java -version
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 3: ADD JENKINS REPOSITORY
 * ---------------------------------------------------------
 * Jenkins repository add karo:
 *
 * sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
 * https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
 *
 * echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] \
 * https://pkg.jenkins.io/debian-stable binary/" | \
 * sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 4: UPDATE PACKAGE LIST
 * ---------------------------------------------------------
 * sudo apt update
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 5: INSTALL JENKINS
 * ---------------------------------------------------------
 * sudo apt install jenkins -y
 * Jenkins system service ke form me install ho jayega.
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 6: START JENKINS
 * ---------------------------------------------------------
 * sudo systemctl start jenkins
 * start → Jenkins service ko start karta hai.
 *
 * ---------------------------------------------------------
 * ! STEP 7: ENABLE JENKINS ON BOOT
 * ---------------------------------------------------------
 *
 * sudo systemctl enable jenkins
 * enable → Server restart hone ke baad Jenkins
 * automatically start ho jayega.
 *
 * 
 * ---------------------------------------------------------
 * ! STEP 8: CHECK JENKINS STATUS
 * ---------------------------------------------------------
 * sudo systemctl status jenkins
 * Agar "active (running)" dikhe,
 * to Jenkins successfully run ho raha hai.
 *
 * 
 * 
 * ---------------------------------------------------------
 * ! STEP 9: ACCESS JENKINS
 * ---------------------------------------------------------
 *
 * Jenkins default port: 8080
 * Browser me open karo:
 *
 * http://<SERVER-IP>:8080
 *
 * Example:
 * http://13.49.68.244:8080
 *
 * Agar EC2/server par Jenkins install kiya hai,
 * to Security Group / Firewall me TCP port 8080
 * allow karna required ho sakta hai.
 *
 * ---------------------------------------------------------
 * ! STEP 10: GET INITIAL ADMIN PASSWORD
 * ---------------------------------------------------------
 *
 * First time Jenkins open karne par
 * "Unlock Jenkins" page aayega.
 *
 * Initial password dekhne ke liye:
 *
 * sudo cat /var/lib/jenkins/secrets/initialAdminPassword
 *
 * Is password ko Unlock Jenkins page par enter karo.
 *
 * ---------------------------------------------------------
 * ! STEP 11: INITIAL JENKINS SETUP
 * ---------------------------------------------------------
 *
 * Jenkins setup wizard me:
 * → Install Suggested Plugins
 * → First Administrator User create karo
 * → Start using Jenkins
 *
 * 
 * 
 * 
 * ---------------------------------------------------------
 * ! COMPLETE FLOW
 * ---------------------------------------------------------
 *
 * Linux Server
 *     ↓
 * Install Java
 *     ↓
 * Add Jenkins Repository
 *     ↓
 * Install Jenkins
 *     ↓
 * Start Jenkins
 *     ↓
 * Enable Jenkins on Boot
 *     ↓
 * Check Status
 *     ↓
 * Open Port 8080
 *     ↓
 * Browser → <SERVER-IP>:8080
 *     ↓
 * Unlock Jenkins
 *     ↓
 * Install Plugins + Create Admin User
 *
 * 
 * 
 * ---------------------------------------------------------
 * INTERVIEW LINE
 * ---------------------------------------------------------
 *
 * To install Jenkins on Linux, first we install a supported
 * Java runtime, then add the Jenkins repository, install
 * Jenkins, start and enable the Jenkins service, and access
 * Jenkins through port 8080.
 *
 * ---------------------------------------------------------
 * IMPORTANT COMMANDS
 * ---------------------------------------------------------
 *
 * java -version
 * sudo apt update
 * sudo apt install fontconfig openjdk-21-jre -y
 * sudo apt install jenkins -y
 * sudo systemctl start jenkins
 * sudo systemctl enable jenkins
 * sudo systemctl status jenkins
 * sudo cat /var/lib/jenkins/secrets/initialAdminPassword
 *
 * =========================================================
 */