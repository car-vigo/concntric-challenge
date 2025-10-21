import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: process.env.CYPRESS_HOST,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    videosFolder: 'cypress/reports/html/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/html/screenshots',
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Concntric Test Report',
      embeddedScreenshots: true,
      inlineAssets: false,
      saveAllAttempts: false,
      reportDir: 'cypress/reports/html',
    },

  },
});
