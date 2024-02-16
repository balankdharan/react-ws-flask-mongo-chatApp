# app.py

import os
from flask import Flask
from flask_pymongo import PyMongo
from flask_socketio import SocketIO, emit
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['MONGO_URI'] = os.getenv('MONGO_URI')

mongo = PyMongo(app)
socketio = SocketIO(app, cors_allowed_origins='*')

# Add WebSocket and MongoDB logic here

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('join_room')
def handle_join_room(data):
    room = data['room']
    print(data)
    emit('message', {'text': 'Joined the room'}, room=room)

@socketio.on('send_message')
def handle_send_message(data):
    room = data['room']
    message = data['message']
    emit('message', { 'message': message }, broadcast=True)
    print(data)

@app.route('/')
def index():
    return "data available"

if __name__ == "__main__":
    socketio.run(app, debug=True)
