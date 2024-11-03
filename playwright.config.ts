import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './utils/environmentBaseUrl';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 1,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  reporter: [['list'],
             ['html'],
             ['junit', { outputFile: 'results.xml' }],
             ['json', { outputFile: 'results.json' }],
             ['allure-playwright']
  ],
  
  timeout: 20000,  // Global timeout for each test, in milliseconds.
  expect: {
    timeout: 5000,  // Maximum time to wait for `expect` conditions (like toHaveText).
  },
  use: {
    // Set the baseURL dynamically based on the ENV variable.
    // If ENV is 'production', use the production URL.
    // If ENV is 'staging', use the staging URL.
    // Otherwise, default to the test URL.
    baseURL: process.env.ENV === 'production'
    ? baseEnvUrl.production.home
    : process.env.ENV === 'staging'
      ? baseEnvUrl.staging.home
      : baseEnvUrl.test.home,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', // Screenshots only when a test fails.
    headless: true,
    viewport: { width: 1920, height: 1080 },
    // Record video with better quality.
    video: {
      mode: "retain-on-failure",
      size: { width: 1920, height: 1080 }
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
       },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 }
       },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
