
const BASE_URL = "http://127.0.0.1:5000/students";

/**
 * Fetch all students
 */
export async function getStudents() {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Error fetching students: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Add a new student
 * @param {Object} data - The student data to add
 */
export async function addStudent(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Error adding student: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Fetch a specific student by ID
 * @param {string|number} studentId - The ID of the student to fetch
 */
export async function getStudentById(studentId) {
    const response = await fetch(`${BASE_URL}/${studentId}`);
    if (!response.ok) {
        throw new Error(`Error fetching student with ID ${studentId}: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Update an existing student
 * @param {string|number} studentId - The ID of the student to update
 * @param {Object} data - The updated student data
 */
export async function updateStudent(studentId, data) {
    const response = await fetch(`${BASE_URL}/${studentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Error updating student with ID ${studentId}: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Delete a student
 * @param {string|number} studentId - The ID of the student to delete
 */
export async function deleteStudent(studentId) {
    const response = await fetch(`${BASE_URL}/${studentId}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`Error deleting student with ID ${studentId}: ${response.statusText}`);
    }
    return response.json();
}
