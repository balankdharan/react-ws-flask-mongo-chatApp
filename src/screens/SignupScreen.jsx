import React, { useState } from "react";

// create it like the fight club code

const SignupScreen = () => {
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("Received message");
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
      }}
    >
      <div className="card-white">
        <h1 className="title">Chat App</h1>
        <h3>Name</h3>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <h3>Enter Your Room Id</h3>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button
            className="button"
            onClick={handleSendMessage}
            style={{ width: "100%", marginTop: "20px" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
