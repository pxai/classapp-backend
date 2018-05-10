require('./config')
const express = require('express');
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/ok', (req, res) => {
    res.send({result : 'OK'});
});

app.get('/courses', (req, res) => {
    res.send([{name: 'Sample1', description: 'Sample1 Course'}, {name: 'Sample2', description: 'Sample2 Course'}]);
});
app.listen(PORT, () => {
    console.log(`This works in ${process.env.NODE_ENV} mode on ${PORT}`);
});

module.exports.app = app;

