import Axios from "axios";

const baseUrl = "http://44.194.15.240:8000";

const api = {
  getApprovedAccount: () => {
    return Axios.get(`${baseUrl}/GetApprovedAccounts`);
  },
  getBalance: (val) => {
    return Axios.get(`${baseUrl}/GetBalances`, {
      headers: {
        account: val.ssn,
      },
    });
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
};
export default api;
