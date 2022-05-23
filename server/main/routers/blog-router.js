const Router = require("express");
const BlogController = require("../controllers/blog-controller");
const authMiddleware = require("../middleware/auth-middleware")

const blogRouter = new Router();

blogRouter.post('/blog', authMiddleware, BlogController.create);
blogRouter.get('/blogs', authMiddleware, BlogController.getAll);
blogRouter.delete('/blogs/:id', authMiddleware, BlogController.delete);

module.exports = blogRouter;