import http from "../api/http-common";

class ProductService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }
  create(data) {
    return http.post("/products", data);
  }
  updateEnable(id) {
    return http.put(`/products/enable/${id}`);
  }
  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
}

export default new ProductService();
