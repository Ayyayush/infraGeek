/**
 * Git Revert Command
 *
 * 1) What is git revert?
 *    - git revert is a Git command used to undo a commit.
 *    - It does NOT delete the commit history.
 *    - Instead, it creates a NEW commit that reverses
 *      the changes of a previous commit.
 *
 * 2) Why to use git revert?
 *    - To safely undo changes in shared branches.
 *    - To fix bugs in production without rewriting history.
 *    - To maintain a clean and auditable commit history.
 *
 * 3) Advantages of git revert
 *    - Safe for public/shared branches (main, develop).
 *    - No history rewrite.
 *    - Easy to track what was reverted and when.
 *    - Ideal for production hotfixes.
 *
 * 4) Rules to follow
 *    - Use git revert for commits that are already pushed.
 *    - Do NOT use git reset on shared branches.
 *    - Always review the revert commit message.
 *    - Test after reverting, especially in production.
 *
 * 5) How to use git revert
 *    - Revert a single commit:
 *        git revert <commit-hash>
 *
 *    - Revert multiple commits:
 *        git revert <hash1> <hash2>
 *
 *    - Revert without auto-commit:
 *        git revert -n <commit-hash>
 */
