
from flask import Flask, jsonify
from flask import Flask, render_template


app = Flask(__name__)

# Sample Data
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

exams = [
    {
        "exam_id": 1,
        "created_at": "2024-11-05",
        "exam_name": "Midterm Mathematics",
        "exam_date": "2024-12-01"
    },
    {
        "exam_id": 2,
        "created_at": "2024-11-06",
        "exam_name": "Final Literature",
        "exam_date": "2024-12-15"
    }
]

exam_results = [
    {
        "created_at": "2024-12-01",
        "points_poss": 100,
        "points_earned": 90,
        "student_id": 1,
        "exam_id": 1
    },
    {
        "created_at": "2024-12-15",
        "points_poss": 100,
        "points_earned": 85,
        "student_id": 2,
        "exam_id": 2
    }
]

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

# Routes
@app.route('/')
def home():
    return "Welcome to the School Management System!"

@app.route('/')
def home():
    return render_template("index.html")  # Load the main HTML page


@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/faculty', methods=['GET'])
def get_faculty():
    return jsonify(faculty)

@app.route('/exams', methods=['GET'])
def get_exams():
    return jsonify(exams)

@app.route('/exam_results', methods=['GET'])
def get_exam_results():
    return jsonify(exam_results)

@app.route('/classrooms', methods=['GET'])
def get_classrooms():
    return jsonify(classrooms)

@app.route('/manifest.json')
def manifest():
    return app.send_static_file('manifest.json')


if __name__ == '__main__':
    app.run(debug=True)
