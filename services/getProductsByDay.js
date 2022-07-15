const { ProductsPerDate } = require("../models");

const getProductsByDay = async (userId, date) => {
  const allDates = await ProductsPerDate.find({ owner: userId, date });
  const products = allDates.map((el) => {
    return {
      kcal: el.kcal,
      weight: el.weight,
      title: el.title,
      id: el._id,
    };
  });
  let productsOptimized;
  if (date === new Date().toLocaleDateString("fr-CA")) {
    productsOptimized = products;
  } else {
    productsOptimized = products.reduce((accum, el) => {
      const accumTitles = accum.map((elem) => elem.title) || [];
      if (accumTitles.includes(el.title)) {
        const sameProduct = accum.find((element) => element.title === el.title);
        sameProduct.weight = sameProduct.weight + el.weight;
        sameProduct.kcal = sameProduct.kcal + el.kcal;
      } else {
        accum.push(el);
      }
      return accum;
    }, []);
  }
  return productsOptimized;
};

module.exports = { getProductsByDay };
