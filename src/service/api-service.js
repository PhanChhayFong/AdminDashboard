import http from "../api/http-common";
import axios from "axios";
const basePath=`http://localhost:5000/api/v1/`
class ApiService {
  getAll(tb) {
    return http.get(`/${tb}`);
  }
  get(tb, id) {
    return http.get(`/${tb}/${id}`);
  }
  getLastOrder(tb) {
    return http.get(`/${tb}/get/maxOrder`);
  }
  updateOrder(tb, Cid, Nid) {
    return http.put(`/${tb}/update/Order/${Cid}/${Nid}`);
  }
  create(tb, data) {
    axios.post(`${basePath}${tb}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  updateEnable(tb, id) {
    return http.put(`/${tb}/enable/${id}`);
  }
  update(tb, id, data) {
    axios.put(`${basePath}${tb}/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  delete(tb, id) {
    return http.delete(`/${tb}/${id}`);
  }
  deleteAll(tb) {
    return http.delete(`/${tb}`);
  }

  findByTitle(tb, title) {
    return http.get(`/${tb}?title=${title}`);
  }
}

export default new ApiService();
