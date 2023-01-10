import React from "react";
import Mcrd from "../../assets/img/mcrd.svg";

const MasterCard = () => {
  return (
    <div className="text-gray-600">
      <div className="mx-auto">
        <div className="w-full max-w-xl">
          <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-96 p-6 rounded-xl shadow-md">
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-start justify-between space-x-4">
                <div className=" text-xl font-semibold tracking-tigh">
                  Crédit Du Maroc
                </div>

                <div className="inline-flex flex-col items-center justify-center">
                  <svg
                    className="h-8 w-8"
                    width="24"
                    height="24"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M11 8.5L8 15.5L5 8.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>

                  <div className="font-semibold text-white">wallet</div>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                  <div className="relative w-full h-full grid grid-cols-2 gap-1">
                    <div className="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                    <div className="border-b border-r border-gray-900 rounded-br"></div>
                    <div className="border-b border-l border-gray-900 rounded-bl"></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="border-t border-r border-gray-900 rounded-tr"></div>
                    <div className="border-t border-l border-gray-900 rounded-tl"></div>
                  </div>
                </div>
                <span className="text-white font-bold text-xl">
                  5327 9574 8433 7981
                </span>
              </div>
              <div className="flex w-full justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-tight">
                  Valid Thru <span className="text-md font-normal">12/24</span>
                </span>
                <span className="text-md">Mr. Alex Parker</span>
              </div>
              <div className="w-20">
                <img src={Mcrd} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
