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
      html: true,
      json: false,
    },
    
  },
});