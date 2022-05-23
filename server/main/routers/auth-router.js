const {check} = require("express-validator");
const AuthController = require("../controllers/auth-controller");
const Router = require("express");

const authRouter = new Router();

authRouter.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 3 символов").isLength({min: 3})
], AuthController.registration);
authRouter.post('/login', AuthController.login);
authRouter.post('/logout', AuthController.logout);
authRouter.get('/refresh', AuthController.refresh);
authRouter.get('/users', AuthController.getUsers);

module.exports = authRouter;