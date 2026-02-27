/**
 * =========================================================
 * ! CREATING S3 BUCKET (STEP BY STEP)
 * =========================================================
 *
 * ! WHAT IS S3 BUCKET (RECAP)
 * ---------------------------------------------------------
 * S3 AWS ki storage service hai.
 * Jab hume files store karni hoti hain (static files),
 * to hum S3 me ek bucket create karte hain.
 *
 * Bucket = Container
 * Files = Objects
 *
 *
 * ! WHY BUCKET NAME MUST BE UNIQUE
 * ---------------------------------------------------------
 * S3 bucket ka naam:
 * - Globally unique hota hai (poori AWS me)
 * - Kyunki bucket ka naam URL ka part ban jata hai
 *
 * Example:
 * https://my-bucket-name.s3.region.amazonaws.com/file.csv
 *
 *
 * ! STEP 1: CREATE BUCKET
 * ---------------------------------------------------------
 * AWS Console → S3 → Create bucket
 *
 * Bucket name:
 * my-bucket
 *
 * ❗ Agar naam already exist hai
 * to AWS error de dega
 *
 *
 * ! STEP 2: REGION SELECT KARO
 * ---------------------------------------------------------
 * Region choose karo
 * Example:
 * eu-north-1
 *
 * (Region paas hone se latency kam hoti hai)
 *
 *
 * ! STEP 3: ACLs (ACCESS CONTROL LIST)
 * ---------------------------------------------------------
 * By default:
 * ACLs disabled hoti hain (recommended for security)
 *
 * ACL kya karta hai?
 * - Ye file / bucket level pe permissions deta hai
 * - Read / Write access control karta hai
 *
 * ❗ Aaj bhi:
 * - Choti applications
 * - Simple public file hosting
 * me ACL use hota hai
 *
 * Is case me:
 * ACL enable kar diya
 *
 *
 * ! STEP 4: BLOCK PUBLIC ACCESS
 * ---------------------------------------------------------
 * By default:
 * - Public access block hota hai
 *
 * Yahan:
 * - Hum "Block Public Access" ko OFF kar dete hain
 *
 * ⚠️ Matlab:
 * Bucket public ho sakta hai
 *
 *
 * ! STEP 5: BUCKET VERSIONING
 * ---------------------------------------------------------
 * Versioning ka matlab:
 * - Har file update par
 *   - Old version bhi rahegi
 *   - New version bhi rahegi
 *
 * Abhi ke liye:
 * - Versioning disable rakhi
 *
 *
 * ! STEP 6: CREATE BUCKET
 * ---------------------------------------------------------
 * "Create bucket" par click
 *
 * Bucket successfully create ho gaya ✅
 *
 *
 * ! STEP 7: UPLOAD FILES
 * ---------------------------------------------------------
 * Bucket open karo
 * Upload file / folder
 *
 * Example file:
 * students.csv
 *
 *
 * ! FILE URL (OBJECT URL)
 * ---------------------------------------------------------
 * Upload ke baad URL mila:
 *
 * https://1-my-bucket-ayyayush.s3.eu-north-1.amazonaws.com/students.csv
 *
 *
 * ! IMPORTANT CONFUSION (VERY IMPORTANT)
 * ---------------------------------------------------------
 * ❓ Bucket public hai
 * ❓ Phir bhi file access denied kyun?
 *
 * ANSWER:
 * ❌ Sirf bucket public banana enough nahi hota
 * ✅ File (object) ko bhi public banana padta hai
 *
 *
 * ! HOW TO MAKE FILE PUBLIC
 * ---------------------------------------------------------
 *
 * METHOD 1: USING ACL
 * - File select karo
 * - Permissions tab open karo
 * - ACL me:
 *   Public Read enable karo
 *
 *
 * METHOD 2: USING BUCKET POLICY (BEST PRACTICE)
 * ---------------------------------------------------------
 * Bucket policy add karo:
 *
 * {
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Effect": "Allow",
 *       "Principal": "*",
 *       "Action": "s3:GetObject",
 *       "Resource": "arn:aws:s3:::my-bucket/*"
 *     }
 *   ]
 * }
 *
 * Iske baad:
 * - Bucket ke andar saari files public ho jaayengi
 *
 *
 * ! INTERVIEW TIP
 * ---------------------------------------------------------
 * Bucket public ≠ Object public
 *
 * Dono ko alag-alag permission chahiye hoti hai.
 *
 *
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 *
 * - S3 bucket create ki
 * - Bucket name globally unique hota hai
 * - Bucket public banaya
 * - File ko separately public karna padta hai
 * - URL ke through file access hoti hai
 *
 */