const { addProduct } = require("../../services/getProducts");

const add = async (req, res, next) => {
  try {
    const { id } = req.user;

    const product = await addProduct(id, req.body);
    const { _id, date, kcal, weight, title, owner } = product;
    return res.status(201).json({
      id: _id,
      date,
      kcal,
      weight,
      title,
      owner,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = add;
