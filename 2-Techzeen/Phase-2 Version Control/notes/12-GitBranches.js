/**
 * Git Branches
 *
 * 1) What are Branches?
 *    - A branch is a separate line of development in Git.
 *    - It allows developers to work on features or fixes
 *      without affecting the main codebase.
 *    - Each branch points to a specific commit.
 *
 * 2) Why Branches are Used
 *    - Parallel development.
 *    - Safe experimentation.
 *    - Easy collaboration in teams.
 *    - Clean and controlled code integration.
 *
 * 3) Types of Branches (Common in Industry)
 *
 *    a) main / master
 *       - Stable production-ready code.
 *       - Only tested and reviewed code is merged here.
 *
 *    b) develop
 *       - Integration branch.
 *       - All features are merged here first.
 *
 *    c) feature branches
 *       - Created for new features.
 *       - Example:
 *           feature/login
 *           feature/payment
 *
 *    d) hotfix branches
 *       - Used to fix urgent production bugs.
 *       - Created from main branch.
 *
 *    e) release branches
 *       - Used for final testing before production release.
 *
 * 4) Commands to Create Branches
 *
 *    - Create a new branch:
 *        git branch branch_name
 *
 *    - Create and switch to new branch:
 *        git checkout -b branch_name
 *        OR
 *        git switch -c branch_name
 *
 *    - List branches:
 *        git branch
 *
 * 5) How Many Branches in DevOps Field?
 *    - Generally 3–5 long-living branches:
 *        • main
 *        • develop
 *        • release
 *    - Plus multiple short-living feature/hotfix branches.
 *
 * 6) Which Branch to Work On in Large Projects?
 *    - Developers NEVER work directly on main branch.
 *    - Work is done on:
 *        • feature branches
 *        • develop branch (indirectly via merge)
 *
 *    Flow:
 *      feature → develop → main
 *
 * 7) DevOps / CI-CD Perspective
 *    - main branch triggers production deployment.
 *    - develop branch triggers staging deployment.
 *    - Feature branches trigger test pipelines.
 *
 * 8) Interview One-Liner
 *    - "Branches allow parallel development while keeping
 *       the production code stable."
 */





/**
 * Commands and Their Short Description
 *
 * 1) git rebase
 *    - Moves commits from one branch on top of another branch.
 *    - Creates a clean, linear commit history.
 *    - Used mainly for local branches.
 *
 *    Example:
 *      git rebase develop
 *
 * 2) --decorate
 *    - Shows branch names and HEAD in git log output.
 *    - Helps identify which branch points to which commit.
 *
 *    Example:
 *      git log --decorate
 *
 * 3) --graph --all
 *    - --graph:
 *      Displays commit history as a visual graph.
 *
 *    - --all:
 *      Shows commits from all branches.
 *
 *    Example:
 *      git log --graph --all
 *
 * 4) echo
 *    - Creates or writes text into a file.
 *    - Commonly used for quick file creation while practicing Git.
 *
 *    Example:
 *      echo "hello" > file.txt
 *
 * 5) git merge
 *    - Combines changes from one branch into another branch.
 *    - Preserves commit history.
 *
 *    Example:
 *      git merge feature/login
 *
 * 6) Conflict Commands
 *
 *    git status
 *    - Shows files that have merge conflicts.
 *
 *    git diff
 *    - Displays conflicting code differences.
 *
 *    git add <file>
 *    - Marks conflict as resolved.
 *
 *    git commit
 *    - Completes the merge after resolving conflicts.
 *
 * 7) Delete Commands
 *
 *    git branch -d branch_name
 *    - Safely deletes a merged branch.
 *
 *    git branch -D branch_name
 *    - Force deletes a branch (even if not merged).
 *
 *    git push origin --delete branch_name
 *    - Deletes a remote branch.
 *
 * 8) Interview One-Liner
 *    - "Rebase rewrites history, merge preserves history."
 */
