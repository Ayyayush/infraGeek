/**
 * Terraform 
 * terraform devops ka iac tool h 
 * infrastrcutre as code tool 
 * 
 * 
 * * ---------------------------------------------------------
 * ! SIMPLE DEFINITION
 * ---------------------------------------------------------
 * Terraform is an Infrastructure as Code tool
 * used to automate infrastructure provisioning.
 *
 * ! what is infrastructure  as code 
 * it is a way to manage and provision infrstrcutree using code 
 * you wrtite code  like  .tf files instead of 
 * clicking on aws  console 
 * it makes infrastrcutrue consistent reptable and verisopn controlled 
 * 
 * maan l o10 ec2 mahciens bannio ho manually orh mistakle ho skt ah 
 * same code hi har abar run kargea 
 * to hsirf ek baar hi shi code likhna h 
 * 
 * /**
 * =========================================================
 * ! TERRAFORM
 * =========================================================
 * Terraform ek Infrastructure as Code (IaC) tool hai
 * jo HashiCorp ne banaya hai.
 *
 *
 * Terraform ka use:
 * → Infrastructure create
 * → Manage
 * → Automate
 *
 * karne ke liye hota hai.
 *
 *
 * Example:
 *
 * → AWS EC2 instances
 * → VPC
 * → S3 buckets
 * → Load balancers
 * → Databases
 *
 * automatically create kar sakte hain.
 *
 *
 * ---------------------------------------------------------
 * ! SIMPLE DEFINITION
 * ---------------------------------------------------------
 * Terraform is an Infrastructure as Code tool
 * used to automate infrastructure provisioning.
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS INFRASTRUCTURE?
 * ---------------------------------------------------------
 * Infrastructure matlab:
 *
 * → Servers
 * → Networks
 * → Databases
 * → Storage
 * → Cloud resources
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS IaC?
 * ---------------------------------------------------------
 * IaC =
 * Infrastructure as Code
 *
 *
 * Matlab:
 * → Infrastructure ko manually create nahi karte
 * → Code likh ke automate karte hain
 *
 *
 * Example:
 * Instead of:
 * → AWS console me manually click karna
 *
 *
 * We write:
 * Terraform code
 *
 * Terraform:
 * → Automatically resources create kar deta hai
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE TERRAFORM?
 * ---------------------------------------------------------
 * → Infrastructure automation
 * → Manual work reduce karne ke liye
 * → Fast deployment
 * → Consistent environment
 * → Human errors reduce karne ke liye
 * → Production infrastructure manage karne ke liye
 *
 *
 * ---------------------------------------------------------
 * ! HOW TERRAFORM WORKS?
 * ---------------------------------------------------------
 * Terraform Code
 *          ↓
 * terraform plan
 *          ↓
 * Changes preview
 *          ↓
 * terraform apply
 *          ↓
 * Infrastructure create/update
 *
 *
 * ---------------------------------------------------------
 * ! TERRAFORM CONFIGURATION LANGUAGE
 * ---------------------------------------------------------
 * Terraform:
 * HCL
 * use karta hai.
 *
 *
 * HCL =  HashiCorp Configuration Language
 * Ye:  → Human-readable language hoti hai
 *
 *
 * ---------------------------------------------------------
 * ! SIMPLE TERRAFORM EXAMPLE
 * ---------------------------------------------------------
 * provider "aws" {
 *   region = "us-east-1"
 * }
 *
 *
 * resource "aws_instance" "myserver" {
 *   ami           = "ami-123456"
 *   instance_type = "t2.micro"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION
 * ---------------------------------------------------------
 * provider "aws"
 * → Terraform ko batata hai
 *   ki AWS use karna hai
 *
 *
 * region
 * → AWS region define karta hai
 *
 *
 * resource
 * → Kaunsa cloud resource create karna hai
 *
 *
 * aws_instance
 * → EC2 instance create karega
 *
 *
 * instance_type
 * → Server type define karta hai
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT TERRAFORM COMMANDS
 * ---------------------------------------------------------
 *
 * ! Initialize Terraform
 * terraform init
 *
 *
 * ! Check Execution Plan
 * terraform plan
 *
 *
 * ! Create Infrastructure
 * terraform apply
 *
 *
 * ! Destroy Infrastructure
 * terraform destroy
 *
 *
 * ---------------------------------------------------------
 * ! terraform init
 * ---------------------------------------------------------
 * → Required plugins/providers download karta hai
 * → Terraform project initialize karta hai
 *
 *
 * ---------------------------------------------------------
 * ! terraform plan
 * ---------------------------------------------------------
 * → Preview dikhata hai
 * → Kaunse resources create/update/delete honge
 *
 *
 * ---------------------------------------------------------
 * ! terraform apply
 * ---------------------------------------------------------
 * → Actual infrastructure create karta hai
 *
 *
 * ---------------------------------------------------------
 * ! terraform destroy
 * ---------------------------------------------------------
 * → Infrastructure delete karta hai
 *
 *
 * ---------------------------------------------------------
 * ! TERRAFORM STATE FILE
 * ---------------------------------------------------------
 * Terraform:
 * terraform.tfstate
 * file maintain karta hai.
 *
 *
 * Isme:  → Current infrastructure state store hoti hai
 *
 *
 * ---------------------------------------------------------
 * ! BENEFITS OF TERRAFORM
 * ---------------------------------------------------------
 * → Infrastructure automation
 * → Cloud-independent
 * → Reusable code
 * → Version control possible
 * → Faster deployment
 * → Easy scaling
 * → Consistent environments
 *
 *
 * ---------------------------------------------------------
 * ! TERRAFORM VS ANSIBLE
 * ---------------------------------------------------------
 * Terraform:
 * → Infrastructure provisioning tool
 *
 * Example:
 * → EC2 create karna
 *
 *
 * Ansible:
 * → Configuration management tool
 *
 * Example:
 * → EC2 ke andar nginx install karna
 *
 *
 * ---------------------------------------------------------
 * ! REAL INDUSTRY FLOW
 * ---------------------------------------------------------
 * Terraform:
 * → Server create karega
 *
 *
 * Ansible:
 * → Server configure karega
 *
 *
 * Example:
 *
 * Terraform:
 * → AWS EC2 create
 *
 *
 * Ansible:
 * → nginx install
 * → users create
 * → configs setup
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is Terraform?
 * Ans:
 * Terraform is an Infrastructure as Code tool
 * used to automate infrastructure provisioning.
 *
 *
 * Q2) What is IaC?
 * Ans:
 * Infrastructure as Code means
 * managing infrastructure using code
 * instead of manual processes.
 *
 *
 * Q3) Which language does Terraform use?
 * Ans:
 * HCL (HashiCorp Configuration Language)
 *
 *
 * Q4) What does terraform init do?
 * Ans:
 * It initializes the Terraform project
 * and downloads required providers/plugins.
 *
 *
 * Q5) What does terraform plan do?
 * Ans:
 * It shows preview of infrastructure changes.
 *
 *
 * Q6) What does terraform apply do?
 * Ans:
 * It creates or updates infrastructure.
 *
 *
 * Q7) What is terraform destroy?
 * Ans:
 * It deletes infrastructure resources.
 *
 *
 * Q8) What is terraform.tfstate?
 * Ans:
 * It stores the current infrastructure state.
 *
 *
 * Q9) Difference between Terraform and Ansible?
 * Ans:
 *
 * Terraform:
 * → Infrastructure provisioning
 *
 * Ansible:
 * → Configuration management
 *
 *
 * Q10) Is Terraform cloud-specific?
 * Ans:
 * No.
 * Terraform supports multiple cloud providers.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Terraform = Infrastructure Automation Tool
 * → Uses Infrastructure as Code
 * → Uses HCL language
 * → Creates cloud resources automatically
 * → terraform apply creates infrastructure
 * → terraform destroy removes infrastructure
 * → Often used with Ansible in DevOps
 *
 *
 * tehre are diffent iac tools  but we use trraofrm because
 * it is open soruce and cloud agnositic works with aws,azure,gcp etc
 * automates  infrastructure deployment 
 * easy synrax usnng hcl (hashicrop confuraiton langiuuage 
 * supports veriosn contrl and team coolabaotaion
 * 
 * 
 * ! what is hashicorp[ 
 * 
 * ! terraform vs cloud formaiton 
 * cloud fomraiotn aws ka  pana iac tool h 
 * 
 * 
 */