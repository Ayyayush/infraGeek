/**
 * ! Hosting Static Website on EC2 using Apache + SCP
 *
 * Ab hum Apache web server ka use karke
 * EC2 instance par static website host karenge.
 *
 * ------------------------------------------------------------
 * ! Step 1: Start Apache on EC2
 * ------------------------------------------------------------
 *
 * EC2 terminal (SSH ke through login hone ke baad):
 *
 * sudo systemctl start httpd
 * sudo systemctl enable httpd
 *
 * Explanation:
 * - start  → Apache service start karta hai
 * - enable → Instance restart hone par Apache auto-start ho jata hai
 *
 * ------------------------------------------------------------
 * ! Step 2: Open a Separate Local Terminal
 * ------------------------------------------------------------
 *
 * Ab ek naya terminal / PowerShell open karo
 * (VS Code, CMD, ya PowerShell – kahin se bhi).
 *
 * Yahan se hum local machine se file
 * EC2 instance par bhejenge.
 *
 * ------------------------------------------------------------
 * ! SCP Command (File Transfer)
 * ------------------------------------------------------------
 *
 * Command:
 *
 * scp -i "C:\Users\Aayu0\Downloads\Devops\my-web-server-key.pem" \
 * "C:\Users\Aayu0\Documents\MCA\Coding\Additional\Javascript\MySirG\Projects\ColorCatcher\index.html" \
 * ec2-user@13.49.68.244:/tmp
 *
 * ------------------------------------------------------------
 * ! What is SCP?
 * ------------------------------------------------------------
 *
 * SCP = Secure Copy Protocol
 *
 * Ye SSH ka hi part hota hai
 * aur secure tarike se files transfer karta hai
 * local machine se remote server par.
 *
 * ------------------------------------------------------------
 * ! Command Breakdown (IMPORTANT)
 * ------------------------------------------------------------
 *
 * scp                     → secure copy command
 * -i                      → identity file (PEM key)
 * my-web-server-key.pem   → EC2 key pair
 * index.html              → local file (website)
 * ec2-user                → Amazon Linux default user
 * 13.49.68.244            → EC2 public IP
 * /tmp                    → EC2 ka temporary directory
 *
 * Is command ke baad:
 * - index.html file EC2 ke /tmp folder me aa jati hai
 *
 * ------------------------------------------------------------
 * ! Step 3: Switch Back to EC2 Terminal
 * ------------------------------------------------------------
 *
 * Ab SSH wale terminal me wapas aao
 * (jahan [ec2-user@ip-...] prompt dikhta hai).
 *
 * ------------------------------------------------------------
 * ! Step 4: Replace Default Apache Page
 * ------------------------------------------------------------
 *
 * Default Apache file delete karo:
 *
 * sudo rm -f /var/www/html/index.html
 *
 * Explanation:
 * - rm  → remove
 * - -f  → force delete (no confirmation)
 *
 * ------------------------------------------------------------
 * ! Step 5: Copy Website to Apache Directory
 * ------------------------------------------------------------
 *
 * Correct command:
 *
 * sudo cp /tmp/index.html /var/www/html/index.html
 *
 * Explanation:
 * - /tmp/index.html        → source file
 * - /var/www/html/        → Apache document root
 *
 * NOTE:
 * - File hai, isliye -r use nahi karte
 *
 * ------------------------------------------------------------
 * ! Step 6: Restart Apache (Safe Practice)
 * ------------------------------------------------------------
 *
 * sudo systemctl restart httpd
 *
 * ------------------------------------------------------------
 * ! Step 7: Access Website in Browser
 * ------------------------------------------------------------
 *
 * Browser me open karo:
 *
 * http://<EC2-PUBLIC-IP>
 *
 * Example:
 * http://13.49.68.244
 *
 * Agar Security Group me Port 80 open hai,
 * toh website successfully load ho jayegi.
 *
 * ------------------------------------------------------------
 * ! Interview Line
 * ------------------------------------------------------------
 *
 * We use SCP to securely transfer static website files
 * from a local system to an EC2 instance and host them
 * using Apache by placing files inside /var/www/html.
 */