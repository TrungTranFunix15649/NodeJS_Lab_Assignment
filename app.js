const http = require("http");

const routes = require("./routes");
//way1
// const server = http.createServer(routes);
//way 2:
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
