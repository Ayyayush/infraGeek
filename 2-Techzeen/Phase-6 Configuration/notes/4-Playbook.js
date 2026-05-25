/**
 * =========================================================
 * ! PLAYBOOK IN ANSIBLE
 * =========================================================
 * 
 * ! BEFORE THIS
 * Ab tak humne:
 * → Inventory file padha
 * → hosts file edit ki thi
 * 
 * Example:
 * nano hosts
 * 
 * ! WHAT IS A PLAYBOOK?
 * Playbook basically ek YAML file hoti hai
 * jisme automation scripts define karte hain
 * 
 * Playbook ke andar:
 * → Automation ka task kya hai
 * → Kaunse steps perform karne hain
 * 
 * Ye sab define karte hain
 * 
 * YAML:
 * → Human-readable language hoti hai
 * → Isi language me playbooks likhte hain
 * 
 * ! CREATING A PLAYBOOK FILE
 * Playbook file create karne ke liye:
 * touch create_file.yml
 * 
 * Ab:
 * → Is file ke andar YAML code likhenge
 * 
 * File open karne ke liye:
 * nano create_file.yml
 * 
 * ! IMPORTANT NOTE
 * YAML me indentation bahut matter karti hai
 * 
 * Agar spacing galat hui:
 * → YAML error aa jayega
 * 
 * ! BASIC PLAYBOOK STRUCTURE
 * 
 * ---
 * - name: Create a file using environment path
 *   hosts: local
 * 
 *   tasks:
 *     - name: Create ansible_file.txt
 *       file:
 *         path: "{{ ansible_env.HOME }}/ansible_file.txt"
 *         state: touch
 *         mode: '0644'
 * 
 * ! EXPLANATION OF ABOVE CODE
 * 
 * ---
 * → YAML document start symbol
 * 
 * - name:
 * → Playbook ka description/title
 * 
 * hosts:
 * → Kis group/server pe task run karna hai
 * 
 * tasks:
 * → Yaha actual automation tasks likhte hain
 * 
 * file:
 * → Ye Ansible ka built-in module hai
 * → Files/directories manage karne ke liye use hota hai
 * 
 * path:
 * → File kis location pe create hogi
 * 
 * "{{ ansible_env.HOME }}"
 * → Ansible automatically current user ka HOME directory path nikal lega
 * 
 * Example:
 * /home/ubuntu
 * 
 * state: touch
 * → File create karega
 * 
 * Agar file already exist kare:
 * → timestamp update karega
 * 
 * mode: '0644'
 * → File permissions set karta hai
 * 
 * 6:
 * → owner read + write kar sakta hai
 * 
 * 4:
 * → group sirf read kar sakta hai
 * 
 * 4:
 * → others sirf read kar sakte hain
 * 
 * ! BEST PRACTICE
 * Hardcoded paths avoid karne chahiye
 * 
 * Example:
 * /home/ubuntu/file.txt
 * 
 * Iski jagah:
 * "{{ ansible_env.HOME }}"
 * use karna better practice hota hai
 * 
 * ! HOW TO RUN PLAYBOOK?
 * Command:
 * ansible-playbook -i hosts create_file.yml
 * 
 * ! WHAT DOES THIS COMMAND DO?
 * ansible-playbook
 * → Playbook execute karega
 * 
 * -i hosts
 * → Custom inventory file use karega
 * 
 * create_file.yml
 * → Is YAML playbook ko run karega
 * 
 * ! AFTER EXECUTION
 * Ye localhost pe file create kar dega
 * 
 * ls command chalane pe:
 * ansible_file.txt file dikhegi
 * 
 * ! HOW TO CREATE local GROUP INSIDE HOSTS FILE?
 * Inventory/hosts file open karo:
 * nano hosts
 * 
 * Fir:
 * → local naam ka group create karo
 * 
 * Example:
 * 
 * [local]
 * localhost ansible_connection=local
 * 
 * ! EXPLANATION OF ABOVE LINE
 * [local]
 * → Group name hai
 * 
 * localhost
 * → Current machine
 * 
 * ansible_connection=local
 * → SSH use nahi karega
 * → Direct local machine pe run karega
 * 
 * ! COMPLETE SIMPLE PLAYBOOK EXAMPLE
 * 
 * ---
 * - name: Create a file using environment path
 *   hosts: local
 * 
 *   tasks:
 *     - name: Create a demo file
 *       file:
 *         path: /tmp/demo.txt
 *         state: touch
 * 
 * ! WHAT DOES THIS PLAYBOOK DO?
 * → local group pe run hoga
 * → /tmp/demo.txt file create karega
 * 
 * state: touch
 * → File create karne ke liye use hota hai
 * 
 * ! INTERVIEW QUESTIONS + ANSWERS
 * 
 * ! Q1) What is an Ansible Playbook?
 * Ans:
 * Playbook ek YAML file hoti hai
 * jisme automation tasks aur instructions likhe hote hain
 * 
 * ! Q2) Why is YAML used in Ansible?
 * Ans:
 * YAML human-readable hoti hai
 * aur easy to understand hoti hai
 * 
 * ! Q3) Why is indentation important in YAML?
 * Ans:
 * YAML indentation se structure define karti hai
 * galat indentation se syntax errors aa jate hain
 * 
 * ! Q4) What does hosts mean in a playbook?
 * Ans:
 * hosts define karta hai
 * kis server/group pe tasks execute hongi
 * 
 * ! Q5) What is tasks in Ansible?
 * Ans:
 * tasks individual actions hote hain
 * jo ansible perform karta hai
 * 
 * ! Q6) What is file module in Ansible?
 * Ans:
 * file module files aur directories create/manage karne ke liye use hota hai
 * 
 * ! Q7) What does state: touch do?
 * Ans:
 * state: touch file create karta hai
 * agar file already exist kare toh timestamp update karta hai
 * 
 * ! Q8) What is ansible_env.HOME?
 * Ans:
 * ye current user ka HOME directory path return karta hai
 * 
 * ! Q9) What does mode: '0644' mean?
 * Ans:
 * ye Linux file permissions define karta hai
 * owner read/write kar sakta hai
 * group aur others sirf read kar sakte hain
 * 
 * ! Q10) What is the use of ansible-playbook command?
 * Ans:
 * ansible-playbook command YAML playbook execute karne ke liye use hoti hai
 * 
 * Example:
 * ansible-playbook -i hosts create_file.yml
 * 
 * ! SHORT SUMMARY
 * → Playbook = YAML automation file
 * → tasks section me automation steps likhte hain
 * → hosts target systems define karta hai
 * → YAML indentation bahut important hai
 * → file module files manage karta hai
 * → ansible_env.HOME dynamically HOME path deta hai
 * 
 */