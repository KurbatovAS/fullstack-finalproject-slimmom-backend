const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const daySchema = new Schema({
  eatenProducts: [
    {
      title: { type: String, required: true },
      weight: { type: Number, required: true },
      kcal: { type: Number, required: true },
    },
  ],
  date: { type: String, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Day = model("Day", daySchema);

module.exports = Day;
