require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const productRouter = require("./product/product.router");
const { connectToDatabase } = require("./db/database.helper");

async function main() {
  await connectToDatabase();

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  const port = process.env.PORT || 3000;

  // Main Endpoint
  app.get("/", function (req, res) {
    res.send({
      message: "Welcome to BackStore Inc. API",
      doc: "/doc",
      
    });
  });

  // Router Product
  app.use("/product", productRouter);

  app.listen(port, function () {
    console.info(`App running on http://localhost:${port}`);
  });
}

main();
