/**
 * =========================================================
 * ! RESOURCE DEPENDENCY IN TERRAFORM
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS RESOURCE DEPENDENCY?
 * ---------------------------------------------------------
 * Resource dependency means:
 *
 * → Ek resource create hone ke baad hi
 *   dusra resource create ho sakta hai.
 *
 *
 * Example:
 *
 * EC2
 *          ↓
 * Depends On
 *          ↓
 * Security Group
 *
 *
 * Pehle:
 *
 * → Security Group create hogi
 *
 *
 * Fir:
 *
 * → EC2 create hoga
 *
 *
 * ---------------------------------------------------------
 * ! DOES TERRAFORM HANDLE DEPENDENCIES AUTOMATICALLY?
 * ---------------------------------------------------------
 * Yes.
 *
 *
 * Terraform mostly dependencies
 * automatically handle kar leta hai.
 *
 *
 * Terraform:
 *
 * → Code read karta hai
 * → Resource references detect karta hai
 * → Dependency graph banata hai
 * → Correct order me resources create karta hai
 *
 *
 * ---------------------------------------------------------
 * ! EXAMPLE
 * ---------------------------------------------------------
 * Maan lo:
 *
 * Terraform se:
 *
 * → S3 Bucket
 * → EC2 Instance
 *
 * create karna hai.
 *
 *
 * Agar:
 *
 * EC2 bucket ka reference use kar raha hai
 *
 *
 * Terraform automatically samajh jayega:
 *
 * → Bucket pehle create karni hai
 * → EC2 baad me create karna hai
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS REFERENCE IN TERRAFORM?
 * ---------------------------------------------------------
 * Reference means:
 *
 * → Ek resource ki output
 *   ya attribute ko
 *   dusre resource me use karna.
 *
 *
 * Simple Definition:
 *
 * Using the output or attribute of one resource
 * inside another resource.
 *
 *
 * Example:
 *
 * aws_s3_bucket.mybucket.id
 *
 *
 * Yaha:
 *
 * → Bucket ka attribute use ho raha hai
 *
 *
 * ---------------------------------------------------------
 * ! RESOURCE REFERENCE EXAMPLE
 * ---------------------------------------------------------
 *
 * resource "aws_security_group" "web_sg" {
 *   name = "web-security-group"
 * }
 *
 *
 * resource "aws_instance" "web_server" {
 *   ami           = "ami-123456"
 *   instance_type = "t3.micro"
 *
 *   vpc_security_group_ids = [
 *     aws_security_group.web_sg.id
 *   ]
 * }
 *
 *
 * ---------------------------------------------------------
 * ! WHAT HAPPENS HERE?
 * ---------------------------------------------------------
 *
 * aws_security_group.web_sg.id
 *
 * is a reference.
 *
 *
 * Terraform automatically understands:
 *
 * → Security Group first
 * → EC2 second
 *
 *
 * Because:
 *
 * → EC2 needs Security Group ID
 *
 *
 * ---------------------------------------------------------
 * ! DEPENDENCY GRAPH
 * ---------------------------------------------------------
 *
 * Security Group
 *          ↓
 * EC2
 *
 *
 * Terraform internally
 * a dependency graph create karta hai.
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IF NO REFERENCE IS USED?
 * ---------------------------------------------------------
 *
 * Maan lo:
 *
 * Do resources hain
 *
 * aur unke beech koi reference nahi hai.
 *
 *
 * Terraform sochega:
 *
 * → Dono independent hain
 *
 *
 * Result:
 *
 * → Parallel creation ho sakti hai
 *
 *
 * ---------------------------------------------------------
 * ! EXPLICIT DEPENDENCY
 * ---------------------------------------------------------
 *
 * Agar:
 *
 * → Resource reference use nahi kar rahe
 *
 * Lekin:
 *
 * → Order maintain karna hai
 *
 *
 * Toh:
 *
 * depends_on
 *
 * use karte hain.
 *
 *
 * ---------------------------------------------------------
 * ! WHEN TO USE depends_on EXPLICITLY?
 * ---------------------------------------------------------
 *
 * Use depends_on when:
 *
 * → Terraform dependency detect nahi kar sakta
 *
 * → Resource reference available nahi hai
 *
 * → Forced creation order chahiye
 *
 * → Hidden dependencies exist karti hain
 *
 *
 * ---------------------------------------------------------
 * ! EXAMPLE OF depends_on
 * ---------------------------------------------------------
 *
 * resource "aws_s3_bucket" "mybucket" {
 *   bucket = "my-demo-bucket"
 * }
 *
 *
 * resource "aws_instance" "my_ec2" {
 *   ami           = "ami-123456"
 *   instance_type = "t3.micro"
 *
 *   depends_on = [
 *     aws_s3_bucket.mybucket
 *   ]
 * }
 *
 *
 * ---------------------------------------------------------
 * ! WHAT HAPPENS HERE?
 * ---------------------------------------------------------
 *
 * Terraform forcefully ensure karega:
 *
 * → S3 Bucket first
 *
 * → EC2 second
 *
 *
 * Even though:
 *
 * → EC2 bucket ka reference use nahi kar raha
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 *
 * Example:
 *
 * IAM Role
 *          ↓
 * EC2 Instance
 *
 *
 * EC2 launch se pehle:
 *
 * → IAM role ready honi chahiye
 *
 *
 * Aise scenarios me:
 *
 * depends_on use kar sakte hain.
 *
 *
 * ---------------------------------------------------------
 * ! AUTOMATIC VS EXPLICIT DEPENDENCY
 * ---------------------------------------------------------
 *
 * Automatic Dependency:
 *
 * → Resource references use hoti hain
 *
 * → Terraform khud detect kar leta hai
 *
 *
 * Example:
 *
 * aws_security_group.web_sg.id
 *
 *
 * ---------------------------------------------------------
 *
 * Explicit Dependency:
 *
 * → depends_on use karte hain
 *
 * → Manually order define karte hain
 *
 *
 * Example:
 *
 * depends_on = [
 *   aws_s3_bucket.mybucket
 * ]
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 *
 * Q1) Does Terraform handle dependencies automatically?
 *
 * Ans:
 * Yes.
 * Terraform automatically detects dependencies
 * through resource references.
 *
 *
 * Q2) What is a resource reference?
 *
 * Ans:
 * Using an attribute or output of one resource
 * inside another resource.
 *
 *
 * Q3) What is depends_on?
 *
 * Ans:
 * It is used to explicitly define
 * resource dependencies.
 *
 *
 * Q4) When should depends_on be used?
 *
 * Ans:
 * When Terraform cannot automatically
 * detect the dependency.
 *
 *
 * Q5) Difference between automatic and explicit dependency?
 *
 * Ans:
 *
 * Automatic:
 * → Terraform detects it through references.
 *
 *
 * Explicit:
 * → We manually define it using depends_on.
 *
 *
 * Q6) Why is dependency management important?
 *
 * Ans:
 * It ensures resources are created
 * in the correct order.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Terraform automatically handles dependencies
 * → References create automatic dependencies
 * → Reference = using one resource's attribute in another
 * → depends_on creates explicit dependency
 * → Used when Terraform cannot infer dependency
 * → Ensures correct resource creation order
 *
 */