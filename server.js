const req = require("/node_modules/express/lib/request");

const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/books", false);

var data = {
  id: 4,
  name: req.body.name,
  author: req.body.author,
};

var json = JSON.stringify(data);
// var header = "Bearer " + token;
// console.log(header);

xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Authorization-Type", "gctlToken");
// xhr.setRequestHeader("Authorization", header);

xhr.send(json);
