require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 7_000 },
  retries: process.env.CI ? 2 : 0,
  workers: 1, // raise once tests no longer depend on each other
  reporter: [['list'], ['html', { open: 'never' }]],
  
  use: {
    baseURL: process.env.BASE_URL,
    actionTimeout: 15_000,
    headless: !!process.env.CI,
    viewport: process.env.CI ? { width: 1440, height: 900 } : null,
    launchOptions: { args: process.env.CI ? [] : ['--start-maximized'] },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});