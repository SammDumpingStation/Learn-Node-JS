const http = require("http");
const fileSystem = require("fs");
const _ = require('lodash');

const server = http.createServer((request, response) => {
  let htmlFile = "./HTML-CSS-Practice/";
  
  const randomNumber = _.random(0, 20);
  console.log(randomNumber);
    
  response.setHeader("Content-Type", "text/html");

  switch (request.url) {
    case "/":
      htmlFile += "01-text-styles.html";
      response.statusCode = 200;
      break;
    case "/amazon":
      htmlFile += "02-amazon-button-practice.html";
      response.statusCode = 200;
      break;
    case "/company":
      htmlFile += "03-buttons-of-company-practice.html";
      response.statusCode = 200;
      break;
    case "/padding":
      htmlFile += "04-padding-margin-practice.html";
      response.statusCode = 200;
      break;
    default:
      htmlFile += "05-404.html";
      response.statusCode = 404;
      break;
  }

  fileSystem.readFile(htmlFile, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      response.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log('listening on server 3000');
});
