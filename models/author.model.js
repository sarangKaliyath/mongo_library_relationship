const mongoose = require('mongoose');



const authorSchema = mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);


const Author = mongoose.model("author", authorSchema);


module.exports = Author;