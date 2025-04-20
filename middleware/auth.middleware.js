const jwt = require('jsonwebtoken');
const Donor = require('../models/donor.model');

// Protect routes
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find donor by ID
    req.donor = await Donor.findById(decoded.id).select('-password');

    if (!req.donor) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
};

// Grant access to admin roles
exports.admin = (req, res, next) => {
  if (!req.donor || !req.donor.isAdmin) {
    return res.status(403).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
  next();
}; 