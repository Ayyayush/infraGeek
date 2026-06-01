/**
 * ! BASHRC IN LINUX
 *
 * Jab bhi naya terminal open hota hai,
 * shell kuch startup files execute karti hai.
 *
 * Bash shell ke liye sabse common startup file:
 *
 * ~/.bashrc
 *
 *
 * ! PROBLEM
 *
 * Maan lo terminal mein:
 *
 * export PS1="type: "
 *
 * Output prompt:
 *
 * type:
 *
 * Ab terminal close karke dobara open karoge
 * toh ye change gayab ho jayega.
 *
 * Kyunki export sirf current shell session ke liye tha.
 *
 *
 * ! PERSISTENT CHANGES
 *
 * Agar hum chahte hain ki terminal restart hone ke baad bhi
 * changes bane rahein,
 * toh unhe .bashrc file mein likhna padta hai.
 *
 *
 * ! OPEN BASHRC FILE
 *
 * nano ~/.bashrc
 *
 * Ya:
 *
 * nano .bashrc
 *
 * (agar home directory mein ho)
 *
 *
 * Example:
 *
 * export PS1="type: "
 *
 * Is line ko .bashrc mein add kar do.
 *
 *
 * ! WHAT HAPPENS WHEN TERMINAL OPENS?
 *
 * Jab naya terminal open hota hai:
 *
 * - Bash shell start hoti hai
 * - .bashrc file execute hoti hai
 * - Uske andar likhe commands automatically run hote hain
 *
 *
 * ! APPLY CHANGES WITHOUT RESTARTING TERMINAL
 *
 * Normally:
 *
 * - Terminal close
 * - Terminal reopen
 *
 * Karna padta hai.
 *
 *
 * Lekin bina terminal restart kiye bhi changes apply kar sakte hain.
 *
 *
 * ! SOURCE COMMAND
 *
 * source ~/.bashrc
 *
 * Ya:
 *
 * source .bashrc
 *
 *
 * ! WHAT DOES SOURCE DO?
 *
 * source command current shell mein file execute karta hai.
 *
 * Isliye changes immediately apply ho jaate hain.
 *
 *
 * Equivalent command:
 *
 * . ~/.bashrc
 *
 * (dot command bhi source jaisa hi kaam karta hai)
 *
 *
 * ! COMMON USES OF .bashrc
 *
 * - Custom prompt (PS1)
 * - Environment variables
 * - Aliases
 * - Functions
 * - Custom paths
 *
 *
 * Example:
 *
 * alias ll='ls -alh'
 *
 * Ab har terminal mein:
 *
 * ll
 *
 * automatically kaam karega.
 *
 *
 * ! IMPORTANT COMMANDS
 *
 * nano ~/.bashrc
 * - .bashrc edit karta hai.
 *
 * source ~/.bashrc
 * - Current shell mein .bashrc reload karta hai.
 *
 * export
 * - Environment variable set karta hai.
 *
 * PS1
 * - Terminal prompt customize karta hai.
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What is .bashrc in Linux?
 * Answer:
 * - A startup configuration file for Bash shell.
 *
 * 2) When is .bashrc executed?
 * Answer:
 * - When a new Bash terminal session starts.
 *
 * 3) Why do we use .bashrc?
 * Answer:
 * - To make shell customizations persistent.
 *
 * 4) What is the purpose of PS1?
 * Answer:
 * - It defines the shell prompt.
 *
 * 5) What does the following command do?
 *    export PS1="type: "
 *
 * Answer:
 * - Changes the terminal prompt for the current session.
 *
 * 6) Why do terminal customizations disappear after closing the terminal?
 * Answer:
 * - Because they were applied only to the current shell session.
 *
 * 7) How can you make terminal customizations permanent?
 * Answer:
 * - Add them to ~/.bashrc.
 *
 * 8) What does source .bashrc do?
 * Answer:
 * - Reloads and executes .bashrc in the current shell.
 *
 * 9) Is restarting the terminal necessary after editing .bashrc?
 * Answer:
 * - No, source .bashrc can apply changes immediately.
 *
 * 10) What is the difference between executing a script and sourcing it?
 * Answer:
 * - Executing runs it in a new shell.
 * - Sourcing runs it in the current shell.
 *
 * 11) What is the shortcut equivalent of source .bashrc?
 * Answer:
 *
 * . .bashrc
 *
 * 12) Name some common things stored in .bashrc.
 * Answer:
 * - Aliases
 * - Environment variables
 * - Functions
 * - Prompt settings
 * - PATH modifications
 */