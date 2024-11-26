
import React, { useEffect, useState } from 'react';

const FacultyDetail = ({ facultyId }) => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    fetch(`/api/faculty/${facultyId}`)
      .then(response => response.json())
      .then(data => setFaculty(data))
      .catch(error => console.error('Error fetching faculty:', error));
  }, [facultyId]);

  if (!faculty) return <div>Loading...</div>;

  return (
    <div>
      <h2>Faculty Details</h2>
      <p
