const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
