
const BASE_URL = "http://127.0.0.1:5000/faculty";

export async function getFaculty() {
    const response = await fetch(BASE_URL);
    return response.json();
}

export async function addFaculty(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
}
