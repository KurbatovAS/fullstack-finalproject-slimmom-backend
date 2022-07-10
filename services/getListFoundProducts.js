const getListFoundProducts = (products, normalizedQuery) =>
  products
    .filter((el) => {
      const productTitle = el.title.ua.toLowerCase();
      return productTitle.includes(normalizedQuery);
    })
    .map((el) => {
      return {
        kcal: el.calories,
        weight: el.weight,
        title: el.title.ru,
        id: el._id,
      };
    });

module.exports = { getListFoundProducts };
