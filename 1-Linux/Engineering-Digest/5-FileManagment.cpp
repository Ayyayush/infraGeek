/**
 * ==================================================
 * FILE MANAGEMENT IN LINUX
 * ==================================================
 *
 * Linux mein hum GUI/File Explorer se bhi
 * files aur folders create kar sakte hain.
 *
 * Lekin Linux ka real power:
 * terminal commands mein hota hai.
 *
 *
 *
 * ==================================================
 * ! mkdir COMMAND
 * ==================================================
 *
 * mkdir = Make Directory
 *
 * - New directories/folders create karne ke liye use hota hai.
 *
 *
 * Syntax:
 *
 * mkdir folder_name
 *
 *
 *
 * ==================================================
 * BASIC EXAMPLE
 * ==================================================
 *
 * Example:
 *
 * mkdir movies
 *
 * - 'movies' naam ka folder create ho jayega.
 *
 *
 * Example:
 *
 * cd movies
 *
 * - movies folder ke andar move honge.
 *
 *
 *
 * ==================================================
 * MULTIPLE DIRECTORIES
 * ==================================================
 *
 * Example:
 *
 * mkdir comedy action horror
 *
 * - Ek hi command mein multiple folders create ho jayenge.
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * aciton
 * mhorror
 *
 * likha tha, corrected:
 *
 * action
 * horror
 *
 *
 *
 * ==================================================
 * NESTED DIRECTORIES
 * ==================================================
 *
 * Example:
 *
 * mkdir kids/animation
 *
 * Error aa sakta hai because:
 * - 'kids' folder abhi exist nahi karta.
 *
 *
 * Solution:
 *
 * mkdir -p kids/animation
 *
 *
 * -p means:
 * - parent directories bhi automatically create karo.
 *
 *
 * Example:
 *
 * mkdir -p kids/animation/2010/blockbusters
 *
 * - Ek ke andar ek multiple folders create ho jayenge.
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * mkdir -p kids/mkdir
 *
 * probably typo tha.
 *
 *
 *
 * ==================================================
 * ! touch COMMAND
 * ==================================================
 *
 * touch command:
 *
 * - New empty file create kar sakta hai
 * - Existing file ke timestamps update kar sakta hai
 *
 *
 *
 * ==================================================
 * BASIC FILE CREATION
 * ==================================================
 *
 * Example:
 *
 * touch agra.txt
 *
 * - agra.txt naam ki empty file create ho jayegi.
 *
 *
 * Check:
 *
 * ls -l
 *
 *
 *
 * ==================================================
 * IMPORTANT BEHAVIOR OF touch
 * ==================================================
 *
 * Agar file exist nahi karti:
 * - touch new file create karega
 *
 *
 * Agar file already exist karti hai:
 * - touch uske timestamps update karega
 *
 *
 *
 * ==================================================
 * MULTIPLE FILES
 * ==================================================
 *
 * Example:
 *
 * touch delhi.txt mumbai.txt
 *
 * - Multiple files ek hi command mein create ho jayengi.
 *
 *
 *
 * ==================================================
 * touch OPTIONS
 * ==================================================
 *
 * 1) touch -a
 *
 * - Sirf access time update karega.
 *
 *
 * Example:
 *
 * touch -a file.txt
 *
 *
 *
 * 2) touch -c
 *
 * - Agar file exist nahi karti,
 *   toh new file create nahi karega.
 *
 *
 *
 * 3) touch -h
 *
 * - Symbolic links ke timestamps modify karta hai.
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * -f
 *
 * diya tha,
 * lekin modern Linux touch command mein
 * '-f' mostly ignored/obsolete hota hai.
 *
 *
 *
 * ==================================================
 * FILE NAMES WITH SPACES
 * ==================================================
 *
 * Example:
 *
 * touch 'a b'
 *
 * - Single file create hogi:
 *
 * a b
 *
 *
 * Example:
 *
 * touch a b
 *
 * - Do alag files create hongi:
 *
 * a
 * b
 *
 *
 *
 * ==================================================
 * ! file COMMAND
 * ==================================================
 *
 * file command:
 *
 * - File type determine karne ke liye use hoti hai.
 *
 *
 * Syntax:
 *
 * file filename
 *
 *
 *
 * ==================================================
 * BASIC EXAMPLES
 * ==================================================
 *
 * Example:
 *
 * touch abc
 *
 *
 * Example:
 *
 * file abc
 *
 * - Output:
 *   empty file
 *
 *
 *
 * ==================================================
 * FILE EXTENSIONS CAN BE MISLEADING
 * ==================================================
 *
 * Example:
 *
 * touch abc.mp4
 *
 * - Sirf extension se Linux decide nahi karta
 *   ki file actually mp4 hai.
 *
 *
 * Agar us file mein:
 *
 * hello
 *
 * jaisa text likh diya,
 *
 * toh:
 *
 * file abc.mp4
 *
 * command usse:
 *
 * text file
 *
 * bhi identify kar sakti hai.
 *
 *
 * IMPORTANT:
 * - Linux sirf extension par depend nahi karta.
 * - File ka actual content analyze karta hai.
 *
 *
 * Isi liye:
 * - file command ko easily "bewakoof" nahi bana sakte.
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * mkdir
 * - folders create karta hai
 *
 * touch
 * - files create karta hai
 * - timestamps modify karta hai
 *
 * file
 * - actual file type detect karta hai
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * Commands learned:
 *
 * 1) mkdir
 * 2) touch
 * 3) file
 *
 *
 * Important concepts:
 *
 * - Nested directories
 * - Parent directory creation
 * - File timestamps
 * - File type detection
 * - Multiple file creation
 * - Handling spaces in filenames
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What does mkdir command do?
 *
 * Answer:
 * - Creates directories/folders.
 *
 *
 * 2) What is the use of mkdir -p?
 *
 * Answer:
 * - Creates parent directories automatically.
 *
 *
 * 3) What does touch command do?
 *
 * Answer:
 * - Creates empty files
 * - Updates timestamps
 *
 *
 * 4) What happens if touch is used on an existing file?
 *
 * Answer:
 * - File timestamps get updated.
 *
 *
 * 5) What does touch -a do?
 *
 * Answer:
 * - Updates only access time.
 *
 *
 * 6) What does touch -c do?
 *
 * Answer:
 * - Does not create file if it doesn't exist.
 *
 *
 * 7) What does file command do?
 *
 * Answer:
 * - Detects actual file type.
 *
 *
 * 8) Does Linux identify files only using extensions?
 *
 * Answer:
 * - No.
 * - Linux also checks file content.
 *
 *
 * 9) Difference between:
 *
 * touch 'a b'
 *
 * and
 *
 * touch a b
 *
 * Answer:
 * - 'a b' -> single file with space
 * - a b -> two separate files
 *
 *
 * ==================================================
 */