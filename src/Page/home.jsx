import React from "react";

import Sidebar from "../Components/Sidebar";
import AllPost from "./AllPost";;

const Home = () => {

  return (
    <div className="main-page">
      <Sidebar />
      <AllPost />
    </div>
  );
};

export default Home;
