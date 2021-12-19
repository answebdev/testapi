const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const albums = require('./mock/albums');
const artists = require('./mock/artists');
// module.exports = () => ({
//   albums,
//   artists,
// });

server.use(middlewares);
server.use(router);

module.exports = () => ({
  albums,
  artists,
});

server.listen(port);
