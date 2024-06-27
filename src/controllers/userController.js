const userService = require('../services/userService');
const validate = require('../middleware/validate');
const { createUserSchema, updateUserSchema, userIdSchema } = require('../validators/userValidator');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    validate(userData, createUserSchema);
    const user = await userService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    validate({ userId }, userIdSchema);
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    validate({ ...userData, userId }, updateUserSchema);
    const user = await userService.updateUser(userId, userData);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    validate({ userId }, userIdSchema);
    const user = await userService.deleteUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
