const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { JSONWEBTOKEN_SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = await User.create({ name, email, password: hashedPassword });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, JSONWEBTOKEN_SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    status: 201,
    token,
    user: {
      name,
      email,
    },
    isCalculated: newUser.isCalculated,
  });
};

module.exports = register;
