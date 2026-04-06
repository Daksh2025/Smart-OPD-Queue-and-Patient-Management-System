import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import RegisterPatient from "./pages/RegisterPatient";
import DoctorDashboard from "./pages/DoctorDashboard";
import QueuePage from "./pages/QueuePage";
import AdminDashboard from "./pages/AdminDashboard";
import EmergencyPage from "./pages/EmergencyPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Admin only */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register-patient"
          element={
            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
              <RegisterPatient />
            </ProtectedRoute>
          }
        />

        {/* Doctor */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={["doctor", "admin"]}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Queue — accessible to both */}
        <Route
          path="/queue"
          element={
            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
              <QueuePage />
            </ProtectedRoute>
          }
        />

        {/* Emergency — public access, no login required */}
        <Route path="/emergency" element={<EmergencyPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
