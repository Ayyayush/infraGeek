/**
 * ! AWS Lambda Function
 * 
 * ! What is AWS Lambda
 * AWS Lambda ek serverless compute service hai jo AWS provide karta hai.
 * 
 * Isme hume servers ko manually setup ya manage karne ki zarurat nahi hoti.
 * AWS khud hi infrastructure manage karta hai.
 * 
 * Developer ko sirf apna code likhna hota hai aur AWS us code ko
 * automatically run kar deta hai jab koi event trigger hota hai.
 * 
 * Simple words me:
 * 
 * Lambda ek chhota sa code hota hai jo cloud me run karta hai
 * bina server manage kiye.
 * 
 * 
 * ! What does Serverless mean
 * Serverless ka matlab ye nahi hota ki server exist nahi karta.
 * 
 * Iska matlab hota hai:
 * 
 * developer ko server manage nahi karna padta
 * AWS automatically:
 * 
 * - server provision karta hai
 * - scaling handle karta hai
 * - infrastructure maintain karta hai
 * 
 * Developer sirf code pe focus karta hai.
 * 
 * 
 * ! Key Features of AWS Lambda
 * 
 * - server management ki zarurat nahi
 * - automatic scaling
 * - pay only for execution time
 * - event driven execution
 * - high availability
 * 
 * 
 * ! Supported Programming Languages
 * AWS Lambda multiple languages support karta hai:
 * 
 * - Node.js
 * - Python
 * - Java
 * - Go
 * - .NET
 * - Ruby
 * 
 * 
 * ! How Lambda Works
 * Lambda functions event-based hote hain.
 * 
 * Matlab jab koi event hota hai tab Lambda code run karta hai.
 * 
 * Example events:
 * 
 * - S3 file upload
 * - API Gateway request
 * - Database change
 * - Scheduled task
 * - DynamoDB update
 * 
 * 
 * Example Flow:
 * 
 * User uploads file → S3 bucket
 * 
 * ↓
 * 
 * S3 trigger activate hota hai
 * 
 * ↓
 * 
 * Lambda function automatically run hota hai
 * 
 * ↓
 * 
 * Lambda file process karta hai
 * 
 * 
 * ! Why do we need Lambda Functions
 * 
 * - servers manage kiye bina code run karne ke liye
 * - automation build karne ke liye
 * - event-driven architecture ke liye
 * - cost efficient applications banane ke liye
 * - scalable backend systems banane ke liye
 * 
 * 
 * ! Common Use Cases
 * 
 * 1. Image processing
 * Jab user image upload kare → Lambda resize kare
 * 
 * 2. Backend APIs
 * API Gateway ke saath serverless backend
 * 
 * 3. Data processing
 * Logs ya files process karna
 * 
 * 4. Scheduled jobs
 * Cron jobs run karna
 * 
 * 5. Notifications
 * Email ya alerts trigger karna
 * 
 * 
 * ! Lambda Pricing Model
 * AWS Lambda ka pricing model hota hai:
 * 
 * Pay Per Use
 * 
 * Matlab:
 * 
 * agar function run nahi ho raha
 * toh koi cost nahi lagegi.
 * 
 * Billing based hoti hai:
 * 
 * - number of requests
 * - execution time
 * - memory used
 * 
 * 
 */