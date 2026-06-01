/**
 * ! WHAT IS ROOT USER IN LINUX
 *
 * Linux mein root user ko superuser kaha jata hai.
 *
 * Root user ke paas system ki almost sabhi permissions hoti hain.
 *
 * - Kisi bhi file ko access kar sakta hai
 * - Kisi bhi file ko modify/delete kar sakta hai
 * - Kisi bhi user ka data access kar sakta hai
 * - System level commands execute kar sakta hai
 *
 *
 * ! EXAMPLE
 *
 * cd /
 *
 * mkdir meals
 *
 * Agar normal user root directory (/) ke andar folder create karne ki
 * koshish kare toh permission denied aa sakta hai.
 *
 * Kyunki root directory par write permission sabke paas nahi hoti.
 *
 *
 * ! WHY DO WE NEED ROOT PRIVILEGES?
 *
 * Sensitive system tasks ke liye root privileges chahiye hote hain.
 *
 * Examples:
 *
 * - Install software
 * - Update packages
 * - Create system directories
 * - Change system configuration
 * - Manage users and groups
 *
 *
 * ! ROOT ACCOUNT IN UBUNTU
 *
 * Ubuntu by default root account ko locked rakhta hai.
 *
 * Isliye direct root login normally allowed nahi hota.
 *
 *
 * ! WHAT IS SUDO?
 *
 * sudo = Super User DO
 *
 * Ye normal user ko temporary root privileges deta hai.
 *
 *
 * Example:
 *
 * sudo mkdir meals
 *
 * - Root privileges ke saath command execute hogi.
 *
 *
 * First time password maangega:
 *
 * [sudo] password for ayush:
 *
 *
 * ! WHO BECOMES THE OWNER?
 *
 * Example:
 *
 * sudo mkdir meals
 *
 * ls -l
 *
 * Output:
 *
 * drwxr-xr-x 2 root root 4096 Jun 10 meals
 *
 * - Owner root hoga
 * - Group bhi root ho sakta hai
 *
 *
 * ! SUDO PASSWORD CACHING
 *
 * Ek baar sudo password dene ke baad
 * kuch time tak (commonly around 15 minutes)
 * sudo dobara password nahi maangta.
 *
 * Isse repeatedly password enter nahi karna padta.
 *
 *
 * ! CHECK SUDO PERMISSIONS
 *
 * sudo -l
 *
 * - User kaun kaun se sudo commands run kar sakta hai
 *   wo dikhata hai.
 *
 *
 * Example:
 *
 * sudo -l
 *
 * Output:
 *
 * User ayush may run the following commands on ubu-pc:
 * (ALL : ALL) ALL
 *
 *
 * ! USER WITHOUT SUDO ACCESS
 *
 * Example:
 *
 * su - rohit
 *
 * sudo -l
 *
 * Output:
 *
 * Sorry, user rohit may not run sudo on ubu-pc.
 *
 *
 * Matlab:
 *
 * - rohit sudoers group ka member nahi hai.
 * - Iske paas admin privileges nahi hain.
 *
 *
 * ! PACKAGE MANAGEMENT EXAMPLE
 *
 * apt update
 *
 * Ye command package information update karti hai.
 *
 * Usually ise sudo ke saath run karte hain:
 *
 * sudo apt update
 *
 *
 * ! DIFFERENCE BETWEEN ROOT AND SUDO
 *
 * Root:
 * - Permanent superuser account
 * - Full privileges
 *
 * Sudo:
 * - Temporary root privileges
 * - Specific command ke liye use hota hai
 *
 *
 * ! IMPORTANT COMMANDS
 *
 * sudo command
 * - Command ko root privileges ke saath run karta hai.
 *
 * sudo -l
 * - Available sudo permissions dikhata hai.
 *
 * su -
 * - Root account mein switch karne ki koshish karta hai.
 *
 * whoami
 * - Current logged-in user batata hai.
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What is the root user in Linux?
 * Answer:
 * - Root is the superuser with maximum privileges.
 *
 * 2) Why is the root user called a superuser?
 * Answer:
 * - Because it can access and modify almost anything in the system.
 *
 * 3) What is sudo in Linux?
 * Answer:
 * - sudo (Super User DO) allows a user to execute commands with root privileges.
 *
 * 4) Why do we use sudo?
 * Answer:
 * - To perform administrative tasks without logging in as root.
 *
 * 5) What does the following command do?
 *    sudo mkdir meals
 *
 * Answer:
 * - Creates the directory using root privileges.
 *
 * 6) What is the full form of sudo?
 * Answer:
 * - Super User DO.
 *
 * 7) Why is the root account locked by default in Ubuntu?
 * Answer:
 * - For security reasons.
 *
 * 8) What does sudo -l do?
 * Answer:
 * - Shows which commands the user can run using sudo.
 *
 * 9) What happens after entering the sudo password once?
 * Answer:
 * - Password is usually remembered for a short period
 *   (commonly around 15 minutes).
 *
 * 10) What does the error
 *     "user may not run sudo"
 *     mean?
 *
 * Answer:
 * - The user does not have sudo privileges.
 *
 * 11) What is the difference between root and sudo?
 * Answer:
 * - Root is the actual superuser account.
 * - Sudo provides temporary root privileges.
 *
 * 12) Why is sudo considered safer than logging in directly as root?
 * Answer:
 * - It limits administrative access to specific commands and provides auditing.
 */