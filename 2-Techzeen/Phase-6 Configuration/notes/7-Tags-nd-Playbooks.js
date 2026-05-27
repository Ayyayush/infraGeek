/**
 * =========================================================
 * ! TAGS IN PLAYBOOK
 * =========================================================
 * EC2 se Ubuntu machine ko connect karo
 * jaise pichle lecture me kiya tha.
 *
 * Ab:
 * → Localhost Ubuntu terminal se
 *   ek playbook banayenge
 *
 *
 * Command:
 *
 * nano tags-ec2.yml
 *
 *
 * ---------------------------------------------------------
 * ! PLAYBOOK
 * ---------------------------------------------------------
 * ---
 * - name: Tags in Playbook
 *   hosts: aws
 *   become: yes
 *
 *   tasks:
 *
 *     - name: Install nginx
 *       apt:
 *         name: nginx
 *         state: present
 *         update_cache: yes
 *       tags: install
 *
 *
 *     - name: Start nginx
 *       service:
 *         name: nginx
 *         state: started
 *       tags: start
 *
 *
 *     - name: Create a file
 *       file:
 *         path: /root/example.txt
 *         state: touch
 *         mode: '0644'
 *       tags: create_file
 *
 *
 * ---------------------------------------------------------
 * ! WHAT ARE TAGS?
 * ---------------------------------------------------------
 * Tags basically:
 *
 * → Nickname/type labels hote hain
 * → Tasks ko identify karne ke liye use hote hain
 *
 *
 * Problem:
 *
 * → Ek playbook me multiple tasks hote hain
 * → Kabhi sirf ek specific task run karna hota hai
 *
 *
 * Solution:
 *
 * → Us task ko tag de dete hain
 * → Fir usi tag ke through task execute karte hain
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION OF PLAYBOOK
 * ---------------------------------------------------------
 * - name: Tags in Playbook
 * → Playbook ka name/title
 *
 *
 * hosts: aws
 * → aws group ke remote machines pe run hoga
 *
 *
 * become: yes
 * → Root/sudo privileges use karega
 *
 *
 * ---------------------------------------------------------
 * ! TASK 1 -> INSTALL NGINX
 * ---------------------------------------------------------
 * apt:
 *
 * → apt module Ubuntu/Debian packages install karne ke liye use hota hai
 *
 *
 * name: nginx
 * → nginx package install karega
 *
 *
 * state: present
 * → Ensure karega ki package installed ho
 *
 *
 * update_cache: yes
 * → apt package cache update karega
 *
 *
 * tags: install
 * → Is task ka tag "install" hai
 *
 *
 * ---------------------------------------------------------
 * ! TASK 2 -> START NGINX
 * ---------------------------------------------------------
 * service:
 *
 * → Services ko manage karne ke liye use hota hai
 *
 *
 * name: nginx
 * → nginx service target hai
 *
 *
 * state: started
 * → Service ko start karega
 *
 *
 * tags: start
 * → Is task ka tag "start" hai
 *
 *
 * ---------------------------------------------------------
 * ! TASK 3 -> CREATE FILE
 * ---------------------------------------------------------
 * file:
 *
 * → File/directory operations ke liye use hota hai
 *
 *
 * path: /root/example.txt
 * → File path
 *
 *
 * state: touch
 * → Empty file create karega
 *
 *
 * mode: '0644'
 * → File permissions set karega
 *
 *
 * tags: create_file
 * → Is task ka tag "create_file" hai
 *
 *
 * ---------------------------------------------------------
 * ! RUN PLAYBOOK USING TAG
 * ---------------------------------------------------------
 * Sirf install task run karne ke liye:
 *
 * ansible-playbook -i hosts tags-ec2.yml --tags install
 *
 *
 * ---------------------------------------------------------
 * ! RUN MULTIPLE TAGS
 * ---------------------------------------------------------
 * Multiple tags run karne ke liye:
 *
 * ansible-playbook -i hosts tags-ec2.yml --tags "install,start"
 *
 *
 * ---------------------------------------------------------
 * ! SKIP TAGS
 * ---------------------------------------------------------
 * Agar kuch tasks skip karne ho:
 *
 * → --skip-tags use karte hain
 *
 *
 * Example:
 *
 * ansible-playbook -i hosts tags-ec2.yml --skip-tags create_file
 *
 *
 * ---------------------------------------------------------
 * ! DIFFERENCE BETWEEN apt AND service
 * ---------------------------------------------------------
 * apt module:
 * → Software/package install karne ke liye
 *
 *
 * service module:
 * → Service start/stop/restart karne ke liye
 *
 *
 * Example:
 *
 * apt:
 * → nginx install karega
 *
 *
 * service:
 * → nginx ko run/start karega
 *
 *
 * ---------------------------------------------------------
 * ! OUTPUT EXPLANATION
 * ---------------------------------------------------------
 * aayu0@LAPTOP-TR157MJV:~$
 * ansible-playbook -i hosts tags-ec2.yml --tags install
 *
 *
 * PLAY [Tags in Playbook]
 *
 * → Playbook start hua
 *
 *
 * TASK [Gathering Facts]
 *
 * → Remote machine ki information collect kar raha hai
 *
 *
 * ok: [ec2]
 *
 * → Connection successful
 *
 *
 * TASK [Install nginx]
 *
 * → nginx install task run hua
 *
 *
 * changed: [ec2]
 *
 * → System me changes hue
 * → nginx install hua
 *
 *
 * PLAY RECAP
 *
 * ok=2
 * → 2 tasks successful hue
 *
 *
 * changed=1
 * → 1 task ne actual changes kiye
 *
 *
 * unreachable=0
 * → Remote machine reachable thi
 *
 *
 * failed=0
 * → Koi error nahi aaya
 *
 *
 * skipped=0
 * → Koi task skip nahi hua
 *
 *
 * ---------------------------------------------------------
 * ! VERIFY ON REMOTE MACHINE
 * ---------------------------------------------------------
 * Remote machine pe jaake:
 *
 * nginx -v
 *
 *
 * Output:
 *
 * nginx version: nginx/1.28.3 (Ubuntu)
 *
 *
 * → Iska matlab nginx successfully install ho gaya
 *
 *
 * ---------------------------------------------------------
 * ! IF REMOTE MACHINE ACCESS NA HO?
 * ---------------------------------------------------------
 * Agar directly remote machine pe commands run nahi kar sakte:
 *
 * → Tab bhi Control Node se verify kar sakte hain
 *
 *
 * Command:
 *
 * ansible aws -i hosts -m shell -a "nginx -v"
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION
 * ---------------------------------------------------------
 * ansible
 * → Ansible command
 *
 *
 * aws
 * → Inventory group
 *
 *
 * -i hosts
 * → Inventory file
 *
 *
 * -m shell
 * → shell module use hoga
 *
 *
 * -a "nginx -v"
 * → Remote machine pe command execute karega
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What are tags in Ansible?
 * Ans:
 * Tags are labels used to run
 * specific tasks inside a playbook.
 *
 *
 * Q2) Why are tags useful?
 * Ans:
 * Tags help execute only required tasks
 * instead of running the entire playbook.
 *
 *
 * Q3) What does become: yes do?
 * Ans:
 * It gives sudo/root privileges to tasks.
 *
 *
 * Q4) Difference between apt and service module?
 * Ans:
 * apt:
 * → Installs packages
 *
 * service:
 * → Manages services
 *
 *
 * Q5) What does --skip-tags do?
 * Ans:
 * It skips tasks having specified tags.
 *
 *
 * Q6) What does state: present mean?
 * Ans:
 * It ensures that the package exists/installed.
 *
 *
 * Q7) What does state: started mean?
 * Ans:
 * It ensures that the service is running.
 *
 *
 * Q8) How to run only specific tasks?
 * Ans:
 * Using:
 *
 * --tags
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Tags help run selective tasks
 * → apt installs packages
 * → service manages services
 * → --tags runs specific tasks
 * → --skip-tags skips tasks
 * → shell module runs remote commands
 *
 */