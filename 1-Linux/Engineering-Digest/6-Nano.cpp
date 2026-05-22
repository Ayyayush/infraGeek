/**
 * ==================================================
 * NANO COMMAND IN LINUX
 * ==================================================
 *
 * Nano is a simple and easy-to-use text editor
 * that works inside the terminal window.
 *
 * - Beginner friendly
 * - Lightweight
 * - Easy editing from terminal
 *
 *
 *
 * ==================================================
 * OPENING/CREATING A FILE
 * ==================================================
 *
 * Syntax:
 *
 * nano filename
 *
 *
 * Example:
 *
 * nano file.txt
 *
 *
 * Behavior:
 *
 * - Agar file exist nahi karti:
 *   - Nano new file create karega
 *
 * - Agar file already exist karti hai:
 *   - Nano us file ko open karega
 *
 *
 *
 * ==================================================
 * BASIC SHORTCUTS
 * ==================================================
 *
 * 1) Ctrl + X
 *
 * - Exit nano editor
 *
 *
 * 2) Ctrl + S
 *
 * - Save file
 *
 * NOTE:
 * - Kuch systems mein terminal freeze ho sakta hai
 *   because Ctrl + S flow control ke liye bhi use hota hai.
 *
 *
 * 3) Ctrl + O
 *
 * - Write Out
 * - Current file ko disk par save karta hai.
 *
 *
 * Example:
 *
 * Maan lo file mein:
 *
 * bye
 *
 * likha,
 *
 * then:
 *
 * Ctrl + O
 *
 * use karke save kar sakte hain.
 *
 *
 *
 * ==================================================
 * HELP AND DOCUMENTATION
 * ==================================================
 *
 * Example:
 *
 * man nano
 *
 * - Nano editor ka manual/documentation khulega.
 *
 *
 *
 * ==================================================
 * NAVIGATION SHORTCUTS
 * ==================================================
 *
 * 1) Alt + G
 *
 * - Specific line number par jane ke liye
 *
 * - Ye:
 *   - line number
 *   - column number
 *
 * dono pooch sakta hai.
 *
 *
 *
 * 2) Ctrl + A
 *
 * - Current line ke start par le jata hai.
 *
 *
 *
 * 3) Ctrl + E
 *
 * - Current line ke end par le jata hai.
 *
 *
 *
 * ==================================================
 * ! BASIC EDITING IN NANO
 * ==================================================
 *
 *
 * ==================================================
 * COPYING AND PASTING
 * ==================================================
 *
 * 1) Ctrl + Shift + C
 *
 * - Copy to global/system clipboard
 *
 *
 * 2) Ctrl + Shift + V
 *
 * - Paste from global/system clipboard
 *
 *
 * 3) Ctrl + U
 *
 * - Paste previously cut/copied text inside nano
 *
 *
 *
 * ==================================================
 * CUTTING AND COPYING LINES
 * ==================================================
 *
 * 1) Ctrl + K
 *
 * - Current line cut karta hai.
 *
 * - Agar multiple lines selected ho,
 *   toh selected lines cut hongi.
 *
 *
 *
 * 2) Alt + ^
 *
 * - Selected text/line copy karta hai.
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * alt + undo
 *
 * likha tha,
 * lekin actual commonly used undo shortcut:
 *
 * Alt + U
 *
 * hota hai.
 *
 *
 *
 * ==================================================
 * SEARCHING IN NANO
 * ==================================================
 *
 * Ctrl + W
 *
 * - Search for a string/text
 *
 *
 * Search options:
 *
 * M-C
 * - Case sensitive search
 *
 *
 * M-R
 * - Regular expression search
 *
 *
 * M-B
 * - Backward search
 *
 *
 * ^P
 * - Older search history
 *
 *
 * ^O
 * - Newer search history
 *
 *
 *
 * ==================================================
 * REPLACE IN NANO
 * ==================================================
 *
 * Ctrl + \
 *
 * - Replace a string/text
 *
 *
 * NOTE:
 * Original notes mein:
 *
 * repalce
 * srtring
 *
 * typos the, corrected above.
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * Nano:
 * - Beginner friendly editor hai
 * - Terminal ke andar work karta hai
 *
 *
 * Important shortcuts:
 *
 * Ctrl + X -> Exit
 * Ctrl + O -> Save/Write Out
 * Ctrl + K -> Cut line
 * Ctrl + U -> Paste
 * Ctrl + W -> Search
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * Learned:
 *
 * - Opening files in nano
 * - Creating files
 * - Saving files
 * - Exiting nano
 * - Navigation shortcuts
 * - Copy/Cut/Paste
 * - Search and Replace
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What is Nano in Linux?
 *
 * Answer:
 * - A simple terminal-based text editor.
 *
 *
 * 2) How to open a file in Nano?
 *
 * Answer:
 *
 * nano filename
 *
 *
 * 3) What happens if file does not exist in Nano?
 *
 * Answer:
 * - Nano creates a new file.
 *
 *
 * 4) Which shortcut exits Nano?
 *
 * Answer:
 *
 * Ctrl + X
 *
 *
 * 5) Which shortcut saves a file in Nano?
 *
 * Answer:
 *
 * Ctrl + O
 *
 *
 * 6) Which shortcut cuts a line in Nano?
 *
 * Answer:
 *
 * Ctrl + K
 *
 *
 * 7) Which shortcut pastes text in Nano?
 *
 * Answer:
 *
 * Ctrl + U
 *
 *
 * 8) Which shortcut searches text in Nano?
 *
 * Answer:
 *
 * Ctrl + W
 *
 *
 * 9) Which shortcut replaces text in Nano?
 *
 * Answer:
 *
 * Ctrl + \
 *
 *
 * 10) What does Alt + G do in Nano?
 *
 * Answer:
 * - Goes to a specific line number.
 *
 *
 * ==================================================
 */