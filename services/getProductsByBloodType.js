const getProductsByBloodType = async (products, bloodType) => {
  return products.filter((el) => el.groupBloodNotAllowed[bloodType]);
};

module.exports = { getProductsByBloodType };
