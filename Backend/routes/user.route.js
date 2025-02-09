const express = require("express");
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();

router.post('/register',
  userController.registerUser
)

router.post('/login', 
  userController.loginUser
)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)


module.exports = router;
