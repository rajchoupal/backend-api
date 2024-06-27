const userDao = require('../daos/userDao');
const UserDto = require('../dtos/userDto');

const createUser = async (userData) => {
  const user = await userDao.createUser(userData);
  return new UserDto(user);
};

const getUserById = async (userId) => {
  const user = await userDao.getUserById(userId);
  if (!user) throw new Error('User not found');
  return new UserDto(user);
};

const getAllUsers = async () => {
  const users = await userDao.getAllUsers();
  return users.map(user => new UserDto(user));
};

const updateUser = async (userId, userData) => {
  const user = await userDao.updateUser(userId, userData);
  if (!user) throw new Error('User not found');
  return new UserDto(user);
};

const deleteUser = async (userId) => {
  const user = await userDao.deleteUser(userId);
  if (!user) throw new Error('User not found');
  return new UserDto(user);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
