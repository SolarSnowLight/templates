import dotenv from 'dotenv';
dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
import express from "express";
import config from "config";
import logger from "./logger/logger.js";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import ExpressSwaggerGenerator from 'express-swagger-generator';
import swaggerOptions from './config/swagger.options.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const swaggerDocument = YAML.load(path.join(__dirname, 'docs', 'docs.yaml'));
const app = express();

if (config.get("doc.swagger2") === true) {
    const expressSwaggerGenerator = ExpressSwaggerGenerator(express());
    expressSwaggerGenerator(swaggerOptions(__dirname));
}

app.use(express.json({ extended: true }));
app.use(cookieParser());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = config.get('port') || 5000;

const start = () => {
    try {
        const server = app.listen(PORT, () => console.log(`Сервер запущен с портом ${PORT}`));
        logger.info({
            port: PORT,
            message: "Запуск сервера"
        });

        return server;
    } catch (e) {
        logger.error({
            message: e.message
        });

        process.exit(1);
    }
}

start();