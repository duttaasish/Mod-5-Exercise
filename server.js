require("dotenv").config();

const express = require("express");
const routes = require("./routers/router");
const app = express();
const port1 = process.env.PORT || 3000;
const port2 = process.env.PORT || 4000;

routes(app); //register the route

app.listen(port1, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port1}`);
  } else {
    console.log("Error occurred", error);
  }
});

app.listen(port2, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port2}`);
  } else {
    console.log("Error occurred", error);
  }
});