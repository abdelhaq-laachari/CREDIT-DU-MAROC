import "./transactions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Transactions = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("admin/transactions", config)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} title="All Transactions" />
      </div>
    </div>
  );
};

export default Transactions;
