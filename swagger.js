const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Teste Emprego 01: BackStore Inc",
    description: "API de Gerenciamento de Inventário",
  },
  host: "teste-emprego-01-back-store-inc.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./src/index.js"];

swaggerAutogen(outputFile, routes, doc);
