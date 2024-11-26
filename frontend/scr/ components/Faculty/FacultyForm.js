
import React, { useState } from 'react';

const FacultyForm = ({ facultyId, onSubmit }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const facultyData = { name, department, email, phone };
    if (facultyId) {
      fetch(`/api/faculty/${facultyId}`, {
        method: 'PUT',
        body: JSON.stringify(facultyData),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json())
        .then(updatedFaculty => onSubmit(updatedFaculty));
    } else {
      fetch('/api/faculty', {
        method: 'POST',
        body: JSON.stringify(facultyData),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json())
        .then(newFaculty => onSubmit(newFaculty));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FacultyForm;
