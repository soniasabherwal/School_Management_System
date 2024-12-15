
from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

class Student(db.Model):
    __tablename__ = 'students'

    student_id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), nullable=False, unique=True)
    phone = db.Column(db.String(20), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    degree = db.Column(db.String(100), nullable=False)
    dob = db.Column(db.Date, nullable=False)

    def __init__(self, created_at, first_name, email, phone, start_date, degree, dob):
        self.created_at = created_at
        self.first_name = first_name
        self.email = email
        self.phone = phone
        self.start_date = start_date
        self.degree = degree
        self.dob = dob

    def to_dict(self):
        return {
            "student_id": self.student_id,
            "created_at": self.created_at,
            "first_name": self.first_name,
            "email": self.email,
            "phone": self.phone,
            "start_date": self.start_date,
            "degree": self.degree,
            "dob": self.dob
        }
