const express = require("express");
const PostRouter = require("./router/projects");
const ActionRouter = require("./router/actions");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/posts", PostRouter);
server.use("/api/actions", ActionRouter);

// create server listener
server.listen(7500, () => {
  console.log("server is up and running on port 7500!");
});
