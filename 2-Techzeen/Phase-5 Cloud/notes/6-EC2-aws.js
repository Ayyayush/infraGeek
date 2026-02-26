/**
 * =========================================================
 * EC2 INSTANCE (ELASTIC COMPUTE CLOUD)
 * =========================================================
 *
 * WHAT IS EC2?
 * ---------------------------------------------------------
 * EC2 ka full form hai:
 * Elastic Compute Cloud
 *
 * EC2 ek virtual computer (virtual machine) hota hai
 * jo AWS cloud me run karta hai.
 *
 * Simple words me:
 * EC2 = Cloud me ek server
 *
 * Aap is server ko:
 * - Start kar sakte ho
 * - Stop kar sakte ho
 * - Restart kar sakte ho
 * - Terminate (delete) kar sakte ho
 * jab chaaho.
 *
 *
 * ---------------------------------------------------------
 * WHY DO WE USE EC2?
 * ---------------------------------------------------------
 *
 * EC2 use karte hain kyunki:
 *
 * - Websites aur web applications host karne ke liye
 * - Backend servers run karne ke liye
 *   (Node.js, Django, Spring Boot, etc.)
 * - Remote development / testing ke liye
 * - Long-running servers ke liye
 *
 *
 * ---------------------------------------------------------
 * COMMON USE CASES OF EC2
 * ---------------------------------------------------------
 *
 * 1) WEB SERVER
 *    - Nginx / Apache ke saath website hosting
 *
 * 2) APPLICATION SERVER
 *    - Backend apps (Node.js, Python, Java)
 *
 * 3) DEV / TEST ENVIRONMENT
 *    - Developers ke liye testing machine
 *
 * 4) MACHINE LEARNING / AI
 *    - GPU-based EC2 instances
 *
 * 5) SCHEDULED TASKS
 *    - Cron jobs
 *    - Background processing
 *
 *
 * ---------------------------------------------------------
 * RELATION WITH OTHER AWS COMPONENTS
 * ---------------------------------------------------------
 *
 * EC2 akela kaam nahi karta,
 * ye multiple AWS components ke saath connected hota hai.
 *
 *
 * 1) IP ADDRESS
 * ---------------------------------------------------------
 * - Public IP:
 *   Internet se access ke liye
 *
 * - Private IP:
 *   Internal AWS network ke liye
 *
 *
 * 2) STORAGE (EBS)
 * ---------------------------------------------------------
 * EC2 instance storage ke liye:
 * EBS (Elastic Block Store) use hota hai.
 *
 * EBS ko aise samjho:
 * - Ye hard disk ki tarah hota hai
 * - EC2 ke saath attach hota hai
 * - Data persist rehta hai (even after reboot)
 *
 * Example:
 * OS + application + data → EBS me store hota hai
 *
 *
 * 3) SECURITY GROUP
 * ---------------------------------------------------------
 * Security Group = Virtual Firewall
 *
 * Ye decide karta hai:
 * - Kaunse ports open hain (22, 80, 443, etc.)
 * - Kaun access kar sakta hai EC2 ko
 *
 * Example:
 * - SSH (22) allow
 * - HTTP (80) allow
 * - Baaki sab block
 *
 *
 * ---------------------------------------------------------
 * EC2 + EBS RELATION (IMPORTANT)
 * ---------------------------------------------------------
 *
 * - EC2 = Computer
 * - EBS = Hard Disk
 *
 * Agar EC2 stop ho jaaye:
 * - EBS data safe rehta hai
 *
 * Agar EC2 terminate ho jaaye:
 * - Agar EBS delete-on-terminate enabled hai
 *   to data delete ho sakta hai
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 *
 * EC2 is a virtual server provided by AWS that allows
 * users to run applications in the cloud. It offers
 * scalable compute capacity and works with services
 * like EBS, Security Groups, and IP addressing.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - EC2 = Virtual machine in AWS
 * - Used for hosting apps & servers
 * - Works with EBS, IPs, Security Groups
 * - Flexible, scalable, and on-demand
 *
 */