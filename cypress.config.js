import { allureCypress } from "allure-cypress/reporter"

export default {
  // experimentalInteractiveRunEvents: true,
  e2e: {
    baseUrl: "https://allurereport.org",
    viewportWidth: 1240,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      allureCypress(on, config)

      return config
    },
  },
};
