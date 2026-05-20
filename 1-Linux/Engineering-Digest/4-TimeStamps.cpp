/**
 * ==================================================
 * TIMESTAMPS IN LINUX
 * ==================================================
 *
 * Linux mein har file/directory ke saath
 * different timestamps stored hote hain.
 *
 * Important timestamps:
 *
 * 1) Modification Time (mtime)
 * 2) Access Time (atime)
 * 3) Change Time (ctime)
 *
 *
 *
 * ==================================================
 * 1) MODIFICATION TIME (mtime)
 * ==================================================
 *
 * Modification time tab change hota hai
 * jab file ka CONTENT modify hota hai.
 *
 *
 * Example:
 *
 * - File ke andar kuch likha
 * - Existing content edit kiya
 * - Data remove kiya
 *
 * Tab:
 *
 * mtime update ho jayega.
 *
 *
 * Command:
 *
 * ls -l
 *
 * - By default ls -l modification time show karta hai.
 *
 *
 *
 * ==================================================
 * 2) ACCESS TIME (atime)
 * ==================================================
 *
 * Access time tab update hota hai
 * jab file ko access/read kiya jata hai.
 *
 *
 * Example:
 *
 * - cat file.txt
 * - less file.txt
 * - open/read file
 *
 * Tab:
 *
 * atime update ho sakta hai.
 *
 *
 * Command:
 *
 * ls -lu
 *
 * - '-u' access time display karta hai.
 *
 *
 *
 * ==================================================
 * 3) CHANGE TIME (ctime)
 * ==================================================
 *
 * Change time metadata change hone par update hota hai.
 *
 * Metadata examples:
 * - permissions
 * - ownership
 * - file name
 *
 *
 * NOTE:
 * ctime ka matlab:
 *
 * creation time NAHI hota
 *
 * Linux mein ctime means:
 *
 * Change Time
 *
 *
 * Command:
 *
 * ls -lc
 *
 * - '-c' change time display karta hai.
 *
 *
 *
 * ==================================================
 * BASIC EXAMPLES
 * ==================================================
 *
 * Example:
 *
 * cd abc/
 *
 * - abc folder ke andar move honge.
 *
 *
 * Example:
 *
 * ls
 *
 * - Current directory ka content dikhayega.
 *
 *
 * Example:
 *
 * ls -l
 *
 * - Long listing format
 * - Modification time show karega.
 *
 *
 * Example:
 *
 * ls -lu
 *
 * - Access time show karega.
 *
 *
 * Example:
 *
 * ls -lc
 *
 * - Change time show karega.
 *
 *
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 *
 * - mtime:
 *   content change hone par
 *
 * - atime:
 *   file access/read hone par
 *
 * - ctime:
 *   metadata change hone par
 *
 *
 * Original notes mein:
 *
 * "change time"
 * aur
 * "access time"
 *
 * ka mention tha,
 * yahan properly classify kiya gaya hai.
 *
 *
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 *
 * Linux file timestamps:
 *
 * 1) mtime -> Modification Time
 * 2) atime -> Access Time
 * 3) ctime -> Change Time
 *
 *
 * Useful commands:
 *
 * ls -l
 * ls -lu
 * ls -lc
 *
 *
 *
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 *
 * 1) What are timestamps in Linux?
 *
 * Answer:
 * - Time-related metadata stored for files/directories.
 *
 *
 * 2) What is mtime?
 *
 * Answer:
 * - Modification time.
 * - Updates when file content changes.
 *
 *
 * 3) What is atime?
 *
 * Answer:
 * - Access time.
 * - Updates when file is accessed/read.
 *
 *
 * 4) What is ctime?
 *
 * Answer:
 * - Change time.
 * - Updates when metadata changes.
 *
 *
 * 5) Does ctime mean creation time?
 *
 * Answer:
 * - No.
 * - ctime means change time in Linux.
 *
 *
 * 6) Which command shows modification time?
 *
 * Answer:
 *
 * ls -l
 *
 *
 * 7) Which command shows access time?
 *
 * Answer:
 *
 * ls -lu
 *
 *
 * 8) Which command shows change time?
 *
 * Answer:
 *
 * ls -lc
 *
 *
 * ==================================================
 */