# Reddit Scaper

A web scraper that extracts posts from reddit before storing the title and description of each post into a CSV file.

Great tool to use if you need Reddit's data in CSV format on your next project!

# Technologies Used

This scraper was built using JavaScript, a Node.js starter kit, and Puppeteer.

Starter kit can be found here: https://github.com/MLH/mlh-hackathon-nodejs-starter

# Installation

This project requires the following tools:

- [Node.js](https://nodejs.org/en/) - The JavaScript environment for server-side code.
- [NPM](https://www.npmjs.com/) - A Node.js package manager used to install dependencies.
- [PostgreSQL](https://www.postgresql.org/) - A relational database system.

To get started, install NPM and Postgres on your local computer if you don't have them already. A simple way for Mac OS X users to install Postgres is using [Postgres.app](https://postgresapp.com/). Here is a [Windows guide](https://www.postgresqltutorial.com/install-postgresql/) for installing PostgresSQL.

Next, run the following command to install the dependencies:

```
$ npm install
```

# Usage

Run the following command:

```
$ node app/controllers/index.js
```

You can find the post.csv file generated in the app folder.
