/**
 * ! ARITHMETIC OPERATORS AND EXPRESSIONS IN LINUX
 *
 * maan lo koi arithmetic expression solve karni hai Linux mein
 *
 *
 * echo 2+3
 *
 * Output:
 * 2+3
 *
 * - yaha sirf text print hua
 * - calculation nahi hui
 *
 *
 * ! ARITHMETIC EVALUATION
 *
 * echo $((2+3))
 *
 * Output:
 * 5
 *
 *
 * echo $((2*3))
 *
 * Output:
 * 6
 *
 *
 * echo $((2-3))
 *
 * Output:
 * -1
 *
 *
 * echo $((2%3))
 *
 * Output:
 * 2
 *
 *
 * ! POWER OPERATOR
 *
 * echo $((2**3))
 *
 * Output:
 * 8
 *
 *
 * ! INTEGER DIVISION
 *
 * echo $((2/3))
 *
 * Output:
 * 0
 *
 * - Linux shell integer arithmetic karta hai
 * - decimal part remove ho jata hai
 *
 *
 * ! BODMAS / PRECEDENCE RULE
 *
 * echo $((2**(3-2)))
 *
 * Output:
 * 2
 *
 *
 * Explanation:
 *
 * (3-2) = 1
 * 2**1 = 2
 *
 *
 * echo $((2**3-2))
 *
 * Output:
 * 6
 *
 *
 * Explanation:
 *
 * 2**3 = 8
 * 8-2 = 6
 *
 *
 * ! WHY WE USE echo
 *
 * agar echo use nahi karenge toh
 * shell expression ko command samajhne lagega
 *
 *
 * Example:
 *
 * $((2+3))
 *
 * Output:
 * 5
 *
 * - ye directly evaluate ho jayega
 *
 *
 * but:
 *
 * $(2+3)
 *
 * Output:
 * bash: 2+3: command not found
 *
 *
 * ! COMMAND SUBSTITUTION
 *
 * echo $(ls)
 *
 * - ls command ka output echo ke andar aa jayega
 *
 *
 * Example Output:
 *
 * file1.txt file2.txt Downloads Documents
 *
 *
 * ! COMMAND GROUPING
 *
 * $(ls; ls)
 *
 * - dono ls commands execute hongi
 *
 *
 * Example:
 *
 * echo $(ls; pwd)
 *
 * Output:
 *
 * file1.txt file2.txt  /home/user
 *
 *
 * ! SUBSHELL CREATION
 *
 * cd Downloads/
 *
 * - current terminal ki directory permanently change ho jayegi
 *
 *
 * (cd Downloads/ && ls)
 *
 * - subshell create hoga
 * - temporary Downloads mein jayega
 * - ls execute karega
 * - main shell ki directory same rahegi
 *
 *
 * pwd
 *
 * Example Output:
 *
 * /home/user
 *
 *
 * (cd Downloads/; ls)
 *
 * - Downloads mein jaake ls execute karega
 *
 *
 * (cd Downloads/ || ls)
 *
 * Meaning:
 *
 * - agar cd Downloads/ fail hua
 * - toh ls execute hoga
 *
 *
 * ! IMPORTANT DIFFERENCE
 *
 * &&
 * - next command tabhi chalega jab previous successful ho
 *
 *
 * ||
 * - next command tab chalega jab previous fail ho
 *
 *
 * ;
 * - commands sequentially execute hongi
 * - success/failure matter nahi karta
 *
 *
 * ! IMPORTANT NOTES
 *
 * $(( ))
 * - arithmetic expansion
 *
 * $( )
 * - command substitution
 *
 * **
 * - power operator
 *
 * %
 * - modulus operator
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * echo $((2+3))
 * echo $((2*3))
 * echo $((2**3))
 * echo $((2/3))
 * echo $(ls)
 * (cd Downloads/ && ls)
 * (cd Downloads/ || ls)
 *
 *
 * Concepts learned:
 * - arithmetic expansion
 * - integer arithmetic
 * - operator precedence
 * - command substitution
 * - command grouping
 * - subshell creation
 * - logical operators
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What is arithmetic expansion in Linux?
 * Answer:
 * - Evaluating arithmetic expressions using $(( ))
 *
 *
 * 2) What does:
 * echo $((2+3))
 * do?
 *
 * Answer:
 * - Evaluates and prints 5.
 *
 *
 * 3) What does ** operator do?
 * Answer:
 * - Power/exponentiation.
 *
 *
 * 4) Why does:
 * echo $((2/3))
 * give 0?
 *
 * Answer:
 * - Because shell arithmetic is integer based.
 *
 *
 * 5) What is command substitution?
 * Answer:
 * - Using output of one command inside another command.
 *
 *
 * 6) What does:
 * echo $(ls)
 * do?
 *
 * Answer:
 * - Prints output of ls command.
 *
 *
 * 7) Difference between $(( )) and $( ) ?
 * Answer:
 *
 * - $(( )) → arithmetic expansion
 * - $( ) → command substitution
 *
 *
 * 8) What is a subshell?
 * Answer:
 * - Temporary child shell used for isolated command execution.
 *
 *
 * 9) Difference between && and || ?
 * Answer:
 *
 * - && runs next command if previous succeeds
 * - || runs next command if previous fails
 *
 *
 * 10) What does ; operator do?
 * Answer:
 * - Executes commands sequentially regardless of success/failure.
 *
 */