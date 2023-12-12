const Post = require("../model/Post.model");

//create a new post
async function CreatePost(req, res) {
  try {
    const post = new Post(req.body);
    await post.save();

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.log(error);
  }
}

//get by title
async function getBytitle(req, res) {
  try {
    const post = await Post.findOne({ title: req.body.title })
      .populate("author")
      .exec();

    if (post) {
      res.status(200).json({
        message: "Post is found",
        post: post,
      });
    } else {
      res.status(404).json({
        message: "post not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

//get a post
async function getPost(req, res) {
  try {
    const post = await Post.find({});

    res.status(201).json({
      message: "Post read successfully",
      post,
    });
  } catch (error) {
    console.log(error);
  }
}

//update a post
async function updatePost(req, res) {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  if (post) {
    res.status(200).json({
      messaage: "Post updated successfully",
      post,
    });
  } else {
    res.status(404).json({
      message: "Post not found",
    });
  }
}

//delete a post\
async function deletePost(req, res) {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (post) {
    res.status(200).json({
      message: "Post deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Could'nt find post",
    });
  }
}

module.exports = { CreatePost, getBytitle, getPost, updatePost, deletePost };
