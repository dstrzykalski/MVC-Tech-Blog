// routes/api/userRoutes.js
const router = require('express').Router();
const { User } = require('../../models');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    res.status(200).json({ user, message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// Get user by ID
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found!' });
      return;
    }
    res.status(200).json(user);
    }
    catch (err) {
      res.status(500).json(err);
    }
    }
    );
    