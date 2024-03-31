const http = require("http");
const fileSystem = require("fs");

const server = http.createServer((request, result) => {
  let htmlFile = "./HTML-CSS-Practice/";
  result.setHeader("Content-Type", "text/html/css");

  switch (request.url) {
    case "/":
      htmlFile += "01-text-styles.html";
      break;
    case "/amazon":
      htmlFile += "02-amazon-button-practice.html";
      break;
    case "/company":
      htmlFile += "03-buttons-of-company-practice.html";
      break;
    case "/padding":
      htmlFile += "04-padding-margin-practice.html";
      break;
    default:
      htmlFile += "05-404.html";
      break;
  }

  fileSystem.readFile(htmlFile, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      result.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log('listening on server 3000');
});
