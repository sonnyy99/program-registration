/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on) {
      require("cypress-failed-log/on")(on);
      on("task", {
        getCurrentTime() {
          const date = new Date();
          return { hour: date.getUTCHours(), minute: date.getUTCMinutes() };
        },
      });
    },
  },
});
