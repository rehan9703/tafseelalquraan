// Simple request logger middleware
// Detailed logging is handled by morgan in index.js

export const requestLogger = (req, res, next) => {
  // morgan handles HTTP request logging
  // this middleware can be used for extra context if needed
  next();
};
