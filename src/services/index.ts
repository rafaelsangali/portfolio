import axios from "axios";

const requestApi = axios.create({
  baseURL: "https://api.github.com/users/rafaelsangali/repos",
});

export default requestApi;
