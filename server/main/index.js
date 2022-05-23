require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const blogRouter = require('./routers/blog-router');
const authRouter = require('./routers/auth-router');
const errorMiddleware = require('./middleware/error-middleware');
const bodyParser = require('body-parser');
const sequelize = require("./db");

const PORT = process.env.PORT || 8080;
const app = express();

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
