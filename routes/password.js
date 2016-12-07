var bcrypt = require('bcrypt-nodejs');

// Password hashing functions.
exports.generateHash = function(password){
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check to see if the user has supplied a valid password.
exports.isPasswordValid = function(password, hash) {
   return bcrypt.compareSync(password, hash);
};
