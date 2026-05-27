/**
 * =========================================================
 * ! HANDLERS IN ANSIBLE
 * =========================================================
 * Handlers are special tasks in Ansible
 * that run only when explicitly notified by other tasks.
 *
 * Handlers ka main purpose:
 *
 * → Actions ko sirf tab execute karna
 *   jab zarurat ho
 *
 *
 * Example:
 *
 * → Configuration change hone ke baad
 *   service restart karna
 *
 *
 * ---------------------------------------------------------
 * ! WHY HANDLERS ARE USED?
 * ---------------------------------------------------------
 * → Unnecessary operations avoid karne ke liye
 * → Better performance ke liye
 * → Cleaner automation ke liye
 * → Idempotency maintain karne ke liye
 *
 *
 * ! Idempotency
 * → Same playbook multiple times run karo
 * → Unnecessary repeated changes nahi hongi
 *
 *
 * ---------------------------------------------------------
 * ! INITIAL STEPS
 * ---------------------------------------------------------
 * Pehle:
 *
 * → nano hosts me gaye
 * → AWS connection verify kiya
 *
 *
 * Fir:
 *
 * nano handlers-ec2.yml
 *
 *
 * ---------------------------------------------------------
 * ! PLAYBOOK
 * ---------------------------------------------------------
 * ---
 * - name: Using Handlers
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
 *
 *
 *     - name: Deploy nginx config file
 *       copy:
 *         content: "Welcome to Ansible"
 *         dest: /var/www/html/index.html
 *
 *       notify: Restart nginx
 *
 *
 *   handlers:
 *
 *     - name: Restart nginx
 *       service:
 *         name: nginx
 *         state: restarted
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION LINE BY LINE
 * ---------------------------------------------------------
 * - name: Using Handlers
 * → Playbook ka title
 *
 *
 * hosts: aws
 * → AWS remote machines pe run hoga
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
 * → apt module package install karne ke liye
 *
 *
 * name: nginx
 * → nginx package install karega
 *
 *
 * state: present
 * → Ensure karega ki nginx installed ho
 *
 *
 * update_cache: yes
 * → apt cache update karega
 *
 *
 * ---------------------------------------------------------
 * ! TASK 2 -> DEPLOY CONFIG FILE
 * ---------------------------------------------------------
 * copy:
 * → copy module file/content copy karne ke liye use hota hai
 *
 *
 * content: "Welcome to Ansible"
 * → File ke andar ye content likhega
 *
 *
 * dest: /var/www/html/index.html
 * → Destination file path
 *
 *
 * notify: Restart nginx
 *
 * → Agar file me changes hue
 * → Toh handler call hoga
 *
 *
 * ---------------------------------------------------------
 * ! HANDLERS SECTION
 * ---------------------------------------------------------
 * handlers:
 * → Yaha special tasks define karte hain
 *
 *
 * Handler:
 *
 * - name: Restart nginx
 *
 * → Ye handler ka naam hai
 *
 *
 * service:
 * → service module use ho raha hai
 *
 *
 * name: nginx
 * → nginx service target hai
 *
 *
 * state: restarted
 * → nginx service restart karega
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * Handler tabhi run hoga:
 *
 * → Jab notify trigger hoga
 *
 *
 * notify kab trigger hoga?
 *
 * → Jab task actual changes kare
 *
 *
 * Agar:
 *
 * → Koi changes nahi hue
 *
 * Toh:
 *
 * → Handler run nahi hoga
 *
 *
 * ---------------------------------------------------------
 * ! FLOW
 * ---------------------------------------------------------
 * Install nginx
 *          ↓
 * Copy config file
 *          ↓
 * File changed?
 *          ↓
 * YES
 *          ↓
 * notify triggers handler
 *          ↓
 * nginx restart
 *
 *
 * ---------------------------------------------------------
 * ! WHY HANDLERS ARE IMPORTANT?
 * ---------------------------------------------------------
 * Without handlers:
 *
 * → Har baar nginx restart hota
 *
 *
 * With handlers:
 *
 * → Sirf changes hone par restart hoga
 *
 *
 * Benefits:
 *
 * → Better performance
 * → Less unnecessary restarts
 * → Efficient automation
 *
 *
 * ---------------------------------------------------------
 * ! HOW TO RUN PLAYBOOK?
 * ---------------------------------------------------------
 * ansible-playbook -i hosts handlers-ec2.yml
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What are handlers in Ansible?
 * Ans:
 * Handlers are special tasks
 * that run only when notified by other tasks.
 *
 *
 * Q2) Why are handlers used?
 * Ans:
 * Handlers are used to avoid unnecessary operations
 * like repeated service restarts.
 *
 *
 * Q3) What does notify do in Ansible?
 * Ans:
 * notify triggers a handler
 * when a task makes changes.
 *
 *
 * Q4) When does a handler execute?
 * Ans:
 * A handler executes only when notified
 * and when changes occur.
 *
 *
 * Q5) Why are handlers important for idempotency?
 * Ans:
 * They prevent unnecessary repeated operations
 * and maintain efficient automation.
 *
 *
 * Q6) Difference between task and handler?
 * Ans:
 *
 * Task:
 * → Runs normally
 *
 * Handler:
 * → Runs only when notified
 *
 *
 * Q7) Which module is used to restart services?
 * Ans:
 * service module.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Handlers are special conditional tasks
 * → notify triggers handlers
 * → Used mainly for service restart/reload
 * → Improves performance
 * → Maintains idempotency
 * → Avoids unnecessary operations
 *
 */