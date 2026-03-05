require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,              // Each test gets max 30 seconds
  retries: 1,                  // Retry once on failure (catches flakiness)
  reporter: 'html',            // Generates a beautiful HTML report locally
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // Lets you replay exactly what happened in a failed test
  }
});