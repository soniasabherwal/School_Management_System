import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
    const { studentId } = useParams(); // Get the student ID from the URL
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch student details from the backend
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/students/${studentId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch student details");
                }
                const data = await response.json();
                setStudent(data); // Assume the response returns an object representing a student
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [studentId]);

    if (loading) return <p>Loading student details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Student Details</h2>
            {student ? (
                <div>
                    <p><strong>ID:</strong> {student.student_id || 'N/A'}</p>
                    <p><strong>Name:</strong> {student.first_name || 'N/A'} {student.last_name || ''}</p>
                    <p><strong>Email:</strong> {student.email || 'N/A'}</p>
                    <p><strong>Phone:</strong> {student.phone || 'N/A'}</p>
                    <p><strong>Start Date:</strong> {student.start_date || 'N/A'}</p>
                    <p><strong>Degree:</strong> {student.degree || 'N/A'}</p>
                    <p><strong>Date of Birth:</strong> {student.dob || 'N/A'}</p>
                </div>
            ) : (
                <p>No student details found.</p>
            )}
        </div>
    );
};

export default StudentDetail;
