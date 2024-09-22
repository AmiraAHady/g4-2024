// import express
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var ProductCollection = require("./models/product");

// create server
const server = express();

mongoose
  .connect("connection string")
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Error connecting to DB");
  });

server.use(cors());

//// http://localhost:3000/products
server.get("/products", (req, res) => {
  ProductCollection.find()
    .then((retrivedData) => {
      res.send(retrivedData);
    })
    .catch((err) => {
      res.send("Error getting Data");
    });
});

//// http://localhost:3000/getById/:id
server.get("/getById/:id", (req, res) => {
  var productId = +req.params.id;
  ProductCollection.findOne({ id: productId })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("Sorry No Product with this id");
      }
    })
    .catch((err) => {
      res.send("Error getting Data");
    });
});

// port
// http://localhost:3000/
server.listen(3000, () => {
  console.log("Server is Running!");
});
