# program-registration

This project is intended to help register for Volleyball programs at Collingwood Neighbourhood House.

The current setup is to register for the Wednesday 8:30PM timeslot automatically through a GitHub Actions workflow triggered on a cron schedule.

The registration script can also be used locally to register, provided you start the registration script 2 minutes before registration opens.

# Requirements

- npm
- NodeJS: v18.18.2

# Steps to run

1. Run `npm install`
2. Create and fill in `cypress.env.json`.
   - Required parameters are in `example.env.json`
   - Note that `registrationUrl` should include everything after `https://regportal.cnh.bc.ca`. For example, `/program/getprogramdetails?courseid=297fcb87-356b-47fd-9c82-1e8d31f5d12a&semesterid=f865a4c0-cead-4947-9cfb-113cb32e5726`
3. Run `npm run cypress:run`

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
   - Click `Add secret`
3. You should now be set up to register automatically for Volleyball!
