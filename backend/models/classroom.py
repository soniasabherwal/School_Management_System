from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Classroom(db.Model):
    __tablename__ = 'classrooms'

    class_id = db.Column(db.Integer, primary_key=True)
    room_num = db.Column(db.String(50), nullable=False)
    faculty_id = db.Column(db.Integer, nullable=False)  # Foreign key to Faculty table
    course_id = db.Column(db.String(50), nullable=False)

    def __init__(self,

