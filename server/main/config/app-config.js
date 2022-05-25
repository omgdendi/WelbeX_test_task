const swaggerUI = require("swagger-ui-express");
const specs = require("./swagger-config");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("../middleware/error-middleware");
const router = require("../routers/base-router");

module.exports = appConfig = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
    app.use(bodyParser.json())
    app.use(cors());
    app.use(express.static(path.resolve("main", 'static/images')));
    app.use(express.static(path.resolve("main", 'static/video')));
    app.use(fileUpload({}));
    app.use(cookieParser());
    app.use('/api', router)
    app.use(errorMiddleware);
    return app;
}