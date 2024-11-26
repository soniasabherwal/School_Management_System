
import React, { useEffect, useState } from 'react';

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch('/api/faculty')
      .then(response => response.json())
      .then(data => setFaculty(data))
      .catch(error => console.error('Error fetching faculty:', error));
  }, []);

  return (
    <div>
      <h2>Faculty List</h2>
      <ul>
        {faculty.map(facultyMember => (
          <li key={facultyMember.id}>
            {facultyMember.name} - {facultyMember.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
