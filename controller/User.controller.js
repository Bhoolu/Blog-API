const User = require("../model/User.model");

//create a new user
async function CreateUser(req, res) {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
}

//get or read user
async function getUser(req, res) {
  try {
    const user = await User.find({});

    res.status(201).json({
      message: "User read successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
}

//update user byId
async function updateUser(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  if (user) {
    res.status(200).json({
      messaage: "User updated successfully",
      user,
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
}

//delete user by Id
async function deleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.status(200).json({
      message: "User deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
}

module.exports = { CreateUser, getUser, updateUser, deleteUser };
