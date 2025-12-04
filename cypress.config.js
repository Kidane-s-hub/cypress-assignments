const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8yfuhq", // Dashboard

  // retries: 2, // Retries
  retries: {
    runMode: 1,
    openMode: 2,
  },

  reporter: "cypress-mochawesome-reporter", // report
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // report
      // implement node event listeners here
    },
  },
});
