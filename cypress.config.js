const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '97yid8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
