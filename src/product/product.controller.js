function readAll(req, res) {
  res.send("readAll");
}

function readById(req, res) {
  res.send("readById");
}

function create(req, res) {
  res.send("create");
}

function updateById(req, res) {
  res.send("updateById");
}

function deleteById(req, res) {
  res.send("deleteById");
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
