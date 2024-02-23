import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./home/Home";
import GeraPalavra from "./home/GeraPalavra";
import SobreTi from "./home/Sobreti";
import React from "react";
import PrivateRoutes from "../route/PrivateRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="global">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/geraPalavra" element={<GeraPalavra />} />
            <Route path="/sobreTi" element={<SobreTi />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
