
const BASE_URL = "http://127.0.0.1:5000/attendance";

export async function getAttendance() {
    const response = await fetch(BASE_URL);
    return response.json();
}

export async function addAttendance(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
}
