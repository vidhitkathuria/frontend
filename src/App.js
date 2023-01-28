import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import React from "react";
import Home from "./pages/Home";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const result = JSON.parse(localStorage.getItem("user"));
  console.log(result, "line 10");
  const [user, setUser] = useState(result);
  useEffect(() => {
    // setUser(result);
  }, [result]);
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {user && <Route path="/" element={<Home />} />}
    </Routes>
  );
};

export default App;
