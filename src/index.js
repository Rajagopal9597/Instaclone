
const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/insta_route");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use('/', router);

const url = process.env.DATABASE_URL;

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
    .catch((e) => { 
        console.log(e); 
    });

app.listen(5000, () => { console.log(`Server is up and running at port 5000`); })


