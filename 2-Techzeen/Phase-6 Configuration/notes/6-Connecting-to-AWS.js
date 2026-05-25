/**
 * =========================================================
 * ! ANSIBLE WITH AWS EC2
 * =========================================================
 * Ab tak hum localhost pe Ansible use kar rahe the.
 *
 * Ab:
 * → Hum Ansible ko AWS EC2 se connect karenge
 * → Taaki remote machine ko automate kar sake
 *
 * Ye:
 * → Advanced Ansible ki beginning hai
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT TERMINOLOGIES
 * ---------------------------------------------------------
 *
 * ! Remote Machine / Managed Node
 * Remote machine ko:
 * → Managed Node bhi kehte hain
 *
 * Ye basically:
 * → Wo machines hoti hain
 * → Jinhe Ansible use karke control karte hain
 *
 *
 * ! WHERE IS ANSIBLE INSTALLED?
 * ---------------------------------------------------------
 * Kya target machine pe bhi Ansible install karna padta hai?
 *
 * → Nahi
 *
 * Ansible:
 * → Sirf Control Node pe install hota hai
 *
 *
 * ! Control Node / Local Machine
 * ---------------------------------------------------------
 * Jis machine pe Ansible installed hota hai:
 *
 * → Usko Control Node
 * → Ya Local Machine kehte hain
 *
 *
 * ---------------------------------------------------------
 * ! AWS EC2 INSTANCE SETUP
 * ---------------------------------------------------------
 * AWS Console me:
 *
 * → EC2 dashboard open karenge
 * → Launch Instance pe click karenge
 *
 *
 * Machine ka naam:
 * → Kuch bhi rakh sakte hain
 *
 *
 * AMI:
 * → Ubuntu select karenge
 *
 *
 * Fir:
 * → Key pair download karenge
 *
 *
 * Launch Instance karenge.
 *
 *
 * Instance:
 * → Running state me dikh jayega
 *
 *
 * Ab:
 * → Is remote machine pe koi bhi kaam kar sakte hain
 *
 *
 * ---------------------------------------------------------
 * ! CONNECT REMOTE MACHINE WITH ANSIBLE
 * ---------------------------------------------------------
 *
 * =========================================================
 * ! STEP 1 -> CHECK YOUR UBUNTU USERNAME
 * =========================================================
 * whoami
 *
 *
 * =========================================================
 * ! STEP 2 -> GO TO WINDOWS DOWNLOADS FOLDER FROM WSL
 * =========================================================
 * cd /mnt/c/Users/aayu0/Downloads
 *
 *
 * =========================================================
 * ! STEP 3 -> CHECK WHETHER PEM FILE EXISTS
 * =========================================================
 * ls
 *
 *
 * =========================================================
 * ! STEP 4 -> CREATE .ssh FOLDER
 * =========================================================
 * mkdir -p ~/.ssh
 *
 *
 * =========================================================
 * ! STEP 5 -> COPY PEM FILE TO .ssh FOLDER
 * =========================================================
 * cp /mnt/c/Users/aayu0/Downloads/my-keys.pem ~/.ssh/
 *
 *
 * =========================================================
 * ! STEP 6 -> GIVE CORRECT PERMISSIONS TO PEM FILE
 * =========================================================
 * chmod 400 ~/.ssh/my-keys.pem
 *
 *
 * =========================================================
 * ! STEP 7 -> VERIFY PEM FILE
 * =========================================================
 * ls -l ~/.ssh
 *
 *
 * =========================================================
 * ! STEP 8 -> CONNECT TO AWS EC2 INSTANCE
 * =========================================================
 * ssh -i ~/.ssh/my-keys.pem ubuntu@44.197.241.254
 *
 *
 * =========================================================
 * ! STEP 9 -> TYPE YES WHEN ASKED
 * =========================================================
 * yes
 *
 *
 * =========================================================
 * ! STEP 10 -> UPDATE PACKAGES
 * =========================================================
 * sudo apt update && sudo apt upgrade -y
 *
 *
 * =========================================================
 * ! STEP 11 -> CHECK CURRENT USER
 * =========================================================
 * whoami
 *
 *
 * =========================================================
 * ! STEP 12 -> CHECK MEMORY
 * =========================================================
 * free -h
 *
 *
 * =========================================================
 * ! STEP 13 -> CHECK CPU INFO
 * =========================================================
 * lscpu
 *
 *
 * =========================================================
 * ! STEP 14 -> CHECK DISK SPACE
 * =========================================================
 * df -h
 *
 *
 * =========================================================
 * ! STEP 15 -> CREATE PRACTICE FOLDER
 * =========================================================
 * mkdir DevOps-Practice
 *
 * cd DevOps-Practice
 *
 *
 * =========================================================
 * ! STEP 16 -> INSTALL BASIC TOOLS
 * =========================================================
 * sudo apt install git curl wget unzip tree -y
 *
 *
 * =========================================================
 * ! STEP 17 -> VERIFY GIT
 * =========================================================
 * git --version
 *
 *
 * ---------------------------------------------------------
 * ! FINAL HOSTS FILE
 * ---------------------------------------------------------
 * [local]
 * localhost ansible_connection=local
 *
 * [aws]
 * ec2 ansible_host=44.197.241.254 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/my-keys.pem
 *
 *
 * ---------------------------------------------------------
 * ! SAVE NANO FILE
 * ---------------------------------------------------------
 * Press:
 *
 * CTRL + O
 * ENTER
 * CTRL + X
 *
 *
 * ---------------------------------------------------------
 * ! TEST CONNECTION
 * ---------------------------------------------------------
 * ansible aws -i hosts -m ping
 *
 *
 * Output:
 *
 * ec2 | SUCCESS => {
 *     "changed": false,
 *     "ping": "pong"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! WHAT DOES THIS COMMAND DO?
 * ---------------------------------------------------------
 * ansible
 * → Ansible command
 *
 * aws
 * → Inventory group name
 *
 * -i hosts
 * → Inventory file specify karta hai
 *
 * -m ping
 * → ping module run karta hai
 *
 *
 * ping
 * → Check karta hai:
 *   → SSH connection working hai ya nahi
 *   → Remote machine reachable hai ya nahi
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * Flow:
 *
 * Control Node
 *          ↓
 * Inventory File
 *          ↓
 * SSH Connection
 *          ↓
 * AWS EC2 Remote Machine
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is a Managed Node in Ansible?
 * Ans:
 * Managed Nodes are remote machines
 * controlled by Ansible.
 *
 *
 * Q2) What is a Control Node?
 * Ans:
 * The machine where Ansible is installed
 * and from where automation is controlled.
 *
 *
 * Q3) Does Ansible need to be installed on remote machines?
 * Ans:
 * No.
 * Ansible only needs SSH access to remote machines.
 *
 *
 * Q4) Why do we use PEM files?
 * Ans:
 * PEM files are used for secure SSH authentication
 * with AWS EC2 instances.
 *
 *
 * Q5) Why use chmod 400 on PEM file?
 * Ans:
 * It gives secure read-only permissions
 * required by SSH.
 *
 *
 * Q6) What does ansible -m ping do?
 * Ans:
 * It checks connectivity
 * between Control Node and Managed Node.
 *
 *
 * Q7) Why is Ansible called agentless?
 * Ans:
 * Because no agent/software installation
 * is required on remote machines.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → EC2 acts as Managed Node
 * → Local machine acts as Control Node
 * → SSH used for communication
 * → PEM file used for authentication
 * → ansible ping checks connectivity
 * → Beginning of advanced Ansible
 *
 */