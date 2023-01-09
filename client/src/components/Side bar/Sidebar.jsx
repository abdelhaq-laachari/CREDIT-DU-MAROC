import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillCreditCard,
  AiOutlineLogout,
  AiOutlineTransaction,
} from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
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
            className="cursor-pointer duration-500 w-12"/>
          <h1
            className={`origin-left font-medium text-xl duration-200 ${
              !open && "hidden"
            }`}
          >
            Credit du maroc
          </h1>
        </div>
        <ul className="pt-9">
          <Link to="/search">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-md items-center gap-x-4">
              <AiOutlineTransaction />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Transaction
              </span>
            </li>
          </Link>
          <Link to="/search">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-md items-center gap-x-4">
              <AiFillCreditCard />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Cards
              </span>
            </li>
          </Link>
          <Link to="/search">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-md items-center gap-x-4">
              <MdOutlinePayments />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Payments
              </span>
            </li>
          </Link>
          <Link to="/search">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-md items-center gap-x-4">
              <FaUserCircle />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Profile
              </span>
            </li>
          </Link>
          <Link to="/search">
            <li className="flex mb-2 rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors text-md items-center gap-x-4">
              <AiOutlineLogout />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Log Out
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default App;
