import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";
import "../styles/Services.css";
import Map from "../assets/img/map.jpg";
import Map_r from "../assets/img/rmap.jpg";
import Cur from "../assets/img/cur.svg";
import Send from "../assets/img/send.svg";
import Send2 from "../assets/img/send2.png";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-11/12 h-[70vh] lg:h-[85vh] justify-center space-y-5 items-center text-center text-[#333333] ">
          <img className="first" src={Map} alt="" />
          <h1 className="text-xl lg:text-2xl font-semibold font-circular">Services</h1>
          <span className="text-4xl lg:text-6xl font-bold font-circular">
            Experience the convenience of banking at your fingertips
          </span>
          <span className="text-2xl font-semibold font-circular">
            Make your money work for you
          </span>
        </div>
      </div>
      {/* second section before footer start here */}
      <div className="pb-6 flex flex-col w-full items-center space-y-9 bg-[#F3F4F6]">
        {/* first start */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 lg:w-9/12 h-[80vh] bg-white rounded-lg drop-shadow-xl">
          <div className="w-11/12 lg:w-6/12 h-full flex flex-col justify-center space-y-6">
            <span className="text-4xl lg:text-6xl font-bold font-circular">
              Sending money, easy by default
            </span>
            <p className="lg:text-md font-circular text-[#505A63]">
              Moving money should never take more than a few taps. Transfers are
              always free between Revolute friends (and you can even add a gif,
              apparently the kids love it these days)
            </p>
            <a
              className="bt w-max Box-sc-1g1k12l-0 Text-sc-1be7qv6-0 sc-bf2bc9a0-0 kHwqAw jFERPg sc-9be5bfc-0 fmuLIu"
              href="https://get.revolut.com/WqOb7KItnwb"
            >
              <span
                max="2"
                className="LineClamp__LineClampBase-sc-1asyw6f-0 iXNKJi"
              >
                Try it out
              </span>
              <svg
                viewBox="0 0 24 24"
                size="24"
                aria-label="Try it out"
                className="icon-base__IconBase-sc-1efctcf-0 fAGOVc sc-9be5bfc-1 htrdzR"
              >
                <g fill="currentColor">
                  <path
                    fill="currentColor"
                    d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-11/12 lg:w-4/12 ">
            <img src={Send} alt="" />
          </div>
        </div>
        {/* first end */}

        {/* Second start */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 lg:w-9/12 h-[80vh] bg-white rounded-lg drop-shadow-xl">
          <div className="w-11/12 lg:w-4/12 order-2">
            <img src={Cur} alt="" />
          </div>
          <div className="lg:order-2 w-11/12 lg:w-6/12 h-full flex flex-col justify-center space-y-6">
            <span className="text-3xl lg:text-5xl font-bold font-circular">
              Request money in any combo of currencies
            </span>
            <p className="text-md font-circular text-[#505A63]">
              Choose your way to ask for money: send payment links, try ‘near
              me’ or flash QR codes, so there’s no escape from paying you back
            </p>
            <a
              className="bt w-max Box-sc-1g1k12l-0 Text-sc-1be7qv6-0 sc-bf2bc9a0-0 kHwqAw jFERPg sc-9be5bfc-0 fmuLIu"
              href="https://get.revolut.com/WqOb7KItnwb"
            >
              <span
                max="2"
                className="LineClamp__LineClampBase-sc-1asyw6f-0 iXNKJi"
              >
                Get started
              </span>
              <svg
                viewBox="0 0 24 24"
                size="24"
                aria-label="Try it out"
                className="icon-base__IconBase-sc-1efctcf-0 fAGOVc sc-9be5bfc-1 htrdzR"
              >
                <g fill="currentColor">
                  <path
                    fill="currentColor"
                    d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        {/* Second end */}

        {/* Third start */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 lg:w-9/12 h-[80vh] bg-white rounded-lg drop-shadow-xl">
          <div className="w-11/12 lg:w-6/12 h-full flex flex-col justify-center space-y-6">
            <span className="text-3xl lg:text-5xl font-bold font-circular">
              Your money is protected by regulated banks
            </span>
            <p className="text-md font-circular text-[#505A63]">
              By law and under FCA regulation, your money is protected by
              regulated banks. We keep your money in these accounts until you
              pay it out
            </p>
            {/* <Button name="Explore more" /> */}
            <a
              className="bt w-max Box-sc-1g1k12l-0 Text-sc-1be7qv6-0 sc-bf2bc9a0-0 kHwqAw jFERPg sc-9be5bfc-0 fmuLIu"
              href="https://get.revolut.com/WqOb7KItnwb"
            >
              <span
                max="2"
                className="LineClamp__LineClampBase-sc-1asyw6f-0 iXNKJi"
              >
                Get started
              </span>
              <svg
                viewBox="0 0 24 24"
                size="24"
                aria-label="Try it out"
                className="icon-base__IconBase-sc-1efctcf-0 fAGOVc sc-9be5bfc-1 htrdzR"
              >
                <g fill="currentColor">
                  <path
                    fill="currentColor"
                    d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-11/12 lg:w-4/12 ">
            <img src={Send2} alt="" />
          </div>
        </div>
        {/* Third end */}
      </div>
      {/* second section before footer end here */}
      <Footer />
    </>
  );
};

export default Services;
