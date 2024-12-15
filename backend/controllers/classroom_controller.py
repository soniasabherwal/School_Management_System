from flask import Blueprint, jsonify, request  # type: ignore

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
    if not data:
        return jsonify({"error": "No data provided"}), 400  # Return error if no data is sent

    # Validate required fields
    required_fields = ["class_id", "room_num", "faculty_id", "course_id"]
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

    # Check if class_id already exists
    if any(c['class_id'] == data['class_id'] for c in classrooms):
        return jsonify({"error": "Class ID already exists"}), 400

    # Create a new classroom object
    new_classroom = {
        "class_id": data["class_id"],
        "room_num": data["room_num"],
        "faculty_id": data["faculty_id"],
        "course_id": data["course_id"]
    }

    # Add to classroom list
    classrooms.append(new_classroom)
    return jsonify({"message": "Classroom added successfully", "classroom": new_classroom}), 201

# Route to delete a classroom by ID
@classroom_bp.route('/classrooms/<int:class_id>', methods=['DELETE'])
def delete_classroom(class_id):
    global classrooms
    classrooms = [c for c in classrooms if c['class_id'] != class_id]
    return jsonify({"message": "Classroom deleted successfully"}), 200
