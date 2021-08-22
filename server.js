const express = require('express');

const app = express();

app.use(express.json());


const connect = require('./configs/db');


const sectionController = require("./controllers/section.controller");

const authorController = require("./controllers/author.controller");

const bookController = require("./controllers/book.controller");

const checkoutController = require("./controllers/checkout.controller");


app.use("/section", sectionController);

app.use("/author", authorController);

app.use("/book", bookController);

app.use("/checkout", checkoutController);


app.listen(2347, async () => {
    
    await connect();

    console.log("listening on port 2347")

})