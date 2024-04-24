# Database models

from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    # Takes above fields and creates a python dictionary, which can be converted into JSON, which can then be pass from our API
    def to_json(self):
        return { 
            'id': self.id, 
            'firstName': self.first_name,  
            'lastName': self.last_name,  
            'email': self.email 
        }