/**
 * ! PERMISSIONS IN LINUX
 *
 * Linux mein har file aur directory ke permissions hote hain
 * ye decide karte hain:
 * - kaun file read kar sakta hai
 * - kaun write/edit kar sakta hai
 * - kaun execute/run kar sakta hai
 *
 *
 * ! DEFAULT GROUP CREATION IN UBUNTU
 *
 * Ubuntu by default:
 * - jab naya user create hota hai
 * - toh usi naam ka ek group bhi create kar deta hai
 *
 * Example:
 * User:
 * ayush
 *
 * Group:
 * ayush
 *
 *
 * ! CHECKING FILE TYPES AND PERMISSIONS
 *
 * cd /bin
 * ls -l
 *
 * Example Output:
 *
 * -rwxr-xr-x
 *
 *
 * ! FIRST CHARACTER MEANING
 *
 * First character file type batata hai:
 *
 * -
 * - normal file
 *
 * d
 * - directory
 *
 * l
 * - symbolic link
 *
 *
 * ! PERMISSION STRUCTURE
 *
 * Example:
 *
 * -rwxr-xr--
 *
 * Break it:
 *
 * -
 * rwx
 * r-x
 * r--
 *
 *
 * ! OWNER / GROUP / OTHERS
 *
 * rwx
 * - owner permissions
 *
 * r-x
 * - group permissions
 *
 * r--
 * - others permissions
 *
 *
 * ! MEANING OF r w x
 *
 * r
 * - read permission
 *
 * w
 * - write permission
 *
 * x
 * - execute permission
 *
 * -
 * - permission not granted
 *
 *
 * ! UNDERSTANDING WITH USERS
 *
 * maan lo 3 users hain:
 *
 * A
 * B
 * C
 *
 * File owner:
 * A
 *
 * Group:
 * developers
 *
 * Others:
 * baaki users
 *
 *
 * ! OWNER PERMISSION
 *
 * first rwx:
 *
 * rwx
 *
 * - owner read kar sakta hai
 * - owner write/edit kar sakta hai
 * - owner execute/run kar sakta hai
 *
 *
 * ! GROUP PERMISSION
 *
 * second rwx block:
 *
 * r-x
 *
 * - group members read kar sakte hain
 * - execute kar sakte hain
 * - write nahi kar sakte
 *
 *
 * ! OTHER PERMISSION
 *
 * third rwx block:
 *
 * r--
 *
 * - baaki users sirf read kar sakte hain
 *
 *
 * ! IMPORTANT NOTES
 *
 * r or -
 * - read ya no read
 *
 * w or -
 * - write ya no write
 *
 * x or -
 * - execute ya no execute
 *
 *
 * ! COMMON COMMAND
 *
 * ls -l
 *
 * - permissions long listing format mein dikhata hai
 *
 *
 * ! SUMMARY
 *
 * File types:
 * -
 * - normal file
 *
 * d
 * - directory
 *
 * l
 * - symbolic link
 *
 *
 * Permissions:
 * rwx
 * - owner
 *
 * rwx
 * - group
 *
 * rwx
 * - others
 *
 */