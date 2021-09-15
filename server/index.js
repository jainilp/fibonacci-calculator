const keys = require('./keys');

// Express App

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    post: keys.pgPort
});

pgClient.on("connect", (client) => {
    client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch((err) => console.log(err));
});