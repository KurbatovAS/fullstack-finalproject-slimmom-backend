const { User } = require("../models");
const { calculate } = require("./calculatorServise");

const getSaveDayNorm = async (body, email) => {
  const dayNorm = await calculate(body);
  await User.findOneAndUpdate(
    { email },
    {
      $set: { dayNorm },
    }
  );
  return dayNorm;
};

module.exports = { getSaveDayNorm };
