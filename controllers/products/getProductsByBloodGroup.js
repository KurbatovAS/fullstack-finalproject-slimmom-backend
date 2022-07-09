const { Product } = require("../../models");

const getProductsByBloodGroup = async (req, res) => {
  const bloodGroup = Number(req.query.bloodGroup);

  const result = await Product.find({}).sort("title");

  const productsByBloodGroup = result.filter(
    (el) => el.groupBloodNotAllowed[bloodGroup]
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      productsByBloodGroup,
    },
  });
};

module.exports = getProductsByBloodGroup;
