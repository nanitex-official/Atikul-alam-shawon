# Backend API

A RESTful API built with **Node.js**, **Express**, and **MongoDB**.

---

## 📁 Folder Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── authController.js     # Auth logic (register, login, getMe)
├── middleware/
│   ├── authMiddleware.js     # JWT protect + adminOnly guards
│   └── errorMiddleware.js    # Global error handler
├── models/
│   └── User.js               # Mongoose User model
├── routes/
│   ├── authRoutes.js         # /api/auth routes
│   └── userRoutes.js         # /api/users routes
├── .env                      # Environment variables (never commit!)
├── .env.example              # Safe template to share
├── .gitignore
├── package.json
└── server.js                 # Entry point
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173
```

### 3. Run the Server

**Development** (with auto-restart via nodemon):
```bash
npm run dev
```

**Production:**
```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint            | Access    | Description          |
|--------|---------------------|-----------|----------------------|
| POST   | /api/auth/register  | Public    | Register new user    |
| POST   | /api/auth/login     | Public    | Login & get token    |
| GET    | /api/auth/me        | 🔒 Private | Get logged-in user   |
| GET    | /api/users          | 🔒 Private | Get all users        |
| GET    | /api/users/:id      | 🔒 Private | Get user by ID       |

---

## 🔒 Authentication

Protected routes require a JWT token in the `Authorization` header:
```
Authorization: Bearer <your_token>
```

---

## 🔗 Connecting to Frontend

Make sure your frontend (Vite/React) sends requests to:
```
http://localhost:5000/api
```

The CORS is already configured to allow requests from `FRONTEND_URL` in your `.env`.
