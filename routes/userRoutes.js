const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

console.log('🔥 userRoutes loaded');
router.post('/register', (req, res) => {
  console.log('=> /api/users/register called');
  registerUser(req, res);
});
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
