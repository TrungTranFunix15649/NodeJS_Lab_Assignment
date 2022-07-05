const http = require("http");
//way 1
// function rqListener(req, res) {

// }

//way2
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
