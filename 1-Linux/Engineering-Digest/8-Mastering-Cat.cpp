/**
 * ! MASTERING CAT COMMAND OF LINUX
 * it is a very basic command of linux we should know it
 * man cat krke dekhe toh show karega:
 * concatenate files and print standard output
 *
 *
 * ! BASIC USAGE
 * nano a.txt krke file mein gye aur text likha
 * nano b.txt krke bhi same kiya
 *
 * now:
 * cat a.txt b.txt
 *
 * - dono files ka content concatenate/display ho jayega
 *
 *
 * ! REDIRECTION USING >
 * cat a.txt b.txt > c.txt
 *
 * > ye symbol redirection ka hota hai
 * iska matlab:
 * - command ka output c.txt mein store kar do
 *
 *
 * cat a.txt > c.txt
 * - a.txt ka content c.txt mein copy hoga
 * - overwrite hoga purana content
 *
 *
 * Example:
 * cat b.txt
 *
 * maan lo isme xyz tha
 *
 * now:
 * cat b.txt > c.txt
 *
 * - ab c.txt mein xyz overwrite ho jayega
 *
 *
 * ! APPEND USING >>
 * cat a.txt >> c.txt
 *
 * - overwrite nahi hoga
 * - content append hoga existing content ke end mein
 *
 *
 * ! USING cat WITHOUT FILE
 * cat
 *
 * abc
 * abc
 *
 * - jo input denge wahi echo/output karega
 *
 *
 * ! TAKING INPUT INTO FILE
 * cat > a.txt
 *
 * - ab input maangega
 *
 * Example input:
 * hello there
 * how are you
 *
 * ctrl + d
 *
 * - input end ho jayega
 * - content save ho jayega
 *
 *
 * now:
 * cat a.txt
 *
 * - wahi content show karega
 *
 *
 * ! APPENDING INPUT INTO FILE
 * cat >> a.txt
 *
 * Example:
 * ok
 * ok
 * ok
 *
 * ctrl + d
 *
 * - saara content append ho jayega
 *
 *
 * ! IMPORTANT TERMINAL SHORTCUTS IN LINUX
 *
 * ctrl + c
 * - SIGINT signal bhejta hai
 * - Running foreground process ko interrupt/terminate karta hai
 * - Running command ko stop karne ke liye use hota hai
 *
 * Example:
 * ping google.com
 *
 * ctrl + c
 *
 * - ping stop ho jayega
 *
 *
 * ctrl + d
 * - EOF (End Of File / End Of Input)
 * - Input stream finish karta hai
 *
 * Example:
 * cat > a.txt
 *
 * hello
 * world
 * ctrl + d
 *
 * - input save ho jayega
 *
 *
 * ctrl + x
 * - Mostly editors mein exit shortcut hota hai
 * - Specially nano editor mein:
 *
 * ctrl + x
 * - nano editor se exit
 *
 * NOTE:
 * - ctrl + x koi universal Linux terminal exit shortcut nahi hai
 * - Ye application/editor specific hota hai
 *
 *
 * ! COPYING COMMANDS / SHORTCUTS
 *
 * ctrl + shift + c
 * - terminal se copy
 *
 * ctrl + shift + v
 * - terminal mein paste
 *
 *
 * ! NANO EDITOR COPY/CUT/PASTE
 *
 * ctrl + k
 * - cut current line
 *
 * alt + ^
 * - copy selected text
 *
 * ctrl + u
 * - paste text
 *
 *
 * ! IMPORTANT DIFFERENCE
 *
 * ctrl + c
 * - process interrupt
 *
 * ctrl + x
 * - application/editor exit shortcut
 *
 * ctrl + d
 * - end of input/logout
 *
 *
 * ! ECHO COMMAND
 * echo command text print/output karne ke liye use hota hai
 *
 * Syntax:
 * echo text
 *
 * Example:
 * echo hello
 *
 * - terminal pe hello print hoga
 *
 * NOTE:
 * - later jab commands chaining aur scripting padhenge
 *   tab echo aur useful lagega
 *
 *
 * ! TAC COMMAND
 * let's take another example:
 *
 * cat > foods.txt
 *
 * pizza
 * roll
 * cake
 * cookies
 *
 * ctrl + d
 *
 * now:
 * cat foods.txt
 *
 * - content same order mein show karega
 *
 *
 * reverse order mein dekhna ho toh:
 * tac foods.txt
 *
 * - reverse order mein output dega
 *
 *
 * ! REV COMMAND
 * rev command line ke characters reverse karta hai
 *
 * Example:
 * echo hello | rev
 *
 * Output:
 * olleh
 *
 *
 * ! IMPORTANT NOTES
 * cat
 * - display file content
 * - concatenate files
 * - take input
 * - append/overwrite using redirection
 *
 * >
 * - overwrite redirection
 *
 * >>
 * - append redirection
 *
 * tac
 * - reverse line order
 *
 * rev
 * - reverse characters in line
 *
 *
 * ! SUMMARY OF THIS LECTURE
 * Commands learned:
 * cat a.txt
 * cat a.txt b.txt
 * cat a.txt > c.txt
 * cat a.txt >> c.txt
 * cat > a.txt
 * cat >> a.txt
 * tac foods.txt
 * rev
 * echo hello
 *
 * Concepts learned:
 * - concatenation
 * - redirection
 * - append vs overwrite
 * - EOF
 * - terminal input handling
 * - reverse line order
 * - reverse characters
 *
 *
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 *
 * 1) What does cat command do?
 * Answer:
 * - Displays and concatenates file contents.
 *
 *
 * 2) What is the meaning of cat?
 * Answer:
 * - Concatenate.
 *
 *
 * 3) What does:
 * cat a.txt b.txt
 * do?
 *
 * Answer:
 * - Displays combined content of both files.
 *
 *
 * 4) What does > mean in Linux?
 * Answer:
 * - Output redirection with overwrite.
 *
 *
 * 5) What does >> mean in Linux?
 * Answer:
 * - Output redirection with append.
 *
 *
 * 6) Difference between > and >> ?
 * Answer:
 * - > overwrites content
 * - >> appends content
 *
 *
 * 7) What does:
 * cat > a.txt
 * do?
 *
 * Answer:
 * - Takes user input and stores it into a.txt
 *
 *
 * 8) What does ctrl + d do?
 * Answer:
 * - Marks end of input (EOF).
 *
 *
 * 9) What does ctrl + c do?
 * Answer:
 * - Sends SIGINT signal to interrupt running process.
 *
 *
 * 10) What does ctrl + x do?
 * Answer:
 * - Used to exit editors like nano.
 *
 *
 * 11) What does tac command do?
 * Answer:
 * - Displays file content in reverse line order.
 *
 *
 * 12) What does rev command do?
 * Answer:
 * - Reverses characters of each line.
 *
 *
 * 13) What does echo command do?
 * Answer:
 * - Prints text/output to terminal.
 *
 *
 * 14) Difference between tac and rev?
 * Answer:
 * - tac reverses line order
 * - rev reverses characters
 *
 */