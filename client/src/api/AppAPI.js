import $api from "../http/http";

export const AppAPI = {
    async getUser(id) {
        return $api.get(`users/${id}`);
    },
}