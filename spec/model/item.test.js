const chai = require('chai');
const expect = chai.expect;
const { Item } = require('../../model/item');

describe('Item model', ()=> {
	it('should exist',()=>{
		expect(Item).to.exist;
	});
});
