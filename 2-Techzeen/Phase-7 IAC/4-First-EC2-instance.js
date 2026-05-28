/**
 * =========================================================
 * ! FIRST EC2 INSTANCE USING TERRAFORM
 * =========================================================
 * Ab hum Terraform ka code likhenge
 * aur code likh ke AWS cloud pe EC2 instance create karenge.
 *
 *
 * ---------------------------------------------------------
 * ! STEP 1 -> INSTALL TERRAFORM EXTENSION
 * ---------------------------------------------------------
 * VS Code me:
 *
 * → Terraform extension install karo
 *
 *
 * Benefits:
 *
 * → Syntax highlighting
 * → Auto completion
 * → Better readability
 *
 *
 * ---------------------------------------------------------
 * ! STEP 2 -> CREATE FOLDER FOR TERRAFORM CODE
 * ---------------------------------------------------------
 * Example:
 *
 * terraform-project
 *
 *
 * Is folder ke andar:
 * → Terraform ki sari .tf files rahengi
 *
 *
 * ---------------------------------------------------------
 * ! STEP 3 -> CREATE main.tf FILE
 * ---------------------------------------------------------
 * Example code:
 *
 * provider "aws" {
 *   region = "us-east-1"
 * }
 *
 *
 * resource "aws_instance" "my_ec2" {
 *   ami           = "ami-00e801948462f718a"
 *   instance_type = "t3.micro"
 *
 *   tags = {
 *     Name = "MyFirstTerraformEC2"
 *   }
 * }
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION OF CODE
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
 * → Kaunsa resource create karna hai
 *
 *
 * aws_instance
 * → EC2 instance create karega
 *
 *
 * my_ec2
 * → Resource ka logical name
 *
 *
 * ami
 * → Operating system image
 *
 *
 * instance_type
 * → EC2 machine type
 *
 *
 * tags
 * → Resource naming/identification ke liye
 *
 *
 * ---------------------------------------------------------
 * ! STEP 4 -> terraform init
 * ---------------------------------------------------------
 * Command:
 *
 * terraform init
 *
 *
 * Purpose:
 *
 * → Terraform project initialize karta hai
 * → Required providers/plugins download karta hai
 *
 *
 * Example:
 *
 * → AWS provider automatically download ho jayega
 *
 *
 * ---------------------------------------------------------
 * ! WHAT GETS CREATED AFTER terraform init?
 * ---------------------------------------------------------
 * Ek hidden folder create hota hai:
 *
 * .terraform/
 *
 *
 * Iske andar:
 * → Downloaded providers/plugins store hote hain
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS .terraform.lock.hcl ?
 * ---------------------------------------------------------
 * terraform.lock.hcl
 *
 * ek lock file hoti hai.
 *
 *
 * Ye:
 * → Provider versions lock/store karti hai
 *
 *
 * Purpose:
 *
 * → Same provider version use ho
 * → Team me consistency maintain rahe
 *
 *
 * Example:
 *
 * Agar:
 * → Tumhari machine pe AWS provider v5 install hua
 *
 * Toh:
 * → Team members bhi wahi version use karenge
 *
 *
 * ---------------------------------------------------------
 * ! STEP 5 -> terraform plan
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
 * → Actual infrastructure create nahi hoti
 *
 *
 * Think of it as:
 *
 * → Dry run
 *
 *
 * Example:
 *
 * → 1 EC2 instance create hoga
 *
 *
 * ---------------------------------------------------------
 * ! STEP 6 -> terraform apply
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
 * → AWS APIs call hoti hain
 * → EC2 instance real me create hota hai
 *
 *
 * Terraform:
 *
 * → Confirmation mangega
 *
 *
 * Enter:
 *
 * yes
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS terraform.tfstate ?
 * ---------------------------------------------------------
 * terraform.tfstate
 *
 * ek state file hoti hai.
 *
 *
 * Ye:
 * → Yaad rakhti hai
 *   ki AWS pe kya create ho chuka hai
 *
 *
 * Example:
 *
 * → EC2 instance ID
 * → Resource details
 * → Current infrastructure state
 *
 *
 * ---------------------------------------------------------
 * ! WHY tfstate FILE IS IMPORTANT?
 * ---------------------------------------------------------
 * Terraform:
 * → AWS ko har baar scan nahi karta
 *
 *
 * Instead:
 *
 * → tfstate file dekh ke compare karta hai
 *
 *
 * Benefits:
 *
 * → Faster operations
 * → Infrastructure tracking
 * → Change detection
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE TERRAFORM FLOW
 * ---------------------------------------------------------
 * Write Terraform code
 *          ↓
 * terraform init
 *          ↓
 * Download providers
 *          ↓
 * terraform plan
 *          ↓
 * Preview changes
 *          ↓
 * terraform apply
 *          ↓
 * EC2 created on AWS
 *          ↓
 * terraform.tfstate updated
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * terraform init
 * → Setup
 *
 *
 * terraform plan
 * → Preview
 *
 *
 * terraform apply
 * → Actual execution
 *
 *
 * terraform.tfstate
 * → Infrastructure memory/state
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What does terraform init do?
 * Ans:
 * It initializes the Terraform project
 * and downloads required providers/plugins.
 *
 *
 * Q2) What is .terraform folder?
 * Ans:
 * It stores downloaded providers/plugins.
 *
 *
 * Q3) What is terraform.lock.hcl ?
 * Ans:
 * It locks provider versions
 * for consistency across environments.
 *
 *
 * Q4) What does terraform plan do?
 * Ans:
 * It previews infrastructure changes.
 *
 *
 * Q5) What does terraform apply do?
 * Ans:
 * It creates/updates actual infrastructure.
 *
 *
 * Q6) What is terraform.tfstate?
 * Ans:
 * It stores current infrastructure state.
 *
 *
 * Q7) Why is tfstate important?
 * Ans:
 * Terraform uses it to track
 * existing infrastructure and changes.
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
 * → Write Terraform code in .tf files
 * → init downloads providers
 * → .terraform folder stores plugins
 * → lock.hcl locks provider versions
 * → plan previews changes
 * → apply creates infrastructure
 * → tfstate tracks created resources
 *
 */