/**
 * =========================================================
 * ! ANSIBLE ROLES
 * =========================================================
 * Ansible Roles are a way to organize playbooks
 * into reusable and structured components.
 *
 * Roles:
 * → Logic ko different folders me separate kar dete hain
 *
 * Example:
 * → tasks
 * → handlers
 * → vars
 * → templates
 *
 *
 * Roles useful hote hain:
 * → Large-scale projects me
 * → Production-grade Ansible projects me
 *
 *
 * Roles help:
 * → Best practices follow karne me
 * → DRY principle maintain karne me
 *
 *
 * ! DRY PRINCIPLE
 * DRY =
 *
 * Don't Repeat Yourself
 *
 * Matlab:
 * → Same code baar-baar repeat nahi karna
 *
 *
 * Roles:
 * → Easily reusable hote hain
 * → Share kiye ja sakte hain
 * → Different playbooks me include kiye ja sakte hain
 *
 *
 * ---------------------------------------------------------
 * ! CREATE ROLE
 * ---------------------------------------------------------
 * Command:
 *
 * ansible-galaxy init nginx-role
 *
 *
 * Output:
 *
 * - Role nginx-role was created successfully
 *
 *
 * ---------------------------------------------------------
 * ! CHECK FILES
 * ---------------------------------------------------------
 * ls
 *
 *
 * Output:
 *
 * create_file.yml
 * hosts
 * tags-ec2.yml
 * handlers-ec2.yml
 * nginx-role
 * variables_loops.yml
 *
 *
 * → nginx-role naam ka folder create ho gaya
 *
 *
 * ---------------------------------------------------------
 * ! GO INSIDE ROLE
 * ---------------------------------------------------------
 * cd nginx-role
 *
 * ls
 *
 *
 * Output:
 *
 * README.md
 * files
 * meta
 * templates
 * vars
 * defaults
 * handlers
 * tasks
 * tests
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION OF ALL DIRECTORIES
 * ---------------------------------------------------------
 *
 * ! tasks/
 * ---------------------------------------------------------
 * Ye role ka sabse important folder hota hai.
 *
 * Is folder me:
 * → Main tasks likhe jate hain
 *
 *
 * Example:
 * → nginx install
 * → package update
 * → user creation
 *
 *
 * Main file:
 *
 * tasks/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! handlers/
 * ---------------------------------------------------------
 * Handlers folder me:
 * → Special tasks likhte hain
 *
 *
 * Example:
 * → nginx restart
 * → apache reload
 *
 *
 * Ye tabhi run hote hain:
 * → Jab notify trigger hota hai
 *
 *
 * Main file:
 *
 * handlers/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! vars/
 * ---------------------------------------------------------
 * vars folder:
 * → Variables store karne ke liye
 *
 *
 * Example:
 *
 * nginx_port: 80
 *
 *
 * Main file:
 *
 * vars/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! defaults/
 * ---------------------------------------------------------
 * Default variables store karta hai.
 *
 *
 * Difference:
 *
 * vars/
 * → High priority variables
 *
 *
 * defaults/
 * → Low priority default variables
 *
 *
 * Main file:
 *
 * defaults/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! files/
 * ---------------------------------------------------------
 * Static files store karne ke liye.
 *
 *
 * Example:
 * → HTML files
 * → Config files
 * → Scripts
 *
 *
 * copy module ke through use karte hain
 *
 *
 * ---------------------------------------------------------
 * ! templates/
 * ---------------------------------------------------------
 * Dynamic template files store karta hai.
 *
 *
 * Mostly:
 * → .j2 (Jinja2 templates)
 *
 *
 * Use:
 * → Variables ke saath dynamic configs create karne ke liye
 *
 *
 * Example:
 *
 * nginx.conf.j2
 *
 *
 * ---------------------------------------------------------
 * ! meta/
 * ---------------------------------------------------------
 * Role metadata store karta hai.
 *
 *
 * Example:
 * → Author info
 * → Dependencies
 * → Platform support
 *
 *
 * Main file:
 *
 * meta/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! tests/
 * ---------------------------------------------------------
 * Role testing ke liye use hota hai.
 *
 *
 * Yaha:
 * → Sample inventory
 * → Test playbooks
 *
 * rakhte hain
 *
 *
 * ---------------------------------------------------------
 * ! README.md
 * ---------------------------------------------------------
 * Documentation file hoti hai.
 *
 *
 * Isme:
 * → Role ka purpose
 * → Usage
 * → Variables
 * → Examples
 *
 * likhte hain
 *
 *
 * ---------------------------------------------------------
 * ! EXISTING PLAYBOOK
 * ---------------------------------------------------------
 * Already ek playbook file bani hui hai:
 *
 * - name: Install NGINX on Ubuntu
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
 * ---------------------------------------------------------
 * ! CONVERTING THIS INTO ROLE
 * ---------------------------------------------------------
 * Ab:
 *
 * → Is task ko
 *
 * tasks/main.yml
 *
 * ke andar move karenge
 *
 *
 * Example:
 *
 * tasks/main.yml
 *
 * ---
 * - name: Install nginx
 *   apt:
 *     name: nginx
 *     state: present
 *     update_cache: yes
 *
 *
 * ---------------------------------------------------------
 * ! MAIN PLAYBOOK USING ROLE
 * ---------------------------------------------------------
 * Root folder me ek new playbook banega:
 *
 * nano site.yml
 *
 *
 * Example:
 *
 * ---
 * - hosts: aws
 *   become: yes
 *
 *   roles:
 *     - nginx-role
 *
 *
 * ---------------------------------------------------------
 * ! HOW ROLE WORKS?
 * ---------------------------------------------------------
 * site.yml
 *          ↓
 * nginx-role
 *          ↓
 * tasks/main.yml
 *          ↓
 * Install nginx task execute
 *
 *
 * ---------------------------------------------------------
 * ! RUN ROLE
 * ---------------------------------------------------------
 * ansible-playbook -i hosts site.yml
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What are Ansible Roles?
 * Ans:
 * Roles are reusable and structured components
 * used to organize Ansible playbooks.
 *
 *
 * Q2) Why are roles used?
 * Ans:
 * Roles improve organization,
 * reusability, scalability,
 * and maintainability.
 *
 *
 * Q3) What is the purpose of tasks folder?
 * Ans:
 * It contains the main automation tasks.
 *
 *
 * Q4) Difference between vars and defaults?
 * Ans:
 *
 * vars:
 * → High priority variables
 *
 * defaults:
 * → Low priority default variables
 *
 *
 * Q5) What is templates folder used for?
 * Ans:
 * It stores Jinja2 template files
 * for dynamic configuration generation.
 *
 *
 * Q6) What is DRY principle?
 * Ans:
 * DRY means:
 *
 * Don't Repeat Yourself
 *
 * It avoids duplicate code.
 *
 *
 * Q7) Which command creates a role?
 * Ans:
 * ansible-galaxy init nginx-role
 *
 *
 * Q8) Which file contains main role tasks?
 * Ans:
 * tasks/main.yml
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Roles organize Ansible projects
 * → Best for production-grade automation
 * → tasks folder contains main tasks
 * → handlers contain special tasks
 * → vars/defaults store variables
 * → templates store dynamic configs
 * → Roles improve reusability & scalability
 *
 */