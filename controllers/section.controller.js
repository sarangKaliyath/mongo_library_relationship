const express = require('express');

const router = express.Router();

const Section = require('../models/section.model')


router.post("/", async (req, res) => {
  const section = await Section.create(req.body);
  res.send(section);
});

router.get("/", async (req, res) => {
  const sections = await Section.find().lean().exec();
  res.send(sections);
});


module.exports = router;