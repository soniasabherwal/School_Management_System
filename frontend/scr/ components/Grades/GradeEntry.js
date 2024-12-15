import React, { useState, useEffect } from 'react';

const GradeEntry = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [newGrade, setNewGrade] = useState('');

  useEffect(() => {
    // Fetch the students list from API or use mock data
    fetch('/api/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        const initialGrades = {};
        data.forEach(student => {
          initialGrades[student.id] = ''; // Default: No grade
        });
        setGrades(initialGrades);
      });
  }, []);

  const handleGradeChange = (e, studentId) => {
    const { value } = e.target;
    setGrades(prevGrades => ({
      ...prevGrades,
      [studentId]: value,
    }));
  };

  const submitGrades = () => {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grades),
    })
      .then(response => response.json())
      .then(data => {
        alert('Grades submitted successfully');
      })
      .catch(err => {
        console.error('Error submitting grades:', err);
        alert('There was an error submitting the grades.');
      });
  };

  return (
    <div>
      <h1>Grade Entry</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
            <input
              type="text"
              value={grades[student.id] || ''}
              onChange={(e) => handleGradeChange(e, student.id)}
            />
          </li>
        ))}
      </ul>
      <button onClick={submitGrades}>Submit Grades</button>
    </div>
  );
};

export default GradeEntry;
