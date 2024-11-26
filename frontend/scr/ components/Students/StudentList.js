import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('/students').then(response => setStudents(response.data));
  }, []);

  const deleteStudent = (id) => {
    api.delete(`/students/${id}`).then(() => {
      setStudents(students.filter(student => student.id !== id));
    });
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

