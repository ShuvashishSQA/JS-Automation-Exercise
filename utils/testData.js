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
  },

  // A fresh identity for the signup test. Fields map 1:1 to the
  // Enter Account Information form on automationexercise.com.
  newUser: {
    name: `TestUser${timestamp}`,
    email: `testuser${timestamp}@example.com`,
    password: 'Test@1234',
    title: 'Mr',
    day: '10',
    month: 'May',
    year: '1995',
    firstName: 'Test',
    lastName: 'User',
    company: 'QA Corp',
    address1: '123 Test Street',
    address2: 'Apt 4B',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobile: '9876543210'
  }
};