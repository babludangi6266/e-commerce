# 🛍️ ShopWithBablu - MERN E-Commerce App

A modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

![ShopWithBablu Homepage](https://github.com/user-attachments/assets/e3689e51-95ee-42b1-bad5-b7314b4dcc11)
*Homepage showcasing featured products*

## ✨ Features

- 🏪 **Product Catalog** - Browse various products with images & details
- 🛒 **Shopping Cart** - Add/remove items with quantity management  
- 📦 **Order System** - Place orders with customer information
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast & Modern** - Built with latest React and Node.js

![Product Listing](https://github.com/user-attachments/assets/3c5916bb-8458-46e0-9ef0-80cc10ba36dc)
*Product grid with add to cart functionality*

![Shopping Cart](https://github.com/user-attachments/assets/4e2d6362-b7f6-408d-9b4d-613cc014e8df)
*Shopping cart with order summary*

## 🚀 Quick Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation & Running

1. **Clone the repository**
```bash
git clone https://github.com/your-username/shopwithbablu.git
cd shopwithbablu
Backend Setup

bash
cd ecommerce-backend
npm install
npm run dev
📍 Server runs on: http://localhost:5000

Frontend Setup (in a new terminal)

bash
cd ecommerce-frontend
npm install
npm start
📍 App runs on: http://localhost:3000

Environment Variables
Backend (ecommerce-backend/.env):

env
PORT=5000
NODE_ENV=development
Frontend (ecommerce-frontend/.env):

env
REACT_APP_API_URL=http://localhost:5000/api
📁 Project Structure
text
shopwithbablu/
├── ecommerce-frontend/          # React.js Frontend
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── context/             # State management
│   │   ├── services/            # API services
│   │   └── styles/              # CSS files
│   ├── public/
│   └── package.json
├── ecommerce-backend/           # Node.js Backend
│   ├── src/
│   │   ├── controllers/         # Route controllers
│   │   ├── routes/              # API routes
│   │   ├── data/                # Product data
│   │   ├── middleware/          # Custom middleware
│   │   └── app.js               # Express app
│   ├── server.js
│   └── package.json
├── README.md
└── .gitignore
🛠️ Technologies Used
Frontend
React - UI framework

React Router - Navigation

Context API - State management

Axios - HTTP client

Custom CSS - Styling

Backend
Node.js - Runtime environment

Express.js - Web framework

CORS - Cross-origin resource sharing

📞 API Endpoints
Method	Endpoint	        Description
GET	  /api/products     	Get all products
GET 	/api/products/:id	  Get single product
POST	/api/orders	        Place new order
