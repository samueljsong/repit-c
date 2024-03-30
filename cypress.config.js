import { defineConfig } from "cypress";
import codeCoverageTask from '@cypress/code-coverage/task.js';

export default defineConfig({
    projectId: "ssqdm6",
    component: {
        devServer: {
        framework: "react",
        bundler: "vite",
        },
  },

  e2e: {
    setupNodeEvents(on, config) {
        codeCoverageTask(on, config)
        // include any other plugin code...
  
        // It's IMPORTANT to return the config object
        // with any changed environment variables
        return config
    },
    viewportWidth: 375,
    viewportHeight: 667,
  },
});
