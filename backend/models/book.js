const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  genre: String,
  subgenre: String,
  language: String,
  description: String,
  edition: String,
  country: String,
  translation: String,
  yearOfTranslation: String,
  coverArtist: String,
  prequel: String,
  sequel: String,
  pages: String,
  awards: String,
  publicationDate: {
    type: date,
    default: Date.now,
  },
});

const Library = mongoose.model("mean", librarySchema);

module.exports = Library;
