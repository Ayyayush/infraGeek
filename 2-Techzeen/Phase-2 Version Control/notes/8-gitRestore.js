/**
 * Git Restore
 *
 * 1) What is git restore?
 *    - git restore is a Git command used to undo changes.
 *    - It restores files to a previous state.
 *    - Mainly used to discard changes from:
 *        • Working Directory
 *        • Staging Area
 *
 * 2) How to use git restore
 *
 *    a) Restore file from Working Directory
 *       - Discards local changes (not staged):
 *           git restore filename
 *
 *    b) Restore file from Staging Area
 *       - Unstages a file (keeps code changes):
 *           git restore --staged filename
 *
 *    c) Restore multiple files
 *           git restore file1 file2
 *
 *    d) Restore all files
 *           git restore .
 *
 * 3) Advantages of git restore
 *    - Clear and explicit command (easy to understand).
 *    - Safer than git checkout.
 *    - Prevents accidental branch switching.
 *
 * 4) Why to use git restore?
 *    - To undo mistakes safely.
 *    - To clean working directory.
 *    - To unstage files without losing changes.
 *
 * 5) Important Notes
 *    - git restore permanently deletes uncommitted changes.
 *    - Cannot recover discarded changes.
 */
