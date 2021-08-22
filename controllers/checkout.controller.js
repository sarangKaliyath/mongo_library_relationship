const express = require('express');

const router = express.Router();

const Checkout = require("../models/checkout.model");

const Book = require("../models/book.model");

router.get("/", async (req, res) => {
  const checkout = await Checkout.find().lean().exec();

  res.send(checkout);
});

router.delete("/:id", async (req, res) => {
  
  const checkout = await Checkout.findByIdAndDelete(req.params.id, req.body);

  const book = await Book.create(req.body);

  res.send(checkout);
});


module.exports = router;
