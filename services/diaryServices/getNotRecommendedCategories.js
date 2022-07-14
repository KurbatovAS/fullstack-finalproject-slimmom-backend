const getNotRecommendedCategories = (data) => {
  const getCategories = data.map((obj) => obj.categories.toString());
  const categories = getCategories.filter(
    (value, index) => getCategories.indexOf(value) === index
  );
  return categories;
};
module.exports = { getNotRecommendedCategories };
