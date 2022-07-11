const getListFoundProducts = (products, normalizedQuery) =>
  products
    .filter((el) => {
      // console.log("el.title.ua", el.title.ua);
      const productTitle = el.title.ua.toLowerCase();
      return productTitle.includes(normalizedQuery);
    })
    .map((el) => {
      return {
        kcal: el.calories,
        weight: el.weight,
        title: el.title.ua,
        id: el._id,
      };
    });

module.exports = { getListFoundProducts };
