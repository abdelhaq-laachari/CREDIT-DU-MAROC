import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Bank from "../assets/img/bank.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-around items-center bg-[#F8F8F8] w-full h-[87vh]">
        <div className="flex flex-col space-y-2 w-2/5  text-[#333333]">
          <span className="text-sm font-sans antialiased">
            Online checking account
          </span>
          <strong className="text-5xl font-circular ">
            Checking <br /> account with <br /> no monthly fees
          </strong>
          <p className="font-circular text-sm subpixel-antialiased">
            An online checking account built for you. Open your account for free
            and easily manage your money with 24/7 mobile banking. Access cash
            with over 60,000 fee-free ATMs.1
          </p>
        </div>
        <div className="w-96">
          <img src={Bank} alt="bank_image" />
        </div>
      </div>
      <div className="h-screen bg-slate-200"></div>
    </>
  );
};

export default Home;
