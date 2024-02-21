import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./home/Home";
import GeraPalavra from "./home/GeraPalavra";
import SobreTi from "./home/Sobreti";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  //let navigate = useNavigate();
  //const fname = "ana";
  // const pname = "baptista";

  function addUser(newUser) {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
    console.log(users);
  }

  /* const routeChange = (path) => {
    navigate(path);
  };*/

  function getUser(user) {
    console.log(user);
  }

  return (
    <div className="global">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onGetUser={getUser} />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup onAddUser={addUser} />} />
          <Route path="/geraPalavra" element={<GeraPalavra />} />
          <Route path="/sobreTi" element={<SobreTi />} />
          <Route path="*" element={<Login onGetUser={getUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
