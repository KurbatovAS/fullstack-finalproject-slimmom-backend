const { Day } = require("../../models");

const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await Day.findByIdAndRemove(productId);

    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id ${productId} not found`,
      });
      return;
    }

    res.json({
      status: "success",
      code: 200,
      message: "You deleted",
      data: { result },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};

module.exports = deleteProduct;
