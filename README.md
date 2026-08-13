<div align="center">
  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop" alt="E-Commerce Banner" width="100%" style="border-radius: 10px; margin-bottom: 20px;">
  
  <h1>🛍️ MegaMart E-Commerce Platform</h1>
  <p><strong>A Highly Advanced, Production-Ready MERN Stack E-Commerce Application</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
    <img src="https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas" />
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  </p>
  
  <p>
    <i>Built meticulously with focus on <strong>Premium UI/UX, Secure Authentication, and Scalable Backend Architecture.</strong></i>
  </p>
</div>

<br />

## 🌟 Why This Project Stands Out (Recruiter Highlights)

This isn't just a standard tutorial clone; this is a heavily modified and advanced implementation featuring real-world modules designed to impress:

- **🚀 Live MongoDB Atlas Integration:** Fully migrated from local instances to a highly available MongoDB Atlas Cluster.
- **💳 Custom PhonePe UPI Payment Gateway:** Developed a custom checkout flow integrating PhonePe UPI via dynamic QR codes, bypassing traditional high-fee gateways.
- **🛒 The "Super Kirana" Module:** Added a specialized Daily Needs & Grocery section featuring vibrant micro-animations, discount strikethroughs, and an engaging "Add to Cart" UX.
- **🔐 Advanced Secure Auth & Mobile Registration:** Expanded the standard MERN schema to enforce strict **10-Digit Mobile Number validation** during signup, alongside a beautifully redesigned "Forgot Password" flow with automated Email triggers (Nodemailer).
- **🎨 Glassmorphism & Micro-Interactions:** Upgraded the legacy UI with modern Glassmorphism, smooth CSS transitions, dynamic hover-states, and high-quality image renders.

---

## 📸 Platform Sneak Peek

<table>
  <tr>
    <td align="center">
      <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop" alt="Super Kirana Store" />
      <br />
      <b>Super Kirana & Grocery Store</b>
    </td>
    <td align="center">
      <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop" alt="Custom Checkout" />
      <br />
      <b>PhonePe Custom UPI Checkout</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop" alt="Auth Flow" />
      <br />
      <b>Advanced Mobile & Email Auth Flow</b>
    </td>
    <td align="center">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop" alt="Dashboard" />
      <br />
      <b>Robust Admin Dashboard</b>
    </td>
  </tr>
</table>

---

## 🛠️ Technology Stack Used

### **Frontend (Client)**
* **React.js** (Functional Components, Hooks)
* **Redux & Redux Thunk** (Global State Management)
* **Vanilla CSS3** (Custom responsive design, Animations, Glassmorphism)
* **React Router Dom** (Dynamic Routing)
* **Material-UI (MUI)** (Icons and specific UI components)

### **Backend (Server)**
* **Node.js & Express.js** (RESTful API architecture)
* **MongoDB Atlas** (Cloud Database)
* **Mongoose** (Object Data Modeling)
* **JSON Web Tokens (JWT)** (Stateless secure authentication)
* **Bcrypt.js** (Password Hashing)
* **Nodemailer** (Automated Emailing service)
* **Cloudinary** (Cloud image storage and optimization)

---

## ⚡ Core Features

1. **User Authentication & Authorization**
   - Secure Login/Signup with Password & Mobile Number.
   - Password reset workflow with email tokens.
   - Role-based access control (Admin vs User).

2. **Advanced Product Management**
   - Filter products by Category, Price Range, and Ratings.
   - Comprehensive Search Bar functionality.
   - Leave product Reviews & Ratings.

3. **Cart & Checkout Workflow**
   - Interactive Cart with live price calculation.
   - Multi-step checkout process (Shipping -> Confirm -> Payment).
   - Custom PhonePe QR Payment Integration.

4. **Admin Dashboard**
   - Full CRUD operations for Products.
   - Manage User Roles and Accounts.
   - Track and Update Order Statuses.

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
