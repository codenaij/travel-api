// this server.js file consists of files that are not expressjs files and they contain configurations

const dotenv = require('dotenv');
// dotenv.config is used to make the config.env file available in the code
dotenv.config({ path: './config.env' });

const app = require('./app');

// This is the port in which the app is listening to the request
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

// npm run start:dev
// npm run start:prod
