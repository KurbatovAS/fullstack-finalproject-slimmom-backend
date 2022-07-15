const getCurrent = async (req, res) => {
  const { name, email, isCalculated } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name,
        email,
      },
      isCalculated: isCalculated,
    },
  });
};

module.exports = getCurrent;
