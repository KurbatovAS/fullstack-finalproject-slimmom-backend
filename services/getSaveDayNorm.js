const { User } = require("../models");
const { calc } = require("./calc");

const getSaveDayNorm = async (body, email) => {
  const dayNorm = await calc(body);
  await User.findOneAndUpdate(
    { email },
    {
      $set: { dayNorm },
    }
  );
  return dayNorm;
};

module.exports = { getSaveDayNorm };
