const User = require("../model/User.Model");
const Todo = require("../model/Todo.Model");

exports.createTask = async (req, res) => {
  console.log(req.user._id);
  const { name, id } = req.body;

  try {
    // Query the user currently login to get the field tasklist
    const getCurrentUser = await User.findOne({ _id: req.user._id });
    console.log(getCurrentUser);
    const newTask = new Todo({
      name: name,
    });
    // Saving task to TODO Model
    await newTask.save();
    // Pushing the task to Tasklist of the User Model
    getCurrentUser.taskList.push(newTask);
    // Saving task to TaskList of the User Model
    await getCurrentUser.save();
  } catch (err) {}
};

exports.getTask = async (req, res) => {
  console.log(req.user.email);
  try {
    const getAllTask = await User.findOne({ email: req.user.email })
      .populate("taskList")
      .exec();

    if (getAllTask.taskList.length == 0) {
      return res.sendStatus(204);
    }
    res.status(200).json({
      content: getAllTask.taskList,
    });
  } catch (err) {
    res.status(400).json({
      content: err,
    });
  }
};
