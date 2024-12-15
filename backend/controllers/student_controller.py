
from flask import Blueprint, jsonify, request # type: ignore

# Define a blueprint for student-related routes
student_bp = Blueprint('student_bp', __name__)

# Sample in-memory data for students
students = [
    {
        "student_id": 1,
        "created_at": "2024-11-01",
        "first_name": "Alice",
        "email": "alice@example.com",
        "phone": "123-456-7890",
        "start_date": "2024-08-15",
        "degree": "BSc Computer Science",
        "dob": "2000-05-10"
    },
    {
        "student_id": 2,
        "created_at": "2024-11-02",
        "first_name": "Bob",
        "email": "bob@example.com",
        "phone": "987-654-3210",
        "start_date": "2023-08-15",
        "degree": "BA Literature",
        "dob": "1999-03-20"
    }
]

# Route to get all students
@student_bp.route('/students', methods=['GET'])
def get_all_students():
    return jsonify(students)

# Route to get a single student by ID
@student_bp.route('/students/<int:student_id>', methods=['GET'])
def get_student_by_id(student_id):
    student = next((s for s in students if s['student_id'] == student_id), None)
    if student:
        return jsonify(student)
    return jsonify({"error": "Student not found"}), 404

# Route to add a new student
@student_bp.route('/students', methods=['POST'])
def add_student():
    data = request.json
    if not all(key in data for key in ("first_name", "email", "phone", "start_date", "degree", "dob")):
        return jsonify({"error": "Missing required fields"}), 400

    new_student = {
        "student_id": len(students) + 1,
        "created_at": "2024-11-26",
        **data
    }
    students.append(new_student)
    return jsonify(new_student), 201

# Route to update a student
@student_bp.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.json
    student = next((s for s in students if s['student_id'] == student_id), None)
    if not student:
        return jsonify({"error": "Student not found"}), 404

    student.update({
        "first_name": data.get("first_name", student['first_name']),
        "email": data.get("email", student['email']),
        "phone": data.get("phone", student['phone']),
        "start_date": data.get("start_date", student['start_date']),
        "degree": data.get("degree", student['degree']),
        "dob": data.get("dob", student['dob'])
    })
    return jsonify(student)

# Route to delete a student
@student_bp.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    global students
    students = [s for s in students if s['student_id'] != student_id]
    return jsonify({"message": "Student deleted"}), 200
