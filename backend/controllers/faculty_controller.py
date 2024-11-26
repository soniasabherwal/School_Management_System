
from flask import Blueprint, jsonify, request

# Define a blueprint for faculty-related routes
faculty_bp = Blueprint('faculty_bp', __name__)

# Sample in-memory data for faculty
faculty = [
    {
        "faculty_id": 1,
        "first_name": "Dr. Smith",
        "last_name": "Johnson",
        "department": "Computer Science",
        "email": "smith.johnson@example.com",
        "office_phone": "555-123-4567",
        "dob": "1980-01-15",
        "certification": "PhD Computer Science"
    },
    {
        "faculty_id": 2,
        "first_name": "Ms. Laura",
        "last_name": "White",
        "department": "Literature",
        "email": "laura.white@example.com",
        "office_phone": "555-987-6543",
        "dob": "1985-06-25",
        "certification": "MA Literature"
    }
]

# Route to get all faculty
@faculty_bp.route('/faculty', methods=['GET'])
def get_all_faculty():
    return jsonify(faculty)

# Route to get a single faculty by ID
@faculty_bp.route('/faculty/<int:faculty_id>', methods=['GET'])
def get_faculty_by_id(faculty_id):
    person = next((f for f in faculty if f['faculty_id'] == faculty_id), None)
    if person:
        return jsonify(person)
    return jsonify({"error": "Faculty member not found"}), 404

# Route to add a new faculty member
@faculty_bp.route('/faculty', methods=['POST'])
def add_faculty():
    data = request.json
    if not all(key in data for key in ("first_name", "last_name", "department", "email", "office_phone", "dob", "certification")):
        return jsonify({"error": "Missing required fields"}), 400

    new_faculty = {
        "faculty_id": len(faculty) + 1,
        **data
    }
    faculty.append(new_faculty)
    return jsonify(new_faculty), 201

# Route to update a faculty member
@faculty_bp.route('/faculty/<int:faculty_id>', methods=['PUT'])
def update_faculty(faculty_id):
    data = request.json
    person = next((f for f in faculty if f['faculty_id'] == faculty_id), None)
    if not person:
        return jsonify({"error": "Faculty member not found"}), 404

    person.update({
        "first_name": data.get("first_name", person['first_name']),
        "last_name": data.get("last_name", person['last_name']),
        "department": data.get("department", person['department']),
        "email": data.get("email", person['email']),
        "office_phone": data.get("office_phone", person['office_phone']),
        "dob": data.get("dob", person['dob']),
        "certification": data.get("certification", person['certification'])
    })
    return jsonify(person)

# Route to delete a faculty member
@faculty_bp.route('/faculty/<int:faculty_id>', methods=['DELETE'])
def delete_faculty(faculty_id):
    global faculty
    faculty = [f for f in faculty if f['faculty_id'] != faculty_id]
    return jsonify({"message": "Faculty member deleted"}), 200
