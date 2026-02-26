/**
 * =========================================================
 * ! NGINX WEB SERVER
 * =========================================================
 *
 * ! LOGIN TO EC2 REMOTELY
 * ---------------------------------------------------------
 * ssh -i "my-web-server-key.pem" ec2-user@13.49.68.244
 *
 * - .pem file → private key
 * - ec2-user  → default Amazon Linux user
 * - IP        → EC2 public IP
 *
 *
 * ! WHAT IS NGINX?
 * ---------------------------------------------------------
 * Nginx ek high-performance, lightweight web server hai
 * jo websites aur web applications serve karta hai.
 *
 * Simple:
 * Nginx = Fast cloud web server
 *
 *
 * ! WHY WE USE NGINX
 * ---------------------------------------------------------
 * - High performance
 * - Lightweight
 * - Fast request handling
 * - Large traffic support
 *
 *
 * ! FEATURES OF NGINX
 * ---------------------------------------------------------
 * - Reverse proxy
 * - Load balancing
 * - Static file serving
 * - SSL termination
 * - Traffic management
 *
 *
 * ! WHAT IS REVERSE PROXY?
 * ---------------------------------------------------------
 * Reverse proxy ek middle server hota hai:
 *
 * Client → Nginx → Backend
 *
 * Client directly backend ko hit nahi karta.
 * Nginx request forward karta hai.
 *
 *
 * ! NGINX AS TRAFFIC MANAGER
 * ---------------------------------------------------------
 * - Backend ko hide karta hai
 * - Security improve karta hai
 * - Multiple backend servers me traffic distribute karta hai
 *
 *
 * ! APACHE vs NGINX
 * ---------------------------------------------------------
 * Apache:
 * - Process-based architecture
 * - Heavy resource usage
 *
 * Nginx:
 * - Event-driven architecture
 * - Lightweight & better concurrency handling
 *
 *
 * ! INSTALL NGINX (AMAZON LINUX)
 * ---------------------------------------------------------
 *
 * Apache stop karo (agar running ho):
 * sudo systemctl stop httpd
 *
 * Install:
 * sudo dnf install nginx -y
 *
 * Start:
 * sudo systemctl start nginx
 *
 * Enable on boot:
 * sudo systemctl enable nginx
 *
 * Check status:
 * sudo systemctl status nginx
 * sudo systemctl status nginx --no-pager
 *
 *
 * ! VERIFY INSTALLATION
 * ---------------------------------------------------------
 * Browser me:
 * http://<EC2-PUBLIC-IP>
 *
 * Agar welcome page dikhe → Success ✅
 *
 *
 * ! INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 * Nginx is a high-performance, event-driven web server
 * used for hosting websites, reverse proxying,
 * and load balancing in production systems.
 *
 */