function validateItem(item) {
  if (
    !item ||
    !item.name ||
    typeof item.name !== "string" ||
    !item.price ||
    typeof item.price !== "number" ||
    !item.description ||
    typeof item.description !== "string" ||
    !item.stockAmount ||
    typeof item.stockAmount !== "number"
  ) {
    return {
      isValid: false,
      requiredStructure: {
        name: "string",
        price: 12.34,
        description: "string",
        stockAmount: 12,
      },
    };
  }

  return {
    isValid: true,
  };
}

module.exports = {
  validateItem,
};
