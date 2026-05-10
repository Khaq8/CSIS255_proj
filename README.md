# 🎬 CSIS255_proj: Movie & TV Show Rating System

Welcome to **CSIS255_proj**, a dynamic web application designed to explore, rate, and review your favorite movies and TV shows! Built with **Node.js** and **Express**, this project features a custom image upload system, real-time form validation, and a seamless browsing experience.

---

## 🚀 Quick Start

Get the app running on your local machine in seconds:

1. **Initialize the project and install dependencies:**
   ```bash
   npm init -y
   npm install express
   npm install multer
   node server.js```

CSIS255_proj/
├── public/
│   ├── posters/          # Uploaded movie/TV show images
│   ├── js/
│   │   ├── form-validation.js  # Client-side input validation
│   │   └── main.js             # Core frontend logic
│   ├── add.html          # Form to add new titles
│   ├── browse.html       # Gallery view of all titles
│   ├── index.html        # Landing page
│   └── style.css         # Custom styling
├── data.js               # In-memory data storage (or database config)
└── server.js             # Express server setup & routes
