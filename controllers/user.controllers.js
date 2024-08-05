const User = require('../models/user');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Logged in successfully' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
