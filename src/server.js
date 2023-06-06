import http from "node:http";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response.end("Users list");
  }

  if (method === "POST" && url === "/users") {
    return response.end("Creating new user");
  }

  return response.end("Hello world!");
});

server.listen(3333);
