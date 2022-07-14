const { removeProductItemService } = require("../../services/dairyServices");

const removeProductItem = async (req, res, next) => {
  const { _id: userId } = req.user;
  await removeProductItemService(req.params, userId);
  return res.status(204).json({});
};

module.exports = {
  removeProductItem,
};
