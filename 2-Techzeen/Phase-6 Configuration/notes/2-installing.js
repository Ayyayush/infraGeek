/**
 * ! Installing Ansible on Windows
 * 
 * ! Why Ansible cannot run directly on Windows
 * Ansible ka native support Windows pe nahi hota kyunki
 * ye Linux based tool hai aur mainly Linux environment
 * me hi properly run karta hai.
 * 
 * Isliye Windows users ko pehle Linux environment
 * create karna padta hai.
 * 
 * Ye kaam hum WSL (Windows Subsystem for Linux) se karte hain.
 * 
 * 
 * ! What is WSL
 * WSL ka full form hai Windows Subsystem for Linux.
 * 
 * Ye Windows ka ek feature hai jo allow karta hai ki
 * hum Windows ke andar hi Linux environment run kar sakein.
 * 
 * Matlab:
 * Windows chhodne ki zarurat nahi hoti,
 * par Linux commands bhi run kar sakte hain.
 * 
 * Example:
 * 
 * Windows machine
 *        ↓
 * WSL install
 *        ↓
 * Linux terminal mil jata hai
 *        ↓
 * usme Ansible install kar sakte hain
 * 
 * 
 * ! Check WSL Version
 * Sabse pehle check karo ki WSL installed hai ya nahi.
 * 
 * Command:
 * 
 * wsl --version
 * 
 * Agar install nahi hai toh WSL install karna padega.
 * 
 * 
 * ! Install Ubuntu from Microsoft Store
 * Ab Microsoft Store open karo.
 * 
 * Search karo:
 * Ubuntu
 * 
 * Ubuntu ek Linux distribution hai.
 * 
 * 
 * ! What is Ubuntu
 * Ubuntu ek popular Linux distribution hai jo Linux kernel
 * ke upar build kiya gaya hai.
 * 
 * Linux ka source code open source hota hai,
 * aur usi core ko use karke alag-alag Linux environments
 * banaye jate hain jaise:
 * 
 * Ubuntu
 * Kali Linux
 * Debian
 * Fedora
 * 
 * Ubuntu beginner friendly hota hai isliye
 * DevOps aur cloud learning me bahut use hota hai.
 * 
 * 
 * ! Update System Packages
 * Ubuntu install hone ke baad terminal open karo.
 * 
 * System packages update karne ke liye command run karo:
 * 
 * sudo apt update && sudo apt upgrade -y
 * 
 * Explanation:
 * sudo → admin privileges
 * apt update → package list update karta hai
 * apt upgrade → installed packages update karta hai
 * -y → automatic yes
 * 
 * 
 * ! Install Ansible
 * Jab system update complete ho jaye tab Ansible install karo.
 * 
 * Command:
 * 
 * sudo apt install ansible -y
 * 
 * Ye command Ansible ko Ubuntu environment me install kar degi.
 * 
 * 
 * ! Verify Ansible Installation
 * Installation verify karne ke liye:
 * 
 * ansible --version
 * 
 * Agar version show ho raha hai
 * toh Ansible successfully install ho chuka hai.
 * 
 */