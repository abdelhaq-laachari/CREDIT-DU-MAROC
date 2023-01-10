import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns, userColumns, orderColumns } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = ({ data, title }) => {
  // const path = window.location.pathname.split("/")[1];
  

  // // add switch statement to handle different paths
  // const switchFunction = () => {
  //   switch (path) {
  //     case "users":
  //       return userColumns.concat(userAction);
  //     case "cars":
  //       return carColumns.concat(carAction);
  //     case "orders":
  //       return orderColumns.concat(orderAction);
  //     default:
  //   }
  // };

  return (
    <div className="datatable">
      <div className="title">
        <div className="datatableTitle">{title}</div>
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={data}
        columns={carColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
