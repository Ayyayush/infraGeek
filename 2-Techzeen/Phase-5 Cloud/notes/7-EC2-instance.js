/**
 * Creating EC2 Instance using IAM User
 *
 * AWS Account No  : 782664967894
 * IAM Username    : aws-cli-user
 *
 * ------------------------------------------------------------
 * Why using IAM user instead of Root?
 * ------------------------------------------------------------
 *
 * IAM user ke paas limited access hota hai (controlled permissions).
 * Root user ke paas full administrative control hota hai.
 *
 * Best Practice:
 * - Daily work ke liye IAM user use karte hain
 * - Root user sirf emergency ya high-level configuration ke liye use hota hai
 *
 * ------------------------------------------------------------
 * What is EC2?
 * ------------------------------------------------------------
 *
 * EC2 = Elastic Compute Cloud
 * It is a virtual server in the cloud.
 *
 * EC2 instance ka availability depend karta hai REGION pe.
 * Har region me alag-alag instance types available ho sakte hain.
 *
 * Example:
 * ap-south-1 (Mumbai)
 * us-east-1 (N. Virginia)
 *
 * ------------------------------------------------------------
 * Steps to Launch an EC2 Instance (Beginner Friendly)
 * ------------------------------------------------------------
 *
 * 1️⃣ Go to AWS Console
 * 2️⃣ Search for EC2
 * 3️⃣ Click "Launch Instance"
 *
 * ------------------------------------------------------------
 * Step 1: Name and Tags
 * ------------------------------------------------------------
 *
 * Name: my-web-server
 *
 * Tags ka use resource identification ke liye hota hai.
 *
 * ------------------------------------------------------------
 * Step 2: AMI (Important – Interview Question)
 * ------------------------------------------------------------
 *
 * AMI = Amazon Machine Image
 *
 * AMI ek template hota hai jisme:
 * - Operating System (Linux / Windows)
 * - Pre-installed software
 * - Configuration
 *
 * Example:
 * - Amazon Linux
 * - Ubuntu
 *
 * Interview Line:
 * AMI is a pre-configured template used to launch EC2 instances.
 *
 * ------------------------------------------------------------
 * Step 3: Instance Type
 * ------------------------------------------------------------
 *
 * Instance type decide karta hai:
 * - CPU
 * - RAM
 * - Network performance
 *
 * Example:
 * t2.micro (Free tier eligible)
 *
 * ------------------------------------------------------------
 * Step 4: Key Pair (Login)
 * ------------------------------------------------------------
 *
 * Key pair secure SSH login ke liye hota hai.
 *
 * Key Name: my-web-server-key
 *
 * Important:
 * - .pem file download karna zaruri hai
 * - Agar lose ho gaya toh recover nahi hota
 *
 * ------------------------------------------------------------
 * Step 5: Network Settings
 * ------------------------------------------------------------
 *
 * - VPC select karte hain
 * - Subnet select karte hain
 * - Auto-assign public IP enable karte hain
 *
 * Security Group create karte hain:
 * - SSH (Port 22)
 * - HTTP (Port 80) agar web server bana rahe ho
 *
 * Production me:
 * Specific IP allow karna recommended hota hai
 * (0.0.0.0/0 sabko allow karta hai – security risk)
 *
 * ------------------------------------------------------------
 * Step 6: Configure Storage
 * ------------------------------------------------------------
 *
 * Default: 8 GB (General Purpose SSD)
 *
 * Requirement ke hisab se storage increase kar sakte hain.
 *
 * ------------------------------------------------------------
 * Step 7: Launch Instance
 * ------------------------------------------------------------
 *
 * Launch pe click karte hi:
 * Instance "Running" state me aa jayega.
 *
 * Running ka matlab:
 * Hamara virtual machine cloud par live run kar raha hai.
 *
 * ------------------------------------------------------------
 * IMPORTANT (Cost Saving Tip for Beginners)
 * ------------------------------------------------------------
 *
 * EC2 instance jab tak "Running" state me hai,
 * tab tak billing chalu rehti hai.
 *
 * Isliye:
 * Practice karne ke baad instance ko STOP kar dena.
 *
 * Steps:
 * EC2 Dashboard → Instances → Select instance
 * → Instance state → Stop
 *
 * Stopped state me:
 * - Compute billing stop ho jata hai
 * - Storage billing chalu rehti hai
 *
 * ------------------------------------------------------------
 * Interview Summary:
 * EC2 is a scalable virtual server in AWS.
 * We launch it using an AMI, select instance type,
 * configure networking, attach security group,
 * and secure login using key pair.
 */