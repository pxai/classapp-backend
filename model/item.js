const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    unique: true,
  },
  description: {
    type: String,
    require: true,
    minlength: 6
  }
});


const Item = mongoose.model('Item', ItemSchema);

module.exports = {Item}
