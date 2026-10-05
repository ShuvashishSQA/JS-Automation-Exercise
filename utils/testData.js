require('dotenv').config();

if (!process.env.BASE_URL) {
  throw new Error(
    '❌ Missing BASE_URL in .env file. ' +
    'Make sure your .env file exists and has the value set.'
  );
}

const fs = require('fs');
const path = require('path');

const USER_DATA_FILE = path.join(__dirname, 'lastCreatedUser.json');

module.exports = {
// Dynamic user generator function for signup tests
  getNewUserData: () => {
    const timestamp = Date.now();
    return {
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
      mobile: '1234567890'
    };
  },

  // Save the newly created user to a JSON file for later retrieval
    saveLastCreatedUser: (userData) => {
    fs.writeFileSync(USER_DATA_FILE, JSON.stringify(userData, null, 2));
  },

  // NEW: retrieve that user in a later test
  getLastCreatedUser: () => {
    if (!fs.existsSync(USER_DATA_FILE)) {
      throw new Error('No previously created user found — run the signup test first.');
    }
    return JSON.parse(fs.readFileSync(USER_DATA_FILE, 'utf-8'));
  }
}
