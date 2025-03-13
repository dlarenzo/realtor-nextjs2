const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingsSchema = new Schema({
  address: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  bedrooms: {
    type: Number,
    required: false,
  },
  bathrooms: {
    type: Number,
    required: false,
  },
  sqft: {
    type: Number,
    required: false,
  },
  levels: {
    type: Number,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  cityState: {
    type: String,
    required: false,
  },
});

//  Export the model
module.exports = mongoose.model("Listings", ListingsSchema);
