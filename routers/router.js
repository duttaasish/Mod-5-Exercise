"use strict";

module.exports = (app) => {
  let calculator = require("../controllers/CalculatorController");
  //to add in your mini project back end, it just needs a separate controller
  let countryController = require("../controllers/CountryController");

  //Calculator Operation
  app.route("/operation/addByTwoParams").get(calculator.addOperationByTwoParams);
  app.route("/operation/addByList").get(calculator.addByList);

  app.route("/operation/subtract").get(calculator.subtractOperation);
  app.route("/operation/subByList").get(calculator.subByList);

  app.route("/operation/multiply").get(calculator.multiplyOperation);
  app.route("/operation/multibyList").get(calculator.multiByList);

  app.route("/operation/divide").get(calculator.divideOperation);

  app.route("/countries/details").get(countryController.getCountry); //new route for mini-project back end

  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};