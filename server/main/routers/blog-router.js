const Router = require("express");
const BlogController = require("../controllers/blog-controller");
const authMiddleware = require("../middleware/auth-middleware")
const {check} = require("express-validator");

const blogRouter = new Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - message
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the book
 *         message:
 *           type: string
 *           description: The blog message
 *         userId:
 *           type: int
 *           description: Ref to user
 *       example:
 *         id: 1
 *         message: hello world!
 *         userId: 1
 */

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: The blogs managing API
 */

/**
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         description: The blog was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       500:
 *         description: Some server error
 */

blogRouter.post('/blog', authMiddleware, BlogController.create);

/**
 * @swagger
 * /blogs:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns the list of all the blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: The list of the blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 */
blogRouter.get('/blogs', authMiddleware, BlogController.getAll);


/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Remove the blog by id
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *
 *     responses:
 *       200:
 *         description: The blog was deleted
 *       404:
 *         description: The blog was not found
 */

blogRouter.delete('/blogs/:id', authMiddleware, BlogController.delete);


/**
 * @swagger
 * /books/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update the blog by the id
 *    tags: [Blogs]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The blog id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Blog'
 *    responses:
 *      200:
 *        description: The blog was updated
 *      404:
 *        description: The blog was not found
 *      500:
 *        description: Some error happened
 */

blogRouter.put('/blogs/:id', authMiddleware, BlogController.update);

module.exports = blogRouter;