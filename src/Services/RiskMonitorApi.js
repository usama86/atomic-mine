import Axios from "axios";

const baseUrl = "http://35.171.58.224:8000";

const api = {
  getTSEvts: () => {
    return Axios.get(`${baseUrl}/GetTSEvts`);
  },
  getNegativeNAVs: () => {
    return Axios.get(`${baseUrl}/GetNegativeNAVs`);
  },
  addTSEvt: (body) => {
    return Axios.post(`${baseUrl}/AddTSEvt`, body);
  },
};

export default api;
