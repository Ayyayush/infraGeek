/**
 * ==================================================
 * MAN COMMAND IN LINUX
 * ==================================================
 *
 * What is the need of man command?
 *
 * - Linux mein bahut saari commands hoti hain.
 * - Sab commands aur unke options yaad rakhna difficult hota hai.
 *
 * Example:
 * - mkdir kaise use karte hain?
 * - cat command ke options kya hain?
 * - cp command ka syntax kya hai?
 *
 * Aise situations mein 'man' command help karti hai.
 *
 *
 *
 * ==================================================
 * DEFINITION OF MAN COMMAND
 * ==================================================
 *
 * man = Manual
 *
 * - man command kisi bhi Linux command ka
 *   manual page display karti hai.
 *
 * - Isme command ke baare mein detailed information hoti hai.
 *
 *
 * Syntax:
 *
 * man command_name
 *
 *
 *
 * ==================================================
 * BASIC EXAMPLES
 * ==================================================
 *
 * Example:
 *
 * man mkdir
 *
 * - mkdir command ka manual page khulega.
 *
 *
 * Example:
 *
 * man cp
 *
 * - cp command ka manual page khulega.
 *
 *
 * Note:
 * - cp command files/directories copy karne ke liye use hoti hai.
 *
 *
 *
 * ==================================================
 * WHAT INFORMATION DOES man DISPLAY?
 * ==================================================
 *
 * man command generally ye sections dikhata hai:
 *
 * 1) NAME
 *    - Command ka naam aur short description
 *
 * 2) SYNOPSIS
 *    - Command ka syntax
 *
 * 3) DESCRIPTION
 *    - Command detail mein kya karta hai
 *
 * 4) OPTIONS
 *    - Available flags/options
 *
 * 5) EXAMPLES
 *    - Usage examples (some commands mein)
 *
 *
 *
 * ==================================================
 * UNDERSTANDING SYNOPSIS
 * ==================================================
 *
 * Example:
 *
 * cp [OPTION]... SOURCE DEST
 *
 *
 * Explanation:
 *
 * [OPTION]
 * - Square brackets [] ka matlab:
 *   OPTIONAL cheez
 *
 * ...
 * - Three dots (...) ka matlab:
 *   Multiple values allowed
 *
 * SOURCE DEST
 * - Ye mandatory arguments hain
 *
 *
 * Example:
 *
 * cp file1.txt file2.txt Docs/
 *
 * Here:
 * - file1.txt
 * - file2.txt
 *
 * dono SOURCE files hain
 *
 * Docs/ -> DESTINATION
 *
 *
 *
 * ==================================================
 * ncal vs cal
 * ==================================================
 *
 * ncal
 * - New style calendar display karta hai
 *
 *
 * cal
 * - Traditional/old style calendar display karta hai
 *
 *
 * Example:
 *
 * man ncal
 *
 * - ncal command ka manual page khulega
 *
 *
 * Example:
 *
 * man cal
 *
 * - cal command ka manual page khulega
 *
 *
 *
 * ==================================================
 * HOW TO EXIT man PAGE?
 * ==================================================
 *
 * - man page se exit karne ke liye:
 *
 * Press:
 *
 * q
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * - man command Linux learning mein bahut important hai.
 *
 * - Real developers frequently use:
 *   - man
 *   - --help
 *
 * - Sab commands memorize karna necessary nahi hota.
 *
 * - Linux mein documentation padhna important skill hai.
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * - man = Manual command
 *
 * - Kisi bhi command ka detailed documentation dikhata hai
 *
 * - Syntax:
 *
 *   man command_name
 *
 * - Important sections:
 *   - NAME
 *   - SYNOPSIS
 *   - DESCRIPTION
 *   - OPTIONS
 *
 * - q press karke exit kar sakte hain
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What is the purpose of man command?
 *
 * Answer:
 * - It displays the manual/documentation of Linux commands.
 *
 *
 * 2) What is the syntax of man command?
 *
 * Answer:
 *
 * man command_name
 *
 *
 * 3) What does SYNOPSIS section contain?
 *
 * Answer:
 * - It contains command syntax/usage.
 *
 *
 * 4) What do square brackets [] mean in Linux syntax?
 *
 * Answer:
 * - They represent optional arguments/options.
 *
 *
 * 5) What does ... mean in Linux command syntax?
 *
 * Answer:
 * - It means multiple values are allowed.
 *
 *
 * 6) How do you exit from a man page?
 *
 * Answer:
 * - Press q
 *
 *
 * 7) Difference between cal and ncal?
 *
 * Answer:
 * - cal shows traditional calendar format
 * - ncal shows new/alternative calendar format
 *
 *
 * ==================================================
 */