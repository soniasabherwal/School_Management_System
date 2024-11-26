
import React, { useState } from 'react';
import api from '../../services/api';

function AddClassroom() {
  const [name, setName] = useState('');

  const addClassroom = () => {
    api.post('/classrooms', { name }).then(() => {
      alert('Classroom added!');
    });
  };

  return (
    <div>
      <h1>Add Classroom</h1>
      <input
        type="text"
        placeholder="Classroom Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addClassroom}>Add</button>
    </div>
  );
}

export default AddClassroom;
