import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadPdf from "./components/PDF/DownloadPdf";

// view user
const viewUser = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("orderId");
  localStorage.setItem("userId", _id);
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


export const downloadAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className=" rounded cursor-pointer text-white bg-blue-500 hover:bg-blue-600 p-1">
          <PDFDownloadLink
            document={
              <DownloadPdf
                amount={params.row.amount}
                bankName="credit du maroc"
                date={params.row.date}
                type={params.row.type}
                description={params.row.description}
              />
            }
            fileName="receipt"
          >
            Download
          </PDFDownloadLink>
        </div>
      );
    },
  },
];
