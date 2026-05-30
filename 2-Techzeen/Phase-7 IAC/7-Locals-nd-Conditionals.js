/**
 * =========================================================
 * ! LOCALS AND CONDITIONALS IN TERRAFORM
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! LOCALS
 * ---------------------------------------------------------
 * Locals are like temporary variables
 * used only inside Terraform code.
 *
 *
 * They are used when:
 *
 * → Long values repeatedly use karni ho
 * → Reusable logic likhna ho
 * → Naming convention create karni ho
 * → Calculated value multiple places pe use karni ho
 *
 *
 * Example:
 *
 * Maan lo:
 *
 * Instance type ke basis pe
 * instance ka name decide karna hai.
 *
 *
 * Ya:
 *
 * Kisi calculation ki value
 * multiple resources me use karni hai.
 *
 *
 * Aise cases me:
 *
 * → Locals use karte hain.
 *
 *
 * ---------------------------------------------------------
 * ! CHARACTERISTICS OF LOCALS
 * ---------------------------------------------------------
 * 1)
 * Locals make code:
 *
 * → Cleaner
 * → Reusable
 * → More readable
 *
 *
 * 2)
 * Locals input ke through nahi aate
 * jaise variables aate hain.
 *
 *
 * 3)
 * Terraform ke andar hi define hote hain
 * aur wahi use hote hain.
 *
 *
 * 4)
 * local values runtime pe calculate hoti hain.
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE LOCALS?
 * ---------------------------------------------------------
 * → Long values repeat karne se bachne ke liye
 *
 * → Centralized logic create karne ke liye
 *
 * → Naming conventions maintain karne ke liye
 *
 * → Multiple values combine karne ke liye
 *
 * → Calculated results store karne ke liye
 *
 *
 * ---------------------------------------------------------
 * ! VARIABLES VS LOCALS
 * ---------------------------------------------------------
 *
 * ! VARIABLES
 *
 * → User input ke liye use hote hain
 *
 * → Outside se values pass kar sakte hain
 *
 * → Reusable configuration values
 *
 *
 * Example:
 *
 * variable "instance_type" {
 *   default = "t3.micro"
 * }
 *
 *
 * ---------------------------------------------------------
 *
 * ! LOCALS
 *
 * → Internal calculations ke liye
 *
 * → User input nahi lete
 *
 * → Terraform code ke andar hi use hote hain
 *
 *
 * Example:
 *
 * locals {
 *   name_tag = "Micro Instance"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! SIMPLE INTERVIEW DIFFERENCE
 * ---------------------------------------------------------
 * Variables:
 *
 * → External input values
 *
 *
 * Locals:
 *
 * → Internal calculated values
 *
 *
 * ---------------------------------------------------------
 * ! CONDITIONAL EXPRESSIONS
 * ---------------------------------------------------------
 *
 * Conditional expression:
 *
 * → Condition ke basis pe
 *   different value return karta hai
 *
 *
 * Syntax:
 *
 * condition ? true_value : false_value
 *
 *
 * Example:
 *
 * age >= 18
 * ?
 * "Adult"
 * :
 * "Minor"
 *
 *
 * ---------------------------------------------------------
 * ! TERRAFORM CODE
 * ---------------------------------------------------------
 *
 * locals {
 *   name_tag =
 *   var.instance_type == "t3.micro"
 *   ?
 *   "Micro Instance"
 *   :
 *   "Standard Instance"
 * }
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION
 * ---------------------------------------------------------
 *
 * Condition:
 *
 * var.instance_type == "t3.micro"
 *
 *
 * If TRUE:
 *
 * → Micro Instance
 *
 *
 * If FALSE:
 *
 * → Standard Instance
 *
 *
 * Result:
 *
 * → Value local.name_tag me store ho jayegi
 *
 *
 * ---------------------------------------------------------
 * ! RESOURCE BLOCK
 * ---------------------------------------------------------
 *
 * resource "aws_instance" "my_ec2" {
 *
 *   ami           = data.aws_ami.amazon_linux.id
 *
 *   instance_type = var.instance_type
 *
 *   tags = {
 *     Name = local.name_tag
 *   }
 * }
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS HAPPENING HERE?
 * ---------------------------------------------------------
 *
 * Terraform:
 *
 * → Latest Amazon Linux AMI fetch karega
 *
 * → EC2 create karega
 *
 * → Name tag dynamically assign karega
 *
 *
 * Example 1:
 *
 * instance_type = "t3.micro"
 *
 *
 * Result:
 *
 * Name = "Micro Instance"
 *
 *
 * ---------------------------------------------------------
 *
 * Example 2:
 *
 * instance_type = "t3.large"
 *
 *
 * Result:
 *
 * Name = "Standard Instance"
 *
 *
 * ---------------------------------------------------------
 * ! OUTPUT BLOCK
 * ---------------------------------------------------------
 *
 * output "instance_name_tag" {
 *   value = local.name_tag
 * }
 *
 *
 * Purpose:
 *
 * → Terraform apply ke baad
 *   local.name_tag print karna
 *
 *
 * Example Output:
 *
 * instance_name_tag = "Micro Instance"
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 *
 * Development Environment:
 *
 * → Small Instance
 *
 *
 * Production Environment:
 *
 * → Large Instance
 *
 *
 * Local condition automatically
 * correct naming assign kar sakti hai.
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 *
 * Q1) What are Locals in Terraform?
 *
 * Ans:
 * Locals are internally defined values
 * used for reusable logic and calculations.
 *
 *
 * Q2) Why use Locals?
 *
 * Ans:
 * To reduce repetition,
 * improve readability,
 * and centralize logic.
 *
 *
 * Q3) Difference between Variables and Locals?
 *
 * Ans:
 *
 * Variables:
 * → External input values
 *
 *
 * Locals:
 * → Internal calculated values
 *
 *
 * Q4) What is a Conditional Expression?
 *
 * Ans:
 * It returns different values
 * based on a condition.
 *
 *
 * Q5) What is the syntax of Conditional Expressions?
 *
 * Ans:
 *
 * condition ? true_value : false_value
 *
 *
 * Q6) What will happen here?
 *
 * var.instance_type == "t3.micro"
 * ?
 * "Micro Instance"
 * :
 * "Standard Instance"
 *
 *
 * Ans:
 *
 * If instance type is t3.micro:
 * → Micro Instance
 *
 * Otherwise:
 * → Standard Instance
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Variables = External Inputs
 * → Locals = Internal Calculated Values
 * → Locals reduce code duplication
 * → Conditionals use:
 *   condition ? true_value : false_value
 * → Useful for dynamic naming and logic
 *
 */