const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const adminMiddleware = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.header('Authorization');

    // If no token is provided, return unauthorized
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    // Verify the token
    const jwtToken = token.replace('Bearer', '').trim();
    const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);

    // Check if the user associated with the token exists
    const user = await User.findById(decodedToken.userId);

    // If the user doesn't exist, return unauthorized
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Check if the user is an admin
    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    // If everything is okay, set the user in the request and proceed
    req.user = user;
    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = adminMiddleware;
