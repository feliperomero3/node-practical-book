const https = require('https');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8000;
const protocol = 'https';

const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${protocol}://${hostname}:${port}/`);
});
