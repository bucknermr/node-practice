const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const obj = {
      firstName: 'John',
      lastName: 'Doe'
    };

    res.end(JSON.stringify(obj));

  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }


}).listen(1337, '127.0.0.1');
