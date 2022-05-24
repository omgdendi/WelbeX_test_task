import $api from "../http/http";

export const BlogAPI = {
    async getBlogs() {
        return $api.get('blogs');
    }
}
