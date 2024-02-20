import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./home/Home";
import GeraPalavra from "./home/GeraPalavra";
import SobreTi from "./home/Sobreti";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(newUser) {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
    console.log(users);
  }

  return (
    <div className="global">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="Signup" element={<Signup onAddUser={addUser} />} />
          <Route path="GeraPalavra" element={<GeraPalavra />} />
          <Route path="SobreTi" element={<SobreTi />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
