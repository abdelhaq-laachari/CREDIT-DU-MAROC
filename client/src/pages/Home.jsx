import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Bank from "../assets/img/bank.png";
import World from "../assets/img/world.jpg";
import Earn from "../assets/img/earn.png";
import Reward from "../assets/img/Rewards.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <Navbar />
      <div className="flex justify-around items-center  w-full h-[87vh]">
        <div className="flex flex-col space-y-2 w-2/5 drop-shadow-md text-[#333333]">
          <span className="text-sm pl-1 font-sans antialiased">
            Online checking account
          </span>
          <strong className="text-6xl font-circular ">
            Checking <br /> account with <br /> no monthly fees
          </strong>
          <p className="font-circular pl-1 text-sm subpixel-antialiased">
            An online checking account built for you. Open your account for free
            and easily manage your money with 24/7 mobile banking. Access cash
            with over 60,000 fee-free ATMs.1
          </p>
        </div>
        <div className="w-96 drop-shadow-xl">
          <img src={Bank} alt="bank_image" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* text start here */}
        <div className="flex flex-col items-center font-circular text-[#191C1F]">
          <span className="text-xl">Everyday essentials</span>
          <strong className="my-5 text-6xl">
            Send, spend and save smarter
          </strong>
          <span>
            Make day-to-day spending a breeze with all things money in one place
          </span>
        </div>
        {/* text end here */}
        {/* cards start here */}
        <div className="flex overflow-hidden justify-between items-center h-[87vh] w-10/12 rounded-3xl my-6 drop-shadow-2xl bg-blue-600">
          <img className="world_image" src={World} alt="" />
          <div className="pl-10 space-y-3 text-white font-circular flex flex-col">
            <span className="text-4xl tracking-wide font-bold">
              Pay and get paid, hassle-
              <br />
              free
            </span>
            <span className="text-lg tracking-wide leading-8">
              Send and request money with a tap, split bills <br /> easily with
              anyone in 200+ countries
            </span>
          </div>
        </div>
        {/* cards end here */}
        {/* Third Section start here */}
        <div className="w-full flex justify-center space-x-8 my-6 ">
          <div className="Card w-2/5 relative flex justify-center overflow-hidden h-[85vh] rounded-3xl drop-shadow-2xl">
            <img className="Earn" src={Earn} alt="" />
            <span className="text-4xl font-circular font-bold mt-6">
              Earn up to 2.5% annual <br /> interest, paid daily
            </span>
          </div>
          <div className="Card w-2/5 relative flex justify-center overflow-hidden h-[85vh] rounded-3xl drop-shadow-2xl">
            <img className="Earn" src={Reward} alt="" />
            <span className="text-4xl font-circular font-bold mt-6 text-white">
              Get exclusive Rewards <br /> and save as you spend
            </span>
          </div>
        </div>
        {/* Third Section end here */}
        {/* another section start here */}
        <div className="relative w-[90%] h-[80vh] drop-shadow-xl my-5 bg-emerald-500 rounded-3xl">
          <div className="bank_app flex flex-col items-center justify-center">
            <div className="my-3 font-bold flex flex-col items-center text-6xl font-circular text-[#333333]">
              <span>Open an online </span> <span>checking account </span>{" "}
              <span> for free today</span>
            </div>
            <span className="text-md font-circular">
              No monthly services fees. No minimum balance requirements.
            </span>
            <button className="bg-[#333333] text-white font-circular font-bold text-lg px-10 py-3 rounded-3xl mt-5">
              Open an account
            </button>
          </div>
        </div>
        {/* another section end here */}
      </div>
    </div>
  );
};

export default Home;
