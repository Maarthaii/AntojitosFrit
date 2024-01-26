const express = require('express');
const path = require('path');
const router = require('../routes/routes');

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended:false}));
server.use(express.json());

server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'pug');

server.use('/', router);

module.exports = server;