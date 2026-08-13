<div align="center">
  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop" alt="E-Commerce Banner" width="100%" style="border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-bottom: 30px;">
  
  <h1 align="center">🛍️ MegaMart E-Commerce Platform (MERN Stack)</h1>
  <p align="center"><strong>A Highly Advanced, Production-Ready Full-Stack Application</strong></p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" alt="Status" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
    <img src="https://img.shields.io/badge/Version-2.0.0-orange?style=for-the-badge" alt="Version" />
  </p>
</div>

<br />

## 💻 Languages, Skills & Technologies Used

This project was built using industry-standard technologies to ensure high performance, security, and scalability. 

### Core Stack
<p>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</p>

### Frontend Languages & Tools
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI" />
</p>

### Backend & Database Services
<p>
  <img src="https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
  <img src="https://img.shields.io/badge/Nodemailer-00A98F?style=for-the-badge" alt="Nodemailer" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" alt="Cloudinary" />
</p>

---

## 🌟 Visual Showcase & Key Features

Below is a detailed look at the core components of the platform, demonstrating the complex features and beautiful UI/UX design.

### 1. 🛒 The "Super Kirana" Module & Product Hub
<img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop" width="100%" style="border-radius: 10px; margin-bottom: 10px;" alt="Super Kirana Store" />

* **Dynamic Rendering:** A specialized Daily Needs & Grocery section featuring vibrant micro-animations.
* **Smart UI:** Discount strikethroughs, bold tags, and an engaging interactive "Add to Cart" UX.
* **Glassmorphism:** Upgraded legacy UI with modern Glassmorphism and smooth CSS transitions.

<br />

### 2. 💳 Custom PhonePe UPI Payment Integration
<img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1000&auto=format&fit=crop" width="100%" style="border-radius: 10px; margin-bottom: 10px;" alt="Checkout Flow" />

* **Bypassing High Fees:** Developed a custom checkout flow integrating **PhonePe UPI**.
* **Dynamic QR Generation:** Users can scan a custom QR code at checkout or enter their UPI ID.
* **Live Price Calculation:** The cart dynamically updates shipping and tax totals before rendering the payment gateway.

<br />

### 3. 🔐 Advanced Secure Auth & Mobile Registration
<img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1000&auto=format&fit=crop" width="100%" style="border-radius: 10px; margin-bottom: 10px;" alt="Secure Auth" />

* **Dual Authentication:** Secure Login/Signup with both Email and a strict **10-Digit Mobile Number validation**.
* **Encrypted Passwords:** Utilizing `bcrypt.js` for robust hashing.
* **Automated Emails:** Beautifully redesigned "Forgot Password" flow with automated Email reset tokens powered by `Nodemailer`.

<br />

### 4. 📊 Robust Admin Dashboard & Live MongoDB Atlas
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop" width="100%" style="border-radius: 10px; margin-bottom: 10px;" alt="Admin Dashboard" />

* **Cloud Database:** Fully migrated from local instances to a highly available **MongoDB Atlas Cluster**.
* **Full CRUD Operations:** Admins can Create, Read, Update, and Delete products, track orders, and manage users.
* **Image Hosting:** Automatic image compression and secure hosting via **Cloudinary API**.

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** and **Git** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/SANJAYKUMAR86767/E-commerce-.git
cd E-commerce-
```

### 3. Install Dependencies
You need to install dependencies for both the backend and frontend.
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 4. Environment Variables
Create a `config.env` file inside the `backend/config/` directory. Fill it with your credentials:
```env
PORT=4000
DB_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/Ecommerce?retryWrites=true&w=majority"
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
SMPT_SERVICE=gmail
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_gmail_app_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Start the Application
```bash
# Start backend server
npm run server

# Open a new terminal and start frontend React app
cd frontend
npm start
```

---

<div align="center">
  <h3>Developed with ❤️ by <a href="https://github.com/SANJAYKUMAR86767">Sanjay Kumar</a></h3>
  <p>
    <a href="https://wa.me/918809604880"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
    <a href="https://www.instagram.com/sanjay_86767"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
    <a href="https://www.facebook.com/share/1DhosYJ15K/"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>
  </p>
</div>
