function readAll() {
  return [];
}

function readById(id) {
  return id;
}

function create(item) {
  return item;
}

function updateById(id, item) {
  return { id, ...item };
}

function deleteById(id) {
  return true;
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
