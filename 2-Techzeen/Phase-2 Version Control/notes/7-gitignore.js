/**
 * .gitignore File
 *
 * 1) What is .gitignore?
 *    - .gitignore is a file used by Git to specify which files or
 *      folders should NOT be tracked in a repository.
 *    - These files remain on your local system but are ignored by Git.
 *
 * 2) Purpose of .gitignore
 *    - Prevent committing unnecessary or sensitive files.
 *    - Keep the repository clean and lightweight.
 *    - Avoid pushing:
 *        • node_modules
 *        • build/dist files
 *        • environment variables (.env)
 *        • logs and cache files
 *
 * 3) How to Use .gitignore
 *    - Create a file named `.gitignore` in the root of the project.
 *    - Add file or folder patterns line by line.
 *    - Git will ignore matching files automatically.
 *
 * 4) Rules of .gitignore
 *    - Each line represents one ignore rule.
 *    - Blank lines are ignored.
 *    - Lines starting with `#` are comments.
 *    - Use `/` to specify directories.
 *    - Use `*` as a wildcard.
 *    - Use `!` to negate (include) a previously ignored file.
 *
 * 5) Common Examples
 *    node_modules/
 *    .env
 *    *.log
 *    build/
 *    dist/
 *    !important.log
 * 
 * 
 * 
 * 
 */
