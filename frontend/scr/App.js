import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // AuthContext for managing authentication
import Login from "./components/Authentication/Login"; 
import Register from "./components/Authentication/Register";
import StudentList from "./components/Students/StudentList";
import FacultyList from "./components/Faculty/FacultyList";
import ClassroomList from "./components/Classroom/ClassroomList";
import Dashboard from "./components/AttendanceTracking/Dashboard";
import RoleBasedAccess from "./components/Permissions/RoleBasedAccess"; // Role-based access control

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Route */}
        <Route path="/" element={<RoleBasedAccess role="admin"><Dashboard /></RoleBasedAccess>} />

        {/* Student Management Route */}
        <Route path="/students" element={<RoleBasedAccess role="teacher"><StudentList /></RoleBasedAccess>} />

        {/* Faculty Management Route */}
        <Route path="/faculty" element={<RoleBasedAccess role="admin"><FacultyList /></RoleBasedAccess>} />

        {/* Classroom Management Route */}
        <Route path="/classrooms" element={<RoleBasedAccess role="teacher"><ClassroomList /></RoleBasedAccess>} />

        {/* Fallback Route for unmatched URLs */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
