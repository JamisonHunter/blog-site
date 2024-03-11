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
def portal():
    # Get a single document from the collection.
    message = collection.find_one()
    # Rendering template with variable to be sent to index.html
    return render_template("index.html", message=message)

# Testing an API route.
@app.route("/api", methods=['GET'])
def api():
    message_first = collection.find_one({}, sort=[('date', -1)])
    message_second = collection.find_one({}, sort=[('date', -1)], skip=1)
    message_third = collection.find_one({}, sort=[('date', -1)], skip=2)
    # ObjectId is not recognized. It needs to be converted.
    message_first['_id'] = str(message_first['_id'])
    message_second['_id'] = str(message_second['_id'])
    message_third['_id'] = str(message_third['_id'])
    # Jsonify seems optional here but I suspect it is a good practice. 
    return jsonify(message_first, message_second, message_third)



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)