require("dotenv").config();

const express = require("express");
const routes = require("./routers/router");
const swaggerUI = require('swagger-ui-express');
const app = express();
const app2 = express(); //you can create multiple servers as well as multiple ports
const port1 = process.env.PORT || 3000;
const port2 = process.env.PORT || 4000;
const swaggerDocument = require('./swagger.json');

app.use('/', express.static('public')) //map everything in the public folder to the root endpoint, so it will load index.html
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes(app); //register the routes

app.listen(port1, (error) => {
  if (!error) {
    console.log(`Server 1 is running on port ${port1}`);
  } else {
    console.log("Error occurred", error);
  }
});

app2.listen(port2, (error) => { //then app2 can listen on port2
  if (!error) {
    console.log(`Server 2 is running on port ${port2}`);
  } else {
    console.log("Error occurred", error);
  }
});