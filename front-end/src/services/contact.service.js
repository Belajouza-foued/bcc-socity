import http from "../http-api";

class ContactDataService {
  getAll() {
    return http.get("/contacts");
  }

  get(id) {
    return http.get(`/contacts/${id}`);
  }

  create(data) {
    return http.post("/contacts", data);
  }

  findByTitle(userName) {
    return http.get(`/contacts?userName=${userName}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/contacts/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/produits/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/contacts`);
  }
}
export default new ContactDataService();