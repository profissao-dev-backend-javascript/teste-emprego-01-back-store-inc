const helper = require("./product.helper");
const service = require("./product.service");

function readAll(req, res) {
  const items = service.readAll();

  res.send(items);
}

function readById(req, res) {
  const id = req.params.id;
  const item = service.readById(id);

  if (!item) {
    return res.status(404).send({
      message: "Item not found",
    });
  }

  res.send(item);
}

function create(req, res) {
  const item = req.body;

  const itemValidation = helper.validateItem(item);

  if (!itemValidation.isValid) {
    return res.status(400).send({
      message: "Invalid entity, check the required structure.",
      requiredStructure: itemValidation.requiredStructure,
    });
  }

  const itemAdded = service.create(item);

  res.status(201).send(itemAdded);
}

function updateById(req, res) {
  const id = req.params.id;

  const newItem = req.body;

  const itemValidation = helper.validateItem(newItem);

  if (!itemValidation.isValid) {
    return res.status(400).send({
      message: "Invalid entity, check the required structure.",
      requiredStructure: itemValidation.requiredStructure,
    });
  }

  const updatedItem = service.updateById(id, newItem);

  if (!updatedItem) {
    return res.status(404).send({
      message: "Item not found",
    });
  }

  res.send(updatedItem);
}

function deleteById(req, res) {
  const id = req.params.id;

  const isDeleted = service.deleteById(id);

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
