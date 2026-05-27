/**
 * ! GREP COMMAND IN LINUX
 *
 * grep command searching/filtering ke liye use hota hai
 *
 *
 * ! SYNTAX
 *
 * grep "pattern" filename
 *
 *
 * Example:
 *
 * grep "happy" meditations.txt
 *
 * - "happy" pattern hai
 * - meditations.txt file ka naam hai
 *
 *
 * NOTE:
 * Pattern ko quotes mein dena better hota hai
 * especially jab special characters hon
 *
 *
 * ! CASE SENSITIVE SEARCH
 *
 * by default grep case sensitive hota hai
 *
 *
 * Example:
 *
 * grep "life" sample.txt
 *
 * - life word jahan bhi aayega show karega
 * - lifelong bhi match ho sakta hai
 * kyunki grep pattern search karta hai
 *
 *
 * ! WHOLE WORD SEARCH
 *
 * grep -w "life" sample.txt
 *
 * - sirf exact word "life" match karega
 * - lifelong match nahi hoga
 *
 *
 * ! CASE INSENSITIVE SEARCH
 *
 * grep -i "tomato" foods.txt
 *
 * - Tomato
 * - TOMATO
 * - tomato
 *
 * sab match ho jayenge
 *
 *
 * ! BEFORE LINES
 *
 * grep -iB2 "tomato" foods.txt
 *
 * - matching line ke pehle ki 2 lines bhi dikhayega
 *
 *
 * ! AFTER LINES
 *
 * grep -iA3 "tomato" foods.txt
 *
 * - matching line ke baad ki 3 lines bhi dikhayega
 *
 *
 * ! BEFORE + AFTER TOGETHER
 *
 * grep -iB2 -A3 "tomato" foods.txt
 *
 * - pehle ki 2 lines
 * - matching line
 * - baad ki 3 lines
 *
 *
 * ! COMBINED CONTEXT OPTION
 *
 * grep -iC2 "tomato" foods.txt
 *
 * - matching line ke around total 2 lines before/after dikhayega
 *
 *
 * ! RECURSIVE SEARCH
 *
 * grep -r "imp" .
 *
 * - current directory aur subdirectories ki files mein search karega
 *
 *
 * grep -rw "imp" Documents/
 *
 * - Documents directory ke andar recursively
 * exact word search karega
 *
 *
 * ! COUNTING MATCHES
 *
 * grep -c "sun" sample.txt
 *
 * - batayega kitni matching lines hain
 *
 *
 * ! IMPORTANT QUESTION
 *
 * grep -iw "In" sample.txt
 *
 * Output:
 *
 * - sirf exact word "In" match karega
 * - case insensitive hoga
 * - "inside" ya "India" match nahi hoga
 *
 *
 * ! SEARCHING IN MULTIPLE FILES
 *
 * grep "sky" sample.txt meditations.txt
 *
 * - dono files mein search karega
 *
 *
 * ! USING grep WITH PIPE
 *
 * ls -lh | grep "sample"
 *
 * - ls output mein sirf sample wali lines show hongi
 *
 *
 * cat sample.txt | grep -wi "sky"
 *
 * - sample.txt ke content mein
 * exact word "sky" search karega
 * case insensitive way mein
 *
 *
 * ! IMPORTANT CORRECTION
 *
 * Original notes mein:
 *
 * tail sample | sample "sky" -wi
 *
 * ye incorrect tha
 *
 * correct command:
 *
 * tail sample.txt | grep -wi "sky"
 *
 *
 * Explanation:
 *
 * - tail sample.txt
 *   last 10 lines dega
 *
 * - grep -wi "sky"
 *   unme exact word search karega
 *
 *
 * ! REAL TIME SEARCHING
 *
 * tail -f foods.txt | grep "tomato"
 *
 * - realtime appended lines monitor karega
 * - sirf tomato wali lines dikhengi
 *
 *
 * ! LOG MONITORING
 *
 * tail -f app.log | grep "ERROR" -C10
 *
 * Explanation:
 *
 * - app.log ko realtime monitor karega
 * - ERROR search karega
 * - ERROR ke around 10 context lines bhi dikhayega
 *
 *
 * ! SAMPLE OUTPUTS
 *
 * Example:
 *
 * foods.txt:
 *
 * pizza
 * burger
 * Tomato Soup
 * fries
 *
 *
 * Command:
 *
 * grep -i "tomato" foods.txt
 *
 *
 * Output:
 *
 * Tomato Soup
 *
 *
 * Example:
 *
 * sample.txt:
 *
 * sky is blue
 * sun is bright
 * SKY looks beautiful
 *
 *
 * Command:
 *
 * grep -wi "sky" sample.txt
 *
 *
 * Output:
 *
 * sky is blue
 * SKY looks beautiful
 *
 *
 * ! IMPORTANT NOTES
 *
 * grep
 * - searching/filtering command
 *
 * -i
 * - case insensitive
 *
 * -w
 * - whole word match
 *
 * -r
 * - recursive search
 *
 * -c
 * - count matches
 *
 * -A
 * - after lines
 *
 * -B
 * - before lines
 *
 * -C
 * - context lines
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * grep "happy" meditations.txt
 * grep -w "life" sample.txt
 * grep -i "tomato" foods.txt
 * grep -iB2 "tomato" foods.txt
 * grep -iA3 "tomato" foods.txt
 * grep -iC2 "tomato" foods.txt
 * grep -rw "imp" Documents/
 * grep -c "sun" sample.txt
 * grep "sky" sample.txt meditations.txt
 * ls -lh | grep "sample"
 * tail -f app.log | grep "ERROR" -C10
 *
 *
 * Concepts learned:
 * - searching
 * - filtering
 * - recursive search
 * - exact word matching
 * - case insensitive search
 * - context lines
 * - realtime log monitoring
 *
 *
 * ! INTERVIEW QUESTIONS
 *
 * 1) What does grep command do?
 * Answer:
 * - Searches patterns inside files/output.
 *
 *
 * 2) What does -i option do in grep?
 * Answer:
 * - Case insensitive search.
 *
 *
 * 3) What does -w option do?
 * Answer:
 * - Matches exact whole word only.
 *
 *
 * 4) What does grep -r do?
 * Answer:
 * - Recursive search inside directories.
 *
 *
 * 5) What does grep -c do?
 * Answer:
 * - Counts matching lines.
 *
 *
 * 6) Difference between grep and grep -w?
 * Answer:
 * - grep matches patterns
 * - grep -w matches whole words only
 *
 *
 * 7) What does:
 * grep -iC2 "error" app.log
 * do?
 *
 * Answer:
 * - Case insensitive search with 2 context lines.
 *
 *
 * 8) Why is grep used with pipe operator?
 * Answer:
 * - To filter command output.
 *
 */