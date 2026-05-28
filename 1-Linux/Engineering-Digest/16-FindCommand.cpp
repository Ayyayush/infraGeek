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
 *
 * Example:
 *
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
 *
 *
 * ! WILDCARD PATTERNS
 *
 * -name wildcard patterns accept karta hai
 *
 *
 * *
 * - zero ya multiple characters match karta hai
 *
 *
 * ?
 * - exactly one character match karta hai
 *
 *
 * []
 * - enclosed characters me se koi ek match karta hai
 *
 *
 * [!]
 * - agar first character ho toh negation karta hai
 *
 *
 * Examples:
 *
 * find . -name "*.txt"
 * - saari txt files
 *
 *
 * find . -name "a?.txt"
 * - a1.txt
 * - ab.txt
 *
 *
 * find . -name "[abc].txt"
 * - a.txt
 * - b.txt
 * - c.txt
 *
 *
 * ! CASE INSENSITIVE SEARCH
 *
 * find . -iname "hello.txt"
 *
 * - uppercase/lowercase ignore karega
 *
 *
 * find . -name "*resume*"
 *
 * - case sensitive
 *
 *
 * find . -iname "*Resume*"
 *
 * - case insensitive
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
 * ! FIND FILES BASED ON TYPE
 *
 * cd abc
 * ls
 * touch a b c d
 *
 *
 * find
 *
 * - current directory ki saari files/directories show hongi
 *
 *
 * find . -type f
 *
 * - sirf files show karega
 *
 *
 * find . -type d
 *
 * - sirf directories show karega
 *
 *
 * find . -type f -iname "*journal*"
 *
 * - journal naam wali files search karega
 *
 *
 * ! FIND FILES BASED ON SIZE
 *
 * find /path -size 100M
 *
 * - exactly 100MB
 *
 *
 * find /path -size +100M
 *
 * - 100MB se badi files
 *
 *
 * find /path -size -50k
 *
 * - 50KB se chhoti files
 *
 *
 * ! FIND FILES BASED ON TIME
 *
 * ! modification time
 *
 * find /path -mtime -7
 * - last 7 days me modified files
 *
 *
 * find /path -mtime +7
 * - 7 days se purani modified files
 *
 *
 * find /path -mtime 7
 * - exactly 7 days old modified files
 *
 *
 * ! other time options
 *
 * -mmin
 * - modified minutes
 *
 * -amin
 * - access minutes
 *
 * -atime
 * - access time
 *
 * -cmin
 * - change minutes
 *
 * -ctime
 * - inode/status change time
 *
 *
 * Example:
 *
 * find . -size +200M -atime -30
 *
 * - 200MB se badi aur last 30 days me accessed files
 *
 *
 * ! COMBINING WITH LOGICAL OPERATORS
 *
 * find /path -type f -name "*.txt" -and -size +1M
 *
 * - txt files jo 1MB se badi hain
 *
 *
 * find /path \( -name "*.txt" -or -name "*.pdf" \)
 *
 * - txt ya pdf files
 *
 *
 * find /path ! -name "*.txt"
 *
 * - txt files ko exclude karega
 *
 *
 * find . \( -size +200M -and -atime +30 \) -or -size +1G
 *
 * - ya toh 200MB+ aur 30 din purani
 * - ya 1GB se badi
 *
 *
 * find . \( -size +200M -and -atime +30 \) -not -size +1G
 *
 * - 200MB+ aur 30 din purani
 * - but 1GB se badi nahi
 *
 *
 * ! LOCATE EMPTY FILES/DIRECTORIES
 *
 * find . -empty
 *
 * - empty files/directories search karega
 *
 *
 * find . -type f -empty
 *
 * - sirf empty files
 *
 *
 * find . -type d -empty
 *
 * - sirf empty directories
 *
 *
 * ! EXECUTE COMMANDS USING -exec
 *
 * find . -name "*.txt" -exec ls -lh {} \;
 *
 *
 * Explanation:
 *
 * -exec
 * - found file pe command run karta hai
 *
 *
 * {}
 * - found file/directory ka placeholder
 *
 *
 * \;
 * - command termination symbol
 *
 *
 * ! DELETE USING -exec
 *
 * find . -empty -exec rm -r {} \;
 *
 * - empty files/directories remove karega
 *
 *
 * ! USING file COMMAND WITH find
 *
 * find . -exec file {} \;
 *
 * - har found file ka type batayega
 *
 *
 * ! USING echo WITH find
 *
 * find . -exec echo {} \;
 *
 * - found file names print karega
 *
 *
 * ! xargs
 *
 * find . | xargs echo
 *
 * - find ka output xargs ko input banega
 *
 *
 * ! DIFFERENCE BETWEEN -exec AND xargs
 *
 * -exec
 * - har file pe individually command run karta hai
 *
 *
 * xargs
 * - multiple arguments ek saath pass karta hai
 * - usually faster hota hai
 *
 *
 * ! LIMITATION OF xargs
 *
 * - spaces/newlines wali filenames me issues ho sakte hain
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
 *
 * grep
 * - file content search karta hai
 *
 *
 * ! SEARCH BY PERMISSION
 *
 * find . -perm 777
 *
 * - specific permissions wali files search karega
 *
 *
 * ! SEARCH AND DELETE
 *
 * find . -name "*.tmp" -delete
 *
 * - saari tmp files delete karega
 *
 *
 * ! IMPORTANT NOTES
 *
 * -name
 * - case sensitive search
 *
 *
 * -iname
 * - case insensitive search
 *
 *
 * -type f
 * - files
 *
 *
 * -type d
 * - directories
 *
 *
 * -delete
 * - matched files delete karta hai
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * find .
 * find . -name "*.txt"
 * find . -iname "hello.txt"
 * find . -type f
 * find . -type d
 * find . -size +100M
 * find . -mtime -7
 * find . -empty
 * find . -exec ls -lh {} \;
 * find . | xargs echo
 *
 *
 * Concepts learned:
 *
 * - recursive searching
 * - wildcard matching
 * - file vs directory search
 * - case sensitive vs insensitive search
 * - searching by size
 * - searching by time
 * - logical operators
 * - executing commands using -exec
 * - xargs usage
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What is the purpose of find command?
 * Answer:
 * - Used to search files and directories.
 *
 *
 * 2) What does:
 * find . -type f
 * do?
 *
 * Answer:
 * - Searches only files.
 *
 *
 * 3) Difference between -name and -iname ?
 * Answer:
 *
 * -name
 * - case sensitive
 *
 * -iname
 * - case insensitive
 *
 *
 * 4) What does:
 * find . -empty
 * do?
 *
 * Answer:
 * - Searches empty files/directories.
 *
 *
 * 5) What does:
 * find . -mtime -7
 * do?
 *
 * Answer:
 * - Finds files modified within last 7 days.
 *
 *
 * 6) What is the purpose of -exec ?
 * Answer:
 * - Executes command on matched files.
 *
 *
 * 7) What does {} represent in -exec ?
 * Answer:
 * - Placeholder for found file/directory.
 *
 *
 * 8) Difference between find and grep?
 * Answer:
 *
 * - find searches filesystem
 * - grep searches content
 *
 *
 * 9) Difference between -exec and xargs ?
 * Answer:
 *
 * -exec runs command individually
 * - xargs passes multiple arguments together
 *
 *
 * 10) What does:
 * find . -delete
 * do?
 *
 * Answer:
 * - Deletes matched files/directories.
 *
 */