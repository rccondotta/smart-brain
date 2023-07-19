# smart-brain
Front-end and Back-end for Smart Brain Project

## Running the Frontend

1. Run npm install
2. Run npm start
3. You must add your own API key in the src/App.js file to connect to Clarifai.

## Running the Backend

1. run npm install for frontend and backend
2. Make sure you have docker installed and running on your computer
3. Run docker-compose up ( you may have to run docker-compose up --build for the first setup phase)
4. You must add your own API key in the controllers/image.js file to connect to Clarifai API.
5. You will also need to update Line 22 in server.js to your client app port (i.e. 3001)

Important: if you are getting conflict erros, you should run docker stop <container name> that is already running in the background. Important: if you are getting other erros, you should run docker-compose down to bring everything down, and start over.

To access backend's bash: Run docker-compose exec smart-brain-api bash

To access postgres: (adjust PORT number if needed) Run psql postgres://<username>:<password>@localhost:5432/smart-brain

To access redis: Run docker-compose exec redis redis-cli

You can grab Clarifai API key here

** Make sure you use postgreSQL instead of mySQL for this code base.

## Packages Used

* tackyons - Quickly build and design new UI without writing CSS.
* react-parallax-tilt - Easily apply tilt hover effect on React components.
* particles-bg - React component for particles backgrounds.
* BCrypt - A library to help you hash passwords.
* Clarifai-nodejs-grpc - Node.js client for interacting with our powerful recognition API.
* Cors - Providing a Connect/Express middleware that can be used to enable CORS with various options.
* dotenv - Loads environment variables from a .env file into process.env.
* express - Fast, unopinionated, minimalist web framework for Node.js.
* jsonwebtoken - An implementation of JSON Web Tokens.
* knex - A batteries-included, multi-dialect (PostgreSQL, MySQL, CockroachDB, MSSQL, SQLite3, Oracle (including Oracle Wallet Authentication)) query builder for Node.js.
* morgan - HTTP request logger middleware for node.js.
* pg - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
* redis - node-redis is a modern, high performance Redis client for Node.js.
* nodemon (devDependency) - Simple monitor script for use during development of a Node.js app.

## Concepts

* React, Redux, Module Bundling
* Docker
* Redis
* Sessions + JWT
* AWS
* Performance Optimizations
* CI / CD
