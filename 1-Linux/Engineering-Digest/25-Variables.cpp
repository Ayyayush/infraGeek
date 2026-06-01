/**
 * ! VARIABLES IN LINUX ENVIRONMENT
 * humne shell sessions padh liye
 * ab har shell session kuch information store karke rakhta hai
 * in values ko Environment Variables kehte hain
 * ye variables shell aur applications dono use kar sakte hain
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! WHAT ARE ENVIRONMENT VARIABLES ?
 * ---------------------------------------------------
 * environment variables = key-value pairs
 * shell ke environment ka part hoti hain
 * Examples:
 * USER
 * HOME
 * PATH
 * SHELL
 * HOSTNAME
 * PWD
 * ye variables shell start hote hi automatically available hote hain
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VIEW ALL ENVIRONMENT VARIABLES
 * ---------------------------------------------------
 * printenv
 * ya
 * env
 * Example:
 * USER=ayush
 * HOME=/home/ayush
 * SHELL=/bin/bash
 * PATH=/usr/local/bin:/usr/bin:/bin
 * printenv current environment ka sara data show karta hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VIEW A SPECIFIC VARIABLE
 * ---------------------------------------------------
 * printenv USER
 * Example Output:
 * ayush
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! USING ECHO
 * ---------------------------------------------------
 * echo $USER
 * Example Output:
 * ayush
 * shell variable access karne ke liye '$' use hota hai
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! IMPORTANT ENVIRONMENT VARIABLES
 * ---------------------------------------------------
 * USER -> current logged in user
 * HOME -> current user ka home directory
 * SHELL -> current shell path
 * PWD -> current working directory
 * PATH -> command search paths
 * HOSTNAME -> machine ka hostname
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! SWITCH USER SESSION
 * ---------------------------------------------------
 * su - ayush
 * ya
 * su - username
 * yeh ek naya login shell create karta hai
 * aur naye user ke environment variables load karta hai
 * Example:
 * printenv USER
 * Output:
 * root
 * su - ayush
 * printenv USER
 * Output:
 * ayush
 * dhyan do:
 * environment variables change ho gaye
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CREATE A SHELL VARIABLE
 * ---------------------------------------------------
 * name=vipul
 * variable create ho gaya
 * check:
 * echo $name
 * Output:
 * vipul
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! IMPORTANT POINT
 * ---------------------------------------------------
 * name=vipul
 * sirf shell variable hai
 * environment variable nahi hai
 * isliye:
 * printenv | grep name
 * kuch output nahi dega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CREATE ENVIRONMENT VARIABLE
 * ---------------------------------------------------
 * export my_mail=mymail.com
 * ya
 * export name=vipul
 * ab ye environment variable ban gaya
 * check:
 * printenv | grep my_mail
 * Output:
 * my_mail=mymail.com
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! ACCESS ENVIRONMENT VARIABLE
 * ---------------------------------------------------
 * echo $my_mail
 * Output:
 * mymail.com
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! SHELL VARIABLE VS ENVIRONMENT VARIABLE
 * ---------------------------------------------------
 * name=vipul
 * sirf current shell mein available
 * export name=vipul
 * current shell + child processes mein available
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VARIABLE INHERITANCE
 * ---------------------------------------------------
 * name=vipul
 * echo $name
 * Output:
 * vipul
 * bash
 * echo $name
 * Output:
 * (blank)
 * kyunki shell variable inherit nahi hua
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! ENVIRONMENT VARIABLE INHERITANCE
 * ---------------------------------------------------
 * export my_mail=mymail.com
 * bash
 * echo $my_mail
 * Output:
 * mymail.com
 * kyunki environment variables child shell ko inherit ho jate hain
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! VISUAL REPRESENTATION
 * ---------------------------------------------------
 * Parent Shell
 * name=vipul
 * export my_mail=mymail.com
 *          |
 *          V
 * Child Shell (bash)
 * name    -> not available
 * my_mail -> available
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! REMOVE A VARIABLE
 * ---------------------------------------------------
 * unset name
 * ya
 * unset my_mail
 * variable delete ho jayega
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! CHECK ALL VARIABLES
 * ---------------------------------------------------
 * set
 * shell variables + environment variables + shell functions
 * printenv
 * sirf environment variables
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------
 * Q1. What are environment variables?
 * Ans:
 * key-value pairs jo shell aur applications ko configuration
 * information provide karti hain.
 *
 * Q2. Difference between shell variable and environment variable?
 * Ans:
 * Shell Variable:
 * sirf current shell mein available hota hai.
 * Environment Variable:
 * child processes aur child shells mein bhi available hota hai.
 *
 * Q3. How do you display all environment variables?
 * Ans:
 * printenv
 * ya
 * env
 *
 * Q4. How do you create an environment variable?
 * Ans:
 * export VAR_NAME=value
 * Example:
 * export name=vipul
 *
 * Q5. Why is export used?
 * Ans:
 * variable ko environment ka part banane ke liye taaki
 * child processes usse inherit kar saken.
 *
 * Q6. Difference between printenv and set?
 * Ans:
 * printenv -> sirf environment variables
 * set -> shell variables + environment variables + functions
 *
 * Q7. What happens when you run bash after export?
 * Ans:
 * child shell environment variables inherit kar leti hai.
 *
 * Q8. How do you delete a variable?
 * Ans:
 * unset variable_name
 * Example:
 * unset name
 *
 *
 *
 *
 * ---------------------------------------------------
 * ! MEMORY TIP
 * ---------------------------------------------------
 * name=vipul        -> Shell Variable
 * export name=vipul -> Environment Variable
 * printenv          -> Show Environment Variables
 * echo $VAR         -> Read Variable
 * unset VAR         -> Delete Variable
 */