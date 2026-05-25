/**
 * ! Inventory File in Ansible
 * ansible ek Linux based tool h
 * toh hum directly Windows pe easily use nhi kar sakte
 * generally WSL / VM / Linux server use karte h
 * 
 * ! What is Inventory File
 * inventory file un servers ki list hoti h
 * jinpe hum automation task perform karna chahte h
 * 
 * Example:
 * localhost ansible_connection=local
 * 
 * ! Empty file create karna
 * touch hosts
 * 
 * touch command se empty file create ho jati h
 * 
 * ! File create hui ya nhi kaise check kare
 * ls
 * 
 * ls command current directory ki saari files dikha deta h
 * 
 * ! File open karna
 * nano hosts
 * 
 * nano ek text editor h Linux me
 * isse file open aur edit kar sakte h
 * 
 * ! Localhost
 * hum abhi localhost pe kaam kar rhe h
 * matlab same machine pe testing kar rhe h
 * 
 * localhost ansible_connection=local
 * 
 * iska matlab:
 * ansible SSH use nhi karega
 * directly local machine pe execute karega
 * 
 * ! File save related point
 * agar file name ke baad symbol aa raha h
 * toh matlab file abhi save nhi hui
 * 
 * nano me:
 * Ctrl + O  -> save
 * Enter     -> confirm
 * Ctrl + X  -> exit
 * 
 * ! Ansible command run karna
 * ansible all
 * 
 * all ka matlab:
 * inventory file ke sab hosts pe command run hogi
 * 
 * ! Custom inventory file use karna
 * ansible all -i hosts
 * 
 * -i ka matlab:
 * custom inventory file specify karna
 * 
 * yaha hosts inventory file ka naam h
 * 
 * ! Ping module
 * ansible all -i hosts -m ping
 * 
 * -m ka matlab module
 * ping module check karta h:
 * ansible successfully target machine se connect ho pa raha h ya nhi
 * 
 * ! Important
 * ye normal network ICMP ping nhi hota
 * ye Python based Ansible ping module hota h
 * 
 * successful response:
 * pong
 * 
 * ! Future Use
 * aane wale lectures me:
 * remote servers create karenge
 * unke upar ansible automation perform karenge
 * 
 * abhi bas local testing kar rhe h
 * 
 * ---------------------------------------------------
 * ! Interview Questions + Answers
 * ---------------------------------------------------
 * 
 * ! 1. What is Inventory File in Ansible?
 * Ans:
 * Inventory file ek configuration file hoti h
 * jisme target servers / hosts ki list define hoti h
 * jinpe ansible automation tasks perform karta h
 * 
 * ! 2. Why Inventory File is needed?
 * Ans:
 * Inventory file ansible ko batati h
 * kis-kis machine pe command execute karni h
 * 
 * ! 3. Difference between Static and Dynamic Inventory?
 * Ans:
 * Static inventory me manually hosts add karte h
 * Dynamic inventory automatically cloud providers se hosts fetch karta h
 * 
 * ! 4. What does ansible_connection=local mean?
 * Ans:
 * iska matlab ansible SSH use nhi karega
 * directly local machine pe command execute karega
 * 
 * ! 5. What is localhost in Ansible?
 * Ans:
 * localhost current machine ko represent karta h
 * jisme ansible installed hota h
 * 
 * ! 6. What does -i flag do in Ansible?
 * Ans:
 * -i flag custom inventory file specify karne ke liye use hota h
 * 
 * Example:
 * ansible all -i hosts
 * 
 * ! 7. What is ping module in Ansible?
 * Ans:
 * ping module check karta h
 * ansible target host se connect ho pa raha h ya nhi
 * 
 * ! 8. Is Ansible ping same as normal network ping?
 * Ans:
 * nhi
 * normal ping ICMP protocol use karta h
 * jabki ansible ping Python based module hota h
 * 
 * ! 9. What does ansible all command do?
 * Ans:
 * ansible all command inventory file ke saare hosts pe
 * operation execute karta h
 * 
 * ! 10. Why does Ansible require Python on remote machines?
 * Ans:
 * ansible apne modules ko remote machine pe execute karne ke liye
 * Python ka use karta h
 * 
 * ! 11. Which protocol does Ansible mainly use?
 * Ans:
 * ansible mainly SSH protocol use karta h
 * remote machines se connect hone ke liye
 * 
 * ! 12. What is an Agentless tool?
 * Ans:
 * agentless tool ka matlab:
 * remote machine pe alag se koi agent install nhi karna padta
 * 
 */