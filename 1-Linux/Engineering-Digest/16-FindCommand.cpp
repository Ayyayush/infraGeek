/**
 * ! FIND COMMAND IN LINUX
 *
 * find command Linux mein files aur directories search karne ke liye use hota hai
 *
 * ye bahut powerful command hai
 * multiple filters ke saath searching kar sakte hain
 *
 *
 * ! BASIC SYNTAX
 *
 * find [path] [options] [expression]
 *
 * Example:
 * find .
 *
 * - current directory aur uske andar ki saari files/directories show karega
 *
 *
 * ! SEARCH BY FILE NAME
 *
 * find . -name "a.txt"
 *
 * - current directory se recursively a.txt search karega
 * Example Output:
 * ./Documents/a.txt
 *
 *
 * ! CASE INSENSITIVE SEARCH
 *
 * find . -iname "hello.txt"
 *
 * - uppercase/lowercase ignore karega
 *
 *
 * Example:
 *
 * HELLO.txt
 * hello.txt
 * HeLLo.txt
 *
 * - sab match ho jayenge
 *
 *
 * ! SEARCH ONLY DIRECTORIES
 *
 * find . -type d
 *
 * - sirf directories show karega
 *
 *
 * ! SEARCH ONLY FILES
 *
 * find . -type f
 *
 * - sirf files show karega
 *
 *
 * ! SEARCH INSIDE SPECIFIC DIRECTORY
 *
 * find Documents/ -name "notes.txt"
 *
 * - sirf Documents folder ke andar search karega
 *
 *
 * ! SEARCH USING WILDCARDS
 *
 * find . -name "*.txt"
 *
 * - saari .txt files search karega
 *
 *
 * Example:
 *
 * abc.txt
 * notes.txt
 * hello.txt
 *
 *
 * ! SEARCH EMPTY FILES
 *
 * find . -empty
 *
 * - empty files/directories search karega
 *
 *
 * ! SEARCH BY SIZE
 *
 * find . -size +10M
 *
 * - 10MB se badi files search karega
 *
 *
 * find . -size -1M
 *
 * - 1MB se chhoti files search karega
 *
 *
 * ! SEARCH BY PERMISSION
 *
 * find . -perm 777
 *
 * - specific permission wali files search karega
 *
 *
 * ! SEARCH AND DELETE
 *
 * find . -name "*.tmp" -delete
 *
 * - saari .tmp files delete kar dega
 *
 *
 * ! EXECUTE COMMAND ON FOUND FILES
 *
 * find . -name "*.txt" -exec ls -lh {} \;
 *
 * Explanation:
 *
 * - {} found file ko represent karta hai
 * - \; command terminate karta hai
 *
 *
 * ! FIND WITH GREP
 *
 * find . -name "*.txt" | grep "notes"
 *
 * - pehle txt files search hongi
 * - fir grep notes wali lines filter karega
 *
 *
 * ! IMPORTANT DIFFERENCE
 *
 * find
 * - filesystem search karta hai
 *
 * grep
 * - file content search karta hai
 *
 *
 * ! IMPORTANT NOTES
 *
 * -name
 * - case sensitive search
 *
 * -iname
 * - case insensitive search
 *
 * -type f
 * - files
 *
 * -type d
 * - directories
 *
 * -delete
 * - found files delete karta hai
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * find .
 * find . -name "a.txt"
 * find . -iname "hello.txt"
 * find . -type f
 * find . -type d
 * find . -name "*.txt"
 * find . -empty
 * find . -size +10M
 * find . -name "*.tmp" -delete
 *
 *
 * Concepts learned:
 * - recursive searching
 * - wildcard searching
 * - file vs directory search
 * - case sensitive search
 * - case insensitive search
 * - search by size
 * - search and delete
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What is the purpose of find command?
 * Answer:
 * - Used to search files and directories.
 *
 *
 * 2) Syntax of find command?
 * Answer:
 *
 * find [path] [options] [expression]
 *
 *
 * 3) What does:
 * find . -type f
 * do?
 *
 * Answer:
 * - Searches only files.
 *
 *
 * 4) What does:
 * find . -type d
 * do?
 *
 * Answer:
 * - Searches only directories.
 *
 *
 * 5) Difference between -name and -iname ?
 * Answer:
 *
 * -name
 * - case sensitive
 *
 * -iname
 * - case insensitive
 *
 *
 * 6) What does:
 * find . -name "*.txt"
 * do?
 *
 * Answer:
 * - Searches all .txt files.
 *
 *
 * 7) What does:
 * find . -empty
 * do?
 *
 * Answer:
 * - Searches empty files/directories.
 *
 *
 * 8) What does:
 * find . -delete
 * do?
 *
 * Answer:
 * - Deletes matched files/directories.
 *
 *
 * 9) Difference between find and grep?
 * Answer:
 *
 * - find searches files/directories
 * - grep searches text/content
 *
 *
 * 10) What does:
 * find . -exec
 * do?
 *
 * Answer:
 * - Executes command on found files.
 *
 */