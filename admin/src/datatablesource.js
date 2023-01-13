export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 160,
  },
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

export const paymentColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "client",
    headerName: "Client",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.client.firstName} {params.row.client.lastName}  </div>;
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "payee",
    headerName: "Benefit",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 170,
  },
  {
    field: "description",
    headerName: "Description",
    width: 170,
  },
];

export const transactionsColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "client",
    headerName: "Client",
    width: 160,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.client.firstName} {params.row.client.lastName}  </div>;
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 170,
  },
  {
    field: "description",
    headerName: "Description",
    width: 170,
  },
];
