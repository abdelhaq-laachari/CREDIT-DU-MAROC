import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillCreditCard,
  AiOutlineLogout,
  AiOutlineTransaction,
} from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";
const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-[#F3F4F6] drop-shadow-lg">
      <div
        className={` ${open ? "w-64" : "w-20 "
          } h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={require("../../assets/icons/control.png")}
          alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://seeklogo.com/images/C/credit-du-maroc-logo-80D6D85982-seeklogo.com.png"
            alt="logo"
            className="cursor-pointer duration-500 w-12"
          />
          <h1
            className={`origin-left font-medium text-xl duration-200 ${!open && "hidden"
              }`}
          >
            Credit du maroc
          </h1>
        </div>
        <ul className="pt-9">
          <Link to="/dashboard">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-base items-center gap-x-4">
              <AiFillCreditCard />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Cards
              </span>
            </li>
          </Link>
          <Link to="/dashboard/transaction">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-base items-center gap-x-4">
              <AiOutlineTransaction />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Transaction
              </span>
            </li>
          </Link>
          <Link to="/dashboard/payments">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-base items-center gap-x-4">
              <MdOutlinePayments />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Payments
              </span>
            </li>
          </Link>
          <Link to="/dashboard/profile">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-base items-center gap-x-4">
              <FaUserCircle />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Profile
              </span>
            </li>
          </Link>
          <li
            onClick={() => {
              Cookies.remove('token');
              window.location.replace("/signin");
            }}
            className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-base items-center gap-x-4">
            <AiOutlineLogout />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Log Out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
