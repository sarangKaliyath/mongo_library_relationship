const express = require('express');

const router = express.Router();

const Book = require("../models/book.model");

const Checkout = require("../models/checkout.model");



router.post("/", async (req, res) => {
  const book = await Book.create(req.body);

  res.send(book);
});

router.get("/", async (req, res) => {
  const books = await Book.find()
    .populate("authorIds")
    .populate("sectionId")
    .lean()
    .exec();

  res.send(books);
});

router.delete("/:id", async (req, res) => {
  // const details = await Checkout.create(req.body);

  const book = await Book.findByIdAndDelete(req.params.id, req.body);

  const checkout = await Checkout.create(req.body);

  res.send(book);
});



module.exports = router;