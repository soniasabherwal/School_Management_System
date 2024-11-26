
import os

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = f'sqlite:///{os.path.join(basedir, "app.db")}'  # SQLite database
SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking
