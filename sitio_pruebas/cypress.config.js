import { defineConfig } from 'cypress';
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin.js';


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressMochawesomeReporter(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      charts: true,
      embeddedScreenshots: true,
      html: true,
      json: false,
      reportPageTitle: 'Pruebas Cypress',
      inlineAssets: true,
    },
  },
});