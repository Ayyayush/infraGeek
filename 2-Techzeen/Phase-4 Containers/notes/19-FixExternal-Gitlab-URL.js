/**
 * =========================================================
 * ! FIX EXTERNAL URL ON GITLAB RUNNER
 * =========================================================
 * Last video mein humne GitLab Runner ko register kiya tha.
 *
 * Is topic mein:
 * → external_url ko fix karenge
 *
 *
 * ---------------------------------------------------------
 * ! WHAT IS THE ISSUE?
 * ---------------------------------------------------------
 * Jaise hi:
 *
 * → New repository/project create hota hai
 *
 * Kabhi-kabhi:
 *
 * → Browser me error aata hai:
 *
 * this site can't be reached
 *
 *
 * URL me:
 *
 * my-gitlab-server
 *
 * likh ke aata hai.
 *
 *
 * ---------------------------------------------------------
 * ! WHY THIS HAPPENS?
 * ---------------------------------------------------------
 * Kyunki:
 *
 * → hostname me humne:
 *
 * my-gitlab-server
 *
 * set kiya tha.
 *
 *
 * Isliye:
 *
 * → Saare internal URLs usi hostname pe redirect ho rahe hote hain
 *
 *
 * Problem:
 *
 * → GitLab Runner aur GitLab Server
 *   internally properly communicate nahi kar pa rahe
 *
 *
 * ---------------------------------------------------------
 * ! SOLUTION
 * ---------------------------------------------------------
 * Is problem ko solve karne ke liye:
 *
 * → Ek line add karni hoti hai
 *
 *
 * external_url
 *
 *
 * ---------------------------------------------------------
 * ! UPDATED CONFIGURATION
 * ---------------------------------------------------------
 *
 * environment:
 *   GITLAB_OMNIBUS_CONFIG: |
 *
 *     external_url 'http://localhost:8000'
 *
 *     gitlab_rails['initial_root_password'] = 'A@ayush1232003'
 *
 *     puma['worker_processes'] = 0
 *
 *
 * ---------------------------------------------------------
 * ! WHAT DOES external_url DO?
 * ---------------------------------------------------------
 * external_url define karta hai:
 *
 * → GitLab kis URL pe accessible hoga
 *
 *
 * Isse:
 *
 * → Correct URLs generate hote hain
 * → Runner aur Server properly communicate kar pate hain
 * → Browser redirection issues solve ho jate hain
 *
 *
 * ---------------------------------------------------------
 * ! AFTER CHANGING external_url
 * ---------------------------------------------------------
 * Configuration save karne ke baad:
 *
 * → Containers restart karo
 *
 *
 * Command:
 *
 * docker compose down
 *
 * docker compose up -d
 *
 *
 * ---------------------------------------------------------
 * ! INTERVIEW QUESTIONS
 * ---------------------------------------------------------
 * Q1) What is external_url in GitLab?
 * Ans:
 * external_url defines the main URL
 * through which GitLab is accessed.
 *
 *
 * Q2) Why do we use external_url?
 * Ans:
 * It helps GitLab generate correct internal
 * and external URLs for communication.
 *
 *
 * Q3) What issue occurs without proper external_url?
 * Ans:
 * Browser redirection errors like:
 *
 * this site can't be reached
 *
 * can occur.
 *
 *
 * Q4) Why was my-gitlab-server causing issues?
 * Ans:
 * Because all internal URLs were redirecting
 * to that hostname which was not properly reachable.
 *
 *
 * ---------------------------------------------------------
 * ! SHORT SUMMARY
 * ---------------------------------------------------------
 * → external_url fixes URL redirection issues
 * → Helps GitLab Runner & Server communicate properly
 * → Prevents "this site can't be reached" errors
 * → Important for proper GitLab setup
 *
 */