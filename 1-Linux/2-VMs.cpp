/**
 * ==================================================
 * VIRTUAL MACHINES (VM)
 * ==================================================
 *
 * What is a Virtual Machine?
 * - A Virtual Machine is a software-based computer
 * - It runs an operating system inside another OS
 * - It behaves like a real (physical) machine
 *
 * ==================================================
 * WHY DO WE NEED VIRTUAL MACHINES?
 * ==================================================
 *
 * Use Case 1: Software Testing
 * ----------------------------------
 * Suppose:
 * - Main Windows machine hai
 * - Ek software develop kiya
 * - Target platforms:
 *   - Windows
 *   - Linux
 *
 * Publish karne se pehle testing zaroori hai
 * - Windows pe testing easy hai
 * - Linux pe testing kaise kare?
 *
 * Solution:
 * - Use a Linux Virtual Machine on Windows
 *
 * ----------------------------------
 * Use Case 2: Learning Linux
 * ----------------------------------
 * - Linux seekhna hai
 * - But main system Windows hai
 * - Dual boot risky ho sakta hai
 *
 * Solution:
 * - Linux VM install karke safely practice karo
 *
 * ==================================================
 * VIRTUALIZATION
 * ==================================================
 *
 * Virtualization:
 * - Technique to run multiple operating systems
 *   on a single physical machine
 *
 * Example:
 * - Windows OS ke upar
 * - Linux OS ko run karna
 *
 * ==================================================
 * HOW DOES THIS WORK INTERNALLY?
 * ==================================================
 *
 * There is an extra software layer called:
 * - HYPERVISOR
 *
 * Hypervisor:
 * - A software that creates and runs Virtual Machines
 * - It allocates:
 *   - CPU
 *   - Memory
 *   - Storage
 *   - Network
 *   to each VM
 * 
 * oracle virtual box is a example of ti
 *
 * 
 * types of hypervsr 
 * 
 * bare metak
 * decrition 
 * 
 * 
 * 
 * why do comanies use vitualizai
 * maintian krne ka headcahe nhi
 * cheap
 * easy bakcup using snapshot 
 * easy recovery 
 * 
 * 
 * hosted 
 * ==================================================
 * SUMMARY (INTERVIEW LINE)
 * ==================================================
 *
 * - Virtual Machine allows running one OS inside another OS
 * - Virtualization is the technique behind it
 * - Hypervisor is the core software that manages VMs
 *
 * ==================================================
 */
