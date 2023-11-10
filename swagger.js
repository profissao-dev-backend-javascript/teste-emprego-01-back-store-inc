const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Teste Emprego 01: BackStore Inc",
    description: "API de Gerenciamento de Inventário",
  },
  host: "https://friendly-space-enigma-wr7wpv995pww2rvg-3000.app.github.dev",
};

const outputFile = "./swagger-output.json";
const routes = ["./src/index.js"];

swaggerAutogen(outputFile, routes, doc);
