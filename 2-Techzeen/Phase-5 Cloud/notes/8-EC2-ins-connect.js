/**
 * ! Connecting EC2 Instance using SSH Protocol
 *
 * Ab hum EC2 instance ko SSH protocol ke through connect karenge.
 *
 * ------------------------------------------------------------
 * ! What is SSH?
 * ------------------------------------------------------------
 *
 * SSH (Secure Shell) ek protocol hai
 * jo unsecured network par secure communication ke liye use hota hai.
 *
 * Use cases:
 * - Remote systems manage karna
 * - Remote commands execute karna
 * - Secure login
 *
 * Always SSH use karna chahiye kyunki:
 * - Data encrypted hota hai
 * - Secure authentication hoti hai
 *
 * ------------------------------------------------------------
 * ! Key Pair Usage
 * ------------------------------------------------------------
 *
 * Jab humne EC2 instance create kiya tha,
 * tab ek key pair file generate hui thi:
 *
 * my-web-server-key.pem
 *
 * Isi key pair ka use karke hum SSH login karte hain.
 *
 * Ye command terminal / PowerShell me run karte hain.
 *
 * ------------------------------------------------------------
 * ! Incorrect SSH Command
 * ------------------------------------------------------------
 *
 * ssh -i "C:\Users\Aayu0\Downloads\Devops\my-web-server-key.pem" ec2-user
 *
 * Ye command incomplete hai kyunki:
 * - Isme EC2 ka public IP mention nahi hai
 *
 * ------------------------------------------------------------
 * ! Correct SSH Command
 * ------------------------------------------------------------
 *
 * ssh -i "C:\Users\Aayu0\Downloads\Devops\my-web-server-key.pem" ec2-user@13.49.68.244
 *
 * Explanation:
 * - ssh        → protocol
 * - -i         → identity file (key pair)
 * - ec2-user   → username (Amazon Linux ke liye default)
 * - @IP        → EC2 ka public IP
 *
 * NOTE:
 * Humne Amazon Linux choose kiya tha,
 * isliye username ec2-user hai.
 *
 * ------------------------------------------------------------
 * ! First Time SSH Warning
 * ------------------------------------------------------------
 *
 * "The authenticity of host can't be established"
 *
 * Ye ek normal SSH security warning hai.
 * SSH server fingerprint verify karta hai.
 *
 * Jab hum "yes" type karte hain:
 * - Server trusted ho jata hai
 * - Fingerprint known_hosts file me save ho jata hai
 *
 * Location:
 * C:\Users\Aayu0\.ssh\known_hosts
 *
 * ------------------------------------------------------------
 * ! Successful Login
 * ------------------------------------------------------------
 *
 * Amazon Linux 2023 ka banner show hona
 * matlab SSH login successful ho gaya.
 *
 * Prompt:
 * [ec2-user@ip-172-31-43-106 ~]$
 *
 * Iska matlab:
 * - Ab hum EC2 machine ke andar hain
 * - Ye ek remote cloud computer hai
 *
 * ------------------------------------------------------------
 * ! Remote Access Confirmation
 * ------------------------------------------------------------
 *
 * Ab mujhe koi bhi kaam karna ho:
 * - Software install karna
 * - Server configure karna
 * - Commands run karna
 *
 * Sab kuch main isi terminal se kar sakta hoon.
 *
 * Isse hume full remote access mil gaya hai.
 *
 * ------------------------------------------------------------
 * ! Exit from EC2 Instance
 * ------------------------------------------------------------
 *
 * EC2 se bahar aane ke liye:
 * - ctrl + d press karo
 *        OR
 * - exit command run karo
 *
 * ------------------------------------------------------------
 * ! Interview Line
 * ------------------------------------------------------------
 *
 * SSH provides secure remote access to EC2 instances using key-based authentication.
 */