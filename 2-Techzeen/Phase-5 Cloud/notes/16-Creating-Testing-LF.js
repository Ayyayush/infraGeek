/**
 * ! Creating and Testing AWS Lambda Function
 * 
 * ! Overview
 * AWS Lambda ka use backend code ko cloud me run karne ke liye hota hai
 * bina server manage kiye.
 * 
 * Hum apna code likhte hain aur AWS Lambda usko run karta hai
 * jab koi event ya trigger hota hai.
 * 
 * Example triggers:
 * - API request (API Gateway)
 * - File upload (S3)
 * - Database update
 * - Scheduled cron job
 * 
 * 
 * ! Steps to Create Lambda Function
 * 
 * 1️⃣ AWS Console open karo
 * 
 * AWS Management Console me login karo
 * aur search bar me "Lambda" search karo.
 * 
 * 
 * 2️⃣ Create Lambda Function
 * 
 * Lambda dashboard me jaake
 * "Create Function" button click karo.
 * 
 * Options milte hain:
 * 
 * - Author from scratch
 * - Use a blueprint
 * - Container image
 * 
 * Usually hum "Author from scratch" choose karte hain.
 * 
 * 
 * 3️⃣ Basic Configuration
 * 
 * Function name: example-welcome-function
 * 
 * Runtime select karo:
 * 
 * Example:
 * Node.js 18
 * 
 * Fir "Create Function" pe click karo.
 * 
 * 
 * ! Lambda Code Editor
 * 
 * Function create hone ke baad AWS ek
 * inbuilt code editor provide karta hai.
 * 
 * Yahi pe hum apna backend code likhte hain.
 * 
 * 
 * ! Example Lambda Code (Node.js)
 * 
 * Ye ek simple function hai jo user ko welcome message return karta hai.
 * 
 */
export const handler = async (event) => {

  const name = event.name || "User";   // agar event me name nahi hai toh default "User"

  const response = {
    statusCode: 200,                   // HTTP success response
    body: JSON.stringify({
      message: `Welcome ${name}! Thank you for registering`
    }),
  };

  return response;
};


/**
 * ! Code Explanation
 * 
 * handler → main function hota hai jo Lambda run karta hai
 * event → input data hota hai jo trigger se aata hai
 * 
 * Example input event:
 * 
 * {
 *   "name": "Ayush"
 * }
 * 
 * Output:
 * 
 * Welcome Ayush! Thank you for registering
 * 
 * 
 * ! Deploy the Lambda Function
 * 
 * Code likhne ke baad
 * "Deploy" button click karo.
 * 
 * Ye code AWS Lambda pe deploy ho jayega.
 * 
 * 
 * ! Testing the Lambda Function
 * 
 * Lambda console me "Test" option hota hai.
 * 
 * Test event create karo.
 * 
 * Example Test Event:
 * 
 */



 /**
 * Fir "Test" button click karo.
 * 
 * Lambda function run ho jayega aur output
 * console me show ho jayega.
 * 
 * 
 * ! Example Output
 * 
 * {
 *   "statusCode": 200,
 *   "body": "{\"message\":\"Welcome Ayush! Thank you for registering\"}"
 * }
 * 
 * 
 * ! Real World Use Cases
 * 
 * - Image processing after S3 upload
 * - Backend APIs (API Gateway + Lambda)
 * - Email notifications
 * - Data processing pipelines
 * - Scheduled background jobs
 * 
 * 
 * ! Interview Questions on AWS Lambda
 * 
 * 1️⃣ What is AWS Lambda?
 * AWS Lambda ek serverless compute service hai
 * jo code ko run karta hai without managing servers.
 * 
 * 
 * 2️⃣ What does serverless mean?
 * Serverless ka matlab hai developer ko server
 * manage nahi karna padta, AWS automatically
 * infrastructure handle karta hai.
 * 
 * 
 * 3️⃣ What triggers Lambda functions?
 * 
 * - API Gateway
 * - S3 events
 * - DynamoDB streams
 * - CloudWatch events
 * - SNS/SQS
 * 
 * 
 * 4️⃣ What languages are supported by Lambda?
 * 
 * - Node.js
 * - Python
 * - Java
 * - Go
 * - .NET
 * - Ruby
 * 
 * 
 * 5️⃣ How is Lambda priced?
 * 
 * Lambda pay-per-use model pe kaam karta hai.
 * 
 * Billing based hoti hai:
 * 
 * - number of requests
 * - execution time
 * - memory used
 * 
 */