var http = require('http');

var server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('this is updated johnhgoode.com');
});

server.listen(2870);
console.log('Server running on 2870');
