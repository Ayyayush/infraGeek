/**
 * 🚀 How to Deploy Apps (Actual / Real Hosting)
 * (DevOps – Deployment Fundamentals)
 *
 * --------------------------------------------------
 * 🔹 App deploy karne ke main tareeke
 *
 * 1️⃣ Renting Servers on Cloud
 * - AWS, Azure, GCP jaise cloud providers se server rent par lete hain
 * - Tumhe hardware kharidne ki zarurat nahi hoti
 * - Pay as you go model hota hai 💰
 *
 * Example:
 * - AWS EC2
 * - Azure Virtual Machines
 *
 * --------------------------------------------------
 * 2️⃣ Renting Compute Yourself in Data Centres
 * - Tum data centre jaake apni machine rakhte ho
 * - Electricity, cooling, maintenance sab tumhari zimmedari
 * - Costly + management heavy hota hai
 *
 * - Mostly badi companies use karti hain
 *
 * --------------------------------------------------
 * 3️⃣ Self Hosting on Own CPU / PC
 * - Apne laptop / PC par hi server bana ke app run karna
 * - Learning ke liye acha hai
 * - Production ke liye risky (power, internet, security issues)
 *
 * --------------------------------------------------
 * 4️⃣ Serverless Providers
 * - Tum server ka tension hi nahi lete
 * - Sirf code likhte ho, infra cloud sambhalta hai
 *
 * Examples:
 * - AWS Lambda
 * - Vercel
 * - Netlify
 *
 * - Auto scaling hoti hai
 * - Small projects & APIs ke liye best
 *
 * --------------------------------------------------
 * 5️⃣ Cloud Native Options
 * - Docker + Kubernetes
 * - App ko containers me run karte hain
 * - Highly scalable & production ready
 *
 * Examples:
 * - AWS EKS
 * - Google GKE
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * --------------------------------------------------
 * --------------------------------------------------
 * 🧠 What is a Virtual Machine (VM)?
 * - VM ek software-based computer hota hai
 * - Ye physical server ke upar run karta hai
 * - Apna OS, RAM, CPU, Disk sab hota hai
 *
 * - Ek physical machine par multiple VMs chal sakti hain
 *
 * --------------------------------------------------
 * 🧠 What is a Bare Metal Server?
 * - Direct physical server
 * - Koi virtualization nahi
 * - Ek hi user ko pura hardware milta hai
 *
 * Pros:
 * - High performance
 *
 * Cons:
 * - Mehenga
 * - Scaling mushkil
 *
 * --------------------------------------------------
 * 🧠 Hypervisor kya hota hai?
 * - Hypervisor ek software hota hai jo:
 *   → Physical hardware ko manage karta hai
 *   → Multiple VMs create karta hai
 *
 * Examples:
 * - VMware
 * - KVM
 * - Hyper-V
 *
 * --------------------------------------------------
 * 🔹 AWS jaise platforms server kaise dete hain?
 *
 * Scenario:
 * - Tum aaj app deploy karna chahte ho
 * - AWS console par jaake bolte ho:
 *   → 2 CPU
 *   → 4 GB RAM
 *   → Ubuntu OS
 *
 * Behind the scenes:
 * - AWS ke paas huge data centres hote hain
 * - Hypervisor physical server ko tod ke
 *   tumhari requirement ke according VM bana deta hai
 * - Tumhe lagta hai jaise ek naya computer mil gaya 💻
 *
 * --------------------------------------------------
 * 🧠 VMs aur MERN App Deployment
 *
 * Typical MERN Deployment Flow:
 * - VM lo (EC2)
 * - Ubuntu install hota hai
 * - Node.js, MongoDB install karo
 * - Backend run karo (Express)
 * - Frontend build karke serve karo (React)
 *
 * - VM ka public IP ya domain use karke app access hoti hai 🌍
 *
 * --------------------------------------------------
 * ✅ Summary:
 * - Cloud = server rent par lena
 * - VM = virtual computer
 * - Bare metal = physical server
 * - Hypervisor = VM banane wala software
 * - AWS data centre + hypervisor = on-demand servers
 * - MERN apps mostly VMs / cloud par deploy hoti hain
 *
 * 🔥 Yahin se real DevOps & deployment ka game start hota hai!
 */
