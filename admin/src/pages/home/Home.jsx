import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Home = () => {
  const [transactions, setTransactions] = useState();
  const [payment, setPayment] = useState();
  const [client, setClient] = useState();

  useEffect(() => {
    const totalTransactions = async () => {
      try {
        const res = await axios.get("admin/totalTransactions", config);
        setTransactions(res.data);
      } catch (error) {
        return error.response.data.message;
      }
    };

    const totalPayments = async () => {
      try {
        const res = await axios.get("admin/totalPayments", config);
        setPayment(res.data);
      }
      catch (error) {
        return error.response.data.message;
      }
    };

    const totalClient = async () => {
      try {
        const res = await axios.get("admin/totalClients", config);
        setClient(res.data);
      }
      catch (error) {
        return error.response.data.message;
      }
    };

    totalTransactions();
    totalPayments();
    totalClient();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={client} />
          <Widget type="transactions" amount={transactions} />
          <Widget type="payments" amount={payment} />
          <Widget type="balance" amount="100" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
