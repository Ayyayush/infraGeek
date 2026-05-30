/**
 * =========================================================
 * ! TERRAFORM STATE FILE (.tfstate)
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS terraform.tfstate ?
 * ---------------------------------------------------------
 * terraform.tfstate is a file that stores
 * the actual state of the infrastructure.
 *
 *
 * Interview Definition:
 *
 * Terraform state file stores information
 * about resources managed by Terraform
 * and helps Terraform track infrastructure changes.
 *
 *
 * Simple words:
 *
 * → It is the brain of Terraform
 *
 *
 * Terraform:
 * → Resources create karta hai
 * → Fir unki details tfstate file me store karta hai
 *
 *
 * Example stored information:
 *
 * → EC2 Instance ID
 * → Public IP
 * → Private IP
 * → Tags
 * → Resource properties
 *
 *
 * ---------------------------------------------------------
 * ! WHY IS IT NEEDED?
 * ---------------------------------------------------------
 * Terraform ko pata hona chahiye:
 *
 * → Kya already create ho chuka hai
 * → Kya update karna hai
 * → Kya delete karna hai
 *
 *
 * Ye sari information:
 *
 * terraform.tfstate
 *
 * me store hoti hai.
 *
 *
 * ---------------------------------------------------------
 * ! REAL WORLD EXAMPLE
 * ---------------------------------------------------------
 * Maan lo:
 *
 * Terraform se:
 *
 * → 1 EC2 instance create kiya
 *
 *
 * Terraform:
 *
 * → EC2 ID state file me save kar dega
 *
 *
 * Next time:
 *
 * terraform apply
 *
 * run karoge
 *
 *
 * Terraform:
 *
 * → State file check karega
 *
 * aur sochega:
 *
 * "Ye resource already exist karta hai"
 *
 *
 * Isliye:
 *
 * → Duplicate EC2 create nahi karega
 *
 *
 * ---------------------------------------------------------
 * ! WITHOUT tfstate FILE
 * ---------------------------------------------------------
 * Terraform ko kuch bhi pata nahi hoga.
 *
 *
 * Terraform sochega:
 *
 * → Infrastructure exist hi nahi karti
 *
 *
 * Result:
 *
 * → Duplicate resources create ho sakte hain
 * → Errors aa sakte hain
 * → Infrastructure inconsistent ho sakti hai
 *
 *
 * Example:
 *
 * Pata chala:
 *
 * → Jo EC2 instance pehle hi bana hua tha
 *
 * Terraform usko fir se create karne ki
 * koshish kar raha hai.
 *
 *
 * ---------------------------------------------------------
 * ! USES OF tfstate FILE
 * ---------------------------------------------------------
 * → Infrastructure tracking
 * → Change detection
 * → Resource mapping
 * → Dependency management
 * → Update planning
 * → Deletion planning
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANCE OF tfstate FILE
 * ---------------------------------------------------------
 * → Single Source of Truth
 * → Infrastructure memory
 * → Prevents duplication
 * → Prevents accidental deletion
 * → Enables infrastructure updates
 *
 *
 * ---------------------------------------------------------
 * ! WHAT HAPPENS IF tfstate FILE IS DELETED?
 * ---------------------------------------------------------
 * Terraform will think:
 *
 * → Nothing is deployed
 *
 *
 * Result:
 *
 * → Resources may be recreated
 * → Duplicate infrastructure
 * → Unexpected costs
 * → Errors
 *
 *
 * Example:
 *
 * Existing EC2:
 * → Already running
 *
 *
 * tfstate deleted:
 *
 * → Terraform thinks EC2 doesn't exist
 *
 *
 * Next apply:
 *
 * → May create another EC2
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS terraform.tfstate.backup ?
 * ---------------------------------------------------------
 * Terraform automatically creates:
 *
 * terraform.tfstate.backup
 *
 *
 * This is:
 *
 * → Backup copy of tfstate file
 *
 *
 * Purpose:
 *
 * → Recovery if tfstate gets corrupted
 * → Recovery if state file is accidentally modified
 *
 *
 * Think of it as:
 *
 * → Safety copy of infrastructure state
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS .terraform.lock.hcl ?
 * ---------------------------------------------------------
 * .terraform.lock.hcl
 *
 * is Terraform's dependency lock file.
 *
 *
 * It stores:
 *
 * → Exact provider versions
 * → Provider hashes
 * → Plugin verification data
 *
 *
 * Purpose:
 *
 * → Consistent Terraform environment
 *
 *
 * Example:
 *
 * AWS Provider:
 *
 * v6.2.0
 *
 *
 * Team ka har member:
 *
 * → Same provider version use karega
 *
 *
 * ---------------------------------------------------------
 * ! WHY HASHES ARE STORED?
 * ---------------------------------------------------------
 * Hashes help verify:
 *
 * → Plugin genuine hai
 * → Plugin tampered nahi hua
 * → Correct version install hui hai
 *
 *
 * ---------------------------------------------------------
 * ! WHY SHOULD YOU NEVER EDIT tfstate MANUALLY?
 * ---------------------------------------------------------
 * Technically:
 *
 * → tfstate JSON file hoti hai
 *
 *
 * Lekin:
 *
 * → Manual editing dangerous hai
 *
 *
 * Because:
 *
 * → Terraform aur AWS out of sync ho sakte hain
 * → Wrong resource mapping ho sakti hai
 * → Infrastructure damage ho sakti hai
 *
 *
 * Rule:
 *
 * → Changes code me karo
 * → Terraform commands use karo
 *
 *
 * Never:
 *
 * → Direct tfstate editing
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO MODIFY INFRASTRUCTURE CORRECTLY?
 * ---------------------------------------------------------
 * Correct Way:
 *
 * Edit:
 *
 * → main.tf
 * → variables.tf
 *
 *
 * Then:
 *
 * terraform plan
 *
 * terraform apply
 *
 *
 * Terraform automatically
 * tfstate update kar dega.
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IF tfstate FILE IS LOST?
 * ---------------------------------------------------------
 * Terraform will think:
 *
 * → No infrastructure exists
 *
 *
 * Result:
 *
 * → Resource duplication
 * → Wrong updates
 * → Deployment failures
 *
 *
 * Isliye real projects me:
 *
 * Local tfstate use nahi karte.
 *
 *
 * ---------------------------------------------------------
 * ! REMOTE STATE
 * ---------------------------------------------------------
 * Real projects me:
 *
 * tfstate store karte hain:
 *
 * → AWS S3
 * → Terraform Cloud
 * → Azure Storage
 *
 *
 * Most common:
 *
 * → AWS S3 Bucket
 *
 *
 * Benefits:
 *
 * → Backup
 * → Team collaboration
 * → Centralized state
 * → Disaster recovery
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is terraform.tfstate?
 * Ans:
 * It stores the current state
 * of Terraform-managed infrastructure.
 *
 *
 * Q2) Why is tfstate important?
 * Ans:
 * Terraform uses it to track resources
 * and determine what needs to be created,
 * updated, or deleted.
 *
 *
 * Q3) Why is tfstate called the brain of Terraform?
 * Ans:
 * Because Terraform relies on it
 * to understand the current infrastructure state.
 *
 *
 * Q4) What happens if tfstate is deleted?
 * Ans:
 * Terraform may think nothing exists
 * and can recreate resources.
 *
 *
 * Q5) What is terraform.tfstate.backup?
 * Ans:
 * It is a backup copy of the state file.
 *
 *
 * Q6) What is .terraform.lock.hcl?
 * Ans:
 * It stores exact provider versions
 * and plugin hashes.
 *
 *
 * Q7) Should tfstate be manually edited?
 * Ans:
 * No.
 * Manual editing can corrupt infrastructure state.
 *
 *
 * Q8) Where is state stored in production?
 * Ans:
 * Usually in remote backends like:
 * → AWS S3
 * → Terraform Cloud
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → tfstate = Infrastructure memory
 * → Stores actual deployed resource details
 * → Prevents duplication and mistakes
 * → tfstate.backup = Backup copy
 * → lock.hcl = Provider version lock file
 * → Never edit tfstate manually
 * → Production uses remote state (S3)
 *
 */