/**
 * ! ORGANIZING PERMISSIONS IN LINUX
 *
 * Linux mein permissions ko organize karne ke liye groups ka use kiya jata hai.
 * Ek group mein multiple users ho sakte hain.
 * Isse permission management easy ho jata hai.
 *
 *
 * ! groups COMMAND
 *
 * groups
 *
 * - Current user kin kin groups ka member hai ye dikhata hai.
 *
 * Example:
 *
 * groups
 *
 * Output:
 * ayush sudo docker
 *
 * Matlab:
 * - User ayush
 * - sudo group ka member hai
 * - docker group ka member hai
 *
 *
 * ! CHECK GROUPS OF ANOTHER USER
 *
 * groups ayush
 *
 * - User ayush kin groups ka member hai ye dikhayega.
 *
 *
 * ! SWITCH USER
 *
 * su - ayush
 *
 * - User ayush ke account mein login karega.
 *
 *
 * Example:
 *
 * su - ayush
 * groups
 *
 * - Ab ayush ke groups show honge.
 *
 *
 * ! EXIT FROM CURRENT USER
 *
 * exit
 *
 * - Previous user/session mein wapas aa jaoge.
 *
 *
 * ! CREATE A NEW GROUP
 *
 * addgroup backendTeam
 *
 * Agar normal user execute kare:
 *
 * addgroup backendTeam
 *
 * Error:
 * Only root may add a user or group to the system.
 *
 *
 * Isliye sudo use karenge:
 *
 * sudo addgroup backendTeam
 *
 * - backendTeam naam ka naya group create ho jayega.
 *
 *
 * ! CREATE A NEW USER
 *
 * sudo adduser ayush
 *
 * - ayush naam ka naya user create karega.
 *
 *
 * ! ADD USER TO A GROUP
 *
 * sudo adduser ayush backendTeam
 *
 * - User ayush ko backendTeam group mein add karega.
 *
 *
 * ! VERIFY GROUP MEMBERSHIP
 *
 * groups ayush
 *
 * Output:
 * ayush backendTeam
 *
 * - Confirm ho jayega ki ayush group ka member hai.
 *
 *
 * ! CREATE A PROJECT DIRECTORY
 *
 * sudo mkdir backend_project_1
 *
 * - backend_project_1 directory create hogi.
 *
 *
 * ls
 *
 * - Current directory ka content show karega.
 *
 *
 * ls -l
 *
 * - Detailed listing show karega:
 *   permissions
 *   owner
 *   group
 *   size
 *   timestamp
 *   filename
 *
 *
 * Example:
 *
 * drwxr-xr-x 2 root root 4096 Jun 10 backend_project_1
 *
 *
 * ! OWNER OF FILES AND DIRECTORIES
 *
 * ls -l se owner aur group dono dikhte hain.
 *
 * Example:
 *
 * drwxr-xr-x 2 root backendTeam 4096 Jun 10 backend_project_1
 *
 *          |    |
 *          |    +---- Group
 *          |
 *          +--------- Owner
 *
 *
 * ! HOW TO CHANGE OWNER?
 *
 * File ya directory ka owner change karne ke liye
 * chown command use hoti hai.
 *
 * Example:
 *
 * sudo chown ayush backend_project_1
 *
 * Is command ko next lecture mein detail mein padhenge.
 *
 *
 * ! SUMMARY
 *
 * groups
 * - Current user ke groups show karta hai.
 *
 * groups username
 * - Specific user ke groups show karta hai.
 *
 * su - username
 * - User switch karta hai.
 *
 * exit
 * - Previous session mein wapas laata hai.
 *
 * sudo addgroup groupName
 * - New group create karta hai.
 *
 * sudo adduser userName
 * - New user create karta hai.
 *
 * sudo adduser userName groupName
 * - User ko group mein add karta hai.
 *
 * ls -l
 * - Permissions, owner aur group show karta hai.
 *
 * chown
 * - Owner change karne ke liye use hota hai.
 */