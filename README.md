# 🎬 CSIS255_proj: Movie & TV Show Rating System

**Course:** CSIS 255  
**Semester:** [Spring/Fall] 2026  
**Project Type:** Web Application

---

## 👥 Team Members

| Role          | Name               | Student ID  |
|:--------------|:-------------------|:------------|
| **Developer** | [Khaled Ahmad]     | [S00032746] |
| **Developer** | [Mohammed Elnahwy] | [S00067220] |

---

## 📖 Project Overview

This project is a full-stack web application that allows users to browse, rate, and review movies and TV shows. Built with **Node.js** and **Express**, it features a custom image upload system, client-side form validation, and a responsive UI. The application demonstrates core web development concepts including server routing, file handling with `multer`, and dynamic DOM manipulation.

---

## 🚀 Setup & Installation
Make sure to install `Node.js` on your machine before you start URL:https://nodejs.org/en/download.
Follow these steps to get the application running on your local machine:

    
    git clone https://github.com/Khaq8/CSIS255_proj
    cd CSIS255_proj
    npm init -y
    npm install express
    npm install multer
    node server.js

    
Access the application: Open your browser and navigate to:👉 http://localhost:4000

---

## ✨ **Features Implemented**

    📸 Image Uploads: Users can upload custom posters for movies/TV shows using multer.
    ✅ Real-time Validation: JavaScript form validation ensures data integrity before submission.
    🔍 Browse Library: A dedicated page to view all added titles with their ratings and posters.
    📝 Add New Title: A dynamic form to input title, genre, rating, and upload an image.
    🎨 Responsive UI: Custom CSS (style.css) for a clean, modern look across devices.
    💾 Data Persistence: In-memory data storage via data.js for the current session.

---

## 📂 **Project Structure**
 
    CSIS255_proj/
    ├── public/
    │   ├── posters/          # Uploaded images
    │   ├── js/
    │   │   ├── form-validation.js
    │   │   └── main.js
    │   ├── add.html
    │   ├── browse.html
    │   ├── index.html
    │   └── style.css
    ├── data.js
    └── server.js
    
---

| Feature/Component         | Khaled Ahmad | Mohammed Elnahwy |
|--------------------------|------------------|------------------|
| `server.js`              | ✅               | ✅               |
| `data.js`                | ✅               | ✅               |
| `public/add.html`        | ✅               | ✅               |
| `public/index.html`      | ✅               | ✅               |
| `public/browse.html`     | ✅               | ✅               |
| `public/style.css`       | ✅               | ✅               |
| `public/js/form-validation.js` |✅          | ✅               |
| Backend logic (add/delete) | ✅             | ✅               |
| Frontend UI and layout   | ✅               | ✅               |
| Image upload handling    | ✅               | ✅               |
