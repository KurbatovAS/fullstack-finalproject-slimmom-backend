const getProductsByBloodType = (products, bloodType) =>
  products
    .filter((el, _, arr) => {
      if (el.groupBloodNotAllowed[Number(bloodType)]) return arr;
    })
    .flatMap((el) => el.title.ua);
// .flatMap((el) => el.categories)
// .reduce((acc, el, ind, arr) => {
//   arr.indexOf(el) === ind ? acc.push(el) : acc;
//   return acc;
// }, []);

// const getProductsByBloodType = async (products, bloodType) => {
//   return products.filter((el) => el.groupBloodNotAllowed[bloodType]);
// };

module.exports = { getProductsByBloodType };
