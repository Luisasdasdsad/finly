const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello From Node.js');
});
server.listen(5500, () => {
  console.log('Server running on port 3000');
});
