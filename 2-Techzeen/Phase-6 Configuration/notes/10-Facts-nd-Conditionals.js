/**
 * =========================================================
 * ! FACTS AND CONDITIONALS IN ANSIBLE
 * =========================================================
 *
 * ---------------------------------------------------------
 * ! WHAT ARE FACTS?
 * ---------------------------------------------------------
 * Facts are automatically collected information
 * about the target system.
 *
 * Ye information:
 * → Ek dictionary me store hoti hai
 *
 *
 * Is dictionary ko:
 *
 * ansible_facts
 *
 * kehte hain.
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW ANSWER
 * ---------------------------------------------------------
 * Facts are automatically gathered information
 * about the target system
 * stored inside a dictionary called ansible_facts.
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE FACTS?
 * ---------------------------------------------------------
 * Facts use hote hain:
 *
 * → Machine-specific tasks dynamically perform karne ke liye
 *
 *
 * Example:
 *
 * → nginx sirf Ubuntu pe install karo
 * → Windows pe different task run karo
 * → Different OS ke hisaab se automation change karo
 *
 *
 * ---------------------------------------------------------
 * ! HOW FACTS ARE GATHERED?
 * ---------------------------------------------------------
 * Facts:
 * → By default automatically gather hote hain
 *
 *
 * Ye:
 *
 * setup module
 *
 * ke through gather hote hain.
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO ACCESS FACTS?
 * ---------------------------------------------------------
 * Example:
 *
 * ansible_facts['distribution']
 *
 * → OS name batata hai
 *
 *
 * ansible_facts['os_family']
 *
 * → OS family batata hai
 *
 *
 * Other examples:
 *
 * ansible_facts['hostname']
 * ansible_facts['memory_mb']
 * ansible_facts['processor']
 *
 *
 * ---------------------------------------------------------
 * ! WHAT ARE CONDITIONALS?
 * ---------------------------------------------------------
 * Conditionals:
 * → Conditions ke basis pe tasks run karte hain
 *
 *
 * Matlab:
 *
 * → Agar condition true hui
 *   toh task chalega
 *
 * → Agar false hui
 *   toh task skip ho jayega
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO USE CONDITIONALS?
 * ---------------------------------------------------------
 * Ansible me:
 *
 * when:
 *
 * clause use karte hain.
 *
 *
 * Example:
 *
 * when: ansible_facts['distribution'] == "Ubuntu"
 *
 *
 * Meaning:
 *
 * → Task tabhi chalega
 *   jab OS Ubuntu hoga
 *
 *
 * ---------------------------------------------------------
 * ! PRACTICAL IMPLEMENTATION
 * ---------------------------------------------------------
 * ---
 * - name: Install Nginx only on Ubuntu
 *   hosts: aws
 *   gather_facts: yes
 *
 *   tasks:
 *
 *     - name: Debug OS Name
 *       debug:
 *         msg: "OS is {{ ansible_facts['distribution'] }}"
 *
 *
 *     - name: Install Nginx only if Ubuntu
 *       apt:
 *         name: nginx
 *         state: present
 *
 *       when: ansible_facts['distribution'] == "Ubuntu"
 *
 *
 * ---------------------------------------------------------
 * ! LINE BY LINE EXPLANATION
 * ---------------------------------------------------------
 * gather_facts: yes
 *
 * → Automatically target machine ki information collect karega
 *
 *
 * debug:
 *
 * → Information print/display karne ke liye use hota hai
 *
 *
 * msg:
 *
 * → Message print karega
 *
 *
 * ansible_facts['distribution']
 *
 * → OS ka name return karega
 *
 *
 * Example output:
 *
 * Ubuntu
 *
 *
 * when:
 *
 * → Conditional statement
 *
 *
 * Condition:
 *
 * ansible_facts['distribution'] == "Ubuntu"
 *
 *
 * Meaning:
 *
 * → Sirf Ubuntu system pe nginx install hoga
 *
 *
 * ---------------------------------------------------------
 * ! COMMAND TO RUN PLAYBOOK
 * ---------------------------------------------------------
 * ansible-playbook -i hosts facts-nginx.yml -l aws
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION OF COMMAND
 * ---------------------------------------------------------
 * ansible-playbook
 * → Playbook run karega
 *
 *
 * -i hosts
 * → Inventory file specify karta hai
 *
 *
 * facts-nginx.yml
 * → Playbook file
 *
 *
 * -l aws
 * → Sirf aws group pe run karega
 *
 *
 * ---------------------------------------------------------
 * ! FIRST ERROR
 * ---------------------------------------------------------
 * ERROR:
 *
 * the playbook: facts-nginx.yml could not be found
 *
 *
 * Meaning:
 *
 * → Playbook file exist nahi karti thi
 *
 *
 * Solution:
 *
 * nano facts-nginx.yml
 *
 * → File create ki
 *
 *
 * ---------------------------------------------------------
 * ! SECOND ERROR
 * ---------------------------------------------------------
 * fatal: [ec2]: UNREACHABLE!
 *
 * Failed to connect to the host via ssh
 *
 *
 * Meaning:
 *
 * → SSH connection fail ho gaya
 *
 *
 * ---------------------------------------------------------
 * ! POSSIBLE REASONS
 * ---------------------------------------------------------
 * → EC2 instance band ho gaya
 * → Wrong public IP
 * → Security group me port 22 open nahi hai
 * → PEM key wrong hai
 * → SSH service issue
 * → Internet issue
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO FIX?
 * ---------------------------------------------------------
 * 1)
 * EC2 running state me hai ya nahi check karo
 *
 *
 * 2)
 * Correct public IP verify karo
 *
 *
 * 3)
 * AWS Security Group:
 * → Port 22 allow hona chahiye
 *
 *
 * 4)
 * PEM file path verify karo
 *
 *
 * 5)
 * Manual SSH try karo:
 *
 * ssh -i ~/.ssh/my-keys.pem ubuntu@44.197.241.254
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * Facts collect karne ke liye:
 *
 * → Pehle SSH connection successful hona zaruri hai
 *
 *
 * Agar:
 *
 * → SSH fail hua
 *
 * Toh:
 *
 * → Facts gather nahi honge
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What are Ansible Facts?
 * Ans:
 * Facts are automatically collected information
 * about target systems
 * stored in ansible_facts dictionary.
 *
 *
 * Q2) Which module gathers facts?
 * Ans:
 * setup module.
 *
 *
 * Q3) Why are facts useful?
 * Ans:
 * Facts help perform dynamic
 * machine-specific automation tasks.
 *
 *
 * Q4) What are conditionals in Ansible?
 * Ans:
 * Conditionals are used to execute tasks
 * based on conditions.
 *
 *
 * Q5) Which keyword is used for conditionals?
 * Ans:
 * when
 *
 *
 * Q6) What does gather_facts: yes do?
 * Ans:
 * It automatically collects system information
 * before running tasks.
 *
 *
 * Q7) What does ansible_facts['distribution'] return?
 * Ans:
 * It returns the operating system name.
 *
 *
 * Q8) Why did UNREACHABLE error occur?
 * Ans:
 * Because SSH connection to the remote machine failed.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Facts = System information
 * → Stored in ansible_facts dictionary
 * → Gathered automatically using setup module
 * → Conditionals use when keyword
 * → Enables dynamic automation
 * → SSH connection required for facts gathering
 *
 */