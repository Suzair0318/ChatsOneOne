const jwt = require('jsonwebtoken');
const DB = require('./db')

const socketAuthMiddleware = async (socket, next) => {
  try {
    const token = socket.handshake.auth.token || socket.handshake.headers['authorization'];
    
    if (!token) {
      return next(new Error('Authentication error: Token required'));
    }

    const decoded = jwt.verify(token, 'suzair'); 

    const find_user = await DB.findOne({_id : decoded});

    if (!find_user) {
      return next(new Error('Authentication error: User not found'));
    }
  
    socket.user = find_user; 
    next();

  } catch (err) {
    next(new Error('Authentication error: ' + err));
  }
};

module.exports = socketAuthMiddleware;