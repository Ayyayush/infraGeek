/**
 * ! Uploading Files on AWS S3 Bucket from Next.js
 * 
 * ! Overview
 * Is topic me hum dekhenge ki Next.js application se AWS S3 bucket me
 * files kaise upload karte hain.
 * 
 * AWS S3 ek cloud storage service hai jisme hum images, videos,
 * documents ya koi bhi files store kar sakte hain.
 * 
 * Web applications me S3 ka use commonly hota hai:
 * - user uploads store karne ke liye
 * - images store karne ke liye
 * - static assets host karne ke liye
 * 
 * 
 * ! Step 1: Create S3 Bucket
 * Sabse pehle AWS console me ek S3 bucket create karni hoti hai.
 * 
 * Example bucket name:
 * my-nextjs-upload-bucket
 * 
 * Important points:
 * - bucket name globally unique hona chahiye
 * - region select karna hota hai
 * 
 * 
 * ! ACL Disabled
 * Is setup me hum ACL (Access Control List) disable rakhenge.
 * 
 * Kyunki modern AWS security model me
 * bucket policies use karna recommended hota hai.
 * 
 * ACL disable hone ka matlab:
 * access control sirf bucket policy se manage hoga.
 * 
 * 
 * ! Bucket Policy
 * Bucket policy ek JSON document hota hai
 * jo define karta hai:
 * 
 * - kaun access kar sakta hai
 * - kaunsi action perform kar sakta hai
 * - kis resource pe access milega
 * 
 * Ye basically permissions define karta hai.
 * 
 * 
 * ! Bucket Policy Syntax
 * Bucket policy JSON format me likhi jati hai.
 * 
 * Basic structure:
 * 
 * {
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "AllowUpload",
 *       "Effect": "Allow",
 *       "Principal": "*",
 *       "Action": "s3:PutObject",
 *       "Resource": "arn:aws:s3:::my-nextjs-upload-bucket/*"
 *     }
 *   ]
 * }
 * 
 * 
 * ! Important Fields in Bucket Policy
 * 
 * ! Version
 * Ye policy language ka version define karta hai.
 * 
 * Example:
 * "Version": "2012-10-17"
 * 
 * Ye AWS ka standard policy version hai.
 * 
 * 
 * ! Statement
 * Ye policy rules ka main block hota hai.
 * Iske andar ek ya multiple permission rules likhe ja sakte hain.
 * 
 * Example:
 * "Statement": [ ... ]
 * 
 * 
 * ! Sid (Statement ID)
 * Ye optional identifier hota hai jo rule ko identify karta hai.
 * 
 * Example:
 * "Sid": "AllowUpload"
 * 
 * 
 * ! Effect
 * Ye define karta hai permission allow hogi ya deny.
 * 
 * Possible values:
 * Allow
 * Deny
 * 
 * Example:
 * "Effect": "Allow"
 * 
 * 
 * ! Principal
 * Ye define karta hai ki kaun access kar sakta hai.
 * 
 * Example:
 * "*" → public access
 * 
 * Example:
 * "Principal": "*"
 * 
 * 
 * ! Action
 * Ye batata hai kaunsa operation allowed hai.
 * 
 * Example actions:
 * s3:GetObject  → file read
 * s3:PutObject  → file upload
 * s3:DeleteObject → file delete
 * 
 * Example:
 * "Action": "s3:PutObject"
 * 
 * 
 * ! Resource
 * Ye define karta hai kis bucket ya object par policy apply hogi.
 * 
 * Example:
 * "Resource": "arn:aws:s3:::my-nextjs-upload-bucket/*"
 * 
 * Ye bucket ke sabhi objects ko represent karta hai.
 * 
 * 
 * ! Next Step (Next.js Integration)
 * Bucket policy define karne ke baad Next.js app me
 * AWS SDK use karke file upload implement karte hain.
 * 
 * Example use cases:
 * - profile image upload
 * - file upload system
 * - document storage
 * 
 */