const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.deleteOne({ _id: id });
    // Delete the associated contact for this user
    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    let contact = await Contact.deleteOne({ _id: id });
    // Delete the associated contact for this user
    return res.status(200).json({ message: "Contact Deleted" });
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id }, { password: 0 });
    // if (!user || user.length === 0) {
    //   return res.status(404).json({ message: "No users Found" });
    // }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const Updateduser = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );

    res.status(200).json(Updateduser);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  deleteContactById,
  updateUserById,
};
