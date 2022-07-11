const Day = require("../../models/productsPerDate");

const add = async (req, res, next) => {
  try {
    const {
      user,
      body: { productId, weight, date },
    } = req;
    const day = new Day({
      productId,
      weight,
      date,
      userId: user._id,
    });

    const savedDay = await day.save();
    return res.status(201).json(savedDay);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
