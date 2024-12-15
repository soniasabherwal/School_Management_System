import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Optional: Include custom CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data for the dashboard
  const stats = {
    students: 120,
    faculty: 15,
    classrooms: 10,
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the School Management System Dashboard</h1>
      
      <div className="stats-overview">
        <div className="stat-card">
          <h2>{stats.students}</h2>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h2>{stats.faculty}</h2>
          <p>Total Faculty</p>
        </div>
        <div className="stat-card">
          <h2>{stats.classrooms}</h2>
          <p>Total Classrooms</p>
        </div>
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        <button onClick={() => navigate("/attendance")}>Track Attendance</button>
        <button onClick={() => navigate("/students")}>Manage Students</button>
        <button onClick={() => navigate("/faculty")}>Manage Faculty</button>
        <button onClick={() => navigate("/classrooms")}>Manage Classrooms</button>
      </div>
    </div>
  );
};

export default Dashboard;
