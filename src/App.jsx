import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      {/* <div
        className="navbar-component"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "1",
        }}
      >
       
      </div> */}
      {/* <div className="other-components" style={{ marginTop: "70px" }}> */}
      <Routes>
        <Route path ="/" element={<SignUp/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;
