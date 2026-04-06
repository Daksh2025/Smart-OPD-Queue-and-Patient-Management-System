# 🏥 Smart OPD — Queue & Patient Management System
 
A full-stack web application for managing hospital **Outpatient Departments (OPD)** with fingerprint-based patient identification, smart priority queue management, emergency handling, and role-based dashboards for Admins and Doctors.
 
---
 
## 📋 Table of Contents
 
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Roles & Access](#-roles--access)
- [Deployment on Render](#-deployment-on-render)
- [Contributing](#-contributing)
- [License](#-license)
 
---
 
## ✨ Features
 
- 🔐 **JWT Authentication** — Secure login with role-based access (Admin / Doctor)
- 👆 **Fingerprint Patient Identification** — Register and identify patients using fingerprint images powered by OpenCV
- 🏃 **Smart Queue Management** — Priority-based patient queuing system
- 🚨 **Emergency Handling** — Dedicated emergency patient flow with separate dashboard
- 👨‍⚕️ **Doctor Dashboard** — View assigned queue, patient details, and medical history
- 🛠️ **Admin Dashboard** — Full control over patients, users, queues, and system data
- 📋 **Patient Registration** — Register new patients with complete medical details
- 🏥 **Medical History Tracking** — Store and retrieve full patient medical records
- 🌐 **REST API** — Clean and structured Flask API with CORS support
- ☁️ **Render Ready** — Includes `render.yaml` for one-click cloud deployment
 
---
 
## 🛠 Tech Stack
 
### Backend
| Technology | Version | Purpose |
|---|---|---|
| Python / Flask | 3.0.3 | REST API framework |
| MongoDB (PyMongo) | 4.7.3 | Database |
| PyJWT | 2.8.0 | JWT Authentication |
| Werkzeug | 3.0.3 | Password hashing |
| OpenCV (headless) | 4.10.0.84 | Fingerprint image processing |
| NumPy | 1.26.4 | Numerical operations |
| Gunicorn | 22.0.0 | Production WSGI server |
| Flask-CORS | 4.0.1 | Cross-origin resource sharing |
| python-dotenv | 1.0.1 | Environment variable management |
 
### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI framework |
| React Router DOM | 6.30.3 | Client-side routing |
| Axios | 1.14.0 | HTTP client |
| Bootstrap | 5.3.8 | Styling & UI components |
 
---
 
## 📁 Project Structure
 
```
smart_opd_Patient_management_system/
│
├── render.yaml                        # Render.com deployment config
├── README.md
├── .gitignore
│
├── backend/
│   ├── run.py                         # App entry point
│   ├── requirements.txt               # Python dependencies
│   ├── .env.example                   # Environment variable template
│   ├── .gitignore
│   │
│   ├── fingerprint_data/              # Stored fingerprint images
│   │   └── temp/
│   │
│   └── app/
│       ├── __init__.py                # Flask app factory + CORS setup
│       ├── config.py                  # App configuration
│       │
│       ├── models/
│       │   ├── patient_model.py
│       │   ├── user_model.py
│       │   ├── queue_model.py
│       │   └── medical_history_model.py
│       │
│       ├── routes/
│       │   ├── auth_routes.py         # Login & Register
│       │   ├── patient_routes.py      # Patient CRUD
│       │   ├── queue_routes.py        # Queue management
│       │   ├── medical_routes.py      # Medical history
│       │   ├── fingerprint_routes.py  # Fingerprint register/identify
│       │   └── emergency_routes.py    # Emergency cases
│       │
│       ├── services/
│       │   ├── fingerprint_service.py
│       │   ├── queue_service.py
│       │   └── priority_service.py
│       │
│       └── utils/
│           ├── db.py                  # MongoDB connection
│           ├── token_generator.py     # JWT utilities
│           └── image_processing.py    # OpenCV helpers
│
└── frontend/
    ├── package.json
    ├── .env.example
    │
    ├── public/
    │   ├── index.html
    │   └── _redirects                 # SPA routing fix
    │
    └── src/
        ├── App.js                     # Routes definition
        ├── index.js
        ├── index.css
        │
        ├── context/
        │   └── AuthContext.js         # Global auth state
        │
        ├── components/
        │   ├── Navbar.jsx
        │   └── ProtectedRoute.jsx     # Route guard
        │
        ├── pages/
        │   ├── Login.jsx
        │   ├── AdminDashboard.jsx
        │   ├── DoctorDashboard.jsx
        │   ├── RegisterPatient.jsx
        │   ├── QueuePage.jsx
        │   └── EmergencyPage.jsx
        │
        ├── services/
        │   ├── authService.js
        │   ├── patientService.js
        │   ├── medicalService.js
        │   ├── queueService.js
        │   └── fingerprintService.js
        │
        └── utils/
            └── priorityHelper.js
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
Make sure you have these installed:
 
- **Python** 3.9+
- **Node.js** 16+ and npm
- **MongoDB** — Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier works)
- **Git**
 
---
 
### Backend Setup
 
```bash
# 1. Go to backend folder
cd backend
 
# 2. Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
 
# 3. Install dependencies
pip install -r requirements.txt
 
# 4. Setup environment variables
cp .env.example .env
# Open .env and fill in your values
 
# 5. Run development server
python run.py
```
 
✅ Backend runs at: **http://localhost:5001**
 
---
 
### Frontend Setup
 
```bash
# 1. Go to frontend folder
cd frontend
 
# 2. Install dependencies
npm install
 
# 3. Setup environment variables
cp .env.example .env
# Open .env and set REACT_APP_API_URL=http://localhost:5001
 
# 4. Start development server
npm start
```
 
✅ Frontend runs at: **http://localhost:3000**
 
---
 
## 🔑 Environment Variables
 
### Backend — `backend/.env`
 
```env
SECRET_KEY=your_very_secret_key_here
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/smart_opd?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
```
 
### Frontend — `frontend/.env`
 
```env
REACT_APP_API_URL=http://localhost:5001
```
 
> ⚠️ **Never commit `.env` files.** They are already in `.gitignore`.
> Use `.env.example` files as templates only.
 
---
 
## 📡 API Endpoints
 
### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user (admin/doctor) |
| `POST` | `/api/auth/login` | Login and receive JWT token |
 
### Patients
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/patients/` | Get all patients |
| `POST` | `/api/patients/` | Register a new patient |
| `GET` | `/api/patients/:id` | Get patient by ID |
| `PUT` | `/api/patients/:id` | Update patient details |
| `DELETE` | `/api/patients/:id` | Delete a patient |
 
### Queue
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/queue/` | Get current queue |
| `POST` | `/api/queue/add` | Add patient to queue |
| `PUT` | `/api/queue/next` | Move to next patient |
| `DELETE` | `/api/queue/clear` | Clear the queue |
 
### Medical History
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/medical/:patient_id` | Get patient medical history |
| `POST` | `/api/medical/` | Add new medical record |
 
### Fingerprint
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/fingerprint/register` | Register patient fingerprint |
| `POST` | `/api/fingerprint/identify` | Identify patient by fingerprint |
 
### Emergency
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/emergency/` | Get all emergency cases |
| `POST` | `/api/emergency/add` | Add new emergency case |
| `PUT` | `/api/emergency/:id` | Update emergency case status |
 
---
 
## 👥 Roles & Access
 
| Feature | Admin | Doctor |
|---|---|---|
| Login | ✅ | ✅ |
| Register Patient | ✅ | ✅ |
| View Queue | ✅ | ✅ |
| Manage Queue | ✅ | ✅ |
| View Medical History | ✅ | ✅ |
| Add Medical Record | ✅ | ✅ |
| Emergency Dashboard | ✅ | ✅ |
| Manage Users | ✅ | ❌ |
| Admin Dashboard | ✅ | ❌ |
| Fingerprint Management | ✅ | ❌ |
 
---
 
## ☁️ Deployment on Render
 
This project includes `render.yaml` for one-click deployment.
 
### Steps:
 
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint**
3. Connect your GitHub repository
4. Render auto-detects `render.yaml` and sets up both services
5. Set environment variables manually in the Render dashboard:
 
**Backend service:**
```
MONGO_URI        = your MongoDB Atlas URI
SECRET_KEY       = your secret key
FRONTEND_URL     = https://your-frontend.onrender.com
```
 
**Frontend service:**
```
REACT_APP_API_URL = https://your-backend.onrender.com
```
 
6. Click **Deploy** 🚀
 
---
 
## 🤝 Contributing
 
1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Commit your changes:
```bash
git commit -m "Add: your feature description"
```
4. Push to your branch:
```bash
git push origin feature/your-feature-name
```
5. Open a **Pull Request** on GitHub
 
---
 
## 📄 License
 
This project is licensed under the **MIT License** — feel free to use, modify, and distribute.
 
---
 
## 👨‍💻 Author
 
**Daksh** — [@Daksh2025](https://github.com/Daksh2025)
 
---
 
> Built with ❤️ to make hospital OPD management smarter and faster.
