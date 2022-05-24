const Router = require('express');
const blogRouter = require("../routers/blog-router");
const authRouter = require("../routers/auth-router");

const router = new Router();

router.use("/", blogRouter);
router.use('/auth', authRouter);

module.exports = router;