//load process env
require('dotenv').config();

// requiring and initing express server
const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const auth =  require('./controllers/auth');

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.use('/auth', auth);

server.get('/teste', (req,res,next) => {
  res.send('asaasassa')
});

const PORT = process.env.Port;

server.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});