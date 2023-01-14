import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { paymentColumns, userColumns, transactionsColumns } from "../../datatablesource";
import { paymentAction, transactionsAction, userAction } from "../../actionTable";

const Datatable = ({ data, title }) => {
  const path = window.location.pathname.split("/")[1];
  

  // add switch statement to handle different paths
  const switchFunction = () => {
    switch (path) {
      case "users":
        return userColumns.concat(userAction);
      case "payments":
        return paymentColumns.concat(paymentAction);
      case "transactions":
        return transactionsColumns.concat(transactionsAction);
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
