
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClassroomDetail = () => {
    const { classId } = useParams(); // Get the classroom ID from the URL
    const [classroom, setClassroom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch classroom details from the backend
        const fetchClassroom = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/classrooms/${classId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch classroom details");
                }
                const data = await response.json();
                setClassroom(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClassroom();
    }, [classId]);

    if (loading) return <p>Loading classroom details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Classroom Details</h2>
            {classroom ? (
                <div>
                    <p><strong>Classroom ID:</strong> {classroom.class_id}</p>
                    <p><strong>Room Number:</strong> {classroom.room_num}</p>
                    <p><strong>Faculty ID:</strong> {classroom.faculty_id}</p>
                    <p><strong>Course ID:</strong> {classroom.course_id}</p>
                </div>
            ) : (
                <p>No classroom data available.</p>
            )}
        </div>
    );
};

export default ClassroomDetail;
