/**
 * 🚀 Starting DevOps Journey – Harkirat Singh Cohort
 * ! 📘 Lecture 1: Starting DevOps
 *
 * --------------------------------------------------
 * 🔹 What is DevOps?
 * DevOps ek culture + practices ka combination hai jiska goal hota hai
 * development (Dev) aur operations (Ops) teams ke beech gap kam karna.
 * Isse software fast, reliable aur repeatedly deploy ho sakta hai.
 *
 * --------------------------------------------------
 * 🔹 Why do we need to deploy?
 * Sirf local machine par code likhne se users use access nahi kar paate.
 * Deployment ka matlab hota hai apne application ko internet par live karna
 * taaki koi bhi user browser ya app ke through use kar sake.
 *
 * Example:
 * - Local machine → sirf tum use kar sakte ho
 * - Deployed app → duniya ka koi bhi banda use kar sakta hai 🌍
 *
 * --------------------------------------------------
 * 🔹 Domain vs IP Address
 *
 * IP Address:
 * - Ek unique number hota hai jo kisi server / machine ko identify karta hai
 * - Example: 142.250.182.14
 * - Machines IP samajhti hain, humans ke liye yaad rakhna mushkil hota hai
 *
 * Domain Name:
 * - Human-friendly naam hota hai jo IP address par point karta hai
 * - Example: google.com → ek IP address ke peeche map hota hai
 * - DNS (Domain Name System) domain ko IP me convert karta hai
 *
 * --------------------------------------------------
 * 🔹 What is localhost?
 * - localhost ka matlab hota hai "yeh hi machine"
 * - IP address: 127.0.0.1
 * - Jab hum development karte hain, app localhost par run hoti hai
 * - Ye sirf tumhari machine par accessible hoti hai, internet par nahi
 *
 * --------------------------------------------------
 * 🔹 What is ping command?
 * - ping ek network command hai jo check karta hai:
 *   "kya server reachable hai ya nahi?"
 *
 * Example:
 * ping google.com
 *
 * - Ye batata hai packets ja rahe hain ya nahi
 * - Network latency (time) ka idea milta hai
 *
 * --------------------------------------------------
 * 🔹 What is an IP Address?
 * - IP (Internet Protocol) address ek unique identifier hota hai
 * - Ye batata hai ki data kahan bhejna hai
 * - Har server / device ka ek IP hota hai
 *
 * --------------------------------------------------
 * 🔹 Types of IP Addresses
 *
 * 1️⃣ IPv4:
 * - 32-bit address hota hai
 * - Format: xxx.xxx.xxx.xxx
 * - Example: 192.168.1.1
 * - World me limited hain (approx 4.3 billion)
 *
 * 2️⃣ IPv6:
 * - 128-bit address hota hai
 * - Bohot zyada IPs available hain 🔥
 * - Example: 2001:0db8:85a3::8a2e:0370:7334
 *
 * --------------------------------------------------
 * 🔹 IP Addresses kyun limited ho gaye?
 * - IPv4 kam pad gaye world ke liye
 * - Badi-badi companies (Google, Facebook, Amazon) ne
 *   bohot saare IP addresses kharid liye
 * - Isliye normal log direct IP nahi kharidte
 *
 * --------------------------------------------------
 * 🔹 Why do we use Cloud?
 * - Cloud providers (AWS, Azure, GCP) IP addresses rent par dete hain
 * - Tumhe server + IP + infra sab rent par milta hai
 * - Pay only for what you use 💰
 *
 * 
 * 
 * --------------------------------------------------
 * ✅ Summary:
 * - DevOps = fast + reliable deployment
 * - Deployment se app duniya tak pahuchti hai
 * - Domain → human friendly, IP → machine friendly
 * - IPv4 limited hai, IPv6 future hai
 * - Cloud = IP + server rent par lena
 *
 * 🔥 DevOps journey yahin se start hoti hai!
 */


/**
 * 🌐 Local Network, Routing & Basic Hosting (DevOps – Lecture Notes)
 *
 * --------------------------------------------------
 * 🔹 Local Network kya hota hai?
 * - Jab multiple devices (laptop, mobile, printer) ek hi router / WiFi se
 *   connected hote hain, usse Local Network kehte hain
 * - Ye usually home, office ya college me hota hai
 * - Is network ke andar data fast travel karta hai
 *
 * --------------------------------------------------
 * 🔹 Routing kya hoti hai?
 * - Routing ka kaam hota hai data packets ko sahi jagah tak pahuchana
 * - Router decide karta hai ki data kis device ya network me bhejna hai
 * - Router local network aur internet ke beech bridge ka kaam karta hai
 *
 * --------------------------------------------------
 * 🔹 Mild Hosting / Local Hosting kya hota hai?
 * - Jab hum apni machine par hi server run kar dete hain
 * - Aur same network ke log usse access kar paate hain
 * - Isse mild ya local hosting keh sakte hain
 * - Production ke liye nahi, learning & testing ke liye useful
 *
 * --------------------------------------------------
 * 🔹 2014 ke around AWS ka scene
 * - 2014 ke time AWS naya-naya popular ho raha tha
 * - Har jagah cloud common nahi tha
 * - Companies intranet (private network) ka use karti thi
 *
 * --------------------------------------------------
 * 🔹 Intranet kya hota hai?
 * - Intranet ek private network hota hai
 * - Jo sirf company ya organization ke andar kaam karta hai
 * - Internet jaisa hi hota hai but bahar se accessible nahi hota
 *
 * --------------------------------------------------
 * 🔹 Intranet kaise kaam karta hai?
 * - Ek private IP range hoti hai (jaise 192.168.x.x)
 * - Sirf same router / same network ke devices access kar sakte hain
 * - Security zyada hoti hai kyunki public internet se cut off hota hai
 *
 * --------------------------------------------------
 * 🔹 Same router me multiple laptops ho to kya hota hai?
 * - Agar multiple laptops same router se connected hain:
 *   → Tum ek laptop se dusre laptop ka server access kar sakte ho
 * - Condition: Server running hona chahiye + firewall allow ho
 *
 * Example:
 * - Laptop A IP: 192.168.1.5
 * - Laptop B browser me open kare: http://192.168.1.5:3000
 *
 * --------------------------------------------------
 * 🔹 HTTP Server kya hota hai?
 * - HTTP server ek program hota hai jo:
 *   → Request receive karta hai (browser se)
 *   → Response bhejta hai (HTML, JSON, data)
 *
 * Examples:
 * - Node.js server
 * - Python http.server
 * - Apache / Nginx
 *
 * --------------------------------------------------
 * 🔹 HTTP Server kaise start karein? (Basic examples)
 *
 * Node.js:
 * - npm install
 * - node index.js
 *
 * Python:
 * - python -m http.server 8000
 *
 * --------------------------------------------------
 * 🔹 CMD se apna IP address kaise check karein?
 *
 * Windows:
 * - Command Prompt open karo
 * - Command likho:
 *   ipconfig
 *
 * - IPv4 Address section me tumhara local IP milega
 *
 * --------------------------------------------------
 * 🔹 STUN Protocol kya hota hai?
 * - STUN = Session Traversal Utilities for NAT
 * - Ye mainly WebRTC me use hota hai
 * - Jab tum NAT ke peeche ho (WiFi router ke andar)
 * - STUN server batata hai:
 *   → Tumhara public IP kya hai
 *   → Tum internet par kaise visible ho
 *
 * Use case:
 * - Video calling (Google Meet, Zoom)
 * - Peer-to-peer communication
 *
 * --------------------------------------------------
 * ✅ Summary:
 * - Local network = same router, same private IP range
 * - Intranet = private internet (company ke andar)
 * - Mild hosting = local machine par server
 * - HTTP server = request–response handle karta hai
 * - ipconfig = IP check karne ka command
 * - STUN = NAT ke peeche se public IP discover karna
 *
 * 🔥 DevOps & Networking basics strong ho rahe hain!
 */


/**
 * 🌐 Server Commands & Local IP Address nikalne ke tareeke (Terminal / CMD)
 * (DevOps + Networking Basics)
 *
 * --------------------------------------------------
 * 🔹 Local IP Address kya hota hai?
 * - Ye tumhari machine ka address hota hai local network ke andar
 * - Same WiFi / router ke devices isi IP se tumhe access karte hain
 * - Mostly format hota hai: 192.168.x.x / 10.x.x.x
 *
 * --------------------------------------------------
 * 🔹 Windows (CMD / PowerShell) me Local IP kaise dekhein?
 *
 * ✅ Command:
 * ipconfig
 *
 * - "IPv4 Address" ke saamne jo value hoti hai wahi local IP hota hai
 *
 * Extra (sirf IP dekhna ho):
 * ipconfig | findstr IPv4
 *
 * --------------------------------------------------
 * 🔹 MacOS / Linux (Terminal) me Local IP kaise dekhein?
 *
 * ✅ Command (most common):
 * ifconfig
 *
 * - inet ke saamne jo address hota hai wahi local IP hota hai
 *
 * ✅ New systems (Linux):
 * ip addr
 *
 * ya short version:
 * ip a
 *
 * --------------------------------------------------
 * 🔹 Sirf active WiFi ka IP chahiye (Mac/Linux)
 *
 * ✅ Command:
 * hostname -I
 *
 * - Ye directly local IP print kar deta hai
 *
 * --------------------------------------------------
 * 🔹 Localhost ka IP check karna
 *
 * ✅ Command:
 * ping localhost
 *
 * Output:
 * - 127.0.0.1
 *
 * --------------------------------------------------
 * 🔹 Server related common commands (Local Testing)
 *
 * 🔸 Check server reachable hai ya nahi:
 * ping 192.168.1.5
 *
 * 🔸 Check port open hai ya nahi (Linux/Mac):
 * netstat -an | grep 3000
 *
 * 🔸 Windows me port check:
 * netstat -ano
 *
 * --------------------------------------------------
 * 🔹 Simple local HTTP server start karne ke commands
 *
 * Python:
 * python -m http.server 8000
 *
 * Node.js (example):
 * node index.js
 *
 * - Phir browser me open karo:
 * http://localhost:8000
 * ya
 * http://<LOCAL_IP>:8000
 *
 * --------------------------------------------------
 * 🔹 Public IP check karna (Internet side)
 *
 * ✅ Command (Mac/Linux):
 * curl ifconfig.me
 *
 * ✅ Browser:
 * search: what is my ip
 *
 *   
 * --------------------------------------------------
 * ✅ Summary:
 * - ipconfig → Windows local IP
 * - ifconfig / ip a → Mac & Linux local IP
 * - hostname -I → fast IP output
 * - localhost = 127.0.0.1
 * - python -m http.server → instant local server
 *
 * 🔥 Networking basics strong ho gaye – DevOps ke liye solid foundation!
 */
  