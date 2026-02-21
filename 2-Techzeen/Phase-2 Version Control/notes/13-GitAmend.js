/**
 * Git Amend Command
 *
 * 1) What is Git Amend?
 *    - git commit --amend is used to modify the
 *      most recent commit.
 *    - It can:
 *        • Change the commit message
 *        • Add missed files to the last commit
 *
 * 2) Syntax
 *
 *    - Modify last commit message:
 *        git commit --amend
 *
 *    - Add missed files to last commit:
 *        git add file.txt
 *        git commit --amend --no-edit
 *
 *    - Change message directly:
 *        git commit --amend -m "New commit message"
 *
 * 3) Why to Use git amend?
 *
 *    - To fix small mistakes in the last commit.
 *    - To correct commit message.
 *    - To add forgotten files.
 *    - To keep commit history clean.
 *
 * 4) Advantages
 *
 *    - Cleaner commit history.
 *    - Avoids creating unnecessary extra commits.
 *    - Makes code review easier.
 *
 * 5) Rules (VERY IMPORTANT)
 *
 *    - Only amend the most recent commit.
 *    - Do NOT amend commits that are already pushed.
 *    - If pushed, amending requires force push:
 *
 *        git push --force
 *
 *    - Force push can overwrite remote history
 *      and affect other team members.
 *
 * 6) Interview One-Liner
 *
 *    - "git commit --amend modifies the last commit
 *       without creating a new commit."
 */
