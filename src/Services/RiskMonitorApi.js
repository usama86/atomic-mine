import Axios from "axios";

const baseUrl = "http://35.171.58.224:8000";

const api = {
  getTSEvts: (val) => {
    return Axios.get(`${baseUrl}/GetTSEvts`, {
      headers: {
        account: val,
      },
    });
  },
  getNegativeNAVs: () => {
    return Axios.get(`${baseUrl}/GetNegativeNAVs`);
  },
  addTSEvt: (body) => {
    return Axios.post(`${baseUrl}/AddTSEvt`, body);
  },
};

export default api;
