# The Elder Chores

A task list app where one user owns the task list of another. Each task is assigned a value in
currency and experience points. The currency can be spent on aesthetic items for their avatar
or on real world rewards such as more screen time, or an extra piece of candy. While targeted
for parents and kids to managed chores in a more fun way, this app could be useful for anyone
looking for outside accountability for their own tasks.

## Requirements

   - go 1.18
   - nodejs

## Running the App

The backend is built on [Pocketbase](https://www.pocketbase.io) which provides the DB and automatically
generates the API.

    go run cmd/pocketbase/main.go serve --http=0.0.0.0:8000

The above command launches the backend, runs any migrations, and sets up the server on port 8000. You can
modify the port and IP to be anything you choose.

The administration endpoint will be available at `http://localhost:8000/_/` and the REST API will be at
`http://localhost:8000/api`.

## Database Migrations

Pocketbase allows you to build your database using their webUI. You can put together your database schema
and then run their migrations command to ensure that these migrations are used everywhere the app is run.

    go run cmd/pocketbase/main.go migrate collections

The above command will drop a migrations file into the local directory and will be run whenever you launch
pocketbase.

## Frontend UI

To run the frontend UI along with backend, you must build the frontend first:

    npm run build

Once the build is complete. The backend command to serve the website will serve both. The UI will be located at
'/'

The frontend UI elements are all located in [the-elder-chores-user-ui](./the-elder-chores-user-ui/).

To install the frontend, run `yarn install` inside the ui directory.

### Note on Fedora 36

Fedora 36 has some quirks related to node. If you run into openssl errors, you have to do a couple of things.

    sudo crypto-policies --set legacy

Then edit your `/etc/ssl/openssl.cnf` file and uncomment the following section:

    [provider_sect]
    ##default = default_sect
    ##legacy = legacy_sect
    ##
    ##[default_sect]
    ##activate = 1
    ##
    ##[legacy_sect]
    ##activate = 1

After performing those changes, you should be able to run `npm start` with no issues.

