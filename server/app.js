const express = require('express')
const path = require('path')
const mssql = require('mssql')
const fs = require('fs')
const dotenv = require('dotenv');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');

const app = express()

let result = dotenv.config();
if (result.error) {
    throw result.error;
}

app.use(cors());
app.options('*', cors())

const config = {
    port: parseInt(process.env.DB_PORT),
    server: process.env.DB_SERVER,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        "requestTimeout": 300000,
        useUTC: true,
        encrypt: true,
        enableArithAbot: true,
        trustedConnection: true,
        trustServerCertificate: true,
    },
}


const pool = mssql.connect(config)

if (pool) {
    console.log(`connected to database sql server`)
} else {
    console.log(`not connected to database`)
}


const opts = {
    errorEventName: 'error',
    logDirectory: './logs',
    fileNamePattern: '<DATE>.log',
    dateFormat: 'YYYY-MM-DD'
};
const log = require('simple-node-logger').createRollingFileLogger(opts);

global.db = mssql;
global.config = config;
global.request = request;

const { getWelcomePage, getImageFromBase64,
        getDetectionObjects, getObjectAnalysis } = require('./files/index')

app.use(bodyParser.json({ limit: "2048mb" }));
app.use(bodyParser.urlencoded({ limit: "2048mb", extended: true }));
app.use(bodyParser.json());

app.get('/home', getWelcomePage);
// app.get('/Image', getImageFromBase64);
// app.get('/objects', getDetectionObjects);
// app.get('/ObjectAnalysis', getObjectAnalysis);

app.use(express.static('public'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
})

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})