import express from "express";
import ExpressSwaggerGenerator from 'express-swagger-generator';
import swaggerOptions from './config/swagger.options.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
import jsonToYaml from 'json2yaml';
import fs from 'fs';
import swaggerConverter from 'swagger2openapi';

const expressSwaggerGenerator = ExpressSwaggerGenerator(express());
const swaggerDoc = expressSwaggerGenerator(swaggerOptions(__dirname));

// Удаление пустого required
const removeEmptyRequired = (rootObj) => {
    for (const key in rootObj) {
        if (rootObj.hasOwnProperty(key) && key === 'required' && rootObj[key].length === 0) {
            delete rootObj[key];
        }

        if (typeof rootObj[key] === 'object') {
            removeEmptyRequired(rootObj[key]);
        }
    }
};

removeEmptyRequired(swaggerDoc);

fs.writeFileSync('./docs/docs_swagger2.yaml', jsonToYaml.stringify(swaggerDoc));
swaggerConverter.convertObj(swaggerDoc, {}, (err, options) => {
    if (err) {
        console.error(err);
    } else {
        const output = jsonToYaml.stringify(options.openapi);
        fs.writeFileSync('./docs/docs.yaml', output);
        process.exit(0);
    }
});