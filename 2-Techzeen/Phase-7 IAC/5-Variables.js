/**
 * =========================================================
 * ! TERRAFORM VARIABLES
 * =========================================================
 * Pichle lecture me humne AMI ID manually AWS Console
 * se copy karke Terraform code me daali thi.
 *
 * Lekin industry me hardcoded values use nahi karte.
 *
 * Reason:
 * → Maintain karna difficult ho jata hai
 * → Reusability kam ho jati hai
 * → Region change karne par code break ho sakta hai
 *
 *
 * Isliye:
 * → Variables use karte hain
 * → Dynamic data fetch karte hain
 *
 *
 * Humne 3 files banayi:
 *
 * → main.tf
 * → variables.tf
 * → outputs.tf
 *
 *
 * ---------------------------------------------------------
 * ! PROVIDER BLOCK
 * ---------------------------------------------------------
 * provider "aws" {
 *   region = var.aws_region
 * }
 *
 *
 * Purpose:
 *
 * → Terraform ko batata hai ki AWS use karna hai
 *
 *
 * var.aws_region
 * →
 * Region hardcode nahi hai
 * Variable se aa rahi hai
 *
 *
 * Example:
 *
 * us-east-1
 *
 *
 * ---------------------------------------------------------
 * ! DATA BLOCK
 * ---------------------------------------------------------
 * data "aws_ami" "amazon_linux" {
 *   most_recent = true
 *
 *   owners = ["amazon"]
 *
 *   filter {
 *     name   = "name"
 *     values = ["amzn2-ami-hvm-*-x86_64-gp2"]
 *   }
 * }
 *
 *
 * Purpose:
 *
 * → Latest Amazon Linux AMI dynamically fetch karna
 *
 *
 * ! What is Data Block?
 *
 * Data block existing AWS information
 * read/fetch karne ke liye use hota hai.
 *
 *
 * most_recent = true
 *
 * → Latest available AMI fetch karega
 *
 *
 * owners = ["amazon"]
 *
 * → Sirf official Amazon AMIs dekhega
 *
 *
 * filter
 *
 * → Specific AMI search pattern define karta hai
 *
 *
 * Benefit:
 *
 * → Console se manually AMI copy nahi karni padti
 *
 *
 * ---------------------------------------------------------
 * ! RESOURCE BLOCK
 * ---------------------------------------------------------
 * resource "aws_instance" "my_ec2" {
 *   ami           = data.aws_ami.amazon_linux.id
 *   instance_type = var.instance_type
 *
 *   tags = {
 *     Name = var.instance_name
 *   }
 * }
 *
 *
 * Purpose:
 *
 * → AWS me EC2 instance create karna
 *
 *
 * ami
 *
 * → Data block se fetched latest AMI use hogi
 *
 *
 * instance_type
 *
 * → Variable se aa raha hai
 *
 *
 * tags
 *
 * → EC2 ko readable name dene ke liye
 *
 *
 * ---------------------------------------------------------
 * ! VARIABLES
 * ---------------------------------------------------------
 * variable "aws_region" {
 *   default = "us-east-1"
 * }
 *
 *
 * variable "instance_type" {
 *   default = "t3.micro"
 * }
 *
 *
 * variable "instance_name" {
 *   default = "ayushTerraform"
 * }
 *
 *
 * Purpose:
 *
 * → Reusable values store karna
 *
 *
 * Benefits:
 *
 * → Hardcoding avoid hoti hai
 * → Easy maintenance
 * → Easy customization
 *
 *
 * Example:
 *
 * Kal ko t3.micro ki jagah t3.small karna ho
 *
 * Toh:
 *
 * Sirf variable change karna padega
 *
 *
 * ---------------------------------------------------------
 * ! OUTPUT BLOCK
 * ---------------------------------------------------------
 * output "instance_public_ip" {
 *   value = aws_instance.my_ec2.public_ip
 * }
 *
 *
 * Purpose:
 *
 * → Resource create hone ke baad
 *   useful information display karna
 *
 *
 * Yaha:
 *
 * → EC2 ka public IP print hoga
 *
 *
 * Example Output:
 *
 * instance_public_ip = 54.xx.xx.xx
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE FLOW
 * ---------------------------------------------------------
 * variables.tf
 *          ↓
 * Region / Instance Type / Name
 *          ↓
 * Provider AWS select karta hai
 *          ↓
 * Data block latest AMI fetch karta hai
 *          ↓
 * Resource EC2 create karta hai
 *          ↓
 * Output public IP display karta hai
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Provider AWS select karta hai
 * → Variables reusable values store karte hain
 * → Data block latest AMI fetch karta hai
 * → Resource EC2 create karta hai
 * → Output public IP show karta hai
 * → Ye industry-standard Terraform structure hai
 *
 */