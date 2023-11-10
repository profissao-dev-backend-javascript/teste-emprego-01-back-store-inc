const { MongoClient } = require("mongodb");

const url = process.env.DATABASE_URL;
const client = new MongoClient(url);
const dbName = process.env.DATABASE_NAME;

async function connectToDatabase() {
  console.info("Connecting do database...");
  await client.connect();
  console.info("Database connected successfully!");
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = {
  connectToDatabase,
  getDatabase,
};
