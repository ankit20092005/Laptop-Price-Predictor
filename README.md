# 💻 Laptop Price Predictor

A full-stack **MERN + FastAPI** application that predicts laptop prices using a Machine Learning model. The application features secure JWT authentication, an interactive dashboard, prediction history, and a clean, responsive user interface.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 🤖 Machine Learning Price Prediction
- 📊 Dashboard with Prediction Statistics
- 📝 Prediction History
- 🗑️ Delete Prediction Records
- 📱 Responsive UI
- ⚡ FastAPI ML Service Integration
- 🌐 RESTful API Architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Machine Learning
- Python
- FastAPI
- Scikit-learn
- Pandas
- Joblib

---

## 📂 Project Structure

```
Laptop-Price-Predictor/
│
├── client/          # React Frontend
├── server/          # Express Backend
├── ml-service/      # FastAPI ML Service
├── README.md
└── .gitignore
```

---

## ✨ Screenshots

> Add your project screenshots here.

### Login Page

<img width="100%" src="screenshots/login.png"/>

### Dashboard

<img width="100%" src="screenshots/dashboard.png"/>

### Price Prediction

<img width="100%" src="screenshots/predict.png"/>

### Prediction History

<img width="100%" src="screenshots/history.png"/>

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ankit20092005/Laptop-Price-Predictor.git

cd Laptop-Price-Predictor
```

---

## 2. Install Frontend

```bash
cd client
npm install
```

---

## 3. Install Backend

```bash
cd ../server
npm install
```

---

## 4. Install ML Service

```bash
cd ../ml-service

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
```

---

## 🔑 Environment Variables

### Server (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
ML_SERVICE_URL=http://127.0.0.1:8000
```

---

### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Project

### Start FastAPI ML Service

```bash
cd ml-service

uvicorn main:app --reload
```

---

### Start Backend

```bash
cd server

npm run dev
```

---

### Start Frontend

```bash
cd client

npm run dev
```

---

## 📊 Workflow

```
React Frontend
      │
      ▼
Express Backend
      │
      ▼
FastAPI ML Service
      │
      ▼
Machine Learning Model
      │
      ▼
Predicted Price
      │
      ▼
MongoDB
```


## 👨‍💻 Author

**Ankit Haldar**

GitHub: https://github.com/ankit20092005

---
