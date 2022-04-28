import Axios from "axios";
import { getObjectKeyCombinedArray } from "./../helpers/utils";

const baseUrl = "http://35.171.58.224:8000";

const api = {
  fetchLiquidationPending: async () => {
    let res = await Axios.get(`${baseUrl}/GetAutoLiqs/pending`);
    const result = res.data.data;
    const newVal = result.map((data, index) => {
      return {
        id: index,
        account: data.account,
        ticker: data.ticker,
        quantity: data.qty,
        timestamp: data.autoliq_request_timestamp?.split("T")[0],
      };
    });
    return newVal;
  },
  fetchLiquidationArchive: async () => {
    let res = await Axios.get(`${baseUrl}/GetAutoLiqs/historical`);
    const result = res.data.data;
    const newVal = result.map((data, index) => {
      return {
        id: index,
        account: data.account,
        ticker: data.ticker,
        quantity: data.qty,
        fill_price: data.avg_filled_price,
        timestamp: data.created_on.split("T")[0],
      };
    });
    return newVal;
  },
  closeLiquidation: async (body) => {
    return Axios.post(`${baseUrl}/ClosePosition`, body);
  },
  getAutoExercisesPending: async () => {
    let res = await Axios.get(`${baseUrl}/GetAutoExercises/pending`);
    const result = res.data.data;
    let newVal = getObjectKeyCombinedArray(result);
    return newVal;
  },
  getAutoExercisesComplete: async () => {
    let res = await Axios.get(`${baseUrl}/GetAutoExercises/complete`);
    const result = res.data.data;
    let newVal = getObjectKeyCombinedArray(result);
    return newVal;
  },

  getDNE: async () => {
    let res = await Axios.get(`${baseUrl}/GetDNEs`);
    const result = res.data.data;
    return result;
  },
  getEarlyExercisesPending: async () => {
    let res = await Axios.get(`${baseUrl}/GetEarlyExercises/pending`);
    const result = res.data.data;
    let newVal = getObjectKeyCombinedArray(result);
    return newVal;
  },
  getEarlyExercisesComplete: async () => {
    let res = await Axios.get(`${baseUrl}/GetEarlyExercises/complete`);
    const result = res.data.data;
    let newVal = getObjectKeyCombinedArray(result);
    return newVal;
  },
  setToDNE: async (body) => {
    return Axios.post(`${baseUrl}/SetToDNE`, body);
  },
  requestExercise: async (body) => {
    return Axios.post(`${baseUrl}/RequestExercise`, body);
  },

  //http://35.171.58.224:8000/GetAutoExercises/pending
  // /GetEarlyExercises/pending
  // /GetEarlyExercises/complete
};

export default api;
