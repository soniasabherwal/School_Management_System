import React, { useState, useEffect } from 'react';

const AttendanceTracker = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    fetch('/api/students') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        const initialAttendance = {};
        data.forEach(student => {
          initialAttendance[student.id] = false; // Default: absent
        });
        setAttendance(initialAttendance);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const submitAttendance = () => {
    fetch('/api/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attendance),
    })
      .then(() => alert('Attendance submitted!'))
      .catch(error => console.error('Error submitting attendance:', error));
  };

  return (
    <div>
      <h1>Attendance Tracker</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <input
              type="checkbox"
              checked={attendance[student.id] || false}
              onChange={() => toggleAttendance(student.id)}
            />
          </li>
        ))}
      </ul>
      <button onClick={submitAttendance}>Submit Attendance</button>
    </div>
  );
};

export default AttendanceTracker;
