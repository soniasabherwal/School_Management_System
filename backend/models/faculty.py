
from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

class Faculty(db.Model):
    __tablename__ = 'faculty'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f"<Faculty {self.name}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'department': self.department,
            'email': self.email,
            'phone': self.phone
        }
