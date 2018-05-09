const chai = require('chai');
const expect = chai.expect; 
const request = require('supertest');
const {ObjectID} = require('mongodb');
const app = require('../../server').app;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


describe('Simple home requests', ()=> {

    it('should return home', (done) => {
        request(app).get('/ok')
            .expect(200)
            .expect((res) => {
               expect(res.body.result).to.equal('OK');
            })
            .end(done);
    });
});

