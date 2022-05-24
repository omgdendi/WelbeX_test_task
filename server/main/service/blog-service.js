const tokenService = require("./token-service");
const BlogDTO = require("../dtos/blog-dto");
const BlogError = require("../exceptions/blog-error");
const {BlogModel} = require("../models/models");
const uuid = require('uuid');
const path = require('path');

class BlogService {
    async create(req) {
        const token = req.headers.authorization.split(' ')[1];
        const body = req.body;
        const message = body.message;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const userData = tokenService.validateAccessToken(token);
        const blog = await BlogModel.create({message, userId: userData.id, img: fileName});
        const blogDto = new BlogDTO(blog);
        return blogDto;
    }

    async getAll(req) {
        const blogs = await BlogModel.findAll();
        const blogsDto = blogs.map(blog => new BlogDTO(blog));
        return blogsDto;
    }

    async delete(req, id) {
        if (!id) {
            throw new Error('Не указан ID');
        }
        const token = req.headers.authorization.split(' ')[1];
        const userData = tokenService.validateAccessToken(token);
        const userId = userData.id;

        const blog = await BlogModel.findOne({where: {id}});

        if (userId !== blog.userId) {
            throw BlogError.ChangingNotOwnedBlog();
        }
        await BlogModel.destroy({where: {id}});
    }

    async update(req, id) {
        const token = req.headers.authorization.split(' ')[1];
        const body = req.body;
        const message = body.message;
        const userData = tokenService.validateAccessToken(token);
        const userId = userData.id;
        const blog = await BlogModel.findOne({where: {id}});
        if (userId !== blog.userId) {
            throw BlogError.ChangingNotOwnedBlog();
        }
        await BlogModel.update({message}, {where: {id}});
        const blogDto = new BlogDTO(blog);
        return blogDto;
    }

}

module.exports = new BlogService();