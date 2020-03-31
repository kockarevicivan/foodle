import axios from "axios";

const token = localStorage.getItem("token") || "";
axios.defaults.headers["authorization"] = `Bearer ${token}`;
axios.defaults.baseURL = "http://localhost:4200";

export default axios;
