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
};
export default api;
