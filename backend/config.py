# Main configuration of application

from flask import Flask
from flask_sqlalchemy import  SQLAlchemy
from flask_cors import  CORS


# initialized app
app = Flask(__name__)
# Removed CORS error from console, allowing frontend to communicate with backend
CORS(app)

# Specifying the location of the database stored on the machine
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

#  Initializing db object, Creates a db instance
db = SQLAlchemy(app)
