const express = require('express');

const router = express.Router();

const Author = require("../models/author.model");



router.post("/", async (req, res) => {
  const author = await Author.create(req.body);

  res.send(author);
});

router.get("/", async (req, res) => {
  const authors = await Author.find().lean().exec();

  res.send(authors);
});

module.exports = router