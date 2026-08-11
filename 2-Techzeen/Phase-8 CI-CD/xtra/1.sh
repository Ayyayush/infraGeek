# =====================================================
# Basic CI/CD Pipeline Flow
# =====================================================

# Step 1 : Developer writes code

# Step 2 : Push code to GitHub
git add .
git commit -m "Added new feature"
git push origin main

# Step 3 : GitHub notifies Jenkins (Webhook)

# Step 4 : Jenkins clones the repository
git clone <repository_url>

# Step 5 : Build the application
mvn package

# Step 6 : Run Test Cases
mvn test

# Step 7 : Deploy the application
scp app.jar user@server:/home/user/



# =====================================================
# Jenkins Service Management
# =====================================================

# Check Java Version
# Jenkins requires Java to run.
java -version

# Check Jenkins Version
jenkins --version

# Check whether Jenkins is running.
systemctl status jenkins

# Start Jenkins Service.
sudo systemctl start jenkins

# Stop Jenkins Service.
sudo systemctl stop jenkins

# Restart Jenkins Service.
sudo systemctl restart jenkins

# Enable Jenkins to start automatically after system boot.
sudo systemctl enable jenkins

# View Jenkins Logs.
sudo journalctl -u jenkins

# Check if Jenkins is listening on Port 8080.
sudo ss -tulnp | grep 8080

# Open Jenkins in Browser.
http://<SERVER_IP>:8080

# =====================================================
# Jenkins Architecture & Process Commands
# =====================================================

# Display the current machine hostname.
hostname

# Display the current logged-in user.
whoami

# Display the current working directory.
pwd

# Check Java Version (Jenkins runs on Java).
java -version

# Check whether Jenkins Service is running.
systemctl status jenkins

# Display the running Jenkins process.
ps -ef | grep jenkins

# Display Jenkins Home Directory.
echo $JENKINS_HOME

# Display Jenkins installation path.
which jenkins

# Display all running Java processes.
jps -l

# Display system resource usage.
top
# Display CPU and Memory usage.
free -h

# Display disk usage.
df -h


# =====================================================
# Jenkins Installation Commands
# =====================================================

# Update Package Index.
sudo apt update

# Verify Java Installation.
java -version

# Install Jenkins.
sudo apt install jenkins -y

# Start Jenkins Service.
sudo systemctl start jenkins

# Enable Jenkins on System Boot.
sudo systemctl enable jenkins

# Check Jenkins Status.
sudo systemctl status jenkins

# Display Initial Admin Password.
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

# Verify Jenkins is listening on Port 8080.
sudo ss -tulnp | grep 8080


# =====================================================
# Jenkins Freestyle Job Demo
# =====================================================

# Display current user.
whoami

# Display current working directory.
pwd

# Display current date and time.
date

# Display Java version.
java -version

# Display Git version.
git --version

# List current files.
ls

# Print a message.
echo "Hello from Jenkins!"

# Simulate Build.
echo "Building Application..."

# Simulate Testing.
echo "Running Test Cases..."

# Simulate Deployment.
echo "Deploying Application..."

# Build Completed.
echo "Build Successful."

# =====================================================
# Jenkins Plugin & Credential Commands
# =====================================================

# Restart Jenkins after Plugin Installation.
sudo systemctl restart jenkins

# Check Jenkins Service.
sudo systemctl status jenkins

# List Installed Plugins.
jenkins-plugin-cli --list

# Install Git Plugin.
jenkins-plugin-cli --plugins git

# Install Docker Plugin.
jenkins-plugin-cli --plugins docker-plugin

# Install Pipeline Plugin.
jenkins-plugin-cli --plugins workflow-aggregator


# =====================================================
# GitHub Integration Commands
# =====================================================

# Clone Repository.
git clone https://github.com/username/repository.git

# Move inside Repository.
cd repository

# Check Repository Status.
git status

# Display Branches.
git branch

# Display Commit History.
git log --oneline

# Display Remote Repository.
git remote -v

# Verify GitHub SSH Connection.
ssh -T git@github.com

# Push Changes.
git add .
git commit -m "Updated Project"
git push origin main


# =====================================================
# Jenkins + Docker Integration
# =====================================================

# Build Docker Image.
docker build -t myapp .

# Display Images.
docker images

# Login to Docker Hub.
docker login

# Tag Docker Image.
docker tag myapp username/myapp:v1

# Push Image to Docker Hub.
docker push username/myapp:v1

# Pull Image.
docker pull username/myapp:v1

# Run Container.
docker run -d -p 3000:3000 username/myapp:v1

# Display Running Containers.
docker ps

# Display Container Logs.
docker logs <container_id>

# Stop Container.
docker stop <container_id>

# Remove Container.
docker rm <container_id>




# =====================================================
# Jenkins + AWS Deployment Commands
# =====================================================

# Check AWS CLI Installation.
aws --version

# Configure AWS Credentials.
aws configure

# Connect to EC2 Instance.
ssh ubuntu@<EC2-IP>

# Copy Application to EC2.
scp app.jar ubuntu@<EC2-IP>:/home/ubuntu/

# Login to EC2 Again.
ssh ubuntu@<EC2-IP>

# Check Running Services.
sudo systemctl status nginx

# Restart Application Service.
sudo systemctl restart nginx

# Display Running Docker Containers.
docker ps

# Display Application Logs.
docker logs <container_id>

# Exit EC2.
exit



