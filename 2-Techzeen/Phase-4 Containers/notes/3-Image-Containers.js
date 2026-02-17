/**
 * 🐳 Docker Images & Docker Containers (Clear Explanation – Hinglish)
 *
 * --------------------------------------------------
 * 🔹 What is a Docker Image?
 *
 * Docker Image ek **blueprint / template** hoti hai
 * jisme application ko run karne ke liye
 * 👉 sab kuch pehle se packed hota hai
 *
 * Image me kya hota hai?
 * - Application code
 * - Runtime (Node / Python / Java)
 * - Libraries & dependencies
 * - OS-level configs
 *
 * 👉 Image = READ-ONLY (immutable)
 *
 * --------------------------------------------------
 * 🔹 Images immutable kyun hoti hain?
 *
 * - Image ko directly change nahi kar sakte
 * - Agar change chahiye:
 *   → Nayi image build hoti hai
 *
 * Fayda:
 * - Consistency
 * - Reproducibility
 * - Bugs kam
 *
 * --------------------------------------------------
 * 🔹 Docker Images kahan store hoti hain?
 *
 * - Docker Hub (public registry)
 * - Private registries (AWS ECR, GCP Artifact Registry)
 *
 * 👉 Ek baar image bani, multiple jagah reuse ho sakti hai
 *
 * --------------------------------------------------
 * 🔹 One-line:
 * "Docker Image is a blueprint of the application."
 *
 * --------------------------------------------------
 * --------------------------------------------------
 * 🔹 What is a Docker Container?
 *
 * Docker Container ek **running instance** hota hai
 * kisi Docker Image ka.
 *
 * Simple words:
 * - Image = Recipe 🍲
 * - Container = Cooked food 🍛
 *
 * --------------------------------------------------
 * 🔹 Container ki properties
 *
 * - Lightweight
 * - Portable
 * - Start / Stop / Delete ho sakta hai
 * - Fast startup
 *
 * --------------------------------------------------
 * 🔹 Container isolated kyun hota hai?
 *
 * - Har container ka:
 *   → apna filesystem hota hai
 *   → apna process space hota hai
 *   → apne ports hote hain
 *
 * 👉 Isliye ek container dusre ko affect nahi karta
 *
 * --------------------------------------------------
 * 🔹 Container system par depend kyun nahi karta?
 *
 * Example:
 * - Docker image me Node.js defined hai
 * - Host system me Node installed nahi hai
 *
 * 👉 Container phir bhi chalega
 * kyunki:
 * - Node image ke andar hi hai
 *
 * Matlab:
 * ❌ System dependency
 * ✅ Image dependency
 *
 * --------------------------------------------------
 * 🔹 Important clarification (tumhare point ka clean version)
 *
 * ❌ Container khud se kuch install nahi karta
 * ✅ Jo kuch chahiye hota hai, wo image me pehle se hota hai
 *
 * Isliye:
 * - Image complete honi chahiye
 * - Container sirf us image ko run karta hai
 *
 * --------------------------------------------------
 * 🔹 Image vs Container (Quick Comparison)
 *
 * Image:
 * - Blueprint
 * - Immutable
 * - Stored in registry
 *
 * Container:
 * - Running instance
 * - Mutable (runtime state)
 * - Can be stopped / deleted
 *
 * 
 * 
 * --------------------------------------------------
 * ✅ Summary:
 * - Docker Image = application ka blueprint
 * - Docker Container = image ka running form
 * - Images immutable hoti hain
 * - Containers isolated & portable hote hain
 * - System pe kuch install hona zaroori nahi
 *
 * 🔥 Docker ka real magic yahin se start hota hai!
 */
