/**
 * =========================================================
 * ! TERRAFORM MODULES
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS A MODULE?
 * ---------------------------------------------------------
 * A module is simply a folder that contains
 * Terraform configuration files (.tf files).
 *
 *
 * Simple Definition:
 *
 * A module is a reusable collection of
 * Terraform resources and configurations.
 *
 *
 * Think of it as:
 *
 * → A function in programming
 *
 *
 * Just like:
 *
 * Function
 * → Write once
 * → Use many times
 *
 *
 * Similarly:
 *
 * Module
 * → Create once
 * → Reuse many times
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE MODULES?
 * ---------------------------------------------------------
 * Without modules:
 *
 * → Code duplication increases
 * → Maintenance becomes difficult
 * → Large projects become messy
 *
 *
 * With modules:
 *
 * → Code becomes reusable
 * → Better organization
 * → Easier maintenance
 * → Follows DRY principle
 *
 *
 * DRY:
 *
 * Don't Repeat Yourself
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 * Maan lo company me:
 *
 * → Dev Environment
 * → Testing Environment
 * → Production Environment
 *
 *
 * Har environment me:
 *
 * → EC2
 * → Security Group
 * → S3 Bucket
 *
 * create karna hai.
 *
 *
 * Without Modules:
 *
 * Same code
 * → 3 baar likhna padega
 *
 *
 * With Modules:
 *
 * Module ek baar banao
 *
 * Fir:
 *
 * → Dev me use karo
 * → Test me use karo
 * → Prod me use karo
 *
 *
 * ---------------------------------------------------------
 * ! MODULE STRUCTURE
 * ---------------------------------------------------------
 *
 * project/
 *
 * ├── main.tf
 * ├── variables.tf
 * ├── outputs.tf
 * │
 * └── modules/
 *      └── ec2/
 *           ├── main.tf
 *           ├── variables.tf
 *           └── outputs.tf
 *
 *
 * ---------------------------------------------------------
 * ! TYPES OF MODULES
 * ---------------------------------------------------------
 *
 * 1) Root Module
 *
 * → Main Terraform directory
 * → Jaha terraform commands run karte hain
 *
 *
 * 2) Child Module
 *
 * → Module folder
 * → Root module ke andar use hota hai
 *
 *
 * ---------------------------------------------------------
 * ! USING A MODULE
 * ---------------------------------------------------------
 *
 * module "ec2" {
 *   source = "./modules/ec2"
 *
 *   instance_type = "t3.micro"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION
 * ---------------------------------------------------------
 *
 * module "ec2"
 *
 * → Module block
 *
 *
 * source
 *
 * → Module ka location
 *
 *
 * instance_type
 *
 * → Variable pass kar rahe hain module ko
 *
 *
 * ---------------------------------------------------------
 * ! ADVANTAGES OF MODULES
 * ---------------------------------------------------------
 * → Reusable code
 * → Cleaner project structure
 * → Easy maintenance
 * → Less duplication
 * → Better scalability
 * → Team collaboration easier
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 *
 * Q1) What is a Terraform Module?
 *
 * Ans:
 * A Terraform module is a collection of
 * Terraform configuration files grouped
 * together for reuse.
 *
 *
 * Q2) Why do we use Modules?
 *
 * Ans:
 * To avoid code duplication and improve
 * reusability and maintainability.
 *
 *
 * Q3) What is the Root Module?
 *
 * Ans:
 * The directory from which Terraform
 * commands are executed.
 *
 *
 * Q4) What is a Child Module?
 *
 * Ans:
 * A reusable module called from another
 * Terraform configuration.
 *
 *
 * Q5) What is source in a module?
 *
 * Ans:
 * It specifies where Terraform can find
 * the module code.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Module = Folder containing .tf files
 * → Similar to functions in programming
 * → Used for reusable infrastructure code
 * → Helps follow DRY principle
 * → Makes Terraform projects scalable
 * → Root Module calls Child Modules
 *
 */