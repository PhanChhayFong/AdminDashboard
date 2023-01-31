// import http from "../api/http-common";
import axios from "axios";
const basePath = `http://localhost:5000/api/v1/`;
const token = localStorage.getItem("token");
const item = token ? JSON.parse(token) : "";
const config = (e) =>
  axios.create({
    baseURL: basePath,
    headers: {
      "Content-type": e ? "application/json" : "multipart/form-data",
      Authorization: "Bearer " + item.token,
    },
  });
class ApiService {
  getAll(tb) {
    return config(true).get(`/${tb}`);
  }
  get(tb, id) {
    return config(true).get(`/${tb}/${id}`);
  }
  getLastOrder(tb) {
    return config(true).get(`/${tb}/get/maxOrder`);
  }
  updateOrder(tb, Cid, Nid) {
    return config(true).put(`/${tb}/update/Order/${Cid}/${Nid}`);
  }
  create(tb, data) {
    return config(false).post(`${tb}`, data);
  }
  updateEnable(tb, id) {
    return config(true).put(`/${tb}/enable/${id}`);
  }
  updateActive(tb, id, data) {
    return config(true).put(`/${tb}/active/${id}`,data);
  }
  update(tb, id, data) {
    return config(false).put(`${tb}/${id}`, data);
  }
  delete(tb, id) {
    return config(true).delete(`/${tb}/${id}`);
  }
  deleteAll(tb) {
    return config(true).delete(`/${tb}`);
  }
  findByTitle(tb, title) {
    return config(true).get(`/${tb}?title=${title}`);
  }
}

export default new ApiService();
