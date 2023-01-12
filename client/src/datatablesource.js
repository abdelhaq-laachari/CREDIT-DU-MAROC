export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "client",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.fullName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 160,
  },

  // add address and city in one column
  {
    field: "address",
    headerName: "Address",
    width: 160,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const transactionsColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="font-bold text-base capitalize">
          {params.row.type}
        </div>
      );
    }
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="font-semibold ">
          {params.row.amount} <span className="font-semibold">USD</span>
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
];

export const paymentColumns = [
  { field: "_id", headerName: "ID", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    width: 140,
    renderCell: (params) => {
      return (
        <div className="font-semibold text-base">
          {params.row.amount} <span className="font-semibold">USD</span>
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 170,
  },
  {
    field: "description",
    headerName: "Description",
    width: 220,
  },
  {
    field: "payee",
    headerName: "Payee",
    width: 210,
    renderCell: (params) => {
      return (
        <div className="font-semibold text-base">
          {params.row.payee}
        </div>
      );
    }
  },
];

