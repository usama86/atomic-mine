import Button from "../../../../UI/Button/Button";
export const getFields = (type, page) => {
  if (page === "AutoLiquidation") {
    if (type === "Pending")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "underlying_price",
          flex: 0.7,
          headerName: "Underlying Price",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "contract_price",
          flex: 0.7,
          headerName: "Contract Price",
        },
        {
          field: "current_market_value",
          flex: 1,
          headerName: "Current Market Value",
        },
        {
          field: "close-btn",
          flex: 1,
          headerName: "Close",
          preventSearch: true,
          renderCell: (params) => <Button isdefault={true}>Close</Button>,
        },
      ];

    if (type === "Archived")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "fill_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "timestamp",
          flex: 1,
          headerName: "Time Stamp",
          type: "date",
        },
        {
          field: "close-btn",
          flex: 1,
          headerName: "Close",
          preventSearch: true,
          renderCell: (params) => <Button isdefault={true}>Close</Button>,
        },
      ];
  }
  if (page === "Early") {
    if (type === "Pending")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "underlying_price",
          flex: 0.7,
          headerName: "Underlying Price",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "buying_power",
          flex: 0.7,
          headerName: "Buying Power",
        },
        {
          field: "requested_timestamp",
          flex: 1,
          headerName: "Req. Time Stamp",
          type: "date",
        },
      ];

    if (type === "Archived")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "timestamp",
          flex: 1,
          headerName: "Time Stamp",
          type: "date",
        },
      ];
  }
  if (page === "DNE") {
    return [
      {
        field: "account",
        flex: 1,
        headerName: "Acc #",
      },
      {
        field: "position",
        flex: 0.7,
        headerName: "Position",
      },
      {
        field: "quantity",
        flex: 0.7,
        headerName: "Quantity",
      },
      {
        field: "requested_timestamp",
        flex: 1,
        headerName: "Req. Time Stamp",
        type: "date",
      },
    ];
  }
  if (page === "Exercise") {
    if (type === "Pending")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "fill_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "requested_timestamp",
          flex: 1,
          headerName: "Req. Time Stamp",
          type: "date",
        },
      ];
    if (type === "Archived")
      return [
        {
          field: "account",
          flex: 1,
          headerName: "Acc #",
        },
        {
          field: "position",
          flex: 0.7,
          headerName: "Position",
        },
        {
          field: "quantity",
          flex: 0.7,
          headerName: "Quantity",
        },
        {
          field: "timestamp",
          flex: 1,
          headerName: "Time Stamp",
          type: "date",
        },
      ];
  }
};
