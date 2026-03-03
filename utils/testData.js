require('dotenv').config();

module.exports = {
  validUser: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  }
};