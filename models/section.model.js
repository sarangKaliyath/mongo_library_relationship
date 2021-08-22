const mongoose= require('mongoose');

const sectionSchema = mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);


const Section = mongoose.model("section", sectionSchema);


module.exports = Section;
