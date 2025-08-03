import React from "react";
import "./HomeLeft.css";
import person from "../assets/Person11.jpg";

import { FcHome } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const HomeLeft = () => {
  return (
    <div className="about-container bg-[#fff] rounded-md">
      <div className="cover-img h-20"> </div>
      <div className="about-details flex items-center flex-col">
        <div className="profile-img-container">
          <img src={person} alt="" className="h-20 w-20 profile-img" />
        </div>
        <div className="personal flex flex-col items-center ">
          <h2>Venkata Anil</h2>
          <h4 className="bio">SOFTWARE DEVELOPER</h4>
       
          <div className="followers">
            <div className="posts-count follower-data post-div">
              <h1>100</h1>
              <h4>Post</h4>
            </div>
            <div className="followers-count follower-data post-div">
              <h1>10k</h1>
              <h4>Followers</h4>
            </div>
            <div className="following-count follower-data">
              <h1>1k</h1>
              <h4>Following</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pages-section">
        <div className="feed pages-item">
          <FcHome size={20} /> <h4>Feed</h4>
        </div>
        <div className="connections pages-item">
          <BsFillPeopleFill size={20} /> <h4>Connections</h4>
        </div>
        <div className="latest-news pages-item">
          <FaEarthAmericas size={20} color="blue" /> <h4>Latest News</h4>
        </div>
        <div className="events pages-item">
          <MdOutlineEventNote size={20} /> <h4>Events</h4>
        </div>
        <div className="notifications pages-item">
          <IoNotifications size={20} /> <h4>Notifications</h4>
        </div>
        <div className="settings pages-item">
          <IoIosSettings size={20} /> <h4>Settings</h4>
        </div>
      </div>
      <div className="view-profile flex justify-center">
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default HomeLeft;
