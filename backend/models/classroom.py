
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Classroom(db.Model):
    __tablename__ = 'classrooms'

    class_id = db.Column(db.Integer, primary_key=True)
    room_num = db.Column(db.String(50), nullable=False)
    faculty_id = db.Column(db.Integer, nullable=False)  # Foreign key to Faculty table
    course_id = db.Column(db.String(50), nullable=False)

    def __init__(self, room_num, faculty_id, course_id):
        self.room_num = room_num
        self.faculty_id = faculty_id
        self.course_id = course_id

    def to_dict(self):
        return {
            "class_id": self.class_id,
            "room_num": self.room_num,
            "faculty_id": self.faculty_id,
            "course_id": self.course_id
        }
