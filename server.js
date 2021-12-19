const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.js');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const albums = require('./albums');
const artists = require('./artists');
module.exports = () => ({
  albums,
  artists,
});

server.use(middlewares);
server.use(router);

server.listen(port);
