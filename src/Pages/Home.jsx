import React from "react";
import "./Home.css";
import HomeMiddle from "../Components/HomeMiddle";
import HomeLeft from "../Components/HomeLeft";
import HomeRight from "../Components/HomeRight/HomeRight";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="about">
        <HomeLeft />
      </div>
      <div className="posts ">
        <HomeMiddle />
      </div>
      <div className="suggestion">
        <HomeRight />
      </div>
    </div>
    </>
  );
};

export default Home;
