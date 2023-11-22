import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("task", {
        getCurrentTime() {
          const date = new Date();
          return { hour: date.getUTCHours(), minute: date.getUTCMinutes() };
        },
      });
    },
  },
});
