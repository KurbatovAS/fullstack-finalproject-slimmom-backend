const getProductsByBloodType = (products, bloodType) =>
  products
    .filter((el, _, arr) => {
      if (el.groupBloodNotAllowed[Number(bloodType)]) return arr;
    })
    .flatMap((el) => el.title.ua);

module.exports = { getProductsByBloodType };
