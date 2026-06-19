/**
 * ! PATH IN LINUX
 *
 * ---------------------------------------------------
 * ! WHAT IS PATH ?
 * ---------------------------------------------------
 * PATH ek Environment Variable hai
 * jo directories ki list store karta hai
 * shell kisi command ko execute karne se pehle in directories mein search karta hai
 *
 * jab hum koi command run karte hain:
 *
 * ls
 * pwd
 * cat
 *
 * shell PATH variable mein listed directories ko ek-ek karke check karta hai
 * jahan command mil jati hai usko execute kar deta hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! UNDERSTANDING THE PROBLEM
 * ---------------------------------------------------
 * maan lo:
 *
 * hi
 *
 * Output:
 *
 * command not found
 *
 * kyunki shell ko PATH variable mein listed directories mein
 * "hi" naam ki executable file nahi mili
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CHECK LOCATION OF A COMMAND
 * ---------------------------------------------------
 * which pwd
 *
 * Example Output:
 *
 * /usr/bin/pwd
 *
 * which ls
 *
 * Example Output:
 *
 * /usr/bin/ls
 *
 * which hi
 *
 * Output:
 *
 * hi not found
 *
 * which command batata hai ki command kis location se execute ho rahi hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VIEW PATH VARIABLE
 * ---------------------------------------------------
 * echo $PATH
 *
 * Example Output:
 *
 * /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
 *
 * PATH ke andar multiple directories ':' se separated hoti hain
 *
 * shell in directories ko left se right order mein search karta hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! HOW SHELL SEARCHES FOR COMMANDS
 * ---------------------------------------------------
 * maan lo command:
 *
 * ls
 *
 * shell check karega:
 *
 * /usr/local/sbin/ls
 *
 * phir:
 *
 * /usr/local/bin/ls
 *
 * phir:
 *
 * /usr/sbin/ls
 *
 * phir:
 *
 * /usr/bin/ls
 *
 * yahan mil gaya:
 *
 * /usr/bin/ls
 *
 * toh wahi execute ho jayega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CREATING OUR OWN COMMAND
 * ---------------------------------------------------
 * mkdir ~/bin
 *
 * cd ~/bin
 *
 * nano hi
 *
 * Example:
 *
 * #!/bin/bash
 * echo "Hello Ayush"
 *
 * executable permission do:
 *
 * chmod +x hi
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! RUNNING THE SCRIPT
 * ---------------------------------------------------
 * agar current directory mein ho:
 *
 * ./hi
 *
 * Output:
 *
 * Hello Ayush
 *
 * script run ho jayegi
 *
 * lekin:
 *
 * hi
 *
 * Output:
 *
 * command not found
 *
 * kyunki current directory PATH mein nahi hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! ADD CUSTOM DIRECTORY TO PATH
 * ---------------------------------------------------
 * nano ~/.bashrc
 *
 * end mein add karo:
 *
 * export PATH=$PATH:/home/username/bin
 *
 * Example:
 *
 * export PATH=$PATH:/home/ayush/bin
 *
 * yahan:
 *
 * existing PATH preserve ho raha hai
 *
 * aur new directory end mein add ho rahi hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! RELOAD BASHRC
 * ---------------------------------------------------
 * source ~/.bashrc
 *
 * ya
 *
 * . ~/.bashrc
 *
 * source command current shell mein file execute karta hai
 *
 * new terminal kholne ki zarurat nahi padti
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VERIFY PATH
 * ---------------------------------------------------
 * echo $PATH
 *
 * Output:
 *
 * ...
 * /home/ayush/bin
 *
 * ab custom directory PATH mein aa gayi hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! RUN CUSTOM COMMAND FROM ANYWHERE
 * ---------------------------------------------------
 * hi
 *
 * Output:
 *
 * Hello Ayush
 *
 * ab shell PATH mein search karega
 * aur /home/ayush/bin/hi mil jayega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! SOURCE COMMAND
 * ---------------------------------------------------
 * source filename
 *
 * file current shell process mein execute hoti hai
 *
 * naya shell create nahi hota
 *
 * Example:
 *
 * source ~/.bashrc
 *
 * changes current shell mein immediately apply ho jate hain
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CURRENT DIRECTORY VS PATH
 * ---------------------------------------------------
 * ./hi
 *
 * current directory se execute karo
 *
 * hi
 *
 * PATH variable mein search karke execute karo
 *
 * Linux security reasons ki wajah se current directory
 * default PATH mein include nahi karta
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 * Q1. What is PATH in Linux?
 * Ans:
 * PATH ek environment variable hai jo executable search
 * directories ki list store karta hai.
 *
 * Q2. How do you view the PATH variable?
 * Ans:
 * echo $PATH
 *
 * Q3. What does the which command do?
 * Ans:
 * command ki actual executable location batata hai.
 *
 * Q4. How does Linux locate a command?
 * Ans:
 * shell PATH variable ki directories ko left se right search karta hai.
 *
 * Q5. What happens if a command is not found in PATH?
 * Ans:
 * command not found error aata hai.
 *
 * Q6. How do you add a new directory to PATH?
 * Ans:
 * export PATH=$PATH:/new/directory
 *
 * Q7. Why is $PATH used while updating PATH?
 * Ans:
 * existing directories preserve karne ke liye.
 *
 * Q8. What is the difference between:
 * hi
 * and
 * ./hi
 *
 * Ans:
 * hi -> PATH mein search karega
 * ./hi -> current directory mein search karega
 *
 * Q9. What does source do?
 * Ans:
 * file ko current shell mein execute karta hai.
 *
 * Q10. Why is current directory not present in PATH by default?
 * Ans:
 * security reasons ke liye.
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! MEMORY TIP
 * ---------------------------------------------------
 * PATH      -> executable search directories
 * echo $PATH -> view PATH
 * which cmd -> command location
 * export PATH=$PATH:new_dir -> add directory
 * source ~/.bashrc -> reload changes
 * ./script -> run from current directory
 * script -> run using PATH lookup
 */