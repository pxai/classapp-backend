const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
mongoose.connect(process.env.MONGODB_URI);

const CourseSchema = new mongoose.Schema({
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
  },
	createdAt: {
		type: Date,
		default: Date.now
	}
});


const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
