/**
 * =========================================================
 * CREATING AN AWS ACCOUNT
 * =========================================================
 *
 * AWS account banana DevOps / Cloud journey ka
 * first aur most important step hota hai.
 *
 *
 * ---------------------------------------------------------
 * STEPS TO CREATE AWS ACCOUNT
 * ---------------------------------------------------------
 *
 * STEP 1: AWS Website par jao
 * - https://aws.amazon.com
 * - "Create an AWS Account" par click karo
 *
 *
 * STEP 2: Email & Account Name
 * - Email ID enter karo (future login ke liye)
 * - AWS account name set karo
 *
 *
 * STEP 3: Root User Password
 * - Strong password set karo
 * - Root account ko sirf admin tasks ke liye use karo
 *
 *
 * STEP 4: Contact Information
 * - Account type: Personal (learning ke liye)
 * - Name, address, phone number fill karo
 *
 *
 * STEP 5: Billing Information (IMPORTANT)
 * ---------------------------------------------------------
 * - Credit card / Debit card details deni padti hain
 * - ₹2–₹5 ka temporary verification charge lag sakta hai
 * - Ye amount usually auto-refund ho jata hai
 *
 * ❗ Card dena compulsory hai (free tier ke liye bhi)
 *
 *
 * STEP 6: Identity Verification
 * - Phone number verify hota hai (OTP / call)
 *
 *
 * STEP 7: Support Plan
 * - Free Basic Support select karo
 * - Paid support beginners ke liye required nahi
 *
 *
 * STEP 8: Account Created 🎉
 * - AWS Management Console access mil jata hai
 *
 *
 * ---------------------------------------------------------
 * AWS FREE TIER (VERY IMPORTANT)
 * ---------------------------------------------------------
 *
 * AWS Free Tier:
 * - 12 months valid hota hai
 * - Limited usage free hoti hai
 *
 * Examples:
 * - EC2 t2.micro (750 hours/month)
 * - S3 (5 GB storage)
 * - RDS (limited usage)
 *
 *
 * ---------------------------------------------------------
 * BILLING INFO & COST CONTROL
 * ---------------------------------------------------------
 *
 * ❓ Billing info kyun important hai?
 * - AWS pay-as-you-go model follow karta hai
 * - Agar free tier limit cross ho gayi
 *   to charges lag sakte hain
 *
 *
 * ---------------------------------------------------------
 * HOW TO PREVENT UNEXPECTED BILLING (MOST IMPORTANT)
 * ---------------------------------------------------------
 *
 * 1) BILLING ALERT SET KARO
 *    - Billing Dashboard → Budgets
 *    - Monthly budget: ₹0 ya ₹100 set karo
 *    - Email alert enable karo
 *
 *
 * 2) FREE TIER USAGE CHECK KARTE RAHO
 *    - Billing → Free Tier
 *    - Kaunsa service kitna use hua check karo
 *
 *
 * 3) UNUSED RESOURCES DELETE KARO
 *    - EC2 instances stop/terminate karo
 *    - Load balancers, NAT Gateway avoid karo
 *
 *
 * 4) REGION CAREFULLY SELECT KARO
 *    - Kuch regions me cost zyada hoti hai
 *    - Learning ke liye: ap-south-1 (Mumbai)
 *
 *
 * 5) ROOT USER DAILY USE NA KARO
 *    - IAM user create karo
 *    - Limited permissions do
 *
 *
 * 6) SERVICES CLOSE AFTER PRACTICE
 *    - Practice ke baad:
 *      EC2 → Terminate
 *      RDS → Delete
 *
 *
 * ---------------------------------------------------------
 * COMMON BEGINNER MISTAKES (INTERVIEW POINT)
 * ---------------------------------------------------------
 *
 * ❌ EC2 run karke bhool jana
 * ❌ NAT Gateway create karna (very costly)
 * ❌ Billing alert set na karna
 * ❌ Root user se daily kaam karna
 *
 *
 * ---------------------------------------------------------
 * INTERVIEW FRIENDLY ANSWER
 * ---------------------------------------------------------
 *
 * Q: How do you prevent unexpected AWS billing?
 *
 * Ans:
 * I enable billing alerts and budgets, monitor free tier
 * usage, delete unused resources, avoid costly services
 * like NAT Gateway, and use IAM users instead of the root
 * account.
 *
 *
 * ---------------------------------------------------------
 * SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - AWS account creation is simple
 * - Card details required
 * - Free tier available (limited)
 * - Billing alerts are mandatory for safety
 *
 */