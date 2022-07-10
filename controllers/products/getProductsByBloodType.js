const { Product } = require("../../models");

const getProductsByBloodType = async (req, res) => {
  const bloodType = Number(req.query.bloodType);

  const result = await Product.find({}).sort("title");

  const productsBybloodType = result.filter(
    (el) => el.groupBloodNotAllowed[bloodType]
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      productsBybloodType,
    },
  });
};

module.exports = getProductsByBloodType;
