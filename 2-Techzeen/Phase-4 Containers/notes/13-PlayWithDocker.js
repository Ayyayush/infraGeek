/**
 * ============================================
 * WHAT IS "PLAY WITH DOCKER" ?
 * ============================================
 *
 * Play With Docker (PWD) ek online platform hai
 * jaha pe hum Docker ko bina apne local system me install kiye
 * directly browser ke through use kar sakte hain.
 *
 * Simple words me:
 * Ye ek temporary Docker lab environment hai.
 *
 * Yaha pe:
 * - Hum Docker images run kar sakte hain
 * - Containers create kar sakte hain
 * - Docker commands practice kar sakte hain
 *
 * Important Point:
 * Ye limited time ke liye hota hai (normally few hours session).
 * Session expire hone ke baad saara environment reset ho jata hai.
 *
 * Matlab:
 * Ye learning aur practice ke liye best hai,
 * production use ke liye nahi.
 *
 *
 * ============================================
 * COMMAND:
 * docker buildx build --platform linux/amd64
 * ============================================
 *
 * Ab samajhte hain is command ka matlab step by step.
 *
 * 1) docker
 *    -> Ye Docker CLI tool hai jisse hum commands run karte hain.
 *
 * 2) buildx
 *    -> Ye Docker ka extended build tool hai.
 *       Iska use advanced image building ke liye hota hai.
 *       Especially multi-platform images banane ke liye.
 *
 * 3) build
 *    -> Ye image build karne ka command hai.
 *       Ye Dockerfile se image banata hai.
 *
 * 4) --platform linux/amd64
 *    -> Ye specify karta hai ki image kis architecture ke liye banegi.
 *
 *       linux  = Operating System
 *       amd64  = 64-bit x86 architecture (Intel/AMD processors)
 *
 *
 * ============================================
 * SIMPLE MEANING OF FULL COMMAND
 * ============================================
 *
 * Ye command Docker image ko build karta hai
 * specifically Linux OS ke 64-bit AMD/Intel architecture ke liye.
 *
 * Ye tab useful hota hai jab:
 * - Aap Mac M1/M2 (ARM architecture) use kar rahe ho
 * - Aur aapko AMD64 server ke liye image banana ho
 *
 * Kyunki production servers mostly linux/amd64 hote hain.
 *
 *
 * ============================================
 * SHORT SUMMARY
 * ============================================
 *
 * Play With Docker:
 * -> Online Docker practice environment
 * -> No local setup needed
 * -> Temporary session
 *
 * docker buildx build --platform linux/amd64:
 * -> Multi-platform image build command
 * -> Specifically Linux 64-bit architecture ke liye image banata hai
 *
 */