import Axios from "axios";

const baseUrl = "http://35.171.58.224:8000";

const api = {
  getAmlData: async () => {
    try {
      const res = await Axios.get(`${baseUrl}/GetKYCPendingAccounts/AML`);
      const result = res.data.data;

      const newVal = result.map((data, index) => {
        return {
          id: index,
          account: `${data.ssn.slice(0, 3)}-${data.ssn.slice(
            3,
            5
          )}-${data.ssn.slice(5)}`,
          name: data.username,
          acceptReject: "",
        };
      });
      return newVal;
    } catch (err) {
      console.log(err);
    }
  },
  getCipData: async () => {
    try {
      const res = await Axios.get(`${baseUrl}/GetKYCPendingAccounts/CIP`);
      const result = res.data.data;

      const newVal = result.map((data, index) => {
        return {
          id: index,
          account: `${data.ssn.slice(0, 3)}-${data.ssn.slice(
            3,
            5
          )}-${data.ssn.slice(5)}`,
          name: data.username,
          acceptReject: "",
        };
      });
      return newVal;
    } catch (err) {
      console.log(err);
    }
  },
  approveAML: (body) => {
    return Axios.post(`${baseUrl}/ApproveAML`, body);
  },
  rejectAML: (body) => {
    return Axios.post(`${baseUrl}/RejectAML`, body);
  },
  approveCIP: (body) => {
    return Axios.post(`${baseUrl}/ApproveCIP`, body);
  },
  rejectCIP: (body) => {
    return Axios.post(`${baseUrl}/RejectCIP`, body);
  },
};

// const row = [
//   {
//     id: 0,
//     account: "123456789",
//     name: "Bella",
//     acceptReject: "",
//   },
//   {
//     id: 1,
//     account: "13452",
//     name: "Brockley",
//     acceptReject: "",
//   },
//   {
//     id: 2,
//     account: "14523",
//     name: "Brandom",
//     acceptReject: "",
//   },
// ];

export default api;
