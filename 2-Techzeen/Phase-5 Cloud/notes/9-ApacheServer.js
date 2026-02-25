/**
 * ! Installing Apache Web Server on EC2 Instance
 *
 * Ab hum EC2 instance par Apache web server install karenge
 * taaki hum apni static HTML website host kar saken.
 *
 * ------------------------------------------------------------
 * ! Pre-requisites
 * ------------------------------------------------------------
 *
 * - AWS me IAM user se login hona chahiye
 * - EC2 instance running state me hona chahiye
 * - SSH ke through EC2 instance par remote access hona chahiye
 *
 * NOTE:
 * Jab EC2 use na ho, hamesha STOP kar dena
 * taaki unnecessary billing na lage.
 *
 * ------------------------------------------------------------
 * ! Why Web Server is Required
 * ------------------------------------------------------------
 *
 * Agar hume static website (HTML/CSS/JS) host karni ho,
 * toh hume ek web server chahiye hota hai.
 *
 * Common web servers:
 * - Apache (Beginner friendly)
 * - Nginx
 *
 * Apache:
 * - Simple to configure
 * - Static websites ke liye best
 * - Beginners ke liye easy
 *
 * ------------------------------------------------------------
 * ! Update the System Packages
 * ------------------------------------------------------------
 *
 * Command:
 * sudo yum update -y
 *
 * Explanation:
 * sudo → super user (admin privileges)
 * yum  → Amazon Linux ka package manager
 * -y   → sab prompts ke liye automatic "yes"
 *
 * Ye system ko latest packages ke saath update karta hai.
 *
 * ------------------------------------------------------------
 * ! Install Apache Web Server
 * ------------------------------------------------------------
 *
 * Apache ka package name hota hai: httpd
 *
 * Command:
 * sudo yum install httpd -y
 *
 * Ye Apache web server ko EC2 instance par install karta hai.
 *
 * ------------------------------------------------------------
 * ! Start Apache Service
 * ------------------------------------------------------------
 *
 * Command:
 * sudo systemctl start httpd
 *
 * systemctl:
 * Linux ka service manager hota hai
 * jo services ko start / stop / manage karta hai.
 *
 * ------------------------------------------------------------
 * ! Enable Apache on Boot
 * ------------------------------------------------------------
 *
 * Command:
 * sudo systemctl enable httpd
 *
 * Isse Apache automatically instance restart hone par start ho jayega.
 *
 * ------------------------------------------------------------
 * ! Verify Apache Status
 * ------------------------------------------------------------
 *
 * Command:
 * sudo systemctl status httpd
 *
 * Agar "active (running)" dikhe,
 * toh Apache successfully install ho chuka hai.
 *
 * ------------------------------------------------------------
 * ! Create HTML File (Website)
 * ------------------------------------------------------------
 *
 * Apache ka default web directory hota hai:
 *
 * /var/www/html
 *
 * Yahin par HTML files rakhni hoti hain.
 *
 * HTML file create karne ke liye:
 *
 * sudo nano /var/www/html/index.html
 *
 * nano:
 * Ek simple terminal text editor hai.
 *
 * Example content:
 *
 * <h2>Ayush Pandey from India</h2>
 *
 * Save karne ke liye:
 * Ctrl + O  → Save
 * Enter     → Confirm
 * Ctrl + X  → Exit
 *
 * ------------------------------------------------------------
 * ! Access Website in Browser
 * ------------------------------------------------------------
 *
 * Browser me open karo:
 *
 * http://<EC2-Public-IP>
 *
 * Example:
 * http://13.49.68.244
 *
 * Agar Security Group me Port 80 open hai,
 * toh website Chrome me open ho jayegi.
 *
 * ------------------------------------------------------------
 * ! Important Check (If Site Not Opening)
 * ------------------------------------------------------------
 *
 * - EC2 running hona chahiye
 * - Apache running hona chahiye
 * - Port 80 inbound rule me allow hona chahiye (HTTP)
 *
 * ------------------------------------------------------------
 * ! Interview Line
 * ------------------------------------------------------------
 *
 * Apache is an open-source web server used to host static
 * websites on EC2 instances. We install it using yum,
 * start the service using systemctl, and place HTML files
 * inside /var/www/html.
 */