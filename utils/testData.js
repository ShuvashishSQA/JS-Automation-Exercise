require('dotenv').config();

if (!process.env.EMAIL || !process.env.PASSWORD) {
  throw new Error(
    '❌ Missing EMAIL or PASSWORD in .env file. ' +
    'Make sure your .env file exists and has both values set.'
  );
}

module.exports = {
  validUser: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  }
};