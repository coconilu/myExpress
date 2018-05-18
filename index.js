const http = require('http');
const {makeStaticServer} = require('./src/static-server/index')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // 静态服务器模块
  makeStaticServer(req, res, __dirname)
});

server.on('error', (err) => {
  console.log(err)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});