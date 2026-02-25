/**
 * What is IAM (Identity and Access Management)
 *
 * IAM ek AWS service hai jiska use karke hum
 * AWS account ke users, roles aur permissions ko manage kar sakte hain.
 *
 * Real-world scenario:
 * Company kabhi bhi apna ROOT USER access developers ko nahi deti
 * kyunki root user ke paas full control hota hai (high security risk).
 *
 * Isliye company IAM ka use karti hai:
 * - Alag-alag IAM Users create karti hai
 * - Har user ko sirf required permissions deti hai
 *
 * IAM ka full form:
 * Identity  → User / Role ka identity
 * Access    → Kis cheez ka access milega
 * Management→ Permissions ko control karna
 *
 * IAM se hum kya-kya kar sakte hain:
 * - IAM Users create karna (developers, testers, admins)
 * - Groups banana (DevOps, Backend, QA, etc.)
 * - Policies attach karna (Read-only, Full access, Custom access)
 * - Roles create karna (EC2, Lambda, services ke liye)
 * - MFA enable karna (extra security ke liye)
 *
 * Important Point:
 * IAM globally available service hai (region-specific nahi hoti)
 *
 * ---------------------------------------------------------
 * Steps to Configure IAM User (Hinglish)
 * ---------------------------------------------------------
 *
 * 1. Login to AWS Console using Root User
 * 2. Search "IAM" in AWS services
 * 3. Go to IAM Dashboard
 * 4. Click on "Users"
 * 5. Click on "Create User"
 * 6. Enter User Name (e.g. devops-user)
 * 7. Select access type:
 *    - AWS Management Console access (GUI)
 *    - Programmatic access (CLI / SDK)
 * 8. Set password / auto-generate password
 * 9. Assign permissions:
 *    - Add user to group (recommended)
 *    - Or attach existing policies directly
 * 10. Review details and click "Create User"
 * 11. Download credentials (important – baad me nahi milta)
 *
 * After this:
 * Developer apne IAM credentials se login karega
 * aur sirf wahi services access kar payega
 * jinki permission usko di gayi hai.
 *
 * ---------------------------------------------------------
 * Interview One-Liner:
 * IAM is an AWS service used to securely manage users,
 * roles, and permissions without sharing root access.
 */