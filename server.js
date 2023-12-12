//IF YOU DON'T PRACTICE YOU CAN NEVER KNOW

const express = require("express");
const mongoose = require("mongoose");
const {
  CreateUser,
  getUser,
  updateUser,
  deleteUser,
} = require("./controller/User.controller");
const {
  CreatePost,
  getBytitle,
  getPost,
  updatePost,
  deletePost,
} = require("./controller/Post.controller");
const server = express();
const PORT = 4000;

// so i can access req.body
server.use(express.json());

//endpoint for user
server.post("/user", CreateUser);

//get user
server.get("/user", getUser);

//update user
server.put("/user/:id", updateUser);

//delete user
server.delete("/user/:id", deleteUser);

//endpoint for post
server.post("/post", CreatePost);

//get post
server.get("/post/title", getBytitle);

//get post
server.get("/post", getPost);

//update post
server.put("/post/:id", updatePost);

//delete post
server.delete("/post/:id", deletePost);
server.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

async function main() {
  await mongoose.connect("mongodb://localhost/blog");
  console.log("DB connected");
}

server.listen(PORT, () => {
  main().catch((err) => console.log(err));
  console.log("Server listening on port 4000");
});
