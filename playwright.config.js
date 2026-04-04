require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,              // Each test gets max 30 seconds
  retries: 1,                  // Retry once on failure (catches flakiness)
  workers: 1,                  // Run One test at a time
  reporter: 'html',            // Generates a beautiful HTML report locally
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,           // to make automation visible, true for CI/CD process.
    viewport: null,            // uses fullscreen dynamically
    launchOptions: {
      args: ['--start-maximized'] // ✅ forces browser to open fully maximized
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // Lets you replay exactly what happened in a failed test
  }
});