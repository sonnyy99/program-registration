import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("task", {
        getCurrentMinute() {
          const date = new Date();
          return date.getUTCMinutes();
        },
      });
    },
    baseUrl: "https://regportal.cnh.bc.ca",
  },
});
