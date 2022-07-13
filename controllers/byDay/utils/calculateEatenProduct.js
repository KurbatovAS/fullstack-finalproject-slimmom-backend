const calculateEatenProduct = (eatenProduct, weight) => {
  const { title, calories } = eatenProduct;
  const kcal = Math.floor((calories * weight) / eatenProduct.weight);
  return { title: title, weight, kcal };
};

module.exports = { calculateEatenProduct };
