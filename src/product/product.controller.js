const helper = require("./product.helper");
const service = require("./product.service");

async function readAll(req, res) {
  const items = await service.readAll();

  res.send(items);
}

async function readById(req, res) {
  const id = req.params.id;
  const item = await service.readById(id);

  if (!item) {
    return res.status(404).send({
      message: "Item not found",
    });
  }

  res.send(item);
}

async function create(req, res) {
  const item = req.body;

  const itemValidation = helper.validateItem(item);

  if (!itemValidation.isValid) {
    return res.status(400).send({
      message: "Invalid entity, check the required structure.",
      requiredStructure: itemValidation.requiredStructure,
    });
  }

  const itemAdded = await service.create(item);

  res.status(201).send(itemAdded);
}

async function updateById(req, res) {
  const id = req.params.id;

  const newItem = req.body;

  const itemValidation = helper.validateItem(newItem);

  if (!itemValidation.isValid) {
    return res.status(400).send({
      message: "Invalid entity, check the required structure.",
      requiredStructure: itemValidation.requiredStructure,
    });
  }

  const updatedItem = await service.updateById(id, newItem);

  if (!updatedItem) {
    return res.status(404).send({
      message: "Item not found",
    });
  }

  res.send(updatedItem);
}

async function deleteById(req, res) {
  const id = req.params.id;

  const isDeleted = await service.deleteById(id);

  if (!isDeleted) {
    return res.status(404).send({
      message: "Item not found",
    });
  }

  res.status(204).send();
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
