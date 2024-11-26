
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function ClassroomList() {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    api.get('/classrooms').then(response => setClassrooms(response.data));
  }, []);

  return (
    <div>
      <h1>Classroom List</h1>
      <ul>
        {classrooms.map(classroom => (
          <li key={classroom.id}>{classroom.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassroomList;
