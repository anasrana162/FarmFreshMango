import axios from "axios";

export default axios.create({
  baseURL: "https://farmfreshshop.com/beta2023/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": 'application/json; charset=utf-8; ',
  },
});
