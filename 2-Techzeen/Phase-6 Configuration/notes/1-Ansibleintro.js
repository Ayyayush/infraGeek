/**
 * ! Ansible
 * 
 * ! What is Ansible
 * Ansible ek open-source automation tool hai jo DevOps aur system administrators
 * use karte hain servers ko manage karne aur repetitive tasks automate karne ke liye.
 * 
 * Iska use karke hum ek hi machine (control node) se multiple remote machines
 * (managed nodes) ko manage kar sakte hain.
 * 
 * Ye mainly use hota hai:
 * - software install karne ke liye
 * - server configuration manage karne ke liye
 * - application deployment ke liye
 * - infrastructure automation ke liye
 * 
 * Example:
 * Ek command se 50 servers pe nginx install kar sakte ho.
 * 
 * 
 * ! Why do we use Ansible
 * - repetitive tasks automate karne ke liye
 * - manual configuration errors kam karne ke liye
 * - large scale infrastructure manage karne ke liye
 * - consistent server setup maintain karne ke liye
 * 
 * Example:
 * Agar 100 servers pe same configuration karna hai,
 * toh manually karna bahut time lega aur error bhi ho sakta hai.
 * Ansible se ek hi playbook run karke sab ho jata hai.
 * 
 * 
 * ! Benefits of Ansible
 * - Simple aur easy to learn
 * - YAML language use hoti hai (human readable)
 * - Agentless architecture (client machines pe kuch install nahi karna padta)
 * - Time save karta hai
 * - Productivity increase karta hai
 * - Free aur open source tool hai
 * - Easily scalable for large infrastructure
 * 
 * 
 * ! Important Ansible Terminologies
 * 
 * ! Inventory
 * Inventory ek list hoti hai servers ki jinhe Ansible control karta hai.
 * 
 * Example:
 * inventory file me servers ke IP address likhe hote hain.
 * 
 * Example inventory:
 * 
 * [webservers]
 * 192.168.1.10
 * 192.168.1.11
 * 
 * [dbservers]
 * 192.168.1.20
 * 
 * 
 * ! Playbook
 * Playbook ek YAML file hoti hai jisme automation instructions likhe hote hain.
 * 
 * Playbook batata hai:
 * - kaunse servers pe run karna hai
 * - kya tasks perform karne hain
 * 
 * Example:
 * nginx install karna
 * user create karna
 * service start karna
 * 
 * 
 * ! Task
 * Task ek single action hota hai jo Ansible perform karta hai.
 * 
 * Example tasks:
 * - nginx install karna
 * - service start karna
 * - file copy karna
 * 
 * 
 * ! Module
 * Modules pre-written scripts hote hain jo specific kaam karte hain.
 * 
 * Example modules:
 * - apt module → software install
 * - copy module → file transfer
 * - service module → service start/stop
 * - user module → user create
 * 
 * 
 * ! Role
 * Role ek structure hota hai jo large playbooks ko organize karne ke liye use hota hai.
 * 
 * Agar project bada ho jaye toh:
 * - tasks
 * - variables
 * - handlers
 * - templates
 * 
 * sabko alag-alag folders me organize kar dete hain.
 * 
 * Isse automation code clean aur reusable ho jata hai.
 * 
 */