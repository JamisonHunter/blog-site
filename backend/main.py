# Imports
from flask import Flask, render_template
from flask_cors import CORS
from pymongo import MongoClient
# from bson import ObjectId
import creds


app = Flask(__name__)
CORS(app)

# Establishing MongoDB connection
client = MongoClient(creds.MONGO_URI)
db = client["blog"]
collection = db["posts"]

@app.route("/")
def hello_world():
    message = collection.find_one()
    return render_template("index.html", message=message)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)