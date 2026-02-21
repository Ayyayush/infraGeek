/**
 * Alias Command in Git
 *
 * 1) What is an Alias in Git?
 *    - Alias is a shortcut for a long Git command.
 *    - It helps save time and typing effort.
 *    - Example:
 *        git status  →  git st
 *
 * 2) Basic Terminal Commands (Very Basic but Important)
 *
 *    cd ..
 *    - Moves one directory back (parent directory).
 *
 *    ls
 *    - Lists all visible files and folders in current directory.
 *
 *    ls -a
 *    - Lists ALL files including hidden files
 *      (files starting with . like .git, .gitignore).
 *
 * 3) What is .gitconfig File?
 *    - .gitconfig is a Git configuration file.
 *    - It stores:
 *        • User name
 *        • Email
 *        • Aliases
 *        • Other Git settings
 *
 * 4) What is Configuration?
 *    - Configuration means setting rules or preferences
 *      for how Git should behave.
 *
 * 5) Where Aliases are Created?
 *    - Aliases are created inside the .gitconfig file.
 *    - Once created, they work for:
 *        • All repositories of that user (global)
 *
 * 6) Can we create aliases for any repository?
 *    - YES.
 *    - Aliases work for all repositories linked
 *      to your Git user configuration.
 *
 * 7) How to Open .gitconfig File?
 *
 *    a) Using command:
 *       git config --global --edit
 *
 *    b) Location (Windows):
 *       C:\Users\<username>\.gitconfig
 *
 * 8) Alias Syntax inside .gitconfig
 *
 *    [alias]
 *    st = status
 *    rt = revert
 *    rs = restore
 *    cm = commit -m
 *
 * 9) Spacing Rules in Alias
 *    - If command has spaces:
 *        • Use space after =
 *        • Or use tab
 *        • Or use quotes
 *
 *    Example:
 *      cm = commit -m
 *
 * 10) How to Clear PowerShell Terminal?
 *
 *    - Command:
 *        cls
 *
 * 11) git status Command
 *    - Shows:
 *        • Modified files
 *        • Staged files
 *        • Untracked files
 *
 *    - Alias usage:
 *        git st
 *
 * 12) Interview One-Liner
 *    - "Git aliases are shortcuts defined in .gitconfig
 *       to speed up commonly used Git commands."
 * 
 * git b
 * ls -a
 * nano config 
 * 
 * cd .git 
 */
