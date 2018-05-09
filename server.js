require('./config')
const express = require('express');
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');
const PORT = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//hbs.registerHelper('each');


app.get('/', (req, res) => {
    res.send({result : 'OK'});
});

app.listen(PORT, () => {
    console.log(`This works in ${process.env.NODE_ENV} mode on ${PORT}`);
});

module.exports.app = app;

