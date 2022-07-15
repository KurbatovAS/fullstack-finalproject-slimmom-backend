const { removeProduct } = require("../../services");

const remove = async (req, res, next) => {
  const { id } = req.user;
  try {
    const deletedProduct = await removeProduct(id, req.params);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found!",
      });
    }
    return res.status(200).json({
      message: "product removed",
    });
  } catch (e) {
    next(e);
  }
};

module.exports = remove;
