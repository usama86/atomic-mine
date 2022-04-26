import Axios from "axios";

const baseUrl = "http://35.171.58.224:8000";

const api = {
  getAmlData: () => {
    return row;
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

const row = [
  {
    id: 0,
    account: "12534",
    name: "Bella",
    acceptReject: "true",
  },
  {
    id: 1,
    account: "13452",
    name: "Brockley",
    acceptReject: "false",
  },
  {
    id: 2,
    account: "14523",
    name: "Brandom",
    acceptReject: "true",
  },
];

export default api;
