const user = require("../models/user");

//Add user
exports.addUser = async (req, res) => {
  try {
    const findUser = await user.findOne({ email: req.email });
    if (findUser) {
      return res.status(400).send({ message: "email aleardy used"});
    }
    const newUser = new user(req);
    await newUser.save();
    res.status(200).send({ message: "user added successfully", newUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Find all users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.status(200).send({ message: "All user", allUsers });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Find one user
exports.getOneUser = async (req, res) => {
  try {
    const oneUser = await user.findById(req.params.id);
    res.status(200).send({ message: "user found : ", oneUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Update user
exports.updateUser = async (req, res) => {
  try {
    const editUser = await user.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body, uptadetAt: Date.now() } }
    );
    res.status(200).send({ message: "user updated", editUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Delete user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await user.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "user deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
