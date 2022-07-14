const { Day } = require("../../models");

const getProductsForDay = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const eatenProducts = await Day.find(
      { owner: _id, date },
      "-createdAt -updatedAt"
    ).populate("owner", "name email");
    res.json({
      status: "success",
      code: 200,
      data: { eatenProducts },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};

module.exports = getProductsForDay;
