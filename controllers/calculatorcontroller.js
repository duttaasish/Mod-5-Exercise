"use strict";

exports.addOperationByTwoParams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const sum = number1 + number2;
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.addByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;
    //Get the sum of all elements inside the list
    let sum = 0;
    listElements.forEach((item) => {
      sum += item;
    });
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.subtractOperation = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const sub = number1 - number2;
    res.status(200);
    res.json({ success: true, data: sub });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.subByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;
    //Get the sum of all elements inside the list
    let totalSubtract = listElements[0];
    for (let i = 1; i < listElements.length; i++) {
      totalSubtract -= listElements[i];
    }
    res.status(200);
    res.json({ success: true, data: totalSubtract });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.multiplyOperation = (req, res) => {
  try{
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const mul = number1 * number2;
    res.status(200);
    res.json({success:true, data :mul});
  }
  catch(e){
    throw Error(e.message);
  }
};

exports.multiByList = (req,res) => {
  try{
    const listElements = JSON.parse(req.query.list).numbers;
    var mul = 1
    for (var i = 0; i<listElements.length; i++)
    {
        mul *= listElements[i];
    }
    res.status(200);
    res.json({ success: true, data: mul});
  }
  catch(e)
  {
    throw Error(e.message);
  }
};

exports.divideOperation = (req, res) => {
  try{
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const div = number1 / number2;
    res.status(200);
    res.json({success:true, data :div});
  }
  catch(e){
    throw Error(e.message);
  }
};


