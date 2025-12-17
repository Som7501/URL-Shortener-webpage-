# URL Shortener with Authentication
A full-stack URL shortening application built using the Node.js, Express, and MongoDB. This application allows users to transform long, cumbersome URLs into short, manageable codes and tracks the click analytics for each link.

🚀 Features
Custom Shortened Links: Generates unique 5-6 character codes for long URLs.


User Authentication: Secure Sign-up and Login functionality using cookies and custom middleware.





Personal Dashboard: Logged-in users can view a history of all the URLs they have created.



Click Analytics: Tracks the number of times a shortened link has been visited.

Protected Routes: Only authenticated users can generate and manage their URLs.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)


Frontend: EJS (Embedded JavaScript Templates) for server-side rendering 



Authentication: Cookie-based auth with custom middleware


Styling: Custom CSS 



📂 Project Structure
Plaintext

├── controllers/      # Logic for URL and User handling
├── middleware/       # Authentication and restriction logic
├── models/           # Mongoose schemas (URL, User)
├── routes/           # Express routers for static pages, URLs, and Users
├── views/            # EJS templates (Home, Login, SignUp)
├── index.js          # Entry point of the application
└── connection.js     # MongoDB connection setup
⚙️ Prerequisites
Node.js (v14 or higher)

MongoDB (Local or Atlas instance)

📥 Installation
Clone the repository:

Bash

git clone https://github.com/your-username/url-shortener.git
cd url-shortener
Install dependencies:

Bash

npm install
Configure Database: Ensure your MongoDB is running locally at mongodb://127.0.0.1:27017/url-shortner or update the connection string in index.js.

Start the server:

Bash

npm start
# or
node index.js
Access the App: Open your browser and navigate to http://localhost:8001.

📖 Usage

Sign Up: Create a new account to start tracking your links.


Login: Access your personal dashboard.


Shorten: Paste a long URL in the input field and click "Shorten".


Manage: View your list of URLs, the shortened versions, and the total click count in the table provided.

💡 Potential Enhancements (Next Steps)
Custom Aliases: Allow users to choose their own short-link text.

QR Code Generation: Generate a QR code for every shortened link.

Expiration Dates: Set links to expire after a certain period.


⭐ If you like this project, don’t forget to give it a star on GitHub!
Happy Learning! 🎉
