/**
 * ! ALIAS COMMAND IN LINUX
 * alias = shortcut for a command
 * frequently used ya lengthy commands ke liye shortcut create karne ke liye use hota hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! DEFINITION
 * ---------------------------------------------------
 * alias ek custom command hota hai jo kisi existing command ya command sequence ko represent karta hai
 * typing effort kam karta hai
 * productivity improve karta hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! MAN PAGE
 * ---------------------------------------------------
 * man bash
 *
 * Note:
 * alias bash shell ka built-in feature hai
 * isliye generally man alias ka separate page nahi milta
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! BASIC SYNTAX
 * ---------------------------------------------------
 * alias name='command'
 *
 * Example:
 * alias me='whoami'
 *
 * ab:
 * me
 *
 * Output:
 * current username
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! WHY USE ALIAS ?
 * ---------------------------------------------------
 * agar koi command frequently use karte ho
 * ya command bahut lengthy hai
 * toh uska alias bana sakte hain
 *
 * Example:
 * ls --color=auto
 *
 * alias:
 * alias ls='ls --color=auto'
 *
 * ab simple ls likhne par color output milega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! EXAMPLE : CUSTOM COMMAND
 * ---------------------------------------------------
 * maan lo Documents folder me quotes file hai
 *
 * command:
 * cat ~/Documents/quotes
 *
 * alias:
 * alias quotes='cat ~/Documents/quotes'
 *
 * ab:
 * quotes
 *
 * run karne par file ka content print ho jayega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VIEW ALL ALIASES
 * ---------------------------------------------------
 * alias
 *
 * system me currently configured sab aliases dikha dega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CHECK SPECIFIC ALIAS
 * ---------------------------------------------------
 * alias ls
 *
 * Output:
 * alias ls='ls --color=auto'
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! TEMPORARY ALIAS
 * ---------------------------------------------------
 * alias me='whoami'
 *
 * yeh current shell session tak hi available rahega
 *
 * terminal close karte hi remove ho jayega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! PERMANENT ALIAS
 * ---------------------------------------------------
 * nano ~/.bashrc
 *
 * file ke end me add karo:
 *
 * alias me='whoami'
 * alias quotes='cat ~/Documents/quotes'
 *
 * save karo
 *
 * reload:
 *
 * source ~/.bashrc
 *
 * ya
 *
 * . ~/.bashrc
 *
 * ab alias har nayi shell session me available rahega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! REMOVE AN ALIAS
 * ---------------------------------------------------
 * unalias me
 *
 * specific alias remove ho jayega
 *
 * sab aliases remove:
 *
 * unalias -a
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! COMMON EXAMPLES
 * ---------------------------------------------------
 * alias ll='ls -l'
 * alias la='ls -a'
 * alias lla='ls -la'
 * alias cls='clear'
 * alias c='clear'
 * alias me='whoami'
 * alias h='history'
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 * Q1. What is an alias in Linux?
 * Ans:
 * command ka shortcut hota hai.
 *
 * Q2. Why do we use aliases?
 * Ans:
 * frequently used ya lengthy commands ko short banane ke liye.
 *
 * Q3. What is the syntax of alias?
 * Ans:
 * alias name='command'
 *
 * Q4. How do you view all aliases?
 * Ans:
 * alias
 *
 * Q5. How do you remove an alias?
 * Ans:
 * unalias alias_name
 *
 * Q6. How do you make an alias permanent?
 * Ans:
 * ~/.bashrc me add karke source ~/.bashrc run karte hain.
 *
 * Q7. Are aliases inherited by child shells?
 * Ans:
 * generally aliases interactive shell configuration files se load hote hain.
 *
 * Q8. Difference between alias and shell script?
 * Ans:
 * alias simple shortcut hai.
 * shell script multiple commands aur logic contain kar sakta hai.
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! MEMORY TIP
 * ---------------------------------------------------
 * alias   -> create shortcut
 * unalias -> remove shortcut
 * alias   -> show aliases
 * ~/.bashrc -> permanent aliases
 */