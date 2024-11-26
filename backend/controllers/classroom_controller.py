
from flask import Blueprint, jsonify, request

# Define a blueprint for classroom-related routes
classroom_bp = Blueprint('classroom_bp', __name__)

# Sample in-memory data (this would typically come from a database)
classrooms = [
    {
        "class_id": 1,
        "room_num": "A101",
        "faculty_id": 1,
        "course_id": "CS101"
    },
    {
        "class_id": 2,
        "room_num": "B202",
        "faculty_id": 2,
        "course_id": "LIT201"
    }
]

# Route to get all classrooms
@classroom_bp.route('/classrooms', methods=['GET'])
def get_all_classrooms():
    return jsonify(classrooms)

# Route to get a single classroom by ID
@classroom_bp.route('/classrooms/<int:class_id>', methods=['GET'])
def get_classroom_by_id(class_id):
    classroom = next((c for c in classrooms if c['class_id'] == class_id), None)
    if classroom:
        return jsonify(classroom)
    return jsonify({"error": "Classroom not found"}), 404

# Route to add a new classroom
@classroom_bp.route('/classrooms', methods=['POST'])
def add_classroom():
    data = request.json
    if not
