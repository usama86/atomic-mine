import Axios from "axios";

const baseUrl = "http://54.147.249.123:8000";

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
};
export default api;
