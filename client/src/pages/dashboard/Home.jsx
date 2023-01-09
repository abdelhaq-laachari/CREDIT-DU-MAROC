import React from "react";
import MasterCard from "../../components/Credit card/MasterCard";
import Sidebar from "../../components/Side bar/Sidebar";
import Nav from "../../components/Top nav/Nav";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Nav />
        <div className="w-[45%] flex items-start justify-end bg-slate-300">
          <div className="flex flex-col w-full p-2 justify-between">
            <span>May Cards</span>
            <MasterCard/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
