const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUserById = async (userId) => User.findById(userId);

const getAllUsers = async () => User.find();

const updateUser = async (userId, userData) => User.findByIdAndUpdate(userId, userData, { new: true });

const deleteUser = async (userId) => User.findByIdAndUpdate(userId, { deleted: true }, { new: true });

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
