import os
from flask import Flask, jsonify, request
from flask_cors import CORS

from query import Query

app = Flask(__name__)
CORS(app)

database = Query()

@app.route("/")
def home():
    return True

@app.route('/login', methods=['GET'])
def login():
    try:
        id = request.args.get('id')
        password = request.args.get('password')
        return database.login(id, password)
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})
    
@app.route('/signup', methods=["POST", "GET"])
def signup():
    try:
        data = request.json
        nama = data.get("nama")
        pin = data.get("pin")
        password = data.get("password")
        print(nama, pin, password)

        return database.signup(nama, pin, password)
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})



if __name__ == '__main__':
    app.run(debug=True)


