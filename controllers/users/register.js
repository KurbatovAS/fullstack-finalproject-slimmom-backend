const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");

const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await User.create({ name, email, password: hashedPassword });
  res.status(201).json({
    status: 201,
    user: {
      name,
      email,
    },
  });
};

module.exports = register;
