import React from "react";
import Sidebar from "../../components/Side bar/Sidebar";

const Home = () => {
  return (
    <div className="bg-blacks flex">
      <Sidebar />
      <div>
        <p className="text-lg h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          excepturi soluta quos iure optio veritatis a repellat, hic provident
          dolorum facilis. Sunt tenetur similique maxime molestias quo! Cum,
          aliquid consequatur!
        </p>
      </div>
    </div>
  );
};

export default Home;
