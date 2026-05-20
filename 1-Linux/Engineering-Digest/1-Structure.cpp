/**
 * ==================================================
 * MASTERING THE STRUCTURE OF A LINUX COMMAND
 * ==================================================
 *
 * A Linux command generally has 3 parts:
 *
 * 1) Command Name
 * 2) Options (Flags)
 * 3) Arguments
 *
 *
 * Syntax:
 *
 * command_name [options] [arguments]
 *
 *
 *
 * ==================================================
 * 1) COMMAND NAME
 * ==================================================
 *
 * - The command name tells Linux what action to perform.
 *
 * Example:
 *
 * cat
 *
 * - 'cat' is a command used to display file content.
 *    it concatenates files and prints outputs
 *
 *
 *
 * ==================================================
 * 2) ARGUMENTS
 * ==================================================
 *
 * - Arguments usually specify:
 *   - file names
 *   - directory names
 *   - input values
 *
 *
 * Example:
 *
 * cat abc.txt
 *
 * Here:
 * - cat       -> command name
 * - abc.txt   -> argument
 *
 * Explanation:
 * - This command displays the content of abc.txt
 *
 *
 * Ye humne ek basic example dekha
 * jahan command + argument use hua.
 *
 *
 *
 * ==================================================
 * 3) OPTIONS (FLAGS)
 * ==================================================
 *
 * - Options command ke behavior ko modify karte hain.
 * - Usually '-' ya '--' se start hote hain.
 *
 *
 * Example:
 *
 * cat -n abc.txt
 *
 * Here:
 * - cat       -> command name
 * - -n        -> option
 * - abc.txt   -> argument
 *
 *
 * Explanation:
 * - '-n' line numbers show karta hai.
 *
 *
 * Example:
 *
 * cat --number abc.txt
 *
 * - '--number' is the long form of '-n'
 *
 *
 *
 * ==================================================
 * EXAMPLE: ls COMMAND
 * ==================================================
 *
 * ls
 *
 * - 'ls' ek Linux command hai
 * - Ye current directory/folder ka content display karti hai.
 *
 *
 * Example:
 *
 * ls
 *
 * - Current folder ke files aur folders dikhayega.
 *
 *
 * Example:
 *
 * ls Documents
 *
 * - Documents folder ka content dikhayega.
 *
 *
 * Note:
 * - ls command bina argument ke bhi chal sakti hai.
 * - Isliye arguments optional ho sakte hain.
 *
 *
 *
 * ==================================================
 * EXAMPLE: ncal COMMAND
 * ==================================================
 *
 * ncal
 *
 * - Ye calendar display karne ke liye use hoti hai.
 *
 *
 * Example:
 *
 * ncal
 *
 * - Current month ka calendar dikhata hai.
 *
 *
 * Example:
 *
 * ncal july 2022
 *
 * - July 2022 ka calendar display karega.
 *
 *
 * Example:
 *
 * ncal november 2000 -w
 *
 * Here:
 * - -w option week numbers show karta hai.
 *
 *
 * Example:
 *
 * ncal november 2000 -w -M
 *
 * Here:
 * - -M week ko Monday se start karta hai.
 *
 *
 *
 * ==================================================
 * MULTIPLE OPTIONS
 * ==================================================
 *
 * - Agar multiple options ho,
 *   toh unhe ek saath bhi likh sakte hain.
 *
 *
 * Example:
 *
 * ls -a -l
 *
 * Isko short form mein likh sakte hain:
 *
 * ls -al
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * - Har command mein options aur arguments hona zaruri nahi hota.
 *
 * - Kuch commands:
 *   - sirf command name se chal jaati hain
 *
 * - Kuch commands:
 *   - options aur arguments dono le sakti hain
 *
 * - Kuch commands:
 *   - sirf arguments leti hain
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * Linux command structure:
 *
 * command_name [options] [arguments]
 *
 *
 * - Command Name:
 *   Kaam batata hai
 *
 * - Options:
 *   Command ka behavior modify karte hain
 *
 * - Arguments:
 *   Kis file/folder/input par command chalegi wo batate hain
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What are the parts of a Linux command?
 *
 * Answer:
 * - Command Name
 * - Options
 * - Arguments
 *
 *
 * 2) What is the role of options in Linux commands?
 *
 * Answer:
 * - Options modify the behavior of a command.
 *
 *
 * 3) Difference between arguments and options?
 *
 * Answer:
 * - Arguments specify input/files/directories
 * - Options change command behavior
 *
 *
 * 4) What does the cat command do?
 *
 * Answer:
 * - It displays file content.
 *
 *
 * 5) What does ls command do?
 *
 * Answer:
 * - It lists files and directories.
 *
 *
 * 6) What is the purpose of ncal command?
 *
 * Answer:
 * - It displays calendars in terminal.
 *
 *
 * 7) What is the difference between:
 *    -n and --number ?
 *
 * Answer:
 * - Both perform the same task.
 * - '-n' is short option
 * - '--number' is long option
 *
 *
 * ==================================================
 */