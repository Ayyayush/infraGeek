/**
 * =========================================================
 * ! ANSIBLE
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT IS ANSIBLE?
 * ---------------------------------------------------------
 * Ansible ek open-source automation tool hai
 * jo DevOps engineers aur system administrators use karte hain
 * servers manage karne aur repetitive tasks automate karne ke liye.
 *
 * It helps manage and control computer systems
 * from one central system.
 *
 * Iska use karke:
 *
 * → Ek hi machine (Control Node) se
 * → Multiple remote machines (Managed Nodes)
 *   ko manage kar sakte hain
 *
 *
 * Ye mainly use hota hai:
 *
 * → Software install karne ke liye
 * → Server configuration manage karne ke liye
 * → Application deployment ke liye
 * → Infrastructure automation ke liye
 *
 *
 * Example:
 *
 * → Ek command se 50 servers pe nginx install kar sakte ho
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE ANSIBLE?
 * ---------------------------------------------------------
 * → Repetitive tasks automate karne ke liye
 * → Manual configuration errors kam karne ke liye
 * → Large scale infrastructure manage karne ke liye
 * → Consistent server setup maintain karne ke liye
 *
 *
 * Example:
 *
 * → Agar 100 servers pe same configuration karna ho
 * → Toh manually karna bahut time lega
 * → Aur human errors bhi ho sakte hain
 *
 * Ansible me:
 *
 * → Ek hi playbook run karke sab ho jata hai
 *
 *
 * ---------------------------------------------------------
 * ! BENEFITS OF ANSIBLE
 * ---------------------------------------------------------
 * → Simple aur easy to learn
 * → YAML language use hoti hai (human readable)
 * → Agentless architecture
 * → Client machines pe kuch install nahi karna padta
 * → Time save karta hai
 * → Productivity increase karta hai
 * → Free aur open-source tool hai
 * → Large infrastructure pe easily scalable hai
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT ANSIBLE TERMINOLOGIES
 * ---------------------------------------------------------
 *
 * ! Inventory
 * Inventory ek list hoti hai servers ki
 * jinhe Ansible control karta hai.
 *
 * Inventory file me:
 *
 * → Servers ke IP addresses ya hostnames likhe hote hain
 *
 *
 * Example Inventory:
 *
 * [webservers]
 * 192.168.1.10
 * 192.168.1.11
 *
 * [dbservers]
 * 192.168.1.20
 *
 *
 * ---------------------------------------------------------
 * ! Playbook
 * ---------------------------------------------------------
 * Playbook ek YAML file hoti hai
 * jisme automation instructions likhe hote hain.
 *
 * Playbook batata hai:
 *
 * → Kaunse servers pe run karna hai
 * → Kaunse tasks perform karne hain
 *
 *
 * Example:
 *
 * → nginx install karna
 * → User create karna
 * → Service start karna
 *
 *
 * ---------------------------------------------------------
 * ! Task
 * ---------------------------------------------------------
 * Task ek single action hota hai
 * jo Ansible perform karta hai.
 *
 *
 * Example Tasks:
 *
 * → nginx install karna
 * → Service start karna
 * → File copy karna
 *
 *
 * ---------------------------------------------------------
 * ! Module
 * ---------------------------------------------------------
 * Modules pre-written scripts hote hain
 * jo specific kaam perform karte hain.
 *
 *
 * Example Modules:
 *
 * → apt module
 *      Software install karne ke liye
 *
 * → copy module
 *      File transfer karne ke liye
 *
 * → service module
 *      Service start/stop karne ke liye
 *
 * → user module
 *      User create karne ke liye
 *
 *
 * ---------------------------------------------------------
 * ! Role
 * ---------------------------------------------------------
 * Role ek structure hota hai
 * jo large playbooks ko organize karne ke liye use hota hai.
 *
 *
 * Agar project bada ho jaye:
 *
 * → Tasks
 * → Variables
 * → Handlers
 * → Templates
 *
 * In sabko:
 *
 * → Alag-alag folders me organize kar dete hain
 *
 *
 * Isse:
 *
 * → Automation code clean hota hai
 * → Reusable hota hai
 * → Easy maintenance hoti hai
 *
 *
 * ---------------------------------------------------------
 * ! CONTROL NODE VS MANAGED NODE
 * ---------------------------------------------------------
 * ! Control Node
 *
 * → Wo machine jahan Ansible installed hota hai
 * → Yahi machine baaki servers ko control karti hai
 *
 *
 * ! Managed Node
 *
 * → Remote machines/servers
 * → Jinhe Ansible manage karta hai
 *
 *
 * ---------------------------------------------------------
 * ! HOW ANSIBLE WORKS?
 * ---------------------------------------------------------
 * Control Node
 *          ↓
 * Inventory File
 *          ↓
 * Playbook Run
 *          ↓
 * SSH Connection
 *          ↓
 * Tasks Execute on Managed Nodes
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT FEATURES
 * ---------------------------------------------------------
 * → Agentless
 * → SSH based communication
 * → Push-based architecture
 * → Human-readable YAML syntax
 * → Idempotent nature
 *
 *
 * ! Idempotent
 * → Same playbook multiple times run karo
 * → Final result same hi rahega
 * → Duplicate unnecessary changes nahi hongi
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is Ansible?
 * Ans:
 * Ansible is an open-source automation tool
 * used for configuration management,
 * deployment, and infrastructure automation.
 *
 *
 * Q2) Why is Ansible called agentless?
 * Ans:
 * Because managed nodes pe
 * separate agent install karna nahi padta.
 *
 *
 * Q3) What language is used in Ansible Playbooks?
 * Ans:
 * YAML language.
 *
 *
 * Q4) What is an Inventory in Ansible?
 * Ans:
 * Inventory is a file containing
 * the list of managed servers/nodes.
 *
 *
 * Q5) What is a Playbook?
 * Ans:
 * A Playbook is a YAML file
 * containing automation instructions/tasks.
 *
 *
 * Q6) What is a Module in Ansible?
 * Ans:
 * Modules are pre-written scripts
 * that perform specific tasks.
 *
 *
 * Q7) What is a Role in Ansible?
 * Ans:
 * Roles are used to organize
 * large playbooks into reusable structures.
 *
 *
 * Q8) What protocol does Ansible use?
 * Ans:
 * SSH protocol.
 *
 *
 * Q9) What is idempotency in Ansible?
 * Ans:
 * Running the same playbook multiple times
 * gives the same final result
 * without unnecessary repeated changes.
 *
 *
 * Q10) Difference between Control Node and Managed Node?
 * Ans:
 *
 * Control Node:
 * → Machine where Ansible is installed
 *
 * Managed Node:
 * → Remote machine controlled by Ansible
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Ansible = Automation Tool
 * → Used for configuration & deployment
 * → Agentless architecture
 * → Uses YAML playbooks
 * → Uses SSH for communication
 * → Best for DevOps automation
 *
 */