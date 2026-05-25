/**
 * =========================================================
 * ! VARIABLES AND LOOPS IN ANSIBLE
 * =========================================================
 * Last video mein humne playbook banaya tha.
 *
 * ---------------------------------------------------------
 * ! WHAT ARE VARIABLES IN ANSIBLE?
 * ---------------------------------------------------------
 * Variable ek container hota hai
 * jisme hum data store karte hain.
 *
 * Variables ka benefit:
 *
 * → Future me changes easily kar sakte hain
 * → Same value multiple jagah reuse kar sakte hain
 * → Hardcoding avoid hoti hai
 *
 *
 * Example:
 *
 * Maan lo:
 * → Username multiple jagah use hua hai
 *
 * Agar variable nahi banaya:
 * → Har jagah manually change karna padega
 *
 * Agar variable use kiya:
 * → Sirf variable ki value change karni padegi
 *
 *
 * ---------------------------------------------------------
 * ! WHAT ARE LOOPS IN ANSIBLE?
 * ---------------------------------------------------------
 * Loops basically iterative tasks perform karne ke liye use hote hain.
 *
 * Matlab:
 *
 * → Same task multiple baar run karna
 * → Different values ke saath
 *
 *
 * Example:
 *
 * → Multiple files create karna
 * → Multiple users create karna
 * → Multiple packages install karna
 *
 *
 * ---------------------------------------------------------
 * ! PLAYBOOK FILE
 * ---------------------------------------------------------
 * nano variables_loops.yml
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE PLAYBOOK
 * ---------------------------------------------------------
 * ---
 * - name: Playbook using variables and loops
 *   hosts: local
 *
 *   vars:
 *     file_path: "{{ ansible_env.HOME }}/files"
 *
 *     file_names:
 *       - file1.txt
 *       - file2.txt
 *       - file3.txt
 *
 *   tasks:
 *
 *     - name: Ensure Directory exists
 *       file:
 *         path: "{{ file_path }}"
 *         state: directory
 *         mode: '0755'
 *
 *     - name: Create Multiple Files using Loops
 *       file:
 *         path: "{{ file_path }}/{{ item }}"
 *         state: touch
 *         mode: '0644'
 *
 *       loop: "{{ file_names }}"
 *
 *
 * ---------------------------------------------------------
 * ! LINE BY LINE EXPLANATION
 * ---------------------------------------------------------
 *
 * ---
 * → YAML document start symbol
 *
 *
 * - name: Playbook using variables and loops
 * → Playbook ka title/description
 *
 *
 * hosts: local
 * → local group pe playbook run hoga
 *
 *
 * ---------------------------------------------------------
 * ! vars:
 * ---------------------------------------------------------
 * vars:
 * → Variables define karne ke liye use hota hai
 *
 *
 * file_path: "{{ ansible_env.HOME }}/files"
 *
 * → file_path naam ka variable create hua
 *
 *
 * ansible_env.HOME
 * → Current user ka home directory fetch karta hai
 *
 *
 * Example:
 *
 * /home/aayu0/files
 *
 *
 * ---------------------------------------------------------
 * ! file_names
 * ---------------------------------------------------------
 * file_names:
 *   - file1.txt
 *   - file2.txt
 *   - file3.txt
 *
 *
 * → Ye ek list variable hai
 * → Multiple filenames store kar raha hai
 *
 *
 * ---------------------------------------------------------
 * ! tasks
 * ---------------------------------------------------------
 * tasks:
 * → Yaha actual automation tasks likhte hain
 *
 *
 * ---------------------------------------------------------
 * ! TASK 1
 * ---------------------------------------------------------
 * - name: Ensure Directory exists
 *
 * → Ye task ensure karega
 *   ki directory exist kare
 *
 *
 * file:
 * → file module use ho raha hai
 *
 *
 * path: "{{ file_path }}"
 *
 * → Directory ka path
 *
 *
 * state: directory
 *
 * → Directory create karne ke liye
 *
 *
 * mode: '0755'
 *
 * → Directory permissions set karta hai
 *
 *
 * 0755 meaning:
 *
 * Owner:
 * → Read + Write + Execute
 *
 * Others:
 * → Read + Execute
 *
 *
 * ---------------------------------------------------------
 * ! TASK 2
 * ---------------------------------------------------------
 * - name: Create Multiple Files using Loops
 *
 * → Multiple files create karega
 *
 *
 * file:
 * → file module use ho raha hai
 *
 *
 * path: "{{ file_path }}/{{ item }}"
 *
 * → Dynamic file path create ho raha hai
 *
 *
 * item
 * → Loop ka current value hota hai
 *
 *
 * Example:
 *
 * Iteration 1:
 * → file1.txt
 *
 * Iteration 2:
 * → file2.txt
 *
 * Iteration 3:
 * → file3.txt
 *
 *
 * state: touch
 *
 * → File create karne ke liye use hota hai
 *
 *
 * mode: '0644'
 *
 * → File permissions set karta hai
 *
 *
 * 0644 meaning:
 *
 * Owner:
 * → Read + Write
 *
 * Others:
 * → Read only
 *
 *
 * ---------------------------------------------------------
 * ! loop
 * ---------------------------------------------------------
 * loop: "{{ file_names }}"
 *
 * → file_names list pe iterate karega
 *
 *
 * Matlab:
 *
 * → Har filename ke liye
 *   same task execute hoga
 *
 *
 * ---------------------------------------------------------
 * ! WHAT WILL HAPPEN AFTER RUNNING?
 * ---------------------------------------------------------
 * Ye playbook:
 *
 * → files naam ki directory create karega
 *
 * Aur:
 *
 * → file1.txt
 * → file2.txt
 * → file3.txt
 *
 * create karega
 *
 *
 * ---------------------------------------------------------
 * ! COMMAND TO RUN PLAYBOOK
 * ---------------------------------------------------------
 * ansible-playbook -i hosts variables_loops.yml
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What are variables in Ansible?
 * Ans:
 * Variables are used to store reusable data values
 * inside playbooks.
 *
 *
 * Q2) Why do we use variables?
 * Ans:
 * Variables help avoid hardcoding
 * and make future changes easier.
 *
 *
 * Q3) What are loops in Ansible?
 * Ans:
 * Loops are used to perform repetitive tasks
 * on multiple items.
 *
 *
 * Q4) What does loop: "{{ file_names }}" do?
 * Ans:
 * It iterates through each filename
 * inside the file_names list.
 *
 *
 * Q5) What is ansible_env.HOME ?
 * Ans:
 * It fetches the current user's home directory path.
 *
 *
 * Q6) What does state: directory do?
 * Ans:
 * It creates a directory.
 *
 *
 * Q7) What does state: touch do?
 * Ans:
 * It creates an empty file.
 *
 *
 * Q8) What does mode: '0755' mean?
 * Ans:
 * It sets directory permissions.
 *
 *
 * Q9) What is item in loops?
 * Ans:
 * item represents the current value
 * during loop iteration.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Variables store reusable values
 * → Loops perform repetitive tasks
 * → file module creates files/directories
 * → loop iterates through list items
 * → Playbook creates multiple files automatically
 *
 */