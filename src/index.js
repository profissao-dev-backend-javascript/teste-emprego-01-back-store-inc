const express = require("express");
const productRouter = require("./product/product.router");

const app = express();

app.use(express.json());

const port = 3000;

// Main Endpoint
app.get("/", function (req, res) {
  // TODO: Improve
  res.send("Hello World");
});

// Router Product
app.use("/product", productRouter);

app.listen(port, function () {
  console.info(`App running on http://localhost:${port}`);
});
