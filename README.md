# 🔗 URL Shortener with Authentication

> A **full-stack URL shortening platform** built with **Node.js, Express, MongoDB**, and **EJS**, featuring secure authentication, personal dashboards, and click analytics 📊.

Turn long, messy URLs into **short, shareable links** while keeping full control over your data — all from a clean and simple interface 🚀.

---

## 🌟 Project Overview

This application allows users to:

* Shorten long URLs into **compact codes**
* Securely **sign up & log in**
* Track **click analytics**
* Manage all created links from a **personal dashboard**

Designed as a **learning-focused MERN backend project**, it demonstrates real-world concepts like authentication, protected routes, database modeling, and server-side rendering.

---

## 🧠 Problem Statement

Long URLs are:

* Hard to share
* Difficult to remember
* Impossible to track without analytics

Most URL shorteners also lack:

* User authentication
* Personal link management
* Click tracking per user

---

## ✅ Solution

This project solves the problem by providing:

* 🔐 **Authenticated user access**
* ✂️ **Automatic short URL generation**
* 📊 **Click tracking & analytics**
* 🗂️ **Dashboard to manage URLs**
* 🛡️ **Protected routes for security**

---

## ✨ Features

### 🔗 URL Shortening

* Converts long URLs into **unique 5–6 character short codes**
* Automatically redirects users to the original link

### 🔐 User Authentication

* Secure **Sign-Up & Login**
* Cookie-based authentication
* Custom middleware for route protection

### 📊 Click Analytics

* Tracks how many times each short URL is visited
* Displays visit counts directly on the dashboard

### 🧑‍💻 Personal Dashboard

* View all created URLs in one place
* See original URL, short URL, and click count

### 🛡️ Protected Routes

* Only logged-in users can:

  * Create URLs
  * View analytics
  * Access the dashboard

---

## 🛠️ Tech Stack

| Layer              | Technology                     |
| ------------------ | ------------------------------ |
| **Backend**        | Node.js, Express.js            |
| **Database**       | MongoDB (Mongoose)             |
| **Frontend**       | EJS (Server-Side Rendering)    |
| **Authentication** | Cookie-based Auth + Middleware |
| **Styling**        | Custom CSS                     |

---

## 📂 Project Structure

```bash
url-shortener/
│
├── controllers/      # URL & User business logic
├── middleware/       # Authentication & access control
├── models/           # Mongoose schemas (User, URL)
├── routes/           # Express routes
├── views/            # EJS templates (Home, Login, Signup)
├── index.js          # Application entry point
└── connection.js     # MongoDB connection
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* **Node.js** (v14 or higher)
* **MongoDB** (Local or MongoDB Atlas)

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure MongoDB

Ensure MongoDB is running locally at:

```text
mongodb://127.0.0.1:27017/url-shortner
```

Or update the connection string in `connection.js`.

### 4️⃣ Start the Server

```bash
npm start
# or
node index.js
```

### 5️⃣ Access the App

Open your browser and visit:

👉 **[http://localhost:8001](http://localhost:8001)**

---

## 📖 How to Use

1️⃣ **Sign Up** – Create a new account
2️⃣ **Login** – Access your dashboard
3️⃣ **Shorten URL** – Paste a long URL and click *Shorten*
4️⃣ **Manage Links** – View all URLs and click counts in a table
5️⃣ **Track Analytics** – Monitor how often each link is used

---

## 🔄 Application Flow

```text
User Signup / Login
        ↓
Authentication Middleware
        ↓
Dashboard Access
        ↓
Create Short URL
        ↓
User Clicks Short Link
        ↓
Redirect + Click Count Update
```

---

## 🔮 Future Enhancements

* ✏️ Custom short aliases
* 📱 QR code generation for links
* ⏰ URL expiration dates
* 📊 Advanced analytics (daily/monthly stats)
* 🌐 REST API version
* 🔒 JWT-based authentication

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project helpful:

* ⭐ Star the repository
* 🍴 Fork it
* 🧑‍💻 Build on top of it

Happy Coding! 🚀
