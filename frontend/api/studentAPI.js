
const BASE_URL = "http://127.0.0.1:5000/students";

export async function getStudents() {
    const response = await fetch(BASE_URL);
    return response.json();
}

export async function addStudent(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function getStudentById(studentId) {
    const response = await fetch(`${BASE_URL}/${studentId}`);
    return response.json();
}
