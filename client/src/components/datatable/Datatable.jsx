import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { transactionsColumns, paymentColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import {downloadAction} from "../../actionTable"

const Datatable = ({ data, title }) => {
  const path = window.location.pathname.split("/")[2];

  // add switch statement to handle different paths
  const switchFunction = () => {
    switch (path) {
      case "transaction":
        return transactionsColumns.concat().concat(downloadAction);
      case "payments":
        return paymentColumns.concat();
      default:
    }
  };

  return (
    <div className="datatable">
      <div className="title">
        <div className="datatableTitle">{title}</div>
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={data}
        columns={switchFunction()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
