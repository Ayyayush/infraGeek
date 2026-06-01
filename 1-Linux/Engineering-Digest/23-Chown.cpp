/**
 * ! CHOWN COMMAND IN LINUX
 *
 * chown = Change Owner
 *
 * kisi file ya directory ka owner ya group change karne ke liye
 * use hota hai
 *
 * owner aur group dono change kiye ja sakte hain
 *
 * generally root privileges required hote hain
 *
 * ---------------------------------------------------
 * ! WHY DO WE NEED CHOWN ?
 * ---------------------------------------------------
 *
 * maan lo backend_project_1 folder create kiya
 *
 * owner currently:
 * ayush
 *
 * ab hum chahte hain ki kisi aur user ya group ko ownership de di jaye
 *
 * uske liye chown use karte hain
 *
 * ---------------------------------------------------
 * ! BASIC SYNTAX
 * ---------------------------------------------------
 *
 * sudo chown owner file
 *
 * Example:
 *
 * sudo chown ayush sample
 *
 * yeh sample file ka owner ayush bana dega
 *
 * ---------------------------------------------------
 * ! CHECK CURRENT OWNER
 * ---------------------------------------------------
 *
 * ls -l
 *
 * Example Output:
 *
 * -rw-r--r-- 1 ayush developers 500 Jun 1 file.txt
 *
 * owner  = ayush
 * group  = developers
 *
 * ---------------------------------------------------
 * ! CHANGE OWNER ONLY
 * ---------------------------------------------------
 * sudo chown john file.txt
 *
 * owner:
 * john
 * group same rahega
 *
 * 
 * 
 * ---------------------------------------------------
 * ! CHANGE OWNER OF DIRECTORY
 * ---------------------------------------------------
 * sudo chown john backend_project_1
 *
 * backend_project_1 directory ka owner john ho jayega
 * 
 * 
 *
 * ---------------------------------------------------
 * ! CHANGE OWNER AND GROUP TOGETHER
 * ---------------------------------------------------
 *
 * sudo chown john:developers file.txt
 *
 * owner:
 * john
 *
 * group:
 * developers
 *
 * ---------------------------------------------------
 * ! CHANGE ONLY GROUP
 * ---------------------------------------------------
 *
 * sudo chown :developers file.txt
 *
 * owner same rahega
 *
 * sirf group change hoga
 *
 * Note:
 * group change karne ke liye usually chgrp command bhi use ki jati hai
 *
 * ---------------------------------------------------
 * ! RECURSIVE CHOWN
 * ---------------------------------------------------
 *
 * agar directory ke andar sab files aur folders ki ownership
 * bhi change karni ho to -R flag use karte hain
 *
 * sudo chown -R john:developers backend_project_1
 *
 * -R = Recursive
 *
 * backend_project_1 ke andar jitni files aur folders hain
 * sabki ownership change ho jayegi
 *
 * ---------------------------------------------------
 * ! USING USER ID (UID)
 * ---------------------------------------------------
 *
 * sudo chown 1001 file.txt
 *
 * owner UID 1001 wale user ko assign ho jayega
 *
 * ---------------------------------------------------
 * ! USING UID AND GID
 * ---------------------------------------------------
 *
 * sudo chown 1001:1001 file.txt
 *
 * owner aur group dono IDs ke through assign kar sakte hain
 *
 * ---------------------------------------------------
 * ! VERIFY CHANGES
 * ---------------------------------------------------
 *
 * ls -l file.txt
 *
 * ya
 *
 * stat file.txt
 *
 * ownership details verify kar sakte hain
 *
 * ---------------------------------------------------
 * ! COMMON REAL WORLD USE CASES
 * ---------------------------------------------------
 *
 * 1. Web Server Files
 *
 * sudo chown -R www-data:www-data /var/www/html
 *
 * Apache/Nginx ko ownership dene ke liye
 *
 * ---------------------------------------------------
 *
 * 2. Application Deployment
 *
 * sudo chown -R ubuntu:ubuntu my-app
 *
 * deployment ke baad proper permissions set karne ke liye
 *
 * ---------------------------------------------------
 *
 * 3. Docker Volumes
 *
 * container aur host ke beech ownership mismatch fix karne ke liye
 *
 * ---------------------------------------------------
 *
 * 4. Shared Project Directory
 *
 * sudo chown -R john:developers project
 *
 * team collaboration ke liye
 *
 * ---------------------------------------------------
 * ! IMPORTANT DIFFERENCE
 * ---------------------------------------------------
 *
 * chown  -> owner change karta hai
 *
 * chgrp  -> group change karta hai
 *
 * chmod  -> permissions change karta hai
 *
 * Example:
 *
 * chown john file.txt
 *
 * chmod 755 file.txt
 *
 * dono completely different commands hain
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 *
 * Q1. What is the purpose of chown command?
 *
 * Ans:
 * file ya directory ki ownership change karne ke liye use hota hai.
 *
 * ---------------------------------------------------
 *
 * Q2. Difference between chown and chmod?
 *
 * Ans:
 * chown ownership change karta hai.
 * chmod permissions change karta hai.
 *
 * ---------------------------------------------------
 *
 * Q3. How do you change both owner and group?
 *
 * Ans:
 *
 * sudo chown owner:group file
 *
 * Example:
 *
 * sudo chown john:developers file.txt
 *
 * ---------------------------------------------------
 *
 * Q4. What does -R option do in chown?
 *
 * Ans:
 * recursively directory aur uske andar ki sab files ki
 * ownership change karta hai.
 *
 * ---------------------------------------------------
 *
 * Q5. Why does chown usually require sudo?
 *
 * Ans:
 * ownership system level metadata hoti hai.
 * security reasons ki wajah se normal users generally
 * ownership modify nahi kar sakte.
 *
 * ---------------------------------------------------
 *
 * Q6. How do you view file ownership?
 *
 * Ans:
 *
 * ls -l
 *
 * ya
 *
 * stat filename
 *
 * ---------------------------------------------------
 *
 * Q7. Can a normal user change ownership of a file?
 *
 * Ans:
 * usually nahi.
 * ownership change karne ke liye root privileges chahiye hote hain.
 *
 * ---------------------------------------------------
 *
 * Q8. What is the difference between owner and group?
 *
 * Ans:
 * owner = specific user
 * group = users ka collection
 *
 * permissions owner aur group ke basis par apply ho sakti hain.
 *
 * ---------------------------------------------------
 *
 * ! MEMORY TIP
 *
 * chown
 *
 * ch = Change
 * own = Owner
 *
 * => Change Owner
 *
 */