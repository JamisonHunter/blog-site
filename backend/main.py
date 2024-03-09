# Imports
from flask import Flask, render_template, jsonify
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

# Establing a home route. 
@app.route("/", methods=["GET"])
def home():
    # Get a single document from the collection.
    message = collection.find_one()
    # Rendering template with variable to be sent to index.html
    return render_template("index.html", message=message)

# Testing an API route.
@app.route("/api", methods=['GET'])
def api():
    message = collection.find_one()
    # ObjectId is not recognized. It needs to be converted.
    message['_id'] = str(message['_id'])
    # Jsonify seems optional here but I suspect it is a good practice. 
    return jsonify(message)



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)