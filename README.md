# 🍕 Food Delivery Web

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.0.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)](https://www.mongodb.com/)

A modern, full-stack food delivery application that connects hungry customers with delicious meals. Built with cutting-edge technologies for a seamless user experience.

![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image1.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image2.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image3.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image4.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image5.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image6.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image7.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image8.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image9.png?raw=true)
![image alt](https://github.com/UNNuwantha/Food-Delivery-Web/blob/master/frontend/src/assets/image10.png?raw=true)


## ✨ Features

- 🔐 **Secure Authentication**: JWT-based login and signup for users and admins
- 🍽️ **Dynamic Food Menu**: Browse food items by categories with high-quality images
- 🛒 **Smart Cart Management**: Add, update, and remove items with real-time total calculation
- 📦 **Order Tracking**: Place orders and monitor status in real-time
- 👨‍💼 **Admin Dashboard**: Comprehensive panel for managing food items, orders, and users
- 💳 **Payment Integration**: Secure payment processing (Stripe/PayPal integration ready)
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🌐 **RESTful API**: Well-documented backend API for easy integration

## 🛠️ Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | React 18 + Vite | Fast, modern UI with hot module replacement |
| **Backend** | Node.js + Express.js | Scalable server-side logic |
| **Database** | MongoDB | NoSQL database for flexible data storage |
| **Authentication** | JWT | Secure token-based auth |
| **File Upload** | Multer | Image upload handling |
| **State Management** | React Context API | Client-side state management |
| **HTTP Client** | Axios | Promise-based HTTP requests |
| **Styling** | CSS Modules | Scoped and maintainable styles |

## 🚀 Quick Start

### Prerequisites

- 🟢 Node.js (v14 or higher)
- 🍃 MongoDB (local or Atlas)
- 📦 npm or yarn package manager

### Installation

#### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_super_secret_jwt_key
PORT=4000
STRIPE_SECRET_KEY=sk_test_your_stripe_key
```

```bash
npm start
```

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

#### Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

## 📖 Usage

1. 🌐 Open `http://localhost:5173` for the customer app
2. 👨‍💼 Access admin panel at `http://localhost:5174`
3. 🔧 Backend API available at `http://localhost:4000`

### API Documentation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/user/login` | POST | User authentication |
| `/api/user/register` | POST | User registration |
| `/api/food` | GET | Fetch all food items |
| `/api/food` | POST | Add new food item (Admin) |
| `/api/cart` | POST | Add item to cart |
| `/api/cart` | GET | Get user's cart |
| `/api/order` | POST | Place new order |
| `/api/order` | GET | Get user's orders |

For detailed API docs, visit [API Documentation](./backend/README.md)

## 📁 Project Structure

```
food-del/
├── 📁 admin/              # Admin dashboard (React)
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   └── 📁 pages/
│   └── 📄 package.json
├── 📁 backend/            # Server-side API (Node.js)
│   ├── 📁 config/         # Database configuration
│   ├── 📁 controllers/    # Route handlers
│   ├── 📁 middleware/     # Auth & validation
│   ├── 📁 models/         # MongoDB schemas
│   ├── 📁 routes/         # API endpoints
│   └── 📁 uploads/        # Image storage
├── 📁 frontend/           # Customer app (React)
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 context/
│   │   └── 📁 pages/
│   └── 📄 package.json
└── 📄 README.md
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💻 Make your changes and commit: `git commit -m 'Add amazing feature'`
4. 🚀 Push to the branch: `git push origin feature/amazing-feature`
5. 📝 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

- **Database Connection Failed**: Ensure MongoDB is running and check your `MONGO_URI`
- **Port Already in Use**: Change the port in `.env` or kill the process using that port
- **Build Errors**: Run `npm install` to ensure all dependencies are installed
- **CORS Issues**: Check backend CORS configuration for frontend requests

### Getting Help

- 📧 Contact: [www.nadun50@gmail.com](mailto:www.nadun50@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/UNNuwantha/food-delivery-app/issues)
- 📚 Docs: [Full Documentation](./docs/)

---

⭐ **Star this repo** if you found it helpful!
