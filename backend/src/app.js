const express = require("express");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Product Browser Backend Running",
  });
});

app.use("/api/products", productRoutes);

module.exports = app;