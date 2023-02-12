const express = require('express');

require('./services/db');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

//Routes
const postRouter = require("./routes/postRoutes");

app.use("/posts", postRouter);

// Example route
app.get('/', (req, res) => {
    res.send('Initial Setup');
});

module.exports = app;
