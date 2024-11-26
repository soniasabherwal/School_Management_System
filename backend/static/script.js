document.addEventListener("DOMContentLoaded", () => {
    const studentList = document.getElementById("student-list");
    const form = document.getElementById("add-student-form");

    // Fetch students
    const fetchStudents = async () => {
        const res = await fetch("/api/students");
        const data = await res.json();
        studentList.innerHTML = "";
        data.forEach((student, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${student.name} (${student.age} years old)`;
            studentList.appendChild(li);
        });
    };

    // Add student
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        const res = await fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age }),
        });

        if (res.ok) {
            form.reset();
            fetchStudents();
        } else {
            alert("Error adding student!");
        }
    });

    fetchStudents();
});

