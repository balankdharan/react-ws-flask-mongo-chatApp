import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import backgroundImage from "../background.png";
const socket = io("http://localhost:5000");

const HomeScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState("general");
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("test", data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    // Clean up function to remove the event listener when component unmounts
    return () => {
      socket.off("message");
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleSendMessage = () => {
    socket.emit("send_message", { room, message: input });
    setInput("");
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="card">
        <h1 className="title">Chat App</h1>
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
