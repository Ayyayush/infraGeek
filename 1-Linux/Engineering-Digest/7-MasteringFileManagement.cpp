/**
 * ==================================================
 * FILE MANAGEMENT IN LINUX (ADVANCED)
 * ==================================================
 * In this lecture we will master:
 * 1) Removing files/directories
 * 2) Copying files/directories
 * 3) Moving/Renaming files
 *
 * ==================================================
 * ! rm COMMAND
 * ==================================================
 * rm = Remove
 * - Files aur directories delete karne ke liye use hota hai.
 *
 * Syntax:
 * rm filename
 *
 * ==================================================
 * REMOVING FILES
 * ==================================================
 * Example:
 * rm note.txt
 * - note.txt delete ho jayegi.
 *
 * ==================================================
 * IMPORTANT QUESTION
 * ==================================================
 * Q) Kya rm command se delete hui files recycle bin/trash mein jati hain?
 *
 * Answer:
 * - Normally NO
 * - rm directly permanently delete karta hai.
 * - Isliye rm carefully use karna chahiye.
 *
 * ==================================================
 * REMOVING DIRECTORIES
 * ==================================================
 * Example:
 * mkdir -p a/b/c
 * - Nested directories create ho jayengi.
 *
 * Example:
 * mkdir hello
 *
 * Agar:
 * rm hello
 *
 * toh error aayega:
 * cannot remove 'hello': Is a directory
 *
 * Matlab:
 * - directory remove karne ke liye extra option dena padega.
 *
 * ==================================================
 * rm -d
 * ==================================================
 * Example:
 * rm -d hello/
 * - Empty directory remove karta hai.
 *
 * NOTE:
 * - Directory empty honi chahiye.
 *
 * ==================================================
 * rm -r
 * ==================================================
 * Recursive delete
 *
 * Example:
 * rm -r hello/
 * - hello folder aur uske andar ka sara content recursively delete ho jayega.
 *
 * Example:
 * rm -r a
 * - 'a' directory complete delete ho jayegi.
 *
 * ==================================================
 * MULTIPLE FILES DELETE
 * ==================================================
 * Example:
 * touch a b c
 *
 * Delete all:
 * rm a b c
 *
 * ==================================================
 * ! cp COMMAND
 * ==================================================
 * cp = Copy
 * - Files/directories copy karne ke liye use hota hai.
 *
 * Syntax:
 * cp source destination
 *
 * ==================================================
 * BASIC COPY EXAMPLE
 * ==================================================
 * Example:
 * touch zootopia.mp4 up.mp4
 *
 * Example:
 * cp up.mp4 ../../action/
 *
 * Explanation:
 * - up.mp4 source file hai
 * - ../.. se do directories piche gaye
 * - fir action folder mein copy kiya
 *
 * ==================================================
 * COPYING MULTIPLE FILES
 * ==================================================
 * Example:
 * cp up.mp4 zootopia.mp4 ../../action/
 * - Multiple files ek hi destination mein copy hongi.
 *
 * ==================================================
 * ! mv COMMAND
 * ==================================================
 * mv = Move
 * - Files/directories move karne ke liye use hota hai.
 * - Rename karne ke liye bhi use hota hai.
 *
 * ==================================================
 * MOVING FILES
 * ==================================================
 * Example:
 * touch another.mp4
 *
 * Example:
 * mv another.mp4 ../horror/
 * - File ko ek directory piche jaake horror folder mein move kiya.
 *
 * ==================================================
 * RENAMING FILES
 * ==================================================
 * Example:
 * mv another.mp4 ../horror/another_2012.mp4
 * - File move bhi hui
 * - Rename bhi ho gaya
 *
 * ==================================================
 * COPYING WITH NEW NAME
 * ==================================================
 * Example:
 * cp another_2012.mp4 another_2012_5_star.mp4
 * - Same file ki copy
 * - New name ke saath create hogi.
 *
 * NOTE:
 * Original notes mein:
 * 5_start
 *
 * likely typo tha, corrected:
 * 5_star
 *
 * ==================================================
 * IMPORTANT CONCEPT
 * ==================================================
 * Example:
 * cp a.mp4 a
 *
 * Case 1:
 * - Agar 'a' existing directory hai:
 *   - a.mp4 uske andar copy hogi.
 *
 * Case 2:
 * - Agar 'a' directory exist nahi karti:
 *   - New file named 'a' create ho sakti hai.
 *
 * NOTE:
 * - cp automatically folder create nahi karta.
 * - Existing destination behavior important hota hai.
 *
 * ==================================================
 * IMPORTANT NOTES
 * ==================================================
 * rm
 * - delete
 *
 * cp
 * - copy
 *
 * mv
 * - move/rename
 *
 * rm -d
 * - empty directories remove karta hai
 *
 * rm -r
 * - recursively delete karta hai
 *
 * ==================================================
 * SUMMARY OF THIS LECTURE
 * ==================================================
 * Commands learned:
 * 1) rm
 * 2) cp
 * 3) mv
 *
 * Concepts learned:
 * - Recursive deletion
 * - Empty directory deletion
 * - File moving
 * - File renaming
 * - Relative paths
 * - Copying multiple files
 *
 * 
 * 
 * ==================================================
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 * ==================================================
 * 1) What does rm command do?
 * Answer:
 * - Removes files/directories.
 *
 * 2) Does rm move files to recycle bin?
 * Answer:
 * - No.
 * - Files are usually permanently deleted.
 *
 * 3) What does rm -d do?
 * Answer:
 * - Removes empty directories.
 *
 * 4) What does rm -r do?
 * Answer:
 * - Recursively deletes directories and contents.
 *
 * 5) What is the purpose of cp command?
 * Answer:
 * - Copies files/directories.
 *
 * 6) Syntax of cp command?
 * Answer:
 * cp source destination
 *
 * 7) What does mv command do?
 * Answer:
 * - Moves or renames files/directories.
 *
 * 8) Can mv be used for renaming?
 * Answer:
 * - Yes.
 *
 * 9) Difference between cp and mv?
 * Answer:
 * - cp creates a copy
 * - mv relocates/renames original file
 *
 * 10) What happens if destination in cp is an existing directory?
 * Answer:
 * - File gets copied inside that directory.
 *
 * ==================================================
 */