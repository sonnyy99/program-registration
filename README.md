# program-registration

This project is intended to help register for Volleyball programs at Collingwood Neighbourhood House.

The project currently registers for the Wednesday 8:30PM timeslot automatically through a GitHub Actions workflow triggered on a cron schedule. See the `Copying this project` section below if you want to set this up for yourself.

The registration script can also be run locally to register, provided you start the script a few minutes before registration opens. See the `Steps to run` section below for how to do this.

# Requirements

- npm
- NodeJS: v18.18.2

# Steps to run

1. Run `npm install`
2. Create and fill in `cypress.env.json`.
   - Required parameters are in `example.env.json`
   - Note that `registrationUrl` should include everything after `https://regportal.cnh.bc.ca`. For example, `/program/getprogramdetails?courseid=297fcb87-356b-47fd-9c82-1e8d31f5d12a&semesterid=f865a4c0-cead-4947-9cfb-113cb32e5726`
3. Run `npm run cypress:run`, ideally a few minutes before registration starts (but can be up to 24 hours in advance)
   - WARNING: To ensure a quick registration, the script logs in right away, then waits until the registration time before registering. However, if your login session expires during this waiting period, the script will need to login again at registration time. This extra few seconds may result in you being unable to secure a registration spot.
4. Wait for the script to finish

# Copying this project

1. Follow the instructions here: https://stackoverflow.com/questions/18200248/cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github
   - Note: Your repo must be public to get free GitHub Actions runs
2. Set up the project secrets
   - Go to your repo on github.com
   - Click on `Settings`
   - Click on `Security -> Secrets and variables -> Actions`
   - Click on `New repository secret`
   - Name the secret `CYPRESS_ENV`
   - Put the completed contents (JSON format) of `example.env.json` as the Secret
     ![Alt text](/addSecretExample.png?raw=true)
   - Click `Add secret`
3. You should now be set up to register automatically for Volleyball!
