/**
 * =========================================================
 * ! INSTALLING TERRAFORM ON WINDOWS
 * =========================================================
 * Terraform install karne ke steps:
 *
 * ---------------------------------------------------------
 * ! STEP 1 -> DOWNLOAD TERRAFORM
 * ---------------------------------------------------------
 * → Official Terraform website pe jao
 *
 * → Windows version download karo
 *
 *
 * Download:
 * → ZIP file format me hota hai
 *
 *
 * ---------------------------------------------------------
 * ! STEP 2 -> EXTRACT ZIP FILE
 * ---------------------------------------------------------
 * ZIP extract karo.
 *
 * Extract karne ke baad:
 * → terraform.exe file milegi
 *
 *
 * ---------------------------------------------------------
 * ! STEP 3 -> CREATE TERRAFORM FOLDER
 * ---------------------------------------------------------
 * Example:
 * C:\terraform
 * terraform.exe ko:
 *
 * → Is folder me move kar do
 *
 *
 * ---------------------------------------------------------
 * ! STEP 4 -> ADD ENVIRONMENT VARIABLE
 * ---------------------------------------------------------
 * Environment Variables open karo:
 *
 * → Edit System Environment Variables
 * → Environment Variables
 * → Path
 * → Edit
 * → New
 *
 *
 * Add:
 *
 * C:\terraform
 *
 *
 * ---------------------------------------------------------
 * ! WHY ADD PATH VARIABLE?
 * ---------------------------------------------------------
 * Taaki:
 * → Terraform command
 *   kisi bhi terminal location se run ho sake
 *
 *
 * ---------------------------------------------------------
 * ! STEP 5 -> RESTART TERMINAL
 * ---------------------------------------------------------
 * CMD ya PowerShell:
 * → Close karo
 * → Dubara open karo
 *
 *
 * ---------------------------------------------------------
 * ! VERIFICATION OF INSTALLATION
 * ---------------------------------------------------------
 * Command:
 * terraform -v
 *
 *
 * Output:
 *
 * C:\Users\Aayu0>terraform -v
 * Terraform v1.15.5
 * on windows_386
 *
 * C:\Users\Aayu0>
 *
 *
 * ---------------------------------------------------------
 * ! MEANING OF OUTPUT
 * ---------------------------------------------------------
 * Terraform v1.15.5
 * → Installed Terraform version
 *
 *
 * windows_386
 * → Windows operating system architecture
 *
 *
 * Matlab:
 *
 * → Terraform successfully install ho gaya
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT NOTE
 * ---------------------------------------------------------
 * Agar:
 * terraform is not recognized
 * error aaye:
 * → Path variable properly add nahi hui
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) How do you verify Terraform installation?
 * Ans:
 * Using:
 * terraform -v
 *
 *
 * Q2) Why do we add Terraform path in environment variables?
 * Ans:
 * So Terraform command can run
 * from any terminal location.
 *
 *
 * Q3) Which file is important after extracting Terraform ZIP?
 * Ans:
 * terraform.exe
 *
 *
 * Q4) What does terraform -v show?
 * Ans:
 * It shows installed Terraform version
 * and system architecture.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Download Terraform ZIP
 * → Extract terraform.exe
 * → Add folder to PATH variable
 * → Restart terminal
 * → Verify using terraform -v
 *
 */