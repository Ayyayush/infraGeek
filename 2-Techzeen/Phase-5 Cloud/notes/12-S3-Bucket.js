/**
 * =========================================================
 * ! S3 BUCKET
 * =========================================================
 * 
 * ! WHAT IS S3?
 * S3 = Simple Storage Service
 * S3 is a storage service provided by AWS.
 * It is used to store and manage files/data online.
 * Files are stored inside S3 Buckets.
 * → Bucket = Container where files are stored
 * → Each file is called an Object
 * So:
 * S3 → Bucket → Object
 * 
 * 
 * 
 * ! WHAT IS S3 USED FOR?
 * S3 is used to store:
 * → Images
 * → Videos
 * → Documents
 * → Backups
 * → Logs
 * → Website files
 * → Application files
 *
 * 
 * ! COMMON USE CASES
 * → Hosting website assets like images, CSS and JavaScript
 * → User uploads in web or mobile applications
 * → Storing backups or logs
 * → Hosting static websites
 * → Storing application files/data
 *
 * 
 * ! ACCESSING S3 FILES
 * S3 objects can be accessed through URLs.
 * However, a file is not automatically public.
 * Access depends on:
 * → Bucket permissions
 * → Object permissions
 * → IAM policies
 * → Public access settings
 *
 * 
 * ! BENEFITS OF S3
 * → No need to manage physical storage servers
 * → Highly scalable storage
 * → Easy integration with applications
 * → Low cost and pay-as-you-go pricing
 * → Supports encryption
 * → Supports versioning
 * → Supports access control
 *
 * 
 * ! VERSIONING
 * S3 Versioning allows us to keep multiple versions
 * of the same file/object.
 * Example:
 * Suppose we have:
 * → index.html (old version)
 * Then we upload an updated index.html.
 * S3 can keep both:
 * → Old version
 * → New version
 * So if the new file is accidentally deleted or changed,
 * we can recover the old version.
 *
 * 
 * ! SIMPLE EXAMPLE
 * User uploads:
 * → profile.jpg
 * ↓
 * S3 Bucket
 * ↓
 * Object (profile.jpg)
 * ↓
 * Application can access the object when required.
 *
 * 
 * ! INTERVIEW LINE
 * Amazon S3 (Simple Storage Service) is an AWS object
 * storage service used to store and manage files such as
 * images, videos, documents, backups and logs.
 * Data is stored as objects inside buckets.
 *
 * 
 * ! SHORT SUMMARY
 * → S3 = Simple Storage Service
 * → Bucket = Container for storing objects
 * → Object = File/data stored in S3
 * → Used for images, videos, documents, backups and logs
 * → Highly scalable
 * → Pay-as-you-go
 * → Supports encryption and versioning
 * → Commonly used for file storage and static websites
 */