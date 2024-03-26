import "./App.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UseContext from "./hooks/UseContext";
import { getItem } from "./utility/LocalStore";
function App() {
  const userEntry = getItem("wsId");
  const [userId, setUserId] = useState(userEntry);
  return (
    <>
      <UseContext.Provider value={{ userId, setUserId }}>
        <Outlet />
      </UseContext.Provider>
    </>
  );
}

export default App;
