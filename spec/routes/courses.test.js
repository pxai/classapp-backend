const chai = require('chai');
const expect = chai.expect; 
const supertest = require('supertest');
const {ObjectID} = require('mongodb');
const app = require('../../server').app;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


describe('API Course requests', ()=> {


  let request = null;
  let server = null;

  before(function(done){
    server = app.listen(done);
    request = supertest.agent(server);
  })

  after(function(done){
    server.close(done)
  })

    it('should return courses json', (done) => {
        request.get('/courses')
            .expect(200)
            .expect((res) => {
               expect(res.body).to.be.an('array');
            })
            .end(done);
    });

});

