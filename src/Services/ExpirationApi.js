import Axios from "axios";

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
        timestamp: data.autoliq_request_timestamp.split("T")[0],
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
};

export default api;
