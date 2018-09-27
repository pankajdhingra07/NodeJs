const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productRouter = require('./Service/Products/routers/productRouter');

const mongoConn = require('./Service//config//Mongo//MongoConnection')();

let app = express();
// serve files from the public directory
//app.use(express.static('public')); this will make your index page default
// app.use(express.static('public', {index: 'index2.html'}))//this will make index2 page default 

app.use(express.static('public'))

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve the homepage
//  app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index2.html');
//     //res.sendfile('index2.html', { root: __dirname + "/index2.html" } );
//     //res.status(200).sendFile('index2.html', { root: path.join(__dirname, '../public/') });
//  });
app.use('/', productRouter);
//app.use('/value', productRouter);

// Mount the APIs specific to version
// app.use('/products', productRouter);
app.listen(3000, () => console.log('App listening on port 3000!'));
module.exports = app;