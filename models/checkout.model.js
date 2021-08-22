const mongoose = require('mongoose');


const checkoutSchema = mongoose.Schema(
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
    timeStamp: true,
  }
);


const Checkout = mongoose.model("checkout", checkoutSchema);

module.exports = Checkout;