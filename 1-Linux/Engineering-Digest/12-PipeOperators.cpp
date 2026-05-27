/**
 * ! PIPE OPERATOR IN LINUX
 *
 * ! What is pipe operator?
 *
 * Pipe operator ek command ka output
 * doosri command ko as input dene ke liye use hota hai
 *
 *
 * ! PIPE SYMBOL
 *
 * |
 *
 *
 * ! SYNTAX
 *
 * command1 | command2
 *
 *
 * ! HOW PIPE WORKS
 *
 * - command1 ka output
 * - command2 ka input ban jata hai
 *
 *
 * ! BASIC EXAMPLES
 *
 * ls -lh | sort
 *
 * - ls -lh ka output sort command ko diya gaya
 *
 *
 * ls -lh | sort -k5
 *
 * - 5th column ke basis pe sort karega
 *
 *
 * ls -lh | sort -k5h
 *
 * - 5th column ko human readable numeric format mein sort karega
 *
 *
 * ! USING grep WITH PIPE
 *
 * cat foods.txt | grep 'pizza'
 *
 * grep command aage padhenge
 * abhi itna samjho:
 *
 * grep
 * - searching/filtering ke liye use hota hai
 *
 *
 * upar wale command mein:
 *
 * - cat foods.txt ka output
 * - grep ko diya gaya
 *
 * - grep sirf pizza wali lines show karega
 *
 *
 * ! MULTIPLE PIPES
 *
 * ls -lh | sort -k5h | tail -5
 *
 * Explanation:
 *
 * - ls -lh
 *   files list karega
 *
 * - sort -k5h
 *   size ke basis pe sort karega
 *
 * - tail -5
 *   last 5 lines show karega
 *
 *
 * ! WHY PIPE IS USEFUL
 *
 * - commands combine kar sakte hain
 * - complex tasks easily perform hote hain
 * - output filtering aur processing easy ho jati hai
 *
 *
 * ! IMPORTANT NOTES
 *
 * |
 * - pipe operator
 *
 * pipe
 * - stdout ko next command ke stdin mein bhejta hai
 *
 * multiple pipes
 * - chain of commands bana sakte hain
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * ls -lh | sort
 * ls -lh | sort -k5
 * ls -lh | sort -k5h
 * cat foods.txt | grep 'pizza'
 * ls -lh | sort -k5h | tail -5
 *
 *
 * Concepts learned:
 * - piping
 * - command chaining
 * - output processing
 * - filtering
 * - sorting with pipes
 *
 */