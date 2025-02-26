const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const productRoues = require("./route/product");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/products", productRoues);

const port = 8000;
app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
