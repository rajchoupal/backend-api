const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/worko/user', auth, userController.getAllUsers);
router.get('/worko/user/:userId', auth, userController.getUserById);
router.post('/worko/user', auth, userController.createUser);
router.put('/worko/user/:userId', auth, userController.updateUser);
router.patch('/worko/user/:userId', auth, userController.updateUser);
router.delete('/worko/user/:userId', auth, userController.deleteUser);

module.exports = router;
