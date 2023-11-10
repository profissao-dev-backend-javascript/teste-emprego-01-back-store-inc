const { ObjectId } = require("mongodb");
const { getDatabase } = require("../db/database.helper");

function getCollection() {
  return getDatabase().collection("products");
}

async function readAll() {
  const items = await getCollection().find().toArray();

  return items;
}

async function readById(id) {
  const item = await getCollection().findOne({
    _id: new ObjectId(id),
  });

  return item;
}

async function create(item) {
  await getCollection().insertOne(item);

  return item;
}

async function updateById(id, item) {
  const updateResult = await getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: item }
  );

  if (updateResult.modifiedCount === 0) {
    return;
  }

  return { id, ...item };
}

async function deleteById(id) {
  const deleteResult = await getCollection().deleteOne({
    _id: new ObjectId(id),
  });

  if (deleteResult.deletedCount === 0) {
    return false;
  }

  return true;
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
