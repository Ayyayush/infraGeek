/**
 * =========================================================
 * ! TERRAFORM WORKFLOW EXPLAINED
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! PROVIDER
 * ---------------------------------------------------------
 * Provider Terraform ki ek important terminology hai.
 *
 *
 * Jab bhi Terraform code likhte hain:
 *
 * → Sabse pehle provider define karte hain
 *
 *
 * Provider:
 * → Terraform ko batata hai
 *   kaunsa cloud/platform use karna hai
 *
 *
 * Examples:
 *
 * → AWS
 * → Azure
 * → GCP
 *
 *
 * Think of it as:
 *
 * → Cloud Service Selector
 *
 *
 * Example:
 *
 * provider "aws" {
 *   region = "us-east-1"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! RESOURCE
 * ---------------------------------------------------------
 * Resource define karta hai:
 *
 * → Cloud me kya create karna hai
 *
 *
 * Examples:
 *
 * → EC2 Instance
 * → S3 Bucket
 * → VPC
 *
 *
 * Think of it as:
 *
 * → The thing you want to build
 *
 *
 * Example:
 *
 * resource "aws_instance" "myserver" {
 *   ami           = "ami-12345"
 *   instance_type = "t2.micro"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! VARIABLES
 * ---------------------------------------------------------
 * Variables reusable input values store karte hain.
 *
 *
 * Examples:
 *
 * → Region
 * → AMI ID
 * → Instance type
 *
 *
 * Benefits:
 *
 * → Code flexible ho jata hai
 * → Easy to update hota hai
 * → Hardcoding avoid hoti hai
 *
 *
 * Example:
 *
 * variable "instance_type" {
 *   default = "t2.micro"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! WHY VARIABLES ARE IMPORTANT?
 * ---------------------------------------------------------
 * Maan lo:
 *
 * → 20 jagah t2.micro likha hai
 *
 *
 * Future me:
 *
 * → t3.micro karna hua
 *
 *
 * Without variables:
 * → Har jagah manually change karna padega
 *
 *
 * With variables:
 * → Sirf ek jagah value change karni padegi
 *
 *
 * ---------------------------------------------------------
 * ! TERRAFORM WORKFLOW
 * ---------------------------------------------------------
 * Interview me:
 *
 * Terraform workflow bahut commonly poocha jata hai
 * taaki pata chale Terraform practical aata hai ya nahi.
 *
 *
 * ---------------------------------------------------------
 * ! STEP 1 -> CREATE .tf FILE
 * ---------------------------------------------------------
 * Terraform configuration file create karte hain.
 *
 *
 * Example:
 *
 * main.tf
 *
 *
 * Isme:
 *
 * → Provider
 * → Resources
 * → Variables
 *
 * likhte hain
 *
 *
 * ---------------------------------------------------------
 * ! STEP 2 -> terraform init
 * ---------------------------------------------------------
 * Command:
 *
 * terraform init
 *
 *
 * Purpose:
 *
 * → Project initialize karta hai
 * → Required providers/plugins download karta hai
 *
 *
 * Example:
 *
 * AWS provider automatically download ho jayega
 *
 *
 * Think of it as:
 *
 * → Project setup step
 *
 *
 * ---------------------------------------------------------
 * ! STEP 3 -> terraform plan
 * ---------------------------------------------------------
 * Command:
 *
 * terraform plan
 *
 *
 * Purpose:
 *
 * → Preview dikhata hai
 * → Kya create/update/delete hoga
 *
 *
 * Important:
 *
 * → Actual changes nahi karta
 *
 *
 * Think of it as:
 *
 * → Dry run / preview mode
 *
 *
 * Example:
 *
 * → 1 EC2 create hoga
 * → 1 security group create hogi
 *
 *
 * ---------------------------------------------------------
 * ! STEP 4 -> terraform apply
 * ---------------------------------------------------------
 * Command:
 *
 * terraform apply
 *
 *
 * Purpose:
 *
 * → Actual infrastructure create karta hai
 *
 *
 * Yaha:
 *
 * → AWS resources really create honge
 *
 *
 * Example:
 *
 * → EC2 instance launch ho jayega
 *
 *
 * Terraform:
 *
 * → APIs call karta hai
 * → Cloud resources create karta hai
 *
 *
 * ---------------------------------------------------------
 * ! STEP 5 -> terraform destroy
 * ---------------------------------------------------------
 * Optional step
 *
 *
 * Command:
 *
 * terraform destroy
 *
 *
 * Purpose:
 *
 * → Terraform se create ki hui
 *   sari infrastructure delete karta hai
 *
 *
 * Example:
 *
 * → EC2 delete
 * → VPC delete
 * → Security groups delete
 *
 *
 * Think of it as:
 *
 * → Cleanup step
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE TERRAFORM FLOW
 * ---------------------------------------------------------
 * Write .tf code
 *          ↓
 * terraform init
 *          ↓
 * terraform plan
 *          ↓
 * terraform apply
 *          ↓
 * Infrastructure created
 *          ↓
 * terraform destroy (optional)
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 * Maan lo:
 *
 * Company ko chahiye:
 *
 * → 5 EC2 instances
 * → Load balancer
 * → VPC
 * → Security groups
 *
 *
 * Instead of manually creating everything:
 *
 * → DevOps engineer Terraform code likhega
 *
 *
 * Fir:
 *
 * terraform apply
 *
 * run karega
 *
 *
 * Aur:
 *
 * → Entire infrastructure automatically create ho jayegi
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * terraform plan
 * → Sirf preview
 *
 *
 * terraform apply
 * → Actual changes
 *
 *
 * terraform destroy
 * → Infrastructure remove
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is a provider in Terraform?
 * Ans:
 * Provider tells Terraform
 * which cloud/platform to use.
 *
 *
 * Q2) What is a resource in Terraform?
 * Ans:
 * Resource defines
 * what infrastructure to create.
 *
 *
 * Q3) Why are variables used?
 * Ans:
 * Variables make Terraform code
 * reusable and flexible.
 *
 *
 * Q4) What does terraform init do?
 * Ans:
 * It initializes the project
 * and downloads required providers/plugins.
 *
 *
 * Q5) What does terraform plan do?
 * Ans:
 * It previews infrastructure changes.
 *
 *
 * Q6) What does terraform apply do?
 * Ans:
 * It creates or updates infrastructure.
 *
 *
 * Q7) What does terraform destroy do?
 * Ans:
 * It deletes infrastructure resources.
 *
 *
 * Q8) Difference between plan and apply?
 * Ans:
 *
 * plan:
 * → Preview only
 *
 * apply:
 * → Actual execution
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Provider selects cloud platform
 * → Resource defines infrastructure
 * → Variables store reusable values
 * → init initializes project
 * → plan previews changes
 * → apply creates infrastructure
 * → destroy removes infrastructure
 *
 */