const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('home.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const url = req.url;
  console.log(url);

  if(url=='/home'){
  res.end(home);
  }
  else if (url=='/about')
  {
    res.end(about);
  }
  else if (url=='/services')
  {
    res.end(services);
  }
  else{
    res.end(home);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

