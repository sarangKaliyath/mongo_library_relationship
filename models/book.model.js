const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    name: String,
    body: String,
    authorIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
    ],
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
