/**
 * ! CHMOD COMMAND IN LINUX
 *
 * chmod = Change Mode
 *
 * Linux mein files aur directories ki permissions change karne ke liye
 * chmod command use hoti hai.
 *
 *
 * ! SYMBOLIC MODE SYNTAX
 *
 * chmod [who][operator][permission] file_name
 *
 * Example:
 * chmod u+x sample
 *
 *
 * ! WHO (KISKI PERMISSION CHANGE KARNI HAI)
 *
 * u
 * - user/owner
 *
 * g
 * - group
 *
 * o
 * - others
 *
 * a
 * - all (user + group + others)
 *
 *
 * ! OPERATOR (KYA KARNA HAI)
 *
 * +
 * - permission add karni hai
 *
 * -
 * - permission remove karni hai
 *
 * =
 * - exact permission set karni hai
 *
 *
 * ! PERMISSIONS
 *
 * r
 * - read
 *
 * w
 * - write
 *
 * x
 * - execute
 *
 *
 * ! EXAMPLES
 *
 * chmod u+x sample
 *
 * - owner ko execute permission de do
 *
 *
 * chmod u-x sample
 *
 * - owner ki execute permission hata do
 *
 *
 * chmod o+x sample
 *
 * - others ko execute permission de do
 *
 *
 * chmod g+w sample
 *
 * - group ko write permission de do
 *
 *
 * chmod a+r sample
 *
 * - sabko read permission de do
 *
 *
 *
 * ! CHECK PERMISSIONS
 *
 * ls -l
 *
 * Example:
 *
 * -rw-r--r--
 *
 * yahan:
 *
 * rw-
 * - user permissions
 *
 * r--
 * - group permissions
 *
 * r--
 * - others permissions
 *
 *
 * ! NUMERIC (OCTAL) MODE
 *
 * chmod ke baad 3 octal numbers bhi likh sakte hain.
 *
 * Example:
 *
 * chmod 755 sample
 *
 *
 * Octal values:
 *
 * 0 = 000
 * 1 = 001
 * 2 = 010
 * 3 = 011
 * 4 = 100
 * 5 = 101
 * 6 = 110
 * 7 = 111
 *
 *
 * ! BINARY TO PERMISSION MAPPING
 *
 * r = 4
 * w = 2
 * x = 1
 *
 *
 * Example:
 *
 * rwx
 * = 4 + 2 + 1
 * = 7
 *
 *
 * rw-
 * = 4 + 2
 * = 6
 *
 *
 * r-x
 * = 4 + 1
 * = 5
 *
 *
 * r--
 * = 4
 *
 *
 * --- 
 * = 0
 *
 *
 * ! COMMON EXAMPLES
 *
 * chmod 777 sample
 *
 * rwxrwxrwx
 *
 * - sabko full permissions
 *
 *
 * chmod 755 sample
 *
 * rwxr-xr-x
 *
 * - owner full permissions
 * - group read + execute
 * - others read + execute
 *
 *
 * chmod 644 sample
 *
 * rw-r--r--
 *
 * - owner read + write
 * - group read
 * - others read
 *
 *
 * chmod 600 sample
 *
 * rw-------
 *
 * - sirf owner access kar sakta hai
 *
 *
 * ! USING '=' OPERATOR
 *
 * chmod o=w sample
 *
 * - others ki permission exactly write set hogi
 * - read aur execute remove ho jayengi
 *
 *
 * chmod g=r sample
 *
 * - group ki permission sirf read hogi
 *
 *
 * chmod u=rwx sample
 *
 * - owner ko exactly rwx milega
 *
 *
 * ! IMPORTANT INTERVIEW NOTE
 *
 * First octal digit
 * - user/owner
 *
 * Second octal digit
 * - group
 *
 * Third octal digit
 * - others
 *
 *
 * Example:
 *
 * chmod 764 sample
 *
 * 7 -> rwx (user)
 * 6 -> rw- (group)
 * 4 -> r-- (others)
 *
 * Result:
 * rwxrw-r--
 *
 */