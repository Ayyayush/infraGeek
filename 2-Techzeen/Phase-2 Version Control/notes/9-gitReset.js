/**
 * Git Reset Command
 *
 * 1) What is git reset?
 *    - git reset is used to undo commits.
 *    - It moves the HEAD pointer to a previous commit.
 *    - It can affect:
 *        • Commit history
 *        • Staging area
 *        • Working directory
 *
 * 2) Types of git reset
 *
 *    a) --soft
 *       - Removes commit but keeps changes staged.
 *       - HEAD moves back.
 *       - Syntax:
 *           git reset --soft <commit-hash>
 *
 *    b) --mixed (default)
 *       - Removes commit and unstages changes.
 *       - Working directory remains unchanged.
 *       - Syntax:
 *           git reset <commit-hash>
 *
 *    c) --hard
 *       - Removes commit and deletes all changes.
 *       - Very dangerous.
 *       - Syntax:
 *           git reset --hard <commit-hash>
 *
 * 3) Difference: Reset vs Revert
 *
 *    git reset:
 *    - Rewrites commit history.
 *    - Deletes commits.
 *    - NOT safe for shared branches.
 *
 *    git revert:
 *    - Creates a new commit to undo changes.
 *    - Keeps history intact.
 *    - Safe for shared branches.
 *
 * 4) Difference: Reset vs Restore
 *
 *    git reset:
 *    - Used for undoing commits.
 *    - Moves HEAD.
 *
 *    git restore:
 *    - Used for undoing file changes.
 *    - Does NOT affect commit history.
 *
 * 5) Difference: Revert vs Restore
 *
 *    git revert:
 *    - Undoes a committed change.
 *    - Creates a new commit.
 *
 *    git restore:
 *    - Discards uncommitted changes.
 *    - No commit involved.
 *
 * 6) How to Use These Commands (Syntax)
 *
 *    - Undo last commit (keep changes staged):
 *        git reset --soft HEAD~1
 *
 *    - Undo last commit (unstage changes):
 *        git reset HEAD~1
 *
 *    - Completely remove last commit:
 *        git reset --hard HEAD~1
 *
 *    - Unstage a file:
 *        git restore --staged file.txt
 *
 *    - Discard local changes:
 *        git restore file.txt
 *
 *    - Safely undo a pushed commit:
 *        git revert <commit-hash>
 *
 * 7) When to Use Which Command
 *
 *    - Use git reset:
 *        • Local commits
 *        • Before pushing
 *
 *    - Use git revert:
 *        • Pushed commits
 *        • Shared branches
 *
 *    - Use git restore:
 *        • File-level changes
 *        • Before committing
 */
