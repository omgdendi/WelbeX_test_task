require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const blogRouter = require('./routers/blog-router');
const authRouter = require('./routers/auth-router');
const errorMiddleware = require('./middleware/error-middleware');
const bodyParser = require('body-parser');
const sequelize = require("./db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const PORT = process.env.PORT || 8080;
const app = express();

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Blogs API",
            version: "1.0.0",
            description: "Blogs API with jwt for WelbeX test task",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        servers: [
            {
                url: "http://localhost:8080/api/",
            },
        ],
    },
    apis: ["main/routers/*.js"],
};

const specs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(bodyParser.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use('/api', blogRouter);
app.use('/api/auth', authRouter);
app.use(errorMiddleware);


const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT " + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();
