//load process env
require('dotenv').config();

// requiring and initing express server
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const PORT = process.env.Port;
const DB = require('./libs/mysql-connector');


server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(require('./controllers/router'));
server.use(require('./middlewares/error-handler'));

DB.query('SELECT 1', (err, success) => {
  if(err) console.log(err);

  console.log('Success: ', success);
});

server.get('/teste', (req,res,next) => {
  res.send('asaasassa')
});
server.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
