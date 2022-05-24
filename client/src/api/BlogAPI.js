import $api from "../http/http";

export const BlogAPI = {
    async getBlogs() {
        return $api.get('blogs');
    },

    async deleteBlog(id) {
        return $api.delete(`blogs/${id}`);
    },

    async addBlog(blog) {
        return $api.post('blog', blog);
    }
}
