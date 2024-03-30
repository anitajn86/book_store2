import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";

function App() {
  return(
    <div>
      <Navbar />
       <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
       </Routes>
    </div>
  ) 
  
}

export default App;
