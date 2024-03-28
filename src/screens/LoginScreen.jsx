import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UseContext from "../hooks/UseContext";
// create it like the fight club code
import { getItem, setItem } from "../utility/LocalStore";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const { setUserId } = useContext(UseContext);
  const navigate = useNavigate();

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("Received message");
    setItem("wsId", input);
    const idAccess = getItem("wsId");
    setUserId(idAccess);
    navigate("/chat");
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
        <h3>Enter Your Room Id</h3>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
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

export default LoginScreen;
