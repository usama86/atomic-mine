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
      let response = await Axios.get(`${baseUrl}/GetBalsances`, {
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
      getWithDrawl.data.data && getWithDrawl.data.data.length > 0
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
    let finalObj = deposit.data.data.concat(withDrawl.data.data);
    return finalObj;
  },
};
export default api;
