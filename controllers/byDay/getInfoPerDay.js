const { User, Day } = require("../../models");
const { createNewDay } = require("./utils");

const infoPerDay = async (date, user) => {
  const userId = user._id;

  try {
    const user = await User.findById(userId);

    const userDay = user.days.find((day) => day.date === date);

    if (userDay) {
      return await Day.findById(userDay.id);
    }

    return await createNewDay(user, date);
  } catch (error) {
    console.log("error");
  }
};

const getInfoPerDay = async (req, res, next) => {
  const { date } = req.body;

  const dayInfo = await infoPerDay(date, req.user);

  return res.status(200).json(dayInfo);
};

module.exports = getInfoPerDay;
