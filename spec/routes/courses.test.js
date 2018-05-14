const chai = require('chai');
const expect = chai.expect; 
const supertest = require('supertest');
const {ObjectID} = require('mongodb');
const app = require('../../server').app;
const bodyParser = require('body-parser')
const Course  = require('../../model/course');

const courses = [
	{name: 'Sample1', description: 'Sample1 Course'}, 
	{name: 'Sample2', description: 'Sample2 Course'}
];

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

beforeEach((done) => {
	Course.remove({})
        .then(() => {
            return Course.insertMany(courses);
        });

	done();
});


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
        request.get('/course')
            .expect(200)
            .expect((res) => {
               expect(res.body).to.be.an('array');
            })
            .end(done);
  });

	it('should return one course', (done) => {
		request.get('/course/1')
			.expect(200)
			.expect((res) => {
				expect(res.body).to.be.an('object');	
			})
				.end(done);
	});
});

