const chai = require('chai');
const expect = chai.expect;
const { Course } = require('../../model/course.js');

describe('Course model',()=>{
	it('Should exist',()=>{
		expect(Course).to.exist;
	});
});
