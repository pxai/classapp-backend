const course = require('./course');

const routes = (app) => {
	app.get('/ok', (req, res) => {
    	res.send({result : 'OK'});
	});

	course(app);
};

module.exports = routes; 
