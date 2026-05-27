/**
 * =========================================================
 * ! ANSIBLE VAULT
 * =========================================================
 * Ansible Vault ek built-in tool hai Ansible ka
 * jo encryption ke liye use hota hai.
 *
 *
 * Sensitive data:
 * → API keys
 * → Passwords
 * → Secret keys
 *
 * ko secure banane ke liye
 * Ansible Vault use karte hain.
 *
 *
 * Ye allow karta hai:
 *
 * → Encrypted variables store karna
 * → Configuration files secure karna
 * → Entire playbooks encrypt karna
 *
 *
 * ---------------------------------------------------------
 * ! WHY DO WE USE ANSIBLE VAULT?
 * ---------------------------------------------------------
 * → Production environment me secrets protect karne ke liye
 *
 * → Developers accidentally passwords
 *   Git repositories me expose na kare
 *
 * → Secret management ki security best practices follow karne ke liye
 *
 *
 * ---------------------------------------------------------
 * ! PRACTICAL IMPLEMENTATION
 * ---------------------------------------------------------
 * secrets.yml naam ki file banayi
 *
 *
 * Example:
 *
 * api_key: "1234-secret-api-key"
 *
 *
 * ---------------------------------------------------------
 * ! ENCRYPT FILE
 * ---------------------------------------------------------
 * Command:
 *
 * ansible-vault encrypt secrets.yml
 *
 *
 * Password puchega:
 * → Vault password enter karo
 *
 *
 * Output:
 *
 * Encryption successful
 *
 *
 * ---------------------------------------------------------
 * ! ENCRYPTED FILE
 * ---------------------------------------------------------
 * cat secrets.yml
 *
 *
 * Output:
 *
 * $ANSIBLE_VAULT;1.1;AES256
 * 37623565653837343033646466316337653862333930303364643530363333373939373235633632
 * 6233663465356461653962623930383632356230623266340a656331653034633238636362653161
 * 66643230363330313332636239363035316239653266393537396637383464636431633733316139
 *
 *
 * Meaning:
 *
 * → File encrypted ho chuki hai
 * → Directly readable nahi hai
 *
 *
 * ---------------------------------------------------------
 * ! USING ENCRYPTED VARIABLES IN PLAYBOOK
 * ---------------------------------------------------------
 * Maan lo:
 *
 * → Stored API key ko dusri playbook me use karna hai
 *
 *
 * Example:
 *
 * ---
 * - name: Use Encrypted API KEY
 *   hosts: aws
 *
 *   vars_files:
 *     - secrets.yml
 *
 *   tasks:
 *
 *     - name: SHOW API KEY (for demo only)
 *       debug:
 *         msg: "YOUR API KEY is {{ api_key }}"
 *
 *
 * ---------------------------------------------------------
 * ! EXPLANATION
 * ---------------------------------------------------------
 * vars_files:
 * → External variables file load karta hai
 *
 *
 * secrets.yml
 * → Encrypted variables file
 *
 *
 * debug:
 * → Value print/display karta hai
 *
 *
 * api_key
 * → Encrypted variable access ho raha hai
 *
 *
 * ---------------------------------------------------------
 * ! FIRST ERROR
 * ---------------------------------------------------------
 * ERROR!
 * Attempting to decrypt but no vault secrets found
 *
 *
 * Meaning:
 *
 * → Ansible ko vault password nahi mila
 *
 *
 * Solution:
 *
 * --ask-vault-password
 *
 * use karna padega
 *
 *
 * ---------------------------------------------------------
 * ! CORRECT COMMAND
 * ---------------------------------------------------------
 * ansible-playbook -i hosts secure-playbook.yml --ask-vault-password
 *
 *
 * ---------------------------------------------------------
 * ! SECOND ERROR
 * ---------------------------------------------------------
 * ERROR!
 * variable files must contain either a dictionary
 *
 *
 * Reason:
 *
 * secrets.yml ka format galat tha
 *
 *
 * Aapne:
 *
 * api_key:"1234-secret-api-key"
 *
 * likha tha
 *
 *
 * YAML me:
 *
 * → Proper spacing important hoti hai
 *
 *
 * ---------------------------------------------------------
 * ! CORRECT secrets.yml FORMAT
 * ---------------------------------------------------------
 * api_key: "1234-secret-api-key"
 *
 *
 * Space after colon:
 *
 * api_key:
 *
 * mandatory hai
 *
 *
 * ---------------------------------------------------------
 * ! COMPLETE FLOW
 * ---------------------------------------------------------
 * Create secrets.yml
 *          ↓
 * Store secret variables
 *          ↓
 * Encrypt using ansible-vault
 *          ↓
 * Use vars_files in playbook
 *          ↓
 * Run playbook with vault password
 *
 *
 * ---------------------------------------------------------
 * ! USEFUL VAULT COMMANDS
 * ---------------------------------------------------------
 *
 * ! Encrypt File
 * ansible-vault encrypt secrets.yml
 *
 *
 * ! View Encrypted File
 * ansible-vault view secrets.yml
 *
 *
 * ! Edit Encrypted File
 * ansible-vault edit secrets.yml
 *
 *
 * ! Decrypt File
 * ansible-vault decrypt secrets.yml
 *
 *
 * ---------------------------------------------------------
 * ! ADVANTAGES OF ANSIBLE VAULT
 * ---------------------------------------------------------
 * → Secrets secure rehte hain
 * → GitHub pe safely push kar sakte hain
 * → Production security improve hoti hai
 * → Centralized secret management
 * → Sensitive credentials hidden rehte hain
 * → Built-in Ansible feature hai
 *
 *
 * ---------------------------------------------------------
 * ! IMPORTANT UNDERSTANDING
 * ---------------------------------------------------------
 * Without Vault:
 *
 * → Passwords plain text me visible honge
 *
 *
 * With Vault:
 *
 * → Secrets encrypted format me store hote hain
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is Ansible Vault?
 * Ans:
 * Ansible Vault is a built-in Ansible tool
 * used to encrypt sensitive data.
 *
 *
 * Q2) Why do we use Ansible Vault?
 * Ans:
 * To securely store passwords,
 * API keys, and secret credentials.
 *
 *
 * Q3) Which encryption algorithm is used by Vault?
 * Ans:
 * AES256
 *
 *
 * Q4) What does vars_files do?
 * Ans:
 * It loads variables
 * from external files.
 *
 *
 * Q5) Why did "Attempting to decrypt but no vault secrets found" occur?
 * Ans:
 * Because vault password was not provided.
 *
 *
 * Q6) Which command asks for vault password?
 * Ans:
 * --ask-vault-password
 *
 *
 * Q7) Why did YAML variable file error occur?
 * Ans:
 * Because YAML formatting/spaces were incorrect.
 *
 *
 * Q8) Difference between encrypt and decrypt?
 * Ans:
 *
 * encrypt:
 * → Converts plain text into secure encrypted format
 *
 * decrypt:
 * → Converts encrypted data back into readable format
 *
 *
 * Q9) Can entire playbooks be encrypted?
 * Ans:
 * Yes.
 * Entire playbooks can also be encrypted.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → Ansible Vault secures sensitive data
 * → Uses AES256 encryption
 * → Best for API keys & passwords
 * → vars_files loads encrypted variables
 * → --ask-vault-password required during execution
 * → Important for production security
 *
 */