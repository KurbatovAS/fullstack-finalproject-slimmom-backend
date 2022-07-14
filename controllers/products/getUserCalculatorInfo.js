const {
  userCalc,
} = require("../../services/calculatorServices/calculatorServices");

const getUserCalculatorInfo = async (req, res, next) => {
  const userData = await userCalc(req.body, req.user);
  return res.status(200).json({ target: userData });
};

module.exports = {
  getUserCalculatorInfo,
};
