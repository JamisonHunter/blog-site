# Imports
from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId


app = Flask(__name__)
CORS(app)

# Establishing MongoDB connection
client = MongoClient(MONGO_URI)
db = client["blog"]
collection = db["posts"]

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)