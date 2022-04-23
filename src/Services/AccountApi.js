import Axios from "axios";

const baseUrl = "http://44.194.15.240:8000";

const api = {
  getApprovedAccount: async () => {
    try {
      let response = await Axios.get(`${baseUrl}/GetApprovedAccounts`);
      return response;
    } catch (err) {
      return err.response;
    }
  },
  getBalance: async (val) => {
    try {
      let response = await Axios.get(`${baseUrl}/GetBalances`, {
        headers: {
          account: val.ssn,
        },
      });
      return response;
    } catch (err) {
      return err.response;
    }
  },
  getTags: async (val) => {
    try {
      let response = await Axios.get(`${baseUrl}/GetTags`, {
        headers: {
          account: val.ssn,
        },
      });
      return response;
    } catch (err) {
      return err.response;
    }
  },
  addNote: (body) => {
    return Axios.post(`${baseUrl}/AddNote`, body);
  },
  getNotes: (val) => {
    return Axios.get(`${baseUrl}/GetNotes`, {
      headers: {
        account: val.ssn,
      },
    });
  },
  ViewPositions: async (val) => {
    let data = await Axios.get(`${baseUrl}/ViewPositions`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = data.data.data.stocks.concat(data.data.data.options);
    return finalObj;
  },
  getBidAsk: (val) => {
    return Axios.get(`${baseUrl}/GetBidAsk/${val}`);
  },
  getOrdersFilled: async (val) => {
    let data = await Axios.get(`${baseUrl}/GetOrders/filled`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = data.data.data.stocks.concat(data.data.data.options);
    return finalObj;
  },
  getOrdersPending: async (val) => {
    let data = await Axios.get(`${baseUrl}/GetOrders/pending`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = data.data.data.stocks.concat(data.data.data.options);
    return finalObj;
  },
  getOrdersCancelled: async (val) => {
    let data = await Axios.get(`${baseUrl}/GetOrders/canceled`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = data.data.data.stocks.concat(data.data.data.options);
    return finalObj;
  },
  getOrdersRejected: async (val) => {
    let data = await Axios.get(`${baseUrl}/GetOrders/rejected`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = data.data.data.stocks.concat(data.data.data.options);
    return finalObj;
  },
  cancelOrder: (body) => {
    return Axios.post(`${baseUrl}/CancelOrder`, body);
  },
  getGFVs: (val) => {
    return Axios.get(`${baseUrl}/GetGFVs`, {
      headers: {
        account: val.ssn,
      },
    });
  },
  applyRestriction: (body) => {
    return Axios.post(`${baseUrl}/ApplyRestriction`, body);
  },
  liftRestriction: (body) => {
    return Axios.post(`${baseUrl}/LiftRestriction`, body);
  },
  getRestrictions: (val) => {
    return Axios.get(`${baseUrl}/GetRestrictions`, {
      headers: {
        account: val.ssn,
      },
    });
  },
  getFunds: async (val) => {
    let getDeposit = await Axios.get(`${baseUrl}/GetDeposits`, {
      headers: {
        account: val.ssn,
      },
    });

    let deposit =
      getDeposit.data.data && getDeposit.data.data.length > 0
        ? getDeposit.data.data.map((d) => ({ ...d, type: "deposit" }))
        : [];

    let getWithDrawl = await Axios.get(`${baseUrl}/GetWithdrawals`, {
      headers: {
        account: val.ssn,
      },
    });
    let withDrawl =
      getWithDrawl.data.data && getWithDrawl.data.data.length > 0
        ? getWithDrawl.data.data.map((d) => (d = { ...d, type: "withdrawal" }))
        : [];
    let finalObj = deposit.concat(withDrawl);
    return finalObj;
  },
  getBankDetail: (val) => {
    return Axios.get(`${baseUrl}/GetBankAccts`, {
      headers: {
        account: val.ssn,
      },
    });
  },
  getCashLedger: async (val) => {
    let filledOrders = await Axios.get(`${baseUrl}/GetOrders/filled`, {
      headers: {
        account: val.ssn,
      },
    });
    let finalObj = filledOrders.data.data.stocks.concat(
      filledOrders.data.data.options
    );
    let totalAmount = 0;
    finalObj = finalObj.map((d, ind) => {
      if (ind === 0) {
        totalAmount = Number(d.avg_filled_price) * d.qty;
        d = { ...d, totalBalance: totalAmount.toFixed(2) };
      } else {
        if (d.side.charAt(0) === "B")
          totalAmount += Number(d.avg_filled_price) * d.qty;
        else totalAmount -= Number(d.avg_filled_price) * d.qty;
        d = { ...d, totalBalance: totalAmount.toFixed(2) };
      }
      return d;
    });

    // let getSettled = await Axios.get(`${baseUrl}/GetOrders/settled`, {
    //   headers: {
    //     account: val.ssn,
    //   },
    // });
    // let getWithdrawals = await Axios.get(`${baseUrl}/GetWithdrawals`, {
    //   headers: {
    //     account: val.ssn,
    //   },
    // });
    // let joinSettledWithdrawls = getSettled.data.data.concat(
    //   getWithdrawals.data.data
    // );

    // let finalArray = joinSettledWithdrawls.concat(finalObj);

    return finalObj;
  },
  freezeBankAcct: (body) => {
    return Axios.post(`${baseUrl}/FreezeBankAcct`, body);
  },
  unfreezeBankAcct: (body) => {
    return Axios.post(`${baseUrl}/UnfreezeBankAcct`, body);
  },
  UnLinkBank: (body) => {
    return Axios.post(`${baseUrl}/UnlinkBank`, body);
  },
  gtOptionsApprovalInfo: (val) => {
    return Axios.get(`${baseUrl}/GetOptionsApprovalInfo`, {
      headers: {
        account: val.ssn,
      },
    });
  },
};
//http://44.194.15.240:8000/GetDeposits/settled    GetOptionsApprovalInfo
export default api;
