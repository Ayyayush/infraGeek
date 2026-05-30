/**
 * ! SU COMMAND IN LINUX
 *
 * su = Substitute User
 *
 * su command ka use current shell mein kisi dusre user ke roop mein
 * login karne ke liye kiya jata hai.
 *
 * Isse hum bina current session logout kiye
 * kisi aur user ke permissions ke saath commands chala sakte hain.
 *
 *
 * ! WHY WE USE SU
 *
 * - Dusre user ke account mein switch karne ke liye
 * - Administrative tasks perform karne ke liye
 * - Permissions test karne ke liye
 * - Security aur user isolation ke liye
 *
 *
 * ! CHECK CURRENT USER
 *
 * whoami
 *
 * Example Output:
 *
 * ayush
 *
 * - batata hai ki currently kaunsa user logged in hai
 *
 *
 *
 * ! HOME DIRECTORY OF USERS
 *
 * cd /
 * cd home/
 * ls
 *
 * Example Output:
 *
 * ayush
 * john
 * admin
 *
 * - Linux mein har user ka apna home directory hota hai
 * - Usually /home/username ke andar
 *
 *
 *
 * ! MAN PAGE
 *
 * man su
 *
 * Description:
 *
 * "Run a command with substitute user and group ID"
 *
 *
 *
 * ! SWITCH TO ROOT USER
 *
 * su
 *
 * ya
 *
 * su -
 *
 * - Root user mein switch karne ki koshish karega
 * - Root password maangega
 *
 *
 *
 * ! LOGIN AS ANOTHER USER
 *
 * su - ayush
 *
 * ya
 *
 * su --login ayush
 *
 * - ayush user ki login shell start hogi
 * - ayush ka environment load hoga
 *
 *
 * Note:
 *
 * su - ayush
 *
 * aur
 *
 * su --login ayush
 *
 * dono equivalent hain.
 *
 *
 *
 * ! EXAMPLE
 *
 * whoami
 *
 * Output:
 *
 * john
 *
 *
 * su - ayush
 *
 * Password:
 * ********
 *
 *
 * whoami
 *
 * Output:
 *
 * ayush
 *
 *
 *
 * ! PERFORMING OPERATIONS
 *
 * su - ayush
 *
 * touch bio.txt
 *
 * - bio.txt ayush user ke permissions ke saath create hogi
 *
 *
 *
 * ! RETURN TO PREVIOUS USER
 *
 * exit
 *
 * ya
 *
 * Ctrl + D
 *
 * - Previous shell mein wapas aa jaoge
 *
 *
 *
 * ! PRACTICAL USE CASE
 *
 * Maan lo current user ke paas permission nahi hai:
 *
 * touch /protected/file.txt
 *
 * Permission denied
 *
 *
 * Toh admin/root user mein switch kar sakte hain:
 *
 * su -
 *
 * required task perform karo
 *
 * exit
 *
 * phir original user mein wapas aa jao
 *
 *
 *
 * ! SECURITY PURPOSE
 *
 * - Har user ke alag permissions hote hain
 * - Har kaam root account se nahi karna chahiye
 * - Need-based privilege use karna security best practice hai
 *
 *
 *
 * ! DIFFERENCE BETWEEN su AND su -
 *
 * su username
 *
 * - User switch hota hai
 * - Current environment largely same rehta hai
 *
 *
 * su - username
 *
 * - User switch hota hai
 * - Login shell start hoti hai
 * - User ka environment load hota hai
 * - Home directory bhi change ho jati hai
 *
 *
 *
 * ! SUMMARY
 *
 * su
 * - switch user
 *
 * su -
 * - switch user with login environment
 *
 * su - username
 * - specific user mein login
 *
 * whoami
 * - current user check karna
 *
 * exit
 * - previous user mein wapas jaana
 *
 */