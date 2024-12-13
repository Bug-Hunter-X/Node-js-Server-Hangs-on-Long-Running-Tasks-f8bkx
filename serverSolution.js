const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task using async/await
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate long task
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});