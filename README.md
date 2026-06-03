# AIEmailReply
A Full-Stack AI-powered email assistant built with React, Spring Boot, and the Gemini API to automatically generate contextual, professional email replies based on incoming text and tone preferences.
# 🤖 AI Email Reply Generator

An intelligent, full-stack web application that automatically crafts professional, context-aware email replies. By combining a modern **React** frontend with a robust **Spring Boot** backend, the application leverages Google's **Gemini API** to analyze email text and generate tailored responses based on user-selected tones.

---

## 🚀 Features

* **AI-Powered Responses:** Utilizes Google's Gemini API to generate smart, contextual replies instantly.
* **Dynamic Tone Selection:** Choose from multiple professional tones (e.g., Professional, Casual, Urgent, Apologetic, Formal) to match your communication style.
* **One-Click Copy:** Easily copy the generated reply to your clipboard with a single click.
* **Modern UI/UX:** Clean, responsive, and intuitive interface built with React.
* **Robust Backend:** Secure and scalable REST APIs powered by Spring Boot.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** React.js
* **Styling:** Tailwind CSS / Material UI (Adjust based on what you used)
* **State Management / HTTP:** Axios 

### Backend
* **Framework:** Spring Boot (Java)
* **AI Integration:** Google Gemini API (Spring AI or standard REST client)
* **Build Tool:** Maven / Gradle

---

## 📦 Getting Started

### Prerequisites
* Java 21 or higher
* Node.js (v18+)
* A Google AI Studio API Key (Gemini API)

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone [https://github.com/AbhishekDevMode/AIEmailReply.git](https://github.com/AbhishekDevMode/AIEmailReply.git)
cd AIEmailReply
2. Backend Setup (Spring Boot)
Navigate to the backend directory:
cd backend
Create an application.properties or application.yml file and add your Gemini API Key:
Create an application.properties or application.yml file and add your Gemini API Key:
Runthe springboot applications
./mvnw spring-boot:run

Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install
Start the development server:
npm start

