const User = require("../model/User.Model");

exports.getUsers = async (req, res) => {
  console.log(req.user);
  try {
    const users = await User.find().exec();
    if (users.length > 0) {
      return res.status(200).json({
        status: "Success",
        content: users,
      });
    }
    return res.status(204).json({
      status: "Success",
      content: "No users found",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      content: err,
    });
  }
};
