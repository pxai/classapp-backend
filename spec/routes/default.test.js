const chai = require('chai');
const expect = chai.expect; 
const supertest = require('supertest');
const {ObjectID} = require('mongodb');
const app = require('../../server').app;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


describe('Simple home requests', ()=> {


  let request = null;
  let server = null;

  before(function(done){
    server = app.listen(done);
    request = supertest.agent(server);
  })

  after(function(done){
    server.close(done)
  })

    it('should return home', (done) => {
        request.get('/ok')
            .expect(200)
            .expect((res) => {
               expect(res.body.result).to.equal('OK');
            })
            .end(done);
    });
});

