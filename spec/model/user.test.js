const { User } = require('../../model/user.js');
const chai = require('chai');
const expect = chai.expect;

describe('User model',()=> {
	it('Should exist a model', ()=> {
		expect(User).to.exist;
	});
});
