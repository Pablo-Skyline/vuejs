import http from "../http-common";

class UsersService {
    create(data) {
        return http.post("/users", data);
    }

    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

}

export default new UsersService();