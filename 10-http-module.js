const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  if(req.url === '/'){
    res.end("hello !");
  }
  else if(req.url === '/about'){
    res.end('This is our about page')
  }
  else{
    res.end(`
    <h1>Oops !</h1>
    <p>We cannot find the page you are looking for !</p>
    <a href="/" >back</a>
    `)
  }
});

server.listen(8080);
