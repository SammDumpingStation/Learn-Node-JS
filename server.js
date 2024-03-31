const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello Niggas</p>");
  res.write("<button>Click Me!</button>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("server was requested");
});
