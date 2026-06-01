/**
 * ! SESSIONS IN LINUX
 *
 * ---------------------------------------------------
 * ! WHAT IS A SHELL SESSION ?
 * ---------------------------------------------------
 *
 * ek shell session tab start hota hai jab user login karta hai
 * ya terminal open karta hai
 *
 * session end tab hota hai jab:
 *
 * 1. terminal close ho jaye
 * 2. logout ho jaye
 * 3. shell process terminate ho jaye
 *
 * har shell session ek process ke saath associated hota hai
 *
 * shell ek program hai jo user aur Linux kernel ke beech
 * interface provide karta hai
 *
 * common shells:
 *
 * bash
 * sh
 * zsh
 * fish
 * ksh
 *
 * ---------------------------------------------------
 * ! CURRENT SHELL CHECK KARNA
 * ---------------------------------------------------
 *
 * echo $SHELL
 *
 * Example Output:
 *
 * /bin/bash
 *
 * ---------------------------------------------------
 * ! CURRENT SHELL PROCESS ID (PID)
 * ---------------------------------------------------
 *
 * echo $$
 *
 * $$ = current shell ka PID
 *
 * Example:
 *
 * 4521
 *
 * agar naya terminal open karoge toh naya shell create hoga
 * aur uska PID alag hoga
 *
 * isliye:
 *
 * Terminal 1:
 * echo $$
 * 4521
 *
 * Terminal 2:
 * echo $$
 * 5874
 *
 * dono shell sessions alag hain
 *
 * ---------------------------------------------------
 * ! PROCESS HIERARCHY
 * ---------------------------------------------------
 *
 * login
 *   |
 *   ---> bash
 *           |
 *           ---> commands
 *
 * har shell ek process hota hai
 *
 * aur uske andar run hone wale commands uske child
 * processes ho sakte hain
 *
 * ---------------------------------------------------
 * ! VIEW CURRENT USER
 * ---------------------------------------------------
 *
 * whoami
 *
 * Example Output:
 *
 * ayush
 *
 * ---------------------------------------------------
 * ! VIEW LOGGED IN USERS
 * ---------------------------------------------------
 *
 * who
 *
 * ya
 *
 * w
 *
 * ye currently logged in users aur unki sessions
 * dikha deta hai
 *
 * ---------------------------------------------------
 * ! NESTED SHELL SESSION
 * ---------------------------------------------------
 *
 * existing shell ke andar ek aur shell launch kar sakte hain
 *
 * command:
 *
 * bash
 *
 * Example:
 *
 * ayush@ubuntu:~$ bash
 * ayush@ubuntu:~$
 *
 * ab ek nayi bash shell start ho gayi hai
 *
 * ise nested shell ya subshell kehte hain
 *
 * ---------------------------------------------------
 * ! CHECK PID OF NESTED SHELL
 * ---------------------------------------------------
 *
 * Parent Shell:
 *
 * echo $$
 * 4521
 *
 * bash
 *
 * Child Shell:
 *
 * echo $$
 * 4678
 *
 * dhyan do:
 * nested shell ka PID alag hai
 *
 * ---------------------------------------------------
 * ! EXIT FROM NESTED SHELL
 * ---------------------------------------------------
 *
 * exit
 *
 * ya
 *
 * Ctrl + D
 *
 * command use kar sakte hain
 *
 * Example:
 *
 * ayush@ubuntu:~$ exit
 *
 * isse current shell close ho jayegi
 * aur parent shell mein wapas aa jaoge
 *
 * ---------------------------------------------------
 * ! MULTIPLE NESTED SHELLS
 * ---------------------------------------------------
 *
 * bash
 * bash
 * bash
 *
 * har baar ek naya child shell create hoga
 *
 * bahar nikalne ke liye:
 *
 * exit
 * exit
 * exit
 *
 * jitni nested shells hain utni baar exit karna padega
 *
 * ---------------------------------------------------
 * ! SHELL LEVEL CHECK KARNA
 * ---------------------------------------------------
 *
 * echo $SHLVL
 *
 * Example:
 *
 * Parent Shell:
 * SHLVL=1
 *
 * bash
 *
 * Child Shell:
 * SHLVL=2
 *
 * bash
 *
 * Child of Child:
 * SHLVL=3
 *
 * SHLVL shell nesting level batata hai
 *
 * ---------------------------------------------------
 * ! USEFUL SESSION COMMANDS
 * ---------------------------------------------------
 *
 * echo $$
 * current shell PID
 *
 * echo $PPID
 * parent process PID
 *
 * echo $SHLVL
 * shell nesting level
 *
 * whoami
 * current user
 *
 * who
 * logged in users
 *
 * w
 * active user sessions
 *
 * ps
 * running processes
 *
 * ps -f
 * detailed process information
 *
 * pstree
 * process hierarchy tree
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 *
 * Q1. What is a shell session?
 *
 * Ans:
 * user ke login ya terminal open karne se jo shell start
 * hoti hai usse shell session kehte hain.
 *
 * ---------------------------------------------------
 *
 * Q2. How do you find the PID of current shell?
 *
 * Ans:
 *
 * echo $$
 *
 * ---------------------------------------------------
 *
 * Q3. What is a nested shell?
 *
 * Ans:
 * ek shell ke andar dusri shell run karna nested shell
 * ya subshell kehlata hai.
 *
 * ---------------------------------------------------
 *
 * Q4. How do you start a nested Bash shell?
 *
 * Ans:
 *
 * bash
 *
 * ---------------------------------------------------
 *
 * Q5. How do you exit from a shell session?
 *
 * Ans:
 *
 * exit
 *
 * ya
 *
 * Ctrl + D
 *
 * ---------------------------------------------------
 *
 * Q6. What does SHLVL variable represent?
 *
 * Ans:
 * current shell nesting level ko represent karta hai.
 *
 * ---------------------------------------------------
 *
 * Q7. Why does echo $$ give different values in different terminals?
 *
 * Ans:
 * har terminal ek alag shell process run karta hai.
 * har process ka unique PID hota hai.
 *
 * ---------------------------------------------------
 *
 * Q8. Difference between PID and PPID?
 *
 * Ans:
 *
 * PID  = Process ID of current process
 *
 * PPID = Parent Process ID
 *
 * ---------------------------------------------------
 *
 * ! MEMORY TIP
 *
 * $$      -> Current Shell PID
 *
 * $PPID   -> Parent PID
 *
 * $SHLVL  -> Shell Level
 *
 * bash    -> New Shell
 *
 * exit    -> Close Current Shell
 *
 */