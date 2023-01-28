import http from "../api/http-common";

class SliderService {
  getAll() {
    return http.get("/sliders");
  }

  get(id) {
    return http.get(`/sliders/${id}`);
  }
  getLastOrder() {
    return http.get(`/sliders/get/maxOrder`);
  }
  updateOrder(Cid,Nid) {
    return http.put(`/sliders/update/Order/${Cid}/${Nid}`);
  }
  create(data) {
    return http.post("/sliders", data);
  }
  updateEnable(id) {
    return http.put(`/sliders/enable/${id}`);
  }
  update(id, data) {
    return http.put(`/sliders/${id}`, data);
  }

  delete(id) {
    return http.delete(`/sliders/${id}`);
  }

  deleteAll() {
    return http.delete(`/sliders`);
  }

  findByTitle(title) {
    return http.get(`/sliders?title=${title}`);
  }
}

export default new SliderService();
