const BlogService = require("../service/blog-service");

class BlogController {
    async create (req, res) {
        try {
            const blog = await BlogService.create(req);
            res.json(blog);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll (req, res) {
        try {
            const blogs = await BlogService.getAll(req);
            return res.json(blogs);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete (req, res) {
        try {
            await BlogService.delete(req, req.params.id);
            return res.json("Блог успешно удален");
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new BlogController();