/**
 * ! HEAD TAIL AND LESS COMMANDS IN LINUX
 * Now we will study:
 * 1) head command
 * 2) tail command
 * 3) less command
 *
 *
 * ! HEAD COMMAND
 * head command file ke starting lines show karta hai
 *
 * Example:
 * head foods.txt
 *
 * - by default first 10 lines show hoti hain
 *
 *
 * ! SHOW SPECIFIC NUMBER OF LINES
 * head -1 foods.txt
 *
 * - first 1 line show karega
 *
 *
 * head -5 foods.txt
 *
 * - first 5 lines show karega
 *
 *
 * ! WHY HEAD COMMAND IS USED
 * - partial content dekhne ke liye
 * - large files inspect karne ke liye
 * - logs ka starting portion dekhne ke liye
 *
 *
 * ! TAIL COMMAND
 * tail command file ki ending lines show karta hai
 *
 * Example:
 * tail foods.txt
 *
 * - by default last 10 lines show hoti hain
 *
 *
 * ! SHOW SPECIFIC NUMBER OF LINES
 * tail -1 foods.txt
 *
 * - last 1 line show karega
 *
 *
 * tail -5 foods.txt
 *
 * - last 5 lines show karega
 *
 *
 * ! tail -f COMMAND
 * tail -f foods.txt
 *
 * man page:
 * output appended data as file grows
 *
 * Meaning:
 * - file mein continuously hone wale changes monitor karta hai
 * - new appended content realtime mein show hota rahega
 *
 *
 * Example:
 * ek terminal mein:
 * tail -f foods.txt
 *
 * doosre terminal mein:
 * echo pizza >> foods.txt
 *
 * - pehle terminal mein instantly output dikhega
 *
 *
 * ! IMPORTANT USE OF tail -f
 * Mainly log monitoring mein use hota hai
 *
 * Examples:
 * - server logs
 * - API logs
 * - exception/error logs
 * - live debugging
 *
 *
 * ! GREP NOTE
 * grep command aage ki videos mein padhenge
 * grep ko tail ke saath combine bhi karte hain
 *
 *
 * ! LESS COMMAND
 * less command large files ko page by page dekhne ke liye use hota hai
 *
 * Example:
 * less foods.txt
 *
 * - ek temporary viewer open hota hai
 * - ek baar mein ek page dikhata hai
 * - terminal clean rehta hai
 *
 *
 * ! WHY LESS IS USEFUL
 * - large files reading
 * - logs inspect karna
 * - scrolling easily
 * - terminal clutter avoid karna
 *
 *
 * ! NAVIGATION IN less
 * Space
 * - next page
 *
 * b
 * - previous page
 *
 * /
 * - search
 *
 * q
 * - quit/exit less
 *
 *
 * ! IMPORTANT NOTES
 * head
 * - file ki starting lines dikhata hai
 *
 * tail
 * - file ki ending lines dikhata hai
 *
 * tail -f
 * - live appended changes monitor karta hai
 *
 * less
 * - paginated viewing deta hai
 *
 *
 * ! SUMMARY OF THIS LECTURE
 * Commands learned:
 * head foods.txt
 * head -5 foods.txt
 * tail foods.txt
 * tail -5 foods.txt
 * tail -f foods.txt
 * less foods.txt
 *
 * Concepts learned:
 * - partial file viewing
 * - live log monitoring
 * - paginated viewing
 * - realtime appended output
 *
 *
 * ! INTERVIEW QUESTIONS FROM THIS LECTURE
 *
 * 1) What does head command do?
 * Answer:
 * - Displays starting lines of a file.
 *
 *
 * 2) By default how many lines does head show?
 * Answer:
 * - 10 lines.
 *
 *
 * 3) What does:
 * head -5 foods.txt
 * do?
 *
 * Answer:
 * - Shows first 5 lines.
 *
 *
 * 4) What does tail command do?
 * Answer:
 * - Displays ending lines of a file.
 *
 *
 * 5) By default how many lines does tail show?
 * Answer:
 * - 10 lines.
 *
 *
 * 6) What does:
 * tail -5 foods.txt
 * do?
 *
 * Answer:
 * - Shows last 5 lines.
 *
 *
 * 7) What does tail -f do?
 * Answer:
 * - Continuously monitors appended changes in a file.
 *
 *
 * 8) Where is tail -f commonly used?
 * Answer:
 * - Log monitoring and debugging.
 *
 *
 * 9) What does less command do?
 * Answer:
 * - Opens file in paginated/scrollable view.
 *
 *
 * 10) Why is less preferred for large files?
 * Answer:
 * - Because it shows content page by page.
 *
 *
 * 11) How to exit less?
 * Answer:
 * - Press q.
 *
 *
 * 12) Difference between head and tail?
 * Answer:
 * - head shows beginning
 * - tail shows ending
 *
 */