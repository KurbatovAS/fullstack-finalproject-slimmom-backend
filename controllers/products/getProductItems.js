const { getProductItemsService } = require("../../services/dairyServices");

const getProductItems = async (req, res, next) => {
  const { _id: userId } = req.user;
  const getDay = await getProductItemsService(req.params.forDay, userId);
  res.status(200).json({ dayJournal: getDay });
};

module.exports = {
  getProductItems,
};
