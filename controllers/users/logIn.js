const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JSONWEBTOKEN_SECRET_KEY } = process.env;
const { Unauthorized } = require("http-errors");

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const authorized = bcrypt.compareSync(password, user.password);

  if (!user || !authorized) {
    throw new Unauthorized("Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JSONWEBTOKEN_SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        name: user.name,
        email,
      },
    },
  });
};

module.exports = logIn;
