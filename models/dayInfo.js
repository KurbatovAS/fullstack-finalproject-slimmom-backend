const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const dayInfoSchema = new Schema({
  date: { type: String, default: null, required: true },
  eatenProducts: [
    {
      title: { type: String, required: true },
      weight: { type: Number, required: true },
      kcal: { type: Number, required: true },
    },
  ],
  daySummary: {
    kcalLeft: { type: Number, required: true },
    kcalConsumed: { type: Number, required: true },
    dailyRate: { type: Number, required: true },
    percentsOfDailyRate: { type: Number, required: true },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
});

const DayInfo = model("DayInfo", dayInfoSchema);

module.exports = { DayInfo };
