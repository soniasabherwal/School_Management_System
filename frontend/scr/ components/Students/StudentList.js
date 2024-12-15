import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getStudents, deleteStudent } from '../../services/studentApi'; // Import the functions from studentApi.js

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the API when the component loads
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch students and update the state using getStudents
  const fetchStudents = async () => {
    try {
      const studentsData = await getStudents(); // Call getStudents from studentApi.js
      setStudents(studentsData); // Set students state
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Handle deleting a student using deleteStudent
  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id); // Call deleteStudent from studentApi.js
      // Remove the deleted student from the state
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>
      <List>
        {students.map((student) => (
          <ListItem
            key={student.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteStudent(student.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={student.name} secondary={`ID: ${student.id}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default StudentList;
