import axios from "axios";
const API_KEY = "z9n4bbiMI0psPCR2sSsCHmJ98izSmTxU";

const instance = axios.create({
  baseURL: "http://api.giphy.com/"
});

export default instance;

export const getTrending = () => {
  return instance.get("/v1/gifs/trending?api_key=" + API_KEY);
};
