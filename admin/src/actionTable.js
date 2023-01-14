import { Link } from "react-router-dom";

// view user
const viewUser = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("orderId");
  localStorage.setItem("userId", _id);
};
const viewTransactions = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("paymentId");
  localStorage.removeItem("transactionId");
  localStorage.setItem("orderId", _id);
};

const viewPayment = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("paymentId");
  localStorage.removeItem("transactionId");
  localStorage.setItem("transactionId", _id);
};


export const userAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewUser(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];

// car action table
export const paymentAction = [
  {
    field: "action",
    headerName: "Action",
    width: 210,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/payment/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewPayment(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];

// order action table
export const transactionsAction = [
  {
    field: "action",
    headerName: "Action",
    width: 210,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/transactions/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewTransactions(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];
