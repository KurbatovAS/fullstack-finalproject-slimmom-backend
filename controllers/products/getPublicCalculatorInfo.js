const {
  publicCalc,
} = require("../../services/calculatorServices/calculatorServices");

const getPublicCalculatorInfo = async (req, res, next) => {
  const calculated = await publicCalc(req.body);
  return res.status(200).json({ target: calculated });
};

module.exports = {
  getPublicCalculatorInfo,
};
