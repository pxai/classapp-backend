require('./config')
const express = require('express');
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

routes(app);

app.listen(PORT, () => {
    console.log(`This works in ${process.env.NODE_ENV} mode on ${PORT}`);
});

module.exports.app = app;

