import axios from "axios";

const token = localStorage.getItem("token") || "";
axios.defaults.headers["authorization"] = token;
axios.defaults.baseURL = "http://localhost:4200";

export default axios;
