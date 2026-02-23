/**
 * =========================================================
 * AWS CLI (Command Line Interface)
 * =========================================================
 *
 * WHAT IS AWS CLI?
 * ---------------------------------------------------------
 * AWS CLI ek tool hai jo hume allow karta hai
 * AWS services ko command line ke through manage karne ke liye
 * instead of using AWS Management Console (GUI).
 *
 * Simple words me:
 * Browser open karne ki jagah
 * hum terminal / command prompt se hi
 * AWS resources create, delete aur manage kar sakte hain.
 *
 *
 * ---------------------------------------------------------
 * WHY AWS CLI?
 * ---------------------------------------------------------
 *
 * - Fast automation
 * - Script likh sakte hain (DevOps me useful)
 * - CI/CD pipelines me use hota hai
 * - Repeatable infrastructure setup
 *
 *
 * ---------------------------------------------------------
 * EXAMPLE COMMANDS
 * ---------------------------------------------------------
 *
 * EC2 instances list karne ke liye:
 * aws ec2 describe-instances
 *
 * S3 bucket create karne ke liye:
 * aws s3 mb s3://my-bucket-name
 *
 *
 * ---------------------------------------------------------
 * HOW TO INSTALL AWS CLI
 * ---------------------------------------------------------
 *
 * 🔹 WINDOWS
 * 1) AWS official site se MSI installer download karo
 * 2) Install karo (normal software ki tarah)
 * 3) CMD me check karo:
 *
 *    aws --version
 *
 *
 * 🔹 LINUX
 *
 * curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
 * unzip awscliv2.zip
 * sudo ./aws/install
 *
 *
 * 🔹 MAC
 *
 * brew install awscli
 *
 *
 * ---------------------------------------------------------
 * CONFIGURATION (VERY IMPORTANT)
 * ---------------------------------------------------------
 *
 * Install ke baad:
 *
 * aws configure
 *
 * Ye 4 cheeze puchega:
 *
 * 1) AWS Access Key ID
 * 2) AWS Secret Access Key
 * 3) Default region (e.g., ap-south-1)
 * 4) Output format (json)
 *
 *
 * Access Key kahan se milegi?
 * - AWS Console
 * - IAM → Users → Security Credentials
 * - Create Access Key
 *
 *
 * ---------------------------------------------------------
 * AWS CLI WORKFLOW
 * ---------------------------------------------------------
 *
 * Step 1: Install
 * Step 2: aws configure
 * Step 3: Run commands
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 *
 * AWS CLI is a command-line tool that allows users
 * to manage AWS services programmatically instead of
 * using the web console. It is widely used in automation
 * and DevOps workflows.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - AWS CLI = Command Line tool for AWS
 * - Used for automation
 * - Installed on local machine
 * - Configured using aws configure
 *
 */