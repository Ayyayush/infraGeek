/**
 * ! MASTERING BASH IN LINUX
 *
 * ---------------------------------------------------
 * ! WHAT IS A SHELL ?
 * ---------------------------------------------------
 * shell ek Command Line Interface (CLI) hota hai
 * jo user ko Operating System ya Kernel ke saath interact karne ki permission deta hai
 * user commands type karta hai
 * shell un commands ko interpret karta hai
 * aur kernel ko execute karne ke liye bhejta hai
 *
 * shell user aur operating system ke beech mediator ka kaam karta hai
 *
 * Responsibilities of Shell:
 * user se input lena
 * commands interpret karna
 * kernel ko request bhejna
 * output user ko dikhana
 * scripting support provide karna
 * task automation allow karna
 *
 * Example:
 * ls
 * pwd
 * mkdir project
 *
 * yeh commands pehle shell receive karta hai
 * phir kernel ke through execute hoti hain
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! WHY DO WE NEED A SHELL ?
 * ---------------------------------------------------
 * operating system ke saath communicate karne ke liye
 * files manage karne ke liye
 * processes control karne ke liye
 * automation scripts likhne ke liye
 * system administration tasks perform karne ke liye
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! TYPES OF SHELLS
 * ---------------------------------------------------
 * shells ko broadly 2 groups mein classify kar sakte hain:
 * 1. Unix/Linux Shells
 * 2. Windows Shells
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! UNIX / LINUX SHELLS
 * ---------------------------------------------------
 * Bourne Shell (sh)
 * sabse purana Unix shell
 * Stephen Bourne ne develop kiya tha
 *
 * Bourne Again Shell (bash)
 * GNU project ka shell
 * Bourne Shell ka enhanced version
 * Linux distributions mein sabse popular shell
 *
 * Korn Shell (ksh)
 * David Korn ne develop kiya tha
 * scripting aur performance improvements provide karta hai
 *
 * C Shell (csh)
 * syntax C language jaisi hoti hai
 * BSD systems mein kaafi popular tha
 *
 * Z Shell (zsh)
 * modern shell
 * bash compatible
 * advanced features provide karta hai:
 * auto completion
 * plugins
 * themes
 * command suggestions
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! WINDOWS SHELLS
 * ---------------------------------------------------
 * Command Prompt (cmd.exe)
 * traditional Windows shell
 *
 * PowerShell
 * Microsoft ka modern shell
 * object-oriented scripting support karta hai
 * administration aur automation ke liye use hota hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! WHAT OPENS WHEN WE TYPE "cmd" IN WINDOWS ?
 * ---------------------------------------------------
 * Run dialog mein "cmd" type karne par
 * Command Prompt open hota hai
 *
 * executable file:
 * cmd.exe
 *
 * location:
 * C:\Windows\System32\cmd.exe
 *
 * yeh Windows ka traditional command-line shell hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! DEFAULT SHELL IN UBUNTU
 * ---------------------------------------------------
 * Ubuntu ka default shell:
 * bash
 *
 * check current shell:
 *
 * echo $SHELL
 *
 * Example Output:
 *
 * /bin/bash
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CHECK AVAILABLE SHELLS
 * ---------------------------------------------------
 * cat /etc/shells
 *
 * Example Output:
 *
 * /bin/sh
 * /bin/bash
 * /bin/dash
 * /bin/zsh
 *
 * system mein installed login shells ki list show hoti hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 * Q1. What is a shell?
 * Ans:
 * shell user aur operating system ke beech interface hai
 * jo commands ko interpret karke execute karwata hai.
 *
 * Q2. What is the role of a shell?
 * Ans:
 * user commands ko process karna aur kernel tak pahunchana.
 *
 * Q3. What is the difference between shell and kernel?
 * Ans:
 * shell interface hai.
 * kernel operating system ka core component hai.
 *
 * Q4. What is Bash?
 * Ans:
 * Bourne Again Shell.
 * GNU project ka most popular Linux shell.
 *
 * Q5. What is the default shell in Ubuntu?
 * Ans:
 * bash
 *
 * Q6. How do you check the current shell?
 * Ans:
 * echo $SHELL
 *
 * Q7. Name some Unix/Linux shells.
 * Ans:
 * sh
 * bash
 * ksh
 * csh
 * zsh
 *
 * Q8. Name Windows shells.
 * Ans:
 * cmd.exe
 * PowerShell
 *
 * Q9. What is Zsh?
 * Ans:
 * advanced shell with plugins, themes and auto-completion.
 *
 * Q10. What command lists all available shells?
 * Ans:
 * cat /etc/shells
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! MEMORY TIP
 * ---------------------------------------------------
 * Shell  -> User Interface
 * Kernel -> OS Core
 * Bash   -> Default Ubuntu Shell
 * Zsh    -> Modern Advanced Shell
 * cmd    -> Windows Command Prompt
 * PowerShell -> Windows Automation Shell
 */