const express = require("express");

// express app
const app = express();

//listen for request
app.listen(3000);

app.get("/", (request, response) => {
  response.sendFile('./HTML-CSS-Practice/01-text-styles.html', { root: __dirname})
});

app.get("/amazon", (request, response) => {
  response.sendFile("./HTML-CSS-Practice/02-amazon-button-practice.html", {
    root: __dirname,
  });
});

app.get('/company', (request, response) => {
  response.sendFile('./HTML-CSS-Practice/03-buttons-of-company-practice.html', {root: __dirname});
})
