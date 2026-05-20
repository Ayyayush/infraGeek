/**
 * ==================================================
 * pwd COMMAND IN LINUX
 * ==================================================
 *
 * pwd = Print Working Directory
 *
 * - Ye command current working directory ka path display karti hai.
 *
 *
 * Syntax:
 *
 * pwd
 *
 *
 *
 * ==================================================
 * BASIC UNDERSTANDING
 * ==================================================
 *
 * Maan lo hum kisi folder ke andar hain
 * aur dekhna chahte hain ki:
 *
 * - Hum currently kis directory mein hain
 *
 * Tab hum:
 *
 * pwd
 *
 * use karte hain.
 *
 *
 *
 * ==================================================
 * ls COMMAND RECAP
 * ==================================================
 *
 * Agar hume current folder ke andar ka content dekhna ho:
 *
 * ls
 *
 * - Ye files aur folders display karta hai.
 *
 *
 *
 * ==================================================
 * cd COMMAND
 * ==================================================
 *
 * cd = Change Directory
 *
 * - Iska use ek folder se dusre folder mein jane ke liye hota hai.
 *
 *
 * Example:
 *
 * cd Desktop
 *
 * - Desktop folder ke andar chala jayega.
 *
 *
 * Example:
 *
 * cd Test/
 *
 * - Test folder ke andar move karega.
 *
 *
 *
 * ==================================================
 * USING man WITH COMMANDS
 * ==================================================
 *
 * Example:
 *
 * man pwd
 *
 * - pwd command ka manual page khulega.
 *
 *
 * Example:
 *
 * man ls
 *
 * - ls command ka manual page khulega.
 *
 *
 *
 * ==================================================
 * HIDDEN FILES AND FOLDERS
 * ==================================================
 *
 * ls -a
 *
 * - '-a' ka matlab:
 *   all files
 *
 * - Ye hidden files/folders bhi show karta hai.
 *
 *
 * Linux mein:
 * - Jo files '.' (dot) se start hoti hain
 *   wo hidden hoti hain.
 *
 *
 *
 * ==================================================
 * SPECIAL SYMBOLS
 * ==================================================
 *
 * 1) Single Dot (.)
 *
 * .
 *
 * - Current directory ka reference hota hai.
 *
 *
 * Example:
 *
 * cd .
 *
 * - Current directory mein hi rahoge.
 *
 *
 *
 * 2) Double Dot (..)
 *
 * ..
 *
 * - Parent directory ka reference hota hai.
 *
 *
 * Example:
 *
 * cd ..
 *
 * - Ek directory piche chale jaoge.
 *
 *
 *
 * ==================================================
 * ls WITH MULTIPLE OPTIONS
 * ==================================================
 *
 * Example:
 *
 * ls -al
 *
 * Here:
 * -a -> hidden files show karega
 * -l -> long listing format
 *
 *
 * Multiple options ko group bhi kar sakte hain.
 *
 *
 *
 * ==================================================
 * HUMAN READABLE FORMAT
 * ==================================================
 *
 * ls -alh
 *
 * Here:
 * -h -> human readable format
 *
 * Example:
 * - KB
 * - MB
 * - GB
 *
 * mein file sizes show hongi.
 *
 *
 *
 * ==================================================
 * SORTING FILES
 * ==================================================
 *
 * Example:
 *
 * ls -lt
 *
 * - Files ko modification time ke basis par sort karega.
 *
 *
 * Long form:
 *
 * ls -l --sort=time
 *
 *
 * Reverse order:
 *
 * ls -l --sort=time -r
 *
 * -r -> reverse order
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * --srot=time
 *
 * likha tha, correct form:
 *
 * --sort=time
 *
 *
 *
 * ==================================================
 * LISTING CONTENT OF ANOTHER FOLDER
 * ==================================================
 *
 * Example:
 *
 * ls Test/
 *
 * - Test folder ke content ko display karega
 *   bina us folder ke andar jaaye.
 *
 *
 *
 * ==================================================
 * ROOT DIRECTORY
 * ==================================================
 *
 * Linux ki sabse top-most/parent directory:
 *
 * Root Directory
 *
 * Isko represent karte hain:
 *
 * /
 *
 *
 * Example:
 *
 * cd /
 *
 * - Root directory mein le jayega.
 *
 *
 * Example:
 *
 * ls
 *
 * - Root directory ke folders show karega.
 *
 *
 *
 * ==================================================
 * HOME DIRECTORY
 * ==================================================
 *
 * Home directory:
 * - User ka personal folder hota hai.
 *
 * Example:
 *
 * /home/username
 *
 *
 * Shortcut:
 *
 * ~
 *
 *
 * Example:
 *
 * cd ~
 *
 * - Home directory mein le jayega.
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * "pwd se home directory pe aa jayenge"
 *
 * Ye incorrect tha.
 *
 * Correct:
 * - pwd sirf current path print karta hai
 * - Home directory mein jane ke liye:
 *
 *   cd ~
 *
 * use karte hain.
 *
 *
 *
 * ==================================================
 * ABSOLUTE PATH vs RELATIVE PATH
 * ==================================================
 *
 * 1) Absolute Path
 *
 * - Complete path from root directory.
 *
 * Example:
 *
 * cd /home/ayush/Documents
 *
 *
 *
 * 2) Relative Path
 *
 * - Current directory ke respect mein path.
 *
 * Example:
 *
 * cd Documents
 *
 * - Current directory ke andar Documents folder mein jayega.
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * - pwd:
 *   current directory batata hai
 *
 * - ls:
 *   files/folders list karta hai
 *
 * - cd:
 *   directory change karta hai
 *
 * - .:
 *   current directory
 *
 * - ..:
 *   parent directory
 *
 * - /:
 *   root directory
 *
 * - ~:
 *   home directory shortcut
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * Important commands:
 *
 * pwd
 * ls
 * cd
 *
 *
 * Important concepts:
 *
 * - Hidden files
 * - Root directory
 * - Home directory
 * - Relative path
 * - Absolute path
 * - Parent directory
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What does pwd command do?
 *
 * Answer:
 * - It prints the current working directory.
 *
 *
 * 2) What is the purpose of ls command?
 *
 * Answer:
 * - It lists files and directories.
 *
 *
 * 3) What does cd command do?
 *
 * Answer:
 * - It changes the current directory.
 *
 *
 * 4) What does '.' represent in Linux?
 *
 * Answer:
 * - Current directory.
 *
 *
 * 5) What does '..' represent in Linux?
 *
 * Answer:
 * - Parent directory.
 *
 *
 * 6) What is the root directory in Linux?
 *
 * Answer:
 * - The top-most parent directory represented by '/'.
 *
 *
 * 7) What is the shortcut for home directory?
 *
 * Answer:
 * - ~
 *
 *
 * 8) Difference between absolute and relative path?
 *
 * Answer:
 * - Absolute path starts from root (/)
 * - Relative path starts from current directory
 *
 *
 * 9) What does ls -a do?
 *
 * Answer:
 * - Shows hidden files and folders.
 *
 *
 * 10) What does ls -l do?
 *
 * Answer:
 * - Displays files in long listing format.
 *
 *
 * ==================================================
 */